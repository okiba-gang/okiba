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
 * @module PoolSystem
 * @description Manages a dinamically grown pool of DOM Elements
 * import PoolSystem from '@okiba/pool-system'
 *
 * @example
 * const container = document.querySelector('#container')
 *
 * function createEl(){
 *  return document.createElement('img');
 * }
 *
 * const pool = new PoolSystem(container, createEl)
 */
var PoolSystem =
/*#__PURE__*/
function () {
  /**
   * @param {Object} parent DOM Element used as container for all pool elements.
   * @param {Function} createEl Function that creates an istance the element you want to add to the pool.
   */
  function PoolSystem(parent, createEl) {
    _classCallCheck(this, PoolSystem);

    this.parent = parent;
    this.createEl = createEl;
    this.size = 0;
    this.pool = [];
  }
  /**
   * Makes sure the pool can host a minimum number of elements,
   * grows it if that's not the case.
   *
   * @param {Number} size Minimum pool size to ensure.
   */


  _createClass(PoolSystem, [{
    key: "ensure",
    value: function ensure(size) {
      if (this.size >= size) return;
      var diff = size - this.size;

      for (var index = 0; index < diff; index++) {
        var el = this.createEl();
        this.pool.push(el);
        this.parent.appendChild(el);
      }

      this.size = size;
    }
    /**
     * Hands a free element from the pool.
     * If there isn't one, it automatically grows the pool's.
     * This provides dynamic sizing which ensures
     *
     * @returns {Element} A free DOM Element
     */

  }, {
    key: "get",
    value: function get() {
      if (!this.pool.length) {
        this.ensure(this.size + 1);
      }

      return this.pool.pop();
    }
    /**
     * Marks an element as elegible for reutilization,
     * and pushes it into the pool
     *
     * @param {Element} Element to mark as free
     */

  }, {
    key: "free",
    value: function free(el) {
      this.pool.push(el);
    }
    /**
     * Nulls all references to DOM Elements
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.pool = null;
      this.parent = null;
      this.createEl = null;
      this.size = null;
    }
  }]);

  return PoolSystem;
}();

export default PoolSystem;
//# sourceMappingURL=index.esm.js.map
