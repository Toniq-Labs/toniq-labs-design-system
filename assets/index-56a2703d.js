var kh=Object.defineProperty;var xh=(e,t,n)=>t in e?kh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Pr=(e,t,n)=>(xh(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const Ah=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Te(e,t){return e?Ah.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Wc(e,t){return e&&t.every(n=>Te(e,n))}function le(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function $h(e){return le(e).map(t=>e[t])}function Ch(e){return le(e).map(t=>[t,e[t]])}function Sh(e){return Object.fromEntries(e)}function Th(e,t){return e.includes(t)}function Mh(e,t){return e.map(t)}function ve(e){return!!e}function zc(e,t){return e.match(t)??[]}function Eh(e){return e.replace(/,/g,"")}function Zc(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Ih={capitalizeFirstLetter:!1};function Bh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Lh(e,t){return t.capitalizeFirstLetter?Bh(e):e}function qh(e,t=Ih){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Lh(r,t)}var xn;(function(e){e.Upper="upper",e.Lower="lower"})(xn||(xn={}));function Ph(e){return e.toLowerCase()!==e.toUpperCase()}function Ss(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const o=e[r]||"";if(!Ph(o)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===xn.Upper&&o!==o.toUpperCase())return!1;if(t===xn.Lower&&o!==o.toLowerCase())return!1}return!0}function fo(e){return e.split("").reduce((n,r,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ss(a,xn.Lower,{blockNoCaseCharacters:!0})||Ss(s,xn.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function An(e,t){return e.split(t)}const Oh=String(NaN);function Gc(e){if(typeof e=="string"&&isNaN(Number(e)))return Oh;const t=Number(e),n=t<0,r=String(Math.abs(t)),[o,i]=r.split("."),a=i?`.${i}`:"",l=zc(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(f=>f.split("").reverse().join("")).join(",");return[n?"-":"",l,a].join("")}function Dh(e){return typeof e=="number"?e:Number(typeof e=="string"?Eh(e):e)}function Nh(e){return String(e).includes("e")}function Rh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Xi(e){const t=Math.pow(10,e.digits),n=e.number*t;return Number((Math.round(n)/t).toFixed(e.digits))}function wn({value:e,min:t,max:n}){return Math.min(Math.max(e,t),n)}var ar;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ar||(ar={}));function Fh(e,t){let n=0,r;return o=>{r=o;const i=Date.now();n>i||(e===ar.FirstThenWait?r():e===ar.AfterWait&&setTimeout(()=>{r==null||r()},t.milliseconds),n=i+t.milliseconds)}}function Yc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(n=>Ot(n).trim()).join(`
`))}function jh(e){return e?e.map(Ot).filter(ve).join(`
`):""}function Ot(e){return e?e instanceof Error?e.message:Te(e,"message")?String(e.message):String(e):""}function Qc(e){return e instanceof Error?e:new Error(Ot(e))}function Hh(e,t){const n=Qc(e);return n.message=`${t}: ${n.message}`,n}class Uh extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function po(e){return Array.isArray(e)?"array":typeof e}function ee(e,t){return po(e)===t}function Vh(e,t){if(!(ee(e,"string")||ee(e,"number")||ee(e,"symbol")))throw new Uh(t||`value is of type '${po(e)}' but expected a PropertyKey.`)}function ii(e){try{return Vh(e),!0}catch{return!1}}function ze(e){return!!e&&typeof e=="object"}function Kc(e,t,n=!1,r={}){const o=le(e),i=new Set(le(t));if(!n){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Te(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(f){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${f}`)}const l=e[a],u=t[a];r[a]||Jc(l,u,s,n,r[a]??{})})}function Jc(e,t,n,r,o){var s;const i=typeof e,a=typeof t;i!==a&&n(`type "${i}" did not match expected type "${a}"`);try{Te(t,"constructor")&&(!Te(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((l,u)=>{if(t.map(h=>{try{Jc(l,h,n,r,o);return}catch(m){return new Error(`entry at index "${u}" did not match expected shape: ${Ot(m)}`)}}).filter(ve).length===t.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${t.join(", ")}"`)})):ze(t)&&Kc(e,t,r,o)}function Ts({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const Ms="Failed to compare objects using JSON.stringify";function Es(e,t,n){return Ts({source:e,errorHandler(r){if(n)return"";throw r}})===Ts({source:t,errorHandler(r){if(n)return"";throw r}})}function it(e,t,n={}){try{return e===t?!0:ze(e)&&ze(t)?Es(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(o=>it(e[o],t[o])):!1:Es(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const o=Qc(r);throw o.message.startsWith(Ms)||(o.message=`${Ms}: ${o.message}`),o}}function Xc(e){return le(e).filter(t=>isNaN(Number(t)))}function _c(e){return Xc(e).map(n=>e[n])}function Wh(e,t){return _c(t).includes(e)}function eu(e,t){return le(e).filter(r=>{const o=e[r];return t(r,o,e)}).reduce((r,o)=>(r[o]=e[o],r),{})}function sr(e,t){return eu(e,n=>!t.includes(n))}function zh(e,t){return eu(e,n=>t.includes(n))}function Zh(e,t,n){const r=t;if(e.has(r))return e.get(r);{const o=n();return e.set(r,o),o}}function ke(e,t){let n=!1;const r=le(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(le(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function _i(e,t){try{return tu(e,t),!0}catch{return!1}}function tu(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Pa(){let e,t,n=!1;const r=new Promise((o,i)=>{e=a=>(n=!0,o(a)),t=a=>{n=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Pa.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function ea(e){const t=Pa();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Gh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const nu=Gh();function Yh({min:e,max:t}){const{min:n,max:r}=Rh({min:Math.floor(e),max:Math.floor(t)}),o=r-n+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do nu.getRandomValues(s),l=s.reduce((u,f,h)=>u+f*256**h,0);while(l>=a);return n+l%o}function ru(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return nu.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}function Qh({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Kh(e){const t=Object.entries(e).map(([n,r])=>{if(r!=null)return`${n}=${String(r)}`}).filter(ve);return t.length?`?${t.join("&")}`:""}function Jh(e){return Qh({value:e,prefix:"?"}).split("&").map(r=>{const[o,...i]=An(r,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(ve)}function Xh(e,t){const n=ee(e,"string")?new URL(e):e,r=Jh(n.search),o=Object.fromEntries(r);return t&&Kc(o,t),o}const _h="%",e1="px";function Vt(e){return Oa({value:e,suffix:e1})}function ai(e){return Oa({value:e,suffix:_h})}function Oa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const si="://";function lr(...e){const t=e.join("/"),[n,r=""]=t.includes(si)?t.split(si):["",t];let o=!1,i=!1;const a=r.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,u,f)=>{if(i)return s;const h=f[u+1];let m=l;const g=!l.includes("?")&&(h==null?void 0:h.startsWith("?"));if(h!=null&&h.startsWith("?")||g){i=!0;let w=!1;const k=f.slice(g?u+2:u+1).reduce((x,C)=>(C.includes("#")&&(w=!0),w?x.concat(C):[x,C].join("&")),"");m=[l,h,k].join("")}return s.concat(m)},[]);return[n,n?si:"",a.join("/")].join("")}const t1=["k","M","B","T","P","E","Z","Y"];function Da({beforeDot:e,afterDot:t="",maxLength:n}){if(t.length){const r=n-e.length-1;if(r>0){const o=t.slice(0,r);return Number(o)?[e,o].join("."):e}}return e}function n1(e,t,n){const[r,o]=An(e,"."),i=Gc(r),a=zc(i,/,/g).length,s=t[a-1],[l,u]=An(i,","),f=[u,o].join("");return l.length+1>n?["0.",l[0],t[a]].join(""):[Da({beforeDot:l,afterDot:f,maxLength:n-1}),s].join("")}const Is=3;function r1({input:e,maxLength:t}){const n=String(e),[r,o]=An(n,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,u]=An(r,"."),f=i.length+Is;return f===t?[l,s].join(""):f>t?a==="-"?"0":String(1/0):[Da({afterDot:u,beforeDot:l,maxLength:t-i.length+Is}),s].join("")}function o1(e,t){const[n,r]=An(Gc(e),".");if(n.length<=t)return Da({beforeDot:n,afterDot:r,maxLength:t})}function i1(e,{customSuffixes:t=t1,maxLength:n=6}={}){const r=Dh(e);if(isNaN(r)||r===1/0)return String(r);if(Nh(r))return r1({input:r,maxLength:n});const o=String(r),i=o1(o,n);return i??n1(o,t,n)}function a1(e,t){return Te(e,"entryType")&&e.entryType===t}var ye;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ye||(ye={}));function tn(e,t){return e.controlType===t}var j;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(j||(j={}));const ou=Symbol("any-type"),s1={[j.Checkbox]:!1,[j.Color]:"",[j.Dropdown]:"",[j.Hidden]:ou,[j.Number]:0,[j.Text]:""};function l1(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,o])=>{const i=s1[o.controlType];i!==ou&&(typeof i!=typeof o.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function Na(e,t){const n=mo(e.title);return e.parent?[...Na(e.parent,!1),mo(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function mo(e){return Zc(e).toLowerCase().replaceAll(/\s/g,"-")}function c1({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}function U(e){const t={...e,entryType:ye.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(r){const o={...r,entryType:ye.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(ve)};n.add(r.title),t.elementExamples[mo(o.title)]=o}}),t}var at;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(at||(at={}));async function ta(e=1){const t=Pa();function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}async function u1(e){return d1(e,1)}async function d1(e,t){return new Promise(n=>{new IntersectionObserver((o,i)=>{tu(o,1),i.disconnect(),n(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eo=globalThis,Ra=eo.ShadowRoot&&(eo.ShadyCSS===void 0||eo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fa=Symbol(),Bs=new WeakMap;let iu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Fa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ra&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Bs.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Bs.set(n,t))}return t}toString(){return this.cssText}};const T=e=>new iu(typeof e=="string"?e:e+"",void 0,Fa),to=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new iu(n,e,Fa)},h1=(e,t)=>{if(Ra)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=eo.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Ls=Ra?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return T(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:f1,defineProperty:p1,getOwnPropertyDescriptor:m1,getOwnPropertyNames:g1,getOwnPropertySymbols:w1,getPrototypeOf:v1}=Object,St=globalThis,qs=St.trustedTypes,b1=qs?qs.emptyScript:"",li=St.reactiveElementPolyfillSupport,Jn=(e,t)=>e,go={toAttribute(e,t){switch(t){case Boolean:e=e?b1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ja=(e,t)=>!f1(e,t),Ps={attribute:!0,type:String,converter:go,reflect:!1,hasChanged:ja};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),St.litPropertyMetadata??(St.litPropertyMetadata=new WeakMap);let un=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ps){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&p1(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=m1(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ps}static _$Ei(){if(this.hasOwnProperty(Jn("elementProperties")))return;const t=v1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Jn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jn("properties"))){const n=this.properties,r=[...g1(n),...w1(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Ls(o))}else t!==void 0&&n.push(Ls(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:go).toAttribute(n,r.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:go;this._$Em=o,this[o]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ja)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};un.elementStyles=[],un.shadowRootOptions={mode:"open"},un[Jn("elementProperties")]=new Map,un[Jn("finalized")]=new Map,li==null||li({ReactiveElement:un}),(St.reactiveElementVersions??(St.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn=globalThis,wo=Xn.trustedTypes,Os=wo?wo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ha="$lit$",ft=`lit$${(Math.random()+"").slice(9)}$`,Ua="?"+ft,y1=`<${Ua}>`,Kt=document,cr=()=>Kt.createComment(""),ur=e=>e===null||typeof e!="object"&&typeof e!="function",au=Array.isArray,su=e=>au(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ci=`[ 	
\f\r]`,Dn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ds=/-->/g,Ns=/>/g,Rt=RegExp(`>|${ci}(?:([^\\s"'>=/]+)(${ci}*=${ci}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rs=/'/g,Fs=/"/g,lu=/^(?:script|style|textarea|title)$/i,cu=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k1=cu(1),x1=cu(2),Pe=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),js=new WeakMap,Wt=Kt.createTreeWalker(Kt,129);function uu(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Os!==void 0?Os.createHTML(t):t}const du=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",a=Dn;for(let s=0;s<n;s++){const l=e[s];let u,f,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,f=a.exec(l),f!==null);)m=a.lastIndex,a===Dn?f[1]==="!--"?a=Ds:f[1]!==void 0?a=Ns:f[2]!==void 0?(lu.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Rt):f[3]!==void 0&&(a=Rt):a===Rt?f[0]===">"?(a=o??Dn,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,u=f[1],a=f[3]===void 0?Rt:f[3]==='"'?Fs:Rs):a===Fs||a===Rs?a=Rt:a===Ds||a===Ns?a=Dn:(a=Rt,o=void 0);const g=a===Rt&&e[s+1].startsWith("/>")?" ":"";i+=a===Dn?l+y1:h>=0?(r.push(u),l.slice(0,h)+Ha+l.slice(h)+ft+g):l+ft+(h===-2?s:g)}return[uu(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class dr{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[u,f]=du(t,n);if(this.el=dr.createElement(u,r),Wt.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Wt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Ha)){const m=f[a++],g=o.getAttribute(h).split(ft),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?fu:w[1]==="?"?pu:w[1]==="@"?mu:kr}),o.removeAttribute(h)}else h.startsWith(ft)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(lu.test(o.tagName)){const h=o.textContent.split(ft),m=h.length-1;if(m>0){o.textContent=wo?wo.emptyScript:"";for(let g=0;g<m;g++)o.append(h[g],cr()),Wt.nextNode(),l.push({type:2,index:++i});o.append(h[m],cr())}}}else if(o.nodeType===8)if(o.data===Ua)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(ft,h+1))!==-1;)l.push({type:7,index:i}),h+=ft.length-1}i++}}static createElement(t,n){const r=Kt.createElement("template");return r.innerHTML=t,r}}function Jt(e,t,n=e,r){var a,s;if(t===Pe)return t;let o=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const i=ur(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=Jt(e,o._$AS(e,t.values),o,r)),t}class hu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Kt).importNode(n,!0);Wt.currentNode=o;let i=Wt.nextNode(),a=0,s=0,l=r[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new En(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new gu(i,this,t)),this._$AV.push(u),l=r[++s]}a!==(l==null?void 0:l.index)&&(i=Wt.nextNode(),a++)}return Wt.currentNode=Kt,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class En{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Jt(this,t,n),ur(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==Pe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):su(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&ur(this._$AH)?this._$AA.nextSibling.data=t:this.T(Kt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=dr.createElement(uu(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const a=new hu(o,this),s=a.u(this.options);a.p(n),this.T(s),this._$AH=a}}_$AC(t){let n=js.get(t.strings);return n===void 0&&js.set(t.strings,n=new dr(t)),n}k(t){au(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new En(this.S(cr()),this.S(cr()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class kr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(t,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)t=Jt(this,t,n,0),a=!ur(t)||t!==this._$AH&&t!==Pe,a&&(this._$AH=t);else{const s=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=Jt(this,s[r+l],n,l),u===Pe&&(u=this._$AH[l]),a||(a=!ur(u)||u!==this._$AH[l]),u===_?t=_:t!==_&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!o&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fu extends kr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class pu extends kr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class mu extends kr{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Jt(this,t,n,0)??_)===Pe)return;const r=this._$AH,o=t===_&&r!==_||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==_&&(r===_||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class gu{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Jt(this,t)}}const A1={P:Ha,A:ft,C:Ua,M:1,L:du,R:hu,D:su,V:Jt,I:En,H:kr,N:pu,U:mu,B:fu,F:gu},ui=Xn.litHtmlPolyfillSupport;ui==null||ui(dr,En),(Xn.litHtmlVersions??(Xn.litHtmlVersions=[])).push("3.1.2");const $1=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new En(t.insertBefore(cr(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _n=class extends un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$1(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Pe}};var Vc;_n._$litElement$=!0,_n.finalized=!0,(Vc=globalThis.litElementHydrateSupport)==null||Vc.call(globalThis,{LitElement:_n});const di=globalThis.litElementPolyfillSupport;di==null||di({LitElement:_n});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:C1}=A1,Hs=()=>document.createComment(""),Nn=(e,t,n)=>{var i;const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=r.insertBefore(Hs(),o),s=r.insertBefore(Hs(),o);n=new C1(a,s,e,e.options)}else{const a=n._$AB.nextSibling,s=n._$AM,l=s!==e;if(l){let u;(i=n._$AQ)==null||i.call(n,e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(a!==o||l){let u=n._$AA;for(;u!==a;){const f=u.nextSibling;r.insertBefore(u,o),u=f}}}return n},Ft=(e,t,n=e)=>(e._$AI(t,n),e),S1={},T1=(e,t=S1)=>e._$AH=t,M1=e=>e._$AH,hi=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=e=>(...t)=>({_$litDirective$:e,values:t});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E1={attribute:!0,type:String,converter:go,reflect:!1,hasChanged:ja},I1=(e=E1,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(r==="setter"){const{name:a}=n;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function B1(e){return(t,n)=>typeof n=="object"?I1(e,t,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=Dt(class extends gt{constructor(e){var t;if(super(e),e.type!==xr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=e=>e??_;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class na extends gt{constructor(t){if(super(t),this.it=_,t.type!==xr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===_||t==null)return this._t=void 0,this.it=t;if(t===Pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}na.directiveName="unsafeHTML",na.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vs extends na{}Vs.directiveName="unsafeSVG",Vs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L1(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},q1=Dt(class extends gt{constructor(e){if(super(e),e.type!==xr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const o=[],i=[];let a=0;for(const s of e)o[a]=r?r(s,a):a,i[a]=n(s,a),a++;return{values:i,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const o=M1(e),{values:i,keys:a}=this.dt(t,n,r);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let u,f,h=0,m=o.length-1,g=0,w=i.length-1;for(;h<=m&&g<=w;)if(o[h]===null)h++;else if(o[m]===null)m--;else if(s[h]===a[g])l[g]=Ft(o[h],i[g]),h++,g++;else if(s[m]===a[w])l[w]=Ft(o[m],i[w]),m--,w--;else if(s[h]===a[w])l[w]=Ft(o[h],i[w]),Nn(e,l[w+1],o[h]),h++,w--;else if(s[m]===a[g])l[g]=Ft(o[m],i[g]),Nn(e,o[h],o[m]),m--,g++;else if(u===void 0&&(u=Ws(a,g,w),f=Ws(s,h,m)),u.has(s[h]))if(u.has(s[m])){const k=f.get(a[g]),x=k!==void 0?o[k]:null;if(x===null){const C=Nn(e,o[h]);Ft(C,i[g]),l[g]=C}else l[g]=Ft(x,i[g]),Nn(e,o[h],x),o[k]=null;g++}else hi(o[m]),m--;else hi(o[h]),h++;for(;g<=w;){const k=Nn(e,l[w+1]);Ft(k,i[g]),l[g++]=k}for(;h<=m;){const k=o[h++];k!==null&&hi(k)}return this.ut=a,T1(e,l),Pe}}),P1=q1;class wu extends _n{}function wt(e){if(ze(e))return ke(e,(n,r)=>{if(!ee(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(fo(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const i=r,a=n.startsWith("--")?T(n):n.startsWith("-")?to`-${T(n)}`:to`--${T(n)}`;return{name:a,value:to`var(${a}, ${T(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${wt.name}' function.`)}function vo({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function O1(e,t,n){const r=!t.length&&!n.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(r||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),n.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function no(e){return Te(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Va(e){return Te(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function vu(e){return e.map(t=>no(t)?t.definition:t).filter(t=>Va(t))}const bu=new WeakMap;function D1(e,t){var o;const n=vu(t);return(o=yu(bu,[e,...n]).value)==null?void 0:o.template}function N1(e,t,n){const r=vu(t);return xu(bu,[e,...r],n)}function yu(e,t,n=0){const{currentTemplateAndNested:r,reason:o}=ku(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?yu(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:o}}function ku(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const o=e.get(r);return o==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:o,reason:"key and value exists"}}function xu(e,t,n,r=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=ku(e,t,r);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),r===t.length-1)return s.template=n,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),xu(l,t,n,r+1)}const R1=new WeakMap;function Au(e,t,n){const r=D1(e,t),o=r??n();if(!r){const s=N1(e,t,o);if(s.result)R1.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=O1(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function $u(e,t,n,r){const o=[],i=[],a=[],s=[];return e.forEach((u,f)=>{const h=o.length-1,m=o[h],g=f-1,w=t[g];r&&r(u);let k,x=[];if(typeof m=="string"&&(k=n(m,u,w),k)){o[h]=m+k.replacement,a.push(g);const S=k.getExtraValues;x=S?S(w):[],x.length&&S?(o[h]+=" ",x.forEach((N,W)=>{W&&o.push(" ")}),s.push(N=>{const W=N[g],te=S(W);return{index:g,values:te}}),o.push(u)):o[h]+=u}k||o.push(u);const C=e.raw[f];k?(i[h]=i[h]+k.replacement+C,x.length&&x.forEach(()=>{i.push("")})):i.push(C)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(u){const f=s.map(h=>h(u)).flat();return{valueIndexDeletions:a,valueInsertions:f}}}}function F1(...[e,t,n]){if(Va(n))return{replacement:n.tagName,getExtraValues:void 0}}function j1(e,t){return $u(e,t,F1)}function p(e,...t){const n=Au(e,t,()=>j1(e,t));return to(n.strings,...n.values)}const H1={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Cu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof wu?!0:Cu(n)}function Su(e,t){const n=e.instanceState;le(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&le(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),U1(e)}function U1(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function zs(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class V1 extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Wa(){return e=>{var t;return t=class extends V1{constructor(n){super(e,n),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function oe(){return Wa()}function W1(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const o=Wa()([e,r].join("-"));return n[r]=o,n},{}):{}}const z1="_elementVirStateSetup";function Z1(e){return ze(e)?z1 in e:!1}function G1(e,t){const n=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return po(e)===po(t)&&n}const Tu="__vir__shape__definition__key__do__not__use__in__actual__objects";function Mu(e){return Te(e,Tu)}const za=Symbol("and"),Eu=Symbol("instance"),Iu=Symbol("enum"),Bu=Symbol("exact"),Za=Symbol("indexed-keys"),Ga=Symbol("or"),Ya=Symbol("unknown"),Y1=[za,Iu,Bu,Za,Eu,Ga,Ya],Lu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Q1(...e){return Uo(e,za)}function K1(...e){return Uo(e,Za)}function nt(...e){return Uo(e,Ga)}function J1(e){return Uo([e],Ya)}function Do(e){return _t(e,za)}function No(e){return _t(e,Eu)}function Ro(e){return _t(e,Iu)}function Fo(e){return _t(e,Bu)}function jo(e){return _t(e,Za)}function Ar(e){return _t(e,Ga)}function Ho(e){return _t(e,Ya)}function _t(e,t){const n=$r(e);return!!n&&n.specifierType===t}function Uo(e,t){return{[Lu]:!0,specifierType:t,parts:e}}function zt(e,t,n,r){const o=$r(t);if(o){if(No(o))return e instanceof o.parts[0];if(Do(o))return o.parts.every(i=>zt(e,i));if(Ar(o))return o.parts.some(i=>zt(e,i));if(Fo(o))return ze(e)?zt(e,o.parts[0]):e===o.parts[0];if(Ro(o))return Object.values(o.parts[0]).some(i=>i===e);if(jo(o))return ze(e)?X1(e,o,!!n)&&$h(e).every(i=>zt(i,o.parts[0].values)):!1;if(Ho(o))return!0}return r?t===e:G1(e,t)}function X1(e,t,n){const r=t.parts[0].required,o=t.parts[0].keys;if(n)if(r){const i=Qa(t);return ee(i,"boolean")?i:i.every(a=>le(e).some(s=>zt(s,a,!1,!0)))}else return!0;else return le(e).every(i=>zt(i,o))}function Qa(e){const t=e.parts[0].keys,n=$r(t);if(ii(t))return[t];if(n){if(No(n))return!1;if(Do(n))return!1;if(Ar(n)){const r=n.parts.map(i=>Qa(K1({...e.parts[0],keys:i})));let o;return r.forEach(i=>{ee(i,"boolean")&&(i&&o==null?o=!0:o=!1)}),ee(o,"boolean")?o:r.flat().filter(ii)}else if(Fo(n)){const r=n.parts.filter(ii);return r.length!==n.parts.length?!1:r}else{if(Ro(n))return Object.values(n.parts[0]);if(jo(n))return!1;if(Ho(n))return!0}}return!1}function $r(e){if(ze(e)&&Te(e,Lu)){if(!Te(e,"parts")||!ee(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Te(e,"specifierType")||!Th(Y1,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Zs extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function ra(e,t=!1){return Vn(e)}function Vn(e){const t=$r(e);if(t)if(No(t)){const n=t.parts[0];try{return new n}catch(r){throw new Zs(`Failed to create default value for classShape for class '${n.name}': ${Ot(r)}`)}}else{if(Ar(t)||Fo(t))return Vn(t.parts[0]);if(Do(t))return t.parts.reduce((n,r)=>Object.assign(n,Vn(r)),{});if(Ro(t))return Object.values(t.parts[0])[0];if(jo(t)){const n=Qa(t);return!t.parts[0].required||ee(n,"boolean")?{}:Object.fromEntries(n.map(r=>[r,Vn(t.parts[0].values)]))}else{if(Ho(t))return t.parts[0]??{};throw new Zs(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Mu(e)?ra(e.shape):e instanceof RegExp?e:ee(e,"array")?e.map(Vn):ze(e)?ke(e,(n,r)=>ra(r)):e}function Cr(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return ra(e)},[Tu]:!0}}class Re extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function _1(e,t,n={}){try{return qu(e,t,n),!0}catch{return!1}}function qu(e,t,n={}){dt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}function oa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function dt({subject:e,shape:t,keys:n,options:r}){if(Ho(t))return!0;if(Mu(t))return dt({subject:e,shape:t.shape,keys:n,options:r});const o=oa(n);if($r(e))throw new Re(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!zt(e,t,!r.ignoreExtraKeys))throw new Re(`Subject does not match shape definition at key ${o}`);if(ee(t,"function"))return ee(e,"function");if(No(t))return e instanceof t.parts[0];if(ze(e)){const a=e,s=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(f=>[f,!1])),l=[];let u=!1;if(Ar(t)){const f=[];u=t.parts.some(h=>{try{const m=dt({subject:e,shape:h,keys:n,options:{...r}});return Object.assign(s,m),!0}catch(m){if(m instanceof Re)return f.push(m),!1;throw m}}),!u&&_i(f,1)&&l.push(f[0])}else if(Do(t))u=t.parts.every(f=>{try{const h=dt({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(s,h),!0}catch(h){if(h instanceof Re)return l.push(h),!1;throw h}});else if(Fo(t)){const f=dt({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(s,f),u=!0}else{if(Ro(t))throw new Re(`Cannot compare an enum specifier to an object at ${o}`);if(ee(t,"array")&&ee(a,"array"))u=a.every((f,h)=>{const m=t.some(g=>{try{return dt({subject:f,shape:g,keys:[...n,h],options:r}),!0}catch(w){if(w instanceof Re)return l.push(w),!1;throw w}});return s[h]=m,m});else if(jo(t)){const f=ke(e,(h,m)=>(r.ignoreExtraKeys||dt({shape:t.parts[0].keys,subject:h,keys:[...n,h],options:r}),dt({shape:t.parts[0].values,subject:m,keys:[...n,h],options:r}),!0));Object.assign(s,f),u=!0}else{const f=ef({keys:n,options:r,shape:t,subject:e});Object.assign(s,f),u=!0}}if(l.length)throw new Re(jh(l));if(!u){const h=`Failed on key(s): ${Object.keys(s).filter(m=>!s[m]).map(m=>oa([...n,m])).join(",")}`;throw new Re(h)}return r.ignoreExtraKeys||Object.entries(s).forEach(([f,h])=>{if(!h)throw new Re(`subject as extra key '${f}' in ${o}.`)}),s}else if(r.exactValues)return e===t;return!0}function ef({keys:e,options:t,shape:n,subject:r}){const o=oa(e),i={};if(ze(n)){const a=new Set(le(r)),s=new Set(le(n));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Re(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const u=n[l],f=Ar(u)?u.parts.includes(void 0):!1,h=((m=u==null?void 0:u.includes)==null?void 0:m.call(u,void 0))||u===void 0;if(!a.has(l)&&!f&&!h)throw new Re(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const u=r[l];if(t.ignoreExtraKeys&&!s.has(l))return;const f=n[l];dt({subject:u,shape:f,keys:[...e,l],options:t}),i[l]=!0})}else throw new Re(`shape definition at ${o} was not an object.`);return i}const tf=Cr({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:J1()});function fi(e){return _1(e,tf,{allowExtraKeys:!0})}function Pu(e,t){t in e||B1()(e,t)}function nf(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Gs(e,t){const n=e;function r(a){t?nf(a,e,e.tagName):Pu(e,a)}function o(a,s){return r(s),n[s]}return new Proxy({},{get:o,set(a,s,l){const u=Z1(l)?l._elementVirStateSetup():l;r(s);const f=n[s];function h(w){a[s]=w,n[s]=w}const m=e.observablePropertyListenerMap[s];if(f!==u&&fi(f)&&(m!=null&&m.length)&&f.removeListener(m),fi(u))if(m)u.addListener(m);else{let w=function(){e.requestUpdate()};var g=w;e.observablePropertyListenerMap[s]=w,u.addListener(w)}else fi(f)&&(e.observablePropertyListenerMap[s]=void 0);return h(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function rf(e){return e?ke(e,t=>t):{}}function of({hostClassNames:e,cssVars:t}){return{hostClasses:ke(e,(n,r)=>({name:T(r),selector:T(`:host(.${r})`)})),cssVars:t}}function af({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:o}){t&&le(t).forEach(i=>{const a=t[i],s=n[i];typeof a=="function"&&(a({state:r,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function sf({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function o(a){le(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:n,slotNames:r,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function lf(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}var cf=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function Vo(e){var t;const n=e;if(!ee(n,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!ee(n.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!n.renderCallback||typeof n.renderCallback=="string")throw new Error(`Failed to define element '${n.tagName}': renderCallback is not a function`);const r={...H1,...n.options},o=W1(n.tagName,n.events),i=rf(n.hostClasses);n.hostClasses&&zs(n.tagName,n.hostClasses),n.cssVars&&zs(n.tagName,n.cssVars);const a=n.cssVars?wt(n.cssVars):{},s=lf(n.slotNames),l=typeof n.styles=="function"?n.styles(of({hostClassNames:i,cssVars:a})):n.styles||p``,u=n.renderCallback;function f(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:h,inputs:m}}const h=(t=class extends wu{createRenderParams(){return sf({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${n.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${n.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${n.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Cu(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${n.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Vo.name}' to define ${n.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&n.initCallback&&(this._initCalled=!0,n.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=u(m);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return af({host:m.host,hostClassesInit:n.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},g}catch(m){const g=Hh(m,`Failed to render ${n.tagName}`);return console.error(g),this._lastRenderError=g,Ot(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&n.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(n.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${n.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),n.cleanupCallback){const m=this.createRenderParams();if(n.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${n.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){Su(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Gs(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Gs(this,!r.allowPolymorphicState)});const m=n.stateInitStatic||{};le(m).forEach(g=>{Pu(this,g),this.instanceState[g]=m[g]}),this.definition=h}},cf(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:n.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:n.stateInitStatic}),t);return Object.defineProperties(h,{name:{value:qh(n.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof h,writable:!1}}),window.customElements.get(n.tagName)?console.warn(`Tried to define custom element '${n.tagName}' but it is already defined.`):window.customElements.define(n.tagName,h),h}function Ou(){return e=>{const t=e;if(!ee(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Vo({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Ka(e,t){return hr(e,t),e.element}function uf(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function hr(e,t){const n=uf(e),r=n?`: in ${n}`:"";if(e.type!==xr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function df(e){const t=Dt(class extends gt{constructor(n){super(n),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ka(n,e)}render(n){return this.element.setAttribute(e,n),Pe}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function y(e,t){return hf(e,t)}const hf=Dt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ka(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),Pe}}),Ys="onDomCreated",ia=Dt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),hr(e,Ys)}update(e,[t]){hr(e,Ys);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),pi="onResize",$n=Dt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),hr(e,pi)}fireCallback(e){var n;const t=e[0];if(!t)throw console.error(e),new Error(`${pi} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){hr(e,pi),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function we(e,t,n){return L1(e,()=>t,()=>n)}const{attributeDirective:ff,attributeSelector:Bv,attributeName:Lv}=df("data-test-id");function pf(e){return{_elementVirStateSetup:e}}function Ja(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),Ou()(n(r))),defineElementNoInputs:r=>(t(r),Vo(n(r)))}}function mf(e,t){return t?Qs(e,t):Qs(void 0,e)}const Qs=Dt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ka(e,"assign")}render(e,t){return Su(this.element,t),Pe}});function gf(...[e,t,n]){const r=no(n)?n.definition:n,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Va(r);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!r.elementOptions.ignoreUnsetInputs&&!no(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const f=no(u)?u.inputs:void 0;return[o&&f?mf(f):void 0].filter(ve)}}}function wf(e){}function vf(e){return $u(e.strings,e.values,gf,wf)}function c(e,...t){const n=k1(e,...t),r=Au(e,t,()=>vf(n));return{...n,strings:r.strings,values:r.values}}const bf={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},yf=Object.keys(bf),kf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...yf,...kf];function Wn(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}const xf={[ye.ElementExample]:()=>[],[ye.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...l1(e.controls,e.title)].filter(ve),[ye.Root]:()=>[]},bo="_isBookTreeNode",Du=new Map;function Af(e){return Du.get(e)}function $f(e,t){Zh(Du,e,()=>t)}function vn(e,t){return!!(Nu(e)&&e.entry.entryType===t)}function Nu(e){return!!(Wc(e,[bo,"entry"])&&e[bo])}function Cf(){return{[bo]:!0,entry:{entryType:ye.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Sf({entries:e,debug:t}){const n=Af(e);if(n)return n;const r=Cf();e.forEach(a=>Xa({tree:r,newEntry:a,debug:t,manuallyAdded:!0}));const o=Ru(r),i={tree:r,flattenedNodes:o};return $f(e,i),t&&console.info("element-book tree:",r),i}function Tf(e,t,n){if(!t.parent)return e;const r=aa(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Xa({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const o=aa(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Na(t,!1)}`);return o}function Xa({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const o=xf[t.entryType](t);t.errors.push(...o);const i=Tf(e,t,n),a=mo(t.title),s=i.children[a];if(s){if(r){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[bo]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:r};i.children[a]=l,a1(t,ye.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(u=>Xa({tree:e,newEntry:u,debug:n,manuallyAdded:r}))}function aa(e,t){const n=Nu(e)?e.fullUrlBreadcrumbs.slice(0,-1):Na(e,!1);return n.length?n.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Ru(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ru(o));return[e,...n].flat()}function _a(e,t){return es(e,["",...t],void 0)}function es(e,t,n){const r=t.slice(1),o=r[0];!o&&n&&(e.controls=n);const i=e.children[o||""],a=i&&es(i,r,n);return{...e.controls,...a}}function Mf(e,t,n){const r={...e};return es(r,["",...t],n),r}function Fu(e,t){const n=(t==null?void 0:t.controls)||(vn(e,ye.Page)?ke(e.entry.controls,(o,i)=>i.initValue):{});return{children:ke(e.children,(o,i)=>{var a;return Fu(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:n}}function Ef({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<r;a++){const l=i.charCodeAt(a);for(;s<n;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const If=ru(32);function ro(e){return e.join(If)}function ju(e){if(!e.length)return[];const t=ro(e),n=ju(e.slice(0,-1));return[t,...n]}const Bf=["error","errors"];function Lf(e){return Bf.includes(e)}function qf({flattenedNodes:e,searchQuery:t}){const n={};function r(o){Object.values(o.children).map(a=>(r(a),ro(a.fullUrlBreadcrumbs))).forEach(a=>n[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Lf(t),a=ro(o.fullUrlBreadcrumbs);if(Ef({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){const l=ju(o.fullUrlBreadcrumbs);r(o),l.forEach(u=>n[u]=!0)}else n[a]=!1}),e.filter(o=>{const i=ro(o.fullUrlBreadcrumbs),a=n[i];if(!ee(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var Se;(function(e){e.Search="search",e.Book="book"})(Se||(Se={}));function sa(e){return e[0]===Se.Book?"":e[1]?decodeURIComponent(e[1]):""}const Cn={hash:void 0,paths:[Se.Book],search:void 0},Pf=0;function Wo(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Pf)}class zo extends Error{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class Ks extends zo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const fr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Of=globalThis.history.pushState;function Js(...e){const t=Of.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(fr)),t}const Df=globalThis.history.replaceState;function Xs(...e){const t=Df.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(fr)),t}function Nf(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Js)throw new Ks("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Xs)throw new Ks("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Js,globalThis.history.replaceState=Xs,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(fr))})}}function Rf(e){const t=`/${e}`,r=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?Xh(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:r,search:o,hash:i}}function Hu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Uu({routeBase:e,windowPath:t}){if(!e)return"";const n=Hu(e);if(Vu({routeBase:n,windowPath:t}))return n;const r=n.replace(/^[^\/]+\//,"");return r&&r!==n?Uu({routeBase:r,windowPath:t}):""}function Vu({routeBase:e,windowPath:t}){const n=Hu(e);return n?t.startsWith(`/${n}`):!1}class Ff extends zo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function Wu(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const _s=6;function el(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>_s)throw new Ff(`Route sanitization depth has exceed the max of ${_s} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(Wu(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(o=>{o(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class mi extends zo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function jf(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new mi(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new mi(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new mi(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Hf(e,t,n=!1){const r=zu(e,t);n?globalThis.history.replaceState(void 0,"",r):globalThis.history.pushState(void 0,"",r)}function zu(e,t){var s;const n=Vu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",r=e.search?Kh(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[n,...e.paths].filter(ve).join("/")}${r}${i}`}function Uf(e={}){jf(e),Nf();const t=e.routeBase?Uu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let n=!1;const r=()=>el(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),u={...l,...i},f=o.sanitizeFullRoute(u);if(!(!s&&Wu(l,f)))return Hf(f,t,a)},createRoutesUrl(i){return zu(i,t)},getCurrentRawRoutes(){return Rf(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new zo(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),n||(globalThis.addEventListener(fr,r),n=!0),i&&el(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(fr,r),n=!1),a},sanitizationDepth:0};return o}function Vf(e){return Uf({routeBase:e,routeSanitizer(t){return{paths:Wf(t.paths),hash:void 0,search:void 0}}})}function Wf(e){const t=e[0];if(Wh(t,Se)){if(t===Se.Book)return[Se.Book,...e.slice(1)];if(t===Se.Search)return e[1]?[t,e[1]]:[Se.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Cn.paths}const Z=wt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),zf={nav:{hover:{background:Z["element-book-nav-hover-background-color"],foreground:Z["element-book-nav-hover-foreground-color"]},active:{background:Z["element-book-nav-active-background-color"],foreground:Z["element-book-nav-active-foreground-color"]},selected:{background:Z["element-book-nav-selected-background-color"],foreground:Z["element-book-nav-selected-foreground-color"]}},accent:{icon:Z["element-book-accent-icon-color"]},page:{background:Z["element-book-page-background-color"],backgroundFaint1:Z["element-book-page-background-faint-level-1-color"],backgroundFaint2:Z["element-book-page-background-faint-level-2-color"],foreground:Z["element-book-page-foreground-color"],foregroundFaint1:Z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Z["element-book-page-foreground-faint-level-2-color"]}};function Zf(e,t){Zu(e,t,zf)}function la(e){return Te(e,"_$cssResult$")}function tl(e){return Wc(e,["name","value","default"])&&ee(e.default,"string")&&la(e.name)&&la(e.value)}function Zu(e,t,n){Object.entries(t).forEach(([r,o])=>{const i=n[r];if(!i)throw new Error(`no nestedCssVar at key '${r}'`);if(la(o)){if(!tl(i))throw new Error(`got a CSS result at '${r}' but no CSS var`);vo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(tl(i))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);Zu(e,o,i)}})}function me(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let r=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let u of s)l+=a*u;return l}for(let u=0;u<a.length;u++)l+=a[u]*(s[u]||0);return l}));return n===1&&(i=i[0]),r===1?i.map(a=>a[0]):i}function Sr(e){return Tt(e)==="string"}function Tt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function yo(e,t){e=+e,t=+t;let n=(Math.floor(e)+"").length;if(t>n)return+e.toFixed(t-n);{let r=10**(n-t);return Math.round(e/r)*r}}function Gu(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/;let r=e.match(t);if(r){let o=[];return r[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):n.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:o}}}function Yu(e){return e[e.length-1]}function ko(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Qu(e,t,n){return(n-e)/(t-e)}function ts(e,t,n){return ko(t[0],t[1],Qu(e[0],e[1],n))}function Ku(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let o=new String(r[1]);return o.range=[+r[2],+r[3]],o}return n}))}var Gf=Object.freeze({__proto__:null,interpolate:ko,interpolateInv:Qu,isString:Sr,last:Yu,mapRange:ts,multiplyMatrices:me,parseCoordGrammar:Ku,parseFunction:Gu,toPrecision:yo,type:Tt});class Yf{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],n&&this[o][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const It=new Yf;var st={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const _e={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function ca(e){return Array.isArray(e)?e:_e[e]}function xo(e,t,n,r={}){if(e=ca(e),t=ca(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let o={W1:e,W2:t,XYZ:n,options:r};if(It.run("chromatic-adaptation-start",o),o.M||(o.W1===_e.D65&&o.W2===_e.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===_e.D50&&o.W2===_e.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),It.run("chromatic-adaptation-end",o),o.M)return me(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Qf=75e-6,Be=class Be{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Be.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let s in n)"name"in n[s]||(n[s].name=s);this.coords=n;let r=t.white??this.base.white??"D65";this.white=ca(r),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Kf(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),It.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=Qf}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((o,i)=>{let a=r[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-n)&&(l===void 0||o<=l+n)}return!0})}get cssId(){var t,n;return((n=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:n.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=nl(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=nl(n,this),n):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,n){if(arguments.length===1&&([t,n]=[t.space,t.coords]),t=Be.get(t),this.equals(t))return n;n=n.map(s=>Number.isNaN(s)?0:s);let r=this.path,o=t.path,i,a;for(let s=0;s<r.length&&r[s].equals(o[s]);s++)i=r[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=r.length-1;s>a;s--)n=r[s].toBase(n);for(let s=a+1;s<o.length;s++)n=o[s].fromBase(n);return n}from(t,n){return arguments.length===1&&([t,n]=[t.space,t.coords]),t=Be.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],o=r.range||r.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Be.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof Be)return t;if(Tt(t)==="string"){let o=Be.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(n.length)return Be.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){var l;let r=Tt(t),o,i;if(r==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Be.get(o),o||(o=n),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Tt(i),r==="number"||r==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=Be.get(o);let a=i.toLowerCase(),s=0;for(let u in o.coords){let f=o.coords[u];if(u.toLowerCase()===a||((l=f.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:u,index:s,...f};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Pr(Be,"registry",{}),Pr(Be,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Be;function Kf(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function nl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ku(e.coords);let n=Object.entries(t).map(([r,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,u="";return a=="<percentage>"?(l=[0,100],u="%"):a=="<angle>"&&(u="deg"),{fromRange:s,toRange:l,suffix:u}});e.serializeCoords=(r,o)=>r.map((i,a)=>{let{fromRange:s,toRange:l,suffix:u}=n[a];return s&&l&&(i=ts(s,l,i)),i=yo(i,o),u&&(i+=u),i})}return e}var Ve=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Me extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ve),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=n=>{let r=me(t.toXYZ_M,n);return this.white!==this.base.white&&(r=xo(this.white,this.base.white,r)),r}),t.fromBase??(t.fromBase=n=>(n=xo(this.base.white,this.white,n),me(t.fromXYZ_M,n)))),t.referred??(t.referred="display"),super(t)}}function Ju(e,{meta:t}={}){var r,o,i,a,s;let n={str:(r=String(e))==null?void 0:r.trim()};if(It.run("parse-start",n),n.color)return n.color;if(n.parsed=Gu(n.str),n.parsed){let l=n.parsed.name;if(l==="color"){let u=n.parsed.args.shift(),f=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let m of M.all){let g=m.getFormat("color");if(g&&(u===g.id||(o=g.ids)!=null&&o.includes(u))){const w=Object.keys(m.coords).map((k,x)=>n.parsed.args[x]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:w,alpha:f}}}let h="";if(u in M.registry){let m=(s=(a=(i=M.registry[u].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(h=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${u}). `+(h||"Missing a plugin?"))}else for(let u of M.all){let f=u.getFormat(l);if(f&&f.type==="function"){let h=1;(f.lastAlpha||Yu(n.parsed.args).alpha)&&(h=n.parsed.args.pop());let m=n.parsed.args,g;return f.coordGrammar&&(g=Object.entries(u.coords).map(([w,k],x)=>{var fe;let C=f.coordGrammar[x],S=(fe=m[x])==null?void 0:fe.type,N=C.find(X=>X==S);if(!N){let X=k.name||w;throw new TypeError(`${S} not allowed for ${X} in ${l}()`)}let W=N.range;S==="<percentage>"&&(W||(W=[0,1]));let te=k.range||k.refRange;return W&&te&&(m[x]=ts(W,te,m[x])),N})),t&&Object.assign(t,{formatId:f.name,types:g}),{spaceId:u.id,coords:m,alpha:h}}}}else for(let l of M.all)for(let u in l.formats){let f=l.formats[u];if(f.type!=="custom"||f.test&&!f.test(n.str))continue;let h=f.parse(n.str);if(h)return h.alpha??(h.alpha=1),t&&(t.formatId=u),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Y(e){if(!e)throw new TypeError("Empty color reference");Sr(e)&&(e=Ju(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Tr(e,t){return t=M.get(t),t.from(e)}function We(e,t){let{space:n,index:r}=M.resolveCoord(t,e.space);return Tr(e,n)[r]}function Xu(e,t,n){return t=M.get(t),e.coords=t.to(e.space,n),e}function Bt(e,t,n){if(e=Y(e),arguments.length===2&&Tt(arguments[1])==="object"){let r=arguments[1];for(let o in r)Bt(e,o,r[o])}else{typeof n=="function"&&(n=n(We(e,t)));let{space:r,index:o}=M.resolveCoord(t,e.space),i=Tr(e,r);i[o]=n,Xu(e,r,i)}return e}var ns=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ve,fromBase:e=>xo(Ve.white,"D50",e),toBase:e=>xo("D50",Ve.white,e),formats:{color:{}}});const Jf=216/24389,rl=24/116,Or=24389/27;let gi=_e.D50;var Le=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gi,base:ns,fromBase(e){let n=e.map((r,o)=>r/gi[o]).map(r=>r>Jf?Math.cbrt(r):(Or*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>rl?Math.pow(t[0],3):(116*t[0]-16)/Or,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Or,t[2]>rl?Math.pow(t[2],3):(116*t[2]-16)/Or].map((r,o)=>r*gi[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Zo(e){return(e%360+360)%360}function Xf(e,t){if(e==="raw")return t;let[n,r]=t.map(Zo),o=r-n;return e==="increasing"?o<0&&(r+=360):e==="decreasing"?o>0&&(n+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var pr=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Le,fromBase(e){let[t,n,r]=e,o;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Zo(o)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ol=25**7,Ao=Math.PI,il=180/Ao,nn=Ao/180;function ua(e,t,{kL:n=1,kC:r=1,kH:o=1}={}){let[i,a,s]=Le.from(e),l=pr.from(Le,[i,a,s])[1],[u,f,h]=Le.from(t),m=pr.from(Le,[u,f,h])[1];l<0&&(l=0),m<0&&(m=0);let w=((l+m)/2)**7,k=.5*(1-Math.sqrt(w/(w+ol))),x=(1+k)*a,C=(1+k)*f,S=Math.sqrt(x**2+s**2),N=Math.sqrt(C**2+h**2),W=x===0&&s===0?0:Math.atan2(s,x),te=C===0&&h===0?0:Math.atan2(h,C);W<0&&(W+=2*Ao),te<0&&(te+=2*Ao),W*=il,te*=il;let fe=u-i,X=N-S,V=te-W,ne=W+te,$e=Math.abs(V),be;S*N===0?be=0:$e<=180?be=V:V>180?be=V-360:V<-180?be=V+360:console.log("the unthinkable has happened");let lt=2*Math.sqrt(N*S)*Math.sin(be*nn/2),vt=(i+u)/2,oi=(S+N)/2,xs=Math.pow(oi,7),ct;S*N===0?ct=ne:$e<=180?ct=ne/2:ne<360?ct=(ne+360)/2:ct=(ne-360)/2;let As=(vt-50)**2,wh=1+.015*As/Math.sqrt(20+As),$s=1+.045*oi,On=1;On-=.17*Math.cos((ct-30)*nn),On+=.24*Math.cos(2*ct*nn),On+=.32*Math.cos((3*ct+6)*nn),On-=.2*Math.cos((4*ct-63)*nn);let Cs=1+.015*oi*On,vh=30*Math.exp(-1*((ct-275)/25)**2),bh=2*Math.sqrt(xs/(xs+ol)),yh=-1*Math.sin(2*vh*nn)*bh,qr=(fe/(n*wh))**2;return qr+=(X/(r*$s))**2,qr+=(lt/(o*Cs))**2,qr+=yh*(X/(r*$s))*(lt/(o*Cs)),Math.sqrt(qr)}const _f=75e-6;function er(e,t=e.space,{epsilon:n=_f}={}){e=Y(e),t=M.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function mr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Lt(e,{method:t=st.gamut_mapping,space:n=e.space}={}){if(Sr(arguments[1])&&(n=arguments[1]),n=M.get(n),er(e,n,{epsilon:0}))return Y(e);let r=je(e,n);if(t!=="clip"&&!er(e,n)){let o=Lt(mr(r),{method:"clip",space:n});if(ua(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=je(r,a),f=(i.range||i.refRange)[0],h=.01,m=f,g=We(l,s);for(;g-m>h;){let w=mr(l);w=Lt(w,{space:n,method:"clip"}),ua(l,w)-2<h?m=We(l,s):g=We(l,s),Bt(l,s,(m+g)/2)}r=je(l,n)}else r=o}if(t==="clip"||!er(r,n,{epsilon:0})){let o=Object.values(n.coords).map(i=>i.range||[]);r.coords=r.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return n!==e.space&&(r=je(r,e.space)),e.coords=r.coords,e}Lt.returns="color";function je(e,t,{inGamut:n}={}){e=Y(e),t=M.get(t);let r=t.from(e),o={space:t,coords:r,alpha:e.alpha};return n&&(o=Lt(o)),o}je.returns="color";function $o(e,{precision:t=st.precision,format:n="default",inGamut:r=!0,...o}={}){var l;let i;e=Y(e);let a=n;n=e.space.getFormat(n)??e.space.getFormat("default")??M.DEFAULT_FORMAT,r||(r=n.toGamut);let s=e.coords;if(s=s.map(u=>u||0),r&&!er(e)&&(s=Lt(mr(e),r===!0?void 0:r).coords),n.type==="custom")if(o.precision=t,n.serialize)i=n.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?s=n.serializeCoords(s,t):t!==null&&(s=s.map(g=>yo(g,t)));let f=[...s];if(u==="color"){let g=n.id||((l=n.ids)==null?void 0:l[0])||e.space.id;f.unshift(g)}let h=e.alpha;t!==null&&(h=yo(h,t));let m=e.alpha<1&&!n.noAlpha?`${n.commas?",":" /"} ${h}`:"";i=`${u}(${f.join(n.commas?", ":" ")}${m})`}return i}const e2=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],t2=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Go=new Me({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:e2,fromXYZ_M:t2,formats:{color:{}}});const Dr=1.09929682680944,al=.018053968510807;var _u=new Me({id:"rec2020",name:"REC.2020",base:Go,toBase(e){return e.map(function(t){return t<al*4.5?t/4.5:Math.pow((t+Dr-1)/Dr,1/.45)})},fromBase(e){return e.map(function(t){return t>=al?Dr*Math.pow(t,.45)-(Dr-1):4.5*t})},formats:{color:{}}});const n2=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],r2=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ed=new Me({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:n2,fromXYZ_M:r2});const o2=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],i2=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var td=new Me({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:o2,fromXYZ_M:i2,formats:{color:{}}}),sl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ll=Array(3).fill("<percentage> | <number>[0, 255]"),cl=Array(3).fill("<number>[0, 255]");var gr=new Me({id:"srgb",name:"sRGB",base:td,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:ll},rgb_number:{name:"rgb",commas:!0,coords:cl,noAlpha:!0},color:{},rgba:{coords:ll,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:cl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let r=n&&e.every(i=>i%17===0);return"#"+e.map(i=>r?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=sl.black,t.alpha=0):t.coords=sl[e],t.coords)return t}}}}),nd=new Me({id:"p3",name:"P3",base:ed,fromBase:gr.fromBase,toBase:gr.toBase,formats:{color:{id:"display-p3"}}});st.display_space=gr;if(typeof CSS<"u"&&CSS.supports)for(let e of[Le,_u,nd]){let t=e.getMinCoords(),r=$o({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){st.display_space=e;break}}function a2(e,{space:t=st.display_space,...n}={}){let r=$o(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!st.display_space)r=new String(r),r.color=e;else{let o=je(e,t);r=new String($o(o,n)),r.color=o}return r}function rd(e,t,n="lab"){n=M.get(n);let r=n.from(e),o=n.from(t);return Math.sqrt(r.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function s2(e,t){return e=Y(e),t=Y(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function qt(e){return We(e,[Ve,"y"])}function od(e,t){Bt(e,[Ve,"y"],t)}function l2(e){Object.defineProperty(e.prototype,"luminance",{get(){return qt(this)},set(t){od(this,t)}})}var c2=Object.freeze({__proto__:null,getLuminance:qt,register:l2,setLuminance:od});function u2(e,t){e=Y(e),t=Y(t);let n=Math.max(qt(e),0),r=Math.max(qt(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const d2=.56,h2=.57,f2=.62,p2=.65,ul=.022,m2=1.414,g2=.1,w2=5e-4,v2=1.14,dl=.027,b2=1.14;function hl(e){return e>=ul?e:e+(ul-e)**m2}function rn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function y2(e,t){t=Y(t),e=Y(e);let n,r,o,i,a,s;t=je(t,"srgb"),[i,a,s]=t.coords;let l=rn(i)*.2126729+rn(a)*.7151522+rn(s)*.072175;e=je(e,"srgb"),[i,a,s]=e.coords;let u=rn(i)*.2126729+rn(a)*.7151522+rn(s)*.072175,f=hl(l),h=hl(u),m=h>f;return Math.abs(h-f)<w2?r=0:m?(n=h**d2-f**h2,r=n*v2):(n=h**p2-f**f2,r=n*b2),Math.abs(r)<g2?o=0:r>0?o=r-dl:o=r+dl,o*100}function k2(e,t){e=Y(e),t=Y(t);let n=Math.max(qt(e),0),r=Math.max(qt(t),0);r>n&&([n,r]=[r,n]);let o=n+r;return o===0?0:(n-r)/o}const x2=5e4;function A2(e,t){e=Y(e),t=Y(t);let n=Math.max(qt(e),0),r=Math.max(qt(t),0);return r>n&&([n,r]=[r,n]),r===0?x2:(n-r)/r}function $2(e,t){e=Y(e),t=Y(t);let n=We(e,[Le,"l"]),r=We(t,[Le,"l"]);return Math.abs(n-r)}const C2=216/24389,fl=24/116,Nr=24389/27;let wi=_e.D65;var da=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:wi,base:Ve,fromBase(e){let n=e.map((r,o)=>r/wi[o]).map(r=>r>C2?Math.cbrt(r):(Nr*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fl?Math.pow(t[0],3):(116*t[0]-16)/Nr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Nr,t[2]>fl?Math.pow(t[2],3):(116*t[2]-16)/Nr].map((r,o)=>r*wi[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const vi=Math.pow(5,.5)*.5+.5;function S2(e,t){e=Y(e),t=Y(t);let n=We(e,[da,"l"]),r=We(t,[da,"l"]),o=Math.abs(Math.pow(n,vi)-Math.pow(r,vi)),i=Math.pow(o,1/vi)*Math.SQRT2-40;return i<7.5?0:i}var oo=Object.freeze({__proto__:null,contrastAPCA:y2,contrastDeltaPhi:S2,contrastLstar:$2,contrastMichelson:k2,contrastWCAG21:u2,contrastWeber:A2});function T2(e,t,n={}){Sr(n)&&(n={algorithm:n});let{algorithm:r,...o}=n;if(!r){let i=Object.keys(oo).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=Y(e),t=Y(t);for(let i in oo)if("contrast"+r.toLowerCase()===i.toLowerCase())return oo[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function id(e){let[t,n,r]=Tr(e,Ve),o=t+15*n+3*r;return[4*t/o,9*n/o]}function ad(e){let[t,n,r]=Tr(e,Ve),o=t+n+r;return[t/o,n/o]}function M2(e){Object.defineProperty(e.prototype,"uv",{get(){return id(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ad(this)}})}var E2=Object.freeze({__proto__:null,register:M2,uv:id,xy:ad});function I2(e,t){return rd(e,t,"lab")}const B2=Math.PI,pl=B2/180;function L2(e,t,{l:n=2,c:r=1}={}){let[o,i,a]=Le.from(e),[,s,l]=pr.from(Le,[o,i,a]),[u,f,h]=Le.from(t),m=pr.from(Le,[u,f,h])[1];s<0&&(s=0),m<0&&(m=0);let g=o-u,w=s-m,k=i-f,x=a-h,C=k**2+x**2-w**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let N=.0638*s/(1+.0131*s)+.638,W;Number.isNaN(l)&&(l=0),l>=164&&l<=345?W=.56+Math.abs(.2*Math.cos((l+168)*pl)):W=.36+Math.abs(.4*Math.cos((l+35)*pl));let te=Math.pow(s,4),fe=Math.sqrt(te/(te+1900)),X=N*(fe*W+1-fe),V=(g/(n*S))**2;return V+=(w/(r*N))**2,V+=C/X**2,Math.sqrt(V)}const ml=203;var rs=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ve,fromBase(e){return e.map(t=>Math.max(t*ml,0))},toBase(e){return e.map(t=>Math.max(t/ml,0))}});const Rr=1.15,Fr=.66,gl=2610/2**14,q2=2**14/2610,wl=3424/2**12,vl=2413/2**7,bl=2392/2**7,P2=1.7*2523/2**5,yl=2**5/(1.7*2523),jr=-.56,bi=16295499532821565e-27,O2=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],D2=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],N2=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],R2=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var sd=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:rs,fromBase(e){let[t,n,r]=e,o=Rr*t-(Rr-1)*r,i=Fr*n-(Fr-1)*t,s=me(O2,[o,i,r]).map(function(m){let g=wl+vl*(m/1e4)**gl,w=1+bl*(m/1e4)**gl;return(g/w)**P2}),[l,u,f]=me(N2,s);return[(1+jr)*l/(1+jr*l)-bi,u,f]},toBase(e){let[t,n,r]=e,o=(t+bi)/(1+jr-jr*(t+bi)),a=me(R2,[o,n,r]).map(function(m){let g=wl-m**yl,w=bl*m**yl-vl;return 1e4*(g/w)**q2}),[s,l,u]=me(D2,a),f=(s+(Rr-1)*u)/Rr,h=(l+(Fr-1)*f)/Fr;return[f,h,u]},formats:{color:{}}}),ha=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:sd,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Zo(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function F2(e,t){let[n,r,o]=ha.from(e),[i,a,s]=ha.from(t),l=n-i,u=r-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let f=o-s,h=2*Math.sqrt(r*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(l**2+u**2+h**2)}const ld=3424/4096,cd=2413/128,ud=2392/128,kl=2610/16384,j2=2523/32,H2=16384/2610,xl=32/2523,U2=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],V2=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],W2=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],z2=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var fa=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:rs,fromBase(e){let t=me(U2,e);return Z2(t)},toBase(e){let t=G2(e);return me(z2,t)},formats:{color:{}}});function Z2(e){let t=e.map(function(n){let r=ld+cd*(n/1e4)**kl,o=1+ud*(n/1e4)**kl;return(r/o)**j2});return me(V2,t)}function G2(e){return me(W2,e).map(function(r){let o=Math.max(r**xl-ld,0),i=cd-ud*r**xl;return 1e4*(o/i)**H2})}function Y2(e,t){let[n,r,o]=fa.from(e),[i,a,s]=fa.from(t);return 720*Math.sqrt((n-i)**2+.25*(r-a)**2+(o-s)**2)}const Q2=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],K2=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],J2=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],X2=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Co=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ve,fromBase(e){let n=me(Q2,e).map(r=>Math.cbrt(r));return me(J2,n)},toBase(e){let n=me(X2,e).map(r=>r**3);return me(K2,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function _2(e,t){let[n,r,o]=Co.from(e),[i,a,s]=Co.from(t),l=n-i,u=r-a,f=o-s;return Math.sqrt(l**2+u**2+f**2)}var So={deltaE76:I2,deltaECMC:L2,deltaE2000:ua,deltaEJz:F2,deltaEITP:Y2,deltaEOK:_2};function zn(e,t,n={}){Sr(n)&&(n={method:n});let{method:r=st.deltaE,...o}=n;e=Y(e),t=Y(t);for(let i in So)if("deltae"+r.toLowerCase()===i.toLowerCase())return So[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${r}`)}function ep(e,t=.25){let r=[M.get("oklch","lch"),"l"];return Bt(e,r,o=>o*(1+t))}function tp(e,t=.25){let r=[M.get("oklch","lch"),"l"];return Bt(e,r,o=>o*(1-t))}var np=Object.freeze({__proto__:null,darken:tp,lighten:ep});function dd(e,t,n=.5,r={}){[e,t]=[Y(e),Y(t)],Tt(n)==="object"&&([n,r]=[.5,n]);let{space:o,outputSpace:i,premultiplied:a}=r;return Mr(e,t,{space:o,outputSpace:i,premultiplied:a})(n)}function hd(e,t,n={}){let r;os(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=n;r||([e,t]=[Y(e),Y(t)],r=Mr(e,t,l));let u=zn(e,t),f=o>0?Math.max(a,Math.ceil(u/o)+1):a,h=[];if(s!==void 0&&(f=Math.min(f,s)),f===1)h=[{p:.5,color:r(.5)}];else{let m=1/(f-1);h=Array.from({length:f},(g,w)=>{let k=w*m;return{p:k,color:r(k)}})}if(o>0){let m=h.reduce((g,w,k)=>{if(k===0)return 0;let x=zn(w.color,h[k-1].color,i);return Math.max(g,x)},0);for(;m>o;){m=0;for(let g=1;g<h.length&&h.length<s;g++){let w=h[g-1],k=h[g],x=(k.p+w.p)/2,C=r(x);m=Math.max(m,zn(C,w.color),zn(C,k.color)),h.splice(g,0,{p:x,color:r(x)}),g++}}}return h=h.map(m=>m.color),h}function Mr(e,t,n={}){if(os(e)){let[l,u]=[e,t];return Mr(...l.rangeArgs.colors,{...l.rangeArgs.options,...u})}let{space:r,outputSpace:o,progression:i,premultiplied:a}=n;e=Y(e),t=Y(t),e=mr(e),t=mr(t);let s={colors:[e,t],options:n};if(r?r=M.get(r):r=M.registry[st.interpolationSpace]||e.space,o=o?M.get(o):r,e=je(e,r),t=je(t,r),e=Lt(e),t=Lt(t),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",u=[r,"h"],[f,h]=[We(e,u),We(t,u)];[f,h]=Xf(l,[f,h]),Bt(e,u,f),Bt(t,u,h)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let u=e.coords.map((m,g)=>{let w=t.coords[g];return ko(m,w,l)}),f=ko(e.alpha,t.alpha,l),h={space:r,coords:u,alpha:f};return a&&(h.coords=h.coords.map(m=>m/f)),o!==r&&(h=je(h,o)),h},{rangeArgs:s})}function os(e){return Tt(e)==="function"&&!!e.rangeArgs}st.interpolationSpace="lab";function rp(e){e.defineFunction("mix",dd,{returns:"color"}),e.defineFunction("range",Mr,{returns:"function<color>"}),e.defineFunction("steps",hd,{returns:"array<color>"})}var op=Object.freeze({__proto__:null,isRange:os,mix:dd,range:Mr,register:rp,steps:hd}),fd=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,o,i]=e,[a,s,l]=[NaN,0,(n+t)/2],u=t-n;if(u!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case r:a=(o-i)/u+(o<i?6:0);break;case o:a=(i-r)/u+2;break;case i:a=(r-o)/u+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function o(i){let a=(i+t/30)%12,s=n*Math.min(r,1-r);return r-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),pd=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:fd,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r+n*Math.min(r,1-r);return[t,o===0?0:200*(1-r/o),100*o]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r*(1-n/2);return[t,o===0||o===1?0:(r-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),ip=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:pd,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=n+r;if(o>=1){let s=n/o;return[t,0,s*100]}let i=1-r,a=i===0?0:1-n/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const ap=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],sp=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var md=new Me({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:ap,fromXYZ_M:sp}),lp=new Me({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:md,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const cp=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],up=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var gd=new Me({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:ns,toXYZ_M:cp,fromXYZ_M:up});const dp=1/512,hp=16/512;var fp=new Me({id:"prophoto",name:"ProPhoto",base:gd,toBase(e){return e.map(t=>t<hp?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=dp?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),pp=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Co,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Zo(o)]},toBase(e){let[t,n,r]=e,o,i;return isNaN(r)?(o=0,i=0):(o=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Al=203,$l=2610/2**14,mp=2**14/2610,gp=2523/2**5,Cl=2**5/2523,Sl=3424/2**12,Tl=2413/2**7,Ml=2392/2**7;var wp=new Me({id:"rec2100pq",name:"REC.2100-PQ",base:Go,toBase(e){return e.map(function(t){return(Math.max(t**Cl-Sl,0)/(Tl-Ml*t**Cl))**mp*1e4/Al})},fromBase(e){return e.map(function(t){let n=Math.max(t*Al/1e4,0),r=Sl+Tl*n**$l,o=1+Ml*n**$l;return(r/o)**gp})},formats:{color:{id:"rec2100-pq"}}});const El=.17883277,Il=.28466892,Bl=.55991073,yi=3.7743;var vp=new Me({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Go,toBase(e){return e.map(function(t){return t<=.5?t**2/3*yi:(Math.exp((t-Bl)/El)+Il)/12*yi})},fromBase(e){return e.map(function(t){return t/=yi,t<=1/12?Math.sqrt(3*t):El*Math.log(12*t-Il)+Bl})},formats:{color:{id:"rec2100-hlg"}}});const wd={};It.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vd(e.W1,e.W2,e.options.method))});It.add("chromatic-adaptation-end",e=>{e.M||(e.M=vd(e.W1,e.W2,e.options.method))});function Yo({id:e,toCone_M:t,fromCone_M:n}){wd[e]=arguments[0]}function vd(e,t,n="Bradford"){let r=wd[n],[o,i,a]=me(r.toCone_M,e),[s,l,u]=me(r.toCone_M,t),f=[[s/o,0,0],[0,l/i,0],[0,0,u/a]],h=me(f,r.toCone_M);return me(r.fromCone_M,h)}Yo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Yo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Yo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Yo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(_e,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});_e.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const bp=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],yp=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var bd=new Me({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:_e.ACES,toXYZ_M:bp,fromXYZ_M:yp,formats:{color:{}}});const Hr=2**-16,ki=-.35828683,Ur=(Math.log2(65504)+9.72)/17.52;var kp=new Me({id:"acescc",name:"ACEScc",coords:{r:{range:[ki,Ur],name:"Red"},g:{range:[ki,Ur],name:"Green"},b:{range:[ki,Ur],name:"Blue"}},referred:"scene",base:bd,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Hr)*2:n<Ur?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Hr)+9.72)/17.52:t<Hr?(Math.log2(Hr+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ll=Object.freeze({__proto__:null,A98RGB:lp,A98RGB_Linear:md,ACEScc:kp,ACEScg:bd,HSL:fd,HSV:pd,HWB:ip,ICTCP:fa,JzCzHz:ha,Jzazbz:sd,LCH:pr,Lab:Le,Lab_D65:da,OKLCH:pp,OKLab:Co,P3:nd,P3_Linear:ed,ProPhoto:fp,ProPhoto_Linear:gd,REC_2020:_u,REC_2020_Linear:Go,REC_2100_HLG:vp,REC_2100_PQ:wp,XYZ_ABS_D65:rs,XYZ_D50:ns,XYZ_D65:Ve,sRGB:gr,sRGB_Linear:td});class P{constructor(...t){let n;t.length===1&&(n=Y(t[0]));let r,o,i;n?(r=n.space||n.spaceId,o=n.coords,i=n.alpha):[r,o,i]=t,Object.defineProperty(this,"space",{value:M.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=a2(this,...t);return n.color=new P(n.color),n}static get(t,...n){return t instanceof P?t:new P(t,...n)}static defineFunction(t,n,r=n){let{instance:o=!0,returns:i}=r,a=function(...s){let l=n(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let u=l;l=function(...f){let h=u(...f);return P.get(h)},Object.assign(l,u)}else i==="array<color>"&&(l=l.map(u=>P.get(u)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let n in t)P.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(P);else for(let n in t)P.defineFunction(n,t[n])}}P.defineFunctions({get:We,getAll:Tr,set:Bt,setAll:Xu,to:je,equals:s2,inGamut:er,toGamut:Lt,distance:rd,toString:$o});Object.assign(P,{util:Gf,hooks:It,WHITES:_e,Space:M,spaces:M.registry,parse:Ju,defaults:st});for(let e of Object.keys(Ll))M.register(Ll[e]);for(let e in M.registry)pa(e,M.registry[e]);It.add("colorspace-init-end",e=>{var t;pa(e.id,e),(t=e.aliases)==null||t.forEach(n=>{pa(n,e)})});function pa(e,t){Object.keys(t.coords),Object.values(t.coords).map(r=>r.name);let n=e.replace(/-/g,"_");Object.defineProperty(P.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}P.extend(So);P.extend({deltaE:zn});Object.assign(P,{deltaEMethods:So});P.extend(np);P.extend({contrast:T2});P.extend(E2);P.extend(c2);P.extend(op);P.extend(oo);function yd(e){return ke(e,(t,n)=>n instanceof P?T(n.toString({format:"hex"})):yd(n))}const xp="dodgerblue";function ma(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function xi({background:e,foreground:t}){return{background:e??new P(ma(t)),foreground:t??new P(ma(e))}}var To;(function(e){e.Dark="dark",e.Light="light"})(To||(To={}));function Ap(e){return e==="black"?"white":"black"}const $p={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},Cp={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function ql({themeColor:e=xp,themeStyle:t=To.Light}={}){const n=new P(e),r=new P(t===To.Dark?"black":"white"),o=ma(r),i=new P(o),a={nav:{hover:xi({background:n.clone().set({"hsl.l":93})}),active:xi({background:n.clone().set({"hsl.l":90})}),selected:xi({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...Cp[Ap(o)],foreground:i,...$p[o]}};return yd(a)}const Mo=Wa()("element-book-change-route"),Pl="vira-",{defineElement:In,defineElementNoInputs:qv}=Ja({assertInputs:e=>{if(!e.tagName.startsWith(Pl))throw new Error(`Tag name should start with '${Pl}' but got '${e.tagName}'`)}}),kd=p`
    pointer-events: none;
    opacity: 0.3;
`,Mt=wt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Eo=wt({"vira-form-input-border-radius":"8px"}),Io=wt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${Eo["vira-form-input-border-radius"].value} + 4px)`});function xd({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=T(Vt(r+n+t));return p`
        ${T(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Io["vira-focus-outline-color"].value};
            border-radius: ${Io["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const is=p`
    padding: 0;
    margin: 0;
`,ue=p`
    ${is};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function Sp(e){return p`
        ${T(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${T(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const Ze=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,de=In()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var ga;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ga||(ga={}));In()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ga.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ze};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Io["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${kd};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ue};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Eo["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Mt["vira-interaction-animation-duration"].value},
                background-color
                    ${Mt["vira-interaction-animation-duration"].value},
                border-color ${Mt["vira-interaction-animation-duration"].value};
        }

        ${xd({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${de} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?c`
                  <${de.assign({icon:e.icon})}></${de}>
              `:"",n=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"";return c`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var wa;(function(e){e.Header="header"})(wa||(wa={}));In()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ue};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Mt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:oe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:n,events:r,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return c`
            <button
                class="header-wrapper"
                ${y("click",()=>{n(new r.expandChange(!o.expanded))})}
            >
                <slot name=${wa.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${$n(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const q=wt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function v({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Tp=v({name:"CloseX24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${q["vira-icon-fill-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Mp=v({name:"Element16Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `});v({name:"Element24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Ep=v({name:"Loader24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ip=p`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Mt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ad=v({name:"LoaderAnimated24Icon",svgTemplate:c`
        <style>
            ${Ip}
        </style>
        ${Ep.svgTemplate}
    `}),Bp=v({name:"Options24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${q["vira-icon-fill-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${q["vira-icon-stroke-color"].value}"
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$d=v({name:"StatusFailure24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${q["vira-icon-fill-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `});v({name:"StatusInProgress24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${q["vira-icon-fill-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${q["vira-icon-stroke-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width="calc(${q["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${q["vira-icon-stroke-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width="calc(${q["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${q["vira-icon-stroke-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width="calc(${q["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});v({name:"StatusSuccess24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${q["vira-icon-fill-color"].value}
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${q["vira-icon-stroke-color"].value}
                stroke-width=${q["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Sn;(function(e){e.Loading="loading",e.Error="error"})(Sn||(Sn={}));const Ct=In()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:oe(),imageError:oe()},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:n,dispatch:r,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?c`
                  <slot class="status-wrapper" name=${Sn.Error}>
                      <${de.assign({icon:$d})} class="error"></${de}>
                  </slot>
              `:t.loadedUrls[i]?void 0:c`
                    <slot class="status-wrapper" name=${Sn.Loading}>
                        <${de.assign({icon:Ad})}></${de}>
                    </slot>
                `;return c`
            ${we(!!a,a)}
            <img
                class=${he({hidden:!!a})}
                ${y("load",async()=>{e._debugLoadDelay&&await ea(e._debugLoadDelay.milliseconds),n({loadedUrls:{...t.loadedUrls,[i]:!0}}),r(new o.imageLoad)})}
                ${y("error",async s=>{e._debugLoadDelay&&await ea(e._debugLoadDelay.milliseconds),n({erroredUrls:{...t.erroredUrls,[i]:!0}}),r(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function va({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>va({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Cd({value:e,allowed:t,blocked:n}){const r=t?va({input:e,matcher:t}):!0,o=n?va({input:e,matcher:n}):!1;return r&&!o}function Sd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(Cd({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function Lp({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:o}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Wn(n,HTMLInputElement),a=n.data,s=t;let l=i.value??"";if(a)if(a.length===1)Cd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,r(a));else{const{filtered:u,blocked:f}=Sd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=u,r(f)}i.value!==l&&(i.value=l),s!==l&&o(l)}const io=In()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:oe(),inputBlocked:oe()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Io["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${kd};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${ue};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Ze};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ue};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Eo["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Mt["vira-interaction-animation-duration"].value};
            }

            label {
                ${ue};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Eo["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${xd({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ue};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ze};
            }

            .close-x-button {
                ${ue};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${Mt["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:n,updateState:r,events:o})=>{const{filtered:i}=Sd({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?c`
                  <${de.assign({icon:e.icon})} class="left-side-icon"></${de}>
              `:"",s=e.fitText?p`
                  width: ${n.forcedInputWidth}px;
              `:"";return c`
            <label>
                ${a}
                ${we(!!e.fitText,c`
                        <span
                            class="size-span"
                            ${$n(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${y("input",l=>{Lp({inputs:e,filteredValue:i,event:l,inputBlockedCallback(u){t(new o.inputBlocked(u))},newValueCallback(u){t(new o.valueChange(u))}})})}
                    placeholder=${e.placeholder}
                />
                ${we(!!(e.showClearButton&&e.value),c`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${de.assign({icon:Tp})}></${de}>
                        </button>
                    `)}
                ${we(!!e.suffix,c`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});In()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,events:{routeChange:oe()},renderCallback({inputs:e,dispatch:t,events:n}){var o,i;function r(a){e.route&&Wo(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new n.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return c`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return c`
                <a href=${a} rel="noopener noreferrer" ${y("click",r)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Ge,defineElementNoInputs:Pv}=Ja(),Fe=Ge()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var r,o;const n=((o=e.router)==null?void 0:o.createRoutesUrl({...(r=e.router)==null?void 0:r.getCurrentRawRoutes(),...e.route}))??"#";return c`
            <a
                href=${n}
                ${y("click",i=>{(!e.router||Wo(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new Mo(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function qp(e,t){return e.entry.entryType===ye.Root?!1:!!(e.entry.entryType===ye.Page||it(t,e.fullUrlBreadcrumbs.slice(0,-1))||it(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ht=Ge()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Z["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Z["element-book-nav-hover-background-color"].value};
            color: ${Z["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Z["element-book-nav-active-background-color"].value};
            color: ${Z["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Fe.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Z["element-book-nav-selected-background-color"].value};
            color: ${Z["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${de} {
            display: inline-flex;
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!qp(n,e.selectedPath))return;const r=p`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return c`
                <li style=${r}>
                    <${Fe.assign({router:e.router,route:{paths:[Se.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${he({"title-row":!0,selected:e.selectedPath?it(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${we(vn(n,ye.ElementExample),c`
                                    <${de.assign({icon:Mp})}></${de}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Fe}>
                </li>
            `});return c`
            <${Fe.assign({route:Cn,router:e.router})}>
                <slot name=${at.NavHeader}>Book</slot>
            </${Fe}>
            <ul>
                ${t}
            </ul>
        `}});async function Pp(e){await ta(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await u1(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Pt=Ge()({tagName:"book-error",styles:p`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e}){return(ee(e.message,"array")?e.message:[e.message]).map(n=>c`
                <p>${n}</p>
            `)}}),wr=Ge()({tagName:"book-page-controls",events:{controlValueChange:oe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${io} {
            height: 24px;
            max-width: 128px;
        }

        ${de}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,o],i)=>{if(o.controlType===j.Hidden)return"";const a=Op(e.currentValues[r],o,s=>{const l=ee(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[r]:s}}))});return c`
                    <div class="control-wrapper">
                        ${we(i===0,c`
                                <${de.assign({icon:Bp})}
                                    class="options-icon"
                                ></${de}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Op(e,t,n){return tn(t,j.Hidden)?"":tn(t,j.Checkbox)?c`
            <input
                type="checkbox"
                .value=${e}
                ${y("input",r=>{const o=Wn(r,HTMLInputElement);n(o.checked)})}
            />
        `:tn(t,j.Color)?c`
            <input
                type="color"
                .value=${e}
                ${y("input",r=>{const o=Wn(r,HTMLInputElement);n(o.value)})}
            />
        `:tn(t,j.Text)?c`
            <${io.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${y(io.events.valueChange,r=>{n(r.detail)})}
            ></${io}>
        `:tn(t,j.Number)?c`
            <input
                type="number"
                .value=${e}
                ${y("input",r=>{const o=Wn(r,HTMLInputElement);n(o.value)})}
            />
        `:tn(t,j.Dropdown)?c`
            <select
                .value=${e}
                ${y("input",r=>{const o=Wn(r,HTMLSelectElement);n(o.value)})}
            >
                ${t.options.map(r=>c`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:c`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ol=Ge()({tagName:"book-breadcrumbs",styles:p`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,o)=>{const i=r>=o.length-1,a=o.slice(0,r+1),s=i?"":c`
                      <span class="spacer">&gt;</span>
                  `;return c`
                <${Fe.assign({route:{hash:void 0,search:void 0,paths:[Se.Book,...a]},router:e.router})}>
                    ${n}
                </${Fe}>
                ${s}
            `}):c`
                &nbsp;
            `}}),Ai=Ge()({tagName:"book-breadcrumbs-bar",styles:p`
        :host {
            border-bottom: 1px solid
                ${Z["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Z["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return c`
            ${we(!!e.currentSearch,c`
                    &nbsp;
                `,c`
                    <${Ol.assign({currentRoute:e.currentRoute,router:e.router})}></${Ol}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${y("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=r.value;await ea(200),r.value===o&&(r.value?t(new Mo({paths:[Se.Search,encodeURIComponent(r.value)]})):t(new Mo(Cn)))})}
            />
        `}}),Dl=Ge()({tagName:"book-entry-description",styles:p`
        :host {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Z["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>c`
                <p>${t}</p>
            `)}}),Nl=Ge()({tagName:"book-page-wrapper",styles:p`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${Fe} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?c`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:c`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Se.Book,...e.pageNode.fullUrlBreadcrumbs],r=Yc(e.pageNode.entry.errors);return r&&console.error(r),c`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Fe.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Fe}>
                    ${r?c`
                              <${Pt.assign({message:r.message})}></${Pt}>
                          `:c`
                              <${Dl.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Dl}>
                              <${wr.assign({config:e.pageNode.entry.controls,currentValues:_a(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${wr}>
                          `}
                </div>
            </div>
        `}}),Vr=Ge()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[Se.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return c`
            <${Fe.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Fe}>
        `}}),Rl=Symbol("unset-internal-state"),Fl=Ge()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Rl},renderCallback({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Yc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Rl&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.renderCallback({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new Error("renderCallback output cannot be a promise");return c`
                ${we(!!t.elementExampleNode.entry.styles,c`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error(r),c`
                <${Pt.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ot(r)}`})}></${Pt}>
            `}},options:{allowPolymorphicState:!0}}),jl=Ge()({tagName:"book-element-example-wrapper",styles:p`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
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

        ${Vr} {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Vr} {
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return c`
            <div class="individual-example-wrapper">
                <${Vr.assign(sr(e,["currentPageControls"]))}></${Vr}>
                <${Fl.assign(e)}></${Fl}>
            </div>
        `}});function Td(e,t,n,r){const o=aa(n,r),i=[];if(o){const a=Td(e,t,o,r);a&&i.push(a)}if(vn(n,ye.Page)&&!e.includes(n)){const a=_a(t,n.fullUrlBreadcrumbs);i.push({config:n.entry.controls,current:a,breadcrumbs:ke(a,()=>n.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Dp({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:o,originalTree:i}){if(!e.length&&r)return[c`
                No results
            `];const a=_i(e,1)?Td(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&_i(e,1)?c`
                  <${wr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${wr}>
              `:_,l=P1(e,u=>u.fullUrlBreadcrumbs.join(">"),(u,f)=>{if(vn(u,ye.Page))return c`
                    <${Nl.assign({isTopLevel:t,pageNode:u,controls:o,router:n})}
                        class="block-entry"
                    ></${Nl}>
                `;if(vn(u,ye.ElementExample)){const h=_a(o,u.fullUrlBreadcrumbs.slice(0,-1));return c`
                    <${jl.assign({elementExampleNode:u,currentPageControls:h,router:n})}
                        class="inline-entry"
                    ></${jl}>
                `}else return vn(u,ye.Root)?_:c`
                    <${Pt.assign({message:`Unknown entry type for rendering: '${u.entry.entryType}'`})}
                        class="block-entry"
                    ></${Pt}>
                `});return[s,l]}const on=Ge()({tagName:"book-entry-display",styles:p`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Ai} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Mt["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:oe()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:n,state:r,updateState:o})=>{const i=sa(e.currentRoute.paths),a=Dp({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return c`
            <${Ai.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Ai}>

            ${we(e.showLoading,c`
                    <div
                        ${ia(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${de.assign({icon:Ad})}></${de}>
                    </div>
                    ${we(!!r.lastElement,c`
                            ${r.lastElement}
                            <slot name=${at.Footer}></slot>
                        `)}
                `,c`
                    <div
                        ${ia(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${at.Footer}></slot>
                `)}
        `}});function Np(e,t,n){const r=Hl(e,t);if(r.length)return r;n(Cn);const o=Hl(e,Cn.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Hl(e,t){return e.filter(n=>c1({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const $i=Ou()({tagName:"element-book-app",events:{pathUpdate:oe()},stateInitStatic:{currentRoute:Cn,router:void 0,loading:!0,colors:{config:void 0,theme:ql(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Z["element-book-page-background-color"].value};
            color: ${Z["element-book-page-foreground-color"].value};
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

        ${on} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ht} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ul(e,sa(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:n,updateState:r,dispatch:o,events:i})=>{var f,h,m,g,w,k,x;t._debug&&console.info("rendering element-book app");function a(C){return{...e.currentRoute,...C}}function s(C){const S=a(C);return!it(e.currentRoute,S)}function l(C){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,C].filter(ve).join(" - "))}function u(C){if(!s(C))return;const S=a(C);e.router?e.router.setRoutes(S):r({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!it(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!it(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(f=t.internalRouterConfig)!=null&&f.useInternalRouter&&!e.router){const V=Vf(t.internalRouterConfig.basePath);r({router:V}),V.addRouteListener(!0,ne=>{r({currentRoute:ne})})}else!((h=t.internalRouterConfig)!=null&&h.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const C={themeColor:t.themeColor};if(!it(C,(m=e.colors)==null?void 0:m.config)){const V=ql(C);r({colors:{config:C,theme:V}}),Zf(n,V)}const S=t._debug??!1,N=Sf({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Fu(N.tree,{children:(w=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:w.children,controls:t.globalValues})}}));const W=sa(e.currentRoute.paths),fe=(W?qf({flattenedNodes:N.flattenedNodes,searchQuery:W}):void 0)??Np(N.flattenedNodes,e.currentRoute.paths,u);l((k=fe[0])==null?void 0:k.entry.title);const X=(x=e.treeBasedControls)==null?void 0:x.controls;return X?(t._debug&&console.info({currentControls:X}),c`
                <div
                    class="root"
                    ${y(Mo,async V=>{const ne=V.detail;if(!s(ne))return;if(r({loading:!0}),u(ne),!(n.shadowRoot.querySelector(ht.tagName)instanceof ht))throw new Error(`Failed to find child '${ht.tagName}'`);Ul(n,W,e.currentRoute)})}
                    ${y(wr.events.controlValueChange,V=>{if(!e.treeBasedControls)return;const ne=Mf(X,V.detail.fullUrlBreadcrumbs,V.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:ne}})})}
                >
                    <${ht.assign({flattenedNodes:N.flattenedNodes,router:e.router,selectedPath:W?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${at.NavHeader}
                            slot=${at.NavHeader}
                        ></slot>
                    </${ht}>
                    <${on.assign({controls:X,currentNodes:fe,currentRoute:e.currentRoute,debug:S,originalTree:N.tree,router:e.router,showLoading:e.loading})}
                        ${y(on.events.loadingRender,async V=>{await ta();const ne=n.shadowRoot.querySelector(on.tagName);ne?ne.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${on.tagName}' for scrolling.`),await ta(),r({loading:!V.detail})})}
                    >
                        <slot
                            name=${at.Footer}
                            slot=${at.Footer}
                        ></slot>
                    </${on}>
                </div>
            `):c`
                    <${Pt.assign({message:"Failed to generate page controls."})}></${Pt}>
                `}catch(C){return console.error(C),c`
                <p class="error">${Ot(C)}</p>
            `}}});async function Ul(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(ht.tagName);if(!(r instanceof ht))throw new Error(`Failed to find child '${ht.tagName}'`);await Pp(r)}function Ci(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Rp=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},n={...e,foregroundColor:p`#ACADAD`},r={...e,foregroundColor:p`#D6D6D6`},o={foregroundColor:p`#ffffff`,backgroundColor:p`#FF5357`},i={foregroundColor:p`#ffffff`,backgroundColor:p`#01C9A0`},a={foregroundColor:p`#ffffff`,backgroundColor:p`#FFAC00`},s={...t},l={...t,foregroundColor:p`#00A876`},u={...t,foregroundColor:p`#1D6852`},f={...r},h={...e,foregroundColor:p`rgba(0, 0, 0, 0.08)`},m={...e,backgroundColor:p`#D2EEFA`},g=Ci(s),w=Ci(l),k=Ci(u),x=k,C={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},S={...C,foregroundColor:p`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:n,pageTertiary:r,pageInteraction:s,pageInteractionHover:l,pageInteractionActive:u,divider:f,dividerFaint:h,dropShadow:m,pageDarkPrimary:x,accentPrimary:g,accentPrimaryHover:w,accentPrimaryActive:k,accentSecondary:C,accentTertiary:S,colorDanger:o,colorSuccess:i,colorWarning:a}})(),Md=Rp;function Vl(e,t){return T(`--toniq-${fo(e)}-${fo(t)}`)}const as=ke(Md,e=>({backgroundColor:Vl(e,"backgroundColor"),foregroundColor:Vl(e,"foregroundColor")}));function Xe(e,t){const n=Md[e][t],r=as[e][t];return p`var(${r}, ${n})`}const b=ke(as,e=>({foregroundColor:Xe(e,"foregroundColor"),backgroundColor:Xe(e,"backgroundColor")}));function F(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Si={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`,pulseDuration:p`--toniq-pulse-transition-duration`},K={interaction:p`var(${Si.interactionDuration}, 84ms)`,pretty:p`var(${Si.prettyDuration}, 300ms)`,pulse:p`var(${Si.pulseDuration}, 3s)`},Wl={modalGrow:{animationName:p`toniq-modal-grow`,keyFrames:p`
            @keyframes toniq-modal-grow {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
        `},menuGrow:{animationName:p`toniq-menu-grow`,keyFrames:p`
            @keyframes toniq-menu-grow {
                0% {
                    transform: scale(0.95);
                    opacity: 0.6;
                }
                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `},buttonPulse:{animationName:p`toniq-button-pulse`,keyFrames:p`
            @keyframes toniq-button-pulse {
                0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 ${b.brandPrimary.foregroundColor};
                }
                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px #ffffff00;
                }
                100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 #ffffff00;
                }
            }
        `}},Xt=p`
    pointer-events: none;
    opacity: 0.3;
    ${Ze};
`;function Nt({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=T(Vt(r+n+t));return p`
        ${T(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${b.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const Ed={toniqFont:{"font-family":p`'Lexend', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`64px`,"font-size":p`48px`},h3Font:{"line-height":p`48px`,"font-size":p`32px`},h4Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}},Fp=ke(Ed,(e,t)=>{const n=T(fo(e.replace(/Font$/,"")));return ke(t,o=>{const i=T(o);return p`--toniq-font-${n}-${i}`})});function Ye(e){const t=Fp[e],n=Ed[e],r=le(t).map(o=>{const i=n[o],a=t[o];return p`
            ${T(o)}: var(${a}, ${i});
        `});return T(r.join(`
`))}const D=(()=>{const e=p`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
        ${Ye("toniqFont")};
    `,t=p`
        ${e};
        ${Ye("normalWeightFont")};
    `,n=p`
        ${e};
        ${Ye("boldFont")};
    `,r=p`
        ${e};
        ${Ye("extraBoldFont")};
    `,o=p`
        ${e};
        ${Ye("paragraphFont")};
        ${t};
    `,i=p`
        ${e};
        ${o};
        ${n};
    `,a=p`
        ${e};
        ${Ye("labelFont")};
        ${t};
    `,s=p`
        ${a};
        ${n};
    `,l=p`
        ${Ye("h1Font")};
        ${r};
    `,u=p`
        ${Ye("h2Font")};
        ${r};
    `,f=p`
        ${Ye("h3Font")};
        ${n};
    `,h=p`
        ${Ye("h4Font")};
        ${n};
    `,m=p`
        ${Ye("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:n,extraBoldFont:r,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:u,h3Font:f,h4Font:h,monospaceFont:m}})(),d=wt({"toniq-icon-fill-color":q["vira-icon-fill-color"].default,"toniq-icon-stroke-color":q["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),G=ke(d,(e,t)=>n=>T(`var(${t.name}, ${n})`)),vr={popupShadow:p`
        filter: drop-shadow(0px 12px 8px ${b.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:p`
        filter: drop-shadow(0px -12px 8px ${b.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:p`
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.12));
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function jp(e,t=!0){const n=T(e),r=e===":host"?p`
                  :host(:hover);
              `:p`
                  ${n}:hover
              `,o=t?p`
              ${n} {
                  cursor: pointer;
              }
              ${r} {
                  border-color: ${b.pageInteraction.foregroundColor};
              }
          `:p``;return p`
        ${n} {
            border-radius: 16px;
            background-color: ${b.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${vr.popupShadow};
        }

        ${o}
    `}const Id=v({name:"ChevronsRight16Icon",svgTemplate:c`
        <svg
            width="16"
            height="16"
            fill=${d["toniq-icon-fill-color"].value}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                clip-path="url(#a)"
                stroke=${d["toniq-icon-stroke-color"].value}
                stroke-width=${d["toniq-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="m4.66699 4.6665 3.33334 3.33334-3.33334 3.33336m4-6.6667 3.33331 3.33334-3.33331 3.33336"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill=${d["toniq-icon-fill-color"].value}
                        d="M0 0h16v16H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    `}),Hp=v({name:"CloseX16Icon",svgTemplate:c`
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4L4 12"
                stroke=${d["toniq-icon-stroke-color"].value}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M4 4L12 12"
                stroke=${d["toniq-icon-stroke-color"].value}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),Up=v({name:"Copy16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 6V4.3c0-.7-.6-1.3-1.3-1.3H4.3C3.6 3 3 3.6 3 4.3v5.4c0 .7.6 1.3 1.3 1.3H6"
            ></path>
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M14 7.3c0-.7-.6-1.3-1.3-1.3H7.3C6.6 6 6 6.6 6 7.3v5.4c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3V7.3Z"
            ></path>
        </svg>
    `}),Vp=v({name:"ExternalLink16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M7 4H4.3C3.6 4 3 4.6 3 5.3v6.4c0 .7.6 1.3 1.3 1.3h6.4c.7 0 1.3-.6 1.3-1.3V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `}),Et=v({name:"InfoCircle16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
            />
        </svg>
    `}),Wp=v({name:"ArrowBarUp24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M4 20h16" />
        </svg>
    `}),zp=v({name:"ArrowForwardUp24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4"
            />
        </svg>
    `}),ss=v({name:"ArrowLeft24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 12h14M5 12l6 6m-6-6 6-6"
            />
        </svg>
    `}),Zp=v({name:"ArrowLoopLeft24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3"
            />
        </svg>
    `}),Gp=v({name:"ArrowLoopRight24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3"
            />
        </svg>
    `}),ls=v({name:"ArrowRight24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 12h14m-6 6 6-6m-6-6 6 6"
            />
        </svg>
    `}),Bd=v({name:"ArrowsSort24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4"
            />
        </svg>
    `}),Yp=v({name:"ArrowsSortAscending24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 19 19 5m0 6V5h-6"
            />
        </svg>
    `}),Qp=v({name:"ArrowsSortDescending24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m5 5 14 14m0-6v6h-6"
            />
        </svg>
    `}),Kp=v({name:"Bell24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 18h16m-2 0v-7.5C18 6.9 15.3 4 12 4s-6 3-6 6.5V18m7.9-13.7a2 2 0 0 0-3.8 0M10 18v1a2 2 0 1 0 4 0v-1"
            />
        </svg>
    `}),Jp=v({name:"Bucket24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M7 9a5 5 0 0 1 5-5 5 5 0 0 1 5 5"
                fill="none"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m19 9-2 9c-.2 1.2-1 2-2 2H9c-1 0-1.8-.8-2-2L5 9h14Z"
            />
        </svg>
    `}),Xp=v({name:"BuildingStore24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 10.827c.313.112.65.173 1 .173 1.646 0 3-1.354 3-3 0 1.646 1.354 3 3 3s3-1.354 3-3c0 1.646 1.354 3 3 3 .35 0 .687-.061 1-.173V21H5V10.827Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 21v-4c0-1.1.9-2 2-2h2c1.097 0 2 .903 2 2v4"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M3 21h18" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M21 7v1c0 1.646-1.354 3-3 3s-3-1.354-3-3c0 1.646-1.354 3-3 3S9 9.646 9 8c0 1.646-1.354 3-3 3S3 9.646 3 8V7"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m3 7 2-4h14l2 4H3Z"
            />
        </svg>
    `}),_p=v({name:"CalendarEvent24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `}),em=v({name:"Cash24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),tm=v({name:"Chain24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m11.181 12.944 1.356 1.138c.74.621 1.845.525 2.466-.215l4.178-4.98a1.75 1.75 0 0 0-.216-2.465l-2.681-2.25a1.751 1.751 0 0 0-2.466.216l-2.089 2.49"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m12.819 11.056-1.356-1.138a1.751 1.751 0 0 0-2.466.215l-4.178 4.98a1.75 1.75 0 0 0 .216 2.465l2.681 2.25c.74.621 1.845.524 2.466-.216l2.089-2.49"
            />
        </svg>
    `}),Ld=v({name:"CheckMark24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),qd=v({name:"ChevronDown24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 9 6 6 6-6"
            />
        </svg>
    `}),nm=v({name:"ChevronUp24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 15 6-6 6 6"
            />
        </svg>
    `}),rm=v({name:"Circle24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                r="9"
                cx="12"
                cy="12"
            />
        </svg>
    `}),Pd=v({name:"CircleDot24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-stroke-color"].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `}),om=v({name:"CirclePlus24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6"
            />
        </svg>
    `}),im=v({name:"CircleWavyCheck24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `}),am=v({name:"Clock24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 7v5l3 3"
                fill="none"
            />
        </svg>
    `}),sm=v({name:"Code24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                stroke-width=${d["toniq-icon-stroke-width"].value}
            />
        </svg>
    `}),Od=v({name:"Copy24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),lm=v({name:"CreateFile24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `}),cm=v({name:"DotsVertical24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),um=v({name:"Download24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4"
            />
        </svg>
    `}),dm=v({name:"Edit24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `}),hm=v({name:"Envelope24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4.8 19c-.5 0-1-.2-1.3-.5-.4-.3-.5-.7-.5-1.2V6.8c0-.5.1-1 .5-1.3.4-.3.8-.5 1.3-.5h14.4c.5 0 1 .2 1.3.5.4.3.5.8.5 1.3v10.5c0 .5-.1.9-.5 1.2-.4.3-.8.5-1.3.5H4.8ZM20.5 5.5 12 13 3.5 5.5"
            />
        </svg>
    `}),Dd=v({name:"ExternalLink24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 14 20 4m-5 0h5v5"
            />
        </svg>
    `}),fm=v({name:"Filter24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `}),pm=v({name:"Fire24Icon",svgTemplate:c`
        <svg
            width="14"
            height="24"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 9C9 6.04 7 2 6 1C6 4.038 4.227 5.741 3 7C1.774 8.26 1 10.24 1 12C1 13.5913 1.63214 15.1174 2.75736 16.2426C3.88258 17.3679 5.4087 18 7 18C8.5913 18 10.1174 17.3679 11.2426 16.2426C12.3679 15.1174 13 13.5913 13 12C13 10.468 11.944 8.06 11 7C9.214 10 8.209 10 7 9Z"
                stroke="${d["toniq-icon-stroke-color"].value}"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),mm=v({name:"Gear24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5.74 10.25c.3-1.07.86-2.03 1.62-2.8L6.2 4.95l2.6-1.5 1.58 2.25a6.53 6.53 0 0 1 3.24 0l1.58-2.24 2.6 1.5-1.16 2.5a6.49 6.49 0 0 1 1.62 2.8l2.74.24v3l-2.74.25a6.49 6.49 0 0 1-1.62 2.8l1.16 2.5-2.6 1.5-1.58-2.25a6.53 6.53 0 0 1-3.24 0L8.8 20.54l-2.6-1.5 1.16-2.5a6.49 6.49 0 0 1-1.62-2.8L3 13.5v-3l2.74-.25ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            />
        </svg>
    `}),gm=v({name:"Geometry24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `}),wm=v({name:"GridDots24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),vm=v({name:"Heart24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `}),ba=v({name:"Infinity24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `}),bm=v({name:"Info24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                fill="none"
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 11.5v5"
            />
        </svg>
    `}),ym=v({name:"LayersLinked24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `}),km=v({name:"LayoutGrid24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `}),xm=v({name:"Lifebuoy24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m14.8 14.8 3.5 3.5m-9.1-3.5-3.5 3.5m0-12.6 3.5 3.5m9.2-3.5-3.6 3.5"
                fill="none"
            />
        </svg>
    `}),Am=v({name:"List24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
        </svg>
    `}),$m=v({name:"ListDetails24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 5c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V5Zm0 10c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-4Z"
            />
        </svg>
    `}),Cm=v({name:"Loader24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),cs=v({name:"LoaderAnimated24Icon",svgTemplate:c`
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
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),Sm=v({name:"Lock24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"
            />
        </svg>
    `}),Tm=v({name:"LockOpen24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V6a4 4 0 0 1 4-4 4 4 0 0 1 3.8 2.8"
            />
        </svg>
    `}),Mm=v({name:"Menu24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    `}),Em=v({name:"Pamphlet24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_3290_17456)">
                <path
                    d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 4V17"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M15 7V20"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_3290_17456">
                    <rect
                        width="24"
                        height="24"
                        fill="${d["toniq-icon-fill-color"].value}"
                    />
                </clipPath>
            </defs>
        </svg>
    `}),Im=v({name:"Paper24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `}),Bm=v({name:"People24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `}),Lm=v({name:"Person24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke="none"
                fill=${d["toniq-icon-stroke-color"].value}
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
                stroke="none"
                fill=${d["toniq-icon-stroke-color"].value}
                d="M5.6 18.3A7.2 7.2 0 0 1 12 14c2.8 0 5.2 1.8 6.4 4.3a9 9 0 0 1-12.8 0Z"
            />
        </svg>
    `}),qm=v({name:"Photo24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M15 8h0"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="m4 15 4-4c1-.9 2-.9 3 0l5 5m-2-2 1-1c1-.9 2-.9 3 0l2 2"
            />
        </svg>
    `}),Pm=v({name:"Refresh24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18.3 15a7 7 0 1 1 .4-5"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 5v5h-5"
            />
        </svg>
    `}),Nd=v({name:"Rocket24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Rd=v({name:"Search24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6"
            />
        </svg>
    `}),Om=v({name:"Send24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `}),Dm=v({name:"ShootingStar24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_3290_17463)">
                <path
                    d="M15.5 5.5L12.5 4L13 7.5L11 9.5L14 10L15.5 13L17 10L20 9.5L18 7.5L18.5 4L15.5 5.5Z"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 20L11 13"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 20L12.5 16.5"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 15L7.5 11.5"
                    stroke="${d["toniq-icon-stroke-color"].value}"
                    stroke-width="${d["toniq-icon-stroke-width"].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_3290_17463">
                    <rect
                        width="24"
                        height="24"
                        fill="${d["toniq-icon-fill-color"].value}"
                        transform="matrix(1 0 0 -1 0 24)"
                    />
                </clipPath>
            </defs>
        </svg>
    `}),Nm=v({name:"ShoppingCart24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M6 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M17 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 5 14 1-1 7H6"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M17 17H6V3H4"
            />
        </svg>
    `}),Rm=v({name:"Social24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `}),Fm=v({name:"Square24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${d["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
        </svg>
    `}),jm=v({name:"SquareCheck24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${d["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),Hm=v({name:"Tag24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_2457_13056)">
                <path
                    d="M6.5 7.5C6.5 7.76522 6.60536 8.01957 6.79289 8.20711C6.98043 8.39464 7.23478 8.5 7.5 8.5C7.76522 8.5 8.01957 8.39464 8.20711 8.20711C8.39464 8.01957 8.5 7.76522 8.5 7.5C8.5 7.23478 8.39464 6.98043 8.20711 6.79289C8.01957 6.60536 7.76522 6.5 7.5 6.5C7.23478 6.5 6.98043 6.60536 6.79289 6.79289C6.60536 6.98043 6.5 7.23478 6.5 7.5Z"
                    stroke=${d["toniq-icon-stroke-color"].value}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M3 6V11.172C3.00011 11.7024 3.2109 12.211 3.586 12.586L11.296 20.296C11.748 20.7479 12.3609 21.0017 13 21.0017C13.6391 21.0017 14.252 20.7479 14.704 20.296L20.296 14.704C20.7479 14.252 21.0017 13.6391 21.0017 13C21.0017 12.3609 20.7479 11.748 20.296 11.296L12.586 3.586C12.211 3.2109 11.7024 3.00011 11.172 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6Z"
                    stroke=${d["toniq-icon-stroke-color"].value}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2457_13056">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `}),ao=v({name:"Trash24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M9 7V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v3"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 7h16M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 11v6"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M14 11v6"
            />
        </svg>
    `}),Um=v({name:"Upload24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4"
            />
        </svg>
    `}),Vm=v({name:"Wallet24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 8V6c0-2 2-2 2-2h10c.6 0 1 .4 1 1v3"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 12V9c0-.6-.4-1-1-1H6S4 8 4 6v12c0 1 1 2 2 2h12c.6 0 1-.4 1-1v-2"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 12v4h-4a2 2 0 0 1-2-2c0-1.1.9-2 2-2h4"
            />
        </svg>
    `}),Fd=v({name:"World24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 0c2 0 4 4 4 9s-2 9-4 9-4-4-4-9 2-9 4-9ZM4 9h16M4 15h16"
            />
        </svg>
    `}),Wm=v({name:"WorldUpload24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-fill-color"].value}
                d="M12 21c-2 0-4-4-4-9s2-9 4-9 4 4 4 9M4 9h16M4 15h8m0 6s0 0 0 0a9 9 0 1 1 9-9"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `}),zm=v({name:"X24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 6 6 18M6 6l12 12"
            />
        </svg>
    `}),Zm=v({name:"Folder48Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M38 38c2 0 4-2 4-4V18c0-2-2-4-4-4H24l-6-6h-8c-2 0-4 2-4 4v22c0 2 2 4 4 4h28Z"
            />
        </svg>
    `}),jd=v({name:"FolderOff48Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M13.9 8H18l6 6h14a4 4 0 0 1 4 4v16a4 4 0 0 1-.4 1.7M32.1 38H10a4 4 0 0 1-4-4V11.9"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 6 36 36"
            />
        </svg>
    `}),Gm=v({name:"Kyc48Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${G["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${G["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${G["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),Ym=v({name:"Tag48Icon",svgTemplate:c`
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1716 12.1716C12.9217 11.4214 13.9391 11 15 11C16.0609 11 17.0783 11.4214 17.8284 12.1716C18.5786 12.9217 19 13.9391 19 15C19 16.0609 18.5786 17.0783 17.8284 17.8284C17.0783 18.5786 16.0609 19 15 19C13.9391 19 12.9217 18.5786 12.1716 17.8284C11.4214 17.0783 11 16.0609 11 15C11 13.9391 11.4214 12.9217 12.1716 12.1716Z"
                fill=${d["toniq-icon-stroke-color"].value}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4H22.344C23.9351 4.00034 25.4613 4.63262 26.5862 5.75779C26.5861 5.75772 26.5863 5.75786 26.5862 5.75779L42.0062 21.1778C43.285 22.4568 44.0035 24.1914 44.0035 26C44.0035 27.8086 43.2851 29.5431 42.0063 30.8221L30.8222 42.0062C29.5432 43.285 27.8086 44.0035 26 44.0035C24.1914 44.0035 22.4569 43.2851 21.1779 42.0063L5.758 26.5864C5.75793 26.5864 5.75807 26.5865 5.758 26.5864C4.63284 25.4615 4.00034 23.9355 4 22.3444V12C4 9.87827 4.84285 7.84344 6.34315 6.34315ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12V22.3436C8 22.3434 8 22.3437 8 22.3436C8.00023 22.8738 8.211 23.3827 8.586 23.7576L24.0061 39.1777C24.0061 39.1776 24.0061 39.1777 24.0061 39.1777C24.5349 39.7064 25.2522 40.0035 26 40.0035C26.7478 40.0035 27.465 39.7065 27.9938 39.1778M27.9938 39.1778L39.1777 27.9939C39.1776 27.9939 39.1777 27.9939 39.1777 27.9939C39.7064 27.4651 40.0035 26.7478 40.0035 26C40.0035 25.2522 39.7065 24.535 39.1778 24.0062C39.1777 24.0062 39.1778 24.0062 39.1778 24.0062L23.7578 8.58621C23.3829 8.21122 22.8742 8.00023 22.344 8C22.3439 8 22.3441 8 22.344 8H12"
                fill=${d["toniq-icon-stroke-color"].value}
            />
        </svg>
    `}),Qm=v({name:"Wallet48Icon",svgTemplate:c`
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
                clip-path="url(#a)"
                stroke=${d["toniq-icon-stroke-color"].value}
                stroke-width=${d["toniq-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="M34 16v-6c0-.53043-.2107-1.03914-.5858-1.41421C33.0391 8.21071 32.5304 8 32 8H12c-1.0609 0-2.07828.42143-2.82843 1.17157C8.42143 9.92172 8 10.9391 8 12m0 0c0 1.0609.42143 2.0783 1.17157 2.8284C9.92172 15.5786 10.9391 16 12 16h24c.5304 0 1.0391.2107 1.4142.5858S38 17.4696 38 18v6M8 12v24c0 1.0609.42143 2.0783 1.17157 2.8284C9.92172 39.5786 10.9391 40 12 40h24c.5304 0 1.0391-.2107 1.4142-.5858S38 38.5304 38 38v-6"
                />
                <path
                    d="M40 24v8h-8c-1.0609 0-2.0783-.4214-2.8284-1.1716C28.4214 30.0783 28 29.0609 28 28c0-1.0609.4214-2.0783 1.1716-2.8284C29.9217 24.4214 30.9391 24 32 24h8Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill=${d["toniq-icon-fill-color"].value}
                        d="M0 0h48v48H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    `}),Hd=v({name:"Api64Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-fill-color"].value}
                d="m32 3 26 12.5v31L32 61 6 46.5v-31L32 3Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20.6 25.1a6 6 0 0 1 8.4 2l-10.4 6.4a6 6 0 0 1 2-8.4Zm15.7 16a4.5 4.5 0 0 1-6.3 0l6.3-6.3a4.5 4.5 0 0 1 0 6.3ZM58 15.5l-18.2 8.7M6 15.5l4 1.5c5 1.9 8.4 5.7 10.3 8.3M32 61V50.3M58 29a14 14 0 0 1-21.5 11.9m-8.3-4.4 3.2 3.2m.4-6.7 3.1 3.2"
            />
        </svg>
    `}),Km=v({name:"CircleDashes64Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19.1 33.8A13 13 0 0 1 32 19c2 0 3.8.4 5.4 1.2m7.5 10A13 13 0 0 1 32 45c-2 0-3.8-.4-5.4-1.2"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M6 31.3A26 26 0 0 1 33.7 6m12 3.7a26 26 0 0 1 8 36.6M44.3 55A25.9 25.9 0 0 1 8.7 43.5"
            />
        </svg>
    `}),Jm=v({name:"Rocket64Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M57.7 6.7c0-.2-.2-.4-.4-.4-6.8-1.7-22.5 4.2-31 12.8a36.8 36.8 0 0 0-4.1 4.9c-2.7-.3-5.3 0-7.5.9C8.4 27.7 6.5 34.9 6 38a1.1 1.1 0 0 0 1.2 1.3l10.2-1 .1 2.2c0 .5.3 1 .7 1.4l3.9 4c.4.3.9.5 1.4.6l2.3.1-1.2 10.2A1.1 1.1 0 0 0 26 58c3.2-.5 10.4-2.4 13.2-8.7 1-2.2 1.2-4.8 1-7.4 1.7-1.3 3.3-2.7 4.8-4.2 8.6-8.5 14.5-23.9 12.8-31Zm-20.4 20a5.4 5.4 0 0 1 3.8-9.1 5.4 5.4 0 0 1 3.8 9.1 5.3 5.3 0 0 1-7.6 0ZM13.7 44c-1.2.2-2.4.7-3.3 1.6C8.2 47.8 8 56 8 56s8.2-.2 10.4-2.4c.9-.9 1.5-2 1.6-3.3"
            />
        </svg>
    `}),Xm=v({name:"CryptoBtc16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <circle cx="8" cy="8" r="7" fill="#f7931a" />
            <path
                d="M11.1 7c.13-.93-.59-1.43-1.55-1.76l.31-1.26-.77-.2-.3 1.23-.62-.14.3-1.24-.76-.2L7.4 4.7l-.5-.12-1.05-.26-.2.82s.56.13.55.14c.31.07.37.28.36.45L6.2 7.16l.08.02-.08-.01-.5 2c-.04.1-.14.24-.35.19l-.56-.14-.38.88 1 .25.54.14-.31 1.28.76.2.32-1.28.6.17-.3 1.25.76.2.32-1.28c1.31.25 2.3.15 2.71-1.04.33-.95-.02-1.5-.7-1.86.5-.12.87-.45.98-1.13ZM9.32 9.47c-.23.95-1.84.44-2.36.31l.42-1.69c.52.13 2.2.39 1.94 1.38Zm.23-2.47c-.2.86-1.54.43-1.98.32l.39-1.54c.43.11 1.83.32 1.6 1.22Z"
                fill="#fff"
            />
        </svg>
    `}),Qo=v({name:"CryptoBtc24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="12" fill="#f7931a" />
            <path
                fill="#fff"
                d="M17.3 10.3c.23-1.6-.99-2.46-2.65-3.04l.54-2.16-1.32-.33-.52 2.1-1.06-.24.53-2.12-1.31-.33-.54 2.16-.84-.2-1.82-.45-.35 1.4s.98.23.96.24c.53.13.63.49.61.77l-.61 2.46.13.04-.13-.03-.87 3.45c-.06.16-.23.4-.6.31.01.02-.96-.24-.96-.24l-.65 1.51 1.71.43.94.24-.54 2.19 1.31.33.54-2.17c.36.1.71.2 1.05.28l-.54 2.15 1.32.33.54-2.19c2.25.43 3.94.26 4.65-1.77.57-1.64-.03-2.58-1.21-3.2.86-.2 1.5-.76 1.68-1.93Zm-3.02 4.2c-.4 1.64-3.16.76-4.05.54l.72-2.9c.9.22 3.76.66 3.33 2.37Zm.4-4.23c-.36 1.48-2.65.73-3.4.54l.66-2.63c.74.19 3.14.54 2.75 2.09Z"
            />
        </svg>
    `}),_m=v({name:"CryptoCkBtc16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <circle cx="8" cy="8" r="7" fill="#3c00ba" />
            <path
                d="M10.57 7.21c.11-.76-.47-1.18-1.27-1.45l.26-1.03-.63-.16-.25 1-.5-.1.25-1.03-.63-.16-.26 1.04-.4-.1-.87-.21-.18.67s.47.1.47.12c.25.05.3.23.3.36l-.3 1.18.06.02-.06-.01L6.14 9c-.03.08-.1.19-.3.15l-.45-.12-.3.73.81.2.45.12-.26 1.05.63.15.26-1.03.5.12-.26 1.04.63.15.27-1.05c1.07.21 1.88.13 2.22-.84.27-.78-.01-1.24-.58-1.53.41-.1.72-.37.8-.93ZM9.13 9.23c-.2.79-1.52.36-1.95.26l.35-1.4c.43.11 1.8.32 1.6 1.14Zm.19-2.03c-.18.71-1.27.35-1.64.26L8 6.2c.36.1 1.5.26 1.32 1Z"
                fill="#fff"
            />
        </svg>
    `}),eg=v({name:"CryptoCkBtc24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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
    `}),Ud="0 0 58 58",Vd=x1`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDct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" width="58" height="58" />
`,tg=v({name:"CryptoIcp16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${Ud}"
        >
            ${Vd}
        </svg>
    `}),ng=v({name:"CryptoIcp24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${Ud}"
        >
            ${Vd}
        </svg>
    `}),rg=v({name:"WalletBitfinity24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" fill="url(#pattern0_3428_1899)" />
            <defs>
                <pattern
                    id="pattern0_3428_1899"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1899" transform="scale(0.0416667)" />
                </pattern>
                <image
                    id="image0_3428_1899"
                    width="24"
                    height="24"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABWVJREFUSEuNVmtQE2cU3c2ym83mRRJCSAgYAhJhsGOJWAW1jlYjOk4VBcUXZUQBMRlAiIgWV6sWRUo7PmakivVZIFOUaStYH1XHx7QdMY4VNdBCEIRECCQEQ57bydQwqCT4/d17zrn3fufeb0HgA09x7m2+Zdhvuo1wTR4mDdHN4OCAy2l5YO7ov9fQoDB5owHH48fllxm2IUeSdZjYMNBvih20DWOwPwqQA2kAyqAMmPt0V4yvtBX19SV/AgBAvMvnU2DtrGI+1cnaRwWoqYTVbIZR6Peufn2TE6NZHUymyE5DPqPxGdEQaNd0aVpyrl/fe+2DBTbI8tjoMFZONiLruHTOrX5Tx16hQHhP0aCwviEBpZO3SNgTRbt4fEGKVf/6oa7leeptdVnLaBGvFaTFpBfQSWgpg6D8yuQwcrbdxDvHamf8AjxQLIo8AQ0AS6ydOrz6Xt7ucQUUUkUoYHM1cBDEn24hluU3V7j76/WkZtcs5RLMGsPfz28xDP1Jx5pxsyd4zAqUH+9cgZFsF4QoTTVdMCk9RpVicwNw/Ges1dw7rUer+/eaqqjDQ5KsrJVwrORbBvUTvX9339xKTXmvT4GSKSU5LIQ4EkJjHFhxo7DIE7wu64wM4/HOv2zvuA9ru7Lr3rQtffulaEfPq5uWfzTaGApVhl/BDT4F9kQXfcGGSVURYv5Z2cIZGWDmVLsbMHtxblSwIOYCBGJThgzDVW2tHVvVanxALlclGbRPqqmD+rqlyyalLVKMGAEYu0WRedM4MNDADWbpJkwOT5xXvkbryejTBSXzw8I/Ou5yIsKX7V0HhRh6iEWxfWPs0ayLCaVm5Z/ec3LcS1YmKOkwRKrBMFgmjJogT6vIODYaNDvx0JoQrvgYw0mARHdXI8VumM/1J6mlUtFKGb5eP64AjuMk4BGlFEKIQjsM37YPWZO+vljc5wFGRMjJUmlCWSCCyJ09WkBAg7pjIgQZS8tWXP6gQduYsC0R8yNOMHkBAjNMtej7jDutjQ+/UwEqp4cgaXGVmMnEaiFgUEoFreUJn+dsS0kBR757veSs+IJAl9lWTYOBWJDh3+gQhCW+dsE204uXm2vuKFWjM0xPq86GUNeRnrbWxv6m9lV3e6sGx60gW7IlPQChVDJB4ryZRMvt4HPzkaCQIgoBdXa2tGWq7m65OuL/5NOhdBa10WkyBRrVGtmlZ6UPfArIE+VkWjvyQxidvZwBu1atuvtlXbK0lMmOkhykENCm3tY2NdZvT63UFDxzE0mlx+GEuaJTxrYXqURLZ9qZR/g5nwJ50RvYTBvjaijdXxgVKZgzo2bjUzdg7ax9fAxAD2Mmx8xgO7a6sFl+w0OUubmmDNDrCzCtPqfir6/ecps75q05kEfIuUKQfCMsgMsRhnNmx5/LaPUQrZ+RF8wjaCI+yGrKv59v+X911CLGnqFT1nZtssgBpiqv7frJZwVKiZIeRPhdDAqgzwySBKyce2pjvY8dB2zdfC7O3PL4Is8PMH0inpi4+GjGyEB6ddG3kYUlFDK0O3zqhF/0kCFj9YkdurFElGu+F+q72w4HkSxLYiVh21OOKsrGintvVRyM2BROIflVh0QJpOwwbu2d5gd48W+Vzz3PodsITpMz3kaAO3hMbE6cOPhsYLhga3x+ysiCG3eSD8RlzqMCpKOREeESAiU/7X7Ve1Xfq2sfstvIIAWJBSBwDpvDofN5AT/SWZQdC/dndntrpbcXDTwwNStO4EBzURRZKBALWTaUBLwmrAQIAhYX4WhC/PxOOlC4btFh738U77no3SzqJUq6GTTFk1BYamchTDKTYoYA4DFIcv2xvG6/16xH8/wHT1gZNzrxylUAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    `}),og=v({name:"WalletBitfinity64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1897)" />
            <defs>
                <pattern
                    id="pattern0_3428_1897"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1897" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1897"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),ig=v({name:"WalletLeather24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" fill="url(#pattern0_3428_1907)" />
            <defs>
                <pattern
                    id="pattern0_3428_1907"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1907" transform="scale(0.0416667)" />
                </pattern>
                <image
                    id="image0_3428_1907"
                    width="24"
                    height="24"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABAZJREFUSEudldtPXFUUh79zm9uBGQahplVqIiStPmDwQVLlJtIQ9dFqTX2gNXgJRSl/gBFRSMBEMrRYLoGEtrERjPah7atofVBRk1qSJhYCITy0YhWYC8Ocmzl7CpYpDMTzcs7Ze2V9e631W2tL4XB4v23bHwKvArns8MjYWS0kR+yv4EhfOqr5iRQKhQaBNwFlJ+fu/i4BrqmFxKgLWAJCu3G+G4CMc7+rFRewaSUT5DgOkiSJZVmWwTazniUDwM4Ay2YlFuXRfY9gpFKsRJdQFAWfz08g4Ofu4l/k5ORgW5YA2076vf5kBYiTWzaGYRDQdRzHwrJMEZGiqOI7J6CTXE1i2Ra6rhOPR3cJkNJq8SgaXq+XRCKeBtg2xcXFHK6ro6amhtm5Ofr6+pibncXn822kc+cI7gF0n5+mpiYWFub54uJFHt6zh7a2NiqrqlhNJCgqKqKjo0NA3MjW67UtQF4v+T1AbW0NwyMjRD7roX/gc06+10xraytdXd1MT9+iN3KG0XPn+Li9Hc3jwTI398kDNcgEvPTyi3R2dnLp668Y6O9n9MJ5YrE43V1dHH39KIfr6mk5dYqJiQmSq6tomjd7DRQkXGkiIrAJBoMMjwxRWvoUN29OceiZZ5mfn2c5FqWwsJCenh6GhgaxJbcJVVTNsz1AqEOSsIXW06EmVuNUVlbw9jtvicK6Krxz+w6Tv/3KlcuXufbDNSzTYim6gsfjQ1G0DEBe7kajuY2kIAv5WbaJIsv4vBqpVIqCggL6z57F7w/Q3NzM9PS0UJdpO3g8HlKmiazIGEZmH9wHWJfl4t2/qa2p4JUjR3j8sSL+WVpiZmaGE8dPMDY2Rnt7O2tra4RCIXJDeWLfsEySySR+v759BO6OY9rk54c5fToi9D5z6w/C+WHKysowDYPGxkauXL1KMDdIdXU1755spjcS4dvvv8OyrOwpcgGarFJSUsL5C6P8MjnJmd4I5eXlwvHBgwf45tIlBgcGiCcStLzfQtXztRxvaBAAVdmiyOHQfzUQETgOe/fuo6OjnRfq6lhcXEQPBPhz8TZTN6Z47lAFmqYhqwqSLDM+Ps6n3d3EYjFs20aW1c0pygS4c8cwTJ548gBvHDsmpOjm/6eff2Rq6gZlpU9TX19P3kP5/H79ukjXwsKCGBNuDTQ1Q6aZAFeqsqyQSESFStwh546ElJEUJ5MsCY/XC7IkCu2eWtU0NFUlZRiomTLNBKxPSVVTSMTjAqKo7uRMiamZqwfFdDXstBw9miYgpmUJiOOk746NWRQO6VkvnE3WW/7IWU2kcEhfBoI7O9rOIitgWcoL6cMSNOz20n8Qsy3AzeGIFA779ju2+oGE89r/i2RLQNSBcUlWP/oXlN2qwiqkz9IAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    `}),ag=v({name:"WalletLeather64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1905)" />
            <defs>
                <pattern
                    id="pattern0_3428_1905"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1905" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1905"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),sg=v({name:"WalletPlug24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" fill="url(#pattern0_3428_1927)" />
            <defs>
                <pattern
                    id="pattern0_3428_1927"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1927" transform="scale(0.0416667)" />
                </pattern>
                <image
                    id="image0_3428_1927"
                    width="24"
                    height="24"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA8ZJREFUSEvNll9oW1Ucx7/n3pP7PzdpmqR1WylbqcUxXd2q+4NC+zBhzAehODbnsCCKUgj1YcwXWR/0QVCw9sUhTKETlcHcQx98WHGFQaHboFhXV7Oxda1/+idNmuQmN8k950hSlc5tSS0K3pf7cM/5fs7394XvuQT/8UOq6kejDVSUWr3II+OYmiquXatGoy2csVApkbgKQDxMpypAjtR/DoKjAI6whcQ3a0RUORK+CKCdwXsWi6mJjQHC4WEQHAL4q2xx+cxfIpGIJYGPEUEeY4x1Ipm8/D8FRMLDQA0HhHVi8R84OCgOqhz8aQIiT/TcfN9LeU/V7fO/13ayeYRCQxAWnBnPvHry+4+FK5p3vrg9tvdY+5QGbb4PfTcIIfcEfl/IB8SBlwH6qef5aT7fKDNuEhDONSXLLZqFLZegER80pss6dOiyzjRo0KFNmDC7eklvdm0e9wF2r7wbSzlPDCSdXeBchSy58NEUFDkJ1ZdEQJ1DVL+LqLoAjZSFdahQYUCPc/COftKfrgqwf1qKEUEGVE+g3uGwCgKer4isP4u8tQKFpqDTDELqb2gyp2FThrIDDXpcg1IbsP/SQqxrOjfw0rU8QjmOrCJh2ZLwc5DgxmaGi+0O7mxKQ6Fp2EoC2+xJBKhbHlE8iGBtQKb7ekzlfOBPm4wAOZVg2VgFzdsCo9sLuLAvA6qkEdTm0RoYgyXRuA+0Y5AMVh9R/oUfemRf8TMEFkF8LuD5ANeC5/rhUB8SloRlU8JYawmfPJcDNzLYZE1iqz1xnYPvGSJDTtUMSqc+eoY0TX9HlAIVBQMomIBrQqQiEL+2oJhuREaTsWQQnO4Czu91odMkdjZ88a1MM8+fI+dYVYA4e8wWDXMjwlM64BoV8TJElN95C+LWk2C/tKJIJczWyTj6mo6FkIOIf/KNyciR03+vjAeWnTe667Bk5L6Ea0koGKviFZAB5Gzw8UMQS1sqFdrXHcTXe3w/Glpp91xTU35dANHfSXl3fFCi3uvCNaXKmCoujIoLzLWBjRwHQHDhcW3mlZ66w/lt4fEHFd5D61rMbtF5MXVCovxtFDV91UU5EwvIhOCdPQU49rWSJL1pnt9xZUNtWt4kpus3w58eghBdKCmrgef9Hh/p6ZWH3zlDLhGv2qVV/Ub7Y6e4HXwL2sqHlZkICcKjt0mJdJIW926tG3d9gMttfjTPXAEttFUEJXGCNOCDWuLl7+sDCMiY1UdB3f0AGCRxnDTiq38NUMniTmAr9JVHweBgGeNkB+75CdhwyOs5ZbU1vwPVLY8oICNk5AAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    `}),lg=v({name:"WalletPlug64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1923)" />
            <defs>
                <pattern
                    id="pattern0_3428_1923"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1923" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1923"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),cg=v({name:"WalletStoic24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" fill="url(#pattern0_3428_1919)" />
            <defs>
                <pattern
                    id="pattern0_3428_1919"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1919" transform="scale(0.0416667)" />
                </pattern>
                <image
                    id="image0_3428_1919"
                    width="24"
                    height="24"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABIFJREFUSEuVlm9rHEUcxz8z+/f2LreXu7SpyTWYtihCpWLV1CpiSN+CPhbfh4j4MkTxsb4A9VGVVkFs8UHFICiUNkJKk6a5/3e7MyMzu5te2kp1YW9md2d+3/n+/n1PnLl4ZU0K87ERvAcsCAPSgEAjjUYLjRHMjRItwFBd8mhWTNxzD8RXvic/FWdf3/oM+LD6Yr9aENAgtBstgHu2v+KRwQLoqQBuqTF8Kdbf2DoEmvbU1WU3KlkYt7e1b9k4Zka6sQCDTMryAE9l1BdrG1vGnjgoDojxJaM8I4sFRmqE0XgGfK3xtR0lniVncIYtgDpG4jgjsfrmlrEbQlUChD4P1JhZGjEcHRLFUWlY4+eGIBfFWB7Ir9cZjIYEQYAQAu3sWJBigXjucgEQ50VwJz4Ma5L0/PPMIlhsNp2xCEi0pIFPbCQxlokkU4adnR22t7cRwsP3wtJXJcDy5S1jDVQAfZOhTiyw/PbL0KkzySd4WhMpiJWmu9B2ay3jKJekccr93T2uXr1KnmVzuVIkyRMMevkUVls0N14gb8UuDpZhzeBO3tBQN56bW4CWn6Amim+/+Y7RcEIU1R4xsACPx2CcT+DUIsubrzAMNdloSOIFJEFAzfNQ/RGri22SMEIPJtSUYHTQ56frN1BKovIyOGWKi+6lLWN9b93kiiyQHASKxsaL1FbaqMGARAYkYQEw3N9Hz3KW0hbdzhJxrhkfDPjh+58ZjxQYeVQ/LshVmvouxyEMfXaZEL66jrfUIBGChh8dAXQaDfZ37zE6HJCGId1WGyaK69du0juc4El/DkA/ArCJZZlk0wmzVkxwcZ3d6SGdpM7JtM1CHDkGdS+gHkXk4ymj/X3EcEwjqPHrzW2G/cxlUpGfeVGkFYMKYDwckLcT2u9egMWYycFDxg97NOKYs901Eum5wrOBj5Rm+mCPnT/vcPfOfdA2RatCK7NoHqCof8WkHrD4znmCky1Crend34MsJ41rrHRO4NnqLgHaUUh/75Afr91g0M+QFYOylx1j4GrQaAaJJH7tHI3TyzQ8n3wwohb4JF5I4nnOuGVhGbQj/9kAVQe15Eb9HuPYY+HCOsFSSqe5ALmm2WywmKbO9zbjAmWLrXDR3b+si+7ZRvYUF13adL2x0gE7t81rFGgyCedeOkdneZkwrTOcTminLUSmiHK4d/su27/cdC2j8L0s0tQZLFvF2hxA4aKiDRthxQYyT7PUXaHdPUW61MEYg4/g9q0/2Pt7F6aZc9lRcJ8FUHX1CmCWZ3hRSNJqcGp1hThK+P3Wb+jxtIgFntOLo+v/ANhNYRjysN8jy6ZEtYQoijBKk09nJPU6+dTm+38AqJYUclmIidG2vLUVv1LNcIVUaPRxu08wKF+ItUubPSv2/wagrXRq47LGpqbEI5e428XycZzKRcX7nji9sfm5EHwwL/rVHmUMmWdJGMK8bIhCuHezsiMESpZ/Ep5gZEP/hTjz1pW1XOmPwLxvxX9+WYYpTqqNExnLwMqiTWOrfNaboSo0+rGrb4T4OlDik38AEMkqavgU6LwAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    `}),ug=v({name:"WalletStoic64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1915)" />
            <defs>
                <pattern
                    id="pattern0_3428_1915"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1915" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1915"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),dg=v({name:"WalletUnisat24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" fill="url(#pattern0_3426_1893)" />
            <defs>
                <pattern
                    id="pattern0_3426_1893"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3426_1893" transform="scale(0.0416667)" />
                </pattern>
                <image
                    id="image0_3426_1893"
                    width="24"
                    height="24"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABTBJREFUSEttlltsFFUYx3/nzOxulxZ6lVulWpFQQIyYCIiAyC2SanwwkBBiLPGWKBCevMTIg9FEjIkmgE8mViNgGoIB9YFLFEgIYsODKBgoCGgRWijt9rLdnZ05x3wzs8uKnpedOXO+73/O/3zf/7+Kf480sFRrvc5auxhlJwBuuMTIJxeNATzQBVCAxcfSg+IYhp0B/ACMFtPKkuJo1Fq/bq1dB9TLpMYWk4CVpW6YE3xQNoqLf+IkfcBOHz4ErspcEaBRKbUdeEbb0hyqGK0ErGyESSVUZuVEEYo8xS/7fNggILIqrbX+wFq7UckwFoMNQ504heRS8Va05ArzJbAkMOQxBCX0Eohmm294QznQapRqBxrCfVkBkPAIQMZdDTBr5mQKeY+RjM+17kEGh+U+xjDCEH4ZQBHJKm5iaVOOZpexam1IsYmOmtIOgQlIOzBz+hgWLZyDDeBW7yCZPo/ea1l6r+UYynlkGMIrklPOouRT7FaOotsoGm1xv5I4lQCrWbRgBk8tv4+/L5/l5xPn0ME4xlRMwstpMgMj9GYGuJEfIWv8qAZCBuKLiN6vygkKBtwIQFOR1lg/T02V5v0tm+jp7mT/nuNcvARZoLnapbZmEg4u/UPDXB/OkPE8gmJJlBBCgn0BsFEdCOsaTJ7KFKxf8wArl83l2+8P8c3ev5jaBI2NtZzo7GckD9MnTyQ3ahjyRrk+MkQu3LAGHV+zqYjK+jZAKqTFTRZIGp93Ns1l1YoFdOw5yJftZ7m3CVatWs7BQ4e52AVDFprravGs5UYmy4AB42iCGIogeSeAdCok3QKB5/Pys1NpW/0kNpthx45dnDhlGJuCh1pSzJ45g6M/nef0pSxVdTX0Dubo8wN8pcHJR5cgBzGUnyACwIyGLTRtHGzZ/DQP3l/L+V//YO++M/xyvp/W+WNpbV3CSJDg08/3cqYbBgLoj3UjFpaoV0QIXLCBUliVBGvB+qQwTHSg2oG3Ns/j4ZnN9Fzs5+uOA/TlYWXrdKZNqWfUpvnkq2McOVNAO0kK2sULslGD3wZwbKCEfh0BGKjE0qAcqpVH00R46blHaR5fw41b/ew/cpJzFyyvtDUzZ/4iOq8UeHvrbq5ch7yNL7moIFK2LgnpIaxUVQkgSQNpqimQZpDaanj+xUdontrEpa5btLf/SFU1rH9tGfUts3j3o3YOHx1Ep1LkvXyZQJYDSHmFFIkAJKmhkioVUJc2DGcHqGqA1WvmUuhX7Os4iWeg7dVZtCx6nI8/6+Dg4ZsYB4zQIQIUN5xyUAWpJ1MmZvKYUknSjuGe8UkSjqG7Z5S8B/VJCDyYXAEvbHgM3TSb97Z/QVfXKIEtqq5wFNqIH0oF0FgmI6XHpAOT6l1qx1ah/QTDAxmyAx4NFbBiYQPzljxBx/FzfHf0NEPS5iWBFCcREB1KxS4sa/8PQLq+qlIzobqCprEp6lKKpMkxpWkS02a0cOTUGQ50Xub6SBSdcMH4sRZFDrI7lGsUJbm+E0iOXZeG5hqXu2vH0DixgcrKSn678Cedv2cYln2mIJcHNwGBEB5V6U0FbUJ3hYvearEbyxyuhCN3IwcWRqsqlSzGz1tyoyA9KxuWpo3suWSR1mq2GcObJct0iCzzThAj7S/BUmU6YlaocwKNic2ptOcoWHD2BWWWWdxtaPrK3DZ9+aBi3w20jSov7lCNRoW2KQ4onRRqcp+r2emb/5p+EURMbCnodWAXK5ig0XJ1CIDQFXZlXC8OSYLwWoMeMMfA7OSOvy3/AM5sKynZojLSAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    `}),hg=v({name:"WalletUnisat64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3426_1891)" />
            <defs>
                <pattern
                    id="pattern0_3426_1891"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3426_1891" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3426_1891"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),fg=v({name:"WalletXverse24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" fill="url(#pattern0_3428_1911)" />
            <defs>
                <pattern
                    id="pattern0_3428_1911"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1911" transform="scale(0.0416667)" />
                </pattern>
                <image
                    id="image0_3428_1911"
                    width="24"
                    height="24"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABLRJREFUSEutlm1olVUcwH/nnOe5r3Obyjbbhz4I9aWsyBFCKQgZvpT4kpVYGBV9ydhWaVjmW2PpcDULiYKCQJQKSjR7sRmNfIHIIoxgsA9SrGy7a3m3u937PM95Tpxzd7XpBn3wwIF7n+f8/7//+3lEY2PjjXEc7wDWATMApN0mRhkQBjASg4cWSUKRQIsEsTtlz0YoApQJUJSQBCCivEF/GKmwTTQ0NLwrhHgCUE7iPwCr3KkxktgBfKdc402cAmUiBBEeAYKSVV7exNogPhBz5sz5B6ipKL8CiZHW+grSQSygolwijPXDnosRhAgZYwgwIiYWVjDOW8BlNZMg4ioAoI1AiLKjFq5i62HswqiUQKOJKCvXMnbnrgEopUilUhSLRcaDEtlMhv7+fqqqqkinEs7ahOejrNVR7CDG/lY+NlglJdEOYNFTALLZLLlcDuNcxFnjez7JhEccFRE6gDAgoSRJqfCMQEmfYmQwforA823KiRSuEKb0YGRkhFVrVnP3ooXkL41y6PAhckN/4ROigzwqKnFDXR03z51LfXYWQ0PDnPnpPGNGEqoUgfQIpXReXAMwxrjwdHTu4+knn6JQivjuVA9btrQwdPE3GmqS1PqSBbffweJ7FjIwkON8bx+fHu9GJ7OM4ztASSnMVB5IKSkUCuzYtZNNm5pd8uw6+c2XbG19Bp37gzWLF3HvrfPc83w6xUcnuuk5+yO50ZDMrDoH0EqhhbrWA8/zsBCb1M0vbmXDhkcJw4BMKkFP9xH2vvQCajjHTTNnsmzpMs792U/3D+e48Psg+aJGZWtcKcdSufxNClEcxwghSCQSSOmRSWdob29n1eqVjJVGySQVPV9/yp6d20jHmttumcf353+lt+8CeGnX0yHl0FiALeJrcmCt11qTSVdhk11TW0PHvg4eWLkcXxq0KXDs6Ccc2P86fb196MgwNhaRzWSRXoIoitEIkMJNgEkAq9yuMAwdfXBwgDubmujq2s+CBXfhu3wIiibPqbNnaGluYeDiANWprG0GxkcLCKNdFCpryjK1LwvjRebPb6Jl8/Pcv2QJo6NjVFVlnJwxGiMUx05+wc7tO+jr7cXDkESQVMbNpmkBNg+2k+vr69n+6m7uW7rMjTbbsWe++paoFLJo1RInHxg48tlx3ujqpPeXn6mrrqKYH7JtNj0gn88ze/ZsWltbeba5GSXtqIYTRz9ny6bn3Jh4efs2lq9dS3KGRcNrnV28c+BNCvm/SSk7liuAGNHY0Dhp2AlRzkNH517WWiXJJCOFUR5/bCNnT5/GaKiurWF3WxsPPrwOm5a3DrzNnvY2XBXaHDiNE8PuaoDt5CAIWLFyBU1NTS5cw8PDHDx8kMHBQTzluyKoq6vjkfXrqZ1RTU9Pj9v2eSKRmgjPNACpFLG2g1e7cq003lipQDqdcePahq1UKjlFOoywE9h6agGmMiWn86Cs1MfIctOVSxakLx3YAqwRrppig9HaeWnPWdmJO3D6EFXSH4uyi5VlgXYpV1OTXkz6G5uK3JUQXQKqJ0vZe+C6AC7ZRnsP2Fi59KUpV9H/BlxlWXzZrlgbY94X9rPFGPOKMeYh68l1AoxA/LGUcte/YRsw9IEU9e8AAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    `}),pg=v({name:"WalletXverse64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1910)" />
            <defs>
                <pattern
                    id="pattern0_3428_1910"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1910" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1910"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),Wd=v({name:"BrandDiscord24Icon",svgTemplate:c`
        <svg
            fill=${G["toniq-icon-fill-color"]("#5865f2")}
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
    `}),zd=v({name:"BrandDistrikt24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${G["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),Zd=v({name:"BrandDscvr24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="none"
        >
            <path d="M0 0h24v24H0z" />
            <clipPath id="a">
                <path
                    d="M7.325 19.928c-4.472-2.313-6.188-7.527-4.671-12.211a.6002.6002 0 0 0-.343-.741l-.087-.037-.141.299c-.157.33-.301.668-.424 1.014-2.067 5.719.893 12.027 6.612 14.094.034.013.068.024.104.037 2.557.482 5.043.382 6.956-.6 1.964-1.011 3.342-2.95 4.629-5.504-.417.775-.946 1.482-1.57 2.106-2.921 2.918-7.447 3.416-11.065 1.543Z"
                />
            </clipPath>
            <g clip-path="url(#a)">
                <path d="M.744 6.63h20.433v16.803H.744z" style="fill:url(#b)" />
                <ellipse cx="12.006" cy="11.738" rx="10.421" ry="10.317" style="fill-opacity:.1" />
            </g>
            <clipPath id="c">
                <path
                    d="M5.761 16.21c2.971 3.042 7.964 3.904 11.16.705 1.577-3.806.841-6.125-1.438-7.338 1.005 1.344 1.15 3.149.369 4.635-1.65 3.159-6.387 2.984-8.687.631a7.119 7.119 0 0 1-1.988-4.241c-.7-3.993.877-7.118 4.694-9.369-2.973.671-5.179 2.756-6.266 5.837-1.03 3.209-.199 6.728 2.156 9.14Z"
                />
            </clipPath>
            <g clip-path="url(#c)">
                <path d="M2.801.623h15.854v19.939H2.801z" style="fill:url(#d)" />
                <path
                    d="M18.563 9.679c0 5.122-3.135 8.006-6.732 8.006-4.488 0-7.83-3.618-7.83-8.302 0-4.684 3.638-8.488 8.126-8.488 4.487 0 6.436 4.1 6.436 8.784Z"
                    style="fill-opacity:.1;fill-rule:nonzero"
                />
            </g>
            <clipPath id="e">
                <path
                    d="M10.581 8.197c1.813-.59 3.707-.213 4.899 1.38 1.153.88 1.773 2.148 1.87 3.812.058 1.027-.086 2.201-.432 3.526 2.717-2.717 2.717-7.123 0-9.842-2.682-2.683-5.766-2.476-8.938-.833l-.197.102.165 5.066c.249-.744.82-.799 1.245-1.328.445-.553.752-1.564 1.388-1.883Z"
                />
            </clipPath>
            <g clip-path="url(#e)">
                <path d="M7.398 4.175h11.948v12.968H7.398z" style="fill:url(#f)" />
                <path
                    d="M2.382.835v22.782h19.744V.835H2.382Zm9.339 18.532c-3.629 0-5.915-1.241-5.915-4.87 0-3.668 2.716-8.014 6.344-8.014 2.989 0 6.136 2.691 6.136 6.317.002 3.628-2.937 6.567-6.565 6.567.002 0 0 0 0 0Z"
                    style="fill-opacity:.1;fill-rule:nonzero"
                />
            </g>
            <clipPath id="g">
                <path
                    d="M11.998 2.96c4.991-.003 9.036 4.039 9.041 9.027 0 1.499-.372 2.974-1.082 4.292-2.541 5.04-6.403 7.076-11.587 6.104 5.737 2.001 12.009-1.025 14.013-6.759 2.001-5.738-1.025-12.009-6.759-14.014-1.05-.366-2.153-.573-3.267-.607C12.237 1 12.116 1 11.998 1c-.715 0-1.427.079-2.124.233-4.126 2.264-5.693 5.386-4.697 9.369-.32-3.029 1.315-5.926 4.073-7.215l.404-.118a8.9704 8.9704 0 0 1 2.344-.309Z"
                />
            </clipPath>
            <g clip-path="url(#g)">
                <path d="M4.425.688h19.032v22.617H4.425z" style="fill:url(#h)" />
                <path
                    d="M.079-3.613v29.755H24.56V-3.613H.079Zm12.158 26.276c-5.415 0-9.806-4.666-9.806-10.419S6.822 1.828 12.237 1.828c5.415 0 9.805 4.666 9.805 10.416 0 5.751-4.39 10.419-9.805 10.419Z"
                    style="fill-opacity:.1"
                />
            </g>
            <clipPath id="i">
                <path
                    d="m10.702 15.828-.121-7.629c-.589.291-1.113.702-1.538 1.203-.463.547-.827 1.218-1.092 2.006l.1 3.068.102.097c.83.804 1.721 1.077 2.549 1.255Z"
                />
            </clipPath>
            <g clip-path="url(#i)">
                <path d="M7.823 8.102h3.01v7.817h-3.01z" style="fill:url(#j)" />
                <path
                    d="m11.389 6.886-2.168.065.276 9.212 2.169-.065-.277-9.212Z"
                    style="fill-opacity:.1"
                />
            </g>
            <defs>
                <linearGradient
                    id="b"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(12 20 -20 12 5.2522 5.404)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#ffcd02;stop-opacity:1" />
                    <stop offset=".14" style="stop-color:#ffcd02;stop-opacity:1" />
                    <stop offset=".37" style="stop-color:#ff963b;stop-opacity:1" />
                    <stop offset=".7" style="stop-color:#ff6373;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#ff4295;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(18 18 -18 18 1.7784 1.643)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#1b59d2;stop-opacity:1" />
                    <stop offset=".51" style="stop-color:#4e9bf2;stop-opacity:1" />
                    <stop offset=".98" style="stop-color:#1b59d2;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#1b59d2;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="f"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(15 8 -8 15 6.0834 6.4501)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#50aff3;stop-opacity:1" />
                    <stop offset=".33" style="stop-color:#4064c5;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#6c349f;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="h"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(9 26 -26 9 9.1934 -1.048)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#a700ba;stop-opacity:1" />
                    <stop offset=".49" style="stop-color:#c00c95;stop-opacity:1" />
                    <stop offset=".86" style="stop-color:#db1b62;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#db1b62;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="j"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(0 8 -8 0 9.3272 8.1035)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#1c58d2;stop-opacity:1" />
                    <stop offset=".33" style="stop-color:#5734ca;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#a203bc;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
    `}),mg=v({name:"BrandFacebookLogo24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${G["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),gg=v({name:"BrandGoogleLogo24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${G["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),wg=v({name:"BrandIcScan24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${G["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),Gd=v({name:"BrandInstagram24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${G["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),vg=v({name:"BrandInstagramFlat24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${G["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),Yd=v({name:"BrandMedium24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${G["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),bg=v({name:"BrandNftgeek24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${G["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),Qd=v({name:"BrandTelegram24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${G["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),Kd=v({name:"BrandTiktok24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${G["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${G["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),yg=v({name:"BrandTiktokFlat24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${G["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),Jd=v({name:"BrandTwitch24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${G["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Xd=v({name:"BrandTwitter24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${G["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),kg=v({name:"BioniqRobot100Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${G["toniq-icon-stroke-color"]("#8A2BE2")}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="100"
            height="100"
            viewBox="0 0 100 100"
        >
            <path
                fill=${d["toniq-icon-fill-color"].value}
                stroke-width="calc(${d["toniq-icon-stroke-width"].value} * 2)"
                d="m50 89-38.5-3L26 22h48l14.5 64L50 89M23 35.6l-8.5-2.1-6 23 9.2 2.3m59.6-23.2 8.4-2.1 6 23-9.2 2.3"
            />
            <path
                stroke-width="calc(${d["toniq-icon-stroke-width"].value} * 2)"
                d="M39 9.5 42.1 22M61 9.5 57.9 22M28.5 55h43L76 79H24l4.5-24ZM67 55v24m-8-24v24m-9-24v24M33 55v24m8-24v24m4.5-43.5-1-1.5h-13l-1 1.5 7 10h2l6-10Zm9 0 1-1.5h13l1 1.5-7 10h-2l-6-10Z"
            />
        </svg>
    `}),xg=v({name:"EntrepotLogo144Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${G["toniq-icon-fill-color"](String(b.brandPrimary.foregroundColor))}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="134"
            height="144"
            viewBox="0 0 134 144"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `}),At={"core-16":[Id,Hp,Up,Vp,Et],"core-24":[Wp,zp,ss,Zp,Gp,ls,Bd,Yp,Qp,Kp,Jp,Xp,_p,em,tm,Ld,qd,nm,rm,Pd,om,im,am,sm,Od,lm,cm,um,dm,hm,Dd,fm,pm,mm,gm,wm,vm,ba,bm,ym,km,xm,Am,$m,Cm,cs,Sm,Tm,Mm,Em,Im,Bm,Lm,qm,Pm,Nd,Rd,Om,Dm,Nm,Rm,Fm,jm,Hm,ao,Um,Vm,Fd,Wm,zm],"core-48":[Zm,jd,Gm,Ym,Qm],"core-64":[Hd,Km,Jm],cryptocurrencies:[Xm,Qo,_m,eg,tg,ng],"external-wallets":[rg,og,ig,ag,sg,lg,cg,ug,dg,hg,fg,pg],"third-party-brands":[Wd,zd,Zd,mg,gg,wg,Gd,vg,Yd,bg,Qd,Kd,yg,Jd,Xd],toniq:[kg,xg]},Ag=Cr({discord:nt(void 0,""),distrikt:nt(void 0,""),dscvr:nt(void 0,""),instagram:nt(void 0,""),medium:nt(void 0,""),telegram:nt(void 0,""),tikTok:nt(void 0,""),twitch:nt(void 0,""),twitter:nt(void 0,""),website:nt(void 0,"")}),$g=Ag.defaultValue,_d={discord:Wd,instagram:Gd,telegram:Qd,tikTok:Kd,distrikt:zd,twitch:Jd,dscvr:Zd,medium:Yd,twitter:Xd,website:Fd},zl="toniq-",{defineElement:ie,defineElementNoInputs:us}=Ja({assertInputs:e=>{if(!e.tagName.startsWith(zl))throw new Error(`Tag name should start with '${zl}' but got '${e.tagName}'`)}}),Yt=ie()({tagName:"toniq-bold-space",styles:p`
        :host {
            display: inline-flex;
            position: relative;
        }

        .text {
            display: inline-block;
            max-width: 100%;
            white-space: inherit;
            text-overflow: inherit;
            overflow: inherit;
        }

        .text.bold {
            /* so that the element still takes up space but it's not visible */
            visibility: hidden;
            ${D.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?c`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),$=ie()({tagName:"toniq-icon",styles:p`
        :host {
            display: flex;
            ${q["vira-icon-fill-color"].name}: ${d["toniq-icon-fill-color"].value}
            ${q["vira-icon-stroke-color"].name}: ${d["toniq-icon-stroke-color"].value}
            ${q["vira-icon-stroke-width"].name}: ${d["toniq-icon-stroke-width"].value}
        }

        ${de} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return c`
            <${de.assign(e)}></${de}>
        `}}),ya=p`8px`;var fn=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e.TextOnly="text-only",e))(fn||{}),e0=(e=>(e.Left="left",e.Right="right",e))(e0||{}),t0=(e=>(e.Pulse="pulse",e))(t0||{});const ge=ie()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-button-disabled":({inputs:e})=>!!e.disabled,"toniq-button-effect-pulse":({inputs:e})=>e.effect==="pulse"},styles:({hostClasses:e})=>p`
        :host {
            ${D.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ze};
        }

        :host(:hover) button {
            ${F(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${F(b.accentPrimaryActive)};
        }

        button {
            ${ue};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${ya};
            ${F(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${K.interaction},
                background-color ${K.interaction},
                border-color ${K.interaction};
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${F(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${F(b.pagePrimary)};
            border-color: ${b.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-text-only"].selector} button {
            color: inherit;
            background-color: transparent;
            border-color: transparent;
        }

        ${e["toniq-button-effect-pulse"].selector} button {
            animation: ${Wl.buttonPulse.animationName};
            animation-iteration-count: infinite;
            animation-duration: ${K.pulse};
            animation-timing-function: ease-in-out;
        }

        :host(.${e["toniq-button-text-only"].name}:hover) button {
            filter: brightness(85%);
        }

        ${e["toniq-button-disabled"].selector} {
            ${Xt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${b.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${b.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
        button .text-template + .icon-template {
            margin-left: 8px;
        }

        ${Wl.buttonPulse.keyFrames}
    `,renderCallback({inputs:e}){const t=e.iconPlacement??"left",n=e.icon?c`
                  <${$.assign({icon:e.icon})}
                      class="icon-template"
                  ></${$}>
              `:"",r=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"",o=we(t==="left",n),i=we(t==="right",n);return c`
            <button ?disabled=${e.disabled}>
                <slot>${o} ${r} ${i}</slot>
            </button>
        `}});function Cg(e,t,n={behavior:"smooth"}){let r=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=ds(e)[o];i==="-"&&(r*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+r,u=s.filter(h=>i==="+"?h>l:h<l).sort((h,m)=>i==="+"?h-m:m-h);let f;return u.length>0?f=u[0]:i==="+"?f=a:f=0,e.scrollTo({...n,[o==="x"?"left":"top"]:f})}function Sg(e){const t=window.getComputedStyle(e),n=e.getBoundingClientRect();let r=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let w=parseFloat(m);return/%/.test(m)&&(w/=100,w*=g),w}let l=s(r,n.width),u=s(o,n.height),f=s(i,n.width),h=s(a,n.height);return{x:{before:l,after:f},y:{before:u,after:h}}}function Tg(e,t,n="both"){return n==="x"&&e.right>=t.left&&e.left<=t.right||n==="y"&&e.bottom>=t.top&&e.top<=t.bottom||n==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function n0(e){let t=[];for(const n of e.children)t=t.concat(n,n0(n));return t}function Mg(e,t=!0){const n=e.getBoundingClientRect(),r={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=n0(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",u=i==="x"?"scrollLeft":"scrollTop";for(const f of o){const h=f.getBoundingClientRect();if(t&&!Tg(n,h,a))continue;const m=window.getComputedStyle(f);let[g,w]=m.getPropertyValue("scroll-snap-align").split(" ");typeof w>"u"&&(w=g);const k=i==="x"?w:g,x=h[s]-n[s]+e[u];switch(k){case"none":break;case"start":r[i].start.push(x);break;case"center":r[i].center.push(x+h[l]/2);break;case"end":r[i].end.push(x+h[l]);break}}}return r}function ds(e){const t=e.getBoundingClientRect(),n=Sg(e),r=Mg(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Zl([...r.x.start.map(a=>a-n.x.before),...r.x.center.map(a=>a-t.width/2),...r.x.end.map(a=>a-t.width+n.x.after)].map(i(0,o.x))),y:Zl([...r.y.start.map(a=>a-n.y.before),...r.y.center.map(a=>a-t.height/2),...r.y.end.map(a=>a-t.height+n.y.after)].map(i(0,o.y)))}}function Zl(e){return Array.from(new Set(e))}const so="templates-container",Eg=4e3;var ka=(e=>(e.Default="default",e.Banner="banner",e))(ka||{});const Ie=ie()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${Sp(`.${so}`)}

        .${T(so)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;
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
            position: absolute;
            max-width: 20%;
            opacity: 1;
            transition: ${K.pretty};
            top: 0;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 200;
            background: linear-gradient(
                var(--background-degrees),
                white 0%,
                rgba(255, 255, 255, 0) 100%
            );
            will-change: visibility;
        }

        ${e["toniq-carousel-banner-variant"].selector} .arrow {
            background: none;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow ${$} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 12px;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            transition: ${K.interaction};
            border: 1px solid transparent;
            ${F(b.pagePrimary)};
        }

        .arrow ${$}:hover {
            border-color: ${b.pageInteractionHover.foregroundColor};
            ${F(b.pageInteractionHover)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            /*visibility: hidden;*/
            /*
                I'm giving opacity a shot since we've moved the arrows to being absolutely
                positioned. Maybe that will help? If the carousel starts resetting its scroll
                position randomly for no apparent reason, try going back to using visibility. Note
                that transitions won't work anymore, so remove the transition duration that was
                added above in this same commit.
            */
            opacity: 0;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:n,host:r}){e.enableAutomaticCycling&&t.rotationIntervalId==null?n({rotationIntervalId:window.setInterval(()=>{Ti({host:r,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Eg)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),n({rotationIntervalId:void 0}));const o=Gl(t.scrollSnapPositions,0),i=Gl(t.scrollSnapPositions,-1);return c`
            <div>
                <div
                    class="arrow left ${he({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${$.assign({icon:ss})}
                        ${y("click",()=>{Ti({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:r})})}
                    ></${$}>
                </div>
                <div
                    ${$n(()=>{n({scrollSnapPositions:ds(xa(r)).x})})}
                    class=${so}
                    ${y("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};n({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>c`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${he({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${$.assign({icon:ls})}
                        ${y("click",()=>{Ti({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:r})})}
                    ></${$}>
                </div>
            </div>
        `}});function Gl(e,t){const n=t>=0?1:-1,r=t<0?e.length+t:t,o=r+n,i=e[r],a=e[o];if(!(i==null||a==null))return(i+a)/2+n*20}function xa(e){const t=e.shadowRoot.querySelector(`.${so}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function Ti({host:e,direction:t,allowWrapping:n,blockIfHovering:r}){if(r&&e.matches(":hover"))return;const o=xa(e),i=o.clientWidth,a=ds(xa(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,u=o.scrollLeft>=l-10,f=o.scrollLeft<=s+10;if(t==="right"&&u)n&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&f)n&&o.scrollTo({behavior:"smooth",left:l});else{const h=Ig(e,t),m=Yl(o.scrollLeft,a,!1),g=t==="right"?1:-1,w=(o.clientWidth-h*3)*g,k=Yl((m||0)+w,a,!0);t==="right"&&k>m?o.scrollTo({behavior:"smooth",left:k}):t==="left"&&k<m?o.scrollTo({behavior:"smooth",left:k}):Cg(o,t)}}function Ig(e,t){const n=`.arrow.${t}`,r=e.shadowRoot.querySelector(n);if(!r)throw new Error("Failed to find arrow element for calculating its size.");return r.clientWidth}function Yl(e,t,n){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!n||i<=e)?i:o},1/0)}const bt=ie()({tagName:"toniq-checkbox",events:{checkedChange:oe()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Xe("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Xe("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Xe("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Xe("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Xe("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${D.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${K.interaction},
                background-color ${K.interaction},
                opacity ${K.interaction};
            border-radius: 8px;
        }

        button {
            ${ue};
            cursor: pointer;
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
            ${Ze};
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

        ${Nt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Xt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=c`
            <span class="checkbox ${e.checked?"checked":""}">
                <${$.assign({icon:Ld})}
                    class="check-mark ${he({hidden:!e.checked})}"
                ></${$}>
            </span>
        `,o=c`
            <slot
                class=${he({label:!0,checked:e.checked})}
            >
                <span
                    class=${he({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return c`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${y("click",()=>{const i=!e.checked;t(new n.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${r} ${o}
            </button>
        `}});var Zn=(e=>(e.Default="default",e.Secondary="secondary",e.Success="success",e.Warning="warning",e.Danger="danger",e))(Zn||{});const Mi=ie()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary","toniq-chip-success":({inputs:e})=>e.variant==="success","toniq-chip-warning":({inputs:e})=>e.variant==="warning","toniq-chip-danger":({inputs:e})=>e.variant==="danger"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${D.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${F(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${F(b.accentSecondary)};
        }

        ${e["toniq-chip-warning"].selector} {
            ${F(b.colorWarning)};
        }

        ${e["toniq-chip-danger"].selector} {
            ${F(b.colorDanger)};
        }

        ${e["toniq-chip-success"].selector} {
            ${F(b.colorSuccess)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?c`
                  <${$.assign({icon:e.icon})}></${$}>
              `:"";return c`
            ${t}
            <slot>${e.text}</slot>
        `}});class en extends Error{}class Bg extends en{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Lg extends en{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class qg extends en{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class pn extends en{}class r0 extends en{constructor(t){super(`Invalid unit ${t}`)}}class Ce extends en{}class yt extends en{constructor(){super("Zone is an abstract class")}}const A="numeric",tt="short",qe="long",Bo={year:A,month:A,day:A},o0={year:A,month:tt,day:A},Pg={year:A,month:tt,day:A,weekday:tt},i0={year:A,month:qe,day:A},a0={year:A,month:qe,day:A,weekday:qe},s0={hour:A,minute:A},l0={hour:A,minute:A,second:A},c0={hour:A,minute:A,second:A,timeZoneName:tt},u0={hour:A,minute:A,second:A,timeZoneName:qe},d0={hour:A,minute:A,hourCycle:"h23"},h0={hour:A,minute:A,second:A,hourCycle:"h23"},f0={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:tt},p0={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:qe},m0={year:A,month:A,day:A,hour:A,minute:A},g0={year:A,month:A,day:A,hour:A,minute:A,second:A},w0={year:A,month:tt,day:A,hour:A,minute:A},v0={year:A,month:tt,day:A,hour:A,minute:A,second:A},Og={year:A,month:tt,day:A,weekday:tt,hour:A,minute:A},b0={year:A,month:qe,day:A,hour:A,minute:A,timeZoneName:tt},y0={year:A,month:qe,day:A,hour:A,minute:A,second:A,timeZoneName:tt},k0={year:A,month:qe,day:A,weekday:qe,hour:A,minute:A,timeZoneName:qe},x0={year:A,month:qe,day:A,weekday:qe,hour:A,minute:A,second:A,timeZoneName:qe};class Er{get type(){throw new yt}get name(){throw new yt}get ianaName(){return this.name}get isUniversal(){throw new yt}offsetName(t,n){throw new yt}formatOffset(t,n){throw new yt}offset(t){throw new yt}equals(t){throw new yt}get isValid(){throw new yt}}let Ei=null;class Ko extends Er{static get instance(){return Ei===null&&(Ei=new Ko),Ei}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return B0(t,n,r)}formatOffset(t,n){return tr(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let lo={};function Dg(e){return lo[e]||(lo[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),lo[e]}const Ng={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Rg(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,o,i,a,s,l,u,f]=r;return[a,o,i,s,l,u,f]}function Fg(e,t){const n=e.formatToParts(t),r=[];for(let o=0;o<n.length;o++){const{type:i,value:a}=n[o],s=Ng[i];i==="era"?r[s]=a:L(s)||(r[s]=parseInt(a,10))}return r}let Wr={};class mt extends Er{static create(t){return Wr[t]||(Wr[t]=new mt(t)),Wr[t]}static resetCache(){Wr={},lo={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=mt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return B0(t,n,r,this.name)}formatOffset(t,n){return tr(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=Dg(this.name);let[o,i,a,s,l,u,f]=r.formatToParts?Fg(r,n):Rg(r,n);s==="BC"&&(o=-Math.abs(o)+1);const m=Xo({year:o,month:i,day:a,hour:l===24?0:l,minute:u,second:f,millisecond:0});let g=+n;const w=g%1e3;return g-=w>=0?w:1e3+w,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Ql={};function jg(e,t={}){const n=JSON.stringify([e,t]);let r=Ql[n];return r||(r=new Intl.ListFormat(e,t),Ql[n]=r),r}let Aa={};function $a(e,t={}){const n=JSON.stringify([e,t]);let r=Aa[n];return r||(r=new Intl.DateTimeFormat(e,t),Aa[n]=r),r}let Ca={};function Hg(e,t={}){const n=JSON.stringify([e,t]);let r=Ca[n];return r||(r=new Intl.NumberFormat(e,t),Ca[n]=r),r}let Sa={};function Ug(e,t={}){const{base:n,...r}=t,o=JSON.stringify([e,r]);let i=Sa[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Sa[o]=i),i}let Gn=null;function Vg(){return Gn||(Gn=new Intl.DateTimeFormat().resolvedOptions().locale,Gn)}let Kl={};function Wg(e){let t=Kl[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Kl[e]=t}return t}function zg(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,o;try{r=$a(e).resolvedOptions(),o=e}catch{const l=e.substring(0,n);r=$a(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=r;return[o,i,a]}}function Zg(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Gg(e){const t=[];for(let n=1;n<=12;n++){const r=E.utc(2009,n,1);t.push(e(r))}return t}function Yg(e){const t=[];for(let n=1;n<=7;n++){const r=E.utc(2016,11,13+n);t.push(e(r))}return t}function zr(e,t,n,r){const o=e.listingMode();return o==="error"?null:o==="en"?n(t):r(t)}function Qg(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Kg{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:o,floor:i,...a}=r;if(!n||Object.keys(a).length>0){const s={useGrouping:!1,...r};r.padTo>0&&(s.minimumIntegerDigits=r.padTo),this.inf=Hg(t,s)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):ms(t,3);return pe(n,this.padTo)}}}class Jg{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&mt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=$a(n,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Xg{constructor(t,n,r){this.opts={style:"long",...r},!n&&E0()&&(this.rtf=Ug(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):vw(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const _g={firstDay:1,minimalDays:4,weekend:[6,7]};class Q{static fromOpts(t){return Q.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,o,i=!1){const a=t||se.defaultLocale,s=a||(i?"en-US":Vg()),l=n||se.defaultNumberingSystem,u=r||se.defaultOutputCalendar,f=Ta(o)||se.defaultWeekSettings;return new Q(s,l,u,f,a)}static resetCache(){Gn=null,Aa={},Ca={},Sa={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:o}={}){return Q.create(t,n,r,o)}constructor(t,n,r,o,i){const[a,s,l]=zg(t);this.locale=a,this.numberingSystem=n||s||null,this.outputCalendar=r||l||null,this.weekSettings=o,this.intl=Zg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Qg(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Q.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ta(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return zr(this,t,P0,()=>{const r=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Gg(i=>this.extract(i,r,"month"))),this.monthsCache[o][t]})}weekdays(t,n=!1){return zr(this,t,N0,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=n?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Yg(i=>this.extract(i,r,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return zr(this,void 0,()=>R0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[E.utc(2016,11,13,9),E.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return zr(this,t,F0,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[E.utc(-40,1,1),E.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const o=this.dtFormatter(t,n),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===r);return a?a.value:null}numberFormatter(t={}){return new Kg(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Jg(t,this.intl,n)}relFormatter(t={}){return new Xg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return jg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:I0()?Wg(this.locale):_g}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Ii=null;class Ae extends Er{static get utcInstance(){return Ii===null&&(Ii=new Ae(0)),Ii}static instance(t){return t===0?Ae.utcInstance:new Ae(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ae(_o(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${tr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${tr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return tr(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class ew extends Er{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function $t(e,t){if(L(e)||e===null)return t;if(e instanceof Er)return e;if(rw(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Ko.instance:n==="utc"||n==="gmt"?Ae.utcInstance:Ae.parseSpecifier(n)||mt.create(e)}else return Qt(e)?Ae.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new ew(e)}let Jl=()=>Date.now(),Xl="system",_l=null,ec=null,tc=null,nc=60,rc,oc=null;class se{static get now(){return Jl}static set now(t){Jl=t}static set defaultZone(t){Xl=t}static get defaultZone(){return $t(Xl,Ko.instance)}static get defaultLocale(){return _l}static set defaultLocale(t){_l=t}static get defaultNumberingSystem(){return ec}static set defaultNumberingSystem(t){ec=t}static get defaultOutputCalendar(){return tc}static set defaultOutputCalendar(t){tc=t}static get defaultWeekSettings(){return oc}static set defaultWeekSettings(t){oc=Ta(t)}static get twoDigitCutoffYear(){return nc}static set twoDigitCutoffYear(t){nc=t%100}static get throwOnInvalid(){return rc}static set throwOnInvalid(t){rc=t}static resetCaches(){Q.resetCache(),mt.resetCache()}}class et{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const A0=[0,31,59,90,120,151,181,212,243,273,304,334],$0=[0,31,60,91,121,152,182,213,244,274,305,335];function He(e,t){return new et("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function hs(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const o=r.getUTCDay();return o===0?7:o}function C0(e,t,n){return n+(Ir(e)?$0:A0)[t-1]}function S0(e,t){const n=Ir(e)?$0:A0,r=n.findIndex(i=>i<t),o=t-n[r];return{month:r+1,day:o}}function fs(e,t){return(e-t+7)%7+1}function Lo(e,t=4,n=1){const{year:r,month:o,day:i}=e,a=C0(r,o,i),s=fs(hs(r,o,i),n);let l=Math.floor((a-s+14-t)/7),u;return l<1?(u=r-1,l=br(u,t,n)):l>br(r,t,n)?(u=r+1,l=1):u=r,{weekYear:u,weekNumber:l,weekday:s,...ei(e)}}function ic(e,t=4,n=1){const{weekYear:r,weekNumber:o,weekday:i}=e,a=fs(hs(r,1,t),n),s=bn(r);let l=o*7+i-a-7+t,u;l<1?(u=r-1,l+=bn(u)):l>s?(u=r+1,l-=bn(r)):u=r;const{month:f,day:h}=S0(u,l);return{year:u,month:f,day:h,...ei(e)}}function Bi(e){const{year:t,month:n,day:r}=e,o=C0(t,n,r);return{year:t,ordinal:o,...ei(e)}}function ac(e){const{year:t,ordinal:n}=e,{month:r,day:o}=S0(t,n);return{year:t,month:r,day:o,...ei(e)}}function sc(e,t){if(!L(e.localWeekday)||!L(e.localWeekNumber)||!L(e.localWeekYear)){if(!L(e.weekday)||!L(e.weekNumber)||!L(e.weekYear))throw new pn("Cannot mix locale-based week fields with ISO-based week fields");return L(e.localWeekday)||(e.weekday=e.localWeekday),L(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),L(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function tw(e,t=4,n=1){const r=Jo(e.weekYear),o=Ue(e.weekNumber,1,br(e.weekYear,t,n)),i=Ue(e.weekday,1,7);return r?o?i?!1:He("weekday",e.weekday):He("week",e.weekNumber):He("weekYear",e.weekYear)}function nw(e){const t=Jo(e.year),n=Ue(e.ordinal,1,bn(e.year));return t?n?!1:He("ordinal",e.ordinal):He("year",e.year)}function T0(e){const t=Jo(e.year),n=Ue(e.month,1,12),r=Ue(e.day,1,qo(e.year,e.month));return t?n?r?!1:He("day",e.day):He("month",e.month):He("year",e.year)}function M0(e){const{hour:t,minute:n,second:r,millisecond:o}=e,i=Ue(t,0,23)||t===24&&n===0&&r===0&&o===0,a=Ue(n,0,59),s=Ue(r,0,59),l=Ue(o,0,999);return i?a?s?l?!1:He("millisecond",o):He("second",r):He("minute",n):He("hour",t)}function L(e){return typeof e>"u"}function Qt(e){return typeof e=="number"}function Jo(e){return typeof e=="number"&&e%1===0}function rw(e){return typeof e=="string"}function ow(e){return Object.prototype.toString.call(e)==="[object Date]"}function E0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function I0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function iw(e){return Array.isArray(e)?e:[e]}function lc(e,t,n){if(e.length!==0)return e.reduce((r,o)=>{const i=[t(o),o];return r&&n(r[0],i[0])===r[0]?r:i},null)[1]}function aw(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function Tn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ta(e){if(e==null)return null;if(typeof e!="object")throw new Ce("Week settings must be an object");if(!Ue(e.firstDay,1,7)||!Ue(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Ue(t,1,7)))throw new Ce("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Ue(e,t,n){return Jo(e)&&e>=t&&e<=n}function sw(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function xt(e){if(!(L(e)||e===null||e===""))return parseInt(e,10)}function jt(e){if(!(L(e)||e===null||e===""))return parseFloat(e)}function ps(e){if(!(L(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ms(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function Ir(e){return e%4===0&&(e%100!==0||e%400===0)}function bn(e){return Ir(e)?366:365}function qo(e,t){const n=sw(t-1,12)+1,r=e+(t-n)/12;return n===2?Ir(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Xo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function cc(e,t,n){return-fs(hs(e,1,t),n)+t-1}function br(e,t=4,n=1){const r=cc(e,t,n),o=cc(e+1,t,n);return(bn(e)-r+o)/7}function Ma(e){return e>99?e:e>se.twoDigitCutoffYear?1900+e:2e3+e}function B0(e,t,n,r=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(n,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function _o(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,o=n<0||Object.is(n,-0)?-r:r;return n*60+o}function L0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ce(`Invalid unit value ${e}`);return t}function Po(e,t){const n={};for(const r in e)if(Tn(e,r)){const o=e[r];if(o==null)continue;n[t(r)]=L0(o)}return n}function tr(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${pe(n,2)}:${pe(r,2)}`;case"narrow":return`${o}${n}${r>0?`:${r}`:""}`;case"techie":return`${o}${pe(n,2)}${pe(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ei(e){return aw(e,["hour","minute","second","millisecond"])}const lw=["January","February","March","April","May","June","July","August","September","October","November","December"],q0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cw=["J","F","M","A","M","J","J","A","S","O","N","D"];function P0(e){switch(e){case"narrow":return[...cw];case"short":return[...q0];case"long":return[...lw];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const O0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],D0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],uw=["M","T","W","T","F","S","S"];function N0(e){switch(e){case"narrow":return[...uw];case"short":return[...D0];case"long":return[...O0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const R0=["AM","PM"],dw=["Before Christ","Anno Domini"],hw=["BC","AD"],fw=["B","A"];function F0(e){switch(e){case"narrow":return[...fw];case"short":return[...hw];case"long":return[...dw];default:return null}}function pw(e){return R0[e.hour<12?0:1]}function mw(e,t){return N0(t)[e.weekday-1]}function gw(e,t){return P0(t)[e.month-1]}function ww(e,t){return F0(t)[e.year<0?0:1]}function vw(e,t,n="always",r=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&i){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,u=o[e],f=r?l?u[1]:u[2]||u[1]:l?o[e][0]:e;return a?`${s} ${f} ago`:`in ${s} ${f}`}function uc(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const bw={D:Bo,DD:o0,DDD:i0,DDDD:a0,t:s0,tt:l0,ttt:c0,tttt:u0,T:d0,TT:h0,TTT:f0,TTTT:p0,f:m0,ff:w0,fff:b0,ffff:k0,F:g0,FF:v0,FFF:y0,FFFF:x0};class xe{static create(t,n={}){return new xe(t,n)}static parseFormat(t){let n=null,r="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),n=null,r="",o=!o):o||s===n?r+=s:(r.length>0&&i.push({literal:/^\s+$/.test(r),val:r}),r=s,n=s)}return r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),i}static macroTokenToFormatOpts(t){return bw[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return pe(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,w)=>this.loc.extract(t,g,w),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>r?pw(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>r?gw(t,g):i(w?{month:g}:{month:g,day:"numeric"},"month"),u=(g,w)=>r?mw(t,g):i(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),f=g=>{const w=xe.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(t,w):g},h=g=>r?ww(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(g)}};return uc(xe.parseFormat(n),m)}formatDurationFromString(t,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>u=>{const f=r(u);return f?this.num(l.get(f),u.length):u},i=xe.parseFormat(n),a=i.reduce((l,{literal:u,val:f})=>u?l:l.concat(f),[]),s=t.shiftTo(...a.map(r).filter(l=>l));return uc(i,o(s))}}const j0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Bn(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Ln(...e){return t=>e.reduce(([n,r,o],i)=>{const[a,s,l]=i(t,o);return[{...n,...a},s||r,l]},[{},null,1]).slice(0,2)}function qn(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const o=n.exec(e);if(o)return r(o)}return[null,null]}function H0(...e){return(t,n)=>{const r={};let o;for(o=0;o<e.length;o++)r[e[o]]=xt(t[n+o]);return[r,null,n+o]}}const U0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,yw=`(?:${U0.source}?(?:\\[(${j0.source})\\])?)?`,gs=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,V0=RegExp(`${gs.source}${yw}`),ws=RegExp(`(?:T${V0.source})?`),kw=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,xw=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Aw=/(\d{4})-?(\d{3})/,$w=H0("weekYear","weekNumber","weekDay"),Cw=H0("year","ordinal"),Sw=/(\d{4})-(\d\d)-(\d\d)/,W0=RegExp(`${gs.source} ?(?:${U0.source}|(${j0.source}))?`),Tw=RegExp(`(?: ${W0.source})?`);function yn(e,t,n){const r=e[t];return L(r)?n:xt(r)}function Mw(e,t){return[{year:yn(e,t),month:yn(e,t+1,1),day:yn(e,t+2,1)},null,t+3]}function Pn(e,t){return[{hours:yn(e,t,0),minutes:yn(e,t+1,0),seconds:yn(e,t+2,0),milliseconds:ps(e[t+3])},null,t+4]}function Br(e,t){const n=!e[t]&&!e[t+1],r=_o(e[t+1],e[t+2]),o=n?null:Ae.instance(r);return[{},o,t+3]}function Lr(e,t){const n=e[t]?mt.create(e[t]):null;return[{},n,t+1]}const Ew=RegExp(`^T?${gs.source}$`),Iw=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Bw(e){const[t,n,r,o,i,a,s,l,u]=e,f=t[0]==="-",h=l&&l[0]==="-",m=(g,w=!1)=>g!==void 0&&(w||g&&f)?-g:g;return[{years:m(jt(n)),months:m(jt(r)),weeks:m(jt(o)),days:m(jt(i)),hours:m(jt(a)),minutes:m(jt(s)),seconds:m(jt(l),l==="-0"),milliseconds:m(ps(u),h)}]}const Lw={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vs(e,t,n,r,o,i,a){const s={year:t.length===2?Ma(xt(t)):xt(t),month:q0.indexOf(n)+1,day:xt(r),hour:xt(o),minute:xt(i)};return a&&(s.second=xt(a)),e&&(s.weekday=e.length>3?O0.indexOf(e)+1:D0.indexOf(e)+1),s}const qw=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Pw(e){const[,t,n,r,o,i,a,s,l,u,f,h]=e,m=vs(t,o,r,n,i,a,s);let g;return l?g=Lw[l]:u?g=0:g=_o(f,h),[m,new Ae(g)]}function Ow(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Dw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Nw=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Rw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function dc(e){const[,t,n,r,o,i,a,s]=e;return[vs(t,o,r,n,i,a,s),Ae.utcInstance]}function Fw(e){const[,t,n,r,o,i,a,s]=e;return[vs(t,s,n,r,o,i,a),Ae.utcInstance]}const jw=Bn(kw,ws),Hw=Bn(xw,ws),Uw=Bn(Aw,ws),Vw=Bn(V0),z0=Ln(Mw,Pn,Br,Lr),Ww=Ln($w,Pn,Br,Lr),zw=Ln(Cw,Pn,Br,Lr),Zw=Ln(Pn,Br,Lr);function Gw(e){return qn(e,[jw,z0],[Hw,Ww],[Uw,zw],[Vw,Zw])}function Yw(e){return qn(Ow(e),[qw,Pw])}function Qw(e){return qn(e,[Dw,dc],[Nw,dc],[Rw,Fw])}function Kw(e){return qn(e,[Iw,Bw])}const Jw=Ln(Pn);function Xw(e){return qn(e,[Ew,Jw])}const _w=Bn(Sw,Tw),e4=Bn(W0),t4=Ln(Pn,Br,Lr);function n4(e){return qn(e,[_w,z0],[e4,t4])}const hc="Invalid Duration",Z0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},r4={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Z0},Oe=146097/400,an=146097/4800,o4={years:{quarters:4,months:12,weeks:Oe/7,days:Oe,hours:Oe*24,minutes:Oe*24*60,seconds:Oe*24*60*60,milliseconds:Oe*24*60*60*1e3},quarters:{months:3,weeks:Oe/28,days:Oe/4,hours:Oe*24/4,minutes:Oe*24*60/4,seconds:Oe*24*60*60/4,milliseconds:Oe*24*60*60*1e3/4},months:{weeks:an/7,days:an,hours:an*24,minutes:an*24*60,seconds:an*24*60*60,milliseconds:an*24*60*60*1e3},...Z0},Zt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],i4=Zt.slice(0).reverse();function kt(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new H(r)}function G0(e,t){let n=t.milliseconds??0;for(const r of i4.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function fc(e,t){const n=G0(e,t)<0?-1:1;Zt.reduceRight((r,o)=>{if(L(t[o]))return r;if(r){const i=t[r]*n,a=e[o][r],s=Math.floor(i/a);t[o]+=s*n,t[r]-=s*a*n}return o},null),Zt.reduce((r,o)=>{if(L(t[o]))return r;if(r){const i=t[r]%1;t[r]-=i,t[o]+=i*e[r][o]}return o},null)}function a4(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class H{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?o4:r4;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||Q.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return H.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Ce(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new H({values:Po(t,H.normalizeUnit),loc:Q.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Qt(t))return H.fromMillis(t);if(H.isDuration(t))return t;if(typeof t=="object")return H.fromObject(t);throw new Ce(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Kw(t);return r?H.fromObject(r,n):H.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Xw(t);return r?H.fromObject(r,n):H.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Ce("need to specify a reason the Duration is invalid");const r=t instanceof et?t:new et(t,n);if(se.throwOnInvalid)throw new qg(r);return new H({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new r0(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?xe.create(this.loc,r).formatDurationFromString(this,t):hc}toHuman(t={}){if(!this.isValid)return hc;const n=Zt.map(r=>{const o=this.values[r];return L(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(o)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ms(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},E.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?G0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=H.fromDurationLike(t),r={};for(const o of Zt)(Tn(n.values,o)||Tn(this.values,o))&&(r[o]=n.get(o)+this.get(o));return kt(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=H.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=L0(t(this.values[r],r));return kt(this,{values:n},!0)}get(t){return this[H.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...Po(t,H.normalizeUnit)};return kt(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:o,conversionAccuracy:r};return kt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return fc(this.matrix,t),kt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=a4(this.normalize().shiftToAll().toObject());return kt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>H.normalizeUnit(a));const n={},r={},o=this.toObject();let i;for(const a of Zt)if(t.indexOf(a)>=0){i=a;let s=0;for(const u in r)s+=this.matrix[u][a]*r[u],r[u]=0;Qt(o[a])&&(s+=o[a]);const l=Math.trunc(s);n[a]=l,r[a]=(s*1e3-l*1e3)/1e3}else Qt(o[a])&&(r[a]=o[a]);for(const a in r)r[a]!==0&&(n[i]+=a===i?r[a]:r[a]/this.matrix[i][a]);return fc(this.matrix,n),kt(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return kt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,o){return r===void 0||r===0?o===void 0||o===0:r===o}for(const r of Zt)if(!n(this.values[r],t.values[r]))return!1;return!0}}const sn="Invalid Interval";function s4(e,t){return!e||!e.isValid?ce.invalid("missing or invalid start"):!t||!t.isValid?ce.invalid("missing or invalid end"):t<e?ce.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ce{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Ce("need to specify a reason the Interval is invalid");const r=t instanceof et?t:new et(t,n);if(se.throwOnInvalid)throw new Lg(r);return new ce({invalid:r})}static fromDateTimes(t,n){const r=Fn(t),o=Fn(n),i=s4(r,o);return i??new ce({start:r,end:o})}static after(t,n){const r=H.fromDurationLike(n),o=Fn(t);return ce.fromDateTimes(o,o.plus(r))}static before(t,n){const r=H.fromDurationLike(n),o=Fn(t);return ce.fromDateTimes(o.minus(r),o)}static fromISO(t,n){const[r,o]=(t||"").split("/",2);if(r&&o){let i,a;try{i=E.fromISO(r,n),a=i.isValid}catch{a=!1}let s,l;try{s=E.fromISO(o,n),l=s.isValid}catch{l=!1}if(a&&l)return ce.fromDateTimes(i,s);if(a){const u=H.fromISO(o,n);if(u.isValid)return ce.after(i,u)}else if(l){const u=H.fromISO(r,n);if(u.isValid)return ce.before(s,u)}}return ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let o;return n!=null&&n.useLocaleWeeks?o=this.end.reconfigure({locale:r.locale}):o=this.end,o=o.startOf(t,n),Math.floor(o.diff(r,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?ce.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Fn).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),r=[];let{s:o}=this,i=0;for(;o<this.e;){const a=n[i]||this.e,s=+a>+this.e?this.e:a;r.push(ce.fromDateTimes(o,s)),o=s,i+=1}return r}splitBy(t){const n=H.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,o=1,i;const a=[];for(;r<this.e;){const s=this.start.plus(n.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ce.fromDateTimes(r,i)),r=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:ce.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return ce.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,u)=>l.time-u.time);for(const l of s)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&o.push(ce.fromDateTimes(n,l.time)),n=null);return ce.merge(o)}difference(...t){return ce.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:sn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Bo,n={}){return this.isValid?xe.create(this.s.loc.clone(n),t).formatInterval(this):sn}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:sn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:sn}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:sn}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:sn}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):H.invalid(this.invalidReason)}mapEndpoints(t){return ce.fromDateTimes(t(this.s),t(this.e))}}class Yn{static hasDST(t=se.defaultZone){const n=E.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return mt.isValidZone(t)}static normalizeZone(t){return $t(t,se.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||Q.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||Q.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||Q.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Q.create(n,r,i)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Q.create(n,r,i)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||Q.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||Q.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Q.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return Q.create(n,null,"gregory").eras(t)}static features(){return{relative:E0(),localeWeek:I0()}}}function pc(e,t){const n=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(H.fromMillis(r).as("days"))}function l4(e,t,n){const r=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const f=pc(l,u);return(f-f%7)/7}],["days",pc]],o={},i=e;let a,s;for(const[l,u]of r)n.indexOf(l)>=0&&(a=l,o[l]=u(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function c4(e,t,n,r){let[o,i,a,s]=l4(e,t,n);const l=t-o,u=n.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);u.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const f=H.fromObject(i,r);return u.length>0?H.fromMillis(l,r).shiftTo(...u).plus(f):f}const bs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},mc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},u4=bs.hanidec.replace(/[\[|\]]/g,"").split("");function d4(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(bs.hanidec)!==-1)t+=u4.indexOf(e[n]);else for(const o in mc){const[i,a]=mc[o];r>=i&&r<=a&&(t+=r-i)}}return parseInt(t,10)}else return t}function Qe({numberingSystem:e},t=""){return new RegExp(`${bs[e||"latn"]}${t}`)}const h4="missing Intl.DateTimeFormat.formatToParts support";function z(e,t=n=>n){return{regex:e,deser:([n])=>t(d4(n))}}const f4=String.fromCharCode(160),Y0=`[ ${f4}]`,Q0=new RegExp(Y0,"g");function p4(e){return e.replace(/\./g,"\\.?").replace(Q0,Y0)}function gc(e){return e.replace(/\./g,"").replace(Q0," ").toLowerCase()}function Ke(e,t){return e===null?null:{regex:RegExp(e.map(p4).join("|")),deser:([n])=>e.findIndex(r=>gc(n)===gc(r))+t}}function wc(e,t){return{regex:e,deser:([,n,r])=>_o(n,r),groups:t}}function Zr(e){return{regex:e,deser:([t])=>t}}function m4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function g4(e,t){const n=Qe(t),r=Qe(t,"{2}"),o=Qe(t,"{3}"),i=Qe(t,"{4}"),a=Qe(t,"{6}"),s=Qe(t,"{1,2}"),l=Qe(t,"{1,3}"),u=Qe(t,"{1,6}"),f=Qe(t,"{1,9}"),h=Qe(t,"{2,4}"),m=Qe(t,"{4,6}"),g=x=>({regex:RegExp(m4(x.val)),deser:([C])=>C,literal:!0}),k=(x=>{if(e.literal)return g(x);switch(x.val){case"G":return Ke(t.eras("short"),0);case"GG":return Ke(t.eras("long"),0);case"y":return z(u);case"yy":return z(h,Ma);case"yyyy":return z(i);case"yyyyy":return z(m);case"yyyyyy":return z(a);case"M":return z(s);case"MM":return z(r);case"MMM":return Ke(t.months("short",!0),1);case"MMMM":return Ke(t.months("long",!0),1);case"L":return z(s);case"LL":return z(r);case"LLL":return Ke(t.months("short",!1),1);case"LLLL":return Ke(t.months("long",!1),1);case"d":return z(s);case"dd":return z(r);case"o":return z(l);case"ooo":return z(o);case"HH":return z(r);case"H":return z(s);case"hh":return z(r);case"h":return z(s);case"mm":return z(r);case"m":return z(s);case"q":return z(s);case"qq":return z(r);case"s":return z(s);case"ss":return z(r);case"S":return z(l);case"SSS":return z(o);case"u":return Zr(f);case"uu":return Zr(s);case"uuu":return z(n);case"a":return Ke(t.meridiems(),0);case"kkkk":return z(i);case"kk":return z(h,Ma);case"W":return z(s);case"WW":return z(r);case"E":case"c":return z(n);case"EEE":return Ke(t.weekdays("short",!1),1);case"EEEE":return Ke(t.weekdays("long",!1),1);case"ccc":return Ke(t.weekdays("short",!0),1);case"cccc":return Ke(t.weekdays("long",!0),1);case"Z":case"ZZ":return wc(new RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case"ZZZ":return wc(new RegExp(`([+-]${s.source})(${r.source})?`),2);case"z":return Zr(/[a-z_+-/]{1,256}?/i);case" ":return Zr(/[^\S\n\r]/);default:return g(x)}})(e)||{invalidReason:h4};return k.token=e,k}const w4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function v4(e,t,n){const{type:r,value:o}=e;if(r==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[r];let a=r;r==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=n.hour12?"hour12":"hour24");let s=w4[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function b4(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function y4(e,t,n){const r=e.match(t);if(r){const o={};let i=1;for(const a in n)if(Tn(n,a)){const s=n[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(r.slice(i,i+l))),i+=l}return[r,o]}else return[r,{}]}function k4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return L(e.z)||(n=mt.create(e.z)),L(e.Z)||(n||(n=new Ae(e.Z)),r=e.Z),L(e.q)||(e.M=(e.q-1)*3+1),L(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),L(e.u)||(e.S=ps(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),n,r]}let Li=null;function x4(){return Li||(Li=E.fromMillis(1555555555555)),Li}function A4(e,t){if(e.literal)return e;const n=xe.macroTokenToFormatOpts(e.val),r=X0(n,t);return r==null||r.includes(void 0)?e:r}function K0(e,t){return Array.prototype.concat(...e.map(n=>A4(n,t)))}function J0(e,t,n){const r=K0(xe.parseFormat(n),e),o=r.map(a=>g4(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:r,invalidReason:i.invalidReason};{const[a,s]=b4(o),l=RegExp(a,"i"),[u,f]=y4(t,l,s),[h,m,g]=f?k4(f):[null,null,void 0];if(Tn(f,"a")&&Tn(f,"H"))throw new pn("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:l,rawMatches:u,matches:f,result:h,zone:m,specificOffset:g}}}function $4(e,t,n){const{result:r,zone:o,specificOffset:i,invalidReason:a}=J0(e,t,n);return[r,o,i,a]}function X0(e,t){if(!e)return null;const r=xe.create(t,e).dtFormatter(x4()),o=r.formatToParts(),i=r.resolvedOptions();return o.map(a=>v4(a,e,i))}const qi="Invalid DateTime",vc=864e13;function Gr(e){return new et("unsupported zone",`the zone "${e.name}" is not supported`)}function Pi(e){return e.weekData===null&&(e.weekData=Lo(e.c)),e.weekData}function Oi(e){return e.localWeekData===null&&(e.localWeekData=Lo(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ht(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new E({...n,...t,old:n})}function _0(e,t,n){let r=e-t*60*1e3;const o=n.offset(r);if(t===o)return[r,t];r-=(o-t)*60*1e3;const i=n.offset(r);return o===i?[r,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Yr(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function co(e,t,n){return _0(Xo(e),t,n)}function bc(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:r,month:o,day:Math.min(e.c.day,qo(r,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=H.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Xo(i);let[l,u]=_0(s,n,e.zone);return a!==0&&(l+=a,u=e.zone.offset(l)),{ts:l,o:u}}function Rn(e,t,n,r,o,i){const{setZone:a,zone:s}=n;if(e&&Object.keys(e).length!==0||t){const l=t||s,u=E.fromObject(e,{...n,zone:l,specificOffset:i});return a?u:u.setZone(s)}else return E.invalid(new et("unparsable",`the input "${o}" can't be parsed as ${r}`))}function Qr(e,t,n=!0){return e.isValid?xe.create(Q.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Di(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=pe(e.c.year,n?6:4),t?(r+="-",r+=pe(e.c.month),r+="-",r+=pe(e.c.day)):(r+=pe(e.c.month),r+=pe(e.c.day)),r}function yc(e,t,n,r,o,i){let a=pe(e.c.hour);return t?(a+=":",a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=":")):a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=pe(e.c.second),(e.c.millisecond!==0||!r)&&(a+=".",a+=pe(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=pe(Math.trunc(-e.o/60)),a+=":",a+=pe(Math.trunc(-e.o%60))):(a+="+",a+=pe(Math.trunc(e.o/60)),a+=":",a+=pe(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const eh={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},C4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},S4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},th=["year","month","day","hour","minute","second","millisecond"],T4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],M4=["year","ordinal","hour","minute","second","millisecond"];function E4(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new r0(e);return t}function kc(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return E4(e)}}function xc(e,t){const n=$t(t.zone,se.defaultZone),r=Q.fromObject(t),o=se.now();let i,a;if(L(e.year))i=o;else{for(const u of th)L(e[u])&&(e[u]=eh[u]);const s=T0(e)||M0(e);if(s)return E.invalid(s);const l=n.offset(o);[i,a]=co(e,l,n)}return new E({ts:i,zone:n,loc:r,o:a})}function Ac(e,t,n){const r=L(n.round)?!0:n.round,o=(a,s)=>(a=ms(a,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(a,s)),i=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(i(n.unit),n.unit);for(const a of n.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function $c(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}class E{constructor(t){const n=t.zone||se.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new et("invalid input"):null)||(n.isValid?null:Gr(n));this.ts=L(t.ts)?se.now():t.ts;let o=null,i=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[o,i]=[t.old.c,t.old.o];else{const s=n.offset(this.ts);o=Yr(this.ts,s),r=Number.isNaN(o.year)?new et("invalid input"):null,o=r?null:o,i=r?null:s}this._zone=n,this.loc=t.loc||Q.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new E({})}static local(){const[t,n]=$c(arguments),[r,o,i,a,s,l,u]=n;return xc({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:u},t)}static utc(){const[t,n]=$c(arguments),[r,o,i,a,s,l,u]=n;return t.zone=Ae.utcInstance,xc({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:u},t)}static fromJSDate(t,n={}){const r=ow(t)?t.valueOf():NaN;if(Number.isNaN(r))return E.invalid("invalid input");const o=$t(n.zone,se.defaultZone);return o.isValid?new E({ts:r,zone:o,loc:Q.fromObject(n)}):E.invalid(Gr(o))}static fromMillis(t,n={}){if(Qt(t))return t<-vc||t>vc?E.invalid("Timestamp out of range"):new E({ts:t,zone:$t(n.zone,se.defaultZone),loc:Q.fromObject(n)});throw new Ce(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Qt(t))return new E({ts:t*1e3,zone:$t(n.zone,se.defaultZone),loc:Q.fromObject(n)});throw new Ce("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=$t(n.zone,se.defaultZone);if(!r.isValid)return E.invalid(Gr(r));const o=Q.fromObject(n),i=Po(t,kc),{minDaysInFirstWeek:a,startOfWeek:s}=sc(i,o),l=se.now(),u=L(n.specificOffset)?r.offset(l):n.specificOffset,f=!L(i.ordinal),h=!L(i.year),m=!L(i.month)||!L(i.day),g=h||m,w=i.weekYear||i.weekNumber;if((g||f)&&w)throw new pn("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&f)throw new pn("Can't mix ordinal dates with month/day");const k=w||i.weekday&&!g;let x,C,S=Yr(l,u);k?(x=T4,C=C4,S=Lo(S,a,s)):f?(x=M4,C=S4,S=Bi(S)):(x=th,C=eh);let N=!1;for(const $e of x){const be=i[$e];L(be)?N?i[$e]=C[$e]:i[$e]=S[$e]:N=!0}const W=k?tw(i,a,s):f?nw(i):T0(i),te=W||M0(i);if(te)return E.invalid(te);const fe=k?ic(i,a,s):f?ac(i):i,[X,V]=co(fe,u,r),ne=new E({ts:X,zone:r,o:V,loc:o});return i.weekday&&g&&t.weekday!==ne.weekday?E.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${ne.toISO()}`):ne}static fromISO(t,n={}){const[r,o]=Gw(t);return Rn(r,o,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,o]=Yw(t);return Rn(r,o,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,o]=Qw(t);return Rn(r,o,n,"HTTP",n)}static fromFormat(t,n,r={}){if(L(t)||L(n))throw new Ce("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=r,a=Q.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,u,f]=$4(a,t,n);return f?E.invalid(f):Rn(s,l,r,`format ${n}`,t,u)}static fromString(t,n,r={}){return E.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,o]=n4(t);return Rn(r,o,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Ce("need to specify a reason the DateTime is invalid");const r=t instanceof et?t:new et(t,n);if(se.throwOnInvalid)throw new Bg(r);return new E({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=X0(t,Q.fromObject(n));return r?r.map(o=>o?o.val:null).join(""):null}static expandFormat(t,n={}){return K0(xe.parseFormat(t),Q.fromObject(n)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Pi(this).weekYear:NaN}get weekNumber(){return this.isValid?Pi(this).weekNumber:NaN}get weekday(){return this.isValid?Pi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Oi(this).weekday:NaN}get localWeekNumber(){return this.isValid?Oi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Oi(this).weekYear:NaN}get ordinal(){return this.isValid?Bi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Yn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Yn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Yn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Yn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Xo(this.c),o=this.zone.offset(r-t),i=this.zone.offset(r+t),a=this.zone.offset(r-o*n),s=this.zone.offset(r-i*n);if(a===s)return[this];const l=r-a*n,u=r-s*n,f=Yr(l,a),h=Yr(u,s);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[Ht(this,{ts:l}),Ht(this,{ts:u})]:[this]}get isInLeapYear(){return Ir(this.year)}get daysInMonth(){return qo(this.year,this.month)}get daysInYear(){return this.isValid?bn(this.year):NaN}get weeksInWeekYear(){return this.isValid?br(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?br(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:o}=xe.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:o}}toUTC(t=0,n={}){return this.setZone(Ae.instance(t),n)}toLocal(){return this.setZone(se.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=$t(t,se.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(n||r){const i=t.offset(this.ts),a=this.toObject();[o]=co(a,i,t)}return Ht(this,{ts:o,zone:t})}else return E.invalid(Gr(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const o=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Ht(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=Po(t,kc),{minDaysInFirstWeek:r,startOfWeek:o}=sc(n,this.loc),i=!L(n.weekYear)||!L(n.weekNumber)||!L(n.weekday),a=!L(n.ordinal),s=!L(n.year),l=!L(n.month)||!L(n.day),u=s||l,f=n.weekYear||n.weekNumber;if((u||a)&&f)throw new pn("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new pn("Can't mix ordinal dates with month/day");let h;i?h=ic({...Lo(this.c,r,o),...n},r,o):L(n.ordinal)?(h={...this.toObject(),...n},L(n.day)&&(h.day=Math.min(qo(h.year,h.month),h.day))):h=ac({...Bi(this.c),...n});const[m,g]=co(h,this.o,this.zone);return Ht(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const n=H.fromDurationLike(t);return Ht(this,bc(this,n))}minus(t){if(!this.isValid)return this;const n=H.fromDurationLike(t).negate();return Ht(this,bc(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},o=H.normalizeUnit(t);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(o==="weeks")if(n){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(r.weekNumber=this.weekNumber-1),r.weekday=i}else r.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);r.month=(i-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?xe.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):qi}toLocaleString(t=Bo,n={}){return this.isValid?xe.create(this.loc.clone(n),t).formatDateTime(this):qi}toLocaleParts(t={}){return this.isValid?xe.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Di(this,a);return s+="T",s+=yc(this,a,n,r,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Di(this,t==="extended"):null}toISOWeekDate(){return Qr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+yc(this,a==="extended",n,t,r,i):null}toRFC2822(){return Qr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Qr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Di(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let o="HH:mm:ss.SSS";return(n||t)&&(r&&(o+=" "),n?o+="z":t&&(o+="ZZ")),Qr(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():qi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return H.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...r},i=iw(n).map(H.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,u=c4(s,l,i,o);return a?u.negate():u}diffNow(t="milliseconds",n={}){return this.diff(E.now(),t,n)}until(t){return this.isValid?ce.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(n,r)<=o&&o<=i.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||E.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Ac(n,this.plus(r),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Ac(t.base||E.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(E.isDateTime))throw new Ce("min requires all arguments be DateTimes");return lc(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(E.isDateTime))throw new Ce("max requires all arguments be DateTimes");return lc(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:o=null,numberingSystem:i=null}=r,a=Q.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return J0(a,t,n)}static fromStringExplain(t,n,r={}){return E.fromFormatExplain(t,n,r)}static get DATE_SHORT(){return Bo}static get DATE_MED(){return o0}static get DATE_MED_WITH_WEEKDAY(){return Pg}static get DATE_FULL(){return i0}static get DATE_HUGE(){return a0}static get TIME_SIMPLE(){return s0}static get TIME_WITH_SECONDS(){return l0}static get TIME_WITH_SHORT_OFFSET(){return c0}static get TIME_WITH_LONG_OFFSET(){return u0}static get TIME_24_SIMPLE(){return d0}static get TIME_24_WITH_SECONDS(){return h0}static get TIME_24_WITH_SHORT_OFFSET(){return f0}static get TIME_24_WITH_LONG_OFFSET(){return p0}static get DATETIME_SHORT(){return m0}static get DATETIME_SHORT_WITH_SECONDS(){return g0}static get DATETIME_MED(){return w0}static get DATETIME_MED_WITH_SECONDS(){return v0}static get DATETIME_MED_WITH_WEEKDAY(){return Og}static get DATETIME_FULL(){return b0}static get DATETIME_FULL_WITH_SECONDS(){return y0}static get DATETIME_HUGE(){return k0}static get DATETIME_HUGE_WITH_SECONDS(){return x0}}function Fn(e){if(E.isDateTime(e))return e;if(e&&e.valueOf&&Qt(e.valueOf()))return E.fromJSDate(e);if(e&&typeof e=="object")return E.fromObject(e);throw new Ce(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function Mn(e){const t=E.fromObject(sr(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function nh(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function Ni(e,t){return nh(Mn(e).plus(t))}const I4=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],B4=I4.reduce((e,t)=>(e[t]=t,e),{}),L4=se.defaultZone.name,ys=B4.UTC;var Cc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Cc||(Cc={}));const q4=["hour","minute","second","millisecond"],P4=Cr({hour:14,minute:19,second:7,millisecond:877,timezone:ys}),O4=Cr({year:2023,month:6,day:5,timezone:ys}),D4=Cr(Q1(O4,P4));var I;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(I||(I={}));const N4={[I.Milliseconds]:"millisecond",[I.Seconds]:"second",[I.Minutes]:"minute",[I.Hours]:"hour",[I.Days]:"day",[I.Weeks]:"week",[I.Months]:"month",[I.Quarters]:"quarter",[I.Years]:"year"},Sc=[I.Milliseconds,I.Seconds,I.Minutes,I.Hours,I.Days,I.Weeks,I.Months,I.Quarters,I.Years];function Tc(e,t){return ke(e,(n,r)=>t==null||!ee(r,"number")?r:Xi({number:r,digits:t}))}const Mc={longterm:1,casual:0},rh={[I.Years]:"longterm",[I.Quarters]:"longterm",[I.Months]:"longterm",[I.Weeks]:"casual",[I.Days]:"casual",[I.Hours]:"casual",[I.Minutes]:"casual",[I.Seconds]:"casual",[I.Milliseconds]:"casual"};function R4(e){return e.map(r=>rh[r]).reduce((r,o)=>Mc[o]>Mc[r]?o:r)}var kn;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(kn||(kn={}));function F4({start:e,end:t,units:n,unit:r,diffType:o,decimalCount:i}){const a=Mn(e),s=Mn(t),l=n??[r],u=l.length===1?kn.EquivalentUnits:o;if(!u)throw new Error("Failed to diff dates: no diffType was provided.");if(u===kn.AdditiveUnits){const f=R4(l),h=s.diff(a,l,{conversionAccuracy:f}).toObject();return Tc(h,i)}else if(u===kn.EquivalentUnits){const f=l.map(m=>{const w=s.diff(a,m,{conversionAccuracy:rh[m]}).toObject()[m];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,w]}),h=Sh(f);return Tc(h,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${u}'`)}function j4(e){if(!Yn.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function H4(e){qu(e,D4),j4(e.timezone),Mn(e)}function U4(e){try{return H4(e),!0}catch{return!1}}function V4(e,t){const n=W4(e,t);if(!n||!n.isValid)throw new Error(`Failed to parse date input '${e}'`);return nh(n,t)}function Ec(e){const t=E.fromJSDate(new Date(e));if(t.isValid)return t}function W4(e,t){if(U4(e)&&(e=Mn(e).toMillis()),E.isDateTime(e))return e.setZone(t);if(ee(e,"number"))return E.fromMillis(e,{zone:ys}).setZone(t);if(ee(e,"string")){const n=E.fromISO(e,{zone:t});return n.isValid?n:Ec(e)}else if(e instanceof Date)return E.fromJSDate(e).setZone(t);return Ec(e)}function z4(e){return V4(Date.now(),e)}function oh(){return z4(L4)}const Z4={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};zh(Z4,q4);const G4=se.defaultLocale;function Y4(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Ic(e,t){const n=Mn(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??G4});return Y4(n)}function Q4(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function K4(e,t){const n=Te(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),n].filter(ve).join(":")}function J4(e,t){return{date:Q4(e),time:K4(e,t.includeSeconds),timezone:e.timezone}}function X4(e,t){const n=J4(e,t);return[n.date,n.time,t.includeTimezone&&`(${n.timezone})`].filter(ve).join(" ")}const _4={[I.Milliseconds]:1e3,[I.Seconds]:60,[I.Minutes]:60,[I.Hours]:24,[I.Days]:30,[I.Weeks]:4,[I.Months]:12,[I.Quarters]:4,[I.Years]:1/0};function e5({fullDate:e,relativeTo:t,options:n={}}){const r=n.decimalDigitCount||0,o=F4({start:e,end:t,units:Sc,diffType:kn.EquivalentUnits}),i=ke(o,(g,w)=>{const k=Math.floor(Math.abs(Xi({digits:1,number:w}))),x=k>0,C=n.limitUnitMax?k<_4[g]:!0;return x&&C}),a=Sc.reduce((g,w)=>{var x;return!((x=n.blockedRelativeUnits)!=null&&x.includes(w))&&i[w]?w:g},void 0);if(n.blockJustNow?!1:it(e,t)||a===I.Minutes&&o.minutes<2||a===I.Seconds&&o.seconds<11||a===I.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],u=Math.abs(Xi({digits:r,number:l})),f=u===1,h=[N4[a],f?"":"s"].join(""),m=f?"a":u;return l<0?`in ${m} ${h}`:`${m} ${h} ago`}function t5(e){return{date:Ic(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Ic(e,{timeStyle:"short"}).replace(/\s/g," ")}}const n5={blockedRelativeUnits:[I.Years,I.Quarters],limitUnitMax:!0};function r5(e){var i,a,s;const t=t5(e.fullDate),n=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(ve).join(" "),r=X4(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?e5({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||oh(),options:{...n5,...e.relativeOptions}}):void 0;return{everythingString:r,displayString:o||n}}const Ri=ie()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:n}=r5(e);return c`
            <span title=${n}>${t}</span>
        `}}),o5="data-test-id",dn=Dt(class extends gt{constructor(t){super(t);Pr(this,"element");this.element=i5(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(o5,t),Pe}});function i5(e,t,n){a5(e,t);const r=e.element;if(!(r instanceof n))throw new Error(`${t} attached to non ${n.name} element.`);return r}function a5(e,t){if(e.type!==xr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Ea=(e=>(e.Up="up",e.Down="down",e))(Ea||{});const Kr=ie()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:oe(),openChange:oe()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${D.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${ue};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${Nt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
        }

        .dropdown.open:not(.reverse-direction),
        .dropdown.open:not(.reverse-direction) .select {
            border-radius: 8px 8px 0 0;
        }

        .dropdown.open.reverse-direction,
        .dropdown.open.reverse-direction .select {
            border-radius: 0 0 8px 8px;
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
            ${Ze};
            ${F(b.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${F(b.pagePrimary)}
            ${vr.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${vr.popupShadowReversed};
        }

        .selected-label-prefix {
            ${D.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ze};
        }

        .select-options .option.selected {
            ${F(b.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${b.accentTertiary.backgroundColor};
        }

        .dropdown:not(.reverse-direction) .select-options .option:last-of-type {
            border-radius: 0 0 8px 8px;
        }

        .dropdown.reverse-direction .select-options .option:first-of-type {
            border-radius: 8px 8px 0 0;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        ${e["toniq-dropdown-disabled"].selector} {
            ${Xt};
        }
    `,initCallback:({state:e,host:t,updateState:n})=>{function r(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&n({dropdownOpen:!1})}window.addEventListener("click",r)},renderCallback({dispatch:e,events:t,state:n,inputs:r,updateState:o}){r._forceOpenState!=null&&o({dropdownOpen:r._forceOpenState}),r.disabled&&o({dropdownOpen:!1});const i=r.value?r.options.find(l=>{var u;return l.value===((u=r.value)==null?void 0:u.value)})??r.options[0]:r.options[0],a=r.icon?c`
                  <${$.assign({icon:r.icon})}
                      ${dn("rendered-input-icon")}
                  ></${$}>
              `:"",s=r.selectedLabelPrefix?c`
                  <span class="selected-label-prefix">${r.selectedLabelPrefix}</span>
              `:"";return c`
            <button
                ?disabled=${!!r.disabled}
                class=${he({dropdown:!0,open:n.dropdownOpen,"reverse-direction":r.direction==="up"})}
                @click=${()=>{const l=!n.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${n.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${$.assign({icon:qd})}
                            class="trigger-icon"
                        ></${$}>
                    </span>
                </div>
                <div class="select-options">
                    ${r.options.map(l=>c`
                            <span
                                class="option ${l.value===(i==null?void 0:i.value)?"selected":""}"
                                @click=${u=>{u.preventDefault(),u.stopPropagation(),o({dropdownOpen:!1}),e(new t.openChange(!1)),e(new t.selectChange(l))}}
                                role="option"
                            >
                                ${l.label}
                            </span>
                        `)}
                </div>
            </button>
        `}}),Fi=us({tagName:"toniq-error-message",styles:p`
        :host {
            display: block;
            color: red;
        }

        p {
            padding: 0;
            margin: 0;
        }
    `,renderCallback(){return c`
            <p><slot></slot></p>
        `}});var pt=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(pt||{});const Je=ie()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>p`
        :host {
            display: inline;
            text-decoration: underline;
            cursor: pointer;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            cursor: inherit;
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:hover a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:hover {
            color: ${b.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${b.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} {
            cursor: default;
        }
    `,renderCallback({inputs:e}){function t(r){if(e.linkType==="disabled"){r.preventDefault();return}e.linkType==="route-link"&&Wo(r)&&(r.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const n=e.linkType==="new-tab";return c`
            <a
                href=${e.url.toString()}
                ${y("click",t)}
                target=${Us(n?"_blank":void 0)}
                rel=${Us(n?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),Ia=360,ih=8;function ah(e){return(e-ih)/2}const ot=wt({"main-image-size":Ia,"secondary-image-size":ah(Ia)}),ut=ie()({tagName:"toniq-featured-flip-card-footer",styles:p`
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

        ${ge} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${ot["secondary-image-size"].value} * 2);
        }

        ${Je} ${ge} {
            width: 100%;
        }

        ${Je} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${ot["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:oe(),flipCardButtonClick:oe()},renderCallback({inputs:e,dispatch:t,events:n}){const r=e.socialUrls,o=r?le(r).map(i=>{const a=r[i];if(!a)return;const s=_d[i];return c`
                          <${Je.assign({linkType:pt.NewTab,url:a})}>
                              <${$.assign({icon:s})}></${$}>
                          </${Je}>
                      `}).filter(ve):"";return c`
            <div class="buttons">
                <${Je.assign({url:e.viewMoreButtonUrl,linkType:pt.RouteLink,scrollToTop:!0})}
                    ${y("click",()=>{t(new n.viewMoreButtonClick)})}
                >
                    <${ge.assign({text:e.viewMoreButtonText,variant:fn.Outline})}></${ge}>
                </${Je}>
                ${e.flipCardButtonText?c`
                          <${ge.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${y("click",()=>{t(new n.flipCardButtonClick)})}
                          ></${ge}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Gt=ie()({tagName:"toniq-flip-card",events:{flippedChange:oe()},styles:p`
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

        ${jp(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${b.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return c`
            <div
                class="flip-wrapper ${he({flipped:e.flipped})}"
                ${y("click",()=>{t(new n.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),re=ie()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:oe()},styles:p`
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
            ${D.h3Font};
            ${D.extraBoldFont};
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
            max-height: ${ot["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${ot["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${ih}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Gt} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${ot["main-image-size"].value};
            height: ${ot["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${ot["secondary-image-size"].value};
            height: ${ot["secondary-image-size"].value};
        }

        .slot-wrapper {
            height: 100%;
            width: 100%;
        }

        .main-image-wrapper > *,
        .secondary-image-wrapper > * {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper,
        .secondary-image-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .card-face.front ${ut} {
            margin-top: 24px;
        }

        .card-face.back ${ut} {
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
            ${D.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:n,host:r,dispatch:o,events:i}){var m,g,w,k;const a=e.mainImageSize||Ia,s=ah(a);vo({onElement:r,forCssVar:ot["main-image-size"],toValue:`${a}px`}),vo({onElement:r,forCssVar:ot["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(ve).join(" "),u=c`
            <h3>${e.cardTitle}</h3>
        `,f=e.imageUrls[0],h=f?c`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,f))||c`
                          <${Ct.assign({imageUrl:f})}></${Ct}>
                      `}
                  </div>
              `:"";return c`
            <${Gt.assign({flipped:t.flipped})}
                ${y(ut.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${u}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(x=>{var C;return c`
                                    <div class="secondary-image-wrapper">
                                        ${((C=e.customTemplateCallback)==null?void 0:C.call(e,x))||c`
                                            <${Ct.assign({imageUrl:x})}></${Ct}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${ut.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${y(ut.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${ut}>
                </div>
                <div class="card-face back" slot="back">
                    ${u}
                    <div class="paragraphs">
                        ${(w=e.infoParagraphs)==null?void 0:w.map(x=>c`
                                <p>${x}</p>
                            `)}
                    </div>
                    <${ut.assign({viewMoreButtonText:l,flipCardButtonText:(k=e.infoParagraphs)!=null&&k.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${y(ut.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${ut}>
                </div>
            </${Gt}>
        `}});var hn=(e=>(e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e))(hn||{});const Ee=ie()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level==="h1","toniq-heading-h2":({inputs:e})=>e.level==="h2","toniq-heading-h3":({inputs:e})=>e.level==="h3","toniq-heading-h4":({inputs:e})=>e.level==="h4"},styles:({hostClasses:e})=>p`
        ${e["toniq-heading-h1"].selector} {
            ${D.h1Font};
        }
        ${e["toniq-heading-h2"].selector} {
            ${D.h2Font};
        }
        ${e["toniq-heading-h3"].selector} {
            ${D.h3Font};
        }
        ${e["toniq-heading-h4"].selector} {
            ${D.h4Font};
        }

        h1,
        h2,
        h3,
        h4 {
            ${is};
            font: inherit;
            overflow: inherit;
            text-overflow: inherit;
        }
    `,renderCallback({inputs:e}){return e.level==="h1"?c`
                <h1><slot></slot></h1>
            `:e.level==="h2"?c`
                <h2><slot></slot></h2>
            `:e.level==="h3"?c`
                <h3><slot></slot></h3>
            `:e.level==="h4"?c`
                <h4><slot></slot></h4>
            `:c`
                <slot></slot>
            `}});function Ba({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Ba({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function sh({value:e,allowed:t,blocked:n}){const r=t?Ba({input:e,matcher:t}):!0,o=n?Ba({input:e,matcher:n}):!1;return r&&!o}function Bc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(sh({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}var La=(e=>(e.Default="default",e.Outline="outline",e))(La||{});const Jr=ie()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:oe(),inputBlock:oe()},styles:({hostClasses:e})=>p`
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
                border-radius: ${ya};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${b.pagePrimary.backgroundColor};
                border-color: ${b.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${$} {
                color: ${b.pagePrimary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${$} {
                color: ${b.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${b.pageSecondary.foregroundColor};
            }

            label {
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                border: 1px solid transparent;
                align-items: center;
                position: relative;
                padding: 11px 16px;
                border-radius: ${ya};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${D.paragraphFont};
                gap: 4px;
            }

            ${Nt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${$} {
                margin-right: 10px;
            }

            input {
                ${ue};
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
                color: ${b.accentTertiary.foregroundColor};
            }

            .suffix {
                ${D.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Xt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Ze};
            }
        `,renderCallback({inputs:e,dispatch:t,events:n}){const{filtered:r}=Bc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?c`
                  <${$.assign({icon:e.icon})}></${$}>
              `:"";return c`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${r}
                    ${y("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=r;let u=a.value??"";if(s)if(s.length===1)sh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(u=l,t(new n.inputBlock(s)));else{const{filtered:f,blocked:h}=Bc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u=f,t(new n.inputBlock(h))}a.value!==u&&(a.value=u),l!==u&&t(new n.valueChange(u))})}
                    placeholder=${e.placeholder}
                />
                ${we(!!e.suffix,c`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var nr=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(nr||{});const rr=ie()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
        }

        ${e["toniq-loading-large"].selector} {
            width: 36px;
            height: 36px;
        }
        ${e["toniq-loading-whole-page"].selector} {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: 100%;
            height: 500px;
        }

        ${e["toniq-loading-whole-page"].selector} ${$} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${$} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>c`
            <${$.assign({icon:cs,fitContainer:e.size!=="small"})}></${$}>
        `}),Lc="...";function s5(e,t,n=7,r=5){let o;e=wn({value:e,min:1,max:t}),n=wn({value:n,min:r,max:t});const i=n-5,a=n-3;t<=n?o=n:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>n?ji(t-o,t):e>o?ji(Math.min(s.start,t-o),Math.min(s.end,t)):ji(1,Math.min(t,o+1));function u(h,m){return l.length+1!==t?m:[h]}const f=l[l.length-1];if(f&&f<t){const h=u(t,[Lc,t]);return[...l,...h]}else return l[0]!==1?u(1,[1,Lc]).concat(l):l}function ji(e,t){const n=t-e+1;return Array.from({length:n},(r,o)=>e+o)}const Hi=ie()({tagName:"toniq-pagination",styles:p`
        :host {
            display: flex;
        }

        button {
            ${ue};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Ze};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${F(b.accentSecondary)};
        }

        .control:hover {
            ${F(b.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${F(b.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${D.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${F(b.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${F(b.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:oe()},renderCallback({inputs:e,events:t,dispatch:n}){return e.pageCount<=1?c``:c`
                <button
                    ${y("click",()=>{e.currentPage>1&&n(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${$.assign({icon:ss})}></${$}>
                </button>
                ${s5(e.currentPage,e.pageCount,e.pagesShown).map(r=>typeof r=="string"?c`
                                <div class="page" disabled>${r}</div>
                            `:c`
                                <button
                                    class=${he({page:!0,selected:e.currentPage===r})}
                                    ?disabled=${e.currentPage===r}
                                    ${y("click",()=>{n(new t.pageChange(r))})}
                                >
                                    ${r}
                                </button>
                            `)}
                <button
                    ${y("click",()=>{e.currentPage<e.pageCount&&n(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${$.assign({icon:ls})}></${$}>
                </button>
            `}}),Ui=b.pageInteraction.foregroundColor,Vi=b.accentSecondary.backgroundColor,Ne=ie()({tagName:"toniq-list-table",cssVars:{"toniq-list-table-border-width":"1px","toniq-list-table-border-hover-width":"2px","toniq-list-table-header-radius":"16px","toniq-list-table-row-gap":"36px"},events:{pageChange:oe()},styles:({cssVars:e})=>p`
        :host {
            display: flex;
            overflow-x: auto;
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 1px solid ${b.dividerFaint.foregroundColor};
        }

        /* Firefox */
        :host {
            scrollbar-width: auto;
            scrollbar-color: ${Ui} ${Vi};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 2px;
            height: 2px;
        }

        :host::-webkit-scrollbar-track {
            background: ${Vi};
            border-radius: 8px;
        }

        :host::-webkit-scrollbar-thumb {
            background-color: ${Ui};
            border-radius: 8px;
        }

        .table-wrapper {
            position: relative;
            overflow-y: hidden;
            overflow-x: auto;

            display: flex;
            flex-grow: 1;

            flex-direction: column;
            align-items: center;
            gap: 32px;

            background: ${b.pageInteraction.backgroundColor};
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 24px solid ${b.pageInteraction.backgroundColor};
        }

        .table-wrapper.can-scroll {
            gap: 16px;
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 16px solid ${b.pageInteraction.backgroundColor};
        }

        .table-list {
            min-height: 40px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            overflow-x: auto;
            scrollbar-width: auto;
            scrollbar-color: ${Ui} ${Vi};
        }

        .table-list.hidden {
            visibility: hidden;
            opacity: 0;
        }

        .header {
            position: absolute;
            top: 0;
            ${D.labelFont};
        }

        .scroll-indicator {
            height: 32px;
            padding-left: 8px;
            position: absolute;
            top: 0;
            right: 0;
            background: ${b.pageInteraction.backgroundColor};
        }

        .scroll-indicator ${$} {
            height: 16px;
            width: 16px;
            opacity: 0.6;
        }

        .indicator.hidden {
            display: none;
        }

        .row-wrapper {
            display: flex;
            align-items: center;
            position: relative;
            background: ${b.pageInteraction.backgroundColor};
            cursor: pointer;
        }

        .row-wrapper:first-of-type,
        .row-wrapper:first-of-type .row-item {
            max-height: 32px;
        }

        .row-wrapper:not(:first-of-type):hover:before {
            content: '';
            position: absolute;
            top: 0;
            height: 2px;
            width: 100%;
            background-color: #e2e9f3;
        }

        .row-wrapper:not(:first-of-type):hover:after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 100%;
            background-color: #e2e9f3;
        }

        .row-wrapper:not(:first-of-type):hover .row-item,
        .row-wrapper:not(:first-of-type):hover + .row-wrapper .row-item {
            border-top-color: transparent;
        }

        .row-wrapper:not(:first-of-type) .row-item {
            border-top-color: ${b.dividerFaint.foregroundColor};
        }

        .row-item,
        .row-content {
            display: flex;
            align-items: center;
            background: ${b.pageInteraction.backgroundColor};
        }

        .row-content {
            min-height: 48px;
        }

        .row-content.hidden {
            visibility: hidden;
        }

        .row-content,
        .row-content * {
            text-wrap: nowrap;
        }

        .row-item {
            border: ${e["toniq-list-table-border-width"].value} solid transparent;
        }

        .row-item.sticky {
            position: sticky;
            filter: drop-shadow(rgba(0, 0, 0, 0.12) 4px 1px 3px);
            will-change: filter;
            z-index: 100;
        }

        .row-wrapper:last-child .row-item {
            border-bottom-color: ${b.dividerFaint.foregroundColor};
        }

        .row-item:not(:first-child) {
            padding-left: calc(${e["toniq-list-table-row-gap"].value} / 2);
        }

        .row-item:not(:last-child) {
            padding-right: calc(${e["toniq-list-table-row-gap"].value} / 2);
        }

        .row-item:last-of-type,
        .row-item:last-of-type .row-content {
            flex-grow: 1;
        }

        .loading-wrapper.hidden {
            visibility: hidden;
            pointer-events: none;
            opacity: 0;
            transition: ${K.interaction};
        }

        .loading-wrapper {
            transition: ${K.pretty};
            opacity: 1;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            background-color: rgba(255, 255, 255, 0.9);
        }

        .blocked-pagination {
            opacity: 0.3;
            pointer-events: none;
        }
    `,stateInitStatic:{canScroll:!1,debouncedResize:pf(()=>Fh(ar.FirstThenWait,{milliseconds:30})),rowStyles:{},isPainting:!1,itemsPainted:0,pageCountKey:0},initCallback({inputs:e,state:t,updateState:n}){const r=e.columns.filter(o=>!o.disabled);n({rowStyles:r.reduce((o,i)=>(o[i.key]={width:void 0,left:void 0},o),t.rowStyles)})},renderCallback({inputs:e,state:t,updateState:n,events:r,dispatch:o}){var h;const i=e.columns.filter(m=>!m.disabled),a=[e.rows[0],...e.rows].filter(ve);function s(m){m instanceof HTMLElement&&t.debouncedResize(()=>{n({canScroll:m.scrollWidth>m.clientWidth})})}const l=e.pagination&&((h=e.pagination)==null?void 0:h.pageCount)>1?c`
                      <${Hi.assign({currentPage:e.pagination.currentPage,pageCount:e.pagination.pageCount})}
                          class=${he({"blocked-pagination":!!e.showLoading})}
                          ${y(Hi.events.pageChange,m=>{var g,w;n({pageCountKey:(g=e.pagination)!=null&&g.pageCount?(w=e.pagination)==null?void 0:w.pageCount:t.pageCountKey+1}),o(new r.pageChange(m.detail))})}
                      ></${Hi}>
                  `:_;function u(m,g){return c`
                <div
                    class="row-wrapper"
                    ${g>0?y("click",w=>{var k,x;(x=(k=m.rowActions)==null?void 0:k.click)==null||x.call(k,{clickEvent:w,dispatch:o})}):_}
                >
                    ${i.map((w,k)=>{var S,N,W,te;const x=m.cells[w.key],C=p`
                            left: ${T(`${(S=t.rowStyles[w.key])==null?void 0:S.left}px`)};
                            min-width: ${k>=i.length-1?T("unset"):T(`${(N=t.rowStyles[w.key])==null?void 0:N.width}px`)};
                        `;return c`
                            <div
                                class=${he({"row-item":!0,sticky:(W=w.mobile)!=null&&W.sticky?((te=w.mobile)==null?void 0:te.sticky)&&t.canScroll:!1})}
                                style=${w.style?p`
                                          ${w.style} ${C}
                                      `:C}
                            >
                                <div
                                    class=${he({"row-content":!0,hidden:g===0})}
                                    ${ia(fe=>{var lt,vt;const X=fe.closest(".table-list"),V=X==null?void 0:X.getBoundingClientRect().left,ne=X==null?void 0:X.querySelectorAll(".row-item")[k],$e=ne==null?void 0:ne.getBoundingClientRect().left,be=fe.getBoundingClientRect().width;(!((lt=t.rowStyles[w.key])!=null&&lt.width)||be>((vt=t.rowStyles[w.key])==null?void 0:vt.width))&&n({rowStyles:{...t.rowStyles,[w.key]:{width:be,left:V?$e-V:$e}}}),n({itemsPainted:t.itemsPainted+1})})}
                                >
                                    ${x}
                                </div>
                                ${we(g===0,c`
                                        <span class="header">${w.title}</span>
                                    `)}
                            </div>
                        `})}
                </div>
            `}const f=t.itemsPainted<i.length*a.length||!!e.showLoading;return c`
            <div
                class=${he({"table-wrapper":!0,"can-scroll":t.canScroll})}
            >
                <div
                    class=${he({"table-list":!0,hidden:f})}
                    ${$n(m=>{s(m.target)})}
                    ${y("scroll",m=>{s(m.target)})}
                    ${y("keydown",m=>{e.showLoading&&(m.preventDefault(),m.stopImmediatePropagation())})}
                >
                    ${a.filter(ve).map((m,g)=>c`
                            ${u(m,g)}
                        `)}
                    ${we(t.canScroll,c`
                            <div class="scroll-indicator">
                                <${$.assign({icon:Id})}></${$}>
                            </div>
                        `)}
                </div>

                <div
                    class=${he({"loading-wrapper":!0,hidden:!f})}
                >
                    <${rr.assign({size:nr.Large})}></${rr}>
                </div>
                ${l}
            </div>
        `}});async function l5(e){return navigator.clipboard.writeText(e)}const c5="…";function u5(e,t){const n=e.slice(0,t).trim(),r=e.slice(-1*t).trim();return`${n}${c5}${r}`}function d5(e){return!(e%1)}function h5(e){return e.letterCount==null?4:d5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const O=ie()({tagName:"toniq-middle-ellipsis",events:{copy:oe()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${K.interaction};
            ${D.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${$} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${$} {
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
            ${ue};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${b.pagePrimary.backgroundColor};
            background-color: ${b.pagePrimary.backgroundColor};
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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:n,state:r,updateState:o}){if(!e.text)return c``;const i=e.text,a=h5(e),s=!!e.externalLink,l=!!e.copyOnClick,u=i.length>a*2+2,f=u?u5(i,a):i,h=u?i:"",m=s?Dd:l?Od:void 0,g=m?c`
                  <${$.assign({icon:m})}></${$}>
              `:"",w=c`
            <span title=${h} class="text-content">
                ${we(!!e.copyOnClick,c`
                        <span
                            class=${he({"copied-text":!0,"show-copied-text":r.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${f}
            </span>
        `;return f?s?c`
                    <button
                        tabindex="0"
                        role="link"
                        ${y("click",k=>{var C,S;const x=(S=(C=k.currentTarget)==null?void 0:C.querySelector)==null?void 0:S.call(C,"a");if(!x)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");x.click()})}
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
                            title=${h}
                        >
                            ${w} ${g}
                        </a>
                    </button>
                `:l?c`
                    <button
                        class="text-wrapper copyable"
                        ${y("click",async()=>{await l5(i),t(new n.copy),r.showCopiedTextTimeoutId!=null&&window.clearTimeout(r.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${w} ${g}
                    </button>
                `:c`
                    ${w}
                `:c``}}),jn=ie()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>p`
        :host {
            position: relative;
            width: 100%;
            display: inline-block;
            background: ${b.accentSecondary.backgroundColor};
            height: 8px;
            border-radius: 16px;
            overflow: hidden;
        }
        .progress {
            position: absolute;
            height: inherit;
            border-radius: inherit;
            left: 0;
            top: 0;
            width: ${e["toniq-progress-width"].value};
            background: ${b.pageInteraction.foregroundColor};
        }
    `,renderCallback({inputs:e,cssVars:t,host:n}){const r=wn({value:e.percent,max:100,min:0}),o=`${r}%`;return vo({forCssVar:t["toniq-progress-width"],onElement:n,toValue:o}),n.setAttribute("title",`${o} finished`),r?c`
                <div class="progress"></div>
            `:_}}),J=ie()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:oe()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Xe("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Xe("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Xe("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Xe("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${D.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${K.interaction},
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
            ${ue};
            cursor: pointer;
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

        ${Nt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Xt};
        }

        .wrapper.disabled::before {
            ${Xt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:ru()})},renderCallback({inputs:e,dispatch:t,events:n,state:r}){return f5(e.entries).map(i=>p5(e.groupName||r.randomGroupName,e.value,i,()=>{t(new n.valueChange(i.value))}))}});function f5(e){const t=Object.fromEntries(e.map(r=>[r.value,r]));return Object.values(t).length!==e.length&&console.error(`${J.tagName} was given duplicate entry values.`),Object.values(t)}function p5(e,t,n,r){const o=t===n.value,i=c`
        <slot name=${n.value} class="label">
            <span class="label">${n.label||n.value}</span>
        </slot>
    `;return c`
        <button
            ?disabled=${n.disabled}
            tabindex="0"
            class=${he({disabled:!!n.disabled,checked:o&&!n.disabled,wrapper:!0})}
            ${y("click",()=>{r()})}
        >
            <input
                ${y("input",()=>{r()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function Wi(e,t){const n=e[0],r=e[e.length-1];if(n==null||r==null)return 0;if(t<n)return n;if(t>r)return r;const o=e.findIndex((u,f)=>{const h=e[f+1];return h==null?!0:u<=t&&h>=t});if(o<0)return n;const i=e[o];if(i==null)return n;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function m5(e,t,n=100){e>t&&([e,t]=[t,e]),n<2&&(n=2);let r=g5(e);const o=[e];for(;r<t;){const i=Math.pow(10,String(r).length-1),a=r+i;a<t&&o.push(a),r=a}return o.push(t),o.length>n&&(qc(o,n),o.length>n&&qc(o,n)),o}function qc(e,t){const n=e.length-t,r=(e.length-2)/n;for(let o=e.length-2;o>=1;o-=r)e.splice(Math.floor(o),1)}function g5(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const n=e.toFixed(0),r=Math.pow(10,n.length-1),o=Number(n[0]||1);return r*o*t}const B={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Hn={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"},or={hot:"rgb(200,0,0)",medium:"orange",cold:"rgb(0,200,0)"};function ln(e){return p`
        background-color: ${T(or[e])};
        color: ${T(or[e])};
    `}function w5(e){var r,o;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${B.lowerLabelWrapper} .${B.labelPercentMarginWrapper}`),n=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${B.upperLabelWrapper} .${B.labelPercentMarginWrapper}`);if(n instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=n.getBoundingClientRect();return{lower:i,upper:a}}else return}function v5(e,t=8){const n=w5(e);if(!n)return 0;const r=n.lower.right-n.upper.left+t;return Math.max(0,r)}function zi({value:e,limits:t,flip:n}){const o=(t.max-e)/(t.max-t.min)*100;return-(n?100-o:o)}function yr(e){return ze(e)&&e.min!==void 0&&e.max!==void 0}function qa(e){var n;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${B.range}`);return(t==null?void 0:t.clientWidth)??0}function Zi(e,t,n){return`${n?i1(e):e} ${t}`}function b5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function y5({value:e,double:t,min:n,max:r}){return t?yr(e)?{min:wn({value:e.min,min:n,max:Math.min(e.max,r)}),max:wn({value:e.max,min:Math.max(e.min,n),max:r})}:{min:n,max:r}:yr(e)?n:wn({value:e,min:n,max:r})}function k5({actualValue:e,actualLimits:t,logScale:n,logRange:r}){return n?{elementValue:yr(e)?{min:Wi(r,e.min),max:Wi(r,e.max)}:Wi(r,e),elementLimits:{min:0,max:r.length-1}}:{elementValue:e,elementLimits:t}}function Gi(e,t,n){return n?t[e]||0:e}function x5(e){return{actualLimits:b5(e),actualValue:y5(e)}}function A5(e,t){var r,o,i;let n=!1;if(yr(e)){const a=(r=t.shadowRoot)==null?void 0:r.querySelector(`.${B.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${B.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),n=!0),Number(s.value)!==e.max&&(s.value=String(e.max),n=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${B.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),n=!0)}return n}function lh(e,t){const{actualValue:n,actualLimits:r}=x5({...e}),o=m5(r.min,r.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=k5({actualValue:n,actualLimits:r,logScale:i,logRange:o}),u=qa(t);return{actualValue:n,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:u,suffix:a}}const Ut=16,Pc=p`
    ${Ut}px
`,Oc=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Pc};
    width: ${Pc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${K.interaction};
    ${F(b.accentPrimary)};
`,Dc=p`
    transform: scale(1.2);
`;function $5(e){return e>100*(2/3)?"cold":e>100*(1/3)?"medium":"hot"}function Qn(e){requestAnimationFrame(()=>{const t=lh(e.instanceInputs,e).elementValue;A5(t,e)&&(e.setAttribute("disabled","true"),Qn(e))})}const R=ie()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:oe()},styles:p`
        :host {
            display: block;
        }

        .${T(B.range)}-temp {
            background: linear-gradient(
                90deg,
                ${T(or.cold)},
                ${T(or.medium)},
                ${T(or.hot)}
            );
        }

        .${T(B.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${F(b.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${F(b.accentPrimary)};
        }

        .progress-temp {
            background-color: transparent;
        }

        .${T(B.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${D.boldParagraphFont};
            ${Ze};
        }

        .${T(B.labelPixelMarginWrapper)},
            .${T(B.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${T(B.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${T(B.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Nt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${T(B.lowerSlider)},
        .${T(B.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-moz-range-thumb {
            ${Oc}
        }

        .${T(B.slider)}.hot::-moz-range-thumb {
            ${ln("hot")}
        }
        .${T(B.slider)}.medium::-moz-range-thumb {
            ${ln("medium")}
        }
        .${T(B.slider)}.cold::-moz-range-thumb {
            ${ln("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-webkit-slider-thumb {
            ${Oc}
        }

        .${T(B.slider)}.hot::-webkit-slider-thumb {
            ${ln("hot")}
        }
        .${T(B.slider)}.medium::-webkit-slider-thumb {
            ${ln("medium")}
        }
        .${T(B.slider)}.cold::-webkit-slider-thumb {
            ${ln("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-webkit-slider-thumb:hover {
            ${Dc}
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-moz-range-thumb:hover {
            ${Dc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Qn(e)}),e.addEventListener("keydown",()=>{Qn(e)}),e.addEventListener("keyup",()=>{Qn(e)})},renderCallback({inputs:e,host:t,events:n,dispatch:r,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:u,elementValue:f,elementLimits:h,rangeWidth:m}=lh({...e},t);if(Qn(t),yr(f))return g(a,f,h);return k(a,f,h);function g(x,C,S){const N={left:Vt((m-Ut)*(C.min-S.min)/(S.max-S.min)+Ut/2),right:Vt((m-Ut)*(S.max-C.max)/(S.max-S.min)+Ut/2)},W=Zi(x.min,u,l),te=Zi(x.max,u,l);requestAnimationFrame(()=>{const be=v5(t);be!==o.labelOverlap&&i({labelOverlap:be})});const fe=(S.max-C.max)/(S.max-S.min)>.5,X=zi({value:C.min,limits:{min:S.min,max:C.max},flip:!0}),V=zi({value:C.max,limits:{min:C.min,max:S.max},flip:!1}),ne=o.labelOverlap&&fe?o.labelOverlap:0,$e=o.labelOverlap&&!fe?o.labelOverlap:0;return c`
                <div
                    class="range"
                    ${$n(()=>{i({rangeWidth:qa(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${N.left}; right:${N.right}"
                    ></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.lowerLabelWrapper}"
                        style="left: ${N.left}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-left: ${ai(X)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-right: ${Vt($e)}"
                                ${dn(Hn.lowerLabel)}
                            >
                                ${W}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${B.labelOuterWrapper} ${B.upperLabelWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${N.right}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${ai(V)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-left: ${Vt(ne)}"
                                ${dn(Hn.upperLabel)}
                            >
                                ${te}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${B.lowerSlider} ${B.slider}"
                            .min=${S.min}
                            .max=${S.max}
                            .value=${C.min}
                            ${y("input",be=>{const lt=be.target,vt={...x,min:Gi(Number(lt.value),s,l)};w(vt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${B.upperSlider} ${B.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${C.max}
                            ${dn(Hn.slider)}
                            ${y("input",be=>{const lt=be.target,vt={...x,max:Gi(Number(lt.value),s,l)};w(vt)})}
                        />
                    </div>
                </div>
            `}function w(x){i({internalValue:x}),e.disabled||r(new n.valueChange(x))}function k(x,C,S){const N=Vt((m-Ut)*(S.max-C)/(S.max-S.min)+Ut/2),W=Zi(x,u,l),te=zi({value:C,limits:S,flip:!1});return c`
                <div
                    class="range ${e.colorTemperature?"range-temp":""}"
                    ${$n(()=>{i({rangeWidth:qa(t)})})}
                >
                    <div
                        class="progress ${e.colorTemperature?"progress-temp":""}"
                        style="left: 0px; right: ${N}"
                    ></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${N}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${ai(te)}"
                            ${dn(Hn.label)}
                        >
                            ${W}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${B.slider} ${e.colorTemperature?$5(Math.abs(te)):""}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${C}
                        ${dn(Hn.slider)}
                        ${y("input",fe=>{const X=fe.target,V=Gi(Number(X.value),s,l);w(V)})}
                    />
                </div>
            `}}});var ch=(e=>(e.Default="default",e.TextOnly="text-only",e))(ch||{}),uh=(e=>(e.Left="left",e.Right="right",e))(uh||{});const Yi=ie()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${D.boldParagraphFont};
            ${Ze};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${ue};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${F(b.accentSecondary)};
            transition:
                color ${K.interaction},
                background-color ${K.interaction};
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${F(b.accentPrimary)};
        }

        :host(:hover) button {
            ${F(b.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${F(b.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${F(b.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${F(b.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${F(b.pageInteraction)};
            border-color: ${b.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${F(b.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${b.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${F(b.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Xt};
        }

        .icon-template + .text-template,
        .text-template + .icon-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.iconPlacement??"left",n=e.icon?c`
                  <${$.assign({icon:e.icon})}
                      class="icon-template"
                  ></${$}>
              `:"",r=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"",o=we(t==="left",n),i=we(t==="right",n);return c`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                <slot>${o} ${r} ${i}</slot>
            </button>
        `}}),ir=us({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${vr.menuShadow};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return c`
            <slot></slot>
        `}}),uo=ie()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>p`
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
            transition:
                visibility ${K.pretty} ${K.pretty},
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:n}){return c`
            <div
                class="slot-wrapper"
                ${y("click",()=>{n({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{n({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${ir}>${e.tooltipContent}</${ir}>
            </div>
        `}}),Kn=ie()({tagName:"toniq-top-tabs",events:{routeChange:oe(),valueChange:oe()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>p`
        :host {
            display: block;
        }

        ul {
            ${ue};
            display: flex;
            width: 100%;
        }

        li {
            display: flex;
            align-items: center;
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${b.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${K.interaction},
                border-color ${K.interaction},
                padding-bottom ${K.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${ue};
            ${is};
            cursor: pointer;
            display: inline-block;
            ${D.paragraphFont};
            max-width: 300px;
        }

        .tab-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .disabled-tab {
            pointer-events: none;
        }

        ${Yt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${D.boldFont};
            cursor: default;
        }

        li.selected {
            border-color: ${b.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
            padding-bottom: calc(
                calc(
                        ${e["toniq-top-tabs-tab-vertical-padding"].value} -
                            ${e["toniq-top-tabs-selected-border-width"].value}
                    ) + 1px
            );
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=e.tabs.map(o=>{var l;const i=o.value===e.value,a=o.icon?c`
                      <${$.assign({icon:o.icon})}></${$}>
                  `:"",s=o.label?c`
                      <${Yt.assign({text:o.label})}></${Yt}>
                  `:"";return c`
                <li
                    ${ff("tab")}
                    role="presentation"
                    class=${he({selected:i})}
                >
                    <${Je.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:pt.RouteLink})}
                        class="tab ${he({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${y("click",u=>{var f;i||Wo(u)&&((f=o.link)!=null&&f.route&&t(new n.routeChange(o.link.route)),t(new n.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Je}>
                </li>
            `});return c`
            <ul role="tablist">
                ${r}
                <li></li>
            </ul>
        `}}),dh=U({title:"Data",parent:void 0}),Oo=ie()({tagName:"toniq-icon-book-viewer",styles:p`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${b.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return c`
            <${$.assign({icon:e.icon})}></${$}>
        `}}),ti=Object.values(At).reduce((e,t)=>(t.forEach(n=>{if(n.name in e)throw new Error(`Icon name duplicate: '${n.name}'`);e[n.name]=n}),e),{}),C5=Object.keys(ti).sort();function ks(e){return{controlType:j.Dropdown,initValue:e,options:["None",...C5]}}const hh={"CSS color":{controlType:j.Color,initValue:""},[String(d["toniq-icon-stroke-color"].name)]:{controlType:j.Color,initValue:""},[String(d["toniq-icon-fill-color"].name)]:{controlType:j.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:j.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:j.Number,initValue:2}};function ho(e){return Object.entries(e).filter(([,n])=>n!==""&&n!=null).map(([n,r])=>(n.toLowerCase()==="css color"&&(n="color"),ee(r,"number")&&(r=Oa({value:r,suffix:"px"})),`${n}: ${r};`)).join(`
`)}const S5=U({title:"Social Urls",parent:dh,elementExamplesCallback({defineExample:e}){function t({socialName:n,icon:r}){e({title:n,renderCallback(){return c`
                        <${Oo.assign({icon:r})}></${Oo}>
                    `}})}Object.entries(_d).forEach(([n,r])=>{t({socialName:n,icon:r})})}}),ae=U({title:"Elements",parent:void 0}),T5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:p`
            ${Yt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],M5=U({title:Yt.tagName,parent:ae,elementExamplesCallback({defineExample:e}){T5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:p`
                    .bold {
                        ${D.boldFont}
                    }

                    ${t.extraStyle??p``}
                `,renderCallback({state:n,updateState:r}){return c`
                        <${Yt.assign({text:t.text})}
                            ${y("click",()=>{r({isBold:!n.isBold})})}
                            class=${he({bold:n.isBold})}
                        ></${Yt}>
                        More text
                    `}})})}}),E5=U({parent:ae,title:ge.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:fn.Secondary}},{name:"Outline",inputs:{variant:fn.Outline}},{name:"Text Only",inputs:{variant:fn.TextOnly}},{name:"Disabled",inputs:{disabled:!0}},{name:"Right Icon",inputs:{iconPlacement:e0.Right,variant:fn.Outline}},{name:"Pulsing Effect",inputs:{effect:t0.Pulse}}].forEach(n=>{e({title:n.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
                    :host {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 16px;
                    }

                    .icon-toggle {
                        flex-basis: 120px;
                        flex-shrink: 0;
                        width: 120px;
                        max-width: 120px;
                    }
                `,renderCallback({state:r,updateState:o}){return r.timeoutId||o({timeoutId:window.setTimeout(()=>{o({showIcon:!r.showIcon,timeoutId:void 0})},1e3)}),c`
                        <${ge.assign({text:"Button",...n.inputs})}></${ge}>
                        <${ge.assign({icon:ao,...n.inputs})}></${ge}>
                        <${ge.assign(r.showIcon?{icon:ao,text:"icon",...n.inputs}:{text:"no icon",...n.inputs})}
                            class="icon-toggle"
                        ></${ge}>
                        <${ge.assign({text:"Button",icon:ao,...n.inputs})}></${ge}>
                        <${ge.assign({...n.inputs})}>
                            <span>HTML Child</span>
                        </${ge}>
                        <${ge.assign({text:"bigger",...n.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ge}>
                    `}})})}}),Nc=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Ie} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,I5=U({parent:ae,title:Ie.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Nc,renderCallback(){return c`
                    <${Ie.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:At["core-24"].map(t=>{const n=p`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${$.assign({icon:t})} style=${n}></${$}>
                            `})})}></${Ie}>
                    <${Ie.assign({enableAutomaticCycling:!0,templates:At["core-24"].map(t=>{const n=p`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${$.assign({icon:t})} style=${n}></${$}>
                            `})})}></${Ie}>
                    <${Ie.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:At["core-24"].map(t=>{const n=Yh({min:0,max:150}),r=p`
                                padding: 100px ${n}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${$.assign({icon:t})} style=${r}></${$}>
                            `})})}></${Ie}>
                `}}),e({title:"banner style",styles:Nc,renderCallback(){const t=p`
                    /* make sure this width matches the ToniqCarousel width */
                    width: 800px;
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 100px 0;
                    box-sizing: border-box;
                    border: 1px solid ${b.pageInteraction.foregroundColor};
                    border-radius: 12px;
                `;return c`
                    <${Ie.assign({enableAutomaticCycling:!0,variant:ka.Banner,templates:At["core-24"].map(n=>c`
                                <div style=${t}>
                                    <${$.assign({icon:n})}></${$}>
                                </div>
                            `)})}></${Ie}>
                    <${Ie.assign({enableAutomaticCycling:!0,variant:ka.Banner,templates:[At["core-24"][0]].map(n=>c`
                                <div style=${t}>
                                    <${$.assign({icon:n})}></${$}>
                                </div>
                            `)})}
                        class=${Ie.hostClasses["toniq-carousel-banner-variant"]}
                    ></${Ie}>
                `}})}});function B5(e){const t=Object.keys(e.cssVars).map(n=>[`--${n}`,{controlType:j.Color,initValue:""}]);return Object.fromEntries(t)}function L5(e){const t=Object.entries(e).map(([n,r])=>{if(n.startsWith("--"))return typeof r!="string"||!r?void 0:`${n}: ${r};`}).filter(ve);return T(t.join(`
`))}const q5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Qi=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],P5=U({parent:ae,title:bt.tagName,controls:{Text:{controlType:j.Text,initValue:"Text"},...B5(bt)},elementExamplesCallback({defineExample:e}){q5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Qi.map(n=>!!n.inputs.checked),extraEntryStatuses:Qi.map(n=>(n.extraEntries??[]).map(()=>!1))},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }

                    .checkbox-group {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        max-width: 250px;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return Qi.map((i,a)=>{const s=(i.extraEntries??[]).map((u,f)=>{var h;return c`
                                    <${bt.assign({...t.inputs,...sr(i.inputs,["checked"]),checked:!!((h=n.extraEntryStatuses[a])!=null&&h[f]),text:u})}
                                        ${y(bt.events.checkedChange,()=>{const m=[...n.extraEntryStatuses];m[a][f]=!m[a][f],r({extraEntryStatuses:m})})}
                                    ></${bt}>
                                `}),l=L5(o);return c`
                            <div class="checkbox-group" style=${l}>
                                <${bt.assign({...t.inputs,...sr(i.inputs,["checked"]),checked:n.checkedStatuses[a],text:o.Text})}
                                    ${y(bt.events.checkedChange,()=>{const u=[...n.checkedStatuses];u[a]=!u[a],r({checkedStatuses:u})})}
                                ></${bt}>
                                ${s}
                            </div>
                        `})}})})}}),O5=U({parent:ae,title:Mi.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Et}},{inputs:{icon:Et}},{inputs:{},template:c`
                    HTML child
                `},{inputs:{icon:Et},template:c`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:Zn.Default}},{title:"secondary style",inputs:{variant:Zn.Secondary}},{title:"warning style",inputs:{variant:Zn.Warning}},{title:"danger style",inputs:{variant:Zn.Danger}}].forEach(r=>{e({title:r.title,renderCallback(){return t.map(o=>c`
                        <${Mi.assign({...r.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${we(!!o.template,o.template)}</${Mi}>
                    `)}})})}}),D5=U({title:Ri.tagName,parent:ae,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=oh();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:Ni(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:Ni(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:Ni(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[I.Days,I.Hours]}}}].forEach(r=>{e({title:r.title,renderCallback(){return c`
                        <${Ri.assign({...r.inputs})}></${Ri}>
                    `}})})}}),Xr=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],N5=[{title:"default"},{title:"transparent background",customStyle:p`
            ${as.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Rc=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],R5=U({title:Kr.tagName,parent:ae,controls:{Selected:{controlType:j.Dropdown,initValue:Xr[0].label,options:Xr.map(e=>e.label)},Direction:{controlType:j.Dropdown,initValue:"Down",options:Xc(Ea)},Icon:ks(Bd.name),Prefix:{controlType:j.Text,initValue:"Sort by: "},"Force open":{controlType:j.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){N5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Rc.map(n=>{var r;return(r=n.inputs)==null?void 0:r.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return Rc.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return c`
                            <${Kr.assign({...t.inputs,...i.inputs,options:Xr,value:n.selected[a]??Xr.find(l=>l.label===o.Selected),icon:ti[o.Icon],selectedLabelPrefix:o.Prefix,direction:Ea[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${y(Kr.events.selectChange,l=>{const u=[...n.selected];u[a]=l.detail,r({selected:u})})}
                            ></${Kr}>
                        `})}})})}}),F5=[{title:"empty",content:""},{title:"with text",content:"Error: there was an error"}],j5=U({title:Fi.tagName,parent:ae,elementExamplesCallback({defineExample:e}){F5.forEach(t=>{e({title:t.title,renderCallback(){return c`
                        <${Fi}>${t.content}</${Fi}>
                    `}})})}}),Fc="/toniq-labs-design-system";function fh(...e){const n=[globalThis.location.pathname.startsWith(Fc)?Fc:"",...e].filter(ve);return lr(...n)}const cn=Array(30).fill(fh("/toniq-labs-logo.png")),mn=["Hello there.","There is stuff here."],_r=mn.concat(Array(30).fill(mn)),H5=U({title:re.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({infoParagraphs:_r,imageUrls:cn,socialUrls:$g,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${re}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:cn,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${re}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:_r,viewMoreUrl:"https://toniqlabs.com"})}
                        ${y(re.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${re}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:_r})}></${re}>
                `}}),e({title:"with custom height",styles:p`
                ${re} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:_r})}></${re}>
                `}}),e({title:"smaller",styles:p`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:cn,infoParagraphs:mn,cardTitle:"Featured Stuff"})}></${re}>
                `}}),e({title:"with social URLs",styles:p`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:cn,infoParagraphs:mn,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${re}>
                `}}),e({title:"with custom template",styles:p`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:cn,infoParagraphs:mn,cardTitle:"With custom Template",customTemplateCallback(t){return c`
                                <${Ct.assign({imageUrl:t})}></${Ct}>
                            `}})}></${re}>
                `}}),e({title:"with custom template statuses",styles:p`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:cn.map((t,n)=>n%2?"/invalid-image.png":t),infoParagraphs:mn,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return c`
                                <${Ct.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${Sn.Loading}
                                        class="icon-wrapper"
                                        style=${p`
                                            background-color: #f0faff;
                                            box-sizing: border-box;
                                            border-radius: 16px;
                                            width: 100%;
                                            height: 100%;
                                            max-width: 100%;
                                            border: 2px solid blue;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            color: blue;
                                        `}
                                    >
                                        <${$.assign({icon:cs,fitContainer:!0})}
                                            style=${p`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${$}>
                                    </div>
                                    <div
                                        slot=${Sn.Error}
                                        class="icon-wrapper"
                                        style=${p`
                                            background-color: #fff0f0;
                                            box-sizing: border-box;
                                            border-radius: 16px;
                                            width: 100%;
                                            height: 100%;
                                            max-width: 100%;
                                            border: 2px solid red;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            color: red;
                                        `}
                                    >
                                        <${$.assign({icon:$d,fitContainer:!0})}
                                            style=${p`
                                                ${q["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${$}>
                                    </div>
                                </${Ct}>
                            `}})}></${re}>
                `}})}}),U5=U({title:Gt.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:n}){return c`
                    <${Gt.assign({flipped:t.flipped})}
                        ${y(Gt.events.flippedChange,r=>{n({flipped:r.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Gt}>
                `}})}}),V5=U({title:Ee.tagName,parent:ae,elementExamplesCallback({defineExample:e}){_c(hn).forEach(t=>{e({title:t,renderCallback(){return c`
                        <${Ee.assign({level:t})}>Some text</${Ee}>
                    `}})}),e({title:"can be restyled",styles:p`
                ${Ee}:first-of-type {
                    ${D.h4Font};
                }
            `,renderCallback(){return c`
                    <${Ee.assign({level:hn.H1})}>
                        This is an h1
                    </${Ee}>
                    <${Ee.assign({level:hn.H1})}>
                        This is an h1
                    </${Ee}>
                `}}),e({title:"can do ellipsis",styles:p`
                ${Ee}:first-of-type {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                :host {
                    width: 300px;
                }
            `,renderCallback(){return c`
                    <${Ee.assign({level:hn.H3})}>
                        title longer than bounds
                    </${Ee}>
                    <${Ee.assign({level:hn.H3})}>
                        title longer than bounds
                    </${Ee}>
                `}})}}),W5=U({parent:ae,title:Je.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:pt.ReplacePage}},{title:"new tab",inputs:{linkType:pt.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:pt.NewTab}},{title:"route link",inputs:{linkType:pt.RouteLink}},{title:"link disabled",inputs:{linkType:pt.Disabled}}].forEach(n=>{e({title:n.title,descriptionParagraphs:n.descriptions,renderCallback(){return c`
                        <${Je.assign({url:"https://toniqlabs.com",...n.inputs})}>
                            Toniq Labs Link
                        </${Je}>
                    `}})})}}),z5=U({title:$.tagName,parent:ae,controls:hh,elementExamplesCallback({defineExample:e}){const t=[{icon:Hd},{icon:jd},{icon:Pd},{icon:Et},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:n}){return t.map(r=>c`
                        <${$.assign({icon:r.icon})}
                            style=${ho(n)}
                        ></${$}>
                    `)}}),e({title:"brand icons",renderCallback({controls:n}){const r=p`
                    ${d["toniq-icon-fill-color"].name}: orange;
                `;return At["third-party-brands"].map(o=>c`
                        <${$.assign({icon:o})}
                            style=${ho(n)}
                        ></${$}>
                        <${$.assign({icon:o})}
                            style=${r}
                        ></${$}>
                    `)}}),e({title:"fit container",styles:p`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${$} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:n}){return c`
                    <${$.assign({icon:Et,fitContainer:!0})}
                        style=${ho(n)}
                    ></${$}>
                `}})}}),Z5=U({title:Jr.tagName,parent:ae,controls:{"External value":{controlType:j.Text,initValue:""},Placeholder:{controlType:j.Text,initValue:"placeholder"},Icon:ks(Rd.name),Suffix:{controlType:j.Text,initValue:"ICP"},"No browser helps":{controlType:j.Checkbox,initValue:!1},"Blocked characters":{controlType:j.Text,initValue:""},"Exclusive characters":{controlType:j.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:La.Default}},{title:"outline",inputs:{variant:La.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),c`
                            <${Jr.assign({...r.inputs,value:o["External value"]||i.value,icon:ti[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${y(Jr.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Jr}>
                        `))}})})}});function ni({entries:e,columns:t,createRowObject:n}){const r=Object.fromEntries(t.map(i=>[i.key,""]));return{rows:e.map((i,a)=>{const s=n(i,a);if(!it(Object.keys(r).sort(),Object.keys(s.cells).sort()))throw console.error("broken list table row",{cells:s.cells,columns:r}),new Error("List table row keys does not match expect column keys.");return s}),columns:t}}const ph="https://cdn-bitcoin.bioniq.io",G5=lr(ph,"content"),Y5=lr(ph,"thumbnail"),gn={thumbnail(e){return lr(Y5,e)},content(e){return lr(G5,e)}},Q5=Array(5).fill({imageUrl:gn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:c`
        <div
            style=${p`
                display: flex;
                gap: 8px;
            `}
        >
            <${$.assign({icon:Qo})}></${$}>
            <span>0.00042753</span>
        </div>
    `,from:c`
        <${O.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${O}>
    `,to:c`
        <${O.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.stopImmediatePropagation()})}
        ></${O}>
    `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
        <div
            style=${p`
                width: 100%;
                display: flex;
                justify-content: flex-end;
            `}
        >
            <button
                style=${p`
                    ${ue}
                    ${D.boldParagraphFont};
                    color: ${b.pageInteraction.foregroundColor};
                    cursor: pointer;
                `}
            >
                Cancel
            </button>
        </div>
    `}),K5=[{imageUrl:gn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Payment Sent",price:c`
            <div
                style=${p`
                    display: flex;
                    gap: 8px;
                `}
            >
                <${$.assign({icon:Qo})}></${$}>
                <span>0.00042753</span>
            </div>
        `,from:c`
            <${O.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${O}>
        `,to:c`
            <${O.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${O}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${p`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${p`
                        ${ue}
                        ${D.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:gn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Transfer",price:c`
            -
        `,from:c`
            <${O.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${O}>
        `,to:c`
            <${O.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${O}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${p`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${p`
                        ${ue}
                        ${D.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:gn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Accept Offer",price:c`
            -
        `,from:c`
            <${O.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${O}>
        `,to:c`
            <${O.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${O}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${p`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${p`
                        ${ue}
                        ${D.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:gn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Cancel Listing",price:c`
            -
        `,from:c`
            <${O.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${O}>
        `,to:c`
            -
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${p`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${p`
                        ${ue}
                        ${D.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `}],J5=[],X5=Array(5).fill({imageUrl:gn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:c`
        <div
            style=${p`
                display: flex;
                gap: 8px;
            `}
        >
            <${$.assign({icon:Qo})}></${$}>
            <span>0.00042753</span>
        </div>
    `,from:c`
        <${O.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${O}>
    `,to:c`
        <${O.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.stopImmediatePropagation()})}
        ></${O}>
    `,date:"April 3, 2024 (1:57pm)",time:c`
        <div
            style=${p`
                width: 100%;
                display: flex;
                justify-content: flex-end;
            `}
        >
            <span>2h ago</span>
        </div>
    `}),Ki=ni({entries:Q5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE",mobile:{sticky:!0}},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),jc=ni({entries:K5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),_5=ni({entries:J5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),ev=ni({entries:X5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME",style:p`
                display: flex;
                justify-content: flex-end;
            `}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),tv=[{title:"basic"},{title:"with pagination",inputs:{pagination:{currentPage:1,pageCount:10}}},{title:"squished horizontally",styles:p`
            :host {
                width: 200px;
            }
        `},{title:"squished vertically",styles:p`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{pagination:{currentPage:3,pageCount:10}}},{title:"squished in both",styles:p`
            :host {
                max-height: 300px;
                width: 200px;
                display: flex;
            }
        `},{title:"with wide parent",styles:p`
            ${Ne} {
                width: 100%;
                flex-grow: 1;
            }
        `},{title:"show loading",styles:p`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{showLoading:!0,pagination:{currentPage:3,pageCount:10}}}],Hc=us({tagName:"toniq-test-resize",stateInitStatic:{message:"",cleanup:void 0},initCallback({updateState:e,state:t}){if(!t.cleanup){const n=window.setInterval(()=>{t.message?e({message:""}):e({message:"April 3, 2024 (1:57pm)"})},1e3);e({cleanup(){window.clearInterval(n)}})}},cleanupCallback({state:e,updateState:t}){var n;(n=e.cleanup)==null||n.call(e),t({cleanup:void 0})},renderCallback({state:e}){return e.message}}),nv=U({title:Ne.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"no action",renderCallback(){return c`
                    <${Ne.assign(ev)}></${Ne}>
                `}}),e({title:"takes time to load",stateInitStatic:{tableInputs:{..._5,showLoading:!0,pagination:{currentPage:1,pageCount:5}}},renderCallback({state:t,updateState:n}){return setTimeout(()=>{n({tableInputs:{...t.tableInputs,...jc,showLoading:!1}})},5e3),c`
                    <${Ne.assign(t.tableInputs)}
                        ${y(Ne.events.pageChange,r=>{n({tableInputs:{...t.tableInputs,...jc,pagination:{currentPage:2,pageCount:5}}})})}
                    ></${Ne}>
                `}}),tv.forEach(t=>{var n,r;e({title:t.title,styles:p`
                    ${T(t.styles)}
                `,stateInitStatic:{currentPage:(r=(n=t.inputs)==null?void 0:n.pagination)==null?void 0:r.currentPage},renderCallback({state:o,updateState:i}){var s;const a=(s=t.inputs)!=null&&s.pagination&&o.currentPage?{pagination:{...t.inputs.pagination,currentPage:o.currentPage}}:{};return c`
                        <${Ne.assign({...Ki,...t.inputs,...a})}
                            ${y(Ne.events.pageChange,l=>{i({currentPage:l.detail})})}
                        ></${Ne}>
                    `}})}),e({title:"changing child size",styles:p`
                :host {
                    width: 600px;
                }
            `,stateInitStatic:{tableInputs:{...Ki,rows:Ki.rows.map(t=>({...t,cells:{...t.cells,date:c`
                                    <${Hc}></${Hc}>
                                `}}))}},renderCallback({state:t}){return c`
                    <${Ne.assign(t.tableInputs)}></${Ne}>
                `}})}}),rv=U({title:rr.tagName,parent:ae,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:nr.Small}},{title:"large",inputs:{size:nr.Large}},{title:"whole page",inputs:{size:nr.WholePage},styles:p`
                    :host {
                        width: 500px;
                    }
                `}].forEach(n=>{e({title:n.title,styles:n.styles??p``,renderCallback(){return c`
                        <${rr.assign(n.inputs)}></${rr}>
                    `}})})}}),ov=U({title:O.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return c`
                    <${O.assign({text:"Long string instead of text"})}></${O}>
                `}}),e({title:"Short text",renderCallback(){return c`
                    <${O.assign({text:"Short text"})}></${O}>
                `}}),e({title:"External Link",renderCallback(){return c`
                    <${O.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${O}>
                `}}),e({title:"Copyable",renderCallback(){return c`
                    <${O.assign({text:"Long text that you can copy",copyOnClick:!0})}></${O}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${O} {
                    ${O.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${O.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${O.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${O.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return c`
                    <${O.assign({text:"long text with custom colors",copyOnClick:!0})}></${O}>
                `}})}}),iv=U({title:jn.tagName,parent:ae,elementExamplesCallback({defineExample:e}){[{title:"halfway",percent:50},{title:"nothing",percent:0},{title:"complete",percent:100},{title:"custom height",styles:p`
                ${jn} {
                    height: 32px;
                }
                :`,percent:75},{title:"custom width",styles:p`
                ${jn} {
                    width: 200%;
                }
                :`,percent:75}].forEach(n=>{e({title:n.title,styles:n.styles,renderCallback(){return c`
                        <${jn.assign({percent:n.percent})}></${jn}>
                    `}})})}}),Un=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],De={basic:Un,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Un.slice(1)],disabled:[{...Un[0],disabled:!0},...Un.slice(1)],noLabels:Mh(Un,e=>({...e,label:void 0}))},av=U({title:J.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:De.basic[0].value},renderCallback({state:t,updateState:n}){return c`
                    <${J.assign({entries:De.basic,value:t.selectedValue})}
                        ${y(J.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${J}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:De.basic[0].value},styles:p`
                ${J} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${J.assign({entries:De.basic,value:t.selectedValue})}
                        ${y(J.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${J}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:De.longText[0].value},styles:p`
                ${J} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${J.assign({entries:De.longText,value:t.selectedValue})}
                        ${y(J.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${J}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:De.noLabels[0].value},renderCallback({state:t,updateState:n}){return c`
                    <${J.assign({entries:De.noLabels,value:t.selectedValue})}
                        ${y(J.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${J}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:De.disabled[1].value},renderCallback({state:t,updateState:n}){return c`
                    <${J.assign({entries:De.disabled,value:t.selectedValue})}
                        ${y(J.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${J}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:De.basic[0].value},styles:p`
                ${J} {
                    ${J.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${J.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${J.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${J.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${J.assign({entries:De.basic,value:t.selectedValue})}
                        ${y(J.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${J}>
                `}})}}),rt=p`
    ${R} {
        width: 300px;
    }
`,Ji={min:10,max:50},sv=U({title:R.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,...Ji})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,...Ji,suffix:"ICP"})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,min:-100,max:100})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${rt}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,...Ji})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${rt}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${R}>
                `}}),e({title:"Color Temperature",stateInitStatic:{value:9},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${R.assign({value:t.value,colorTemperature:!0,min:0,max:100})}
                        ${y(R.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${R}>
                `}})}}),lv=[{title:"default",inputs:{}},{title:"right icon",inputs:{iconPlacement:uh.Right}},{title:"text only",inputs:{variant:ch.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Uc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],cv=U({title:Yi.tagName,parent:ae,controls:{Text:{controlType:j.Text,initValue:"Toggle Button"},Icon:ks(Nd.name)},elementExamplesCallback({defineExample:e}){lv.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Uc.map(n=>!!n.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return Uc.map((i,a)=>c`
                            <${Yi.assign({...t.inputs,toggled:n.buttonStates[a],icon:ti[o.Icon],text:o.Text,...sr(i.inputs,["toggled"])})}
                                ${y("click",()=>{const s=[...n.buttonStates];s[a]=!s[a],r({buttonStates:s})})}
                            ></${Yi}>
                        `)}})})}}),uv=U({parent:ae,title:uo.tagName,elementExamplesCallback({defineExample:e}){function t({title:n,tooltipContent:r,forceShow:o}){e({title:n,styles:p`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${b.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,renderCallback(){return c`
                        <${uo.assign({tooltipContent:r,forceShow:o})}>
                            <div>Hover me!</div>
                        </${uo}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:c`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),dv=U({parent:ae,title:ir.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${uo.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return c`
                    <${ir}>This is a tooltip.</${ir}>
                `}})}}),hv=[uv,dv],fv=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:p`
            :host {
                width: 500px;
            }

            ${Kn} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:p``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:p``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:ba},{label:"label here",value:2,icon:ba},{label:"",value:3,icon:Et,disabled:!0},{label:"16px icon",value:4,icon:Et},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],pv=U({title:Kn.tagName,parent:ae,elementExamplesCallback({defineExample:e}){fv.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:p`
                    ${t.extraStyles??p``}
                `,renderCallback({state:n,updateState:r}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return c`
                        <${Kn.assign({tabs:o,value:n.selectedTab})}
                            ${y(Kn.events.valueChange,i=>{r({selectedTab:i.detail})})}
                        ></${Kn}>
                    `}})})}}),mh=U({title:"Icons",parent:void 0,controls:hh}),mv=Object.entries(At).map(([e,t])=>U({title:e,parent:mh,elementExamplesCallback({defineExample:n}){t.map(r=>n({title:r.name,renderCallback({controls:o}){return c`
                                <${Oo.assign({icon:r})}
                                    style=${ho(o)}
                                ></${Oo}>
                            `}}))}}));function gh(e){const t=gv(e),n=ke(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return le(n).reduce((o,i)=>{const a=n[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function gv(e){typeof e!="string"&&(e=String(e));const r=`{"${Zc(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(r);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${r}`),o}}const ri=U({title:"Styles",parent:void 0}),wv=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${D.labelFont};
        ${D.monospaceFont};
        color: ${b.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${b.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${D.h3Font};
    }
`;function vv(e,t,n){const r=gh(F(n));return e({title:t,styles:wv,renderCallback(){return c`
                <div class="color-example" style=${F(n)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(r).map(o=>c`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const bv=U({title:"Colors",parent:ri,elementExamplesCallback({defineExample:e}){le(b).map(t=>vv(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),yv=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${D.labelFont};
        ${D.monospaceFont};
        color: ${b.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${b.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${b.divider.foregroundColor};
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
`;function kv(e,t,n){const r=gh(n);return e({title:t,styles:yv,renderCallback(){return c`
                <div class="font-example" style=${n}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${le(r).map(o=>{const i=r[o];return c`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const xv=U({title:"Fonts",parent:ri,elementExamplesCallback({defineExample:e}){le(D).map(t=>{const n=D[t];return kv(e,t,n)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),Av=U({title:"Shadows",parent:ri,elementExamplesCallback({defineExample:e}){Ch(vr).forEach(([t,n])=>{e({title:t,styles:p`
                        div {
                            width: 50px;
                            height: 50px;
                            border-radius: 8px;
                            background-color: white;
                            margin: 16px;
                            ${n};
                        }
                    `,renderCallback(){return c`
                            <div></div>
                        `}})})}}),$v=[ae,mh,ri,dh],Cv=[...mv,...hv,S5,M5,E5,I5,P5,O5,bv,D5,R5,j5,H5,U5,xv,V5,W5,z5,Z5,rv,ov,iv,av,Av,sv,cv,pv,nv].sort((e,t)=>e.title.localeCompare(t.title)),Sv=[...$v,...Cv];Vo({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${$i} {
            height: 100%;
            width: 100%;
            ${D.paragraphFont};
        }

        .nav-header {
            padding-left: 16px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 16px;
        }

        img {
            width: 180px;
        }

        h1,
        p {
            margin: 0;
        }
    `,renderCallback(){return c`
            <${$i.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:Sv,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${at.NavHeader}>
                    <img src=${fh("/logo.png")} />
                    <p>Design System</p>
                </div>
            </${$i}>
        `}});
