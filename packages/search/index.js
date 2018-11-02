export function binarySearch(data, target, start, end, prop) {
  const middle = ~~((start + end) / 2)
  const current = prop ? data[middle][prop] : data[middle]

  if (end - 1 === start) return start

  if (target === current) return middle
  if (target > current) return binarySearch(data, target, middle, end, prop)
  return binarySearch(data, target, start, middle, prop)
}
