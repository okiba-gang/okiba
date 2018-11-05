import {cap} from '@okiba/math'

export default class TimeProgress {
  constructor(duration = 400) {
    this.duration = duration
    this.direction = 1
    this.elapsed = 0
  }

  updateDelta() {
    this.time = Date.now()
    if (!this.lastTime) {
      this.lastTime = this.time
    }
    this.delta = this.time - this.lastTime
    this.lastTime = this.time
  }

  setDirection(isForward) {
    this.direction = isForward ? 1 : -1
  }

  setProgress(progress) {
    this.progress = progress
    this.elapsed = this.duration * this.progress
  }

  update() {
    this.updateDelta()
    this.elapsed += this.direction * this.delta
    this.progress = cap(this.elapsed / this.duration, 0, 1)
    return this.progress
  }
}
