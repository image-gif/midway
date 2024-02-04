"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={},s="Cookies and Session",r={unversionedId:"cookie_session",id:"cookie_session",title:"Cookies and Session",description:"HTTP Cookie (also called Web Cookie or Browser Cookie) is a small piece of data sent by the server to the user's browser and stored locally. It will be carried and sent to the server the next time the browser rerequests the same server. Usually, it is used to tell the server whether the two requests come from the same browser, such as keeping the user logged in. Cookies make it possible for stateless HTTP protocols to record stable state information.  Cookie are mainly used in the following three aspects:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/cookie_session.md",sourceDirName:".",slug:"/cookie_session",permalink:"/en/docs/cookie_session",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/cookie_session.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Logger",permalink:"/en/docs/logger_v3"},next:{title:"Built-in service",permalink:"/en/docs/built_in_service"}},l={},p=[{value:"Scope of application",id:"scope-of-application",level:2},{value:"Default Cookies",id:"default-cookies",level:2},{value:"Set Cookie",id:"set-cookie",level:2},{value:"Get Cookie",id:"get-cookie",level:2},{value:"Cookie key",id:"cookie-key",level:2},{value:"Default Session",id:"default-session",level:2},{value:"Session in Serverless",id:"session-in-serverless",level:2},{value:"Session example",id:"session-example",level:2},{value:"Modify user Session expiration time",id:"modify-user-session-expiration-time",level:3},{value:"Extend the validity period of user Session",id:"extend-the-validity-period-of-user-session",level:3},{value:"Customize SameSite option of Session Cookie",id:"customize-samesite-option-of-session-cookie",level:3},{value:"Custom Session Store",id:"custom-session-store",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cookies-and-session"},"Cookies and Session"),(0,i.kt)("p",null,"HTTP Cookie (also called Web Cookie or Browser Cookie) is a small piece of data sent by the server to the user's browser and stored locally. It will be carried and sent to the server the next time the browser rerequests the same server. Usually, it is used to tell the server whether the two requests come from the same browser, such as keeping the user logged in. Cookies make it possible for stateless HTTP protocols to record stable state information.  Cookie are mainly used in the following three aspects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Session state management (such as user login status, shopping cart, game score, or other information that needs to be recorded)"),(0,i.kt)("li",{parentName:"ul"},"Personalization settings (such as user-defined settings, themes, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Browser behavior tracking (e. g. tracking and analyzing user behavior, etc.)")),(0,i.kt)("p",null,"Cookie often assume the function of identifying the requestor's identity in Web applications, so Web applications encapsulate the concept of Session on the basis of cookies and are specially used for user identification."),(0,i.kt)("h2",{id:"scope-of-application"},"Scope of application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The built-in cookie under ",(0,i.kt)("inlineCode",{parentName:"li"},"@midwayjs/web")," (i.e. egg) is the cookie that comes with egg. It does not provide replacement capabilities and is not applicable to this document."),(0,i.kt)("li",{parentName:"ul"},"The built-in cookie library under ",(0,i.kt)("inlineCode",{parentName:"li"},"@midwayjs/express")," (i.e. express) is the cookie library that comes with express. It does not provide replacement capabilities and is not applicable to this document.")),(0,i.kt)("h2",{id:"default-cookies"},"Default Cookies"),(0,i.kt)("p",null,"Midway provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cookies")," module to manipulate Cookie."),(0,i.kt)("p",null,"At the same time, in ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),", the method of directly reading and writing cookies from the context is provided by default."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.cookies.get(name, [options])")," Cookie in Read Context Request"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.cookies.set(name, value, [options])")," writes cookie in context")),(0,i.kt)("p",null,"Examples are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // set cookie\n    this.ctx.cookies.set('foo', 'bar', { encrypt: true });\n    // get cookie\n    this.ctx.cookies.get('foo', { encrypt: true });\n  }\n}\n")),(0,i.kt)("h2",{id:"set-cookie"},"Set Cookie"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.cookies.set(key, value, options)")," API to set Cookie."),(0,i.kt)("p",null,"Setting Cookie is actually done by setting a set-cookie header in the HTTP response. Each set-cookie will allow the browser to store a key-value pair in the cookie. While setting the Cookie value, the protocol also supports many parameters to configure the transmission, storage and permissions of this Cookie."),(0,i.kt)("p",null,"These options include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Support Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The path where the key-value pair takes effect. By default, the path is set to the root path (",(0,i.kt)("inlineCode",{parentName:"td"},"/"),"). That is, all URLs under the current domain name can access this cookie."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"domain"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain name for which the key-value pair takes effect is not configured by default. It can be configured to be accessed only in the specified domain name."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expires"),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the expiration time of this key-value pair. If maxAge is set, the expires will be overwritten. If maxAge and expires are not set, Cookie will expire when the browser's session fails (usually when the browser is closed)."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the maximum save time for this key-value pair in the browser. is the number of milliseconds from the current time on the server. If maxAge is set, the expires will be overwritten."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"secure"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the key-value pair to ",(0,i.kt)("a",{parentName:"td",href:"http://stackoverflow.com/questions/13729749/how-does-cookie-secure-flag-work"},"transmit only on HTTPS connections"),". The framework helps us to determine whether the secure value is automatically set on the HTTPS connection."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"httpOnly"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set whether the key-value pair can be accessed by JS. The default value is true and JS access is not allowed."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partitioned"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set cookies for independent partition status (",(0,i.kt)("a",{parentName:"td",href:"https://developers.google.com/privacy-sandbox/3pcd/chips"},"CHIPS"),"). Note that this configuration will only take effect if ",(0,i.kt)("inlineCode",{parentName:"td"},"secure")," is true and Chrome >=114 version"),(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/cookies >= 1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"removeUnpartitioned"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to delete the cookie with the same name in the non-independent partition state. Note that this configuration will only take effect when ",(0,i.kt)("inlineCode",{parentName:"td"},"partitioned")," is true."),(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/cookies >= 1.2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"priority"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the ",(0,i.kt)("a",{parentName:"td",href:"https://developer.chrome.com/blog/new-in-devtools-81?hl=en#cookiepriority"},"Priority")," of Cookie, the optional values are ",(0,i.kt)("inlineCode",{parentName:"td"},"Low"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Medium"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"High")," , only valid for Chrome >= 81 version"),(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/cookies >= 1.1.0")))),(0,i.kt)("p",null,"In addition to these attributes, the framework extends 3 additional parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overwrite"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set how to handle key-value pairs with the same key. If set to true, the value set later will overwrite the previously set. Otherwise, two set-cookie response headers will be sent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"signed"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set whether to sign the Cookie. If set to true, the value of the key-value pair will be signed at the same time when the key-value pair is set, and the value will be checked when the key-value pair is taken later, which can prevent the front end from tampering with the value. The default value is true.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"encrypt"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Set whether to encrypt the cookie. If set to true, the value of this key-value pair will be encrypted before sending the cookie. The client cannot read the plaintext value of the cookie. The default value is false.")))),(0,i.kt)("p",null,"When setting a cookie, we need to consider whether the cookie needs to be acquired by the front end, how long it will expire, etc."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    this.ctx.cookies.set('cid', 'hello world', {\n      Domain: 'localhost', // write the domain name where the cookie is located\n      Path: '/index', // the path where the cookie is written\n      MaxAge: 10*60*1000, // cookie valid duration\n      expires: new Date('2017-02-15'), // cookie expiration time\n      httpOnly: false, // is it only used for http requests\n      overwrite: false, // whether rewrite is allowed\n    });\n    ctx.body = 'cookie is OK';\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"By default, cookies are signed and not encrypted. The browser can view plaintext, js cannot access it, and cannot be tampered with by the client.")),(0,i.kt)("p",null,"If you want Cookie to be accessed and modified by js on the browser side:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.cookies.set(key, value, {\n  httpOnly: false,\n  signed: false,\n});\n")),(0,i.kt)("p",null,"If you want the Cookie to not be modified on the browser side, you cannot see the clear text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.cookies.set(key, value, {\n  httpOnly: true, // the default is true\n  encrypt: true, // encrypted transmission\n});\n")),(0,i.kt)("h2",{id:"get-cookie"},"Get Cookie"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.cookies.get(key, options)")," API to get Cookie."),(0,i.kt)("p",null,"Since the cookie in the HTTP request is transmitted in a header, the value of the corresponding key-value pair can be quickly obtained from the entire cookie through this method provided by the framework. When setting cookies above, we can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"options.signed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"options.encrypt")," to sign or encrypt cookies, so the corresponding matching options should also be passed when obtaining cookies."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it is specified as signed at the time of setting and not specified at the time of acquisition, the obtained value will not be checked during acquisition, which may result in tampering with the client."),(0,i.kt)("li",{parentName:"ul"},"If it is specified as encrypt when setting and not specified when obtaining, the real value cannot be obtained, but the encrypted ciphertext.")),(0,i.kt)("p",null,"If you want to obtain a Cookie set by the frontend or other systems, you must specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"signed")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to avoid that the value of the Cookie cannot be obtained."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.cookies.get('frontend-cookie', {\n  signed: false,\n});\n")),(0,i.kt)("h2",{id:"cookie-key"},"Cookie key"),(0,i.kt)("p",null,"Since we need to use encryption, decryption and verification in Cookie, we need to configure a secret key for encryption."),(0,i.kt)("p",null,"The default scaffold will automatically generate a secret key in the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts"),", or it can be modified by itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  keys: ['key1','key2'],\n}\n")),(0,i.kt)("p",null,"keys are a string by default, which can be used to separate and configure multiple keys. Cookie when encrypting and decrypting using this configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only the first key is used when encrypting and signing."),(0,i.kt)("li",{parentName:"ul"},"When decrypting and checking, the keys will be traversed for decryption.")),(0,i.kt)("p",null,"If we want to update the key of the Cookie, but we don't want the Cookie previously set to the user's browser to become invalid, we can configure the new key to the front of the keys and delete the unnecessary key after a period of time."),(0,i.kt)("h2",{id:"default-session"},"Default Session"),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," has built-in Session components and provides us with ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.session")," to access or modify the current user Session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // Get the content on the Session\n    const userId = this.ctx.session.userId;\n    const posts = await this.ctx.service.post.fetch(userId);\n    // Modify the value of the Session\n    this.ctx.session.visited = ctx.session.visited? (ctx.session.visited + 1) : 1;\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"The use of the Session is very intuitive. Just read it or modify it. If you want to delete it, assign it null directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.session = null;\n")),(0,i.kt)("p",null,"What needs ",(0,i.kt)("strong",{parentName:"p"},"special attention")," is: when setting the session attribute, you need to avoid the following situations (which will cause field loss, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/koajs/session/blob/master/lib/session.js#L37-L47"},"koa-session")," source code)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not start with ",(0,i.kt)("inlineCode",{parentName:"li"},"_")),(0,i.kt)("li",{parentName:"ul"},"The value cannot be ",(0,i.kt)("inlineCode",{parentName:"li"},"isNew"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u274c Wrong usage\nctx.session._visited = 1; // --\x3e this field will be lost on the next request\nctx.session.isNew = 'HeHe'; // --\x3e is an internal keyword and should not be changed\n\n// \u2714\ufe0f The correct usage\nctx.session.visited = 1; // --\x3e no problem here\n")),(0,i.kt)("p",null,"The implementation of the Session is based on Cookie. By default, the content Session by the user is encrypted and stored directly in a field in the Cookie. Every time the user requests our website, he will bring this Cookie with him and we will use it after decryption by the server. The default configuration of the Session is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  session: {\n    MaxAge: 24*3600*1000, // 1 day\n    key: 'MW_SESS',\n    httpOnly: true\n  },\n  // ...\n}\n")),(0,i.kt)("p",null,"It can be seen that these parameters are cookie parameters except ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," represents the key of the cookie key value pair that stores the Session. Under the default configuration, cookies stored in Session will be encrypted and cannot be accessed by the front-end js, thus ensuring that the user's Session is secure."),(0,i.kt)("h2",{id:"session-in-serverless"},"Session in Serverless"),(0,i.kt)("p",null,"In the scenario of a function elastic container, the Session module is not built-in by default. You can add it manually if necessary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "dependencies": {\n     "@midwayjs/session": "^3.0.0",\n     // ...\n   },\n}\n')),(0,i.kt)("p",null,"Introduce components in configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as faas from '@midwayjs/faas';\nimport * as session from '@midwayjs/session';\n\n@Configuration({\n   imports: [\n     faas,\n     session,\n     // ...\n   ]\n})\nexport class MainConfiguration {\n   // ...\n}\n")),(0,i.kt)("h2",{id:"session-example"},"Session example"),(0,i.kt)("h3",{id:"modify-user-session-expiration-time"},"Modify user Session expiration time"),(0,i.kt)("p",null,"Although one of the Session configurations is maxAge, it can only set the validity period of the Session globally. We can often see the option box to ",(0,i.kt)("strong",{parentName:"p"},"remember me")," on the login page of some websites. After checking, the validity period of the login user's Session can be longer. This Session effective time setting for a specific user can be implemented by ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.session.maxAge ="),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Post, Body, Provide, FORMAT } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { UserService } from './service/user.service';\n\n@Controller('/')\nexport class UserController {\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  userService: UserService;\n\n  @Post('/')\n  async login(@Body() data) {\n    const { username, password, rememberMe } = data;\n    const user = await this.userService.loginAndGetUser(username, password);\n\n    // Set Session\n    this.ctx.session.user = user;\n    // If the user checked \"Remember Me\", set a 30-day expiration time.\n    if (rememberMe) {\n      this.ctx.session.maxAge = FORMAT.MS.ONE_DAY * 30;\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"extend-the-validity-period-of-user-session"},"Extend the validity period of user Session"),(0,i.kt)("p",null,"By default, when the user request does not cause the Session to be modified, the framework will not extend the validity period of the Session. However, in some scenarios, we hope that if users visit our site for a long time, they will extend their Session validity period and prevent users from exiting the login state. The framework provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"renew")," configuration item to implement this function. It will reset the validity period of the Session when it is found that the validity period of the user's Session is only half of the maximum validity period."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  session: {\n    renew: true\n    // ...\n  },\n  // ...\n}\n")),(0,i.kt)("h3",{id:"customize-samesite-option-of-session-cookie"},"Customize SameSite option of Session Cookie"),(0,i.kt)("p",null,"By default, the framework will leave the SameSite option of Session Cookie to unset. Since Chrome v84, cookies with empty SameSite will be treated as SameSite=Lax, which means when the document is requested cross origins, the cookie won't take effect. If your application is always accessed directly by your users, there won't be any problem. But if your application needs to support cross origin requests, such as being embedded with iframe, or requested from another origin with XHR, then the SameSite option needs to be changed to SiteSite=None:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  session: {\n    sameSite: 'none',\n    // SameSite=None cookies must be Secure\n    secure: true,\n    // ...\n  },\n  // ...\n}\n")),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/articles/samesite-cookies-explained?hl=zh-cn"},"SameSite Cookie explained")," for more introduction about SameSite option."),(0,i.kt)("h2",{id:"custom-session-store"},"Custom Session Store"),(0,i.kt)("p",null,"It is not reasonable to put too much data in the Session. In most cases, we only need to store some Id in the Session to ensure security. Although we think Cookie is sufficient as a storage Session, in some extreme cases, Redis, for example, is still needed to store Session."),(0,i.kt)("p",null,"Different upper-level frameworks use different Session schemes, and some Session replacement schemes are listed below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/tree/main/packages/session#custom-session-store"},"@midwayjs/koa scheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/tree/main/packages/express-session"},"@midwayjs/express Scheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/eggjs/egg-session"},"@midwayjs/Web (egg) scheme"))))}u.isMDXComponent=!0}}]);