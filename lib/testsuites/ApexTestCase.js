const { formatToSeconds } = require('./helpers')
const { CATEGORY } = require('./constants')

class ApexTestCase {
  constructor (testData = {}) {
    Object.assign(this, testData)

    this.normalize()
  }

  toJest () {
    const jestcase = {
      ancestorTitles: [this.classname],
      duration: this.time,
      failureMessages: [],
      fullName: this.classname,
      location: null,
      numPassingAsserts: 0,
      status: 'passed',
      title: this.name
    }

    if (this.category === CATEGORY.FAILURE) {
      jestcase.status = 'failed'
      jestcase.failureMessages.push(this.failureText)
    }

    return jestcase
  }

  toJunit () {
    const testcase = {
      $: {
        id: this.id,
        classname: this.classname,
        name: this.name,
        time: formatToSeconds(this.time)
      }
    }

    if (this.category === CATEGORY.FAILURE) {
      testcase.failure = {
        $: { message: this.failureMessage, type: 'ERROR' },
        _: this.failureText
      }
    }

    return {
      testcase
    }
  }

  normalize () {
    if (typeof this.time === 'string') {
      this.time = parseFloat(this.time)
    }

    this.id = Date.now().toString() + '__' + this.id

    this.failureMessage = this.failureMessage === undefined ? '' : this.failureMessage
    this.failureText = this.failureText === undefined ? '' : this.failureText
  }
}

module.exports = {
  ApexTestCase
}
