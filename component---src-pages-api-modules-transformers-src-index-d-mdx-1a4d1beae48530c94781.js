(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var a=r("pOBw"),n=r("q1tI"),b=r.n(n),l=r("NmYn"),c=r.n(l),p=r("OKom"),o=r("a7k6"),m=r("TSYQ"),s=r.n(m),i=r("ecM3"),O=r("qKvR"),j=function(e){var t,r=e.title,a=e.tabs,n=void 0===a?[]:a;return Object(O.b)("div",{className:s()(i.pageHeader,(t={},t[i.withTabs]=n.length,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:i.text},r)))))},u=r("pEPl"),N=r("BAC9"),d=function(e){var t=e.relativePagePath,r=e.repository,a=u.data.site.siteMetadata.repository,n=r||a,b=n.baseUrl,l=n.subDirectory,c=b+"/edit/"+n.branch+l+"/src/pages"+t;return b?Object(O.b)("div",{className:"bx--row "+N.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:N.link,href:c},"Edit this page on GitHub"))):null},f=(r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("RW0V"),r("Z2Ku"),r("L9s1"),r("INYr"),r("a1Th"),r("Btvt"),r("6VaU"),r("UPW5")),g=(r("f3/d"),r("Wbzz")),h=r("E7yi"),y=function(e){var t=e.previousItem,r=e.nextItem;return Object(O.b)("div",{className:h.wrapper},Object(O.b)("div",{className:h.linkContainer},t.to&&Object(O.b)(g.Link,{className:s()(h.link,h.firstLink),to:t.to},Object(O.b)("div",{className:h.direction},"Previous"),Object(O.b)("div",{className:h.name},t.name)),r.to&&Object(O.b)(g.Link,{className:s()(h.link,h.secondLink),to:r.to},Object(O.b)("div",{className:h.direction},"Next"),Object(O.b)("div",{className:h.name},r.name))))};function _(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(){var e=f.data,t=e.allNavItemsYaml.edges,r=e.site.pathPrefix;return[t.flatMap((function(e){var t=e.node;return t.pages.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{category:t.title})}))})),r]},C=function(e,t){return e+(t?": "+t:"")},w=function(e){var t=e.tabs,r=e.location,a=e.pageContext,n=void 0===a?{frontmatter:"Home"}:a,b=x(),l=b[0],p=b[1],o=function(e){return e.frontmatter.title?c()(e.frontmatter.title,{lower:!0}):"Home"}(n),m=r.pathname.replace(p,"").split("/").filter(Boolean),s=function(e){var t=e.tabs,r=e.location.pathname.split("/");if(!t)return{prevTabItem:null,nextTabItem:null};var a=t.map((function(e){var t=c()(e,{lower:!0}),a=r.filter((function(e){return e===t})).toString()===t;return{title:e,slug:t,currentTab:a}})),n=a.findIndex((function(e){return e.currentTab}));return{prevTabItem:a[n-1],nextTabItem:a[n+1]}}({currentTitle:o,location:r,tabs:t}),i=s.prevTabItem,j=s.nextTabItem,u=function(e){var t=e.tabs,r=e.location,a=x(),n=a[0],b=a[1],l=r.pathname.replace(b,""),c=t?l.replace(/\/[^/]*\/?$/,""):l.replace(/\/$/,""),p=n.findIndex((function(e){return e.path.includes(c)}));return{prevCategory:n[p-1],nextCategory:n[p+1],navIndex:p}}({location:r,tabs:t}),N=u.prevCategory,d=u.nextCategory,f=u.navIndex;return"Home"===o||l[f]?Object(O.b)(y,{previousItem:i?{to:"/"+[].concat(_(m.slice(0,-1)),[i.slug]).join("/"),name:C(l[f].title||l[f].category,i.title)}:N?{to:N.path,name:C(N.category,N.title)}:"Home"===o?{}:{to:"/",name:"Home"},nextItem:"Home"===o?{to:l[f].path,name:C(l[f].category,l[f].title)}:j&&j.slug?{to:"/"+[].concat(_(m.slice(0,-1)),[j.slug]).join("/"),name:C(l[f].title||l[f].category,j.title)}:d?{to:d.path,name:C(d.category,d.title)}:{}}):null},P=(r("Oyvg"),r("I8xM"));var I=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=c()(e,{lower:!0}),b=n===a,l=new RegExp(a+"(?!-)"),p=r.replace(l,n);return Object(O.b)("li",{key:e,className:s()((t={},t[P.selectedItem]=b,t),P.listItem)},Object(O.b)(g.Link,{className:P.link,to:""+p},e))}));return Object(O.b)("div",{className:P.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:P.list},n))))))},a}(b.a.Component),k=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,n=e.location,b=e.Title,l=t.frontmatter,m=void 0===l?{}:l,s=t.relativePagePath,i=t.titleType,u=m.tabs,N=m.title,f=m.theme,g=m.description,h=m.keywords,y=a.data.site.pathPrefix,_=y?n.pathname.replace(y,""):n.pathname,v=u?_.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(O.b)(o.a,{tabs:u,homepage:!1,theme:f,pageTitle:N,pageDescription:g,pageKeywords:h,titleType:i},Object(O.b)(j,{title:b?Object(O.b)(b,null):N,label:"label",tabs:u}),u&&Object(O.b)(I,{slug:_,tabs:u,currentTab:v}),Object(O.b)(k.a,{padded:!0},r,Object(O.b)(d,{relativePagePath:s})),Object(O.b)(w,{pageContext:t,location:n,slug:_,tabs:u,currentTab:v}),Object(O.b)(p.a,null))}},UPW5:function(e){e.exports=JSON.parse('{"data":{"allNavItemsYaml":{"edges":[{"node":{"id":"0418868e-af0a-5a4f-bfa7-6777d7e3ee49","title":"Quick Start","pages":[{"title":"Quick Start","path":"/quick-start"}]}},{"node":{"id":"9ea2dcf5-7bbd-531d-9832-c7d68491c4ed","title":"API Docs","pages":[{"title":"API Docs","path":"/api"}]}}]},"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/IBM/report-toolkit","subDirectory":"packages/docs","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},tvP5:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return l})),r.d(t,"default",(function(){return i}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var l={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},p=c("Breadcrumb"),o=c("BreadcrumbItem"),m={_frontmatter:l},s=n.a;function i(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(s,b({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{noTrailingSlash:!0,mdxType:"Breadcrumb"},Object(a.b)(o,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"../../../../../../api"},"report-toolkit API")),Object(a.b)(o,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"transformers_src_index_d_"},'"transformers/src/index.d"'))),Object(a.b)("h2",null,"Index"),Object(a.b)("h3",null,"Type aliases"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#observable"}),"Observable")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#operatorfunction"}),"OperatorFunction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#report"}),"Report")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#transformfunction"}),"TransformFunction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#transformoptions"}),"TransformOptions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#transformerconfig"}),"TransformerConfig")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#transformermeta"}),"TransformerMeta"))),Object(a.b)("h3",null,"Variables"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#const-builtintransformerids"}),"builtinTransformerIds"))),Object(a.b)("h3",null,"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#compatibletransforms"}),"compatibleTransforms")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#isknowntransformer"}),"isKnownTransformer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#loadtransformer"}),"loadTransformer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#runtransformer"}),"runTransformer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#totransformer"}),"toTransformer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"transformers_src_index_d_#validatetransformerchain"}),"validateTransformerChain"))),Object(a.b)("h2",null,"Type aliases"),Object(a.b)("h3",null,"Observable"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"Observable"),": ",Object(a.b)("em",{parentName:"p"},"Observable‹T›")),Object(a.b)("hr",null),Object(a.b)("h3",null,"OperatorFunction"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"OperatorFunction"),": ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹T, U›")),Object(a.b)("hr",null),Object(a.b)("h3",null,"Report"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"Report"),": ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",b({parentName:"em"},{href:"../classes/report_toolkit_common.report.report"}),"Report"))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformFunction"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformFunction"),": ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("p",null,"▸ (",Object(a.b)("inlineCode",{parentName:"p"},"opts?"),": any): ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹T, U›")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"opts?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformOptions"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformOptions"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("p",null,"for ",Object(a.b)("a",b({parentName:"p"},{href:"transformers_src_index_d_#validatetransformerchain"}),"validateTransformerChain")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"beginWith"),": ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"defaultTransformer"),": ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"defaultTransformerConfig"),": ",Object(a.b)("em",{parentName:"p"},"any"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"endWith"),": ",Object(a.b)("em",{parentName:"p"},"string")))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformerConfig"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformerConfig"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"config"),": ",Object(a.b)("em",{parentName:"p"},"any"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"id"),": ",Object(a.b)("em",{parentName:"p"},"string")))),Object(a.b)("hr",null),Object(a.b)("h3",null,"TransformerMeta"),Object(a.b)("p",null,"Ƭ ",Object(a.b)("strong",{parentName:"p"},"TransformerMeta"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("h4",null,"Type declaration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"alias"),"? : ",Object(a.b)("em",{parentName:"p"},"string[]"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"defaults"),"? : ",Object(a.b)("em",{parentName:"p"},"any"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"description"),"? : ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"id"),": ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"input"),"? : ",Object(a.b)("em",{parentName:"p"},"string[]"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"output"),": ",Object(a.b)("em",{parentName:"p"},"string")))),Object(a.b)("h2",null,"Variables"),Object(a.b)("h3",null,Object(a.b)("inlineCode",{parentName:"h3"},"Const")," builtinTransformerIds"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"builtinTransformerIds"),": ",Object(a.b)("em",{parentName:"p"},"Readonly‹string[]›")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"type"))," {Readonly<string[]>}"),Object(a.b)("h2",null,"Functions"),Object(a.b)("h3",null,"compatibleTransforms"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"compatibleTransforms"),"(",Object(a.b)("inlineCode",{parentName:"p"},"sourceType"),": any): ",Object(a.b)("em",{parentName:"p"},"string[]")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"sourceType")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"string[]")),Object(a.b)("hr",null),Object(a.b)("h3",null,"isKnownTransformer"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"isKnownTransformer"),"(",Object(a.b)("inlineCode",{parentName:"p"},"id"),": string): ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("hr",null),Object(a.b)("h3",null,"loadTransformer"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"loadTransformer"),"(",Object(a.b)("inlineCode",{parentName:"p"},"id"),": string, ",Object(a.b)("inlineCode",{parentName:"p"},"config?"),": any): ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any›")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"config?")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any›")),Object(a.b)("hr",null),Object(a.b)("h3",null,"runTransformer"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"runTransformer"),"(",Object(a.b)("inlineCode",{parentName:"p"},"source"),": Observable‹any›): ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"source")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Observable‹any›")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("p",null,"▸ (",Object(a.b)("inlineCode",{parentName:"p"},"observable"),": Observable‹",Object(a.b)("a",b({parentName:"p"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any››): ",Object(a.b)("em",{parentName:"p"},"Observable‹unknown›")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"observable")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Observable‹",Object(a.b)("a",b({parentName:"td"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any››")))),Object(a.b)("hr",null),Object(a.b)("h3",null,"toTransformer"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"toTransformer"),"(): ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹object, ",Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any››")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹object, ",Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any››")),Object(a.b)("hr",null),Object(a.b)("h3",null,"validateTransformerChain"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"validateTransformerChain"),"(",Object(a.b)("inlineCode",{parentName:"p"},"__namedParameters?"),": object): ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹",Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any›, ",Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any››")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("p",null,"▪",Object(a.b)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(a.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(a.b)("em",{parentName:"p"},"object")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"beginWith")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"defaultTransformer")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"defaultTransformerConfig")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"any")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"endWith")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"OperatorFunction‹",Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any›, ",Object(a.b)("a",b({parentName:"em"},{href:"../classes/transformers_src_transformer_d_.transformer"}),"Transformer"),"‹any, any››")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-modules-transformers-src-index-d-mdx-1a4d1beae48530c94781.js.map