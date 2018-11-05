export function arrayOrOne(arrayLike) {
  if (arrayLike.length === 1) {
    return arrayLike[0]
  }

  return arrayLike
}

export function castArray(castable) {
  if (castable instanceof Array) {
    return castable
  }

  if (castable.length === void 0) {
    return [castable]
  }

  return Array.prototype.slice.call(castable)
}
