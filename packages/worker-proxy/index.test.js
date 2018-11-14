import proxyClass from '@okiba/worker-proxy'

jest.useFakeTimers()

import { JSDOM } from 'jsdom'
const { window } = (new JSDOM('', {url: 'https://example.org/'}))
global.window = window
global.document = window.document
global.FileReader = window.FileReader

import 'jsdom-global/register'
import 'jsdom-worker'

window.Worker = Worker
global.Worker = Worker

jest.runAllTimers()

it('should proxy a base class', done => {
  const scope = {}
  class Thing {
    set(key, val) {
      scope[key] = val
    }
  }

  const Proxied = proxyClass(Thing)
  const p = new Proxied()
  p.set('some', 'thing')

  p.worker.addEventListener('message', _ => {
    expect(scope).toHaveProperty('some', 'thing')
    done()
  })
})
