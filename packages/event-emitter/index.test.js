import EventEmitter from '@okiba/event-emitter'

it('should add an handler and call it', done => {
  const ee = new EventEmitter()
  const spy = jest.fn()

  ee.on('test-event', spy)
  ee.emit('test-event')
  expect(spy).toBeCalled()
  done()
})

it('should remove an handler and not call it', done => {
  const ee = new EventEmitter()
  const spy = jest.fn()

  ee.on('test-event', spy)
  ee.off('test-event', spy)
  ee.emit('test-event')
  expect(spy).not.toBeCalled()
  done()
})

it('should not remove an handler if it has none', done => {
  const ee = new EventEmitter()

  const hs = Object.assign({}, ee.hs)
  ee.off('test-event', _ => _)

  expect(hs).toEqual(ee.hs)
  done()
})

it('should not remove an handler if reference is wrong', done => {
  const ee = new EventEmitter()

  ee.on('test-event', function test() {})
  const hs = Object.assign({}, ee.hs)
  ee.off('test-event', _ => _)

  expect(hs).toEqual(ee.hs)
  done()
})

it('should have at least one callback for "test-event" event', done => {
  const ee = new EventEmitter()
  ee.on('test-event', () => null)
  const ls = ee.hasListeners('test-event')
  expect(ls).toBe(true)
  done()
})

it('should not have any callback for "test-event" event', done => {
  const ee = new EventEmitter()
  const ls = ee.hasListeners('test-event')
  expect(ls).toBe(false)
  done()
})

it('should trigger the catchall listener on every event', done => {
  const ee = new EventEmitter()
  const mock = jest.fn()

  ee.on('*', mock)
  ee.emit('whatever')

  expect(mock).toBeCalled()
  done()
})

// it('should not trigger the catchall listener if it has no handlers', done => {
//   const ee = new EventEmitter()
//   const mock = jest.fn()

//   ee.hs = {'*': mock}
//   ee.trigger('whatever')

//   expect(mock).not.toBeCalled()
//   done()
// })

it('should not call listeners after destroy', done => {
  const ee = new EventEmitter()
  const spy = jest.fn()

  ee.on('test-event', spy)
  ee.destroy()
  ee.emit('test-event')
  expect(spy).not.toBeCalled()
  done()
})
