(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-fast-ui"] = factory(require("vue"));
	else
		root["v-fast-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2543":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3831":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5ede":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_049a4216_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2543");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_049a4216_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_049a4216_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_049a4216_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6c6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69e918f2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3831");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69e918f2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69e918f2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69e918f2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "db2a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./packages/toast/src/toast.js
 // const ToastConstructor = Vue.extend(require('./toast.vue'));

var ToastConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  template: "\n  <transition name=\"mint-toast-pop\">\n    <div class=\"mint-toast\" v-show=\"visible\" :class=\"customClass\" :style=\"{ 'padding': iconClass === '' ? '10px' : '20px' }\">\n      <i class=\"mint-toast-icon\" :class=\"iconClass\" v-if=\"iconClass !== ''\"></i>\n      <span class=\"mint-toast-text\" :style=\"{ 'padding-top': iconClass === '' ? '0' : '10px' }\">{{ message }}</span>\n    </div>\n  </transition>\n  ",
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    customClass: function customClass() {
      var classes = [];

      switch (this.position) {
        case 'top':
          classes.push('is-placetop');
          break;

        case 'bottom':
          classes.push('is-placebottom');
          break;

        default:
          classes.push('is-placemiddle');
      }

      classes.push(this.className);
      return classes.join(' ');
    }
  }
});
var toastPool = [];

var getAnInstance = function getAnInstance() {
  if (toastPool.length > 0) {
    var instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }

  return new ToastConstructor({});
};

var returnAnInstance = function returnAnInstance(instance) {
  if (instance) {
    toastPool.push(instance);
  }
};

var removeDom = function removeDom(event) {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

var toast_Toast = function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var duration = options.duration || 2000;
  var instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';
  var inse = instance.$mount(document.createElement('div'));
  document.body.appendChild(inse.$el);
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    ~duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return;
      instance.close();
    }, duration));
  });
  return instance;
};

/* harmony default export */ var toast = (toast_Toast);
// CONCATENATED MODULE: ./packages/toast/index.js


toast.install = function (Vue) {
  Vue.prototype.$toast = toast;
};

/* harmony default export */ var packages_toast = (toast);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ef126a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/spinner/index.vue?vue&type=template&id=049a4216&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"spinner-roll",attrs:{"width":"32","src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAC\n  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\n  Yxf4DRcbcX1otq98AAAAASUVORK5CYII=","alt":""}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/spinner/index.vue?vue&type=template&id=049a4216&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/spinner/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var spinnervue_type_script_lang_js_ = ({
  name: 'spiner',
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./packages/spinner/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_spinnervue_type_script_lang_js_ = (spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/spinner/index.vue?vue&type=style&index=0&id=049a4216&lang=css&scoped=true&
var spinnervue_type_style_index_0_id_049a4216_lang_css_scoped_true_ = __webpack_require__("5ede");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/spinner/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_spinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "049a4216",
  null
  
)

/* harmony default export */ var spinner = (component.exports);
// CONCATENATED MODULE: ./packages/indicator/index.js


var IndicatorConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  template: "\n    <transition name=\"mint-indicator\">\n      <div class=\"mint-indicator\" v-show=\"visible\">\n        <div class=\"mint-indicator-mask\" @touchmove.stop.prevent></div>\n        <div class=\"mint-indicator-wrapper\" :style=\"{ 'padding': text ? '20px' : '15px' }\">\n          <spinner class=\"mint-indicator-spin\" :type=\"convertedSpinnerType\" :size=\"32\"></spinner>\n          <span class=\"mint-indicator-text\" v-show=\"text\">{{ text }}</span>\n        </div>\n      </div>\n    </transition>\n  ",
  data: function data() {
    return {
      visible: false
    };
  },
  components: {
    Spinner: spinner
  },
  computed: {
    convertedSpinnerType: function convertedSpinnerType() {
      switch (this.spinnerType) {
        case 'double-bounce':
          return 1;

        case 'triple-bounce':
          return 2;

        case 'fading-circle':
          return 3;

        default:
          return 0;
      }
    }
  },
  props: {
    text: String,
    spinnerType: {
      type: String,
      default: 'snake'
    }
  }
});
var indicator_instance;
/* harmony default export */ var indicator = ({
  open: function open() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!indicator_instance) {
      indicator_instance = new IndicatorConstructor();
    }

    if (indicator_instance.visible) return;
    indicator_instance.text = typeof options === 'string' ? options : options.text || '';
    indicator_instance.spinnerType = options.spinnerType || 'snake';
    indicator_instance.$mount(document.createElement('div'));
    document.body.appendChild(indicator_instance.$el);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      indicator_instance.visible = true;
    });
  },
  close: function close() {
    if (indicator_instance) {
      indicator_instance.visible = false;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ef126a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/six-number/src/index.vue?vue&type=template&id=69e918f2&scoped=true&
var srcvue_type_template_id_69e918f2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputData),expression:"inputData"}],ref:"codeinput",staticClass:"code-input",attrs:{"type":"tel","pattern":"[0-9]*","maxlength":"6"},domProps:{"value":(_vm.inputData)},on:{"focus":_vm.handleInputFocus,"blur":_vm.handleInputBlur,"keyup":function($event){_vm.inputData.length === 6 ? _vm.lastCodeKeyup($event) : _vm.codekeyup($event)},"input":function($event){if($event.target.composing){ return; }_vm.inputData=$event.target.value}}}),_c('div',{staticClass:"code-all",on:{"click":function($event){return _vm.focus()}}},_vm._l((_vm.codeData),function(item,index){return _c('div',{key:index,staticClass:"code-item",class:{ 'line': _vm.type === 'line', 'rect': _vm.type === 'rect',
        'focus': (_vm.focusIndex === index && _vm.inputFoucs) || (index === 5 && _vm.focusIndex === 6 && _vm.inputFoucs) }},[_vm._v("\n      "+_vm._s(_vm._f("number2password")(_vm.inputData[index],_vm.inputType === 'password'))+"\n    ")])}),0)])}
