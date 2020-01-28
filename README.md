# JSforce Deploy Reporter

A tool written entirely in NodeJS to examine the details of a Salesforce deployment result and report those results in standard formats. Apex coverage, component, and test results are supported.

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
interface JSforceReporterOptions {
  packageRoot: string // (Required) The root of the unpackaged Salesfroce code (usually where Package.xml lives).
  outputRoot?: string // The root of where reports should be written to disk.
  detectExecutableLines?: boolean // If 'true', the reporter will try to read-in Apex classes/triggers from disk and guess which lines are executable.
  reporter?: string // A single report format; see further down for information on available formats.
  reporters?: Array<string> // Multiple report formats.
  junitLevel?: 'tests' | 'components' | 'all' // What level of results are desired for Junit output.
  completedDate?: Date | string // The JS date or an ISO8601 string indicating the date and time that the tests completed.
  watermarks?: {
    // The low and high watermark for coverage; only lines and statements are supported.
    lines?: [number, number]
    statements?: [number, number]
  }
}
```

## Coverage

Coverage reporting is made possible by the [IstanbulJS](https://github.com/istanbuljs/istanbuljs) project. The reporter works by consuming the information from the `codeCoverage` node in the details, and parsing this to provide a coverage map which IstanbulJS can consume.

The reporter uses a 'best effort' principle because Salesforce only gives line coverage details for lines that are NOT covered. This is in direct conflict with how most code coverage tools are written. So instead, the covered lines are guessed from the total number of executable locations. The default is to start at line 1 and pretend the lines are executable and that the line executed once. Any lines which are explicitly labeled by Salesforce as not covered are skipped by this process, so the tool should never mark an uncovered line as having executed.

Alternatively, the option to `detectExecutableLines` may be provided as true. This tells the reporter to read-in each class and trigger, and test against regular expressions to guess which lines are executable. This is then used to differentiate between covered and uncovered lines. If there are fewer guessed lines than the total number of locations reported by Salesforce, the reporter will fall-back to the default behavior for any remaining covered lines.

This best effort will always report the correct percentage of covered statements, and the correct percentage and location of uncovered statements. The location of covered statements will always be unreliable due to Salesforce's incomplete data through the Metadata deployment API.

For which coverage reporters are supported and how to use watermarks, please check out IstanbulJS documentation.

- [Reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/)
- [Watermarks](https://github.com/istanbuljs/nyc#high-and-low-watermarks)

## Components and test results

Three additional reporter types provide a facility to output a Junit-format xml file and write arrays `componentFailures`, `componentSuccesses`, `runTestResult.successes`, and `runTestResult.failures` to a JSON file. These reporter types are `jeststare`, `junit` and `junitonly`.

The `jeststare` reporter will invoke the npm library `jest-stare` on a Jest-like object to create an HTML report of the test results in a directory named `jest-stare`. Type `junit` will write out both a JSON and and Junit version of the component and test results; `junitonly` will only output the Junit files. Additionally, if option `junitLevel` is provided, output can be limited to just one of tests or components; by default, it will write both reports. Junit file names are formatted as `TEST-*.xml`.

The timestamps are calculated using either the time at which the reporter is ran or a time passed in the options for `completedDate`. This allows the reporter to indicate in Junit files the correct duration of tests and components, which means more accurate reporting to the tools ingesting the Junit output.

- [IBM knowledge on Junit format](https://www.ibm.com/support/knowledgecenter/SSQ2R2_14.2.0/com.ibm.rsar.analysis.codereview.cobol.doc/topics/cac_useresults_junit.html)
- [Junit schema](https://github.com/windyroad/JUnit-Schema)
- [Jest Stare](https://www.npmjs.com/package/jest-stare)

## Performance

Performance is approximately 325 milliseconds for 500 components and 800 tests when using `detectExecutableLines` and reporting for Junit, LCOV, and Cobertura. Writing out HTML reports taks more processor time, largely due to the number of files involved in these formats. Reporting both LCOV-html and Jest Stare takes approximately 3.12 seconds for 500 components and 800 tests with `detectExecutableLines`.

It is recomended that HTML reports are not generated when ran in a pipeline, as this may add unnecessary time and computational overhead. Only use this when needed, such as local development or when eyes are needed on human-compatible reports and the pipeline wil not generate such from another format.

## Contributors

Aaron Huggins
