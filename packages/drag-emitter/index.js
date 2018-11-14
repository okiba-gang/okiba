/**
 * @module  DragEmitter
 * @description Emits drag events for all common pointers kinds (touch & mouse)
 */
import EventEmitter from '@okiba/event-emitter'
import {on, off} from '@okiba/dom'

/**
 * @param {Element} el Element whose surface is used for drag events
 * @example
 * import {DragEmitter} from '@okiba/drag-emitter'
 * import {qs} from '@okiba/dom'
 *
 * const dragEmitter = new DragEmitter(qs('.container'))
 * dragEmitter.on(
 *   'drag',
 *   (deltaX, clientX) => console.log(deltaX, clientX)
 * )
 */
class DragEmitter extends EventEmitter {
  constructor(el) {
    super()
    this.el = el
    this.autoBind()
    this.listen()
  }

  /**
   * Unbinds events from the element and deletes the reference.
   * To be called when the instance is not needed anymore for cleanup.
   */
  destroy() {
    this.unlisten()
    this.el = null
  }

  setPointerDown() {
    this.isPointerDown = true
    this.el.classList.add('is-pointer-down')
  }

  setPointerUp() {
    if (!this.isPointerDown) return

    this.isPointerDown = false
    this.pointerX = null
    this.el.classList.remove('is-pointer-down')
    this.emit('dragend')
  }

  setPointerX(xCoord) {
    if (this.pointerX) {
      this.emitDrag(xCoord)
    }

    this.pointerX = xCoord
  }

  emitDrag(xCoord) {
    this.emit('drag', {
      deltaX: this.pointerX - xCoord,
      clientX: xCoord
    })
  }


  onTouchStart(e) {
    this.setPointerDown()
    this.setPointerX(e.touches[0].clientX)
  }

  onTouchMove(e) {
    this.setPointerX(e.touches[0].clientX)
  }

  onTouchEnd() {
    this.setPointerUp()
  }

  onMouseDown(e) {
    this.setPointerDown()
    this.setPointerX(e.clientX)
  }

  onMouseMove(e) {
    if (this.isPointerDown) {
      this.setPointerX(e.clientX)
    }
  }

  onMouseUp() {
    this.setPointerUp()
  }

  listen() {
    on(this.el, 'touchstart', this.onTouchStart)
    on(window, 'touchmove', this.onTouchMove)
    on(window, 'touchend', this.onTouchEnd)

    on(this.el, 'mousedown', this.onMouseDown)
    on(window, 'mousemove', this.onMouseMove)
    on(window, 'mouseup', this.onMouseUp)
  }

  unlisten() {
    off(this.el, 'touchstart', this.onTouchStart)
    off(window, 'touchmove', this.onTouchMove)
    off(window, 'touchend', this.onTouchEnd)

    off(this.el, 'mousedown', this.onMouseDown)
    off(window, 'mousemove', this.onMouseMove)
    off(window, 'mouseup', this.onMouseUp)
  }

  autoBind() {
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)

    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
  }
}

export default DragEmitter
