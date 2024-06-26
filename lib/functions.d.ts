import DynamicPaginator from "./index";
import { DPOptions, KeyValue } from "./dp-types";
export type URLParts = {
    ref: string;
    gets: KeyValue;
};
export declare function dpOptionFilter(obj: any, def: any): any;
export declare function makeSearchRegEx(key: string, rexFormat?: string): RegExp;
export declare function splitURLParams(url?: string): URLParts;
export declare function makeURLFromParams(uparms: URLParts): string;
export declare function getLRSDPGElement(name: string, dpg: DynamicPaginator): HTMLElement;
export declare function createHTElement(hyperText: string): HTMLElement;
export declare function currentViewPageValuesToURLParams(options: DPOptions): KeyValue;
export declare function setParamsInElement(dpg: DynamicPaginator): void;
export declare function setUserParamsInElement(dpg: DynamicPaginator): void;
export declare function makeLoadRequestParams(options: DPOptions): KeyValue;
export declare function urlParamsToCurrentViewPageValues(gets: KeyValue, options: DPOptions): KeyValue;
export declare function setOptionFromVars(options: DPOptions, url?: string): DPOptions;
export declare function generateSortImageURL(sort: false | "asc" | "desc", themeisDark: boolean): string;
export declare function getSiblings(a: any): HTMLElement[];
export declare function sortTable(dpg: DynamicPaginator): void;
export declare function jsTableSearch(dpg: DynamicPaginator): void;
export declare function sendPOSTRequest(query: KeyValue, options: DPOptions, url: keyof DPOptions): Promise<any>;
