var zi=Object.freeze,Di=Object.defineProperty;var g0=(e,t,r)=>t in e?Di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var An=(e,t,r)=>(g0(e,typeof t!="symbol"?t+"":t,r),r),Tn=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var kt=(e,t,r)=>(Tn(e,t,"read from private field"),r?r.call(e):t.get(e)),Ut=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},En=(e,t,r,n)=>(Tn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var _r=(e,t,r)=>(Tn(e,t,"access private method"),r);var _n=(e,t)=>zi(Di(e,"raw",{value:zi(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Be;(function(e){e.Chapter="chapter",e.Page="page",e.Root="root"})(Be||(Be={}));function oe(e){return e.title?{entryType:Be.Chapter,...e}:new Error("Cannot have an element-book chapter with an empty title.")}function m0(e,t){return e.includes(t)}function v0(e,t){return e.map(t)}function $s(e,t){return e.match(t)??[]}function w0(e){return e.replace(/,/g,"")}function Ht(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const b0={capitalizeFirstLetter:!1};function $0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function y0(e,t){return t.capitalizeFirstLetter?$0(e):e}function x0(e,t=b0){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return y0(n,t)}function Fi(e){return e!==e.toUpperCase()}function Kr(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=Fi(a)||Fi(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function cr(e,t){return e.split(t)}const k0=String(NaN);function ys(e){if(typeof e=="string"&&isNaN(Number(e)))return k0;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${$s(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(s=>s.split("").reverse().join("")).join(",")}${o}`}function C0({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function S0(e){return typeof e=="number"?e:Number(typeof e=="string"?w0(e):e)}function I0(e){return String(e).includes("e")}function M0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}const A0=["january","february","march","april","may","june","july","august","september","october","november","december"];A0.map(e=>e.slice(0,3));function T0(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Ot(r).trim()).join(`
`))}function Ot(e){return e?e instanceof Error?e.message:String(e):""}function mt(e){return e instanceof Error?e:new Error(Ot(e))}function wn(e){return!!e}function vt(e){return!!e&&typeof e=="object"}const ji="Failed to compare objects using JSON.stringify";function Hi(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Lt(e,t){try{return e===t?!0:vt(e)&&vt(t)?Hi(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Lt(e[n],t[n])):!1:Hi(e,t)}catch(r){const n=mt(r);throw n.message.startsWith(ji)||(n.message=`${ji}: ${n.message}`),n}}const E0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function pe(e,t){return e?E0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ni(e,t){return e&&t.every(r=>pe(e,r))}function re(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function _0(e){return re(e).map(t=>e[t])}function xs(e,t,r=!1,n={}){const o=re(e),i=new Set(re(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!pe(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||ks(l,c,s,r,n[a]??{})})}function ks(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{pe(t,"constructor")&&(!pe(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{ks(l,u,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${Ot(f)}`)}}).filter(wn).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):vt(t)&&xs(e,t,n,o)}function oi(e){return Array.isArray(e)?"array":typeof e}function Je(e,t){return oi(e)===t}function P0(e,t,r){if(!Je(e,t))throw new TypeError(`'${r}' is of type '${oi(e)}' but type '${t}' was expected.`)}function Oi({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(Je(r,"object")?xs(n,r):P0(n,oi(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function B0(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function L0(e){return re(e).filter(t=>isNaN(Number(t)))}function R0(e){return L0(e).map(r=>e[r])}function N0(e,t){return R0(t).includes(e)}function Cs(e,t){return re(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function z0(e,t){return Cs(e,r=>!t.includes(r))}function ne(e,t){let r=!1;const n=re(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(re(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Qr(e){const t=Dt();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function D0(e){return!!(pe(e,"then")&&typeof e.then=="function")}class F0 extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function j0(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new F0(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function Dt(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Dt.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const Pn="://";function H0(...e){const t=e.join("/"),[r,n=""]=t.includes(Pn)?t.split(Pn):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>s.includes("?")||o?(o=!0,s):encodeURIComponent(s)).reduce((s,l,c,d)=>{if(i)return s;const u=d[c+1];let f=l;const g=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||g){i=!0;let p=!1;const b=d.slice(g?c+2:c+1).reduce(($,S)=>(S.includes("#")&&(p=!0),p?$.concat(S):[$,S].join("&")),"");f=[l,u,b].join("")}return s.concat(f)},[]);return[r,r?Pn:"",a.join("/")].join("")}const O0=["k","M","B","T","P","E","Z","Y"];function ii({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function q0(e,t,r){const[n,o]=cr(e,"."),i=ys(n),a=$s(i,/,/g).length,s=t[a-1],[l,c]=cr(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[ii({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const qi=3;function V0({input:e,maxLength:t}){const r=String(e),[n,o]=cr(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=cr(n,"."),d=i.length+qi;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[ii({afterDot:c,beforeDot:l,maxLength:t-i.length+qi}),s].join("")}function Z0(e,t){const[r,n]=cr(ys(e),".");if(r.length<=t)return ii({beforeDot:r,afterDot:n,maxLength:t})}function W0(e,{customSuffixes:t=O0,maxLength:r=6}={}){const n=S0(e);if(isNaN(n)||n===1/0)return String(n);if(I0(n))return V0({input:n,maxLength:r});const o=String(n),i=Z0(o,r);return i??q0(o,t,r)}function Ss(e,t){try{return U0(e,t),!0}catch{return!1}}function U0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Y0(e,t){return pe(e,"entryType")&&e.entryType===t}function bn(e,t){const r=mo(e.title);return e.parent?[mo(e.parent.title),...bn(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function mo(e){return Ht(e).toLowerCase().replaceAll(/\s/g,"-")}function G0(e,t,r){const n=[],o=`Failed to define example '${t.concat(r.title).join(" > ")}'`;e.hasOwnProperty(r.title)?n.push(new Error(`${o}: title '${r.title}' is already being used.`)):r.title||n.push(new Error(`${o}: example title is missing or empty.`)),n.length?e[r.title]=T0(n):e[r.title]=r}function G(e){if(!e.title)throw new Error("Cannot have an element-book page with an empty title.");const t={},r={entryType:Be.Page,...e,examples:t,controls:e.controls??{},pageBreadcrumbs:[]};return r.pageBreadcrumbs=bn(r),e.defineExamplesCallback&&e.defineExamplesCallback({defineExample:n=>G0(t,r.pageBreadcrumbs,n)}),r}var vo;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Text="text"})(vo||(vo={}));var Ue;(function(e){e.Footer="element-book-footer",e.NavHeader="element-book-nav-header"})(Ue||(Ue={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oe=e=>(...t)=>({_$litDirective$:e,values:t});let nt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bn;const en=window,Ft=en.trustedTypes,Vi=Ft?Ft.createPolicy("lit-html",{createHTML:e=>e}):void 0,tn="$lit$",Fe=`lit$${(Math.random()+"").slice(9)}$`,ai="?"+Fe,X0=`<${ai}>`,wt=document,dr=()=>wt.createComment(""),ur=e=>e===null||typeof e!="object"&&typeof e!="function",Is=Array.isArray,Ms=e=>Is(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ln=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zi=/-->/g,Wi=/>/g,ct=RegExp(`>|${Ln}(?:([^\\s"'>=/]+)(${Ln}*=${Ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ui=/'/g,Yi=/"/g,As=/^(?:script|style|textarea|title)$/i,J0=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),K0=J0(1),Ie=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Gi=new WeakMap,ft=wt.createTreeWalker(wt,129,null,!1),Ts=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Yt;for(let l=0;l<r;l++){const c=e[l];let d,u,f=-1,g=0;for(;g<c.length&&(a.lastIndex=g,u=a.exec(c),u!==null);)g=a.lastIndex,a===Yt?u[1]==="!--"?a=Zi:u[1]!==void 0?a=Wi:u[2]!==void 0?(As.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=ct):u[3]!==void 0&&(a=ct):a===ct?u[0]===">"?(a=o??Yt,f=-1):u[1]===void 0?f=-2:(f=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?ct:u[3]==='"'?Yi:Ui):a===Yi||a===Ui?a=ct:a===Zi||a===Wi?a=Yt:(a=ct,o=void 0);const p=a===ct&&e[l+1].startsWith("/>")?" ":"";i+=a===Yt?c+X0:f>=0?(n.push(d),c.slice(0,f)+tn+c.slice(f)+Fe+p):c+Fe+(f===-2?(n.push(void 0),l):p)}const s=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Vi!==void 0?Vi.createHTML(s):s,n]};class hr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=Ts(t,r);if(this.el=hr.createElement(c,n),ft.currentNode=this.el.content,r===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(o=ft.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const f of o.getAttributeNames())if(f.endsWith(tn)||f.startsWith(Fe)){const g=d[a++];if(u.push(f),g!==void 0){const p=o.getAttribute(g.toLowerCase()+tn).split(Fe),b=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:b[2],strings:p,ctor:b[1]==="."?_s:b[1]==="?"?Ps:b[1]==="@"?Bs:xr})}else l.push({type:6,index:i})}for(const f of u)o.removeAttribute(f)}if(As.test(o.tagName)){const u=o.textContent.split(Fe),f=u.length-1;if(f>0){o.textContent=Ft?Ft.emptyScript:"";for(let g=0;g<f;g++)o.append(u[g],dr()),ft.nextNode(),l.push({type:2,index:++i});o.append(u[f],dr())}}}else if(o.nodeType===8)if(o.data===ai)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(Fe,u+1))!==-1;)l.push({type:7,index:i}),u+=Fe.length-1}i++}}static createElement(t,r){const n=wt.createElement("template");return n.innerHTML=t,n}}function bt(e,t,r=e,n){var o,i,a,s;if(t===Ie)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=ur(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=bt(e,l._$AS(e,t.values),l,n)),t}let Es=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:wt).importNode(n,!0);ft.currentNode=i;let a=ft.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new qt(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new Ls(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=ft.nextNode(),s++)}return ft.currentNode=wt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class qt{constructor(t,r,n,o){var i;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=bt(this,t,r),ur(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Ie&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ms(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==X&&ur(this._$AH)?this._$AA.nextSibling.data=t:this.$(wt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=hr.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new Es(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=Gi.get(t.strings);return r===void 0&&Gi.set(t.strings,r=new hr(t)),r}T(t){Is(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new qt(this.k(dr()),this.k(dr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class xr{constructor(t,r,n,o,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=bt(this,t,r,0),a=!ur(t)||t!==this._$AH&&t!==Ie,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=bt(this,s[n+l],r,l),c===Ie&&(c=this._$AH[l]),a||(a=!ur(c)||c!==this._$AH[l]),c===X?t=X:t!==X&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _s extends xr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}const Q0=Ft?Ft.emptyScript:"";class Ps extends xr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==X?this.element.setAttribute(this.name,Q0):this.element.removeAttribute(this.name)}}class Bs extends xr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=bt(this,t,r,0))!==null&&n!==void 0?n:X)===Ie)return;const o=this._$AH,i=t===X&&o!==X||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==X&&(o===X||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ls{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){bt(this,t)}}const ed={O:tn,P:Fe,A:ai,C:1,M:Ts,L:Es,D:Ms,R:bt,I:qt,V:xr,H:Ps,N:Bs,U:_s,F:Ls},Xi=en.litHtmlPolyfillSupport;Xi==null||Xi(hr,qt),((Bn=en.litHtmlVersions)!==null&&Bn!==void 0?Bn:en.litHtmlVersions=[]).push("2.7.4");const td=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new qt(t.insertBefore(dr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:rd}=ed,Ji=()=>document.createComment(""),Gt=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Ji(),i),s=o.insertBefore(Ji(),i);r=new rd(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},dt=(e,t,r=e)=>(e._$AI(t,r),e),nd={},od=(e,t=nd)=>e._$AH=t,id=e=>e._$AH,Rn=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=Oe(class extends nt{constructor(e){var t;if(super(e),e.type!==yr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Ie}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},ad=Oe(class extends nt{constructor(e){if(super(e),e.type!==yr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const i=id(e),{values:a,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ht=s,a;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,f=0,g=i.length-1,p=0,b=a.length-1;for(;f<=g&&p<=b;)if(i[f]===null)f++;else if(i[g]===null)g--;else if(l[f]===s[p])c[p]=dt(i[f],a[p]),f++,p++;else if(l[g]===s[b])c[b]=dt(i[g],a[b]),g--,b--;else if(l[f]===s[b])c[b]=dt(i[f],a[b]),Gt(e,c[b+1],i[f]),f++,b--;else if(l[g]===s[p])c[p]=dt(i[g],a[p]),Gt(e,i[f],i[g]),g--,p++;else if(d===void 0&&(d=Ki(s,p,b),u=Ki(l,f,g)),d.has(l[f]))if(d.has(l[g])){const $=u.get(s[p]),S=$!==void 0?i[$]:null;if(S===null){const M=Gt(e,i[f]);dt(M,a[p]),c[p]=M}else c[p]=dt(S,a[p]),Gt(e,i[f],S),i[$]=null;p++}else Rn(i[g]),g--;else Rn(i[f]),f++;for(;p<=b;){const $=Gt(e,c[b+1]);dt($,a[p]),c[p++]=$}for(;f<=g;){const $=i[f++];$!==null&&Rn($)}return this.ht=s,od(e,c),Ie}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rn=class extends nt{constructor(t){if(super(t),this.et=X,t.type!==yr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===X||t==null)return this.ft=void 0,this.et=t;if(t===Ie)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};rn.directiveName="unsafeHTML",rn.resultType=1;const sd=Oe(rn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wo=class extends rn{};wo.directiveName="unsafeSVG",wo.resultType=2;const ld=Oe(wo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function cd(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=window,si=Yr.ShadowRoot&&(Yr.ShadyCSS===void 0||Yr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,li=Symbol(),Qi=new WeakMap;let Rs=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==li)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(si&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Qi.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Qi.set(r,t))}return t}toString(){return this.cssText}};const B=e=>new Rs(typeof e=="string"?e:e+"",void 0,li),rr=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Rs(r,e,li)},dd=(e,t)=>{si?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Yr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},ea=si?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return B(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nn;const nn=window,ta=nn.trustedTypes,ud=ta?ta.emptyScript:"",ra=nn.reactiveElementPolyfillSupport,bo={toAttribute(e,t){switch(t){case Boolean:e=e?ud:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ns=(e,t)=>t!==e&&(t==t||e==e),zn={attribute:!0,type:String,converter:bo,reflect:!1,hasChanged:Ns};let At=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=zn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(ea(o))}else t!==void 0&&r.push(ea(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return dd(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=zn){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:bo).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:bo;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ns)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};At.finalized=!0,At.elementProperties=new Map,At.elementStyles=[],At.shadowRootOptions={mode:"open"},ra==null||ra({ReactiveElement:At}),((Nn=nn.reactiveElementVersions)!==null&&Nn!==void 0?Nn:nn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dn,Fn;class nr extends At{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=td(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ie}}nr.finalized=!0,nr._$litElement$=!0,(Dn=globalThis.litElementHydrateSupport)===null||Dn===void 0||Dn.call(globalThis,{LitElement:nr});const na=globalThis.litElementPolyfillSupport;na==null||na({LitElement:nr});((Fn=globalThis.litElementVersions)!==null&&Fn!==void 0?Fn:globalThis.litElementVersions=[]).push("3.3.2");var hd=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(S){if(S!==void 0&&typeof S!="function")throw new TypeError("Function expected");return S}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,f=!1,g=r.length-1;g>=0;g--){var p={};for(var b in n)p[b]=b==="access"?{}:n[b];for(var b in n.access)p.access[b]=n.access[b];p.addInitializer=function(S){if(f)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(S||null))};var $=(0,r[g])(s==="accessor"?{get:d.get,set:d.set}:d[l],p);if(s==="accessor"){if($===void 0)continue;if($===null||typeof $!="object")throw new TypeError("Object expected");(u=a($.get))&&(d.get=u),(u=a($.set))&&(d.set=u),(u=a($.init))&&o.push(u)}else(u=a($))&&(s==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),f=!0},fd=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},pd=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function gd(){function e(t,r){return t}return e}let zs=(()=>{let e=[gd()],t,r=[],n;return n=class extends nr{},pd(n,"DeclarativeElement"),hd(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,fd(n,r),n})();function Vt(e){if(vt(e))return ne(e,(r,n)=>{if(!Je(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Kr(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?B(r):r.startsWith("-")?rr`-${B(r)}`:rr`--${B(r)}`;return{name:a,value:rr`var(${a}, ${B(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Vt.name}' function.`)}function $o({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const md=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Ds(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):md(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jn;((jn=window.HTMLSlotElement)===null||jn===void 0?void 0:jn.prototype.assignedElements)!=null;const yo=Symbol("this-is-an-element-vir-declarative-element"),ci=Symbol("key for ignoring inputs not having been set yet"),vd={[ci]:!0,allowPolymorphicState:!1};function Fs(e,t){const r=e.instanceState;re(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&re(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),js(e)}function js(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Hs(e,t){return fr(e,t),e.element}function fr(e,t){if(e.type!==yr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function v(e,t){return t?oa(e,t):oa(void 0,e)}const oa=Oe(class extends nt{constructor(e){super(e),this.element=Hs(e,"assign")}render(e,t){return wd(e,this.element,t),Ie}});function wd(e,t,r){Fs(t,r)}function Os(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof zs?!0:Os(r)}function ia(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class bd extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function di(){return e=>{var t;return t=class extends bd{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function te(){return di()}function $d(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=di()(r);return t[r]=n,t},{}):{}}const xo="_is_element_vir_observable_property_handler_instance",ko="_is_element_vir_observable_property_handler_creator";function yd(e){return pe(e,ko)&&e[ko]===!0}function xd(e){return pe(e,xo)&&e[xo]===!0}function kd(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function aa(e,t){const r=e;function n(a){t?kd(a,e,e.tagName):Ds()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{n(s);const c=e.observablePropertyHandlerMap[s];function d(u){a[s]=u,r[s]=u}return yd(l)&&(l=l.init()),xd(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[s]=l):c?c.setValue(l):d(l),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function Cd(e){return e?ne(e,t=>t):{}}function Sd({hostClassNames:e,cssVars:t}){return{hostClasses:ne(e,(r,n)=>({name:B(n),selector:B(`:host(.${n})`)})),cssVars:t}}function Id({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&re(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Md(e,t){function r(o){re(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ad=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function $n(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...vd,...e.options},n=$d(e.events),o=Cd(e.hostClasses);e.hostClasses&&ia(e.tagName,e.hostClasses),e.cssVars&&ia(e.tagName,e.cssVars);const i=e.cssVars?Vt(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Sd({hostClassNames:o,cssVars:i})):e.styles||rr``,s=e.renderCallback,l=(t=class extends zs{createRenderParams(){return Md(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){js(this)}render(){try{Os(this)&&!this.haveInputsBeenSet&&!r[ci]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${v.name}" directive on it. If no inputs are intended, use "${$n.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c));const d=s(c);return Id({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=mt(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();e.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();e.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Fs(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=aa(this,!1),this.instanceState=aa(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};re(c).forEach(u=>{Ds()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},Ad(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[yo]:{value:!0,writable:!1},name:{value:x0(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function yn(){return e=>$n({...e,options:{[ci]:!1,...e.options}})}var qs;const he=Symbol("not set");class Td{constructor(t){this.lastTrigger=he,this.resolutionValue=he,this.rejectionError=he,this.listeners=new Set,this.waitingForValuePromise=Dt(),this[qs]=!0,this.resetValue(t)}resetValue(t){this.resetWaitingForValuePromise(),t!==he&&(t instanceof Promise?this.setValue({newPromise:t}):this.setValue({resolvedValue:t}))}fireListeners(){const t=this.getValue();this.listeners.forEach(r=>{r(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=he,this.rejectionError=he,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(r=>{this.lastSetPromise===t&&this.resolveValue(r)}).catch(r=>{this.lastSetPromise===t&&(this.rejectionError=mt(r),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(r),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=he,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=Dt()}setValue(t){if("createPromise"in t){if(this.lastTrigger===he||!Lt(t.trigger,this.lastTrigger)){this.lastTrigger=t.trigger;const r=t.createPromise();this.setPromise(r),this.fireListeners()}}else"newPromise"in t?(this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners()):"resolvedValue"in t?this.resolveValue(t.resolvedValue):"forceUpdate"in t?(this.lastTrigger=he,this.resolutionValue=he,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners()):this.resetValue(t)}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==he)return this.rejectionError;if(this.resolutionValue===he)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,r){this.listeners.add(r),t&&r(this.getValue())}addMultipleListeners(t){t.forEach(r=>this.listeners.add(r))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}qs=xo;function Ed(...e){const t=Ss(e,1)?e[0]:he;return{[ko]:!0,init(){return new Td(t)}}}function C(e,t){return _d(e,t)}const _d=Oe(class extends nt{constructor(e){super(e),this.element=Hs(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Ie}}),sa="onDomCreated",la=Oe(class extends nt{constructor(e){super(e),fr(e,sa)}update(e,[t]){fr(e,sa);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Hn="onResize",Co=Oe(class extends nt{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),fr(e,Hn)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Hn} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){fr(e,Hn),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ca(e,t,r,n){return e instanceof Error?n?n(e):Ot(e):D0(e)?t:r?r(e):e}function Ke(e,t,r){return cd(e,()=>t,()=>r)}function So(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=Pd(a,n[s]);return`${a}${l}`});return Ht(i.join(""))}function Pd(e,t){return t._$litType$!=null||t._$litDirective$!=null?So(t):Array.isArray(t)?t.map(n=>So(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Vs(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),yn()(r(n))),defineElementNoInputs:n=>(t(n),$n(r(n)))}}function Bd(e,t){return e.filter((r,n)=>!t.includes(n))}function Zs(e){return e.filter(t=>ni(t,["tagName",yo])&&!!t.tagName&&!!t[yo])}const Ws=new WeakMap;function Ld(e,t){var o;const r=Zs(t);return(o=Us(Ws,[e,...r]).value)==null?void 0:o.template}function Rd(e,t,r){const n=Zs(t);return Gs(Ws,[e,...n],r)}function Us(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ys(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Us(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ys(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Gs(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Ys(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Gs(l,t,r,n+1)}function Xs(e,t,r){return{name:e,check:t,transform:r}}const Nd=new WeakMap;function Js(e,t,r){const n=Ld(e,t),o=n??r();if(!n){const a=Rd(e,t,o);if(a.result)Nd.set(e,o);else throw new Error(`Failed to set template transform: ${a.reason}`)}const i=Bd(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function Ks(e,t,r,n){const o=[],i=[],a=[];return e.forEach((l,c)=>{var $;const d=o.length-1,u=o[d],f=c-1,g=t[f];let p;n&&n(l),typeof u=="string"&&(p=($=r.find(S=>S.check(u,l,g)))==null?void 0:$.transform,p&&(o[d]=u+p(g)+l,a.push(f))),p||o.push(l);const b=e.raw[c];p?i[d]=i[d]+p(g)+b:i.push(b)}),{templateStrings:Object.assign([],o,{raw:i}),valueIndexDeletions:a}}function Qs(e){return pe(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const zd=[Xs("tag name css selector interpolation",(e,t,r)=>Qs(r),e=>e.tagName)];function Dd(e,t){return Ks(e,t,zd)}function m(e,...t){const r=Js(e,t,()=>Dd(e,t));return rr(r.strings,...r.values)}const Fd=[Xs("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Qs(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function jd(e){}function Hd(e){return Ks(e.strings,e.values,Fd,jd)}function h(e,...t){const r=K0(e,...t),n=Js(e,t,()=>Hd(r));return{...r,strings:n.strings,values:n.values}}const el=new Map;function tl(e,t){var r;return(r=el.get(e))==null?void 0:r.get(t)}function rl(e,t,r){B0(el,e,()=>new Map).set(t,r)}const on="isElementBookEntryTreeNode";function Od(e,t){return!!(ni(e,[on,"entry"])&&e[on]&&e.entry.entryType===t)}function nl(e){return{[on]:!0,entry:{entryType:Be.Root,title:e||"Everything",parent:void 0},breadcrumb:"",children:{}}}function qd(e,t){return Vd(e,t)}function Vd(e,t){const r=tl(e,"");if(r)return r;const n=nl(t);return e.forEach(o=>{if(o instanceof Error)throw o;const i=Zd(o,n),a=mo(o.title);if(a in i.children)throw new Error(`Cannot create duplicate entry '${a}'${i.breadcrumb?` in parent '${i.breadcrumb}'.`:""}`);const s={[on]:!0,children:{},breadcrumb:a,entry:o};i.children[a]=s}),rl(e,"",n),n}function Zd(e,t){return bn(e).reverse().reduce((o,i)=>{const a=o.children[i];if(!a)throw new Error(`Failed to find parent ElementBookEntry by name of '${i}' in entry '${o.entry.title}'`);return a},t)}function Io(e,t){if(!Ss(e,1))return t;const r=e[0],n=t.children[r];if(n)return Io(e.slice(1),n)}function da({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}function Wd({entries:e,startTree:t,searchQuery:r}){const n=tl(e,r);if(n)return n;const o=nl("Search Results");return ol(t,o,r),rl(e,r,o),o}function ol(e,t,r){if(e.entry.entryType!==Be.Root&&da({searchIn:e.entry.title,searchQuery:r}))return t.children=e.children,!0;if("examples"in e.entry){const o=Cs(e.entry.examples,a=>da({searchIn:a,searchQuery:r})),i={...e.entry,examples:o};return t.entry=i,!!Object.values(i.examples).length}const n=Object.entries(e.children).map(([o,i])=>{const a={...i,children:{}};if(ol(i,a,r))return[o,a]}).filter(wn);return n.length?(t.children=Object.fromEntries(n),!0):!1}const Ud=0;function il(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Ud)}class kr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class ua extends kr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const pr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Yd=globalThis.history.pushState;function ha(...e){const t=Yd.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(pr)),t}const Gd=globalThis.history.replaceState;function fa(...e){const t=Gd.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(pr)),t}function Xd(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ha)throw new ua("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===fa)throw new ua("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ha,globalThis.history.replaceState=fa,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(pr))})}}function Jd(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Kd(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Qd(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?Jd(new URLSearchParams(globalThis.location.search)):void 0,i=globalThis.location.hash||void 0;return{paths:r,search:o,hash:i}}class e1 extends kr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function al(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const pa=6;function ga(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>pa)throw new e1(`Route sanitization depth has exceed the max of ${pa} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(al(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class On extends kr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function t1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new On(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new On(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new On(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function r1(e,t,r,n=!1){const o=sl(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function sl(e,t,r=""){var l;if(!r&&t!=null)throw new kr("Route base regexp was defined but routeBase string was not provided.");const n=n1(t)?`/${r}`:"",o=e.search?Kd(e.search).toString():"",i=o?`?${o}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`${n}/${e.paths.join("/")}${i}${s}`}function n1(e){return!!(e&&globalThis.location.pathname.match(e))}function o1(e={}){var a;t1(e),Xd();const t=(a=e.routeBase)==null?void 0:a.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o=()=>ga(i),i={listeners:new Set,initParams:e,sanitizeFullRoute:s=>{const l={hash:void 0,search:void 0,...s};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(s,l=!1,c=!1)=>{const d=i.getCurrentRawRoutes(),u={...d,...s},f=i.sanitizeFullRoute(u);if(!(!c&&al(d,f)))return r1(f,r,t,l)},createRoutesUrl:s=>sl(s,r,t),getCurrentRawRoutes:()=>Qd(r),removeAllRouteListeners(){i.listeners.forEach(s=>i.removeRouteListener(s))},addRouteListener:(s,l)=>{if(e.maxListenerCount&&i.listeners.size>=e.maxListenerCount)throw new kr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return i.listeners.add(l),n||(globalThis.addEventListener(pr,o),n=!0),s&&ga(i,l),l},hasRouteListener:s=>i.listeners.has(s),removeRouteListener:s=>{const l=i.listeners.delete(s);return i.listeners.size||(globalThis.removeEventListener(pr,o),n=!1),l},sanitizationDepth:0};return i}var ce;(function(e){e.Search="search",e.Book="book"})(ce||(ce={}));function ll(e){return e[0]===ce.Book?"":e[1]?decodeURIComponent(e[1]):""}const xn={hash:void 0,paths:[ce.Book],search:void 0};function i1(e){return o1({routeBase:e,routeSanitizer(t){return{paths:a1(t.paths),hash:void 0,search:void 0}}})}function a1(e){const t=e[0];if(N0(t,ce)){if(t===ce.Book)return[ce.Book,...e.slice(1)];if(t===ce.Search)return e[1]?[t,e[1]]:[ce.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return xn.paths}const H=Vt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),s1={nav:{hover:{background:H["element-book-nav-hover-background-color"],foreground:H["element-book-nav-hover-foreground-color"]},active:{background:H["element-book-nav-active-background-color"],foreground:H["element-book-nav-active-foreground-color"]},selected:{background:H["element-book-nav-selected-background-color"],foreground:H["element-book-nav-selected-foreground-color"]}},accent:{icon:H["element-book-accent-icon-color"]},page:{background:H["element-book-page-background-color"],backgroundFaint1:H["element-book-page-background-faint-level-1-color"],backgroundFaint2:H["element-book-page-background-faint-level-2-color"],foreground:H["element-book-page-foreground-color"],foregroundFaint1:H["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:H["element-book-page-foreground-faint-level-2-color"]}};function l1(e,t){cl(e,t,s1)}function Mo(e){return pe(e,"_$cssResult$")}function ma(e){return ni(e,["name","value","default"])&&Je(e.default,"string")&&Mo(e.name)&&Mo(e.value)}function cl(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Mo(o)){if(!ma(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);$o({forCssVar:i,onElement:e,toValue:String(o)})}else{if(ma(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);cl(e,o,i)}})}function J(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Cr(e){return Ge(e)==="string"}function Ge(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function an(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function dl(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ul(e){return e[e.length-1]}function sn(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function hl(e,t,r){return(r-e)/(t-e)}function ui(e,t,r){return sn(t[0],t[1],hl(e[0],e[1],r))}function fl(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var c1=Object.freeze({__proto__:null,isString:Cr,type:Ge,toPrecision:an,parseFunction:dl,last:ul,interpolate:sn,interpolateInv:hl,mapRange:ui,parseCoordGrammar:fl,multiplyMatrices:J});class d1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Qe=new d1;var Le={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Ee={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ao(e){return Array.isArray(e)?e:Ee[e]}function ln(e,t,r,n={}){if(e=Ao(e),t=Ao(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Qe.run("chromatic-adaptation-start",o),o.M||(o.W1===Ee.D65&&o.W2===Ee.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Ee.D50&&o.W2===Ee.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Qe.run("chromatic-adaptation-end",o),o.M)return J(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const u1=75e-6;var $r,To,zt,vn,pl;const Ae=class{constructor(t){Ut(this,$r);Ut(this,vn);Ut(this,zt,void 0);var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Ae.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ao(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,En(this,zt,_r(this,vn,pl).call(this).reverse()),Qe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=u1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=_r(this,$r,To).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=_r(this,$r,To).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ae.get(t),this===t)return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=kt(this,zt),o=kt(t,zt),i,a;for(let s=0;s<n.length&&n[s]===o[s];s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ae.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Ae.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Ae)return t;if(Ge(t)==="string"){let o=Ae.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Ae.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Ge(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Ae.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ge(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Ae.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let T=Ae;$r=new WeakSet,To=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=fl(t.coords);let r=Object.entries(this.coords).map(([n,o],i)=>{let a=t.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=ui(s,l,i)),i=an(i,o),c&&(i+=c),i})}return t},zt=new WeakMap,vn=new WeakSet,pl=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},An(T,"registry",{}),An(T,"DEFAULT_FORMAT",{type:"functions",name:"color"});var ke=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ge extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ke),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=J(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ln(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=ln(this.base.white,this.white,r),J(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function gl(e){var r,n,o,i,a;let t={str:(r=String(e))==null?void 0:r.trim()};if(Qe.run("parse-start",t),t.color)return t.color;if(t.parsed=dl(t.str),t.parsed){let s=t.parsed.name;if(s==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of T.all){let f=u.getFormat("color");if(f&&(l===f.id||(n=f.ids)!=null&&n.includes(l))){let g=Object.keys(u.coords).length,p=Array(g).fill(0);return p.forEach((b,$)=>p[$]=t.parsed.args[$]||0),{spaceId:u.id,coords:p,alpha:c}}}let d="";if(l in T.registry){let u=(a=(i=(o=T.registry[l].formats)==null?void 0:o.functions)==null?void 0:i.color)==null?void 0:a.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of T.all){let c=l.getFormat(s);if(c&&c.type==="function"){let d=1;(c.lastAlpha||ul(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([f,g],p)=>{var L;let b=c.coordGrammar[p],$=(L=u[p])==null?void 0:L.type;if(b=b.find(ee=>ee==$),!b){let ee=g.name||f;throw new TypeError(`${$} not allowed for ${ee} in ${s}()`)}let S=b.range;$==="<percentage>"&&(S||(S=[0,1]));let M=g.range||g.refRange;S&&M&&(u[p]=ui(S,M,u[p]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let s of T.all)for(let l in s.formats){let c=s.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function O(e){if(!e)throw new TypeError("Empty color reference");Cr(e)&&(e=gl(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Sr(e,t){return t=T.get(t),t.from(e)}function Ce(e,t){let{space:r,index:n}=T.resolveCoord(t,e.space);return Sr(e,r)[n]}function ml(e,t,r){return t=T.get(t),e.coords=t.to(e.space,r),e}function et(e,t,r){if(e=O(e),arguments.length===2&&Ge(arguments[1])==="object"){let n=arguments[1];for(let o in n)et(e,o,n[o])}else{typeof r=="function"&&(r=r(Ce(e,t)));let{space:n,index:o}=T.resolveCoord(t,e.space),i=Sr(e,n);i[o]=r,ml(e,n,i)}return e}var hi=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ke,fromBase:e=>ln(ke.white,"D50",e),toBase:e=>ln("D50",ke.white,e),formats:{color:{}}});const h1=216/24389,va=24/116,Pr=24389/27;let qn=Ee.D50;var ve=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:qn,base:hi,fromBase(e){let r=e.map((n,o)=>n/qn[o]).map(n=>n>h1?Math.cbrt(n):(Pr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>va?Math.pow(t[0],3):(116*t[0]-16)/Pr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Pr,t[2]>va?Math.pow(t[2],3):(116*t[2]-16)/Pr].map((n,o)=>n*qn[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function kn(e){return(e%360+360)%360}function f1(e,t){if(e==="raw")return t;let[r,n]=t.map(kn),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var gr=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ve,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),kn(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const wa=25**7,cn=Math.PI,ba=180/cn,Ct=cn/180;function Eo(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=ve.from(e),l=gr.from(ve,[i,a,s])[1],[c,d,u]=ve.from(t),f=gr.from(ve,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,b=.5*(1-Math.sqrt(p/(p+wa))),$=(1+b)*a,S=(1+b)*d,M=Math.sqrt($**2+s**2),L=Math.sqrt(S**2+u**2),ee=$===0&&s===0?0:Math.atan2(s,$),we=S===0&&u===0?0:Math.atan2(u,S);ee<0&&(ee+=2*cn),we<0&&(we+=2*cn),ee*=ba,we*=ba;let Re=c-i,Ze=L-M,ue=we-ee,lt=ee+we,Tr=Math.abs(ue),be;M*L===0?be=0:Tr<=180?be=ue:ue>180?be=ue-360:ue<-180?be=ue+360:console.log("the unthinkable has happened");let xt=2*Math.sqrt(L*M)*Math.sin(be*Ct/2),Zt=(i+c)/2,Mn=(M+L)/2,Bi=Math.pow(Mn,7),Ne;M*L===0?Ne=lt:Tr<=180?Ne=lt/2:lt<360?Ne=(lt+360)/2:Ne=(lt-360)/2;let Li=(Zt-50)**2,u0=1+.015*Li/Math.sqrt(20+Li),Ri=1+.045*Mn,Wt=1;Wt-=.17*Math.cos((Ne-30)*Ct),Wt+=.24*Math.cos(2*Ne*Ct),Wt+=.32*Math.cos((3*Ne+6)*Ct),Wt-=.2*Math.cos((4*Ne-63)*Ct);let Ni=1+.015*Mn*Wt,h0=30*Math.exp(-1*((Ne-275)/25)**2),f0=2*Math.sqrt(Bi/(Bi+wa)),p0=-1*Math.sin(2*h0*Ct)*f0,Er=(Re/(r*u0))**2;return Er+=(Ze/(n*Ri))**2,Er+=(xt/(o*Ni))**2,Er+=p0*(Ze/(n*Ri))*(xt/(o*Ni)),Math.sqrt(Er)}const p1=75e-6;function or(e,t=e.space,{epsilon:r=p1}={}){e=O(e),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function mr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function tt(e,{method:t=Le.gamut_mapping,space:r=e.space}={}){if(Cr(arguments[1])&&(r=arguments[1]),r=T.get(r),or(e,r,{epsilon:0}))return e;let n=xe(e,r);if(t!=="clip"&&!or(e,r)){let o=tt(mr(n),{method:"clip",space:r});if(Eo(e,o)>2){let i=T.resolveCoord(t),a=i.space,s=i.id,l=xe(n,a),d=(i.range||i.refRange)[0],u=.01,f=d,g=Ce(l,s);for(;g-f>u;){let p=mr(l);p=tt(p,{space:r,method:"clip"}),Eo(l,p)-2<u?f=Ce(l,s):g=Ce(l,s),et(l,s,(f+g)/2)}n=xe(l,r)}else n=o}if(t==="clip"||!or(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=xe(n,e.space)),e.coords=n.coords,e}tt.returns="color";function xe(e,t,{inGamut:r}={}){e=O(e),t=T.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=tt(o)),o}xe.returns="color";function dn(e,{precision:t=Le.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=O(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!or(e)&&(s=tt(mr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>an(g,t)));let d=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(g)}let u=e.alpha;t!==null&&(u=an(u,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${f})`}return i}const g1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],m1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Cn=new ge({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:g1,fromXYZ_M:m1,formats:{color:{}}});const Br=1.09929682680944,$a=.018053968510807;var vl=new ge({id:"rec2020",name:"REC.2020",base:Cn,toBase(e){return e.map(function(t){return t<$a*4.5?t/4.5:Math.pow((t+Br-1)/Br,1/.45)})},fromBase(e){return e.map(function(t){return t>=$a?Br*Math.pow(t,.45)-(Br-1):4.5*t})},formats:{color:{}}});const v1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],w1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var wl=new ge({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:v1,fromXYZ_M:w1});const b1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],$1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var bl=new ge({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:b1,fromXYZ_M:$1,formats:{color:{}}}),ya={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let xa=Array(3).fill("<percentage> | <number>[0, 255]"),ka=Array(3).fill("<number>[0, 255]");var vr=new ge({id:"srgb",name:"sRGB",base:bl,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:xa},rgb_number:{name:"rgb",commas:!0,coords:ka,noAlpha:!0},color:{},rgba:{coords:xa,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ka},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=ya.black,t.alpha=0):t.coords=ya[e],t.coords)return t}}}}),$l=new ge({id:"p3",name:"P3",base:wl,fromBase:vr.fromBase,toBase:vr.toBase,formats:{color:{id:"display-p3"}}});Le.display_space=vr;if(typeof CSS<"u"&&CSS.supports)for(let e of[ve,vl,$l]){let t=e.getMinCoords(),n=dn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Le.display_space=e;break}}function y1(e,{space:t=Le.display_space,...r}={}){let n=dn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Le.display_space)n=new String(n),n.color=e;else{let o=xe(e,t);n=new String(dn(o,r)),n.color=o}return n}function yl(e,t,r="lab"){r=T.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function x1(e,t){return e=O(e),t=O(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function rt(e){return Ce(e,[ke,"y"])}function xl(e,t){et(e,[ke,"y"],t)}function k1(e){Object.defineProperty(e.prototype,"luminance",{get(){return rt(this)},set(t){xl(this,t)}})}var C1=Object.freeze({__proto__:null,getLuminance:rt,setLuminance:xl,register:k1});function S1(e,t){e=O(e),t=O(t);let r=Math.max(rt(e),0),n=Math.max(rt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const I1=.56,M1=.57,A1=.62,T1=.65,Ca=.022,E1=1.414,_1=.1,P1=5e-4,B1=1.14,Sa=.027,L1=1.14;function Ia(e){return e>=Ca?e:e+(Ca-e)**E1}function St(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function R1(e,t){t=O(t),e=O(e);let r,n,o,i,a,s;t=xe(t,"srgb"),[i,a,s]=t.coords;let l=St(i)*.2126729+St(a)*.7151522+St(s)*.072175;e=xe(e,"srgb"),[i,a,s]=e.coords;let c=St(i)*.2126729+St(a)*.7151522+St(s)*.072175,d=Ia(l),u=Ia(c),f=u>d;return Math.abs(u-d)<P1?n=0:f?(r=u**I1-d**M1,n=r*B1):(r=u**T1-d**A1,n=r*L1),Math.abs(n)<_1?o=0:n>0?o=n-Sa:o=n+Sa,o*100}function N1(e,t){e=O(e),t=O(t);let r=Math.max(rt(e),0),n=Math.max(rt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const z1=5e4;function D1(e,t){e=O(e),t=O(t);let r=Math.max(rt(e),0),n=Math.max(rt(t),0);return n>r&&([r,n]=[n,r]),n===0?z1:(r-n)/n}function F1(e,t){e=O(e),t=O(t);let r=Ce(e,[ve,"l"]),n=Ce(t,[ve,"l"]);return Math.abs(r-n)}const j1=216/24389,Ma=24/116,Lr=24389/27;let Vn=Ee.D65;var _o=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Vn,base:ke,fromBase(e){let r=e.map((n,o)=>n/Vn[o]).map(n=>n>j1?Math.cbrt(n):(Lr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ma?Math.pow(t[0],3):(116*t[0]-16)/Lr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Lr,t[2]>Ma?Math.pow(t[2],3):(116*t[2]-16)/Lr].map((n,o)=>n*Vn[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const Zn=Math.pow(5,.5)*.5+.5;function H1(e,t){e=O(e),t=O(t);let r=Ce(e,[_o,"l"]),n=Ce(t,[_o,"l"]),o=Math.abs(Math.pow(r,Zn)-Math.pow(n,Zn)),i=Math.pow(o,1/Zn)*Math.SQRT2-40;return i<7.5?0:i}var Gr=Object.freeze({__proto__:null,contrastWCAG21:S1,contrastAPCA:R1,contrastMichelson:N1,contrastWeber:D1,contrastLstar:F1,contrastDeltaPhi:H1});function O1(e,t,r={}){Cr(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Gr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=O(e),t=O(t);for(let i in Gr)if("contrast"+n.toLowerCase()===i.toLowerCase())return Gr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function kl(e){let[t,r,n]=Sr(e,ke),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Cl(e){let[t,r,n]=Sr(e,ke),o=t+r+n;return[t/o,r/o]}function q1(e){Object.defineProperty(e.prototype,"uv",{get(){return kl(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Cl(this)}})}var V1=Object.freeze({__proto__:null,uv:kl,xy:Cl,register:q1});function Z1(e,t){return yl(e,t,"lab")}const W1=Math.PI,Aa=W1/180;function U1(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=ve.from(e),[,s,l]=gr.from(ve,[o,i,a]),[c,d,u]=ve.from(t),f=gr.from(ve,[c,d,u])[1];s<0&&(s=0),f<0&&(f=0);let g=o-c,p=s-f,b=i-d,$=a-u,S=b**2+$**2-p**2,M=.511;o>=16&&(M=.040975*o/(1+.01765*o));let L=.0638*s/(1+.0131*s)+.638,ee;Number.isNaN(l)&&(l=0),l>=164&&l<=345?ee=.56+Math.abs(.2*Math.cos((l+168)*Aa)):ee=.36+Math.abs(.4*Math.cos((l+35)*Aa));let we=Math.pow(s,4),Re=Math.sqrt(we/(we+1900)),Ze=L*(Re*ee+1-Re),ue=(g/(r*M))**2;return ue+=(p/(n*L))**2,ue+=S/Ze**2,Math.sqrt(ue)}const Ta=203;var fi=new T({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ke,fromBase(e){return e.map(t=>Math.max(t*Ta,0))},toBase(e){return e.map(t=>Math.max(t/Ta,0))}});const Rr=1.15,Nr=.66,Ea=2610/2**14,Y1=2**14/2610,_a=3424/2**12,Pa=2413/2**7,Ba=2392/2**7,G1=1.7*2523/2**5,La=2**5/(1.7*2523),zr=-.56,Wn=16295499532821565e-27,X1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],J1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],K1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Q1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Sl=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:fi,fromBase(e){let[t,r,n]=e,o=Rr*t-(Rr-1)*n,i=Nr*r-(Nr-1)*t,s=J(X1,[o,i,n]).map(function(f){let g=_a+Pa*(f/1e4)**Ea,p=1+Ba*(f/1e4)**Ea;return(g/p)**G1}),[l,c,d]=J(K1,s);return[(1+zr)*l/(1+zr*l)-Wn,c,d]},toBase(e){let[t,r,n]=e,o=(t+Wn)/(1+zr-zr*(t+Wn)),a=J(Q1,[o,r,n]).map(function(f){let g=_a-f**La,p=Ba*f**La-Pa;return 1e4*(g/p)**Y1}),[s,l,c]=J(J1,a),d=(s+(Rr-1)*c)/Rr,u=(l+(Nr-1)*d)/Nr;return[d,u,c]},formats:{color:{}}}),Po=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Sl,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),kn(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function eu(e,t){let[r,n,o]=Po.from(e),[i,a,s]=Po.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Il=3424/4096,Ml=2413/128,Al=2392/128,Ra=2610/16384,tu=2523/32,ru=16384/2610,Na=32/2523,nu=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],ou=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],iu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],au=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Bo=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:fi,fromBase(e){let t=J(nu,e);return su(t)},toBase(e){let t=lu(e);return J(au,t)},formats:{color:{}}});function su(e){let t=e.map(function(r){let n=Il+Ml*(r/1e4)**Ra,o=1+Al*(r/1e4)**Ra;return(n/o)**tu});return J(ou,t)}function lu(e){return J(iu,e).map(function(n){let o=Math.max(n**Na-Il,0),i=Ml-Al*n**Na;return 1e4*(o/i)**ru})}function cu(e,t){let[r,n,o]=Bo.from(e),[i,a,s]=Bo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const du=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],uu=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],hu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],fu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var un=new T({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ke,fromBase(e){let r=J(du,e).map(n=>Math.cbrt(n));return J(hu,r)},toBase(e){let r=J(fu,e).map(n=>n**3);return J(uu,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function pu(e,t){let[r,n,o]=un.from(e),[i,a,s]=un.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var Lo=Object.freeze({__proto__:null,deltaE76:Z1,deltaECMC:U1,deltaE2000:Eo,deltaEJz:eu,deltaEITP:cu,deltaEOK:pu});function Qt(e,t,r={}){Cr(r)&&(r={method:r});let{method:n=Le.deltaE,...o}=r;e=O(e),t=O(t);for(let i in Lo)if("deltae"+n.toLowerCase()===i.toLowerCase())return Lo[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function gu(e,t=.25){let n=[T.get("oklch","lch"),"l"];return et(e,n,o=>o*(1+t))}function mu(e,t=.25){let n=[T.get("oklch","lch"),"l"];return et(e,n,o=>o*(1-t))}var vu=Object.freeze({__proto__:null,lighten:gu,darken:mu});function Tl(e,t,r=.5,n={}){[e,t]=[O(e),O(t)],Ge(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Ir(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function El(e,t,r={}){let n;pi(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[O(e),O(t)],n=Ir(e,t,l));let c=Qt(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(g,p)=>{let b=p*f;return{p:b,color:n(b)}})}if(o>0){let f=u.reduce((g,p,b)=>{if(b===0)return 0;let $=Qt(p.color,u[b-1].color,i);return Math.max(g,$)},0);for(;f>o;){f=0;for(let g=1;g<u.length&&u.length<s;g++){let p=u[g-1],b=u[g],$=(b.p+p.p)/2,S=n($);f=Math.max(f,Qt(S,p.color),Qt(S,b.color)),u.splice(g,0,{p:$,color:n($)}),g++}}}return u=u.map(f=>f.color),u}function Ir(e,t,r={}){if(pi(e)){let[l,c]=[e,t];return Ir(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=O(e),t=O(t),e=mr(e),t=mr(t);let s={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[Le.interpolationSpace]||e.space,o=o?T.get(o):n,e=xe(e,n),t=xe(t,n),e=tt(e),t=tt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[Ce(e,c),Ce(t,c)];[d,u]=f1(l,[d,u]),et(e,c,d),et(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((f,g)=>{let p=t.coords[g];return sn(f,p,l)}),d=sn(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(f=>f/d)),o!==n&&(u=xe(u,o)),u},{rangeArgs:s})}function pi(e){return Ge(e)==="function"&&!!e.rangeArgs}Le.interpolationSpace="lab";function wu(e){e.defineFunction("mix",Tl,{returns:"color"}),e.defineFunction("range",Ir,{returns:"function<color>"}),e.defineFunction("steps",El,{returns:"array<color>"})}var bu=Object.freeze({__proto__:null,mix:Tl,steps:El,range:Ir,isRange:pi,register:wu}),_l=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:vr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Pl=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:_l,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),$u=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Pl,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const yu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],xu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Bl=new ge({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:yu,fromXYZ_M:xu}),ku=new ge({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Bl,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Cu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Su=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ll=new ge({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:hi,toXYZ_M:Cu,fromXYZ_M:Su});const Iu=1/512,Mu=16/512;var Au=new ge({id:"prophoto",name:"ProPhoto",base:Ll,toBase(e){return e.map(t=>t<Mu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Iu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Tu=new T({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:un,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),kn(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const za=203,Da=2610/2**14,Eu=2**14/2610,_u=2523/2**5,Fa=2**5/2523,ja=3424/2**12,Ha=2413/2**7,Oa=2392/2**7;var Pu=new ge({id:"rec2100pq",name:"REC.2100-PQ",base:Cn,toBase(e){return e.map(function(t){return(Math.max(t**Fa-ja,0)/(Ha-Oa*t**Fa))**Eu*1e4/za})},fromBase(e){return e.map(function(t){let r=Math.max(t*za/1e4,0),n=ja+Ha*r**Da,o=1+Oa*r**Da;return(n/o)**_u})},formats:{color:{id:"rec2100-pq"}}});const qa=.17883277,Va=.28466892,Za=.55991073,Un=3.7743;var Bu=new ge({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Cn,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Un:Math.exp((t-Za)/qa+Va)/12*Un})},fromBase(e){return e.map(function(t){return t/=Un,t<=1/12?Math.sqrt(3*t):qa*Math.log(12*t-Va)+Za})},formats:{color:{id:"rec2100-hlg"}}});const Rl={};Qe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Nl(e.W1,e.W2,e.options.method))});Qe.add("chromatic-adaptation-end",e=>{e.M||(e.M=Nl(e.W1,e.W2,e.options.method))});function Sn({id:e,toCone_M:t,fromCone_M:r}){Rl[e]=arguments[0]}function Nl(e,t,r="Bradford"){let n=Rl[r],[o,i,a]=J(n.toCone_M,e),[s,l,c]=J(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],u=J(d,n.toCone_M);return J(n.fromCone_M,u)}Sn({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Sn({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Sn({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Sn({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Ee,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ee.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Lu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Ru=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var zl=new ge({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ee.ACES,toXYZ_M:Lu,fromXYZ_M:Ru,formats:{color:{}}});const Dr=2**-16,Yn=-.35828683,Fr=(Math.log2(65504)+9.72)/17.52;var Nu=new ge({id:"acescc",name:"ACEScc",coords:{r:{range:[Yn,Fr],name:"Red"},g:{range:[Yn,Fr],name:"Green"},b:{range:[Yn,Fr],name:"Blue"}},referred:"scene",base:zl,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Dr)*2:r<Fr?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Dr)+9.72)/17.52:t<Dr?(Math.log2(Dr+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Wa=Object.freeze({__proto__:null,XYZ_D65:ke,XYZ_D50:hi,XYZ_ABS_D65:fi,Lab_D65:_o,Lab:ve,LCH:gr,sRGB_Linear:bl,sRGB:vr,HSL:_l,HWB:$u,HSV:Pl,P3_Linear:wl,P3:$l,A98RGB_Linear:Bl,A98RGB:ku,ProPhoto_Linear:Ll,ProPhoto:Au,REC_2020_Linear:Cn,REC_2020:vl,OKLab:un,OKLCH:Tu,Jzazbz:Sl,JzCzHz:Po,ICTCP:Bo,REC_2100_PQ:Pu,REC_2100_HLG:Bu,ACEScg:zl,ACEScc:Nu}),gt;const se=class{constructor(...t){Ut(this,gt,void 0);let r;t.length===1&&(r=O(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,En(this,gt,T.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in kt(this,gt).coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get space(){return kt(this,gt)}get spaceId(){return kt(this,gt).id}clone(){return new se(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=y1(this,...t);return r.color=new se(r.color),r}static get(t,...r){return t instanceof se?t:new se(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=se.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let u=c(...d);return se.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>se.get(c)));return l};t in se||(se[t]=a),o&&(se.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)se.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(se);else for(let r in t)se.defineFunction(r,t[r])}};let Z=se;gt=new WeakMap;Z.defineFunctions({get:Ce,getAll:Sr,set:et,setAll:ml,to:xe,equals:x1,inGamut:or,toGamut:tt,distance:yl,toString:dn});Object.assign(Z,{util:c1,hooks:Qe,WHITES:Ee,Space:T,spaces:T.registry,parse:gl,defaults:Le});for(let e of Object.keys(Wa))T.register(Wa[e]);for(let e in T.registry)Ro(e,T.registry[e]);Qe.add("colorspace-init-end",e=>{var t;Ro(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ro(r,e)})});function Ro(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(Z.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return T.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=T.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=T.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Z.extend(Lo);Z.extend({deltaE:Qt});Z.extend(vu);Z.extend({contrast:O1});Z.extend(V1);Z.extend(C1);Z.extend(bu);Z.extend(Gr);function Dl(e){return ne(e,(t,r)=>r instanceof Z?B(r.toString({format:"hex"})):Dl(r))}const zu="dodgerblue";function No(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Gn({background:e,foreground:t}){return{background:e??new Z(No(t)),foreground:t??new Z(No(e))}}var hn;(function(e){e.Dark="dark",e.Light="light"})(hn||(hn={}));function Du(e){return e==="black"?"white":"black"}const Fu={black:{foregroundFaint1:new Z("#ccc"),foregroundFaint2:new Z("#eee")},white:{foregroundFaint1:new Z("#ccc"),foregroundFaint2:new Z("#eee")}},ju={black:{backgroundFaint1:new Z("#666"),backgroundFaint2:new Z("#444")},white:{backgroundFaint1:new Z("#ccc"),backgroundFaint2:new Z("#fafafa")}};function Ua({themeColor:e=zu,themeStyle:t=hn.Light}={}){const r=new Z(e),n=new Z(t===hn.Dark?"black":"white"),o=No(n),i=new Z(o),a={nav:{hover:Gn({background:r.clone().set({"hsl.l":93})}),active:Gn({background:r.clone().set({"hsl.l":90})}),selected:Gn({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...ju[Du(o)],foreground:i,...Fu[o]}};return Dl(a)}const fn=di()("element-book-change-route"),zo=Vt({"vir-icon-color":"currentColor"}),Hu=Vt({"vir-icon-stroke-color":zo["vir-icon-color"].value,"vir-icon-fill-color":zo["vir-icon-color"].value}),Xn={...zo,...Hu};function Fl({name:e,svgTemplate:t}){return{name:e,templateString:typeof t=="string"?t:So(t)}}const Xe=yn()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
        :host {
            display: block;
            color: ${Xn["vir-icon-color"].value};
            fill: ${Xn["vir-icon-fill-color"].value};
            stroke: ${Xn["vir-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vir-icon-fit-icon"].name} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?sd(e.icon.templateString):""}),Ou=Fl({name:"Element16Icon",svgTemplate:h`
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
    `}),{defineElement:ot,defineElementNoInputs:kg}=Vs(),le=ot()({tagName:"element-book-route-link",cssVars:{"element-book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["element-book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return h`
            <a
                href=${r}
                ${C("click",i=>{(!e.router||il(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new fn(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),jr=ot()({tagName:"element-book-nav",styles:m`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${H["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${H["element-book-nav-hover-background-color"].value};
            color: ${H["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${H["element-book-nav-active-background-color"].value};
            color: ${H["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${le.cssVars["element-book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${le} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${H["element-book-nav-selected-background-color"].value};
            color: ${H["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            font-size: 0.75em;
        }

        ${Xe} {
            display: inline-flex;
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=jl({indent:0,entryTreeNode:e.tree,rootPath:[],router:e.router,selectedPath:e.selectedPath.slice(1)});return h`
            <ul>
                ${t}
            </ul>
        `}});function jl({indent:e,entryTreeNode:t,rootPath:r,selectedPath:n,router:o}){const i=t.breadcrumb?r.concat(t.breadcrumb):r,a=t.entry.entryType===Be.Page,s=Object.values(t.children).map(l=>jl({indent:e+1,entryTreeNode:l,rootPath:i,selectedPath:n,router:o}));return h`
        <div class="nav-tree-entry" style="--indent: ${e};">
            <slot name=${Ue.NavHeader}></slot>
            <li class=${t.entry.entryType}>
                <${le}
                    ${v(le,{router:o,route:{paths:[ce.Book,...i]}})}
                    class=${Pe({"title-row":!0,selected:Lt(n,i)})}
                >
                    <div class="title-text">
                        ${Ke(a,h`
                                <${Xe} ${v(Xe,{icon:Ou})}></${Xe}>
                            `)}
                        ${t.entry.title}
                    </div>
                </${le}>
            </li>
            ${s}
        </div>
    `}const qu=Fl({name:"Element24Icon",svgTemplate:h`
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
    `}),Jn=ot()({tagName:"element-book-breadcrumbs",styles:m`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${le}
                    ${v(le,{route:{hash:void 0,search:void 0,paths:[ce.Book,...a]},router:e.router})}
                >
                    ${r}
                </${le}>
                ${s}
            `}):h`
                &nbsp;
            `}}),pn=Symbol("unset-internal-state");h`
    &nbsp;
`;const Hr=ot()({tagName:"element-book-example-controls",styles:m`
        :host {
            display: flex;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){return h`
            <span>
                ${e.example.title}
                <span></span>
            </span>
        `}}),Kn=ot()({tagName:"element-book-example-viewer",stateInitStatic:{isUnset:pn},renderCallback({state:e,inputs:t,updateState:r}){if(!t.example.renderCallback||typeof t.example.renderCallback=="string")throw new Error(`Failed to render example '${t.example.title}': renderCallback is not a function`);e.isUnset===pn&&r({isUnset:void 0,...t.example.stateInitStatic});try{const n=t.example.renderCallback({state:e,updateState:r,controls:t.currentPageControls});return h`
                ${Ke(!!t.example.styles,h`
                        <style>
                            ${t.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${t.breadcrumbs.join(" > ")} failed: ${Ot(n)}`}},options:{allowPolymorphicState:!0}}),Or=ot()({tagName:"element-book-page-controls",events:{controlValueChange:te()},styles:m`
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .control-wrapper {
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).map(([n,o])=>{const i=Vu(e.currentValues[n],o.controlType,a=>{t(new r.controlValueChange({name:n,value:a}))});return h`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${i}
                    </label>
                `})}});function Vu(e,t,r){return t===vo.Text?h`
            <input
                type="text"
                .value=${e||""}
                ${C("input",n=>{const o=n.currentTarget;if(!(o instanceof HTMLInputElement))throw new Error("Din't get an input element from the event target.");r(o.value)})}
            />
        `:h`
            <p class="error">${t} controls are not implemented yet.</p>
        `}const Qn=ot()({tagName:"element-book-page-examples",styles:m`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .individual-example-wrapper:hover ${Hr} {
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,stateInitStatic:{unset:pn},renderCallback({inputs:e,state:t,updateState:r}){if(t.unset===pn){const i=ne(e.page.controls,(a,s)=>s.initValue);r({unset:void 0,...i})}const n=e.page.examples,o=ad(Object.values(n),i=>e.parentBreadcrumbs.concat(i instanceof Error?i.message:i.title).join(">"),i=>{if(i instanceof Error)return h`
                        <p class="error">${i.message}</p>
                    `;const a=e.parentBreadcrumbs.concat(i.title);return h`
                    <div class="individual-example-wrapper">
                        <${Hr}
                            ${v(Hr,{example:i})}
                        ></${Hr}>
                        <${Kn}
                            ${v(Kn,{example:i,breadcrumbs:a,currentPageControls:t})}
                        ></${Kn}>
                    </div>
                `});return h`
            ${Ke(!!Object.keys(e.page.controls).length,h`
                    <${Or}
                        ${v(Or,{config:e.page.controls,currentValues:t})}
                        ${C(Or.events.controlValueChange,i=>{r({[i.detail.name]:i.detail.value})})}
                    ></${Or}>
                `)}
            <section class="examples-wrapper">${o}</section>
        `},options:{allowPolymorphicState:!0}}),It=ot()({tagName:"element-book-entry-display",styles:m`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${H["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${H["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }

        .all-examples-wrapper {
            flex-grow: 1;
            box-sizing: border-box;
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

        ${le} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${Xe} {
            color: ${H["element-book-accent-icon-color"].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${H["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{const r=Ol(e.currentNode),n=ll(e.currentRoute.paths),o=bn(e.currentNode.entry,!1).reverse(),i=Hl({nestedPages:r,parentBreadcrumbs:o,isTopLevel:!0,router:e.router,isSearching:!!n});return h`
            <div class="title-bar">
                ${Ke(!!n,h`
                        &nbsp;
                    `,h`
                        <${Jn}
                            ${v(Jn,{currentRoute:e.currentRoute,router:e.router})}
                        ></${Jn}>
                    `)}
                <input
                    placeholder="search"
                    .value=${n}
                    ${C("input",async a=>{const s=a.currentTarget;if(!(s instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const l=s.value;await Qr(500),s.value===l&&(s.value?t(new fn({paths:[ce.Search,encodeURIComponent(s.value)]})):t(new fn(xn)))})}
                />
            </div>
            <div class="all-examples-wrapper">${i}</div>
            <slot name=${Ue.Footer}></slot>
        `}});function Hl({nestedPages:e,parentBreadcrumbs:t,isTopLevel:r,router:n,isSearching:o}){return!e.length&&o?[h`
                No results
            `]:e.map(i=>{if(Od(i,Be.Page)){const a=i.entry;if(!Y0(a,Be.Page))throw new Error("nested entry should be a page");const s=h`
                    <${Xe} ${v(Xe,{icon:qu})}></${Xe}>
                    ${a.title}
                `,l=r?h`
                          <h2 class="header-with-icon">${s}</h2>
                      `:h`
                          <h3 class="header-with-icon">${s}</h3>
                      `,c=[ce.Book,...t.concat(i.breadcrumb)];return h`
                    <div class="page-examples">
                        <div class="title-group">
                            <${le}
                                ${v(le,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                            >
                                ${l}
                            </${le}>
                            ${Ya(a)}
                        </div>
                        <${Qn}
                            ${v(Qn,{page:a,parentBreadcrumbs:t})}
                        ></${Qn}>
                    </div>
                `}else return Object.entries(i).map(([a,s])=>{const l=r?h`
                                  <h1>${a}</h1>
                              `:h`
                                  <h2>${a}</h2>
                              `,c=[ce.Book,...t.concat(s.node.breadcrumb)];return h`
                            <div class="title-group">
                                <${le}
                                    ${v(le,{route:{paths:c,hash:void 0,search:void 0},router:n})}
                                >
                                    ${l}
                                </${le}>
                                ${Ya(s.node.entry)}
                            </div>
                            ${Hl({nestedPages:s.nested,parentBreadcrumbs:s.node.breadcrumb?t.concat(s.node.breadcrumb):t,isTopLevel:!1,router:n,isSearching:o})}
                        `})}).flat()}function Ya(e){const t=(e.descriptionParagraphs??[]).map(r=>h`
            <p>${r}</p>
        `);return h`
        <div class="description">${t}</div>
    `}function Ol(e){return e.entry.entryType===Be.Page?[e]:[{[e.entry.title]:{node:e,nested:Object.values(e.children).map(Ol).flat()}}]}function Zu(e,t,r){if(t[0]===ce.Search)return e;Io(t.slice(1),e)||r(xn);const o=Io(t.slice(1),e);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}const qr=yn()({tagName:"element-book-app",events:{pathUpdate:te()},stateInitStatic:{currentRoute:xn,router:void 0,colors:{config:void 0,theme:Ua(void 0)}},styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${H["element-book-page-background-color"].value};
            color: ${H["element-book-page-foreground-color"].value};
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

        ${It} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${jr} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var s,l,c;try{let d=function($){e.router?e.router.setRoutes($):n({currentRoute:{...e.currentRoute,...$}}),t.elementBookRoutePaths&&!Lt(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate($.paths??[]))};var a=d;if(t.elementBookRoutePaths&&!Lt(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(s=t.internalRouterConfig)!=null&&s.useInternalRouter&&!e.router){const $=i1(t.internalRouterConfig.basePath);n({router:$}),$.addRouteListener(!0,S=>{n({currentRoute:S})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const u={themeColor:t.themeColor};if(!Lt(u,(c=e.colors)==null?void 0:c.config)){const $=Ua(u);n({colors:{config:u,theme:$}}),l1(r,$)}const f=qd(t.entries,t.everythingTitle),g=ll(e.currentRoute.paths),p=g?Wd({entries:t.entries,searchQuery:g,startTree:f}):f,b=Zu(p,e.currentRoute.paths,d);return h`
                <div
                    class="root"
                    ${C(fn,$=>{const S=r.shadowRoot.querySelector(It.tagName);S?S.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${It.tagName}' for scrolling.`),d($.detail)})}
                >
                    <${jr}
                        ${v(jr,{tree:f,router:e.router,selectedPath:e.currentRoute.paths})}
                    >
                        <slot
                            name=${Ue.NavHeader}
                            slot=${Ue.NavHeader}
                        ></slot>
                    </${jr}>
                    <${It}
                        ${v(It,{currentRoute:e.currentRoute,currentNode:b,router:e.router})}
                    >
                        <slot
                            name=${Ue.Footer}
                            slot=${Ue.Footer}
                        ></slot>
                    </${It}>
                </div>
            `}catch(d){return console.error(d),h`
                <p class="error">${Ot(d)}</p>
            `}}}),ql=Symbol("and"),Vl=Symbol("or"),Zl=Symbol("exact"),Wl=Symbol("enum"),Ul=Symbol("unknown"),Yl="__vir__shape__definition__key__do__not__use__in__actual__objects";function Wu(e){return pe(e,Yl)}const Uu="__vir__shape__specifier__key__do__not__use__in__actual__objects",Yu=[ql,Vl,Zl,Wl,Ul];function Gu(e){return Mr(e,Vl)}function Xu(e){return Mr(e,ql)}function Ju(e){return Mr(e,Zl)}function Ku(e){return Mr(e,Wl)}function Qu(e){return Mr(e,Ul)}function Mr(e,t){const r=Gl(e);return!!r&&r.specifierType===t}function Gl(e){if(vt(e)&&pe(e,Uu)){if(!pe(e,"parts")||!Je(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!pe(e,"specifierType")||!m0(Yu,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Do(e){return Fo(e)}function Fo(e){const t=Gl(e);if(t){if(Gu(t)||Ju(t))return Fo(t.parts[0]);if(Xu(t))return t.parts.reduce((r,n)=>Object.assign(r,Fo(n)),{});if(Ku(t))return Object.values(t.parts[0])[0];if(Qu(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Wu(e)?Do(e.shape):e instanceof RegExp||Je(e,"array")?e:vt(e)?ne(e,(r,n)=>Do(n)):e}function e2(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Do(e),[Yl]:!0}}const De={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function Ga(e,t){return`var(${e}, var(${De.color}, ${t}))`}const k={stroke:(e="currentColor")=>Ga(De.strokeColor,e),fill:(e="currentColor")=>Ga(De.fillColor,e)};class y{constructor(t,r){this.iconName=t,this.svgString=r}}function x(e,...t){return e.reduce((n,o,i)=>{const a=i<t.length?t[i]:"";return n+o+a},"")}const t2=new y("Copy16Icon",x`
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
    `),r2=new y("ExternalLink16Icon",x`
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
    `),ir=new y("InfoCircle16Icon",x`
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
    `),n2=new y("ArrowBarUp24Icon",x`
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
    `),o2=new y("ArrowForwardUp24Icon",x`
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
    `),gi=new y("ArrowLeft24Icon",x`
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
    `),i2=new y("ArrowLoopLeft24Icon",x`
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
    `),Xl=new y("ArrowLoopRight24Icon",x`
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
    `),mi=new y("ArrowRight24Icon",x`
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
    `),jo=new y("ArrowsSort24Icon",x`
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
    `),Xa={interactionDuration:m`--toniq-interaction-transition-duration`,prettyDuration:m`--toniq-pretty-transition-duration`},K={interaction:m`var(${Xa.interactionDuration}, 84ms)`,pretty:m`var(${Xa.prettyDuration}, 300ms)`};function vi(){return e=>e}function eo(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const a2=(()=>{const e={backgroundColor:m`#ffffff`,foregroundColor:m`#000000`},t={...e,foregroundColor:m`#00D093`},r={...e,foregroundColor:m`#ACADAD`},n={...e,foregroundColor:m`#D6D6D6`},o={...t},i={...t,foregroundColor:m`#00A876`},a={...t,foregroundColor:m`#1D6852`},s={...n},l={...e,foregroundColor:m`#EAFBF7`},c={...e,backgroundColor:m`#D2EEFA`},d=eo(o),u=eo(i),f=eo(a),g=f,p={backgroundColor:m`#F1F3F6`,foregroundColor:e.foregroundColor},b={...p,foregroundColor:m`#9A9A9D`};return vi()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:d,accentPrimaryHover:u,accentPrimaryActive:f,accentSecondary:p,accentTertiary:b})})(),Jl=a2;function Ja(e,t){return B(`--toniq-${Kr(e)}-${Kr(t)}`)}const wi=ne(Jl,e=>({backgroundColor:Ja(e,"backgroundColor"),foregroundColor:Ja(e,"foregroundColor")}));function Te(e,t){const r=Jl[e][t],n=wi[e][t];return m`var(${n}, ${r})`}const I=ne(wi,e=>({foregroundColor:Te(e,"foregroundColor"),backgroundColor:Te(e,"backgroundColor")}));function j(e){return m`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Ho=m`
    pointer-events: none;
    opacity: 0.3;
`;function ar(e,t,r){return Math.min(Math.max(e,t),r)}function Tt(e){return`${e}px`}function to(e){return`${e}%`}function ro(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const u=e[d+1];return u==null?!0:c<=t&&u>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function s2(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=l2(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Ka(o,r),o.length>r&&Ka(o,r)),o}function Ka(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function l2(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function it({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(Tt(n+r+t));return m`
        ${B(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${I.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const Kl=vi()({toniqFont:{"font-family":m`'Rubik', sans-serif`},normalWeightFont:{"font-weight":m`400`},boldFont:{"font-weight":m`600`},extraBoldFont:{"font-weight":m`900`},paragraphFont:{"line-height":m`24px`,"font-size":m`16px`},boldParagraphFont:{},labelFont:{"line-height":m`16px`,"font-size":m`12px`},boldLabelFont:{},h1Font:{"line-height":m`96px`,"font-size":m`64px`},h2Font:{"line-height":m`48px`,"font-size":m`32px`},h3Font:{"line-height":m`32px`,"font-size":m`24px`},monospaceFont:{"font-family":m`'Inconsolata', monospace`,"line-height":m`1.125em`}}),c2=ne(Kl,(e,t)=>{const r=B(Kr(e.replace(/Font$/,"")));return ne(t,o=>{const i=B(o);return m`--toniq-font-${r}-${i}`})});function _e(e){const t=c2[e],r=Kl[e],n=re(t).map(o=>{const i=r[o],a=t[o];return m`
            ${B(o)}: var(${a}, ${i});
        `});return B(n.join(`
`))}const W=(()=>{const e=m`
        font-style: normal;
        color: ${I.pagePrimary.foregroundColor};
        ${_e("toniqFont")};
    `,t=m`
        ${e};
        ${_e("normalWeightFont")};
    `,r=m`
        ${e};
        ${_e("boldFont")};
    `,n=m`
        ${e};
        ${_e("extraBoldFont")};
    `,o=m`
        ${e};
        ${_e("paragraphFont")};
        ${t};
    `,i=m`
        ${e};
        ${o};
        ${r};
    `,a=m`
        ${e};
        ${_e("labelFont")};
        ${t};
    `,s=m`
        ${a};
        ${r};
    `,l=m`
        ${_e("h1Font")};
        ${n};
    `,c=m`
        ${_e("h2Font")};
        ${r};
    `,d=m`
        ${_e("h3Font")};
        ${r};
    `,u=m`
        ${_e("monospaceFont")}
    `;return vi()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:u})})(),at=m`
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
`,bi={popupShadow:m`
        filter: drop-shadow(0px 12px 8px ${I.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:m`
        filter: drop-shadow(0px 12px 8px ${I.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function d2(e,t=!0){const r=B(e),n=e===":host"?m`
                  :host(:hover) ;
              `:m`
                  ${r}:hover
              `,o=t?m`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${I.pageInteraction.foregroundColor};
              }
          `:m``;return m`
        ${r} {
            border-radius: 16px;
            background-color: ${I.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${bi.popupShadow};
        }

        ${o}
    `}const $t=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,u2=new y("ArrowsSortAscending24Icon",x`
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
    `),h2=new y("ArrowsSortDescending24Icon",x`
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
    `),f2=new y("Bucket24Icon",x`
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
    `),p2=new y("BuildingStore24Icon",x`
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
    `),g2=new y("CalendarEvent24Icon",x`
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
    `),m2=new y("Cash24Icon",x`
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
    `),v2=new y("Chain24Icon",x`
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
    `),Ql=new y("CheckMark24Icon",x`
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
    `),ec=new y("ChevronDown24Icon",x`
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
    `),w2=new y("ChevronUp24Icon",x`
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
    `),b2=new y("Circle24Icon",x`
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
    `),Et=new y("CircleDot24Icon",x`
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
    `),$2=new y("CirclePlusFill24Icon",x`
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
    `),y2=new y("CirclePlusOutline24Icon",x`
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
    `),x2=new y("CircleWavyCheck24Icon",x`
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
    `),k2=new y("Clock24Icon",x`
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
    `),tc=new y("Code24Icon",x`
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
    `),rc=new y("Copy24Icon",x`
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
    `),C2=new y("CreateFile24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            stoke-miterlimit="1.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2px"
            stroke="${k.stroke()}"
            width="24"
            height="24"
        >
            <path
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `),S2=new y("DotsVertical24Icon",x`
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
    `),I2=new y("Download24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${k.stroke()}"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4" />
        </svg>
    `),M2=new y("Edit24Icon",x`
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
    `),nc=new y("ExternalLink24Icon",x`
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
    `),A2=new y("Filter24Icon",x`
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
    `),T2=new y("Geometry24Icon",x`
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
    `),E2=new y("GridDots24Icon",x`
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
    `),_2=new y("HeartFill24Icon",x`
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
    `),P2=new y("HeartOutline24Icon",x`
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
    `),B2=new y("Infinity24Icon",x`
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
    `),L2=new y("Info24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill="${k.stroke()}"
            viewBox="0 0 24 24"
        >
            <path
                d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-8-3a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 9Zm-.01 8.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Z"
            />
        </svg>
    `),R2=new y("LayersLinked24Icon",x`
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
    `),N2=new y("LayoutGrid24Icon",x`
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
    `),z2=new y("Lifebuoy24Icon",x`
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
    `),D2=new y("List24Icon",x`
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
    `),F2=new y("ListDetails24Icon",x`
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
    `),j2=new y("Loader24Icon",x`
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
    `),oc=new y("LoaderAnimated24Icon",x`
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
    `),H2=new y("Lock24Icon",x`
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
    `),O2=new y("LockOpen24Icon",x`
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
    `),q2=new y("Menu24Icon",x`
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
    `),V2=new y("Paper24Icon",x`
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
    `),Z2=new y("Person24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill="${k.stroke()}"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 2c-2.651.003-5.193 1.057-7.068 2.932S2.003 9.349 2 12c.004 2.651 1.059 5.192 2.934 7.066C6.808 20.941 9.349 21.996 12 22c2.652 0 5.196-1.054 7.071-2.929C20.946 17.196 22 14.652 22 12s-1.054-5.196-2.929-7.071C17.196 3.054 14.652 2 12 2Zm6.082 15.77c-.561-1.132-1.428-2.086-2.503-2.752-1.074-.666-2.314-1.019-3.578-1.018-1.265.001-2.504.355-3.577 1.022-1.074.667-1.94 1.621-2.501 2.755C4.428 16.226 3.595 14.154 3.6 12c0-2.228.885-4.364 2.46-5.94C7.636 4.485 9.772 3.6 12 3.6s4.364.885 5.94 2.46C19.515 7.636 20.4 9.772 20.4 12c.005 2.151-.826 4.22-2.318 5.77Z"
            />
            <path
                d="M12 5.5c-.692 0-1.369.205-1.945.59-.575.384-1.024.931-1.289 1.571-.264.639-.334 1.343-.199 2.022.135.679.469 1.302.958 1.792.49.489 1.113.823 1.792.958s1.383.065 2.022-.199c.64-.265 1.187-.714 1.571-1.29.385-.575.59-1.252.59-1.944 0-.46-.091-.915-.266-1.339a3.50094 3.50094 0 0 0-1.895-1.895C12.915 5.591 12.46 5.5 12 5.5Z"
            />
        </svg>
    `),W2=new y("Photo24Icon",x`
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
    `),U2=new y("Refresh24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${k.stroke()}"
        >
            <path
                d="M17 9a6 6 0 1 0 0 6 1 1 0 0 1 2 0 8 8 0 1 1-1-8V5a1 1 0 0 1 2 0v5l-1 1h-5a1 1 0 0 1 0-2h3Z"
            />
        </svg>
    `),Oo=new y("Rocket24Icon",x`
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
    `),ic=new y("Search24Icon",x`
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
    `),Y2=new y("Send24Icon",x`
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
    `),G2=new y("ShoppingCart24Icon",x`
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
    `),X2=new y("Social24Icon",x`
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
    `),J2=new y("Square24Icon",x`
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
    `),K2=new y("SquareCheck24Icon",x`
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
    `),sr=new y("Trash24Icon",x`
        <svg
            fill="none"
            stroke="${k.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            />
        </svg>
    `),Q2=new y("Upload24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${k.stroke()}"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4" />
        </svg>
    `),eh=new y("User24Icon",x`
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
    `),th=new y("Users24Icon",x`
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
    `),rh=new y("Wallet24Icon",x`
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
    `),nh=new y("WorldUpload24Icon",x`
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
    `),oh=new y("X24Icon",x`
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
    `),ac=new y("Kyc32Icon",x`
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
    `),sc=new y("FolderOff48Icon",x`
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
    `),lc=new y("Api64Icon",x`
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
    `),ih=new y("CircleDashes64Icon",x`
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
    `),ah=new y("Rocket64Icon",x`
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
    `),sh=new y("CryptoBtc24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            height="24"
            width="24"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="12" fill="#f7931a" />
            <path
                fill="#fff"
                fill-rule="nonzero"
                d="M17.3 10.3c.23-1.6-.99-2.46-2.65-3.04l.54-2.16-1.32-.33-.52 2.1-1.06-.24.53-2.12-1.31-.33-.54 2.16-.84-.2-1.82-.45-.35 1.4s.98.23.96.24c.53.13.63.49.61.77l-.61 2.46.13.04-.13-.03-.87 3.45c-.06.16-.23.4-.6.31.01.02-.96-.24-.96-.24l-.65 1.51 1.71.43.94.24-.54 2.19 1.31.33.54-2.17c.36.1.71.2 1.05.28l-.54 2.15 1.32.33.54-2.19c2.25.43 3.94.26 4.65-1.77.57-1.64-.03-2.58-1.21-3.2.86-.2 1.5-.76 1.68-1.93Zm-3.02 4.2c-.4 1.64-3.16.76-4.05.54l.72-2.9c.9.22 3.76.66 3.33 2.37Zm.4-4.23c-.36 1.48-2.65.73-3.4.54l.66-2.63c.74.19 3.14.54 2.75 2.09Z"
            />
        </svg>
    `),lh=new y("CryptoCkBtc24Icon",x`
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
            <g>
                <circle cx="12" cy="12" r="12" fill="#3c00ba" />
                <path
                    fill="#28aae1"
                    d="M1.63 11.3a10.42 10.42 0 0 1 9.67-9.67v1.06a9.36 9.36 0 0 0-8.6 8.6H1.63Z"
                />
                <path
                    fill="url(#CkBtcToken24Icon-b)"
                    d="M12.7 1.62c5.2.33 9.38 4.49 9.73 9.68h-1.07a9.36 9.36 0 0 0-8.66-8.62V1.62Z"
                />
                <path
                    fill="#28aae1"
                    d="M22.43 12.7a10.42 10.42 0 0 1-9.73 9.68v-1.06a9.36 9.36 0 0 0 8.66-8.62h1.07Z"
                />
                <path
                    fill="url(#CkBtcToken24Icon-c)"
                    d="M11.3 22.37a10.42 10.42 0 0 1-9.67-9.67H2.7a9.36 9.36 0 0 0 8.6 8.61v1.06Z"
                />
                <path
                    fill="#fff"
                    fill-rule="nonzero"
                    d="M16.4 10.65c.2-1.31-.8-2.02-2.17-2.49l.44-1.77-1.08-.27-.43 1.73-.86-.2.43-1.75-1.08-.27-.44 1.78-.7-.16-1.48-.38-.3 1.15s.81.19.8.2c.43.1.51.4.5.63l-.5 2.02a1 1 0 0 1 .1.04l-.1-.03-.72 2.83c-.05.14-.18.33-.5.26l-.78-.2L7 15.01l1.4.35.77.2-.44 1.8 1.08.27.44-1.78.86.22-.44 1.77 1.08.27.45-1.8c1.84.36 3.23.22 3.81-1.45.47-1.34-.02-2.12-1-2.62.71-.17 1.25-.63 1.39-1.59Zm-2.47 3.46c-.34 1.35-2.6.62-3.33.44l.6-2.38c.73.18 3.08.54 2.73 1.94Zm.33-3.48c-.3 1.22-2.18.6-2.8.45L12 8.92c.61.15 2.58.44 2.26 1.71Z"
                />
            <defs>
                <linearGradient
                    id="CkBtcToken24Icon-b"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(3 3 -3 3 16 4)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#f8b13f" />
                    <stop offset="1" stop-color="#f15a25" />
                </linearGradient>
                <linearGradient
                    id="CkBtcToken24Icon-c"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(4 4 -4 4 4 14)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#532786" />
                    <stop offset="1" stop-color="#ed1e79" />
                </linearGradient>
            </defs>
        </svg>
    `),ch="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",cc="0 0 58 58",dc=`<image xlink:href="${ch}" id="icp-16__b" width="58" height="58" />`,dh=new y("CryptoIcp16Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${cc}"
        >
            ${dc}
        </svg>
    `),uh=new y("CryptoIcp24Icon",x`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${cc}"
        >
            ${dc}
        </svg>
        </svg>
    `),hh=new y("EntrepotLogo144Icon",x`
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
    `),uc=new y("BrandDiscord24Icon",x`
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
    `),fh=new y("BrandFacebookLogo24Icon",x`
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
            <g fill-rule="nonzero">
                <path
                    fill="#1877f2"
                    d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
                />
                <path
                    fill="#fff"
                    d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
                />
            </g>
        </svg>
    `),ph=new y("BrandGoogleLogo24Icon",x`
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
                fill="#4285f4"
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill="#34a853"
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill="#fbbc05"
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill="#ea4335"
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `),gh=new y("BrandIcScan24Icon",x`
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
    `),hc=new y("BrandInstagram24Icon",x`
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
    `),mh=new y("BrandInstagramFlat24Icon",x`
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
    `),fc=new y("BrandTelegram24Icon",x`
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
    `),pc=new y("BrandTiktok24Icon",x`
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
    `),vh=new y("BrandTiktokFlat24Icon",x`
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
    `),gc=new y("BrandTwitch24Icon",x`
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
    `),mc=new y("BrandTwitter24Icon",x`
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
    `),Rt={"core-16":[t2,r2,ir],"core-24":[n2,o2,gi,i2,Xl,mi,jo,u2,h2,f2,p2,g2,m2,v2,Ql,ec,w2,b2,Et,$2,y2,x2,k2,tc,rc,C2,S2,I2,M2,nc,A2,T2,E2,_2,P2,B2,L2,R2,N2,z2,D2,F2,j2,oc,H2,O2,q2,V2,Z2,W2,U2,Oo,ic,Y2,G2,X2,J2,K2,sr,Q2,eh,th,rh,nh,oh],"core-32":[ac],"core-48":[sc],"core-64":[lc,ih,ah],cryptocurrencies:[sh,lh,dh,uh],logos:[hh],"third-party-brands":[uc,fh,ph,gh,hc,mh,fc,pc,vh,gc,mc]},wh=e2({Discord:"",Instagram:"",Telegram:"",TikTok:"",Twitch:"",Twitter:"",website:""}),bh=wh.defaultValue,vc={Discord:uc,Instagram:hc,Telegram:fc,TikTok:pc,Twitch:gc,Twitter:mc,website:tc},Qa="toniq-",{defineElement:ae,defineElementNoInputs:$h}=Vs({assertInputs:e=>{if(!e.tagName.startsWith(Qa))throw new Error(`Tag name should start with '${Qa}' but got '${e.tagName}'`)}}),w=ae()({tagName:"toniq-icon",hostClasses:{"toniq-icon-fit-icon":!1},styles:({hostClasses:e})=>m`
        :host {
            display: block;
        }
        svg {
            /*
                svg elements are set to inline by default which gives it space under the image. So 
                we're changing it to block here.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["toniq-icon-fit-icon"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return h`
            ${e.icon?ld(e.icon.svgString):""}
        `}}),qo=m`8px`;var wr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(wr||{});const D=ae()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${$t};
        }

        :host(:hover) button {
            ${j(I.accentPrimaryHover)};
        }

        :host(:active) button {
            ${j(I.accentPrimaryActive)};
        }

        button {
            ${at};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${qo};
            ${j(I.accentPrimary)};
            padding: 10px;
            transition: color ${K.interaction},
                background-color ${K.interaction},
                border-color ${K.interaction};
        }

        ${it({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${j(I.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${j(I.pagePrimary)};
            border-color: ${I.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Ho};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${I.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${I.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${w}
                      class="icon-template"
                      ${v(w,{icon:e.icon})}
                  ></${w}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function yh(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=$i(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(u=>i==="+"?u>l:u<l).sort((u,f)=>i==="+"?u-f:f-u);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function xh(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(f,g){let p=parseFloat(f);return/%/.test(f)&&(p/=100,p*=g),p}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),u=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:u}}}function kh(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function wc(e){let t=[];for(const r of e.children)t=t.concat(r,wc(r));return t}function Ch(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=wc(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const u=d.getBoundingClientRect();if(t&&!kh(r,u,a))continue;const f=window.getComputedStyle(d);let[g,p]=f.getPropertyValue("scroll-snap-align").split(" ");typeof p>"u"&&(p=g);const b=i==="x"?p:g,$=u[s]-r[s]+e[c];switch(b){case"none":break;case"start":n[i].start.push($);break;case"center":n[i].center.push($+u[l]/2);break;case"end":n[i].end.push($+u[l]);break}}}return n}function $i(e){const t=e.getBoundingClientRect(),r=xh(e),n=Ch(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:es([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:es([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function es(e){return Array.from(new Set(e))}const Xr="templates-container",Sh=4e3,q=ae()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":!1},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},templatesWrapperHeight:0,scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        .${B(Xr)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }

        .${B(Xr)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;

            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        .template-wrapper {
            scroll-snap-align: center;
            /*
                Sometimes the edges clip just by a couple pixels, so account for that with the calc.
            */
            max-width: calc(100% - 2px);
        }

        .arrow {
            --background-degrees: 90deg;
            position: sticky;
            width: 100px;
            max-width: 20%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 200;
            background: linear-gradient(
                var(--background-degrees),
                white 0%,
                rgba(255, 255, 255, 0.6) 30%,
                rgba(255, 255, 255, 0) 100%
            );
            will-change: visibility;
        }

        ${t["toniq-carousel-banner-style"].selector} .arrow {
            background: none;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow ${w} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${j(I.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{no({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Sh)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=ts(t.scrollSnapPositions,0),i=ts(t.scrollSnapPositions,-1);return h`
            <div
                ${Co(()=>{r({scrollSnapPositions:$i(Vo(n)).x})})}
                class=${Xr}
                ${C("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${w}
                        class=${Pe({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${v(w,{icon:gi})}
                        ${C("click",()=>{no({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${w}>
                </div>
                ${e.templates.map(a=>h`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${w}
                        class=${Pe({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${v(w,{icon:mi})}
                        ${C("click",()=>{no({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${w}>
                </div>
            </div>
        `}});function ts(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function Vo(e){const t=e.shadowRoot.querySelector(`.${Xr}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function no({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=Vo(e),i=o.clientWidth,a=$i(Vo(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const u=Ih(e,t),f=rs(o.scrollLeft,a,!1),g=t==="right"?1:-1,p=(o.clientWidth-u*3)*g,b=rs((f||0)+p,a,!0);t==="right"&&b>f?o.scrollTo({behavior:"smooth",left:b}):t==="left"&&b<f?o.scrollTo({behavior:"smooth",left:b}):yh(o,t)}}function Ih(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function rs(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const N=ae()({tagName:"toniq-checkbox",events:{checkedChange:te()},hostClasses:{},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Te("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Te("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Te("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Te("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Te("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>m`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition: color ${K.interaction},
                background-color ${K.interaction},
                opacity ${K.interaction};
            border-radius: 8px;
        }

        button {
            ${at};
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
            ${$t};
            transition: inherit;
            text-align: start;
            color: ${e["toniq-checkbox-unchecked-label-color"].value};
        }

        .checkbox.checked {
            background-color: ${e["toniq-checkbox-checked-checkbox-color"].value};
            color: ${e["toniq-checkbox-checked-check-color"].value};
        }

        .label.checked {
            color: ${e["toniq-checkbox-checked-label-color"].value};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${e["toniq-checkbox-unchecked-checkbox-color"].value};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
        }

        ${it({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=h`
            <span class="checkbox ${e.checked?"checked":""}">
                <${w}
                    class="check-mark ${Pe({hidden:!e.checked})}"
                    ${v(w,{icon:Ql})}
                ></${w}>
            </span>
        `,o=h`
            <slot
                class=${Pe({label:!0,checked:e.checked})}
            >
                <span
                    class=${Pe({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return h`
            <button
                class="wrapper ${e.checked?"checked":""}"
                ${C("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}}),Q=ae()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":!1},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${W.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${j(I.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${j(I.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${w}
                      ${v(w,{icon:e.icon})}
                  ></${w}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}}),Mh="data-test-id",_t=Oe(class extends nt{constructor(e){super(e),this.element=Ah(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(Mh,e),Ie}});function Ah(e,t,r){Th(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function Th(e,t){if(e.type!==yr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}const F=ae()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:te()},styles:m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${W.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${at}
            border-radius: 8px;
            outline: none;
        }

        ${it({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${K.interaction} linear transform;
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
            ${$t};
            ${j(I.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 8px;
            ${j(I.pagePrimary)}
            ${bi.popupShadow};
        }

        .selected-label-prefix {
            ${W.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${$t};
        }

        .select-options .option.selected {
            ${j(I.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${I.accentTertiary.backgroundColor};
        }

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){const i=n.selected?n.selected:n.options[0];function a(){o({dropdownOpen:!r.dropdownOpen})}function s(d){o({dropdownOpen:!1}),e(new t.selectChange(d))}const l=n.icon?h`
                  <${w}
                      ${_t("rendered-input-icon")}
                      ${v(w,{icon:n.icon})}
                  ></${w}>
              `:"",c=n.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                class="dropdown ${r.dropdownOpen?"open":""}"
                @click=${()=>a()}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${l}
                    <span class="select-selected">${c} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${w}
                            class="trigger-icon"
                            ${v(w,{icon:ec})}
                        ></${w}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(d=>h`
                                <span
                                    class="option ${d.value===(i==null?void 0:i.value)?"selected":""}"
                                    @click=${u=>{u.preventDefault(),u.stopPropagation(),s(d)}}
                                    role="option"
                                >
                                    ${d.label}
                                </span>
                            `)}
                </div>
            </button>
        `}}),fe=ae()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles},events:{routeChangeTriggered:te()},styles:({hostClasses:e})=>m`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:hover a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:hover {
            color: ${I.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${I.pageInteractionActive.foregroundColor};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){e.treatAsRouteChange&&il(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?h`
                <a
                    href=${e.url}
                    ${C("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:h`
                <a href=${e.url} ${C("click",n)}><slot></slot></a>
            `}}),Zo=360,bc=8;function $c(e){return(e-bc)/2}const Bt=Vt({"main-image-size":Zo,"secondary-image-size":$c(Zo)}),Me=ae()({tagName:"toniq-featured-flip-card-footer",styles:m`
        :host {
            display: inline-flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            align-items: center;
            flex-shrink: 0;
            max-height: 48px;
            overflow: hidden;
            justify-content: space-between;
            gap: 16px;
        }

        .social-urls {
            display: flex;
            flex-wrap: wrap;
            flex-basis: 24px;
            align-items: center;
            max-height: 24px;
            overflow: hidden;
            gap: 16px;
            flex-grow: 1;
        }

        .buttons {
            display: flex;
            gap: 8px;
            flex-grow: 1;
            justify-content: flex-end;
        }

        ${D}, ${fe} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Bt["secondary-image-size"].value} * 2);
        }

        ${fe} ${D} {
            width: 100%;
        }

        ${fe} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Bt["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:te(),footerFlipCardButtonClick:te()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?re(n).filter(i=>!!n[i]).map(i=>{const a=n[i],s=vc[i];return h`
                          <${fe}
                              ${v(fe,{newTab:!0,url:a})}
                          >
                              <${w} ${v(w,{icon:s})}></${w}>
                          </${fe}>
                      `}):"";return h``,h`
            <div class="buttons">
                ${e.viewMoreButtonUrl?h`
                          <${fe}
                              ${v(fe,{newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${C(fe.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${D}
                                  ${v(D,{text:e.viewMoreButtonText,buttonStyle:wr.Outline})}
                              ></${D}>
                          </${fe}>
                      `:h`
                          <${D}
                              ${v(D,{text:e.viewMoreButtonText,buttonStyle:wr.Outline})}
                              ${C("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${D}>
                      `}
                ${e.flipCardButtonText?h`
                          <${D}
                              class="more-info-button"
                              ${v(D,{text:e.flipCardButtonText})}
                              ${C("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${D}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function Eh(e,t){return e<t}function _h(e,t){return e>t}const ns={width:250,height:250};function Ph({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?_h:Eh)(t.width/t.height,e.width/e.height)?"width":"height"}function oo({box:e,constraint:t,constraintType:r}){const n=Ph({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function yc({box:e,ratio:t}){return ne(e,(r,n)=>n*t)}function Wo({box:e,min:t,max:r}){return ne(e,(n,o)=>C0({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function xc({min:e,max:t,box:r}){const n=kc({min:e,max:t,box:r}),o=yc({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||ns.height),width:Math.floor(o.width||(e==null?void 0:e.width)||ns.width)}}function kc({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?oo({box:r,constraint:e,constraintType:"min"}):1,o=t?oo({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=yc({ratio:i,box:r});return(e?oo({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function pt(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=Bh(a,n[s]);return`${a}${l}`});return Ht(i.join(""))}function Bh(e,t){return t._$litType$!=null||t._$litDirective$!=null?pt(t):Array.isArray(t)?t.map(n=>pt(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Lh(e){const t=Rh(e);return Je(t,"object")||Je(t,"array")}function Rh(e){const t=Oi({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=Nh(e);return Oi({jsonString:r,errorHandler:()=>{}})}function Nh(e){return Ht(e).replace(/,\s*([}\]])/,"$1")}const yi="vir-resizable-image";function zh(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var jt=zh();function Dh(){try{if(!jt||!jt.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function xi(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const A=Promise;function V(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function Pt(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function qe(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function ki(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Uo="local-forage-detect-blob-support";let Vr;const Se={},Fh=Object.prototype.toString,Ar="readonly",In="readwrite";function jh(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function Hh(e){return new A(function(t){var r=e.transaction(Uo,In),n=xi([""]);r.objectStore(Uo).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function Oh(e){return typeof Vr=="boolean"?A.resolve(Vr):Hh(e).then(function(t){return Vr=t,Vr})}function gn(e){var t=Se[e.name],r={};r.promise=new A(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function Yo(e){var t=Se[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Go(e,t){var r=Se[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function Cc(e,t){return new A(function(r,n){if(Se[e.name]=Se[e.name]||Ac(),e.db)if(t)gn(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=jt.open.apply(jt,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Uo)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),Yo(e)}})}function Ci(e){return Cc(e,!1)}function Si(e){return Cc(e,!0)}function Sc(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function qh(e){return new A(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function Ic(e){var t=jh(atob(e.data));return xi([t],{type:e.type})}function Mc(e){return e&&e.__local_forage_encoded_blob}function Vh(e){var t=this,r=t._initReady().then(function(){var n=Se[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return Pt(r,e,e),r}function Zh(e){gn(e);for(var t=Se[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,Ci(e).then(o=>(e.db=o,Sc(e)?Si(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw Go(e,o),o})}function Ve(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return A.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Si(e)}).then(()=>Zh(e).then(function(){Ve(e,t,r,n-1)})).catch(r);r(i)}}function Ac(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Wh(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=Se[r.name];o||(o=Ac(),Se[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Vh);var i=[];function a(){return A.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return A.all(i).then(function(){return r.db=o.db,Ci(r)}).then(function(d){return r.db=d,Sc(r,t._defaultConfig.version)?Si(r):d}).then(function(d){r.db=o.db=d,t._dbInfo=r;for(var u=0;u<c.length;u++){var f=c[u];f!==t&&(f._dbInfo.db=r.db,f._dbInfo.version=r.version)}})}function Uh(e,t){var r=this;e=qe(e);var n=new A(function(o,i){r.ready().then(function(){Ve(r._dbInfo,Ar,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),Mc(d)&&(d=Ic(d)),o(d)},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return V(n,t),n}function Yh(e,t){var r=this,n=new A(function(o,i){r.ready().then(function(){Ve(r._dbInfo,Ar,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),d=1;c.onsuccess=function(){var u=c.result;if(u){var f=u.value;Mc(f)&&(f=Ic(f));var g=e(f,u.key,d++);g!==void 0?o(g):u.continue()}else o()},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return V(n,t),n}function Gh(e,t,r){var n=this;e=qe(e);var o=new A(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,Fh.call(t)==="[object Blob]"?Oh(s.db).then(function(l){return l?t:qh(t)}):t}).then(function(l){Ve(n._dbInfo,In,function(c,d){if(c)return a(c);try{var u=d.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var f=u.put(l,e);d.oncomplete=function(){l===void 0&&(l=null),i(l)},d.onabort=d.onerror=function(){var g=f.error?f.error:f.transaction.error;a(g)}}catch(g){a(g)}})}).catch(a)});return V(o,r),o}function Xh(e,t){var r=this;e=qe(e);var n=new A(function(o,i){r.ready().then(function(){Ve(r._dbInfo,In,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;i(d)}}catch(d){i(d)}})}).catch(i)});return V(n,t),n}function Jh(e){var t=this,r=new A(function(n,o){t.ready().then(function(){Ve(t._dbInfo,In,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return V(r,e),r}function Kh(e){var t=this,r=new A(function(n,o){t.ready().then(function(){Ve(t._dbInfo,Ar,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return V(r,e),r}function Qh(e,t){var r=this,n=new A(function(o,i){if(e<0){o(null);return}r.ready().then(function(){Ve(r._dbInfo,Ar,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,d=l.openKeyCursor();d.onsuccess=function(){var u=d.result;if(!u){o(null);return}e===0||c?o(u.key):(c=!0,u.advance(e))},d.onerror=function(){i(d.error)}}catch(u){i(u)}})}).catch(i)});return V(n,t),n}function ef(e){var t=this,r=new A(function(n,o){t.ready().then(function(){Ve(t._dbInfo,Ar,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var d=l.result;if(!d){n(c);return}c.push(d.key),d.continue()},l.onerror=function(){o(l.error)}}catch(d){o(d)}})}).catch(o)});return V(r,e),r}function tf(e,t){t=ki.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=A.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?A.resolve(n._dbInfo.db):Ci(e).then(s=>{const l=Se[e.name],c=l.forages;l.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;gn(e);const c=Se[e.name],d=c.forages;s.close();for(let f=0;f<d.length;f++){const g=d[f];g._dbInfo.db=null,g._dbInfo.version=l}return new A((f,g)=>{const p=jt.open(e.name,l);p.onerror=b=>{p.result.close(),g(b)},p.onupgradeneeded=()=>{var b=p.result;b.deleteObjectStore(e.storeName)},p.onsuccess=()=>{const b=p.result;b.close(),f(b)}}).then(f=>{c.db=f;for(let g=0;g<d.length;g++){const p=d[g];p._dbInfo.db=f,Yo(p._dbInfo)}}).catch(f=>{throw(Go(e,f)||A.resolve()).catch(()=>{}),f})}):o=a.then(s=>{gn(e);const l=Se[e.name],c=l.forages;s.close();for(var d=0;d<c.length;d++){const f=c[d];f._dbInfo.db=null}return new A((f,g)=>{var p=jt.deleteDatabase(e.name);p.onerror=()=>{const b=p.result;b&&b.close(),g(p.error)},p.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},p.onsuccess=()=>{const b=p.result;b&&b.close(),f(b)}}).then(f=>{l.db=f;for(var g=0;g<c.length;g++){const p=c[g];Yo(p._dbInfo)}}).catch(f=>{throw(Go(e,f)||A.resolve()).catch(()=>{}),f})})}return V(o,t),o}var rf={_driver:"asyncStorage",_initStorage:Wh,_support:Dh(),iterate:Yh,getItem:Uh,setItem:Gh,removeItem:Xh,clear:Jh,length:Kh,key:Qh,keys:ef,dropInstance:tf};function nf(){return typeof openDatabase=="function"}var Ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",of="~~local_forage_type~",os=/^~~local_forage_type~([^~]+)~/,mn="__lfsc__:",Xo=mn.length,Ii="arbf",Jo="blob",Tc="si08",Ec="ui08",_c="uic8",Pc="si16",Bc="si32",Lc="ur16",Rc="ui32",Nc="fl32",zc="fl64",is=Xo+Ii.length,as=Object.prototype.toString;function Dc(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),d=new Uint8Array(c);for(n=0;n<r;n+=4)i=Ye.indexOf(e[n]),a=Ye.indexOf(e[n+1]),s=Ye.indexOf(e[n+2]),l=Ye.indexOf(e[n+3]),d[o++]=i<<2|a>>4,d[o++]=(a&15)<<4|s>>2,d[o++]=(s&3)<<6|l&63;return c}function Ko(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Ye[t[n]>>2],r+=Ye[(t[n]&3)<<4|t[n+1]>>4],r+=Ye[(t[n+1]&15)<<2|t[n+2]>>6],r+=Ye[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function af(e,t){var r="";if(e&&(r=as.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&as.call(e.buffer)==="[object ArrayBuffer]")){var n,o=mn;e instanceof ArrayBuffer?(n=e,o+=Ii):(n=e.buffer,r==="[object Int8Array]"?o+=Tc:r==="[object Uint8Array]"?o+=Ec:r==="[object Uint8ClampedArray]"?o+=_c:r==="[object Int16Array]"?o+=Pc:r==="[object Uint16Array]"?o+=Lc:r==="[object Int32Array]"?o+=Bc:r==="[object Uint32Array]"?o+=Rc:r==="[object Float32Array]"?o+=Nc:r==="[object Float64Array]"?o+=zc:t(new Error("Failed to get type for BinaryArray"))),t(o+Ko(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=of+e.type+"~"+Ko(this.result);t(mn+Jo+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function sf(e){if(e.substring(0,Xo)!==mn)return JSON.parse(e);var t=e.substring(is),r=e.substring(Xo,is),n;if(r===Jo&&os.test(t)){var o=t.match(os);n=o[1],t=t.substring(o[0].length)}var i=Dc(t);switch(r){case Ii:return i;case Jo:return xi([i],{type:n});case Tc:return new Int8Array(i);case Ec:return new Uint8Array(i);case _c:return new Uint8ClampedArray(i);case Pc:return new Int16Array(i);case Lc:return new Uint16Array(i);case Bc:return new Int32Array(i);case Rc:return new Uint32Array(i);case Nc:return new Float32Array(i);case zc:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var Mi={serialize:af,deserialize:sf,stringToBuffer:Dc,bufferToString:Ko};function Fc(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function lf(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new A(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){Fc(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=Mi,o}function st(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):Fc(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function cf(e,t){var r=this;e=qe(e);var n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){st(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=a.serializer.deserialize(d)),o(d)},function(l,c){i(c)})})}).catch(i)});return V(n,t),n}function df(e,t){var r=this,n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){st(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var d=c.rows,u=d.length,f=0;f<u;f++){var g=d.item(f),p=g.value;if(p&&(p=a.serializer.deserialize(p)),p=e(p,g.key,f+1),p!==void 0){o(p);return}}o()},function(l,c){i(c)})})}).catch(i)});return V(n,t),n}function jc(e,t,r,n){var o=this;e=qe(e);var i=new A(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(d,u){u?s(u):c.db.transaction(function(f){st(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,d],function(){a(l)},function(g,p){s(p)})},function(f){if(f.code===f.QUOTA_ERR){if(n>0){a(jc.apply(o,[e,l,r,n-1]));return}s(f)}})})}).catch(s)});return V(i,r),i}function uf(e,t,r){return jc.apply(this,[e,t,r,1])}function hf(e,t){var r=this;e=qe(e);var n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){st(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return V(n,t),n}function ff(e){var t=this,r=new A(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){st(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return V(r,e),r}function pf(e){var t=this,r=new A(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){st(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return V(r,e),r}function gf(e,t){var r=this,n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){st(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var d=c.rows.length?c.rows.item(0).key:null;o(d)},function(l,c){i(c)})})}).catch(i)});return V(n,t),n}function mf(e){var t=this,r=new A(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){st(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],d=0;d<l.rows.length;d++)c.push(l.rows.item(d).key);n(c)},function(s,l){o(l)})})}).catch(o)});return V(r,e),r}function vf(e){return new A(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function wf(e,t){t=ki.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new A(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(vf(a))}).then(function(i){return new A(function(a,s){i.db.transaction(function(l){function c(g){return new A(function(p,b){l.executeSql(`DROP TABLE IF EXISTS ${g}`,[],function(){p()},function($,S){b(S)})})}for(var d=[],u=0,f=i.storeNames.length;u<f;u++)d.push(c(i.storeNames[u]));A.all(d).then(function(){a()}).catch(function(g){s(g)})},function(l){s(l)})})}):o=A.reject("Invalid arguments"),V(o,t),o}var bf={_driver:"webSQLStorage",_initStorage:lf,_support:nf(),iterate:df,getItem:cf,setItem:uf,removeItem:hf,clear:ff,length:pf,key:gf,keys:mf,dropInstance:wf};function $f(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Hc(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function yf(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function xf(){return!yf()||localStorage.length>0}function kf(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=Hc(e,t._defaultConfig),xf()?(t._dbInfo=r,r.serializer=Mi,A.resolve()):A.reject()}function Cf(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return V(r,e),r}function Sf(e,t){var r=this;e=qe(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return V(n,t),n}function If(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(i)===0){var u=localStorage.getItem(d);if(u&&(u=o.serializer.deserialize(u)),u=e(u,d.substring(a),l++),u!==void 0)return u}}});return V(n,t),n}function Mf(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return V(n,t),n}function Af(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return V(r,e),r}function Tf(e){var t=this,r=t.keys().then(function(n){return n.length});return V(r,e),r}function Ef(e,t){var r=this;e=qe(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return V(n,t),n}function _f(e,t,r){var n=this;e=qe(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new A(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,d){if(d)s(d);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(u){(u.name==="QuotaExceededError"||u.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(u),s(u)}})})});return V(o,r),o}function Pf(e,t){if(t=ki.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new A(function(i){e.storeName?i(Hc(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=A.reject("Invalid arguments"),V(o,t),o}var Bf={_driver:"localStorageWrapper",_initStorage:kf,_support:$f(),iterate:If,getItem:Sf,setItem:_f,removeItem:Ef,clear:Cf,length:Tf,key:Mf,keys:Af,dropInstance:Pf};const Lf=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Rf=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Lf(e[n],t))return!0;n++}return!1},Oc=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Xt={},ss={},Nt={INDEXEDDB:rf,WEBSQL:bf,LOCALSTORAGE:Bf},Nf=[Nt.INDEXEDDB._driver,Nt.WEBSQL._driver,Nt.LOCALSTORAGE._driver],Jr=["dropInstance"],io=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Jr),zf={description:"",driver:Nf.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Df(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function ao(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(Oc(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class Ai{constructor(t){for(let r in Nt)if(Nt.hasOwnProperty(r)){const n=Nt[r],o=n._driver;this[r]=o,Xt[o]||this.defineDriver(n)}this._defaultConfig=ao({},zf),this._config=ao({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new A(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=io.concat("_initStorage");for(let f=0,g=c.length;f<g;f++){const p=c[f];if((!Rf(Jr,p)||t[p])&&typeof t[p]!="function"){a(l);return}}(function(){const f=function(g){return function(){const p=new Error(`Method ${g} is not implemented by the current driver`),b=A.reject(p);return V(b,arguments[arguments.length-1]),b}};for(let g=0,p=Jr.length;g<p;g++){const b=Jr[g];t[b]||(t[b]=f(b))}})();const u=function(f){Xt[s]&&console.info(`Redefining LocalForage driver: ${s}`),Xt[s]=t,ss[s]=f,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(u,a):u(!!t._support):u(!0)}catch(s){a(s)}});return Pt(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Xt[t]?A.resolve(Xt[t]):A.reject(new Error("Driver not found."));return Pt(o,r,n),o}getSerializer(t){const r=A.resolve(Mi);return Pt(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return Pt(n,t,t),n}setDriver(t,r,n){const o=this;Oc(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(d){return o._extend(d),a(),o._ready=o._initStorage(o._config),o._ready}function l(d){return function(){let u=0;function f(){for(;u<d.length;){let p=d[u];return u++,o._dbInfo=null,o._ready=null,o.getDriver(p).then(s).catch(f)}a();const g=new Error("No available storage method found.");return o._driverSet=A.reject(g),o._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>A.resolve()):A.resolve();return this._driverSet=c.then(()=>{const d=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(d).then(u=>{o._driver=u._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const d=new Error("No available storage method found.");return o._driverSet=A.reject(d),o._driverSet}),Pt(this._driverSet,r,n),this._driverSet}supports(t){return!!ss[t]}_extend(t){ao(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=io.length;t<r;t++)Df(this,io[t])}createInstance(t){return new Ai(t)}}const Ff=new Ai,jf=Ff;async function qc(){return await caches.open(yi)}async function Hf(e){return await(await qc()).match(e)}const ls=jf.createInstance({name:yi});async function Of(e,t){await(await qc()).put(e,t)}const so=new Map;async function qf(e,t){var n;if(!so.has(e)){const o=Dt();so.set(e,o.promise);try{const i=new Request(e),a=t?await Hf(i):void 0,s=a??await fetch(i),l=t?await ls.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{ls.setItem(e,c)}catch{}const d={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{Of(i,s)}catch{}o.resolve(d)}catch(i){throw o.reject(i),i}}const r=await so.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var _;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(_||(_={}));const Vf=[_.Text,_.Json];function cs(e){return Vf.includes(e)}async function Zf(e,t){return e.includes("video")?_.Video:e.includes("svg")||t.includes("<svg")?_.Svg:e.includes("html")||t.includes("<html")?_.Html:Lh(t)?_.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?_.Text:e.includes("audio")?_.Audio:e.includes("pdf")?_.Pdf:_.Image}function Wf({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===_.Image?pt(h`
            <img src=${r} />
        `):e===_.Video?pt(h`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===_.Text||e===_.Json?pt(h`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===_.Audio?pt(h`
                <audio controls src=${r}></audio>
            `):t}function Uf(e,t){if(t===_.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===_.Html)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function ds({imageUrl:e,blockAutoPlay:t,textTransformer:r=o=>o,allowPersistentCache:n}){const o=await qf(e,n);if(!o.ok)throw new Error(`Failed to load '${e}'`);const i=await Zf(o.contentType,o.text),a=r(Uf(o.text,i));return{templateString:Wf({imageText:a,imageType:i,imageUrl:o.blobUrl,blockAutoPlay:t}),imageUrl:o.blobUrl,imageType:i}}class Qo extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let Yf=!1;function Gf(){return Yf}var yt;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(yt||(yt={}));const ht=Symbol("any-origin");function Vc(e,t){try{return Xf(e,t),!0}catch{return!1}}function Xf(e,t){if(e===ht)return;if(!e.filter(n=>t.origin===n).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const Jf=Symbol("dangerDisableSecurityWarningsSymbol"),Zc=globalThis.crypto;function Kf({min:e,max:t}){const{min:r,max:n}=M0({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Zc.getRandomValues(s),l=s.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%o}function Wc(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Zc.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Zr(e){return String(e).endsWith("px")?String(e):`${e}px`}function Qf(e,t,r){return r.type===e&&r.direction===t}function ep(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function tp({message:e,verifyChildData:t,iframeElement:r},n,o,i){if(!r)throw new Error("No iframe element was provided.");let a=0,s=!1,l,c,d,u=!1;const f={...e,direction:yt.FromParent,messageId:Wc(32)},g=e.type,p=n===ht?["*"]:n;function b(S){try{if(!Vc(n,S))return;const M=S.data;if(M.type==="error")throw new Error(`Child threw an error: ${M.data}`);if(Gf(),M&&u&&Qf(g,yt.FromChild,M)&&M.messageId===f.messageId){let L=!1;try{L=t?t(M.data):!0}catch{}if(!L)return;s=!0,c=S,l=M}}catch(M){d=mt(M)}}globalThis.addEventListener("message",b);const $=Date.now();for(;!s&&Date.now()-$<o&&!d;){if(!r.isConnected)throw new Qo;const S=r.contentWindow;S&&(u=!0,p.forEach(M=>{try{S.postMessage(f,{targetOrigin:M})}catch{}})),await Qr(i||ep(a)),a++}if(globalThis.removeEventListener("message",b),d)throw d;if(!s)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!c)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:c}}function Uc({allowedOrigins:e,timeoutMs:t=1e4,...r}){if(e!==ht&&e.includes("*")&&(e=ht),e===ht&&!r[Jf]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==ht&&!e.length)throw new Error(`No allowed origins were provide to ${Uc.name}. At least one must be provided.`);const n=e===ht?["*"]:e;return{async sendMessageToChild(o){if(o.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await tp(o,e,o.timeoutMs||t,o.intervalMs)},listenForParentMessages(o){globalThis.addEventListener("message",async i=>{if(!Vc(e,i))return;const a=i.data,s=await o({...a,originalEvent:i}),l={type:a.type,direction:yt.FromChild,data:s,messageId:a.messageId};n.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}var me;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(me||(me={}));var ie;(function(e){e.Ready="ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined"})(ie||(ie={}));const je=Uc({allowedOrigins:[window.location.origin]});async function rp(e,t){const r=Dt();e.onload=()=>{r.resolve()};try{await je.sendMessageToChild({message:{type:ie.Ready},iframeElement:e,timeoutMs:t})}catch{await r.promise,await je.sendMessageToChild({message:{type:ie.Ready},iframeElement:e,timeoutMs:t})}}async function np({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await rp(n,s),i&&await je.sendMessageToChild({message:{type:ie.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await je.sendMessageToChild({message:{type:ie.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(d){return!isNaN(d.width)&&!isNaN(d.height)&&!!d.width&&!!d.height}})).data;return await Yc({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function Yc({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const d={min:e,max:t,box:a??r},u=cs(i.imageType)?Wo(d):xc(d);c.style.width=Zr(Math.floor(u.width)),c.style.height=Zr(Math.floor(u.height));const f=Wo({min:e,max:t,box:u});u.height<f.height?n.classList.add(me.VerticallyCenter):n.classList.remove(me.VerticallyCenter),n.style.width=Zr(f.width),n.style.height=Zr(f.height);const g=kc({min:e,max:t,box:a??r});if(s){if(g>3?await je.sendMessageToChild({message:{type:ie.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await je.sendMessageToChild({message:{type:ie.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await je.sendMessageToChild({message:{type:ie.SizeDetermined,data:u},iframeElement:o,timeoutMs:l}),i.imageType===_.Html){const p=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},b={width:g*p.width,height:g*p.height};await je.sendMessageToChild({message:{type:ie.SendScale,data:b},iframeElement:o,timeoutMs:l})}else if(cs(i.imageType)){const p=a??r;if(p.height<u.height){const b=u.width/p.width,$=u.height/p.height,S=Math.min(b,$);await je.sendMessageToChild({message:{type:ie.SendScale,data:{height:S,width:S}},iframeElement:o,timeoutMs:l})}}}}const Wr={x:16,y:8};var ws,bs;function op(e,t,r){const n=Math.random(),o=h(ws||(ws=_n([`
        <script>
            function doNothing() {}
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(
                    /s*(?:\\-?[\\d\\.]+)\\s+(?:\\-?[\\d\\.]+)\\s+(\\-?[\\d\\.]+)\\s+(\\-?[\\d\\.]+)\\s*/,
                );
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;
                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSizeFromTopLevelElements(element, recurse) {
                if (!element) {
                    return undefined;
                }

                let size;
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            'Got invalid html size for ' +
                                imageData.imageUrl +
                                JSON.stringify(size),
                        );
                    }
                    return size;
                } else if (recurse) {
                    return extractHtmlSizeFromTopLevelElements(element.nextElementSibling, true);
                } else {
                    return undefined;
                }
            }

            function extractHtmlSizeFromAnything() {
                const allElements = Array.from(document.querySelectorAll('*'));
                let biggestSize = {
                    height: 0,
                    width: 0,
                };
                allElements.forEach((child) => {
                    const childSize = extractHtmlSizeFromTopLevelElements(child);
                    if (childSize) {
                        if (childSize.width > biggestSize.width) {
                            biggestSize.width = childSize.width;
                        }
                        if (childSize.height > biggestSize.height) {
                            biggestSize.height = childSize.height;
                        }
                    }
                });

                return {
                    width: biggestSize.width || 250,
                    height: biggestSize.height || 250,
                };
            }

            function getHtmlSize(element = document.body) {
                const query = '`,`' || 'body > *';
                const extractSizeFromHere = document.querySelector(query);
                const size =
                    extractHtmlSizeFromTopLevelElements(extractSizeFromHere, true) ??
                    extractHtmlSizeFromAnything();

                return size;
            }

            function getSvgSize() {
                if (forcedFinalImageSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElementWithSize = svgElements.find(
                    (svgElement) => !!extractSvgSize(svgElement),
                );

                if (!svgElementWithSize) {
                    return {width: 1024, height: 1024};
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElementWithSize);

                if (!svgElementWithSize.getAttribute('viewBox')) {
                    svgElementWithSize.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElementWithSize.removeAttribute('width');
                svgElementWithSize.removeAttribute('height');
                svgElementWithSize.style.removeProperty('width');
                svgElementWithSize.style.removeProperty('height');

                return {width, height};
            }

            function getVideoSize() {
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            function getTextSize() {
                const textWrapper = document.querySelector('.text-wrapper');

                const size = {
                    width: textWrapper.clientWidth,
                    height: textWrapper.clientHeight,
                };

                return size;
            }

            function getAudioSize() {
                const audioElement = document.querySelector('audio');

                const size = {
                    width: audioElement.clientWidth,
                    height: audioElement.clientHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                `,`: getSvgSize,
                `,`: getHtmlSize,
                `,`: getImageSize,
                `,`: getVideoSize,
                `,`: getTextSize,
                `,`: getTextSize,
                `,`: getAudioSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            function calculateOneLineHeight() {
                const span = document.createElement('span');
                span.innerHTML = 'hi';
                span.style.width = '200px';
                span.style.position = 'absolute';
                span.style.visibility = 'hidden';
                span.style.top = '0';
                span.style.left = '0';
                span.style.pointerEvents = 'none';
                document.body.appendChild(span);
                const height = span.clientHeight;
                span.remove();

                return height;
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '`,`') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '`,`',
                        data,
                        messageId: message.messageId,
                    };
                    globalThis.parent.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '`,`': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '`,`': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('html')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        if (message.data === 'pixelated') {
                            document.body.classList.add('pixelated');
                        } else {
                            document.body.classList.remove('pixelated');
                        }
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        try {
                            forcedFinalImageSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        if (
                            imageType === '`,`' ||
                            imageType === '`,`'
                        ) {
                            const size = getSize();

                            if (size.height > message.data.height) {
                                const oneLine = calculateOneLineHeight();
                                const totalLines = Math.floor(
                                    (message.data.height - 2 * `,`) / oneLine,
                                );
                                const totalHeight = oneLine * totalLines;
                                const textElement = document.querySelector('.text');
                                textElement.style.height = totalHeight + 'px';
                                textElement.style.setProperty('-webkit-line-clamp', totalLines);
                            }

                            document.documentElement.style.setProperty(
                                'justify-content',
                                size.height < message.data.height ? 'center' : 'flex-start',
                            );
                        }
                        sendMessageToParent();
                        return;
                    }
                    default: {
                        sendMessageToParent();
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            if (imageType !== '`,`') {
                try {
                    muteEverything();
                    const mutationObserver = new MutationObserver(muteEverything);
                    mutationObserver.observe(document, {childList: true, subtree: true});
                } catch (error) {
                    console.error(error);
                }
            }
        <\/script>
    `],[`
        <script>
            function doNothing() {}
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(
                    /s*(?:\\\\-?[\\\\d\\\\.]+)\\\\s+(?:\\\\-?[\\\\d\\\\.]+)\\\\s+(\\\\-?[\\\\d\\\\.]+)\\\\s+(\\\\-?[\\\\d\\\\.]+)\\\\s*/,
                );
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;
                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSizeFromTopLevelElements(element, recurse) {
                if (!element) {
                    return undefined;
                }

                let size;
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            'Got invalid html size for ' +
                                imageData.imageUrl +
                                JSON.stringify(size),
                        );
                    }
                    return size;
                } else if (recurse) {
                    return extractHtmlSizeFromTopLevelElements(element.nextElementSibling, true);
                } else {
                    return undefined;
                }
            }

            function extractHtmlSizeFromAnything() {
                const allElements = Array.from(document.querySelectorAll('*'));
                let biggestSize = {
                    height: 0,
                    width: 0,
                };
                allElements.forEach((child) => {
                    const childSize = extractHtmlSizeFromTopLevelElements(child);
                    if (childSize) {
                        if (childSize.width > biggestSize.width) {
                            biggestSize.width = childSize.width;
                        }
                        if (childSize.height > biggestSize.height) {
                            biggestSize.height = childSize.height;
                        }
                    }
                });

                return {
                    width: biggestSize.width || 250,
                    height: biggestSize.height || 250,
                };
            }

            function getHtmlSize(element = document.body) {
                const query = '`,`' || 'body > *';
                const extractSizeFromHere = document.querySelector(query);
                const size =
                    extractHtmlSizeFromTopLevelElements(extractSizeFromHere, true) ??
                    extractHtmlSizeFromAnything();

                return size;
            }

            function getSvgSize() {
                if (forcedFinalImageSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElementWithSize = svgElements.find(
                    (svgElement) => !!extractSvgSize(svgElement),
                );

                if (!svgElementWithSize) {
                    return {width: 1024, height: 1024};
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElementWithSize);

                if (!svgElementWithSize.getAttribute('viewBox')) {
                    svgElementWithSize.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElementWithSize.removeAttribute('width');
                svgElementWithSize.removeAttribute('height');
                svgElementWithSize.style.removeProperty('width');
                svgElementWithSize.style.removeProperty('height');

                return {width, height};
            }

            function getVideoSize() {
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            function getTextSize() {
                const textWrapper = document.querySelector('.text-wrapper');

                const size = {
                    width: textWrapper.clientWidth,
                    height: textWrapper.clientHeight,
                };

                return size;
            }

            function getAudioSize() {
                const audioElement = document.querySelector('audio');

                const size = {
                    width: audioElement.clientWidth,
                    height: audioElement.clientHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                `,`: getSvgSize,
                `,`: getHtmlSize,
                `,`: getImageSize,
                `,`: getVideoSize,
                `,`: getTextSize,
                `,`: getTextSize,
                `,`: getAudioSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            function calculateOneLineHeight() {
                const span = document.createElement('span');
                span.innerHTML = 'hi';
                span.style.width = '200px';
                span.style.position = 'absolute';
                span.style.visibility = 'hidden';
                span.style.top = '0';
                span.style.left = '0';
                span.style.pointerEvents = 'none';
                document.body.appendChild(span);
                const height = span.clientHeight;
                span.remove();

                return height;
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '`,`') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '`,`',
                        data,
                        messageId: message.messageId,
                    };
                    globalThis.parent.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '`,`': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '`,`': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('html')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        if (message.data === 'pixelated') {
                            document.body.classList.add('pixelated');
                        } else {
                            document.body.classList.remove('pixelated');
                        }
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        try {
                            forcedFinalImageSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        if (
                            imageType === '`,`' ||
                            imageType === '`,`'
                        ) {
                            const size = getSize();

                            if (size.height > message.data.height) {
                                const oneLine = calculateOneLineHeight();
                                const totalLines = Math.floor(
                                    (message.data.height - 2 * `,`) / oneLine,
                                );
                                const totalHeight = oneLine * totalLines;
                                const textElement = document.querySelector('.text');
                                textElement.style.height = totalHeight + 'px';
                                textElement.style.setProperty('-webkit-line-clamp', totalLines);
                            }

                            document.documentElement.style.setProperty(
                                'justify-content',
                                size.height < message.data.height ? 'center' : 'flex-start',
                            );
                        }
                        sendMessageToParent();
                        return;
                    }
                    default: {
                        sendMessageToParent();
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            if (imageType !== '`,`') {
                try {
                    muteEverything();
                    const mutationObserver = new MutationObserver(muteEverything);
                    mutationObserver.observe(document, {childList: true, subtree: true});
                } catch (error) {
                    console.error(error);
                }
            }
        <\/script>
    `])),e.imageType,r??"",_.Svg,_.Html,_.Image,_.Video,_.Text,_.Json,_.Audio,yt.FromChild,yt.FromChild,ie.Ready,ie.SendScale,ie.SendScalingMethod,ie.SendSize,ie.ForceSize,ie.SizeDetermined,_.Json,_.Text,Wr.y,_.Audio),i=h(bs||(bs=_n([`
        <!DOCTYPE html>
        <html class="image-type-`,`">
            <head>
                <style>
                    body,
                    html {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    html {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    html.image-type-`,` img,
                    html.image-type-`,` svg,
                    html.image-type-`,` video {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: 100vw;
                        height: 100vh;
                        display: block;
                    }

                    .spacer {
                        padding: 0 8px;
                    }

                    .pixelated {
                        image-rendering: pixelated;
                    }

                    html.image-type-`,` body,
                    html.image-type-`,` body {
                        max-width: 100%;
                        max-height: 100%;
                        font-family: sans-serif;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    html.image-type-`,`,
                    html.image-type-`,` {
                        flex-direction: column;
                    }

                    html.image-type-`,` .text-wrapper,
                    html.image-type-`,` .text-wrapper {
                        max-width: 100%;
                        overflow: hidden;
                    }

                    html.image-type-`,` .text,
                    html.image-type-`,` .text {
                        word-break: break-all;
                        padding: `,"px ",`px 0;
                        max-width: 100%;
                        margin: 0;
                        display: -webkit-box;
                        /* -webkit-line-clamp will be set later by JavaScript */
                        -webkit-line-clamp: unset;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    html.image-type-`,` .text-wrapper,
                    html.image-type-`,` .text-wrapper {
                        /*
                            This can't be on the .text element because of it using -webkit-line-clamp. Padding will expose subsequent lines that
                            should be hidden.
                        */
                        padding-bottom: `,`px;
                    }
                </style>
                <script>
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),e.imageType,_.Image,_.Svg,_.Video,_.Text,_.Json,_.Text,_.Json,_.Text,_.Json,_.Text,_.Json,Wr.y,Wr.x,_.Text,_.Json,Wr.y,n,t??"",o);return Ht(pt(i)).replace(String(n),`
${e.templateString}
`)}const ip=1e4,ap={textTransformer:"textTransformer",extraHtml:"extraHtml"},sp=_0(ap),lp={imageData:Ed(),error:void 0},Mt=yn()({tagName:yi,stateInitStatic:lp,events:{settled:te(),imageDataCalculated:te(),errored:te()},styles:m`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${B(me.VerticallyCenter)}) {
            align-items: center;
        }

        .click-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }

        * {
            flex-shrink: 0;
        }

        .frame-constraint {
            /*
                Make the frame constraint initially fit to the .min-size wrapper.
            */
            width: 100%;
            height: 100%;

            position: relative;
            transition: 100ms;
            z-index: 100;
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: calc(100% + 2px);
            min-height: calc(100% + 2px);
            max-width: calc(100% + 2px);
            max-height: calc(100% + 2px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        .loading-wrapper {
            position: absolute;
            z-index: 200;
            background-color: inherit;
            opacity: 1;
            pointer-events: none;
        }

        :host(.${B(me.HideLoading)}) .loading-wrapper,
        :host(.${B(me.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${B(me.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${B(me.HideLoading)}) iframe {
            /**
             * While showing the actual image.
             */
            opacity: 1;
        }

        iframe {
            opacity: 0;
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }

        .min-size {
            display: flex;
            justify-content: center;
        }
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[lo];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??ip,s=e.imageData instanceof Error?e.imageData:e.error;r({imageData:{createPromise:async()=>{if(e.error&&r({error:void 0}),n.classList.remove(me.HideLoading),o(new i.settled(!1)),n.classList.remove(me.VerticallyCenter),!t.imageUrl)return new Promise(async(M,L)=>{await Qr(a),L(new Error("An imageUrl was never provided to vir-resizable-image."))});const $={imageUrl:t.imageUrl,blockAutoPlay:!!t.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!t.blockPersistentCache};let S;try{S=await j0(a,ds($))}catch{await Qr(1e3);try{S=await ds($)}catch(L){throw L}}if(S)return S;throw new Error("no image data result")},trigger:{...z0(t,sp)}}});const l=t.min&&t.max?Wo({box:t.min,max:t.max}):t.min,c=t.max,d=t.forcedOriginalImageSize?xc({min:l,max:c,box:t.forcedOriginalImageSize}):void 0,u=ca(e.imageData,"",$=>(o(new i.imageDataCalculated($)),$.imageType===_.Pdf?h`
                        <iframe
                            src=${$.imageUrl}
                            ${la(async S=>{try{await Yc({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:S,imageData:$,imageDimensions:c??{width:500,height:500},max:c,min:l,sendSizeMessage:!1,timeoutMs:a}),n[lo]="",o(new i.settled(!0)),n.classList.add(me.HideLoading)}catch(M){const L=mt(M);if(L instanceof Qo)return;console.error(L),r({error:L}),o(new i.errored(L))}})}
                        ></iframe>
                    `:h`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${op($,t.extraHtml,t.htmlSizeQuerySelector)}
                            ${la(async S=>{try{const M=await np({min:l,max:c,host:n,iframeElement:S,imageData:$,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:d,timeoutMs:a});n[lo]=M,o(new i.settled(!0)),n.classList.add(me.HideLoading)}catch(M){const L=mt(M);if(L instanceof Qo)return;console.error(L),r({error:L}),o(new i.errored(L))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),$=>{r({error:$}),o(new i.errored(mt($)))}),f=ca(e.imageData,us,$=>!t.blockInteraction&&[_.Html,_.Video,_.Audio,_.Pdf].includes($.imageType)?"":us,()=>""),g=s?m`
                  max-width: 100%;
                  max-height: 100%;
              `:d?m`
                  width: ${d.width}px;
                  height: ${d.height}px;
              `:"",p=m`
            width: ${(l==null?void 0:l.width)??250}px;
            height: ${(l==null?void 0:l.height)??250}px;
        `,b=h`
            <div class="frame-constraint" style=${g}>${u}</div>
        `;return h`
            ${Ke(!s,h`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${p}>
                ${Ke(!!s,h`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${s==null?void 0:s.message}</slot>
                        </div>
                    `,b)}
            </div>
            ${f}
        `}}),us=h`
    <div class="click-cover"></div>
`,lo="latest-frame-srcdoc",He=ae()({tagName:"toniq-flip-card",events:{flippedChange:te()},styles:m`
        :host {
            max-width: 100%;
            display: inline-flex;
            perspective: 1200px;
            position: relative;
            border-radius: 16px;
            box-sizing: border-box;
            min-height: 200px;
        }

        * {
            border-radius: inherit;
            box-sizing: border-box;
        }

        .flip-wrapper {
            width: 100%;
            flex-grow: 1;
            position: relative;
            transition: transform 600ms;
            transform-style: preserve-3d;
            will-change: transform;
        }

        .flip-wrapper.flipped {
            transform: rotateY(180deg);
        }

        .flip-wrapper.flipped .card-face.front {
            pointer-events: none;
        }

        .flip-wrapper.flipped .card-face.back {
            pointer-events: auto;
        }

        ${d2(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${I.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return h`
            <div
                class="flip-wrapper ${Pe({flipped:e.flipped})}"
                ${C("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),U=ae()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:te()},styles:m`
        :host {
            max-width: 100%;
            display: inline-flex;
            position: relative;
            flex-direction: column;
        }

        /* so that the card flip always happens in front of other elements */
        :host(:hover) {
            z-index: 10;
        }

        h3 {
            ${W.h3Font};
            ${W.extraBoldFont};
            margin: 0;
        }

        .card-face {
            display: flex;
            flex-direction: column;
            padding: 32px;
            height: 100%;
            box-sizing: border-box;
        }

        .all-images {
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow: hidden;
            max-height: ${Bt["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Bt["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${bc}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${He} {
            width: 100%;
            height: 100%;
        }

        .big-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .big-image-wrapper,
        .pic-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .card-face.front ${Me} {
            margin-top: 24px;
        }

        .card-face.back ${Me} {
            margin-top: 4px;
        }

        .card-face.front h3 {
            margin-bottom: 20px;
        }

        .card-face.back h3 {
            margin-bottom: 4px;
        }

        .card-face.back {
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .paragraphs {
            padding: 4px 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
            ${W.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var g,p,b;const a=e.mainImageSize||Zo,s=$c(a);$o({onElement:n,forCssVar:Bt["main-image-size"],toValue:`${a}px`}),$o({onElement:n,forCssVar:Bt["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewMoreName].filter(wn).join(" "),c=h`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],u=h`
            <${w}
                slot="loading"
                ${v(w,{icon:oc})}
            ></${w}>
        `,f=d?h`
                  <div class="big-image-wrapper">
                      <${Mt}
                          ${v(Mt,{imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}
                      >
                          ${u}
                      </${Mt}>
                  </div>
              `:"";return h`
            <${He}
                ${v(He,{flipped:t.flipped})}
                ${C(Me.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map($=>h`
                                    <div class="pic-wrapper">
                                        <${Mt}
                                            ${v(Mt,{imageUrl:$,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}
                                        >
                                            ${u}
                                        </${Mt}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${Me}
                        ${v(Me,{viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${C(Me.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Me}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(p=e.infoParagraphs)==null?void 0:p.map($=>h`
                                    <p>${$}</p>
                                `)}
                    </div>
                    <${Me}
                        ${v(Me,{viewMoreButtonText:l,flipCardButtonText:(b=e.infoParagraphs)!=null&&b.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${C(Me.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Me}>
                </div>
            </${He}>
        `}});function ei({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ei({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Gc({value:e,allowed:t,blocked:r}){const n=t?ei({input:e,matcher:t}):!0,o=r?ei({input:e,matcher:r}):!1;return n&&!o}function hs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Gc({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const E=ae()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":!1,"toniq-input-has-a-value":({inputs:e})=>!!e.value},events:{valueChange:te(),inputBlocked:te()},styles:({hostClasses:e})=>m`
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
                border-radius: ${qo};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${I.pagePrimary.backgroundColor};
                border: 1px solid ${I.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${w} {
                color: ${I.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${w} {
                color: ${I.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${I.pageSecondary.foregroundColor};
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
                border-radius: ${qo};
                background-color: ${I.accentTertiary.backgroundColor};
                font: ${W.paragraphFont};
                gap: 4px;
            }

            ${it({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${w} {
                margin-right: 10px;
            }

            input {
                ${at};
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
                color: ${I.accentTertiary.foregroundColor};
            }

            .suffix {
                ${W.boldFont};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=hs({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?h`
                  <${w} ${v(w,{icon:e.icon})}></${w}>
              `:"";return h`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${n}
                    ${C("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)Gc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:u}=hs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(u))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Ke(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});async function cp(e){return navigator.clipboard.writeText(e)}const dp="…";function up(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${dp}${n}`}function hp(e){return!(e%1)}function fp(e){return e.letterCount==null?4:hp(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const Y=ae()({tagName:"toniq-middle-ellipsis",events:{copied:te()},cssVars:{"toniq-middle-ellipsis-text-color":I.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":I.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":I.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":I.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            /* 5 frames at 60 fps */
            transition: ${K.interaction};
            ${W.paragraphFont};
            color: ${t["toniq-middle-ellipsis-text-color"].value};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) {
            color: ${t["toniq-middle-ellipsis-text-hover-color"].value};
        }

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${w} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${w} {
            margin-left: 4px;
            color: ${t["toniq-middle-ellipsis-icon-color"].value};
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
            ${at};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${it({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${I.pagePrimary.backgroundColor};
            background-color: ${I.pagePrimary.backgroundColor};
            display: flex;
            position: absolute;
            height: 100%;
            right: 0;
            max-width: 100%;
            pointer-events: none;
            transition: opacity ${K.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return h``;const i=e.text,a=fp(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?up(i,a):i,u=c?i:"",f=s?nc:l?rc:void 0,g=f?h`
                  <${w} ${v(w,{icon:f})}></${w}>
              `:"",p=h`
            <span title=${u} class="text-content">
                ${Ke(!!e.copyOnClick,h`
                        <span
                            class=${Pe({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${d}
            </span>
        `;return d?s?h`
                    <button
                        tabindex="0"
                        role="link"
                        ${C("click",b=>{var S,M;const $=(M=(S=b.currentTarget)==null?void 0:S.querySelector)==null?void 0:M.call(S,"a");if(!$)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");$.click()})}
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
                            title=${u}
                        >
                            ${p} ${g}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${C("click",async()=>{await cp(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${p} ${g}
                    </button>
                `:h`
                    ${p}
                `:h``}}),fs="...";function pp(e,t,r=7,n=5){let o;e=ar(e,1,t),r=ar(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?co(t-o,t):e>o?co(Math.min(s.start,t-o),Math.min(s.end,t)):co(1,Math.min(t,o+1));function c(u,f){return l.length+1!==t?f:[u]}const d=l[l.length-1];if(d&&d<t){const u=c(t,[fs,t]);return[...l,...u]}else return l[0]!==1?c(1,[1,fs]).concat(l):l}function co(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}ae()({tagName:"toniq-pagination",styles:m`
        :host {
            display: flex;
        }

        button {
            ${at}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${$t};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${j(I.accentSecondary)};
        }

        .control:hover {
            ${j(I.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${j(I.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${W.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${j(I.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${j(I.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:te()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?h``:h`
                <button
                    ${C("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${w} ${v(w,{icon:gi})}></${w}>
                </button>
                ${pp(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?h`
                                <div class="page" disabled>${n}</div>
                            `:h`
                                <button
                                    class=${Pe({page:!0,selected:e.currentPage===n})}
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
                    <${w} ${v(w,{icon:mi})}></${w}>
                </button>
            `}});const z=ae()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:te()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Te("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Te("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Te("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Te("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>m`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition: color ${K.interaction},
                background-color ${K.interaction},
                opacity ${K.interaction};
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
            color: ${e["toniq-radio-group-unchecked-label-color"].value};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${e["toniq-radio-group-checked-radio-color"].value};
            outline: none;
            text-align: inherit;
        }

        button {
            ${at}
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
            border: 2px solid ${e["toniq-radio-group-unchecked-radio-color"].value};
            border-radius: 50%;
            transition: ${K.interaction};
            --color-stop: -10%;
            background-image: radial-gradient(
                ${e["toniq-radio-group-checked-radio-color"].value} var(--color-stop),
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

        ${it({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Ho};
        }

        .wrapper.disabled::before {
            ${Ho}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Wc()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return gp(e.entries).map(i=>mp(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function gp(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${z.tagName} was given duplicate entry values.`),Object.values(t)}function mp(e,t,r,n){const o=t===r.value,i=h`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${Pe({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${C("click",()=>{n()})}
        >
            <input
                ${C("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}const R={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Jt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function vp(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${R.lowerLabelWrapper} .${R.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${R.upperLabelWrapper} .${R.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function wp(e,t=8){const r=vp(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function uo({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function br(e){return vt(e)&&e.min!==void 0&&e.max!==void 0}function ti(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${R.range}`);return(t==null?void 0:t.clientWidth)??0}function ho(e,t,r){return`${r?W0(e):e} ${t}`}function bp({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function $p({value:e,double:t,min:r,max:n}){return t?br(e)?{min:ar(e.min,r,Math.min(e.max,n)),max:ar(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:br(e)?r:ar(e,r,n)}function yp({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:br(e)?{min:ro(n,e.min),max:ro(n,e.max)}:ro(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function fo(e,t,r){return r?t[e]||0:e}function xp(e){return{actualLimits:bp(e),actualValue:$p(e)}}function kp(e,t){var n,o,i;let r=!1;if(br(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${R.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${R.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${R.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function Xc(e,t){const{actualValue:r,actualLimits:n}=xp({...e}),o=s2(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=yp({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=ti(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const ut=16,ps=m`
    ${ut}px
`,gs=m`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${ps};
    width: ${ps};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${K.interaction};
    ${j(I.accentPrimary)};
`,ms=m`
    transform: scale(1.2);
`;function er(e){requestAnimationFrame(()=>{const t=Xc(e.instanceInputs,e).elementValue;kp(t,e)&&(e.setAttribute("disabled","true"),er(e))})}const P=ae()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:te()},styles:m`
        :host {
            display: block;
        }

        .${B(R.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${j(I.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${j(I.accentPrimary)};
        }

        .${B(R.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${W.boldParagraphFont};
            ${$t};
        }

        .${B(R.labelPixelMarginWrapper)},
            .${B(R.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${B(R.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${B(R.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${it({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${B(R.lowerSlider)},
        .${B(R.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${B(R.slider)}::-moz-range-thumb {
            ${gs}
        }

        /* these selectors fail if combined with a comma */
        .${B(R.slider)}::-webkit-slider-thumb {
            ${gs}
        }

        /* these selectors fail if combined with a comma */
        .${B(R.slider)}::-webkit-slider-thumb:hover {
            ${ms}
        }

        /* these selectors fail if combined with a comma */
        .${B(R.slider)}::-moz-range-thumb:hover {
            ${ms}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{er(e)}),e.addEventListener("keydown",()=>{er(e)}),e.addEventListener("keyup",()=>{er(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:u,rangeWidth:f}=Xc({...e},t);if(er(t),br(d))return g(a,d,u);return b(a,d,u);function g($,S,M){const L={left:Tt((f-ut)*(S.min-M.min)/(M.max-M.min)+ut/2),right:Tt((f-ut)*(M.max-S.max)/(M.max-M.min)+ut/2)},ee=ho($.min,c,l),we=ho($.max,c,l);requestAnimationFrame(()=>{const be=wp(t);be!==o.labelOverlap&&i({labelOverlap:be})});const Re=(M.max-S.max)/(M.max-M.min)>.5,Ze=uo({value:S.min,limits:{min:M.min,max:S.max},flip:!0}),ue=uo({value:S.max,limits:{min:S.min,max:M.max},flip:!1}),lt=o.labelOverlap&&Re?o.labelOverlap:0,Tr=o.labelOverlap&&!Re?o.labelOverlap:0;return h`
                <div
                    class="range"
                    ${Co(()=>{i({rangeWidth:ti(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${L.left}; right:${L.right}"
                    ></div>
                    <span
                        class="${R.labelOuterWrapper} ${R.lowerLabelWrapper}"
                        style="left: ${L.left}"
                    >
                        <span
                            class="${R.labelPercentMarginWrapper}"
                            style="margin-left: ${to(Ze)}"
                        >
                            <span
                                class="${R.labelPixelMarginWrapper}"
                                style="margin-right: ${Tt(Tr)}"
                                ${_t(Jt.lowerLabel)}
                            >
                                ${ee}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${R.labelOuterWrapper} ${R.upperLabelWrapper} ${R.rightAlignedLabelWrapper}"
                        style="right: ${L.right}"
                    >
                        <span
                            class="${R.labelPercentMarginWrapper}"
                            style="margin-right: ${to(ue)}"
                        >
                            <span
                                class="${R.labelPixelMarginWrapper}"
                                style="margin-left: ${Tt(lt)}"
                                ${_t(Jt.upperLabel)}
                            >
                                ${we}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${R.lowerSlider} ${R.slider}"
                            .min=${M.min}
                            .max=${M.max}
                            .value=${S.min}
                            ${C("input",be=>{const xt=be.target,Zt={...$,min:fo(Number(xt.value),s,l)};p(Zt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${R.upperSlider} ${R.slider}"
                            step=${e.step}
                            .min=${M.min}
                            .max=${M.max}
                            .value=${S.max}
                            ${_t(Jt.slider)}
                            ${C("input",be=>{const xt=be.target,Zt={...$,max:fo(Number(xt.value),s,l)};p(Zt)})}
                        />
                    </div>
                </div>
            `}function p($){i({internalValue:$}),e.disabled||n(new r.valueChange($))}function b($,S,M){const L=Tt((f-ut)*(M.max-S)/(M.max-M.min)+ut/2),ee=ho($,c,l),we=uo({value:S,limits:M,flip:!1});return h`
                <div
                    class="range"
                    ${Co(()=>{i({rangeWidth:ti(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${L}"></div>
                    <span
                        class="${R.labelOuterWrapper} ${R.rightAlignedLabelWrapper}"
                        style="right: ${L}"
                    >
                        <span
                            class="${R.labelPercentMarginWrapper}"
                            style="margin-right: ${to(we)}"
                            ${_t(Jt.label)}
                        >
                            ${ee}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${R.slider}"
                        step=${e.step}
                        .min=${M.min}
                        .max=${M.max}
                        .value=${S}
                        ${_t(Jt.slider)}
                        ${C("input",Re=>{const Ze=Re.target,ue=fo(Number(Ze.value),s,l);p(ue)})}
                    />
                </div>
            `}}}),ye=ae()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":!1},styles:({hostClasses:e})=>m`
        :host {
            ${W.boldParagraphFont};
            ${$t};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${at};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${j(I.accentSecondary)};
            transition: color ${K.interaction},
                background-color ${K.interaction};
        }

        ${it({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${j(I.accentPrimary)};
        }

        :host(:hover) button {
            ${j(I.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${j(I.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${j(I.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${j(I.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${j(I.pageInteraction)};
            border-color: ${I.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${j(I.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${I.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${j(I.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${w}
                      class="icon-template"
                      ${v(w,{icon:e.icon})}
                  ></${w}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),lr=$h({tagName:"toniq-tooltip",styles:m`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${I.accentPrimary.backgroundColor};
            ${bi.menuShadow};
            background-color: ${I.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return h`
            <slot></slot>
        `}}),tr=ae()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${K.pretty};
        }

        .tooltip-wrapper {
            transition: visibility ${K.pretty} ${K.pretty},
                opacity ${K.pretty};
            pointer-events: none;
            visibility: hidden;
            opacity: 0;

            padding: 8px;
            display: block;
            position: absolute;
            width: max-content;
            max-width: 200px;
            top: calc(100% - 8px);
            left: -8px;
        }
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return h`
            <div
                class="slot-wrapper"
                ${C("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${lr}>${e.tooltipContent}</${lr}>
            </div>
        `}}),Jc=oe({title:"Data",parent:void 0}),Cp=G({title:"Social Urls",parent:Jc,defineExamplesCallback({defineExample:e}){e({title:"Icons",styles:m`
                :host {
                    display: flex;
                    gap: 32px;
                }

                .social-icon-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .social-name {
                    ${j(I.pageSecondary)};
                }
            `,renderCallback(){return Object.entries(vc).map(([t,r])=>h`
                            <div class="social-icon-wrapper">
                                <span class="social-name">${t}</span>
                                <${w} ${v(w,{icon:r})}></${w}>
                            </div>
                        `)}})}}),de=oe({title:"Elements",parent:void 0}),Kc=oe({title:"Button",parent:de});function Sp(e,t){e({title:"Text",renderCallback(){return h`
                <${D}
                    ${v(D,{text:"Button",...t})}
                ></${D}>
            `}}),e({title:"Icon",renderCallback(){return h`
                <${D}
                    ${v(D,{icon:sr,...t})}
                ></${D}>
            `}}),e({title:"Toggling icon",stateInitStatic:{showIcon:!0},renderCallback({state:r,updateState:n}){return setTimeout(()=>{n({showIcon:!r.showIcon})},1e3),h`
                <${D}
                    ${v(D,r.showIcon?{icon:sr,text:"icon",...t}:{text:"no icon",...t})}
                ></${D}>
            `}}),e({title:"Text + Icon",renderCallback(){return h`
                <${D}
                    ${v(D,{text:"Button",icon:sr,...t})}
                ></${D}>
            `}}),e({title:"HTML child",renderCallback(){return h`
                <${D}
                    ${v(D,{...t})}
                >
                    <span>HTML Child</span>
                </${D}>
            `}}),e({title:"Sizable",renderCallback(){return h`
                <${D}
                    style="height: 100px; width: 200px;"
                    ${v(D,{text:"bigger",...t})}
                ></${D}>
            `}})}const Ip=ne({[D.tagName]:{},[`${D.tagName} Secondary`]:{buttonStyle:wr.Secondary},[`${D.tagName} Outline`]:{buttonStyle:wr.Outline},[`${D.tagName} Disabled`]:{disabled:!0}},(e,t)=>G({title:e,defineExamplesCallback({defineExample:r}){Sp(r,t)},parent:Kc})),Mp=[Kc,...Object.values(Ip)],Ti=oe({title:"Carousel",parent:de}),Ap=G({title:q.tagName,parent:Ti,descriptionParagraphs:["A carousel that can show multiple elements at once.","Automatic scrolling is optional."],defineExamplesCallback({defineExample:e}){e({title:"short and fast",styles:m`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,renderCallback(){return h`
                    <${q}
                        ${v(q,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:Rt["core-24"].map(t=>{const r=m`
                                    padding: 24px;
                                    border: 1px solid ${I.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${w}
                                        style=${r}
                                        ${v(w,{icon:t})}
                                    ></${w}>
                                `})})}
                    ></${q}>
                `}}),e({title:"tall",styles:m`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,renderCallback(){return h`
                    <${q}
                        ${v(q,{enableAutomaticCycling:!0,templates:Rt["core-24"].map(t=>{const r=m`
                                    padding: 100px 24px;
                                    border: 1px solid ${I.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${w}
                                        style=${r}
                                        ${v(w,{icon:t})}
                                    ></${w}>
                                `})})}
                    ></${q}>
                `}}),e({title:"random sizes",styles:m`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,renderCallback(){return h`
                    <${q}
                        ${v(q,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:Rt["core-24"].map(t=>{const r=Kf({min:0,max:150}),n=m`
                                    padding: 100px ${r}px;
                                    border: 1px solid ${I.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${w}
                                        style=${n}
                                        ${v(w,{icon:t})}
                                    ></${w}>
                                `})})}
                    ></${q}>
                `}})}}),Tp=G({title:q.hostClasses["toniq-carousel-banner-style"],parent:Ti,descriptionParagraphs:[`${q.tagName} style for a single, full-width element.`],defineExamplesCallback({defineExample:e}){e({title:q.hostClasses["toniq-carousel-banner-style"],styles:m`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    max-width: 100%;
                    width: 800px;
                    border-radius: 8px;
                    ${q.cssVars["toniq-carousel-arrow-margin"].name}: 16px;
                }
            `,renderCallback(){return h`
                    <${q}
                        class=${q.hostClasses["toniq-carousel-banner-style"]}
                        ${v(q,{enableAutomaticCycling:!0,templates:Rt["core-24"].map(t=>{const r=m`
                                    /* make sure this width matches the ToniqCarousel width */
                                    width: 800px;
                                    max-width: 100%;
                                    padding: 100px 0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-sizing: border-box;
                                    border: 1px solid ${I.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${w}
                                        style=${r}
                                        ${v(w,{icon:t})}
                                    ></${w}>
                                `})})}
                    ></${q}>
                `}}),e({title:"single entry banner",styles:m`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    max-width: 100%;
                    width: 800px;
                    border-radius: 8px;
                    ${q.cssVars["toniq-carousel-arrow-margin"].name}: 16px;
                }
            `,renderCallback(){return h`
                    <${q}
                        class=${q.hostClasses["toniq-carousel-banner-style"]}
                        ${v(q,{enableAutomaticCycling:!0,templates:[Rt["core-24"][0]].map(t=>{const r=m`
                                    /* make sure this width matches the ToniqCarousel width */
                                    width: 800px;
                                    max-width: 100%;
                                    padding: 100px 0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-sizing: border-box;
                                    border: 1px solid ${I.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${w}
                                        style=${r}
                                        ${v(w,{icon:t})}
                                    ></${w}>
                                `})})}
                    ></${q}>
                `}})}}),Ep=[Ti,Ap,Tp],Qc=oe({title:"Checkbox",parent:de}),_p=G({title:N.tagName,parent:Qc,defineExamplesCallback({defineExample:e}){e({title:"Unchecked",stateInitStatic:{checked:!1},renderCallback({state:t,updateState:r}){return h`
                    <${N}
                        ${v(N,{checked:t.checked,text:"My Checkbox"})}
                        ${C(N.events.checkedChange,n=>{r({checked:n.detail})})}
                    ></${N}>
                `}}),e({title:"Checked",stateInitStatic:{checked:!0},renderCallback({state:t,updateState:r}){return h`
                    <${N}
                        ${v(N,{checked:t.checked,text:"My Checkbox"})}
                        ${C(N.events.checkedChange,n=>{r({checked:n.detail})})}
                    ></${N}>
                `}}),e({title:"HTML Child",stateInitStatic:{checked:!1},renderCallback({state:t,updateState:r}){return h`
                    <${N}
                        ${v(N,{checked:t.checked})}
                        ${C(N.events.checkedChange,n=>{r({checked:n.detail})})}
                    >
                        With HTML Child
                    </${N}>
                `}}),e({title:"Custom CSS Vars",stateInitStatic:{checked:!1},styles:m`
                :host {
                    ${N.cssVars["toniq-checkbox-unchecked-checkbox-color"].name}: red;
                    ${N.cssVars["toniq-checkbox-unchecked-label-color"].name}: orange;
                    ${N.cssVars["toniq-checkbox-checked-checkbox-color"].name}: green;
                    ${N.cssVars["toniq-checkbox-checked-check-color"].name}: blue;
                    ${N.cssVars["toniq-checkbox-checked-label-color"].name}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${N}
                        ${v(N,{checked:t.checked,text:"wild colors"})}
                        ${C(N.events.checkedChange,n=>{r({checked:n.detail})})}
                    ></${N}>
                    <${N}
                        ${v(N,{checked:!t.checked,text:`wild colors (${t.checked?"unchecked":"checked"})`})}
                        ${C(N.events.checkedChange,n=>{r({checked:!n.detail})})}
                    ></${N}>
                `}}),e({title:"Multiple",stateInitStatic:{checkedShort:!1,checkedLong:!1},styles:m`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${N}
                        ${v(N,{checked:t.checkedShort,text:"Short"})}
                        ${C(N.events.checkedChange,n=>{r({checkedShort:n.detail})})}
                    ></${N}>
                    <${N}
                        ${v(N,{checked:t.checkedLong,text:"With much longer checkbox label string"})}
                        ${C(N.events.checkedChange,n=>{r({checkedLong:n.detail})})}
                    ></${N}>
                `}})}}),Pp=[Qc,_p],e0=oe({title:"Chip",parent:de});function Bp(e,t){e({title:"Text",renderCallback(){return h`
                <${Q}
                    class=${t}
                    ${v(Q,{text:"Toniq Chip Text"})}
                ></${Q}>
            `}}),e({title:"Text + Icon",renderCallback(){return h`
                <${Q}
                    class=${t}
                    ${v(Q,{text:"Toniq Chip Text",icon:ir})}
                ></${Q}>
            `}}),e({title:"HTML Child",renderCallback(){return h`
                <${Q} class=${t} ${v(Q,{})}>Slot in Use</${Q}>
            `}}),e({title:"HTML + Icon",renderCallback(){return h`
                <${Q}
                    class=${t}
                    ${v(Q,{icon:ir})}
                >
                    Slot in Use
                </${Q}>
            `}}),e({title:"custom size",styles:m`
            ${Q} {
                width: 150px;
                height: 24px;
            }
        `,renderCallback(){return h`
                <${Q}
                    class=${t}
                    ${v(Q,{icon:ir})}
                >
                    Slot in Use
                </${Q}>
            `}})}const Lp=ne({[Q.tagName]:"",[Q.hostClasses["toniq-chip-secondary"]]:Q.hostClasses["toniq-chip-secondary"]},(e,t)=>G({title:e,defineExamplesCallback({defineExample:r}){Bp(r,t)},parent:e0})),Rp=[e0,...Object.values(Lp)],t0=oe({title:"Dropdown",parent:de}),We=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],Np=G({title:F.tagName,parent:t0,defineExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selected:void 0},renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}}),e({title:"With Icon",stateInitStatic:{selected:void 0},renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected,icon:jo})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}}),e({title:"With Icon + Prefix",stateInitStatic:{selected:void 0},renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected,icon:jo,selectedLabelPrefix:"Sort By:"})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}}),e({title:"Defaulted to an option",stateInitStatic:{selected:We[3]},renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}}),e({title:"Custom size",stateInitStatic:{selected:void 0},styles:m`
                ${F} {
                    width: 500px;
                    height: 100px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}}),e({title:"Squished",stateInitStatic:{selected:void 0},styles:m`
                ${F} {
                    max-height: 20px;
                    min-height: 20px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}}),e({title:"No background",stateInitStatic:{selected:void 0},styles:m`
                ${F} {
                    ${wi.accentSecondary.backgroundColor}: transparent;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${F}
                        ${v(F,{options:We,selected:t.selected})}
                        ${C(F.events.selectChange,n=>{r({selected:n.detail})})}
                    ></${F}>
                `}})}}),zp=[t0,Np],vs="/toniq-labs-design-system";function Dp(...e){const r=[globalThis.location.pathname.startsWith(vs)?vs:"",...e].filter(wn);return H0(...r)}const Ei=oe({title:"Flip Card",parent:de}),po=Array(30).fill(Dp("/toniq-labs-logo.png")),ri=["Hello there.","There is stuff here."],Ur=ri.concat(Array(30).fill(ri)),Fp=G({title:U.tagName,parent:Ei,defineExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${U}
                        ${v(U,{infoParagraphs:Ur,imageUrls:po,socialUrls:bh,title:"Featured Stuff",viewMoreName:"Stuff"})}
                    ></${U}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${U}
                        ${v(U,{imageUrls:po,title:"Featured Stuff",infoParagraphs:void 0})}
                    ></${U}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${U}
                        ${v(U,{imageUrls:[],title:"Featured Stuff",infoParagraphs:Ur,viewMoreUrl:"https://toniqlabs.com"})}
                        ${C(U.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${U}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${U}
                        ${v(U,{imageUrls:[],title:"Featured Stuff",infoParagraphs:Ur})}
                    ></${U}>
                `}}),e({title:"with custom height",styles:m`
                ${U} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${U}
                        ${v(U,{imageUrls:[],title:"Featured Stuff",infoParagraphs:Ur})}
                    ></${U}>
                `}}),e({title:"smaller",styles:m`
                ${U} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${U}
                        ${v(U,{imageUrls:po,infoParagraphs:ri,title:"Featured Stuff"})}
                    ></${U}>
                `}})}}),jp=G({title:He.tagName,parent:Ei,defineExamplesCallback({defineExample:e}){e({title:"basic",styles:m`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return h`
                    <${He}
                        ${v(He,{flipped:t.flipped})}
                        ${C(He.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${He}>
                `}})}}),Hp=[Ei,jp,Fp],r0=oe({title:"Hyperlink",parent:de});function Op(e,t){return[e({title:"text hyperlink",renderCallback(){return h`
                    <${fe}
                        ${v(fe,{newTab:!0,url:"https://toniqlabs.com",...t})}
                    >
                        Toniq Labs Link
                    </${fe}>
                `}})]}const qp=ne({[fe.tagName]:{},"with hover styles":{withHoverStyles:!0},"as a route link":{treatAsRouteChange:!0}},(e,t)=>G({title:e,defineExamplesCallback({defineExample:r}){Op(r,t)},parent:r0})),Vp=[r0,...Object.values(qp)],n0=oe({title:"Icon",parent:de}),Zp=ne({[w.tagName]:e=>{e({title:"With Icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:sr})}
                        ></${w}>
                    `}}),e({title:"Without Icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:void 0})}
                        ></${w}>
                    `}}),e({title:"64px icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:lc})}
                        ></${w}>
                    `}}),e({title:"48px icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:sc})}
                        ></${w}>
                    `}}),e({title:"32px icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:ac})}
                        ></${w}>
                    `}}),e({title:"24px icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:Xl})}
                        ></${w}>
                    `}}),e({title:"16px icon",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:ir})}
                        ></${w}>
                    `}})},[`${w.tagName} colors`]:e=>{e({title:"Inherited",renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:Et})}
                        ></${w}>
                    `}}),e({title:'Using "color"',styles:m`
                    :host {
                        color: red;
                    }
                `,renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:Et})}
                        ></${w}>
                    `}}),e({title:De.color,styles:m`
                    :host {
                        ${B(De.color)}: red;
                    }
                `,renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:Et})}
                        ></${w}>
                    `}}),e({title:De.strokeColor,styles:m`
                    :host {
                        ${B(De.strokeColor)}: red;
                    }
                `,renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:Et})}
                        ></${w}>
                    `}}),e({title:De.fillColor,styles:m`
                    :host {
                        ${B(De.fillColor)}: red;
                    }
                `,renderCallback(){return h`
                        <${w}
                            ${v(w,{icon:Et})}
                        ></${w}>
                    `}})}},(e,t)=>G({title:e,defineExamplesCallback({defineExample:r}){t(r)},parent:n0})),Wp=[n0,...Object.values(Zp)],o0=oe({title:"Input",parent:de}),Up=G({title:E.tagName,parent:o0,defineExamplesCallback({defineExample:e}){e({title:"Assigned value",stateInitStatic:{value:"init value"},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"Placeholder",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,placeholder:"my placeholder"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"Icon",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,placeholder:"with icon",icon:ic})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"Custom size (big)",stateInitStatic:{value:""},styles:m`
                ${E} {
                    height: 75px;
                    width: 300px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,placeholder:"stretched"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"Custom size (small)",stateInitStatic:{value:""},styles:m`
                ${E} {
                    height: 40px;
                    width: 140px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,placeholder:"squished"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"Outline style",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        class=${E.hostClasses["toniq-input-outline"]}
                        ${v(E,{value:t.value,placeholder:"outline"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:'Letter "a" blocked',stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,blockedInputs:"a",placeholder:"try typing a"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"With suffix",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,placeholder:"my placeholder",suffix:"ckBTC"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"only numbers allowed",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,allowedInputs:/\d/})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"disabled",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,disabled:!0,placeholder:"cannot select"})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}}),e({title:"no browser auto-helps",stateInitStatic:{value:""},renderCallback({state:t,updateState:r}){return h`
                    <${E}
                        ${v(E,{value:t.value,placeholder:'try typing "im"',disableBrowserHelps:!0})}
                        ${C(E.events.valueChange,n=>{r({value:n.detail})})}
                    ></${E}>
                `}})}}),Yp=[o0,Up],i0=oe({title:"Middle Ellipsis",parent:de}),Gp=G({title:Y.tagName,parent:i0,defineExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return h`
                    <${Y}
                        ${v(Y,{text:"Long string instead of text"})}
                    ></${Y}>
                `}}),e({title:"Short text",renderCallback(){return h`
                    <${Y}
                        ${v(Y,{text:"Short text"})}
                    ></${Y}>
                `}}),e({title:"External Link",renderCallback(){return h`
                    <${Y}
                        ${v(Y,{text:"Long text with link",externalLink:"https://toniqlabs.com"})}
                    ></${Y}>
                `}}),e({title:"Copyable",renderCallback(){return h`
                    <${Y}
                        ${v(Y,{text:"Long text that you can copy",copyOnClick:!0})}
                    ></${Y}>
                `}}),e({title:"Custom CSS vars",styles:m`
                ${Y} {
                    ${Y.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${Y.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${Y.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${Y.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return h`
                    <${Y}
                        ${v(Y,{text:"long text with custom colors",copyOnClick:!0})}
                    ></${Y}>
                `}})}}),Xp=[i0,Gp],a0=oe({title:"Radio Group",parent:de}),Kt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],$e={basic:Kt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Kt.slice(1)],disabled:[{...Kt[0],disabled:!0},...Kt.slice(1)],noLabels:v0(Kt,e=>({...e,label:void 0}))},Jp=G({title:z.tagName,parent:a0,defineExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:$e.basic[0].value},renderCallback({state:t,updateState:r}){return h`
                    <${z}
                        ${v(z,{entries:$e.basic,value:t.selectedValue})}
                        ${C(z.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${z}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:$e.basic[0].value},styles:m`
                ${z} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z}
                        ${v(z,{entries:$e.basic,value:t.selectedValue})}
                        ${C(z.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${z}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:$e.longText[0].value},styles:m`
                ${z} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z}
                        ${v(z,{entries:$e.longText,value:t.selectedValue})}
                        ${C(z.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${z}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:$e.noLabels[0].value},renderCallback({state:t,updateState:r}){return h`
                    <${z}
                        ${v(z,{entries:$e.noLabels,value:t.selectedValue})}
                        ${C(z.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${z}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:$e.disabled[1].value},renderCallback({state:t,updateState:r}){return h`
                    <${z}
                        ${v(z,{entries:$e.disabled,value:t.selectedValue})}
                        ${C(z.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${z}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:$e.basic[0].value},styles:m`
                ${z} {
                    ${z.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${z.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${z.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${z.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z}
                        ${v(z,{entries:$e.basic,value:t.selectedValue})}
                        ${C(z.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${z}>
                `}})}}),Kp=[a0,Jp],s0=oe({title:"Slider",parent:de}),ze=m`
    ${P} {
        width: 300px;
    }
`,go={min:10,max:50},Qp=G({title:P.tagName,parent:s0,defineExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,...go})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{double:!0,value:t.value,min:0,max:100})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,...go,suffix:"ICP"})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:m`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,min:-100,max:100})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:m`
                ${ze}

                ${P} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{value:t.value,...go})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${P}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${ze}

                ${P} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${P}
                        ${v(P,{double:!0,value:t.value,min:0,max:100})}
                        ${C(P.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${P}>
                `}})}}),eg=[s0,Qp],l0=oe({title:"Toggle Button",parent:de});function tg(e,t){return[e({title:"Default",stateInitStatic:{toggled:!1},renderCallback({state:r,updateState:n}){return h`
                    <${ye}
                        class=${t}
                        ${v(ye,{toggled:r.toggled,text:"Toggle Button"})}
                        ${C("click",()=>{n({toggled:!r.toggled})})}
                    ></${ye}>
                `}}),e({title:"Icon + text",stateInitStatic:{toggled:!1},renderCallback({state:r,updateState:n}){return h`
                    <${ye}
                        class=${t}
                        ${v(ye,{toggled:r.toggled,icon:Oo,text:"Toggle Button"})}
                        ${C("click",()=>{n({toggled:!r.toggled})})}
                    ></${ye}>
                `}}),e({title:"Icon only",stateInitStatic:{toggled:!1},renderCallback({state:r,updateState:n}){return h`
                    <${ye}
                        class=${t}
                        ${v(ye,{toggled:r.toggled,icon:Oo})}
                        ${C("click",()=>{n({toggled:!r.toggled})})}
                    ></${ye}>
                `}})]}const rg=ne({[ye.tagName]:"",[ye.hostClasses["toniq-toggle-button-text-only"]]:ye.hostClasses["toniq-toggle-button-text-only"]},(e,t)=>G({title:e,defineExamplesCallback({defineExample:r}){tg(r,t)},parent:l0})),ng=[l0,...Object.values(rg)],_i=oe({title:"Tooltip",parent:de}),og=G({parent:_i,title:tr.tagName,defineExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:m`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${I.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,renderCallback(){return h`
                        <${tr}
                            ${v(tr,{tooltipContent:n,forceShow:o})}
                        >
                            <div>Hover me!</div>
                        </${tr}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:h`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),ig=G({parent:_i,title:lr.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${tr.tagName}>, which in turn uses this element.`],defineExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return h`
                    <${lr}>This is a tooltip.</${lr}>
                `}})}}),ag=[_i,og,ig],c0=oe({title:"Icons",parent:void 0}),sg=Object.entries(Rt).map(([e,t])=>G({title:e,parent:c0,defineExamplesCallback({defineExample:r}){t.map(n=>r({title:n.iconName,renderCallback(){return h`
                                <${w} ${v(w,{icon:n})}></${w}>
                            `}}))}})),Pi=oe({title:"Styles",parent:void 0});function d0(e){const t=lg(e),r=ne(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return re(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function lg(e){typeof e!="string"&&(e=String(e));const n=`{"${Ht(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const cg=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${W.labelFont};
        ${W.monospaceFont};
        color: ${I.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${I.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${W.h2Font};
    }
`;function dg(e,t,r){const n=d0(j(r));return e({title:t,styles:cg,renderCallback(){return h`
                <div class="color-example" style=${j(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>h`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const ug=G({title:"Colors",parent:Pi,defineExamplesCallback({defineExample:e}){re(I).map(t=>dg(e,t,I[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),hg=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${W.labelFont};
        ${W.monospaceFont};
        color: ${I.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${I.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${I.divider.foregroundColor};
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
`;function fg(e,t,r){const n=d0(r);return e({title:t,styles:hg,renderCallback(){return h`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${re(n).map(o=>{const i=n[o];return h`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const pg=G({title:"Fonts",parent:Pi,defineExamplesCallback({defineExample:e}){re(W).map(t=>{const r=W[t];return fg(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),gg=[de,c0,Pi,...sg,...Mp,...Ep,...Pp,...Rp,...zp,...Hp,...Vp,...Wp,...Yp,...Xp,...Kp,...eg,...ng,...ag,Jc,Cp,ug,pg];$n({tagName:"toniq-design-system-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${qr} {
            height: 100%;
            width: 100%;
            ${W.paragraphFont};
        }
    `,renderCallback(){return h`
            <${qr}
                ${v(qr,{internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:gg,themeColor:"#00D093",everythingTitle:"Design System"})}
            ></${qr}>
        `}});
