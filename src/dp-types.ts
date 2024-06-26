interface KeyValue {
    [key: string]: any;
}
interface Search {
    //Search Box Placeholder
    placeholder:string;
}
type ItemProperty = {
    //key - Table column name in database used to identify(unique)
    key: string;
    //label - Label for the corresponding key to Display
    label: string;
}
type PaginationTemplate = {
    background:boolean;         // Background on/off
    pageNumber:string;          // DOM String {{value}}
    previous:string;            // DOM String {{value}}
    next:string;                // DOM String {{value}}
    more:string;                // DOM String {{value}}
    jumpTo:string;                // DOM String {{value}}
}
type PaginationBlock = {
    //Size of BlockElements
    size: "default"|"small",
    //jumpTo - Enable Jump To Custom Page Option
    jumpTo:boolean;
    //hideOnSinglePage - Hide Pagination in if the page is Single
    hideOnSinglePage:boolean;
    //Item Templates
    template: PaginationTemplate;
}
type CurrentViewPageValues = {
    pageNo: number;
    count: number;
    orderBy?: string;
    orderByIn?: string;
    searchIn?: string;
    searchKey?: string;
    userParams?: KeyValue;
}

type LRSDP_ParamsKeys = {
    pageNo: string;
    count: string;
    orderBy?: string;
    orderByIn?: string;
    searchIn?: string;
    searchKey?: string;
    userParams?: string;
}

type DPOptions = {
    //search - False means disabled
    search:Search|false;

    //colorTheme - Prefered Color Theme
    colorTheme:"auto" | "dark" | "light";

    //itemsNumber - Add page number false means hidden, string enabled and number column Label
    itemsNumber: false | string;

    //getInfoURL - Get Total Items Count, itemProperties, indexedItemPropertiesKeys
	getInfoURL:string;

    //loadListURL - Dynamic Paginator will fetch the Content From the url with parameters {from,count}
	loadListURL:string;

    //httpRequestHeaders - Custom Headers for Request Authentication Eg:In Laravel X-CSRF-TOKEN from CORS Protection
    httpRequestHeaders: KeyValue;
    
    //itemProperties - In Order
	itemProperties:ItemProperty[];

    //indexedItemProperties - Array of Column Keys, Used to search/sort. 
	indexedItemPropertiesKeys:string[];

    //items - listItems
    items:any[];

    //maxPagerNumbers - Visible Numbers In Pagination
    maxPagerNumbers:number;

    //totalItemsCount - Total items in the list.
	totalItemsCount:number;

    //setCountsPerPage - Allow Users to Set Counts per Page
	setCountsPerPage:boolean|number[];

    //pushToHistory - Add to Page Load Request On Browser History
    pushToHistory:boolean;

    //showViewingStatus - Enable or Disable Viewing Status
    showViewingStatus:boolean;

    //currentViewValues - Values for Current View
    currentViewValues:CurrentViewPageValues;

    //fromStartOnSort - Reload from Start on Sort
    fromStartOnSort:boolean;

    //dpParamKeys - Parameter names in Paginator Fields, URL Param Keys
    dpParamKeys:LRSDP_ParamsKeys;

    //clientSideSearch - Enable Search Using JavaScript Regular Expression() if Total Items Count is Less then Counts per Page
    clientSideSearch:boolean;

    //clientSideSearch - Enable Search Using JavaScript Regular Expression if Total Items Count is Less then Counts per Page
    clientSideSearchFormat:string;

    //userParamListner - Updates Page View When User Parameters values Changed
    userParamListner:boolean;

    /* -------------- TEMPLATES -------------------- */
    //viewTemplate - Content Template.
	viewTemplate:string;

    //paginationBlock - Pagination Element.
    paginationBlock:PaginationBlock;

    //pageContentLoader - Page Loading Content.
    pageContentLoader:string;

    //generateItemPropertyLabel - DOM String Value of Column Head Content eg: <th>Name</th>
    makeItemPropertyLabel: (property:ItemProperty, isIndexed:boolean, sorted:false|"asc"|"desc") => string;

    //generateItem - DOM String Value of Column Head Content eg: <td>value</td>
    makeItem: (item:any, itemProperties:ItemProperty[],searchedIndex:string, searchedKey:string, itemIndex:number, showItemNumber:false|true) => string;

    //makeViewingStatus - Current Viewing Status of The Page eg: Showing 1 to 10 of 52 entries
    makeViewingStatus: (pageno:number, countsPerPage:number, totalItemsCount:number) => string

    //makeSearchBox - Custom search box 
    makeSearchBox: (opton:DPOptions) => string;

    //makeSearchBox - Custom search box 
    makeCountSelection: (fieldname:string, countsPerPage:number, totalItemsCount:number, countSelect:number[]) => string;
};

export {DPOptions,ItemProperty,Search,KeyValue, LRSDP_ParamsKeys, CurrentViewPageValues}
