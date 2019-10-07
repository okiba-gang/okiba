var OkibaMath = (function (exports) {
  'use strict';

  /**
   * @module math
   * @description Collection of math functions
   */

  /**
   * Linear interpolation between a two values
   * @param  {Number} min      Minimum possible value
   * @param  {Number} max      Maximum possible value
   * @param  {Number} fraction Current position
   * @return {Number}          The interpolated value
   *
   * @example
   * import {lerp} from '@okiba/math'
   * const xPosition = lerp(0, 100, 0.5)
   * console.log(xPosition) // 50
   */
  function lerp(min, max, fraction) {
    return (max - min) * fraction + min;
  }
  /**
   * Maps a value between two ranges
   * @param  {Number} n       Value to map
   * @param  {Number} min1    Source range minimum
   * @param  {Number} max1    Source range maximum
   * @param  {Number} min2    Target range minimum
   * @param  {Number} max2    Target range maximum
   * @return {Number}         Mapped value
   *
   * @example
   * import {map} from '@okiba/math'
   *
   * const x = map(0.5, 0, 1, 0, 1000)
   * console.log(x) // 500
   *
   * const y = map(0, -1, 1, -1000, 1000)
   * console.log(y) // 0
   */

  function map(n, min1, max1, min2, max2) {
    return (n - min1) * (max2 - min2) / (max1 - min1) + min2;
  }
  /**
   * Limit a value between a min and a max (inclusive)
   * @param  {Number} n   Value to cap
   * @param  {Number} min Minimum possible value
   * @param  {Number} max Maximum possible value
   * @return {Number}     Capped value
   *
   * @example
   * import {cap} from '@okiba/math'
   * let progress = 1.1
   * progress = cap(0, 1, progress)
   * console.log(progress) // 1
   */

  function cap(n, min, max) {
    return Math.min(Math.max(n, min), max);
  }
  /**
   * Distance between two numbers
   * @param  {Number} x1 First number
   * @param  {Number} x2 Second number
   * @return {Number}    Distance between the values
   *
   * @example
   * import {distance} from '@okiba/math'
   * const x1 = -100, x2 = 100
   * const d = distance(x1, x2)
   * console.log(d) // 200
   */

  function distance(x1, x2) {
    return Math.abs(x1 - x2);
  }
  var roundMap = {};
  /**
   * Round a number with given precision, with memoized powers
   * @param  {Number} n Number to round
   * @param  {Number} [p=3] Precision of digits to leave
   * @return {Number} Rounded number
   *
   * @example
   * import {round} from '@okiba/math'
   * const rounded = distance(1.111111, 3)
   * console.log(rounded) // 1.111
   */

  function round(n) {
    var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    if (!roundMap[p]) {
      roundMap[p] = Math.pow(10, p);
    }

    return Math.round(n * roundMap[p]) / roundMap[p];
  }

  exports.cap = cap;
  exports.distance = distance;
  exports.lerp = lerp;
  exports.map = map;
  exports.round = round;

  return exports;

}({}));
