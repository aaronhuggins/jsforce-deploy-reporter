import * as fs from 'fs-extra'
import * as shell from 'gulp-shell'

export async function test (): Promise<void> {
  await shell.task('mocha')()
}

export async function coverage (): Promise<void> {
  await shell.task('nyc mocha')()
}

export async function lint (): Promise<void> {
  await shell.task('ts-standard')()
}

export async function format (): Promise<void> {
  await shell.task('ts-standard --fix')()
}

export async function tsc (): Promise<void> {
  await shell.task('tsc')()
}

export async function compile (): Promise<void> {
  await shell.task('tsc --sourceMap false')()
}

export async function cleanup (): Promise<void> {
  fs.rmdirSync('./dist', { recursive: true })
}
