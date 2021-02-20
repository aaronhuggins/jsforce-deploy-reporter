import * as shell from 'gulp-shell'

export async function test (): Promise<void> {
  await shell.task('mocha')()
}

export async function coverage (): Promise<void> {
  await shell.task('nyc mocha')()
}

export async function format (): Promise<void> {
  await shell.task('ts-standard --fix')()
}
