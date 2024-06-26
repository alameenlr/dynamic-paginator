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
import paginationComponent, { jumpToComponent } from "./elements/pagination";
import { dpOptionFilter, generateSortImageURL, makeLoadRequestParams, setUserParamsInElement } from "./functions";
import { loadPage } from "./load-content";
export function setContent(paginator) {
    return __awaiter(this, void 0, void 0, function () {
        var content_1, headers, k, response, resp, e_1, options, content, counts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paginator.element.classList.add("lrs-dynamic-paginator");
                    if (!(paginator.options.getInfoURL != "")) return [3 /*break*/, 5];
                    content_1 = httpQueryString.stringify(makeLoadRequestParams(paginator.options));
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
                    if (((window === null || window === void 0 ? void 0 : window.matchMedia) && (window === null || window === void 0 ? void 0 : window.matchMedia('(prefers-color-scheme: dark)').matches)) ||
                        options.colorTheme == "dark") {
                        paginator.element.classList.add("theme-dark");
                    }
                    //Setting Property Label
                    content = content.replace(/(\>)\{\{propertiesLabel\}\}(\<)/gm, " data-lrs-dpg-elm='property-head'$1" + options.itemProperties.map(function (p) {
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
                    "</div>";
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
