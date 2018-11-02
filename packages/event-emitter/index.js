export default class EventEmitter {
  constructor() {
    this.handlers = {}
  }

  on(name, handler) {
    (
      this.handlers[name] || (this.handlers[name] = [])
    ).push(handler)
  }

  off(name, handler) {
    if (!this.handlers[name]) return

    const i = this.handlers[name].indexOf(handler)
    if (i < 0) return

    this.handlers[name].splice(i, 1)
  }

  emit(name, data) {
    if (!this.handlers[name]) return

    for (const i = 0; i < this.handlers[name].length; ++i) {
      this.handlers[name][i](data)
    }
  }
}
