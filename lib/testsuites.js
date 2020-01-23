const xml2js = require('xml2js')
const uuidv4 = require('uuid/v4')
const { groupBy } = require('./helpers')
const fs = require('fs')

const DEFAULT_TIME_MS = 300

class ApexTestResult {
  constructor (deployDetails = {}, options = {}) {
    this.deployDetails = deployDetails
    this.options = options
    this.components = {
      messages: [],
      testsuites: new ApexTestSuites({ name: 'Salesforce Component Messages' })
    }
    this.tests = {
      messages: [],
      testsuites: new ApexTestSuites({ name: 'Salesforce Test Results' })
    }
    if (this.options.completedDate !== undefined) {
      if (typeof this.options.completedDate === 'string') {
        this.options.completedDate = new Date(this.options.completedDate)
      }

      this.components.testsuites.completed = this.options.completedDate
      this.tests.testsuites.completed = this.options.completedDate
    }
  }

  async generate () {
    const componentPromises = []
    const testPromises = []

    if (
      this.options.junitLevel === 'components' ||
      this.options.junitLevel === 'all'
    ) {
      if (Array.isArray(this.deployDetails.componentFailures)) {
        this.components.testsuites.tests =
          this.components.testsuites.tests +
          this.deployDetails.componentFailures.length
        this.components.testsuites.failures = this.deployDetails.componentFailures.length

        this.deployDetails.componentFailures.forEach(componentMessage =>
          componentPromises.push(getApexComponentMessage(componentMessage))
        )
      }

      if (Array.isArray(this.deployDetails.componentSuccesses)) {
        this.components.testsuites.tests =
          this.components.testsuites.tests +
          this.deployDetails.componentSuccesses.length

        this.deployDetails.componentSuccesses.forEach(componentMessage =>
          componentPromises.push(getApexComponentMessage(componentMessage))
        )
      }

      this.components.testsuites.time =
        this.components.testsuites.tests * DEFAULT_TIME_MS

      this.components.messages.push(...(await Promise.all(componentPromises)))
      await this.components.testsuites.generateFromTestCases(
        ...(await Promise.all(
          this.components.messages.map(message => getApexTestCase(message))
        ))
      )
    }

    if (
      this.options.junitLevel === 'tests' ||
      this.options.junitLevel === 'all'
    ) {
      const {
        numFailures,
        numTestsRun,
        totalTime
      } = this.deployDetails.runTestResult

      this.tests.testsuites.failures = parseFloat(numFailures)
      this.tests.testsuites.tests = parseFloat(numTestsRun)
      this.tests.testsuites.time = parseFloat(totalTime)
      this.components.testsuites.completed = new Date(
        this.components.testsuites.completed.getTime() -
          this.tests.testsuites.time
      )

      if (Array.isArray(this.deployDetails.runTestResult.failures)) {
        this.deployDetails.runTestResult.failures.forEach(testMessage => {
          testPromises.push(getApexTestMessage(testMessage))
        })
      }

      if (Array.isArray(this.deployDetails.runTestResult.successes)) {
        this.deployDetails.runTestResult.successes.forEach(testMessage => {
          testPromises.push(getApexTestMessage(testMessage))
        })
      }

      this.tests.messages.push(...(await Promise.all(testPromises)))
      await this.tests.testsuites.generateFromTestCases(
        ...(await Promise.all(
          this.tests.messages.map(message => getApexTestCase(message))
        ))
      )
    }

    return this
  }

