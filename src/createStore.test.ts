import { describe, it, expect } from 'vitest'
import { createStore } from './createStore'

const str = 'gastore'

describe('createStore', () => {
  it('get', () => {
    const values = [str, 0, false, undefined]
    const targets = values.map((val) => createStore(val))
    expect(targets.map((store) => store.get())).toEqual(values)
  })
  it('set', () => {
    const values = [str, 0, false, undefined]
    const targets = values.map(() => createStore())
    targets.forEach((target, index)=>target.set(values[index]))
    expect(targets.map((store) => store.get())).toEqual(values)
  })
  it('subscribe', () => {
    const name = createStore<string>()
    name.subscribe((value) => {
      expect(value).toBe(str)
    })
    name.set(str)
  })
})
