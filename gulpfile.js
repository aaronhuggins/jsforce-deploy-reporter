const prettier = require('prettier-standard')
const gulp = require('gulp')
const { JSforceReporter } = require('jsforce-deploy-reporter')
const { deploy } = require('@nhs-llc/gulp-jsforce-deploy')

gulp.task('test', async () => {
  return new Promise((resolve, reject) => {
    gulp.src('./test/**', { base: './' })
    .pipe(zip('pkg.zip'))
    .pipe(deploy({
      username: process.env['sf.username'],
      password: process.env['sf.password'],
      loginUrl: process.env['sf.serverurl'],
      checkOnly: true,
      checkOnlyNoFail: true,
      verbose: true,
      resultOnly: true
    }))
    .pipe(gulp.dest('./'))
    .on('finish', resolve)
    .on('error', reject)
  })
})

gulp.task('coverage', async () => {
  const { completedDate, details } = require('./deploy-result.json')
  const reporter = new JSforceReporter(details, {
    reporters: ['cobertura', 'junitonly' /* , 'lcov', 'jeststare' */],
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: './coverage',
    completedDate
  })

  await reporter.report()
})

gulp.task('format', async () => {
  await prettier.run('./', {})
})
