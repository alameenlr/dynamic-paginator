import { DPOptions } from "./dp-types";
import "./scss/dynamic-paginator.scss";
export default class DynamicPaginator {
    element: HTMLElement;
    options: DPOptions;
    setViewValues: Function;
    reloadView: Function;
    constructor(element: HTMLElement | string, options: DPOptions);
}
