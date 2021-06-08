(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(128)),a={id:"config-api",title:"API Configuration",sidebar_label:"API"},c={unversionedId:"config-api",id:"config-api",isDocsHomePage:!1,title:"API Configuration",description:"The API is only configurable in the Enterprise version of BuildBuddy. For more information, view the API Documentation.",source:"@site/../docs/config-api.md",slug:"/config-api",permalink:"/docs/config-api",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-api.md",version:"current",sidebar_label:"API",sidebar:"someSidebar",previous:{title:"Miscellaneous Configuration",permalink:"/docs/config-misc"},next:{title:"Telemetry",permalink:"/docs/config-telemetry"}},p=[{value:"Section",id:"section",children:[]},{value:"Options",id:"options",children:[]},{value:"Example section",id:"example-section",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The API is only configurable in the ",Object(o.b)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy. For more information, view the ",Object(o.b)("a",{parentName:"p",href:"/docs/enterprise-api"},"API Documentation"),"."),Object(o.b)("h2",{id:"section"},"Section"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"api:")," The API section enables the BuildBuddy API over both gRPC(s) and REST HTTP(s). ",Object(o.b)("strong",{parentName:"p"},"Optional")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Optional")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"enable_api:")," Whether or not to enable the BuildBuddy API.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"api_key:")," The default API key to use for on-prem enterprise deploys with a single organization/group."))),Object(o.b)("h2",{id:"example-section"},"Example section"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"api:\n  enable_api: true\n")))}u.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(a,".").concat(d)]||b[d]||s[d]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);