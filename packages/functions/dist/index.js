var OkibaFunctions = (function (exports) {
  'use strict';

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
  function debounce(callback) {
    var latency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
    var timer = arguments.length > 2 ? arguments[2] : undefined;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return clearTimeout(timer, timer = setTimeout.apply(void 0, [callback, latency].concat(args)));
    };
  }

  exports.debounce = debounce;

  return exports;

}({}));
