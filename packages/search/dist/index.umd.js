(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['function search() { [native code] }'] = {}));
}(this, function (exports) { 'use strict';

  /**
   * @module search
   * @description Search utilities
   */

  /**
   * Binary searches an array
   * @param  {Object[]|Number[]}  data   data to search
   * @param  {Number} target the value to find
   * @param  {Number} start  array index where to start from
   * @param  {Number} end    array index where to end to
   * @param  {String} [prop] property to look into (if data contains objects)
   * @return {Number}        index of the closest element found
   */
  function binarySearch(data, target, start, end, prop) {
    var middle = ~~((start + end) / 2);
    var current = prop ? data[middle][prop] : data[middle];
    if (end - 1 === start) return start;
    if (target === current) return middle;
    if (target > current) return binarySearch(data, target, middle, end, prop);
    return binarySearch(data, target, start, middle, prop);
  }

  exports.binarySearch = binarySearch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