  write (json = false) {
    const builder = new xml2js.Builder({
      renderOpts: {
        pretty: true,
        indent: '    ',
        newline: '\n'
      },
      xmldec: {
        version: '1.0',
        encoding: 'UTF-8'
      },
      allowSurrogateChars: true
    })

    fs.mkdirSync(this.options.outputRoot, { recursive: true })

    if (
      this.options.junitLevel === 'components' ||
      this.options.junitLevel === 'all'
    ) {
      const componentXml = builder.buildObject(
        this.components.testsuites.toJunit()
      )

      fs.writeFileSync(
        this.options.outputRoot + '/TEST-components.xml',
        componentXml,
        'utf8'
      )
      if (json) {
        fs.writeFileSync(
          this.options.outputRoot + '/MESSAGES-components.json',
          JSON.stringify(this.components.messages, null, 2),
          'utf8'
        )
      }
    }

    if (
      this.options.junitLevel === 'tests' ||
      this.options.junitLevel === 'all'
    ) {
      const testXml = builder.buildObject(this.tests.testsuites.toJunit())

      fs.writeFileSync(
        this.options.outputRoot + '/TEST-results.xml',
        testXml,
        'utf8'
      )
      if (json) {
        fs.writeFileSync(
          this.options.outputRoot + '/MESSAGES-results.json',
          JSON.stringify(this.tests.messages, null, 2),
          'utf8'
        )
      }
    }
  }
}

const getApexComponentMessage = async function getApexComponentResult (
  component = {}
) {
  return new ApexComponentMessage(component)
}

const getApexTestMessage = async function getApexComponentResult (
  component = {}
) {
  return new ApexTestMessage(component)
}

const getApexTestCase = async function getApexTestCase (message) {
  return message.toApexTestCase()
}

const formatToSeconds = function (milliseconds = 1) {
  const stringified = (milliseconds * 0.001).toFixed(3)
  const [part1, part2] = stringified.split('.')

  return part1 + '.' + part2.padEnd(3, '0')
}

class ApexComponentMessage {
  constructor (componentMessage = {}) {
    Object.assign(this, componentMessage)

    this.normalize()

    if (this.success) {
      this.category = 'SUCCESS'
    } else {
      this.category = 'FAILURE'
    }
  }

  toApexTestCase () {
    return new ApexTestCase({
      id: this.id,
      classname:
        this.componentType === ''
          ? this.fullName.replace('.', '-')
          : this.componentType,
      name: this.fullName + ' - ' + this.fileName,
      time: DEFAULT_TIME_MS,
      category: this.category,
      original: this
    })
  }

  normalize () {
    const booleans = ['changed', 'created', 'deleted', 'success']

    booleans.forEach(key => {
      if (typeof this[key] !== 'boolean') {
        switch (this[key].toString()) {
          case 'true':
            this[key] = true
            break
          case 'false':
            this[key] = false
            break
          default:
            this[key] = false
            break
        }
      }
    })

    this.id = this.id === undefined ? uuidv4().replace('-', '') : this.id
  }
}

class ApexTestMessage {
  constructor (testMessage = {}) {
    Object.assign(this, testMessage)

    this.normalize()

    if (this.message || this.stackTrace) {
      this.category = 'FAILURE'
    } else {
      this.category = 'SUCCESS'
    }
  }

  toApexTestCase () {
    return new ApexTestCase({
      id: uuidv4().replace(/-/gu, ''),
      classname: this.name,
      name: this.methodName,
      time: this.time,
      category: this.category,
      original: this
    })
  }

  normalize () {
    if (typeof this.namespace !== 'string') {
      delete this.namespace
    }

    if (typeof this.time === 'string') {
      this.time = parseFloat(this.time)
    }
  }
}

class ApexTestSuites {
  constructor (scanData = {}, testSuites = []) {
    Object.assign(this, scanData)

    this.failures = this.failures === undefined ? 0 : this.failures
    this.tests = this.tests === undefined ? 0 : this.tests
    this.time = this.time === undefined ? 0 : this.time
    this.name = this.name === undefined ? 'Salesforce Test Suites' : this.name

    this.normalize()

    this.testSuites.push(...testSuites)
  }

