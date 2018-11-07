/**
 * @module TimeProgress
 * @description Maps progress ovrer time, normalized between 0 and 1
 *
 * @example
 * import TimeProgress from '@okiba/time-progress'
 *
 * const tp = new TimeProgress(400)
 * tp.setProgress(0.2)
 *
 *  function loop() {
 *   const progress = tp.update()
 *   domeElement.style.opacity = progress
 *
 *   if (progress > 0.8 || progress < 0.2) {
 *     tp.reverse()
 *   }
 *
 *   requestAnimationFrame(loop)
 * }
 *
 * requestAnimationFrame(loop)
 */
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

/**
 * @param [duration=400] Amount of time it takes to reach progress = 1
 */
class TimeProgress {
  constructor(duration = 400) {
    this.duration = duration
    this.reset()
  }

  /**
   * Has to be called at every loop or whenever you want get an updated progress
   * @return {Number} Normalized progress in time
   */
  update() {
    updateDelta.call(this)
    this.elapsed += this.direction * this.delta
    this.elapsed = cap(this.elapsed, 0, this.duration)
    this.progress = this.elapsed / this.duration
    checkActive.call(this)
    this.progress = round(this.progress, 3)
    return this.progress
  }

  /**
   * Sets the timer back to zero
   */
  reset() {
    this.time = this.lastTime = this.delta = null
    this.progress = this.elapsed = 0
    this.direction = 1
  }

  /**
   * Forces a certain progress, reflected on the time
   * @param {Number} progress [description]
   */
  setProgress(progress) {
    progress = cap(progress, 0, 1)
    this.elapsed = this.duration * Math.abs(this.progress - progress)
    this.progress = progress
  }

  /**
   * Sets the direction to go forward in time (progress goes from 0 to 1)
   */
  goForward() {
    this.direction = 1
  }

  /**
   * Sets the direction to go backwards in time (progress goes from 0 to 1)
   */
  goBackwards() {
    this.direction = -1
  }

  /**
   * Reverses the direction in time
   */
  reverse() {
    if (this.direction === 1) {
      this.goBackwards()
    } else {
      this.goForward()
    }
  }
}

export default TimeProgress
