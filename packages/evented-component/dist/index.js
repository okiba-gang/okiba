var OkibaEventedComponent = (function () {
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
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

    if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList || castable instanceof HTMLCollection) {
      return Array.prototype.slice.call(castable);
    }

    return [castable];
  }

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
      var _ui$key = ui[key],
          _ui$key$required = _ui$key.required,
          required = _ui$key$required === void 0 ? false : _ui$key$required,
          _ui$key$asArray = _ui$key.asArray,
          asArray = _ui$key$asArray === void 0 ? false : _ui$key$asArray;
      var els = qsa(ui[key].selector || ui[key], el);

      if (required && els.length === 0) {
        throw new Error("[!!] [Component] Cant't find UI element for selector: ".concat(ui[key]));
      }

      hash[key] = asArray ? els : arrayOrOne(els);
      return hash;
    }, {});
  }

  function bindComponents(components, el) {
    return Object.keys(components).reduce(function (hash, key) {
      var _components$key = components[key],
          type = _components$key.type,
          selector = _components$key.selector,
          _components$key$ghost = _components$key.ghost,
          ghost = _components$key$ghost === void 0 ? false : _components$key$ghost,
          _components$key$requi = _components$key.required,
          required = _components$key$requi === void 0 ? false : _components$key$requi,
          _components$key$asArr = _components$key.asArray,
          asArray = _components$key$asArr === void 0 ? false : _components$key$asArr,
          config = _objectWithoutProperties(_components$key, ["type", "selector", "ghost", "required", "asArray"]);

      if (typeof selector !== 'string' && !ghost || !type) {
        throw new Error("[!!] [Component] Invalid component configuration for key: ".concat(key));
      }

      var els = ghost ? [el] : qsa(selector, el);

      if (required && (!els || els.length === 0)) {
        throw new Error("[!!] [Component] Cant't find node with selector ".concat(selector, " for sub-component: ").concat(key));
      }

      els = asArray ? els : arrayOrOne(els);

      if (els) {
        hash[key] = Array.isArray(els) ? els.map(function (n) {
          return new type(_objectSpread2({}, config, {
            el: n
          }));
        }) : new type(_objectSpread2({}, config, {
          el: els
        }));
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
   * // or
   * { buttonNext: selector: '#buttonNext', asArray: true, required: true }
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
   *     options: {fullScreen: true},
   *     // Required component, default is false
   *     required: true
   *   }
    *  viewProgress: {
    *     // Bind ViewProgress component on parent Component dom node
    *     ghost: true,
    *     // Component class, extending Okiba Component
    *     type: ViewProgress
    *   },
    *   buttons: {
    *     selector: 'button',
    *     type: Button,
    *     asArray: true,
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


  var Component = /*#__PURE__*/function () {
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

        if (this.onDestroy) {
          this.onDestroy();
        }

        if (this.components) {
          Object.keys(this.components).forEach(function (key) {
            return (_this.components[key].length ? _this.components[key] : [_this.components[key]]).forEach(function (c) {
              return c.destroy();
            });
          });
        }

        this.components = null;
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

  var EventedComponent = /*#__PURE__*/function (_Component) {
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

}());
