import * as shell from 'gulp-shell'
import * as jestCli from 'jest-cli'

export async function test (): Promise<void> {
  await jestCli.run()
}

export async function format (): Promise<void> {
  await shell.task('ts-standard --fix')()
}
