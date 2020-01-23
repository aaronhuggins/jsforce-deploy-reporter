declare module 'jsforce-deploy-reporter' {
  interface JSforceReporterOptions {
    packageRoot: string
    outputRoot?: string
    detectExecutableLines?: boolean
    reporter?: string
    reporters?: Array<string>
    watermarks?: {
      lines?: [number, number]
      statements?: [number, number]
    }
    junitLevel?: 'tests' | 'components' | 'all'
  }

  interface DeployDetails {
    componentFailures?: DeployMessage[]
    componentSuccesses?: DeployMessage[]
    runTestResult?: {
      codeCoverage?: CodeCoverageResult[]
      failures?: RunTestFailure[]
      successes?: RunTestSuccess[]
      numFailures?: number
      numTestsRun?: number
      totalTime?: number
    }
  }

  interface DeployMessage {
    changed: boolean
    componentType: string
    created: boolean
    createdDate: string
    deleted: boolean
    fileName: string
    fullName: string
    id: string
    success: boolean
    columnNumber?: number
    lineNumber?: number
    problem?: string
    problemType?: 'Warning' | 'Error'
  }

  interface CodeCoverageResult {
    locationsNotCovered?: {
      column: number
      line: number
      numExecutions: number
      time: number
    }[]
    name: string
    namespace?: string
    numLocations: number
    numLocationsNotCovered: number
    type: 'Class' | 'Trigger'
  }

  interface RunTestSuccess {
    id: string
    methodName: string
    name: string
    namespace?: string
    time: number
  }

  interface RunTestFailure extends RunTestSuccess {
    message: string
    stackTrace: string
  }

  class JSforceReporter {
    constructor (details: DeployDetails, options: JSforceReporterOptions)

    report (): Promise<void>
  }

  module.exports = {
    JSforceReporter
  }
}
