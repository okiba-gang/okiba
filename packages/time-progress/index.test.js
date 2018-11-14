import TimeProgress from '@okiba/time-progress'
jest.useFakeTimers()

it('should return 0 on first update', async done => {
  const tp = new TimeProgress()
  const now = jest.fn();
  now
    .mockReturnValueOnce(0)

  global.performance = { now }
  expect(tp.update()).toBe(0)
  done()
})

it('should return 1 when time is elapsed', async done => {
  const now = jest.fn();
  now
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(500)

  global.performance = { now }
  const tp = new TimeProgress(400)
  tp.update()
  tp.update()
  expect(tp.progress).toBe(1)
  done()
})

it('should return 0.5 when half duration is elapsed', async done => {
  const now = jest.fn();
  now
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(200)

  global.performance = { now }
  const tp = new TimeProgress(400)
  tp.update()
  tp.update()
  expect(tp.progress).toBe(0.5)
  done()
})

it('should return 0 when progress setted is smaller than 0', async done => {
  const tp = new TimeProgress(400)
  tp.setProgress(-0.1)
  expect(tp.progress).toBe(0)
  done()
})

it('should return 1 when progress setted is bigger than 1', async done => {
  const tp = new TimeProgress(400)
  tp.setProgress(1.1)
  expect(tp.progress).toBe(1)
  done()
})

it('should return 0 when time is elapsed in reverse mode', async done => {
  const now = jest.fn();
  now
  .mockReturnValueOnce(0)
  .mockReturnValueOnce(500)
  
  global.performance = { now }
  const tp = new TimeProgress(400)
  tp.setProgress(1)
  tp.setDirection(-1)
  tp.update()
  tp.update()
  expect(tp.progress).toBe(0)
  done()
})


it('should return 0 when time is elapsed in backward mode', async done => {
  const now = jest.fn();
  now
  .mockReturnValueOnce(0)
  .mockReturnValueOnce(500)
  
  global.performance = { now }
  const tp = new TimeProgress(400)
  tp.setProgress(1)
  tp.setDirection(-1)
  tp.update()
  tp.update()
  expect(tp.progress).toBe(0)
  done()
})

it('should return 0 when time is elapsed using reverse mode', async done => {
  const now = jest.fn();
  now
  .mockReturnValueOnce(0)
  .mockReturnValueOnce(500)
  
  global.performance = { now }
  const tp = new TimeProgress(400)
  tp.setProgress(1)
  tp.reverse()
  tp.update()
  tp.update()
  expect(tp.progress).toBe(0)
  done()
})

