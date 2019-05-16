(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.arrays = {}));
}(this, function (exports) { 'use strict';

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
  function arrayOrOne(arrayLike) {
    if (arrayLike === void 0 || arrayLike.length === 0) {
      return void 0;
    }

    if (arrayLike.length === 1) {
      return arrayLike[0];
    }

    return arrayLike;
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

  function castArray(castable) {
    if (castable === void 0) return castable;

    if (castable instanceof Array) {
      return castable;
    }

    if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList) {
      return Array.prototype.slice.call(castable);
    }

    return [castable];
  }
  /**
   * Removes an element from an array in-place without causing Garbage Collection
   * @example
   * const array = [🍎, 🍐, 🍌]
   * spliceOne(array, 1)
   * console.log(array) // Logs: [🍎, 🍌]
   * @param {Array} array Array you want to remove an element from
   * @param {Number} index The index of the element to remove
   */

  function spliceOne(array, index) {
    for (var i = index, k = i + 1, n = array.length; k < n; i += 1, k += 1) {
      array[i] = array[k];
    }

    --array.length;
  }

  exports.arrayOrOne = arrayOrOne;
  exports.castArray = castArray;
  exports.spliceOne = spliceOne;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
