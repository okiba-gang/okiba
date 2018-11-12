import {binarySearch} from './'

const length = 50;
const data = [];
for (let i = 0; i < length; i++) {
  data.push(i);
}

const dataObj = [];
for (let i = 0; i < length; i++) {
  dataObj.push({i});
}

test('find 5 in array', done => {
  const f = binarySearch(data, 5, 0, data.length-1)
  expect(f).toBe(5)
  done()
})


test('find prop i with value 5 in array of object', done => {
  const f = binarySearch(dataObj, 5, 0, dataObj.length-1, 'i')
  expect(f).toBe(5)
  done()
})

test('find prop i with value 0 in array of object', done => {
  const f = binarySearch(dataObj, 0, 0, dataObj.length-1, 'i')
  expect(f).toBe(0)
  done()
})
