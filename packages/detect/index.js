/**
 * @module  detect
 * @description Utilities to check some browser features
 */

let _hasPassiveEvents
const testHasPassiveEvents = {}
Object.defineProperties(testHasPassiveEvents, {
  check: {
    get() {
      if (_hasPassiveEvents !== void 0) {
        return _hasPassiveEvents
      }

      function noop() {}

      const options = Object.defineProperty({}, 'passive', {
        get() {
          _hasPassiveEvents = true
        }
      })

      window.addEventListener('_', noop, options)
      window.removeEventListener('_', noop, options)
      return _hasPassiveEvents
    }
  }
})

const testIsTouch = {}
Object.defineProperties(testIsTouch, {
  check: {
    get() {
      return 'ontouchstart' in window
    }
  }
})

/**
 * Check if browser supports passive events
 *
 * @example
 * import {hasPassiveEvents} from '@okiba/detect'
 *
 * console.log(hasPassiveEvents) // true
 *
 * @return {Boolean} true if browser supports passive events
 */
export const hasPassiveEvents = testHasPassiveEvents.check
/**
 * Check if browser has touch support
 *
 * @example
 * import {hasTouch} from '@okiba/detect'
 *
 * console.log(hasTouch) // true
 *
 * @return {Boolean} true if browser has touch support
 */
export const hasTouch = testIsTouch.check
