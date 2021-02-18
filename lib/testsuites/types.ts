export interface JunitCase {
  $: {
    id: string
    classname: string
    name: string
    time: string
  }
  failure?: {
    $: {
      message: string
      type: 'ERROR'
    }
    _: string
  }
}

export interface JunitSuite {
  testsuite: {
    $: {
      id: string
      name: string
      errors: number
      failures: number
      skipped: number
      timestamp: string
      time: string
      tests: number
    }
    testcase: JunitCase[]
  }
}

export interface JunitSuites {
  testsuites: {
    $: {
      id: string
      name: string
      tests: number
      failures: number
      time: string
    }
    testsuite: Array<JunitSuite['testsuite']>
  }
}

export interface JestCase {
  ancestorTitles: string[]
  duration: number
  failureMessages: any[]
  fullName: string
  location: any
  numPassingAsserts: number
  status: string
  title: string
}

export interface JestSuite {
  failureMessage: string
  numFailingTests: number
  numPassingTests: number
  numPendingTests: number
  numTodoTests: number
  perfStats: {
    end: number
    start: number
  }
  snapshot: {
    added: number
    fileDeleted: boolean
    matched: number
    unchecked: number
    unmatched: number
    updated: number
    uncheckedKeys: string[]
  }
  testFilePath: string
  testResults: JestCase[]
  skipped: boolean
  leaks: boolean
}

export interface JestSuites {
  numFailedTestSuites: number
  numFailedTests: number
  numPassedTestSuites: number
  numPassedTests: number
  numPendingTestSuites: number
  numPendingTests: number
  numRuntimeErrorTestSuites: number
  numTodoTests: number
  numTotalTestSuites: number
  numTotalTests: number
  openHandles: number[]
  snapshot: {
    added: number
    didUpdate: boolean
    failure: boolean
    filesAdded: number
    filesRemoved: number
    filesUnmatched: number
    filesUpdated: number
    matched: number
    total: number
    unchecked: number
    uncheckedKeysByFile: string[]
    unmatched: number
    updated: number
  }
  startTime: number
  success: boolean
  testResults: JestSuite[]
  wasInterrupted: boolean
  coverageMap: Record<string, any>
}
