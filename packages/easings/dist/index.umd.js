(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.easings = {}));
}(this, function (exports) { 'use strict';

	/**
	 * @module  easings
	 * @description Collection of easings to alter a value
	 * @example
	 * import {easeInQuad} from '@okiba/easings'
	 * const easedProgress = easeInQuad(progress)
	 */
	function linear(t) {
	  return t;
	}
	function easeInQuad(t) {
	  return t * t;
	}
	function easeOutQuad(t) {
	  return t * (2 - t);
	}
	function easeInOutQuad(t) {
	  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	}
	function easeInCubic(t) {
	  return t * t * t;
	}
	function easeOutCubic(t) {
	  return --t * t * t + 1;
	}
	function easeInOutCubic(t) {
	  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	}
	function easeInQuart(t) {
	  return t * t * t * t;
	}
	function easeOutQuart(t) {
	  return 1 - --t * t * t * t;
	}
	function easeInOutQuart(t) {
	  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
	}
	function easeInQuint(t) {
	  return t * t * t * t * t;
	}
	function easeOutQuint(t) {
	  return 1 + --t * t * t * t * t;
	}
	function easeInOutQuint(t) {
	  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
	}

	exports.easeInCubic = easeInCubic;
	exports.easeInOutCubic = easeInOutCubic;
	exports.easeInOutQuad = easeInOutQuad;
	exports.easeInOutQuart = easeInOutQuart;
	exports.easeInOutQuint = easeInOutQuint;
	exports.easeInQuad = easeInQuad;
	exports.easeInQuart = easeInQuart;
	exports.easeInQuint = easeInQuint;
	exports.easeOutCubic = easeOutCubic;
	exports.easeOutQuad = easeOutQuad;
	exports.easeOutQuart = easeOutQuart;
	exports.easeOutQuint = easeOutQuint;
	exports.linear = linear;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
