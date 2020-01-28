const { CoverageMap } = require('istanbul-lib-coverage/lib/coverage-map')
const { getApexFileCoverage } = require('./helpers')

class ApexCoverageMap extends CoverageMap {
  constructor (apexCoverage = [], options = {}) {
    super()
    this.apexCoverage = apexCoverage
    this.options = options
  }

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

module.exports = {
  ApexCoverageMap
}
