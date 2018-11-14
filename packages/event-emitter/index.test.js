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
