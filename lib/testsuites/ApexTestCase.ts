import { formatToSeconds } from './helpers'
import { CATEGORY } from './constants'
import { JunitNode } from './types'

export interface ApexTestCaseInput extends Omit<ApexTestCase, 'time'> {
  time: string | number
}

export class ApexTestCase {
  constructor (testData: ApexTestCaseInput) {
    Object.assign(this, this.normalize(testData))
  }

  id: string
  name: string
  classname: string
  time: number
  category: string
  failureText: string
  failureMessage: string

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
    const testcase: JunitNode = {
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

  private normalize (input: ApexTestCaseInput): ApexTestCase {
    const result: ApexTestCase = Object.assign({}, input) as any

    if (typeof input.time === 'string') {
      result.time = parseFloat(input.time)
    }

    result.id = Date.now().toString() + '__' + result.id
    result.failureMessage = result.failureMessage === undefined ? '' : result.failureMessage
    result.failureText = result.failureText === undefined ? '' : result.failureText

    return result
  }
}
