import {arrayOrOne, castArray, spliceOne} from './'
import { JSDOM } from 'jsdom'

const { window } = (new JSDOM('<p></p><p></p><p></p>'))
const { document } = window

const array = ['0', '1']
const singleArray = ['0']
const single = '0'
const nodeList = document.querySelectorAll('p')
const nodeArray = Array.from(nodeList)
global.HTMLElement = window.HTMLElement
global.NodeList = window.NodeList
global.DOMTokenList = window.DOMTokenList
global.HTMLCollection = window.HTMLCollection

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
  function val() {return 'val'}
  const res = castArray(val)
  expect(res).toEqual([val])
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

test('spliceOne, should remove the specified element from an array', done => {
  const input = ['a', 'b', 'c']
  const target = 'b'

  const index = input.indexOf(target)
  const expected = [].concat(input)
  expected.splice(index, 1)

  const output = [].concat(input)
  spliceOne(output, index)
  expect(output).toEqual(expected)
  done()
})

