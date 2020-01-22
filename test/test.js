const { JSforceReporter } = require('../index')
const testFile = require('./deploy-result.json')

const main = async function main () {
  const reporter = new JSforceReporter(testFile.details, {
    reporter: 'lcov',
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: './coverage'
  })
  await reporter.report()
}

main()
