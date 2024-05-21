var Ih=Object.defineProperty;var Bh=(e,t,n)=>t in e?Ih(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Rr=(e,t,n)=>(Bh(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const qh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Me(e,t){return e?qh.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Xc(e,t){return e&&t.every(n=>Me(e,n))}function le(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Lh(e){return le(e).map(t=>e[t])}function Ph(e){return le(e).map(t=>[t,e[t]])}function Oh(e){return Object.fromEntries(e)}function Dh(e,t){return e.includes(t)}function Nh(e,t){return e.map(t)}function ve(e){return!!e}function _c(e,t){return e.match(t)??[]}function Rh(e){return e.replace(/,/g,"")}function eu(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Fh={capitalizeFirstLetter:!1};function jh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Hh(e,t){return t.capitalizeFirstLetter?jh(e):e}function Uh(e,t=Fh){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Hh(r,t)}var Cn;(function(e){e.Upper="upper",e.Lower="lower"})(Cn||(Cn={}));function Wh(e){return e.toLowerCase()!==e.toUpperCase()}function Ds(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const o=e[r]||"";if(!Wh(o)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===Cn.Upper&&o!==o.toUpperCase())return!1;if(t===Cn.Lower&&o!==o.toLowerCase())return!1}return!0}function vo(e){return e.split("").reduce((n,r,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ds(a,Cn.Lower,{blockNoCaseCharacters:!0})||Ds(s,Cn.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Sn(e,t){return e.split(t)}const Vh=String(NaN);function tu(e){if(typeof e=="string"&&isNaN(Number(e)))return Vh;const t=Number(e),n=t<0,r=String(Math.abs(t)),[o,i]=r.split("."),a=i?`.${i}`:"",l=_c(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(p=>p.split("").reverse().join("")).join(",");return[n?"-":"",l,a].join("")}function zh(e){return typeof e=="number"?e:Number(typeof e=="string"?Rh(e):e)}function Zh(e){return String(e).includes("e")}function Yh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function sa(e){const t=Math.pow(10,e.digits),n=e.number*t;return Number((Math.round(n)/t).toFixed(e.digits))}function yn({value:e,min:t,max:n}){return Math.min(Math.max(e,t),n)}var dr;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(dr||(dr={}));function Gh(e,t){let n=0,r;return o=>{r=o;const i=Date.now();n>i||(e===dr.FirstThenWait?r():e===dr.AfterWait&&setTimeout(()=>{r==null||r()},t.milliseconds),n=i+t.milliseconds)}}function nu(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(n=>Dt(n).trim()).join(`
`))}function Qh(e){return e?e.map(Dt).filter(ve).join(`
`):""}function Dt(e){return e?e instanceof Error?e.message:Me(e,"message")?String(e.message):String(e):""}function ru(e){return e instanceof Error?e:new Error(Dt(e))}function Kh(e,t){const n=ru(e);return n.message=`${t}: ${n.message}`,n}class Jh extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function bo(e){return Array.isArray(e)?"array":typeof e}function ee(e,t){return bo(e)===t}function Xh(e,t){if(!(ee(e,"string")||ee(e,"number")||ee(e,"symbol")))throw new Jh(t||`value is of type '${bo(e)}' but expected a PropertyKey.`)}function hi(e){try{return Xh(e),!0}catch{return!1}}function Ze(e){return!!e&&typeof e=="object"}function ou(e,t,n=!1,r={}){const o=le(e),i=new Set(le(t));if(!n){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Me(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(p){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${p}`)}const l=e[a],u=t[a];r[a]||iu(l,u,s,n,r[a]??{})})}function iu(e,t,n,r,o){var s;const i=typeof e,a=typeof t;i!==a&&n(`type "${i}" did not match expected type "${a}"`);try{Me(t,"constructor")&&(!Me(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((l,u)=>{if(t.map(h=>{try{iu(l,h,n,r,o);return}catch(m){return new Error(`entry at index "${u}" did not match expected shape: ${Dt(m)}`)}}).filter(ve).length===t.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${t.join(", ")}"`)})):Ze(t)&&ou(e,t,r,o)}function Ns({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const Rs="Failed to compare objects using JSON.stringify";function Fs(e,t,n){return Ns({source:e,errorHandler(r){if(n)return"";throw r}})===Ns({source:t,errorHandler(r){if(n)return"";throw r}})}function at(e,t,n={}){try{return e===t?!0:Ze(e)&&Ze(t)?Fs(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(o=>at(e[o],t[o])):!1:Fs(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const o=ru(r);throw o.message.startsWith(Rs)||(o.message=`${Rs}: ${o.message}`),o}}function au(e){return le(e).filter(t=>isNaN(Number(t)))}function su(e){return au(e).map(n=>e[n])}function _h(e,t){return su(t).includes(e)}function lu(e,t){return le(e).filter(r=>{const o=e[r];return t(r,o,e)}).reduce((r,o)=>(r[o]=e[o],r),{})}function hr(e,t){return lu(e,n=>!t.includes(n))}function ef(e,t){return lu(e,n=>t.includes(n))}function tf(e,t,n){const r=t;if(e.has(r))return e.get(r);{const o=n();return e.set(r,o),o}}function xe(e,t){let n=!1;const r=le(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(le(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function la(e,t){try{return cu(e,t),!0}catch{return!1}}function cu(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ua(){let e,t,n=!1;const r=new Promise((o,i)=>{e=a=>(n=!0,o(a)),t=a=>{n=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ua.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function ca(e){const t=Ua();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function nf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const uu=nf();function rf({min:e,max:t}){const{min:n,max:r}=Yh({min:Math.floor(e),max:Math.floor(t)}),o=r-n+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do uu.getRandomValues(s),l=s.reduce((u,p,h)=>u+p*256**h,0);while(l>=a);return n+l%o}function du(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return uu.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}function of({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function af(e){const t=Object.entries(e).map(([n,r])=>{if(r!=null)return`${n}=${String(r)}`}).filter(ve);return t.length?`?${t.join("&")}`:""}function sf(e){return of({value:e,prefix:"?"}).split("&").map(r=>{const[o,...i]=Sn(r,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(ve)}function lf(e,t){const n=ee(e,"string")?new URL(e):e,r=sf(n.search),o=Object.fromEntries(r);return t&&ou(o,t),o}const cf="%",uf="px";function Wt(e){return Wa({value:e,suffix:uf})}function fi(e){return Wa({value:e,suffix:cf})}function Wa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const pi="://";function fr(...e){const t=e.join("/"),[n,r=""]=t.includes(pi)?t.split(pi):["",t];let o=!1,i=!1;const a=r.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,u,p)=>{if(i)return s;const h=p[u+1];let m=l;const g=!l.includes("?")&&(h==null?void 0:h.startsWith("?"));if(h!=null&&h.startsWith("?")||g){i=!0;let v=!1;const $=p.slice(g?u+2:u+1).reduce((x,C)=>(C.includes("#")&&(v=!0),v?x.concat(C):[x,C].join("&")),"");m=[l,h,$].join("")}return s.concat(m)},[]);return[n,n?pi:"",a.join("/")].join("")}const df=["k","M","B","T","P","E","Z","Y"];function Va({beforeDot:e,afterDot:t="",maxLength:n}){if(t.length){const r=n-e.length-1;if(r>0){const o=t.slice(0,r);return Number(o)?[e,o].join("."):e}}return e}function hf(e,t,n){const[r,o]=Sn(e,"."),i=tu(r),a=_c(i,/,/g).length,s=t[a-1],[l,u]=Sn(i,","),p=[u,o].join("");return l.length+1>n?["0.",l[0],t[a]].join(""):[Va({beforeDot:l,afterDot:p,maxLength:n-1}),s].join("")}const js=3;function ff({input:e,maxLength:t}){const n=String(e),[r,o]=Sn(n,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,u]=Sn(r,"."),p=i.length+js;return p===t?[l,s].join(""):p>t?a==="-"?"0":String(1/0):[Va({afterDot:u,beforeDot:l,maxLength:t-i.length+js}),s].join("")}function pf(e,t){const[n,r]=Sn(tu(e),".");if(n.length<=t)return Va({beforeDot:n,afterDot:r,maxLength:t})}function mf(e,{customSuffixes:t=df,maxLength:n=6}={}){const r=zh(e);if(isNaN(r)||r===1/0)return String(r);if(Zh(r))return ff({input:r,maxLength:n});const o=String(r),i=pf(o,n);return i??hf(o,t,n)}function gf(e,t){return Me(e,"entryType")&&e.entryType===t}var ke;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ke||(ke={}));function nn(e,t){return e.controlType===t}var H;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(H||(H={}));const hu=Symbol("any-type"),wf={[H.Checkbox]:!1,[H.Color]:"",[H.Dropdown]:"",[H.Hidden]:hu,[H.Number]:0,[H.Text]:""};function vf(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,o])=>{const i=wf[o.controlType];i!==hu&&(typeof i!=typeof o.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function za(e,t){const n=yo(e.title);return e.parent?[...za(e.parent,!1),yo(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function yo(e){return eu(e).toLowerCase().replaceAll(/\s/g,"-")}function bf({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}function U(e){const t={...e,entryType:ke.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(r){const o={...r,entryType:ke.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(ve)};n.add(r.title),t.elementExamples[yo(o.title)]=o}}),t}var st;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(st||(st={}));async function ua(e=1){const t=Ua();function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}async function yf(e){return kf(e,1)}async function kf(e,t){return new Promise(n=>{new IntersectionObserver((o,i)=>{cu(o,1),i.disconnect(),n(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=globalThis,Za=oo.ShadowRoot&&(oo.ShadyCSS===void 0||oo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ya=Symbol(),Hs=new WeakMap;let fu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Ya)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Za&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Hs.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Hs.set(n,t))}return t}toString(){return this.cssText}};const T=e=>new fu(typeof e=="string"?e:e+"",void 0,Ya),io=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new fu(n,e,Ya)},xf=(e,t)=>{if(Za)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=oo.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Us=Za?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return T(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$f,defineProperty:Af,getOwnPropertyDescriptor:Cf,getOwnPropertyNames:Sf,getOwnPropertySymbols:Tf,getPrototypeOf:Mf}=Object,Tt=globalThis,Ws=Tt.trustedTypes,Ef=Ws?Ws.emptyScript:"",mi=Tt.reactiveElementPolyfillSupport,_n=(e,t)=>e,ko={toAttribute(e,t){switch(t){case Boolean:e=e?Ef:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ga=(e,t)=>!$f(e,t),Vs={attribute:!0,type:String,converter:ko,reflect:!1,hasChanged:Ga};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tt.litPropertyMetadata??(Tt.litPropertyMetadata=new WeakMap);let hn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Vs){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Af(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Cf(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vs}static _$Ei(){if(this.hasOwnProperty(_n("elementProperties")))return;const t=Mf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_n("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_n("properties"))){const n=this.properties,r=[...Sf(n),...Tf(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Us(o))}else t!==void 0&&n.push(Us(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:ko).toAttribute(n,r.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:ko;this._$Em=o,this[o]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Ga)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};hn.elementStyles=[],hn.shadowRootOptions={mode:"open"},hn[_n("elementProperties")]=new Map,hn[_n("finalized")]=new Map,mi==null||mi({ReactiveElement:hn}),(Tt.reactiveElementVersions??(Tt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=globalThis,xo=er.trustedTypes,zs=xo?xo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Qa="$lit$",mt=`lit$${(Math.random()+"").slice(9)}$`,Ka="?"+mt,If=`<${Ka}>`,Kt=document,pr=()=>Kt.createComment(""),mr=e=>e===null||typeof e!="object"&&typeof e!="function",pu=Array.isArray,mu=e=>pu(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",gi=`[ 	
\f\r]`,Fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zs=/-->/g,Ys=/>/g,Rt=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,Qs=/"/g,gu=/^(?:script|style|textarea|title)$/i,wu=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Bf=wu(1),qf=wu(2),Pe=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Ks=new WeakMap,Vt=Kt.createTreeWalker(Kt,129);function vu(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs!==void 0?zs.createHTML(t):t}const bu=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",a=Fn;for(let s=0;s<n;s++){const l=e[s];let u,p,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,p=a.exec(l),p!==null);)m=a.lastIndex,a===Fn?p[1]==="!--"?a=Zs:p[1]!==void 0?a=Ys:p[2]!==void 0?(gu.test(p[2])&&(o=RegExp("</"+p[2],"g")),a=Rt):p[3]!==void 0&&(a=Rt):a===Rt?p[0]===">"?(a=o??Fn,h=-1):p[1]===void 0?h=-2:(h=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?Rt:p[3]==='"'?Qs:Gs):a===Qs||a===Gs?a=Rt:a===Zs||a===Ys?a=Fn:(a=Rt,o=void 0);const g=a===Rt&&e[s+1].startsWith("/>")?" ":"";i+=a===Fn?l+If:h>=0?(r.push(u),l.slice(0,h)+Qa+l.slice(h)+mt+g):l+mt+(h===-2?s:g)}return[vu(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class gr{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[u,p]=bu(t,n);if(this.el=gr.createElement(u,r),Vt.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Vt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Qa)){const m=p[a++],g=o.getAttribute(h).split(mt),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:v[2],strings:g,ctor:v[1]==="."?ku:v[1]==="?"?xu:v[1]==="@"?$u:Sr}),o.removeAttribute(h)}else h.startsWith(mt)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(gu.test(o.tagName)){const h=o.textContent.split(mt),m=h.length-1;if(m>0){o.textContent=xo?xo.emptyScript:"";for(let g=0;g<m;g++)o.append(h[g],pr()),Vt.nextNode(),l.push({type:2,index:++i});o.append(h[m],pr())}}}else if(o.nodeType===8)if(o.data===Ka)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(mt,h+1))!==-1;)l.push({type:7,index:i}),h+=mt.length-1}i++}}static createElement(t,n){const r=Kt.createElement("template");return r.innerHTML=t,r}}function Jt(e,t,n=e,r){var a,s;if(t===Pe)return t;let o=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const i=mr(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=Jt(e,o._$AS(e,t.values),o,r)),t}class yu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Kt).importNode(n,!0);Vt.currentNode=o;let i=Vt.nextNode(),a=0,s=0,l=r[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Bn(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new Au(i,this,t)),this._$AV.push(u),l=r[++s]}a!==(l==null?void 0:l.index)&&(i=Vt.nextNode(),a++)}return Vt.currentNode=Kt,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Bn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Jt(this,t,n),mr(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==Pe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mu(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==K&&mr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Kt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=gr.createElement(vu(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const a=new yu(o,this),s=a.u(this.options);a.p(n),this.T(s),this._$AH=a}}_$AC(t){let n=Ks.get(t.strings);return n===void 0&&Ks.set(t.strings,n=new gr(t)),n}k(t){pu(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Bn(this.S(pr()),this.S(pr()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Sr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=K}_$AI(t,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)t=Jt(this,t,n,0),a=!mr(t)||t!==this._$AH&&t!==Pe,a&&(this._$AH=t);else{const s=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=Jt(this,s[r+l],n,l),u===Pe&&(u=this._$AH[l]),a||(a=!mr(u)||u!==this._$AH[l]),u===K?t=K:t!==K&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!o&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ku extends Sr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class xu extends Sr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class $u extends Sr{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Jt(this,t,n,0)??K)===Pe)return;const r=this._$AH,o=t===K&&r!==K||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==K&&(r===K||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Au{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Jt(this,t)}}const Lf={P:Qa,A:mt,C:Ka,M:1,L:bu,R:yu,D:mu,V:Jt,I:Bn,H:Sr,N:xu,U:$u,B:ku,F:Au},wi=er.litHtmlPolyfillSupport;wi==null||wi(gr,Bn),(er.litHtmlVersions??(er.litHtmlVersions=[])).push("3.1.2");const Pf=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Bn(t.insertBefore(pr(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tr=class extends hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pf(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Pe}};var Jc;tr._$litElement$=!0,tr.finalized=!0,(Jc=globalThis.litElementHydrateSupport)==null||Jc.call(globalThis,{LitElement:tr});const vi=globalThis.litElementPolyfillSupport;vi==null||vi({LitElement:tr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Of}=Lf,Df=e=>e.strings===void 0,Js=()=>document.createComment(""),jn=(e,t,n)=>{var i;const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=r.insertBefore(Js(),o),s=r.insertBefore(Js(),o);n=new Of(a,s,e,e.options)}else{const a=n._$AB.nextSibling,s=n._$AM,l=s!==e;if(l){let u;(i=n._$AQ)==null||i.call(n,e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==s._$AU&&n._$AP(u)}if(a!==o||l){let u=n._$AA;for(;u!==a;){const p=u.nextSibling;r.insertBefore(u,o),u=p}}}return n},Ft=(e,t,n=e)=>(e._$AI(t,n),e),Nf={},Rf=(e,t=Nf)=>e._$AH=t,Ff=e=>e._$AH,bi=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vt=e=>(...t)=>({_$litDirective$:e,values:t});class ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,t,!1),nr(o,t);return!0},$o=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Cu=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Uf(t)}};function jf(e){this._$AN!==void 0?($o(this),this._$AM=e,Cu(this)):this._$AM=e}function Hf(e,t=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let i=n;i<r.length;i++)nr(r[i],!1),$o(r[i]);else r!=null&&(nr(r,!1),$o(r));else nr(this,e)}const Uf=e=>{e.type==qn.CHILD&&(e._$AP??(e._$AP=Hf),e._$AQ??(e._$AQ=jf))};class Wf extends ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),Cu(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(nr(this,t),$o(this))}setValue(t){if(Df(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vf={attribute:!0,type:String,converter:ko,reflect:!1,hasChanged:Ga},zf=(e=Vf,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(r==="setter"){const{name:a}=n;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function Zf(e){return(t,n)=>typeof n=="object"?zf(e,t,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=vt(class extends ct{constructor(e){var t;if(super(e),e.type!==qn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const da=e=>e??K;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yf=()=>new Gf;class Gf{}const yi=new WeakMap,Qf=vt(class extends Wf{render(e){return K}update(e,[t]){var r;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),K}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let n=yi.get(t);n===void 0&&(n=new WeakMap,yi.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=yi.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ha extends ct{constructor(t){if(super(t),this.it=K,t.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===K||t==null)return this._t=void 0,this.it=t;if(t===Pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}ha.directiveName="unsafeHTML",ha.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xs extends ha{}Xs.directiveName="unsafeSVG",Xs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kf(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},Jf=vt(class extends ct{constructor(e){if(super(e),e.type!==qn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const o=[],i=[];let a=0;for(const s of e)o[a]=r?r(s,a):a,i[a]=n(s,a),a++;return{values:i,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const o=Ff(e),{values:i,keys:a}=this.dt(t,n,r);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let u,p,h=0,m=o.length-1,g=0,v=i.length-1;for(;h<=m&&g<=v;)if(o[h]===null)h++;else if(o[m]===null)m--;else if(s[h]===a[g])l[g]=Ft(o[h],i[g]),h++,g++;else if(s[m]===a[v])l[v]=Ft(o[m],i[v]),m--,v--;else if(s[h]===a[v])l[v]=Ft(o[h],i[v]),jn(e,l[v+1],o[h]),h++,v--;else if(s[m]===a[g])l[g]=Ft(o[m],i[g]),jn(e,o[h],o[m]),m--,g++;else if(u===void 0&&(u=_s(a,g,v),p=_s(s,h,m)),u.has(s[h]))if(u.has(s[m])){const $=p.get(a[g]),x=$!==void 0?o[$]:null;if(x===null){const C=jn(e,o[h]);Ft(C,i[g]),l[g]=C}else l[g]=Ft(x,i[g]),jn(e,o[h],x),o[$]=null;g++}else bi(o[m]),m--;else bi(o[h]),h++;for(;g<=v;){const $=jn(e,l[v+1]);Ft($,i[g]),l[g++]=$}for(;h<=m;){const $=o[h++];$!==null&&bi($)}return this.ut=a,Rf(e,l),Pe}}),Xf=Jf;class Su extends tr{}function bt(e){if(Ze(e))return xe(e,(n,r)=>{if(!ee(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(vo(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const i=r,a=n.startsWith("--")?T(n):n.startsWith("-")?io`-${T(n)}`:io`--${T(n)}`;return{name:a,value:io`var(${a}, ${T(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${bt.name}' function.`)}function Ao({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function _f(e,t,n){const r=!t.length&&!n.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(r||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),n.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function ao(e){return Me(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ja(e){return Me(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Tu(e){return e.map(t=>ao(t)?t.definition:t).filter(t=>Ja(t))}const Mu=new WeakMap;function e1(e,t){var o;const n=Tu(t);return(o=Eu(Mu,[e,...n]).value)==null?void 0:o.template}function t1(e,t,n){const r=Tu(t);return Bu(Mu,[e,...r],n)}function Eu(e,t,n=0){const{currentTemplateAndNested:r,reason:o}=Iu(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Eu(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:o}}function Iu(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const o=e.get(r);return o==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:o,reason:"key and value exists"}}function Bu(e,t,n,r=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Iu(e,t,r);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),r===t.length-1)return s.template=n,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Bu(l,t,n,r+1)}const n1=new WeakMap;function qu(e,t,n){const r=e1(e,t),o=r??n();if(!r){const s=t1(e,t,o);if(s.result)n1.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=_f(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Lu(e,t,n,r){const o=[],i=[],a=[],s=[];return e.forEach((u,p)=>{const h=o.length-1,m=o[h],g=p-1,v=t[g];r&&r(u);let $,x=[];if(typeof m=="string"&&($=n(m,u,v),$)){o[h]=m+$.replacement,a.push(g);const S=$.getExtraValues;x=S?S(v):[],x.length&&S?(o[h]+=" ",x.forEach((N,F)=>{F&&o.push(" ")}),s.push(N=>{const F=N[g],J=S(F);return{index:g,values:J}}),o.push(u)):o[h]+=u}$||o.push(u);const C=e.raw[p];$?(i[h]=i[h]+$.replacement+C,x.length&&x.forEach(()=>{i.push("")})):i.push(C)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(u){const p=s.map(h=>h(u)).flat();return{valueIndexDeletions:a,valueInsertions:p}}}}function r1(...[e,t,n]){if(Ja(n))return{replacement:n.tagName,getExtraValues:void 0}}function o1(e,t){return Lu(e,t,r1)}function f(e,...t){const n=qu(e,t,()=>o1(e,t));return io(n.strings,...n.values)}const i1={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Pu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof Su?!0:Pu(n)}function Ou(e,t){const n=e.instanceState;le(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&le(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),a1(e)}function a1(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function el(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class s1 extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Xa(){return e=>{var t;return t=class extends s1{constructor(n){super(e,n),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function ie(){return Xa()}function l1(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const o=Xa()([e,r].join("-"));return n[r]=o,n},{}):{}}const c1="_elementVirStateSetup";function u1(e){return Ze(e)?c1 in e:!1}function d1(e,t){const n=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return bo(e)===bo(t)&&n}const Du="__vir__shape__definition__key__do__not__use__in__actual__objects";function Nu(e){return Me(e,Du)}const _a=Symbol("and"),Ru=Symbol("instance"),Fu=Symbol("enum"),ju=Symbol("exact"),es=Symbol("indexed-keys"),ts=Symbol("or"),ns=Symbol("unknown"),h1=[_a,Fu,ju,es,Ru,ts,ns],Hu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function f1(...e){return Qo(e,_a)}function p1(...e){return Qo(e,es)}function nt(...e){return Qo(e,ts)}function m1(e){return Qo([e],ns)}function Wo(e){return en(e,_a)}function Vo(e){return en(e,Ru)}function zo(e){return en(e,Fu)}function Zo(e){return en(e,ju)}function Yo(e){return en(e,es)}function Tr(e){return en(e,ts)}function Go(e){return en(e,ns)}function en(e,t){const n=Mr(e);return!!n&&n.specifierType===t}function Qo(e,t){return{[Hu]:!0,specifierType:t,parts:e}}function zt(e,t,n,r){const o=Mr(t);if(o){if(Vo(o))return e instanceof o.parts[0];if(Wo(o))return o.parts.every(i=>zt(e,i));if(Tr(o))return o.parts.some(i=>zt(e,i));if(Zo(o))return Ze(e)?zt(e,o.parts[0]):e===o.parts[0];if(zo(o))return Object.values(o.parts[0]).some(i=>i===e);if(Yo(o))return Ze(e)?g1(e,o,!!n)&&Lh(e).every(i=>zt(i,o.parts[0].values)):!1;if(Go(o))return!0}return r?t===e:d1(e,t)}function g1(e,t,n){const r=t.parts[0].required,o=t.parts[0].keys;if(n)if(r){const i=rs(t);return ee(i,"boolean")?i:i.every(a=>le(e).some(s=>zt(s,a,!1,!0)))}else return!0;else return le(e).every(i=>zt(i,o))}function rs(e){const t=e.parts[0].keys,n=Mr(t);if(hi(t))return[t];if(n){if(Vo(n))return!1;if(Wo(n))return!1;if(Tr(n)){const r=n.parts.map(i=>rs(p1({...e.parts[0],keys:i})));let o;return r.forEach(i=>{ee(i,"boolean")&&(i&&o==null?o=!0:o=!1)}),ee(o,"boolean")?o:r.flat().filter(hi)}else if(Zo(n)){const r=n.parts.filter(hi);return r.length!==n.parts.length?!1:r}else{if(zo(n))return Object.values(n.parts[0]);if(Yo(n))return!1;if(Go(n))return!0}}return!1}function Mr(e){if(Ze(e)&&Me(e,Hu)){if(!Me(e,"parts")||!ee(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Me(e,"specifierType")||!Dh(h1,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class tl extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function fa(e,t=!1){return Zn(e)}function Zn(e){const t=Mr(e);if(t)if(Vo(t)){const n=t.parts[0];try{return new n}catch(r){throw new tl(`Failed to create default value for classShape for class '${n.name}': ${Dt(r)}`)}}else{if(Tr(t)||Zo(t))return Zn(t.parts[0]);if(Wo(t))return t.parts.reduce((n,r)=>Object.assign(n,Zn(r)),{});if(zo(t))return Object.values(t.parts[0])[0];if(Yo(t)){const n=rs(t);return!t.parts[0].required||ee(n,"boolean")?{}:Object.fromEntries(n.map(r=>[r,Zn(t.parts[0].values)]))}else{if(Go(t))return t.parts[0]??{};throw new tl(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Nu(e)?fa(e.shape):e instanceof RegExp?e:ee(e,"array")?e.map(Zn):Ze(e)?xe(e,(n,r)=>fa(r)):e}function Er(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return fa(e)},[Du]:!0}}class Fe extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function w1(e,t,n={}){try{return Uu(e,t,n),!0}catch{return!1}}function Uu(e,t,n={}){ft({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}function pa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ft({subject:e,shape:t,keys:n,options:r}){if(Go(t))return!0;if(Nu(t))return ft({subject:e,shape:t.shape,keys:n,options:r});const o=pa(n);if(Mr(e))throw new Fe(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!zt(e,t,!r.ignoreExtraKeys))throw new Fe(`Subject does not match shape definition at key ${o}`);if(ee(t,"function"))return ee(e,"function");if(Vo(t))return e instanceof t.parts[0];if(Ze(e)){const a=e,s=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(p=>[p,!1])),l=[];let u=!1;if(Tr(t)){const p=[];u=t.parts.some(h=>{try{const m=ft({subject:e,shape:h,keys:n,options:{...r}});return Object.assign(s,m),!0}catch(m){if(m instanceof Fe)return p.push(m),!1;throw m}}),!u&&la(p,1)&&l.push(p[0])}else if(Wo(t))u=t.parts.every(p=>{try{const h=ft({subject:e,shape:p,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(s,h),!0}catch(h){if(h instanceof Fe)return l.push(h),!1;throw h}});else if(Zo(t)){const p=ft({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(s,p),u=!0}else{if(zo(t))throw new Fe(`Cannot compare an enum specifier to an object at ${o}`);if(ee(t,"array")&&ee(a,"array"))u=a.every((p,h)=>{const m=t.some(g=>{try{return ft({subject:p,shape:g,keys:[...n,h],options:r}),!0}catch(v){if(v instanceof Fe)return l.push(v),!1;throw v}});return s[h]=m,m});else if(Yo(t)){const p=xe(e,(h,m)=>(r.ignoreExtraKeys||ft({shape:t.parts[0].keys,subject:h,keys:[...n,h],options:r}),ft({shape:t.parts[0].values,subject:m,keys:[...n,h],options:r}),!0));Object.assign(s,p),u=!0}else{const p=v1({keys:n,options:r,shape:t,subject:e});Object.assign(s,p),u=!0}}if(l.length)throw new Fe(Qh(l));if(!u){const h=`Failed on key(s): ${Object.keys(s).filter(m=>!s[m]).map(m=>pa([...n,m])).join(",")}`;throw new Fe(h)}return r.ignoreExtraKeys||Object.entries(s).forEach(([p,h])=>{if(!h)throw new Fe(`subject as extra key '${p}' in ${o}.`)}),s}else if(r.exactValues)return e===t;return!0}function v1({keys:e,options:t,shape:n,subject:r}){const o=pa(e),i={};if(Ze(n)){const a=new Set(le(r)),s=new Set(le(n));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Fe(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const u=n[l],p=Tr(u)?u.parts.includes(void 0):!1,h=((m=u==null?void 0:u.includes)==null?void 0:m.call(u,void 0))||u===void 0;if(!a.has(l)&&!p&&!h)throw new Fe(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const u=r[l];if(t.ignoreExtraKeys&&!s.has(l))return;const p=n[l];ft({subject:u,shape:p,keys:[...e,l],options:t}),i[l]=!0})}else throw new Fe(`shape definition at ${o} was not an object.`);return i}const b1=Er({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:m1()});function ki(e){return w1(e,b1,{allowExtraKeys:!0})}function Wu(e,t){t in e||Zf()(e,t)}function y1(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function nl(e,t){const n=e;function r(a){t?y1(a,e,e.tagName):Wu(e,a)}function o(a,s){return r(s),n[s]}return new Proxy({},{get:o,set(a,s,l){const u=u1(l)?l._elementVirStateSetup():l;r(s);const p=n[s];function h(v){a[s]=v,n[s]=v}const m=e.observablePropertyListenerMap[s];if(p!==u&&ki(p)&&(m!=null&&m.length)&&p.removeListener(m),ki(u))if(m)u.addListener(m);else{let v=function(){e.requestUpdate()};var g=v;e.observablePropertyListenerMap[s]=v,u.addListener(v)}else ki(p)&&(e.observablePropertyListenerMap[s]=void 0);return h(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function k1(e){return e?xe(e,t=>t):{}}function x1({hostClassNames:e,cssVars:t}){return{hostClasses:xe(e,(n,r)=>({name:T(r),selector:T(`:host(.${r})`)})),cssVars:t}}function $1({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:o}){t&&le(t).forEach(i=>{const a=t[i],s=n[i];typeof a=="function"&&(a({state:r,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function A1({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function o(a){le(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:n,slotNames:r,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function C1(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}var S1=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function Ko(e){var t;const n=e;if(!ee(n,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!ee(n.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!n.renderCallback||typeof n.renderCallback=="string")throw new Error(`Failed to define element '${n.tagName}': renderCallback is not a function`);const r={...i1,...n.options},o=l1(n.tagName,n.events),i=k1(n.hostClasses);n.hostClasses&&el(n.tagName,n.hostClasses),n.cssVars&&el(n.tagName,n.cssVars);const a=n.cssVars?bt(n.cssVars):{},s=C1(n.slotNames),l=typeof n.styles=="function"?n.styles(x1({hostClassNames:i,cssVars:a})):n.styles||f``,u=n.renderCallback;function p(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:h,inputs:m}}const h=(t=class extends Su{createRenderParams(){return A1({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${n.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${n.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${n.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Pu(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${n.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Ko.name}' to define ${n.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&n.initCallback&&(this._initCalled=!0,n.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=u(m);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return $1({host:m.host,hostClassesInit:n.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},g}catch(m){const g=Kh(m,`Failed to render ${n.tagName}`);return console.error(g),this._lastRenderError=g,Dt(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&n.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(n.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${n.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),n.cleanupCallback){const m=this.createRenderParams();if(n.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${n.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){Ou(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:nl(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:nl(this,!r.allowPolymorphicState)});const m=n.stateInitStatic||{};le(m).forEach(g=>{Wu(this,g),this.instanceState[g]=m[g]}),this.definition=h}},S1(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:n.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:p}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:n.stateInitStatic}),t);return Object.defineProperties(h,{name:{value:Uh(n.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof h,writable:!1}}),window.customElements.get(n.tagName)?console.warn(`Tried to define custom element '${n.tagName}' but it is already defined.`):window.customElements.define(n.tagName,h),h}function os(){return e=>{const t=e;if(!ee(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Ko({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function is(e,t){return wr(e,t),e.element}function T1(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function wr(e,t){const n=T1(e),r=n?`: in ${n}`:"";if(e.type!==qn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function M1(e){const t=vt(class extends ct{constructor(n){super(n),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=is(n,e)}render(n){return this.element.setAttribute(e,n),Pe}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function k(e,t){return E1(e,t)}const E1=vt(class extends ct{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=is(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),Pe}}),rl="onDomCreated",Co=vt(class extends ct{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),wr(e,rl)}update(e,[t]){wr(e,rl);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),xi="onResize",Xt=vt(class extends ct{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),wr(e,xi)}fireCallback(e){var n;const t=e[0];if(!t)throw console.error(e),new Error(`${xi} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){wr(e,xi),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function we(e,t,n){return Kf(e,()=>t,()=>n)}const{attributeDirective:I1,attributeSelector:nb,attributeName:rb}=M1("data-test-id");function B1(e){return{_elementVirStateSetup:e}}function as(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),os()(n(r))),defineElementNoInputs:r=>(t(r),Ko(n(r)))}}function q1(e,t){return t?ol(e,t):ol(void 0,e)}const ol=vt(class extends ct{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=is(e,"assign")}render(e,t){return Ou(this.element,t),Pe}});function L1(...[e,t,n]){const r=ao(n)?n.definition:n,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Ja(r);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!r.elementOptions.ignoreUnsetInputs&&!ao(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const p=ao(u)?u.inputs:void 0;return[o&&p?q1(p):void 0].filter(ve)}}}function P1(e){}function O1(e){return Lu(e.strings,e.values,L1,P1)}function c(e,...t){const n=Bf(e,...t),r=qu(e,t,()=>O1(n));return{...n,strings:r.strings,values:r.values}}const D1={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},N1=Object.keys(D1),R1=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...N1,...R1];function Yn(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}const F1={[ke.ElementExample]:()=>[],[ke.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...vf(e.controls,e.title)].filter(ve),[ke.Root]:()=>[]},So="_isBookTreeNode",Vu=new Map;function j1(e){return Vu.get(e)}function H1(e,t){tf(Vu,e,()=>t)}function kn(e,t){return!!(zu(e)&&e.entry.entryType===t)}function zu(e){return!!(Xc(e,[So,"entry"])&&e[So])}function U1(){return{[So]:!0,entry:{entryType:ke.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function W1({entries:e,debug:t}){const n=j1(e);if(n)return n;const r=U1();e.forEach(a=>ss({tree:r,newEntry:a,debug:t,manuallyAdded:!0}));const o=Zu(r),i={tree:r,flattenedNodes:o};return H1(e,i),t&&console.info("element-book tree:",r),i}function V1(e,t,n){if(!t.parent)return e;const r=ma(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ss({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const o=ma(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${za(t,!1)}`);return o}function ss({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const o=F1[t.entryType](t);t.errors.push(...o);const i=V1(e,t,n),a=yo(t.title),s=i.children[a];if(s){if(r){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[So]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:r};i.children[a]=l,gf(t,ke.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(u=>ss({tree:e,newEntry:u,debug:n,manuallyAdded:r}))}function ma(e,t){const n=zu(e)?e.fullUrlBreadcrumbs.slice(0,-1):za(e,!1);return n.length?n.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Zu(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Zu(o));return[e,...n].flat()}function ls(e,t){return cs(e,["",...t],void 0)}function cs(e,t,n){const r=t.slice(1),o=r[0];!o&&n&&(e.controls=n);const i=e.children[o||""],a=i&&cs(i,r,n);return{...e.controls,...a}}function z1(e,t,n){const r={...e};return cs(r,["",...t],n),r}function Yu(e,t){const n=(t==null?void 0:t.controls)||(kn(e,ke.Page)?xe(e.entry.controls,(o,i)=>i.initValue):{});return{children:xe(e.children,(o,i)=>{var a;return Yu(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:n}}function Z1({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<r;a++){const l=i.charCodeAt(a);for(;s<n;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Y1=du(32);function so(e){return e.join(Y1)}function Gu(e){if(!e.length)return[];const t=so(e),n=Gu(e.slice(0,-1));return[t,...n]}const G1=["error","errors"];function Q1(e){return G1.includes(e)}function K1({flattenedNodes:e,searchQuery:t}){const n={};function r(o){Object.values(o.children).map(a=>(r(a),so(a.fullUrlBreadcrumbs))).forEach(a=>n[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Q1(t),a=so(o.fullUrlBreadcrumbs);if(Z1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){const l=Gu(o.fullUrlBreadcrumbs);r(o),l.forEach(u=>n[u]=!0)}else n[a]=!1}),e.filter(o=>{const i=so(o.fullUrlBreadcrumbs),a=n[i];if(!ee(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var Te;(function(e){e.Search="search",e.Book="book"})(Te||(Te={}));function ga(e){return e[0]===Te.Book?"":e[1]?decodeURIComponent(e[1]):""}const Tn={hash:void 0,paths:[Te.Book],search:void 0},J1=0;function Jo(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==J1)}class Xo extends Error{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class il extends Xo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const vr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const X1=globalThis.history.pushState;function al(...e){const t=X1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(vr)),t}const _1=globalThis.history.replaceState;function sl(...e){const t=_1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(vr)),t}function ep(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===al)throw new il("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===sl)throw new il("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=al,globalThis.history.replaceState=sl,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(vr))})}}function tp(e){const t=`/${e}`,r=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?lf(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:r,search:o,hash:i}}function Qu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ku({routeBase:e,windowPath:t}){if(!e)return"";const n=Qu(e);if(Ju({routeBase:n,windowPath:t}))return n;const r=n.replace(/^[^\/]+\//,"");return r&&r!==n?Ku({routeBase:r,windowPath:t}):""}function Ju({routeBase:e,windowPath:t}){const n=Qu(e);return n?t.startsWith(`/${n}`):!1}class np extends Xo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function Xu(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const ll=6;function cl(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>ll)throw new np(`Route sanitization depth has exceed the max of ${ll} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(Xu(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(o=>{o(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class $i extends Xo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function rp(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new $i(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new $i(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new $i(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function op(e,t,n=!1){const r=_u(e,t);n?globalThis.history.replaceState(void 0,"",r):globalThis.history.pushState(void 0,"",r)}function _u(e,t){var s;const n=Ju({routeBase:t,windowPath:globalThis.location.pathname})?t:"",r=e.search?af(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[n,...e.paths].filter(ve).join("/")}${r}${i}`}function ip(e={}){rp(e),ep();const t=e.routeBase?Ku({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let n=!1;const r=()=>cl(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),u={...l,...i},p=o.sanitizeFullRoute(u);if(!(!s&&Xu(l,p)))return op(p,t,a)},createRoutesUrl(i){return _u(i,t)},getCurrentRawRoutes(){return tp(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Xo(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),n||(globalThis.addEventListener(vr,r),n=!0),i&&cl(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(vr,r),n=!1),a},sanitizationDepth:0};return o}function ap(e){return ip({routeBase:e,routeSanitizer(t){return{paths:sp(t.paths),hash:void 0,search:void 0}}})}function sp(e){const t=e[0];if(_h(t,Te)){if(t===Te.Book)return[Te.Book,...e.slice(1)];if(t===Te.Search)return e[1]?[t,e[1]]:[Te.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Tn.paths}const Z=bt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),lp={nav:{hover:{background:Z["element-book-nav-hover-background-color"],foreground:Z["element-book-nav-hover-foreground-color"]},active:{background:Z["element-book-nav-active-background-color"],foreground:Z["element-book-nav-active-foreground-color"]},selected:{background:Z["element-book-nav-selected-background-color"],foreground:Z["element-book-nav-selected-foreground-color"]}},accent:{icon:Z["element-book-accent-icon-color"]},page:{background:Z["element-book-page-background-color"],backgroundFaint1:Z["element-book-page-background-faint-level-1-color"],backgroundFaint2:Z["element-book-page-background-faint-level-2-color"],foreground:Z["element-book-page-foreground-color"],foregroundFaint1:Z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Z["element-book-page-foreground-faint-level-2-color"]}};function cp(e,t){ed(e,t,lp)}function wa(e){return Me(e,"_$cssResult$")}function ul(e){return Xc(e,["name","value","default"])&&ee(e.default,"string")&&wa(e.name)&&wa(e.value)}function ed(e,t,n){Object.entries(t).forEach(([r,o])=>{const i=n[r];if(!i)throw new Error(`no nestedCssVar at key '${r}'`);if(wa(o)){if(!ul(i))throw new Error(`got a CSS result at '${r}' but no CSS var`);Ao({forCssVar:i,onElement:e,toValue:String(o)})}else{if(ul(i))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);ed(e,o,i)}})}function me(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let r=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let u of s)l+=a*u;return l}for(let u=0;u<a.length;u++)l+=a[u]*(s[u]||0);return l}));return n===1&&(i=i[0]),r===1?i.map(a=>a[0]):i}function Ir(e){return Mt(e)==="string"}function Mt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function To(e,t){e=+e,t=+t;let n=(Math.floor(e)+"").length;if(t>n)return+e.toFixed(t-n);{let r=10**(n-t);return Math.round(e/r)*r}}function td(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/;let r=e.match(t);if(r){let o=[];return r[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):n.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:o}}}function nd(e){return e[e.length-1]}function Mo(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function rd(e,t,n){return(n-e)/(t-e)}function us(e,t,n){return Mo(t[0],t[1],rd(e[0],e[1],n))}function od(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let o=new String(r[1]);return o.range=[+r[2],+r[3]],o}return n}))}var up=Object.freeze({__proto__:null,interpolate:Mo,interpolateInv:rd,isString:Ir,last:nd,mapRange:us,multiplyMatrices:me,parseCoordGrammar:od,parseFunction:td,toPrecision:To,type:Mt});class dp{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],n&&this[o][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Bt=new dp;var lt={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const _e={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function va(e){return Array.isArray(e)?e:_e[e]}function Eo(e,t,n,r={}){if(e=va(e),t=va(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let o={W1:e,W2:t,XYZ:n,options:r};if(Bt.run("chromatic-adaptation-start",o),o.M||(o.W1===_e.D65&&o.W2===_e.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===_e.D50&&o.W2===_e.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Bt.run("chromatic-adaptation-end",o),o.M)return me(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const hp=75e-6,Be=class Be{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Be.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let s in n)"name"in n[s]||(n[s].name=s);this.coords=n;let r=t.white??this.base.white??"D65";this.white=va(r),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:fp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Bt.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=hp}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((o,i)=>{let a=r[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-n)&&(l===void 0||o<=l+n)}return!0})}get cssId(){var t,n;return((n=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:n.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=dl(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=dl(n,this),n):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,n){if(arguments.length===1&&([t,n]=[t.space,t.coords]),t=Be.get(t),this.equals(t))return n;n=n.map(s=>Number.isNaN(s)?0:s);let r=this.path,o=t.path,i,a;for(let s=0;s<r.length&&r[s].equals(o[s]);s++)i=r[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=r.length-1;s>a;s--)n=r[s].toBase(n);for(let s=a+1;s<o.length;s++)n=o[s].fromBase(n);return n}from(t,n){return arguments.length===1&&([t,n]=[t.space,t.coords]),t=Be.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],o=r.range||r.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Be.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof Be)return t;if(Mt(t)==="string"){let o=Be.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(n.length)return Be.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){var l;let r=Mt(t),o,i;if(r==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Be.get(o),o||(o=n),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Mt(i),r==="number"||r==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=Be.get(o);let a=i.toLowerCase(),s=0;for(let u in o.coords){let p=o.coords[u];if(u.toLowerCase()===a||((l=p.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:u,index:s,...p};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Rr(Be,"registry",{}),Rr(Be,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Be;function fp(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function dl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=od(e.coords);let n=Object.entries(t).map(([r,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,u="";return a=="<percentage>"?(l=[0,100],u="%"):a=="<angle>"&&(u="deg"),{fromRange:s,toRange:l,suffix:u}});e.serializeCoords=(r,o)=>r.map((i,a)=>{let{fromRange:s,toRange:l,suffix:u}=n[a];return s&&l&&(i=us(s,l,i)),i=To(i,o),u&&(i+=u),i})}return e}var Ve=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ee extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ve),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=n=>{let r=me(t.toXYZ_M,n);return this.white!==this.base.white&&(r=Eo(this.white,this.base.white,r)),r}),t.fromBase??(t.fromBase=n=>(n=Eo(this.base.white,this.white,n),me(t.fromXYZ_M,n)))),t.referred??(t.referred="display"),super(t)}}function id(e,{meta:t}={}){var r,o,i,a,s;let n={str:(r=String(e))==null?void 0:r.trim()};if(Bt.run("parse-start",n),n.color)return n.color;if(n.parsed=td(n.str),n.parsed){let l=n.parsed.name;if(l==="color"){let u=n.parsed.args.shift(),p=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let m of M.all){let g=m.getFormat("color");if(g&&(u===g.id||(o=g.ids)!=null&&o.includes(u))){const v=Object.keys(m.coords).map(($,x)=>n.parsed.args[x]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:v,alpha:p}}}let h="";if(u in M.registry){let m=(s=(a=(i=M.registry[u].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(h=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${u}). `+(h||"Missing a plugin?"))}else for(let u of M.all){let p=u.getFormat(l);if(p&&p.type==="function"){let h=1;(p.lastAlpha||nd(n.parsed.args).alpha)&&(h=n.parsed.args.pop());let m=n.parsed.args,g;return p.coordGrammar&&(g=Object.entries(u.coords).map(([v,$],x)=>{var ce;let C=p.coordGrammar[x],S=(ce=m[x])==null?void 0:ce.type,N=C.find(X=>X==S);if(!N){let X=$.name||v;throw new TypeError(`${S} not allowed for ${X} in ${l}()`)}let F=N.range;S==="<percentage>"&&(F||(F=[0,1]));let J=$.range||$.refRange;return F&&J&&(m[x]=us(F,J,m[x])),N})),t&&Object.assign(t,{formatId:p.name,types:g}),{spaceId:u.id,coords:m,alpha:h}}}}else for(let l of M.all)for(let u in l.formats){let p=l.formats[u];if(p.type!=="custom"||p.test&&!p.test(n.str))continue;let h=p.parse(n.str);if(h)return h.alpha??(h.alpha=1),t&&(t.formatId=u),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function G(e){if(!e)throw new TypeError("Empty color reference");Ir(e)&&(e=id(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Br(e,t){return t=M.get(t),t.from(e)}function ze(e,t){let{space:n,index:r}=M.resolveCoord(t,e.space);return Br(e,n)[r]}function ad(e,t,n){return t=M.get(t),e.coords=t.to(e.space,n),e}function qt(e,t,n){if(e=G(e),arguments.length===2&&Mt(arguments[1])==="object"){let r=arguments[1];for(let o in r)qt(e,o,r[o])}else{typeof n=="function"&&(n=n(ze(e,t)));let{space:r,index:o}=M.resolveCoord(t,e.space),i=Br(e,r);i[o]=n,ad(e,r,i)}return e}var ds=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ve,fromBase:e=>Eo(Ve.white,"D50",e),toBase:e=>Eo("D50",Ve.white,e),formats:{color:{}}});const pp=216/24389,hl=24/116,Fr=24389/27;let Ai=_e.D50;var qe=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ai,base:ds,fromBase(e){let n=e.map((r,o)=>r/Ai[o]).map(r=>r>pp?Math.cbrt(r):(Fr*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>hl?Math.pow(t[0],3):(116*t[0]-16)/Fr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Fr,t[2]>hl?Math.pow(t[2],3):(116*t[2]-16)/Fr].map((r,o)=>r*Ai[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function _o(e){return(e%360+360)%360}function mp(e,t){if(e==="raw")return t;let[n,r]=t.map(_o),o=r-n;return e==="increasing"?o<0&&(r+=360):e==="decreasing"?o>0&&(n+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var br=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:qe,fromBase(e){let[t,n,r]=e,o;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),_o(o)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const fl=25**7,Io=Math.PI,pl=180/Io,rn=Io/180;function ba(e,t,{kL:n=1,kC:r=1,kH:o=1}={}){let[i,a,s]=qe.from(e),l=br.from(qe,[i,a,s])[1],[u,p,h]=qe.from(t),m=br.from(qe,[u,p,h])[1];l<0&&(l=0),m<0&&(m=0);let v=((l+m)/2)**7,$=.5*(1-Math.sqrt(v/(v+fl))),x=(1+$)*a,C=(1+$)*p,S=Math.sqrt(x**2+s**2),N=Math.sqrt(C**2+h**2),F=x===0&&s===0?0:Math.atan2(s,x),J=C===0&&h===0?0:Math.atan2(h,C);F<0&&(F+=2*Io),J<0&&(J+=2*Io),F*=pl,J*=pl;let ce=u-i,X=N-S,V=J-F,ne=F+J,Ce=Math.abs(V),be;S*N===0?be=0:Ce<=180?be=V:V>180?be=V-360:V<-180?be=V+360:console.log("the unthinkable has happened");let ut=2*Math.sqrt(N*S)*Math.sin(be*rn/2),yt=(i+u)/2,di=(S+N)/2,qs=Math.pow(di,7),dt;S*N===0?dt=ne:Ce<=180?dt=ne/2:ne<360?dt=(ne+360)/2:dt=(ne-360)/2;let Ls=(yt-50)**2,Sh=1+.015*Ls/Math.sqrt(20+Ls),Ps=1+.045*di,Rn=1;Rn-=.17*Math.cos((dt-30)*rn),Rn+=.24*Math.cos(2*dt*rn),Rn+=.32*Math.cos((3*dt+6)*rn),Rn-=.2*Math.cos((4*dt-63)*rn);let Os=1+.015*di*Rn,Th=30*Math.exp(-1*((dt-275)/25)**2),Mh=2*Math.sqrt(qs/(qs+fl)),Eh=-1*Math.sin(2*Th*rn)*Mh,Nr=(ce/(n*Sh))**2;return Nr+=(X/(r*Ps))**2,Nr+=(ut/(o*Os))**2,Nr+=Eh*(X/(r*Ps))*(ut/(o*Os)),Math.sqrt(Nr)}const gp=75e-6;function rr(e,t=e.space,{epsilon:n=gp}={}){e=G(e),t=M.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function yr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Lt(e,{method:t=lt.gamut_mapping,space:n=e.space}={}){if(Ir(arguments[1])&&(n=arguments[1]),n=M.get(n),rr(e,n,{epsilon:0}))return G(e);let r=He(e,n);if(t!=="clip"&&!rr(e,n)){let o=Lt(yr(r),{method:"clip",space:n});if(ba(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=He(r,a),p=(i.range||i.refRange)[0],h=.01,m=p,g=ze(l,s);for(;g-m>h;){let v=yr(l);v=Lt(v,{space:n,method:"clip"}),ba(l,v)-2<h?m=ze(l,s):g=ze(l,s),qt(l,s,(m+g)/2)}r=He(l,n)}else r=o}if(t==="clip"||!rr(r,n,{epsilon:0})){let o=Object.values(n.coords).map(i=>i.range||[]);r.coords=r.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return n!==e.space&&(r=He(r,e.space)),e.coords=r.coords,e}Lt.returns="color";function He(e,t,{inGamut:n}={}){e=G(e),t=M.get(t);let r=t.from(e),o={space:t,coords:r,alpha:e.alpha};return n&&(o=Lt(o)),o}He.returns="color";function Bo(e,{precision:t=lt.precision,format:n="default",inGamut:r=!0,...o}={}){var l;let i;e=G(e);let a=n;n=e.space.getFormat(n)??e.space.getFormat("default")??M.DEFAULT_FORMAT,r||(r=n.toGamut);let s=e.coords;if(s=s.map(u=>u||0),r&&!rr(e)&&(s=Lt(yr(e),r===!0?void 0:r).coords),n.type==="custom")if(o.precision=t,n.serialize)i=n.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?s=n.serializeCoords(s,t):t!==null&&(s=s.map(g=>To(g,t)));let p=[...s];if(u==="color"){let g=n.id||((l=n.ids)==null?void 0:l[0])||e.space.id;p.unshift(g)}let h=e.alpha;t!==null&&(h=To(h,t));let m=e.alpha<1&&!n.noAlpha?`${n.commas?",":" /"} ${h}`:"";i=`${u}(${p.join(n.commas?", ":" ")}${m})`}return i}const wp=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],vp=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ei=new Ee({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:wp,fromXYZ_M:vp,formats:{color:{}}});const jr=1.09929682680944,ml=.018053968510807;var sd=new Ee({id:"rec2020",name:"REC.2020",base:ei,toBase(e){return e.map(function(t){return t<ml*4.5?t/4.5:Math.pow((t+jr-1)/jr,1/.45)})},fromBase(e){return e.map(function(t){return t>=ml?jr*Math.pow(t,.45)-(jr-1):4.5*t})},formats:{color:{}}});const bp=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],yp=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ld=new Ee({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:bp,fromXYZ_M:yp});const kp=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],xp=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var cd=new Ee({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:kp,fromXYZ_M:xp,formats:{color:{}}}),gl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let wl=Array(3).fill("<percentage> | <number>[0, 255]"),vl=Array(3).fill("<number>[0, 255]");var kr=new Ee({id:"srgb",name:"sRGB",base:cd,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:wl},rgb_number:{name:"rgb",commas:!0,coords:vl,noAlpha:!0},color:{},rgba:{coords:wl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:vl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let r=n&&e.every(i=>i%17===0);return"#"+e.map(i=>r?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=gl.black,t.alpha=0):t.coords=gl[e],t.coords)return t}}}}),ud=new Ee({id:"p3",name:"P3",base:ld,fromBase:kr.fromBase,toBase:kr.toBase,formats:{color:{id:"display-p3"}}});lt.display_space=kr;if(typeof CSS<"u"&&CSS.supports)for(let e of[qe,sd,ud]){let t=e.getMinCoords(),r=Bo({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){lt.display_space=e;break}}function $p(e,{space:t=lt.display_space,...n}={}){let r=Bo(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!lt.display_space)r=new String(r),r.color=e;else{let o=He(e,t);r=new String(Bo(o,n)),r.color=o}return r}function dd(e,t,n="lab"){n=M.get(n);let r=n.from(e),o=n.from(t);return Math.sqrt(r.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function Ap(e,t){return e=G(e),t=G(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function Pt(e){return ze(e,[Ve,"y"])}function hd(e,t){qt(e,[Ve,"y"],t)}function Cp(e){Object.defineProperty(e.prototype,"luminance",{get(){return Pt(this)},set(t){hd(this,t)}})}var Sp=Object.freeze({__proto__:null,getLuminance:Pt,register:Cp,setLuminance:hd});function Tp(e,t){e=G(e),t=G(t);let n=Math.max(Pt(e),0),r=Math.max(Pt(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const Mp=.56,Ep=.57,Ip=.62,Bp=.65,bl=.022,qp=1.414,Lp=.1,Pp=5e-4,Op=1.14,yl=.027,Dp=1.14;function kl(e){return e>=bl?e:e+(bl-e)**qp}function on(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function Np(e,t){t=G(t),e=G(e);let n,r,o,i,a,s;t=He(t,"srgb"),[i,a,s]=t.coords;let l=on(i)*.2126729+on(a)*.7151522+on(s)*.072175;e=He(e,"srgb"),[i,a,s]=e.coords;let u=on(i)*.2126729+on(a)*.7151522+on(s)*.072175,p=kl(l),h=kl(u),m=h>p;return Math.abs(h-p)<Pp?r=0:m?(n=h**Mp-p**Ep,r=n*Op):(n=h**Bp-p**Ip,r=n*Dp),Math.abs(r)<Lp?o=0:r>0?o=r-yl:o=r+yl,o*100}function Rp(e,t){e=G(e),t=G(t);let n=Math.max(Pt(e),0),r=Math.max(Pt(t),0);r>n&&([n,r]=[r,n]);let o=n+r;return o===0?0:(n-r)/o}const Fp=5e4;function jp(e,t){e=G(e),t=G(t);let n=Math.max(Pt(e),0),r=Math.max(Pt(t),0);return r>n&&([n,r]=[r,n]),r===0?Fp:(n-r)/r}function Hp(e,t){e=G(e),t=G(t);let n=ze(e,[qe,"l"]),r=ze(t,[qe,"l"]);return Math.abs(n-r)}const Up=216/24389,xl=24/116,Hr=24389/27;let Ci=_e.D65;var ya=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ci,base:Ve,fromBase(e){let n=e.map((r,o)=>r/Ci[o]).map(r=>r>Up?Math.cbrt(r):(Hr*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>xl?Math.pow(t[0],3):(116*t[0]-16)/Hr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Hr,t[2]>xl?Math.pow(t[2],3):(116*t[2]-16)/Hr].map((r,o)=>r*Ci[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Si=Math.pow(5,.5)*.5+.5;function Wp(e,t){e=G(e),t=G(t);let n=ze(e,[ya,"l"]),r=ze(t,[ya,"l"]),o=Math.abs(Math.pow(n,Si)-Math.pow(r,Si)),i=Math.pow(o,1/Si)*Math.SQRT2-40;return i<7.5?0:i}var lo=Object.freeze({__proto__:null,contrastAPCA:Np,contrastDeltaPhi:Wp,contrastLstar:Hp,contrastMichelson:Rp,contrastWCAG21:Tp,contrastWeber:jp});function Vp(e,t,n={}){Ir(n)&&(n={algorithm:n});let{algorithm:r,...o}=n;if(!r){let i=Object.keys(lo).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=G(e),t=G(t);for(let i in lo)if("contrast"+r.toLowerCase()===i.toLowerCase())return lo[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function fd(e){let[t,n,r]=Br(e,Ve),o=t+15*n+3*r;return[4*t/o,9*n/o]}function pd(e){let[t,n,r]=Br(e,Ve),o=t+n+r;return[t/o,n/o]}function zp(e){Object.defineProperty(e.prototype,"uv",{get(){return fd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return pd(this)}})}var Zp=Object.freeze({__proto__:null,register:zp,uv:fd,xy:pd});function Yp(e,t){return dd(e,t,"lab")}const Gp=Math.PI,$l=Gp/180;function Qp(e,t,{l:n=2,c:r=1}={}){let[o,i,a]=qe.from(e),[,s,l]=br.from(qe,[o,i,a]),[u,p,h]=qe.from(t),m=br.from(qe,[u,p,h])[1];s<0&&(s=0),m<0&&(m=0);let g=o-u,v=s-m,$=i-p,x=a-h,C=$**2+x**2-v**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let N=.0638*s/(1+.0131*s)+.638,F;Number.isNaN(l)&&(l=0),l>=164&&l<=345?F=.56+Math.abs(.2*Math.cos((l+168)*$l)):F=.36+Math.abs(.4*Math.cos((l+35)*$l));let J=Math.pow(s,4),ce=Math.sqrt(J/(J+1900)),X=N*(ce*F+1-ce),V=(g/(n*S))**2;return V+=(v/(r*N))**2,V+=C/X**2,Math.sqrt(V)}const Al=203;var hs=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ve,fromBase(e){return e.map(t=>Math.max(t*Al,0))},toBase(e){return e.map(t=>Math.max(t/Al,0))}});const Ur=1.15,Wr=.66,Cl=2610/2**14,Kp=2**14/2610,Sl=3424/2**12,Tl=2413/2**7,Ml=2392/2**7,Jp=1.7*2523/2**5,El=2**5/(1.7*2523),Vr=-.56,Ti=16295499532821565e-27,Xp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],_p=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],em=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],tm=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var md=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:hs,fromBase(e){let[t,n,r]=e,o=Ur*t-(Ur-1)*r,i=Wr*n-(Wr-1)*t,s=me(Xp,[o,i,r]).map(function(m){let g=Sl+Tl*(m/1e4)**Cl,v=1+Ml*(m/1e4)**Cl;return(g/v)**Jp}),[l,u,p]=me(em,s);return[(1+Vr)*l/(1+Vr*l)-Ti,u,p]},toBase(e){let[t,n,r]=e,o=(t+Ti)/(1+Vr-Vr*(t+Ti)),a=me(tm,[o,n,r]).map(function(m){let g=Sl-m**El,v=Ml*m**El-Tl;return 1e4*(g/v)**Kp}),[s,l,u]=me(_p,a),p=(s+(Ur-1)*u)/Ur,h=(l+(Wr-1)*p)/Wr;return[p,h,u]},formats:{color:{}}}),ka=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:md,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),_o(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function nm(e,t){let[n,r,o]=ka.from(e),[i,a,s]=ka.from(t),l=n-i,u=r-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let p=o-s,h=2*Math.sqrt(r*a)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(l**2+u**2+h**2)}const gd=3424/4096,wd=2413/128,vd=2392/128,Il=2610/16384,rm=2523/32,om=16384/2610,Bl=32/2523,im=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],am=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],sm=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],lm=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var xa=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hs,fromBase(e){let t=me(im,e);return cm(t)},toBase(e){let t=um(e);return me(lm,t)},formats:{color:{}}});function cm(e){let t=e.map(function(n){let r=gd+wd*(n/1e4)**Il,o=1+vd*(n/1e4)**Il;return(r/o)**rm});return me(am,t)}function um(e){return me(sm,e).map(function(r){let o=Math.max(r**Bl-gd,0),i=wd-vd*r**Bl;return 1e4*(o/i)**om})}function dm(e,t){let[n,r,o]=xa.from(e),[i,a,s]=xa.from(t);return 720*Math.sqrt((n-i)**2+.25*(r-a)**2+(o-s)**2)}const hm=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],fm=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],pm=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],mm=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var qo=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ve,fromBase(e){let n=me(hm,e).map(r=>Math.cbrt(r));return me(pm,n)},toBase(e){let n=me(mm,e).map(r=>r**3);return me(fm,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function gm(e,t){let[n,r,o]=qo.from(e),[i,a,s]=qo.from(t),l=n-i,u=r-a,p=o-s;return Math.sqrt(l**2+u**2+p**2)}var Lo={deltaE76:Yp,deltaECMC:Qp,deltaE2000:ba,deltaEJz:nm,deltaEITP:dm,deltaEOK:gm};function Gn(e,t,n={}){Ir(n)&&(n={method:n});let{method:r=lt.deltaE,...o}=n;e=G(e),t=G(t);for(let i in Lo)if("deltae"+r.toLowerCase()===i.toLowerCase())return Lo[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${r}`)}function wm(e,t=.25){let r=[M.get("oklch","lch"),"l"];return qt(e,r,o=>o*(1+t))}function vm(e,t=.25){let r=[M.get("oklch","lch"),"l"];return qt(e,r,o=>o*(1-t))}var bm=Object.freeze({__proto__:null,darken:vm,lighten:wm});function bd(e,t,n=.5,r={}){[e,t]=[G(e),G(t)],Mt(n)==="object"&&([n,r]=[.5,n]);let{space:o,outputSpace:i,premultiplied:a}=r;return qr(e,t,{space:o,outputSpace:i,premultiplied:a})(n)}function yd(e,t,n={}){let r;fs(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=n;r||([e,t]=[G(e),G(t)],r=qr(e,t,l));let u=Gn(e,t),p=o>0?Math.max(a,Math.ceil(u/o)+1):a,h=[];if(s!==void 0&&(p=Math.min(p,s)),p===1)h=[{p:.5,color:r(.5)}];else{let m=1/(p-1);h=Array.from({length:p},(g,v)=>{let $=v*m;return{p:$,color:r($)}})}if(o>0){let m=h.reduce((g,v,$)=>{if($===0)return 0;let x=Gn(v.color,h[$-1].color,i);return Math.max(g,x)},0);for(;m>o;){m=0;for(let g=1;g<h.length&&h.length<s;g++){let v=h[g-1],$=h[g],x=($.p+v.p)/2,C=r(x);m=Math.max(m,Gn(C,v.color),Gn(C,$.color)),h.splice(g,0,{p:x,color:r(x)}),g++}}}return h=h.map(m=>m.color),h}function qr(e,t,n={}){if(fs(e)){let[l,u]=[e,t];return qr(...l.rangeArgs.colors,{...l.rangeArgs.options,...u})}let{space:r,outputSpace:o,progression:i,premultiplied:a}=n;e=G(e),t=G(t),e=yr(e),t=yr(t);let s={colors:[e,t],options:n};if(r?r=M.get(r):r=M.registry[lt.interpolationSpace]||e.space,o=o?M.get(o):r,e=He(e,r),t=He(t,r),e=Lt(e),t=Lt(t),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",u=[r,"h"],[p,h]=[ze(e,u),ze(t,u)];[p,h]=mp(l,[p,h]),qt(e,u,p),qt(t,u,h)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let u=e.coords.map((m,g)=>{let v=t.coords[g];return Mo(m,v,l)}),p=Mo(e.alpha,t.alpha,l),h={space:r,coords:u,alpha:p};return a&&(h.coords=h.coords.map(m=>m/p)),o!==r&&(h=He(h,o)),h},{rangeArgs:s})}function fs(e){return Mt(e)==="function"&&!!e.rangeArgs}lt.interpolationSpace="lab";function ym(e){e.defineFunction("mix",bd,{returns:"color"}),e.defineFunction("range",qr,{returns:"function<color>"}),e.defineFunction("steps",yd,{returns:"array<color>"})}var km=Object.freeze({__proto__:null,isRange:fs,mix:bd,range:qr,register:ym,steps:yd}),kd=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:kr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,o,i]=e,[a,s,l]=[NaN,0,(n+t)/2],u=t-n;if(u!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case r:a=(o-i)/u+(o<i?6:0);break;case o:a=(i-r)/u+2;break;case i:a=(r-o)/u+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function o(i){let a=(i+t/30)%12,s=n*Math.min(r,1-r);return r-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),xd=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:kd,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r+n*Math.min(r,1-r);return[t,o===0?0:200*(1-r/o),100*o]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r*(1-n/2);return[t,o===0||o===1?0:(r-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),xm=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:xd,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=n+r;if(o>=1){let s=n/o;return[t,0,s*100]}let i=1-r,a=i===0?0:1-n/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const $m=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Am=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var $d=new Ee({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:$m,fromXYZ_M:Am}),Cm=new Ee({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:$d,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Sm=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Tm=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ad=new Ee({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:ds,toXYZ_M:Sm,fromXYZ_M:Tm});const Mm=1/512,Em=16/512;var Im=new Ee({id:"prophoto",name:"ProPhoto",base:Ad,toBase(e){return e.map(t=>t<Em?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Mm?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Bm=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qo,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),_o(o)]},toBase(e){let[t,n,r]=e,o,i;return isNaN(r)?(o=0,i=0):(o=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ql=203,Ll=2610/2**14,qm=2**14/2610,Lm=2523/2**5,Pl=2**5/2523,Ol=3424/2**12,Dl=2413/2**7,Nl=2392/2**7;var Pm=new Ee({id:"rec2100pq",name:"REC.2100-PQ",base:ei,toBase(e){return e.map(function(t){return(Math.max(t**Pl-Ol,0)/(Dl-Nl*t**Pl))**qm*1e4/ql})},fromBase(e){return e.map(function(t){let n=Math.max(t*ql/1e4,0),r=Ol+Dl*n**Ll,o=1+Nl*n**Ll;return(r/o)**Lm})},formats:{color:{id:"rec2100-pq"}}});const Rl=.17883277,Fl=.28466892,jl=.55991073,Mi=3.7743;var Om=new Ee({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ei,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Mi:(Math.exp((t-jl)/Rl)+Fl)/12*Mi})},fromBase(e){return e.map(function(t){return t/=Mi,t<=1/12?Math.sqrt(3*t):Rl*Math.log(12*t-Fl)+jl})},formats:{color:{id:"rec2100-hlg"}}});const Cd={};Bt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Sd(e.W1,e.W2,e.options.method))});Bt.add("chromatic-adaptation-end",e=>{e.M||(e.M=Sd(e.W1,e.W2,e.options.method))});function ti({id:e,toCone_M:t,fromCone_M:n}){Cd[e]=arguments[0]}function Sd(e,t,n="Bradford"){let r=Cd[n],[o,i,a]=me(r.toCone_M,e),[s,l,u]=me(r.toCone_M,t),p=[[s/o,0,0],[0,l/i,0],[0,0,u/a]],h=me(p,r.toCone_M);return me(r.fromCone_M,h)}ti({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});ti({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});ti({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});ti({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(_e,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});_e.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Dm=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Nm=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Td=new Ee({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:_e.ACES,toXYZ_M:Dm,fromXYZ_M:Nm,formats:{color:{}}});const zr=2**-16,Ei=-.35828683,Zr=(Math.log2(65504)+9.72)/17.52;var Rm=new Ee({id:"acescc",name:"ACEScc",coords:{r:{range:[Ei,Zr],name:"Red"},g:{range:[Ei,Zr],name:"Green"},b:{range:[Ei,Zr],name:"Blue"}},referred:"scene",base:Td,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-zr)*2:n<Zr?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(zr)+9.72)/17.52:t<zr?(Math.log2(zr+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Hl=Object.freeze({__proto__:null,A98RGB:Cm,A98RGB_Linear:$d,ACEScc:Rm,ACEScg:Td,HSL:kd,HSV:xd,HWB:xm,ICTCP:xa,JzCzHz:ka,Jzazbz:md,LCH:br,Lab:qe,Lab_D65:ya,OKLCH:Bm,OKLab:qo,P3:ud,P3_Linear:ld,ProPhoto:Im,ProPhoto_Linear:Ad,REC_2020:sd,REC_2020_Linear:ei,REC_2100_HLG:Om,REC_2100_PQ:Pm,XYZ_ABS_D65:hs,XYZ_D50:ds,XYZ_D65:Ve,sRGB:kr,sRGB_Linear:cd});class P{constructor(...t){let n;t.length===1&&(n=G(t[0]));let r,o,i;n?(r=n.space||n.spaceId,o=n.coords,i=n.alpha):[r,o,i]=t,Object.defineProperty(this,"space",{value:M.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=$p(this,...t);return n.color=new P(n.color),n}static get(t,...n){return t instanceof P?t:new P(t,...n)}static defineFunction(t,n,r=n){let{instance:o=!0,returns:i}=r,a=function(...s){let l=n(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let u=l;l=function(...p){let h=u(...p);return P.get(h)},Object.assign(l,u)}else i==="array<color>"&&(l=l.map(u=>P.get(u)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let n in t)P.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(P);else for(let n in t)P.defineFunction(n,t[n])}}P.defineFunctions({get:ze,getAll:Br,set:qt,setAll:ad,to:He,equals:Ap,inGamut:rr,toGamut:Lt,distance:dd,toString:Bo});Object.assign(P,{util:up,hooks:Bt,WHITES:_e,Space:M,spaces:M.registry,parse:id,defaults:lt});for(let e of Object.keys(Hl))M.register(Hl[e]);for(let e in M.registry)$a(e,M.registry[e]);Bt.add("colorspace-init-end",e=>{var t;$a(e.id,e),(t=e.aliases)==null||t.forEach(n=>{$a(n,e)})});function $a(e,t){Object.keys(t.coords),Object.values(t.coords).map(r=>r.name);let n=e.replace(/-/g,"_");Object.defineProperty(P.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}P.extend(Lo);P.extend({deltaE:Gn});Object.assign(P,{deltaEMethods:Lo});P.extend(bm);P.extend({contrast:Vp});P.extend(Zp);P.extend(Sp);P.extend(km);P.extend(lo);function Md(e){return xe(e,(t,n)=>n instanceof P?T(n.toString({format:"hex"})):Md(n))}const Fm="dodgerblue";function Aa(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function Ii({background:e,foreground:t}){return{background:e??new P(Aa(t)),foreground:t??new P(Aa(e))}}var Po;(function(e){e.Dark="dark",e.Light="light"})(Po||(Po={}));function jm(e){return e==="black"?"white":"black"}const Hm={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},Um={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function Ul({themeColor:e=Fm,themeStyle:t=Po.Light}={}){const n=new P(e),r=new P(t===Po.Dark?"black":"white"),o=Aa(r),i=new P(o),a={nav:{hover:Ii({background:n.clone().set({"hsl.l":93})}),active:Ii({background:n.clone().set({"hsl.l":90})}),selected:Ii({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...Um[jm(o)],foreground:i,...Hm[o]}};return Md(a)}const Oo=Xa()("element-book-change-route"),Wl="vira-",{defineElement:Ln,defineElementNoInputs:ob}=as({assertInputs:e=>{if(!e.tagName.startsWith(Wl))throw new Error(`Tag name should start with '${Wl}' but got '${e.tagName}'`)}}),Ed=f`
    pointer-events: none;
    opacity: 0.3;
`,Et=bt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Do=bt({"vira-form-input-border-radius":"8px"}),No=bt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":f`calc(${Do["vira-form-input-border-radius"].value} + 4px)`});function Id({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=T(Wt(r+n+t));return f`
        ${T(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${No["vira-focus-outline-color"].value};
            border-radius: ${No["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const ps=f`
    padding: 0;
    margin: 0;
`,de=f`
    ${ps};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function Wm(e){return f`
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
    `}const Ye=f`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,he=Ln()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>f`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var Ca;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Ca||(Ca={}));Ln()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Ca.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>f`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ye};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${No["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ed};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${de};
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
            border-radius: ${Do["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Et["vira-interaction-animation-duration"].value},
                background-color
                    ${Et["vira-interaction-animation-duration"].value},
                border-color ${Et["vira-interaction-animation-duration"].value};
        }

        ${Id({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${he} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?c`
                  <${he.assign({icon:e.icon})}></${he}>
              `:"",n=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"";return c`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var Sa;(function(e){e.Header="header"})(Sa||(Sa={}));Ln()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>f`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${de};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Et["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ie()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:n,events:r,inputs:o}){const i=o.expanded?f`
                  height: ${e.contentHeight}px;
              `:f`
                  height: 0;
              `;return c`
            <button
                class="header-wrapper"
                ${k("click",()=>{n(new r.expandChange(!o.expanded))})}
            >
                <slot name=${Sa.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Xt(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=bt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function w({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Vm=w({name:"CloseX24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${L["vira-icon-fill-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),zm=w({name:"Element16Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"Element24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Zm=w({name:"Loader24Icon",svgTemplate:c`
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
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ym=f`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Et["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Bd=w({name:"LoaderAnimated24Icon",svgTemplate:c`
        <style>
            ${Ym}
        </style>
        ${Zm.svgTemplate}
    `}),Gm=w({name:"Options24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${L["vira-icon-fill-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${L["vira-icon-stroke-color"].value}"
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),qd=w({name:"StatusFailure24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${L["vira-icon-fill-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"StatusInProgress24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${L["vira-icon-fill-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${L["vira-icon-stroke-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width="calc(${L["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${L["vira-icon-stroke-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width="calc(${L["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${L["vira-icon-stroke-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width="calc(${L["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});w({name:"StatusSuccess24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${L["vira-icon-fill-color"].value}
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Mn;(function(e){e.Loading="loading",e.Error="error"})(Mn||(Mn={}));const St=Ln()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:ie(),imageError:ie()},styles:({hostClasses:e})=>f`
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
                  <slot class="status-wrapper" name=${Mn.Error}>
                      <${he.assign({icon:qd})} class="error"></${he}>
                  </slot>
              `:t.loadedUrls[i]?void 0:c`
                    <slot class="status-wrapper" name=${Mn.Loading}>
                        <${he.assign({icon:Bd})}></${he}>
                    </slot>
                `;return c`
            ${we(!!a,a)}
            <img
                class=${fe({hidden:!!a})}
                ${k("load",async()=>{e._debugLoadDelay&&await ca(e._debugLoadDelay.milliseconds),n({loadedUrls:{...t.loadedUrls,[i]:!0}}),r(new o.imageLoad)})}
                ${k("error",async s=>{e._debugLoadDelay&&await ca(e._debugLoadDelay.milliseconds),n({erroredUrls:{...t.erroredUrls,[i]:!0}}),r(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Ta({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Ta({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ld({value:e,allowed:t,blocked:n}){const r=t?Ta({input:e,matcher:t}):!0,o=n?Ta({input:e,matcher:n}):!1;return r&&!o}function Pd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(Ld({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function Qm({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:o}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Yn(n,HTMLInputElement),a=n.data,s=t;let l=i.value??"";if(a)if(a.length===1)Ld({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,r(a));else{const{filtered:u,blocked:p}=Pd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=u,r(p)}i.value!==l&&(i.value=l),s!==l&&o(l)}const co=Ln()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ie(),inputBlocked:ie()},styles:({hostClasses:e,cssVars:t})=>f`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${No["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ed};
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
                ${de};
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
                ${Ye};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${de};
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
                border-radius: ${Do["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Et["vira-interaction-animation-duration"].value};
            }

            label {
                ${de};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Do["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Id({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${de};
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
                ${Ye};
            }

            .close-x-button {
                ${de};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${Et["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:n,updateState:r,events:o})=>{const{filtered:i}=Pd({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?c`
                  <${he.assign({icon:e.icon})} class="left-side-icon"></${he}>
              `:"",s=e.fitText?f`
                  width: ${n.forcedInputWidth}px;
              `:"";return c`
            <label>
                ${a}
                ${we(!!e.fitText,c`
                        <span
                            class="size-span"
                            ${Xt(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
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
                    ${k("input",l=>{Qm({inputs:e,filteredValue:i,event:l,inputBlockedCallback(u){t(new o.inputBlocked(u))},newValueCallback(u){t(new o.valueChange(u))}})})}
                    placeholder=${e.placeholder}
                />
                ${we(!!(e.showClearButton&&e.value),c`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${k("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${he.assign({icon:Vm})}></${he}>
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
        `}});Ln()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>f`
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
    `,events:{routeChange:ie()},renderCallback({inputs:e,dispatch:t,events:n}){var o,i;function r(a){e.route&&Jo(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new n.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return c`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return c`
                <a href=${a} rel="noopener noreferrer" ${k("click",r)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Ge,defineElementNoInputs:ib}=as(),je=Ge()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>f`
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
                ${k("click",i=>{(!e.router||Jo(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new Oo(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Km(e,t){return e.entry.entryType===ke.Root?!1:!!(e.entry.entryType===ke.Page||at(t,e.fullUrlBreadcrumbs.slice(0,-1))||at(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const pt=Ge()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>f`
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
            ${je.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${he} {
            display: inline-flex;
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!Km(n,e.selectedPath))return;const r=f`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return c`
                <li style=${r}>
                    <${je.assign({router:e.router,route:{paths:[Te.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${fe({"title-row":!0,selected:e.selectedPath?at(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${we(kn(n,ke.ElementExample),c`
                                    <${he.assign({icon:zm})}></${he}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${je}>
                </li>
            `});return c`
            <${je.assign({route:Tn,router:e.router})}>
                <slot name=${st.NavHeader}>Book</slot>
            </${je}>
            <ul>
                ${t}
            </ul>
        `}});async function Jm(e){await ua(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await yf(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Ot=Ge()({tagName:"book-error",styles:f`
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
            `)}}),xr=Ge()({tagName:"book-page-controls",events:{controlValueChange:ie()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>f`
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

        ${co} {
            height: 24px;
            max-width: 128px;
        }

        ${he}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,o],i)=>{if(o.controlType===H.Hidden)return"";const a=Xm(e.currentValues[r],o,s=>{const l=ee(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[r]:s}}))});return c`
                    <div class="control-wrapper">
                        ${we(i===0,c`
                                <${he.assign({icon:Gm})}
                                    class="options-icon"
                                ></${he}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Xm(e,t,n){return nn(t,H.Hidden)?"":nn(t,H.Checkbox)?c`
            <input
                type="checkbox"
                .value=${e}
                ${k("input",r=>{const o=Yn(r,HTMLInputElement);n(o.checked)})}
            />
        `:nn(t,H.Color)?c`
            <input
                type="color"
                .value=${e}
                ${k("input",r=>{const o=Yn(r,HTMLInputElement);n(o.value)})}
            />
        `:nn(t,H.Text)?c`
            <${co.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${k(co.events.valueChange,r=>{n(r.detail)})}
            ></${co}>
        `:nn(t,H.Number)?c`
            <input
                type="number"
                .value=${e}
                ${k("input",r=>{const o=Yn(r,HTMLInputElement);n(o.value)})}
            />
        `:nn(t,H.Dropdown)?c`
            <select
                .value=${e}
                ${k("input",r=>{const o=Yn(r,HTMLSelectElement);n(o.value)})}
            >
                ${t.options.map(r=>c`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:c`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Vl=Ge()({tagName:"book-breadcrumbs",styles:f`
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
                <${je.assign({route:{hash:void 0,search:void 0,paths:[Te.Book,...a]},router:e.router})}>
                    ${n}
                </${je}>
                ${s}
            `}):c`
                &nbsp;
            `}}),Bi=Ge()({tagName:"book-breadcrumbs-bar",styles:f`
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
                    <${Vl.assign({currentRoute:e.currentRoute,router:e.router})}></${Vl}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${k("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=r.value;await ca(200),r.value===o&&(r.value?t(new Oo({paths:[Te.Search,encodeURIComponent(r.value)]})):t(new Oo(Tn)))})}
            />
        `}}),zl=Ge()({tagName:"book-entry-description",styles:f`
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
            `)}}),Zl=Ge()({tagName:"book-page-wrapper",styles:f`
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

        ${je} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?c`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:c`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Te.Book,...e.pageNode.fullUrlBreadcrumbs],r=nu(e.pageNode.entry.errors);return r&&console.error(r),c`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${je.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${je}>
                    ${r?c`
                              <${Ot.assign({message:r.message})}></${Ot}>
                          `:c`
                              <${zl.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${zl}>
                              <${xr.assign({config:e.pageNode.entry.controls,currentValues:ls(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${xr}>
                          `}
                </div>
            </div>
        `}}),Yr=Ge()({tagName:"book-element-example-controls",styles:f`
        :host {
            display: flex;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[Te.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return c`
            <${je.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${je}>
        `}}),Yl=Symbol("unset-internal-state"),Gl=Ge()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Yl},renderCallback({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw nu(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Yl&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.renderCallback({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new Error("renderCallback output cannot be a promise");return c`
                ${we(!!t.elementExampleNode.entry.styles,c`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error(r),c`
                <${Ot.assign({message:`${t.elementExampleNode.entry.title} failed: ${Dt(r)}`})}></${Ot}>
            `}},options:{allowPolymorphicState:!0}}),Ql=Ge()({tagName:"book-element-example-wrapper",styles:f`
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

        ${Yr} {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Yr} {
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return c`
            <div class="individual-example-wrapper">
                <${Yr.assign(hr(e,["currentPageControls"]))}></${Yr}>
                <${Gl.assign(e)}></${Gl}>
            </div>
        `}});function Od(e,t,n,r){const o=ma(n,r),i=[];if(o){const a=Od(e,t,o,r);a&&i.push(a)}if(kn(n,ke.Page)&&!e.includes(n)){const a=ls(t,n.fullUrlBreadcrumbs);i.push({config:n.entry.controls,current:a,breadcrumbs:xe(a,()=>n.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function _m({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:o,originalTree:i}){if(!e.length&&r)return[c`
                No results
            `];const a=la(e,1)?Od(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&la(e,1)?c`
                  <${xr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${xr}>
              `:K,l=Xf(e,u=>u.fullUrlBreadcrumbs.join(">"),(u,p)=>{if(kn(u,ke.Page))return c`
                    <${Zl.assign({isTopLevel:t,pageNode:u,controls:o,router:n})}
                        class="block-entry"
                    ></${Zl}>
                `;if(kn(u,ke.ElementExample)){const h=ls(o,u.fullUrlBreadcrumbs.slice(0,-1));return c`
                    <${Ql.assign({elementExampleNode:u,currentPageControls:h,router:n})}
                        class="inline-entry"
                    ></${Ql}>
                `}else return kn(u,ke.Root)?K:c`
                    <${Ot.assign({message:`Unknown entry type for rendering: '${u.entry.entryType}'`})}
                        class="block-entry"
                    ></${Ot}>
                `});return[s,l]}const an=Ge()({tagName:"book-entry-display",styles:f`
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

        ${Bi} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Et["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:ie()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:n,state:r,updateState:o})=>{const i=ga(e.currentRoute.paths),a=_m({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return c`
            <${Bi.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Bi}>

            ${we(e.showLoading,c`
                    <div
                        ${Co(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${he.assign({icon:Bd})}></${he}>
                    </div>
                    ${we(!!r.lastElement,c`
                            ${r.lastElement}
                            <slot name=${st.Footer}></slot>
                        `)}
                `,c`
                    <div
                        ${Co(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${st.Footer}></slot>
                `)}
        `}});function eg(e,t,n){const r=Kl(e,t);if(r.length)return r;n(Tn);const o=Kl(e,Tn.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Kl(e,t){return e.filter(n=>bf({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const qi=os()({tagName:"element-book-app",events:{pathUpdate:ie()},stateInitStatic:{currentRoute:Tn,router:void 0,loading:!0,colors:{config:void 0,theme:Ul(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:f`
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

        ${an} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${pt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Jl(e,ga(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:n,updateState:r,dispatch:o,events:i})=>{var p,h,m,g,v,$,x;t._debug&&console.info("rendering element-book app");function a(C){return{...e.currentRoute,...C}}function s(C){const S=a(C);return!at(e.currentRoute,S)}function l(C){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,C].filter(ve).join(" - "))}function u(C){if(!s(C))return;const S=a(C);e.router?e.router.setRoutes(S):r({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!at(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!at(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(p=t.internalRouterConfig)!=null&&p.useInternalRouter&&!e.router){const V=ap(t.internalRouterConfig.basePath);r({router:V}),V.addRouteListener(!0,ne=>{r({currentRoute:ne})})}else!((h=t.internalRouterConfig)!=null&&h.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const C={themeColor:t.themeColor};if(!at(C,(m=e.colors)==null?void 0:m.config)){const V=Ul(C);r({colors:{config:C,theme:V}}),cp(n,V)}const S=t._debug??!1,N=W1({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Yu(N.tree,{children:(v=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:v.children,controls:t.globalValues})}}));const F=ga(e.currentRoute.paths),ce=(F?K1({flattenedNodes:N.flattenedNodes,searchQuery:F}):void 0)??eg(N.flattenedNodes,e.currentRoute.paths,u);l(($=ce[0])==null?void 0:$.entry.title);const X=(x=e.treeBasedControls)==null?void 0:x.controls;return X?(t._debug&&console.info({currentControls:X}),c`
                <div
                    class="root"
                    ${k(Oo,async V=>{const ne=V.detail;if(!s(ne))return;if(r({loading:!0}),u(ne),!(n.shadowRoot.querySelector(pt.tagName)instanceof pt))throw new Error(`Failed to find child '${pt.tagName}'`);Jl(n,F,e.currentRoute)})}
                    ${k(xr.events.controlValueChange,V=>{if(!e.treeBasedControls)return;const ne=z1(X,V.detail.fullUrlBreadcrumbs,V.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:ne}})})}
                >
                    <${pt.assign({flattenedNodes:N.flattenedNodes,router:e.router,selectedPath:F?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${st.NavHeader}
                            slot=${st.NavHeader}
                        ></slot>
                    </${pt}>
                    <${an.assign({controls:X,currentNodes:ce,currentRoute:e.currentRoute,debug:S,originalTree:N.tree,router:e.router,showLoading:e.loading})}
                        ${k(an.events.loadingRender,async V=>{await ua();const ne=n.shadowRoot.querySelector(an.tagName);ne?ne.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${an.tagName}' for scrolling.`),await ua(),r({loading:!V.detail})})}
                    >
                        <slot
                            name=${st.Footer}
                            slot=${st.Footer}
                        ></slot>
                    </${an}>
                </div>
            `):c`
                    <${Ot.assign({message:"Failed to generate page controls."})}></${Ot}>
                `}catch(C){return console.error(C),c`
                <p class="error">${Dt(C)}</p>
            `}}});async function Jl(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(pt.tagName);if(!(r instanceof pt))throw new Error(`Failed to find child '${pt.tagName}'`);await Jm(r)}const d=bt({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),Y=xe(d,(e,t)=>n=>T(`var(${t.name}, ${n})`)),tg=w({name:"CheckMark16Icon",svgTemplate:c`
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m3.333 8 3.334 3.333 6.666-6.667"
                stroke=${d["toniq-icon-stroke-color"].value}
                stroke-width=${d["toniq-icon-stroke-width"].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `});function sn(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const ng=(()=>{const e={backgroundColor:f`#ffffff`,foregroundColor:f`#000000`},t={...e,foregroundColor:f`#00D093`},n={...e,foregroundColor:f`#ACADAD`},r={...e,foregroundColor:f`#D6D6D6`},o={foregroundColor:f`#ffffff`,backgroundColor:f`#FF5357`},i={...sn(o),backgroundColor:f`transparent`},a={foregroundColor:f`#ffffff`,backgroundColor:f`#01C9A0`},s={...sn(a),backgroundColor:f`transparent`},l={foregroundColor:f`#ffffff`,backgroundColor:f`#FFAC00`},u={...sn(l),backgroundColor:f`transparent`},p={...t},h={...t,foregroundColor:f`#00A876`},m={...t,foregroundColor:f`#1D6852`},g={...r},v={...e,foregroundColor:f`rgba(0, 0, 0, 0.08)`},$={...e,backgroundColor:f`#D2EEFA`},x=sn(p),C=sn(h),S=sn(m),N=S,F={backgroundColor:f`#F1F3F6`,foregroundColor:e.foregroundColor},J={...F,foregroundColor:f`#9A9A9D`},ce={...e,backgroundColor:f`color(
            from ${p.backgroundColor} srgb r g b / 0.9
        )`};return{brandPrimary:t,pagePrimary:e,pageSecondary:n,pageTertiary:r,pageInteraction:p,pageInteractionHover:h,pageInteractionActive:m,divider:g,dividerFaint:v,dropShadow:$,pageDarkPrimary:N,accentPrimary:x,accentPrimaryHover:C,accentPrimaryActive:S,accentSecondary:F,accentTertiary:J,colorDanger:o,colorSuccess:a,colorWarning:l,alertDanger:i,alertWarning:u,alertSuccess:s,opaqueOverlay:ce}})(),Dd=ng;function Xl(e,t){return T(`--toniq-${vo(e)}-${vo(t)}`)}const ms=xe(Dd,e=>({backgroundColor:Xl(e,"backgroundColor"),foregroundColor:Xl(e,"foregroundColor")}));function Xe(e,t){const n=Dd[e][t],r=ms[e][t];return f`var(${r}, ${n})`}const b=xe(ms,e=>({foregroundColor:Xe(e,"foregroundColor"),backgroundColor:Xe(e,"backgroundColor")}));function R(e){return f`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}function Li(e){return f`
        background: ${e.backgroundColor};
        border-color: ${e.foregroundColor};
    `}const Pi={interactionDuration:f`--toniq-interaction-transition-duration`,prettyDuration:f`--toniq-pretty-transition-duration`,pulseDuration:f`--toniq-pulse-transition-duration`},oe={interaction:f`var(${Pi.interactionDuration}, 84ms)`,pretty:f`var(${Pi.prettyDuration}, 300ms)`,pulse:f`var(${Pi.pulseDuration}, 3s)`},_l={modalGrow:{animationName:f`toniq-modal-grow`,keyFrames:f`
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
        `},menuGrow:{animationName:f`toniq-menu-grow`,keyFrames:f`
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
        `},buttonPulse:{animationName:f`toniq-button-pulse`,keyFrames:f`
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
        `}},_t=f`
    pointer-events: none;
    opacity: 0.3;
    ${Ye};
`;function Nt({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=T(Wt(r+n+t));return f`
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
    `}const Nd={toniqFont:{"font-family":f`'Lexend', sans-serif`},normalWeightFont:{"font-weight":f`400`},boldFont:{"font-weight":f`600`},extraBoldFont:{"font-weight":f`900`},paragraphFont:{"line-height":f`24px`,"font-size":f`16px`},boldParagraphFont:{},labelFont:{"line-height":f`16px`,"font-size":f`12px`},boldLabelFont:{},h1Font:{"line-height":f`96px`,"font-size":f`64px`},h2Font:{"line-height":f`64px`,"font-size":f`48px`},h3Font:{"line-height":f`48px`,"font-size":f`32px`},h4Font:{"line-height":f`32px`,"font-size":f`24px`},h5Font:{"line-height":f`28px`,"font-size":f`20px`},monospaceFont:{"font-family":f`'Inconsolata', monospace`,"line-height":f`1.125em`}},rg=xe(Nd,(e,t)=>{const n=T(vo(e.replace(/Font$/,"")));return xe(t,o=>{const i=T(o);return f`--toniq-font-${n}-${i}`})});function Oe(e){const t=rg[e],n=Nd[e],r=le(t).map(o=>{const i=n[o],a=t[o];return f`
            ${T(o)}: var(${a}, ${i});
        `});return T(r.join(`
`))}const O=(()=>{const e=f`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
        ${Oe("toniqFont")};
    `,t=f`
        ${e};
        ${Oe("normalWeightFont")};
    `,n=f`
        ${e};
        ${Oe("boldFont")};
    `,r=f`
        ${e};
        ${Oe("extraBoldFont")};
    `,o=f`
        ${e};
        ${Oe("paragraphFont")};
        ${t};
    `,i=f`
        ${e};
        ${o};
        ${n};
    `,a=f`
        ${e};
        ${Oe("labelFont")};
        ${t};
    `,s=f`
        ${a};
        ${n};
    `,l=f`
        ${Oe("h1Font")};
        ${r};
    `,u=f`
        ${Oe("h2Font")};
        ${r};
    `,p=f`
        ${Oe("h3Font")};
        ${n};
    `,h=f`
        ${Oe("h4Font")};
        ${n};
    `,m=f`
        ${Oe("h5Font")};
        ${n};
    `,g=f`
        ${Oe("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:n,extraBoldFont:r,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:u,h3Font:p,h4Font:h,h5Font:m,monospaceFont:g}})(),$r={popupShadow:f`
        filter: drop-shadow(0px 12px 8px ${b.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:f`
        filter: drop-shadow(0px -12px 8px ${b.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:f`
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.12));
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function og(e,t=!0){const n=T(e),r=e===":host"?f`
                  :host(:hover);
              `:f`
                  ${n}:hover
              `,o=t?f`
              ${n} {
                  cursor: pointer;
              }
              ${r} {
                  border-color: ${b.pageInteraction.foregroundColor};
              }
          `:f``;return f`
        ${n} {
            border-radius: 16px;
            background-color: ${b.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${$r.popupShadow};
        }

        ${o}
    `}const Rd=w({name:"ChevronsRight16Icon",svgTemplate:c`
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.666 4.667 7.999 8l-3.333 3.333m4-6.666L11.999 8l-3.333 3.333" />
        </svg>
    `}),ig=w({name:"CloseX16Icon",svgTemplate:c`
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
    `}),ag=w({name:"Copy16Icon",svgTemplate:c`
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
    `}),sg=w({name:"ExternalLink16Icon",svgTemplate:c`
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
    `}),It=w({name:"InfoCircle16Icon",svgTemplate:c`
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
    `}),lg=w({name:"Refresh16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
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
    `}),cg=w({name:"ShootingStar16Icon",svgTemplate:c`
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${`calc(${d["toniq-icon-stroke-width"].value} / 2)`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m10.333 3.667-2-1L8.666 5 7.333 6.333l2 .333 1 2 1-2 2-.333L12 5l.333-2.333zm-7.666 9.667 4.667-4.667M6 13.334 8.333 11m-5.666-1L5 7.667"
            />
        </svg>
    `}),ug=w({name:"ArrowBarUp24Icon",svgTemplate:c`
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
    `}),dg=w({name:"ArrowForwardUp24Icon",svgTemplate:c`
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
    `}),gs=w({name:"ArrowLeft24Icon",svgTemplate:c`
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
    `}),hg=w({name:"ArrowLoopLeft24Icon",svgTemplate:c`
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
    `}),fg=w({name:"ArrowLoopRight24Icon",svgTemplate:c`
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
    `}),ws=w({name:"ArrowRight24Icon",svgTemplate:c`
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
    `}),Fd=w({name:"ArrowsSort24Icon",svgTemplate:c`
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
    `}),pg=w({name:"ArrowsSortAscending24Icon",svgTemplate:c`
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
    `}),mg=w({name:"ArrowsSortDescending24Icon",svgTemplate:c`
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
    `}),gg=w({name:"Bell24Icon",svgTemplate:c`
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
    `}),wg=w({name:"Bucket24Icon",svgTemplate:c`
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
    `}),vg=w({name:"BuildingStore24Icon",svgTemplate:c`
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
    `}),bg=w({name:"CalendarEvent24Icon",svgTemplate:c`
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
    `}),yg=w({name:"Cash24Icon",svgTemplate:c`
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
    `}),kg=w({name:"Chain24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
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
    `}),vs=w({name:"CheckMark24Icon",svgTemplate:c`
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
    `}),jd=w({name:"ChevronDown24Icon",svgTemplate:c`
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
    `}),xg=w({name:"ChevronUp24Icon",svgTemplate:c`
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
    `}),$g=w({name:"Circle24Icon",svgTemplate:c`
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
    `}),Hd=w({name:"CircleDot24Icon",svgTemplate:c`
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
    `}),Ag=w({name:"CirclePlus24Icon",svgTemplate:c`
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
    `}),Cg=w({name:"CircleWavyCheck24Icon",svgTemplate:c`
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
                stroke-width="0"
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `}),Sg=w({name:"Clock24Icon",svgTemplate:c`
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
    `}),Tg=w({name:"CloudLock24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 18a3.5 3.5 0 1 0 0-7h-1c.397-1.768-.285-3.593-1.788-4.787s-3.6-1.575-5.5-1S7.397 7.232 7 9c-2.2-.088-4.155 1.326-4.666 3.373S2.898 16.527 4.9 17.4"
            />
            <path
                d="M8 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm2-1v-2a2 2 0 0 1 4 0v2"
            />
        </svg>
    `}),Mg=w({name:"Code24Icon",svgTemplate:c`
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
    `}),Ud=w({name:"Copy24Icon",svgTemplate:c`
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
    `}),Eg=w({name:"CreateFile24Icon",svgTemplate:c`
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
    `}),Ig=w({name:"DotsVertical24Icon",svgTemplate:c`
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
    `}),Bg=w({name:"Download24Icon",svgTemplate:c`
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
    `}),qg=w({name:"Edit24Icon",svgTemplate:c`
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
    `}),Lg=w({name:"Envelope24Icon",svgTemplate:c`
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
    `}),Wd=w({name:"ExternalLink24Icon",svgTemplate:c`
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
    `}),Pg=w({name:"Filter24Icon",svgTemplate:c`
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
    `}),Og=w({name:"Fire24Icon",svgTemplate:c`
        <svg
            width="14"
            height="24"
            viewBox="0 0 14 19"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 9C9 6.04 7 2 6 1C6 4.038 4.227 5.741 3 7C1.774 8.26 1 10.24 1 12C1 13.5913 1.63214 15.1174 2.75736 16.2426C3.88258 17.3679 5.4087 18 7 18C8.5913 18 10.1174 17.3679 11.2426 16.2426C12.3679 15.1174 13 13.5913 13 12C13 10.468 11.944 8.06 11 7C9.214 10 8.209 10 7 9Z"
            />
        </svg>
    `}),Dg=w({name:"FrameBolt24",svgTemplate:c`
        <svg
            width="24"
            height="24"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15 8h.01M13.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" />
            <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l4 4" />
            <path d="m14 14 1-1c.669-.643 1.45-.823 2.18-.54M19 16l-2 3h4l-2 3" />
        </svg>
    `}),Ng=w({name:"Gear24Icon",svgTemplate:c`
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
    `}),Rg=w({name:"Geometry24Icon",svgTemplate:c`
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
    `}),Fg=w({name:"GridDots24Icon",svgTemplate:c`
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
    `}),jg=w({name:"Heart24Icon",svgTemplate:c`
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
    `}),Ma=w({name:"Infinity24Icon",svgTemplate:c`
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
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `}),Vd=w({name:"Info24Icon",svgTemplate:c`
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
    `}),Hg=w({name:"LayersLinked24Icon",svgTemplate:c`
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
    `}),Ug=w({name:"LayoutGrid24Icon",svgTemplate:c`
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
    `}),Wg=w({name:"Lifebuoy24Icon",svgTemplate:c`
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
    `}),Vg=w({name:"List24Icon",svgTemplate:c`
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
    `}),zg=w({name:"ListDetails24Icon",svgTemplate:c`
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
    `}),Zg=w({name:"Loader24Icon",svgTemplate:c`
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
    `}),bs=w({name:"LoaderAnimated24Icon",svgTemplate:c`
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
    `}),Yg=w({name:"Lock24Icon",svgTemplate:c`
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
    `}),Gg=w({name:"LockOpen24Icon",svgTemplate:c`
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
    `}),Qg=w({name:"Menu24Icon",svgTemplate:c`
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
    `}),Kg=w({name:"Pamphlet24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3zm6-3v13m6-10v13" />
        </svg>
    `}),Jg=w({name:"Paper24Icon",svgTemplate:c`
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
    `}),Xg=w({name:"People24Icon",svgTemplate:c`
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
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `}),_g=w({name:"Person24Icon",svgTemplate:c`
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
    `}),e2=w({name:"Photo24Icon",svgTemplate:c`
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
    `}),t2=w({name:"Refresh24Icon",svgTemplate:c`
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
    `}),zd=w({name:"Rocket24Icon",svgTemplate:c`
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
    `}),Zd=w({name:"Search24Icon",svgTemplate:c`
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
    `}),n2=w({name:"Send24Icon",svgTemplate:c`
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
    `}),r2=w({name:"ShootingStar24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m15.5 5.5-3-1.5.5 3.5-2 2 3 .5 1.5 3 1.5-3 3-.5-2-2 .5-3.5zM4 20l7-7m-2 7 3.5-3.5M4 15l3.5-3.5"
            />
        </svg>
    `}),o2=w({name:"ShoppingCart24Icon",svgTemplate:c`
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
    `}),i2=w({name:"Social24Icon",svgTemplate:c`
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
    `}),a2=w({name:"Square24Icon",svgTemplate:c`
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
    `}),s2=w({name:"SquareCheck24Icon",svgTemplate:c`
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
    `}),l2=w({name:"Tag24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3"
            />
            <path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        </svg>
    `}),uo=w({name:"Trash24Icon",svgTemplate:c`
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
    `}),c2=w({name:"Upload24Icon",svgTemplate:c`
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
    `}),u2=w({name:"Wallet24Icon",svgTemplate:c`
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
    `}),Yd=w({name:"World24Icon",svgTemplate:c`
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
    `}),d2=w({name:"WorldUpload24Icon",svgTemplate:c`
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
    `}),h2=w({name:"X24Icon",svgTemplate:c`
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
    `}),Gd=w({name:"XCircle24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${d["toniq-icon-fill-color"].value}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"
                stroke=${d["toniq-icon-stroke-color"].value}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.707 9.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zm-5.414 2.586a1 1 0 1 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z"
                fill=${d["toniq-icon-stroke-color"].value}
            />
        </svg>
    `}),f2=w({name:"Fire48Icon",svgTemplate:c`
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
                d="M24 24c4-5.92 0-14-2-16 0 6.076-3.546 9.482-6 12-2.452 2.52-4 6.48-4 10a12 12 0 0 0 24 0c0-3.064-2.112-7.88-4-10-3.572 6-5.582 6-8 4"
            />
        </svg>
    `}),p2=w({name:"Folder48Icon",svgTemplate:c`
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
    `}),Qd=w({name:"FolderOff48Icon",svgTemplate:c`
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
    `}),m2=w({name:"Kyc48Icon",svgTemplate:c`
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
                fill=${Y["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${Y["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${Y["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),g2=w({name:"Rocket48Icon",svgTemplate:c`
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
                d="M14 28a12 12 0 0 0-6 12 12 12 0 0 0 12-6M8 26a16 16 0 0 1 14 14 12 12 0 0 0 6-10 18 18 0 0 0 12-16 6 6 0 0 0-6-6 18 18 0 0 0-16 12 12 12 0 0 0-10 6m20-8a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
            />
        </svg>
    `}),w2=w({name:"Tag48Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                d="M6 12v10.344a4 4 0 0 0 1.172 2.828l15.42 15.42a4.82 4.82 0 0 0 6.816 0l11.184-11.184a4.82 4.82 0 0 0 0-6.816l-15.42-15.42A4 4 0 0 0 22.344 6H12a6 6 0 0 0-6 6"
            />
            <circle fill="#000" cx="15" cy="15" r="2" />
        </svg>
    `}),v2=w({name:"Trophy48Icon",svgTemplate:c`
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
                d="M16 42h16m-8-8v8M14 8h20m0 0v16a10 10 0 0 1-20 0V8M6 18a4 4 0 1 0 8 0 4 4 0 0 0-8 0m28 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
            />
        </svg>
    `}),b2=w({name:"Wallet48Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-width=${d["toniq-icon-stroke-width"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M8 16v-4c0-4 4-4 4-4h20c1.2 0 2 .8 2 2v6"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M38 24v-6c0-1.2-.8-2-2-2H12s-4 0-4-4v24c0 2 2 4 4 4h24c1.2 0 2-.8 2-2v-4"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M40 24v8h-8a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z"
            />
        </svg>
    `}),Kd=w({name:"Api64Icon",svgTemplate:c`
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
    `}),y2=w({name:"CircleDashes64Icon",svgTemplate:c`
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
    `}),k2=w({name:"Rocket64Icon",svgTemplate:c`
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
    `}),x2=w({name:"CryptoBtc16Icon",svgTemplate:c`
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
    `}),ni=w({name:"CryptoBtc24Icon",svgTemplate:c`
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
    `}),$2=w({name:"CryptoCkBtc16Icon",svgTemplate:c`
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
    `}),A2=w({name:"CryptoCkBtc24Icon",svgTemplate:c`
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
    `}),Jd="0 0 58 58",Xd=qf`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDct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" width="58" height="58" />
`,C2=w({name:"CryptoIcp16Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${Jd}"
        >
            ${Xd}
        </svg>
    `}),S2=w({name:"CryptoIcp24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${Jd}"
        >
            ${Xd}
        </svg>
    `}),T2=w({name:"WalletBitfinity24Icon",svgTemplate:c`
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
    `}),M2=w({name:"WalletBitfinity64Icon",svgTemplate:c`
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
    `}),E2=w({name:"WalletLeather24Icon",svgTemplate:c`
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
    `}),I2=w({name:"WalletLeather64Icon",svgTemplate:c`
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
    `}),B2=w({name:"WalletPlug24Icon",svgTemplate:c`
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
    `}),q2=w({name:"WalletPlug64Icon",svgTemplate:c`
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
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAADWVJREFUeF7tmguQHEUZx/9f98zsK/e+XC4XQgKECKIXXhGf+ACDpSKiBEQqUL5A0QJR8LRQOVGrqKhBRSMiIlIiJaCgohGkIKIhRkA8EjEP5SFJyOsud5fL3u7OdH9Wd8/s7V0C2b3krlQyydbM7HTPzvfr//foniO8xDd6iduPgwAOKuBAE2hrmyaVWsAC9Vr6D2LLlvUAonH8TFq2tLyNBc8S5P0jIlqBrVt3j+M+L9rlwLpAQ8PhXuD/mIETwewx0b9I6cWqr++mmh68vr5ZBP5XiWgRmFMgDIHoNrVtx6cAFGq61z4aH1AAoq3108T4euVvEmN9FATHYfPmfLUP7rW0nMqCbgfQNNKHe5Xid6Kv78/V3qeadgcawBJiXFb5wwzs0Eofj76+56p5INNGtrRcAEFLAWQr+uwG8flqW+8vqr1PNe0OLIDW1iVEewDYHgPYWM0DxQDOh6DvjQEwBM3nq97eu6q9TzXtDgKohlK1bcRBBRx0gYMx4GAQfElngbbWvdUBBy4NujrgvzgNNjYvgRSjCiFo3q4FjkNv76ZqswnqGxcJX14/tg7QSi1Cf//dVd+nioY11wHd3C2WY3k2i+yUsfd/+I2rP1/YUroYgthcI/M/4h1zvzHztBnvant+pH0OuYrOI2dZW/r9/oIVZ2xeuX0JJKXNAxIIAtg9/fi2Sz546/t+Z7omffLI6xRSA5fQJcUq7N2jSc0A3spvPRYQnwN4PoFG+mtw1KeaVUHXg9gB0ObZSQVt3vMUCCUg4MGDhERy7M5GvvPhsR5EnRrUTR55JEDuOgtkG7PbU7lgWNDIfSRkKEDLBMRVl9Fl/bVCqBnAaXzadQx8FIBXMVGJV1YYsLYLN/4gsN2b78wRwaPYoNjoxPgEg7DmevDLUMyVyn8G3ci5aSsgegP4H7mULq05PtQMYAEv6AGo0xmvIRBC6TRKYRuKUSuKYRtC1QjFaTCb8WMIUYQn8vDkIFJyEIG3C1m5C4Echk8GVxCrIDHfKMSBqFRN8m1ivmnju3ZKwOu6nD71jclQQA+gO7UOMFyagb6h+RjIz0OhNB1ap+w4S1G0H6IiBJUgRAghSpD2vGiPA7kLGdmP+vRGTAm2IyPzsToS85xbVJ454Ts0iQ7iVsqD19VFXRMP4FR1es9g/ujOrQMLMDR8FCJlYqF19RGpk3KGUwlEJQvDQqCihUAigrTXI3gWRt5CaAw2oS7YDo9Gmz3aTRJVOD0YVxEQiiC7vkBXTjyAaU+t6RkuzewkG+H0iyhOQwpnpKCCHXULxCrBqMKdm2MpIvgUQpJG1u9Da+Yp1Ae9cbBMwuZYNbhzc9WDVATquoqumngADWt39hDpOAa8sP0u9GkLwI16YrRRQwQBB8VA8ozxRhVw+5Qsojn9b7Smn47V4IQ/ki/ccRInEgBX09UTD6BxXV8PwKMAGB2wcLFeMiAVQzLZL+xOKrAsAdbYJBY4BZgAafa+AQQFT8QwSKPO70VL5mk0+DshbLgbgeCAJOnQUxKi6yv0lckBwOBOY5gmIFtitO1SOGprhFk7I8zcqVFXYHiaoQRQ8Aj9aYHeemBjM2Nji8K2BoVduTg+2LjgQEirltC6g2dUQgopOYxpuQ1oCrbFKthbcJQWwDV0zcQDqFvf11Py0NkxqPH6DQWctyqPzs0hpuY1lATyvkDeJxR9QsEnlCTscVESQg/YnWL05oC1h2g8NltjXUcJKlWCr50SpAhjlzB7A0RZdUzLbkBLemOcLhMIRgG+AaM8iK7FtHjiARz75609b3+i0HnuX/KY1Rsiq8nJPP4oAkoeoeglAMweKBkg0oExUELJKAQa/2zXWDk3Qs/sEiK/BN/EAZQgpFFBCIEIvgmSoojp2XVoTm2BtMWUc4A4LigB6rqWrp14AI9evLbnmE1hp88MLfdeRxkYoXDGFmMFGDWY44InUPLNHgh9IBIaQxmNVXMU/nRUiK3NRXjslGAzBJm4YGKHc4dD6/+KKV6/jQkVBbF1gW/RtyYeQOmM1T1EsDFgX5sWZqTJxgFrdBkKoRgYRQDFgFHyjEIUeqcw7jkhxBOzi1BeCA8JCBMXIkihbJ3QkXsCGW84ToJWC4rgdS2l6yYeQPHM1T0E7DMNVsIxbhFaFwAKgXEB5x5WEb5TRNEzIDQKAeNXJ4R44BUlC8AUUCZNllMlRWhMbcbM+kdgpkpxlWBd4Hq6fhIAvHv1CiK8do/RL0simfyYFnZS6OZF5gVhrIiiNVig6LksYT7FAC5gBgwtNB54ucJtrwtBtkAyruAg2NhACofWPYqWzDOxG3ihhLj8Brrh2/tS5djrVQh5dJfwzNU/Z8Z74tk+IEPAL4LSuwGvBHih62AcPEzbD5cysCmCTcBke2iMNu4xHBgYLmjaT1kNjNtPUnjgGAXlJ9XjiBKy3k4c1vgQsl7euELRg/zYjXTjjyYewBlrFzPzFdS4DWh/Cpi6EZQeAoQGjNNrD1DxJwwA5YMLOWCoGbxzqt1DSzvKysYEB2MUBM+kTsZQ2kAAfnl8hIw2dYIpkowiXIZoz/0NM+oeh0BqUEKeczPdbBdLatlqVoC6cNlF3LLpuzisR1JuwBkc+eDId6Oszd4AkEAUuBLRnhtFpMADU4EdHeBdTTDrKUqwjQlJxjDpcjgGEknG842Mz50l0NsYwjMQYgCmZM75O/Cyll/AF2Ibgd58K936ZC3GV3hn9d34hotfq9ue+ymYZkGlnKHGuLLxEpwowHyvDQizN6A8pxIVgLcfAt48x0ExbmHig3WBuF4w8cE3SyjArzsFvr1AQMdzB6MAExzNWsORrXejOf3MKg069Q66Y6h6S0aFp+q7cffX2rhzxXd0ZugsUj6VR7cCgDXYQNAGRgzHwkggGGimLGwCPzUPPNQAENuQaUAklaPde8DOLKH79DRWHcHwYSpGt74gwJg65XE+tP7+q+/yfvYlIrcWWctWswvwwoVSLcQiMXXTUkRBhisVMHbEjZGRcwurijKAGARLYHcjeO1JDoKJI3adyYklyRSRJDx4ZIBPnp11awswAAyICBmvb1NHy/Lz/pj58h9qMTxpWzMA05GXfraJX3nfMgicBBPozEhbmcfuYJ4+UUTynYXhg+15ogSnEgzXQfecAuyutyupyWYmW3ZC5QsMpgTO+0Aznuwwi5FmXcGUyUVIqX5QCIcu7zvy1YOTBsBC+P3Jn+WGHd1Qfsr5diJ1L5Z9DCEZeesKcXZI4oLywHE/3nQkeN1JDtyYLZlVXvWOevzo1Tl4rEB22S0sShm+Z8usucswDvmPKwgmz8a3L2zmGetvQW7wHTbaVyogNtT6fzLiNiuY84osYeEY93Cq4PUngtfPL7tCJQfj3cvnpPD+DzXbeQagQyHVTX1z2s0K9bi3cbmAVYCphG5732t43vLfQnkN5UifjLQdZeMeIpZ+RX1QVkX8XQJvdwP0H88C511QHAtg2xSBUy+diueaJDzFj2pPv3/wiLYN47Z+pEgd/y343tdfiDlrrkGYanLpL/bxUSDiDBDXA8mIjwRFowrThsCrT4b++xtGxQIrVQZKBCy8qBUPzE1tTEfRef1z2x4a/5O7nuNWQIUrZDDryY+i/dkvIhKNVuI22FWmvNjAJGOUY0BcMxgFcFwj9LVD3fchoJDdQwUyYnzmvQ2rv3lKrlsd0nLXeP1+lLL2l6B1h4dfk0HL01cg1/9xKGqzo2kgxLWAK5SSAFiRAeJq0cJK1KM96N98DPz84YAwS+3JSBGLSD9757zcx8/pfOxenH32yMX9MGK/FVBWwoY5Kegdb0emeCWL6JXEInCGx5VfuUZI6oExaTOGwKTBy8+F7nlLBQAOGXQfMV0d3H3MI3tI478BgFXC7ZDFjs45qUOevhLp/JlgnuJKYVcDJHVCuXiqrBESlyEN/fgC6PsvSOLAAEMt0cy3ZO4+7pn9sHWvXQ+YAirvzgyBR+YfjWmrL4HUb4YMjwAL4Yqj0dmgHCusQtxLVd4wv6DuuGID2LvJZ/lbuuto8/fGE7JNCICyW6xtrUOUOYqbttxDMmpzL4nti4LYNUZiQ3nO4MrjVXTj4g/jhyufJHS/2Oun/YYyoQCsW9z/qhae+/dHKMgfliwQlZ/avlyIVZGUyZFnXq8uw9CMc+nExwb228J93GDiAax5eYBU332o3/JG+yZlb5tZM7CLKXENoeVSDA9cRq9A6X8egFXBmkMvROvmrwGqfg8V7GGh2IqIzqGZ0bhmd7UCm3AFWAD3Lsjh8L9dhGz/lyHCyr8AH/u8O0D8CTyEO+lsHJA8vy8gkwLAQvjdCdMxe9MKNG7dMxaMVDsrMI1Pphd/774vm2q6PmkAhn7zpvbsEesepsYtLwyA8TD+xCdP1ugbUpMGgB+c384znl1J9dtnv2AcIKzEQ/yG/1MAxzZi1jP3IDvwuhcEwPwT6sCimjS8n40nTwHfv9DH/AfPQvuzi0HhVDDc0o97ggjMawB8mjqw31PcWphMGgAbCLu7Bc697kTU9c+DUGkb583Kt0Q/FJZjOp4js9Y9idukAphEu6r+qYMAqkb1f9rwJa+A/wCC9jqbsBwz8wAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    `}),L2=w({name:"WalletStoic24Icon",svgTemplate:c`
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
    `}),P2=w({name:"WalletStoic64Icon",svgTemplate:c`
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
    `}),O2=w({name:"WalletUnisat24Icon",svgTemplate:c`
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
    `}),D2=w({name:"WalletUnisat64Icon",svgTemplate:c`
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
    `}),N2=w({name:"WalletXverse24Icon",svgTemplate:c`
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
    `}),R2=w({name:"WalletXverse64Icon",svgTemplate:c`
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
    `}),_d=w({name:"BrandDiscord24Icon",svgTemplate:c`
        <svg
            fill=${Y["toniq-icon-fill-color"]("#5865f2")}
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
    `}),e0=w({name:"BrandDistrikt24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${Y["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),t0=w({name:"BrandDscvr24Icon",svgTemplate:c`
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
    `}),F2=w({name:"BrandFacebookLogo24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${Y["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),j2=w({name:"BrandGoogleLogo24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${Y["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),H2=w({name:"BrandIcScan24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${Y["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),n0=w({name:"BrandInstagram24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${Y["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),U2=w({name:"BrandInstagramFlat24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),r0=w({name:"BrandMedium24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),W2=w({name:"BrandNftgeek24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${Y["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),o0=w({name:"BrandTelegram24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${Y["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),i0=w({name:"BrandTiktok24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${Y["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${Y["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),V2=w({name:"BrandTiktokFlat24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),a0=w({name:"BrandTwitch24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),s0=w({name:"BrandTwitter24Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),z2=w({name:"BioniqRobot100Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${Y["toniq-icon-stroke-color"]("#8A2BE2")}
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
    `}),Z2=w({name:"EntrepotLogo144Icon",svgTemplate:c`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"](String(b.brandPrimary.foregroundColor))}
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
    `}),it={"core-16":[tg,Rd,ig,ag,sg,It,lg,cg],"core-24":[ug,dg,gs,hg,fg,ws,Fd,pg,mg,gg,wg,vg,bg,yg,kg,vs,jd,xg,$g,Hd,Ag,Cg,Sg,Tg,Mg,Ud,Eg,Ig,Bg,qg,Lg,Wd,Pg,Og,Dg,Ng,Rg,Fg,jg,Ma,Vd,Hg,Ug,Wg,Vg,zg,Zg,bs,Yg,Gg,Qg,Kg,Jg,Xg,_g,e2,t2,zd,Zd,n2,r2,o2,i2,a2,s2,l2,uo,c2,u2,Yd,d2,h2,Gd],"core-48":[f2,p2,Qd,m2,g2,w2,v2,b2],"core-64":[Kd,y2,k2],cryptocurrencies:[x2,ni,$2,A2,C2,S2],"external-wallets":[T2,M2,E2,I2,B2,q2,L2,P2,O2,D2,N2,R2],"third-party-brands":[_d,e0,t0,F2,j2,H2,n0,U2,r0,W2,o0,i0,V2,a0,s0],toniq:[z2,Z2]},Y2=Er({discord:nt(void 0,""),distrikt:nt(void 0,""),dscvr:nt(void 0,""),instagram:nt(void 0,""),medium:nt(void 0,""),telegram:nt(void 0,""),tikTok:nt(void 0,""),twitch:nt(void 0,""),twitter:nt(void 0,""),website:nt(void 0,"")}),G2=Y2.defaultValue,l0={discord:_d,instagram:n0,telegram:o0,tikTok:i0,distrikt:e0,twitch:a0,dscvr:t0,medium:r0,twitter:s0,website:Yd},ec="toniq-",{defineElement:ae,defineElementNoInputs:ys}=as({assertInputs:e=>{if(!e.tagName.startsWith(ec))throw new Error(`Tag name should start with '${ec}' but got '${e.tagName}'`)}}),y=ae()({tagName:"toniq-icon",styles:f`
        :host {
            display: flex;
            ${L["vira-icon-fill-color"].name}: ${d["toniq-icon-fill-color"].value}
            ${L["vira-icon-stroke-color"].name}: ${d["toniq-icon-stroke-color"].value}
            ${L["vira-icon-stroke-width"].name}: ${d["toniq-icon-stroke-width"].value}
        }

        ${he} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return c`
            <${he.assign(e)}></${he}>
        `}});var or=(e=>(e.Danger="danger",e.Warning="warning",e.Success="success",e))(or||{});const ir=os()({tagName:"toniq-alert",hostClasses:{"toniq-alert-danger":({inputs:e})=>e.variant==="danger","toniq-alert-warning":({inputs:e})=>e.variant==="warning","toniq-alert-success":({inputs:e})=>e.variant==="success"},styles:({hostClasses:e})=>f`
        :host {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid;
            background: transparent;
            display: flex;
            gap: 8px;
        }

        ${e["toniq-alert-danger"].selector} {
            ${Li(b.alertDanger)}
        }
        ${e["toniq-alert-danger"].selector} ${y} {
            color: ${b.alertDanger.foregroundColor};
        }

        ${e["toniq-alert-warning"].selector} {
            ${Li(b.alertWarning)}
        }
        ${e["toniq-alert-warning"].selector} ${y} {
            color: ${b.alertWarning.foregroundColor};
        }

        ${e["toniq-alert-success"].selector} {
            ${Li(b.alertSuccess)}
        }
        ${e["toniq-alert-success"].selector} ${y} {
            color: ${b.alertSuccess.foregroundColor};
        }
    `,renderCallback({inputs:e}){let t;switch(e.variant){case"success":t=vs;break;case"warning":t=Vd;break;default:t=Gd;break}return c`
            <${y.assign({icon:t})}></${y}>
            <slot></slot>
        `}}),Gt=ae()({tagName:"toniq-bold-space",styles:f`
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
            ${O.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?c`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),Ea=f`8px`;var gn=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e.TextOnly="text-only",e))(gn||{}),c0=(e=>(e.Left="left",e.Right="right",e))(c0||{}),u0=(e=>(e.Pulse="pulse",e))(u0||{});const ge=ae()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-button-disabled":({inputs:e})=>!!e.disabled,"toniq-button-effect-pulse":({inputs:e})=>e.effect==="pulse"},styles:({hostClasses:e})=>f`
        :host {
            ${O.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ye};
        }

        :host(:hover) button {
            ${R(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${R(b.accentPrimaryActive)};
        }

        button {
            ${de};
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
            border-radius: ${Ea};
            ${R(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${oe.interaction},
                background-color ${oe.interaction},
                border-color ${oe.interaction};
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${R(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${R(b.pagePrimary)};
            border-color: ${b.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-text-only"].selector} button {
            color: inherit;
            background-color: transparent;
            border-color: transparent;
        }

        ${e["toniq-button-effect-pulse"].selector} button {
            animation: ${_l.buttonPulse.animationName};
            animation-iteration-count: infinite;
            animation-duration: ${oe.pulse};
            animation-timing-function: ease-in-out;
        }

        :host(.${e["toniq-button-text-only"].name}:hover) button {
            filter: brightness(85%);
        }

        ${e["toniq-button-disabled"].selector} {
            ${_t};
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

        ${_l.buttonPulse.keyFrames}
    `,renderCallback({inputs:e}){const t=e.iconPlacement??"left",n=e.icon?c`
                  <${y.assign({icon:e.icon})}
                      class="icon-template"
                  ></${y}>
              `:"",r=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"",o=we(t==="left",n),i=we(t==="right",n);return c`
            <button ?disabled=${e.disabled}>
                <slot>${o} ${r} ${i}</slot>
            </button>
        `}});function Q2(e,t,n={behavior:"smooth"}){let r=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=ks(e)[o];i==="-"&&(r*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+r,u=s.filter(h=>i==="+"?h>l:h<l).sort((h,m)=>i==="+"?h-m:m-h);let p;return u.length>0?p=u[0]:i==="+"?p=a:p=0,e.scrollTo({...n,[o==="x"?"left":"top"]:p})}function K2(e){const t=window.getComputedStyle(e),n=e.getBoundingClientRect();let r=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let v=parseFloat(m);return/%/.test(m)&&(v/=100,v*=g),v}let l=s(r,n.width),u=s(o,n.height),p=s(i,n.width),h=s(a,n.height);return{x:{before:l,after:p},y:{before:u,after:h}}}function J2(e,t,n="both"){return n==="x"&&e.right>=t.left&&e.left<=t.right||n==="y"&&e.bottom>=t.top&&e.top<=t.bottom||n==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function d0(e){let t=[];for(const n of e.children)t=t.concat(n,d0(n));return t}function X2(e,t=!0){const n=e.getBoundingClientRect(),r={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=d0(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",u=i==="x"?"scrollLeft":"scrollTop";for(const p of o){const h=p.getBoundingClientRect();if(t&&!J2(n,h,a))continue;const m=window.getComputedStyle(p);let[g,v]=m.getPropertyValue("scroll-snap-align").split(" ");typeof v>"u"&&(v=g);const $=i==="x"?v:g,x=h[s]-n[s]+e[u];switch($){case"none":break;case"start":r[i].start.push(x);break;case"center":r[i].center.push(x+h[l]/2);break;case"end":r[i].end.push(x+h[l]);break}}}return r}function ks(e){const t=e.getBoundingClientRect(),n=K2(e),r=X2(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:tc([...r.x.start.map(a=>a-n.x.before),...r.x.center.map(a=>a-t.width/2),...r.x.end.map(a=>a-t.width+n.x.after)].map(i(0,o.x))),y:tc([...r.y.start.map(a=>a-n.y.before),...r.y.center.map(a=>a-t.height/2),...r.y.end.map(a=>a-t.height+n.y.after)].map(i(0,o.y)))}}function tc(e){return Array.from(new Set(e))}const ho="templates-container",_2=4e3;var fo=(e=>(e.Default="default",e.Banner="banner",e))(fo||{});const ye=ae()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner","toniq-carousel-offset-arrows":({inputs:e})=>!!e.offsetArrows},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>f`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${Wm(`.${ho}`)}

        .${T(ho)} {
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
            transition: ${oe.pretty};
            top: 0;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 200;
            background: linear-gradient(
                var(--background-degrees),
                ${b.pagePrimary.backgroundColor} 0%,
                rgba(255, 255, 255, 0) 100%
            );
            will-change: visibility;
        }

        ${e["toniq-carousel-banner-variant"].selector} .arrow {
            background: none;
        }

        ${e["toniq-carousel-offset-arrows"].selector} {
            overflow-y: unset;
            overflow: visible;
        }

        ${e["toniq-carousel-offset-arrows"].selector} .arrow ${y} {
            margin: 0 20px 0 -20px;
        }

        ${e["toniq-carousel-offset-arrows"].selector} .arrow.right ${y} {
            margin: 0 -20px 0 20px;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow ${y} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 12px;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            transition: ${oe.interaction};
            border: 1px solid ${b.dividerFaint.foregroundColor};
            ${R(b.pagePrimary)};
        }

        .arrow.hidden ${y} {
            pointer-events: none;
        }

        .arrow ${y}:hover {
            border-color: ${b.pageInteractionHover.foregroundColor};
            ${R(b.pageInteractionHover)};
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
        }

        @media (max-width: 700px) {
            ${e["toniq-carousel-offset-arrows"].selector} .arrow ${y} {
                margin: 0 12px 0 -12px;
            }

            ${e["toniq-carousel-offset-arrows"].selector} .arrow.right ${y} {
                margin: 0 -12px 0 12px;
            }
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:n,host:r}){e.enableAutomaticCycling&&t.rotationIntervalId==null?n({rotationIntervalId:window.setInterval(()=>{Oi({host:r,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||_2)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),n({rotationIntervalId:void 0}));const o=nc(t.scrollSnapPositions,0),i=nc(t.scrollSnapPositions,-1);return c`
            <div>
                <div
                    class="arrow left ${fe({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${y.assign({icon:gs})}
                        ${k("click",()=>{Oi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:r})})}
                    ></${y}>
                </div>
                <div
                    ${Xt(()=>{n({scrollSnapPositions:ks(Ia(r)).x})})}
                    class=${ho}
                    ${k("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};n({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>c`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${fe({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${y.assign({icon:ws})}
                        ${k("click",()=>{Oi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:r})})}
                    ></${y}>
                </div>
            </div>
        `}});function nc(e,t){const n=t>=0?1:-1,r=t<0?e.length+t:t,o=r+n,i=e[r],a=e[o];if(!(i==null||a==null))return(i+a)/2+n*20}function Ia(e){const t=e.shadowRoot.querySelector(`.${ho}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function Oi({host:e,direction:t,allowWrapping:n,blockIfHovering:r}){if(r&&e.matches(":hover"))return;const o=Ia(e),i=o.clientWidth,a=ks(Ia(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,u=o.scrollLeft>=l-10,p=o.scrollLeft<=s+10;if(t==="right"&&u)n&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&p)n&&o.scrollTo({behavior:"smooth",left:l});else{const h=ew(e,t),m=rc(o.scrollLeft,a,!1),g=t==="right"?1:-1,v=(o.clientWidth-h*3)*g,$=rc((m||0)+v,a,!0);t==="right"&&$>m?o.scrollTo({behavior:"smooth",left:$}):t==="left"&&$<m?o.scrollTo({behavior:"smooth",left:$}):Q2(o,t)}}function ew(e,t){const n=`.arrow.${t}`,r=e.shadowRoot.querySelector(n);if(!r)throw new Error("Failed to find arrow element for calculating its size.");return r.clientWidth}function rc(e,t,n){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!n||i<=e)?i:o},1/0)}const kt=ae()({tagName:"toniq-checkbox",events:{checkedChange:ie()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Xe("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Xe("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Xe("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Xe("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Xe("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>f`
        :host {
            ${O.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${oe.interaction},
                background-color ${oe.interaction},
                opacity ${oe.interaction};
            border-radius: 8px;
        }

        button {
            ${de};
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
            ${Ye};
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
            ${_t};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=c`
            <span class="checkbox ${e.checked?"checked":""}">
                <${y.assign({icon:vs})}
                    class="check-mark ${fe({hidden:!e.checked})}"
                ></${y}>
            </span>
        `,o=c`
            <slot
                class=${fe({label:!0,checked:e.checked})}
            >
                <span
                    class=${fe({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return c`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${k("click",()=>{const i=!e.checked;t(new n.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${r} ${o}
            </button>
        `}});var fn=(e=>(e.Default="default",e.Secondary="secondary",e.Success="success",e.Warning="warning",e.Danger="danger",e.Outline="outline",e))(fn||{});const Di=ae()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary","toniq-chip-success":({inputs:e})=>e.variant==="success","toniq-chip-warning":({inputs:e})=>e.variant==="warning","toniq-chip-danger":({inputs:e})=>e.variant==="danger","toniq-chip-outline":({inputs:e})=>e.variant==="outline"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>f`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${O.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${R(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${R(b.accentSecondary)};
        }

        ${e["toniq-chip-warning"].selector} {
            ${R(b.colorWarning)};
        }

        ${e["toniq-chip-danger"].selector} {
            ${R(b.colorDanger)};
        }

        ${e["toniq-chip-success"].selector} {
            ${R(b.colorSuccess)};
        }

        ${e["toniq-chip-outline"].selector} {
            box-sizing: border-box;
            ${R(b.pagePrimary)};
            border: 2px solid ${b.accentPrimary.backgroundColor};
        }
    `,renderCallback({inputs:e}){const t=e.icon?c`
                  <${y.assign({icon:e.icon})}></${y}>
              `:"";return c`
            ${t}
            <slot>${e.text}</slot>
        `}});class tn extends Error{}class tw extends tn{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class nw extends tn{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class rw extends tn{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class wn extends tn{}class h0 extends tn{constructor(t){super(`Invalid unit ${t}`)}}class Se extends tn{}class xt extends tn{constructor(){super("Zone is an abstract class")}}const A="numeric",tt="short",Le="long",Ro={year:A,month:A,day:A},f0={year:A,month:tt,day:A},ow={year:A,month:tt,day:A,weekday:tt},p0={year:A,month:Le,day:A},m0={year:A,month:Le,day:A,weekday:Le},g0={hour:A,minute:A},w0={hour:A,minute:A,second:A},v0={hour:A,minute:A,second:A,timeZoneName:tt},b0={hour:A,minute:A,second:A,timeZoneName:Le},y0={hour:A,minute:A,hourCycle:"h23"},k0={hour:A,minute:A,second:A,hourCycle:"h23"},x0={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:tt},$0={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:Le},A0={year:A,month:A,day:A,hour:A,minute:A},C0={year:A,month:A,day:A,hour:A,minute:A,second:A},S0={year:A,month:tt,day:A,hour:A,minute:A},T0={year:A,month:tt,day:A,hour:A,minute:A,second:A},iw={year:A,month:tt,day:A,weekday:tt,hour:A,minute:A},M0={year:A,month:Le,day:A,hour:A,minute:A,timeZoneName:tt},E0={year:A,month:Le,day:A,hour:A,minute:A,second:A,timeZoneName:tt},I0={year:A,month:Le,day:A,weekday:Le,hour:A,minute:A,timeZoneName:Le},B0={year:A,month:Le,day:A,weekday:Le,hour:A,minute:A,second:A,timeZoneName:Le};class Lr{get type(){throw new xt}get name(){throw new xt}get ianaName(){return this.name}get isUniversal(){throw new xt}offsetName(t,n){throw new xt}formatOffset(t,n){throw new xt}offset(t){throw new xt}equals(t){throw new xt}get isValid(){throw new xt}}let Ni=null;class ri extends Lr{static get instance(){return Ni===null&&(Ni=new ri),Ni}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return j0(t,n,r)}formatOffset(t,n){return ar(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let po={};function aw(e){return po[e]||(po[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),po[e]}const sw={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function lw(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,o,i,a,s,l,u,p]=r;return[a,o,i,s,l,u,p]}function cw(e,t){const n=e.formatToParts(t),r=[];for(let o=0;o<n.length;o++){const{type:i,value:a}=n[o],s=sw[i];i==="era"?r[s]=a:q(s)||(r[s]=parseInt(a,10))}return r}let Gr={};class wt extends Lr{static create(t){return Gr[t]||(Gr[t]=new wt(t)),Gr[t]}static resetCache(){Gr={},po={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=wt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return j0(t,n,r,this.name)}formatOffset(t,n){return ar(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=aw(this.name);let[o,i,a,s,l,u,p]=r.formatToParts?cw(r,n):lw(r,n);s==="BC"&&(o=-Math.abs(o)+1);const m=ii({year:o,month:i,day:a,hour:l===24?0:l,minute:u,second:p,millisecond:0});let g=+n;const v=g%1e3;return g-=v>=0?v:1e3+v,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let oc={};function uw(e,t={}){const n=JSON.stringify([e,t]);let r=oc[n];return r||(r=new Intl.ListFormat(e,t),oc[n]=r),r}let Ba={};function qa(e,t={}){const n=JSON.stringify([e,t]);let r=Ba[n];return r||(r=new Intl.DateTimeFormat(e,t),Ba[n]=r),r}let La={};function dw(e,t={}){const n=JSON.stringify([e,t]);let r=La[n];return r||(r=new Intl.NumberFormat(e,t),La[n]=r),r}let Pa={};function hw(e,t={}){const{base:n,...r}=t,o=JSON.stringify([e,r]);let i=Pa[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Pa[o]=i),i}let Qn=null;function fw(){return Qn||(Qn=new Intl.DateTimeFormat().resolvedOptions().locale,Qn)}let ic={};function pw(e){let t=ic[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,ic[e]=t}return t}function mw(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,o;try{r=qa(e).resolvedOptions(),o=e}catch{const l=e.substring(0,n);r=qa(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=r;return[o,i,a]}}function gw(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function ww(e){const t=[];for(let n=1;n<=12;n++){const r=E.utc(2009,n,1);t.push(e(r))}return t}function vw(e){const t=[];for(let n=1;n<=7;n++){const r=E.utc(2016,11,13+n);t.push(e(r))}return t}function Qr(e,t,n,r){const o=e.listingMode();return o==="error"?null:o==="en"?n(t):r(t)}function bw(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class yw{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:o,floor:i,...a}=r;if(!n||Object.keys(a).length>0){const s={useGrouping:!1,...r};r.padTo>0&&(s.minimumIntegerDigits=r.padTo),this.inf=dw(t,s)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Cs(t,3);return pe(n,this.padTo)}}}class kw{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&wt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=qa(n,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class xw{constructor(t,n,r){this.opts={style:"long",...r},!n&&R0()&&(this.rtf=hw(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Uw(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const $w={firstDay:1,minimalDays:4,weekend:[6,7]};class Q{static fromOpts(t){return Q.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,o,i=!1){const a=t||se.defaultLocale,s=a||(i?"en-US":fw()),l=n||se.defaultNumberingSystem,u=r||se.defaultOutputCalendar,p=Oa(o)||se.defaultWeekSettings;return new Q(s,l,u,p,a)}static resetCache(){Qn=null,Ba={},La={},Pa={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:o}={}){return Q.create(t,n,r,o)}constructor(t,n,r,o,i){const[a,s,l]=mw(t);this.locale=a,this.numberingSystem=n||s||null,this.outputCalendar=r||l||null,this.weekSettings=o,this.intl=gw(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=bw(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Q.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Oa(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Qr(this,t,W0,()=>{const r=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=ww(i=>this.extract(i,r,"month"))),this.monthsCache[o][t]})}weekdays(t,n=!1){return Qr(this,t,Z0,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=n?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=vw(i=>this.extract(i,r,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return Qr(this,void 0,()=>Y0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[E.utc(2016,11,13,9),E.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Qr(this,t,G0,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[E.utc(-40,1,1),E.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const o=this.dtFormatter(t,n),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===r);return a?a.value:null}numberFormatter(t={}){return new yw(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new kw(t,this.intl,n)}relFormatter(t={}){return new xw(this.intl,this.isEnglish(),t)}listFormatter(t={}){return uw(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:F0()?pw(this.locale):$w}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Ri=null;class Ae extends Lr{static get utcInstance(){return Ri===null&&(Ri=new Ae(0)),Ri}static instance(t){return t===0?Ae.utcInstance:new Ae(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new Ae(ai(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ar(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ar(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return ar(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Aw extends Lr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Ct(e,t){if(q(e)||e===null)return t;if(e instanceof Lr)return e;if(Tw(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?ri.instance:n==="utc"||n==="gmt"?Ae.utcInstance:Ae.parseSpecifier(n)||wt.create(e)}else return Qt(e)?Ae.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Aw(e)}let ac=()=>Date.now(),sc="system",lc=null,cc=null,uc=null,dc=60,hc,fc=null;class se{static get now(){return ac}static set now(t){ac=t}static set defaultZone(t){sc=t}static get defaultZone(){return Ct(sc,ri.instance)}static get defaultLocale(){return lc}static set defaultLocale(t){lc=t}static get defaultNumberingSystem(){return cc}static set defaultNumberingSystem(t){cc=t}static get defaultOutputCalendar(){return uc}static set defaultOutputCalendar(t){uc=t}static get defaultWeekSettings(){return fc}static set defaultWeekSettings(t){fc=Oa(t)}static get twoDigitCutoffYear(){return dc}static set twoDigitCutoffYear(t){dc=t%100}static get throwOnInvalid(){return hc}static set throwOnInvalid(t){hc=t}static resetCaches(){Q.resetCache(),wt.resetCache()}}class et{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const q0=[0,31,59,90,120,151,181,212,243,273,304,334],L0=[0,31,60,91,121,152,182,213,244,274,305,335];function Ue(e,t){return new et("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function xs(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const o=r.getUTCDay();return o===0?7:o}function P0(e,t,n){return n+(Pr(e)?L0:q0)[t-1]}function O0(e,t){const n=Pr(e)?L0:q0,r=n.findIndex(i=>i<t),o=t-n[r];return{month:r+1,day:o}}function $s(e,t){return(e-t+7)%7+1}function Fo(e,t=4,n=1){const{year:r,month:o,day:i}=e,a=P0(r,o,i),s=$s(xs(r,o,i),n);let l=Math.floor((a-s+14-t)/7),u;return l<1?(u=r-1,l=Ar(u,t,n)):l>Ar(r,t,n)?(u=r+1,l=1):u=r,{weekYear:u,weekNumber:l,weekday:s,...si(e)}}function pc(e,t=4,n=1){const{weekYear:r,weekNumber:o,weekday:i}=e,a=$s(xs(r,1,t),n),s=xn(r);let l=o*7+i-a-7+t,u;l<1?(u=r-1,l+=xn(u)):l>s?(u=r+1,l-=xn(r)):u=r;const{month:p,day:h}=O0(u,l);return{year:u,month:p,day:h,...si(e)}}function Fi(e){const{year:t,month:n,day:r}=e,o=P0(t,n,r);return{year:t,ordinal:o,...si(e)}}function mc(e){const{year:t,ordinal:n}=e,{month:r,day:o}=O0(t,n);return{year:t,month:r,day:o,...si(e)}}function gc(e,t){if(!q(e.localWeekday)||!q(e.localWeekNumber)||!q(e.localWeekYear)){if(!q(e.weekday)||!q(e.weekNumber)||!q(e.weekYear))throw new wn("Cannot mix locale-based week fields with ISO-based week fields");return q(e.localWeekday)||(e.weekday=e.localWeekday),q(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),q(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Cw(e,t=4,n=1){const r=oi(e.weekYear),o=We(e.weekNumber,1,Ar(e.weekYear,t,n)),i=We(e.weekday,1,7);return r?o?i?!1:Ue("weekday",e.weekday):Ue("week",e.weekNumber):Ue("weekYear",e.weekYear)}function Sw(e){const t=oi(e.year),n=We(e.ordinal,1,xn(e.year));return t?n?!1:Ue("ordinal",e.ordinal):Ue("year",e.year)}function D0(e){const t=oi(e.year),n=We(e.month,1,12),r=We(e.day,1,jo(e.year,e.month));return t?n?r?!1:Ue("day",e.day):Ue("month",e.month):Ue("year",e.year)}function N0(e){const{hour:t,minute:n,second:r,millisecond:o}=e,i=We(t,0,23)||t===24&&n===0&&r===0&&o===0,a=We(n,0,59),s=We(r,0,59),l=We(o,0,999);return i?a?s?l?!1:Ue("millisecond",o):Ue("second",r):Ue("minute",n):Ue("hour",t)}function q(e){return typeof e>"u"}function Qt(e){return typeof e=="number"}function oi(e){return typeof e=="number"&&e%1===0}function Tw(e){return typeof e=="string"}function Mw(e){return Object.prototype.toString.call(e)==="[object Date]"}function R0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function F0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Ew(e){return Array.isArray(e)?e:[e]}function wc(e,t,n){if(e.length!==0)return e.reduce((r,o)=>{const i=[t(o),o];return r&&n(r[0],i[0])===r[0]?r:i},null)[1]}function Iw(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function En(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Oa(e){if(e==null)return null;if(typeof e!="object")throw new Se("Week settings must be an object");if(!We(e.firstDay,1,7)||!We(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!We(t,1,7)))throw new Se("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function We(e,t,n){return oi(e)&&e>=t&&e<=n}function Bw(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function At(e){if(!(q(e)||e===null||e===""))return parseInt(e,10)}function jt(e){if(!(q(e)||e===null||e===""))return parseFloat(e)}function As(e){if(!(q(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Cs(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function Pr(e){return e%4===0&&(e%100!==0||e%400===0)}function xn(e){return Pr(e)?366:365}function jo(e,t){const n=Bw(t-1,12)+1,r=e+(t-n)/12;return n===2?Pr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function ii(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function vc(e,t,n){return-$s(xs(e,1,t),n)+t-1}function Ar(e,t=4,n=1){const r=vc(e,t,n),o=vc(e+1,t,n);return(xn(e)-r+o)/7}function Da(e){return e>99?e:e>se.twoDigitCutoffYear?1900+e:2e3+e}function j0(e,t,n,r=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(n,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function ai(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,o=n<0||Object.is(n,-0)?-r:r;return n*60+o}function H0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Se(`Invalid unit value ${e}`);return t}function Ho(e,t){const n={};for(const r in e)if(En(e,r)){const o=e[r];if(o==null)continue;n[t(r)]=H0(o)}return n}function ar(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${pe(n,2)}:${pe(r,2)}`;case"narrow":return`${o}${n}${r>0?`:${r}`:""}`;case"techie":return`${o}${pe(n,2)}${pe(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function si(e){return Iw(e,["hour","minute","second","millisecond"])}const qw=["January","February","March","April","May","June","July","August","September","October","November","December"],U0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Lw=["J","F","M","A","M","J","J","A","S","O","N","D"];function W0(e){switch(e){case"narrow":return[...Lw];case"short":return[...U0];case"long":return[...qw];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const V0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],z0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Pw=["M","T","W","T","F","S","S"];function Z0(e){switch(e){case"narrow":return[...Pw];case"short":return[...z0];case"long":return[...V0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Y0=["AM","PM"],Ow=["Before Christ","Anno Domini"],Dw=["BC","AD"],Nw=["B","A"];function G0(e){switch(e){case"narrow":return[...Nw];case"short":return[...Dw];case"long":return[...Ow];default:return null}}function Rw(e){return Y0[e.hour<12?0:1]}function Fw(e,t){return Z0(t)[e.weekday-1]}function jw(e,t){return W0(t)[e.month-1]}function Hw(e,t){return G0(t)[e.year<0?0:1]}function Uw(e,t,n="always",r=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&i){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,u=o[e],p=r?l?u[1]:u[2]||u[1]:l?o[e][0]:e;return a?`${s} ${p} ago`:`in ${s} ${p}`}function bc(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const Ww={D:Ro,DD:f0,DDD:p0,DDDD:m0,t:g0,tt:w0,ttt:v0,tttt:b0,T:y0,TT:k0,TTT:x0,TTTT:$0,f:A0,ff:S0,fff:M0,ffff:I0,F:C0,FF:T0,FFF:E0,FFFF:B0};class $e{static create(t,n={}){return new $e(t,n)}static parseFormat(t){let n=null,r="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),n=null,r="",o=!o):o||s===n?r+=s:(r.length>0&&i.push({literal:/^\s+$/.test(r),val:r}),r=s,n=s)}return r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),i}static macroTokenToFormatOpts(t){return Ww[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return pe(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,v)=>this.loc.extract(t,g,v),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>r?Rw(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,v)=>r?jw(t,g):i(v?{month:g}:{month:g,day:"numeric"},"month"),u=(g,v)=>r?Fw(t,g):i(v?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),p=g=>{const v=$e.macroTokenToFormatOpts(g);return v?this.formatWithSystemDefault(t,v):g},h=g=>r?Hw(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return p(g)}};return bc($e.parseFormat(n),m)}formatDurationFromString(t,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>u=>{const p=r(u);return p?this.num(l.get(p),u.length):u},i=$e.parseFormat(n),a=i.reduce((l,{literal:u,val:p})=>u?l:l.concat(p),[]),s=t.shiftTo(...a.map(r).filter(l=>l));return bc(i,o(s))}}const Q0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Pn(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function On(...e){return t=>e.reduce(([n,r,o],i)=>{const[a,s,l]=i(t,o);return[{...n,...a},s||r,l]},[{},null,1]).slice(0,2)}function Dn(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const o=n.exec(e);if(o)return r(o)}return[null,null]}function K0(...e){return(t,n)=>{const r={};let o;for(o=0;o<e.length;o++)r[e[o]]=At(t[n+o]);return[r,null,n+o]}}const J0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Vw=`(?:${J0.source}?(?:\\[(${Q0.source})\\])?)?`,Ss=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,X0=RegExp(`${Ss.source}${Vw}`),Ts=RegExp(`(?:T${X0.source})?`),zw=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Zw=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Yw=/(\d{4})-?(\d{3})/,Gw=K0("weekYear","weekNumber","weekDay"),Qw=K0("year","ordinal"),Kw=/(\d{4})-(\d\d)-(\d\d)/,_0=RegExp(`${Ss.source} ?(?:${J0.source}|(${Q0.source}))?`),Jw=RegExp(`(?: ${_0.source})?`);function $n(e,t,n){const r=e[t];return q(r)?n:At(r)}function Xw(e,t){return[{year:$n(e,t),month:$n(e,t+1,1),day:$n(e,t+2,1)},null,t+3]}function Nn(e,t){return[{hours:$n(e,t,0),minutes:$n(e,t+1,0),seconds:$n(e,t+2,0),milliseconds:As(e[t+3])},null,t+4]}function Or(e,t){const n=!e[t]&&!e[t+1],r=ai(e[t+1],e[t+2]),o=n?null:Ae.instance(r);return[{},o,t+3]}function Dr(e,t){const n=e[t]?wt.create(e[t]):null;return[{},n,t+1]}const _w=RegExp(`^T?${Ss.source}$`),e4=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function t4(e){const[t,n,r,o,i,a,s,l,u]=e,p=t[0]==="-",h=l&&l[0]==="-",m=(g,v=!1)=>g!==void 0&&(v||g&&p)?-g:g;return[{years:m(jt(n)),months:m(jt(r)),weeks:m(jt(o)),days:m(jt(i)),hours:m(jt(a)),minutes:m(jt(s)),seconds:m(jt(l),l==="-0"),milliseconds:m(As(u),h)}]}const n4={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ms(e,t,n,r,o,i,a){const s={year:t.length===2?Da(At(t)):At(t),month:U0.indexOf(n)+1,day:At(r),hour:At(o),minute:At(i)};return a&&(s.second=At(a)),e&&(s.weekday=e.length>3?V0.indexOf(e)+1:z0.indexOf(e)+1),s}const r4=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function o4(e){const[,t,n,r,o,i,a,s,l,u,p,h]=e,m=Ms(t,o,r,n,i,a,s);let g;return l?g=n4[l]:u?g=0:g=ai(p,h),[m,new Ae(g)]}function i4(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const a4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,s4=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,l4=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function yc(e){const[,t,n,r,o,i,a,s]=e;return[Ms(t,o,r,n,i,a,s),Ae.utcInstance]}function c4(e){const[,t,n,r,o,i,a,s]=e;return[Ms(t,s,n,r,o,i,a),Ae.utcInstance]}const u4=Pn(zw,Ts),d4=Pn(Zw,Ts),h4=Pn(Yw,Ts),f4=Pn(X0),eh=On(Xw,Nn,Or,Dr),p4=On(Gw,Nn,Or,Dr),m4=On(Qw,Nn,Or,Dr),g4=On(Nn,Or,Dr);function w4(e){return Dn(e,[u4,eh],[d4,p4],[h4,m4],[f4,g4])}function v4(e){return Dn(i4(e),[r4,o4])}function b4(e){return Dn(e,[a4,yc],[s4,yc],[l4,c4])}function y4(e){return Dn(e,[e4,t4])}const k4=On(Nn);function x4(e){return Dn(e,[_w,k4])}const $4=Pn(Kw,Jw),A4=Pn(_0),C4=On(Nn,Or,Dr);function S4(e){return Dn(e,[$4,eh],[A4,C4])}const kc="Invalid Duration",th={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},T4={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...th},De=146097/400,ln=146097/4800,M4={years:{quarters:4,months:12,weeks:De/7,days:De,hours:De*24,minutes:De*24*60,seconds:De*24*60*60,milliseconds:De*24*60*60*1e3},quarters:{months:3,weeks:De/28,days:De/4,hours:De*24/4,minutes:De*24*60/4,seconds:De*24*60*60/4,milliseconds:De*24*60*60*1e3/4},months:{weeks:ln/7,days:ln,hours:ln*24,minutes:ln*24*60,seconds:ln*24*60*60,milliseconds:ln*24*60*60*1e3},...th},Zt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],E4=Zt.slice(0).reverse();function $t(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new W(r)}function nh(e,t){let n=t.milliseconds??0;for(const r of E4.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function xc(e,t){const n=nh(e,t)<0?-1:1;Zt.reduceRight((r,o)=>{if(q(t[o]))return r;if(r){const i=t[r]*n,a=e[o][r],s=Math.floor(i/a);t[o]+=s*n,t[r]-=s*a*n}return o},null),Zt.reduce((r,o)=>{if(q(t[o]))return r;if(r){const i=t[r]%1;t[r]-=i,t[o]+=i*e[r][o]}return o},null)}function I4(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class W{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?M4:T4;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||Q.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return W.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new Se(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new W({values:Ho(t,W.normalizeUnit),loc:Q.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Qt(t))return W.fromMillis(t);if(W.isDuration(t))return t;if(typeof t=="object")return W.fromObject(t);throw new Se(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=y4(t);return r?W.fromObject(r,n):W.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=x4(t);return r?W.fromObject(r,n):W.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Se("need to specify a reason the Duration is invalid");const r=t instanceof et?t:new et(t,n);if(se.throwOnInvalid)throw new rw(r);return new W({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new h0(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?$e.create(this.loc,r).formatDurationFromString(this,t):kc}toHuman(t={}){if(!this.isValid)return kc;const n=Zt.map(r=>{const o=this.values[r];return q(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(o)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Cs(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},E.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?nh(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t),r={};for(const o of Zt)(En(n.values,o)||En(this.values,o))&&(r[o]=n.get(o)+this.get(o));return $t(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=H0(t(this.values[r],r));return $t(this,{values:n},!0)}get(t){return this[W.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...Ho(t,W.normalizeUnit)};return $t(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:o,conversionAccuracy:r};return $t(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return xc(this.matrix,t),$t(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=I4(this.normalize().shiftToAll().toObject());return $t(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>W.normalizeUnit(a));const n={},r={},o=this.toObject();let i;for(const a of Zt)if(t.indexOf(a)>=0){i=a;let s=0;for(const u in r)s+=this.matrix[u][a]*r[u],r[u]=0;Qt(o[a])&&(s+=o[a]);const l=Math.trunc(s);n[a]=l,r[a]=(s*1e3-l*1e3)/1e3}else Qt(o[a])&&(r[a]=o[a]);for(const a in r)r[a]!==0&&(n[i]+=a===i?r[a]:r[a]/this.matrix[i][a]);return xc(this.matrix,n),$t(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return $t(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,o){return r===void 0||r===0?o===void 0||o===0:r===o}for(const r of Zt)if(!n(this.values[r],t.values[r]))return!1;return!0}}const cn="Invalid Interval";function B4(e,t){return!e||!e.isValid?ue.invalid("missing or invalid start"):!t||!t.isValid?ue.invalid("missing or invalid end"):t<e?ue.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ue{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Se("need to specify a reason the Interval is invalid");const r=t instanceof et?t:new et(t,n);if(se.throwOnInvalid)throw new nw(r);return new ue({invalid:r})}static fromDateTimes(t,n){const r=Un(t),o=Un(n),i=B4(r,o);return i??new ue({start:r,end:o})}static after(t,n){const r=W.fromDurationLike(n),o=Un(t);return ue.fromDateTimes(o,o.plus(r))}static before(t,n){const r=W.fromDurationLike(n),o=Un(t);return ue.fromDateTimes(o.minus(r),o)}static fromISO(t,n){const[r,o]=(t||"").split("/",2);if(r&&o){let i,a;try{i=E.fromISO(r,n),a=i.isValid}catch{a=!1}let s,l;try{s=E.fromISO(o,n),l=s.isValid}catch{l=!1}if(a&&l)return ue.fromDateTimes(i,s);if(a){const u=W.fromISO(o,n);if(u.isValid)return ue.after(i,u)}else if(l){const u=W.fromISO(r,n);if(u.isValid)return ue.before(s,u)}}return ue.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let o;return n!=null&&n.useLocaleWeeks?o=this.end.reconfigure({locale:r.locale}):o=this.end,o=o.startOf(t,n),Math.floor(o.diff(r,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?ue.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Un).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),r=[];let{s:o}=this,i=0;for(;o<this.e;){const a=n[i]||this.e,s=+a>+this.e?this.e:a;r.push(ue.fromDateTimes(o,s)),o=s,i+=1}return r}splitBy(t){const n=W.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,o=1,i;const a=[];for(;r<this.e;){const s=this.start.plus(n.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ue.fromDateTimes(r,i)),r=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:ue.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return ue.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,u)=>l.time-u.time);for(const l of s)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&o.push(ue.fromDateTimes(n,l.time)),n=null);return ue.merge(o)}difference(...t){return ue.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:cn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Ro,n={}){return this.isValid?$e.create(this.s.loc.clone(n),t).formatInterval(this):cn}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:cn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:cn}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:cn}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:cn}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):W.invalid(this.invalidReason)}mapEndpoints(t){return ue.fromDateTimes(t(this.s),t(this.e))}}class Kn{static hasDST(t=se.defaultZone){const n=E.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return wt.isValidZone(t)}static normalizeZone(t){return Ct(t,se.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||Q.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||Q.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||Q.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Q.create(n,r,i)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Q.create(n,r,i)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||Q.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||Q.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Q.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return Q.create(n,null,"gregory").eras(t)}static features(){return{relative:R0(),localeWeek:F0()}}}function $c(e,t){const n=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(W.fromMillis(r).as("days"))}function q4(e,t,n){const r=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const p=$c(l,u);return(p-p%7)/7}],["days",$c]],o={},i=e;let a,s;for(const[l,u]of r)n.indexOf(l)>=0&&(a=l,o[l]=u(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function L4(e,t,n,r){let[o,i,a,s]=q4(e,t,n);const l=t-o,u=n.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);u.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const p=W.fromObject(i,r);return u.length>0?W.fromMillis(l,r).shiftTo(...u).plus(p):p}const Es={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ac={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},P4=Es.hanidec.replace(/[\[|\]]/g,"").split("");function O4(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Es.hanidec)!==-1)t+=P4.indexOf(e[n]);else for(const o in Ac){const[i,a]=Ac[o];r>=i&&r<=a&&(t+=r-i)}}return parseInt(t,10)}else return t}function Qe({numberingSystem:e},t=""){return new RegExp(`${Es[e||"latn"]}${t}`)}const D4="missing Intl.DateTimeFormat.formatToParts support";function z(e,t=n=>n){return{regex:e,deser:([n])=>t(O4(n))}}const N4=String.fromCharCode(160),rh=`[ ${N4}]`,oh=new RegExp(rh,"g");function R4(e){return e.replace(/\./g,"\\.?").replace(oh,rh)}function Cc(e){return e.replace(/\./g,"").replace(oh," ").toLowerCase()}function Ke(e,t){return e===null?null:{regex:RegExp(e.map(R4).join("|")),deser:([n])=>e.findIndex(r=>Cc(n)===Cc(r))+t}}function Sc(e,t){return{regex:e,deser:([,n,r])=>ai(n,r),groups:t}}function Kr(e){return{regex:e,deser:([t])=>t}}function F4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function j4(e,t){const n=Qe(t),r=Qe(t,"{2}"),o=Qe(t,"{3}"),i=Qe(t,"{4}"),a=Qe(t,"{6}"),s=Qe(t,"{1,2}"),l=Qe(t,"{1,3}"),u=Qe(t,"{1,6}"),p=Qe(t,"{1,9}"),h=Qe(t,"{2,4}"),m=Qe(t,"{4,6}"),g=x=>({regex:RegExp(F4(x.val)),deser:([C])=>C,literal:!0}),$=(x=>{if(e.literal)return g(x);switch(x.val){case"G":return Ke(t.eras("short"),0);case"GG":return Ke(t.eras("long"),0);case"y":return z(u);case"yy":return z(h,Da);case"yyyy":return z(i);case"yyyyy":return z(m);case"yyyyyy":return z(a);case"M":return z(s);case"MM":return z(r);case"MMM":return Ke(t.months("short",!0),1);case"MMMM":return Ke(t.months("long",!0),1);case"L":return z(s);case"LL":return z(r);case"LLL":return Ke(t.months("short",!1),1);case"LLLL":return Ke(t.months("long",!1),1);case"d":return z(s);case"dd":return z(r);case"o":return z(l);case"ooo":return z(o);case"HH":return z(r);case"H":return z(s);case"hh":return z(r);case"h":return z(s);case"mm":return z(r);case"m":return z(s);case"q":return z(s);case"qq":return z(r);case"s":return z(s);case"ss":return z(r);case"S":return z(l);case"SSS":return z(o);case"u":return Kr(p);case"uu":return Kr(s);case"uuu":return z(n);case"a":return Ke(t.meridiems(),0);case"kkkk":return z(i);case"kk":return z(h,Da);case"W":return z(s);case"WW":return z(r);case"E":case"c":return z(n);case"EEE":return Ke(t.weekdays("short",!1),1);case"EEEE":return Ke(t.weekdays("long",!1),1);case"ccc":return Ke(t.weekdays("short",!0),1);case"cccc":return Ke(t.weekdays("long",!0),1);case"Z":case"ZZ":return Sc(new RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case"ZZZ":return Sc(new RegExp(`([+-]${s.source})(${r.source})?`),2);case"z":return Kr(/[a-z_+-/]{1,256}?/i);case" ":return Kr(/[^\S\n\r]/);default:return g(x)}})(e)||{invalidReason:D4};return $.token=e,$}const H4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function U4(e,t,n){const{type:r,value:o}=e;if(r==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[r];let a=r;r==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=n.hour12?"hour12":"hour24");let s=H4[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function W4(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function V4(e,t,n){const r=e.match(t);if(r){const o={};let i=1;for(const a in n)if(En(n,a)){const s=n[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(r.slice(i,i+l))),i+=l}return[r,o]}else return[r,{}]}function z4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return q(e.z)||(n=wt.create(e.z)),q(e.Z)||(n||(n=new Ae(e.Z)),r=e.Z),q(e.q)||(e.M=(e.q-1)*3+1),q(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),q(e.u)||(e.S=As(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),n,r]}let ji=null;function Z4(){return ji||(ji=E.fromMillis(1555555555555)),ji}function Y4(e,t){if(e.literal)return e;const n=$e.macroTokenToFormatOpts(e.val),r=sh(n,t);return r==null||r.includes(void 0)?e:r}function ih(e,t){return Array.prototype.concat(...e.map(n=>Y4(n,t)))}function ah(e,t,n){const r=ih($e.parseFormat(n),e),o=r.map(a=>j4(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:r,invalidReason:i.invalidReason};{const[a,s]=W4(o),l=RegExp(a,"i"),[u,p]=V4(t,l,s),[h,m,g]=p?z4(p):[null,null,void 0];if(En(p,"a")&&En(p,"H"))throw new wn("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:l,rawMatches:u,matches:p,result:h,zone:m,specificOffset:g}}}function G4(e,t,n){const{result:r,zone:o,specificOffset:i,invalidReason:a}=ah(e,t,n);return[r,o,i,a]}function sh(e,t){if(!e)return null;const r=$e.create(t,e).dtFormatter(Z4()),o=r.formatToParts(),i=r.resolvedOptions();return o.map(a=>U4(a,e,i))}const Hi="Invalid DateTime",Tc=864e13;function Jr(e){return new et("unsupported zone",`the zone "${e.name}" is not supported`)}function Ui(e){return e.weekData===null&&(e.weekData=Fo(e.c)),e.weekData}function Wi(e){return e.localWeekData===null&&(e.localWeekData=Fo(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ht(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new E({...n,...t,old:n})}function lh(e,t,n){let r=e-t*60*1e3;const o=n.offset(r);if(t===o)return[r,t];r-=(o-t)*60*1e3;const i=n.offset(r);return o===i?[r,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Xr(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function mo(e,t,n){return lh(ii(e),t,n)}function Mc(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:r,month:o,day:Math.min(e.c.day,jo(r,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=W.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=ii(i);let[l,u]=lh(s,n,e.zone);return a!==0&&(l+=a,u=e.zone.offset(l)),{ts:l,o:u}}function Hn(e,t,n,r,o,i){const{setZone:a,zone:s}=n;if(e&&Object.keys(e).length!==0||t){const l=t||s,u=E.fromObject(e,{...n,zone:l,specificOffset:i});return a?u:u.setZone(s)}else return E.invalid(new et("unparsable",`the input "${o}" can't be parsed as ${r}`))}function _r(e,t,n=!0){return e.isValid?$e.create(Q.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Vi(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=pe(e.c.year,n?6:4),t?(r+="-",r+=pe(e.c.month),r+="-",r+=pe(e.c.day)):(r+=pe(e.c.month),r+=pe(e.c.day)),r}function Ec(e,t,n,r,o,i){let a=pe(e.c.hour);return t?(a+=":",a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=":")):a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=pe(e.c.second),(e.c.millisecond!==0||!r)&&(a+=".",a+=pe(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=pe(Math.trunc(-e.o/60)),a+=":",a+=pe(Math.trunc(-e.o%60))):(a+="+",a+=pe(Math.trunc(e.o/60)),a+=":",a+=pe(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const ch={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Q4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},K4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},uh=["year","month","day","hour","minute","second","millisecond"],J4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],X4=["year","ordinal","hour","minute","second","millisecond"];function _4(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new h0(e);return t}function Ic(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return _4(e)}}function Bc(e,t){const n=Ct(t.zone,se.defaultZone),r=Q.fromObject(t),o=se.now();let i,a;if(q(e.year))i=o;else{for(const u of uh)q(e[u])&&(e[u]=ch[u]);const s=D0(e)||N0(e);if(s)return E.invalid(s);const l=n.offset(o);[i,a]=mo(e,l,n)}return new E({ts:i,zone:n,loc:r,o:a})}function qc(e,t,n){const r=q(n.round)?!0:n.round,o=(a,s)=>(a=Cs(a,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(a,s)),i=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(i(n.unit),n.unit);for(const a of n.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Lc(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}class E{constructor(t){const n=t.zone||se.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new et("invalid input"):null)||(n.isValid?null:Jr(n));this.ts=q(t.ts)?se.now():t.ts;let o=null,i=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[o,i]=[t.old.c,t.old.o];else{const s=n.offset(this.ts);o=Xr(this.ts,s),r=Number.isNaN(o.year)?new et("invalid input"):null,o=r?null:o,i=r?null:s}this._zone=n,this.loc=t.loc||Q.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new E({})}static local(){const[t,n]=Lc(arguments),[r,o,i,a,s,l,u]=n;return Bc({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:u},t)}static utc(){const[t,n]=Lc(arguments),[r,o,i,a,s,l,u]=n;return t.zone=Ae.utcInstance,Bc({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:u},t)}static fromJSDate(t,n={}){const r=Mw(t)?t.valueOf():NaN;if(Number.isNaN(r))return E.invalid("invalid input");const o=Ct(n.zone,se.defaultZone);return o.isValid?new E({ts:r,zone:o,loc:Q.fromObject(n)}):E.invalid(Jr(o))}static fromMillis(t,n={}){if(Qt(t))return t<-Tc||t>Tc?E.invalid("Timestamp out of range"):new E({ts:t,zone:Ct(n.zone,se.defaultZone),loc:Q.fromObject(n)});throw new Se(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Qt(t))return new E({ts:t*1e3,zone:Ct(n.zone,se.defaultZone),loc:Q.fromObject(n)});throw new Se("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Ct(n.zone,se.defaultZone);if(!r.isValid)return E.invalid(Jr(r));const o=Q.fromObject(n),i=Ho(t,Ic),{minDaysInFirstWeek:a,startOfWeek:s}=gc(i,o),l=se.now(),u=q(n.specificOffset)?r.offset(l):n.specificOffset,p=!q(i.ordinal),h=!q(i.year),m=!q(i.month)||!q(i.day),g=h||m,v=i.weekYear||i.weekNumber;if((g||p)&&v)throw new wn("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&p)throw new wn("Can't mix ordinal dates with month/day");const $=v||i.weekday&&!g;let x,C,S=Xr(l,u);$?(x=J4,C=Q4,S=Fo(S,a,s)):p?(x=X4,C=K4,S=Fi(S)):(x=uh,C=ch);let N=!1;for(const Ce of x){const be=i[Ce];q(be)?N?i[Ce]=C[Ce]:i[Ce]=S[Ce]:N=!0}const F=$?Cw(i,a,s):p?Sw(i):D0(i),J=F||N0(i);if(J)return E.invalid(J);const ce=$?pc(i,a,s):p?mc(i):i,[X,V]=mo(ce,u,r),ne=new E({ts:X,zone:r,o:V,loc:o});return i.weekday&&g&&t.weekday!==ne.weekday?E.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${ne.toISO()}`):ne}static fromISO(t,n={}){const[r,o]=w4(t);return Hn(r,o,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,o]=v4(t);return Hn(r,o,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,o]=b4(t);return Hn(r,o,n,"HTTP",n)}static fromFormat(t,n,r={}){if(q(t)||q(n))throw new Se("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=r,a=Q.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,u,p]=G4(a,t,n);return p?E.invalid(p):Hn(s,l,r,`format ${n}`,t,u)}static fromString(t,n,r={}){return E.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,o]=S4(t);return Hn(r,o,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new Se("need to specify a reason the DateTime is invalid");const r=t instanceof et?t:new et(t,n);if(se.throwOnInvalid)throw new tw(r);return new E({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=sh(t,Q.fromObject(n));return r?r.map(o=>o?o.val:null).join(""):null}static expandFormat(t,n={}){return ih($e.parseFormat(t),Q.fromObject(n)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ui(this).weekYear:NaN}get weekNumber(){return this.isValid?Ui(this).weekNumber:NaN}get weekday(){return this.isValid?Ui(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Wi(this).weekday:NaN}get localWeekNumber(){return this.isValid?Wi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Wi(this).weekYear:NaN}get ordinal(){return this.isValid?Fi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Kn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Kn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Kn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Kn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=ii(this.c),o=this.zone.offset(r-t),i=this.zone.offset(r+t),a=this.zone.offset(r-o*n),s=this.zone.offset(r-i*n);if(a===s)return[this];const l=r-a*n,u=r-s*n,p=Xr(l,a),h=Xr(u,s);return p.hour===h.hour&&p.minute===h.minute&&p.second===h.second&&p.millisecond===h.millisecond?[Ht(this,{ts:l}),Ht(this,{ts:u})]:[this]}get isInLeapYear(){return Pr(this.year)}get daysInMonth(){return jo(this.year,this.month)}get daysInYear(){return this.isValid?xn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ar(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Ar(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:o}=$e.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:o}}toUTC(t=0,n={}){return this.setZone(Ae.instance(t),n)}toLocal(){return this.setZone(se.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Ct(t,se.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(n||r){const i=t.offset(this.ts),a=this.toObject();[o]=mo(a,i,t)}return Ht(this,{ts:o,zone:t})}else return E.invalid(Jr(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const o=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Ht(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=Ho(t,Ic),{minDaysInFirstWeek:r,startOfWeek:o}=gc(n,this.loc),i=!q(n.weekYear)||!q(n.weekNumber)||!q(n.weekday),a=!q(n.ordinal),s=!q(n.year),l=!q(n.month)||!q(n.day),u=s||l,p=n.weekYear||n.weekNumber;if((u||a)&&p)throw new wn("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new wn("Can't mix ordinal dates with month/day");let h;i?h=pc({...Fo(this.c,r,o),...n},r,o):q(n.ordinal)?(h={...this.toObject(),...n},q(n.day)&&(h.day=Math.min(jo(h.year,h.month),h.day))):h=mc({...Fi(this.c),...n});const[m,g]=mo(h,this.o,this.zone);return Ht(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t);return Ht(this,Mc(this,n))}minus(t){if(!this.isValid)return this;const n=W.fromDurationLike(t).negate();return Ht(this,Mc(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},o=W.normalizeUnit(t);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(o==="weeks")if(n){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(r.weekNumber=this.weekNumber-1),r.weekday=i}else r.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);r.month=(i-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?$e.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Hi}toLocaleString(t=Ro,n={}){return this.isValid?$e.create(this.loc.clone(n),t).formatDateTime(this):Hi}toLocaleParts(t={}){return this.isValid?$e.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Vi(this,a);return s+="T",s+=Ec(this,a,n,r,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Vi(this,t==="extended"):null}toISOWeekDate(){return _r(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+Ec(this,a==="extended",n,t,r,i):null}toRFC2822(){return _r(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return _r(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Vi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let o="HH:mm:ss.SSS";return(n||t)&&(r&&(o+=" "),n?o+="z":t&&(o+="ZZ")),_r(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Hi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return W.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...r},i=Ew(n).map(W.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,u=L4(s,l,i,o);return a?u.negate():u}diffNow(t="milliseconds",n={}){return this.diff(E.now(),t,n)}until(t){return this.isValid?ue.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(n,r)<=o&&o<=i.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||E.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),qc(n,this.plus(r),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?qc(t.base||E.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(E.isDateTime))throw new Se("min requires all arguments be DateTimes");return wc(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(E.isDateTime))throw new Se("max requires all arguments be DateTimes");return wc(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:o=null,numberingSystem:i=null}=r,a=Q.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return ah(a,t,n)}static fromStringExplain(t,n,r={}){return E.fromFormatExplain(t,n,r)}static get DATE_SHORT(){return Ro}static get DATE_MED(){return f0}static get DATE_MED_WITH_WEEKDAY(){return ow}static get DATE_FULL(){return p0}static get DATE_HUGE(){return m0}static get TIME_SIMPLE(){return g0}static get TIME_WITH_SECONDS(){return w0}static get TIME_WITH_SHORT_OFFSET(){return v0}static get TIME_WITH_LONG_OFFSET(){return b0}static get TIME_24_SIMPLE(){return y0}static get TIME_24_WITH_SECONDS(){return k0}static get TIME_24_WITH_SHORT_OFFSET(){return x0}static get TIME_24_WITH_LONG_OFFSET(){return $0}static get DATETIME_SHORT(){return A0}static get DATETIME_SHORT_WITH_SECONDS(){return C0}static get DATETIME_MED(){return S0}static get DATETIME_MED_WITH_SECONDS(){return T0}static get DATETIME_MED_WITH_WEEKDAY(){return iw}static get DATETIME_FULL(){return M0}static get DATETIME_FULL_WITH_SECONDS(){return E0}static get DATETIME_HUGE(){return I0}static get DATETIME_HUGE_WITH_SECONDS(){return B0}}function Un(e){if(E.isDateTime(e))return e;if(e&&e.valueOf&&Qt(e.valueOf()))return E.fromJSDate(e);if(e&&typeof e=="object")return E.fromObject(e);throw new Se(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function In(e){const t=E.fromObject(hr(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function dh(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function zi(e,t){return dh(In(e).plus(t))}const ev=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],tv=ev.reduce((e,t)=>(e[t]=t,e),{}),nv=se.defaultZone.name,Is=tv.UTC;var Pc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Pc||(Pc={}));const rv=["hour","minute","second","millisecond"],ov=Er({hour:14,minute:19,second:7,millisecond:877,timezone:Is}),iv=Er({year:2023,month:6,day:5,timezone:Is}),av=Er(f1(iv,ov));var I;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(I||(I={}));const sv={[I.Milliseconds]:"millisecond",[I.Seconds]:"second",[I.Minutes]:"minute",[I.Hours]:"hour",[I.Days]:"day",[I.Weeks]:"week",[I.Months]:"month",[I.Quarters]:"quarter",[I.Years]:"year"},Oc=[I.Milliseconds,I.Seconds,I.Minutes,I.Hours,I.Days,I.Weeks,I.Months,I.Quarters,I.Years];function Dc(e,t){return xe(e,(n,r)=>t==null||!ee(r,"number")?r:sa({number:r,digits:t}))}const Nc={longterm:1,casual:0},hh={[I.Years]:"longterm",[I.Quarters]:"longterm",[I.Months]:"longterm",[I.Weeks]:"casual",[I.Days]:"casual",[I.Hours]:"casual",[I.Minutes]:"casual",[I.Seconds]:"casual",[I.Milliseconds]:"casual"};function lv(e){return e.map(r=>hh[r]).reduce((r,o)=>Nc[o]>Nc[r]?o:r)}var An;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(An||(An={}));function cv({start:e,end:t,units:n,unit:r,diffType:o,decimalCount:i}){const a=In(e),s=In(t),l=n??[r],u=l.length===1?An.EquivalentUnits:o;if(!u)throw new Error("Failed to diff dates: no diffType was provided.");if(u===An.AdditiveUnits){const p=lv(l),h=s.diff(a,l,{conversionAccuracy:p}).toObject();return Dc(h,i)}else if(u===An.EquivalentUnits){const p=l.map(m=>{const v=s.diff(a,m,{conversionAccuracy:hh[m]}).toObject()[m];if(v==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,v]}),h=Oh(p);return Dc(h,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${u}'`)}function uv(e){if(!Kn.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function dv(e){Uu(e,av),uv(e.timezone),In(e)}function hv(e){try{return dv(e),!0}catch{return!1}}function fv(e,t){const n=pv(e,t);if(!n||!n.isValid)throw new Error(`Failed to parse date input '${e}'`);return dh(n,t)}function Rc(e){const t=E.fromJSDate(new Date(e));if(t.isValid)return t}function pv(e,t){if(hv(e)&&(e=In(e).toMillis()),E.isDateTime(e))return e.setZone(t);if(ee(e,"number"))return E.fromMillis(e,{zone:Is}).setZone(t);if(ee(e,"string")){const n=E.fromISO(e,{zone:t});return n.isValid?n:Rc(e)}else if(e instanceof Date)return E.fromJSDate(e).setZone(t);return Rc(e)}function mv(e){return fv(Date.now(),e)}function fh(){return mv(nv)}const gv={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};ef(gv,rv);const wv=se.defaultLocale;function vv(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Fc(e,t){const n=In(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??wv});return vv(n)}function bv(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function yv(e,t){const n=Me(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),n].filter(ve).join(":")}function kv(e,t){return{date:bv(e),time:yv(e,t.includeSeconds),timezone:e.timezone}}function xv(e,t){const n=kv(e,t);return[n.date,n.time,t.includeTimezone&&`(${n.timezone})`].filter(ve).join(" ")}const $v={[I.Milliseconds]:1e3,[I.Seconds]:60,[I.Minutes]:60,[I.Hours]:24,[I.Days]:30,[I.Weeks]:4,[I.Months]:12,[I.Quarters]:4,[I.Years]:1/0};function Av({fullDate:e,relativeTo:t,options:n={}}){const r=n.decimalDigitCount||0,o=cv({start:e,end:t,units:Oc,diffType:An.EquivalentUnits}),i=xe(o,(g,v)=>{const $=Math.floor(Math.abs(sa({digits:1,number:v}))),x=$>0,C=n.limitUnitMax?$<$v[g]:!0;return x&&C}),a=Oc.reduce((g,v)=>{var x;return!((x=n.blockedRelativeUnits)!=null&&x.includes(v))&&i[v]?v:g},void 0);if(n.blockJustNow?!1:at(e,t)||a===I.Minutes&&o.minutes<2||a===I.Seconds&&o.seconds<11||a===I.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],u=Math.abs(sa({digits:r,number:l})),p=u===1,h=[sv[a],p?"":"s"].join(""),m=p?"a":u;return l<0?`in ${m} ${h}`:`${m} ${h} ago`}function Cv(e){return{date:Fc(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Fc(e,{timeStyle:"short"}).replace(/\s/g," ")}}const Sv={blockedRelativeUnits:[I.Years,I.Quarters],limitUnitMax:!0};function Tv(e){var i,a,s;const t=Cv(e.fullDate),n=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(ve).join(" "),r=xv(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?Av({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||fh(),options:{...Sv,...e.relativeOptions}}):void 0;return{everythingString:r,displayString:o||n}}const Zi=ae()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:n}=Tv(e);return c`
            <span title=${n}>${t}</span>
        `}}),Mv="data-test-id",pn=vt(class extends ct{constructor(t){super(t);Rr(this,"element");this.element=Ev(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(Mv,t),Pe}});function Ev(e,t,n){Iv(e,t);const r=e.element;if(!(r instanceof n))throw new Error(`${t} attached to non ${n.name} element.`);return r}function Iv(e,t){if(e.type!==qn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Na=(e=>(e.Up="up",e.Down="down",e))(Na||{});const eo=ae()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:ie(),openChange:ie()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>f`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${O.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${de};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${Nt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${oe.interaction} linear transform;
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
            ${Ye};
            ${R(b.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${R(b.pagePrimary)}
            ${$r.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${$r.popupShadowReversed};
        }

        .selected-label-prefix {
            ${O.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ye};
        }

        .select-options .option.selected {
            ${R(b.accentPrimary)}
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
            ${_t};
        }
    `,initCallback:({state:e,host:t,updateState:n})=>{function r(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&n({dropdownOpen:!1})}window.addEventListener("click",r)},renderCallback({dispatch:e,events:t,state:n,inputs:r,updateState:o}){r._forceOpenState!=null&&o({dropdownOpen:r._forceOpenState}),r.disabled&&o({dropdownOpen:!1});const i=r.value?r.options.find(l=>{var u;return l.value===((u=r.value)==null?void 0:u.value)})??r.options[0]:r.options[0],a=r.icon?c`
                  <${y.assign({icon:r.icon})}
                      ${pn("rendered-input-icon")}
                  ></${y}>
              `:"",s=r.selectedLabelPrefix?c`
                  <span class="selected-label-prefix">${r.selectedLabelPrefix}</span>
              `:"";return c`
            <button
                ?disabled=${!!r.disabled}
                class=${fe({dropdown:!0,open:n.dropdownOpen,"reverse-direction":r.direction==="up"})}
                @click=${()=>{const l=!n.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${n.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${y.assign({icon:jd})}
                            class="trigger-icon"
                        ></${y}>
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
        `}}),Yi=ys({tagName:"toniq-error-message",styles:f`
        :host {
            display: block;
        }
    `,renderCallback(){return c`
            <${ir.assign({variant:or.Danger})}>
                <slot></slot>
            </${ir}>
        `}});var gt=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(gt||{});const Je=ae()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>f`
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
    `,renderCallback({inputs:e}){function t(r){if(e.linkType==="disabled"){r.preventDefault();return}e.linkType==="route-link"&&Jo(r)&&(r.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const n=e.linkType==="new-tab";return c`
            <a
                href=${e.url.toString()}
                ${k("click",t)}
                target=${da(n?"_blank":void 0)}
                rel=${da(n?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),Ra=360,ph=8;function mh(e){return(e-ph)/2}const ot=bt({"main-image-size":Ra,"secondary-image-size":mh(Ra)}),ht=ae()({tagName:"toniq-featured-flip-card-footer",styles:f`
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
    `,events:{viewMoreButtonClick:ie(),flipCardButtonClick:ie()},renderCallback({inputs:e,dispatch:t,events:n}){const r=e.socialUrls,o=r?le(r).map(i=>{const a=r[i];if(!a)return;const s=l0[i];return c`
                          <${Je.assign({linkType:gt.NewTab,url:a})}>
                              <${y.assign({icon:s})}></${y}>
                          </${Je}>
                      `}).filter(ve):"";return c`
            <div class="buttons">
                <${Je.assign({url:e.viewMoreButtonUrl,linkType:gt.RouteLink,scrollToTop:!0})}
                    ${k("click",()=>{t(new n.viewMoreButtonClick)})}
                >
                    <${ge.assign({text:e.viewMoreButtonText,variant:gn.Outline})}></${ge}>
                </${Je}>
                ${e.flipCardButtonText?c`
                          <${ge.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${k("click",()=>{t(new n.flipCardButtonClick)})}
                          ></${ge}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Yt=ae()({tagName:"toniq-flip-card",events:{flippedChange:ie()},styles:f`
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

        ${og(".card-face",!1)}

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
                class="flip-wrapper ${fe({flipped:e.flipped})}"
                ${k("click",()=>{t(new n.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),re=ae()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:ie()},styles:f`
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
            ${O.h3Font};
            ${O.extraBoldFont};
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
            row-gap: ${ph}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Yt} {
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

        .card-face.front ${ht} {
            margin-top: 24px;
        }

        .card-face.back ${ht} {
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
            ${O.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:n,host:r,dispatch:o,events:i}){var m,g,v,$;const a=e.mainImageSize||Ra,s=mh(a);Ao({onElement:r,forCssVar:ot["main-image-size"],toValue:`${a}px`}),Ao({onElement:r,forCssVar:ot["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(ve).join(" "),u=c`
            <h3>${e.cardTitle}</h3>
        `,p=e.imageUrls[0],h=p?c`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,p))||c`
                          <${St.assign({imageUrl:p})}></${St}>
                      `}
                  </div>
              `:"";return c`
            <${Yt.assign({flipped:t.flipped})}
                ${k(ht.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${u}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(x=>{var C;return c`
                                    <div class="secondary-image-wrapper">
                                        ${((C=e.customTemplateCallback)==null?void 0:C.call(e,x))||c`
                                            <${St.assign({imageUrl:x})}></${St}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${ht.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${k(ht.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${ht}>
                </div>
                <div class="card-face back" slot="back">
                    ${u}
                    <div class="paragraphs">
                        ${(v=e.infoParagraphs)==null?void 0:v.map(x=>c`
                                <p>${x}</p>
                            `)}
                    </div>
                    <${ht.assign({viewMoreButtonText:l,flipCardButtonText:($=e.infoParagraphs)!=null&&$.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${k(ht.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${ht}>
                </div>
            </${Yt}>
        `}});var mn=(e=>(e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e))(mn||{});const Ie=ae()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level==="h1","toniq-heading-h2":({inputs:e})=>e.level==="h2","toniq-heading-h3":({inputs:e})=>e.level==="h3","toniq-heading-h4":({inputs:e})=>e.level==="h4","toniq-heading-h5":({inputs:e})=>e.level==="h5"},styles:({hostClasses:e})=>f`
        ${e["toniq-heading-h1"].selector} {
            ${O.h1Font};
        }
        ${e["toniq-heading-h2"].selector} {
            ${O.h2Font};
        }
        ${e["toniq-heading-h3"].selector} {
            ${O.h3Font};
        }
        ${e["toniq-heading-h4"].selector} {
            ${O.h4Font};
        }
        ${e["toniq-heading-h5"].selector} {
            ${O.h5Font};
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            ${ps};
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
            `:e.level==="h5"?c`
                <h5><slot></slot></h5>
            `:c`
                <slot></slot>
            `}});function Fa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Fa({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function gh({value:e,allowed:t,blocked:n}){const r=t?Fa({input:e,matcher:t}):!0,o=n?Fa({input:e,matcher:n}):!1;return r&&!o}function jc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(gh({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}var ja=(e=>(e.Default="default",e.Outline="outline",e))(ja||{});const to=ae()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:ie(),inputBlock:ie()},styles:({hostClasses:e})=>f`
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
                border-radius: ${Ea};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${b.pagePrimary.backgroundColor};
                border-color: ${b.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${y} {
                color: ${b.pagePrimary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${y} {
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
                border-radius: ${Ea};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${O.paragraphFont};
                gap: 4px;
            }

            ${Nt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${y} {
                margin-right: 10px;
            }

            input {
                ${de};
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
                ${O.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${_t};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Ye};
            }
        `,renderCallback({inputs:e,dispatch:t,events:n}){const{filtered:r}=jc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?c`
                  <${y.assign({icon:e.icon})}></${y}>
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
                    ${k("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=r;let u=a.value??"";if(s)if(s.length===1)gh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(u=l,t(new n.inputBlock(s)));else{const{filtered:p,blocked:h}=jc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u=p,t(new n.inputBlock(h))}a.value!==u&&(a.value=u),l!==u&&t(new n.valueChange(u))})}
                    placeholder=${e.placeholder}
                />
                ${we(!!e.suffix,c`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var sr=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(sr||{});const lr=ae()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>f`
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

        ${e["toniq-loading-whole-page"].selector} ${y} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${y} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>c`
            <${y.assign({icon:bs,fitContainer:e.size!=="small"})}></${y}>
        `}),Hc="...";function Bv(e,t,n=7,r=5){let o;e=yn({value:e,min:1,max:t}),n=yn({value:n,min:r,max:t});const i=n-5,a=n-3;t<=n?o=n:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>n?Gi(t-o,t):e>o?Gi(Math.min(s.start,t-o),Math.min(s.end,t)):Gi(1,Math.min(t,o+1));function u(h,m){return l.length+1!==t?m:[h]}const p=l[l.length-1];if(p&&p<t){const h=u(t,[Hc,t]);return[...l,...h]}else return l[0]!==1?u(1,[1,Hc]).concat(l):l}function Gi(e,t){const n=t-e+1;return Array.from({length:n},(r,o)=>e+o)}const Qi=ae()({tagName:"toniq-pagination",styles:f`
        :host {
            display: flex;
        }

        button {
            ${de};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Ye};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${R(b.accentSecondary)};
        }

        .control:hover {
            ${R(b.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${R(b.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${O.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${R(b.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${R(b.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:ie()},renderCallback({inputs:e,events:t,dispatch:n}){return e.pageCount<=1?c``:c`
                <button
                    ${k("click",()=>{e.currentPage>1&&n(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${y.assign({icon:gs})}></${y}>
                </button>
                ${Bv(e.currentPage,e.pageCount,e.pagesShown).map(r=>typeof r=="string"?c`
                                <div class="page" disabled>${r}</div>
                            `:c`
                                <button
                                    class=${fe({page:!0,selected:e.currentPage===r})}
                                    ?disabled=${e.currentPage===r}
                                    ${k("click",()=>{n(new t.pageChange(r))})}
                                >
                                    ${r}
                                </button>
                            `)}
                <button
                    ${k("click",()=>{e.currentPage<e.pageCount&&n(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${y.assign({icon:ws})}></${y}>
                </button>
            `}}),Ki=b.pageInteraction.foregroundColor,Ji=b.accentSecondary.backgroundColor,Re=ae()({tagName:"toniq-list-table",cssVars:{"toniq-list-table-border-width":"1px","toniq-list-table-border-hover-width":"2px","toniq-list-table-header-radius":"16px","toniq-list-table-row-gap":"36px"},events:{pageChange:ie()},styles:({cssVars:e})=>f`
        :host {
            display: flex;
            overflow-x: auto;
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 1px solid ${b.dividerFaint.foregroundColor};
        }

        /* Firefox */
        :host {
            scrollbar-width: auto;
            scrollbar-color: ${Ki} ${Ji};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 2px;
            height: 2px;
        }

        :host::-webkit-scrollbar-track {
            background: ${Ji};
            border-radius: 8px;
        }

        :host::-webkit-scrollbar-thumb {
            background-color: ${Ki};
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

            background-color: ${b.pageInteraction.backgroundColor};
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
            scrollbar-color: ${Ki} ${Ji};
        }

        .table-list.hidden {
            visibility: hidden;
            opacity: 0;
        }

        .header {
            position: absolute;
            top: 0;
            ${O.labelFont};
        }

        .scroll-indicator {
            height: 32px;
            padding-left: 8px;
            position: absolute;
            top: 0;
            right: 0;
            background: ${b.pageInteraction.backgroundColor};
        }

        .scroll-indicator ${y} {
            height: 16px;
            width: 16px;
            opacity: 0.6;
        }

        .indicator.hidden {
            display: none;
        }

        .row-wrapper {
            display: flex;
            position: relative;
            background: ${b.pageInteraction.backgroundColor};
            cursor: pointer;
        }

        .row-wrapper:not(:first-of-type) {
            min-height: 48px;
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
            background-color: ${b.dropShadow.backgroundColor};
        }

        .row-wrapper:not(:first-of-type):hover:after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 100%;
            background-color: ${b.dropShadow.backgroundColor};
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
            transition: ${oe.interaction};
        }

        .loading-wrapper {
            transition: ${oe.pretty};
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
            background-color: ${b.opaqueOverlay.backgroundColor};
        }

        .blocked-pagination {
            opacity: 0.3;
            pointer-events: none;
        }
    `,stateInitStatic:{canScroll:!1,debouncedResize:B1(()=>Gh(dr.FirstThenWait,{milliseconds:30})),rowStyles:{},isPainting:!1,itemsPainted:0,pageCountKey:0},initCallback({inputs:e,state:t,updateState:n}){const r=e.columns.filter(o=>!o.disabled);n({rowStyles:r.reduce((o,i)=>(o[i.key]={width:void 0,left:void 0},o),t.rowStyles)})},renderCallback({inputs:e,state:t,updateState:n,events:r,dispatch:o}){var h;const i=e.columns.filter(m=>!m.disabled),a=[e.rows[0],...e.rows].filter(ve);function s(m){m instanceof HTMLElement&&t.debouncedResize(()=>{n({canScroll:m.scrollWidth>m.clientWidth})})}const l=e.pagination&&((h=e.pagination)==null?void 0:h.pageCount)>1?c`
                      <${Qi.assign({currentPage:e.pagination.currentPage,pageCount:e.pagination.pageCount})}
                          class=${fe({"blocked-pagination":!!e.showLoading})}
                          ${k(Qi.events.pageChange,m=>{var g,v;n({pageCountKey:(g=e.pagination)!=null&&g.pageCount?(v=e.pagination)==null?void 0:v.pageCount:t.pageCountKey+1}),o(new r.pageChange(m.detail))})}
                      ></${Qi}>
                  `:K;function u(m,g){return c`
                <div
                    class="row-wrapper"
                    ${g>0?k("click",v=>{var $,x;(x=($=m.rowActions)==null?void 0:$.click)==null||x.call($,{clickEvent:v,dispatch:o})}):K}
                >
                    ${i.map((v,$)=>{var S,N,F,J;const x=m.cells[v.key],C=f`
                            left: ${T(`${(S=t.rowStyles[v.key])==null?void 0:S.left}px`)};
                            min-width: ${$>=i.length-1?T("unset"):T(`${(N=t.rowStyles[v.key])==null?void 0:N.width}px`)};
                        `;return c`
                            <div
                                class=${fe({"row-item":!0,sticky:(F=v.mobile)!=null&&F.sticky?((J=v.mobile)==null?void 0:J.sticky)&&t.canScroll:!1})}
                                style=${v.style?f`
                                          ${v.style} ${C}
                                      `:C}
                            >
                                <div
                                    class=${fe({"row-content":!0,hidden:g===0})}
                                    ${Co(ce=>{var ut,yt;const X=ce.closest(".table-list"),V=X==null?void 0:X.getBoundingClientRect().left,ne=X==null?void 0:X.querySelectorAll(".row-item")[$],Ce=ne==null?void 0:ne.getBoundingClientRect().left,be=ce.getBoundingClientRect().width;(!((ut=t.rowStyles[v.key])!=null&&ut.width)||be>((yt=t.rowStyles[v.key])==null?void 0:yt.width))&&n({rowStyles:{...t.rowStyles,[v.key]:{width:be,left:V?Ce-V:Ce}}}),n({itemsPainted:t.itemsPainted+1})})}
                                >
                                    ${x}
                                </div>
                                ${we(g===0,c`
                                        <span class="header">${v.title}</span>
                                    `)}
                            </div>
                        `})}
                </div>
            `}const p=t.itemsPainted<i.length*a.length||!!e.showLoading;return c`
            <div
                class=${fe({"table-wrapper":!0,"can-scroll":t.canScroll})}
            >
                <div
                    class=${fe({"table-list":!0,hidden:p})}
                    ${Xt(m=>{s(m.target)})}
                    ${k("scroll",m=>{s(m.target)})}
                    ${k("keydown",m=>{e.showLoading&&(m.preventDefault(),m.stopImmediatePropagation())})}
                >
                    ${a.filter(ve).map((m,g)=>c`
                            ${u(m,g)}
                        `)}
                    ${we(t.canScroll,c`
                            <div class="scroll-indicator">
                                <${y.assign({icon:Rd})}></${y}>
                            </div>
                        `)}
                </div>

                <div
                    class=${fe({"loading-wrapper":!0,hidden:!p})}
                >
                    <${lr.assign({size:sr.Large})}></${lr}>
                </div>
                ${l}
            </div>
        `}});async function qv(e){return navigator.clipboard.writeText(e)}const Lv="…";function Pv(e,t){const n=e.slice(0,t).trim(),r=e.slice(-1*t).trim();return`${n}${Lv}${r}`}function Ov(e){return!(e%1)}function Dv(e){return e.letterCount==null?4:Ov(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const D=ae()({tagName:"toniq-middle-ellipsis",events:{copy:ie()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>f`
        :host {
            /* 5 frames at 60 fps */
            transition: ${oe.interaction};
            ${O.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${y} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${y} {
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
            ${de};
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
            transition: opacity ${oe.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:n,state:r,updateState:o}){if(!e.text)return c``;const i=e.text,a=Dv(e),s=!!e.externalLink,l=!!e.copyOnClick,u=i.length>a*2+2,p=u?Pv(i,a):i,h=u?i:"",m=s?Wd:l?Ud:void 0,g=m?c`
                  <${y.assign({icon:m})}></${y}>
              `:"",v=c`
            <span title=${h} class="text-content">
                ${we(!!e.copyOnClick,c`
                        <span
                            class=${fe({"copied-text":!0,"show-copied-text":r.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${p}
            </span>
        `;return p?s?c`
                    <button
                        tabindex="0"
                        role="link"
                        ${k("click",$=>{var C,S;const x=(S=(C=$.currentTarget)==null?void 0:C.querySelector)==null?void 0:S.call(C,"a");if(!x)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");x.click()})}
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
                            href=${da(e.externalLink)}
                            title=${h}
                        >
                            ${v} ${g}
                        </a>
                    </button>
                `:l?c`
                    <button
                        class="text-wrapper copyable"
                        ${k("click",async()=>{await qv(i),t(new n.copy),r.showCopiedTextTimeoutId!=null&&window.clearTimeout(r.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${v} ${g}
                    </button>
                `:c`
                    ${v}
                `:c``}}),Wn=ae()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>f`
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
    `,renderCallback({inputs:e,cssVars:t,host:n}){const r=yn({value:e.percent,max:100,min:0}),o=`${r}%`;return Ao({forCssVar:t["toniq-progress-width"],onElement:n,toValue:o}),n.setAttribute("title",`${o} finished`),r?c`
                <div class="progress"></div>
            `:K}}),_=ae()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:ie()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Xe("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Xe("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Xe("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Xe("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>f`
        :host {
            ${O.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${oe.interaction},
                background-color ${oe.interaction},
                opacity ${oe.interaction};
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
            ${de};
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
            transition: ${oe.interaction};
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
            ${_t};
        }

        .wrapper.disabled::before {
            ${_t}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:du()})},renderCallback({inputs:e,dispatch:t,events:n,state:r}){return Nv(e.entries).map(i=>Rv(e.groupName||r.randomGroupName,e.value,i,()=>{t(new n.valueChange(i.value))}))}});function Nv(e){const t=Object.fromEntries(e.map(r=>[r.value,r]));return Object.values(t).length!==e.length&&console.error(`${_.tagName} was given duplicate entry values.`),Object.values(t)}function Rv(e,t,n,r){const o=t===n.value,i=c`
        <slot name=${n.value} class="label">
            <span class="label">${n.label||n.value}</span>
        </slot>
    `;return c`
        <button
            ?disabled=${n.disabled}
            tabindex="0"
            class=${fe({disabled:!!n.disabled,checked:o&&!n.disabled,wrapper:!0})}
            ${k("click",()=>{r()})}
        >
            <input
                ${k("input",()=>{r()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function Xi(e,t){const n=e[0],r=e[e.length-1];if(n==null||r==null)return 0;if(t<n)return n;if(t>r)return r;const o=e.findIndex((u,p)=>{const h=e[p+1];return h==null?!0:u<=t&&h>=t});if(o<0)return n;const i=e[o];if(i==null)return n;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function Fv(e,t,n=100){e>t&&([e,t]=[t,e]),n<2&&(n=2);let r=jv(e);const o=[e];for(;r<t;){const i=Math.pow(10,String(r).length-1),a=r+i;a<t&&o.push(a),r=a}return o.push(t),o.length>n&&(Uc(o,n),o.length>n&&Uc(o,n)),o}function Uc(e,t){const n=e.length-t,r=(e.length-2)/n;for(let o=e.length-2;o>=1;o-=r)e.splice(Math.floor(o),1)}function jv(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const n=e.toFixed(0),r=Math.pow(10,n.length-1),o=Number(n[0]||1);return r*o*t}const B={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Vn={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"},cr={hot:"rgb(200,0,0)",medium:"orange",cold:"rgb(0,200,0)"};function un(e){return f`
        background-color: ${T(cr[e])};
        color: ${T(cr[e])};
    `}function Hv(e){var r,o;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${B.lowerLabelWrapper} .${B.labelPercentMarginWrapper}`),n=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${B.upperLabelWrapper} .${B.labelPercentMarginWrapper}`);if(n instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=n.getBoundingClientRect();return{lower:i,upper:a}}else return}function Uv(e,t=8){const n=Hv(e);if(!n)return 0;const r=n.lower.right-n.upper.left+t;return Math.max(0,r)}function _i({value:e,limits:t,flip:n}){const o=(t.max-e)/(t.max-t.min)*100;return-(n?100-o:o)}function Cr(e){return Ze(e)&&e.min!==void 0&&e.max!==void 0}function Ha(e){var n;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${B.range}`);return(t==null?void 0:t.clientWidth)??0}function ea(e,t,n){return`${n?mf(e):e} ${t}`}function Wv({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Vv({value:e,double:t,min:n,max:r}){return t?Cr(e)?{min:yn({value:e.min,min:n,max:Math.min(e.max,r)}),max:yn({value:e.max,min:Math.max(e.min,n),max:r})}:{min:n,max:r}:Cr(e)?n:yn({value:e,min:n,max:r})}function zv({actualValue:e,actualLimits:t,logScale:n,logRange:r}){return n?{elementValue:Cr(e)?{min:Xi(r,e.min),max:Xi(r,e.max)}:Xi(r,e),elementLimits:{min:0,max:r.length-1}}:{elementValue:e,elementLimits:t}}function ta(e,t,n){return n?t[e]||0:e}function Zv(e){return{actualLimits:Wv(e),actualValue:Vv(e)}}function Yv(e,t){var r,o,i;let n=!1;if(Cr(e)){const a=(r=t.shadowRoot)==null?void 0:r.querySelector(`.${B.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${B.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),n=!0),Number(s.value)!==e.max&&(s.value=String(e.max),n=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${B.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),n=!0)}return n}function wh(e,t){const{actualValue:n,actualLimits:r}=Zv({...e}),o=Fv(r.min,r.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=zv({actualValue:n,actualLimits:r,logScale:i,logRange:o}),u=Ha(t);return{actualValue:n,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:u,suffix:a}}const Ut=16,Wc=f`
    ${Ut}px
`,Vc=f`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Wc};
    width: ${Wc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${oe.interaction};
    ${R(b.accentPrimary)};
`,zc=f`
    transform: scale(1.2);
`;function Gv(e){return e>100*(2/3)?"cold":e>100*(1/3)?"medium":"hot"}function Jn(e){requestAnimationFrame(()=>{const t=wh(e.instanceInputs,e).elementValue;Yv(t,e)&&(e.setAttribute("disabled","true"),Jn(e))})}const j=ae()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:ie()},styles:f`
        :host {
            display: block;
        }

        .${T(B.range)}-temp {
            background: linear-gradient(
                90deg,
                ${T(cr.cold)},
                ${T(cr.medium)},
                ${T(cr.hot)}
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
            ${R(b.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${R(b.accentPrimary)};
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
            ${O.boldParagraphFont};
            ${Ye};
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
            ${Vc}
        }

        .${T(B.slider)}.hot::-moz-range-thumb {
            ${un("hot")}
        }
        .${T(B.slider)}.medium::-moz-range-thumb {
            ${un("medium")}
        }
        .${T(B.slider)}.cold::-moz-range-thumb {
            ${un("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-webkit-slider-thumb {
            ${Vc}
        }

        .${T(B.slider)}.hot::-webkit-slider-thumb {
            ${un("hot")}
        }
        .${T(B.slider)}.medium::-webkit-slider-thumb {
            ${un("medium")}
        }
        .${T(B.slider)}.cold::-webkit-slider-thumb {
            ${un("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-webkit-slider-thumb:hover {
            ${zc}
        }

        /* these selectors fail if combined with a comma */
        .${T(B.slider)}::-moz-range-thumb:hover {
            ${zc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Jn(e)}),e.addEventListener("keydown",()=>{Jn(e)}),e.addEventListener("keyup",()=>{Jn(e)})},renderCallback({inputs:e,host:t,events:n,dispatch:r,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:u,elementValue:p,elementLimits:h,rangeWidth:m}=wh({...e},t);if(Jn(t),Cr(p))return g(a,p,h);return $(a,p,h);function g(x,C,S){const N={left:Wt((m-Ut)*(C.min-S.min)/(S.max-S.min)+Ut/2),right:Wt((m-Ut)*(S.max-C.max)/(S.max-S.min)+Ut/2)},F=ea(x.min,u,l),J=ea(x.max,u,l);requestAnimationFrame(()=>{const be=Uv(t);be!==o.labelOverlap&&i({labelOverlap:be})});const ce=(S.max-C.max)/(S.max-S.min)>.5,X=_i({value:C.min,limits:{min:S.min,max:C.max},flip:!0}),V=_i({value:C.max,limits:{min:C.min,max:S.max},flip:!1}),ne=o.labelOverlap&&ce?o.labelOverlap:0,Ce=o.labelOverlap&&!ce?o.labelOverlap:0;return c`
                <div
                    class="range"
                    ${Xt(()=>{i({rangeWidth:Ha(t)})})}
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
                            style="margin-left: ${fi(X)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-right: ${Wt(Ce)}"
                                ${pn(Vn.lowerLabel)}
                            >
                                ${F}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${B.labelOuterWrapper} ${B.upperLabelWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${N.right}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${fi(V)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-left: ${Wt(ne)}"
                                ${pn(Vn.upperLabel)}
                            >
                                ${J}
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
                            ${k("input",be=>{const ut=be.target,yt={...x,min:ta(Number(ut.value),s,l)};v(yt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${B.upperSlider} ${B.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${C.max}
                            ${pn(Vn.slider)}
                            ${k("input",be=>{const ut=be.target,yt={...x,max:ta(Number(ut.value),s,l)};v(yt)})}
                        />
                    </div>
                </div>
            `}function v(x){i({internalValue:x}),e.disabled||r(new n.valueChange(x))}function $(x,C,S){const N=Wt((m-Ut)*(S.max-C)/(S.max-S.min)+Ut/2),F=ea(x,u,l),J=_i({value:C,limits:S,flip:!1});return c`
                <div
                    class="range ${e.colorTemperature?"range-temp":""}"
                    ${Xt(()=>{i({rangeWidth:Ha(t)})})}
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
                            style="margin-right: ${fi(J)}"
                            ${pn(Vn.label)}
                        >
                            ${F}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${B.slider} ${e.colorTemperature?Gv(Math.abs(J)):""}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${C}
                        ${pn(Vn.slider)}
                        ${k("input",ce=>{const X=ce.target,V=ta(Number(X.value),s,l);v(V)})}
                    />
                </div>
            `}}});var vh=(e=>(e.Default="default",e.TextOnly="text-only",e))(vh||{}),bh=(e=>(e.Left="left",e.Right="right",e))(bh||{});const na=ae()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>f`
        :host {
            ${O.boldParagraphFont};
            ${Ye};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${de};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${R(b.accentSecondary)};
            transition:
                color ${oe.interaction},
                background-color ${oe.interaction};
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${R(b.accentPrimary)};
        }

        :host(:hover) button {
            ${R(b.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${R(b.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${R(b.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${R(b.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${R(b.pageInteraction)};
            border-color: ${b.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${R(b.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${b.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${R(b.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${_t};
        }

        .icon-template + .text-template,
        .text-template + .icon-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.iconPlacement??"left",n=e.icon?c`
                  <${y.assign({icon:e.icon})}
                      class="icon-template"
                  ></${y}>
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
        `}}),ur=ys({tagName:"toniq-tooltip",styles:f`
        :host {
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${$r.menuShadow};
            color: ${b.pagePrimary.foregroundColor};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return c`
            <slot></slot>
        `}}),go=ae()({tagName:"toniq-with-tooltip",styles:f`
        :host {
            display: inline-block;
            position: relative;
        }

        .tooltip-wrapper {
            width: max-content;
            max-width: 200px;
            pointer-events: none;
        }

        [popover] {
            margin: 0;
            opacity: 0;
            transition: opacity ${oe.pretty};
        }

        [popover]:popover-open {
            opacity: 1;
        }
    `,stateInitStatic:{clickToggled:!1,boundingClientRect:void 0,popOverEl:void 0},renderCallback({inputs:e,state:t,updateState:n}){const r=Yf();function o(s){var l,u;if(!(s instanceof HTMLSlotElement))throw new Error("click event had no target");n({boundingClientRect:(l=s.assignedElements()[0])==null?void 0:l.getBoundingClientRect()}),e.forceShow&&((u=t.popOverEl)==null||u.showPopover())}function i(s){const l=s.target;if(!(l instanceof HTMLElement))throw new Error("click event had no target");n({boundingClientRect:l.getBoundingClientRect()})}function a(){var s;n({clickToggled:!1}),(s=t.popOverEl)==null||s.hidePopover()}return c`
            <slot
                popovertarget="toniq-tooltip"
                ${Co(s=>{o(s)})}
                ${Xt(s=>{o(s.target),n({popOverEl:r.value})})}
                ${k("click",s=>{var l;i(s),n({clickToggled:!0}),(l=r.value)==null||l.showPopover(),setTimeout(()=>{a()},3e3)})}
                ${k("mouseover",s=>{var l;i(s),(l=r.value)==null||l.showPopover()})}
                ${k("mouseleave",()=>{t.clickToggled||a()})}
            ></slot>
            <${ur}
                ${Qf(r)}
                id="toniq-tooltip"
                popover
                class="tooltip-wrapper"
                style=${f`
                    top: ${t.boundingClientRect?t.boundingClientRect.bottom:0}px;
                    left: ${t.boundingClientRect?t.boundingClientRect.left:0}px;
                `}
            >
                ${e.tooltipContent}
            </${ur}>
        `}}),Xn=ae()({tagName:"toniq-top-tabs",events:{routeChange:ie(),valueChange:ie()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>f`
        :host {
            display: block;
        }

        ul {
            ${de};
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
                border-bottom-width ${oe.interaction},
                border-color ${oe.interaction},
                padding-bottom ${oe.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${de};
            ${ps};
            cursor: pointer;
            display: inline-block;
            ${O.paragraphFont};
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

        ${Gt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${O.boldFont};
            color: ${b.pageInteraction.foregroundColor};
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
                      <${y.assign({icon:o.icon})}></${y}>
                  `:"",s=o.label?c`
                      <${Gt.assign({text:o.label})}></${Gt}>
                  `:"";return c`
                <li
                    ${I1("tab")}
                    role="presentation"
                    class=${fe({selected:i})}
                >
                    <${Je.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:gt.RouteLink})}
                        class="tab ${fe({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${k("click",u=>{var p;i||Jo(u)&&((p=o.link)!=null&&p.route&&t(new n.routeChange(o.link.route)),t(new n.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Je}>
                </li>
            `});return c`
            <ul role="tablist">
                ${r}
                <li></li>
            </ul>
        `}}),yh=U({title:"Data",parent:void 0}),Uo=ae()({tagName:"toniq-icon-book-viewer",styles:f`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${b.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return c`
            <${y.assign({icon:e.icon})}></${y}>
        `}}),li=Object.values(it).reduce((e,t)=>(t.forEach(n=>{if(n.name in e)throw new Error(`Icon name duplicate: '${n.name}'`);e[n.name]=n}),e),{}),Qv=Object.keys(li).sort();function Bs(e){return{controlType:H.Dropdown,initValue:e,options:["None",...Qv]}}const kh={"CSS color":{controlType:H.Color,initValue:""},[String(d["toniq-icon-stroke-color"].name)]:{controlType:H.Color,initValue:""},[String(d["toniq-icon-fill-color"].name)]:{controlType:H.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:H.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:H.Number,initValue:2}};function wo(e){return Object.entries(e).filter(([,n])=>n!==""&&n!=null).map(([n,r])=>(n.toLowerCase()==="css color"&&(n="color"),ee(r,"number")&&(r=Wa({value:r,suffix:"px"})),`${n}: ${r};`)).join(`
`)}const Kv=U({title:"Social Urls",parent:yh,elementExamplesCallback({defineExample:e}){function t({socialName:n,icon:r}){e({title:n,renderCallback(){return c`
                        <${Uo.assign({icon:r})}></${Uo}>
                    `}})}Object.entries(l0).forEach(([n,r])=>{t({socialName:n,icon:r})})}}),te=U({title:"Elements",parent:void 0}),Jv=U({parent:te,title:ir.tagName,elementExamplesCallback({defineExample:e}){[{name:"danger",inputs:{variant:or.Danger},slot:c`<strong>Alert!</strong>This is an alert, Please be very careful!`},{name:"warning",inputs:{variant:or.Warning},slot:"This is a warning, proceed with caution 🚧"},{name:"success",inputs:{variant:or.Success},slot:"You have successfully completed your task!"}].forEach(n=>{e({title:n.name,stateInitStatic:{},styles:f`
                    :host {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback(){return c`
                        <${ir.assign(n.inputs)}>
                            ${n.slot}
                        </${ir}>
                    `}})})}}),Xv=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:f`
            ${Gt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],_v=U({title:Gt.tagName,parent:te,elementExamplesCallback({defineExample:e}){Xv.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:f`
                    .bold {
                        ${O.boldFont}
                    }

                    ${t.extraStyle??f``}
                `,renderCallback({state:n,updateState:r}){return c`
                        <${Gt.assign({text:t.text})}
                            ${k("click",()=>{r({isBold:!n.isBold})})}
                            class=${fe({bold:n.isBold})}
                        ></${Gt}>
                        More text
                    `}})})}}),e5=U({parent:te,title:ge.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:gn.Secondary}},{name:"Outline",inputs:{variant:gn.Outline}},{name:"Text Only",inputs:{variant:gn.TextOnly}},{name:"Disabled",inputs:{disabled:!0}},{name:"Right Icon",inputs:{iconPlacement:c0.Right,variant:gn.Outline}},{name:"Pulsing Effect",inputs:{effect:u0.Pulse}}].forEach(n=>{e({title:n.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:f`
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
                        <${ge.assign({icon:uo,...n.inputs})}></${ge}>
                        <${ge.assign(r.showIcon?{icon:uo,text:"icon",...n.inputs}:{text:"no icon",...n.inputs})}
                            class="icon-toggle"
                        ></${ge}>
                        <${ge.assign({text:"Button",icon:uo,...n.inputs})}></${ge}>
                        <${ge.assign({...n.inputs})}>
                            <span>HTML Child</span>
                        </${ge}>
                        <${ge.assign({text:"bigger",...n.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ge}>
                    `}})})}}),ra=f`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${ye} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,t5=U({parent:te,title:ye.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:ra,renderCallback(){return c`
                    <${ye.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:it["core-24"].map(t=>{const n=f`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${y.assign({icon:t})} style=${n}></${y}>
                            `})})}></${ye}>
                    <${ye.assign({enableAutomaticCycling:!0,templates:it["core-24"].map(t=>{const n=f`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${y.assign({icon:t})} style=${n}></${y}>
                            `})})}></${ye}>
                    <${ye.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:it["core-24"].map(t=>{const n=rf({min:0,max:150}),r=f`
                                padding: 100px ${n}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${y.assign({icon:t})} style=${r}></${y}>
                            `})})}></${ye}>
                `}}),e({title:"banner style",styles:ra,renderCallback(){const t=f`
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
                    <${ye.assign({enableAutomaticCycling:!0,variant:fo.Banner,templates:it["core-24"].map(n=>c`
                                <div style=${t}>
                                    <${y.assign({icon:n})}></${y}>
                                </div>
                            `)})}></${ye}>
                    <${ye.assign({enableAutomaticCycling:!0,variant:fo.Banner,templates:[it["core-24"][0]].map(n=>c`
                                <div style=${t}>
                                    <${y.assign({icon:n})}></${y}>
                                </div>
                            `)})}
                        class=${ye.hostClasses["toniq-carousel-banner-variant"]}
                    ></${ye}>
                `}}),e({title:"offset arrows",styles:ra,renderCallback(){const t=f`
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
                    <${ye.assign({enableAutomaticCycling:!1,offsetArrows:!0,cycleIntervalMs:1e3,templates:it["core-24"].map(n=>{const r=f`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${y.assign({icon:n})} style=${r}></${y}>
                            `})})}></${ye}>
                    <${ye.assign({enableAutomaticCycling:!1,offsetArrows:!0,variant:fo.Banner,templates:it["core-24"].map(n=>c`
                                <div style=${t}>
                                    <${y.assign({icon:n})}></${y}>
                                </div>
                            `)})}></${ye}>
                `}})}});function n5(e){const t=Object.keys(e.cssVars).map(n=>[`--${n}`,{controlType:H.Color,initValue:""}]);return Object.fromEntries(t)}function r5(e){const t=Object.entries(e).map(([n,r])=>{if(n.startsWith("--"))return typeof r!="string"||!r?void 0:`${n}: ${r};`}).filter(ve);return T(t.join(`
`))}const o5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],oa=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],i5=U({parent:te,title:kt.tagName,controls:{Text:{controlType:H.Text,initValue:"Text"},...n5(kt)},elementExamplesCallback({defineExample:e}){o5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:oa.map(n=>!!n.inputs.checked),extraEntryStatuses:oa.map(n=>(n.extraEntries??[]).map(()=>!1))},styles:f`
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
                `,renderCallback({state:n,updateState:r,controls:o}){return oa.map((i,a)=>{const s=(i.extraEntries??[]).map((u,p)=>{var h;return c`
                                    <${kt.assign({...t.inputs,...hr(i.inputs,["checked"]),checked:!!((h=n.extraEntryStatuses[a])!=null&&h[p]),text:u})}
                                        ${k(kt.events.checkedChange,()=>{const m=[...n.extraEntryStatuses];m[a][p]=!m[a][p],r({extraEntryStatuses:m})})}
                                    ></${kt}>
                                `}),l=r5(o);return c`
                            <div class="checkbox-group" style=${l}>
                                <${kt.assign({...t.inputs,...hr(i.inputs,["checked"]),checked:n.checkedStatuses[a],text:o.Text})}
                                    ${k(kt.events.checkedChange,()=>{const u=[...n.checkedStatuses];u[a]=!u[a],r({checkedStatuses:u})})}
                                ></${kt}>
                                ${s}
                            </div>
                        `})}})})}}),a5=U({parent:te,title:Di.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:It}},{inputs:{icon:It}},{inputs:{},template:c`
                    HTML child
                `},{inputs:{icon:It},template:c`
                    HTML child
                `},{customStyle:f`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:fn.Default}},{title:"secondary style",inputs:{variant:fn.Secondary}},{title:"warning style",inputs:{variant:fn.Warning}},{title:"danger style",inputs:{variant:fn.Danger}},{title:"outline style",inputs:{variant:fn.Outline}}].forEach(r=>{e({title:r.title,renderCallback(){return t.map(o=>c`
                        <${Di.assign({...r.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${we(!!o.template,o.template)}</${Di}>
                    `)}})})}}),s5=U({title:Zi.tagName,parent:te,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=fh();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:zi(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:zi(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:zi(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[I.Days,I.Hours]}}}].forEach(r=>{e({title:r.title,renderCallback(){return c`
                        <${Zi.assign({...r.inputs})}></${Zi}>
                    `}})})}}),no=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],l5=[{title:"default"},{title:"transparent background",customStyle:f`
            ${ms.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Zc=[{},{customStyle:f`
            width: 500px;
            height: 100px;
        `},{customStyle:f`
            max-height: 30px;
            min-height: 30px;
        `}],c5=U({title:eo.tagName,parent:te,controls:{Selected:{controlType:H.Dropdown,initValue:no[0].label,options:no.map(e=>e.label)},Direction:{controlType:H.Dropdown,initValue:"Down",options:au(Na)},Icon:Bs(Fd.name),Prefix:{controlType:H.Text,initValue:"Sort by: "},"Force open":{controlType:H.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){l5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Zc.map(n=>{var r;return(r=n.inputs)==null?void 0:r.value})},styles:f`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return Zc.map((i,a)=>{const s=f`
                            ${t.customStyle??f``};
                            ${i.customStyle??f``};
                        `;return c`
                            <${eo.assign({...t.inputs,...i.inputs,options:no,value:n.selected[a]??no.find(l=>l.label===o.Selected),icon:li[o.Icon],selectedLabelPrefix:o.Prefix,direction:Na[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${k(eo.events.selectChange,l=>{const u=[...n.selected];u[a]=l.detail,r({selected:u})})}
                            ></${eo}>
                        `})}})})}}),u5=[{title:"empty",content:""},{title:"with text",content:"Error: there was an error"}],d5=U({title:Yi.tagName,parent:te,elementExamplesCallback({defineExample:e}){u5.forEach(t=>{e({title:t.title,renderCallback(){return c`
                        <${Yi}>${t.content}</${Yi}>
                    `}})})}}),Yc="/toniq-labs-design-system";function xh(...e){const n=[globalThis.location.pathname.startsWith(Yc)?Yc:"",...e].filter(ve);return fr(...n)}const dn=Array(30).fill(xh("/toniq-labs-logo.png")),vn=["Hello there.","There is stuff here."],ro=vn.concat(Array(30).fill(vn)),h5=U({title:re.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({infoParagraphs:ro,imageUrls:dn,socialUrls:G2,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${re}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:dn,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${re}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:ro,viewMoreUrl:"https://toniqlabs.com"})}
                        ${k(re.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${re}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:ro})}></${re}>
                `}}),e({title:"with custom height",styles:f`
                ${re} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:ro})}></${re}>
                `}}),e({title:"smaller",styles:f`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:dn,infoParagraphs:vn,cardTitle:"Featured Stuff"})}></${re}>
                `}}),e({title:"with social URLs",styles:f`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:dn,infoParagraphs:vn,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${re}>
                `}}),e({title:"with custom template",styles:f`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:dn,infoParagraphs:vn,cardTitle:"With custom Template",customTemplateCallback(t){return c`
                                <${St.assign({imageUrl:t})}></${St}>
                            `}})}></${re}>
                `}}),e({title:"with custom template statuses",styles:f`
                ${re} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${re.assign({imageUrls:dn.map((t,n)=>n%2?"/invalid-image.png":t),infoParagraphs:vn,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return c`
                                <${St.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${Mn.Loading}
                                        class="icon-wrapper"
                                        style=${f`
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
                                        <${y.assign({icon:bs,fitContainer:!0})}
                                            style=${f`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${y}>
                                    </div>
                                    <div
                                        slot=${Mn.Error}
                                        class="icon-wrapper"
                                        style=${f`
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
                                        <${y.assign({icon:qd,fitContainer:!0})}
                                            style=${f`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${y}>
                                    </div>
                                </${St}>
                            `}})}></${re}>
                `}})}}),f5=U({title:Yt.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:f`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:n}){return c`
                    <${Yt.assign({flipped:t.flipped})}
                        ${k(Yt.events.flippedChange,r=>{n({flipped:r.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Yt}>
                `}})}}),p5=U({title:Ie.tagName,parent:te,elementExamplesCallback({defineExample:e}){su(mn).forEach(t=>{e({title:t,renderCallback(){return c`
                        <${Ie.assign({level:t})}>Some text</${Ie}>
                    `}})}),e({title:"can be restyled",styles:f`
                ${Ie}:first-of-type {
                    ${O.h4Font};
                }
            `,renderCallback(){return c`
                    <${Ie.assign({level:mn.H1})}>
                        This is an h1
                    </${Ie}>
                    <${Ie.assign({level:mn.H1})}>
                        This is an h1
                    </${Ie}>
                `}}),e({title:"can do ellipsis",styles:f`
                ${Ie}:first-of-type {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                :host {
                    width: 300px;
                }
            `,renderCallback(){return c`
                    <${Ie.assign({level:mn.H3})}>
                        title longer than bounds
                    </${Ie}>
                    <${Ie.assign({level:mn.H3})}>
                        title longer than bounds
                    </${Ie}>
                `}})}}),m5=U({parent:te,title:Je.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:gt.ReplacePage}},{title:"new tab",inputs:{linkType:gt.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:gt.NewTab}},{title:"route link",inputs:{linkType:gt.RouteLink}},{title:"link disabled",inputs:{linkType:gt.Disabled}}].forEach(n=>{e({title:n.title,descriptionParagraphs:n.descriptions,renderCallback(){return c`
                        <${Je.assign({url:"https://toniqlabs.com",...n.inputs})}>
                            Toniq Labs Link
                        </${Je}>
                    `}})})}}),g5=U({title:y.tagName,parent:te,controls:kh,elementExamplesCallback({defineExample:e}){const t=[{icon:Kd},{icon:Qd},{icon:Hd},{icon:It},{icon:void 0}];e({title:"sizes",styles:f`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:n}){return t.map(r=>c`
                        <${y.assign({icon:r.icon})}
                            style=${wo(n)}
                        ></${y}>
                    `)}}),e({title:"brand icons",renderCallback({controls:n}){const r=f`
                    ${d["toniq-icon-fill-color"].name}: orange;
                `;return it["third-party-brands"].map(o=>c`
                        <${y.assign({icon:o})}
                            style=${wo(n)}
                        ></${y}>
                        <${y.assign({icon:o})}
                            style=${r}
                        ></${y}>
                    `)}}),e({title:"fit container",styles:f`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${y} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:n}){return c`
                    <${y.assign({icon:It,fitContainer:!0})}
                        style=${wo(n)}
                    ></${y}>
                `}})}}),w5=U({title:to.tagName,parent:te,controls:{"External value":{controlType:H.Text,initValue:""},Placeholder:{controlType:H.Text,initValue:"placeholder"},Icon:Bs(Zd.name),Suffix:{controlType:H.Text,initValue:"ICP"},"No browser helps":{controlType:H.Checkbox,initValue:!1},"Blocked characters":{controlType:H.Text,initValue:""},"Exclusive characters":{controlType:H.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:f`
                    height: 75px;
                    width: 300px;
                `},{customStyles:f`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:ja.Default}},{title:"outline",inputs:{variant:ja.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.title,stateInitStatic:{value:""},styles:f`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),c`
                            <${to.assign({...r.inputs,value:o["External value"]||i.value,icon:li[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${k(to.events.valueChange,l=>{a({value:l.detail})})}
                            ></${to}>
                        `))}})})}});function ci({entries:e,columns:t,createRowObject:n}){const r=Object.fromEntries(t.map(i=>[i.key,""]));return{rows:e.map((i,a)=>{const s=n(i,a);if(!at(Object.keys(r).sort(),Object.keys(s.cells).sort()))throw console.error("broken list table row",{cells:s.cells,columns:r}),new Error("List table row keys does not match expect column keys.");return s}),columns:t}}const $h="https://cdn-bitcoin.bioniq.io",v5=fr($h,"content"),b5=fr($h,"thumbnail"),bn={thumbnail(e){return fr(b5,e)},content(e){return fr(v5,e)}},y5=Array(5).fill({imageUrl:bn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:c`
        <div
            style=${f`
                display: flex;
                gap: 8px;
            `}
        >
            <${y.assign({icon:ni})}></${y}>
            <span>0.00042753</span>
        </div>
    `,from:c`
        <${D.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${f`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${k("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${D}>
    `,to:c`
        <${D.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${f`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${k("click",e=>{e.stopImmediatePropagation()})}
        ></${D}>
    `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
        <div
            style=${f`
                width: 100%;
                display: flex;
                justify-content: flex-end;
            `}
        >
            <button
                style=${f`
                    ${de}
                    ${O.boldParagraphFont};
                    color: ${b.pageInteraction.foregroundColor};
                    cursor: pointer;
                `}
            >
                Cancel
            </button>
        </div>
    `}),k5=[{imageUrl:bn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Payment Sent",price:c`
            <div
                style=${f`
                    display: flex;
                    gap: 8px;
                `}
            >
                <${y.assign({icon:ni})}></${y}>
                <span>0.00042753</span>
            </div>
        `,from:c`
            <${D.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${D}>
        `,to:c`
            <${D.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.stopImmediatePropagation()})}
            ></${D}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${f`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${f`
                        ${de}
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:bn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Transfer",price:c`
            -
        `,from:c`
            <${D.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${D}>
        `,to:c`
            <${D.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.stopImmediatePropagation()})}
            ></${D}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${f`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${f`
                        ${de}
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:bn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Accept Offer",price:c`
            -
        `,from:c`
            <${D.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${D}>
        `,to:c`
            <${D.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.stopImmediatePropagation()})}
            ></${D}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${f`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${f`
                        ${de}
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:bn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Cancel Listing",price:c`
            -
        `,from:c`
            <${D.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${f`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${k("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${D}>
        `,to:c`
            -
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:c`
            <div
                style=${f`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${f`
                        ${de}
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `}],x5=[],$5=Array(5).fill({imageUrl:bn.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:c`
        <div
            style=${f`
                display: flex;
                gap: 8px;
            `}
        >
            <${y.assign({icon:ni})}></${y}>
            <span>0.00042753</span>
        </div>
    `,from:c`
        <${D.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${f`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${k("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${D}>
    `,to:c`
        <${D.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${f`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${k("click",e=>{e.stopImmediatePropagation()})}
        ></${D}>
    `,date:"April 3, 2024 (1:57pm)",time:c`
        <div
            style=${f`
                width: 100%;
                display: flex;
                justify-content: flex-end;
            `}
        >
            <span>2h ago</span>
        </div>
    `}),ia=ci({entries:y5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE",mobile:{sticky:!0}},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${f`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),Gc=ci({entries:k5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${f`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),A5=ci({entries:x5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${f`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),C5=ci({entries:$5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME",style:f`
                display: flex;
                justify-content: flex-end;
            `}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${f`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),S5=[{title:"basic"},{title:"with pagination",inputs:{pagination:{currentPage:1,pageCount:10}}},{title:"squished horizontally",styles:f`
            :host {
                width: 200px;
            }
        `},{title:"squished vertically",styles:f`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{pagination:{currentPage:3,pageCount:10}}},{title:"squished in both",styles:f`
            :host {
                max-height: 300px;
                width: 200px;
                display: flex;
            }
        `},{title:"with wide parent",styles:f`
            ${Re} {
                width: 100%;
                flex-grow: 1;
            }
        `},{title:"show loading",styles:f`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{showLoading:!0,pagination:{currentPage:3,pageCount:10}}}],Qc=ys({tagName:"toniq-test-resize",stateInitStatic:{message:"",cleanup:void 0},initCallback({updateState:e,state:t}){if(!t.cleanup){const n=window.setInterval(()=>{t.message?e({message:""}):e({message:"April 3, 2024 (1:57pm)"})},1e3);e({cleanup(){window.clearInterval(n)}})}},cleanupCallback({state:e,updateState:t}){var n;(n=e.cleanup)==null||n.call(e),t({cleanup:void 0})},renderCallback({state:e}){return e.message}}),T5=U({title:Re.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"no action",renderCallback(){return c`
                    <${Re.assign(C5)}></${Re}>
                `}}),e({title:"takes time to load",stateInitStatic:{tableInputs:{...A5,showLoading:!0,pagination:{currentPage:1,pageCount:5}}},renderCallback({state:t,updateState:n}){return setTimeout(()=>{n({tableInputs:{...t.tableInputs,...Gc,showLoading:!1}})},5e3),c`
                    <${Re.assign(t.tableInputs)}
                        ${k(Re.events.pageChange,r=>{n({tableInputs:{...t.tableInputs,...Gc,pagination:{currentPage:2,pageCount:5}}})})}
                    ></${Re}>
                `}}),S5.forEach(t=>{var n,r;e({title:t.title,styles:f`
                    ${T(t.styles)}
                `,stateInitStatic:{currentPage:(r=(n=t.inputs)==null?void 0:n.pagination)==null?void 0:r.currentPage},renderCallback({state:o,updateState:i}){var s;const a=(s=t.inputs)!=null&&s.pagination&&o.currentPage?{pagination:{...t.inputs.pagination,currentPage:o.currentPage}}:{};return c`
                        <${Re.assign({...ia,...t.inputs,...a})}
                            ${k(Re.events.pageChange,l=>{i({currentPage:l.detail})})}
                        ></${Re}>
                    `}})}),e({title:"changing child size",styles:f`
                :host {
                    width: 600px;
                }
            `,stateInitStatic:{tableInputs:{...ia,rows:ia.rows.map(t=>({...t,cells:{...t.cells,date:c`
                                    <${Qc}></${Qc}>
                                `}}))}},renderCallback({state:t}){return c`
                    <${Re.assign(t.tableInputs)}></${Re}>
                `}})}}),M5=U({title:lr.tagName,parent:te,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:sr.Small}},{title:"large",inputs:{size:sr.Large}},{title:"whole page",inputs:{size:sr.WholePage},styles:f`
                    :host {
                        width: 500px;
                    }
                `}].forEach(n=>{e({title:n.title,styles:n.styles??f``,renderCallback(){return c`
                        <${lr.assign(n.inputs)}></${lr}>
                    `}})})}}),E5=U({title:D.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return c`
                    <${D.assign({text:"Long string instead of text"})}></${D}>
                `}}),e({title:"Short text",renderCallback(){return c`
                    <${D.assign({text:"Short text"})}></${D}>
                `}}),e({title:"External Link",renderCallback(){return c`
                    <${D.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${D}>
                `}}),e({title:"Copyable",renderCallback(){return c`
                    <${D.assign({text:"Long text that you can copy",copyOnClick:!0})}></${D}>
                `}}),e({title:"Custom CSS vars",styles:f`
                ${D} {
                    ${D.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${D.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${D.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${D.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return c`
                    <${D.assign({text:"long text with custom colors",copyOnClick:!0})}></${D}>
                `}})}}),I5=U({title:Wn.tagName,parent:te,elementExamplesCallback({defineExample:e}){[{title:"halfway",percent:50},{title:"nothing",percent:0},{title:"complete",percent:100},{title:"custom height",styles:f`
                ${Wn} {
                    height: 32px;
                }
                :`,percent:75},{title:"custom width",styles:f`
                ${Wn} {
                    width: 200%;
                }
                :`,percent:75}].forEach(n=>{e({title:n.title,styles:n.styles,renderCallback(){return c`
                        <${Wn.assign({percent:n.percent})}></${Wn}>
                    `}})})}}),zn=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Ne={basic:zn,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...zn.slice(1)],disabled:[{...zn[0],disabled:!0},...zn.slice(1)],noLabels:Nh(zn,e=>({...e,label:void 0}))},B5=U({title:_.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Ne.basic[0].value},renderCallback({state:t,updateState:n}){return c`
                    <${_.assign({entries:Ne.basic,value:t.selectedValue})}
                        ${k(_.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${_}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Ne.basic[0].value},styles:f`
                ${_} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${_.assign({entries:Ne.basic,value:t.selectedValue})}
                        ${k(_.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${_}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Ne.longText[0].value},styles:f`
                ${_} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${_.assign({entries:Ne.longText,value:t.selectedValue})}
                        ${k(_.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${_}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Ne.noLabels[0].value},renderCallback({state:t,updateState:n}){return c`
                    <${_.assign({entries:Ne.noLabels,value:t.selectedValue})}
                        ${k(_.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${_}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Ne.disabled[1].value},renderCallback({state:t,updateState:n}){return c`
                    <${_.assign({entries:Ne.disabled,value:t.selectedValue})}
                        ${k(_.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${_}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Ne.basic[0].value},styles:f`
                ${_} {
                    ${_.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${_.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${_.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${_.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${_.assign({entries:Ne.basic,value:t.selectedValue})}
                        ${k(_.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${_}>
                `}})}}),rt=f`
    ${j} {
        width: 300px;
    }
`,aa={min:10,max:50},q5=U({title:j.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,...aa})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({double:!0,value:t.value,min:0,max:100})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,...aa,suffix:"ICP"})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,min:-100,max:100})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:f`
                ${rt}

                ${j} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,...aa})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:f`
                ${rt}

                ${j} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({double:!0,value:t.value,min:0,max:100})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${j}>
                `}}),e({title:"Color Temperature",stateInitStatic:{value:9},styles:f`
                ${rt}
            `,renderCallback({state:t,updateState:n}){return c`
                    <${j.assign({value:t.value,colorTemperature:!0,min:0,max:100})}
                        ${k(j.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${j}>
                `}})}}),L5=[{title:"default",inputs:{}},{title:"right icon",inputs:{iconPlacement:bh.Right}},{title:"text only",inputs:{variant:vh.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Kc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],P5=U({title:na.tagName,parent:te,controls:{Text:{controlType:H.Text,initValue:"Toggle Button"},Icon:Bs(zd.name)},elementExamplesCallback({defineExample:e}){L5.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Kc.map(n=>!!n.inputs.toggled)},styles:f`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return Kc.map((i,a)=>c`
                            <${na.assign({...t.inputs,toggled:n.buttonStates[a],icon:li[o.Icon],text:o.Text,...hr(i.inputs,["toggled"])})}
                                ${k("click",()=>{const s=[...n.buttonStates];s[a]=!s[a],r({buttonStates:s})})}
                            ></${na}>
                        `)}})})}}),O5=U({parent:te,title:go.tagName,elementExamplesCallback({defineExample:e}){function t({title:n,tooltipContent:r,forceShow:o}){e({title:n,styles:f`
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
                        <${go.assign({tooltipContent:r,forceShow:o})}>
                            <div>Hover me!</div>
                        </${go}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:c`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!1}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!1})}}),D5=U({parent:te,title:ur.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${go.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return c`
                    <${ur}>This is a tooltip.</${ur}>
                `}})}}),N5=[O5,D5],R5=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:f`
            :host {
                width: 500px;
            }

            ${Xn} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:f``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:f``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:Ma},{label:"label here",value:2,icon:Ma},{label:"",value:3,icon:It,disabled:!0},{label:"16px icon",value:4,icon:It},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],F5=U({title:Xn.tagName,parent:te,elementExamplesCallback({defineExample:e}){R5.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:f`
                    ${t.extraStyles??f``}
                `,renderCallback({state:n,updateState:r}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return c`
                        <${Xn.assign({tabs:o,value:n.selectedTab})}
                            ${k(Xn.events.valueChange,i=>{r({selectedTab:i.detail})})}
                        ></${Xn}>
                    `}})})}}),Ah=U({title:"Icons",parent:void 0,controls:kh}),j5=Object.entries(it).map(([e,t])=>U({title:e,parent:Ah,elementExamplesCallback({defineExample:n}){t.map(r=>n({title:r.name,renderCallback({controls:o}){return c`
                                <${Uo.assign({icon:r})}
                                    style=${wo(o)}
                                ></${Uo}>
                            `}}))}}));function Ch(e){const t=H5(e),n=xe(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return le(n).reduce((o,i)=>{const a=n[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function H5(e){typeof e!="string"&&(e=String(e));const r=`{"${eu(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(r);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${r}`),o}}const ui=U({title:"Styles",parent:void 0}),U5=f`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${O.labelFont};
        ${O.monospaceFont};
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
        ${O.h3Font};
    }
`;function W5(e,t,n){const r=Ch(R(n));return e({title:t,styles:U5,renderCallback(){return c`
                <div class="color-example" style=${R(n)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(r).map(o=>c`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const V5=U({title:"Colors",parent:ui,elementExamplesCallback({defineExample:e}){le(b).map(t=>W5(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),z5=f`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${O.labelFont};
        ${O.monospaceFont};
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
`;function Z5(e,t,n){const r=Ch(n);return e({title:t,styles:z5,renderCallback(){return c`
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
            `}})}const Y5=U({title:"Fonts",parent:ui,elementExamplesCallback({defineExample:e}){le(O).map(t=>{const n=O[t];return Z5(e,t,n)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),G5=U({title:"Shadows",parent:ui,elementExamplesCallback({defineExample:e}){Ph($r).forEach(([t,n])=>{e({title:t,styles:f`
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
                        `}})})}}),Q5=[te,Ah,ui,yh],K5=[...j5,...N5,Kv,_v,Jv,e5,t5,i5,a5,V5,s5,c5,d5,h5,f5,Y5,p5,m5,g5,w5,M5,E5,I5,B5,G5,q5,P5,F5,T5].sort((e,t)=>e.title.localeCompare(t.title)),J5=[...Q5,...K5];Ko({tagName:"toniq-design-system-app",styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${qi} {
            height: 100%;
            width: 100%;
            ${O.paragraphFont};
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
            <${qi.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:J5,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${st.NavHeader}>
                    <img src=${xh("/logo.png")} />
                    <p>Design System</p>
                </div>
            </${qi}>
        `}});
