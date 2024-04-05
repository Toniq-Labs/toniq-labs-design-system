var bh=Object.defineProperty;var yh=(e,t,r)=>t in e?bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ln=(e,t,r)=>(yh(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const kh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ie(e,t){return e?kh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Oc(e,t){return e&&t.every(r=>Ie(e,r))}function le(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ah(e){return le(e).map(t=>e[t])}function xh(e){return le(e).map(t=>[t,e[t]])}function Ch(e){return Object.fromEntries(e)}function Sh(e,t){return e.includes(t)}function Mh(e,t){return e.map(t)}function we(e){return!!e}function Yc(e,t){return e.match(t)??[]}function Ih(e){return e.replace(/,/g,"")}function Hc(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Th={capitalizeFirstLetter:!1};function Eh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Bh(e,t){return t.capitalizeFirstLetter?Eh(e):e}function Dh(e,t=Th){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Bh(n,t)}var yr;(function(e){e.Upper="upper",e.Lower="lower"})(yr||(yr={}));function Nh(e){return e.toLowerCase()!==e.toUpperCase()}function Ms(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Nh(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===yr.Upper&&o!==o.toUpperCase())return!1;if(t===yr.Lower&&o!==o.toLowerCase())return!1}return!0}function ho(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ms(a,yr.Lower,{blockNoCaseCharacters:!0})||Ms(s,yr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function kr(e,t){return e.split(t)}const Lh=String(NaN);function zc(e){if(typeof e=="string"&&isNaN(Number(e)))return Lh;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=Yc(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(f=>f.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function Rh(e){return typeof e=="number"?e:Number(typeof e=="string"?Ih(e):e)}function qh(e){return String(e).includes("e")}function Ph({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Ki(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}function mr({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}var on;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(on||(on={}));function Fh(e,t){let r=0,n;return o=>{n=o;const i=Date.now();r>i||(e===on.FirstThenWait?n():e===on.AfterWait&&setTimeout(()=>{n==null||n()},t.milliseconds),r=i+t.milliseconds)}}function Qc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Rt(r).trim()).join(`
`))}function Zh(e){return e?e.map(Rt).filter(we).join(`
`):""}function Rt(e){return e?e instanceof Error?e.message:Ie(e,"message")?String(e.message):String(e):""}function Jc(e){return e instanceof Error?e:new Error(Rt(e))}function Vh(e,t){const r=Jc(e);return r.message=`${t}: ${r.message}`,r}class Gh extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function fo(e){return Array.isArray(e)?"array":typeof e}function _(e,t){return fo(e)===t}function jh(e,t){if(!(_(e,"string")||_(e,"number")||_(e,"symbol")))throw new Gh(t||`value is of type '${fo(e)}' but expected a PropertyKey.`)}function oi(e){try{return jh(e),!0}catch{return!1}}function Ye(e){return!!e&&typeof e=="object"}function Xc(e,t,r=!1,n={}){const o=le(e),i=new Set(le(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Ie(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(f){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${f}`)}const l=e[a],u=t[a];n[a]||Kc(l,u,s,r,n[a]??{})})}function Kc(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Ie(t,"constructor")&&(!Ie(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,u)=>{if(t.map(h=>{try{Kc(l,h,r,n,o);return}catch(m){return new Error(`entry at index "${u}" did not match expected shape: ${Rt(m)}`)}}).filter(we).length===t.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${t.join(", ")}"`)})):Ye(t)&&Xc(e,t,n,o)}function Is({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Ts="Failed to compare objects using JSON.stringify";function Es(e,t,r){return Is({source:e,errorHandler(n){if(r)return"";throw n}})===Is({source:t,errorHandler(n){if(r)return"";throw n}})}function it(e,t,r={}){try{return e===t?!0:Ye(e)&&Ye(t)?Es(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>it(e[o],t[o])):!1:Es(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Jc(n);throw o.message.startsWith(Ts)||(o.message=`${Ts}: ${o.message}`),o}}function $c(e){return le(e).filter(t=>isNaN(Number(t)))}function _c(e){return $c(e).map(r=>e[r])}function Uh(e,t){return _c(t).includes(e)}function eu(e,t){return le(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function an(e,t){return eu(e,r=>!t.includes(r))}function Wh(e,t){return eu(e,r=>t.includes(r))}function Oh(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ke(e,t){let r=!1;const n=le(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(le(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function $i(e,t){try{return tu(e,t),!0}catch{return!1}}function tu(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ra(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ra.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function _i(e){const t=Ra();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Yh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const ru=Yh();function Hh({min:e,max:t}){const{min:r,max:n}=Ph({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do ru.getRandomValues(s),l=s.reduce((u,f,h)=>u+f*256**h,0);while(l>=a);return r+l%o}function nu(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return ru.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function zh({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Qh(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(we);return t.length?`?${t.join("&")}`:""}function Jh(e){return zh({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=kr(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(we)}function Xh(e,t){const r=_(e,"string")?new URL(e):e,n=Jh(r.search),o=Object.fromEntries(n);return t&&Xc(o,t),o}const Kh="%",$h="px";function Ut(e){return qa({value:e,suffix:$h})}function ii(e){return qa({value:e,suffix:Kh})}function qa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const ai="://";function sn(...e){const t=e.join("/"),[r,n=""]=t.includes(ai)?t.split(ai):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,u,f)=>{if(i)return s;const h=f[u+1];let m=l;const g=!l.includes("?")&&(h==null?void 0:h.startsWith("?"));if(h!=null&&h.startsWith("?")||g){i=!0;let w=!1;const k=f.slice(g?u+2:u+1).reduce((A,S)=>(S.includes("#")&&(w=!0),w?A.concat(S):[A,S].join("&")),"");m=[l,h,k].join("")}return s.concat(m)},[]);return[r,r?ai:"",a.join("/")].join("")}const _h=["k","M","B","T","P","E","Z","Y"];function Pa({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function e1(e,t,r){const[n,o]=kr(e,"."),i=zc(n),a=Yc(i,/,/g).length,s=t[a-1],[l,u]=kr(i,","),f=[u,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Pa({beforeDot:l,afterDot:f,maxLength:r-1}),s].join("")}const Bs=3;function t1({input:e,maxLength:t}){const r=String(e),[n,o]=kr(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,u]=kr(n,"."),f=i.length+Bs;return f===t?[l,s].join(""):f>t?a==="-"?"0":String(1/0):[Pa({afterDot:u,beforeDot:l,maxLength:t-i.length+Bs}),s].join("")}function r1(e,t){const[r,n]=kr(zc(e),".");if(r.length<=t)return Pa({beforeDot:r,afterDot:n,maxLength:t})}function n1(e,{customSuffixes:t=_h,maxLength:r=6}={}){const n=Rh(e);if(isNaN(n)||n===1/0)return String(n);if(qh(n))return t1({input:n,maxLength:r});const o=String(n),i=r1(o,r);return i??e1(o,t,r)}function o1(e,t){return Ie(e,"entryType")&&e.entryType===t}var be;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(be||(be={}));function er(e,t){return e.controlType===t}var V;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(V||(V={}));const ou=Symbol("any-type"),i1={[V.Checkbox]:!1,[V.Color]:"",[V.Dropdown]:"",[V.Hidden]:ou,[V.Number]:0,[V.Text]:""};function a1(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=i1[o.controlType];i!==ou&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Fa(e,t){const r=po(e.title);return e.parent?[...Fa(e.parent,!1),po(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function po(e){return Hc(e).toLowerCase().replaceAll(/\s/g,"-")}function s1({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function U(e){const t={...e,entryType:be.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:be.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(we)};r.add(n.title),t.elementExamples[po(o.title)]=o}}),t}var at;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(at||(at={}));async function ea(e=1){const t=Ra();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function l1(e){return c1(e,1)}async function c1(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{tu(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=globalThis,Za=_n.ShadowRoot&&(_n.ShadyCSS===void 0||_n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Va=Symbol(),Ds=new WeakMap;let iu=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Va)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Za&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ds.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ds.set(r,t))}return t}toString(){return this.cssText}};const I=e=>new iu(typeof e=="string"?e:e+"",void 0,Va),eo=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new iu(r,e,Va)},u1=(e,t)=>{if(Za)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=_n.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Ns=Za?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return I(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:d1,defineProperty:h1,getOwnPropertyDescriptor:f1,getOwnPropertyNames:p1,getOwnPropertySymbols:m1,getPrototypeOf:g1}=Object,St=globalThis,Ls=St.trustedTypes,w1=Ls?Ls.emptyScript:"",si=St.reactiveElementPolyfillSupport,Jr=(e,t)=>e,mo={toAttribute(e,t){switch(t){case Boolean:e=e?w1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ga=(e,t)=>!d1(e,t),Rs={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:Ga};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),St.litPropertyMetadata??(St.litPropertyMetadata=new WeakMap);let lr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Rs){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&h1(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=f1(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Rs}static _$Ei(){if(this.hasOwnProperty(Jr("elementProperties")))return;const t=g1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Jr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jr("properties"))){const r=this.properties,n=[...p1(r),...m1(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ns(o))}else t!==void 0&&r.push(Ns(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:mo).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:mo;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Ga)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}};lr.elementStyles=[],lr.shadowRootOptions={mode:"open"},lr[Jr("elementProperties")]=new Map,lr[Jr("finalized")]=new Map,si==null||si({ReactiveElement:lr}),(St.reactiveElementVersions??(St.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=globalThis,go=Xr.trustedTypes,qs=go?go.createPolicy("lit-html",{createHTML:e=>e}):void 0,ja="$lit$",ft=`lit$${(Math.random()+"").slice(9)}$`,Ua="?"+ft,v1=`<${Ua}>`,Jt=document,ln=()=>Jt.createComment(""),cn=e=>e===null||typeof e!="object"&&typeof e!="function",au=Array.isArray,su=e=>au(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",li=`[ 	
\f\r]`,qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ps=/-->/g,Fs=/>/g,Ft=RegExp(`>|${li}(?:([^\\s"'>=/]+)(${li}*=${li}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zs=/'/g,Vs=/"/g,lu=/^(?:script|style|textarea|title)$/i,cu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),b1=cu(1),y1=cu(2),Re=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Gs=new WeakMap,Wt=Jt.createTreeWalker(Jt,129);function uu(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qs!==void 0?qs.createHTML(t):t}const du=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=qr;for(let s=0;s<r;s++){const l=e[s];let u,f,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,f=a.exec(l),f!==null);)m=a.lastIndex,a===qr?f[1]==="!--"?a=Ps:f[1]!==void 0?a=Fs:f[2]!==void 0?(lu.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Ft):f[3]!==void 0&&(a=Ft):a===Ft?f[0]===">"?(a=o??qr,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,u=f[1],a=f[3]===void 0?Ft:f[3]==='"'?Vs:Zs):a===Vs||a===Zs?a=Ft:a===Ps||a===Fs?a=qr:(a=Ft,o=void 0);const g=a===Ft&&e[s+1].startsWith("/>")?" ":"";i+=a===qr?l+v1:h>=0?(n.push(u),l.slice(0,h)+ja+l.slice(h)+ft+g):l+ft+(h===-2?s:g)}return[uu(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class un{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[u,f]=du(t,r);if(this.el=un.createElement(u,n),Wt.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Wt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(ja)){const m=f[a++],g=o.getAttribute(h).split(ft),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?fu:w[1]==="?"?pu:w[1]==="@"?mu:yn}),o.removeAttribute(h)}else h.startsWith(ft)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(lu.test(o.tagName)){const h=o.textContent.split(ft),m=h.length-1;if(m>0){o.textContent=go?go.emptyScript:"";for(let g=0;g<m;g++)o.append(h[g],ln()),Wt.nextNode(),l.push({type:2,index:++i});o.append(h[m],ln())}}}else if(o.nodeType===8)if(o.data===Ua)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(ft,h+1))!==-1;)l.push({type:7,index:i}),h+=ft.length-1}i++}}static createElement(t,r){const n=Jt.createElement("template");return n.innerHTML=t,n}}function Xt(e,t,r=e,n){var a,s;if(t===Re)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=cn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Xt(e,o._$AS(e,t.values),o,n)),t}class hu{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Jt).importNode(r,!0);Wt.currentNode=o;let i=Wt.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Ir(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new gu(i,this,t)),this._$AV.push(u),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Wt.nextNode(),a++)}return Wt.currentNode=Jt,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ir{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Xt(this,t,r),cn(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Re&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):su(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&cn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Jt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=un.createElement(uu(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new hu(o,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(t){let r=Gs.get(t.strings);return r===void 0&&Gs.set(t.strings,r=new un(t)),r}k(t){au(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Ir(this.S(ln()),this.S(ln()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class yn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Xt(this,t,r,0),a=!cn(t)||t!==this._$AH&&t!==Re,a&&(this._$AH=t);else{const s=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=Xt(this,s[n+l],r,l),u===Re&&(u=this._$AH[l]),a||(a=!cn(u)||u!==this._$AH[l]),u===$?t=$:t!==$&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!o&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fu extends yn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class pu extends yn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class mu extends yn{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Xt(this,t,r,0)??$)===Re)return;const n=this._$AH,o=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class gu{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Xt(this,t)}}const k1={P:ja,A:ft,C:Ua,M:1,L:du,R:hu,D:su,V:Xt,I:Ir,H:yn,N:pu,U:mu,B:fu,F:gu},ci=Xr.litHtmlPolyfillSupport;ci==null||ci(un,Ir),(Xr.litHtmlVersions??(Xr.litHtmlVersions=[])).push("3.1.2");const A1=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Ir(t.insertBefore(ln(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Kr=class extends lr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=A1(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Re}};var Wc;Kr._$litElement$=!0,Kr.finalized=!0,(Wc=globalThis.litElementHydrateSupport)==null||Wc.call(globalThis,{LitElement:Kr});const ui=globalThis.litElementPolyfillSupport;ui==null||ui({LitElement:Kr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:x1}=k1,js=()=>document.createComment(""),Pr=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(js(),o),s=n.insertBefore(js(),o);r=new x1(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let u;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(a!==o||l){let u=r._$AA;for(;u!==a;){const f=u.nextSibling;n.insertBefore(u,o),u=f}}}return r},Zt=(e,t,r=e)=>(e._$AI(t,r),e),C1={},S1=(e,t=C1)=>e._$AH=t,M1=e=>e._$AH,di=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qt=e=>(...t)=>({_$litDirective$:e,values:t});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I1={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:Ga},T1=(e=I1,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function E1(e){return(t,r)=>typeof r=="object"?T1(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=qt(class extends gt{constructor(e){var t;if(super(e),e.type!==kn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Re}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=e=>e??$;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ta extends gt{constructor(t){if(super(t),this.it=$,t.type!==kn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===Re)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ta.directiveName="unsafeHTML",ta.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ws extends ta{}Ws.directiveName="unsafeSVG",Ws.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B1(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},D1=qt(class extends gt{constructor(e){if(super(e),e.type!==kn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=M1(e),{values:i,keys:a}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let u,f,h=0,m=o.length-1,g=0,w=i.length-1;for(;h<=m&&g<=w;)if(o[h]===null)h++;else if(o[m]===null)m--;else if(s[h]===a[g])l[g]=Zt(o[h],i[g]),h++,g++;else if(s[m]===a[w])l[w]=Zt(o[m],i[w]),m--,w--;else if(s[h]===a[w])l[w]=Zt(o[h],i[w]),Pr(e,l[w+1],o[h]),h++,w--;else if(s[m]===a[g])l[g]=Zt(o[m],i[g]),Pr(e,o[h],o[m]),m--,g++;else if(u===void 0&&(u=Os(a,g,w),f=Os(s,h,m)),u.has(s[h]))if(u.has(s[m])){const k=f.get(a[g]),A=k!==void 0?o[k]:null;if(A===null){const S=Pr(e,o[h]);Zt(S,i[g]),l[g]=S}else l[g]=Zt(A,i[g]),Pr(e,o[h],A),o[k]=null;g++}else di(o[m]),m--;else di(o[h]),h++;for(;g<=w;){const k=Pr(e,l[w+1]);Zt(k,i[g]),l[g++]=k}for(;h<=m;){const k=o[h++];k!==null&&di(k)}return this.ut=a,S1(e,l),Re}}),N1=D1;class wu extends Kr{}function wt(e){if(Ye(e))return ke(e,(r,n)=>{if(!_(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ho(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?I(r):r.startsWith("-")?eo`-${I(r)}`:eo`--${I(r)}`;return{name:a,value:eo`var(${a}, ${I(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${wt.name}' function.`)}function wo({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function L1(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function to(e){return Ie(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Wa(e){return Ie(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function vu(e){return e.map(t=>to(t)?t.definition:t).filter(t=>Wa(t))}const bu=new WeakMap;function R1(e,t){var o;const r=vu(t);return(o=yu(bu,[e,...r]).value)==null?void 0:o.template}function q1(e,t,r){const n=vu(t);return Au(bu,[e,...n],r)}function yu(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ku(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?yu(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ku(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Au(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=ku(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Au(l,t,r,n+1)}const P1=new WeakMap;function xu(e,t,r){const n=R1(e,t),o=n??r();if(!n){const s=q1(e,t,o);if(s.result)P1.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=L1(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Cu(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((u,f)=>{const h=o.length-1,m=o[h],g=f-1,w=t[g];n&&n(u);let k,A=[];if(typeof m=="string"&&(k=r(m,u,w),k)){o[h]=m+k.replacement,a.push(g);const M=k.getExtraValues;A=M?M(w):[],A.length&&M?(o[h]+=" ",A.forEach((F,W)=>{W&&o.push(" ")}),s.push(F=>{const W=F[g],ee=M(W);return{index:g,values:ee}}),o.push(u)):o[h]+=u}k||o.push(u);const S=e.raw[f];k?(i[h]=i[h]+k.replacement+S,A.length&&A.forEach(()=>{i.push("")})):i.push(S)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(u){const f=s.map(h=>h(u)).flat();return{valueIndexDeletions:a,valueInsertions:f}}}}function F1(...[e,t,r]){if(Wa(r))return{replacement:r.tagName,getExtraValues:void 0}}function Z1(e,t){return Cu(e,t,F1)}function p(e,...t){const r=xu(e,t,()=>Z1(e,t));return eo(r.strings,...r.values)}const V1={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Su(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof wu?!0:Su(r)}function Mu(e,t){const r=e.instanceState;le(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&le(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),G1(e)}function G1(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Ys(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class j1 extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Oa(){return e=>{var t;return t=class extends j1{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function re(){return Oa()}function U1(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Oa()([e,n].join("-"));return r[n]=o,r},{}):{}}const W1="_elementVirStateSetup";function O1(e){return Ye(e)?W1 in e:!1}function Y1(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return fo(e)===fo(t)&&r}const Iu="__vir__shape__definition__key__do__not__use__in__actual__objects";function Tu(e){return Ie(e,Iu)}const Ya=Symbol("and"),Eu=Symbol("instance"),Bu=Symbol("enum"),Du=Symbol("exact"),Ha=Symbol("indexed-keys"),za=Symbol("or"),Qa=Symbol("unknown"),H1=[Ya,Bu,Du,Ha,Eu,za,Qa],Nu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function z1(...e){return jo(e,Ya)}function Q1(...e){return jo(e,Ha)}function rt(...e){return jo(e,za)}function J1(e){return jo([e],Qa)}function qo(e){return $t(e,Ya)}function Po(e){return $t(e,Eu)}function Fo(e){return $t(e,Bu)}function Zo(e){return $t(e,Du)}function Vo(e){return $t(e,Ha)}function An(e){return $t(e,za)}function Go(e){return $t(e,Qa)}function $t(e,t){const r=xn(e);return!!r&&r.specifierType===t}function jo(e,t){return{[Nu]:!0,specifierType:t,parts:e}}function Ot(e,t,r,n){const o=xn(t);if(o){if(Po(o))return e instanceof o.parts[0];if(qo(o))return o.parts.every(i=>Ot(e,i));if(An(o))return o.parts.some(i=>Ot(e,i));if(Zo(o))return Ye(e)?Ot(e,o.parts[0]):e===o.parts[0];if(Fo(o))return Object.values(o.parts[0]).some(i=>i===e);if(Vo(o))return Ye(e)?X1(e,o,!!r)&&Ah(e).every(i=>Ot(i,o.parts[0].values)):!1;if(Go(o))return!0}return n?t===e:Y1(e,t)}function X1(e,t,r){const n=t.parts[0].required,o=t.parts[0].keys;if(r)if(n){const i=Ja(t);return _(i,"boolean")?i:i.every(a=>le(e).some(s=>Ot(s,a,!1,!0)))}else return!0;else return le(e).every(i=>Ot(i,o))}function Ja(e){const t=e.parts[0].keys,r=xn(t);if(oi(t))return[t];if(r){if(Po(r))return!1;if(qo(r))return!1;if(An(r)){const n=r.parts.map(i=>Ja(Q1({...e.parts[0],keys:i})));let o;return n.forEach(i=>{_(i,"boolean")&&(i&&o==null?o=!0:o=!1)}),_(o,"boolean")?o:n.flat().filter(oi)}else if(Zo(r)){const n=r.parts.filter(oi);return n.length!==r.parts.length?!1:n}else{if(Fo(r))return Object.values(r.parts[0]);if(Vo(r))return!1;if(Go(r))return!0}}return!1}function xn(e){if(Ye(e)&&Ie(e,Nu)){if(!Ie(e,"parts")||!_(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Ie(e,"specifierType")||!Sh(H1,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Hs extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function ra(e,t=!1){return Ur(e)}function Ur(e){const t=xn(e);if(t)if(Po(t)){const r=t.parts[0];try{return new r}catch(n){throw new Hs(`Failed to create default value for classShape for class '${r.name}': ${Rt(n)}`)}}else{if(An(t)||Zo(t))return Ur(t.parts[0]);if(qo(t))return t.parts.reduce((r,n)=>Object.assign(r,Ur(n)),{});if(Fo(t))return Object.values(t.parts[0])[0];if(Vo(t)){const r=Ja(t);return!t.parts[0].required||_(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,Ur(t.parts[0].values)]))}else{if(Go(t))return t.parts[0]??{};throw new Hs(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Tu(e)?ra(e.shape):e instanceof RegExp?e:_(e,"array")?e.map(Ur):Ye(e)?ke(e,(r,n)=>ra(n)):e}function Cn(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return ra(e)},[Iu]:!0}}class Ze extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function K1(e,t,r={}){try{return Lu(e,t,r),!0}catch{return!1}}function Lu(e,t,r={}){dt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function na(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function dt({subject:e,shape:t,keys:r,options:n}){if(Go(t))return!0;if(Tu(t))return dt({subject:e,shape:t.shape,keys:r,options:n});const o=na(r);if(xn(e))throw new Ze(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ot(e,t,!n.ignoreExtraKeys))throw new Ze(`Subject does not match shape definition at key ${o}`);if(_(t,"function"))return _(e,"function");if(Po(t))return e instanceof t.parts[0];if(Ye(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(f=>[f,!1])),l=[];let u=!1;if(An(t)){const f=[];u=t.parts.some(h=>{try{const m=dt({subject:e,shape:h,keys:r,options:{...n}});return Object.assign(s,m),!0}catch(m){if(m instanceof Ze)return f.push(m),!1;throw m}}),!u&&$i(f,1)&&l.push(f[0])}else if(qo(t))u=t.parts.every(f=>{try{const h=dt({subject:e,shape:f,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(s,h),!0}catch(h){if(h instanceof Ze)return l.push(h),!1;throw h}});else if(Zo(t)){const f=dt({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(s,f),u=!0}else{if(Fo(t))throw new Ze(`Cannot compare an enum specifier to an object at ${o}`);if(_(t,"array")&&_(a,"array"))u=a.every((f,h)=>{const m=t.some(g=>{try{return dt({subject:f,shape:g,keys:[...r,h],options:n}),!0}catch(w){if(w instanceof Ze)return l.push(w),!1;throw w}});return s[h]=m,m});else if(Vo(t)){const f=ke(e,(h,m)=>(n.ignoreExtraKeys||dt({shape:t.parts[0].keys,subject:h,keys:[...r,h],options:n}),dt({shape:t.parts[0].values,subject:m,keys:[...r,h],options:n}),!0));Object.assign(s,f),u=!0}else{const f=$1({keys:r,options:n,shape:t,subject:e});Object.assign(s,f),u=!0}}if(l.length)throw new Ze(Zh(l));if(!u){const h=`Failed on key(s): ${Object.keys(s).filter(m=>!s[m]).map(m=>na([...r,m])).join(",")}`;throw new Ze(h)}return n.ignoreExtraKeys||Object.entries(s).forEach(([f,h])=>{if(!h)throw new Ze(`subject as extra key '${f}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function $1({keys:e,options:t,shape:r,subject:n}){const o=na(e),i={};if(Ye(r)){const a=new Set(le(n)),s=new Set(le(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Ze(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const u=r[l],f=An(u)?u.parts.includes(void 0):!1,h=((m=u==null?void 0:u.includes)==null?void 0:m.call(u,void 0))||u===void 0;if(!a.has(l)&&!f&&!h)throw new Ze(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const u=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const f=r[l];dt({subject:u,shape:f,keys:[...e,l],options:t}),i[l]=!0})}else throw new Ze(`shape definition at ${o} was not an object.`);return i}const _1=Cn({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:J1()});function hi(e){return K1(e,_1,{allowExtraKeys:!0})}function Ru(e,t){t in e||E1()(e,t)}function ef(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function zs(e,t){const r=e;function n(a){t?ef(a,e,e.tagName):Ru(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const u=O1(l)?l._elementVirStateSetup():l;n(s);const f=r[s];function h(w){a[s]=w,r[s]=w}const m=e.observablePropertyListenerMap[s];if(f!==u&&hi(f)&&(m!=null&&m.length)&&f.removeListener(m),hi(u))if(m)u.addListener(m);else{let w=function(){e.requestUpdate()};var g=w;e.observablePropertyListenerMap[s]=w,u.addListener(w)}else hi(f)&&(e.observablePropertyListenerMap[s]=void 0);return h(u),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function tf(e){return e?ke(e,t=>t):{}}function rf({hostClassNames:e,cssVars:t}){return{hostClasses:ke(e,(r,n)=>({name:I(n),selector:I(`:host(.${n})`)})),cssVars:t}}function nf({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&le(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function of({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function o(a){le(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function af(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var sf=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Uo(e){var t;const r=e;if(!_(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!_(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...V1,...r.options},o=U1(r.tagName,r.events),i=tf(r.hostClasses);r.hostClasses&&Ys(r.tagName,r.hostClasses),r.cssVars&&Ys(r.tagName,r.cssVars);const a=r.cssVars?wt(r.cssVars):{},s=af(r.slotNames),l=typeof r.styles=="function"?r.styles(rf({hostClassNames:i,cssVars:a})):r.styles||p``,u=r.renderCallback;function f(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:h,inputs:m}}const h=(t=class extends wu{createRenderParams(){return of({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Su(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Uo.name}' to define ${r.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=u(m);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return nf({host:m.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},g}catch(m){const g=Vh(m,`Failed to render ${r.tagName}`);return console.error(g),this._lastRenderError=g,Rt(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(r.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const m=this.createRenderParams();if(r.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){Mu(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:zs(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:zs(this,!n.allowPolymorphicState)});const m=r.stateInitStatic||{};le(m).forEach(g=>{Ru(this,g),this.instanceState[g]=m[g]}),this.definition=h}},sf(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(h,{name:{value:Dh(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof h,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,h),h}function qu(){return e=>{const t=e;if(!_(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Uo({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Xa(e,t){return dn(e,t),e.element}function lf(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function dn(e,t){const r=lf(e),n=r?`: in ${r}`:"";if(e.type!==kn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function cf(e){const t=qt(class extends gt{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Xa(r,e)}render(r){return this.element.setAttribute(e,r),Re}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function y(e,t){return uf(e,t)}const uf=qt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Xa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Re}}),Qs="onDomCreated",oa=qt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),dn(e,Qs)}update(e,[t]){dn(e,Qs);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),fi="onResize",Ar=qt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),dn(e,fi)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${fi} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){dn(e,fi),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function ye(e,t,r){return B1(e,()=>t,()=>r)}const{attributeDirective:df,attributeSelector:Tv,attributeName:Ev}=cf("data-test-id");function hf(e){return{_elementVirStateSetup:e}}function Ka(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),qu()(r(n))),defineElementNoInputs:n=>(t(n),Uo(r(n)))}}function ff(e,t){return t?Js(e,t):Js(void 0,e)}const Js=qt(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Xa(e,"assign")}render(e,t){return Mu(this.element,t),Re}});function pf(...[e,t,r]){const n=to(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Wa(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!n.elementOptions.ignoreUnsetInputs&&!to(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const f=to(u)?u.inputs:void 0;return[o&&f?ff(f):void 0].filter(we)}}}function mf(e){}function gf(e){return Cu(e.strings,e.values,pf,mf)}function c(e,...t){const r=b1(e,...t),n=xu(e,t,()=>gf(r));return{...r,strings:n.strings,values:n.values}}const wf={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},vf=Object.keys(wf),bf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...vf,...bf];function Wr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const yf={[be.ElementExample]:()=>[],[be.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...a1(e.controls,e.title)].filter(we),[be.Root]:()=>[]},vo="_isBookTreeNode",Pu=new Map;function kf(e){return Pu.get(e)}function Af(e,t){Oh(Pu,e,()=>t)}function gr(e,t){return!!(Fu(e)&&e.entry.entryType===t)}function Fu(e){return!!(Oc(e,[vo,"entry"])&&e[vo])}function xf(){return{[vo]:!0,entry:{entryType:be.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Cf({entries:e,debug:t}){const r=kf(e);if(r)return r;const n=xf();e.forEach(a=>$a({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Zu(n),i={tree:n,flattenedNodes:o};return Af(e,i),t&&console.info("element-book tree:",n),i}function Sf(e,t,r){if(!t.parent)return e;const n=ia(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),$a({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=ia(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Fa(t,!1)}`);return o}function $a({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=yf[t.entryType](t);t.errors.push(...o);const i=Sf(e,t,r),a=po(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[vo]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,o1(t,be.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(u=>$a({tree:e,newEntry:u,debug:r,manuallyAdded:n}))}function ia(e,t){const r=Fu(e)?e.fullUrlBreadcrumbs.slice(0,-1):Fa(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Zu(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Zu(o));return[e,...r].flat()}function _a(e,t){return es(e,["",...t],void 0)}function es(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&es(i,n,r);return{...e.controls,...a}}function Mf(e,t,r){const n={...e};return es(n,["",...t],r),n}function Vu(e,t){const r=(t==null?void 0:t.controls)||(gr(e,be.Page)?ke(e.entry.controls,(o,i)=>i.initValue):{});return{children:ke(e.children,(o,i)=>{var a;return Vu(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function If({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Tf=nu(32);function ro(e){return e.join(Tf)}function Gu(e){if(!e.length)return[];const t=ro(e),r=Gu(e.slice(0,-1));return[t,...r]}const Ef=["error","errors"];function Bf(e){return Ef.includes(e)}function Df({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),ro(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Bf(t),a=ro(o.fullUrlBreadcrumbs);if(If({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=Gu(o.fullUrlBreadcrumbs);n(o),l.forEach(u=>r[u]=!0)}else r[a]=!1}),e.filter(o=>{const i=ro(o.fullUrlBreadcrumbs),a=r[i];if(!_(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var Me;(function(e){e.Search="search",e.Book="book"})(Me||(Me={}));function aa(e){return e[0]===Me.Book?"":e[1]?decodeURIComponent(e[1]):""}const xr={hash:void 0,paths:[Me.Book],search:void 0},Nf=0;function Wo(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Nf)}class Oo extends Error{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class Xs extends Oo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const hn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Lf=globalThis.history.pushState;function Ks(...e){const t=Lf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(hn)),t}const Rf=globalThis.history.replaceState;function $s(...e){const t=Rf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(hn)),t}function qf(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Ks)throw new Xs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===$s)throw new Xs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Ks,globalThis.history.replaceState=$s,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(hn))})}}function Pf(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?Xh(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function ju(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Uu({routeBase:e,windowPath:t}){if(!e)return"";const r=ju(e);if(Wu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Uu({routeBase:n,windowPath:t}):""}function Wu({routeBase:e,windowPath:t}){const r=ju(e);return r?t.startsWith(`/${r}`):!1}class Ff extends Oo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function Ou(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const _s=6;function el(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>_s)throw new Ff(`Route sanitization depth has exceed the max of ${_s} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ou(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class pi extends Oo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function Zf(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new pi(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new pi(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new pi(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Vf(e,t,r=!1){const n=Yu(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Yu(e,t){var s;const r=Wu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Qh(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(we).join("/")}${n}${i}`}function Gf(e={}){Zf(e),qf();const t=e.routeBase?Uu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>el(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),u={...l,...i},f=o.sanitizeFullRoute(u);if(!(!s&&Ou(l,f)))return Vf(f,t,a)},createRoutesUrl(i){return Yu(i,t)},getCurrentRawRoutes(){return Pf(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Oo(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(hn,n),r=!0),i&&el(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(hn,n),r=!1),a},sanitizationDepth:0};return o}function jf(e){return Gf({routeBase:e,routeSanitizer(t){return{paths:Uf(t.paths),hash:void 0,search:void 0}}})}function Uf(e){const t=e[0];if(Uh(t,Me)){if(t===Me.Book)return[Me.Book,...e.slice(1)];if(t===Me.Search)return e[1]?[t,e[1]]:[Me.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return xr.paths}const Y=wt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Wf={nav:{hover:{background:Y["element-book-nav-hover-background-color"],foreground:Y["element-book-nav-hover-foreground-color"]},active:{background:Y["element-book-nav-active-background-color"],foreground:Y["element-book-nav-active-foreground-color"]},selected:{background:Y["element-book-nav-selected-background-color"],foreground:Y["element-book-nav-selected-foreground-color"]}},accent:{icon:Y["element-book-accent-icon-color"]},page:{background:Y["element-book-page-background-color"],backgroundFaint1:Y["element-book-page-background-faint-level-1-color"],backgroundFaint2:Y["element-book-page-background-faint-level-2-color"],foreground:Y["element-book-page-foreground-color"],foregroundFaint1:Y["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Y["element-book-page-foreground-faint-level-2-color"]}};function Of(e,t){Hu(e,t,Wf)}function sa(e){return Ie(e,"_$cssResult$")}function tl(e){return Oc(e,["name","value","default"])&&_(e.default,"string")&&sa(e.name)&&sa(e.value)}function Hu(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(sa(o)){if(!tl(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);wo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(tl(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Hu(e,o,i)}})}function me(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let u of s)l+=a*u;return l}for(let u=0;u<a.length;u++)l+=a[u]*(s[u]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Sn(e){return Mt(e)==="string"}function Mt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function bo(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function zu(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Qu(e){return e[e.length-1]}function yo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ju(e,t,r){return(r-e)/(t-e)}function ts(e,t,r){return yo(t[0],t[1],Ju(e[0],e[1],r))}function Xu(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Yf=Object.freeze({__proto__:null,interpolate:yo,interpolateInv:Ju,isString:Sn,last:Qu,mapRange:ts,multiplyMatrices:me,parseCoordGrammar:Xu,parseFunction:zu,toPrecision:bo,type:Mt});class Hf{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Et=new Hf;var st={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const _e={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function la(e){return Array.isArray(e)?e:_e[e]}function ko(e,t,r,n={}){if(e=la(e),t=la(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Et.run("chromatic-adaptation-start",o),o.M||(o.W1===_e.D65&&o.W2===_e.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===_e.D50&&o.W2===_e.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Et.run("chromatic-adaptation-end",o),o.M)return me(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const zf=75e-6,De=class De{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?De.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=la(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Qf(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Et.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=zf}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=rl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=rl(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=De.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=De.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(De.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof De)return t;if(Mt(t)==="string"){let o=De.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return De.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Mt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=De.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Mt(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(o.coords)[i];if(u)return{space:o,id:u[0],index:i,...u[1]}}o=De.get(o);let a=i.toLowerCase(),s=0;for(let u in o.coords){let f=o.coords[u];if(u.toLowerCase()===a||((l=f.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:u,index:s,...f};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Ln(De,"registry",{}),Ln(De,"DEFAULT_FORMAT",{type:"functions",name:"color"});let T=De;function Qf(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function rl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Xu(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,u="";return a=="<percentage>"?(l=[0,100],u="%"):a=="<angle>"&&(u="deg"),{fromRange:s,toRange:l,suffix:u}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:u}=r[a];return s&&l&&(i=ts(s,l,i)),i=bo(i,o),u&&(i+=u),i})}return e}var We=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Te extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=We),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=me(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ko(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=ko(this.base.white,this.white,r),me(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ku(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Et.run("parse-start",r),r.color)return r.color;if(r.parsed=zu(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let u=r.parsed.args.shift(),f=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of T.all){let g=m.getFormat("color");if(g&&(u===g.id||(o=g.ids)!=null&&o.includes(u))){const w=Object.keys(m.coords).map((k,A)=>r.parsed.args[A]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:w,alpha:f}}}let h="";if(u in T.registry){let m=(s=(a=(i=T.registry[u].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(h=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${u}). `+(h||"Missing a plugin?"))}else for(let u of T.all){let f=u.getFormat(l);if(f&&f.type==="function"){let h=1;(f.lastAlpha||Qu(r.parsed.args).alpha)&&(h=r.parsed.args.pop());let m=r.parsed.args,g;return f.coordGrammar&&(g=Object.entries(u.coords).map(([w,k],A)=>{var ie;let S=f.coordGrammar[A],M=(ie=m[A])==null?void 0:ie.type,F=S.find(ce=>ce==M);if(!F){let ce=k.name||w;throw new TypeError(`${M} not allowed for ${ce} in ${l}()`)}let W=F.range;M==="<percentage>"&&(W||(W=[0,1]));let ee=k.range||k.refRange;return W&&ee&&(m[A]=ts(W,ee,m[A])),F})),t&&Object.assign(t,{formatId:f.name,types:g}),{spaceId:u.id,coords:m,alpha:h}}}}else for(let l of T.all)for(let u in l.formats){let f=l.formats[u];if(f.type!=="custom"||f.test&&!f.test(r.str))continue;let h=f.parse(r.str);if(h)return h.alpha??(h.alpha=1),t&&(t.formatId=u),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Q(e){if(!e)throw new TypeError("Empty color reference");Sn(e)&&(e=Ku(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Mn(e,t){return t=T.get(t),t.from(e)}function Oe(e,t){let{space:r,index:n}=T.resolveCoord(t,e.space);return Mn(e,r)[n]}function $u(e,t,r){return t=T.get(t),e.coords=t.to(e.space,r),e}function Bt(e,t,r){if(e=Q(e),arguments.length===2&&Mt(arguments[1])==="object"){let n=arguments[1];for(let o in n)Bt(e,o,n[o])}else{typeof r=="function"&&(r=r(Oe(e,t)));let{space:n,index:o}=T.resolveCoord(t,e.space),i=Mn(e,n);i[o]=r,$u(e,n,i)}return e}var rs=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:We,fromBase:e=>ko(We.white,"D50",e),toBase:e=>ko("D50",We.white,e),formats:{color:{}}});const Jf=216/24389,nl=24/116,Rn=24389/27;let mi=_e.D50;var Ne=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:mi,base:rs,fromBase(e){let r=e.map((n,o)=>n/mi[o]).map(n=>n>Jf?Math.cbrt(n):(Rn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>nl?Math.pow(t[0],3):(116*t[0]-16)/Rn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Rn,t[2]>nl?Math.pow(t[2],3):(116*t[2]-16)/Rn].map((n,o)=>n*mi[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Yo(e){return(e%360+360)%360}function Xf(e,t){if(e==="raw")return t;let[r,n]=t.map(Yo),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var fn=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ne,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Yo(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ol=25**7,Ao=Math.PI,il=180/Ao,tr=Ao/180;function ca(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Ne.from(e),l=fn.from(Ne,[i,a,s])[1],[u,f,h]=Ne.from(t),m=fn.from(Ne,[u,f,h])[1];l<0&&(l=0),m<0&&(m=0);let w=((l+m)/2)**7,k=.5*(1-Math.sqrt(w/(w+ol))),A=(1+k)*a,S=(1+k)*f,M=Math.sqrt(A**2+s**2),F=Math.sqrt(S**2+h**2),W=A===0&&s===0?0:Math.atan2(s,A),ee=S===0&&h===0?0:Math.atan2(h,S);W<0&&(W+=2*Ao),ee<0&&(ee+=2*Ao),W*=il,ee*=il;let ie=u-i,ce=F-M,G=ee-W,ae=W+ee,Ce=Math.abs(G),ve;M*F===0?ve=0:Ce<=180?ve=G:G>180?ve=G-360:G<-180?ve=G+360:console.log("the unthinkable has happened");let lt=2*Math.sqrt(F*M)*Math.sin(ve*tr/2),Lr=(i+u)/2,ni=(M+F)/2,As=Math.pow(ni,7),ct;M*F===0?ct=ae:Ce<=180?ct=ae/2:ae<360?ct=(ae+360)/2:ct=(ae-360)/2;let xs=(Lr-50)**2,mh=1+.015*xs/Math.sqrt(20+xs),Cs=1+.045*ni,Rr=1;Rr-=.17*Math.cos((ct-30)*tr),Rr+=.24*Math.cos(2*ct*tr),Rr+=.32*Math.cos((3*ct+6)*tr),Rr-=.2*Math.cos((4*ct-63)*tr);let Ss=1+.015*ni*Rr,gh=30*Math.exp(-1*((ct-275)/25)**2),wh=2*Math.sqrt(As/(As+ol)),vh=-1*Math.sin(2*gh*tr)*wh,Nn=(ie/(r*mh))**2;return Nn+=(ce/(n*Cs))**2,Nn+=(lt/(o*Ss))**2,Nn+=vh*(ce/(n*Cs))*(lt/(o*Ss)),Math.sqrt(Nn)}const Kf=75e-6;function $r(e,t=e.space,{epsilon:r=Kf}={}){e=Q(e),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function pn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Dt(e,{method:t=st.gamut_mapping,space:r=e.space}={}){if(Sn(arguments[1])&&(r=arguments[1]),r=T.get(r),$r(e,r,{epsilon:0}))return Q(e);let n=Ge(e,r);if(t!=="clip"&&!$r(e,r)){let o=Dt(pn(n),{method:"clip",space:r});if(ca(e,o)>2){let i=T.resolveCoord(t),a=i.space,s=i.id,l=Ge(n,a),f=(i.range||i.refRange)[0],h=.01,m=f,g=Oe(l,s);for(;g-m>h;){let w=pn(l);w=Dt(w,{space:r,method:"clip"}),ca(l,w)-2<h?m=Oe(l,s):g=Oe(l,s),Bt(l,s,(m+g)/2)}n=Ge(l,r)}else n=o}if(t==="clip"||!$r(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Ge(n,e.space)),e.coords=n.coords,e}Dt.returns="color";function Ge(e,t,{inGamut:r}={}){e=Q(e),t=T.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Dt(o)),o}Ge.returns="color";function xo(e,{precision:t=st.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=Q(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(u=>u||0),n&&!$r(e)&&(s=Dt(pn(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>bo(g,t)));let f=[...s];if(u==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;f.unshift(g)}let h=e.alpha;t!==null&&(h=bo(h,t));let m=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${h}`:"";i=`${u}(${f.join(r.commas?", ":" ")}${m})`}return i}const $f=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],_f=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ho=new Te({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:$f,fromXYZ_M:_f,formats:{color:{}}});const qn=1.09929682680944,al=.018053968510807;var _u=new Te({id:"rec2020",name:"REC.2020",base:Ho,toBase(e){return e.map(function(t){return t<al*4.5?t/4.5:Math.pow((t+qn-1)/qn,1/.45)})},fromBase(e){return e.map(function(t){return t>=al?qn*Math.pow(t,.45)-(qn-1):4.5*t})},formats:{color:{}}});const ep=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],tp=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ed=new Te({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:ep,fromXYZ_M:tp});const rp=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],np=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var td=new Te({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:rp,fromXYZ_M:np,formats:{color:{}}}),sl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ll=Array(3).fill("<percentage> | <number>[0, 255]"),cl=Array(3).fill("<number>[0, 255]");var mn=new Te({id:"srgb",name:"sRGB",base:td,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ll},rgb_number:{name:"rgb",commas:!0,coords:cl,noAlpha:!0},color:{},rgba:{coords:ll,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:cl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=sl.black,t.alpha=0):t.coords=sl[e],t.coords)return t}}}}),rd=new Te({id:"p3",name:"P3",base:ed,fromBase:mn.fromBase,toBase:mn.toBase,formats:{color:{id:"display-p3"}}});st.display_space=mn;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ne,_u,rd]){let t=e.getMinCoords(),n=xo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){st.display_space=e;break}}function op(e,{space:t=st.display_space,...r}={}){let n=xo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!st.display_space)n=new String(n),n.color=e;else{let o=Ge(e,t);n=new String(xo(o,r)),n.color=o}return n}function nd(e,t,r="lab"){r=T.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function ip(e,t){return e=Q(e),t=Q(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Nt(e){return Oe(e,[We,"y"])}function od(e,t){Bt(e,[We,"y"],t)}function ap(e){Object.defineProperty(e.prototype,"luminance",{get(){return Nt(this)},set(t){od(this,t)}})}var sp=Object.freeze({__proto__:null,getLuminance:Nt,register:ap,setLuminance:od});function lp(e,t){e=Q(e),t=Q(t);let r=Math.max(Nt(e),0),n=Math.max(Nt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const cp=.56,up=.57,dp=.62,hp=.65,ul=.022,fp=1.414,pp=.1,mp=5e-4,gp=1.14,dl=.027,wp=1.14;function hl(e){return e>=ul?e:e+(ul-e)**fp}function rr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function vp(e,t){t=Q(t),e=Q(e);let r,n,o,i,a,s;t=Ge(t,"srgb"),[i,a,s]=t.coords;let l=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175;e=Ge(e,"srgb"),[i,a,s]=e.coords;let u=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175,f=hl(l),h=hl(u),m=h>f;return Math.abs(h-f)<mp?n=0:m?(r=h**cp-f**up,n=r*gp):(r=h**hp-f**dp,n=r*wp),Math.abs(n)<pp?o=0:n>0?o=n-dl:o=n+dl,o*100}function bp(e,t){e=Q(e),t=Q(t);let r=Math.max(Nt(e),0),n=Math.max(Nt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const yp=5e4;function kp(e,t){e=Q(e),t=Q(t);let r=Math.max(Nt(e),0),n=Math.max(Nt(t),0);return n>r&&([r,n]=[n,r]),n===0?yp:(r-n)/n}function Ap(e,t){e=Q(e),t=Q(t);let r=Oe(e,[Ne,"l"]),n=Oe(t,[Ne,"l"]);return Math.abs(r-n)}const xp=216/24389,fl=24/116,Pn=24389/27;let gi=_e.D65;var ua=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gi,base:We,fromBase(e){let r=e.map((n,o)=>n/gi[o]).map(n=>n>xp?Math.cbrt(n):(Pn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fl?Math.pow(t[0],3):(116*t[0]-16)/Pn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Pn,t[2]>fl?Math.pow(t[2],3):(116*t[2]-16)/Pn].map((n,o)=>n*gi[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const wi=Math.pow(5,.5)*.5+.5;function Cp(e,t){e=Q(e),t=Q(t);let r=Oe(e,[ua,"l"]),n=Oe(t,[ua,"l"]),o=Math.abs(Math.pow(r,wi)-Math.pow(n,wi)),i=Math.pow(o,1/wi)*Math.SQRT2-40;return i<7.5?0:i}var no=Object.freeze({__proto__:null,contrastAPCA:vp,contrastDeltaPhi:Cp,contrastLstar:Ap,contrastMichelson:bp,contrastWCAG21:lp,contrastWeber:kp});function Sp(e,t,r={}){Sn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(no).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=Q(e),t=Q(t);for(let i in no)if("contrast"+n.toLowerCase()===i.toLowerCase())return no[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function id(e){let[t,r,n]=Mn(e,We),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ad(e){let[t,r,n]=Mn(e,We),o=t+r+n;return[t/o,r/o]}function Mp(e){Object.defineProperty(e.prototype,"uv",{get(){return id(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ad(this)}})}var Ip=Object.freeze({__proto__:null,register:Mp,uv:id,xy:ad});function Tp(e,t){return nd(e,t,"lab")}const Ep=Math.PI,pl=Ep/180;function Bp(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Ne.from(e),[,s,l]=fn.from(Ne,[o,i,a]),[u,f,h]=Ne.from(t),m=fn.from(Ne,[u,f,h])[1];s<0&&(s=0),m<0&&(m=0);let g=o-u,w=s-m,k=i-f,A=a-h,S=k**2+A**2-w**2,M=.511;o>=16&&(M=.040975*o/(1+.01765*o));let F=.0638*s/(1+.0131*s)+.638,W;Number.isNaN(l)&&(l=0),l>=164&&l<=345?W=.56+Math.abs(.2*Math.cos((l+168)*pl)):W=.36+Math.abs(.4*Math.cos((l+35)*pl));let ee=Math.pow(s,4),ie=Math.sqrt(ee/(ee+1900)),ce=F*(ie*W+1-ie),G=(g/(r*M))**2;return G+=(w/(n*F))**2,G+=S/ce**2,Math.sqrt(G)}const ml=203;var ns=new T({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:We,fromBase(e){return e.map(t=>Math.max(t*ml,0))},toBase(e){return e.map(t=>Math.max(t/ml,0))}});const Fn=1.15,Zn=.66,gl=2610/2**14,Dp=2**14/2610,wl=3424/2**12,vl=2413/2**7,bl=2392/2**7,Np=1.7*2523/2**5,yl=2**5/(1.7*2523),Vn=-.56,vi=16295499532821565e-27,Lp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Rp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],qp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Pp=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var sd=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ns,fromBase(e){let[t,r,n]=e,o=Fn*t-(Fn-1)*n,i=Zn*r-(Zn-1)*t,s=me(Lp,[o,i,n]).map(function(m){let g=wl+vl*(m/1e4)**gl,w=1+bl*(m/1e4)**gl;return(g/w)**Np}),[l,u,f]=me(qp,s);return[(1+Vn)*l/(1+Vn*l)-vi,u,f]},toBase(e){let[t,r,n]=e,o=(t+vi)/(1+Vn-Vn*(t+vi)),a=me(Pp,[o,r,n]).map(function(m){let g=wl-m**yl,w=bl*m**yl-vl;return 1e4*(g/w)**Dp}),[s,l,u]=me(Rp,a),f=(s+(Fn-1)*u)/Fn,h=(l+(Zn-1)*f)/Zn;return[f,h,u]},formats:{color:{}}}),da=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:sd,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Yo(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Fp(e,t){let[r,n,o]=da.from(e),[i,a,s]=da.from(t),l=r-i,u=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let f=o-s,h=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(l**2+u**2+h**2)}const ld=3424/4096,cd=2413/128,ud=2392/128,kl=2610/16384,Zp=2523/32,Vp=16384/2610,Al=32/2523,Gp=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],jp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Up=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Wp=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var ha=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ns,fromBase(e){let t=me(Gp,e);return Op(t)},toBase(e){let t=Yp(e);return me(Wp,t)},formats:{color:{}}});function Op(e){let t=e.map(function(r){let n=ld+cd*(r/1e4)**kl,o=1+ud*(r/1e4)**kl;return(n/o)**Zp});return me(jp,t)}function Yp(e){return me(Up,e).map(function(n){let o=Math.max(n**Al-ld,0),i=cd-ud*n**Al;return 1e4*(o/i)**Vp})}function Hp(e,t){let[r,n,o]=ha.from(e),[i,a,s]=ha.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const zp=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Qp=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Jp=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Xp=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Co=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:We,fromBase(e){let r=me(zp,e).map(n=>Math.cbrt(n));return me(Jp,r)},toBase(e){let r=me(Xp,e).map(n=>n**3);return me(Qp,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Kp(e,t){let[r,n,o]=Co.from(e),[i,a,s]=Co.from(t),l=r-i,u=n-a,f=o-s;return Math.sqrt(l**2+u**2+f**2)}var So={deltaE76:Tp,deltaECMC:Bp,deltaE2000:ca,deltaEJz:Fp,deltaEITP:Hp,deltaEOK:Kp};function Or(e,t,r={}){Sn(r)&&(r={method:r});let{method:n=st.deltaE,...o}=r;e=Q(e),t=Q(t);for(let i in So)if("deltae"+n.toLowerCase()===i.toLowerCase())return So[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function $p(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Bt(e,n,o=>o*(1+t))}function _p(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Bt(e,n,o=>o*(1-t))}var em=Object.freeze({__proto__:null,darken:_p,lighten:$p});function dd(e,t,r=.5,n={}){[e,t]=[Q(e),Q(t)],Mt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return In(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function hd(e,t,r={}){let n;os(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[Q(e),Q(t)],n=In(e,t,l));let u=Or(e,t),f=o>0?Math.max(a,Math.ceil(u/o)+1):a,h=[];if(s!==void 0&&(f=Math.min(f,s)),f===1)h=[{p:.5,color:n(.5)}];else{let m=1/(f-1);h=Array.from({length:f},(g,w)=>{let k=w*m;return{p:k,color:n(k)}})}if(o>0){let m=h.reduce((g,w,k)=>{if(k===0)return 0;let A=Or(w.color,h[k-1].color,i);return Math.max(g,A)},0);for(;m>o;){m=0;for(let g=1;g<h.length&&h.length<s;g++){let w=h[g-1],k=h[g],A=(k.p+w.p)/2,S=n(A);m=Math.max(m,Or(S,w.color),Or(S,k.color)),h.splice(g,0,{p:A,color:n(A)}),g++}}}return h=h.map(m=>m.color),h}function In(e,t,r={}){if(os(e)){let[l,u]=[e,t];return In(...l.rangeArgs.colors,{...l.rangeArgs.options,...u})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=Q(e),t=Q(t),e=pn(e),t=pn(t);let s={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[st.interpolationSpace]||e.space,o=o?T.get(o):n,e=Ge(e,n),t=Ge(t,n),e=Dt(e),t=Dt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",u=[n,"h"],[f,h]=[Oe(e,u),Oe(t,u)];[f,h]=Xf(l,[f,h]),Bt(e,u,f),Bt(t,u,h)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let u=e.coords.map((m,g)=>{let w=t.coords[g];return yo(m,w,l)}),f=yo(e.alpha,t.alpha,l),h={space:n,coords:u,alpha:f};return a&&(h.coords=h.coords.map(m=>m/f)),o!==n&&(h=Ge(h,o)),h},{rangeArgs:s})}function os(e){return Mt(e)==="function"&&!!e.rangeArgs}st.interpolationSpace="lab";function tm(e){e.defineFunction("mix",dd,{returns:"color"}),e.defineFunction("range",In,{returns:"function<color>"}),e.defineFunction("steps",hd,{returns:"array<color>"})}var rm=Object.freeze({__proto__:null,isRange:os,mix:dd,range:In,register:tm,steps:hd}),fd=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],u=t-r;if(u!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/u+(o<i?6:0);break;case o:a=(i-n)/u+2;break;case i:a=(n-o)/u+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),pd=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:fd,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),nm=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:pd,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const om=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],im=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var md=new Te({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:om,fromXYZ_M:im}),am=new Te({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:md,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const sm=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],lm=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var gd=new Te({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:rs,toXYZ_M:sm,fromXYZ_M:lm});const cm=1/512,um=16/512;var dm=new Te({id:"prophoto",name:"ProPhoto",base:gd,toBase(e){return e.map(t=>t<um?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=cm?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),hm=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Co,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Yo(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const xl=203,Cl=2610/2**14,fm=2**14/2610,pm=2523/2**5,Sl=2**5/2523,Ml=3424/2**12,Il=2413/2**7,Tl=2392/2**7;var mm=new Te({id:"rec2100pq",name:"REC.2100-PQ",base:Ho,toBase(e){return e.map(function(t){return(Math.max(t**Sl-Ml,0)/(Il-Tl*t**Sl))**fm*1e4/xl})},fromBase(e){return e.map(function(t){let r=Math.max(t*xl/1e4,0),n=Ml+Il*r**Cl,o=1+Tl*r**Cl;return(n/o)**pm})},formats:{color:{id:"rec2100-pq"}}});const El=.17883277,Bl=.28466892,Dl=.55991073,bi=3.7743;var gm=new Te({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ho,toBase(e){return e.map(function(t){return t<=.5?t**2/3*bi:(Math.exp((t-Dl)/El)+Bl)/12*bi})},fromBase(e){return e.map(function(t){return t/=bi,t<=1/12?Math.sqrt(3*t):El*Math.log(12*t-Bl)+Dl})},formats:{color:{id:"rec2100-hlg"}}});const wd={};Et.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vd(e.W1,e.W2,e.options.method))});Et.add("chromatic-adaptation-end",e=>{e.M||(e.M=vd(e.W1,e.W2,e.options.method))});function zo({id:e,toCone_M:t,fromCone_M:r}){wd[e]=arguments[0]}function vd(e,t,r="Bradford"){let n=wd[r],[o,i,a]=me(n.toCone_M,e),[s,l,u]=me(n.toCone_M,t),f=[[s/o,0,0],[0,l/i,0],[0,0,u/a]],h=me(f,n.toCone_M);return me(n.fromCone_M,h)}zo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});zo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});zo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});zo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(_e,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});_e.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const wm=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],vm=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var bd=new Te({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:_e.ACES,toXYZ_M:wm,fromXYZ_M:vm,formats:{color:{}}});const Gn=2**-16,yi=-.35828683,jn=(Math.log2(65504)+9.72)/17.52;var bm=new Te({id:"acescc",name:"ACEScc",coords:{r:{range:[yi,jn],name:"Red"},g:{range:[yi,jn],name:"Green"},b:{range:[yi,jn],name:"Blue"}},referred:"scene",base:bd,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Gn)*2:r<jn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Gn)+9.72)/17.52:t<Gn?(Math.log2(Gn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Nl=Object.freeze({__proto__:null,A98RGB:am,A98RGB_Linear:md,ACEScc:bm,ACEScg:bd,HSL:fd,HSV:pd,HWB:nm,ICTCP:ha,JzCzHz:da,Jzazbz:sd,LCH:fn,Lab:Ne,Lab_D65:ua,OKLCH:hm,OKLab:Co,P3:rd,P3_Linear:ed,ProPhoto:dm,ProPhoto_Linear:gd,REC_2020:_u,REC_2020_Linear:Ho,REC_2100_HLG:gm,REC_2100_PQ:mm,XYZ_ABS_D65:ns,XYZ_D50:rs,XYZ_D65:We,sRGB:mn,sRGB_Linear:td});class R{constructor(...t){let r;t.length===1&&(r=Q(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:T.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new R(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=op(this,...t);return r.color=new R(r.color),r}static get(t,...r){return t instanceof R?t:new R(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=R.get(l);else if(i==="function<color>"){let u=l;l=function(...f){let h=u(...f);return R.get(h)},Object.assign(l,u)}else i==="array<color>"&&(l=l.map(u=>R.get(u)));return l};t in R||(R[t]=a),o&&(R.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)R.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(R);else for(let r in t)R.defineFunction(r,t[r])}}R.defineFunctions({get:Oe,getAll:Mn,set:Bt,setAll:$u,to:Ge,equals:ip,inGamut:$r,toGamut:Dt,distance:nd,toString:xo});Object.assign(R,{util:Yf,hooks:Et,WHITES:_e,Space:T,spaces:T.registry,parse:Ku,defaults:st});for(let e of Object.keys(Nl))T.register(Nl[e]);for(let e in T.registry)fa(e,T.registry[e]);Et.add("colorspace-init-end",e=>{var t;fa(e.id,e),(t=e.aliases)==null||t.forEach(r=>{fa(r,e)})});function fa(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(R.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return T.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=T.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=T.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}R.extend(So);R.extend({deltaE:Or});Object.assign(R,{deltaEMethods:So});R.extend(em);R.extend({contrast:Sp});R.extend(Ip);R.extend(sp);R.extend(rm);R.extend(no);function yd(e){return ke(e,(t,r)=>r instanceof R?I(r.toString({format:"hex"})):yd(r))}const ym="dodgerblue";function pa(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ki({background:e,foreground:t}){return{background:e??new R(pa(t)),foreground:t??new R(pa(e))}}var Mo;(function(e){e.Dark="dark",e.Light="light"})(Mo||(Mo={}));function km(e){return e==="black"?"white":"black"}const Am={black:{foregroundFaint1:new R("#ccc"),foregroundFaint2:new R("#eee")},white:{foregroundFaint1:new R("#ccc"),foregroundFaint2:new R("#eee")}},xm={black:{backgroundFaint1:new R("#666"),backgroundFaint2:new R("#444")},white:{backgroundFaint1:new R("#ccc"),backgroundFaint2:new R("#fafafa")}};function Ll({themeColor:e=ym,themeStyle:t=Mo.Light}={}){const r=new R(e),n=new R(t===Mo.Dark?"black":"white"),o=pa(n),i=new R(o),a={nav:{hover:ki({background:r.clone().set({"hsl.l":93})}),active:ki({background:r.clone().set({"hsl.l":90})}),selected:ki({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...xm[km(o)],foreground:i,...Am[o]}};return yd(a)}const Io=Oa()("element-book-change-route"),Rl="vira-",{defineElement:Tr,defineElementNoInputs:Bv}=Ka({assertInputs:e=>{if(!e.tagName.startsWith(Rl))throw new Error(`Tag name should start with '${Rl}' but got '${e.tagName}'`)}}),kd=p`
    pointer-events: none;
    opacity: 0.3;
`,It=wt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),To=wt({"vira-form-input-border-radius":"8px"}),Eo=wt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${To["vira-form-input-border-radius"].value} + 4px)`});function Ad({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=I(Ut(n+r+t));return p`
        ${I(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Eo["vira-focus-outline-color"].value};
            border-radius: ${Eo["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const is=p`
    padding: 0;
    margin: 0;
`,de=p`
    ${is};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function Cm(e){return p`
        ${I(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${I(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const He=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,he=Tr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var ma;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ma||(ma={}));Tr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ma.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${He};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Eo["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            border-radius: ${To["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${It["vira-interaction-animation-duration"].value},
                background-color
                    ${It["vira-interaction-animation-duration"].value},
                border-color ${It["vira-interaction-animation-duration"].value};
        }

        ${Ad({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${he} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?c`
                  <${he.assign({icon:e.icon})}></${he}>
              `:"",r=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"";return c`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var ga;(function(e){e.Header="header"})(ga||(ga={}));Tr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
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
            transition: height ${It["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:re()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return c`
            <button
                class="header-wrapper"
                ${y("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${ga.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Ar(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=wt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function v({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Sm=v({name:"CloseX24Icon",svgTemplate:c`
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
    `}),Mm=v({name:"Element16Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});v({name:"Element24Icon",svgTemplate:c`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Im=v({name:"Loader24Icon",svgTemplate:c`
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
    `}),Tm=p`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${It["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,xd=v({name:"LoaderAnimated24Icon",svgTemplate:c`
        <style>
            ${Tm}
        </style>
        ${Im.svgTemplate}
    `}),Em=v({name:"Options24Icon",svgTemplate:c`
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
    `}),Cd=v({name:"StatusFailure24Icon",svgTemplate:c`
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
    `});v({name:"StatusInProgress24Icon",svgTemplate:c`
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
    `});v({name:"StatusSuccess24Icon",svgTemplate:c`
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
    `});var Cr;(function(e){e.Loading="loading",e.Error="error"})(Cr||(Cr={}));const Ct=Tr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:re(),imageError:re()},styles:({hostClasses:e})=>p`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?c`
                  <slot class="status-wrapper" name=${Cr.Error}>
                      <${he.assign({icon:Cd})} class="error"></${he}>
                  </slot>
              `:t.loadedUrls[i]?void 0:c`
                    <slot class="status-wrapper" name=${Cr.Loading}>
                        <${he.assign({icon:xd})}></${he}>
                    </slot>
                `;return c`
            ${ye(!!a,a)}
            <img
                class=${fe({hidden:!!a})}
                ${y("load",async()=>{e._debugLoadDelay&&await _i(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${y("error",async s=>{e._debugLoadDelay&&await _i(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function wa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>wa({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Sd({value:e,allowed:t,blocked:r}){const n=t?wa({input:e,matcher:t}):!0,o=r?wa({input:e,matcher:r}):!1;return n&&!o}function Md(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Sd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Bm({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Wr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Sd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:u,blocked:f}=Md({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=u,n(f)}i.value!==l&&(i.value=l),s!==l&&o(l)}const oo=Tr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:re(),inputBlocked:re()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Eo["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
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
                ${He};
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
                border-radius: ${To["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${It["vira-interaction-animation-duration"].value};
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
                border-radius: ${To["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ad({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${He};
            }

            .close-x-button {
                ${de};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${It["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Md({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?c`
                  <${he.assign({icon:e.icon})} class="left-side-icon"></${he}>
              `:"",s=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return c`
            <label>
                ${a}
                ${ye(!!e.fitText,c`
                        <span
                            class="size-span"
                            ${Ar(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${y("input",l=>{Bm({inputs:e,filteredValue:i,event:l,inputBlockedCallback(u){t(new o.inputBlocked(u))},newValueCallback(u){t(new o.valueChange(u))}})})}
                    placeholder=${e.placeholder}
                />
                ${ye(!!(e.showClearButton&&e.value),c`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${he.assign({icon:Sm})}></${he}>
                        </button>
                    `)}
                ${ye(!!e.suffix,c`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});Tr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:re()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Wo(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return c`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return c`
                <a href=${a} rel="noopener noreferrer" ${y("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:ze,defineElementNoInputs:Dv}=Ka(),Ve=ze()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return c`
            <a
                href=${r}
                ${y("click",i=>{(!e.router||Wo(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new Io(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Dm(e,t){return e.entry.entryType===be.Root?!1:!!(e.entry.entryType===be.Page||it(t,e.fullUrlBreadcrumbs.slice(0,-1))||it(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ht=ze()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Y["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Y["element-book-nav-hover-background-color"].value};
            color: ${Y["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Y["element-book-nav-active-background-color"].value};
            color: ${Y["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Ve.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Y["element-book-nav-selected-background-color"].value};
            color: ${Y["element-book-nav-selected-foreground-color"].value};
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
            color: ${Y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Dm(r,e.selectedPath))return;const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return c`
                <li style=${n}>
                    <${Ve.assign({router:e.router,route:{paths:[Me.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${fe({"title-row":!0,selected:e.selectedPath?it(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ye(gr(r,be.ElementExample),c`
                                    <${he.assign({icon:Mm})}></${he}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ve}>
                </li>
            `});return c`
            <${Ve.assign({route:xr,router:e.router})}>
                <slot name=${at.NavHeader}>Book</slot>
            </${Ve}>
            <ul>
                ${t}
            </ul>
        `}});async function Nm(e){await ea(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await l1(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Lt=ze()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(_(e.message,"array")?e.message:[e.message]).map(r=>c`
                <p>${r}</p>
            `)}}),gn=ze()({tagName:"book-page-controls",events:{controlValueChange:re()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Y["element-book-page-foreground-faint-level-1-color"].value};
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

        ${oo} {
            height: 24px;
            max-width: 128px;
        }

        ${he}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===V.Hidden)return"";const a=Lm(e.currentValues[n],o,s=>{const l=_(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return c`
                    <div class="control-wrapper">
                        ${ye(i===0,c`
                                <${he.assign({icon:Em})}
                                    class="options-icon"
                                ></${he}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Lm(e,t,r){return er(t,V.Hidden)?"":er(t,V.Checkbox)?c`
            <input
                type="checkbox"
                .value=${e}
                ${y("input",n=>{const o=Wr(n,HTMLInputElement);r(o.checked)})}
            />
        `:er(t,V.Color)?c`
            <input
                type="color"
                .value=${e}
                ${y("input",n=>{const o=Wr(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,V.Text)?c`
            <${oo.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${y(oo.events.valueChange,n=>{r(n.detail)})}
            ></${oo}>
        `:er(t,V.Number)?c`
            <input
                type="number"
                .value=${e}
                ${y("input",n=>{const o=Wr(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,V.Dropdown)?c`
            <select
                .value=${e}
                ${y("input",n=>{const o=Wr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>c`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:c`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const ql=ze()({tagName:"book-breadcrumbs",styles:p`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":c`
                      <span class="spacer">&gt;</span>
                  `;return c`
                <${Ve.assign({route:{hash:void 0,search:void 0,paths:[Me.Book,...a]},router:e.router})}>
                    ${r}
                </${Ve}>
                ${s}
            `}):c`
                &nbsp;
            `}}),Ai=ze()({tagName:"book-breadcrumbs-bar",styles:p`
        :host {
            border-bottom: 1px solid
                ${Y["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Y["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return c`
            ${ye(!!e.currentSearch,c`
                    &nbsp;
                `,c`
                    <${ql.assign({currentRoute:e.currentRoute,router:e.router})}></${ql}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${y("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await _i(200),n.value===o&&(n.value?t(new Io({paths:[Me.Search,encodeURIComponent(n.value)]})):t(new Io(xr)))})}
            />
        `}}),Pl=ze()({tagName:"book-entry-description",styles:p`
        :host {
            color: ${Y["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Y["element-book-page-foreground-color"].value};
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
            `)}}),Fl=ze()({tagName:"book-page-wrapper",styles:p`
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

        ${Ve} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?c`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:c`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Me.Book,...e.pageNode.fullUrlBreadcrumbs],n=Qc(e.pageNode.entry.errors);return n&&console.error(n),c`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ve.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ve}>
                    ${n?c`
                              <${Lt.assign({message:n.message})}></${Lt}>
                          `:c`
                              <${Pl.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Pl}>
                              <${gn.assign({config:e.pageNode.entry.controls,currentValues:_a(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${gn}>
                          `}
                </div>
            </div>
        `}}),Un=ze()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${Y["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[Me.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return c`
            <${Ve.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ve}>
        `}}),Zl=Symbol("unset-internal-state"),Vl=ze()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Zl},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Qc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Zl&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return c`
                ${ye(!!t.elementExampleNode.entry.styles,c`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),c`
                <${Lt.assign({message:`${t.elementExampleNode.entry.title} failed: ${Rt(n)}`})}></${Lt}>
            `}},options:{allowPolymorphicState:!0}}),Gl=ze()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Un} {
            color: ${Y["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Un} {
            color: ${Y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return c`
            <div class="individual-example-wrapper">
                <${Un.assign(an(e,["currentPageControls"]))}></${Un}>
                <${Vl.assign(e)}></${Vl}>
            </div>
        `}});function Id(e,t,r,n){const o=ia(r,n),i=[];if(o){const a=Id(e,t,o,n);a&&i.push(a)}if(gr(r,be.Page)&&!e.includes(r)){const a=_a(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:ke(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Rm({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[c`
                No results
            `];const a=$i(e,1)?Id(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&$i(e,1)?c`
                  <${gn.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${gn}>
              `:$,l=N1(e,u=>u.fullUrlBreadcrumbs.join(">"),(u,f)=>{if(gr(u,be.Page))return c`
                    <${Fl.assign({isTopLevel:t,pageNode:u,controls:o,router:r})}
                        class="block-entry"
                    ></${Fl}>
                `;if(gr(u,be.ElementExample)){const h=_a(o,u.fullUrlBreadcrumbs.slice(0,-1));return c`
                    <${Gl.assign({elementExampleNode:u,currentPageControls:h,router:r})}
                        class="inline-entry"
                    ></${Gl}>
                `}else return gr(u,be.Root)?$:c`
                    <${Lt.assign({message:`Unknown entry type for rendering: '${u.entry.entryType}'`})}
                        class="block-entry"
                    ></${Lt}>
                `});return[s,l]}const nr=ze()({tagName:"book-entry-display",styles:p`
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
                ${It["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:re()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=aa(e.currentRoute.paths),a=Rm({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return c`
            <${Ai.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Ai}>

            ${ye(e.showLoading,c`
                    <div
                        ${oa(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${he.assign({icon:xd})}></${he}>
                    </div>
                    ${ye(!!n.lastElement,c`
                            ${n.lastElement}
                            <slot name=${at.Footer}></slot>
                        `)}
                `,c`
                    <div
                        ${oa(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${at.Footer}></slot>
                `)}
        `}});function qm(e,t,r){const n=jl(e,t);if(n.length)return n;r(xr);const o=jl(e,xr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function jl(e,t){return e.filter(r=>s1({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const xi=qu()({tagName:"element-book-app",events:{pathUpdate:re()},stateInitStatic:{currentRoute:xr,router:void 0,loading:!0,colors:{config:void 0,theme:Ll(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Y["element-book-page-background-color"].value};
            color: ${Y["element-book-page-foreground-color"].value};
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

        ${ht} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ul(e,aa(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var f,h,m,g,w,k,A;t._debug&&console.info("rendering element-book app");function a(S){return{...e.currentRoute,...S}}function s(S){const M=a(S);return!it(e.currentRoute,M)}function l(S){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,S].filter(we).join(" - "))}function u(S){if(!s(S))return;const M=a(S);e.router?e.router.setRoutes(M):n({currentRoute:{...e.currentRoute,...M}}),t.elementBookRoutePaths&&!it(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(M.paths??[]))}try{if(t.elementBookRoutePaths&&!it(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(f=t.internalRouterConfig)!=null&&f.useInternalRouter&&!e.router){const G=jf(t.internalRouterConfig.basePath);n({router:G}),G.addRouteListener(!0,ae=>{n({currentRoute:ae})})}else!((h=t.internalRouterConfig)!=null&&h.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const S={themeColor:t.themeColor};if(!it(S,(m=e.colors)==null?void 0:m.config)){const G=Ll(S);n({colors:{config:S,theme:G}}),Of(r,G)}const M=t._debug??!1,F=Cf({entries:t.entries,debug:M});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Vu(F.tree,{children:(w=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:w.children,controls:t.globalValues})}}));const W=aa(e.currentRoute.paths),ie=(W?Df({flattenedNodes:F.flattenedNodes,searchQuery:W}):void 0)??qm(F.flattenedNodes,e.currentRoute.paths,u);l((k=ie[0])==null?void 0:k.entry.title);const ce=(A=e.treeBasedControls)==null?void 0:A.controls;return ce?(t._debug&&console.info({currentControls:ce}),c`
                <div
                    class="root"
                    ${y(Io,async G=>{const ae=G.detail;if(!s(ae))return;if(n({loading:!0}),u(ae),!(r.shadowRoot.querySelector(ht.tagName)instanceof ht))throw new Error(`Failed to find child '${ht.tagName}'`);Ul(r,W,e.currentRoute)})}
                    ${y(gn.events.controlValueChange,G=>{if(!e.treeBasedControls)return;const ae=Mf(ce,G.detail.fullUrlBreadcrumbs,G.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ae}})})}
                >
                    <${ht.assign({flattenedNodes:F.flattenedNodes,router:e.router,selectedPath:W?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${at.NavHeader}
                            slot=${at.NavHeader}
                        ></slot>
                    </${ht}>
                    <${nr.assign({controls:ce,currentNodes:ie,currentRoute:e.currentRoute,debug:M,originalTree:F.tree,router:e.router,showLoading:e.loading})}
                        ${y(nr.events.loadingRender,async G=>{await ea();const ae=r.shadowRoot.querySelector(nr.tagName);ae?ae.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${nr.tagName}' for scrolling.`),await ea(),n({loading:!G.detail})})}
                    >
                        <slot
                            name=${at.Footer}
                            slot=${at.Footer}
                        ></slot>
                    </${nr}>
                </div>
            `):c`
                    <${Lt.assign({message:"Failed to generate page controls."})}></${Lt}>
                `}catch(S){return console.error(S),c`
                <p class="error">${Rt(S)}</p>
            `}}});async function Ul(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ht.tagName);if(!(n instanceof ht))throw new Error(`Failed to find child '${ht.tagName}'`);await Nm(n)}function Ci(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Pm=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},r={...e,foregroundColor:p`#ACADAD`},n={...e,foregroundColor:p`#D6D6D6`},o={...t},i={...t,foregroundColor:p`#00A876`},a={...t,foregroundColor:p`#1D6852`},s={...n},l={...e,foregroundColor:p`rgba(0, 0, 0, 0.08)`},u={...e,backgroundColor:p`#D2EEFA`},f=Ci(o),h=Ci(i),m=Ci(a),g=m,w={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},k={...w,foregroundColor:p`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:u,pageDarkPrimary:g,accentPrimary:f,accentPrimaryHover:h,accentPrimaryActive:m,accentSecondary:w,accentTertiary:k}})(),Td=Pm;function Wl(e,t){return I(`--toniq-${ho(e)}-${ho(t)}`)}const as=ke(Td,e=>({backgroundColor:Wl(e,"backgroundColor"),foregroundColor:Wl(e,"foregroundColor")}));function $e(e,t){const r=Td[e][t],n=as[e][t];return p`var(${n}, ${r})`}const b=ke(as,e=>({foregroundColor:$e(e,"foregroundColor"),backgroundColor:$e(e,"backgroundColor")}));function H(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Si={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`,pulseDuration:p`--toniq-pulse-transition-duration`},X={interaction:p`var(${Si.interactionDuration}, 84ms)`,pretty:p`var(${Si.prettyDuration}, 300ms)`,pulse:p`var(${Si.pulseDuration}, 3s)`},Ol={modalGrow:{animationName:p`toniq-modal-grow`,keyFrames:p`
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
        `}},Kt=p`
    pointer-events: none;
    opacity: 0.3;
    ${He};
`;function Pt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=I(Ut(n+r+t));return p`
        ${I(e)}::after {
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
    `}const Ed={toniqFont:{"font-family":p`'Lexend', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`64px`,"font-size":p`48px`},h3Font:{"line-height":p`48px`,"font-size":p`32px`},h4Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}},Fm=ke(Ed,(e,t)=>{const r=I(ho(e.replace(/Font$/,"")));return ke(t,o=>{const i=I(o);return p`--toniq-font-${r}-${i}`})});function Qe(e){const t=Fm[e],r=Ed[e],n=le(t).map(o=>{const i=r[o],a=t[o];return p`
            ${I(o)}: var(${a}, ${i});
        `});return I(n.join(`
`))}const P=(()=>{const e=p`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
        ${Qe("toniqFont")};
    `,t=p`
        ${e};
        ${Qe("normalWeightFont")};
    `,r=p`
        ${e};
        ${Qe("boldFont")};
    `,n=p`
        ${e};
        ${Qe("extraBoldFont")};
    `,o=p`
        ${e};
        ${Qe("paragraphFont")};
        ${t};
    `,i=p`
        ${e};
        ${o};
        ${r};
    `,a=p`
        ${e};
        ${Qe("labelFont")};
        ${t};
    `,s=p`
        ${a};
        ${r};
    `,l=p`
        ${Qe("h1Font")};
        ${n};
    `,u=p`
        ${Qe("h2Font")};
        ${n};
    `,f=p`
        ${Qe("h3Font")};
        ${r};
    `,h=p`
        ${Qe("h4Font")};
        ${r};
    `,m=p`
        ${Qe("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:u,h3Font:f,h4Font:h,monospaceFont:m}})(),d=wt({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),z=ke(d,(e,t)=>r=>I(`var(${t.name}, ${r})`)),wn={popupShadow:p`
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
    `};function Zm(e,t=!0){const r=I(e),n=e===":host"?p`
                  :host(:hover);
              `:p`
                  ${r}:hover
              `,o=t?p`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${b.pageInteraction.foregroundColor};
              }
          `:p``;return p`
        ${r} {
            border-radius: 16px;
            background-color: ${b.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${wn.popupShadow};
        }

        ${o}
    `}const Bd=v({name:"ChevronsRight16Icon",svgTemplate:c`
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
    `}),Vm=v({name:"Copy16Icon",svgTemplate:c`
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
    `}),Gm=v({name:"ExternalLink16Icon",svgTemplate:c`
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
    `}),Tt=v({name:"InfoCircle16Icon",svgTemplate:c`
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
    `}),jm=v({name:"ArrowBarUp24Icon",svgTemplate:c`
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
    `}),Um=v({name:"ArrowForwardUp24Icon",svgTemplate:c`
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
    `}),Wm=v({name:"ArrowLoopLeft24Icon",svgTemplate:c`
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
    `}),Om=v({name:"ArrowLoopRight24Icon",svgTemplate:c`
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
    `}),Dd=v({name:"ArrowsSort24Icon",svgTemplate:c`
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
    `}),Ym=v({name:"ArrowsSortAscending24Icon",svgTemplate:c`
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
    `}),Hm=v({name:"ArrowsSortDescending24Icon",svgTemplate:c`
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
    `}),zm=v({name:"Bell24Icon",svgTemplate:c`
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
    `}),Qm=v({name:"Bucket24Icon",svgTemplate:c`
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
    `}),Jm=v({name:"BuildingStore24Icon",svgTemplate:c`
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
    `}),Xm=v({name:"CalendarEvent24Icon",svgTemplate:c`
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
    `}),Km=v({name:"Cash24Icon",svgTemplate:c`
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
    `}),$m=v({name:"Chain24Icon",svgTemplate:c`
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
    `}),Nd=v({name:"CheckMark24Icon",svgTemplate:c`
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
    `}),Ld=v({name:"ChevronDown24Icon",svgTemplate:c`
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
    `}),_m=v({name:"ChevronUp24Icon",svgTemplate:c`
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
    `}),e2=v({name:"Circle24Icon",svgTemplate:c`
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
    `}),Rd=v({name:"CircleDot24Icon",svgTemplate:c`
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
    `}),t2=v({name:"CirclePlus24Icon",svgTemplate:c`
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
    `}),r2=v({name:"CircleWavyCheck24Icon",svgTemplate:c`
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
    `}),n2=v({name:"Clock24Icon",svgTemplate:c`
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
    `}),o2=v({name:"Code24Icon",svgTemplate:c`
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
    `}),qd=v({name:"Copy24Icon",svgTemplate:c`
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
    `}),i2=v({name:"CreateFile24Icon",svgTemplate:c`
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
    `}),a2=v({name:"DotsVertical24Icon",svgTemplate:c`
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
    `}),s2=v({name:"Download24Icon",svgTemplate:c`
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
    `}),l2=v({name:"Edit24Icon",svgTemplate:c`
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
    `}),c2=v({name:"Envelope24Icon",svgTemplate:c`
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
    `}),Pd=v({name:"ExternalLink24Icon",svgTemplate:c`
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
    `}),u2=v({name:"Filter24Icon",svgTemplate:c`
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
    `}),d2=v({name:"Fire24Icon",svgTemplate:c`
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
    `}),h2=v({name:"Gear24Icon",svgTemplate:c`
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
    `}),f2=v({name:"Geometry24Icon",svgTemplate:c`
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
    `}),p2=v({name:"GridDots24Icon",svgTemplate:c`
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
    `}),m2=v({name:"Heart24Icon",svgTemplate:c`
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
    `}),va=v({name:"Infinity24Icon",svgTemplate:c`
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
    `}),g2=v({name:"Info24Icon",svgTemplate:c`
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
    `}),w2=v({name:"LayersLinked24Icon",svgTemplate:c`
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
    `}),v2=v({name:"LayoutGrid24Icon",svgTemplate:c`
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
    `}),b2=v({name:"Lifebuoy24Icon",svgTemplate:c`
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
    `}),y2=v({name:"List24Icon",svgTemplate:c`
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
    `}),k2=v({name:"ListDetails24Icon",svgTemplate:c`
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
    `}),A2=v({name:"Loader24Icon",svgTemplate:c`
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
    `}),x2=v({name:"Lock24Icon",svgTemplate:c`
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
    `}),C2=v({name:"LockOpen24Icon",svgTemplate:c`
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
    `}),S2=v({name:"Menu24Icon",svgTemplate:c`
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
    `}),M2=v({name:"Pamphlet24Icon",svgTemplate:c`
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
    `}),I2=v({name:"Paper24Icon",svgTemplate:c`
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
    `}),T2=v({name:"People24Icon",svgTemplate:c`
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
    `}),E2=v({name:"Person24Icon",svgTemplate:c`
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
    `}),B2=v({name:"Photo24Icon",svgTemplate:c`
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
    `}),D2=v({name:"Refresh24Icon",svgTemplate:c`
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
    `}),Fd=v({name:"Rocket24Icon",svgTemplate:c`
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
    `}),Zd=v({name:"Search24Icon",svgTemplate:c`
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
    `}),N2=v({name:"Send24Icon",svgTemplate:c`
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
    `}),L2=v({name:"ShootingStar24Icon",svgTemplate:c`
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
    `}),R2=v({name:"ShoppingCart24Icon",svgTemplate:c`
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
    `}),q2=v({name:"Social24Icon",svgTemplate:c`
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
    `}),P2=v({name:"Square24Icon",svgTemplate:c`
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
    `}),F2=v({name:"SquareCheck24Icon",svgTemplate:c`
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
    `}),Z2=v({name:"Tag24Icon",svgTemplate:c`
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
    `}),io=v({name:"Trash24Icon",svgTemplate:c`
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
    `}),V2=v({name:"Upload24Icon",svgTemplate:c`
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
    `}),G2=v({name:"Wallet24Icon",svgTemplate:c`
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
    `}),Vd=v({name:"World24Icon",svgTemplate:c`
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
    `}),j2=v({name:"WorldUpload24Icon",svgTemplate:c`
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
    `}),U2=v({name:"X24Icon",svgTemplate:c`
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
    `}),W2=v({name:"Folder48Icon",svgTemplate:c`
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
    `}),Gd=v({name:"FolderOff48Icon",svgTemplate:c`
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
    `}),O2=v({name:"Kyc48Icon",svgTemplate:c`
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
    `}),Y2=v({name:"Tag48Icon",svgTemplate:c`
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
    `}),H2=v({name:"Wallet48Icon",svgTemplate:c`
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
    `}),jd=v({name:"Api64Icon",svgTemplate:c`
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
    `}),z2=v({name:"CircleDashes64Icon",svgTemplate:c`
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
    `}),Q2=v({name:"Rocket64Icon",svgTemplate:c`
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
    `}),J2=v({name:"CryptoBtc16Icon",svgTemplate:c`
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
    `}),X2=v({name:"CryptoCkBtc16Icon",svgTemplate:c`
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
    `}),K2=v({name:"CryptoCkBtc24Icon",svgTemplate:c`
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
    `}),Ud="0 0 58 58",Wd=y1`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDct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" width="58" height="58" />
`,$2=v({name:"CryptoIcp16Icon",svgTemplate:c`
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
            ${Wd}
        </svg>
    `}),_2=v({name:"CryptoIcp24Icon",svgTemplate:c`
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
            ${Wd}
        </svg>
    `}),eg=v({name:"WalletInfinity24Icon",svgTemplate:c`
        <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="25.44" height="24" fill="url(#pattern0_3164_18920)" />
            <defs>
                <pattern
                    id="pattern0_3164_18920"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3164_18920" transform="scale(0.00943396 0.01)" />
                </pattern>
                <image
                    id="image0_3164_18920"
                    width="106"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABkCAYAAABuK6XnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDg5NzQ4RERGNkQ0MTFFQzg0N0E5RjUzMjM3M0Q4QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDg5NzQ4REVGNkQ0MTFFQzg0N0E5RjUzMjM3M0Q4QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODk3NDhEQkY2RDQxMUVDODQ3QTlGNTMyMzczRDhCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODk3NDhEQ0Y2RDQxMUVDODQ3QTlGNTMyMzczRDhCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgsVq30AADMWSURBVHja7H0JgCVV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"
                />
            </defs>
        </svg>
    `}),tg=v({name:"WalletInfinity64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3267_16841)" />
            <defs>
                <pattern
                    id="pattern0_3267_16841"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3267_16841" transform="translate(-0.03) scale(0.01)" />
                </pattern>
                <image
                    id="image0_3267_16841"
                    width="106"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABkCAYAAABuK6XnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDg5NzQ4RERGNkQ0MTFFQzg0N0E5RjUzMjM3M0Q4QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDg5NzQ4REVGNkQ0MTFFQzg0N0E5RjUzMjM3M0Q4QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODk3NDhEQkY2RDQxMUVDODQ3QTlGNTMyMzczRDhCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODk3NDhEQ0Y2RDQxMUVDODQ3QTlGNTMyMzczRDhCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgsVq30AADMWSURBVHja7H0JgCVV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"
                />
            </defs>
        </svg>
    `}),rg=v({name:"WalletLeather24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" rx="8" fill="url(#pattern0_3417_1878)" />
            <defs>
                <pattern
                    id="pattern0_3417_1878"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3417_1878" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_3417_1878"
                    width="100"
                    height="100"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),ng=v({name:"WalletLeather64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" rx="8" fill="url(#pattern0_3417_1879)" />
            <defs>
                <pattern
                    id="pattern0_3417_1879"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3417_1879" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_3417_1879"
                    width="100"
                    height="100"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),og=v({name:"WalletPlug24Icon",svgTemplate:c`
        <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="25.44" height="24" fill="url(#pattern0_3164_19098)" />
            <defs>
                <pattern
                    id="pattern0_3164_19098"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3164_19098" transform="scale(0.00943396 0.01)" />
                </pattern>
                <image
                    id="image0_3164_19098"
                    width="106"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABkCAYAAABuK6XnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjA0NkE4MTcwQzNDMTFFQzhCNzY4NDRBQTExNTAxNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjA0NkE4MTgwQzNDMTFFQzhCNzY4NDRBQTExNTAxNjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDQ2QTgxNTBDM0MxMUVDOEI3Njg0NEFBMTE1MDE2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDQ2QTgxNjBDM0MxMUVDOEI3Njg0NEFBMTE1MDE2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnBHAaMAABtzSURBVHja7F0LsF1V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"
                />
            </defs>
        </svg>
    `}),ig=v({name:"WalletPlug64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3267_16840)" />
            <defs>
                <pattern
                    id="pattern0_3267_16840"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3267_16840" transform="translate(-0.03) scale(0.01)" />
                </pattern>
                <image
                    id="image0_3267_16840"
                    width="106"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABkCAYAAABuK6XnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjA0NkE4MTcwQzNDMTFFQzhCNzY4NDRBQTExNTAxNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjA0NkE4MTgwQzNDMTFFQzhCNzY4NDRBQTExNTAxNjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDQ2QTgxNTBDM0MxMUVDOEI3Njg0NEFBMTE1MDE2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDQ2QTgxNjBDM0MxMUVDOEI3Njg0NEFBMTE1MDE2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnBHAaMAABtzSURBVHja7F0LsF1V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"
                />
            </defs>
        </svg>
    `}),ag=v({name:"WalletStoic24Icon",svgTemplate:c`
        <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="25.44" height="24" fill="url(#pattern0_3164_18910)" />
            <defs>
                <pattern
                    id="pattern0_3164_18910"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3164_18910" transform="scale(0.00943396 0.01)" />
                </pattern>
                <image
                    id="image0_3164_18910"
                    width="106"
                    height="100"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABkCAYAAABuK6XnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTVEODBEMTBGOUQwMTFFQkEyMjlFRkJEMEM4NTUwNkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTVEODBEMTFGOUQwMTFFQkEyMjlFRkJEMEM4NTUwNkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NUQ4MEQwRUY5RDAxMUVCQTIyOUVGQkQwQzg1NTA2QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NUQ4MEQwRkY5RDAxMUVCQTIyOUVGQkQwQzg1NTA2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpwAiRAAACk6SURBVHja7H0HWFVX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"
                />
            </defs>
        </svg>
    `}),sg=v({name:"WalletStoic64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" rx="8" fill="#1E3542" />
            <rect x="16" y="14" width="32" height="36" fill="url(#pattern0_3267_16635)" />
            <defs>
                <pattern
                    id="pattern0_3267_16635"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlink:href="#image0_3267_16635"
                        transform="matrix(0.011236 0 0 0.00998752 0 -0.0093633)"
                    />
                </pattern>
                <image
                    id="image0_3267_16635"
                    width="89"
                    height="102"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),lg=v({name:"WalletUnisat24Icon",svgTemplate:c`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="24" rx="8" fill="url(#pattern0_3417_1878)" />
            <defs>
                <pattern
                    id="pattern0_3417_1878"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3417_1878" transform="scale(0.00357143)" />
                </pattern>
                <image
                    id="image0_3417_1878"
                    width="280"
                    height="280"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAIAAAAI7H7bAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABGKADAAQAAAABAAABGAAAAADGOxDpAABAAElEQVR4Ae29eZAdyXkfWFXv6tf3hcZ9AzMDDObgHBySM0NKXNqSHApLomjLDq/Xlu21Q7shxe4fG6F1aGUGJcsOS7Jlh631xtq7tiNk07QO0qZIUaQo8ZiLc2JwDDDAzOAGGmg0+j5ev1fl3+/7MrPqdTcw/fqYAd7L7NdVX+b3ZVbWl9+vvqysrKwg8MFrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvAa8BrwGvgntVAeM/W/B6ueBQE3W1hfznsKUUD5ai3Leouhu2FqBCFYCVBUEuCOAlqcVKpJVMLyUwlGZ2Lx+bi8UoyXYknK8lCfA+fflNW3QPpA23WrmKwsye3rSvaLr/2Qi6Og2oSJDFgEyp+4iSxhIETQCW/ZKGW3JpLrs/URmbim3PxxDxA58NdoQEPpA+iGaIw2NMb3T8QAUW7eqP2fEjYADxAiCPogkLgir4oSSx46JeU1sREQFWNk5uzMRA1PB3fmIlRjg8frgY8kDZc/w8ORU9uzwFIQx05AQn9T1X8D7BEIBFCIAwNogYR44WyQALG0vQYAAuCqfl4ZDa+OBlfm/Jo2vCmvMMB8nfgedaqNYDrUyEX3D8YfWJXtK8vN9AeEUJxEiYhWPAfYZCEAekMgbgIgEExCIB7px+qhzurHfmory3e1hmdH6+i4+fxtOpWW0tGD6S1aG/5vLD+HT3hXzyUO7Qp11uCw6HPCWJBRkTPE0XEEhxKgrGFDEEZpGCbKdhCTxNRtmUCdhCTTUchasuHfW0R/NLZW9W5Wia/Jz8QDXggraeacS/UXw5+eF/u6T3oyEVwLIQQbmvgV9S5JEkUSiIOGyZREnL4DWCg+6EUhemNjDgTVxzK+XBnd667FJ0br92YqfmRvRVrbh0Ec+tQhi9CNFDKBw9ujv6Xj+U/sYcj2hzIZt9NA7GhviRRzCBZHArZdQSzSZr4GrIRXDn1dDZZZMIwLOVDDKnDQY3P4zZKcvvNxmvAA2kddAxHtLM3+MnDub/5WG5rV5iDK5JSZauoQLwuESzlWgJRJwm3pMKSAndlhF1VBUCSrqWAIaUZxMHpdeTxnCqq1IK5Kh2iDxutAQ+ktWo4HwWPbQ9/4en8s3ty8APqGFAorZ8mbMBggKSogM8xMAghQyls1RGJ1QNUsmfdLMEU/TFVgvNtiImYAExYoIpy1wSnNLPAsT4fNlQDHkhrUu/mzuDHHwj/zkdz27tD+AEaupgsXYqFCkGiMBI/Y9IBFWPchmBMHZHI2x6gE1OosLaQ5E+zWzBpLD0ZFsV5Ej1tYTEXzizE/pYpVc4GUB5Iq1fqwcHgf/5o7i89kuso0BHR9A14sHegEo8kBzGJAgPjoJhOSQTZWprlyG2VSVeB1OEgF7OICDJmUJTKKMRQs85ChFHy2Woy70fzqMgNCR5Iq1Erboo+fSD8+adzT+6E4YpNL0ICoyadUBFLp8WrdQMnDiqWMDIiIJKomJRgUWL3tsLMqEfNVmAplymlXAi0L8TJbNUK+P26asADqWF1tuWDv/xI+HMfj/b0qQUbcxdDN06JOFFIINV12BxmxP5t542SLIIwM45ICGbURGFm3I5KG74yDZdHU2eIZCvGQnDLlAu6CxHm9WEWrMnjd+unAQ+kBnQJy8RN0d/7WPjXHosG2gkAmqRghhbMf8TpfwypApQRSKiMM3SKm3TmktwswNIKBaRAyBRYDw4KSwbNwqwuaB1kizSRwnBiAL+E0qYXWFkf1lEDHkgNKHNPX/B/fSb8sQei9qJM71GzJhb4b41cB+6kWPccScchYNBkirDwNQ9semmi5hdMmhsnkyPNjkyLi6qTcRVzcAsMlnBAvIthhf1+HTTgZzasSIm5MLh/KPjFHw6f2In7I07zWXrfnjVqmejDktPEMEAiQhW4EDxJTCQgBMQAFfijeQuysMfUBzcNwkhzB3H3yySvlMxH4ZYO1uXKVM1PzFup1t5Pznuk99NQEAA6T+wI/vlPhA9uwRg35DMuwvmElKAALV2DS0+TRMCAxdxTUVy6f8wkhyDBoMcSviYQZ0wk4txRLKtub7iLhBiNgrC9SODifonl+LBmDXggvY8KcY/+qX3BF3403DuA+Td6s2FMGTnFDMWsxa650dsS3B3VE5TUOyVJ592RCqQEb7q0TFMss/BYrKK73WJEgpZjStOkDGa0cFYIIYt8TUFaiLl5yMDHtTbN71etAQ+kO6kO/ufHHgh+8y+GmAGkBm2hIiPaxljrMIPilqLLgCqDGTVusXPrXlgRQ7t0KU2BlHosCgq6BHcGPMiiP+FSwI4FMkEKtByJIwUeqaPII/qxh4xqVkl6IN1WcZiE+lMPhf/nZ6Kt3ZSh5cFyUz9AC1bMCEBURhJJQtD4gQyBZElEISxHShOC5eDHAg2W5EAOJFqsiVIOQWqiuSQmiVI+C5PSMtxsXusMRYZ+KQxmvV9S/a1264G0vObgi/7KY9HnfzQHFNHujJ0bK6elItkmIqKGa7AhjEWD41ZGXJlkNB050K7bZkFlSlPcSiKzL6ppmuJqUichuZlrcUaREm8GiijC60wQ8n6pTn0NRjyQllEYUPSZ+4Gi/FAXuGKHxh4FSGqY6V0QRJiuIKP/sSaehYopyKHCyBhkGk9lDmaA4bAqB6TkokAw2FS7hwizI50pNhV7/ZGFsIQLv4QXP3C/ZHOonN+uVAN++HuxpmCGH9sT/dKPFLf1wOAwbVqsFYPXIZdMwH0FLuEwar4WThKE/FCMJZiSSWfGTMrYbPzOzeTaJFYvCbDO1oKMo7cXwu5SONgebe+O+MwU8jyE/WlprArSCJ8lv0y6O5bmSoUpY3CSlZEy8erHUJlX1atTGNv3oWENeCDVqQzP/p/dn/vCj5ceGCKKhEfTpQkuMmsx0wiXdk2HhVoC0oSB2rFYLhf9mQ5eulg7PZJcn0pGZ7FoyeJpb7gl6yyEmKyN1/IO9EX7+nMlWDetXGFD3Lq6SuHC4n1bPa7q8AaZJQJSUynKwcrUdqCNfbxrflkip+gVE75rl6oKRndoS/Trny0/uFXVAiOkhYmhgjBmp1GbzRh37MycCbB/w4+DcGQ6+d1jtS++WXvxQvzOaHJzBj0orCJkC7B7LCSEGaVYveTKZPzuWO3MTbixAKumCJpUSAvlVqtCiKQhjYDLiElI010SM2WSzVkijS/YRoCvn4+X6nVllPdIqZ4e2p77zc+2H9oCE3OYUYszUSANPM5aUBFni2GQwyJBiEo6xeCpkgAQ+uaZ2rffSS5PJPONTLsG0vAG0c3ZypvXq5/cVRxqz+GdorSi5jjZhDpaResy1PHvFAGK+tpQ/ei690t30tNinvdIRiObu6N/+rnOJ/cWaLGAAoKBT/1134hbAe7pqyDLzp9mSQLA5q3h5J99PwaKRma4bN0qAl7Fg4M6M1rDYsW4d9KaySGsx9OjS9FyZKmVi6axlBIMikQ2jQlpHBQWfsB2xr+mLqpaycYDiVra0Rf9+ue6nj1YxHvjYqniUJboz43HyT07LQ+E9ouEQAKu5XREv3ss+dcvxefHlunCLSn1fRIAJ6ylem0q7irxFT3MvpMMBr0Gug71rjAOJJr6KrodxyFf7p6YnApo2QAV+ni5AL1KvA6YcjNFeHKRBjyQAsw6+8W/0PXZx9ry9s6I4KD54F+tyPoaxMTUJJUi8hNEGdHw/GjyL5+Pf+84Vrs3mRdpfBVRHAWu6exoFYN7GIowWBI36I7BKrEiBgqgsp5UT0grrBWo52qazSslI9KW49xC75dUO3fetjqQ2grBzz7b+Tc+0d5Zsv05XIKtRYnuaKKOUEfApPQ5kkEUBrJfvpD81veT589vyGIjGJ+4OMHV6vrKEbpeUgWtmNBKum29T3XnwFz4aZzb2+RVOb5ai3H/0C9F5PR6O6LVgfTnj7T90o/3DHXrKw7O3miGdWgyFkcjpI2JoPadxOS4Iv433o5/87vJqRvOSdxO56tPx1sPlyZreGw6WJYVi+TYWpyrunFK6q/sOWS45ujqZJFezzIZMiePPh4vMb6Pd+dma2kgHdpW+JWf6juwGUOXxpxoRyCtOdn0jL1l7M50AGFkleD3jiW//XxyafzO2l4f7s2Z+NZ8jG8rdZbwHEuDdEXriycYLCBEzJwVpRRmJrPro1ot1HGZKH4pwErI9nD1R/KxIGhdIG3pyf3yT/T90KFyBi0g6YvU1OrMg2lqX0CZEaCsxH7n9eRffD+5MV2XY+MiOPzYHD6UFPe3RV1FYkl/mSPecSiCgLrt3HBzdRAZLVDOVvwS5rY2MoifqU/zky0KJEwj+OvPdP/sJ7EcyHJtbK7R6pnEkDI25TKAMVMJ/8Or8b9+IcBkhQ844F1xjOZhkX7MLcIgmwJAEaVb61dZL3sO1ikt9jk2Xc9BuHKZcBnB4Pp4KMev6aVKWrRtUSA9sqvtVz432N+B0zfDyXV6yaTxkc1iM2QSTA/z8L70ZvJb3wswWeFDCZivjc+NDbbnukp6PajDg+3WMRFnYHkEA2kbX77mhsudPXvmwXUHuvFYWqq0VgTSzoH8r/3MpiM71PpgJ85UhOAG12SXrldvUZ32+oTE6NmXjyf//LvBtcmlWv3gUoAl+CU4pa4ijN54Ula93qvIifE8leD5oY4qI4nKMluk34aFTHhlGGJYVdyHrAZaDkjFfPA/Pt37Pz3bi/mpzq5SpyNXauuQYJo0KOHS8BBUEpHn30u+8MfBuVua/GFugSV8A3OwHGHOq3EkrChxZavlCE0QvPFMMvKpMDNnOIvyklfE0yWPJatc3bcWkGA4928rff5zmwe7M5MMBSMWS3I1hm6YaMBjNYaopiRnbyS/+s34zWuW82HvMQYwPF3DOB5+BhHiUtwZ8GqQDZarp2TP08pYruZI81odQY3yKqD3S6lOWwtIPe3RP/jpLR/dX4Y7Mq+q0tasITm1mC5SCidjYnLbMToTfOGPan/8tpO+KwhgCZ86h1/C666s7WIwZPyT1HfRHVQ9otywOUWz2nF9W/VL+LYgurg+QAPLDlo1rWY+eqDj0w91FfB5V1xU9cdLtcLEbpEuPNPDoZiICIFnKV98rfa1U1nrulvUhQHxP7swf3GSty96cnVbptlTASGOpi6FXCSkYQmXAi4ReO0u1vcn06wtR7UQkPC9oL/16cFefIILrcwLMm0ia3HyYqpagFpLltaU8PVLyf//Uq1yVz5OAbhH55IXLs1j9gNoqXFq9+YETLpwzcVEztvQdfpwRUACBS39YfZQVwE/CrZ4aBUg4fL5mYe6P7K33bx1alreGYAS2Nprbmo7BmwwoysTyW9/r3r+LhhguIPVAkvPX6rgC+cKAz2hJRgI+TmnLKhSWjCTRusOlVGQKR6KxZz0zkKdWAtGMvfcTX327aXob39maJMZY7BXV5qL9nH0Cg4/hVsnSWPfzVkaI9U4/M7Z2jdP3wPjvqNz8UtXKqj+zi66X9Zegpy2+OLMuVls1KeLqDt/J0OVmKKcdgDIpAPvnyTJJL510aqhVYD0iQe6juwq5zDIgJUYYA3GbNDwzlpgAmTQEvQCbiyQAkDX8GT8719cWN0renewLnQJtFfAw8AkZZAAlcA9/Fqscmw+efFypbY12NXNOad6kmmBmmLTlZtu09sn1ihNFwVJFFcfU5hy4ZfwigcSp6uWcYdzbkZWSwAJ75b+9Mf7N/Wi/4G2RqPDImJZiBQ2zBV+7AgvODp8DLCRxn9Ck47wTs5/eW3h5LV1G6LCgeEssMXcajziRIeTA4l6vISvA1ZqGBBLKnGAq3wKgEZMcHw+ee7S/Mzm4oF+rJvvcsoxZCBbbnwMTuS07XGES/AxpJghjZgJLAcRaAQKVLyVcZwwnl5gYquFlgDSw3s6HtrdEeGTqnRHihppfZooDEJ/MAzajl6mRYhGIzBLbk4mv/ODytzCOpgHjgGlAzbt+aBciLCgHHCOxzLAkgK3liQKpPkaVxqanI8Bp9V1KJH9lasVVBpYcufp7D6TsgirRPRtfJEoS3VkFefKQf3bcGJB0oJr87cEkD75YM++zZjljeAa3dEpWoxHgAjh4ySTOA5PXKtdGV+HT4OjUHxvti0XdBajjiK6QxE+hI639OqBFFRrCTwSprTh1SM8Yp2uJhPzyepGCgHC14f5LaR9PejY2rNSJCzGg3EsFFL1GH3ZdEQ1S9r3cwpNZVDhJB/M1DgXsXVC8wOpuz335MGuMptXb0AUJNYv0RLAwhUfBFoeWyXUlBiFWX/71MLSBbQatRKUhc5lRz7A/ANMM+0UIJULBBImVrOnx1UnsVJKUq1hYmiC91IBpGIuaVuAmcboqq0OS/BLL18FMAv39XGdb55SioQUAExf8lMsLE2XlPq8oldNx/tL6JDOtNL9UvMD6cFdHfdthztCEys2dKstjuYGAbOieSm2jC/SBMgm+IZxcPRSdY0LkKJ8oAh35L1tEVaB7OZrefq98RBOCbdJWDFCHAZukLD8Kt/unltI2vIJ+kqFHK8BwBKGEFaHJVwFjg5zPeIDfXkMPsjJL4ENvY1gg4R1PqI40QwxJTg0t1WLC5FlNF1iKQqTXDLbMu8CNj+QHtjRvnuozIswQYOd4oUmISPdBJCxFtrP4ksw4pNzwY3JtfZTMBcLL0FxOlwbllONeuGU8FpeIewohe2FpFTArOokkhdegaIKfFElnJ6Hs4qjKCpEBBLqhuGHiQVTRcQbCugovj6MAoIHBrjWVgYqAh6oQBTjkGBAJapxidkjSqLNWy+meWUtvlbBUpMDCZf5g9vbucrWbTtvMB+YBAJtgrbEqFxdQSchppNdGo/X+NYAbsBxF9RZDLGkFvADIPWU4JrCbvzKSVcpKRfjUh5AIkgWquF8NZyaCyfnovFZZMX4XrwQh9UkQjXma/HcagfF4JeO3yCWDsIv0f0t61sy6Yq3LEiYYgQWX3JEgw5yJBKcNa5WCSqswqLn5tw0OZCGeooHtrbz8suhZhggBpbswDdtAlNptOnR0CBEhkDiaHCY1GBokL45Fa/xBgmLTmJ0TgYY+HI4fgBSXzns64h7O+LutqSjGLcVEgwr4tiVaoiVVtuLEVJg7zV+SBY9vQA9TKw72VUNKnOr72bCLwFLsOsHBtOJPYoNQlYDEAYCVSHQxBcyXWhsLI09xGqSDhocaI5b0SP2Om6vfqnpsdTkQNraV9o11CZtv+zG2IW0/tKLploFBtBSa1q2lDsnohT068p53CDhS0SYUBN0lYLutqC/Ix7oirHtbY87Swlgk8M9egIgBdMV9PcCvDoF06xUsRxyOLsQwRfNSgkTlWB+tU4JVQUgT97kpO2DfTncLy097TufziKu6sjp0XGzxaIriWVaUOdsopNsDqLJgbSpt7h9oA0Ty/S5qjolXjPhneh5+I91rk26PpxFB4tXfFxd4b7Q3YLfiLgC62oDshY4xh3hqRHGu/HDG3jd7Qnw47DU2RbkCsWAfTuM2VU7KjUu3IOKJCE+/YLZSVMVLHqKh0680Srnk3kOaK8+wC+dGOHYw/0DfFYrZbETS42IUtwWPlIdixyM/TR7VGqOEez5rzQJxEV91KDpPUZBno9y+XzZ5bflNMm+yYE00F3swoNP07JoRGlpbvCvP7UDSdcUmAQMQCEGMEXhjr48XrxYdYClAhXo4eCHeQwYo2svwiklXeWkp5z0t8fdHVGu1B4Wy0GEwyTJQqU9PxOGGACPcbM0MRvOL0RlyYvsKEoWmkstenUVQ2f11E1gKcGz2vT5kioFXUkQ8sEYZ/dGX7bzZqIQs51jm2LAg8uHqlvTUUmcG8Yt8Uzblbm6mt+duZoZSGjSzX0YhtXLIvSPNuWWxiAjdpIi9wFZUFFe25o2gNDXkWvjigirDDApXPaLGMWOZBIDwFDALVDQUUw6S7WOtiAqdYTlrrCtI4zyvPxXZuGM2pK4q7IwVYxxs1QuJujmYYgceEZRa3GP2XOAfzh5k5PEMfbA86Rm0guMAkC2qUaQPZOepTN568BWl46hfKh2oRmR1MxAai/mBntwS82mF3CAgKFmLcEZhl49uRWYuWXfGC0Wwn2bCu9dX/2EVVyM4WxgRvgBBngulM8lxQLui9CjK4SFtrBUjtq6w2JbgHGNMIprtTA/Vyws4MYJwiIf4n6Gv0imAGYBsQYagy2nbnLO9r6ePCfKKU4UCXV4sJjhPZXBAfiLgadZ6h8oZdUNGqpAx291M57WcKIbnnUNff8Nr9taD1DCQxvcsxsb0DN11iFmwEYmYS7HlNSgrW/oQi56ck+R3a5VBZaFWw2+AcS7MYWTARVe1UW/Cvf8+SJQFJY7w7ZO0EEuj0SM3Tth5EVNsUUtpMqrqspymTDscOJG9d0xPAcGAkQTVmWqBdnimBZLlnCFWdYyMmnejJoxhtl8ZtfMHgn39524QUJjSkBTSpdN210vq6DpheQnt0agaQ/S8bfp8CEfO1DCRB7MFXLWs3ICeXBc3I1wa2hNkdloTI+TuJbUMMJdCWpVzO3jkAMDBSQvt8iMDS7nmrLyCryvJIo9PcopE3t7Me/BnLYoIuO+NT3lqhiUxaohUIkpl+mqVrOtv5UCkHAizRSa79KQtg4u9AXeT2Qa1LS2GAmb3f0gBB5CRtjSGG84MFQ4tFVXFUnLXyFF6xdIYAskooNYqwX4dAVG1Ss1PKyqBrWFpDKXzE8m07fi2fGkMpMszAfVCsbWIIB5dxgYALiYl5izlrvCw69MTMbEq2dG4ZcyWnHqEe1Y1UBrVjUZYtFxlpWR8sQtN51TamaPJE2rbYfrI2OIyGWdpKXR4uAhJnzQStBa7KU2CbEm6996tuOtqwvT85rI0lYYkAFf6wIeMKcAP5mNGuCNjFlMAprDFKFaR24ah4rjGm+k4IeAovnphfnKzFwwM48nSOFcBUN4uEfnkj1SiKnZCiuwQjFA6OwtAukAni+Z+yVowTmWLE0lUYOiuFTGpDDd6i4jk+GC3WROqZmBhJePYBamVdG20na4FNI00LPg7YA+XxJ7oMUAZjK5AA+UeFeNdJlbFHK84ZmDbQeG8kcvNvxOEjyJ+B++GYFJdNji6er0fDQ1l0wUIww55ML5NkxGrVaSCB0rvNZXWahUJmcTzA/CRKGp+WimEmEOq+ZFUXOccbEhWMKwwztjHHvAfDyevQTVjnRd3It9cnx7TaKK2Q8VbKX14jXLDSpAtzqeDkKG7ijnrmrmSPfyrpmBhPfCZ3Elp0VIw9+2ncBFWCqjKYa7uSf3V5/qOHEZd+W3LWhZBsTnq+KIFpK5AlCUTFWStrmwrRDlc0BshM5e10JcKkzDD8AeF6r82t/ETDQ6Hd2ayeE50uR8gFz4YT44itrQTxUB9u+N863c/b15DIoTHisJS5UnuZCsv6VlaPpKy1+a/y5LWe1Q1F12GstWBzfOn3iw//EDPcJFwyHoFntDyI4XR+XaVO75n2lnDKB1l8PjlysXR911VjKtZIPpmyGm/OAREB/LAjDyOix9IpCDAe/5BYANkxg4V3V8NhybiW4RRYKl6WhyPsF3XCbm+UrS6HyCNYoz9VrJ4RuTgRvH+xo49373mU1bgDuu9oBtst2TbVQoSdKZs8zM3uAToHUFZrj3JNnMQIrj5NH9Pc8+1C9tq01mG45NubQZhcsNWNxljQLRnnLU3xH+2am52Qb7d1KuPkvFVAk8biWOkyTCu7e1ONTp3rOVCL24ydlobDYaFwiNzuQAp9HZZLISY/HHiUoCIN2Yjdn32uCAI+CdXCAK702htu5o7shCqBKVuYzvUhllk3aZJQkxlF+fprL35LapgYT3BXZ0/uiTm1JD0DbS1uOW/8LNNChtXDlm5+LgbO2BccevnW94rhuMBtn5XEj8kB6kFkd4+2i+hnl04o7m8eoE5wTdmqU7Aoom5pKx+Zp4pHi8EuPDE3jt9IMJ6JHSLwUBXp1yUOIbXJmgWlM1catxe/0xMZEnrXlNAQQeTiUrkyn43iObGUhojR2b2n7so5vRp5KW0VZDe0qTmjbEzqQbGWsO2pi8+zeBuQr5YEtPdPLywqVbjXXwUApGveGJUAh+gBVHtDmOh34dx+WmKzoCEY3zNaRwYg4vFMZwC+jUTc3z+3xY2huW7Wpja7WBexwLFUAHDEsTYxgEgYcXQo+arYx29pCiPwqrkGSwtEnCDsX6rl2qjruc6ukofPKhgcFuN1VOGhSbbK8kPQdyaei0F5FMWUJJ+lBXbltv9NyZyuTccjKLsmSiuMZjzI0owvuCMCMYE/p1eMsI65wsYJ0TvD0RTM1j2SCORqAjByNGX25MOnU3ZpKbcxiG/KADzlD9Ul+bTFqsP372Tom6SPVh9OsS6rksZdVLI9VX4W6JNblHgpo/drjvwPaObCMb3WfaNuN2RNBcdCGhluAIAWAQ7BrIYQrpy+cqeNOuoQAk4DksrsSYuYDBOjxfkkFtfgMPg3JY6gQDCVjLaqoS48uW+AFL8EWj/Pry+6AIVR7qDPb287etm688yQPfhmp3W2GgGnXuKWKMhNcZJ6faYbROg4a/WHcqJ0xcR/B60gd/XTA124BdMw9/Q13Dt+ZOX5z+0Sc2oanR1nIFlfZlHytrE6CRLltulKVbpOL6KiySJDDs9tc+3n51vPr/fnd6huvGNRAw9xnXeK5twoFsWY4LU+0wrQ4D4VIMTBaPRbkcVzWYwDAD1rXD0la3P0K5EPzQ/uDx7eG+gWBrN18ZxJmMzweXJ8ITw8E3T8Un1/wdJ9j9uXFMqwgO9PIWL6sd0QhfNqpPVE05Par2zDkggitIYz3j25/+XcJpco+EtsebFD/0kU0lrJmAwL6ZQAZYUdp2R9C6JhBQ+BdJJlnCpokkZmSHD27Lw1eculptdFo4SgKc8IUYuCDAiXMd4I6w4AnfjeUY3fh8jPW78ZvE5KHbvwzXlg/+/MHw55+JfuaR8Nl94f7BcHN32N8eDHYE23vDB7aEH9+Xe2J3tHswvDAajM/ZE1ztHh4SM66w7ATAk9GLKY5qkntPxlVHhsOdVSJ5GHXE6kJ3uDRk8t0zZJMDCe2Aq/vHDvdvGyihMdUC2Di8qiK49iWRdk/komsFKMl7GmM8moWR9iKwVLhyq3bmOmfWNBpgSTApdOoAoXG9I6pgOAGjc+zdYZEGjAzewdrQkfvfnw3/+hPhQ5vDzhJPCHXiVn+ojSyDvLU3emxX7hMHchdvJedHGq9l5qyQGX089O74vVqjQGVTG8sFm87DGhqKwuWj4UHP5Uq/q9KaH0jjUwuHdnd95EAvZqaI6s0zIuOdmGTTlTZeC4manhEwCU4+6WoLH92RvzxWe3cEI3DM32hAJqBFtyhBaUTvUBhsGDdCv/jD0WcORliHSJEDhwsC49RKaCKSYL+YvLulN3p8Tw64ffc63rpttI6pPGqI3iYKBZZQstYz3cpzoTS6RADZp6sxXHHzheYHEhoP0HjqUH9fVxHtJxdGuXqTNpdJaVfSjpHS1qIzwrQhLQkEPqf5yI7cOzdqmPGAY30AYV9/8Cs/En1kW4SlIEylARg850WdUEt58QnpBBGS4EGYGmDliaf25zGd/NilGgYPVx2IpXm+u4e1kNzzJRzNnjprZGmQjGrAcP9UNW7Wz1U0P5DQipduzMEjHd7dSZNi0H4aiUyza+s7fyViWZMw119Nh4FAXq7AAZZeCJ/YU7h8qwY4mTsvSG1M2NwZ/B+fyj26LcKSQ8YLCX5QIZg1ToenSDgpwfMTIBFUeKXq8A7M7I5OXa2t5YMAOHPcLy3UEoxz4BGzajULHqtKoz7opMKlLTEmaVI2RjcfZqktASR4CjTtJx8e7MDtOQLb2QKGEW33TDPYwQa5zGa47mY6lSUXVttbDh/ZmXtvpHZhFDOTUvb6Ulh3/xeezj2zh6N8WRQ5CMn8I9ZHuQQWPJJjh2G5FD6xP49JSUcvxmvxSzhF3MhhUASfn8DjboXwIkVCBj+MxMxU45G5pCl7dK59WwJIONurN2eP7O3Zv10+fYk4r9QGQUKq7cs2Q4qQyrlUR6S9GUigENyuPL47f30yPnNjo/p4nzkQfvahCIMcdDsCYN3S/6hjUIuWuLAkTmSJNPJxxYjwwR259rbw5OVao2P3KCYb8DQZQ4t4rQNKwT9VQ0/NoRkMv+BJER6O4QnYmDyGymZsPrpVgIR+yPnhmU89PDiA9bZ1xhibXVGRbVaahIEZiPq5ZfY+QHOJJLMaAsba1x4+ujM3PBGf3QAs4esVf/vJ3P4B3pngWNhmnZJih1v9iYDBj/a+IC1wQ872Uvjo3jw81RvnqmsZe9CTx6g9PlyLQQi832FG8OmsEmAMELrD8D2V1yyhVYCE9ro2Or+pt/Tk/X14l4HWz8soArc0OCGUtoBhqkvPECmZjpjzwRQLwhr5j2zPjUwlbw+vs1/61L7wR+7D0lx0R4ol4gLHFOQYUDl0OZYwIMPKWfChCLxs9MD2fFspfAt+aV5OdG0bvKaF78fozAwM6GNYH0+WWye0EJDQqO9dncYzpa39+FjSopCCSgDlYLZYbNFj3EVsRRiw9PB2+qUz19ftfgkQ+OyR3MNbOEen/keMEFeEEDFGwqJIQaQZ5E7JZOYcijDEYn0f2VsoFqPX3q1isp8Pa9FAawFpeq528cbspx4Z7MLivwwZ/BgtCoTEQwmXAmaALhV3ueqJTD8Q43gYEx+dJpbW5cLcVw5+7L7c1m6BClFgRhDoYxQdTJSfJQAWZekOXCOh8BL84d3HQzvyfV25ExeqePXd6MDvGtdAawEJvbnLI7OlQu6TDw8IWBQxMCCamQSTXM+VPpRFjVzuIWvyZiSZaDt7HBN/aFt0dRz3S+vgl7b3hD+0PzfQTlDUIcehQ1DkuOKdBDsCG56AZrOZDRC5HEV0ZFceXzR86cwC1u/3YXUaaC0gQUcYjT1/fWbnpvKBbe0wKuuUlBCsyBBU9g5KNGs7e5k7q8V5mduijXmS7nLwkR05vG1xGn7pDrN95AB33mzpCp/eE8EvARyotYWDuQAwkV074TpCo7KVDOCKHEVBKk12Lh8d3JbfPpA/fmFhYlZP4c7V8dzFGmg5IEEBk7PV05emP/nQ4KYezHWAWRrTERMVBcHIloQs6FJJ8UtLpE0CxNjH2x7dlD5eo6umZKuA+66ndkUDZWv/UgPCiaBy3oVQQYpixHDNnRNTyZQMIiE+yiISk3oP7Sz0d+dePL0w13wz4bKq3Bi6FYEETY5OLAyPzaOD167jDgZKbqID/Y9BQ53eIaeiJoOJuhmtImx7d4hQDMPWj+7ASgzJ6eHV+yVA4MkdEe6RnNshYtQ1YQeAWIwAGoiqGGhFCtluLILSgj+WINIyvwiDmfu25rf254+fX5iYcSfIo/jwvhpoUSChg/bO1enZ+fgTh/v4YUzrlIy+aGEIMCaxJ+3saYIwsBERtTYr5uStjOwByAQfvXx4W3RzBmMPfJ9vFQEzeo5sCQ8OmPWHCA/jYgQjfNAqWDLpQmsKDkYIMUKP5BAm+RVRijYwC4XogV2Fod78i6crM40vhbmK82qaLC0KJLQf5lCeuTzdUc4/vLeLK14bLLl7ITaxAZRpbYUNIg4/lqSAzSjcdKBP8sJGMbsHfmkcfmm1WMI6Xkc249tKBIXAiNVz0GAa4ybREZImMYMckbBsgz/lC9IwE2/ftvzOocLxc5WxaXfKchp+c3sNtC6QoJP5hfit81M7hsr37ejALLU08Nmq2BA3GWNKSVI06CxXE5hogxmZQJTyeP374e3hrZnk7VVh6fp0cngo2tUrfsUCxjgi6eORlo++KLrEaxFd+ksHGJSBLbGnnT9S8uONk/qlTT25V85UpvzYg23MO+9bGkhQzeRs7a2LU3u3tO/bUhZgWGjQ8vGvd0okEF/kZzIje+RKVAgjzLRMYCF4vfSR7eH0fHBqGB+0zDBXQEIeE9jw9gRm3lqzV+O3XTOHLvoWlqh7BYscgWghT9kcu7MQsl0+SaLU/u2FnUP5Y+cWxqYarOgKzqX5RFodSGjRmxMLL58ex6dm924pY1Y10KJmxsZWXJhmR+dNqWXR4gYnLDcdKJcUmxdYemo3PmkenBzm0sQNhasTHL4/OIgPntubHR1vsBBSjHCr6QIT45q4yww5aBSIUWmTkxASXAb4IOahXcVHD5ZOXawO39rw10Ma0sNdKOyBxEYZm66evz778L6urf1tcil3NzxgOoRQUrgk6kGVTRFaNuLBNFpXCL4Du6cfSxMnJ6415pcwq/raVLKnL9rRy0/3GXeSQQvQYfCiqCFwBD4SJQWgUEJSseXYuaUXcSV980B+sC//5juV0Unvl9KWXUp5IBmdXB2df+nUOJ7S7hhsw7vZVlPGj2SiAon05icDLRikgZfL5cphAYYrefEN2cd3hr3lAFhqyC9hteTTN+LNneHWLjgN2j7/BBrmKWu9jyJyBCkUAzaMkMkgeR2d8VeaBx8IzIUHtxefeKDtrQuV4VHvl6whLNl7IKUqwcOl7x67dWRP1+6hxbNaDSBSv1KHEFOEpMnMccdNM1gPBlnDxfuqGNEu5pJXL2EF/bQa70tNVYI3ryU7e0P8+CZfPXLEr/AY6nicj5J0YIbB+CkIaSoQltJLuFGwuT//9EPtr5+tXB5ppKLveyZNJOCBVNeYGHs4+u7k/q3tOze1ZVYkgIdRJ2O6fNbzmLwGGXQ1VqyuVInISKDATGVgugnWCDu4iaN5p4YDwGPlAX7pzI1kU2e4vZtfd0ZZQASC4EKijBh0OIIyihyRNWxBlslJLpMlagDKTFHY25U/sr/0g5NzI+NrWPCBx23O4IG0uF1HJha+d2Ls0M6O/VvKFhiUoXkZCDi0ZAhHqiRFTZLt0WUPlHJL+eDRrWEpl7x+OcASXCsPE/PBG1eSbT0hbplwv2RvjcTfEFcMLlEJAonD/CmDlRVJk5+gEa7LoF1B2W4ZzO/ZVnz++OzkjL9fWtxQHkiLNYI4/NKb56aePNi9pR+T8RQP2LtRu2wWwyVaDGnl66QkkZtMZ08ExHST+4fC/nJy/FpjfgnAOzOSYLkIPFzSsQfBBbBA2BMLxqnwSOKKmAIGglDSixM5iZsM5JoMmg2ykOSwxK4txQM7iq+9PTfmxx6oozR4IKW6yFLwS29fnnloT+eWXsWSwgNbQ4itZXKQk3ItQ4XFaA0JjqMcERQjzAAKsM7ja5ewzoHNvYI9/NKbV5OBDoyJ0//wfkkmBCmKFC/YpqAiJUhhqsGJeCGhhUvcpPlF3kjiliw8sKs41Jd/6cTstH9Wm2kgD6SMMurJiyPz8Ev372jf1l8ysDGWrztsFxFpfunOWa4M02VgpmKWa5/55sLkwKCO4zXml/CC99sjeNTLVSM5jmc7bg5FQphuHmj6JjqlFEVAFOP8GRdmuMSlAElZ2Ep0/45iX3f+6Nm5Kd/Hs23ugWQ1sdz+6mjl1KWZx/d3DfUU9FvCGSkaG4PrrCk0UoejfCMloqApZO6aFucNC3lMAsJsuuCViw2P450YZh/v4Cbp46WIcNAgQTjgJ95GkCM4EWyALR5NJQRX1gtpziw3n48O7SstVINX3pqrrssLwKKde3rjgfQ+zXf1VuXoe1MP7Gjf2ocxccDAeRLiIBNVPKVc45SYIGKG0Kge1AmnBG51DgyEeBP25DA+lKRiK9rK86UEb9Dv7cPHatO+nIUJIWRogRQvA4IoAy9z4wQgEXCLntJmXJaUEmFhvfC+3SW8bXHqvbm1rI+3onO7F4Q8kN6/leCXjl+Yeer+bizlBXuTDLrldXy5/JLIl5RSbuqFJFEYjmsI3eHLSxh7wMpeL19obBwPD3Zxv9TfHt63ieN4dD76ZyBEJyRuxu5wPAq5qNLMRCxhC6RZsDGuKUIg2t4ePXmk/fh78+9e8m8CBh5IywFhSdr1scor70we3tm+bQB9PMsWJ+NiuAsS2rkXiClt5c0eiXwelWZE79AKKt5g7nv6g+3dIcbxMJyw8oBFsN6+wZWEcb/UhpXBBSPqiLI9NQMyBYmyARMQhiZmtAdokJbloiB7i1Uu5R7Y2/byydmRWx/AF6JXroYPQdIDaUVKh50Pjy2cuDDz2P6uTd0OS2r+AgxTDGhFk4GJ6eCBSwel8og4ELm8jhD0hXzMum8QY+LBc+f47b2VB/glPF/qKAWHhkI88KX/IC5SAmDROK8Ijm26djbFQsVkdlyLNMEoix7oyx85UP7Oq1PjrT1J3ANp5SYaXB9fePnM1IGt5d2bMI7nUKElLJr0kAFG3REklx0od3gSmBk5liwPpTACt7sPIsnl8cb8EoB35gaWJg72D3Lh/AyQHHYUXmQZqGCXkWNVJMFwSQscAUESpPkHvxVFQ/18r+OFo9PVRgBfp5V7P+KB1EAbwv6BpZMXZjJ9PALD4kFMC3Ed72bBDmyCjFSSvDouYizFiFleCL90eEuIL/A9f74xv4RPO79xmQ+mDm0OgShj/KiguesxfT6Bh0k1XTsCRITghbK0FqHdP3Fq0vdjOViEaP+u0rmrC2+fn0tPHefQSsEDqeHWvj6xcOz89IGtbbs26cfSrfOBEYkdWVxpybgXUjiJGEmN1h9X8kpGcpFFLRL9QXTP4JfwGhLG8Rrq42GF+7eu82gYE8donkGHlK6gwHF4RGVopQEs03kTOfQMNYqYgEozMAvk6aUMUW7DgHjbi8dmhm82Ms2JxTZJ8EBaTUPK/dLsYTyrHdAlFGhXDClOQNUDxsTcgITGHcyy4jYv91wjGX7pQXEsbw03No6HMfGjV9nHe2grppmL/StSBAVmCI9QsXBy90JEVwYqCiflymCDYkmAJH4Ls1p78qVS9K0XJ1e3uovq797deiCtsu2GxxfePD+zb0tp5yDm9yCkvTJEDK4sloxTMlhyR3Rxlzc7lGfEdKkvgAHvXABRx6415pfwgvrp61zP/oGhoIxREpi9/ZFycxoENkihhIMWJbNR568IHhm7E7whgn0u3D5UvHqzevzMrDvD1iGaH0h4SQ9vpJZy6N6ERTxJjAK8Z+pMeC0tDSydvDR3/7byDvglFMRCtWBXvAXU8lxz8NB4KZeL6cAeMiMJQFIC5n0/OmkFPCxqDEuY23rsKr9O+5HtISabC3ykUNZOkcO9/GxfzgpJ1064OLxDnRO2hI6bd5SjoYHCc29M35pouWGHpgUSjASeoj0XAD/lfAQg4blKWy5sz4cdBdJA09o7IdfHFl5/b3r3YAn3S7A0CQ5LGYKA0ChFxEFluEhKuS5dYGQ47ODhB790/6ZoFVjC/dLpG/yc+KHNAUbGaf+ohnoe150jVARX5AmuRECckkkxNNP5w8ZICoH4QH9hbKr24tHp9IREKU2/aU4gwQsBMCWZyYIFRLVXTzvBJ76x3FSECzPhBHRVaskav1Q5MlF98/zs4Z3lbX0FWdMLNoVAG2OwnTUT1UTHVUwt4hkZsXVBEwzUwQtzcw4MBF1teFjUmF/CS7h4vIuTfWJnZMfxMngw2CA60q4daoK47fWxQgZpyKi0vAiFiM1VyEfdXflXTsxcb7FRhyYEUiGEL0rnbqLFYQxoaP4yNJ7S0EEVItw/4IK9ljA6VX31nZm9Q6U9xi8Zs8fhBAiIOiDocTRFu5hkZd+cteCTLOKIyFeCOXghwMQFeNrj15KGxvFwv/T2jWB0NsHtFmaLs3qilLT/JnjARoChW0ESUngdohItl9rUCK9PZFEeqINTwtjdD96cWuMVSjV1r2ybDUhAEe6CZIBKDcW2PltdftwYFtodH1TFRAVYGCbXrCWMTlaPX8Q4nvolHEFCtn+jUMocQ0zPyKnjyTCBGBaioxQCO8Ea48yHauMFpA7cLzU49oDTxNAfRvOe3BmWCqILOhmDGUICaYgbLyTpiFuckGkQlWZhhVLlhvhseldn7pXjreWUmgpI+HgYOnVqFbSGtH3FJhHlnTs5jiVPSrgOMGweRrbE2jO2/X4k/dK7s3BK1i8xA9FgApChxcuWm8zRUtJQVpiZkSQ/ppFN78THrPv6eSZ4gaIhj4qrBuY9jM8Fj2wNsZCyYABgQrmiL4GQxKhAcg3TapNplsUsmaikg7upv3DszOybp1to+K55gIQzyaCIrctmlZ/aBmi94EoPxbEohm5eVwl9vKShVRNo45kAEx8Rv7R/SwnjeHhRT5gCAVAaS+UZF7QYRhY5Vljy0gdxpEGnuVonJ8+Xclwfb2SGwFhcfHqgZSh0CE8MUwOP7cSHxgQKRlPSfwPHuB1Rn4tSfbwpMjedqJeo0ghrlFy+SIt1HZ57bWq2ZVbibxIgoYnzaHRrM7ySSgyEoEiuopKUZZGWf1pRFHTkI5grXjhdS7g5WXv1vdnt/XnACWaGIJtFaFHP4o7joiom+DEZIZNiBJiyERL4lXMBFuV663oyPOVKWxGBEcu3Rzj5/8EtHHqhvhRLoHSYW4tBItGif5am1vS+SISFqaBCspbT2Zn71guTrTPk0CRAgiXwcmmDmgRa1BJsXYEMkUOaW5qqibL56dC6ilEcJJiotpYwOlV788Lc7sHC3iE3Ji5WjyMSBxYLKWGOJubp+EaMiBEG9qlTkhcv1DvhxViY+quXGxt4wCHxqRg8ktrSFRzZJiqhLiw8QIq3URRRZYjqNUlVplzQ4CHdRIWAU8LXNzryL7wxc/rdVlnYoRmAhHNgO2ZsX9qaTQxCAcYGp9chYPBTFvbCpZhKok/SLi9J4JFLpryGyVvTtTfOz23tKxzYXIzg5xgIBOycT9FE26Nj101TZJvdyLCD8Clh310CqEyGJMACd6dvJOfHsrlWRGNMHON4+wfDPQPsj2XxQC05tGQfxQpsRGVGwNDUoDQD4hyvD2/cqr58bHquNXp39zyQFAxowbqgDWogwx1/ctNMQkDFHJrOLYKk44OqYYjvgsFGp9eMpeOX5nTsAb5OQaQ72SoKpBLY6OMmuR3KcA2EWFHxRszjnimlBN/hm5jDtLqGnRLKG5sNTlxNntoTDnUBLixf8UCNyOEUTowZlurLwoyXIlGfRRFjcn3Cc4U/eXGyRWY53PNAkusjDSAbGDUgYZckpUlqVJBjZNQQyIKp0AxCPq6txElDKwlnK6A0+nhH4Zd68/uGCngQ7HwO68BgPAqdEkn8a4owDW0TxV/JhsMMYPJ+yRCIcurQK5eSkWnN29gWuWYrwVN7onJJunCiCOO+LTyka6f6EjVJ/436gtpk6FN1RxfPLAxdnfmvfHvs6o21dZQbO5UPTbo5gQR1CiS4U0JtQ7bKQmOTMHZCuRRITI/C7iKxtJZxPFRjdLp29MLc3k3F3YP4TgqOz6rJ9raEZdu9SCPCuP7b7iBPQAPu7krhd99NLjTeu9MCzo0GWLT1EObFcuiT2KBKeFQTtXoUlYnWmAKCzsdKMl1/9P+lYg5AOne5kbWYzfncezuq4V4P1prqzsNcyfWaLVd8kAiazoR6lk03AthhAsGu7lx/mzH/utIbiZy7vvD3v3T9D16Z4iwE2hm23CshOxSn8SXl8ltNJgMoMW8jqgxmEAk8hoZTWnXAC+q/9ae1E1eShJM8VDmqMBOF95N3pCyLTCZRX9bVmqjm48BIMtCLF3Qh0PyhGYC0fCuhObXRM2xtYrb9YpbE0eRk0WBUEoNuu7tzfWvDEoo6d2Ph174y8rWj0xWOreMwUDtBwS0BoVd0JAjC2LXUdNlSzAQBD7Bl4RUm6hIkX8I7sTWEK+PBv3+pNo0VgUQJLEnQY6OiEmWRTDifHITOpXeSIo0NEvCPt9Dp4logNAOQ2KxLAtuRP21QNQlChC2+hAVjoD1g5NuwUgIvqO7tyQ2UYatrChdvVj//eze+/Jr6JXEjAgspFGVnf3oge0ABmsWY3SviuBVQiWxD8+6WngzO/U9Oxa+ej2sYJUAkpq5UcdwaHYlGGYWI0CiIOlXNLhILutpzuXv+7mGpqpZJueeBhLZeeaBhyM9lSbPLjUcaVTEaCye27enJ95fX1MdDORduVv/hV27+4RvTMoahOFFAOF/kCAWZcDMYI9qkg0d3Bia2lsD3/8bm3Gmtkrg5E/yr71TH8Ownq4hFhYHluFkaYi7d0ngFHe51UQFNGW0GIOFauWygk9FrJS6v8qOYtL1luQRrAy6LiGnB2KKPt78nt6l9rTYBv/SFL9/8r69PV3grkmKBEdZFy8dWUaIwc1vmII8JCVrO3NtjzC4Mjg8n1ya1vixodQHTHd64lBy/JJ028UK8ZXLKkhSjwSwNARWDFkXjzCK0jlysrjL3Vq5mANKdzUeaVBoFrWysIG0jw5UdbUAElJ0KSzr80t7u/Ob2NfkllHx+pPqrXxn98ivTnG8ukFFk1G1ZA2LGBaEFRA5WGQI1f+FCMDzpxFdPTM4Fv/8GZu/KOTt9LNIFo/hXbQpBSatckvWqJK/Jwz0PJLQPr4a3aSZtUzar/LS5IYt0+bG91WZI8Wd2hpI4aQmFfLivN7elY61Yol/6yugXX5xCHw9wkLIFJKQUMhmUiAOyMKMARWWnBGqDuXYvnEtwa7P2gLnhb15Kro7jfUerEsWMFC0kDiNHooDKGEm5qYKcTQyShSqLaYXQDEBCS7H3sWxz2SYm094FURL/YNXnkjTDAo9RK+BYfKmuJw8sLXu0lSdeuVX7ja+PfekHcr9kxugy4OGYHgIxpKgRGik6mqewkmGGKIDp/9eT8bujkmM9Ntcnk+ffjaV3ZnVERThaVQSVGC3KTrhMAiFb2UxM1VrkcxVrNYj1aLh1KAO9JDb8kuDS2LjKlZZOo5KeRtUMrLCmM00ojeIFiX29+W2d8l75kiOuPOHyrdo//sOx//gSsIQ6CV7E25DKepxFUOIBeKukInEcfO1U8tWTy5/+yiuTlbw1G7z0bo1jdxLc6RMkVhWiEHBEM4yoqFEUI2QlY5O12rINo/JNtG0SIKFF8IRm2Q6eNL6Bi7a7bXaHjjquNq7JhYhQaZQJCbC0vze/ec19vKtj8Evj/+XlmUoNuFBvIw+VTHcOKfoDbtBSMi1H+OjO4QcX+4OLyT/50wSjbesY8JkWzL7j+sM8bQcVROTkVSNCG9KIUVKkzQYiWFy/hnJaIDQPkNBY+CLCMpc/NGvasqZJDTCUleFqOk1GjGNRRpcLXPTxDvaJXwIE1hCApX/01fF/9/2pqXm9DmhxiwqVKDZEkYAqZI/uBxeSX/0WBuvWcPjbZJ2cDabmrOIsOqjHOlozZ9SX4UIWvUN4pNscodmSmwpIaOelfgmJErgXQ4A9mLa3LCuBK7yRMJKGgYwMJr/uwYJfOtCf39Jp59A56QaJa+O1f/L18X/xranRGcxEBU7oa8QXkRbkMC4/FA0CrxKF3z4b/K9/EJy81uDBViaOGYYjbjCdq73ak+beAswR1JamW65ER8eqk9OtAqQmfOyMVqXR0d5MMJZJk7SGKkncqNHSYHVFB6WsGPdCcysymoW5GMVMMkzGg3OYWqCtrTrgHbujFxfOjdS2h5Rb+QAAFatJREFU9uZ62yMsLyyolfLqy8WjnrMjyRdfj3/928nVDfBFegpYff/PHYp29OrZysmDQR3xzK0uTAo1nWFRNUEI93r0zPyX/3S8Rb5/jvVCmi3A8OCXcGLO29ab4p3O97aSNJY0QIySuDRzQZ/gPnzXJAguT63pvnqmkvz+a7PPnZ3/e5/q+B8OFXb0Rt14qQEGCiuVw2Fe6ZWx4NiV2r95ofbKhTXhNj2T21C4G8Ms2PqAWlgtZNUE2ibXySfB8XfmWqdr14RAQnOicXG/RCxpG4vFI9H82LNj+5toaEYpaCnC0BLI5Ss/vLiCJZ07Q7NUYTEdc4ii8P5+LEQZXJiwQ111NtVAZHgi/rWvTf6H56NnDhSPbM/hA5iFMAZAR6fjd27EL75XPX2db+/hoBsa8rmkpw1HgDpk1gL1gl8cxDIi4tJBSL+PysDtqaiJVxdMIo+T10/NTkwvOwC0oXX/cApvTiCJCdAv5RKDJaJCQMKtPFAiGAQGYDEh5qwbipFPptDcKrqW5qIADYl4w7yHBwbyHcXw7GhVpv9I6avaYLjs3M343E0zc06xuqqSVp+puxQMdcojBZwe1YOTFMWgSCFwWVEtGYUhUTUnkmBeu1k98e7c2heFXv05fLA5F/vvD/boG3s0tC3HHrDT1q8/mrQ8W58GgB+FjEQ9izbigmEhbnM5LsYc9vTkDvav83sDrnxXh40m4Fr3DnC5fbme4ExVO0vOWXVBlyN1ZNRVNjl6dv7GrVYZaYAKmhlIanBoTGBJm1qMnzSjYh+GRlTclGVRImWJvESZynzC1fJZkvywQ78H7wIeHsy33cuDOL3l4Jl9WFNJOnX23NiztbTVjomLTkQpRqvo2CUvn5gZGcN1rFVC8wMJrY1FA3DdBMFLrLS+IoEpJkG4EsmyHDebi3kkqO3QvFi6MTPcL+Gdi/sGCniR6R4NmzuDzxzEIjA8Kf4QqDRzuqoKPV/RGtLBZWdYZCg8OlE78d586/TrcOr3bGuz3RoIWBEI7Zp9dY+ZxTZSC1GTMAxaBbuFKsO9/mhZmkUoJsYyXGEE6JeC3d3R4YECFulvoIp3hyj6dUe2Bps7eUtIfaSnKucilwyTSEdvdQRVmWsV1fDC8dmT5+bvjhP6gGrRKkCCOvEONYby0M4a1O5tzKQrN8ty8k4yS9yOizW99vXl7x/IyxOhbI67ne5uC37yiIzQOC3oSQqslqk9HZf8VIVJUKkk331j9upIC90gQS1NO2q3TJMLlsI4wZoIuH6w9UNcRi0tfTO8uK1WoQPfWghTLAItl705uQghm81CKX59T1kwMIw9IOvpm9W5e8So4EGf3Bk8uk30gtOiyxFN4JQYlZ/SxI+4IxBc6TmNHnun8r2j6zr5b9m2vMsSW8gjQfNo7rkYs9SwZ0h3QmFjUoRQGtZCa1qOBWmaVloQaUYlBRz4pYN9hUODBf3KrHLu5i2GvH/+mRBOSU5KToWnlCGUlhM0p6oC3PKvWg2+f2z29MWWWMsu25StBSQ9c2AJC9YpOLATG6BVZH80Cvk5m3FcRQ+5Fja8n1BadspiEkIY7OvJPTRUwErIEr+rNz9+ODi8mUtBMqD+cD5Uj2zlrBghIScPCcNVMSaeu7bw1RdXtUolD3MPh1YEEqwBfS1iaWnDIUl+wuJGCJGTdBpPJtHQKSst06bxY5t45+II/NLdPSZ+eHPwM4+GWkmDFD17G+F5K41zE0UwZt07EioLybffmD16tiVWhFxkO60IJIWHw5Kx+Pq1uFSGBgOTEXNxwHAs5YpFYcOfhpQWs0MUM+Z29+Qe21zEN/buzjDYEfxvz4a7MEtVz5c788NJkJJzkZMUBjcqIQT5yckLlX/z9UlM4W3B0KJAQkujuWeq+EqfmAA2Yi1qAdZAjP1kzcKyJAOzSkYrYbiySw1PuLko2NObe3hTsXRX+qW/+mj4zF5OVDVnhFNgSE/Xkq4rLBLcqGgyV0m+8crs2Sst9BBWVGQ2rQskNQFgaRZf6oMxmPsckmo0DglIWfYuSC0ITArYHcrSqNOyicq8B/qlLfBLd9H9EsDzEw8Gn3uY39LUU8fJuNOxlD0bZYiSBHM6+wFTVIO3Lix88TstN1hn9dIyD2TdCS8i4JemqxjKM1gSu9GNCmZQIYAwqBCm0tguyWVKoAD+ectuUjBFHOsQPTxUaLs7njsA0E/sCP7uU9FQJyZwcxxfqkqapJ4AHS//5SdnrjxK67B4cP1W7Z99ZerKzXtkmF8qvr6blvZIqkrYAz6FNFflZZWWo/YjZkRTSU1I7IoJalTW9UDAZUm5Nqlu3gOzYNI0xvGe2FLsKn7IfgmHv39T8HeeivDxTFQMowb8ydnhvM0ggp40tvqTcxVciWokQ7UWf+3VuT85Otead0dqRR5I1AOsZwJY0j6eKka3BMmdggDvtgK343Icry//kc2FD7ePt6c/+IVnoye269uDdWdRd9bZSJaG1oi65Oy12m9/fWa+5R4d1WnsrrzzravhBxfBC3N4hIK3xxlkqA3ugw9VNCoVgT9Rlu6wRVQ5TNefSJAlXJNlCau3xM9s3pqLueTqBx529gQ/9/Ho6T0RUG3qyYrKqaIyWnOpOrgmQU+JEcmBi3AYXp1Ifvk/T79+zj3lpnALBu+R0kbHFXa8kszIKnPOmZiujfTZVFRZvDSztyNpEslylWY/yFDcgTZR6SjBgA/0F57YWsQXzTJSHwS5uzf4+adzP7w/wpwg1krqaQits1aUSZlKI0J1MFBKYv/5uflvH6tw7a7WDt4jLW5/vN8KL4RJPXi5CDz1SNjywizXbF6IJRNSAAZJJFcv53plsrJpugjq2I5cz6VAUPBLPaVoAgBe2ydrF5/GbeKo2P4BjC7kPrmPH19mPc0SeTxTPU3xNIYl50WhTKUlj3zB9hvHqr/x1blbWPyo5YMH0mITgFGgj4dLdQlT5ay5G0IgVGdUzsDIgpQiR7e0UyQJ8MjSqGY3dBDmgrCvHOFbZhOVeAoT1Dc4PLw1/LmP5Z7cKSjS6nHLaUEWVIgpLVUWdBmekdNsWCI8/vtfmn33htwqbXC17/7iPZCWaSOYM1ZrxJt5WIkBFgYEGC+kJkQoGFQoV02QydbsaIuMKaKElrySblnKZSzoKkZbOnJwhmMYiV+mRuuQhMdEz+6Jfvbx3JEtRBF/4m9ZpbSeqA2j4OpWCcEZM+gZYmz88q3kH/9h5YWza13sZR1O7O4owgNp+XYglmpwSlwhiKHO1BhXg0NmRGht8mMkZRlauEiljNqlZDJZpHjSGHjYgbUmo+DGjCxgv3y9VpmK4/70kehvPJ7b2cPeqFaDVZXz0ii2JCyXUcRsolZXPdfMQvBb31z4vVerrTzevaglPJAWKSSNosuC+XjwS/jKGAyIZqd2RvMzJigpKQt8XObJNcJ1LFqtYWXSQUJYWHCAQx38/PP4fIK5S+vimtBH3dkT/s3H8z9yX9TbxmMpbPSgOLA5uiUUS0yUOqVi4r+Qf74W/tvna//Pd6qzrT3eLe2cbjyQUl0spdDNwuK9mBBdiPjtiaVIEEM0HT9wYX1qgtYKucdrbxK1RmwMVCSRAx9nUSMWE8fUB3xjE2/X4gHxxHy8xp4T5k88vj36ux/NP7oth2+emwOxlnLnhuuD7d2p87ECBmzilGwu4VXj8Ctv1v7h16v4HpkPWQ14IGW1sQwNvzRbFb8kYw/mEk5TJLDof0Bnr9/CIhc2WscVMWZiMDkMhMhSoIIF51fOhTu6ckPtOcBpdmE1XxDDNPM9feFfeij/k4dzQ50RJtThuKm3kTpolJVBNXTLHWn8sz42qpK1JPzDk8kvf7U22oovHInKbr+5O6Z83b5+dwMHKz3cmIsxfbuTN0yZGuFBippdJi1Lom+WFc+yltLZjhzotnyIJfL29OZfu1Z5d6x6czZe4UfLO4vBYHv4zJ7cp/flOop4G4qHQoH6yx6XKTwB7MmVyspeai1PiUwiUnEip4aTL3w9vr5hC46zCvds8B5pRU2HPh48A+6XOCYuVqX+BZdqmBj+FDAaMxdyXNSZqhzuKGZ24gRMbClLy6YMplls78phPeTuUoRDo5OJRPT3skN7KLK9EPSVwx3d0aGh6NP78j91uPDAJqzwyDu7jGMxFUUJrIVsU6ckNWUieEu5YXD6evAP/ig5flUhRxkfshoQtWUTPH17DQBI+OglhqpxB08blf4Pbp4MLchhomPBLiM8KQpExqa7XDDaiA+sNAssmLTpgEnh5AqhrCgZn4+vz9RuzSZTCzG/P4sl/OEnS0F/OdzcGe3pDbvaQrgglhMlKBZEDoRJIS0sSSTLSOZyPG4qzDNKhVHUmRvBL/0RPlPrUXRb4/Bdu9uqZiljIQ6uYVX4JMBcBHaLZM0g7QxBGARpiZOW2Te4UCkhXPYFDct2CyWdmbhKjxV2lzfpX3FqthaC57YDZcyOEyQ4GAgkBC0yLVuFWaIUKAdAdkS0HNbRyjAdUdwImnXPKZflIvfbN4Jf+1by4nmW5sPtNACD8KEBDRBLMzHG07JWRRMVe6Wx0mJNSGmhaKB1LGYyGRazJBlsmLgrs15G0ymnZVgxHkUTZSsIFeRQTDBJSYBMMQSWYNtll9Jcmfj4xee/kfzp2brOJA/pQ70GPJDq9bGCGLB0dSa+NW+W/aDhZtZ7kAJoycaMxazTqBq9HkVSlSVmzCz4MbBQ2acpkiDJ5KTWb7AhmcQHSRYtwGxZki1ZCS0nLc1ykaLHlduwE8PJr3wz+d57hLMPd9aAB9Kd9bM8l35pqga/VOeYRBZ2KIbOndixGGbKUjs1SHE8EIY2uRjlj9CgbfOn4CFhuChVWSRAaVSSRF5zMZVMU7KUKPJIRP2lNOepICd0EJy4xvui584hxYf314C/R3p/HS0rgbnal/GB1DDow3SBiDc42nGCMI1YfIN0niQqieYuSLjKMsLa/bIZHcsclyCwZbJoc/MDgr0z2RIMOKJUQg8NmmNzVtgIIEElpWgjI4nuhgqJuEycuJL8+p/Fb141VfC799WAB9L7qui2AjA4fO4yinK9Jdyr0/4z+KEJ4x8/+eeGdm+DsmjK+OFG3/gJKUQkyYHRW5r5iAFBrAOMogKeioeisBQkN2yQJFeHHzB6aO/iBOFSFItEELEUhJg+98ql5PN/HG/Ex9L1iE259c+R1tSs6Brh3Qc8p8VkHIx6A02yEVTpnHFNcSyKICDOEWfu6lhkMk1/eJ4kg+OISzEqTy6GpyWRKbYcphPQmsWUkIqRK6UwL0itiaYwynH2uYXkO+8mv/Hd+PIEZXxYuQa8R1q5rpaXhF+6NFXLhbn+Mhf7zgrRn2Tj9bRy6zLUC2gMYktllk2kvDAcF4RNQRmMSQJqqRyTqIzpSvK1U8m/eiGeacWVUlU3q996j7R63bmc8EuTC0RRu0wm4MUeJsqt7hUJliaLDP5USqAiyRkWucyiw0GSwcprXilPCzFHYm4hmVeKlhSSjCvXpLN0TRfiymTyn96I/9MbyVRrfdaIalmX4D3SuqgRX7gILk3i6+Oc+lDkVyPFlGWnNyFiyXQEmka+3OG4w1sWJXjLZLkir2nmpkslIcAynJhGkRspmihbIyaHUVa2fHKT4L2x5P97uYZOHWI+rE4DHkir09syuTAF7vJkDavpYHYcvtVHE5UulNnSYvWfhHKBLjF7AR7ZNh20IE/SCAzDwi6bzmRThMGegkcTpXQBrEILR1HgyE64+DzUDy7Ufuf1GI+M9FhSot80rAEPpIZVdocMeHCJOUR4Jw+fGMNUccFFxvARF2hJkoETdxIsC3HneQgL8rO5LBoMcuS7ZiwQkiIr0CQNZGCUD2vIMll8Vx0IEywxm/zx2/Hvn6gNT2kV/Hb1GvBAWr3uls0Jox2dS6pxbXc3HjGZB0wJZ7LBsMXgBV5i26QUPxrFVn9OzqJL01mCCGCrY9zWt0hGPQayIAiKMlw5APNKfjrPqeR3j9WePx9P+xddl23IBhP9YEODCluZONZ7wExtrL3YUcTnwc3QgowDyB2/FCLjAhzI1hECoIw0WRwakEQOqUvEsJRvWRRGFh3+1kSzlexIF645upRJGlh65XL8f79Ye/1qssJ3nFZ20i0t5T3SRjU/sHR+vDq1EO3pzrXLG4G250UvJIDhocVD0LiRQpos7A1fuXRAwnIMRtWbYVKcliZRLdE4JScjh0EiBkOuTyVfe7v28qXaDf+WK5W1bsEDad1UubQgLK91bSqenk/u68/3lEK8mQS8KEQUIdrRgk+BlSNFg2EJDAgXdA8t7MjSux25IxIsSVxRJDdGKmxgJrPpiMMwwAKUZ0biLx2rXhhHz9MezO/XSQO+a7dOirx9MVgib2Quxvvq5Ty/5CVzDyjNB0TScyO24FXY7TKeCATFNG5lELM5VJ4lQIbpzE6CW8mFjXYUsUX/7fJE/Acna//tVBXjChij92HdNeA90rqrdJkCYcrnxmsjM/GBvvymcoT1GCAEe+buNkH90h0EkE8RYXuFGkUOTWZHspbEo9PJK1dq3zjLdX+UcZsD+uQ1aeDOLbWmon3mpRoAgjZ1RFghaKAtMmsqyBgDRwXQ9RN/IjSjSkgiWYjC22CVVPQi5N31BK/KIlHeGK9/n5zOLhmeSt65VXvuQvXaZIJ5TD5sqAY8kDZUvcsXDlRgZHyoPdrWmcPnxjC4p5Aw4BGcADVmrQXBmEEXWbIYnb5tnll3gYhiHizEF58drb19s3ZmNL7pl7dfvgXWP9UDaf11usISYfedxRBrMOzqzm1q53eKuEaQeB4DG2DGRlNWxiMtWtVkeDo+caN6biy+OlnzT4dW2ArrJeaBtF6aXGU5aAB8t08RhRUhscwqZkTAQWFYAguBA2z4CZwsqDAKgXsdaTegDgsbj87WLk7WrkzE+GbZ6Kzvxa2yIdaYzQNpjQpct+xACz7KhOW/e9uiwXKEFcB72iJgrJwHosxTXYxj12ocyMY3YLBk5PBMPDJTwwMrLMjqR7TXrSV8QV4DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DG62B/w5epjGFwdkiOQAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    `}),cg=v({name:"WalletUnisat64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" rx="8" fill="url(#pattern0_3417_1879)" />
            <defs>
                <pattern
                    id="pattern0_3417_1879"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3417_1879" transform="scale(0.00357143)" />
                </pattern>
                <image
                    id="image0_3417_1879"
                    width="280"
                    height="280"
                    xlink:href="data:image/png;base64,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af11usISYfedxRBrMOzqzm1q53eKuEaQeB4DG2DGRlNWxiMtWtVkeDo+caN6biy+OlnzT4dW2ArrJeaBtF6aXGU5aAB8t08RhRUhscwqZkTAQWFYAguBA2z4CZwsqDAKgXsdaTegDgsbj87WLk7WrkzE+GbZ6Kzvxa2yIdaYzQNpjQpct+xACz7KhOW/e9uiwXKEFcB72iJgrJwHosxTXYxj12ocyMY3YLBk5PBMPDJTwwMrLMjqR7TXrSV8QV4DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DXgNeA14DG62B/w5epjGFwdkiOQAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    `}),ug=v({name:"WalletXverse24Icon",svgTemplate:c`
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="25" height="25" rx="8" fill="url(#pattern0_3417_1874)" />
            <defs>
                <pattern
                    id="pattern0_3417_1874"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3417_1874" transform="scale(0.00434783)" />
                </pattern>
                <image
                    id="image0_3417_1874"
                    width="230"
                    height="230"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),dg=v({name:"WalletXverse64Icon",svgTemplate:c`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" rx="8" fill="url(#pattern0_3417_1874)" />
            <defs>
                <pattern
                    id="pattern0_3417_1874"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3417_1874" transform="scale(0.00434783)" />
                </pattern>
                <image
                    id="image0_3417_1874"
                    width="230"
                    height="230"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    `}),Od=v({name:"BrandDiscord24Icon",svgTemplate:c`
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
    `}),Yd=v({name:"BrandDistrikt24Icon",svgTemplate:c`
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
    `}),Hd=v({name:"BrandDscvr24Icon",svgTemplate:c`
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
    `}),hg=v({name:"BrandFacebookLogo24Icon",svgTemplate:c`
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
    `}),fg=v({name:"BrandGoogleLogo24Icon",svgTemplate:c`
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
    `}),pg=v({name:"BrandIcScan24Icon",svgTemplate:c`
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
    `}),zd=v({name:"BrandInstagram24Icon",svgTemplate:c`
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
    `}),mg=v({name:"BrandInstagramFlat24Icon",svgTemplate:c`
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
    `}),Qd=v({name:"BrandMedium24Icon",svgTemplate:c`
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
    `}),gg=v({name:"BrandNftgeek24Icon",svgTemplate:c`
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
    `}),Jd=v({name:"BrandTelegram24Icon",svgTemplate:c`
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
    `}),Xd=v({name:"BrandTiktok24Icon",svgTemplate:c`
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
    `}),wg=v({name:"BrandTiktokFlat24Icon",svgTemplate:c`
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
    `}),Kd=v({name:"BrandTwitch24Icon",svgTemplate:c`
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
    `}),$d=v({name:"BrandTwitter24Icon",svgTemplate:c`
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
    `}),vg=v({name:"BioniqRobot100Icon",svgTemplate:c`
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
    `}),bg=v({name:"EntrepotLogo144Icon",svgTemplate:c`
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
    `}),At={"core-16":[Bd,Vm,Gm,Tt],"core-24":[jm,Um,ss,Wm,Om,ls,Dd,Ym,Hm,zm,Qm,Jm,Xm,Km,$m,Nd,Ld,_m,e2,Rd,t2,r2,n2,o2,qd,i2,a2,s2,l2,c2,Pd,u2,d2,h2,f2,p2,m2,va,g2,w2,v2,b2,y2,k2,A2,cs,x2,C2,S2,M2,I2,T2,E2,B2,D2,Fd,Zd,N2,L2,R2,q2,P2,F2,Z2,io,V2,G2,Vd,j2,U2],"core-48":[W2,Gd,O2,Y2,H2],"core-64":[jd,z2,Q2],cryptocurrencies:[J2,Qo,X2,K2,$2,_2],"external-wallets":[eg,tg,rg,ng,og,ig,ag,sg,lg,cg,ug,dg],"third-party-brands":[Od,Yd,Hd,hg,fg,pg,zd,mg,Qd,gg,Jd,Xd,wg,Kd,$d],toniq:[vg,bg]},yg=Cn({discord:rt(void 0,""),distrikt:rt(void 0,""),dscvr:rt(void 0,""),instagram:rt(void 0,""),medium:rt(void 0,""),telegram:rt(void 0,""),tikTok:rt(void 0,""),twitch:rt(void 0,""),twitter:rt(void 0,""),website:rt(void 0,"")}),kg=yg.defaultValue,_d={discord:Od,instagram:zd,telegram:Jd,tikTok:Xd,distrikt:Yd,twitch:Kd,dscvr:Hd,medium:Qd,twitter:$d,website:Vd},Yl="toniq-",{defineElement:ne,defineElementNoInputs:us}=Ka({assertInputs:e=>{if(!e.tagName.startsWith(Yl))throw new Error(`Tag name should start with '${Yl}' but got '${e.tagName}'`)}}),zt=ne()({tagName:"toniq-bold-space",styles:p`
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
            ${P.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?c`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),C=ne()({tagName:"toniq-icon",styles:p`
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
        `}}),ba=p`8px`;var dr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e.TextOnly="text-only",e))(dr||{}),e0=(e=>(e.Pulse="pulse",e))(e0||{});const ge=ne()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-button-disabled":({inputs:e})=>!!e.disabled,"toniq-button-effect-pulse":({inputs:e})=>e.effect==="pulse"},styles:({hostClasses:e})=>p`
        :host {
            ${P.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${He};
        }

        :host(:hover) button {
            ${H(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${H(b.accentPrimaryActive)};
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
            border-radius: ${ba};
            ${H(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                border-color ${X.interaction};
        }

        ${Pt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${H(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${H(b.pagePrimary)};
            border-color: ${b.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-text-only"].selector} button {
            color: inherit;
            background-color: transparent;
            border-color: transparent;
        }

        ${e["toniq-button-effect-pulse"].selector} button {
            animation: ${Ol.buttonPulse.animationName};
            animation-iteration-count: infinite;
            animation-duration: ${X.pulse};
            animation-timing-function: ease-in-out;
        }

        :host(.${e["toniq-button-text-only"].name}:hover) button {
            filter: brightness(85%);
        }

        ${e["toniq-button-disabled"].selector} {
            ${Kt};
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

        ${Ol.buttonPulse.keyFrames}
    `,renderCallback({inputs:e}){const t=e.iconPlacement??"left",r=e.icon?c`
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
              `:"",n=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"",o=ye(t==="left",r),i=ye(t==="right",r);return c`
            <button ?disabled=${e.disabled}>
                <slot>${o} ${n} ${i}</slot>
            </button>
        `}});function Ag(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=ds(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,u=s.filter(h=>i==="+"?h>l:h<l).sort((h,m)=>i==="+"?h-m:m-h);let f;return u.length>0?f=u[0]:i==="+"?f=a:f=0,e.scrollTo({...r,[o==="x"?"left":"top"]:f})}function xg(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let w=parseFloat(m);return/%/.test(m)&&(w/=100,w*=g),w}let l=s(n,r.width),u=s(o,r.height),f=s(i,r.width),h=s(a,r.height);return{x:{before:l,after:f},y:{before:u,after:h}}}function Cg(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function t0(e){let t=[];for(const r of e.children)t=t.concat(r,t0(r));return t}function Sg(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=t0(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",u=i==="x"?"scrollLeft":"scrollTop";for(const f of o){const h=f.getBoundingClientRect();if(t&&!Cg(r,h,a))continue;const m=window.getComputedStyle(f);let[g,w]=m.getPropertyValue("scroll-snap-align").split(" ");typeof w>"u"&&(w=g);const k=i==="x"?w:g,A=h[s]-r[s]+e[u];switch(k){case"none":break;case"start":n[i].start.push(A);break;case"center":n[i].center.push(A+h[l]/2);break;case"end":n[i].end.push(A+h[l]);break}}}return n}function ds(e){const t=e.getBoundingClientRect(),r=xg(e),n=Sg(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Hl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Hl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Hl(e){return Array.from(new Set(e))}const ao="templates-container",Mg=4e3;var ya=(e=>(e.Default="default",e.Banner="banner",e))(ya||{});const Be=ne()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${Cm(`.${ao}`)}

        .${I(ao)} {
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
            transition: ${X.pretty};
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

        .arrow ${C} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 12px;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            transition: ${X.interaction};
            border: 1px solid transparent;
            ${H(b.pagePrimary)};
        }

        .arrow ${C}:hover {
            border-color: ${b.pageInteractionHover.foregroundColor};
            ${H(b.pageInteractionHover)};
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{Mi({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Mg)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=zl(t.scrollSnapPositions,0),i=zl(t.scrollSnapPositions,-1);return c`
            <div>
                <div
                    class="arrow left ${fe({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${C.assign({icon:ss})}
                        ${y("click",()=>{Mi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${C}>
                </div>
                <div
                    ${Ar(()=>{r({scrollSnapPositions:ds(ka(n)).x})})}
                    class=${ao}
                    ${y("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>c`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${fe({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${C.assign({icon:ls})}
                        ${y("click",()=>{Mi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${C}>
                </div>
            </div>
        `}});function zl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function ka(e){const t=e.shadowRoot.querySelector(`.${ao}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function Mi({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=ka(e),i=o.clientWidth,a=ds(ka(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,u=o.scrollLeft>=l-10,f=o.scrollLeft<=s+10;if(t==="right"&&u)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&f)r&&o.scrollTo({behavior:"smooth",left:l});else{const h=Ig(e,t),m=Ql(o.scrollLeft,a,!1),g=t==="right"?1:-1,w=(o.clientWidth-h*3)*g,k=Ql((m||0)+w,a,!0);t==="right"&&k>m?o.scrollTo({behavior:"smooth",left:k}):t==="left"&&k<m?o.scrollTo({behavior:"smooth",left:k}):Ag(o,t)}}function Ig(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Ql(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const vt=ne()({tagName:"toniq-checkbox",events:{checkedChange:re()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String($e("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String($e("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String($e("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String($e("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String($e("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${P.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                opacity ${X.interaction};
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
            ${He};
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

        ${Pt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Kt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=c`
            <span class="checkbox ${e.checked?"checked":""}">
                <${C.assign({icon:Nd})}
                    class="check-mark ${fe({hidden:!e.checked})}"
                ></${C}>
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
                ${y("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var Aa=(e=>(e.Default="default",e.Secondary="secondary",e))(Aa||{});const Ii=ne()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${P.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${H(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${H(b.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?c`
                  <${C.assign({icon:e.icon})}></${C}>
              `:"";return c`
            ${t}
            <slot>${e.text}</slot>
        `}});class _t extends Error{}class Tg extends _t{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Eg extends _t{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Bg extends _t{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class hr extends _t{}class r0 extends _t{constructor(t){super(`Invalid unit ${t}`)}}class Se extends _t{}class bt extends _t{constructor(){super("Zone is an abstract class")}}const x="numeric",tt="short",Le="long",Bo={year:x,month:x,day:x},n0={year:x,month:tt,day:x},Dg={year:x,month:tt,day:x,weekday:tt},o0={year:x,month:Le,day:x},i0={year:x,month:Le,day:x,weekday:Le},a0={hour:x,minute:x},s0={hour:x,minute:x,second:x},l0={hour:x,minute:x,second:x,timeZoneName:tt},c0={hour:x,minute:x,second:x,timeZoneName:Le},u0={hour:x,minute:x,hourCycle:"h23"},d0={hour:x,minute:x,second:x,hourCycle:"h23"},h0={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:tt},f0={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Le},p0={year:x,month:x,day:x,hour:x,minute:x},m0={year:x,month:x,day:x,hour:x,minute:x,second:x},g0={year:x,month:tt,day:x,hour:x,minute:x},w0={year:x,month:tt,day:x,hour:x,minute:x,second:x},Ng={year:x,month:tt,day:x,weekday:tt,hour:x,minute:x},v0={year:x,month:Le,day:x,hour:x,minute:x,timeZoneName:tt},b0={year:x,month:Le,day:x,hour:x,minute:x,second:x,timeZoneName:tt},y0={year:x,month:Le,day:x,weekday:Le,hour:x,minute:x,timeZoneName:Le},k0={year:x,month:Le,day:x,weekday:Le,hour:x,minute:x,second:x,timeZoneName:Le};class Tn{get type(){throw new bt}get name(){throw new bt}get ianaName(){return this.name}get isUniversal(){throw new bt}offsetName(t,r){throw new bt}formatOffset(t,r){throw new bt}offset(t){throw new bt}equals(t){throw new bt}get isValid(){throw new bt}}let Ti=null;class Jo extends Tn{static get instance(){return Ti===null&&(Ti=new Jo),Ti}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return B0(t,r,n)}formatOffset(t,r){return _r(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let so={};function Lg(e){return so[e]||(so[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),so[e]}const Rg={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function qg(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,u,f]=n;return[a,o,i,s,l,u,f]}function Pg(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=Rg[i];i==="era"?n[s]=a:N(s)||(n[s]=parseInt(a,10))}return n}let Wn={};class mt extends Tn{static create(t){return Wn[t]||(Wn[t]=new mt(t)),Wn[t]}static resetCache(){Wn={},so={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=mt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return B0(t,r,n,this.name)}formatOffset(t,r){return _r(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=Lg(this.name);let[o,i,a,s,l,u,f]=n.formatToParts?Pg(n,r):qg(n,r);s==="BC"&&(o=-Math.abs(o)+1);const m=Ko({year:o,month:i,day:a,hour:l===24?0:l,minute:u,second:f,millisecond:0});let g=+r;const w=g%1e3;return g-=w>=0?w:1e3+w,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Jl={};function Fg(e,t={}){const r=JSON.stringify([e,t]);let n=Jl[r];return n||(n=new Intl.ListFormat(e,t),Jl[r]=n),n}let xa={};function Ca(e,t={}){const r=JSON.stringify([e,t]);let n=xa[r];return n||(n=new Intl.DateTimeFormat(e,t),xa[r]=n),n}let Sa={};function Zg(e,t={}){const r=JSON.stringify([e,t]);let n=Sa[r];return n||(n=new Intl.NumberFormat(e,t),Sa[r]=n),n}let Ma={};function Vg(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Ma[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Ma[o]=i),i}let Yr=null;function Gg(){return Yr||(Yr=new Intl.DateTimeFormat().resolvedOptions().locale,Yr)}let Xl={};function jg(e){let t=Xl[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Xl[e]=t}return t}function Ug(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Ca(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=Ca(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function Wg(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Og(e){const t=[];for(let r=1;r<=12;r++){const n=E.utc(2009,r,1);t.push(e(n))}return t}function Yg(e){const t=[];for(let r=1;r<=7;r++){const n=E.utc(2016,11,13+r);t.push(e(n))}return t}function On(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Hg(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class zg{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=Zg(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ms(t,3);return pe(r,this.padTo)}}}class Qg{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&mt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Ca(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Jg{constructor(t,r,n){this.opts={style:"long",...n},!r&&T0()&&(this.rtf=Vg(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):mw(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Xg={firstDay:1,minimalDays:4,weekend:[6,7]};class J{static fromOpts(t){return J.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const a=t||se.defaultLocale,s=a||(i?"en-US":Gg()),l=r||se.defaultNumberingSystem,u=n||se.defaultOutputCalendar,f=Ia(o)||se.defaultWeekSettings;return new J(s,l,u,f,a)}static resetCache(){Yr=null,xa={},Sa={},Ma={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return J.create(t,r,n,o)}constructor(t,r,n,o,i){const[a,s,l]=Ug(t);this.locale=a,this.numberingSystem=r||s||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=Wg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Hg(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:J.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ia(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return On(this,t,L0,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Og(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return On(this,t,P0,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Yg(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return On(this,void 0,()=>F0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[E.utc(2016,11,13,9),E.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return On(this,t,Z0,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[E.utc(-40,1,1),E.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new zg(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Qg(t,this.intl,r)}relFormatter(t={}){return new Jg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Fg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:E0()?jg(this.locale):Xg}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Ei=null;class xe extends Tn{static get utcInstance(){return Ei===null&&(Ei=new xe(0)),Ei}static instance(t){return t===0?xe.utcInstance:new xe(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new xe($o(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${_r(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${_r(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return _r(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Kg extends Tn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function xt(e,t){if(N(e)||e===null)return t;if(e instanceof Tn)return e;if(ew(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Jo.instance:r==="utc"||r==="gmt"?xe.utcInstance:xe.parseSpecifier(r)||mt.create(e)}else return Qt(e)?xe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Kg(e)}let Kl=()=>Date.now(),$l="system",_l=null,ec=null,tc=null,rc=60,nc,oc=null;class se{static get now(){return Kl}static set now(t){Kl=t}static set defaultZone(t){$l=t}static get defaultZone(){return xt($l,Jo.instance)}static get defaultLocale(){return _l}static set defaultLocale(t){_l=t}static get defaultNumberingSystem(){return ec}static set defaultNumberingSystem(t){ec=t}static get defaultOutputCalendar(){return tc}static set defaultOutputCalendar(t){tc=t}static get defaultWeekSettings(){return oc}static set defaultWeekSettings(t){oc=Ia(t)}static get twoDigitCutoffYear(){return rc}static set twoDigitCutoffYear(t){rc=t%100}static get throwOnInvalid(){return nc}static set throwOnInvalid(t){nc=t}static resetCaches(){J.resetCache(),mt.resetCache()}}class et{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const A0=[0,31,59,90,120,151,181,212,243,273,304,334],x0=[0,31,60,91,121,152,182,213,244,274,305,335];function je(e,t){return new et("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function hs(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function C0(e,t,r){return r+(En(e)?x0:A0)[t-1]}function S0(e,t){const r=En(e)?x0:A0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function fs(e,t){return(e-t+7)%7+1}function Do(e,t=4,r=1){const{year:n,month:o,day:i}=e,a=C0(n,o,i),s=fs(hs(n,o,i),r);let l=Math.floor((a-s+14-t)/7),u;return l<1?(u=n-1,l=vn(u,t,r)):l>vn(n,t,r)?(u=n+1,l=1):u=n,{weekYear:u,weekNumber:l,weekday:s,..._o(e)}}function ic(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,a=fs(hs(n,1,t),r),s=wr(n);let l=o*7+i-a-7+t,u;l<1?(u=n-1,l+=wr(u)):l>s?(u=n+1,l-=wr(n)):u=n;const{month:f,day:h}=S0(u,l);return{year:u,month:f,day:h,..._o(e)}}function Bi(e){const{year:t,month:r,day:n}=e,o=C0(t,r,n);return{year:t,ordinal:o,..._o(e)}}function ac(e){const{year:t,ordinal:r}=e,{month:n,day:o}=S0(t,r);return{year:t,month:n,day:o,..._o(e)}}function sc(e,t){if(!N(e.localWeekday)||!N(e.localWeekNumber)||!N(e.localWeekYear)){if(!N(e.weekday)||!N(e.weekNumber)||!N(e.weekYear))throw new hr("Cannot mix locale-based week fields with ISO-based week fields");return N(e.localWeekday)||(e.weekday=e.localWeekday),N(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),N(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function $g(e,t=4,r=1){const n=Xo(e.weekYear),o=Ue(e.weekNumber,1,vn(e.weekYear,t,r)),i=Ue(e.weekday,1,7);return n?o?i?!1:je("weekday",e.weekday):je("week",e.weekNumber):je("weekYear",e.weekYear)}function _g(e){const t=Xo(e.year),r=Ue(e.ordinal,1,wr(e.year));return t?r?!1:je("ordinal",e.ordinal):je("year",e.year)}function M0(e){const t=Xo(e.year),r=Ue(e.month,1,12),n=Ue(e.day,1,No(e.year,e.month));return t?r?n?!1:je("day",e.day):je("month",e.month):je("year",e.year)}function I0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Ue(t,0,23)||t===24&&r===0&&n===0&&o===0,a=Ue(r,0,59),s=Ue(n,0,59),l=Ue(o,0,999);return i?a?s?l?!1:je("millisecond",o):je("second",n):je("minute",r):je("hour",t)}function N(e){return typeof e>"u"}function Qt(e){return typeof e=="number"}function Xo(e){return typeof e=="number"&&e%1===0}function ew(e){return typeof e=="string"}function tw(e){return Object.prototype.toString.call(e)==="[object Date]"}function T0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function E0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function rw(e){return Array.isArray(e)?e:[e]}function lc(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function nw(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Sr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ia(e){if(e==null)return null;if(typeof e!="object")throw new Se("Week settings must be an object");if(!Ue(e.firstDay,1,7)||!Ue(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Ue(t,1,7)))throw new Se("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Ue(e,t,r){return Xo(e)&&e>=t&&e<=r}function ow(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function kt(e){if(!(N(e)||e===null||e===""))return parseInt(e,10)}function Vt(e){if(!(N(e)||e===null||e===""))return parseFloat(e)}function ps(e){if(!(N(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ms(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function En(e){return e%4===0&&(e%100!==0||e%400===0)}function wr(e){return En(e)?366:365}function No(e,t){const r=ow(t-1,12)+1,n=e+(t-r)/12;return r===2?En(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Ko(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function cc(e,t,r){return-fs(hs(e,1,t),r)+t-1}function vn(e,t=4,r=1){const n=cc(e,t,r),o=cc(e+1,t,r);return(wr(e)-n+o)/7}function Ta(e){return e>99?e:e>se.twoDigitCutoffYear?1900+e:2e3+e}function B0(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function $o(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function D0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Se(`Invalid unit value ${e}`);return t}function Lo(e,t){const r={};for(const n in e)if(Sr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=D0(o)}return r}function _r(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${pe(r,2)}:${pe(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${pe(r,2)}${pe(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function _o(e){return nw(e,["hour","minute","second","millisecond"])}const iw=["January","February","March","April","May","June","July","August","September","October","November","December"],N0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],aw=["J","F","M","A","M","J","J","A","S","O","N","D"];function L0(e){switch(e){case"narrow":return[...aw];case"short":return[...N0];case"long":return[...iw];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const R0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],q0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],sw=["M","T","W","T","F","S","S"];function P0(e){switch(e){case"narrow":return[...sw];case"short":return[...q0];case"long":return[...R0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const F0=["AM","PM"],lw=["Before Christ","Anno Domini"],cw=["BC","AD"],uw=["B","A"];function Z0(e){switch(e){case"narrow":return[...uw];case"short":return[...cw];case"long":return[...lw];default:return null}}function dw(e){return F0[e.hour<12?0:1]}function hw(e,t){return P0(t)[e.weekday-1]}function fw(e,t){return L0(t)[e.month-1]}function pw(e,t){return Z0(t)[e.year<0?0:1]}function mw(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,u=o[e],f=n?l?u[1]:u[2]||u[1]:l?o[e][0]:e;return a?`${s} ${f} ago`:`in ${s} ${f}`}function uc(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const gw={D:Bo,DD:n0,DDD:o0,DDDD:i0,t:a0,tt:s0,ttt:l0,tttt:c0,T:u0,TT:d0,TTT:h0,TTTT:f0,f:p0,ff:g0,fff:v0,ffff:y0,F:m0,FF:w0,FFF:b0,FFFF:k0};class Ae{static create(t,r={}){return new Ae(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return gw[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return pe(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,w)=>this.loc.extract(t,g,w),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?dw(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>n?fw(t,g):i(w?{month:g}:{month:g,day:"numeric"},"month"),u=(g,w)=>n?hw(t,g):i(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),f=g=>{const w=Ae.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(t,w):g},h=g=>n?pw(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(g)}};return uc(Ae.parseFormat(r),m)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>u=>{const f=n(u);return f?this.num(l.get(f),u.length):u},i=Ae.parseFormat(r),a=i.reduce((l,{literal:u,val:f})=>u?l:l.concat(f),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return uc(i,o(s))}}const V0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Er(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Br(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function Dr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function G0(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=kt(t[r+o]);return[n,null,r+o]}}const j0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ww=`(?:${j0.source}?(?:\\[(${V0.source})\\])?)?`,gs=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,U0=RegExp(`${gs.source}${ww}`),ws=RegExp(`(?:T${U0.source})?`),vw=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,bw=/(\d{4})-?W(\d\d)(?:-?(\d))?/,yw=/(\d{4})-?(\d{3})/,kw=G0("weekYear","weekNumber","weekDay"),Aw=G0("year","ordinal"),xw=/(\d{4})-(\d\d)-(\d\d)/,W0=RegExp(`${gs.source} ?(?:${j0.source}|(${V0.source}))?`),Cw=RegExp(`(?: ${W0.source})?`);function vr(e,t,r){const n=e[t];return N(n)?r:kt(n)}function Sw(e,t){return[{year:vr(e,t),month:vr(e,t+1,1),day:vr(e,t+2,1)},null,t+3]}function Nr(e,t){return[{hours:vr(e,t,0),minutes:vr(e,t+1,0),seconds:vr(e,t+2,0),milliseconds:ps(e[t+3])},null,t+4]}function Bn(e,t){const r=!e[t]&&!e[t+1],n=$o(e[t+1],e[t+2]),o=r?null:xe.instance(n);return[{},o,t+3]}function Dn(e,t){const r=e[t]?mt.create(e[t]):null;return[{},r,t+1]}const Mw=RegExp(`^T?${gs.source}$`),Iw=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Tw(e){const[t,r,n,o,i,a,s,l,u]=e,f=t[0]==="-",h=l&&l[0]==="-",m=(g,w=!1)=>g!==void 0&&(w||g&&f)?-g:g;return[{years:m(Vt(r)),months:m(Vt(n)),weeks:m(Vt(o)),days:m(Vt(i)),hours:m(Vt(a)),minutes:m(Vt(s)),seconds:m(Vt(l),l==="-0"),milliseconds:m(ps(u),h)}]}const Ew={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vs(e,t,r,n,o,i,a){const s={year:t.length===2?Ta(kt(t)):kt(t),month:N0.indexOf(r)+1,day:kt(n),hour:kt(o),minute:kt(i)};return a&&(s.second=kt(a)),e&&(s.weekday=e.length>3?R0.indexOf(e)+1:q0.indexOf(e)+1),s}const Bw=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Dw(e){const[,t,r,n,o,i,a,s,l,u,f,h]=e,m=vs(t,o,n,r,i,a,s);let g;return l?g=Ew[l]:u?g=0:g=$o(f,h),[m,new xe(g)]}function Nw(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Lw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Rw=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,qw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function dc(e){const[,t,r,n,o,i,a,s]=e;return[vs(t,o,n,r,i,a,s),xe.utcInstance]}function Pw(e){const[,t,r,n,o,i,a,s]=e;return[vs(t,s,r,n,o,i,a),xe.utcInstance]}const Fw=Er(vw,ws),Zw=Er(bw,ws),Vw=Er(yw,ws),Gw=Er(U0),O0=Br(Sw,Nr,Bn,Dn),jw=Br(kw,Nr,Bn,Dn),Uw=Br(Aw,Nr,Bn,Dn),Ww=Br(Nr,Bn,Dn);function Ow(e){return Dr(e,[Fw,O0],[Zw,jw],[Vw,Uw],[Gw,Ww])}function Yw(e){return Dr(Nw(e),[Bw,Dw])}function Hw(e){return Dr(e,[Lw,dc],[Rw,dc],[qw,Pw])}function zw(e){return Dr(e,[Iw,Tw])}const Qw=Br(Nr);function Jw(e){return Dr(e,[Mw,Qw])}const Xw=Er(xw,Cw),Kw=Er(W0),$w=Br(Nr,Bn,Dn);function _w(e){return Dr(e,[Xw,O0],[Kw,$w])}const hc="Invalid Duration",Y0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},e4={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Y0},qe=146097/400,or=146097/4800,t4={years:{quarters:4,months:12,weeks:qe/7,days:qe,hours:qe*24,minutes:qe*24*60,seconds:qe*24*60*60,milliseconds:qe*24*60*60*1e3},quarters:{months:3,weeks:qe/28,days:qe/4,hours:qe*24/4,minutes:qe*24*60/4,seconds:qe*24*60*60/4,milliseconds:qe*24*60*60*1e3/4},months:{weeks:or/7,days:or,hours:or*24,minutes:or*24*60,seconds:or*24*60*60,milliseconds:or*24*60*60*1e3},...Y0},Yt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],r4=Yt.slice(0).reverse();function yt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new j(n)}function H0(e,t){let r=t.milliseconds??0;for(const n of r4.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function fc(e,t){const r=H0(e,t)<0?-1:1;Yt.reduceRight((n,o)=>{if(N(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),Yt.reduce((n,o)=>{if(N(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function n4(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class j{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?t4:e4;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||J.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return j.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Se(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new j({values:Lo(t,j.normalizeUnit),loc:J.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Qt(t))return j.fromMillis(t);if(j.isDuration(t))return t;if(typeof t=="object")return j.fromObject(t);throw new Se(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=zw(t);return n?j.fromObject(n,r):j.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Jw(t);return n?j.fromObject(n,r):j.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Se("need to specify a reason the Duration is invalid");const n=t instanceof et?t:new et(t,r);if(se.throwOnInvalid)throw new Bg(n);return new j({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new r0(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Ae.create(this.loc,n).formatDurationFromString(this,t):hc}toHuman(t={}){if(!this.isValid)return hc;const r=Yt.map(n=>{const o=this.values[n];return N(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ms(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},E.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?H0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t),n={};for(const o of Yt)(Sr(r.values,o)||Sr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return yt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=D0(t(this.values[n],n));return yt(this,{values:r},!0)}get(t){return this[j.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Lo(t,j.normalizeUnit)};return yt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return yt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return fc(this.matrix,t),yt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=n4(this.normalize().shiftToAll().toObject());return yt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>j.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of Yt)if(t.indexOf(a)>=0){i=a;let s=0;for(const u in n)s+=this.matrix[u][a]*n[u],n[u]=0;Qt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Qt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return fc(this.matrix,r),yt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return yt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Yt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const ir="Invalid Interval";function o4(e,t){return!e||!e.isValid?ue.invalid("missing or invalid start"):!t||!t.isValid?ue.invalid("missing or invalid end"):t<e?ue.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ue{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Se("need to specify a reason the Interval is invalid");const n=t instanceof et?t:new et(t,r);if(se.throwOnInvalid)throw new Eg(n);return new ue({invalid:n})}static fromDateTimes(t,r){const n=Zr(t),o=Zr(r),i=o4(n,o);return i??new ue({start:n,end:o})}static after(t,r){const n=j.fromDurationLike(r),o=Zr(t);return ue.fromDateTimes(o,o.plus(n))}static before(t,r){const n=j.fromDurationLike(r),o=Zr(t);return ue.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=E.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=E.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return ue.fromDateTimes(i,s);if(a){const u=j.fromISO(o,r);if(u.isValid)return ue.after(i,u)}else if(l){const u=j.fromISO(n,r);if(u.isValid)return ue.before(s,u)}}return ue.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r!=null&&r.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ue.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Zr).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(ue.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=j.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ue.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ue.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ue.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,u)=>l.time-u.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ue.fromDateTimes(r,l.time)),r=null);return ue.merge(o)}difference(...t){return ue.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ir}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Bo,r={}){return this.isValid?Ae.create(this.s.loc.clone(r),t).formatInterval(this):ir}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ir}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ir}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ir}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:ir}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):j.invalid(this.invalidReason)}mapEndpoints(t){return ue.fromDateTimes(t(this.s),t(this.e))}}class Hr{static hasDST(t=se.defaultZone){const r=E.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return mt.isValidZone(t)}static normalizeZone(t){return xt(t,se.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||J.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||J.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||J.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||J.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||J.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||J.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||J.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return J.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return J.create(r,null,"gregory").eras(t)}static features(){return{relative:T0(),localeWeek:E0()}}}function pc(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(j.fromMillis(n).as("days"))}function i4(e,t,r){const n=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const f=pc(l,u);return(f-f%7)/7}],["days",pc]],o={},i=e;let a,s;for(const[l,u]of n)r.indexOf(l)>=0&&(a=l,o[l]=u(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function a4(e,t,r,n){let[o,i,a,s]=i4(e,t,r);const l=t-o,u=r.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);u.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const f=j.fromObject(i,n);return u.length>0?j.fromMillis(l,n).shiftTo(...u).plus(f):f}const bs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},mc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},s4=bs.hanidec.replace(/[\[|\]]/g,"").split("");function l4(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(bs.hanidec)!==-1)t+=s4.indexOf(e[r]);else for(const o in mc){const[i,a]=mc[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function Je({numberingSystem:e},t=""){return new RegExp(`${bs[e||"latn"]}${t}`)}const c4="missing Intl.DateTimeFormat.formatToParts support";function O(e,t=r=>r){return{regex:e,deser:([r])=>t(l4(r))}}const u4=String.fromCharCode(160),z0=`[ ${u4}]`,Q0=new RegExp(z0,"g");function d4(e){return e.replace(/\./g,"\\.?").replace(Q0,z0)}function gc(e){return e.replace(/\./g,"").replace(Q0," ").toLowerCase()}function Xe(e,t){return e===null?null:{regex:RegExp(e.map(d4).join("|")),deser:([r])=>e.findIndex(n=>gc(r)===gc(n))+t}}function wc(e,t){return{regex:e,deser:([,r,n])=>$o(r,n),groups:t}}function Yn(e){return{regex:e,deser:([t])=>t}}function h4(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function f4(e,t){const r=Je(t),n=Je(t,"{2}"),o=Je(t,"{3}"),i=Je(t,"{4}"),a=Je(t,"{6}"),s=Je(t,"{1,2}"),l=Je(t,"{1,3}"),u=Je(t,"{1,6}"),f=Je(t,"{1,9}"),h=Je(t,"{2,4}"),m=Je(t,"{4,6}"),g=A=>({regex:RegExp(h4(A.val)),deser:([S])=>S,literal:!0}),k=(A=>{if(e.literal)return g(A);switch(A.val){case"G":return Xe(t.eras("short"),0);case"GG":return Xe(t.eras("long"),0);case"y":return O(u);case"yy":return O(h,Ta);case"yyyy":return O(i);case"yyyyy":return O(m);case"yyyyyy":return O(a);case"M":return O(s);case"MM":return O(n);case"MMM":return Xe(t.months("short",!0),1);case"MMMM":return Xe(t.months("long",!0),1);case"L":return O(s);case"LL":return O(n);case"LLL":return Xe(t.months("short",!1),1);case"LLLL":return Xe(t.months("long",!1),1);case"d":return O(s);case"dd":return O(n);case"o":return O(l);case"ooo":return O(o);case"HH":return O(n);case"H":return O(s);case"hh":return O(n);case"h":return O(s);case"mm":return O(n);case"m":return O(s);case"q":return O(s);case"qq":return O(n);case"s":return O(s);case"ss":return O(n);case"S":return O(l);case"SSS":return O(o);case"u":return Yn(f);case"uu":return Yn(s);case"uuu":return O(r);case"a":return Xe(t.meridiems(),0);case"kkkk":return O(i);case"kk":return O(h,Ta);case"W":return O(s);case"WW":return O(n);case"E":case"c":return O(r);case"EEE":return Xe(t.weekdays("short",!1),1);case"EEEE":return Xe(t.weekdays("long",!1),1);case"ccc":return Xe(t.weekdays("short",!0),1);case"cccc":return Xe(t.weekdays("long",!0),1);case"Z":case"ZZ":return wc(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return wc(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return Yn(/[a-z_+-/]{1,256}?/i);case" ":return Yn(/[^\S\n\r]/);default:return g(A)}})(e)||{invalidReason:c4};return k.token=e,k}const p4={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function m4(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=p4[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function g4(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function w4(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(Sr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function v4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return N(e.z)||(r=mt.create(e.z)),N(e.Z)||(r||(r=new xe(e.Z)),n=e.Z),N(e.q)||(e.M=(e.q-1)*3+1),N(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),N(e.u)||(e.S=ps(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let Di=null;function b4(){return Di||(Di=E.fromMillis(1555555555555)),Di}function y4(e,t){if(e.literal)return e;const r=Ae.macroTokenToFormatOpts(e.val),n=K0(r,t);return n==null||n.includes(void 0)?e:n}function J0(e,t){return Array.prototype.concat(...e.map(r=>y4(r,t)))}function X0(e,t,r){const n=J0(Ae.parseFormat(r),e),o=n.map(a=>f4(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=g4(o),l=RegExp(a,"i"),[u,f]=w4(t,l,s),[h,m,g]=f?v4(f):[null,null,void 0];if(Sr(f,"a")&&Sr(f,"H"))throw new hr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:u,matches:f,result:h,zone:m,specificOffset:g}}}function k4(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=X0(e,t,r);return[n,o,i,a]}function K0(e,t){if(!e)return null;const n=Ae.create(t,e).dtFormatter(b4()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>m4(a,e,i))}const Ni="Invalid DateTime",vc=864e13;function Hn(e){return new et("unsupported zone",`the zone "${e.name}" is not supported`)}function Li(e){return e.weekData===null&&(e.weekData=Do(e.c)),e.weekData}function Ri(e){return e.localWeekData===null&&(e.localWeekData=Do(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Gt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new E({...r,...t,old:r})}function $0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function zn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function lo(e,t,r){return $0(Ko(e),t,r)}function bc(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,No(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=j.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Ko(i);let[l,u]=$0(s,r,e.zone);return a!==0&&(l+=a,u=e.zone.offset(l)),{ts:l,o:u}}function Fr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,u=E.fromObject(e,{...r,zone:l,specificOffset:i});return a?u:u.setZone(s)}else return E.invalid(new et("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Qn(e,t,r=!0){return e.isValid?Ae.create(J.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function qi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=pe(e.c.year,r?6:4),t?(n+="-",n+=pe(e.c.month),n+="-",n+=pe(e.c.day)):(n+=pe(e.c.month),n+=pe(e.c.day)),n}function yc(e,t,r,n,o,i){let a=pe(e.c.hour);return t?(a+=":",a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=pe(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=pe(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=pe(Math.trunc(-e.o/60)),a+=":",a+=pe(Math.trunc(-e.o%60))):(a+="+",a+=pe(Math.trunc(e.o/60)),a+=":",a+=pe(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const _0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},A4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},x4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},eh=["year","month","day","hour","minute","second","millisecond"],C4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],S4=["year","ordinal","hour","minute","second","millisecond"];function M4(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new r0(e);return t}function kc(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return M4(e)}}function Ac(e,t){const r=xt(t.zone,se.defaultZone),n=J.fromObject(t),o=se.now();let i,a;if(N(e.year))i=o;else{for(const u of eh)N(e[u])&&(e[u]=_0[u]);const s=M0(e)||I0(e);if(s)return E.invalid(s);const l=r.offset(o);[i,a]=lo(e,l,r)}return new E({ts:i,zone:r,loc:n,o:a})}function xc(e,t,r){const n=N(r.round)?!0:r.round,o=(a,s)=>(a=ms(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Cc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class E{constructor(t){const r=t.zone||se.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new et("invalid input"):null)||(r.isValid?null:Hn(r));this.ts=N(t.ts)?se.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=zn(this.ts,s),n=Number.isNaN(o.year)?new et("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||J.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new E({})}static local(){const[t,r]=Cc(arguments),[n,o,i,a,s,l,u]=r;return Ac({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:u},t)}static utc(){const[t,r]=Cc(arguments),[n,o,i,a,s,l,u]=r;return t.zone=xe.utcInstance,Ac({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:u},t)}static fromJSDate(t,r={}){const n=tw(t)?t.valueOf():NaN;if(Number.isNaN(n))return E.invalid("invalid input");const o=xt(r.zone,se.defaultZone);return o.isValid?new E({ts:n,zone:o,loc:J.fromObject(r)}):E.invalid(Hn(o))}static fromMillis(t,r={}){if(Qt(t))return t<-vc||t>vc?E.invalid("Timestamp out of range"):new E({ts:t,zone:xt(r.zone,se.defaultZone),loc:J.fromObject(r)});throw new Se(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Qt(t))return new E({ts:t*1e3,zone:xt(r.zone,se.defaultZone),loc:J.fromObject(r)});throw new Se("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=xt(r.zone,se.defaultZone);if(!n.isValid)return E.invalid(Hn(n));const o=J.fromObject(r),i=Lo(t,kc),{minDaysInFirstWeek:a,startOfWeek:s}=sc(i,o),l=se.now(),u=N(r.specificOffset)?n.offset(l):r.specificOffset,f=!N(i.ordinal),h=!N(i.year),m=!N(i.month)||!N(i.day),g=h||m,w=i.weekYear||i.weekNumber;if((g||f)&&w)throw new hr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&f)throw new hr("Can't mix ordinal dates with month/day");const k=w||i.weekday&&!g;let A,S,M=zn(l,u);k?(A=C4,S=A4,M=Do(M,a,s)):f?(A=S4,S=x4,M=Bi(M)):(A=eh,S=_0);let F=!1;for(const Ce of A){const ve=i[Ce];N(ve)?F?i[Ce]=S[Ce]:i[Ce]=M[Ce]:F=!0}const W=k?$g(i,a,s):f?_g(i):M0(i),ee=W||I0(i);if(ee)return E.invalid(ee);const ie=k?ic(i,a,s):f?ac(i):i,[ce,G]=lo(ie,u,n),ae=new E({ts:ce,zone:n,o:G,loc:o});return i.weekday&&g&&t.weekday!==ae.weekday?E.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${ae.toISO()}`):ae}static fromISO(t,r={}){const[n,o]=Ow(t);return Fr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=Yw(t);return Fr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Hw(t);return Fr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(N(t)||N(r))throw new Se("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=J.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,u,f]=k4(a,t,r);return f?E.invalid(f):Fr(s,l,n,`format ${r}`,t,u)}static fromString(t,r,n={}){return E.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=_w(t);return Fr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Se("need to specify a reason the DateTime is invalid");const n=t instanceof et?t:new et(t,r);if(se.throwOnInvalid)throw new Tg(n);return new E({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=K0(t,J.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return J0(Ae.parseFormat(t),J.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Li(this).weekYear:NaN}get weekNumber(){return this.isValid?Li(this).weekNumber:NaN}get weekday(){return this.isValid?Li(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ri(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ri(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ri(this).weekYear:NaN}get ordinal(){return this.isValid?Bi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Hr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Hr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Hr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Hr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Ko(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,u=n-s*r,f=zn(l,a),h=zn(u,s);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[Gt(this,{ts:l}),Gt(this,{ts:u})]:[this]}get isInLeapYear(){return En(this.year)}get daysInMonth(){return No(this.year,this.month)}get daysInYear(){return this.isValid?wr(this.year):NaN}get weeksInWeekYear(){return this.isValid?vn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?vn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=Ae.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(xe.instance(t),r)}toLocal(){return this.setZone(se.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=xt(t,se.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=lo(a,i,t)}return Gt(this,{ts:o,zone:t})}else return E.invalid(Hn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Gt(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Lo(t,kc),{minDaysInFirstWeek:n,startOfWeek:o}=sc(r,this.loc),i=!N(r.weekYear)||!N(r.weekNumber)||!N(r.weekday),a=!N(r.ordinal),s=!N(r.year),l=!N(r.month)||!N(r.day),u=s||l,f=r.weekYear||r.weekNumber;if((u||a)&&f)throw new hr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new hr("Can't mix ordinal dates with month/day");let h;i?h=ic({...Do(this.c,n,o),...r},n,o):N(r.ordinal)?(h={...this.toObject(),...r},N(r.day)&&(h.day=Math.min(No(h.year,h.month),h.day))):h=ac({...Bi(this.c),...r});const[m,g]=lo(h,this.o,this.zone);return Gt(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t);return Gt(this,bc(this,r))}minus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t).negate();return Gt(this,bc(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=j.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Ae.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Ni}toLocaleString(t=Bo,r={}){return this.isValid?Ae.create(this.loc.clone(r),t).formatDateTime(this):Ni}toLocaleParts(t={}){return this.isValid?Ae.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=qi(this,a);return s+="T",s+=yc(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?qi(this,t==="extended"):null}toISOWeekDate(){return Qn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+yc(this,a==="extended",r,t,n,i):null}toRFC2822(){return Qn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Qn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?qi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Qn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ni}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return j.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=rw(r).map(j.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,u=a4(s,l,i,o);return a?u.negate():u}diffNow(t="milliseconds",r={}){return this.diff(E.now(),t,r)}until(t){return this.isValid?ue.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||E.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),xc(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?xc(t.base||E.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(E.isDateTime))throw new Se("min requires all arguments be DateTimes");return lc(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(E.isDateTime))throw new Se("max requires all arguments be DateTimes");return lc(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=J.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return X0(a,t,r)}static fromStringExplain(t,r,n={}){return E.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Bo}static get DATE_MED(){return n0}static get DATE_MED_WITH_WEEKDAY(){return Dg}static get DATE_FULL(){return o0}static get DATE_HUGE(){return i0}static get TIME_SIMPLE(){return a0}static get TIME_WITH_SECONDS(){return s0}static get TIME_WITH_SHORT_OFFSET(){return l0}static get TIME_WITH_LONG_OFFSET(){return c0}static get TIME_24_SIMPLE(){return u0}static get TIME_24_WITH_SECONDS(){return d0}static get TIME_24_WITH_SHORT_OFFSET(){return h0}static get TIME_24_WITH_LONG_OFFSET(){return f0}static get DATETIME_SHORT(){return p0}static get DATETIME_SHORT_WITH_SECONDS(){return m0}static get DATETIME_MED(){return g0}static get DATETIME_MED_WITH_SECONDS(){return w0}static get DATETIME_MED_WITH_WEEKDAY(){return Ng}static get DATETIME_FULL(){return v0}static get DATETIME_FULL_WITH_SECONDS(){return b0}static get DATETIME_HUGE(){return y0}static get DATETIME_HUGE_WITH_SECONDS(){return k0}}function Zr(e){if(E.isDateTime(e))return e;if(e&&e.valueOf&&Qt(e.valueOf()))return E.fromJSDate(e);if(e&&typeof e=="object")return E.fromObject(e);throw new Se(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function Mr(e){const t=E.fromObject(an(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function th(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function Pi(e,t){return th(Mr(e).plus(t))}const I4=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],T4=I4.reduce((e,t)=>(e[t]=t,e),{}),E4=se.defaultZone.name,ys=T4.UTC;var Sc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Sc||(Sc={}));const B4=["hour","minute","second","millisecond"],D4=Cn({hour:14,minute:19,second:7,millisecond:877,timezone:ys}),N4=Cn({year:2023,month:6,day:5,timezone:ys}),L4=Cn(z1(N4,D4));var B;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(B||(B={}));const R4={[B.Milliseconds]:"millisecond",[B.Seconds]:"second",[B.Minutes]:"minute",[B.Hours]:"hour",[B.Days]:"day",[B.Weeks]:"week",[B.Months]:"month",[B.Quarters]:"quarter",[B.Years]:"year"},Mc=[B.Milliseconds,B.Seconds,B.Minutes,B.Hours,B.Days,B.Weeks,B.Months,B.Quarters,B.Years];function Ic(e,t){return ke(e,(r,n)=>t==null||!_(n,"number")?n:Ki({number:n,digits:t}))}const Tc={longterm:1,casual:0},rh={[B.Years]:"longterm",[B.Quarters]:"longterm",[B.Months]:"longterm",[B.Weeks]:"casual",[B.Days]:"casual",[B.Hours]:"casual",[B.Minutes]:"casual",[B.Seconds]:"casual",[B.Milliseconds]:"casual"};function q4(e){return e.map(n=>rh[n]).reduce((n,o)=>Tc[o]>Tc[n]?o:n)}var br;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(br||(br={}));function P4({start:e,end:t,units:r,unit:n,diffType:o,decimalCount:i}){const a=Mr(e),s=Mr(t),l=r??[n],u=l.length===1?br.EquivalentUnits:o;if(!u)throw new Error("Failed to diff dates: no diffType was provided.");if(u===br.AdditiveUnits){const f=q4(l),h=s.diff(a,l,{conversionAccuracy:f}).toObject();return Ic(h,i)}else if(u===br.EquivalentUnits){const f=l.map(m=>{const w=s.diff(a,m,{conversionAccuracy:rh[m]}).toObject()[m];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,w]}),h=Ch(f);return Ic(h,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${u}'`)}function F4(e){if(!Hr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Z4(e){Lu(e,L4),F4(e.timezone),Mr(e)}function V4(e){try{return Z4(e),!0}catch{return!1}}function G4(e,t){const r=j4(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return th(r,t)}function Ec(e){const t=E.fromJSDate(new Date(e));if(t.isValid)return t}function j4(e,t){if(V4(e)&&(e=Mr(e).toMillis()),E.isDateTime(e))return e.setZone(t);if(_(e,"number"))return E.fromMillis(e,{zone:ys}).setZone(t);if(_(e,"string")){const r=E.fromISO(e,{zone:t});return r.isValid?r:Ec(e)}else if(e instanceof Date)return E.fromJSDate(e).setZone(t);return Ec(e)}function U4(e){return G4(Date.now(),e)}function nh(){return U4(E4)}const W4={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Wh(W4,B4);const O4=se.defaultLocale;function Y4(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Bc(e,t){const r=Mr(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??O4});return Y4(r)}function H4(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function z4(e,t){const r=Ie(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(we).join(":")}function Q4(e,t){return{date:H4(e),time:z4(e,t.includeSeconds),timezone:e.timezone}}function J4(e,t){const r=Q4(e,t);return[r.date,r.time,t.includeTimezone&&`(${r.timezone})`].filter(we).join(" ")}const X4={[B.Milliseconds]:1e3,[B.Seconds]:60,[B.Minutes]:60,[B.Hours]:24,[B.Days]:30,[B.Weeks]:4,[B.Months]:12,[B.Quarters]:4,[B.Years]:1/0};function K4({fullDate:e,relativeTo:t,options:r={}}){const n=r.decimalDigitCount||0,o=P4({start:e,end:t,units:Mc,diffType:br.EquivalentUnits}),i=ke(o,(g,w)=>{const k=Math.floor(Math.abs(Ki({digits:1,number:w}))),A=k>0,S=r.limitUnitMax?k<X4[g]:!0;return A&&S}),a=Mc.reduce((g,w)=>{var A;return!((A=r.blockedRelativeUnits)!=null&&A.includes(w))&&i[w]?w:g},void 0);if(r.blockJustNow?!1:it(e,t)||a===B.Minutes&&o.minutes<2||a===B.Seconds&&o.seconds<11||a===B.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],u=Math.abs(Ki({digits:n,number:l})),f=u===1,h=[R4[a],f?"":"s"].join(""),m=f?"a":u;return l<0?`in ${m} ${h}`:`${m} ${h} ago`}function $4(e){return{date:Bc(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Bc(e,{timeStyle:"short"}).replace(/\s/g," ")}}const _4={blockedRelativeUnits:[B.Years,B.Quarters],limitUnitMax:!0};function e5(e){var i,a,s;const t=$4(e.fullDate),r=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(we).join(" "),n=J4(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?K4({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||nh(),options:{..._4,...e.relativeOptions}}):void 0;return{everythingString:n,displayString:o||r}}const Fi=ne()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:r}=e5(e);return c`
            <span title=${r}>${t}</span>
        `}}),t5="data-test-id",cr=qt(class extends gt{constructor(t){super(t);Ln(this,"element");this.element=r5(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(t5,t),Re}});function r5(e,t,r){n5(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function n5(e,t){if(e.type!==kn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Ea=(e=>(e.Up="up",e.Down="down",e))(Ea||{});const Jn=ne()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:re(),openChange:re()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${P.boldParagraphFont};
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

        ${Pt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${X.interaction} linear transform;
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
            ${He};
            ${H(b.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${H(b.pagePrimary)}
            ${wn.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${wn.popupShadowReversed};
        }

        .selected-label-prefix {
            ${P.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${He};
        }

        .select-options .option.selected {
            ${H(b.accentPrimary)}
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
            ${Kt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var u;return l.value===((u=n.value)==null?void 0:u.value)})??n.options[0]:n.options[0],a=n.icon?c`
                  <${C.assign({icon:n.icon})}
                      ${cr("rendered-input-icon")}
                  ></${C}>
              `:"",s=n.selectedLabelPrefix?c`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return c`
            <button
                ?disabled=${!!n.disabled}
                class=${fe({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${C.assign({icon:Ld})}
                            class="trigger-icon"
                        ></${C}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(l=>c`
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
        `}}),Zi=us({tagName:"toniq-error-message",styles:p`
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
        `}});var pt=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(pt||{});const Ke=ne()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){function t(n){if(e.linkType==="disabled"){n.preventDefault();return}e.linkType==="route-link"&&Wo(n)&&(n.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const r=e.linkType==="new-tab";return c`
            <a
                href=${e.url.toString()}
                ${y("click",t)}
                target=${Us(r?"_blank":void 0)}
                rel=${Us(r?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),Ba=360,oh=8;function ih(e){return(e-oh)/2}const ot=wt({"main-image-size":Ba,"secondary-image-size":ih(Ba)}),ut=ne()({tagName:"toniq-featured-flip-card-footer",styles:p`
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

        ${Ke} ${ge} {
            width: 100%;
        }

        ${Ke} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${ot["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:re(),flipCardButtonClick:re()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?le(n).map(i=>{const a=n[i];if(!a)return;const s=_d[i];return c`
                          <${Ke.assign({linkType:pt.NewTab,url:a})}>
                              <${C.assign({icon:s})}></${C}>
                          </${Ke}>
                      `}).filter(we):"";return c`
            <div class="buttons">
                <${Ke.assign({url:e.viewMoreButtonUrl,linkType:pt.RouteLink,scrollToTop:!0})}
                    ${y("click",()=>{t(new r.viewMoreButtonClick)})}
                >
                    <${ge.assign({text:e.viewMoreButtonText,variant:dr.Outline})}></${ge}>
                </${Ke}>
                ${e.flipCardButtonText?c`
                          <${ge.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${y("click",()=>{t(new r.flipCardButtonClick)})}
                          ></${ge}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Ht=ne()({tagName:"toniq-flip-card",events:{flippedChange:re()},styles:p`
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

        ${Zm(".card-face",!1)}

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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return c`
            <div
                class="flip-wrapper ${fe({flipped:e.flipped})}"
                ${y("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),te=ne()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:re()},styles:p`
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
            ${P.h3Font};
            ${P.extraBoldFont};
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
            row-gap: ${oh}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Ht} {
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
            ${P.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var m,g,w,k;const a=e.mainImageSize||Ba,s=ih(a);wo({onElement:n,forCssVar:ot["main-image-size"],toValue:`${a}px`}),wo({onElement:n,forCssVar:ot["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(we).join(" "),u=c`
            <h3>${e.cardTitle}</h3>
        `,f=e.imageUrls[0],h=f?c`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,f))||c`
                          <${Ct.assign({imageUrl:f})}></${Ct}>
                      `}
                  </div>
              `:"";return c`
            <${Ht.assign({flipped:t.flipped})}
                ${y(ut.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${u}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(A=>{var S;return c`
                                    <div class="secondary-image-wrapper">
                                        ${((S=e.customTemplateCallback)==null?void 0:S.call(e,A))||c`
                                            <${Ct.assign({imageUrl:A})}></${Ct}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${ut.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${y(ut.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${ut}>
                </div>
                <div class="card-face back" slot="back">
                    ${u}
                    <div class="paragraphs">
                        ${(w=e.infoParagraphs)==null?void 0:w.map(A=>c`
                                <p>${A}</p>
                            `)}
                    </div>
                    <${ut.assign({viewMoreButtonText:l,flipCardButtonText:(k=e.infoParagraphs)!=null&&k.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${y(ut.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${ut}>
                </div>
            </${Ht}>
        `}});var ur=(e=>(e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e))(ur||{});const Ee=ne()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level==="h1","toniq-heading-h2":({inputs:e})=>e.level==="h2","toniq-heading-h3":({inputs:e})=>e.level==="h3","toniq-heading-h4":({inputs:e})=>e.level==="h4"},styles:({hostClasses:e})=>p`
        ${e["toniq-heading-h1"].selector} {
            ${P.h1Font};
        }
        ${e["toniq-heading-h2"].selector} {
            ${P.h2Font};
        }
        ${e["toniq-heading-h3"].selector} {
            ${P.h3Font};
        }
        ${e["toniq-heading-h4"].selector} {
            ${P.h4Font};
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
            `}});function Da({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Da({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ah({value:e,allowed:t,blocked:r}){const n=t?Da({input:e,matcher:t}):!0,o=r?Da({input:e,matcher:r}):!1;return n&&!o}function Dc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ah({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var Na=(e=>(e.Default="default",e.Outline="outline",e))(Na||{});const Xn=ne()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:re(),inputBlock:re()},styles:({hostClasses:e})=>p`
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
                border-radius: ${ba};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${b.pagePrimary.backgroundColor};
                border-color: ${b.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${C} {
                color: ${b.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${C} {
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
                border-radius: ${ba};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${P.paragraphFont};
                gap: 4px;
            }

            ${Pt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${C} {
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
                ${P.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Kt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${He};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Dc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?c`
                  <${C.assign({icon:e.icon})}></${C}>
              `:"";return c`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${n}
                    ${y("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let u=a.value??"";if(s)if(s.length===1)ah({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(u=l,t(new r.inputBlock(s)));else{const{filtered:f,blocked:h}=Dc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u=f,t(new r.inputBlock(h))}a.value!==u&&(a.value=u),l!==u&&t(new r.valueChange(u))})}
                    placeholder=${e.placeholder}
                />
                ${ye(!!e.suffix,c`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var en=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(en||{});const tn=ne()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>p`
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

        ${e["toniq-loading-whole-page"].selector} ${C} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${C} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>c`
            <${C.assign({icon:cs,fitContainer:e.size!=="small"})}></${C}>
        `}),Nc="...";function o5(e,t,r=7,n=5){let o;e=mr({value:e,min:1,max:t}),r=mr({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Vi(t-o,t):e>o?Vi(Math.min(s.start,t-o),Math.min(s.end,t)):Vi(1,Math.min(t,o+1));function u(h,m){return l.length+1!==t?m:[h]}const f=l[l.length-1];if(f&&f<t){const h=u(t,[Nc,t]);return[...l,...h]}else return l[0]!==1?u(1,[1,Nc]).concat(l):l}function Vi(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}const Gi=ne()({tagName:"toniq-pagination",styles:p`
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
            ${He};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${H(b.accentSecondary)};
        }

        .control:hover {
            ${H(b.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${H(b.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${P.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${H(b.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${H(b.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:re()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?c``:c`
                <button
                    ${y("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${C.assign({icon:ss})}></${C}>
                </button>
                ${o5(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?c`
                                <div class="page" disabled>${n}</div>
                            `:c`
                                <button
                                    class=${fe({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${y("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${y("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${C.assign({icon:ls})}></${C}>
                </button>
            `}}),ji=b.pageInteraction.foregroundColor,Ui=b.accentSecondary.backgroundColor,Fe=ne()({tagName:"toniq-list-table",cssVars:{"toniq-list-table-border-width":"1px","toniq-list-table-border-hover-width":"2px","toniq-list-table-header-radius":"16px","toniq-list-table-row-gap":"36px"},events:{pageChange:re()},styles:({cssVars:e})=>p`
        :host {
            display: flex;
            overflow-x: auto;
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Firefox */
        :host {
            scrollbar-width: auto;
            scrollbar-color: ${ji} ${Ui};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 2px;
            height: 2px;
        }

        :host::-webkit-scrollbar-track {
            background: ${Ui};
            border-radius: 8px;
        }

        :host::-webkit-scrollbar-thumb {
            background-color: ${ji};
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
            scrollbar-color: ${ji} ${Ui};
        }

        .table-list.hidden {
            visibility: hidden;
            opacity: 0;
        }

        .header {
            position: absolute;
            top: 0;
            ${P.labelFont};
        }

        .scroll-indicator {
            height: 32px;
            padding-left: 8px;
            position: absolute;
            top: 0;
            right: 0;
            background: ${b.pageInteraction.backgroundColor};
        }

        .scroll-indicator ${C} {
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
            transition: ${X.interaction};
        }

        .loading-wrapper {
            transition: ${X.pretty};
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
    `,stateInitStatic:{canScroll:!1,debouncedResize:hf(()=>Fh(on.FirstThenWait,{milliseconds:30})),rowStyles:{},isPainting:!1,itemsPainted:0},initCallback({inputs:e,state:t,updateState:r}){const n=e.columns.filter(o=>!o.disabled);r({rowStyles:n.reduce((o,i)=>(o[i.key]={width:void 0,left:void 0},o),t.rowStyles)})},renderCallback({inputs:e,state:t,updateState:r,events:n,dispatch:o}){var h;const i=e.columns.filter(m=>!m.disabled),a=[e.rows[0],...e.rows].filter(we);function s(m){m instanceof HTMLElement&&t.debouncedResize(()=>{r({canScroll:m.scrollWidth>m.clientWidth})})}const l=e.pagination&&((h=e.pagination)==null?void 0:h.pageCount)>1?c`
                      <${Gi.assign({currentPage:e.pagination.currentPage,pageCount:e.pagination.pageCount})}
                          class=${fe({"blocked-pagination":!!e.showLoading})}
                          ${y(Gi.events.pageChange,m=>{o(new n.pageChange(m.detail))})}
                      ></${Gi}>
                  `:$;function u(m,g){return c`
                <div
                    class="row-wrapper"
                    ${g>0?y("click",w=>{var k,A;(A=(k=m.rowActions)==null?void 0:k.click)==null||A.call(k,{clickEvent:w,dispatch:o})}):$}
                >
                    ${i.map((w,k)=>{var S,M,F,W;const A=m.cells[w.key];return c`
                            <div
                                class=${fe({"row-item":!0,sticky:(S=w.mobile)!=null&&S.sticky?((M=w.mobile)==null?void 0:M.sticky)&&t.canScroll:!1})}
                                style=${w.style?w.style:p`
                                          left: ${I(`${(F=t.rowStyles[w.key])==null?void 0:F.left}px`)};
                                          min-width: ${k>=i.length-1?I("unset"):I(`${(W=t.rowStyles[w.key])==null?void 0:W.width}px`)};
                                      `}
                            >
                                <div
                                    class=${fe({"row-content":!0,hidden:g===0})}
                                    ${oa(ee=>{var ve,lt;const ie=ee.closest(".table-list"),ce=ie==null?void 0:ie.getBoundingClientRect().left,G=ie==null?void 0:ie.querySelectorAll(".row-item")[k],ae=G==null?void 0:G.getBoundingClientRect().left,Ce=ee.getBoundingClientRect().width;(!((ve=t.rowStyles[w.key])!=null&&ve.width)||Ce>((lt=t.rowStyles[w.key])==null?void 0:lt.width))&&r({rowStyles:{...t.rowStyles,[w.key]:{width:Ce,left:ce?ae-ce:ae}}}),r({itemsPainted:t.itemsPainted+1})})}
                                >
                                    ${A}
                                </div>
                                ${ye(g===0,c`
                                        <span class="header">${w.title}</span>
                                    `)}
                            </div>
                        `})}
                </div>
            `}const f=t.itemsPainted<i.length*a.length||!!e.showLoading;return c`
            <div
                class=${fe({"table-wrapper":!0,"can-scroll":t.canScroll})}
            >
                <div
                    class=${fe({"table-list":!0,hidden:f})}
                    ${Ar(m=>{s(m.target)})}
                    ${y("scroll",m=>{s(m.target)})}
                    ${y("keydown",m=>{e.showLoading&&(m.preventDefault(),m.stopImmediatePropagation())})}
                >
                    ${a.filter(we).map((m,g)=>c`
                            ${u(m,g)}
                        `)}
                    ${ye(t.canScroll,c`
                            <div class="scroll-indicator">
                                <${C.assign({icon:Bd})}></${C}>
                            </div>
                        `)}
                </div>
                <div
                    class=${fe({"loading-wrapper":!0,hidden:!f})}
                >
                    <${tn.assign({size:en.Large})}></${tn}>
                </div>
                ${l}
            </div>
        `}});async function i5(e){return navigator.clipboard.writeText(e)}const a5="…";function s5(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${a5}${n}`}function l5(e){return!(e%1)}function c5(e){return e.letterCount==null?4:l5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const q=ne()({tagName:"toniq-middle-ellipsis",events:{copy:re()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${X.interaction};
            ${P.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${C} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${C} {
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

        ${Pt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${X.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return c``;const i=e.text,a=c5(e),s=!!e.externalLink,l=!!e.copyOnClick,u=i.length>a*2+2,f=u?s5(i,a):i,h=u?i:"",m=s?Pd:l?qd:void 0,g=m?c`
                  <${C.assign({icon:m})}></${C}>
              `:"",w=c`
            <span title=${h} class="text-content">
                ${ye(!!e.copyOnClick,c`
                        <span
                            class=${fe({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${y("click",k=>{var S,M;const A=(M=(S=k.currentTarget)==null?void 0:S.querySelector)==null?void 0:M.call(S,"a");if(!A)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");A.click()})}
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
                        ${y("click",async()=>{await i5(i),t(new r.copy),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${w} ${g}
                    </button>
                `:c`
                    ${w}
                `:c``}}),Vr=ne()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>p`
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
    `,renderCallback({inputs:e,cssVars:t,host:r}){const n=mr({value:e.percent,max:100,min:0}),o=`${n}%`;return wo({forCssVar:t["toniq-progress-width"],onElement:r,toValue:o}),r.setAttribute("title",`${o} finished`),n?c`
                <div class="progress"></div>
            `:$}}),K=ne()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:re()},cssVars:{"toniq-radio-group-unchecked-radio-color":String($e("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String($e("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String($e("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String($e("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${P.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                opacity ${X.interaction};
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
            transition: ${X.interaction};
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

        ${Pt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Kt};
        }

        .wrapper.disabled::before {
            ${Kt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:nu()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return u5(e.entries).map(i=>d5(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function u5(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${K.tagName} was given duplicate entry values.`),Object.values(t)}function d5(e,t,r,n){const o=t===r.value,i=c`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return c`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${fe({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${y("click",()=>{n()})}
        >
            <input
                ${y("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function Wi(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((u,f)=>{const h=e[f+1];return h==null?!0:u<=t&&h>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function h5(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=f5(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Lc(o,r),o.length>r&&Lc(o,r)),o}function Lc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function f5(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const D={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Gr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"},rn={hot:"rgb(200,0,0)",medium:"orange",cold:"rgb(0,200,0)"};function ar(e){return p`
        background-color: ${I(rn[e])};
        color: ${I(rn[e])};
    `}function p5(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${D.lowerLabelWrapper} .${D.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${D.upperLabelWrapper} .${D.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function m5(e,t=8){const r=p5(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Oi({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function bn(e){return Ye(e)&&e.min!==void 0&&e.max!==void 0}function La(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${D.range}`);return(t==null?void 0:t.clientWidth)??0}function Yi(e,t,r){return`${r?n1(e):e} ${t}`}function g5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function w5({value:e,double:t,min:r,max:n}){return t?bn(e)?{min:mr({value:e.min,min:r,max:Math.min(e.max,n)}),max:mr({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:bn(e)?r:mr({value:e,min:r,max:n})}function v5({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:bn(e)?{min:Wi(n,e.min),max:Wi(n,e.max)}:Wi(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function Hi(e,t,r){return r?t[e]||0:e}function b5(e){return{actualLimits:g5(e),actualValue:w5(e)}}function y5(e,t){var n,o,i;let r=!1;if(bn(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${D.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${D.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${D.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function sh(e,t){const{actualValue:r,actualLimits:n}=b5({...e}),o=h5(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=v5({actualValue:r,actualLimits:n,logScale:i,logRange:o}),u=La(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:u,suffix:a}}const jt=16,Rc=p`
    ${jt}px
`,qc=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Rc};
    width: ${Rc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${X.interaction};
    ${H(b.accentPrimary)};
`,Pc=p`
    transform: scale(1.2);
`;function k5(e){return e>100*(2/3)?"cold":e>100*(1/3)?"medium":"hot"}function zr(e){requestAnimationFrame(()=>{const t=sh(e.instanceInputs,e).elementValue;y5(t,e)&&(e.setAttribute("disabled","true"),zr(e))})}const Z=ne()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:re()},styles:p`
        :host {
            display: block;
        }

        .${I(D.range)}-temp {
            background: linear-gradient(
                90deg,
                ${I(rn.cold)},
                ${I(rn.medium)},
                ${I(rn.hot)}
            );
        }

        .${I(D.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${H(b.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${H(b.accentPrimary)};
        }

        .progress-temp {
            background-color: transparent;
        }

        .${I(D.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${P.boldParagraphFont};
            ${He};
        }

        .${I(D.labelPixelMarginWrapper)},
            .${I(D.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${I(D.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${I(D.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Pt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${I(D.lowerSlider)},
        .${I(D.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${I(D.slider)}::-moz-range-thumb {
            ${qc}
        }

        .${I(D.slider)}.hot::-moz-range-thumb {
            ${ar("hot")}
        }
        .${I(D.slider)}.medium::-moz-range-thumb {
            ${ar("medium")}
        }
        .${I(D.slider)}.cold::-moz-range-thumb {
            ${ar("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${I(D.slider)}::-webkit-slider-thumb {
            ${qc}
        }

        .${I(D.slider)}.hot::-webkit-slider-thumb {
            ${ar("hot")}
        }
        .${I(D.slider)}.medium::-webkit-slider-thumb {
            ${ar("medium")}
        }
        .${I(D.slider)}.cold::-webkit-slider-thumb {
            ${ar("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${I(D.slider)}::-webkit-slider-thumb:hover {
            ${Pc}
        }

        /* these selectors fail if combined with a comma */
        .${I(D.slider)}::-moz-range-thumb:hover {
            ${Pc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{zr(e)}),e.addEventListener("keydown",()=>{zr(e)}),e.addEventListener("keyup",()=>{zr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:u,elementValue:f,elementLimits:h,rangeWidth:m}=sh({...e},t);if(zr(t),bn(f))return g(a,f,h);return k(a,f,h);function g(A,S,M){const F={left:Ut((m-jt)*(S.min-M.min)/(M.max-M.min)+jt/2),right:Ut((m-jt)*(M.max-S.max)/(M.max-M.min)+jt/2)},W=Yi(A.min,u,l),ee=Yi(A.max,u,l);requestAnimationFrame(()=>{const ve=m5(t);ve!==o.labelOverlap&&i({labelOverlap:ve})});const ie=(M.max-S.max)/(M.max-M.min)>.5,ce=Oi({value:S.min,limits:{min:M.min,max:S.max},flip:!0}),G=Oi({value:S.max,limits:{min:S.min,max:M.max},flip:!1}),ae=o.labelOverlap&&ie?o.labelOverlap:0,Ce=o.labelOverlap&&!ie?o.labelOverlap:0;return c`
                <div
                    class="range"
                    ${Ar(()=>{i({rangeWidth:La(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${F.left}; right:${F.right}"
                    ></div>
                    <span
                        class="${D.labelOuterWrapper} ${D.lowerLabelWrapper}"
                        style="left: ${F.left}"
                    >
                        <span
                            class="${D.labelPercentMarginWrapper}"
                            style="margin-left: ${ii(ce)}"
                        >
                            <span
                                class="${D.labelPixelMarginWrapper}"
                                style="margin-right: ${Ut(Ce)}"
                                ${cr(Gr.lowerLabel)}
                            >
                                ${W}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${D.labelOuterWrapper} ${D.upperLabelWrapper} ${D.rightAlignedLabelWrapper}"
                        style="right: ${F.right}"
                    >
                        <span
                            class="${D.labelPercentMarginWrapper}"
                            style="margin-right: ${ii(G)}"
                        >
                            <span
                                class="${D.labelPixelMarginWrapper}"
                                style="margin-left: ${Ut(ae)}"
                                ${cr(Gr.upperLabel)}
                            >
                                ${ee}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${D.lowerSlider} ${D.slider}"
                            .min=${M.min}
                            .max=${M.max}
                            .value=${S.min}
                            ${y("input",ve=>{const lt=ve.target,Lr={...A,min:Hi(Number(lt.value),s,l)};w(Lr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${D.upperSlider} ${D.slider}"
                            step=${e.step}
                            .min=${M.min}
                            .max=${M.max}
                            .value=${S.max}
                            ${cr(Gr.slider)}
                            ${y("input",ve=>{const lt=ve.target,Lr={...A,max:Hi(Number(lt.value),s,l)};w(Lr)})}
                        />
                    </div>
                </div>
            `}function w(A){i({internalValue:A}),e.disabled||n(new r.valueChange(A))}function k(A,S,M){const F=Ut((m-jt)*(M.max-S)/(M.max-M.min)+jt/2),W=Yi(A,u,l),ee=Oi({value:S,limits:M,flip:!1});return c`
                <div
                    class="range ${e.colorTemperature?"range-temp":""}"
                    ${Ar(()=>{i({rangeWidth:La(t)})})}
                >
                    <div
                        class="progress ${e.colorTemperature?"progress-temp":""}"
                        style="left: 0px; right: ${F}"
                    ></div>
                    <span
                        class="${D.labelOuterWrapper} ${D.rightAlignedLabelWrapper}"
                        style="right: ${F}"
                    >
                        <span
                            class="${D.labelPercentMarginWrapper}"
                            style="margin-right: ${ii(ee)}"
                            ${cr(Gr.label)}
                        >
                            ${W}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${D.slider} ${e.colorTemperature?k5(Math.abs(ee)):""}"
                        step=${e.step}
                        .min=${M.min}
                        .max=${M.max}
                        .value=${S}
                        ${cr(Gr.slider)}
                        ${y("input",ie=>{const ce=ie.target,G=Hi(Number(ce.value),s,l);w(G)})}
                    />
                </div>
            `}}});var lh=(e=>(e.Default="default",e.TextOnly="text-only",e))(lh||{});const zi=ne()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${P.boldParagraphFont};
            ${He};
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

            ${H(b.accentSecondary)};
            transition:
                color ${X.interaction},
                background-color ${X.interaction};
        }

        ${Pt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${H(b.accentPrimary)};
        }

        :host(:hover) button {
            ${H(b.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${H(b.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${H(b.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${H(b.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${H(b.pageInteraction)};
            border-color: ${b.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${H(b.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${b.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${H(b.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Kt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?c`
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
              `:"",r=e.text?c`
                  <span class="text-template">${e.text}</span>
              `:"";return c`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),nn=us({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${wn.menuShadow};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return c`
            <slot></slot>
        `}}),co=ne()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>p`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${X.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${X.pretty} ${X.pretty},
                opacity ${X.pretty};
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return c`
            <div
                class="slot-wrapper"
                ${y("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${nn}>${e.tooltipContent}</${nn}>
            </div>
        `}}),Qr=ne()({tagName:"toniq-top-tabs",events:{routeChange:re(),valueChange:re()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>p`
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
                border-bottom-width ${X.interaction},
                border-color ${X.interaction},
                padding-bottom ${X.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${de};
            ${is};
            cursor: pointer;
            display: inline-block;
            ${P.paragraphFont};
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

        ${zt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${P.boldFont};
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=e.tabs.map(o=>{var l;const i=o.value===e.value,a=o.icon?c`
                      <${C.assign({icon:o.icon})}></${C}>
                  `:"",s=o.label?c`
                      <${zt.assign({text:o.label})}></${zt}>
                  `:"";return c`
                <li
                    ${df("tab")}
                    role="presentation"
                    class=${fe({selected:i})}
                >
                    <${Ke.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:pt.RouteLink})}
                        class="tab ${fe({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${y("click",u=>{var f;i||Wo(u)&&((f=o.link)!=null&&f.route&&t(new r.routeChange(o.link.route)),t(new r.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Ke}>
                </li>
            `});return c`
            <ul role="tablist">
                ${n}
                <li></li>
            </ul>
        `}}),ch=U({title:"Data",parent:void 0}),Ro=ne()({tagName:"toniq-icon-book-viewer",styles:p`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${b.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return c`
            <${C.assign({icon:e.icon})}></${C}>
        `}}),ei=Object.values(At).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),A5=Object.keys(ei).sort();function ks(e){return{controlType:V.Dropdown,initValue:e,options:["None",...A5]}}const uh={"CSS color":{controlType:V.Color,initValue:""},[String(d["toniq-icon-stroke-color"].name)]:{controlType:V.Color,initValue:""},[String(d["toniq-icon-fill-color"].name)]:{controlType:V.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:V.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:V.Number,initValue:2}};function uo(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),_(n,"number")&&(n=qa({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const x5=U({title:"Social Urls",parent:ch,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return c`
                        <${Ro.assign({icon:n})}></${Ro}>
                    `}})}Object.entries(_d).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),oe=U({title:"Elements",parent:void 0}),C5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:p`
            ${zt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],S5=U({title:zt.tagName,parent:oe,elementExamplesCallback({defineExample:e}){C5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:p`
                    .bold {
                        ${P.boldFont}
                    }

                    ${t.extraStyle??p``}
                `,renderCallback({state:r,updateState:n}){return c`
                        <${zt.assign({text:t.text})}
                            ${y("click",()=>{n({isBold:!r.isBold})})}
                            class=${fe({bold:r.isBold})}
                        ></${zt}>
                        More text
                    `}})})}}),M5=U({parent:oe,title:ge.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:dr.Secondary}},{name:"Outline",inputs:{variant:dr.Outline}},{name:"Text Only",inputs:{variant:dr.TextOnly}},{name:"Disabled",inputs:{disabled:!0}},{name:"Right Icon",inputs:{iconPlacement:"right",variant:dr.Outline}},{name:"Pulsing Effect",inputs:{effect:e0.Pulse}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
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
                `,renderCallback({state:n,updateState:o}){return n.timeoutId||o({timeoutId:window.setTimeout(()=>{o({showIcon:!n.showIcon,timeoutId:void 0})},1e3)}),c`
                        <${ge.assign({text:"Button",...r.inputs})}></${ge}>
                        <${ge.assign({icon:io,...r.inputs})}></${ge}>
                        <${ge.assign(n.showIcon?{icon:io,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${ge}>
                        <${ge.assign({text:"Button",icon:io,...r.inputs})}></${ge}>
                        <${ge.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${ge}>
                        <${ge.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ge}>
                    `}})})}}),Fc=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Be} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,I5=U({parent:oe,title:Be.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Fc,renderCallback(){return c`
                    <${Be.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:At["core-24"].map(t=>{const r=p`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${Be}>
                    <${Be.assign({enableAutomaticCycling:!0,templates:At["core-24"].map(t=>{const r=p`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${Be}>
                    <${Be.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:At["core-24"].map(t=>{const r=Hh({min:0,max:150}),n=p`
                                padding: 100px ${r}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return c`
                                <${C.assign({icon:t})} style=${n}></${C}>
                            `})})}></${Be}>
                `}}),e({title:"banner style",styles:Fc,renderCallback(){const t=p`
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
                    <${Be.assign({enableAutomaticCycling:!0,variant:ya.Banner,templates:At["core-24"].map(r=>c`
                                <div style=${t}>
                                    <${C.assign({icon:r})}></${C}>
                                </div>
                            `)})}></${Be}>
                    <${Be.assign({enableAutomaticCycling:!0,variant:ya.Banner,templates:[At["core-24"][0]].map(r=>c`
                                <div style=${t}>
                                    <${C.assign({icon:r})}></${C}>
                                </div>
                            `)})}
                        class=${Be.hostClasses["toniq-carousel-banner-variant"]}
                    ></${Be}>
                `}})}});function T5(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:V.Color,initValue:""}]);return Object.fromEntries(t)}function E5(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(we);return I(t.join(`
`))}const B5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Qi=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],D5=U({parent:oe,title:vt.tagName,controls:{Text:{controlType:V.Text,initValue:"Text"},...T5(vt)},elementExamplesCallback({defineExample:e}){B5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Qi.map(r=>!!r.inputs.checked),extraEntryStatuses:Qi.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:p`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Qi.map((i,a)=>{const s=(i.extraEntries??[]).map((u,f)=>{var h;return c`
                                    <${vt.assign({...t.inputs,...an(i.inputs,["checked"]),checked:!!((h=r.extraEntryStatuses[a])!=null&&h[f]),text:u})}
                                        ${y(vt.events.checkedChange,()=>{const m=[...r.extraEntryStatuses];m[a][f]=!m[a][f],n({extraEntryStatuses:m})})}
                                    ></${vt}>
                                `}),l=E5(o);return c`
                            <div class="checkbox-group" style=${l}>
                                <${vt.assign({...t.inputs,...an(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${y(vt.events.checkedChange,()=>{const u=[...r.checkedStatuses];u[a]=!u[a],n({checkedStatuses:u})})}
                                ></${vt}>
                                ${s}
                            </div>
                        `})}})})}}),N5=U({parent:oe,title:Ii.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Tt}},{inputs:{icon:Tt}},{inputs:{},template:c`
                    HTML child
                `},{inputs:{icon:Tt},template:c`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:Aa.Default}},{title:"secondary style",inputs:{variant:Aa.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>c`
                        <${Ii.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${ye(!!o.template,o.template)}</${Ii}>
                    `)}})})}}),L5=U({title:Fi.tagName,parent:oe,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=nh();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:Pi(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:Pi(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:Pi(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[B.Days,B.Hours]}}}].forEach(n=>{e({title:n.title,renderCallback(){return c`
                        <${Fi.assign({...n.inputs})}></${Fi}>
                    `}})})}}),Kn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],R5=[{title:"default"},{title:"transparent background",customStyle:p`
            ${as.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Zc=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],q5=U({title:Jn.tagName,parent:oe,controls:{Selected:{controlType:V.Dropdown,initValue:Kn[0].label,options:Kn.map(e=>e.label)},Direction:{controlType:V.Dropdown,initValue:"Down",options:$c(Ea)},Icon:ks(Dd.name),Prefix:{controlType:V.Text,initValue:"Sort by: "},"Force open":{controlType:V.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){R5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Zc.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Zc.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return c`
                            <${Jn.assign({...t.inputs,...i.inputs,options:Kn,value:r.selected[a]??Kn.find(l=>l.label===o.Selected),icon:ei[o.Icon],selectedLabelPrefix:o.Prefix,direction:Ea[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${y(Jn.events.selectChange,l=>{const u=[...r.selected];u[a]=l.detail,n({selected:u})})}
                            ></${Jn}>
                        `})}})})}}),P5=[{title:"empty",content:""},{title:"with text",content:"Error: there was an error"}],F5=U({title:Zi.tagName,parent:oe,elementExamplesCallback({defineExample:e}){P5.forEach(t=>{e({title:t.title,renderCallback(){return c`
                        <${Zi}>${t.content}</${Zi}>
                    `}})})}}),Vc="/toniq-labs-design-system";function dh(...e){const r=[globalThis.location.pathname.startsWith(Vc)?Vc:"",...e].filter(we);return sn(...r)}const sr=Array(30).fill(dh("/toniq-labs-logo.png")),fr=["Hello there.","There is stuff here."],$n=fr.concat(Array(30).fill(fr)),Z5=U({title:te.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({infoParagraphs:$n,imageUrls:sr,socialUrls:kg,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${te}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:sr,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${te}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:$n,viewMoreUrl:"https://toniqlabs.com"})}
                        ${y(te.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${te}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:$n})}></${te}>
                `}}),e({title:"with custom height",styles:p`
                ${te} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:$n})}></${te}>
                `}}),e({title:"smaller",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:sr,infoParagraphs:fr,cardTitle:"Featured Stuff"})}></${te}>
                `}}),e({title:"with social URLs",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:sr,infoParagraphs:fr,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${te}>
                `}}),e({title:"with custom template",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:sr,infoParagraphs:fr,cardTitle:"With custom Template",customTemplateCallback(t){return c`
                                <${Ct.assign({imageUrl:t})}></${Ct}>
                            `}})}></${te}>
                `}}),e({title:"with custom template statuses",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return c`
                    <${te.assign({imageUrls:sr.map((t,r)=>r%2?"/invalid-image.png":t),infoParagraphs:fr,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return c`
                                <${Ct.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${Cr.Loading}
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
                                        <${C.assign({icon:cs,fitContainer:!0})}
                                            style=${p`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${C}>
                                    </div>
                                    <div
                                        slot=${Cr.Error}
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
                                        <${C.assign({icon:Cd,fitContainer:!0})}
                                            style=${p`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${C}>
                                    </div>
                                </${Ct}>
                            `}})}></${te}>
                `}})}}),V5=U({title:Ht.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return c`
                    <${Ht.assign({flipped:t.flipped})}
                        ${y(Ht.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Ht}>
                `}})}}),G5=U({title:Ee.tagName,parent:oe,elementExamplesCallback({defineExample:e}){_c(ur).forEach(t=>{e({title:t,renderCallback(){return c`
                        <${Ee.assign({level:t})}>Some text</${Ee}>
                    `}})}),e({title:"can be restyled",styles:p`
                ${Ee}:first-of-type {
                    ${P.h4Font};
                }
            `,renderCallback(){return c`
                    <${Ee.assign({level:ur.H1})}>
                        This is an h1
                    </${Ee}>
                    <${Ee.assign({level:ur.H1})}>
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
                    <${Ee.assign({level:ur.H3})}>
                        title longer than bounds
                    </${Ee}>
                    <${Ee.assign({level:ur.H3})}>
                        title longer than bounds
                    </${Ee}>
                `}})}}),j5=U({parent:oe,title:Ke.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:pt.ReplacePage}},{title:"new tab",inputs:{linkType:pt.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:pt.NewTab}},{title:"route link",inputs:{linkType:pt.RouteLink}},{title:"link disabled",inputs:{linkType:pt.Disabled}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return c`
                        <${Ke.assign({url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Ke}>
                    `}})})}}),U5=U({title:C.tagName,parent:oe,controls:uh,elementExamplesCallback({defineExample:e}){const t=[{icon:jd},{icon:Gd},{icon:Rd},{icon:Tt},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>c`
                        <${C.assign({icon:n.icon})}
                            style=${uo(r)}
                        ></${C}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=p`
                    ${d["toniq-icon-fill-color"].name}: orange;
                `;return At["third-party-brands"].map(o=>c`
                        <${C.assign({icon:o})}
                            style=${uo(r)}
                        ></${C}>
                        <${C.assign({icon:o})}
                            style=${n}
                        ></${C}>
                    `)}}),e({title:"fit container",styles:p`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${C} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:r}){return c`
                    <${C.assign({icon:Tt,fitContainer:!0})}
                        style=${uo(r)}
                    ></${C}>
                `}})}}),W5=U({title:Xn.tagName,parent:oe,controls:{"External value":{controlType:V.Text,initValue:""},Placeholder:{controlType:V.Text,initValue:"placeholder"},Icon:ks(Zd.name),Suffix:{controlType:V.Text,initValue:"ICP"},"No browser helps":{controlType:V.Checkbox,initValue:!1},"Blocked characters":{controlType:V.Text,initValue:""},"Exclusive characters":{controlType:V.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:Na.Default}},{title:"outline",inputs:{variant:Na.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),c`
                            <${Xn.assign({...n.inputs,value:o["External value"]||i.value,icon:ei[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${y(Xn.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Xn}>
                        `))}})})}});function ti({entries:e,columns:t,createRowObject:r}){const n=Object.fromEntries(t.map(i=>[i.key,""]));return{rows:e.map((i,a)=>{const s=r(i,a);if(!it(Object.keys(n).sort(),Object.keys(s.cells).sort()))throw console.error("broken list table row",{cells:s.cells,columns:n}),new Error("List table row keys does not match expect column keys.");return s}),columns:t}}const hh="https://cdn-bitcoin.bioniq.io",O5=sn(hh,"content"),Y5=sn(hh,"thumbnail"),pr={thumbnail(e){return sn(Y5,e)},content(e){return sn(O5,e)}},H5=Array(5).fill({imageUrl:pr.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:c`
        <div
            style=${p`
                display: flex;
                gap: 8px;
            `}
        >
            <${C.assign({icon:Qo})}></${C}>
            <span>0.00042753</span>
        </div>
    `,from:c`
        <${q.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${q}>
    `,to:c`
        <${q.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.stopImmediatePropagation()})}
        ></${q}>
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
                    ${de}
                    ${P.boldParagraphFont};
                    color: ${b.pageInteraction.foregroundColor};
                    cursor: pointer;
                `}
            >
                Cancel
            </button>
        </div>
    `}),z5=[{imageUrl:pr.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Payment Sent",price:c`
            <div
                style=${p`
                    display: flex;
                    gap: 8px;
                `}
            >
                <${C.assign({icon:Qo})}></${C}>
                <span>0.00042753</span>
            </div>
        `,from:c`
            <${q.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${q}>
        `,to:c`
            <${q.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${q}>
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
                        ${de}
                        ${P.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:pr.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Transfer",price:c`
            -
        `,from:c`
            <${q.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${q}>
        `,to:c`
            <${q.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${q}>
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
                        ${de}
                        ${P.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:pr.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Accept Offer",price:c`
            -
        `,from:c`
            <${q.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${q}>
        `,to:c`
            <${q.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${q}>
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
                        ${de}
                        ${P.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:pr.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Cancel Listing",price:c`
            -
        `,from:c`
            <${q.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${q}>
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
                        ${de}
                        ${P.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `}],Q5=[],J5=Array(5).fill({imageUrl:pr.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:c`
        <div
            style=${p`
                display: flex;
                gap: 8px;
            `}
        >
            <${C.assign({icon:Qo})}></${C}>
            <span>0.00042753</span>
        </div>
    `,from:c`
        <${q.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${q}>
    `,to:c`
        <${q.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.stopImmediatePropagation()})}
        ></${q}>
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
    `}),Ji=ti({entries:H5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE",mobile:{sticky:!0}},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),Gc=ti({entries:z5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),X5=ti({entries:Q5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:c`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),K5=ti({entries:J5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME",style:p`
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
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),$5=[{title:"basic"},{title:"with pagination",inputs:{pagination:{currentPage:1,pageCount:10}}},{title:"squished horizontally",styles:p`
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
            ${Fe} {
                width: 100%;
                flex-grow: 1;
            }
        `},{title:"show loading",styles:p`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{showLoading:!0,pagination:{currentPage:3,pageCount:10}}}],jc=us({tagName:"toniq-test-resize",stateInitStatic:{message:"",cleanup:void 0},initCallback({updateState:e,state:t}){if(!t.cleanup){const r=window.setInterval(()=>{t.message?e({message:""}):e({message:"April 3, 2024 (1:57pm)"})},1e3);e({cleanup(){window.clearInterval(r)}})}},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0})},renderCallback({state:e}){return e.message}}),_5=U({title:Fe.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"no action",renderCallback(){return c`
                    <${Fe.assign(K5)}></${Fe}>
                `}}),e({title:"takes time to load",stateInitStatic:{tableInputs:{...X5,showLoading:!0,pagination:{currentPage:1,pageCount:5}}},renderCallback({state:t,updateState:r}){return setTimeout(()=>{r({tableInputs:{...t.tableInputs,...Gc,showLoading:!1}})},5e3),c`
                    <${Fe.assign(t.tableInputs)}
                        ${y(Fe.events.pageChange,n=>{r({tableInputs:{...t.tableInputs,...Gc,pagination:{currentPage:2,pageCount:5}}})})}
                    ></${Fe}>
                `}}),$5.forEach(t=>{var r,n;e({title:t.title,styles:p`
                    ${I(t.styles)}
                `,stateInitStatic:{currentPage:(n=(r=t.inputs)==null?void 0:r.pagination)==null?void 0:n.currentPage},renderCallback({state:o,updateState:i}){var s;const a=(s=t.inputs)!=null&&s.pagination&&o.currentPage?{pagination:{...t.inputs.pagination,currentPage:o.currentPage}}:{};return c`
                        <${Fe.assign({...Ji,...t.inputs,...a})}
                            ${y(Fe.events.pageChange,l=>{i({currentPage:l.detail})})}
                        ></${Fe}>
                    `}})}),e({title:"changing child size",styles:p`
                :host {
                    width: 600px;
                }
            `,stateInitStatic:{tableInputs:{...Ji,rows:Ji.rows.map(t=>({...t,cells:{...t.cells,date:c`
                                    <${jc}></${jc}>
                                `}}))}},renderCallback({state:t}){return c`
                    <${Fe.assign(t.tableInputs)}></${Fe}>
                `}})}}),ev=U({title:tn.tagName,parent:oe,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:en.Small}},{title:"large",inputs:{size:en.Large}},{title:"whole page",inputs:{size:en.WholePage},styles:p`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??p``,renderCallback(){return c`
                        <${tn.assign(r.inputs)}></${tn}>
                    `}})})}}),tv=U({title:q.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return c`
                    <${q.assign({text:"Long string instead of text"})}></${q}>
                `}}),e({title:"Short text",renderCallback(){return c`
                    <${q.assign({text:"Short text"})}></${q}>
                `}}),e({title:"External Link",renderCallback(){return c`
                    <${q.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${q}>
                `}}),e({title:"Copyable",renderCallback(){return c`
                    <${q.assign({text:"Long text that you can copy",copyOnClick:!0})}></${q}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${q} {
                    ${q.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${q.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${q.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${q.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return c`
                    <${q.assign({text:"long text with custom colors",copyOnClick:!0})}></${q}>
                `}})}}),rv=U({title:Vr.tagName,parent:oe,elementExamplesCallback({defineExample:e}){[{title:"halfway",percent:50},{title:"nothing",percent:0},{title:"complete",percent:100},{title:"custom height",styles:p`
                ${Vr} {
                    height: 32px;
                }
                :`,percent:75},{title:"custom width",styles:p`
                ${Vr} {
                    width: 200%;
                }
                :`,percent:75}].forEach(r=>{e({title:r.title,styles:r.styles,renderCallback(){return c`
                        <${Vr.assign({percent:r.percent})}></${Vr}>
                    `}})})}}),jr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Pe={basic:jr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...jr.slice(1)],disabled:[{...jr[0],disabled:!0},...jr.slice(1)],noLabels:Mh(jr,e=>({...e,label:void 0}))},nv=U({title:K.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Pe.basic[0].value},renderCallback({state:t,updateState:r}){return c`
                    <${K.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${y(K.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${K}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Pe.basic[0].value},styles:p`
                ${K} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return c`
                    <${K.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${y(K.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${K}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Pe.longText[0].value},styles:p`
                ${K} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return c`
                    <${K.assign({entries:Pe.longText,value:t.selectedValue})}
                        ${y(K.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${K}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Pe.noLabels[0].value},renderCallback({state:t,updateState:r}){return c`
                    <${K.assign({entries:Pe.noLabels,value:t.selectedValue})}
                        ${y(K.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${K}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Pe.disabled[1].value},renderCallback({state:t,updateState:r}){return c`
                    <${K.assign({entries:Pe.disabled,value:t.selectedValue})}
                        ${y(K.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${K}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Pe.basic[0].value},styles:p`
                ${K} {
                    ${K.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${K.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${K.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${K.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return c`
                    <${K.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${y(K.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${K}>
                `}})}}),nt=p`
    ${Z} {
        width: 300px;
    }
`,Xi={min:10,max:50},ov=U({title:Z.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,...Xi})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({double:!0,value:t.value,min:0,max:100})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,...Xi,suffix:"ICP"})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,min:-100,max:100})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${nt}

                ${Z} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,...Xi})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${nt}

                ${Z} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({double:!0,value:t.value,min:0,max:100})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${Z}>
                `}}),e({title:"Color Temperature",stateInitStatic:{value:9},styles:p`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return c`
                    <${Z.assign({value:t.value,colorTemperature:!0,min:0,max:100})}
                        ${y(Z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${Z}>
                `}})}}),iv=[{title:"default",inputs:{}},{title:"text only",inputs:{variant:lh.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Uc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],av=U({title:zi.tagName,parent:oe,controls:{Text:{controlType:V.Text,initValue:"Toggle Button"},Icon:ks(Fd.name)},elementExamplesCallback({defineExample:e}){iv.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Uc.map(r=>!!r.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Uc.map((i,a)=>c`
                            <${zi.assign({...t.inputs,toggled:r.buttonStates[a],icon:ei[o.Icon],text:o.Text,...an(i.inputs,["toggled"])})}
                                ${y("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${zi}>
                        `)}})})}}),sv=U({parent:oe,title:co.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:p`
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
                        <${co.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${co}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:c`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),lv=U({parent:oe,title:nn.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${co.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return c`
                    <${nn}>This is a tooltip.</${nn}>
                `}})}}),cv=[sv,lv],uv=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:p`
            :host {
                width: 500px;
            }

            ${Qr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:p``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:p``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:va},{label:"label here",value:2,icon:va},{label:"",value:3,icon:Tt,disabled:!0},{label:"16px icon",value:4,icon:Tt},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],dv=U({title:Qr.tagName,parent:oe,elementExamplesCallback({defineExample:e}){uv.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:p`
                    ${t.extraStyles??p``}
                `,renderCallback({state:r,updateState:n}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return c`
                        <${Qr.assign({tabs:o,value:r.selectedTab})}
                            ${y(Qr.events.valueChange,i=>{n({selectedTab:i.detail})})}
                        ></${Qr}>
                    `}})})}}),fh=U({title:"Icons",parent:void 0,controls:uh}),hv=Object.entries(At).map(([e,t])=>U({title:e,parent:fh,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return c`
                                <${Ro.assign({icon:n})}
                                    style=${uo(o)}
                                ></${Ro}>
                            `}}))}}));function ph(e){const t=fv(e),r=ke(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return le(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function fv(e){typeof e!="string"&&(e=String(e));const n=`{"${Hc(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const ri=U({title:"Styles",parent:void 0}),pv=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${P.labelFont};
        ${P.monospaceFont};
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
        ${P.h3Font};
    }
`;function mv(e,t,r){const n=ph(H(r));return e({title:t,styles:pv,renderCallback(){return c`
                <div class="color-example" style=${H(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>c`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const gv=U({title:"Colors",parent:ri,elementExamplesCallback({defineExample:e}){le(b).map(t=>mv(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),wv=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${P.labelFont};
        ${P.monospaceFont};
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
`;function vv(e,t,r){const n=ph(r);return e({title:t,styles:wv,renderCallback(){return c`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${le(n).map(o=>{const i=n[o];return c`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const bv=U({title:"Fonts",parent:ri,elementExamplesCallback({defineExample:e}){le(P).map(t=>{const r=P[t];return vv(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),yv=U({title:"Shadows",parent:ri,elementExamplesCallback({defineExample:e}){xh(wn).forEach(([t,r])=>{e({title:t,styles:p`
                        div {
                            width: 50px;
                            height: 50px;
                            border-radius: 8px;
                            background-color: white;
                            margin: 16px;
                            ${r};
                        }
                    `,renderCallback(){return c`
                            <div></div>
                        `}})})}}),kv=[oe,fh,ri,ch],Av=[...hv,...cv,x5,S5,M5,I5,D5,N5,gv,L5,q5,F5,Z5,V5,bv,G5,j5,U5,W5,ev,tv,rv,nv,yv,ov,av,dv,_5].sort((e,t)=>e.title.localeCompare(t.title)),xv=[...kv,...Av];Uo({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${xi} {
            height: 100%;
            width: 100%;
            ${P.paragraphFont};
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
            <${xi.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:xv,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${at.NavHeader}>
                    <img src=${dh("/logo.png")} />
                    <p>Design System</p>
                </div>
            </${xi}>
        `}});
