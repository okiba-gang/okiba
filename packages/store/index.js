import EventEmitter from '@okiba/event-emitter'

export function Store(initialState = {}) {

  const emitter = new EventEmitter()
  const data = initialState

  this.set = (key, value) => {
    data[key] = value
    emitter.emit(`update:${key}`, { value })
  }

  this.get = key => {
    return data[key]
  }

  this.subscribe = (key, callback) => {
    emitter.on(`update:${key}`, callback)
  }

  this.unsubscribe = (key, callback) => {
    emitter.off(`update:${key}`, callback)
  }
}
