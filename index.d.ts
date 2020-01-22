declare module 'jsforce-deploy-reporter' {
  interface JSforceReporterOptions {
    packageRoot: string
    outputRoot?: string
    detectExecutableLines?: boolean
    report?: 'lcovonly' | 'cobertura' | 'html' | string
    reports?: Array<'lcovonly' | 'cobertura' | 'html' | string>
    watermarks?: {
      lines?: [number, number]
      statements?: [number, number]
    }
  }

  class JSforceReporter {
    constructor (details: any, opts: JSforceReporterOptions)

    report (): Promise<void>
  }

  module.exports = {
    JSforceReporter
  }
}
