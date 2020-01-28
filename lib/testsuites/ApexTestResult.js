const processor = require('jest-stare')
const fs = require('fs')
const { VinylProcessor } = require('../vinyl')
const { DEFAULT_TIME_MS } = require('./constants')
const { ApexComponentMessage, ApexTestMessage } = require('./messages')
const { ApexTestSuites } = require('./ApexTestSuites')
const { write } = require('./write')

class ApexTestResult {
  constructor (deployDetails = {}, options = {}, transform = false) {
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

    this.transform = transform
    this.write = write
  }

  async generate () {
    const componentPromises = []
    const testPromises = []

    if (this.options.junitLevel === 'components' || this.options.junitLevel === 'all') {
      if (Array.isArray(this.deployDetails.componentFailures)) {
        this.components.testsuites.tests =
          this.components.testsuites.tests + this.deployDetails.componentFailures.length
        this.components.testsuites.failures = this.deployDetails.componentFailures.length

        this.deployDetails.componentFailures.forEach(componentMessage =>
          componentPromises.push(new ApexComponentMessage(componentMessage))
        )
      }

      if (Array.isArray(this.deployDetails.componentSuccesses)) {
        this.components.testsuites.tests =
          this.components.testsuites.tests + this.deployDetails.componentSuccesses.length

        this.deployDetails.componentSuccesses.forEach(componentMessage =>
          componentPromises.push(new ApexComponentMessage(componentMessage))
        )
      }

      this.components.testsuites.time = this.components.testsuites.tests * DEFAULT_TIME_MS

      this.components.messages.push(...(await Promise.all(componentPromises)))
      await this.components.testsuites.generateFromTestCases(
        ...(await Promise.all(this.components.messages.map(message => message.toApexTestCase())))
      )
    }

    if (this.options.junitLevel === 'tests' || this.options.junitLevel === 'all') {
      const { numFailures, numTestsRun, totalTime } = this.deployDetails.runTestResult

      this.tests.testsuites.failures = parseFloat(numFailures)
      this.tests.testsuites.tests = parseFloat(numTestsRun)
      this.tests.testsuites.time = parseFloat(totalTime)
      this.components.testsuites.completed = new Date(
        this.components.testsuites.completed.getTime() - this.tests.testsuites.time
      )

      if (Array.isArray(this.deployDetails.runTestResult.failures)) {
        this.deployDetails.runTestResult.failures.forEach(testMessage => {
          testPromises.push(new ApexTestMessage(testMessage))
        })
      }

      if (Array.isArray(this.deployDetails.runTestResult.successes)) {
        this.deployDetails.runTestResult.successes.forEach(testMessage => {
          testPromises.push(new ApexTestMessage(testMessage))
        })
      }

      this.tests.messages.push(...(await Promise.all(testPromises)))
      await this.tests.testsuites.generateFromTestCases(
        ...(await Promise.all(this.tests.messages.map(message => message.toApexTestCase())))
      )
    }

    return this
  }

  jeststare () {
    const mergedTestSuites = new ApexTestSuites({
      name: 'Salesforce Component and Test Results',
      tests: this.components.testsuites.tests + this.tests.testsuites.tests,
      failures: this.components.testsuites.failures + this.tests.testsuites.failures,
      time: this.components.testsuites.time + this.tests.testsuites.time,
      testSuites: this.components.testsuites.testSuites.concat(this.tests.testsuites.testSuites)
    })
    const coverageLink = fs.existsSync(this.options.outputRoot + '/lcov-report/index.html')
      ? '../lcov-report/index.html'
      : undefined
    const jestStareConfig = {
      log: false,
      reportTitle: mergedTestSuites.name,
      resultDir: this.options.outputRoot + '/jest-stare/',
      coverageLink
    }

    if (this.transform) {
      const vinylProcessor = new VinylProcessor(this.transform, mergedTestSuites.toJest(), jestStareConfig)

      vinylProcessor.generate()
    } else {
      processor(mergedTestSuites.toJest(), jestStareConfig)
    }
  }

  write (json = false) {}
}

module.exports = {
  ApexTestResult
}
