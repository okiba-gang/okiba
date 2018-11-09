/**
 * @module PoolSystem
 * @description Manages a dinamically grown pool of DOM Elements
 * import PoolSystem from '@okiba/pool-system'
 *
 * @example
 * const container = document.querySelector('#container')
 *
 * function createEl(){
 *  return document.createElement('img');
 * }
 *
 * const pool = new PoolSystem(container, createEl)
 */

class PoolSystem {
  /**
   * @param {Object} parent DOM Element used as container for all pool elements.
   * @param {Function} createEl Function that creates an istance the element you want to add to the pool.
   */
  constructor(parent, createEl) {
    this.parent = parent
    this.createEl = createEl
    this.size = 0
    this.pool = []
  }

  /**
   * Makes sure the pool can host a minimum number of elements,
   * grows it if that's not the case.
   *
   * @param {Number} size Minimum pool size to ensure.
   */

  ensure(size) {
    if (this.size >= size) return

    const diff = size - this.size

    for (let index = 0; index < diff; index++) {
      const el = this.createEl()
      this.pool.push(el)
      this.parent.appendChild(el)
    }

    this.size = size
  }

  /**
   * Hands a free element from the pool.
   * If there isn't one, it automatically grows the pool's.
   * This provides dynamic sizing which ensures
   *
   * @returns {Element} A free DOM Element
   */
  get() {
    if (!this.pool.length) {
      this.ensure(this.size + 1)
    }

    return this.pool.pop()
  }
  /**
   * Marks an element as elegible for reutilization,
   * and pushes it into the pool
   *
   * @param {Element} Element to mark as free
   */
  free(el) {
    this.pool.push(el)
  }

  /**
   * Nulls all references to DOM Elements
   */
  destroy() {
    this.pool = null
    this.parent = null
    this.createEl = null
    this.size = null
  }
}

export default PoolSystem
