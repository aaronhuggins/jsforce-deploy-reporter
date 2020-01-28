const Vinyl = require('vinyl')
const xml2js = require('xml2js')
const fs = require('fs')

const write = function write (json = false) {
  const builder = new xml2js.Builder({
    renderOpts: {
      pretty: true,
      indent: '    ',
      newline: '\n'
    },
    xmldec: {
      version: '1.0',
      encoding: 'UTF-8'
    },
    allowSurrogateChars: true
  })

  if (!this.transform) {
    fs.mkdirSync(this.options.outputRoot, { recursive: true })
  }

  if (this.options.junitLevel === 'components' || this.options.junitLevel === 'all') {
    const componentXml = builder.buildObject(this.components.testsuites.toJunit())

    if (this.transform) {
      this.transform.push(
        new Vinyl({
          path: this.options.outputRoot + '/TEST-components.xml',
          contents: Buffer.from(componentXml, 'utf8')
        })
      )
    } else {
      fs.writeFileSync(this.options.outputRoot + '/TEST-components.xml', componentXml, 'utf8')
    }

    if (json) {
      if (this.transform) {
        this.transform.push(
          new Vinyl({
            path: this.options.outputRoot + '/MESSAGES-components.json',
            contents: Buffer.from(JSON.stringify(this.components.messages, null, 2), 'utf8')
          })
        )
      } else {
        fs.writeFileSync(
          this.options.outputRoot + '/MESSAGES-components.json',
          JSON.stringify(this.components.messages, null, 2),
          'utf8'
        )
      }
    }
  }

  if (this.options.junitLevel === 'tests' || this.options.junitLevel === 'all') {
    const testXml = builder.buildObject(this.tests.testsuites.toJunit())

    if (this.transform) {
      this.transform.push(
        new Vinyl({
          path: this.options.outputRoot + '/TEST-results.xml',
          contents: Buffer.from(testXml, 'utf8')
        })
      )
    } else {
      fs.writeFileSync(this.options.outputRoot + '/TEST-results.xml', testXml, 'utf8')
    }

    if (json) {
      if (this.transform) {
        this.transform.push(
          new Vinyl({
            path: this.options.outputRoot + '/MESSAGES-results.json',
            contents: Buffer.from(JSON.stringify(this.tests.messages, null, 2), 'utf8')
          })
        )
      } else {
        fs.writeFileSync(
          this.options.outputRoot + '/MESSAGES-results.json',
          JSON.stringify(this.tests.messages, null, 2),
          'utf8'
        )
      }
    }
  }
}

module.exports = {
  write
}
