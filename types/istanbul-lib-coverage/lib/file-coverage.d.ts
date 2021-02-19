declare module 'istanbul-lib-coverage/lib/file-coverage' {
  export interface FileCoverageTotals {
    total: number
    covered: number
    skipped: number
    pct: number
  }

  export class CoverageSummary {
    lines: FileCoverageTotals
    functions: FileCoverageTotals
    statements: FileCoverageTotals
    branches: FileCoverageTotals
    merge (): CoverageSummary
    toJSON (): any
    isEmpty(): boolean
    data: any
  }

  export class FileCoverage {
    constructor(pathOrObj: Record<string, any> | FileCoverage | string)

    all?: boolean
    data: FileCoverage
    path: string
    statementMap: Record<string, any>
    fnMap: Record<string, any>
    branchMap: Record<string, any>
    s: Record<string, any>
    f: Record<string, any>
    b: Record<string, any>

    getLineCoverage (): Record<string | number, any>
    getUncoveredLines (): number[]
    getBranchCoverageByLine (): Record<string | number, any>
    toJSON (): FileCoverage
    merge (other: FileCoverage): void
    computeSimpleTotals (property?: string | number): FileCoverageTotals
    computeBranchTotals (): FileCoverageTotals
    resetHits (): void
    toSummary (): CoverageSummary
  }
}
