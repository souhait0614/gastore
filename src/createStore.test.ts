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
    const targets = values.map(() => createStore<unknown>(undefined))
    targets.forEach((target, index) => target.set(values[index]))
    expect(targets.map((store) => store.get())).toEqual(values)
  })
  it('update', () => {
    const values = [0, 1, 2, 3, 4]
    const targets = values.map((value) => createStore(value))
    targets.forEach((target) => target.update((prev) => prev + 1))
    expect(targets.map((store) => store.get())).toEqual(values.map((val) => val + 1))
  })
  it('subscribe', async () => {
    const values = [str, 0, false, undefined]
    const targets = values.map((val) => createStore(val))
    const result = await Promise.all(
      targets.map(
        (target) =>
          new Promise((resolve) =>
            target.subscribe((value) => resolve(value), { shouldFirstRun: true }),
          ),
      ),
    )
    expect(result).toEqual(values)
  })
})
