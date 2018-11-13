/**
 * @module ResourceLoader
 * @description Manages loading of resources trough fetch to boost caching.
 * Transparently relies on a WebWorker if possible to load on a separate thread.
 *
 * @example
 * import ResourceLoader from '@okiba/resource-loader'
 * const resLoader = new ResourceLoader()
 *
 * imgUrls.forEac(imgUrl => resLoader.load(imgUrl))
 *
 * @todo  Handle abortion
 * @todo  Fetch is not on IE11
 */
import {createWorker} from '@okiba/worker-utils'
import {on, off} from '@okiba/dom'

const workerScript = `
  onmessage = ({data}) => {
    self.fetch(data.url, {mode: 'cors'})
      .then(r => {
        postMessage({url: data.url, value: r.ok})
      })
      .catch(e => {
        console.log(e);
        postMessage({url: data.url, value: false})
      })
  }
`

class ResourceLoader {
  constructor() {
    this.cache = {}
    if (window.Worker) {
      this.onWorkerMessage = this.onWorkerMessage.bind(this)
      this.worker = createWorker(workerScript)
      on(this.worker, 'message', this.onWorkerMessage)
    }
  }

  onWorkerMessage({data}) {
    this.cache[data.url] = data.value
  }

  /**
   * Initiates loading of a resource at a given URL
   * @param  {String} url Resource URL
   */
  load(url) {
    if (this.cache[url]) return

    let promise

    if (this.worker) {
      promise = new Promise((res, rej) => {
        this.worker.addEventListener('message', ({data}) => {
          if (data.value) {
            res()
          } else {
            rej()
          }
        })
      })
      this.worker.postMessage({url})
    } else {
      promise = new Promise((res, rej) => {
        fetch(url, {mode: 'cors'})
          .then(r => {
            if (r.ok) {
              res()
              this.cache[url] = true
            } else {
              rej()
              delete this.cache[url]
            }
          })
          .catch(_ => {
            delete this.cache[url]
            rej()
          })
      })
    }

    this.cache[url] = promise
    return promise
  }

  destroy() {
    if (this.worker) {
      off(this.worker, 'message', this.onWorkerMessage)
      this.worker.terminate()
    }
  }
}

export default ResourceLoader
