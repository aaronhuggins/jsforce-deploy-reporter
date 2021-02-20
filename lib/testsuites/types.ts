import { ApexTestSuites } from './ApexTestSuites'
import { ApexComponentMessage } from './messages'

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

export interface DeployMessage {
  changed: boolean
  columnNumber: number
  componentType: string
  created: boolean
  createdDate: string
  deleted: boolean
  fileName: string
  fullName: string
  id: string
  lineNumber: number
  problem?: string
  problemType?: 'Warning' | 'Error'
  success: boolean
}

export interface FileProperties {
  createdById: string
  createdByName: string
  createdDate: string
  fileName: string
  fullName: string
  id: string
  lastModifiedById: string
  lastModifiedByName: string
  lastModifiedDate: string
  manageableState: string
  namespacePrefix: string
  type: string
}

export interface RetrieveMessage {
  fileName: string
  problem: string
}

export interface RetrieveResult {
  done: boolean
  errorMessage: string
  errorStatusCode: string
  fileProperties: FileProperties[]
  id: string
  messages: RetrieveMessage[]
  status: string
  success: boolean
  zipFile?: string
}

export interface CodeLocation {
  column: number | string
  line: number | string
  numExecutions: number | string
  time: number | string
}

export interface CodeCoverageResult {
  dmlInfo: CodeLocation[]
  id: string
  locationsNotCovered: CodeLocation[]
  methodInfo: CodeLocation[]
  name: string
  namespace: string
  numLocations: number | string
  soqlInfo: CodeLocation[]
  type: string
}

export interface CodeCoverageWarning {
  id: string
  message: string
  name: string
  namespace: string
}

export interface RunTestFailure {
  id: string
  message: string
  methodName: string
  name: string
  namespace: string
  seeAllData: boolean
  stackTrace: string
  time: number | string
  type: string
}

export interface FlowCoverageResult {
  elementsNotCovered: string
  flowId: string
  flowName: string
  flowNamespace: string
  numElements: number | string
  numElementsNotCovered: number | string
  processType: string
}

export interface FlowCoverageWarning {
  flowId: string
  flowName: string
  flowNamespace: string
  message: string
}

export interface RunTestSuccess {
  id: string
  methodName: string
  name: string
  namespace: string
  seeAllData: boolean
  time: number | string
}

export interface RunTestResult {
  apexLogId: string
  codeCoverage: CodeCoverageResult[]
  codeCoverageWarnings: CodeCoverageWarning[]
  failures: RunTestFailure[]
  flowCoverage: FlowCoverageResult[]
  flowCoverageWarnings: FlowCoverageWarning[]
  numFailures: number | string
  numTestsRun: number | string
  successes: RunTestSuccess[]
  totalTime: number | string
}

export interface DeployDetails {
  componentFailures: DeployMessage[]
  componentSuccesses: DeployMessage[]
  retrieveResult: RetrieveResult
  runTestResult: RunTestResult
}

export interface ApexResult {
  messages: ApexComponentMessage[]
  testsuites: ApexTestSuites
}
