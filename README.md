
# Dynamic Paginator - Fast AJAX Paginator
##### Listing in a Table
![Listing in a Table](https://raw.githubusercontent.com/alameenlr/dynamic-paginator/main/rmd-imgs/table.gif)
##### Custom Listing
![Custom Listing](https://raw.githubusercontent.com/alameenlr/dynamic-paginator/main/rmd-imgs/cats.gif)
Dynamic Paginator, or DynamicPaginator is a vanilla JavaScript Library, no additional frameworks required. It is fast library to do pagination in your web applications. DynamicPaginator needs only *total items count*, *counts per page* and *data URL* to fetch the data, It will generate a pagination view for you. You can use custom templates, styles suitable for your Purpose.

https://github.com/alameenlr/dynamic-paginator

# Basic usage
### Installation
**Via npm:**

Run in your console: `npm install dynamic-paginator`

, and Attach paginator style`dynamic-paginator.css` to the view page:

```html
<link  rel="stylesheet"  href="//cdn.jsdelivr.net/npm/medium-editor@latest/dist/dynamic-paginator.css"  type="text/css"  media="screen"  charset="utf-8">
```

**Via an external CDN**
* Using [jsDelivr](http://www.jsdelivr.com/#!medium-editor).

For the latest version:

```html
<script  src="https://cdn.jsdelivr.net/gh/alameenlr/dynamic-paginator@latest/dist/dynamic-paginator.min.js"></script>

```
For a custom one:
```html
<script  src="https://cdn.jsdelivr.net/gh/alameenlr/dynamic-paginator@1.0.0/dist/dynamic-paginator.min.js"></script>
```

### Basic Usage
The next step is to reference the dynamic-paginator's script
```html
<script  src="js/dynamic-paginator.min.js"></script>
...
<body>
	<div  id="dynamic-paginate-elm"></div>
	...
</div>
```

You can now instantiate a new DynamicPaginator object:
```javascript
var dpOption = {
	search:false,
	loadListURL:"http://127.0.0.1:8000/invoices/list",
	itemProperties:[
		{"key":"id", "label":"Id"},
		{"key":"name", "label":"Name"},
		{"key":"emailid", "label":"Email Address"},
		{"key":"address", "label":"Address"},
		{"key":"date", "label":"Date"},
		{"key":"phone_number", "label":"Phone No"}
	],
	indexedItemPropertiesKeys:["id","name","emailid","address","phone_number"],
	items:[],
	totalItemsCount:10000,
	countsPerPage:10,
	currentViewValues:{
		pageNo:1
	},
	paginationBlock:{
		jumpTo:true
	},
	userParamListner:false,
}
let  element = document.getElementById("dynamic-paginate-elm");
var pg_list = new  DynamicPaginator(element ,dpOption);
```
**or,** 
You can also pass a list of HTML elements:
```javascript
var pg_list = new  MediumEditor("#dynamic-paginate-elm",dpOption);
```
The above code will create a full pagination element based on the `viewTemplate`, you can customize the view template.

##### Integrating pagination with back-end
`loadListURL` - DynamicPaginator will send a `POST` with `content-type: application/x-www-form-urlencoded` request for every user request. It will reduce loading time save your server bandwidth.

*Request Body:*
```javascript
//This is a sample in JSON, actual request is x-www-form-urlencoded
{
	"page-no":20,
	"offset":190,
	"count":10,
	"order-by":"name",
	"order-by-in":"asc",
}
```
## Dynamic Paginator  Options
  
Options to customize dynamic-paginator are passed as the second argument to the DynamicPaginator constructor.
Example:
```js
var paginator = new DynamicPaginator('#pagination-content', {
    // search
    // colorTheme
    // getInfoURL
    // loadListURL
    // httpRequestHeaders
    // itemProperties
    // indexedItemPropertiesKeys
    // items
    // maxPagerNumbers
    // totalItemsCount
    // setCountsPerPage
    // pushToHistory
    // showViewingStatus
    // currentViewValues
    // fromStartOnSort
    // dpParamKeys
    // clientSideSearch
    // clientSideSearchFormat
    // userParamListner

    /* -------------- MANAGING PAGINATOR VIEW ELEMENTS -------------------- */

    // viewTemplate
    // paginationBlock
    // pageContentLoader
    // makeItemPropertyLabel
    // makeItem
    // makeViewingStatus
    // makeSearchBox
    // makeCountSelection
});
```
**Options Description**

 - `search`: `false|object`
Default:`{"placeholder":"Search"}`, `false` means search option is disabled.
 - `colorTheme`: `auto|dark|light`
Default:`auto`, `auto` The color-appearance will be based on user theme preference.
 - `getInfoURL`: `string`
Default:`null`, URL to load the content, **Response** of the content must be `JSON Object` with the keys of DynamicPaginator's **Option**. DynamicPaginator will set the option based on the response from this URL. You must add an URL if You want to enable search.

	*Request Body Sample:*
	```javascript
	//Shown in JSON Object actual request body is x-www-form-urlencoded
	{
		"page-no"		: 10,
		"offset"		: 180
		"count"			: 20,
		"order-by"		: "{{Selected Indexted Item Property to Sort}}",
		"order-by-in"	: "asc || desc",
		"search-in"		: "{{Selected Indexted Item Property to Search}}",
		"search-key"	: "{{Key to Perform Search}}",
		"dp-inputs"		: {
			// Client Side Inputs fields with class (dynamic-paginator-input)
			// for more view the sample file(s)
		},
	}
	```
 - `loadListURL`: `string`
Default:`null`, URL to load the content, Response of the content must be `JSON` array.
*Request Body Sample:*
	```javascript
	//Shown in JSON Object actual request body is x-www-form-urlencoded
	{
		"page-no"		: 10,
		"offset"		: 180
		"count"			: 20,
		"order-by"		: "{{Selected Indexted Item Property to Sort}}",
		"order-by-in"	: "asc || desc",
		"search-in"		: "{{Selected Indexted Item Property to Search}}",
		"search-key"	: "{{Key to Perform Search}}",
		"dp-inputs"		: {
			// Client Side Inputs fields with class (dynamic-paginator-input)
			// for more view the sample file(s)
		},
	}
	```
	Response Body Sample:
	``` javascript
	// Response in JSON array of Object with key Items.
	[
		{
			"productName": "XY Air Conditioner"
			"productId": 15457642351,
			...
		},
		{
			"productName": "XY LED Telivision"
			"productId": 14542346446,
			...
		}
		...
	]
	```

 - `httpRequestHeaders`:`Object{}`
You can add custom headers to append the `POST` request(s) send by DynamicPaginator.
Eg: `httpRequestHeaders:{'X-CSRF-TOKEN':  "EWhAhSaA6wFEmtOk33ZTMqn0uwuMzHWEnbxgRegO"}`
- `itemProperties`:`string[]`
List the Item properties here. If you are printing list of students, then `name, age, id, address, etc..` are the properties of the list.
- `indexedItemPropertiesKeys`:`string[]`
List the indexed item properties here. Properties are key fields to *sort*, or *search* the items in the list.
- `items`:`Object[]`
List of items to paginate. You can Load it from URL. `loadListURL` Response will set as value of `items`.
- `maxPagerNumbers`:`integer`
Default:`10`, How many page-navigator button shown in pagination section.  You can set the size as you needed.
`maxPagerNumbers:8` will generate pagination block like this `<< 1 2 3 8 ... 10 >>`
- `totalItemsCount`:`integer`
Default:`0`, How many items in the list to paginate.
- `setCountsPerPage`:`integer[]`
Default: `[10,20,50,100,250,500,1000]`, Set count select option values to set maximum items per page.
- `pushToHistory`:`boolean`
Default: `true`, If it is true then, any input changed to set the pageview will be added to browser history. If the your *go-back* the view automatically changed to previous view.
- `showViewingStatus`:`boolean`
Default: `true`, If it is true then, Page viewing status will be added on `{{viewingStatus}}` section in  `viewTemplate`. You can customize the viewing status set `makeViewingStatus` function.
- `currentViewValues`:`Object{}`
Default: `{pageNo:1,count:10}`, Set current page view status of paginator.
	```javascript
	{
		pageNo		:  1,		// number
		count		:  10,		// number
		orderBy		:  "",		// string
		orderByIn	:  "asc",	// string asc, or desc
		searchIn	:  "",		// string
		searchKey	:  "",		// string
		userParams	:  {},		// Object
	}
	```
- `fromStartOnSort`:`boolean`
Default: `true`, If it is true then, View will be jumped to `1st` page while sorted.
- `dpParamKeys`:`{}`
Default value shown here, This will the parameter names of `historyPush` URI, `POST` Request body of `getInfoURL`, and `loadListURL`.
	```javascript
	{
		pageNo		:  "page-no",		// string
		count		:  "count",			// string
		orderBy		:  "order-by",		// string
		orderByIn	:  "order-by-in",	// string asc, or desc
		searchIn	:  "search-in",		// string
		searchKey	:  "search-key",	// string
		userParams	:  "dp-inputs",		// Object
	}
	```
- `clientSideSearch`:`boolean`
Default: `true`,  If it is `true`  and  `totalItemsCount < currentViewValues.count` then the searching will be  done in the client side. Using JavaScript `RegExp` with the pattern  given in `clientSideSearchFormat`.
- `clientSideSearchFormat`:`string`
Default: `%{{search-key}}%`, `%`- represents any characters. `{{search-key}}` the key will placed here. For example, you can do the search start with the key, like this `{{search-key}}%`.
- `userParamListner`: `boolean`
Default: `true`,  If it is `true` then, The page view will reloaded with new updated parameter(s).

#### Managing Paginator View Elements
- `viewTemplate`: `string`
You can set the pagination block template as per your use case. Default template uses *bootstrap* template
Default value shown here.
	```html
	<div class="d-flex w-100 justify-content-between py-2">
		<div>{{searchBox}}</div>
		<div>{{countsPerPage}}</div>
	</div>
	<table class="w-100">
		<thead>
			<tr>{{propertiesLabel}}</tr>
		</thead>
		<tbody>{{itemsList}}</tbody>
	</table>
	<div class="d-flex w-100 justify-content-between py-2">
		<div class="show-status">{{viewingStatus}}</div>
		<div>{{paginationContent}}</div>
	</div>
	```
- `paginationBlock`: `Object{}`
    You can customize the component(s) of pagination block of Paginated element.
	- `hideOnSinglePage`: `boolean` when the pagination block is hidden when if total pages count is 1.
	- `jumpTo`: `boolean` Enable or, Disable Jump to section in pagination block.
	- `size`: `default || large` Pagination block size.
	- `template`: `Object{}` content element templates of pagination block.
			:warning: *Don't forget to keep the variable section `{{url}}`,  `{{pageNo}}` in the elements.*
		- `pageNumber`: `string` Template of `page-number` button element.  
		- `previous`: `string` Template of `previous` button element.
		- `next`: `string` Template of `next` button element.
		- `more`: `string` Template of `more` button element.
		- `jumpTo`: `string` Template of `jumpTo` section content.
	```javascript
    // This is default
	{
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
	        background:false,
	    }
	}
	```
- `pageContentLoader`: `string`
	Dynamic paginator have a default loader content if you can set a new loader here. `HTMLText`
- `makeItemPropertyLabel`: `function(property, isIndexed, sorted):string{}`
    DynamicPaginator will iterate this function to generate item label like table head.
	- `property`: `Object{key,label}` List item property .
		- `key`: `string` key of the item Property.
		- `label`: `string` label of the item Property (display name).
	- `isIndexed`: `boolean` If it is in the list `indexedItemPropertiesKeys`.
	- `sorted`: `false | "asc" | "desc"` It is not sorted by on `this` key then `false`
	```javascript
	// This is default
	function(property, isIndexed, sorted){
		if(isIndexed)
			return  `<th tabindex="0" role="columnheader button" data-property-key="${property.key}" class="head-sort${sorted?' '+sorted:''}"${sorted?` title=" Sort `+(sorted=="asc"?"descending":"ascending")+`"`:''}>${property.label}</th>`;
		return  `<th data-property-key="${property.key}">${property.label}</th>`;
	}
	```
- `makeItem`: `function(item, itemProperties, searchedIndex="", searchedKey="", itemIndex, showItemNumber):string {}`
	DynamicPaginator will iterate this function to generate items list.
	- `item`: `Object{}` Item from `loadListURL` response.
	- `itemProperties`: `string[]` Items properties defined in DynamicPaginator.
	- `searchedIndex`: `string[]` Which property key is used to sort the view page.
	- `searchedKey`: `string[]` Search key.
	- `itemIndex`: `integer` Index of item.
	- `showItemNumber`: `boolean` Add item number.
    ```javascript
    // This is default
    function (item, itemProperties, searchedIndex="", searchedKey=""){
        let escapeQuotes = (str) => str?.toString().replace(/[\"]/gm, "&quot;").replace(/[\']/gm, "&apos;");
        let searchMatch = (content)=>{
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
    }
    ```
- `makeViewingStatus`: `function(pageno, countsPerPage, totalItemsCount):string {}`
    Customize viewing status Text. This will set content in `{{viewingStatus}}` Section.
    - `pageno`: `number` Current page number.
	- `countsPerPage`: `number` Items count per page.
	- `totalItemsCount`: `number` Total number of items.
    ```javascript
    // This is default
    function (pageno, countsPerPage, totalItemsCount){
        //Showing 1 to 10 of 52 entries
        if(totalItemsCount==0)
            return "0 entries"
        let to = pageno*countsPerPage;
        let from = to-countsPerPage+1;
        return `Showing ${from} to ${to>totalItemsCount?totalItemsCount:to} of ${totalItemsCount} entries`;
    }
    ```
- `makeSearchBox`: `function(option):string {}`
    Set search box element. This will set content in `{{searchBox}}` section in `viewTemplate`.
    - `option`: `Object{}` Dynamic Paginator Option.
    ```javascript
    // This is default
    function (options){
        let search_sel = ``;
        options.itemProperties.forEach(p=>{
            search_sel += (options.indexedItemPropertiesKeys.indexOf(p.key)>-1?`<option value="${p.key}" ${options.currentViewValues.searchIn==p.key?' selected':''}>${p.label}</option>`:``);
        })
        return `<form action="#">`+
            `<div class="d-flex border search-box">`+
                (search_sel.length>0?`<select name="${options.dpParamKeys.searchIn}" class="no-border no-outline no-bg">`+search_sel+`</select>`:``)+
                `<input type="text" name="${options.dpParamKeys.searchKey}" placeholder="${options.search.placeholder}" class="lrs-dpf no-border no-outline no-bg">`+
                `<button type="submit" class="no-border no-outline no-bg"><svg width="18" height="14" style="fill:currentColor;opacity:0.3;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>`+
            `</div>`+
        `</form>`;
    }
    ```
- `makeCountSelection`: `function(fieldname,countsPerPage, totalItemsCount, countSelect):string {}`
    Customize viewing status Text. This will set content in `{{countsPerPage}}` Section.
    - `fieldname`: `string`, Name of select field.
    - `countsPerPage`: `number`, Number of list items in a page.
    - `totalItemsCount`: `number`, Number of items in the list.
    - `countSelect`: `number[]`, List allowed items-count in a page.
    ```javascript
    // This is default
    function (fieldname, countsPerPage, totalItemsCount, countSelect){
        let search_sel = ``;
        countSelect.forEach(n=>{
            search_sel += `<option value="${n}" ${n==countsPerPage?' selected':''}>${n}</option>`;
        })
        return `<div class="set-view-count">`+
            `<select name="${fieldname}" class="lrs-dpf border no-bg no-outline">`+search_sel+`</select>`+
            `<span> Items per page.</span>`+
        `</div>`;
    }
    ```
