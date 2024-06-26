import { defaultOption } from "./default-dp-options";
import { DPOptions } from "./dp-types";
import { dpOptionFilter, setOptionFromVars, setParamsInElement } from "./functions";
import { setContent } from "./set-list-view";
import "./scss/dynamic-paginator.scss";
import addEventListeners from "./add-events";

export default class DynamicPaginator{
    element: HTMLElement;
    options: DPOptions;
    setViewValues:Function;
    reloadView: Function;
    constructor(element:HTMLElement|string,options:DPOptions){
        if(typeof element == "string"){
            this.element = document.querySelector(element) as HTMLElement;
        }
        else{
           this.element = element; 
        }
        options = dpOptionFilter(options,defaultOption);
        options = setOptionFromVars(options);
        this.setViewValues = function(
            pageNo:any,
            count:any,
            orderBy:any,
            orderByIn:any,
            searchIn:any,
            searchKey:any
        ){
            pageNo = parseInt(pageNo);
            if(pageNo>0){
                this.options.currentViewValues.pageNo = pageNo;
            }
            
            count = parseInt(count);
            if(count>0){
                this.options.currentViewValues.count = count;
            }

            if(typeof orderBy=="string")
                this.options.currentViewValues.orderBy = orderBy;

            if(orderByIn=='asc' || orderByIn=="desc"){
                this.options.currentViewValues.orderByIn = orderByIn;
            }
            
            if(typeof searchIn=="string")
                this.options.currentViewValues.searchIn = searchIn;
            
            if(typeof searchKey=="string")
                this.options.currentViewValues.searchKey = searchKey;

            setParamsInElement(this);
            return true;
        };
        this.reloadView = function(){};
        this.options = options;
        makeDynamicPaginator(this)
    }
}

async function makeDynamicPaginator(dpg:DynamicPaginator){
    await setContent(dpg);
    addEventListeners(dpg);
}
