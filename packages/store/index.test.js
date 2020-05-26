import Store from '@okiba/store'

describe('store', () => {
  test('should create a store instance (with default initial state)', done => {
    const store = new Store()
    expect(store).toBeInstanceOf(Store)
    done()
  })

  test('should create a store instance (with custom initial state)', done => {
    const store = new Store({ key: 'value' })
    expect(store).toBeInstanceOf(Store)
    done()
  })

  test('should get a single property from store', done => {
    const store = new Store({ key: 'value' })
    const value = store.get('key')
    expect(value).toBe('value')
    done()
  })

  test('should get all properties from store', done => {
    const store = new Store({ key: 'value' })
    const state = store.getState()
    expect(state).toEqual({ key: 'value' })
    done()
  })

  test('should trigger the catchall event on every set', done => {
    const initialState = { key: 'value' }
    const expectedState = {...initialState, whatever: true}

    const store = new Store(initialState)
    const mock = jest.fn()

    store.subscribe('*', mock)
    store.set('whatever', true)

    expect(mock).toBeCalledWith(expectedState)
    done()
  })

  test('should notify an update on single store property value change', done => {
    const store = new Store({ key: 'value' })
    const f = jest.fn()
    store.subscribe('key', f)
    store.set('key', 'value2')
    expect(f).toBeCalled()
    done()
  })

  test('should update state and notify changes', done => {
    const store = new Store({ key: 'value' })
    const f = jest.fn()
    store.subscribe('key2', f)
    store.setState({ key: 'value', key2: 'value' })
    const state = store.getState()
    expect(f).toBeCalled()
    expect(state).toEqual({ key: 'value', key2: 'value' })
    done()
  })

  test('should not notify an update on store property value change', done => {
    const store = new Store({ key: 'value' })
    const f = jest.fn()
    store.unsubscribe('key', f)
    store.set('key', 'value3')
    expect(f).not.toBeCalled()
    done()
  })

  test('should reset state and notify updates', done => {
    const store = new Store({ key: 'value' })
    const f = jest.fn()
    store.set('key2', 'asd')
    store.subscribe('key', f)
    store.reset()
    const state = store.getState()
    expect(f).toBeCalled()
    expect(state).toEqual({ key: 'value'})
    done()
  })
})
