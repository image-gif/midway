"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(d,r(r({ref:t},k),{},{components:n})):o.createElement(d,r({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={},r="Cookies \u548c Session",l={unversionedId:"cookie_session",id:"cookie_session",title:"Cookies \u548c Session",description:"HTTP Cookie\uff08\u4e5f\u53eb Web Cookie \u6216\u6d4f\u89c8\u5668 Cookie\uff09\u662f\u670d\u52a1\u5668\u53d1\u9001\u5230\u7528\u6237\u6d4f\u89c8\u5668\u5e76\u4fdd\u5b58\u5728\u672c\u5730\u7684\u4e00\u5c0f\u5757\u6570\u636e\uff0c\u5b83\u4f1a\u5728\u6d4f\u89c8\u5668\u4e0b\u6b21\u5411\u540c\u4e00\u670d\u52a1\u5668\u518d\u53d1\u8d77\u8bf7\u6c42\u65f6\u88ab\u643a\u5e26\u5e76\u53d1\u9001\u5230\u670d\u52a1\u5668\u4e0a\u3002\u901a\u5e38\uff0c\u5b83\u7528\u4e8e\u544a\u77e5\u670d\u52a1\u7aef\u4e24\u4e2a\u8bf7\u6c42\u662f\u5426\u6765\u81ea\u540c\u4e00\u6d4f\u89c8\u5668\uff0c\u5982\u4fdd\u6301\u7528\u6237\u7684\u767b\u5f55\u72b6\u6001\u3002Cookie \u4f7f\u57fa\u4e8e\u65e0\u72b6\u6001\u7684 HTTP \u534f\u8bae\u8bb0\u5f55\u7a33\u5b9a\u7684\u72b6\u6001\u4fe1\u606f\u6210\u4e3a\u4e86\u53ef\u80fd\u3002 Cookie \u4e3b\u8981\u7528\u4e8e\u4ee5\u4e0b\u4e09\u4e2a\u65b9\u9762\uff1a",source:"@site/docs/cookie_session.md",sourceDirName:".",slug:"/cookie_session",permalink:"/docs/cookie_session",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/cookie_session.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u65e5\u5fd7",permalink:"/docs/logger_v3"},next:{title:"\u5185\u7f6e\u670d\u52a1",permalink:"/docs/built_in_service"}},s={},p=[{value:"\u9002\u7528\u8303\u56f4",id:"\u9002\u7528\u8303\u56f4",level:2},{value:"\u9ed8\u8ba4\u7684 Cookies",id:"\u9ed8\u8ba4\u7684-cookies",level:2},{value:"\u8bbe\u7f6e Cookie",id:"\u8bbe\u7f6e-cookie",level:2},{value:"\u83b7\u53d6 Cookie",id:"\u83b7\u53d6-cookie",level:2},{value:"Cookie \u79d8\u94a5",id:"cookie-\u79d8\u94a5",level:2},{value:"\u9ed8\u8ba4\u7684 Session",id:"\u9ed8\u8ba4\u7684-session",level:2},{value:"\u51fd\u6570\u4e0b\u7684 Session",id:"\u51fd\u6570\u4e0b\u7684-session",level:2},{value:"Session \u793a\u4f8b",id:"session-\u793a\u4f8b",level:2},{value:"\u4fee\u6539\u7528\u6237 Session \u5931\u6548\u65f6\u95f4",id:"\u4fee\u6539\u7528\u6237-session-\u5931\u6548\u65f6\u95f4",level:3},{value:"\u5ef6\u957f\u7528\u6237 Session \u6709\u6548\u671f",id:"\u5ef6\u957f\u7528\u6237-session-\u6709\u6548\u671f",level:3},{value:"\u8c03\u6574 SameSite \u914d\u7f6e\u4ee5\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee",id:"\u8c03\u6574-samesite-\u914d\u7f6e\u4ee5\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee",level:3},{value:"\u81ea\u5b9a\u4e49 Session Store",id:"\u81ea\u5b9a\u4e49-session-store",level:2}],k={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cookies-\u548c-session"},"Cookies \u548c Session"),(0,a.kt)("p",null,"HTTP Cookie\uff08\u4e5f\u53eb Web Cookie \u6216\u6d4f\u89c8\u5668 Cookie\uff09\u662f\u670d\u52a1\u5668\u53d1\u9001\u5230\u7528\u6237\u6d4f\u89c8\u5668\u5e76\u4fdd\u5b58\u5728\u672c\u5730\u7684\u4e00\u5c0f\u5757\u6570\u636e\uff0c\u5b83\u4f1a\u5728\u6d4f\u89c8\u5668\u4e0b\u6b21\u5411\u540c\u4e00\u670d\u52a1\u5668\u518d\u53d1\u8d77\u8bf7\u6c42\u65f6\u88ab\u643a\u5e26\u5e76\u53d1\u9001\u5230\u670d\u52a1\u5668\u4e0a\u3002\u901a\u5e38\uff0c\u5b83\u7528\u4e8e\u544a\u77e5\u670d\u52a1\u7aef\u4e24\u4e2a\u8bf7\u6c42\u662f\u5426\u6765\u81ea\u540c\u4e00\u6d4f\u89c8\u5668\uff0c\u5982\u4fdd\u6301\u7528\u6237\u7684\u767b\u5f55\u72b6\u6001\u3002Cookie \u4f7f\u57fa\u4e8e\u65e0\u72b6\u6001\u7684 HTTP \u534f\u8bae\u8bb0\u5f55\u7a33\u5b9a\u7684\u72b6\u6001\u4fe1\u606f\u6210\u4e3a\u4e86\u53ef\u80fd\u3002 Cookie \u4e3b\u8981\u7528\u4e8e\u4ee5\u4e0b\u4e09\u4e2a\u65b9\u9762\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u72b6\u6001\u7ba1\u7406\uff08\u5982\u7528\u6237\u767b\u5f55\u72b6\u6001\u3001\u8d2d\u7269\u8f66\u3001\u6e38\u620f\u5206\u6570\u6216\u5176\u5b83\u9700\u8981\u8bb0\u5f55\u7684\u4fe1\u606f\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4e2a\u6027\u5316\u8bbe\u7f6e\uff08\u5982\u7528\u6237\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3001\u4e3b\u9898\u7b49\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u884c\u4e3a\u8ddf\u8e2a\uff08\u5982\u8ddf\u8e2a\u5206\u6790\u7528\u6237\u884c\u4e3a\u7b49\uff09")),(0,a.kt)("p",null,"Cookie \u5728 Web \u5e94\u7528\u4e2d\u7ecf\u5e38\u627f\u62c5\u6807\u8bc6\u8bf7\u6c42\u65b9\u8eab\u4efd\u7684\u529f\u80fd\uff0c\u6240\u4ee5 Web \u5e94\u7528\u5728 Cookie \u7684\u57fa\u7840\u4e0a\u5c01\u88c5\u4e86 Session \u7684\u6982\u5ff5\uff0c\u4e13\u95e8\u7528\u505a\u7528\u6237\u8eab\u4efd\u8bc6\u522b\u3002"),(0,a.kt)("h2",{id:"\u9002\u7528\u8303\u56f4"},"\u9002\u7528\u8303\u56f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@midwayjs/web")," \u4e0b\uff08\u5373 egg\uff09\u5185\u7f6e\u7684\u662f egg \u81ea\u5e26\u7684 Cookie\uff0c\u672a\u63d0\u4f9b\u66ff\u6362\u80fd\u529b\uff0c\u4e0d\u9002\u7528\u672c\u6587\u6863"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@midwayjs/express")," \u4e0b\uff08\u5373 express\uff09\u5185\u7f6e\u7684\u662f express \u81ea\u5e26\u7684 Cookie \u5e93\uff0c\u672a\u63d0\u4f9b\u66ff\u6362\u80fd\u529b\uff0c\u4e0d\u9002\u7528\u672c\u6587\u6863")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u7684-cookies"},"\u9ed8\u8ba4\u7684 Cookies"),(0,a.kt)("p",null,"Midway \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/cookies")," \u6a21\u5757\u6765\u64cd\u4f5c Cookie\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u4e2d\uff0c\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4ece\u4e0a\u4e0b\u6587\u76f4\u63a5\u8bfb\u53d6\u3001\u5199\u5165 cookie \u7684\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.cookies.get(name, [options])")," \u8bfb\u53d6\u4e0a\u4e0b\u6587\u8bf7\u6c42\u4e2d\u7684 cookie"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.cookies.set(name, value, [options])")," \u5728\u4e0a\u4e0b\u6587\u4e2d\u5199\u5165 cookie")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // set cookie\n    this.ctx.cookies.set('foo', 'bar', { encrypt: true });\n    // get cookie\n    this.ctx.cookies.get('foo', { encrypt: true });\n  }\n}\n")),(0,a.kt)("h2",{id:"\u8bbe\u7f6e-cookie"},"\u8bbe\u7f6e Cookie"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.cookies.set(key, value, options)")," API \u6765\u8bbe\u7f6e Cookie\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e Cookie \u5176\u5b9e\u662f\u901a\u8fc7\u5728 HTTP \u54cd\u5e94\u4e2d\u8bbe\u7f6e set-cookie \u5934\u5b8c\u6210\u7684\uff0c\u6bcf\u4e00\u4e2a set-cookie \u90fd\u4f1a\u8ba9\u6d4f\u89c8\u5668\u5728 Cookie \u4e2d\u5b58\u4e00\u4e2a\u952e\u503c\u5bf9\u3002\u5728\u8bbe\u7f6e Cookie \u503c\u7684\u540c\u65f6\uff0c\u534f\u8bae\u8fd8\u652f\u6301\u8bb8\u591a\u53c2\u6570\u6765\u914d\u7f6e\u8fd9\u4e2a Cookie \u7684\u4f20\u8f93\u3001\u5b58\u50a8\u548c\u6743\u9650\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u9009\u9879\u5305\u62ec\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u952e\u503c\u5bf9\u751f\u6548\u7684 URL \u8def\u5f84\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u5728\u6839\u8def\u5f84\u4e0a\uff08",(0,a.kt)("inlineCode",{parentName:"td"},"/"),"\uff09\uff0c\u4e5f\u5c31\u662f\u5f53\u524d\u57df\u540d\u4e0b\u7684\u6240\u6709 URL \u90fd\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a Cookie\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"domain"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u952e\u503c\u5bf9\u751f\u6548\u7684\u57df\u540d\uff0c\u9ed8\u8ba4\u6ca1\u6709\u914d\u7f6e\uff0c\u53ef\u4ee5\u914d\u7f6e\u6210\u53ea\u5728\u6307\u5b9a\u57df\u540d\u624d\u80fd\u8bbf\u95ee\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expires"),(0,a.kt)("td",{parentName:"tr",align:null},"Date"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fd9\u4e2a\u952e\u503c\u5bf9\u7684\u5931\u6548\u65f6\u95f4\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86 maxAge\uff0cexpires \u5c06\u4f1a\u88ab\u8986\u76d6\u3002\u5982\u679c maxAge \u548c expires \u90fd\u6ca1\u8bbe\u7f6e\uff0cCookie \u5c06\u4f1a\u5728\u6d4f\u89c8\u5668\u7684\u4f1a\u8bdd\u5931\u6548\uff08\u4e00\u822c\u662f\u5173\u95ed\u6d4f\u89c8\u5668\u65f6\uff09\u7684\u65f6\u5019\u5931\u6548\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fd9\u4e2a\u952e\u503c\u5bf9\u5728\u6d4f\u89c8\u5668\u7684\u6700\u957f\u4fdd\u5b58\u65f6\u95f4\u3002\u662f\u4e00\u4e2a\u4ece\u670d\u52a1\u5668\u5f53\u524d\u65f6\u523b\u5f00\u59cb\u7684\u6beb\u79d2\u6570\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 maxAge\uff0cexpires \u5c06\u4f1a\u88ab\u8986\u76d6\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secure"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u952e\u503c\u5bf9 ",(0,a.kt)("a",{parentName:"td",href:"http://stackoverflow.com/questions/13729749/how-does-cookie-secure-flag-work"},"\u53ea\u5728 HTTPS \u8fde\u63a5\u4e0a\u4f20\u8f93"),"\uff0c\u6846\u67b6\u4f1a\u5e2e\u6211\u4eec\u5224\u65ad\u5f53\u524d\u662f\u5426\u5728 HTTPS \u8fde\u63a5\u4e0a\u81ea\u52a8\u8bbe\u7f6e secure \u7684\u503c\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"httpOnly"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u952e\u503c\u5bf9\u662f\u5426\u53ef\u4ee5\u88ab js \u8bbf\u95ee\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u4e0d\u5141\u8bb8\u88ab js \u8bbf\u95ee"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"partitioned"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u72ec\u7acb\u5206\u533a\u72b6\u6001\uff08",(0,a.kt)("a",{parentName:"td",href:"https://developers.google.com/privacy-sandbox/3pcd/chips"},"CHIPS"),"\uff09\u7684 Cookie\u3002\u6ce8\u610f\uff0c\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"td"},"secure")," \u4e3a true \u4e14 Chrome >=114 \u7248\u672c\u6b64\u914d\u7f6e\u624d\u4f1a\u751f\u6548"),(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/cookies >= 1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"removeUnpartitioned"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5220\u9664\u975e\u72ec\u7acb\u5206\u533a\u72b6\u6001\u7684\u540c\u540d cookie\u3002\u6ce8\u610f\uff0c\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"td"},"partitioned")," \u4e3a true \u7684\u65f6\u5019\u6b64\u914d\u7f6e\u624d\u4f1a\u751f\u6548"),(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/cookies >= 1.2.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e Cookie \u7684 ",(0,a.kt)("a",{parentName:"td",href:"https://developer.chrome.com/blog/new-in-devtools-81?hl=zh-cn#cookiepriority"},"\u4f18\u5148\u7ea7"),"\uff0c\u53ef\u9009\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"Low"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"Medium"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"High"),"\uff0c\u4ec5\u5bf9 Chrome >= 81 \u7248\u672c\u6709\u6548"),(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/cookies >= 1.1.0")))),(0,a.kt)("p",null,"\u9664\u4e86\u8fd9\u4e9b\u5c5e\u6027\u4e4b\u5916\uff0c\u6846\u67b6\u53e6\u5916\u6269\u5c55\u4e86 3 \u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overwrite"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e key \u76f8\u540c\u7684\u952e\u503c\u5bf9\u5982\u4f55\u5904\u7406\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u540e\u8bbe\u7f6e\u7684\u503c\u4f1a\u8986\u76d6\u524d\u9762\u8bbe\u7f6e\u7684\uff0c\u5426\u5219\u5c06\u4f1a\u53d1\u9001\u4e24\u4e2a set-cookie \u54cd\u5e94\u5934\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"signed"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u662f\u5426\u5bf9 Cookie \u8fdb\u884c\u7b7e\u540d\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u8bbe\u7f6e\u952e\u503c\u5bf9\u7684\u65f6\u5019\u4f1a\u540c\u65f6\u5bf9\u8fd9\u4e2a\u952e\u503c\u5bf9\u7684\u503c\u8fdb\u884c\u7b7e\u540d\uff0c\u540e\u9762\u53d6\u7684\u65f6\u5019\u505a\u6821\u9a8c\uff0c\u53ef\u4ee5\u9632\u6b62\u524d\u7aef\u5bf9\u8fd9\u4e2a\u503c\u8fdb\u884c\u7be1\u6539\u3002\u9ed8\u8ba4\u4e3a true\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"encrypt"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u662f\u5426\u5bf9 Cookie \u8fdb\u884c\u52a0\u5bc6\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u5728\u53d1\u9001 Cookie \u524d\u4f1a\u5bf9\u8fd9\u4e2a\u952e\u503c\u5bf9\u7684\u503c\u8fdb\u884c\u52a0\u5bc6\uff0c\u5ba2\u6237\u7aef\u65e0\u6cd5\u8bfb\u53d6\u5230 Cookie \u7684\u660e\u6587\u503c\u3002\u9ed8\u8ba4\u4e3a false\u3002")))),(0,a.kt)("p",null,"\u5728\u8bbe\u7f6e Cookie \u65f6\uff0c\u6211\u4eec\u9700\u8981\u8003\u8651\u8fd9\u4e2a Cookie \u662f\u5426\u9700\u8981\u88ab\u524d\u7aef\u83b7\u53d6\uff0c\u5931\u6548\u65f6\u95f4\u591a\u4e45\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    this.ctx.cookies.set('cid', 'hello world', {\n      domain: 'localhost', // \u5199cookie\u6240\u5728\u7684\u57df\u540d\n      path: '/index', // \u5199cookie\u6240\u5728\u7684\u8def\u5f84\n      maxAge: 10 * 60 * 1000, // cookie\u6709\u6548\u65f6\u957f\n      expires: new Date('2017-02-15'), // cookie\u5931\u6548\u65f6\u95f4\n      httpOnly: false, // \u662f\u5426\u53ea\u7528\u4e8ehttp\u8bf7\u6c42\u4e2d\u83b7\u53d6\n      overwrite: false, // \u662f\u5426\u5141\u8bb8\u91cd\u5199\n    });\n    ctx.body = 'cookie is ok';\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7684\u914d\u7f6e\u4e0b\uff0cCookie \u662f\u52a0\u7b7e\u4e0d\u52a0\u5bc6\u7684\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u770b\u5230\u660e\u6587\uff0cjs \u4e0d\u80fd\u8bbf\u95ee\uff0c\u4e0d\u80fd\u88ab\u5ba2\u6237\u7aef\uff08\u624b\u5de5\uff09\u7be1\u6539\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981 Cookie \u5728\u6d4f\u89c8\u5668\u7aef\u53ef\u4ee5\u88ab js \u8bbf\u95ee\u5e76\u4fee\u6539:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.cookies.set(key, value, {\n  httpOnly: false,\n  signed: false,\n});\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981 Cookie \u5728\u6d4f\u89c8\u5668\u7aef\u4e0d\u80fd\u88ab\u4fee\u6539\uff0c\u4e0d\u80fd\u770b\u5230\u660e\u6587\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.cookies.set(key, value, {\n  httpOnly: true, // \u9ed8\u8ba4\u5c31\u662f true\n  encrypt: true, // \u52a0\u5bc6\u4f20\u8f93\n});\n")),(0,a.kt)("h2",{id:"\u83b7\u53d6-cookie"},"\u83b7\u53d6 Cookie"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.cookies.get(key, options)")," API \u6765\u83b7\u53d6 Cookie\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e HTTP \u8bf7\u6c42\u4e2d\u7684 Cookie \u662f\u5728\u4e00\u4e2a header \u4e2d\u4f20\u8f93\u8fc7\u6765\u7684\uff0c\u901a\u8fc7\u6846\u67b6\u63d0\u4f9b\u7684\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u7684\u4ece\u6574\u6bb5 Cookie \u4e2d\u83b7\u53d6\u5bf9\u5e94\u7684\u952e\u503c\u5bf9\u7684\u503c\u3002\u4e0a\u9762\u5728\u8bbe\u7f6e Cookie \u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"options.signed")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"options.encrypt")," \u6765\u5bf9 Cookie \u8fdb\u884c\u7b7e\u540d\u6216\u52a0\u5bc6\uff0c\u56e0\u6b64\u5bf9\u5e94\u7684\u5728\u83b7\u53d6 Cookie \u7684\u65f6\u5019\u4e5f\u8981\u4f20\u76f8\u5339\u914d\u7684\u9009\u9879\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u7684\u65f6\u5019\u6307\u5b9a\u4e3a signed\uff0c\u83b7\u53d6\u65f6\u672a\u6307\u5b9a\uff0c\u5219\u4e0d\u4f1a\u5728\u83b7\u53d6\u65f6\u5bf9\u53d6\u5230\u7684\u503c\u505a\u9a8c\u7b7e\uff0c\u5bfc\u81f4\u53ef\u80fd\u88ab\u5ba2\u6237\u7aef\u7be1\u6539\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u7684\u65f6\u5019\u6307\u5b9a\u4e3a encrypt\uff0c\u83b7\u53d6\u65f6\u672a\u6307\u5b9a\uff0c\u5219\u65e0\u6cd5\u83b7\u53d6\u5230\u771f\u5b9e\u7684\u503c\uff0c\u800c\u662f\u52a0\u5bc6\u8fc7\u540e\u7684\u5bc6\u6587\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u83b7\u53d6\u524d\u7aef\u6216\u8005\u5176\u4ed6\u7cfb\u7edf\u8bbe\u7f6e\u7684 Cookie\uff0c\u9700\u8981\u6307\u5b9a\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"signed")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u907f\u514d\u5bf9\u5b83\u505a\u9a8c\u7b7e\u5bfc\u81f4\u83b7\u53d6\u4e0d\u5230 Cookie \u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.cookies.get('frontend-cookie', {\n  signed: false,\n});\n")),(0,a.kt)("h2",{id:"cookie-\u79d8\u94a5"},"Cookie \u79d8\u94a5"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5728 Cookie \u4e2d\u9700\u8981\u7528\u5230\u52a0\u89e3\u5bc6\u548c\u9a8c\u7b7e\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6e\u4e00\u4e2a\u79d8\u94a5\u4f9b\u52a0\u5bc6\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u811a\u624b\u67b6\u4f1a\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts")," \u4e2d\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u79d8\u94a5\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u4fee\u6539\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  keys:  ['key1','key2'],\n}\n")),(0,a.kt)("p",null,"keys \u9ed8\u8ba4\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u5206\u9694\u914d\u7f6e\u591a\u4e2a key\u3002Cookie \u5728\u4f7f\u7528\u8fd9\u4e2a\u914d\u7f6e\u8fdb\u884c\u52a0\u89e3\u5bc6\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u548c\u52a0\u7b7e\u65f6\u53ea\u4f1a\u4f7f\u7528\u7b2c\u4e00\u4e2a\u79d8\u94a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u5bc6\u548c\u9a8c\u7b7e\u65f6\u4f1a\u904d\u5386 keys \u8fdb\u884c\u89e3\u5bc6\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8981\u66f4\u65b0 Cookie \u7684\u79d8\u94a5\uff0c\u4f46\u662f\u53c8\u4e0d\u5e0c\u671b\u4e4b\u524d\u8bbe\u7f6e\u5230\u7528\u6237\u6d4f\u89c8\u5668\u4e0a\u7684 Cookie \u5931\u6548\uff0c\u53ef\u4ee5\u5c06\u65b0\u7684\u79d8\u94a5\u914d\u7f6e\u5230 keys \u6700\u524d\u9762\uff0c\u7b49\u8fc7\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u518d\u5220\u53bb\u4e0d\u9700\u8981\u7684\u79d8\u94a5\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u7684-session"},"\u9ed8\u8ba4\u7684 Session"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \uff0c\u5185\u7f6e\u4e86 Session \u7ec4\u4ef6\uff0c\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.session")," \u6765\u8bbf\u95ee\u6216\u8005\u4fee\u6539\u5f53\u524d\u7528\u6237 Session \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // \u83b7\u53d6 Session \u4e0a\u7684\u5185\u5bb9\n    const userId =  this.ctx.session.userId;\n    const posts = await  this.ctx.service.post.fetch(userId);\n    // \u4fee\u6539 Session \u7684\u503c\n    this.ctx.session.visited = ctx.session.visited ? (ctx.session.visited + 1) : 1;\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Session \u7684\u4f7f\u7528\u65b9\u6cd5\u975e\u5e38\u76f4\u89c2\uff0c\u76f4\u63a5\u8bfb\u53d6\u5b83\u6216\u8005\u4fee\u6539\u5b83\u5c31\u53ef\u4ee5\u4e86\uff0c\u5982\u679c\u8981\u5220\u9664\u5b83\uff0c\u76f4\u63a5\u5c06\u5b83\u8d4b\u503c\u4e3a null\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.session = null;\n")),(0,a.kt)("p",null,"\u9700\u8981 ",(0,a.kt)("strong",{parentName:"p"},"\u7279\u522b\u6ce8\u610f")," \u7684\u662f\uff1a\u8bbe\u7f6e session \u5c5e\u6027\u65f6\u9700\u8981\u907f\u514d\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff08\u4f1a\u9020\u6210\u5b57\u6bb5\u4e22\u5931\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/session/blob/master/lib/session.js#L37-L47"},"koa-session")," \u6e90\u7801\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"isNew"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u274c \u9519\u8bef\u7684\u7528\u6cd5\nctx.session._visited = 1;   //    --\x3e \u8be5\u5b57\u6bb5\u4f1a\u5728\u4e0b\u4e00\u6b21\u8bf7\u6c42\u65f6\u4e22\u5931\nctx.session.isNew = 'HeHe'; //    --\x3e \u4e3a\u5185\u90e8\u5173\u952e\u5b57, \u4e0d\u5e94\u8be5\u53bb\u66f4\u6539\n\n// \u2714\ufe0f \u6b63\u786e\u7684\u7528\u6cd5\nctx.session.visited = 1;    //   --\x3e  \u6b64\u5904\u6ca1\u6709\u95ee\u9898\n")),(0,a.kt)("p",null,"Session \u7684\u5b9e\u73b0\u662f\u57fa\u4e8e Cookie \u7684\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u7528\u6237 Session \u7684\u5185\u5bb9\u52a0\u5bc6\u540e\u76f4\u63a5\u5b58\u50a8\u5728 Cookie \u4e2d\u7684\u4e00\u4e2a\u5b57\u6bb5\u4e2d\uff0c\u7528\u6237\u6bcf\u6b21\u8bf7\u6c42\u6211\u4eec\u7f51\u7ad9\u7684\u65f6\u5019\u90fd\u4f1a\u5e26\u4e0a\u8fd9\u4e2a Cookie\uff0c\u6211\u4eec\u5728\u670d\u52a1\u7aef\u89e3\u5bc6\u540e\u4f7f\u7528\u3002Session \u7684\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  session: {\n    maxAge: 24 * 3600 * 1000, // 1\u5929\n    key: 'MW_SESS',\n    httpOnly: true,\n  },\n  // ...\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u4e9b\u53c2\u6570\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u90fd\u662f Cookie \u7684\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u4ee3\u8868\u4e86\u5b58\u50a8 Session \u7684 Cookie \u952e\u503c\u5bf9\u7684 key \u662f\u4ec0\u4e48\u3002\u5728\u9ed8\u8ba4\u7684\u914d\u7f6e\u4e0b\uff0c\u5b58\u653e Session \u7684 Cookie \u5c06\u4f1a\u52a0\u5bc6\u5b58\u50a8\u3001\u4e0d\u53ef\u88ab\u524d\u7aef js \u8bbf\u95ee\uff0c\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u7528\u6237\u7684 Session \u662f\u5b89\u5168\u7684\u3002"),(0,a.kt)("h2",{id:"\u51fd\u6570\u4e0b\u7684-session"},"\u51fd\u6570\u4e0b\u7684 Session"),(0,a.kt)("p",null,"\u5728\u51fd\u6570\u5f39\u6027\u5bb9\u5668\u7684\u573a\u666f\u4e0b\uff0c\u9ed8\u8ba4\u672a\u5185\u7f6e Session \u6a21\u5757\uff0c\u5982\u679c\u9700\u8981\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/session": "^3.0.0",\n    // ...\n  },\n}\n')),(0,a.kt)("p",null,"\u5728 configuration \u4e2d\u5f15\u5165\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as faas from '@midwayjs/faas';\nimport * as session from '@midwayjs/session';\n\n@Configuration({\n  imports: [\n    faas,\n    session,\n    // ...\n  ]\n})\nexport class MainConfiguration {\n  // ...\n}\n")),(0,a.kt)("h2",{id:"session-\u793a\u4f8b"},"Session \u793a\u4f8b"),(0,a.kt)("h3",{id:"\u4fee\u6539\u7528\u6237-session-\u5931\u6548\u65f6\u95f4"},"\u4fee\u6539\u7528\u6237 Session \u5931\u6548\u65f6\u95f4"),(0,a.kt)("p",null,"\u867d\u7136\u5728 Session \u7684\u914d\u7f6e\u4e2d\u6709\u4e00\u9879\u662f maxAge\uff0c\u4f46\u662f\u5b83\u53ea\u80fd\u5168\u5c40\u8bbe\u7f6e Session \u7684\u6709\u6548\u671f\uff0c\u6211\u4eec\u7ecf\u5e38\u53ef\u4ee5\u5728\u4e00\u4e9b\u7f51\u7ad9\u7684\u767b\u9646\u9875\u4e0a\u770b\u5230\u6709 ",(0,a.kt)("strong",{parentName:"p"},"\u8bb0\u4f4f\u6211")," \u7684\u9009\u9879\u6846\uff0c\u52fe\u9009\u4e4b\u540e\u53ef\u4ee5\u8ba9\u767b\u9646\u7528\u6237\u7684 Session \u6709\u6548\u671f\u66f4\u957f\u3002\u8fd9\u79cd\u9488\u5bf9\u7279\u5b9a\u7528\u6237\u7684 Session \u6709\u6548\u65f6\u95f4\u8bbe\u7f6e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.session.maxAge=")," \u6765\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Post, Body, Provide, FORMAT } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { UserService } from './service/user.service';\n\n@Controller('/')\nexport class UserController {\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  userService: UserService;\n\n  @Post('/')\n  async login(@Body() data) {\n    const { username, password, rememberMe } = data;\n    const user = await this.userService.loginAndGetUser(username, password);\n\n    // \u8bbe\u7f6e Session\n    this.ctx.session.user = user;\n    // \u5982\u679c\u7528\u6237\u52fe\u9009\u4e86 `\u8bb0\u4f4f\u6211`\uff0c\u8bbe\u7f6e 30 \u5929\u7684\u8fc7\u671f\u65f6\u95f4\n    if (rememberMe) {\n      this.ctx.session.maxAge = FORMAT.MS.ONE_DAY * 30;\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"\u5ef6\u957f\u7528\u6237-session-\u6709\u6548\u671f"},"\u5ef6\u957f\u7528\u6237 Session \u6709\u6548\u671f"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u6ca1\u6709\u5bfc\u81f4 Session \u88ab\u4fee\u6539\u65f6\uff0c\u6846\u67b6\u90fd\u4e0d\u4f1a\u5ef6\u957f Session \u7684\u6709\u6548\u671f\uff0c\u4f46\u662f\u5728\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u7528\u6237\u5982\u679c\u957f\u65f6\u95f4\u90fd\u5728\u8bbf\u95ee\u6211\u4eec\u7684\u7ad9\u70b9\uff0c\u5219\u5ef6\u957f\u4ed6\u4eec\u7684 Session \u6709\u6548\u671f\uff0c\u4e0d\u8ba9\u7528\u6237\u9000\u51fa\u767b\u5f55\u6001\u3002\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"renew")," \u914d\u7f6e\u9879\u7528\u4e8e\u5b9e\u73b0\u6b64\u529f\u80fd\uff0c\u5b83\u4f1a\u5728\u53d1\u73b0\u5f53\u7528\u6237 Session \u7684\u6709\u6548\u671f\u4ec5\u5269\u4e0b\u6700\u5927\u6709\u6548\u671f\u4e00\u534a\u7684\u65f6\u5019\uff0c\u91cd\u7f6e Session \u7684\u6709\u6548\u671f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  session: {\n    renew: true,\n    // ...\n  },\n  // ...\n}\n")),(0,a.kt)("h3",{id:"\u8c03\u6574-samesite-\u914d\u7f6e\u4ee5\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee"},"\u8c03\u6574 SameSite \u914d\u7f6e\u4ee5\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u4e0d\u4f1a\u8bbe\u7f6e Session Cookie \u7684 SameSite \u9009\u9879\u3002\u4ece Chrome 84 \u7248\u672c\u5f00\u59cb\uff0cSameSite \u9009\u9879\u4e3a\u7a7a\u7684 Cookie \u9ed8\u8ba4\u5c06\u4e0d\u4f1a\u5728\u8de8\u57df\u8bf7\u6c42\u65f6\u53d1\u9001\uff0c\u5373\u9ed8\u8ba4\u6309\u7167 SameSite=Lax \u5904\u7406\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u7528\u6237\u90fd\u662f\u76f4\u63a5\u8bbf\u95ee\u4f60\u7684\u5e94\u7528\uff0c\u8fd9\u4e0d\u4f1a\u6709\u95ee\u9898\u3002\u5982\u679c\u4f60\u7684\u5e94\u7528\u9700\u8981\u652f\u6301\u8de8\u57df\u8bbf\u95ee\uff0c\u6bd4\u5982\u88ab\u5176\u4ed6\u5e94\u7528 iframe \u5d4c\u5165\uff0c\u6216\u8005\u5141\u8bb8\u914d\u7f6e CORS \u8de8\u57df\u8bf7\u6c42\uff0c\u5219\u9700\u8981\u8c03\u6574 SameSite \u9009\u9879\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u66f4\u4e3a\u5bbd\u677e\u7684 SameSite=None\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  session: {\n    sameSite: 'none',\n    // \u9700\u8981\u6307\u5b9a Secure\uff0c\u5426\u5219 SameSite=None \u65e0\u6548\n    secure: true,\n    // ...\n  },\n  // ...\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/articles/samesite-cookies-explained?hl=zh-cn"},"SameSite Cookie \u8bf4\u660e")," \u4e86\u89e3\u66f4\u591a SameSite \u9009\u9879\u3002"),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49-session-store"},"\u81ea\u5b9a\u4e49 Session Store"),(0,a.kt)("p",null,"\u8fc7\u591a\u7684\u5c06\u6570\u636e\u653e\u5728 Session \u4e2d\u5e76\u4e0d\u592a\u5408\u7406\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 Session \u4e2d\u5b58\u50a8\u4e00\u4e9b Id\uff0c\u6765\u4fdd\u8bc1\u5b89\u5168\u6027\u3002\u867d\u7136\u6211\u4eec\u89c9\u5f97 Cookie \u4f5c\u4e3a\u5b58\u50a8 Session \u5df2\u7ecf\u8db3\u591f\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u8fd8\u662f\u9700\u8981\u4f7f\u7528\u4f8b\u5982 Redis \u6765\u5b58\u50a8 Session \u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u4e0d\u540c\u7684\u4e0a\u5c42\u6846\u67b6\u4f7f\u7528\u4e86\u4e0d\u540c\u7684 Session \u65b9\u6848\uff0c\u4e0b\u9762\u5217\u4e3e\u4e86\u4e00\u4e9b Session \u66ff\u6362\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/tree/main/packages/session#custom-session-store"},"@midwayjs/koa \u65b9\u6848")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/tree/main/packages/express-session"},"@midwayjs/express \u65b9\u6848")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/eggjs/egg-session"},"@midwayjs/web\uff08egg\uff09\u65b9\u6848"))))}c.isMDXComponent=!0}}]);