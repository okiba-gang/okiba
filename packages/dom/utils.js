import { castArray } from '@okiba/arrays'
/**
 * Memo used to cache properties and methods trough the module
 */
const memo = {}

export function getMatcher() {
  if (!memo.matcher) {
    for (const k of [
      'matchesSelector',
      'mozMatchesSelector',
      'msMatchesSelector',
      'oMatchesSelector',
      'webkitMatchesSelector'
    ]) {
      if (k in Element.prototype) {
        memo.matcher = k
        break
      }
    }
  }

  return memo.matcher
}

/**
 * Generic event add/removal factory
 */
export function eventBuilder(source, type, handler, action, options) {
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
