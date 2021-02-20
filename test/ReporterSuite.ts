import * as gulp from 'gulp'
import * as fs from 'fs-extra'
import * as assert from 'assert'
import { JSforceReporter, jsforceGulpReporter } from '../index'
import { VinylWriter } from '../lib/vinyl'

const TMP_DIR = './.tmp'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const testFile = require('./deploy-result.json')

async function reporter (...reports): Promise<void> {
  await new JSforceReporter(testFile.details, {
    reporters: [...reports],
    detectExecutableLines: true,
    packageRoot: './test',
    outputRoot: TMP_DIR
  }).report()
}

async function gulper (useApexParser: boolean, ...reports): Promise<void> {
  return await new Promise((resolve, reject) => {
    gulp
      .src('./test/deploy-result.json', { base: './test' })
      .pipe(
        jsforceGulpReporter({
          useApexParser,
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
    after(() => {
      fs.removeSync(TMP_DIR)
    })

    it('should create lcov reports', async () => {
      await reporter('lcov')

      assert.strictEqual(fs.existsSync(TMP_DIR + '/lcov.info'), true)
      assert.strictEqual(fs.existsSync(TMP_DIR + '/lcov-report/index.html'), true)
    })

    it('should create junit reports', async () => {
      await reporter('junit')

      assert.strictEqual(fs.existsSync(TMP_DIR + '/TEST-components.xml'), true)
      assert.strictEqual(fs.existsSync(TMP_DIR + '/MESSAGES-components.json'), true)
      assert.strictEqual(fs.existsSync(TMP_DIR + '/TEST-results.xml'), true)
      assert.strictEqual(fs.existsSync(TMP_DIR + '/MESSAGES-results.json'), true)
    })

    it('should create Jest Stare report', async () => {
      await reporter('jeststare')

      assert.strictEqual(fs.existsSync(TMP_DIR + '/jest-stare/index.html'), true)
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
    after(() => {
      fs.removeSync(TMP_DIR)
    })

    it('should create cobertura report', async () => {
      await gulper(true, 'cobertura')

      assert.strictEqual(fs.existsSync(TMP_DIR + '/cobertura-coverage.xml'), true)
    })

    it('should create only junit reports', async () => {
      await gulper(undefined, 'junitonly')

      assert.strictEqual(fs.existsSync(TMP_DIR + '/TEST-components.xml'), true)
      assert.strictEqual(fs.existsSync(TMP_DIR + '/TEST-results.xml'), true)
    })

    it('should create Jest Stare report', async () => {
      await gulper(false, 'jeststare')

      assert.strictEqual(fs.existsSync(TMP_DIR + '/jest-stare/index.html'), true)
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

      assert.strictEqual(vinylFile.isNull(), true)
    })
  })

  describe('class VinylWriter', () => {
    before(() => {
      fs.mkdirSync(TMP_DIR)
    })

    after(() => {
      fs.removeSync(TMP_DIR)
    })

    it('should execute write for dir', () => {
      // Our tests don't need a real Transform class, just something that can accept `push`.
      const accum: any = []
      const writer = new VinylWriter('./', accum)

      const result = writer.writerForDir('./subdir')

      assert.strictEqual(result instanceof VinylWriter, true)

      assert.throws(() => {
        writer.writerForDir('C:\\subdir')
      })
    })

    it('should copy file', () => {
      // Our tests don't need a real Transform class, just something that can accept `push`.
      const accum: any = []
      const filePath = TMP_DIR + '/garbage.file'
      const writer = new VinylWriter('./', accum)

      fs.writeFileSync(filePath, Buffer.alloc(0))
      assert.strictEqual(accum.length, 0)

      assert.doesNotThrow(() => {
        writer.copyFile(filePath, TMP_DIR + '/garbage2.file', '')
      })

      assert.doesNotThrow(() => {
        writer.copyFile(filePath, TMP_DIR + '/garbage3.file', 'Stuff__')
      })

      assert.throws(() => {
        writer.copyFile(filePath, '/garbage4.file', '')
      })

      assert.strictEqual(accum.length, 2)
    })

    it('should throw on absolute path for write file', () => {
      // Our tests don't need a real Transform class, just something that can accept `push`.
      const accum: any = []
      const writer = new VinylWriter('./', accum)

      assert.throws(() => {
        writer.writeFile('/absolute')
      })
    })
  })
})
