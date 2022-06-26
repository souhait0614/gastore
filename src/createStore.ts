type SubscribeFunction<T> = (value: T) => void
interface SubscribeOptions {
  shouldFirstRun: boolean
}
const defaultSubscribeOptions: SubscribeOptions = {
  shouldFirstRun: false,
}

class Store<T extends unknown> {
  private value: T
  private subscribeFunc: SubscribeFunction<T> | undefined = undefined

  constructor(value: T) {
    this.value = value
  }
  subscribe(execFunc: SubscribeFunction<T>, options: SubscribeOptions = defaultSubscribeOptions) {
    options = { ...defaultSubscribeOptions, ...options }
    this.subscribeFunc = execFunc
    if (options.shouldFirstRun) this.subscribeFunc(this.value)
  }
  set(value: T): T {
    this.value = value
    if (this.subscribeFunc) this.subscribeFunc(this.value)
    return this.value
  }
  update(updateFunc: (prev: T) => T): T {
    this.value = updateFunc(this.value)
    if (this.subscribeFunc) this.subscribeFunc(this.value)
    return this.value
  }
  get(): T {
    return this.value
  }
}

function createStore<T>(value: T): Store<T> {
  return new Store<T>(value)
}

export { createStore }
