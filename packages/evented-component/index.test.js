import EventedComponent from '@okiba/evented-component'

it('should be a component with event emitter methods', done => {
  const ec = new EventedComponent({})
  expect(ec).toMatchObject({
    on: expect.any(Function),
    off: expect.any(Function),
    emit: expect.any(Function)
  })

  done()
})

it('should work as event emitter', done => {
  const ec = new EventedComponent({})
  const spy = jest.fn()

  ec.on('test-event', spy)
  ec.emit('test-event')
  ec.off('test-event', spy)
  ec.emit('test-event')
  expect(spy).toHaveBeenCalledTimes(1)
  done()
})
