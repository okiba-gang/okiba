import {arrayOrOne, castArray} from './'
import { JSDOM } from 'jsdom'

const { document } = (new JSDOM('<p></p><p></p><p></p>')).window

const array = ['0', '1']
const singleArray = ['0']
const single = '0'
const nodeList = document.querySelectorAll('p')
const nodeArray = Array.from(nodeList)

test('arrayOrOne, should return same array', done => {
  const res = arrayOrOne(array)
  expect(res).toBe(array)
  done()
})

test('arrayOrOne, should return first element', done => {
  const res = arrayOrOne(singleArray)
  expect(res).toBe(singleArray[0])
  done()
})

test('arrayOrOne, should return undefined if passed an undefined', done => {
  expect(arrayOrOne(void 0)).toEqual(void 0)
  done()
})

test('arrayOrOne, should return undefined if passed an empty array', done => {
  expect(arrayOrOne([])).toEqual(void 0)
  done()
})

test('castArray, should return same array', done => {
  const res = castArray(array)
  expect(res).toBe(array)
  done()
})

test('castArray, should return undefined if passed an undefined', done => {
  expect(castArray(void 0)).toEqual(void 0)
  done()
})

test('castArray, should return an array from single', done => {
  const res = castArray(single)
  expect(res).toEqual(singleArray)
  done()
})

test('castArray, should return an array from array-like', done => {
  const res = castArray(single)
  expect(res).toEqual(singleArray)
  done()
})

test('castArray, should return an array from array-like with the same elements in it', done => {
  const res = castArray(nodeList)
  expect(nodeList instanceof Array).toEqual(false)
  expect(res instanceof Array).toEqual(true)
  expect(res).toEqual(nodeArray)
  done()
})
