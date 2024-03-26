var hh=Object.defineProperty;var fh=(e,t,r)=>t in e?hh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var In=(e,t,r)=>(fh(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const ph=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ce(e,t){return e?ph.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Dc(e,t){return e&&t.every(r=>Ce(e,r))}function oe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function mh(e){return oe(e).map(t=>e[t])}function gh(e){return oe(e).map(t=>[t,e[t]])}function wh(e){return Object.fromEntries(e)}function vh(e,t){return e.includes(t)}function bh(e,t){return e.map(t)}function ye(e){return!!e}function Rc(e,t){return e.match(t)??[]}function yh(e){return e.replace(/,/g,"")}function _c(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const kh={capitalizeFirstLetter:!1};function $h(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function xh(e,t){return t.capitalizeFirstLetter?$h(e):e}function Th(e,t=kh){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return xh(n,t)}var wr;(function(e){e.Upper="upper",e.Lower="lower"})(wr||(wr={}));function Sh(e){return e.toLowerCase()!==e.toUpperCase()}function bs(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Sh(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===wr.Upper&&o!==o.toUpperCase())return!1;if(t===wr.Lower&&o!==o.toLowerCase())return!1}return!0}function lo(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=bs(a,wr.Lower,{blockNoCaseCharacters:!0})||bs(s,wr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function vr(e,t){return e.split(t)}const Ch=String(NaN);function Hc(e){if(typeof e=="string"&&isNaN(Number(e)))return Ch;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=Rc(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(f=>f.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function Mh(e){return typeof e=="number"?e:Number(typeof e=="string"?yh(e):e)}function Ah(e){return String(e).includes("e")}function Eh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Zi(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}function hr({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}var tn;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(tn||(tn={}));function Ih(e,t){let r=0,n;return o=>{n=o;const i=Date.now();r>i||(e===tn.FirstThenWait?n():e===tn.AfterWait&&setTimeout(()=>{n==null||n()},t.milliseconds),r=i+t.milliseconds)}}function Fc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>qt(r).trim()).join(`
`))}function Lh(e){return e?e.map(qt).filter(ye).join(`
`):""}function qt(e){return e?e instanceof Error?e.message:Ce(e,"message")?String(e.message):String(e):""}function Vc(e){return e instanceof Error?e:new Error(qt(e))}function qh(e,t){const r=Vc(e);return r.message=`${t}: ${r.message}`,r}class Ph extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function co(e){return Array.isArray(e)?"array":typeof e}function K(e,t){return co(e)===t}function Nh(e,t){if(!(K(e,"string")||K(e,"number")||K(e,"symbol")))throw new Ph(t||`value is of type '${co(e)}' but expected a PropertyKey.`)}function Qo(e){try{return Nh(e),!0}catch{return!1}}function je(e){return!!e&&typeof e=="object"}function jc(e,t,r=!1,n={}){const o=oe(e),i=new Set(oe(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Ce(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(f){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${f}`)}const l=e[a],c=t[a];n[a]||zc(l,c,s,r,n[a]??{})})}function zc(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Ce(t,"constructor")&&(!Ce(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(h=>{try{zc(l,h,r,n,o);return}catch(p){return new Error(`entry at index "${c}" did not match expected shape: ${qt(p)}`)}}).filter(ye).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):je(t)&&jc(e,t,n,o)}function ys({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const ks="Failed to compare objects using JSON.stringify";function $s(e,t,r){return ys({source:e,errorHandler(n){if(r)return"";throw n}})===ys({source:t,errorHandler(n){if(r)return"";throw n}})}function nt(e,t,r={}){try{return e===t?!0:je(e)&&je(t)?$s(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>nt(e[o],t[o])):!1:$s(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Vc(n);throw o.message.startsWith(ks)||(o.message=`${ks}: ${o.message}`),o}}function Zc(e){return oe(e).filter(t=>isNaN(Number(t)))}function Wc(e){return Zc(e).map(r=>e[r])}function Oh(e,t){return Wc(t).includes(e)}function Uc(e,t){return oe(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function rn(e,t){return Uc(e,r=>!t.includes(r))}function Bh(e,t){return Uc(e,r=>t.includes(r))}function Dh(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ve(e,t){let r=!1;const n=oe(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(oe(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Wi(e,t){try{return Gc(e,t),!0}catch{return!1}}function Gc(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ma(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ma.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ui(e){const t=Ma();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Rh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Yc=Rh();function _h({min:e,max:t}){const{min:r,max:n}=Eh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Yc.getRandomValues(s),l=s.reduce((c,f,h)=>c+f*256**h,0);while(l>=a);return r+l%o}function Jc(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Yc.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Hh({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Fh(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(ye);return t.length?`?${t.join("&")}`:""}function Vh(e){return Hh({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=vr(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(ye)}function jh(e,t){const r=K(e,"string")?new URL(e):e,n=Vh(r.search),o=Object.fromEntries(n);return t&&jc(o,t),o}const zh="%",Zh="px";function Ft(e){return Aa({value:e,suffix:Zh})}function ei(e){return Aa({value:e,suffix:zh})}function Aa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const ti="://";function nn(...e){const t=e.join("/"),[r,n=""]=t.includes(ti)?t.split(ti):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,f)=>{if(i)return s;const h=f[c+1];let p=l;const g=!l.includes("?")&&(h==null?void 0:h.startsWith("?"));if(h!=null&&h.startsWith("?")||g){i=!0;let w=!1;const $=f.slice(g?c+2:c+1).reduce((k,S)=>(S.includes("#")&&(w=!0),w?k.concat(S):[k,S].join("&")),"");p=[l,h,$].join("")}return s.concat(p)},[]);return[r,r?ti:"",a.join("/")].join("")}const Wh=["k","M","B","T","P","E","Z","Y"];function Ea({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function Uh(e,t,r){const[n,o]=vr(e,"."),i=Hc(n),a=Rc(i,/,/g).length,s=t[a-1],[l,c]=vr(i,","),f=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Ea({beforeDot:l,afterDot:f,maxLength:r-1}),s].join("")}const xs=3;function Gh({input:e,maxLength:t}){const r=String(e),[n,o]=vr(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=vr(n,"."),f=i.length+xs;return f===t?[l,s].join(""):f>t?a==="-"?"0":String(1/0):[Ea({afterDot:c,beforeDot:l,maxLength:t-i.length+xs}),s].join("")}function Yh(e,t){const[r,n]=vr(Hc(e),".");if(r.length<=t)return Ea({beforeDot:r,afterDot:n,maxLength:t})}function Jh(e,{customSuffixes:t=Wh,maxLength:r=6}={}){const n=Mh(e);if(isNaN(n)||n===1/0)return String(n);if(Ah(n))return Gh({input:n,maxLength:r});const o=String(n),i=Yh(o,r);return i??Uh(o,t,r)}function Kh(e,t){return Ce(e,"entryType")&&e.entryType===t}var we;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(we||(we={}));function er(e,t){return e.controlType===t}var O;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(O||(O={}));const Kc=Symbol("any-type"),Xh={[O.Checkbox]:!1,[O.Color]:"",[O.Dropdown]:"",[O.Hidden]:Kc,[O.Number]:0,[O.Text]:""};function Qh(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=Xh[o.controlType];i!==Kc&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ia(e,t){const r=uo(e.title);return e.parent?[...Ia(e.parent,!1),uo(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function uo(e){return _c(e).toLowerCase().replaceAll(/\s/g,"-")}function ef({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function R(e){const t={...e,entryType:we.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:we.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ye)};r.add(n.title),t.elementExamples[uo(o.title)]=o}}),t}var ot;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ot||(ot={}));async function Gi(e=1){const t=Ma();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function tf(e){return rf(e,1)}async function rf(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Gc(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jn=globalThis,La=Jn.ShadowRoot&&(Jn.ShadyCSS===void 0||Jn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qa=Symbol(),Ts=new WeakMap;let Xc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==qa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(La&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ts.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ts.set(r,t))}return t}toString(){return this.cssText}};const N=e=>new Xc(typeof e=="string"?e:e+"",void 0,qa),Kn=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Xc(r,e,qa)},nf=(e,t)=>{if(La)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Jn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Ss=La?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return N(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:of,defineProperty:af,getOwnPropertyDescriptor:sf,getOwnPropertyNames:lf,getOwnPropertySymbols:cf,getPrototypeOf:uf}=Object,xt=globalThis,Cs=xt.trustedTypes,df=Cs?Cs.emptyScript:"",ri=xt.reactiveElementPolyfillSupport,Wr=(e,t)=>e,ho={toAttribute(e,t){switch(t){case Boolean:e=e?df:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Pa=(e,t)=>!of(e,t),Ms={attribute:!0,type:String,converter:ho,reflect:!1,hasChanged:Pa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),xt.litPropertyMetadata??(xt.litPropertyMetadata=new WeakMap);let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ms){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&af(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=sf(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ms}static _$Ei(){if(this.hasOwnProperty(Wr("elementProperties")))return;const t=uf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wr("properties"))){const r=this.properties,n=[...lf(r),...cf(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ss(o))}else t!==void 0&&r.push(Ss(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:ho).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:ho;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Pa)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Wr("elementProperties")]=new Map,sr[Wr("finalized")]=new Map,ri==null||ri({ReactiveElement:sr}),(xt.reactiveElementVersions??(xt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=globalThis,fo=Ur.trustedTypes,As=fo?fo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Na="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,Oa="?"+dt,hf=`<${Oa}>`,Gt=document,on=()=>Gt.createComment(""),an=e=>e===null||typeof e!="object"&&typeof e!="function",Qc=Array.isArray,eu=e=>Qc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ni=`[ 	
\f\r]`,qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Es=/-->/g,Is=/>/g,Ot=RegExp(`>|${ni}(?:([^\\s"'>=/]+)(${ni}*=${ni}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ls=/'/g,qs=/"/g,tu=/^(?:script|style|textarea|title)$/i,ru=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ff=ru(1),pf=ru(2),Pe=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Ps=new WeakMap,Vt=Gt.createTreeWalker(Gt,129);function nu(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return As!==void 0?As.createHTML(t):t}const ou=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=qr;for(let s=0;s<r;s++){const l=e[s];let c,f,h=-1,p=0;for(;p<l.length&&(a.lastIndex=p,f=a.exec(l),f!==null);)p=a.lastIndex,a===qr?f[1]==="!--"?a=Es:f[1]!==void 0?a=Is:f[2]!==void 0?(tu.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Ot):f[3]!==void 0&&(a=Ot):a===Ot?f[0]===">"?(a=o??qr,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,c=f[1],a=f[3]===void 0?Ot:f[3]==='"'?qs:Ls):a===qs||a===Ls?a=Ot:a===Es||a===Is?a=qr:(a=Ot,o=void 0);const g=a===Ot&&e[s+1].startsWith("/>")?" ":"";i+=a===qr?l+hf:h>=0?(n.push(c),l.slice(0,h)+Na+l.slice(h)+dt+g):l+dt+(h===-2?s:g)}return[nu(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class sn{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,f]=ou(t,r);if(this.el=sn.createElement(c,n),Vt.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Vt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Na)){const p=f[a++],g=o.getAttribute(h).split(dt),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?au:w[1]==="?"?su:w[1]==="@"?lu:wn}),o.removeAttribute(h)}else h.startsWith(dt)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(tu.test(o.tagName)){const h=o.textContent.split(dt),p=h.length-1;if(p>0){o.textContent=fo?fo.emptyScript:"";for(let g=0;g<p;g++)o.append(h[g],on()),Vt.nextNode(),l.push({type:2,index:++i});o.append(h[p],on())}}}else if(o.nodeType===8)if(o.data===Oa)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(dt,h+1))!==-1;)l.push({type:7,index:i}),h+=dt.length-1}i++}}static createElement(t,r){const n=Gt.createElement("template");return n.innerHTML=t,n}}function Yt(e,t,r=e,n){var a,s;if(t===Pe)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=an(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Yt(e,o._$AS(e,t.values),o,n)),t}class iu{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Gt).importNode(r,!0);Vt.currentNode=o;let i=Vt.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Tr(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new cu(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Vt.nextNode(),a++)}return Vt.currentNode=Gt,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Tr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Yt(this,t,r),an(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Pe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):eu(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Q&&an(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=sn.createElement(nu(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new iu(o,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(t){let r=Ps.get(t.strings);return r===void 0&&Ps.set(t.strings,r=new sn(t)),r}k(t){Qc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Tr(this.S(on()),this.S(on()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class wn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Q}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Yt(this,t,r,0),a=!an(t)||t!==this._$AH&&t!==Pe,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Yt(this,s[n+l],r,l),c===Pe&&(c=this._$AH[l]),a||(a=!an(c)||c!==this._$AH[l]),c===Q?t=Q:t!==Q&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class au extends wn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class su extends wn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class lu extends wn{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Yt(this,t,r,0)??Q)===Pe)return;const n=this._$AH,o=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Q&&(n===Q||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class cu{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Yt(this,t)}}const mf={P:Na,A:dt,C:Oa,M:1,L:ou,R:iu,D:eu,V:Yt,I:Tr,H:wn,N:su,U:lu,B:au,F:cu},oi=Ur.litHtmlPolyfillSupport;oi==null||oi(sn,Tr),(Ur.litHtmlVersions??(Ur.litHtmlVersions=[])).push("3.1.2");const gf=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Tr(t.insertBefore(on(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Gr=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gf(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Pe}};var Bc;Gr._$litElement$=!0,Gr.finalized=!0,(Bc=globalThis.litElementHydrateSupport)==null||Bc.call(globalThis,{LitElement:Gr});const ii=globalThis.litElementPolyfillSupport;ii==null||ii({LitElement:Gr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:wf}=mf,Ns=()=>document.createComment(""),Pr=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Ns(),o),s=n.insertBefore(Ns(),o);r=new wf(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const f=c.nextSibling;n.insertBefore(c,o),c=f}}}return r},Bt=(e,t,r=e)=>(e._$AI(t,r),e),vf={},bf=(e,t=vf)=>e._$AH=t,yf=e=>e._$AH,ai=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pt=e=>(...t)=>({_$litDirective$:e,values:t});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kf={attribute:!0,type:String,converter:ho,reflect:!1,hasChanged:Pa},$f=(e=kf,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function xf(e){return(t,r)=>typeof r=="object"?$f(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=Pt(class extends pt{constructor(e){var t;if(super(e),e.type!==vn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=e=>e??Q;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yi extends pt{constructor(t){if(super(t),this.it=Q,t.type!==vn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Q||t==null)return this._t=void 0,this.it=t;if(t===Pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Yi.directiveName="unsafeHTML",Yi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bs extends Yi{}Bs.directiveName="unsafeSVG",Bs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tf(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Sf=Pt(class extends pt{constructor(e){if(super(e),e.type!==vn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=yf(e),{values:i,keys:a}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let c,f,h=0,p=o.length-1,g=0,w=i.length-1;for(;h<=p&&g<=w;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(s[h]===a[g])l[g]=Bt(o[h],i[g]),h++,g++;else if(s[p]===a[w])l[w]=Bt(o[p],i[w]),p--,w--;else if(s[h]===a[w])l[w]=Bt(o[h],i[w]),Pr(e,l[w+1],o[h]),h++,w--;else if(s[p]===a[g])l[g]=Bt(o[p],i[g]),Pr(e,o[h],o[p]),p--,g++;else if(c===void 0&&(c=Ds(a,g,w),f=Ds(s,h,p)),c.has(s[h]))if(c.has(s[p])){const $=f.get(a[g]),k=$!==void 0?o[$]:null;if(k===null){const S=Pr(e,o[h]);Bt(S,i[g]),l[g]=S}else l[g]=Bt(k,i[g]),Pr(e,o[h],k),o[$]=null;g++}else ai(o[p]),p--;else ai(o[h]),h++;for(;g<=w;){const $=Pr(e,l[w+1]);Bt($,i[g]),l[g++]=$}for(;h<=p;){const $=o[h++];$!==null&&ai($)}return this.ut=a,bf(e,l),Pe}}),Cf=Sf;class uu extends Gr{}function mt(e){if(je(e))return ve(e,(r,n)=>{if(!K(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(lo(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?N(r):r.startsWith("-")?Kn`-${N(r)}`:Kn`--${N(r)}`;return{name:a,value:Kn`var(${a}, ${N(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${mt.name}' function.`)}function po({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Mf(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Xn(e){return Ce(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ba(e){return Ce(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function du(e){return e.map(t=>Xn(t)?t.definition:t).filter(t=>Ba(t))}const hu=new WeakMap;function Af(e,t){var o;const r=du(t);return(o=fu(hu,[e,...r]).value)==null?void 0:o.template}function Ef(e,t,r){const n=du(t);return mu(hu,[e,...n],r)}function fu(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=pu(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?fu(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function pu(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function mu(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=pu(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),mu(l,t,r,n+1)}const If=new WeakMap;function gu(e,t,r){const n=Af(e,t),o=n??r();if(!n){const s=Ef(e,t,o);if(s.result)If.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Mf(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function wu(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,f)=>{const h=o.length-1,p=o[h],g=f-1,w=t[g];n&&n(c);let $,k=[];if(typeof p=="string"&&($=r(p,c,w),$)){o[h]=p+$.replacement,a.push(g);const C=$.getExtraValues;k=C?C(w):[],k.length&&C?(o[h]+=" ",k.forEach((_,U)=>{U&&o.push(" ")}),s.push(_=>{const U=_[g],se=C(U);return{index:g,values:se}}),o.push(c)):o[h]+=c}$||o.push(c);const S=e.raw[f];$?(i[h]=i[h]+$.replacement+S,k.length&&k.forEach(()=>{i.push("")})):i.push(S)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const f=s.map(h=>h(c)).flat();return{valueIndexDeletions:a,valueInsertions:f}}}}function Lf(...[e,t,r]){if(Ba(r))return{replacement:r.tagName,getExtraValues:void 0}}function qf(e,t){return wu(e,t,Lf)}function m(e,...t){const r=gu(e,t,()=>qf(e,t));return Kn(r.strings,...r.values)}const Pf={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function vu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof uu?!0:vu(r)}function bu(e,t){const r=e.instanceState;oe(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&oe(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Nf(e)}function Nf(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Rs(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Of extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Da(){return e=>{var t;return t=class extends Of{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function ee(){return Da()}function Bf(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Da()([e,n].join("-"));return r[n]=o,r},{}):{}}const Df="_elementVirStateSetup";function Rf(e){return je(e)?Df in e:!1}function _f(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return co(e)===co(t)&&r}const yu="__vir__shape__definition__key__do__not__use__in__actual__objects";function ku(e){return Ce(e,yu)}const Ra=Symbol("and"),$u=Symbol("instance"),xu=Symbol("enum"),Tu=Symbol("exact"),_a=Symbol("indexed-keys"),Ha=Symbol("or"),Fa=Symbol("unknown"),Hf=[Ra,xu,Tu,_a,$u,Ha,Fa],Su="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Ff(...e){return Ro(e,Ra)}function Vf(...e){return Ro(e,_a)}function tt(...e){return Ro(e,Ha)}function jf(e){return Ro([e],Fa)}function qo(e){return Kt(e,Ra)}function Po(e){return Kt(e,$u)}function No(e){return Kt(e,xu)}function Oo(e){return Kt(e,Tu)}function Bo(e){return Kt(e,_a)}function bn(e){return Kt(e,Ha)}function Do(e){return Kt(e,Fa)}function Kt(e,t){const r=yn(e);return!!r&&r.specifierType===t}function Ro(e,t){return{[Su]:!0,specifierType:t,parts:e}}function jt(e,t,r,n){const o=yn(t);if(o){if(Po(o))return e instanceof o.parts[0];if(qo(o))return o.parts.every(i=>jt(e,i));if(bn(o))return o.parts.some(i=>jt(e,i));if(Oo(o))return je(e)?jt(e,o.parts[0]):e===o.parts[0];if(No(o))return Object.values(o.parts[0]).some(i=>i===e);if(Bo(o))return je(e)?zf(e,o,!!r)&&mh(e).every(i=>jt(i,o.parts[0].values)):!1;if(Do(o))return!0}return n?t===e:_f(e,t)}function zf(e,t,r){const n=t.parts[0].required,o=t.parts[0].keys;if(r)if(n){const i=Va(t);return K(i,"boolean")?i:i.every(a=>oe(e).some(s=>jt(s,a,!1,!0)))}else return!0;else return oe(e).every(i=>jt(i,o))}function Va(e){const t=e.parts[0].keys,r=yn(t);if(Qo(t))return[t];if(r){if(Po(r))return!1;if(qo(r))return!1;if(bn(r)){const n=r.parts.map(i=>Va(Vf({...e.parts[0],keys:i})));let o;return n.forEach(i=>{K(i,"boolean")&&(i&&o==null?o=!0:o=!1)}),K(o,"boolean")?o:n.flat().filter(Qo)}else if(Oo(r)){const n=r.parts.filter(Qo);return n.length!==r.parts.length?!1:n}else{if(No(r))return Object.values(r.parts[0]);if(Bo(r))return!1;if(Do(r))return!0}}return!1}function yn(e){if(je(e)&&Ce(e,Su)){if(!Ce(e,"parts")||!K(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Ce(e,"specifierType")||!vh(Hf,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class _s extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Ji(e,t=!1){return _r(e)}function _r(e){const t=yn(e);if(t)if(Po(t)){const r=t.parts[0];try{return new r}catch(n){throw new _s(`Failed to create default value for classShape for class '${r.name}': ${qt(n)}`)}}else{if(bn(t)||Oo(t))return _r(t.parts[0]);if(qo(t))return t.parts.reduce((r,n)=>Object.assign(r,_r(n)),{});if(No(t))return Object.values(t.parts[0])[0];if(Bo(t)){const r=Va(t);return!t.parts[0].required||K(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,_r(t.parts[0].values)]))}else{if(Do(t))return t.parts[0]??{};throw new _s(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return ku(e)?Ji(e.shape):e instanceof RegExp?e:K(e,"array")?e.map(_r):je(e)?ve(e,(r,n)=>Ji(n)):e}function kn(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return Ji(e)},[yu]:!0}}class Be extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function Zf(e,t,r={}){try{return Cu(e,t,r),!0}catch{return!1}}function Cu(e,t,r={}){ct({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function Ki(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ct({subject:e,shape:t,keys:r,options:n}){if(Do(t))return!0;if(ku(t))return ct({subject:e,shape:t.shape,keys:r,options:n});const o=Ki(r);if(yn(e))throw new Be(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!jt(e,t,!n.ignoreExtraKeys))throw new Be(`Subject does not match shape definition at key ${o}`);if(K(t,"function"))return K(e,"function");if(Po(t))return e instanceof t.parts[0];if(je(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(f=>[f,!1])),l=[];let c=!1;if(bn(t)){const f=[];c=t.parts.some(h=>{try{const p=ct({subject:e,shape:h,keys:r,options:{...n}});return Object.assign(s,p),!0}catch(p){if(p instanceof Be)return f.push(p),!1;throw p}}),!c&&Wi(f,1)&&l.push(f[0])}else if(qo(t))c=t.parts.every(f=>{try{const h=ct({subject:e,shape:f,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(s,h),!0}catch(h){if(h instanceof Be)return l.push(h),!1;throw h}});else if(Oo(t)){const f=ct({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(s,f),c=!0}else{if(No(t))throw new Be(`Cannot compare an enum specifier to an object at ${o}`);if(K(t,"array")&&K(a,"array"))c=a.every((f,h)=>{const p=t.some(g=>{try{return ct({subject:f,shape:g,keys:[...r,h],options:n}),!0}catch(w){if(w instanceof Be)return l.push(w),!1;throw w}});return s[h]=p,p});else if(Bo(t)){const f=ve(e,(h,p)=>(n.ignoreExtraKeys||ct({shape:t.parts[0].keys,subject:h,keys:[...r,h],options:n}),ct({shape:t.parts[0].values,subject:p,keys:[...r,h],options:n}),!0));Object.assign(s,f),c=!0}else{const f=Wf({keys:r,options:n,shape:t,subject:e});Object.assign(s,f),c=!0}}if(l.length)throw new Be(Lh(l));if(!c){const h=`Failed on key(s): ${Object.keys(s).filter(p=>!s[p]).map(p=>Ki([...r,p])).join(",")}`;throw new Be(h)}return n.ignoreExtraKeys||Object.entries(s).forEach(([f,h])=>{if(!h)throw new Be(`subject as extra key '${f}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Wf({keys:e,options:t,shape:r,subject:n}){const o=Ki(e),i={};if(je(r)){const a=new Set(oe(n)),s=new Set(oe(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Be(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var p;const c=r[l],f=bn(c)?c.parts.includes(void 0):!1,h=((p=c==null?void 0:c.includes)==null?void 0:p.call(c,void 0))||c===void 0;if(!a.has(l)&&!f&&!h)throw new Be(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const f=r[l];ct({subject:c,shape:f,keys:[...e,l],options:t}),i[l]=!0})}else throw new Be(`shape definition at ${o} was not an object.`);return i}const Uf=kn({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:jf()});function si(e){return Zf(e,Uf,{allowExtraKeys:!0})}function Mu(e,t){t in e||xf()(e,t)}function Gf(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Hs(e,t){const r=e;function n(a){t?Gf(a,e,e.tagName):Mu(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=Rf(l)?l._elementVirStateSetup():l;n(s);const f=r[s];function h(w){a[s]=w,r[s]=w}const p=e.observablePropertyListenerMap[s];if(f!==c&&si(f)&&(p!=null&&p.length)&&f.removeListener(p),si(c))if(p)c.addListener(p);else{let w=function(){e.requestUpdate()};var g=w;e.observablePropertyListenerMap[s]=w,c.addListener(w)}else si(f)&&(e.observablePropertyListenerMap[s]=void 0);return h(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function Yf(e){return e?ve(e,t=>t):{}}function Jf({hostClassNames:e,cssVars:t}){return{hostClasses:ve(e,(r,n)=>({name:N(n),selector:N(`:host(.${n})`)})),cssVars:t}}function Kf({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&oe(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Xf({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function o(a){oe(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Qf(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var e1=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function _o(e){var t;const r=e;if(!K(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!K(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Pf,...r.options},o=Bf(r.tagName,r.events),i=Yf(r.hostClasses);r.hostClasses&&Rs(r.tagName,r.hostClasses),r.cssVars&&Rs(r.tagName,r.cssVars);const a=r.cssVars?mt(r.cssVars):{},s=Qf(r.slotNames),l=typeof r.styles=="function"?r.styles(Jf({hostClassNames:i,cssVars:a})):r.styles||m``,c=r.renderCallback;function f(...[p]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:h,inputs:p}}const h=(t=class extends uu{createRenderParams(){return Xf({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{vu(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${_o.name}' to define ${r.tagName}.`),this._hasRendered=!0;const p=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(p)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=c(p);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Kf({host:p.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:p.state,inputs:p.inputs}),this._lastRenderedProps={inputs:{...p.inputs},state:{...p.state}},g}catch(p){const g=qh(p,`Failed to render ${r.tagName}`);return console.error(g),this._lastRenderError=g,qt(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const p=this.createRenderParams();if(r.initCallback(p)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const p=this.createRenderParams();if(r.cleanupCallback(p)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(p){bu(this,p)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Hs(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Hs(this,!n.allowPolymorphicState)});const p=r.stateInitStatic||{};oe(p).forEach(g=>{Mu(this,g),this.instanceState[g]=p[g]}),this.definition=h}},e1(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(h,{name:{value:Th(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:p=>p instanceof h,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,h),h}function Au(){return e=>{const t=e;if(!K(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return _o({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function ja(e,t){return ln(e,t),e.element}function t1(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ln(e,t){const r=t1(e),n=r?`: in ${r}`:"";if(e.type!==vn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function r1(e){const t=Pt(class extends pt{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ja(r,e)}render(r){return this.element.setAttribute(e,r),Pe}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function T(e,t){return n1(e,t)}const n1=Pt(class extends pt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ja(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Pe}}),Fs="onDomCreated",Vs=Pt(class extends pt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ln(e,Fs)}update(e,[t]){ln(e,Fs);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),li="onResize",br=Pt(class extends pt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ln(e,li)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${li} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ln(e,li),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function $e(e,t,r){return Tf(e,()=>t,()=>r)}const{attributeDirective:o1,attributeSelector:rv,attributeName:nv}=r1("data-test-id");function i1(e){return{_elementVirStateSetup:e}}function za(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Au()(r(n))),defineElementNoInputs:n=>(t(n),_o(r(n)))}}function a1(e,t){return t?js(e,t):js(void 0,e)}const js=Pt(class extends pt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ja(e,"assign")}render(e,t){return bu(this.element,t),Pe}});function s1(...[e,t,r]){const n=Xn(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Ba(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!n.elementOptions.ignoreUnsetInputs&&!Xn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(c){const f=Xn(c)?c.inputs:void 0;return[o&&f?a1(f):void 0].filter(ye)}}}function l1(e){}function c1(e){return wu(e.strings,e.values,s1,l1)}function u(e,...t){const r=ff(e,...t),n=gu(e,t,()=>c1(r));return{...r,strings:n.strings,values:n.values}}const u1={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},d1=Object.keys(u1),h1=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...d1,...h1];function Hr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const f1={[we.ElementExample]:()=>[],[we.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Qh(e.controls,e.title)].filter(ye),[we.Root]:()=>[]},mo="_isBookTreeNode",Eu=new Map;function p1(e){return Eu.get(e)}function m1(e,t){Dh(Eu,e,()=>t)}function fr(e,t){return!!(Iu(e)&&e.entry.entryType===t)}function Iu(e){return!!(Dc(e,[mo,"entry"])&&e[mo])}function g1(){return{[mo]:!0,entry:{entryType:we.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function w1({entries:e,debug:t}){const r=p1(e);if(r)return r;const n=g1();e.forEach(a=>Za({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Lu(n),i={tree:n,flattenedNodes:o};return m1(e,i),t&&console.info("element-book tree:",n),i}function v1(e,t,r){if(!t.parent)return e;const n=Xi(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Za({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Xi(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ia(t,!1)}`);return o}function Za({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=f1[t.entryType](t);t.errors.push(...o);const i=v1(e,t,r),a=uo(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[mo]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Kh(t,we.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Za({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Xi(e,t){const r=Iu(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ia(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Lu(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Lu(o));return[e,...r].flat()}function Wa(e,t){return Ua(e,["",...t],void 0)}function Ua(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Ua(i,n,r);return{...e.controls,...a}}function b1(e,t,r){const n={...e};return Ua(n,["",...t],r),n}function qu(e,t){const r=(t==null?void 0:t.controls)||(fr(e,we.Page)?ve(e.entry.controls,(o,i)=>i.initValue):{});return{children:ve(e.children,(o,i)=>{var a;return qu(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function y1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const k1=Jc(32);function Qn(e){return e.join(k1)}function Pu(e){if(!e.length)return[];const t=Qn(e),r=Pu(e.slice(0,-1));return[t,...r]}const $1=["error","errors"];function x1(e){return $1.includes(e)}function T1({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Qn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&x1(t),a=Qn(o.fullUrlBreadcrumbs);if(y1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=Pu(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Qn(o.fullUrlBreadcrumbs),a=r[i];if(!K(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var Se;(function(e){e.Search="search",e.Book="book"})(Se||(Se={}));function Qi(e){return e[0]===Se.Book?"":e[1]?decodeURIComponent(e[1]):""}const yr={hash:void 0,paths:[Se.Book],search:void 0},S1=0;function Ho(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==S1)}class Fo extends Error{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class zs extends Fo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const cn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const C1=globalThis.history.pushState;function Zs(...e){const t=C1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(cn)),t}const M1=globalThis.history.replaceState;function Ws(...e){const t=M1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(cn)),t}function A1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Zs)throw new zs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ws)throw new zs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Zs,globalThis.history.replaceState=Ws,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(cn))})}}function E1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?jh(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function Nu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ou({routeBase:e,windowPath:t}){if(!e)return"";const r=Nu(e);if(Bu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Ou({routeBase:n,windowPath:t}):""}function Bu({routeBase:e,windowPath:t}){const r=Nu(e);return r?t.startsWith(`/${r}`):!1}class I1 extends Fo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function Du(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Us=6;function Gs(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Us)throw new I1(`Route sanitization depth has exceed the max of ${Us} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Du(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ci extends Fo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function L1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ci(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ci(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ci(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function q1(e,t,r=!1){const n=Ru(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ru(e,t){var s;const r=Bu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Fh(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(ye).join("/")}${n}${i}`}function P1(e={}){L1(e),A1();const t=e.routeBase?Ou({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Gs(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},f=o.sanitizeFullRoute(c);if(!(!s&&Du(l,f)))return q1(f,t,a)},createRoutesUrl(i){return Ru(i,t)},getCurrentRawRoutes(){return E1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Fo(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(cn,n),r=!0),i&&Gs(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(cn,n),r=!1),a},sanitizationDepth:0};return o}function N1(e){return P1({routeBase:e,routeSanitizer(t){return{paths:O1(t.paths),hash:void 0,search:void 0}}})}function O1(e){const t=e[0];if(Oh(t,Se)){if(t===Se.Book)return[Se.Book,...e.slice(1)];if(t===Se.Search)return e[1]?[t,e[1]]:[Se.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return yr.paths}const V=mt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),B1={nav:{hover:{background:V["element-book-nav-hover-background-color"],foreground:V["element-book-nav-hover-foreground-color"]},active:{background:V["element-book-nav-active-background-color"],foreground:V["element-book-nav-active-foreground-color"]},selected:{background:V["element-book-nav-selected-background-color"],foreground:V["element-book-nav-selected-foreground-color"]}},accent:{icon:V["element-book-accent-icon-color"]},page:{background:V["element-book-page-background-color"],backgroundFaint1:V["element-book-page-background-faint-level-1-color"],backgroundFaint2:V["element-book-page-background-faint-level-2-color"],foreground:V["element-book-page-foreground-color"],foregroundFaint1:V["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:V["element-book-page-foreground-faint-level-2-color"]}};function D1(e,t){_u(e,t,B1)}function ea(e){return Ce(e,"_$cssResult$")}function Ys(e){return Dc(e,["name","value","default"])&&K(e.default,"string")&&ea(e.name)&&ea(e.value)}function _u(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(ea(o)){if(!Ys(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);po({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Ys(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);_u(e,o,i)}})}function he(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function $n(e){return Tt(e)==="string"}function Tt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function go(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Hu(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Fu(e){return e[e.length-1]}function wo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Vu(e,t,r){return(r-e)/(t-e)}function Ga(e,t,r){return wo(t[0],t[1],Vu(e[0],e[1],r))}function ju(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var R1=Object.freeze({__proto__:null,interpolate:wo,interpolateInv:Vu,isString:$n,last:Fu,mapRange:Ga,multiplyMatrices:he,parseCoordGrammar:ju,parseFunction:Hu,toPrecision:go,type:Tt});class _1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Mt=new _1;var it={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Xe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function ta(e){return Array.isArray(e)?e:Xe[e]}function vo(e,t,r,n={}){if(e=ta(e),t=ta(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Mt.run("chromatic-adaptation-start",o),o.M||(o.W1===Xe.D65&&o.W2===Xe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Xe.D50&&o.W2===Xe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Mt.run("chromatic-adaptation-end",o),o.M)return he(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const H1=75e-6,Ie=class Ie{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Ie.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=ta(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:F1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Mt.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=H1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Js(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Js(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ie.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ie.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Ie.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Ie)return t;if(Tt(t)==="string"){let o=Ie.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Ie.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Tt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Ie.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Tt(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Ie.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let f=o.coords[c];if(c.toLowerCase()===a||((l=f.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...f};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};In(Ie,"registry",{}),In(Ie,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Ie;function F1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Js(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=ju(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Ga(s,l,i)),i=go(i,o),c&&(i+=c),i})}return e}var Fe=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Me extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Fe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=he(t.toXYZ_M,r);return this.white!==this.base.white&&(n=vo(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=vo(this.base.white,this.white,r),he(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function zu(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Mt.run("parse-start",r),r.color)return r.color;if(r.parsed=Hu(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),f=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let p of M.all){let g=p.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const w=Object.keys(p.coords).map(($,k)=>r.parsed.args[k]||0);return t&&(t.formatId="color"),{spaceId:p.id,coords:w,alpha:f}}}let h="";if(c in M.registry){let p=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;p&&(h=`Did you mean color(${p})?`)}throw new TypeError(`Cannot parse color(${c}). `+(h||"Missing a plugin?"))}else for(let c of M.all){let f=c.getFormat(l);if(f&&f.type==="function"){let h=1;(f.lastAlpha||Fu(r.parsed.args).alpha)&&(h=r.parsed.args.pop());let p=r.parsed.args,g;return f.coordGrammar&&(g=Object.entries(c.coords).map(([w,$],k)=>{var ge;let S=f.coordGrammar[k],C=(ge=p[k])==null?void 0:ge.type,_=S.find(fe=>fe==C);if(!_){let fe=$.name||w;throw new TypeError(`${C} not allowed for ${fe} in ${l}()`)}let U=_.range;C==="<percentage>"&&(U||(U=[0,1]));let se=$.range||$.refRange;return U&&se&&(p[k]=Ga(U,se,p[k])),_})),t&&Object.assign(t,{formatId:f.name,types:g}),{spaceId:c.id,coords:p,alpha:h}}}}else for(let l of M.all)for(let c in l.formats){let f=l.formats[c];if(f.type!=="custom"||f.test&&!f.test(r.str))continue;let h=f.parse(r.str);if(h)return h.alpha??(h.alpha=1),t&&(t.formatId=c),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Z(e){if(!e)throw new TypeError("Empty color reference");$n(e)&&(e=zu(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function xn(e,t){return t=M.get(t),t.from(e)}function Ve(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return xn(e,r)[n]}function Zu(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function At(e,t,r){if(e=Z(e),arguments.length===2&&Tt(arguments[1])==="object"){let n=arguments[1];for(let o in n)At(e,o,n[o])}else{typeof r=="function"&&(r=r(Ve(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=xn(e,n);i[o]=r,Zu(e,n,i)}return e}var Ya=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Fe,fromBase:e=>vo(Fe.white,"D50",e),toBase:e=>vo("D50",Fe.white,e),formats:{color:{}}});const V1=216/24389,Ks=24/116,Ln=24389/27;let ui=Xe.D50;var Le=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ui,base:Ya,fromBase(e){let r=e.map((n,o)=>n/ui[o]).map(n=>n>V1?Math.cbrt(n):(Ln*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ks?Math.pow(t[0],3):(116*t[0]-16)/Ln,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ln,t[2]>Ks?Math.pow(t[2],3):(116*t[2]-16)/Ln].map((n,o)=>n*ui[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Vo(e){return(e%360+360)%360}function j1(e,t){if(e==="raw")return t;let[r,n]=t.map(Vo),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var un=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Le,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Vo(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Xs=25**7,bo=Math.PI,Qs=180/bo,tr=bo/180;function ra(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Le.from(e),l=un.from(Le,[i,a,s])[1],[c,f,h]=Le.from(t),p=un.from(Le,[c,f,h])[1];l<0&&(l=0),p<0&&(p=0);let w=((l+p)/2)**7,$=.5*(1-Math.sqrt(w/(w+Xs))),k=(1+$)*a,S=(1+$)*f,C=Math.sqrt(k**2+s**2),_=Math.sqrt(S**2+h**2),U=k===0&&s===0?0:Math.atan2(s,k),se=S===0&&h===0?0:Math.atan2(h,S);U<0&&(U+=2*bo),se<0&&(se+=2*bo),U*=Qs,se*=Qs;let ge=c-i,fe=_-C,W=se-U,le=U+se,We=Math.abs(W),xe;C*_===0?xe=0:We<=180?xe=W:W>180?xe=W-360:W<-180?xe=W+360:console.log("the unthinkable has happened");let Qt=2*Math.sqrt(_*C)*Math.sin(xe*tr/2),Ir=(i+c)/2,Xo=(C+_)/2,ms=Math.pow(Xo,7),at;C*_===0?at=le:We<=180?at=le/2:le<360?at=(le+360)/2:at=(le-360)/2;let gs=(Ir-50)**2,lh=1+.015*gs/Math.sqrt(20+gs),ws=1+.045*Xo,Lr=1;Lr-=.17*Math.cos((at-30)*tr),Lr+=.24*Math.cos(2*at*tr),Lr+=.32*Math.cos((3*at+6)*tr),Lr-=.2*Math.cos((4*at-63)*tr);let vs=1+.015*Xo*Lr,ch=30*Math.exp(-1*((at-275)/25)**2),uh=2*Math.sqrt(ms/(ms+Xs)),dh=-1*Math.sin(2*ch*tr)*uh,En=(ge/(r*lh))**2;return En+=(fe/(n*ws))**2,En+=(Qt/(o*vs))**2,En+=dh*(fe/(n*ws))*(Qt/(o*vs)),Math.sqrt(En)}const z1=75e-6;function Yr(e,t=e.space,{epsilon:r=z1}={}){e=Z(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function dn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Et(e,{method:t=it.gamut_mapping,space:r=e.space}={}){if($n(arguments[1])&&(r=arguments[1]),r=M.get(r),Yr(e,r,{epsilon:0}))return Z(e);let n=Re(e,r);if(t!=="clip"&&!Yr(e,r)){let o=Et(dn(n),{method:"clip",space:r});if(ra(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=Re(n,a),f=(i.range||i.refRange)[0],h=.01,p=f,g=Ve(l,s);for(;g-p>h;){let w=dn(l);w=Et(w,{space:r,method:"clip"}),ra(l,w)-2<h?p=Ve(l,s):g=Ve(l,s),At(l,s,(p+g)/2)}n=Re(l,r)}else n=o}if(t==="clip"||!Yr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Re(n,e.space)),e.coords=n.coords,e}Et.returns="color";function Re(e,t,{inGamut:r}={}){e=Z(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Et(o)),o}Re.returns="color";function yo(e,{precision:t=it.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=Z(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Yr(e)&&(s=Et(dn(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>go(g,t)));let f=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;f.unshift(g)}let h=e.alpha;t!==null&&(h=go(h,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${h}`:"";i=`${c}(${f.join(r.commas?", ":" ")}${p})`}return i}const Z1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],W1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var jo=new Me({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Z1,fromXYZ_M:W1,formats:{color:{}}});const qn=1.09929682680944,el=.018053968510807;var Wu=new Me({id:"rec2020",name:"REC.2020",base:jo,toBase(e){return e.map(function(t){return t<el*4.5?t/4.5:Math.pow((t+qn-1)/qn,1/.45)})},fromBase(e){return e.map(function(t){return t>=el?qn*Math.pow(t,.45)-(qn-1):4.5*t})},formats:{color:{}}});const U1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],G1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Uu=new Me({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:U1,fromXYZ_M:G1});const Y1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],J1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Gu=new Me({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Y1,fromXYZ_M:J1,formats:{color:{}}}),tl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let rl=Array(3).fill("<percentage> | <number>[0, 255]"),nl=Array(3).fill("<number>[0, 255]");var hn=new Me({id:"srgb",name:"sRGB",base:Gu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:rl},rgb_number:{name:"rgb",commas:!0,coords:nl,noAlpha:!0},color:{},rgba:{coords:rl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:nl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=tl.black,t.alpha=0):t.coords=tl[e],t.coords)return t}}}}),Yu=new Me({id:"p3",name:"P3",base:Uu,fromBase:hn.fromBase,toBase:hn.toBase,formats:{color:{id:"display-p3"}}});it.display_space=hn;if(typeof CSS<"u"&&CSS.supports)for(let e of[Le,Wu,Yu]){let t=e.getMinCoords(),n=yo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){it.display_space=e;break}}function K1(e,{space:t=it.display_space,...r}={}){let n=yo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!it.display_space)n=new String(n),n.color=e;else{let o=Re(e,t);n=new String(yo(o,r)),n.color=o}return n}function Ju(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function X1(e,t){return e=Z(e),t=Z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function It(e){return Ve(e,[Fe,"y"])}function Ku(e,t){At(e,[Fe,"y"],t)}function Q1(e){Object.defineProperty(e.prototype,"luminance",{get(){return It(this)},set(t){Ku(this,t)}})}var e2=Object.freeze({__proto__:null,getLuminance:It,register:Q1,setLuminance:Ku});function t2(e,t){e=Z(e),t=Z(t);let r=Math.max(It(e),0),n=Math.max(It(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const r2=.56,n2=.57,o2=.62,i2=.65,ol=.022,a2=1.414,s2=.1,l2=5e-4,c2=1.14,il=.027,u2=1.14;function al(e){return e>=ol?e:e+(ol-e)**a2}function rr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function d2(e,t){t=Z(t),e=Z(e);let r,n,o,i,a,s;t=Re(t,"srgb"),[i,a,s]=t.coords;let l=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175;e=Re(e,"srgb"),[i,a,s]=e.coords;let c=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175,f=al(l),h=al(c),p=h>f;return Math.abs(h-f)<l2?n=0:p?(r=h**r2-f**n2,n=r*c2):(r=h**i2-f**o2,n=r*u2),Math.abs(n)<s2?o=0:n>0?o=n-il:o=n+il,o*100}function h2(e,t){e=Z(e),t=Z(t);let r=Math.max(It(e),0),n=Math.max(It(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const f2=5e4;function p2(e,t){e=Z(e),t=Z(t);let r=Math.max(It(e),0),n=Math.max(It(t),0);return n>r&&([r,n]=[n,r]),n===0?f2:(r-n)/n}function m2(e,t){e=Z(e),t=Z(t);let r=Ve(e,[Le,"l"]),n=Ve(t,[Le,"l"]);return Math.abs(r-n)}const g2=216/24389,sl=24/116,Pn=24389/27;let di=Xe.D65;var na=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:di,base:Fe,fromBase(e){let r=e.map((n,o)=>n/di[o]).map(n=>n>g2?Math.cbrt(n):(Pn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>sl?Math.pow(t[0],3):(116*t[0]-16)/Pn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Pn,t[2]>sl?Math.pow(t[2],3):(116*t[2]-16)/Pn].map((n,o)=>n*di[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const hi=Math.pow(5,.5)*.5+.5;function w2(e,t){e=Z(e),t=Z(t);let r=Ve(e,[na,"l"]),n=Ve(t,[na,"l"]),o=Math.abs(Math.pow(r,hi)-Math.pow(n,hi)),i=Math.pow(o,1/hi)*Math.SQRT2-40;return i<7.5?0:i}var eo=Object.freeze({__proto__:null,contrastAPCA:d2,contrastDeltaPhi:w2,contrastLstar:m2,contrastMichelson:h2,contrastWCAG21:t2,contrastWeber:p2});function v2(e,t,r={}){$n(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(eo).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=Z(e),t=Z(t);for(let i in eo)if("contrast"+n.toLowerCase()===i.toLowerCase())return eo[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Xu(e){let[t,r,n]=xn(e,Fe),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Qu(e){let[t,r,n]=xn(e,Fe),o=t+r+n;return[t/o,r/o]}function b2(e){Object.defineProperty(e.prototype,"uv",{get(){return Xu(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Qu(this)}})}var y2=Object.freeze({__proto__:null,register:b2,uv:Xu,xy:Qu});function k2(e,t){return Ju(e,t,"lab")}const $2=Math.PI,ll=$2/180;function x2(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Le.from(e),[,s,l]=un.from(Le,[o,i,a]),[c,f,h]=Le.from(t),p=un.from(Le,[c,f,h])[1];s<0&&(s=0),p<0&&(p=0);let g=o-c,w=s-p,$=i-f,k=a-h,S=$**2+k**2-w**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let _=.0638*s/(1+.0131*s)+.638,U;Number.isNaN(l)&&(l=0),l>=164&&l<=345?U=.56+Math.abs(.2*Math.cos((l+168)*ll)):U=.36+Math.abs(.4*Math.cos((l+35)*ll));let se=Math.pow(s,4),ge=Math.sqrt(se/(se+1900)),fe=_*(ge*U+1-ge),W=(g/(r*C))**2;return W+=(w/(n*_))**2,W+=S/fe**2,Math.sqrt(W)}const cl=203;var Ja=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Fe,fromBase(e){return e.map(t=>Math.max(t*cl,0))},toBase(e){return e.map(t=>Math.max(t/cl,0))}});const Nn=1.15,On=.66,ul=2610/2**14,T2=2**14/2610,dl=3424/2**12,hl=2413/2**7,fl=2392/2**7,S2=1.7*2523/2**5,pl=2**5/(1.7*2523),Bn=-.56,fi=16295499532821565e-27,C2=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],M2=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],A2=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],E2=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ed=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ja,fromBase(e){let[t,r,n]=e,o=Nn*t-(Nn-1)*n,i=On*r-(On-1)*t,s=he(C2,[o,i,n]).map(function(p){let g=dl+hl*(p/1e4)**ul,w=1+fl*(p/1e4)**ul;return(g/w)**S2}),[l,c,f]=he(A2,s);return[(1+Bn)*l/(1+Bn*l)-fi,c,f]},toBase(e){let[t,r,n]=e,o=(t+fi)/(1+Bn-Bn*(t+fi)),a=he(E2,[o,r,n]).map(function(p){let g=dl-p**pl,w=fl*p**pl-hl;return 1e4*(g/w)**T2}),[s,l,c]=he(M2,a),f=(s+(Nn-1)*c)/Nn,h=(l+(On-1)*f)/On;return[f,h,c]},formats:{color:{}}}),oa=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ed,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Vo(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function I2(e,t){let[r,n,o]=oa.from(e),[i,a,s]=oa.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let f=o-s,h=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(l**2+c**2+h**2)}const td=3424/4096,rd=2413/128,nd=2392/128,ml=2610/16384,L2=2523/32,q2=16384/2610,gl=32/2523,P2=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],N2=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],O2=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],B2=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var ia=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ja,fromBase(e){let t=he(P2,e);return D2(t)},toBase(e){let t=R2(e);return he(B2,t)},formats:{color:{}}});function D2(e){let t=e.map(function(r){let n=td+rd*(r/1e4)**ml,o=1+nd*(r/1e4)**ml;return(n/o)**L2});return he(N2,t)}function R2(e){return he(O2,e).map(function(n){let o=Math.max(n**gl-td,0),i=rd-nd*n**gl;return 1e4*(o/i)**q2})}function _2(e,t){let[r,n,o]=ia.from(e),[i,a,s]=ia.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const H2=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],F2=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],V2=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],j2=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var ko=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Fe,fromBase(e){let r=he(H2,e).map(n=>Math.cbrt(n));return he(V2,r)},toBase(e){let r=he(j2,e).map(n=>n**3);return he(F2,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function z2(e,t){let[r,n,o]=ko.from(e),[i,a,s]=ko.from(t),l=r-i,c=n-a,f=o-s;return Math.sqrt(l**2+c**2+f**2)}var $o={deltaE76:k2,deltaECMC:x2,deltaE2000:ra,deltaEJz:I2,deltaEITP:_2,deltaEOK:z2};function Fr(e,t,r={}){$n(r)&&(r={method:r});let{method:n=it.deltaE,...o}=r;e=Z(e),t=Z(t);for(let i in $o)if("deltae"+n.toLowerCase()===i.toLowerCase())return $o[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Z2(e,t=.25){let n=[M.get("oklch","lch"),"l"];return At(e,n,o=>o*(1+t))}function W2(e,t=.25){let n=[M.get("oklch","lch"),"l"];return At(e,n,o=>o*(1-t))}var U2=Object.freeze({__proto__:null,darken:W2,lighten:Z2});function od(e,t,r=.5,n={}){[e,t]=[Z(e),Z(t)],Tt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Tn(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function id(e,t,r={}){let n;Ka(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[Z(e),Z(t)],n=Tn(e,t,l));let c=Fr(e,t),f=o>0?Math.max(a,Math.ceil(c/o)+1):a,h=[];if(s!==void 0&&(f=Math.min(f,s)),f===1)h=[{p:.5,color:n(.5)}];else{let p=1/(f-1);h=Array.from({length:f},(g,w)=>{let $=w*p;return{p:$,color:n($)}})}if(o>0){let p=h.reduce((g,w,$)=>{if($===0)return 0;let k=Fr(w.color,h[$-1].color,i);return Math.max(g,k)},0);for(;p>o;){p=0;for(let g=1;g<h.length&&h.length<s;g++){let w=h[g-1],$=h[g],k=($.p+w.p)/2,S=n(k);p=Math.max(p,Fr(S,w.color),Fr(S,$.color)),h.splice(g,0,{p:k,color:n(k)}),g++}}}return h=h.map(p=>p.color),h}function Tn(e,t,r={}){if(Ka(e)){let[l,c]=[e,t];return Tn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=Z(e),t=Z(t),e=dn(e),t=dn(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[it.interpolationSpace]||e.space,o=o?M.get(o):n,e=Re(e,n),t=Re(t,n),e=Et(e),t=Et(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[f,h]=[Ve(e,c),Ve(t,c)];[f,h]=j1(l,[f,h]),At(e,c,f),At(t,c,h)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((p,g)=>{let w=t.coords[g];return wo(p,w,l)}),f=wo(e.alpha,t.alpha,l),h={space:n,coords:c,alpha:f};return a&&(h.coords=h.coords.map(p=>p/f)),o!==n&&(h=Re(h,o)),h},{rangeArgs:s})}function Ka(e){return Tt(e)==="function"&&!!e.rangeArgs}it.interpolationSpace="lab";function G2(e){e.defineFunction("mix",od,{returns:"color"}),e.defineFunction("range",Tn,{returns:"function<color>"}),e.defineFunction("steps",id,{returns:"array<color>"})}var Y2=Object.freeze({__proto__:null,isRange:Ka,mix:od,range:Tn,register:G2,steps:id}),ad=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:hn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),sd=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ad,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),J2=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:sd,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const K2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],X2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ld=new Me({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:K2,fromXYZ_M:X2}),Q2=new Me({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ld,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const ep=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],tp=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var cd=new Me({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ya,toXYZ_M:ep,fromXYZ_M:tp});const rp=1/512,np=16/512;var op=new Me({id:"prophoto",name:"ProPhoto",base:cd,toBase(e){return e.map(t=>t<np?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=rp?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),ip=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:ko,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Vo(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const wl=203,vl=2610/2**14,ap=2**14/2610,sp=2523/2**5,bl=2**5/2523,yl=3424/2**12,kl=2413/2**7,$l=2392/2**7;var lp=new Me({id:"rec2100pq",name:"REC.2100-PQ",base:jo,toBase(e){return e.map(function(t){return(Math.max(t**bl-yl,0)/(kl-$l*t**bl))**ap*1e4/wl})},fromBase(e){return e.map(function(t){let r=Math.max(t*wl/1e4,0),n=yl+kl*r**vl,o=1+$l*r**vl;return(n/o)**sp})},formats:{color:{id:"rec2100-pq"}}});const xl=.17883277,Tl=.28466892,Sl=.55991073,pi=3.7743;var cp=new Me({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:jo,toBase(e){return e.map(function(t){return t<=.5?t**2/3*pi:(Math.exp((t-Sl)/xl)+Tl)/12*pi})},fromBase(e){return e.map(function(t){return t/=pi,t<=1/12?Math.sqrt(3*t):xl*Math.log(12*t-Tl)+Sl})},formats:{color:{id:"rec2100-hlg"}}});const ud={};Mt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=dd(e.W1,e.W2,e.options.method))});Mt.add("chromatic-adaptation-end",e=>{e.M||(e.M=dd(e.W1,e.W2,e.options.method))});function zo({id:e,toCone_M:t,fromCone_M:r}){ud[e]=arguments[0]}function dd(e,t,r="Bradford"){let n=ud[r],[o,i,a]=he(n.toCone_M,e),[s,l,c]=he(n.toCone_M,t),f=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],h=he(f,n.toCone_M);return he(n.fromCone_M,h)}zo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});zo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});zo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});zo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Xe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Xe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const up=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],dp=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var hd=new Me({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Xe.ACES,toXYZ_M:up,fromXYZ_M:dp,formats:{color:{}}});const Dn=2**-16,mi=-.35828683,Rn=(Math.log2(65504)+9.72)/17.52;var hp=new Me({id:"acescc",name:"ACEScc",coords:{r:{range:[mi,Rn],name:"Red"},g:{range:[mi,Rn],name:"Green"},b:{range:[mi,Rn],name:"Blue"}},referred:"scene",base:hd,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Dn)*2:r<Rn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Dn)+9.72)/17.52:t<Dn?(Math.log2(Dn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Cl=Object.freeze({__proto__:null,A98RGB:Q2,A98RGB_Linear:ld,ACEScc:hp,ACEScg:hd,HSL:ad,HSV:sd,HWB:J2,ICTCP:ia,JzCzHz:oa,Jzazbz:ed,LCH:un,Lab:Le,Lab_D65:na,OKLCH:ip,OKLab:ko,P3:Yu,P3_Linear:Uu,ProPhoto:op,ProPhoto_Linear:cd,REC_2020:Wu,REC_2020_Linear:jo,REC_2100_HLG:cp,REC_2100_PQ:lp,XYZ_ABS_D65:Ja,XYZ_D50:Ya,XYZ_D65:Fe,sRGB:hn,sRGB_Linear:Gu});class q{constructor(...t){let r;t.length===1&&(r=Z(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new q(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=K1(this,...t);return r.color=new q(r.color),r}static get(t,...r){return t instanceof q?t:new q(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=q.get(l);else if(i==="function<color>"){let c=l;l=function(...f){let h=c(...f);return q.get(h)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>q.get(c)));return l};t in q||(q[t]=a),o&&(q.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)q.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(q);else for(let r in t)q.defineFunction(r,t[r])}}q.defineFunctions({get:Ve,getAll:xn,set:At,setAll:Zu,to:Re,equals:X1,inGamut:Yr,toGamut:Et,distance:Ju,toString:yo});Object.assign(q,{util:R1,hooks:Mt,WHITES:Xe,Space:M,spaces:M.registry,parse:zu,defaults:it});for(let e of Object.keys(Cl))M.register(Cl[e]);for(let e in M.registry)aa(e,M.registry[e]);Mt.add("colorspace-init-end",e=>{var t;aa(e.id,e),(t=e.aliases)==null||t.forEach(r=>{aa(r,e)})});function aa(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(q.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}q.extend($o);q.extend({deltaE:Fr});Object.assign(q,{deltaEMethods:$o});q.extend(U2);q.extend({contrast:v2});q.extend(y2);q.extend(e2);q.extend(Y2);q.extend(eo);function fd(e){return ve(e,(t,r)=>r instanceof q?N(r.toString({format:"hex"})):fd(r))}const fp="dodgerblue";function sa(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function gi({background:e,foreground:t}){return{background:e??new q(sa(t)),foreground:t??new q(sa(e))}}var xo;(function(e){e.Dark="dark",e.Light="light"})(xo||(xo={}));function pp(e){return e==="black"?"white":"black"}const mp={black:{foregroundFaint1:new q("#ccc"),foregroundFaint2:new q("#eee")},white:{foregroundFaint1:new q("#ccc"),foregroundFaint2:new q("#eee")}},gp={black:{backgroundFaint1:new q("#666"),backgroundFaint2:new q("#444")},white:{backgroundFaint1:new q("#ccc"),backgroundFaint2:new q("#fafafa")}};function Ml({themeColor:e=fp,themeStyle:t=xo.Light}={}){const r=new q(e),n=new q(t===xo.Dark?"black":"white"),o=sa(n),i=new q(o),a={nav:{hover:gi({background:r.clone().set({"hsl.l":93})}),active:gi({background:r.clone().set({"hsl.l":90})}),selected:gi({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...gp[pp(o)],foreground:i,...mp[o]}};return fd(a)}const To=Da()("element-book-change-route"),Al="vira-",{defineElement:Sr,defineElementNoInputs:ov}=za({assertInputs:e=>{if(!e.tagName.startsWith(Al))throw new Error(`Tag name should start with '${Al}' but got '${e.tagName}'`)}}),pd=m`
    pointer-events: none;
    opacity: 0.3;
`,St=mt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),So=mt({"vira-form-input-border-radius":"8px"}),Co=mt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${So["vira-form-input-border-radius"].value} + 4px)`});function md({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=N(Ft(n+r+t));return m`
        ${N(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Co["vira-focus-outline-color"].value};
            border-radius: ${Co["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Xa=m`
    padding: 0;
    margin: 0;
`,me=m`
    ${Xa};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function wp(e){return m`
        ${N(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${N(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const ze=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ae=Sr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var la;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(la||(la={}));Sr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===la.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ze};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Co["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${pd};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${me};
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
            border-radius: ${So["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${St["vira-interaction-animation-duration"].value},
                background-color
                    ${St["vira-interaction-animation-duration"].value},
                border-color ${St["vira-interaction-animation-duration"].value};
        }

        ${md({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ae} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${ae.assign({icon:e.icon})}></${ae}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var ca;(function(e){e.Header="header"})(ca||(ca={}));Sr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>m`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${me};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${St["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ee()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?m`
                  height: ${e.contentHeight}px;
              `:m`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${T("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${ca.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${br(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=mt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function v({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const vp=v({name:"CloseX24Icon",svgTemplate:u`
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
    `}),bp=v({name:"Element16Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});v({name:"Element24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const yp=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),kp=m`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${St["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,gd=v({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${kp}
        </style>
        ${yp.svgTemplate}
    `}),$p=v({name:"Options24Icon",svgTemplate:u`
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
    `}),wd=v({name:"StatusFailure24Icon",svgTemplate:u`
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
    `});v({name:"StatusInProgress24Icon",svgTemplate:u`
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
    `});v({name:"StatusSuccess24Icon",svgTemplate:u`
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
    `});var kr;(function(e){e.Loading="loading",e.Error="error"})(kr||(kr={}));const $t=Sr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:ee(),imageError:ee()},styles:({hostClasses:e})=>m`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?u`
                  <slot class="status-wrapper" name=${kr.Error}>
                      <${ae.assign({icon:wd})} class="error"></${ae}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                    <slot class="status-wrapper" name=${kr.Loading}>
                        <${ae.assign({icon:gd})}></${ae}>
                    </slot>
                `;return u`
            ${$e(!!a,a)}
            <img
                class=${de({hidden:!!a})}
                ${T("load",async()=>{e._debugLoadDelay&&await Ui(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${T("error",async s=>{e._debugLoadDelay&&await Ui(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function ua({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ua({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function vd({value:e,allowed:t,blocked:r}){const n=t?ua({input:e,matcher:t}):!0,o=r?ua({input:e,matcher:r}):!1;return n&&!o}function bd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(vd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function xp({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Hr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)vd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:f}=bd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(f)}i.value!==l&&(i.value=l),s!==l&&o(l)}const to=Sr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ee(),inputBlocked:ee()},styles:({hostClasses:e,cssVars:t})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Co["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${pd};
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
                ${me};
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
                ${ze};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${me};
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
                border-radius: ${So["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${St["vira-interaction-animation-duration"].value};
            }

            label {
                ${me};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${So["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${md({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${me};
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
                ${ze};
            }

            .close-x-button {
                ${me};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${St["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=bd({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${ae.assign({icon:e.icon})} class="left-side-icon"></${ae}>
              `:"",s=e.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${$e(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${br(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${T("input",l=>{xp({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${$e(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${ae.assign({icon:vp})}></${ae}>
                        </button>
                    `)}
                ${$e(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});Sr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>m`
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
    `,events:{routeChange:ee()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Ho(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${T("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Ze,defineElementNoInputs:iv}=za(),De=Ze()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return u`
            <a
                href=${r}
                ${T("click",i=>{(!e.router||Ho(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new To(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Tp(e,t){return e.entry.entryType===we.Root?!1:!!(e.entry.entryType===we.Page||nt(t,e.fullUrlBreadcrumbs.slice(0,-1))||nt(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ut=Ze()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>m`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${V["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${V["element-book-nav-hover-background-color"].value};
            color: ${V["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${V["element-book-nav-active-background-color"].value};
            color: ${V["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${De.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${V["element-book-nav-selected-background-color"].value};
            color: ${V["element-book-nav-selected-foreground-color"].value};
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

        ${ae} {
            display: inline-flex;
            color: ${V["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Tp(r,e.selectedPath))return;const n=m`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${De.assign({router:e.router,route:{paths:[Se.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${de({"title-row":!0,selected:e.selectedPath?nt(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${$e(fr(r,we.ElementExample),u`
                                    <${ae.assign({icon:bp})}></${ae}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${De}>
                </li>
            `});return u`
            <${De.assign({route:yr,router:e.router})}>
                <slot name=${ot.NavHeader}>Book</slot>
            </${De}>
            <ul>
                ${t}
            </ul>
        `}});async function Sp(e){await Gi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await tf(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Lt=Ze()({tagName:"book-error",styles:m`
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
    `,renderCallback({inputs:e}){return(K(e.message,"array")?e.message:[e.message]).map(r=>u`
                <p>${r}</p>
            `)}}),fn=Ze()({tagName:"book-page-controls",events:{controlValueChange:ee()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>m`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
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

        ${to} {
            height: 24px;
            max-width: 128px;
        }

        ${ae}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===O.Hidden)return"";const a=Cp(e.currentValues[n],o,s=>{const l=K(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${$e(i===0,u`
                                <${ae.assign({icon:$p})}
                                    class="options-icon"
                                ></${ae}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Cp(e,t,r){return er(t,O.Hidden)?"":er(t,O.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${T("input",n=>{const o=Hr(n,HTMLInputElement);r(o.checked)})}
            />
        `:er(t,O.Color)?u`
            <input
                type="color"
                .value=${e}
                ${T("input",n=>{const o=Hr(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,O.Text)?u`
            <${to.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${T(to.events.valueChange,n=>{r(n.detail)})}
            ></${to}>
        `:er(t,O.Number)?u`
            <input
                type="number"
                .value=${e}
                ${T("input",n=>{const o=Hr(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,O.Dropdown)?u`
            <select
                .value=${e}
                ${T("input",n=>{const o=Hr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const El=Ze()({tagName:"book-breadcrumbs",styles:m`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":u`
                      <span class="spacer">&gt;</span>
                  `;return u`
                <${De.assign({route:{hash:void 0,search:void 0,paths:[Se.Book,...a]},router:e.router})}>
                    ${r}
                </${De}>
                ${s}
            `}):u`
                &nbsp;
            `}}),wi=Ze()({tagName:"book-breadcrumbs-bar",styles:m`
        :host {
            border-bottom: 1px solid
                ${V["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${V["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return u`
            ${$e(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${El.assign({currentRoute:e.currentRoute,router:e.router})}></${El}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${T("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Ui(200),n.value===o&&(n.value?t(new To({paths:[Se.Search,encodeURIComponent(n.value)]})):t(new To(yr)))})}
            />
        `}}),Il=Ze()({tagName:"book-entry-description",styles:m`
        :host {
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${V["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>u`
                <p>${t}</p>
            `)}}),Ll=Ze()({tagName:"book-page-wrapper",styles:m`
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

        ${De} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Se.Book,...e.pageNode.fullUrlBreadcrumbs],n=Fc(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${De.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${De}>
                    ${n?u`
                              <${Lt.assign({message:n.message})}></${Lt}>
                          `:u`
                              <${Il.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Il}>
                              <${fn.assign({config:e.pageNode.entry.controls,currentValues:Wa(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${fn}>
                          `}
                </div>
            </div>
        `}}),_n=Ze()({tagName:"book-element-example-controls",styles:m`
        :host {
            display: flex;
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[Se.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${De.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${De}>
        `}}),ql=Symbol("unset-internal-state"),Pl=Ze()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ql},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Fc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ql&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${$e(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${Lt.assign({message:`${t.elementExampleNode.entry.title} failed: ${qt(n)}`})}></${Lt}>
            `}},options:{allowPolymorphicState:!0}}),Nl=Ze()({tagName:"book-element-example-wrapper",styles:m`
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

        ${_n} {
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${_n} {
            color: ${V["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${_n.assign(rn(e,["currentPageControls"]))}></${_n}>
                <${Pl.assign(e)}></${Pl}>
            </div>
        `}});function yd(e,t,r,n){const o=Xi(r,n),i=[];if(o){const a=yd(e,t,o,n);a&&i.push(a)}if(fr(r,we.Page)&&!e.includes(r)){const a=Wa(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:ve(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Mp({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=Wi(e,1)?yd(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&Wi(e,1)?u`
                  <${fn.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${fn}>
              `:Q,l=Cf(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,f)=>{if(fr(c,we.Page))return u`
                    <${Ll.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Ll}>
                `;if(fr(c,we.ElementExample)){const h=Wa(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${Nl.assign({elementExampleNode:c,currentPageControls:h,router:r})}
                        class="inline-entry"
                    ></${Nl}>
                `}else return fr(c,we.Root)?Q:u`
                    <${Lt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Lt}>
                `});return[s,l]}const nr=Ze()({tagName:"book-entry-display",styles:m`
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

        ${wi} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${St["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:ee()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Qi(e.currentRoute.paths),a=Mp({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${wi.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${wi}>

            ${$e(e.showLoading,u`
                    <div
                        ${Vs(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${ae.assign({icon:gd})}></${ae}>
                    </div>
                    ${$e(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${ot.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${Vs(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${ot.Footer}></slot>
                `)}
        `}});function Ap(e,t,r){const n=Ol(e,t);if(n.length)return n;r(yr);const o=Ol(e,yr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ol(e,t){return e.filter(r=>ef({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const vi=Au()({tagName:"element-book-app",events:{pathUpdate:ee()},stateInitStatic:{currentRoute:yr,router:void 0,loading:!0,colors:{config:void 0,theme:Ml(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${V["element-book-page-background-color"].value};
            color: ${V["element-book-page-foreground-color"].value};
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

        ${nr} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ut} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Bl(e,Qi(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var f,h,p,g,w,$,k;t._debug&&console.info("rendering element-book app");function a(S){return{...e.currentRoute,...S}}function s(S){const C=a(S);return!nt(e.currentRoute,C)}function l(S){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,S].filter(ye).join(" - "))}function c(S){if(!s(S))return;const C=a(S);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!nt(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!nt(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(f=t.internalRouterConfig)!=null&&f.useInternalRouter&&!e.router){const W=N1(t.internalRouterConfig.basePath);n({router:W}),W.addRouteListener(!0,le=>{n({currentRoute:le})})}else!((h=t.internalRouterConfig)!=null&&h.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const S={themeColor:t.themeColor};if(!nt(S,(p=e.colors)==null?void 0:p.config)){const W=Ml(S);n({colors:{config:S,theme:W}}),D1(r,W)}const C=t._debug??!1,_=w1({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:qu(_.tree,{children:(w=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:w.children,controls:t.globalValues})}}));const U=Qi(e.currentRoute.paths),ge=(U?T1({flattenedNodes:_.flattenedNodes,searchQuery:U}):void 0)??Ap(_.flattenedNodes,e.currentRoute.paths,c);l(($=ge[0])==null?void 0:$.entry.title);const fe=(k=e.treeBasedControls)==null?void 0:k.controls;return fe?(t._debug&&console.info({currentControls:fe}),u`
                <div
                    class="root"
                    ${T(To,async W=>{const le=W.detail;if(!s(le))return;if(n({loading:!0}),c(le),!(r.shadowRoot.querySelector(ut.tagName)instanceof ut))throw new Error(`Failed to find child '${ut.tagName}'`);Bl(r,U,e.currentRoute)})}
                    ${T(fn.events.controlValueChange,W=>{if(!e.treeBasedControls)return;const le=b1(fe,W.detail.fullUrlBreadcrumbs,W.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:le}})})}
                >
                    <${ut.assign({flattenedNodes:_.flattenedNodes,router:e.router,selectedPath:U?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ot.NavHeader}
                            slot=${ot.NavHeader}
                        ></slot>
                    </${ut}>
                    <${nr.assign({controls:fe,currentNodes:ge,currentRoute:e.currentRoute,debug:C,originalTree:_.tree,router:e.router,showLoading:e.loading})}
                        ${T(nr.events.loadingRender,async W=>{await Gi();const le=r.shadowRoot.querySelector(nr.tagName);le?le.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${nr.tagName}' for scrolling.`),await Gi(),n({loading:!W.detail})})}
                    >
                        <slot
                            name=${ot.Footer}
                            slot=${ot.Footer}
                        ></slot>
                    </${nr}>
                </div>
            `):u`
                    <${Lt.assign({message:"Failed to generate page controls."})}></${Lt}>
                `}catch(S){return console.error(S),u`
                <p class="error">${qt(S)}</p>
            `}}});async function Bl(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ut.tagName);if(!(n instanceof ut))throw new Error(`Failed to find child '${ut.tagName}'`);await Sp(n)}const Dl={interactionDuration:m`--toniq-interaction-transition-duration`,prettyDuration:m`--toniq-pretty-transition-duration`},J={interaction:m`var(${Dl.interactionDuration}, 84ms)`,pretty:m`var(${Dl.prettyDuration}, 300ms)`};m`toniq-modal-grow`,m`
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
        `,m`toniq-menu-grow`,m`
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
        `;function bi(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Ep=(()=>{const e={backgroundColor:m`#ffffff`,foregroundColor:m`#000000`},t={...e,foregroundColor:m`#00D093`},r={...e,foregroundColor:m`#ACADAD`},n={...e,foregroundColor:m`#D6D6D6`},o={...t},i={...t,foregroundColor:m`#00A876`},a={...t,foregroundColor:m`#1D6852`},s={...n},l={...e,foregroundColor:m`rgba(0, 0, 0, 0.08)`},c={...e,backgroundColor:m`#D2EEFA`},f=bi(o),h=bi(i),p=bi(a),g=p,w={backgroundColor:m`#F1F3F6`,foregroundColor:e.foregroundColor},$={...w,foregroundColor:m`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:f,accentPrimaryHover:h,accentPrimaryActive:p,accentSecondary:w,accentTertiary:$}})(),kd=Ep;function Rl(e,t){return N(`--toniq-${lo(e)}-${lo(t)}`)}const Qa=ve(kd,e=>({backgroundColor:Rl(e,"backgroundColor"),foregroundColor:Rl(e,"foregroundColor")}));function Ke(e,t){const r=kd[e][t],n=Qa[e][t];return m`var(${n}, ${r})`}const b=ve(Qa,e=>({foregroundColor:Ke(e,"foregroundColor"),backgroundColor:Ke(e,"backgroundColor")}));function j(e){return m`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Jt=m`
    pointer-events: none;
    opacity: 0.3;
    ${ze};
`;function Nt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=N(Ft(n+r+t));return m`
        ${N(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${b.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const $d={toniqFont:{"font-family":m`'Lexend', sans-serif`},normalWeightFont:{"font-weight":m`400`},boldFont:{"font-weight":m`600`},extraBoldFont:{"font-weight":m`900`},paragraphFont:{"line-height":m`24px`,"font-size":m`16px`},boldParagraphFont:{},labelFont:{"line-height":m`16px`,"font-size":m`12px`},boldLabelFont:{},h1Font:{"line-height":m`96px`,"font-size":m`64px`},h2Font:{"line-height":m`64px`,"font-size":m`48px`},h3Font:{"line-height":m`48px`,"font-size":m`32px`},h4Font:{"line-height":m`32px`,"font-size":m`24px`},monospaceFont:{"font-family":m`'Inconsolata', monospace`,"line-height":m`1.125em`}},Ip=ve($d,(e,t)=>{const r=N(lo(e.replace(/Font$/,"")));return ve(t,o=>{const i=N(o);return m`--toniq-font-${r}-${i}`})});function Ue(e){const t=Ip[e],r=$d[e],n=oe(t).map(o=>{const i=r[o],a=t[o];return m`
            ${N(o)}: var(${a}, ${i});
        `});return N(n.join(`
`))}const B=(()=>{const e=m`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
        ${Ue("toniqFont")};
    `,t=m`
        ${e};
        ${Ue("normalWeightFont")};
    `,r=m`
        ${e};
        ${Ue("boldFont")};
    `,n=m`
        ${e};
        ${Ue("extraBoldFont")};
    `,o=m`
        ${e};
        ${Ue("paragraphFont")};
        ${t};
    `,i=m`
        ${e};
        ${o};
        ${r};
    `,a=m`
        ${e};
        ${Ue("labelFont")};
        ${t};
    `,s=m`
        ${a};
        ${r};
    `,l=m`
        ${Ue("h1Font")};
        ${n};
    `,c=m`
        ${Ue("h2Font")};
        ${n};
    `,f=m`
        ${Ue("h3Font")};
        ${r};
    `,h=m`
        ${Ue("h4Font")};
        ${r};
    `,p=m`
        ${Ue("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:f,h4Font:h,monospaceFont:p}})(),d=mt({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),z=ve(d,(e,t)=>r=>N(`var(${t.name}, ${r})`)),pn={popupShadow:m`
        filter: drop-shadow(0px 12px 8px ${b.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:m`
        filter: drop-shadow(0px -12px 8px ${b.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:m`
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.12));
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Lp(e,t=!0){const r=N(e),n=e===":host"?m`
                  :host(:hover);
              `:m`
                  ${r}:hover
              `,o=t?m`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${b.pageInteraction.foregroundColor};
              }
          `:m``;return m`
        ${r} {
            border-radius: 16px;
            background-color: ${b.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${pn.popupShadow};
        }

        ${o}
    `}const xd=v({name:"ChevronsRight16Icon",svgTemplate:u`
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
    `}),qp=v({name:"Copy16Icon",svgTemplate:u`
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
    `}),Pp=v({name:"ExternalLink16Icon",svgTemplate:u`
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
    `}),Ct=v({name:"InfoCircle16Icon",svgTemplate:u`
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
    `}),Np=v({name:"ArrowBarUp24Icon",svgTemplate:u`
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
    `}),Op=v({name:"ArrowForwardUp24Icon",svgTemplate:u`
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
    `}),es=v({name:"ArrowLeft24Icon",svgTemplate:u`
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
    `}),Bp=v({name:"ArrowLoopLeft24Icon",svgTemplate:u`
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
    `}),Dp=v({name:"ArrowLoopRight24Icon",svgTemplate:u`
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
    `}),ts=v({name:"ArrowRight24Icon",svgTemplate:u`
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
    `}),Td=v({name:"ArrowsSort24Icon",svgTemplate:u`
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
    `}),Rp=v({name:"ArrowsSortAscending24Icon",svgTemplate:u`
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
    `}),_p=v({name:"ArrowsSortDescending24Icon",svgTemplate:u`
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
    `}),Hp=v({name:"Bell24Icon",svgTemplate:u`
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
    `}),Fp=v({name:"Bucket24Icon",svgTemplate:u`
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
    `}),Vp=v({name:"BuildingStore24Icon",svgTemplate:u`
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
    `}),jp=v({name:"CalendarEvent24Icon",svgTemplate:u`
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
    `}),zp=v({name:"Cash24Icon",svgTemplate:u`
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
    `}),Zp=v({name:"Chain24Icon",svgTemplate:u`
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
    `}),Sd=v({name:"CheckMark24Icon",svgTemplate:u`
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
    `}),Cd=v({name:"ChevronDown24Icon",svgTemplate:u`
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
    `}),Wp=v({name:"ChevronUp24Icon",svgTemplate:u`
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
    `}),Up=v({name:"Circle24Icon",svgTemplate:u`
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
    `}),Md=v({name:"CircleDot24Icon",svgTemplate:u`
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
    `}),Gp=v({name:"CirclePlus24Icon",svgTemplate:u`
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
    `}),Yp=v({name:"CircleWavyCheck24Icon",svgTemplate:u`
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
    `}),Jp=v({name:"Clock24Icon",svgTemplate:u`
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
    `}),Kp=v({name:"Code24Icon",svgTemplate:u`
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
    `}),Ad=v({name:"Copy24Icon",svgTemplate:u`
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
    `}),Xp=v({name:"CreateFile24Icon",svgTemplate:u`
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
    `}),Qp=v({name:"DotsVertical24Icon",svgTemplate:u`
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
    `}),em=v({name:"Download24Icon",svgTemplate:u`
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
    `}),tm=v({name:"Edit24Icon",svgTemplate:u`
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
    `}),rm=v({name:"Envelope24Icon",svgTemplate:u`
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
    `}),Ed=v({name:"ExternalLink24Icon",svgTemplate:u`
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
    `}),nm=v({name:"Filter24Icon",svgTemplate:u`
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
    `}),om=v({name:"Fire24Icon",svgTemplate:u`
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
    `}),im=v({name:"Gear24Icon",svgTemplate:u`
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
    `}),am=v({name:"Geometry24Icon",svgTemplate:u`
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
    `}),sm=v({name:"GridDots24Icon",svgTemplate:u`
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
    `}),lm=v({name:"Heart24Icon",svgTemplate:u`
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
    `}),da=v({name:"Infinity24Icon",svgTemplate:u`
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
    `}),cm=v({name:"Info24Icon",svgTemplate:u`
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
    `}),um=v({name:"LayersLinked24Icon",svgTemplate:u`
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
    `}),dm=v({name:"LayoutGrid24Icon",svgTemplate:u`
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
    `}),hm=v({name:"Lifebuoy24Icon",svgTemplate:u`
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
    `}),fm=v({name:"List24Icon",svgTemplate:u`
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
    `}),pm=v({name:"ListDetails24Icon",svgTemplate:u`
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
    `}),mm=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),rs=v({name:"LoaderAnimated24Icon",svgTemplate:u`
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
    `}),gm=v({name:"Lock24Icon",svgTemplate:u`
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
    `}),wm=v({name:"LockOpen24Icon",svgTemplate:u`
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
    `}),vm=v({name:"Menu24Icon",svgTemplate:u`
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
    `}),bm=v({name:"Paper24Icon",svgTemplate:u`
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
    `}),ym=v({name:"People24Icon",svgTemplate:u`
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
    `}),km=v({name:"Person24Icon",svgTemplate:u`
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
    `}),$m=v({name:"Photo24Icon",svgTemplate:u`
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
    `}),xm=v({name:"Refresh24Icon",svgTemplate:u`
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
    `}),Id=v({name:"Rocket24Icon",svgTemplate:u`
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
    `}),Ld=v({name:"Search24Icon",svgTemplate:u`
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
    `}),Tm=v({name:"Send24Icon",svgTemplate:u`
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
    `}),Sm=v({name:"ShoppingCart24Icon",svgTemplate:u`
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
    `}),Cm=v({name:"Social24Icon",svgTemplate:u`
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
    `}),Mm=v({name:"Square24Icon",svgTemplate:u`
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
    `}),Am=v({name:"SquareCheck24Icon",svgTemplate:u`
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
    `}),Em=v({name:"Tag24Icon",svgTemplate:u`
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
    `}),ro=v({name:"Trash24Icon",svgTemplate:u`
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
    `}),Im=v({name:"Upload24Icon",svgTemplate:u`
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
    `}),Lm=v({name:"Wallet24Icon",svgTemplate:u`
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
    `}),qd=v({name:"World24Icon",svgTemplate:u`
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
    `}),qm=v({name:"WorldUpload24Icon",svgTemplate:u`
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
    `}),Pm=v({name:"X24Icon",svgTemplate:u`
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
    `}),Nm=v({name:"Folder48Icon",svgTemplate:u`
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
    `}),Pd=v({name:"FolderOff48Icon",svgTemplate:u`
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
    `}),Om=v({name:"Kyc48Icon",svgTemplate:u`
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
                fill=${z["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${z["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${z["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),Bm=v({name:"Tag48Icon",svgTemplate:u`
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
    `}),Nd=v({name:"Api64Icon",svgTemplate:u`
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
    `}),Dm=v({name:"CircleDashes64Icon",svgTemplate:u`
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
    `}),Rm=v({name:"Rocket64Icon",svgTemplate:u`
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
    `}),_m=v({name:"CryptoBtc16Icon",svgTemplate:u`
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
    `}),Od=v({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),Hm=v({name:"CryptoCkBtc16Icon",svgTemplate:u`
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
    `}),Fm=v({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),Bd="0 0 58 58",Dd=pf`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,Vm=v({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${Bd}"
        >
            ${Dd}
        </svg>
    `}),jm=v({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${Bd}"
        >
            ${Dd}
        </svg>
    `}),Rd=v({name:"BrandDiscord24Icon",svgTemplate:u`
        <svg
            fill=${z["toniq-icon-fill-color"]("#5865f2")}
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
    `}),_d=v({name:"BrandDistrikt24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${z["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),Hd=v({name:"BrandDscvr24Icon",svgTemplate:u`
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
    `}),zm=v({name:"BrandFacebookLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${z["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),Zm=v({name:"BrandGoogleLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${z["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),Wm=v({name:"BrandIcScan24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${z["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),Fd=v({name:"BrandInstagram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${z["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),Um=v({name:"BrandInstagramFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${z["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),Vd=v({name:"BrandMedium24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${z["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),Gm=v({name:"BrandNftgeek24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${z["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),jd=v({name:"BrandTelegram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${z["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),zd=v({name:"BrandTiktok24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${z["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${z["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),Ym=v({name:"BrandTiktokFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${z["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),Zd=v({name:"BrandTwitch24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${z["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Wd=v({name:"BrandTwitter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${z["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),Jm=v({name:"BioniqRobot100Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${z["toniq-icon-stroke-color"]("#8A2BE2")}
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
    `}),Km=v({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${z["toniq-icon-fill-color"](String(b.brandPrimary.foregroundColor))}
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
    `}),yt={"core-16":[xd,qp,Pp,Ct],"core-24":[Np,Op,es,Bp,Dp,ts,Td,Rp,_p,Hp,Fp,Vp,jp,zp,Zp,Sd,Cd,Wp,Up,Md,Gp,Yp,Jp,Kp,Ad,Xp,Qp,em,tm,rm,Ed,nm,om,im,am,sm,lm,da,cm,um,dm,hm,fm,pm,mm,rs,gm,wm,vm,bm,ym,km,$m,xm,Id,Ld,Tm,Sm,Cm,Mm,Am,Em,ro,Im,Lm,qd,qm,Pm],"core-48":[Nm,Pd,Om,Bm],"core-64":[Nd,Dm,Rm],cryptocurrencies:[_m,Od,Hm,Fm,Vm,jm],"third-party-brands":[Rd,_d,Hd,zm,Zm,Wm,Fd,Um,Vd,Gm,jd,zd,Ym,Zd,Wd],toniq:[Jm,Km]},Xm=kn({discord:tt(void 0,""),distrikt:tt(void 0,""),dscvr:tt(void 0,""),instagram:tt(void 0,""),medium:tt(void 0,""),telegram:tt(void 0,""),tikTok:tt(void 0,""),twitch:tt(void 0,""),twitter:tt(void 0,""),website:tt(void 0,"")}),Qm=Xm.defaultValue,Ud={discord:Rd,instagram:Fd,telegram:jd,tikTok:zd,distrikt:_d,twitch:Zd,dscvr:Hd,medium:Vd,twitter:Wd,website:qd},_l="toniq-",{defineElement:te,defineElementNoInputs:ns}=za({assertInputs:e=>{if(!e.tagName.startsWith(_l))throw new Error(`Tag name should start with '${_l}' but got '${e.tagName}'`)}}),Wt=te()({tagName:"toniq-bold-space",styles:m`
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
            ${B.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),x=te()({tagName:"toniq-icon",styles:m`
        :host {
            display: flex;
            ${L["vira-icon-fill-color"].name}: ${d["toniq-icon-fill-color"].value}
            ${L["vira-icon-stroke-color"].name}: ${d["toniq-icon-stroke-color"].value}
            ${L["vira-icon-stroke-width"].name}: ${d["toniq-icon-stroke-width"].value}
        }

        ${ae} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return u`
            <${ae.assign(e)}></${ae}>
        `}}),ha=m`8px`;var Jr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e.TextOnly="text-only",e))(Jr||{});const pe=te()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${B.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${ze};
        }

        :host(:hover) button {
            ${j(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${j(b.accentPrimaryActive)};
        }

        button {
            ${me};
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
            border-radius: ${ha};
            ${j(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${J.interaction},
                background-color ${J.interaction},
                border-color ${J.interaction};
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${j(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${j(b.pagePrimary)};
            border-color: ${b.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-text-only"].selector} button {
            color: inherit;
            background-color: transparent;
            border-color: transparent;
        }

        :host(.${e["toniq-button-text-only"].name}:hover) button {
            filter: brightness(85%);
        }

        ${e["toniq-button-disabled"].selector} {
            ${Jt};
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
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${x.assign({icon:e.icon})}
                      class="icon-template"
                  ></${x}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function eg(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=os(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(h=>i==="+"?h>l:h<l).sort((h,p)=>i==="+"?h-p:p-h);let f;return c.length>0?f=c[0]:i==="+"?f=a:f=0,e.scrollTo({...r,[o==="x"?"left":"top"]:f})}function tg(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(p,g){let w=parseFloat(p);return/%/.test(p)&&(w/=100,w*=g),w}let l=s(n,r.width),c=s(o,r.height),f=s(i,r.width),h=s(a,r.height);return{x:{before:l,after:f},y:{before:c,after:h}}}function rg(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Gd(e){let t=[];for(const r of e.children)t=t.concat(r,Gd(r));return t}function ng(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Gd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const f of o){const h=f.getBoundingClientRect();if(t&&!rg(r,h,a))continue;const p=window.getComputedStyle(f);let[g,w]=p.getPropertyValue("scroll-snap-align").split(" ");typeof w>"u"&&(w=g);const $=i==="x"?w:g,k=h[s]-r[s]+e[c];switch($){case"none":break;case"start":n[i].start.push(k);break;case"center":n[i].center.push(k+h[l]/2);break;case"end":n[i].end.push(k+h[l]);break}}}return n}function os(e){const t=e.getBoundingClientRect(),r=tg(e),n=ng(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Hl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Hl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Hl(e){return Array.from(new Set(e))}const no="templates-container",og=4e3;var fa=(e=>(e.Default="default",e.Banner="banner",e))(fa||{});const Ee=te()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>m`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${wp(`.${no}`)}

        .${N(no)} {
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
            transition: ${J.pretty};
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

        .arrow ${x} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 12px;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            transition: ${J.interaction};
            border: 1px solid transparent;
            ${j(b.pagePrimary)};
        }

        .arrow ${x}:hover {
            border-color: ${b.pageInteractionHover.foregroundColor};
            ${j(b.pageInteractionHover)};
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{yi({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||og)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Fl(t.scrollSnapPositions,0),i=Fl(t.scrollSnapPositions,-1);return u`
            <div>
                <div
                    class="arrow left ${de({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${x.assign({icon:es})}
                        ${T("click",()=>{yi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${x}>
                </div>
                <div
                    ${br(()=>{r({scrollSnapPositions:os(pa(n)).x})})}
                    class=${no}
                    ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>u`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${de({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${x.assign({icon:ts})}
                        ${T("click",()=>{yi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${x}>
                </div>
            </div>
        `}});function Fl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function pa(e){const t=e.shadowRoot.querySelector(`.${no}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function yi({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=pa(e),i=o.clientWidth,a=os(pa(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,f=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&f)r&&o.scrollTo({behavior:"smooth",left:l});else{const h=ig(e,t),p=Vl(o.scrollLeft,a,!1),g=t==="right"?1:-1,w=(o.clientWidth-h*3)*g,$=Vl((p||0)+w,a,!0);t==="right"&&$>p?o.scrollTo({behavior:"smooth",left:$}):t==="left"&&$<p?o.scrollTo({behavior:"smooth",left:$}):eg(o,t)}}function ig(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Vl(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const gt=te()({tagName:"toniq-checkbox",events:{checkedChange:ee()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ke("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ke("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ke("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ke("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ke("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            ${B.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${J.interaction},
                background-color ${J.interaction},
                opacity ${J.interaction};
            border-radius: 8px;
        }

        button {
            ${me};
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
            ${ze};
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
            ${Jt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${x.assign({icon:Sd})}
                    class="check-mark ${de({hidden:!e.checked})}"
                ></${x}>
            </span>
        `,o=u`
            <slot
                class=${de({label:!0,checked:e.checked})}
            >
                <span
                    class=${de({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return u`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${T("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var ma=(e=>(e.Default="default",e.Secondary="secondary",e))(ma||{});const ki=te()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${B.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${j(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${j(b.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${x.assign({icon:e.icon})}></${x}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}});class Xt extends Error{}class ag extends Xt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class sg extends Xt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class lg extends Xt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class ur extends Xt{}class Yd extends Xt{constructor(t){super(`Invalid unit ${t}`)}}class Te extends Xt{}class wt extends Xt{constructor(){super("Zone is an abstract class")}}const y="numeric",et="short",qe="long",Mo={year:y,month:y,day:y},Jd={year:y,month:et,day:y},cg={year:y,month:et,day:y,weekday:et},Kd={year:y,month:qe,day:y},Xd={year:y,month:qe,day:y,weekday:qe},Qd={hour:y,minute:y},e0={hour:y,minute:y,second:y},t0={hour:y,minute:y,second:y,timeZoneName:et},r0={hour:y,minute:y,second:y,timeZoneName:qe},n0={hour:y,minute:y,hourCycle:"h23"},o0={hour:y,minute:y,second:y,hourCycle:"h23"},i0={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:et},a0={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:qe},s0={year:y,month:y,day:y,hour:y,minute:y},l0={year:y,month:y,day:y,hour:y,minute:y,second:y},c0={year:y,month:et,day:y,hour:y,minute:y},u0={year:y,month:et,day:y,hour:y,minute:y,second:y},ug={year:y,month:et,day:y,weekday:et,hour:y,minute:y},d0={year:y,month:qe,day:y,hour:y,minute:y,timeZoneName:et},h0={year:y,month:qe,day:y,hour:y,minute:y,second:y,timeZoneName:et},f0={year:y,month:qe,day:y,weekday:qe,hour:y,minute:y,timeZoneName:qe},p0={year:y,month:qe,day:y,weekday:qe,hour:y,minute:y,second:y,timeZoneName:qe};class Sn{get type(){throw new wt}get name(){throw new wt}get ianaName(){return this.name}get isUniversal(){throw new wt}offsetName(t,r){throw new wt}formatOffset(t,r){throw new wt}offset(t){throw new wt}equals(t){throw new wt}get isValid(){throw new wt}}let $i=null;class Zo extends Sn{static get instance(){return $i===null&&($i=new Zo),$i}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return x0(t,r,n)}formatOffset(t,r){return Kr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let oo={};function dg(e){return oo[e]||(oo[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),oo[e]}const hg={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function fg(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,f]=n;return[a,o,i,s,l,c,f]}function pg(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=hg[i];i==="era"?n[s]=a:I(s)||(n[s]=parseInt(a,10))}return n}let Hn={};class ft extends Sn{static create(t){return Hn[t]||(Hn[t]=new ft(t)),Hn[t]}static resetCache(){Hn={},oo={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=ft.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return x0(t,r,n,this.name)}formatOffset(t,r){return Kr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=dg(this.name);let[o,i,a,s,l,c,f]=n.formatToParts?pg(n,r):fg(n,r);s==="BC"&&(o=-Math.abs(o)+1);const p=Uo({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:f,millisecond:0});let g=+r;const w=g%1e3;return g-=w>=0?w:1e3+w,(p-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let jl={};function mg(e,t={}){const r=JSON.stringify([e,t]);let n=jl[r];return n||(n=new Intl.ListFormat(e,t),jl[r]=n),n}let ga={};function wa(e,t={}){const r=JSON.stringify([e,t]);let n=ga[r];return n||(n=new Intl.DateTimeFormat(e,t),ga[r]=n),n}let va={};function gg(e,t={}){const r=JSON.stringify([e,t]);let n=va[r];return n||(n=new Intl.NumberFormat(e,t),va[r]=n),n}let ba={};function wg(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=ba[o];return i||(i=new Intl.RelativeTimeFormat(e,t),ba[o]=i),i}let Vr=null;function vg(){return Vr||(Vr=new Intl.DateTimeFormat().resolvedOptions().locale,Vr)}let zl={};function bg(e){let t=zl[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,zl[e]=t}return t}function yg(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=wa(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=wa(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function kg(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function $g(e){const t=[];for(let r=1;r<=12;r++){const n=A.utc(2009,r,1);t.push(e(n))}return t}function xg(e){const t=[];for(let r=1;r<=7;r++){const n=A.utc(2016,11,13+r);t.push(e(n))}return t}function Fn(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Tg(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Sg{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=gg(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ls(t,3);return ue(r,this.padTo)}}}class Cg{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&ft.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=wa(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Mg{constructor(t,r,n){this.opts={style:"long",...n},!r&&k0()&&(this.rtf=wg(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Ug(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Ag={firstDay:1,minimalDays:4,weekend:[6,7]};class G{static fromOpts(t){return G.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const a=t||ne.defaultLocale,s=a||(i?"en-US":vg()),l=r||ne.defaultNumberingSystem,c=n||ne.defaultOutputCalendar,f=ya(o)||ne.defaultWeekSettings;return new G(s,l,c,f,a)}static resetCache(){Vr=null,ga={},va={},ba={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return G.create(t,r,n,o)}constructor(t,r,n,o,i){const[a,s,l]=yg(t);this.locale=a,this.numberingSystem=r||s||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=kg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Tg(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:G.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,ya(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Fn(this,t,C0,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=$g(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return Fn(this,t,E0,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=xg(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return Fn(this,void 0,()=>I0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[A.utc(2016,11,13,9),A.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Fn(this,t,L0,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[A.utc(-40,1,1),A.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new Sg(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Cg(t,this.intl,r)}relFormatter(t={}){return new Mg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return mg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:$0()?bg(this.locale):Ag}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let xi=null;class ke extends Sn{static get utcInstance(){return xi===null&&(xi=new ke(0)),xi}static instance(t){return t===0?ke.utcInstance:new ke(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new ke(Go(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Kr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Kr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Kr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Eg extends Sn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function kt(e,t){if(I(e)||e===null)return t;if(e instanceof Sn)return e;if(qg(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Zo.instance:r==="utc"||r==="gmt"?ke.utcInstance:ke.parseSpecifier(r)||ft.create(e)}else return Ut(e)?ke.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Eg(e)}let Zl=()=>Date.now(),Wl="system",Ul=null,Gl=null,Yl=null,Jl=60,Kl,Xl=null;class ne{static get now(){return Zl}static set now(t){Zl=t}static set defaultZone(t){Wl=t}static get defaultZone(){return kt(Wl,Zo.instance)}static get defaultLocale(){return Ul}static set defaultLocale(t){Ul=t}static get defaultNumberingSystem(){return Gl}static set defaultNumberingSystem(t){Gl=t}static get defaultOutputCalendar(){return Yl}static set defaultOutputCalendar(t){Yl=t}static get defaultWeekSettings(){return Xl}static set defaultWeekSettings(t){Xl=ya(t)}static get twoDigitCutoffYear(){return Jl}static set twoDigitCutoffYear(t){Jl=t%100}static get throwOnInvalid(){return Kl}static set throwOnInvalid(t){Kl=t}static resetCaches(){G.resetCache(),ft.resetCache()}}class Qe{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const m0=[0,31,59,90,120,151,181,212,243,273,304,334],g0=[0,31,60,91,121,152,182,213,244,274,305,335];function _e(e,t){return new Qe("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function is(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function w0(e,t,r){return r+(Cn(e)?g0:m0)[t-1]}function v0(e,t){const r=Cn(e)?g0:m0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function as(e,t){return(e-t+7)%7+1}function Ao(e,t=4,r=1){const{year:n,month:o,day:i}=e,a=w0(n,o,i),s=as(is(n,o,i),r);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=n-1,l=mn(c,t,r)):l>mn(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:s,...Yo(e)}}function Ql(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,a=as(is(n,1,t),r),s=pr(n);let l=o*7+i-a-7+t,c;l<1?(c=n-1,l+=pr(c)):l>s?(c=n+1,l-=pr(n)):c=n;const{month:f,day:h}=v0(c,l);return{year:c,month:f,day:h,...Yo(e)}}function Ti(e){const{year:t,month:r,day:n}=e,o=w0(t,r,n);return{year:t,ordinal:o,...Yo(e)}}function ec(e){const{year:t,ordinal:r}=e,{month:n,day:o}=v0(t,r);return{year:t,month:n,day:o,...Yo(e)}}function tc(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new ur("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Ig(e,t=4,r=1){const n=Wo(e.weekYear),o=He(e.weekNumber,1,mn(e.weekYear,t,r)),i=He(e.weekday,1,7);return n?o?i?!1:_e("weekday",e.weekday):_e("week",e.weekNumber):_e("weekYear",e.weekYear)}function Lg(e){const t=Wo(e.year),r=He(e.ordinal,1,pr(e.year));return t?r?!1:_e("ordinal",e.ordinal):_e("year",e.year)}function b0(e){const t=Wo(e.year),r=He(e.month,1,12),n=He(e.day,1,Eo(e.year,e.month));return t?r?n?!1:_e("day",e.day):_e("month",e.month):_e("year",e.year)}function y0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=He(t,0,23)||t===24&&r===0&&n===0&&o===0,a=He(r,0,59),s=He(n,0,59),l=He(o,0,999);return i?a?s?l?!1:_e("millisecond",o):_e("second",n):_e("minute",r):_e("hour",t)}function I(e){return typeof e>"u"}function Ut(e){return typeof e=="number"}function Wo(e){return typeof e=="number"&&e%1===0}function qg(e){return typeof e=="string"}function Pg(e){return Object.prototype.toString.call(e)==="[object Date]"}function k0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function $0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Ng(e){return Array.isArray(e)?e:[e]}function rc(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Og(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function $r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ya(e){if(e==null)return null;if(typeof e!="object")throw new Te("Week settings must be an object");if(!He(e.firstDay,1,7)||!He(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!He(t,1,7)))throw new Te("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function He(e,t,r){return Wo(e)&&e>=t&&e<=r}function Bg(e,t){return e-t*Math.floor(e/t)}function ue(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function bt(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function Dt(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function ss(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ls(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function Cn(e){return e%4===0&&(e%100!==0||e%400===0)}function pr(e){return Cn(e)?366:365}function Eo(e,t){const r=Bg(t-1,12)+1,n=e+(t-r)/12;return r===2?Cn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Uo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function nc(e,t,r){return-as(is(e,1,t),r)+t-1}function mn(e,t=4,r=1){const n=nc(e,t,r),o=nc(e+1,t,r);return(pr(e)-n+o)/7}function ka(e){return e>99?e:e>ne.twoDigitCutoffYear?1900+e:2e3+e}function x0(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Go(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function T0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Te(`Invalid unit value ${e}`);return t}function Io(e,t){const r={};for(const n in e)if($r(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=T0(o)}return r}function Kr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${ue(r,2)}:${ue(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${ue(r,2)}${ue(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Yo(e){return Og(e,["hour","minute","second","millisecond"])}const Dg=["January","February","March","April","May","June","July","August","September","October","November","December"],S0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Rg=["J","F","M","A","M","J","J","A","S","O","N","D"];function C0(e){switch(e){case"narrow":return[...Rg];case"short":return[...S0];case"long":return[...Dg];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const M0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],A0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],_g=["M","T","W","T","F","S","S"];function E0(e){switch(e){case"narrow":return[..._g];case"short":return[...A0];case"long":return[...M0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const I0=["AM","PM"],Hg=["Before Christ","Anno Domini"],Fg=["BC","AD"],Vg=["B","A"];function L0(e){switch(e){case"narrow":return[...Vg];case"short":return[...Fg];case"long":return[...Hg];default:return null}}function jg(e){return I0[e.hour<12?0:1]}function zg(e,t){return E0(t)[e.weekday-1]}function Zg(e,t){return C0(t)[e.month-1]}function Wg(e,t){return L0(t)[e.year<0?0:1]}function Ug(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],f=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${f} ago`:`in ${s} ${f}`}function oc(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Gg={D:Mo,DD:Jd,DDD:Kd,DDDD:Xd,t:Qd,tt:e0,ttt:t0,tttt:r0,T:n0,TT:o0,TTT:i0,TTTT:a0,f:s0,ff:c0,fff:d0,ffff:f0,F:l0,FF:u0,FFF:h0,FFFF:p0};class be{static create(t,r={}){return new be(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Gg[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return ue(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,w)=>this.loc.extract(t,g,w),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?jg(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>n?Zg(t,g):i(w?{month:g}:{month:g,day:"numeric"},"month"),c=(g,w)=>n?zg(t,g):i(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),f=g=>{const w=be.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(t,w):g},h=g=>n?Wg(t,g):i({era:g},"era"),p=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(g)}};return oc(be.parseFormat(r),p)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const f=n(c);return f?this.num(l.get(f),c.length):c},i=be.parseFormat(r),a=i.reduce((l,{literal:c,val:f})=>c?l:l.concat(f),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return oc(i,o(s))}}const q0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Cr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Mr(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function Ar(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function P0(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=bt(t[r+o]);return[n,null,r+o]}}const N0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Yg=`(?:${N0.source}?(?:\\[(${q0.source})\\])?)?`,cs=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,O0=RegExp(`${cs.source}${Yg}`),us=RegExp(`(?:T${O0.source})?`),Jg=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Kg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Xg=/(\d{4})-?(\d{3})/,Qg=P0("weekYear","weekNumber","weekDay"),ew=P0("year","ordinal"),tw=/(\d{4})-(\d\d)-(\d\d)/,B0=RegExp(`${cs.source} ?(?:${N0.source}|(${q0.source}))?`),rw=RegExp(`(?: ${B0.source})?`);function mr(e,t,r){const n=e[t];return I(n)?r:bt(n)}function nw(e,t){return[{year:mr(e,t),month:mr(e,t+1,1),day:mr(e,t+2,1)},null,t+3]}function Er(e,t){return[{hours:mr(e,t,0),minutes:mr(e,t+1,0),seconds:mr(e,t+2,0),milliseconds:ss(e[t+3])},null,t+4]}function Mn(e,t){const r=!e[t]&&!e[t+1],n=Go(e[t+1],e[t+2]),o=r?null:ke.instance(n);return[{},o,t+3]}function An(e,t){const r=e[t]?ft.create(e[t]):null;return[{},r,t+1]}const ow=RegExp(`^T?${cs.source}$`),iw=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function aw(e){const[t,r,n,o,i,a,s,l,c]=e,f=t[0]==="-",h=l&&l[0]==="-",p=(g,w=!1)=>g!==void 0&&(w||g&&f)?-g:g;return[{years:p(Dt(r)),months:p(Dt(n)),weeks:p(Dt(o)),days:p(Dt(i)),hours:p(Dt(a)),minutes:p(Dt(s)),seconds:p(Dt(l),l==="-0"),milliseconds:p(ss(c),h)}]}const sw={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ds(e,t,r,n,o,i,a){const s={year:t.length===2?ka(bt(t)):bt(t),month:S0.indexOf(r)+1,day:bt(n),hour:bt(o),minute:bt(i)};return a&&(s.second=bt(a)),e&&(s.weekday=e.length>3?M0.indexOf(e)+1:A0.indexOf(e)+1),s}const lw=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function cw(e){const[,t,r,n,o,i,a,s,l,c,f,h]=e,p=ds(t,o,n,r,i,a,s);let g;return l?g=sw[l]:c?g=0:g=Go(f,h),[p,new ke(g)]}function uw(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const dw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,hw=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,fw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ic(e){const[,t,r,n,o,i,a,s]=e;return[ds(t,o,n,r,i,a,s),ke.utcInstance]}function pw(e){const[,t,r,n,o,i,a,s]=e;return[ds(t,s,r,n,o,i,a),ke.utcInstance]}const mw=Cr(Jg,us),gw=Cr(Kg,us),ww=Cr(Xg,us),vw=Cr(O0),D0=Mr(nw,Er,Mn,An),bw=Mr(Qg,Er,Mn,An),yw=Mr(ew,Er,Mn,An),kw=Mr(Er,Mn,An);function $w(e){return Ar(e,[mw,D0],[gw,bw],[ww,yw],[vw,kw])}function xw(e){return Ar(uw(e),[lw,cw])}function Tw(e){return Ar(e,[dw,ic],[hw,ic],[fw,pw])}function Sw(e){return Ar(e,[iw,aw])}const Cw=Mr(Er);function Mw(e){return Ar(e,[ow,Cw])}const Aw=Cr(tw,rw),Ew=Cr(B0),Iw=Mr(Er,Mn,An);function Lw(e){return Ar(e,[Aw,D0],[Ew,Iw])}const ac="Invalid Duration",R0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},qw={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...R0},Ne=146097/400,or=146097/4800,Pw={years:{quarters:4,months:12,weeks:Ne/7,days:Ne,hours:Ne*24,minutes:Ne*24*60,seconds:Ne*24*60*60,milliseconds:Ne*24*60*60*1e3},quarters:{months:3,weeks:Ne/28,days:Ne/4,hours:Ne*24/4,minutes:Ne*24*60/4,seconds:Ne*24*60*60/4,milliseconds:Ne*24*60*60*1e3/4},months:{weeks:or/7,days:or,hours:or*24,minutes:or*24*60,seconds:or*24*60*60,milliseconds:or*24*60*60*1e3},...R0},zt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Nw=zt.slice(0).reverse();function vt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new D(n)}function _0(e,t){let r=t.milliseconds??0;for(const n of Nw.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function sc(e,t){const r=_0(e,t)<0?-1:1;zt.reduceRight((n,o)=>{if(I(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),zt.reduce((n,o)=>{if(I(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Ow(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class D{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Pw:qw;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||G.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return D.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Te(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new D({values:Io(t,D.normalizeUnit),loc:G.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Ut(t))return D.fromMillis(t);if(D.isDuration(t))return t;if(typeof t=="object")return D.fromObject(t);throw new Te(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Sw(t);return n?D.fromObject(n,r):D.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Mw(t);return n?D.fromObject(n,r):D.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Te("need to specify a reason the Duration is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(ne.throwOnInvalid)throw new lg(n);return new D({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Yd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?be.create(this.loc,n).formatDurationFromString(this,t):ac}toHuman(t={}){if(!this.isValid)return ac;const r=zt.map(n=>{const o=this.values[n];return I(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ls(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},A.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?_0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=D.fromDurationLike(t),n={};for(const o of zt)($r(r.values,o)||$r(this.values,o))&&(n[o]=r.get(o)+this.get(o));return vt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=D.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=T0(t(this.values[n],n));return vt(this,{values:r},!0)}get(t){return this[D.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Io(t,D.normalizeUnit)};return vt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return vt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return sc(this.matrix,t),vt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Ow(this.normalize().shiftToAll().toObject());return vt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>D.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of zt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;Ut(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Ut(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return sc(this.matrix,r),vt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return vt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of zt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const ir="Invalid Interval";function Bw(e,t){return!e||!e.isValid?ie.invalid("missing or invalid start"):!t||!t.isValid?ie.invalid("missing or invalid end"):t<e?ie.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ie{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Te("need to specify a reason the Interval is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(ne.throwOnInvalid)throw new sg(n);return new ie({invalid:n})}static fromDateTimes(t,r){const n=Or(t),o=Or(r),i=Bw(n,o);return i??new ie({start:n,end:o})}static after(t,r){const n=D.fromDurationLike(r),o=Or(t);return ie.fromDateTimes(o,o.plus(n))}static before(t,r){const n=D.fromDurationLike(r),o=Or(t);return ie.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=A.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=A.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return ie.fromDateTimes(i,s);if(a){const c=D.fromISO(o,r);if(c.isValid)return ie.after(i,c)}else if(l){const c=D.fromISO(n,r);if(c.isValid)return ie.before(s,c)}}return ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r!=null&&r.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ie.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Or).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(ie.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=D.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ie.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ie.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ie.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ie.fromDateTimes(r,l.time)),r=null);return ie.merge(o)}difference(...t){return ie.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ir}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Mo,r={}){return this.isValid?be.create(this.s.loc.clone(r),t).formatInterval(this):ir}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ir}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ir}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ir}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:ir}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):D.invalid(this.invalidReason)}mapEndpoints(t){return ie.fromDateTimes(t(this.s),t(this.e))}}class jr{static hasDST(t=ne.defaultZone){const r=A.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return ft.isValidZone(t)}static normalizeZone(t){return kt(t,ne.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||G.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||G.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||G.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||G.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||G.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||G.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||G.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return G.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return G.create(r,null,"gregory").eras(t)}static features(){return{relative:k0(),localeWeek:$0()}}}function lc(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(D.fromMillis(n).as("days"))}function Dw(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const f=lc(l,c);return(f-f%7)/7}],["days",lc]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function Rw(e,t,r,n){let[o,i,a,s]=Dw(e,t,r);const l=t-o,c=r.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const f=D.fromObject(i,n);return c.length>0?D.fromMillis(l,n).shiftTo(...c).plus(f):f}const hs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},cc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},_w=hs.hanidec.replace(/[\[|\]]/g,"").split("");function Hw(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(hs.hanidec)!==-1)t+=_w.indexOf(e[r]);else for(const o in cc){const[i,a]=cc[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function Ge({numberingSystem:e},t=""){return new RegExp(`${hs[e||"latn"]}${t}`)}const Fw="missing Intl.DateTimeFormat.formatToParts support";function H(e,t=r=>r){return{regex:e,deser:([r])=>t(Hw(r))}}const Vw=String.fromCharCode(160),H0=`[ ${Vw}]`,F0=new RegExp(H0,"g");function jw(e){return e.replace(/\./g,"\\.?").replace(F0,H0)}function uc(e){return e.replace(/\./g,"").replace(F0," ").toLowerCase()}function Ye(e,t){return e===null?null:{regex:RegExp(e.map(jw).join("|")),deser:([r])=>e.findIndex(n=>uc(r)===uc(n))+t}}function dc(e,t){return{regex:e,deser:([,r,n])=>Go(r,n),groups:t}}function Vn(e){return{regex:e,deser:([t])=>t}}function zw(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Zw(e,t){const r=Ge(t),n=Ge(t,"{2}"),o=Ge(t,"{3}"),i=Ge(t,"{4}"),a=Ge(t,"{6}"),s=Ge(t,"{1,2}"),l=Ge(t,"{1,3}"),c=Ge(t,"{1,6}"),f=Ge(t,"{1,9}"),h=Ge(t,"{2,4}"),p=Ge(t,"{4,6}"),g=k=>({regex:RegExp(zw(k.val)),deser:([S])=>S,literal:!0}),$=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return Ye(t.eras("short"),0);case"GG":return Ye(t.eras("long"),0);case"y":return H(c);case"yy":return H(h,ka);case"yyyy":return H(i);case"yyyyy":return H(p);case"yyyyyy":return H(a);case"M":return H(s);case"MM":return H(n);case"MMM":return Ye(t.months("short",!0),1);case"MMMM":return Ye(t.months("long",!0),1);case"L":return H(s);case"LL":return H(n);case"LLL":return Ye(t.months("short",!1),1);case"LLLL":return Ye(t.months("long",!1),1);case"d":return H(s);case"dd":return H(n);case"o":return H(l);case"ooo":return H(o);case"HH":return H(n);case"H":return H(s);case"hh":return H(n);case"h":return H(s);case"mm":return H(n);case"m":return H(s);case"q":return H(s);case"qq":return H(n);case"s":return H(s);case"ss":return H(n);case"S":return H(l);case"SSS":return H(o);case"u":return Vn(f);case"uu":return Vn(s);case"uuu":return H(r);case"a":return Ye(t.meridiems(),0);case"kkkk":return H(i);case"kk":return H(h,ka);case"W":return H(s);case"WW":return H(n);case"E":case"c":return H(r);case"EEE":return Ye(t.weekdays("short",!1),1);case"EEEE":return Ye(t.weekdays("long",!1),1);case"ccc":return Ye(t.weekdays("short",!0),1);case"cccc":return Ye(t.weekdays("long",!0),1);case"Z":case"ZZ":return dc(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return dc(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return Vn(/[a-z_+-/]{1,256}?/i);case" ":return Vn(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:Fw};return $.token=e,$}const Ww={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Uw(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=Ww[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function Gw(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Yw(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if($r(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function Jw(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return I(e.z)||(r=ft.create(e.z)),I(e.Z)||(r||(r=new ke(e.Z)),n=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=ss(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let Si=null;function Kw(){return Si||(Si=A.fromMillis(1555555555555)),Si}function Xw(e,t){if(e.literal)return e;const r=be.macroTokenToFormatOpts(e.val),n=z0(r,t);return n==null||n.includes(void 0)?e:n}function V0(e,t){return Array.prototype.concat(...e.map(r=>Xw(r,t)))}function j0(e,t,r){const n=V0(be.parseFormat(r),e),o=n.map(a=>Zw(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=Gw(o),l=RegExp(a,"i"),[c,f]=Yw(t,l,s),[h,p,g]=f?Jw(f):[null,null,void 0];if($r(f,"a")&&$r(f,"H"))throw new ur("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:f,result:h,zone:p,specificOffset:g}}}function Qw(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=j0(e,t,r);return[n,o,i,a]}function z0(e,t){if(!e)return null;const n=be.create(t,e).dtFormatter(Kw()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>Uw(a,e,i))}const Ci="Invalid DateTime",hc=864e13;function jn(e){return new Qe("unsupported zone",`the zone "${e.name}" is not supported`)}function Mi(e){return e.weekData===null&&(e.weekData=Ao(e.c)),e.weekData}function Ai(e){return e.localWeekData===null&&(e.localWeekData=Ao(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Rt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new A({...r,...t,old:r})}function Z0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function zn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function io(e,t,r){return Z0(Uo(e),t,r)}function fc(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Eo(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=D.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Uo(i);let[l,c]=Z0(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Nr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=A.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return A.invalid(new Qe("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Zn(e,t,r=!0){return e.isValid?be.create(G.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Ei(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=ue(e.c.year,r?6:4),t?(n+="-",n+=ue(e.c.month),n+="-",n+=ue(e.c.day)):(n+=ue(e.c.month),n+=ue(e.c.day)),n}function pc(e,t,r,n,o,i){let a=ue(e.c.hour);return t?(a+=":",a+=ue(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=ue(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=ue(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=ue(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=ue(Math.trunc(-e.o/60)),a+=":",a+=ue(Math.trunc(-e.o%60))):(a+="+",a+=ue(Math.trunc(e.o/60)),a+=":",a+=ue(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const W0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},e4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},t4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},U0=["year","month","day","hour","minute","second","millisecond"],r4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],n4=["year","ordinal","hour","minute","second","millisecond"];function o4(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Yd(e);return t}function mc(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return o4(e)}}function gc(e,t){const r=kt(t.zone,ne.defaultZone),n=G.fromObject(t),o=ne.now();let i,a;if(I(e.year))i=o;else{for(const c of U0)I(e[c])&&(e[c]=W0[c]);const s=b0(e)||y0(e);if(s)return A.invalid(s);const l=r.offset(o);[i,a]=io(e,l,r)}return new A({ts:i,zone:r,loc:n,o:a})}function wc(e,t,r){const n=I(r.round)?!0:r.round,o=(a,s)=>(a=ls(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function vc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class A{constructor(t){const r=t.zone||ne.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Qe("invalid input"):null)||(r.isValid?null:jn(r));this.ts=I(t.ts)?ne.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=zn(this.ts,s),n=Number.isNaN(o.year)?new Qe("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||G.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new A({})}static local(){const[t,r]=vc(arguments),[n,o,i,a,s,l,c]=r;return gc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=vc(arguments),[n,o,i,a,s,l,c]=r;return t.zone=ke.utcInstance,gc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=Pg(t)?t.valueOf():NaN;if(Number.isNaN(n))return A.invalid("invalid input");const o=kt(r.zone,ne.defaultZone);return o.isValid?new A({ts:n,zone:o,loc:G.fromObject(r)}):A.invalid(jn(o))}static fromMillis(t,r={}){if(Ut(t))return t<-hc||t>hc?A.invalid("Timestamp out of range"):new A({ts:t,zone:kt(r.zone,ne.defaultZone),loc:G.fromObject(r)});throw new Te(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Ut(t))return new A({ts:t*1e3,zone:kt(r.zone,ne.defaultZone),loc:G.fromObject(r)});throw new Te("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=kt(r.zone,ne.defaultZone);if(!n.isValid)return A.invalid(jn(n));const o=G.fromObject(r),i=Io(t,mc),{minDaysInFirstWeek:a,startOfWeek:s}=tc(i,o),l=ne.now(),c=I(r.specificOffset)?n.offset(l):r.specificOffset,f=!I(i.ordinal),h=!I(i.year),p=!I(i.month)||!I(i.day),g=h||p,w=i.weekYear||i.weekNumber;if((g||f)&&w)throw new ur("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&f)throw new ur("Can't mix ordinal dates with month/day");const $=w||i.weekday&&!g;let k,S,C=zn(l,c);$?(k=r4,S=e4,C=Ao(C,a,s)):f?(k=n4,S=t4,C=Ti(C)):(k=U0,S=W0);let _=!1;for(const We of k){const xe=i[We];I(xe)?_?i[We]=S[We]:i[We]=C[We]:_=!0}const U=$?Ig(i,a,s):f?Lg(i):b0(i),se=U||y0(i);if(se)return A.invalid(se);const ge=$?Ql(i,a,s):f?ec(i):i,[fe,W]=io(ge,c,n),le=new A({ts:fe,zone:n,o:W,loc:o});return i.weekday&&g&&t.weekday!==le.weekday?A.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${le.toISO()}`):le}static fromISO(t,r={}){const[n,o]=$w(t);return Nr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=xw(t);return Nr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Tw(t);return Nr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(I(t)||I(r))throw new Te("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=G.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,f]=Qw(a,t,r);return f?A.invalid(f):Nr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return A.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Lw(t);return Nr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Te("need to specify a reason the DateTime is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(ne.throwOnInvalid)throw new ag(n);return new A({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=z0(t,G.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return V0(be.parseFormat(t),G.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Mi(this).weekYear:NaN}get weekNumber(){return this.isValid?Mi(this).weekNumber:NaN}get weekday(){return this.isValid?Mi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ai(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ai(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ai(this).weekYear:NaN}get ordinal(){return this.isValid?Ti(this.c).ordinal:NaN}get monthShort(){return this.isValid?jr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?jr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?jr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?jr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Uo(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,f=zn(l,a),h=zn(c,s);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[Rt(this,{ts:l}),Rt(this,{ts:c})]:[this]}get isInLeapYear(){return Cn(this.year)}get daysInMonth(){return Eo(this.year,this.month)}get daysInYear(){return this.isValid?pr(this.year):NaN}get weeksInWeekYear(){return this.isValid?mn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?mn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=be.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(ke.instance(t),r)}toLocal(){return this.setZone(ne.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=kt(t,ne.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=io(a,i,t)}return Rt(this,{ts:o,zone:t})}else return A.invalid(jn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Rt(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Io(t,mc),{minDaysInFirstWeek:n,startOfWeek:o}=tc(r,this.loc),i=!I(r.weekYear)||!I(r.weekNumber)||!I(r.weekday),a=!I(r.ordinal),s=!I(r.year),l=!I(r.month)||!I(r.day),c=s||l,f=r.weekYear||r.weekNumber;if((c||a)&&f)throw new ur("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new ur("Can't mix ordinal dates with month/day");let h;i?h=Ql({...Ao(this.c,n,o),...r},n,o):I(r.ordinal)?(h={...this.toObject(),...r},I(r.day)&&(h.day=Math.min(Eo(h.year,h.month),h.day))):h=ec({...Ti(this.c),...r});const[p,g]=io(h,this.o,this.zone);return Rt(this,{ts:p,o:g})}plus(t){if(!this.isValid)return this;const r=D.fromDurationLike(t);return Rt(this,fc(this,r))}minus(t){if(!this.isValid)return this;const r=D.fromDurationLike(t).negate();return Rt(this,fc(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=D.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?be.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Ci}toLocaleString(t=Mo,r={}){return this.isValid?be.create(this.loc.clone(r),t).formatDateTime(this):Ci}toLocaleParts(t={}){return this.isValid?be.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Ei(this,a);return s+="T",s+=pc(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Ei(this,t==="extended"):null}toISOWeekDate(){return Zn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+pc(this,a==="extended",r,t,n,i):null}toRFC2822(){return Zn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Zn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ei(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Zn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ci}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return D.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Ng(r).map(D.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=Rw(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(A.now(),t,r)}until(t){return this.isValid?ie.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||A.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),wc(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?wc(t.base||A.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(A.isDateTime))throw new Te("min requires all arguments be DateTimes");return rc(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(A.isDateTime))throw new Te("max requires all arguments be DateTimes");return rc(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=G.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return j0(a,t,r)}static fromStringExplain(t,r,n={}){return A.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Mo}static get DATE_MED(){return Jd}static get DATE_MED_WITH_WEEKDAY(){return cg}static get DATE_FULL(){return Kd}static get DATE_HUGE(){return Xd}static get TIME_SIMPLE(){return Qd}static get TIME_WITH_SECONDS(){return e0}static get TIME_WITH_SHORT_OFFSET(){return t0}static get TIME_WITH_LONG_OFFSET(){return r0}static get TIME_24_SIMPLE(){return n0}static get TIME_24_WITH_SECONDS(){return o0}static get TIME_24_WITH_SHORT_OFFSET(){return i0}static get TIME_24_WITH_LONG_OFFSET(){return a0}static get DATETIME_SHORT(){return s0}static get DATETIME_SHORT_WITH_SECONDS(){return l0}static get DATETIME_MED(){return c0}static get DATETIME_MED_WITH_SECONDS(){return u0}static get DATETIME_MED_WITH_WEEKDAY(){return ug}static get DATETIME_FULL(){return d0}static get DATETIME_FULL_WITH_SECONDS(){return h0}static get DATETIME_HUGE(){return f0}static get DATETIME_HUGE_WITH_SECONDS(){return p0}}function Or(e){if(A.isDateTime(e))return e;if(e&&e.valueOf&&Ut(e.valueOf()))return A.fromJSDate(e);if(e&&typeof e=="object")return A.fromObject(e);throw new Te(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function xr(e){const t=A.fromObject(rn(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function G0(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function Ii(e,t){return G0(xr(e).plus(t))}const i4=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],a4=i4.reduce((e,t)=>(e[t]=t,e),{}),s4=ne.defaultZone.name,fs=a4.UTC;var bc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(bc||(bc={}));const l4=["hour","minute","second","millisecond"],c4=kn({hour:14,minute:19,second:7,millisecond:877,timezone:fs}),u4=kn({year:2023,month:6,day:5,timezone:fs}),d4=kn(Ff(u4,c4));var E;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(E||(E={}));const h4={[E.Milliseconds]:"millisecond",[E.Seconds]:"second",[E.Minutes]:"minute",[E.Hours]:"hour",[E.Days]:"day",[E.Weeks]:"week",[E.Months]:"month",[E.Quarters]:"quarter",[E.Years]:"year"},yc=[E.Milliseconds,E.Seconds,E.Minutes,E.Hours,E.Days,E.Weeks,E.Months,E.Quarters,E.Years];function kc(e,t){return ve(e,(r,n)=>t==null||!K(n,"number")?n:Zi({number:n,digits:t}))}const $c={longterm:1,casual:0},Y0={[E.Years]:"longterm",[E.Quarters]:"longterm",[E.Months]:"longterm",[E.Weeks]:"casual",[E.Days]:"casual",[E.Hours]:"casual",[E.Minutes]:"casual",[E.Seconds]:"casual",[E.Milliseconds]:"casual"};function f4(e){return e.map(n=>Y0[n]).reduce((n,o)=>$c[o]>$c[n]?o:n)}var gr;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(gr||(gr={}));function p4({start:e,end:t,units:r,unit:n,diffType:o,decimalCount:i}){const a=xr(e),s=xr(t),l=r??[n],c=l.length===1?gr.EquivalentUnits:o;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===gr.AdditiveUnits){const f=f4(l),h=s.diff(a,l,{conversionAccuracy:f}).toObject();return kc(h,i)}else if(c===gr.EquivalentUnits){const f=l.map(p=>{const w=s.diff(a,p,{conversionAccuracy:Y0[p]}).toObject()[p];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${p}'`);return[p,w]}),h=wh(f);return kc(h,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function m4(e){if(!jr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function g4(e){Cu(e,d4),m4(e.timezone),xr(e)}function w4(e){try{return g4(e),!0}catch{return!1}}function v4(e,t){const r=b4(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return G0(r,t)}function xc(e){const t=A.fromJSDate(new Date(e));if(t.isValid)return t}function b4(e,t){if(w4(e)&&(e=xr(e).toMillis()),A.isDateTime(e))return e.setZone(t);if(K(e,"number"))return A.fromMillis(e,{zone:fs}).setZone(t);if(K(e,"string")){const r=A.fromISO(e,{zone:t});return r.isValid?r:xc(e)}else if(e instanceof Date)return A.fromJSDate(e).setZone(t);return xc(e)}function y4(e){return v4(Date.now(),e)}function J0(){return y4(s4)}const k4={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Bh(k4,l4);const $4=ne.defaultLocale;function x4(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Tc(e,t){const r=xr(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??$4});return x4(r)}function T4(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function S4(e,t){const r=Ce(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(ye).join(":")}function C4(e,t){return{date:T4(e),time:S4(e,t.includeSeconds),timezone:e.timezone}}function M4(e,t){const r=C4(e,t);return[r.date,r.time,t.includeTimezone&&`(${r.timezone})`].filter(ye).join(" ")}const A4={[E.Milliseconds]:1e3,[E.Seconds]:60,[E.Minutes]:60,[E.Hours]:24,[E.Days]:30,[E.Weeks]:4,[E.Months]:12,[E.Quarters]:4,[E.Years]:1/0};function E4({fullDate:e,relativeTo:t,options:r={}}){const n=r.decimalDigitCount||0,o=p4({start:e,end:t,units:yc,diffType:gr.EquivalentUnits}),i=ve(o,(g,w)=>{const $=Math.floor(Math.abs(Zi({digits:1,number:w}))),k=$>0,S=r.limitUnitMax?$<A4[g]:!0;return k&&S}),a=yc.reduce((g,w)=>{var k;return!((k=r.blockedRelativeUnits)!=null&&k.includes(w))&&i[w]?w:g},void 0);if(r.blockJustNow?!1:nt(e,t)||a===E.Minutes&&o.minutes<2||a===E.Seconds&&o.seconds<11||a===E.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],c=Math.abs(Zi({digits:n,number:l})),f=c===1,h=[h4[a],f?"":"s"].join(""),p=f?"a":c;return l<0?`in ${p} ${h}`:`${p} ${h} ago`}function I4(e){return{date:Tc(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Tc(e,{timeStyle:"short"}).replace(/\s/g," ")}}const L4={blockedRelativeUnits:[E.Years,E.Quarters],limitUnitMax:!0};function q4(e){var i,a,s;const t=I4(e.fullDate),r=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(ye).join(" "),n=M4(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?E4({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||J0(),options:{...L4,...e.relativeOptions}}):void 0;return{everythingString:n,displayString:o||r}}const Li=te()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:r}=q4(e);return u`
            <span title=${r}>${t}</span>
        `}}),P4="data-test-id",lr=Pt(class extends pt{constructor(t){super(t);In(this,"element");this.element=N4(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(P4,t),Pe}});function N4(e,t,r){O4(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function O4(e,t){if(e.type!==vn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var $a=(e=>(e.Up="up",e.Down="down",e))($a||{});const Wn=te()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:ee(),openChange:ee()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${B.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${me};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${Nt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${J.interaction} linear transform;
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
            ${ze};
            ${j(b.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${j(b.pagePrimary)}
            ${pn.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${pn.popupShadowReversed};
        }

        .selected-label-prefix {
            ${B.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${ze};
        }

        .select-options .option.selected {
            ${j(b.accentPrimary)}
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
            ${Jt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${x.assign({icon:n.icon})}
                      ${lr("rendered-input-icon")}
                  ></${x}>
              `:"",s=n.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return u`
            <button
                ?disabled=${!!n.disabled}
                class=${de({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${x.assign({icon:Cd})}
                            class="trigger-icon"
                        ></${x}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(l=>u`
                            <span
                                class="option ${l.value===(i==null?void 0:i.value)?"selected":""}"
                                @click=${c=>{c.preventDefault(),c.stopPropagation(),o({dropdownOpen:!1}),e(new t.openChange(!1)),e(new t.selectChange(l))}}
                                role="option"
                            >
                                ${l.label}
                            </span>
                        `)}
                </div>
            </button>
        `}}),qi=ns({tagName:"toniq-error-message",styles:m`
        :host {
            display: block;
            color: red;
        }

        p {
            padding: 0;
            margin: 0;
        }
    `,renderCallback(){return u`
            <p><slot></slot></p>
        `}});var ht=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(ht||{});const Je=te()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>m`
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
    `,renderCallback({inputs:e}){function t(n){if(e.linkType==="disabled"){n.preventDefault();return}e.linkType==="route-link"&&Ho(n)&&(n.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const r=e.linkType==="new-tab";return u`
            <a
                href=${e.url.toString()}
                ${T("click",t)}
                target=${Os(r?"_blank":void 0)}
                rel=${Os(r?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),xa=360,K0=8;function X0(e){return(e-K0)/2}const rt=mt({"main-image-size":xa,"secondary-image-size":X0(xa)}),st=te()({tagName:"toniq-featured-flip-card-footer",styles:m`
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

        ${pe} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${rt["secondary-image-size"].value} * 2);
        }

        ${Je} ${pe} {
            width: 100%;
        }

        ${Je} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${rt["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:ee(),flipCardButtonClick:ee()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?oe(n).map(i=>{const a=n[i];if(!a)return;const s=Ud[i];return u`
                          <${Je.assign({linkType:ht.NewTab,url:a})}>
                              <${x.assign({icon:s})}></${x}>
                          </${Je}>
                      `}).filter(ye):"";return u`
            <div class="buttons">
                <${Je.assign({url:e.viewMoreButtonUrl,linkType:ht.RouteLink,scrollToTop:!0})}
                    ${T("click",()=>{t(new r.viewMoreButtonClick)})}
                >
                    <${pe.assign({text:e.viewMoreButtonText,variant:Jr.Outline})}></${pe}>
                </${Je}>
                ${e.flipCardButtonText?u`
                          <${pe.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new r.flipCardButtonClick)})}
                          ></${pe}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Zt=te()({tagName:"toniq-flip-card",events:{flippedChange:ee()},styles:m`
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

        ${Lp(".card-face",!1)}

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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <div
                class="flip-wrapper ${de({flipped:e.flipped})}"
                ${T("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),X=te()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:ee()},styles:m`
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
            ${B.h3Font};
            ${B.extraBoldFont};
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
            max-height: ${rt["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${rt["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${K0}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Zt} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${rt["main-image-size"].value};
            height: ${rt["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${rt["secondary-image-size"].value};
            height: ${rt["secondary-image-size"].value};
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

        .card-face.front ${st} {
            margin-top: 24px;
        }

        .card-face.back ${st} {
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
            ${B.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var p,g,w,$;const a=e.mainImageSize||xa,s=X0(a);po({onElement:n,forCssVar:rt["main-image-size"],toValue:`${a}px`}),po({onElement:n,forCssVar:rt["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(ye).join(" "),c=u`
            <h3>${e.cardTitle}</h3>
        `,f=e.imageUrls[0],h=f?u`
                  <div class="main-image-wrapper">
                      ${((p=e.customTemplateCallback)==null?void 0:p.call(e,f))||u`
                          <${$t.assign({imageUrl:f})}></${$t}>
                      `}
                  </div>
              `:"";return u`
            <${Zt.assign({flipped:t.flipped})}
                ${T(st.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(k=>{var S;return u`
                                    <div class="secondary-image-wrapper">
                                        ${((S=e.customTemplateCallback)==null?void 0:S.call(e,k))||u`
                                            <${$t.assign({imageUrl:k})}></${$t}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${st.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(st.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${st}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(w=e.infoParagraphs)==null?void 0:w.map(k=>u`
                                <p>${k}</p>
                            `)}
                    </div>
                    <${st.assign({viewMoreButtonText:l,flipCardButtonText:($=e.infoParagraphs)!=null&&$.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(st.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${st}>
                </div>
            </${Zt}>
        `}});var cr=(e=>(e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e))(cr||{});const Ae=te()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level==="h1","toniq-heading-h2":({inputs:e})=>e.level==="h2","toniq-heading-h3":({inputs:e})=>e.level==="h3","toniq-heading-h4":({inputs:e})=>e.level==="h4"},styles:({hostClasses:e})=>m`
        ${e["toniq-heading-h1"].selector} {
            ${B.h1Font};
        }
        ${e["toniq-heading-h2"].selector} {
            ${B.h2Font};
        }
        ${e["toniq-heading-h3"].selector} {
            ${B.h3Font};
        }
        ${e["toniq-heading-h4"].selector} {
            ${B.h4Font};
        }

        h1,
        h2,
        h3,
        h4 {
            ${Xa};
            font: inherit;
            overflow: inherit;
            text-overflow: inherit;
        }
    `,renderCallback({inputs:e}){return e.level==="h1"?u`
                <h1><slot></slot></h1>
            `:e.level==="h2"?u`
                <h2><slot></slot></h2>
            `:e.level==="h3"?u`
                <h3><slot></slot></h3>
            `:e.level==="h4"?u`
                <h4><slot></slot></h4>
            `:u`
                <slot></slot>
            `}});function Ta({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ta({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Q0({value:e,allowed:t,blocked:r}){const n=t?Ta({input:e,matcher:t}):!0,o=r?Ta({input:e,matcher:r}):!1;return n&&!o}function Sc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Q0({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var Sa=(e=>(e.Default="default",e.Outline="outline",e))(Sa||{});const Un=te()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:ee(),inputBlock:ee()},styles:({hostClasses:e})=>m`
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
                border-radius: ${ha};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${b.pagePrimary.backgroundColor};
                border-color: ${b.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${x} {
                color: ${b.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${x} {
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
                border-radius: ${ha};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${B.paragraphFont};
                gap: 4px;
            }

            ${Nt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${x} {
                margin-right: 10px;
            }

            input {
                ${me};
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
                ${B.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Jt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${ze};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Sc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
                  <${x.assign({icon:e.icon})}></${x}>
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
                    ${T("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)Q0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlock(s)));else{const{filtered:f,blocked:h}=Sc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=f,t(new r.inputBlock(h))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${$e(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var Xr=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(Xr||{});const Qr=te()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>m`
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

        ${e["toniq-loading-whole-page"].selector} ${x} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${x} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>u`
            <${x.assign({icon:rs,fitContainer:e.size!=="small"})}></${x}>
        `}),Cc="...";function B4(e,t,r=7,n=5){let o;e=hr({value:e,min:1,max:t}),r=hr({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Pi(t-o,t):e>o?Pi(Math.min(s.start,t-o),Math.min(s.end,t)):Pi(1,Math.min(t,o+1));function c(h,p){return l.length+1!==t?p:[h]}const f=l[l.length-1];if(f&&f<t){const h=c(t,[Cc,t]);return[...l,...h]}else return l[0]!==1?c(1,[1,Cc]).concat(l):l}function Pi(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}const Ni=te()({tagName:"toniq-pagination",styles:m`
        :host {
            display: flex;
        }

        button {
            ${me};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${ze};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${j(b.accentSecondary)};
        }

        .control:hover {
            ${j(b.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${j(b.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${B.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${j(b.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${j(b.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:ee()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${T("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${x.assign({icon:es})}></${x}>
                </button>
                ${B4(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${de({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${T("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${T("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${x.assign({icon:ts})}></${x}>
                </button>
            `}}),Oi=b.pageInteraction.foregroundColor,Bi=b.accentSecondary.backgroundColor,_t=te()({tagName:"toniq-list-table",cssVars:{"toniq-list-table-border-width":"1px","toniq-list-table-header-radius":"16px","toniq-list-table-row-gap":"36px"},events:{pageChange:ee()},styles:({cssVars:e})=>m`
        :host {
            display: flex;
            overflow-x: auto;
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Firefox */
        :host {
            scrollbar-width: auto;
            scrollbar-color: ${Oi} ${Bi};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 2px;
            height: 2px;
        }

        :host::-webkit-scrollbar-track {
            background: ${Bi};
            border-radius: 8px;
        }

        :host::-webkit-scrollbar-thumb {
            background-color: ${Oi};
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
            width: 100%;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            overflow-x: auto;
        }

        .table-list {
            scrollbar-width: auto;
            scrollbar-color: ${Oi} ${Bi};
        }

        .header {
            position: absolute;
            top: 0;
            ${B.labelFont};
        }

        .scroll-indicator {
            height: 32px;
            padding-left: 8px;
            position: absolute;
            top: 0;
            right: 0;
            background: ${b.pageInteraction.backgroundColor};
        }

        .scroll-indicator ${x} {
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
        }

        .row-wrapper:first-of-type,
        .row-wrapper:first-of-type .row-item {
            max-height: 32px;
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
            padding: 12px 0;
        }

        .row-content.hidden {
            visibility: hidden;
        }

        .row-content,
        .row-content * {
            text-wrap: nowrap;
        }

        .row-item {
            height: -webkit-fill-available;
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
            visibility: none;
            pointer-events: none;
            opacity: 0;
            transition: ${J.interaction};
        }

        .loading-wrapper {
            transition: ${J.pretty};
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
    `,stateInitStatic:{table:{header:[],row:[]},canScroll:!1,debouncedResize:i1(()=>Ih(tn.FirstThenWait,{milliseconds:30}))},initCallback({inputs:e,updateState:t}){const r=e.columns.filter(n=>!n.disabled);t({table:{header:r.map(n=>{var o;return{title:n.title,key:n.key,left:0,mobile:{sticky:(o=n.mobile)==null?void 0:o.sticky}}}),row:[e.rows[0],...e.rows]}})},renderCallback({inputs:e,state:t,updateState:r,events:n,dispatch:o}){var l;function i(c){if(c instanceof HTMLElement){const f=c.getBoundingClientRect().left,h=t.table.header.map((p,g)=>{const w=c.querySelectorAll(".row-item")[g],$=w==null?void 0:w.getBoundingClientRect().left;return{...p,left:$-f}});t.debouncedResize(()=>{r({table:{...t.table,header:h},canScroll:c.scrollWidth>c.clientWidth})})}}const a=e.pagination&&((l=e.pagination)==null?void 0:l.pageCount)>1?u`
                      <${Ni.assign({currentPage:e.pagination.currentPage,pageCount:e.pagination.pageCount})}
                          class=${de({"blocked-pagination":!!e.showLoading})}
                          ${T(Ni.events.pageChange,c=>{o(new n.pageChange(c.detail))})}
                      ></${Ni}>
                  `:Q;function s(c,f){return u`
                <div
                    class="row-wrapper"
                    ${T("click",h=>{var p,g;f>0&&((g=(p=c.rowActions)==null?void 0:p.click)==null||g.call(p,{clickEvent:h,dispatch:o}))})}
                >
                    ${t.table.header.map(h=>{var g,w;const p=c.cells[h.key];return u`
                            <div
                                class=${de({"row-item":!0,sticky:(g=h.mobile)!=null&&g.sticky?((w=h.mobile)==null?void 0:w.sticky)&&t.canScroll:!1})}
                                style=${m`
                                    left: ${N(`${h.left}px`)};
                                `}
                            >
                                <div
                                    class=${de({"row-content":!0,hidden:f===0})}
                                >
                                    ${p}
                                </div>
                                ${$e(f===0,u`
                                        <span class="header">${h.title}</span>
                                    `)}
                            </div>
                        `})}
                </div>
            `}return u`
            <div
                class=${de({"table-wrapper":!0,"can-scroll":t.canScroll})}
            >
                <div
                    class="table-list"
                    ${br(c=>{i(c.target)})}
                    ${T("scroll",c=>{i(c.target)})}
                    ${T("keydown",c=>{e.showLoading&&(c.preventDefault(),c.stopImmediatePropagation())})}
                >
                    ${t.table.row.map((c,f)=>u`
                            ${s(c,f)}
                        `)}
                    ${$e(t.canScroll,u`
                            <div class="scroll-indicator">
                                <${x.assign({icon:xd})}></${x}>
                            </div>
                        `)}
                </div>
                <div class="loading-wrapper ${de({hidden:!e.showLoading})}">
                    <${Qr.assign({size:Xr.Large})}></${Qr}>
                </div>
                ${a}
            </div>
        `}});async function D4(e){return navigator.clipboard.writeText(e)}const R4="…";function _4(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${R4}${n}`}function H4(e){return!(e%1)}function F4(e){return e.letterCount==null?4:H4(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const ce=te()({tagName:"toniq-middle-ellipsis",events:{copy:ee()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            /* 5 frames at 60 fps */
            transition: ${J.interaction};
            ${B.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${x} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${x} {
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
            ${me};
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
            transition: opacity ${J.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=F4(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,f=c?_4(i,a):i,h=c?i:"",p=s?Ed:l?Ad:void 0,g=p?u`
                  <${x.assign({icon:p})}></${x}>
              `:"",w=u`
            <span title=${h} class="text-content">
                ${$e(!!e.copyOnClick,u`
                        <span
                            class=${de({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${f}
            </span>
        `;return f?s?u`
                    <button
                        tabindex="0"
                        role="link"
                        ${T("click",$=>{var S,C;const k=(C=(S=$.currentTarget)==null?void 0:S.querySelector)==null?void 0:C.call(S,"a");if(!k)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");k.click()})}
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
                `:l?u`
                    <button
                        class="text-wrapper copyable"
                        ${T("click",async()=>{await D4(i),t(new r.copy),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${w} ${g}
                    </button>
                `:u`
                    ${w}
                `:u``}}),Br=te()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>m`
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
    `,renderCallback({inputs:e,cssVars:t,host:r}){const n=hr({value:e.percent,max:100,min:0}),o=`${n}%`;return po({forCssVar:t["toniq-progress-width"],onElement:r,toValue:o}),r.setAttribute("title",`${o} finished`),n?u`
                <div class="progress"></div>
            `:Q}}),Y=te()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:ee()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ke("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ke("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ke("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ke("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>m`
        :host {
            ${B.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${J.interaction},
                background-color ${J.interaction},
                opacity ${J.interaction};
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
            ${me};
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
            transition: ${J.interaction};
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
            ${Jt};
        }

        .wrapper.disabled::before {
            ${Jt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Jc()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return V4(e.entries).map(i=>j4(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function V4(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${Y.tagName} was given duplicate entry values.`),Object.values(t)}function j4(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${de({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${T("click",()=>{n()})}
        >
            <input
                ${T("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function Di(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,f)=>{const h=e[f+1];return h==null?!0:c<=t&&h>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function z4(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=Z4(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Mc(o,r),o.length>r&&Mc(o,r)),o}function Mc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function Z4(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const P={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Dr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function W4(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${P.lowerLabelWrapper} .${P.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${P.upperLabelWrapper} .${P.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function U4(e,t=8){const r=W4(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Ri({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function gn(e){return je(e)&&e.min!==void 0&&e.max!==void 0}function Ca(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${P.range}`);return(t==null?void 0:t.clientWidth)??0}function _i(e,t,r){return`${r?Jh(e):e} ${t}`}function G4({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Y4({value:e,double:t,min:r,max:n}){return t?gn(e)?{min:hr({value:e.min,min:r,max:Math.min(e.max,n)}),max:hr({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:gn(e)?r:hr({value:e,min:r,max:n})}function J4({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:gn(e)?{min:Di(n,e.min),max:Di(n,e.max)}:Di(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function Hi(e,t,r){return r?t[e]||0:e}function K4(e){return{actualLimits:G4(e),actualValue:Y4(e)}}function X4(e,t){var n,o,i;let r=!1;if(gn(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${P.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${P.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${P.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function eh(e,t){const{actualValue:r,actualLimits:n}=K4({...e}),o=z4(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=J4({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=Ca(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Ht=16,Ac=m`
    ${Ht}px
`,Ec=m`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Ac};
    width: ${Ac};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${J.interaction};
    ${j(b.accentPrimary)};
`,Ic=m`
    transform: scale(1.2);
`;function zr(e){requestAnimationFrame(()=>{const t=eh(e.instanceInputs,e).elementValue;X4(t,e)&&(e.setAttribute("disabled","true"),zr(e))})}const F=te()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:ee()},styles:m`
        :host {
            display: block;
        }

        .${N(P.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${j(b.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${j(b.accentPrimary)};
        }

        .${N(P.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${B.boldParagraphFont};
            ${ze};
        }

        .${N(P.labelPixelMarginWrapper)},
            .${N(P.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${N(P.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${N(P.slider)} {
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

        .${N(P.lowerSlider)},
        .${N(P.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${N(P.slider)}::-moz-range-thumb {
            ${Ec}
        }

        /* these selectors fail if combined with a comma */
        .${N(P.slider)}::-webkit-slider-thumb {
            ${Ec}
        }

        /* these selectors fail if combined with a comma */
        .${N(P.slider)}::-webkit-slider-thumb:hover {
            ${Ic}
        }

        /* these selectors fail if combined with a comma */
        .${N(P.slider)}::-moz-range-thumb:hover {
            ${Ic}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{zr(e)}),e.addEventListener("keydown",()=>{zr(e)}),e.addEventListener("keyup",()=>{zr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:f,elementLimits:h,rangeWidth:p}=eh({...e},t);if(zr(t),gn(f))return g(a,f,h);return $(a,f,h);function g(k,S,C){const _={left:Ft((p-Ht)*(S.min-C.min)/(C.max-C.min)+Ht/2),right:Ft((p-Ht)*(C.max-S.max)/(C.max-C.min)+Ht/2)},U=_i(k.min,c,l),se=_i(k.max,c,l);requestAnimationFrame(()=>{const xe=U4(t);xe!==o.labelOverlap&&i({labelOverlap:xe})});const ge=(C.max-S.max)/(C.max-C.min)>.5,fe=Ri({value:S.min,limits:{min:C.min,max:S.max},flip:!0}),W=Ri({value:S.max,limits:{min:S.min,max:C.max},flip:!1}),le=o.labelOverlap&&ge?o.labelOverlap:0,We=o.labelOverlap&&!ge?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${br(()=>{i({rangeWidth:Ca(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${_.left}; right:${_.right}"
                    ></div>
                    <span
                        class="${P.labelOuterWrapper} ${P.lowerLabelWrapper}"
                        style="left: ${_.left}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-left: ${ei(fe)}"
                        >
                            <span
                                class="${P.labelPixelMarginWrapper}"
                                style="margin-right: ${Ft(We)}"
                                ${lr(Dr.lowerLabel)}
                            >
                                ${U}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${P.labelOuterWrapper} ${P.upperLabelWrapper} ${P.rightAlignedLabelWrapper}"
                        style="right: ${_.right}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-right: ${ei(W)}"
                        >
                            <span
                                class="${P.labelPixelMarginWrapper}"
                                style="margin-left: ${Ft(le)}"
                                ${lr(Dr.upperLabel)}
                            >
                                ${se}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${P.lowerSlider} ${P.slider}"
                            .min=${C.min}
                            .max=${C.max}
                            .value=${S.min}
                            ${T("input",xe=>{const Qt=xe.target,Ir={...k,min:Hi(Number(Qt.value),s,l)};w(Ir)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${P.upperSlider} ${P.slider}"
                            step=${e.step}
                            .min=${C.min}
                            .max=${C.max}
                            .value=${S.max}
                            ${lr(Dr.slider)}
                            ${T("input",xe=>{const Qt=xe.target,Ir={...k,max:Hi(Number(Qt.value),s,l)};w(Ir)})}
                        />
                    </div>
                </div>
            `}function w(k){i({internalValue:k}),e.disabled||n(new r.valueChange(k))}function $(k,S,C){const _=Ft((p-Ht)*(C.max-S)/(C.max-C.min)+Ht/2),U=_i(k,c,l),se=Ri({value:S,limits:C,flip:!1});return u`
                <div
                    class="range"
                    ${br(()=>{i({rangeWidth:Ca(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${_}"></div>
                    <span
                        class="${P.labelOuterWrapper} ${P.rightAlignedLabelWrapper}"
                        style="right: ${_}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-right: ${ei(se)}"
                            ${lr(Dr.label)}
                        >
                            ${U}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${P.slider}"
                        step=${e.step}
                        .min=${C.min}
                        .max=${C.max}
                        .value=${S}
                        ${lr(Dr.slider)}
                        ${T("input",ge=>{const fe=ge.target,W=Hi(Number(fe.value),s,l);w(W)})}
                    />
                </div>
            `}}});var th=(e=>(e.Default="default",e.TextOnly="text-only",e))(th||{});const Fi=te()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${B.boldParagraphFont};
            ${ze};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${me};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${j(b.accentSecondary)};
            transition:
                color ${J.interaction},
                background-color ${J.interaction};
        }

        ${Nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${j(b.accentPrimary)};
        }

        :host(:hover) button {
            ${j(b.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${j(b.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${j(b.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${j(b.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${j(b.pageInteraction)};
            border-color: ${b.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${j(b.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${b.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${j(b.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Jt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${x.assign({icon:e.icon})}
                      class="icon-template"
                  ></${x}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),en=ns({tagName:"toniq-tooltip",styles:m`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${pn.menuShadow};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),ao=te()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${J.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${J.pretty} ${J.pretty},
                opacity ${J.pretty};
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return u`
            <div
                class="slot-wrapper"
                ${T("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${en}>${e.tooltipContent}</${en}>
            </div>
        `}}),Zr=te()({tagName:"toniq-top-tabs",events:{routeChange:ee(),valueChange:ee()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>m`
        :host {
            display: block;
        }

        ul {
            ${me};
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
                border-bottom-width ${J.interaction},
                border-color ${J.interaction},
                padding-bottom ${J.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${me};
            ${Xa};
            cursor: pointer;
            display: inline-block;
            ${B.paragraphFont};
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

        ${Wt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${B.boldFont};
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=e.tabs.map(o=>{var l;const i=o.value===e.value,a=o.icon?u`
                      <${x.assign({icon:o.icon})}></${x}>
                  `:"",s=o.label?u`
                      <${Wt.assign({text:o.label})}></${Wt}>
                  `:"";return u`
                <li
                    ${o1("tab")}
                    role="presentation"
                    class=${de({selected:i})}
                >
                    <${Je.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:ht.RouteLink})}
                        class="tab ${de({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${T("click",c=>{var f;i||Ho(c)&&((f=o.link)!=null&&f.route&&t(new r.routeChange(o.link.route)),t(new r.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Je}>
                </li>
            `});return u`
            <ul role="tablist">
                ${n}
                <li></li>
            </ul>
        `}}),rh=R({title:"Data",parent:void 0}),Lo=te()({tagName:"toniq-icon-book-viewer",styles:m`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${b.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${x.assign({icon:e.icon})}></${x}>
        `}}),Jo=Object.values(yt).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),Q4=Object.keys(Jo).sort();function ps(e){return{controlType:O.Dropdown,initValue:e,options:["None",...Q4]}}const nh={"CSS color":{controlType:O.Color,initValue:""},[String(d["toniq-icon-stroke-color"].name)]:{controlType:O.Color,initValue:""},[String(d["toniq-icon-fill-color"].name)]:{controlType:O.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:O.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:O.Number,initValue:2}};function so(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),K(n,"number")&&(n=Aa({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const e5=R({title:"Social Urls",parent:rh,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${Lo.assign({icon:n})}></${Lo}>
                    `}})}Object.entries(Ud).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),re=R({title:"Elements",parent:void 0}),t5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:m`
            ${Wt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],r5=R({title:Wt.tagName,parent:re,elementExamplesCallback({defineExample:e}){t5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:m`
                    .bold {
                        ${B.boldFont}
                    }

                    ${t.extraStyle??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Wt.assign({text:t.text})}
                            ${T("click",()=>{n({isBold:!r.isBold})})}
                            class=${de({bold:r.isBold})}
                        ></${Wt}>
                        More text
                    `}})})}}),n5=R({parent:re,title:pe.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:Jr.Secondary}},{name:"Outline",inputs:{variant:Jr.Outline}},{name:"Text Only",inputs:{variant:Jr.TextOnly}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:m`
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
                `,renderCallback({state:n,updateState:o}){return n.timeoutId||o({timeoutId:window.setTimeout(()=>{o({showIcon:!n.showIcon,timeoutId:void 0})},1e3)}),u`
                        <${pe.assign({text:"Button",...r.inputs})}></${pe}>
                        <${pe.assign({icon:ro,...r.inputs})}></${pe}>
                        <${pe.assign(n.showIcon?{icon:ro,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${pe}>
                        <${pe.assign({text:"Button",icon:ro,...r.inputs})}></${pe}>
                        <${pe.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${pe}>
                        <${pe.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${pe}>
                    `}})})}}),Lc=m`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Ee} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,o5=R({parent:re,title:Ee.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Lc,renderCallback(){return u`
                    <${Ee.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:yt["core-24"].map(t=>{const r=m`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${x.assign({icon:t})} style=${r}></${x}>
                            `})})}></${Ee}>
                    <${Ee.assign({enableAutomaticCycling:!0,templates:yt["core-24"].map(t=>{const r=m`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${x.assign({icon:t})} style=${r}></${x}>
                            `})})}></${Ee}>
                    <${Ee.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:yt["core-24"].map(t=>{const r=_h({min:0,max:150}),n=m`
                                padding: 100px ${r}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${x.assign({icon:t})} style=${n}></${x}>
                            `})})}></${Ee}>
                `}}),e({title:"banner style",styles:Lc,renderCallback(){const t=m`
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
                `;return u`
                    <${Ee.assign({enableAutomaticCycling:!0,variant:fa.Banner,templates:yt["core-24"].map(r=>u`
                                <div style=${t}>
                                    <${x.assign({icon:r})}></${x}>
                                </div>
                            `)})}></${Ee}>
                    <${Ee.assign({enableAutomaticCycling:!0,variant:fa.Banner,templates:[yt["core-24"][0]].map(r=>u`
                                <div style=${t}>
                                    <${x.assign({icon:r})}></${x}>
                                </div>
                            `)})}
                        class=${Ee.hostClasses["toniq-carousel-banner-variant"]}
                    ></${Ee}>
                `}})}});function i5(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:O.Color,initValue:""}]);return Object.fromEntries(t)}function a5(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(ye);return N(t.join(`
`))}const s5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Vi=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],l5=R({parent:re,title:gt.tagName,controls:{Text:{controlType:O.Text,initValue:"Text"},...i5(gt)},elementExamplesCallback({defineExample:e}){s5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Vi.map(r=>!!r.inputs.checked),extraEntryStatuses:Vi.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:m`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Vi.map((i,a)=>{const s=(i.extraEntries??[]).map((c,f)=>{var h;return u`
                                    <${gt.assign({...t.inputs,...rn(i.inputs,["checked"]),checked:!!((h=r.extraEntryStatuses[a])!=null&&h[f]),text:c})}
                                        ${T(gt.events.checkedChange,()=>{const p=[...r.extraEntryStatuses];p[a][f]=!p[a][f],n({extraEntryStatuses:p})})}
                                    ></${gt}>
                                `}),l=a5(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${gt.assign({...t.inputs,...rn(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${T(gt.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${gt}>
                                ${s}
                            </div>
                        `})}})})}}),c5=R({parent:re,title:ki.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Ct}},{inputs:{icon:Ct}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Ct},template:u`
                    HTML child
                `},{customStyle:m`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:ma.Default}},{title:"secondary style",inputs:{variant:ma.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${ki.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${$e(!!o.template,o.template)}</${ki}>
                    `)}})})}}),u5=R({title:Li.tagName,parent:re,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=J0();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:Ii(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:Ii(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:Ii(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[E.Days,E.Hours]}}}].forEach(n=>{e({title:n.title,renderCallback(){return u`
                        <${Li.assign({...n.inputs})}></${Li}>
                    `}})})}}),Gn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],d5=[{title:"default"},{title:"transparent background",customStyle:m`
            ${Qa.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],qc=[{},{customStyle:m`
            width: 500px;
            height: 100px;
        `},{customStyle:m`
            max-height: 30px;
            min-height: 30px;
        `}],h5=R({title:Wn.tagName,parent:re,controls:{Selected:{controlType:O.Dropdown,initValue:Gn[0].label,options:Gn.map(e=>e.label)},Direction:{controlType:O.Dropdown,initValue:"Down",options:Zc($a)},Icon:ps(Td.name),Prefix:{controlType:O.Text,initValue:"Sort by: "},"Force open":{controlType:O.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){d5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:qc.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:m`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return qc.map((i,a)=>{const s=m`
                            ${t.customStyle??m``};
                            ${i.customStyle??m``};
                        `;return u`
                            <${Wn.assign({...t.inputs,...i.inputs,options:Gn,value:r.selected[a]??Gn.find(l=>l.label===o.Selected),icon:Jo[o.Icon],selectedLabelPrefix:o.Prefix,direction:$a[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${T(Wn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Wn}>
                        `})}})})}}),f5=[{title:"empty",content:""},{title:"with text",content:"Error: there was an error"}],p5=R({title:qi.tagName,parent:re,elementExamplesCallback({defineExample:e}){f5.forEach(t=>{e({title:t.title,renderCallback(){return u`
                        <${qi}>${t.content}</${qi}>
                    `}})})}}),Pc="/toniq-labs-design-system";function oh(...e){const r=[globalThis.location.pathname.startsWith(Pc)?Pc:"",...e].filter(ye);return nn(...r)}const ar=Array(30).fill(oh("/toniq-labs-logo.png")),dr=["Hello there.","There is stuff here."],Yn=dr.concat(Array(30).fill(dr)),m5=R({title:X.tagName,parent:re,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({infoParagraphs:Yn,imageUrls:ar,socialUrls:Qm,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${X}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:ar,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${X}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Yn,viewMoreUrl:"https://toniqlabs.com"})}
                        ${T(X.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${X}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Yn})}></${X}>
                `}}),e({title:"with custom height",styles:m`
                ${X} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Yn})}></${X}>
                `}}),e({title:"smaller",styles:m`
                ${X} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:ar,infoParagraphs:dr,cardTitle:"Featured Stuff"})}></${X}>
                `}}),e({title:"with social URLs",styles:m`
                ${X} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:ar,infoParagraphs:dr,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${X}>
                `}}),e({title:"with custom template",styles:m`
                ${X} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:ar,infoParagraphs:dr,cardTitle:"With custom Template",customTemplateCallback(t){return u`
                                <${$t.assign({imageUrl:t})}></${$t}>
                            `}})}></${X}>
                `}}),e({title:"with custom template statuses",styles:m`
                ${X} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${X.assign({imageUrls:ar.map((t,r)=>r%2?"/invalid-image.png":t),infoParagraphs:dr,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return u`
                                <${$t.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${kr.Loading}
                                        class="icon-wrapper"
                                        style=${m`
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
                                        <${x.assign({icon:rs,fitContainer:!0})}
                                            style=${m`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${x}>
                                    </div>
                                    <div
                                        slot=${kr.Error}
                                        class="icon-wrapper"
                                        style=${m`
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
                                        <${x.assign({icon:wd,fitContainer:!0})}
                                            style=${m`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${x}>
                                    </div>
                                </${$t}>
                            `}})}></${X}>
                `}})}}),g5=R({title:Zt.tagName,parent:re,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:m`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${Zt.assign({flipped:t.flipped})}
                        ${T(Zt.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Zt}>
                `}})}}),w5=R({title:Ae.tagName,parent:re,elementExamplesCallback({defineExample:e}){Wc(cr).forEach(t=>{e({title:t,renderCallback(){return u`
                        <${Ae.assign({level:t})}>Some text</${Ae}>
                    `}})}),e({title:"can be restyled",styles:m`
                ${Ae}:first-of-type {
                    ${B.h4Font};
                }
            `,renderCallback(){return u`
                    <${Ae.assign({level:cr.H1})}>
                        This is an h1
                    </${Ae}>
                    <${Ae.assign({level:cr.H1})}>
                        This is an h1
                    </${Ae}>
                `}}),e({title:"can do ellipsis",styles:m`
                ${Ae}:first-of-type {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                :host {
                    width: 300px;
                }
            `,renderCallback(){return u`
                    <${Ae.assign({level:cr.H3})}>
                        title longer than bounds
                    </${Ae}>
                    <${Ae.assign({level:cr.H3})}>
                        title longer than bounds
                    </${Ae}>
                `}})}}),v5=R({parent:re,title:Je.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:ht.ReplacePage}},{title:"new tab",inputs:{linkType:ht.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:ht.NewTab}},{title:"route link",inputs:{linkType:ht.RouteLink}},{title:"link disabled",inputs:{linkType:ht.Disabled}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${Je.assign({url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Je}>
                    `}})})}}),b5=R({title:x.tagName,parent:re,controls:nh,elementExamplesCallback({defineExample:e}){const t=[{icon:Nd},{icon:Pd},{icon:Md},{icon:Ct},{icon:void 0}];e({title:"sizes",styles:m`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${x.assign({icon:n.icon})}
                            style=${so(r)}
                        ></${x}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=m`
                    ${d["toniq-icon-fill-color"].name}: orange;
                `;return yt["third-party-brands"].map(o=>u`
                        <${x.assign({icon:o})}
                            style=${so(r)}
                        ></${x}>
                        <${x.assign({icon:o})}
                            style=${n}
                        ></${x}>
                    `)}}),e({title:"fit container",styles:m`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${x} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:r}){return u`
                    <${x.assign({icon:Ct,fitContainer:!0})}
                        style=${so(r)}
                    ></${x}>
                `}})}}),y5=R({title:Un.tagName,parent:re,controls:{"External value":{controlType:O.Text,initValue:""},Placeholder:{controlType:O.Text,initValue:"placeholder"},Icon:ps(Ld.name),Suffix:{controlType:O.Text,initValue:"ICP"},"No browser helps":{controlType:O.Checkbox,initValue:!1},"Blocked characters":{controlType:O.Text,initValue:""},"Exclusive characters":{controlType:O.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:m`
                    height: 75px;
                    width: 300px;
                `},{customStyles:m`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:Sa.Default}},{title:"outline",inputs:{variant:Sa.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${Un.assign({...n.inputs,value:o["External value"]||i.value,icon:Jo[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${T(Un.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Un}>
                        `))}})})}});function k5({entries:e,columns:t,createRowObject:r}){const n=Object.fromEntries(t.map(i=>[i.key,""]));return{rows:e.map((i,a)=>{const s=r(i,a);if(!nt(Object.keys(n).sort(),Object.keys(s.cells).sort()))throw console.error("broken list table row",{cells:s.cells,columns:n}),new Error("List table row keys does not match expect column keys.");return s}),columns:t}}const ih="https://cdn-bitcoin.bioniq.io",$5=nn(ih,"content"),x5=nn(ih,"thumbnail"),T5={thumbnail(e){return nn(x5,e)},content(e){return nn($5,e)}},S5=Array(5).fill({imageUrl:T5.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:u`
        <div
            style=${m`
                display: flex;
                gap: 8px;
            `}
        >
            <${x.assign({icon:Od})}></${x}>
            <span>0.00042753</span>
        </div>
    `,from:u`
        <${ce.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${m`
                color: ${b.pageInteraction.foregroundColor};
            `}
        ></${ce}>
    `,to:u`
        <${ce.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${m`
                color: ${b.pageInteraction.foregroundColor};
            `}
        ></${ce}>
    `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:u`
        <div
            style=${m`
                width: 100%;
                display: flex;
                justify-content: flex-end;
            `}
        >
            <button
                style=${m`
                    ${me}
                    ${B.boldParagraphFont};
                    color: ${b.pageInteraction.foregroundColor};
                    cursor: pointer;
                `}
            >
                Cancel
            </button>
        </div>
    `}),ji=k5({entries:S5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE",mobile:{sticky:!0}},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:u`
                    <img
                        style=${m`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),C5=[{title:"basic"},{title:"with pagination",inputs:{pagination:{currentPage:3,pageCount:10}}},{title:"squished horizontally",styles:m`
            :host {
                width: 200px;
            }
        `},{title:"squished vertically",styles:m`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{pagination:{currentPage:3,pageCount:10}}},{title:"squished in both",styles:m`
            :host {
                max-height: 300px;
                width: 200px;
                display: flex;
            }
        `},{title:"with wide parent",styles:m`
            ${_t} {
                width: 100%;
                flex-grow: 1;
            }
        `},{title:"with loading",styles:m`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{showLoading:!0,pagination:{currentPage:3,pageCount:10}}}],Nc=ns({tagName:"toniq-test-resize",stateInitStatic:{message:"",cleanup:void 0},initCallback({updateState:e,state:t}){if(!t.cleanup){const r=window.setInterval(()=>{t.message?e({message:""}):e({message:"April 3, 2024 (1:57pm)"})},1e3);e({cleanup(){window.clearInterval(r)}})}},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0})},renderCallback({state:e}){return e.message}}),M5=R({title:_t.tagName,parent:re,elementExamplesCallback({defineExample:e}){C5.forEach(t=>{var r,n;e({title:t.title,styles:m`
                    ${N(t.styles)}
                `,stateInitStatic:{currentPage:(n=(r=t.inputs)==null?void 0:r.pagination)==null?void 0:n.currentPage},renderCallback({state:o,updateState:i}){var s;const a=(s=t.inputs)!=null&&s.pagination&&o.currentPage?{pagination:{...t.inputs.pagination,currentPage:o.currentPage}}:{};return u`
                        <${_t.assign({...ji,...t.inputs,...a})}
                            ${T(_t.events.pageChange,l=>{i({currentPage:l.detail})})}
                        ></${_t}>
                    `}})}),e({title:"changing child size",styles:m`
                :host {
                    width: 600px;
                }
            `,stateInitStatic:{tableInputs:{...ji,rows:ji.rows.map(t=>({...t,cells:{...t.cells,date:u`
                                    <${Nc}></${Nc}>
                                `}}))}},renderCallback({state:t}){return u`
                    <${_t.assign(t.tableInputs)}></${_t}>
                `}})}}),A5=R({title:Qr.tagName,parent:re,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:Xr.Small}},{title:"large",inputs:{size:Xr.Large}},{title:"whole page",inputs:{size:Xr.WholePage},styles:m`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??m``,renderCallback(){return u`
                        <${Qr.assign(r.inputs)}></${Qr}>
                    `}})})}}),E5=R({title:ce.tagName,parent:re,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${ce.assign({text:"Long string instead of text"})}></${ce}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${ce.assign({text:"Short text"})}></${ce}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${ce.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${ce}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${ce.assign({text:"Long text that you can copy",copyOnClick:!0})}></${ce}>
                `}}),e({title:"Custom CSS vars",styles:m`
                ${ce} {
                    ${ce.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${ce.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${ce.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${ce.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${ce.assign({text:"long text with custom colors",copyOnClick:!0})}></${ce}>
                `}})}}),I5=R({title:Br.tagName,parent:re,elementExamplesCallback({defineExample:e}){[{title:"halfway",percent:50},{title:"nothing",percent:0},{title:"complete",percent:100},{title:"custom height",styles:m`
                ${Br} {
                    height: 32px;
                }
                :`,percent:75},{title:"custom width",styles:m`
                ${Br} {
                    width: 200%;
                }
                :`,percent:75}].forEach(r=>{e({title:r.title,styles:r.styles,renderCallback(){return u`
                        <${Br.assign({percent:r.percent})}></${Br}>
                    `}})})}}),Rr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Oe={basic:Rr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Rr.slice(1)],disabled:[{...Rr[0],disabled:!0},...Rr.slice(1)],noLabels:bh(Rr,e=>({...e,label:void 0}))},L5=R({title:Y.tagName,parent:re,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Oe.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${Y.assign({entries:Oe.basic,value:t.selectedValue})}
                        ${T(Y.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Y}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Oe.basic[0].value},styles:m`
                ${Y} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${Y.assign({entries:Oe.basic,value:t.selectedValue})}
                        ${T(Y.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Y}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Oe.longText[0].value},styles:m`
                ${Y} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${Y.assign({entries:Oe.longText,value:t.selectedValue})}
                        ${T(Y.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Y}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Oe.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${Y.assign({entries:Oe.noLabels,value:t.selectedValue})}
                        ${T(Y.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Y}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Oe.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${Y.assign({entries:Oe.disabled,value:t.selectedValue})}
                        ${T(Y.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Y}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Oe.basic[0].value},styles:m`
                ${Y} {
                    ${Y.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${Y.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${Y.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${Y.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${Y.assign({entries:Oe.basic,value:t.selectedValue})}
                        ${T(Y.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Y}>
                `}})}}),lt=m`
    ${F} {
        width: 300px;
    }
`,zi={min:10,max:50},q5=R({title:F.tagName,parent:re,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,...zi})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,...zi,suffix:"ICP"})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:m`
                ${lt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,min:-100,max:100})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:m`
                ${lt}

                ${F} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({value:t.value,...zi})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${F}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${lt}

                ${F} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(F.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${F}>
                `}})}}),P5=[{title:"default",inputs:{}},{title:"text only",inputs:{variant:th.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Oc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],N5=R({title:Fi.tagName,parent:re,controls:{Text:{controlType:O.Text,initValue:"Toggle Button"},Icon:ps(Id.name)},elementExamplesCallback({defineExample:e}){P5.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Oc.map(r=>!!r.inputs.toggled)},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Oc.map((i,a)=>u`
                            <${Fi.assign({...t.inputs,toggled:r.buttonStates[a],icon:Jo[o.Icon],text:o.Text,...rn(i.inputs,["toggled"])})}
                                ${T("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Fi}>
                        `)}})})}}),O5=R({parent:re,title:ao.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:m`
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
                `,renderCallback(){return u`
                        <${ao.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${ao}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:u`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),B5=R({parent:re,title:en.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${ao.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${en}>This is a tooltip.</${en}>
                `}})}}),D5=[O5,B5],R5=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:m`
            :host {
                width: 500px;
            }

            ${Zr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:m``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:m``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:da},{label:"label here",value:2,icon:da},{label:"",value:3,icon:Ct,disabled:!0},{label:"16px icon",value:4,icon:Ct},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],_5=R({title:Zr.tagName,parent:re,elementExamplesCallback({defineExample:e}){R5.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:m`
                    ${t.extraStyles??m``}
                `,renderCallback({state:r,updateState:n}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return u`
                        <${Zr.assign({tabs:o,value:r.selectedTab})}
                            ${T(Zr.events.valueChange,i=>{n({selectedTab:i.detail})})}
                        ></${Zr}>
                    `}})})}}),ah=R({title:"Icons",parent:void 0,controls:nh}),H5=Object.entries(yt).map(([e,t])=>R({title:e,parent:ah,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${Lo.assign({icon:n})}
                                    style=${so(o)}
                                ></${Lo}>
                            `}}))}}));function sh(e){const t=F5(e),r=ve(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return oe(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function F5(e){typeof e!="string"&&(e=String(e));const n=`{"${_c(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const Ko=R({title:"Styles",parent:void 0}),V5=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${B.labelFont};
        ${B.monospaceFont};
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
        ${B.h3Font};
    }
`;function j5(e,t,r){const n=sh(j(r));return e({title:t,styles:V5,renderCallback(){return u`
                <div class="color-example" style=${j(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const z5=R({title:"Colors",parent:Ko,elementExamplesCallback({defineExample:e}){oe(b).map(t=>j5(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Z5=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${B.labelFont};
        ${B.monospaceFont};
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
`;function W5(e,t,r){const n=sh(r);return e({title:t,styles:Z5,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${oe(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const U5=R({title:"Fonts",parent:Ko,elementExamplesCallback({defineExample:e}){oe(B).map(t=>{const r=B[t];return W5(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),G5=R({title:"Shadows",parent:Ko,elementExamplesCallback({defineExample:e}){gh(pn).forEach(([t,r])=>{e({title:t,styles:m`
                        div {
                            width: 50px;
                            height: 50px;
                            border-radius: 8px;
                            background-color: white;
                            margin: 16px;
                            ${r};
                        }
                    `,renderCallback(){return u`
                            <div></div>
                        `}})})}}),Y5=[re,ah,Ko,rh],J5=[...H5,...D5,e5,r5,n5,o5,l5,c5,z5,u5,h5,p5,m5,g5,U5,w5,v5,b5,y5,A5,E5,I5,L5,G5,q5,N5,_5,M5].sort((e,t)=>e.title.localeCompare(t.title)),K5=[...Y5,...J5];_o({tagName:"toniq-design-system-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${vi} {
            height: 100%;
            width: 100%;
            ${B.paragraphFont};
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
    `,renderCallback(){return u`
            <${vi.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:K5,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${ot.NavHeader}>
                    <img src=${oh("/logo.png")} />
                    <p>Design System</p>
                </div>
            </${vi}>
        `}});
