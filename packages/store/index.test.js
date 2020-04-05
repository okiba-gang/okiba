import Store from '@okiba/store'

describe('store', () => {
  const f = jest.fn()
  let store

  test('should create a store instance (with default initial state)', done => {
    store = new Store()
    expect(store).toBeInstanceOf(Store)
    done()
  })

  test('should create a store instance (with custom initial state)', done => {
    store = new Store({ key: 'value' })
    expect(store).toBeInstanceOf(Store)
    done()
  })

  test('should get a single property from store', done => {
    const value = store.get('key')
    expect(value).toBe('value')
    done()
  })

  test('should get all properties from store', done => {
    const state = store.getState()
    expect(state).toEqual({ key: 'value' })
    done()
  })

  test('should notify an update on single store property value change', done => {
    store.subscribe('key', f)
    store.set('key', 'value2')
    expect(f).toBeCalledTimes(1)
    done()
  })

  test('should update state and notify changes', done => {
    store.subscribe('key2', f)
    store.setState({ key: 'value', key2: 'value' })
    const state = store.getState()
    expect(f).toBeCalledTimes(3)
    expect(state).toEqual({ key: 'value', key2: 'value' })
    done()
  })

  test('should not notify an update on store property value change', done => {
    store.unsubscribe('key', f)
    store.set('key', 'value3')
    expect(f).toBeCalledTimes(3)
    done()
  })

  test('should reset state and notify updates', done => {
    store.reset()
    const state = store.getState()
    expect(f).toBeCalledTimes(4)
    expect(state).toEqual({ key: 'value', key2: null })
    done()
  })
})
