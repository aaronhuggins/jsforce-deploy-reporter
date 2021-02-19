export interface JSforceReporterOptions {
  packageRoot?: string
  outputRoot?: string
  detectExecutableLines?: boolean
  reporter?: string
  reporters?: Array<string>
  completedDate?: string
  watermarks?: {
    lines?: [number, number]
    statements?: [number, number]
  }
  junitLevel?: 'tests' | 'components' | 'all'
}