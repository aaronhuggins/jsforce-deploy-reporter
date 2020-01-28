const prettier = require('prettier-standard')
const gulp = require('gulp')
const zip = require('gulp-zip')
const { JSforceReporter, jsforceGulpReporter } = require('./index')
const { deploy } = require('@nhs-llc/gulp-jsforce-deploy')

gulp.task('test', async () => {
  return new Promise((resolve, reject) => {
    gulp
      .src('./test/**', { base: './' })
      .pipe(zip('pkg.zip'))
      .pipe(
        deploy({
          username: process.env['sf.username'],
          password: process.env['sf.password'],
          loginUrl: process.env['sf.serverurl'],
          checkOnly: true,
          checkOnlyNoFail: true,
          verbose: true,
          resultOnly: true
        })
      )
      .pipe(gulp.dest('./'))
      .on('finish', resolve)
      .on('error', reject)
  })
})

gulp.task('coverage', async () => {
  const { completedDate, details } = require('./test/deploy-result.json')
  const reporter = new JSforceReporter(details, {
    reporters: ['cobertura', 'junitonly', 'lcov', 'jeststare'],
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: './coverage',
    completedDate
  })

  await reporter.report()
})

gulp.task('gulp-coverage', async () => {
  return new Promise((resolve, reject) => {
    gulp
      .src('./test/deploy-result.json', { base: './test' })
      .pipe(
        jsforceGulpReporter({
          reporters: ['cobertura', 'junitonly', 'lcov', 'jeststare'],
          detectExecutableLines: true,
          packageRoot: './test'
        })
      )
      .pipe(gulp.dest('./coverage/gulp'))
      .on('finish', resolve)
      .on('error', reject)
  })
})

gulp.task('format', async () => {
  await prettier.run('./', {})
})
