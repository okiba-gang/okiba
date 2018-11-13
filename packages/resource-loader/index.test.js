import ResourceLoader from '@okiba/resource-loader'
import fetch from 'node-fetch'
jest.useFakeTimers()

import { JSDOM } from 'jsdom'
const { window } = (new JSDOM('', {url: 'https://example.org/'}))
global.window = window
global.document = window.document
global.FileReader = window.FileReader

import FetchMock from 'fetch-mock'
import 'jsdom-global/register'
import 'jsdom-worker'

window.Worker = Worker
global.Worker = Worker

jest.runAllTimers()

const SUCCESS_URL = 'https://example.com/success'
const FAILURE_URL = 'https://example.com/failure'

// it('should fetch and cache if success in Worker', done => {
//   const rl = new ResourceLoader()
//   rl.load(SUCCESS_URL)
//   rl.worker.addEventListener('message', function() {
//     // FetchMock.restore()
//     expect(rl.cache[SUCCESS_URL]).toBe(true)
//     done()
//   })

//   jest.runAllTimers()
// })

// it('should fetch and not cache if failure in Worker', done => {
//   const rl = new ResourceLoader()
//   rl.load(FAILURE_URL)
//   rl.worker.addEventListener('message', function() {
//     // FetchMock.restore()
//     expect(rl.cache[FAILURE_URL]).toBe(false)
//     done()
//   })

//   jest.runAllTimers()
// })

// it('should fetch and cache if success', done => {
//   window.Worker = null
//   const rl = new ResourceLoader()
//   FetchMock.once('http://3', 200)
//   rl.load(SUCCESS_URL)
//   FetchMock.restore()
//   setTimeout(function() {
//     expect(rl.cache[SUCCESS_URL]).toBe(true)
//     done()
//   }, 100)

//   jest.runAllTimers()
// })

it('should fetch and not cache if failure', done => {
  const url = 'http://4'
  window.Worker = null
  const rl = new ResourceLoader()

  FetchMock.once(url, 500)
  rl.load(url)
  FetchMock.restore()

  setTimeout(function() {
    console.log('test')
    setTimeout(function() {
      expect(rl.cache[url]).toBe(false)
      done()
    }, 100)

    jest.runAllTimers()
  }, 100)


  jest.runAllTimers()
})
