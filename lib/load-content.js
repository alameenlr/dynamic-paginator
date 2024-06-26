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
import { getLRSDPGElement, makeLoadRequestParams, sendPOSTRequest } from "./functions";
import { eventPageLoaded } from "./event-triggers";
export function upadateViewingStatus(dpg, pageNo, count, total) {
    if (pageNo === void 0) { pageNo = dpg.options.currentViewValues.pageNo; }
    if (count === void 0) { count = dpg.options.currentViewValues.count; }
    if (total === void 0) { total = dpg.options.totalItemsCount; }
    var _vs = getLRSDPGElement("viewing-status", dpg);
    _vs.innerHTML = dpg.options.makeViewingStatus(pageNo, count, total);
}
export function contentLoader(dpg, show) {
    var _a, _b;
    var _ls = getLRSDPGElement("items-list", dpg);
    if (show) {
        if (((_a = _ls.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('lrs-dpg-content-loader').length) == 0) {
            var loader = document.createElement("div");
            loader.innerHTML =
                "<div class=\"d-flex justify-content-center h-100\">" +
                    "<div class=\"d-flex flex-column justify-content-center\">" +
                    dpg.options.pageContentLoader +
                    "</div>" +
                    "</div>";
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
export function loadPage(dpg) {
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
                            _ls.innerHTML = resp.map(function (e) {
                                var _a, _b;
                                return dpg.options.makeItem(e, dpg.options.itemProperties, ((_a = dpg.options.currentViewValues.searchIn) !== null && _a !== void 0 ? _a : ""), ((_b = dpg.options.currentViewValues.searchKey) !== null && _b !== void 0 ? _b : ""));
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
