(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var a=r("pOBw"),n=r("q1tI"),o=r.n(n),b=r("NmYn"),l=r.n(b),c=r("OKom"),i=r("a7k6"),p=r("TSYQ"),s=r.n(p),m=r("ecM3"),O=r("qKvR"),j=function(e){var t,r=e.title,a=e.tabs,n=void 0===a?[]:a;return Object(O.b)("div",{className:s()(m.pageHeader,(t={},t[m.withTabs]=n.length,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.text},r)))))},u=r("pEPl"),d=r("BAC9"),f=function(e){var t=e.relativePagePath,r=e.repository,a=u.data.site.siteMetadata.repository,n=r||a,o=n.baseUrl,b=n.subDirectory,l=o+"/edit/"+n.branch+b+"/src/pages"+t;return o?Object(O.b)("div",{className:"bx--row "+d.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:d.link,href:l},"Edit this page on GitHub"))):null},N=(r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("RW0V"),r("Z2Ku"),r("L9s1"),r("INYr"),r("a1Th"),r("Btvt"),r("6VaU"),r("UPW5")),g=(r("f3/d"),r("Wbzz")),h=r("E7yi"),_=function(e){var t=e.previousItem,r=e.nextItem;return Object(O.b)("div",{className:h.wrapper},Object(O.b)("div",{className:h.linkContainer},t.to&&Object(O.b)(g.Link,{className:s()(h.link,h.firstLink),to:t.to},Object(O.b)("div",{className:h.direction},"Previous"),Object(O.b)("div",{className:h.name},t.name)),r.to&&Object(O.b)(g.Link,{className:s()(h.link,h.secondLink),to:r.to},Object(O.b)("div",{className:h.direction},"Next"),Object(O.b)("div",{className:h.name},r.name))))};function y(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(){var e=N.data,t=e.allNavItemsYaml.edges,r=e.site.pathPrefix;return[t.flatMap((function(e){var t=e.node;return t.pages.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{category:t.title})}))})),r]},w=function(e,t){return e+(t?": "+t:"")},C=function(e){var t=e.tabs,r=e.location,a=e.pageContext,n=void 0===a?{frontmatter:"Home"}:a,o=P(),b=o[0],c=o[1],i=function(e){return e.frontmatter.title?l()(e.frontmatter.title,{lower:!0}):"Home"}(n),p=r.pathname.replace(c,"").split("/").filter(Boolean),s=function(e){var t=e.tabs,r=e.location.pathname.split("/");if(!t)return{prevTabItem:null,nextTabItem:null};var a=t.map((function(e){var t=l()(e,{lower:!0}),a=r.filter((function(e){return e===t})).toString()===t;return{title:e,slug:t,currentTab:a}})),n=a.findIndex((function(e){return e.currentTab}));return{prevTabItem:a[n-1],nextTabItem:a[n+1]}}({currentTitle:i,location:r,tabs:t}),m=s.prevTabItem,j=s.nextTabItem,u=function(e){var t=e.tabs,r=e.location,a=P(),n=a[0],o=a[1],b=r.pathname.replace(o,""),l=t?b.replace(/\/[^/]*\/?$/,""):b.replace(/\/$/,""),c=n.findIndex((function(e){return e.path.includes(l)}));return{prevCategory:n[c-1],nextCategory:n[c+1],navIndex:c}}({location:r,tabs:t}),d=u.prevCategory,f=u.nextCategory,N=u.navIndex;return"Home"===i||b[N]?Object(O.b)(_,{previousItem:m?{to:"/"+[].concat(y(p.slice(0,-1)),[m.slug]).join("/"),name:w(b[N].title||b[N].category,m.title)}:d?{to:d.path,name:w(d.category,d.title)}:"Home"===i?{}:{to:"/",name:"Home"},nextItem:"Home"===i?{to:b[N].path,name:w(b[N].category,b[N].title)}:j&&j.slug?{to:"/"+[].concat(y(p.slice(0,-1)),[j.slug]).join("/"),name:w(b[N].title||b[N].category,j.title)}:f?{to:f.path,name:w(f.category,f.title)}:{}}):null},R=(r("Oyvg"),r("I8xM"));var x=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0}),o=n===a,b=new RegExp(a+"(?!-)"),c=r.replace(b,n);return Object(O.b)("li",{key:e,className:s()((t={},t[R.selectedItem]=o,t),R.listItem)},Object(O.b)(g.Link,{className:R.link,to:""+c},e))}));return Object(O.b)("div",{className:R.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:R.list},n))))))},a}(o.a.Component),T=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,n=e.location,o=e.Title,b=t.frontmatter,p=void 0===b?{}:b,s=t.relativePagePath,m=t.titleType,u=p.tabs,d=p.title,N=p.theme,g=p.description,h=p.keywords,_=a.data.site.pathPrefix,y=_?n.pathname.replace(_,""):n.pathname,v=u?y.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(O.b)(i.a,{tabs:u,homepage:!1,theme:N,pageTitle:d,pageDescription:g,pageKeywords:h,titleType:m},Object(O.b)(j,{title:o?Object(O.b)(o,null):d,label:"label",tabs:u}),u&&Object(O.b)(x,{slug:y,tabs:u,currentTab:v}),Object(O.b)(T.a,{padded:!0},r,Object(O.b)(f,{relativePagePath:s})),Object(O.b)(C,{pageContext:t,location:n,slug:y,tabs:u,currentTab:v}),Object(O.b)(c.a,null))}},UPW5:function(e){e.exports=JSON.parse('{"data":{"allNavItemsYaml":{"edges":[{"node":{"id":"0418868e-af0a-5a4f-bfa7-6777d7e3ee49","title":"Quick Start","pages":[{"title":"Quick Start","path":"/quick-start"}]}},{"node":{"id":"9ea2dcf5-7bbd-531d-9832-c7d68491c4ed","title":"API Docs","pages":[{"title":"API Docs","path":"/api"}]}}]},"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/IBM/report-toolkit","subDirectory":"packages/docs","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/report-toolkit"}}}')},uKWo:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return b})),r.d(t,"default",(function(){return m}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var b={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=l("Breadcrumb"),i=l("BreadcrumbItem"),p={_frontmatter:b},s=n.a;function m(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(s,o({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{noTrailingSlash:!0,mdxType:"Breadcrumb"},Object(a.b)(i,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"../../../../../../api"},"report-toolkit API")),Object(a.b)(i,{mdxType:"BreadcrumbItem"},Object(a.b)("a",{href:"report_toolkit_core"},"@report-toolkit/core"))),Object(a.b)("h2",null,"Index"),Object(a.b)("h3",null,"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#builtintransformerids"}),"builtinTransformerIds")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#compatibletransforms"}),"compatibleTransforms")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#deregisterplugins"}),"deregisterPlugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#ispluginregistered"}),"isPluginRegistered")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#registeredruledefinitions"}),"registeredRuleDefinitions"))),Object(a.b)("h3",null,"External modules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core.observable"}),"observable"))),Object(a.b)("h3",null,"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#diff"}),"diff")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#inspect"}),"inspect")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#loadconfig"}),"loadConfig")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#toreportfromobject"}),"toReportFromObject")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#transform"}),"transform")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"report_toolkit_core#use"}),"use"))),Object(a.b)("h2",null,"References"),Object(a.b)("h3",null,"builtinTransformerIds"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"builtinTransformerIds"),":"),Object(a.b)("hr",null),Object(a.b)("h3",null,"compatibleTransforms"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"compatibleTransforms"),":"),Object(a.b)("hr",null),Object(a.b)("h3",null,"deregisterPlugins"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"deregisterPlugins"),":"),Object(a.b)("hr",null),Object(a.b)("h3",null,"isPluginRegistered"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"isPluginRegistered"),":"),Object(a.b)("hr",null),Object(a.b)("h3",null,"registeredRuleDefinitions"),Object(a.b)("p",null,"• ",Object(a.b)("strong",{parentName:"p"},"registeredRuleDefinitions"),":"),Object(a.b)("h2",null,"Functions"),Object(a.b)("h3",null,"diff"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"diff"),"(",Object(a.b)("inlineCode",{parentName:"p"},"report1"),": ",Object(a.b)("a",o({parentName:"p"},{href:"../interfaces/common_diagnostic_report_d_.diagnosticreport"}),"DiagnosticReport")," | ",Object(a.b)("a",o({parentName:"p"},{href:"../classes/report_toolkit_common.report.report"}),"Report"),", ",Object(a.b)("inlineCode",{parentName:"p"},"report2"),": ",Object(a.b)("a",o({parentName:"p"},{href:"../interfaces/common_diagnostic_report_d_.diagnosticreport"}),"DiagnosticReport")," | ",Object(a.b)("a",o({parentName:"p"},{href:"../classes/report_toolkit_common.report.report"}),"Report"),", ",Object(a.b)("inlineCode",{parentName:"p"},"opts?"),": Partial‹",Object(a.b)("a",o({parentName:"p"},{href:"report_toolkit_core.observable#diffoptions"}),"DiffOptions"),"›): ",Object(a.b)("em",{parentName:"p"},"Promise‹",Object(a.b)("a",o({parentName:"em"},{href:"report_toolkit_core.observable#diffresult"}),"DiffResult"),"[]›")),Object(a.b)("p",null,"Returns the difference between two reports."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const {diff} = require('@report-toolkit/core');\n\nconst report1 = process.report.getReport();\nconst report2 = process.report.getReport();\nconst results = await diff(report1, report2, {\n  filterProperties: ['header', 'javascriptStack', 'nativeStack'],\n  showSecretsUnsafe: false\n});\nresults.forEach(({op, path, newValue, oldValue}) => {\n  console.log(`[${op}] <${path}> ${oldValue} => ${newValue}`);\n});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"report1")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"../interfaces/common_diagnostic_report_d_.diagnosticreport"}),"DiagnosticReport")," ","|"," ",Object(a.b)("a",o({parentName:"td"},{href:"../classes/report_toolkit_common.report.report"}),"Report")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"First report to diff")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"report2")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"../interfaces/common_diagnostic_report_d_.diagnosticreport"}),"DiagnosticReport")," ","|"," ",Object(a.b)("a",o({parentName:"td"},{href:"../classes/report_toolkit_common.report.report"}),"Report")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Second report to diff")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"opts?")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Partial‹",Object(a.b)("a",o({parentName:"td"},{href:"report_toolkit_core.observable#diffoptions"}),"DiffOptions"),"›"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise‹",Object(a.b)("a",o({parentName:"em"},{href:"report_toolkit_core.observable#diffresult"}),"DiffResult"),"[]›")),Object(a.b)("p",null,"Array of results, one per difference"),Object(a.b)("hr",null),Object(a.b)("h3",null,"inspect"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"inspect"),"(",Object(a.b)("inlineCode",{parentName:"p"},"reports"),": ",Object(a.b)("a",o({parentName:"p"},{href:"../interfaces/common_diagnostic_report_d_.diagnosticreport"}),"DiagnosticReport")," | ",Object(a.b)("a",o({parentName:"p"},{href:"../classes/report_toolkit_common.report.report"}),"Report"),", ",Object(a.b)("inlineCode",{parentName:"p"},"opts?"),": Partial‹",Object(a.b)("a",o({parentName:"p"},{href:"report_toolkit_core.observable#inspectoptions"}),"InspectOptions"),"›): ",Object(a.b)("em",{parentName:"p"},"Promise‹",Object(a.b)("a",o({parentName:"em"},{href:"../classes/report_toolkit_inspector.message.message"}),"Message"),"[]›")),Object(a.b)("p",null,"Inspect one or more reports, running rules against each.  Resolves with an array of zero or more ",Object(a.b)("a",o({parentName:"p"},{href:"/report-toolkit/9d915452a34e096edf9745180bed0726/report_toolkit_inspector.message.message.mdx"}),"Messages"),"."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const {inspect} = require('@report-toolkit/core');\n\nconst report = process.report.getReport();\nconst results = await inspect(report, {\n  severity: 'info',\n  sort: true,\n  sortDirection: 'asc',\n  sortField: 'header.dumpEventTimestamp',\n  showSecretsUnsafe: false,\n  ruleConfig: {\n    'long-timeout': {\n      timeout: '2s'\n    }\n  }\n});\nresults.forEach(({message, filename}) => {\n  console.log(`${filename}: ${message}`);\n});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"reports")),Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("a",o({parentName:"td"},{href:"../interfaces/common_diagnostic_report_d_.diagnosticreport"}),"DiagnosticReport")," ","|"," ",Object(a.b)("a",o({parentName:"td"},{href:"../classes/report_toolkit_common.report.report"}),"Report")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"One or more reports")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"opts?")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Partial‹",Object(a.b)("a",o({parentName:"td"},{href:"report_toolkit_core.observable#inspectoptions"}),"InspectOptions"),"›"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise‹",Object(a.b)("a",o({parentName:"em"},{href:"../classes/report_toolkit_inspector.message.message"}),"Message"),"[]›")),Object(a.b)("hr",null),Object(a.b)("h3",null,"loadConfig"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"loadConfig"),"(",Object(a.b)("inlineCode",{parentName:"p"},"config"),": any): ",Object(a.b)("em",{parentName:"p"},"Promise‹any›")),Object(a.b)("p",null,"Resolves with a normalized config object from a raw config object."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const {loadConfig} = require('@report-toolkit/core');\n\n// or require('./path/to/.rtkrc.js')\nconst rawConfig = [\n  'report-toolkit:recommended',\n  {\n    rules: {\n      'long-timeout': {\n        timeout: '2s'\n      }\n    }\n  }\n];\n// `normalizedConfig` contains contents of \"recommended\" settings,\n// with our override of custom rule config\nconst normalizedConfig = await loadConfig(rawConfig);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"config")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"any"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Raw config object")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise‹any›")),Object(a.b)("p",null,"A normalized config object"),Object(a.b)("hr",null),Object(a.b)("h3",null,"toReportFromObject"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"toReportFromObject"),"(",Object(a.b)("inlineCode",{parentName:"p"},"value"),": any, ",Object(a.b)("inlineCode",{parentName:"p"},"opts?"),": Partial‹",Object(a.b)("a",o({parentName:"p"},{href:"report_toolkit_core.observable#toreportfromobjectoptions"}),"ToReportFromObjectOptions"),"›): ",Object(a.b)("em",{parentName:"p"},"Promise‹Readonly‹",Object(a.b)("a",o({parentName:"em"},{href:"../classes/report_toolkit_common.report.report"}),"Report"),"››")),Object(a.b)("p",null,"Convert a plain object (usually parsed from a JSON report generated by See ",Object(a.b)("a",o({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_report_writereport_filename_err"}),"process.report.writeReport"),") to a ",Object(a.b)("a",o({parentName:"p"},{href:"/report-toolkit/2460084932e07300970ce545d9c1e7d6/report_toolkit_common.report.report.mdx"}),"Report")," instance."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const {toReportFromObject} = require('@report-toolkit/core');\n\nconst json = fs.readFileSync('./report-xxxxx.json');\n// `Report` instance with secrets redacted\nconst report = await toReportFromObject(json, {\n  showSecretsUnsafe: false\n});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"value")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"any"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Raw report")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"opts?")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Partial‹",Object(a.b)("a",o({parentName:"td"},{href:"report_toolkit_core.observable#toreportfromobjectoptions"}),"ToReportFromObjectOptions"),"›"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"-")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise‹Readonly‹",Object(a.b)("a",o({parentName:"em"},{href:"../classes/report_toolkit_common.report.report"}),"Report"),"››")),Object(a.b)("hr",null),Object(a.b)("h3",null,"transform"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"transform"),"(",Object(a.b)("inlineCode",{parentName:"p"},"transformerIds"),": string | string[], ",Object(a.b)("inlineCode",{parentName:"p"},"source"),": any, ",Object(a.b)("inlineCode",{parentName:"p"},"config?"),": Partial‹any›, ",Object(a.b)("inlineCode",{parentName:"p"},"options?"),": Partial‹",Object(a.b)("a",o({parentName:"p"},{href:"report_toolkit_core.observable#transformoptions"}),"TransformOptions"),"›): ",Object(a.b)("em",{parentName:"p"},"Promise‹any[]›")),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"source")," through chain of one or more transformers.  Performs validation before piping.\nIf the final transformer does not output the desired ",Object(a.b)("inlineCode",{parentName:"p"},"endType"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"defaultTransformer")," will be appended to the chain; otherwise it is ignored."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const {transform, toReportFromObject} = require('@report-toolkit/core');\n\n// by default, `report` has its secrets redacted\nconst report = await toReportFromObject(process.report.getReport());\nconst [header, ...data] = await transform(['filter', 'csv'], report, {\n  transformers: {\n    filter: {include: 'header'},\n    csv: {flatten: true}\n  }\n});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"transformerIds")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string ","|"," string[]"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Unique transformer identifier(s), in order.  Can be one of ",Object(a.b)("inlineCode",{parentName:"td"},"csv"),", ",Object(a.b)("inlineCode",{parentName:"td"},"filter"),", ",Object(a.b)("inlineCode",{parentName:"td"},"json"),", ",Object(a.b)("inlineCode",{parentName:"td"},"newline"),",  ",Object(a.b)("inlineCode",{parentName:"td"},"redact"),", ",Object(a.b)("inlineCode",{parentName:"td"},"stack-hash"),", ",Object(a.b)("inlineCode",{parentName:"td"},"table"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"source")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"any"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Source, typically one or more ",Object(a.b)("a",o({parentName:"td"},{href:"/report-toolkit/2460084932e07300970ce545d9c1e7d6/report_toolkit_common.report.report.mdx"}),"Reports"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"config?")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Partial‹any›"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"As returned by ",Object(a.b)("a",o({parentName:"td"},{href:"report_toolkit_core#loadconfig"}),"loadConfig"),"; can contain transformer-specific settings.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"options?")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Partial‹",Object(a.b)("a",o({parentName:"td"},{href:"report_toolkit_core.observable#transformoptions"}),"TransformOptions"),"›"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Optional constraints & default behavior; overrides settings in ",Object(a.b)("inlineCode",{parentName:"td"},"config"),", if present.")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise‹any[]›")),Object(a.b)("hr",null),Object(a.b)("h3",null,"use"),Object(a.b)("p",null,"▸ ",Object(a.b)("strong",{parentName:"p"},"use"),"(",Object(a.b)("inlineCode",{parentName:"p"},"pluginId"),": string): ",Object(a.b)("em",{parentName:"p"},"Promise‹",Object(a.b)("a",o({parentName:"em"},{href:"report_toolkit_core.observable#rtkplugin"}),"RTKPlugin"),"›")),Object(a.b)("p",null,"Register & enable a plugin."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const {use} = require('@report-toolkit/core');\n\nawait use('some-plugin-in-node_modules');\nawait use('./relative/path/to/plugin.js');\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"pluginId")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"ID of plugin to register; a resolvable path to a module")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise‹",Object(a.b)("a",o({parentName:"em"},{href:"report_toolkit_core.observable#rtkplugin"}),"RTKPlugin"),"›")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-modules-report-toolkit-core-mdx-18954f95fa36aca25067.js.map