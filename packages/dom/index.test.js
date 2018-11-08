import {qsa} from './'
import { JSDOM } from 'jsdom'

const { document } = (new JSDOM(`
    <div class="el"></div>
    <div class="el"></div>
  `)).window

const DOMNodes = document.querySelectorAll('.el')

test('qsa should return an array with the correct elements', done => {
  const nodes = qsa('.el', document)
  expect(nodes instanceof Array).toBe(true)
  expect(nodes).toEqual(DOMNodes)
  done()
})

