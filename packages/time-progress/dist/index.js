var OkibaTimeProgress = (function (math) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function checkActive() {
    if (this.direction === -1 && this.progress > 0) {
      this.isActive = true;
    } else if (this.direction === 1 && this.progress < 1) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  function updateDelta() {
    this.time = performance.now();

    if (this.lastTime === null) {
      this.lastTime = this.time;
    }

    this.delta = this.time - this.lastTime;
    this.lastTime = this.time;
  }
  /**
   * @param [duration=400] Amount of time it takes to reach progress = 1
   */


  var TimeProgress =
  /*#__PURE__*/
  function () {
    function TimeProgress() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;

      _classCallCheck(this, TimeProgress);

      this.duration = duration;
      this.reset();
    }
    /**
     * Has to be called at every loop or whenever you want get an updated progress
     * @return {Number} Normalized progress in time
     */


    _createClass(TimeProgress, [{
      key: "update",
      value: function update() {
        updateDelta.call(this);
        this.elapsed += this.direction * this.delta;
        this.elapsed = math.cap(this.elapsed, 0, this.duration);
        this.progress = this.elapsed / this.duration;
        checkActive.call(this);
        this.progress = math.round(this.progress, 3);
        return this.progress;
      }
      /**
       * Sets the timer back to zero
       */

    }, {
      key: "reset",
      value: function reset() {
        this.time = this.lastTime = this.delta = null;
        this.progress = this.elapsed = 0;
        this.direction = 1;
      }
      /**
       * Forces a certain progress, reflected on the time
       * @param {Number} progress [description]
       */

    }, {
      key: "setProgress",
      value: function setProgress(progress) {
        progress = math.cap(progress, 0, 1);
        this.elapsed = this.duration * Math.abs(this.progress - progress);
        this.progress = progress;
      }
      /**
       * Sets a direction in time.
       * `1` is forward in time (progress goes from 0 to 1)
       * `-1` is backwards in time (progress goes from 1 to 0)
       * @param {Number} direction 1 is forward, -1 is backwards
       */

    }, {
      key: "setDirection",
      value: function setDirection(direction) {
        this.direction = direction;
      }
      /**
       * Reverses the direction in time
       */

    }, {
      key: "reverse",
      value: function reverse() {
        this.direction *= -1;
      }
    }]);

    return TimeProgress;
  }();

  return TimeProgress;

}(math));
