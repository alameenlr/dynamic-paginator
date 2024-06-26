export default function setCountComponent(fieldname, countsPerPage, totalItemsCount, countSelect) {
    var search_sel = "";
    countSelect.forEach(function (n) {
        search_sel += "<option value=\"".concat(n, "\" ").concat(n == countsPerPage ? ' selected' : '', ">").concat(n, "</option>");
    });
    return "<div class=\"set-view-count\">" +
        "<select name=\"".concat(fieldname, "\" class=\"lrs-dpf border no-bg no-outline\">") + search_sel + "</select>" +
        "<span> Items per page.</span>" +
        "</div>";
}
