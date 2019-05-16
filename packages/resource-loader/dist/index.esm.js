import { createWorker } from '@okiba/worker-utils';

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

var workerScript = "\n  onmessage = ({data}) => {\n      self.fetch(data.url, {mode: 'cors'})\n        .then(r =>\n          postMessage({url: data.url, value: r.ok})\n        )\n        .catch(_ =>\n          postMessage({url: data.url, value: false})\n        )\n    }\n";

var ResourceLoader =
/*#__PURE__*/
function () {
  function ResourceLoader() {
    _classCallCheck(this, ResourceLoader);

    this.cache = {};

    if (window.Worker) {
      this.worker = createWorker(workerScript);
    }
  }
  /**
   * Initiates loading of a resource at a given URL
   * @param  {String} url Resource URL
   * @return {Promise} A promise which will be resolved if the resource
   * is loaded and rejected if not.
   */


  _createClass(ResourceLoader, [{
    key: "load",
    value: function load(url) {
      var _this = this;

      if (this.cache[url]) return this.cache[url];
      this.cache[url] = this.worker ? this._loadWithWorker(url) : this._loadWithFetch(url);
      this.cache[url]["catch"](function (_) {
        return delete _this.cache[url];
      });
      return this.cache[url];
    }
  }, {
    key: "_loadWithWorker",
    value: function _loadWithWorker(url) {
      var _this2 = this;

      var p = new Promise(function (res, rej) {
        _this2.worker.addEventListener('message', function (_ref) {
          var data = _ref.data;
          return data.value ? res() : rej();
        });
      });
      this.worker.postMessage({
        url: url
      });
      return p;
    }
  }, {
    key: "_loadWithFetch",
    value: function _loadWithFetch(url) {
      return new Promise(function (res, rej) {
        fetch(url, {
          mode: 'cors'
        }).then(function (r) {
          return r.ok ? res() : rej();
        })["catch"](rej);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      delete this.cache;

      if (this.worker) {
        this.worker.terminate();
      }
    }
  }]);

  return ResourceLoader;
}();

export default ResourceLoader;
//# sourceMappingURL=index.esm.js.map
