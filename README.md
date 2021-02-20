# JSforce Deploy Reporter

A tool written entirely in TypeScript to examine the details of a Salesforce deployment result and report those results in standard formats. Apex coverage, component, and test results are supported.

Code coverage or tests for anything other than Apex should be handled by another workflow. See Salesforce doumentation for [insight on this](https://developer.salesforce.com/docs/component-library/documentation/lwc/testing).

## Features

- Vanilla direct-to-disk reporter class
- Gulp streaming reporter function
- Supports all built-in code coverage reports available in IstanbulJS
- Exports JSON, Junit, and Jest Stare reports for test suites

## Installation and Usage

Install the package using yarn or npm: `npm install --save-dev jsforce-deploy-reporter`.

There are multiple ways to get the deploy result, not the least of which would be to use `xml2js` to convert a raw response. This example uses package [`@nhs-llc/gulp-jsforce-deploy`](https://www.npmjs.com/package/@nhs-llc/gulp-jsforce-deploy).

```javascript
const gulp = require('gulp')
const zip = require('gulp-zip')
const { JSforceReporter } = require('jsforce-deploy-reporter')
const { deploy } = require('@nhs-llc/gulp-jsforce-deploy')

gulp.task('test', async () => {
  return new Promise((resolve, reject) => {
    gulp
      .src('./force-app/main/default/**', { base: './force-app/main' })
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
  const { completedDate, details } = require('./deploy-result.json')
  const reporter = new JSforceReporter(details, {
    reporters: ['cobertura', 'junitonly' /* , 'lcov', 'jeststare' */],
    detectExecutableLines: true,
    packageRoot: './force-app/main/default',
    outputRoot: './coverage',
    completedDate
  })

  await reporter.report()
})
```

## Options

```typescript
export interface JSforceReporterOptions {
  /** __Required__: The root of the unpackaged Salesfroce code (usually where Package.xml lives). */
  packageRoot?: string
  /** The root of where reports should be written to disk. */
  outputRoot?: string
  /** Use the `apex-parser` for speed and accuracy; set to true by default. Setting to `false` uses legacy RegExp parser. */
  useApexParser?: boolean
  /** If 'true', the reporter will try to read-in Apex classes/triggers from disk and parse for executable lines of code; defaults to `true`. */
  detectExecutableLines?: boolean
  /** A single report format; see library `nyc` for supported formats; defaults to 'text'. */
  reporter?: string
  /** One or more report formats; see library `nyc` for supported formats; defaults to 'text'. */
  reporters?: string[]
  /** Date-time the Salesforce deployment completed; will be overriden by the completed date in the deployment result. */
  completedDate?: string
  /** The low and high watermark for coverage; only lines and statements are supported. See library `nyc` for usage. */
  watermarks?: {
    lines?: [number, number]
    statements?: [number, number]
  }
  /** The desired level of output for Junit results; defaults to 'all'. */
  junitLevel?: 'tests' | 'components' | 'all'
}
```

## Coverage

Coverage reporting is made possible by the [IstanbulJS](https://github.com/istanbuljs/istanbuljs) project. The reporter works by consuming the information from the `codeCoverage` node in the details, and parsing this to provide a coverage map which IstanbulJS can consume.

The reporter uses library [`apex-parser`](https://github.com/nawforce/apex-parser) to parse the class and trigger files in the project and determine which lines are executable. The reporter then uses a 'best effort' principle because Salesforce only gives line coverage details for lines that are NOT covered. This is in direct conflict with how most code coverage tools behave. Parsed lines are used to differentiate between covered and uncovered lines. If there are fewer parsed lines than the total number of locations reported by Salesforce, the reporter will guess at executable lines of code for any remaining covered lines.

Alternatively, the option to `detectExecutableLines` may be provided as false. The covered lines are guessed from the total number of executable lines of code. The default is to start at line 1, pretend the lines are executable, and that the line executed once. Any lines which are explicitly labeled by Salesforce as not covered are skipped by this process, so the tool should never mark an uncovered line as having executed.

This best effort will always report the correct _percentage_ of covered statements, and the correct _percentage and location_ of uncovered statements. The location of covered statements will always be unreliable due to Salesforce's incomplete data through the Metadata deployment API.

## Components and test results

Three additional reporter types provide a facility to output a Junit-format xml file and write arrays `componentFailures`, `componentSuccesses`, `runTestResult.successes`, and `runTestResult.failures` to a JSON file. These reporter types are `jeststare`, `junit` and `junitonly`.

The `jeststare` reporter will invoke the npm library [`jest-stare`](https://github.com/dkelosky/jest-stare) on a Jest-like object to create an HTML report of the test results in a directory named `jest-stare`. Type `junit` will write out both a JSON and and Junit version of the component and test results; `junitonly` will only output the Junit files. Additionally, if option `junitLevel` is provided, output can be limited to just one of tests or components; by default, it will write both reports. Junit file names are formatted as `TEST-*.xml`.

The timestamps are calculated using either the time at which the reporter is ran or a time passed in the options for `completedDate`. This allows the reporter to indicate in Junit files the correct duration of tests and components, which means more accurate reporting to the tools ingesting the Junit output.

- [IBM knowledge on Junit format](https://www.ibm.com/support/knowledgecenter/SSQ2R2_14.2.0/com.ibm.rsar.analysis.codereview.cobol.doc/topics/cac_useresults_junit.html)
- [Junit schema](https://github.com/windyroad/JUnit-Schema)
- [Jest Stare](https://www.npmjs.com/package/jest-stare)

## Contributors

Aaron Huggins
