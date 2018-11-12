import * as oMath from './'

test('lerp a value between 0 and 100 at 0.5 return 50 ', done => {
  const f = oMath.lerp(0,100,0.5)
  expect(f).toBe(50)
  done()
})

test('lerp a value between 0 and 100 at 0 return 0 ', done => {
  const f = oMath.lerp(0,100,0)
  expect(f).toBe(0)
  done()
})

test('lerp a value between 0 and 100 at 1 return 100 ', done => {
  const f = oMath.lerp(0,100,1)
  expect(f).toBe(100)
  done()
})

test('cap -20 value between 0 and 100 return 0 ', done => {
  const f = oMath.cap(-20,0,100)
  expect(f).toBe(0)
  done()
})

test('cap 20 value between 0 and 100 return 20', done => {
  const f = oMath.cap(20,0,100)
  expect(f).toBe(20)
  done()
})

test('cap 120 value between 0 and 100 return 100 ', done => {
  const f = oMath.cap(120,0,100)
  expect(f).toBe(100)
  done()
})

test('distance between 10 and 20 is 10 ', done => {
  const f = oMath.distance(10,20)
  expect(f).toBe(10)
  done()
})

test('distance between -10 and -10 is 20', done => {
  const f = oMath.distance(-10,10)
  expect(f).toBe(20)
  done()
})

test('round 0.12345 return 0.123', done => {
  const f = oMath.round(0.12345)
  expect(f).toBe(0.123)
  done()
})

test('round 0.12345 with precision 1 return 0.1', done => {
  const f = oMath.round(0.12345,1)
  expect(f).toBe(0.1)
  done()
})

test('round 0.12345 with precision 2 return 0.12', done => {
  const f = oMath.round(0.12345,2)
  expect(f).toBe(0.12)
  done()
})

test('round 0.12345 with precision 4 return 0.1234', done => {
  const f = oMath.round(0.12345,4)
  expect(f).toBe(0.1235)
  done()
})

test('round 0.12345 with precision 4 return 0.1234 with cached precision', done => {
  const f = oMath.round(0.12345,4)
  const e = oMath.round(0.54321,4)
  expect(e).toBe(0.5432)
  done()
})

