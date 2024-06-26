export default function setCountComponent(fieldname:string,countsPerPage:number, totalItemsCount:number, countSelect:number[]){
    let search_sel = ``;

    countSelect.forEach(n=>{
        search_sel += `<option value="${n}" ${n==countsPerPage?' selected':''}>${n}</option>`;
    })
    
    return `<div class="set-view-count">`+
        `<select name="${fieldname}" class="lrs-dpf border no-bg no-outline">`+search_sel+`</select>`+
        `<span> Items per page.</span>`+
    `</div>`;
}