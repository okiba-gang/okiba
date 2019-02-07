import DragEmitter from '@okiba/drag-emitter'
import {qs} from '@okiba/dom'
import {castArray} from '@okiba/arrays'

import { JSDOM } from 'jsdom'
const { window } = (new JSDOM(
  '<div class="container"></div>',
  {url: 'https://example.org/'}
))

global.window = window
global.HTMLElement = window.HTMLElement
global.document = window.document
const container = qs('.container')


const startX = 10; const endX = 20
const touchStartEvent =
  new window.TouchEvent('touchstart', {touches: [{clientX: startX}]})
const touchMoveEvent =
  new window.TouchEvent('touchmove', {touches: [{clientX: endX}]})
const touchEndEvent = new window.TouchEvent('touchend')

const mouseDownEvent =
  new window.MouseEvent('mousedown', {clientX: startX})
const mouseMoveEvent =
new window.MouseEvent('mousemove', {clientX: endX})
const mouseUpEvent = new window.MouseEvent('mouseup')

it('should add a `is-pointer-down` class when pointer is down', done => {
  const de = new DragEmitter(container)
  de.el.dispatchEvent(touchStartEvent)
  expect(castArray(container.classList)).toEqual(expect.arrayContaining(['is-pointer-down']))
  done()
})

it('should remove a `is-pointer-down` class when pointer is up', done => {
  global.window = container // window mock has no touch events
  const de = new DragEmitter(container)
  de.el.dispatchEvent(touchStartEvent)
  container.dispatchEvent(touchEndEvent)
  global.window = window  // restore window mock

  expect(castArray(container.classList))
    .not.toEqual(expect.arrayContaining(['is-pointer-down']))

  done()
})

it('should emit an event with correct data when touch is dragged', done => {
  global.window = container  // window mock has no touch events
  const de = new DragEmitter(container)

  const callback = jest.fn(data => {
    expect(data).toEqual({
      deltaX: startX - endX,
      clientX: endX
    })

    done()
  })

  de.on('drag', callback)
  de.el.dispatchEvent(touchStartEvent)
  container.dispatchEvent(touchMoveEvent)
  container.dispatchEvent(touchEndEvent)
  global.window = window  // restore window mock
})

it('should emit an event with correct data when mouse is dragged', done => {
  global.window = container  // window mock has no mouse events
  const de = new DragEmitter(container)

  const callback = jest.fn(data => {
    expect(data).toEqual({
      deltaX: startX - endX,
      clientX: endX
    })

    done()
  })

  de.on('drag', callback)
  de.el.dispatchEvent(mouseDownEvent)
  container.dispatchEvent(mouseMoveEvent)
  container.dispatchEvent(mouseUpEvent)
  global.window = window  // restore window mock
})

it('should ignore mouse events if pointer is not down', done => {
  global.window = container  // window mock has no mouse events
  const de = new DragEmitter(container)

  const callback = jest.fn()

  de.on('drag', callback)
  container.dispatchEvent(mouseMoveEvent)
  container.dispatchEvent(mouseUpEvent)
  global.window = window  // restore window mock
  expect(callback).not.toHaveBeenCalled()
  done()
})


it('should remove event listeners when destroyed', done => {
  global.window = container  // window mock has no mouse events
  const de = new DragEmitter(container)

  const callback = jest.fn()

  de.on('drag', callback)
  de.el.dispatchEvent(mouseDownEvent)
  de.destroy()


  container.dispatchEvent(mouseMoveEvent)
  container.dispatchEvent(mouseUpEvent)
  global.window = window  // restore window mock
  expect(callback).not.toHaveBeenCalled()
  done()
})