  async generateFromTestCases (...testCases) {
    const promises = []
    const groupByClassname = groupBy(testCases, 'classname')
    const __this = this

    Object.keys(groupByClassname).forEach(key => {
      promises.push(
        (async function generateTestSuite (testCases = []) {
          const failures = testCases.reduce(
            (sum, testCase) => sum + (testCase.category === 'FAILURE' ? 1 : 0),
            0
          )
          const time = testCases.reduce(
            (sum, testCase) => sum + testCase.time,
            0
          )

          __this.addTestSuite(
            new ApexTestSuite(
              {
                id: key,
                name: key,
                failures,
                time,
                tests: testCases.length
              },
              testCases
            )
          )
        })(groupByClassname[key])
      )
    })

    return Promise.all(promises)
  }

  addTestSuite (...testSuites) {
    this.testSuites.push(...testSuites)

    this.fixTimestampsToDuration()
  }

  fixTimestampsToDuration () {
    let timestamp = new Date(this.completed.getTime() - this.time)

    this.testSuites.forEach(testSuite => {
      testSuite.timestamp = timestamp.toISOString()
      timestamp = new Date(timestamp.getTime() + testSuite.time)
    })
  }

  toJunit () {
    this.fixTimestampsToDuration()

    return {
      testsuites: {
        $: {
          id: this.id,
          name: this.name,
          tests: this.tests,
          failures: this.failures,
          time: formatToSeconds(this.time)
        },
        testsuite: this.testSuites.map(
          testSuite => testSuite.toJunit().testsuite
        )
      }
    }
  }

  normalize () {
    const numbers = ['failures', 'time', 'tests']

    numbers.forEach(key => {
      if (typeof this[key] === 'string') {
        this[key] = parseFloat(this.scanData[key])
      }
    })

    this.id = Date.now().toString() + '__runTestResult'

    if (!Array.isArray(this.testSuites)) {
      this.testSuites = []
    }

    if (this.completed === undefined) {
      this.completed = new Date()
    }

    if (typeof this.completed === 'string') {
      this.completed = new Date(this.completed)
    }
  }
}

class ApexTestSuite {
  constructor (testData = {}, testCases = []) {
    Object.assign(this, testData)

    this.normalize()

    this.testCases.push(...testCases)
  }

  addTestCase (...testCases) {
    this.testCases.push(...testCases)
  }

  toJunit () {
    return {
      testsuite: {
        $: {
          id: this.id,
          name: this.name,
          errors: this.errors,
          failures: this.failures,
          skipped: this.skipped,
          timestamp: this.timestamp,
          time: formatToSeconds(this.time),
          tests: this.tests
        },
        testcase: this.testCases.map(testCase => testCase.toJunit().testcase)
      }
    }
  }

  normalize () {
    const numbers = ['errors', 'failures', 'skipped', 'time', 'tests']

    if (this.errors === undefined) {
      this.errors = this.failures
    }

    if (this.skipped === undefined) {
      this.skipped = 0
    }

    numbers.forEach(key => {
      if (typeof this[key] === 'string') {
        this[key] = parseFloat(this[key])
      }
    })

    this.timestamp = new Date().toISOString()
    this.id = Date.now().toString() + '__' + this.id

    if (!Array.isArray(this.testCases)) {
      this.testCases = []
    }
  }
}

class ApexTestCase {
  constructor (testData = {}) {
    Object.assign(this, testData)

    this.normalize()
  }

  toJunit () {
    const testcase = {
      $: {
        id: this.id,
        classname: this.classname,
        name: this.name,
        time: formatToSeconds(this.time)
      }
    }

    if (this.category === 'FAILURE') {
      testcase.failure = {
        $: { message: this.original.message, type: 'ERROR' },
        ...this.original
      }
    }

    return {
      testcase
    }
  }

  normalize () {
    if (typeof this.time === 'string') {
      this.time = parseFloat(this.time)
    }

    this.id = Date.now().toString() + '__' + this.id
  }
}

module.exports = {
  ApexTestResult
}
