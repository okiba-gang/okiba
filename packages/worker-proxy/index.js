/**
 * @module WorkerProxy
 * @description Transparent proxying of a class of yours
 * @example
 * // ./things/Thing.js
 * import proxyClass from '@okiba/worker-proxy'
 *
 * class Thing {
 *    constructor(some) {
 *      this.some = some
 *    }
 *
 *    logStuff(...stuff) {
 *       console.log(this.some, ...stuff)
 *    }
 * }
 *
 * export default proxyClass(Thing)
 *
 * // main.js
 * import Thing from './things/Thing.js'
 *
 * const thing = new Thing('💡')
 * thing.logStuff('🎈', '✏️')
 * // Logging happens on a separate thread
 * // 💡 🎈 ✏️
 */
import EventEmitter from '@okiba/event-emitter'
import {on, off} from '@okiba/dom'
import {createWorker} from '@okiba/worker-utils'

function connect(BaseClass) {
  console.log(BaseClass)
  const commands = {
    init: function init({args}) {
      self.base = new BaseClass(...(JSON.parse(args)))
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

class WorkerProxy extends EventEmitter {
  constructor(BaseClass, ...args) {
    super()

    if (window.Worker) {
      this.worker = createWorker(`(${connect})(${BaseClass})`)
      this.onWorkerMessage = this.onWorkerMessage.bind(this)
      on(this.worker, 'message', this.onWorkerMessage)
      this.worker.postMessage({command: 'init', args: JSON.stringify(args)})
    } else {
      this.base = new BaseClass(...args)
      this.on = this.base.on && this.base.on.bind(this.base)
      this.off = this.base.off && this.base.on.bind(this.base)
      this.emit = this.base.emit && this.base.on.bind(this.base)
    }

    Object.getOwnPropertyNames(BaseClass.prototype)
      .filter(prop => typeof BaseClass.prototype[prop] === 'function')
      .filter(prop => prop !== 'constructor' && prop !== 'destroy')
      .forEach(methodName => this.proxyMethod(methodName))
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
      off(this.worker, 'message', this.onWorkerMessage)
    } else if (typeof this.base.destroy === Function) {
      this.base.destroy(...args)
    }
  }
}

export default function proxyClass(BaseClass) {
  return class ProxiedClass extends WorkerProxy {
    constructor(...args) {
      super(BaseClass, ...args)
    }
  }
}
