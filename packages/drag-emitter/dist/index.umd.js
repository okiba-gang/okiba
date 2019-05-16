(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['drag-emitter'] = factory());
}(this, function () { 'use strict';

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
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

  /**
   * @module arrays
   * @description Array utils for okiba js
   */
  /**
   * Cast an array-like object or single element to Array
   * @example
   * const elements = castArray(document.querySelectorAll('p')) // [p, p]
   * const fruits = castArray(🍒) // [🍒]
   *
   * @param {any} castable Array to cast
   * @returns {Array} The array-like converted to Array, or an Array containing the element
   */

  function castArray(castable) {
    if (castable === void 0) return castable;

    if (castable instanceof Array) {
      return castable;
    }

    if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList) {
      return Array.prototype.slice.call(castable);
    }

    return [castable];
  }

  /**
   * @module  dom
   * @description Utilities to work with dom elements and selectors
   */

  function evt(source, type, handler, action, options) {
    if (!type || !handler) return false;
    var elements = castArray(source);
    var types = castArray(type);
    var handlers = castArray(handler);

    for (var i = 0; i < elements.length; ++i) {
      for (var j = 0; j < types.length; ++j) {
        elements[i]["".concat(action, "EventListener")](types[j], handlers[Math.min(j, handlers.length - 1)], options);
      }
    }

    return true;
  }
  /**
   * Attaches an event listener to a DOM Element, or an array of.
   *
   * @example
   * import {qsa, on} from '@okiba/dom'
   * const buttons = qsa('.button')
   *
   * on(buttons, 'click', onClick)
   * on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
   *
   * // adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
   * on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
   *
   * @param {(Element|Element[])} [window] source
   * the element which will trigger the event
   * @param {(String|String[])} type
   * the event name to bind. Or an array of
   * @param {(Function|Function[])} handler
   * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
   * if there are less handlers than event types, the last handler is bound to all remaining events.
   *
   * @return {Boolean} Success of the binding
   */


  function on(source, type, handler, options) {
    return evt(source, type, handler, 'add', options);
  }
  /**
   * Detached an event listener from a DOM Element, or an array of.
   *
   * @example
   * import {qs, off} from '@okiba/dom'
   * const button = qs('.button')
   *
   * button.addEventListener('click', onButtonClick)
   * // or okiba's `on` on(button, 'click')
   *
   * off(button, 'click', onButtonClick)
   *
   * // removes `onMouseChange` from both 'mouseenter' and 'mouseleave'
   * off(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
   *
   * // removes `onClick` from 'click' and `onMouseChange` from both 'mouseenter' and 'mouseleave'
   * off(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
   *
   * @param {(Element|Element[])} [window] source
   * Element which will trigger the event
   * @param {(String|String[])} type
   * Event name to unbind. Or an array of
   * @param {(Function|Function[])} handler
   * Callback bound to the event. If an array is supplied the handlers will be unbound in order,
   * if there are less handlers than event types, the last handler is unbound from all remaining events.
   *
   * @return {Boolean} Success of the unbinding
   */

  function off(source, type, handler, options) {
    return evt(source, type, handler, 'remove', options);
  }

  /**
   * @param {Element} el Element whose surface is used for drag events
   * @example
   * import {DragEmitter} from '@okiba/drag-emitter'
   * import {qs} from '@okiba/dom'
   *
   * const dragEmitter = new DragEmitter(qs('.container'))
   * dragEmitter.on(
   *   'drag',
   *   ({deltaX, clientX, deltaY, clientY}) => {
   *     console.log(deltaX, clientX, deltaY, clientY)
   *   }
   */

  var DragEmitter =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(DragEmitter, _EventEmitter);

    function DragEmitter(el) {
      var _this;

      _classCallCheck(this, DragEmitter);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragEmitter).call(this));
      _this.el = el;

      _this.autoBind();

      _this.listen();

      return _this;
    }
    /**
     * Unbinds events from the element and deletes the reference.
     * To be called when the instance is not needed anymore for cleanup.
     */


    _createClass(DragEmitter, [{
      key: "destroy",
      value: function destroy() {
        this.unlisten();
        this.el = null;
      }
    }, {
      key: "setPointerDown",
      value: function setPointerDown(_ref) {
        var clientX = _ref.clientX,
            clientY = _ref.clientY;
        this.pointerX = clientX;
        this.pointerY = clientY;
        this.isPointerDown = true;
        this.el.classList.add('is-pointer-down');
      }
    }, {
      key: "setPointerUp",
      value: function setPointerUp() {
        if (!this.isPointerDown) return;
        this.isPointerDown = false;
        this.pointerX = this.pointerY = null;
        this.el.classList.remove('is-pointer-down');
        this.emit('dragend');
      }
    }, {
      key: "setPointerPos",
      value: function setPointerPos(xCoord, yCoord) {
        if (this.isPointerDown) {
          this.emitDrag(xCoord, yCoord);
        }

        this.pointerX = xCoord;
        this.pointerY = yCoord;
      }
    }, {
      key: "emitDrag",
      value: function emitDrag(xCoord, yCoord) {
        this.emit('drag', {
          deltaX: this.pointerX - xCoord,
          clientX: xCoord,
          deltaY: this.pointerY - yCoord,
          clientY: yCoord
        });
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(e) {
        this.setPointerDown(e.touches[0]);
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        this.setPointerPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd() {
        this.setPointerUp();
      }
    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        this.setPointerDown(e);
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        this.setPointerPos(e.clientX, e.clientY);
      }
    }, {
      key: "onMouseUp",
      value: function onMouseUp() {
        this.setPointerUp();
      }
    }, {
      key: "listen",
      value: function listen() {
        on(this.el, 'touchstart', this.onTouchStart);
        on(window, 'touchmove', this.onTouchMove);
        on(window, 'touchend', this.onTouchEnd);
        on(this.el, 'mousedown', this.onMouseDown);
        on(window, 'mousemove', this.onMouseMove);
        on(window, 'mouseup', this.onMouseUp);
      }
    }, {
      key: "unlisten",
      value: function unlisten() {
        off(this.el, 'touchstart', this.onTouchStart);
        off(window, 'touchmove', this.onTouchMove);
        off(window, 'touchend', this.onTouchEnd);
        off(this.el, 'mousedown', this.onMouseDown);
        off(window, 'mousemove', this.onMouseMove);
        off(window, 'mouseup', this.onMouseUp);
      }
    }, {
      key: "autoBind",
      value: function autoBind() {
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
      }
    }]);

    return DragEmitter;
  }(EventEmitter);

  return DragEmitter;

}));
