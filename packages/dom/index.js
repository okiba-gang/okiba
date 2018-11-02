import {castArray} from '@okiba/arrays'

export function qsa(selector, element = document) {
  return castArray(element.querySelectorAll(selector))
}
