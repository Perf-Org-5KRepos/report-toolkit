(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var a=r("pOBw"),n=r("q1tI"),o=r.n(n),c=r("NmYn"),b=r.n(c),i=r("OKom"),l=r("a7k6"),p=r("TSYQ"),m=r.n(p),s=r("ecM3"),u=r("qKvR"),O=function(e){var t,r=e.title,a=e.tabs,n=void 0===a?[]:a;return Object(u.b)("div",{className:m()(s.pageHeader,(t={},t[s.withTabs]=n.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:s.text},r)))))},d=r("pEPl"),j=r("BAC9"),f=function(e){var t=e.relativePagePath,r=e.repository,a=d.data.site.siteMetadata.repository,n=r||a,o=n.baseUrl,c=n.subDirectory,b=o+"/edit/"+n.branch+c+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=(r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("RW0V"),r("Z2Ku"),r("L9s1"),r("INYr"),r("a1Th"),r("Btvt"),r("6VaU"),r("UPW5")),g=(r("f3/d"),r("Wbzz")),y=r("E7yi"),v=function(e){var t=e.previousItem,r=e.nextItem;return Object(u.b)("div",{className:y.wrapper},Object(u.b)("div",{className:y.linkContainer},t.to&&Object(u.b)(g.Link,{className:m()(y.link,y.firstLink),to:t.to},Object(u.b)("div",{className:y.direction},"Previous"),Object(u.b)("div",{className:y.name},t.name)),r.to&&Object(u.b)(g.Link,{className:m()(y.link,y.secondLink),to:r.to},Object(u.b)("div",{className:y.direction},"Next"),Object(u.b)("div",{className:y.name},r.name))))};function N(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(){var e=h.data,t=e.allNavItemsYaml.edges,r=e.site.pathPrefix;return[t.flatMap((function(e){var t=e.node;return t.pages.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{category:t.title})}))})),r]},I=function(e,t){return e+(t?": "+t:"")},P=function(e){var t=e.tabs,r=e.location,a=e.pageContext,n=void 0===a?{frontmatter:"Home"}:a,o=w(),c=o[0],i=o[1],l=function(e){return e.frontmatter.title?b()(e.frontmatter.title,{lower:!0}):"Home"}(n),p=r.pathname.replace(i,"").split("/").filter(Boolean),m=function(e){var t=e.tabs,r=e.location.pathname.split("/");if(!t)return{prevTabItem:null,nextTabItem:null};var a=t.map((function(e){var t=b()(e,{lower:!0}),a=r.filter((function(e){return e===t})).toString()===t;return{title:e,slug:t,currentTab:a}})),n=a.findIndex((function(e){return e.currentTab}));return{prevTabItem:a[n-1],nextTabItem:a[n+1]}}({currentTitle:l,location:r,tabs:t}),s=m.prevTabItem,O=m.nextTabItem,d=function(e){var t=e.tabs,r=e.location,a=w(),n=a[0],o=a[1],c=r.pathname.replace(o,""),b=t?c.replace(/\/[^/]*\/?$/,""):c.replace(/\/$/,""),i=n.findIndex((function(e){return e.path.includes(b)}));return{prevCategory:n[i-1],nextCategory:n[i+1],navIndex:i}}({location:r,tabs:t}),j=d.prevCategory,f=d.nextCategory,h=d.navIndex;return"Home"===l||c[h]?Object(u.b)(v,{previousItem:s?{to:"/"+[].concat(N(p.slice(0,-1)),[s.slug]).join("/"),name:I(c[h].title||c[h].category,s.title)}:j?{to:j.path,name:I(j.category,j.title)}:"Home"===l?{}:{to:"/",name:"Home"},nextItem:"Home"===l?{to:c[h].path,name:I(c[h].category,c[h].title)}:O&&O.slug?{to:"/"+[].concat(N(p.slice(0,-1)),[O.slug]).join("/"),name:I(c[h].title||c[h].category,O.title)}:f?{to:f.path,name:I(f.category,f.title)}:{}}):null},k=(r("Oyvg"),r("I8xM"));var T=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=b()(e,{lower:!0}),o=n===a,c=new RegExp(a+"(?!-)"),i=r.replace(c,n);return Object(u.b)("li",{key:e,className:m()((t={},t[k.selectedItem]=o,t),k.listItem)},Object(u.b)(g.Link,{className:k.link,to:""+i},e))}));return Object(u.b)("div",{className:k.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:k.list},n))))))},a}(o.a.Component),M=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,n=e.location,o=e.Title,c=t.frontmatter,p=void 0===c?{}:c,m=t.relativePagePath,s=t.titleType,d=p.tabs,j=p.title,h=p.theme,g=p.description,y=p.keywords,v=a.data.site.pathPrefix,N=v?n.pathname.replace(v,""):n.pathname,x=d?N.split("/").slice(-1)[0]||b()(d[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:d,homepage:!1,theme:h,pageTitle:j,pageDescription:g,pageKeywords:y,titleType:s},Object(u.b)(O,{title:o?Object(u.b)(o,null):j,label:"label",tabs:d}),d&&Object(u.b)(T,{slug:N,tabs:d,currentTab:x}),Object(u.b)(M.a,{padded:!0},r,Object(u.b)(f,{relativePagePath:m})),Object(u.b)(P,{pageContext:t,location:n,slug:N,tabs:d,currentTab:x}),Object(u.b)(i.a,null))}},UPW5:function(e){e.exports=JSON.parse('{"data":{"allNavItemsYaml":{"edges":[{"node":{"id":"0418868e-af0a-5a4f-bfa7-6777d7e3ee49","title":"Quick Start","pages":[{"title":"Quick Start","path":"/quick-start"}]}},{"node":{"id":"9ea2dcf5-7bbd-531d-9832-c7d68491c4ed","title":"API Docs","pages":[{"title":"API Docs","path":"/api"}]}}]},"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},fZEJ:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return s}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},i=b("Breadcrumb"),l=b("BreadcrumbItem"),p={_frontmatter:c},m=n.a;function s(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(m,o({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i,{noTrailingSlash:!0,mdxType:"Breadcrumb"},Object(a.b)(l,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"../../../../../../api"},"report-toolkit API")),Object(a.b)(l,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"../modules/common_diagnostic_report_d_"},'"common/diagnostic-report.d"')),Object(a.b)(l,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"common_diagnostic_report_d_.reportjsheap"},"ReportJSHeap"))),Object(a.b)("h2",null,"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ReportJSHeap"))),Object(a.b)("h2",null,"Index"),Object(a.b)("h3",null,"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportjsheap#availablememory"}),"availableMemory")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportjsheap#heapspaces"}),"heapSpaces")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportjsheap#memorylimit"}),"memoryLimit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportjsheap#totalcommittedmemory"}),"totalCommittedMemory")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportjsheap#totalmemory"}),"totalMemory")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportjsheap#usedmemory"}),"usedMemory"))),Object(a.b)("h2",null,"Properties"),Object(a.b)("h3",null,"availableMemory"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"availableMemory"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("hr",null),Object(a.b)("h3",null,"heapSpaces"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"heapSpaces"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"["," ",Object(a.b)("strong",{parentName:"li"},"key"),": ",Object(a.b)("em",{parentName:"li"},"string"),"]",": ",Object(a.b)("a",o({parentName:"li"},{href:"common_diagnostic_report_d_.reportheapspace"}),"ReportHeapSpace"))),Object(a.b)("hr",null),Object(a.b)("h3",null,"memoryLimit"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"memoryLimit"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("hr",null),Object(a.b)("h3",null,"totalCommittedMemory"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"totalCommittedMemory"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("hr",null),Object(a.b)("h3",null,"totalMemory"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"totalMemory"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("hr",null),Object(a.b)("h3",null,"usedMemory"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"usedMemory"),": ",Object(a.b)("em",{parentName:"p"},"number")))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/IBM/report-toolkit","subDirectory":"packages/docs","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')}}]);
//# sourceMappingURL=component---src-pages-api-interfaces-common-diagnostic-report-d-reportjsheap-mdx-c434a27758736ece062f.js.map