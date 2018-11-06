export function lerp(min, max, fraction) {
  return (max - min) * fraction + min
}

export function cap(n, min, max) {
  return Math.min(Math.max(n, min), max)
}

export function distance(x1, x2) {
  return Math.abs(x1 - x2)
}

const roundMap = {}
export function round(n, p = 3) {
  if (!roundMap[p]) {
    roundMap[p] = Math.pow(10, p)
  }
  return Math.round(n * roundMap[p]) / roundMap[p]
}
