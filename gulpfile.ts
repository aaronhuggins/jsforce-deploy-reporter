const prettier = require('prettier-standard')
const jestCli = require('jest-cli')

export async function test () {
  await jestCli.run()
}

export async function format () {
  await prettier.run('./', { lint: true })
}
