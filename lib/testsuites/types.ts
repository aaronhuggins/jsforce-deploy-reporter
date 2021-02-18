export interface JunitNode {
  $: {
    id: string
    classname: string
    name: string
    time: string
  }
  failure?: {
    $: {
      message: string
      type: 'ERROR'
    }
    _: string
  }
}
