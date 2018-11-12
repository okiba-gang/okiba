import {qs, qsa, on, off} from './'

import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(`<div>
    <div class="element"></div>
    <div class="inner">
      <div class="element"></div>
    </div>
    <div class="element"></div>
    <div class="element"></div>
</div>`, {url: 'https://example.org/'}))
global.window = window
global.document = window.document

test('qs should return a single element, defaulting to document', done => {
  const node = qs('.element')
  expect(node).toEqual(document.querySelector('.element'))
  done()
})

test('qs should return a single element, scoped to an element', done => {
  const inner = document.querySelector('.inner')
  const node = qs('.element', inner)
  expect(node).toEqual(inner.querySelector('.element'))
  done()
})

test('qsa should return an array with the correct elements and default to document', done => {
  const nodes = qsa('.element')
  expect(nodes instanceof Array).toBe(true)
  expect(nodes).toEqual(Array.from(document.querySelectorAll('.element')))
  done()
})

test('qsa should return an array with the correct elements, scoped to an element', done => {
  const node = qsa('.element', document.querySelector('.inner'))
  expect(node).toEqual(Array.from(document.querySelectorAll('.inner .element')))
  done()
})

test('on should bind a callback to an Element\'s event', done => {
  const node = qs('.element')
  on(node, 'custom', function() {done()})
  node.dispatchEvent(new window.Event('custom'))
})

test('on should bind a callback to all Elements\' events', done => {
  const nodes = qsa('.element')
  const callback = jest.fn(function() {
    if (callback.mock.calls.length === nodes.length) {
      done()
    }
  })

  on(nodes, 'click', callback)
  nodes.forEach(
    n => n.dispatchEvent(new window.Event('click'))
  )
})

test('on should bind callbacks in order, last should be for remaining events', done => {
  const node = qs('.element')

  function checkCompletion() {
    if (
      callback0.mock.calls.length === 1 &&
      callback1.mock.calls.length === 1 &&
      callback2.mock.calls.length === 2
    ) {
      done()
    }
  }

  const callback0 = jest.fn(checkCompletion)
  const callback1 = jest.fn(checkCompletion)
  const callback2 = jest.fn(checkCompletion)

  const events = ['event0', 'event1', 'event2', 'event3']

  on(node, events, [callback0, callback1, callback2])
  events.forEach(
    e => node.dispatchEvent(new window.Event(e))
  )
})

test('off should unbind a callback from all Elements\' events', done => {
  const nodes = qsa('.element')
  const callback = jest.fn(function() {})
  on(nodes, 'click', callback)
  off(nodes, 'click', callback)

  nodes.forEach(
    n => n.dispatchEvent(new window.Event('click'))
  )

  setTimeout(function() {
    expect(callback.mock.calls.length).toBe(0)
    done()
  }, 30)
})


test('on should not bind if there is no handler', done => {
  const node = qs('.element')

  const bound = on(node, 'custom')
  expect(bound).toBe(false)
  done()
})

test('on should not bind if there is no type', done => {
  const callback = jest.fn(function() {})
  const node = qs('.element')

  on(node, 'custom', callback)
  setTimeout(function() {
    expect(callback.mock.calls.length).toBe(0)
    done()
  }, 30)
})


