import PoolSystem from './'
import { JSDOM } from 'jsdom'

const { document } = (new JSDOM(`
    <div id="container"></div>
  `)).window

const container = document.querySelector('#container')

function createEl() {
  return document.createElement('img')
}

test('pool size have not increase when unnecessary', done => {
  const pool = new PoolSystem(container, createEl)
  pool.ensure(10)
  expect(pool.size).toBe(10)
  const el = pool.get()
  pool.ensure(10)
  expect(pool.size).toBe(10)
  done()
})

test('pool size have increase dinamically', done => {
  const pool = new PoolSystem(container, createEl)
  const els = []
  els.push(pool.get())
  expect(pool.size).toBe(1)
  els.push(pool.get())
  expect(pool.size).toBe(2)
  pool.free(els.pop())
  els.push(pool.get())
  expect(pool.size).toBe(2)
  done()
})

