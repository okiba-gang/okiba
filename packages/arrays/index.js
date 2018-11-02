export function arrayOrOne(arrayLike) {
  if (arrayLike.length === 1) {
    return arrayLike[0]
  }

  return arrayLike
}

export function castArray(arrayLike) {
  if (arrayLike instanceof Array) {
    return arrayLike
  }

  return Array.prototype.slice.call(arrayLike)
}
