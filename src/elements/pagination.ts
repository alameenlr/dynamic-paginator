import { URLParts, currentViewPageValuesToURLParams, getLRSDPGElement, makeURLFromParams, splitURLParams } from "../functions";
import { DPOptions } from "../dp-types";
import DynamicPaginator from "../index";

export function makeMakeBt(template:string,pageNo:number, options:DPOptions, addUrl:boolean=true):string{
    let btUrl = "#";
    if(pageNo == -1) addUrl = false;
    if(addUrl){
        let url:URLParts = splitURLParams();
        let cvp = currentViewPageValuesToURLParams(options);
        cvp[options.dpParamKeys.pageNo] = pageNo;
        for(let k in cvp){
            url.gets[k] = cvp[k];
        }
        url.gets[options.dpParamKeys.pageNo] = pageNo;
        btUrl = makeURLFromParams(url);
    }
    let content = template.replace(/\{\{url\}\}/gm,btUrl);
    content = content.replace(/\{\{pageNo\}\}/gm,pageNo.toString());
    
    if(pageNo==options.currentViewValues.pageNo){
        let _d = document.createElement('div');
        _d.innerHTML = content;
        _d.firstElementChild?.classList.add("active");
        content = _d.innerHTML;
    }
    return content;
}

export function makePagerLI(pn:any, options:DPOptions, addClass:string=""):string{
    let pgb = options.paginationBlock;
    return `<li class="number ${(pn=="..."?"loadmore":"pageno")+' '+addClass}" data-page-number="${pn}">`+
        (pn=='...'?
            makeMakeBt(pgb.template.more, -1, options,false):
            makeMakeBt(pgb.template.pageNumber, pn, options)
        )+ 
    `</li>`
}

export function generatePageNumbers(totalPages:number, currentPage:number, maxItems:number): any[]{
    let nums:any[] = [];
    let left = [];
    let right = [];
    let delta = Math.floor(maxItems/2)-2;
    let i=0;let k=0;
    // Left
    for(i=currentPage-1; i>1 && k<delta;i--,k++)
        left.unshift(i);
    
    // Right
    for(i=currentPage+1,k=0; i<totalPages && k<delta;i++,k++)
        right.push(i);
    
    let delta_fill = (delta*2)-right.length-left.length;
    if(delta_fill>0){
        if(right.length<delta){
            for(i=left[0]-1,k=0; i>1 && k<delta_fill;i--,k++)
                left.unshift(i);
        }
        else if(left.length<delta){
            for(i=right[right.length-1]+1,k=0; i<totalPages && k<delta_fill;i++,k++)
                right.push(i);
        }
    }
    
    nums = (
        currentPage==1||currentPage==totalPages?
        left.concat(right):
        left.concat([currentPage], right)
    );
    if(currentPage==1 && nums.length>0){
        let t1 = nums[nums.length-1]+1;
        if(totalPages!=t1)
            nums.push(t1);
    }
    else if(currentPage==totalPages){
        let t1 = nums[0]-1;
        if(t1!=1)
            nums.unshift(t1);
    }
    
    //Prepending Start
        if(nums[0] - 1>=2){
            if(totalPages - nums[nums.length-1]>=2){
                nums.shift();
            }
            nums.unshift("...");
        }
        else if(nums[0] - 1>1){
            nums.unshift(nums[0]-1);
        } 
        nums.unshift(1);
    let nli = nums.length-1;
    //Appending Start
        if(totalPages - nums[nli]>=2){
            nums.push("...");
        }
        else if(totalPages - nums[nli]>1){
            nums.push(nums[nli]+1);
        }
        if(totalPages>1)
            nums.push(totalPages);
    
    return nums;

}

export function setJumpToComponentView(dpg:DynamicPaginator){
    let pgSec = getLRSDPGElement("pagination",dpg);
    let totalPages = Math.ceil(dpg.options.totalItemsCount/dpg.options.currentViewValues.count);
    let show = totalPages==1 && dpg.options.paginationBlock.hideOnSinglePage==true;
    pgSec.querySelector(".jump-to")?.classList.toggle("d-none",show);
}

export function jumpToComponent(options:DPOptions):string{
    let totalPages = Math.ceil(options.totalItemsCount/options.currentViewValues.count);
    if(totalPages==1 && options.paginationBlock.hideOnSinglePage==true)
        return "";
    return options.paginationBlock.jumpTo?
    `<div class="jump-to">`+options.paginationBlock.template.jumpTo+`</div>`
    :"";
}

export default function paginationComponent(options:DPOptions):string{
    let pgb = options.paginationBlock;
    let totalPages = Math.ceil(options.totalItemsCount/options.currentViewValues.count);
    if(totalPages==1 && pgb.hideOnSinglePage==true)
        return "";
    let currentPage = options.currentViewValues.pageNo;
    let maxItems = options.maxPagerNumbers;
    let pnumbers:any[]= generatePageNumbers(totalPages,currentPage,maxItems);

    let previous = makeMakeBt(pgb.template.previous, currentPage==1?-1:currentPage-1, options);
    let next = makeMakeBt(pgb.template.next, currentPage==totalPages?-1:currentPage+1, options);
    let pager = `<ul class="pager">`+pnumbers.map(pn=>(makePagerLI(pn,options))).join('')+`</ul>`;
    
    return `<div class="pagination${options.paginationBlock.template.background==false?" dpg-no-bg":""}">`+
            previous+
            pager+
            next+
    `</div>`;
}

