export function lerp(min, max, fraction) {
  return (max - min) * fraction + min
}

export function cap(n, min, max) {
  return Math.min(Math.max(n, min), max)
}

export function distance(x1, x2) {
  return Math.abs(x1 - x2)
}
