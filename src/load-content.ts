import DynamicPaginator from "./index";
import { getLRSDPGElement, makeLoadRequestParams, sendPOSTRequest } from "./functions";
import { eventPageLoaded } from "./event-triggers";

export function upadateViewingStatus(
    dpg:DynamicPaginator,
    pageNo:number=dpg.options.currentViewValues.pageNo,
    count:number=dpg.options.currentViewValues.count,
    total:number=dpg.options.totalItemsCount
){
    let _vs = getLRSDPGElement("viewing-status",dpg);
    _vs.innerHTML = dpg.options.makeViewingStatus(pageNo,count,total);
}

export function contentLoader(dpg:DynamicPaginator,show:boolean){
    let _ls = getLRSDPGElement("items-list",dpg);
    if(show){
        if(_ls.parentElement?.getElementsByClassName('lrs-dpg-content-loader').length==0){
            let loader = document.createElement("div");
            loader.innerHTML = dpg.options.pageContentLoader;
            let h = _ls?.offsetHeight;
            loader.style.height = h+'px';
            loader.style.width = _ls?.offsetWidth+'px';
            if(h==0){
                _ls.classList.add('null-loader');
            }
            loader.classList.add("lrs-dpg-content-loader");
            _ls?.insertAdjacentElement("beforebegin",loader);
        }
    }
    else{
        _ls.classList.remove('null-loader');
        _ls.parentElement?.querySelectorAll('.lrs-dpg-content-loader').forEach(e=>e.remove());
    }
}

// Loading Content
export async function loadPage(dpg:DynamicPaginator){
    let _ls = getLRSDPGElement("items-list",dpg);
    contentLoader(dpg,true);
    let query = makeLoadRequestParams(dpg.options);
    let resp = await sendPOSTRequest(query,dpg.options,"loadListURL")
    contentLoader(dpg,false);
    try{
        if(Array.isArray(resp)){
            _ls.innerHTML = resp.map((e,i)=>dpg.options.makeItem(
                e,
                dpg.options.itemProperties,
                (dpg.options.currentViewValues.searchIn??""),
                (dpg.options.currentViewValues.searchKey??""),
                ((dpg.options.currentViewValues.pageNo-1)*dpg.options.currentViewValues.count)+i,
                dpg.options.itemsNumber==false?false:true
            )).join("");
            upadateViewingStatus(dpg);
            eventPageLoaded(dpg);
        }
        else{
            throw "Response is not an array Object";
        }
    }catch(e){
        console.error("Unable to fetch the data from loadListURL:"+dpg.options.loadListURL,e);
        console.log("Response Must be in Array.");
    }
}