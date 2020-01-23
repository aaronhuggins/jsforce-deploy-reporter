const { JSforceReporter } = require('../index')
const testFile = require('./deploy-result.json')

const main = async function main () {
  const reporter = new JSforceReporter(testFile.details, {
    reporters: ['lcov', 'junit'],
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: './coverage'
  })
  await reporter.report()
}

main()
