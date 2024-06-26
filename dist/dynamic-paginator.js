/*!
  * Dynamic Paginator v1.0.0 (https://github.com/alameenlr/dynamic-paginator)
  * Copyright (c) Al-Ameen LR <alameenlr@outlook.com>
  * Licensed under MIT (https://github.com/alameenlr/dynamic-paginator/license.txt)
  */
var DynamicPaginator;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lrs-dynamic-paginator{--lrs-dpg-border-color:#dee2e6;--lrs-dpg-text-color:#333;--lrs-dpg-bg-color:#fff;--lrs-dpg-page-hover-bg-color:#f1f1f1;--lrs-dpg-page-active-color:#fff;--lrs-dpg-page-active-bg-color:#1c63eb;--lrs-dpg-page-color-opacity:1;--lrs-dpg-page-hover-color-opacity:1;--lrs-dpg-loader-background:rgba(255,255,255,.54);--lrs-dpg-loader-transparent-border:rgba(0,0,0,.2);width:100%;font-family:Verdana,sans-serif;font-size:1em}.lrs-dynamic-paginator *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.lrs-dynamic-paginator.theme-dark{--lrs-dpg-text-color:#fff;--lrs-dpg-bg-color:#2d2d2d;--lrs-dpg-border-color:#5f5f5f;--lrs-dpg-page-hover-bg-color:#414141;--lrs-dpg-loader-background:rgba(38,38,38,.62);--lrs-dpg-loader-transparent-border:rgba(255,255,255,.5)}.lrs-dynamic-paginator [disabled]{opacity:.4 !important}.lrs-dynamic-paginator input.lrs-dpf,.lrs-dynamic-paginator select.lrs-dpf{font-size:.9em}.lrs-dynamic-paginator input.lrs-dpf[type=number]::-webkit-outer-spin-button,.lrs-dynamic-paginator input.lrs-dpf[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.lrs-dynamic-paginator input.lrs-dpf[type=number]{-moz-appearance:textfield}.lrs-dynamic-paginator .w-100{width:100%}.lrs-dynamic-paginator .h-100{height:100%}.lrs-dynamic-paginator .search-match{background:rgba(46,211,163,.35)}.lrs-dynamic-paginator table{border-collapse:collapse;margin-bottom:1rem;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator table th{border-top:1px solid var(--lrs-dpg-border-color);border-bottom:2px solid var(--lrs-dpg-border-color);padding:.75rem;text-align:inherit;text-align:-webkit-match-parent}.lrs-dynamic-paginator table th.head-sort{background:rgba(0,0,0,0) none center right/14px no-repeat;cursor:pointer;padding-right:16px}.lrs-dynamic-paginator table td{padding:.75rem;vertical-align:top;border-top:1px solid var(--lrs-dpg-border-color)}.lrs-dynamic-paginator .d-none{display:none}.lrs-dynamic-paginator .d-flex{display:flex}.lrs-dynamic-paginator .d-flex.justify-content-between{-webkit-box-pack:space-between !important;-ms-flex-pack:space-between !important;justify-content:space-between}.lrs-dynamic-paginator .d-flex.justify-content-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.lrs-dynamic-paginator .d-flex.flex-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.lrs-dynamic-paginator .py-2{padding:.5rem 0}.lrs-dynamic-paginator .m-auto{margin:auto}.lrs-dynamic-paginator .no-border{border:none}.lrs-dynamic-paginator .no-outline{outline:none !important}.lrs-dynamic-paginator .no-bg{background:none}.lrs-dynamic-paginator .border{border:solid 1px var(--lrs-dpg-border-color)}.lrs-dynamic-paginator button{cursor:pointer}.lrs-dynamic-paginator .show-status{font-size:.95em;line-height:28px;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .search-box{border-radius:8px;padding:4px}.lrs-dynamic-paginator .search-box input{padding:2px 4px;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .search-box select{border-right:solid 1px var(--lrs-dpg-border-color);width:68px;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .search-box button{color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .set-view-count select{border-right:solid 1px var(--lrs-dpg-border-color);border-radius:8px;padding:.35em;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .set-view-count select option{background-color:var(--lrs-dpg-bg-color)}.lrs-dynamic-paginator .set-view-count span{font-size:.9em;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .pagination{display:flex;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator .pagination.dpg-no-bg{--lrs-dpg-page-active-bg-color:rgba(0,0,0,0);--lrs-dpg-page-active-color:#2972ff;--lrs-dpg-page-hover-bg-color:rgba(0,0,0,0);--lrs-dpg-page-color-opacity:.5;--lrs-dpg-page-hover-color-opacity:1}.lrs-dynamic-paginator .pagination .pager{user-select:none;list-style:none;padding:0;margin:0;display:flex;align-items:center}.lrs-dynamic-paginator .pagination .pager .page-number,.lrs-dynamic-paginator .pagination .pager .page-more{line-height:28px;min-width:28px;height:28px;padding:0px 3px;display:inline-block;text-align:center;color:inherit;text-decoration:none;margin:0px 3px;outline:none;border-radius:7px;transition:all .1s ease-in;cursor:pointer;opacity:var(--lrs-dpg-page-color-opacity)}.lrs-dynamic-paginator .pagination .pager .page-number:hover,.lrs-dynamic-paginator .pagination .pager .page-number:focus,.lrs-dynamic-paginator .pagination .pager .page-more:hover,.lrs-dynamic-paginator .pagination .pager .page-more:focus{background-color:var(--lrs-dpg-page-hover-bg-color);opacity:var(--lrs-dpg-page-hover-color-opacity)}.lrs-dynamic-paginator .pagination .pager .page-number.active,.lrs-dynamic-paginator .pagination .pager .page-more.active{background:var(--lrs-dpg-page-active-bg-color);color:var(--lrs-dpg-page-active-color);opacity:var(--lrs-dpg-page-hover-color-opacity)}.lrs-dynamic-paginator .pagination .page-previous,.lrs-dynamic-paginator .pagination .page-next{line-height:29px;min-width:28px;height:28px;text-align:center;border-radius:7px;color:var(--lrs-dpg-text-color);opacity:var(--lrs-dpg-page-color-opacity)}.lrs-dynamic-paginator .pagination .page-previous:hover,.lrs-dynamic-paginator .pagination .page-previous:focus,.lrs-dynamic-paginator .pagination .page-next:hover,.lrs-dynamic-paginator .pagination .page-next:focus{background-color:var(--lrs-dpg-page-hover-bg-color);opacity:var(--lrs-dpg-page-hover-color-opacity)}.lrs-dynamic-paginator .pagination .page-previous>svg,.lrs-dynamic-paginator .pagination .page-next>svg{width:14px;height:14px;vertical-align:baseline}.lrs-dynamic-paginator .jump-to{margin-left:5px}.lrs-dynamic-paginator .jump-to .jump-to-box{padding:4px 5px;border-radius:7px}.lrs-dynamic-paginator .jump-to .jump-to-box input{width:36px;color:var(--lrs-dpg-text-color);line-height:10px;font-size:.9em}.lrs-dynamic-paginator .jump-to .jump-to-box button{line-height:10px;font-size:.9em;color:var(--lrs-dpg-text-color)}.lrs-dynamic-paginator [data-lrs-dpg-elm=items-list].null-loader{min-height:56px;display:block;width:100%}.lrs-dynamic-paginator .lrs-dpg-content-loader{position:absolute;z-index:5000;background:var(--lrs-dpg-loader-background);min-height:56px}.lrs-dynamic-paginator .lrs-dpg-content-loader .dpg-loading,.lrs-dynamic-paginator .lrs-dpg-content-loader .dpg-loading:after{width:100%;height:100%;overflow:hidden}.lrs-dynamic-paginator .lrs-dpg-content-loader .dpg-loading:after{-webkit-animation:1.3s infinite lrs-dpg-ldr;animation:1.3s infinite lrs-dpg-ldr;-moz-animation:1.3s infinite lrs-dpg-ldr;background-image:linear-gradient(90deg, rgba(204, 204, 204, 0), rgba(204, 204, 204, 0.19) 20%, rgba(204, 204, 204, 0.32) 60%, rgba(204, 204, 204, 0));-webkit-transform:translateX(-100%);transform:translateX(-100%);content:"";display:block}@-webkit-keyframes lrs-dpg-ldr{100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes lrs-dpg-ldr{100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@-moz-keyframes lrs-dpg-ldr{100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// NAMESPACE OBJECT: ./node_modules/http-query-string/base.js
var base_namespaceObject = {};
__webpack_require__.r(base_namespaceObject);
__webpack_require__.d(base_namespaceObject, {
  exclude: () => (exclude),
  extract: () => (extract),
  parse: () => (parse),
  parseUrl: () => (parseUrl),
  pick: () => (pick),
  stringify: () => (stringify),
  stringifyUrl: () => (stringifyUrl)
});

;// CONCATENATED MODULE: ./src/elements/searchbox.ts
function searchBoxComponent(options) {
    if (options.search != false) {
        var search_op = options.search;
        var search_sel_1 = "";
        options.itemProperties.forEach(function (p) {
            search_sel_1 += (options.indexedItemPropertiesKeys.indexOf(p.key) > -1 ? "<option value=\"".concat(p.key, "\" ").concat(options.currentViewValues.searchIn == p.key ? ' selected' : '', ">").concat(p.label, "</option>") : "");
        });
        return "<form action=\"#\">" +
            "<div class=\"d-flex border search-box\">" +
            (search_sel_1.length > 0 ? "<select name=\"".concat(options.dpParamKeys.searchIn, "\" class=\"no-border no-outline no-bg\">") + search_sel_1 + "</select>" : "") +
            "<input type=\"text\" name=\"".concat(options.dpParamKeys.searchKey, "\" placeholder=\"").concat(search_op.placeholder, "\" class=\"lrs-dpf no-border no-outline no-bg\">") +
            "<button type=\"submit\" class=\"no-border no-outline no-bg\"><svg width=\"18\" height=\"14\" style=\"fill:currentColor;opacity:0.3;\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z\"/></svg></button>" +
            "</div>" +
            "</form>";
    }
    return '';
}

;// CONCATENATED MODULE: ./src/elements/setcount.ts
function setCountComponent(fieldname, countsPerPage, totalItemsCount, countSelect) {
    var search_sel = "";
    countSelect.forEach(function (n) {
        search_sel += "<option value=\"".concat(n, "\" ").concat(n == countsPerPage ? ' selected' : '', ">").concat(n, "</option>");
    });
    return "<div class=\"set-view-count\">" +
        "<select name=\"".concat(fieldname, "\" class=\"lrs-dpf border no-bg no-outline\">") + search_sel + "</select>" +
        "<span> Items per page.</span>" +
        "</div>";
}

;// CONCATENATED MODULE: ./src/default-dp-options.ts


//Keys of DynamicPaginator Option Load From Client if it is In Options
var takeFromUserOption = (/* unused pure expression or super */ null && ([
    "httpRequestHeaders",
    "itemProperties"
]));
var currentViewValueKeys = [
    "pageNo",
    "count",
    "orderBy",
    "orderByIn",
    "searchIn",
    "searchKey",
    "userParams"
];
var defaultOption = {
    search: {
        placeholder: "Search",
    },
    colorTheme: "auto",
    getInfoURL: "",
    loadListURL: "",
    itemsNumber: "No.",
    httpRequestHeaders: {},
    itemProperties: [],
    indexedItemPropertiesKeys: [],
    items: [],
    maxPagerNumbers: 10,
    totalItemsCount: 0,
    setCountsPerPage: [10, 20, 50, 100, 250, 500, 1000],
    pushToHistory: true,
    showViewingStatus: true,
    currentViewValues: {
        pageNo: 1,
        count: 10,
    },
    fromStartOnSort: false,
    dpParamKeys: {
        pageNo: "page-no",
        count: "count",
        orderBy: "order-by",
        orderByIn: "order-by-in",
        searchIn: "search-in",
        searchKey: "search-key",
        userParams: "dp-inputs",
    },
    clientSideSearch: true,
    clientSideSearchFormat: "%{{search-key}}%",
    userParamListner: true,
    viewTemplate: "<div class=\"d-flex w-100 justify-content-between py-2\">" +
        "<div>{{searchBox}}</div>" +
        "<div>{{countsPerPage}}</div>" +
        "</div>" +
        "<table class=\"w-100\">" +
        "<thead>" +
        "<tr>{{propertiesLabel}}</tr>" +
        "</thead>" +
        "<tbody>{{itemsList}}</tbody>" +
        "</table>" +
        "<div class=\"d-flex w-100 justify-content-between py-2\">" +
        "<div class=\"show-status\">{{viewingStatus}}</div>" +
        "<div>{{paginationContent}}</div>" +
        "</div>",
    paginationBlock: {
        hideOnSinglePage: true,
        jumpTo: false,
        size: "default",
        template: {
            pageNumber: "<a href=\"{{url}}\" class=\"page-number\">{{pageNo}}</a>",
            previous: "<a href=\"{{url}}\" class=\"page-previous\">" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M9.4 233.4a32 32 0 0 0 0 45.3l192 192a32 32 0 0 0 45.3-45.3L77.3 256 246.6 86.6a32 32 0 0 0-45.3-45.3l-192 192z\" fill=\"currentColor\"/></svg>" +
                "</a>",
            next: "<a href=\"{{url}}\" class=\"page-next\">" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M310.6 233.4a32 32 0 0 1 0 45.3l-192 192a32 32 0 0 1-45.3-45.3L242.7 256 73.4 86.6a32 32 0 0 1 45.3-45.3l192 192z\" fill=\"currentColor\"/></svg>" +
                "</a>",
            more: "<a class=\"page-more\">...</a>",
            jumpTo: "<form action=\"#\">" +
                "<div class=\"d-flex border jump-to-box\">" +
                "<input type=\"number\" name=\"jump-to-page\" class=\"lrs-dpf no-border no-outline no-bg number\">" +
                "<button type=\"submit\" class=\"no-border no-outline no-bg\">Go</button>" +
                "</div>" +
                "</form>",
            background: true,
        }
    },
    pageContentLoader: "<div class='dpg-loading'></div>",
    makeItemPropertyLabel: function (property, isIndexed, sorted) {
        if (sorted === void 0) { sorted = false; }
        if (isIndexed)
            return "<th tabindex=\"0\" role=\"columnheader button\" data-property-key=\"".concat(property.key, "\" class=\"head-sort").concat(sorted ? ' ' + sorted : '', "\"").concat(sorted ? " title=\" Sort " + (sorted == "asc" ? "descending" : "ascending") + "\"" : '', ">").concat(property.label, "</th>");
        return "<th data-property-key=\"".concat(property.key, "\">").concat(property.label, "</th>");
    },
    makeItem: function (item, itemProperties, searchedIndex, searchedKey, itemIndex, showItemNumber) {
        if (searchedIndex === void 0) { searchedIndex = ""; }
        if (searchedKey === void 0) { searchedKey = ""; }
        var escapeQuotes = function (str) { return str === null || str === void 0 ? void 0 : str.toString().replace(/[\"]/gm, "&quot;").replace(/[\']/gm, "&apos;"); };
        var searchMatch = function (content) {
            var matchRex = new RegExp("(" + searchedKey.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ")", "gui");
            return content.toString().replace(matchRex, "<span class='search-match'>$1</span>");
        };
        return "<tr>" +
            (showItemNumber === false ? "" : "<td>".concat(itemIndex + 1, "</td>")) +
            itemProperties.map(function (p) {
                var _a, _b;
                return searchedIndex == p.key ?
                    ("<td data-key=\"".concat(p.key, "\" data-value=\"").concat(escapeQuotes(item[p.key]), "\">").concat(searchMatch((_a = item[p.key]) !== null && _a !== void 0 ? _a : ''), "</td>")) :
                    ("<td data-key=\"".concat(p.key, "\" data-value=\"").concat(escapeQuotes(item[p.key]), "\">").concat((_b = item[p.key]) !== null && _b !== void 0 ? _b : '', "</td>"));
            }).join('') +
            "</tr>";
    },
    makeViewingStatus: function (pageno, countsPerPage, totalItemsCount) {
        //Showing 1 to 10 of 52 entries
        if (totalItemsCount == 0)
            return "0 entries";
        var to = pageno * countsPerPage;
        var from = to - countsPerPage + 1;
        return "Showing ".concat(from, " to ").concat(to > totalItemsCount ? totalItemsCount : to, " of ").concat(totalItemsCount, " entries");
    },
    makeSearchBox: function (option) { return searchBoxComponent(option); },
    makeCountSelection: function (fieldname, countsPerPage, totalItemsCount, countSelect) { return setCountComponent(fieldname, countsPerPage, totalItemsCount, countSelect); },
};


;// CONCATENATED MODULE: ./node_modules/decode-uri-component/index.js
const token = '%[a-f0-9]{2}';
const singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
const multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	const left = components.slice(0, split);
	const right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch {
		let tokens = input.match(singleMatcher) || [];

		for (let i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	const replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD',
	};

	let match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch {
			const result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	const entries = Object.keys(replaceMap);

	for (const key of entries) {
		// Replace all decoded components
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

function decodeUriComponent(encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
}

;// CONCATENATED MODULE: ./node_modules/split-on-first/index.js
function splitOnFirst(string, separator) {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (string === '' || separator === '') {
		return [];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
}

;// CONCATENATED MODULE: ./node_modules/filter-obj/index.js
// https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package
const isSet = input => Object.prototype.toString.call(input) === '[object Set]';

function includeKeys(object, predicate) {
	const result = {};

	if (Array.isArray(predicate) || isSet(predicate)) {
		for (const key of predicate) {
			const descriptor = Object.getOwnPropertyDescriptor(object, key);

			if (!descriptor?.enumerable) {
				continue;
			}

			Object.defineProperty(result, key, descriptor);
		}
	} else {
		// `Reflect.ownKeys()` is required to retrieve symbol properties
		for (const key of Reflect.ownKeys(object)) {
			const descriptor = Object.getOwnPropertyDescriptor(object, key);

			if (!descriptor?.enumerable) {
				continue;
			}

			const value = object[key];
			if (predicate(key, value, object)) {
				Object.defineProperty(result, key, descriptor);
			}
		}
	}

	return result;
}

function excludeKeys(object, predicate) {
	if (Array.isArray(predicate)) {
		const set = new Set(predicate);
		return includeKeys(object, key => !set.has(key));
	}

	if (isSet(predicate)) {
		return includeKeys(object, key => !predicate.has(key));
	}

	return includeKeys(object, (key, value, object) => !predicate(key, value, object));
}

;// CONCATENATED MODULE: ./node_modules/http-query-string/base.js




const isNullOrUndefined = value => value === null || value === undefined;

// eslint-disable-next-line unicorn/prefer-code-point
const strictUriEncode = string => encodeURIComponent(string).replaceAll(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index': {
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result, [encode(key, options), '[', index, ']'].join(''),
					];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join(''),
				];
			};
		}

		case 'bracket': {
			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result,
						[encode(key, options), '[]'].join(''),
					];
				}

				return [
					...result,
					[encode(key, options), '[]=', encode(value, options)].join(''),
				];
			};
		}

		case 'colon-list-separator': {
			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result,
						[encode(key, options), ':list='].join(''),
					];
				}

				return [
					...result,
					[encode(key, options), ':list=', encode(value, options)].join(''),
				];
			};
		}

		case 'comma':
		case 'separator':
		case 'bracket-separator': {
			const keyValueSeparator = options.arrayFormat === 'bracket-separator'
				? '[]='
				: '=';

			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				// Translate null to an empty string so that it doesn't serialize as 'null'
				value = value === null ? '' : value;

				if (result.length === 0) {
					return [[encode(key, options), keyValueSeparator, encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};
		}

		default: {
			return key => (result, value) => {
				if (
					value === undefined
					|| (options.skipNull && value === null)
					|| (options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [
						...result,
						encode(key, options),
					];
				}

				return [
					...result,
					[encode(key, options), '=', encode(value, options)].join(''),
				];
			};
		}
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index': {
			return (key, value, accumulator) => {
				result = /\[(\d*)]$/.exec(key);

				key = key.replace(/\[\d*]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		}

		case 'bracket': {
			return (key, value, accumulator) => {
				result = /(\[])$/.exec(key);
				key = key.replace(/\[]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [...accumulator[key], value];
			};
		}

		case 'colon-list-separator': {
			return (key, value, accumulator) => {
				result = /(:list)$/.exec(key);
				key = key.replace(/:list$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [...accumulator[key], value];
			};
		}

		case 'comma':
		case 'separator': {
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && base_decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? base_decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => base_decode(item, options)) : (value === null ? value : base_decode(value, options));
				accumulator[key] = newValue;
			};
		}

		case 'bracket-separator': {
			return (key, value, accumulator) => {
				const isArray = /(\[])$/.test(key);
				key = key.replace(/\[]$/, '');

				if (!isArray) {
					accumulator[key] = value ? base_decode(value, options) : value;
					return;
				}

				const arrayValue = value === null
					? []
					: value.split(options.arrayFormatSeparator).map(item => base_decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [...accumulator[key], ...arrayValue];
			};
		}

		default: {
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [...[accumulator[key]].flat(), value];
			};
		}
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function base_decode(value, options) {
	if (options.decode) {
		return decodeUriComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function stringifyObject(object, options, parentKey=false){

    validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key]))
		|| (options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const [key, value] of Object.entries(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = value;
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];
        if(parentKey){
            key = parentKey+"["+key+"]";
        }

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
                    return encode(key, options) + '[]';
                }
    
                return value
                    .reduce(formatter(key), [])
                    .join('&');
            }
            let k = stringifyObject(value, options, key);
            return k.join("&");
		}
		return encode(key, options) + '=' + encode(value, options);
	});
}

