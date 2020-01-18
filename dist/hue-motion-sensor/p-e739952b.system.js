var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{l(t.next(e))}catch(r){i(r)}}function s(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(o,s)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(r){return l([e,r])}}function l(o){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=r.call(e,n)}catch(s){o=[6,s];a=0}finally{t=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],o=0,s=i.length;o<s;o++,a++)t[a]=i[o];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="hue-motion-sensor";var a=0;var i=false;var o=typeof window!=="undefined"?window:{};var s=o.document||{head:{}};var l={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var u=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var f=new WeakMap;var c=function(e){return f.get(e)};var $=e("r",(function(e,r){return f.set(r.$lazyInstance$=e,r)}));var v=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return f.set(e,r)};var h=function(e){return console.error(e)};var m=new Map;var d=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=m.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{m.set(i,e)}return e[a]}),h)};var p=new Map;var g=[];var y=[];var b=[];var w=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&l.$flags$&4){x(R)}else{l.raf(R)}}}};var S=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){h(n)}}e.length=0};var _=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){h(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var R=function(){a++;S(g);var e=(l.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;_(y,e);_(b,e);if(y.length>0){b.push.apply(b,y);y.length=0}if(i=g.length+y.length+b.length>0){l.raf(R)}else{a=0}};var x=function(e){return Promise.resolve().then(e)};var E=w(y,true);var C=function(e){e=typeof e;return e==="object"||e==="function"};var j=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var N=e("a",(function(){if(!(o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){l.$cssShim$=o.__stencil_cssshim;if(l.$cssShim$){return l.$cssShim$.initShim()}}))}return Promise.resolve()}));var U=e("p",(function(){{l.$cssShim$=o.__stencil_cssshim}var e=Array.from(s.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href)).href;P(n.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return Promise.resolve(n)}));var P=function(e,r){var n=j(t);try{o[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;o[n]=function(t){var i=new URL(t,e).href;var l=a.get(i);if(!l){var u=s.createElement("script");u.type="module";u.crossOrigin=r.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));l=new Promise((function(e){u.onload=function(){e(o[n].m);u.remove()}}));a.set(i,l);s.head.appendChild(u)}return l}}};var L=function(e,r){if(e!=null&&!C(e)){if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var A="hydrated";var k=function(e,r){if(r===void 0){r=""}{return function(){return}}};var O=function(e,r){{return function(){return}}};var M=new WeakMap;var I=function(e,r,n){var t=p.get(e);if(u&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}p.set(e,t)};var B=function(e,r,n,t){var a=z(r.$tagName$);var i=p.get(a);e=e.nodeType===11?e:s;if(i){if(typeof i==="string"){e=e.head||e;var o=M.get(e);var u=void 0;if(!o){M.set(e,o=new Set)}if(!o.has(a)){{if(l.$cssShim$){u=l.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var f=u["s-sc"];if(f){a=f;o=null}}else{u=s.createElement("style");u.innerHTML=i}e.insertBefore(u,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var T=function(e,r,n){var t=k("attachStyles",r.$tagName$);var a=B(e.getRootNode(),r,n,e);t()};var z=function(e,r){return"sc-"+e};var H=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var o=false;var s=[];var l=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&o){s[s.length-1].$text$+=a}else{s.push(i?q(null,a):a)}o=i}}};l(n);var u=q(e,null);u.$attrs$=r;if(s.length>0){u.$children$=s}return u}));var q=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};return n};var V={};var F=function(e){return e&&e.$tag$===V};var D=function(e,r,n,t){var a=r.$children$[n];var i=0;var o;var l;if(a.$text$!==null){o=a.$elm$=s.createTextNode(a.$text$)}else{o=a.$elm$=s.createElement(a.$tag$);if(a.$children$){for(i=0;i<a.$children$.length;++i){l=D(e,a,i);if(l){o.appendChild(l)}}}}return o};var W=function(e,r,n,t,a,i){var o=e;var s;for(;a<=i;++a){if(t[a]){s=D(null,n,a);if(s){t[a].$elm$=s;o.insertBefore(s,r)}}}};var G=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var Q=function(e,r,n,t){var a=0;var i=0;var o=r.length-1;var s=r[0];var l=r[o];var u=t.length-1;var f=t[0];var c=t[u];var $;while(a<=o&&i<=u){if(s==null){s=r[++a]}else if(l==null){l=r[--o]}else if(f==null){f=t[++i]}else if(c==null){c=t[--u]}else if(J(s,f)){K(s,f);s=r[++a];f=t[++i]}else if(J(l,c)){K(l,c);l=r[--o];c=t[--u]}else if(J(s,c)){K(s,c);e.insertBefore(s.$elm$,l.$elm$.nextSibling);s=r[++a];c=t[--u]}else if(J(l,f)){K(l,f);e.insertBefore(l.$elm$,s.$elm$);l=r[--o];f=t[++i]}else{{$=D(r&&r[i],n,i);f=t[++i]}if($){{s.$elm$.parentNode.insertBefore($,s.$elm$)}}}}if(a>o){W(e,t[u+1]==null?null:t[u+1].$elm$,n,t,i,u)}else if(i>u){G(r,a,o)}};var J=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var K=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;if(r.$text$===null){if(t!==null&&a!==null){Q(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}W(n,null,r,a,0,a.length-1)}else if(t!==null){G(t,0,t.length-1)}}else if(e.$text$!==r.$text$){n.data=r.$text$}};var X=function(e,r,n,t){var a=r.$vnode$||q(null,null);var i=F(t)?t:H(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;K(a,i)};var Y=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Z=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=k("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var o=r.$lazyInstance$;var s=function(){return ee(e,r,n,o,t)};Y(r,i);var l;a();return oe(l,(function(){return E(s)}))};var ee=function(e,r,n,t,a){var i=k("update",n.$tagName$);var o=e["s-rc"];if(a){T(e,n,r.$modeName$)}var s=k("render",n.$tagName$);{{X(e,r,n,re(t))}}if(l.$cssShim$){l.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}s();i();{var u=e["s-p"];var f=function(){return ne(e,r,n)};if(u.length===0){f()}else{Promise.all(u).then(f);r.$flags$|=4;u.length=0}}};var re=function(e,r){try{e=e.render()}catch(n){h(n)}return e};var ne=function(e,r,n){var t=k("postUpdate",n.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(A)}{ie(a,"componentDidLoad")}t();{r.$onReadyResolve$(e);if(!i){ae()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){x((function(){return Z(e,r,n,false)}))}r.$flags$&=~(4|512)}};var te=function(e,r){{var n=c(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){Z(e,n,r,false)}return t}};var ae=function(e){{s.documentElement.classList.add(A)}{l.$flags$|=2}};var ie=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){h(t)}}return undefined};var oe=function(e,r){return e&&e.then?e.then(r):r()};var se=function(e,r){return c(e).$instanceValues$.get(r)};var le=function(e,r,n,t){var a=c(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;n=L(n,t.$members$[r][0]);if(n!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(r,n);if(l){if((s&(2|16))===2){Z(i,a,t,false)}}}};var ue=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return se(this,t)},set:function(e){le(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;l.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var fe=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a,o,s,l,u,f;return __generator(this,(function(c){switch(c.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=d(t);if(!i.then)return[3,2];n=O();return[4,i];case 1:i=c.sent();n();c.label=2;case 2:if(!i.isProxied){ue(i,t,2);i.isProxied=true}a=k("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch($){h($)}{r.$flags$&=~8}a();o=z(t.$tagName$);if(!p.has(o)&&i.style){s=k("registerStyles",t.$tagName$);l=i.style;I(o,l,!!(t.$flags$&1));s()}c.label=3;case 3:u=r.$ancestorComponent$;f=function(){return Z(e,r,t,true)};if(u&&u["s-rc"]){u["s-rc"].push(f)}else{f()}return[2]}}))}))};var ce=function(e,r){if((l.$flags$&1)===0){var n=k("connectedCallback",r.$tagName$);var t=c(e);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){Y(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{x((function(){return fe(e,t,r)}))}}n()}};var $e=function(e){if((l.$flags$&1)===0){var r=c(e);var n=r.$lazyInstance$;if(l.$cssShim$){l.$cssShim$.removeHost(e)}{ie(n,"componentDidUnload")}}};var ve=e("b",(function(e,r){if(r===void 0){r={}}var n=k();var t=[];var a=r.exclude||[];var i=s.head;var u=o.customElements;var f=i.querySelector("meta[charset]");var $=s.createElement("style");var h=[];var m;var d=true;Object.assign(l,r);l.$resourcesUrl$=new URL(r.resourcesUrl||"./",s.baseURI).href;if(r.syncQueue){l.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}var i=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;v(r);return n}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(d){h.push(this)}else{l.jmp((function(){return ce(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;l.jmp((function(){return $e(e)}))};r.prototype.forceUpdate=function(){te(this,n)};r.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!u.get(i)){t.push(i);u.define(i,ue(o,n,1))}}))}));$.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");i.insertBefore($,f?f.nextSibling:i.firstChild);d=false;if(h.length>0){h.forEach((function(e){return e.connectedCallback()}))}else{l.jmp((function(){return m=setTimeout(ae,30,"timeout")}))}n()}))}}}));