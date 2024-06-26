import { DPOptions } from "../dp-types";
import DynamicPaginator from "../index";
export declare function makeMakeBt(template: string, pageNo: number, options: DPOptions, addUrl?: boolean): string;
export declare function makePagerLI(pn: any, options: DPOptions, addClass?: string): string;
export declare function generatePageNumbers(totalPages: number, currentPage: number, maxItems: number): any[];
export declare function setJumpToComponentView(dpg: DynamicPaginator): void;
export declare function jumpToComponent(options: DPOptions): string;
export default function paginationComponent(options: DPOptions): string;
