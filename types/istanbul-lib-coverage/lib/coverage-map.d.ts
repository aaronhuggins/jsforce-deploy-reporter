declare module 'istanbul-lib-coverage/lib/coverage-map' {
  import { CoverageSummary, FileCoverage } from 'istanbul-lib-coverage/lib/file-coverage'

  export class CoverageMap {
    constructor (map?: any)

    data: Record<string, any>

    merge(obj: CoverageMap): void
    filter(filterCB: (key: string | number) => boolean): void
    files (): string[]
    fileCoverageFor (file: string): FileCoverage
    addFileCoverage (fc: FileCoverage): void
    getCoverageSummary (): CoverageSummary
  }
}
