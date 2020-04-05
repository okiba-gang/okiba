/**
 * @module Store
 * @description A store module to implement state management.
 *
 * @example
 * import Store from '@okiba/store'
 *
 * const store = new Store({ level: 1 })
 *
 * const onLevelChange = level => {
 *  console.log(level)
 * }
 *
 * store.subscribe('level', onLevelChange)
 *
 * store.set('level', 2) // Logs: 2
 */
import EventEmitter from '@okiba/event-emitter'

/**
 * @constructor
 * @param {Object} initialState The initial store's state
 */

export default function Store(initialState = {}) {
  const emitter = new EventEmitter()
  const props = Object.keys(initialState)
  let data = { ...initialState }

  /**
   * Single state property setter
   * @param {String} key The property key
   * @param {any} value The property value
   */
  this.set = (key, value) => {
    data[key] = value
    emitter.emit(key, { value })
  }

  /**
   * Single state property getter
   * @param {String} key The property key
   */
  this.get = key => data[key]

  /**
   * State getter
   * @return {Object} The current state
   */
  this.getState = () => data

  /**
   * State setter
   * @param {Object} state The new state object
   */
  this.setState = state => {
    Object.entries(state).forEach(([key, value]) => this.set(key, value))
  }

  /**
   * State resetter
   */
  this.reset = () => {
    Object.keys(data).forEach(key => {
      this.set(key, (props.includes(key) ? initialState[key] : null))
    })
  }

  /**
   * State update subscription handler
   * @param {String} key The property to be observed
   * @param {Function} callback The function to be called on property update
   */
  this.subscribe = (key, callback) => emitter.on(key, callback)

  /**
   * State update unsubscription handler
   * @param {String} key The property to be unobserved
   * @param {Function} callback The handler to be dismissed
   */
  this.unsubscribe = (key, callback) => emitter.off(key, callback)
}
