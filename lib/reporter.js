const libReport = require('istanbul-lib-report')
const reports = require('istanbul-reports')
const { ApexCoverageMap } = require('./coverage')

class JSforceReporter {
  constructor (details, options = {}) {
    this.options = options
    this.details = details
    if (typeof this.options.reporter === 'string') {
      this.options.reporters = [this.options.reporter]
    }

    if (typeof this.options.reporters === 'string') {
      this.options.reporters = [this.options.reporters]
    }

    if (!Array.isArray(this.options.reporters)) {
      this.options.reporters = ['text']
    }
  }

  async report () {
    const context = libReport.createContext({
      dir: this.options.outputRoot,
      watermarks: this.options.watermarks,
      coverageMap: await new ApexCoverageMap(
        this.details.runTestResult.codeCoverage || [],
        this.options
      ).generate()
    })

    this.options.reporters.forEach(reporter => {
      reports
        .create(reporter, {
          skipEmpty: false,
          skipFull: false,
          projectRoot: this.options.packageRoot,
          maxCols: 100
        })
        .execute(context)
    })
  }
}

module.exports = {
  JSforceReporter
}
