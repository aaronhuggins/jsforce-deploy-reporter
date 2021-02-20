/** The options for JSforce Deploy Reporter.
 * 
 * For supported coverage reporters and how to use watermarks, please check out IstanbulJS documentation.

- [Reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/)
- [Watermarks](https://github.com/istanbuljs/nyc#high-and-low-watermarks)
 */
export interface JSforceReporterOptions {
  /** __Required__: The root of the unpackaged Salesfroce code (usually where Package.xml lives). */
  packageRoot?: string
  /** The root of where reports should be written to disk. */
  outputRoot?: string
  /** Use the `apex-parser` for speed and accuracy; set to true by default. Setting to `false` uses legacy RegExp parser. */
  useApexParser?: boolean
  /** Read-in Apex classes/triggers from disk and parse for executable lines of code; defaults to `true`. */
  detectExecutableLines?: boolean
  /** A single report format, see library `nyc` for supported formats; defaults to 'text'. Will be coerced to `reporters` array. */
  reporter?: string
  /** One or more report formats, see library `nyc` for supported formats; defaults to 'text'. */
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
