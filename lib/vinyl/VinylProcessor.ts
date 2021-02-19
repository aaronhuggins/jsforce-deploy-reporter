import * as fs from 'fs'
import { Processor } from 'jest-stare/lib/processor/Processor'
import { Constants } from 'jest-stare/lib/processor/Constants'
import { Dependencies } from 'jest-stare/lib/processor/Dependencies'
import * as mustache from 'mustache'
import Vinyl from 'vinyl'
import type { Transform } from 'stream'
import type { IThirdPartyDependency } from 'jest-stare/lib/processor/doc/IThirdPartyDependency'

interface JestStareSubstitute {
  jestStareConfig: {
    resultJson: string
    jestStareConfigJson: string
    jestGlobalConfigJson: string
    resultHtml: string
    report: boolean
  }
  rawResults: string
  rawJestStareConfig: string
  globalConfig: string
}

// @ts-expect-error Ignore this error because jest-stare incorrectly declares class.
export class VinylProcessor extends Processor {
  constructor (transform: Transform, results: any, jestStareConfig: any, processorOptions?: any) {
    super(results, jestStareConfig, processorOptions)

    this.transform = transform
  }

  transform: Transform

  private writeVinyl (path: string, str: string): void {
    this.transform.push(
      new Vinyl({
        path,
        contents: Buffer.from(str, 'utf8')
      })
    )
  }

  private generateReport (this: VinylProcessor, resultDir: string, substitute: JestStareSubstitute): void {
    const obtainWebFile = (this as any).obtainWebFile
    const obtainJsRenderFile = (this as any).obtainJsRenderFile
    this.writeVinyl(resultDir + substitute.jestStareConfig.resultJson, substitute.rawResults)

    if (typeof substitute.jestStareConfig.jestStareConfigJson === 'string') {
      this.writeVinyl(resultDir + substitute.jestStareConfig.jestStareConfigJson, substitute.rawJestStareConfig)
    }

    if (typeof substitute.globalConfig === 'string' && typeof substitute.jestStareConfig.jestGlobalConfigJson === 'string') {
      this.writeVinyl(resultDir + substitute.jestStareConfig.jestGlobalConfigJson, substitute.globalConfig)
    }

    if (substitute.jestStareConfig.report != null && !substitute.jestStareConfig.report) {
      return
    }

    this.writeVinyl(
      resultDir + substitute.jestStareConfig.resultHtml,
      mustache.render(obtainWebFile(Constants.TEMPLATE_HTML), substitute)
    )

    this.writeVinyl(
      resultDir + Constants.CSS_DIR + Constants.JEST_STARE_CSS,
      obtainWebFile(Constants.JEST_STARE_CSS)
    )

    this.writeVinyl(
      resultDir + Constants.JS_DIR + Constants.JEST_STARE_JS,
      obtainJsRenderFile(Constants.JEST_STARE_JS)
    )

    Dependencies.THIRD_PARTY_DEPENDENCIES.forEach(dependency => {
      const updatedDependency: IThirdPartyDependency = Object.assign({}, ...[dependency])

      const location = require.resolve(dependency.requireDir + dependency.file)

      this.writeVinyl(
        resultDir + updatedDependency.targetDir + updatedDependency.file,
        fs.readFileSync(location, 'utf8')
      )
    })
  }
}
