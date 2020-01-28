const fs = require('fs')
const { Processor } = require('jest-stare/lib/processor/Processor')
const { Constants } = require('jest-stare/lib/processor/Constants')
const { Dependencies } = require('jest-stare/lib/processor/Dependencies')
const mustache = require('mustache')
const Vinyl = require('vinyl')

class VinylProcessor extends Processor {
  constructor (transform, results, jestStareConfig, processorOptions) {
    super(results, jestStareConfig, processorOptions)

    this.transform = transform
  }

  writeVinyl (path, str) {
    this.transform.push(
      new Vinyl({
        path,
        contents: Buffer.from(str, 'utf8')
      })
    )
  }

  generateReport (resultDir, substitute) {
    this.writeVinyl(resultDir + substitute.jestStareConfig.resultJson, substitute.rawResults)

    if (substitute.jestStareConfig.jestStareConfigJson) {
      this.writeVinyl(resultDir + substitute.jestStareConfig.jestStareConfigJson, substitute.rawJestStareConfig)
    }

    if (substitute.globalConfig && substitute.jestStareConfig.jestGlobalConfigJson) {
      this.writeVinyl(resultDir + substitute.jestStareConfig.jestGlobalConfigJson, substitute.globalConfig)
    }

    if (substitute.jestStareConfig.report != null && !substitute.jestStareConfig.report) {
      return
    }

    this.writeVinyl(
      resultDir + substitute.jestStareConfig.resultHtml,
      mustache.render(this.obtainWebFile(Constants.TEMPLATE_HTML), substitute)
    )

    this.writeVinyl(
      resultDir + Constants.CSS_DIR + Constants.JEST_STARE_CSS,
      this.obtainWebFile(Constants.JEST_STARE_CSS)
    )

    this.writeVinyl(
      resultDir + Constants.JS_DIR + Constants.JEST_STARE_JS,
      this.obtainJsRenderFile(Constants.JEST_STARE_JS)
    )

    Dependencies.THIRD_PARTY_DEPENDENCIES.forEach(dependency => {
      const updatedDependency = Object.assign({}, ...[dependency])

      const location = require.resolve(dependency.requireDir + dependency.file)

      this.writeVinyl(
        resultDir + updatedDependency.targetDir + updatedDependency.file,
        fs.readFileSync(location, 'utf8')
      )
    })
  }
}

module.exports = {
  VinylProcessor
}
