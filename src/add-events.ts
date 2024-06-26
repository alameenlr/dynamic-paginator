import httpQueryString from "../node_modules/http-query-string/index";
import paginationComponent, { makePagerLI, setJumpToComponentView } from "./elements/pagination";
import { eventCountChanged, eventNextClick, eventPreviousClick } from "./event-triggers";
import { URLParts, currentViewPageValuesToURLParams, dpOptionFilter, getLRSDPGElement, getSiblings, jsTableSearch, makeLoadRequestParams, sendPOSTRequest, setOptionFromVars, setUserParamsInElement, sortTable, splitURLParams } from "./functions";
import DynamicPaginator from "./index";
import { contentLoader, loadPage } from "./load-content";

export default function addEventListeners(dpg:DynamicPaginator){
    listnersForPagination(dpg)
}

export function listnersForPagination(dpg:DynamicPaginator){
    let pgSect = getLRSDPGElement('pagination',dpg) as HTMLElement;
    let pgElem = pgSect?.querySelector('.page-nav') as HTMLElement;
    let totalPages = Math.ceil(dpg.options.totalItemsCount/dpg.options.currentViewValues.count);
    let count = dpg.element.querySelector('[data-lrs-dpg-elm="count-select"] [name="count"]');
    let forms = dpg.element.querySelectorAll('form');
    let sortSel = dpg.element.querySelectorAll('[data-lrs-dpg-elm="property-head"] .head-sort');
    let maxItems = dpg.options.maxPagerNumbers;
    let searchBox = getLRSDPGElement('search-box',dpg) as HTMLElement;
    let dpgInputs = dpg.element.querySelectorAll(".dynamic-paginator-input");

    //Blocked all a tags
    let preventDefaultATag = function(e:HTMLElement){
        e.addEventListener('click',function(e){
            e.preventDefault();
        });
    }
    //Blocked all form from Submit
    forms.forEach(e=>{
        e.addEventListener('submit',function(e){
            e.preventDefault();
        });
    });

    let loadPageAfterUpdateView = function(dpg:DynamicPaginator,onHistoryPoppingLoad:boolean=false){
        if(dpg.options.pushToHistory && !onHistoryPoppingLoad){
            let url:URLParts = splitURLParams();
            let cvv = dpOptionFilter(currentViewPageValuesToURLParams(dpg.options),url.gets);
            let newUrl = url.ref+"?"+httpQueryString.stringify(cvv);
            
            history.pushState({state: newUrl}, "null", newUrl);
        }
        setUserParamsInElement(dpg);
        pgElem.innerHTML = paginationComponent(dpg.options);
        setJumpToComponentView(dpg);
        addEventsToButtons();
        loadPage(dpg);
    }
    dpg.reloadView = function(){
        loadPageAfterUpdateView(this);
        return true;
    }

    //Sumbit Search Action
    searchBox.querySelector('form')?.addEventListener('submit', async function(e){
        let _thf = (e.target as HTMLElement);
        let _search_in = _thf?.querySelector('[name="'+dpg.options.dpParamKeys.searchIn+'"]') as HTMLSelectElement;
        let _search_key = _thf?.querySelector('[name="'+dpg.options.dpParamKeys.searchKey+'"]') as HTMLInputElement;

        let searchIn = _search_in.value;
        let searchKey = _search_key.value;

        let doJsSearch:boolean = false;
        //Previous Match Checking
        if(
            dpg.options.currentViewValues.searchIn==searchIn &&
            searchKey.indexOf(dpg.options.currentViewValues.searchKey as string)==0 &&
            dpg.options.totalItemsCount <= dpg.options.currentViewValues.count
        ){
            doJsSearch = true;
        }

        dpg.options.currentViewValues.searchIn = searchIn;
        dpg.options.currentViewValues.searchKey = searchKey;
        if(totalPages==1 || doJsSearch){
            jsTableSearch(dpg)
        }else{
            let query = makeLoadRequestParams(dpg.options);
            contentLoader(dpg,true);
            let resp = await sendPOSTRequest(query,dpg.options,"getInfoURL");
            if (resp) {
                dpg.options.totalItemsCount = resp.totalItemsCount??0;
                dpg.options.currentViewValues.pageNo = 1;
                loadPageAfterUpdateView(dpg);
            }
        }
    });
    searchBox.querySelector('form [name="'+dpg.options.dpParamKeys.searchKey+'"]')?.addEventListener('input', async function(e){
        let _thf = (e.target as HTMLInputElement);
        if(_thf.value.length==0){
            dpg.options.currentViewValues.searchIn = undefined;
            dpg.options.currentViewValues.searchKey = undefined;
            if(totalPages==1){
                jsTableSearch(dpg)
            }
            else{
                let query = makeLoadRequestParams(dpg.options);
                contentLoader(dpg,true);
                let resp = await sendPOSTRequest(query,dpg.options,"getInfoURL");
                if (resp) {
                    dpg.options.totalItemsCount = resp.totalItemsCount??0;
                    dpg.options.currentViewValues.pageNo = 1;
                    loadPageAfterUpdateView(dpg);
                }
            }
        }
    });

    //Sumbit Jump to Action
    pgSect.querySelector('.jump-to form')?.addEventListener('submit',function(e){
        let _no = (e.target as HTMLElement)?.querySelector('[name="jump-to-page"]');
        let no = parseInt((_no as HTMLInputElement).value);
        no = no<1?1:(no>totalPages?totalPages:no);
        (_no as HTMLInputElement).value = no.toString();
        dpg.options.currentViewValues.pageNo = no;
        loadPageAfterUpdateView(dpg);
    });
    
    let addNumberButtonEvent = function(e:HTMLElement){
        e.addEventListener('click',function(){
            dpg.options.currentViewValues.pageNo = parseInt(e?.closest(".number")?.getAttribute("data-page-number")??'');
            loadPageAfterUpdateView(dpg);
        });
    }

    let addMoreButtonEvent = function(e:HTMLElement){
        e.addEventListener('click',function(){
            let currentPage = dpg.options.currentViewValues.pageNo;
            let tps = totalPages.toString();
            let _tmr = e.closest(".number");
            let _pr = _tmr?.parentElement;
            let _prev = _tmr?.previousSibling as HTMLElement;
            let prev = parseInt(_prev.getAttribute("data-page-number")??'');
            let _next = _tmr?.nextSibling as HTMLElement;
            let next = parseInt(_next.getAttribute("data-page-number")??'');

            let _cpage = e.closest('.pagination')?.querySelector('[data-page-number="'+currentPage+'"]');

            let side = "";
            let count = 0;

            //on Left Side
            if(prev>=1 && next<=currentPage){
                side = "L";
                let _pcp:any = _cpage?.nextSibling as HTMLElement;
                let k = prev;
                while(_pcp){
                    let pn = _pcp.getAttribute('data-page-number');
                    if(pn==totalPages || k+1==next){
                        break;
                    }
                    _pcp?.remove();
                    _pcp = _cpage?.nextSibling;
                    count++;
                    k++;
                }
            }
            //on Right Side
            else if(prev>=currentPage && next>=totalPages){
                side = "R";
                let _pcp:any = _cpage?.previousSibling as HTMLElement;
                let k = prev;
                while(_pcp){
                    let pn = _pcp.getAttribute('data-page-number');
                    if(pn==1 || k+1==next){
                        break;
                    }
                    _pcp?.remove();
                    _pcp = _cpage?.previousSibling;
                    count++;
                    k++;
                }
            }
            if(count<(next-prev)){
                let _pcp:any = _prev?.previousSibling as HTMLElement;
                while(_pcp){
                    let pn:any = _pcp.getAttribute('data-page-number');
                    if(pn==1 || pn==currentPage || count==(next-prev)){
                        break;
                    }
                    _pcp?.remove();
                    _pcp = _prev?.previousSibling;
                    count++;
                }
            }
            if(count<(next-prev)){
                let _pcp:any = _next?.nextSibling as HTMLElement;
                while(_pcp){
                    let pn:any = _pcp.getAttribute('data-page-number');
                    if(pn==totalPages || pn==currentPage || count==(next-prev)){
                        break;
                    }
                    _pcp?.remove();
                    _pcp = _next?.nextSibling;
                    count++;
                }
            }
            let nbt:string[] = [];
            while(count>0 && prev<next){
                nbt.push(makePagerLI(++prev,dpg.options));
                count--;
            }
            _tmr?.insertAdjacentHTML("beforebegin",nbt.join(''));
            _tmr?.remove();
            let pages = [];
            let previous:string = "0";
            _pr?.querySelectorAll('.number').forEach(_p=>{
                let pn = _p.getAttribute('data-page-number');
                if(previous==pn){
                    _p.remove();
                }
                else{
                    let pnn = parseInt(pn as string);
                    if(isNaN(pnn)){
                        _p.remove();
                    }
                    else{
                        let prn = parseInt(previous);
                        if(prn+1!==pnn){
                            _p?.insertAdjacentHTML("beforebegin",makePagerLI((prn+2==pnn?prn+1:'...'),dpg.options));
                        }
                    }
                    pages.push(pnn)
                }
                previous = pn??"";
            });
            let ii = 0;
            while((_pr?.querySelectorAll('.number')?.length) as number>maxItems){
                _pr?.querySelectorAll('.number')?.forEach(_p=>{
                    let pn = _p.getAttribute('data-page-number');
                    if(pn=='...'){
                        let _k = _p?.previousSibling as HTMLElement;
                        let pn:any = _k?.getAttribute('data-page-number');
                        if(pn!=1 && pn!=currentPage && pn!=totalPages){
                            _k?.remove();
                        }
                    }
                });
                if(++ii>10)break;
            }
            previous= "0";
            _pr?.querySelectorAll('.number').forEach(_p=>{
                let pn = _p.getAttribute('data-page-number');
                if(previous=='...' && pn=='...'){
                    _p.remove();
                }
                previous = pn??"";
            });
            addEventsToButtons();
        });
    }

    let addEventsToButtons = function(){
        let next = pgElem?.querySelector('.page-next');
        let previous = pgElem?.querySelector('.page-previous');
        let jumpTo = pgSect.querySelector('.jump-to form [name="jump-to-page"]');
        next?.toggleAttribute('disabled',dpg.options.currentViewValues.pageNo==totalPages);
        previous?.toggleAttribute('disabled',dpg.options.currentViewValues.pageNo==1);
        if(jumpTo){
          (jumpTo as HTMLInputElement).value = dpg.options.currentViewValues.pageNo.toString();  
        }
        // Next
        next?.addEventListener('click',function(){
            if(!next?.hasAttribute('disabled')){
                dpg.options.currentViewValues.pageNo++;
                loadPageAfterUpdateView(dpg);
                eventNextClick(dpg);
            }
        });
        // Previous
        previous?.addEventListener('click',function(){
            if(!previous?.hasAttribute('disabled')){
                dpg.options.currentViewValues.pageNo--;
                loadPageAfterUpdateView(dpg);
                eventPreviousClick(dpg);
            }
        });
        pgElem?.querySelectorAll('a').forEach((ee:Element)=>{
            preventDefaultATag(ee as HTMLElement);
        });
        pgElem?.querySelectorAll('.pager .number.pageno>*').forEach((ee:Element)=>{
            addNumberButtonEvent(ee as HTMLElement);
        });
        pgElem?.querySelectorAll('.pager .number.loadmore>*').forEach((ee:Element)=>{
            addMoreButtonEvent(ee as HTMLElement);
        });
    } 
    
    // Count Update
    count?.addEventListener('change',function(e){
        dpg.options.currentViewValues.count = parseInt((e.target as HTMLSelectElement)?.value);
        let totalPages = Math.ceil(dpg.options.totalItemsCount/dpg.options.currentViewValues.count);
        if(dpg.options.currentViewValues.pageNo>totalPages)
            dpg.options.currentViewValues.pageNo = totalPages;
        eventCountChanged(dpg);
        loadPageAfterUpdateView(dpg);
    });
    //Sort Colums Header Click
    sortSel.forEach((e)=>{
        e?.addEventListener('click',function(){
            let pk = "data-property-key";
            let key = e.hasAttribute(pk) ? (e.getAttribute(pk)??"") : e.querySelector("["+pk+"]")?.getAttribute(pk)??"";
            let order = dpg.options.currentViewValues.orderByIn;
            order = order=='asc'? 'desc' : (order=='desc'?'asc':'asc');
            if(dpg.options.currentViewValues.orderBy!=key){
                order = 'asc';
            }
            dpg.options.currentViewValues.orderByIn = order;
            dpg.options.currentViewValues.orderBy = key;
            e.classList.add(order);
            e.classList.remove(order=="asc"?"desc":"asc");
            getSiblings(e).forEach((e)=>{
                let k = ["desc","asc"];
                e.classList.remove(...k);
            });
            if(dpg.options.totalItemsCount<=dpg.options.currentViewValues.count){
                sortTable(dpg);
            }
            else{
                if(dpg.options.fromStartOnSort){
                    dpg.options.currentViewValues.pageNo = 1;
                }
                loadPageAfterUpdateView(dpg);
            }
        });
    });

    //Client Parameters Listner
    dpgInputs.forEach((e)=>{
        e?.addEventListener('change',function(){
            if(!dpg.options.currentViewValues.userParams)
                dpg.options.currentViewValues.userParams={};
            dpg.options.currentViewValues.userParams[(e as HTMLInputElement).name] = (e as HTMLInputElement).value;
            if(dpg.options.userParamListner){
                loadPageAfterUpdateView(dpg);
            }
        });
    });
    addEventsToButtons();
    let cr_link_search = document?.location?.search;
    window?.addEventListener("popstate", function(ev){
        ev.preventDefault();
        if(cr_link_search!==document?.location?.search){
            cr_link_search=document?.location?.search;
            dpg.options = setOptionFromVars(dpg.options);
            loadPageAfterUpdateView(dpg,true);
        }
    });
    if(dpg.options.colorTheme=="auto"){
        window?.matchMedia('(prefers-color-scheme: dark)')?.addEventListener('change', event => {
            dpg.element.classList.toggle("theme-dark",(event.matches ? true : false));
        });
    }
    
}