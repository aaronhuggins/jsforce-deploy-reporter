const prettier = require('prettier-standard')
const jestCli = require('jest-cli')
const gulp = require('gulp')

gulp.task('test', async () => {
  await jestCli.run()
})

gulp.task('format', async () => {
  await prettier.run('./', {})
})
