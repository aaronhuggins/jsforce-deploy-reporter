const { FileCoverage } = require('istanbul-lib-coverage/lib/file-coverage')
const { CoverageMap } = require('istanbul-lib-coverage/lib/coverage-map')
const fs = require('fs')

/**
 * Produces a valid IstanbulJS coverage map for Apex using best effort.
 */
class ApexCoverageMap extends CoverageMap {
  constructor (apexCoverage = [], options = {}) {
    super()
    this.apexCoverage = apexCoverage
    this.options = options
  }

  async generate () {
    const promises = []

    this.apexCoverage.forEach(coverage => {
      promises.push(getApexFileCoverage(coverage, this.options))
    })

    const apexFileCoverages = await Promise.all(promises)

    apexFileCoverages.forEach(apexFileCoverage => {
      this.addFileCoverage(apexFileCoverage)
    })

    return this
  }
}

class ElocDetector {
  constructor (sourceContents = '') {
    this.rules = [
      // Class getter/setter annotation.
      /(get;)|(set;)/,
      // Method constructor/invocation.
      /\(.*/,
      // Generic variable assignments.
      /( =[\s'0-9a-zA-Z_])|(\+\+)/,
      // Method return (void returns are not considered executable).
      /return[ ;]/
    ]
    this.skipLibrary = {
      debugLine: /[Ss]ystem\.[Dd]ebug\(/,
      comment: {
        single: /^[\t ]*\/\//,
        multi: {
          start: /^[\t ]*\/\*/,
          end: /\*\/[\t ]*$/
        }
      },
      query: {
        start: /=*[ \(]\[/,
        end: /][\s]*[\)]*[.;]/
      },
      class: {
        standardVarDeclaration: /(public|private|final|static) .* = /,
        executableVarDeclaration: /(public|private|final|static) .* = (new|.*\(.*\))/,
        methodDeclaration: /(public|private|final|static) .*\(\) {.* = /
      },
      interface: {
        start: /interface /,
        end: /}/
      }
    }
    this.sourceContents = sourceContents
    this.lines = []
  }

  detect () {
    const lines = this.sourceContents.split('\n')
    let multiLineComment = false
    let soqlQuery = false
    let apexInterface = false

    lines.forEach((line, index) => {
      let skip = false

      if (this.skipLibrary.query.start.test(line)) {
        this.lines.push({
          int: index + 1,
          len: line.length
        })
        soqlQuery = true
      }

      if (this.skipLibrary.query.end.test(line)) {
        soqlQuery = false
      }

      if (this.skipLibrary.comment.multi.start.test(line)) {
        multiLineComment = true
      }

      if (this.skipLibrary.comment.multi.end.test(line)) {
        multiLineComment = false
      }

      if (this.skipLibrary.interface.start.test(line)) {
        apexInterface = true
      }

      if (this.skipLibrary.interface.end.test(line)) {
        apexInterface = false
      }

      if (
        apexInterface ||
        multiLineComment ||
        soqlQuery ||
        this.skipLibrary.comment.single.test(line) ||
        this.skipLibrary.debugLine.test(line) ||
        (this.skipLibrary.class.standardVarDeclaration.test(line) &&
          !(
            this.skipLibrary.class.executableVarDeclaration.test(line) ||
            this.skipLibrary.class.methodDeclaration.test(line)
          ))
      ) {
        skip = true
      }

      this.rules.forEach(rule => {
        if (!skip && rule.test(line)) {
          this.lines.push({
            int: index + 1,
            len: line.length
          })
          skip = true
        }
      })
    })

    return this
  }
}

const getApexFileCoverage = async function getApexFileCoverage (coverage = {}, opts = {}) {
  let executableLines = []
  /*    const testName =
    coverage.type +
    (typeof coverage.namespace === 'string' ? '__' + coverage.namespace : '')*/
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
  const lines = parseLines(coverage.locationsNotCovered, executableLines, parseFloat(locationsHit))
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

const parseLines = function parseLines (linesMissed = [], executableLines = [], linesHit) {
  const result = []
  const missed = []
  const hit = []

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

const detectExecutableLines = function detectExecutableLines (sourceFile) {
  if (fs.existsSync(sourceFile)) {
    const apexString = fs.readFileSync(sourceFile, 'utf8')
    const detector = new ElocDetector(apexString).detect()

    return detector.lines
  }

  return []
}

const getTypeFolder = function getTypeFolder (coverageType) {
  const typeFolders = {
    Class: 'classes',
    Trigger: 'triggers'
  }

  return typeof typeFolders[coverageType] === 'string' ? typeFolders[coverageType] : ''
}

const getTypeExt = function getTypeExt (coverageType) {
  const typeExts = {
    Class: '.cls',
    Trigger: '.trigger'
  }

  return typeof typeExts[coverageType] === 'string' ? typeExts[coverageType] : ''
}

module.exports = {
  ApexCoverageMap
}
