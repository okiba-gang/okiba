var OkibaEventEmitter = (function () {
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
  var EventEmitter = /*#__PURE__*/function () {
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
        (this.hs[name] || (this.hs[name] = new Map())).set(handler, handler);
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
        this.hs[name]["delete"](handler);
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
        this.hs[name].forEach(function (handler) {
          return handler(data);
        });
      }
      /**
       * Checks if the given event has registered callbacks
       * @param {String} type The event type
       */

    }, {
      key: "hasListeners",
      value: function hasListeners(type) {
        return this.hs.hasOwnProperty(type) && this.hs[type].size > 0;
      }
      /**
       * Removes all event listeners and deletes the handlers object
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this = this;

        Object.keys(this.hs).forEach(function (name) {
          return _this.hs[name].clear();
        });
        delete this.hs;
      }
    }]);

    return EventEmitter;
  }();

  return EventEmitter;

}());
