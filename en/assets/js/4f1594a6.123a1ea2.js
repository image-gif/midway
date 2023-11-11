"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="Check tool",c={unversionedId:"tool/luckyeye",id:"tool/luckyeye",title:"Check tool",description:"Midway provides some checking tools for common errors to facilitate users to quickly debug them. The @midwayjs/luckyeye package provides some basic inspection rules, which can quickly troubleshoot problems with the new version of Midway.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tool/luckyeye.md",sourceDirName:"tool",slug:"/tool/luckyeye",permalink:"/en/docs/tool/luckyeye",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/luckyeye.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"Lint tools, rules and formatting",permalink:"/en/docs/tool/mwts"},next:{title:"egg:ts-helper",permalink:"/en/docs/tool/egg-ts-helper"}},i={},s=[{value:"Use",id:"use",level:2},{value:"Execution",id:"execution",level:2},{value:"Custom rule package",id:"custom-rule-package",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-tool"},"Check tool"),(0,o.kt)("p",null,"Midway provides some checking tools for common errors to facilitate users to quickly debug them. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/luckyeye")," package provides some basic inspection rules, which can quickly troubleshoot problems with the new version of Midway."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"luckyeye, meaning lucky eyes, can quickly find and locate problems.")),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/luckyeye")," package first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm I @midwayjs/luckyeye --save-dev\n")),(0,o.kt)("p",null,"In general, we will add it to a check script, such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  // ......\n  "check": "luckyeye"\n},\n')),(0,o.kt)("p",null,'Next, we need to configure a "rule package". For example, ',(0,o.kt)("inlineCode",{parentName:"p"},"midway_ v2")," is a rule check package for midway v2."),(0,o.kt)("p",null,"Add the following paragraph to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"midway-luckyeye": {\n  "packages": [\n    "midway_v2"\n  ]\n},\n')),(0,o.kt)("h2",{id:"execution"},"Execution"),(0,o.kt)("p",null,"After the configuration is completed, you can execute the inspection script added above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run check\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Blue")," indicates the output information. ",(0,o.kt)("strong",{parentName:"p"},"Green")," indicates that the check item passes. ",(0,o.kt)("strong",{parentName:"p"},"Red")," indicates that the check item has a problem and needs to be modified. ",(0,o.kt)("strong",{parentName:"p"},"Yellow")," indicates that the check item can be modified, but optional."),(0,o.kt)("p",null,"The execution effect is as follows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1610983986151-79c54e7c-3ff0-4f94-98bc-359dda0fa694.png",alt:null})),(0,o.kt)("h2",{id:"custom-rule-package"},"Custom rule package"),(0,o.kt)("p",null,"Please refer to README for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/luckyeye"},"https:// github.com/midwayjs/luckyeye"),"."))}m.isMDXComponent=!0}}]);