import DynamicPaginator from "./index";

export function eventPageLoaded(dpg:DynamicPaginator){
    //page-loaded
    const pageLoaded = new CustomEvent("page-loaded", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(pageLoaded);
}

export function eventNextClick(dpg:DynamicPaginator){
    //next-click
    const nextClick = new CustomEvent("next-click", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(nextClick);
}

export function eventPreviousClick(dpg:DynamicPaginator){
    //prev-click
    const prevClick = new CustomEvent("next-click", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(prevClick);
}

export function eventCountChanged(dpg:DynamicPaginator){
    //count-change
    const prevClick = new CustomEvent("count-change", {
        detail: dpg.options.currentViewValues,
    });
    dpg.element.dispatchEvent(prevClick);
}