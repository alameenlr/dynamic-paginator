import searchBoxComponent from "./elements/searchbox";
import setCountComponent from "./elements/setcount";
//Keys of DynamicPaginator Option Load From Client if it is In Options
var takeFromUserOption = [
    "httpRequestHeaders",
    "itemProperties"
];
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
    pageContentLoader: "<div class=\"loader\"><div class=\"circle\"></div></div>",
    makeItemPropertyLabel: function (property, isIndexed, sorted) {
        if (sorted === void 0) { sorted = false; }
        if (isIndexed)
            return "<th tabindex=\"0\" role=\"columnheader button\" data-property-key=\"".concat(property.key, "\" class=\"head-sort").concat(sorted ? ' ' + sorted : '', "\"").concat(sorted ? " title=\" Sort " + (sorted == "asc" ? "descending" : "ascending") + "\"" : '', ">").concat(property.label, "</th>");
        return "<th data-property-key=\"".concat(property.key, "\">").concat(property.label, "</th>");
    },
    makeItem: function (item, itemProperties, searchedIndex, searchedKey) {
        if (searchedIndex === void 0) { searchedIndex = ""; }
        if (searchedKey === void 0) { searchedKey = ""; }
        var escapeQuotes = function (str) { return str === null || str === void 0 ? void 0 : str.toString().replace(/[\"]/gm, "&quot;").replace(/[\']/gm, "&apos;"); };
        var searchMatch = function (content) {
            var matchRex = new RegExp("(" + searchedKey.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ")", "gui");
            return content.toString().replace(matchRex, "<span class='search-match'>$1</span>");
        };
        return "<tr>" +
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
export { defaultOption, takeFromUserOption, currentViewValueKeys };
