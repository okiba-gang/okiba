import {binarySearch} from './'

const length = 50
const data = []
for (let i = 0; i < length; i++) {
  data.push(i)
}

const dataObj = []
for (let i = 0; i < length; i++) {
  dataObj.push({i})
}

test('should find an element in an array', done => {
  const f = binarySearch(data, 5, 0, data.length - 1)
  expect(f).toBe(5)
  done()
})

test('should find object with exact prop in an array of object', done => {
  const f = binarySearch(dataObj, 5, 0, dataObj.length - 1, 'i')
  expect(f).toBe(5)
  done()
})

test('should find the closest element to the left', done => {
  const f = binarySearch(data, 3, 0, data.length - 1)
  expect(f).toBe(3)
  done()
})

test('should find an element at the start of the array', done => {
  const f = binarySearch(dataObj, 0, 0, dataObj.length - 1, 'i')
  expect(f).toBe(0)
  done()
})
