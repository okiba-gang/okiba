/**
 * @module  easings
 * Collection of easings to alter a value
 * @example
 * import {easeInQuad} from '@okiba/easings'
 * const easedProgress = easeInQuad(progress)
 */

/**
 * Ease linear
 * @param  {Number} t Parameter to be eased
 */
export function linear(t) { return t }

/**
 * Ease In Quad
 * @param  {Number} t Parameter to be eased
 */
export function easeInQuad(t) { return t * t }

/**
 * Ease Out Quad
 * @param  {Number} t Parameter to be eased
 */
export function easeOutQuad(t) { return t * (2 - t) }


/**
 * Ease InOut Quad
 * @param  {Number} t Parameter to be eased
 */
export function easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }


/**
 * Ease In Cubic
 * @param  {Number} t Parameter to be eased
 */
export function easeInCubic(t) { return t * t * t }


/**
 * Ease Out Cubic
 * @param  {Number} t Parameter to be eased
 */
export function easeOutCubic(t) { return (--t) * t * t + 1 }


/**
 * Ease InOut Cubic
 * @param  {Number} t Parameter to be eased
 */
export function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }


/**
 * Ease In Quart
 * @param  {Number} t Parameter to be eased
 */
export function easeInQuart(t) { return t * t * t * t }


/**
 * Ease Out Quart
 * @param  {Number} t Parameter to be eased
 */
export function easeOutQuart(t) { return 1 - (--t) * t * t * t }


/**
 * Ease InOut Quart
 * @param  {Number} t Parameter to be eased
 */
export function easeInOutQuart(t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t }


/**
 * Ease In Quint
 * @param  {Number} t Parameter to be eased
 */
export function easeInQuint(t) { return t * t * t * t * t }


/**
 * Ease Out Quint
 * @param  {Number} t Parameter to be eased
 */
export function easeOutQuint(t) { return 1 + (--t) * t * t * t * t }


/**
 * Ease InOut Quint
 * @param  {Number} t Parameter to be eased
 */
export function easeInOutQuint(t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t }
