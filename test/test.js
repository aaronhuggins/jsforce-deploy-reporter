const { JSforceReporter } = require('../index')
const testFile = require('./deploy-result.json')
const processor = require('jest-stare')

const main = async function main () {
  const reporter = new JSforceReporter(testFile.details, {
    reporters: ['lcov', 'junit', 'jeststare'],
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: './coverage'
  })
  
  await reporter.report()

  //const tests = require("../coverage/jest-results.json")

  //processor(tests, { log: false, resultDir: './coverage/test-report' })
}

main()
