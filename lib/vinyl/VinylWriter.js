const fs = require('fs')
const path = require('path')
const FileWriter = require('istanbul-lib-report/lib/file-writer')
const PluginError = require('plugin-error')
const Vinyl = require('vinyl')

class VinylContentWriter {
  constructor (path, transform) {
    this.transform = transform
    this.vinyl = new Vinyl({
      path,
      contents: Buffer.from('')
    })
    this.chunks = []
  }

  write (str) {
    this.chunks.push(Buffer.from(str))
  }

  println (str) {
    this.write(`${str}\n`)
  }

  close () {
    this.vinyl.contents = Buffer.concat(this.chunks)
    this.transform.push(this.vinyl)
  }
}

class VinylWriter extends FileWriter {
  constructor (baseDir, transform) {
    super(baseDir)

    this.transform = transform
  }

  writerForDir (subdir) {
    if (path.isAbsolute(subdir)) {
      throw new PluginError(`Cannot create subdir writer for absolute path: ${subdir}`)
    }

    return new VinylWriter(`${this.baseDir}/${subdir}`, this.transform)
  }

  copyFile (source, dest, header) {
    if (path.isAbsolute(dest)) {
      throw new PluginError(`Cannot write to absolute path: ${dest}`)
    }

    dest = path.resolve(this.baseDir, dest)

    let contents

    if (header) {
      contents = Buffer.from(header + fs.readFileSync(source, 'utf8'), 'utf8')
    } else {
      contents = fs.readFileSync(source)
    }

    this.transform.push(
      new Vinyl({
        path: dest,
        contents
      })
    )
  }

  writeFile (file) {
    if (path.isAbsolute(file)) {
      throw new PluginError(`Cannot write to absolute path: ${file}`)
    }

    file = path.resolve(this.baseDir, file)

    return new VinylContentWriter(file, this.transform)
  }
}

module.exports = {
  VinylWriter
}
