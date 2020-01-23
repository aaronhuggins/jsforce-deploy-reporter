# JSforce Deploy Reporter

A tool written entirely in NodeJS to examine the details of a Salesforce deployment result and report those results in standard formats. Apex coverage, component, and test results are supported.

Code coverage or tests for anything other than Apex should be handled by another workflow. See Salesforce doumentation for [insight on this](https://developer.salesforce.com/docs/component-library/documentation/lwc/testing).

## Options

```typescript
interface JSforceReporterOptions {
  packageRoot: string // (Required) The root of the unpackaged Salesfroce code (usually where Package.xml lives).
  outputRoot?: string // The root of where reports should be written to disk.
  detectExecutableLines?: boolean // If 'true', the reporter will try to read-in Apex classes/triggers from disk and guess which lines are executable.
  reporter?: string // A single report format.
  reporters?: Array<string> // Multiple report formats; see further down for information on available formats.
  junitLevel?: 'tests' | 'components' | 'all'
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

Two additional reporter types provide a facility to output a Junit-format xml file and write arrays `componentFailures`, `componentSuccesses`, `runTestResult.successes`, and `runTestResult.failures` to a JSON file. These reporter types are `junit` and `junitonly`.

Type `junit` will write out both a JSON and and Junit version of the component and test results; `junitonly` will only output the Junit files. Additionally, if option `junitLevel` is provided, output can be limited to just one of tests or components; by default, it will write both reports.

- [IBM knowledge on Junit format](https://www.ibm.com/support/knowledgecenter/SSQ2R2_14.2.0/com.ibm.rsar.analysis.codereview.cobol.doc/topics/cac_useresults_junit.html)
- [Junit schema](https://github.com/windyroad/JUnit-Schema)

