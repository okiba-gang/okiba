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
