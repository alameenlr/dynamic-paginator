var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import httpQueryString from "../node_modules/http-query-string/index";
import { currentViewValueKeys, defaultOption } from "./default-dp-options";
import { upadateViewingStatus } from "./load-content";
export function dpOptionFilter(obj, def) {
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
export function makeSearchRegEx(key, rexFormat) {
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
export function splitURLParams(url) {
    var ret = {
        ref: "",
        gets: {}
    };
    url = url ? url : window.location.href;
    var parts = url.split('?');
    var gets = parts.length > 1 ? parts.pop() : '';
    ret.ref = parts[0];
    if (gets != '') {
        ret.gets = httpQueryString.parse(gets);
    }
    return ret;
}
export function makeURLFromParams(uparms) {
    var ret = uparms.ref;
    var gets = httpQueryString.stringify(uparms.gets);
    return ret + (gets.length > 0 ? '?' + gets : '');
}
export function getLRSDPGElement(name, dpg) {
    return dpg.element.querySelector('[data-lrs-dpg-elm="' + name + '"]');
}
export function createHTElement(hyperText) {
    var tel = document.createElement('div');
    tel.innerHTML = hyperText;
    return tel.firstChild;
}
export function currentViewPageValuesToURLParams(options) {
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
export function setParamsInElement(dpg) {
    var _a;
    for (var k in dpg.options.currentViewValues) {
        if (k != "userParams") {
            var el = dpg.element.querySelector('[name="' + dpg.options.dpParamKeys[k] + '"]');
            if (el)
                el.value = ((_a = dpg.options.currentViewValues[k]) !== null && _a !== void 0 ? _a : "").toString();
        }
    }
}
export function setUserParamsInElement(dpg) {
    for (var k in dpg.options.currentViewValues.userParams) {
        var el = dpg.element.querySelector('.dynamic-paginator-input[name="' + k + '"]');
        el.value = dpg.options.currentViewValues.userParams[k];
    }
}
export function makeLoadRequestParams(options) {
    var kv = {};
    var cvv = options.currentViewValues;
    for (var k in cvv) {
        var tmp = options.dpParamKeys[k];
        kv[tmp] = cvv[k];
    }
    kv["offset"] = (cvv.pageNo * cvv.count) - cvv.count;
    return kv;
}
export function urlParamsToCurrentViewPageValues(gets, options) {
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
export function setOptionFromVars(options, url) {
    var _a;
    options.currentViewValues.count = (_a = options.currentViewValues.count) !== null && _a !== void 0 ? _a : defaultOption.currentViewValues.count;
    if (options.pushToHistory) {
        var url_1 = splitURLParams();
        options.currentViewValues = urlParamsToCurrentViewPageValues(url_1.gets, options);
    }
    return options;
}
export function generateSortImageURL(sort, themeisDark) {
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
export function getSiblings(a) {
    var result = [], node = a.parentNode.firstChild;
    while (node) {
        if (node !== a && node.nodeType === Node.ELEMENT_NODE)
            result.push(node);
        node = node.nextElementSibling || node.nextSibling;
    }
    return result;
}
export function sortTable(dpg) {
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
export function jsTableSearch(dpg) {
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
export function sendPOSTRequest(query, options, url) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var content, headers, k, reqUrl, response, resp, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    content = httpQueryString.stringify(query);
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
