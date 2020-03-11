var OkibaComponent = (function () {
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
      var _ui$key = ui[key],
          _ui$key$optional = _ui$key.optional,
          optional = _ui$key$optional === void 0 ? false : _ui$key$optional,
          _ui$key$asArray = _ui$key.asArray,
          asArray = _ui$key$asArray === void 0 ? false : _ui$key$asArray;
      var els = qsa(ui[key].selector || ui[key], el);

      if (!optional && els.length === 0) {
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
          options = _components$key.options,
          _components$key$ghost = _components$key.ghost,
          ghost = _components$key$ghost === void 0 ? false : _components$key$ghost,
          _components$key$optio = _components$key.optional,
          optional = _components$key$optio === void 0 ? false : _components$key$optio,
          _components$key$asArr = _components$key.asArray,
          asArray = _components$key$asArr === void 0 ? false : _components$key$asArr;

      if (typeof selector !== 'string' && !ghost || !type) {
        throw new Error("[!!] [Component] Invalid component configuration for key: ".concat(key));
      }

      var els = ghost ? [el] : qsa(selector, el);

      if (!optional && (!els || els.length === 0)) {
        throw new Error("[!!] [Component] Cant't find node with selector ".concat(selector, " for sub-component: ").concat(key));
      }

      els = asArray ? els : arrayOrOne(els);

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
   *  viewProgress: {
   *     // Bind ViewProgress component on parent Component dom node
   *     ghost: true,
   *     // Component class, extending Okiba Component
   *     type: ViewProgress
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

  return Component;

}());
