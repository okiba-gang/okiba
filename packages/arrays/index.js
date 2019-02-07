/**
 * @module arrays
 * @description Array utils for okiba js
 */

/**
 * Return the first element if it only contains one
 * @example
 * const els = arrayOrOne([🍏, 🍌])
 * console.log(els) // [🍏, 🍌]
 *
 * const els = arrayOrOne([🍏])
 * console.log(els) // 🍏
 *
 * @param {Array-like} arrayLike The options object.
 * @returns {any} The first element or the argument, undefined if empty array
 */
export function arrayOrOne(arrayLike) {
  if (arrayLike === void 0 || arrayLike.length === 0) {
    return void 0
  }

  if (arrayLike.length === 1) {
    return arrayLike[0]
  }

  return arrayLike
}

/**
 * Cast an array-like object or single element to Array
 * @example
 * const elements = castArray(document.querySelectorAll('p')) // [p, p]
 * const fruits = castArray(🍒) // [🍒]
 *
 * @param {any} castable Array to cast
 * @returns {Array} The array-like converted to Array, or an Array containing the element
 */
export function castArray(castable) {
  if (castable === void 0) return castable

  if (castable instanceof Array) {
    return castable
  }

  if (castable.length === void 0 ||
      typeof castable === 'string' ||
      typeof castable === 'function' ||
      castable instanceof HTMLElement
  ) {
    return [castable]
  }

  return Array.prototype.slice.call(castable)
}