function setObjectValueFromArray(object, path, value) {
    var last = path.pop();
    path.reduce((o, k) => o[k] = o[k] || {}, object)[last] = value;
}

function parseFinalValue(value){
    if(Boolean(value) && typeof value === 'object' && !Array.isArray(value))
        return keysSorter(value);
    else{
        let p = parseFloat(value);
        if(isNaN(p))
            return value;
        else
            return p % 1 === 0 ? Math.floor(p):p;
    }
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parse(query, options) {
	options = {
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false,
		...options,
	};

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const returnValue = Object.create(null);

	if (typeof query !== 'string') {
		return returnValue;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return returnValue;
	}

	for (const parameter of query.split('&')) {
		if (parameter === '') {
			continue;
		}

		const parameter_ = options.decode ? parameter.replaceAll('+', ' ') : parameter;

		let [key, value] = splitOnFirst(parameter_, '=');

		if (key === undefined) {
			key = parameter_;
		}

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : (['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : base_decode(value, options));
		formatter(base_decode(key, options), value, returnValue);
	}

	for (const [key, value] of Object.entries(returnValue)) {
		if (typeof value === 'object' && value !== null) {
			for (const [key2, value2] of Object.entries(value)) {
				value[key2] = parseValue(value2, options);
			}
		} else {
			returnValue[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return returnValue;
	}

	// TODO: Remove the use of `reduce`.
	// eslint-disable-next-line unicorn/no-array-reduce
	return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
		const value = returnValue[key];
        let [obcheck,key_sec] = splitOnFirst(key, '[');
        if(key_sec){
            key_sec = key_sec.slice(0, -1);
            let keyParts = key_sec.split("][");
            if(keyParts.length){
                keyParts.unshift(obcheck);
                setObjectValueFromArray(
                    result,
                    keyParts,
                    parseFinalValue(value)
                );
            }
        }
        else{
            result[key] = parseFinalValue(value);
        }
		return result;
	}, Object.create(null));
}

function stringify(object, options) {
	if (!object) {
		return '';
	}

	options = {
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		...options,
	};

    let strings = stringifyObject(object, options);
	return strings.join('&');
}

function parseUrl(url, options) {
	options = {
		decode: true,
		...options,
	};

	let [url_, hash] = splitOnFirst(url, '#');

	if (url_ === undefined) {
		url_ = url;
	}

	return {
		url: url_?.split('?')?.[0] ?? '',
		query: parse(extract(url), options),
		...(options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: base_decode(hash, options)} : {}),
	};
}

function stringifyUrl(object, options) {
	options = {
		encode: true,
		strict: true,
		[encodeFragmentIdentifier]: true,
		...options,
	};

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = extract(object.url);

	const query = {
		...parse(queryFromUrl, {sort: false}),
		...object.query,
	};

	let queryString = stringify(query, options);
	queryString &&= `?${queryString}`;

	let hash = getHash(object.url);
	if (typeof object.fragmentIdentifier === 'string') {
		const urlObjectForFragmentEncode = new URL(url);
		urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
		hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
	}

	return `${url}${queryString}${hash}`;
}

function pick(input, filter, options) {
	options = {
		parseFragmentIdentifier: true,
		[encodeFragmentIdentifier]: false,
		...options,
	};

	const {url, query, fragmentIdentifier} = parseUrl(input, options);

	return stringifyUrl({
		url,
		query: includeKeys(query, filter),
		fragmentIdentifier,
	}, options);
}

function exclude(input, filter, options) {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return pick(input, exclusionFilter, options);
}

;// CONCATENATED MODULE: ./node_modules/http-query-string/index.js


/* harmony default export */ const http_query_string = (base_namespaceObject);

;// CONCATENATED MODULE: ./src/event-triggers.ts
function eventPageLoaded(dpg) {
    //page-loaded
    var pageLoaded = new CustomEvent("page-loaded", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(pageLoaded);
}
function eventNextClick(dpg) {
    //next-click
    var nextClick = new CustomEvent("next-click", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(nextClick);
}
function eventPreviousClick(dpg) {
    //prev-click
    var prevClick = new CustomEvent("next-click", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(prevClick);
}
function eventCountChanged(dpg) {
    //count-change
    var prevClick = new CustomEvent("count-change", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(prevClick);
}

;// CONCATENATED MODULE: ./src/load-content.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function upadateViewingStatus(dpg, pageNo, count, total) {
    if (pageNo === void 0) { pageNo = dpg.options.currentViewValues.pageNo; }
    if (count === void 0) { count = dpg.options.currentViewValues.count; }
    if (total === void 0) { total = dpg.options.totalItemsCount; }
    var _vs = getLRSDPGElement("viewing-status", dpg);
    _vs.innerHTML = dpg.options.makeViewingStatus(pageNo, count, total);
}
function contentLoader(dpg, show) {
    var _a, _b;
    var _ls = getLRSDPGElement("items-list", dpg);
    if (show) {
        if (((_a = _ls.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('lrs-dpg-content-loader').length) == 0) {
            var loader = document.createElement("div");
            loader.innerHTML = dpg.options.pageContentLoader;
            var h = _ls === null || _ls === void 0 ? void 0 : _ls.offsetHeight;
            loader.style.height = h + 'px';
            loader.style.width = (_ls === null || _ls === void 0 ? void 0 : _ls.offsetWidth) + 'px';
            if (h == 0) {
                _ls.classList.add('null-loader');
            }
            loader.classList.add("lrs-dpg-content-loader");
            _ls === null || _ls === void 0 ? void 0 : _ls.insertAdjacentElement("beforebegin", loader);
        }
    }
    else {
        _ls.classList.remove('null-loader');
        (_b = _ls.parentElement) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.lrs-dpg-content-loader').forEach(function (e) { return e.remove(); });
    }
}
// Loading Content
function loadPage(dpg) {
    return __awaiter(this, void 0, void 0, function () {
        var _ls, query, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _ls = getLRSDPGElement("items-list", dpg);
                    contentLoader(dpg, true);
                    query = makeLoadRequestParams(dpg.options);
                    return [4 /*yield*/, sendPOSTRequest(query, dpg.options, "loadListURL")];
                case 1:
                    resp = _a.sent();
                    contentLoader(dpg, false);
                    try {
                        if (Array.isArray(resp)) {
                            _ls.innerHTML = resp.map(function (e, i) {
                                var _a, _b;
                                return dpg.options.makeItem(e, dpg.options.itemProperties, ((_a = dpg.options.currentViewValues.searchIn) !== null && _a !== void 0 ? _a : ""), ((_b = dpg.options.currentViewValues.searchKey) !== null && _b !== void 0 ? _b : ""), ((dpg.options.currentViewValues.pageNo - 1) * dpg.options.currentViewValues.count) + i, dpg.options.itemsNumber == false ? false : true);
                            }).join("");
                            upadateViewingStatus(dpg);
                            eventPageLoaded(dpg);
                        }
                        else {
                            throw "Response is not an array Object";
                        }
                    }
                    catch (e) {
                        console.error("Unable to fetch the data from loadListURL:" + dpg.options.loadListURL, e);
                        console.log("Response Must be in Array.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/functions.ts
var functions_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var functions_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function dpOptionFilter(obj, def) {
    if (Array.isArray(obj)) {
        return obj.length > 0 ? obj : (def.length == 0 ? obj : def);
    }
    else if (Object.keys(def).length == 0) {
        return obj;
    }
    for (var k in def) {
        if (obj.hasOwnProperty(k)) {
            if (typeof def[k] == 'object')
                def[k] = dpOptionFilter(obj[k], def[k]);
            else
                def[k] = obj[k];
        }
    }
    return def;
}
function makeSearchRegEx(key, rexFormat) {
    if (rexFormat === void 0) { rexFormat = "{{search-key}}%"; }
    key = key.replace(/\%/gi, "!%");
    rexFormat = rexFormat.replace(/\{\{search-key\}\}/gm, key);
    rexFormat = rexFormat.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    rexFormat = rexFormat.replace(/([^\!])%/gm, "$1.*");
    if (rexFormat[0] != "%")
        rexFormat = "^" + rexFormat;
    if (rexFormat[rexFormat.length - 1] != "*")
        rexFormat += "$";
    rexFormat = rexFormat.replace(/\!\%/gm, "%");
    return new RegExp(rexFormat, "giu");
}
function splitURLParams(url) {
    var ret = {
        ref: "",
        gets: {}
    };
    url = url ? url : window.location.href;
    var parts = url.split('?');
    var gets = parts.length > 1 ? parts.pop() : '';
    ret.ref = parts[0];
    if (gets != '') {
        ret.gets = http_query_string.parse(gets);
    }
    return ret;
}
function makeURLFromParams(uparms) {
    var ret = uparms.ref;
    var gets = http_query_string.stringify(uparms.gets);
    return ret + (gets.length > 0 ? '?' + gets : '');
}
function getLRSDPGElement(name, dpg) {
    return dpg.element.querySelector('[data-lrs-dpg-elm="' + name + '"]');
}
function createHTElement(hyperText) {
    var tel = document.createElement('div');
    tel.innerHTML = hyperText;
    return tel.firstChild;
}
function currentViewPageValuesToURLParams(options) {
    var kv = {};
    var cvv = options.currentViewValues;
    for (var k in cvv) {
        var tmp = options.dpParamKeys[k];
        if (k == "userParams") {
            var keyVal = cvv[k];
            keyVal = JSON.stringify(keyVal);
            keyVal = btoa(keyVal);
            kv[tmp] = keyVal;
        }
        else {
            kv[tmp] = cvv[k];
        }
    }
    return kv;
}
function setParamsInElement(dpg) {
    var _a;
    for (var k in dpg.options.currentViewValues) {
        if (k != "userParams") {
            var el = dpg.element.querySelector('[name="' + dpg.options.dpParamKeys[k] + '"]');
            if (el)
                el.value = ((_a = dpg.options.currentViewValues[k]) !== null && _a !== void 0 ? _a : "").toString();
        }
    }
}
function setUserParamsInElement(dpg) {
    for (var k in dpg.options.currentViewValues.userParams) {
        var el = dpg.element.querySelector('.dynamic-paginator-input[name="' + k + '"]');
        el.value = dpg.options.currentViewValues.userParams[k];
    }
}
function makeLoadRequestParams(options) {
    var kv = {};
    var cvv = options.currentViewValues;
    for (var k in cvv) {
        var tmp = options.dpParamKeys[k];
        kv[tmp] = cvv[k];
    }
    kv["offset"] = (cvv.pageNo * cvv.count) - cvv.count;
    return kv;
}
function urlParamsToCurrentViewPageValues(gets, options) {
    var _a;
    var kv = options.currentViewValues;
    for (var _i = 0, currentViewValueKeys_1 = currentViewValueKeys; _i < currentViewValueKeys_1.length; _i++) {
        var k = currentViewValueKeys_1[_i];
        var tmp = options.dpParamKeys[k];
        if (gets[tmp]) {
            if (k == "userParams") {
                var keyVal = atob(gets[tmp]);
                keyVal = JSON.parse(keyVal);
                kv[k] = keyVal;
            }
            else {
                var getType = typeof options.currentViewValues[k];
                if (getType == "number") {
                    kv[k] = ((_a = parseInt(gets[tmp])) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    kv[k] = gets[tmp];
                }
            }
        }
    }
    return kv;
}
function setOptionFromVars(options, url) {
    var _a;
    options.currentViewValues.count = (_a = options.currentViewValues.count) !== null && _a !== void 0 ? _a : defaultOption.currentViewValues.count;
    if (options.pushToHistory) {
        var url_1 = splitURLParams();
        options.currentViewValues = urlParamsToCurrentViewPageValues(url_1.gets, options);
    }
    return options;
}
function generateSortImageURL(sort, themeisDark) {
    var svg = { pt: "", o: "1", c: "#333333" };
    if (themeisDark) {
        svg.c = "#d4d4d4";
    }
    if (sort == false) {
        svg.pt = "M4.4 9.8h15.2c.3 0 .6 0 .8-.3.2-.2.3-.5.3-.8s0-.5-.3-.7L12.8.3c-.3-.2-.5-.3-.8-.3s-.5.1-.8.3L3.6 8a1 1 0 0 0-.3.7c0 .3 0 .6.3.8.2.2.5.3.8.3zm15.2 4.4H4.4a1 1 0 0 0-.8.3c-.2.2-.3.5-.3.8s0 .5.3.7l7.6 7.7c.3.2.5.3.8.3s.5-.1.8-.3l7.6-7.7c.2-.2.3-.4.3-.7s0-.6-.3-.8a1 1 0 0 0-.8-.3z";
        svg.o = "0.3";
    }
    else if (sort == "asc") {
        svg.pt = "M4.4 17h15.2c.3 0 .6-.2.8-.4.2-.2.3-.5.3-.8a1 1 0 0 0-.3-.8l-7.6-7.6c-.3-.2-.5-.3-.8-.3s-.5.1-.8.3l-7.6 7.7a1 1 0 0 0-.3.7c0 .3 0 .6.3.8.2.2.5.3.8.3z";
    }
    else if (sort == "desc") {
        svg.pt = "M19.6 7H4.4a1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8s0 .5.3.8l7.6 7.6c.3.2.5.3.8.3s.5-.1.8-.3l7.6-7.7c.2-.2.3-.4.3-.7s0-.6-.3-.8a1 1 0 0 0-.8-.3z";
    }
    if (svg.pt != "") {
        return "url(\"data:image/svg+xml," +
            encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" xml:space=\"preserve\"><path fill=\"".concat(svg.c, "\" fill-opacity=\"").concat(svg.o, "\" d=\"").concat(svg.pt, "\"/></svg>")) +
            "\")";
    }
    return "none";
}
function getSiblings(a) {
    var result = [], node = a.parentNode.firstChild;
    while (node) {
        if (node !== a && node.nodeType === Node.ELEMENT_NODE)
            result.push(node);
        node = node.nextElementSibling || node.nextSibling;
    }
    return result;
}
function sortTable(dpg) {
    var _a, _b, _c;
    var isInt = true;
    var e_Sel = '[data-lrs-dpg-elm="items-list"]';
    var d_Key = '[data-key="' + dpg.options.currentViewValues.orderBy + '"]';
    var listParent = dpg.element.querySelector(e_Sel);
    var listItems = dpg.element.querySelectorAll(e_Sel + ">*");
    var _nel = document.createElement((_a = (listParent === null || listParent === void 0 ? void 0 : listParent.tagName)) !== null && _a !== void 0 ? _a : "div");
    var key_vals = [];
    listItems.forEach(function (e, i) {
        var _a, _b;
        var _v = e.querySelector(d_Key);
        var v = (_b = ((_a = _v === null || _v === void 0 ? void 0 : _v.getAttribute('data-value')) !== null && _a !== void 0 ? _a : _v === null || _v === void 0 ? void 0 : _v.textContent)) !== null && _b !== void 0 ? _b : "";
        v = (isInt && !isNaN(parseFloat(v))) ? parseFloat(v) : v.toLowerCase();
        key_vals.push({
            p: i,
            v: v
        });
    });
    var sortIt = function (arr, order) {
        if (order == "desc") {
            return arr.sort(function (x, y) { return (x.v > y.v ? -1 : (x.v < y.v) ? 1 : 0); });
        }
        else {
            return arr.sort(function (x, y) { return (x.v < y.v ? -1 : (x.v > y.v) ? 1 : 0); });
        }
    };
    key_vals = sortIt(key_vals, (_b = dpg.options.currentViewValues.orderByIn) !== null && _b !== void 0 ? _b : "asc");
    key_vals.forEach(function (v) {
        _nel.appendChild(listItems[v.p]);
    });
    listParent.innerHTML = _nel.innerHTML;
    _nel.remove();
    listParent === null || listParent === void 0 ? void 0 : listParent.setAttribute("data-sorted-on", (_c = dpg.options.currentViewValues.orderBy) !== null && _c !== void 0 ? _c : "");
}
function jsTableSearch(dpg) {
    var _a, _b, _c;
    var cvv = dpg.options.currentViewValues;
    var e_Sel = '[data-lrs-dpg-elm="items-list"]';
    var listParent = dpg.element.querySelector(e_Sel);
    var listItems = dpg.element.querySelectorAll(e_Sel + ">*");
    if (cvv.searchKey) {
        //If Search in Setted(Condition 0 Indexed Columns)
        var searchIn = (_a = dpg.options.currentViewValues.searchIn) !== null && _a !== void 0 ? _a : dpg.options.itemProperties[0].key;
        var getVal_1 = function (e) { var _a, _b; return ((_b = ((_a = e === null || e === void 0 ? void 0 : e.getAttribute('data-value')) !== null && _a !== void 0 ? _a : e === null || e === void 0 ? void 0 : e.textContent)) !== null && _b !== void 0 ? _b : ""); };
        var d_Key_1 = '[data-key="' + searchIn + '"]';
        var _nel = document.createElement((_b = (listParent === null || listParent === void 0 ? void 0 : listParent.tagName)) !== null && _b !== void 0 ? _b : "div");
        var searchRex_1 = makeSearchRegEx((_c = cvv.searchKey) !== null && _c !== void 0 ? _c : "", dpg.options.clientSideSearchFormat);
        var matchRex_1 = new RegExp("(" + cvv.searchKey.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ")", "gui");
        var count_1 = 0;
        listItems.forEach(function (e) {
            e.style.removeProperty("display");
            e === null || e === void 0 ? void 0 : e.querySelectorAll('.search-match').forEach(function (el) {
                el.insertAdjacentHTML("beforebegin", el.innerHTML);
                el.remove();
            });
            var _v = e.querySelector(d_Key_1);
            var v = getVal_1(_v);
            if (searchRex_1.test(v)) {
                e === null || e === void 0 ? void 0 : e.querySelectorAll('[data-key]').forEach(function (ve) {
                    var _a;
                    var key = ve.getAttribute('data-key');
                    if (ve.textContent) {
                        ve.innerHTML = (_a = ve.innerHTML) === null || _a === void 0 ? void 0 : _a.replace(matchRex_1, "<span class='search-match'>$1</span>");
                    }
                });
                count_1++;
            }
            else {
                e.style.display = "none";
            }
        });
        upadateViewingStatus(dpg, 1, count_1, count_1);
    }
    else {
        listItems.forEach(function (e) {
            e === null || e === void 0 ? void 0 : e.querySelectorAll('.search-match').forEach(function (el) {
                el.insertAdjacentHTML("beforebegin", el.innerHTML);
                el.remove();
            });
            e.style.removeProperty("display");
        });
        upadateViewingStatus(dpg);
    }
}
function sendPOSTRequest(query, options, url) {
    return functions_awaiter(this, void 0, void 0, function () {
        var content, headers, k, reqUrl, response, resp, e_1;
        var _a;
        return functions_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    content = http_query_string.stringify(query);
                    headers = { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
                    for (k in options.httpRequestHeaders) {
                        headers[k] = options.httpRequestHeaders[k];
                    }
                    reqUrl = ((_a = options[url]) !== null && _a !== void 0 ? _a : "");
                    if (reqUrl == "") {
                        console.error("Request URL is Empty:" + url);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetch(reqUrl, {
                            method: 'POST',
                            body: content,
                            headers: headers
                        })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 5];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, response.json()];
                case 3:
                    resp = _b.sent();
                    return [2 /*return*/, resp];
                case 4:
                    e_1 = _b.sent();
                    console.error("Unable to fetch the data from " + url + ":" + options[url], e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/elements/pagination.ts

function makeMakeBt(template, pageNo, options, addUrl) {
    var _a;
    if (addUrl === void 0) { addUrl = true; }
    var btUrl = "#";
    if (pageNo == -1)
        addUrl = false;
    if (addUrl) {
        var url = splitURLParams();
        var cvp = currentViewPageValuesToURLParams(options);
        cvp[options.dpParamKeys.pageNo] = pageNo;
        for (var k in cvp) {
            url.gets[k] = cvp[k];
        }
        url.gets[options.dpParamKeys.pageNo] = pageNo;
        btUrl = makeURLFromParams(url);
    }
    var content = template.replace(/\{\{url\}\}/gm, btUrl);
    content = content.replace(/\{\{pageNo\}\}/gm, pageNo.toString());
    if (pageNo == options.currentViewValues.pageNo) {
        var _d = document.createElement('div');
        _d.innerHTML = content;
        (_a = _d.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        content = _d.innerHTML;
    }
    return content;
}
function makePagerLI(pn, options, addClass) {
    if (addClass === void 0) { addClass = ""; }
    var pgb = options.paginationBlock;
    return "<li class=\"number ".concat((pn == "..." ? "loadmore" : "pageno") + ' ' + addClass, "\" data-page-number=\"").concat(pn, "\">") +
        (pn == '...' ?
            makeMakeBt(pgb.template.more, -1, options, false) :
            makeMakeBt(pgb.template.pageNumber, pn, options)) +
        "</li>";
}
function generatePageNumbers(totalPages, currentPage, maxItems) {
    var nums = [];
    var left = [];
    var right = [];
    var delta = Math.floor(maxItems / 2) - 2;
    var i = 0;
    var k = 0;
    // Left
    for (i = currentPage - 1; i > 1 && k < delta; i--, k++)
        left.unshift(i);
    // Right
    for (i = currentPage + 1, k = 0; i < totalPages && k < delta; i++, k++)
        right.push(i);
    var delta_fill = (delta * 2) - right.length - left.length;
    if (delta_fill > 0) {
        if (right.length < delta) {
            for (i = left[0] - 1, k = 0; i > 1 && k < delta_fill; i--, k++)
                left.unshift(i);
        }
        else if (left.length < delta) {
            for (i = right[right.length - 1] + 1, k = 0; i < totalPages && k < delta_fill; i++, k++)
                right.push(i);
        }
    }
    nums = (currentPage == 1 || currentPage == totalPages ?
        left.concat(right) :
        left.concat([currentPage], right));
    if (currentPage == 1 && nums.length > 0) {
        var t1 = nums[nums.length - 1] + 1;
        if (totalPages != t1)
            nums.push(t1);
    }
    else if (currentPage == totalPages) {
        var t1 = nums[0] - 1;
        if (t1 != 1)
            nums.unshift(t1);
    }
    //Prepending Start
    if (nums[0] - 1 >= 2) {
        if (totalPages - nums[nums.length - 1] >= 2) {
            nums.shift();
        }
        nums.unshift("...");
    }
    else if (nums[0] - 1 > 1) {
        nums.unshift(nums[0] - 1);
    }
    nums.unshift(1);
    var nli = nums.length - 1;
    //Appending Start
    if (totalPages - nums[nli] >= 2) {
        nums.push("...");
    }
    else if (totalPages - nums[nli] > 1) {
        nums.push(nums[nli] + 1);
    }
    if (totalPages > 1)
        nums.push(totalPages);
    return nums;
}
function setJumpToComponentView(dpg) {
    var _a;
    var pgSec = getLRSDPGElement("pagination", dpg);
    var totalPages = Math.ceil(dpg.options.totalItemsCount / dpg.options.currentViewValues.count);
    var show = totalPages == 1 && dpg.options.paginationBlock.hideOnSinglePage == true;
    (_a = pgSec.querySelector(".jump-to")) === null || _a === void 0 ? void 0 : _a.classList.toggle("d-none", show);
}
function jumpToComponent(options) {
    var totalPages = Math.ceil(options.totalItemsCount / options.currentViewValues.count);
    if (totalPages == 1 && options.paginationBlock.hideOnSinglePage == true)
        return "";
    return options.paginationBlock.jumpTo ?
        "<div class=\"jump-to\">" + options.paginationBlock.template.jumpTo + "</div>"
        : "";
}
function paginationComponent(options) {
    var pgb = options.paginationBlock;
    var totalPages = Math.ceil(options.totalItemsCount / options.currentViewValues.count);
    if (totalPages == 1 && pgb.hideOnSinglePage == true)
        return "";
    var currentPage = options.currentViewValues.pageNo;
    var maxItems = options.maxPagerNumbers;
    var pnumbers = generatePageNumbers(totalPages, currentPage, maxItems);
    var previous = makeMakeBt(pgb.template.previous, currentPage == 1 ? -1 : currentPage - 1, options);
    var next = makeMakeBt(pgb.template.next, currentPage == totalPages ? -1 : currentPage + 1, options);
    var pager = "<ul class=\"pager\">" + pnumbers.map(function (pn) { return (makePagerLI(pn, options)); }).join('') + "</ul>";
    return "<div class=\"pagination".concat(options.paginationBlock.template.background == false ? " dpg-no-bg" : "", "\">") +
        previous +
        pager +
        next +
        "</div>";
}

;// CONCATENATED MODULE: ./src/set-list-view.ts
var set_list_view_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var set_list_view_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function setContent(paginator) {
    return set_list_view_awaiter(this, void 0, void 0, function () {
        var content_1, headers, k, response, resp, e_1, options, content, counts;
        return set_list_view_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginator.element.classList.add("lrs-dynamic-paginator");
                    if (!(paginator.options.getInfoURL != "")) return [3 /*break*/, 5];
                    content_1 = http_query_string.stringify(makeLoadRequestParams(paginator.options));
                    headers = { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
                    for (k in paginator.options.httpRequestHeaders) {
                        headers[k] = paginator.options.httpRequestHeaders[k];
                    }
                    return [4 /*yield*/, fetch(paginator.options.getInfoURL, {
                            method: 'POST',
                            body: content_1,
                            headers: headers
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 5];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, response.json()];
                case 3:
                    resp = _a.sent();
                    if (resp) {
                        paginator.options = dpOptionFilter(resp, paginator.options);
                    }
                    else {
                        throw "Invalid response from getInfoURL";
                    }
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error("Unable to fetch the data from getInfoURL:" + paginator.options.getInfoURL, e_1);
                    return [3 /*break*/, 5];
                case 5:
                    options = paginator.options;
                    content = options.viewTemplate;
                    if ((options.colorTheme == "auto" && (window === null || window === void 0 ? void 0 : window.matchMedia) && (window === null || window === void 0 ? void 0 : window.matchMedia('(prefers-color-scheme: dark)').matches)) ||
                        options.colorTheme == "dark") {
                        paginator.element.classList.add("theme-dark");
                    }
                    //Setting Property Label
                    content = content.replace(/(\>)\{\{propertiesLabel\}\}(\<)/gm, " data-lrs-dpg-elm='property-head'$1" +
                        (options.itemsNumber === false ? "" : options.makeItemPropertyLabel({ key: "index", label: (options.itemsNumber).toString() }, false, false)) +
                        options.itemProperties.map(function (p) {
                            var _a, _b;
                            return options.makeItemPropertyLabel(p, options.indexedItemPropertiesKeys.indexOf(p.key) > -1, (((_a = options.currentViewValues) === null || _a === void 0 ? void 0 : _a.orderBy) == p.key ? (_b = options.currentViewValues) === null || _b === void 0 ? void 0 : _b.orderByIn : false));
                        }).join('') + "$2");
                    //Setting Items List
                    content = content.replace(/(\>)\{\{itemsList\}\}(\<)/gm, " data-lrs-dpg-elm='items-list'$1" + "$2");
                    //Setting Viewing Status
                    content = content.replace(/(\>)\{\{viewingStatus\}\}(\<)/gm, " data-lrs-dpg-elm='viewing-status'$1" + "$2");
                    //Setting Search Box
                    content = content.replace(/(\>)\{\{searchBox\}\}(\<)/gm, " data-lrs-dpg-elm='search-box'$1" + options.makeSearchBox(options) + "$2");
                    //Setting Counts Per Page
                    if (options.setCountsPerPage != false) {
                        counts = options.setCountsPerPage;
                        content = content.replace(/(\>)\{\{countsPerPage\}\}(\<)/gm, " data-lrs-dpg-elm='count-select'$1" + options.makeCountSelection(options.dpParamKeys.count, options.currentViewValues.count, options.totalItemsCount, counts) + "$2");
                    }
                    //Setting Pagination
                    content = content.replace(/(\>)\{\{paginationContent\}\}(\<)/gm, " data-lrs-dpg-elm='pagination'$1<div class='d-flex'><div class='page-nav'>" + paginationComponent(options) + "</div>" + jumpToComponent(options) + "$2");
                    paginator.element.innerHTML = content;
                    paginator.element.insertAdjacentHTML("beforebegin", "<style>" +
                        [
                            '.lrs-dynamic-paginator.theme-dark [data-lrs-dpg-elm="property-head"]',
                            '.lrs-dynamic-paginator [data-lrs-dpg-elm="property-head"]',
                        ].map(function (b, i) { return ([false, "asc", "desc"].map(function (c) { return (b + " .head-sort" + (c == false ? "" : "." + c) + "{" +
                            "background-image:" + generateSortImageURL(c, i == 0) +
                            "}"); }).join('')); }).join('') +
                        "</style>");
                    if (paginator.options.currentViewValues.userParams) {
                        setUserParamsInElement(paginator);
                    }
                    else {
                        paginator.element.querySelectorAll('.dynamic-paginator-input[name]').forEach(function (e) {
                            var _a;
                            var k = e.name;
                            var v = e.value;
                            paginator.options.currentViewValues.userParams = (_a = paginator.options.currentViewValues.userParams) !== null && _a !== void 0 ? _a : {};
                            paginator.options.currentViewValues.userParams[k] = v;
                        });
                    }
                    loadPage(paginator);
                    return [2 /*return*/];
            }
        });
    });
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/dynamic-paginator.scss
var dynamic_paginator = __webpack_require__(886);
;// CONCATENATED MODULE: ./src/scss/dynamic-paginator.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(dynamic_paginator/* default */.A, options);




       /* harmony default export */ const scss_dynamic_paginator = (dynamic_paginator/* default */.A && dynamic_paginator/* default */.A.locals ? dynamic_paginator/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/add-events.ts
var add_events_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var add_events_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function addEventListeners(dpg) {
    listnersForPagination(dpg);
}
function listnersForPagination(dpg) {
    var _a, _b, _c, _d, _e;
    var pgSect = getLRSDPGElement('pagination', dpg);
    var pgElem = pgSect === null || pgSect === void 0 ? void 0 : pgSect.querySelector('.page-nav');
    var totalPages = Math.ceil(dpg.options.totalItemsCount / dpg.options.currentViewValues.count);
    var count = dpg.element.querySelector('[data-lrs-dpg-elm="count-select"] [name="count"]');
    var forms = dpg.element.querySelectorAll('form');
    var sortSel = dpg.element.querySelectorAll('[data-lrs-dpg-elm="property-head"] .head-sort');
    var maxItems = dpg.options.maxPagerNumbers;
    var searchBox = getLRSDPGElement('search-box', dpg);
    var dpgInputs = dpg.element.querySelectorAll(".dynamic-paginator-input");
    //Blocked all a tags
    var preventDefaultATag = function (e) {
        e.addEventListener('click', function (e) {
            e.preventDefault();
        });
    };
    //Blocked all form from Submit
    forms.forEach(function (e) {
        e.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    });
    var loadPageAfterUpdateView = function (dpg, onHistoryPoppingLoad) {
        if (onHistoryPoppingLoad === void 0) { onHistoryPoppingLoad = false; }
        if (dpg.options.pushToHistory && !onHistoryPoppingLoad) {
            var url = splitURLParams();
            var cvv = dpOptionFilter(currentViewPageValuesToURLParams(dpg.options), url.gets);
            var newUrl = url.ref + "?" + http_query_string.stringify(cvv);
            history.pushState({ state: newUrl }, "null", newUrl);
        }
        setUserParamsInElement(dpg);
        pgElem.innerHTML = paginationComponent(dpg.options);
        setJumpToComponentView(dpg);
        addEventsToButtons();
        loadPage(dpg);
    };
    dpg.reloadView = function () {
        loadPageAfterUpdateView(this);
        return true;
    };
    //Sumbit Search Action
    (_a = searchBox.querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
        return add_events_awaiter(this, void 0, void 0, function () {
            var _thf, _search_in, _search_key, searchIn, searchKey, doJsSearch, query, resp;
            var _a;
            return add_events_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _thf = e.target;
                        _search_in = _thf === null || _thf === void 0 ? void 0 : _thf.querySelector('[name="' + dpg.options.dpParamKeys.searchIn + '"]');
                        _search_key = _thf === null || _thf === void 0 ? void 0 : _thf.querySelector('[name="' + dpg.options.dpParamKeys.searchKey + '"]');
                        searchIn = _search_in.value;
                        searchKey = _search_key.value;
                        doJsSearch = false;
                        //Previous Match Checking
                        if (dpg.options.currentViewValues.searchIn == searchIn &&
                            searchKey.indexOf(dpg.options.currentViewValues.searchKey) == 0 &&
                            dpg.options.totalItemsCount <= dpg.options.currentViewValues.count) {
                            doJsSearch = true;
                        }
                        dpg.options.currentViewValues.searchIn = searchIn;
                        dpg.options.currentViewValues.searchKey = searchKey;
                        if (!(totalPages == 1 || doJsSearch)) return [3 /*break*/, 1];
                        jsTableSearch(dpg);
                        return [3 /*break*/, 3];
                    case 1:
                        query = makeLoadRequestParams(dpg.options);
                        contentLoader(dpg, true);
                        return [4 /*yield*/, sendPOSTRequest(query, dpg.options, "getInfoURL")];
                    case 2:
                        resp = _b.sent();
                        if (resp) {
                            dpg.options.totalItemsCount = (_a = resp.totalItemsCount) !== null && _a !== void 0 ? _a : 0;
                            dpg.options.currentViewValues.pageNo = 1;
                            loadPageAfterUpdateView(dpg);
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    });
    (_b = searchBox.querySelector('form [name="' + dpg.options.dpParamKeys.searchKey + '"]')) === null || _b === void 0 ? void 0 : _b.addEventListener('input', function (e) {
        return add_events_awaiter(this, void 0, void 0, function () {
            var _thf, query, resp;
            var _a;
            return add_events_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _thf = e.target;
                        if (!(_thf.value.length == 0)) return [3 /*break*/, 3];
                        dpg.options.currentViewValues.searchIn = undefined;
                        dpg.options.currentViewValues.searchKey = undefined;
                        if (!(totalPages == 1)) return [3 /*break*/, 1];
                        jsTableSearch(dpg);
                        return [3 /*break*/, 3];
                    case 1:
                        query = makeLoadRequestParams(dpg.options);
                        contentLoader(dpg, true);
                        return [4 /*yield*/, sendPOSTRequest(query, dpg.options, "getInfoURL")];
                    case 2:
                        resp = _b.sent();
                        if (resp) {
                            dpg.options.totalItemsCount = (_a = resp.totalItemsCount) !== null && _a !== void 0 ? _a : 0;
                            dpg.options.currentViewValues.pageNo = 1;
                            loadPageAfterUpdateView(dpg);
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    });
    //Sumbit Jump to Action
    (_c = pgSect.querySelector('.jump-to form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (e) {
        var _a;
        var _no = (_a = e.target) === null || _a === void 0 ? void 0 : _a.querySelector('[name="jump-to-page"]');
        var no = parseInt(_no.value);
        no = no < 1 ? 1 : (no > totalPages ? totalPages : no);
        _no.value = no.toString();
        dpg.options.currentViewValues.pageNo = no;
        loadPageAfterUpdateView(dpg);
    });
    var addNumberButtonEvent = function (e) {
        e.addEventListener('click', function () {
            var _a, _b;
            dpg.options.currentViewValues.pageNo = parseInt((_b = (_a = e === null || e === void 0 ? void 0 : e.closest(".number")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-page-number")) !== null && _b !== void 0 ? _b : '');
            loadPageAfterUpdateView(dpg);
        });
    };
    var addMoreButtonEvent = function (e) {
        e.addEventListener('click', function () {
            var _a, _b, _c, _d, _e;
            var currentPage = dpg.options.currentViewValues.pageNo;
            var tps = totalPages.toString();
            var _tmr = e.closest(".number");
            var _pr = _tmr === null || _tmr === void 0 ? void 0 : _tmr.parentElement;
            var _prev = _tmr === null || _tmr === void 0 ? void 0 : _tmr.previousSibling;
            var prev = parseInt((_a = _prev.getAttribute("data-page-number")) !== null && _a !== void 0 ? _a : '');
            var _next = _tmr === null || _tmr === void 0 ? void 0 : _tmr.nextSibling;
            var next = parseInt((_b = _next.getAttribute("data-page-number")) !== null && _b !== void 0 ? _b : '');
            var _cpage = (_c = e.closest('.pagination')) === null || _c === void 0 ? void 0 : _c.querySelector('[data-page-number="' + currentPage + '"]');
            var side = "";
            var count = 0;
            //on Left Side
            if (prev >= 1 && next <= currentPage) {
                side = "L";
                var _pcp = _cpage === null || _cpage === void 0 ? void 0 : _cpage.nextSibling;
                var k = prev;
                while (_pcp) {
                    var pn = _pcp.getAttribute('data-page-number');
                    if (pn == totalPages || k + 1 == next) {
                        break;
                    }
                    _pcp === null || _pcp === void 0 ? void 0 : _pcp.remove();
                    _pcp = _cpage === null || _cpage === void 0 ? void 0 : _cpage.nextSibling;
                    count++;
                    k++;
                }
            }
            //on Right Side
            else if (prev >= currentPage && next >= totalPages) {
                side = "R";
                var _pcp = _cpage === null || _cpage === void 0 ? void 0 : _cpage.previousSibling;
                var k = prev;
                while (_pcp) {
                    var pn = _pcp.getAttribute('data-page-number');
                    if (pn == 1 || k + 1 == next) {
                        break;
                    }
                    _pcp === null || _pcp === void 0 ? void 0 : _pcp.remove();
                    _pcp = _cpage === null || _cpage === void 0 ? void 0 : _cpage.previousSibling;
                    count++;
                    k++;
                }
            }
            if (count < (next - prev)) {
                var _pcp = _prev === null || _prev === void 0 ? void 0 : _prev.previousSibling;
                while (_pcp) {
                    var pn = _pcp.getAttribute('data-page-number');
                    if (pn == 1 || pn == currentPage || count == (next - prev)) {
                        break;
                    }
                    _pcp === null || _pcp === void 0 ? void 0 : _pcp.remove();
                    _pcp = _prev === null || _prev === void 0 ? void 0 : _prev.previousSibling;
                    count++;
                }
            }
            if (count < (next - prev)) {
                var _pcp = _next === null || _next === void 0 ? void 0 : _next.nextSibling;
                while (_pcp) {
                    var pn = _pcp.getAttribute('data-page-number');
                    if (pn == totalPages || pn == currentPage || count == (next - prev)) {
                        break;
                    }
                    _pcp === null || _pcp === void 0 ? void 0 : _pcp.remove();
                    _pcp = _next === null || _next === void 0 ? void 0 : _next.nextSibling;
                    count++;
                }
            }
            var nbt = [];
            while (count > 0 && prev < next) {
                nbt.push(makePagerLI(++prev, dpg.options));
                count--;
            }
            _tmr === null || _tmr === void 0 ? void 0 : _tmr.insertAdjacentHTML("beforebegin", nbt.join(''));
            _tmr === null || _tmr === void 0 ? void 0 : _tmr.remove();
            var pages = [];
            var previous = "0";
            _pr === null || _pr === void 0 ? void 0 : _pr.querySelectorAll('.number').forEach(function (_p) {
                var pn = _p.getAttribute('data-page-number');
                if (previous == pn) {
                    _p.remove();
                }
                else {
                    var pnn = parseInt(pn);
                    if (isNaN(pnn)) {
                        _p.remove();
                    }
                    else {
                        var prn = parseInt(previous);
                        if (prn + 1 !== pnn) {
                            _p === null || _p === void 0 ? void 0 : _p.insertAdjacentHTML("beforebegin", makePagerLI((prn + 2 == pnn ? prn + 1 : '...'), dpg.options));
                        }
                    }
                    pages.push(pnn);
                }
                previous = pn !== null && pn !== void 0 ? pn : "";
            });
            var ii = 0;
            while (((_d = _pr === null || _pr === void 0 ? void 0 : _pr.querySelectorAll('.number')) === null || _d === void 0 ? void 0 : _d.length) > maxItems) {
                (_e = _pr === null || _pr === void 0 ? void 0 : _pr.querySelectorAll('.number')) === null || _e === void 0 ? void 0 : _e.forEach(function (_p) {
                    var pn = _p.getAttribute('data-page-number');
                    if (pn == '...') {
                        var _k = _p === null || _p === void 0 ? void 0 : _p.previousSibling;
                        var pn_1 = _k === null || _k === void 0 ? void 0 : _k.getAttribute('data-page-number');
                        if (pn_1 != 1 && pn_1 != currentPage && pn_1 != totalPages) {
                            _k === null || _k === void 0 ? void 0 : _k.remove();
                        }
                    }
                });
                if (++ii > 10)
                    break;
            }
            previous = "0";
            _pr === null || _pr === void 0 ? void 0 : _pr.querySelectorAll('.number').forEach(function (_p) {
                var pn = _p.getAttribute('data-page-number');
                if (previous == '...' && pn == '...') {
                    _p.remove();
                }
                previous = pn !== null && pn !== void 0 ? pn : "";
            });
            addEventsToButtons();
        });
    };
    var addEventsToButtons = function () {
        var next = pgElem === null || pgElem === void 0 ? void 0 : pgElem.querySelector('.page-next');
        var previous = pgElem === null || pgElem === void 0 ? void 0 : pgElem.querySelector('.page-previous');
        var jumpTo = pgSect.querySelector('.jump-to form [name="jump-to-page"]');
        next === null || next === void 0 ? void 0 : next.toggleAttribute('disabled', dpg.options.currentViewValues.pageNo == totalPages);
        previous === null || previous === void 0 ? void 0 : previous.toggleAttribute('disabled', dpg.options.currentViewValues.pageNo == 1);
        if (jumpTo) {
            jumpTo.value = dpg.options.currentViewValues.pageNo.toString();
        }
        // Next
        next === null || next === void 0 ? void 0 : next.addEventListener('click', function () {
            if (!(next === null || next === void 0 ? void 0 : next.hasAttribute('disabled'))) {
                dpg.options.currentViewValues.pageNo++;
                loadPageAfterUpdateView(dpg);
                eventNextClick(dpg);
            }
        });
        // Previous
        previous === null || previous === void 0 ? void 0 : previous.addEventListener('click', function () {
            if (!(previous === null || previous === void 0 ? void 0 : previous.hasAttribute('disabled'))) {
                dpg.options.currentViewValues.pageNo--;
                loadPageAfterUpdateView(dpg);
                eventPreviousClick(dpg);
            }
        });
        pgElem === null || pgElem === void 0 ? void 0 : pgElem.querySelectorAll('a').forEach(function (ee) {
            preventDefaultATag(ee);
        });
        pgElem === null || pgElem === void 0 ? void 0 : pgElem.querySelectorAll('.pager .number.pageno>*').forEach(function (ee) {
            addNumberButtonEvent(ee);
        });
        pgElem === null || pgElem === void 0 ? void 0 : pgElem.querySelectorAll('.pager .number.loadmore>*').forEach(function (ee) {
            addMoreButtonEvent(ee);
        });
    };
    // Count Update
    count === null || count === void 0 ? void 0 : count.addEventListener('change', function (e) {
        var _a;
        dpg.options.currentViewValues.count = parseInt((_a = e.target) === null || _a === void 0 ? void 0 : _a.value);
        var totalPages = Math.ceil(dpg.options.totalItemsCount / dpg.options.currentViewValues.count);
        if (dpg.options.currentViewValues.pageNo > totalPages)
            dpg.options.currentViewValues.pageNo = totalPages;
        eventCountChanged(dpg);
        loadPageAfterUpdateView(dpg);
    });
    //Sort Colums Header Click
    sortSel.forEach(function (e) {
        e === null || e === void 0 ? void 0 : e.addEventListener('click', function () {
            var _a, _b, _c;
            var pk = "data-property-key";
            var key = e.hasAttribute(pk) ? ((_a = e.getAttribute(pk)) !== null && _a !== void 0 ? _a : "") : (_c = (_b = e.querySelector("[" + pk + "]")) === null || _b === void 0 ? void 0 : _b.getAttribute(pk)) !== null && _c !== void 0 ? _c : "";
            var order = dpg.options.currentViewValues.orderByIn;
            order = order == 'asc' ? 'desc' : (order == 'desc' ? 'asc' : 'asc');
            if (dpg.options.currentViewValues.orderBy != key) {
                order = 'asc';
            }
            dpg.options.currentViewValues.orderByIn = order;
            dpg.options.currentViewValues.orderBy = key;
            e.classList.add(order);
            e.classList.remove(order == "asc" ? "desc" : "asc");
            getSiblings(e).forEach(function (e) {
                var _a;
                var k = ["desc", "asc"];
                (_a = e.classList).remove.apply(_a, k);
            });
            if (dpg.options.totalItemsCount <= dpg.options.currentViewValues.count) {
                sortTable(dpg);
            }
            else {
                if (dpg.options.fromStartOnSort) {
                    dpg.options.currentViewValues.pageNo = 1;
                }
                loadPageAfterUpdateView(dpg);
            }
        });
    });
    //Client Parameters Listner
    dpgInputs.forEach(function (e) {
        e === null || e === void 0 ? void 0 : e.addEventListener('change', function () {
            if (!dpg.options.currentViewValues.userParams)
                dpg.options.currentViewValues.userParams = {};
            dpg.options.currentViewValues.userParams[e.name] = e.value;
            if (dpg.options.userParamListner) {
                loadPageAfterUpdateView(dpg);
            }
        });
    });
    addEventsToButtons();
    var cr_link_search = (_d = document === null || document === void 0 ? void 0 : document.location) === null || _d === void 0 ? void 0 : _d.search;
    window === null || window === void 0 ? void 0 : window.addEventListener("popstate", function (ev) {
        var _a, _b;
        ev.preventDefault();
        if (cr_link_search !== ((_a = document === null || document === void 0 ? void 0 : document.location) === null || _a === void 0 ? void 0 : _a.search)) {
            cr_link_search = (_b = document === null || document === void 0 ? void 0 : document.location) === null || _b === void 0 ? void 0 : _b.search;
            dpg.options = setOptionFromVars(dpg.options);
            loadPageAfterUpdateView(dpg, true);
        }
    });
    if (dpg.options.colorTheme == "auto") {
        (_e = window === null || window === void 0 ? void 0 : window.matchMedia('(prefers-color-scheme: dark)')) === null || _e === void 0 ? void 0 : _e.addEventListener('change', function (event) {
            dpg.element.classList.toggle("theme-dark", (event.matches ? true : false));
        });
    }
}

;// CONCATENATED MODULE: ./src/index.ts
var src_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var src_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DynamicPaginator = /** @class */ (function () {
    function DynamicPaginator(element, options) {
        if (typeof element == "string") {
            this.element = document.querySelector(element);
        }
        else {
            this.element = element;
        }
        options = dpOptionFilter(options, defaultOption);
        options = setOptionFromVars(options);
        this.setViewValues = function (pageNo, count, orderBy, orderByIn, searchIn, searchKey) {
            pageNo = parseInt(pageNo);
            if (pageNo > 0) {
                this.options.currentViewValues.pageNo = pageNo;
            }
            count = parseInt(count);
            if (count > 0) {
                this.options.currentViewValues.count = count;
            }
            if (typeof orderBy == "string")
                this.options.currentViewValues.orderBy = orderBy;
            if (orderByIn == 'asc' || orderByIn == "desc") {
                this.options.currentViewValues.orderByIn = orderByIn;
            }
            if (typeof searchIn == "string")
                this.options.currentViewValues.searchIn = searchIn;
            if (typeof searchKey == "string")
                this.options.currentViewValues.searchKey = searchKey;
            setParamsInElement(this);
            return true;
        };
        this.reloadView = function () { };
        this.options = options;
        makeDynamicPaginator(this);
    }
    return DynamicPaginator;
}());
/* harmony default export */ const src = (DynamicPaginator);
function makeDynamicPaginator(dpg) {
    return src_awaiter(this, void 0, void 0, function () {
        return src_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setContent(dpg)];
                case 1:
                    _a.sent();
                    addEventListeners(dpg);
                    return [2 /*return*/];
            }
        });
    });
}

})();

DynamicPaginator = __webpack_exports__["default"];
/******/ })()
;