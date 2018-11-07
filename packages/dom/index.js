/**
 * @module  dom
 * @description Utilities to work with dom elements and selectors
 */
import {castArray} from '@okiba/arrays'

/**
 * Selects an array of DOM elements, scoped to element
 *
 * @example
 * import {qsa} from '@akiba/dom'
 * const fruits = qsa('.fruit')
 * console.log(fruits) // [div.fruit, div.fruit]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element[]} An array of DOM elements matching `selector`
 */
export function qsa(selector, element = document) {
  return castArray(element.querySelectorAll(selector))
}
