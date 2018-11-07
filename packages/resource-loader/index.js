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

function workerScript() {
  self.addEventListener(
    'message',
    ({data}) => {
      fetch(data, {mode: 'cors'})
    }
  )
}

class ResourceLoader {
  constructor() {
    this.cache = {}
    if (window.Worker) {
      this.worker = createWorker(workerScript)
    }
  }

  /**
   * Initiates loading of a resource at a given URL
   * @param  {String} url Resource URL
   */
  load(url) {
    if (this.cache[url]) return
    this.cache[url] = true

    if (this.worker) {
      this.worker.postMessage(url)
    } else {
      fetch(url, {mode: 'cors'})
    }
  }
}

export default ResourceLoader
