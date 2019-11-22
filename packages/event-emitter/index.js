/**
 * @module EventEmitter
 * @description Emits events that can be listened and unlistened to
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
      this.hs[name] || (this.hs[name] = new Map())
    ).set(handler, handler)
  }

  /**
   * Unsets an event listener for an event type
   * @param  {String} name    Event type
   * @param  {Function} handler Callback previously registered for that event type
   */
  off(name, handler) {
    if (!this.hs[name]) return
    this.hs[name].delete(handler)
  }

  /**
   * Triggers an event with optional data attached.
   * All listeners will be triggered in registration order.
   * Custom data will be passed to them as a parameter
   * @param  {String} name Event type
   * @param  {Object} [data] Custom data to be passed to the handlers
   */
  emit(name, data) {
    if (!this.hs || !this.hs[name]) return
    this.hs[name].forEach(handler => handler(data))
  }

  /**
   * Removes all event listeners and deletes the handlers object
   */
  destroy() {
    Object.keys(this.hs)
      .forEach((name) =>
        this.hs[name].clear()
      )

    delete this.hs
  }
}

export default EventEmitter
