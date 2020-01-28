const { groupBy, formatToSeconds } = require('./helpers')
const { CATEGORY } = require('./constants')
const { ApexTestSuite } = require('./ApexTestSuite')

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

  async generateTestSuite (testCases = []) {
    const failures = testCases.reduce((sum, testCase) => sum + (testCase.category === CATEGORY.FAILURE ? 1 : 0), 0)
    const time = testCases.reduce((sum, testCase) => sum + testCase.time, 0)

    this.addTestSuite(
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
  }

  async generateFromTestCases (...testCases) {
    const promises = []
    const byClassname = groupBy(testCases, 'classname')

    Object.keys(byClassname).forEach(key => {
      promises.push(this.generateTestSuite(byClassname[key]))
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

  toJest () {
    const firstSuite = this.testSuites[0] || {
      timestamp: new Date().toISOString()
    }
    const numFailedTestSuites = this.testSuites.reduce((sum, suite) => sum + (suite.isFailed() ? 1 : 0), 0)
    this.fixTimestampsToDuration()

    return {
      numFailedTestSuites,
      numFailedTests: this.failures,
      numPassedTestSuites: this.testSuites.length - numFailedTestSuites,
      numPassedTests: this.tests - this.failures,
      numPendingTestSuites: 0,
      numPendingTests: 0,
      numRuntimeErrorTestSuites: 0,
      numTodoTests: 0,
      numTotalTestSuites: this.testSuites.length,
      numTotalTests: this.tests,
      openHandles: [],
      snapshot: {
        added: 0,
        didUpdate: false,
        failure: false,
        filesAdded: 0,
        filesRemoved: 0,
        filesUnmatched: 0,
        filesUpdated: 0,
        matched: 0,
        total: 0,
        unchecked: 0,
        uncheckedKeysByFile: [],
        unmatched: 0,
        updated: 0
      },
      startTime: new Date(firstSuite.timestamp).getTime(),
      success: this.failures === 0,
      testResults: this.testSuites.map(testSuite => testSuite.toJest()),
      wasInterrupted: false,
      coverageMap: {}
    }
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
        testsuite: this.testSuites.map(testSuite => testSuite.toJunit().testsuite)
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

module.exports = {
  ApexTestSuites
}
