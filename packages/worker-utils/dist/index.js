var OkibaWorkerUtils = (function (exports) {
  'use strict';

  /**
   * @module worker-utils
   * @description Set of useful functions to ease WebWorkers development
   */

  /**
    * Creates a web worker starting from a function
    * @param  {Function} fn function to be included in the worker script, will be self-invoked
    * @return {WebWorker}        worker running the passed script
    */
  function createWorker(code) {
    return new Worker(URL.createObjectURL(new Blob([code])));
  }

  exports.createWorker = createWorker;

  return exports;

}({}));
