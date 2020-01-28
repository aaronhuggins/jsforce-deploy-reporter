const libReport = require('istanbul-lib-report')
const reports = require('istanbul-reports')
const { ApexCoverageMap } = require('./coverage')
const { ApexTestResult } = require('./testsuites')
const { VinylWriter } = require('./vinyl-writer')

class JSforceReporter {
  constructor (details, options = {}, transform = false) {
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

    if (this.options.outputRoot === undefined) {
      this.options.outputRoot = './'
    }

    this.transform = transform
  }

  async report () {
    const context = libReport.createContext({
      dir: this.options.outputRoot,
      watermarks: this.options.watermarks,
      coverageMap: await new ApexCoverageMap(this.details.runTestResult.codeCoverage || [], this.options).generate()
    })
    const junit = this.options.reporters.indexOf('junit')
    const junitonly = this.options.reporters.indexOf('junitonly')
    const jeststare = this.options.reporters.indexOf('jeststare')

    if (this.transform) {
      context.data.writer = new VinylWriter('./', this.transform)
    }

    if (junit >= 0 || junitonly >= 0 || jeststare >= 0) {
      if (junit >= 0) {
        this.options.reporters.splice(this.options.reporters.indexOf('junit'), 1)
      }
      if (junitonly >= 0) {
        this.options.reporters.splice(this.options.reporters.indexOf('junitonly'), 1)
      }
      if (jeststare >= 0) {
        this.options.reporters.splice(this.options.reporters.indexOf('jeststare'), 1)
      }

      if (typeof this.options.junitLevel === 'undefined') {
        this.options.junitLevel = 'all'
      }
    }

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

    if (typeof this.options.junitLevel === 'string') {
      const apexTestResult = await new ApexTestResult(this.details, this.options, this.transform).generate()

      if (junit >= 0 || junitonly >= 0) {
        apexTestResult.write(junitonly === -1)
      }

      if (jeststare >= 0) {
        apexTestResult.jeststare()
      }
    }
  }
}

module.exports = {
  JSforceReporter
}
