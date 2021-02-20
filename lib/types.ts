export interface JSforceReporterOptions {
  useApexParser?: boolean
  packageRoot?: string
  outputRoot?: string
  detectExecutableLines?: boolean
  reporter?: string
  reporters?: string[]
  completedDate?: string
  watermarks?: {
    lines?: [number, number]
    statements?: [number, number]
  }
  junitLevel?: 'tests' | 'components' | 'all'
}
