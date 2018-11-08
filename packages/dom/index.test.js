import {qsa} from './'

import { JSDOM } from 'jsdom'
const { document } = (new JSDOM(`<div class="component">
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
  </div>`, {url: 'https://example.org/'})).window
global.document = document

test('qsa should return an array with the correct elements and default to document', done => {
  const nodes = qsa('.element')
  expect(nodes instanceof Array).toBe(true)
  expect(nodes).toEqual(Array.from(document.querySelectorAll('.element')))
  done()
})

test('qsa should return an array with the correct elements, scoped to an element', done => {
  const nodes = qsa('.element', document.querySelector('.component'))
  expect(nodes instanceof Array).toBe(true)
  expect(nodes).toEqual(Array.from(document.querySelectorAll('.element')))
  done()
})

