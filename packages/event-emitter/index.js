/**
 * @module EventEmitter
 * Emits events that can be listened and unlistened to
 * @example
 * import EventEmitter from '@okiba/event-emitter'
 * const emitter = new EventEmitter
 * emitter.on('log', console.log)
 * emitter.emit('log', 'Silence is deprecated')
 * // Logs: 'Silence is deprecated'
 *
 * emitter.off('log', console.log)
 * emitter.emit('log', 'Will not run')
 * // ...Nothing happens
 */
class EventEmitter {
  constructor() {
    this.hs = {}
  }

  /**
   * Sets an event listener for an event type
   * @param  {String} name    Event type
   * @param  {Function} handler Callback to be fired when that event occours
   */
  on(name, handler) {
    (
      this.hs[name] || (this.hs[name] = [])
    ).push(handler)
  }

  /**
   * Unsets an event listener for an event type
   * @param  {String} name    Event type
   * @param  {Function} handler Callback previously registered for that event type
   */
  off(name, handler) {
    if (!this.hs[name]) return

    const i = this.hs[name].indexOf(handler)
    if (i < 0) return

    this.hs[name].splice(i, 1)
  }

  /**
   * Triggers an event with optional data attached.
   * All listeners will be triggered in registration order.
   * Custom data will be passed to them as a parameter
   * @param  {String} name Event type
   * @param  {Object} [data] Custom data to be passed to the handlers
   */
  emit(name, data) {
    if (!this.hs[name]) return

    for (let i = 0; i < this.hs[name].length; ++i) {
      this.handlers[name][i](data)
    }
  }
}

export default EventEmitter
