var Ea=Object.defineProperty;var Ta=(e,t,r)=>t in e?Ea(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Dr=(e,t,r)=>(Ta(e,typeof t!="symbol"?t+"":t,r),r),Hr=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var nt=(e,t,r)=>(Hr(e,t,"read from private field"),r?r.call(e):t.get(e)),bt=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},zr=(e,t,r,n)=>(Hr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var Kt=(e,t,r)=>(Hr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var Te;(function(e){e.Chapter="chapter",e.Page="page",e.Root="root"})(Te||(Te={}));function oe(e){if(!e.title)throw new Error("Cannot have an element-book chapter with an empty title.");return{type:Te.Chapter,...e}}function Ba(e,t){return e.map(t)}function Ps(e,t){return e.match(t)??[]}function La(e){return e.replace(/,/g,"")}function Fn(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Pa={capitalizeFirstLetter:!1};function _a(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ra(e,t){return t.capitalizeFirstLetter?_a(e):e}function Na(e,t=Pa){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return Ra(n,t)}function po(e){return e!==e.toUpperCase()}function _t(e){return e.split("").reduce((r,n,o,s)=>{const i=o>0?s[o-1]:"",a=o<s.length-1?s[o+1]:"",l=po(i)||po(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Rt(e,t){return e.split(t)}const ja=String(NaN);function _s(e){if(typeof e=="string"&&isNaN(Number(e)))return ja;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${Ps(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${o}`}function Za(e){return typeof e=="number"?e:Number(typeof e=="string"?La(e):e)}function Da(e){return String(e).includes("e")}const Ha=["january","february","march","april","may","june","july","august","september","october","november","december"];Ha.map(e=>e.slice(0,3));function qn(e){return e?e instanceof Error?e.message:String(e):""}function Wn(e){return e instanceof Error?e:new Error(qn(e))}function pr(e){return!!e&&typeof e=="object"}const fo="Failed to compare objects using JSON.stringify";function go(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ir(e,t){try{return e===t?!0:pr(e)&&pr(t)?go(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Ir(e[n],t[n])):!1:go(e,t)}catch(r){const n=Wn(r);throw n.message.startsWith(fo)||(n.message=`${fo}: ${n.message}`),n}}const za=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Er(e,t){return e?za.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Un(e,t){return e&&t.every(r=>Er(e,r))}function me(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Oa(e){return Array.isArray(e)?"array":typeof e}function Rs(e,t){return Oa(e)===t}function Va(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Fa(e){return me(e).filter(t=>isNaN(Number(t)))}function qa(e){return Fa(e).map(r=>e[r])}function Wa(e,t){return qa(t).includes(e)}function X(e,t){let r=!1;const n=me(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(me(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function Gn(){let e,t,r=!1;const n=new Promise((o,s)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,s(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Gn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const Ua=["k","M","B","T","P","E","Z","Y"];function Yn({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function Ga(e,t,r){const[n,o]=Rt(e,"."),s=_s(n),i=Ps(s,/,/g).length,a=t[i-1],[l,c]=Rt(s,","),h=[c,o].join("");return l.length+1>r?["0.",l[0],t[i]].join(""):[Yn({beforeDot:l,afterDot:h,maxLength:r-1}),a].join("")}const mo=3;function Ya({input:e,maxLength:t}){const r=String(e),[n,o]=Rt(r,"e"),s=o.replace(/^[\-\+]/,""),i=o[0],a=["e",i,s].join(""),[l,c]=Rt(n,"."),h=s.length+mo;return h===t?[l,a].join(""):h>t?i==="-"?"0":String(1/0):[Yn({afterDot:c,beforeDot:l,maxLength:t-s.length+mo}),a].join("")}function Xa(e,t){const[r,n]=Rt(_s(e),".");if(r.length<=t)return Yn({beforeDot:r,afterDot:n,maxLength:t})}function Ja(e,{customSuffixes:t=Ua,maxLength:r=6}={}){const n=Za(e);if(isNaN(n)||n===1/0)return String(n);if(Da(n))return Ya({input:n,maxLength:r});const o=String(n),s=Xa(o,r);return s??Ga(o,t,r)}function Qa(e,t){try{return Ka(e,t),!0}catch{return!1}}function Ka(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function el(e,t){return Er(e,"type")&&e.type===t}const fr="isElementBookEntryTreeNode";function tl(e,t){return!!(Un(e,[fr,"entry"])&&e[fr]&&e.entry.type===t)}function rl(e){return{[fr]:!0,entry:{type:Te.Root,title:e||"Everything",parent:void 0},breadcrumb:"",children:{}}}function $n(e){return Fn(e).toLowerCase().replaceAll(/\s/g,"-")}function nl(e,t){const r=rl(t);return e.forEach(n=>{const o=ol(n,r),s=$n(n.title);if(s in o.children)throw new Error(`Cannot create duplicate entry '${s}' in parent '${o.breadcrumb}'.`);const i={[fr]:!0,children:{},breadcrumb:s,entry:n};o.children[s]=i}),r}function ol(e,t){return Ft(e).reverse().reduce((o,s)=>{const i=o.children[s];if(!i)throw new Error(`Failed to find parent ElementBookEntry by name of '${s}' in entry '${o.entry.title}'`);return i},t)}function Ft(e,t){const r=$n(e.title);return e.parent?[$n(e.parent.title),...Ft(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function bn(e,t){if(!Qa(e,1))return t;const r=e[0],n=t.children[r];if(n)return bn(e.slice(1),n)}function se(e){if(!e.title)throw new Error("Cannot have an element-book page with an empty title.");const t={type:Te.Page,...e},r=Ft(t,!0),n=new Set;return e.examples.forEach(o=>{const s=`Failed to define example '${r.concat(o.title).join(" > ")}'`;if(n.has(o.title))throw new Error(`${s}: example title '${o.title}' is already being used.`);if(!o.title)throw new Error(`${s}: example title is missing or empty.`);n.add(o.title)}),t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oe=e=>(...t)=>({_$litDirective$:e,values:t});let et=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Or;const gr=window,gt=gr.trustedTypes,vo=gt?gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,mr="$lit$",Ee=`lit$${(Math.random()+"").slice(9)}$`,Xn="?"+Ee,sl=`<${Xn}>`,mt=document,Nt=()=>mt.createComment(""),jt=e=>e===null||typeof e!="object"&&typeof e!="function",Ns=Array.isArray,js=e=>Ns(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Vr=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wo=/-->/g,$o=/>/g,We=RegExp(`>|${Vr}(?:([^\\s"'>=/]+)(${Vr}*=${Vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bo=/'/g,ko=/"/g,Zs=/^(?:script|style|textarea|title)$/i,il=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),al=il(1),ve=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),yo=new WeakMap,pt=mt.createTreeWalker(mt,129,null,!1),Ds=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",i=kt;for(let l=0;l<r;l++){const c=e[l];let h,d,p=-1,v=0;for(;v<c.length&&(i.lastIndex=v,d=i.exec(c),d!==null);)v=i.lastIndex,i===kt?d[1]==="!--"?i=wo:d[1]!==void 0?i=$o:d[2]!==void 0?(Zs.test(d[2])&&(o=RegExp("</"+d[2],"g")),i=We):d[3]!==void 0&&(i=We):i===We?d[0]===">"?(i=o??kt,p=-1):d[1]===void 0?p=-2:(p=i.lastIndex-d[2].length,h=d[1],i=d[3]===void 0?We:d[3]==='"'?ko:bo):i===ko||i===bo?i=We:i===wo||i===$o?i=kt:(i=We,o=void 0);const m=i===We&&e[l+1].startsWith("/>")?" ":"";s+=i===kt?c+sl:p>=0?(n.push(h),c.slice(0,p)+mr+c.slice(p)+Ee+m):c+Ee+(p===-2?(n.push(void 0),l):m)}const a=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vo!==void 0?vo.createHTML(a):a,n]};class Zt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[c,h]=Ds(t,r);if(this.el=Zt.createElement(c,n),pt.currentNode=this.el.content,r===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(o=pt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const p of o.getAttributeNames())if(p.endsWith(mr)||p.startsWith(Ee)){const v=h[i++];if(d.push(p),v!==void 0){const m=o.getAttribute(v.toLowerCase()+mr).split(Ee),y=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?zs:y[1]==="?"?Os:y[1]==="@"?Vs:Wt})}else l.push({type:6,index:s})}for(const p of d)o.removeAttribute(p)}if(Zs.test(o.tagName)){const d=o.textContent.split(Ee),p=d.length-1;if(p>0){o.textContent=gt?gt.emptyScript:"";for(let v=0;v<p;v++)o.append(d[v],Nt()),pt.nextNode(),l.push({type:2,index:++s});o.append(d[p],Nt())}}}else if(o.nodeType===8)if(o.data===Xn)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(Ee,d+1))!==-1;)l.push({type:7,index:s}),d+=Ee.length-1}s++}}static createElement(t,r){const n=mt.createElement("template");return n.innerHTML=t,n}}function Qe(e,t,r=e,n){var o,s,i,a;if(t===ve)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=jt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Qe(e,l._$AS(e,t.values),l,n)),t}let Hs=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:mt).importNode(n,!0);pt.currentNode=s;let i=pt.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new vt(i,i.nextSibling,this,t):c.type===1?h=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(h=new Fs(i,this,t)),this._$AV.push(h),c=o[++l]}a!==(c==null?void 0:c.index)&&(i=pt.nextNode(),a++)}return s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class vt{constructor(t,r,n,o){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Qe(this,t,r),jt(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==ve&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):js(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&jt(this._$AH)?this._$AA.nextSibling.data=t:this.$(mt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Zt.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const i=new Hs(s,this),a=i.u(this.options);i.v(n),this.$(a),this._$AH=i}}_$AC(t){let r=yo.get(t.strings);return r===void 0&&yo.set(t.strings,r=new Zt(t)),r}T(t){Ns(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new vt(this.k(Nt()),this.k(Nt()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Wt{constructor(t,r,n,o,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)t=Qe(this,t,r,0),i=!jt(t)||t!==this._$AH&&t!==ve,i&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Qe(this,a[n+l],r,l),c===ve&&(c=this._$AH[l]),i||(i=!jt(c)||c!==this._$AH[l]),c===V?t=V:t!==V&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zs extends Wt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const ll=gt?gt.emptyScript:"";class Os extends Wt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,ll):this.element.removeAttribute(this.name)}}class Vs extends Wt{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=Qe(this,t,r,0))!==null&&n!==void 0?n:V)===ve)return;const o=this._$AH,s=t===V&&o!==V||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==V&&(o===V||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Fs{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Qe(this,t)}}const cl={O:mr,P:Ee,A:Xn,C:1,M:Ds,L:Hs,D:js,R:Qe,I:vt,V:Wt,H:Os,N:Vs,U:zs,F:Fs},xo=gr.litHtmlPolyfillSupport;xo==null||xo(Zt,vt),((Or=gr.litHtmlVersions)!==null&&Or!==void 0?Or:gr.litHtmlVersions=[]).push("2.7.3");const dl=(e,t,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=s._$litPart$;if(i===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=i=new vt(t.insertBefore(Nt(),a),a,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ul}=cl,Co=()=>document.createComment(""),yt=(e,t,r)=>{var n;const o=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(Co(),s),a=o.insertBefore(Co(),s);r=new ul(i,a,e,e.options)}else{const i=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(i!==s||l){let c=r._$AA;for(;c!==i;){const h=c.nextSibling;o.insertBefore(c,s),c=h}}}return r},Ue=(e,t,r=e)=>(e._$AI(t,r),e),hl={},pl=(e,t=hl)=>e._$AH=t,fl=e=>e._$AH,Fr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=Oe(class extends et{constructor(e){var t;if(super(e),e.type!==qt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(t)}const o=e.element.classList;this.it.forEach(s=>{s in t||(o.remove(s),this.it.delete(s))});for(const s in t){const i=!!t[s];i===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(i?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return ve}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},gl=Oe(class extends et{constructor(e){if(super(e),e.type!==qt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],s=[];let i=0;for(const a of e)o[i]=n?n(a,i):i,s[i]=r(a,i),i++;return{values:s,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const s=fl(e),{values:i,keys:a}=this.dt(t,r,n);if(!Array.isArray(s))return this.ht=a,i;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let h,d,p=0,v=s.length-1,m=0,y=i.length-1;for(;p<=v&&m<=y;)if(s[p]===null)p++;else if(s[v]===null)v--;else if(l[p]===a[m])c[m]=Ue(s[p],i[m]),p++,m++;else if(l[v]===a[y])c[y]=Ue(s[v],i[y]),v--,y--;else if(l[p]===a[y])c[y]=Ue(s[p],i[y]),yt(e,c[y+1],s[p]),p++,y--;else if(l[v]===a[m])c[m]=Ue(s[v],i[m]),yt(e,s[p],s[v]),v--,m++;else if(h===void 0&&(h=Mo(a,m,y),d=Mo(l,p,v)),h.has(l[p]))if(h.has(l[v])){const M=d.get(a[m]),I=M!==void 0?s[M]:null;if(I===null){const E=yt(e,s[p]);Ue(E,i[m]),c[m]=E}else c[m]=Ue(I,i[m]),yt(e,s[p],I),s[M]=null;m++}else Fr(s[v]),v--;else Fr(s[p]),p++;for(;m<=y;){const M=yt(e,c[y+1]);Ue(M,i[m]),c[m++]=M}for(;p<=v;){const M=s[p++];M!==null&&Fr(M)}return this.ht=a,pl(e,c),ve}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vr=class extends et{constructor(t){if(super(t),this.et=V,t.type!==qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||t==null)return this.ft=void 0,this.et=t;if(t===ve)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};vr.directiveName="unsafeHTML",vr.resultType=1;const ml=Oe(vr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kn=class extends vr{};kn.directiveName="unsafeSVG",kn.resultType=2;const vl=Oe(kn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wl(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur=window,Jn=ur.ShadowRoot&&(ur.ShadyCSS===void 0||ur.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qn=Symbol(),So=new WeakMap;let qs=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Qn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Jn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=So.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&So.set(r,t))}return t}toString(){return this.cssText}};const N=e=>new qs(typeof e=="string"?e:e+"",void 0,Qn),At=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new qs(r,e,Qn)},$l=(e,t)=>{Jn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=ur.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Ao=Jn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return N(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qr;const wr=window,Io=wr.trustedTypes,bl=Io?Io.emptyScript:"",Eo=wr.reactiveElementPolyfillSupport,yn={toAttribute(e,t){switch(t){case Boolean:e=e?bl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ws=(e,t)=>t!==e&&(t==t||e==e),Wr={attribute:!0,type:String,converter:yn,reflect:!1,hasChanged:Ws};let at=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Wr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const s=this[t];this[r]=o,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ao(o))}else t!==void 0&&r.push(Ao(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $l(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Wr){var o;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:yn).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:yn;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ws)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};at.finalized=!0,at.elementProperties=new Map,at.elementStyles=[],at.shadowRootOptions={mode:"open"},Eo==null||Eo({ReactiveElement:at}),((qr=wr.reactiveElementVersions)!==null&&qr!==void 0?qr:wr.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ur,Gr;class It extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ve}}It.finalized=!0,It._$litElement$=!0,(Ur=globalThis.litElementHydrateSupport)===null||Ur===void 0||Ur.call(globalThis,{LitElement:It});const To=globalThis.litElementPolyfillSupport;To==null||To({LitElement:It});((Gr=globalThis.litElementVersions)!==null&&Gr!==void 0?Gr:globalThis.litElementVersions=[]).push("3.3.2");var kl=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,s){function i(I){if(I!==void 0&&typeof I!="function")throw new TypeError("Function expected");return I}for(var a=n.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,h=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,p=!1,v=r.length-1;v>=0;v--){var m={};for(var y in n)m[y]=y==="access"?{}:n[y];for(var y in n.access)m.access[y]=n.access[y];m.addInitializer=function(I){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(i(I||null))};var M=(0,r[v])(a==="accessor"?{get:h.get,set:h.set}:h[l],m);if(a==="accessor"){if(M===void 0)continue;if(M===null||typeof M!="object")throw new TypeError("Object expected");(d=i(M.get))&&(h.get=d),(d=i(M.set))&&(h.set=d),(d=i(M.init))&&o.push(d)}else(d=i(M))&&(a==="field"?o.push(d):h[l]=d)}c&&Object.defineProperty(c,n.name,h),p=!0},yl=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},xl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Cl(){function e(t,r){return t}return e}let Us=(()=>{let e=[Cl()],t,r=[],n;return n=class extends It{},xl(n,"DeclarativeElement"),kl(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,yl(n,r),n})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ml=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Gs(e){return(t,r)=>r!==void 0?((n,o,s)=>{o.constructor.createProperty(s,n)})(e,t,r):Ml(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yr;((Yr=window.HTMLSlotElement)===null||Yr===void 0?void 0:Yr.prototype.assignedElements)!=null;const xn=Symbol("this-is-an-element-vir-declarative-element"),Kn=Symbol("key for ignoring inputs not having been set yet"),Sl={[Kn]:!0};function Ys(e,t){const r=e.instanceState;me(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);Gs()(e,n),"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),Xs(e)}function Xs(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Js(e,t){return Cn(e,t),e.element}function Cn(e,t){if(e.type!==qt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function g(e,t){return t?Bo(e,t):Bo(void 0,e)}const Bo=Oe(class extends et{constructor(e){super(e),this.element=Js(e,"assign")}render(e,t){return Al(e,this.element,t),ve}});function Al(e,t,r){Ys(t,r)}function Qs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Us?!0:Qs(r)}function Ks(e,t){return`${e}-${_t(t)}`}function Il(e,t){return t?X(t,r=>N(`--${Ks(e,String(r))}`)):{}}function El(e,t){return e?X(e,(r,n)=>{const o=t[r];return N(`var(${o}, ${n})`)}):{}}class Tl extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function eo(){return e=>{var t;return t=class extends Tl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function je(){return eo()}function Bl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=eo()(r);return t[r]=n,t},{}):{}}var L=globalThis&&globalThis.__classPrivateFieldGet||function(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)},$e=globalThis&&globalThis.__classPrivateFieldSet||function(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r},ee,Ge,Pe,Xe,ht,lt,de,Et,Mn,Sn,Tt;const ei=Symbol("element-vir-async-state-marker"),re=Symbol("not set");class Ll{constructor(t,r){ee.add(this),Ge.set(this,re),Pe.set(this,re),Xe.set(this,re),ht.set(this,[]),lt.set(this,void 0),de.set(this,Gn()),this.asyncMarkerSymbol=ei,this.addSettleListener(r),this.resetValue(t)}resetValue(t){t instanceof ti&&(t=t.initialValue),L(this,ee,"m",Tt).call(this),t!==re&&(t instanceof Promise?this.setValue({newPromise:t}):this.setValue({resolvedValue:t}))}setValue(t){if("createPromise"in t){if(L(this,Ge,"f")===re||!Ir(t.trigger,L(this,Ge,"f"))){$e(this,Ge,t.trigger,"f");const r=t.createPromise();L(this,ee,"m",Mn).call(this,r)}}else"newPromise"in t?(L(this,Ge,"f"),L(this,ee,"m",Mn).call(this,t.newPromise),L(this,ee,"m",Et).call(this)):"resolvedValue"in t?L(this,ee,"m",Sn).call(this,t.resolvedValue):"forceUpdate"in t?($e(this,Ge,re,"f"),$e(this,Pe,re,"f"),L(this,de,"f").isSettled()||L(this,de,"f").reject("Canceled by force update"),L(this,ee,"m",Tt).call(this),L(this,ee,"m",Et).call(this)):this.resetValue(t)}getValue(){if(L(this,de,"f").isSettled()){if(L(this,Xe,"f")!==re)return L(this,Xe,"f");if(L(this,Pe,"f")===re)throw new Error("Promise says it has settled but resolution value was not set!");return L(this,Pe,"f")}else return L(this,de,"f").promise}addSettleListener(t){L(this,ht,"f").push(t)}removeSettleListener(t){$e(this,ht,L(this,ht,"f").filter(r=>r!==t),"f")}}Ge=new WeakMap,Pe=new WeakMap,Xe=new WeakMap,ht=new WeakMap,lt=new WeakMap,de=new WeakMap,ee=new WeakSet,Et=function(){L(this,ht,"f").forEach(t=>{t(this)})},Mn=function(t){t!==L(this,lt,"f")&&($e(this,Pe,re,"f"),$e(this,Xe,re,"f"),$e(this,lt,t,"f"),L(this,de,"f").isSettled()&&L(this,ee,"m",Tt).call(this),t.then(r=>{L(this,lt,"f")===t&&L(this,ee,"m",Sn).call(this,r)}).catch(r=>{L(this,lt,"f")===t&&($e(this,Xe,Wn(r),"f"),L(this,de,"f").promise.catch(()=>{}),L(this,de,"f").reject(r),L(this,ee,"m",Et).call(this))}))},Sn=function(t){t!==L(this,Pe,"f")&&($e(this,Xe,re,"f"),$e(this,Pe,t,"f"),L(this,de,"f").isSettled()&&L(this,ee,"m",Tt).call(this),L(this,de,"f").resolve(t),L(this,ee,"m",Et).call(this))},Tt=function(){$e(this,de,Gn(),"f")};class ti{constructor(t){this.initialValue=t,this.asyncMarkerSymbol=ei}}function Lo(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Po(e,t){const r=e;function n(s,i){t&&Lo(i,e,e.tagName);const a=e.asyncStateHandlerMap[i];return a?a.getValue():r[i]}return new Proxy({},{get:n,set:(s,i,a)=>{t&&Lo(i,e,e.tagName),s[i]=a;const l=e.asyncStateHandlerMap[i];if(a instanceof ti)if(l)l.resetValue(a);else{const c=new Ll(a,h=>{e[i]=h.getValue()});e.asyncStateHandlerMap[i]=c}else l?l.setValue(a):r[i]=a;return!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return n(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Pl(e,t){return t?X(t,r=>Ks(e,String(r))):{}}function _l({hostClassNames:e,cssVarNames:t,cssVarValues:r}){return{hostClassSelectors:X(e,(n,o)=>N(`:host(.${o})`)),hostClassNames:X(e,(n,o)=>N(o)),cssVarNames:t,cssVarValues:r}}function Rl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&me(t).forEach(s=>{const i=t[s],a=r[s];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function Nl(e,t){function r(o){me(o).forEach(s=>{const i=o[s];e.instanceState[s]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var jl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Tr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r=Bl(e.events),n=Pl(e.tagName,e.hostClasses),o=Il(e.tagName,e.cssVars),s=El(e.cssVars,o),i={...Sl,...e.options},a=typeof e.styles=="function"?e.styles(_l({hostClassNames:n,cssVarNames:o,cssVarValues:s})):e.styles||At``,l=e.renderCallback,c=e.inputsDefiner??(d=>d),h=(t=class extends Us{createRenderParams(){return Nl(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Xs(this)}render(){try{Qs(this)&&!this.haveInputsBeenSet&&!i[Kn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${g.name}" directive on it. If no inputs are intended, use "${Tr.name}" to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d));const p=l(d);return Rl({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},p}catch(d){const p=Wn(d);throw p.message=`Failed to render '${e.tagName}': ${p.message}`,p}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();e.initCallback(d)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();e.cleanupCallback(d)}this.initCalled=!1}assignInputs(d){Ys(this,d)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap={},this.instanceInputs=Po(this,!1),this.instanceState=Po(this,!0);const d=e.stateInit||{};me(d).forEach(p=>{Gs()(this,p),this.instanceState[p]=d[p]}),this.definition=h}},jl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=l,t.defineInputs=c,t.hostClasses=n,t.cssVarNames=o,t.stateInit=e.stateInit,t.cssVarValues=o,t);return Object.defineProperties(h,{[xn]:{value:!0,writable:!1},name:{value:Na(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof h,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,h),h}function to(e){return t=>Tr({...t,options:{...t.options,[Kn]:!1},inputsDefiner:e})}function C(e,t){return Zl(e,t)}const Zl=Oe(class extends et{constructor(e){super(e),this.element=Js(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ve}}),Xr="onResize",_o=Oe(class extends et{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Cn(e,Xr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Xr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Cn(e,Xr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Br(e,t,r){return wl(e,()=>t,()=>r)}function An(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],s=(t??[""]).map((i,a)=>{const l=Dl(i,n[a]);return`${i}${l}`});return Fn(s.join(""))}function Dl(e,t){return t._$litType$!=null||t._$litDirective$!=null?An(t):Array.isArray(t)?t.map(n=>An(n)).join(""):e.endsWith("=")?`"${t}"`:t}function ri(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),to()(r(n))),defineElementNoInputs:n=>(t(n),Tr(r(n)))}}function Hl(e,t){return e.filter((r,n)=>!t.includes(n))}function ni(e){return e.filter(t=>Un(t,["tagName",xn])&&!!t.tagName&&!!t[xn])}const oi=new WeakMap;function zl(e,t){var o;const r=ni(t);return(o=si(oi,[e,...r]).value)==null?void 0:o.template}function Ol(e,t,r){const n=ni(t);return ai(oi,[e,...n],r)}function si(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ii(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?si(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ii(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ai(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:i}=ii(e,t,n);if(!s)return{result:!1,reason:i};const a=o??{nested:void 0,template:void 0};if(o||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),ai(l,t,r,n+1)}function li(e,t,r){return{name:e,check:t,transform:r}}const Vl=new WeakMap;function ci(e,t,r){const n=zl(e,t),o=n??r();if(!n){const i=Ol(e,t,o);if(i.result)Vl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const s=Hl(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function di(e,t,r,n){const o=[],s=[],i=[];return e.forEach((l,c)=>{var M;const h=o.length-1,d=o[h],p=c-1,v=t[p];let m;n&&n(l),typeof d=="string"&&(m=(M=r.find(I=>I.check(d,l,v)))==null?void 0:M.transform,m&&(o[h]=d+m(v)+l,i.push(p))),m||o.push(l);const y=e.raw[c];m?s[h]=s[h]+m(v)+y:s.push(y)}),{templateStrings:Object.assign([],o,{raw:s}),valueIndexDeletions:i}}function ui(e){return Er(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Fl=[li("tag name css selector interpolation",(e,t,r)=>ui(r),e=>e.tagName)];function ql(e,t){return di(e,t,Fl)}function f(e,...t){const r=ci(e,t,()=>ql(e,t));return At(r.strings,...r.values)}const Wl=[li("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=ui(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Ul(e){}function Gl(e){return di(e.strings,e.values,Wl,Ul)}function u(e,...t){const r=al(e,...t),n=ci(e,t,()=>Gl(r));return{...r,strings:n.strings,values:n.values}}const Yl=0;function Xl(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Yl)}class Ut extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Ro extends Ut{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Lr="locationchange";let No=!1;const Jl=window.history.pushState;function jo(...e){const t=Jl.apply(window.history,e);return window.dispatchEvent(new Event(Lr)),t}const Ql=window.history.replaceState;function Zo(...e){const t=Ql.apply(window.history,e);return window.dispatchEvent(new Event(Lr)),t}function Kl(){if(!No){if(window.history.pushState===jo)throw new Ro("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===Zo)throw new Ro("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");No=!0,window.history.pushState=jo,window.history.replaceState=Zo,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Lr))})}}function e0(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function t0(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function r0(e){const r=(e?window.location.pathname.replace(e,""):window.location.pathname).split("/").filter(i=>!!i),o=window.location.search?e0(new URLSearchParams(window.location.search)):void 0,s=window.location.hash||void 0;return{paths:r,search:o,hash:s}}class n0 extends Ut{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function hi(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Do=6;function Ho(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Do)throw new n0(`Route sanitization depth has exceed the max of ${Do} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(hi(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Jr extends Ut{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function o0(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Jr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Jr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Jr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function s0(e,t,r,n=!1){const o=pi(e,t,r);n?window.history.replaceState(void 0,"",o):window.history.pushState(void 0,"",o)}function pi(e,t,r=""){var n;if(!r&&t!=null)throw new Ut("Route base regexp was defined but routeBase string was not provided.");const o=i0(t)?`/${r}`:"",s=e.search?t0(e.search).toString():"",i=s?`?${s}`:"",a=!((n=e.hash)===null||n===void 0)&&n.startsWith("#")?"":"#",l=e.hash?`${a}${e.hash}`:"";return`${o}/${e.paths.join("/")}${i}${l}`}function i0(e){return!!(e&&window.location.pathname.match(e))}function a0(e={}){var t;o0(e),Kl();const r=(t=e.routeBase)===null||t===void 0?void 0:t.replace(/\/+$/,""),n=r?new RegExp(`^\\/${e.routeBase}`):void 0;let o=!1;const s={listeners:new Set,initParams:e,sanitizeFullRoute:i=>{const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes:(i,a=!1,l=!1)=>{const c=s.getCurrentRawRoutes(),h={...c,...i},d=s.sanitizeFullRoute(h);if(!(!l&&hi(c,d)))return s0(d,n,r,a)},createRoutesUrl:i=>pi(i,n,r),getCurrentRawRoutes:()=>r0(n),addRouteListener:(i,a)=>{if(e.maxListenerCount&&s.listeners.size>=e.maxListenerCount)throw new Ut(`Tried to exceed route listener max of ${e.maxListenerCount}.`);return s.listeners.add(a),o||(window.addEventListener(Lr,()=>Ho(s)),o=!0),i&&Ho(s,a),a},hasRouteListener:i=>s.listeners.has(i),removeRouteListener:i=>s.listeners.delete(i),sanitizationDepth:0};return s}var he;(function(e){e.Search="search",e.Book="book"})(he||(he={}));const fi={hash:void 0,paths:[he.Book],search:void 0};function l0(e){return a0({routeBase:e,routeSanitizer(t){return{paths:c0(t.paths),hash:void 0,search:void 0}}})}function c0(e){const t=e[0];if(Wa(t,he)){if(t===he.Book)return[he.Book,...e.slice(1)];if(t===he.Search)return[t,e[1]??""];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return fi.paths}function Pr(e){if(pr(e))return X(e,(r,n)=>{if(!Rs(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(_t(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,i=r.startsWith("--")?N(r):r.startsWith("-")?At`-${N(r)}`:At`--${N(r)}`;return{name:i,value:At`var(${i}, ${N(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Pr.name}' function.`)}function d0({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const j=Pr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),u0={nav:{hover:{background:j["element-book-nav-hover-background-color"],foreground:j["element-book-nav-hover-foreground-color"]},active:{background:j["element-book-nav-active-background-color"],foreground:j["element-book-nav-active-foreground-color"]},selected:{background:j["element-book-nav-selected-background-color"],foreground:j["element-book-nav-selected-foreground-color"]}},accent:{icon:j["element-book-accent-icon-color"]},page:{background:j["element-book-page-background-color"],backgroundFaint1:j["element-book-page-background-faint-level-1-color"],backgroundFaint2:j["element-book-page-background-faint-level-2-color"],foreground:j["element-book-page-foreground-color"],foregroundFaint1:j["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:j["element-book-page-foreground-faint-level-2-color"]}};function h0(e,t){gi(e,t,u0)}function In(e){return Er(e,"_$cssResult$")}function zo(e){return Un(e,["name","value","default"])&&Rs(e.default,"string")&&In(e.name)&&In(e.value)}function gi(e,t,r){Object.entries(t).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(In(o)){if(!zo(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);d0({forCssVar:s,onElement:e,toValue:String(o)})}else{if(zo(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);gi(e,o,s)}})}function F(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,a)=>t.map(l=>l[a])),s=e.map(i=>o.map(a=>{let l=0;if(!Array.isArray(i)){for(let c of a)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(a[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(i=>i[0]):s}function Gt(e){return Re(e)==="string"}function Re(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function $r(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function mi(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),s.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function vi(e){return e[e.length-1]}function br(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function wi(e,t,r){return(r-e)/(t-e)}function ro(e,t,r){return br(t[0],t[1],wi(e[0],e[1],r))}function $i(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var p0=Object.freeze({__proto__:null,isString:Gt,type:Re,toPrecision:$r,parseFunction:mi,last:vi,interpolate:br,interpolateInv:wi,mapRange:ro,parseCoordGrammar:$i,multiplyMatrices:F});class f0{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Ze=new f0;var Ce={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const be={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function En(e){return Array.isArray(e)?e:be[e]}function kr(e,t,r,n={}){if(e=En(e),t=En(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Ze.run("chromatic-adaptation-start",o),o.M||(o.W1===be.D65&&o.W2===be.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===be.D50&&o.W2===be.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Ze.run("chromatic-adaptation-end",o),o.M)return F(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const g0=75e-6;var Vt,Tn,ft,Ar,bi;const we=class{constructor(t){bt(this,Vt);bt(this,Ar);bt(this,ft,void 0);var o,s,i;this.id=t.id,this.name=t.name,this.base=t.base?we.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=En(n),this.formats=t.formats??{};for(let a in this.formats){let l=this.formats[a];l.type||(l.type="function"),l.name||(l.name=a)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(s=this.formats)!=null&&s.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,zr(this,ft,Kt(this,Ar,bi).call(this).reverse()),Ze.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=g0}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,s)=>{let i=n[s];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[a,l]=i.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Kt(this,Vt,Tn).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Kt(this,Vt,Tn).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=we.get(t),this===t)return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=nt(this,ft),o=nt(t,ft),s,i;for(let a=0;a<n.length&&n[a]===o[a];a++)s=n[a],i=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>i;a--)r=n[a].toBase(r);for(let a=i+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=we.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(we.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof we)return t;if(Re(t)==="string"){let o=we.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return we.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Re(t),o,s;if(n==="string"?t.includes(".")?[o,s]=t.split("."):[o,s]=[,t]:Array.isArray(t)?[o,s]=t:(o=t.space,s=t.coordId),o=we.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Re(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=we.get(o);let i=s.toLowerCase(),a=0;for(let c in o.coords){let h=o.coords[c];if(c.toLowerCase()===i||((l=h.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:a,...h};a++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let S=we;Vt=new WeakSet,Tn=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=$i(t.coords);let r=Object.entries(this.coords).map(([n,o],s)=>{let i=t.coordGrammar[s][0],a=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:a,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((s,i)=>{let{fromRange:a,toRange:l,suffix:c}=r[i];return a&&l&&(s=ro(a,l,s)),s=$r(s,o),c&&(s+=c),s})}return t},ft=new WeakMap,Ar=new WeakSet,bi=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},Dr(S,"registry",{}),Dr(S,"DEFAULT_FORMAT",{type:"functions",name:"color"});var fe=new S({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class te extends S{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=fe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=F(t.toXYZ_M,r);return this.white!==this.base.white&&(n=kr(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=kr(this.base.white,this.white,r),F(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ki(e){var r,n,o,s,i;let t={str:(r=String(e))==null?void 0:r.trim()};if(Ze.run("parse-start",t),t.color)return t.color;if(t.parsed=mi(t.str),t.parsed){let a=t.parsed.name;if(a==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let d of S.all){let p=d.getFormat("color");if(p&&(l===p.id||(n=p.ids)!=null&&n.includes(l))){let v=Object.keys(d.coords).length,m=Array(v).fill(0);return m.forEach((y,M)=>m[M]=t.parsed.args[M]||0),{spaceId:d.id,coords:m,alpha:c}}}let h="";if(l in S.registry){let d=(i=(s=(o=S.registry[l].formats)==null?void 0:o.functions)==null?void 0:s.color)==null?void 0:i.id;d&&(h=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${l}). `+(h||"Missing a plugin?"))}else for(let l of S.all){let c=l.getFormat(a);if(c&&c.type==="function"){let h=1;(c.lastAlpha||vi(t.parsed.args).alpha)&&(h=t.parsed.args.pop());let d=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([p,v],m)=>{var q;let y=c.coordGrammar[m],M=(q=d[m])==null?void 0:q.type;if(y=y.find(G=>G==M),!y){let G=v.name||p;throw new TypeError(`${M} not allowed for ${G} in ${a}()`)}let I=y.range;M==="<percentage>"&&(I||(I=[0,1]));let E=v.range||v.refRange;I&&E&&(d[m]=ro(I,E,d[m]))}),{spaceId:l.id,coords:d,alpha:h}}}}else for(let a of S.all)for(let l in a.formats){let c=a.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let h=c.parse(t.str);if(h)return h.alpha??(h.alpha=1),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function D(e){if(!e)throw new TypeError("Empty color reference");Gt(e)&&(e=ki(e));let t=e.space||e.spaceId;return t instanceof S||(e.space=S.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Yt(e,t){return t=S.get(t),t.from(e)}function ge(e,t){let{space:r,index:n}=S.resolveCoord(t,e.space);return Yt(e,r)[n]}function yi(e,t,r){return t=S.get(t),e.coords=t.to(e.space,r),e}function De(e,t,r){if(e=D(e),arguments.length===2&&Re(arguments[1])==="object"){let n=arguments[1];for(let o in n)De(e,o,n[o])}else{typeof r=="function"&&(r=r(ge(e,t)));let{space:n,index:o}=S.resolveCoord(t,e.space),s=Yt(e,n);s[o]=r,yi(e,n,s)}return e}var no=new S({id:"xyz-d50",name:"XYZ D50",white:"D50",base:fe,fromBase:e=>kr(fe.white,"D50",e),toBase:e=>kr("D50",fe.white,e),formats:{color:{}}});const m0=216/24389,Oo=24/116,er=24389/27;let Qr=be.D50;var ne=new S({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Qr,base:no,fromBase(e){let r=e.map((n,o)=>n/Qr[o]).map(n=>n>m0?Math.cbrt(n):(er*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Oo?Math.pow(t[0],3):(116*t[0]-16)/er,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/er,t[2]>Oo?Math.pow(t[2],3):(116*t[2]-16)/er].map((n,o)=>n*Qr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function _r(e){return(e%360+360)%360}function v0(e,t){if(e==="raw")return t;let[r,n]=t.map(_r),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Dt=new S({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ne,fromBase(e){let[t,r,n]=e,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),_r(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Vo=25**7,yr=Math.PI,Fo=180/yr,ot=yr/180;function Bn(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,i,a]=ne.from(e),l=Dt.from(ne,[s,i,a])[1],[c,h,d]=ne.from(t),p=Dt.from(ne,[c,h,d])[1];l<0&&(l=0),p<0&&(p=0);let m=((l+p)/2)**7,y=.5*(1-Math.sqrt(m/(m+Vo))),M=(1+y)*i,I=(1+y)*h,E=Math.sqrt(M**2+a**2),q=Math.sqrt(I**2+d**2),G=M===0&&a===0?0:Math.atan2(a,M),ie=I===0&&d===0?0:Math.atan2(d,I);G<0&&(G+=2*yr),ie<0&&(ie+=2*yr),G*=Fo,ie*=Fo;let Me=c-s,Be=q-E,K=ie-G,qe=G+ie,Jt=Math.abs(K),ae;E*q===0?ae=0:Jt<=180?ae=K:K>180?ae=K-360:K<-180?ae=K+360:console.log("the unthinkable has happened");let rt=2*Math.sqrt(q*E)*Math.sin(ae*ot/2),wt=(s+c)/2,Zr=(E+q)/2,lo=Math.pow(Zr,7),Se;E*q===0?Se=qe:Jt<=180?Se=qe/2:qe<360?Se=(qe+360)/2:Se=(qe-360)/2;let co=(wt-50)**2,Ma=1+.015*co/Math.sqrt(20+co),uo=1+.045*Zr,$t=1;$t-=.17*Math.cos((Se-30)*ot),$t+=.24*Math.cos(2*Se*ot),$t+=.32*Math.cos((3*Se+6)*ot),$t-=.2*Math.cos((4*Se-63)*ot);let ho=1+.015*Zr*$t,Sa=30*Math.exp(-1*((Se-275)/25)**2),Aa=2*Math.sqrt(lo/(lo+Vo)),Ia=-1*Math.sin(2*Sa*ot)*Aa,Qt=(Me/(r*Ma))**2;return Qt+=(Be/(n*uo))**2,Qt+=(rt/(o*ho))**2,Qt+=Ia*(Be/(n*uo))*(rt/(o*ho)),Math.sqrt(Qt)}const w0=75e-6;function Bt(e,t=e.space,{epsilon:r=w0}={}){e=D(e),t=S.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Ht(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function He(e,{method:t=Ce.gamut_mapping,space:r=e.space}={}){if(Gt(arguments[1])&&(r=arguments[1]),r=S.get(r),Bt(e,r,{epsilon:0}))return e;let n=pe(e,r);if(t!=="clip"&&!Bt(e,r)){let o=He(Ht(n),{method:"clip",space:r});if(Bn(e,o)>2){let s=S.resolveCoord(t),i=s.space,a=s.id,l=pe(n,i),h=(s.range||s.refRange)[0],d=.01,p=h,v=ge(l,a);for(;v-p>d;){let m=Ht(l);m=He(m,{space:r,method:"clip"}),Bn(l,m)-2<d?p=ge(l,a):v=ge(l,a),De(l,a,(p+v)/2)}n=pe(l,r)}else n=o}if(t==="clip"||!Bt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,i)=>{let[a,l]=o[i];return a!==void 0&&(s=Math.max(a,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==e.space&&(n=pe(n,e.space)),e.coords=n.coords,e}He.returns="color";function pe(e,t,{inGamut:r}={}){e=D(e),t=S.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=He(o)),o}pe.returns="color";function xr(e,{precision:t=Ce.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;e=D(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??S.DEFAULT_FORMAT,n||(n=r.toGamut);let a=e.coords;if(a=a.map(c=>c||0),n&&!Bt(e)&&(a=He(Ht(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)s=r.serialize(a,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(v=>$r(v,t)));let h=[...a];if(c==="color"){let v=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;h.unshift(v)}let d=e.alpha;t!==null&&(d=$r(d,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";s=`${c}(${h.join(r.commas?", ":" ")}${p})`}return s}const $0=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],b0=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Rr=new te({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:$0,fromXYZ_M:b0,formats:{color:{}}});const tr=1.09929682680944,qo=.018053968510807;var xi=new te({id:"rec2020",name:"REC.2020",base:Rr,toBase(e){return e.map(function(t){return t<qo*4.5?t/4.5:Math.pow((t+tr-1)/tr,1/.45)})},fromBase(e){return e.map(function(t){return t>=qo?tr*Math.pow(t,.45)-(tr-1):4.5*t})},formats:{color:{}}});const k0=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],y0=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ci=new te({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:k0,fromXYZ_M:y0});const x0=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],C0=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Mi=new te({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:x0,fromXYZ_M:C0,formats:{color:{}}}),Wo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Uo=Array(3).fill("<percentage> | <number>[0, 255]"),Go=Array(3).fill("<number>[0, 255]");var zt=new te({id:"srgb",name:"sRGB",base:Mi,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Uo},rgb_number:{name:"rgb",commas:!0,coords:Go,noAlpha:!0},color:{},rgba:{coords:Uo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Go},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Wo.black,t.alpha=0):t.coords=Wo[e],t.coords)return t}}}}),Si=new te({id:"p3",name:"P3",base:Ci,fromBase:zt.fromBase,toBase:zt.toBase,formats:{color:{id:"display-p3"}}});Ce.display_space=zt;if(typeof CSS<"u"&&CSS.supports)for(let e of[ne,xi,Si]){let t=e.getMinCoords(),n=xr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Ce.display_space=e;break}}function M0(e,{space:t=Ce.display_space,...r}={}){let n=xr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Ce.display_space)n=new String(n),n.color=e;else{let o=pe(e,t);n=new String(xr(o,r)),n.color=o}return n}function Ai(e,t,r="lab"){r=S.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((s,i,a)=>{let l=o[a];return isNaN(i)||isNaN(l)?s:s+(l-i)**2},0))}function S0(e,t){return e=D(e),t=D(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ze(e){return ge(e,[fe,"y"])}function Ii(e,t){De(e,[fe,"y"],t)}function A0(e){Object.defineProperty(e.prototype,"luminance",{get(){return ze(this)},set(t){Ii(this,t)}})}var I0=Object.freeze({__proto__:null,getLuminance:ze,setLuminance:Ii,register:A0});function E0(e,t){e=D(e),t=D(t);let r=Math.max(ze(e),0),n=Math.max(ze(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const T0=.56,B0=.57,L0=.62,P0=.65,Yo=.022,_0=1.414,R0=.1,N0=5e-4,j0=1.14,Xo=.027,Z0=1.14;function Jo(e){return e>=Yo?e:e+(Yo-e)**_0}function st(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function D0(e,t){t=D(t),e=D(e);let r,n,o,s,i,a;t=pe(t,"srgb"),[s,i,a]=t.coords;let l=st(s)*.2126729+st(i)*.7151522+st(a)*.072175;e=pe(e,"srgb"),[s,i,a]=e.coords;let c=st(s)*.2126729+st(i)*.7151522+st(a)*.072175,h=Jo(l),d=Jo(c),p=d>h;return Math.abs(d-h)<N0?n=0:p?(r=d**T0-h**B0,n=r*j0):(r=d**P0-h**L0,n=r*Z0),Math.abs(n)<R0?o=0:n>0?o=n-Xo:o=n+Xo,o*100}function H0(e,t){e=D(e),t=D(t);let r=Math.max(ze(e),0),n=Math.max(ze(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const z0=5e4;function O0(e,t){e=D(e),t=D(t);let r=Math.max(ze(e),0),n=Math.max(ze(t),0);return n>r&&([r,n]=[n,r]),n===0?z0:(r-n)/n}function V0(e,t){e=D(e),t=D(t);let r=ge(e,[ne,"l"]),n=ge(t,[ne,"l"]);return Math.abs(r-n)}const F0=216/24389,Qo=24/116,rr=24389/27;let Kr=be.D65;var Ln=new S({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Kr,base:fe,fromBase(e){let r=e.map((n,o)=>n/Kr[o]).map(n=>n>F0?Math.cbrt(n):(rr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Qo?Math.pow(t[0],3):(116*t[0]-16)/rr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/rr,t[2]>Qo?Math.pow(t[2],3):(116*t[2]-16)/rr].map((n,o)=>n*Kr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const en=Math.pow(5,.5)*.5+.5;function q0(e,t){e=D(e),t=D(t);let r=ge(e,[Ln,"l"]),n=ge(t,[Ln,"l"]),o=Math.abs(Math.pow(r,en)-Math.pow(n,en)),s=Math.pow(o,1/en)*Math.SQRT2-40;return s<7.5?0:s}var hr=Object.freeze({__proto__:null,contrastWCAG21:E0,contrastAPCA:D0,contrastMichelson:H0,contrastWeber:O0,contrastLstar:V0,contrastDeltaPhi:q0});function W0(e,t,r={}){Gt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(hr).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=D(e),t=D(t);for(let s in hr)if("contrast"+n.toLowerCase()===s.toLowerCase())return hr[s](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ei(e){let[t,r,n]=Yt(e,fe),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ti(e){let[t,r,n]=Yt(e,fe),o=t+r+n;return[t/o,r/o]}function U0(e){Object.defineProperty(e.prototype,"uv",{get(){return Ei(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ti(this)}})}var G0=Object.freeze({__proto__:null,uv:Ei,xy:Ti,register:U0});function Y0(e,t){return Ai(e,t,"lab")}const X0=Math.PI,Ko=X0/180;function J0(e,t,{l:r=2,c:n=1}={}){let[o,s,i]=ne.from(e),[,a,l]=Dt.from(ne,[o,s,i]),[c,h,d]=ne.from(t),p=Dt.from(ne,[c,h,d])[1];a<0&&(a=0),p<0&&(p=0);let v=o-c,m=a-p,y=s-h,M=i-d,I=y**2+M**2-m**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let q=.0638*a/(1+.0131*a)+.638,G;Number.isNaN(l)&&(l=0),l>=164&&l<=345?G=.56+Math.abs(.2*Math.cos((l+168)*Ko)):G=.36+Math.abs(.4*Math.cos((l+35)*Ko));let ie=Math.pow(a,4),Me=Math.sqrt(ie/(ie+1900)),Be=q*(Me*G+1-Me),K=(v/(r*E))**2;return K+=(m/(n*q))**2,K+=I/Be**2,Math.sqrt(K)}const es=203;var oo=new S({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:fe,fromBase(e){return e.map(t=>Math.max(t*es,0))},toBase(e){return e.map(t=>Math.max(t/es,0))}});const nr=1.15,or=.66,ts=2610/2**14,Q0=2**14/2610,rs=3424/2**12,ns=2413/2**7,os=2392/2**7,K0=1.7*2523/2**5,ss=2**5/(1.7*2523),sr=-.56,tn=16295499532821565e-27,ec=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],tc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],rc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],nc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Bi=new S({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:oo,fromBase(e){let[t,r,n]=e,o=nr*t-(nr-1)*n,s=or*r-(or-1)*t,a=F(ec,[o,s,n]).map(function(p){let v=rs+ns*(p/1e4)**ts,m=1+os*(p/1e4)**ts;return(v/m)**K0}),[l,c,h]=F(rc,a);return[(1+sr)*l/(1+sr*l)-tn,c,h]},toBase(e){let[t,r,n]=e,o=(t+tn)/(1+sr-sr*(t+tn)),i=F(nc,[o,r,n]).map(function(p){let v=rs-p**ss,m=os*p**ss-ns;return 1e4*(v/m)**Q0}),[a,l,c]=F(tc,i),h=(a+(nr-1)*c)/nr,d=(l+(or-1)*h)/or;return[h,d,c]},formats:{color:{}}}),Pn=new S({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Bi,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),_r(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function oc(e,t){let[r,n,o]=Pn.from(e),[s,i,a]=Pn.from(t),l=r-s,c=n-i;Number.isNaN(o)&&Number.isNaN(a)?(o=0,a=0):Number.isNaN(o)?o=a:Number.isNaN(a)&&(a=o);let h=o-a,d=2*Math.sqrt(n*i)*Math.sin(h/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Li=3424/4096,Pi=2413/128,_i=2392/128,is=2610/16384,sc=2523/32,ic=16384/2610,as=32/2523,ac=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],lc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],cc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],dc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var _n=new S({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:oo,fromBase(e){let t=F(ac,e);return uc(t)},toBase(e){let t=hc(e);return F(dc,t)},formats:{color:{}}});function uc(e){let t=e.map(function(r){let n=Li+Pi*(r/1e4)**is,o=1+_i*(r/1e4)**is;return(n/o)**sc});return F(lc,t)}function hc(e){return F(cc,e).map(function(n){let o=Math.max(n**as-Li,0),s=Pi-_i*n**as;return 1e4*(o/s)**ic})}function pc(e,t){let[r,n,o]=_n.from(e),[s,i,a]=_n.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-i)**2+(o-a)**2)}const fc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],gc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],mc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],vc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Cr=new S({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:fe,fromBase(e){let r=F(fc,e).map(n=>Math.cbrt(n));return F(mc,r)},toBase(e){let r=F(vc,e).map(n=>n**3);return F(gc,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function wc(e,t){let[r,n,o]=Cr.from(e),[s,i,a]=Cr.from(t),l=r-s,c=n-i,h=o-a;return Math.sqrt(l**2+c**2+h**2)}var Rn=Object.freeze({__proto__:null,deltaE76:Y0,deltaECMC:J0,deltaE2000:Bn,deltaEJz:oc,deltaEITP:pc,deltaEOK:wc});function Mt(e,t,r={}){Gt(r)&&(r={method:r});let{method:n=Ce.deltaE,...o}=r;e=D(e),t=D(t);for(let s in Rn)if("deltae"+n.toLowerCase()===s.toLowerCase())return Rn[s](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function $c(e,t=.25){let n=[S.get("oklch","lch"),"l"];return De(e,n,o=>o*(1+t))}function bc(e,t=.25){let n=[S.get("oklch","lch"),"l"];return De(e,n,o=>o*(1-t))}var kc=Object.freeze({__proto__:null,lighten:$c,darken:bc});function Ri(e,t,r=.5,n={}){[e,t]=[D(e),D(t)],Re(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:i}=n;return Xt(e,t,{space:o,outputSpace:s,premultiplied:i})(r)}function Ni(e,t,r={}){let n;so(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:i=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[D(e),D(t)],n=Xt(e,t,l));let c=Mt(e,t),h=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(a!==void 0&&(h=Math.min(h,a)),h===1)d=[{p:.5,color:n(.5)}];else{let p=1/(h-1);d=Array.from({length:h},(v,m)=>{let y=m*p;return{p:y,color:n(y)}})}if(o>0){let p=d.reduce((v,m,y)=>{if(y===0)return 0;let M=Mt(m.color,d[y-1].color,s);return Math.max(v,M)},0);for(;p>o;){p=0;for(let v=1;v<d.length&&d.length<a;v++){let m=d[v-1],y=d[v],M=(y.p+m.p)/2,I=n(M);p=Math.max(p,Mt(I,m.color),Mt(I,y.color)),d.splice(v,0,{p:M,color:n(M)}),v++}}}return d=d.map(p=>p.color),d}function Xt(e,t,r={}){if(so(e)){let[l,c]=[e,t];return Xt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:i}=r;e=D(e),t=D(t),e=Ht(e),t=Ht(t);let a={colors:[e,t],options:r};if(n?n=S.get(n):n=S.registry[Ce.interpolationSpace]||e.space,o=o?S.get(o):n,e=pe(e,n),t=pe(t,n),e=He(e),t=He(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[h,d]=[ge(e,c),ge(t,c)];[h,d]=v0(l,[h,d]),De(e,c,h),De(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((p,v)=>{let m=t.coords[v];return br(p,m,l)}),h=br(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:h};return i&&(d.coords=d.coords.map(p=>p/h)),o!==n&&(d=pe(d,o)),d},{rangeArgs:a})}function so(e){return Re(e)==="function"&&!!e.rangeArgs}Ce.interpolationSpace="lab";function yc(e){e.defineFunction("mix",Ri,{returns:"color"}),e.defineFunction("range",Xt,{returns:"function<color>"}),e.defineFunction("steps",Ni,{returns:"array<color>"})}var xc=Object.freeze({__proto__:null,mix:Ri,steps:Ni,range:Xt,isRange:so,register:yc}),ji=new S({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:zt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[i,a,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-s)/c+(o<s?6:0);break;case o:i=(s-n)/c+2;break;case s:i=(n-o)/c+4}i=i*60}return[i,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let i=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Zi=new S({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ji,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Cc=new S({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Zi,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let s=1-n,i=s===0?0:1-r/s;return[t,i*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Mc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Sc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Di=new te({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Mc,fromXYZ_M:Sc}),Ac=new te({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Di,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Ic=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Ec=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Hi=new te({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:no,toXYZ_M:Ic,fromXYZ_M:Ec});const Tc=1/512,Bc=16/512;var Lc=new te({id:"prophoto",name:"ProPhoto",base:Hi,toBase(e){return e.map(t=>t<Bc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Tc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Pc=new S({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Cr,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),_r(o)]},toBase(e){let[t,r,n]=e,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ls=203,cs=2610/2**14,_c=2**14/2610,Rc=2523/2**5,ds=2**5/2523,us=3424/2**12,hs=2413/2**7,ps=2392/2**7;var Nc=new te({id:"rec2100pq",name:"REC.2100-PQ",base:Rr,toBase(e){return e.map(function(t){return(Math.max(t**ds-us,0)/(hs-ps*t**ds))**_c*1e4/ls})},fromBase(e){return e.map(function(t){let r=Math.max(t*ls/1e4,0),n=us+hs*r**cs,o=1+ps*r**cs;return(n/o)**Rc})},formats:{color:{id:"rec2100-pq"}}});const fs=.17883277,gs=.28466892,ms=.55991073,rn=3.7743;var jc=new te({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Rr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*rn:Math.exp((t-ms)/fs+gs)/12*rn})},fromBase(e){return e.map(function(t){return t/=rn,t<=1/12?Math.sqrt(3*t):fs*Math.log(12*t-gs)+ms})},formats:{color:{id:"rec2100-hlg"}}});const zi={};Ze.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Oi(e.W1,e.W2,e.options.method))});Ze.add("chromatic-adaptation-end",e=>{e.M||(e.M=Oi(e.W1,e.W2,e.options.method))});function Nr({id:e,toCone_M:t,fromCone_M:r}){zi[e]=arguments[0]}function Oi(e,t,r="Bradford"){let n=zi[r],[o,s,i]=F(n.toCone_M,e),[a,l,c]=F(n.toCone_M,t),h=[[a/o,0,0],[0,l/s,0],[0,0,c/i]],d=F(h,n.toCone_M);return F(n.fromCone_M,d)}Nr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Nr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Nr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Nr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(be,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});be.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Zc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Dc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Vi=new te({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:be.ACES,toXYZ_M:Zc,fromXYZ_M:Dc,formats:{color:{}}});const ir=2**-16,nn=-.35828683,ar=(Math.log2(65504)+9.72)/17.52;var Hc=new te({id:"acescc",name:"ACEScc",coords:{r:{range:[nn,ar],name:"Red"},g:{range:[nn,ar],name:"Green"},b:{range:[nn,ar],name:"Blue"}},referred:"scene",base:Vi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ir)*2:r<ar?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ir)+9.72)/17.52:t<ir?(Math.log2(ir+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),vs=Object.freeze({__proto__:null,XYZ_D65:fe,XYZ_D50:no,XYZ_ABS_D65:oo,Lab_D65:Ln,Lab:ne,LCH:Dt,sRGB_Linear:Mi,sRGB:zt,HSL:ji,HWB:Cc,HSV:Zi,P3_Linear:Ci,P3:Si,A98RGB_Linear:Di,A98RGB:Ac,ProPhoto_Linear:Hi,ProPhoto:Lc,REC_2020_Linear:Rr,REC_2020:xi,OKLab:Cr,OKLCH:Pc,Jzazbz:Bi,JzCzHz:Pn,ICTCP:_n,REC_2100_PQ:Nc,REC_2100_HLG:jc,ACEScg:Vi,ACEScc:Hc}),Je;const J=class{constructor(...t){bt(this,Je,void 0);let r;t.length===1&&(r=D(t[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=t,zr(this,Je,S.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in nt(this,Je).coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:a=>this.set(i,a)})}get space(){return nt(this,Je)}get spaceId(){return nt(this,Je).id}clone(){return new J(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=M0(this,...t);return r.color=new J(r.color),r}static get(t,...r){return t instanceof J?t:new J(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:s}=n,i=function(...a){let l=r(...a);if(s==="color")l=J.get(l);else if(s==="function<color>"){let c=l;l=function(...h){let d=c(...h);return J.get(d)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>J.get(c)));return l};t in J||(J[t]=i),o&&(J.prototype[t]=function(...a){return i(this,...a)})}static defineFunctions(t){for(let r in t)J.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(J);else for(let r in t)J.defineFunction(r,t[r])}};let H=J;Je=new WeakMap;H.defineFunctions({get:ge,getAll:Yt,set:De,setAll:yi,to:pe,equals:S0,inGamut:Bt,toGamut:He,distance:Ai,toString:xr});Object.assign(H,{util:p0,hooks:Ze,WHITES:be,Space:S,spaces:S.registry,parse:ki,defaults:Ce});for(let e of Object.keys(vs))S.register(vs[e]);for(let e in S.registry)Nn(e,S.registry[e]);Ze.add("colorspace-init-end",e=>{var t;Nn(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Nn(r,e)})});function Nn(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(H.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return S.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,i)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:a}=S.resolveCoord([t,s]);if(a>=0)return o[a]}return Reflect.get(o,s,i)},set:(o,s,i,a)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=S.resolveCoord([t,s]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,s,i,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}H.extend(Rn);H.extend({deltaE:Mt});H.extend(kc);H.extend({contrast:W0});H.extend(G0);H.extend(I0);H.extend(xc);H.extend(hr);function Fi(e){return X(e,(t,r)=>r instanceof H?N(r.toString({format:"hex"})):Fi(r))}const zc="dodgerblue";function jn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function on({background:e,foreground:t}){return{background:e??new H(jn(t)),foreground:t??new H(jn(e))}}var Mr;(function(e){e.Dark="dark",e.Light="light"})(Mr||(Mr={}));function Oc(e){return e==="black"?"white":"black"}const Vc={black:{foregroundFaint1:new H("#ccc"),foregroundFaint2:new H("#eee")},white:{foregroundFaint1:new H("#ccc"),foregroundFaint2:new H("#eee")}},Fc={black:{backgroundFaint1:new H("#666"),backgroundFaint2:new H("#444")},white:{backgroundFaint1:new H("#ccc"),backgroundFaint2:new H("#fafafa")}};function ws({themeColor:e=zc,themeStyle:t=Mr.Light}={}){const r=new H(e),n=new H(t===Mr.Dark?"black":"white"),o=jn(n),s=new H(o),i={nav:{hover:on({background:r.clone().set({"hsl.l":93})}),active:on({background:r.clone().set({"hsl.l":90})}),selected:on({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Fc[Oc(o)],foreground:s,...Vc[o]}};return Fi(i)}const qi=eo()("change-page"),Zn=Pr({"vir-icon-color":"currentColor"}),qc=Pr({"vir-icon-stroke-color":Zn["vir-icon-color"].value,"vir-icon-fill-color":Zn["vir-icon-color"].value}),sn={...Zn,...qc};function Wi({name:e,svgTemplate:t}){return{name:e,templateString:typeof t=="string"?t:An(t)}}const Ne=to()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:e})=>!!e.fitContainer},styles:({hostClassSelectors:e})=>f`
        :host {
            display: block;
            color: ${sn["vir-icon-color"].value};
            fill: ${sn["vir-icon-fill-color"].value};
            stroke: ${sn["vir-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vir-icon-fit-icon"]} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?ml(e.icon.templateString):""}),Wc=Wi({name:"Element16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            stroke-width="1px"
        >
            <path d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6" />
        </svg>
    `}),{defineElement:tt,defineElementNoInputs:md}=ri(),Q=tt()({tagName:"element-book-route-link",cssVars:{anchorPadding:""},styles:({cssVarValues:e})=>f`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e.anchorPadding};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return u`
            <a
                href=${r}
                ${C("click",s=>{(!e.router||Xl(s))&&(s.preventDefault(),window.scrollTo(0,0),t(new qi(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),lr=tt()({tagName:"element-book-nav",styles:f`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${j["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${j["element-book-nav-hover-background-color"].value};
            color: ${j["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${j["element-book-nav-active-background-color"].value};
            color: ${j["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            padding-right: 16px;
            display: block;
            ${Q.cssVarNames.anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${Q} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${j["element-book-nav-selected-background-color"].value};
            color: ${j["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        ${Ne} {
            display: inline-flex;
            color: ${j["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=Ui({indent:0,entryTreeNode:e.tree,rootPath:[],router:e.router,selectedPath:e.selectedPath.slice(1)});return u`
            <ul>
                ${t}
            </ul>
        `}});function Ui({indent:e,entryTreeNode:t,rootPath:r,selectedPath:n,router:o}){const s=t.breadcrumb?r.concat(t.breadcrumb):r,i=t.entry.type===Te.Page,a=Object.values(t.children).map(l=>Ui({indent:e+1,entryTreeNode:l,rootPath:s,selectedPath:n,router:o}));return u`
        <div class="nav-tree-entry" style="--indent: ${e};">
            <slot></slot>
            <li class=${t.entry.type}>
                <${Q}
                    ${g(Q,{router:o,route:{paths:[he.Book,...s]}})}
                    class=${_e({"title-row":!0,selected:Ir(n,s)})}
                >
                    <div class="title-text">
                        ${Br(i,u`
                                <${Ne} ${g(Ne,{icon:Wc})}></${Ne}>
                            `)}
                        ${t.entry.title}
                    </div>
                </${Q}>
            </li>
            ${a}
        </div>
    `}const Uc=Wi({name:"Element24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
            stroke-width="1px"
        >
            <path d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),an=tt()({tagName:"element-book-breadcrumbs",styles:f`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const s=n>=o.length-1,i=o.slice(0,n+1),a=s?"":u`
                      <span class="spacer">&gt;</span>
                  `;return u`
                <${Q}
                    ${g(Q,{route:{hash:void 0,search:void 0,paths:[he.Book,...i]},router:e.router})}
                >
                    ${r}
                </${Q}>
                ${a}
            `}):u`
                &nbsp;
            `}}),Gc=u`
    &nbsp;
`,cr=tt()({tagName:"element-book-example-controls",styles:f`
        :host {
            display: flex;
            color: ${j["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=e.example.hideControls?"":e.example.title;return u`
            <span>
                ${t||Gc}
                <span></span>
            </span>
        `}}),$s=Symbol("unset-internal-state"),ln=tt()({tagName:"element-book-example-viewer",stateInit:{internalState:$s},renderCallback({state:e,inputs:t,updateState:r}){e.internalState===$s&&r({internalState:t.example.stateInit});try{const n=t.example.render({state:e.internalState,updateState:o=>{r({internalState:{...e.internalState,...o}})}});return u`
                ${Br(!!t.example.styles,u`
                        <style>
                            ${t.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${t.breadcrumbs.join(" > ")} failed: ${qn(n)}`}}}),cn=tt()({tagName:"element-book-page-examples",styles:f`
        :host {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .individual-example-wrapper:hover ${cr} {
            color: ${j["element-book-accent-icon-color"].value};
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,renderCallback({inputs:e}){const t=e.page.examples,r=t.every(n=>n.hideControls);return gl(t,n=>e.parentBreadcrumbs.concat(n.title).join(">"),n=>{const o=e.parentBreadcrumbs.concat(n.title);return u`
                    <div class="individual-example-wrapper">
                        ${Br(!r,u`
                                <${cr}
                                    class=${_e({"hidden-controls":!!n.hideControls})}
                                    ${g(cr,{example:n})}
                                ></${cr}>
                            `)}
                        <${ln}
                            ${g(ln,{example:n,breadcrumbs:o})}
                        ></${ln}>
                    </div>
                `})}}),it=tt()({tagName:"element-book-entry-display",styles:f`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${j["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${j["element-book-page-background-color"].value};
            z-index: 9999999999;
        }

        .all-examples-wrapper {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        h1,
        h2,
        h3 {
            margin: 0;
            padding: 0;
        }

        h2,
        h3 {
            font-size: 1.5em;
        }

        ${Q} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${Ne} {
            color: ${j["element-book-accent-icon-color"].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${j["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${j["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=Yi(e.currentNode),r=Ft(e.currentNode.entry,!1).reverse(),n=Gi({nestedPages:t,parentBreadcrumbs:r,isTopLevel:!0,router:e.router});return u`
            <div class="title-bar">
                <${an}
                    ${g(an,{currentRoute:e.currentRoute,router:e.router})}
                ></${an}>
            </div>
            <div class="all-examples-wrapper">${n}</div>
        `}});function Gi({nestedPages:e,parentBreadcrumbs:t,isTopLevel:r,router:n}){return e.map(o=>{if(tl(o,Te.Page)){const s=o.entry;if(!el(s,Te.Page))throw new Error("nested entry should be a page");const i=u`
                    <${Ne} ${g(Ne,{icon:Uc})}></${Ne}>
                    ${s.title}
                `,a=r?u`
                          <h2 class="header-with-icon">${i}</h2>
                      `:u`
                          <h3 class="header-with-icon">${i}</h3>
                      `,l=[he.Book,...t.concat(o.breadcrumb)];return u`
                    <div class="page-examples">
                        <div class="title-group">
                            <${Q}
                                ${g(Q,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                            >
                                ${a}
                            </${Q}>
                            ${bs(s)}
                        </div>
                        <${cn}
                            ${g(cn,{page:s,parentBreadcrumbs:t})}
                        ></${cn}>
                    </div>
                `}else return Object.entries(o).map(([s,i])=>{const a=r?u`
                                  <h1>${s}</h1>
                              `:u`
                                  <h2>${s}</h2>
                              `,l=[he.Book,...t.concat(i.node.breadcrumb)];return u`
                            <div class="title-group">
                                <${Q}
                                    ${g(Q,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                                >
                                    ${a}
                                </${Q}>
                                ${bs(i.node.entry)}
                            </div>
                            ${Gi({nestedPages:i.nested,parentBreadcrumbs:i.node.breadcrumb?t.concat(i.node.breadcrumb):t,isTopLevel:!1,router:n})}
                        `})}).flat()}function bs(e){const t=(e.descriptionParagraphs??[]).map(r=>u`
            <p>${r}</p>
        `);return u`
        <div class="description">${t}</div>
    `}function Yi(e){return e.entry.type===Te.Page?[e]:[{[e.entry.title]:{node:e,nested:Object.values(e.children).map(Yi).flat()}}]}const Yc=new Map,dr=to()({tagName:"element-book-app",stateInit:{currentRoute:fi,router:void 0,colors:{config:void 0,theme:ws(void 0)}},styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${j["element-book-page-background-color"].value};
            color: ${j["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${it} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${lr} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({updateState:e,state:t,inputs:r,host:n}){if(r.baseUrl&&!t.router){const o=l0(r.baseUrl);e({router:o}),o.addRouteListener(!0,s=>{e({currentRoute:s})})}},renderCallback:({state:e,inputs:t,host:r,updateState:n})=>{var s;try{let a=function(d){e.router?e.router.setRoutes(d):n({currentRoute:{...e.currentRoute,...d}})};var o=a;const i={themeColor:t.themeColor};if(!Ir(i,(s=e.colors)==null?void 0:s.config)){const d=ws(i);n({colors:{config:i,theme:d}}),h0(r,d)}const l=Va(Yc,t.entries,()=>nl(t.entries,t.everythingTitle));if(!bn(e.currentRoute.paths.slice(1),l)){const d=Object.values(l.children)[0];if(!d)throw new Error("No entries exist.");const p=Ft(d.entry,!0),v=t.defaultPath??(p.length?p:void 0);if(v&&v.length){const m={paths:[he.Book,...v]};a(m)}}const h=bn(e.currentRoute.paths.slice(1),l);if(!h)throw new Error(`Tried to self-correct for invalid path ${e.currentRoute.paths.join("/")}
                        but failed to do so.`);return u`
                <div
                    class="root"
                    ${C(qi,d=>{const p=r.shadowRoot.querySelector(it.tagName);p?p.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${it.tagName}' for scrolling.`),a(d.detail)})}
                >
                    <${lr}
                        ${g(lr,{tree:l,router:e.router,selectedPath:e.currentRoute.paths})}
                    >
                        <slot name="nav-header"></slot>
                    </${lr}>
                    <${it}
                        ${g(it,{currentRoute:e.currentRoute,currentNode:h,router:e.router})}
                    ></${it}>
                </div>
            `}catch(i){return u`
                <p class="error">${qn(i)}</p>
            `}}}),ke=oe({title:"Elements",parent:void 0}),Ie={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function ks(e,t){return`var(${e}, var(${Ie.color}, ${t}))`}const k={stroke:(e="currentColor")=>ks(Ie.strokeColor,e),fill:(e="currentColor")=>ks(Ie.fillColor,e)};class w{constructor(t,r){this.iconName=t,this.svgString=r}}function $(e,...t){return e.reduce((n,o,s)=>{const i=s<t.length?t[s]:"";return n+o+i},"")}const Xc=new w("Copy16Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="2"
                d="M14 7.33C14 6.6 13.4 6 12.67 6H7.33C6.6 6 6 6.6 6 7.33v5.34C6 13.4 6.6 14 7.33 14h5.34c.73 0 1.33-.6 1.33-1.33V7.33Z"
            ></path>
            <path
                stroke-width="2"
                d="M11 5.67V4.33C11 3.6 10.4 3 9.67 3H4.33C3.6 3 3 3.6 3 4.33v5.34C3 10.4 3.6 11 4.33 11h1.34"
            ></path>
        </svg>
    `),Jc=new w("ExternalLink16Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="2"
                d="M7 4H4.33C3.6 4 3 4.6 3 5.33v6.34C3 12.4 3.6 13 4.33 13h6.34c.73 0 1.33-.6 1.33-1.33V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `),Qc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",Xi="0 0 58 58",Ji=`<image xlink:href="${Qc}" id="icp-16__b" width="58" height="58" />`,Kc=new w("Icp16Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${Xi}"
        >
            ${Ji}
        </svg>
    `),Lt=new w("InfoCircle16Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path stroke-width="2" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1" />
        </svg>
    `),e1=new w("ArrowBarUp24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 14V4L8 8m4-4 4 4" />
            <path stroke-miterlimit="4" stroke-width="2" d="M4 20h16" />
        </svg>
    `),t1=new w("ArrowForwardUp24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4" />
        </svg>
    `),Qi=new w("ArrowLeft24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14M5 12l6 6m-6-6 6-6" />
        </svg>
    `),r1=new w("ArrowLoopLeft24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3" />
        </svg>
    `),Ki=new w("ArrowLoopRight24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3" />
        </svg>
    `),ea=new w("ArrowRight24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14m-6 6 6-6m-6-6 6 6" />
        </svg>
    `),Dn=new w("ArrowsSort24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4" />
        </svg>
    `),ys={interactionDuration:f`--toniq-interaction-transition-duration`,prettyDuration:f`--toniq-pretty-transition-duration`},Y={interaction:f`var(${ys.interactionDuration}, 84ms)`,pretty:f`var(${ys.prettyDuration}, 300ms)`};function jr(){return e=>e}function dn(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const n1=(()=>{const e={backgroundColor:f`#ffffff`,foregroundColor:f`#000000`},t={...e,foregroundColor:f`#00D093`},r={...e,foregroundColor:f`#ACADAD`},n={...e,foregroundColor:f`#D6D6D6`},o={...t},s={...t,foregroundColor:f`#00A876`},i={...t,foregroundColor:f`#1D6852`},a={...n},l={...e,foregroundColor:f`#EAFBF7`},c={...e,backgroundColor:f`#D2EEFA`},h=dn(o),d=dn(s),p=dn(i),v=p,m={backgroundColor:f`#F1F3F6`,foregroundColor:e.foregroundColor},y={...m,foregroundColor:f`#9A9A9D`};return jr()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:s,pageInteractionActive:i,divider:a,dividerFaint:l,dropShadow:c,pageDarkPrimary:v,accentPrimary:h,accentPrimaryHover:d,accentPrimaryActive:p,accentSecondary:m,accentTertiary:y})})(),ta=n1;function xs(e,t){return N(`--toniq-${_t(e)}-${_t(t)}`)}const io=X(ta,e=>({backgroundColor:xs(e,"backgroundColor"),foregroundColor:xs(e,"foregroundColor")}));function ue(e,t){const r=ta[e][t],n=io[e][t];return f`var(${n}, ${r})`}const x=X(io,e=>({foregroundColor:ue(e,"foregroundColor"),backgroundColor:ue(e,"backgroundColor")}));function Z(e){return f`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}function Pt(e,t,r){return Math.min(Math.max(e,t),r)}function ct(e){return`${e}px`}function un(e){return`${e}%`}function hn(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,h)=>{const d=e[h+1];return d==null?!0:c<=t&&d>=t});if(o<0)return r;const s=e[o];if(s==null)return r;const i=e[o+1];if(i==null)return s;const a=t-s,l=i-t;return a<l?o:o+1}function o1(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=s1(e);const o=[e];for(;n<t;){const s=Math.pow(10,String(n).length-1),i=n+s;i<t&&o.push(i),n=i}return o.push(t),o.length>r&&(Cs(o,r),o.length>r&&Cs(o,r)),o}function Cs(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function s1(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function Ve({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=N(ct(n+r+t));return f`
        ${N(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            border: ${n}px solid ${x.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const ra=jr()({toniqFont:{"font-family":f`'Rubik', sans-serif`},normalWeightFont:{"font-weight":f`400`},boldFont:{"font-weight":f`600`},extraBoldFont:{"font-weight":f`900`},paragraphFont:{"line-height":f`24px`,"font-size":f`16px`},boldParagraphFont:{},labelFont:{"line-height":f`16px`,"font-size":f`12px`},boldLabelFont:{},h1Font:{"line-height":f`96px`,"font-size":f`64px`},h2Font:{"line-height":f`48px`,"font-size":f`32px`},h3Font:{"line-height":f`32px`,"font-size":f`24px`},monospaceFont:{"font-family":f`'Inconsolata', monospace`,"line-height":f`1.125em`}}),i1=X(ra,(e,t)=>{const r=N(_t(e.replace(/Font$/,"")));return X(t,o=>{const s=N(o);return f`--toniq-font-${r}-${s}`})});function xe(e){const t=i1[e],r=ra[e],n=me(t).map(o=>{const s=r[o],i=t[o];return f`
            ${N(o)}: var(${i}, ${s});
        `});return N(n.join(`
`))}const U=(()=>{const e=f`
        font-style: normal;
        color: ${x.pagePrimary.foregroundColor};
        ${xe("toniqFont")};
    `,t=f`
        ${e};
        ${xe("normalWeightFont")};
    `,r=f`
        ${e};
        ${xe("boldFont")};
    `,n=f`
        ${e};
        ${xe("extraBoldFont")};
    `,o=f`
        ${e};
        ${xe("paragraphFont")};
        ${t};
    `,s=f`
        ${e};
        ${o};
        ${r};
    `,i=f`
        ${e};
        ${xe("labelFont")};
        ${t};
    `,a=f`
        ${i};
        ${r};
    `,l=f`
        ${xe("h1Font")};
        ${n};
    `,c=f`
        ${xe("h2Font")};
        ${r};
    `,h=f`
        ${xe("h3Font")};
        ${r};
    `,d=f`
        ${xe("monospaceFont")}
    `;return jr()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:s,labelFont:i,boldLabelFont:a,h1Font:l,h2Font:c,h3Font:h,monospaceFont:d})})(),Fe=f`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,a1=jr()({popupShadow:f`
        filter: drop-shadow(0px 12px 8px ${x.dropShadow.backgroundColor});
    `}),Ke=f`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,l1=new w("ArrowsSortAscending24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 19 19 5m0 6V5h-6" />
        </svg>
    `),c1=new w("ArrowsSortDescending24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m5 5 14 14m0-6v6h-6" />
        </svg>
    `),d1=new w("Bucket24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="m19 9-2 9c-.2 1.18-1.03 2.02-2 2H9c-.97.02-1.8-.82-2-2L5 9h14ZM7 9a5 5 0 0 1 10 0"
            />
        </svg>
    `),u1=new w("BuildingStore24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M3 21h18M5 21V10.85M19 21V10.85M9 21v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4M3 7l2-4h14l2 4H3Zm18 0v1a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V7"
            />
        </svg>
    `),h1=new w("CalendarEvent24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `),p1=new w("Cash24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `),f1=new w("Chain24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="m11.736 16.792.206-.245a.64.64 0 0 1 .902-.079l.491.412a.64.64 0 0 1 .079.902l-2.059 2.451a3.206 3.206 0 0 1-2.451 1.142 3.206 3.206 0 0 1-2.058-.749l-2.452-2.058a3.208 3.208 0 0 1-1.142-2.454c0-.752.266-1.479.752-2.055l3.703-4.41v-.003a3.204 3.204 0 0 1 4.509-.39l1.456 1.223c.27.227.305.632.078.903l-.409.488a.641.641 0 0 1-.902.079l-1.459-1.224a1.283 1.283 0 0 0-1.801.157l-3.706 4.413c-.192.23-.301.521-.301.822 0 .378.17.736.458.979l2.451 2.058a1.274 1.274 0 0 0 1.802-.157l1.853-2.205Zm.528-9.584-.207.245a.64.64 0 0 1-.901.079l-.492-.412a.64.64 0 0 1-.078-.902l2.059-2.451a3.206 3.206 0 0 1 2.451-1.142c.752 0 1.482.266 2.058.749l2.451 2.058a3.208 3.208 0 0 1 1.142 2.454 3.18 3.18 0 0 1-.752 2.055l-3.702 4.41v.003a3.204 3.204 0 0 1-4.509.39l-1.457-1.223a.642.642 0 0 1-.078-.903l.41-.488a.64.64 0 0 1 .901-.079l1.459 1.224a1.286 1.286 0 0 0 1.802-.157l3.706-4.413c.192-.23.3-.521.3-.822 0-.378-.169-.736-.457-.979l-2.452-2.058a1.274 1.274 0 0 0-1.801.157l-1.853 2.205Z"
            />
        </svg>
    `),na=new w("CheckMark24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m19 6-9 12-5-5" />
        </svg>
    `),oa=new w("ChevronDown24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
            />
        </svg>
    `),g1=new w("ChevronUp24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 15 6-6 6 6"
            />
        </svg>
    `),m1=new w("Circle24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
        </svg>
    `),dt=new w("CircleDot24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="${k.stroke()}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${k.fill()}"
                stroke="${k.fill()}"
                stroke-width="2"
            />
        </svg>
    `),v1=new w("CirclePlusFill24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${k.fill()}"
                stroke="none"
                d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm-1 9H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2Z"
            />
        </svg>
    `),w1=new w("CirclePlusOutline24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6" />
        </svg>
    `),$1=new w("CircleWavyCheck24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${k.fill()}"
                stroke="none"
                d="M4.93 19.07c.49.48 1.15.7 1.9.75.63.04 1.35-.08 1.87.14.52.22.96.81 1.45 1.23.57.5 1.2.81 1.85.81.65 0 1.28-.32 1.86-.81.5-.42.94-1.02 1.44-1.23.5-.21 1.22-.09 1.86-.14a2.93 2.93 0 0 0 1.9-.75c.49-.48.7-1.15.76-1.9.04-.63-.08-1.35.14-1.87.22-.52.81-.96 1.23-1.45.5-.57.81-1.2.81-1.85 0-.65-.32-1.28-.81-1.86-.42-.5-1.02-.94-1.23-1.44-.21-.5-.09-1.22-.14-1.86a2.93 2.93 0 0 0-.75-1.9 2.9 2.9 0 0 0-1.9-.76c-.63-.04-1.35.08-1.87-.14-.52-.22-.96-.81-1.45-1.23A2.9 2.9 0 0 0 12 2c-.65 0-1.28.32-1.86.81-.5.42-.94 1.02-1.44 1.23-.5.21-1.22.09-1.86.14-.76.06-1.43.27-1.9.75a2.9 2.9 0 0 0-.76 1.9c-.04.63.08 1.35-.14 1.87-.22.52-.81.96-1.23 1.45-.5.57-.81 1.2-.81 1.85 0 .65.32 1.28.81 1.86.42.5 1.02.94 1.23 1.44.21.5.09 1.22.14 1.86.06.76.27 1.43.75 1.9ZM8.3 12.7l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L11 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),b1=new w("Clock24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 4v5l3 3" />
        </svg>
    `),k1=new w("Code24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="M21.393 2H2.607A2.61 2.61 0 0 0 0 4.607v14.786A2.61 2.61 0 0 0 2.607 22h18.786A2.61 2.61 0 0 0 24 19.393V4.607A2.61 2.61 0 0 0 21.393 2Zm1.902 17.393a1.904 1.904 0 0 1-1.902 1.902H2.607a1.904 1.904 0 0 1-1.902-1.902V4.607c0-1.049.853-1.903 1.902-1.903h18.786c1.049 0 1.902.854 1.902 1.903v14.786ZM21.664 6H2.336A.344.344 0 0 0 2 6.352c0 .195.15.353.336.353h19.328A.345.345 0 0 0 22 6.352.344.344 0 0 0 21.664 6ZM2.607 4.583a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm3.006 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm-1.503 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm4.757 5.411a.351.351 0 0 0-.498 0l-3.757 3.757a.351.351 0 0 0 0 .498l3.757 3.757a.352.352 0 1 0 .498-.498L5.359 14l3.508-3.508a.351.351 0 0 0 0-.498Zm6.764 0a.352.352 0 1 0-.499.498L18.641 14l-3.509 3.508a.353.353 0 0 0 .499.498l3.757-3.757a.353.353 0 0 0 0-.498l-3.757-3.757Zm-2.008-.458a.352.352 0 0 0-.451.211l-3.006 8.266a.351.351 0 1 0 .662.24l3.006-8.266a.352.352 0 0 0-.211-.451Z"
            />
        </svg>
    `),sa=new w("Copy24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `),y1=new w("DotsVertical24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `),x1=new w("Edit24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `),ia=new w("ExternalLink24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
            />
        </svg>
    `),C1=new w("Filter24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `),M1=new w("Geometry24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `),S1=new w("GridDots24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `),A1=new w("HeartFill24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${k.fill()}"
                stroke="${k.stroke()}"
                stroke-width="2"
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `),I1=new w("HeartOutline24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="m19.51 13.58-7.5 7.43-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57"
            />
        </svg>
    `),E1=new w("Icp24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${Xi}"
        >
            ${Ji}
        </svg>
        </svg>
    `),T1=new w("Infinity24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `),B1=new w("LayersLinked24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `),L1=new w("LayoutGrid24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `),P1=new w("Lifebuoy24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-5a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm3 12 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"
            />
        </svg>
    `),_1=new w("List24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
        </svg>
    `),R1=new w("ListDetails24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M9 5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm0 10a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `),N1=new w("Loader24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `),j1=new w("LoaderAnimated24Icon",$`
        <style>
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            svg {
                animation: spin 1s infinite linear;
            }
        </style>
        <svg
            class="loader-animated-24-icon__svg"
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
        >
            <path d="M12 6V3" />
            <path d="M16.25 7.75 18.4 5.6" />
            <path d="M18 12h3" />
            <path d="m16.25 16.25 2.15 2.15" />
            <path d="M12 18v3" />
            <path d="M7.75 16.25 5.6 18.4" />
            <path d="M6 12H3" />
            <path d="M7.75 7.75 5.6 5.6" />
        </svg>
    `),Z1=new w("Lock24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4V7a4 4 0 0 1 8 0v4"
            />
        </svg>
    `),D1=new w("LockOpen24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4V6a4 4 0 0 1 8 0"
            />
        </svg>
    `),H1=new w("Menu24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `),z1=new w("Paper24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            width="24"
            height="24"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `),O1=new w("Photo24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M15 8h.01M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7ZM4 15l4-4c.93-.9 2.07-.9 3 0l5 5m-2-2 1-1c.93-.9 2.07-.9 3 0l2 2"
            />
        </svg>
    `),Hn=new w("Rocket24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `),aa=new w("Search24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6" />
        </svg>
    `),V1=new w("Send24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `),F1=new w("ShoppingCart24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm11 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0H6V3H4m2 2 14 1-1 7H6"
            />
        </svg>
    `),q1=new w("Social24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `),W1=new w("Square24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                width="16"
                height="16"
                x="4"
                y="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                rx="2"
            />
        </svg>
    `),U1=new w("SquareCheck24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path fill="none" d="M6 6h12v12H6z" />
            <path
                fill="${k.fill()}"
                stroke="none"
                d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6ZM8.3 12.7l2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L11 12.58l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),Sr=new w("Trash24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            />
        </svg>
    `),G1=new w("User24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            fill="${k.stroke()}"
            width="24"
            height="24"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="nonzero"
                d="M12 3.379A8.632 8.632 0 0 0 3.379 12 8.637 8.637 0 0 0 12 20.621a8.621 8.621 0 0 0 0-17.242Zm5.243 13.595a5.85 5.85 0 0 0-10.482.006A7.153 7.153 0 0 1 4.758 12 7.24 7.24 0 0 1 12 4.759 7.241 7.241 0 0 1 19.241 12a7.15 7.15 0 0 1-1.998 4.974ZM12 6.828a3.107 3.107 0 0 0-2.868 1.915 3.1 3.1 0 0 0 .673 3.382 3.106 3.106 0 0 0 3.382.673 3.1 3.1 0 0 0 1.007-5.061A3.086 3.086 0 0 0 12 6.828Z"
            />
        </svg>
    `),Y1=new w("Users24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `),X1=new w("Wallet24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 12V9c0-.62-.42-1-1-1H6S4 8 4 6s2-2 2-2h10c.59 0 1 .4 1 1v2m3 5v4h-4a2 2 0 1 1 0-4h4m-1 5v2c0 .6-.4 1-1 1H6c-1 0-2-1-2-2V6"
            />
        </svg>
    `),J1=new w("WorldUpload24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12m-.42-12a17 17 0 0 0 0 18m.92-18a16.9 16.9 0 0 1 2.5 9m3 9v-7l3 3m-3-3-3 3"
            />
        </svg>
    `),Q1=new w("X24Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M18 6 6 18M6 6l12 12" />
        </svg>
    `),la=new w("Kyc32Icon",$`
        <svg
            viewBox="0 0 32 32"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
        >
            <path
                style="fill:none"
                d="M106 122h533v491H106z"
                transform="matrix(.06004 0 0 .06517 -6.364 -7.951)"
            />
            <path
                d="M30.198 5.54a.47.47 0 0 0-.427-.417 9.458 9.458 0 0 1-2.592-.722 9.192 9.192 0 0 1-2.356-1.428.47.47 0 0 0-.632 0 9.175 9.175 0 0 1-2.356 1.428 9.48 9.48 0 0 1-2.578.722.468.468 0 0 0-.429.417c-.021.199-.49 4.88.668 7.19 1.385 2.762 4.687 4.311 4.826 4.376a.468.468 0 0 0 .394 0c.138-.065 3.44-1.614 4.825-4.376 1.147-2.31.678-6.991.657-7.19Z"
                style="fill:#00d093;fill-rule:nonzero"
            />
            <path
                d="M24.86 2.137 24.506 2a.525.525 0 0 0-.354.137 10.284 10.284 0 0 1-2.635 1.598 10.62 10.62 0 0 1-2.885.807.527.527 0 0 0-.48.467c-.024.223-.549 5.46.747 8.046 1.55 3.09 5.245 4.823 5.4 4.897h.441c.154-.073 3.85-1.807 5.4-4.897 1.282-2.586.758-7.823.734-8.046a.526.526 0 0 0-.477-.467 10.566 10.566 0 0 1-2.9-.807 10.29 10.29 0 0 1-2.637-1.598Zm4.328 10.449c-1.178 2.353-3.895 3.892-4.682 4.304-.786-.412-3.504-1.951-4.68-4.304-.966-1.93-.772-5.793-.678-7.057a12.426 12.426 0 0 0 2.78-.829 11.926 11.926 0 0 0 2.578-1.495c.794.604 1.66 1.106 2.578 1.495.891.384 1.825.662 2.78.829.097 1.264.291 5.127-.676 7.057Zm-1.994-4.661-3.299 3.3-2.077-2.078a.526.526 0 0 0-.743.743l2.447 2.447a.527.527 0 0 0 .743 0l3.671-3.672a.524.524 0 0 0-.742-.74Z"
            />
            <path
                d="M16.5 7.5H5.93A2.431 2.431 0 0 0 3.5 9.93v13.14a2.431 2.431 0 0 0 2.43 2.43h20.14a2.431 2.431 0 0 0 2.43-2.43V17.5"
                style="fill:none;stroke:#000;stroke-width:1px"
            />
            <path
                d="M19 21h6"
                style="fill:none;stroke:#000;stroke-width:1px"
                transform="matrix(1 0 0 1 .5 .5)"
            />
            <path
                d="M19 19h4"
                style="fill:none;stroke:#000;stroke-width:1.13px"
                transform="matrix(.75 0 0 1 5.25 .5)"
            />
            <circle
                cx="11.5"
                cy="14.5"
                r="2.5"
                style="fill:tan;stroke:#000;stroke-width:.83px"
                transform="matrix(1.2 0 0 1.2 -2.3 -3.9)"
            />
            <path
                d="M8.001 20.597v.225c0 .419.129.82.358 1.117.23.295.542.462.866.462h4.55c.324 0 .636-.167.866-.462.229-.297.358-.698.358-1.117v-.225c.014-.778-.172-1.54-.531-2.167-.359-.626-.868-1.082-1.449-1.294H9.981c-.581.212-1.09.668-1.449 1.294a4.25 4.25 0 0 0-.531 2.167Z"
                style="fill:#6495ed;fill-rule:nonzero;stroke:#000;stroke-width:.88px;stroke-linecap:butt;stroke-miterlimit:2"
                transform="matrix(1.14286 0 0 1.13955 -1.643 -3.027)"
            />
        </svg>
    `),ca=new w("FolderOff48Icon",$`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="48"
            height="48"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width="4"
                d="m6 6 36 36m0-8V18c0-2.2-1.77-4-4-4l-14-.02-6-6h-2M8 8s-2 2-2 4v22c0 2.2 1.77 4 4 4h28"
            />
        </svg>
    `),da=new w("Api64Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            fill="${k.stroke()}"
            fill-rule="nonzero"
            viewBox="0 0 64 64"
            width="64"
            height="64"
        >
            <path
                d="m58.672 15.498-.007-.049a1.979 1.979 0 0 0-.043-.2c-.004-.013-.006-.026-.011-.039a1.7 1.7 0 0 0-.228-.486 1.924 1.924 0 0 0-.123-.169l-.013-.017a1.908 1.908 0 0 0-.165-.171l-.037-.031a1.736 1.736 0 0 0-.161-.125l-.035-.024a1.678 1.678 0 0 0-.206-.117l-.014-.009L32.808 2.138a1.87 1.87 0 0 0-1.617 0L6.366 14.061a1.868 1.868 0 0 0-1.058 1.682v30.67c0 .678.368 1.303.961 1.632l24.825 13.766.003.001a1.817 1.817 0 0 0 .411.166l.056.014a2.234 2.234 0 0 0 .219.041 1.72 1.72 0 0 0 .433 0l.056-.009c.055-.009.109-.018.162-.032l.058-.014c.058-.016.114-.035.171-.056l.036-.013a2.52 2.52 0 0 0 .204-.097l.002-.001L57.73 48.045c.593-.329.962-.954.962-1.632V15.739a2.175 2.175 0 0 0-.02-.241ZM54.96 45.312 33.866 57.011v-6.578a1.867 1.867 0 0 0-3.733 0v6.578L9.04 45.314V18.771a10.728 10.728 0 0 1 5.729 2.986l3.767 4.161c-.628.797-1.431 1.914-1.655 2.755a7.168 7.168 0 0 0 .725 5.452l12.434-7.206a7.166 7.166 0 0 0-4.369-3.34c-1.113-.296-2.814-.108-3.882.112l-.285.183-4.204-4.65a14.354 14.354 0 0 0-5.748-3.514l20.447-9.82 20.763 9.972-13.529 7.502a1.866 1.866 0 0 0 1.81 3.264l13.916-7.716v11.132h-.113c0 6.121-4.979 11.1-11.1 11.1a11 11 0 0 1-5.917-1.726 5.534 5.534 0 0 0-1.257-5.899l-1.422 1.42-2.756-2.755-.002.002a.923.923 0 1 0-1.305 1.306l2.755 2.755-2.392 2.392-2.837-2.837-.002.002a.925.925 0 0 0-1.306 1.306l2.838 2.837-1.422 1.42a5.534 5.534 0 0 0 6.682.889 14.716 14.716 0 0 0 8.344 2.587c4.48 0 8.497-2.003 11.213-5.157v5.626Z"
            />
        </svg>
    `),K1=new w("CircleDashes64Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            fill="${k.stroke()}"
        >
            <path
                d="M18.769 37.78a3.053 3.053 0 0 1-2.989-2.457 16.934 16.934 0 0 1 2.354-12.479 16.912 16.912 0 0 1 3.799-4.186 16.882 16.882 0 0 1 5.873-3.003 17 17 0 0 1 12.017 1.037 3.051 3.051 0 0 1-2.643 5.498 10.9 10.9 0 0 0-7.709-.666 10.828 10.828 0 0 0-3.763 1.925 10.852 10.852 0 0 0-2.437 2.683 11.006 11.006 0 0 0-1.506 8.004 3.05 3.05 0 0 1-2.996 3.644Zm13.699 11.221a17.102 17.102 0 0 1-6.499-1.283 3.05 3.05 0 0 1 2.322-5.641 10.9 10.9 0 0 0 7.085.425 10.809 10.809 0 0 0 3.815-1.94 10.81 10.81 0 0 0 2.8-3.295 10.908 10.908 0 0 0 1.205-7.058 3.049 3.049 0 1 1 6.017-1c.287 1.721.306 3.47.058 5.2a16.943 16.943 0 0 1-6.304 10.944 16.885 16.885 0 0 1-5.956 3.026 16.903 16.903 0 0 1-4.543.622ZM32.093 62A29.9 29.9 0 0 1 5.161 45.097a3.051 3.051 0 0 1 5.491-2.659c4.804 9.918 15.698 15.233 26.494 12.925a23.959 23.959 0 0 0 6.3-2.302 3.048 3.048 0 0 1 4.129 1.247 3.051 3.051 0 0 1-1.249 4.13 30.093 30.093 0 0 1-7.904 2.891 30.291 30.291 0 0 1-6.329.671ZM54.5 50.09a3.051 3.051 0 0 1-2.527-4.754c3.652-5.428 4.91-11.939 3.541-18.335C54.15 20.62 50.352 15.2 44.818 11.739a3.05 3.05 0 1 1 3.234-5.172c6.947 4.344 11.715 11.148 13.428 19.158 1.717 8.03.138 16.203-4.446 23.017A3.05 3.05 0 0 1 54.5 50.09ZM5.218 34.128l-.103-.001a3.05 3.05 0 0 1-2.946-3.151A29.932 29.932 0 0 1 25.878 2.668c2.762-.59 5.577-.79 8.372-.597a3.05 3.05 0 0 1-.423 6.086 23.914 23.914 0 0 0-6.673.476A23.846 23.846 0 0 0 8.265 31.18a3.05 3.05 0 0 1-3.047 2.948Z"
            />
        </svg>
    `),e2=new w("Rocket64Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            stroke="${k.stroke()}"
            stroke-width="4"
        >
            <path
                d="M61.733 2.813a.629.629 0 0 0-.476-.489c-7.85-1.92-25.984 4.921-35.819 14.748a42.506 42.506 0 0 0-4.776 5.642c-3.032-.275-6.063-.044-8.644 1.082C4.729 27.001 2.609 35.37 2.017 38.963a1.294 1.294 0 0 0 .829 1.427c.187.069.387.095.586.075l11.702-1.285c.008.883.061 1.764.159 2.642a2.62 2.62 0 0 0 .765 1.6l4.531 4.532c.429.433.996.704 1.603.765.872.097 1.748.15 2.626.159L23.534 60.57a1.296 1.296 0 0 0 .402 1.076 1.3 1.3 0 0 0 1.098.337c3.594-.577 11.981-2.698 15.167-9.985 1.126-2.584 1.357-5.599 1.097-8.616a42.377 42.377 0 0 0 5.658-4.777c9.87-9.816 16.668-27.551 14.777-35.792ZM38.182 25.889a6.166 6.166 0 0 1-1.337-6.717 6.166 6.166 0 0 1 5.695-3.806 6.164 6.164 0 0 1 4.358 10.523 6.154 6.154 0 0 1-8.716 0ZM10.896 45.858a6.505 6.505 0 0 0-3.804 1.854c-2.543 2.552-2.784 12.004-2.784 12.004s9.458-.241 12.003-2.787a6.46 6.46 0 0 0 1.855-3.807"
            />
        </svg>
    `),t2=new w("EntrepotLogo144Icon",$`
        <svg
            height="134"
            width="144"
            viewBox="0 0 134 144"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="${k.fill()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `),r2=new w("BrandDiscord24Icon",$`
        <svg
            fill="${k.fill("#5865f2")}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="nonzero"
                d="M19.624 4.976a18.18 18.18 0 0 0-4.478-1.389.069.069 0 0 0-.072.034 12.72 12.72 0 0 0-.558 1.146 16.69 16.69 0 0 0-5.029 0 11.6 11.6 0 0 0-.566-1.146.072.072 0 0 0-.072-.034 18.108 18.108 0 0 0-4.478 1.389.062.062 0 0 0-.03.025C1.489 9.262.708 13.419 1.091 17.523c.002.021.013.04.029.052a18.229 18.229 0 0 0 5.493 2.777.07.07 0 0 0 .077-.025c.423-.578.801-1.188 1.124-1.828a.07.07 0 0 0-.038-.097 12.059 12.059 0 0 1-1.716-.818.07.07 0 0 1-.007-.117c.115-.087.231-.177.341-.267a.068.068 0 0 1 .071-.01c3.6 1.644 7.498 1.644 11.056 0a.068.068 0 0 1 .072.009c.11.091.226.181.342.268a.07.07 0 0 1-.006.117c-.548.32-1.118.591-1.717.817a.07.07 0 0 0-.038.098 14.83 14.83 0 0 0 1.123 1.827.071.071 0 0 0 .078.026 18.189 18.189 0 0 0 5.502-2.777.07.07 0 0 0 .028-.051c.459-4.745-.768-8.867-3.252-12.522a.06.06 0 0 0-.029-.026ZM8.352 15.024c-1.084 0-1.977-.995-1.977-2.217s.875-2.218 1.977-2.218c1.11 0 1.994 1.004 1.977 2.218 0 1.222-.876 2.217-1.977 2.217Zm7.31 0c-1.084 0-1.977-.995-1.977-2.217s.876-2.218 1.977-2.218c1.11 0 1.994 1.004 1.977 2.218 0 1.222-.867 2.217-1.977 2.217Z"
            />
        </svg>
    `),n2=new w("BrandIcScan24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path fill="#33307c" d="M13 21h-1L1 16v2l11 5 1-1v-1Z" />
            <path
                fill="#7f85db"
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path fill="#33307c" d="M1 7.976 23 18v-2L1 6v1.976Z" />
            <path fill="#7f85db" d="m23 16-11 5v2l11-5v-2Z" />
            <path fill="#33307c" d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z" />
            <path fill="#7f85db" d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z" />
            <path fill="#33307c" d="m12 3 11 5V6L12 1v2Z" />
        </svg>
    `),o2=new w("BrandInstagram24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="url(#brand_instagram_32_icon_a)"
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill="url(#brand_instagram_32_icon_b)"
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill="#fff"
                d="M12 3.875c-2.207 0-2.482.014-3.348.055a5.964 5.964 0 0 0-1.973.372 3.97 3.97 0 0 0-1.444.941A3.998 3.998 0 0 0 4.3 6.687c-.199.509-.337 1.1-.371 1.966a57.542 57.542 0 0 0-.062 3.349c0 2.206.014 2.481.055 3.348.034.866.172 1.457.371 1.973.206.536.481.99.942 1.444.405.412.896.731 1.437.935.515.199 1.1.336 1.973.378.866.034 1.141.048 3.348.048 2.2 0 2.475-.014 3.348-.048a5.976 5.976 0 0 0 1.966-.378 3.889 3.889 0 0 0 1.444-.942c.412-.406.731-.896.935-1.437.2-.516.337-1.107.378-1.973.042-.867.049-1.142.049-3.348.016-1.117 0-2.233-.049-3.349a5.996 5.996 0 0 0-.378-1.973 3.986 3.986 0 0 0-.935-1.443 3.955 3.955 0 0 0-1.444-.935 5.99 5.99 0 0 0-1.973-.372A58.817 58.817 0 0 0 12 3.875Zm-.743 1.465H12c2.166 0 2.427.013 3.279.048.791.034 1.224.172 1.513.275a2.5 2.5 0 0 1 .928.619c.289.275.461.55.612.928.11.288.241.715.275 1.512.041.853.048 1.114.048 3.28 0 2.165-.007 2.426-.048 3.279a4.483 4.483 0 0 1-.275 1.512 2.478 2.478 0 0 1-.612.929c-.282.288-.55.46-.935.611-.282.11-.715.241-1.506.275-.852.042-1.113.049-3.279.049-2.173 0-2.427-.007-3.286-.049a4.453 4.453 0 0 1-1.506-.275 2.522 2.522 0 0 1-.935-.611 2.438 2.438 0 0 1-.605-.935 4.503 4.503 0 0 1-.275-1.506 57.83 57.83 0 0 1-.062-3.279c0-2.173.014-2.427.048-3.287.035-.79.172-1.223.275-1.512a2.57 2.57 0 0 1 .619-.928c.275-.282.55-.461.928-.605.484-.18.996-.276 1.513-.282.742-.035 1.031-.048 2.543-.048Zm4.112 2.33c0-.536.433-.969.969-.969h.007a.98.98 0 0 1 .976.976.98.98 0 0 1-.976.976.98.98 0 0 1-.976-.976V7.67ZM12 7.835c-2.289 0-4.173 1.884-4.173 4.173 0 2.29 1.884 4.174 4.173 4.174s4.173-1.884 4.173-4.174c0-2.289-1.884-4.173-4.173-4.173Zm2.716 4.167a2.722 2.722 0 0 0-2.709-2.709 2.722 2.722 0 0 0-2.709 2.709 2.721 2.721 0 0 0 2.709 2.708 2.721 2.721 0 0 0 2.709-2.708Z"
            />
            <defs>
                <radialGradient
                    id="brand_instagram_32_icon_a"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0 -21.8036 21.8037 0 6.844 24.693)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#fd5" />
                    <stop offset=".1" stop-color="#fd5" />
                    <stop offset=".5" stop-color="#ff543e" />
                    <stop offset="1" stop-color="#c837ab" />
                </radialGradient>
                <radialGradient
                    id="brand_instagram_32_icon_b"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="scale(9.74631) rotate(78.68 -.3 -.036)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#3771c8" />
                    <stop offset=".13" stop-color="#3771c8" />
                    <stop offset="1" stop-color="#60f" stop-opacity=".01" />
                </radialGradient>
            </defs>
        </svg>
    `),s2=new w("BrandInstagramFlat24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.fill()}"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `),i2=new w("BrandTelegram24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.fill("#2AABEE")}"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `),a2=new w("BrandTiktok24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill="#ee1d52"
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill="#252525"
                fill-rule="nonzero"
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill="#69c9d0"
                fill-rule="nonzero"
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `),l2=new w("BrandTiktokFlat24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.fill()}"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `),c2=new w("BrandTwitch24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.fill("#9146FF")}"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `),d2=new w("BrandTwitter24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="${k.fill("#41ABE1")}"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `),u2={"core-16":[Xc,Jc,Kc,Lt],"core-24":[e1,t1,Qi,r1,Ki,ea,Dn,l1,c1,d1,u1,h1,p1,f1,na,oa,g1,m1,dt,v1,w1,$1,b1,k1,sa,y1,x1,ia,C1,M1,S1,A1,I1,E1,T1,B1,L1,P1,_1,R1,N1,j1,Z1,D1,H1,z1,O1,Hn,aa,V1,F1,q1,W1,U1,Sr,G1,Y1,X1,J1,Q1],"core-32":[la],"core-48":[ca],"core-64":[da,K1,e2],logos:[t2],"third-party-brands":[r2,n2,o2,s2,i2,a2,l2,c2,d2]},Ms="toniq-",{defineElement:ye,defineElementNoInputs:vd}=ri({assertInputs:e=>{if(!e.tagName.startsWith(Ms))throw new Error(`Tag name should start with '${Ms}' but got '${e.tagName}'`)}}),b=ye()({tagName:"toniq-icon",styles:f`
        :host {
            display: block;
        }
        svg {
            /* svg is set to inline by default which gives it space under the image. See: https://stackoverflow.com/a/34952703 */
            display: block;
        }

        :host(.toniq-icon-fit-icon) svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>u`
            ${e.icon?vl(e.icon.svgString):""}
        `}),zn=f`8px`,O=ye()({tagName:"toniq-button",hostClasses:{secondary:!1,outline:!1},styles:({hostClassSelectors:e,hostClassNames:t})=>f`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ke};
        }

        :host(:hover) button {
            ${Z(x.accentPrimaryHover)};
        }

        :host(:active) button {
            ${Z(x.accentPrimaryActive)};
        }

        button {
            ${Fe};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${zn};
            ${Z(x.accentPrimary)};
            padding: 10px;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                border-color ${Y.interaction};
        }

        ${Ve({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e.secondary} button {
            ${Z(x.accentSecondary)};
        }

        ${e.outline} button {
            ${Z(x.pagePrimary)};
            border-color: ${x.accentPrimary.backgroundColor};
        }

        :host(.${t.secondary}:hover) button,
        :host(.${t.outline}:hover) button {
            border-color: ${x.accentPrimaryHover.backgroundColor};
        }

        :host(.${t.secondary}:active) button,
        :host(.${t.outline}:active) button {
            border-color: ${x.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${b}
                      class="icon-template"
                      ${g(b,{icon:e.icon})}
                  ></${b}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button>
                <slot>${t} ${r}</slot>
            </button>
        `}}),ua=oe({title:"Toniq Button",parent:ke});function pn(e){return[{title:"Text",render(){return u`
                    <${O}
                        class=${e}
                        ${g(O,{text:"Button"})}
                    ></${O}>
                `}},{title:"Icon",render(){return u`
                    <${O}
                        class=${e}
                        ${g(O,{icon:Sr})}
                    ></${O}>
                `}},{title:"Text + Icon",render(){return u`
                    <${O}
                        class=${e}
                        ${g(O,{text:"Button",icon:Sr})}
                    ></${O}>
                `}},{title:"HTML child",render(){return u`
                    <${O} class=${e} ${g(O,{})}>
                        <span>HTML Child</span>
                    </${O}>
                `}},{title:"Sizable",render(){return u`
                    <${O}
                        class=${e}
                        style="height: 100px; width: 200px;"
                        ${g(O,{text:"bigger"})}
                    ></${O}>
                `}}]}const h2=X({[O.tagName]:pn(""),[O.hostClasses.secondary]:pn(O.hostClasses.secondary),[O.hostClasses.outline]:pn(O.hostClasses.outline)},(e,t)=>se({title:e,examples:t,parent:ua})),p2=[ua,...Object.values(h2)],P=ye()({tagName:"toniq-checkbox",events:{checkedChange:je()},hostClasses:{},cssVars:{uncheckedCheckboxColor:String(ue("accentSecondary","backgroundColor")),uncheckedLabelColor:String(ue("pagePrimary","foregroundColor")),checkedCheckboxColor:String(ue("accentPrimary","backgroundColor")),checkedCheckColor:String(ue("accentPrimary","foregroundColor")),checkedLabelColor:String(ue("pageInteraction","foregroundColor"))},styles:({cssVarValues:e,cssVarNames:t})=>f`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                opacity ${Y.interaction};
            border-radius: 8px;
        }

        button {
            ${Fe};
            border-radius: 8px;
        }

        .wrapper {
            transition: inherit;
            display: inline-flex;
            flex-grow: 1;
            align-items: start;
            position: relative;
            outline: none;
        }

        .label {
            font: inherit;
            color: inherit;
            ${Ke};
            transition: inherit;
            text-align: start;
            color: ${e.uncheckedLabelColor};
        }

        .checkbox.checked {
            background-color: ${e.checkedCheckboxColor};
            color: ${e.checkedCheckColor};
        }

        .label.checked {
            color: ${e.checkedLabelColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${e.uncheckedCheckboxColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
        }

        ${Ve({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e.checkedCheckColor};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,renderCallback:({inputs:e,dispatch:t,events:r})=>{const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${b}
                    class="check-mark ${_e({hidden:!e.checked})}"
                    ${g(b,{icon:na})}
                ></${b}>
            </span>
        `,o=u`
            <slot
                class=${_e({label:!0,checked:e.checked})}
            >
                <span
                    class=${_e({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return u`
            <button
                class="wrapper ${e.checked?"checked":""}"
                ${C("click",()=>{const s=!e.checked;t(new r.checkedChange(s))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}}),ha=oe({title:"Toniq Checkbox",parent:ke}),f2=se({title:P.tagName,parent:ha,examples:[{title:"Unchecked",stateInit:{checked:!1},render({state:e,updateState:t}){return u`
                    <${P}
                        ${g(P,{checked:e.checked,text:"My Checkbox"})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${P}>
                `}},{title:"Checked",stateInit:{checked:!0},render({state:e,updateState:t}){return u`
                    <${P}
                        ${g(P,{checked:e.checked,text:"My Checkbox"})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${P}>
                `}},{title:"HTML Child",stateInit:{checked:!1},render({state:e,updateState:t}){return u`
                    <${P}
                        ${g(P,{checked:e.checked})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    >
                        With HTML Child
                    </${P}>
                `}},{title:"Custom CSS Vars",stateInit:{checked:!1},styles:f`
                :host {
                    ${P.cssVarNames.uncheckedCheckboxColor}: red;
                    ${P.cssVarNames.uncheckedLabelColor}: orange;
                    ${P.cssVarNames.checkedCheckboxColor}: green;
                    ${P.cssVarNames.checkedCheckColor}: blue;
                    ${P.cssVarNames.checkedLabelColor}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${P}
                        ${g(P,{checked:e.checked,text:"wild colors"})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${P}>
                    <${P}
                        ${g(P,{checked:!e.checked,text:`wild colors (${e.checked?"unchecked":"checked"})`})}
                        ${C(P.events.checkedChange,r=>{t({checked:!r.detail})})}
                    ></${P}>
                `}},{title:"Multiple",stateInit:{checkedShort:!1,checkedLong:!1},styles:f`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${P}
                        ${g(P,{checked:e.checkedShort,text:"Short"})}
                        ${C(P.events.checkedChange,r=>{t({checkedShort:r.detail})})}
                    ></${P}>
                    <${P}
                        ${g(P,{checked:e.checkedLong,text:"With much longer checkbox label string"})}
                        ${C(P.events.checkedChange,r=>{t({checkedLong:r.detail})})}
                    ></${P}>
                `}}]}),g2=[ha,f2],W=ye()({tagName:"toniq-chip",hostClasses:{secondary:!1},styles:({hostClassSelectors:e})=>f`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${U.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${Z(x.accentPrimary)};
        }

        ${e.secondary} {
            ${Z(x.accentSecondary)};
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${b}
                      ${g(b,{icon:e.icon})}
                  ></${b}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}}),pa=oe({title:"Toniq Chip",parent:ke});function Ss(e){return[{title:"Text",render(){return u`
                    <${W}
                        class=${e}
                        ${g(W,{text:"Toniq Chip Text"})}
                    ></${W}>
                `}},{title:"Text + Icon",render(){return u`
                    <${W}
                        class=${e}
                        ${g(W,{text:"Toniq Chip Text",icon:Lt})}
                    ></${W}>
                `}},{title:"HTML Child",render(){return u`
                    <${W} class=${e} ${g(W,{})}>
                        Slot in Use
                    </${W}>
                `}},{title:"HTML + Icon",render(){return u`
                    <${W}
                        class=${e}
                        ${g(W,{icon:Lt})}
                    >
                        Slot in Use
                    </${W}>
                `}},{title:"custom size",styles:f`
                ${W} {
                    width: 150px;
                    height: 24px;
                }
            `,render(){return u`
                    <${W}
                        class=${e}
                        ${g(W,{icon:Lt})}
                    >
                        Slot in Use
                    </${W}>
                `}}]}const m2=X({[W.tagName]:Ss(""),[W.hostClasses.secondary]:Ss(W.hostClasses.secondary)},(e,t)=>se({title:e,examples:t,parent:pa})),v2=[pa,...Object.values(m2)],w2="data-test-id",ut=Oe(class extends et{constructor(e){super(e),this.element=$2(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(w2,e),ve}});function $2(e,t,r){b2(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function b2(e,t){if(e.type!==qt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}const R=ye()({tagName:"toniq-dropdown",stateInit:{dropdownOpen:!1},events:{selectChange:je()},styles:f`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${U.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${Fe}
            border-radius: 8px;
            outline: none;
        }

        ${Ve({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${Y.interaction} linear transform;
        }

        .trigger-icon {
            align-self: flex-start;
        }

        .dropdown.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: flex;
            flex-direction: column;
            will-change: filter;
        }

        .dropdown.open,
        .dropdown.open .select {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        .dropdown-trigger.dropdown-trigger {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        .select {
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px;
            padding-left: 16px;
            ${Ke};
            ${Z(x.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 8px;
            ${Z(x.pagePrimary)}
            ${a1.popupShadow};
        }

        .selected-label-prefix {
            ${U.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ke};
        }

        .select-options .option.selected {
            ${Z(x.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${x.accentTertiary.backgroundColor};
        }

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var a;const s=(a=t.shadowRoot)==null?void 0:a.querySelector("button.dropdown");!o.composedPath().includes(s)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback:({dispatch:e,events:t,state:r,inputs:n,updateState:o})=>{const s=n.selected?n.selected:n.options[0];function i(){o({dropdownOpen:!r.dropdownOpen})}function a(h){o({dropdownOpen:!1}),e(new t.selectChange(h))}const l=n.icon?u`
                  <${b}
                      ${ut("rendered-input-icon")}
                      ${g(b,{icon:n.icon})}
                  ></${b}>
              `:"",c=n.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return u`
            <button
                class="dropdown ${r.dropdownOpen?"open":""}"
                @click=${()=>i()}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${l}
                    <span class="select-selected">${c} ${s==null?void 0:s.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${b}
                            class="trigger-icon"
                            ${g(b,{icon:oa})}
                        ></${b}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(h=>u`
                                <span
                                    class="option ${h.value===(s==null?void 0:s.value)?"selected":""}"
                                    @click=${d=>{d.preventDefault(),d.stopPropagation(),a(h)}}
                                    role="option"
                                >
                                    ${h.label}
                                </span>
                            `)}
                </div>
            </button>
        `}}),fa=oe({title:"Toniq Dropdown",parent:ke}),Le=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],k2=se({title:R.tagName,parent:fa,examples:[{title:"Default",stateInit:{selected:void 0},render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"With Icon",stateInit:{selected:void 0},render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected,icon:Dn})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"With Icon + Prefix",stateInit:{selected:void 0},render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected,icon:Dn,selectedLabelPrefix:"Sort By:"})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"Defaulted to an option",stateInit:{selected:Le[3]},render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"Custom size",stateInit:{selected:void 0},styles:f`
                ${R} {
                    width: 500px;
                    height: 100px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"Squished",stateInit:{selected:void 0},styles:f`
                ${R} {
                    max-height: 20px;
                    min-height: 20px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"No background",stateInit:{selected:void 0},styles:f`
                ${R} {
                    ${io.accentSecondary.backgroundColor}: transparent;
                }
            `,render({state:e,updateState:t}){return u`
                    <${R}
                        ${g(R,{options:Le,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}}]}),y2=[fa,k2],ga=oe({title:"Toniq Icon",parent:ke}),x2=X({[b.tagName]:[{title:"With Icon",render(){return u`
                        <${b}
                            ${g(b,{icon:Sr})}
                        ></${b}>
                    `}},{title:"Without Icon",render(){return u`
                        <${b}
                            ${g(b,{icon:void 0})}
                        ></${b}>
                    `}},{title:"64px icon",render(){return u`
                        <${b}
                            ${g(b,{icon:da})}
                        ></${b}>
                    `}},{title:"48px icon",render(){return u`
                        <${b}
                            ${g(b,{icon:ca})}
                        ></${b}>
                    `}},{title:"32px icon",render(){return u`
                        <${b}
                            ${g(b,{icon:la})}
                        ></${b}>
                    `}},{title:"24px icon",render(){return u`
                        <${b}
                            ${g(b,{icon:Ki})}
                        ></${b}>
                    `}},{title:"16px icon",render(){return u`
                        <${b}
                            ${g(b,{icon:Lt})}
                        ></${b}>
                    `}}],[`${b.tagName} colors`]:[{title:"Inherited",render(){return u`
                        <${b}
                            ${g(b,{icon:dt})}
                        ></${b}>
                    `}},{title:'Using "color"',styles:f`
                    :host {
                        color: red;
                    }
                `,render(){return u`
                        <${b}
                            ${g(b,{icon:dt})}
                        ></${b}>
                    `}},{title:Ie.color,styles:f`
                    :host {
                        ${N(Ie.color)}: red;
                    }
                `,render(){return u`
                        <${b}
                            ${g(b,{icon:dt})}
                        ></${b}>
                    `}},{title:Ie.strokeColor,styles:f`
                    :host {
                        ${N(Ie.strokeColor)}: red;
                    }
                `,render(){return u`
                        <${b}
                            ${g(b,{icon:dt})}
                        ></${b}>
                    `}},{title:Ie.fillColor,styles:f`
                    :host {
                        ${N(Ie.fillColor)}: red;
                    }
                `,render(){return u`
                        <${b}
                            ${g(b,{icon:dt})}
                        ></${b}>
                    `}}]},(e,t)=>se({title:e,examples:t,parent:ga})),C2=[ga,...Object.values(x2)];function On({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>On({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ma({value:e,allowed:t,blocked:r}){const n=t?On({input:e,matcher:t}):!0,o=r?On({input:e,matcher:r}):!1;return n&&!o}function As(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ma({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const A=ye()({tagName:"toniq-input",hostClasses:{outline:!1,hasAValue:({inputs:e})=>!!e.value},events:{valueChange:je(),inputBlocked:je()},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
            }

            .focus-border {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${zn};
                z-index: 0;
                pointer-events: none;
            }

            ${t.outline} label {
                background-color: ${x.pagePrimary.backgroundColor};
                border: 1px solid ${x.pageTertiary.foregroundColor};
            }

            ${t.outline} ${b} {
                color: ${x.pageSecondary.foregroundColor};
            }

            :host(.${e.hasAValue}.${e.outline}) ${b} {
                color: ${x.pagePrimary.foregroundColor};
            }

            ${t.outline} input::placeholder {
                color: ${x.pageSecondary.foregroundColor};
            }

            label {
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 12px 16px;
                border-radius: ${zn};
                background-color: ${x.accentTertiary.backgroundColor};
                font: ${U.paragraphFont};
            }

            ${Ve({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${b} {
                margin-right: 10px;
            }

            input {
                ${Fe};
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${x.accentTertiary.foregroundColor};
            }
        `,renderCallback:({inputs:e,dispatch:t,events:r})=>{const{filtered:n}=As({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
                  <${b} ${g(b,{icon:e.icon})}></${b}>
              `:"";return u`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${n}
                    ${C("input",s=>{if(!(s instanceof InputEvent))throw new Error(`Input event type mismatch: "${s.constructor.name}"`);const i=s.target;if(!(i instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const a=s.data,l=n;let c=i.value??"";if(a)if(a.length===1)ma({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(a)));else{const{filtered:h,blocked:d}=As({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});c=h,t(new r.inputBlocked(d))}i.value!==c&&(i.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                <div class="focus-border"></div>
            </label>
        `}});A.hostClasses.outline;const va=oe({title:"Toniq Input",parent:ke}),M2=se({title:A.tagName,parent:va,examples:[{title:"Assigned value",stateInit:{value:"init value"},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Placeholder",stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"my placeholder"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Icon",stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"with icon",icon:aa})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Custom size (big)",stateInit:{value:""},styles:f`
                ${A} {
                    height: 75px;
                    width: 300px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"stretched"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Custom size (small)",stateInit:{value:""},styles:f`
                ${A} {
                    height: 40px;
                    width: 140px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"squished"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Outline style",stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        class=${A.hostClasses.outline}
                        ${g(A,{value:e.value,placeholder:"outline"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:'Letter "a" blocked',stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,blockedInputs:"a",placeholder:"try typing a"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"only numbers allowed",stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,allowedInputs:/\d/})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"disabled",stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,disabled:!0,placeholder:"cannot select"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"no browser auto-helps",stateInit:{value:""},render({state:e,updateState:t}){return u`
                    <${A}
                        ${g(A,{value:e.value,placeholder:'try typing "im"',disableBrowserHelps:!0})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}}]}),S2=[va,M2];async function A2(e){return navigator.clipboard.writeText(e)}const I2="…";function E2(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${I2}${n}`}function T2(e){return!(e%1)}function B2(e){return e.letterCount==null?4:T2(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const z=ye()({tagName:"toniq-middle-ellipsis",events:{copied:je()},cssVars:{textColor:x.pagePrimary.foregroundColor,iconColor:x.pagePrimary.foregroundColor,textHoverColor:x.pageInteraction.foregroundColor,iconHoverColor:x.pageInteraction.foregroundColor},styles:({hostClassNames:e,cssVarValues:t})=>f`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Y.interaction};
            ${U.paragraphFont};
            color: ${t.textColor};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.${e.clickable}:hover) {
            color: ${t.textHoverColor};
        }

        :host(.${e.clickable}:hover) ${b} {
            color: ${t.iconHoverColor};
        }

        ${b} {
            margin-left: 4px;
            color: ${t.iconColor};
        }

        .copyable {
            cursor: pointer;
        }

        a {
            color: inherit;
            text-decoration: none;
            border-radius: 8px;
            position: relative;
            outline: none;
        }
        a:visited {
            color: inherit;
        }

        button {
            ${Fe};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Ve({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${x.pagePrimary.backgroundColor};
            background-color: ${x.pagePrimary.backgroundColor};
            display: flex;
            position: absolute;
            height: 100%;
            right: 0;
            max-width: 100%;
            pointer-events: none;
            transition: opacity ${Y.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{clickable:({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInit:{showCopiedTextTimeoutId:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{if(!e.text)return u``;const s=e.text,i=B2(e),a=!!e.externalLink,l=!!e.copyOnClick,c=s.length>i*2+2,h=c?E2(s,i):s,d=c?s:"",p=a?ia:l?sa:void 0,v=p?u`
                  <${b} ${g(b,{icon:p})}></${b}>
              `:"",m=u`
            <span title=${d} class="text-content">
                ${Br(!!e.copyOnClick,u`
                        <span
                            class=${_e({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${h}
            </span>
        `;return h?a?u`
                    <button
                        tabindex="0"
                        role="link"
                        ${C("click",y=>{var I,E;const M=(E=(I=y.currentTarget)==null?void 0:I.querySelector)==null?void 0:E.call(I,"a");if(!M)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");M.click()})}
                        class="link-wrapper"
                    >
                        <!--
                            This <a> element has no tabindex because the button above should be
                            focused in stead. This is a workaround for the fact that Safari does not
                            support tab-focus for <a> elements.
                        -->
                        <a
                            tabindex="-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-wrapper"
                            href=${e.externalLink}
                            title=${d}
                        >
                            ${m} ${v}
                        </a>
                    </button>
                `:l?u`
                    <button
                        class="text-wrapper copyable"
                        ${C("click",async()=>{await A2(s),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${m} ${v}
                    </button>
                `:u`
                    ${m}
                `:u``}}),wa=oe({title:"Toniq Middle Ellipsis",parent:ke}),L2=se({title:z.tagName,parent:wa,examples:[{title:"Long text",render(){return u`
                    <${z}
                        ${g(z,{text:"Long string instead of text"})}
                    ></${z}>
                `}},{title:"Short text",render(){return u`
                    <${z}
                        ${g(z,{text:"Short text"})}
                    ></${z}>
                `}},{title:"External Link",render(){return u`
                    <${z}
                        ${g(z,{text:"Long text with link",externalLink:"https://bioniq.io"})}
                    ></${z}>
                `}},{title:"Copyable",render(){return u`
                    <${z}
                        ${g(z,{text:"Long text that you can copy",copyOnClick:!0})}
                    ></${z}>
                `}},{title:"Custom CSS vars",styles:f`
                ${z} {
                    ${z.cssVarNames.iconColor}: red;
                    ${z.cssVarNames.iconHoverColor}: blue;
                    ${z.cssVarNames.textColor}: green;
                    ${z.cssVarNames.textHoverColor}: purple;
                }
            `,render(){return u`
                    <${z}
                        ${g(z,{text:"long text with custom colors",copyOnClick:!0})}
                    ></${z}>
                `}}]}),P2=[wa,L2],_2=globalThis.crypto;function R2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return _2.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const _=ye()({tagName:"toniq-radio-group",stateInit:{randomGroupName:""},events:{valueChange:je()},cssVars:{uncheckedRadioColor:String(ue("pagePrimary","foregroundColor")),uncheckedLabelColor:String(ue("pagePrimary","foregroundColor")),checkedRadioColor:String(ue("accentPrimary","backgroundColor")),checkedLabelColor:String(ue("pageInteraction","foregroundColor")),disabledColor:String(ue("pageSecondary","foregroundColor"))},styles:({cssVarValues:e})=>f`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                opacity ${Y.interaction};
            flex-direction: column;
            gap: 24px;
            text-align: left;
        }

        .wrapper,
        input {
            cursor: pointer;
        }

        .label {
            text-align: inherit;
        }

        .wrapper {
            color: ${e.uncheckedLabelColor};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${e.checkedRadioColor};
            outline: none;
            text-align: inherit;
        }

        button {
            ${Fe}
        }

        input {
            visibility: hidden;
            position: absolute;
        }

        .wrapper::before {
            flex-shrink: 0;
            display: inline-block;
            position: relative;
            content: '';
            height: 18px;
            width: 18px;
            box-sizing: border-box;
            padding: 3px;
            margin-right: 8px;
            border: 2px solid ${e.uncheckedRadioColor};
            border-radius: 50%;
            transition: ${Y.interaction};
            --color-stop: -10%;
            background-image: radial-gradient(
                ${e.checkedRadioColor} var(--color-stop),
                rgba(255, 255, 255, 0) calc(var(--color-stop) + 15%)
            );
        }

        .wrapper:not(.disabled):hover::before {
            border-color: inherit;
            opacity: 0.5;
        }

        .wrapper:not(.disabled):active::before {
            border-color: inherit;
            opacity: 1;
        }

        .wrapper:not(.disabled).checked::before {
            --color-stop: 35%;
            border-color: inherit;
        }

        ${Ve({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e.checkedLabelColor};
        }

        .wrapper.disabled {
            color: ${e.disabledColor};
            cursor: not-allowed;
        }

        .wrapper.disabled::before {
            border-color: ${e.disabledColor};
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:R2()})},renderCallback:({inputs:e,dispatch:t,events:r,state:n})=>N2(e.entries).map(s=>j2(e.groupName||n.randomGroupName,e.value,s,()=>{t(new r.valueChange(s.value))}))});function N2(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${_.tagName} was given duplicate entry values.`),Object.values(t)}function j2(e,t,r,n){const o=t===r.value,s=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${_e({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${C("click",()=>{n()})}
        >
            <input
                ${C("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${s}
        </button>
    `}const $a=oe({title:"Toniq Radio Group",parent:ke}),xt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],le={basic:xt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...xt.slice(1)],disabled:[{...xt[0],disabled:!0},...xt.slice(1)],noLabels:Ba(xt,e=>({...e,label:void 0}))},Z2=se({title:_.tagName,parent:$a,examples:[{title:"Default",stateInit:{selectedValue:le.basic[0].value},render({state:e,updateState:t}){return u`
                    <${_}
                        ${g(_,{entries:le.basic,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Inline",stateInit:{selectedValue:le.basic[0].value},styles:f`
                ${_} {
                    flex-direction: row;
                }
            `,render({state:e,updateState:t}){return u`
                    <${_}
                        ${g(_,{entries:le.basic,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Restricted width",stateInit:{selectedValue:le.longText[0].value},styles:f`
                ${_} {
                    max-width: 200px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${_}
                        ${g(_,{entries:le.longText,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"No labels",stateInit:{selectedValue:le.noLabels[0].value},render({state:e,updateState:t}){return u`
                    <${_}
                        ${g(_,{entries:le.noLabels,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Entry 1 disabled",stateInit:{selectedValue:le.disabled[1].value},render({state:e,updateState:t}){return u`
                    <${_}
                        ${g(_,{entries:le.disabled,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Custom CSS vars",stateInit:{selectedValue:le.basic[0].value},styles:f`
                ${_} {
                    ${_.cssVarNames.checkedLabelColor}: red;
                    ${_.cssVarNames.checkedRadioColor}: blue;
                    ${_.cssVarNames.uncheckedLabelColor}: green;
                    ${_.cssVarNames.uncheckedRadioColor}: pink;
                }
            `,render({state:e,updateState:t}){return u`
                    <${_}
                        ${g(_,{entries:le.basic,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}}]}),D2=[$a,Z2],B={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Ct={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function H2(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${B.lowerLabelWrapper} .${B.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${B.upperLabelWrapper} .${B.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getBoundingClientRect(),i=r.getBoundingClientRect();return{lower:s,upper:i}}else return}function z2(e,t=8){const r=H2(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function fn({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function Ot(e){return pr(e)&&e.min!==void 0&&e.max!==void 0}function Vn(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${B.range}`);return(t==null?void 0:t.clientWidth)??0}function gn(e,t,r){return`${r?Ja(e):e} ${t}`}function O2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function V2({value:e,double:t,min:r,max:n}){return t?Ot(e)?{min:Pt(e.min,r,Math.min(e.max,n)),max:Pt(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:Ot(e)?r:Pt(e,r,n)}function F2({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:Ot(e)?{min:hn(n,e.min),max:hn(n,e.max)}:hn(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function mn(e,t,r){return r?t[e]||0:e}function q2(e){return{actualLimits:O2(e),actualValue:V2(e)}}function W2(e,t){var n,o,s;let r=!1;if(Ot(e)){const i=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${B.lowerSlider}`),a=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${B.upperSlider}`);i instanceof HTMLInputElement&&a instanceof HTMLInputElement&&(Number(i.value)!==e.min&&(i.value=String(e.min),r=!0),Number(a.value)!==e.max&&(a.value=String(e.max),r=!0))}else{const i=(s=t.shadowRoot)==null?void 0:s.querySelector(`.${B.slider}`);i instanceof HTMLInputElement&&Number(i.value)!==e&&(i.value=String(e),r=!0)}return r}function ba(e,t){const{actualValue:r,actualLimits:n}=q2({...e}),o=o1(n.min,n.max),s=e.logScale??!1,i=e.suffix??"",{elementValue:a,elementLimits:l}=F2({actualValue:r,actualLimits:n,logScale:s,logRange:o}),c=Vn(t);return{actualValue:r,elementLimits:l,elementValue:a,isLogScale:s,logRange:o,rangeWidth:c,suffix:i}}const Ye=16,Is=f`
    ${Ye}px
`,Es=f`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Is};
    width: ${Is};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Y.interaction};
    ${Z(x.accentPrimary)};
`,Ts=f`
    transform: scale(1.2);
`;function St(e){requestAnimationFrame(()=>{const t=ba(e.instanceInputs,e).elementValue;W2(t,e)&&(e.setAttribute("disabled","true"),St(e))})}const T=ye()({tagName:"toniq-slider",stateInit:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:je()},styles:f`
        :host {
            display: block;
        }

        .${N(B.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${Z(x.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${Z(x.accentPrimary)};
        }

        .${N(B.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${U.boldParagraphFont};
            ${Ke};
        }

        .${N(B.labelPixelMarginWrapper)},
            .${N(B.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${N(B.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${N(B.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Ve({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${N(B.lowerSlider)},
        .${N(B.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${N(B.slider)}::-moz-range-thumb {
            ${Es}
        }

        /* these selectors fail if combined with a comma */
        .${N(B.slider)}::-webkit-slider-thumb {
            ${Es}
        }

        /* these selectors fail if combined with a comma */
        .${N(B.slider)}::-webkit-slider-thumb:hover {
            ${Ts}
        }

        /* these selectors fail if combined with a comma */
        .${N(B.slider)}::-moz-range-thumb:hover {
            ${Ts}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{St(e)}),e.addEventListener("keydown",()=>{St(e)}),e.addEventListener("keyup",()=>{St(e)})},renderCallback:({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:s})=>{const{actualValue:i,logRange:a,isLogScale:l,suffix:c,elementValue:h,elementLimits:d,rangeWidth:p}=ba({...e},t);if(St(t),Ot(h))return v(i,h,d);return y(i,h,d);function v(M,I,E){const q={left:ct((p-Ye)*(I.min-E.min)/(E.max-E.min)+Ye/2),right:ct((p-Ye)*(E.max-I.max)/(E.max-E.min)+Ye/2)},G=gn(M.min,c,l),ie=gn(M.max,c,l);requestAnimationFrame(()=>{const ae=z2(t);ae!==o.labelOverlap&&s({labelOverlap:ae})});const Me=(E.max-I.max)/(E.max-E.min)>.5,Be=fn({value:I.min,limits:{min:E.min,max:I.max},flip:!0}),K=fn({value:I.max,limits:{min:I.min,max:E.max},flip:!1}),qe=o.labelOverlap&&Me?o.labelOverlap:0,Jt=o.labelOverlap&&!Me?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${_o(()=>{s({rangeWidth:Vn(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${q.left}; right:${q.right}"
                    ></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.lowerLabelWrapper}"
                        style="left: ${q.left}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-left: ${un(Be)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-right: ${ct(Jt)}"
                                ${ut(Ct.lowerLabel)}
                            >
                                ${G}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${B.labelOuterWrapper} ${B.upperLabelWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${q.right}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${un(K)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-left: ${ct(qe)}"
                                ${ut(Ct.upperLabel)}
                            >
                                ${ie}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${B.lowerSlider} ${B.slider}"
                            .min=${E.min}
                            .max=${E.max}
                            .value=${I.min}
                            ${C("input",ae=>{const rt=ae.target,wt={...M,min:mn(Number(rt.value),a,l)};m(wt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${B.upperSlider} ${B.slider}"
                            step=${e.step}
                            .min=${E.min}
                            .max=${E.max}
                            .value=${I.max}
                            ${ut(Ct.slider)}
                            ${C("input",ae=>{const rt=ae.target,wt={...M,max:mn(Number(rt.value),a,l)};m(wt)})}
                        />
                    </div>
                </div>
            `}function m(M){s({internalValue:M}),e.disabled||n(new r.valueChange(M))}function y(M,I,E){const q=ct((p-Ye)*(E.max-I)/(E.max-E.min)+Ye/2),G=gn(M,c,l),ie=fn({value:I,limits:E,flip:!1});return u`
                <div
                    class="range"
                    ${_o(()=>{s({rangeWidth:Vn(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${q}"></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${q}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${un(ie)}"
                            ${ut(Ct.label)}
                        >
                            ${G}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${B.slider}"
                        step=${e.step}
                        .min=${E.min}
                        .max=${E.max}
                        .value=${I}
                        ${ut(Ct.slider)}
                        ${C("input",Me=>{const Be=Me.target,K=mn(Number(Be.value),a,l);m(K)})}
                    />
                </div>
            `}}}),ka=oe({title:"Toniq Slider",parent:ke}),Ae=f`
    ${T} {
        width: 300px;
    }
`,vn={min:10,max:50},U2=se({title:T.tagName,parent:ka,examples:[{title:"Default",stateInit:{value:20},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,...vn})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Double range",stateInit:{value:{min:10,max:72}},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{double:!0,value:e.value,min:0,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Suffix",stateInit:{value:20},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,...vn,suffix:"ICP"})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Log Scale",stateInit:{value:20},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Log Scale Double",stateInit:{value:{min:10,max:1e3}},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Decimals",stateInit:{value:{min:1.95,max:50}},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Negative min",stateInit:{value:20},styles:f`
                ${Ae}
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,min:-100,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Padding",stateInit:{value:20},styles:f`
                ${Ae}

                ${T} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{value:e.value,...vn})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Padding Double",stateInit:{value:{min:10,max:72}},styles:f`
                ${Ae}

                ${T} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return u`
                    <${T}
                        ${g(T,{double:!0,value:e.value,min:0,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}}]}),G2=[ka,U2],ce=ye()({tagName:"toniq-toggle-button",hostClasses:{textOnly:!1},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
        :host {
            ${U.boldParagraphFont};
            ${Ke};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${Fe};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${Z(x.accentSecondary)};
            transition: color ${Y.interaction},
                background-color ${Y.interaction};
        }

        ${Ve({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${Z(x.accentPrimary)};
        }

        :host(:hover) button {
            ${Z(x.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${Z(x.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${Z(x.accentPrimaryActive)};
        }

        ${t.textOnly} button {
            ${Z(x.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${t.textOnly} button.toggled {
            ${Z(x.pageInteraction)};
            border-color: ${x.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e.textOnly}:hover) button.toggled {
            ${Z(x.pageInteractionHover)};
        }
        :host(.${e.textOnly}:hover) button {
            color: ${x.pageInteraction.foregroundColor};
        }
        :host(.${e.textOnly}:active) button.toggled {
            ${Z(x.pageInteractionActive)};
        }
        ${t.textOnly} button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${b}
                      class="icon-template"
                      ${g(b,{icon:e.icon})}
                  ></${b}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),ya=oe({title:"Toniq Toggle Button",parent:ke});function Bs(e){return[{title:"Default",stateInit:{toggled:!1},render({state:t,updateState:r}){return u`
                    <${ce}
                        class=${e}
                        ${g(ce,{toggled:t.toggled,text:"Toggle Button"})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${ce}>
                `}},{title:"Icon + text",stateInit:{toggled:!1},render({state:t,updateState:r}){return u`
                    <${ce}
                        class=${e}
                        ${g(ce,{toggled:t.toggled,icon:Hn,text:"Toggle Button"})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${ce}>
                `}},{title:"Icon only",stateInit:{toggled:!1},render({state:t,updateState:r}){return u`
                    <${ce}
                        class=${e}
                        ${g(ce,{toggled:t.toggled,icon:Hn})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${ce}>
                `}}]}const Y2=X({[ce.tagName]:Bs(""),[ce.hostClasses.textOnly]:Bs(ce.hostClasses.textOnly)},(e,t)=>se({title:e,examples:t,parent:ya})),X2=[ya,...Object.values(Y2)],xa=oe({title:"Icons",parent:void 0}),Ls="...";function J2(e,t,r=7,n=5){let o;e=Pt(e,1,t),r=Pt(r,n,t);const s=r-5,i=r-3;t<=r?o=r:o=e<i||e>t-i?i:s;const a={start:Math.round(e-o/2),end:Math.round(e+o/2)};(a.start-1===1||a.end+1===t)&&(a.start+=1,a.end+=1);const l=e>t-i&&t>r?wn(t-o,t):e>o?wn(Math.min(a.start,t-o),Math.min(a.end,t)):wn(1,Math.min(t,o+1));function c(d,p){return l.length+1!==t?p:[d]}const h=l[l.length-1];if(h&&h<t){const d=c(t,[Ls,t]);return[...l,...d]}else return l[0]!==1?c(1,[1,Ls]).concat(l):l}function wn(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}ye()({tagName:"toniq-pagination",styles:f`
        :host {
            display: flex;
        }

        button {
            ${Fe}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Ke};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${Z(x.accentSecondary)};
        }

        .control:hover {
            ${Z(x.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${Z(x.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${U.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${Z(x.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${Z(x.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:je()},renderCallback:({inputs:e,events:t,dispatch:r})=>e.pageCount<=1?u``:u`
                <button
                    ${C("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${b} ${g(b,{icon:Qi})}></${b}>
                </button>
                ${J2(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${_e({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${C("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${C("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${b} ${g(b,{icon:ea})}></${b}>
                </button>
            `});const Q2=Object.entries(u2).map(([e,t])=>se({title:e,parent:xa,examples:t.map(r=>({title:r.iconName,render(){return u`
                            <${b} ${g(b,{icon:r})}></${b}>
                        `}}))})),ao=oe({title:"Styles",parent:void 0});function Ca(e){const t=K2(e),r=X(t,(o,s)=>String(s).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return me(r).reduce((o,s)=>{const i=r[s];return i&&i[1]&&i[2]&&(o[s]={cssVarName:i[1],defaultValue:i[2]}),o},{})}function K2(e){typeof e!="string"&&(e=String(e));const n=`{"${Fn(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((i,a)=>(i[a]=o[a],i),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const ed=f`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${U.labelFont};
        ${U.monospaceFont};
        color: ${x.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${x.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${U.h2Font};
    }
`;function td(e,t){const r=Ca(Z(t));return{title:e,styles:ed,render(){return u`
                <div class="color-example" style=${Z(t)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(r).map(n=>u`
                            <span>
                                ${n.cssVarName}: ${n.defaultValue}
                            </span>
                        `)}
                </div>
            `}}}const rd=me(x).map(e=>td(e,x[e])),nd=se({title:"Toniq Colors",parent:ao,examples:rd,descriptionParagraphs:['Accessed via the "toniqColors" export.']}),od=f`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${U.labelFont};
        ${U.monospaceFont};
        color: ${x.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${x.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${x.divider.foregroundColor};
        border-radius: 8px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .font-style-group {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;function sd(e,t){const r=Ca(t);return{title:e,styles:od,render(){return u`
                <div class="font-example" style=${t}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${me(r).map(n=>{const o=r[n];return u`
                            <div class="font-style-group">
                                <span>${n}: ${o.defaultValue}</span>
                                <span class="css-var-name">${o.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}}}const id=me(U).map(e=>{const t=U[e];return sd(e,t)}),ad=se({title:"Toniq Fonts",parent:ao,examples:id,descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),ld=[ke,xa,ao,...p2,...g2,...v2,...y2,...C2,...Q2,...S2,...P2,...D2,...G2,...X2,nd,ad];Tr({tagName:"toniq-design-system-app",styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${dr} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return u`
            <${dr}
                ${g(dr,{baseUrl:"toniq-labs-design-system",entries:ld,themeColor:"#00D093",everythingTitle:"Design System"})}
            ></${dr}>
        `}});
