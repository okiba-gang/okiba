import { qsa } from '@okiba/dom';
import { arrayOrOne } from '@okiba/arrays';

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

export default Component;
//# sourceMappingURL=index.esm.js.map
