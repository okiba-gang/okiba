(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['evented-component'] = factory());
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
   * @module arrays
   * @description Array utils for okiba js
   */

  /**
   * Return the first element if it only contains one
   * @example
   * const els = arrayOrOne([🍏, 🍌])
   * console.log(els) // [🍏, 🍌]
   *
   * const els = arrayOrOne([🍏])
   * console.log(els) // 🍏
   *
   * @param {Array-like} arrayLike The options object.
   * @returns {any} The first element or the argument, undefined if empty array
   */
  function arrayOrOne(arrayLike) {
    if (arrayLike === void 0 || arrayLike.length === 0) {
      return void 0;
    }

    if (arrayLike.length === 1) {
      return arrayLike[0];
    }

    return arrayLike;
  }
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
  /**
   * Selects an array of DOM Elements, scoped to element
   *
   * @example
   * import {qsa} from '@okiba/dom'
   * const fruits = qsa('.fruit')
   * console.log(fruits) // [div.fruit, div.fruit]
   *
   * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
   * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
   *
   * @return {Element[]} An array of DOM elements matching `selector`
   */

  function qsa(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return castArray(element.querySelectorAll(selector));
  }

  function bindUi(ui, el) {
    return Object.keys(ui).reduce(function (hash, key) {
      var els = arrayOrOne(qsa(ui[key].selector || ui[key], el));

      if (els) {
        hash[key] = els;
      } else if (!ui[key].optional) {
        throw new Error("[!!] [Component] Cant't find UI element for selector: ".concat(ui[key]));
      }

      return hash;
    }, {});
  }

  function bindComponents(components, el) {
    return Object.keys(components).reduce(function (hash, key) {
      var _components$key = components[key],
          type = _components$key.type,
          selector = _components$key.selector,
          options = _components$key.options,
          optional = _components$key.optional;

      if (typeof selector !== 'string' || !type) {
        throw new Error("[!!] [Component] Invalid component configuration for key: ".concat(key));
      }

      var els = arrayOrOne(qsa(selector, el));

      if (els) {
        hash[key] = Array.isArray(els) ? els.map(function (n) {
          return new type({
            el: n,
            options: options
          });
        }) : new type({
          el: els,
          options: options
        });
      } else if (!optional) {
        throw new Error("[!!] [Component] Cant't find node with selector ".concat(selector, " for sub-component: ").concat(key));
      }

      return hash;
    }, {});
  }
  /**
   * Accepts an __hash__ whose properties can be:
   * @param {Object} args Arguments to create a component
   * @param   {Element}   {el}       DOM Element to be bound
   * @param   {Object}    [{ui}]
   * UI hash where keys are name and values are selectors
   * ```javascript
   * { buttonNext: '#buttonNext' }
   * ```
   * Becomes:
   * ```javascript
   * this.ui.buttonNext
   * ```
   *
   * @param   {Object}    [{components}]
   * Components hash for childs to bind, keys are names and values are component initialization props:
   * ```javascript
   * {
   *   slider: {
   *     // Matched using [qs]('https://github/okiba-gang/okiba/packages/dom'), scoped to the current component element
   *     selector: '.domSelector',
   *     // Component class, extending Okiba Component
   *     type: Slider,
   *     // Options hash
   *     options: {fullScreen: true}
   *   }
   * }
   * ```
   *
   * Becomes:
   * ```javascript
   * this.components.slider
   * ```
   * @param   {Object}    [{options}]         Custom options passed to the component
   */


  var Component =
  /*#__PURE__*/
  function () {
    function Component(args) {
      _classCallCheck(this, Component);

      this.el = args.el;

      if (args.options) {
        this.options = args.options;
      }

      if (args.ui) {
        this.ui = bindUi(args.ui, args.el);
      }

      if (args.components) {
        this.components = bindComponents(args.components, args.el);
      }
    }
    /**
     * @function onDestroy
     * @description Virtual method, needs to be overridden
     * It's the place to call cleanup functions as it will
     * be called when your component is destroyed
     */

    /**
     * Should not be overridden, will call `onDestroy`
     * and forward destruction to all child components
     */


    _createClass(Component, [{
      key: "destroy",
      value: function destroy() {
        var _this = this;

        if (this.components) {
          Object.keys(this.components).forEach(function (key) {
            return (_this.components[key].length ? _this.components[key] : [_this.components[key]]).forEach(function (c) {
              return c.destroy();
            });
          });
        }

        if (this.onDestroy) {
          this.onDestroy();
        }
      }
    }]);

    return Component;
  }();

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

  var EventedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(EventedComponent, _Component);

    function EventedComponent(args) {
      var _this;

      _classCallCheck(this, EventedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EventedComponent).call(this, args));
      _this.emitter = new EventEmitter();
      /**
       * @function on
       * @see {"EventEmitter::on": "event-emitter#emitname-data"}
       */

      _this.on = _this.emitter.on.bind(_this.emitter);
      /**
       * @function off
       * @see {"EventEmitter::off": "event-emitter##offname-handler"}
       */

      _this.off = _this.emitter.off.bind(_this.emitter);
      /**
       * @function emit
       * @see {"EventEmitter::emit": "event-emitter#emitname-data"}
       */

      _this.emit = _this.emitter.emit.bind(_this.emitter);
      return _this;
    }
    /**
     *
     * @see  {"Component": "component#destroy"}
     */


    _createClass(EventedComponent, [{
      key: "destroy",
      value: function destroy() {
        Component.prototype.destroy.apply(this);
        this.emitter.destroy();
      }
    }]);

    return EventedComponent;
  }(Component);

  return EventedComponent;

}));
