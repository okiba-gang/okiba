export function linear(t) { return t }
export function easeInQuad(t) { return t * t }
export function easeOutQuad(t) { return t * (2 - t) }
export function easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }
export function easeInCubic(t) { return t * t * t }
export function easeOutCubic(t) { return (--t) * t * t + 1 }
export function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
export function easeInQuart(t) { return t * t * t * t }
export function easeOutQuart(t) { return 1 - (--t) * t * t * t }
export function easeInOutQuart(t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t }
export function easeInQuint(t) { return t * t * t * t * t }
export function easeOutQuint(t) { return 1 + (--t) * t * t * t * t }
export function easeInOutQuint(t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t }
