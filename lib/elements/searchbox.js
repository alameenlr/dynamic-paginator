export default function searchBoxComponent(options) {
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
