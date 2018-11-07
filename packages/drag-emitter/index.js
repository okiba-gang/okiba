/**
 * @module  DragEmitter
 * @description Emits drag events for all common pointers kinds (touch & mouse)
 */
import EventEmitter from '@okiba/event-emitter'

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
    this.addEventListeners()
  }

  /**
   * Unbinds events from the element and deletes the reference.
   * To be called when the instance is not needed anymore for cleanup.
   */
  destroy() {
    this.removeEventListeners()
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

  onMouseDown() {
    this.setPointerDown()
  }

  onMouseMove(e) {
    if (this.isPointerDown) {
      this.setPointerX(e.clientX)
    }
  }

  onMouseUp() {
    this.setPointerUp()
  }

  addEventListeners() {
    this.el.addEventListener('touchstart', this.onTouchStart)
    window.addEventListener('touchmove', this.onTouchMove)
    window.addEventListener('touchend', this.onTouchEnd)

    this.el.addEventListener('mousedown', this.onMouseDown)
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('mouseup', this.onMouseUp)
  }

  removeEventListeners() {
    this.el.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchmove', this.onTouchMove)
    window.removeEventListener('touchend', this.onTouchEnd)

    this.el.removeEventListener('mousedown', this.onMouseDown)
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('mouseup', this.onMouseUp)
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
