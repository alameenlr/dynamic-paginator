import { currentViewPageValuesToURLParams, getLRSDPGElement, makeURLFromParams, splitURLParams } from "../functions";
export function makeMakeBt(template, pageNo, options, addUrl) {
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
export function makePagerLI(pn, options, addClass) {
    if (addClass === void 0) { addClass = ""; }
    var pgb = options.paginationBlock;
    return "<li class=\"number ".concat((pn == "..." ? "loadmore" : "pageno") + ' ' + addClass, "\" data-page-number=\"").concat(pn, "\">") +
        (pn == '...' ?
            makeMakeBt(pgb.template.more, -1, options, false) :
            makeMakeBt(pgb.template.pageNumber, pn, options)) +
        "</li>";
}
export function generatePageNumbers(totalPages, currentPage, maxItems) {
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
export function setJumpToComponentView(dpg) {
    var _a;
    var pgSec = getLRSDPGElement("pagination", dpg);
    var totalPages = Math.ceil(dpg.options.totalItemsCount / dpg.options.currentViewValues.count);
    var show = totalPages == 1 && dpg.options.paginationBlock.hideOnSinglePage == true;
    (_a = pgSec.querySelector(".jump-to")) === null || _a === void 0 ? void 0 : _a.classList.toggle("d-none", show);
}
export function jumpToComponent(options) {
    var totalPages = Math.ceil(options.totalItemsCount / options.currentViewValues.count);
    if (totalPages == 1 && options.paginationBlock.hideOnSinglePage == true)
        return "";
    return options.paginationBlock.jumpTo ?
        "<div class=\"jump-to\">" + options.paginationBlock.template.jumpTo + "</div>"
        : "";
}
export default function paginationComponent(options) {
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
