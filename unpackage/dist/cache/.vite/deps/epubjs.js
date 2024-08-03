import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  require_dom_parser,
  require_jszip_min
} from "./chunk-2CQX6TAT.js";

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/value/is.js
var require_is = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/value/is.js"(exports, module) {
    "use strict";
    var _undefined = void 0;
    module.exports = function(value) {
      return value !== _undefined && value !== null;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/object/is.js
var require_is2 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/object/is.js"(exports, module) {
    "use strict";
    var isValue = require_is();
    var possibleTypes = {
      "object": true,
      "function": true,
      "undefined": true
      /* document.all */
    };
    module.exports = function(value) {
      if (!isValue(value))
        return false;
      return hasOwnProperty.call(possibleTypes, typeof value);
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/prototype/is.js
var require_is3 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/prototype/is.js"(exports, module) {
    "use strict";
    var isObject = require_is2();
    module.exports = function(value) {
      if (!isObject(value))
        return false;
      try {
        if (!value.constructor)
          return false;
        return value.constructor.prototype === value;
      } catch (error) {
        return false;
      }
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/function/is.js
var require_is4 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/function/is.js"(exports, module) {
    "use strict";
    var isPrototype = require_is3();
    module.exports = function(value) {
      if (typeof value !== "function")
        return false;
      if (!hasOwnProperty.call(value, "length"))
        return false;
      try {
        if (typeof value.length !== "number")
          return false;
        if (typeof value.call !== "function")
          return false;
        if (typeof value.apply !== "function")
          return false;
      } catch (error) {
        return false;
      }
      return !isPrototype(value);
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/plain-function/is.js
var require_is5 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/type@2.7.3/node_modules/type/plain-function/is.js"(exports, module) {
    "use strict";
    var isFunction = require_is4();
    var classRe = /^\s*class[\s{/}]/;
    var functionToString = Function.prototype.toString;
    module.exports = function(value) {
      if (!isFunction(value))
        return false;
      if (classRe.test(functionToString.call(value)))
        return false;
      return true;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/assign/is-implemented.js
var require_is_implemented = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/assign/is-implemented.js"(exports, module) {
    "use strict";
    module.exports = function() {
      var assign = Object.assign, obj;
      if (typeof assign !== "function")
        return false;
      obj = { foo: "raz" };
      assign(obj, { bar: "dwa" }, { trzy: "trzy" });
      return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/keys/is-implemented.js
var require_is_implemented2 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/keys/is-implemented.js"(exports, module) {
    "use strict";
    module.exports = function() {
      try {
        Object.keys("primitive");
        return true;
      } catch (e) {
        return false;
      }
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/function/noop.js
var require_noop = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/function/noop.js"(exports, module) {
    "use strict";
    module.exports = function() {
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/is-value.js
var require_is_value = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/is-value.js"(exports, module) {
    "use strict";
    var _undefined = require_noop()();
    module.exports = function(val) {
      return val !== _undefined && val !== null;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/keys/shim.js
var require_shim = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/keys/shim.js"(exports, module) {
    "use strict";
    var isValue = require_is_value();
    var keys = Object.keys;
    module.exports = function(object) {
      return keys(isValue(object) ? Object(object) : object);
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/keys/index.js
var require_keys = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/keys/index.js"(exports, module) {
    "use strict";
    module.exports = require_is_implemented2()() ? Object.keys : require_shim();
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/valid-value.js
var require_valid_value = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/valid-value.js"(exports, module) {
    "use strict";
    var isValue = require_is_value();
    module.exports = function(value) {
      if (!isValue(value))
        throw new TypeError("Cannot use null or undefined");
      return value;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/assign/shim.js
var require_shim2 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/assign/shim.js"(exports, module) {
    "use strict";
    var keys = require_keys();
    var value = require_valid_value();
    var max = Math.max;
    module.exports = function(dest, src) {
      var error, i, length = max(arguments.length, 2), assign;
      dest = Object(value(dest));
      assign = function(key) {
        try {
          dest[key] = src[key];
        } catch (e) {
          if (!error)
            error = e;
        }
      };
      for (i = 1; i < length; ++i) {
        src = arguments[i];
        keys(src).forEach(assign);
      }
      if (error !== void 0)
        throw error;
      return dest;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/assign/index.js
var require_assign = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/assign/index.js"(exports, module) {
    "use strict";
    module.exports = require_is_implemented()() ? Object.assign : require_shim2();
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/normalize-options.js
var require_normalize_options = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/normalize-options.js"(exports, module) {
    "use strict";
    var isValue = require_is_value();
    var forEach = Array.prototype.forEach;
    var create = Object.create;
    var process = function(src, obj) {
      var key;
      for (key in src)
        obj[key] = src[key];
    };
    module.exports = function(opts1) {
      var result = create(null);
      forEach.call(arguments, function(options) {
        if (!isValue(options))
          return;
        process(Object(options), result);
      });
      return result;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/string/#/contains/is-implemented.js
var require_is_implemented3 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/string/#/contains/is-implemented.js"(exports, module) {
    "use strict";
    var str = "razdwatrzy";
    module.exports = function() {
      if (typeof str.contains !== "function")
        return false;
      return str.contains("dwa") === true && str.contains("foo") === false;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/string/#/contains/shim.js
var require_shim3 = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/string/#/contains/shim.js"(exports, module) {
    "use strict";
    var indexOf = String.prototype.indexOf;
    module.exports = function(searchString) {
      return indexOf.call(this, searchString, arguments[1]) > -1;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/string/#/contains/index.js
var require_contains = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/string/#/contains/index.js"(exports, module) {
    "use strict";
    module.exports = require_is_implemented3()() ? String.prototype.contains : require_shim3();
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/d@1.0.2/node_modules/d/index.js
var require_d = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/d@1.0.2/node_modules/d/index.js"(exports, module) {
    "use strict";
    var isValue = require_is();
    var isPlainFunction = require_is5();
    var assign = require_assign();
    var normalizeOpts = require_normalize_options();
    var contains = require_contains();
    var d = module.exports = function(dscr, value) {
      var c, e, w, options, desc;
      if (arguments.length < 2 || typeof dscr !== "string") {
        options = value;
        value = dscr;
        dscr = null;
      } else {
        options = arguments[2];
      }
      if (isValue(dscr)) {
        c = contains.call(dscr, "c");
        e = contains.call(dscr, "e");
        w = contains.call(dscr, "w");
      } else {
        c = w = true;
        e = false;
      }
      desc = { value, configurable: c, enumerable: e, writable: w };
      return !options ? desc : assign(normalizeOpts(options), desc);
    };
    d.gs = function(dscr, get, set) {
      var c, e, options, desc;
      if (typeof dscr !== "string") {
        options = set;
        set = get;
        get = dscr;
        dscr = null;
      } else {
        options = arguments[3];
      }
      if (!isValue(get)) {
        get = void 0;
      } else if (!isPlainFunction(get)) {
        options = get;
        get = set = void 0;
      } else if (!isValue(set)) {
        set = void 0;
      } else if (!isPlainFunction(set)) {
        options = set;
        set = void 0;
      }
      if (isValue(dscr)) {
        c = contains.call(dscr, "c");
        e = contains.call(dscr, "e");
      } else {
        c = true;
        e = false;
      }
      desc = { get, set, configurable: c, enumerable: e };
      return !options ? desc : assign(normalizeOpts(options), desc);
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/valid-callable.js
var require_valid_callable = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/es5-ext@0.10.64/node_modules/es5-ext/object/valid-callable.js"(exports, module) {
    "use strict";
    module.exports = function(fn) {
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      return fn;
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/event-emitter@0.3.5/node_modules/event-emitter/index.js
var require_event_emitter = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/event-emitter@0.3.5/node_modules/event-emitter/index.js"(exports, module) {
    "use strict";
    var d = require_d();
    var callable = require_valid_callable();
    var apply = Function.prototype.apply;
    var call = Function.prototype.call;
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var defineProperties = Object.defineProperties;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var descriptor = { configurable: true, enumerable: false, writable: true };
    var on;
    var once;
    var off;
    var emit;
    var methods;
    var descriptors;
    var base;
    on = function(type2, listener) {
      var data;
      callable(listener);
      if (!hasOwnProperty2.call(this, "__ee__")) {
        data = descriptor.value = create(null);
        defineProperty(this, "__ee__", descriptor);
        descriptor.value = null;
      } else {
        data = this.__ee__;
      }
      if (!data[type2])
        data[type2] = listener;
      else if (typeof data[type2] === "object")
        data[type2].push(listener);
      else
        data[type2] = [data[type2], listener];
      return this;
    };
    once = function(type2, listener) {
      var once2, self2;
      callable(listener);
      self2 = this;
      on.call(this, type2, once2 = function() {
        off.call(self2, type2, once2);
        apply.call(listener, this, arguments);
      });
      once2.__eeOnceListener__ = listener;
      return this;
    };
    off = function(type2, listener) {
      var data, listeners, candidate, i;
      callable(listener);
      if (!hasOwnProperty2.call(this, "__ee__"))
        return this;
      data = this.__ee__;
      if (!data[type2])
        return this;
      listeners = data[type2];
      if (typeof listeners === "object") {
        for (i = 0; candidate = listeners[i]; ++i) {
          if (candidate === listener || candidate.__eeOnceListener__ === listener) {
            if (listeners.length === 2)
              data[type2] = listeners[i ? 0 : 1];
            else
              listeners.splice(i, 1);
          }
        }
      } else {
        if (listeners === listener || listeners.__eeOnceListener__ === listener) {
          delete data[type2];
        }
      }
      return this;
    };
    emit = function(type2) {
      var i, l, listener, listeners, args;
      if (!hasOwnProperty2.call(this, "__ee__"))
        return;
      listeners = this.__ee__[type2];
      if (!listeners)
        return;
      if (typeof listeners === "object") {
        l = arguments.length;
        args = new Array(l - 1);
        for (i = 1; i < l; ++i)
          args[i - 1] = arguments[i];
        listeners = listeners.slice();
        for (i = 0; listener = listeners[i]; ++i) {
          apply.call(listener, this, args);
        }
      } else {
        switch (arguments.length) {
          case 1:
            call.call(listeners, this);
            break;
          case 2:
            call.call(listeners, this, arguments[1]);
            break;
          case 3:
            call.call(listeners, this, arguments[1], arguments[2]);
            break;
          default:
            l = arguments.length;
            args = new Array(l - 1);
            for (i = 1; i < l; ++i) {
              args[i - 1] = arguments[i];
            }
            apply.call(listeners, this, args);
        }
      }
    };
    methods = {
      on,
      once,
      off,
      emit
    };
    descriptors = {
      on: d(on),
      once: d(once),
      off: d(off),
      emit: d(emit)
    };
    base = defineProperties({}, descriptors);
    module.exports = exports = function(o) {
      return o == null ? create(base) : defineProperties(Object(o), descriptors);
    };
    exports.methods = methods;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/core.js
var core_exports = {};
__export(core_exports, {
  RangeObject: () => RangeObject,
  blob2base64: () => blob2base64,
  borders: () => borders,
  bounds: () => bounds,
  createBase64Url: () => createBase64Url,
  createBlob: () => createBlob,
  createBlobUrl: () => createBlobUrl,
  defaults: () => defaults,
  defer: () => defer,
  documentHeight: () => documentHeight,
  extend: () => extend,
  filterChildren: () => filterChildren,
  findChildren: () => findChildren,
  getParentByTagName: () => getParentByTagName,
  indexOfElementNode: () => indexOfElementNode,
  indexOfNode: () => indexOfNode,
  indexOfSorted: () => indexOfSorted,
  indexOfTextNode: () => indexOfTextNode,
  insert: () => insert,
  isElement: () => isElement,
  isFloat: () => isFloat,
  isNumber: () => isNumber,
  isXml: () => isXml,
  locationOf: () => locationOf,
  nodeBounds: () => nodeBounds,
  parents: () => parents,
  parse: () => parse,
  prefixed: () => prefixed,
  qs: () => qs,
  qsa: () => qsa,
  qsp: () => qsp,
  querySelectorByType: () => querySelectorByType,
  requestAnimationFrame: () => requestAnimationFrame2,
  revokeBlobUrl: () => revokeBlobUrl,
  sprint: () => sprint,
  treeWalker: () => treeWalker,
  type: () => type,
  uuid: () => uuid,
  walk: () => walk,
  windowBounds: () => windowBounds
});
function uuid() {
  var d = (/* @__PURE__ */ new Date()).getTime();
  var uuid2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : r & 7 | 8).toString(16);
  });
  return uuid2;
}
function documentHeight() {
  return Math.max(
    document.documentElement.clientHeight,
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );
}
function isElement(obj) {
  return !!(obj && obj.nodeType == 1);
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function isFloat(n) {
  let f = parseFloat(n);
  if (isNumber(n) === false) {
    return false;
  }
  if (typeof n === "string" && n.indexOf(".") > -1) {
    return true;
  }
  return Math.floor(f) !== f;
}
function prefixed(unprefixed) {
  var vendors = ["Webkit", "webkit", "Moz", "O", "ms"];
  var prefixes = ["-webkit-", "-webkit-", "-moz-", "-o-", "-ms-"];
  var upper = unprefixed[0].toUpperCase() + unprefixed.slice(1);
  var length = vendors.length;
  if (typeof document === "undefined" || typeof document.body.style[unprefixed] != "undefined") {
    return unprefixed;
  }
  for (var i = 0; i < length; i++) {
    if (typeof document.body.style[vendors[i] + upper] != "undefined") {
      return prefixes[i] + unprefixed;
    }
  }
  return unprefixed;
}
function defaults(obj) {
  for (var i = 1, length = arguments.length; i < length; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (obj[prop] === void 0)
        obj[prop] = source[prop];
    }
  }
  return obj;
}
function extend(target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source)
      return;
    Object.getOwnPropertyNames(source).forEach(function(propName) {
      Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
    });
  });
  return target;
}
function insert(item, array, compareFunction) {
  var location = locationOf(item, array, compareFunction);
  array.splice(location, 0, item);
  return location;
}
function locationOf(item, array, compareFunction, _start, _end) {
  var start = _start || 0;
  var end = _end || array.length;
  var pivot = parseInt(start + (end - start) / 2);
  var compared;
  if (!compareFunction) {
    compareFunction = function(a, b) {
      if (a > b)
        return 1;
      if (a < b)
        return -1;
      if (a == b)
        return 0;
    };
  }
  if (end - start <= 0) {
    return pivot;
  }
  compared = compareFunction(array[pivot], item);
  if (end - start === 1) {
    return compared >= 0 ? pivot : pivot + 1;
  }
  if (compared === 0) {
    return pivot;
  }
  if (compared === -1) {
    return locationOf(item, array, compareFunction, pivot, end);
  } else {
    return locationOf(item, array, compareFunction, start, pivot);
  }
}
function indexOfSorted(item, array, compareFunction, _start, _end) {
  var start = _start || 0;
  var end = _end || array.length;
  var pivot = parseInt(start + (end - start) / 2);
  var compared;
  if (!compareFunction) {
    compareFunction = function(a, b) {
      if (a > b)
        return 1;
      if (a < b)
        return -1;
      if (a == b)
        return 0;
    };
  }
  if (end - start <= 0) {
    return -1;
  }
  compared = compareFunction(array[pivot], item);
  if (end - start === 1) {
    return compared === 0 ? pivot : -1;
  }
  if (compared === 0) {
    return pivot;
  }
  if (compared === -1) {
    return indexOfSorted(item, array, compareFunction, pivot, end);
  } else {
    return indexOfSorted(item, array, compareFunction, start, pivot);
  }
}
function bounds(el) {
  var style = window.getComputedStyle(el);
  var widthProps = ["width", "paddingRight", "paddingLeft", "marginRight", "marginLeft", "borderRightWidth", "borderLeftWidth"];
  var heightProps = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth"];
  var width = 0;
  var height = 0;
  widthProps.forEach(function(prop) {
    width += parseFloat(style[prop]) || 0;
  });
  heightProps.forEach(function(prop) {
    height += parseFloat(style[prop]) || 0;
  });
  return {
    height,
    width
  };
}
function borders(el) {
  var style = window.getComputedStyle(el);
  var widthProps = ["paddingRight", "paddingLeft", "marginRight", "marginLeft", "borderRightWidth", "borderLeftWidth"];
  var heightProps = ["paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth"];
  var width = 0;
  var height = 0;
  widthProps.forEach(function(prop) {
    width += parseFloat(style[prop]) || 0;
  });
  heightProps.forEach(function(prop) {
    height += parseFloat(style[prop]) || 0;
  });
  return {
    height,
    width
  };
}
function nodeBounds(node) {
  let elPos;
  let doc = node.ownerDocument;
  if (node.nodeType == Node.TEXT_NODE) {
    let elRange = doc.createRange();
    elRange.selectNodeContents(node);
    elPos = elRange.getBoundingClientRect();
  } else {
    elPos = node.getBoundingClientRect();
  }
  return elPos;
}
function windowBounds() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}
function indexOfNode(node, typeId) {
  var parent2 = node.parentNode;
  var children = parent2.childNodes;
  var sib;
  var index = -1;
  for (var i = 0; i < children.length; i++) {
    sib = children[i];
    if (sib.nodeType === typeId) {
      index++;
    }
    if (sib == node)
      break;
  }
  return index;
}
function indexOfTextNode(textNode) {
  return indexOfNode(textNode, TEXT_NODE);
}
function indexOfElementNode(elementNode) {
  return indexOfNode(elementNode, ELEMENT_NODE);
}
function isXml(ext) {
  return ["xml", "opf", "ncx"].indexOf(ext) > -1;
}
function createBlob(content, mime3) {
  return new Blob([content], { type: mime3 });
}
function createBlobUrl(content, mime3) {
  var tempUrl;
  var blob = createBlob(content, mime3);
  tempUrl = _URL.createObjectURL(blob);
  return tempUrl;
}
function revokeBlobUrl(url) {
  return _URL.revokeObjectURL(url);
}
function createBase64Url(content, mime3) {
  var data;
  var datauri;
  if (typeof content !== "string") {
    return;
  }
  data = btoa(encodeURIComponent(content));
  datauri = "data:" + mime3 + ";base64," + data;
  return datauri;
}
function type(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}
function parse(markup, mime3, forceXMLDom) {
  var doc;
  var Parser;
  if (typeof DOMParser === "undefined" || forceXMLDom) {
    Parser = require_dom_parser().DOMParser;
  } else {
    Parser = DOMParser;
  }
  if (markup.charCodeAt(0) === 65279) {
    markup = markup.slice(1);
  }
  doc = new Parser().parseFromString(markup, mime3);
  return doc;
}
function qs(el, sel) {
  var elements;
  if (!el) {
    throw new Error("No Element Provided");
  }
  if (typeof el.querySelector != "undefined") {
    return el.querySelector(sel);
  } else {
    elements = el.getElementsByTagName(sel);
    if (elements.length) {
      return elements[0];
    }
  }
}
function qsa(el, sel) {
  if (typeof el.querySelector != "undefined") {
    return el.querySelectorAll(sel);
  } else {
    return el.getElementsByTagName(sel);
  }
}
function qsp(el, sel, props) {
  var q, filtered;
  if (typeof el.querySelector != "undefined") {
    sel += "[";
    for (var prop in props) {
      sel += prop + "~='" + props[prop] + "'";
    }
    sel += "]";
    return el.querySelector(sel);
  } else {
    q = el.getElementsByTagName(sel);
    filtered = Array.prototype.slice.call(q, 0).filter(function(el2) {
      for (var prop2 in props) {
        if (el2.getAttribute(prop2) === props[prop2]) {
          return true;
        }
      }
      return false;
    });
    if (filtered) {
      return filtered[0];
    }
  }
}
function sprint(root, func) {
  var doc = root.ownerDocument || root;
  if (typeof doc.createTreeWalker !== "undefined") {
    treeWalker(root, func, NodeFilter.SHOW_TEXT);
  } else {
    walk(root, function(node) {
      if (node && node.nodeType === 3) {
        func(node);
      }
    }, true);
  }
}
function treeWalker(root, func, filter) {
  var treeWalker2 = document.createTreeWalker(root, filter, null, false);
  let node;
  while (node = treeWalker2.nextNode()) {
    func(node);
  }
}
function walk(node, callback) {
  if (callback(node)) {
    return true;
  }
  node = node.firstChild;
  if (node) {
    do {
      let walked = walk(node, callback);
      if (walked) {
        return true;
      }
      node = node.nextSibling;
    } while (node);
  }
}
function blob2base64(blob) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
      resolve(reader.result);
    };
  });
}
function defer() {
  this.resolve = null;
  this.reject = null;
  this.id = uuid();
  this.promise = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
  Object.freeze(this);
}
function querySelectorByType(html, element, type2) {
  var query;
  if (typeof html.querySelector != "undefined") {
    query = html.querySelector(`${element}[*|type="${type2}"]`);
  }
  if (!query || query.length === 0) {
    query = qsa(html, element);
    for (var i = 0; i < query.length; i++) {
      if (query[i].getAttributeNS("http://www.idpf.org/2007/ops", "type") === type2 || query[i].getAttribute("epub:type") === type2) {
        return query[i];
      }
    }
  } else {
    return query;
  }
}
function findChildren(el) {
  var result = [];
  var childNodes = el.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];
    if (node.nodeType === 1) {
      result.push(node);
    }
  }
  return result;
}
function parents(node) {
  var nodes = [node];
  for (; node; node = node.parentNode) {
    nodes.unshift(node);
  }
  return nodes;
}
function filterChildren(el, nodeName, single) {
  var result = [];
  var childNodes = el.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];
    if (node.nodeType === 1 && node.nodeName.toLowerCase() === nodeName) {
      if (single) {
        return node;
      } else {
        result.push(node);
      }
    }
  }
  if (!single) {
    return result;
  }
}
function getParentByTagName(node, tagname) {
  let parent2;
  if (node === null || tagname === "")
    return;
  parent2 = node.parentNode;
  while (parent2.nodeType === 1) {
    if (parent2.tagName.toLowerCase() === tagname) {
      return parent2;
    }
    parent2 = parent2.parentNode;
  }
}
var requestAnimationFrame2, ELEMENT_NODE, TEXT_NODE, _URL, RangeObject;
var init_core = __esm({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/core.js"() {
    requestAnimationFrame2 = typeof window != "undefined" ? window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame : false;
    ELEMENT_NODE = 1;
    TEXT_NODE = 3;
    _URL = typeof URL != "undefined" ? URL : typeof window != "undefined" ? window.URL || window.webkitURL || window.mozURL : void 0;
    RangeObject = class {
      constructor() {
        this.collapsed = false;
        this.commonAncestorContainer = void 0;
        this.endContainer = void 0;
        this.endOffset = void 0;
        this.startContainer = void 0;
        this.startOffset = void 0;
      }
      setStart(startNode, startOffset) {
        this.startContainer = startNode;
        this.startOffset = startOffset;
        if (!this.endContainer) {
          this.collapse(true);
        } else {
          this.commonAncestorContainer = this._commonAncestorContainer();
        }
        this._checkCollapsed();
      }
      setEnd(endNode, endOffset) {
        this.endContainer = endNode;
        this.endOffset = endOffset;
        if (!this.startContainer) {
          this.collapse(false);
        } else {
          this.collapsed = false;
          this.commonAncestorContainer = this._commonAncestorContainer();
        }
        this._checkCollapsed();
      }
      collapse(toStart) {
        this.collapsed = true;
        if (toStart) {
          this.endContainer = this.startContainer;
          this.endOffset = this.startOffset;
          this.commonAncestorContainer = this.startContainer.parentNode;
        } else {
          this.startContainer = this.endContainer;
          this.startOffset = this.endOffset;
          this.commonAncestorContainer = this.endOffset.parentNode;
        }
      }
      selectNode(referenceNode) {
        let parent2 = referenceNode.parentNode;
        let index = Array.prototype.indexOf.call(parent2.childNodes, referenceNode);
        this.setStart(parent2, index);
        this.setEnd(parent2, index + 1);
      }
      selectNodeContents(referenceNode) {
        let end = referenceNode.childNodes[referenceNode.childNodes - 1];
        let endIndex = referenceNode.nodeType === 3 ? referenceNode.textContent.length : parent.childNodes.length;
        this.setStart(referenceNode, 0);
        this.setEnd(referenceNode, endIndex);
      }
      _commonAncestorContainer(startContainer, endContainer) {
        var startParents = parents(startContainer || this.startContainer);
        var endParents = parents(endContainer || this.endContainer);
        if (startParents[0] != endParents[0])
          return void 0;
        for (var i = 0; i < startParents.length; i++) {
          if (startParents[i] != endParents[i]) {
            return startParents[i - 1];
          }
        }
      }
      _checkCollapsed() {
        if (this.startContainer === this.endContainer && this.startOffset === this.endOffset) {
          this.collapsed = true;
        } else {
          this.collapsed = false;
        }
      }
      toString() {
      }
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/path-webpack@0.0.3/node_modules/path-webpack/path.js
var require_path = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/path-webpack@0.0.3/node_modules/path-webpack/path.js"(exports, module) {
    "use strict";
    if (!process) {
      process = {
        "cwd": function() {
          return "/";
        }
      };
    }
    var process;
    function assertPath(path5) {
      if (typeof path5 !== "string") {
        throw new TypeError("Path must be a string. Received " + path5);
      }
    }
    function normalizeStringPosix(path5, allowAboveRoot) {
      var res = "";
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path5.length; ++i) {
        if (i < path5.length)
          code = path5.charCodeAt(i);
        else if (code === 47)
          break;
        else
          code = 47;
        if (code === 47) {
          if (lastSlash === i - 1 || dots === 1) {
          } else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
              if (res.length > 2) {
                var start = res.length - 1;
                var j = start;
                for (; j >= 0; --j) {
                  if (res.charCodeAt(j) === 47)
                    break;
                }
                if (j !== start) {
                  if (j === -1)
                    res = "";
                  else
                    res = res.slice(0, j);
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = "";
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += "/..";
              else
                res = "..";
            }
          } else {
            if (res.length > 0)
              res += "/" + path5.slice(lastSlash + 1, i);
            else
              res = path5.slice(lastSlash + 1, i);
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }
    var posix = {
      // path.resolve([from ...], to)
      resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path5;
          if (i >= 0)
            path5 = arguments[i];
          else {
            if (cwd === void 0)
              cwd = process.cwd();
            path5 = cwd;
          }
          assertPath(path5);
          if (path5.length === 0) {
            continue;
          }
          resolvedPath = path5 + "/" + resolvedPath;
          resolvedAbsolute = path5.charCodeAt(0) === 47;
        }
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return "/" + resolvedPath;
          else
            return "/";
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return ".";
        }
      },
      normalize: function normalize(path5) {
        assertPath(path5);
        if (path5.length === 0)
          return ".";
        var isAbsolute = path5.charCodeAt(0) === 47;
        var trailingSeparator = path5.charCodeAt(path5.length - 1) === 47;
        path5 = normalizeStringPosix(path5, !isAbsolute);
        if (path5.length === 0 && !isAbsolute)
          path5 = ".";
        if (path5.length > 0 && trailingSeparator)
          path5 += "/";
        if (isAbsolute)
          return "/" + path5;
        return path5;
      },
      isAbsolute: function isAbsolute(path5) {
        assertPath(path5);
        return path5.length > 0 && path5.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0)
          return ".";
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === void 0)
              joined = arg;
            else
              joined += "/" + arg;
          }
        }
        if (joined === void 0)
          return ".";
        return posix.normalize(joined);
      },
      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to)
          return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to)
          return "";
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47)
            break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
          if (i === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i) === 47) {
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                return to.slice(toStart + i);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i) === 47) {
                lastCommonSep = i;
              } else if (i === 0) {
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47)
            lastCommonSep = i;
        }
        var out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0)
              out += "..";
            else
              out += "/..";
          }
        }
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47)
            ++toStart;
          return to.slice(toStart);
        }
      },
      _makeLong: function _makeLong(path5) {
        return path5;
      },
      dirname: function dirname(path5) {
        assertPath(path5);
        if (path5.length === 0)
          return ".";
        var code = path5.charCodeAt(0);
        var hasRoot = code === 47;
        var end = -1;
        var matchedSlash = true;
        for (var i = path5.length - 1; i >= 1; --i) {
          code = path5.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1)
          return hasRoot ? "/" : ".";
        if (hasRoot && end === 1)
          return "//";
        return path5.slice(0, end);
      },
      basename: function basename(path5, ext) {
        if (ext !== void 0 && typeof ext !== "string")
          throw new TypeError('"ext" argument must be a string');
        assertPath(path5);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path5.length) {
          if (ext.length === path5.length && ext === path5)
            return "";
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path5.length - 1; i >= 0; --i) {
            var code = path5.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end)
            end = firstNonSlashEnd;
          else if (end === -1)
            end = path5.length;
          return path5.slice(start, end);
        } else {
          for (i = path5.length - 1; i >= 0; --i) {
            if (path5.charCodeAt(i) === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
          }
          if (end === -1)
            return "";
          return path5.slice(start, end);
        }
      },
      extname: function extname(path5) {
        assertPath(path5);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var preDotState = 0;
        for (var i = path5.length - 1; i >= 0; --i) {
          var code = path5.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path5.slice(startDot, end);
      },
      format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
          throw new TypeError(
            'Parameter "pathObject" must be an object, not ' + typeof pathObject
          );
        }
        return _format("/", pathObject);
      },
      parse: function parse2(path5) {
        assertPath(path5);
        var ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path5.length === 0)
          return ret;
        var code = path5.charCodeAt(0);
        var isAbsolute = code === 47;
        var start;
        if (isAbsolute) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path5.length - 1;
        var preDotState = 0;
        for (; i >= start; --i) {
          code = path5.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute)
              ret.base = ret.name = path5.slice(1, end);
            else
              ret.base = ret.name = path5.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path5.slice(1, startDot);
            ret.base = path5.slice(1, end);
          } else {
            ret.name = path5.slice(startPart, startDot);
            ret.base = path5.slice(startPart, end);
          }
          ret.ext = path5.slice(startDot, end);
        }
        if (startPart > 0)
          ret.dir = path5.slice(0, startPart - 1);
        else if (isAbsolute)
          ret.dir = "/";
        return ret;
      },
      sep: "/",
      delimiter: ":",
      posix: null
    };
    module.exports = posix;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/path.js
