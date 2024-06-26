export function eventPageLoaded(dpg) {
    //page-loaded
    var pageLoaded = new CustomEvent("page-loaded", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(pageLoaded);
}
export function eventNextClick(dpg) {
    //next-click
    var nextClick = new CustomEvent("next-click", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(nextClick);
}
export function eventPreviousClick(dpg) {
    //prev-click
    var prevClick = new CustomEvent("next-click", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(prevClick);
}
export function eventCountChanged(dpg) {
    //count-change
    var prevClick = new CustomEvent("count-change", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(prevClick);
}
