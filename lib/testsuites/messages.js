const uuidv4 = require('uuid/v4')
const { DEFAULT_TIME_MS, CATEGORY } = require('./constants')
const { ApexTestCase } = require('./ApexTestCase')

class ApexComponentMessage {
  constructor (componentMessage = {}) {
    Object.assign(this, componentMessage)

    this.normalize()

    if (this.success) {
      this.category = CATEGORY.SUCCESS
    } else {
      this.category = CATEGORY.FAILURE
    }
  }

  toApexTestCase () {
    let failureText = ''

    if (this.category === CATEGORY.FAILURE) {
      failureText = `${this.problemType}: ${this.problem}`
    }

    return new ApexTestCase({
      id: this.id,
      classname: this.componentType === '' ? this.fullName.replace('.', '-') : this.componentType,
      name: this.fullName + ' - ' + this.fileName,
      time: DEFAULT_TIME_MS,
      category: this.category,
      failureMessage: this.problem || '',
      failureText
    })
  }

  normalize () {
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
  }
}

class ApexTestMessage {
  constructor (testMessage = {}) {
    Object.assign(this, testMessage)

    this.normalize()

    if (this.message || this.stackTrace) {
      this.category = CATEGORY.FAILURE
    } else {
      this.category = CATEGORY.SUCCESS
    }
  }

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

  normalize () {
    if (typeof this.namespace !== 'string') {
      delete this.namespace
    }

    if (typeof this.time === 'string') {
      this.time = parseFloat(this.time)
    }
  }
}

module.exports = {
  ApexComponentMessage,
  ApexTestMessage
}
