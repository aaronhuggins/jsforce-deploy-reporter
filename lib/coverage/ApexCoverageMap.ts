import { CoverageMap } from 'istanbul-lib-coverage/lib/coverage-map'
import { getApexFileCoverage } from './helpers'

export class ApexCoverageMap extends CoverageMap {
  constructor (apexCoverage: any[] = [], options: any = {}) {
    super()
    this.apexCoverage = apexCoverage
    this.options = options
  }

  apexCoverage: any[]
  options: any

  async generate () {
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
