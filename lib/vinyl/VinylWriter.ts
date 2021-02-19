import * as fs from 'fs'
import * as path from 'path'
import FileWriter from 'istanbul-lib-report/lib/file-writer'
import PluginError from 'plugin-error'
import Vinyl from 'vinyl'
import type { Transform } from 'stream'

class VinylContentWriter {
  constructor (path: string, transform: Transform) {
    this.transform = transform
    this.vinyl = new Vinyl({
      path,
      contents: Buffer.from('')
    })
    this.chunks = []
  }

  chunks: Buffer[]
  vinyl: Vinyl
  transform: Transform

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

export class VinylWriter extends FileWriter {
  constructor (baseDir: string, transform: Transform) {
    super(baseDir)

    this.transform = transform
  }

  transform: Transform

  writerForDir (subdir) {
    if (path.isAbsolute(subdir)) {
      throw new PluginError('VinylWriter', `Cannot create subdir writer for absolute path: ${subdir}`)
    }

    return new VinylWriter(`${this.baseDir}/${subdir}`, this.transform)
  }

  copyFile (source, dest, header) {
    if (path.isAbsolute(dest)) {
      throw new PluginError('VinylWriter', `Cannot write to absolute path: ${dest}`)
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
      throw new PluginError('VinylWriter', `Cannot write to absolute path: ${file}`)
    }

    file = path.resolve(this.baseDir, file)

    return new VinylContentWriter(file, this.transform)
  }
}
