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
import paginationComponent, { makePagerLI, setJumpToComponentView } from "./elements/pagination";
import { eventCountChanged, eventNextClick, eventPreviousClick } from "./event-triggers";
import { currentViewPageValuesToURLParams, dpOptionFilter, getLRSDPGElement, getSiblings, jsTableSearch, makeLoadRequestParams, sendPOSTRequest, setOptionFromVars, setUserParamsInElement, sortTable, splitURLParams } from "./functions";
import { contentLoader, loadPage } from "./load-content";
export default function addEventListeners(dpg) {
    listnersForPagination(dpg);
}
export function listnersForPagination(dpg) {
    var _a, _b, _c, _d;
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
            var newUrl = url.ref + "?" + httpQueryString.stringify(cvv);
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
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _thf, _search_in, _search_key, searchIn, searchKey, doJsSearch, query, resp;
            return __generator(this, function (_b) {
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
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _thf, query, resp;
            return __generator(this, function (_b) {
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
    //Sort Columsn Header Click
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
    window === null || window === void 0 ? void 0 : window.addEventListener("popstate", function (ev) {
        ev.preventDefault();
        dpg.options = setOptionFromVars(dpg.options);
        loadPageAfterUpdateView(dpg, true);
    });
    (_d = window === null || window === void 0 ? void 0 : window.matchMedia('(prefers-color-scheme: dark)')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', function (event) {
        dpg.element.classList.toggle("theme-dark", (event.matches ? true : false));
    });
}
