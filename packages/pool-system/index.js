/**
 * @module Okiba / pool-system
 * @description Class to manage dinamically a pool of system
 */

export default class PoolSystem {
  /**
   * Create an istance of PoolSystem
   *
   * ```javascript
   * import PoolSystem from '@okiba/pool-system'
   *
   * const container = document.querySelector('#container')
   *
   * function createEl(){
   *  return document.createElement('img');
   * }
   *
   * const pool = new PoolSystem(container, createEl)
   *
   * ```
   *
   * @param {Object} parent The dom node used like container of pool system elements.
   * @param {Function} createEl Function that create an istance of what you want to add to you pool system.
   * @returns {PoolSystem} PoolSystem instance.
   */

  constructor(parent, createEl) {
    this.parent = parent
    this.createEl = createEl
    this.size = 0
    this.pool = []
  }

  /**
   * Function to ensure a minimum pool size.
   * Skipped If actual size is bigger that the passed size,
   * otherwise create new element to reach the new size
   *
   * ```javascript
   * pool.ensure(5)
   *
   * ```
   *
   * @param {int} size Minimum pool size to ensure.
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
   * Return the first free element from pool.
   * If there isn't free element, the pool size is increased and a new element is created.
   * This behaviour provide you a dinamic pool system that create elements only if necessary
   *
   * @returns {any} A free element from pool
   */
  get() {
    if (!this.pool.length) {
      this.ensure(this.size + 1)
    }

    return this.pool.pop()
  }
  /**
   * Set an element like free
   *
   * @param {*} el
   */
  free(el) {
    this.pool.push(el)
  }

  /**
   * Destroy all reference from instance
   */
  destroy() {
    this.pool = null
    this.parent = null
    this.createEl = null
    this.size = null
  }
}
