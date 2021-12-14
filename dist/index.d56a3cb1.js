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
var _router = require("../router");
var _routerDefault = parcelHelpers.interopDefault(_router);
class Nav {
    constructor(){
        this.navImg = require("../img/nav.svg");
        this.homeImg = require("../img/home.svg");
        this.chatImg = require("../img/chat.svg");
        this.addImg = require("../img/add.svg");
        this.favouritesImg = require("../img/favourites_filled.svg");
        this.profileImg = require("../img/profile.svg");
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("afterbegin", /*html*/ `
      <nav class="tabbar">
      <img src="${this.navImg}" class="tabbar_img">

        <div class="nav_left"> 
          <a id="nav-home" class="nav_item"><img src="${this.homeImg}" class="nav_img"></a>
          <a id="nav-chat" class="nav_item"><img src="${this.chatImg}" class="nav_img"></a>
        </div>

        <div class="nav_middle">
          <a id="nav-add" class="nav_item_raised"><img src="${this.addImg}" class="nav_img_raised"></a>
        </div>

        <div class="nav_right">
          <a id="nav-favourites" class="nav_item"><img src="${this.favouritesImg}" class="nav_img"></a>
          <a id="nav-profile" class="nav_item"><img src="${this.profileImg}" class="nav_img"></a>
        </div>
      </nav>
    `);
        /* Button routers */ document.querySelector('#nav-add').addEventListener("click", ()=>{
            _routerDefault.default.navigateTo("/add");
        });
        document.querySelector("#nav-home").addEventListener("click", ()=>{
            _routerDefault.default.navigateTo("/home");
        });
        document.querySelector('#nav-chat').addEventListener("click", ()=>{
            _routerDefault.default.navigateTo("/chat");
        });
        document.querySelector('#nav-favourites').addEventListener("click", ()=>{
            _routerDefault.default.navigateTo("/favourites");
        });
        document.querySelector('#nav-profile').addEventListener("click", ()=>{
            _routerDefault.default.navigateTo("/profile");
        });
    }
}
const nav = new Nav();
exports.default = nav;

},{"../router":"90Bjy","../img/nav.svg":"iEMGg","../img/home.svg":"bGk6w","../img/chat.svg":"lKveA","../img/add.svg":"2nZV2","../img/favourites_filled.svg":"5xxat","../img/profile.svg":"aXNa7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"90Bjy":[function(require,module,exports) {
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
var _updateJs = require("./pages/update.js");
var _updateJsDefault = parcelHelpers.interopDefault(_updateJs);
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
                path: "/profile/",
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
            },
            {
                path: "/update",
                view: new _updateJsDefault.default("update")
            }
        ];
        // Declaring properties: pages and navLinks. Initialised in init().
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

},{"./pages/start.js":"7p5Ej","./pages/signup.js":"5pzUn","./pages/login.js":"cKfZK","./pages/home.js":"1edkc","./pages/filter.js":"iw7sr","./pages/product-page.js":"3an6W","./pages/chat.js":"5udg2","./pages/add-listing.js":"lUwtW","./pages/favourites.js":"iZqiE","./pages/profile.js":"6Wl4X","./pages/account.js":"79fVm","./pages/my-impact.js":"jCk6k","./pages/my-listings.js":"AoYtQ","./pages/my-purchases.js":"46jdJ","./pages/public-profile.js":"7Dpl3","./pages/update.js":"8qolA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7p5Ej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class StartPage {
    constructor(id){
        this.id = id;
        this.bgImg = require("../img/start-bg.jpg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Banner container --->
      <div class="start_container">
        <img src="${this.bgImg}" alt="Food" class="start-bg">
        <div class="overlay"></div>

        <!--- Content container --->
        <div class="start_content">
          <h1 class="start_text">Reduce your waste</h1>
          <h1 class="start_text">Share your food</h1>
          
          <!--- Button container --->
          <div class="btn_container">
            <button class="btn" id="login-btn">Login</button>
            <button class="btn" id="signup-btn">Sign up</button>
          </div>
        </div>
      </div>
    </section>
    `);
        /* Button router(s) */ document.querySelector("#login-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/login");
        });
        document.querySelector("#signup-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/signup");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = StartPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/start-bg.jpg":"2aZtz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"03GcU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Service {
    constructor(){
        this.baseUrl = "http://foodwaste.sonajuhasova.com/backend/";
        this.loginUrl = this.baseUrl + "/login.php";
        this.fileUploadUrl = this.baseUrl + "/fileUpload.php";
        this.listingUrl = this.baseUrl + "/listing.php";
    }
    /***** Sign up service *****/ async signupUser(name, username, password, passwordCheck) {
        const url = `${this.loginUrl}?action=signup`;
        var data = {
            name: name,
            username: username,
            password: password,
            passwordCheck: passwordCheck
        };
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
    }
    /***** Login service *****/ async loginUser(name1, password1) {
        const url = `${this.loginUrl}?action=login`;
        var data = {
            username: name1,
            password: password1
        };
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
    }
    setLoggedInUser(user) {
        this.user = user;
    }
    getLoggedInUser(user1) {
        return this.user;
    }
    /***** CRUD Operations *****/ /* Get listings */ async getListings(search) {
        const url = `${this.listingUrl}?action=getListings`;
        var data = {
            searchString: search
        };
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        });
        var resultListings = await response.json();
        return resultListings;
    }
    /* Get listing */ async getListing(listingId) {
        const url = `${this.listingUrl}?action=getListing&listingId=${listingId}`;
        const response = await fetch(url);
        const user = await response.json();
        return user;
    }
    /* Image upload */ async uploadImage(imageFile) {
        let formData = new FormData();
        formData.append("fileToUpload", imageFile);
        const response = await fetch(`${this.fileUploadUrl}?action=uploadImage`, {
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
    /* Create listing */ async createListing(user_id, title, price, expirationDate, description, location, image) {
        const newListing = {
            // declaring a new js object with the form values
            user_id,
            title,
            price,
            expirationDate,
            description,
            location,
            image
        };
        // post new listing to php service using fetch(...)
        const response = await fetch(this.listingUrl + "?action=createListing", {
            method: "POST",
            body: JSON.stringify(newListing)
        });
        // waiting for the result
        const result = await response.json();
        // the result is the new updated listings array
        this.listing = result;
        return this.listing;
    }
    /* Delete listing */ async deleteListing(listingId1) {
        var data = {
            listing_id: listingId1
        };
        const response = await fetch(`${this.listingUrl}?action=deleteListing&listingId=${listingId1}`, {
            method: "DELETE",
            body: JSON.stringify(data)
        });
        // waiting for the result
        const result = await response.json();
    }
    /* Update listing */ async updateListing(id, title1, price1, description1, expirationDate1, location1, image1) {
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
        const response = await fetch(this.listingUrl + "?action=updateListing", {
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

},{}],"2aZtz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "start-bg.ede87d99.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5pzUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class SignUpPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.signupImg = require("../img/signup.jpg");
        this.render();
    }
    /* Sign up */ handleSignup(e) {
        e.preventDefault();
        var n = document.querySelector("#signup-name").value;
        var u = document.querySelector("#signup-username").value;
        var p = document.querySelector("#signup-password").value;
        var pc = document.querySelector("#signup-password-check").value;
        console.log(n);
        var response = _serviceJsDefault.default.signupUser(n, u, p, pc).then((data)=>{
            if (data.signupSuccess) {
                document.querySelector(".signup-message").innerHTML = "";
                _routerJsDefault.default.navigateTo("/home");
            } else document.querySelector(".signup-message").innerHTML = data.error;
        });
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <a id="back-btn12"><img src="${this.backImg}"></a>
        </header>

        <!--- Banner container --->
        <div class="banner_container">
          <div class="login_signup_img">
            <img src="${this.signupImg}" alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste</h2>
            </div>
          </div>
        </div>

        <!--- Sign up container --->
        <div class="login_signup_container">
          <h1 class="login_signup_headline">Sign up</h1>
          <div class="form_container">
          
            <!--- Sign up form --->
            <form>
              <input id="signup-name" class="signup_input type="text" name="name" placeholder="Name">
              <input id="signup-username" class="signup_input type="text" placeholder="Email" autocomplete="new-email">
              <input id="signup-password" class="signup_input type="password" placeholder="Password" autocomplete="new-password">
              <input id="signup-password-check" class="signup_input type="password" placeholder="Password" autocomplete="new-password">
              <button type="button" id="btn-signup" class="btn_alt">Sign up</button>
              <div class="signup-message"></div>
            </form>
          </div>
        </div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn12").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/");
        });
        document.querySelector("#btn-signup").onclick = this.handleSignup;
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = SignUpPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/signup.jpg":"2WJzH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Pugh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "back.24bbbe78.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2WJzH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "signup.ec6e4620.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cKfZK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class LogInPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.loginImg = require("../img/login.jpg");
        this.render();
    }
    /* Login */ handleLogin(e) {
        e.preventDefault();
        var n = document.querySelector("#login-name").value;
        var u = document.querySelector("#login-password").value;
        console.log(n);
        var response = _serviceJsDefault.default.loginUser(n, u).then((data)=>{
            if (data.authenticated) {
                _serviceJsDefault.default.setLoggedInUser(data.userData);
                document.querySelector(".login-message").innerHTML = "";
                _routerJsDefault.default.navigateTo("/home");
            } else document.querySelector(".login-message").innerHTML = data.error;
        });
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn6"><img src="${this.backImg}"></a>
          </div>
        </header>

        <!--- Banner container --->
        <div class="banner_container">
          <div class="login_signup_img">
            <img src="${this.loginImg}" alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <!--- Login container --->
        <div class="login_signup_container">
          <h1 class="login_signup_headline">Login</h1>
          <div class="form_container">
          
            <!--- Login form --->
            <form>
              <input id="login-name" class="login_input" type="text" name="name" placeholder="Email"/>
              <input id="login-password" class="login_input" type="password" placeholder="Password" />
              <button type="button" class="btn_alt" id="btn-login">Login</button>
            </form>
            <div class="login-message"></div>
          </div>
        </div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn6").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/");
        });
        document.querySelector("#btn-login").onclick = this.handleLogin;
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = LogInPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/login.jpg":"kakxD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kakxD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "login.cb916fac.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1edkc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class HomePage {
    constructor(id){
        this.id = id;
        this.searchWhiteImg = require("../img/searchWhite.svg");
        this.filterImg = require("../img/filter.svg");
        this.favouritesImg = require("../img/favourites.svg");
        this.locationImg = require("../img/location.svg");
        this.render();
        this.init();
    }
    handleSearch() {
        var that = this;
        var searchString = document.querySelector("#search").value;
        _serviceJsDefault.default.getListings(searchString).then(function(listings) {
            console.log(listings);
            that.appendListings(listings);
        });
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <!--- Topbar container --->
        <header class="topbar">
          <h2>Home</h2>
        </header>

        <!--- Search and filter container --->
        <div class="home_container">
          <div class="search-and-filter-container">
            <div class="search-container">
              <input type="text" id="search">
            </div>
            <button id="search-button" class="search-button">
              <div>
                <img src="${this.searchWhiteImg}">
              </div>
            </button> 
            <button id="filter-btn" class="filter-button">
              <div>
                <img src="${this.filterImg}">
              </div>
            </button> 
          </div>

        <!-- Product listings -->
        <div class="product-listings-container"><div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#filter-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/filter");
        });
        document.querySelector("#search-button").addEventListener("click", ()=>this.handleSearch(this)
        );
    }
    /* Uses the imported services to get all listings - getListings() 
  and calls appendListings with listings returned from the service */ async init() {
        const listings = await _serviceJsDefault.default.getListings();
        this.appendListings(listings);
    }
    /* Appends the listings to the specified container defined in the render() */ appendListings(listings) {
        let htmlTemplate = "";
        for (const listing of listings)htmlTemplate += /*html*/ `
      <div class="product-listing-container">
      <div style="background-image: url('${listing.listing_img}');" class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}" class="favourite_img">
        </button>        
      </div>

      <!-- Product information container -->
      <div class="product-listing-info-container">
        <h3>${listing.listing_title}</h3>
        <div style="margin-top: 25px;">
          <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
          <p>${listing.listing_exp_date}</p>
        </div>

        <!-- Seller information container -->
        <div class="product-listing-user-info">
          <div>
            <div class="product-listing-profile-img"></div>
              <p>username</p>
            </div> 
            <div>
              <img src="${this.locationImg}">
              <p>${listing.listing_location}</p> 
            </div>
          </div>
        </div>
    </div>
    </div>

    `;
        document.querySelector(`#${this.id} .product-listings-container`).innerHTML = htmlTemplate;
        this.attachEvents();
    }
    /* Attaching an onclick event to all listings */ attachEvents() {
        document.querySelectorAll(`#${this.id} [data-listing-id]`).forEach((element)=>{
            element.onclick = ()=>{
                const listingId = element.getAttribute("data-listing-id");
                _routerJsDefault.default.navigateTo(`/product-page/${listingId}`);
            };
        });
    }
    beforeShow(props) {
        if (props.listing) this.appendListings(props.listings);
    }
}
exports.default = HomePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/searchWhite.svg":"6jmHq","../img/filter.svg":"jg3ZF","../img/favourites.svg":"1EhEA","../img/location.svg":"i8JWL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6jmHq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "searchWhite.18747333.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jg3ZF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "filter.4629aec7.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1EhEA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "favourites.75b64e7f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"i8JWL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "location.79981060.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iw7sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class FilterPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.render();
        this.slider();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn5"><img src="${this.backImg}"></a>
          </div>
          <h2>Filter</h2>
        </header>
        <div class="filter_container">
          
          <!--- Category filter container --->
          <h3 class="filter_headline">Categories</h3>
          <div class="category_container">
            <input type="checkbox" class="checkbox" id="vegetables" name="category" value="vegetables">
            <label for="vegetables" class="checkbox_label">Vegetables</label>

            <input type="checkbox" class="checkbox" id="fruit" name="category" value="fruit">
            <label for="fruit" class="checkbox_label">Fruit</label>

            <input type="checkbox" class="checkbox" id="dry-goods" name="category" value="dry-goods">
            <label for="dry-goods" class="checkbox_label">Dry goods</label>

            <input type="checkbox" class="checkbox" id="baked-goods" name="category" value="baked-goods">
            <label for="baked-goods" class="checkbox_label">Baked goods</label>

            <input type="checkbox" class="checkbox" id="meat" name="category" value="meat">
            <label for="meat"class="checkbox_label">Meat</label>

            <input type="checkbox" class="checkbox" id="fish" name="category" value="fish">
            <label for="fish" class="checkbox_label">Fish</label>

            <input type="checkbox" class="checkbox" id="dairy" name="category" value="dairy">
            <label for="dairy" class="checkbox_label">Dairy</label>
                  
            <input type="checkbox" class="checkbox" id="meals" name="category" value="meals">
            <label for="meals" class="checkbox_label">Meals</label>
          </div>
          
          <!--- Distance slider container --->
          <div class="distance_container">
            <div>
              <h3 class="filter_headline">Maximum distance</h3>
              <p class="distance_value"><span id="demo"></span>km</p>
            </div>
            <input type="range" min="1" max="100" value="50" class="slider" id="range">
          </div>

          <!--- Hide expired products container --->
          <div class="hide_container">
            <div>
              <h3 class="filter_headline">Hide expired products</h3>
              <input type="checkbox" class="hide_checkbox" id="hide" name="hide" value="hide">
            </div>
            <p>Some of the listed products might be over the expiration date
            according to its packaging but that does not necessarily mean that
            the product is spoiled. Check off this box to hide "expired" products.</p>
          </div>

          <!--- Sorting container --->
          <div class="sorting_container">
            <h3 class="filter_headline">Sort by</h3>
            <div class="radio_container">
              <label for="newest" class="radio" id="newest-radio">Newest</label>
                <input for="newest-radio" type="radio" id="newest" name="radio" value="newest" class="radio_btn">
            </div>
            <div class="radio_container">
            <label for="closest" class="radio" id="closest-radio">Closest</label>
              <input for="closest-radio" type="radio" id="closest" name="radio" value="closest" class="radio_btn">
            </div>
          </div>
        </div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn5").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
    }
    /* Slider functionality - shows the value (in km) of the slider */ /* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider */ slider() {
        let slider = document.getElementById("range");
        let output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function() {
            output.innerHTML = this.value;
        };
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = FilterPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3an6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class ProductPage {
    constructor(id){
        this.id = id;
        this.selectedListing;
        this.backImg = require("../img/back.svg");
        this.locationImg = require("../img/location.svg");
        this.dateImg = require("../img/date.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn10"><img src="${this.backImg}"></a>
          </div>
          <h2>Product</h2>
        </header>

         <!--- Product container --->
        <section class="product_container"></section>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn10").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
    }
    /* Appending selected listing information */ appendListingData() {
        let htmlTemplate = /*html*/ `
            <article class="selectedListing">
            <img src="${_serviceJsDefault.default.baseUrl}/files/medium/${this.selectedListing.image || "placeholder.jpg"}" class="listing_img">
            <div class="product">

              <!--- Listing information container --->
              <div class="listing_info">
                <div class="info_item">
                  <img src="${this.locationImg}">
                  <p class="listing_location">${this.selectedListing.location}</p>
                </div>
                <div class="info_item">
                  <img src="${this.dateImg}">
                  <p class="listing_date">${this.selectedListing.date}</p>
                </div>  
              </div>

              <!--- Product information container --->
              <div class="product_info">
                <h3 class="product_title">${this.selectedListing.title}</h3>
                <h4 class="product_price">${this.selectedListing.price}</h4>
              </div>

              <!--- Product details container --->
              <div class="product_details">
                <p class="product_description">${this.selectedListing.description}</p>
                <p class="product_expiration"><b>Expiration date:</b> ${this.selectedListing.expirationDate}</p>
             </div>
                
              <!--- Seller information container --->
            <div class="seller_info">
              <div class="product-listing-profile-img"><img src="${this.selectedListing.sellerImg}"></div>
              <p class="seller_name">${this.selectedListing.sellerName}</p>
            </div>

            <!--- Button container --->
            <div class="btns_container">
              <button type="button" class="btn_alt" id="btn-1">Contact Seller</button>
              <button type="button" class="btn_alt" id="btn-2">Buy</button>
            </div>   
          </div>
          </article>
        `;
        document.querySelector(`#${this.id} .product`).innerHTML = htmlTemplate;
        this.attachEvents();
    }
    attachEvents() {
        document.querySelectorAll(`#${this.id} [data-listing-id]`).forEach((element)=>{
            // adds .onclick for every listing calling router.navigateTo(...) with the id of the listing
            element.onclick = ()=>{
                const listingId = element.getAttribute("data-listing-id");
                _routerJsDefault.default.navigateTo(`/product/${listingId}`);
            };
        });
        document.querySelector(`#${this.id} #btn-1`).onclick = ()=>_routerJsDefault.default.navigateTo(`/chat`)
        ;
        document.querySelector(`#${this.id} #btn-2`).onclick = ()=>_routerJsDefault.default.navigateTo(`/buy`)
        ;
    }
    async beforeShow(props) {
        console.log(props);
        this.selectedListing = await _serviceJsDefault.default.getListing(props.id);
        this.appendListingData();
    }
}
exports.default = ProductPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/location.svg":"i8JWL","../img/date.svg":"jdL8f","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jdL8f":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "date.db3b25fe.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"5udg2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class ChatPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.searchImg = require("../img/search.svg");
        this.filterImg = require("../img/filter.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">
        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
           <a id="back-btn3"><img src="${this.backImg}"></a>
          </div>
          <h2>Chat</h2>
        </header>
         <!--- Chat container --->
        <section class="chat_container">
        
          <!--- Search and filter container --->
        <div class="home_container">
        <div class="search-and-filter-container">
          <div class="search-container">
            <img src="${this.searchImg}">
            <input type="text" id="search">
          </div>
          <button id="filter-btn" class="filter-button">
            <div>
              <img src="${this.filterImg}">
            </div>
          </button> 
        </div>

         <!--- Chat box container --->
        <div class="chat_content_first">
          <div class="chat-profile-img" style="background-image: url('https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');"></div>
            <div>
              <p class="seller_name">Luisa Christensen</p>
              <p class="chat_preview">See you then<p>
             </div>
            <div class="chat-time">
            <p>18.24</p>
           </div>
        </div>

         <!--- Chat box container --->
        <div class="chat_content">
          <div class="chat-profile-img" style="background-image: url('https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6');"></div>
            <div>
              <p class="seller_name">Anni Nielsen</p>
              <p class="chat_preview">Are the apples still available?<p>
           </div>
          <div class="chat-time">
          <p>16.02</p>
         </div>
        </div>

         <!--- Chat box container --->
        <div class="chat_content">
          <div class="chat-profile-img" style="background-image: url('https://image.shutterstock.com/mosaic_250/101595/738242395/stock-photo-portrait-of-a-mature-businessman-wearing-glasses-on-grey-background-happy-senior-latin-man-looking-738242395.jpg');"></div>
            <div>
              <p class="seller_name">Søren Knudsen</p>
             <p class="chat_preview">I can pick up the apples tomorrow...<p>
          </div>
          <div class="chat-time">
          <p>14.56</p>
        </div>
        </div>

         <!--- Chat box container --->
        <div class="chat_content">
          <div class="chat-profile-img" style="background-image: url('https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701793/152407909-profile-picture-of-smiling-young-caucasian-man-in-glasses-show-optimism-positive-and-motivation-head.jpg?ver=6');"></div>
            <div>
              <p class="seller_name">Harry Williams </p>
              <p class="chat_preview">Thanks for the purchase!<p>
             </div>
            <div class="chat-time">
            <p>10.48</p>
          </div>
        </div>

        </section>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn3").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = ChatPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/search.svg":"5wVcj","../img/filter.svg":"jg3ZF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5wVcj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "search.ab4deccd.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lUwtW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class AddListingPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.uploadImg = require("../img/camera.svg");
        this.startImg = require("../img/start-bg.jpg");
        this.render();
        this.titleInput = document.querySelector(`#${this.id} [name="title"]`);
        this.priceInput = document.querySelector(`#${this.id} [name="price"]`);
        this.descriptionInput = document.querySelector(`#${this.id} [name="description"]`);
        this.expirationDateInput = document.querySelector(`#${this.id} [name="expirationDate"]`);
        this.locationInput = document.querySelector(`#${this.id} [name="location"]`);
        this.imagePreview = document.querySelector(`#${this.id} [name="imagePreview"]`);
        this.imageInput = document.querySelector(`#${this.id} [name="listingImage"]`);
        this.attachEvents();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*jsx*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn2"><img src="${this.backImg}"></a>
          </div>
          <h2>Add New Listing</h2>
        </header>
        
        <!--- Add listing container --->
        <section class="add_container">
          <form>
            <!--- Image upload container --->
            <div class="upload_container">
            <img name="imagePreview" class="image-preview"> 
              <div class="upload_button">
              <p class="upload_text">Add Image</p>
              <img src="${this.uploadImg}" alt="camera">
              <input type="file" name="listingImage" accept="image/*" class="image_upload">
              </div>
            </div>
            

            <!--- Listing information container --->
            <div class="form_container">
              <br><label class="add_label">Title<label><br>
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

          <!--- Category filter container --->
          <label class="add_label">Category</label><br>
            <div class="category_container">
              <input type="checkbox" class="checkbox" id="vegetables" name="category" value="vegetables">
              <label for="vegetables" class="checkbox_label">Vegetables</label>

              <input type="checkbox" class="checkbox" id="fruit" name="category" value="fruit">
              <label for="fruit" class="checkbox_label">Fruit</label>

              <input type="checkbox" class="checkbox" id="dry-goods" name="category" value="dry-goods">
              <label for="dry-goods" class="checkbox_label">Dry goods</label>

              <input type="checkbox" class="checkbox" id="baked-goods" name="category" value="baked-goods">
              <label for="baked-goods" class="checkbox_label">Baked goods</label>

              <input type="checkbox" class="checkbox" id="meat" name="category" value="meat">
              <label for="meat"class="checkbox_label">Meat</label>

              <input type="checkbox" class="checkbox" id="fish" name="category" value="fish">
              <label for="fish" class="checkbox_label">Fish</label>

              <input type="checkbox" class="checkbox" id="dairy" name="category" value="dairy">
              <label for="dairy" class="checkbox_label">Dairy</label>
                
              <input type="checkbox" class="checkbox" id="meals" name="category" value="meals">
              <label for="meals" class="checkbox_label">Meals</label>
            </div>

          </div>
          <!--- Add listing button --->
          <button type="button" id="add-btn" class="btn_alt">Add Listing</button>  

          </form>
        </section>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn2").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
    }
    /* Attaching events to DOM elements. */ attachEvents() {
        this.imageInput.onchange = ()=>this.previewImage()
        ; // on change event on the input file (image) field
        document.querySelector(`#${this.id} #add-btn`).onclick = (e)=>{
            e.preventDefault();
            this.create(); // on click event for save button
        };
    }
    /* Image preview functionality */ previewImage() {
        const file = this.imageInput.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = (event)=>{
                this.imagePreview.setAttribute("src", event.target.result);
            };
            reader.readAsDataURL(file);
            document.querySelector(".image-preview").style.margin = "0 10px 0 0"; // adds spacing between elements
        }
    }
    /* Add new listing functionality */ async create() {
        //if (this.validate()) {
        //const image = await service.uploadImage(this.imageInput.files[0]);
        var user = _serviceJsDefault.default.getLoggedInUser();
        const listings = await _serviceJsDefault.default.createListing(user.user_id, this.titleInput.value, this.priceInput.value, this.expirationDateInput.value, this.descriptionInput.value, this.locationInput.value, "fakeImageName");
        _routerJsDefault.default.navigateTo("/home");
    // }
    }
    /* Information validation */ validate() {
        if (this.titleInput.value && this.priceInput.value && this.descriptionInput.value && this.expirationDateInput.value && this.locationInput.value && this.imageInput.files[0]) return true;
        else {
            alert("Please, fill in all fields.");
            return false;
        }
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = AddListingPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/camera.svg":"1RjE8","../img/start-bg.jpg":"2aZtz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1RjE8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "camera.5fd23552.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iZqiE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class FavouritesPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.favouritesFilledImg = require("../img/favourites_filled.svg");
        this.locationImg = require("../img/location.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn4"><img src="${this.backImg}"></a>
          </div>
          <h2>Favourites</h2>
        </header>

         <!--- Product listings container --->
         <div class="product-listing-container">
          <div class="product-listing-image">
             <button class="favourite-button">
               <img src="${this.favouritesFilledImg}" class="favourite_img">
             </button>        
          </div>

         <!--- Product information container --->
         <div class="product-listing-info-container">
           <h3>Whole grain noodles</h3>
           <div style="margin-top: 25px;">
              <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
              <p>07.06.2023</p>
           </div>

           <!--- Seller information container --->
           <div class="product-listing-user-info">
            <div>
              <div class="product-listing-profile-img"></div>
                <p>Maria N.</p>
              </div> 
              <div>
                <img src="${this.locationImg}">
                <p>Aarhus</p> 
              </div>
           </div>
         </div>
     </div>
   </div>
  </section>
`);
        /* Button router(s) */ document.querySelector("#back-btn4").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = FavouritesPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/favourites_filled.svg":"5xxat","../img/location.svg":"i8JWL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5xxat":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "favourites_filled.c610c78f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6Wl4X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class ProfilePage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.locationImg = require("../img/location.svg");
        this.service = _serviceJsDefault.default;
        this.router = _routerJsDefault.default;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*jsx*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn"><img src="${this.backImg}"></a>
          </div>
          <h2>Profile</h2>
        </header>

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
            <h4 id="profile-user-name"></h4> 
            <div class="profile-location">
              <img src="${this.locationImg}">
              <p>Aarhus</p> 
          </div>

          <!--- Buttons container --->
          <div class="profile-buttons">
            <button id="account-btn">Account</button>
            <button id="listings-btn">My Listings</button>
            <button id="purchases-btn">My Purchases</button>
            <button id="impact-btn">My Impact</button>
            <button style="margin-top: 25px;" id="logout-btn">Log Out</button>
          </div>
        <div>
      </section>
    `);
        /* Button routers */ document.querySelector("#back-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
        document.querySelector("#account-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/account");
        });
        document.querySelector("#listings-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/listings");
        });
        document.querySelector("#purchases-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/purchases");
        });
        document.querySelector("#impact-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/impact");
        });
        document.querySelector("#logout-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/");
        });
    }
    beforeShow(props) {
        document.querySelector("#profile-user-name").innerHTML = this.service.user.user_name;
        console.log(props);
    }
}
exports.default = ProfilePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/location.svg":"i8JWL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"79fVm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class AccountPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.locationImg = require("../img/location.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn1"><img src="${this.backImg}"></a>
          </div>
          <h2>Account</h2>
        </header>

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
            <h4>Louise Christensen</h4> 
          <div class="profile-location">
              <img src="${this.locationImg}">
              <p>Aarhus</p> 
            </div>

            <!--- Profile information inputs --->
            <form class="form-inputs">
              <label for="name">Name</label><br>
              <input type="text" class="account_form" id="name" name="name"><br>  

              <label for="location">Location</label><br>
              <input type="text" class="account_form" id="location" name="location"><br>  

              <label for="email">Email</label><br>
              <input type="text" class="account_form" id="email" name="email"><br>  

              <label for="cars">Currency</label> <br>

              <select class="account_form" name="currency" id="currency">
                <option value="dkk">DKK</option>
                <option value="eur">Eur</option>
                <option value="dollar">US dollar</option> 
              </select>

              </form>
              <form class="form-checkboxes">

                <!--- Payment preference form --->
                <p>Payment Preference</p>
                <div>
                  <input type="checkbox" id="payment-card" name="payment" value="payment-card">
                  <label for="payment-card" class="account-checkbox-label">Credit Card</label><br>
                </div>
                <div>
                  <input type="checkbox" id="mobile-pay" name="payment" value="mobile-pay">
                  <label for="mobile-pay" class="account-checkbox-label">Mobile Pay</label><br>
                </div>

                <!--- Notification form --->
                <p>Notifications</p>
                <div>
                  <input type="checkbox" id="notifications-on" name="notifications" value="notifications-on">
                  <label for="notifications-on" class="account-checkbox-label">On</label><br>
                </div>
                <div>
                  <input type="checkbox" id="notifications-off" name="notifications" value="notifications-of">
                  <label for="notifications-of" class="account-checkbox-label">Of</label><br>
                </div>
              </form>


            <!--- Button container --->
            <div class="account-buttons">
              <button class="btn_alt" id="profile-update-btn">Update profile</button> 
            </div>
          <div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn1").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/profile");
        });
        document.querySelector("#profile-update-btn").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/account");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = AccountPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/location.svg":"i8JWL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jCk6k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class MyImpactPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn7"><img src="${this.backImg}"></a>
          </div>
          <h2>My Impact</h2>
        </header>

        <!--- Impact tracker container --->
        <h3>My Impact Tracker</h3>
            <div class="impact-tracker-wrapper">
                <div class="impact-tracker">
                  <h4>3</h4>
                  <h5>Purchase(s)<br>made</h5>
                </div>
                <div class="impact-tracker">
                  <h4>3</h4>
                  <h5>Listing(s)<br>made</h5>
                </div>
            </div>

            <!--- Impact badges container --->
            <h3>Badges</h3>
            <div class="impact-badges-wrapper">
                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>
                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>
                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>
            </div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn7").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/profile");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = MyImpactPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"AoYtQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class MyListingsPage {
    constructor(id){
        this.id = id;
        this.selectedListing;
        this.backImg = require("../img/back.svg");
        this.favouritesImg = require("../img/favourites.svg");
        this.service = _serviceJsDefault.default;
        this.router = _routerJsDefault.default;
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn8"><img src="${this.backImg}"></a>
          </div>
          <h2>My Listings</h2>
        </header>

        <!--- Product listing container --->
       <div class="product-listing-container-mylistings"></div>
       

    </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn8").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/profile");
        });
    }
    beforeShow(props) {
        var that = this;
        const listings = _serviceJsDefault.default.getListings().then(function(data) {
            that.appendListings(data);
            console.log(props);
        });
    }
    appendListings(listings) {
        let htmlTemplate = "";
        for (const listing of listings)if (listing.user_id == this.service.user.user_id) htmlTemplate += /*html*/ `
      <article data-listing-id="${listing.listing_id}">
      <div style="background-image: url('${listing.listing_img}');" class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}" class="favourite_img">
        </button>        
      </div>

      <!-- Product information container -->
      <div class="product-listing-info-container">
        <h3>${listing.listing_title}</h3>
        <button type="button" class="update">Edit</button>
        <button type="button" class="delete">Delete</button>
      </div>
    </article>
    `;
        document.querySelector(".product-listing-container-mylistings").innerHTML = htmlTemplate;
        this.attachEvents();
    }
    /* Attaching events to DOM elements */ attachEvents() {
        document.querySelectorAll(`#${this.id} [data-listing-id]`).forEach((element)=>{
            /*adds .onclick for every listing calling router.navigateTo(...) with the id of the listing*/ const listingId = element.getAttribute("data-listing-id");
            element.querySelector(".update").addEventListener("click", ()=>{
                _routerJsDefault.default.navigateTo(`/update`, {
                    listingId: listingId
                });
            });
            element.querySelector(".delete").addEventListener("click", ()=>{
                this.showDeleteDialog(listingId);
            });
        });
    }
    async showDeleteDialog(listingId) {
        const deleteListing = confirm("Do you want to delete listing?");
        if (deleteListing) {
            console.log(listingId);
            this.service.deleteListing(listingId);
            this.beforeShow();
        }
    }
}
exports.default = MyListingsPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/favourites.svg":"1EhEA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"46jdJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class MyPurchasesPage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.favouritesImg = require("../img/favourites.svg");
        this.locationImg = require("../img/location.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn9"><img src="${this.backImg}"></a>
          </div>
          <h2>My Purchases</h2>
        </header>

        <!-- Product listings -->
            <div class="product-listing-container">
            <div class="product-listing-image">
              <button class="favourite-button">
                <img src="${this.favouritesImg}">
              </button>        
            </div>

            <!-- Product information container -->
            <div class="product-listing-info-container">
              <h3>Whole grain noodles</h3>
              <div style="margin-top: 25px;">
                <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
                <p>07.06.2023</p>
              </div>

              <!-- Seller information container -->
              <div class="product-listing-user-info">
                <div>
                  <div class="product-listing-profile-img"></div>
                    <p>Maria N.</p>
                  </div> 
                  <div>
                    <img src="${this.locationImg}">
                    <p>Aarhus</p> 
                  </div>
              </div>
            </div>
        </div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn9").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/profile");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = MyPurchasesPage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/favourites.svg":"1EhEA","../img/location.svg":"i8JWL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Dpl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class PublicProfilePage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.locationImg = require("../img/location.svg");
        this.render();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn11"><img src="${this.backImg}"></a>
          </div>
          <h2>Profile</h2>
        </header>

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
          <h4>Louise Christensen</h4> 
          <div class="profile-location">
            <img src="${this.locationImg}">
            <p>Aarhus</p> 
          </div>
          
          <!--- Impact tracker container --->
          <h3>My Impact Tracker</h3>
            <div class="impact-tracker-wrapper">
              <div class="impact-tracker">
                <h4>3</h4>
                <h5>Purchase(s)<br>made</h5>
              </div>
              <div class="impact-tracker">
                <h4>3</h4>
                <h5>Listing(s)<br>made</h5>
              </div>
            </div>

            <!--- Impact badges container --->
            <h3>Badges</h3>
            <div class="impact-badges-wrapper">
              <div class="impact-badge">
                <div></div>
                <p>First listing</p>
              </div>

              <div class="impact-badge">
                <div></div>
                <p>First listing</p>
              </div>

              <div class="impact-badge">
                <div></div>
                <p>First listing</p>
              </div>
            </div>
          <div>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn11").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/home");
        });
    }
    beforeShow(props) {
        console.log(props);
    }
}
exports.default = PublicProfilePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/location.svg":"i8JWL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8qolA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("../router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _serviceJs = require("../service.js");
var _serviceJsDefault = parcelHelpers.interopDefault(_serviceJs);
class UpdatePage {
    constructor(id){
        this.id = id;
        this.backImg = require("../img/back.svg");
        this.uploadImg = require("../img/camera.svg");
        this.startImg = require("../img/start-bg.jpg");
        this.render();
        this.titleInput = document.querySelector(`#${this.id} [name="title"]`);
        this.priceInput = document.querySelector(`#${this.id} [name="price"]`);
        this.descriptionInput = document.querySelector(`#${this.id} [name="description"]`);
        this.expirationDateInput = document.querySelector(`#${this.id} [name="expirationDate"]`);
        this.locationInput = document.querySelector(`#${this.id} [name="location"]`);
        this.imagePreview = document.querySelector(`#${this.id} [name="imagePreview"]`);
        this.imageInput = document.querySelector(`#${this.id} [name="listingImage"]`);
        this.idInput = document.querySelector(`#${this.id} [name="id"]`);
        this.attachEvents();
    }
    render() {
        document.querySelector("#root").insertAdjacentHTML("beforeend", /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn13"><img src="${this.backImg}"></a>
          </div>
          <h2>Update Listing</h2>
        </header>
        
        <!--- Update listing container --->
        <section class="add_container">
          <form>
            <!--- Image upload container --->
            <div class="upload_container">
            <img name="imagePreview" class="image-preview1"> 
              <div class="upload_button">
              <p class="upload_text">Add Image</p>
              <img src="${this.uploadImg}" alt="camera">
              <input type="file" name="listingImage" accept="image/*" class="image_upload">
              </div>
            </div>
            

            <!--- Listing information container --->
            <div class="form_container">
              <br><label class="add_label">Title<label><br>
              <input type="hidden" name="id" />
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

          
          </div>
          <button type="button" id="add-btn" class="btn_alt">Update Listing</button>  

          </form>
        </section>
      </section>
    `);
        /* Button router(s) */ document.querySelector("#back-btn13").addEventListener("click", ()=>{
            _routerJsDefault.default.navigateTo("/listings");
        });
    }
    /* Attaching events to DOM elements */ attachEvents() {
        this.imageInput.onchange = ()=>this.previewImage()
        ; // on change event on the input file (image) field
        document.querySelector(`#${this.id} #add-btn`).onclick = ()=>this.save()
        ; // on click event for save button
    }
    /* Image preview functionality */ previewImage() {
        const file = this.imageInput.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = (event)=>{
                this.imagePreview.setAttribute("src", event.target.result);
            };
            reader.readAsDataURL(file);
            document.querySelector(".image-preview1").style.margin = "0 10px 0 0"; // adds spacing between elements
        }
    }
    /* Update listing functionality */ async save() {
        if (this.validate()) {
            //const image = await service.uploadImage(this.imageInput.files[0]);
            //this.selectedListing.image = image.name;
            const listings = await _serviceJsDefault.default.updateListing(this.idInput.value, this.titleInput.value, this.priceInput.value, this.expirationDateInput.value, this.descriptionInput.value, this.locationInput.value, '');
            _routerJsDefault.default.navigateTo(`/listings`);
        }
    }
    /* Information validation */ validate() {
        if (this.titleInput.value && this.priceInput.value && this.descriptionInput.value && this.expirationDateInput.value && this.locationInput.value) return true;
        else {
            alert("Please, fill in all fields.");
            return false;
        }
    }
    beforeShow(props) {
        var that = this;
        this.s;
        var listing = _serviceJsDefault.default.getListing(props.listingId);
        listing.then(function(data) {
            that.titleInput.value = data.listing_title;
            that.priceInput.value = data.listing_price;
            that.idInput.value = props.listingId;
        });
        console.log(props);
    }
}
exports.default = UpdatePage;

},{"../router.js":"90Bjy","../service.js":"03GcU","../img/back.svg":"7Pugh","../img/camera.svg":"1RjE8","../img/start-bg.jpg":"2aZtz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iEMGg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "nav.848d6efd.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bGk6w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "home.fd4c3866.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lKveA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "chat.72883f02.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2nZV2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "add.68cc8f42.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aXNa7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('fBg3F') + "profile.904df317.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["1Mq12","5HwUs"], "5HwUs", "parcelRequire514f")

//# sourceMappingURL=index.d56a3cb1.js.map
