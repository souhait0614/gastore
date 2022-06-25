type SubscribeFunction<T> = (value: T) => unknown
interface SubscribeOptions {
  shouldFirstRun: boolean
}
const defaultSubscribeOptions: SubscribeOptions = {
  shouldFirstRun: false,
}

class Store<T> {
  private value: T | undefined = undefined
  private subscribeFunction: SubscribeFunction<T> | undefined = undefined

  constructor(value?: T) {
    if (value !== undefined) this.value = value
  }
  get() {
    return this.value
  }
  set(value: T) {
    this.value = value
    typeof this.subscribeFunction === 'function' && this.subscribeFunction(this.value)
    return this.value
  }
  subscribe(
    executeFunction: SubscribeFunction<T>,
    options: Partial<SubscribeOptions> = defaultSubscribeOptions,
  ) {
    this.subscribeFunction = executeFunction
    if (options.shouldFirstRun && this.value !== undefined) this.subscribeFunction(this.value)
  }
}

function createStore<T>(value?: T) {
  return new Store<T>(value)
}

export { createStore }
