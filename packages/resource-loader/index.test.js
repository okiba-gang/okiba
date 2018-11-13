import ResourceLoader from '@okiba/resource-loader'
jest.useFakeTimers()

import { JSDOM } from 'jsdom'
const { window } = (new JSDOM('', {url: 'https://example.org/'}))
global.window = window
global.document = window.document
global.FileReader = window.FileReader

import 'jsdom-global/register'
import 'jsdom-worker'

const oldFetch = global.fetch
global.fetch = function(url) {
  if (url.indexOf('blob') === 0) {
    return oldFetch(url)
  }

  return new Promise((res) => {
    res({ok: global.fetchMockResult})
  })
}

window.Worker = Worker
global.Worker = Worker

jest.runAllTimers()

it('should fetch and cache if success in Worker', async done => {
  const url = 'http://2/'
  const rl = new ResourceLoader()
  global.fetchMockResult = true
  await rl.load(url)
  expect(rl.cache[url]).toBe(global.fetchMockResult)
  done()
})

it('should fetch and not cache if failure in Worker', async done => {
  const url = 'http://1/'
  const rl = new ResourceLoader()
  global.fetchMockResult = false

  try {
    await rl.load(url)
  } catch (e) {
    expect(rl.cache[url]).toBe(global.fetchMockResult)
    done()
  }
})

it('should fetch and cache if success', async done => {
  const url = 'http://3'
  window.Worker = null
  const rl = new ResourceLoader()
  global.fetchMockResult = true
  await rl.load(url)
  expect(rl.cache).toHaveProperty(url)
  done()
})

it('should fetch and not cache if failure', async done => {
  const url = 'http://4'
  window.Worker = null
  const rl = new ResourceLoader()
  global.fetchMockResult = false

  try {
    await rl.load(url)
  } catch (e) {
    expect(rl.cache).not.toHaveProperty(url)
    done()
  }
})

