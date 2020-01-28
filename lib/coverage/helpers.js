const { FileCoverage } = require('istanbul-lib-coverage/lib/file-coverage')
const { ElocDetector } = require('./ElocDetector')
const fs = require('fs')

const getApexFileCoverage = async function getApexFileCoverage (coverage = {}, opts = {}) {
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
  getApexFileCoverage,
  parseLines,
  detectExecutableLines,
  getTypeFolder,
  getTypeExt
}