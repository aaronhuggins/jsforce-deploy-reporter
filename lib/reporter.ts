import * as libReport from 'istanbul-lib-report'
import * as reports from 'istanbul-reports'
import { ApexCoverageMap } from './coverage'
import { ApexTestResult } from './testsuites'
import { VinylWriter } from './vinyl'
import type { DeployDetails } from './testsuites/types'
import type { JSforceReporterOptions } from './types'
import type { Transform } from 'stream'

export class JSforceReporter {
  constructor (details: DeployDetails, options: JSforceReporterOptions = {}, transform: false | Transform = false) {
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

  details: DeployDetails
  options: JSforceReporterOptions
  transform: false | Transform

  async report (): Promise<void> {
    const context = libReport.createContext({
      dir: this.options.outputRoot,
      watermarks: this.options.watermarks,
      coverageMap: await new ApexCoverageMap(
        Array.isArray(this.details.runTestResult.codeCoverage)
          ? this.details.runTestResult.codeCoverage
          : [],
        this.options
      ).generate()
    })
    const junit = this.options.reporters.indexOf('junit')
    const junitonly = this.options.reporters.indexOf('junitonly')
    const jeststare = this.options.reporters.indexOf('jeststare')

    if (this.transform !== false) {
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

    this.options.reporters.forEach((reporter: any) => {
      reports
        .create(reporter, {
          skipEmpty: false,
          skipFull: false,
          projectRoot: this.options.packageRoot,
          maxCols: 100
        })
        // @ts-expect-error Visitor does indeed have an execute method, Visitor classdeclaration is wrong.
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
