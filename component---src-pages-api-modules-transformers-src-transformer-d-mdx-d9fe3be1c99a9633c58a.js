(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var a=r("pOBw"),n=r("q1tI"),b=r.n(n),c=r("NmYn"),l=r.n(c),o=r("OKom"),p=r("a7k6"),i=r("TSYQ"),m=r.n(i),s=r("ecM3"),O=r("qKvR"),j=function(e){var t,r=e.title,a=e.tabs,n=void 0===a?[]:a;return Object(O.b)("div",{className:m()(s.pageHeader,(t={},t[s.withTabs]=n.length,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:s.text},r)))))},u=r("pEPl"),d=r("BAC9"),N=function(e){var t=e.relativePagePath,r=e.repository,a=u.data.site.siteMetadata.repository,n=r||a,b=n.baseUrl,c=n.subDirectory,l=b+"/edit/"+n.branch+c+"/src/pages"+t;return b?Object(O.b)("div",{className:"bx--row "+d.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:d.link,href:l},"Edit this page on GitHub"))):null},f=(r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("RW0V"),r("Z2Ku"),r("L9s1"),r("INYr"),r("a1Th"),r("Btvt"),r("6VaU"),r("UPW5")),g=(r("f3/d"),r("Wbzz")),h=r("E7yi"),y=function(e){var t=e.previousItem,r=e.nextItem;return Object(O.b)("div",{className:h.wrapper},Object(O.b)("div",{className:h.linkContainer},t.to&&Object(O.b)(g.Link,{className:m()(h.link,h.firstLink),to:t.to},Object(O.b)("div",{className:h.direction},"Previous"),Object(O.b)("div",{className:h.name},t.name)),r.to&&Object(O.b)(g.Link,{className:m()(h.link,h.secondLink),to:r.to},Object(O.b)("div",{className:h.direction},"Next"),Object(O.b)("div",{className:h.name},r.name))))};function v(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(){var e=f.data,t=e.allNavItemsYaml.edges,r=e.site.pathPrefix;return[t.flatMap((function(e){var t=e.node;return t.pages.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{category:t.title})}))})),r]},w=function(e,t){return e+(t?": "+t:"")},P=function(e){var t=e.tabs,r=e.location,a=e.pageContext,n=void 0===a?{frontmatter:"Home"}:a,b=x(),c=b[0],o=b[1],p=function(e){return e.frontmatter.title?l()(e.frontmatter.title,{lower:!0}):"Home"}(n),i=r.pathname.replace(o,"").split("/").filter(Boolean),m=function(e){var t=e.tabs,r=e.location.pathname.split("/");if(!t)return{prevTabItem:null,nextTabItem:null};var a=t.map((function(e){var t=l()(e,{lower:!0}),a=r.filter((function(e){return e===t})).toString()===t;return{title:e,slug:t,currentTab:a}})),n=a.findIndex((function(e){return e.currentTab}));return{prevTabItem:a[n-1],nextTabItem:a[n+1]}}({currentTitle:p,location:r,tabs:t}),s=m.prevTabItem,j=m.nextTabItem,u=function(e){var t=e.tabs,r=e.location,a=x(),n=a[0],b=a[1],c=r.pathname.replace(b,""),l=t?c.replace(/\/[^/]*\/?$/,""):c.replace(/\/$/,""),o=n.findIndex((function(e){return e.path.includes(l)}));return{prevCategory:n[o-1],nextCategory:n[o+1],navIndex:o}}({location:r,tabs:t}),d=u.prevCategory,N=u.nextCategory,f=u.navIndex;return"Home"===p||c[f]?Object(O.b)(y,{previousItem:s?{to:"/"+[].concat(v(i.slice(0,-1)),[s.slug]).join("/"),name:w(c[f].title||c[f].category,s.title)}:d?{to:d.path,name:w(d.category,d.title)}:"Home"===p?{}:{to:"/",name:"Home"},nextItem:"Home"===p?{to:c[f].path,name:w(c[f].category,c[f].title)}:j&&j.slug?{to:"/"+[].concat(v(i.slice(0,-1)),[j.slug]).join("/"),name:w(c[f].title||c[f].category,j.title)}:N?{to:N.path,name:w(N.category,N.title)}:{}}):null},I=(r("Oyvg"),r("I8xM"));var C=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0}),b=n===a,c=new RegExp(a+"(?!-)"),o=r.replace(c,n);return Object(O.b)("li",{key:e,className:m()((t={},t[I.selectedItem]=b,t),I.listItem)},Object(O.b)(g.Link,{className:I.link,to:""+o},e))}));return Object(O.b)("div",{className:I.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:I.list},n))))))},a}(b.a.Component),k=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,n=e.location,b=e.Title,c=t.frontmatter,i=void 0===c?{}:c,m=t.relativePagePath,s=t.titleType,u=i.tabs,d=i.title,f=i.theme,g=i.description,h=i.keywords,y=a.data.site.pathPrefix,v=y?n.pathname.replace(y,""):n.pathname,T=u?v.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(O.b)(p.a,{tabs:u,homepage:!1,theme:f,pageTitle:d,pageDescription:g,pageKeywords:h,titleType:s},Object(O.b)(j,{title:b?Object(O.b)(b,null):d,label:"label",tabs:u}),u&&Object(O.b)(C,{slug:v,tabs:u,currentTab:T}),Object(O.b)(k.a,{padded:!0},r,Object(O.b)(N,{relativePagePath:m})),Object(O.b)(P,{pageContext:t,location:n,slug:v,tabs:u,currentTab:T}),Object(O.b)(o.a,null))}},UPW5:function(e){e.exports=JSON.parse('{"data":{"allNavItemsYaml":{"edges":[{"node":{"id":"0418868e-af0a-5a4f-bfa7-6777d7e3ee49","title":"Quick Start","pages":[{"title":"Quick Start","path":"/quick-start"}]}},{"node":{"id":"9ea2dcf5-7bbd-531d-9832-c7d68491c4ed","title":"API Docs","pages":[{"title":"API Docs","path":"/api"}]}}]},"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/IBM/report-toolkit","subDirectory":"packages/docs","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},u36S:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return s}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},o=l("Breadcrumb"),p=l("BreadcrumbItem"),i={_frontmatter:c},m=n.a;function s(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(m,b({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o,{noTrailingSlash:!0,mdxType:"Breadcrumb"},Object(a.b)(p,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"../../../../../../api"},"report-toolkit API")),Object(a.b)(p,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"transformers_src_transformer_d_"},'"transformers/src/transformer.d"'))),Object(a.b)("h2",null,"Index"),Object(a.b)("h3",null,"Classes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"))),Object(a.b)("h3",null,"Type aliases"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_transformer_d_#formatters"}),"Formatters")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_transformer_d_#report"}),"Report")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_transformer_d_#transformfunction"}),"TransformFunction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_transformer_d_#transformerfield"}),"TransformerField")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_transformer_d_#transformermeta"}),"TransformerMeta"))),Object(a.b)("h3",null,"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_transformer_d_#createtransformer"}),"createTransformer"))),Object(a.b)("h2",null,"Type aliases"),Object(a.b)("h3",null,"Formatters"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"Formatters"),": ",Object(a.b)("em",{parentName:"p"},"“table” | “json” | “csv”")),Object(a.b)("hr",null),Object(a.b)("h3",null,"Report"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"Report"),": ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",b({parentName:"em"},{href:"../classes/report_toolkit_common.report.report"}),"Report"))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformFunction"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformFunction"),": ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("p",null,"▸ (",Object(a.b)("inlineCode",{parentName:"p"},"opts?"),": any): ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹T, U›")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"opts?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformerField"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformerField"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"color"),"? : ",Object(a.b)("em",{parentName:"p"},"string | function"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"label"),": ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"value"),": ",Object(a.b)("em",{parentName:"p"},"string | function")))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformerMeta"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformerMeta"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"alias"),"? : ",Object(a.b)("em",{parentName:"p"},"string[]"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"defaults"),"? : ",Object(a.b)("em",{parentName:"p"},"any"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"description"),"? : ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"id"),": ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"input"),"? : ",Object(a.b)("em",{parentName:"p"},"string[]"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"output"),": ",Object(a.b)("em",{parentName:"p"},"string")))),Object(a.b)("h2",null,"Functions"),Object(a.b)("h3",null,"createTransformer"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"createTransformer"),"<",Object(a.b)("strong",{parentName:"p"},"T"),", ",Object(a.b)("strong",{parentName:"p"},"U"),">(",Object(a.b)("inlineCode",{parentName:"p"},"transform"),": function, ",Object(a.b)("inlineCode",{parentName:"p"},"meta"),": object, ",Object(a.b)("inlineCode",{parentName:"p"},"config?"),": any): ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹T, U›")),Object(a.b)("p",null,"Creates a Transformer"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"template"))," T,U"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Type parameters:")),Object(a.b)("p",null,"▪ ",Object(a.b)("strong",{parentName:"p"},"T")),Object(a.b)("p",null,"▪ ",Object(a.b)("strong",{parentName:"p"},"U")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("p",null,"▪ ",Object(a.b)("strong",{parentName:"p"},"transform"),": ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("p",null,"Transformer function"),Object(a.b)("p",null,"▸ (",Object(a.b)("inlineCode",{parentName:"p"},"opts?"),": any): ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹T, U›")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"opts?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")))),Object(a.b)("p",null,"▪ ",Object(a.b)("strong",{parentName:"p"},"meta"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("p",null,"Transformer meta"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"alias?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string[]")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"defaults?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"description?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"input?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string[]")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"output")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")))),Object(a.b)("p",null,"▪",Object(a.b)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(a.b)("strong",{parentName:"p"},"config"),": ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹T, U›")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-modules-transformers-src-transformer-d-mdx-d9fe3be1c99a9633c58a.js.map