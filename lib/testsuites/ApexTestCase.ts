import { formatToSeconds } from './helpers'
import { CATEGORY } from './constants'
import { JestCase, JunitCase } from './types'

/** Create an Apex test case. */
export class ApexTestCase {
  constructor (testData: any = {}) {
    Object.assign(this, testData)

    if (typeof this.time === 'string') {
      this.time = parseFloat(this.time)
    }

    this.id = `${Date.now().toString()}__${testData.id as string}`
    this.failureMessage = this.failureMessage === undefined ? '' : this.failureMessage
    this.failureText = this.failureText === undefined ? '' : this.failureText
  }

  id: string
  name: string
  classname: string
  time: number
  category: string
  failureText: string
  failureMessage: string

  /** Convert to Jest case. */
  toJest (): JestCase {
    const jestcase: JestCase = {
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

  /** Convert to Junit node. */
  toJunit (): { testcase: JunitCase } {
    const testcase: JunitCase = {
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
}
