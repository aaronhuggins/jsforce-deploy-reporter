const gulp = require('gulp')
const prettier = require('prettier-standard')

gulp.task('format', async () => {
  await prettier.run('./', {})
})
