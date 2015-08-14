var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function(a) {
  return void 0 !== a;
};
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
};
goog.define = function(a, b) {
  var c = b;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
  goog.exportPath_(a, c);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var c = a;(c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) {
      goog.implicitNamespaces_[c] = !0;
    }
  }
  goog.exportPath_(a, b);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (!COMPILED) {
    return goog.isProvided_(a) ? a in goog.loadedModules_ ? goog.loadedModules_[a] : goog.getObjectByName(a) : null;
  }
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if (goog.isDefAndNotNull(d[e])) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for (d in a) {
    c[d] = a[d];
  }
};
goog.addDependency = function(a, b, c, d) {
  if (goog.DEPENDENCIES_ENABLED) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = goog.dependencies_, g = 0;e = b[g];g++) {
      f.nameToPath[e] = a, f.pathIsModule[a] = !!d;
    }
    for (d = 0;b = c[d];d++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][b] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(a);
    if (goog.isProvided_(a)) {
      return goog.isInModuleLoader_() ? goog.module.getInternal_(a) : null;
    }
    if (goog.ENABLE_DEBUG_LOADER) {
      var b = goog.getPathFromDeps_(a);
      if (b) {
        return goog.included_[b] = !0, goog.writeScripts_(), null;
      }
    }
    a = "goog.require could not find: " + a;
    goog.logToConsole_(a);
    throw Error(a);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathIsModule:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return "undefined" != typeof a && "write" in a;
}, goog.findBasePath_ = function() {
  if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      for (var a = goog.global.document.getElementsByTagName("SCRIPT"), b = a.length - 1;0 <= b;--b) {
        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function(a, b) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0);
}, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.importModule_ = function(a) {
  goog.importScript_("", 'goog.retrieveAndExecModule_("' + a + '");') && (goog.dependencies_.written[a] = !0);
}, goog.queuedModules_ = [], goog.wrapModule_ = function(a, b) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + b + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, goog.loadQueuedModules_ = function() {
  var a = goog.queuedModules_.length;
  if (0 < a) {
    var b = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var c = 0;c < a;c++) {
      goog.maybeProcessDeferredPath_(b[c]);
    }
  }
}, goog.maybeProcessDeferredDep_ = function(a) {
  goog.isDeferredModule_(a) && goog.allDepsAreAvailable_(a) && (a = goog.getPathFromDeps_(a), goog.maybeProcessDeferredPath_(goog.basePath + a));
}, goog.isDeferredModule_ = function(a) {
  return (a = goog.getPathFromDeps_(a)) && goog.dependencies_.pathIsModule[a] ? goog.basePath + a in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function(a) {
  if ((a = goog.getPathFromDeps_(a)) && a in goog.dependencies_.requires) {
    for (var b in goog.dependencies_.requires[a]) {
      if (!goog.isProvided_(b) && !goog.isDeferredModule_(b)) {
        return !1;
      }
    }
  }
  return !0;
}, goog.maybeProcessDeferredPath_ = function(a) {
  if (a in goog.dependencies_.deferred) {
    var b = goog.dependencies_.deferred[a];
    delete goog.dependencies_.deferred[a];
    goog.globalEval(b);
  }
}, goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0};
    var c;
    if (goog.isFunction(a)) {
      c = a.call(goog.global, {});
    } else {
      if (goog.isString(a)) {
        c = goog.loadModuleFromSource_.call(goog.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = goog.moduleLoaderState_.moduleName;
    if (!goog.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(c);
    goog.loadedModules_[d] = c;
  } finally {
    goog.moduleLoaderState_ = b;
  }
}, goog.loadModuleFromSource_ = function(a) {
  eval(a);
  return {};
}, goog.writeScriptSrcNode_ = function(a) {
  goog.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, goog.appendScriptSrcNode_ = function(a) {
  var b = goog.global.document, c = b.createElement("script");
  c.type = "text/javascript";
  c.src = a;
  c.defer = !1;
  c.async = !1;
  b.head.appendChild(c);
}, goog.writeScriptTag_ = function(a, b) {
  if (goog.inHtmlDocument_()) {
    var c = goog.global.document;
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var d = goog.IS_OLD_IE_;
    void 0 === b ? d ? (d = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", c.write('<script type="text/javascript" src="' + a + '"' + d + ">\x3c/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(a) : goog.writeScriptSrcNode_(a) : c.write('<script type="text/javascript">' + b + "\x3c/script>");
    return !0;
  }
  return !1;
}, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {
  "complete" == a.readyState && goog.lastNonModuleScriptIndex_ == b && goog.loadQueuedModules_();
  return !0;
}, goog.writeScripts_ = function() {
  function a(e) {
    if (!(e in d.written)) {
      if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
        for (var f in d.requires[e]) {
          if (!goog.isProvided_(f)) {
            if (f in d.nameToPath) {
              a(d.nameToPath[f]);
            } else {
              throw Error("Undefined nameToPath for " + f);
            }
          }
        }
      }
      e in c || (c[e] = !0, b.push(e));
    }
  }
  var b = [], c = {}, d = goog.dependencies_, e;
  for (e in goog.included_) {
    d.written[e] || a(e);
  }
  for (var f = 0;f < b.length;f++) {
    e = b[f], goog.dependencies_.written[e] = !0;
  }
  var g = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for (f = 0;f < b.length;f++) {
    if (e = b[f]) {
      d.pathIsModule[e] ? goog.importModule_(goog.basePath + e) : goog.importScript_(goog.basePath + e);
    } else {
      throw goog.moduleLoaderState_ = g, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = g;
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0;b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  var b = new goog.global.XMLHttpRequest;
  b.open("get", a, !1);
  b.send();
  return b.responseText;
};
goog.retrieveAndExecModule_ = function(a) {
  if (!COMPILED) {
    var b = a;
    a = goog.normalizePath_(a);
    var c = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, d = goog.loadFileSync_(a);
    if (null != d) {
      d = goog.wrapModule_(a, d), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[b] = d, goog.queuedModules_.push(b)) : c(a, d);
    } else {
      throw Error("load of " + a + "failed");
    }
  }
};
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
goog.isNull = function(a) {
  return null === a;
};
goog.isDefAndNotNull = function(a) {
  return null != a;
};
goog.isArray = function(a) {
  return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isString = function(a) {
  return "string" == typeof a;
};
goog.isBoolean = function(a) {
  return "boolean" == typeof a;
};
goog.isNumber = function(a) {
  return "number" == typeof a;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    goog.global.execScript(a, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_) {
        if (goog.global.eval("var _evalTest_ = 1;"), "undefined" != typeof goog.global._evalTest_) {
          try {
            delete goog.global._evalTest_;
          } catch (b) {
          }
          goog.evalWorksForGlobals_ = !0;
        } else {
          goog.evalWorksForGlobals_ = !1;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval(a);
      } else {
        var c = goog.global.document, d = c.createElement("SCRIPT");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a;
  }, d = function(a) {
    a = a.split("-");
    for (var b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]));
    }
    return b.join("-");
  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
    return a;
  };
  return b ? a + "-" + d(b) : d(a);
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
    return d in b ? b[d] : a;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(a, c, f) {
    for (var g = Array(arguments.length - 2), h = 2;h < arguments.length;h++) {
      g[h - 2] = arguments[h];
    }
    return b.prototype[c].apply(a, g);
  };
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (d.superClass_) {
    for (var e = Array(arguments.length - 1), f = 1;f < arguments.length;f++) {
      e[f - 1] = arguments[f];
    }
    return d.superClass_.constructor.apply(a, e);
  }
  e = Array(arguments.length - 2);
  for (f = 2;f < arguments.length;f++) {
    e[f - 2] = arguments[f];
  }
  for (var f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if (g.prototype[b] === d) {
      f = !0;
    } else {
      if (f) {
        return g.prototype[b].apply(a, e);
      }
    }
  }
  if (a[b] === d) {
    return a.constructor.prototype[b].apply(a, e);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor || (c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
    if (b && b.prototype && b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) {
      return a;
    }
    var c = function() {
      var b = a.apply(this, arguments) || this;
      b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
      this.constructor === c && Object.seal(b);
      return b;
    };
    return c;
  }
  return a;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0;d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.tagUnsealableClass = function(a) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
var ash = {fsm:{}};
ash.fsm.ComponentSingletonProvider = function(a) {
  this.componentType = a;
};
ash.fsm.ComponentSingletonProvider.prototype.componentType = null;
ash.fsm.ComponentSingletonProvider.prototype.instance = null;
ash.fsm.ComponentSingletonProvider.prototype.getComponent = function() {
  null == this.instance && (this.instance = new this.componentType);
  return this.instance;
};
Object.defineProperties(ash.fsm.ComponentSingletonProvider.prototype, {identifier:{get:function() {
  return this.getComponent();
}}});
ash.tools = {};
ash.tools.ListIteratingSystem = function(a, b, c, d) {
  null == c && (c = null);
  null == d && (d = null);
  this.nodeClass = a;
  this.nodeUpdateFunction = b;
  this.nodeAddedFunction = c;
  this.nodeRemovedFunction = d;
};
goog.inherits(ash.tools.ListIteratingSystem, ash.core.System);
ash.tools.ListIteratingSystem.prototype.nodeList = null;
ash.tools.ListIteratingSystem.prototype.nodeClass = null;
ash.tools.ListIteratingSystem.prototype.nodeUpdateFunction = null;
ash.tools.ListIteratingSystem.prototype.nodeAddedFunction = null;
ash.tools.ListIteratingSystem.prototype.nodeRemovedFunction = null;
ash.tools.ListIteratingSystem.prototype.addToEngine = function(a) {
  this.nodeList = a.getNodeList(this.nodeClass);
  if (null !== this.nodeAddedFunction) {
    for (a = this.nodeList.head;a;) {
      this.nodeAddedFunction(a), a = a.next;
    }
    this.nodeList.nodeAdded.add(this.nodeAddedFunction);
  }
  null !== this.nodeRemovedFunction && this.nodeList.nodeRemoved.add(this.nodeRemovedFunction);
};
ash.tools.ListIteratingSystem.prototype.removeFromEngine = function(a) {
  null !== this.nodeAddedFunction && this.nodeList.nodeAdded.remove(this.nodeAddedFunction);
  null !== this.nodeRemovedFunction && this.nodeList.nodeRemoved.remove(this.nodeRemovedFunction);
  this.nodeList = null;
};
ash.tools.ListIteratingSystem.prototype.update = function(a) {
  var b;
  for (b = this.nodeList.head;b;) {
    this.nodeUpdateFunction(b, a), b = b.next;
  }
};
ash.ext = {};
ash.ext.Dictionary = function() {
};
ash.signals = {};
ash.signals.Signal2 = function() {
  return ash.signals.Signal2.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal2, ash.signals.SignalBase);
ash.signals.Signal2.prototype.dispatch = function(a, b) {
  var c;
  this.startDispatch();
  for (c = this.head;c;) {
    c.listener(a, b), c.once && this.remove(c.listener), c = c.next;
  }
  return this.endDispatch();
};
ash.ext.Util = function() {
};
ash.ext.Util.getClassName = function(a) {
  var b;
  return null != (b = a.className) ? b : a.name;
};
ash.core = {};
ash.core.Entity = function(a) {
  null == a && (a = "");
  Object.defineProperties(this, {name:{get:function() {
    return this._name;
  }, set:function(a) {
    var c;
    if (this._name !== a) {
      return c = this._name, this._name = a, this.nameChanged.dispatch(this, c);
    }
  }}});
  this.componentAdded = new ash.ext.Dictionary;
  this.componentRemoved = new ash.ext.Dictionary;
  this.nameChanged = new ash.ext.Dictionary;
  this.components = new ash.signals.Signal2;
  "" !== a ? (null == ash.core.Entity.nameCount[a] && (ash.core.Entity.nameCount[a] = 0), this._name = a + ++ash.core.Entity.nameCount[a]) : this._name = "_entity" + ++nameCount;
};
var nameCount;
ash.core.Entity.nameCount = {};
nameCount = 0;
ash.core.Entity.prototype._name = "";
ash.core.Entity.prototype.componentAdded = null;
ash.core.Entity.prototype.componentRemoved = null;
ash.core.Entity.prototype.nameChanged = null;
ash.core.Entity.prototype.previous = null;
ash.core.Entity.prototype.next = null;
ash.core.Entity.prototype.components = null;
ash.core.Entity.prototype.add = function(a, b) {
  null == b && (b = a.constructor);
  Util.getClassName(b) in this.components && this.remove(b);
  this.components[Util.getClassName(b)] = a;
  this.componentAdded.dispatch(this, b);
  return this;
};
ash.core.Entity.prototype.remove = function(a) {
  var b;
  b = null != Util.getClassName(a) ? Util.getClassName(a) : a;
  return (a = this.components[b]) ? (delete this.components[b], this.componentRemoved.dispatch(this, b), a) : null;
};
ash.core.Entity.prototype.get = function(a) {
  return this.components[Util.getClassName(a)];
};
ash.core.Entity.prototype.getAll = function() {
  var a, b, c, d, e;
  b = [];
  e = this.components;
  c = 0;
  for (d = e.length;c < d;c++) {
    a = e[c], b.push(a);
  }
  return b;
};
ash.core.Entity.prototype.has = function(a) {
  return Util.getClassName(a) in this.components;
};
ash.fsm.SystemSingletonProvider = function(a) {
  this.componentType = a;
};
ash.fsm.SystemSingletonProvider.prototype.componentType = null;
ash.fsm.SystemSingletonProvider.prototype.instance = null;
ash.fsm.SystemSingletonProvider.prototype.systemPriority = 0;
ash.fsm.SystemSingletonProvider.prototype.getSystem = function() {
  this.instance || (this.instance = new this.componentType);
  return this.instance;
};
Object.defineProperties(ash.fsm.SystemSingletonProvider.prototype, {identifier:{get:function() {
  return this.getSystem();
}}, priority:{get:function() {
  return this.systemPriority;
}, set:function(a) {
  return this.systemPriority = a;
}}});
ash.fsm.SystemInstanceProvider = function(a) {
  this.instance = a;
};
ash.fsm.SystemInstanceProvider.prototype.instance = null;
ash.fsm.SystemInstanceProvider.prototype.systemPriority = 0;
ash.fsm.SystemInstanceProvider.prototype.getSystem = function() {
  return this.instance;
};
Object.defineProperties(ash.fsm.SystemInstanceProvider.prototype, {identifier:{get:function() {
  return this.instance;
}}, priority:{get:function() {
  return this.systemPriority;
}, set:function(a) {
  return this.systemPriority = a;
}}});
ash.fsm.StateSystemMapping = function(a, b) {
  this.creatingState = a;
  this.provider = b;
};
ash.fsm.StateSystemMapping.prototype.creatingState = null;
ash.fsm.StateSystemMapping.prototype.provider = null;
ash.fsm.StateSystemMapping.prototype.withPriority = function(a) {
  this.provider.priority = a;
  return this;
};
ash.fsm.StateSystemMapping.prototype.addInstance = function(a) {
  return creatingState.addInstance(a);
};
ash.fsm.StateSystemMapping.prototype.addSingleton = function(a) {
  return creatingState.addSingleton(a);
};
ash.fsm.StateSystemMapping.prototype.addMethod = function(a) {
  return creatingState.addMethod(a);
};
ash.fsm.StateSystemMapping.prototype.addProvider = function(a) {
  return creatingState.addProvider(a);
};
ash.fsm.DynamicSystemProvider = function(a) {
  this.method = a;
};
ash.fsm.DynamicSystemProvider.prototype.method = function() {
};
ash.fsm.DynamicSystemProvider.prototype.systemPriority = 0;
ash.fsm.DynamicSystemProvider.prototype.getSystem = function() {
  return this.method();
};
Object.defineProperties(ash.fsm.DynamicSystemProvider.prototype, {identifier:{get:function() {
  return this.method;
}}, priority:{get:function() {
  return this.systemPriority;
}, set:function(a) {
  return this.systemPriority = a;
}}});
ash.fsm.EngineState = function() {
  this.providers = [];
};
ash.fsm.EngineState.prototype.providers = null;
ash.fsm.EngineState.prototype.addInstance = function(a) {
  return this.addProvider(new ash.fsm.DynamicSystemProvider(a));
};
ash.fsm.EngineState.prototype.addSingleton = function(a) {
  return this.addProvider(new ash.fsm.StateSystemMapping(a));
};
ash.fsm.EngineState.prototype.addMethod = function(a) {
  return this.addProvider(new ash.fsm.SystemInstanceProvider(a));
};
ash.fsm.EngineState.prototype.addProvider = function(a) {
  var b;
  b = new ash.fsm.SystemSingletonProvider(this, a);
  this.providers.push(a);
  return b;
};
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.debug = {};
goog.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
  this.reportErrorToServer = !0;
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.string = {};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length));
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length));
};
goog.string.caseInsensitiveEquals = function(a, b) {
  return a.toLowerCase() == b.toLowerCase();
};
goog.string.subs = function(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
goog.string.isEmptyString = function(a) {
  return 0 == a.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(a) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
goog.string.isAlpha = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
goog.string.isNumeric = function(a) {
  return !/[^0-9]/.test(a);
};
goog.string.isAlphaNumeric = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
goog.string.isSpace = function(a) {
  return " " == a;
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = String(a).toLowerCase(), d = String(b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1;
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(a, b) {
  if (a == b) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!b) {
    return 1;
  }
  for (var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), d = b.toLowerCase().match(goog.string.numerateCompareRegExp_), e = Math.min(c.length, d.length), f = 0;f < e;f++) {
    var g = c[f], h = d[f];
    if (g != h) {
      return c = parseInt(g, 10), !isNaN(c) && (d = parseInt(h, 10), !isNaN(d) && c - d) ? c - d : g < h ? -1 : 1;
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1;
};
goog.string.urlEncode = function(a) {
  return encodeURIComponent(String(a));
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
};
goog.string.htmlEscape = function(a, b) {
  if (b) {
    a = a.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
  } else {
    if (!goog.string.ALL_RE_.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(goog.string.AMP_RE_, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(goog.string.LT_RE_, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(goog.string.GT_RE_, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(goog.string.QUOT_RE_, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(goog.string.NULL_RE_, "&#0;"));
    goog.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(goog.string.E_RE_, "&#101;"));
  }
  return a;
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a;
};
goog.string.unescapeEntitiesWithDocument = function(a, b) {
  return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
};
goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
  var c = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, d;
  d = b ? b.createElement("div") : goog.global.document.createElement("div");
  return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, b) {
    var g = c[a];
    if (g) {
      return g;
    }
    if ("#" == b.charAt(0)) {
      var h = Number("0" + b.substr(1));
      isNaN(h) || (g = String.fromCharCode(h));
    }
    g || (d.innerHTML = a + " ", g = d.firstChild.nodeValue.slice(0, -1));
    return c[a] = g;
  });
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if (!isNaN(d)) {
            return String.fromCharCode(d);
          }
        }
        return a;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b);
};
goog.string.preserveSpaces = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(a, b) {
  for (var c = b.length, d = 0;d < c;d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if (d && a.length > b) {
    d > b && (d = b);
    var e = a.length - d;
    a = a.substring(0, b - d) + "..." + a.substring(e);
  } else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
  }
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
  }
  b.push('"');
  return b.join("");
};
goog.string.escapeString = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    b[c] = goog.string.escapeChar(a.charAt(c));
  }
  return b.join("");
};
goog.string.escapeChar = function(a) {
  if (a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a];
  }
  if (a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
  }
  var b = a, c = a.charCodeAt(0);
  if (31 < c && 127 > c) {
    b = a;
  } else {
    if (256 > c) {
      if (b = "\\x", 16 > c || 256 < c) {
        b += "0";
      }
    } else {
      b = "\\u", 4096 > c && (b += "0");
    }
    b += c.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[a] = b;
};
goog.string.contains = function(a, b) {
  return -1 != a.indexOf(b);
};
goog.string.caseInsensitiveContains = function(a, b) {
  return goog.string.contains(a.toLowerCase(), b.toLowerCase());
};
goog.string.countOf = function(a, b) {
  return a && b ? a.split(b).length - 1 : 0;
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d;
};
goog.string.remove = function(a, b) {
  var c = new RegExp(goog.string.regExpEscape(b), "");
  return a.replace(c, "");
};
goog.string.removeAll = function(a, b) {
  var c = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "");
};
goog.string.regExpEscape = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = function(a, b) {
  return Array(b + 1).join(a);
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : String(a);
  c = a.indexOf(".");
  -1 == c && (c = a.length);
  return goog.string.repeat("0", Math.max(0, b - c)) + a;
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : String(a);
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function(a, b) {
  for (var c = 0, d = goog.string.trim(String(a)).split("."), e = goog.string.trim(String(b)).split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
    var h = d[g] || "", k = e[g] || "", l = /(\d*)(\D*)/g, p = /(\d*)(\D*)/g;
    do {
      var m = l.exec(h) || ["", "", ""], n = p.exec(k) || ["", "", ""];
      if (0 == m[0].length && 0 == n[0].length) {
        break;
      }
      var c = 0 == m[1].length ? 0 : parseInt(m[1], 10), q = 0 == n[1].length ? 0 : parseInt(n[1], 10), c = goog.string.compareElements_(c, q) || goog.string.compareElements_(0 == m[2].length, 0 == n[2].length) || goog.string.compareElements_(m[2], n[2]);
    } while (0 == c);
  }
  return c;
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_;
  }
  return b;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
};
goog.string.isLowerCamelCase = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
goog.string.isUpperCamelCase = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
goog.string.toCamelCase = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
goog.string.toSelectorCase = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(a, b) {
  var c = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
  return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
    return b + c.toUpperCase();
  });
};
goog.string.capitalize = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
goog.string.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
goog.string.splitLimit = function(a, b, c) {
  a = a.split(b);
  for (var d = [];0 < c && a.length;) {
    d.push(a.shift()), c--;
  }
  a.length && d.push(a.join(b));
  return d;
};
goog.string.editDistance = function(a, b) {
  var c = [], d = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (var e = 0;e < b.length + 1;e++) {
    c[e] = e;
  }
  for (e = 0;e < a.length;e++) {
    d[0] = e + 1;
    for (var f = 0;f < b.length;f++) {
      d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + (a[e] != b[f]));
    }
    for (f = 0;f < c.length;f++) {
      c[f] = d[f];
    }
  }
  return d[b.length];
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
  throw a;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    var e = e + (": " + c), f = d
  } else {
    a && (e += ": " + a, f = b);
  }
  a = new goog.asserts.AssertionError("" + e, f || []);
  goog.asserts.errorHandler_(a);
};
goog.asserts.setErrorHandler = function(a) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.fail = function(a, b) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertElement = function(a, b, c) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
};
goog.asserts.assertObjectPrototypeIsIntact = function() {
  for (var a in Object.prototype) {
    goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
  }
};
goog.asserts.getType_ = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.ASSUME_NATIVE_FUNCTIONS = !1;
goog.array.peek = function(a) {
  return a[a.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (goog.isString(a)) {
    return goog.isString(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, b, null == c ? a.length - 1 : c);
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if (goog.isString(a)) {
    return goog.isString(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
  }
  for (;0 <= c;c--) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
goog.array.forEachRight = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;--d) {
    d in e && b.call(c, e[d], d, a);
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0;h < d;h++) {
    if (h in g) {
      var k = g[h];
      b.call(c, k, h, a) && (e[f++] = k);
    }
  }
  return e;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a));
  }
  return e;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  d && (b = goog.bind(b, d));
  return goog.array.ARRAY_PROTOTYPE_.reduce.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  goog.array.forEach(a, function(c, g) {
    e = b.call(d, e, c, g, a);
  });
  return e;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  d && (b = goog.bind(b, d));
  return goog.array.ARRAY_PROTOTYPE_.reduceRight.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  goog.array.forEachRight(a, function(c, g) {
    e = b.call(d, e, c, g, a);
  });
  return e;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return !0;
    }
  }
  return !1;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return !1;
    }
  }
  return !0;
};
goog.array.count = function(a, b, c) {
  var d = 0;
  goog.array.forEach(a, function(a, f, g) {
    b.call(c, a, f, g) && ++d;
  }, c);
  return d;
};
goog.array.find = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndex = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return f;
    }
  }
  return -1;
};
goog.array.findRight = function(a, b, c) {
  b = goog.array.findIndexRight(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndexRight = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;d--) {
    if (d in e && b.call(c, e[d], d, a)) {
      return d;
    }
  }
  return -1;
};
goog.array.contains = function(a, b) {
  return 0 <= goog.array.indexOf(a, b);
};
goog.array.isEmpty = function(a) {
  return 0 == a.length;
};
goog.array.clear = function(a) {
  if (!goog.isArray(a)) {
    for (var b = a.length - 1;0 <= b;b--) {
      delete a[b];
    }
  }
  a.length = 0;
};
goog.array.insert = function(a, b) {
  goog.array.contains(a, b) || a.push(b);
};
goog.array.insertAt = function(a, b, c) {
  goog.array.splice(a, c, 0, b);
};
goog.array.insertArrayAt = function(a, b, c) {
  goog.partial(goog.array.splice, a, c, 0).apply(null, b);
};
goog.array.insertBefore = function(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d);
};
goog.array.remove = function(a, b) {
  var c = goog.array.indexOf(a, b), d;
  (d = 0 <= c) && goog.array.removeAt(a, c);
  return d;
};
goog.array.removeAt = function(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1).length;
};
goog.array.removeIf = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1;
};
goog.array.removeAllIf = function(a, b, c) {
  var d = 0;
  goog.array.forEachRight(a, function(e, f) {
    b.call(c, e, f, a) && goog.array.removeAt(a, f) && d++;
  });
  return d;
};
goog.array.concat = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.join = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.toArray = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = arguments[c];
    if (goog.isArrayLike(d)) {
      var e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (var g = 0;g < f;g++) {
        a[e + g] = d[g];
      }
    } else {
      a.push(d);
    }
  }
};
goog.array.splice = function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(a, goog.array.slice(arguments, 1));
};
goog.array.slice = function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(a, b) : goog.array.ARRAY_PROTOTYPE_.slice.call(a, b, c);
};
goog.array.removeDuplicates = function(a, b, c) {
  b = b || a;
  var d = function(a) {
    return goog.isObject(a) ? "o" + goog.getUid(a) : (typeof a).charAt(0) + a;
  };
  c = c || d;
  for (var d = {}, e = 0, f = 0;f < a.length;) {
    var g = a[f++], h = c(g);
    Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, b[e++] = g);
  }
  b.length = e;
};
goog.array.binarySearch = function(a, b, c) {
  return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b);
};
goog.array.binarySelect = function(a, b, c) {
  return goog.array.binarySearch_(a, b, !0, void 0, c);
};
goog.array.binarySearch_ = function(a, b, c, d, e) {
  for (var f = 0, g = a.length, h;f < g;) {
    var k = f + g >> 1, l;
    l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
    0 < l ? f = k + 1 : (g = k, h = !l);
  }
  return h ? f : ~f;
};
goog.array.sort = function(a, b) {
  a.sort(b || goog.array.defaultCompare);
};
goog.array.stableSort = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || goog.array.defaultCompare;
  goog.array.sort(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
};
goog.array.sortByKey = function(a, b, c) {
  var d = c || goog.array.defaultCompare;
  goog.array.sort(a, function(a, c) {
    return d(b(a), b(c));
  });
};
goog.array.sortObjectsByKey = function(a, b, c) {
  goog.array.sortByKey(a, function(a) {
    return a[b];
  }, c);
};
goog.array.isSorted = function(a, b, c) {
  b = b || goog.array.defaultCompare;
  for (var d = 1;d < a.length;d++) {
    var e = b(a[d - 1], a[d]);
    if (0 < e || 0 == e && c) {
      return !1;
    }
  }
  return !0;
};
goog.array.equals = function(a, b, c) {
  if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) {
    return !1;
  }
  var d = a.length;
  c = c || goog.array.defaultCompareEquality;
  for (var e = 0;e < d;e++) {
    if (!c(a[e], b[e])) {
      return !1;
    }
  }
  return !0;
};
goog.array.compare3 = function(a, b, c) {
  c = c || goog.array.defaultCompare;
  for (var d = Math.min(a.length, b.length), e = 0;e < d;e++) {
    var f = c(a[e], b[e]);
    if (0 != f) {
      return f;
    }
  }
  return goog.array.defaultCompare(a.length, b.length);
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
goog.array.inverseDefaultCompare = function(a, b) {
  return -goog.array.defaultCompare(a, b);
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b;
};
goog.array.binaryInsert = function(a, b, c) {
  c = goog.array.binarySearch(a, b, c);
  return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1;
};
goog.array.binaryRemove = function(a, b, c) {
  b = goog.array.binarySearch(a, b, c);
  return 0 <= b ? goog.array.removeAt(a, b) : !1;
};
goog.array.bucket = function(a, b, c) {
  for (var d = {}, e = 0;e < a.length;e++) {
    var f = a[e], g = b.call(c, f, e, a);
    goog.isDef(g) && (d[g] || (d[g] = [])).push(f);
  }
  return d;
};
goog.array.toObject = function(a, b, c) {
  var d = {};
  goog.array.forEach(a, function(e, f) {
    d[b.call(c, e, f, a)] = e;
  });
  return d;
};
goog.array.range = function(a, b, c) {
  var d = [], e = 0, f = a;
  c = c || 1;
  void 0 !== b && (e = a, f = b);
  if (0 > c * (f - e)) {
    return [];
  }
  if (0 < c) {
    for (a = e;a < f;a += c) {
      d.push(a);
    }
  } else {
    for (a = e;a > f;a += c) {
      d.push(a);
    }
  }
  return d;
};
goog.array.repeat = function(a, b) {
  for (var c = [], d = 0;d < b;d++) {
    c[d] = a;
  }
  return c;
};
goog.array.flatten = function(a) {
  for (var b = [], c = 0;c < arguments.length;c++) {
    var d = arguments[c];
    if (goog.isArray(d)) {
      for (var e = 0;e < d.length;e += 8192) {
        for (var f = goog.array.slice(d, e, e + 8192), f = goog.array.flatten.apply(null, f), g = 0;g < f.length;g++) {
          b.push(f[g]);
        }
      }
    } else {
      b.push(d);
    }
  }
  return b;
};
goog.array.rotate = function(a, b) {
  goog.asserts.assert(null != a.length);
  a.length && (b %= a.length, 0 < b ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-b, b)) : 0 > b && goog.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -b)));
  return a;
};
goog.array.moveItem = function(a, b, c) {
  goog.asserts.assert(0 <= b && b < a.length);
  goog.asserts.assert(0 <= c && c < a.length);
  b = goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1);
  goog.array.ARRAY_PROTOTYPE_.splice.call(a, c, 0, b[0]);
};
goog.array.zip = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var b = [], c = 0;;c++) {
    for (var d = [], e = 0;e < arguments.length;e++) {
      var f = arguments[e];
      if (c >= f.length) {
        return b;
      }
      d.push(f[c]);
    }
    b.push(d);
  }
};
goog.array.shuffle = function(a, b) {
  for (var c = b || Math.random, d = a.length - 1;0 < d;d--) {
    var e = Math.floor(c() * (d + 1)), f = a[d];
    a[d] = a[e];
    a[e] = f;
  }
};
goog.array.copyByIndex = function(a, b) {
  var c = [];
  goog.array.forEach(b, function(b) {
    c.push(a[b]);
  });
  return c;
};
ash.tools.ComponentPool = function() {
};
var getPool, pools;
pools = new ash.ext.Dictionary;
getPool = function(a) {
  var b;
  return (b = a.className, 0 <= goog.array.indexOf(pools, b)) ? pools[a.className] : pools[a.className] = [];
};
ash.tools.ComponentPool.get = function(a) {
  var b;
  b = getPool(a);
  return 0 < b.length ? b.pop() : new a;
};
ash.tools.ComponentPool.dispose = function(a) {
  var b;
  a && (b = a.constructor, b = getPool(b), b.push(a));
};
ash.tools.ComponentPool.empty = function() {
  return pools = new ash.ext.Dictionary;
};
ash.fsm.ComponentInstanceProvider = function(a) {
  this.instance = a;
};
ash.fsm.ComponentInstanceProvider.prototype.instance = null;
ash.fsm.ComponentInstanceProvider.prototype.getComponent = function() {
  return this.instance;
};
Object.defineProperties(ash.fsm.ComponentInstanceProvider.prototype, {identifier:{get:function() {
  return this.instance;
}}});
ash.fsm.ComponentTypeProvider = function(a) {
  this.componentType = a;
};
ash.fsm.ComponentTypeProvider.prototype.componentType = null;
ash.fsm.ComponentTypeProvider.prototype.getComponent = function() {
  return new this.componentType;
};
Object.defineProperties(ash.fsm.ComponentTypeProvider.prototype, {identifier:{get:function() {
  return this.componentType;
}}});
ash.fsm.DynamicComponentProvider = function(a) {
  this._closure = a;
};
ash.fsm.DynamicComponentProvider.prototype._closure = null;
ash.fsm.DynamicComponentProvider.prototype.getComponent = function() {
  return this._closure;
};
Object.defineProperties(ash.fsm.DynamicComponentProvider.prototype, {identifier:{get:function() {
  return this._closure;
}}});
ash.fsm.StateComponentMapping = function(a, b) {
  this.creatingState = a;
  this.componentType = b;
  this.withType(b);
};
ash.fsm.StateComponentMapping.prototype.componentType = null;
ash.fsm.StateComponentMapping.prototype.creatingState = null;
ash.fsm.StateComponentMapping.prototype.provider = null;
ash.fsm.StateComponentMapping.prototype.withInstance = function(a) {
  this.setProvider(new ash.fsm.ComponentInstanceProvider(a));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withType = function(a) {
  this.setProvider(new ash.fsm.ComponentSingletonProvider(a));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withSingleton = function(a) {
  null == a && (a = this.componentType);
  this.setProvider(new ash.fsm.ComponentTypeProvider(a));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withMethod = function(a) {
  this.setProvider(new ash.fsm.DynamicComponentProvider(a));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withProvider = function(a) {
  this.setProvider(a);
  return this;
};
ash.fsm.StateComponentMapping.prototype.add = function(a) {
  return this.creatingState.add(a);
};
ash.fsm.StateComponentMapping.prototype.setProvider = function(a) {
  this.provider = a;
  return this.creatingState.providers[this.componentType] = a;
};
ash.core.SystemList = function() {
};
ash.core.SystemList.prototype.head = null;
ash.core.SystemList.prototype.tail = null;
ash.core.SystemList.prototype.add = function(a) {
  var b;
  if (this.head) {
    for (b = this.tail;b && !(b.priority <= a.priority);) {
      b = b.previous;
    }
    b === this.tail ? (this.tail.next = a, a.previous = this.tail, a.next = null, this.tail = a) : b ? (a.next = b.next, a.previous = b, b.next.previous = a, b.next = a) : (a.next = this.head, a.previous = null, this.head = this.head.previous = a);
  } else {
    this.head = this.tail = a, a.next = a.previous = null;
  }
};
ash.core.SystemList.prototype.remove = function(a) {
  this.head === a && (this.head = this.head.next);
  this.tail === a && (this.tail = this.tail.previous);
  a.previous && (a.previous.next = a.next);
  a.next && (a.next.previous = a.previous);
};
ash.core.SystemList.prototype.removeAll = function() {
  for (var a;this.head;) {
    a = this.head, this.head = this.head.next, a.previous = null, a.next = null;
  }
  this.tail = null;
};
ash.core.SystemList.prototype.get = function(a) {
  var b;
  for (b = this.head;b;) {
    if (b.constructor === a) {
      return b;
    }
    b = b.next;
  }
  return null;
};
ash.signals.Signal0 = function() {
  return ash.signals.Signal0.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal0, ash.signals.SignalBase);
ash.signals.Signal0.prototype.dispatch = function() {
  var a;
  this.startDispatch();
  for (a = this.head;null !== a;) {
    a.listener(), a.once && this.remove(a.listener), a = a.next;
  }
  return this.endDispatch();
};
ash.core.EntityList = function() {
};
ash.core.EntityList.prototype.head = null;
ash.core.EntityList.prototype.tail = null;
ash.core.EntityList.prototype.add = function(a) {
  this.head ? (this.tail.next = a, a.previous = this.tail, a.next = null, this.tail = a) : (this.head = this.tail = a, a.next = a.previous = null);
};
ash.core.EntityList.prototype.remove = function(a) {
  this.head === a && (this.head = this.head.next);
  this.tail === a && (this.tail = this.tail.previous);
  a.previous && (a.previous.next = a.next);
  a.next && (a.next.previous = a.previous);
};
ash.core.EntityList.prototype.removeAll = function() {
  for (var a;this.head;) {
    a = this.head, this.head = this.head.next, a.previous = null, a.next = null;
  }
  this.tail = null;
};
ash.core.Engine = function() {
  this.update = goog.bind(this.update, this);
  this.componentRemoved = goog.bind(this.componentRemoved, this);
  this.componentAdded = goog.bind(this.componentAdded, this);
  this.entityNameChanged = goog.bind(this.entityNameChanged, this);
  this.entityList = new ash.ext.Dictionary;
  this.entityNames = new ash.core.EntityList;
  this.systemList = new ash.signals.Signal0;
  this.families = new ash.core.EntityList;
  this.updateComplete = new ash.core.SystemList;
};
ash.core.Engine.prototype.entityNames = null;
ash.core.Engine.prototype.entityList = null;
ash.core.Engine.prototype.systemList = null;
ash.core.Engine.prototype.families = null;
ash.core.Engine.prototype.updating = !1;
ash.core.Engine.prototype.updateComplete = null;
ash.core.Engine.prototype.familyClass = ash.core.ComponentMatchingFamily;
Object.defineProperties(ash.core.Engine.prototype, {entities:{get:function() {
  var a;
  for (a = this.entityList.head;a;) {
    this.entities.push(a), a = a.next;
  }
  return [];
}}, systems:{get:function() {
  var a, b;
  b = [];
  for (a = this.systemList.head;a;) {
    b.push(a), a = a.next;
  }
  return b;
}}});
ash.core.Engine.prototype.addEntity = function(a) {
  var b, c, d;
  if (this.entityNames[a.name]) {
    throw "The entity name " + a.name + " is already in use by another entity.";
  }
  this.entityList.add(a);
  this.entityNames[a.name] = a;
  a.componentAdded.add(this.componentAdded);
  a.componentRemoved.add(this.componentRemoved);
  a.nameChanged.add(this.entityNameChanged);
  d = this.families;
  for (b in d) {
    c = d[b], c.newEntity(a);
  }
};
ash.core.Engine.prototype.removeEntity = function(a) {
  var b, c, d;
  a.componentAdded.remove(this.componentAdded);
  a.componentRemoved.remove(this.componentRemoved);
  a.nameChanged.remove(this.entityNameChanged);
  d = this.families;
  for (b in d) {
    c = d[b], c.removeEntity(a);
  }
  delete this.entityNames[a.name];
  this.entityList.remove(a);
};
ash.core.Engine.prototype.entityNameChanged = function(a, b) {
  this.entityNames[b] === a && (delete this.entityNames[b], this.entityNames[a.name] = a);
};
ash.core.Engine.prototype.getEntityByName = function(a) {
  return this.entityNames[a];
};
ash.core.Engine.prototype.removeAllEntities = function() {
  for (;null !== this.entityList.head;) {
    this.removeEntity(this.entityList.head);
  }
};
ash.core.Engine.prototype.componentAdded = function(a, b) {
  var c, d, e;
  e = this.families;
  for (c in e) {
    d = e[c], d.componentAddedToEntity(a, b);
  }
};
ash.core.Engine.prototype.componentRemoved = function(a, b) {
  var c, d, e;
  e = this.families;
  for (c in e) {
    d = e[c], d.componentRemovedFromEntity(a, b);
  }
};
ash.core.Engine.prototype.getNodeList = function(a) {
  var b;
  if (Util.getClassName(a) in this.families) {
    return this.families[Util.getClassName(a)].nodeList;
  }
  b = new this.familyClass(a, this);
  this.families[Util.getClassName(a)] = b;
  for (a = this.entityList.head;a;) {
    b.newEntity(a), a = a.next;
  }
  return b.nodeList;
};
ash.core.Engine.prototype.releaseNodeList = function(a) {
  Util.getClassName(a) in this.families && (this.families[Util.getClassName(a)].cleanUp(), delete this.families[Util.getClassName(a)]);
};
ash.core.Engine.prototype.addSystem = function(a, b) {
  a.priority = b;
  a.addToEngine(this);
  this.systemList.add(a);
};
ash.core.Engine.prototype.getSystem = function(a) {
  return systemList.get(a);
};
ash.core.Engine.prototype.removeSystem = function(a) {
  this.systemList.remove(a);
  a.removeFromEngine(this);
};
ash.core.Engine.prototype.removeAllSystems = function() {
  for (;null !== this.systemList.head;) {
    this.removeSystem(this.systemList.head);
  }
};
ash.core.Engine.prototype.update = function(a) {
  var b;
  this.updating = !0;
  for (b = this.systemList.head;b;) {
    b.update(a), b = b.next;
  }
  this.updating = !1;
  this.updateComplete.dispatch();
};
ash.ext.Helper = function(a, b) {
  var c, d, e, f, g;
  this.components = {};
  this.nodes = {};
  if (null != a) {
    for (d in a) {
      c = a[d], this.components[d] = c;
    }
  }
  if (null != b) {
    for (d in b) {
      c = b[d];
      if (null == c.components) {
        c.components = {};
        g = c.prototype;
        for (e in g) {
          __hasProp.call(g, e) && (f = g[e], c.components[e] = f, c.prototype[e] = null);
        }
        c.prototype.entity = null;
        c.prototype.previous = null;
        c.prototype.next = null;
      }
      null != a && (this.nodes[d] = c);
    }
  }
};
ash.ext.Helper.prototype.components = null;
ash.ext.Helper.prototype.nodes = null;
ash.core.NodePool = function(a, b) {
  this.nodeClass = a;
  this.components = b;
};
ash.core.NodePool.prototype.tail = null;
ash.core.NodePool.prototype.nodeClass = null;
ash.core.NodePool.prototype.cacheTail = null;
ash.core.NodePool.prototype.components = null;
ash.core.NodePool.prototype.get = function() {
  var a;
  this.tail ? (a = this.tail, this.tail = this.tail.previous, a.previous = null) : a = new this.nodeClass;
  return a;
};
ash.core.NodePool.prototype.dispose = function(a) {
  for (var b in this.components) {
    a[b] = null;
  }
  a.entity = null;
  a.next = null;
  a.previous = this.tail;
  this.tail = a;
};
ash.core.NodePool.prototype.cache = function(a) {
  a.previous = this.cacheTail;
  this.cacheTail = a;
};
ash.core.NodePool.prototype.releaseCache = function() {
  for (var a;this.cacheTail;) {
    a = this.cacheTail, this.cacheTail = a.previous, this.dispose(a);
  }
};
ash.signals.Signal1 = function() {
  return ash.signals.Signal1.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal1, ash.signals.SignalBase);
ash.signals.Signal1.prototype.dispatch = function(a) {
  var b;
  this.startDispatch();
  for (b = this.head;null !== b;) {
    b.listener(a), b.once && this.remove(b.listener), b = b.next;
  }
  return this.endDispatch();
};
ash.core.NodeList = function() {
  this.nodeAdded = new ash.signals.Signal1;
  this.nodeRemoved = new ash.signals.Signal1;
};
ash.core.NodeList.prototype.head = null;
ash.core.NodeList.prototype.tail = null;
ash.core.NodeList.prototype.nodeAdded = null;
ash.core.NodeList.prototype.nodeRemoved = null;
ash.core.NodeList.prototype.add = function(a) {
  this.head ? (this.tail.next = a, a.previous = this.tail, a.next = null, this.tail = a) : (this.head = this.tail = a, a.next = a.previous = null);
  this.nodeAdded.dispatch(a);
};
ash.core.NodeList.prototype.remove = function(a) {
  this.head === a && (this.head = this.head.next);
  this.tail === a && (this.tail = this.tail.previous);
  a.previous && (a.previous.next = a.next);
  a.next && (a.next.previous = a.previous);
  this.nodeRemoved.dispatch(a);
};
ash.core.NodeList.prototype.removeAll = function() {
  for (var a;this.head;) {
    a = this.head, this.head = this.head.next, a.previous = null, a.next = null, this.nodeRemoved.dispatch(a);
  }
  this.tail = null;
};
Object.defineProperties(ash.core.NodeList.prototype, {empty:{get:function() {
  return null === this.head;
}}});
ash.core.NodeList.prototype.swap = function(a, b) {
  var c;
  a.previous === b ? (a.previous = b.previous, b.previous = a, b.next = a.next, a.next = b) : b.previous === a ? (b.previous = a.previous, a.previous = b, a.next = b.next, b.next = a) : (c = a.previous, a.previous = b.previous, b.previous = c, c = a.next, a.next = b.next, b.next = c);
  this.head === a ? this.head = b : this.head === b && (this.head = a);
  this.tail === a ? this.tail = b : this.tail === b && (this.tail = a);
  null !== a.previous && (a.previous.next = a);
  null !== b.previous && (b.previous.next = b);
  null !== a.next && (a.next.previous = a);
  null !== b.next && (b.next.previous = b);
};
ash.core.NodeList.prototype.insertionSort = function(a) {
  var b, c, d;
  if (this.head !== this.tail) {
    for (b = d = this.head.next;null !== b;) {
      d = b.next;
      for (c = b.previous;null !== c;) {
        if (0 <= a(b, c)) {
          b !== c.next && (this.tail === b && (this.tail = b.previous), b.previous.next = b.next, null !== b.next && (b.next.previous = b.previous), b.next = c.next, b.previous = c, b.next.previous = b, c.next = b);
          break;
        }
        c = c.previous;
      }
      null === c && (this.tail === b && (this.tail = b.previous), b.previous.next = b.next, null !== b.next && (b.next.previous = b.previous), b.next = this.head, this.head.previous = b, b.previous = null, this.head = b);
      b = d;
    }
  }
};
ash.core.NodeList.prototype.mergeSort = function(a) {
  var b, c, d, e;
  if (this.head !== this.tail) {
    c = [];
    for (e = this.head;null !== e;) {
      for (b = e;null !== b.next && 0 >= a(b, b.next);) {
        b = b.next;
      }
      d = b.next;
      e.previous = b.next = null;
      c.push(e);
      e = d;
    }
    for (;1 < c.length;) {
      c.push(this.merge(c.shift(), c.shift(), a));
    }
    for (this.tail = this.head = c[0];null !== this.tail.next;) {
      this.tail = this.tail.next;
    }
  }
};
ash.core.NodeList.prototype.merge = function(a, b, c) {
  var d, e;
  0 >= c(a, b) ? (d = e = a, a = a.next) : (d = e = b, b = b.next);
  for (;null !== a && null !== b;) {
    0 >= c(a, b) ? (e.next = a, a.previous = e, e = a, a = a.next) : (e.next = b, b.previous = e, e = b, b = b.next);
  }
  null !== a ? (e.next = a, a.previous = e) : (e.next = b, b.previous = e);
  return d;
};
ash.core.ComponentMatchingFamily = function(a, b) {
  this.nodeClass = a;
  this.engine = b;
  this.releaseNodePoolCache = goog.bind(this.releaseNodePoolCache, this);
  this.init();
};
ash.core.ComponentMatchingFamily.prototype.nodes = null;
ash.core.ComponentMatchingFamily.prototype.entities = null;
ash.core.ComponentMatchingFamily.prototype.nodeClass = null;
ash.core.ComponentMatchingFamily.prototype.components = null;
ash.core.ComponentMatchingFamily.prototype.nodePool = null;
ash.core.ComponentMatchingFamily.prototype.engine = null;
ash.core.ComponentMatchingFamily.prototype.init = function() {
  var a, b, c;
  this.nodes = new ash.core.NodeList;
  this.entities = new ash.core.EntityList;
  this.components = new ash.core.EntityList;
  this.nodePool = new ash.core.NodePool(this.nodeClass, this.nodeClass.components);
  c = this.nodeClass.components;
  for (a in c) {
    b = c[a], this.components[Util.getClassName(b)] = b;
  }
};
Object.defineProperties(ash.core.ComponentMatchingFamily.prototype, {nodeList:{get:function() {
  return this.nodes;
}}});
ash.core.ComponentMatchingFamily.prototype.newEntity = function(a) {
  this.addIfMatch(a);
};
ash.core.ComponentMatchingFamily.prototype.componentAddedToEntity = function(a, b) {
  this.addIfMatch(a);
};
ash.core.ComponentMatchingFamily.prototype.componentRemovedFromEntity = function(a, b) {
  (null != Util.getClassName(b) ? Util.getClassName(b) : b) in this.components && this.removeIfMatch(a);
};
ash.core.ComponentMatchingFamily.prototype.removeEntity = function(a) {
  this.removeIfMatch(a);
};
ash.core.ComponentMatchingFamily.prototype.addIfMatch = function(a) {
  var b, c, d, e;
  if (null == this.entities[a.name]) {
    d = this.nodeClass.components;
    for (c in d) {
      if (b = d[c], !a.has(b)) {
        return;
      }
    }
    d = this.nodePool.get();
    d.entity = a;
    e = this.nodeClass.components;
    for (c in e) {
      b = e[c], d[c] = a.get(b);
    }
    this.entities[a.name] = d;
    this.nodes.add(d);
  }
};
ash.core.ComponentMatchingFamily.prototype.removeIfMatch = function(a) {
  var b;
  a.name in this.entities && (b = this.entities[a.name], delete this.entities[a.name], this.nodes.remove(b), this.engine.updating ? (this.nodePool.cache(b), this.engine.updateComplete.add(this.releaseNodePoolCache)) : this.nodePool.dispose(b));
};
ash.core.ComponentMatchingFamily.prototype.releaseNodePoolCache = function() {
  this.engine.updateComplete.remove(this.releaseNodePoolCache);
  this.nodePool.releaseCache();
};
ash.core.ComponentMatchingFamily.prototype.cleanUp = function() {
  var a;
  for (a = this.nodes.head;a;) {
    this.entities.remove(a.entity), a = a.next;
  }
  this.nodes.removeAll();
};
ash.core.System = function() {
  this.update = goog.bind(this.update, this);
};
ash.core.System.prototype.previous = null;
ash.core.System.prototype.next = null;
ash.core.System.prototype.priority = 0;
ash.core.System.prototype.addToEngine = function(a) {
};
ash.core.System.prototype.removeFromEngine = function(a) {
};
ash.core.System.prototype.update = function(a) {
};
ash.signals.Signal3 = function() {
  return ash.signals.Signal3.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal3, ash.signals.SignalBase);
ash.signals.Signal3.prototype.dispatch = function(a, b, c) {
  var d;
  this.startDispatch();
  for (d = this.head;null !== d;) {
    d.listener(a, b, c), d.once && this.remove(d.listener), d = d.next;
  }
  return this.endDispatch();
};
ash.signals.ListenerNode = function() {
};
ash.signals.ListenerNode.prototype.previous = null;
ash.signals.ListenerNode.prototype.next = null;
ash.signals.ListenerNode.prototype.listener = null;
ash.signals.ListenerNode.prototype.once = !1;
ash.signals.ListenerNodePool = function() {
};
ash.signals.ListenerNodePool.prototype.tail = null;
ash.signals.ListenerNodePool.prototype.cacheTail = null;
ash.signals.ListenerNodePool.prototype.get = function() {
  var a;
  return null !== this.tail ? (a = this.tail, this.tail = this.tail.previous, a.previous = null, a) : new ash.signals.ListenerNode;
};
ash.signals.ListenerNodePool.prototype.dispose = function(a) {
  a.listener = null;
  a.once = !1;
  a.next = null;
  a.previous = this.tail;
  this.tail = a;
};
ash.signals.ListenerNodePool.prototype.cache = function(a) {
  a.listener = null;
  a.previous = this.cacheTail;
  this.cacheTail = a;
};
ash.signals.ListenerNodePool.prototype.releaseCache = function() {
  for (var a;null !== this.cacheTail;) {
    a = this.cacheTail, this.cacheTail = a.previous, a.next = null, a.previous = this.tail, this.tail = a;
  }
};
ash.signals.SignalBase = function() {
  this.nodes = [];
  this.keys = [];
  this.listenerNodePool = new ash.signals.ListenerNodePool;
  this.numListeners = 0;
};
ash.signals.SignalBase.prototype.head = null;
ash.signals.SignalBase.prototype.tail = null;
ash.signals.SignalBase.prototype.numListeners = 0;
ash.signals.SignalBase.prototype.keys = null;
ash.signals.SignalBase.prototype.nodes = null;
ash.signals.SignalBase.prototype.listenerNodePool = null;
ash.signals.SignalBase.prototype.toAddHead = null;
ash.signals.SignalBase.prototype.toAddTail = null;
ash.signals.SignalBase.prototype.dispatching = !1;
ash.signals.SignalBase.prototype.startDispatch = function() {
  this.dispatching = !0;
};
ash.signals.SignalBase.prototype.endDispatch = function() {
  this.dispatching = !1;
  this.toAddHead && (this.head ? (this.tail.next = this.toAddHead, this.toAddHead.previous = this.tail) : this.head = this.toAddHead, this.tail = this.toAddTail, this.toAddTail = this.toAddHead = null);
  this.listenerNodePool.releaseCache();
};
ash.signals.SignalBase.prototype.getNode = function(a) {
  var b;
  for (b = this.head;null !== b && b.listener !== a;) {
    b = b.next;
  }
  if (null === b) {
    for (b = this.toAddHead;null !== b && b.listener !== a;) {
      b = b.next;
    }
  }
  return b;
};
ash.signals.SignalBase.prototype.add = function(a) {
  var b;
  -1 === this.keys.indexOf(a) && (b = this.listenerNodePool.get(), b.listener = a, this.nodes.push(b), this.keys.push(a), this.addNode(b));
};
ash.signals.SignalBase.prototype.addOnce = function(a) {
  var b;
  -1 === this.keys.indexOf(a) && (b = this.listenerNodePool.get(), b.listener = a, b.once = !0, this.nodes.push(b), this.keys.push(a), this.addNode(b));
};
ash.signals.SignalBase.prototype.addNode = function(a) {
  this.dispatching ? null === this.toAddHead ? this.toAddHead = this.toAddTail = a : (this.toAddTail.next = a, a.previous = this.toAddTail, this.toAddTail = a) : null === this.head ? this.head = this.tail = a : (this.tail.next = a, a.previous = this.tail, this.tail = a);
  this.numListeners++;
};
ash.signals.SignalBase.prototype.remove = function(a) {
  var b;
  a = this.keys.indexOf(a);
  if (b = this.nodes[a]) {
    this.head === b && (this.head = this.head.next), this.tail === b && (this.tail = this.tail.previous), this.toAddHead === b && (this.toAddHead = this.toAddHead.next), this.toAddTail === b && (this.toAddTail = this.toAddTail.previous), b.previous && (b.previous.next = b.next), b.next && (b.next.previous = b.previous), this.nodes.splice(a, 1), this.keys.splice(a, 1), this.dispatching ? this.listenerNodePool.cache(b) : this.listenerNodePool.dispose(b), this.numListeners--;
  }
};
ash.signals.SignalBase.prototype.removeAll = function() {
  for (var a, b;this.head;) {
    b = this.head, this.head = this.head.next, a = this.keys.indexOf(b.listener), this.nodes.splice(a, 1), this.listenerNodePool.dispose(b);
  }
  this.nodes = [];
  this.keys = [];
  this.toAddTail = this.toAddHead = this.tail = null;
  this.numListeners = 0;
};
ash.fsm.EngineStateMachine = function(a) {
  this.engine = a;
  this.states = new ash.ext.Dictionary;
};
ash.fsm.EngineStateMachine.prototype.engine = null;
ash.fsm.EngineStateMachine.prototype.states = null;
ash.fsm.EngineStateMachine.prototype.currentState = null;
ash.fsm.EngineStateMachine.prototype.addState = function(a, b) {
  this.states[a] = b;
  return this;
};
ash.fsm.EngineStateMachine.prototype.createState = function(a) {
  var b;
  b = new ash.fsm.EngineState;
  this.states[a] = b;
  return this;
};
ash.fsm.EngineStateMachine.prototype.changeState = function(a) {
  var b, c, d, e, f, g;
  c = this.states[a];
  if (null == c) {
    throw Error("Engine state " + a + " doesn't exist");
  }
  if (c !== this.currentState) {
    f = new ash.ext.Dictionary;
    d = c.providers;
    for (b in d) {
      e = d[b], a = e.identifier, f[a] = e;
    }
    if (currentState) {
      for (b in g = this.currentState.providers, g) {
        e = g[b], a = e.identifier, (d = f[a]) ? delete f[a] : this.engine.removeSystem(e.getSystem());
      }
    }
    for (b in f) {
      e = f[b], this.engine.addSystem(e.getSystem(), e.priority);
    }
    return this.currentState = c;
  }
};
ash.core.Node = function() {
};
ash.core.Node.prototype.entity = null;
ash.core.Node.prototype.previous = null;
ash.core.Node.prototype.next = null;
ash.fsm.EntityState = function() {
  this.providers = new ash.ext.Dictionary;
};
ash.fsm.EntityState.prototype.providers = null;
ash.fsm.EntityState.prototype.add = function(a) {
  return new ash.fsm.StateComponentMapping(this, Util.getClassName(a));
};
ash.fsm.EntityState.prototype.get = function(a) {
  return this.providers[a];
};
ash.fsm.EntityState.prototype.has = function(a) {
  return null !== this.providers[a];
};
ash.fsm.EntityStateMachine = function(a) {
  this.entity = a;
  this.states = new ash.ext.Dictionary;
};
ash.fsm.EntityStateMachine.prototype.states = null;
ash.fsm.EntityStateMachine.prototype.currentState = null;
ash.fsm.EntityStateMachine.prototype.entity = null;
ash.fsm.EntityStateMachine.prototype.addState = function(a, b) {
  this.states[a] = b;
  return this;
};
ash.fsm.EntityStateMachine.prototype.createState = function(a) {
  var b;
  b = new ash.fsm.EntityState;
  return this.states[a] = b;
};
ash.fsm.EntityStateMachine.prototype.changeState = function(a) {
  var b, c, d;
  b = this.states[a];
  if (!b) {
    throw Error("Entity state " + a + " doesn't exist");
  }
  if (b !== this.currentState) {
    if (this.currentState) {
      c = new ash.ext.Dictionary;
      for (d in b.providers) {
        c[d] = b.providers[d];
      }
      for (d in this.currentState.providers) {
        (a = c[d]) && a.identifier === this.currentState.providers[d].identifier ? delete c[d] : this.entity.remove(d);
      }
    } else {
      c = b.providers;
    }
    for (d in c) {
      this.entity.add(c[d].getComponent());
    }
    return this.currentState = b;
  }
};
ash.core.Family = function() {
  Object.defineProperties(this, {nodeList:{get:function() {
    return this.nodes;
  }}});
};
ash.core.Family.prototype.nodes = null;
ash.core.Family.prototype.newEntity = function(a) {
  throw Error("Method must be overriden");
};
ash.core.Family.prototype.removeEntity = function(a) {
  throw Error("Method must be overriden");
};
ash.core.Family.prototype.componentAddedToEntity = function(a, b) {
  throw Error("Method must be overriden");
};
ash.core.Family.prototype.componentRemovedFromEntity = function(a, b) {
  throw Error("Method must be overriden");
};
ash.core.Family.prototype.cleanUp = function() {
  throw Error("Method must be overriden");
};
ash.tick = {};
ash.tick.FrameTickProvider = function(a, b) {
  this.displayObject = a;
  this.maximumFrameTime = b;
  this.dispatchTick = goog.bind(this.dispatchTick, this);
  ash.tick.FrameTickProvider.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.tick.FrameTickProvider, ash.signals.Signal1);
ash.tick.FrameTickProvider.prototype.displayObject = null;
ash.tick.FrameTickProvider.prototype.previousTime = 0;
ash.tick.FrameTickProvider.prototype.maximumFrameTime = 0;
ash.tick.FrameTickProvider.prototype.isPlaying = !1;
ash.tick.FrameTickProvider.prototype.request = null;
ash.tick.FrameTickProvider.prototype.timeAdjustment = 1;
Object.defineProperties(ash.tick.FrameTickProvider.prototype, {playing:{get:function() {
  return this.isPlaying;
}}});
ash.tick.FrameTickProvider.prototype.start = function() {
  this.request = requestAnimationFrame(this.dispatchTick);
  this.isPlaying = !0;
};
ash.tick.FrameTickProvider.prototype.stop = function() {
  cancelRequestAnimationFrame(this.request);
  this.isPlaying = !1;
};
ash.tick.FrameTickProvider.prototype.dispatchTick = function(a) {
  var b;
  null == a && (a = Date.now());
  this.displayObject && this.displayObject.begin();
  b = this.previousTime || a;
  this.previousTime = a;
  this.dispatch(.001 * (a - b));
  requestAnimationFrame(this.dispatchTick);
  this.displayObject && this.displayObject.end();
};

