import {createWorker} from '@okiba/worker-utils'
import { JSDOM } from 'jsdom'
const { window } = (new JSDOM('', {url: 'https://localhost/'}))
global.window = window
global.document = window.document
global.FileReader = window.FileReader

import 'jsdom-global/register'
import 'jsdom-worker'

window.Worker = Worker
global.Worker = Worker

it('should create a WebWorker accepting messages', done => {
  const code = 'onmessage = e => postMessage(e.data*2)'
  const worker = createWorker(code)
  worker.onmessage = function({data}) {
    expect(data).toBe(10)
    done()
  }
  worker.postMessage(5)
})
