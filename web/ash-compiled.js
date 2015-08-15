var COMPILED = false;
var goog = goog || {};
goog.global = this;
goog.global.CLOSURE_UNCOMPILED_DEFINES;
goog.global.CLOSURE_DEFINES;
goog.isDef = function(val) {
  return val !== void 0;
};
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript("var " + parts[0]);
  }
  for (var part;parts.length && (part = parts.shift());) {
    if (!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object;
    } else {
      if (cur[part]) {
        cur = cur[part];
      } else {
        cur = cur[part] = {};
      }
    }
  }
};
goog.define = function(name, defaultValue) {
  var value = defaultValue;
  if (!COMPILED) {
    if (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, name)) {
      value = goog.global.CLOSURE_UNCOMPILED_DEFINES[name];
    } else {
      if (goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, name)) {
        value = goog.global.CLOSURE_DEFINES[name];
      }
    }
  }
  goog.exportPath_(name, value);
};
goog.define("goog.DEBUG", true);
goog.define("goog.LOCALE", "en");
goog.define("goog.TRUSTED_SITE", true);
goog.define("goog.STRICT_MODE_COMPATIBLE", false);
goog.define("goog.DISALLOW_TEST_ONLY_CODE", COMPILED && !goog.DEBUG);
goog.define("goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING", false);
goog.provide = function(name) {
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw Error('Namespace "' + name + '" already declared.');
    }
  }
  goog.constructNamespace_(name);
};
goog.constructNamespace_ = function(name, opt_obj) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[name];
    var namespace = name;
    while (namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      if (goog.getObjectByName(namespace)) {
        break;
      }
      goog.implicitNamespaces_[namespace] = true;
    }
  }
  goog.exportPath_(name, opt_obj);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(name) {
  if (!goog.isString(name) || !name || name.search(goog.VALID_MODULE_RE_) == -1) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + name + " has been loaded incorrectly.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = name;
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];
  }
};
goog.module.get = function(name) {
  return goog.module.getInternal_(name);
};
goog.module.getInternal_ = function(name) {
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      return name in goog.loadedModules_ ? goog.loadedModules_[name] : goog.getObjectByName(name);
    } else {
      return null;
    }
  }
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return goog.moduleLoaderState_ != null;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw new Error("goog.module.declareLegacyNamespace must be called from " + "within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to " + "goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = true;
};
goog.setTestOnly = function(opt_message) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    opt_message = opt_message || "";
    throw Error("Importing test-only code into non-debug environment" + (opt_message ? ": " + opt_message : "."));
  }
};
goog.forwardDeclare = function(name) {
};
goog.forwardDeclare("Document");
goog.forwardDeclare("XMLHttpRequest");
if (!COMPILED) {
  goog.isProvided_ = function(name) {
    return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.isDefAndNotNull(goog.getObjectByName(name));
  };
  goog.implicitNamespaces_ = {"goog.module":true};
}
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for (var part;part = parts.shift();) {
    if (goog.isDefAndNotNull(cur[part])) {
      cur = cur[part];
    } else {
      return null;
    }
  }
  return cur;
};
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for (var x in obj) {
    global[x] = obj[x];
  }
};
goog.addDependency = function(relPath, provides, requires, opt_isModule) {
  if (goog.DEPENDENCIES_ENABLED) {
    var provide, require;
    var path = relPath.replace(/\\/g, "/");
    var deps = goog.dependencies_;
    for (var i = 0;provide = provides[i];i++) {
      deps.nameToPath[provide] = path;
      deps.pathIsModule[path] = !!opt_isModule;
    }
    for (var j = 0;require = requires[j];j++) {
      if (!(path in deps.requires)) {
        deps.requires[path] = {};
      }
      deps.requires[path][require] = true;
    }
  }
};
goog.define("goog.ENABLE_DEBUG_LOADER", true);
goog.logToConsole_ = function(msg) {
  if (goog.global.console) {
    goog.global.console["error"](msg);
  }
};
goog.require = function(name) {
  if (!COMPILED) {
    if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_) {
      goog.maybeProcessDeferredDep_(name);
    }
    if (goog.isProvided_(name)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(name);
      } else {
        return null;
      }
    }
    if (goog.ENABLE_DEBUG_LOADER) {
      var path = goog.getPathFromDeps_(name);
      if (path) {
        goog.included_[path] = true;
        goog.writeScripts_();
        return null;
      }
    }
    var errorMessage = "goog.require could not find: " + name;
    goog.logToConsole_(errorMessage);
    throw Error(errorMessage);
  }
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    if (ctor.instance_) {
      return ctor.instance_;
    }
    if (goog.DEBUG) {
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
    }
    return ctor.instance_ = new ctor;
  };
};
goog.instantiatedSingletons_ = [];
goog.define("goog.LOAD_MODULE_USING_EVAL", true);
goog.define("goog.SEAL_MODULE_EXPORTS", goog.DEBUG);
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
if (goog.DEPENDENCIES_ENABLED) {
  goog.included_ = {};
  goog.dependencies_ = {pathIsModule:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}};
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != "undefined" && "write" in doc;
  };
  goog.findBasePath_ = function() {
    if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return;
    } else {
      if (!goog.inHtmlDocument_()) {
        return;
      }
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName("SCRIPT");
    for (var i = scripts.length - 1;i >= 0;--i) {
      var script = (scripts[i]);
      var src = script.src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if (src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return;
      }
    }
  };
  goog.importScript_ = function(src, opt_sourceText) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    if (importScript(src, opt_sourceText)) {
      goog.dependencies_.written[src] = true;
    }
  };
  goog.IS_OLD_IE_ = !!(!goog.global.atob && goog.global.document && goog.global.document.all);
  goog.importModule_ = function(src) {
    var bootstrap = 'goog.retrieveAndExecModule_("' + src + '");';
    if (goog.importScript_("", bootstrap)) {
      goog.dependencies_.written[src] = true;
    }
  };
  goog.queuedModules_ = [];
  goog.wrapModule_ = function(srcUrl, scriptText) {
    if (!goog.LOAD_MODULE_USING_EVAL || !goog.isDef(goog.global.JSON)) {
      return "" + "goog.loadModule(function(exports) {" + '"use strict";' + scriptText + "\n" + ";return exports" + "});" + "\n//# sourceURL=" + srcUrl + "\n";
    } else {
      return "" + "goog.loadModule(" + goog.global.JSON.stringify(scriptText + "\n//# sourceURL=" + srcUrl + "\n") + ");";
    }
  };
  goog.loadQueuedModules_ = function() {
    var count = goog.queuedModules_.length;
    if (count > 0) {
      var queue = goog.queuedModules_;
      goog.queuedModules_ = [];
      for (var i = 0;i < count;i++) {
        var path = queue[i];
        goog.maybeProcessDeferredPath_(path);
      }
    }
  };
  goog.maybeProcessDeferredDep_ = function(name) {
    if (goog.isDeferredModule_(name) && goog.allDepsAreAvailable_(name)) {
      var path = goog.getPathFromDeps_(name);
      goog.maybeProcessDeferredPath_(goog.basePath + path);
    }
  };
  goog.isDeferredModule_ = function(name) {
    var path = goog.getPathFromDeps_(name);
    if (path && goog.dependencies_.pathIsModule[path]) {
      var abspath = goog.basePath + path;
      return abspath in goog.dependencies_.deferred;
    }
    return false;
  };
  goog.allDepsAreAvailable_ = function(name) {
    var path = goog.getPathFromDeps_(name);
    if (path && path in goog.dependencies_.requires) {
      for (var requireName in goog.dependencies_.requires[path]) {
        if (!goog.isProvided_(requireName) && !goog.isDeferredModule_(requireName)) {
          return false;
        }
      }
    }
    return true;
  };
  goog.maybeProcessDeferredPath_ = function(abspath) {
    if (abspath in goog.dependencies_.deferred) {
      var src = goog.dependencies_.deferred[abspath];
      delete goog.dependencies_.deferred[abspath];
      goog.globalEval(src);
    }
  };
  goog.loadModule = function(moduleDef) {
    var previousState = goog.moduleLoaderState_;
    try {
      goog.moduleLoaderState_ = {moduleName:undefined};
      var exports;
      if (goog.isFunction(moduleDef)) {
        exports = moduleDef.call(goog.global, {});
      } else {
        if (goog.isString(moduleDef)) {
          exports = goog.loadModuleFromSource_.call(goog.global, moduleDef);
        } else {
          throw Error("Invalid module definition");
        }
      }
      var moduleName = goog.moduleLoaderState_.moduleName;
      if (!goog.isString(moduleName) || !moduleName) {
        throw Error('Invalid module name "' + moduleName + '"');
      }
      if (goog.moduleLoaderState_.declareLegacyNamespace) {
        goog.constructNamespace_(moduleName, exports);
      } else {
        if (goog.SEAL_MODULE_EXPORTS && Object.seal) {
          Object.seal(exports);
        }
      }
      goog.loadedModules_[moduleName] = exports;
    } finally {
      goog.moduleLoaderState_ = previousState;
    }
  };
  goog.loadModuleFromSource_ = function() {
    var exports = {};
    eval(arguments[0]);
    return exports;
  };
  goog.writeScriptSrcNode_ = function(src) {
    goog.global.document.write('<script type="text/javascript" src="' + src + '"></' + "script>");
  };
  goog.appendScriptSrcNode_ = function(src) {
    var doc = goog.global.document;
    var scriptEl = doc.createElement("script");
    scriptEl.type = "text/javascript";
    scriptEl.src = src;
    scriptEl.defer = false;
    scriptEl.async = false;
    doc.head.appendChild(scriptEl);
  };
  goog.writeScriptTag_ = function(src, opt_sourceText) {
    if (goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && doc.readyState == "complete") {
        var isDeps = /\bdeps.js$/.test(src);
        if (isDeps) {
          return false;
        } else {
          throw Error('Cannot write "' + src + '" after document load');
        }
      }
      var isOldIE = goog.IS_OLD_IE_;
      if (opt_sourceText === undefined) {
        if (!isOldIE) {
          if (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            goog.appendScriptSrcNode_(src);
          } else {
            goog.writeScriptSrcNode_(src);
          }
        } else {
          var state = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
          doc.write('<script type="text/javascript" src="' + src + '"' + state + "></" + "script>");
        }
      } else {
        doc.write('<script type="text/javascript">' + opt_sourceText + "</" + "script>");
      }
      return true;
    } else {
      return false;
    }
  };
  goog.lastNonModuleScriptIndex_ = 0;
  goog.onScriptLoad_ = function(script, scriptIndex) {
    if (script.readyState == "complete" && goog.lastNonModuleScriptIndex_ == scriptIndex) {
      goog.loadQueuedModules_();
    }
    return true;
  };
  goog.writeScripts_ = function() {
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;
    function visitNode(path) {
      if (path in deps.written) {
        return;
      }
      if (path in deps.visited) {
        if (!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path);
        }
        return;
      }
      deps.visited[path] = true;
      if (path in deps.requires) {
        for (var requireName in deps.requires[path]) {
          if (!goog.isProvided_(requireName)) {
            if (requireName in deps.nameToPath) {
              visitNode(deps.nameToPath[requireName]);
            } else {
              throw Error("Undefined nameToPath for " + requireName);
            }
          }
        }
      }
      if (!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path);
      }
    }
    for (var path in goog.included_) {
      if (!deps.written[path]) {
        visitNode(path);
      }
    }
    for (var i = 0;i < scripts.length;i++) {
      var path = scripts[i];
      goog.dependencies_.written[path] = true;
    }
    var moduleState = goog.moduleLoaderState_;
    goog.moduleLoaderState_ = null;
    var loadingModule = false;
    for (var i = 0;i < scripts.length;i++) {
      var path = scripts[i];
      if (path) {
        if (!deps.pathIsModule[path]) {
          goog.importScript_(goog.basePath + path);
        } else {
          loadingModule = true;
          goog.importModule_(goog.basePath + path);
        }
      } else {
        goog.moduleLoaderState_ = moduleState;
        throw Error("Undefined script input");
      }
    }
    goog.moduleLoaderState_ = moduleState;
  };
  goog.getPathFromDeps_ = function(rule) {
    if (rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule];
    } else {
      return null;
    }
  };
  goog.findBasePath_();
  if (!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + "deps.js");
  }
}
goog.normalizePath_ = function(path) {
  var components = path.split("/");
  var i = 0;
  while (i < components.length) {
    if (components[i] == ".") {
      components.splice(i, 1);
    } else {
      if (i && components[i] == ".." && components[i - 1] && components[i - 1] != "..") {
        components.splice(--i, 2);
      } else {
        i++;
      }
    }
  }
  return components.join("/");
};
goog.loadFileSync_ = function(src) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(src);
  } else {
    var xhr = new goog.global["XMLHttpRequest"];
    xhr.open("get", src, false);
    xhr.send();
    return xhr.responseText;
  }
};
goog.retrieveAndExecModule_ = function(src) {
  if (!COMPILED) {
    var originalPath = src;
    src = goog.normalizePath_(src);
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    var scriptText = goog.loadFileSync_(src);
    if (scriptText != null) {
      var execModuleScript = goog.wrapModule_(src, scriptText);
      var isOldIE = goog.IS_OLD_IE_;
      if (isOldIE) {
        goog.dependencies_.deferred[originalPath] = execModuleScript;
        goog.queuedModules_.push(originalPath);
      } else {
        importScript(src, execModuleScript);
      }
    } else {
      throw new Error("load of " + src + "failed");
    }
  }
};
goog.typeOf = function(value) {
  var s = typeof value;
  if (s == "object") {
    if (value) {
      if (value instanceof Array) {
        return "array";
      } else {
        if (value instanceof Object) {
          return s;
        }
      }
      var className = Object.prototype.toString.call((value));
      if (className == "[object Window]") {
        return "object";
      }
      if (className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return "array";
      }
      if (className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if (s == "function" && typeof value.call == "undefined") {
      return "object";
    }
  }
  return s;
};
goog.isNull = function(val) {
  return val === null;
};
goog.isDefAndNotNull = function(val) {
  return val != null;
};
goog.isArray = function(val) {
  return goog.typeOf(val) == "array";
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number";
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function";
};
goog.isString = function(val) {
  return typeof val == "string";
};
goog.isBoolean = function(val) {
  return typeof val == "boolean";
};
goog.isNumber = function(val) {
  return typeof val == "number";
};
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function";
};
goog.isObject = function(val) {
  var type = typeof val;
  return type == "object" && val != null || type == "function";
};
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(obj) {
  return !!obj[goog.UID_PROPERTY_];
};
goog.removeUid = function(obj) {
  if ("removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_);
  }
  try {
    delete obj[goog.UID_PROPERTY_];
  } catch (ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1E9 >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (obj.clone) {
      return obj.clone();
    }
    var clone = type == "array" ? [] : {};
    for (var key in obj) {
      clone[key] = goog.cloneObject(obj[key]);
    }
    return clone;
  }
  return obj;
};
goog.bindNative_ = function(fn, selfObj, var_args) {
  return (fn.call.apply(fn.bind, arguments));
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  if (!fn) {
    throw new Error;
  }
  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };
  } else {
    return function() {
      return fn.apply(selfObj, arguments);
    };
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_;
  } else {
    goog.bind = goog.bindJs_;
  }
  return goog.bind.apply(null, arguments);
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(this, newArgs);
  };
};
goog.mixin = function(target, source) {
  for (var x in source) {
    target[x] = source[x];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(script) {
  if (goog.global.execScript) {
    goog.global.execScript(script, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _evalTest_ = 1;");
        if (typeof goog.global["_evalTest_"] != "undefined") {
          try {
            delete goog.global["_evalTest_"];
          } catch (ignore) {
          }
          goog.evalWorksForGlobals_ = true;
        } else {
          goog.evalWorksForGlobals_ = false;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval(script);
      } else {
        var doc = goog.global.document;
        var scriptElt = doc.createElement("SCRIPT");
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName;
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for (var i = 0;i < parts.length;i++) {
      mapped.push(getMapping(parts[i]));
    }
    return mapped.join("-");
  };
  var rename;
  if (goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts;
  } else {
    rename = function(a) {
      return a;
    };
  }
  if (opt_modifier) {
    return className + "-" + rename(opt_modifier);
  } else {
    return rename(className);
  }
};
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style;
};
goog.global.CLOSURE_CSS_NAME_MAPPING;
if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
}
goog.getMsg = function(str, opt_values) {
  if (opt_values) {
    str = str.replace(/\{\$([^}]+)}/g, function(match, key) {
      return key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo);
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  childCtor.prototype.constructor = childCtor;
  childCtor.base = function(me, methodName, var_args) {
    var args = new Array(arguments.length - 2);
    for (var i = 2;i < arguments.length;i++) {
      args[i - 2] = arguments[i];
    }
    return parentCtor.prototype[methodName].apply(me, args);
  };
};
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !caller) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used " + "with strict mode code. See " + "http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (caller.superClass_) {
    var ctorArgs = new Array(arguments.length - 1);
    for (var i = 1;i < arguments.length;i++) {
      ctorArgs[i - 1] = arguments[i];
    }
    return caller.superClass_.constructor.apply(me, ctorArgs);
  }
  var args = new Array(arguments.length - 2);
  for (var i = 2;i < arguments.length;i++) {
    args[i - 2] = arguments[i];
  }
  var foundCaller = false;
  for (var ctor = me.constructor;ctor;ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if (ctor.prototype[opt_methodName] === caller) {
      foundCaller = true;
    } else {
      if (foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args);
      }
    }
  }
  if (me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args);
  } else {
    throw Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
goog.scope = function(fn) {
  fn.call(goog.global);
};
if (!COMPILED) {
  goog.global["COMPILED"] = COMPILED;
}
goog.defineClass = function(superClass, def) {
  var constructor = def.constructor;
  var statics = def.statics;
  if (!constructor || constructor == Object.prototype.constructor) {
    constructor = function() {
      throw Error("cannot instantiate an interface (no constructor defined).");
    };
  }
  var cls = goog.defineClass.createSealingConstructor_(constructor, superClass);
  if (superClass) {
    goog.inherits(cls, superClass);
  }
  delete def.constructor;
  delete def.statics;
  goog.defineClass.applyProperties_(cls.prototype, def);
  if (statics != null) {
    if (statics instanceof Function) {
      statics(cls);
    } else {
      goog.defineClass.applyProperties_(cls, statics);
    }
  }
  return cls;
};
goog.defineClass.ClassDescriptor;
goog.define("goog.defineClass.SEAL_CLASS_INSTANCES", goog.DEBUG);
goog.defineClass.createSealingConstructor_ = function(ctr, superClass) {
  if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
    if (superClass && superClass.prototype && superClass.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) {
      return ctr;
    }
    var wrappedCtr = function() {
      var instance = ctr.apply(this, arguments) || this;
      instance[goog.UID_PROPERTY_] = instance[goog.UID_PROPERTY_];
      if (this.constructor === wrappedCtr) {
        Object.seal(instance);
      }
      return instance;
    };
    return wrappedCtr;
  }
  return ctr;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.defineClass.applyProperties_ = function(target, source) {
  var key;
  for (key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  for (var i = 0;i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;i++) {
    key = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i];
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
};
goog.tagUnsealableClass = function(ctr) {
  if (!COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES) {
    ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true;
  }
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.provide("ash.core.System");
ash.core.System = function() {
  this.update = goog.bind(this.update, this);
};
ash.core.System.prototype.previous = null;
ash.core.System.prototype.next = null;
ash.core.System.prototype.priority = 0;
ash.core.System.prototype.addToEngine = function(engine) {
};
ash.core.System.prototype.removeFromEngine = function(engine) {
};
ash.core.System.prototype.update = function(time) {
};
goog.provide("ash.tools.ListIteratingSystem");
goog.require("ash.core.System");
ash.tools.ListIteratingSystem = function(nodeClass, nodeUpdateFunction, nodeAddedFunction, nodeRemovedFunction) {
  if (nodeAddedFunction == null) {
    nodeAddedFunction = null;
  }
  if (nodeRemovedFunction == null) {
    nodeRemovedFunction = null;
  }
  this.nodeClass = nodeClass;
  this.nodeUpdateFunction = nodeUpdateFunction;
  this.nodeAddedFunction = nodeAddedFunction;
  this.nodeRemovedFunction = nodeRemovedFunction;
};
goog.inherits(ash.tools.ListIteratingSystem, ash.core.System);
ash.tools.ListIteratingSystem.prototype.nodeList = null;
ash.tools.ListIteratingSystem.prototype.nodeClass = null;
ash.tools.ListIteratingSystem.prototype.nodeUpdateFunction = null;
ash.tools.ListIteratingSystem.prototype.nodeAddedFunction = null;
ash.tools.ListIteratingSystem.prototype.nodeRemovedFunction = null;
ash.tools.ListIteratingSystem.prototype.addToEngine = function(engine) {
  var node;
  this.nodeList = engine.getNodeList(this.nodeClass);
  if (this.nodeAddedFunction !== null) {
    node = this.nodeList.head;
    while (node) {
      this.nodeAddedFunction(node);
      node = node.next;
    }
    this.nodeList.nodeAdded.add(this.nodeAddedFunction);
  }
  if (this.nodeRemovedFunction !== null) {
    this.nodeList.nodeRemoved.add(this.nodeRemovedFunction);
  }
};
ash.tools.ListIteratingSystem.prototype.removeFromEngine = function(engine) {
  if (this.nodeAddedFunction !== null) {
    this.nodeList.nodeAdded.remove(this.nodeAddedFunction);
  }
  if (this.nodeRemovedFunction !== null) {
    this.nodeList.nodeRemoved.remove(this.nodeRemovedFunction);
  }
  this.nodeList = null;
};
ash.tools.ListIteratingSystem.prototype.update = function(time) {
  var node;
  node = this.nodeList.head;
  while (node) {
    this.nodeUpdateFunction(node, time);
    node = node.next;
  }
};
goog.provide("asteroids.ui.Point");
asteroids.ui.Point = function(_at_x, _at_y) {
  this.x = _at_x != null ? _at_x : 0;
  this.y = _at_y != null ? _at_y : 0;
};
asteroids.ui.Point.prototype.x = 0;
asteroids.ui.Point.prototype.y = 0;
asteroids.ui.Point.distance = function(point1, point2) {
  var dx, dy;
  dx = point1.x - point2.x;
  dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
};
asteroids.ui.Point.prototype.distanceSquaredTo = function(targetPoint) {
  var dx, dy;
  dx = this.x - targetPoint.x;
  dy = this.y - targetPoint.y;
  return dx * dx + dy * dy;
};
asteroids.ui.Point.prototype.distanceTo = function(targetPoint) {
  var dx, dy;
  dx = this.x - targetPoint.x;
  dy = this.y - targetPoint.y;
  return Math.sqrt(dx * dx + dy * dy);
};
goog.provide("asteroids.components.Position");
goog.require("asteroids.ui.Point");
asteroids.components.Position = function(x, y, _at_rotation) {
  this.rotation = _at_rotation;
  this.position = new asteroids.ui.Point(x, y);
};
asteroids.components.Position.prototype.position = null;
asteroids.components.Position.prototype.rotation = 0;
goog.provide("ash.core.Node");
ash.core.Node = function() {
};
ash.core.Node.prototype.entity = null;
ash.core.Node.prototype.previous = null;
ash.core.Node.prototype.next = null;
goog.provide("asteroids.components.Motion");
goog.require("asteroids.ui.Point");
asteroids.components.Motion = function(velocityX, velocityY, _at_angularVelocity, _at_damping) {
  this.angularVelocity = _at_angularVelocity;
  this.damping = _at_damping;
  this.velocity = new asteroids.ui.Point(velocityX, velocityY);
};
asteroids.components.Motion.prototype.velocity = null;
asteroids.components.Motion.prototype.angularVelocity = 0;
asteroids.components.Motion.prototype.damping = 0;
goog.provide("asteroids.nodes.MovementNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Motion");
asteroids.nodes.MovementNode = function() {
  return asteroids.nodes.MovementNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.MovementNode, ash.core.Node);
asteroids.nodes.MovementNode.className = "MovementNode";
asteroids.nodes.MovementNode.components = {position:asteroids.components.Position, motion:asteroids.components.Motion};
asteroids.nodes.MovementNode.prototype.position = null;
asteroids.nodes.MovementNode.prototype.motion = null;
goog.provide("asteroids.systems.MovementSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.MovementNode");
asteroids.systems.MovementSystem = function(_at_config) {
  this.config = _at_config;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.MovementSystem.superClass_.constructor.call(this, asteroids.nodes.MovementNode, this.updateNode);
};
goog.inherits(asteroids.systems.MovementSystem, ash.tools.ListIteratingSystem);
asteroids.systems.MovementSystem.prototype.config = null;
asteroids.systems.MovementSystem.prototype.updateNode = function(node, time) {
  console.log(time, node);
  var motion, position, xDamp, yDamp;
  position = node.position;
  motion = node.motion;
  position.position.x += motion.velocity.x * time;
  position.position.y += motion.velocity.y * time;
  if (position.position.x < 0) {
    position.position.x += this.config.width;
  }
  if (position.position.x > this.config.width) {
    position.position.x -= this.config.width;
  }
  if (position.position.y < 0) {
    position.position.y += this.config.height;
  }
  if (position.position.y > this.config.height) {
    position.position.y -= this.config.height;
  }
  position.rotation += motion.angularVelocity * time;
  if (motion.damping > 0) {
    xDamp = Math.abs(Math.cos(position.rotation) * motion.damping * time);
    yDamp = Math.abs(Math.sin(position.rotation) * motion.damping * time);
    if (motion.velocity.x > xDamp) {
      motion.velocity.x -= xDamp;
    } else {
      if (motion.velocity.x < -xDamp) {
        motion.velocity.x += xDamp;
      } else {
        motion.velocity.x = 0;
      }
    }
    if (motion.velocity.y > yDamp) {
      motion.velocity.y -= yDamp;
    } else {
      if (motion.velocity.y < -yDamp) {
        motion.velocity.y += yDamp;
      } else {
        motion.velocity.y = 0;
      }
    }
  }
};
goog.provide("asteroids.components.Collision");
asteroids.components.Collision = function(_at_radius) {
  this.radius = _at_radius;
};
asteroids.components.Collision.prototype.radius = 0;
goog.provide("asteroids.components.Audio");
asteroids.components.Audio = function() {
  this.toPlay = [];
};
asteroids.components.Audio.prototype.toPlay = null;
asteroids.components.Audio.prototype.play = function(sound) {
  return this.toPlay.push(sound);
};
goog.provide("asteroids.components.Asteroid");
asteroids.components.Asteroid = function(_at_fsm) {
  this.fsm = _at_fsm;
};
asteroids.components.Asteroid.prototype.fsm = null;
goog.provide("asteroids.nodes.AsteroidCollisionNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Asteroid");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Collision");
goog.require("asteroids.components.Audio");
asteroids.nodes.AsteroidCollisionNode = function() {
  return asteroids.nodes.AsteroidCollisionNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.AsteroidCollisionNode, ash.core.Node);
asteroids.nodes.AsteroidCollisionNode.className = "AsteroidCollisionNode";
asteroids.nodes.AsteroidCollisionNode.components = {asteroid:asteroids.components.Asteroid, position:asteroids.components.Position, collision:asteroids.components.Collision, audio:asteroids.components.Audio};
asteroids.nodes.AsteroidCollisionNode.prototype.asteroid = null;
asteroids.nodes.AsteroidCollisionNode.prototype.position = null;
asteroids.nodes.AsteroidCollisionNode.prototype.collision = null;
asteroids.nodes.AsteroidCollisionNode.prototype.audio = null;
goog.provide("asteroids.graphics.HudView");
asteroids.graphics.HudView = function(_at_graphic) {
  this.graphic = _at_graphic;
  this.setScore = goog.bind(this.setScore, this);
  this.setLives = goog.bind(this.setLives, this);
  this.draw = goog.bind(this.draw, this);
  this.drawScore = this.createScore;
  this.drawLives = this.createLives;
};
asteroids.graphics.HudView.prototype.x = 0;
asteroids.graphics.HudView.prototype.y = 0;
asteroids.graphics.HudView.prototype.width = 4;
asteroids.graphics.HudView.prototype.height = 4;
asteroids.graphics.HudView.prototype.rotation = 0;
asteroids.graphics.HudView.prototype.graphic = null;
asteroids.graphics.HudView.prototype.score = 0;
asteroids.graphics.HudView.prototype.lives = 3;
asteroids.graphics.HudView.prototype.drawScore = null;
asteroids.graphics.HudView.prototype.drawLives = null;
asteroids.graphics.HudView.prototype.draw = function() {
  this.drawScore();
  this.drawLives();
};
asteroids.graphics.HudView.prototype.setLives = function(lives) {
  return this.lives = lives;
};
asteroids.graphics.HudView.prototype.setScore = function(score) {
  return this.score = score;
};
asteroids.graphics.HudView.prototype.createLives = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = "bold 18px Helvetica";
  this.graphic.fillStyle = "#FFFFFF";
  this.graphic.textAlign = "center";
  s = "LIVES: " + this.lives;
  l = this.graphic.measureText(s);
  x = l.width;
  y = 20;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.HudView.prototype.createScore = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = "bold 18px Helvetica";
  this.graphic.fillStyle = "#FFFFFF";
  this.graphic.textAlign = "center";
  s = "SCORE: " + this.score;
  l = this.graphic.measureText(s);
  x = window.window.innerWidth * window.devicePixelRatio - l.width;
  y = 20;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
goog.provide("asteroids.nodes.AudioNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Audio");
asteroids.nodes.AudioNode = function() {
  return asteroids.nodes.AudioNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.AudioNode, ash.core.Node);
asteroids.nodes.AudioNode.className = "AudioNode";
asteroids.nodes.AudioNode.components = {audio:asteroids.components.Audio};
asteroids.nodes.AudioNode.prototype.audio = null;
goog.provide("asteroids.systems.AudioSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.AudioNode");
asteroids.systems.AudioSystem = function() {
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.AudioSystem.superClass_.constructor.call(this, asteroids.nodes.AudioNode, this.updateNode);
};
goog.inherits(asteroids.systems.AudioSystem, ash.tools.ListIteratingSystem);
asteroids.systems.AudioSystem.prototype.updateNode = function(node, time) {
  var each, sound, type, _ref;
  _ref = node.audio.toPlay;
  for (each in _ref) {
    type = _ref[each];
    sound = new type;
    sound.play(0, 1);
  }
  node.audio.toPlay.length = 0;
};
goog.provide("asteroids.components.DeathThroes");
asteroids.components.DeathThroes = function(duration) {
  this.countdown = duration;
};
asteroids.components.DeathThroes.prototype.countdown = 0;
goog.provide("asteroids.nodes.DeathThroesNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.DeathThroes");
asteroids.nodes.DeathThroesNode = function() {
  return asteroids.nodes.DeathThroesNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.DeathThroesNode, ash.core.Node);
asteroids.nodes.DeathThroesNode.className = "DeathThroesNode";
asteroids.nodes.DeathThroesNode.components = {death:asteroids.components.DeathThroes};
asteroids.nodes.DeathThroesNode.prototype.death = null;
goog.provide("asteroids.graphics.SpaceshipView");
asteroids.graphics.SpaceshipView = function(_at_graphic) {
  this.graphic = _at_graphic;
};
asteroids.graphics.SpaceshipView.prototype.x = 0;
asteroids.graphics.SpaceshipView.prototype.y = 0;
asteroids.graphics.SpaceshipView.prototype.width = 20;
asteroids.graphics.SpaceshipView.prototype.height = 20;
asteroids.graphics.SpaceshipView.prototype.rotation = 0;
asteroids.graphics.SpaceshipView.prototype.graphic = null;
asteroids.graphics.SpaceshipView.prototype.draw = function() {
  var graphic;
  graphic = this.graphic;
  graphic.save();
  graphic.beginPath();
  graphic.translate(this.x, this.y);
  graphic.rotate(this.rotation);
  graphic.fillStyle = "#FFFFFF";
  graphic.moveTo(10, 0);
  graphic.lineTo(-7, 7);
  graphic.lineTo(-4, 0);
  graphic.lineTo(-7, -7);
  graphic.lineTo(10, 0);
  graphic.fill();
  graphic.restore();
};
goog.provide("asteroids.components.GameState");
asteroids.components.GameState = function() {
};
asteroids.components.GameState.prototype.lives = 3;
asteroids.components.GameState.prototype.level = 0;
asteroids.components.GameState.prototype.hits = 0;
asteroids.components.GameState.prototype.playing = false;
asteroids.components.GameState.prototype.setForStart = function() {
  this.lives = 3;
  this.level = 0;
  this.hits = 0;
  this.playing = true;
};
goog.provide("asteroids.nodes.GameNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.GameState");
asteroids.nodes.GameNode = function() {
  return asteroids.nodes.GameNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.GameNode, ash.core.Node);
asteroids.nodes.GameNode.className = "GameNode";
asteroids.nodes.GameNode.components = {state:asteroids.components.GameState};
asteroids.nodes.GameNode.prototype.state = null;
goog.provide("asteroids.components.WaitForStart");
asteroids.components.WaitForStart = function(_at_waitForStart) {
  this.waitForStart = _at_waitForStart;
  this.setStartGame = goog.bind(this.setStartGame, this);
  this.waitForStart.click.add(this.setStartGame);
};
asteroids.components.WaitForStart.prototype.waitForStart = null;
asteroids.components.WaitForStart.prototype.startGame = false;
asteroids.components.WaitForStart.prototype.setStartGame = function() {
  this.startGame = true;
};
goog.provide("asteroids.components.Bullet");
asteroids.components.Bullet = function(_at_lifeRemaining) {
  this.lifeRemaining = _at_lifeRemaining;
};
asteroids.components.Bullet.prototype.lifeRemaining = 0;
goog.provide("asteroids.nodes.BulletCollisionNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Bullet");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Collision");
asteroids.nodes.BulletCollisionNode = function() {
  return asteroids.nodes.BulletCollisionNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.BulletCollisionNode, ash.core.Node);
asteroids.nodes.BulletCollisionNode.className = "BulletCollisionNode";
asteroids.nodes.BulletCollisionNode.components = {bullet:asteroids.components.Bullet, position:asteroids.components.Position, collision:asteroids.components.Collision};
asteroids.nodes.BulletCollisionNode.prototype.bullet = null;
asteroids.nodes.BulletCollisionNode.prototype.position = null;
asteroids.nodes.BulletCollisionNode.prototype.collision = null;
goog.provide("asteroids.components.Gun");
goog.require("asteroids.ui.Point");
asteroids.components.Gun = function(offsetX, offsetY, _at_minimumShotInterval, _at_bulletLifetime) {
  this.minimumShotInterval = _at_minimumShotInterval;
  this.bulletLifetime = _at_bulletLifetime;
  this.shooting = false;
  this.offsetFromParent = null;
  this.timeSinceLastShot = 0;
  this.offsetFromParent = new asteroids.ui.Point(offsetX, offsetY);
};
asteroids.components.Gun.prototype.shooting = false;
asteroids.components.Gun.prototype.offsetFromParent = null;
asteroids.components.Gun.prototype.timeSinceLastShot = 0;
asteroids.components.Gun.prototype.offsetFromParent = null;
goog.provide("asteroids.components.MotionControls");
asteroids.components.MotionControls = function(_at_left, _at_right, _at_accelerate, _at_accelerationRate, _at_rotationRate) {
  this.left = _at_left;
  this.right = _at_right;
  this.accelerate = _at_accelerate;
  this.accelerationRate = _at_accelerationRate;
  this.rotationRate = _at_rotationRate;
};
asteroids.components.MotionControls.prototype.left = 0;
asteroids.components.MotionControls.prototype.right = 0;
asteroids.components.MotionControls.prototype.accelerate = 0;
asteroids.components.MotionControls.prototype.accelerationRate = 0;
asteroids.components.MotionControls.prototype.rotationRate = 0;
goog.provide("asteroids.graphics.AsteroidDeathView");
goog.require("asteroids.ui.Point");
asteroids.graphics.AsteroidDeathView = function(_at_graphic, _at_radius) {
  this.graphic = _at_graphic;
  this.radius = _at_radius;
  this.dots = [];
};
var numDots;
numDots = 8;
asteroids.graphics.AsteroidDeathView.prototype.dots = null;
asteroids.graphics.AsteroidDeathView.prototype.x = 0;
asteroids.graphics.AsteroidDeathView.prototype.y = 0;
asteroids.graphics.AsteroidDeathView.prototype.width = 0;
asteroids.graphics.AsteroidDeathView.prototype.height = 0;
asteroids.graphics.AsteroidDeathView.prototype.rotation = 0;
asteroids.graphics.AsteroidDeathView.prototype.graphic = null;
asteroids.graphics.AsteroidDeathView.prototype.radius = 0;
asteroids.graphics.AsteroidDeathView.prototype.points = null;
asteroids.graphics.AsteroidDeathView.prototype.count = 0;
asteroids.graphics.AsteroidDeathView.prototype.first = true;
asteroids.graphics.AsteroidDeathView.prototype.animate = function(time) {
  var dot, i, _i, _j, _len, _ref;
  if (this.first) {
    this.first = false;
    for (i = _i = 0;0 <= numDots ? _i < numDots : _i > numDots;i = 0 <= numDots ? ++_i : --_i) {
      dot = new Dot(this.graphic, this.radius);
      this.dots.push(dot);
    }
  }
  _ref = this.dots;
  for (_j = 0, _len = _ref.length;_j < _len;_j++) {
    dot = _ref[_j];
    dot.x += dot.velocity.x * time;
    dot.y += dot.velocity.y * time;
  }
  return this.draw();
};
asteroids.graphics.AsteroidDeathView.prototype.draw = function() {
  var dot, _i, _len, _ref, _results;
  _ref = this.dots;
  _results = [];
  for (_i = 0, _len = _ref.length;_i < _len;_i++) {
    dot = _ref[_i];
    _results.push(dot.draw(this.x, this.y));
  }
  return _results;
};
var Dot = function(_at_graphic, maxDistance) {
  var angle, distance, speed;
  this.graphic = _at_graphic;
  angle = Math.random() * 2 * Math.PI;
  distance = Math.random() * maxDistance;
  this.x = Math.cos(angle) * distance;
  this.y = Math.sin(angle) * distance;
  speed = Math.random() * 10 + 10;
  this.velocity = new asteroids.ui.Point(Math.cos(angle) * speed, Math.sin(angle) * speed);
};
Dot.prototype.velocity = null;
Dot.prototype.graphic = null;
Dot.prototype.x1 = 0;
Dot.prototype.y1 = 0;
Dot.prototype.x = 0;
Dot.prototype.y = 0;
Dot.prototype.draw = function(x, y) {
  var graphic;
  graphic = this.graphic;
  graphic.save();
  graphic.beginPath();
  graphic.translate(x, y);
  graphic.rotate(this.rotation);
  graphic.fillStyle = "#FFFFFF";
  graphic.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
  graphic.fill();
  graphic.restore();
};
goog.provide("asteroids.graphics.BulletView");
asteroids.graphics.BulletView = function(_at_graphic) {
  this.graphic = _at_graphic;
};
asteroids.graphics.BulletView.prototype.x = 0;
asteroids.graphics.BulletView.prototype.y = 0;
asteroids.graphics.BulletView.prototype.width = 4;
asteroids.graphics.BulletView.prototype.height = 4;
asteroids.graphics.BulletView.prototype.rotation = 0;
asteroids.graphics.BulletView.prototype.graphic = null;
asteroids.graphics.BulletView.prototype.draw = function() {
  var graphic;
  graphic = this.graphic;
  graphic.save();
  graphic.beginPath();
  graphic.rotate(this.rotation);
  graphic.fillStyle = "#FFFFFF";
  graphic.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
  graphic.fill();
  graphic.restore();
};
goog.provide("asteroids.components.Spaceship");
asteroids.components.Spaceship = function(_at_fsm) {
  this.fsm = _at_fsm;
};
asteroids.components.Spaceship.prototype.fsm = null;
goog.provide("asteroids.components.GunControls");
asteroids.components.GunControls = function(_at_trigger) {
  this.trigger = _at_trigger;
};
asteroids.components.GunControls.prototype.trigger = 0;
goog.provide("asteroids.graphics.SpaceshipDeathView");
goog.require("asteroids.ui.Point");
asteroids.graphics.SpaceshipDeathView = function(_at_graphic) {
  this.graphic = _at_graphic;
};
asteroids.graphics.SpaceshipDeathView.prototype.x = 0;
asteroids.graphics.SpaceshipDeathView.prototype.y = 0;
asteroids.graphics.SpaceshipDeathView.prototype.width = 20;
asteroids.graphics.SpaceshipDeathView.prototype.height = 20;
asteroids.graphics.SpaceshipDeathView.prototype.rotation = 0;
asteroids.graphics.SpaceshipDeathView.prototype.graphic = null;
asteroids.graphics.SpaceshipDeathView.prototype.vel1 = null;
asteroids.graphics.SpaceshipDeathView.prototype.vel2 = null;
asteroids.graphics.SpaceshipDeathView.prototype.rot1 = null;
asteroids.graphics.SpaceshipDeathView.prototype.rot2 = null;
asteroids.graphics.SpaceshipDeathView.prototype.x1 = 0;
asteroids.graphics.SpaceshipDeathView.prototype.y2 = 0;
asteroids.graphics.SpaceshipDeathView.prototype.y1 = 0;
asteroids.graphics.SpaceshipDeathView.prototype.y2 = 0;
asteroids.graphics.SpaceshipDeathView.prototype.first = true;
asteroids.graphics.SpaceshipDeathView.prototype.animate = function(time) {
  if (this.first) {
    this.first = false;
    this.vel1 = new asteroids.ui.Point(Math.random() * 10 - 5, Math.random() * 10 + 10);
    this.vel2 = new asteroids.ui.Point(Math.random() * 10 - 5, -(Math.random() * 10 + 10));
    this.rot1 = Math.random() * 300 - 150;
    this.rot2 = Math.random() * 300 - 150;
    this.x1 = this.x2 = this.x;
    this.y1 = this.y2 = this.y;
    this.r1 = this.r2 = this.rotation;
  }
  this.x1 += this.vel1.x * time;
  this.y1 += this.vel1.y * time;
  this.r1 += this.rot1 * time;
  this.x2 += this.vel2.x * time;
  this.y2 += this.vel2.y * time;
  this.r2 += this.rot2 * time;
  return this.draw();
};
asteroids.graphics.SpaceshipDeathView.prototype.draw = function() {
  var graphic;
  graphic = this.graphic;
  graphic.save();
  graphic.beginPath();
  graphic.translate(this.x + this.x1, this.y + this.y1);
  graphic.rotate(this.r1);
  graphic.fillStyle = "#FFFFFF";
  graphic.moveTo(10, 0);
  graphic.lineTo(-7, 7);
  graphic.lineTo(-4, 0);
  graphic.lineTo(10, 0);
  graphic.fill();
  graphic.restore();
  graphic.save();
  graphic.beginPath();
  graphic.translate(this.x + this.x2, this.y + this.y2);
  graphic.rotate(this.r2);
  graphic.fillStyle = "#FFFFFF";
  graphic.moveTo(10, 0);
  graphic.lineTo(-7, 7);
  graphic.lineTo(-4, 0);
  graphic.lineTo(10, 0);
  graphic.fill();
  graphic.restore();
};
goog.provide("asteroids.components.Display");
asteroids.components.Display = function(_at_graphic) {
  this.graphic = _at_graphic;
};
asteroids.components.Display.prototype.graphic = 0;
goog.provide("asteroids.nodes.SpaceshipCollisionNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Spaceship");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Collision");
goog.require("asteroids.components.Audio");
asteroids.nodes.SpaceshipCollisionNode = function() {
  return asteroids.nodes.SpaceshipCollisionNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.SpaceshipCollisionNode, ash.core.Node);
asteroids.nodes.SpaceshipCollisionNode.className = "SpaceshipCollisionNode";
asteroids.nodes.SpaceshipCollisionNode.components = {spaceship:asteroids.components.Spaceship, position:asteroids.components.Position, collision:asteroids.components.Collision, audio:asteroids.components.Audio};
asteroids.nodes.SpaceshipCollisionNode.prototype.spaceship = 0;
asteroids.nodes.SpaceshipCollisionNode.prototype.position = 0;
asteroids.nodes.SpaceshipCollisionNode.prototype.collision = null;
asteroids.nodes.SpaceshipCollisionNode.prototype.audio = null;
goog.provide("asteroids.graphics.AsteroidView");
asteroids.graphics.AsteroidView = function(_at_graphic, _at_radius) {
  var angle, length, posX, posY;
  this.graphic = _at_graphic;
  this.radius = _at_radius;
  this.width = this.radius;
  this.height = this.radius;
  this.points = [];
  angle = 0;
  while (angle < Math.PI * 2) {
    length = (.75 + Math.random() * .25) * this.radius;
    posX = Math.cos(angle) * length;
    posY = Math.sin(angle) * length;
    this.points.push({x:posX, y:posY});
    angle += Math.random() * .5;
  }
};
asteroids.graphics.AsteroidView.prototype.x = 0;
asteroids.graphics.AsteroidView.prototype.y = 0;
asteroids.graphics.AsteroidView.prototype.width = 0;
asteroids.graphics.AsteroidView.prototype.height = 0;
asteroids.graphics.AsteroidView.prototype.rotation = 0;
asteroids.graphics.AsteroidView.prototype.graphic = null;
asteroids.graphics.AsteroidView.prototype.radius = 0;
asteroids.graphics.AsteroidView.prototype.points = null;
asteroids.graphics.AsteroidView.prototype.count = 0;
asteroids.graphics.AsteroidView.prototype.draw = function() {
  var graphic, i;
  graphic = this.graphic;
  graphic.save();
  graphic.beginPath();
  graphic.translate(this.x, this.y);
  graphic.rotate(this.rotation);
  graphic.fillStyle = "#FFFFFF";
  graphic.moveTo(this.radius, 0);
  i = 0;
  while (i < this.points.length) {
    graphic.lineTo(this.points[i].x, this.points[i].y);
    ++i;
  }
  graphic.lineTo(this.radius, 0);
  graphic.fill();
  graphic.restore();
};
goog.provide("asteroids.components.Animation");
asteroids.components.Animation = function(_at_animation) {
  this.animation = _at_animation;
};
asteroids.components.Animation.prototype.animation = null;
goog.provide("asteroids.components.Hud");
asteroids.components.Hud = function(_at_view) {
  this.view = _at_view;
};
asteroids.components.Hud.prototype.view = null;
goog.provide("asteroids.systems.CollisionSystem");
goog.require("ash.core.System");
goog.require("asteroids.nodes.SpaceshipCollisionNode");
goog.require("asteroids.nodes.AsteroidCollisionNode");
goog.require("asteroids.nodes.BulletCollisionNode");
goog.require("asteroids.nodes.GameNode");
goog.require("asteroids.components.Animation");
goog.require("asteroids.components.Asteroid");
goog.require("asteroids.components.Audio");
goog.require("asteroids.components.Bullet");
goog.require("asteroids.components.Collision");
goog.require("asteroids.components.DeathThroes");
goog.require("asteroids.components.Display");
goog.require("asteroids.components.GameState");
goog.require("asteroids.components.Gun");
goog.require("asteroids.components.GunControls");
goog.require("asteroids.components.Hud");
goog.require("asteroids.components.Motion");
goog.require("asteroids.components.MotionControls");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Spaceship");
goog.require("asteroids.components.WaitForStart");
goog.require("asteroids.graphics.AsteroidDeathView");
goog.require("asteroids.graphics.AsteroidView");
goog.require("asteroids.graphics.BulletView");
goog.require("asteroids.graphics.HudView");
goog.require("asteroids.graphics.SpaceshipDeathView");
goog.require("asteroids.graphics.SpaceshipView");
asteroids.systems.CollisionSystem = function(_at_creator) {
  this.creator = _at_creator;
  this.update = goog.bind(this.update, this);
};
goog.inherits(asteroids.systems.CollisionSystem, ash.core.System);
asteroids.systems.CollisionSystem.prototype.creator = null;
asteroids.systems.CollisionSystem.prototype.games = null;
asteroids.systems.CollisionSystem.prototype.spaceships = null;
asteroids.systems.CollisionSystem.prototype.asteroids = null;
asteroids.systems.CollisionSystem.prototype.bullets = null;
asteroids.systems.CollisionSystem.prototype.addToEngine = function(engine) {
  this.games = engine.getNodeList(asteroids.nodes.GameNode);
  this.spaceships = engine.getNodeList(asteroids.nodes.SpaceshipCollisionNode);
  this.asteroids = engine.getNodeList(asteroids.nodes.AsteroidCollisionNode);
  this.bullets = engine.getNodeList(asteroids.nodes.BulletCollisionNode);
};
asteroids.systems.CollisionSystem.prototype.removeFromEngine = function(engine) {
  this.games = null;
  this.spaceships = null;
  this.asteroids = null;
  this.bullets = null;
};
asteroids.systems.CollisionSystem.prototype.update = function(time) {
  var asteroid, bullet, spaceship;
  bullet = this.bullets.head;
  while (bullet) {
    asteroid = this.asteroids.head;
    while (asteroid) {
      if (asteroid.position.position.distanceTo(bullet.position.position) <= asteroid.collision.radius) {
        this.creator.destroyEntity(bullet.entity);
        if (asteroid.collision.radius > 10) {
          this.creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5);
          this.creator.createAsteroid(asteroid.collision.radius - 10, asteroid.position.position.x + Math.random() * 10 - 5, asteroid.position.position.y + Math.random() * 10 - 5);
        }
        asteroid.asteroid.fsm.changeState("destroyed");
        if (this.games.head) {
          this.games.head.state.hits++;
        }
        break;
      }
      asteroid = asteroid.next;
    }
    bullet = bullet.next;
  }
  spaceship = this.spaceships.head;
  while (spaceship) {
    asteroid = this.asteroids.head;
    while (asteroid) {
      if (asteroid.position.position.distanceTo(spaceship.position.position) <= asteroid.collision.radius + spaceship.collision.radius) {
        spaceship.spaceship.fsm.changeState("destroyed");
        if (this.games.head) {
          this.games.head.state.lives++;
        }
        break;
      }
      asteroid = asteroid.next;
    }
    spaceship = spaceship.next;
  }
};
goog.provide("asteroids.nodes.HudNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.GameState");
goog.require("asteroids.components.Hud");
asteroids.nodes.HudNode = function() {
  return asteroids.nodes.HudNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.HudNode, ash.core.Node);
asteroids.nodes.HudNode.className = "HudNode";
asteroids.nodes.HudNode.components = {state:asteroids.components.GameState, hud:asteroids.components.Hud};
asteroids.nodes.HudNode.prototype.state = null;
asteroids.nodes.HudNode.prototype.hud = null;
goog.provide("asteroids.systems.HudSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.HudNode");
asteroids.systems.HudSystem = function() {
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.HudSystem.superClass_.constructor.call(this, asteroids.nodes.HudNode, this.updateNode);
};
goog.inherits(asteroids.systems.HudSystem, ash.tools.ListIteratingSystem);
asteroids.systems.HudSystem.prototype.updateNode = function(node, time) {
  node.hud.view.setLives(node.state.lives);
  node.hud.view.setScore(node.state.hits);
};
goog.provide("ash.signals.ListenerNode");
ash.signals.ListenerNode = function() {
};
ash.signals.ListenerNode.prototype.previous = null;
ash.signals.ListenerNode.prototype.next = null;
ash.signals.ListenerNode.prototype.listener = null;
ash.signals.ListenerNode.prototype.once = false;
goog.provide("ash.signals.ListenerNodePool");
goog.require("ash.signals.ListenerNode");
ash.signals.ListenerNodePool = function() {
};
ash.signals.ListenerNodePool.prototype.tail = null;
ash.signals.ListenerNodePool.prototype.cacheTail = null;
ash.signals.ListenerNodePool.prototype.get = function() {
  var node;
  if (this.tail !== null) {
    node = this.tail;
    this.tail = this.tail.previous;
    node.previous = null;
    return node;
  } else {
    return new ash.signals.ListenerNode;
  }
};
ash.signals.ListenerNodePool.prototype.dispose = function(node) {
  node.listener = null;
  node.once = false;
  node.next = null;
  node.previous = this.tail;
  this.tail = node;
};
ash.signals.ListenerNodePool.prototype.cache = function(node) {
  node.listener = null;
  node.previous = this.cacheTail;
  this.cacheTail = node;
};
ash.signals.ListenerNodePool.prototype.releaseCache = function() {
  var node;
  while (this.cacheTail !== null) {
    node = this.cacheTail;
    this.cacheTail = node.previous;
    node.next = null;
    node.previous = this.tail;
    this.tail = node;
  }
};
goog.provide("ash.signals.SignalBase");
goog.require("ash.signals.ListenerNodePool");
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
ash.signals.SignalBase.prototype.dispatching = false;
ash.signals.SignalBase.prototype.startDispatch = function() {
  this.dispatching = true;
};
ash.signals.SignalBase.prototype.endDispatch = function() {
  this.dispatching = false;
  if (this.toAddHead) {
    if (!this.head) {
      this.head = this.toAddHead;
      this.tail = this.toAddTail;
    } else {
      this.tail.next = this.toAddHead;
      this.toAddHead.previous = this.tail;
      this.tail = this.toAddTail;
    }
    this.toAddHead = null;
    this.toAddTail = null;
  }
  this.listenerNodePool.releaseCache();
};
ash.signals.SignalBase.prototype.getNode = function(listener) {
  var node;
  node = this.head;
  while (node !== null) {
    if (node.listener === listener) {
      break;
    }
    node = node.next;
  }
  if (node === null) {
    node = this.toAddHead;
    while (node !== null) {
      if (node.listener === listener) {
        break;
      }
      node = node.next;
    }
  }
  return node;
};
ash.signals.SignalBase.prototype.add = function(listener) {
  var node;
  if (this.keys.indexOf(listener) !== -1) {
    return;
  }
  node = this.listenerNodePool.get();
  node.listener = listener;
  this.nodes.push(node);
  this.keys.push(listener);
  this.addNode(node);
};
ash.signals.SignalBase.prototype.addOnce = function(listener) {
  var node;
  if (this.keys.indexOf(listener) !== -1) {
    return;
  }
  node = this.listenerNodePool.get();
  node.listener = listener;
  node.once = true;
  this.nodes.push(node);
  this.keys.push(listener);
  this.addNode(node);
};
ash.signals.SignalBase.prototype.addNode = function(node) {
  if (this.dispatching) {
    if (this.toAddHead === null) {
      this.toAddHead = this.toAddTail = node;
    } else {
      this.toAddTail.next = node;
      node.previous = this.toAddTail;
      this.toAddTail = node;
    }
  } else {
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
  }
  this.numListeners++;
};
ash.signals.SignalBase.prototype.remove = function(listener) {
  var index, node;
  index = this.keys.indexOf(listener);
  node = this.nodes[index];
  if (node) {
    if (this.head === node) {
      this.head = this.head.next;
    }
    if (this.tail === node) {
      this.tail = this.tail.previous;
    }
    if (this.toAddHead === node) {
      this.toAddHead = this.toAddHead.next;
    }
    if (this.toAddTail === node) {
      this.toAddTail = this.toAddTail.previous;
    }
    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }
    this.nodes.splice(index, 1);
    this.keys.splice(index, 1);
    if (this.dispatching) {
      this.listenerNodePool.cache(node);
    } else {
      this.listenerNodePool.dispose(node);
    }
    this.numListeners--;
  }
};
ash.signals.SignalBase.prototype.removeAll = function() {
  var index, node;
  while (this.head) {
    node = this.head;
    this.head = this.head.next;
    index = this.keys.indexOf(node.listener);
    this.nodes.splice(index, 1);
    this.listenerNodePool.dispose(node);
  }
  this.nodes = [];
  this.keys = [];
  this.tail = null;
  this.toAddHead = null;
  this.toAddTail = null;
  this.numListeners = 0;
};
goog.provide("ash.signals.Signal0");
goog.require("ash.signals.SignalBase");
ash.signals.Signal0 = function() {
  return ash.signals.Signal0.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal0, ash.signals.SignalBase);
ash.signals.Signal0.prototype.dispatch = function() {
  var node;
  this.startDispatch();
  node = this.head;
  while (node !== null) {
    node.listener();
    if (node.once) {
      this.remove(node.listener);
    }
    node = node.next;
  }
  return this.endDispatch();
};
goog.provide("asteroids.graphics.WaitForStartView");
goog.require("ash.signals.Signal0");
asteroids.graphics.WaitForStartView = function(_at_graphic) {
  this.graphic = _at_graphic;
  this.click = new ash.signals.Signal0;
  this.gameOver = this.createGameOver;
  this.instructions = this.createInstructions;
  this.clickToStart = this.createClickToStart;
  this.graphic.canvas.addEventListener("click", function(_this) {
    return function(event) {
      return _this.click.dispatch();
    };
  }(this));
};
asteroids.graphics.WaitForStartView.prototype.x = 0;
asteroids.graphics.WaitForStartView.prototype.y = 0;
asteroids.graphics.WaitForStartView.prototype.width = 4;
asteroids.graphics.WaitForStartView.prototype.height = 4;
asteroids.graphics.WaitForStartView.prototype.rotation = 0;
asteroids.graphics.WaitForStartView.prototype.graphic = null;
asteroids.graphics.WaitForStartView.prototype.gameOver = null;
asteroids.graphics.WaitForStartView.prototype.clickToStart = null;
asteroids.graphics.WaitForStartView.prototype.instructions = null;
asteroids.graphics.WaitForStartView.prototype.click = null;
asteroids.graphics.WaitForStartView.prototype.createGameOver = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = "bold 32px Helvetica";
  this.graphic.fillStyle = "#FFFFFF";
  s = "ASTEROIDS";
  l = this.graphic.measureText(s);
  x = Math.floor((window.innerWidth * window.devicePixelRatio - l.width) / 2);
  y = 175;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.WaitForStartView.prototype.createClickToStart = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = "bold 18px Helvetica";
  this.graphic.fillStyle = "#FFFFFF";
  s = "CLICK TO START";
  l = this.graphic.measureText(s);
  x = Math.floor((window.innerWidth * window.devicePixelRatio - l.width) / 2);
  y = 225;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.WaitForStartView.prototype.createInstructions = function() {
  var l, s, x, y;
  this.graphic.save();
  this.graphic.beginPath();
  this.graphic.font = "bold 14px Helvetica";
  this.graphic.fillStyle = "#FFFFFF";
  s = "CTRL-Z to Fire  ~  Arrow Keys to Move";
  l = this.graphic.measureText(s);
  x = 10;
  y = window.innerHeight * window.devicePixelRatio - 20;
  this.graphic.fillText(s, x, y);
  this.graphic.fill();
  this.graphic.restore();
};
asteroids.graphics.WaitForStartView.prototype.draw = function() {
  this.gameOver();
  this.clickToStart();
  this.instructions();
};
goog.provide("asteroids.nodes.GunControlNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Audio");
goog.require("asteroids.components.GunControls");
goog.require("asteroids.components.Gun");
goog.require("asteroids.components.Position");
asteroids.nodes.GunControlNode = function() {
  return asteroids.nodes.GunControlNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.GunControlNode, ash.core.Node);
asteroids.nodes.GunControlNode.className = "GunControlNode";
asteroids.nodes.GunControlNode.components = {audio:asteroids.components.Audio, control:asteroids.components.GunControls, gun:asteroids.components.Gun, position:asteroids.components.Position};
asteroids.nodes.GunControlNode.prototype.control = null;
asteroids.nodes.GunControlNode.prototype.gun = null;
asteroids.nodes.GunControlNode.prototype.position = null;
asteroids.nodes.GunControlNode.prototype.audio = null;
goog.provide("asteroids.systems.GunControlSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.GunControlNode");
asteroids.systems.GunControlSystem = function(_at_keyPoll, _at_creator) {
  this.keyPoll = _at_keyPoll;
  this.creator = _at_creator;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.GunControlSystem.superClass_.constructor.call(this, asteroids.nodes.GunControlNode, this.updateNode);
};
goog.inherits(asteroids.systems.GunControlSystem, ash.tools.ListIteratingSystem);
asteroids.systems.GunControlSystem.prototype.keyPoll = null;
asteroids.systems.GunControlSystem.prototype.creator = null;
asteroids.systems.GunControlSystem.prototype.updateNode = function(node, time) {
  var control, gun, position;
  control = node.control;
  position = node.position;
  gun = node.gun;
  gun.shooting = this.keyPoll.isDown(control.trigger);
  gun.timeSinceLastShot += time;
  if (gun.shooting && gun.timeSinceLastShot >= gun.minimumShotInterval) {
    this.creator.createUserBullet(gun, position);
    gun.timeSinceLastShot = 0;
  }
};
goog.provide("asteroids.nodes.RenderNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Display");
asteroids.nodes.RenderNode = function() {
  return asteroids.nodes.RenderNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.RenderNode, ash.core.Node);
asteroids.nodes.RenderNode.className = "RenderNode";
asteroids.nodes.RenderNode.components = {position:asteroids.components.Position, display:asteroids.components.Display};
asteroids.nodes.RenderNode.prototype.position = null;
asteroids.nodes.RenderNode.prototype.display = null;
goog.provide("asteroids.systems.RenderSystem");
goog.require("ash.core.System");
goog.require("asteroids.nodes.RenderNode");
asteroids.systems.RenderSystem = function(_at_graphic) {
  this.graphic = _at_graphic;
  this.update = goog.bind(this.update, this);
};
goog.inherits(asteroids.systems.RenderSystem, ash.core.System);
asteroids.systems.RenderSystem.prototype.graphic = null;
asteroids.systems.RenderSystem.prototype.nodes = null;
asteroids.systems.RenderSystem.prototype.addToEngine = function(engine) {
  var node;
  this.nodes = engine.getNodeList(asteroids.nodes.RenderNode);
  node = this.nodes.head;
  while (node) {
    this.addToDisplay(node);
    node = node.next;
  }
};
asteroids.systems.RenderSystem.prototype.addToDisplay = function(node) {
};
asteroids.systems.RenderSystem.prototype.removeFromDisplay = function(node) {
};
asteroids.systems.RenderSystem.prototype.removeFromEngine = function(engine) {
  this.nodes = null;
};
asteroids.systems.RenderSystem.prototype.update = function(time) {
  var display, graphic, node, position;
  this.graphic.save();
  this.graphic.translate(0, 0);
  this.graphic.rotate(0);
  this.graphic.clearRect(0, 0, this.graphic.canvas.width, this.graphic.canvas.height);
  node = this.nodes.head;
  while (node) {
    display = node.display;
    graphic = display.graphic;
    position = node.position;
    graphic.x = position.position.x;
    graphic.y = position.position.y;
    graphic.rotation = position.rotation;
    graphic.draw();
    node = node.next;
  }
  this.graphic.restore();
};
goog.provide("asteroids.nodes.BulletAgeNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Bullet");
asteroids.nodes.BulletAgeNode = function() {
  return asteroids.nodes.BulletAgeNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.BulletAgeNode, ash.core.Node);
asteroids.nodes.BulletAgeNode.classnName = "BulletAgeNode";
asteroids.nodes.BulletAgeNode.components = {bullet:asteroids.components.Bullet};
asteroids.nodes.BulletAgeNode.prototype.bullet = null;
goog.provide("asteroids.systems.DeathThroesSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.DeathThroesNode");
asteroids.systems.DeathThroesSystem = function(_at_creator) {
  this.creator = _at_creator;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.DeathThroesSystem.superClass_.constructor.call(this, asteroids.nodes.DeathThroesNode, this.updateNode);
};
goog.inherits(asteroids.systems.DeathThroesSystem, ash.tools.ListIteratingSystem);
asteroids.systems.DeathThroesSystem.prototype.creator = null;
asteroids.systems.DeathThroesSystem.prototype.updateNode = function(node, time) {
  node.death.countdown -= time;
  if (node.death.countdown <= 0) {
    this.creator.destroyEntity(node.entity);
  }
};
goog.provide("asteroids.nodes.SpaceshipNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Spaceship");
goog.require("asteroids.components.Position");
asteroids.nodes.SpaceshipNode = function() {
  return asteroids.nodes.SpaceshipNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.SpaceshipNode, ash.core.Node);
asteroids.nodes.SpaceshipNode.className = "SpaceshipNode";
asteroids.nodes.SpaceshipNode.components = {spaceship:asteroids.components.Spaceship, position:asteroids.components.Position};
asteroids.nodes.SpaceshipNode.prototype.spaceship = 0;
asteroids.nodes.SpaceshipNode.prototype.position = 0;
goog.provide("asteroids.systems.GameManager");
goog.require("ash.core.System");
goog.require("asteroids.nodes.GameNode");
goog.require("asteroids.nodes.SpaceshipNode");
goog.require("asteroids.nodes.AsteroidCollisionNode");
goog.require("asteroids.nodes.BulletCollisionNode");
goog.require("asteroids.ui.Point");
asteroids.systems.GameManager = function(_at_creator, _at_config) {
  this.creator = _at_creator;
  this.config = _at_config;
  this.update = goog.bind(this.update, this);
};
goog.inherits(asteroids.systems.GameManager, ash.core.System);
asteroids.systems.GameManager.prototype.config = null;
asteroids.systems.GameManager.prototype.creator = null;
asteroids.systems.GameManager.prototype.gameNodes = null;
asteroids.systems.GameManager.prototype.spaceships = null;
asteroids.systems.GameManager.prototype.asteroids = null;
asteroids.systems.GameManager.prototype.bullets = null;
asteroids.systems.GameManager.prototype.addToEngine = function(engine) {
  this.gameNodes = engine.getNodeList(asteroids.nodes.GameNode);
  this.spaceships = engine.getNodeList(asteroids.nodes.SpaceshipNode);
  this.asteroids = engine.getNodeList(asteroids.nodes.AsteroidCollisionNode);
  this.bullets = engine.getNodeList(asteroids.nodes.BulletCollisionNode);
};
asteroids.systems.GameManager.prototype.update = function(time) {
  var asteroid, asteroidCount, clearToAddSpaceship, i, newSpaceshipPosition, node, position, spaceship;
  node = this.gameNodes.head;
  if (node && node.state.playing) {
    if (this.spaceships.empty) {
      if (node.state.lives > 0) {
        newSpaceshipPosition = new asteroids.ui.Point(this.config.width * .5, this.config.height * .5);
        clearToAddSpaceship = true;
        asteroid = this.asteroids.head;
        while (asteroid) {
          if (asteroids.ui.Point.distance(asteroid.position.position, newSpaceshipPosition) <= asteroid.collision.radius + 50) {
            clearToAddSpaceship = false;
            break;
          }
          asteroid = asteroid.next;
        }
        if (clearToAddSpaceship) {
          this.creator.createSpaceship();
        }
      } else {
        node.state.playing = false;
        this.creator.createWaitForClick();
      }
    }
    if (this.asteroids.empty && this.bullets.empty && !this.spaceships.empty) {
      spaceship = this.spaceships.head;
      node.state.level++;
      asteroidCount = 2 + node.state.level;
      i = 0;
      while (i < asteroidCount) {
        while (true) {
          position = new asteroids.ui.Point(Math.random() * this.config.width, Math.random() * this.config.height);
          if (!(asteroids.ui.Point.distance(position, spaceship.position.position) <= 80)) {
            break;
          }
        }
        this.creator.createAsteroid(30, position.x, position.y);
        ++i;
      }
    }
  }
};
asteroids.systems.GameManager.prototype.removeFromEngine = function(engine) {
  this.gameNodes = null;
  this.spaceships = null;
  this.asteroids = null;
  this.bullets = null;
};
goog.provide("asteroids.nodes.WaitForStartNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.WaitForStart");
asteroids.nodes.WaitForStartNode = function() {
  return asteroids.nodes.WaitForStartNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.WaitForStartNode, ash.core.Node);
asteroids.nodes.WaitForStartNode.className = "WaitForStartNode";
asteroids.nodes.WaitForStartNode.components = {wait:asteroids.components.WaitForStart};
asteroids.nodes.WaitForStartNode.prototype.wait = null;
goog.provide("asteroids.systems.WaitForStartSystem");
goog.require("ash.core.System");
goog.require("asteroids.nodes.WaitForStartNode");
goog.require("asteroids.nodes.AsteroidCollisionNode");
goog.require("asteroids.nodes.GameNode");
asteroids.systems.WaitForStartSystem = function(_at_creator) {
  this.creator = _at_creator;
  this.update = goog.bind(this.update, this);
};
goog.inherits(asteroids.systems.WaitForStartSystem, ash.core.System);
asteroids.systems.WaitForStartSystem.prototype.engine = null;
asteroids.systems.WaitForStartSystem.prototype.creator = null;
asteroids.systems.WaitForStartSystem.prototype.gameNodes = null;
asteroids.systems.WaitForStartSystem.prototype.waitNodes = null;
asteroids.systems.WaitForStartSystem.prototype.asteroids = null;
asteroids.systems.WaitForStartSystem.prototype.addToEngine = function(engine) {
  this.engine = engine;
  this.waitNodes = engine.getNodeList(asteroids.nodes.WaitForStartNode);
  this.gameNodes = engine.getNodeList(asteroids.nodes.GameNode);
  this.asteroids = engine.getNodeList(asteroids.nodes.AsteroidCollisionNode);
};
asteroids.systems.WaitForStartSystem.prototype.removeFromEngine = function(engine) {
  this.waitNodes = null;
  this.gameNodes = null;
};
asteroids.systems.WaitForStartSystem.prototype.update = function(time) {
  var asteroid, game, node;
  node = this.waitNodes.head;
  game = this.gameNodes.head;
  if (node && node.wait.startGame && game) {
    asteroid = this.asteroids.head;
    while (asteroid) {
      this.creator.destroyEntity(asteroid.entity);
      asteroid = asteroid.next;
    }
    game.state.setForStart();
    node.wait.startGame = false;
    this.engine.removeEntity(node.entity);
  }
};
goog.provide("asteroids.GameConfig");
asteroids.GameConfig = function() {
};
asteroids.GameConfig.prototype.width = 0;
asteroids.GameConfig.prototype.height = 0;
goog.provide("asteroids.systems.SystemPriorities");
asteroids.systems.SystemPriorities = function() {
};
asteroids.systems.SystemPriorities.preUpdate = 1;
asteroids.systems.SystemPriorities.update = 2;
asteroids.systems.SystemPriorities.move = 3;
asteroids.systems.SystemPriorities.resolveCollisions = 4;
asteroids.systems.SystemPriorities.stateMachines = 5;
asteroids.systems.SystemPriorities.animate = 6;
asteroids.systems.SystemPriorities.render = 7;
goog.provide("asteroids.systems.BulletAgeSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.BulletAgeNode");
asteroids.systems.BulletAgeSystem = function(_at_creator) {
  this.creator = _at_creator;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.BulletAgeSystem.superClass_.constructor.call(this, asteroids.nodes.BulletAgeNode, this.updateNode);
};
goog.inherits(asteroids.systems.BulletAgeSystem, ash.tools.ListIteratingSystem);
asteroids.systems.BulletAgeSystem.prototype.creator = null;
asteroids.systems.BulletAgeSystem.prototype.updateNode = function(node, time) {
  var bullet;
  bullet = node.bullet;
  bullet.lifeRemaining -= time;
  if (bullet.lifeRemaining <= 0) {
    this.creator.destroyEntity(node.entity);
  }
};
goog.provide("ash.signals.Signal1");
goog.require("ash.signals.SignalBase");
ash.signals.Signal1 = function() {
  return ash.signals.Signal1.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal1, ash.signals.SignalBase);
ash.signals.Signal1.prototype.dispatch = function($1) {
  var node;
  this.startDispatch();
  node = this.head;
  while (node !== null) {
    node.listener($1);
    if (node.once) {
      this.remove(node.listener);
    }
    node = node.next;
  }
  return this.endDispatch();
};
goog.provide("ash.tick.FrameTickProvider");
goog.require("ash.signals.Signal1");
ash.tick.FrameTickProvider = function(_at_displayObject, _at_maximumFrameTime) {
  this.displayObject = _at_displayObject;
  this.maximumFrameTime = _at_maximumFrameTime;
  this.dispatchTick = goog.bind(this.dispatchTick, this);
  ash.tick.FrameTickProvider.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.tick.FrameTickProvider, ash.signals.Signal1);
ash.tick.FrameTickProvider.prototype.displayObject = null;
ash.tick.FrameTickProvider.prototype.previousTime = 0;
ash.tick.FrameTickProvider.prototype.maximumFrameTime = 0;
ash.tick.FrameTickProvider.prototype.isPlaying = false;
ash.tick.FrameTickProvider.prototype.request = null;
ash.tick.FrameTickProvider.prototype.timeAdjustment = 1;
Object.defineProperties(ash.tick.FrameTickProvider.prototype, {playing:{get:function() {
  return this.isPlaying;
}}});
ash.tick.FrameTickProvider.prototype.start = function() {
  this.request = requestAnimationFrame(this.dispatchTick);
  this.isPlaying = true;
};
ash.tick.FrameTickProvider.prototype.stop = function() {
  cancelRequestAnimationFrame(this.request);
  this.isPlaying = false;
};
ash.tick.FrameTickProvider.prototype.dispatchTick = function(timestamp) {
  var frameTime, temp;
  if (timestamp == null) {
    timestamp = Date.now();
  }
  if (this.displayObject) {
    this.displayObject.begin();
  }
  temp = this.previousTime || timestamp;
  this.previousTime = timestamp;
  frameTime = (timestamp - temp) * .001;
  this.dispatch(frameTime);
  requestAnimationFrame(this.dispatchTick);
  if (this.displayObject) {
    this.displayObject.end();
  }
};
goog.provide("asteroids.nodes.AnimationNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.Animation");
asteroids.nodes.AnimationNode = function() {
  return asteroids.nodes.AnimationNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.AnimationNode, ash.core.Node);
asteroids.nodes.AnimationNode.className = "AnimationNode";
asteroids.nodes.AnimationNode.components = {animation:asteroids.components.Animation};
asteroids.nodes.AnimationNode.prototype.animation = null;
goog.provide("asteroids.systems.AnimationSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.AnimationNode");
asteroids.systems.AnimationSystem = function() {
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.AnimationSystem.superClass_.constructor.call(this, asteroids.nodes.AnimationNode, this.updateNode);
};
goog.inherits(asteroids.systems.AnimationSystem, ash.tools.ListIteratingSystem);
asteroids.systems.AnimationSystem.prototype.updateNode = function(node, time) {
  node.animation.animation.animate(time);
};
goog.provide("asteroids.nodes.MotionControlNode");
goog.require("ash.core.Node");
goog.require("asteroids.components.MotionControls");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Motion");
asteroids.nodes.MotionControlNode = function() {
  return asteroids.nodes.MotionControlNode.superClass_.constructor.apply(this, arguments);
};
goog.inherits(asteroids.nodes.MotionControlNode, ash.core.Node);
asteroids.nodes.MotionControlNode.className = "MotionControlNode";
asteroids.nodes.MotionControlNode.components = {control:asteroids.components.MotionControls, position:asteroids.components.Position, motion:asteroids.components.Motion};
asteroids.nodes.MotionControlNode.prototype.control = null;
asteroids.nodes.MotionControlNode.prototype.position = null;
asteroids.nodes.MotionControlNode.prototype.motion = null;
goog.provide("asteroids.systems.MotionControlSystem");
goog.require("ash.tools.ListIteratingSystem");
goog.require("asteroids.nodes.MotionControlNode");
asteroids.systems.MotionControlSystem = function(_at_keyPoll) {
  this.keyPoll = _at_keyPoll;
  this.updateNode = goog.bind(this.updateNode, this);
  asteroids.systems.MotionControlSystem.superClass_.constructor.call(this, asteroids.nodes.MotionControlNode, this.updateNode);
};
goog.inherits(asteroids.systems.MotionControlSystem, ash.tools.ListIteratingSystem);
asteroids.systems.MotionControlSystem.prototype.keyPoll = null;
asteroids.systems.MotionControlSystem.prototype.updateNode = function(node, time) {
  var control, left, motion, position, right;
  control = node.control;
  position = node.position;
  motion = node.motion;
  left = this.keyPoll.isDown(control.left);
  right = this.keyPoll.isDown(control.right);
  if (left) {
    position.rotation -= control.rotationRate * time;
  }
  if (right) {
    position.rotation += control.rotationRate * time;
  }
  if (this.keyPoll.isDown(control.accelerate)) {
    motion.velocity.x += Math.cos(position.rotation) * control.accelerationRate * time;
    motion.velocity.y += Math.sin(position.rotation) * control.accelerationRate * time;
  }
};
goog.provide("ash.core.EntityList");
ash.core.EntityList = function() {
};
ash.core.EntityList.prototype.head = null;
ash.core.EntityList.prototype.tail = null;
ash.core.EntityList.prototype.add = function(entity) {
  if (!this.head) {
    this.head = this.tail = entity;
    entity.next = entity.previous = null;
  } else {
    this.tail.next = entity;
    entity.previous = this.tail;
    entity.next = null;
    this.tail = entity;
  }
};
ash.core.EntityList.prototype.remove = function(entity) {
  if (this.head === entity) {
    this.head = this.head.next;
  }
  if (this.tail === entity) {
    this.tail = this.tail.previous;
  }
  if (entity.previous) {
    entity.previous.next = entity.next;
  }
  if (entity.next) {
    entity.next.previous = entity.previous;
  }
};
ash.core.EntityList.prototype.removeAll = function() {
  var entity;
  while (this.head) {
    entity = this.head;
    this.head = this.head.next;
    entity.previous = null;
    entity.next = null;
  }
  this.tail = null;
};
goog.provide("ash.ext.Util");
ash.ext.Util = function() {
};
ash.ext.Util.getClassName = function(klass) {
  var _ref;
  return (_ref = klass.className) != null ? _ref : klass.name;
};
goog.provide("ash.core.NodePool");
ash.core.NodePool = function(_at_nodeClass, _at_components) {
  this.nodeClass = _at_nodeClass;
  this.components = _at_components;
};
ash.core.NodePool.prototype.tail = null;
ash.core.NodePool.prototype.nodeClass = null;
ash.core.NodePool.prototype.cacheTail = null;
ash.core.NodePool.prototype.components = null;
ash.core.NodePool.prototype.get = function() {
  var node;
  if (this.tail) {
    node = this.tail;
    this.tail = this.tail.previous;
    node.previous = null;
    return node;
  } else {
    node = new this.nodeClass;
    return node;
  }
};
ash.core.NodePool.prototype.dispose = function(node) {
  var componentName;
  for (componentName in this.components) {
    node[componentName] = null;
  }
  node.entity = null;
  node.next = null;
  node.previous = this.tail;
  this.tail = node;
};
ash.core.NodePool.prototype.cache = function(node) {
  node.previous = this.cacheTail;
  this.cacheTail = node;
};
ash.core.NodePool.prototype.releaseCache = function() {
  var node;
  while (this.cacheTail) {
    node = this.cacheTail;
    this.cacheTail = node.previous;
    this.dispose(node);
  }
};
goog.provide("ash.core.NodeList");
goog.require("ash.signals.Signal1");
ash.core.NodeList = function() {
  this.nodeAdded = new ash.signals.Signal1;
  this.nodeRemoved = new ash.signals.Signal1;
};
ash.core.NodeList.prototype.head = null;
ash.core.NodeList.prototype.tail = null;
ash.core.NodeList.prototype.nodeAdded = null;
ash.core.NodeList.prototype.nodeRemoved = null;
ash.core.NodeList.prototype.add = function(node) {
  if (!this.head) {
    this.head = this.tail = node;
    node.next = node.previous = null;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    node.next = null;
    this.tail = node;
  }
  this.nodeAdded.dispatch(node);
};
ash.core.NodeList.prototype.remove = function(node) {
  if (this.head === node) {
    this.head = this.head.next;
  }
  if (this.tail === node) {
    this.tail = this.tail.previous;
  }
  if (node.previous) {
    node.previous.next = node.next;
  }
  if (node.next) {
    node.next.previous = node.previous;
  }
  this.nodeRemoved.dispatch(node);
};
ash.core.NodeList.prototype.removeAll = function() {
  var node;
  while (this.head) {
    node = this.head;
    this.head = this.head.next;
    node.previous = null;
    node.next = null;
    this.nodeRemoved.dispatch(node);
  }
  this.tail = null;
};
Object.defineProperties(ash.core.NodeList.prototype, {empty:{get:function() {
  return this.head === null;
}}});
ash.core.NodeList.prototype.swap = function(node1, node2) {
  var temp;
  if (node1.previous === node2) {
    node1.previous = node2.previous;
    node2.previous = node1;
    node2.next = node1.next;
    node1.next = node2;
  } else {
    if (node2.previous === node1) {
      node2.previous = node1.previous;
      node1.previous = node2;
      node1.next = node2.next;
      node2.next = node1;
    } else {
      temp = node1.previous;
      node1.previous = node2.previous;
      node2.previous = temp;
      temp = node1.next;
      node1.next = node2.next;
      node2.next = temp;
    }
  }
  if (this.head === node1) {
    this.head = node2;
  } else {
    if (this.head === node2) {
      this.head = node1;
    }
  }
  if (this.tail === node1) {
    this.tail = node2;
  } else {
    if (this.tail === node2) {
      this.tail = node1;
    }
  }
  if (node1.previous !== null) {
    node1.previous.next = node1;
  }
  if (node2.previous !== null) {
    node2.previous.next = node2;
  }
  if (node1.next !== null) {
    node1.next.previous = node1;
  }
  if (node2.next !== null) {
    node2.next.previous = node2;
  }
};
ash.core.NodeList.prototype.insertionSort = function(sortFunction) {
  var node, other, remains;
  if (this.head === this.tail) {
    return;
  }
  remains = this.head.next;
  node = remains;
  while (node !== null) {
    remains = node.next;
    other = node.previous;
    while (other !== null) {
      if (sortFunction(node, other) >= 0) {
        if (node !== other.next) {
          if (this.tail === node) {
            this.tail = node.previous;
          }
          node.previous.next = node.next;
          if (node.next !== null) {
            node.next.previous = node.previous;
          }
          node.next = other.next;
          node.previous = other;
          node.next.previous = node;
          other.next = node;
        }
        break;
      }
      other = other.previous;
    }
    if (other === null) {
      if (this.tail === node) {
        this.tail = node.previous;
      }
      node.previous.next = node.next;
      if (node.next !== null) {
        node.next.previous = node.previous;
      }
      node.next = this.head;
      this.head.previous = node;
      node.previous = null;
      this.head = node;
    }
    node = remains;
  }
};
ash.core.NodeList.prototype.mergeSort = function(sortFunction) {
  var end, lists, next, start;
  if (this.head === this.tail) {
    return;
  }
  lists = [];
  start = this.head;
  while (start !== null) {
    end = start;
    while (end.next !== null && sortFunction(end, end.next) <= 0) {
      end = end.next;
    }
    next = end.next;
    start.previous = end.next = null;
    lists.push(start);
    start = next;
  }
  while (lists.length > 1) {
    lists.push(this.merge(lists.shift(), lists.shift(), sortFunction));
  }
  this.tail = this.head = lists[0];
  while (this.tail.next !== null) {
    this.tail = this.tail.next;
  }
};
ash.core.NodeList.prototype.merge = function(head1, head2, sortFunction) {
  var head, node;
  if (sortFunction(head1, head2) <= 0) {
    head = node = head1;
    head1 = head1.next;
  } else {
    head = node = head2;
    head2 = head2.next;
  }
  while (head1 !== null && head2 !== null) {
    if (sortFunction(head1, head2) <= 0) {
      node.next = head1;
      head1.previous = node;
      node = head1;
      head1 = head1.next;
    } else {
      node.next = head2;
      head2.previous = node;
      node = head2;
      head2 = head2.next;
    }
  }
  if (head1 !== null) {
    node.next = head1;
    head1.previous = node;
  } else {
    node.next = head2;
    head2.previous = node;
  }
  return head;
};
goog.provide("ash.ext.Dictionary");
ash.ext.Dictionary = function() {
};
goog.provide("ash.core.ComponentMatchingFamily");
goog.require("ash.core.EntityList");
goog.require("ash.ext.Dictionary");
goog.require("ash.core.NodeList");
goog.require("ash.core.NodePool");
goog.require("ash.ext.Util");
ash.core.ComponentMatchingFamily = function(_at_nodeClass, _at_engine) {
  this.nodeClass = _at_nodeClass;
  this.engine = _at_engine;
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
  var name, type, _ref;
  this.nodes = new ash.core.NodeList;
  this.entities = new ash.ext.Dictionary;
  this.components = new ash.ext.Dictionary;
  this.nodePool = new ash.core.NodePool(this.nodeClass, this.nodeClass.components);
  _ref = this.nodeClass.components;
  for (name in _ref) {
    type = _ref[name];
    this.components[ash.ext.Util.getClassName(type)] = type;
  }
};
Object.defineProperties(ash.core.ComponentMatchingFamily.prototype, {nodeList:{get:function() {
  return this.nodes;
}}});
ash.core.ComponentMatchingFamily.prototype.newEntity = function(entity) {
  this.addIfMatch(entity);
};
ash.core.ComponentMatchingFamily.prototype.componentAddedToEntity = function(entity, componentClass) {
  this.addIfMatch(entity);
};
ash.core.ComponentMatchingFamily.prototype.componentRemovedFromEntity = function(entity, componentClass) {
  var name;
  name = ash.ext.Util.getClassName(componentClass) != null ? ash.ext.Util.getClassName(componentClass) : componentClass;
  if (name in this.components) {
    this.removeIfMatch(entity);
  }
};
ash.core.ComponentMatchingFamily.prototype.removeEntity = function(entity) {
  this.removeIfMatch(entity);
};
ash.core.ComponentMatchingFamily.prototype.addIfMatch = function(entity) {
  var componentClass, name, node, _ref, _ref1;
  if (this.entities[entity.name] == null) {
    _ref = this.nodeClass.components;
    for (name in _ref) {
      componentClass = _ref[name];
      if (!entity.has(componentClass)) {
        return;
      }
    }
    node = this.nodePool.get();
    node.entity = entity;
    _ref1 = this.nodeClass.components;
    for (name in _ref1) {
      componentClass = _ref1[name];
      node[name] = entity.get(componentClass);
    }
    this.entities[entity.name] = node;
    this.nodes.add(node);
  }
};
ash.core.ComponentMatchingFamily.prototype.removeIfMatch = function(entity) {
  var node;
  if (entity.name in this.entities) {
    node = this.entities[entity.name];
    delete this.entities[entity.name];
    this.nodes.remove(node);
    if (this.engine.updating) {
      this.nodePool.cache(node);
      this.engine.updateComplete.add(this.releaseNodePoolCache);
    } else {
      this.nodePool.dispose(node);
    }
  }
};
ash.core.ComponentMatchingFamily.prototype.releaseNodePoolCache = function() {
  this.engine.updateComplete.remove(this.releaseNodePoolCache);
  this.nodePool.releaseCache();
};
ash.core.ComponentMatchingFamily.prototype.cleanUp = function() {
  var node;
  node = this.nodes.head;
  while (node) {
    this.entities.remove(node.entity);
    node = node.next;
  }
  this.nodes.removeAll();
};
goog.provide("ash.core.SystemList");
ash.core.SystemList = function() {
};
ash.core.SystemList.prototype.head = null;
ash.core.SystemList.prototype.tail = null;
ash.core.SystemList.prototype.add = function(system) {
  var node;
  if (!this.head) {
    this.head = this.tail = system;
    system.next = system.previous = null;
  } else {
    node = this.tail;
    while (node) {
      if (node.priority <= system.priority) {
        break;
      }
      node = node.previous;
    }
    if (node === this.tail) {
      this.tail.next = system;
      system.previous = this.tail;
      system.next = null;
      this.tail = system;
    } else {
      if (!node) {
        system.next = this.head;
        system.previous = null;
        this.head.previous = system;
        this.head = system;
      } else {
        system.next = node.next;
        system.previous = node;
        node.next.previous = system;
        node.next = system;
      }
    }
  }
};
ash.core.SystemList.prototype.remove = function(system) {
  if (this.head === system) {
    this.head = this.head.next;
  }
  if (this.tail === system) {
    this.tail = this.tail.previous;
  }
  if (system.previous) {
    system.previous.next = system.next;
  }
  if (system.next) {
    system.next.previous = system.previous;
  }
};
ash.core.SystemList.prototype.removeAll = function() {
  var system;
  while (this.head) {
    system = this.head;
    this.head = this.head.next;
    system.previous = null;
    system.next = null;
  }
  this.tail = null;
};
ash.core.SystemList.prototype.get = function(type) {
  var system;
  system = this.head;
  while (system) {
    if (system.constructor === type) {
      return system;
    }
    system = system.next;
  }
  return null;
};
goog.provide("ash.core.Engine");
goog.require("ash.core.EntityList");
goog.require("ash.ext.Dictionary");
goog.require("ash.core.SystemList");
goog.require("ash.signals.Signal0");
goog.require("ash.ext.Util");
goog.require("ash.core.ComponentMatchingFamily");
ash.core.Engine = function() {
  this.update = goog.bind(this.update, this);
  this.componentRemoved = goog.bind(this.componentRemoved, this);
  this.componentAdded = goog.bind(this.componentAdded, this);
  this.entityNameChanged = goog.bind(this.entityNameChanged, this);
  this.entityList = new ash.core.EntityList;
  this.entityNames = new ash.ext.Dictionary;
  this.systemList = new ash.core.SystemList;
  this.families = new ash.ext.Dictionary;
  this.updateComplete = new ash.signals.Signal0;
};
ash.core.Engine.prototype.entityNames = null;
ash.core.Engine.prototype.entityList = null;
ash.core.Engine.prototype.systemList = null;
ash.core.Engine.prototype.families = null;
ash.core.Engine.prototype.updating = false;
ash.core.Engine.prototype.updateComplete = null;
ash.core.Engine.prototype.familyClass = ash.core.ComponentMatchingFamily;
Object.defineProperties(ash.core.Engine.prototype, {entities:{get:function() {
  var entities, entity;
  entities = [];
  entity = this.entityList.head;
  while (entity) {
    this.entities.push(entity);
    entity = entity.next;
  }
  return entities;
}}, systems:{get:function() {
  var system, systems;
  systems = [];
  system = this.systemList.head;
  while (system) {
    systems.push(system);
    system = system.next;
  }
  return systems;
}}});
ash.core.Engine.prototype.addEntity = function(entity) {
  var each, family, _ref;
  if (this.entityNames[entity.name]) {
    throw "The entity name " + entity.name + " is already in use by another entity.";
  }
  this.entityList.add(entity);
  this.entityNames[entity.name] = entity;
  entity.componentAdded.add(this.componentAdded);
  entity.componentRemoved.add(this.componentRemoved);
  entity.nameChanged.add(this.entityNameChanged);
  _ref = this.families;
  for (each in _ref) {
    family = _ref[each];
    family.newEntity(entity);
  }
};
ash.core.Engine.prototype.removeEntity = function(entity) {
  var each, family, _ref;
  entity.componentAdded.remove(this.componentAdded);
  entity.componentRemoved.remove(this.componentRemoved);
  entity.nameChanged.remove(this.entityNameChanged);
  _ref = this.families;
  for (each in _ref) {
    family = _ref[each];
    family.removeEntity(entity);
  }
  delete this.entityNames[entity.name];
  this.entityList.remove(entity);
};
ash.core.Engine.prototype.entityNameChanged = function(entity, oldName) {
  if (this.entityNames[oldName] === entity) {
    delete this.entityNames[oldName];
    this.entityNames[entity.name] = entity;
  }
};
ash.core.Engine.prototype.getEntityByName = function(name) {
  return this.entityNames[name];
};
ash.core.Engine.prototype.removeAllEntities = function() {
  while (this.entityList.head !== null) {
    this.removeEntity(this.entityList.head);
  }
};
ash.core.Engine.prototype.componentAdded = function(entity, componentClass) {
  var each, family, _ref;
  _ref = this.families;
  for (each in _ref) {
    family = _ref[each];
    family.componentAddedToEntity(entity, componentClass);
  }
};
ash.core.Engine.prototype.componentRemoved = function(entity, componentClass) {
  var each, family, _ref;
  _ref = this.families;
  for (each in _ref) {
    family = _ref[each];
    family.componentRemovedFromEntity(entity, componentClass);
  }
};
ash.core.Engine.prototype.getNodeList = function(nodeClass) {
  var entity, family;
  if (ash.ext.Util.getClassName(nodeClass) in this.families) {
    return this.families[ash.ext.Util.getClassName(nodeClass)].nodeList;
  }
  family = new this.familyClass(nodeClass, this);
  this.families[ash.ext.Util.getClassName(nodeClass)] = family;
  entity = this.entityList.head;
  while (entity) {
    family.newEntity(entity);
    entity = entity.next;
  }
  return family.nodeList;
};
ash.core.Engine.prototype.releaseNodeList = function(nodeClass) {
  if (ash.ext.Util.getClassName(nodeClass) in this.families) {
    this.families[ash.ext.Util.getClassName(nodeClass)].cleanUp();
    delete this.families[ash.ext.Util.getClassName(nodeClass)];
  }
};
ash.core.Engine.prototype.addSystem = function(system, priority) {
  system.priority = priority;
  system.addToEngine(this);
  this.systemList.add(system);
};
ash.core.Engine.prototype.getSystem = function(type) {
  return systemList.get(type);
};
ash.core.Engine.prototype.removeSystem = function(system) {
  this.systemList.remove(system);
  system.removeFromEngine(this);
};
ash.core.Engine.prototype.removeAllSystems = function() {
  while (this.systemList.head !== null) {
    this.removeSystem(this.systemList.head);
  }
};
ash.core.Engine.prototype.update = function(time) {
  var system;
  this.updating = true;
  system = this.systemList.head;
  while (system) {
    system.update(time);
    system = system.next;
  }
  this.updating = false;
  this.updateComplete.dispatch();
};
goog.provide("ash.signals.Signal2");
goog.require("ash.signals.SignalBase");
ash.signals.Signal2 = function() {
  return ash.signals.Signal2.superClass_.constructor.apply(this, arguments);
};
goog.inherits(ash.signals.Signal2, ash.signals.SignalBase);
ash.signals.Signal2.prototype.dispatch = function($1, $2) {
  var node;
  this.startDispatch();
  node = this.head;
  while (node) {
    node.listener($1, $2);
    if (node.once) {
      this.remove(node.listener);
    }
    node = node.next;
  }
  return this.endDispatch();
};
goog.provide("ash.core.Entity");
goog.require("ash.signals.Signal2");
goog.require("ash.ext.Dictionary");
goog.require("ash.ext.Util");
ash.core.Entity = function(name) {
  if (name == null) {
    name = "";
  }
  Object.defineProperties(this, {name:{get:function() {
    return this._name;
  }, set:function(value) {
    var previous;
    if (this._name !== value) {
      previous = this._name;
      this._name = value;
      return this.nameChanged.dispatch(this, previous);
    }
  }}});
  this.componentAdded = new ash.signals.Signal2;
  this.componentRemoved = new ash.signals.Signal2;
  this.nameChanged = new ash.signals.Signal2;
  this.components = new ash.ext.Dictionary;
  if (name !== "") {
    if (ash.core.Entity.nameCount[name] == null) {
      ash.core.Entity.nameCount[name] = 0;
    }
    this._name = name + ++ash.core.Entity.nameCount[name];
  } else {
    this._name = "_entity" + ++nameCount;
  }
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
ash.core.Entity.prototype.add = function(component, componentClass) {
  if (componentClass == null) {
    componentClass = component.constructor;
  }
  if (ash.ext.Util.getClassName(componentClass) in this.components) {
    this.remove(componentClass);
  }
  this.components[ash.ext.Util.getClassName(componentClass)] = component;
  this.componentAdded.dispatch(this, componentClass);
  return this;
};
ash.core.Entity.prototype.remove = function(componentClass) {
  var component, name;
  name = ash.ext.Util.getClassName(componentClass) != null ? ash.ext.Util.getClassName(componentClass) : componentClass;
  component = this.components[name];
  if (component) {
    delete this.components[name];
    this.componentRemoved.dispatch(this, name);
    return component;
  }
  return null;
};
ash.core.Entity.prototype.get = function(componentClass) {
  return this.components[ash.ext.Util.getClassName(componentClass)];
};
ash.core.Entity.prototype.getAll = function() {
  var component, componentArray, _i, _len, _ref;
  componentArray = [];
  _ref = this.components;
  for (_i = 0, _len = _ref.length;_i < _len;_i++) {
    component = _ref[_i];
    componentArray.push(component);
  }
  return componentArray;
};
ash.core.Entity.prototype.has = function(componentClass) {
  return ash.ext.Util.getClassName(componentClass) in this.components;
};
goog.provide("ash.fsm.ComponentInstanceProvider");
ash.fsm.ComponentInstanceProvider = function(_at_instance) {
  this.instance = _at_instance;
};
ash.fsm.ComponentInstanceProvider.prototype.instance = null;
ash.fsm.ComponentInstanceProvider.prototype.getComponent = function() {
  return this.instance;
};
Object.defineProperties(ash.fsm.ComponentInstanceProvider.prototype, {identifier:{get:function() {
  return this.instance;
}}});
goog.provide("ash.fsm.ComponentSingletonProvider");
ash.fsm.ComponentSingletonProvider = function(type) {
  this.componentType = type;
};
ash.fsm.ComponentSingletonProvider.prototype.componentType = null;
ash.fsm.ComponentSingletonProvider.prototype.instance = null;
ash.fsm.ComponentSingletonProvider.prototype.getComponent = function() {
  if (this.instance == null) {
    this.instance = new this.componentType;
  }
  return this.instance;
};
Object.defineProperties(ash.fsm.ComponentSingletonProvider.prototype, {identifier:{get:function() {
  return this.getComponent();
}}});
goog.provide("ash.fsm.ComponentTypeProvider");
ash.fsm.ComponentTypeProvider = function(type) {
  this.componentType = type;
};
ash.fsm.ComponentTypeProvider.prototype.componentType = null;
ash.fsm.ComponentTypeProvider.prototype.getComponent = function() {
  return new this.componentType;
};
Object.defineProperties(ash.fsm.ComponentTypeProvider.prototype, {identifier:{get:function() {
  return this.componentType;
}}});
goog.provide("ash.fsm.DynamicComponentProvider");
ash.fsm.DynamicComponentProvider = function(closure) {
  this._closure = closure;
};
ash.fsm.DynamicComponentProvider.prototype._closure = null;
ash.fsm.DynamicComponentProvider.prototype.getComponent = function() {
  return this._closure;
};
Object.defineProperties(ash.fsm.DynamicComponentProvider.prototype, {identifier:{get:function() {
  return this._closure;
}}});
goog.provide("ash.fsm.StateComponentMapping");
goog.require("ash.fsm.ComponentInstanceProvider");
goog.require("ash.fsm.ComponentTypeProvider");
goog.require("ash.fsm.ComponentSingletonProvider");
goog.require("ash.fsm.DynamicComponentProvider");
ash.fsm.StateComponentMapping = function(_at_creatingState, type) {
  this.creatingState = _at_creatingState;
  this.componentType = type;
  this.withType(type);
};
ash.fsm.StateComponentMapping.prototype.componentType = null;
ash.fsm.StateComponentMapping.prototype.creatingState = null;
ash.fsm.StateComponentMapping.prototype.provider = null;
ash.fsm.StateComponentMapping.prototype.withInstance = function(component) {
  this.setProvider(new ash.fsm.ComponentInstanceProvider(component));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withType = function(type) {
  this.setProvider(new ash.fsm.ComponentTypeProvider(type));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withSingleton = function(type) {
  if (type == null) {
    type = this.componentType;
  }
  this.setProvider(new ash.fsm.ComponentSingletonProvider(type));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withMethod = function(method) {
  this.setProvider(new ash.fsm.DynamicComponentProvider(method));
  return this;
};
ash.fsm.StateComponentMapping.prototype.withProvider = function(provider) {
  this.setProvider(provider);
  return this;
};
ash.fsm.StateComponentMapping.prototype.add = function(type) {
  return this.creatingState.add(type);
};
ash.fsm.StateComponentMapping.prototype.setProvider = function(provider) {
  this.provider = provider;
  return this.creatingState.providers[this.componentType] = provider;
};
goog.provide("ash.fsm.EntityState");
goog.require("ash.ext.Dictionary");
goog.require("ash.fsm.StateComponentMapping");
goog.require("ash.ext.Util");
ash.fsm.EntityState = function() {
  this.providers = new ash.ext.Dictionary;
};
ash.fsm.EntityState.prototype.providers = null;
ash.fsm.EntityState.prototype.add = function(type) {
  return new ash.fsm.StateComponentMapping(this, ash.ext.Util.getClassName(type));
};
ash.fsm.EntityState.prototype.get = function(type) {
  return this.providers[type];
};
ash.fsm.EntityState.prototype.has = function(type) {
  return this.providers[type] !== null;
};
goog.provide("ash.fsm.EntityStateMachine");
goog.require("ash.ext.Dictionary");
goog.require("ash.fsm.EntityState");
ash.fsm.EntityStateMachine = function(_at_entity) {
  this.entity = _at_entity;
  this.states = new ash.ext.Dictionary;
};
ash.fsm.EntityStateMachine.prototype.states = null;
ash.fsm.EntityStateMachine.prototype.currentState = null;
ash.fsm.EntityStateMachine.prototype.entity = null;
ash.fsm.EntityStateMachine.prototype.addState = function(name, state) {
  this.states[name] = state;
  return this;
};
ash.fsm.EntityStateMachine.prototype.createState = function(name) {
  var state;
  state = new ash.fsm.EntityState;
  this.states[name] = state;
  return state;
};
ash.fsm.EntityStateMachine.prototype.changeState = function(name) {
  var newState, other, toAdd, type;
  newState = this.states[name];
  if (!newState) {
    throw new Error("Entity state " + name + " doesn't exist");
  }
  if (newState === this.currentState) {
    newState = null;
    return;
  }
  if (this.currentState) {
    toAdd = new ash.ext.Dictionary;
    for (type in newState.providers) {
      toAdd[type] = newState.providers[type];
    }
    for (type in this.currentState.providers) {
      other = toAdd[type];
      if (other && other.identifier === this.currentState.providers[type].identifier) {
        delete toAdd[type];
      } else {
        this.entity.remove(type);
      }
    }
  } else {
    toAdd = newState.providers;
  }
  for (type in toAdd) {
    this.entity.add(toAdd[type].getComponent());
  }
  return this.currentState = newState;
};
goog.provide("asteroids.EntityCreator");
goog.require("asteroids.graphics.WaitForStartView");
goog.require("ash.core.Entity");
goog.require("ash.fsm.EntityStateMachine");
goog.require("asteroids.components.Animation");
goog.require("asteroids.components.Asteroid");
goog.require("asteroids.components.Audio");
goog.require("asteroids.components.Bullet");
goog.require("asteroids.components.Collision");
goog.require("asteroids.components.DeathThroes");
goog.require("asteroids.components.Display");
goog.require("asteroids.components.GameState");
goog.require("asteroids.components.Gun");
goog.require("asteroids.components.GunControls");
goog.require("asteroids.components.Hud");
goog.require("asteroids.components.Motion");
goog.require("asteroids.components.MotionControls");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Spaceship");
goog.require("asteroids.components.WaitForStart");
goog.require("asteroids.graphics.AsteroidDeathView");
goog.require("asteroids.graphics.AsteroidView");
goog.require("asteroids.graphics.BulletView");
goog.require("asteroids.graphics.HudView");
goog.require("asteroids.graphics.SpaceshipDeathView");
goog.require("asteroids.graphics.SpaceshipView");
asteroids.EntityCreator = function(_at_engine, _at_graphic, _at_world) {
  this.engine = _at_engine;
  this.graphic = _at_graphic;
  this.world = _at_world;
};
var KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_Z;
KEY_LEFT = 37;
KEY_UP = 38;
KEY_RIGHT = 39;
KEY_Z = 90;
asteroids.EntityCreator.prototype.engine = null;
asteroids.EntityCreator.prototype.waitEntity = null;
asteroids.EntityCreator.prototype.graphic = null;
asteroids.EntityCreator.prototype.destroyEntity = function(entity) {
  this.engine.removeEntity(entity);
};
asteroids.EntityCreator.prototype.createGame = function() {
  var gameEntity, hud;
  hud = new asteroids.graphics.HudView(this.graphic);
  gameEntity = (new ash.core.Entity("game")).add(new asteroids.components.GameState).add(new asteroids.components.Hud(hud)).add(new asteroids.components.Display(hud)).add(new asteroids.components.Position(0, 0, 0, 0));
  this.engine.addEntity(gameEntity);
  return gameEntity;
};
asteroids.EntityCreator.prototype.createWaitForClick = function() {
  var waitView;
  if (!this.waitEntity) {
    waitView = new asteroids.graphics.WaitForStartView(this.graphic);
    this.waitEntity = (new ash.core.Entity("wait")).add(new asteroids.components.WaitForStart(waitView)).add(new asteroids.components.Display(waitView)).add(new asteroids.components.Position(0, 0, 0, 0));
  }
  this.waitEntity.get(asteroids.components.WaitForStart).startGame = false;
  this.engine.addEntity(this.waitEntity);
  return this.waitEntity;
};
asteroids.EntityCreator.prototype.createAsteroid = function(radius, x, y) {
  var asteroid, deathView, fsm;
  asteroid = new ash.core.Entity;
  fsm = new ash.fsm.EntityStateMachine(asteroid);
  fsm.createState("alive").add(asteroids.components.Motion).withInstance(new asteroids.components.Motion((Math.random() - .5) * 4 * (50 - radius), (Math.random() - .5) * 4 * (50 - radius), Math.random() * 2 - 1, 0)).add(asteroids.components.Collision).withInstance(new asteroids.components.Collision(radius)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(new asteroids.graphics.AsteroidView(this.graphic, radius)));
  deathView = new asteroids.graphics.AsteroidDeathView(this.graphic, radius);
  fsm.createState("destroyed").add(asteroids.components.DeathThroes).withInstance(new asteroids.components.DeathThroes(3)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(deathView)).add(asteroids.components.Animation).withInstance(new asteroids.components.Animation(deathView));
  asteroid.add(new asteroids.components.Asteroid(fsm)).add(new asteroids.components.Position(x, y, 0)).add(new asteroids.components.Audio);
  fsm.changeState("alive");
  this.engine.addEntity(asteroid);
  return asteroid;
};
asteroids.EntityCreator.prototype.createSpaceship = function() {
  var deathView, fsm, spaceship;
  spaceship = new ash.core.Entity;
  fsm = new ash.fsm.EntityStateMachine(spaceship);
  fsm.createState("playing").add(asteroids.components.Motion).withInstance(new asteroids.components.Motion(0, 0, 0, 15)).add(asteroids.components.MotionControls).withInstance(new asteroids.components.MotionControls(KEY_LEFT, KEY_RIGHT, KEY_UP, 100, 3)).add(asteroids.components.Gun).withInstance(new asteroids.components.Gun(8, 0, .3, 2)).add(asteroids.components.GunControls).withInstance(new asteroids.components.GunControls(KEY_Z)).add(asteroids.components.Collision).withInstance(new asteroids.components.Collision(9)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(new asteroids.graphics.SpaceshipView(this.graphic)));
  deathView = new asteroids.graphics.SpaceshipDeathView(this.graphic);
  fsm.createState("destroyed").add(asteroids.components.DeathThroes).withInstance(new asteroids.components.DeathThroes(5)).add(asteroids.components.Display).withInstance(new asteroids.components.Display(deathView)).add(asteroids.components.Animation).withInstance(new asteroids.components.Animation(deathView));
  spaceship.add(new asteroids.components.Spaceship(fsm)).add(new asteroids.components.Position(300, 225, 0)).add(new asteroids.components.Audio);
  fsm.changeState("playing");
  this.engine.addEntity(spaceship);
  return spaceship;
};
asteroids.EntityCreator.prototype.createUserBullet = function(gun, parentPosition) {
  var bullet, cos, sin, x, y;
  cos = Math.cos(parentPosition.rotation);
  sin = Math.sin(parentPosition.rotation);
  x = cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x;
  y = sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y;
  bullet = (new ash.core.Entity).add(new asteroids.components.Bullet(gun.bulletLifetime)).add(new asteroids.components.Position(x, y, 0)).add(new asteroids.components.Collision(0)).add(new asteroids.components.Motion(cos * 150, sin * 150, 0, 0)).add(new asteroids.components.Display(new asteroids.graphics.BulletView(this.graphic)));
  this.engine.addEntity(bullet);
  return bullet;
};
goog.provide("asteroids.input.KeyPoll");
asteroids.input.KeyPoll = function(_at_displayObj) {
  this.displayObj = _at_displayObj;
  this.isUp = goog.bind(this.isUp, this);
  this.isDown = goog.bind(this.isDown, this);
  this.keyUpListener = goog.bind(this.keyUpListener, this);
  this.keyDownListener = goog.bind(this.keyDownListener, this);
  this.states = {};
  this.displayObj.addEventListener("keydown", this.keyDownListener);
  this.displayObj.addEventListener("keyup", this.keyUpListener);
};
asteroids.input.KeyPoll.prototype.states = null;
asteroids.input.KeyPoll.prototype.displayObj = null;
asteroids.input.KeyPoll.prototype.keyDownListener = function(event) {
  this.states[event.keyCode] = true;
};
asteroids.input.KeyPoll.prototype.keyUpListener = function(event) {
  if (this.states[event.keyCode]) {
    this.states[event.keyCode] = false;
  }
};
asteroids.input.KeyPoll.prototype.isDown = function(keyCode) {
  return this.states[keyCode];
};
asteroids.input.KeyPoll.prototype.isUp = function(keyCode) {
  return !this.states[keyCode];
};
goog.provide("asteroids.Asteroids");
goog.require("asteroids.systems.AnimationSystem");
goog.require("asteroids.systems.AudioSystem");
goog.require("asteroids.systems.BulletAgeSystem");
goog.require("asteroids.systems.CollisionSystem");
goog.require("asteroids.systems.DeathThroesSystem");
goog.require("asteroids.systems.GameManager");
goog.require("asteroids.systems.GunControlSystem");
goog.require("asteroids.systems.HudSystem");
goog.require("asteroids.systems.MotionControlSystem");
goog.require("asteroids.systems.MovementSystem");
goog.require("asteroids.systems.RenderSystem");
goog.require("asteroids.systems.SystemPriorities");
goog.require("asteroids.systems.WaitForStartSystem");
goog.require("asteroids.components.GameState");
goog.require("asteroids.EntityCreator");
goog.require("asteroids.GameConfig");
goog.require("asteroids.input.KeyPoll");
goog.require("ash.core.Engine");
goog.require("ash.tick.FrameTickProvider");
asteroids.Asteroids = function(_at_container, width, height) {
  this.container = _at_container;
  this.prepare(width, height);
};
asteroids.Asteroids.prototype.container = null;
asteroids.Asteroids.prototype.engine = null;
asteroids.Asteroids.prototype.tickProvider = null;
asteroids.Asteroids.prototype.creator = null;
asteroids.Asteroids.prototype.keyPoll = null;
asteroids.Asteroids.prototype.config = null;
asteroids.Asteroids.prototype.prepare = function(width, height) {
  this.engine = new ash.core.Engine;
  this.creator = new asteroids.EntityCreator(this.engine, this.container, this.world);
  this.keyPoll = new asteroids.input.KeyPoll(window);
  this.config = new asteroids.GameConfig;
  this.config.height = height;
  this.config.width = width;
  SystemPriorities = {preUpdate:1, update:2, move:3, resolveCollisions:4, stateMachines:5, animate:6, render:7};
  this.engine.addSystem(new asteroids.systems.WaitForStartSystem(this.creator), asteroids.systems.SystemPriorities.preUpdate);
  this.engine.addSystem(new asteroids.systems.GameManager(this.creator, this.config), asteroids.systems.SystemPriorities.preUpdate);
  this.engine.addSystem(new asteroids.systems.MotionControlSystem(this.keyPoll), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.GunControlSystem(this.keyPoll, this.creator), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.BulletAgeSystem(this.creator), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.DeathThroesSystem(this.creator), asteroids.systems.SystemPriorities.update);
  this.engine.addSystem(new asteroids.systems.MovementSystem(this.config), asteroids.systems.SystemPriorities.move);
  this.engine.addSystem(new asteroids.systems.CollisionSystem(this.creator), asteroids.systems.SystemPriorities.resolveCollisions);
  this.engine.addSystem(new asteroids.systems.AnimationSystem, asteroids.systems.SystemPriorities.animate);
  this.engine.addSystem(new asteroids.systems.HudSystem, asteroids.systems.SystemPriorities.animate);
  this.engine.addSystem(new asteroids.systems.RenderSystem(this.container), asteroids.systems.SystemPriorities.render);
  this.engine.addSystem(new asteroids.systems.AudioSystem, asteroids.systems.SystemPriorities.render);
  this.creator.createWaitForClick();
  this.creator.createGame();
};
asteroids.Asteroids.prototype.start = function() {
  var stats, x, y;
  if (navigator.isCocoonJS) {
    stats = null;
  } else {
    x = Math.floor(this.config.width / 2) - 40;
    y = 0;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = x + "px";
    stats.domElement.style.top = y + "px";
    document.body.appendChild(stats.domElement);
  }
  this.tickProvider = new ash.tick.FrameTickProvider(stats);
  this.tickProvider.add(this.engine.update);
  this.tickProvider.start();
};
goog.provide("asteroids.Main");
asteroids.Main = function() {
  var canvas;
  canvas = this.canvas();
  (new asteroids.Asteroids(canvas.getContext("2d"), canvas.width, canvas.height)).start();
  return;
};
asteroids.Main.prototype.canvas = function() {
  var canvas;
  canvas = document.createElement(navigator.isCocoonJS ? "screencanvas" : "canvas");
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.backgroundColor = "#000000";
  document.body.appendChild(canvas);
  return canvas;
};
goog.provide("asteroids");
goog.require("asteroids.input.KeyPoll");
goog.require("asteroids.ui.Point");
goog.require("asteroids.graphics.AsteroidView");
goog.require("asteroids.graphics.AsteroidDeathView");
goog.require("asteroids.graphics.BulletView");
goog.require("asteroids.graphics.HudView");
goog.require("asteroids.graphics.SpaceshipDeathView");
goog.require("asteroids.graphics.SpaceshipView");
goog.require("asteroids.graphics.WaitForStartView");
goog.require("asteroids.components.Animation");
goog.require("asteroids.components.Asteroid");
goog.require("asteroids.components.Audio");
goog.require("asteroids.components.Bullet");
goog.require("asteroids.components.Collision");
goog.require("asteroids.components.DeathThroes");
goog.require("asteroids.components.Display");
goog.require("asteroids.components.GameState");
goog.require("asteroids.components.Gun");
goog.require("asteroids.components.GunControls");
goog.require("asteroids.components.Hud");
goog.require("asteroids.components.Motion");
goog.require("asteroids.components.MotionControls");
goog.require("asteroids.components.Position");
goog.require("asteroids.components.Spaceship");
goog.require("asteroids.components.WaitForStart");
goog.require("asteroids.nodes.AnimationNode");
goog.require("asteroids.nodes.AsteroidCollisionNode");
goog.require("asteroids.nodes.AudioNode");
goog.require("asteroids.nodes.BulletAgeNode");
goog.require("asteroids.nodes.BulletCollisionNode");
goog.require("asteroids.nodes.DeathThroesNode");
goog.require("asteroids.nodes.GameNode");
goog.require("asteroids.nodes.GunControlNode");
goog.require("asteroids.nodes.HudNode");
goog.require("asteroids.nodes.MotionControlNode");
goog.require("asteroids.nodes.MovementNode");
goog.require("asteroids.nodes.RenderNode");
goog.require("asteroids.nodes.SpaceshipCollisionNode");
goog.require("asteroids.nodes.SpaceshipNode");
goog.require("asteroids.nodes.WaitForStartNode");
goog.require("asteroids.systems.AnimationSystem");
goog.require("asteroids.systems.AudioSystem");
goog.require("asteroids.systems.BulletAgeSystem");
goog.require("asteroids.systems.CollisionSystem");
goog.require("asteroids.systems.DeathThroesSystem");
goog.require("asteroids.systems.GameManager");
goog.require("asteroids.systems.GunControlSystem");
goog.require("asteroids.systems.HudSystem");
goog.require("asteroids.systems.MotionControlSystem");
goog.require("asteroids.systems.MovementSystem");
goog.require("asteroids.systems.RenderSystem");
goog.require("asteroids.systems.SystemPriorities");
goog.require("asteroids.systems.WaitForStartSystem");
goog.require("asteroids.EntityCreator");
goog.require("asteroids.GameConfig");
goog.require("asteroids.Asteroids");
goog.require("asteroids.Main");
new asteroids.Main;

