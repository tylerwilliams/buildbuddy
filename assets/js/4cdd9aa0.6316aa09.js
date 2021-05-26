(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{126:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(o),b=n,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||l;return o?r.a.createElement(f,a(a({ref:t},c),{},{components:o})):r.a.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<l;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},89:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return a})),o.d(t,"toc",(function(){return u})),o.d(t,"default",(function(){return s}));var n=o(3),r=o(7),l=(o(0),o(126)),i={id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",sidebar_label:"Slow Uploads"},a={unversionedId:"troubleshooting-slow-upload",id:"troubleshooting-slow-upload",isDocsHomePage:!1,title:"Troubleshooting Slow Uploads",description:"The Build Event Protocol upload timed out",source:"@site/../docs/troubleshooting-slow-upload.md",slug:"/troubleshooting-slow-upload",permalink:"/docs/troubleshooting-slow-upload",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-slow-upload.md",version:"current",sidebar_label:"Slow Uploads",sidebar:"someSidebar",previous:{title:"Troubleshooting RBE Failures",permalink:"/docs/troubleshooting-rbe"},next:{title:"Enterprise Overview",permalink:"/docs/enterprise"}},u=[{value:"The Build Event Protocol upload timed out",id:"the-build-event-protocol-upload-timed-out",children:[]},{value:"Waiting for build events upload",id:"waiting-for-build-events-upload",children:[]}],c={toc:u};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"the-build-event-protocol-upload-timed-out"},"The Build Event Protocol upload timed out"),Object(l.b)("p",null,"This error means the ",Object(l.b)("inlineCode",{parentName:"p"},"bes_timeout")," ",Object(l.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--bes_timeout"},"flag")," is likely set to a value that's not long enough for bazel to finish uploading all build artifacts."),Object(l.b)("p",null,"We recommend using the following flag to increase this upload timeout:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"--bes_timeout=600s\n")),Object(l.b)("p",null,"These slow uploads should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."),Object(l.b)("h2",{id:"waiting-for-build-events-upload"},"Waiting for build events upload"),Object(l.b)("p",null,"If your build has finished but you're frequently sitting around waiting for build events to upload - you're likely in a network constrained environment trying to upload large build artifacts like docker images or large binaries."),Object(l.b)("p",null,"For network constrained environments, we recommend running with the flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"--noremote_upload_local_results\n")),Object(l.b)("p",null,"This will upload build, test, and profiling logs - but not the larger build artifacts that can take much longer to upload."))}s.isMDXComponent=!0}}]);