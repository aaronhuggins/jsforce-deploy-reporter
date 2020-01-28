const { JSforceReporter } = require('./reporter')
const PluginError = require('plugin-error')
const through = require('through2')

const reporter = function reporter (options) {
  return through.obj(function (file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError('jsforce-deploy-reporter', 'Stream input is not supported'))
    }

    const { completedDate, details } = JSON.parse(file.contents.toString())
    const jsforceReporter = new JSforceReporter(details, Object.assign({ completedDate }, options), this)

    jsforceReporter
      .report()
      .then(() => callback(null, file))
      .catch(err => callback(err))
  })
}

module.exports = {
  jsforceGulpReporter: reporter
}
