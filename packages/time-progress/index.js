import {cap} from '@okiba/math'

export default class TimeProgress {
  constructor(duration = 400) {
    this.duration = duration
  }

  update() {
    this.time = Date.now()
    if (!this.startTime) {
      this.startTime = this.lastTime = this.time
    }
    this.delta = this.time - this.lastTime
    this.elapsed = this.time - this.startTime
    this.progress = cap(this.elapsed / this.duration, 0, 1)
    this.lastTime = this.time
    return this.progress
  }

  reset() {
    this.time = this.lastTime = this.startTime = null
    this.progress = this.elapsed = null
    this.delta = null
  }
}
