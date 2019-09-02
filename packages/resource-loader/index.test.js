import 'regenerator-runtime/runtime'

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

  return new Promise((res, rej) => {
    if (global.fetchMockThrow) {
      rej()
    } else {
      res({ok: global.fetchMockResult})
    }
  })
}

const TEST_URL = 'http://test'

window.Worker = Worker
global.Worker = Worker

jest.runAllTimers()

it('should fetch and cache if success in Worker', async done => {
  const rl = new ResourceLoader()
  global.fetchMockResult = true

  await rl.load(TEST_URL)
  expect(rl.cache).toHaveProperty(TEST_URL)
  done()
})


it('should return the same promise on the same request', async done => {
  const rl = new ResourceLoader()
  global.fetchMockResult = true

  const promise1 = rl.load(TEST_URL)
  const promise2 = rl.load(TEST_URL)
  expect(promise1).toBe(promise2)
  done()
})

it('should fetch and not cache if failure in Worker', async done => {
  const rl = new ResourceLoader()
  global.fetchMockResult = false

  try {
    await rl.load(TEST_URL)
  } catch (e) {
    expect(rl.cache).not.toHaveProperty(TEST_URL)
    done()
  }
})

it('should fetch and not cache if error in Worker\'s fetch ', async done => {
  const rl = new ResourceLoader()
  global.fetchMockResult = false

  try {
    await rl.load(TEST_URL)
  } catch (e) {
    expect(rl.cache).not.toHaveProperty(TEST_URL)
    done()
  }

  global.fetchMockThrow = false
})


it('should fetch and not cache if error in Worker\'s fetch ', async done => {
  const rl = new ResourceLoader()
  global.fetchMockResult = false
  global.fetchMockThrow = true

  try {
    await rl.load(TEST_URL)
  } catch (e) {
    expect(rl.cache).not.toHaveProperty(TEST_URL)
    done()
  }

  global.fetchMockThrow = false
})

it('should delete the worker and cache on destroy', done => {
  const rl = new ResourceLoader()

  // Worker mock throws an error on terminate
  try {
    rl.destroy()
  } catch (e) {
    expect(rl).not.toHaveProperty('cache')
    done()
  }
})

it('should fetch and cache if success', async done => {
  window.Worker = null
  const rl = new ResourceLoader()
  global.fetchMockResult = true

  await rl.load(TEST_URL)
  expect(rl.cache).toHaveProperty(TEST_URL)
  done()
})

it('should fetch and not cache if failure', async done => {
  window.Worker = null
  const rl = new ResourceLoader()
  global.fetchMockResult = false

  try {
    await rl.load(TEST_URL)
  } catch (e) {
    expect(rl.cache).not.toHaveProperty(TEST_URL)
    done()
  }
})

it('should delete the cache on destroy', done => {
  window.Worker = null
  const rl = new ResourceLoader()

  // Worker mock throws an error on terminate
  rl.destroy()
  expect(rl).not.toHaveProperty('cache')
  done()
})


