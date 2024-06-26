
import httpQueryString from "../node_modules/http-query-string/index";
import { currentViewValueKeys, defaultOption } from "./default-dp-options";
import DynamicPaginator from "./index";
import { CurrentViewPageValues, DPOptions, KeyValue, LRSDP_ParamsKeys } from "./dp-types";
import { upadateViewingStatus } from "./load-content";

export type URLParts = {
    ref:string;
    gets:KeyValue;
}

export function dpOptionFilter(obj:any, def:any){
    if(Array.isArray(obj)){
        return obj.length>0?obj:(def.length==0?obj:def);
    }
    else if(Object.keys(def).length == 0){
        return obj;
    }
    for(let k in def){
        if(obj.hasOwnProperty(k)){
            if(typeof def[k]=='object')
                def[k] = dpOptionFilter(obj[k], def[k]);
            else
                def[k] = obj[k];
        }
    }
    return def;
}

export function makeSearchRegEx(key:string,rexFormat:string = "{{search-key}}%"):RegExp{
    key = key.replace(/\%/gi,"!%");
    rexFormat = rexFormat.replace(/\{\{search-key\}\}/gm,key);
    rexFormat = rexFormat.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    rexFormat = rexFormat.replace(/([^\!])%/gm,"$1.*");
    if(rexFormat[0]!="%")
        rexFormat = "^"+rexFormat;
    if(rexFormat[rexFormat.length-1]!="*")
        rexFormat += "$";
    rexFormat = rexFormat.replace(/\!\%/gm,"%");
    return new RegExp(rexFormat,"giu");
}

export function splitURLParams(url?:string): URLParts{
    let ret:URLParts = {
        ref : "",
        gets: {}
    }
    url = url?url:window.location.href;
    let parts = url.split('?');
    let gets = parts.length>1?parts.pop():'';
    ret.ref = parts[0];

    if(gets!=''){
        ret.gets = httpQueryString.parse(gets as string);
    }
    return ret;
}

export function makeURLFromParams(uparms:URLParts): string{
    let ret:string = uparms.ref;
    let gets:string = httpQueryString.stringify(uparms.gets);
    return ret+(gets.length>0?'?'+gets:'');
}

export function getLRSDPGElement(name:string,dpg:DynamicPaginator):HTMLElement{
    return dpg.element.querySelector('[data-lrs-dpg-elm="'+name+'"]') as HTMLElement;
}

export function createHTElement(hyperText:string):HTMLElement{
    let tel = document.createElement('div');
    tel.innerHTML = hyperText;
    return tel.firstChild as HTMLElement;
}

export function currentViewPageValuesToURLParams(options:DPOptions):KeyValue{
    let kv:KeyValue = {};
    let cvv = options.currentViewValues;
    for(let k in cvv){
        let tmp = options.dpParamKeys[k as keyof LRSDP_ParamsKeys] as string;
        if(k=="userParams"){
            let keyVal:any = cvv[k as keyof CurrentViewPageValues];
            keyVal = JSON.stringify(keyVal);
            keyVal = btoa(keyVal)
            kv[tmp] = keyVal;
        }else{
            kv[tmp] = cvv[k as keyof CurrentViewPageValues];
        }
    }
    return kv;
}

export function setParamsInElement(dpg:DynamicPaginator){
    for(let k in dpg.options.currentViewValues){
        if(k!="userParams"){
            let el = dpg.element.querySelector('[name="'+dpg.options.dpParamKeys[k as keyof LRSDP_ParamsKeys]+'"]');
            if((el as HTMLInputElement))
                (el as HTMLInputElement).value = (dpg.options.currentViewValues[k as keyof CurrentViewPageValues]??"").toString();
        }
    }
}

export function setUserParamsInElement(dpg:DynamicPaginator){
    for(let k in dpg.options.currentViewValues.userParams){
        let el = dpg.element.querySelector('.dynamic-paginator-input[name="'+k+'"]');
        (el as HTMLInputElement).value = dpg.options.currentViewValues.userParams[k];
    }
}

