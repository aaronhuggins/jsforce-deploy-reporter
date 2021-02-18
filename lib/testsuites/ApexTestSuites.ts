import { groupBy, formatToSeconds } from './helpers'
import { CATEGORY } from './constants'
import { ApexTestSuite } from './ApexTestSuite'
import { ApexTestCase } from './ApexTestCase'
import { JestSuites, JunitSuites } from './types'

export class ApexTestSuites {
  constructor (scanData: any = {}, testSuites: ApexTestSuite[] = []) {
    Object.assign(this, scanData)

    this.failures = this.failures === undefined ? 0 : this.failures
    this.tests = this.tests === undefined ? 0 : this.tests
    this.time = this.time === undefined ? 0 : this.time
    this.name = this.name === undefined ? 'Salesforce Test Suites' : this.name

    const numbers = ['failures', 'time', 'tests']

    numbers.forEach(key => {
      if (typeof this[key] === 'string') {
        this[key] = parseFloat(this[key])
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

    this.testSuites.push(...testSuites)
  }

  name: string
  id: string
  failures: number
  tests: number
  time: number
  completed: Date
  testSuites: ApexTestSuite[]

  /** Generate a test suite from test cases. */
  async generateTestSuite (className: string, testCases: ApexTestCase[] = []): Promise<void> {
    const failures = testCases.reduce((sum, testCase) => sum + (testCase.category === CATEGORY.FAILURE ? 1 : 0), 0)
    const time = testCases.reduce((sum, testCase) => sum + testCase.time, 0)

    this.addTestSuite(
      new ApexTestSuite(
        {
          id: className,
          name: className,
          failures,
          time,
          tests: testCases.length
        },
        testCases
      )
    )
  }

  /** Generate all test suites by category from test cases. */
  async generateFromTestCases (...testCases: ApexTestCase[]): Promise<void> {
    const promises: Promise<void>[] = []
    const byClassname = groupBy(testCases, 'classname')

    Object.keys(byClassname).forEach(key => {
      promises.push(this.generateTestSuite(key, byClassname[key]))
    })

    await Promise.all(promises)
  }

  /** Add one or more test suites. */
  addTestSuite (...testSuites): void {
    this.testSuites.push(...testSuites)

    this.fixTimestampsToDuration()
  }

  /** Fix time stamps according to duration. */
  fixTimestampsToDuration (): void {
    let timestamp = new Date(this.completed.getTime() - this.time)

    this.testSuites.forEach(testSuite => {
      testSuite.timestamp = timestamp.toISOString()
      timestamp = new Date(timestamp.getTime() + testSuite.time)
    })
  }

  toJest (): JestSuites {
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

  toJunit (): JunitSuites {
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
}
