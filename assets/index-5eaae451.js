var V0=Object.defineProperty;var j0=(e,t,n)=>t in e?V0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var gr=(e,t,n)=>(j0(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function z0(e,t){return e.includes(t)}function Z0(e,t){return e.map(t)}function ke(e){return!!e}function wc(e,t){return e.match(t)??[]}function W0(e){return e.replace(/,/g,"")}function vc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const U0={capitalizeFirstLetter:!1};function G0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Y0(e,t){return t.capitalizeFirstLetter?G0(e):e}function J0(e,t=U0){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Y0(r,t)}var dn;(function(e){e.Upper="upper",e.Lower="lower"})(dn||(dn={}));function X0(e){return e.toLowerCase()!==e.toUpperCase()}function Qa(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const o=e[r]||"";if(!X0(o)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===dn.Upper&&o!==o.toUpperCase())return!1;if(t===dn.Lower&&o!==o.toLowerCase())return!1}return!0}function Xr(e){return e.split("").reduce((n,r,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Qa(a,dn.Lower,{blockNoCaseCharacters:!0})||Qa(s,dn.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function hn(e,t){return e.split(t)}const K0=String(NaN);function bc(e){if(typeof e=="string"&&isNaN(Number(e)))return K0;const t=Number(e),n=t<0,r=String(Math.abs(t)),[o,i]=r.split("."),a=i?`.${i}`:"",l=wc(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(h=>h.split("").reverse().join("")).join(",");return[n?"-":"",l,a].join("")}function Q0(e){return typeof e=="number"?e:Number(typeof e=="string"?W0(e):e)}function eh(e){return String(e).includes("e")}function th({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function xi(e){const t=Math.pow(10,e.digits),n=e.number*t;return Number((Math.round(n)/t).toFixed(e.digits))}function Rn({value:e,min:t,max:n}){return Math.min(Math.max(e,t),n)}var es;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(es||(es={}));const nh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Se(e,t){return e?nh.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function yc(e,t){return e&&t.every(n=>Se(e,n))}function kc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(n=>wn(n).trim()).join(`
`))}function wn(e){return e?e instanceof Error?e.message:Se(e,"message")?String(e.message):String(e):""}function $c(e){return e instanceof Error?e:new Error(wn(e))}function rh(e,t){const n=$c(e);return n.message=`${t}: ${n.message}`,n}function Ti(e){return Array.isArray(e)?"array":typeof e}function de(e,t){return Ti(e)===t}function Xe(e){return!!e&&typeof e=="object"}function he(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function oh(e){return Object.fromEntries(e)}function xc(e,t,n=!1,r={}){const o=he(e),i=new Set(he(t));if(!n){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Se(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(h){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${h}`)}const l=e[a],c=t[a];r[a]||Tc(l,c,s,n,r[a]??{})})}function Tc(e,t,n,r,o){var s;const i=typeof e,a=typeof t;i!==a&&n(`type "${i}" did not match expected type "${a}"`);try{Se(t,"constructor")&&(!Se(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((l,c)=>{if(t.map(f=>{try{Tc(l,f,n,r,o);return}catch(m){return new Error(`entry at index "${c}" did not match expected shape: ${wn(m)}`)}}).filter(ke).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Xe(t)&&xc(e,t,r,o)}function ts({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const ns="Failed to compare objects using JSON.stringify";function rs(e,t,n){return ts({source:e,errorHandler(r){if(n)return"";throw r}})===ts({source:t,errorHandler(r){if(n)return"";throw r}})}function ut(e,t,n={}){try{return e===t?!0:Xe(e)&&Xe(t)?rs(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ut(e[o],t[o])):!1:rs(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const o=$c(r);throw o.message.startsWith(ns)||(o.message=`${ns}: ${o.message}`),o}}function Sc(e){return he(e).filter(t=>isNaN(Number(t)))}function ih(e){return Sc(e).map(n=>e[n])}function ah(e,t){return ih(t).includes(e)}function Cc(e,t){return he(e).filter(r=>{const o=e[r];return t(r,o,e)}).reduce((r,o)=>(r[o]=e[o],r),{})}function Zn(e,t){return Cc(e,n=>!t.includes(n))}function sh(e,t){return Cc(e,n=>t.includes(n))}function lh(e,t,n){const r=t;if(e.has(r))return e.get(r);{const o=n();return e.set(r,o),o}}function ve(e,t){let n=!1;const r=he(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(he(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function os(e,t){try{return Mc(e,t),!0}catch{return!1}}function Mc(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ia(){let e,t,n=!1;const r=new Promise((o,i)=>{e=a=>(n=!0,o(a)),t=a=>{n=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ia.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function Si(e){const t=ia();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Ac=globalThis.crypto;function ch({min:e,max:t}){const{min:n,max:r}=th({min:Math.floor(e),max:Math.floor(t)}),o=r-n+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Ac.getRandomValues(s),l=s.reduce((c,h,f)=>c+h*256**f,0);while(l>=a);return n+l%o}function Ec(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return Ac.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}function uh({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function dh(e){const t=Object.entries(e).map(([n,r])=>{if(r!=null)return`${n}=${String(r)}`}).filter(ke);return t.length?`?${t.join("&")}`:""}function hh(e){return uh({value:e,prefix:"?"}).split("&").map(r=>{const[o,...i]=hn(r,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(ke)}function fh(e,t){const n=de(e,"string")?new URL(e):e,r=hh(n.search),o=Object.fromEntries(r);return t&&xc(o,t),o}const mh="%",ph="px";function Dt(e){return aa({value:e,suffix:ph})}function Bo(e){return aa({value:e,suffix:mh})}function aa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Do="://";function gh(...e){const t=e.join("/"),[n,r=""]=t.includes(Do)?t.split(Do):["",t];let o=!1,i=!1;const a=r.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,h)=>{if(i)return s;const f=h[c+1];let m=l;const g=!l.includes("?")&&(f==null?void 0:f.startsWith("?"));if(f!=null&&f.startsWith("?")||g){i=!0;let w=!1;const $=h.slice(g?c+2:c+1).reduce((k,x)=>(x.includes("#")&&(w=!0),w?k.concat(x):[k,x].join("&")),"");m=[l,f,$].join("")}return s.concat(m)},[]);return[n,n?Do:"",a.join("/")].join("")}const wh=["k","M","B","T","P","E","Z","Y"];function sa({beforeDot:e,afterDot:t="",maxLength:n}){if(t.length){const r=n-e.length-1;if(r>0){const o=t.slice(0,r);return Number(o)?[e,o].join("."):e}}return e}function vh(e,t,n){const[r,o]=hn(e,"."),i=bc(r),a=wc(i,/,/g).length,s=t[a-1],[l,c]=hn(i,","),h=[c,o].join("");return l.length+1>n?["0.",l[0],t[a]].join(""):[sa({beforeDot:l,afterDot:h,maxLength:n-1}),s].join("")}const is=3;function bh({input:e,maxLength:t}){const n=String(e),[r,o]=hn(n,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=hn(r,"."),h=i.length+is;return h===t?[l,s].join(""):h>t?a==="-"?"0":String(1/0):[sa({afterDot:c,beforeDot:l,maxLength:t-i.length+is}),s].join("")}function yh(e,t){const[n,r]=hn(bc(e),".");if(n.length<=t)return sa({beforeDot:n,afterDot:r,maxLength:t})}function kh(e,{customSuffixes:t=wh,maxLength:n=6}={}){const r=Q0(e);if(isNaN(r)||r===1/0)return String(r);if(eh(r))return bh({input:r,maxLength:n});const o=String(r),i=yh(o,n);return i??vh(o,t,n)}function $h(e,t){return Se(e,"entryType")&&e.entryType===t}var pe;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(pe||(pe={}));function Yt(e,t){return e.controlType===t}var O;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(O||(O={}));const Ic=Symbol("any-type"),xh={[O.Checkbox]:!1,[O.Color]:"",[O.Dropdown]:"",[O.Hidden]:Ic,[O.Number]:0,[O.Text]:""};function Th(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,o])=>{const i=xh[o.controlType];i!==Ic&&(typeof i!=typeof o.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function la(e,t){const n=Kr(e.title);return e.parent?[...la(e.parent,!1),Kr(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function Kr(e){return vc(e).toLowerCase().replaceAll(/\s/g,"-")}function Sh({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}function U(e){const t={...e,entryType:pe.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(r){const o={...r,entryType:pe.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(ke)};n.add(r.title),t.elementExamples[Kr(o.title)]=o}}),t}var nt;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(nt||(nt={}));async function Ci(e=1){const t=ia();function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}async function Ch(e){return Mh(e,1)}async function Mh(e,t){return new Promise(n=>{new IntersectionObserver((o,i)=>{Mc(o,1),i.disconnect(),n(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=globalThis,ca=Br.ShadowRoot&&(Br.ShadyCSS===void 0||Br.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ua=Symbol(),as=new WeakMap;let Lc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ua)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ca&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=as.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&as.set(n,t))}return t}toString(){return this.cssText}};const N=e=>new Lc(typeof e=="string"?e:e+"",void 0,ua),Dr=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Lc(n,e,ua)},Ah=(e,t)=>{if(ca)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=Br.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},ss=ca?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return N(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Eh,defineProperty:Ih,getOwnPropertyDescriptor:Lh,getOwnPropertyNames:Ph,getOwnPropertySymbols:qh,getPrototypeOf:Nh}=Object,kt=globalThis,ls=kt.trustedTypes,Oh=ls?ls.emptyScript:"",Ro=kt.reactiveElementPolyfillSupport,_n=(e,t)=>e,Qr={toAttribute(e,t){switch(t){case Boolean:e=e?Oh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},da=(e,t)=>!Eh(e,t),cs={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:da};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),kt.litPropertyMetadata??(kt.litPropertyMetadata=new WeakMap);let nn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=cs){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Ih(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Lh(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??cs}static _$Ei(){if(this.hasOwnProperty(_n("elementProperties")))return;const t=Nh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_n("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_n("properties"))){const n=this.properties,r=[...Ph(n),...qh(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(ss(o))}else t!==void 0&&n.push(ss(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ah(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Qr).toAttribute(n,r.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Qr;this._$Em=o,this[o]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??da)(this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(n=>this._$EO(n,this[n]))),this._$Ej()}updated(t){}firstUpdated(t){}};nn.elementStyles=[],nn.shadowRootOptions={mode:"open"},nn[_n("elementProperties")]=new Map,nn[_n("finalized")]=new Map,Ro==null||Ro({ReactiveElement:nn}),(kt.reactiveElementVersions??(kt.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hn=globalThis,eo=Hn.trustedTypes,us=eo?eo.createPolicy("lit-html",{createHTML:e=>e}):void 0,ha="$lit$",lt=`lit$${(Math.random()+"").slice(9)}$`,fa="?"+lt,Bh=`<${fa}>`,zt=document,Wn=()=>zt.createComment(""),Un=e=>e===null||typeof e!="object"&&typeof e!="function",Pc=Array.isArray,qc=e=>Pc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",_o=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ds=/-->/g,hs=/>/g,Pt=RegExp(`>|${_o}(?:([^\\s"'>=/]+)(${_o}*=${_o}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fs=/'/g,ms=/"/g,Nc=/^(?:script|style|textarea|title)$/i,Oc=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Dh=Oc(1),Rh=Oc(2),Pe=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),ps=new WeakMap,_t=zt.createTreeWalker(zt,129);function Bc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return us!==void 0?us.createHTML(t):t}const Dc=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",a=Cn;for(let s=0;s<n;s++){const l=e[s];let c,h,f=-1,m=0;for(;m<l.length&&(a.lastIndex=m,h=a.exec(l),h!==null);)m=a.lastIndex,a===Cn?h[1]==="!--"?a=ds:h[1]!==void 0?a=hs:h[2]!==void 0?(Nc.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=Pt):h[3]!==void 0&&(a=Pt):a===Pt?h[0]===">"?(a=o??Cn,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Pt:h[3]==='"'?ms:fs):a===ms||a===fs?a=Pt:a===ds||a===hs?a=Cn:(a=Pt,o=void 0);const g=a===Pt&&e[s+1].startsWith("/>")?" ":"";i+=a===Cn?l+Bh:f>=0?(r.push(c),l.slice(0,f)+ha+l.slice(f)+lt+g):l+lt+(f===-2?s:g)}return[Bc(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Gn{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,h]=Dc(t,n);if(this.el=Gn.createElement(c,r),_t.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=_t.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(ha)){const m=h[a++],g=o.getAttribute(f).split(lt),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?_c:w[1]==="?"?Hc:w[1]==="@"?Fc:or}),o.removeAttribute(f)}else f.startsWith(lt)&&(l.push({type:6,index:i}),o.removeAttribute(f));if(Nc.test(o.tagName)){const f=o.textContent.split(lt),m=f.length-1;if(m>0){o.textContent=eo?eo.emptyScript:"";for(let g=0;g<m;g++)o.append(f[g],Wn()),_t.nextNode(),l.push({type:2,index:++i});o.append(f[m],Wn())}}}else if(o.nodeType===8)if(o.data===fa)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(lt,f+1))!==-1;)l.push({type:7,index:i}),f+=lt.length-1}i++}}static createElement(t,n){const r=zt.createElement("template");return r.innerHTML=t,r}}function Zt(e,t,n=e,r){var a,s;if(t===Pe)return t;let o=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const i=Un(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=Zt(e,o._$AS(e,t.values),o,r)),t}class Rc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??zt).importNode(n,!0);_t.currentNode=o;let i=_t.nextNode(),a=0,s=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new vn(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new Vc(i,this,t)),this._$AV.push(c),l=r[++s]}a!==(l==null?void 0:l.index)&&(i=_t.nextNode(),a++)}return _t.currentNode=zt,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class vn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Zt(this,t,n),Un(t)?t===ee||t==null||t===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==Pe&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qc(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ee&&Un(this._$AH)?this._$AA.nextSibling.data=t:this.$(zt.createTextNode(t)),this._$AH=t}g(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Gn.createElement(Bc(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const a=new Rc(o,this),s=a.u(this.options);a.p(n),this.$(s),this._$AH=a}}_$AC(t){let n=ps.get(t.strings);return n===void 0&&ps.set(t.strings,n=new Gn(t)),n}T(t){Pc(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new vn(this.k(Wn()),this.k(Wn()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class or{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}_$AI(t,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)t=Zt(this,t,n,0),a=!Un(t)||t!==this._$AH&&t!==Pe,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Zt(this,s[r+l],n,l),c===Pe&&(c=this._$AH[l]),a||(a=!Un(c)||c!==this._$AH[l]),c===ee?t=ee:t!==ee&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.O(t)}O(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _c extends or{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===ee?void 0:t}}class Hc extends or{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==ee)}}class Fc extends or{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Zt(this,t,n,0)??ee)===Pe)return;const r=this._$AH,o=t===ee&&r!==ee||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ee&&(r===ee||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Vc{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Zt(this,t)}}const _h={j:ha,P:lt,A:fa,C:1,M:Dc,L:Rc,R:qc,V:Zt,D:vn,I:or,H:Hc,N:Fc,U:_c,B:Vc},Ho=Hn.litHtmlPolyfillSupport;Ho==null||Ho(Gn,vn),(Hn.litHtmlVersions??(Hn.litHtmlVersions=[])).push("3.1.1");const Hh=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new vn(t.insertBefore(Wn(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fn=class extends nn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hh(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Pe}};var gc;Fn._$litElement$=!0,Fn.finalized=!0,(gc=globalThis.litElementHydrateSupport)==null||gc.call(globalThis,{LitElement:Fn});const Fo=globalThis.litElementPolyfillSupport;Fo==null||Fo({LitElement:Fn});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Fh}=_h,gs=()=>document.createComment(""),Mn=(e,t,n)=>{var i;const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=r.insertBefore(gs(),o),s=r.insertBefore(gs(),o);n=new Fh(a,s,e,e.options)}else{const a=n._$AB.nextSibling,s=n._$AM,l=s!==e;if(l){let c;(i=n._$AQ)==null||i.call(n,e),n._$AM=e,n._$AP!==void 0&&(c=e._$AU)!==s._$AU&&n._$AP(c)}if(a!==o||l){let c=n._$AA;for(;c!==a;){const h=c.nextSibling;r.insertBefore(c,o),c=h}}}return n},qt=(e,t,n=e)=>(e._$AI(t,n),e),Vh={},jh=(e,t=Vh)=>e._$AH=t,zh=e=>e._$AH,Vo=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=e=>(...t)=>({_$litDirective$:e,values:t});class ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zh={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:da},Wh=(e=Zh,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(r==="setter"){const{name:a}=n;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function Uh(e){return(t,n)=>typeof n=="object"?Wh(e,t,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=It(class extends ht{constructor(e){var t;if(super(e),e.type!==ir.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.st)!=null&&r.has(i))&&this.it.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.it)i in t||(n.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return Pe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=e=>e??ee;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mi extends ht{constructor(t){if(super(t),this.et=ee,t.type!==ir.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ee||t==null)return this.vt=void 0,this.et=t;if(t===Pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const n=[t];return n.raw=n,this.vt={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Mi.directiveName="unsafeHTML",Mi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vs extends Mi{}vs.directiveName="unsafeSVG",vs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gh(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},Yh=It(class extends ht{constructor(e){if(super(e),e.type!==ir.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const o=[],i=[];let a=0;for(const s of e)o[a]=r?r(s,a):a,i[a]=n(s,a),a++;return{values:i,keys:o}}render(e,t,n){return this.ht(e,t,n).values}update(e,[t,n,r]){const o=zh(e),{values:i,keys:a}=this.ht(t,n,r);if(!Array.isArray(o))return this.dt=a,i;const s=this.dt??(this.dt=[]),l=[];let c,h,f=0,m=o.length-1,g=0,w=i.length-1;for(;f<=m&&g<=w;)if(o[f]===null)f++;else if(o[m]===null)m--;else if(s[f]===a[g])l[g]=qt(o[f],i[g]),f++,g++;else if(s[m]===a[w])l[w]=qt(o[m],i[w]),m--,w--;else if(s[f]===a[w])l[w]=qt(o[f],i[w]),Mn(e,l[w+1],o[f]),f++,w--;else if(s[m]===a[g])l[g]=qt(o[m],i[g]),Mn(e,o[f],o[m]),m--,g++;else if(c===void 0&&(c=bs(a,g,w),h=bs(s,f,m)),c.has(s[f]))if(c.has(s[m])){const $=h.get(a[g]),k=$!==void 0?o[$]:null;if(k===null){const x=Mn(e,o[f]);qt(x,i[g]),l[g]=x}else l[g]=qt(k,i[g]),Mn(e,o[f],k),o[$]=null;g++}else Vo(o[m]),m--;else Vo(o[f]),f++;for(;g<=w;){const $=Mn(e,l[w+1]);qt($,i[g]),l[g++]=$}for(;f<=m;){const $=o[f++];$!==null&&Vo($)}return this.dt=a,jh(e,l),Pe}}),Jh=Yh;class jc extends Fn{}function ft(e){if(Xe(e))return ve(e,(n,r)=>{if(!de(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Xr(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const i=r,a=n.startsWith("--")?N(n):n.startsWith("-")?Dr`-${N(n)}`:Dr`--${N(n)}`;return{name:a,value:Dr`var(${a}, ${N(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${ft.name}' function.`)}function Ai({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function Xh(e,t,n){const r=!t.length&&!n.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(r||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),n.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Rr(e){return Se(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function ma(e){return Se(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function zc(e){return e.map(t=>Rr(t)?t.definition:t).filter(t=>ma(t))}const Zc=new WeakMap;function Kh(e,t){var o;const n=zc(t);return(o=Wc(Zc,[e,...n]).value)==null?void 0:o.template}function Qh(e,t,n){const r=zc(t);return Gc(Zc,[e,...r],n)}function Wc(e,t,n=0){const{currentTemplateAndNested:r,reason:o}=Uc(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Wc(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:o}}function Uc(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const o=e.get(r);return o==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:o,reason:"key and value exists"}}function Gc(e,t,n,r=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Uc(e,t,r);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),r===t.length-1)return s.template=n,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Gc(l,t,n,r+1)}const ef=new WeakMap;function Yc(e,t,n){const r=Kh(e,t),o=r??n();if(!r){const s=Qh(e,t,o);if(s.result)ef.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Xh(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Jc(e,t,n,r){const o=[],i=[],a=[],s=[];return e.forEach((c,h)=>{const f=o.length-1,m=o[f],g=h-1,w=t[g];r&&r(c);let $,k=[];if(typeof m=="string"&&($=n(m,c,w),$)){o[f]=m+$.replacement,a.push(g);const C=$.getExtraValues;k=C?C(w):[],k.length&&C?(o[f]+=" ",k.forEach((D,Z)=>{Z&&o.push(" ")}),s.push(D=>{const Z=D[g],oe=C(Z);return{index:g,values:oe}}),o.push(c)):o[f]+=c}$||o.push(c);const x=e.raw[h];$?(i[f]=i[f]+$.replacement+x,k.length&&k.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const h=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:h}}}}function tf(...[e,t,n]){if(ma(n))return{replacement:n.tagName,getExtraValues:void 0}}function nf(e,t){return Jc(e,t,tf)}function p(e,...t){const n=Yc(e,t,()=>nf(e,t));return Dr(n.strings,...n.values)}const rf={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Xc(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof jc?!0:Xc(n)}function Kc(e,t){const n=e.instanceState;he(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&he(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),of(e)}function of(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function ys(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class af extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function pa(){return e=>{var t;return t=class extends af{constructor(n){super(e,n),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function K(){return pa()}function sf(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const o=pa()([e,r].join("-"));return n[r]=o,n},{}):{}}const lf="_elementVirStateSetup";function cf(e){return Xe(e)?lf in e:!1}function uf(e,t){const n=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ti(e)===Ti(t)&&n}const ga=Symbol("and"),wa=Symbol("or"),Qc=Symbol("exact"),eu=Symbol("enum"),va=Symbol("unknown"),tu="__vir__shape__definition__key__do__not__use__in__actual__objects";function nu(e){return Se(e,tu)}const ru="__vir__shape__specifier__key__do__not__use__in__actual__objects",df=[ga,wa,Qc,eu,va];function Qe(...e){return xa(e,wa)}function hf(...e){return xa(e,ga)}function ff(){return xa([],va)}function ko(e){return ar(e,wa)}function ba(e){return ar(e,ga)}function ya(e){return ar(e,Qc)}function ka(e){return ar(e,eu)}function $a(e){return ar(e,va)}function ar(e,t){const n=$o(e);return!!n&&n.specifierType===t}function xa(e,t){return{[ru]:!0,specifierType:t,parts:e}}function _r(e,t){const n=$o(t);if(n){if(ba(n))return n.parts.every(r=>_r(e,r));if(ko(n))return n.parts.some(r=>_r(e,r));if(ya(n))return Xe(e)?_r(e,n.parts[0]):e===n.parts[0];if(ka(n))return Object.values(n.parts[0]).some(r=>r===e);if($a(n))return!0}return uf(e,t)}function $o(e){if(Xe(e)&&Se(e,ru)){if(!Se(e,"parts")||!de(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Se(e,"specifierType")||!z0(df,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Ei(e,t=!1){return Hr(e)}function Hr(e){const t=$o(e);if(t){if(ko(t)||ya(t))return Hr(t.parts[0]);if(ba(t))return t.parts.reduce((n,r)=>Object.assign(n,Hr(r)),{});if(ka(t))return Object.values(t.parts[0])[0];if($a(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return nu(e)?Ei(e.shape):e instanceof RegExp?e:de(e,"array")?e.map(Hr):Xe(e)?ve(e,(n,r)=>Ei(r)):e}function sr(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Ei(e),[tu]:!0}}class We extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function mf(e,t,n={}){try{return ou(e,t,n),!0}catch{return!1}}function ou(e,t,n={}){Rt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys})}function iu(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Rt(e,t,n,r){if($a(t))return!0;if(nu(t))return Rt(e,t.shape,n,r);const o=iu(n);if($o(e))throw new We(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!_r(e,t))throw new We(`Subject does not match shape definition at key ${o}`);if(de(t,"function"))return de(e,"function");if(Xe(e)){const a=e,s=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(ko(t))l=t.parts.some(c=>{try{const h=Rt(e,c,n,{...r});return Object.assign(s,h),!0}catch(h){if(h instanceof We)return!1;throw h}});else if(ba(t))l=t.parts.every(c=>{try{const h=Rt(e,c,n,{...r,ignoreExtraKeys:!0});return Object.assign(s,h),!0}catch(h){if(h instanceof We)return!1;throw h}});else if(ya(t)){const c=Rt(e,t.parts[0],n,{...r,exactValues:!0});Object.assign(s,c),l=!0}else{if(ka(t))throw new We(`Cannot compare an enum specifier to an object at ${o}`);if(de(t,"array")&&de(a,"array"))l=a.every((c,h)=>{const f=t.some(m=>{try{return Rt(c,m,[...n,h],r),!0}catch(g){if(g instanceof We)return!1;throw g}});return s[h]=f,f});else{const c=pf({keys:n,options:r,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const h=`Failed on key(s): ${Object.keys(s).filter(f=>!s[f]).join(",")}`;throw new We(h)}return r.ignoreExtraKeys||Object.entries(s).forEach(([c,h])=>{if(!h)throw new We(`subject as extra key '${c}' in ${o}.`)}),s}else if(r.exactValues)return e===t;return!0}function pf({keys:e,options:t,shape:n,subject:r}){const o=iu(e),i={};if(Xe(n)){const a=new Set(he(r)),s=new Set(he(n));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new We(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const c=n[l],h=ko(c)?c.parts.includes(void 0):!1,f=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!h&&!f)throw new We(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=r[l];if(t.ignoreExtraKeys&&!s.has(l))return;const h=n[l];Rt(c,h,[...e,l],t),i[l]=!0})}else throw new We(`shape definition at ${o} was not an object.`);return i}const gf=sr({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:ff()});function jo(e){return mf(e,gf,{allowExtraKeys:!0})}function au(e,t){t in e||Uh()(e,t)}function wf(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function ks(e,t){const n=e;function r(a){t?wf(a,e,e.tagName):au(e,a)}function o(a,s){return r(s),n[s]}return new Proxy({},{get:o,set(a,s,l){const c=cf(l)?l._elementVirStateSetup():l;r(s);const h=n[s];function f(w){a[s]=w,n[s]=w}const m=e.observablePropertyListenerMap[s];if(h!==c&&jo(h)&&(m!=null&&m.length)&&h.removeListener(m),jo(c))if(m)c.addListener(m);else{let w=function(){e.requestUpdate()};var g=w;e.observablePropertyListenerMap[s]=w,c.addListener(w)}else jo(h)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function vf(e){return e?ve(e,t=>t):{}}function bf({hostClassNames:e,cssVars:t}){return{hostClasses:ve(e,(n,r)=>({name:N(r),selector:N(`:host(.${r})`)})),cssVars:t}}function yf({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:o}){t&&he(t).forEach(i=>{const a=t[i],s=n[i];typeof a=="function"&&(a({state:r,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function kf({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function o(a){he(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:n,slotNames:r,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function $f(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}var xf=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function xo(e){var t;const n=e;if(!de(n,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!de(n.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!n.renderCallback||typeof n.renderCallback=="string")throw new Error(`Failed to define element '${n.tagName}': renderCallback is not a function`);const r={...rf,...n.options},o=sf(n.tagName,n.events),i=vf(n.hostClasses);n.hostClasses&&ys(n.tagName,n.hostClasses),n.cssVars&&ys(n.tagName,n.cssVars);const a=n.cssVars?ft(n.cssVars):{},s=$f(n.slotNames),l=typeof n.styles=="function"?n.styles(bf({hostClassNames:i,cssVars:a})):n.styles||p``,c=n.renderCallback;function h(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:m}}const f=(t=class extends jc{createRenderParams(){return kf({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${n.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${n.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${n.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Xc(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${n.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${xo.name}' to define ${n.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&n.initCallback&&(this._initCalled=!0,n.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=c(m);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return yf({host:m.host,hostClassesInit:n.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},g}catch(m){const g=rh(m,`Failed to render ${n.tagName}`);return console.error(g),this._lastRenderError=g,wn(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&n.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(n.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${n.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),n.cleanupCallback){const m=this.createRenderParams();if(n.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${n.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){Kc(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ks(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ks(this,!r.allowPolymorphicState)});const m=n.stateInitStatic||{};he(m).forEach(g=>{au(this,g),this.instanceState[g]=m[g]}),this.definition=f}},xf(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:n.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:h}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:n.stateInitStatic}),t);return Object.defineProperties(f,{name:{value:J0(n.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof f,writable:!1}}),window.customElements.get(n.tagName)?console.warn(`Tried to define custom element '${n.tagName}' but it is already defined.`):window.customElements.define(n.tagName,f),f}function su(){return e=>{const t=e;if(!de(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return xo({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Ta(e,t){return Yn(e,t),e.element}function Tf(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Yn(e,t){const n=Tf(e),r=n?`: in ${n}`:"";if(e.type!==ir.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function Sf(e){const t=It(class extends ht{constructor(n){super(n),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ta(n,e)}render(n){return this.element.setAttribute(e,n),Pe}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function S(e,t){return Cf(e,t)}const Cf=It(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ta(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),Pe}}),$s="onDomCreated",xs=It(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Yn(e,$s)}update(e,[t]){Yn(e,$s);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),zo="onResize",Jn=It(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Yn(e,zo)}fireCallback(e){var n;const t=e[0];if(!t)throw console.error(e),new Error(`${zo} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Yn(e,zo),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function Ie(e,t,n){return Gh(e,()=>t,()=>n)}const{attributeDirective:Mf,attributeSelector:u4,attributeName:d4}=Sf("data-test-id");function Sa(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),su()(n(r))),defineElementNoInputs:r=>(t(r),xo(n(r)))}}function Af(e,t){return t?Ts(e,t):Ts(void 0,e)}const Ts=It(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ta(e,"assign")}render(e,t){return Kc(this.element,t),Pe}});function Ef(...[e,t,n]){const r=Rr(n)?n.definition:n,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ma(r);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!r.elementOptions.ignoreUnsetInputs&&!Rr(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(c){const h=Rr(c)?c.inputs:void 0;return[o&&h?Af(h):void 0].filter(ke)}}}function If(e){}function Lf(e){return Jc(e.strings,e.values,Ef,If)}function u(e,...t){const n=Dh(e,...t),r=Yc(e,t,()=>Lf(n));return{...n,strings:r.strings,values:r.values}}const Pf={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},qf=Object.keys(Pf),Nf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...qf,...Nf];function Pn(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}const Of={[pe.ElementExample]:()=>[],[pe.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Th(e.controls,e.title)].filter(ke),[pe.Root]:()=>[]},to="_isBookTreeNode",lu=new Map;function Bf(e){return lu.get(e)}function Df(e,t){lh(lu,e,()=>t)}function sn(e,t){return!!(cu(e)&&e.entry.entryType===t)}function cu(e){return!!(yc(e,[to,"entry"])&&e[to])}function Rf(){return{[to]:!0,entry:{entryType:pe.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function _f({entries:e,debug:t}){const n=Bf(e);if(n)return n;const r=Rf();e.forEach(a=>Ca({tree:r,newEntry:a,debug:t,manuallyAdded:!0}));const o=uu(r),i={tree:r,flattenedNodes:o};return Df(e,i),t&&console.info("element-book tree:",r),i}function Hf(e,t,n){if(!t.parent)return e;const r=Ii(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ca({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const o=Ii(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${la(t,!1)}`);return o}function Ca({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const o=Of[t.entryType](t);t.errors.push(...o);const i=Hf(e,t,n),a=Kr(t.title),s=i.children[a];if(s){if(r){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[to]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:r};i.children[a]=l,$h(t,pe.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Ca({tree:e,newEntry:c,debug:n,manuallyAdded:r}))}function Ii(e,t){const n=cu(e)?e.fullUrlBreadcrumbs.slice(0,-1):la(e,!1);return n.length?n.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function uu(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>uu(o));return[e,...n].flat()}function Ma(e,t){return Aa(e,["",...t],void 0)}function Aa(e,t,n){const r=t.slice(1),o=r[0];!o&&n&&(e.controls=n);const i=e.children[o||""],a=i&&Aa(i,r,n);return{...e.controls,...a}}function Ff(e,t,n){const r={...e};return Aa(r,["",...t],n),r}function du(e,t){const n=(t==null?void 0:t.controls)||(sn(e,pe.Page)?ve(e.entry.controls,(o,i)=>i.initValue):{});return{children:ve(e.children,(o,i)=>{var a;return du(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:n}}function Vf({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<r;a++){const l=i.charCodeAt(a);for(;s<n;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const jf=Ec(32);function Fr(e){return e.join(jf)}function hu(e){if(!e.length)return[];const t=Fr(e),n=hu(e.slice(0,-1));return[t,...n]}const zf=["error","errors"];function Zf(e){return zf.includes(e)}function Wf({flattenedNodes:e,searchQuery:t}){const n={};function r(o){Object.values(o.children).map(a=>(r(a),Fr(a.fullUrlBreadcrumbs))).forEach(a=>n[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Zf(t),a=Fr(o.fullUrlBreadcrumbs);if(Vf({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){const l=hu(o.fullUrlBreadcrumbs);r(o),l.forEach(c=>n[c]=!0)}else n[a]=!1}),e.filter(o=>{const i=Fr(o.fullUrlBreadcrumbs),a=n[i];if(!de(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var Te;(function(e){e.Search="search",e.Book="book"})(Te||(Te={}));function Li(e){return e[0]===Te.Book?"":e[1]?decodeURIComponent(e[1]):""}const fn={hash:void 0,paths:[Te.Book],search:void 0},Uf=0;function To(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Uf)}class So extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Ss extends So{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Xn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Gf=globalThis.history.pushState;function Cs(...e){const t=Gf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Xn)),t}const Yf=globalThis.history.replaceState;function Ms(...e){const t=Yf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Xn)),t}function Jf(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Cs)throw new Ss("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ms)throw new Ss("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Cs,globalThis.history.replaceState=Ms,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Xn))})}}function Xf(e){const t=`/${e}`,r=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?fh(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:r,search:o,hash:i}}function fu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function mu({routeBase:e,windowPath:t}){if(!e)return"";const n=fu(e);if(pu({routeBase:n,windowPath:t}))return n;const r=n.replace(/^[^\/]+\//,"");return r&&r!==n?mu({routeBase:r,windowPath:t}):""}function pu({routeBase:e,windowPath:t}){const n=fu(e);return n?t.startsWith(`/${n}`):!1}class Kf extends So{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function gu(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const As=6;function Es(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>As)throw new Kf(`Route sanitization depth has exceed the max of ${As} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(gu(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(o=>{o(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class Zo extends So{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Qf(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Zo(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Zo(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Zo(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function e1(e,t,n=!1){const r=wu(e,t);n?globalThis.history.replaceState(void 0,"",r):globalThis.history.pushState(void 0,"",r)}function wu(e,t){var s;const n=pu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",r=e.search?dh(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[n,...e.paths].filter(ke).join("/")}${r}${i}`}function t1(e={}){Qf(e),Jf();const t=e.routeBase?mu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let n=!1;const r=()=>Es(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},h=o.sanitizeFullRoute(c);if(!(!s&&gu(l,h)))return e1(h,t,a)},createRoutesUrl(i){return wu(i,t)},getCurrentRawRoutes(){return Xf(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new So(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),n||(globalThis.addEventListener(Xn,r),n=!0),i&&Es(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Xn,r),n=!1),a},sanitizationDepth:0};return o}function n1(e){return t1({routeBase:e,routeSanitizer(t){return{paths:r1(t.paths),hash:void 0,search:void 0}}})}function r1(e){const t=e[0];if(ah(t,Te)){if(t===Te.Book)return[Te.Book,...e.slice(1)];if(t===Te.Search)return e[1]?[t,e[1]]:[Te.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return fn.paths}const H=ft({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),o1={nav:{hover:{background:H["element-book-nav-hover-background-color"],foreground:H["element-book-nav-hover-foreground-color"]},active:{background:H["element-book-nav-active-background-color"],foreground:H["element-book-nav-active-foreground-color"]},selected:{background:H["element-book-nav-selected-background-color"],foreground:H["element-book-nav-selected-foreground-color"]}},accent:{icon:H["element-book-accent-icon-color"]},page:{background:H["element-book-page-background-color"],backgroundFaint1:H["element-book-page-background-faint-level-1-color"],backgroundFaint2:H["element-book-page-background-faint-level-2-color"],foreground:H["element-book-page-foreground-color"],foregroundFaint1:H["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:H["element-book-page-foreground-faint-level-2-color"]}};function i1(e,t){vu(e,t,o1)}function Pi(e){return Se(e,"_$cssResult$")}function Is(e){return yc(e,["name","value","default"])&&de(e.default,"string")&&Pi(e.name)&&Pi(e.value)}function vu(e,t,n){Object.entries(t).forEach(([r,o])=>{const i=n[r];if(!i)throw new Error(`no nestedCssVar at key '${r}'`);if(Pi(o)){if(!Is(i))throw new Error(`got a CSS result at '${r}' but no CSS var`);Ai({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Is(i))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);vu(e,o,i)}})}function le(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let r=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return n===1&&(i=i[0]),r===1?i.map(a=>a[0]):i}function lr(e){return $t(e)==="string"}function $t(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function no(e,t){e=+e,t=+t;let n=(Math.floor(e)+"").length;if(t>n)return+e.toFixed(t-n);{let r=10**(n-t);return Math.round(e/r)*r}}function bu(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/;let r=e.match(t);if(r){let o=[];return r[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):n.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:o}}}function yu(e){return e[e.length-1]}function ro(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function ku(e,t,n){return(n-e)/(t-e)}function Ea(e,t,n){return ro(t[0],t[1],ku(e[0],e[1],n))}function $u(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let o=new String(r[1]);return o.range=[+r[2],+r[3]],o}return n}))}var a1=Object.freeze({__proto__:null,interpolate:ro,interpolateInv:ku,isString:lr,last:yu,mapRange:Ea,multiplyMatrices:le,parseCoordGrammar:$u,parseFunction:bu,toPrecision:no,type:$t});class s1{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],n&&this[o][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const St=new s1;var rt={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Ye={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function qi(e){return Array.isArray(e)?e:Ye[e]}function oo(e,t,n,r={}){if(e=qi(e),t=qi(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let o={W1:e,W2:t,XYZ:n,options:r};if(St.run("chromatic-adaptation-start",o),o.M||(o.W1===Ye.D65&&o.W2===Ye.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Ye.D50&&o.W2===Ye.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),St.run("chromatic-adaptation-end",o),o.M)return le(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const l1=75e-6,Ae=class Ae{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Ae.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let s in n)"name"in n[s]||(n[s].name=s);this.coords=n;let r=t.white??this.base.white??"D65";this.white=qi(r),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:c1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),St.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=l1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((o,i)=>{let a=r[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-n)&&(l===void 0||o<=l+n)}return!0})}get cssId(){var t,n;return((n=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:n.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ls(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Ls(n,this),n):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,n){if(arguments.length===1&&([t,n]=[t.space,t.coords]),t=Ae.get(t),this.equals(t))return n;n=n.map(s=>Number.isNaN(s)?0:s);let r=this.path,o=t.path,i,a;for(let s=0;s<r.length&&r[s].equals(o[s]);s++)i=r[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=r.length-1;s>a;s--)n=r[s].toBase(n);for(let s=a+1;s<o.length;s++)n=o[s].fromBase(n);return n}from(t,n){return arguments.length===1&&([t,n]=[t.space,t.coords]),t=Ae.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],o=r.range||r.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Ae.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof Ae)return t;if($t(t)==="string"){let o=Ae.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(n.length)return Ae.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){var l;let r=$t(t),o,i;if(r==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Ae.get(o),o||(o=n),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=$t(i),r==="number"||r==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Ae.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let h=o.coords[c];if(c.toLowerCase()===a||((l=h.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...h};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};gr(Ae,"registry",{}),gr(Ae,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Ae;function c1(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Ls(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=$u(e.coords);let n=Object.entries(t).map(([r,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(r,o)=>r.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=n[a];return s&&l&&(i=Ea(s,l,i)),i=no(i,o),c&&(i+=c),i})}return e}var _e=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ce extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=_e),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=n=>{let r=le(t.toXYZ_M,n);return this.white!==this.base.white&&(r=oo(this.white,this.base.white,r)),r}),t.fromBase??(t.fromBase=n=>(n=oo(this.base.white,this.white,n),le(t.fromXYZ_M,n)))),t.referred??(t.referred="display"),super(t)}}function xu(e,{meta:t}={}){var r,o,i,a,s;let n={str:(r=String(e))==null?void 0:r.trim()};if(St.run("parse-start",n),n.color)return n.color;if(n.parsed=bu(n.str),n.parsed){let l=n.parsed.name;if(l==="color"){let c=n.parsed.args.shift(),h=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let m of M.all){let g=m.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const w=Object.keys(m.coords).map(($,k)=>n.parsed.args[k]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:w,alpha:h}}}let f="";if(c in M.registry){let m=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${c}). `+(f||"Missing a plugin?"))}else for(let c of M.all){let h=c.getFormat(l);if(h&&h.type==="function"){let f=1;(h.lastAlpha||yu(n.parsed.args).alpha)&&(f=n.parsed.args.pop());let m=n.parsed.args,g;return h.coordGrammar&&(g=Object.entries(c.coords).map(([w,$],k)=>{var fe;let x=h.coordGrammar[k],C=(fe=m[k])==null?void 0:fe.type,D=x.find(ce=>ce==C);if(!D){let ce=$.name||w;throw new TypeError(`${C} not allowed for ${ce} in ${l}()`)}let Z=D.range;C==="<percentage>"&&(Z||(Z=[0,1]));let oe=$.range||$.refRange;return Z&&oe&&(m[k]=Ea(Z,oe,m[k])),D})),t&&Object.assign(t,{formatId:h.name,types:g}),{spaceId:c.id,coords:m,alpha:f}}}}else for(let l of M.all)for(let c in l.formats){let h=l.formats[c];if(h.type!=="custom"||h.test&&!h.test(n.str))continue;let f=h.parse(n.str);if(f)return f.alpha??(f.alpha=1),t&&(t.formatId=c),f}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function j(e){if(!e)throw new TypeError("Empty color reference");lr(e)&&(e=xu(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function cr(e,t){return t=M.get(t),t.from(e)}function He(e,t){let{space:n,index:r}=M.resolveCoord(t,e.space);return cr(e,n)[r]}function Tu(e,t,n){return t=M.get(t),e.coords=t.to(e.space,n),e}function Ct(e,t,n){if(e=j(e),arguments.length===2&&$t(arguments[1])==="object"){let r=arguments[1];for(let o in r)Ct(e,o,r[o])}else{typeof n=="function"&&(n=n(He(e,t)));let{space:r,index:o}=M.resolveCoord(t,e.space),i=cr(e,r);i[o]=n,Tu(e,r,i)}return e}var Ia=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:_e,fromBase:e=>oo(_e.white,"D50",e),toBase:e=>oo("D50",_e.white,e),formats:{color:{}}});const u1=216/24389,Ps=24/116,wr=24389/27;let Wo=Ye.D50;var Ee=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Wo,base:Ia,fromBase(e){let n=e.map((r,o)=>r/Wo[o]).map(r=>r>u1?Math.cbrt(r):(wr*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ps?Math.pow(t[0],3):(116*t[0]-16)/wr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/wr,t[2]>Ps?Math.pow(t[2],3):(116*t[2]-16)/wr].map((r,o)=>r*Wo[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Co(e){return(e%360+360)%360}function d1(e,t){if(e==="raw")return t;let[n,r]=t.map(Co),o=r-n;return e==="increasing"?o<0&&(r+=360):e==="decreasing"?o>0&&(n+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var Kn=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ee,fromBase(e){let[t,n,r]=e,o;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Co(o)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const qs=25**7,io=Math.PI,Ns=180/io,Jt=io/180;function Ni(e,t,{kL:n=1,kC:r=1,kH:o=1}={}){let[i,a,s]=Ee.from(e),l=Kn.from(Ee,[i,a,s])[1],[c,h,f]=Ee.from(t),m=Kn.from(Ee,[c,h,f])[1];l<0&&(l=0),m<0&&(m=0);let w=((l+m)/2)**7,$=.5*(1-Math.sqrt(w/(w+qs))),k=(1+$)*a,x=(1+$)*h,C=Math.sqrt(k**2+s**2),D=Math.sqrt(x**2+f**2),Z=k===0&&s===0?0:Math.atan2(s,k),oe=x===0&&f===0?0:Math.atan2(f,x);Z<0&&(Z+=2*io),oe<0&&(oe+=2*io),Z*=Ns,oe*=Ns;let fe=c-i,ce=D-C,z=oe-Z,ie=Z+oe,je=Math.abs(z),$e;C*D===0?$e=0:je<=180?$e=z:z>180?$e=z-360:z<-180?$e=z+360:console.log("the unthinkable has happened");let Gt=2*Math.sqrt(D*C)*Math.sin($e*Jt/2),Tn=(i+c)/2,Oo=(C+D)/2,Ya=Math.pow(Oo,7),ot;C*D===0?ot=ie:je<=180?ot=ie/2:ie<360?ot=(ie+360)/2:ot=(ie-360)/2;let Ja=(Tn-50)**2,R0=1+.015*Ja/Math.sqrt(20+Ja),Xa=1+.045*Oo,Sn=1;Sn-=.17*Math.cos((ot-30)*Jt),Sn+=.24*Math.cos(2*ot*Jt),Sn+=.32*Math.cos((3*ot+6)*Jt),Sn-=.2*Math.cos((4*ot-63)*Jt);let Ka=1+.015*Oo*Sn,_0=30*Math.exp(-1*((ot-275)/25)**2),H0=2*Math.sqrt(Ya/(Ya+qs)),F0=-1*Math.sin(2*_0*Jt)*H0,pr=(fe/(n*R0))**2;return pr+=(ce/(r*Xa))**2,pr+=(Gt/(o*Ka))**2,pr+=F0*(ce/(r*Xa))*(Gt/(o*Ka)),Math.sqrt(pr)}const h1=75e-6;function Vn(e,t=e.space,{epsilon:n=h1}={}){e=j(e),t=M.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function Qn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Mt(e,{method:t=rt.gamut_mapping,space:n=e.space}={}){if(lr(arguments[1])&&(n=arguments[1]),n=M.get(n),Vn(e,n,{epsilon:0}))return j(e);let r=Be(e,n);if(t!=="clip"&&!Vn(e,n)){let o=Mt(Qn(r),{method:"clip",space:n});if(Ni(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=Be(r,a),h=(i.range||i.refRange)[0],f=.01,m=h,g=He(l,s);for(;g-m>f;){let w=Qn(l);w=Mt(w,{space:n,method:"clip"}),Ni(l,w)-2<f?m=He(l,s):g=He(l,s),Ct(l,s,(m+g)/2)}r=Be(l,n)}else r=o}if(t==="clip"||!Vn(r,n,{epsilon:0})){let o=Object.values(n.coords).map(i=>i.range||[]);r.coords=r.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return n!==e.space&&(r=Be(r,e.space)),e.coords=r.coords,e}Mt.returns="color";function Be(e,t,{inGamut:n}={}){e=j(e),t=M.get(t);let r=t.from(e),o={space:t,coords:r,alpha:e.alpha};return n&&(o=Mt(o)),o}Be.returns="color";function ao(e,{precision:t=rt.precision,format:n="default",inGamut:r=!0,...o}={}){var l;let i;e=j(e);let a=n;n=e.space.getFormat(n)??e.space.getFormat("default")??M.DEFAULT_FORMAT,r||(r=n.toGamut);let s=e.coords;if(s=s.map(c=>c||0),r&&!Vn(e)&&(s=Mt(Qn(e),r===!0?void 0:r).coords),n.type==="custom")if(o.precision=t,n.serialize)i=n.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=n.name||"color";n.serializeCoords?s=n.serializeCoords(s,t):t!==null&&(s=s.map(g=>no(g,t)));let h=[...s];if(c==="color"){let g=n.id||((l=n.ids)==null?void 0:l[0])||e.space.id;h.unshift(g)}let f=e.alpha;t!==null&&(f=no(f,t));let m=e.alpha<1&&!n.noAlpha?`${n.commas?",":" /"} ${f}`:"";i=`${c}(${h.join(n.commas?", ":" ")}${m})`}return i}const f1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],m1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Mo=new Ce({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:f1,fromXYZ_M:m1,formats:{color:{}}});const vr=1.09929682680944,Os=.018053968510807;var Su=new Ce({id:"rec2020",name:"REC.2020",base:Mo,toBase(e){return e.map(function(t){return t<Os*4.5?t/4.5:Math.pow((t+vr-1)/vr,1/.45)})},fromBase(e){return e.map(function(t){return t>=Os?vr*Math.pow(t,.45)-(vr-1):4.5*t})},formats:{color:{}}});const p1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],g1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Cu=new Ce({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:p1,fromXYZ_M:g1});const w1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],v1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Mu=new Ce({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:w1,fromXYZ_M:v1,formats:{color:{}}}),Bs={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Ds=Array(3).fill("<percentage> | <number>[0, 255]"),Rs=Array(3).fill("<number>[0, 255]");var er=new Ce({id:"srgb",name:"sRGB",base:Mu,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Ds},rgb_number:{name:"rgb",commas:!0,coords:Rs,noAlpha:!0},color:{},rgba:{coords:Ds,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Rs},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let r=n&&e.every(i=>i%17===0);return"#"+e.map(i=>r?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Bs.black,t.alpha=0):t.coords=Bs[e],t.coords)return t}}}}),Au=new Ce({id:"p3",name:"P3",base:Cu,fromBase:er.fromBase,toBase:er.toBase,formats:{color:{id:"display-p3"}}});rt.display_space=er;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ee,Su,Au]){let t=e.getMinCoords(),r=ao({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){rt.display_space=e;break}}function b1(e,{space:t=rt.display_space,...n}={}){let r=ao(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!rt.display_space)r=new String(r),r.color=e;else{let o=Be(e,t);r=new String(ao(o,n)),r.color=o}return r}function Eu(e,t,n="lab"){n=M.get(n);let r=n.from(e),o=n.from(t);return Math.sqrt(r.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function y1(e,t){return e=j(e),t=j(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function At(e){return He(e,[_e,"y"])}function Iu(e,t){Ct(e,[_e,"y"],t)}function k1(e){Object.defineProperty(e.prototype,"luminance",{get(){return At(this)},set(t){Iu(this,t)}})}var $1=Object.freeze({__proto__:null,getLuminance:At,register:k1,setLuminance:Iu});function x1(e,t){e=j(e),t=j(t);let n=Math.max(At(e),0),r=Math.max(At(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const T1=.56,S1=.57,C1=.62,M1=.65,_s=.022,A1=1.414,E1=.1,I1=5e-4,L1=1.14,Hs=.027,P1=1.14;function Fs(e){return e>=_s?e:e+(_s-e)**A1}function Xt(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function q1(e,t){t=j(t),e=j(e);let n,r,o,i,a,s;t=Be(t,"srgb"),[i,a,s]=t.coords;let l=Xt(i)*.2126729+Xt(a)*.7151522+Xt(s)*.072175;e=Be(e,"srgb"),[i,a,s]=e.coords;let c=Xt(i)*.2126729+Xt(a)*.7151522+Xt(s)*.072175,h=Fs(l),f=Fs(c),m=f>h;return Math.abs(f-h)<I1?r=0:m?(n=f**T1-h**S1,r=n*L1):(n=f**M1-h**C1,r=n*P1),Math.abs(r)<E1?o=0:r>0?o=r-Hs:o=r+Hs,o*100}function N1(e,t){e=j(e),t=j(t);let n=Math.max(At(e),0),r=Math.max(At(t),0);r>n&&([n,r]=[r,n]);let o=n+r;return o===0?0:(n-r)/o}const O1=5e4;function B1(e,t){e=j(e),t=j(t);let n=Math.max(At(e),0),r=Math.max(At(t),0);return r>n&&([n,r]=[r,n]),r===0?O1:(n-r)/r}function D1(e,t){e=j(e),t=j(t);let n=He(e,[Ee,"l"]),r=He(t,[Ee,"l"]);return Math.abs(n-r)}const R1=216/24389,Vs=24/116,br=24389/27;let Uo=Ye.D65;var Oi=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Uo,base:_e,fromBase(e){let n=e.map((r,o)=>r/Uo[o]).map(r=>r>R1?Math.cbrt(r):(br*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Vs?Math.pow(t[0],3):(116*t[0]-16)/br,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/br,t[2]>Vs?Math.pow(t[2],3):(116*t[2]-16)/br].map((r,o)=>r*Uo[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Go=Math.pow(5,.5)*.5+.5;function _1(e,t){e=j(e),t=j(t);let n=He(e,[Oi,"l"]),r=He(t,[Oi,"l"]),o=Math.abs(Math.pow(n,Go)-Math.pow(r,Go)),i=Math.pow(o,1/Go)*Math.SQRT2-40;return i<7.5?0:i}var Vr=Object.freeze({__proto__:null,contrastAPCA:q1,contrastDeltaPhi:_1,contrastLstar:D1,contrastMichelson:N1,contrastWCAG21:x1,contrastWeber:B1});function H1(e,t,n={}){lr(n)&&(n={algorithm:n});let{algorithm:r,...o}=n;if(!r){let i=Object.keys(Vr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=j(e),t=j(t);for(let i in Vr)if("contrast"+r.toLowerCase()===i.toLowerCase())return Vr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Lu(e){let[t,n,r]=cr(e,_e),o=t+15*n+3*r;return[4*t/o,9*n/o]}function Pu(e){let[t,n,r]=cr(e,_e),o=t+n+r;return[t/o,n/o]}function F1(e){Object.defineProperty(e.prototype,"uv",{get(){return Lu(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Pu(this)}})}var V1=Object.freeze({__proto__:null,register:F1,uv:Lu,xy:Pu});function j1(e,t){return Eu(e,t,"lab")}const z1=Math.PI,js=z1/180;function Z1(e,t,{l:n=2,c:r=1}={}){let[o,i,a]=Ee.from(e),[,s,l]=Kn.from(Ee,[o,i,a]),[c,h,f]=Ee.from(t),m=Kn.from(Ee,[c,h,f])[1];s<0&&(s=0),m<0&&(m=0);let g=o-c,w=s-m,$=i-h,k=a-f,x=$**2+k**2-w**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let D=.0638*s/(1+.0131*s)+.638,Z;Number.isNaN(l)&&(l=0),l>=164&&l<=345?Z=.56+Math.abs(.2*Math.cos((l+168)*js)):Z=.36+Math.abs(.4*Math.cos((l+35)*js));let oe=Math.pow(s,4),fe=Math.sqrt(oe/(oe+1900)),ce=D*(fe*Z+1-fe),z=(g/(n*C))**2;return z+=(w/(r*D))**2,z+=x/ce**2,Math.sqrt(z)}const zs=203;var La=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:_e,fromBase(e){return e.map(t=>Math.max(t*zs,0))},toBase(e){return e.map(t=>Math.max(t/zs,0))}});const yr=1.15,kr=.66,Zs=2610/2**14,W1=2**14/2610,Ws=3424/2**12,Us=2413/2**7,Gs=2392/2**7,U1=1.7*2523/2**5,Ys=2**5/(1.7*2523),$r=-.56,Yo=16295499532821565e-27,G1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Y1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],J1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],X1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var qu=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:La,fromBase(e){let[t,n,r]=e,o=yr*t-(yr-1)*r,i=kr*n-(kr-1)*t,s=le(G1,[o,i,r]).map(function(m){let g=Ws+Us*(m/1e4)**Zs,w=1+Gs*(m/1e4)**Zs;return(g/w)**U1}),[l,c,h]=le(J1,s);return[(1+$r)*l/(1+$r*l)-Yo,c,h]},toBase(e){let[t,n,r]=e,o=(t+Yo)/(1+$r-$r*(t+Yo)),a=le(X1,[o,n,r]).map(function(m){let g=Ws-m**Ys,w=Gs*m**Ys-Us;return 1e4*(g/w)**W1}),[s,l,c]=le(Y1,a),h=(s+(yr-1)*c)/yr,f=(l+(kr-1)*h)/kr;return[h,f,c]},formats:{color:{}}}),Bi=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:qu,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Co(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function K1(e,t){let[n,r,o]=Bi.from(e),[i,a,s]=Bi.from(t),l=n-i,c=r-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let h=o-s,f=2*Math.sqrt(r*a)*Math.sin(h/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const Nu=3424/4096,Ou=2413/128,Bu=2392/128,Js=2610/16384,Q1=2523/32,e2=16384/2610,Xs=32/2523,t2=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],n2=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],r2=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],o2=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Di=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:La,fromBase(e){let t=le(t2,e);return i2(t)},toBase(e){let t=a2(e);return le(o2,t)},formats:{color:{}}});function i2(e){let t=e.map(function(n){let r=Nu+Ou*(n/1e4)**Js,o=1+Bu*(n/1e4)**Js;return(r/o)**Q1});return le(n2,t)}function a2(e){return le(r2,e).map(function(r){let o=Math.max(r**Xs-Nu,0),i=Ou-Bu*r**Xs;return 1e4*(o/i)**e2})}function s2(e,t){let[n,r,o]=Di.from(e),[i,a,s]=Di.from(t);return 720*Math.sqrt((n-i)**2+.25*(r-a)**2+(o-s)**2)}const l2=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],c2=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],u2=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],d2=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var so=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:_e,fromBase(e){let n=le(l2,e).map(r=>Math.cbrt(r));return le(u2,n)},toBase(e){let n=le(d2,e).map(r=>r**3);return le(c2,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function h2(e,t){let[n,r,o]=so.from(e),[i,a,s]=so.from(t),l=n-i,c=r-a,h=o-s;return Math.sqrt(l**2+c**2+h**2)}var lo={deltaE76:j1,deltaECMC:Z1,deltaE2000:Ni,deltaEJz:K1,deltaEITP:s2,deltaEOK:h2};function qn(e,t,n={}){lr(n)&&(n={method:n});let{method:r=rt.deltaE,...o}=n;e=j(e),t=j(t);for(let i in lo)if("deltae"+r.toLowerCase()===i.toLowerCase())return lo[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${r}`)}function f2(e,t=.25){let r=[M.get("oklch","lch"),"l"];return Ct(e,r,o=>o*(1+t))}function m2(e,t=.25){let r=[M.get("oklch","lch"),"l"];return Ct(e,r,o=>o*(1-t))}var p2=Object.freeze({__proto__:null,darken:m2,lighten:f2});function Du(e,t,n=.5,r={}){[e,t]=[j(e),j(t)],$t(n)==="object"&&([n,r]=[.5,n]);let{space:o,outputSpace:i,premultiplied:a}=r;return ur(e,t,{space:o,outputSpace:i,premultiplied:a})(n)}function Ru(e,t,n={}){let r;Pa(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=n;r||([e,t]=[j(e),j(t)],r=ur(e,t,l));let c=qn(e,t),h=o>0?Math.max(a,Math.ceil(c/o)+1):a,f=[];if(s!==void 0&&(h=Math.min(h,s)),h===1)f=[{p:.5,color:r(.5)}];else{let m=1/(h-1);f=Array.from({length:h},(g,w)=>{let $=w*m;return{p:$,color:r($)}})}if(o>0){let m=f.reduce((g,w,$)=>{if($===0)return 0;let k=qn(w.color,f[$-1].color,i);return Math.max(g,k)},0);for(;m>o;){m=0;for(let g=1;g<f.length&&f.length<s;g++){let w=f[g-1],$=f[g],k=($.p+w.p)/2,x=r(k);m=Math.max(m,qn(x,w.color),qn(x,$.color)),f.splice(g,0,{p:k,color:r(k)}),g++}}}return f=f.map(m=>m.color),f}function ur(e,t,n={}){if(Pa(e)){let[l,c]=[e,t];return ur(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:r,outputSpace:o,progression:i,premultiplied:a}=n;e=j(e),t=j(t),e=Qn(e),t=Qn(t);let s={colors:[e,t],options:n};if(r?r=M.get(r):r=M.registry[rt.interpolationSpace]||e.space,o=o?M.get(o):r,e=Be(e,r),t=Be(t,r),e=Mt(e),t=Mt(t),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",c=[r,"h"],[h,f]=[He(e,c),He(t,c)];[h,f]=d1(l,[h,f]),Ct(e,c,h),Ct(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((m,g)=>{let w=t.coords[g];return ro(m,w,l)}),h=ro(e.alpha,t.alpha,l),f={space:r,coords:c,alpha:h};return a&&(f.coords=f.coords.map(m=>m/h)),o!==r&&(f=Be(f,o)),f},{rangeArgs:s})}function Pa(e){return $t(e)==="function"&&!!e.rangeArgs}rt.interpolationSpace="lab";function g2(e){e.defineFunction("mix",Du,{returns:"color"}),e.defineFunction("range",ur,{returns:"function<color>"}),e.defineFunction("steps",Ru,{returns:"array<color>"})}var w2=Object.freeze({__proto__:null,isRange:Pa,mix:Du,range:ur,register:g2,steps:Ru}),_u=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:er,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,o,i]=e,[a,s,l]=[NaN,0,(n+t)/2],c=t-n;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case r:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-r)/c+2;break;case i:a=(r-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function o(i){let a=(i+t/30)%12,s=n*Math.min(r,1-r);return r-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Hu=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:_u,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r+n*Math.min(r,1-r);return[t,o===0?0:200*(1-r/o),100*o]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=r*(1-n/2);return[t,o===0||o===1?0:(r-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),v2=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Hu,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let o=n+r;if(o>=1){let s=n/o;return[t,0,s*100]}let i=1-r,a=i===0?0:1-n/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const b2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],y2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Fu=new Ce({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:b2,fromXYZ_M:y2}),k2=new Ce({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Fu,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const $2=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],x2=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Vu=new Ce({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ia,toXYZ_M:$2,fromXYZ_M:x2});const T2=1/512,S2=16/512;var C2=new Ce({id:"prophoto",name:"ProPhoto",base:Vu,toBase(e){return e.map(t=>t<S2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=T2?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),M2=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:so,fromBase(e){let[t,n,r]=e,o;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?o=NaN:o=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),Co(o)]},toBase(e){let[t,n,r]=e,o,i;return isNaN(r)?(o=0,i=0):(o=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Ks=203,Qs=2610/2**14,A2=2**14/2610,E2=2523/2**5,el=2**5/2523,tl=3424/2**12,nl=2413/2**7,rl=2392/2**7;var I2=new Ce({id:"rec2100pq",name:"REC.2100-PQ",base:Mo,toBase(e){return e.map(function(t){return(Math.max(t**el-tl,0)/(nl-rl*t**el))**A2*1e4/Ks})},fromBase(e){return e.map(function(t){let n=Math.max(t*Ks/1e4,0),r=tl+nl*n**Qs,o=1+rl*n**Qs;return(r/o)**E2})},formats:{color:{id:"rec2100-pq"}}});const ol=.17883277,il=.28466892,al=.55991073,Jo=3.7743;var L2=new Ce({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Mo,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Jo:(Math.exp((t-al)/ol)+il)/12*Jo})},fromBase(e){return e.map(function(t){return t/=Jo,t<=1/12?Math.sqrt(3*t):ol*Math.log(12*t-il)+al})},formats:{color:{id:"rec2100-hlg"}}});const ju={};St.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=zu(e.W1,e.W2,e.options.method))});St.add("chromatic-adaptation-end",e=>{e.M||(e.M=zu(e.W1,e.W2,e.options.method))});function Ao({id:e,toCone_M:t,fromCone_M:n}){ju[e]=arguments[0]}function zu(e,t,n="Bradford"){let r=ju[n],[o,i,a]=le(r.toCone_M,e),[s,l,c]=le(r.toCone_M,t),h=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],f=le(h,r.toCone_M);return le(r.fromCone_M,f)}Ao({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ao({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ao({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ao({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Ye,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ye.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const P2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],q2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Zu=new Ce({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ye.ACES,toXYZ_M:P2,fromXYZ_M:q2,formats:{color:{}}});const xr=2**-16,Xo=-.35828683,Tr=(Math.log2(65504)+9.72)/17.52;var N2=new Ce({id:"acescc",name:"ACEScc",coords:{r:{range:[Xo,Tr],name:"Red"},g:{range:[Xo,Tr],name:"Green"},b:{range:[Xo,Tr],name:"Blue"}},referred:"scene",base:Zu,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-xr)*2:n<Tr?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(xr)+9.72)/17.52:t<xr?(Math.log2(xr+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),sl=Object.freeze({__proto__:null,A98RGB:k2,A98RGB_Linear:Fu,ACEScc:N2,ACEScg:Zu,HSL:_u,HSV:Hu,HWB:v2,ICTCP:Di,JzCzHz:Bi,Jzazbz:qu,LCH:Kn,Lab:Ee,Lab_D65:Oi,OKLCH:M2,OKLab:so,P3:Au,P3_Linear:Cu,ProPhoto:C2,ProPhoto_Linear:Vu,REC_2020:Su,REC_2020_Linear:Mo,REC_2100_HLG:L2,REC_2100_PQ:I2,XYZ_ABS_D65:La,XYZ_D50:Ia,XYZ_D65:_e,sRGB:er,sRGB_Linear:Mu});class P{constructor(...t){let n;t.length===1&&(n=j(t[0]));let r,o,i;n?(r=n.space||n.spaceId,o=n.coords,i=n.alpha):[r,o,i]=t,Object.defineProperty(this,"space",{value:M.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=b1(this,...t);return n.color=new P(n.color),n}static get(t,...n){return t instanceof P?t:new P(t,...n)}static defineFunction(t,n,r=n){let{instance:o=!0,returns:i}=r,a=function(...s){let l=n(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let c=l;l=function(...h){let f=c(...h);return P.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let n in t)P.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(P);else for(let n in t)P.defineFunction(n,t[n])}}P.defineFunctions({get:He,getAll:cr,set:Ct,setAll:Tu,to:Be,equals:y1,inGamut:Vn,toGamut:Mt,distance:Eu,toString:ao});Object.assign(P,{util:a1,hooks:St,WHITES:Ye,Space:M,spaces:M.registry,parse:xu,defaults:rt});for(let e of Object.keys(sl))M.register(sl[e]);for(let e in M.registry)Ri(e,M.registry[e]);St.add("colorspace-init-end",e=>{var t;Ri(e.id,e),(t=e.aliases)==null||t.forEach(n=>{Ri(n,e)})});function Ri(e,t){Object.keys(t.coords),Object.values(t.coords).map(r=>r.name);let n=e.replace(/-/g,"_");Object.defineProperty(P.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}P.extend(lo);P.extend({deltaE:qn});Object.assign(P,{deltaEMethods:lo});P.extend(p2);P.extend({contrast:H1});P.extend(V1);P.extend($1);P.extend(w2);P.extend(Vr);function Wu(e){return ve(e,(t,n)=>n instanceof P?N(n.toString({format:"hex"})):Wu(n))}const O2="dodgerblue";function _i(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function Ko({background:e,foreground:t}){return{background:e??new P(_i(t)),foreground:t??new P(_i(e))}}var co;(function(e){e.Dark="dark",e.Light="light"})(co||(co={}));function B2(e){return e==="black"?"white":"black"}const D2={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},R2={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function ll({themeColor:e=O2,themeStyle:t=co.Light}={}){const n=new P(e),r=new P(t===co.Dark?"black":"white"),o=_i(r),i=new P(o),a={nav:{hover:Ko({background:n.clone().set({"hsl.l":93})}),active:Ko({background:n.clone().set({"hsl.l":90})}),selected:Ko({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...R2[B2(o)],foreground:i,...D2[o]}};return Wu(a)}const uo=pa()("element-book-change-route"),cl="vira-",{defineElement:bn,defineElementNoInputs:h4}=Sa({assertInputs:e=>{if(!e.tagName.startsWith(cl))throw new Error(`Tag name should start with '${cl}' but got '${e.tagName}'`)}}),Uu=p`
    pointer-events: none;
    opacity: 0.3;
`,xt=ft({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ho=ft({"vira-form-input-border-radius":"8px"}),fo=ft({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${ho["vira-form-input-border-radius"].value} + 4px)`});function Gu({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=N(Dt(r+n+t));return p`
        ${N(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${fo["vira-focus-outline-color"].value};
            border-radius: ${fo["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Yu=p`
    padding: 0;
    margin: 0;
`,me=p`
    ${Yu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function _2(e){return p`
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
    `}const Fe=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ne=bn()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var Hi;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Hi||(Hi={}));bn()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Hi.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Fe};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${fo["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Uu};
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
            border-radius: ${ho["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${xt["vira-interaction-animation-duration"].value},
                background-color
                    ${xt["vira-interaction-animation-duration"].value},
                border-color ${xt["vira-interaction-animation-duration"].value};
        }

        ${Gu({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ne} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${ne.assign({icon:e.icon})}></${ne}>
              `:"",n=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var Fi;(function(e){e.Header="header"})(Fi||(Fi={}));bn()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
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
            transition: height ${xt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:K()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:n,events:r,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${S("click",()=>{n(new r.expandChange(!o.expanded))})}
            >
                <slot name=${Fi.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Jn(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=ft({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function v({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const H2=v({name:"CloseX24Icon",svgTemplate:u`
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
    `}),F2=v({name:"Element16Icon",svgTemplate:u`
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
    `});const V2=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),j2=p`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${xt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ju=v({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${j2}
        </style>
        ${V2.svgTemplate}
    `}),z2=v({name:"Options24Icon",svgTemplate:u`
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
    `}),Xu=v({name:"StatusFailure24Icon",svgTemplate:u`
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
    `});var mn;(function(e){e.Loading="loading",e.Error="error"})(mn||(mn={}));const yt=bn()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:K(),imageError:K()},styles:({hostClasses:e})=>p`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:n,dispatch:r,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?u`
                  <slot class="status-wrapper" name=${mn.Error}>
                      <${ne.assign({icon:Xu})} class="error"></${ne}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                    <slot class="status-wrapper" name=${mn.Loading}>
                        <${ne.assign({icon:Ju})}></${ne}>
                    </slot>
                `;return u`
            ${Ie(!!a,a)}
            <img
                class=${ye({hidden:!!a})}
                ${S("load",async()=>{e._debugLoadDelay&&await Si(e._debugLoadDelay.milliseconds),n({loadedUrls:{...t.loadedUrls,[i]:!0}}),r(new o.imageLoad)})}
                ${S("error",async s=>{e._debugLoadDelay&&await Si(e._debugLoadDelay.milliseconds),n({erroredUrls:{...t.erroredUrls,[i]:!0}}),r(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Vi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Vi({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ku({value:e,allowed:t,blocked:n}){const r=t?Vi({input:e,matcher:t}):!0,o=n?Vi({input:e,matcher:n}):!1;return r&&!o}function Qu(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(Ku({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function Z2({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:o}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Pn(n,HTMLInputElement),a=n.data,s=t;let l=i.value??"";if(a)if(a.length===1)Ku({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,r(a));else{const{filtered:c,blocked:h}=Qu({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,r(h)}i.value!==l&&(i.value=l),s!==l&&o(l)}const jr=bn()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:K(),inputBlocked:K()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${fo["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Uu};
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
                ${Fe};
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
                border-radius: ${ho["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${xt["vira-interaction-animation-duration"].value};
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
                border-radius: ${ho["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Gu({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Fe};
            }

            .close-x-button {
                ${me};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${xt["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:n,updateState:r,events:o})=>{const{filtered:i}=Qu({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${ne.assign({icon:e.icon})} class="left-side-icon"></${ne}>
              `:"",s=e.fitText?p`
                  width: ${n.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${Ie(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${Jn(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
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
                    ${S("input",l=>{Z2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Ie(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${S("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${ne.assign({icon:H2})}></${ne}>
                        </button>
                    `)}
                ${Ie(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});bn()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:K()},renderCallback({inputs:e,dispatch:t,events:n}){var o,i;function r(a){e.route&&To(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new n.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${S("click",r)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Ve,defineElementNoInputs:f4}=Sa(),Oe=Ve()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var r,o;const n=((o=e.router)==null?void 0:o.createRoutesUrl({...(r=e.router)==null?void 0:r.getCurrentRawRoutes(),...e.route}))??"#";return u`
            <a
                href=${n}
                ${S("click",i=>{(!e.router||To(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new uo(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function W2(e,t){return e.entry.entryType===pe.Root?!1:!!(e.entry.entryType===pe.Page||ut(t,e.fullUrlBreadcrumbs.slice(0,-1))||ut(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const st=Ve()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
            ${Oe.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${ne} {
            display: inline-flex;
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!W2(n,e.selectedPath))return;const r=p`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${r}>
                    <${Oe.assign({router:e.router,route:{paths:[Te.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${ye({"title-row":!0,selected:e.selectedPath?ut(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ie(sn(n,pe.ElementExample),u`
                                    <${ne.assign({icon:F2})}></${ne}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Oe}>
                </li>
            `});return u`
            <${Oe.assign({route:fn,router:e.router})}>
                <slot name=${nt.NavHeader}>Book</slot>
            </${Oe}>
            <ul>
                ${t}
            </ul>
        `}});async function U2(e){await Ci(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ch(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Et=Ve()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(de(e.message,"array")?e.message:[e.message]).map(n=>u`
                <p>${n}</p>
            `)}}),tr=Ve()({tagName:"book-page-controls",events:{controlValueChange:K()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
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

        ${jr} {
            height: 24px;
            max-width: 128px;
        }

        ${ne}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,o],i)=>{if(o.controlType===O.Hidden)return"";const a=G2(e.currentValues[r],o,s=>{const l=de(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[r]:s}}))});return u`
                    <div class="control-wrapper">
                        ${Ie(i===0,u`
                                <${ne.assign({icon:z2})}
                                    class="options-icon"
                                ></${ne}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function G2(e,t,n){return Yt(t,O.Hidden)?"":Yt(t,O.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${S("input",r=>{const o=Pn(r,HTMLInputElement);n(o.checked)})}
            />
        `:Yt(t,O.Color)?u`
            <input
                type="color"
                .value=${e}
                ${S("input",r=>{const o=Pn(r,HTMLInputElement);n(o.value)})}
            />
        `:Yt(t,O.Text)?u`
            <${jr.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${S(jr.events.valueChange,r=>{n(r.detail)})}
            ></${jr}>
        `:Yt(t,O.Number)?u`
            <input
                type="number"
                .value=${e}
                ${S("input",r=>{const o=Pn(r,HTMLInputElement);n(o.value)})}
            />
        `:Yt(t,O.Dropdown)?u`
            <select
                .value=${e}
                ${S("input",r=>{const o=Pn(r,HTMLSelectElement);n(o.value)})}
            >
                ${t.options.map(r=>u`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const ul=Ve()({tagName:"book-breadcrumbs",styles:p`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,o)=>{const i=r>=o.length-1,a=o.slice(0,r+1),s=i?"":u`
                      <span class="spacer">&gt;</span>
                  `;return u`
                <${Oe.assign({route:{hash:void 0,search:void 0,paths:[Te.Book,...a]},router:e.router})}>
                    ${n}
                </${Oe}>
                ${s}
            `}):u`
                &nbsp;
            `}}),Qo=Ve()({tagName:"book-breadcrumbs-bar",styles:p`
        :host {
            border-bottom: 1px solid
                ${H["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${H["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return u`
            ${Ie(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${ul.assign({currentRoute:e.currentRoute,router:e.router})}></${ul}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${S("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=r.value;await Si(200),r.value===o&&(r.value?t(new uo({paths:[Te.Search,encodeURIComponent(r.value)]})):t(new uo(fn)))})}
            />
        `}}),dl=Ve()({tagName:"book-entry-description",styles:p`
        :host {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${H["element-book-page-foreground-color"].value};
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
            `)}}),hl=Ve()({tagName:"book-page-wrapper",styles:p`
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

        ${Oe} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Te.Book,...e.pageNode.fullUrlBreadcrumbs],r=kc(e.pageNode.entry.errors);return r&&console.error(r),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Oe.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Oe}>
                    ${r?u`
                              <${Et.assign({message:r.message})}></${Et}>
                          `:u`
                              <${dl.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${dl}>
                              <${tr.assign({config:e.pageNode.entry.controls,currentValues:Ma(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${tr}>
                          `}
                </div>
            </div>
        `}}),Sr=Ve()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[Te.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${Oe.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Oe}>
        `}}),fl=Symbol("unset-internal-state"),ml=Ve()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:fl},renderCallback({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw kc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===fl&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.renderCallback({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${Ie(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error(r),u`
                <${Et.assign({message:`${t.elementExampleNode.entry.title} failed: ${wn(r)}`})}></${Et}>
            `}},options:{allowPolymorphicState:!0}}),pl=Ve()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Sr} {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Sr} {
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${Sr.assign(Zn(e,["currentPageControls"]))}></${Sr}>
                <${ml.assign(e)}></${ml}>
            </div>
        `}});function ed(e,t,n,r){const o=Ii(n,r),i=[];if(o){const a=ed(e,t,o,r);a&&i.push(a)}if(sn(n,pe.Page)&&!e.includes(n)){const a=Ma(t,n.fullUrlBreadcrumbs);i.push({config:n.entry.controls,current:a,breadcrumbs:ve(a,()=>n.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Y2({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:o,originalTree:i}){if(!e.length&&r)return[u`
                No results
            `];const a=os(e,1)?ed(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&os(e,1)?u`
                  <${tr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${tr}>
              `:ee,l=Jh(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,h)=>{if(sn(c,pe.Page))return u`
                    <${hl.assign({isTopLevel:t,pageNode:c,controls:o,router:n})}
                        class="block-entry"
                    ></${hl}>
                `;if(sn(c,pe.ElementExample)){const f=Ma(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${pl.assign({elementExampleNode:c,currentPageControls:f,router:n})}
                        class="inline-entry"
                    ></${pl}>
                `}else return sn(c,pe.Root)?ee:u`
                    <${Et.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Et}>
                `});return[s,l]}const Kt=Ve()({tagName:"book-entry-display",styles:p`
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

        ${Qo} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${xt["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:K()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:n,state:r,updateState:o})=>{const i=Li(e.currentRoute.paths),a=Y2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${Qo.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Qo}>

            ${Ie(e.showLoading,u`
                    <div
                        ${xs(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${ne.assign({icon:Ju})}></${ne}>
                    </div>
                    ${Ie(!!r.lastElement,u`
                            ${r.lastElement}
                            <slot name=${nt.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${xs(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${nt.Footer}></slot>
                `)}
        `}});function J2(e,t,n){const r=gl(e,t);if(r.length)return r;n(fn);const o=gl(e,fn.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function gl(e,t){return e.filter(n=>Sh({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const ei=su()({tagName:"element-book-app",events:{pathUpdate:K()},stateInitStatic:{currentRoute:fn,router:void 0,loading:!0,colors:{config:void 0,theme:ll(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
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

        ${Kt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${st} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{wl(e,Li(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:n,updateState:r,dispatch:o,events:i})=>{var h,f,m,g,w,$,k;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const C=a(x);return!ut(e.currentRoute,C)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(ke).join(" - "))}function c(x){if(!s(x))return;const C=a(x);e.router?e.router.setRoutes(C):r({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ut(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!ut(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(h=t.internalRouterConfig)!=null&&h.useInternalRouter&&!e.router){const z=n1(t.internalRouterConfig.basePath);r({router:z}),z.addRouteListener(!0,ie=>{r({currentRoute:ie})})}else!((f=t.internalRouterConfig)!=null&&f.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!ut(x,(m=e.colors)==null?void 0:m.config)){const z=ll(x);r({colors:{config:x,theme:z}}),i1(n,z)}const C=t._debug??!1,D=_f({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:du(D.tree,{children:(w=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:w.children,controls:t.globalValues})}}));const Z=Li(e.currentRoute.paths),fe=(Z?Wf({flattenedNodes:D.flattenedNodes,searchQuery:Z}):void 0)??J2(D.flattenedNodes,e.currentRoute.paths,c);l(($=fe[0])==null?void 0:$.entry.title);const ce=(k=e.treeBasedControls)==null?void 0:k.controls;return ce?(t._debug&&console.info({currentControls:ce}),u`
                <div
                    class="root"
                    ${S(uo,async z=>{const ie=z.detail;if(!s(ie))return;if(r({loading:!0}),c(ie),!(n.shadowRoot.querySelector(st.tagName)instanceof st))throw new Error(`Failed to find child '${st.tagName}'`);wl(n,Z,e.currentRoute)})}
                    ${S(tr.events.controlValueChange,z=>{if(!e.treeBasedControls)return;const ie=Ff(ce,z.detail.fullUrlBreadcrumbs,z.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:ie}})})}
                >
                    <${st.assign({flattenedNodes:D.flattenedNodes,router:e.router,selectedPath:Z?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${nt.NavHeader}
                            slot=${nt.NavHeader}
                        ></slot>
                    </${st}>
                    <${Kt.assign({controls:ce,currentNodes:fe,currentRoute:e.currentRoute,debug:C,originalTree:D.tree,router:e.router,showLoading:e.loading})}
                        ${S(Kt.events.loadingRender,async z=>{await Ci();const ie=n.shadowRoot.querySelector(Kt.tagName);ie?ie.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Kt.tagName}' for scrolling.`),await Ci(),r({loading:!z.detail})})}
                    >
                        <slot
                            name=${nt.Footer}
                            slot=${nt.Footer}
                        ></slot>
                    </${Kt}>
                </div>
            `):u`
                    <${Et.assign({message:"Failed to generate page controls."})}></${Et}>
                `}catch(x){return console.error(x),u`
                <p class="error">${wn(x)}</p>
            `}}});async function wl(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(st.tagName);if(!(r instanceof st))throw new Error(`Failed to find child '${st.tagName}'`);await U2(r)}const d=ft({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),V=ve(d,(e,t)=>n=>N(`var(${t.name}, ${n})`)),X2=v({name:"Copy16Icon",svgTemplate:u`
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
    `}),K2=v({name:"ExternalLink16Icon",svgTemplate:u`
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
    `}),Tt=v({name:"InfoCircle16Icon",svgTemplate:u`
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
    `}),Q2=v({name:"ArrowBarUp24Icon",svgTemplate:u`
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
    `}),em=v({name:"ArrowForwardUp24Icon",svgTemplate:u`
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
    `}),qa=v({name:"ArrowLeft24Icon",svgTemplate:u`
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
    `}),tm=v({name:"ArrowLoopLeft24Icon",svgTemplate:u`
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
    `}),nm=v({name:"ArrowLoopRight24Icon",svgTemplate:u`
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
    `}),Na=v({name:"ArrowRight24Icon",svgTemplate:u`
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
    `}),td=v({name:"ArrowsSort24Icon",svgTemplate:u`
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
    `}),rm=v({name:"ArrowsSortAscending24Icon",svgTemplate:u`
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
    `}),om=v({name:"ArrowsSortDescending24Icon",svgTemplate:u`
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
    `}),im=v({name:"Bell24Icon",svgTemplate:u`
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
    `}),am=v({name:"Bucket24Icon",svgTemplate:u`
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
    `}),sm=v({name:"BuildingStore24Icon",svgTemplate:u`
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
    `}),lm=v({name:"CalendarEvent24Icon",svgTemplate:u`
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
    `}),cm=v({name:"Cash24Icon",svgTemplate:u`
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
    `}),um=v({name:"Chain24Icon",svgTemplate:u`
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
    `}),nd=v({name:"CheckMark24Icon",svgTemplate:u`
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
    `}),rd=v({name:"ChevronDown24Icon",svgTemplate:u`
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
    `}),dm=v({name:"ChevronUp24Icon",svgTemplate:u`
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
    `}),hm=v({name:"Circle24Icon",svgTemplate:u`
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
    `}),od=v({name:"CircleDot24Icon",svgTemplate:u`
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
    `}),fm=v({name:"CirclePlus24Icon",svgTemplate:u`
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
    `}),mm=v({name:"CircleWavyCheck24Icon",svgTemplate:u`
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
    `}),pm=v({name:"Clock24Icon",svgTemplate:u`
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
    `}),id=v({name:"Code24Icon",svgTemplate:u`
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
    `}),ad=v({name:"Copy24Icon",svgTemplate:u`
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
    `}),gm=v({name:"CreateFile24Icon",svgTemplate:u`
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
    `}),wm=v({name:"DotsVertical24Icon",svgTemplate:u`
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
    `}),vm=v({name:"Download24Icon",svgTemplate:u`
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
    `}),bm=v({name:"Edit24Icon",svgTemplate:u`
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
    `}),sd=v({name:"ExternalLink24Icon",svgTemplate:u`
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
    `}),ym=v({name:"Filter24Icon",svgTemplate:u`
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
    `}),km=v({name:"Gear24Icon",svgTemplate:u`
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
    `}),$m=v({name:"Geometry24Icon",svgTemplate:u`
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
    `}),xm=v({name:"GridDots24Icon",svgTemplate:u`
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
    `}),Tm=v({name:"Heart24Icon",svgTemplate:u`
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
    `}),ji=v({name:"Infinity24Icon",svgTemplate:u`
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
    `}),Sm=v({name:"Info24Icon",svgTemplate:u`
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
    `}),Cm=v({name:"LayersLinked24Icon",svgTemplate:u`
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
    `}),Mm=v({name:"LayoutGrid24Icon",svgTemplate:u`
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
    `}),Am=v({name:"Lifebuoy24Icon",svgTemplate:u`
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
    `}),Em=v({name:"List24Icon",svgTemplate:u`
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
    `}),Im=v({name:"ListDetails24Icon",svgTemplate:u`
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
    `}),Lm=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),Oa=v({name:"LoaderAnimated24Icon",svgTemplate:u`
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
    `}),Pm=v({name:"Lock24Icon",svgTemplate:u`
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
    `}),qm=v({name:"LockOpen24Icon",svgTemplate:u`
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
    `}),Nm=v({name:"Menu24Icon",svgTemplate:u`
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
    `}),Om=v({name:"Paper24Icon",svgTemplate:u`
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
    `}),Bm=v({name:"People24Icon",svgTemplate:u`
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
    `}),Dm=v({name:"Person24Icon",svgTemplate:u`
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
    `}),Rm=v({name:"Photo24Icon",svgTemplate:u`
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
    `}),_m=v({name:"Refresh24Icon",svgTemplate:u`
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
    `}),ld=v({name:"Rocket24Icon",svgTemplate:u`
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
    `}),cd=v({name:"Search24Icon",svgTemplate:u`
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
    `}),Hm=v({name:"Send24Icon",svgTemplate:u`
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
    `}),Fm=v({name:"ShoppingCart24Icon",svgTemplate:u`
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
    `}),Vm=v({name:"Social24Icon",svgTemplate:u`
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
    `}),jm=v({name:"Square24Icon",svgTemplate:u`
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
    `}),vl={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`},X={interaction:p`var(${vl.interactionDuration}, 84ms)`,pretty:p`var(${vl.prettyDuration}, 300ms)`};function ti(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const zm=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},n={...e,foregroundColor:p`#ACADAD`},r={...e,foregroundColor:p`#D6D6D6`},o={...t},i={...t,foregroundColor:p`#00A876`},a={...t,foregroundColor:p`#1D6852`},s={...r},l={...e,foregroundColor:p`#EAFBF7`},c={...e,backgroundColor:p`#D2EEFA`},h=ti(o),f=ti(i),m=ti(a),g=m,w={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},$={...w,foregroundColor:p`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:n,pageTertiary:r,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:h,accentPrimaryHover:f,accentPrimaryActive:m,accentSecondary:w,accentTertiary:$}})(),ud=zm;function bl(e,t){return N(`--toniq-${Xr(e)}-${Xr(t)}`)}const Ba=ve(ud,e=>({backgroundColor:bl(e,"backgroundColor"),foregroundColor:bl(e,"foregroundColor")}));function Ge(e,t){const n=ud[e][t],r=Ba[e][t];return p`var(${r}, ${n})`}const b=ve(Ba,e=>({foregroundColor:Ge(e,"foregroundColor"),backgroundColor:Ge(e,"backgroundColor")}));function F(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Wt=p`
    pointer-events: none;
    opacity: 0.3;
    ${Fe};
`;function Lt({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=N(Dt(r+n+t));return p`
        ${N(e)}::after {
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
    `}const dd={toniqFont:{"font-family":p`'Rubik', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`48px`,"font-size":p`32px`},h3Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}},Zm=ve(dd,(e,t)=>{const n=N(Xr(e.replace(/Font$/,"")));return ve(t,o=>{const i=N(o);return p`--toniq-font-${n}-${i}`})});function et(e){const t=Zm[e],n=dd[e],r=he(t).map(o=>{const i=n[o],a=t[o];return p`
            ${N(o)}: var(${a}, ${i});
        `});return N(r.join(`
`))}const Y=(()=>{const e=p`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
        ${et("toniqFont")};
    `,t=p`
        ${e};
        ${et("normalWeightFont")};
    `,n=p`
        ${e};
        ${et("boldFont")};
    `,r=p`
        ${e};
        ${et("extraBoldFont")};
    `,o=p`
        ${e};
        ${et("paragraphFont")};
        ${t};
    `,i=p`
        ${e};
        ${o};
        ${n};
    `,a=p`
        ${e};
        ${et("labelFont")};
        ${t};
    `,s=p`
        ${a};
        ${n};
    `,l=p`
        ${et("h1Font")};
        ${r};
    `,c=p`
        ${et("h2Font")};
        ${n};
    `,h=p`
        ${et("h3Font")};
        ${n};
    `,f=p`
        ${et("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:n,extraBoldFont:r,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:h,monospaceFont:f}})(),mo={popupShadow:p`
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
        filter: drop-shadow(0px 12px 8px ${b.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Wm(e,t=!0){const n=N(e),r=e===":host"?p`
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
            ${mo.popupShadow};
        }

        ${o}
    `}const Um=v({name:"SquareCheck24Icon",svgTemplate:u`
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
    `}),zr=v({name:"Trash24Icon",svgTemplate:u`
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
    `}),Gm=v({name:"Upload24Icon",svgTemplate:u`
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
    `}),Ym=v({name:"Wallet24Icon",svgTemplate:u`
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
    `}),Jm=v({name:"WorldUpload24Icon",svgTemplate:u`
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
                d="M21 12c0-5-4-9-9-9s-9 4-9 9 4 9 9 9M3.6 9h16.8M3.6 15H12m-.4-12a17 17 0 0 0 0 18m.9-18c1.7 2.7 2.5 5.8 2.5 9"
            />
            <path
                fill="none"
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `}),Xm=v({name:"X24Icon",svgTemplate:u`
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
    `}),Km=v({name:"Folder48Icon",svgTemplate:u`
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
    `}),hd=v({name:"FolderOff48Icon",svgTemplate:u`
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
    `}),Qm=v({name:"Kyc48Icon",svgTemplate:u`
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
                fill=${V["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${V["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${V["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),fd=v({name:"Api64Icon",svgTemplate:u`
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
    `}),ep=v({name:"CircleDashes64Icon",svgTemplate:u`
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
    `}),tp=v({name:"Rocket64Icon",svgTemplate:u`
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
    `}),np=v({name:"CryptoBtc16Icon",svgTemplate:u`
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
    `}),rp=v({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),op=v({name:"CryptoCkBtc16Icon",svgTemplate:u`
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
    `}),ip=v({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),md="0 0 58 58",pd=Rh`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,ap=v({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${md}"
        >
            ${pd}
        </svg>
    `}),sp=v({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${md}"
        >
            ${pd}
        </svg>
    `}),gd=v({name:"BrandDiscord24Icon",svgTemplate:u`
        <svg
            fill=${V["toniq-icon-fill-color"]("#5865f2")}
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
    `}),wd=v({name:"BrandDistrikt24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${V["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),vd=v({name:"BrandDscvr24Icon",svgTemplate:u`
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
    `}),lp=v({name:"BrandFacebookLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${V["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),cp=v({name:"BrandGoogleLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${V["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),up=v({name:"BrandIcScan24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${V["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),bd=v({name:"BrandInstagram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${V["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),dp=v({name:"BrandInstagramFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),yd=v({name:"BrandMedium24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),hp=v({name:"BrandNftgeek24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${V["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),kd=v({name:"BrandTelegram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${V["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),$d=v({name:"BrandTiktok24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${V["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${V["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),fp=v({name:"BrandTiktokFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),xd=v({name:"BrandTwitch24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Td=v({name:"BrandTwitter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),mp=v({name:"BioniqRobot100Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${V["toniq-icon-stroke-color"]("#8A2BE2")}
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
    `}),pp=v({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"](String(b.brandPrimary.foregroundColor))}
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
    `}),vt={"core-16":[X2,K2,Tt],"core-24":[Q2,em,qa,tm,nm,Na,td,rm,om,im,am,sm,lm,cm,um,nd,rd,dm,hm,od,fm,mm,pm,id,ad,gm,wm,vm,bm,sd,ym,km,$m,xm,Tm,ji,Sm,Cm,Mm,Am,Em,Im,Lm,Oa,Pm,qm,Nm,Om,Bm,Dm,Rm,_m,ld,cd,Hm,Fm,Vm,jm,Um,zr,Gm,Ym,Jm,Xm],"core-48":[Km,hd,Qm],"core-64":[fd,ep,tp],cryptocurrencies:[np,rp,op,ip,ap,sp],"third-party-brands":[gd,wd,vd,lp,cp,up,bd,dp,yd,hp,kd,$d,fp,xd,Td],toniq:[mp,pp]},gp=sr({discord:Qe(void 0,""),distrikt:Qe(void 0,""),dscvr:Qe(void 0,""),instagram:Qe(void 0,""),medium:Qe(void 0,""),telegram:Qe(void 0,""),tikTok:Qe(void 0,""),twitch:Qe(void 0,""),twitter:Qe(void 0,""),website:Qe(void 0,"")}),wp=gp.defaultValue,Sd={discord:gd,instagram:bd,telegram:kd,tikTok:$d,distrikt:wd,twitch:xd,dscvr:vd,medium:yd,twitter:Td,website:id},yl="toniq-",{defineElement:re,defineElementNoInputs:vp}=Sa({assertInputs:e=>{if(!e.tagName.startsWith(yl))throw new Error(`Tag name should start with '${yl}' but got '${e.tagName}'`)}}),Vt=re()({tagName:"toniq-bold-space",styles:p`
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
            ${Y.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),T=re()({tagName:"toniq-icon",styles:p`
        :host {
            display: inline-flex;
            ${L["vira-icon-fill-color"].name}: ${d["toniq-icon-fill-color"].value}
            ${L["vira-icon-stroke-color"].name}: ${d["toniq-icon-stroke-color"].value}
            ${L["vira-icon-stroke-width"].name}: ${d["toniq-icon-stroke-width"].value}
        }

        ${ne} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return u`
            <${ne.assign(e)}></${ne}>
        `}}),zi=p`8px`;var po=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(po||{});const ue=re()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${Y.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Fe};
        }

        :host(:hover) button {
            ${F(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${F(b.accentPrimaryActive)};
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
            border-radius: ${zi};
            ${F(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                border-color ${X.interaction};
        }

        ${Lt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${F(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${F(b.pagePrimary)};
            border-color: ${b.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Wt};
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
                  <${T.assign({icon:e.icon})}
                      class="icon-template"
                  ></${T}>
              `:"",n=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${n}</slot>
            </button>
        `}});function bp(e,t,n={behavior:"smooth"}){let r=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Da(e)[o];i==="-"&&(r*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+r,c=s.filter(f=>i==="+"?f>l:f<l).sort((f,m)=>i==="+"?f-m:m-f);let h;return c.length>0?h=c[0]:i==="+"?h=a:h=0,e.scrollTo({...n,[o==="x"?"left":"top"]:h})}function yp(e){const t=window.getComputedStyle(e),n=e.getBoundingClientRect();let r=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let w=parseFloat(m);return/%/.test(m)&&(w/=100,w*=g),w}let l=s(r,n.width),c=s(o,n.height),h=s(i,n.width),f=s(a,n.height);return{x:{before:l,after:h},y:{before:c,after:f}}}function kp(e,t,n="both"){return n==="x"&&e.right>=t.left&&e.left<=t.right||n==="y"&&e.bottom>=t.top&&e.top<=t.bottom||n==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Cd(e){let t=[];for(const n of e.children)t=t.concat(n,Cd(n));return t}function $p(e,t=!0){const n=e.getBoundingClientRect(),r={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Cd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const h of o){const f=h.getBoundingClientRect();if(t&&!kp(n,f,a))continue;const m=window.getComputedStyle(h);let[g,w]=m.getPropertyValue("scroll-snap-align").split(" ");typeof w>"u"&&(w=g);const $=i==="x"?w:g,k=f[s]-n[s]+e[c];switch($){case"none":break;case"start":r[i].start.push(k);break;case"center":r[i].center.push(k+f[l]/2);break;case"end":r[i].end.push(k+f[l]);break}}}return r}function Da(e){const t=e.getBoundingClientRect(),n=yp(e),r=$p(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:kl([...r.x.start.map(a=>a-n.x.before),...r.x.center.map(a=>a-t.width/2),...r.x.end.map(a=>a-t.width+n.x.after)].map(i(0,o.x))),y:kl([...r.y.start.map(a=>a-n.y.before),...r.y.center.map(a=>a-t.height/2),...r.y.end.map(a=>a-t.height+n.y.after)].map(i(0,o.y)))}}function kl(e){return Array.from(new Set(e))}const Zr="templates-container",xp=4e3;var Zi=(e=>(e.Default="default",e.Banner="banner",e))(Zi||{});const Me=re()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${_2(`.${Zr}`)}

        .${N(Zr)} {
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

        .arrow ${T} {
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
            ${F(b.pagePrimary)};
        }

        .arrow ${T}:hover {
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:n,host:r}){e.enableAutomaticCycling&&t.rotationIntervalId==null?n({rotationIntervalId:window.setInterval(()=>{ni({host:r,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||xp)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),n({rotationIntervalId:void 0}));const o=$l(t.scrollSnapPositions,0),i=$l(t.scrollSnapPositions,-1);return u`
            <div>
                <div
                    class="arrow left ${ye({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${T.assign({icon:qa})}
                        ${S("click",()=>{ni({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:r})})}
                    ></${T}>
                </div>
                <div
                    ${Jn(()=>{n({scrollSnapPositions:Da(Wi(r)).x})})}
                    class=${Zr}
                    ${S("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};n({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>u`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${ye({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${T.assign({icon:Na})}
                        ${S("click",()=>{ni({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:r})})}
                    ></${T}>
                </div>
            </div>
        `}});function $l(e,t){const n=t>=0?1:-1,r=t<0?e.length+t:t,o=r+n,i=e[r],a=e[o];if(!(i==null||a==null))return(i+a)/2+n*20}function Wi(e){const t=e.shadowRoot.querySelector(`.${Zr}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function ni({host:e,direction:t,allowWrapping:n,blockIfHovering:r}){if(r&&e.matches(":hover"))return;const o=Wi(e),i=o.clientWidth,a=Da(Wi(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,h=o.scrollLeft<=s+10;if(t==="right"&&c)n&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&h)n&&o.scrollTo({behavior:"smooth",left:l});else{const f=Tp(e,t),m=xl(o.scrollLeft,a,!1),g=t==="right"?1:-1,w=(o.clientWidth-f*3)*g,$=xl((m||0)+w,a,!0);t==="right"&&$>m?o.scrollTo({behavior:"smooth",left:$}):t==="left"&&$<m?o.scrollTo({behavior:"smooth",left:$}):bp(o,t)}}function Tp(e,t){const n=`.arrow.${t}`,r=e.shadowRoot.querySelector(n);if(!r)throw new Error("Failed to find arrow element for calculating its size.");return r.clientWidth}function xl(e,t,n){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!n||i<=e)?i:o},1/0)}const mt=re()({tagName:"toniq-checkbox",events:{checkedChange:K()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ge("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ge("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ge("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ge("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ge("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${Y.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                opacity ${X.interaction};
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
            ${Fe};
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

        ${Lt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Wt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${T.assign({icon:nd})}
                    class="check-mark ${ye({hidden:!e.checked})}"
                ></${T}>
            </span>
        `,o=u`
            <slot
                class=${ye({label:!0,checked:e.checked})}
            >
                <span
                    class=${ye({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return u`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${S("click",()=>{const i=!e.checked;t(new n.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${r} ${o}
            </button>
        `}});var Ui=(e=>(e.Default="default",e.Secondary="secondary",e))(Ui||{});const ri=re()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${Y.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${F(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${F(b.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${T.assign({icon:e.icon})}></${T}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}});class Ut extends Error{}class Sp extends Ut{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Cp extends Ut{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Mp extends Ut{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class on extends Ut{}class Md extends Ut{constructor(t){super(`Invalid unit ${t}`)}}class xe extends Ut{}class pt extends Ut{constructor(){super("Zone is an abstract class")}}const y="numeric",Ke="short",Le="long",go={year:y,month:y,day:y},Ad={year:y,month:Ke,day:y},Ap={year:y,month:Ke,day:y,weekday:Ke},Ed={year:y,month:Le,day:y},Id={year:y,month:Le,day:y,weekday:Le},Ld={hour:y,minute:y},Pd={hour:y,minute:y,second:y},qd={hour:y,minute:y,second:y,timeZoneName:Ke},Nd={hour:y,minute:y,second:y,timeZoneName:Le},Od={hour:y,minute:y,hourCycle:"h23"},Bd={hour:y,minute:y,second:y,hourCycle:"h23"},Dd={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:Ke},Rd={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:Le},_d={year:y,month:y,day:y,hour:y,minute:y},Hd={year:y,month:y,day:y,hour:y,minute:y,second:y},Fd={year:y,month:Ke,day:y,hour:y,minute:y},Vd={year:y,month:Ke,day:y,hour:y,minute:y,second:y},Ep={year:y,month:Ke,day:y,weekday:Ke,hour:y,minute:y},jd={year:y,month:Le,day:y,hour:y,minute:y,timeZoneName:Ke},zd={year:y,month:Le,day:y,hour:y,minute:y,second:y,timeZoneName:Ke},Zd={year:y,month:Le,day:y,weekday:Le,hour:y,minute:y,timeZoneName:Le},Wd={year:y,month:Le,day:y,weekday:Le,hour:y,minute:y,second:y,timeZoneName:Le};class dr{get type(){throw new pt}get name(){throw new pt}get ianaName(){return this.name}get isUniversal(){throw new pt}offsetName(t,n){throw new pt}formatOffset(t,n){throw new pt}offset(t){throw new pt}equals(t){throw new pt}get isValid(){throw new pt}}let oi=null;class Eo extends dr{static get instance(){return oi===null&&(oi=new Eo),oi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return t0(t,n,r)}formatOffset(t,n){return jn(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Wr={};function Ip(e){return Wr[e]||(Wr[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Wr[e]}const Lp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Pp(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,o,i,a,s,l,c,h]=r;return[a,o,i,s,l,c,h]}function qp(e,t){const n=e.formatToParts(t),r=[];for(let o=0;o<n.length;o++){const{type:i,value:a}=n[o],s=Lp[i];i==="era"?r[s]=a:I(s)||(r[s]=parseInt(a,10))}return r}let Cr={};class dt extends dr{static create(t){return Cr[t]||(Cr[t]=new dt(t)),Cr[t]}static resetCache(){Cr={},Wr={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=dt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return t0(t,n,r,this.name)}formatOffset(t,n){return jn(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=Ip(this.name);let[o,i,a,s,l,c,h]=r.formatToParts?qp(r,n):Pp(r,n);s==="BC"&&(o=-Math.abs(o)+1);const m=Lo({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:h,millisecond:0});let g=+n;const w=g%1e3;return g-=w>=0?w:1e3+w,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Tl={};function Np(e,t={}){const n=JSON.stringify([e,t]);let r=Tl[n];return r||(r=new Intl.ListFormat(e,t),Tl[n]=r),r}let Gi={};function Yi(e,t={}){const n=JSON.stringify([e,t]);let r=Gi[n];return r||(r=new Intl.DateTimeFormat(e,t),Gi[n]=r),r}let Ji={};function Op(e,t={}){const n=JSON.stringify([e,t]);let r=Ji[n];return r||(r=new Intl.NumberFormat(e,t),Ji[n]=r),r}let Xi={};function Bp(e,t={}){const{base:n,...r}=t,o=JSON.stringify([e,r]);let i=Xi[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Xi[o]=i),i}let Nn=null;function Dp(){return Nn||(Nn=new Intl.DateTimeFormat().resolvedOptions().locale,Nn)}let Sl={};function Rp(e){let t=Sl[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Sl[e]=t}return t}function _p(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,o;try{r=Yi(e).resolvedOptions(),o=e}catch{const l=e.substring(0,n);r=Yi(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=r;return[o,i,a]}}function Hp(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Fp(e){const t=[];for(let n=1;n<=12;n++){const r=A.utc(2009,n,1);t.push(e(r))}return t}function Vp(e){const t=[];for(let n=1;n<=7;n++){const r=A.utc(2016,11,13+n);t.push(e(r))}return t}function Mr(e,t,n,r){const o=e.listingMode();return o==="error"?null:o==="en"?n(t):r(t)}function jp(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class zp{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:o,floor:i,...a}=r;if(!n||Object.keys(a).length>0){const s={useGrouping:!1,...r};r.padTo>0&&(s.minimumIntegerDigits=r.padTo),this.inf=Op(t,s)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Fa(t,3);return se(n,this.padTo)}}}class Zp{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&dt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Yi(n,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Wp{constructor(t,n,r){this.opts={style:"long",...r},!n&&Qd()&&(this.rtf=Bp(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):hg(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Up={firstDay:1,minimalDays:4,weekend:[6,7]};class W{static fromOpts(t){return W.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,o,i=!1){const a=t||Q.defaultLocale,s=a||(i?"en-US":Dp()),l=n||Q.defaultNumberingSystem,c=r||Q.defaultOutputCalendar,h=Ki(o)||Q.defaultWeekSettings;return new W(s,l,c,h,a)}static resetCache(){Nn=null,Gi={},Ji={},Xi={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:o}={}){return W.create(t,n,r,o)}constructor(t,n,r,o,i){const[a,s,l]=_p(t);this.locale=a,this.numberingSystem=n||s||null,this.outputCalendar=r||l||null,this.weekSettings=o,this.intl=Hp(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=jp(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:W.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ki(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Mr(this,t,o0,()=>{const r=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Fp(i=>this.extract(i,r,"month"))),this.monthsCache[o][t]})}weekdays(t,n=!1){return Mr(this,t,s0,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=n?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Vp(i=>this.extract(i,r,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return Mr(this,void 0,()=>l0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[A.utc(2016,11,13,9),A.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Mr(this,t,c0,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[A.utc(-40,1,1),A.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const o=this.dtFormatter(t,n),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===r);return a?a.value:null}numberFormatter(t={}){return new zp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Zp(t,this.intl,n)}relFormatter(t={}){return new Wp(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Np(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:e0()?Rp(this.locale):Up}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let ii=null;class be extends dr{static get utcInstance(){return ii===null&&(ii=new be(0)),ii}static instance(t){return t===0?be.utcInstance:new be(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new be(Po(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${jn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${jn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return jn(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Gp extends dr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function bt(e,t){if(I(e)||e===null)return t;if(e instanceof dr)return e;if(Xp(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?Eo.instance:n==="utc"||n==="gmt"?be.utcInstance:be.parseSpecifier(n)||dt.create(e)}else return jt(e)?be.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Gp(e)}let Cl=()=>Date.now(),Ml="system",Al=null,El=null,Il=null,Ll=60,Pl,ql=null;class Q{static get now(){return Cl}static set now(t){Cl=t}static set defaultZone(t){Ml=t}static get defaultZone(){return bt(Ml,Eo.instance)}static get defaultLocale(){return Al}static set defaultLocale(t){Al=t}static get defaultNumberingSystem(){return El}static set defaultNumberingSystem(t){El=t}static get defaultOutputCalendar(){return Il}static set defaultOutputCalendar(t){Il=t}static get defaultWeekSettings(){return ql}static set defaultWeekSettings(t){ql=Ki(t)}static get twoDigitCutoffYear(){return Ll}static set twoDigitCutoffYear(t){Ll=t%100}static get throwOnInvalid(){return Pl}static set throwOnInvalid(t){Pl=t}static resetCaches(){W.resetCache(),dt.resetCache()}}class Je{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ud=[0,31,59,90,120,151,181,212,243,273,304,334],Gd=[0,31,60,91,121,152,182,213,244,274,305,335];function De(e,t){return new Je("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Ra(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const o=r.getUTCDay();return o===0?7:o}function Yd(e,t,n){return n+(hr(e)?Gd:Ud)[t-1]}function Jd(e,t){const n=hr(e)?Gd:Ud,r=n.findIndex(i=>i<t),o=t-n[r];return{month:r+1,day:o}}function _a(e,t){return(e-t+7)%7+1}function wo(e,t=4,n=1){const{year:r,month:o,day:i}=e,a=Yd(r,o,i),s=_a(Ra(r,o,i),n);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=r-1,l=nr(c,t,n)):l>nr(r,t,n)?(c=r+1,l=1):c=r,{weekYear:c,weekNumber:l,weekday:s,...qo(e)}}function Nl(e,t=4,n=1){const{weekYear:r,weekNumber:o,weekday:i}=e,a=_a(Ra(r,1,t),n),s=ln(r);let l=o*7+i-a-7+t,c;l<1?(c=r-1,l+=ln(c)):l>s?(c=r+1,l-=ln(r)):c=r;const{month:h,day:f}=Jd(c,l);return{year:c,month:h,day:f,...qo(e)}}function ai(e){const{year:t,month:n,day:r}=e,o=Yd(t,n,r);return{year:t,ordinal:o,...qo(e)}}function Ol(e){const{year:t,ordinal:n}=e,{month:r,day:o}=Jd(t,n);return{year:t,month:r,day:o,...qo(e)}}function Bl(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new on("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Yp(e,t=4,n=1){const r=Io(e.weekYear),o=Re(e.weekNumber,1,nr(e.weekYear,t,n)),i=Re(e.weekday,1,7);return r?o?i?!1:De("weekday",e.weekday):De("week",e.weekNumber):De("weekYear",e.weekYear)}function Jp(e){const t=Io(e.year),n=Re(e.ordinal,1,ln(e.year));return t?n?!1:De("ordinal",e.ordinal):De("year",e.year)}function Xd(e){const t=Io(e.year),n=Re(e.month,1,12),r=Re(e.day,1,vo(e.year,e.month));return t?n?r?!1:De("day",e.day):De("month",e.month):De("year",e.year)}function Kd(e){const{hour:t,minute:n,second:r,millisecond:o}=e,i=Re(t,0,23)||t===24&&n===0&&r===0&&o===0,a=Re(n,0,59),s=Re(r,0,59),l=Re(o,0,999);return i?a?s?l?!1:De("millisecond",o):De("second",r):De("minute",n):De("hour",t)}function I(e){return typeof e>"u"}function jt(e){return typeof e=="number"}function Io(e){return typeof e=="number"&&e%1===0}function Xp(e){return typeof e=="string"}function Kp(e){return Object.prototype.toString.call(e)==="[object Date]"}function Qd(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function e0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Qp(e){return Array.isArray(e)?e:[e]}function Dl(e,t,n){if(e.length!==0)return e.reduce((r,o)=>{const i=[t(o),o];return r&&n(r[0],i[0])===r[0]?r:i},null)[1]}function eg(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function pn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ki(e){if(e==null)return null;if(typeof e!="object")throw new xe("Week settings must be an object");if(!Re(e.firstDay,1,7)||!Re(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Re(t,1,7)))throw new xe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Re(e,t,n){return Io(e)&&e>=t&&e<=n}function tg(e,t){return e-t*Math.floor(e/t)}function se(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function wt(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function Nt(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function Ha(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Fa(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function hr(e){return e%4===0&&(e%100!==0||e%400===0)}function ln(e){return hr(e)?366:365}function vo(e,t){const n=tg(t-1,12)+1,r=e+(t-n)/12;return n===2?hr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Lo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Rl(e,t,n){return-_a(Ra(e,1,t),n)+t-1}function nr(e,t=4,n=1){const r=Rl(e,t,n),o=Rl(e+1,t,n);return(ln(e)-r+o)/7}function Qi(e){return e>99?e:e>Q.twoDigitCutoffYear?1900+e:2e3+e}function t0(e,t,n,r=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(n,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Po(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,o=n<0||Object.is(n,-0)?-r:r;return n*60+o}function n0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new xe(`Invalid unit value ${e}`);return t}function bo(e,t){const n={};for(const r in e)if(pn(e,r)){const o=e[r];if(o==null)continue;n[t(r)]=n0(o)}return n}function jn(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${se(n,2)}:${se(r,2)}`;case"narrow":return`${o}${n}${r>0?`:${r}`:""}`;case"techie":return`${o}${se(n,2)}${se(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function qo(e){return eg(e,["hour","minute","second","millisecond"])}const ng=["January","February","March","April","May","June","July","August","September","October","November","December"],r0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rg=["J","F","M","A","M","J","J","A","S","O","N","D"];function o0(e){switch(e){case"narrow":return[...rg];case"short":return[...r0];case"long":return[...ng];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const i0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],og=["M","T","W","T","F","S","S"];function s0(e){switch(e){case"narrow":return[...og];case"short":return[...a0];case"long":return[...i0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const l0=["AM","PM"],ig=["Before Christ","Anno Domini"],ag=["BC","AD"],sg=["B","A"];function c0(e){switch(e){case"narrow":return[...sg];case"short":return[...ag];case"long":return[...ig];default:return null}}function lg(e){return l0[e.hour<12?0:1]}function cg(e,t){return s0(t)[e.weekday-1]}function ug(e,t){return o0(t)[e.month-1]}function dg(e,t){return c0(t)[e.year<0?0:1]}function hg(e,t,n="always",r=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],h=r?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${h} ago`:`in ${s} ${h}`}function _l(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const fg={D:go,DD:Ad,DDD:Ed,DDDD:Id,t:Ld,tt:Pd,ttt:qd,tttt:Nd,T:Od,TT:Bd,TTT:Dd,TTTT:Rd,f:_d,ff:Fd,fff:jd,ffff:Zd,F:Hd,FF:Vd,FFF:zd,FFFF:Wd};class we{static create(t,n={}){return new we(t,n)}static parseFormat(t){let n=null,r="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),n=null,r="",o=!o):o||s===n?r+=s:(r.length>0&&i.push({literal:/^\s+$/.test(r),val:r}),r=s,n=s)}return r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),i}static macroTokenToFormatOpts(t){return fg[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return se(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,w)=>this.loc.extract(t,g,w),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>r?lg(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>r?ug(t,g):i(w?{month:g}:{month:g,day:"numeric"},"month"),c=(g,w)=>r?cg(t,g):i(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),h=g=>{const w=we.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(t,w):g},f=g=>r?dg(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return h(g)}};return _l(we.parseFormat(n),m)}formatDurationFromString(t,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const h=r(c);return h?this.num(l.get(h),c.length):c},i=we.parseFormat(n),a=i.reduce((l,{literal:c,val:h})=>c?l:l.concat(h),[]),s=t.shiftTo(...a.map(r).filter(l=>l));return _l(i,o(s))}}const u0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function yn(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function kn(...e){return t=>e.reduce(([n,r,o],i)=>{const[a,s,l]=i(t,o);return[{...n,...a},s||r,l]},[{},null,1]).slice(0,2)}function $n(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const o=n.exec(e);if(o)return r(o)}return[null,null]}function d0(...e){return(t,n)=>{const r={};let o;for(o=0;o<e.length;o++)r[e[o]]=wt(t[n+o]);return[r,null,n+o]}}const h0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,mg=`(?:${h0.source}?(?:\\[(${u0.source})\\])?)?`,Va=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,f0=RegExp(`${Va.source}${mg}`),ja=RegExp(`(?:T${f0.source})?`),pg=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,gg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,wg=/(\d{4})-?(\d{3})/,vg=d0("weekYear","weekNumber","weekDay"),bg=d0("year","ordinal"),yg=/(\d{4})-(\d\d)-(\d\d)/,m0=RegExp(`${Va.source} ?(?:${h0.source}|(${u0.source}))?`),kg=RegExp(`(?: ${m0.source})?`);function cn(e,t,n){const r=e[t];return I(r)?n:wt(r)}function $g(e,t){return[{year:cn(e,t),month:cn(e,t+1,1),day:cn(e,t+2,1)},null,t+3]}function xn(e,t){return[{hours:cn(e,t,0),minutes:cn(e,t+1,0),seconds:cn(e,t+2,0),milliseconds:Ha(e[t+3])},null,t+4]}function fr(e,t){const n=!e[t]&&!e[t+1],r=Po(e[t+1],e[t+2]),o=n?null:be.instance(r);return[{},o,t+3]}function mr(e,t){const n=e[t]?dt.create(e[t]):null;return[{},n,t+1]}const xg=RegExp(`^T?${Va.source}$`),Tg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Sg(e){const[t,n,r,o,i,a,s,l,c]=e,h=t[0]==="-",f=l&&l[0]==="-",m=(g,w=!1)=>g!==void 0&&(w||g&&h)?-g:g;return[{years:m(Nt(n)),months:m(Nt(r)),weeks:m(Nt(o)),days:m(Nt(i)),hours:m(Nt(a)),minutes:m(Nt(s)),seconds:m(Nt(l),l==="-0"),milliseconds:m(Ha(c),f)}]}const Cg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function za(e,t,n,r,o,i,a){const s={year:t.length===2?Qi(wt(t)):wt(t),month:r0.indexOf(n)+1,day:wt(r),hour:wt(o),minute:wt(i)};return a&&(s.second=wt(a)),e&&(s.weekday=e.length>3?i0.indexOf(e)+1:a0.indexOf(e)+1),s}const Mg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Ag(e){const[,t,n,r,o,i,a,s,l,c,h,f]=e,m=za(t,o,r,n,i,a,s);let g;return l?g=Cg[l]:c?g=0:g=Po(h,f),[m,new be(g)]}function Eg(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Ig=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Lg=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Pg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Hl(e){const[,t,n,r,o,i,a,s]=e;return[za(t,o,r,n,i,a,s),be.utcInstance]}function qg(e){const[,t,n,r,o,i,a,s]=e;return[za(t,s,n,r,o,i,a),be.utcInstance]}const Ng=yn(pg,ja),Og=yn(gg,ja),Bg=yn(wg,ja),Dg=yn(f0),p0=kn($g,xn,fr,mr),Rg=kn(vg,xn,fr,mr),_g=kn(bg,xn,fr,mr),Hg=kn(xn,fr,mr);function Fg(e){return $n(e,[Ng,p0],[Og,Rg],[Bg,_g],[Dg,Hg])}function Vg(e){return $n(Eg(e),[Mg,Ag])}function jg(e){return $n(e,[Ig,Hl],[Lg,Hl],[Pg,qg])}function zg(e){return $n(e,[Tg,Sg])}const Zg=kn(xn);function Wg(e){return $n(e,[xg,Zg])}const Ug=yn(yg,kg),Gg=yn(m0),Yg=kn(xn,fr,mr);function Jg(e){return $n(e,[Ug,p0],[Gg,Yg])}const Fl="Invalid Duration",g0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Xg={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...g0},qe=146097/400,Qt=146097/4800,Kg={years:{quarters:4,months:12,weeks:qe/7,days:qe,hours:qe*24,minutes:qe*24*60,seconds:qe*24*60*60,milliseconds:qe*24*60*60*1e3},quarters:{months:3,weeks:qe/28,days:qe/4,hours:qe*24/4,minutes:qe*24*60/4,seconds:qe*24*60*60/4,milliseconds:qe*24*60*60*1e3/4},months:{weeks:Qt/7,days:Qt,hours:Qt*24,minutes:Qt*24*60,seconds:Qt*24*60*60,milliseconds:Qt*24*60*60*1e3},...g0},Ht=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Qg=Ht.slice(0).reverse();function gt(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new B(r)}function w0(e,t){let n=t.milliseconds??0;for(const r of Qg.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Vl(e,t){const n=w0(e,t)<0?-1:1;Ht.reduceRight((r,o)=>{if(I(t[o]))return r;if(r){const i=t[r]*n,a=e[o][r],s=Math.floor(i/a);t[o]+=s*n,t[r]-=s*a*n}return o},null),Ht.reduce((r,o)=>{if(I(t[o]))return r;if(r){const i=t[r]%1;t[r]-=i,t[o]+=i*e[r][o]}return o},null)}function ew(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class B{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Kg:Xg;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||W.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return B.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new xe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new B({values:bo(t,B.normalizeUnit),loc:W.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(jt(t))return B.fromMillis(t);if(B.isDuration(t))return t;if(typeof t=="object")return B.fromObject(t);throw new xe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=zg(t);return r?B.fromObject(r,n):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Wg(t);return r?B.fromObject(r,n):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new xe("need to specify a reason the Duration is invalid");const r=t instanceof Je?t:new Je(t,n);if(Q.throwOnInvalid)throw new Mp(r);return new B({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Md(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?we.create(this.loc,r).formatDurationFromString(this,t):Fl}toHuman(t={}){if(!this.isValid)return Fl;const n=Ht.map(r=>{const o=this.values[r];return I(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(o)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Fa(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},A.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?w0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=B.fromDurationLike(t),r={};for(const o of Ht)(pn(n.values,o)||pn(this.values,o))&&(r[o]=n.get(o)+this.get(o));return gt(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=B.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=n0(t(this.values[r],r));return gt(this,{values:n},!0)}get(t){return this[B.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...bo(t,B.normalizeUnit)};return gt(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:o,conversionAccuracy:r};return gt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Vl(this.matrix,t),gt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=ew(this.normalize().shiftToAll().toObject());return gt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>B.normalizeUnit(a));const n={},r={},o=this.toObject();let i;for(const a of Ht)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in r)s+=this.matrix[c][a]*r[c],r[c]=0;jt(o[a])&&(s+=o[a]);const l=Math.trunc(s);n[a]=l,r[a]=(s*1e3-l*1e3)/1e3}else jt(o[a])&&(r[a]=o[a]);for(const a in r)r[a]!==0&&(n[i]+=a===i?r[a]:r[a]/this.matrix[i][a]);return Vl(this.matrix,n),gt(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return gt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,o){return r===void 0||r===0?o===void 0||o===0:r===o}for(const r of Ht)if(!n(this.values[r],t.values[r]))return!1;return!0}}const en="Invalid Interval";function tw(e,t){return!e||!e.isValid?te.invalid("missing or invalid start"):!t||!t.isValid?te.invalid("missing or invalid end"):t<e?te.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class te{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new xe("need to specify a reason the Interval is invalid");const r=t instanceof Je?t:new Je(t,n);if(Q.throwOnInvalid)throw new Cp(r);return new te({invalid:r})}static fromDateTimes(t,n){const r=En(t),o=En(n),i=tw(r,o);return i??new te({start:r,end:o})}static after(t,n){const r=B.fromDurationLike(n),o=En(t);return te.fromDateTimes(o,o.plus(r))}static before(t,n){const r=B.fromDurationLike(n),o=En(t);return te.fromDateTimes(o.minus(r),o)}static fromISO(t,n){const[r,o]=(t||"").split("/",2);if(r&&o){let i,a;try{i=A.fromISO(r,n),a=i.isValid}catch{a=!1}let s,l;try{s=A.fromISO(o,n),l=s.isValid}catch{l=!1}if(a&&l)return te.fromDateTimes(i,s);if(a){const c=B.fromISO(o,n);if(c.isValid)return te.after(i,c)}else if(l){const c=B.fromISO(r,n);if(c.isValid)return te.before(s,c)}}return te.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let o;return n!=null&&n.useLocaleWeeks?o=this.end.reconfigure({locale:r.locale}):o=this.end,o=o.startOf(t,n),Math.floor(o.diff(r,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?te.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(En).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),r=[];let{s:o}=this,i=0;for(;o<this.e;){const a=n[i]||this.e,s=+a>+this.e?this.e:a;r.push(te.fromDateTimes(o,s)),o=s,i+=1}return r}splitBy(t){const n=B.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,o=1,i;const a=[];for(;r<this.e;){const s=this.start.plus(n.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(te.fromDateTimes(r,i)),r=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:te.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return te.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&o.push(te.fromDateTimes(n,l.time)),n=null);return te.merge(o)}difference(...t){return te.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:en}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=go,n={}){return this.isValid?we.create(this.s.loc.clone(n),t).formatInterval(this):en}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:en}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:en}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:en}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:en}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):B.invalid(this.invalidReason)}mapEndpoints(t){return te.fromDateTimes(t(this.s),t(this.e))}}class On{static hasDST(t=Q.defaultZone){const n=A.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return dt.isValidZone(t)}static normalizeZone(t){return bt(t,Q.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||W.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||W.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||W.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||W.create(n,r,i)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||W.create(n,r,i)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||W.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||W.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return W.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return W.create(n,null,"gregory").eras(t)}static features(){return{relative:Qd(),localeWeek:e0()}}}function jl(e,t){const n=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(B.fromMillis(r).as("days"))}function nw(e,t,n){const r=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const h=jl(l,c);return(h-h%7)/7}],["days",jl]],o={},i=e;let a,s;for(const[l,c]of r)n.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function rw(e,t,n,r){let[o,i,a,s]=nw(e,t,n);const l=t-o,c=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const h=B.fromObject(i,r);return c.length>0?B.fromMillis(l,r).shiftTo(...c).plus(h):h}const Za={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},zl={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},ow=Za.hanidec.replace(/[\[|\]]/g,"").split("");function iw(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Za.hanidec)!==-1)t+=ow.indexOf(e[n]);else for(const o in zl){const[i,a]=zl[o];r>=i&&r<=a&&(t+=r-i)}}return parseInt(t,10)}else return t}function ze({numberingSystem:e},t=""){return new RegExp(`${Za[e||"latn"]}${t}`)}const aw="missing Intl.DateTimeFormat.formatToParts support";function R(e,t=n=>n){return{regex:e,deser:([n])=>t(iw(n))}}const sw=String.fromCharCode(160),v0=`[ ${sw}]`,b0=new RegExp(v0,"g");function lw(e){return e.replace(/\./g,"\\.?").replace(b0,v0)}function Zl(e){return e.replace(/\./g,"").replace(b0," ").toLowerCase()}function Ze(e,t){return e===null?null:{regex:RegExp(e.map(lw).join("|")),deser:([n])=>e.findIndex(r=>Zl(n)===Zl(r))+t}}function Wl(e,t){return{regex:e,deser:([,n,r])=>Po(n,r),groups:t}}function Ar(e){return{regex:e,deser:([t])=>t}}function cw(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function uw(e,t){const n=ze(t),r=ze(t,"{2}"),o=ze(t,"{3}"),i=ze(t,"{4}"),a=ze(t,"{6}"),s=ze(t,"{1,2}"),l=ze(t,"{1,3}"),c=ze(t,"{1,6}"),h=ze(t,"{1,9}"),f=ze(t,"{2,4}"),m=ze(t,"{4,6}"),g=k=>({regex:RegExp(cw(k.val)),deser:([x])=>x,literal:!0}),$=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return Ze(t.eras("short"),0);case"GG":return Ze(t.eras("long"),0);case"y":return R(c);case"yy":return R(f,Qi);case"yyyy":return R(i);case"yyyyy":return R(m);case"yyyyyy":return R(a);case"M":return R(s);case"MM":return R(r);case"MMM":return Ze(t.months("short",!0),1);case"MMMM":return Ze(t.months("long",!0),1);case"L":return R(s);case"LL":return R(r);case"LLL":return Ze(t.months("short",!1),1);case"LLLL":return Ze(t.months("long",!1),1);case"d":return R(s);case"dd":return R(r);case"o":return R(l);case"ooo":return R(o);case"HH":return R(r);case"H":return R(s);case"hh":return R(r);case"h":return R(s);case"mm":return R(r);case"m":return R(s);case"q":return R(s);case"qq":return R(r);case"s":return R(s);case"ss":return R(r);case"S":return R(l);case"SSS":return R(o);case"u":return Ar(h);case"uu":return Ar(s);case"uuu":return R(n);case"a":return Ze(t.meridiems(),0);case"kkkk":return R(i);case"kk":return R(f,Qi);case"W":return R(s);case"WW":return R(r);case"E":case"c":return R(n);case"EEE":return Ze(t.weekdays("short",!1),1);case"EEEE":return Ze(t.weekdays("long",!1),1);case"ccc":return Ze(t.weekdays("short",!0),1);case"cccc":return Ze(t.weekdays("long",!0),1);case"Z":case"ZZ":return Wl(new RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case"ZZZ":return Wl(new RegExp(`([+-]${s.source})(${r.source})?`),2);case"z":return Ar(/[a-z_+-/]{1,256}?/i);case" ":return Ar(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:aw};return $.token=e,$}const dw={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function hw(e,t,n){const{type:r,value:o}=e;if(r==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[r];let a=r;r==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=n.hour12?"hour12":"hour24");let s=dw[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function fw(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function mw(e,t,n){const r=e.match(t);if(r){const o={};let i=1;for(const a in n)if(pn(n,a)){const s=n[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(r.slice(i,i+l))),i+=l}return[r,o]}else return[r,{}]}function pw(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return I(e.z)||(n=dt.create(e.z)),I(e.Z)||(n||(n=new be(e.Z)),r=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=Ha(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),n,r]}let si=null;function gw(){return si||(si=A.fromMillis(1555555555555)),si}function ww(e,t){if(e.literal)return e;const n=we.macroTokenToFormatOpts(e.val),r=$0(n,t);return r==null||r.includes(void 0)?e:r}function y0(e,t){return Array.prototype.concat(...e.map(n=>ww(n,t)))}function k0(e,t,n){const r=y0(we.parseFormat(n),e),o=r.map(a=>uw(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:r,invalidReason:i.invalidReason};{const[a,s]=fw(o),l=RegExp(a,"i"),[c,h]=mw(t,l,s),[f,m,g]=h?pw(h):[null,null,void 0];if(pn(h,"a")&&pn(h,"H"))throw new on("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:l,rawMatches:c,matches:h,result:f,zone:m,specificOffset:g}}}function vw(e,t,n){const{result:r,zone:o,specificOffset:i,invalidReason:a}=k0(e,t,n);return[r,o,i,a]}function $0(e,t){if(!e)return null;const r=we.create(t,e).dtFormatter(gw()),o=r.formatToParts(),i=r.resolvedOptions();return o.map(a=>hw(a,e,i))}const li="Invalid DateTime",Ul=864e13;function Er(e){return new Je("unsupported zone",`the zone "${e.name}" is not supported`)}function ci(e){return e.weekData===null&&(e.weekData=wo(e.c)),e.weekData}function ui(e){return e.localWeekData===null&&(e.localWeekData=wo(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ot(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new A({...n,...t,old:n})}function x0(e,t,n){let r=e-t*60*1e3;const o=n.offset(r);if(t===o)return[r,t];r-=(o-t)*60*1e3;const i=n.offset(r);return o===i?[r,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Ir(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Ur(e,t,n){return x0(Lo(e),t,n)}function Gl(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:r,month:o,day:Math.min(e.c.day,vo(r,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=B.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Lo(i);let[l,c]=x0(s,n,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function An(e,t,n,r,o,i){const{setZone:a,zone:s}=n;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=A.fromObject(e,{...n,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return A.invalid(new Je("unparsable",`the input "${o}" can't be parsed as ${r}`))}function Lr(e,t,n=!0){return e.isValid?we.create(W.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function di(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=se(e.c.year,n?6:4),t?(r+="-",r+=se(e.c.month),r+="-",r+=se(e.c.day)):(r+=se(e.c.month),r+=se(e.c.day)),r}function Yl(e,t,n,r,o,i){let a=se(e.c.hour);return t?(a+=":",a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=":")):a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=se(e.c.second),(e.c.millisecond!==0||!r)&&(a+=".",a+=se(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=se(Math.trunc(-e.o/60)),a+=":",a+=se(Math.trunc(-e.o%60))):(a+="+",a+=se(Math.trunc(e.o/60)),a+=":",a+=se(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const T0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},bw={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},yw={ordinal:1,hour:0,minute:0,second:0,millisecond:0},S0=["year","month","day","hour","minute","second","millisecond"],kw=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],$w=["year","ordinal","hour","minute","second","millisecond"];function xw(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Md(e);return t}function Jl(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return xw(e)}}function Xl(e,t){const n=bt(t.zone,Q.defaultZone),r=W.fromObject(t),o=Q.now();let i,a;if(I(e.year))i=o;else{for(const c of S0)I(e[c])&&(e[c]=T0[c]);const s=Xd(e)||Kd(e);if(s)return A.invalid(s);const l=n.offset(o);[i,a]=Ur(e,l,n)}return new A({ts:i,zone:n,loc:r,o:a})}function Kl(e,t,n){const r=I(n.round)?!0:n.round,o=(a,s)=>(a=Fa(a,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(a,s)),i=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(i(n.unit),n.unit);for(const a of n.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Ql(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}class A{constructor(t){const n=t.zone||Q.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Je("invalid input"):null)||(n.isValid?null:Er(n));this.ts=I(t.ts)?Q.now():t.ts;let o=null,i=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[o,i]=[t.old.c,t.old.o];else{const s=n.offset(this.ts);o=Ir(this.ts,s),r=Number.isNaN(o.year)?new Je("invalid input"):null,o=r?null:o,i=r?null:s}this._zone=n,this.loc=t.loc||W.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new A({})}static local(){const[t,n]=Ql(arguments),[r,o,i,a,s,l,c]=n;return Xl({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,n]=Ql(arguments),[r,o,i,a,s,l,c]=n;return t.zone=be.utcInstance,Xl({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,n={}){const r=Kp(t)?t.valueOf():NaN;if(Number.isNaN(r))return A.invalid("invalid input");const o=bt(n.zone,Q.defaultZone);return o.isValid?new A({ts:r,zone:o,loc:W.fromObject(n)}):A.invalid(Er(o))}static fromMillis(t,n={}){if(jt(t))return t<-Ul||t>Ul?A.invalid("Timestamp out of range"):new A({ts:t,zone:bt(n.zone,Q.defaultZone),loc:W.fromObject(n)});throw new xe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(jt(t))return new A({ts:t*1e3,zone:bt(n.zone,Q.defaultZone),loc:W.fromObject(n)});throw new xe("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=bt(n.zone,Q.defaultZone);if(!r.isValid)return A.invalid(Er(r));const o=W.fromObject(n),i=bo(t,Jl),{minDaysInFirstWeek:a,startOfWeek:s}=Bl(i,o),l=Q.now(),c=I(n.specificOffset)?r.offset(l):n.specificOffset,h=!I(i.ordinal),f=!I(i.year),m=!I(i.month)||!I(i.day),g=f||m,w=i.weekYear||i.weekNumber;if((g||h)&&w)throw new on("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&h)throw new on("Can't mix ordinal dates with month/day");const $=w||i.weekday&&!g;let k,x,C=Ir(l,c);$?(k=kw,x=bw,C=wo(C,a,s)):h?(k=$w,x=yw,C=ai(C)):(k=S0,x=T0);let D=!1;for(const je of k){const $e=i[je];I($e)?D?i[je]=x[je]:i[je]=C[je]:D=!0}const Z=$?Yp(i,a,s):h?Jp(i):Xd(i),oe=Z||Kd(i);if(oe)return A.invalid(oe);const fe=$?Nl(i,a,s):h?Ol(i):i,[ce,z]=Ur(fe,c,r),ie=new A({ts:ce,zone:r,o:z,loc:o});return i.weekday&&g&&t.weekday!==ie.weekday?A.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${ie.toISO()}`):ie}static fromISO(t,n={}){const[r,o]=Fg(t);return An(r,o,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,o]=Vg(t);return An(r,o,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,o]=jg(t);return An(r,o,n,"HTTP",n)}static fromFormat(t,n,r={}){if(I(t)||I(n))throw new xe("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=r,a=W.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,h]=vw(a,t,n);return h?A.invalid(h):An(s,l,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return A.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,o]=Jg(t);return An(r,o,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new xe("need to specify a reason the DateTime is invalid");const r=t instanceof Je?t:new Je(t,n);if(Q.throwOnInvalid)throw new Sp(r);return new A({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=$0(t,W.fromObject(n));return r?r.map(o=>o?o.val:null).join(""):null}static expandFormat(t,n={}){return y0(we.parseFormat(t),W.fromObject(n)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ci(this).weekYear:NaN}get weekNumber(){return this.isValid?ci(this).weekNumber:NaN}get weekday(){return this.isValid?ci(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ui(this).weekday:NaN}get localWeekNumber(){return this.isValid?ui(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ui(this).weekYear:NaN}get ordinal(){return this.isValid?ai(this.c).ordinal:NaN}get monthShort(){return this.isValid?On.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?On.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?On.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?On.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=Lo(this.c),o=this.zone.offset(r-t),i=this.zone.offset(r+t),a=this.zone.offset(r-o*n),s=this.zone.offset(r-i*n);if(a===s)return[this];const l=r-a*n,c=r-s*n,h=Ir(l,a),f=Ir(c,s);return h.hour===f.hour&&h.minute===f.minute&&h.second===f.second&&h.millisecond===f.millisecond?[Ot(this,{ts:l}),Ot(this,{ts:c})]:[this]}get isInLeapYear(){return hr(this.year)}get daysInMonth(){return vo(this.year,this.month)}get daysInYear(){return this.isValid?ln(this.year):NaN}get weeksInWeekYear(){return this.isValid?nr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?nr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:o}=we.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:o}}toUTC(t=0,n={}){return this.setZone(be.instance(t),n)}toLocal(){return this.setZone(Q.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=bt(t,Q.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(n||r){const i=t.offset(this.ts),a=this.toObject();[o]=Ur(a,i,t)}return Ot(this,{ts:o,zone:t})}else return A.invalid(Er(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const o=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return Ot(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=bo(t,Jl),{minDaysInFirstWeek:r,startOfWeek:o}=Bl(n,this.loc),i=!I(n.weekYear)||!I(n.weekNumber)||!I(n.weekday),a=!I(n.ordinal),s=!I(n.year),l=!I(n.month)||!I(n.day),c=s||l,h=n.weekYear||n.weekNumber;if((c||a)&&h)throw new on("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new on("Can't mix ordinal dates with month/day");let f;i?f=Nl({...wo(this.c,r,o),...n},r,o):I(n.ordinal)?(f={...this.toObject(),...n},I(n.day)&&(f.day=Math.min(vo(f.year,f.month),f.day))):f=Ol({...ai(this.c),...n});const[m,g]=Ur(f,this.o,this.zone);return Ot(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const n=B.fromDurationLike(t);return Ot(this,Gl(this,n))}minus(t){if(!this.isValid)return this;const n=B.fromDurationLike(t).negate();return Ot(this,Gl(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},o=B.normalizeUnit(t);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(o==="weeks")if(n){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(r.weekNumber=this.weekNumber-1),r.weekday=i}else r.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);r.month=(i-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?we.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):li}toLocaleString(t=go,n={}){return this.isValid?we.create(this.loc.clone(n),t).formatDateTime(this):li}toLocaleParts(t={}){return this.isValid?we.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=di(this,a);return s+="T",s+=Yl(this,a,n,r,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?di(this,t==="extended"):null}toISOWeekDate(){return Lr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+Yl(this,a==="extended",n,t,r,i):null}toRFC2822(){return Lr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Lr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?di(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let o="HH:mm:ss.SSS";return(n||t)&&(r&&(o+=" "),n?o+="z":t&&(o+="ZZ")),Lr(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():li}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return B.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...r},i=Qp(n).map(B.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=rw(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",n={}){return this.diff(A.now(),t,n)}until(t){return this.isValid?te.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(n,r)<=o&&o<=i.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||A.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Kl(n,this.plus(r),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Kl(t.base||A.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(A.isDateTime))throw new xe("min requires all arguments be DateTimes");return Dl(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(A.isDateTime))throw new xe("max requires all arguments be DateTimes");return Dl(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:o=null,numberingSystem:i=null}=r,a=W.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return k0(a,t,n)}static fromStringExplain(t,n,r={}){return A.fromFormatExplain(t,n,r)}static get DATE_SHORT(){return go}static get DATE_MED(){return Ad}static get DATE_MED_WITH_WEEKDAY(){return Ap}static get DATE_FULL(){return Ed}static get DATE_HUGE(){return Id}static get TIME_SIMPLE(){return Ld}static get TIME_WITH_SECONDS(){return Pd}static get TIME_WITH_SHORT_OFFSET(){return qd}static get TIME_WITH_LONG_OFFSET(){return Nd}static get TIME_24_SIMPLE(){return Od}static get TIME_24_WITH_SECONDS(){return Bd}static get TIME_24_WITH_SHORT_OFFSET(){return Dd}static get TIME_24_WITH_LONG_OFFSET(){return Rd}static get DATETIME_SHORT(){return _d}static get DATETIME_SHORT_WITH_SECONDS(){return Hd}static get DATETIME_MED(){return Fd}static get DATETIME_MED_WITH_SECONDS(){return Vd}static get DATETIME_MED_WITH_WEEKDAY(){return Ep}static get DATETIME_FULL(){return jd}static get DATETIME_FULL_WITH_SECONDS(){return zd}static get DATETIME_HUGE(){return Zd}static get DATETIME_HUGE_WITH_SECONDS(){return Wd}}function En(e){if(A.isDateTime(e))return e;if(e&&e.valueOf&&jt(e.valueOf()))return A.fromJSDate(e);if(e&&typeof e=="object")return A.fromObject(e);throw new xe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function gn(e){const t=A.fromObject(Zn(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function C0(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function hi(e,t){return C0(gn(e).plus(t))}const Tw=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Sw=Tw.reduce((e,t)=>(e[t]=t,e),{}),Cw=Q.defaultZone.name,Wa=Sw.UTC;var ec;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(ec||(ec={}));const Mw=["hour","minute","second","millisecond"],Aw=sr({hour:14,minute:19,second:7,millisecond:877,timezone:Wa}),Ew=sr({year:2023,month:6,day:5,timezone:Wa}),Iw=sr(hf(Ew,Aw));var E;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(E||(E={}));const Lw={[E.Milliseconds]:"millisecond",[E.Seconds]:"second",[E.Minutes]:"minute",[E.Hours]:"hour",[E.Days]:"day",[E.Weeks]:"week",[E.Months]:"month",[E.Quarters]:"quarter",[E.Years]:"year"},tc=[E.Milliseconds,E.Seconds,E.Minutes,E.Hours,E.Days,E.Weeks,E.Months,E.Quarters,E.Years];function nc(e,t){return ve(e,(n,r)=>t==null||!de(r,"number")?r:xi({number:r,digits:t}))}const rc={longterm:1,casual:0},M0={[E.Years]:"longterm",[E.Quarters]:"longterm",[E.Months]:"longterm",[E.Weeks]:"casual",[E.Days]:"casual",[E.Hours]:"casual",[E.Minutes]:"casual",[E.Seconds]:"casual",[E.Milliseconds]:"casual"};function Pw(e){return e.map(r=>M0[r]).reduce((r,o)=>rc[o]>rc[r]?o:r)}var un;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(un||(un={}));function qw({start:e,end:t,units:n,unit:r,diffType:o,decimalCount:i}){const a=gn(e),s=gn(t),l=n??[r],c=l.length===1?un.EquivalentUnits:o;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===un.AdditiveUnits){const h=Pw(l),f=s.diff(a,l,{conversionAccuracy:h}).toObject();return nc(f,i)}else if(c===un.EquivalentUnits){const h=l.map(m=>{const w=s.diff(a,m,{conversionAccuracy:M0[m]}).toObject()[m];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,w]}),f=oh(h);return nc(f,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function Nw(e){if(!On.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Ow(e){ou(e,Iw),Nw(e.timezone),gn(e)}function Bw(e){try{return Ow(e),!0}catch{return!1}}function Dw(e,t){const n=Rw(e,t);if(!n||!n.isValid)throw new Error(`Failed to parse date input '${e}'`);return C0(n,t)}function oc(e){const t=A.fromJSDate(new Date(e));if(t.isValid)return t}function Rw(e,t){if(Bw(e)&&(e=gn(e).toMillis()),A.isDateTime(e))return e.setZone(t);if(de(e,"number"))return A.fromMillis(e,{zone:Wa}).setZone(t);if(de(e,"string")){const n=A.fromISO(e,{zone:t});return n.isValid?n:oc(e)}else if(e instanceof Date)return A.fromJSDate(e).setZone(t);return oc(e)}function _w(e){return Dw(Date.now(),e)}function A0(){return _w(Cw)}const Hw={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};sh(Hw,Mw);const Fw=Q.defaultLocale;function Vw(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function ic(e,t){const n=gn(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??Fw});return Vw(n)}function jw(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function zw(e,t){const n=Se(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),n].filter(ke).join(":")}function Zw(e,t){return{date:jw(e),time:zw(e,t.includeSeconds),timezone:e.timezone}}function Ww(e,t){const n=Zw(e,t);return[n.date,n.time,t.includeTimezone&&`(${n.timezone})`].filter(ke).join(" ")}const Uw={[E.Milliseconds]:1e3,[E.Seconds]:60,[E.Minutes]:60,[E.Hours]:24,[E.Days]:30,[E.Weeks]:4,[E.Months]:12,[E.Quarters]:4,[E.Years]:1/0};function Gw({fullDate:e,relativeTo:t,options:n={}}){const r=n.decimalDigitCount||0,o=qw({start:e,end:t,units:tc,diffType:un.EquivalentUnits}),i=ve(o,(g,w)=>{const $=Math.floor(Math.abs(xi({digits:1,number:w}))),k=$>0,x=n.limitUnitMax?$<Uw[g]:!0;return k&&x}),a=tc.reduce((g,w)=>{var k;return!((k=n.blockedRelativeUnits)!=null&&k.includes(w))&&i[w]?w:g},void 0);if(n.blockJustNow?!1:ut(e,t)||a===E.Minutes&&o.minutes<2||a===E.Seconds&&o.seconds<11||a===E.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],c=Math.abs(xi({digits:r,number:l})),h=c===1,f=[Lw[a],h?"":"s"].join(""),m=h?"a":c;return l<0?`in ${m} ${f}`:`${m} ${f} ago`}function Yw(e){return{date:ic(e,{dateStyle:"medium"}).replace(/\s/g," "),time:ic(e,{timeStyle:"short"}).replace(/\s/g," ")}}const Jw={blockedRelativeUnits:[E.Years,E.Quarters],limitUnitMax:!0};function Xw(e){var i,a,s;const t=Yw(e.fullDate),n=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(ke).join(" "),r=Ww(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?Gw({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||A0(),options:{...Jw,...e.relativeOptions}}):void 0;return{everythingString:r,displayString:o||n}}const fi=re()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:n}=Xw(e);return u`
            <span title=${n}>${t}</span>
        `}}),Kw="data-test-id",rn=It(class extends ht{constructor(t){super(t);gr(this,"element");this.element=Qw(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(Kw,t),Pe}});function Qw(e,t,n){e5(e,t);const r=e.element;if(!(r instanceof n))throw new Error(`${t} attached to non ${n.name} element.`);return r}function e5(e,t){if(e.type!==ir.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var ea=(e=>(e.Up="up",e.Down="down",e))(ea||{});const Pr=re()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:K(),openChange:K()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${Y.boldParagraphFont};
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

        ${Lt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${Fe};
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
            ${mo.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${mo.popupShadowReversed};
        }

        .selected-label-prefix {
            ${Y.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Fe};
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
            ${Wt};
        }
    `,initCallback:({state:e,host:t,updateState:n})=>{function r(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&n({dropdownOpen:!1})}window.addEventListener("click",r)},renderCallback({dispatch:e,events:t,state:n,inputs:r,updateState:o}){r._forceOpenState!=null&&o({dropdownOpen:r._forceOpenState}),r.disabled&&o({dropdownOpen:!1});const i=r.value?r.options.find(l=>{var c;return l.value===((c=r.value)==null?void 0:c.value)})??r.options[0]:r.options[0],a=r.icon?u`
                  <${T.assign({icon:r.icon})}
                      ${rn("rendered-input-icon")}
                  ></${T}>
              `:"",s=r.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${r.selectedLabelPrefix}</span>
              `:"";return u`
            <button
                ?disabled=${!!r.disabled}
                class=${ye({dropdown:!0,open:n.dropdownOpen,"reverse-direction":r.direction==="up"})}
                @click=${()=>{const l=!n.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${n.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${T.assign({icon:rd})}
                            class="trigger-icon"
                        ></${T}>
                    </span>
                </div>
                <div class="select-options">
                    ${r.options.map(l=>u`
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
        `}});var ct=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(ct||{});const Ue=re()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){function t(r){if(e.linkType==="disabled"){r.preventDefault();return}e.linkType==="route-link"&&To(r)&&(r.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const n=e.linkType==="new-tab";return u`
            <a
                href=${e.url.toString()}
                ${S("click",t)}
                target=${ws(n?"_blank":void 0)}
                rel=${ws(n?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),ta=360,E0=8;function I0(e){return(e-E0)/2}const tt=ft({"main-image-size":ta,"secondary-image-size":I0(ta)}),it=re()({tagName:"toniq-featured-flip-card-footer",styles:p`
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

        ${ue} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${tt["secondary-image-size"].value} * 2);
        }

        ${Ue} ${ue} {
            width: 100%;
        }

        ${Ue} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${tt["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:K(),flipCardButtonClick:K()},renderCallback({inputs:e,dispatch:t,events:n}){const r=e.socialUrls,o=r?he(r).map(i=>{const a=r[i];if(!a)return;const s=Sd[i];return u`
                          <${Ue.assign({linkType:ct.NewTab,url:a})}>
                              <${T.assign({icon:s})}></${T}>
                          </${Ue}>
                      `}).filter(ke):"";return u`
            <div class="buttons">
                <${Ue.assign({url:e.viewMoreButtonUrl,linkType:ct.RouteLink,scrollToTop:!0})}
                    ${S("click",()=>{t(new n.viewMoreButtonClick)})}
                >
                    <${ue.assign({text:e.viewMoreButtonText,variant:po.Outline})}></${ue}>
                </${Ue}>
                ${e.flipCardButtonText?u`
                          <${ue.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${S("click",()=>{t(new n.flipCardButtonClick)})}
                          ></${ue}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Ft=re()({tagName:"toniq-flip-card",events:{flippedChange:K()},styles:p`
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

        ${Wm(".card-face",!1)}

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
    `,renderCallback({inputs:e,dispatch:t,events:n}){return u`
            <div
                class="flip-wrapper ${ye({flipped:e.flipped})}"
                ${S("click",()=>{t(new n.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),J=re()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:K()},styles:p`
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
            ${Y.h3Font};
            ${Y.extraBoldFont};
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
            max-height: ${tt["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${tt["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${E0}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Ft} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${tt["main-image-size"].value};
            height: ${tt["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${tt["secondary-image-size"].value};
            height: ${tt["secondary-image-size"].value};
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

        .card-face.front ${it} {
            margin-top: 24px;
        }

        .card-face.back ${it} {
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
            ${Y.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:n,host:r,dispatch:o,events:i}){var m,g,w,$;const a=e.mainImageSize||ta,s=I0(a);Ai({onElement:r,forCssVar:tt["main-image-size"],toValue:`${a}px`}),Ai({onElement:r,forCssVar:tt["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(ke).join(" "),c=u`
            <h3>${e.cardTitle}</h3>
        `,h=e.imageUrls[0],f=h?u`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,h))||u`
                          <${yt.assign({imageUrl:h})}></${yt}>
                      `}
                  </div>
              `:"";return u`
            <${Ft.assign({flipped:t.flipped})}
                ${S(it.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(k=>{var x;return u`
                                    <div class="secondary-image-wrapper">
                                        ${((x=e.customTemplateCallback)==null?void 0:x.call(e,k))||u`
                                            <${yt.assign({imageUrl:k})}></${yt}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${it.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${S(it.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${it}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(w=e.infoParagraphs)==null?void 0:w.map(k=>u`
                                <p>${k}</p>
                            `)}
                    </div>
                    <${it.assign({viewMoreButtonText:l,flipCardButtonText:($=e.infoParagraphs)!=null&&$.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${S(it.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${it}>
                </div>
            </${Ft}>
        `}});function na({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>na({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function L0({value:e,allowed:t,blocked:n}){const r=t?na({input:e,matcher:t}):!0,o=n?na({input:e,matcher:n}):!1;return r&&!o}function ac(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(L0({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}var ra=(e=>(e.Default="default",e.Outline="outline",e))(ra||{});const qr=re()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:K(),inputBlock:K()},styles:({hostClasses:e})=>p`
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
                border-radius: ${zi};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${b.pagePrimary.backgroundColor};
                border-color: ${b.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${T} {
                color: ${b.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${T} {
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
                border-radius: ${zi};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${Y.paragraphFont};
                gap: 4px;
            }

            ${Lt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${T} {
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
                ${Y.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Wt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Fe};
            }
        `,renderCallback({inputs:e,dispatch:t,events:n}){const{filtered:r}=ac({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
                  <${T.assign({icon:e.icon})}></${T}>
              `:"";return u`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${r}
                    ${S("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=r;let c=a.value??"";if(s)if(s.length===1)L0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new n.inputBlock(s)));else{const{filtered:h,blocked:f}=ac({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=h,t(new n.inputBlock(f))}a.value!==c&&(a.value=c),l!==c&&t(new n.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Ie(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var Gr=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(Gr||{});const mi=re()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>p`
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

        ${e["toniq-loading-whole-page"].selector} ${T} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${T} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>u`
            <${T.assign({icon:Oa,fitContainer:e.size!=="small"})}></${T}>
        `});async function t5(e){return navigator.clipboard.writeText(e)}const n5="…";function r5(e,t){const n=e.slice(0,t).trim(),r=e.slice(-1*t).trim();return`${n}${n5}${r}`}function o5(e){return!(e%1)}function i5(e){return e.letterCount==null?4:o5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const ge=re()({tagName:"toniq-middle-ellipsis",events:{copy:K()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${X.interaction};
            ${Y.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${T} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${T} {
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

        ${Lt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:n,state:r,updateState:o}){if(!e.text)return u``;const i=e.text,a=i5(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,h=c?r5(i,a):i,f=c?i:"",m=s?sd:l?ad:void 0,g=m?u`
                  <${T.assign({icon:m})}></${T}>
              `:"",w=u`
            <span title=${f} class="text-content">
                ${Ie(!!e.copyOnClick,u`
                        <span
                            class=${ye({"copied-text":!0,"show-copied-text":r.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${h}
            </span>
        `;return h?s?u`
                    <button
                        tabindex="0"
                        role="link"
                        ${S("click",$=>{var x,C;const k=(C=(x=$.currentTarget)==null?void 0:x.querySelector)==null?void 0:C.call(x,"a");if(!k)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");k.click()})}
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
                            title=${f}
                        >
                            ${w} ${g}
                        </a>
                    </button>
                `:l?u`
                    <button
                        class="text-wrapper copyable"
                        ${S("click",async()=>{await t5(i),t(new n.copy),r.showCopiedTextTimeoutId!=null&&window.clearTimeout(r.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${w} ${g}
                    </button>
                `:u`
                    ${w}
                `:u``}}),sc="...";function a5(e,t,n=7,r=5){let o;e=Rn({value:e,min:1,max:t}),n=Rn({value:n,min:r,max:t});const i=n-5,a=n-3;t<=n?o=n:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>n?pi(t-o,t):e>o?pi(Math.min(s.start,t-o),Math.min(s.end,t)):pi(1,Math.min(t,o+1));function c(f,m){return l.length+1!==t?m:[f]}const h=l[l.length-1];if(h&&h<t){const f=c(t,[sc,t]);return[...l,...f]}else return l[0]!==1?c(1,[1,sc]).concat(l):l}function pi(e,t){const n=t-e+1;return Array.from({length:n},(r,o)=>e+o)}re()({tagName:"toniq-pagination",styles:p`
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
            ${Fe};
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
            ${Y.labelFont}
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
    `,events:{pageChange:K()},renderCallback({inputs:e,events:t,dispatch:n}){return e.pageCount<=1?u``:u`
                <button
                    ${S("click",()=>{e.currentPage>1&&n(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${T.assign({icon:qa})}></${T}>
                </button>
                ${a5(e.currentPage,e.pageCount,e.pagesShown).map(r=>typeof r=="string"?u`
                                <div class="page" disabled>${r}</div>
                            `:u`
                                <button
                                    class=${ye({page:!0,selected:e.currentPage===r})}
                                    ?disabled=${e.currentPage===r}
                                    ${S("click",()=>{n(new t.pageChange(r))})}
                                >
                                    ${r}
                                </button>
                            `)}
                <button
                    ${S("click",()=>{e.currentPage<e.pageCount&&n(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${T.assign({icon:Na})}></${T}>
                </button>
            `}});const G=re()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:K()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ge("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ge("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ge("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ge("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${Y.boldParagraphFont};
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

        ${Lt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Wt};
        }

        .wrapper.disabled::before {
            ${Wt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Ec()})},renderCallback({inputs:e,dispatch:t,events:n,state:r}){return s5(e.entries).map(i=>l5(e.groupName||r.randomGroupName,e.value,i,()=>{t(new n.valueChange(i.value))}))}});function s5(e){const t=Object.fromEntries(e.map(r=>[r.value,r]));return Object.values(t).length!==e.length&&console.error(`${G.tagName} was given duplicate entry values.`),Object.values(t)}function l5(e,t,n,r){const o=t===n.value,i=u`
        <slot name=${n.value} class="label">
            <span class="label">${n.label||n.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${n.disabled}
            tabindex="0"
            class=${ye({disabled:!!n.disabled,checked:o&&!n.disabled,wrapper:!0})}
            ${S("click",()=>{r()})}
        >
            <input
                ${S("input",()=>{r()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function gi(e,t){const n=e[0],r=e[e.length-1];if(n==null||r==null)return 0;if(t<n)return n;if(t>r)return r;const o=e.findIndex((c,h)=>{const f=e[h+1];return f==null?!0:c<=t&&f>=t});if(o<0)return n;const i=e[o];if(i==null)return n;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function c5(e,t,n=100){e>t&&([e,t]=[t,e]),n<2&&(n=2);let r=u5(e);const o=[e];for(;r<t;){const i=Math.pow(10,String(r).length-1),a=r+i;a<t&&o.push(a),r=a}return o.push(t),o.length>n&&(lc(o,n),o.length>n&&lc(o,n)),o}function lc(e,t){const n=e.length-t,r=(e.length-2)/n;for(let o=e.length-2;o>=1;o-=r)e.splice(Math.floor(o),1)}function u5(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const n=e.toFixed(0),r=Math.pow(10,n.length-1),o=Number(n[0]||1);return r*o*t}const q={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},In={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function d5(e){var r,o;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${q.lowerLabelWrapper} .${q.labelPercentMarginWrapper}`),n=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${q.upperLabelWrapper} .${q.labelPercentMarginWrapper}`);if(n instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=n.getBoundingClientRect();return{lower:i,upper:a}}else return}function h5(e,t=8){const n=d5(e);if(!n)return 0;const r=n.lower.right-n.upper.left+t;return Math.max(0,r)}function wi({value:e,limits:t,flip:n}){const o=(t.max-e)/(t.max-t.min)*100;return-(n?100-o:o)}function rr(e){return Xe(e)&&e.min!==void 0&&e.max!==void 0}function oa(e){var n;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${q.range}`);return(t==null?void 0:t.clientWidth)??0}function vi(e,t,n){return`${n?kh(e):e} ${t}`}function f5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function m5({value:e,double:t,min:n,max:r}){return t?rr(e)?{min:Rn({value:e.min,min:n,max:Math.min(e.max,r)}),max:Rn({value:e.max,min:Math.max(e.min,n),max:r})}:{min:n,max:r}:rr(e)?n:Rn({value:e,min:n,max:r})}function p5({actualValue:e,actualLimits:t,logScale:n,logRange:r}){return n?{elementValue:rr(e)?{min:gi(r,e.min),max:gi(r,e.max)}:gi(r,e),elementLimits:{min:0,max:r.length-1}}:{elementValue:e,elementLimits:t}}function bi(e,t,n){return n?t[e]||0:e}function g5(e){return{actualLimits:f5(e),actualValue:m5(e)}}function w5(e,t){var r,o,i;let n=!1;if(rr(e)){const a=(r=t.shadowRoot)==null?void 0:r.querySelector(`.${q.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${q.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),n=!0),Number(s.value)!==e.max&&(s.value=String(e.max),n=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${q.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),n=!0)}return n}function P0(e,t){const{actualValue:n,actualLimits:r}=g5({...e}),o=c5(r.min,r.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=p5({actualValue:n,actualLimits:r,logScale:i,logRange:o}),c=oa(t);return{actualValue:n,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Bt=16,cc=p`
    ${Bt}px
`,uc=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${cc};
    width: ${cc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${X.interaction};
    ${F(b.accentPrimary)};
`,dc=p`
    transform: scale(1.2);
`;function Bn(e){requestAnimationFrame(()=>{const t=P0(e.instanceInputs,e).elementValue;w5(t,e)&&(e.setAttribute("disabled","true"),Bn(e))})}const _=re()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:K()},styles:p`
        :host {
            display: block;
        }

        .${N(q.range)} {
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

        .${N(q.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${Y.boldParagraphFont};
            ${Fe};
        }

        .${N(q.labelPixelMarginWrapper)},
            .${N(q.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${N(q.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${N(q.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Lt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${N(q.lowerSlider)},
        .${N(q.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${N(q.slider)}::-moz-range-thumb {
            ${uc}
        }

        /* these selectors fail if combined with a comma */
        .${N(q.slider)}::-webkit-slider-thumb {
            ${uc}
        }

        /* these selectors fail if combined with a comma */
        .${N(q.slider)}::-webkit-slider-thumb:hover {
            ${dc}
        }

        /* these selectors fail if combined with a comma */
        .${N(q.slider)}::-moz-range-thumb:hover {
            ${dc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Bn(e)}),e.addEventListener("keydown",()=>{Bn(e)}),e.addEventListener("keyup",()=>{Bn(e)})},renderCallback({inputs:e,host:t,events:n,dispatch:r,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:h,elementLimits:f,rangeWidth:m}=P0({...e},t);if(Bn(t),rr(h))return g(a,h,f);return $(a,h,f);function g(k,x,C){const D={left:Dt((m-Bt)*(x.min-C.min)/(C.max-C.min)+Bt/2),right:Dt((m-Bt)*(C.max-x.max)/(C.max-C.min)+Bt/2)},Z=vi(k.min,c,l),oe=vi(k.max,c,l);requestAnimationFrame(()=>{const $e=h5(t);$e!==o.labelOverlap&&i({labelOverlap:$e})});const fe=(C.max-x.max)/(C.max-C.min)>.5,ce=wi({value:x.min,limits:{min:C.min,max:x.max},flip:!0}),z=wi({value:x.max,limits:{min:x.min,max:C.max},flip:!1}),ie=o.labelOverlap&&fe?o.labelOverlap:0,je=o.labelOverlap&&!fe?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${Jn(()=>{i({rangeWidth:oa(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${D.left}; right:${D.right}"
                    ></div>
                    <span
                        class="${q.labelOuterWrapper} ${q.lowerLabelWrapper}"
                        style="left: ${D.left}"
                    >
                        <span
                            class="${q.labelPercentMarginWrapper}"
                            style="margin-left: ${Bo(ce)}"
                        >
                            <span
                                class="${q.labelPixelMarginWrapper}"
                                style="margin-right: ${Dt(je)}"
                                ${rn(In.lowerLabel)}
                            >
                                ${Z}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${q.labelOuterWrapper} ${q.upperLabelWrapper} ${q.rightAlignedLabelWrapper}"
                        style="right: ${D.right}"
                    >
                        <span
                            class="${q.labelPercentMarginWrapper}"
                            style="margin-right: ${Bo(z)}"
                        >
                            <span
                                class="${q.labelPixelMarginWrapper}"
                                style="margin-left: ${Dt(ie)}"
                                ${rn(In.upperLabel)}
                            >
                                ${oe}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${q.lowerSlider} ${q.slider}"
                            .min=${C.min}
                            .max=${C.max}
                            .value=${x.min}
                            ${S("input",$e=>{const Gt=$e.target,Tn={...k,min:bi(Number(Gt.value),s,l)};w(Tn)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${q.upperSlider} ${q.slider}"
                            step=${e.step}
                            .min=${C.min}
                            .max=${C.max}
                            .value=${x.max}
                            ${rn(In.slider)}
                            ${S("input",$e=>{const Gt=$e.target,Tn={...k,max:bi(Number(Gt.value),s,l)};w(Tn)})}
                        />
                    </div>
                </div>
            `}function w(k){i({internalValue:k}),e.disabled||r(new n.valueChange(k))}function $(k,x,C){const D=Dt((m-Bt)*(C.max-x)/(C.max-C.min)+Bt/2),Z=vi(k,c,l),oe=wi({value:x,limits:C,flip:!1});return u`
                <div
                    class="range"
                    ${Jn(()=>{i({rangeWidth:oa(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${D}"></div>
                    <span
                        class="${q.labelOuterWrapper} ${q.rightAlignedLabelWrapper}"
                        style="right: ${D}"
                    >
                        <span
                            class="${q.labelPercentMarginWrapper}"
                            style="margin-right: ${Bo(oe)}"
                            ${rn(In.label)}
                        >
                            ${Z}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${q.slider}"
                        step=${e.step}
                        .min=${C.min}
                        .max=${C.max}
                        .value=${x}
                        ${rn(In.slider)}
                        ${S("input",fe=>{const ce=fe.target,z=bi(Number(ce.value),s,l);w(z)})}
                    />
                </div>
            `}}});var q0=(e=>(e.Default="default",e.TextOnly="text-only",e))(q0||{});const yi=re()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${Y.boldParagraphFont};
            ${Fe};
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

            ${F(b.accentSecondary)};
            transition:
                color ${X.interaction},
                background-color ${X.interaction};
        }

        ${Lt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${Wt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${T.assign({icon:e.icon})}
                      class="icon-template"
                  ></${T}>
              `:"",n=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                ${t} ${n}
            </button>
        `}}),zn=vp({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${mo.menuShadow};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),Yr=re()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>p`
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:n}){return u`
            <div
                class="slot-wrapper"
                ${S("click",()=>{n({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{n({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${zn}>${e.tooltipContent}</${zn}>
            </div>
        `}}),Dn=re()({tagName:"toniq-top-tabs",events:{routeChange:K(),valueChange:K()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>p`
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
                border-bottom-width ${X.interaction},
                border-color ${X.interaction},
                padding-bottom ${X.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${me};
            ${Yu};
            cursor: pointer;
            display: inline-block;
            ${Y.paragraphFont};
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

        ${Vt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${Y.boldFont};
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
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=e.tabs.map(o=>{var l;const i=o.value===e.value,a=o.icon?u`
                      <${T.assign({icon:o.icon})}></${T}>
                  `:"",s=o.label?u`
                      <${Vt.assign({text:o.label})}></${Vt}>
                  `:"";return u`
                <li
                    ${Mf("tab")}
                    role="presentation"
                    class=${ye({selected:i})}
                >
                    <${Ue.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:ct.RouteLink})}
                        class="tab ${ye({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${S("click",c=>{var h;i||To(c)&&((h=o.link)!=null&&h.route&&t(new n.routeChange(o.link.route)),t(new n.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Ue}>
                </li>
            `});return u`
            <ul role="tablist">
                ${r}
                <li></li>
            </ul>
        `}}),N0=U({title:"Data",parent:void 0}),yo=re()({tagName:"toniq-icon-book-viewer",styles:p`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${b.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${T.assign({icon:e.icon})}></${T}>
        `}}),No=Object.values(vt).reduce((e,t)=>(t.forEach(n=>{if(n.name in e)throw new Error(`Icon name duplicate: '${n.name}'`);e[n.name]=n}),e),{}),v5=Object.keys(No).sort();function Ua(e){return{controlType:O.Dropdown,initValue:e,options:["None",...v5]}}const O0={"CSS color":{controlType:O.Color,initValue:""},[String(d["toniq-icon-stroke-color"].name)]:{controlType:O.Color,initValue:""},[String(d["toniq-icon-fill-color"].name)]:{controlType:O.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:O.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:O.Number,initValue:2}};function Jr(e){return Object.entries(e).filter(([,n])=>n!==""&&n!=null).map(([n,r])=>(n.toLowerCase()==="css color"&&(n="color"),de(r,"number")&&(r=aa({value:r,suffix:"px"})),`${n}: ${r};`)).join(`
`)}const b5=U({title:"Social Urls",parent:N0,elementExamplesCallback({defineExample:e}){function t({socialName:n,icon:r}){e({title:n,renderCallback(){return u`
                        <${yo.assign({icon:r})}></${yo}>
                    `}})}Object.entries(Sd).forEach(([n,r])=>{t({socialName:n,icon:r})})}}),ae=U({title:"Elements",parent:void 0}),y5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:p`
            ${Vt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],k5=U({title:Vt.tagName,parent:ae,elementExamplesCallback({defineExample:e}){y5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:p`
                    .bold {
                        ${Y.boldFont}
                    }

                    ${t.extraStyle??p``}
                `,renderCallback({state:n,updateState:r}){return u`
                        <${Vt.assign({text:t.text})}
                            ${S("click",()=>{r({isBold:!n.isBold})})}
                            class=${ye({bold:n.isBold})}
                        ></${Vt}>
                        More text
                    `}})})}}),$5=U({parent:ae,title:ue.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:po.Secondary}},{name:"Outline",inputs:{variant:po.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
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
                `,renderCallback({state:r,updateState:o}){return r.timeoutId||o({timeoutId:window.setTimeout(()=>{o({showIcon:!r.showIcon,timeoutId:void 0})},1e3)}),u`
                        <${ue.assign({text:"Button",...n.inputs})}></${ue}>
                        <${ue.assign({icon:zr,...n.inputs})}></${ue}>
                        <${ue.assign(r.showIcon?{icon:zr,text:"icon",...n.inputs}:{text:"no icon",...n.inputs})}
                            class="icon-toggle"
                        ></${ue}>
                        <${ue.assign({text:"Button",icon:zr,...n.inputs})}></${ue}>
                        <${ue.assign({...n.inputs})}>
                            <span>HTML Child</span>
                        </${ue}>
                        <${ue.assign({text:"bigger",...n.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ue}>
                    `}})})}}),hc=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Me} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,x5=U({parent:ae,title:Me.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:hc,renderCallback(){return u`
                    <${Me.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:vt["core-24"].map(t=>{const n=p`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${n}></${T}>
                            `})})}></${Me}>
                    <${Me.assign({enableAutomaticCycling:!0,templates:vt["core-24"].map(t=>{const n=p`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${n}></${T}>
                            `})})}></${Me}>
                    <${Me.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:vt["core-24"].map(t=>{const n=ch({min:0,max:150}),r=p`
                                padding: 100px ${n}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${Me}>
                `}}),e({title:"banner style",styles:hc,renderCallback(){const t=p`
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
                    <${Me.assign({enableAutomaticCycling:!0,variant:Zi.Banner,templates:vt["core-24"].map(n=>u`
                                <div style=${t}>
                                    <${T.assign({icon:n})}></${T}>
                                </div>
                            `)})}></${Me}>
                    <${Me.assign({enableAutomaticCycling:!0,variant:Zi.Banner,templates:[vt["core-24"][0]].map(n=>u`
                                <div style=${t}>
                                    <${T.assign({icon:n})}></${T}>
                                </div>
                            `)})}
                        class=${Me.hostClasses["toniq-carousel-banner-variant"]}
                    ></${Me}>
                `}})}});function T5(e){const t=Object.keys(e.cssVars).map(n=>[`--${n}`,{controlType:O.Color,initValue:""}]);return Object.fromEntries(t)}function S5(e){const t=Object.entries(e).map(([n,r])=>{if(n.startsWith("--"))return typeof r!="string"||!r?void 0:`${n}: ${r};`}).filter(ke);return N(t.join(`
`))}const C5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],ki=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],M5=U({parent:ae,title:mt.tagName,controls:{Text:{controlType:O.Text,initValue:"Text"},...T5(mt)},elementExamplesCallback({defineExample:e}){C5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:ki.map(n=>!!n.inputs.checked),extraEntryStatuses:ki.map(n=>(n.extraEntries??[]).map(()=>!1))},styles:p`
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
                `,renderCallback({state:n,updateState:r,controls:o}){return ki.map((i,a)=>{const s=(i.extraEntries??[]).map((c,h)=>{var f;return u`
                                    <${mt.assign({...t.inputs,...Zn(i.inputs,["checked"]),checked:!!((f=n.extraEntryStatuses[a])!=null&&f[h]),text:c})}
                                        ${S(mt.events.checkedChange,()=>{const m=[...n.extraEntryStatuses];m[a][h]=!m[a][h],r({extraEntryStatuses:m})})}
                                    ></${mt}>
                                `}),l=S5(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${mt.assign({...t.inputs,...Zn(i.inputs,["checked"]),checked:n.checkedStatuses[a],text:o.Text})}
                                    ${S(mt.events.checkedChange,()=>{const c=[...n.checkedStatuses];c[a]=!c[a],r({checkedStatuses:c})})}
                                ></${mt}>
                                ${s}
                            </div>
                        `})}})})}}),A5=U({parent:ae,title:ri.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Tt}},{inputs:{icon:Tt}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Tt},template:u`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:Ui.Default}},{title:"secondary style",inputs:{variant:Ui.Secondary}}].forEach(r=>{e({title:r.title,renderCallback(){return t.map(o=>u`
                        <${ri.assign({...r.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${Ie(!!o.template,o.template)}</${ri}>
                    `)}})})}}),E5=U({title:fi.tagName,parent:ae,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=A0();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:hi(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:hi(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:hi(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[E.Days,E.Hours]}}}].forEach(r=>{e({title:r.title,renderCallback(){return u`
                        <${fi.assign({...r.inputs})}></${fi}>
                    `}})})}}),Nr=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],I5=[{title:"default"},{title:"transparent background",customStyle:p`
            ${Ba.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],fc=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],L5=U({title:Pr.tagName,parent:ae,controls:{Selected:{controlType:O.Dropdown,initValue:Nr[0].label,options:Nr.map(e=>e.label)},Direction:{controlType:O.Dropdown,initValue:"Down",options:Sc(ea)},Icon:Ua(td.name),Prefix:{controlType:O.Text,initValue:"Sort by: "},"Force open":{controlType:O.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){I5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:fc.map(n=>{var r;return(r=n.inputs)==null?void 0:r.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return fc.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return u`
                            <${Pr.assign({...t.inputs,...i.inputs,options:Nr,value:n.selected[a]??Nr.find(l=>l.label===o.Selected),icon:No[o.Icon],selectedLabelPrefix:o.Prefix,direction:ea[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${S(Pr.events.selectChange,l=>{const c=[...n.selected];c[a]=l.detail,r({selected:c})})}
                            ></${Pr}>
                        `})}})})}}),mc="/toniq-labs-design-system";function P5(...e){const n=[globalThis.location.pathname.startsWith(mc)?mc:"",...e].filter(ke);return gh(...n)}const tn=Array(30).fill(P5("/toniq-labs-logo.png")),an=["Hello there.","There is stuff here."],Or=an.concat(Array(30).fill(an)),q5=U({title:J.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({infoParagraphs:Or,imageUrls:tn,socialUrls:wp,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${J}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:tn,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${J}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Or,viewMoreUrl:"https://toniqlabs.com"})}
                        ${S(J.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${J}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Or})}></${J}>
                `}}),e({title:"with custom height",styles:p`
                ${J} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Or})}></${J}>
                `}}),e({title:"smaller",styles:p`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:tn,infoParagraphs:an,cardTitle:"Featured Stuff"})}></${J}>
                `}}),e({title:"with social URLs",styles:p`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:tn,infoParagraphs:an,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${J}>
                `}}),e({title:"with custom template",styles:p`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:tn,infoParagraphs:an,cardTitle:"With custom Template",customTemplateCallback(t){return u`
                                <${yt.assign({imageUrl:t})}></${yt}>
                            `}})}></${J}>
                `}}),e({title:"with custom template statuses",styles:p`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:tn.map((t,n)=>n%2?"/invalid-image.png":t),infoParagraphs:an,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return u`
                                <${yt.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${mn.Loading}
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
                                        <${T.assign({icon:Oa,fitContainer:!0})}
                                            style=${p`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${T}>
                                    </div>
                                    <div
                                        slot=${mn.Error}
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
                                        <${T.assign({icon:Xu,fitContainer:!0})}
                                            style=${p`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${T}>
                                    </div>
                                </${yt}>
                            `}})}></${J}>
                `}})}}),N5=U({title:Ft.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:n}){return u`
                    <${Ft.assign({flipped:t.flipped})}
                        ${S(Ft.events.flippedChange,r=>{n({flipped:r.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Ft}>
                `}})}}),O5=U({parent:ae,title:Ue.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:ct.ReplacePage}},{title:"new tab",inputs:{linkType:ct.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:ct.NewTab}},{title:"route link",inputs:{linkType:ct.RouteLink}},{title:"link disabled",inputs:{linkType:ct.Disabled}}].forEach(n=>{e({title:n.title,descriptionParagraphs:n.descriptions,renderCallback(){return u`
                        <${Ue.assign({url:"https://toniqlabs.com",...n.inputs})}>
                            Toniq Labs Link
                        </${Ue}>
                    `}})})}}),B5=U({title:T.tagName,parent:ae,controls:O0,elementExamplesCallback({defineExample:e}){const t=[{icon:fd},{icon:hd},{icon:od},{icon:Tt},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:n}){return t.map(r=>u`
                        <${T.assign({icon:r.icon})}
                            style=${Jr(n)}
                        ></${T}>
                    `)}}),e({title:"brand icons",renderCallback({controls:n}){const r=p`
                    ${d["toniq-icon-fill-color"].name}: orange;
                `;return vt["third-party-brands"].map(o=>u`
                        <${T.assign({icon:o})}
                            style=${Jr(n)}
                        ></${T}>
                        <${T.assign({icon:o})}
                            style=${r}
                        ></${T}>
                    `)}}),e({title:"fit container",styles:p`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${T} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:n}){return u`
                    <${T.assign({icon:Tt,fitContainer:!0})}
                        style=${Jr(n)}
                    ></${T}>
                `}})}}),D5=U({title:qr.tagName,parent:ae,controls:{"External value":{controlType:O.Text,initValue:""},Placeholder:{controlType:O.Text,initValue:"placeholder"},Icon:Ua(cd.name),Suffix:{controlType:O.Text,initValue:"ICP"},"No browser helps":{controlType:O.Checkbox,initValue:!1},"Blocked characters":{controlType:O.Text,initValue:""},"Exclusive characters":{controlType:O.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:ra.Default}},{title:"outline",inputs:{variant:ra.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${qr.assign({...r.inputs,value:o["External value"]||i.value,icon:No[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${S(qr.events.valueChange,l=>{a({value:l.detail})})}
                            ></${qr}>
                        `))}})})}}),R5=U({title:mi.tagName,parent:ae,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:Gr.Small}},{title:"large",inputs:{size:Gr.Large}},{title:"whole page",inputs:{size:Gr.WholePage},styles:p`
                    :host {
                        width: 500px;
                    }
                `}].forEach(n=>{e({title:n.title,styles:n.styles??p``,renderCallback(){return u`
                        <${mi.assign(n.inputs)}></${mi}>
                    `}})})}}),_5=U({title:ge.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${ge.assign({text:"Long string instead of text"})}></${ge}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${ge.assign({text:"Short text"})}></${ge}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${ge.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${ge}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${ge.assign({text:"Long text that you can copy",copyOnClick:!0})}></${ge}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${ge} {
                    ${ge.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${ge.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${ge.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${ge.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${ge.assign({text:"long text with custom colors",copyOnClick:!0})}></${ge}>
                `}})}}),Ln=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Ne={basic:Ln,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Ln.slice(1)],disabled:[{...Ln[0],disabled:!0},...Ln.slice(1)],noLabels:Z0(Ln,e=>({...e,label:void 0}))},H5=U({title:G.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Ne.basic[0].value},renderCallback({state:t,updateState:n}){return u`
                    <${G.assign({entries:Ne.basic,value:t.selectedValue})}
                        ${S(G.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${G}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Ne.basic[0].value},styles:p`
                ${G} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:n}){return u`
                    <${G.assign({entries:Ne.basic,value:t.selectedValue})}
                        ${S(G.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${G}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Ne.longText[0].value},styles:p`
                ${G} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:n}){return u`
                    <${G.assign({entries:Ne.longText,value:t.selectedValue})}
                        ${S(G.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${G}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Ne.noLabels[0].value},renderCallback({state:t,updateState:n}){return u`
                    <${G.assign({entries:Ne.noLabels,value:t.selectedValue})}
                        ${S(G.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${G}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Ne.disabled[1].value},renderCallback({state:t,updateState:n}){return u`
                    <${G.assign({entries:Ne.disabled,value:t.selectedValue})}
                        ${S(G.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${G}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Ne.basic[0].value},styles:p`
                ${G} {
                    ${G.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${G.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${G.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${G.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:n}){return u`
                    <${G.assign({entries:Ne.basic,value:t.selectedValue})}
                        ${S(G.events.valueChange,r=>{n({selectedValue:r.detail})})}
                    ></${G}>
                `}})}}),at=p`
    ${_} {
        width: 300px;
    }
`,$i={min:10,max:50},F5=U({title:_.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,...$i})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({double:!0,value:t.value,min:0,max:100})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,...$i,suffix:"ICP"})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,min:-100,max:100})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${at}

                ${_} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({value:t.value,...$i})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");n({value:r.detail})})}
                    ></${_}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${at}

                ${_} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:n}){return u`
                    <${_.assign({double:!0,value:t.value,min:0,max:100})}
                        ${S(_.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");n({value:r.detail})})}
                    ></${_}>
                `}})}}),V5=[{title:"default",inputs:{}},{title:"text only",inputs:{variant:q0.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],pc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],j5=U({title:yi.tagName,parent:ae,controls:{Text:{controlType:O.Text,initValue:"Toggle Button"},Icon:Ua(ld.name)},elementExamplesCallback({defineExample:e}){V5.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:pc.map(n=>!!n.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:n,updateState:r,controls:o}){return pc.map((i,a)=>u`
                            <${yi.assign({...t.inputs,toggled:n.buttonStates[a],icon:No[o.Icon],text:o.Text,...Zn(i.inputs,["toggled"])})}
                                ${S("click",()=>{const s=[...n.buttonStates];s[a]=!s[a],r({buttonStates:s})})}
                            ></${yi}>
                        `)}})})}}),z5=U({parent:ae,title:Yr.tagName,elementExamplesCallback({defineExample:e}){function t({title:n,tooltipContent:r,forceShow:o}){e({title:n,styles:p`
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
                        <${Yr.assign({tooltipContent:r,forceShow:o})}>
                            <div>Hover me!</div>
                        </${Yr}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:u`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),Z5=U({parent:ae,title:zn.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${Yr.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${zn}>This is a tooltip.</${zn}>
                `}})}}),W5=[z5,Z5],U5=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:p`
            :host {
                width: 500px;
            }

            ${Dn} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:p``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:p``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:ji},{label:"label here",value:2,icon:ji},{label:"",value:3,icon:Tt,disabled:!0},{label:"16px icon",value:4,icon:Tt},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],G5=U({title:Dn.tagName,parent:ae,elementExamplesCallback({defineExample:e}){U5.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:p`
                    ${t.extraStyles??p``}
                `,renderCallback({state:n,updateState:r}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return u`
                        <${Dn.assign({tabs:o,value:n.selectedTab})}
                            ${S(Dn.events.valueChange,i=>{r({selectedTab:i.detail})})}
                        ></${Dn}>
                    `}})})}}),B0=U({title:"Icons",parent:void 0,controls:O0}),Y5=Object.entries(vt).map(([e,t])=>U({title:e,parent:B0,elementExamplesCallback({defineExample:n}){t.map(r=>n({title:r.name,renderCallback({controls:o}){return u`
                                <${yo.assign({icon:r})}
                                    style=${Jr(o)}
                                ></${yo}>
                            `}}))}}));function D0(e){const t=J5(e),n=ve(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return he(n).reduce((o,i)=>{const a=n[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function J5(e){typeof e!="string"&&(e=String(e));const r=`{"${vc(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(r);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${r}`),o}}const Ga=U({title:"Styles",parent:void 0}),X5=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${Y.labelFont};
        ${Y.monospaceFont};
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
        ${Y.h2Font};
    }
`;function K5(e,t,n){const r=D0(F(n));return e({title:t,styles:X5,renderCallback(){return u`
                <div class="color-example" style=${F(n)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(r).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const Q5=U({title:"Colors",parent:Ga,elementExamplesCallback({defineExample:e}){he(b).map(t=>K5(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),e4=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${Y.labelFont};
        ${Y.monospaceFont};
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
`;function t4(e,t,n){const r=D0(n);return e({title:t,styles:e4,renderCallback(){return u`
                <div class="font-example" style=${n}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${he(r).map(o=>{const i=r[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const n4=U({title:"Fonts",parent:Ga,elementExamplesCallback({defineExample:e}){he(Y).map(t=>{const n=Y[t];return t4(e,t,n)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),r4=[ae,B0,Ga,N0],o4=[...Y5,...W5,b5,k5,$5,x5,M5,A5,Q5,E5,L5,q5,N5,n4,O5,B5,D5,R5,_5,H5,F5,j5,G5].sort((e,t)=>e.title.localeCompare(t.title)),i4=[...r4,...o4];xo({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ei} {
            height: 100%;
            width: 100%;
            ${Y.paragraphFont};
        }

        .nav-header {
            padding-left: 16px;
            margin-top: 8px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 16px;
        }

        h1,
        p {
            margin: 0;
        }
    `,renderCallback(){return u`
            <${ei.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:i4,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${nt.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${ei}>
        `}});