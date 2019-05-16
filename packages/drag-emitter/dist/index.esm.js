import EventEmitter from '@okiba/event-emitter';
import { on, off } from '@okiba/dom';

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

export default DragEmitter;
//# sourceMappingURL=index.esm.js.map
