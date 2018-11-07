import EventEmitter from '@okiba/event-emitter'

export default class WorkerProxy extends EventEmitter {
  constructor(workerUrl, baseClass, proxiedMethods, ...args) {
    super()

    if (window.Worker) {
      this.worker = new Worker(workerUrl)
      this.worker.postMessage({command: 'init', args: JSON.stringify(args)})
      this.worker.addEventListener('message', this.onWorkerMessage.bind(this))
      proxiedMethods.forEach(m => this.proxyMethod(m))
    } else {
      this.base = new baseClass(...args)
      this.on = this.base.on.bind(this.base)
      this.off = this.base.off.bind(this.base)
      this.emit = this.base.emit.bind(this.base)
    }
  }

  onWorkerMessage({data}) {
    this.emit(data.type, data.data)
  }

  proxyMethod(method) {
    if (this.worker) {
      this[method] = function(...args) {
        this.worker.postMessage({command: 'execute', method, args})
      }
    } else {
      this[method] = this.base[method].bind(this.base)
    }
  }

  destroy(...args) {
    if (this.worker) {
      this.worker.postMessage({command: 'execute', method: 'destroy', args})
      this.worker.terminate()
    } else if (typeof this.base.destroy === Function) {
      this.base.destroy(...args)
    }
  }
}

export function connect(makeInstance) {
  const commands = {
    init: function init({args}) {
      self.base = makeInstance(JSON.parse(args))
      self.base.emit = (type, data) => {
        postMessage({type, data})
      }
    },
    execute: function execute({method, args}) {
      self.base[method].apply(self.base, args)
    }
  }

  return function onMessage({data}) {
    commands[data.command](data)
  }
}
