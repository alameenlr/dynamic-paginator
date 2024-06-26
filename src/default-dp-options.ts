import { ItemProperty, DPOptions } from "./dp-types";
import searchBoxComponent from "./elements/searchbox";
import setCountComponent from "./elements/setcount";

//Keys of DynamicPaginator Option Load From Client if it is In Options
let takeFromUserOption:string[] = [
    "httpRequestHeaders",
    "itemProperties"
];

let currentViewValueKeys = [
    "pageNo",
    "count",
    "orderBy",
    "orderByIn",
    "searchIn",
    "searchKey",
    "userParams"
];

let defaultOption:DPOptions = {
    search:{
        placeholder:"Search",
    },
    colorTheme:"auto",
    getInfoURL:"",
    loadListURL:"",
    itemsNumber: "No.",
    httpRequestHeaders: {},
	itemProperties:[],
	indexedItemPropertiesKeys:[],
    items:[],
    maxPagerNumbers:10,
	totalItemsCount:0,
    setCountsPerPage:[10,20,50,100,250,500,1000],
    pushToHistory:true,
    showViewingStatus:true,
    currentViewValues:{
        pageNo:1,
        count:10,
    },
    fromStartOnSort:false,
    dpParamKeys:{
        pageNo: "page-no",
        count: "count",
        orderBy: "order-by",
        orderByIn: "order-by-in",
        searchIn: "search-in",
        searchKey: "search-key",
        userParams: "dp-inputs",
    },
    clientSideSearch:true,
    clientSideSearchFormat:"%{{search-key}}%",
    userParamListner:true,
	viewTemplate:
        `<div class="d-flex w-100 justify-content-between py-2">`+
            `<div>{{searchBox}}</div>`+
            `<div>{{countsPerPage}}</div>`+
        `</div>`+
        `<table class="w-100">`+
            `<thead>`+
                `<tr>{{propertiesLabel}}</tr>`+
            `</thead>`+
            `<tbody>{{itemsList}}</tbody>`+
        `</table>`+
        `<div class="d-flex w-100 justify-content-between py-2">`+
            `<div class="show-status">{{viewingStatus}}</div>`+
            `<div>{{paginationContent}}</div>`+
        `</div>`,
    paginationBlock:{
        hideOnSinglePage:true,
        jumpTo:false,
        size:"default",
        template : {
            pageNumber:`<a href="{{url}}" class="page-number">{{pageNo}}</a>`,
            previous:`<a href="{{url}}" class="page-previous">`+
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4a32 32 0 0 0 0 45.3l192 192a32 32 0 0 0 45.3-45.3L77.3 256 246.6 86.6a32 32 0 0 0-45.3-45.3l-192 192z" fill="currentColor"/></svg>`+
            `</a>`,
            next:`<a href="{{url}}" class="page-next">`+
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4a32 32 0 0 1 0 45.3l-192 192a32 32 0 0 1-45.3-45.3L242.7 256 73.4 86.6a32 32 0 0 1 45.3-45.3l192 192z" fill="currentColor"/></svg>`+
            `</a>`,
            more:`<a class="page-more">...</a>`,
            jumpTo: `<form action="#">`+
                `<div class="d-flex border jump-to-box">`+
                    `<input type="number" name="jump-to-page" class="lrs-dpf no-border no-outline no-bg number">`+
                    `<button type="submit" class="no-border no-outline no-bg">Go</button>`+
                `</div>`+
            `</form>`,
            background:true,
        }
    },
    pageContentLoader: `<div class='dpg-loading'></div>`,
    makeItemPropertyLabel: (property:ItemProperty, isIndexed:boolean, sorted:false|"asc"|"desc"=false) =>{
        if(isIndexed)
            return `<th tabindex="0" role="columnheader button" data-property-key="${property.key}" class="head-sort${sorted?' '+sorted:''}"${sorted?` title=" Sort `+(sorted=="asc"?"descending":"ascending")+`"`:''}>${property.label}</th>`;
        return `<th data-property-key="${property.key}">${property.label}</th>`;

    },
    makeItem: (item:any, itemProperties:ItemProperty[], searchedIndex:string="", searchedKey:string="", itemIndex:number, showItemNumber:false|true)  => {
        let escapeQuotes = (str:string) => str?.toString().replace(/[\"]/gm, "&quot;").replace(/[\']/gm, "&apos;");
        let searchMatch = (content:string)=>{
            let matchRex = new RegExp("("+searchedKey.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")+")","gui");
            return content.toString().replace(matchRex,"<span class='search-match'>$1</span>")
        }
        return `<tr>`+
            (showItemNumber===false?"":`<td>${itemIndex+1}</td>`)+
            itemProperties.map(p=>
                searchedIndex==p.key?
                (`<td data-key="${p.key}" data-value="${escapeQuotes(item[p.key])}">${searchMatch(item[p.key]??'')}</td>`):
                (`<td data-key="${p.key}" data-value="${escapeQuotes(item[p.key])}">${item[p.key]??''}</td>`)
            ).join('')+
        `</tr>`;
    },
    makeViewingStatus: (pageno:number, countsPerPage:number, totalItemsCount:number)=>{
        //Showing 1 to 10 of 52 entries
        if(totalItemsCount==0)
            return "0 entries"
        let to = pageno*countsPerPage;
        let from = to-countsPerPage+1;
        return `Showing ${from} to ${to>totalItemsCount?totalItemsCount:to} of ${totalItemsCount} entries`;
    },
    makeSearchBox: (option:DPOptions) => searchBoxComponent(option),
    
    makeCountSelection: (fieldname:string,countsPerPage:number, totalItemsCount:number, countSelect:number[]) => setCountComponent(fieldname, countsPerPage, totalItemsCount, countSelect),
}

export {defaultOption, takeFromUserOption, currentViewValueKeys};