export function makeLoadRequestParams(options:DPOptions):KeyValue{
    let kv:KeyValue = {};
    let cvv = options.currentViewValues;
    for(let k in cvv){
        let tmp = options.dpParamKeys[k as keyof LRSDP_ParamsKeys] as string;
        kv[tmp] = cvv[k as keyof LRSDP_ParamsKeys];
    }

    kv["offset"] = (cvv.pageNo*cvv.count)-cvv.count;
    return kv;
}

export function urlParamsToCurrentViewPageValues(gets:KeyValue,options:DPOptions):KeyValue{
    let kv:KeyValue = options.currentViewValues;
    for(let k of currentViewValueKeys){
        let tmp = options.dpParamKeys[k as keyof LRSDP_ParamsKeys] as string;
        if(gets[tmp]){
            if(k=="userParams"){
                let keyVal:any = atob(gets[tmp]);
                keyVal = JSON.parse(keyVal);
                kv[k] = keyVal as KeyValue;
            }else{
                let getType = typeof options.currentViewValues[k as keyof CurrentViewPageValues];
                if(getType=="number"){
                    kv[k as keyof CurrentViewPageValues] = (parseInt(gets[tmp])??0);
                }
                else{
                    kv[k as keyof CurrentViewPageValues] = gets[tmp];
                }
            }
        }
    }
    return kv;
}

export function setOptionFromVars(options:DPOptions,url?:string): DPOptions{
    options.currentViewValues.count = options.currentViewValues.count??defaultOption.currentViewValues.count;
    if(options.pushToHistory){
        let url:URLParts = splitURLParams();
        options.currentViewValues = urlParamsToCurrentViewPageValues(url.gets as KeyValue,options) as CurrentViewPageValues;
    }
    return options;
}

export function generateSortImageURL(sort:false|"asc"|"desc",themeisDark: boolean):string{
    let svg = {pt:"",o:"1",c:"#333333"};
    if(themeisDark){
        svg.c = "#d4d4d4";
    }
    if(sort==false){
        svg.pt = "M4.4 9.8h15.2c.3 0 .6 0 .8-.3.2-.2.3-.5.3-.8s0-.5-.3-.7L12.8.3c-.3-.2-.5-.3-.8-.3s-.5.1-.8.3L3.6 8a1 1 0 0 0-.3.7c0 .3 0 .6.3.8.2.2.5.3.8.3zm15.2 4.4H4.4a1 1 0 0 0-.8.3c-.2.2-.3.5-.3.8s0 .5.3.7l7.6 7.7c.3.2.5.3.8.3s.5-.1.8-.3l7.6-7.7c.2-.2.3-.4.3-.7s0-.6-.3-.8a1 1 0 0 0-.8-.3z";
        svg.o = "0.3";
    }
    else if(sort=="asc"){
        svg.pt = "M4.4 17h15.2c.3 0 .6-.2.8-.4.2-.2.3-.5.3-.8a1 1 0 0 0-.3-.8l-7.6-7.6c-.3-.2-.5-.3-.8-.3s-.5.1-.8.3l-7.6 7.7a1 1 0 0 0-.3.7c0 .3 0 .6.3.8.2.2.5.3.8.3z";
    }
    else if(sort=="desc"){
        svg.pt = "M19.6 7H4.4a1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8s0 .5.3.8l7.6 7.6c.3.2.5.3.8.3s.5-.1.8-.3l7.6-7.7c.2-.2.3-.4.3-.7s0-.6-.3-.8a1 1 0 0 0-.8-.3z";
    }
    if(svg.pt!=""){
        return "url(\"data:image/svg+xml,"+
            encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" xml:space="preserve"><path fill="${svg.c}" fill-opacity="${svg.o}" d="${svg.pt}"/></svg>`)+
        "\")";
    }
    return "none";
}

export function getSiblings(a:any):HTMLElement[]{
    let result:HTMLElement[] = [],
    node = a.parentNode.firstChild;

    while ( node ) {
        if ( node !== a && node.nodeType === Node.ELEMENT_NODE ) 
        result.push( node );
        node = node.nextElementSibling || node.nextSibling;
    }
    return result;
}

