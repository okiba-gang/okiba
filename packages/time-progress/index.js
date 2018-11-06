import {cap, round} from '@okiba/math'

function checkActive() {
  if (this.direction === -1 && this.progress > 0) {
    this.isActive = true
  } else if (this.direction === 1 && this.progress < 1) {
    this.isActive = true
  } else {
    this.isActive = false
  }
}

function updateDelta() {
  this.time = performance.now()
  if (!this.lastTime) {
    this.lastTime = this.time
  }
  this.delta = this.time - this.lastTime
  this.lastTime = this.time
}

export default class TimeProgress {
  constructor(duration = 400) {
    this.duration = duration
    this.reset()
  }

  setDirection(isForward) {
    this.direction = isForward ? 1 : -1
  }

  setProgress(progress) {
    progress = cap(progress, 0, 1)
    this.elapsed = this.duration * Math.abs(this.progress - progress)
    this.progress = progress
  }

  update() {
    updateDelta.call(this)
    this.elapsed += this.direction * this.delta
    this.elapsed = cap(this.elapsed, 0, this.duration)
    this.progress = this.elapsed / this.duration
    checkActive.call(this)
    this.progress = round(this.progress, 3)
    return this.progress
  }

  reset() {
    this.time = this.lastTime = this.delta = null
    this.progress = this.elapsed = 0
    this.direction = 1
  }
}
