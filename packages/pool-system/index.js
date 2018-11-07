export default class PoolSystem {
  constructor(parent, createEl) {
    this.parent = parent
    this.createEl = createEl
    this.size = 0
    this.pool = []
  }

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

  get() {
    if (!this.pool.length) {
      this.ensure(this.size + 1)
    }

    return this.pool.pop()
  }

  free(el) {
    this.pool.push(el)
  }

  destroy() {
    this.pool = null
    this.parent = null
    this.createEl = null
  }
}
