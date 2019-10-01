/**
 * @module  dom
 * @description Utilities to work with dom elements and selectors
 */
import {castArray} from '@okiba/arrays'

/**
 * Selects a DOM Element with a certain id
 *
 * @example
 * import {byId} from '@okiba/dom'
 * const apple = byId('apple')
 * console.log(apple) // [div.apple]
 *
 * @param  {String}  id DOM id you are looking for
 *
 * @return {Element} A DOM Element matching `id`
 */
export function byId(id) {
  return document.getElementById(id)
}

/**
 * Selects a DOM Element, scoped to element
 *
 * @example
 * import {qs} from '@okiba/dom'
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
 * import {qsa} from '@okiba/dom'
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

function evt(source, type, handler, action, options) {
  if (!type || !handler) return false

  const elements = castArray(source)
  const types = castArray(type)
  const handlers = castArray(handler)

  for (let i = 0; i < elements.length; ++i) {
    for (let j = 0; j < types.length; ++j) {
      elements[i][`${action}EventListener`](types[j], handlers[Math.min(j, handlers.length - 1)], options)
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
 * @param {(Element|Element[])} [window] source
 * the element which will trigger the event
 * @param {(String|String[])} type
 * the event name to bind. Or an array of
 * @param {(Function|Function[])} handler
 * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
 * if there are less handlers than event types, the last handler is bound to all remaining events.
 *
 * @return {Boolean} Success of the binding
 */
export function on(source, type, handler, options) {
  return evt(source, type, handler, 'add', options)
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
 * @param {(Element|Element[])} [window] source
 * Element which will trigger the event
 * @param {(String|String[])} type
 * Event name to unbind. Or an array of
 * @param {(Function|Function[])} handler
 * Callback bound to the event. If an array is supplied the handlers will be unbound in order,
 * if there are less handlers than event types, the last handler is unbound from all remaining events.
 *
 * @return {Boolean} Success of the unbinding
 */
export function off(source, type, handler, options) {
  return evt(source, type, handler, 'remove', options)
}

/**
 *
 * Read mouse and touch position in the same way
 *
 * @example
 * import {eventCoords, on} from '@okiba/dom'
 * on(window, ['mousemove', 'touchmove'], onMove)
 *
 * function onMove(e){
 *  const coords = eventCoords(e)
 *  console.log(coords)
 * }
 *
 * @param {Event} DOM Event
 *
 * @return {Object} Event position coordinates (clientX and ClientY)
 */
export function eventCoords(event) {
  let coords = event
  if (event.type.indexOf('touch') === 0) {
    coords = event.touches[0] || event.changedTouches[0]
  }
  return {
    clientX: coords.clientX,
    clientY: coords.clientY,
  }
}

/**
 * Gets top and left offsets of an element
 *
 * @example
 * import {qs, offset} from '@okiba/dom'
 * const el = qs('.something')
 * const offsets = offset(el)
 * console.log(offsets) // Logs: {top: 100, left: 100}
 *
 * @param {Element} el The element you want to get offsets of
 *
 * @return {Object} Object containing `top` and `left` offsets
 */
export function offset(el) {
  let left = 0
  let top = 0

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    left += el.offsetLeft - (el.tagName !== 'BODY' ? el.scrollLeft : 0)
    top += el.offsetTop - (el.tagName !== 'BODY' ? el.scrollTop : 0)
    el = el.offsetParent
  }

  return {
    top,
    left
  }
}


/**
 * Useful to normalize parameters accepted by modules which work with dom nodes.
 * If you need to have an array of Elements and you want to accept any of: String, String array, Element, Element array
 *
 *
 * @example
 * import {qs, getElements} from '@okiba/dom'
 * const els1 = getElements(['.some', '#thing']) // => [div.some, span#it]
 *
 * const el = qs('.element')
 * const els2 = getElements(el) // => [el]
 *
 * @param {(String|String[]|Element|Element[])} target The target you want to be sure to obtain as an array of Elements
 *
 * @return {Element[]} An array of Elements
 */
export function getElements(target) {
  let els

  if (typeof target === 'string') {
    els = qsa(target)
  }

  if (target instanceof Node) {
    els = [target]
  }

  if (target instanceof NodeList) {
    els = castArray(target)
  }

  if (target instanceof Array) {
    if (target[0] instanceof Node) {
      return target
    } else if (typeof target[0] === 'string') {
      els = target.reduce((acc, curr) => acc.concat(qsa(curr)), [])
    }
  }

  if (!els) {
    throw new Error('No target provided')
  }

  return els
}
