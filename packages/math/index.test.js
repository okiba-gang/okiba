import * as oMath from './'

test('[Lerp] should return the middle value when progress is 0.5', done => {
  const f = oMath.lerp(0, 100, 0.5)
  expect(f).toBe(50)
  done()
})

test('[Lerp] should return the start value when progress is 0', done => {
  const f = oMath.lerp(0, 100, 0)
  expect(f).toBe(0)
  done()
})

test('[Lerp] should return the end value when progress is 1', done => {
  const f = oMath.lerp(0, 100, 1)
  expect(f).toBe(100)
  done()
})

test('[cap] should return the minimum value when the number is smaller than start value', done => {
  const f = oMath.cap(-20, 0, 100)
  expect(f).toBe(0)
  done()
})

test('[cap] should return the same value when the number is between the start and end values', done => {
  const f = oMath.cap(20, 0, 100)
  expect(f).toBe(20)
  done()
})

test('[cap] should return the maximum value when the number is greater than end value', done => {
  const f = oMath.cap(120, 0, 100)
  expect(f).toBe(100)
  done()
})

test('[distance] should return the right value when values are positive', done => {
  const f = oMath.distance(10, 20)
  expect(f).toBe(10)
  done()
})

test('[distance] should return the right value when a value is negative', done => {
  const f = oMath.distance(-10, 10)
  expect(f).toBe(20)
  done()
})

test('[round] should return three digits after comma with default precision', done => {
  const f = oMath.round(0.12345)
  expect(f).toBe(0.123)
  done()
})

test('[round] should return one digit after comma with precision 1', done => {
  const f = oMath.round(0.12345, 1)
  expect(f).toBe(0.1)
  done()
})

test('[round] should return two digits after comma with precision 2', done => {
  const f = oMath.round(0.12345, 2)
  expect(f).toBe(0.12)
  done()
})

test('[round] should return four digits after comma with precision 4', done => {
  const f = oMath.round(0.12345, 4)
  expect(f).toBe(0.1235)
  done()
})

test('[round] should return four digits after comma with precision 4 from cached values', done => {
  const f = oMath.round(0.12345, 4)
  const e = oMath.round(0.54321, 4)
  expect(e).toBe(0.5432)
  done()
})

test('[map] should return initial value when mapped between two identical ranges', done => {
  const initial = 0.5
  const mapped = oMath.map(initial, 0, 1, 0, 1)
  expect(mapped).toEqual(initial)
  done()
})

test('[map] should return correct value when mapped between two different ranges', done => {
  const initial = 0.5
  const mapped = oMath.map(initial, 0, 1, 0, 1000)
  expect(mapped).toEqual(500)
  done()
})
