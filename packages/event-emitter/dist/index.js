var EventEmitter = (function () {
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * @module EventEmitter
   * @description Emits events that can be listened and unlistened to
   * @example
   * import EventEmitter from '@okiba/event-emitter'
   * const emitter = new EventEmitter
   * emitter.on('log', console.log)
   * emitter.emit('log', 'Silence is deprecated')
   * // Logs: 'Silence is deprecated'
   *
   * emitter.off('log', console.log)
   * emitter.emit('log', 'Will not run')
   * // ...Nothing happens
   */
  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      this.hs = {};
    }
    /**
     * Sets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback to be fired when that event occours
     */


    _createClass(EventEmitter, [{
      key: "on",
      value: function on(name, handler) {
        (this.hs[name] || (this.hs[name] = [])).push(handler);
      }
      /**
       * Unsets an event listener for an event type
       * @param  {String} name    Event type
       * @param  {Function} handler Callback previously registered for that event type
       */

    }, {
      key: "off",
      value: function off(name, handler) {
        if (!this.hs[name]) return;
        var i = this.hs[name].indexOf(handler);
        if (i < 0) return;
        this.hs[name].splice(i, 1);
      }
      /**
       * Triggers an event with optional data attached.
       * All listeners will be triggered in registration order.
       * Custom data will be passed to them as a parameter
       * @param  {String} name Event type
       * @param  {Object} [data] Custom data to be passed to the handlers
       */

    }, {
      key: "emit",
      value: function emit(name, data) {
        if (!this.hs || !this.hs[name]) return;

        for (var i = 0; i < this.hs[name].length; ++i) {
          this.hs[name][i](data);
        }
      }
      /**
       * Removes all event listeners and deletes the handlers object
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this = this;

        Object.entries(this.hs).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              handlers = _ref2[1];

          return handlers.forEach(function (handler) {
            return _this.off(name, handler);
          });
        });
        delete this.hs;
      }
    }]);

    return EventEmitter;
  }();

  return EventEmitter;

}());
