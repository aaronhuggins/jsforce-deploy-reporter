import { JSforceReporter } from './reporter'
import PluginError from 'plugin-error'
import through from 'through2'
import type { Transform } from 'stream'
import type Vinyl from 'vinyl'
import type { JSforceReporterOptions } from './types'

export function jsforceGulpReporter (options: JSforceReporterOptions): Transform {
  return through.obj(function (file: Vinyl, enc: BufferEncoding, callback: through.TransformCallback) {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError('jsforce-deploy-reporter', 'Stream input is not supported'))
    }

    const { completedDate, details } = JSON.parse(file.contents.toString('utf8'))
    const jsforceReporter = new JSforceReporter(details, Object.assign({ completedDate }, options), this)

    jsforceReporter
      .report()
      .then(() => callback(null, file))
      .catch(err => callback(err))
  })
}
