(function(e){function t(t){for(var o,i,f=t[0],a=t[1],u=t[2],l=0,d=[];l<f.length;l++)i=f[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,f=1;f<n.length;f++){var a=n[f];0!==c[a]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],a=f.push.bind(f);f.push=t,f=f.slice();for(var u=0;u<f.length;u++)t(f[u]);var s=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"117e":function(e,t,n){},"15a8":function(e,t,n){"use strict";n("cad7")},"258d":function(e,t,n){e.exports=n.p+"img/hotDrink.59902df2.jpg"},"2ca8":function(e,t,n){"use strict";n("117e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"nav"},r=Object(o["k"])("HOME");function i(e,t){var n=Object(o["J"])("router-link"),i=Object(o["J"])("router-view");return Object(o["B"])(),Object(o["i"])(o["b"],null,[Object(o["j"])("div",c,[Object(o["l"])(n,{to:"/"},{default:Object(o["R"])((function(){return[r]})),_:1})]),Object(o["l"])(i)],64)}n("e77d");var f=n("6b0d"),a=n.n(f);const u={},s=a()(u,[["render",i]]);var l=s,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=n("6c02"),p={class:"home",id:"home"},j={id:"flex-box"};function h(e,t,c,r,i,f){var a=Object(o["J"])("b-img"),u=Object(o["J"])("router-link");return Object(o["B"])(),Object(o["i"])("div",p,[Object(o["j"])("div",j,[Object(o["l"])(u,{to:"/ice"},{default:Object(o["R"])((function(){return[Object(o["l"])(a,{src:n("780d"),class:"image-box",rounded:"",thumbnail:""},null,8,["src"])]})),_:1}),Object(o["l"])(u,{to:"/hot"},{default:Object(o["R"])((function(){return[Object(o["l"])(a,{src:n("258d"),class:"image-box",rounded:"",thumbnail:""},null,8,["src"])]})),_:1})])])}var O={name:"Home"};n("7152");const v=a()(O,[["render",h]]);var m=v,g=(n("ac1f"),n("841c"),{key:0}),C={id:"flex-box"},y=Object(o["j"])("h1",null,"Hot Coffees",-1),x={id:"flex-card"},k={key:1};function w(e,t,n,c,r,i){var f=Object(o["J"])("HotCoffeeCard");return r.hotCoffee?(Object(o["B"])(),Object(o["i"])("div",g,[Object(o["j"])("div",C,[y,Object(o["S"])(Object(o["j"])("input",{id:"search-box","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.search=e}),placeholder:"search hot coffee",type:"text"},null,512),[[o["P"],r.search]])]),Object(o["j"])("div",x,[(Object(o["B"])(!0),Object(o["i"])(o["b"],null,Object(o["H"])(i.filterHotCoffee,(function(e){return Object(o["B"])(),Object(o["g"])(f,{key:e.id,coffee:e},null,8,["coffee"])})),128))])])):(Object(o["B"])(),Object(o["i"])("h1",k," 404 no hot drinks for you :'( "))}n("4de4"),n("d3b7"),n("466d"),n("a4d3"),n("e01a");var I={id:"description-style"},H={id:"button-count-flex"},B={id:"count-style"};function _(e,t,n,c,r,i){var f=Object(o["J"])("b-img");return Object(o["B"])(),Object(o["i"])("div",null,[Object(o["l"])(f,{id:"image",src:r.selectedImage,rounded:"",thumbnail:""},null,8,["src"]),Object(o["j"])("h3",null,Object(o["N"])(n.coffee.title),1),Object(o["j"])("p",I,Object(o["N"])(n.coffee.description),1),Object(o["j"])("div",H,[Object(o["j"])("input",{type:"button",value:"LIKE",onClick:t[0]||(t[0]=function(e){return r.count++}),id:"like-button-style"}),Object(o["j"])("p",B,"Count: "+Object(o["N"])(r.count),1)])])}var P={name:"CoffeeCard",props:["coffee"],data:function(){return{count:0,selectedImage:"",images:[n("b5c1"),n("581c"),n("b6e1")]}},created:function(){var e=Math.floor(Math.random()*this.images.length);this.selectedImage=this.images[e]}};n("855f");const J=a()(P,[["render",_],["__scopeId","data-v-731050e0"]]);var S=J,A=n("bc3a"),M=n.n(A),N=M.a.create({baseURL:"https://api.sampleapis.com/coffee",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),R={getHotCoffee:function(){return N.get("/hot")},getIcedCoffee:function(){return N.get("/iced")}},E={name:"HotCoffee",components:{HotCoffeeCard:S},data:function(){return{hotCoffee:null,search:""}},computed:{filterHotCoffee:function(){var e=this;return this.hotCoffee.filter((function(t){return t.title.match(e.search)}))}},created:function(){var e=this;R.getHotCoffee().then((function(t){e.hotCoffee=t.data})).catch((function(e){console.log(e)}))}};n("15a8");const T=a()(E,[["render",w]]);var U=T,D=function(e){return Object(o["E"])("data-v-28e3fa60"),e=e(),Object(o["C"])(),e},F={key:0},L={id:"flex-box"},V=D((function(){return Object(o["j"])("h1",null,"Hot Coffees",-1)})),q={id:"flex-card"},K={key:1};function z(e,t,n,c,r,i){var f=Object(o["J"])("IceCoffeeCard");return r.iceCoffee?(Object(o["B"])(),Object(o["i"])("div",F,[Object(o["j"])("div",L,[V,Object(o["S"])(Object(o["j"])("input",{id:"search-box","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.search=e}),placeholder:"search ice drinks",type:"text"},null,512),[[o["P"],r.search]])]),Object(o["j"])("div",q,[i.filterIceCoffee?(Object(o["B"])(!0),Object(o["i"])(o["b"],{key:0},Object(o["H"])(i.filterIceCoffee,(function(e){return Object(o["B"])(),Object(o["g"])(f,{key:e.id,coffee:e},null,8,["coffee"])})),128)):Object(o["h"])("",!0)])])):(Object(o["B"])(),Object(o["i"])("h1",K," 404 no ice drinks for you :'( "))}var G={name:"IcedCoffee",components:{IceCoffeeCard:S},data:function(){return{iceCoffee:null,search:""}},computed:{filterIceCoffee:function(){var e=this;return this.iceCoffee.filter((function(t){return t.title.match(e.search)}))}},created:function(){var e=this;R.getIcedCoffee().then((function(t){e.iceCoffee=t.data})).catch((function(e){console.log(e)}))}};n("2ca8");const Q=a()(G,[["render",z],["__scopeId","data-v-28e3fa60"]]);var W=Q,X={class:"about"},Y=Object(o["j"])("h1",null,"This is an about page ",-1),Z=Object(o["k"])(" hello "),$=[Y,Z];function ee(e,t){return Object(o["B"])(),Object(o["i"])("div",X,$)}const te={},ne=a()(te,[["render",ee]]);var oe=ne,ce=[{path:"/",name:"Home",component:m},{path:"/hot",name:"HotCoffee",component:U},{path:"/ice",name:"IceCoffee",component:W},{path:"/about",name:"About",component:oe}],re=Object(b["a"])({history:Object(b["b"])(),routes:ce}),ie=re,fe=n("1da1"),ae=(n("96cf"),n("5502")),ue=Object(ae["a"])({state:{coffee:null},mutations:{setCoffeAPI:function(e,t){e.coffee=t}},actions:{brewCoffee:function(e){return Object(fe["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o=R.getHotCoffee(),t.t0=n,t.next=5,o;case 5:t.t1=t.sent.data,(0,t.t0)("setCoffeAPI",t.t1);case 7:case"end":return t.stop()}}),t)})))()}},modules:{}}),se=n("b80d");n("f9e3"),n("1a26");Object(o["f"])(l).use(ue).use(ie).use(se["a"]).mount("#app")},"581c":function(e,t,n){e.exports=n.p+"img/pic1.6e3ea543.jpg"},7152:function(e,t,n){"use strict";n("c4d7")},"780d":function(e,t,n){e.exports=n.p+"img/coldDrink.d6f21dc1.jpg"},"855f":function(e,t,n){"use strict";n("cc73")},b5c1:function(e,t,n){e.exports=n.p+"img/pic0.8fff1f24.jpg"},b6e1:function(e,t,n){e.exports=n.p+"img/pic2.9a307aeb.jpg"},c4d7:function(e,t,n){},cad7:function(e,t,n){},cc73:function(e,t,n){},e77d:function(e,t,n){"use strict";n("f9a5")},f9a5:function(e,t,n){}});
//# sourceMappingURL=app.cc290f75.js.map