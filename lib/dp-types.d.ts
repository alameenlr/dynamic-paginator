interface KeyValue {
    [key: string]: any;
}
interface Search {
    placeholder: string;
}
type ItemProperty = {
    key: string;
    label: string;
};
type PaginationTemplate = {
    background: boolean;
    pageNumber: string;
    previous: string;
    next: string;
    more: string;
    jumpTo: string;
};
type PaginationBlock = {
    size: "default" | "small";
    jumpTo: boolean;
    hideOnSinglePage: boolean;
    template: PaginationTemplate;
};
type CurrentViewPageValues = {
    pageNo: number;
    count: number;
    orderBy?: string;
    orderByIn?: string;
    searchIn?: string;
    searchKey?: string;
    userParams?: KeyValue;
};
type LRSDP_ParamsKeys = {
    pageNo: string;
    count: string;
    orderBy?: string;
    orderByIn?: string;
    searchIn?: string;
    searchKey?: string;
    userParams?: string;
};
type DPOptions = {
    search: Search | false;
    colorTheme: "auto" | "dark" | "light";
    itemsNumber: false | string;
    getInfoURL: string;
    loadListURL: string;
    httpRequestHeaders: KeyValue;
    itemProperties: ItemProperty[];
    indexedItemPropertiesKeys: string[];
    items: any[];
    maxPagerNumbers: number;
    totalItemsCount: number;
    setCountsPerPage: boolean | number[];
    pushToHistory: boolean;
    showViewingStatus: boolean;
    currentViewValues: CurrentViewPageValues;
    fromStartOnSort: boolean;
    dpParamKeys: LRSDP_ParamsKeys;
    clientSideSearch: boolean;
    clientSideSearchFormat: string;
    userParamListner: boolean;
    viewTemplate: string;
    paginationBlock: PaginationBlock;
    pageContentLoader: string;
    makeItemPropertyLabel: (property: ItemProperty, isIndexed: boolean, sorted: false | "asc" | "desc") => string;
    makeItem: (item: any, itemProperties: ItemProperty[], searchedIndex: string, searchedKey: string, itemIndex: number, showItemNumber: false | true) => string;
    makeViewingStatus: (pageno: number, countsPerPage: number, totalItemsCount: number) => string;
    makeSearchBox: (opton: DPOptions) => string;
    makeCountSelection: (fieldname: string, countsPerPage: number, totalItemsCount: number, countSelect: number[]) => string;
};
export { DPOptions, ItemProperty, Search, KeyValue, LRSDP_ParamsKeys, CurrentViewPageValues };
