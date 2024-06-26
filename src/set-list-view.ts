import httpQueryString from "../node_modules/http-query-string/index";
import { DPOptions, ItemProperty, KeyValue } from "./dp-types";
import paginationComponent, { jumpToComponent } from "./elements/pagination";
import { dpOptionFilter, generateSortImageURL, makeLoadRequestParams, setUserParamsInElement } from "./functions";
import DynamicPaginator from "./index";
import { loadPage } from "./load-content";

export async function setContent(paginator:DynamicPaginator){
    paginator.element.classList.add("lrs-dynamic-paginator");

    if(paginator.options.getInfoURL!=""){
        let content = httpQueryString.stringify(makeLoadRequestParams(paginator.options));
        let headers:KeyValue = {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'};
        for(let k in paginator.options.httpRequestHeaders){
            headers[k] = paginator.options.httpRequestHeaders[k];  
        }
        const response = await fetch(paginator.options.getInfoURL, {
            method: 'POST',
            body: content,
            headers: headers
        });
        
        if (response.ok) {
            try{
                let resp = await response.json();
                if(resp){
                    paginator.options = dpOptionFilter(resp,paginator.options);
                }
                else{
                    throw "Invalid response from getInfoURL";
                }
            }catch(e){
                console.error("Unable to fetch the data from getInfoURL:"+paginator.options.getInfoURL,e);
            }
        }
    }
    let options = paginator.options;
    let content = options.viewTemplate;
    
    
    if (
        (options.colorTheme=="auto" && window?.matchMedia && window?.matchMedia('(prefers-color-scheme: dark)').matches) ||
        options.colorTheme=="dark"
    ) {
        paginator.element.classList.add("theme-dark");
    }

    //Setting Property Label
    content = content.replace(
        /(\>)\{\{propertiesLabel\}\}(\<)/gm,
        " data-lrs-dpg-elm='property-head'$1"+
        (options.itemsNumber===false?"":options.makeItemPropertyLabel({key:"index",label: (options.itemsNumber).toString()}  as ItemProperty,false,false))+
        options.itemProperties.map(
            p=>options.makeItemPropertyLabel(
                p,
                options.indexedItemPropertiesKeys.indexOf(p.key)>-1,
                (options.currentViewValues?.orderBy==p.key?options.currentViewValues?.orderByIn:false) as any
            )
        ).join('')+"$2"
    );

    //Setting Items List
    content = content.replace(
        /(\>)\{\{itemsList\}\}(\<)/gm,
        " data-lrs-dpg-elm='items-list'$1"+"$2"
    );

    //Setting Viewing Status
    content = content.replace(
        /(\>)\{\{viewingStatus\}\}(\<)/gm,
        " data-lrs-dpg-elm='viewing-status'$1"+"$2"
    );

    //Setting Search Box
    content = content.replace(
        /(\>)\{\{searchBox\}\}(\<)/gm,
        " data-lrs-dpg-elm='search-box'$1"+options.makeSearchBox(options)+"$2"
    );

    //Setting Counts Per Page
    if(options.setCountsPerPage != false){
        let counts = options.setCountsPerPage as number[];
        content = content.replace(
            /(\>)\{\{countsPerPage\}\}(\<)/gm,
            " data-lrs-dpg-elm='count-select'$1"+options.makeCountSelection(options.dpParamKeys.count,options.currentViewValues.count,options.totalItemsCount,counts)+"$2"
        );
    }

    //Setting Pagination
    content = content.replace(
        /(\>)\{\{paginationContent\}\}(\<)/gm,
        " data-lrs-dpg-elm='pagination'$1<div class='d-flex'><div class='page-nav'>"+paginationComponent(options)+"</div>"+jumpToComponent(options)+"$2"
    );

    paginator.element.innerHTML = content;

    paginator.element.insertAdjacentHTML("beforebegin", `<style>`+
        [
            '.lrs-dynamic-paginator.theme-dark [data-lrs-dpg-elm="property-head"]',
            '.lrs-dynamic-paginator [data-lrs-dpg-elm="property-head"]',
        ].map((b,i)=>(
            [false,"asc","desc"].map(c=>(
                b+" .head-sort"+(c==false?"":"."+c)+"{"+
                    "background-image:"+generateSortImageURL(c as any,i==0)+
                "}"
            )).join('')
        )).join('')+
    `</style>`)
    if(paginator.options.currentViewValues.userParams){
        setUserParamsInElement(paginator);
    }
    else{
        paginator.element.querySelectorAll('.dynamic-paginator-input[name]').forEach((e)=>{
            let k = (e as HTMLInputElement).name;
            let v = (e as HTMLInputElement).value;
            paginator.options.currentViewValues.userParams = paginator.options.currentViewValues.userParams??{};
            paginator.options.currentViewValues.userParams[k] = v;
        }) 
    }
    loadPage(paginator);
}