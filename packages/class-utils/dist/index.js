var OkibaClassUtils = (function (exports) {
  'use strict';

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  /**
   * @module class-utils
   * @description Utilities that operate on classes
   */

  /**
   * Mixes properties and methods from a class into a given `this` context
   * @example
   * class Fruit {
   *   constructor() {
   *     this.isPeeled = false
   *   }
   *
   *   peel() {
   *     this.isPeeled = true
   *   }
   * }
   *
   * class Coloured {
   *   constructor(color) {
   *     this.color = color
   *   }
   * }
   *
   * class Edible {
   *   constructor(color) {
   *     mixin(Fruit, this)
   *     mixin(Coloured, this, color)
   *   }
   * }
   *
   * const edible = new Edible('red')
   * edible.peel()
   * console.log(edible.isPeeled, edible.color)
   * // Logs: true, 'red'
   *
   * @param {Class} BaseClass The class definition to mix-in
   * @param {Object} context The context that has to include methods and props
   * @param {...any} Arguments to pass to the BaseClass constructor
   */
  function mixin(BaseClass, context) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var base = _construct(BaseClass, args);

    for (var k in base) {
      context[k] = base[k];
    }

    Object.getOwnPropertyNames(base.constructor.prototype).forEach(function (k) {
      if (k !== 'constructor') {
        context[k] = base.constructor.prototype[k].bind(context);
      }
    });
  }

  exports.mixin = mixin;

  return exports;

}({}));