var import_path_webpack, Path, path_default;
var init_path = __esm({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/path.js"() {
    import_path_webpack = __toESM(require_path());
    Path = class {
      constructor(pathString) {
        var protocol;
        var parsed;
        protocol = pathString.indexOf("://");
        if (protocol > -1) {
          pathString = new URL(pathString).pathname;
        }
        parsed = this.parse(pathString);
        this.path = pathString;
        if (this.isDirectory(pathString)) {
          this.directory = pathString;
        } else {
          this.directory = parsed.dir + "/";
        }
        this.filename = parsed.base;
        this.extension = parsed.ext.slice(1);
      }
      /**
       * Parse the path: https://nodejs.org/api/path.html#path_path_parse_path
       * @param	{string} what
       * @returns {object}
       */
      parse(what) {
        return import_path_webpack.default.parse(what);
      }
      /**
       * @param	{string} what
       * @returns {boolean}
       */
      isAbsolute(what) {
        return import_path_webpack.default.isAbsolute(what || this.path);
      }
      /**
       * Check if path ends with a directory
       * @param	{string} what
       * @returns {boolean}
       */
      isDirectory(what) {
        return what.charAt(what.length - 1) === "/";
      }
      /**
       * Resolve a path against the directory of the Path
       *
       * https://nodejs.org/api/path.html#path_path_resolve_paths
       * @param	{string} what
       * @returns {string} resolved
       */
      resolve(what) {
        return import_path_webpack.default.resolve(this.directory, what);
      }
      /**
       * Resolve a path relative to the directory of the Path
       *
       * https://nodejs.org/api/path.html#path_path_relative_from_to
       * @param	{string} what
       * @returns {string} relative
       */
      relative(what) {
        return import_path_webpack.default.relative(this.directory, what);
      }
      splitPath(filename) {
        return this.splitPathRe.exec(filename).slice(1);
      }
      /**
       * Return the path string
       * @returns {string} path
       */
      toString() {
        return this.path;
      }
    };
    path_default = Path;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/request.js
var request_exports = {};
__export(request_exports, {
  default: () => request_default
});
function request(url, type2, withCredentials, headers) {
  var supportsURL = typeof window != "undefined" ? window.URL : false;
  var BLOB_RESPONSE = supportsURL ? "blob" : "arraybuffer";
  var deferred = new defer();
  var xhr = new XMLHttpRequest();
  var xhrPrototype = XMLHttpRequest.prototype;
  var header;
  if (!("overrideMimeType" in xhrPrototype)) {
    Object.defineProperty(xhrPrototype, "overrideMimeType", {
      value: function xmlHttpRequestOverrideMimeType() {
      }
    });
  }
  if (withCredentials) {
    xhr.withCredentials = true;
  }
  xhr.onreadystatechange = handler;
  xhr.onerror = err;
  xhr.open("GET", url, true);
  for (header in headers) {
    xhr.setRequestHeader(header, headers[header]);
  }
  if (type2 == "json") {
    xhr.setRequestHeader("Accept", "application/json");
  }
  if (!type2) {
    type2 = new path_default(url).extension;
  }
  if (type2 == "blob") {
    xhr.responseType = BLOB_RESPONSE;
  }
  if (isXml(type2)) {
    xhr.overrideMimeType("text/xml");
  }
  if (type2 == "xhtml") {
  }
  if (type2 == "html" || type2 == "htm") {
  }
  if (type2 == "binary") {
    xhr.responseType = "arraybuffer";
  }
  xhr.send();
  function err(e) {
    deferred.reject(e);
  }
  function handler() {
    if (this.readyState === XMLHttpRequest.DONE) {
      var responseXML = false;
      if (this.responseType === "" || this.responseType === "document") {
        responseXML = this.responseXML;
      }
      if (this.status === 200 || this.status === 0 || responseXML) {
        var r;
        if (!this.response && !responseXML) {
          deferred.reject({
            status: this.status,
            message: "Empty Response",
            stack: new Error().stack
          });
          return deferred.promise;
        }
        if (this.status === 403) {
          deferred.reject({
            status: this.status,
            response: this.response,
            message: "Forbidden",
            stack: new Error().stack
          });
          return deferred.promise;
        }
        if (responseXML) {
          r = this.responseXML;
        } else if (isXml(type2)) {
          r = parse(this.response, "text/xml");
        } else if (type2 == "xhtml") {
          r = parse(this.response, "application/xhtml+xml");
        } else if (type2 == "html" || type2 == "htm") {
          r = parse(this.response, "text/html");
        } else if (type2 == "json") {
          r = JSON.parse(this.response);
        } else if (type2 == "blob") {
          if (supportsURL) {
            r = this.response;
          } else {
            r = new Blob([this.response]);
          }
        } else {
          r = this.response;
        }
        deferred.resolve(r);
      } else {
        deferred.reject({
          status: this.status,
          message: this.response,
          stack: new Error().stack
        });
      }
    }
  }
  return deferred.promise;
}
var request_default;
var init_request = __esm({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/request.js"() {
    init_core();
    init_path();
    request_default = request;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/libs/mime/mime.js
var require_mime = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/libs/mime/mime.js"(exports, module) {
    var table = {
      "application": {
        "ecmascript": ["es", "ecma"],
        "javascript": "js",
        "ogg": "ogx",
        "pdf": "pdf",
        "postscript": ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
        "rdf+xml": "rdf",
        "smil": ["smi", "smil"],
        "xhtml+xml": ["xhtml", "xht"],
        "xml": ["xml", "xsl", "xsd", "opf", "ncx"],
        "zip": "zip",
        "x-httpd-eruby": "rhtml",
        "x-latex": "latex",
        "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
        "x-object": "o",
        "x-shockwave-flash": ["swf", "swfl"],
        "x-silverlight": "scr",
        "epub+zip": "epub",
        "font-tdpfr": "pfr",
        "inkml+xml": ["ink", "inkml"],
        "json": "json",
        "jsonml+json": "jsonml",
        "mathml+xml": "mathml",
        "metalink+xml": "metalink",
        "mp4": "mp4s",
        // "oebps-package+xml" : "opf",
        "omdoc+xml": "omdoc",
        "oxps": "oxps",
        "vnd.amazon.ebook": "azw",
        "widget": "wgt",
        // "x-dtbncx+xml" : "ncx",
        "x-dtbook+xml": "dtb",
        "x-dtbresource+xml": "res",
        "x-font-bdf": "bdf",
        "x-font-ghostscript": "gsf",
        "x-font-linux-psf": "psf",
        "x-font-otf": "otf",
        "x-font-pcf": "pcf",
        "x-font-snf": "snf",
        "x-font-ttf": ["ttf", "ttc"],
        "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
        "x-font-woff": "woff",
        "x-mobipocket-ebook": ["prc", "mobi"],
        "x-mspublisher": "pub",
        "x-nzb": "nzb",
        "x-tgif": "obj",
        "xaml+xml": "xaml",
        "xml-dtd": "dtd",
        "xproc+xml": "xpl",
        "xslt+xml": "xslt",
        "internet-property-stream": "acx",
        "x-compress": "z",
        "x-compressed": "tgz",
        "x-gzip": "gz"
      },
      "audio": {
        "flac": "flac",
        "midi": ["mid", "midi", "kar", "rmi"],
        "mpeg": ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
        "mpegurl": "m3u",
        "ogg": ["oga", "ogg", "spx"],
        "x-aiff": ["aif", "aiff", "aifc"],
        "x-ms-wma": "wma",
        "x-wav": "wav",
        "adpcm": "adp",
        "mp4": "mp4a",
        "webm": "weba",
        "x-aac": "aac",
        "x-caf": "caf",
        "x-matroska": "mka",
        "x-pn-realaudio-plugin": "rmp",
        "xm": "xm",
        "mid": ["mid", "rmi"]
      },
      "image": {
        "gif": "gif",
        "ief": "ief",
        "jpeg": ["jpeg", "jpg", "jpe"],
        "pcx": "pcx",
        "png": "png",
        "svg+xml": ["svg", "svgz"],
        "tiff": ["tiff", "tif"],
        "x-icon": "ico",
        "bmp": "bmp",
        "webp": "webp",
        "x-pict": ["pic", "pct"],
        "x-tga": "tga",
        "cis-cod": "cod"
      },
      "text": {
        "cache-manifest": ["manifest", "appcache"],
        "css": "css",
        "csv": "csv",
        "html": ["html", "htm", "shtml", "stm"],
        "mathml": "mml",
        "plain": ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
        "richtext": "rtx",
        "tab-separated-values": "tsv",
        "x-bibtex": "bib"
      },
      "video": {
        "mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
        "mp4": ["mp4", "mp4v", "mpg4"],
        "quicktime": ["qt", "mov"],
        "ogg": "ogv",
        "vnd.mpegurl": ["mxu", "m4u"],
        "x-flv": "flv",
        "x-la-asf": ["lsf", "lsx"],
        "x-mng": "mng",
        "x-ms-asf": ["asf", "asx", "asr"],
        "x-ms-wm": "wm",
        "x-ms-wmv": "wmv",
        "x-ms-wmx": "wmx",
        "x-ms-wvx": "wvx",
        "x-msvideo": "avi",
        "x-sgi-movie": "movie",
        "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
        "3gpp2": "3g2",
        "h261": "h261",
        "h263": "h263",
        "h264": "h264",
        "jpeg": "jpgv",
        "jpm": ["jpm", "jpgm"],
        "mj2": ["mj2", "mjp2"],
        "vnd.ms-playready.media.pyv": "pyv",
        "vnd.uvvu.mp4": ["uvu", "uvvu"],
        "vnd.vivo": "viv",
        "webm": "webm",
        "x-f4v": "f4v",
        "x-m4v": "m4v",
        "x-ms-vob": "vob",
        "x-smv": "smv"
      }
    };
    var mimeTypes = function() {
      var type2, subtype, val, index, mimeTypes2 = {};
      for (type2 in table) {
        if (table.hasOwnProperty(type2)) {
          for (subtype in table[type2]) {
            if (table[type2].hasOwnProperty(subtype)) {
              val = table[type2][subtype];
              if (typeof val == "string") {
                mimeTypes2[val] = type2 + "/" + subtype;
              } else {
                for (index = 0; index < val.length; index++) {
                  mimeTypes2[val[index]] = type2 + "/" + subtype;
                }
              }
            }
          }
        }
      }
      return mimeTypes2;
    }();
    var defaultValue = "text/plain";
    function lookup(filename) {
      return filename && mimeTypes[filename.split(".").pop().toLowerCase()] || defaultValue;
    }
    module.exports = {
      "lookup": lookup
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/marks-pane@1.0.9/node_modules/marks-pane/lib/svg.js
var require_svg = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/marks-pane@1.0.9/node_modules/marks-pane/lib/svg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createElement = createElement;
    function createElement(name) {
      return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    exports.default = {
      createElement
    };
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/marks-pane@1.0.9/node_modules/marks-pane/lib/events.js
var require_events = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/marks-pane@1.0.9/node_modules/marks-pane/lib/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.proxyMouse = proxyMouse;
    exports.clone = clone;
    exports.default = {
      proxyMouse
    };
    function proxyMouse(target, tracked) {
      function dispatch(e) {
        for (var i = tracked.length - 1; i >= 0; i--) {
          var t = tracked[i];
          var x = e.clientX;
          var y = e.clientY;
          if (e.touches && e.touches.length) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
          }
          if (!contains(t, target, x, y)) {
            continue;
          }
          t.dispatchEvent(clone(e));
          break;
        }
      }
      if (target.nodeName === "iframe" || target.nodeName === "IFRAME") {
        try {
          this.target = target.contentDocument;
        } catch (err) {
          this.target = target;
        }
      } else {
        this.target = target;
      }
      var _arr = ["mouseup", "mousedown", "click", "touchstart"];
      for (var _i = 0; _i < _arr.length; _i++) {
        var ev = _arr[_i];
        this.target.addEventListener(ev, function(e) {
          return dispatch(e);
        }, false);
      }
    }
    function clone(e) {
      var opts = Object.assign({}, e, { bubbles: false });
      try {
        return new MouseEvent(e.type, opts);
      } catch (err) {
        var copy = document.createEvent("MouseEvents");
        copy.initMouseEvent(e.type, false, opts.cancelable, opts.view, opts.detail, opts.screenX, opts.screenY, opts.clientX, opts.clientY, opts.ctrlKey, opts.altKey, opts.shiftKey, opts.metaKey, opts.button, opts.relatedTarget);
        return copy;
      }
    }
    function contains(item, target, x, y) {
      var offset = target.getBoundingClientRect();
      function rectContains(r, x2, y2) {
        var top = r.top - offset.top;
        var left = r.left - offset.left;
        var bottom = top + r.height;
        var right = left + r.width;
        return top <= y2 && left <= x2 && bottom > y2 && right > x2;
      }
      var rect = item.getBoundingClientRect();
      if (!rectContains(rect, x, y)) {
        return false;
      }
      var rects = item.getClientRects();
      for (var i = 0, len = rects.length; i < len; i++) {
        if (rectContains(rects[i], x, y)) {
          return true;
        }
      }
      return false;
    }
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/marks-pane@1.0.9/node_modules/marks-pane/lib/marks.js
var require_marks = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/marks-pane@1.0.9/node_modules/marks-pane/lib/marks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Underline = exports.Highlight = exports.Mark = exports.Pane = void 0;
    var _get = function get(object, property, receiver) {
      if (object === null)
        object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === void 0) {
        var parent2 = Object.getPrototypeOf(object);
        if (parent2 === null) {
          return void 0;
        } else {
          return get(parent2, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === void 0) {
          return void 0;
        }
        return getter.call(receiver);
      }
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _svg = require_svg();
    var _svg2 = _interopRequireDefault(_svg);
    var _events = require_events();
    var _events2 = _interopRequireDefault(_events);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Pane2 = exports.Pane = function() {
      function Pane3(target) {
        var container = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.body;
        _classCallCheck(this, Pane3);
        this.target = target;
        this.element = _svg2.default.createElement("svg");
        this.marks = [];
        this.element.style.position = "absolute";
        this.element.setAttribute("pointer-events", "none");
        _events2.default.proxyMouse(this.target, this.marks);
        this.container = container;
        this.container.appendChild(this.element);
        this.render();
      }
      _createClass(Pane3, [{
        key: "addMark",
        value: function addMark(mark) {
          var g = _svg2.default.createElement("g");
          this.element.appendChild(g);
          mark.bind(g, this.container);
          this.marks.push(mark);
          mark.render();
          return mark;
        }
      }, {
        key: "removeMark",
        value: function removeMark(mark) {
          var idx = this.marks.indexOf(mark);
          if (idx === -1) {
            return;
          }
          var el = mark.unbind();
          this.element.removeChild(el);
          this.marks.splice(idx, 1);
        }
      }, {
        key: "render",
        value: function render() {
          setCoords(this.element, coords(this.target, this.container));
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (var _iterator = this.marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var m = _step.value;
              m.render();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }]);
      return Pane3;
    }();
    var Mark = exports.Mark = function() {
      function Mark2() {
        _classCallCheck(this, Mark2);
        this.element = null;
      }
      _createClass(Mark2, [{
        key: "bind",
        value: function bind(element, container) {
          this.element = element;
          this.container = container;
        }
      }, {
        key: "unbind",
        value: function unbind() {
          var el = this.element;
          this.element = null;
          return el;
        }
      }, {
        key: "render",
        value: function render() {
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(e) {
          if (!this.element)
            return;
          this.element.dispatchEvent(e);
        }
      }, {
        key: "getBoundingClientRect",
        value: function getBoundingClientRect() {
          return this.element.getBoundingClientRect();
        }
      }, {
        key: "getClientRects",
        value: function getClientRects() {
          var rects = [];
          var el = this.element.firstChild;
          while (el) {
            rects.push(el.getBoundingClientRect());
            el = el.nextSibling;
          }
          return rects;
        }
      }, {
        key: "filteredRanges",
        value: function filteredRanges() {
          var rects = Array.from(this.range.getClientRects());
          return rects.filter(function(box) {
            for (var i = 0; i < rects.length; i++) {
              if (rects[i] === box) {
                return true;
              }
              var contained = contains(rects[i], box);
              if (contained) {
                return false;
              }
            }
            return true;
          });
        }
      }]);
      return Mark2;
    }();
    var Highlight2 = exports.Highlight = function(_Mark) {
      _inherits(Highlight3, _Mark);
      function Highlight3(range, className, data, attributes) {
        _classCallCheck(this, Highlight3);
        var _this = _possibleConstructorReturn(this, (Highlight3.__proto__ || Object.getPrototypeOf(Highlight3)).call(this));
        _this.range = range;
        _this.className = className;
        _this.data = data || {};
        _this.attributes = attributes || {};
        return _this;
      }
      _createClass(Highlight3, [{
        key: "bind",
        value: function bind(element, container) {
          _get(Highlight3.prototype.__proto__ || Object.getPrototypeOf(Highlight3.prototype), "bind", this).call(this, element, container);
          for (var attr in this.data) {
            if (this.data.hasOwnProperty(attr)) {
              this.element.dataset[attr] = this.data[attr];
            }
          }
          for (var attr in this.attributes) {
            if (this.attributes.hasOwnProperty(attr)) {
              this.element.setAttribute(attr, this.attributes[attr]);
            }
          }
          if (this.className) {
            this.element.classList.add(this.className);
          }
        }
      }, {
        key: "render",
        value: function render() {
          while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
          }
          var docFrag = this.element.ownerDocument.createDocumentFragment();
          var filtered = this.filteredRanges();
          var offset = this.element.getBoundingClientRect();
          var container = this.container.getBoundingClientRect();
          for (var i = 0, len = filtered.length; i < len; i++) {
            var r = filtered[i];
            var el = _svg2.default.createElement("rect");
            el.setAttribute("x", r.left - offset.left + container.left);
            el.setAttribute("y", r.top - offset.top + container.top);
            el.setAttribute("height", r.height);
            el.setAttribute("width", r.width);
            docFrag.appendChild(el);
          }
          this.element.appendChild(docFrag);
        }
      }]);
      return Highlight3;
    }(Mark);
    var Underline2 = exports.Underline = function(_Highlight) {
      _inherits(Underline3, _Highlight);
      function Underline3(range, className, data, attributes) {
        _classCallCheck(this, Underline3);
        return _possibleConstructorReturn(this, (Underline3.__proto__ || Object.getPrototypeOf(Underline3)).call(this, range, className, data, attributes));
      }
      _createClass(Underline3, [{
        key: "render",
        value: function render() {
          while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
          }
          var docFrag = this.element.ownerDocument.createDocumentFragment();
          var filtered = this.filteredRanges();
          var offset = this.element.getBoundingClientRect();
          var container = this.container.getBoundingClientRect();
          for (var i = 0, len = filtered.length; i < len; i++) {
            var r = filtered[i];
            var rect = _svg2.default.createElement("rect");
            rect.setAttribute("x", r.left - offset.left + container.left);
            rect.setAttribute("y", r.top - offset.top + container.top);
            rect.setAttribute("height", r.height);
            rect.setAttribute("width", r.width);
            rect.setAttribute("fill", "none");
            var line = _svg2.default.createElement("line");
            line.setAttribute("x1", r.left - offset.left + container.left);
            line.setAttribute("x2", r.left - offset.left + container.left + r.width);
            line.setAttribute("y1", r.top - offset.top + container.top + r.height - 1);
            line.setAttribute("y2", r.top - offset.top + container.top + r.height - 1);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke", "black");
            line.setAttribute("stroke-linecap", "square");
            docFrag.appendChild(rect);
            docFrag.appendChild(line);
          }
          this.element.appendChild(docFrag);
        }
      }]);
      return Underline3;
    }(Highlight2);
    function coords(el, container) {
      var offset = container.getBoundingClientRect();
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top - offset.top,
        left: rect.left - offset.left,
        height: el.scrollHeight,
        width: el.scrollWidth
      };
    }
    function setCoords(el, coords2) {
      el.style.setProperty("top", coords2.top + "px", "important");
      el.style.setProperty("left", coords2.left + "px", "important");
      el.style.setProperty("height", coords2.height + "px", "important");
      el.style.setProperty("width", coords2.width + "px", "important");
    }
    function contains(rect1, rect2) {
      return rect2.right <= rect1.right && rect2.left >= rect1.left && rect2.top >= rect1.top && rect2.bottom <= rect1.bottom;
    }
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type2 = typeof value;
      return value != null && (type2 == "object" || type2 == "function");
    }
    module.exports = isObject;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js
var require_now = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js"(exports, module) {
    var debounce2 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/libs/url/url-polyfill.js
var require_url_polyfill = __commonJS({
  "../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/libs/url/url-polyfill.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (!root) {
        root = window || global;
      }
      if (typeof module === "object" && module.exports) {
        module.exports = factory(root);
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.URL = factory(root);
      }
    })(exports, function(scope) {
      var hasWorkingUrl = false;
      if (!scope.forceJURL) {
        try {
          var u = new URL("b", "http://a");
          u.pathname = "c%20d";
          hasWorkingUrl = u.href === "http://a/c%20d";
        } catch (e) {
        }
      }
      if (hasWorkingUrl)
        return scope.URL;
      var relative = /* @__PURE__ */ Object.create(null);
      relative["ftp"] = 21;
      relative["file"] = 0;
      relative["gopher"] = 70;
      relative["http"] = 80;
      relative["https"] = 443;
      relative["ws"] = 80;
      relative["wss"] = 443;
      var relativePathDotMapping = /* @__PURE__ */ Object.create(null);
      relativePathDotMapping["%2e"] = ".";
      relativePathDotMapping[".%2e"] = "..";
      relativePathDotMapping["%2e."] = "..";
      relativePathDotMapping["%2e%2e"] = "..";
      function isRelativeScheme(scheme) {
        return relative[scheme] !== void 0;
      }
      function invalid() {
        clear.call(this);
        this._isInvalid = true;
      }
      function IDNAToASCII(h) {
        if ("" == h) {
          invalid.call(this);
        }
        return h.toLowerCase();
      }
      function percentEscape(c) {
        var unicode = c.charCodeAt(0);
        if (unicode > 32 && unicode < 127 && // " # < > ? `
        [34, 35, 60, 62, 63, 96].indexOf(unicode) == -1) {
          return c;
        }
        return encodeURIComponent(c);
      }
      function percentEscapeQuery(c) {
        var unicode = c.charCodeAt(0);
        if (unicode > 32 && unicode < 127 && // " # < > ` (do not escape '?')
        [34, 35, 60, 62, 96].indexOf(unicode) == -1) {
          return c;
        }
        return encodeURIComponent(c);
      }
      var EOF = void 0, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
      function parse2(input, stateOverride, base) {
        function err(message) {
          errors.push(message);
        }
        var state = stateOverride || "scheme start", cursor = 0, buffer = "", seenAt = false, seenBracket = false, errors = [];
        loop:
          while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
            var c = input[cursor];
            switch (state) {
              case "scheme start":
                if (c && ALPHA.test(c)) {
                  buffer += c.toLowerCase();
                  state = "scheme";
                } else if (!stateOverride) {
                  buffer = "";
                  state = "no scheme";
                  continue;
                } else {
                  err("Invalid scheme.");
                  break loop;
                }
                break;
              case "scheme":
                if (c && ALPHANUMERIC.test(c)) {
                  buffer += c.toLowerCase();
                } else if (":" == c) {
                  this._scheme = buffer;
                  buffer = "";
                  if (stateOverride) {
                    break loop;
                  }
                  if (isRelativeScheme(this._scheme)) {
                    this._isRelative = true;
                  }
                  if ("file" == this._scheme) {
                    state = "relative";
                  } else if (this._isRelative && base && base._scheme == this._scheme) {
                    state = "relative or authority";
                  } else if (this._isRelative) {
                    state = "authority first slash";
                  } else {
                    state = "scheme data";
                  }
                } else if (!stateOverride) {
                  buffer = "";
                  cursor = 0;
                  state = "no scheme";
                  continue;
                } else if (EOF == c) {
                  break loop;
                } else {
                  err("Code point not allowed in scheme: " + c);
                  break loop;
                }
                break;
              case "scheme data":
                if ("?" == c) {
                  this._query = "?";
                  state = "query";
                } else if ("#" == c) {
                  this._fragment = "#";
                  state = "fragment";
                } else {
                  if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
                    this._schemeData += percentEscape(c);
                  }
                }
                break;
              case "no scheme":
                if (!base || !isRelativeScheme(base._scheme)) {
                  err("Missing scheme.");
                  invalid.call(this);
                } else {
                  state = "relative";
                  continue;
                }
                break;
              case "relative or authority":
                if ("/" == c && "/" == input[cursor + 1]) {
                  state = "authority ignore slashes";
                } else {
                  err("Expected /, got: " + c);
                  state = "relative";
                  continue;
                }
                break;
              case "relative":
                this._isRelative = true;
                if ("file" != this._scheme)
                  this._scheme = base._scheme;
                if (EOF == c) {
                  this._host = base._host;
                  this._port = base._port;
                  this._path = base._path.slice();
                  this._query = base._query;
                  this._username = base._username;
                  this._password = base._password;
                  break loop;
                } else if ("/" == c || "\\" == c) {
                  if ("\\" == c)
                    err("\\ is an invalid code point.");
                  state = "relative slash";
                } else if ("?" == c) {
                  this._host = base._host;
                  this._port = base._port;
                  this._path = base._path.slice();
                  this._query = "?";
                  this._username = base._username;
                  this._password = base._password;
                  state = "query";
                } else if ("#" == c) {
                  this._host = base._host;
                  this._port = base._port;
                  this._path = base._path.slice();
                  this._query = base._query;
                  this._fragment = "#";
                  this._username = base._username;
                  this._password = base._password;
                  state = "fragment";
                } else {
                  var nextC = input[cursor + 1];
                  var nextNextC = input[cursor + 2];
                  if ("file" != this._scheme || !ALPHA.test(c) || nextC != ":" && nextC != "|" || EOF != nextNextC && "/" != nextNextC && "\\" != nextNextC && "?" != nextNextC && "#" != nextNextC) {
                    this._host = base._host;
                    this._port = base._port;
                    this._username = base._username;
                    this._password = base._password;
                    this._path = base._path.slice();
                    this._path.pop();
                  }
                  state = "relative path";
                  continue;
                }
                break;
              case "relative slash":
                if ("/" == c || "\\" == c) {
                  if ("\\" == c) {
                    err("\\ is an invalid code point.");
                  }
                  if ("file" == this._scheme) {
                    state = "file host";
                  } else {
                    state = "authority ignore slashes";
                  }
                } else {
                  if ("file" != this._scheme) {
                    this._host = base._host;
                    this._port = base._port;
                    this._username = base._username;
                    this._password = base._password;
                  }
                  state = "relative path";
                  continue;
                }
                break;
              case "authority first slash":
                if ("/" == c) {
                  state = "authority second slash";
                } else {
                  err("Expected '/', got: " + c);
                  state = "authority ignore slashes";
                  continue;
                }
                break;
              case "authority second slash":
                state = "authority ignore slashes";
                if ("/" != c) {
                  err("Expected '/', got: " + c);
                  continue;
                }
                break;
              case "authority ignore slashes":
                if ("/" != c && "\\" != c) {
                  state = "authority";
                  continue;
                } else {
                  err("Expected authority, got: " + c);
                }
                break;
              case "authority":
                if ("@" == c) {
                  if (seenAt) {
                    err("@ already seen.");
                    buffer += "%40";
                  }
                  seenAt = true;
                  for (var i = 0; i < buffer.length; i++) {
                    var cp = buffer[i];
                    if ("	" == cp || "\n" == cp || "\r" == cp) {
                      err("Invalid whitespace in authority.");
                      continue;
                    }
                    if (":" == cp && null === this._password) {
                      this._password = "";
                      continue;
                    }
                    var tempC = percentEscape(cp);
                    null !== this._password ? this._password += tempC : this._username += tempC;
                  }
                  buffer = "";
                } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
                  cursor -= buffer.length;
                  buffer = "";
                  state = "host";
                  continue;
                } else {
                  buffer += c;
                }
                break;
              case "file host":
                if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
                  if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ":" || buffer[1] == "|")) {
                    state = "relative path";
                  } else if (buffer.length == 0) {
                    state = "relative path start";
                  } else {
                    this._host = IDNAToASCII.call(this, buffer);
                    buffer = "";
                    state = "relative path start";
                  }
                  continue;
                } else if ("	" == c || "\n" == c || "\r" == c) {
                  err("Invalid whitespace in file host.");
                } else {
                  buffer += c;
                }
                break;
              case "host":
              case "hostname":
                if (":" == c && !seenBracket) {
                  this._host = IDNAToASCII.call(this, buffer);
                  buffer = "";
                  state = "port";
                  if ("hostname" == stateOverride) {
                    break loop;
                  }
                } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
                  this._host = IDNAToASCII.call(this, buffer);
                  buffer = "";
                  state = "relative path start";
                  if (stateOverride) {
                    break loop;
                  }
                  continue;
                } else if ("	" != c && "\n" != c && "\r" != c) {
                  if ("[" == c) {
                    seenBracket = true;
                  } else if ("]" == c) {
                    seenBracket = false;
                  }
                  buffer += c;
                } else {
                  err("Invalid code point in host/hostname: " + c);
                }
                break;
              case "port":
                if (/[0-9]/.test(c)) {
                  buffer += c;
                } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c || stateOverride) {
                  if ("" != buffer) {
                    var temp = parseInt(buffer, 10);
                    if (temp != relative[this._scheme]) {
                      this._port = temp + "";
                    }
                    buffer = "";
                  }
                  if (stateOverride) {
                    break loop;
                  }
                  state = "relative path start";
                  continue;
                } else if ("	" == c || "\n" == c || "\r" == c) {
                  err("Invalid code point in port: " + c);
                } else {
                  invalid.call(this);
                }
                break;
              case "relative path start":
                if ("\\" == c)
                  err("'\\' not allowed in path.");
                state = "relative path";
                if ("/" != c && "\\" != c) {
                  continue;
                }
                break;
              case "relative path":
                if (EOF == c || "/" == c || "\\" == c || !stateOverride && ("?" == c || "#" == c)) {
                  if ("\\" == c) {
                    err("\\ not allowed in relative path.");
                  }
                  var tmp;
                  if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
                    buffer = tmp;
                  }
                  if (".." == buffer) {
                    this._path.pop();
                    if ("/" != c && "\\" != c) {
                      this._path.push("");
                    }
                  } else if ("." == buffer && "/" != c && "\\" != c) {
                    this._path.push("");
                  } else if ("." != buffer) {
                    if ("file" == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == "|") {
                      buffer = buffer[0] + ":";
                    }
                    this._path.push(buffer);
                  }
                  buffer = "";
                  if ("?" == c) {
                    this._query = "?";
                    state = "query";
                  } else if ("#" == c) {
                    this._fragment = "#";
                    state = "fragment";
                  }
                } else if ("	" != c && "\n" != c && "\r" != c) {
                  buffer += percentEscape(c);
                }
                break;
              case "query":
                if (!stateOverride && "#" == c) {
                  this._fragment = "#";
                  state = "fragment";
                } else if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
                  this._query += percentEscapeQuery(c);
                }
                break;
              case "fragment":
                if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
                  this._fragment += c;
                }
                break;
            }
            cursor++;
          }
      }
      function clear() {
        this._scheme = "";
        this._schemeData = "";
        this._username = "";
        this._password = null;
        this._host = "";
        this._port = "";
        this._path = [];
        this._query = "";
        this._fragment = "";
        this._isInvalid = false;
        this._isRelative = false;
      }
      function jURL(url, base) {
        if (base !== void 0 && !(base instanceof jURL))
          base = new jURL(String(base));
        this._url = url;
        clear.call(this);
        var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
        parse2.call(this, input, null, base);
      }
      jURL.prototype = {
        toString: function() {
          return this.href;
        },
        get href() {
          if (this._isInvalid)
            return this._url;
          var authority = "";
          if ("" != this._username || null != this._password) {
            authority = this._username + (null != this._password ? ":" + this._password : "") + "@";
          }
          return this.protocol + (this._isRelative ? "//" + authority + this.host : "") + this.pathname + this._query + this._fragment;
        },
        set href(href) {
          clear.call(this);
          parse2.call(this, href);
        },
        get protocol() {
          return this._scheme + ":";
        },
        set protocol(protocol) {
          if (this._isInvalid)
            return;
          parse2.call(this, protocol + ":", "scheme start");
        },
        get host() {
          return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
        },
        set host(host) {
          if (this._isInvalid || !this._isRelative)
            return;
          parse2.call(this, host, "host");
        },
        get hostname() {
          return this._host;
        },
        set hostname(hostname) {
          if (this._isInvalid || !this._isRelative)
            return;
          parse2.call(this, hostname, "hostname");
        },
        get port() {
          return this._port;
        },
        set port(port) {
          if (this._isInvalid || !this._isRelative)
            return;
          parse2.call(this, port, "port");
        },
        get pathname() {
          return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
        },
        set pathname(pathname) {
          if (this._isInvalid || !this._isRelative)
            return;
          this._path = [];
          parse2.call(this, pathname, "relative path start");
        },
        get search() {
          return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
        },
        set search(search) {
          if (this._isInvalid || !this._isRelative)
            return;
          this._query = "?";
          if ("?" == search[0])
            search = search.slice(1);
          parse2.call(this, search, "query");
        },
        get hash() {
          return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
        },
        set hash(hash) {
          if (this._isInvalid)
            return;
          this._fragment = "#";
          if ("#" == hash[0])
            hash = hash.slice(1);
          parse2.call(this, hash, "fragment");
        },
        get origin() {
          var host;
          if (this._isInvalid || !this._scheme) {
            return "";
          }
          switch (this._scheme) {
            case "file":
              return "file://";
            case "data":
            case "javascript":
            case "mailto":
              return "null";
          }
          host = this.host;
          if (!host) {
            return "";
          }
          return this._scheme + "://" + host;
        }
      };
      var OriginalURL = scope.URL;
      if (OriginalURL) {
        jURL.createObjectURL = function(blob) {
          return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
        };
        jURL.revokeObjectURL = function(url) {
          OriginalURL.revokeObjectURL(url);
        };
      }
      return jURL;
    });
  }
});

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/book.js
var import_event_emitter8 = __toESM(require_event_emitter());
init_core();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/url.js
init_path();
var import_path_webpack2 = __toESM(require_path());
var Url = class {
  constructor(urlString, baseString) {
    var absolute = urlString.indexOf("://") > -1;
    var pathname = urlString;
    var basePath;
    this.Url = void 0;
    this.href = urlString;
    this.protocol = "";
    this.origin = "";
    this.hash = "";
    this.hash = "";
    this.search = "";
    this.base = baseString;
    if (!absolute && baseString !== false && typeof baseString !== "string" && window && window.location) {
      this.base = window.location.href;
    }
    if (absolute || this.base) {
      try {
        if (this.base) {
          this.Url = new URL(urlString, this.base);
        } else {
          this.Url = new URL(urlString);
        }
        this.href = this.Url.href;
        this.protocol = this.Url.protocol;
        this.origin = this.Url.origin;
        this.hash = this.Url.hash;
        this.search = this.Url.search;
        pathname = this.Url.pathname;
      } catch (e) {
        this.Url = void 0;
        if (this.base) {
          basePath = new path_default(this.base);
          pathname = basePath.resolve(pathname);
        }
      }
    }
    this.Path = new path_default(pathname);
    this.directory = this.Path.directory;
    this.filename = this.Path.filename;
    this.extension = this.Path.extension;
  }
  /**
   * @returns {Path}
   */
  path() {
    return this.Path;
  }
  /**
   * Resolves a relative path to a absolute url
   * @param {string} what
   * @returns {string} url
   */
  resolve(what) {
    var isAbsolute = what.indexOf("://") > -1;
    var fullpath;
    if (isAbsolute) {
      return what;
    }
    fullpath = import_path_webpack2.default.resolve(this.directory, what);
    return this.origin + fullpath;
  }
  /**
   * Resolve a path relative to the url
   * @param {string} what
   * @returns {string} path
   */
  relative(what) {
    return import_path_webpack2.default.relative(what, this.directory);
  }
  /**
   * @returns {string}
   */
  toString() {
    return this.href;
  }
};
var url_default = Url;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/book.js
init_path();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/epubcfi.js
init_core();
var ELEMENT_NODE2 = 1;
var TEXT_NODE2 = 3;
var DOCUMENT_NODE = 9;
var EpubCFI = class _EpubCFI {
  constructor(cfiFrom, base, ignoreClass) {
    var type2;
    this.str = "";
    this.base = {};
    this.spinePos = 0;
    this.range = false;
    this.path = {};
    this.start = null;
    this.end = null;
    if (!(this instanceof _EpubCFI)) {
      return new _EpubCFI(cfiFrom, base, ignoreClass);
    }
    if (typeof base === "string") {
      this.base = this.parseComponent(base);
    } else if (typeof base === "object" && base.steps) {
      this.base = base;
    }
    type2 = this.checkType(cfiFrom);
    if (type2 === "string") {
      this.str = cfiFrom;
      return extend(this, this.parse(cfiFrom));
    } else if (type2 === "range") {
      return extend(this, this.fromRange(cfiFrom, this.base, ignoreClass));
    } else if (type2 === "node") {
      return extend(this, this.fromNode(cfiFrom, this.base, ignoreClass));
    } else if (type2 === "EpubCFI" && cfiFrom.path) {
      return cfiFrom;
    } else if (!cfiFrom) {
      return this;
    } else {
      throw new TypeError("not a valid argument for EpubCFI");
    }
  }
  /**
   * Check the type of constructor input
   * @private
   */
  checkType(cfi) {
    if (this.isCfiString(cfi)) {
      return "string";
    } else if (typeof cfi === "object" && (type(cfi) === "Range" || typeof cfi.startContainer != "undefined")) {
      return "range";
    } else if (typeof cfi === "object" && typeof cfi.nodeType != "undefined") {
      return "node";
    } else if (typeof cfi === "object" && cfi instanceof _EpubCFI) {
      return "EpubCFI";
    } else {
      return false;
    }
  }
  /**
   * Parse a cfi string to a CFI object representation
   * @param {string} cfiStr
   * @returns {object} cfi
   */
  parse(cfiStr) {
    var cfi = {
      spinePos: -1,
      range: false,
      base: {},
      path: {},
      start: null,
      end: null
    };
    var baseComponent, pathComponent, range;
    if (typeof cfiStr !== "string") {
      return { spinePos: -1 };
    }
    if (cfiStr.indexOf("epubcfi(") === 0 && cfiStr[cfiStr.length - 1] === ")") {
      cfiStr = cfiStr.slice(8, cfiStr.length - 1);
    }
    baseComponent = this.getChapterComponent(cfiStr);
    if (!baseComponent) {
      return { spinePos: -1 };
    }
    cfi.base = this.parseComponent(baseComponent);
    pathComponent = this.getPathComponent(cfiStr);
    cfi.path = this.parseComponent(pathComponent);
    range = this.getRange(cfiStr);
    if (range) {
      cfi.range = true;
      cfi.start = this.parseComponent(range[0]);
      cfi.end = this.parseComponent(range[1]);
    }
    cfi.spinePos = cfi.base.steps[1].index;
    return cfi;
  }
  parseComponent(componentStr) {
    var component = {
      steps: [],
      terminal: {
        offset: null,
        assertion: null
      }
    };
    var parts = componentStr.split(":");
    var steps = parts[0].split("/");
    var terminal;
    if (parts.length > 1) {
      terminal = parts[1];
      component.terminal = this.parseTerminal(terminal);
    }
    if (steps[0] === "") {
      steps.shift();
    }
    component.steps = steps.map((function(step) {
      return this.parseStep(step);
    }).bind(this));
    return component;
  }
  parseStep(stepStr) {
    var type2, num, index, has_brackets, id;
    has_brackets = stepStr.match(/\[(.*)\]/);
    if (has_brackets && has_brackets[1]) {
      id = has_brackets[1];
    }
    num = parseInt(stepStr);
    if (isNaN(num)) {
      return;
    }
    if (num % 2 === 0) {
      type2 = "element";
      index = num / 2 - 1;
    } else {
      type2 = "text";
      index = (num - 1) / 2;
    }
    return {
      "type": type2,
      "index": index,
      "id": id || null
    };
  }
  parseTerminal(termialStr) {
    var characterOffset, textLocationAssertion;
    var assertion = termialStr.match(/\[(.*)\]/);
    if (assertion && assertion[1]) {
      characterOffset = parseInt(termialStr.split("[")[0]);
      textLocationAssertion = assertion[1];
    } else {
      characterOffset = parseInt(termialStr);
    }
    if (!isNumber(characterOffset)) {
      characterOffset = null;
    }
    return {
      "offset": characterOffset,
      "assertion": textLocationAssertion
    };
  }
  getChapterComponent(cfiStr) {
    var indirection = cfiStr.split("!");
    return indirection[0];
  }
  getPathComponent(cfiStr) {
    var indirection = cfiStr.split("!");
    if (indirection[1]) {
      let ranges = indirection[1].split(",");
      return ranges[0];
    }
  }
  getRange(cfiStr) {
    var ranges = cfiStr.split(",");
    if (ranges.length === 3) {
      return [
        ranges[1],
        ranges[2]
      ];
    }
    return false;
  }
  getCharecterOffsetComponent(cfiStr) {
    var splitStr = cfiStr.split(":");
    return splitStr[1] || "";
  }
  joinSteps(steps) {
    if (!steps) {
      return "";
    }
    return steps.map(function(part) {
      var segment = "";
      if (part.type === "element") {
        segment += (part.index + 1) * 2;
      }
      if (part.type === "text") {
        segment += 1 + 2 * part.index;
      }
      if (part.id) {
        segment += "[" + part.id + "]";
      }
      return segment;
    }).join("/");
  }
  segmentString(segment) {
    var segmentString = "/";
    segmentString += this.joinSteps(segment.steps);
    if (segment.terminal && segment.terminal.offset != null) {
      segmentString += ":" + segment.terminal.offset;
    }
    if (segment.terminal && segment.terminal.assertion != null) {
      segmentString += "[" + segment.terminal.assertion + "]";
    }
    return segmentString;
  }
  /**
   * Convert CFI to a epubcfi(...) string
   * @returns {string} epubcfi
   */
  toString() {
    var cfiString = "epubcfi(";
    cfiString += this.segmentString(this.base);
    cfiString += "!";
    cfiString += this.segmentString(this.path);
    if (this.range && this.start) {
      cfiString += ",";
      cfiString += this.segmentString(this.start);
    }
    if (this.range && this.end) {
      cfiString += ",";
      cfiString += this.segmentString(this.end);
    }
    cfiString += ")";
    return cfiString;
  }
  /**
   * Compare which of two CFIs is earlier in the text
   * @returns {number} First is earlier = 1, Second is earlier = -1, They are equal = 0
   */
  compare(cfiOne, cfiTwo) {
    var stepsA, stepsB;
    var terminalA, terminalB;
    var rangeAStartSteps, rangeAEndSteps;
    var rangeBEndSteps, rangeBEndSteps;
    var rangeAStartTerminal, rangeAEndTerminal;
    var rangeBStartTerminal, rangeBEndTerminal;
    if (typeof cfiOne === "string") {
      cfiOne = new _EpubCFI(cfiOne);
    }
    if (typeof cfiTwo === "string") {
      cfiTwo = new _EpubCFI(cfiTwo);
    }
    if (cfiOne.spinePos > cfiTwo.spinePos) {
      return 1;
    }
    if (cfiOne.spinePos < cfiTwo.spinePos) {
      return -1;
    }
    if (cfiOne.range) {
      stepsA = cfiOne.path.steps.concat(cfiOne.start.steps);
      terminalA = cfiOne.start.terminal;
    } else {
      stepsA = cfiOne.path.steps;
      terminalA = cfiOne.path.terminal;
    }
    if (cfiTwo.range) {
      stepsB = cfiTwo.path.steps.concat(cfiTwo.start.steps);
      terminalB = cfiTwo.start.terminal;
    } else {
      stepsB = cfiTwo.path.steps;
      terminalB = cfiTwo.path.terminal;
    }
    for (var i = 0; i < stepsA.length; i++) {
      if (!stepsA[i]) {
        return -1;
      }
      if (!stepsB[i]) {
        return 1;
      }
      if (stepsA[i].index > stepsB[i].index) {
        return 1;
      }
      if (stepsA[i].index < stepsB[i].index) {
        return -1;
      }
    }
    if (stepsA.length < stepsB.length) {
      return 1;
    }
    if (terminalA.offset > terminalB.offset) {
      return 1;
    }
    if (terminalA.offset < terminalB.offset) {
      return -1;
    }
    return 0;
  }
  step(node) {
    var nodeType = node.nodeType === TEXT_NODE2 ? "text" : "element";
    return {
      "id": node.id,
      "tagName": node.tagName,
      "type": nodeType,
      "index": this.position(node)
    };
  }
  filteredStep(node, ignoreClass) {
    var filteredNode = this.filter(node, ignoreClass);
    var nodeType;
    if (!filteredNode) {
      return;
    }
    nodeType = filteredNode.nodeType === TEXT_NODE2 ? "text" : "element";
    return {
      "id": filteredNode.id,
      "tagName": filteredNode.tagName,
      "type": nodeType,
      "index": this.filteredPosition(filteredNode, ignoreClass)
    };
  }
  pathTo(node, offset, ignoreClass) {
    var segment = {
      steps: [],
      terminal: {
        offset: null,
        assertion: null
      }
    };
    var currentNode = node;
    var step;
    while (currentNode && currentNode.parentNode && currentNode.parentNode.nodeType != DOCUMENT_NODE) {
      if (ignoreClass) {
        step = this.filteredStep(currentNode, ignoreClass);
      } else {
        step = this.step(currentNode);
      }
      if (step) {
        segment.steps.unshift(step);
      }
      currentNode = currentNode.parentNode;
    }
    if (offset != null && offset >= 0) {
      segment.terminal.offset = offset;
      if (segment.steps[segment.steps.length - 1].type != "text") {
        segment.steps.push({
          "type": "text",
          "index": 0
        });
      }
    }
    return segment;
  }
  equalStep(stepA, stepB) {
    if (!stepA || !stepB) {
      return false;
    }
    if (stepA.index === stepB.index && stepA.id === stepB.id && stepA.type === stepB.type) {
      return true;
    }
    return false;
  }
  /**
   * Create a CFI object from a Range
   * @param {Range} range
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */
  fromRange(range, base, ignoreClass) {
    var cfi = {
      range: false,
      base: {},
      path: {},
      start: null,
      end: null
    };
    var start = range.startContainer;
    var end = range.endContainer;
    var startOffset = range.startOffset;
    var endOffset = range.endOffset;
    var needsIgnoring = false;
    if (ignoreClass) {
      needsIgnoring = start.ownerDocument.querySelector("." + ignoreClass) != null;
    }
    if (typeof base === "string") {
      cfi.base = this.parseComponent(base);
      cfi.spinePos = cfi.base.steps[1].index;
    } else if (typeof base === "object") {
      cfi.base = base;
    }
    if (range.collapsed) {
      if (needsIgnoring) {
        startOffset = this.patchOffset(start, startOffset, ignoreClass);
      }
      cfi.path = this.pathTo(start, startOffset, ignoreClass);
    } else {
      cfi.range = true;
      if (needsIgnoring) {
        startOffset = this.patchOffset(start, startOffset, ignoreClass);
      }
      cfi.start = this.pathTo(start, startOffset, ignoreClass);
      if (needsIgnoring) {
        endOffset = this.patchOffset(end, endOffset, ignoreClass);
      }
      cfi.end = this.pathTo(end, endOffset, ignoreClass);
      cfi.path = {
        steps: [],
        terminal: null
      };
      var len = cfi.start.steps.length;
      var i;
      for (i = 0; i < len; i++) {
        if (this.equalStep(cfi.start.steps[i], cfi.end.steps[i])) {
          if (i === len - 1) {
            if (cfi.start.terminal === cfi.end.terminal) {
              cfi.path.steps.push(cfi.start.steps[i]);
              cfi.range = false;
            }
          } else {
            cfi.path.steps.push(cfi.start.steps[i]);
          }
        } else {
          break;
        }
      }
      cfi.start.steps = cfi.start.steps.slice(cfi.path.steps.length);
      cfi.end.steps = cfi.end.steps.slice(cfi.path.steps.length);
    }
    return cfi;
  }
  /**
   * Create a CFI object from a Node
   * @param {Node} anchor
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */
  fromNode(anchor, base, ignoreClass) {
    var cfi = {
      range: false,
      base: {},
      path: {},
      start: null,
      end: null
    };
    if (typeof base === "string") {
      cfi.base = this.parseComponent(base);
      cfi.spinePos = cfi.base.steps[1].index;
    } else if (typeof base === "object") {
      cfi.base = base;
    }
    cfi.path = this.pathTo(anchor, null, ignoreClass);
    return cfi;
  }
  filter(anchor, ignoreClass) {
    var needsIgnoring;
    var sibling;
    var parent2, previousSibling, nextSibling;
    var isText = false;
    if (anchor.nodeType === TEXT_NODE2) {
      isText = true;
      parent2 = anchor.parentNode;
      needsIgnoring = anchor.parentNode.classList.contains(ignoreClass);
    } else {
      isText = false;
      needsIgnoring = anchor.classList.contains(ignoreClass);
    }
    if (needsIgnoring && isText) {
      previousSibling = parent2.previousSibling;
      nextSibling = parent2.nextSibling;
      if (previousSibling && previousSibling.nodeType === TEXT_NODE2) {
        sibling = previousSibling;
      } else if (nextSibling && nextSibling.nodeType === TEXT_NODE2) {
        sibling = nextSibling;
      }
      if (sibling) {
        return sibling;
      } else {
        return anchor;
      }
    } else if (needsIgnoring && !isText) {
      return false;
    } else {
      return anchor;
    }
  }
  patchOffset(anchor, offset, ignoreClass) {
    if (anchor.nodeType != TEXT_NODE2) {
      throw new Error("Anchor must be a text node");
    }
    var curr = anchor;
    var totalOffset = offset;
    if (anchor.parentNode.classList.contains(ignoreClass)) {
      curr = anchor.parentNode;
    }
    while (curr.previousSibling) {
      if (curr.previousSibling.nodeType === ELEMENT_NODE2) {
        if (curr.previousSibling.classList.contains(ignoreClass)) {
          totalOffset += curr.previousSibling.textContent.length;
        } else {
          break;
        }
      } else {
        totalOffset += curr.previousSibling.textContent.length;
      }
      curr = curr.previousSibling;
    }
    return totalOffset;
  }
  normalizedMap(children, nodeType, ignoreClass) {
    var output = {};
    var prevIndex = -1;
    var i, len = children.length;
    var currNodeType;
    var prevNodeType;
    for (i = 0; i < len; i++) {
      currNodeType = children[i].nodeType;
      if (currNodeType === ELEMENT_NODE2 && children[i].classList.contains(ignoreClass)) {
        currNodeType = TEXT_NODE2;
      }
      if (i > 0 && currNodeType === TEXT_NODE2 && prevNodeType === TEXT_NODE2) {
        output[i] = prevIndex;
      } else if (nodeType === currNodeType) {
        prevIndex = prevIndex + 1;
        output[i] = prevIndex;
      }
      prevNodeType = currNodeType;
    }
    return output;
  }
  position(anchor) {
    var children, index;
    if (anchor.nodeType === ELEMENT_NODE2) {
      children = anchor.parentNode.children;
      if (!children) {
        children = findChildren(anchor.parentNode);
      }
      index = Array.prototype.indexOf.call(children, anchor);
    } else {
      children = this.textNodes(anchor.parentNode);
      index = children.indexOf(anchor);
    }
    return index;
  }
  filteredPosition(anchor, ignoreClass) {
    var children, index, map;
    if (anchor.nodeType === ELEMENT_NODE2) {
      children = anchor.parentNode.children;
      map = this.normalizedMap(children, ELEMENT_NODE2, ignoreClass);
    } else {
      children = anchor.parentNode.childNodes;
      if (anchor.parentNode.classList.contains(ignoreClass)) {
        anchor = anchor.parentNode;
        children = anchor.parentNode.childNodes;
      }
      map = this.normalizedMap(children, TEXT_NODE2, ignoreClass);
    }
    index = Array.prototype.indexOf.call(children, anchor);
    return map[index];
  }
  stepsToXpath(steps) {
    var xpath = [".", "*"];
    steps.forEach(function(step) {
      var position = step.index + 1;
      if (step.id) {
        xpath.push("*[position()=" + position + " and @id='" + step.id + "']");
      } else if (step.type === "text") {
        xpath.push("text()[" + position + "]");
      } else {
        xpath.push("*[" + position + "]");
      }
    });
    return xpath.join("/");
  }
  /*
  
  	To get the last step if needed:
  
  	// Get the terminal step
  	lastStep = steps[steps.length-1];
  	// Get the query string
  	query = this.stepsToQuery(steps);
  	// Find the containing element
  	startContainerParent = doc.querySelector(query);
  	// Find the text node within that element
  	if(startContainerParent && lastStep.type == "text") {
  		container = startContainerParent.childNodes[lastStep.index];
  	}
  	*/
  stepsToQuerySelector(steps) {
    var query = ["html"];
    steps.forEach(function(step) {
      var position = step.index + 1;
      if (step.id) {
        query.push("#" + step.id);
      } else if (step.type === "text") {
      } else {
        query.push("*:nth-child(" + position + ")");
      }
    });
    return query.join(">");
  }
  textNodes(container, ignoreClass) {
    return Array.prototype.slice.call(container.childNodes).filter(function(node) {
      if (node.nodeType === TEXT_NODE2) {
        return true;
      } else if (ignoreClass && node.classList.contains(ignoreClass)) {
        return true;
      }
      return false;
    });
  }
  walkToNode(steps, _doc, ignoreClass) {
    var doc = _doc || document;
    var container = doc.documentElement;
    var children;
    var step;
    var len = steps.length;
    var i;
    for (i = 0; i < len; i++) {
      step = steps[i];
      if (step.type === "element") {
        if (step.id) {
          container = doc.getElementById(step.id);
        } else {
          children = container.children || findChildren(container);
          container = children[step.index];
        }
      } else if (step.type === "text") {
        container = this.textNodes(container, ignoreClass)[step.index];
      }
      if (!container) {
        break;
      }
    }
    return container;
  }
  findNode(steps, _doc, ignoreClass) {
    var doc = _doc || document;
    var container;
    var xpath;
    if (!ignoreClass && typeof doc.evaluate != "undefined") {
      xpath = this.stepsToXpath(steps);
      container = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } else if (ignoreClass) {
      container = this.walkToNode(steps, doc, ignoreClass);
    } else {
      container = this.walkToNode(steps, doc);
    }
    return container;
  }
  fixMiss(steps, offset, _doc, ignoreClass) {
    var container = this.findNode(steps.slice(0, -1), _doc, ignoreClass);
    var children = container.childNodes;
    var map = this.normalizedMap(children, TEXT_NODE2, ignoreClass);
    var child;
    var len;
    var lastStepIndex = steps[steps.length - 1].index;
    for (let childIndex in map) {
      if (!map.hasOwnProperty(childIndex))
        return;
      if (map[childIndex] === lastStepIndex) {
        child = children[childIndex];
        len = child.textContent.length;
        if (offset > len) {
          offset = offset - len;
        } else {
          if (child.nodeType === ELEMENT_NODE2) {
            container = child.childNodes[0];
          } else {
            container = child;
          }
          break;
        }
      }
    }
    return {
      container,
      offset
    };
  }
  /**
   * Creates a DOM range representing a CFI
   * @param {document} _doc document referenced in the base
   * @param {string} [ignoreClass]
   * @return {Range}
   */
  toRange(_doc, ignoreClass) {
    var doc = _doc || document;
    var range;
    var start, end, startContainer, endContainer;
    var cfi = this;
    var startSteps, endSteps;
    var needsIgnoring = ignoreClass ? doc.querySelector("." + ignoreClass) != null : false;
    var missed;
    if (typeof doc.createRange !== "undefined") {
      range = doc.createRange();
    } else {
      range = new RangeObject();
    }
    if (cfi.range) {
      start = cfi.start;
      startSteps = cfi.path.steps.concat(start.steps);
      startContainer = this.findNode(startSteps, doc, needsIgnoring ? ignoreClass : null);
      end = cfi.end;
      endSteps = cfi.path.steps.concat(end.steps);
      endContainer = this.findNode(endSteps, doc, needsIgnoring ? ignoreClass : null);
    } else {
      start = cfi.path;
      startSteps = cfi.path.steps;
      startContainer = this.findNode(cfi.path.steps, doc, needsIgnoring ? ignoreClass : null);
    }
    if (startContainer) {
      try {
        if (start.terminal.offset != null) {
          range.setStart(startContainer, start.terminal.offset);
        } else {
          range.setStart(startContainer, 0);
        }
      } catch (e) {
        missed = this.fixMiss(startSteps, start.terminal.offset, doc, needsIgnoring ? ignoreClass : null);
        range.setStart(missed.container, missed.offset);
      }
    } else {
      console.log("No startContainer found for", this.toString());
      return null;
    }
    if (endContainer) {
      try {
        if (end.terminal.offset != null) {
          range.setEnd(endContainer, end.terminal.offset);
        } else {
          range.setEnd(endContainer, 0);
        }
      } catch (e) {
        missed = this.fixMiss(endSteps, cfi.end.terminal.offset, doc, needsIgnoring ? ignoreClass : null);
        range.setEnd(missed.container, missed.offset);
      }
    }
    return range;
  }
  /**
   * Check if a string is wrapped with "epubcfi()"
   * @param {string} str
   * @returns {boolean}
   */
  isCfiString(str) {
    if (typeof str === "string" && str.indexOf("epubcfi(") === 0 && str[str.length - 1] === ")") {
      return true;
    }
    return false;
  }
  generateChapterComponent(_spineNodeIndex, _pos, id) {
    var pos = parseInt(_pos), spineNodeIndex = (_spineNodeIndex + 1) * 2, cfi = "/" + spineNodeIndex + "/";
    cfi += (pos + 1) * 2;
    if (id) {
      cfi += "[" + id + "]";
    }
    return cfi;
  }
  /**
   * Collapse a CFI Range to a single CFI Position
   * @param {boolean} [toStart=false]
   */
  collapse(toStart) {
    if (!this.range) {
      return;
    }
    this.range = false;
    if (toStart) {
      this.path.steps = this.path.steps.concat(this.start.steps);
      this.path.terminal = this.start.terminal;
    } else {
      this.path.steps = this.path.steps.concat(this.end.steps);
      this.path.terminal = this.end.terminal;
    }
  }
};
var epubcfi_default = EpubCFI;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/hook.js
var Hook = class {
  constructor(context) {
    this.context = context || this;
    this.hooks = [];
  }
  /**
   * Adds a function to be run before a hook completes
   * @example this.content.register(function(){...});
   */
  register() {
    for (var i = 0; i < arguments.length; ++i) {
      if (typeof arguments[i] === "function") {
        this.hooks.push(arguments[i]);
      } else {
        for (var j = 0; j < arguments[i].length; ++j) {
          this.hooks.push(arguments[i][j]);
        }
      }
    }
  }
  /**
   * Triggers a hook to run all functions
   * @example this.content.trigger(args).then(function(){...});
   */
  trigger() {
    var args = arguments;
    var context = this.context;
    var promises = [];
    this.hooks.forEach(function(task) {
      var executing = task.apply(context, args);
      if (executing && typeof executing["then"] === "function") {
        promises.push(executing);
      }
    });
    return Promise.all(promises);
  }
  // Adds a function to be run before a hook completes
  list() {
    return this.hooks;
  }
  clear() {
    return this.hooks = [];
  }
};
var hook_default = Hook;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/section.js
init_core();
init_core();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/replacements.js
init_core();
init_path();
function replaceBase(doc, section) {
  var base;
  var head;
  var url = section.url;
  var absolute = url.indexOf("://") > -1;
  if (!doc) {
    return;
  }
  head = qs(doc, "head");
  base = qs(head, "base");
  if (!base) {
    base = doc.createElement("base");
    head.insertBefore(base, head.firstChild);
  }
  if (!absolute && window && window.location) {
    url = window.location.origin + url;
  }
  base.setAttribute("href", url);
}
function replaceCanonical(doc, section) {
  var head;
  var link;
  var url = section.canonical;
  if (!doc) {
    return;
  }
  head = qs(doc, "head");
  link = qs(head, "link[rel='canonical']");
  if (link) {
    link.setAttribute("href", url);
  } else {
    link = doc.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", url);
    head.appendChild(link);
  }
}
function replaceMeta(doc, section) {
  var head;
  var meta;
  var id = section.idref;
  if (!doc) {
    return;
  }
  head = qs(doc, "head");
  meta = qs(head, "link[property='dc.identifier']");
  if (meta) {
    meta.setAttribute("content", id);
  } else {
    meta = doc.createElement("meta");
    meta.setAttribute("name", "dc.identifier");
    meta.setAttribute("content", id);
    head.appendChild(meta);
  }
}
function replaceLinks(contents, fn) {
  var links = contents.querySelectorAll("a[href]");
  if (!links.length) {
    return;
  }
  var base = qs(contents.ownerDocument, "base");
  var location = base ? base.getAttribute("href") : void 0;
  var replaceLink = (function(link) {
    var href = link.getAttribute("href");
    if (href.indexOf("mailto:") === 0) {
      return;
    }
    var absolute = href.indexOf("://") > -1;
    var linkUrl = new url_default(href, location);
    if (absolute) {
      link.setAttribute("target", "_blank");
    } else {
      link.onclick = function() {
        if (linkUrl && linkUrl.hash) {
          fn(linkUrl.Path.path + linkUrl.hash);
        } else if (linkUrl) {
          fn(linkUrl.Path.path);
        } else {
          fn(href);
        }
        return false;
      };
    }
  }).bind(this);
  for (var i = 0; i < links.length; i++) {
    replaceLink(links[i]);
  }
}
function substitute(content, urls, replacements) {
  urls.forEach(function(url, i) {
    if (url && replacements[i]) {
      content = content.replace(new RegExp(url, "g"), replacements[i]);
    }
  });
  return content;
}

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/section.js
var Section = class {
  constructor(item, hooks) {
    this.idref = item.idref;
    this.linear = item.linear === "yes";
    this.properties = item.properties;
    this.index = item.index;
    this.href = item.href;
    this.url = item.url;
    this.canonical = item.canonical;
    this.next = item.next;
    this.prev = item.prev;
    this.cfiBase = item.cfiBase;
    if (hooks) {
      this.hooks = hooks;
    } else {
      this.hooks = {};
      this.hooks.serialize = new hook_default(this);
      this.hooks.content = new hook_default(this);
    }
    this.document = void 0;
    this.contents = void 0;
    this.output = void 0;
  }
  /**
   * Load the section from its url
   * @param  {method} [_request] a request method to use for loading
   * @return {document} a promise with the xml document
   */
  load(_request) {
    var request2 = _request || this.request || (init_request(), __toCommonJS(request_exports));
    var loading = new defer();
    var loaded = loading.promise;
    if (this.contents) {
      loading.resolve(this.contents);
    } else {
      request2(this.url).then((function(xml) {
        this.document = xml;
        this.contents = xml.documentElement;
        return this.hooks.content.trigger(this.document, this);
      }).bind(this)).then((function() {
        loading.resolve(this.contents);
      }).bind(this)).catch(function(error) {
        loading.reject(error);
      });
    }
    return loaded;
  }
  /**
   * Adds a base tag for resolving urls in the section
   * @private
   */
  base() {
    return replaceBase(this.document, this);
  }
  /**
   * Render the contents of a section
   * @param  {method} [_request] a request method to use for loading
   * @return {string} output a serialized XML Document
   */
  render(_request) {
    var rendering = new defer();
    var rendered = rendering.promise;
    this.output;
    this.load(_request).then((function(contents) {
      var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
      var isIE = userAgent.indexOf("Trident") >= 0;
      var Serializer;
      if (typeof XMLSerializer === "undefined" || isIE) {
        Serializer = require_dom_parser().XMLSerializer;
      } else {
        Serializer = XMLSerializer;
      }
      var serializer = new Serializer();
      this.output = serializer.serializeToString(contents);
      return this.output;
    }).bind(this)).then((function() {
      return this.hooks.serialize.trigger(this.output, this);
    }).bind(this)).then((function() {
      rendering.resolve(this.output);
    }).bind(this)).catch(function(error) {
      rendering.reject(error);
    });
    return rendered;
  }
  /**
   * Find a string in a section
   * @param  {string} _query The query string to find
   * @return {object[]} A list of matches, with form {cfi, excerpt}
   */
  find(_query) {
    var section = this;
    var matches = [];
    var query = _query.toLowerCase();
    var find = function(node) {
      var text = node.textContent.toLowerCase();
      var range = section.document.createRange();
      var cfi;
      var pos;
      var last = -1;
      var excerpt;
      var limit = 150;
      while (pos != -1) {
        pos = text.indexOf(query, last + 1);
        if (pos != -1) {
          range = section.document.createRange();
          range.setStart(node, pos);
          range.setEnd(node, pos + query.length);
          cfi = section.cfiFromRange(range);
          if (node.textContent.length < limit) {
            excerpt = node.textContent;
          } else {
            excerpt = node.textContent.substring(pos - limit / 2, pos + limit / 2);
            excerpt = "..." + excerpt + "...";
          }
          matches.push({
            cfi,
            excerpt
          });
        }
        last = pos;
      }
    };
    sprint(section.document, function(node) {
      find(node);
    });
    return matches;
  }
  /**
  * Reconciles the current chapters layout properies with
  * the global layout properities.
  * @param {object} globalLayout  The global layout settings object, chapter properties string
  * @return {object} layoutProperties Object with layout properties
  */
  reconcileLayoutSettings(globalLayout) {
    var settings = {
      layout: globalLayout.layout,
      spread: globalLayout.spread,
      orientation: globalLayout.orientation
    };
    this.properties.forEach(function(prop) {
      var rendition = prop.replace("rendition:", "");
      var split = rendition.indexOf("-");
      var property, value;
      if (split != -1) {
        property = rendition.slice(0, split);
        value = rendition.slice(split + 1);
        settings[property] = value;
      }
    });
    return settings;
  }
  /**
   * Get a CFI from a Range in the Section
   * @param  {range} _range
   * @return {string} cfi an EpubCFI string
   */
  cfiFromRange(_range) {
    return new epubcfi_default(_range, this.cfiBase).toString();
  }
  /**
   * Get a CFI from an Element in the Section
   * @param  {element} el
   * @return {string} cfi an EpubCFI string
   */
  cfiFromElement(el) {
    return new epubcfi_default(el, this.cfiBase).toString();
  }
  /**
   * Unload the section document
   */
  unload() {
    this.document = void 0;
    this.contents = void 0;
    this.output = void 0;
  }
  destroy() {
    this.unload();
    this.hooks.serialize.clear();
    this.hooks.content.clear();
    this.hooks = void 0;
    this.idref = void 0;
    this.linear = void 0;
    this.properties = void 0;
    this.index = void 0;
    this.href = void 0;
    this.url = void 0;
    this.next = void 0;
    this.prev = void 0;
    this.cfiBase = void 0;
  }
};
var section_default = Section;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/spine.js
var Spine = class {
  constructor() {
    this.spineItems = [];
    this.spineByHref = {};
    this.spineById = {};
    this.hooks = {};
    this.hooks.serialize = new hook_default();
    this.hooks.content = new hook_default();
    this.hooks.content.register(replaceBase);
    this.hooks.content.register(replaceCanonical);
    this.hooks.content.register(replaceMeta);
    this.epubcfi = new epubcfi_default();
    this.loaded = false;
    this.items = void 0;
    this.manifest = void 0;
    this.spineNodeIndex = void 0;
    this.baseUrl = void 0;
    this.length = void 0;
  }
  /**
   * Unpack items from a opf into spine items
   * @param  {Packaging} _package
   * @param  {method} resolver URL resolver
   * @param  {method} canonical Resolve canonical url
   */
  unpack(_package, resolver, canonical) {
    this.items = _package.spine;
    this.manifest = _package.manifest;
    this.spineNodeIndex = _package.spineNodeIndex;
    this.baseUrl = _package.baseUrl || _package.basePath || "";
    this.length = this.items.length;
    this.items.forEach((item, index) => {
      var manifestItem = this.manifest[item.idref];
      var spineItem;
      item.index = index;
      item.cfiBase = this.epubcfi.generateChapterComponent(this.spineNodeIndex, item.index, item.idref);
      if (item.href) {
        item.url = resolver(item.href, true);
        item.canonical = canonical(item.href);
      }
      if (manifestItem) {
        item.href = manifestItem.href;
        item.url = resolver(item.href, true);
        item.canonical = canonical(item.href);
        if (manifestItem.properties.length) {
          item.properties.push.apply(item.properties, manifestItem.properties);
        }
      }
      if (item.linear === "yes") {
        item.prev = (function() {
          let prevIndex = item.index;
          while (prevIndex > 0) {
            let prev = this.get(prevIndex - 1);
            if (prev && prev.linear) {
              return prev;
            }
            prevIndex -= 1;
          }
          return;
        }).bind(this);
        item.next = (function() {
          let nextIndex = item.index;
          while (nextIndex < this.spineItems.length - 1) {
            let next = this.get(nextIndex + 1);
            if (next && next.linear) {
              return next;
            }
            nextIndex += 1;
          }
          return;
        }).bind(this);
      } else {
        item.prev = function() {
          return;
        };
        item.next = function() {
          return;
        };
      }
      spineItem = new section_default(item, this.hooks);
      this.append(spineItem);
    });
    this.loaded = true;
  }
  /**
   * Get an item from the spine
   * @param  {string|number} [target]
   * @return {Section} section
   * @example spine.get();
   * @example spine.get(1);
   * @example spine.get("chap1.html");
   * @example spine.get("#id1234");
   */
  get(target) {
    var index = 0;
    if (typeof target === "undefined") {
      while (index < this.spineItems.length) {
        let next = this.spineItems[index];
        if (next && next.linear) {
          break;
        }
        index += 1;
      }
    } else if (this.epubcfi.isCfiString(target)) {
      let cfi = new epubcfi_default(target);
      index = cfi.spinePos;
    } else if (typeof target === "number" || isNaN(target) === false) {
      index = target;
    } else if (typeof target === "string" && target.indexOf("#") === 0) {
      index = this.spineById[target.substring(1)];
    } else if (typeof target === "string") {
      target = target.split("#")[0];
      index = this.spineByHref[target] || this.spineByHref[encodeURI(target)];
    }
    return this.spineItems[index] || null;
  }
  /**
   * Append a Section to the Spine
   * @private
   * @param  {Section} section
   */
  append(section) {
    var index = this.spineItems.length;
    section.index = index;
    this.spineItems.push(section);
    this.spineByHref[decodeURI(section.href)] = index;
    this.spineByHref[encodeURI(section.href)] = index;
    this.spineByHref[section.href] = index;
    this.spineById[section.idref] = index;
    return index;
  }
  /**
   * Prepend a Section to the Spine
   * @private
   * @param  {Section} section
   */
  prepend(section) {
    this.spineByHref[section.href] = 0;
    this.spineById[section.idref] = 0;
    this.spineItems.forEach(function(item, index) {
      item.index = index;
    });
    return 0;
  }
  // insert(section, index) {
  //
  // };
  /**
   * Remove a Section from the Spine
   * @private
   * @param  {Section} section
   */
  remove(section) {
    var index = this.spineItems.indexOf(section);
    if (index > -1) {
      delete this.spineByHref[section.href];
      delete this.spineById[section.idref];
      return this.spineItems.splice(index, 1);
    }
  }
  /**
   * Loop over the Sections in the Spine
   * @return {method} forEach
   */
  each() {
    return this.spineItems.forEach.apply(this.spineItems, arguments);
  }
  /**
   * Find the first Section in the Spine
   * @return {Section} first section
   */
  first() {
    let index = 0;
    do {
      let next = this.get(index);
      if (next && next.linear) {
        return next;
      }
      index += 1;
    } while (index < this.spineItems.length);
  }
  /**
   * Find the last Section in the Spine
   * @return {Section} last section
   */
  last() {
    let index = this.spineItems.length - 1;
    do {
      let prev = this.get(index);
      if (prev && prev.linear) {
        return prev;
      }
      index -= 1;
    } while (index >= 0);
  }
  destroy() {
    this.each((section) => section.destroy());
    this.spineItems = void 0;
    this.spineByHref = void 0;
    this.spineById = void 0;
    this.hooks.serialize.clear();
    this.hooks.content.clear();
    this.hooks = void 0;
    this.epubcfi = void 0;
    this.loaded = false;
    this.items = void 0;
    this.manifest = void 0;
    this.spineNodeIndex = void 0;
    this.baseUrl = void 0;
    this.length = void 0;
  }
};
var spine_default = Spine;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/locations.js
init_core();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/queue.js
init_core();
var Queue = class {
  constructor(context) {
    this._q = [];
    this.context = context;
    this.tick = requestAnimationFrame2;
    this.running = false;
    this.paused = false;
  }
  /**
   * Add an item to the queue
   * @return {Promise}
   */
  enqueue() {
    var deferred, promise;
    var queued;
    var task = [].shift.call(arguments);
    var args = arguments;
    if (!task) {
      throw new Error("No Task Provided");
    }
    if (typeof task === "function") {
      deferred = new defer();
      promise = deferred.promise;
      queued = {
        "task": task,
        "args": args,
        //"context"  : context,
        "deferred": deferred,
        "promise": promise
      };
    } else {
      queued = {
        "promise": task
      };
    }
    this._q.push(queued);
    if (this.paused == false && !this.running) {
      this.run();
    }
    return queued.promise;
  }
  /**
   * Run one item
   * @return {Promise}
   */
  dequeue() {
    var inwait, task, result;
    if (this._q.length && !this.paused) {
      inwait = this._q.shift();
      task = inwait.task;
      if (task) {
        result = task.apply(this.context, inwait.args);
        if (result && typeof result["then"] === "function") {
          return result.then((function() {
            inwait.deferred.resolve.apply(this.context, arguments);
          }).bind(this), (function() {
            inwait.deferred.reject.apply(this.context, arguments);
          }).bind(this));
        } else {
          inwait.deferred.resolve.apply(this.context, result);
          return inwait.promise;
        }
      } else if (inwait.promise) {
        return inwait.promise;
      }
    } else {
      inwait = new defer();
      inwait.deferred.resolve();
      return inwait.promise;
    }
  }
  // Run All Immediately
  dump() {
    while (this._q.length) {
      this.dequeue();
    }
  }
  /**
   * Run all tasks sequentially, at convince
   * @return {Promise}
   */
  run() {
    if (!this.running) {
      this.running = true;
      this.defered = new defer();
    }
    this.tick.call(window, () => {
      if (this._q.length) {
        this.dequeue().then((function() {
          this.run();
        }).bind(this));
      } else {
        this.defered.resolve();
        this.running = void 0;
      }
    });
    if (this.paused == true) {
      this.paused = false;
    }
    return this.defered.promise;
  }
  /**
   * Flush all, as quickly as possible
   * @return {Promise}
   */
  flush() {
    if (this.running) {
      return this.running;
    }
    if (this._q.length) {
      this.running = this.dequeue().then((function() {
        this.running = void 0;
        return this.flush();
      }).bind(this));
      return this.running;
    }
  }
  /**
   * Clear all items in wait
   */
  clear() {
    this._q = [];
  }
  /**
   * Get the number of tasks in the queue
   * @return {number} tasks
   */
  length() {
    return this._q.length;
  }
  /**
   * Pause a running queue
   */
  pause() {
    this.paused = true;
  }
  /**
   * End the queue
   */
  stop() {
    this._q = [];
    this.running = false;
    this.paused = true;
  }
};
var queue_default = Queue;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/utils/constants.js
var EPUBJS_VERSION = "0.3";
var DOM_EVENTS = ["keydown", "keyup", "keypressed", "mouseup", "mousedown", "click", "touchend", "touchstart"];
var EVENTS = {
  BOOK: {
    OPEN_FAILED: "openFailed"
  },
  CONTENTS: {
    EXPAND: "expand",
    RESIZE: "resize",
    SELECTED: "selected",
    SELECTED_RANGE: "selectedRange",
    LINK_CLICKED: "linkClicked"
  },
  LOCATIONS: {
    CHANGED: "changed"
  },
  MANAGERS: {
    RESIZE: "resize",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    ADDED: "added",
    SCROLL: "scroll",
    SCROLLED: "scrolled"
  },
  VIEWS: {
    AXIS: "axis",
    LOAD_ERROR: "loaderror",
    RENDERED: "rendered",
    RESIZED: "resized",
    DISPLAYED: "displayed",
    SHOWN: "shown",
    HIDDEN: "hidden",
    MARK_CLICKED: "markClicked"
  },
  RENDITION: {
    STARTED: "started",
    ATTACHED: "attached",
    DISPLAYED: "displayed",
    DISPLAY_ERROR: "displayerror",
    RENDERED: "rendered",
    REMOVED: "removed",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    LOCATION_CHANGED: "locationChanged",
    RELOCATED: "relocated",
    MARK_CLICKED: "markClicked",
    SELECTED: "selected",
    LAYOUT: "layout"
  },
  LAYOUT: {
    UPDATED: "updated"
  }
};

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/locations.js
var import_event_emitter = __toESM(require_event_emitter());
var Locations = class {
  constructor(spine, request2, pause) {
    this.spine = spine;
    this.request = request2;
    this.pause = pause || 100;
    this.q = new queue_default(this);
    this.epubcfi = new epubcfi_default();
    this._locations = [];
    this.total = 0;
    this.break = 150;
    this._current = 0;
    this.currentLocation = "";
    this._currentCfi = "";
    this.processingTimeout = void 0;
  }
  /**
   * Load all of sections in the book to generate locations
   * @param  {int} chars how many chars to split on
   * @return {object} locations
   */
  generate(chars) {
    if (chars) {
      this.break = chars;
    }
    this.q.pause();
    this.spine.each((function(section) {
      if (section.linear) {
        this.q.enqueue(this.process.bind(this), section);
      }
    }).bind(this));
    return this.q.run().then((function() {
      this.total = this._locations.length - 1;
      if (this._currentCfi) {
        this.currentLocation = this._currentCfi;
      }
      return this._locations;
    }).bind(this));
  }
  createRange() {
    return {
      startContainer: void 0,
      startOffset: void 0,
      endContainer: void 0,
      endOffset: void 0
    };
  }
  process(section) {
    return section.load(this.request).then((function(contents) {
      var completed = new defer();
      var locations = this.parse(contents, section.cfiBase);
      this._locations = this._locations.concat(locations);
      section.unload();
      this.processingTimeout = setTimeout(() => completed.resolve(locations), this.pause);
      return completed.promise;
    }).bind(this));
  }
  parse(contents, cfiBase, chars) {
    var locations = [];
    var range;
    var doc = contents.ownerDocument;
    var body = qs(doc, "body");
    var counter = 0;
    var prev;
    var _break = chars || this.break;
    var parser = function(node) {
      var len = node.length;
      var dist;
      var pos = 0;
      if (node.textContent.trim().length === 0) {
        return false;
      }
      if (counter == 0) {
        range = this.createRange();
        range.startContainer = node;
        range.startOffset = 0;
      }
      dist = _break - counter;
      if (dist > len) {
        counter += len;
        pos = len;
      }
      while (pos < len) {
        dist = _break - counter;
        if (counter === 0) {
          pos += 1;
          range = this.createRange();
          range.startContainer = node;
          range.startOffset = pos;
        }
        if (pos + dist >= len) {
          counter += len - pos;
          pos = len;
        } else {
          pos += dist;
          range.endContainer = node;
          range.endOffset = pos;
          let cfi = new epubcfi_default(range, cfiBase).toString();
          locations.push(cfi);
          counter = 0;
        }
      }
      prev = node;
    };
    sprint(body, parser.bind(this));
    if (range && range.startContainer && prev) {
      range.endContainer = prev;
      range.endOffset = prev.length;
      let cfi = new epubcfi_default(range, cfiBase).toString();
      locations.push(cfi);
      counter = 0;
    }
    return locations;
  }
  /**
   * Get a location from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */
  locationFromCfi(cfi) {
    let loc;
    if (epubcfi_default.prototype.isCfiString(cfi)) {
      cfi = new epubcfi_default(cfi);
    }
    if (this._locations.length === 0) {
      return -1;
    }
    loc = locationOf(cfi, this._locations, this.epubcfi.compare);
    if (loc > this.total) {
      return this.total;
    }
    return loc;
  }
  /**
   * Get a percentage position in locations from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */
  percentageFromCfi(cfi) {
    if (this._locations.length === 0) {
      return null;
    }
    var loc = this.locationFromCfi(cfi);
    return this.percentageFromLocation(loc);
  }
  /**
   * Get a percentage position from a location index
   * @param {number} location
   * @return {number}
   */
  percentageFromLocation(loc) {
    if (!loc || !this.total) {
      return 0;
    }
    return loc / this.total;
  }
  /**
   * Get an EpubCFI from location index
   * @param {number} loc
   * @return {EpubCFI} cfi
   */
  cfiFromLocation(loc) {
    var cfi = -1;
    if (typeof loc != "number") {
      loc = parseInt(loc);
    }
    if (loc >= 0 && loc < this._locations.length) {
      cfi = this._locations[loc];
    }
    return cfi;
  }
  /**
   * Get an EpubCFI from location percentage
   * @param {number} percentage
   * @return {EpubCFI} cfi
   */
  cfiFromPercentage(percentage) {
    let loc;
    if (percentage > 1) {
      console.warn("Normalize cfiFromPercentage value to between 0 - 1");
    }
    if (percentage >= 1) {
      let cfi = new epubcfi_default(this._locations[this.total]);
      cfi.collapse();
      return cfi.toString();
    }
    loc = Math.ceil(this.total * percentage);
    return this.cfiFromLocation(loc);
  }
  /**
   * Load locations from JSON
   * @param {json} locations
   */
  load(locations) {
    if (typeof locations === "string") {
      this._locations = JSON.parse(locations);
    } else {
      this._locations = locations;
    }
    this.total = this._locations.length - 1;
    return this._locations;
  }
  /**
   * Save locations to JSON
   * @return {json}
   */
  save() {
    return JSON.stringify(this._locations);
  }
  getCurrent() {
    return this._current;
  }
  setCurrent(curr) {
    var loc;
    if (typeof curr == "string") {
      this._currentCfi = curr;
    } else if (typeof curr == "number") {
      this._current = curr;
    } else {
      return;
    }
    if (this._locations.length === 0) {
      return;
    }
    if (typeof curr == "string") {
      loc = this.locationFromCfi(curr);
      this._current = loc;
    } else {
      loc = curr;
    }
    this.emit(EVENTS.LOCATIONS.CHANGED, {
      percentage: this.percentageFromLocation(loc)
    });
  }
  /**
   * Get the current location
   */
  get currentLocation() {
    return this._current;
  }
  /**
   * Set the current location
   */
  set currentLocation(curr) {
    this.setCurrent(curr);
  }
  /**
   * Locations length
   */
  length() {
    return this._locations.length;
  }
  destroy() {
    this.spine = void 0;
    this.request = void 0;
    this.pause = void 0;
    this.q.stop();
    this.q = void 0;
    this.epubcfi = void 0;
    this._locations = void 0;
    this.total = void 0;
    this.break = void 0;
    this._current = void 0;
    this.currentLocation = void 0;
    this._currentCfi = void 0;
    clearTimeout(this.processingTimeout);
  }
};
(0, import_event_emitter.default)(Locations.prototype);
var locations_default = Locations;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/container.js
var import_path_webpack3 = __toESM(require_path());
init_core();
var Container = class {
  constructor(containerDocument) {
    this.packagePath = "";
    this.directory = "";
    this.encoding = "";
    if (containerDocument) {
      this.parse(containerDocument);
    }
  }
  /**
   * Parse the Container XML
   * @param  {document} containerDocument
   */
  parse(containerDocument) {
    var rootfile;
    if (!containerDocument) {
      throw new Error("Container File Not Found");
    }
    rootfile = qs(containerDocument, "rootfile");
    if (!rootfile) {
      throw new Error("No RootFile Found");
    }
    this.packagePath = rootfile.getAttribute("full-path");
    this.directory = import_path_webpack3.default.dirname(this.packagePath);
    this.encoding = containerDocument.xmlEncoding;
  }
  destroy() {
    this.packagePath = void 0;
    this.directory = void 0;
    this.encoding = void 0;
  }
};
var container_default = Container;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/packaging.js
init_core();
var Packaging = class {
  constructor(packageDocument) {
    this.manifest = {};
    this.navPath = "";
    this.ncxPath = "";
    this.coverPath = "";
    this.spineNodeIndex = 0;
    this.spine = [];
    this.metadata = {};
    if (packageDocument) {
      this.parse(packageDocument);
    }
  }
  /**
   * Parse OPF XML
   * @param  {document} packageDocument OPF XML
   * @return {object} parsed package parts
   */
  parse(packageDocument) {
    var metadataNode, manifestNode, spineNode;
    if (!packageDocument) {
      throw new Error("Package File Not Found");
    }
    metadataNode = qs(packageDocument, "metadata");
    if (!metadataNode) {
      throw new Error("No Metadata Found");
    }
    manifestNode = qs(packageDocument, "manifest");
    if (!manifestNode) {
      throw new Error("No Manifest Found");
    }
    spineNode = qs(packageDocument, "spine");
    if (!spineNode) {
      throw new Error("No Spine Found");
    }
    this.manifest = this.parseManifest(manifestNode);
    this.navPath = this.findNavPath(manifestNode);
    this.ncxPath = this.findNcxPath(manifestNode, spineNode);
    this.coverPath = this.findCoverPath(packageDocument);
    this.spineNodeIndex = indexOfElementNode(spineNode);
    this.spine = this.parseSpine(spineNode, this.manifest);
    this.metadata = this.parseMetadata(metadataNode);
    this.metadata.direction = spineNode.getAttribute("page-progression-direction");
    return {
      "metadata": this.metadata,
      "spine": this.spine,
      "manifest": this.manifest,
      "navPath": this.navPath,
      "ncxPath": this.ncxPath,
      "coverPath": this.coverPath,
      "spineNodeIndex": this.spineNodeIndex
    };
  }
  /**
   * Parse Metadata
   * @private
   * @param  {node} xml
   * @return {object} metadata
   */
  parseMetadata(xml) {
    var metadata = {};
    metadata.title = this.getElementText(xml, "title");
    metadata.creator = this.getElementText(xml, "creator");
    metadata.description = this.getElementText(xml, "description");
    metadata.pubdate = this.getElementText(xml, "date");
    metadata.publisher = this.getElementText(xml, "publisher");
    metadata.identifier = this.getElementText(xml, "identifier");
    metadata.language = this.getElementText(xml, "language");
    metadata.rights = this.getElementText(xml, "rights");
    metadata.modified_date = this.getPropertyText(xml, "dcterms:modified");
    metadata.layout = this.getPropertyText(xml, "rendition:layout");
    metadata.orientation = this.getPropertyText(xml, "rendition:orientation");
    metadata.flow = this.getPropertyText(xml, "rendition:flow");
    metadata.viewport = this.getPropertyText(xml, "rendition:viewport");
    metadata.media_active_class = this.getPropertyText(xml, "media:active-class");
    return metadata;
  }
  /**
   * Parse Manifest
   * @private
   * @param  {node} manifestXml
   * @return {object} manifest
   */
  parseManifest(manifestXml) {
    var manifest = {};
    var selected = qsa(manifestXml, "item");
    var items = Array.prototype.slice.call(selected);
    items.forEach(function(item) {
      var id = item.getAttribute("id"), href = item.getAttribute("href") || "", type2 = item.getAttribute("media-type") || "", overlay = item.getAttribute("media-overlay") || "", properties = item.getAttribute("properties") || "";
      manifest[id] = {
        "href": href,
        // "url" : href,
        "type": type2,
        "overlay": overlay,
        "properties": properties.length ? properties.split(" ") : []
      };
    });
    return manifest;
  }
  /**
   * Parse Spine
   * @private
   * @param  {node} spineXml
   * @param  {Packaging.manifest} manifest
   * @return {object} spine
   */
  parseSpine(spineXml, manifest) {
    var spine = [];
    var selected = qsa(spineXml, "itemref");
    var items = Array.prototype.slice.call(selected);
    items.forEach(function(item, index) {
      var idref = item.getAttribute("idref");
      var props = item.getAttribute("properties") || "";
      var propArray = props.length ? props.split(" ") : [];
      var itemref = {
        "idref": idref,
        "linear": item.getAttribute("linear") || "yes",
        "properties": propArray,
        // "href" : manifest[Id].href,
        // "url" :  manifest[Id].url,
        "index": index
        // "cfiBase" : cfiBase
      };
      spine.push(itemref);
    });
    return spine;
  }
  /**
   * Find TOC NAV
   * @private
   * @param {element} manifestNode
   * @return {string}
   */
  findNavPath(manifestNode) {
    var node = qsp(manifestNode, "item", { "properties": "nav" });
    return node ? node.getAttribute("href") : false;
  }
  /**
   * Find TOC NCX
   * media-type="application/x-dtbncx+xml" href="toc.ncx"
   * @private
   * @param {element} manifestNode
   * @param {element} spineNode
   * @return {string}
   */
  findNcxPath(manifestNode, spineNode) {
    var node = qsp(manifestNode, "item", { "media-type": "application/x-dtbncx+xml" });
    var tocId;
    if (!node) {
      tocId = spineNode.getAttribute("toc");
      if (tocId) {
        node = manifestNode.getElementById(tocId);
      }
    }
    return node ? node.getAttribute("href") : false;
  }
  /**
   * Find the Cover Path
   * <item properties="cover-image" id="ci" href="cover.svg" media-type="image/svg+xml" />
   * Fallback for Epub 2.0
   * @private
   * @param  {node} packageXml
   * @return {string} href
   */
  findCoverPath(packageXml) {
    var pkg = qs(packageXml, "package");
    var epubVersion = pkg.getAttribute("version");
    if (epubVersion === "2.0") {
      var metaCover = qsp(packageXml, "meta", { "name": "cover" });
      if (metaCover) {
        var coverId = metaCover.getAttribute("content");
        var cover = packageXml.getElementById(coverId);
        return cover ? cover.getAttribute("href") : "";
      } else {
        return false;
      }
    } else {
      var node = qsp(packageXml, "item", { "properties": "cover-image" });
      return node ? node.getAttribute("href") : "";
    }
  }
  /**
   * Get text of a namespaced element
   * @private
   * @param  {node} xml
   * @param  {string} tag
   * @return {string} text
   */
  getElementText(xml, tag) {
    var found = xml.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", tag);
    var el;
    if (!found || found.length === 0)
      return "";
    el = found[0];
    if (el.childNodes.length) {
      return el.childNodes[0].nodeValue;
    }
    return "";
  }
  /**
   * Get text by property
   * @private
   * @param  {node} xml
   * @param  {string} property
   * @return {string} text
   */
  getPropertyText(xml, property) {
    var el = qsp(xml, "meta", { "property": property });
    if (el && el.childNodes.length) {
      return el.childNodes[0].nodeValue;
    }
    return "";
  }
  /**
   * Load JSON Manifest
   * @param  {document} packageDocument OPF XML
   * @return {object} parsed package parts
   */
  load(json) {
    this.metadata = json.metadata;
    this.spine = json.spine.map((item, index) => {
      item.index = index;
      return item;
    });
    json.resources.forEach((item, index) => {
      this.manifest[index] = item;
      if (item.rel && item.rel[0] === "cover") {
        this.coverPath = item.href;
      }
    });
    this.spineNodeIndex = 0;
    this.toc = json.toc.map((item, index) => {
      item.label = item.title;
      return item;
    });
    return {
      "metadata": this.metadata,
      "spine": this.spine,
      "manifest": this.manifest,
      "navPath": this.navPath,
      "ncxPath": this.ncxPath,
      "coverPath": this.coverPath,
      "spineNodeIndex": this.spineNodeIndex,
      "toc": this.toc
    };
  }
  destroy() {
    this.manifest = void 0;
    this.navPath = void 0;
    this.ncxPath = void 0;
    this.coverPath = void 0;
    this.spineNodeIndex = void 0;
    this.spine = void 0;
    this.metadata = void 0;
  }
};
var packaging_default = Packaging;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/navigation.js
init_core();
var Navigation = class {
  constructor(xml) {
    this.toc = [];
    this.tocByHref = {};
    this.tocById = {};
    this.landmarks = [];
    this.landmarksByType = {};
    this.length = 0;
    if (xml) {
      this.parse(xml);
    }
  }
  /**
   * Parse out the navigation items
   * @param {document} xml navigation html / xhtml / ncx
   */
  parse(xml) {
    let isXml2 = xml.nodeType;
    let html;
    let ncx;
    if (isXml2) {
      html = qs(xml, "html");
      ncx = qs(xml, "ncx");
    }
    if (!isXml2) {
      this.toc = this.load(xml);
    } else if (html) {
      this.toc = this.parseNav(xml);
      this.landmarks = this.parseLandmarks(xml);
    } else if (ncx) {
      this.toc = this.parseNcx(xml);
    }
    this.length = 0;
    this.unpack(this.toc);
  }
  /**
   * Unpack navigation items
   * @private
   * @param  {array} toc
   */
  unpack(toc) {
    var item;
    for (var i = 0; i < toc.length; i++) {
      item = toc[i];
      if (item.href) {
        this.tocByHref[item.href] = i;
      }
      if (item.id) {
        this.tocById[item.id] = i;
      }
      this.length++;
      if (item.subitems.length) {
        this.unpack(item.subitems);
      }
    }
  }
  /**
   * Get an item from the navigation
   * @param  {string} target
   * @return {object} navItem
   */
  get(target) {
    var index;
    if (!target) {
      return this.toc;
    }
    if (target.indexOf("#") === 0) {
      index = this.tocById[target.substring(1)];
    } else if (target in this.tocByHref) {
      index = this.tocByHref[target];
    }
    return this.toc[index];
  }
  /**
   * Get a landmark by type
   * List of types: https://idpf.github.io/epub-vocabs/structure/
   * @param  {string} type
   * @return {object} landmarkItem
   */
  landmark(type2) {
    var index;
    if (!type2) {
      return this.landmarks;
    }
    index = this.landmarksByType[type2];
    return this.landmarks[index];
  }
  /**
   * Parse toc from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */
  parseNav(navHtml) {
    var navElement = querySelectorByType(navHtml, "nav", "toc");
    var navItems = navElement ? qsa(navElement, "li") : [];
    var length = navItems.length;
    var i;
    var toc = {};
    var list = [];
    var item, parent2;
    if (!navItems || length === 0)
      return list;
    for (i = 0; i < length; ++i) {
      item = this.navItem(navItems[i]);
      if (item) {
        toc[item.id] = item;
        if (!item.parent) {
          list.push(item);
        } else {
          parent2 = toc[item.parent];
          parent2.subitems.push(item);
        }
      }
    }
    return list;
  }
  /**
   * Create a navItem
   * @private
   * @param  {element} item
   * @return {object} navItem
   */
  navItem(item) {
    let id = item.getAttribute("id") || void 0;
    let content = filterChildren(item, "a", true);
    if (!content) {
      return;
    }
    let src = content.getAttribute("href") || "";
    let text = content.textContent || "";
    let subitems = [];
    let parentItem = getParentByTagName(item, "li");
    let parent2;
    if (parentItem) {
      parent2 = parentItem.getAttribute("id");
    }
    while (!parent2 && parentItem) {
      parentItem = getParentByTagName(parentItem, "li");
      if (parentItem) {
        parent2 = parentItem.getAttribute("id");
      }
    }
    return {
      "id": id,
      "href": src,
      "label": text,
      "subitems": subitems,
      "parent": parent2
    };
  }
  /**
   * Parse landmarks from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} landmarks list
   */
  parseLandmarks(navHtml) {
    var navElement = querySelectorByType(navHtml, "nav", "landmarks");
    var navItems = navElement ? qsa(navElement, "li") : [];
    var length = navItems.length;
    var i;
    var list = [];
    var item;
    if (!navItems || length === 0)
      return list;
    for (i = 0; i < length; ++i) {
      item = this.landmarkItem(navItems[i]);
      if (item) {
        list.push(item);
        this.landmarksByType[item.type] = i;
      }
    }
    return list;
  }
  /**
   * Create a landmarkItem
   * @private
   * @param  {element} item
   * @return {object} landmarkItem
   */
  landmarkItem(item) {
    let content = filterChildren(item, "a", true);
    if (!content) {
      return;
    }
    let type2 = content.getAttributeNS("http://www.idpf.org/2007/ops", "type") || void 0;
    let href = content.getAttribute("href") || "";
    let text = content.textContent || "";
    return {
      "href": href,
      "label": text,
      "type": type2
    };
  }
  /**
   * Parse from a Epub > 3.0 NC
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */
  parseNcx(tocXml) {
    var navPoints = qsa(tocXml, "navPoint");
    var length = navPoints.length;
    var i;
    var toc = {};
    var list = [];
    var item, parent2;
    if (!navPoints || length === 0)
      return list;
    for (i = 0; i < length; ++i) {
      item = this.ncxItem(navPoints[i]);
      toc[item.id] = item;
      if (!item.parent) {
        list.push(item);
      } else {
        parent2 = toc[item.parent];
        parent2.subitems.push(item);
      }
    }
    return list;
  }
  /**
   * Create a ncxItem
   * @private
   * @param  {element} item
   * @return {object} ncxItem
   */
  ncxItem(item) {
    var id = item.getAttribute("id") || false, content = qs(item, "content"), src = content.getAttribute("src"), navLabel = qs(item, "navLabel"), text = navLabel.textContent ? navLabel.textContent : "", subitems = [], parentNode = item.parentNode, parent2;
    if (parentNode && parentNode.nodeName === "navPoint") {
      parent2 = parentNode.getAttribute("id");
    }
    return {
      "id": id,
      "href": src,
      "label": text,
      "subitems": subitems,
      "parent": parent2
    };
  }
  /**
   * Load Spine Items
   * @param  {object} json the items to be loaded
   * @return {Array} navItems
   */
  load(json) {
    return json.map((item) => {
      item.label = item.title;
      item.subitems = item.children ? this.load(item.children) : [];
      return item;
    });
  }
  /**
   * forEach pass through
   * @param  {Function} fn function to run on each item
   * @return {method} forEach loop
   */
  forEach(fn) {
    return this.toc.forEach(fn);
  }
};
var navigation_default = Navigation;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/resources.js
init_core();
var import_mime = __toESM(require_mime());
init_path();
var import_path_webpack4 = __toESM(require_path());
var Resources = class {
  constructor(manifest, options) {
    this.settings = {
      replacements: options && options.replacements || "base64",
      archive: options && options.archive,
      resolver: options && options.resolver,
      request: options && options.request
    };
    this.manifest = manifest;
    this.resources = Object.keys(manifest).map(function(key) {
      return manifest[key];
    });
    this.replacementUrls = [];
    this.html = [];
    this.assets = [];
    this.css = [];
    this.urls = [];
    this.cssUrls = [];
    this.split();
    this.splitUrls();
  }
  /**
   * Split resources by type
   * @private
   */
  split() {
    this.html = this.resources.filter(function(item) {
      if (item.type === "application/xhtml+xml" || item.type === "text/html") {
        return true;
      }
    });
    this.assets = this.resources.filter(function(item) {
      if (item.type !== "application/xhtml+xml" && item.type !== "text/html") {
        return true;
      }
    });
    this.css = this.resources.filter(function(item) {
      if (item.type === "text/css") {
        return true;
      }
    });
  }
  /**
   * Convert split resources into Urls
   * @private
   */
  splitUrls() {
    this.urls = this.assets.map((function(item) {
      return item.href;
    }).bind(this));
    this.cssUrls = this.css.map(function(item) {
      return item.href;
    });
  }
  /**
   * Create a url to a resource
   * @param {string} url
   * @return {Promise<string>} Promise resolves with url string
   */
  createUrl(url) {
    var parsedUrl = new url_default(url);
    var mimeType = import_mime.default.lookup(parsedUrl.filename);
    if (this.settings.archive) {
      return this.settings.archive.createUrl(url, { "base64": this.settings.replacements === "base64" });
    } else {
      if (this.settings.replacements === "base64") {
        return this.settings.request(url, "blob").then((blob) => {
          return blob2base64(blob);
        }).then((blob) => {
          return createBase64Url(blob, mimeType);
        });
      } else {
        return this.settings.request(url, "blob").then((blob) => {
          return createBlobUrl(blob, mimeType);
        });
      }
    }
  }
  /**
   * Create blob urls for all the assets
   * @return {Promise}         returns replacement urls
   */
  replacements() {
    if (this.settings.replacements === "none") {
      return new Promise((function(resolve) {
        resolve(this.urls);
      }).bind(this));
    }
    var replacements = this.urls.map((url) => {
      var absolute = this.settings.resolver(url);
      return this.createUrl(absolute).catch((err) => {
        console.error(err);
        return null;
      });
    });
    return Promise.all(replacements).then((replacementUrls) => {
      this.replacementUrls = replacementUrls.filter((url) => {
        return typeof url === "string";
      });
      return replacementUrls;
    });
  }
  /**
   * Replace URLs in CSS resources
   * @private
   * @param  {Archive} [archive]
   * @param  {method} [resolver]
   * @return {Promise}
   */
  replaceCss(archive, resolver) {
    var replaced = [];
    archive = archive || this.settings.archive;
    resolver = resolver || this.settings.resolver;
    this.cssUrls.forEach((function(href) {
      var replacement = this.createCssFile(href, archive, resolver).then((function(replacementUrl) {
        var indexInUrls = this.urls.indexOf(href);
        if (indexInUrls > -1) {
          this.replacementUrls[indexInUrls] = replacementUrl;
        }
      }).bind(this));
      replaced.push(replacement);
    }).bind(this));
    return Promise.all(replaced);
  }
  /**
   * Create a new CSS file with the replaced URLs
   * @private
   * @param  {string} href the original css file
   * @return {Promise}  returns a BlobUrl to the new CSS file or a data url
   */
  createCssFile(href) {
    var newUrl;
    if (import_path_webpack4.default.isAbsolute(href)) {
      return new Promise(function(resolve) {
        resolve();
      });
    }
    var absolute = this.settings.resolver(href);
    var textResponse;
    if (this.settings.archive) {
      textResponse = this.settings.archive.getText(absolute);
    } else {
      textResponse = this.settings.request(absolute, "text");
    }
    var relUrls = this.urls.map((assetHref) => {
      var resolved = this.settings.resolver(assetHref);
      var relative = new path_default(absolute).relative(resolved);
      return relative;
    });
    if (!textResponse) {
      return new Promise(function(resolve) {
        resolve();
      });
    }
    return textResponse.then((text) => {
      text = substitute(text, relUrls, this.replacementUrls);
      if (this.settings.replacements === "base64") {
        newUrl = createBase64Url(text, "text/css");
      } else {
        newUrl = createBlobUrl(text, "text/css");
      }
      return newUrl;
    }, (err) => {
      return new Promise(function(resolve) {
        resolve();
      });
    });
  }
  /**
   * Resolve all resources URLs relative to an absolute URL
   * @param  {string} absolute to be resolved to
   * @param  {resolver} [resolver]
   * @return {string[]} array with relative Urls
   */
  relativeTo(absolute, resolver) {
    resolver = resolver || this.settings.resolver;
    return this.urls.map((function(href) {
      var resolved = resolver(href);
      var relative = new path_default(absolute).relative(resolved);
      return relative;
    }).bind(this));
  }
  /**
   * Get a URL for a resource
   * @param  {string} path
   * @return {string} url
   */
  get(path5) {
    var indexInUrls = this.urls.indexOf(path5);
    if (indexInUrls === -1) {
      return;
    }
    if (this.replacementUrls.length) {
      return new Promise((function(resolve, reject) {
        resolve(this.replacementUrls[indexInUrls]);
      }).bind(this));
    } else {
      return this.createUrl(path5);
    }
  }
  /**
   * Substitute urls in content, with replacements,
   * relative to a url if provided
   * @param  {string} content
   * @param  {string} [url]   url to resolve to
   * @return {string}         content with urls substituted
   */
  substitute(content, url) {
    var relUrls;
    if (url) {
      relUrls = this.relativeTo(url);
    } else {
      relUrls = this.urls;
    }
    return substitute(content, relUrls, this.replacementUrls);
  }
  destroy() {
    this.settings = void 0;
    this.manifest = void 0;
    this.resources = void 0;
    this.replacementUrls = void 0;
    this.html = void 0;
    this.assets = void 0;
    this.css = void 0;
    this.urls = void 0;
    this.cssUrls = void 0;
  }
};
var resources_default = Resources;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/pagelist.js
init_core();
var PageList = class {
  constructor(xml) {
    this.pages = [];
    this.locations = [];
    this.epubcfi = new epubcfi_default();
    this.firstPage = 0;
    this.lastPage = 0;
    this.totalPages = 0;
    this.toc = void 0;
    this.ncx = void 0;
    if (xml) {
      this.pageList = this.parse(xml);
    }
    if (this.pageList && this.pageList.length) {
      this.process(this.pageList);
    }
  }
  /**
   * Parse PageList Xml
   * @param  {document} xml
   */
  parse(xml) {
    var html = qs(xml, "html");
    var ncx = qs(xml, "ncx");
    if (html) {
      return this.parseNav(xml);
    } else if (ncx) {
      return;
    }
  }
  /**
   * Parse a Nav PageList
   * @private
   * @param  {node} navHtml
   * @return {PageList.item[]} list
   */
  parseNav(navHtml) {
    var navElement = querySelectorByType(navHtml, "nav", "page-list");
    var navItems = navElement ? qsa(navElement, "li") : [];
    var length = navItems.length;
    var i;
    var list = [];
    var item;
    if (!navItems || length === 0)
      return list;
    for (i = 0; i < length; ++i) {
      item = this.item(navItems[i]);
      list.push(item);
    }
    return list;
  }
  /**
   * Page List Item
   * @private
   * @param  {node} item
   * @return {object} pageListItem
   */
  item(item) {
    var content = qs(item, "a"), href = content.getAttribute("href") || "", text = content.textContent || "", page = parseInt(text), isCfi = href.indexOf("epubcfi"), split, packageUrl, cfi;
    if (isCfi != -1) {
      split = href.split("#");
      packageUrl = split[0];
      cfi = split.length > 1 ? split[1] : false;
      return {
        "cfi": cfi,
        "href": href,
        "packageUrl": packageUrl,
        "page": page
      };
    } else {
      return {
        "href": href,
        "page": page
      };
    }
  }
  /**
   * Process pageList items
   * @private
   * @param  {array} pageList
   */
  process(pageList) {
    pageList.forEach(function(item) {
      this.pages.push(item.page);
      if (item.cfi) {
        this.locations.push(item.cfi);
      }
    }, this);
    this.firstPage = parseInt(this.pages[0]);
    this.lastPage = parseInt(this.pages[this.pages.length - 1]);
    this.totalPages = this.lastPage - this.firstPage;
  }
  /**
   * Get a PageList result from a EpubCFI
   * @param  {string} cfi EpubCFI String
   * @return {number} page
   */
  pageFromCfi(cfi) {
    var pg = -1;
    if (this.locations.length === 0) {
      return -1;
    }
    var index = indexOfSorted(cfi, this.locations, this.epubcfi.compare);
    if (index != -1) {
      pg = this.pages[index];
    } else {
      index = locationOf(cfi, this.locations, this.epubcfi.compare);
      pg = index - 1 >= 0 ? this.pages[index - 1] : this.pages[0];
      if (pg !== void 0) {
      } else {
        pg = -1;
      }
    }
    return pg;
  }
  /**
   * Get an EpubCFI from a Page List Item
   * @param  {string | number} pg
   * @return {string} cfi
   */
  cfiFromPage(pg) {
    var cfi = -1;
    if (typeof pg != "number") {
      pg = parseInt(pg);
    }
    var index = this.pages.indexOf(pg);
    if (index != -1) {
      cfi = this.locations[index];
    }
    return cfi;
  }
  /**
   * Get a Page from Book percentage
   * @param  {number} percent
   * @return {number} page
   */
  pageFromPercentage(percent) {
    var pg = Math.round(this.totalPages * percent);
    return pg;
  }
  /**
   * Returns a value between 0 - 1 corresponding to the location of a page
   * @param  {number} pg the page
   * @return {number} percentage
   */
  percentageFromPage(pg) {
    var percentage = (pg - this.firstPage) / this.totalPages;
    return Math.round(percentage * 1e3) / 1e3;
  }
  /**
   * Returns a value between 0 - 1 corresponding to the location of a cfi
   * @param  {string} cfi EpubCFI String
   * @return {number} percentage
   */
  percentageFromCfi(cfi) {
    var pg = this.pageFromCfi(cfi);
    var percentage = this.percentageFromPage(pg);
    return percentage;
  }
  /**
   * Destroy
   */
  destroy() {
    this.pages = void 0;
    this.locations = void 0;
    this.epubcfi = void 0;
    this.pageList = void 0;
    this.toc = void 0;
    this.ncx = void 0;
  }
};
var pagelist_default = PageList;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/rendition.js
var import_event_emitter7 = __toESM(require_event_emitter());
init_core();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/layout.js
init_core();
var import_event_emitter2 = __toESM(require_event_emitter());
var Layout = class {
  constructor(settings) {
    this.settings = settings;
    this.name = settings.layout || "reflowable";
    this._spread = settings.spread === "none" ? false : true;
    this._minSpreadWidth = settings.minSpreadWidth || 800;
    this._evenSpreads = settings.evenSpreads || false;
    if (settings.flow === "scrolled" || settings.flow === "scrolled-continuous" || settings.flow === "scrolled-doc") {
      this._flow = "scrolled";
    } else {
      this._flow = "paginated";
    }
    this.width = 0;
    this.height = 0;
    this.spreadWidth = 0;
    this.delta = 0;
    this.columnWidth = 0;
    this.gap = 0;
    this.divisor = 1;
    this.props = {
      name: this.name,
      spread: this._spread,
      flow: this._flow,
      width: 0,
      height: 0,
      spreadWidth: 0,
      delta: 0,
      columnWidth: 0,
      gap: 0,
      divisor: 1
    };
  }
  /**
   * Switch the flow between paginated and scrolled
   * @param  {string} flow paginated | scrolled
   * @return {string} simplified flow
   */
  flow(flow) {
    if (typeof flow != "undefined") {
      if (flow === "scrolled" || flow === "scrolled-continuous" || flow === "scrolled-doc") {
        this._flow = "scrolled";
      } else {
        this._flow = "paginated";
      }
      this.update({ flow: this._flow });
    }
    return this._flow;
  }
  /**
   * Switch between using spreads or not, and set the
   * width at which they switch to single.
   * @param  {string} spread "none" | "always" | "auto"
   * @param  {number} min integer in pixels
   * @return {boolean} spread true | false
   */
  spread(spread, min) {
    if (spread) {
      this._spread = spread === "none" ? false : true;
      this.update({ spread: this._spread });
    }
    if (min >= 0) {
      this._minSpreadWidth = min;
    }
    return this._spread;
  }
  /**
   * Calculate the dimensions of the pagination
   * @param  {number} _width  width of the rendering
   * @param  {number} _height height of the rendering
   * @param  {number} _gap    width of the gap between columns
   */
  calculate(_width, _height, _gap) {
    var divisor = 1;
    var gap = _gap || 0;
    var width = _width;
    var height = _height;
    var section = Math.floor(width / 12);
    var columnWidth;
    var spreadWidth;
    var pageWidth;
    var delta;
    if (this._spread && width >= this._minSpreadWidth) {
      divisor = 2;
    } else {
      divisor = 1;
    }
    if (this.name === "reflowable" && this._flow === "paginated" && !(_gap >= 0)) {
      gap = section % 2 === 0 ? section : section - 1;
    }
    if (this.name === "pre-paginated") {
      gap = 0;
    }
    if (divisor > 1) {
      columnWidth = width / divisor - gap;
      pageWidth = columnWidth + gap;
    } else {
      columnWidth = width;
      pageWidth = width;
    }
    if (this.name === "pre-paginated" && divisor > 1) {
      width = columnWidth;
    }
    spreadWidth = columnWidth * divisor + gap;
    delta = width;
    this.width = width;
    this.height = height;
    this.spreadWidth = spreadWidth;
    this.pageWidth = pageWidth;
    this.delta = delta;
    this.columnWidth = columnWidth;
    this.gap = gap;
    this.divisor = divisor;
    this.update({
      width,
      height,
      spreadWidth,
      pageWidth,
      delta,
      columnWidth,
      gap,
      divisor
    });
  }
  /**
   * Apply Css to a Document
   * @param  {Contents} contents
   * @return {Promise}
   */
  format(contents) {
    var formating;
    if (this.name === "pre-paginated") {
      formating = contents.fit(this.columnWidth, this.height);
    } else if (this._flow === "paginated") {
      formating = contents.columns(this.width, this.height, this.columnWidth, this.gap);
    } else {
      formating = contents.size(this.width, null);
    }
    return formating;
  }
  /**
   * Count number of pages
   * @param  {number} totalLength
   * @param  {number} pageLength
   * @return {{spreads: Number, pages: Number}}
   */
  count(totalLength, pageLength) {
    let spreads, pages;
    if (this.name === "pre-paginated") {
      spreads = 1;
      pages = 1;
    } else if (this._flow === "paginated") {
      pageLength = pageLength || this.delta;
      spreads = Math.ceil(totalLength / pageLength);
      pages = spreads * this.divisor;
    } else {
      pageLength = pageLength || this.height;
      spreads = Math.ceil(totalLength / pageLength);
      pages = spreads;
    }
    return {
      spreads,
      pages
    };
  }
  /**
   * Update props that have changed
   * @private
   * @param  {object} props
   */
  update(props) {
    Object.keys(props).forEach((propName) => {
      if (this.props[propName] === props[propName]) {
        delete props[propName];
      }
    });
    if (Object.keys(props).length > 0) {
      let newProps = extend(this.props, props);
      this.emit(EVENTS.LAYOUT.UPDATED, newProps, props);
    }
  }
};
(0, import_event_emitter2.default)(Layout.prototype);
var layout_default = Layout;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/themes.js
var Themes = class {
  constructor(rendition) {
    this.rendition = rendition;
    this._themes = {
      "default": {
        "rules": {},
        "url": "",
        "serialized": ""
      }
    };
    this._overrides = {};
    this._current = "default";
    this._injected = [];
    this.rendition.hooks.content.register(this.inject.bind(this));
    this.rendition.hooks.content.register(this.overrides.bind(this));
  }
  /**
   * Add themes to be used by a rendition
   * @param {object | string}
   * @example themes.register("light", "http://example.com/light.css")
   * @example themes.register("light", { "body": { "color": "purple"}})
   * @example themes.register({ "light" : {...}, "dark" : {...}})
   */
  register() {
    if (arguments.length === 0) {
      return;
    }
    if (arguments.length === 1 && typeof arguments[0] === "object") {
      return this.registerThemes(arguments[0]);
    }
    if (arguments.length === 1 && typeof arguments[0] === "string") {
      return this.default(arguments[0]);
    }
    if (arguments.length === 2 && typeof arguments[1] === "string") {
      return this.registerUrl(arguments[0], arguments[1]);
    }
    if (arguments.length === 2 && typeof arguments[1] === "object") {
      return this.registerRules(arguments[0], arguments[1]);
    }
  }
  /**
   * Add a default theme to be used by a rendition
   * @param {object | string} theme
   * @example themes.register("http://example.com/default.css")
   * @example themes.register({ "body": { "color": "purple"}})
   */
  default(theme) {
    if (!theme) {
      return;
    }
    if (typeof theme === "string") {
      return this.registerUrl("default", theme);
    }
    if (typeof theme === "object") {
      return this.registerRules("default", theme);
    }
  }
  /**
   * Register themes object
   * @param {object} themes
   */
  registerThemes(themes) {
    for (var theme in themes) {
      if (themes.hasOwnProperty(theme)) {
        if (typeof themes[theme] === "string") {
          this.registerUrl(theme, themes[theme]);
        } else {
          this.registerRules(theme, themes[theme]);
        }
      }
    }
  }
  /**
   * Register a url
   * @param {string} name
   * @param {string} input
   */
  registerUrl(name, input) {
    var url = new url_default(input);
    this._themes[name] = { "url": url.toString() };
    if (this._injected[name]) {
      this.update(name);
    }
  }
  /**
   * Register rule
   * @param {string} name
   * @param {object} rules
   */
  registerRules(name, rules) {
    this._themes[name] = { "rules": rules };
    if (this._injected[name]) {
      this.update(name);
    }
  }
  /**
   * Select a theme
   * @param {string} name
   */
  select(name) {
    var prev = this._current;
    var contents;
    this._current = name;
    this.update(name);
    contents = this.rendition.getContents();
    contents.forEach((content) => {
      content.removeClass(prev);
      content.addClass(name);
    });
  }
  /**
   * Update a theme
   * @param {string} name
   */
  update(name) {
    var contents = this.rendition.getContents();
    contents.forEach((content) => {
      this.add(name, content);
    });
  }
  /**
   * Inject all themes into contents
   * @param {Contents} contents
   */
  inject(contents) {
    var links = [];
    var themes = this._themes;
    var theme;
    for (var name in themes) {
      if (themes.hasOwnProperty(name) && (name === this._current || name === "default")) {
        theme = themes[name];
        if (theme.rules && Object.keys(theme.rules).length > 0 || theme.url && links.indexOf(theme.url) === -1) {
          this.add(name, contents);
        }
        this._injected.push(name);
      }
    }
    if (this._current != "default") {
      contents.addClass(this._current);
    }
  }
  /**
   * Add Theme to contents
   * @param {string} name
   * @param {Contents} contents
   */
  add(name, contents) {
    var theme = this._themes[name];
    if (!theme || !contents) {
      return;
    }
    if (theme.url) {
      contents.addStylesheet(theme.url);
    } else if (theme.serialized) {
    } else if (theme.rules) {
      contents.addStylesheetRules(theme.rules);
      theme.injected = true;
    }
  }
  /**
   * Add override
   * @param {string} name
   * @param {string} value
   * @param {boolean} priority
   */
  override(name, value, priority) {
    var contents = this.rendition.getContents();
    this._overrides[name] = {
      value,
      priority: priority === true
    };
    contents.forEach((content) => {
      content.css(name, this._overrides[name].value, this._overrides[name].priority);
    });
  }
  /**
   * Add all overrides
   * @param {Content} content
   */
  overrides(contents) {
    var overrides = this._overrides;
    for (var rule in overrides) {
      if (overrides.hasOwnProperty(rule)) {
        contents.css(rule, overrides[rule].value, overrides[rule].priority);
      }
    }
  }
  /**
   * Adjust the font size of a rendition
   * @param {number} size
   */
  fontSize(size) {
    this.override("font-size", size);
  }
  /**
   * Adjust the font-family of a rendition
   * @param {string} f
   */
  font(f) {
    this.override("font-family", f, true);
  }
  destroy() {
    this.rendition = void 0;
    this._themes = void 0;
    this._overrides = void 0;
    this._current = void 0;
    this._injected = void 0;
  }
};
var themes_default = Themes;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/contents.js
var import_event_emitter3 = __toESM(require_event_emitter());
init_core();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/mapping.js
init_core();
var Mapping = class {
  constructor(layout, direction, axis, dev) {
    this.layout = layout;
    this.horizontal = axis === "horizontal" ? true : false;
    this.direction = direction || "ltr";
    this._dev = dev;
  }
  /**
   * Find CFI pairs for entire section at once
   */
  section(view) {
    var ranges = this.findRanges(view);
    var map = this.rangeListToCfiList(view.section.cfiBase, ranges);
    return map;
  }
  /**
   * Find CFI pairs for a page
   * @param {Contents} contents Contents from view
   * @param {string} cfiBase string of the base for a cfi
   * @param {number} start position to start at
   * @param {number} end position to end at
   */
  page(contents, cfiBase, start, end) {
    var root = contents && contents.document ? contents.document.body : false;
    var result;
    if (!root) {
      return;
    }
    result = this.rangePairToCfiPair(cfiBase, {
      start: this.findStart(root, start, end),
      end: this.findEnd(root, start, end)
    });
    if (this._dev === true) {
      let doc = contents.document;
      let startRange = new epubcfi_default(result.start).toRange(doc);
      let endRange = new epubcfi_default(result.end).toRange(doc);
      let selection = doc.defaultView.getSelection();
      let r = doc.createRange();
      selection.removeAllRanges();
      r.setStart(startRange.startContainer, startRange.startOffset);
      r.setEnd(endRange.endContainer, endRange.endOffset);
      selection.addRange(r);
    }
    return result;
  }
  /**
   * Walk a node, preforming a function on each node it finds
   * @private
   * @param {Node} root Node to walkToNode
   * @param {function} func walk function
   * @return {*} returns the result of the walk function
   */
  walk(root, func) {
    if (root && root.nodeType === Node.TEXT_NODE) {
      return;
    }
    var filter = {
      acceptNode: function(node2) {
        if (node2.data.trim().length > 0) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_REJECT;
        }
      }
    };
    var safeFilter = filter.acceptNode;
    safeFilter.acceptNode = filter.acceptNode;
    var treeWalker2 = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, safeFilter, false);
    var node;
    var result;
    while (node = treeWalker2.nextNode()) {
      result = func(node);
      if (result)
        break;
    }
    return result;
  }
  findRanges(view) {
    var columns = [];
    var scrollWidth = view.contents.scrollWidth();
    var spreads = Math.ceil(scrollWidth / this.layout.spreadWidth);
    var count = spreads * this.layout.divisor;
    var columnWidth = this.layout.columnWidth;
    var gap = this.layout.gap;
    var start, end;
    for (var i = 0; i < count.pages; i++) {
      start = (columnWidth + gap) * i;
      end = columnWidth * (i + 1) + gap * i;
      columns.push({
        start: this.findStart(view.document.body, start, end),
        end: this.findEnd(view.document.body, start, end)
      });
    }
    return columns;
  }
  /**
   * Find Start Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findStart(root, start, end) {
    var stack = [root];
    var $el;
    var found;
    var $prev = root;
    while (stack.length) {
      $el = stack.shift();
      found = this.walk($el, (node) => {
        var left, right, top, bottom;
        var elPos;
        var elRange;
        elPos = nodeBounds(node);
        if (this.horizontal && this.direction === "ltr") {
          left = this.horizontal ? elPos.left : elPos.top;
          right = this.horizontal ? elPos.right : elPos.bottom;
          if (left >= start && left <= end) {
            return node;
          } else if (right > start) {
            return node;
          } else {
            $prev = node;
            stack.push(node);
          }
        } else if (this.horizontal && this.direction === "rtl") {
          left = elPos.left;
          right = elPos.right;
          if (right <= end && right >= start) {
            return node;
          } else if (left < end) {
            return node;
          } else {
            $prev = node;
            stack.push(node);
          }
        } else {
          top = elPos.top;
          bottom = elPos.bottom;
          if (top >= start && top <= end) {
            return node;
          } else if (bottom > start) {
            return node;
          } else {
            $prev = node;
            stack.push(node);
          }
        }
      });
      if (found) {
        return this.findTextStartRange(found, start, end);
      }
    }
    return this.findTextStartRange($prev, start, end);
  }
  /**
   * Find End Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findEnd(root, start, end) {
    var stack = [root];
    var $el;
    var $prev = root;
    var found;
    while (stack.length) {
      $el = stack.shift();
      found = this.walk($el, (node) => {
        var left, right, top, bottom;
        var elPos;
        var elRange;
        elPos = nodeBounds(node);
        if (this.horizontal && this.direction === "ltr") {
          left = Math.round(elPos.left);
          right = Math.round(elPos.right);
          if (left > end && $prev) {
            return $prev;
          } else if (right > end) {
            return node;
          } else {
            $prev = node;
            stack.push(node);
          }
        } else if (this.horizontal && this.direction === "rtl") {
          left = Math.round(this.horizontal ? elPos.left : elPos.top);
          right = Math.round(this.horizontal ? elPos.right : elPos.bottom);
          if (right < start && $prev) {
            return $prev;
          } else if (left < start) {
            return node;
          } else {
            $prev = node;
            stack.push(node);
          }
        } else {
          top = Math.round(elPos.top);
          bottom = Math.round(elPos.bottom);
          if (top > end && $prev) {
            return $prev;
          } else if (bottom > end) {
            return node;
          } else {
            $prev = node;
            stack.push(node);
          }
        }
      });
      if (found) {
        return this.findTextEndRange(found, start, end);
      }
    }
    return this.findTextEndRange($prev, start, end);
  }
  /**
   * Find Text Start Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findTextStartRange(node, start, end) {
    var ranges = this.splitTextNodeIntoRanges(node);
    var range;
    var pos;
    var left, top, right;
    for (var i = 0; i < ranges.length; i++) {
      range = ranges[i];
      pos = range.getBoundingClientRect();
      if (this.horizontal && this.direction === "ltr") {
        left = pos.left;
        if (left >= start) {
          return range;
        }
      } else if (this.horizontal && this.direction === "rtl") {
        right = pos.right;
        if (right <= end) {
          return range;
        }
      } else {
        top = pos.top;
        if (top >= start) {
          return range;
        }
      }
    }
    return ranges[0];
  }
  /**
   * Find Text End Range
   * @private
   * @param {Node} root root node
   * @param {number} start position to start at
   * @param {number} end position to end at
   * @return {Range}
   */
  findTextEndRange(node, start, end) {
    var ranges = this.splitTextNodeIntoRanges(node);
    var prev;
    var range;
    var pos;
    var left, right, top, bottom;
    for (var i = 0; i < ranges.length; i++) {
      range = ranges[i];
      pos = range.getBoundingClientRect();
      if (this.horizontal && this.direction === "ltr") {
        left = pos.left;
        right = pos.right;
        if (left > end && prev) {
          return prev;
        } else if (right > end) {
          return range;
        }
      } else if (this.horizontal && this.direction === "rtl") {
        left = pos.left;
        right = pos.right;
        if (right < start && prev) {
          return prev;
        } else if (left < start) {
          return range;
        }
      } else {
        top = pos.top;
        bottom = pos.bottom;
        if (top > end && prev) {
          return prev;
        } else if (bottom > end) {
          return range;
        }
      }
      prev = range;
    }
    return ranges[ranges.length - 1];
  }
  /**
   * Split up a text node into ranges for each word
   * @private
   * @param {Node} root root node
   * @param {string} [_splitter] what to split on
   * @return {Range[]}
   */
  splitTextNodeIntoRanges(node, _splitter) {
    var ranges = [];
    var textContent = node.textContent || "";
    var text = textContent.trim();
    var range;
    var doc = node.ownerDocument;
    var splitter = _splitter || " ";
    var pos = text.indexOf(splitter);
    if (pos === -1 || node.nodeType != Node.TEXT_NODE) {
      range = doc.createRange();
      range.selectNodeContents(node);
      return [range];
    }
    range = doc.createRange();
    range.setStart(node, 0);
    range.setEnd(node, pos);
    ranges.push(range);
    range = false;
    while (pos != -1) {
      pos = text.indexOf(splitter, pos + 1);
      if (pos > 0) {
        if (range) {
          range.setEnd(node, pos);
          ranges.push(range);
        }
        range = doc.createRange();
        range.setStart(node, pos + 1);
      }
    }
    if (range) {
      range.setEnd(node, text.length);
      ranges.push(range);
    }
    return ranges;
  }
  /**
   * Turn a pair of ranges into a pair of CFIs
   * @private
   * @param {string} cfiBase base string for an EpubCFI
   * @param {object} rangePair { start: Range, end: Range }
   * @return {object} { start: "epubcfi(...)", end: "epubcfi(...)" }
   */
  rangePairToCfiPair(cfiBase, rangePair) {
    var startRange = rangePair.start;
    var endRange = rangePair.end;
    startRange.collapse(true);
    endRange.collapse(false);
    let startCfi = new epubcfi_default(startRange, cfiBase).toString();
    let endCfi = new epubcfi_default(endRange, cfiBase).toString();
    return {
      start: startCfi,
      end: endCfi
    };
  }
  rangeListToCfiList(cfiBase, columns) {
    var map = [];
    var cifPair;
    for (var i = 0; i < columns.length; i++) {
      cifPair = this.rangePairToCfiPair(cfiBase, columns[i]);
      map.push(cifPair);
    }
    return map;
  }
  /**
   * Set the axis for mapping
   * @param {string} axis horizontal | vertical
   * @return {boolean} is it horizontal?
   */
  axis(axis) {
    if (axis) {
      this.horizontal = axis === "horizontal" ? true : false;
    }
    return this.horizontal;
  }
};
var mapping_default = Mapping;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/contents.js
var hasNavigator = typeof navigator !== "undefined";
var isChrome = hasNavigator && /Chrome/.test(navigator.userAgent);
var isWebkit = hasNavigator && !isChrome && /AppleWebKit/.test(navigator.userAgent);
var ELEMENT_NODE3 = 1;
var Contents = class {
  constructor(doc, content, cfiBase, sectionIndex) {
    this.epubcfi = new epubcfi_default();
    this.document = doc;
    this.documentElement = this.document.documentElement;
    this.content = content || this.document.body;
    this.window = this.document.defaultView;
    this._size = {
      width: 0,
      height: 0
    };
    this.sectionIndex = sectionIndex || 0;
    this.cfiBase = cfiBase || "";
    this.epubReadingSystem("epub.js", EPUBJS_VERSION);
    this.listeners();
  }
  /**
  	* Get DOM events that are listened for and passed along
  	*/
  static get listenedEvents() {
    return DOM_EVENTS;
  }
  /**
  	* Get or Set width
  	* @param {number} [w]
  	* @returns {number} width
  	*/
  width(w) {
    var frame = this.content;
    if (w && isNumber(w)) {
      w = w + "px";
    }
    if (w) {
      frame.style.width = w;
    }
    return this.window.getComputedStyle(frame)["width"];
  }
  /**
  	* Get or Set height
  	* @param {number} [h]
  	* @returns {number} height
  	*/
  height(h) {
    var frame = this.content;
    if (h && isNumber(h)) {
      h = h + "px";
    }
    if (h) {
      frame.style.height = h;
    }
    return this.window.getComputedStyle(frame)["height"];
  }
  /**
  	* Get or Set width of the contents
  	* @param {number} [w]
  	* @returns {number} width
  	*/
  contentWidth(w) {
    var content = this.content || this.document.body;
    if (w && isNumber(w)) {
      w = w + "px";
    }
    if (w) {
      content.style.width = w;
    }
    return this.window.getComputedStyle(content)["width"];
  }
  /**
  	* Get or Set height of the contents
  	* @param {number} [h]
  	* @returns {number} height
  	*/
  contentHeight(h) {
    var content = this.content || this.document.body;
    if (h && isNumber(h)) {
      h = h + "px";
    }
    if (h) {
      content.style.height = h;
    }
    return this.window.getComputedStyle(content)["height"];
  }
  /**
  	* Get the width of the text using Range
  	* @returns {number} width
  	*/
  textWidth() {
    let rect;
    let width;
    let range = this.document.createRange();
    let content = this.content || this.document.body;
    let border = borders(content);
    range.selectNodeContents(content);
    rect = range.getBoundingClientRect();
    width = rect.width;
    if (this.content === this.document.body && rect.left) {
      width += rect.left;
    }
    if (border && border.width) {
      width += border.width;
    }
    return Math.round(width);
  }
  /**
  	* Get the height of the text using Range
  	* @returns {number} height
  	*/
  textHeight() {
    let rect;
    let height;
    let range = this.document.createRange();
    let content = this.content || this.document.body;
    let border = borders(content);
    range.selectNodeContents(content);
    rect = range.getBoundingClientRect();
    height = rect.height;
    if (this.content === this.document.body && rect.top) {
      height += rect.top;
    }
    if (height && border.height) {
      height += border.height;
    }
    return Math.round(height);
  }
  /**
  	* Get documentElement scrollWidth
  	* @returns {number} width
  	*/
  scrollWidth() {
    var width = this.documentElement.scrollWidth;
    return width;
  }
  /**
  	* Get documentElement scrollHeight
  	* @returns {number} height
  	*/
  scrollHeight() {
    var height = this.documentElement.scrollHeight;
    return height;
  }
  /**
  	* Set overflow css style of the contents
  	* @param {string} [overflow]
  	*/
  overflow(overflow) {
    if (overflow) {
      this.documentElement.style.overflow = overflow;
    }
    return this.window.getComputedStyle(this.documentElement)["overflow"];
  }
  /**
  	* Set overflowX css style of the documentElement
  	* @param {string} [overflow]
  	*/
  overflowX(overflow) {
    if (overflow) {
      this.documentElement.style.overflowX = overflow;
    }
    return this.window.getComputedStyle(this.documentElement)["overflowX"];
  }
  /**
  	* Set overflowY css style of the documentElement
  	* @param {string} [overflow]
  	*/
  overflowY(overflow) {
    if (overflow) {
      this.documentElement.style.overflowY = overflow;
    }
    return this.window.getComputedStyle(this.documentElement)["overflowY"];
  }
  /**
  	* Set Css styles on the contents element (typically Body)
  	* @param {string} property
  	* @param {string} value
  	* @param {boolean} [priority] set as "important"
  	*/
  css(property, value, priority) {
    var content = this.content || this.document.body;
    if (value) {
      content.style.setProperty(property, value, priority ? "important" : "");
    }
    return this.window.getComputedStyle(content)[property];
  }
  /**
  	* Get or Set the viewport element
  	* @param {object} [options]
  	* @param {string} [options.width]
  	* @param {string} [options.height]
  	* @param {string} [options.scale]
  	* @param {string} [options.minimum]
  	* @param {string} [options.maximum]
  	* @param {string} [options.scalable]
  	*/
  viewport(options) {
    var _width, _height, _scale, _minimum, _maximum, _scalable;
    var $viewport = this.document.querySelector("meta[name='viewport']");
    var parsed = {
      "width": void 0,
      "height": void 0,
      "scale": void 0,
      "minimum": void 0,
      "maximum": void 0,
      "scalable": void 0
    };
    var newContent = [];
    var settings = {};
    if ($viewport && $viewport.hasAttribute("content")) {
      let content = $viewport.getAttribute("content");
      let _width2 = content.match(/width\s*=\s*([^,]*)/);
      let _height2 = content.match(/height\s*=\s*([^,]*)/);
      let _scale2 = content.match(/initial-scale\s*=\s*([^,]*)/);
      let _minimum2 = content.match(/minimum-scale\s*=\s*([^,]*)/);
      let _maximum2 = content.match(/maximum-scale\s*=\s*([^,]*)/);
      let _scalable2 = content.match(/user-scalable\s*=\s*([^,]*)/);
      if (_width2 && _width2.length && typeof _width2[1] !== "undefined") {
        parsed.width = _width2[1];
      }
      if (_height2 && _height2.length && typeof _height2[1] !== "undefined") {
        parsed.height = _height2[1];
      }
      if (_scale2 && _scale2.length && typeof _scale2[1] !== "undefined") {
        parsed.scale = _scale2[1];
      }
      if (_minimum2 && _minimum2.length && typeof _minimum2[1] !== "undefined") {
        parsed.minimum = _minimum2[1];
      }
      if (_maximum2 && _maximum2.length && typeof _maximum2[1] !== "undefined") {
        parsed.maximum = _maximum2[1];
      }
      if (_scalable2 && _scalable2.length && typeof _scalable2[1] !== "undefined") {
        parsed.scalable = _scalable2[1];
      }
    }
    settings = defaults(options || {}, parsed);
    if (options) {
      if (settings.width) {
        newContent.push("width=" + settings.width);
      }
      if (settings.height) {
        newContent.push("height=" + settings.height);
      }
      if (settings.scale) {
        newContent.push("initial-scale=" + settings.scale);
      }
      if (settings.scalable === "no") {
        newContent.push("minimum-scale=" + settings.scale);
        newContent.push("maximum-scale=" + settings.scale);
        newContent.push("user-scalable=" + settings.scalable);
      } else {
        if (settings.scalable) {
          newContent.push("user-scalable=" + settings.scalable);
        }
        if (settings.minimum) {
          newContent.push("minimum-scale=" + settings.minimum);
        }
        if (settings.maximum) {
          newContent.push("minimum-scale=" + settings.maximum);
        }
      }
      if (!$viewport) {
        $viewport = this.document.createElement("meta");
        $viewport.setAttribute("name", "viewport");
        this.document.querySelector("head").appendChild($viewport);
      }
      $viewport.setAttribute("content", newContent.join(", "));
      this.window.scrollTo(0, 0);
    }
    return settings;
  }
  /**
   * Event emitter for when the contents has expanded
   * @private
   */
  expand() {
    this.emit(EVENTS.CONTENTS.EXPAND);
  }
  /**
   * Add DOM listeners
   * @private
   */
  listeners() {
    this.imageLoadListeners();
    this.mediaQueryListeners();
    this.addEventListeners();
    this.addSelectionListeners();
    this.resizeListeners();
    this.linksHandler();
  }
  /**
   * Remove DOM listeners
   * @private
   */
  removeListeners() {
    this.removeEventListeners();
    this.removeSelectionListeners();
    clearTimeout(this.expanding);
  }
  /**
   * Check if size of contents has changed and
   * emit 'resize' event if it has.
   * @private
   */
  resizeCheck() {
    let width = this.textWidth();
    let height = this.textHeight();
    if (width != this._size.width || height != this._size.height) {
      this._size = {
        width,
        height
      };
      this.onResize && this.onResize(this._size);
      this.emit(EVENTS.CONTENTS.RESIZE, this._size);
    }
  }
  /**
   * Poll for resize detection
   * @private
   */
  resizeListeners() {
    var width, height;
    clearTimeout(this.expanding);
    requestAnimationFrame(this.resizeCheck.bind(this));
    this.expanding = setTimeout(this.resizeListeners.bind(this), 350);
  }
  /**
   * Use css transitions to detect resize
   * @private
   */
  transitionListeners() {
    let body = this.content;
    body.style["transitionProperty"] = "font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height";
    body.style["transitionDuration"] = "0.001ms";
    body.style["transitionTimingFunction"] = "linear";
    body.style["transitionDelay"] = "0";
    this.document.addEventListener("transitionend", this.resizeCheck.bind(this));
  }
  /**
   * Listen for media query changes and emit 'expand' event
   * Adapted from: https://github.com/tylergaw/media-query-events/blob/master/js/mq-events.js
   * @private
   */
  mediaQueryListeners() {
    var sheets = this.document.styleSheets;
    var mediaChangeHandler = (function(m) {
      if (m.matches && !this._expanding) {
        setTimeout(this.expand.bind(this), 1);
      }
    }).bind(this);
    for (var i = 0; i < sheets.length; i += 1) {
      var rules;
      try {
        rules = sheets[i].cssRules;
      } catch (e) {
        return;
      }
      if (!rules)
        return;
      for (var j = 0; j < rules.length; j += 1) {
        if (rules[j].media) {
          var mql = this.window.matchMedia(rules[j].media.mediaText);
          mql.addListener(mediaChangeHandler);
        }
      }
    }
  }
  /**
   * Use MutationObserver to listen for changes in the DOM and check for resize
   * @private
   */
  resizeObservers() {
    this.observer = new MutationObserver((mutations) => {
      this.resizeCheck();
    });
    let config = { attributes: true, childList: true, characterData: true, subtree: true };
    this.observer.observe(this.document, config);
  }
  /**
   * Test if images are loaded or add listener for when they load
   * @private
   */
  imageLoadListeners() {
    var images = this.document.querySelectorAll("img");
    var img;
    for (var i = 0; i < images.length; i++) {
      img = images[i];
      if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
        img.onload = this.expand.bind(this);
      }
    }
  }
  /**
   * Listen for font load and check for resize when loaded
   * @private
   */
  fontLoadListeners() {
    if (!this.document || !this.document.fonts) {
      return;
    }
    this.document.fonts.ready.then((function() {
      this.resizeCheck();
    }).bind(this));
  }
  /**
   * Get the documentElement
   * @returns {element} documentElement
   */
  root() {
    if (!this.document)
      return null;
    return this.document.documentElement;
  }
  /**
   * Get the location offset of a EpubCFI or an #id
   * @param {string | EpubCFI} target
   * @param {string} [ignoreClass] for the cfi
   * @returns { {left: Number, top: Number }
   */
  locationOf(target, ignoreClass) {
    var position;
    var targetPos = { "left": 0, "top": 0 };
    if (!this.document)
      return targetPos;
    if (this.epubcfi.isCfiString(target)) {
      let range = new epubcfi_default(target).toRange(this.document, ignoreClass);
      if (range) {
        if (range.startContainer.nodeType === Node.ELEMENT_NODE) {
          position = range.startContainer.getBoundingClientRect();
          targetPos.left = position.left;
          targetPos.top = position.top;
        } else {
          if (isWebkit) {
            let container = range.startContainer;
            let newRange = new Range();
            try {
              if (container.nodeType === ELEMENT_NODE3) {
                position = container.getBoundingClientRect();
              } else if (range.startOffset + 2 < container.length) {
                newRange.setStart(container, range.startOffset);
                newRange.setEnd(container, range.startOffset + 2);
                position = newRange.getBoundingClientRect();
              } else if (range.startOffset - 2 > 0) {
                newRange.setStart(container, range.startOffset - 2);
                newRange.setEnd(container, range.startOffset);
                position = newRange.getBoundingClientRect();
              } else {
                position = container.parentNode.getBoundingClientRect();
              }
            } catch (e) {
              console.error(e, e.stack);
            }
          } else {
            position = range.getBoundingClientRect();
          }
        }
      }
    } else if (typeof target === "string" && target.indexOf("#") > -1) {
      let id = target.substring(target.indexOf("#") + 1);
      let el = this.document.getElementById(id);
      if (el) {
        position = el.getBoundingClientRect();
      }
    }
    if (position) {
      targetPos.left = position.left;
      targetPos.top = position.top;
    }
    return targetPos;
  }
  /**
   * Append a stylesheet link to the document head
   * @param {string} src url
   */
  addStylesheet(src) {
    return new Promise((function(resolve, reject) {
      var $stylesheet;
      var ready = false;
      if (!this.document) {
        resolve(false);
        return;
      }
      $stylesheet = this.document.querySelector("link[href='" + src + "']");
      if ($stylesheet) {
        resolve(true);
        return;
      }
      $stylesheet = this.document.createElement("link");
      $stylesheet.type = "text/css";
      $stylesheet.rel = "stylesheet";
      $stylesheet.href = src;
      $stylesheet.onload = $stylesheet.onreadystatechange = function() {
        if (!ready && (!this.readyState || this.readyState == "complete")) {
          ready = true;
          setTimeout(() => {
            resolve(true);
          }, 1);
        }
      };
      this.document.head.appendChild($stylesheet);
    }).bind(this));
  }
  /**
   * Append stylesheet rules to a generate stylesheet
   * Array: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
   * Object: https://github.com/desirable-objects/json-to-css
   * @param {array | object} rules
   */
  addStylesheetRules(rules) {
    var styleEl;
    var styleSheet;
    var key = "epubjs-inserted-css";
    if (!this.document || !rules || rules.length === 0)
      return;
    styleEl = this.document.getElementById("#" + key);
    if (!styleEl) {
      styleEl = this.document.createElement("style");
      styleEl.id = key;
    }
    this.document.head.appendChild(styleEl);
    styleSheet = styleEl.sheet;
    if (Object.prototype.toString.call(rules) === "[object Array]") {
      for (var i = 0, rl = rules.length; i < rl; i++) {
        var j = 1, rule = rules[i], selector = rules[i][0], propStr = "";
        if (Object.prototype.toString.call(rule[1][0]) === "[object Array]") {
          rule = rule[1];
          j = 0;
        }
        for (var pl = rule.length; j < pl; j++) {
          var prop = rule[j];
          propStr += prop[0] + ":" + prop[1] + (prop[2] ? " !important" : "") + ";\n";
        }
        styleSheet.insertRule(selector + "{" + propStr + "}", styleSheet.cssRules.length);
      }
    } else {
      const selectors = Object.keys(rules);
      selectors.forEach((selector2) => {
        const definition = rules[selector2];
        if (Array.isArray(definition)) {
          definition.forEach((item) => {
            const _rules = Object.keys(item);
            const result = _rules.map((rule2) => {
              return `${rule2}:${item[rule2]}`;
            }).join(";");
            styleSheet.insertRule(`${selector2}{${result}}`, styleSheet.cssRules.length);
          });
        } else {
          const _rules = Object.keys(definition);
          const result = _rules.map((rule2) => {
            return `${rule2}:${definition[rule2]}`;
          }).join(";");
          styleSheet.insertRule(`${selector2}{${result}}`, styleSheet.cssRules.length);
        }
      });
    }
  }
  /**
   * Append a script tag to the document head
   * @param {string} src url
   * @returns {Promise} loaded
   */
  addScript(src) {
    return new Promise((function(resolve, reject) {
      var $script;
      var ready = false;
      if (!this.document) {
        resolve(false);
        return;
      }
      $script = this.document.createElement("script");
      $script.type = "text/javascript";
      $script.async = true;
      $script.src = src;
      $script.onload = $script.onreadystatechange = function() {
        if (!ready && (!this.readyState || this.readyState == "complete")) {
          ready = true;
          setTimeout(function() {
            resolve(true);
          }, 1);
        }
      };
      this.document.head.appendChild($script);
    }).bind(this));
  }
  /**
   * Add a class to the contents container
   * @param {string} className
   */
  addClass(className) {
    var content;
    if (!this.document)
      return;
    content = this.content || this.document.body;
    if (content) {
      content.classList.add(className);
    }
  }
  /**
   * Remove a class from the contents container
   * @param {string} removeClass
   */
  removeClass(className) {
    var content;
    if (!this.document)
      return;
    content = this.content || this.document.body;
    if (content) {
      content.classList.remove(className);
    }
  }
  /**
   * Add DOM event listeners
   * @private
   */
  addEventListeners() {
    if (!this.document) {
      return;
    }
    DOM_EVENTS.forEach(function(eventName) {
      this.document.addEventListener(eventName, this.triggerEvent.bind(this), false);
    }, this);
  }
  /**
   * Remove DOM event listeners
   * @private
   */
  removeEventListeners() {
    if (!this.document) {
      return;
    }
    DOM_EVENTS.forEach(function(eventName) {
      this.document.removeEventListener(eventName, this.triggerEvent, false);
    }, this);
  }
  /**
   * Emit passed browser events
   * @private
   */
  triggerEvent(e) {
    this.emit(e.type, e);
  }
  /**
   * Add listener for text selection
   * @private
   */
  addSelectionListeners() {
    if (!this.document) {
      return;
    }
    this.document.addEventListener("selectionchange", this.onSelectionChange.bind(this), false);
  }
  /**
   * Remove listener for text selection
   * @private
   */
  removeSelectionListeners() {
    if (!this.document) {
      return;
    }
    this.document.removeEventListener("selectionchange", this.onSelectionChange, false);
  }
  /**
   * Handle getting text on selection
   * @private
   */
  onSelectionChange(e) {
    if (this.selectionEndTimeout) {
      clearTimeout(this.selectionEndTimeout);
    }
    this.selectionEndTimeout = setTimeout((function() {
      var selection = this.window.getSelection();
      this.triggerSelectedEvent(selection);
    }).bind(this), 250);
  }
  /**
   * Emit event on text selection
   * @private
   */
  triggerSelectedEvent(selection) {
    var range, cfirange;
    if (selection && selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
      if (!range.collapsed) {
        cfirange = new epubcfi_default(range, this.cfiBase).toString();
        this.emit(EVENTS.CONTENTS.SELECTED, cfirange);
        this.emit(EVENTS.CONTENTS.SELECTED_RANGE, range);
      }
    }
  }
  /**
   * Get a Dom Range from EpubCFI
   * @param {EpubCFI} _cfi
   * @param {string} [ignoreClass]
   * @returns {Range} range
   */
  range(_cfi, ignoreClass) {
    var cfi = new epubcfi_default(_cfi);
    return cfi.toRange(this.document, ignoreClass);
  }
  /**
   * Get an EpubCFI from a Dom Range
   * @param {Range} range
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */
  cfiFromRange(range, ignoreClass) {
    return new epubcfi_default(range, this.cfiBase, ignoreClass).toString();
  }
  /**
   * Get an EpubCFI from a Dom node
   * @param {node} node
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */
  cfiFromNode(node, ignoreClass) {
    return new epubcfi_default(node, this.cfiBase, ignoreClass).toString();
  }
  // TODO: find where this is used - remove?
  map(layout) {
    var map = new mapping_default(layout);
    return map.section();
  }
  /**
   * Size the contents to a given width and height
   * @param {number} [width]
   * @param {number} [height]
   */
  size(width, height) {
    var viewport = { scale: 1, scalable: "no" };
    this.layoutStyle("scrolling");
    if (width >= 0) {
      this.width(width);
      viewport.width = width;
      this.css("padding", "0 " + width / 12 + "px");
    }
    if (height >= 0) {
      this.height(height);
      viewport.height = height;
    }
    this.css("margin", "0");
    this.css("box-sizing", "border-box");
    this.viewport(viewport);
  }
  /**
   * Apply columns to the contents for pagination
   * @param {number} width
   * @param {number} height
   * @param {number} columnWidth
   * @param {number} gap
   */
  columns(width, height, columnWidth, gap) {
    let COLUMN_AXIS = prefixed("column-axis");
    let COLUMN_GAP = prefixed("column-gap");
    let COLUMN_WIDTH = prefixed("column-width");
    let COLUMN_FILL = prefixed("column-fill");
    let writingMode = this.writingMode();
    let axis = writingMode.indexOf("vertical") === 0 ? "vertical" : "horizontal";
    this.layoutStyle("paginated");
    if (this.content.dir === "rtl") {
      this.direction("rtl");
    }
    this.width(width);
    this.height(height);
    this.viewport({ width, height, scale: 1, scalable: "no" });
    this.css("overflow-y", "hidden");
    this.css("margin", "0", true);
    if (axis === "vertical") {
      this.css("padding-top", gap / 2 + "px", true);
      this.css("padding-bottom", gap / 2 + "px", true);
      this.css("padding-left", "20px");
      this.css("padding-right", "20px");
    } else {
      this.css("padding-top", "20px");
      this.css("padding-bottom", "20px");
      this.css("padding-left", gap / 2 + "px", true);
      this.css("padding-right", gap / 2 + "px", true);
    }
    this.css("box-sizing", "border-box");
    this.css("max-width", "inherit");
    this.css(COLUMN_AXIS, "horizontal");
    this.css(COLUMN_FILL, "auto");
    this.css(COLUMN_GAP, gap + "px");
    this.css(COLUMN_WIDTH, columnWidth + "px");
  }
  /**
   * Scale contents from center
   * @param {number} scale
   * @param {number} offsetX
   * @param {number} offsetY
   */
  scaler(scale, offsetX, offsetY) {
    var scaleStr = "scale(" + scale + ")";
    var translateStr = "";
    this.css("transform-origin", "top left");
    if (offsetX >= 0 || offsetY >= 0) {
      translateStr = " translate(" + (offsetX || 0) + "px, " + (offsetY || 0) + "px )";
    }
    this.css("transform", scaleStr + translateStr);
  }
  /**
   * Fit contents into a fixed width and height
   * @param {number} width
   * @param {number} height
   */
  fit(width, height) {
    var viewport = this.viewport();
    var widthScale = width / parseInt(viewport.width);
    var heightScale = height / parseInt(viewport.height);
    var scale = widthScale < heightScale ? widthScale : heightScale;
    var offsetY = (height - viewport.height * scale) / 2;
    this.layoutStyle("paginated");
    this.width(width);
    this.height(height);
    this.overflow("hidden");
    this.scaler(scale, 0, offsetY);
    this.css("background-color", "transparent");
  }
  /**
   * Set the direction of the text
   * @param {string} [dir="ltr"] "rtl" | "ltr"
   */
  direction(dir) {
    if (this.documentElement) {
      this.documentElement.style["direction"] = dir;
    }
  }
  mapPage(cfiBase, layout, start, end, dev) {
    var mapping = new mapping_default(layout, dev);
    return mapping.page(this, cfiBase, start, end);
  }
  /**
   * Emit event when link in content is clicked
   * @private
   */
  linksHandler() {
    replaceLinks(this.content, (href) => {
      this.emit(EVENTS.CONTENTS.LINK_CLICKED, href);
    });
  }
  /**
   * Set the writingMode of the text
   * @param {string} [mode="horizontal-tb"] "horizontal-tb" | "vertical-rl" | "vertical-lr"
   */
  writingMode(mode) {
    let WRITING_MODE = prefixed("writing-mode");
    if (mode && this.documentElement) {
      this.documentElement.style[WRITING_MODE] = mode;
    }
    return this.window.getComputedStyle(this.documentElement)[WRITING_MODE] || "";
  }
  /**
   * Set the layoutStyle of the content
   * @param {string} [style="paginated"] "scrolling" | "paginated"
   * @private
   */
  layoutStyle(style) {
    if (style) {
      this._layoutStyle = style;
      navigator.epubReadingSystem.layoutStyle = this._layoutStyle;
    }
    return this._layoutStyle || "paginated";
  }
  /**
   * Add the epubReadingSystem object to the navigator
   * @param {string} name
   * @param {string} version
   * @private
   */
  epubReadingSystem(name, version) {
    navigator.epubReadingSystem = {
      name,
      version,
      layoutStyle: this.layoutStyle(),
      hasFeature: function(feature) {
        switch (feature) {
          case "dom-manipulation":
            return true;
          case "layout-changes":
            return true;
          case "touch-events":
            return true;
          case "mouse-events":
            return true;
          case "keyboard-events":
            return true;
          case "spine-scripting":
            return false;
          default:
            return false;
        }
      }
    };
    return navigator.epubReadingSystem;
  }
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.document.removeEventListener("transitionend", this.resizeCheck);
    this.removeListeners();
  }
};
(0, import_event_emitter3.default)(Contents.prototype);
var contents_default = Contents;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/annotations.js
var import_event_emitter4 = __toESM(require_event_emitter());
var Annotations = class {
  constructor(rendition) {
    this.rendition = rendition;
    this.highlights = [];
    this.underlines = [];
    this.marks = [];
    this._annotations = {};
    this._annotationsBySectionIndex = {};
    this.rendition.hooks.render.register(this.inject.bind(this));
    this.rendition.hooks.unloaded.register(this.clear.bind(this));
  }
  /**
   * Add an annotation to store
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} [cb] Callback after annotation is added
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   * @returns {Annotation} annotation
   */
  add(type2, cfiRange, data, cb, className, styles) {
    let hash = encodeURI(cfiRange);
    let cfi = new epubcfi_default(cfiRange);
    let sectionIndex = cfi.spinePos;
    let annotation = new Annotation({
      type: type2,
      cfiRange,
      data,
      sectionIndex,
      cb,
      className,
      styles
    });
    this._annotations[hash] = annotation;
    if (sectionIndex in this._annotationsBySectionIndex) {
      this._annotationsBySectionIndex[sectionIndex].push(hash);
    } else {
      this._annotationsBySectionIndex[sectionIndex] = [hash];
    }
    let views = this.rendition.views();
    views.forEach((view) => {
      if (annotation.sectionIndex === view.index) {
        annotation.attach(view);
      }
    });
    return annotation;
  }
  /**
   * Remove an annotation from store
   * @param {EpubCFI} cfiRange EpubCFI range the annotation is attached to
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   */
  remove(cfiRange, type2) {
    let hash = encodeURI(cfiRange);
    if (hash in this._annotations) {
      let annotation = this._annotations[hash];
      if (type2 && annotation.type !== type2) {
        return;
      }
      let views = this.rendition.views();
      views.forEach((view) => {
        this._removeFromAnnotationBySectionIndex(annotation.sectionIndex, hash);
        if (annotation.sectionIndex === view.index) {
          annotation.detach(view);
        }
      });
      delete this._annotations[hash];
    }
  }
  /**
   * Remove an annotations by Section Index
   * @private
   */
  _removeFromAnnotationBySectionIndex(sectionIndex, hash) {
    this._annotationsBySectionIndex[sectionIndex] = this._annotationsAt(sectionIndex).filter((h) => h !== hash);
  }
  /**
   * Get annotations by Section Index
   * @private
   */
  _annotationsAt(index) {
    return this._annotationsBySectionIndex[index];
  }
  /**
   * Add a highlight to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is added
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   */
  highlight(cfiRange, data, cb, className, styles) {
    this.add("highlight", cfiRange, data, cb, className, styles);
  }
  /**
   * Add a underline to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is added
   * @param {string} className CSS class to assign to annotation
   * @param {object} styles CSS styles to assign to annotation
   */
  underline(cfiRange, data, cb, className, styles) {
    this.add("underline", cfiRange, data, cb, className, styles);
  }
  /**
   * Add a mark to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is added
   */
  mark(cfiRange, data, cb) {
    this.add("mark", cfiRange, data, cb);
  }
  /**
   * iterate over annotations in the store
   */
  each() {
    return this._annotations.forEach.apply(this._annotations, arguments);
  }
  /**
   * Hook for injecting annotation into a view
   * @param {View} view
   * @private
   */
  inject(view) {
    let sectionIndex = view.index;
    if (sectionIndex in this._annotationsBySectionIndex) {
      let annotations = this._annotationsBySectionIndex[sectionIndex];
      annotations.forEach((hash) => {
        let annotation = this._annotations[hash];
        annotation.attach(view);
      });
    }
  }
  /**
   * Hook for removing annotation from a view
   * @param {View} view
   * @private
   */
  clear(view) {
    let sectionIndex = view.index;
    if (sectionIndex in this._annotationsBySectionIndex) {
      let annotations = this._annotationsBySectionIndex[sectionIndex];
      annotations.forEach((hash) => {
        let annotation = this._annotations[hash];
        annotation.detach(view);
      });
    }
  }
  /**
   * [Not Implemented] Show annotations
   * @TODO: needs implementation in View
   */
  show() {
  }
  /**
   * [Not Implemented] Hide annotations
   * @TODO: needs implementation in View
   */
  hide() {
  }
};
var Annotation = class {
  constructor({
    type: type2,
    cfiRange,
    data,
    sectionIndex,
    cb,
    className,
    styles
  }) {
    this.type = type2;
    this.cfiRange = cfiRange;
    this.data = data;
    this.sectionIndex = sectionIndex;
    this.mark = void 0;
    this.cb = cb;
    this.className = className;
    this.styles = styles;
  }
  /**
   * Update stored data
   * @param {object} data
   */
  update(data) {
    this.data = data;
  }
  /**
   * Add to a view
   * @param {View} view
   */
  attach(view) {
    let { cfiRange, data, type: type2, mark, cb, className, styles } = this;
    let result;
    if (type2 === "highlight") {
      result = view.highlight(cfiRange, data, cb, className, styles);
    } else if (type2 === "underline") {
      result = view.underline(cfiRange, data, cb, className, styles);
    } else if (type2 === "mark") {
      result = view.mark(cfiRange, data, cb);
    }
    this.mark = result;
    return result;
  }
  /**
   * Remove from a view
   * @param {View} view
   */
  detach(view) {
    let { cfiRange, type: type2 } = this;
    let result;
    if (view) {
      if (type2 === "highlight") {
        result = view.unhighlight(cfiRange);
      } else if (type2 === "underline") {
        result = view.ununderline(cfiRange);
      } else if (type2 === "mark") {
        result = view.unmark(cfiRange);
      }
    }
    this.mark = void 0;
    return result;
  }
  /**
   * [Not Implemented] Get text of an annotation
   * @TODO: needs implementation in contents
   */
  text() {
  }
};
(0, import_event_emitter4.default)(Annotation.prototype);
var annotations_default = Annotations;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/managers/views/iframe.js
var import_event_emitter5 = __toESM(require_event_emitter());
init_core();
var import_marks_pane = __toESM(require_marks());
var IframeView = class {
  constructor(section, options) {
    this.settings = extend({
      ignoreClass: "",
      axis: options.layout && options.layout.props.flow === "scrolled" ? "vertical" : "horizontal",
      direction: void 0,
      width: 0,
      height: 0,
      layout: void 0,
      globalLayoutProperties: {},
      method: void 0
    }, options || {});
    this.id = "epubjs-view-" + uuid();
    this.section = section;
    this.index = section.index;
    this.element = this.container(this.settings.axis);
    this.added = false;
    this.displayed = false;
    this.rendered = false;
    this.fixedWidth = 0;
    this.fixedHeight = 0;
    this.epubcfi = new epubcfi_default();
    this.layout = this.settings.layout;
    this.pane = void 0;
    this.highlights = {};
    this.underlines = {};
    this.marks = {};
  }
  container(axis) {
    var element = document.createElement("div");
    element.classList.add("epub-view");
    element.style.height = "0px";
    element.style.width = "0px";
    element.style.overflow = "hidden";
    element.style.position = "relative";
    element.style.display = "block";
    if (axis && axis == "horizontal") {
      element.style.flex = "none";
    } else {
      element.style.flex = "initial";
    }
    return element;
  }
  create() {
    if (this.iframe) {
      return this.iframe;
    }
    if (!this.element) {
      this.element = this.createContainer();
    }
    this.iframe = document.createElement("iframe");
    this.iframe.id = this.id;
    this.iframe.scrolling = "no";
    this.iframe.style.overflow = "hidden";
    this.iframe.seamless = "seamless";
    this.iframe.style.border = "none";
    this.iframe.setAttribute("enable-annotation", "true");
    this.resizing = true;
    this.element.style.visibility = "hidden";
    this.iframe.style.visibility = "hidden";
    this.iframe.style.width = "0";
    this.iframe.style.height = "0";
    this._width = 0;
    this._height = 0;
    this.element.setAttribute("ref", this.index);
    this.element.appendChild(this.iframe);
    this.added = true;
    this.elementBounds = bounds(this.element);
    if ("srcdoc" in this.iframe) {
      this.supportsSrcdoc = true;
    } else {
      this.supportsSrcdoc = false;
    }
    if (!this.settings.method) {
      this.settings.method = this.supportsSrcdoc ? "srcdoc" : "write";
    }
    return this.iframe;
  }
  render(request2, show) {
    this.create();
    this.size();
    if (!this.sectionRender) {
      this.sectionRender = this.section.render(request2);
    }
    return this.sectionRender.then((function(contents) {
      return this.load(contents);
    }).bind(this)).then((function() {
      this.layout.format(this.contents);
      let writingMode = this.contents.writingMode();
      let axis = writingMode.indexOf("vertical") === 0 ? "vertical" : "horizontal";
      this.setAxis(axis);
      this.emit(EVENTS.VIEWS.AXIS, axis);
      this.addListeners();
      return new Promise((resolve, reject) => {
        this.expand();
        resolve();
      });
    }).bind(this), (function(e) {
      this.emit(EVENTS.VIEWS.LOAD_ERROR, e);
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }).bind(this)).then((function() {
      this.emit(EVENTS.VIEWS.RENDERED, this.section);
    }).bind(this));
  }
  reset() {
    if (this.iframe) {
      this.iframe.style.width = "0";
      this.iframe.style.height = "0";
      this._width = 0;
      this._height = 0;
      this._textWidth = void 0;
      this._contentWidth = void 0;
      this._textHeight = void 0;
      this._contentHeight = void 0;
    }
    this._needsReframe = true;
  }
  // Determine locks base on settings
  size(_width, _height) {
    var width = _width || this.settings.width;
    var height = _height || this.settings.height;
    if (this.layout.name === "pre-paginated") {
      this.lock("both", width, height);
    } else if (this.settings.axis === "horizontal") {
      this.lock("height", width, height);
    } else {
      this.lock("width", width, height);
    }
    this.settings.width = width;
    this.settings.height = height;
  }
  // Lock an axis to element dimensions, taking borders into account
  lock(what, width, height) {
    var elBorders = borders(this.element);
    var iframeBorders;
    if (this.iframe) {
      iframeBorders = borders(this.iframe);
    } else {
      iframeBorders = { width: 0, height: 0 };
    }
    if (what == "width" && isNumber(width)) {
      this.lockedWidth = width - elBorders.width - iframeBorders.width;
    }
    if (what == "height" && isNumber(height)) {
      this.lockedHeight = height - elBorders.height - iframeBorders.height;
    }
    if (what === "both" && isNumber(width) && isNumber(height)) {
      this.lockedWidth = width - elBorders.width - iframeBorders.width;
      this.lockedHeight = height - elBorders.height - iframeBorders.height;
    }
    if (this.displayed && this.iframe) {
      this.expand();
    }
  }
  // Resize a single axis based on content dimensions
  expand(force) {
    var width = this.lockedWidth;
    var height = this.lockedHeight;
    var columns;
    var textWidth, textHeight;
    if (!this.iframe || this._expanding)
      return;
    this._expanding = true;
    if (this.layout.name === "pre-paginated") {
      width = this.layout.columnWidth;
      height = this.layout.height;
    } else if (this.settings.axis === "horizontal") {
      width = this.contents.textWidth();
      if (width % this.layout.pageWidth > 0) {
        width = Math.ceil(width / this.layout.pageWidth) * this.layout.pageWidth;
      }
      if (this.settings.forceEvenPages) {
        columns = width / this.layout.delta;
        if (this.layout.divisor > 1 && this.layout.name === "reflowable" && columns % 2 > 0) {
          width += this.layout.gap + this.layout.columnWidth;
        }
      }
    } else if (this.settings.axis === "vertical") {
      height = this.contents.textHeight();
    }
    if (this._needsReframe || width != this._width || height != this._height) {
      this.reframe(width, height);
    }
    this._expanding = false;
  }
  reframe(width, height) {
    var size;
    if (isNumber(width)) {
      this.element.style.width = width + "px";
      this.iframe.style.width = width + "px";
      this._width = width;
    }
    if (isNumber(height)) {
      this.element.style.height = height + "px";
      this.iframe.style.height = height + "px";
      this._height = height;
    }
    let widthDelta = this.prevBounds ? width - this.prevBounds.width : width;
    let heightDelta = this.prevBounds ? height - this.prevBounds.height : height;
    size = {
      width,
      height,
      widthDelta,
      heightDelta
    };
    this.pane && this.pane.render();
    this.onResize(this, size);
    this.emit(EVENTS.VIEWS.RESIZED, size);
    this.prevBounds = size;
    this.elementBounds = bounds(this.element);
  }
  load(contents) {
    var loading = new defer();
    var loaded = loading.promise;
    if (!this.iframe) {
      loading.reject(new Error("No Iframe Available"));
      return loaded;
    }
    this.iframe.onload = (function(event) {
      this.onLoad(event, loading);
    }).bind(this);
    if (this.settings.method === "blobUrl") {
      this.blobUrl = createBlobUrl(contents, "application/xhtml+xml");
      this.iframe.src = this.blobUrl;
    } else if (this.settings.method === "srcdoc") {
      this.iframe.srcdoc = contents;
    } else {
      this.document = this.iframe.contentDocument;
      if (!this.document) {
        loading.reject(new Error("No Document Available"));
        return loaded;
      }
      this.iframe.contentDocument.open();
      this.iframe.contentDocument.write(contents);
      this.iframe.contentDocument.close();
    }
    return loaded;
  }
  onLoad(event, promise) {
    this.window = this.iframe.contentWindow;
    this.document = this.iframe.contentDocument;
    this.contents = new contents_default(this.document, this.document.body, this.section.cfiBase, this.section.index);
    this.rendering = false;
    var link = this.document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", this.section.canonical);
    } else {
      link = this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", this.section.canonical);
      this.document.querySelector("head").appendChild(link);
    }
    this.contents.on(EVENTS.CONTENTS.EXPAND, () => {
      if (this.displayed && this.iframe) {
        this.expand();
        if (this.contents) {
          this.layout.format(this.contents);
        }
      }
    });
    this.contents.on(EVENTS.CONTENTS.RESIZE, (e) => {
      if (this.displayed && this.iframe) {
        this.expand();
        if (this.contents) {
          this.layout.format(this.contents);
        }
      }
    });
    promise.resolve(this.contents);
  }
  setLayout(layout) {
    this.layout = layout;
    if (this.contents) {
      this.layout.format(this.contents);
      this.expand();
    }
  }
  setAxis(axis) {
    if (this.layout.props.flow === "scrolled") {
      axis = "vertical";
    }
    this.settings.axis = axis;
    if (axis == "horizontal") {
      this.element.style.flex = "none";
    } else {
      this.element.style.flex = "initial";
    }
    this.size();
  }
  addListeners() {
  }
  removeListeners(layoutFunc) {
  }
  display(request2) {
    var displayed = new defer();
    if (!this.displayed) {
      this.render(request2).then((function() {
        this.emit(EVENTS.VIEWS.DISPLAYED, this);
        this.onDisplayed(this);
        this.displayed = true;
        displayed.resolve(this);
      }).bind(this), function(err) {
        displayed.reject(err, this);
      });
    } else {
      displayed.resolve(this);
    }
    return displayed.promise;
  }
  show() {
    this.element.style.visibility = "visible";
    if (this.iframe) {
      this.iframe.style.visibility = "visible";
      this.iframe.style.transform = "translateZ(0)";
      this.iframe.offsetWidth;
      this.iframe.style.transform = null;
    }
    this.emit(EVENTS.VIEWS.SHOWN, this);
  }
  hide() {
    this.element.style.visibility = "hidden";
    this.iframe.style.visibility = "hidden";
    this.stopExpanding = true;
    this.emit(EVENTS.VIEWS.HIDDEN, this);
  }
  offset() {
    return {
      top: this.element.offsetTop,
      left: this.element.offsetLeft
    };
  }
  width() {
    return this._width;
  }
  height() {
    return this._height;
  }
  position() {
    return this.element.getBoundingClientRect();
  }
  locationOf(target) {
    var parentPos = this.iframe.getBoundingClientRect();
    var targetPos = this.contents.locationOf(target, this.settings.ignoreClass);
    return {
      "left": targetPos.left,
      "top": targetPos.top
    };
  }
  onDisplayed(view) {
  }
  onResize(view, e) {
  }
  bounds(force) {
    if (force || !this.elementBounds) {
      this.elementBounds = bounds(this.element);
    }
    return this.elementBounds;
  }
  highlight(cfiRange, data = {}, cb, className = "epubjs-hl", styles = {}) {
    if (!this.contents) {
      return;
    }
    const attributes = Object.assign({ "fill": "yellow", "fill-opacity": "0.3", "mix-blend-mode": "multiply" }, styles);
    let range = this.contents.range(cfiRange);
    let emitter = () => {
      this.emit(EVENTS.VIEWS.MARK_CLICKED, cfiRange, data);
    };
    data["epubcfi"] = cfiRange;
    if (!this.pane) {
      this.pane = new import_marks_pane.Pane(this.iframe, this.element);
    }
    let m = new import_marks_pane.Highlight(range, className, data, attributes);
    let h = this.pane.addMark(m);
    this.highlights[cfiRange] = { "mark": h, "element": h.element, "listeners": [emitter, cb] };
    h.element.setAttribute("ref", className);
    h.element.addEventListener("click", emitter);
    h.element.addEventListener("touchstart", emitter);
    if (cb) {
      h.element.addEventListener("click", cb);
      h.element.addEventListener("touchstart", cb);
    }
    return h;
  }
  underline(cfiRange, data = {}, cb, className = "epubjs-ul", styles = {}) {
    if (!this.contents) {
      return;
    }
    const attributes = Object.assign({ "stroke": "black", "stroke-opacity": "0.3", "mix-blend-mode": "multiply" }, styles);
    let range = this.contents.range(cfiRange);
    let emitter = () => {
      this.emit(EVENTS.VIEWS.MARK_CLICKED, cfiRange, data);
    };
    data["epubcfi"] = cfiRange;
    if (!this.pane) {
      this.pane = new import_marks_pane.Pane(this.iframe, this.element);
    }
    let m = new import_marks_pane.Underline(range, className, data, attributes);
    let h = this.pane.addMark(m);
    this.underlines[cfiRange] = { "mark": h, "element": h.element, "listeners": [emitter, cb] };
    h.element.setAttribute("ref", className);
    h.element.addEventListener("click", emitter);
    h.element.addEventListener("touchstart", emitter);
    if (cb) {
      h.element.addEventListener("click", cb);
      h.element.addEventListener("touchstart", cb);
    }
    return h;
  }
  mark(cfiRange, data = {}, cb) {
    if (!this.contents) {
      return;
    }
    if (cfiRange in this.marks) {
      let item = this.marks[cfiRange];
      return item;
    }
    let range = this.contents.range(cfiRange);
    if (!range) {
      return;
    }
    let container = range.commonAncestorContainer;
    let parent2 = container.nodeType === 1 ? container : container.parentNode;
    let emitter = (e) => {
      this.emit(EVENTS.VIEWS.MARK_CLICKED, cfiRange, data);
    };
    if (range.collapsed && container.nodeType === 1) {
      range = new Range();
      range.selectNodeContents(container);
    } else if (range.collapsed) {
      range = new Range();
      range.selectNodeContents(parent2);
    }
    let top, right, left;
    if (this.layout.name === "pre-paginated" || this.settings.axis !== "horizontal") {
      let pos = range.getBoundingClientRect();
      top = pos.top;
      right = pos.right;
    } else {
      let rects = range.getClientRects();
      let rect;
      for (var i = 0; i != rects.length; i++) {
        rect = rects[i];
        if (!left || rect.left < left) {
          left = rect.left;
          right = left + this.layout.columnWidth - this.layout.gap;
          top = rect.top;
        }
      }
    }
    let mark = this.document.createElement("a");
    mark.setAttribute("ref", "epubjs-mk");
    mark.style.position = "absolute";
    mark.style.top = `${top}px`;
    mark.style.left = `${right}px`;
    mark.dataset["epubcfi"] = cfiRange;
    if (data) {
      Object.keys(data).forEach((key) => {
        mark.dataset[key] = data[key];
      });
    }
    if (cb) {
      mark.addEventListener("click", cb);
      mark.addEventListener("touchstart", cb);
    }
    mark.addEventListener("click", emitter);
    mark.addEventListener("touchstart", emitter);
    this.element.appendChild(mark);
    this.marks[cfiRange] = { "element": mark, "listeners": [emitter, cb] };
    return parent2;
  }
  unhighlight(cfiRange) {
    let item;
    if (cfiRange in this.highlights) {
      item = this.highlights[cfiRange];
      this.pane.removeMark(item.mark);
      item.listeners.forEach((l) => {
        if (l) {
          item.element.removeEventListener("click", l);
        }
        ;
      });
      delete this.highlights[cfiRange];
    }
  }
  ununderline(cfiRange) {
    let item;
    if (cfiRange in this.underlines) {
      item = this.underlines[cfiRange];
      this.pane.removeMark(item.mark);
      item.listeners.forEach((l) => {
        if (l) {
          item.element.removeEventListener("click", l);
        }
        ;
      });
      delete this.underlines[cfiRange];
    }
  }
  unmark(cfiRange) {
    let item;
    if (cfiRange in this.marks) {
      item = this.marks[cfiRange];
      this.element.removeChild(item.element);
      item.listeners.forEach((l) => {
        if (l) {
          item.element.removeEventListener("click", l);
        }
        ;
      });
      delete this.marks[cfiRange];
    }
  }
  destroy() {
    for (let cfiRange in this.highlights) {
      this.unhighlight(cfiRange);
    }
    for (let cfiRange in this.underlines) {
      this.ununderline(cfiRange);
    }
    for (let cfiRange in this.marks) {
      this.unmark(cfiRange);
    }
    if (this.blobUrl) {
      revokeBlobUrl(this.blobUrl);
    }
    if (this.displayed) {
      this.displayed = false;
      this.removeListeners();
      this.stopExpanding = true;
      this.element.removeChild(this.iframe);
      this.iframe = void 0;
      this.contents = void 0;
      this._textWidth = null;
      this._textHeight = null;
      this._width = null;
      this._height = null;
    }
  }
};
(0, import_event_emitter5.default)(IframeView.prototype);
var iframe_default = IframeView;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/managers/default/index.js
var import_event_emitter6 = __toESM(require_event_emitter());
init_core();

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/managers/helpers/stage.js
init_core();
var import_throttle = __toESM(require_throttle());
var Stage = class {
  constructor(_options) {
    this.settings = _options || {};
    this.id = "epubjs-container-" + uuid();
    this.container = this.create(this.settings);
    if (this.settings.hidden) {
      this.wrapper = this.wrap(this.container);
    }
  }
  /*
  * Creates an element to render to.
  * Resizes to passed width and height or to the elements size
  */
  create(options) {
    let height = options.height;
    let width = options.width;
    let overflow = options.overflow || false;
    let axis = options.axis || "vertical";
    let direction = options.direction;
    if (options.height && isNumber(options.height)) {
      height = options.height + "px";
    }
    if (options.width && isNumber(options.width)) {
      width = options.width + "px";
    }
    let container = document.createElement("div");
    container.id = this.id;
    container.classList.add("epub-container");
    container.style.wordSpacing = "0";
    container.style.lineHeight = "0";
    container.style.verticalAlign = "top";
    container.style.position = "relative";
    if (axis === "horizontal") {
      container.style.display = "flex";
      container.style.flexDirection = "row";
      container.style.flexWrap = "nowrap";
    }
    if (width) {
      container.style.width = width;
    }
    if (height) {
      container.style.height = height;
    }
    if (overflow) {
      container.style.overflow = overflow;
    }
    if (direction) {
      container.dir = direction;
      container.style["direction"] = direction;
    }
    if (direction && this.settings.fullsize) {
      document.body.style["direction"] = direction;
    }
    return container;
  }
  wrap(container) {
    var wrapper = document.createElement("div");
    wrapper.style.visibility = "hidden";
    wrapper.style.overflow = "hidden";
    wrapper.style.width = "0";
    wrapper.style.height = "0";
    wrapper.appendChild(container);
    return wrapper;
  }
  getElement(_element) {
    var element;
    if (isElement(_element)) {
      element = _element;
    } else if (typeof _element === "string") {
      element = document.getElementById(_element);
    }
    if (!element) {
      throw new Error("Not an Element");
    }
    return element;
  }
  attachTo(what) {
    var element = this.getElement(what);
    var base;
    if (!element) {
      return;
    }
    if (this.settings.hidden) {
      base = this.wrapper;
    } else {
      base = this.container;
    }
    element.appendChild(base);
    this.element = element;
    return element;
  }
  getContainer() {
    return this.container;
  }
  onResize(func) {
    if (!isNumber(this.settings.width) || !isNumber(this.settings.height)) {
      this.resizeFunc = (0, import_throttle.default)(func, 50);
      window.addEventListener("resize", this.resizeFunc, false);
    }
  }
  onOrientationChange(func) {
    this.orientationChangeFunc = func;
    window.addEventListener("orientationchange", this.orientationChangeFunc, false);
  }
  size(width, height) {
    var bounds2;
    if (width === null) {
      bounds2 = this.element.getBoundingClientRect();
      if (bounds2.width) {
        width = Math.floor(bounds2.width);
        this.container.style.width = width + "px";
      }
    } else {
      if (isNumber(width)) {
        this.container.style.width = width + "px";
      } else {
        this.container.style.width = width;
      }
    }
    if (height === null) {
      bounds2 = bounds2 || this.element.getBoundingClientRect();
      if (bounds2.height) {
        height = bounds2.height;
        this.container.style.height = height + "px";
      }
    } else {
      if (isNumber(height)) {
        this.container.style.height = height + "px";
      } else {
        this.container.style.height = height;
      }
    }
    if (!isNumber(width)) {
      bounds2 = this.container.getBoundingClientRect();
      width = Math.floor(bounds2.width);
    }
    if (!isNumber(height)) {
      bounds2 = bounds2 || this.container.getBoundingClientRect();
      height = bounds2.height;
    }
    this.containerStyles = window.getComputedStyle(this.container);
    this.containerPadding = {
      left: parseFloat(this.containerStyles["padding-left"]) || 0,
      right: parseFloat(this.containerStyles["padding-right"]) || 0,
      top: parseFloat(this.containerStyles["padding-top"]) || 0,
      bottom: parseFloat(this.containerStyles["padding-bottom"]) || 0
    };
    let _windowBounds = windowBounds();
    let bodyStyles = window.getComputedStyle(document.body);
    let bodyPadding = {
      left: parseFloat(bodyStyles["padding-left"]) || 0,
      right: parseFloat(bodyStyles["padding-right"]) || 0,
      top: parseFloat(bodyStyles["padding-top"]) || 0,
      bottom: parseFloat(bodyStyles["padding-bottom"]) || 0
    };
    if (!width) {
      width = _windowBounds.width - bodyPadding.left - bodyPadding.right;
    }
    if (this.settings.fullsize && !height || !height) {
      height = _windowBounds.height - bodyPadding.top - bodyPadding.bottom;
    }
    return {
      width: width - this.containerPadding.left - this.containerPadding.right,
      height: height - this.containerPadding.top - this.containerPadding.bottom
    };
  }
  bounds() {
    let box;
    if (this.container.style.overflow !== "visible") {
      box = this.container && this.container.getBoundingClientRect();
    }
    if (!box || !box.width || !box.height) {
      return windowBounds();
    } else {
      return box;
    }
  }
  getSheet() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style.sheet;
  }
  addStyleRules(selector, rulesArray) {
    var scope = "#" + this.id + " ";
    var rules = "";
    if (!this.sheet) {
      this.sheet = this.getSheet();
    }
    rulesArray.forEach(function(set) {
      for (var prop in set) {
        if (set.hasOwnProperty(prop)) {
          rules += prop + ":" + set[prop] + ";";
        }
      }
    });
    this.sheet.insertRule(scope + selector + " {" + rules + "}", 0);
  }
  axis(axis) {
    if (axis === "horizontal") {
      this.container.style.display = "flex";
      this.container.style.flexDirection = "row";
      this.container.style.flexWrap = "nowrap";
    } else {
      this.container.style.display = "block";
    }
  }
  // orientation(orientation) {
  // 	if (orientation === "landscape") {
  //
  // 	} else {
  //
  // 	}
  //
  // 	this.orientation = orientation;
  // }
  direction(dir) {
    if (this.container) {
      this.container.dir = dir;
      this.container.style["direction"] = dir;
    }
    if (this.settings.fullsize) {
      document.body.style["direction"] = dir;
    }
  }
  destroy() {
    var base;
    if (this.element) {
      if (this.settings.hidden) {
        base = this.wrapper;
      } else {
        base = this.container;
      }
      if (this.element.contains(this.container)) {
        this.element.removeChild(this.container);
      }
      window.removeEventListener("resize", this.resizeFunc);
      window.removeEventListener("orientationChange", this.orientationChangeFunc);
    }
  }
};
var stage_default = Stage;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/managers/helpers/views.js
var Views = class {
  constructor(container) {
    this.container = container;
    this._views = [];
    this.length = 0;
    this.hidden = false;
  }
  all() {
    return this._views;
  }
  first() {
    return this._views[0];
  }
  last() {
    return this._views[this._views.length - 1];
  }
  indexOf(view) {
    return this._views.indexOf(view);
  }
  slice() {
    return this._views.slice.apply(this._views, arguments);
  }
  get(i) {
    return this._views[i];
  }
  append(view) {
    this._views.push(view);
    if (this.container) {
      this.container.appendChild(view.element);
    }
    this.length++;
    return view;
  }
  prepend(view) {
    this._views.unshift(view);
    if (this.container) {
      this.container.insertBefore(view.element, this.container.firstChild);
    }
    this.length++;
    return view;
  }
  insert(view, index) {
    this._views.splice(index, 0, view);
    if (this.container) {
      if (index < this.container.children.length) {
        this.container.insertBefore(view.element, this.container.children[index]);
      } else {
        this.container.appendChild(view.element);
      }
    }
    this.length++;
    return view;
  }
  remove(view) {
    var index = this._views.indexOf(view);
    if (index > -1) {
      this._views.splice(index, 1);
    }
    this.destroy(view);
    this.length--;
  }
  destroy(view) {
    if (view.displayed) {
      view.destroy();
    }
    if (this.container) {
      this.container.removeChild(view.element);
    }
    view = null;
  }
  // Iterators
  forEach() {
    return this._views.forEach.apply(this._views, arguments);
  }
  clear() {
    var view;
    var len = this.length;
    if (!this.length)
      return;
    for (var i = 0; i < len; i++) {
      view = this._views[i];
      this.destroy(view);
    }
    this._views = [];
    this.length = 0;
  }
  find(section) {
    var view;
    var len = this.length;
    for (var i = 0; i < len; i++) {
      view = this._views[i];
      if (view.displayed && view.section.index == section.index) {
        return view;
      }
    }
  }
  displayed() {
    var displayed = [];
    var view;
    var len = this.length;
    for (var i = 0; i < len; i++) {
      view = this._views[i];
      if (view.displayed) {
        displayed.push(view);
      }
    }
    return displayed;
  }
  show() {
    var view;
    var len = this.length;
    for (var i = 0; i < len; i++) {
      view = this._views[i];
      if (view.displayed) {
        view.show();
      }
    }
    this.hidden = false;
  }
  hide() {
    var view;
    var len = this.length;
    for (var i = 0; i < len; i++) {
      view = this._views[i];
      if (view.displayed) {
        view.hide();
      }
    }
    this.hidden = true;
  }
};
var views_default = Views;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/managers/default/index.js
var DefaultViewManager = class {
  constructor(options) {
    this.name = "default";
    this.optsSettings = options.settings;
    this.View = options.view;
    this.request = options.request;
    this.renditionQueue = options.queue;
    this.q = new queue_default(this);
    this.settings = extend(this.settings || {}, {
      infinite: true,
      hidden: false,
      width: void 0,
      height: void 0,
      axis: void 0,
      flow: "scrolled",
      ignoreClass: "",
      fullsize: void 0
    });
    extend(this.settings, options.settings || {});
    this.viewSettings = {
      ignoreClass: this.settings.ignoreClass,
      axis: this.settings.axis,
      flow: this.settings.flow,
      layout: this.layout,
      method: this.settings.method,
      // srcdoc, blobUrl, write
      width: 0,
      height: 0,
      forceEvenPages: true
    };
    this.rendered = false;
  }
  render(element, size) {
    let tag = element.tagName;
    if (typeof this.settings.fullsize === "undefined" && tag && (tag.toLowerCase() == "body" || tag.toLowerCase() == "html")) {
      this.settings.fullsize = true;
    }
    if (this.settings.fullsize) {
      this.settings.overflow = "visible";
      this.overflow = this.settings.overflow;
    }
    this.settings.size = size;
    this.stage = new stage_default({
      width: size.width,
      height: size.height,
      overflow: this.overflow,
      hidden: this.settings.hidden,
      axis: this.settings.axis,
      fullsize: this.settings.fullsize,
      direction: this.settings.direction
    });
    this.stage.attachTo(element);
    this.container = this.stage.getContainer();
    this.views = new views_default(this.container);
    this._bounds = this.bounds();
    this._stageSize = this.stage.size();
    this.viewSettings.width = this._stageSize.width;
    this.viewSettings.height = this._stageSize.height;
    this.stage.onResize(this.onResized.bind(this));
    this.stage.onOrientationChange(this.onOrientationChange.bind(this));
    this.addEventListeners();
    if (this.layout) {
      this.updateLayout();
    }
    this.rendered = true;
  }
  addEventListeners() {
    var scroller;
    window.addEventListener("unload", (function(e) {
      this.destroy();
    }).bind(this));
    if (!this.settings.fullsize) {
      scroller = this.container;
    } else {
      scroller = window;
    }
    scroller.addEventListener("scroll", this.onScroll.bind(this));
  }
  removeEventListeners() {
    var scroller;
    if (!this.settings.fullsize) {
      scroller = this.container;
    } else {
      scroller = window;
    }
    scroller.removeEventListener("scroll", this.onScroll.bind(this));
  }
  destroy() {
    clearTimeout(this.orientationTimeout);
    clearTimeout(this.resizeTimeout);
    clearTimeout(this.afterScrolled);
    this.clear();
    this.removeEventListeners();
    this.stage.destroy();
    this.rendered = false;
  }
  onOrientationChange(e) {
    let { orientation } = window;
    if (this.optsSettings.resizeOnOrientationChange) {
      this.resize();
    }
    clearTimeout(this.orientationTimeout);
    this.orientationTimeout = setTimeout((function() {
      this.orientationTimeout = void 0;
      if (this.optsSettings.resizeOnOrientationChange) {
        this.resize();
      }
      this.emit(EVENTS.MANAGERS.ORIENTATION_CHANGE, orientation);
    }).bind(this), 500);
  }
  onResized(e) {
    this.resize();
  }
  resize(width, height) {
    let stageSize = this.stage.size(width, height);
    this.winBounds = windowBounds();
    if (this.orientationTimeout && this.winBounds.width === this.winBounds.height) {
      this._stageSize = void 0;
      return;
    }
    if (this._stageSize && this._stageSize.width === stageSize.width && this._stageSize.height === stageSize.height) {
      return;
    }
    this._stageSize = stageSize;
    this._bounds = this.bounds();
    this.clear();
    this.viewSettings.width = this._stageSize.width;
    this.viewSettings.height = this._stageSize.height;
    this.updateLayout();
    this.emit(EVENTS.MANAGERS.RESIZED, {
      width: this._stageSize.width,
      height: this._stageSize.height
    });
  }
  createView(section) {
    return new this.View(section, this.viewSettings);
  }
  display(section, target) {
    var displaying2 = new defer();
    var displayed = displaying2.promise;
    if (target === section.href || isNumber(target)) {
      target = void 0;
    }
    var visible = this.views.find(section);
    if (visible && section) {
      let offset = visible.offset();
      if (this.settings.direction === "ltr") {
        this.scrollTo(offset.left, offset.top, true);
      } else {
        let width = visible.width();
        this.scrollTo(offset.left + width, offset.top, true);
      }
      if (target) {
        let offset2 = visible.locationOf(target);
        this.moveTo(offset2);
      }
      displaying2.resolve();
      return displayed;
    }
    this.clear();
    this.add(section).then((function(view) {
      if (target) {
        let offset = view.locationOf(target);
        this.moveTo(offset);
      }
    }).bind(this), (err) => {
      displaying2.reject(err);
    }).then((function() {
      var next;
      if (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
        next = section.next();
        if (next) {
          return this.add(next);
        }
      }
    }).bind(this)).then((function() {
      this.views.show();
      displaying2.resolve();
    }).bind(this));
    return displayed;
  }
  afterDisplayed(view) {
    this.emit(EVENTS.MANAGERS.ADDED, view);
  }
  afterResized(view) {
    this.emit(EVENTS.MANAGERS.RESIZE, view.section);
  }
  moveTo(offset) {
    var distX = 0, distY = 0;
    if (!this.isPaginated) {
      distY = offset.top;
    } else {
      distX = Math.floor(offset.left / this.layout.delta) * this.layout.delta;
      if (distX + this.layout.delta > this.container.scrollWidth) {
        distX = this.container.scrollWidth - this.layout.delta;
      }
    }
    this.scrollTo(distX, distY, true);
  }
  add(section) {
    var view = this.createView(section);
    this.views.append(view);
    view.onDisplayed = this.afterDisplayed.bind(this);
    view.onResize = this.afterResized.bind(this);
    view.on(EVENTS.VIEWS.AXIS, (axis) => {
      this.updateAxis(axis);
    });
    return view.display(this.request);
  }
  append(section) {
    var view = this.createView(section);
    this.views.append(view);
    view.onDisplayed = this.afterDisplayed.bind(this);
    view.onResize = this.afterResized.bind(this);
    view.on(EVENTS.VIEWS.AXIS, (axis) => {
      this.updateAxis(axis);
    });
    return view.display(this.request);
  }
  prepend(section) {
    var view = this.createView(section);
    view.on(EVENTS.VIEWS.RESIZED, (bounds2) => {
      this.counter(bounds2);
    });
    this.views.prepend(view);
    view.onDisplayed = this.afterDisplayed.bind(this);
    view.onResize = this.afterResized.bind(this);
    view.on(EVENTS.VIEWS.AXIS, (axis) => {
      this.updateAxis(axis);
    });
    return view.display(this.request);
  }
  counter(bounds2) {
    if (this.settings.axis === "vertical") {
      this.scrollBy(0, bounds2.heightDelta, true);
    } else {
      this.scrollBy(bounds2.widthDelta, 0, true);
    }
  }
  // resizeView(view) {
  //
  // 	if(this.settings.globalLayoutProperties.layout === "pre-paginated") {
  // 		view.lock("both", this.bounds.width, this.bounds.height);
  // 	} else {
  // 		view.lock("width", this.bounds.width, this.bounds.height);
  // 	}
  //
  // };
  next() {
    var next;
    var left;
    let dir = this.settings.direction;
    if (!this.views.length)
      return;
    if (this.isPaginated && this.settings.axis === "horizontal" && (!dir || dir === "ltr")) {
      this.scrollLeft = this.container.scrollLeft;
      left = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta;
      if (left <= this.container.scrollWidth) {
        this.scrollBy(this.layout.delta, 0, true);
      } else {
        next = this.views.last().section.next();
      }
    } else if (this.isPaginated && this.settings.axis === "horizontal" && dir === "rtl") {
      this.scrollLeft = this.container.scrollLeft;
      left = this.container.scrollLeft;
      if (left > 0) {
        this.scrollBy(this.layout.delta, 0, true);
      } else {
        next = this.views.last().section.next();
      }
    } else if (this.isPaginated && this.settings.axis === "vertical") {
      this.scrollTop = this.container.scrollTop;
      let top = this.container.scrollTop + this.container.offsetHeight;
      if (top < this.container.scrollHeight) {
        this.scrollBy(0, this.layout.height, true);
      } else {
        next = this.views.last().section.next();
      }
    } else {
      next = this.views.last().section.next();
    }
    if (next) {
      this.clear();
      return this.append(next).then((function() {
        var right;
        if (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
          right = next.next();
          if (right) {
            return this.append(right);
          }
        }
      }).bind(this), (err) => {
        displaying.reject(err);
      }).then((function() {
        this.views.show();
      }).bind(this));
    }
  }
  prev() {
    var prev;
    var left;
    let dir = this.settings.direction;
    if (!this.views.length)
      return;
    if (this.isPaginated && this.settings.axis === "horizontal" && (!dir || dir === "ltr")) {
      this.scrollLeft = this.container.scrollLeft;
      left = this.container.scrollLeft;
      if (left > 0) {
        this.scrollBy(-this.layout.delta, 0, true);
      } else {
        prev = this.views.first().section.prev();
      }
    } else if (this.isPaginated && this.settings.axis === "horizontal" && dir === "rtl") {
      this.scrollLeft = this.container.scrollLeft;
      left = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta;
      if (left <= this.container.scrollWidth) {
        this.scrollBy(-this.layout.delta, 0, true);
      } else {
        prev = this.views.first().section.prev();
      }
    } else if (this.isPaginated && this.settings.axis === "vertical") {
      this.scrollTop = this.container.scrollTop;
      let top = this.container.scrollTop;
      if (top > 0) {
        this.scrollBy(0, -this.layout.height, true);
      } else {
        prev = this.views.first().section.prev();
      }
    } else {
      prev = this.views.first().section.prev();
    }
    if (prev) {
      this.clear();
      return this.prepend(prev).then((function() {
        var left2;
        if (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
          left2 = prev.prev();
          if (left2) {
            return this.prepend(left2);
          }
        }
      }).bind(this), (err) => {
        displaying.reject(err);
      }).then((function() {
        if (this.isPaginated && this.settings.axis === "horizontal") {
          if (this.settings.direction === "rtl") {
            this.scrollTo(0, 0, true);
          } else {
            this.scrollTo(this.container.scrollWidth - this.layout.delta, 0, true);
          }
        }
        this.views.show();
      }).bind(this));
    }
  }
  current() {
    var visible = this.visible();
    if (visible.length) {
      return visible[visible.length - 1];
    }
    return null;
  }
  clear() {
    if (this.views) {
      this.views.hide();
      this.scrollTo(0, 0, true);
      this.views.clear();
    }
  }
  currentLocation() {
    if (this.settings.axis === "vertical") {
      this.location = this.scrolledLocation();
    } else {
      this.location = this.paginatedLocation();
    }
    return this.location;
  }
  scrolledLocation() {
    let visible = this.visible();
    let container = this.container.getBoundingClientRect();
    let pageHeight = container.height < window.innerHeight ? container.height : window.innerHeight;
    let offset = 0;
    let used = 0;
    if (this.settings.fullsize) {
      offset = window.scrollY;
    }
    let sections = visible.map((view) => {
      let { index, href } = view.section;
      let position = view.position();
      let height = view.height();
      let startPos = offset + container.top - position.top + used;
      let endPos = startPos + pageHeight - used;
      if (endPos > height) {
        endPos = height;
        used = endPos - startPos;
      }
      let totalPages = this.layout.count(height, pageHeight).pages;
      let currPage = Math.ceil(startPos / pageHeight);
      let pages = [];
      let endPage = Math.ceil(endPos / pageHeight);
      pages = [];
      for (var i = currPage; i <= endPage; i++) {
        let pg = i + 1;
        pages.push(pg);
      }
      let mapping = this.mapping.page(view.contents, view.section.cfiBase, startPos, endPos);
      return {
        index,
        href,
        pages,
        totalPages,
        mapping
      };
    });
    return sections;
  }
  paginatedLocation() {
    let visible = this.visible();
    let container = this.container.getBoundingClientRect();
    let left = 0;
    let used = 0;
    if (this.settings.fullsize) {
      left = window.scrollX;
    }
    let sections = visible.map((view) => {
      let { index, href } = view.section;
      let offset = view.offset().left;
      let position = view.position().left;
      let width = view.width();
      let start = left + container.left - position + used;
      let end = start + this.layout.width - used;
      let mapping = this.mapping.page(view.contents, view.section.cfiBase, start, end);
      let totalPages = this.layout.count(width).pages;
      let startPage = Math.floor(start / this.layout.pageWidth);
      let pages = [];
      let endPage = Math.floor(end / this.layout.pageWidth);
      if (startPage < 0) {
        startPage = 0;
        endPage = endPage + 1;
      }
      if (this.settings.direction === "rtl") {
        let tempStartPage = startPage;
        startPage = totalPages - endPage;
        endPage = totalPages - tempStartPage;
      }
      for (var i = startPage + 1; i <= endPage; i++) {
        let pg = i;
        pages.push(pg);
      }
      return {
        index,
        href,
        pages,
        totalPages,
        mapping
      };
    });
    return sections;
  }
  isVisible(view, offsetPrev, offsetNext, _container) {
    var position = view.position();
    var container = _container || this.bounds();
    if (this.settings.axis === "horizontal" && position.right > container.left - offsetPrev && position.left < container.right + offsetNext) {
      return true;
    } else if (this.settings.axis === "vertical" && position.bottom > container.top - offsetPrev && position.top < container.bottom + offsetNext) {
      return true;
    }
    return false;
  }
  visible() {
    var container = this.bounds();
    var views = this.views.displayed();
    var viewsLength = views.length;
    var visible = [];
    var isVisible;
    var view;
    for (var i = 0; i < viewsLength; i++) {
      view = views[i];
      isVisible = this.isVisible(view, 0, 0, container);
      if (isVisible === true) {
        visible.push(view);
      }
    }
    return visible;
  }
  scrollBy(x, y, silent) {
    let dir = this.settings.direction === "rtl" ? -1 : 1;
    if (silent) {
      this.ignore = true;
    }
    if (!this.settings.fullsize) {
      if (x)
        this.container.scrollLeft += x * dir;
      if (y)
        this.container.scrollTop += y;
    } else {
      window.scrollBy(x * dir, y * dir);
    }
    this.scrolled = true;
  }
  scrollTo(x, y, silent) {
    if (silent) {
      this.ignore = true;
    }
    if (!this.settings.fullsize) {
      this.container.scrollLeft = x;
      this.container.scrollTop = y;
    } else {
      window.scrollTo(x, y);
    }
    this.scrolled = true;
  }
  onScroll() {
    let scrollTop;
    let scrollLeft;
    if (!this.settings.fullsize) {
      scrollTop = this.container.scrollTop;
      scrollLeft = this.container.scrollLeft;
    } else {
      scrollTop = window.scrollY;
      scrollLeft = window.scrollX;
    }
    this.scrollTop = scrollTop;
    this.scrollLeft = scrollLeft;
    if (!this.ignore) {
      this.emit(EVENTS.MANAGERS.SCROLL, {
        top: scrollTop,
        left: scrollLeft
      });
      clearTimeout(this.afterScrolled);
      this.afterScrolled = setTimeout((function() {
        this.emit(EVENTS.MANAGERS.SCROLLED, {
          top: this.scrollTop,
          left: this.scrollLeft
        });
      }).bind(this), 20);
    } else {
      this.ignore = false;
    }
  }
  bounds() {
    var bounds2;
    bounds2 = this.stage.bounds();
    return bounds2;
  }
  applyLayout(layout) {
    this.layout = layout;
    this.updateLayout();
  }
  updateLayout() {
    if (!this.stage) {
      return;
    }
    this._stageSize = this.stage.size();
    if (!this.isPaginated) {
      this.layout.calculate(this._stageSize.width, this._stageSize.height);
    } else {
      this.layout.calculate(
        this._stageSize.width,
        this._stageSize.height,
        this.settings.gap
      );
      this.settings.offset = this.layout.delta;
    }
    this.viewSettings.width = this.layout.width;
    this.viewSettings.height = this.layout.height;
    this.setLayout(this.layout);
  }
  setLayout(layout) {
    this.viewSettings.layout = layout;
    this.mapping = new mapping_default(layout.props, this.settings.direction, this.settings.axis);
    if (this.views) {
      this.views.forEach(function(view) {
        if (view) {
          view.setLayout(layout);
        }
      });
    }
  }
  updateAxis(axis, forceUpdate) {
    if (!this.isPaginated) {
      axis = "vertical";
    }
    if (!forceUpdate && axis === this.settings.axis) {
      return;
    }
    this.settings.axis = axis;
    this.stage && this.stage.axis(axis);
    this.viewSettings.axis = axis;
    if (this.mapping) {
      this.mapping = new mapping_default(this.layout.props, this.settings.direction, this.settings.axis);
    }
    if (this.layout) {
      if (axis === "vertical") {
        this.layout.spread("none");
      } else {
        this.layout.spread(this.layout.settings.spread);
      }
    }
  }
  updateFlow(flow) {
    let isPaginated = flow === "paginated" || flow === "auto";
    this.isPaginated = isPaginated;
    if (flow === "scrolled-doc" || flow === "scrolled-continuous" || flow === "scrolled") {
      this.updateAxis("vertical");
    }
    this.viewSettings.flow = flow;
    if (!this.settings.overflow) {
      this.overflow = isPaginated ? "hidden" : "auto";
    } else {
      this.overflow = this.settings.overflow;
    }
    this.updateLayout();
  }
  getContents() {
    var contents = [];
    if (!this.views) {
      return contents;
    }
    this.views.forEach(function(view) {
      const viewContents = view && view.contents;
      if (viewContents) {
        contents.push(viewContents);
      }
    });
    return contents;
  }
  direction(dir = "ltr") {
    this.settings.direction = dir;
    this.stage && this.stage.direction(dir);
    this.viewSettings.direction = dir;
    this.updateLayout();
  }
  isRendered() {
    return this.rendered;
  }
};
(0, import_event_emitter6.default)(DefaultViewManager.prototype);
var default_default = DefaultViewManager;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/managers/continuous/index.js
init_core();
var import_debounce = __toESM(require_debounce());
var ContinuousViewManager = class extends default_default {
  constructor(options) {
    super(options);
    this.name = "continuous";
    this.settings = extend(this.settings || {}, {
      infinite: true,
      overflow: void 0,
      axis: void 0,
      flow: "scrolled",
      offset: 500,
      offsetDelta: 250,
      width: void 0,
      height: void 0
    });
    extend(this.settings, options.settings || {});
    if (options.settings.gap != "undefined" && options.settings.gap === 0) {
      this.settings.gap = options.settings.gap;
    }
    this.viewSettings = {
      ignoreClass: this.settings.ignoreClass,
      axis: this.settings.axis,
      flow: this.settings.flow,
      layout: this.layout,
      width: 0,
      height: 0,
      forceEvenPages: false
    };
    this.scrollTop = 0;
    this.scrollLeft = 0;
  }
  display(section, target) {
    return default_default.prototype.display.call(this, section, target).then((function() {
      return this.fill();
    }).bind(this));
  }
  fill(_full) {
    var full = _full || new defer();
    this.q.enqueue(() => {
      return this.check();
    }).then((result) => {
      if (result) {
        this.fill(full);
      } else {
        full.resolve();
      }
    });
    return full.promise;
  }
  moveTo(offset) {
    var distX = 0, distY = 0;
    var offsetX = 0, offsetY = 0;
    if (!this.isPaginated) {
      distY = offset.top;
      offsetY = offset.top + this.settings.offset;
    } else {
      distX = Math.floor(offset.left / this.layout.delta) * this.layout.delta;
      offsetX = distX + this.settings.offset;
    }
    if (distX > 0 || distY > 0) {
      this.scrollBy(distX, distY, true);
    }
  }
  afterResized(view) {
    this.emit(EVENTS.MANAGERS.RESIZE, view.section);
  }
  // Remove Previous Listeners if present
  removeShownListeners(view) {
    view.onDisplayed = function() {
    };
  }
  add(section) {
    var view = this.createView(section);
    this.views.append(view);
    view.on(EVENTS.VIEWS.RESIZED, (bounds2) => {
      view.expanded = true;
    });
    view.on(EVENTS.VIEWS.AXIS, (axis) => {
      this.updateAxis(axis);
    });
    view.onDisplayed = this.afterDisplayed.bind(this);
    view.onResize = this.afterResized.bind(this);
    return view.display(this.request);
  }
  append(section) {
    var view = this.createView(section);
    view.on(EVENTS.VIEWS.RESIZED, (bounds2) => {
      view.expanded = true;
    });
    this.views.append(view);
    view.onDisplayed = this.afterDisplayed.bind(this);
    return view;
  }
  prepend(section) {
    var view = this.createView(section);
    view.on(EVENTS.VIEWS.RESIZED, (bounds2) => {
      this.counter(bounds2);
      view.expanded = true;
    });
    this.views.prepend(view);
    view.onDisplayed = this.afterDisplayed.bind(this);
    return view;
  }
  counter(bounds2) {
    if (this.settings.axis === "vertical") {
      this.scrollBy(0, bounds2.heightDelta, true);
    } else {
      this.scrollBy(bounds2.widthDelta, 0, true);
    }
  }
  update(_offset) {
    var container = this.bounds();
    var views = this.views.all();
    var viewsLength = views.length;
    var visible = [];
    var offset = typeof _offset != "undefined" ? _offset : this.settings.offset || 0;
    var isVisible;
    var view;
    var updating = new defer();
    var promises = [];
    for (var i = 0; i < viewsLength; i++) {
      view = views[i];
      isVisible = this.isVisible(view, offset, offset, container);
      if (isVisible === true) {
        if (!view.displayed) {
          let displayed = view.display(this.request).then(function(view2) {
            view2.show();
          }, (err) => {
            view.hide();
          });
          promises.push(displayed);
        } else {
          view.show();
        }
        visible.push(view);
      } else {
        this.q.enqueue(view.destroy.bind(view));
        clearTimeout(this.trimTimeout);
        this.trimTimeout = setTimeout((function() {
          this.q.enqueue(this.trim.bind(this));
        }).bind(this), 250);
      }
    }
    if (promises.length) {
      return Promise.all(promises).catch((err) => {
        updating.reject(err);
      });
    } else {
      updating.resolve();
      return updating.promise;
    }
  }
  check(_offsetLeft, _offsetTop) {
    var checking = new defer();
    var newViews = [];
    var horizontal = this.settings.axis === "horizontal";
    var delta = this.settings.offset || 0;
    if (_offsetLeft && horizontal) {
      delta = _offsetLeft;
    }
    if (_offsetTop && !horizontal) {
      delta = _offsetTop;
    }
    var bounds2 = this._bounds;
    let rtl = this.settings.direction === "rtl";
    let dir = horizontal && rtl ? -1 : 1;
    var offset = horizontal ? this.scrollLeft : this.scrollTop * dir;
    var visibleLength = horizontal ? Math.floor(bounds2.width) : bounds2.height;
    var contentLength = horizontal ? this.container.scrollWidth : this.container.scrollHeight;
    let prepend = () => {
      let first = this.views.first();
      let prev = first && first.section.prev();
      if (prev) {
        newViews.push(this.prepend(prev));
      }
    };
    let append = () => {
      let last = this.views.last();
      let next = last && last.section.next();
      if (next) {
        newViews.push(this.append(next));
      }
    };
    if (offset + visibleLength + delta >= contentLength) {
      if (horizontal && rtl) {
        prepend();
      } else {
        append();
      }
    }
    if (offset - delta < 0) {
      if (horizontal && rtl) {
        append();
      } else {
        prepend();
      }
    }
    let promises = newViews.map((view) => {
      return view.displayed;
    });
    if (newViews.length) {
      return Promise.all(promises).then(() => {
        if (this.layout.name === "pre-paginated" && this.layout.props.spread) {
          return this.check();
        }
      }).then(() => {
        return this.update(delta);
      }, (err) => {
        return err;
      });
    } else {
      this.q.enqueue((function() {
        this.update();
      }).bind(this));
      checking.resolve(false);
      return checking.promise;
    }
  }
  trim() {
    var task = new defer();
    var displayed = this.views.displayed();
    var first = displayed[0];
    var last = displayed[displayed.length - 1];
    var firstIndex = this.views.indexOf(first);
    var lastIndex = this.views.indexOf(last);
    var above = this.views.slice(0, firstIndex);
    var below = this.views.slice(lastIndex + 1);
    for (var i = 0; i < above.length - 1; i++) {
      this.erase(above[i], above);
    }
    for (var j = 1; j < below.length; j++) {
      this.erase(below[j]);
    }
    task.resolve();
    return task.promise;
  }
  erase(view, above) {
    var prevTop;
    var prevLeft;
    if (!this.settings.fullsize) {
      prevTop = this.container.scrollTop;
      prevLeft = this.container.scrollLeft;
    } else {
      prevTop = window.scrollY;
      prevLeft = window.scrollX;
    }
    var bounds2 = view.bounds();
    this.views.remove(view);
    if (above) {
      if (this.settings.axis === "vertical") {
        this.scrollTo(0, prevTop - bounds2.height, true);
      } else {
        this.scrollTo(prevLeft - Math.floor(bounds2.width), 0, true);
      }
    }
  }
  addEventListeners(stage) {
    window.addEventListener("unload", (function(e) {
      this.ignore = true;
      this.destroy();
    }).bind(this));
    this.addScrollListeners();
  }
  addScrollListeners() {
    var scroller;
    this.tick = requestAnimationFrame2;
    if (!this.settings.fullsize) {
      this.prevScrollTop = this.container.scrollTop;
      this.prevScrollLeft = this.container.scrollLeft;
    } else {
      this.prevScrollTop = window.scrollY;
      this.prevScrollLeft = window.scrollX;
    }
    this.scrollDeltaVert = 0;
    this.scrollDeltaHorz = 0;
    if (!this.settings.fullsize) {
      scroller = this.container;
      this.scrollTop = this.container.scrollTop;
      this.scrollLeft = this.container.scrollLeft;
    } else {
      scroller = window;
      this.scrollTop = window.scrollY;
      this.scrollLeft = window.scrollX;
    }
    scroller.addEventListener("scroll", this.onScroll.bind(this));
    this._scrolled = (0, import_debounce.default)(this.scrolled.bind(this), 30);
    this.didScroll = false;
  }
  removeEventListeners() {
    var scroller;
    if (!this.settings.fullsize) {
      scroller = this.container;
    } else {
      scroller = window;
    }
    scroller.removeEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    let scrollTop;
    let scrollLeft;
    let dir = this.settings.direction === "rtl" ? -1 : 1;
    if (!this.settings.fullsize) {
      scrollTop = this.container.scrollTop;
      scrollLeft = this.container.scrollLeft;
    } else {
      scrollTop = window.scrollY * dir;
      scrollLeft = window.scrollX * dir;
    }
    this.scrollTop = scrollTop;
    this.scrollLeft = scrollLeft;
    if (!this.ignore) {
      this._scrolled();
    } else {
      this.ignore = false;
    }
    this.scrollDeltaVert += Math.abs(scrollTop - this.prevScrollTop);
    this.scrollDeltaHorz += Math.abs(scrollLeft - this.prevScrollLeft);
    this.prevScrollTop = scrollTop;
    this.prevScrollLeft = scrollLeft;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout((function() {
      this.scrollDeltaVert = 0;
      this.scrollDeltaHorz = 0;
    }).bind(this), 150);
    this.didScroll = false;
  }
  scrolled() {
    this.q.enqueue((function() {
      this.check();
    }).bind(this));
    this.emit(EVENTS.MANAGERS.SCROLL, {
      top: this.scrollTop,
      left: this.scrollLeft
    });
    clearTimeout(this.afterScrolled);
    this.afterScrolled = setTimeout((function() {
      this.emit(EVENTS.MANAGERS.SCROLLED, {
        top: this.scrollTop,
        left: this.scrollLeft
      });
    }).bind(this));
  }
  next() {
    let dir = this.settings.direction;
    let delta = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;
    if (!this.views.length)
      return;
    if (this.isPaginated && this.settings.axis === "horizontal") {
      this.scrollBy(delta, 0, true);
    } else {
      this.scrollBy(0, this.layout.height, true);
    }
    this.q.enqueue((function() {
      this.check();
    }).bind(this));
  }
  prev() {
    let dir = this.settings.direction;
    let delta = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;
    if (!this.views.length)
      return;
    if (this.isPaginated && this.settings.axis === "horizontal") {
      this.scrollBy(-delta, 0, true);
    } else {
      this.scrollBy(0, -this.layout.height, true);
    }
    this.q.enqueue((function() {
      this.check();
    }).bind(this));
  }
  updateAxis(axis, forceUpdate) {
    if (!this.isPaginated) {
      axis = "vertical";
    }
    if (!forceUpdate && axis === this.settings.axis) {
      return;
    }
    this.settings.axis = axis;
    this.stage && this.stage.axis(axis);
    this.viewSettings.axis = axis;
    if (this.mapping) {
      this.mapping.axis(axis);
    }
    if (this.layout) {
      if (axis === "vertical") {
        this.layout.spread("none");
      } else {
        this.layout.spread(this.layout.settings.spread);
      }
    }
    if (axis === "vertical") {
      this.settings.infinite = true;
    } else {
      this.settings.infinite = false;
    }
  }
};
var continuous_default = ContinuousViewManager;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/rendition.js
var Rendition = class {
  constructor(book, options) {
    this.settings = extend(this.settings || {}, {
      width: null,
      height: null,
      ignoreClass: "",
      manager: "default",
      view: "iframe",
      flow: null,
      layout: null,
      spread: null,
      minSpreadWidth: 800,
      stylesheet: null,
      resizeOnOrientationChange: true,
      script: null
    });
    extend(this.settings, options);
    if (typeof this.settings.manager === "object") {
      this.manager = this.settings.manager;
    }
    this.book = book;
    this.hooks = {};
    this.hooks.display = new hook_default(this);
    this.hooks.serialize = new hook_default(this);
    this.hooks.content = new hook_default(this);
    this.hooks.unloaded = new hook_default(this);
    this.hooks.layout = new hook_default(this);
    this.hooks.render = new hook_default(this);
    this.hooks.show = new hook_default(this);
    this.hooks.content.register(this.handleLinks.bind(this));
    this.hooks.content.register(this.passEvents.bind(this));
    this.hooks.content.register(this.adjustImages.bind(this));
    this.book.spine.hooks.content.register(this.injectIdentifier.bind(this));
    if (this.settings.stylesheet) {
      this.book.spine.hooks.content.register(this.injectStylesheet.bind(this));
    }
    if (this.settings.script) {
      this.book.spine.hooks.content.register(this.injectScript.bind(this));
    }
    this.themes = new themes_default(this);
    this.annotations = new annotations_default(this);
    this.epubcfi = new epubcfi_default();
    this.q = new queue_default(this);
    this.location = void 0;
    this.q.enqueue(this.book.opened);
    this.starting = new defer();
    this.started = this.starting.promise;
    this.q.enqueue(this.start);
  }
  /**
   * Set the manager function
   * @param {function} manager
   */
  setManager(manager) {
    this.manager = manager;
  }
  /**
   * Require the manager from passed string, or as a class function
   * @param  {string|object} manager [description]
   * @return {method}
   */
  requireManager(manager) {
    var viewManager;
    if (typeof manager === "string" && manager === "default") {
      viewManager = default_default;
    } else if (typeof manager === "string" && manager === "continuous") {
      viewManager = continuous_default;
    } else {
      viewManager = manager;
    }
    return viewManager;
  }
  /**
   * Require the view from passed string, or as a class function
   * @param  {string|object} view
   * @return {view}
   */
  requireView(view) {
    var View;
    if (typeof view == "string" && view === "iframe") {
      View = iframe_default;
    } else {
      View = view;
    }
    return View;
  }
  /**
   * Start the rendering
   * @return {Promise} rendering has started
   */
  start() {
    if (!this.manager) {
      this.ViewManager = this.requireManager(this.settings.manager);
      this.View = this.requireView(this.settings.view);
      this.manager = new this.ViewManager({
        view: this.View,
        queue: this.q,
        request: this.book.load.bind(this.book),
        settings: this.settings
      });
    }
    this.direction(this.book.package.metadata.direction);
    this.settings.globalLayoutProperties = this.determineLayoutProperties(this.book.package.metadata);
    this.flow(this.settings.globalLayoutProperties.flow);
    this.layout(this.settings.globalLayoutProperties);
    this.manager.on(EVENTS.MANAGERS.ADDED, this.afterDisplayed.bind(this));
    this.manager.on(EVENTS.MANAGERS.REMOVED, this.afterRemoved.bind(this));
    this.manager.on(EVENTS.MANAGERS.RESIZED, this.onResized.bind(this));
    this.manager.on(EVENTS.MANAGERS.ORIENTATION_CHANGE, this.onOrientationChange.bind(this));
    this.manager.on(EVENTS.MANAGERS.SCROLLED, this.reportLocation.bind(this));
    this.emit(EVENTS.RENDITION.STARTED);
    this.starting.resolve();
  }
  /**
   * Call to attach the container to an element in the dom
   * Container must be attached before rendering can begin
   * @param  {element} element to attach to
   * @return {Promise}
   */
  attachTo(element) {
    return this.q.enqueue((function() {
      this.manager.render(element, {
        "width": this.settings.width,
        "height": this.settings.height
      });
      this.emit(EVENTS.RENDITION.ATTACHED);
    }).bind(this));
  }
  /**
   * Display a point in the book
   * The request will be added to the rendering Queue,
   * so it will wait until book is opened, rendering started
   * and all other rendering tasks have finished to be called.
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */
  display(target) {
    if (this.displaying) {
      this.displaying.resolve();
    }
    return this.q.enqueue(this._display, target);
  }
  /**
   * Tells the manager what to display immediately
   * @private
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */
  _display(target) {
    if (!this.book) {
      return;
    }
    var isCfiString = this.epubcfi.isCfiString(target);
    var displaying2 = new defer();
    var displayed = displaying2.promise;
    var section;
    var moveTo;
    this.displaying = displaying2;
    if (this.book.locations.length() && isFloat(target)) {
      target = this.book.locations.cfiFromPercentage(parseFloat(target));
    }
    section = this.book.spine.get(target);
    if (!section) {
      displaying2.reject(new Error("No Section Found"));
      return displayed;
    }
    this.manager.display(section, target).then(() => {
      displaying2.resolve(section);
      this.displaying = void 0;
      this.emit(EVENTS.RENDITION.DISPLAYED, section);
      this.reportLocation();
    }, (err) => {
      this.emit(EVENTS.RENDITION.DISPLAY_ERROR, err);
    });
    return displayed;
  }
  /*
  	render(view, show) {
  
  		// view.onLayout = this.layout.format.bind(this.layout);
  		view.create();
  
  		// Fit to size of the container, apply padding
  		this.manager.resizeView(view);
  
  		// Render Chain
  		return view.section.render(this.book.request)
  			.then(function(contents){
  				return view.load(contents);
  			}.bind(this))
  			.then(function(doc){
  				return this.hooks.content.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				this.layout.format(view.contents);
  				return this.hooks.layout.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				return view.display();
  			}.bind(this))
  			.then(function(){
  				return this.hooks.render.trigger(view, this);
  			}.bind(this))
  			.then(function(){
  				if(show !== false) {
  					this.q.enqueue(function(view){
  						view.show();
  					}, view);
  				}
  				// this.map = new Map(view, this.layout);
  				this.hooks.show.trigger(view, this);
  				this.trigger("rendered", view.section);
  
  			}.bind(this))
  			.catch(function(e){
  				this.trigger("loaderror", e);
  			}.bind(this));
  
  	}
  	*/
  /**
   * Report what section has been displayed
   * @private
   * @param  {*} view
   */
  afterDisplayed(view) {
    view.on(EVENTS.VIEWS.MARK_CLICKED, (cfiRange, data) => this.triggerMarkEvent(cfiRange, data, view));
    this.hooks.render.trigger(view, this).then(() => {
      if (view.contents) {
        this.hooks.content.trigger(view.contents, this).then(() => {
          this.emit(EVENTS.RENDITION.RENDERED, view.section, view);
        });
      } else {
        this.emit(EVENTS.RENDITION.RENDERED, view.section, view);
      }
    });
  }
  /**
   * Report what has been removed
   * @private
   * @param  {*} view
   */
  afterRemoved(view) {
    this.hooks.unloaded.trigger(view, this).then(() => {
      this.emit(EVENTS.RENDITION.REMOVED, view.section, view);
    });
  }
  /**
   * Report resize events and display the last seen location
   * @private
   */
  onResized(size) {
    this.emit(EVENTS.RENDITION.RESIZED, {
      width: size.width,
      height: size.height
    });
    if (this.location && this.location.start) {
      this.display(this.location.start.cfi);
    }
  }
  /**
   * Report orientation events and display the last seen location
   * @private
   */
  onOrientationChange(orientation) {
    this.emit(EVENTS.RENDITION.ORIENTATION_CHANGE, orientation);
  }
  /**
   * Move the Rendition to a specific offset
   * Usually you would be better off calling display()
   * @param {object} offset
   */
  moveTo(offset) {
    this.manager.moveTo(offset);
  }
  /**
   * Trigger a resize of the views
   * @param {number} [width]
   * @param {number} [height]
   */
  resize(width, height) {
    if (width) {
      this.settings.width = width;
    }
    if (height) {
      this.settings.height = height;
    }
    this.manager.resize(width, height);
  }
  /**
   * Clear all rendered views
   */
  clear() {
    this.manager.clear();
  }
  /**
   * Go to the next "page" in the rendition
   * @return {Promise}
   */
  next() {
    return this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this));
  }
  /**
   * Go to the previous "page" in the rendition
   * @return {Promise}
   */
  prev() {
    return this.q.enqueue(this.manager.prev.bind(this.manager)).then(this.reportLocation.bind(this));
  }
  //-- http://www.idpf.org/epub/301/spec/epub-publications.html#meta-properties-rendering
  /**
   * Determine the Layout properties from metadata and settings
   * @private
   * @param  {object} metadata
   * @return {object} properties
   */
  determineLayoutProperties(metadata) {
    var properties;
    var layout = this.settings.layout || metadata.layout || "reflowable";
    var spread = this.settings.spread || metadata.spread || "auto";
    var orientation = this.settings.orientation || metadata.orientation || "auto";
    var flow = this.settings.flow || metadata.flow || "auto";
    var viewport = metadata.viewport || "";
    var minSpreadWidth = this.settings.minSpreadWidth || metadata.minSpreadWidth || 800;
    var direction = this.settings.direction || metadata.direction || "ltr";
    if ((this.settings.width === 0 || this.settings.width > 0) && (this.settings.height === 0 || this.settings.height > 0)) {
    }
    properties = {
      layout,
      spread,
      orientation,
      flow,
      viewport,
      minSpreadWidth,
      direction
    };
    return properties;
  }
  /**
   * Adjust the flow of the rendition to paginated or scrolled
   * (scrolled-continuous vs scrolled-doc are handled by different view managers)
   * @param  {string} flow
   */
  flow(flow) {
    var _flow = flow;
    if (flow === "scrolled" || flow === "scrolled-doc" || flow === "scrolled-continuous") {
      _flow = "scrolled";
    }
    if (flow === "auto" || flow === "paginated") {
      _flow = "paginated";
    }
    this.settings.flow = flow;
    if (this._layout) {
      this._layout.flow(_flow);
    }
    if (this.manager && this._layout) {
      this.manager.applyLayout(this._layout);
    }
    if (this.manager) {
      this.manager.updateFlow(_flow);
    }
    if (this.manager && this.manager.isRendered() && this.location) {
      this.manager.clear();
      this.display(this.location.start.cfi);
    }
  }
  /**
   * Adjust the layout of the rendition to reflowable or pre-paginated
   * @param  {object} settings
   */
  layout(settings) {
    if (settings) {
      this._layout = new layout_default(settings);
      this._layout.spread(settings.spread, this.settings.minSpreadWidth);
      this._layout.on(EVENTS.LAYOUT.UPDATED, (props, changed) => {
        this.emit(EVENTS.RENDITION.LAYOUT, props, changed);
      });
    }
    if (this.manager && this._layout) {
      this.manager.applyLayout(this._layout);
    }
    return this._layout;
  }
  /**
   * Adjust if the rendition uses spreads
   * @param  {string} spread none | auto (TODO: implement landscape, portrait, both)
   * @param  {int} min min width to use spreads at
   */
  spread(spread, min) {
    this._layout.spread(spread, min);
    if (this.manager.isRendered()) {
      this.manager.updateLayout();
    }
  }
  /**
   * Adjust the direction of the rendition
   * @param  {string} dir
   */
  direction(dir) {
    this.settings.direction = dir || "ltr";
    if (this.manager) {
      this.manager.direction(this.settings.direction);
    }
    if (this.manager && this.manager.isRendered() && this.location) {
      this.manager.clear();
      this.display(this.location.start.cfi);
    }
  }
  /**
   * Report the current location
   * @fires relocated
   * @fires locationChanged
   */
  reportLocation() {
    return this.q.enqueue((function reportedLocation() {
      requestAnimationFrame((function reportedLocationAfterRAF() {
        var location = this.manager.currentLocation();
        if (location && location.then && typeof location.then === "function") {
          location.then((function(result) {
            let located = this.located(result);
            if (!located || !located.start || !located.end) {
              return;
            }
            this.location = located;
            this.emit(EVENTS.RENDITION.LOCATION_CHANGED, {
              index: this.location.start.index,
              href: this.location.start.href,
              start: this.location.start.cfi,
              end: this.location.end.cfi,
              percentage: this.location.start.percentage
            });
            this.emit(EVENTS.RENDITION.RELOCATED, this.location);
          }).bind(this));
        } else if (location) {
          let located = this.located(location);
          if (!located || !located.start || !located.end) {
            return;
          }
          this.location = located;
          this.emit(EVENTS.RENDITION.LOCATION_CHANGED, {
            index: this.location.start.index,
            href: this.location.start.href,
            start: this.location.start.cfi,
            end: this.location.end.cfi,
            percentage: this.location.start.percentage
          });
          this.emit(EVENTS.RENDITION.RELOCATED, this.location);
        }
      }).bind(this));
    }).bind(this));
  }
  /**
   * Get the Current Location object
   * @return {displayedLocation | promise} location (may be a promise)
   */
  currentLocation() {
    var location = this.manager.currentLocation();
    if (location && location.then && typeof location.then === "function") {
      location.then((function(result) {
        let located = this.located(result);
        return located;
      }).bind(this));
    } else if (location) {
      let located = this.located(location);
      return located;
    }
  }
  /**
   * Creates a Rendition#locationRange from location
   * passed by the Manager
   * @returns {displayedLocation}
   * @private
   */
  located(location) {
    if (!location.length) {
      return {};
    }
    let start = location[0];
    let end = location[location.length - 1];
    let located = {
      start: {
        index: start.index,
        href: start.href,
        cfi: start.mapping.start,
        displayed: {
          page: start.pages[0] || 1,
          total: start.totalPages
        }
      },
      end: {
        index: end.index,
        href: end.href,
        cfi: end.mapping.end,
        displayed: {
          page: end.pages[end.pages.length - 1] || 1,
          total: end.totalPages
        }
      }
    };
    let locationStart = this.book.locations.locationFromCfi(start.mapping.start);
    let locationEnd = this.book.locations.locationFromCfi(end.mapping.end);
    if (locationStart != null) {
      located.start.location = locationStart;
      located.start.percentage = this.book.locations.percentageFromLocation(locationStart);
    }
    if (locationEnd != null) {
      located.end.location = locationEnd;
      located.end.percentage = this.book.locations.percentageFromLocation(locationEnd);
    }
    let pageStart = this.book.pageList.pageFromCfi(start.mapping.start);
    let pageEnd = this.book.pageList.pageFromCfi(end.mapping.end);
    if (pageStart != -1) {
      located.start.page = pageStart;
    }
    if (pageEnd != -1) {
      located.end.page = pageEnd;
    }
    if (end.index === this.book.spine.last().index && located.end.displayed.page >= located.end.displayed.total) {
      located.atEnd = true;
    }
    if (start.index === this.book.spine.first().index && located.start.displayed.page === 1) {
      located.atStart = true;
    }
    return located;
  }
  /**
   * Remove and Clean Up the Rendition
   */
  destroy() {
    this.manager && this.manager.destroy();
    this.book = void 0;
  }
  /**
   * Pass the events from a view's Contents
   * @private
   * @param  {Contents} view contents
   */
  passEvents(contents) {
    var listenedEvents = contents_default.listenedEvents;
    listenedEvents.forEach((e) => {
      contents.on(e, (ev) => this.triggerViewEvent(ev, contents));
    });
    contents.on(EVENTS.CONTENTS.SELECTED, (e) => this.triggerSelectedEvent(e, contents));
  }
  /**
   * Emit events passed by a view
   * @private
   * @param  {event} e
   */
  triggerViewEvent(e, contents) {
    this.emit(e.type, e, contents);
  }
  /**
   * Emit a selection event's CFI Range passed from a a view
   * @private
   * @param  {EpubCFI} cfirange
   */
  triggerSelectedEvent(cfirange, contents) {
    this.emit(EVENTS.RENDITION.SELECTED, cfirange, contents);
  }
  /**
   * Emit a markClicked event with the cfiRange and data from a mark
   * @private
   * @param  {EpubCFI} cfirange
   */
  triggerMarkEvent(cfiRange, data, contents) {
    this.emit(EVENTS.RENDITION.MARK_CLICKED, cfiRange, data, contents);
  }
  /**
   * Get a Range from a Visible CFI
   * @param  {string} cfi EpubCfi String
   * @param  {string} ignoreClass
   * @return {range}
   */
  getRange(cfi, ignoreClass) {
    var _cfi = new epubcfi_default(cfi);
    var found = this.manager.visible().filter(function(view) {
      if (_cfi.spinePos === view.index)
        return true;
    });
    if (found.length) {
      return found[0].contents.range(_cfi, ignoreClass);
    }
  }
  /**
   * Hook to adjust images to fit in columns
   * @param  {Contents} contents
   * @private
   */
  adjustImages(contents) {
    if (this._layout.name === "pre-paginated") {
      return new Promise(function(resolve) {
        resolve();
      });
    }
    let computed = contents.window.getComputedStyle(contents.content, null);
    let height = contents.content.offsetHeight - (parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom));
    contents.addStylesheetRules({
      "img": {
        "max-width": (this._layout.columnWidth ? this._layout.columnWidth + "px" : "100%") + "!important",
        "max-height": height + "px!important",
        "object-fit": "contain",
        "page-break-inside": "avoid",
        "break-inside": "avoid"
      },
      "svg": {
        "max-width": (this._layout.columnWidth ? this._layout.columnWidth + "px" : "100%") + "!important",
        "max-height": height + "px!important",
        "page-break-inside": "avoid",
        "break-inside": "avoid"
      }
    });
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 1);
    });
  }
  /**
   * Get the Contents object of each rendered view
   * @returns {Contents[]}
   */
  getContents() {
    return this.manager ? this.manager.getContents() : [];
  }
  /**
   * Get the views member from the manager
   * @returns {Views}
   */
  views() {
    let views = this.manager ? this.manager.views : void 0;
    return views || [];
  }
  /**
   * Hook to handle link clicks in rendered content
   * @param  {Contents} contents
   * @private
   */
  handleLinks(contents) {
    if (contents) {
      contents.on(EVENTS.CONTENTS.LINK_CLICKED, (href) => {
        let relative = this.book.path.relative(href);
        this.display(relative);
      });
    }
  }
  /**
   * Hook to handle injecting stylesheet before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectStylesheet(doc, section) {
    let style = doc.createElement("link");
    style.setAttribute("type", "text/css");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", this.settings.stylesheet);
    doc.getElementsByTagName("head")[0].appendChild(style);
  }
  /**
   * Hook to handle injecting scripts before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectScript(doc, section) {
    let script = doc.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", this.settings.script);
    script.textContent = " ";
    doc.getElementsByTagName("head")[0].appendChild(script);
  }
  /**
   * Hook to handle the document identifier before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */
  injectIdentifier(doc, section) {
    let ident = this.book.package.metadata.identifier;
    let meta = doc.createElement("meta");
    meta.setAttribute("name", "dc.relation.ispartof");
    if (ident) {
      meta.setAttribute("content", ident);
    }
    doc.getElementsByTagName("head")[0].appendChild(meta);
  }
};
(0, import_event_emitter7.default)(Rendition.prototype);
var rendition_default = Rendition;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/archive.js
init_core();
init_request();
var import_mime2 = __toESM(require_mime());
init_path();
var Archive = class {
  constructor() {
    this.zip = void 0;
    this.urlCache = {};
    this.checkRequirements();
  }
  /**
   * Checks to see if JSZip exists in global namspace,
   * Requires JSZip if it isn't there
   * @private
   */
  checkRequirements() {
    try {
      if (typeof JSZip === "undefined") {
        let JSZip2 = require_jszip_min();
        this.zip = new JSZip2();
      } else {
        this.zip = new JSZip();
      }
    } catch (e) {
      throw new Error("JSZip lib not loaded");
    }
  }
  /**
   * Open an archive
   * @param  {binary} input
   * @param  {boolean} [isBase64] tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */
  open(input, isBase64) {
    return this.zip.loadAsync(input, { "base64": isBase64 });
  }
  /**
   * Load and Open an archive
   * @param  {string} zipUrl
   * @param  {boolean} [isBase64] tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */
  openUrl(zipUrl, isBase64) {
    return request_default(zipUrl, "binary").then((function(data) {
      return this.zip.loadAsync(data, { "base64": isBase64 });
    }).bind(this));
  }
  /**
   * Request a url from the archive
   * @param  {string} url  a url to request from the archive
   * @param  {string} [type] specify the type of the returned result
   * @return {Promise<Blob | string | JSON | Document | XMLDocument>}
   */
  request(url, type2) {
    var deferred = new defer();
    var response;
    var path5 = new path_default(url);
    if (!type2) {
      type2 = path5.extension;
    }
    if (type2 == "blob") {
      response = this.getBlob(url);
    } else {
      response = this.getText(url);
    }
    if (response) {
      response.then((function(r) {
        let result = this.handleResponse(r, type2);
        deferred.resolve(result);
      }).bind(this));
    } else {
      deferred.reject({
        message: "File not found in the epub: " + url,
        stack: new Error().stack
      });
    }
    return deferred.promise;
  }
  /**
   * Handle the response from request
   * @private
   * @param  {any} response
   * @param  {string} [type]
   * @return {any} the parsed result
   */
  handleResponse(response, type2) {
    var r;
    if (type2 == "json") {
      r = JSON.parse(response);
    } else if (isXml(type2)) {
      r = parse(response, "text/xml");
    } else if (type2 == "xhtml") {
      r = parse(response, "application/xhtml+xml");
    } else if (type2 == "html" || type2 == "htm") {
      r = parse(response, "text/html");
    } else {
      r = response;
    }
    return r;
  }
  /**
   * Get a Blob from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {Blob}
   */
  getBlob(url, mimeType) {
    var decodededUrl = window.decodeURIComponent(url.substr(1));
    var entry = this.zip.file(decodededUrl);
    if (entry) {
      mimeType = mimeType || import_mime2.default.lookup(entry.name);
      return entry.async("uint8array").then(function(uint8array) {
        return new Blob([uint8array], { type: mimeType });
      });
    }
  }
  /**
   * Get Text from Archive by Url
   * @param  {string} url
   * @param  {string} [encoding]
   * @return {string}
   */
  getText(url, encoding) {
    var decodededUrl = window.decodeURIComponent(url.substr(1));
    var entry = this.zip.file(decodededUrl);
    if (entry) {
      return entry.async("string").then(function(text) {
        return text;
      });
    }
  }
  /**
   * Get a base64 encoded result from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string} base64 encoded
   */
  getBase64(url, mimeType) {
    var decodededUrl = window.decodeURIComponent(url.substr(1));
    var entry = this.zip.file(decodededUrl);
    if (entry) {
      mimeType = mimeType || import_mime2.default.lookup(entry.name);
      return entry.async("base64").then(function(data) {
        return "data:" + mimeType + ";base64," + data;
      });
    }
  }
  /**
   * Create a Url from an unarchived item
   * @param  {string} url
   * @param  {object} [options.base64] use base64 encoding or blob url
   * @return {Promise} url promise with Url string
   */
  createUrl(url, options) {
    var deferred = new defer();
    var _URL2 = window.URL || window.webkitURL || window.mozURL;
    var tempUrl;
    var response;
    var useBase64 = options && options.base64;
    if (url in this.urlCache) {
      deferred.resolve(this.urlCache[url]);
      return deferred.promise;
    }
    if (useBase64) {
      response = this.getBase64(url);
      if (response) {
        response.then((function(tempUrl2) {
          this.urlCache[url] = tempUrl2;
          deferred.resolve(tempUrl2);
        }).bind(this));
      }
    } else {
      response = this.getBlob(url);
      if (response) {
        response.then((function(blob) {
          tempUrl = _URL2.createObjectURL(blob);
          this.urlCache[url] = tempUrl;
          deferred.resolve(tempUrl);
        }).bind(this));
      }
    }
    if (!response) {
      deferred.reject({
        message: "File not found in the epub: " + url,
        stack: new Error().stack
      });
    }
    return deferred.promise;
  }
  /**
   * Revoke Temp Url for a achive item
   * @param  {string} url url of the item in the archive
   */
  revokeUrl(url) {
    var _URL2 = window.URL || window.webkitURL || window.mozURL;
    var fromCache = this.urlCache[url];
    if (fromCache)
      _URL2.revokeObjectURL(fromCache);
  }
  destroy() {
    var _URL2 = window.URL || window.webkitURL || window.mozURL;
    for (let fromCache in this.urlCache) {
      _URL2.revokeObjectURL(fromCache);
    }
    this.zip = void 0;
    this.urlCache = {};
  }
};
var archive_default = Archive;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/book.js
init_request();
var CONTAINER_PATH = "META-INF/container.xml";
var INPUT_TYPE = {
  BINARY: "binary",
  BASE64: "base64",
  EPUB: "epub",
  OPF: "opf",
  MANIFEST: "json",
  DIRECTORY: "directory"
};
var Book = class {
  constructor(url, options) {
    if (typeof options === "undefined" && typeof url !== "string" && url instanceof Blob === false) {
      options = url;
      url = void 0;
    }
    this.settings = extend(this.settings || {}, {
      requestMethod: void 0,
      requestCredentials: void 0,
      requestHeaders: void 0,
      encoding: void 0,
      replacements: void 0,
      canonical: void 0,
      openAs: void 0
    });
    extend(this.settings, options);
    this.opening = new defer();
    this.opened = this.opening.promise;
    this.isOpen = false;
    this.loading = {
      manifest: new defer(),
      spine: new defer(),
      metadata: new defer(),
      cover: new defer(),
      navigation: new defer(),
      pageList: new defer(),
      resources: new defer()
    };
    this.loaded = {
      manifest: this.loading.manifest.promise,
      spine: this.loading.spine.promise,
      metadata: this.loading.metadata.promise,
      cover: this.loading.cover.promise,
      navigation: this.loading.navigation.promise,
      pageList: this.loading.pageList.promise,
      resources: this.loading.resources.promise
    };
    this.ready = Promise.all([
      this.loaded.manifest,
      this.loaded.spine,
      this.loaded.metadata,
      this.loaded.cover,
      this.loaded.navigation,
      this.loaded.resources
    ]);
    this.isRendered = false;
    this.request = this.settings.requestMethod || request_default;
    this.spine = new spine_default();
    this.locations = new locations_default(this.spine, this.load.bind(this));
    this.navigation = void 0;
    this.pageList = void 0;
    this.url = void 0;
    this.path = void 0;
    this.archived = false;
    this.archive = void 0;
    this.resources = void 0;
    this.rendition = void 0;
    this.container = void 0;
    this.packaging = void 0;
    if (url) {
      this.open(url, this.settings.openAs).catch((error) => {
        var err = new Error("Cannot load book at " + url);
        this.emit(EVENTS.BOOK.OPEN_FAILED, err);
      });
    }
  }
  /**
   * Open a epub or url
   * @param {string | ArrayBuffer} input Url, Path or ArrayBuffer
   * @param {string} [what="binary", "base64", "epub", "opf", "json", "directory"] force opening as a certain type
   * @returns {Promise} of when the book has been loaded
   * @example book.open("/path/to/book.epub")
   */
  open(input, what) {
    var opening;
    var type2 = what || this.determineType(input);
    if (type2 === INPUT_TYPE.BINARY) {
      this.archived = true;
      this.url = new url_default("/", "");
      opening = this.openEpub(input);
    } else if (type2 === INPUT_TYPE.BASE64) {
      this.archived = true;
      this.url = new url_default("/", "");
      opening = this.openEpub(input, type2);
    } else if (type2 === INPUT_TYPE.EPUB) {
      this.archived = true;
      this.url = new url_default("/", "");
      opening = this.request(input, "binary", this.settings.requestCredentials).then(this.openEpub.bind(this));
    } else if (type2 == INPUT_TYPE.OPF) {
      this.url = new url_default(input);
      opening = this.openPackaging(this.url.Path.toString());
    } else if (type2 == INPUT_TYPE.MANIFEST) {
      this.url = new url_default(input);
      opening = this.openManifest(this.url.Path.toString());
    } else {
      this.url = new url_default(input);
      opening = this.openContainer(CONTAINER_PATH).then(this.openPackaging.bind(this));
    }
    return opening;
  }
  /**
   * Open an archived epub
   * @private
   * @param  {binary} data
   * @param  {string} [encoding]
   * @return {Promise}
   */
  openEpub(data, encoding) {
    return this.unarchive(data, encoding || this.settings.encoding).then(() => {
      return this.openContainer(CONTAINER_PATH);
    }).then((packagePath) => {
      return this.openPackaging(packagePath);
    });
  }
  /**
   * Open the epub container
   * @private
   * @param  {string} url
   * @return {string} packagePath
   */
  openContainer(url) {
    return this.load(url).then((xml) => {
      this.container = new container_default(xml);
      return this.resolve(this.container.packagePath);
    });
  }
  /**
   * Open the Open Packaging Format Xml
   * @private
   * @param  {string} url
   * @return {Promise}
   */
  openPackaging(url) {
    this.path = new path_default(url);
    return this.load(url).then((xml) => {
      this.packaging = new packaging_default(xml);
      return this.unpack(this.packaging);
    });
  }
  /**
   * Open the manifest JSON
   * @private
   * @param  {string} url
   * @return {Promise}
   */
  openManifest(url) {
    this.path = new path_default(url);
    return this.load(url).then((json) => {
      this.packaging = new packaging_default();
      this.packaging.load(json);
      return this.unpack(this.packaging);
    });
  }
  /**
   * Load a resource from the Book
   * @param  {string} path path to the resource to load
   * @return {Promise}     returns a promise with the requested resource
   */
  load(path5) {
    var resolved;
    if (this.archived) {
      resolved = this.resolve(path5);
      return this.archive.request(resolved);
    } else {
      resolved = this.resolve(path5);
      return this.request(resolved, null, this.settings.requestCredentials, this.settings.requestHeaders);
    }
  }
  /**
   * Resolve a path to it's absolute position in the Book
   * @param  {string} path
   * @param  {boolean} [absolute] force resolving the full URL
   * @return {string}          the resolved path string
   */
  resolve(path5, absolute) {
    if (!path5) {
      return;
    }
    var resolved = path5;
    var isAbsolute = path5.indexOf("://") > -1;
    if (isAbsolute) {
      return path5;
    }
    if (this.path) {
      resolved = this.path.resolve(path5);
    }
    if (absolute != false && this.url) {
      resolved = this.url.resolve(resolved);
    }
    return resolved;
  }
  /**
   * Get a canonical link to a path
   * @param  {string} path
   * @return {string} the canonical path string
   */
  canonical(path5) {
    var url = path5;
    if (!path5) {
      return "";
    }
    if (this.settings.canonical) {
      url = this.settings.canonical(path5);
    } else {
      url = this.resolve(path5, true);
    }
    return url;
  }
  /**
   * Determine the type of they input passed to open
   * @private
   * @param  {string} input
   * @return {string}  binary | directory | epub | opf
   */
  determineType(input) {
    var url;
    var path5;
    var extension;
    if (this.settings.encoding === "base64") {
      return INPUT_TYPE.BASE64;
    }
    if (typeof input != "string") {
      return INPUT_TYPE.BINARY;
    }
    url = new url_default(input);
    path5 = url.path();
    extension = path5.extension;
    if (!extension) {
      return INPUT_TYPE.DIRECTORY;
    }
    if (extension === "epub") {
      return INPUT_TYPE.EPUB;
    }
    if (extension === "opf") {
      return INPUT_TYPE.OPF;
    }
    if (extension === "json") {
      return INPUT_TYPE.MANIFEST;
    }
  }
  /**
   * unpack the contents of the Books packageXml
   * @private
   * @param {document} packageXml XML Document
   */
  unpack(opf) {
    this.package = opf;
    this.spine.unpack(this.package, this.resolve.bind(this), this.canonical.bind(this));
    this.resources = new resources_default(this.package.manifest, {
      archive: this.archive,
      resolver: this.resolve.bind(this),
      request: this.request.bind(this),
      replacements: this.settings.replacements || (this.archived ? "blobUrl" : "base64")
    });
    this.loadNavigation(this.package).then(() => {
      this.loading.navigation.resolve(this.navigation);
    });
    if (this.package.coverPath) {
      this.cover = this.resolve(this.package.coverPath);
    }
    this.loading.manifest.resolve(this.package.manifest);
    this.loading.metadata.resolve(this.package.metadata);
    this.loading.spine.resolve(this.spine);
    this.loading.cover.resolve(this.cover);
    this.loading.resources.resolve(this.resources);
    this.loading.pageList.resolve(this.pageList);
    this.isOpen = true;
    if (this.archived || this.settings.replacements && this.settings.replacements != "none") {
      this.replacements().then(() => {
        this.opening.resolve(this);
      }).catch((err) => {
        console.error(err);
      });
    } else {
      this.opening.resolve(this);
    }
  }
  /**
   * Load Navigation and PageList from package
   * @private
   * @param {document} opf XML Document
   */
  loadNavigation(opf) {
    let navPath = opf.navPath || opf.ncxPath;
    let toc = opf.toc;
    if (toc) {
      return new Promise((resolve, reject) => {
        this.navigation = new navigation_default(toc);
        if (opf.pageList) {
          this.pageList = new pagelist_default(opf.pageList);
        }
        resolve(this.navigation);
      });
    }
    if (!navPath) {
      return new Promise((resolve, reject) => {
        this.navigation = new navigation_default();
        this.pageList = new pagelist_default();
        resolve(this.navigation);
      });
    }
    return this.load(navPath, "xml").then((xml) => {
      this.navigation = new navigation_default(xml);
      this.pageList = new pagelist_default(xml);
      return this.navigation;
    });
  }
  /**
   * Gets a Section of the Book from the Spine
   * Alias for `book.spine.get`
   * @param {string} target
   * @return {Section}
   */
  section(target) {
    return this.spine.get(target);
  }
  /**
   * Sugar to render a book to an element
   * @param  {element | string} element element or string to add a rendition to
   * @param  {object} [options]
   * @return {Rendition}
   */
  renderTo(element, options) {
    this.rendition = new rendition_default(this, options);
    this.rendition.attachTo(element);
    return this.rendition;
  }
  /**
   * Set if request should use withCredentials
   * @param {boolean} credentials
   */
  setRequestCredentials(credentials) {
    this.settings.requestCredentials = credentials;
  }
  /**
   * Set headers request should use
   * @param {object} headers
   */
  setRequestHeaders(headers) {
    this.settings.requestHeaders = headers;
  }
  /**
   * Unarchive a zipped epub
   * @private
   * @param  {binary} input epub data
   * @param  {string} [encoding]
   * @return {Archive}
   */
  unarchive(input, encoding) {
    this.archive = new archive_default();
    return this.archive.open(input, encoding);
  }
  /**
   * Get the cover url
   * @return {string} coverUrl
   */
  coverUrl() {
    var retrieved = this.loaded.cover.then((url) => {
      if (this.archived) {
        return this.resources.get(this.cover);
      } else {
        return this.cover;
      }
    });
    return retrieved;
  }
  /**
   * Load replacement urls
   * @private
   * @return {Promise} completed loading urls
   */
  replacements() {
    this.spine.hooks.serialize.register((output, section) => {
      section.output = this.resources.substitute(output, section.url);
    });
    return this.resources.replacements().then(() => {
      return this.resources.replaceCss();
    });
  }
  /**
   * Find a DOM Range for a given CFI Range
   * @param  {EpubCFI} cfiRange a epub cfi range
   * @return {Range}
   */
  getRange(cfiRange) {
    var cfi = new epubcfi_default(cfiRange);
    var item = this.spine.get(cfi.spinePos);
    var _request = this.load.bind(this);
    if (!item) {
      return new Promise((resolve, reject) => {
        reject("CFI could not be found");
      });
    }
    return item.load(_request).then(function(contents) {
      var range = cfi.toRange(item.document);
      return range;
    });
  }
  /**
   * Generates the Book Key using the identifer in the manifest or other string provided
   * @param  {string} [identifier] to use instead of metadata identifier
   * @return {string} key
   */
  key(identifier) {
    var ident = identifier || this.package.metadata.identifier || this.url.filename;
    return `epubjs:${EPUBJS_VERSION}:${ident}`;
  }
  /**
   * Destroy the Book and all associated objects
   */
  destroy() {
    this.opened = void 0;
    this.loading = void 0;
    this.loaded = void 0;
    this.ready = void 0;
    this.isOpen = false;
    this.isRendered = false;
    this.spine && this.spine.destroy();
    this.locations && this.locations.destroy();
    this.pageList && this.pageList.destroy();
    this.archive && this.archive.destroy();
    this.resources && this.resources.destroy();
    this.container && this.container.destroy();
    this.packaging && this.packaging.destroy();
    this.rendition && this.rendition.destroy();
    this.spine = void 0;
    this.locations = void 0;
    this.pageList = void 0;
    this.archive = void 0;
    this.resources = void 0;
    this.container = void 0;
    this.packaging = void 0;
    this.rendition = void 0;
    this.navigation = void 0;
    this.url = void 0;
    this.path = void 0;
    this.archived = false;
  }
};
(0, import_event_emitter8.default)(Book.prototype);
var book_default = Book;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/epub.js
init_core();
var import_url_polyfill = __toESM(require_url_polyfill());
function ePub(url, options) {
  return new book_default(url, options);
}
ePub.VERSION = EPUBJS_VERSION;
if (typeof global !== "undefined") {
  global.EPUBJS_VERSION = EPUBJS_VERSION;
}
ePub.Book = book_default;
ePub.Rendition = rendition_default;
ePub.Contents = contents_default;
ePub.CFI = epubcfi_default;
ePub.utils = core_exports;
var epub_default = ePub;

// ../../../AworkTable/XQWZ/Zyl_Wx_Ft/node_modules/.pnpm/epubjs@0.3.71/node_modules/epubjs/src/index.js
var src_default = epub_default;
export {
  book_default as Book,
  contents_default as Contents,
  epubcfi_default as EpubCFI,
  layout_default as Layout,
  rendition_default as Rendition,
  src_default as default
};
//# sourceMappingURL=epubjs.js.map
