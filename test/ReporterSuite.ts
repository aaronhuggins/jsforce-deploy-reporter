import * as gulp from 'gulp'
import * as fs from 'fs-extra'
import * as assert from 'assert'
import { JSforceReporter, jsforceGulpReporter } from '../index'

const TMP_DIR = './.tmp'
const testFile = require('./deploy-result.json')

async function reporter (...reports) {
  await new JSforceReporter(testFile.details, {
    reporters: [...reports],
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: TMP_DIR
  }).report()
}

async function gulper (...reports) {
  return new Promise((resolve, reject) => {
    gulp
      .src('./test/deploy-result.json', { base: './test' })
      .pipe(
        jsforceGulpReporter({
          reporters: [...reports],
          detectExecutableLines: true,
          packageRoot: './test'
        })
      )
      .pipe(gulp.dest(TMP_DIR))
      .on('finish', resolve)
      .on('error', reject)
  })
}

describe('Deploy Reporter', () => {
  describe('class JSforceReporter', () => {
    afterAll(() => {
      fs.removeSync(TMP_DIR)
    })

    it('should create lcov reports', async () => {
      await reporter('lcov')

      assert.equal(fs.existsSync(TMP_DIR + '/lcov.info'), true)
      assert.equal(fs.existsSync(TMP_DIR + '/lcov-report/index.html'), true)
    })

    it('should create junit reports', async () => {
      await reporter('junit')

      assert.equal(fs.existsSync(TMP_DIR + '/TEST-components.xml'), true)
      assert.equal(fs.existsSync(TMP_DIR + '/MESSAGES-components.json'), true)
      assert.equal(fs.existsSync(TMP_DIR + '/TEST-results.xml'), true)
      assert.equal(fs.existsSync(TMP_DIR + '/MESSAGES-results.json'), true)
    })

    it('should create Jest Stare report', async () => {
      await reporter('jeststare')

      assert.equal(fs.existsSync(TMP_DIR + '/jest-stare/index.html'), true)
    })

    it('should output text report to console', async () => {
      await new JSforceReporter(testFile.details, {
        detectExecutableLines: false,
        packageRoot: './test'
      }).report()
    })

    it('should use property "reporter" in array of reporters', async () => {
      await new JSforceReporter(testFile.details, {
        reporter: 'cobertura',
        detectExecutableLines: false,
        packageRoot: './test',
        outputRoot: TMP_DIR
      }).report()
    })

    it('should coerce property "reporters" to array of reporters', async () => {
      const options: any = {
        reporters: 'lcovonly',
        detectExecutableLines: false,
        packageRoot: './test',
        outputRoot: TMP_DIR
      }

      await new JSforceReporter(testFile.details, options).report()
    })
  })

  describe('function jsforceGulpReporter', () => {
    afterAll(() => {
      fs.removeSync(TMP_DIR)
    })

    it('should create cobertura report', async () => {
      await gulper('cobertura')

      assert.equal(fs.existsSync(TMP_DIR + '/cobertura-coverage.xml'), true)
    })

    it('should create only junit reports', async () => {
      await gulper('junitonly')

      assert.equal(fs.existsSync(TMP_DIR + '/TEST-components.xml'), true)
      assert.equal(fs.existsSync(TMP_DIR + '/TEST-results.xml'), true)
    })

    it('should create Jest Stare report', async () => {
      await gulper('jeststare')

      assert.equal(fs.existsSync(TMP_DIR + '/jest-stare/index.html'), true)
    })

    it('should passthrough on null file', async () => {
      let vinylFile

      await new Promise((resolve, reject) => {
        gulp
          .src('.', { base: './test', allowEmpty: true })
          .pipe(
            jsforceGulpReporter({
              detectExecutableLines: true,
              packageRoot: './test'
            })
          )
          .pipe(gulp.dest(TMP_DIR))
          .on('data', data => {
            vinylFile = data
          })
          .on('finish', resolve)
          .on('error', reject)
      })

      assert.equal(vinylFile.isNull(), true)
    })
  })
})
