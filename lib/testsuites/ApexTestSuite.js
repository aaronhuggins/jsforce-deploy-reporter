const { formatToSeconds } = require('./helpers')
const { CATEGORY } = require('./constants')

class ApexTestSuite {
  constructor (testData = {}, testCases = []) {
    Object.assign(this, testData)

    this.normalize()

    this.testCases.push(...testCases)
  }

  addTestCase (...testCases) {
    this.testCases.push(...testCases)
  }

  isFailed () {
    let failed = false

    this.testCases.forEach(testCase => {
      if (!failed && testCase.category === CATEGORY.FAILURE) {
        failed = true
      }
    })

    return failed
  }

  toJest () {
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

module.exports = {
  ApexTestSuite
}