var srcvue_type_template_id_69e918f2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/six-number/src/index.vue?vue&type=template&id=69e918f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/six-number/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'six-number',
  data: function data() {
    return {
      codeData: '123456',
      inputData: '123',
      inputFoucs: false
    };
  },
  props: {
    type: {
      type: String,
      default: 'line',
      required: false
    },
    inputType: {
      type: String,
      default: 'number',
      required: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    focusIndex: function focusIndex() {
      return this.$data.inputData.length;
    }
  },
  filters: {
    number2password: function number2password(value, isPassword) {
      if (value) {
        return isPassword ? '•' : value;
      } else {
        return '';
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$el.querySelector('input').focus();
    },
    clear: function clear() {
      this.$data.inputData = '';
      this.$emit('input', '');
    },
    handleInputFocus: function handleInputFocus() {
      this.$data.inputFoucs = true;
    },
    handleInputBlur: function handleInputBlur() {
      this.$data.inputFoucs = false;
    },
    codekeyup: function codekeyup(e) {
      var currValue = e.currentTarget.value; // 限制输入数字

      if (/\D/.test(currValue)) {
        var cValue = currValue.substring(0, currValue.length - 1);
        e.currentTarget.value = currValue.substring(0, currValue.length - 1);
        this.$data.inputData = cValue;
        return false;
      }

      this.$emit('input', this.$data.inputData);
    },

    /**
     * 最后一个文本框输入完成
     */
    lastCodeKeyup: function lastCodeKeyup(e) {
      this.codekeyup(e);
      this.$emit('on-finish', this.$data.inputData);
    }
  },
  watch: {
    value: function value(newVal) {
      this.$data.inputData = newVal;
    }
  },
  mounted: function mounted() {
    this.$data.inputData = this.value;
  }
});
// CONCATENATED MODULE: ./packages/six-number/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var six_number_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/six-number/src/index.vue?vue&type=style&index=0&id=69e918f2&lang=css&scoped=true&
var srcvue_type_style_index_0_id_69e918f2_lang_css_scoped_true_ = __webpack_require__("6c6f");

// CONCATENATED MODULE: ./packages/six-number/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  six_number_srcvue_type_script_lang_js_,
  srcvue_type_template_id_69e918f2_scoped_true_render,
  srcvue_type_template_id_69e918f2_scoped_true_staticRenderFns,
  false,
  null,
  "69e918f2",
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/six-number/index.js


src.install = function (Vue) {
  Vue.component('six-number', src);
};

/* harmony default export */ var six_number = (src);
// EXTERNAL MODULE: ./packages/style.css
var style = __webpack_require__("db2a");

// CONCATENATED MODULE: ./packages/index.js





var components = [six_number];

var packages_install = function install(Vue) {
  if (install.installed) return;
  install.installed = true; // eslint-disable-next-line no-console

  console.info('v-fast-ui注册成功');
  Vue.prototype.$toast = packages_toast;
  Vue.prototype.$indicator = indicator; // 遍历并注册全局组件

  components.map(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  packages_install(window.Vue);
}

/* harmony default export */ var packages_0 = (packages_install);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "Toast", function() { return packages_toast; });
/* concated harmony reexport Indicator */__webpack_require__.d(__webpack_exports__, "Indicator", function() { return indicator; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=v-fast-ui.umd.js.map