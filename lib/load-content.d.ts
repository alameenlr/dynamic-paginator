import DynamicPaginator from "./index";
export declare function upadateViewingStatus(dpg: DynamicPaginator, pageNo?: number, count?: number, total?: number): void;
export declare function contentLoader(dpg: DynamicPaginator, show: boolean): void;
export declare function loadPage(dpg: DynamicPaginator): Promise<void>;
