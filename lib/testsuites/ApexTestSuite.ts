import { formatToSeconds } from './helpers'
import { CATEGORY } from './constants'
import { ApexTestCase } from './ApexTestCase'
import { JestSuite, JunitSuite } from './types'

export class ApexTestSuite {
  constructor (testData: any = {}, testCases: ApexTestCase[] = []) {
    Object.assign(this, testData)

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

    this.testCases.push(...testCases)
  }

  name: string
  errors: number
  failures: number
  skipped: number
  time: number
  tests: number
  timestamp: string
  id: string
  testCases: ApexTestCase[]

  /** Add one or more test cases. */
  addTestCase (...testCases: ApexTestCase[]): void {
    this.testCases.push(...testCases)
  }

  /** Has the test suite failed? */
  isFailed (): boolean {
    let failed = false

    this.testCases.forEach(testCase => {
      if (!failed && testCase.category === CATEGORY.FAILURE) {
        failed = true
      }
    })

    return failed
  }

  toJest (): JestSuite {
    const start = new Date(this.timestamp).getTime()

    return {
      failureMessage: '',
      numFailingTests: this.failures,
      numPassingTests: this.tests,
      numPendingTests: 0,
      numTodoTests: 0,
      perfStats: {
        end: start + this.time,
        start
      },
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unchecked: 0,
        unmatched: 0,
        updated: 0,
        uncheckedKeys: []
      },
      testFilePath: this.name,
      testResults: this.testCases.map(testCase => testCase.toJest()),
      skipped: false,
      leaks: false
    }
  }

  toJunit (): JunitSuite {
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
}
