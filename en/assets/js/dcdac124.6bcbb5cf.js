"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64359],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},i="Consul",s={unversionedId:"extensions/consul",id:"extensions/consul",title:"Consul",description:"consul is used for service governance under microservices. Its main features include service discovery, service configuration, health check, key value storage, secure service communication, and multiple data centers.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/consul.md",sourceDirName:"extensions",slug:"/extensions/consul",permalink:"/en/docs/extensions/consul",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/consul.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"gRPC",permalink:"/en/docs/extensions/grpc"},next:{title:"etcd",permalink:"/en/docs/extensions/etcd"}},l={},c=[{value:"Installation Components",id:"installation-components",level:2},{value:"Capacity currently supported",id:"capacity-currently-supported",level:2},{value:"Enable components",id:"enable-components",level:2},{value:"Configuration",id:"configuration",level:2},{value:"As a client",id:"as-a-client",level:2},{value:"Configuration center",id:"configuration-center",level:2},{value:"Other instructions",id:"other-instructions",level:2},{value:"Building Consul Test Service",id:"building-consul-test-service",level:2},{value:"Offline service",id:"offline-service",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consul"},"Consul"),(0,o.kt)("p",null,"consul is used for service governance under microservices. Its main features include service discovery, service configuration, health check, key value storage, secure service communication, and multiple data centers."),(0,o.kt)("p",null,"This article describes how to use consul as the service registration discovery center of midway and how to use consul to do soft load functions."),(0,o.kt)("p",null,"Related information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,o.kt)("p",null,"Thank you for the components provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/boostbob"},"boostbob"),"."),(0,o.kt)("p",null,"The effect is as follows:\n",(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01e5cFZx1I0draeZynr_!!6000000000831-2-tps-1500-471.png",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01iLYF8r1HQ0B3b47Fh_!!6000000000751-2-tps-1500-895.png",alt:"image.png"})),(0,o.kt)("h2",{id:"installation-components"},"Installation Components"),(0,o.kt)("p",null,"First install consul components and types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/consul@3 --save\n$ npm i @types/consul --save-dev\n")),(0,o.kt)("p",null,"Or reinstall the following dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/consul": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/consul": "^0.40.0 ",\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"capacity-currently-supported"},"Capacity currently supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Registration capability (optional)"),(0,o.kt)("li",{parentName:"ul"},"Anti-registration when service is stopped (optional)"),(0,o.kt)("li",{parentName:"ul"},"Service Selection (Random)"),(0,o.kt)("li",{parentName:"ul"},"Expose the original consul object")),(0,o.kt)("h2",{id:"enable-components"},"Enable components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as consul from '@midwayjs/consul'\n\n@Configuration({\n  imports: [\n    // ..\n    consul\n  ],\n  importConfigs: [join(__dirname, 'config')]\n})\nexport class MainConfiguration {}\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.default.ts")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  consul: {\n    provider: {\n      // Register for this service\n      register: true\n      // Apply normal offline anti-registration\n      deregister: true\n      // consul server service address\n      host: '192.168.0.10',\n      // consul server service port\n      port: 8500\n      // Policy for invoking the service (random is selected by default)\n      strategy: 'random',\n    },\n    service: {\n      // This is the address of the current midway application.\n      address: '127.0.0.1',\n      // The port of the current midway application\n      port: 7001\n      // Use for lane isolation, etc.\n      tags: ['tag1', 'tag2']            \n      name: 'my-midway-project'\n      // others consul service definition\n    }\n  },\n}\n")),(0,o.kt)("p",null,"Open the ui address of our consul server with the following effect:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01QI7A1d1dU3ECG8QxQ_!!6000000003738-2-tps-1500-471.png",alt:"image.png"})),(0,o.kt)("p",null,"It can be observed that my-midway-project project has been registered."),(0,o.kt)("p",null,"If we stop our midway project."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01EDocUO1TIvRvpxXbw_!!6000000002360-2-tps-1500-401.png",alt:"image.png"})),(0,o.kt)("p",null,"We can see that the status of our project turns red."),(0,o.kt)("p",null,"We demonstrate the situation of multiple units, as follows:(1 online +1 offline)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01kfmul91eSxu5EiJE3_!!6000000003871-2-tps-1500-405.png",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01PZrdpp21Sir5n3y9I_!!6000000006984-2-tps-1500-360.png",alt:"image.png"})),(0,o.kt)("h2",{id:"as-a-client"},"As a client"),(0,o.kt)("p",null,"For example, as client A, we need to call the interface of service B. Then we first find out the healthy service of B and then make an http request."),(0,o.kt)("p",null,"Here, for the convenience of understanding, we simulate the successful service that has just been registered:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport { BalancerService } from '@midwayjs/consul'\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  balancerService: BalancerService;\n\n  @Get('/')\n  async home() {\n    const service = await this.balancerService.getServiceBalancer().select('my-midway-project');\n\n    // output\n    console.log(service)\n\n    // ...\n  }\n}\n\n")),(0,o.kt)("p",null,"The content of the output service is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  ID: 'c434e36b-1b62-c4e1-c4ec-76c5d3742ff8',\n  Node: '1b2d5b8771cb',\n  Address: '127.0.0.1',\n  Datacenter: 'dc1',\n  TaggedAddresses: {\n    lan: '127.0.0.1',\n    lan_ipv4: '127.0.0.1',\n    wan: '127.0.0.1',\n    wan_ipv4: '127.0.0.1'\n  },\n  NodeMeta: { 'consul-network-segment': '' },\n  ServiceKind: '',\n  ServiceID: 'my-midway-project:xxx:7001',\n  ServiceName: 'my-midway-project',\n  ServiceTags: [ 'tag1', 'tag2' ],\n  ServiceAddress: 'xxxxx',\n  ServiceTaggedAddresses: {\n    lan_ipv4: { Address: 'xxxxx', Port: 7001 },\n    wan_ipv4: { Address: 'xxxxxx', Port: 7001 }\n  },\n  ServiceWeights: { Passing: 1, Warning: 1 },\n  ServiceMeta: {},\n  ServicePort: 7001,\n  ServiceEnableTagOverride: false,\n  ServiceProxy: { MeshGateway: {}, Expose: {} },\n  ServiceConnect: {},\n  CreateIndex: 14,\n  ModifyIndex: 14\n}\n")),(0,o.kt)("p",null,"At this time, we only need to connect to service B through Address and ServicePort, such as making http requests."),(0,o.kt)("p",null,"If you need to query for unhealthy ones, the second parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," method is passed the value of false:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport { BalancerService } from '@midwayjs/consul'\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  balancerService: BalancerService;\n\n  @Get('/')\n  async home() {\n\n    const service = await this.balancerService\n      .getServiceBalancer()\n      .select('my-midway-project', false);\n\n    console.log(service);\n\n    // ...\n  }\n}\n\n")),(0,o.kt)("h2",{id:"configuration-center"},"Configuration center"),(0,o.kt)("p",null,"At the same time, consul can also be used as a service configuration place, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  @Get('/')\n  async home() {\n    await this.consul.kv.set(`name`, `juhai`)\n    // let res = await this.consul.kv.get('name');\n    // console.log(res);\n    return 'Hello Midwayjs!';\n  }\n}\n\n")),(0,o.kt)("p",null,"You can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"kv.set")," method to set the corresponding configuration. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kv.get")," method to obtain the corresponding configuration."),(0,o.kt)("p",null,"Note: In the code, some students appear and get the corresponding configuration in each request. How much pressure does your QPS put on Consul server."),(0,o.kt)("p",null,"Therefore, in the case of large QPS, it can be handled as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Init, Inject, Provide, Scope, ScopeEnum } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class ConfigService {\n\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  config: any;\n\n  @Init()\n  async init() {\n    setInterval(()=> {\n      this.consul.kv.get('name').then(res=> {\n        this.config = res;\n      })\n    }, 5000);\n    this.config = await this.consul.kv.get('name');\n  }\n\n  async getConfig() {\n    return this.config;\n  }\n}\n\n")),(0,o.kt)("p",null,"The above code is equivalent to obtaining the corresponding configuration regularly. When each request comes in, the ",(0,o.kt)("inlineCode",{parentName:"p"},"getConfig")," method of obtaining Scope as the ScopeEnum.Singleton service is obtained. This reduces the pressure on the service every 5S."),(0,o.kt)("p",null,"The following figure on the Consul interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01V3P6uK1rIVs19JiWn_!!6000000005608-2-tps-1500-374.png",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN014O2GyH1sMvIhmlbs4_!!6000000005753-2-tps-1500-667.png",alt:"image.png"})),(0,o.kt)("p",null,"A total of the following methods are provided:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-get"},"get")," to obtain the value of the key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-keys"},"keys"),": queries the key list of a prefix."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-set"},"set")," to set the value of the key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-del"},"del"),": deletes the key.")),(0,o.kt)("h2",{id:"other-instructions"},"Other instructions"),(0,o.kt)("p",null,"The advantage of this is that A->B, B can also be extended, and can be isolated by tags. For example, do unit isolation, etc. And the corresponding weight control can be done through ServiceWeights."),(0,o.kt)("p",null,"Consul can also function as the configuration center of Key/Value. We will consider supporting this later."),(0,o.kt)("h2",{id:"building-consul-test-service"},"Building Consul Test Service"),(0,o.kt)("p",null,"The following describes the construction process of the stand-alone version of consul."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd -P consul\n")),(0,o.kt)("p",null,"Then run the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  my_consul_app docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                                                                                                                                                                    NAMES\n1b2d5b8771cb        consul              "docker-entrypoint.s\u2026"   4 seconds ago       Up 2 seconds        0.0.0.0:32782->8300/tcp, 0.0.0.0:32776->8301/udp, 0.0.0.0:32781->8301/tcp, 0.0.0.0:32775->8302/udp, 0.0.0.0:32780->8302/tcp, 0.0.0.0:32779->8500/tcp, 0.0.0.0:32774->8600/udp, 0.0.0.0:32778->8600/tcp   cocky_wing\n')),(0,o.kt)("p",null,"Then we open the port corresponding to the 8500: (for example, in the above figure, my corresponding port is 32779)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:32779/ui/dc1/kv"},"http://127.0.0.1:32779/ui/")),(0,o.kt)("p",null,"After opening, the effect is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN014O2GyH1sMvIhmlbs4_!!6000000005753-2-tps-1500-667.png",alt:null})),(0,o.kt)("p",null,"Then the port in our ",(0,o.kt)("inlineCode",{parentName:"p"},"config.default.ts")," is the 32779 port."),(0,o.kt)("h2",{id:"offline-service"},"Offline service"),(0,o.kt)("p",null,"If you want to manually offline services that are not needed on the consul interface, you can use the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport * as Consul from 'consul'\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  @Get(\"/222\")\n  async home2() {\n    let res = await this.consul.agent.service.deregister('my-midway-project:30.10.72.195:7002');\n    console.log(res);\n\n    // ...\n  }\n\n}\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deregister")," method corresponds to the name on the consul interface."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01d5QMUJ1DULTKPSJsr_!!6000000000219-2-tps-1500-465.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);