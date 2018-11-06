export default class EventEmitter {
  constructor() {
    this.hs = {}
  }

  on(name, handler) {
    (
      this.hs[name] || (this.hs[name] = [])
    ).push(handler)
  }

  off(name, handler) {
    if (!this.hs[name]) return

    const i = this.hs[name].indexOf(handler)
    if (i < 0) return

    this.hs[name].splice(i, 1)
  }

  emit(name, data) {
    if (!this.hs[name]) return

    for (let i = 0; i < this.hs[name].length; ++i) {
      this.handlers[name][i](data)
    }
  }
}
