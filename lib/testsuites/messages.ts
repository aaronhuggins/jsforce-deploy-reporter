import { v4 as uuidv4 } from 'uuid'
import { DEFAULT_TIME_MS, CATEGORY } from './constants'
import { ApexTestCase } from './ApexTestCase'

export class ApexComponentMessage {
  constructor (componentMessage: any = {}) {
    Object.assign(this, componentMessage)

    const booleans = ['changed', 'created', 'deleted', 'success']

    booleans.forEach(key => {
      if (typeof this[key] !== 'boolean') {
        switch (this[key].toString()) {
          case 'true':
            this[key] = true
            break
          case 'false':
            this[key] = false
            break
          default:
            this[key] = false
            break
        }
      }
    })

    this.id = this.id === undefined ? uuidv4().replace('-', '') : this.id

    if (this.success) {
      this.category = CATEGORY.SUCCESS
    } else {
      this.category = CATEGORY.FAILURE
    }
  }

  id: string
  fileName: string
  fullName: string
  componentType: string
  category: string
  problem: string
  problemType: string
  lineNumber: number
  columnNumber: number
  changed: boolean
  created: boolean
  deleted: boolean
  success: boolean

  toApexTestCase (): ApexTestCase {
    let failureText = ''

    if (this.category === CATEGORY.FAILURE) {
      failureText = `${this.problemType} on line ${this.lineNumber}, column ${this.columnNumber}:\n ${this.problem}`
    }

    return new ApexTestCase({
      id: this.id,
      classname: 'Component ' + (this.componentType === '' ? this.fullName.replace('.', '-') : this.componentType),
      name: this.fullName + ': file ' + this.fileName,
      time: DEFAULT_TIME_MS,
      category: this.category,
      failureMessage: this.problem || '',
      failureText
    })
  }
}

export class ApexTestMessage {
  constructor (testMessage: any = {}) {
    Object.assign(this, testMessage)

    if (typeof this.namespace !== 'string') {
      delete this.namespace
    }

    if (typeof this.time === 'string') {
      this.time = parseFloat(this.time)
    }

    if (this.message || this.stackTrace) {
      this.category = CATEGORY.FAILURE
    } else {
      this.category = CATEGORY.SUCCESS
    }
  }

  name: string
  methodName: string
  category: string
  namespace: string
  time: number
  message: string
  stackTrace: string

  toApexTestCase () {
    let failureText = ''

    if (this.category === CATEGORY.FAILURE) {
      failureText = `Error: ${this.message}\n${this.stackTrace}`
    }

    return new ApexTestCase({
      id: uuidv4().replace(/-/gu, ''),
      classname: this.name,
      name: this.methodName,
      time: this.time,
      category: this.category,
      failureMessage: this.message || '',
      failureText
    })
  }
}