export function sortTable(dpg:DynamicPaginator){
    let isInt = true;
    let e_Sel = '[data-lrs-dpg-elm="items-list"]';
    let d_Key = '[data-key="'+dpg.options.currentViewValues.orderBy+'"]';
    let listParent = dpg.element.querySelector(e_Sel);
    let listItems = dpg.element.querySelectorAll(e_Sel+">*");
    let _nel = document.createElement((listParent?.tagName)??"div");

    type ValKey = {
        p:number;
        v:any;
    };
    let key_vals:ValKey[] = [];
    listItems.forEach((e,i)=>{
        let _v = e.querySelector(d_Key);
        let v:any = (_v?.getAttribute('data-value')??_v?.textContent)??"";
        v = (isInt && !isNaN(parseFloat(v)))?parseFloat(v):v.toLowerCase();
        key_vals.push({
            p:i,
            v:v
        })
    })
    let sortIt =  (arr:ValKey[],order:string):ValKey[] => {
        if(order=="desc"){
            return arr.sort((x,y)=>(x.v > y.v?-1:(x.v < y.v)?1:0));
        }
        else{
            return arr.sort((x,y)=>(x.v < y.v?-1:(x.v > y.v)?1:0));
        }
    };
    key_vals = sortIt(key_vals,dpg.options.currentViewValues.orderByIn??"asc");
    key_vals.forEach(v=>{
        _nel.appendChild(listItems[v.p])
    });

    (listParent as Element).innerHTML = _nel.innerHTML;
    _nel.remove();
    listParent?.setAttribute("data-sorted-on",dpg.options.currentViewValues.orderBy??"");
    
}

export function jsTableSearch(dpg:DynamicPaginator){
    let cvv = dpg.options.currentViewValues;
    let e_Sel = '[data-lrs-dpg-elm="items-list"]';
    let listParent = dpg.element.querySelector(e_Sel);
    let listItems = dpg.element.querySelectorAll(e_Sel+">*");
    if(cvv.searchKey){
        //If Search in Setted(Condition 0 Indexed Columns)
        let searchIn = dpg.options.currentViewValues.searchIn??dpg.options.itemProperties[0].key;
        let getVal = (e:Element)=>((e?.getAttribute('data-value')??e?.textContent)??"");
        let d_Key = '[data-key="'+searchIn+'"]';
        let _nel = document.createElement((listParent?.tagName)??"div");
        let searchRex = makeSearchRegEx(cvv.searchKey??"",dpg.options.clientSideSearchFormat);
        let matchRex = new RegExp("("+cvv.searchKey.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")+")","gui");
        let count = 0;
        listItems.forEach((e)=>{
            (e as HTMLElement).style.removeProperty("display");
            e?.querySelectorAll('.search-match').forEach(el=>{
                el.insertAdjacentHTML("beforebegin",el.innerHTML);
                el.remove();
            });
            let _v = e.querySelector(d_Key);
            let v:any = getVal(_v as Element);

            if(searchRex.test(v)){
                e?.querySelectorAll('[data-key]').forEach(ve=>{
                    let key = ve.getAttribute('data-key') as string;
                    if(ve.textContent){
                        ve.innerHTML = ve.innerHTML?.replace(matchRex,"<span class='search-match'>$1</span>");
                    }
                });
                count++;
            }
            else{
                (e as HTMLElement).style.display="none";
            }
        })
        upadateViewingStatus(dpg,1,count,count);
    }
    else{
        listItems.forEach((e)=>{
            e?.querySelectorAll('.search-match').forEach(el=>{
                el.insertAdjacentHTML("beforebegin",el.innerHTML);
                el.remove();
            });
            (e as HTMLElement).style.removeProperty("display");
        })
        upadateViewingStatus(dpg);
    }
}

export async function sendPOSTRequest(query:KeyValue,options:DPOptions,url: keyof DPOptions){
    let content = httpQueryString.stringify(query);
    let headers:KeyValue = {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'};
    for(let k in options.httpRequestHeaders){
        headers[k] = options.httpRequestHeaders[k];  
    }
    let reqUrl:string = (options[url]??"") as string;
    if(reqUrl==""){
        console.error("Request URL is Empty:"+url);
        return;
    }
    const response = await fetch(reqUrl, {
        method: 'POST',
        body: content,
        headers: headers
    });
    
    if (response.ok) {
        try{
            let resp = await response.json();
            return resp;
        }catch(e){
            console.error("Unable to fetch the data from "+url+":"+options[url],e);
        }
    }
}