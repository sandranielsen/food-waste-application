// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Mq12":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "b5b6c481d56a3cb1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5HwUs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _navJs = require("./components/nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
var _routerJs = require("./router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
_navJsDefault.default.render();
_routerJsDefault.default.init();

},{"./components/nav.js":"5KBRd","./router.js":"90Bjy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5KBRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Nav {
    constructor(){
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("afterbegin", /*html*/ `
      <nav class="tabbar">
        <div class="nav_left">
          <a href="/home" class="nav_item"><img src="../img/home.svg" alt="Home" class="nav_img"></a>
          <a href="/chat" class="nav_item"><img src="../img/chat.svg" alt="Chat" class="nav_img"></a>
        </div>
        <div class="nav_middle">
          <a href="/add" class="nav_item_raised"><img src="../img/add.svg" alt="Plus" class="nav_img_raised"></a>
        </div>
        <div class="nav_right">
          <a href="/favourites" class="nav_item"><img src="../img/fav.svg" alt="Heart" class="nav_img"></a>
          <a href="/profile" class="nav_item"><img src="../img/profile.svg" alt="Profile" class="nav_img"></a>
        </div>
      </nav>
    `);
    }
}
const nav = new Nav();
exports.default = nav;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"90Bjy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _startJs = require("./pages/start.js");
var _startJsDefault = parcelHelpers.interopDefault(_startJs);
var _signupJs = require("./pages/signup.js");
var _signupJsDefault = parcelHelpers.interopDefault(_signupJs);
var _loginJs = require("./pages/login.js");
var _loginJsDefault = parcelHelpers.interopDefault(_loginJs);
var _homeJs = require("./pages/home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _filterJs = require("./pages/filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _productPageJs = require("./pages/product-page.js");
var _productPageJsDefault = parcelHelpers.interopDefault(_productPageJs);
var _chatJs = require("./pages/chat.js");
var _chatJsDefault = parcelHelpers.interopDefault(_chatJs);
var _addListingJs = require("./pages/add-listing.js");
var _addListingJsDefault = parcelHelpers.interopDefault(_addListingJs);
var _favouritesJs = require("./pages/favourites.js");
var _favouritesJsDefault = parcelHelpers.interopDefault(_favouritesJs);
var _profileJs = require("./pages/profile.js");
var _profileJsDefault = parcelHelpers.interopDefault(_profileJs);
var _accountJs = require("./pages/account.js");
var _accountJsDefault = parcelHelpers.interopDefault(_accountJs);
var _myImpactJs = require("./pages/my-impact.js");
var _myImpactJsDefault = parcelHelpers.interopDefault(_myImpactJs);
var _myListingsJs = require("./pages/my-listings.js");
var _myListingsJsDefault = parcelHelpers.interopDefault(_myListingsJs);
var _myPurchasesJs = require("./pages/my-purchases.js");
var _myPurchasesJsDefault = parcelHelpers.interopDefault(_myPurchasesJs);
var _publicProfileJs = require("./pages/public-profile.js");
var _publicProfileJsDefault = parcelHelpers.interopDefault(_publicProfileJs);
class Router {
    constructor(){
        this.routes = [
            {
                path: "/",
                view: new _startJsDefault.default("start")
            },
            {
                path: "/signup",
                view: new _signupJsDefault.default("signup")
            },
            {
                path: "/login",
                view: new _loginJsDefault.default("login")
            },
            {
                path: "/home",
                view: new _homeJsDefault.default("home")
            },
            {
                path: "/filter",
                view: new _filterJsDefault.default("filter")
            },
            {
                path: "/product",
                view: new _productPageJsDefault.default("product")
            },
            {
                path: "/chat",
                view: new _chatJsDefault.default("chat")
            },
            {
                path: "/add",
                view: new _addListingJsDefault.default("add")
            },
            {
                path: "/favourites",
                view: new _favouritesJsDefault.default("favourites")
            },
            {
                path: "/profile",
                view: new _profileJsDefault.default("profile")
            },
            {
                path: "/account",
                view: new _accountJsDefault.default("account")
            },
            {
                path: "/impact",
                view: new _myImpactJsDefault.default("impact")
            },
            {
                path: "/listings",
                view: new _myListingsJsDefault.default("listings")
            },
            {
                path: "/purchases",
                view: new _myPurchasesJsDefault.default("purchases")
            },
            {
                path: "/public",
                view: new _publicProfileJsDefault.default("public")
            }
        ];
        //declaring properties: pages and navLinks. Initialised in init().
        this.pages;
        this.navLinks;
    }
    /* Initialising the router, calling attachNavLinkEvents(), popstate event and navigateTo() */ init() {
        this.pages = document.querySelectorAll(".page");
        this.navLinks = document.querySelectorAll("nav a");
        this.attachNavLinkEvents();
        window.addEventListener("popstate", ()=>this.showPage(location.pathname)
        ); // change page when using back and forth in browser
        this.navigateTo(location.pathname);
    }
    /* Changing display to none for all pages */ hideAllPages() {
        for (const page of this.pages)page.style.display = "none";
    }
    /* Navigating SPA to specific page by given path - props can be passed from one component (page) to another through the router.navigateTo */ navigateTo(path4, props) {
        window.history.pushState({
        }, path4, path4);
        this.showPage(path4, props);
    }
    showPage(path1, props1 = {
    }) {
        this.hideAllPages(); // hide all pages
        const route = this.matchRoute(path1, props1); // finds a matching route by the path
        route.view.beforeShow(props1); // before we display the page, beforeShow is called inside of the page. By that we can execute stuff and use passed props (properties).
        document.getElementById(route.view.id).style.display = "block"; // chaning display to block of the view (page)
        this.setActiveTab(route.path);
    }
    /* Returns a route from this.routes matching the path name - based on the path. */ matchRoute(path2, props2) {
        const route1 = this.routes.find((route)=>{
            if (route.path.includes("/:id")) {
                const mainRoute = route.path.split("/:id")[0];
                if (path2.includes(mainRoute)) {
                    props2.id = path2.split("/").pop();
                    return route;
                }
            } else if (route.path.includes(path2)) return route;
        });
        return route1;
    }
    /* Sets active menu item by given path */ setActiveTab(path3) {
        for (const link of this.navLinks)if (path3 === link.getAttribute("href")) link.classList.add("active");
        else link.classList.remove("active");
    }
    /* Attaching event to nav links and preventing default anchor link event */ attachNavLinkEvents() {
        const navLinks = document.querySelectorAll(".router-link");
        for (const link of navLinks)link.addEventListener("click", (event)=>{
            const path = link.getAttribute("href");
            this.navigateTo(path);
            event.preventDefault();
        });
    }
    goBack() {
        history.back();
    }
}
const router = new Router();
exports.default = router;

},{"./pages/start.js":"7p5Ej","./pages/signup.js":"5pzUn","./pages/login.js":"cKfZK","./pages/home.js":"1edkc","./pages/filter.js":"iw7sr","./pages/product-page.js":"3an6W","./pages/chat.js":"5udg2","./pages/add-listing.js":"lUwtW","./pages/favourites.js":"iZqiE","./pages/profile.js":"6Wl4X","./pages/account.js":"79fVm","./pages/my-impact.js":"jCk6k","./pages/my-listings.js":"AoYtQ","./pages/my-purchases.js":"46jdJ","./pages/public-profile.js":"7Dpl3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7p5Ej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class StartPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
      <div class="start_container">
        <!--<img src="../img/start-bg.jpg" alt="Food" class="start-bg">-->
        <img src="https://images.squarespace-cdn.com/content/v1/5a009727268b9669e15efaef/1588107013662-EXYB18D83V962RKLDZGB/food+share.jpg?format=2500w" alt="Food" class="start-bg">
        <div class="overlay"></div>

        <div class="start_content">
          <h1 class="start_text">Reduce your waste</h1>
          <h1 class="start_text">Share your food</h1>
            <div class="btn_container">
              <button class="btn" onclick="location.href='/login'">Login</button>
              <button class="btn" onclick="location.href='/signup'">Sign up</button>
            </div>
        </div>

      </div>
        
        
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = StartPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"03GcU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Service {
    constructor(){
        this.listings = [];
        this.baseUrl = "";
    }
    /* fetch and return all listings from backend service */ async getListings() {
        const url = `${this.baseUrl}?action=getListings`;
        const response = await fetch(url);
        const data = await response.json();
        this.listings = data;
        return this.listings;
    }
    async getUser(userId) {
        const url = `${this.baseUrl}?action=getUser&userId=${userId}`;
        const response = await fetch(url);
        const user = await response.json();
        return user;
    }
    async uploadImage(imageFile) {
        let formData = new FormData();
        formData.append("fileToUpload", imageFile);
        const response = await fetch(`${this.baseUrl}?action=uploadImage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        });
        // waiting for the result
        const result = await response.json();
        return result;
    }
    async deleteListing(listingId) {
        const response = await fetch(`${this.baseUrl}?action=deleteListing&listingId=${listingId}`, {
            method: "DELETE"
        });
        // waiting for the result
        const result = await response.json();
        // the result is the new updated listings array
        this.listing = result;
        return this.listing;
    }
    async createListing(title, price, expirationDate, description, location, image) {
        const id = Date.now(); // dummy generated listing id
        const newListing = {
            // declaring a new js object with the form values
            id,
            title,
            price,
            expirationDate,
            description,
            location,
            image
        };
        // post new listing to php service using fetch(...)
        const response = await fetch(this.baseUrl + "?action=createListing", {
            method: "POST",
            body: JSON.stringify(newListing)
        });
        // waiting for the result
        const result = await response.json();
        // the result is the new updated listings array
        this.listing = result;
        return this.listing;
    }
    async updateListing(id, title1, price1, expirationDate1, description1, location1, image1) {
        const listingToUpdate = {
            // declaring a new js object with the form values
            id,
            title: title1,
            price: price1,
            expirationDate: expirationDate1,
            description: description1,
            location: location1,
            image: image1
        };
        // put listing to php service using fetch(...)
        const response = await fetch(this.baseUrl + "?action=updateListing", {
            method: "PUT",
            body: JSON.stringify(listingToUpdate)
        });
        // waiting for the result
        const result = await response.json();
        // the result is the new updated listings array
        this.listings = result;
        return this.listings;
    }
}
const service = new Service();
exports.default = service;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5pzUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class SignUpPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
        </header>
        <div class="login_signup_container">
          <div class="login_signup_img">
            <img src="./media/signup.jpg" alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <div class="login_signup_container">
            <h1 class="login_signup_headline">Signup</h1>
            <div class="form_container">
              
            </div>
          </div>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = SignUpPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cKfZK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class LogInPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
        </header>
        <div class="login_signup_container">
          <div class="login_signup_img">
            <img src="./media/login.jpg" alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <div class="login_signup_container">
            <h1 class="login_signup_headline">Login</h1>
            <div class="form_container">
              
            </div>
          </div>

      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = LogInPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1edkc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class HomePage {
    constructor(id){
        this.id = id;
        this.render();
        this.init();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Home</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `);
    }
    async init() {
        const listings = await _serviceJsDefault.default.getListings();
        this.appendListings(listings);
    }
    appendListings(listings) {
        let htmlTemplate = "";
        for (const listing of listings)htmlTemplate += /*html*/ `
                <article data-listing-id="${listing.id}">
                    <img src="${_serviceJsDefault.default.baseUrl}/files/medium/${listing.image || "placeholder.jpg"}">
                    <h3>${listing.title}</h3>
                    <h4>${listing.price}</h4>
                    <h5>${listing.location}</h5>
                    <p>${listing.description}</p>
                    <p>${listing.expirationDate}</p>
                </article>
            `;
        document.querySelector(`#${this.id} .listing-grid`).innerHTML = htmlTemplate;
        this.attachEvents();
    }
    attachEvents() {
        document.querySelectorAll(`#${this.id} [data-listing-id]`).forEach((element)=>{
            element.onclick = ()=>{
                const listingId = element.getAttribute("data-listing-id");
                _routerJsDefault.default.navigateTo(`/listing/${listingId}`);
            };
        });
    }
    beforeShow(props) {
        if (props.listing) this.appendListings(props.listings);
    }
}
exports.default = HomePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iw7sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class FilterPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = FilterPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3an6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class ProductPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>Product</h2>
        </header>
        <section class="product_container">
          <img src="https://images.squarespace-cdn.com/content/v1/5a009727268b9669e15efaef/1588107013662-EXYB18D83V962RKLDZGB/food+share.jpg?format=2500w" class="listing_img">
          <div class="product">
            <div class="listing_info">
              <div class="info_item">
                <img src="../img/image.jpg">
                <p class="listing_location">Trige</p>
              </div>
              <div class="info_item">
                <img src="../img/image.jpg">
                <p class="listing_date">24.04.2021</p>
              </div>  
            </div>
            <div class="product_info">
                <h2 class="product_title">Apples 4kg</h2>
                <h3 class="product_price">100 DKK</h4>
            </div>
            <div class="product_details">
              <p class="product_description">Apples from our garden, we cannot eat them all so if anybody is
                interested in bio apples please contact us</p>
              <p class="product_expiration">Expiration date: 01.06.2021</p>
            </div>
            <div class="seller_info">
              <img src="../img/image.jpg" class="seller_img">
              <p class="seller_name">Luisa Christensen</p>
            </div>
            <div class="btns_container">
              <button type="button" class="btn_alt" id="btn-1">Contact Seller</button>
              <button type="button" class="btn_alt" id="btn-2">Buy</button>
            </div>
          </div>  
        </section>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = ProductPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5udg2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class ChatPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>Chat</h2>
        </header>
        <div class="search_container"></div>
        <div class="chat_container"></div>
        
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = ChatPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lUwtW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class AddListingPage {
    constructor(id){
        this.id = id;
        this.render();
    /*
    this.imagePreview = document.querySelector(
      `#${this.id} [name="imagePreview"]`
    );
    this.titleInput = document.querySelector(`#${this.id} [name="title"]`);
    this.priceInput = document.querySelector(`#${this.id} [name="price"]`);
    this.expirationDateInput = document.querySelector(
      `#${this.id} [name="expirationDate"]`
    );
    this.descriptionInput = document.querySelector(
      `#${this.id} [name="description"]`
    );
    this.locationInput = document.querySelector(
      `#${this.id} [name="location"]`
    );

    this.attachEvents();
    */ }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>Add New Listing</h2>
        </header>
        <section class="add_container">
          <form>
            <div class="upload_container">
              <img name="imagePreview" class="image_preview">
              <input type="file" name="listingImage" accept="image/*" id="image-upload" hidden>
              <label for="image-upload" class="image_upload"><img src="../img/camera.svg" alt="Camera">Add Image</label>
            </div>
            <div class="form_container">
              <label class="add_label">Title<label><br>
              <input type="text" name="title" class="add_form"><br>
              <label class="add_label">Price<label><br>
              <input type="text" name="price" placeholder="DKK" class="add_form"><br>
              <label class="add_label">Expiration date<label><br>
              <input type="text" name="expirationDate" class="add_form"><br>
              <label class="add_label">Description<label><br>
              <textarea type="text" name="description" placeholder="0/300" class="add_form_extended"></textarea><br>
              <label class="add_label">Location<label><br>
              <input type="text" name="location" class="add_form"><br>
          </div>
            <button type="button" class="btn_alt">Add listing</button>
          </form>
        </section>
      </section>
    `);
    }
    /* Attaching events to DOM elements. 
  attachEvents() {
    this.imageInput.onchange = () => this.previewImage(); // on change event on the input file (image) field
    document.querySelector(`#${this.id} .save`).onclick = () => this.create(); // on click event for save button
  }

  previewImage() {
    const file = this.imageInput.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.imagePreview.setAttribute("src", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async create() {
    if (this.validate()) {
      const image = await service.uploadImage(this.imageInput.files[0]);
      const listings = await service.createListing(
        this.titleInput.value,
        this.priceInput.value,
        this.expirationDateInput.value,
        this.descriptionInput.value,
        this.locationInput.value,
        image.name
      );
      router.navigateTo("/", { home: home });
    }
  }

  validate() {
    if (
      this.titleInput.value &&
      this.priceInput.value &&
      this.expirationDateInput.value &&
      this.descriptionInput.value &&
      this.locationInput.value &&
      this.imageInput.files[0]
    ) {
      return true;
    } else {
      alert("Please, fill in all fields.");
      return false;
    }
  } */ beforeShow(props) {
        console.log(props);
    }
}
exports.default = AddListingPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iZqiE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class FavouritesPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Favourites</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = FavouritesPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6Wl4X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class ProfilePage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Profile</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = ProfilePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"79fVm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class AccountPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = AccountPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jCk6k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class MyImpactPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = MyImpactPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"AoYtQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class MyListingsPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = MyListingsPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"46jdJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class MyPurchasesPage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = MyPurchasesPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Dpl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class PublicProfilePage {
    constructor(id){
        this.id = id;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `);
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = PublicProfilePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["1Mq12","5HwUs"], "5HwUs", "parcelRequire514f")

//# sourceMappingURL=index.d56a3cb1.js.map
