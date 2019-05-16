import Component from '@okiba/component';
import EventEmitter from '@okiba/event-emitter';

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

export default EventedComponent;
//# sourceMappingURL=index.esm.js.map
