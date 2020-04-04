/**
 * @module functions
 * @description A collection of contextless utility functions
 */

/**
 * Callback debounce helper.
 * Returns a debounced version of provided callback
 *
 * @param {Function} callback The callback to be debounced
 * @param {Number} latency The debounce delay time
 * @param {Number} timer The timer id
 *
 * @example
 * import {debounce} from '@okiba/functions'
 *
 * const onResize = () => console.log('window resized')
 * window.addEventListener('resize', debounce(onResize, 300))
 *
 * @return {Function} The debounced version of original callback
 */
export function debounce(callback, latency = 250, timer) {
  return (...args) => clearTimeout(timer, timer = setTimeout(callback, latency, ...args))
}
