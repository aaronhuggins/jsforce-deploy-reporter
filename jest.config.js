module.exports = {
  reporters: [
    'default',
    [
      'jest-stare',
      {
        log: false,
        resultDir: './coverage/jest-stare/',
        coverageLink: '../lcov-report/index.html'
      }
    ]
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['lcov'],
  testRegex: '(/test/.*(spec|test|[Tt]est|[Ss]uite))\\.[tj]s(x){0,1}',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
