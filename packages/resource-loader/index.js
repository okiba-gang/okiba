/**
 * @module ResourceLoader
 * @description Manages loading of resources trough fetch to boost caching.
 * Transparently relies on a WebWorker if possible to load on a separate thread.
 *
 * @example
 * import ResourceLoader from '@okiba/resource-loader'
 *
 * const resLoader = new ResourceLoader()
 *
 * urls.forEach(
 *   url => resLoader.load(url)
 *     .then(console.log('Loaded! 📦'))
 * )
 *
 * @todo  Handle abortion
 * @todo  Fetch is not on IE11
 */
import {createWorker} from '@okiba/worker-utils'

const workerScript = `
  onmessage = ({data}) => {
      self.fetch(data.url, {mode: 'cors'})
        .then(r =>
          postMessage({url: data.url, value: r.ok})
        )
        .catch(_ =>
          postMessage({url: data.url, value: false})
        )
    }
`

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
   * @return {Promise} A promise which will be resolved if the resource
   * is loaded and rejected if not.
   */
  load(url) {
    if (this.cache[url]) return this.cache[url]

    this.cache[url] = this.worker
      ? this._loadWithWorker(url)
      : this._loadWithFetch(url)

    this.cache[url]
      .catch(_ => delete this.cache[url])

    return this.cache[url]
  }

  _loadWithWorker(url) {
    const p = new Promise((res, rej) => {
      this.worker.addEventListener(
        'message',
        ({data}) => data.value ? res() : rej()
      )
    })
    this.worker.postMessage({url})
    return p
  }

  _loadWithFetch(url) {
    return new Promise((res, rej) => {
      fetch(url, {mode: 'cors'})
        .then(r => r.ok ? res() : rej())
        .catch(rej)
    })
  }

  destroy() {
    delete this.cache
    if (this.worker) {
      this.worker.terminate()
    }
  }
}

export default ResourceLoader
