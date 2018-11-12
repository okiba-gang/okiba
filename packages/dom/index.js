/**
 * @module  dom
 * @description Utilities to work with dom elements and selectors
 */
import {castArray} from '@okiba/arrays'

/**
 * Selects a DOM Element, scoped to element
 *
 * @example
 * import {qs} from '@akiba/dom'
 * const pear = qs('.pear')
 * console.log(pear) // [div.pear]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element} A DOM Element matching `selector`
 */
export function qs(selector, element = document) {
  return element.querySelector(selector)
}

/**
 * Selects an array of DOM Elements, scoped to element
 *
 * @example
 * import {qsa} from '@akiba/dom'
 * const fruits = qsa('.fruit')
 * console.log(fruits) // [div.fruit, div.fruit]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element[]} An array of DOM elements matching `selector`
 */
export function qsa(selector, element = document) {
  return castArray(element.querySelectorAll(selector))
}

function evt(source, type, handler, action) {
  if (!type || !handler) return false

  const elements = castArray(source)
  const types = castArray(type)
  const handlers = castArray(handler)

  for (let i = 0; i < elements.length; ++i) {
    for (let j = 0; j < types.length; ++j) {
      elements[i][`${action}EventListener`](types[j], handlers[Math.min(j, handlers.length - 1)])
    }
  }

  return true
}

/**
 * Attaches an event listener to a DOM Element, or an array of.
 *
 * @example
 * import {qsa, on} from '@okiba/dom'
 * const buttons = qsa('.button')
 *
 * on(buttons, 'click', onClick)
 * on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
 * on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {Element|[]Element} [window] source
 * the element which will trigger the event
 * @param {String|[]String} type
 * the event name to bind. Or an array of
 * @param {Function|[]Function} handler
 * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
 * if there are less handlers than event types, the last handler is bound to all remaining events.
 *
 * @return {Boolean} Success of the binding
 */
export function on(source, type, handler) {
  return evt(source, type, handler, 'add')
}

/**
 * Detached an event listener from a DOM Element, or an array of.
 *
 * @example
 * import {qs, off} from '@okiba/dom'
 * const button = qs('.button')
 *
 * button.addEventListener('click', onButtonClick)
 * // or okiba's `on` on(button, 'click')
 *
 * off(button, 'click', onButtonClick)
 *
 * // removes `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // removes `onClick` from 'click' and `onMouseChange` from both 'mouseenter' and 'mouseleave'
 * off(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {Element|[]Element} [window] source
 * Element which will trigger the event
 * @param {String|[]String} type
 * Event name to unbind. Or an array of
 * @param {Function|[]Function} handler
 * Callback bound to the event. If an array is supplied the handlers will be unbound in order,
 * if there are less handlers than event types, the last handler is unbound from all remaining events.
 *
 * @return {Boolean} Success of the unbinding
 */
export function off(source, type, handler) {
  return evt(source, type, handler, 'remove')
}
