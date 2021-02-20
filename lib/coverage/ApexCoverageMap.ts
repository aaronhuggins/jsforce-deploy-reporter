import { CoverageMap } from 'istanbul-lib-coverage/lib/coverage-map'
import { getApexFileCoverage } from './helpers'
import type { FileCoverage, FileCoverageData } from 'istanbul-lib-coverage/lib/file-coverage'

export class ApexCoverageMap extends CoverageMap {
  constructor (apexCoverage: any[] = [], options: any = {}) {
    super({})
    this.apexCoverage = apexCoverage
    this.options = options
  }

  apexCoverage: any[]
  options: any

  addFileCoverage (pathOrObject: string | FileCoverage | FileCoverageData): void {
    super.addFileCoverage(pathOrObject)
  }

  async generate (): Promise<CoverageMap> {
    const promises = []

    this.apexCoverage.forEach(coverage => {
      promises.push(getApexFileCoverage(coverage, this.options))
    })

    const apexFileCoverages = await Promise.all(promises)

    apexFileCoverages.forEach(apexFileCoverage => {
      this.addFileCoverage(apexFileCoverage)
    })

    return this
  }
}
