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
export function binarySearch(data, target, start, end, prop) {
  const middle = ~~((start + end) / 2)
  let current

  if (prop) {
    current = data[middle][prop]
  } else {
    current = data[middle]
  }

  if (end - 1 === start) return start

  if (target === current) return middle
  if (target > current) return binarySearch(data, target, middle, end, prop)
  return binarySearch(data, target, start, middle, prop)
}
