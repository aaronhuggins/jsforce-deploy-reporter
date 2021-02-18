import { FileCoverage } from 'istanbul-lib-coverage/lib/file-coverage'
import { ElocDetector } from './ElocDetector'
import * as fs from 'fs'
import { typeExts, typeFolders } from './constants'
import { CoverageType, ElocLine } from './types'

/** Get Apex file coverage instance. */
export async function getApexFileCoverage (coverage: any = {}, opts: any = {}) {
  let executableLines = []
  const sourceFile =
    (typeof opts.packageRoot === 'string' ? opts.packageRoot + '/' : '') +
    getTypeFolder(coverage.type) +
    '/' +
    coverage.name +
    getTypeExt(coverage.type)
  const locationsHit = parseFloat(coverage.numLocations) - parseFloat(coverage.numLocationsNotCovered)
  if (opts.detectExecutableLines) {
    executableLines = detectExecutableLines(sourceFile)
  }
  const lines = parseLines(coverage.locationsNotCovered, executableLines, locationsHit)
  const fileCoverage = new FileCoverage(sourceFile)

  lines.forEach((line, index) => {
    fileCoverage.statementMap[index] = {
      start: { line: line.int, column: 1 },
      end: { line: line.int, column: line.len }
    }
    fileCoverage.s[index] = line.hit
  })

  return fileCoverage
}

/** Parse the lines from the given Salesforce coverage metadata. */
export function parseLines (linesMissed: any[] = [], executableLines = [], linesHit): ElocLine[] {
  const result: ElocLine[] = []
  const missed: number[] = []
  const hit: number[] = []

  if (Array.isArray(linesMissed) && linesMissed.length > 0) {
    linesMissed.forEach(lineMissed => {
      let len = null
      if (executableLines.length > 0) {
        len = (
          executableLines.find(line => line.int === lineMissed.int) || {
            len: null
          }
        ).len
      }
      result.push({
        int: parseFloat(lineMissed.line),
        hit: parseFloat(lineMissed.numExecutions),
        len
      })
      missed.push(parseFloat(lineMissed.line))
    })
  }

  if (Array.isArray(executableLines)) {
    executableLines.forEach(executableLine => {
      if (!missed.includes(executableLine.int)) {
        result.push({
          int: parseFloat(executableLine.int),
          hit: 1,
          len: executableLine.len
        })
        hit.push(executableLine.int)
        linesHit -= 1
      }
    })
  }

  for (let i = 0; i < linesHit; i++) {
    const lineNumber = i + 1

    if (!missed.includes(lineNumber) && !hit.includes(lineNumber) && !isNaN(lineNumber)) {
      result.push({
        int: lineNumber,
        hit: 1,
        len: null
      })
    }
  }

  return result
}

/** Detect executable lines from a given source file path. */
export function detectExecutableLines (sourceFile: string): ElocLine[] {
  if (fs.existsSync(sourceFile)) {
    const apexString = fs.readFileSync(sourceFile, 'utf8')
    const detector = new ElocDetector(apexString).detect()

    return detector.lines
  }

  return []
}

/** Get the folder for coverage type. */
export function getTypeFolder (coverageType: CoverageType) {
  return typeof typeFolders[coverageType] === 'string' ? typeFolders[coverageType] : ''
}

/** Get the file extension for coverage type. */
export function getTypeExt (coverageType: CoverageType): string {
  return typeof typeExts[coverageType] === 'string' ? typeExts[coverageType] : ''
}
