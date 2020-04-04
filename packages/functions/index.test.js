import { debounce } from '@okiba/functions'

describe('debounce', () => {
    let f = jest.Mock

    beforeEach(() => {
        f = jest.fn()
    })

    jest.useFakeTimers()

    test('[debounce] callback should be executed once (with default latency)', done => {
      const dF = debounce(f)
      for (let i = 0; i < 100; i++) dF()
      jest.runAllTimers()
      expect(f).toBeCalledTimes(1)
      done()
    })

    test('[debounce] callback should be executed once (with custom latency)', done => {
      const dF = debounce(f, 500)
      for (let i = 0; i < 100; i++) dF()
      jest.runAllTimers()
      expect(f).toBeCalledTimes(1)
      done()
    })
})
