var Dh=Object.defineProperty;var _h=(e,t,r)=>t in e?Dh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Cn=(e,t,r)=>(_h(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Rh(e,t){return e.includes(t)}function Nt(e){return!!e}function Hh(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Fh={capitalizeFirstLetter:!1};function Vh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function jh(e,t){return t.capitalizeFirstLetter?Vh(e):e}function zh(e,t=Fh){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return jh(n,t)}var vr;(function(e){e.Upper="upper",e.Lower="lower"})(vr||(vr={}));function Zh(e){return e.toLowerCase()!==e.toUpperCase()}function Ss(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Zh(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===vr.Upper&&o!==o.toUpperCase())return!1;if(t===vr.Lower&&o!==o.toLowerCase())return!1}return!0}function Wh(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ss(a,vr.Lower,{blockNoCaseCharacters:!0})||Ss(s,vr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Uh(e,t){return e.split(t)}var Ts;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ts||(Ts={}));const Gh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ce(e,t){return e?Gh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Yc(e,t){return e&&t.every(r=>Ce(e,r))}function Jc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Sr(r).trim()).join(`
`))}function Sr(e){return e?e instanceof Error?e.message:Ce(e,"message")?String(e.message):String(e):""}function Kc(e){return e instanceof Error?e:new Error(Sr(e))}function Yh(e,t){const r=Kc(e);return r.message=`${t}: ${r.message}`,r}function Qr(e){return Array.isArray(e)?"array":typeof e}function Y(e,t){return Qr(e)===t}function tt(e){return!!e&&typeof e=="object"}function Ee(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Xc(e,t,r=!1,n={}){const o=Ee(e),i=new Set(Ee(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Ce(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||Qc(l,c,s,r,n[a]??{})})}function Qc(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Ce(t,"constructor")&&(!Ce(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(f=>{try{Qc(l,f,r,n,o);return}catch(m){return new Error(`entry at index "${c}" did not match expected shape: ${Sr(m)}`)}}).filter(Nt).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):tt(t)&&Xc(e,t,n,o)}function Cs({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Ms="Failed to compare objects using JSON.stringify";function As(e,t,r){return Cs({source:e,errorHandler(n){if(r)return"";throw n}})===Cs({source:t,errorHandler(n){if(r)return"";throw n}})}function yt(e,t,r={}){try{return e===t?!0:tt(e)&&tt(t)?As(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>yt(e[o],t[o])):!1:As(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Kc(n);throw o.message.startsWith(Ms)||(o.message=`${Ms}: ${o.message}`),o}}function Jh(e){return Ee(e).filter(t=>isNaN(Number(t)))}function Kh(e){return Jh(e).map(r=>e[r])}function Xh(e,t){return Kh(t).includes(e)}function Qh(e,t){return Ee(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function ef(e,t){return Qh(e,r=>!t.includes(r))}function tf(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ct(e,t){let r=!1;const n=Ee(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ee(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Es(e,t){try{return eu(e,t),!0}catch{return!1}}function eu(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Sa(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Sa.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ri(e){const t=Sa();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const rf=globalThis.crypto;function nf(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return rf.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function of({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function af(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(Nt);return t.length?`?${t.join("&")}`:""}function sf(e){return of({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=Uh(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(Nt)}function lf(e,t){const r=Y(e,"string")?new URL(e):e,n=sf(r.search),o=Object.fromEntries(n);return t&&Xc(o,t),o}const cf="px";function uf(e){return df({value:e,suffix:cf})}function df({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function hf(e,t){return Ce(e,"entryType")&&e.entryType===t}var me;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(me||(me={}));function er(e,t){return e.controlType===t}var O;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(O||(O={}));const tu=Symbol("any-type"),ff={[O.Checkbox]:!1,[O.Color]:"",[O.Dropdown]:"",[O.Hidden]:tu,[O.Number]:0,[O.Text]:""};function mf(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=ff[o.controlType];i!==tu&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ta(e,t){const r=ho(e.title);return e.parent?[...Ta(e.parent,!1),ho(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function ho(e){return Hh(e).toLowerCase().replaceAll(/\s/g,"-")}function pf({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function U(e){const t={...e,entryType:me.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:me.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Nt)};r.add(n.title),t.elementExamples[ho(o.title)]=o}}),t}var et;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(et||(et={}));async function Hi(e=1){const t=Sa();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function gf(e){return wf(e,1)}async function wf(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{eu(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=globalThis,Ca=Un.ShadowRoot&&(Un.ShadyCSS===void 0||Un.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ma=Symbol(),Is=new WeakMap;let ru=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ma)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ca&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Is.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Is.set(r,t))}return t}toString(){return this.cssText}};const q=e=>new ru(typeof e=="string"?e:e+"",void 0,Ma),Gn=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ru(r,e,Ma)},vf=(e,t)=>{if(Ca)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Un.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Ls=Ca?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return q(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bf,defineProperty:yf,getOwnPropertyDescriptor:$f,getOwnPropertyNames:kf,getOwnPropertySymbols:xf,getPrototypeOf:Sf}=Object,kt=globalThis,Ps=kt.trustedTypes,Tf=Ps?Ps.emptyScript:"",Xo=kt.reactiveElementPolyfillSupport,Wr=(e,t)=>e,fo={toAttribute(e,t){switch(t){case Boolean:e=e?Tf:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Aa=(e,t)=>!bf(e,t),Ns={attribute:!0,type:String,converter:fo,reflect:!1,hasChanged:Aa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),kt.litPropertyMetadata??(kt.litPropertyMetadata=new WeakMap);let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ns){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&yf(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=$f(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ns}static _$Ei(){if(this.hasOwnProperty(Wr("elementProperties")))return;const t=Sf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wr("properties"))){const r=this.properties,n=[...kf(r),...xf(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ls(o))}else t!==void 0&&r.push(Ls(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:fo).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:fo;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Aa)(this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Wr("elementProperties")]=new Map,sr[Wr("finalized")]=new Map,Xo==null||Xo({ReactiveElement:sr}),(kt.reactiveElementVersions??(kt.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=globalThis,mo=Ur.trustedTypes,qs=mo?mo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ea="$lit$",ct=`lit$${(Math.random()+"").slice(9)}$`,Ia="?"+ct,Cf=`<${Ia}>`,Ut=document,en=()=>Ut.createComment(""),tn=e=>e===null||typeof e!="object"&&typeof e!="function",nu=Array.isArray,ou=e=>nu(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Qo=`[ 	
\f\r]`,Or=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Os=/-->/g,Bs=/>/g,Bt=RegExp(`>|${Qo}(?:([^\\s"'>=/]+)(${Qo}*=${Qo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ds=/'/g,_s=/"/g,iu=/^(?:script|style|textarea|title)$/i,au=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Mf=au(1),Af=au(2),Ie=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Rs=new WeakMap,Vt=Ut.createTreeWalker(Ut,129);function su(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qs!==void 0?qs.createHTML(t):t}const lu=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Or;for(let s=0;s<r;s++){const l=e[s];let c,d,f=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===Or?d[1]==="!--"?a=Os:d[1]!==void 0?a=Bs:d[2]!==void 0?(iu.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=Bt):d[3]!==void 0&&(a=Bt):a===Bt?d[0]===">"?(a=o??Or,f=-1):d[1]===void 0?f=-2:(f=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Bt:d[3]==='"'?_s:Ds):a===_s||a===Ds?a=Bt:a===Os||a===Bs?a=Or:(a=Bt,o=void 0);const g=a===Bt&&e[s+1].startsWith("/>")?" ":"";i+=a===Or?l+Cf:f>=0?(n.push(c),l.slice(0,f)+Ea+l.slice(f)+ct+g):l+ct+(f===-2?s:g)}return[su(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class rn{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=lu(t,r);if(this.el=rn.createElement(c,n),Vt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Vt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Ea)){const m=d[a++],g=o.getAttribute(f).split(ct),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?uu:w[1]==="?"?du:w[1]==="@"?hu:mn}),o.removeAttribute(f)}else f.startsWith(ct)&&(l.push({type:6,index:i}),o.removeAttribute(f));if(iu.test(o.tagName)){const f=o.textContent.split(ct),m=f.length-1;if(m>0){o.textContent=mo?mo.emptyScript:"";for(let g=0;g<m;g++)o.append(f[g],en()),Vt.nextNode(),l.push({type:2,index:++i});o.append(f[m],en())}}}else if(o.nodeType===8)if(o.data===Ia)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(ct,f+1))!==-1;)l.push({type:7,index:i}),f+=ct.length-1}i++}}static createElement(t,r){const n=Ut.createElement("template");return n.innerHTML=t,n}}function Gt(e,t,r=e,n){var a,s;if(t===Ie)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=tn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Gt(e,o._$AS(e,t.values),o,n)),t}class cu{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ut).importNode(r,!0);Vt.currentNode=o;let i=Vt.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Tr(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new fu(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Vt.nextNode(),a++)}return Vt.currentNode=Ut,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Tr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Gt(this,t,r),tn(t)?t===te||t==null||t===""?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==Ie&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ou(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==te&&tn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ut.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=rn.createElement(su(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new cu(o,this),s=a.u(this.options);a.p(r),this.$(s),this._$AH=a}}_$AC(t){let r=Rs.get(t.strings);return r===void 0&&Rs.set(t.strings,r=new rn(t)),r}T(t){nu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Tr(this.k(en()),this.k(en()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class mn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=te}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Gt(this,t,r,0),a=!tn(t)||t!==this._$AH&&t!==Ie,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Gt(this,s[n+l],r,l),c===Ie&&(c=this._$AH[l]),a||(a=!tn(c)||c!==this._$AH[l]),c===te?t=te:t!==te&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.O(t)}O(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class uu extends mn{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===te?void 0:t}}class du extends mn{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class hu extends mn{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Gt(this,t,r,0)??te)===Ie)return;const n=this._$AH,o=t===te&&n!==te||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==te&&(n===te||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class fu{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Gt(this,t)}}const Ef={j:Ea,P:ct,A:Ia,C:1,M:lu,L:cu,R:ou,V:Gt,D:Tr,I:mn,H:du,N:hu,U:uu,B:fu},ei=Ur.litHtmlPolyfillSupport;ei==null||ei(rn,Tr),(Ur.litHtmlVersions??(Ur.litHtmlVersions=[])).push("3.1.1");const If=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Tr(t.insertBefore(en(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Gr=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=If(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ie}};var Gc;Gr._$litElement$=!0,Gr.finalized=!0,(Gc=globalThis.litElementHydrateSupport)==null||Gc.call(globalThis,{LitElement:Gr});const ti=globalThis.litElementPolyfillSupport;ti==null||ti({LitElement:Gr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Lf}=Ef,Hs=()=>document.createComment(""),Br=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Hs(),o),s=n.insertBefore(Hs(),o);r=new Lf(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;n.insertBefore(c,o),c=d}}}return r},Dt=(e,t,r=e)=>(e._$AI(t,r),e),Pf={},Nf=(e,t=Pf)=>e._$AH=t,qf=e=>e._$AH,ri=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qt=e=>(...t)=>({_$litDirective$:e,values:t});class ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Of={attribute:!0,type:String,converter:fo,reflect:!1,hasChanged:Aa},Bf=(e=Of,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Df(e){return(t,r)=>typeof r=="object"?Bf(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=qt(class extends ht{constructor(e){var t;if(super(e),e.type!==pn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return Ie}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=e=>e??te;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fi extends ht{constructor(t){if(super(t),this.et=te,t.type!==pn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===te||t==null)return this.vt=void 0,this.et=t;if(t===Ie)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Fi.directiveName="unsafeHTML",Fi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vs extends Fi{}Vs.directiveName="unsafeSVG",Vs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _f(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Rf=qt(class extends ht{constructor(e){if(super(e),e.type!==pn.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=qf(e),{values:i,keys:a}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=a,i;const s=this.dt??(this.dt=[]),l=[];let c,d,f=0,m=o.length-1,g=0,w=i.length-1;for(;f<=m&&g<=w;)if(o[f]===null)f++;else if(o[m]===null)m--;else if(s[f]===a[g])l[g]=Dt(o[f],i[g]),f++,g++;else if(s[m]===a[w])l[w]=Dt(o[m],i[w]),m--,w--;else if(s[f]===a[w])l[w]=Dt(o[f],i[w]),Br(e,l[w+1],o[f]),f++,w--;else if(s[m]===a[g])l[g]=Dt(o[m],i[g]),Br(e,o[f],o[m]),m--,g++;else if(c===void 0&&(c=js(a,g,w),d=js(s,f,m)),c.has(s[f]))if(c.has(s[m])){const k=d.get(a[g]),$=k!==void 0?o[k]:null;if($===null){const x=Br(e,o[f]);Dt(x,i[g]),l[g]=x}else l[g]=Dt($,i[g]),Br(e,o[f],$),o[k]=null;g++}else ri(o[m]),m--;else ri(o[f]),f++;for(;g<=w;){const k=Br(e,l[w+1]);Dt(k,i[g]),l[g++]=k}for(;f<=m;){const k=o[f++];k!==null&&ri(k)}return this.dt=a,Nf(e,l),Ie}}),Hf=Rf;class mu extends Gr{}function ft(e){if(tt(e))return Ct(e,(r,n)=>{if(!Y(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Wh(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?q(r):r.startsWith("-")?Gn`-${q(r)}`:Gn`--${q(r)}`;return{name:a,value:Gn`var(${a}, ${q(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${ft.name}' function.`)}function Vi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Ff(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Yn(e){return Ce(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function La(e){return Ce(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function pu(e){return e.map(t=>Yn(t)?t.definition:t).filter(t=>La(t))}const gu=new WeakMap;function Vf(e,t){var o;const r=pu(t);return(o=wu(gu,[e,...r]).value)==null?void 0:o.template}function jf(e,t,r){const n=pu(t);return bu(gu,[e,...n],r)}function wu(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=vu(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?wu(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function vu(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function bu(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=vu(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),bu(l,t,r,n+1)}const zf=new WeakMap;function yu(e,t,r){const n=Vf(e,t),o=n??r();if(!n){const s=jf(e,t,o);if(s.result)zf.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Ff(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function $u(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const f=o.length-1,m=o[f],g=d-1,w=t[g];n&&n(c);let k,$=[];if(typeof m=="string"&&(k=r(m,c,w),k)){o[f]=m+k.replacement,a.push(g);const C=k.getExtraValues;$=C?C(w):[],$.length&&C?(o[f]+=" ",$.forEach((D,Z)=>{Z&&o.push(" ")}),s.push(D=>{const Z=D[g],ie=C(Z);return{index:g,values:ie}}),o.push(c)):o[f]+=c}k||o.push(c);const x=e.raw[d];k?(i[f]=i[f]+k.replacement+x,$.length&&$.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function Zf(...[e,t,r]){if(La(r))return{replacement:r.tagName,getExtraValues:void 0}}function Wf(e,t){return $u(e,t,Zf)}function p(e,...t){const r=yu(e,t,()=>Wf(e,t));return Gn(r.strings,...r.values)}const Uf={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function ku(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof mu?!0:ku(r)}function xu(e,t){const r=e.instanceState;Ee(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ee(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Gf(e)}function Gf(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function zs(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Yf extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Pa(){return e=>{var t;return t=class extends Yf{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function Q(){return Pa()}function Jf(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Pa()([e,n].join("-"));return r[n]=o,r},{}):{}}const Kf="_elementVirStateSetup";function Xf(e){return tt(e)?Kf in e:!1}function Qf(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Qr(e)===Qr(t)&&r}const Su=Symbol("and"),Tu=Symbol("or"),Cu=Symbol("exact"),Mu=Symbol("enum"),Na=Symbol("unknown"),Au="__vir__shape__definition__key__do__not__use__in__actual__objects";function Eu(e){return Ce(e,Au)}const Iu="__vir__shape__specifier__key__do__not__use__in__actual__objects",e1=[Su,Tu,Cu,Mu,Na];function t1(){return r1([],Na)}function qo(e){return gn(e,Tu)}function qa(e){return gn(e,Su)}function Oa(e){return gn(e,Cu)}function Ba(e){return gn(e,Mu)}function Da(e){return gn(e,Na)}function gn(e,t){const r=Oo(e);return!!r&&r.specifierType===t}function r1(e,t){return{[Iu]:!0,specifierType:t,parts:e}}function Jn(e,t){const r=Oo(t);if(r){if(qa(r))return r.parts.every(n=>Jn(e,n));if(qo(r))return r.parts.some(n=>Jn(e,n));if(Oa(r))return tt(e)?Jn(e,r.parts[0]):e===r.parts[0];if(Ba(r))return Object.values(r.parts[0]).some(n=>n===e);if(Da(r))return!0}return Qf(e,t)}function Oo(e){if(tt(e)&&Ce(e,Iu)){if(!Ce(e,"parts")||!Y(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Ce(e,"specifierType")||!Rh(e1,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function ji(e,t=!1){return Kn(e)}function Kn(e){const t=Oo(e);if(t){if(qo(t)||Oa(t))return Kn(t.parts[0]);if(qa(t))return t.parts.reduce((r,n)=>Object.assign(r,Kn(n)),{});if(Ba(t))return Object.values(t.parts[0])[0];if(Da(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Eu(e)?ji(e.shape):e instanceof RegExp?e:Y(e,"array")?e.map(Kn):tt(e)?Ct(e,(r,n)=>ji(n)):e}function n1(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:ji(e),[Au]:!0}}let ze=class extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}};function o1(e,t,r={}){try{return i1(e,t,r),!0}catch{return!1}}function i1(e,t,r={}){Ft(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Lu(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Ft(e,t,r,n){if(Da(t))return!0;if(Eu(t))return Ft(e,t.shape,r,n);const o=Lu(r);if(Oo(e))throw new ze(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Jn(e,t))throw new ze(`Subject does not match shape definition at key ${o}`);if(Y(t,"function"))return Y(e,"function");if(tt(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(qo(t))l=t.parts.some(c=>{try{const d=Ft(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof ze)return!1;throw d}});else if(qa(t))l=t.parts.every(c=>{try{const d=Ft(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof ze)return!1;throw d}});else if(Oa(t)){const c=Ft(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(Ba(t))throw new ze(`Cannot compare an enum specifier to an object at ${o}`);if(Y(t,"array")&&Y(a,"array"))l=a.every((c,d)=>{const f=t.some(m=>{try{return Ft(c,m,[...r,d],n),!0}catch(g){if(g instanceof ze)return!1;throw g}});return s[d]=f,f});else{const c=a1({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(f=>!s[f]).join(",")}`;throw new ze(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new ze(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function a1({keys:e,options:t,shape:r,subject:n}){const o=Lu(e),i={};if(tt(r)){const a=new Set(Ee(n)),s=new Set(Ee(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new ze(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const c=r[l],d=qo(c)?c.parts.includes(void 0):!1,f=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!f)throw new ze(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];Ft(c,d,[...e,l],t),i[l]=!0})}else throw new ze(`shape definition at ${o} was not an object.`);return i}const s1=n1({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:t1()});function ni(e){return o1(e,s1,{allowExtraKeys:!0})}function Pu(e,t){t in e||Df()(e,t)}function l1(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Zs(e,t){const r=e;function n(a){t?l1(a,e,e.tagName):Pu(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=Xf(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function f(w){a[s]=w,r[s]=w}const m=e.observablePropertyListenerMap[s];if(d!==c&&ni(d)&&(m!=null&&m.length)&&d.removeListener(m),ni(c))if(m)c.addListener(m);else{let w=function(){e.requestUpdate()};var g=w;e.observablePropertyListenerMap[s]=w,c.addListener(w)}else ni(d)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function c1(e){return e?Ct(e,t=>t):{}}function u1({hostClassNames:e,cssVars:t}){return{hostClasses:Ct(e,(r,n)=>({name:q(n),selector:q(`:host(.${n})`)})),cssVars:t}}function d1({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Ee(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function h1({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function o(a){Ee(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function f1(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var m1=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Bo(e){var t;const r=e;if(!Y(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!Y(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Uf,...r.options},o=Jf(r.tagName,r.events),i=c1(r.hostClasses);r.hostClasses&&zs(r.tagName,r.hostClasses),r.cssVars&&zs(r.tagName,r.cssVars);const a=r.cssVars?ft(r.cssVars):{},s=f1(r.slotNames),l=typeof r.styles=="function"?r.styles(u1({hostClassNames:i,cssVars:a})):r.styles||p``,c=r.renderCallback;function d(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:m}}const f=(t=class extends mu{createRenderParams(){return h1({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{ku(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Bo.name}' to define ${r.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=c(m);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return d1({host:m.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},g}catch(m){const g=Yh(m,`Failed to render ${r.tagName}`);return console.error(g),this._lastRenderError=g,Sr(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(r.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const m=this.createRenderParams();if(r.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){xu(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Zs(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Zs(this,!n.allowPolymorphicState)});const m=r.stateInitStatic||{};Ee(m).forEach(g=>{Pu(this,g),this.instanceState[g]=m[g]}),this.definition=f}},m1(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(f,{name:{value:zh(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof f,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,f),f}function Nu(){return e=>{const t=e;if(!Y(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Bo({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function _a(e,t){return nn(e,t),e.element}function p1(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function nn(e,t){const r=p1(e),n=r?`: in ${r}`:"";if(e.type!==pn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function g1(e){const t=qt(class extends ht{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=_a(r,e)}render(r){return this.element.setAttribute(e,r),Ie}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function T(e,t){return w1(e,t)}const w1=qt(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=_a(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Ie}}),Ws="onDomCreated",Us=qt(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),nn(e,Ws)}update(e,[t]){nn(e,Ws);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),oi="onResize",on=qt(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),nn(e,oi)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${oi} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){nn(e,oi),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Me(e,t,r){return _f(e,()=>t,()=>r)}const{attributeDirective:v1,attributeSelector:K4,attributeName:X4}=g1("data-test-id");function Ra(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Nu()(r(n))),defineElementNoInputs:n=>(t(n),Bo(r(n)))}}function b1(e,t){return t?Gs(e,t):Gs(void 0,e)}const Gs=qt(class extends ht{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=_a(e,"assign")}render(e,t){return xu(this.element,t),Ie}});function y1(...[e,t,r]){const n=Yn(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=La(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!n.elementOptions.ignoreUnsetInputs&&!Yn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(c){const d=Yn(c)?c.inputs:void 0;return[o&&d?b1(d):void 0].filter(Nt)}}}function $1(e){}function k1(e){return $u(e.strings,e.values,y1,$1)}function u(e,...t){const r=Mf(e,...t),n=yu(e,t,()=>k1(r));return{...r,strings:n.strings,values:n.values}}const x1={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},S1=Object.keys(x1),T1=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...S1,...T1];function Mn(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const C1={[me.ElementExample]:()=>[],[me.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...mf(e.controls,e.title)].filter(Nt),[me.Root]:()=>[]},po="_isBookTreeNode",qu=new Map;function M1(e){return qu.get(e)}function A1(e,t){tf(qu,e,()=>t)}function fr(e,t){return!!(Ou(e)&&e.entry.entryType===t)}function Ou(e){return!!(Yc(e,[po,"entry"])&&e[po])}function E1(){return{[po]:!0,entry:{entryType:me.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function I1({entries:e,debug:t}){const r=M1(e);if(r)return r;const n=E1();e.forEach(a=>Ha({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Bu(n),i={tree:n,flattenedNodes:o};return A1(e,i),t&&console.info("element-book tree:",n),i}function L1(e,t,r){if(!t.parent)return e;const n=zi(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ha({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=zi(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ta(t,!1)}`);return o}function Ha({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=C1[t.entryType](t);t.errors.push(...o);const i=L1(e,t,r),a=ho(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[po]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,hf(t,me.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Ha({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function zi(e,t){const r=Ou(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ta(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Bu(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Bu(o));return[e,...r].flat()}function Fa(e,t){return Va(e,["",...t],void 0)}function Va(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Va(i,n,r);return{...e.controls,...a}}function P1(e,t,r){const n={...e};return Va(n,["",...t],r),n}function Du(e,t){const r=(t==null?void 0:t.controls)||(fr(e,me.Page)?Ct(e.entry.controls,(o,i)=>i.initValue):{});return{children:Ct(e.children,(o,i)=>{var a;return Du(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function N1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const q1=nf(32);function Xn(e){return e.join(q1)}function _u(e){if(!e.length)return[];const t=Xn(e),r=_u(e.slice(0,-1));return[t,...r]}const O1=["error","errors"];function B1(e){return O1.includes(e)}function D1({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Xn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&B1(t),a=Xn(o.fullUrlBreadcrumbs);if(N1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=_u(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Xn(o.fullUrlBreadcrumbs),a=r[i];if(!Y(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var $e;(function(e){e.Search="search",e.Book="book"})($e||($e={}));function Zi(e){return e[0]===$e.Book?"":e[1]?decodeURIComponent(e[1]):""}const br={hash:void 0,paths:[$e.Book],search:void 0},_1=0;function Do(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==_1)}class _o extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Ys extends _o{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const an="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const R1=globalThis.history.pushState;function Js(...e){const t=R1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(an)),t}const H1=globalThis.history.replaceState;function Ks(...e){const t=H1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(an)),t}function F1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Js)throw new Ys("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ks)throw new Ys("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Js,globalThis.history.replaceState=Ks,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(an))})}}function V1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?lf(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function Ru(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Hu({routeBase:e,windowPath:t}){if(!e)return"";const r=Ru(e);if(Fu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Hu({routeBase:n,windowPath:t}):""}function Fu({routeBase:e,windowPath:t}){const r=Ru(e);return r?t.startsWith(`/${r}`):!1}class j1 extends _o{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Vu(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Xs=6;function Qs(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Xs)throw new j1(`Route sanitization depth has exceed the max of ${Xs} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Vu(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ii extends _o{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function z1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ii(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ii(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ii(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Z1(e,t,r=!1){const n=ju(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function ju(e,t){var s;const r=Fu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?af(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(Nt).join("/")}${n}${i}`}function W1(e={}){z1(e),F1();const t=e.routeBase?Hu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Qs(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&Vu(l,d)))return Z1(d,t,a)},createRoutesUrl(i){return ju(i,t)},getCurrentRawRoutes(){return V1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new _o(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(an,n),r=!0),i&&Qs(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(an,n),r=!1),a},sanitizationDepth:0};return o}function U1(e){return W1({routeBase:e,routeSanitizer(t){return{paths:G1(t.paths),hash:void 0,search:void 0}}})}function G1(e){const t=e[0];if(Xh(t,$e)){if(t===$e.Book)return[$e.Book,...e.slice(1)];if(t===$e.Search)return e[1]?[t,e[1]]:[$e.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return br.paths}const H=ft({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Y1={nav:{hover:{background:H["element-book-nav-hover-background-color"],foreground:H["element-book-nav-hover-foreground-color"]},active:{background:H["element-book-nav-active-background-color"],foreground:H["element-book-nav-active-foreground-color"]},selected:{background:H["element-book-nav-selected-background-color"],foreground:H["element-book-nav-selected-foreground-color"]}},accent:{icon:H["element-book-accent-icon-color"]},page:{background:H["element-book-page-background-color"],backgroundFaint1:H["element-book-page-background-faint-level-1-color"],backgroundFaint2:H["element-book-page-background-faint-level-2-color"],foreground:H["element-book-page-foreground-color"],foregroundFaint1:H["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:H["element-book-page-foreground-faint-level-2-color"]}};function J1(e,t){zu(e,t,Y1)}function Wi(e){return Ce(e,"_$cssResult$")}function el(e){return Yc(e,["name","value","default"])&&Y(e.default,"string")&&Wi(e.name)&&Wi(e.value)}function zu(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Wi(o)){if(!el(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Vi({forCssVar:i,onElement:e,toValue:String(o)})}else{if(el(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);zu(e,o,i)}})}function ce(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function wn(e){return xt(e)==="string"}function xt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function go(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Zu(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Wu(e){return e[e.length-1]}function wo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Uu(e,t,r){return(r-e)/(t-e)}function ja(e,t,r){return wo(t[0],t[1],Uu(e[0],e[1],r))}function Gu(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var K1=Object.freeze({__proto__:null,interpolate:wo,interpolateInv:Uu,isString:wn,last:Wu,mapRange:ja,multiplyMatrices:ce,parseCoordGrammar:Gu,parseFunction:Zu,toPrecision:go,type:xt});class X1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Mt=new X1;var rt={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Ge={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ui(e){return Array.isArray(e)?e:Ge[e]}function vo(e,t,r,n={}){if(e=Ui(e),t=Ui(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Mt.run("chromatic-adaptation-start",o),o.M||(o.W1===Ge.D65&&o.W2===Ge.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Ge.D50&&o.W2===Ge.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Mt.run("chromatic-adaptation-end",o),o.M)return ce(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Q1=75e-6,Se=class Se{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Se.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ui(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:em(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Mt.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Q1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=tl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=tl(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Se.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Se.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Se.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Se)return t;if(xt(t)==="string"){let o=Se.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Se.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=xt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Se.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=xt(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Se.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Cn(Se,"registry",{}),Cn(Se,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Se;function em(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function tl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Gu(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=ja(s,l,i)),i=go(i,o),c&&(i+=c),i})}return e}var De=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ke extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=De),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=ce(t.toXYZ_M,r);return this.white!==this.base.white&&(n=vo(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=vo(this.base.white,this.white,r),ce(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Yu(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Mt.run("parse-start",r),r.color)return r.color;if(r.parsed=Zu(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of M.all){let g=m.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const w=Object.keys(m.coords).map((k,$)=>r.parsed.args[$]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:w,alpha:d}}}let f="";if(c in M.registry){let m=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${c}). `+(f||"Missing a plugin?"))}else for(let c of M.all){let d=c.getFormat(l);if(d&&d.type==="function"){let f=1;(d.lastAlpha||Wu(r.parsed.args).alpha)&&(f=r.parsed.args.pop());let m=r.parsed.args,g;return d.coordGrammar&&(g=Object.entries(c.coords).map(([w,k],$)=>{var he;let x=d.coordGrammar[$],C=(he=m[$])==null?void 0:he.type,D=x.find(ue=>ue==C);if(!D){let ue=k.name||w;throw new TypeError(`${C} not allowed for ${ue} in ${l}()`)}let Z=D.range;C==="<percentage>"&&(Z||(Z=[0,1]));let ie=k.range||k.refRange;return Z&&ie&&(m[$]=ja(Z,ie,m[$])),D})),t&&Object.assign(t,{formatId:d.name,types:g}),{spaceId:c.id,coords:m,alpha:f}}}}else for(let l of M.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let f=d.parse(r.str);if(f)return f.alpha??(f.alpha=1),t&&(t.formatId=c),f}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function j(e){if(!e)throw new TypeError("Empty color reference");wn(e)&&(e=Yu(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function vn(e,t){return t=M.get(t),t.from(e)}function _e(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return vn(e,r)[n]}function Ju(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function At(e,t,r){if(e=j(e),arguments.length===2&&xt(arguments[1])==="object"){let n=arguments[1];for(let o in n)At(e,o,n[o])}else{typeof r=="function"&&(r=r(_e(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=vn(e,n);i[o]=r,Ju(e,n,i)}return e}var za=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:De,fromBase:e=>vo(De.white,"D50",e),toBase:e=>vo("D50",De.white,e),formats:{color:{}}});const tm=216/24389,rl=24/116,An=24389/27;let ai=Ge.D50;var Te=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ai,base:za,fromBase(e){let r=e.map((n,o)=>n/ai[o]).map(n=>n>tm?Math.cbrt(n):(An*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>rl?Math.pow(t[0],3):(116*t[0]-16)/An,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/An,t[2]>rl?Math.pow(t[2],3):(116*t[2]-16)/An].map((n,o)=>n*ai[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ro(e){return(e%360+360)%360}function rm(e,t){if(e==="raw")return t;let[r,n]=t.map(Ro),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var sn=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Te,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ro(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const nl=25**7,bo=Math.PI,ol=180/bo,tr=bo/180;function Gi(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Te.from(e),l=sn.from(Te,[i,a,s])[1],[c,d,f]=Te.from(t),m=sn.from(Te,[c,d,f])[1];l<0&&(l=0),m<0&&(m=0);let w=((l+m)/2)**7,k=.5*(1-Math.sqrt(w/(w+nl))),$=(1+k)*a,x=(1+k)*d,C=Math.sqrt($**2+s**2),D=Math.sqrt(x**2+f**2),Z=$===0&&s===0?0:Math.atan2(s,$),ie=x===0&&f===0?0:Math.atan2(f,x);Z<0&&(Z+=2*bo),ie<0&&(ie+=2*bo),Z*=ol,ie*=ol;let he=c-i,ue=D-C,z=ie-Z,ae=Z+ie,Fe=Math.abs(z),be;C*D===0?be=0:Fe<=180?be=z:z>180?be=z-360:z<-180?be=z+360:console.log("the unthinkable has happened");let Qt=2*Math.sqrt(D*C)*Math.sin(be*tr/2),Nr=(i+c)/2,Ko=(C+D)/2,ys=Math.pow(Ko,7),ot;C*D===0?ot=ae:Fe<=180?ot=ae/2:ae<360?ot=(ae+360)/2:ot=(ae-360)/2;let $s=(Nr-50)**2,Nh=1+.015*$s/Math.sqrt(20+$s),ks=1+.045*Ko,qr=1;qr-=.17*Math.cos((ot-30)*tr),qr+=.24*Math.cos(2*ot*tr),qr+=.32*Math.cos((3*ot+6)*tr),qr-=.2*Math.cos((4*ot-63)*tr);let xs=1+.015*Ko*qr,qh=30*Math.exp(-1*((ot-275)/25)**2),Oh=2*Math.sqrt(ys/(ys+nl)),Bh=-1*Math.sin(2*qh*tr)*Oh,Tn=(he/(r*Nh))**2;return Tn+=(ue/(n*ks))**2,Tn+=(Qt/(o*xs))**2,Tn+=Bh*(ue/(n*ks))*(Qt/(o*xs)),Math.sqrt(Tn)}const nm=75e-6;function Yr(e,t=e.space,{epsilon:r=nm}={}){e=j(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ln(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Et(e,{method:t=rt.gamut_mapping,space:r=e.space}={}){if(wn(arguments[1])&&(r=arguments[1]),r=M.get(r),Yr(e,r,{epsilon:0}))return j(e);let n=qe(e,r);if(t!=="clip"&&!Yr(e,r)){let o=Et(ln(n),{method:"clip",space:r});if(Gi(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=qe(n,a),d=(i.range||i.refRange)[0],f=.01,m=d,g=_e(l,s);for(;g-m>f;){let w=ln(l);w=Et(w,{space:r,method:"clip"}),Gi(l,w)-2<f?m=_e(l,s):g=_e(l,s),At(l,s,(m+g)/2)}n=qe(l,r)}else n=o}if(t==="clip"||!Yr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=qe(n,e.space)),e.coords=n.coords,e}Et.returns="color";function qe(e,t,{inGamut:r}={}){e=j(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Et(o)),o}qe.returns="color";function yo(e,{precision:t=rt.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=j(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Yr(e)&&(s=Et(ln(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>go(g,t)));let d=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(g)}let f=e.alpha;t!==null&&(f=go(f,t));let m=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${f}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${m})`}return i}const om=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],im=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ho=new ke({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:om,fromXYZ_M:im,formats:{color:{}}});const En=1.09929682680944,il=.018053968510807;var Ku=new ke({id:"rec2020",name:"REC.2020",base:Ho,toBase(e){return e.map(function(t){return t<il*4.5?t/4.5:Math.pow((t+En-1)/En,1/.45)})},fromBase(e){return e.map(function(t){return t>=il?En*Math.pow(t,.45)-(En-1):4.5*t})},formats:{color:{}}});const am=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],sm=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Xu=new ke({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:am,fromXYZ_M:sm});const lm=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],cm=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Qu=new ke({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:lm,fromXYZ_M:cm,formats:{color:{}}}),al={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let sl=Array(3).fill("<percentage> | <number>[0, 255]"),ll=Array(3).fill("<number>[0, 255]");var cn=new ke({id:"srgb",name:"sRGB",base:Qu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:sl},rgb_number:{name:"rgb",commas:!0,coords:ll,noAlpha:!0},color:{},rgba:{coords:sl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ll},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=al.black,t.alpha=0):t.coords=al[e],t.coords)return t}}}}),ed=new ke({id:"p3",name:"P3",base:Xu,fromBase:cn.fromBase,toBase:cn.toBase,formats:{color:{id:"display-p3"}}});rt.display_space=cn;if(typeof CSS<"u"&&CSS.supports)for(let e of[Te,Ku,ed]){let t=e.getMinCoords(),n=yo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){rt.display_space=e;break}}function um(e,{space:t=rt.display_space,...r}={}){let n=yo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!rt.display_space)n=new String(n),n.color=e;else{let o=qe(e,t);n=new String(yo(o,r)),n.color=o}return n}function td(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function dm(e,t){return e=j(e),t=j(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function It(e){return _e(e,[De,"y"])}function rd(e,t){At(e,[De,"y"],t)}function hm(e){Object.defineProperty(e.prototype,"luminance",{get(){return It(this)},set(t){rd(this,t)}})}var fm=Object.freeze({__proto__:null,getLuminance:It,register:hm,setLuminance:rd});function mm(e,t){e=j(e),t=j(t);let r=Math.max(It(e),0),n=Math.max(It(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const pm=.56,gm=.57,wm=.62,vm=.65,cl=.022,bm=1.414,ym=.1,$m=5e-4,km=1.14,ul=.027,xm=1.14;function dl(e){return e>=cl?e:e+(cl-e)**bm}function rr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Sm(e,t){t=j(t),e=j(e);let r,n,o,i,a,s;t=qe(t,"srgb"),[i,a,s]=t.coords;let l=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175;e=qe(e,"srgb"),[i,a,s]=e.coords;let c=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175,d=dl(l),f=dl(c),m=f>d;return Math.abs(f-d)<$m?n=0:m?(r=f**pm-d**gm,n=r*km):(r=f**vm-d**wm,n=r*xm),Math.abs(n)<ym?o=0:n>0?o=n-ul:o=n+ul,o*100}function Tm(e,t){e=j(e),t=j(t);let r=Math.max(It(e),0),n=Math.max(It(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Cm=5e4;function Mm(e,t){e=j(e),t=j(t);let r=Math.max(It(e),0),n=Math.max(It(t),0);return n>r&&([r,n]=[n,r]),n===0?Cm:(r-n)/n}function Am(e,t){e=j(e),t=j(t);let r=_e(e,[Te,"l"]),n=_e(t,[Te,"l"]);return Math.abs(r-n)}const Em=216/24389,hl=24/116,In=24389/27;let si=Ge.D65;var Yi=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:si,base:De,fromBase(e){let r=e.map((n,o)=>n/si[o]).map(n=>n>Em?Math.cbrt(n):(In*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>hl?Math.pow(t[0],3):(116*t[0]-16)/In,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/In,t[2]>hl?Math.pow(t[2],3):(116*t[2]-16)/In].map((n,o)=>n*si[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const li=Math.pow(5,.5)*.5+.5;function Im(e,t){e=j(e),t=j(t);let r=_e(e,[Yi,"l"]),n=_e(t,[Yi,"l"]),o=Math.abs(Math.pow(r,li)-Math.pow(n,li)),i=Math.pow(o,1/li)*Math.SQRT2-40;return i<7.5?0:i}var Qn=Object.freeze({__proto__:null,contrastAPCA:Sm,contrastDeltaPhi:Im,contrastLstar:Am,contrastMichelson:Tm,contrastWCAG21:mm,contrastWeber:Mm});function Lm(e,t,r={}){wn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Qn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=j(e),t=j(t);for(let i in Qn)if("contrast"+n.toLowerCase()===i.toLowerCase())return Qn[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function nd(e){let[t,r,n]=vn(e,De),o=t+15*r+3*n;return[4*t/o,9*r/o]}function od(e){let[t,r,n]=vn(e,De),o=t+r+n;return[t/o,r/o]}function Pm(e){Object.defineProperty(e.prototype,"uv",{get(){return nd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return od(this)}})}var Nm=Object.freeze({__proto__:null,register:Pm,uv:nd,xy:od});function qm(e,t){return td(e,t,"lab")}const Om=Math.PI,fl=Om/180;function Bm(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Te.from(e),[,s,l]=sn.from(Te,[o,i,a]),[c,d,f]=Te.from(t),m=sn.from(Te,[c,d,f])[1];s<0&&(s=0),m<0&&(m=0);let g=o-c,w=s-m,k=i-d,$=a-f,x=k**2+$**2-w**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let D=.0638*s/(1+.0131*s)+.638,Z;Number.isNaN(l)&&(l=0),l>=164&&l<=345?Z=.56+Math.abs(.2*Math.cos((l+168)*fl)):Z=.36+Math.abs(.4*Math.cos((l+35)*fl));let ie=Math.pow(s,4),he=Math.sqrt(ie/(ie+1900)),ue=D*(he*Z+1-he),z=(g/(r*C))**2;return z+=(w/(n*D))**2,z+=x/ue**2,Math.sqrt(z)}const ml=203;var Za=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:De,fromBase(e){return e.map(t=>Math.max(t*ml,0))},toBase(e){return e.map(t=>Math.max(t/ml,0))}});const Ln=1.15,Pn=.66,pl=2610/2**14,Dm=2**14/2610,gl=3424/2**12,wl=2413/2**7,vl=2392/2**7,_m=1.7*2523/2**5,bl=2**5/(1.7*2523),Nn=-.56,ci=16295499532821565e-27,Rm=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Hm=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Fm=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Vm=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var id=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Za,fromBase(e){let[t,r,n]=e,o=Ln*t-(Ln-1)*n,i=Pn*r-(Pn-1)*t,s=ce(Rm,[o,i,n]).map(function(m){let g=gl+wl*(m/1e4)**pl,w=1+vl*(m/1e4)**pl;return(g/w)**_m}),[l,c,d]=ce(Fm,s);return[(1+Nn)*l/(1+Nn*l)-ci,c,d]},toBase(e){let[t,r,n]=e,o=(t+ci)/(1+Nn-Nn*(t+ci)),a=ce(Vm,[o,r,n]).map(function(m){let g=gl-m**bl,w=vl*m**bl-wl;return 1e4*(g/w)**Dm}),[s,l,c]=ce(Hm,a),d=(s+(Ln-1)*c)/Ln,f=(l+(Pn-1)*d)/Pn;return[d,f,c]},formats:{color:{}}}),Ji=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:id,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ro(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function jm(e,t){let[r,n,o]=Ji.from(e),[i,a,s]=Ji.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,f=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const ad=3424/4096,sd=2413/128,ld=2392/128,yl=2610/16384,zm=2523/32,Zm=16384/2610,$l=32/2523,Wm=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Um=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Gm=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Ym=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Ki=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Za,fromBase(e){let t=ce(Wm,e);return Jm(t)},toBase(e){let t=Km(e);return ce(Ym,t)},formats:{color:{}}});function Jm(e){let t=e.map(function(r){let n=ad+sd*(r/1e4)**yl,o=1+ld*(r/1e4)**yl;return(n/o)**zm});return ce(Um,t)}function Km(e){return ce(Gm,e).map(function(n){let o=Math.max(n**$l-ad,0),i=sd-ld*n**$l;return 1e4*(o/i)**Zm})}function Xm(e,t){let[r,n,o]=Ki.from(e),[i,a,s]=Ki.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Qm=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],e2=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],t2=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],r2=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var $o=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:De,fromBase(e){let r=ce(Qm,e).map(n=>Math.cbrt(n));return ce(t2,r)},toBase(e){let r=ce(r2,e).map(n=>n**3);return ce(e2,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function n2(e,t){let[r,n,o]=$o.from(e),[i,a,s]=$o.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var ko={deltaE76:qm,deltaECMC:Bm,deltaE2000:Gi,deltaEJz:jm,deltaEITP:Xm,deltaEOK:n2};function Fr(e,t,r={}){wn(r)&&(r={method:r});let{method:n=rt.deltaE,...o}=r;e=j(e),t=j(t);for(let i in ko)if("deltae"+n.toLowerCase()===i.toLowerCase())return ko[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function o2(e,t=.25){let n=[M.get("oklch","lch"),"l"];return At(e,n,o=>o*(1+t))}function i2(e,t=.25){let n=[M.get("oklch","lch"),"l"];return At(e,n,o=>o*(1-t))}var a2=Object.freeze({__proto__:null,darken:i2,lighten:o2});function cd(e,t,r=.5,n={}){[e,t]=[j(e),j(t)],xt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return bn(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function ud(e,t,r={}){let n;Wa(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[j(e),j(t)],n=bn(e,t,l));let c=Fr(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,f=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)f=[{p:.5,color:n(.5)}];else{let m=1/(d-1);f=Array.from({length:d},(g,w)=>{let k=w*m;return{p:k,color:n(k)}})}if(o>0){let m=f.reduce((g,w,k)=>{if(k===0)return 0;let $=Fr(w.color,f[k-1].color,i);return Math.max(g,$)},0);for(;m>o;){m=0;for(let g=1;g<f.length&&f.length<s;g++){let w=f[g-1],k=f[g],$=(k.p+w.p)/2,x=n($);m=Math.max(m,Fr(x,w.color),Fr(x,k.color)),f.splice(g,0,{p:$,color:n($)}),g++}}}return f=f.map(m=>m.color),f}function bn(e,t,r={}){if(Wa(e)){let[l,c]=[e,t];return bn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=j(e),t=j(t),e=ln(e),t=ln(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[rt.interpolationSpace]||e.space,o=o?M.get(o):n,e=qe(e,n),t=qe(t,n),e=Et(e),t=Et(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[_e(e,c),_e(t,c)];[d,f]=rm(l,[d,f]),At(e,c,d),At(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((m,g)=>{let w=t.coords[g];return wo(m,w,l)}),d=wo(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return a&&(f.coords=f.coords.map(m=>m/d)),o!==n&&(f=qe(f,o)),f},{rangeArgs:s})}function Wa(e){return xt(e)==="function"&&!!e.rangeArgs}rt.interpolationSpace="lab";function s2(e){e.defineFunction("mix",cd,{returns:"color"}),e.defineFunction("range",bn,{returns:"function<color>"}),e.defineFunction("steps",ud,{returns:"array<color>"})}var l2=Object.freeze({__proto__:null,isRange:Wa,mix:cd,range:bn,register:s2,steps:ud}),dd=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),hd=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:dd,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),c2=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:hd,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const u2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],d2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var fd=new ke({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:u2,fromXYZ_M:d2}),h2=new ke({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:fd,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const f2=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],m2=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var md=new ke({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:za,toXYZ_M:f2,fromXYZ_M:m2});const p2=1/512,g2=16/512;var w2=new ke({id:"prophoto",name:"ProPhoto",base:md,toBase(e){return e.map(t=>t<g2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=p2?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),v2=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$o,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ro(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const kl=203,xl=2610/2**14,b2=2**14/2610,y2=2523/2**5,Sl=2**5/2523,Tl=3424/2**12,Cl=2413/2**7,Ml=2392/2**7;var $2=new ke({id:"rec2100pq",name:"REC.2100-PQ",base:Ho,toBase(e){return e.map(function(t){return(Math.max(t**Sl-Tl,0)/(Cl-Ml*t**Sl))**b2*1e4/kl})},fromBase(e){return e.map(function(t){let r=Math.max(t*kl/1e4,0),n=Tl+Cl*r**xl,o=1+Ml*r**xl;return(n/o)**y2})},formats:{color:{id:"rec2100-pq"}}});const Al=.17883277,El=.28466892,Il=.55991073,ui=3.7743;var k2=new ke({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ho,toBase(e){return e.map(function(t){return t<=.5?t**2/3*ui:(Math.exp((t-Il)/Al)+El)/12*ui})},fromBase(e){return e.map(function(t){return t/=ui,t<=1/12?Math.sqrt(3*t):Al*Math.log(12*t-El)+Il})},formats:{color:{id:"rec2100-hlg"}}});const pd={};Mt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=gd(e.W1,e.W2,e.options.method))});Mt.add("chromatic-adaptation-end",e=>{e.M||(e.M=gd(e.W1,e.W2,e.options.method))});function Fo({id:e,toCone_M:t,fromCone_M:r}){pd[e]=arguments[0]}function gd(e,t,r="Bradford"){let n=pd[r],[o,i,a]=ce(n.toCone_M,e),[s,l,c]=ce(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],f=ce(d,n.toCone_M);return ce(n.fromCone_M,f)}Fo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Fo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Fo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Fo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Ge,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ge.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const x2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],S2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var wd=new ke({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ge.ACES,toXYZ_M:x2,fromXYZ_M:S2,formats:{color:{}}});const qn=2**-16,di=-.35828683,On=(Math.log2(65504)+9.72)/17.52;var T2=new ke({id:"acescc",name:"ACEScc",coords:{r:{range:[di,On],name:"Red"},g:{range:[di,On],name:"Green"},b:{range:[di,On],name:"Blue"}},referred:"scene",base:wd,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-qn)*2:r<On?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(qn)+9.72)/17.52:t<qn?(Math.log2(qn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ll=Object.freeze({__proto__:null,A98RGB:h2,A98RGB_Linear:fd,ACEScc:T2,ACEScg:wd,HSL:dd,HSV:hd,HWB:c2,ICTCP:Ki,JzCzHz:Ji,Jzazbz:id,LCH:sn,Lab:Te,Lab_D65:Yi,OKLCH:v2,OKLab:$o,P3:ed,P3_Linear:Xu,ProPhoto:w2,ProPhoto_Linear:md,REC_2020:Ku,REC_2020_Linear:Ho,REC_2100_HLG:k2,REC_2100_PQ:$2,XYZ_ABS_D65:Za,XYZ_D50:za,XYZ_D65:De,sRGB:cn,sRGB_Linear:Qu});class P{constructor(...t){let r;t.length===1&&(r=j(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=um(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let f=c(...d);return P.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}}P.defineFunctions({get:_e,getAll:vn,set:At,setAll:Ju,to:qe,equals:dm,inGamut:Yr,toGamut:Et,distance:td,toString:yo});Object.assign(P,{util:K1,hooks:Mt,WHITES:Ge,Space:M,spaces:M.registry,parse:Yu,defaults:rt});for(let e of Object.keys(Ll))M.register(Ll[e]);for(let e in M.registry)Xi(e,M.registry[e]);Mt.add("colorspace-init-end",e=>{var t;Xi(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Xi(r,e)})});function Xi(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}P.extend(ko);P.extend({deltaE:Fr});Object.assign(P,{deltaEMethods:ko});P.extend(a2);P.extend({contrast:Lm});P.extend(Nm);P.extend(fm);P.extend(l2);P.extend(Qn);function vd(e){return Ct(e,(t,r)=>r instanceof P?q(r.toString({format:"hex"})):vd(r))}const C2="dodgerblue";function Qi(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function hi({background:e,foreground:t}){return{background:e??new P(Qi(t)),foreground:t??new P(Qi(e))}}var xo;(function(e){e.Dark="dark",e.Light="light"})(xo||(xo={}));function M2(e){return e==="black"?"white":"black"}const A2={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},E2={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function Pl({themeColor:e=C2,themeStyle:t=xo.Light}={}){const r=new P(e),n=new P(t===xo.Dark?"black":"white"),o=Qi(n),i=new P(o),a={nav:{hover:hi({background:r.clone().set({"hsl.l":93})}),active:hi({background:r.clone().set({"hsl.l":90})}),selected:hi({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...E2[M2(o)],foreground:i,...A2[o]}};return vd(a)}const So=Pa()("element-book-change-route"),Nl="vira-",{defineElement:Cr,defineElementNoInputs:Q4}=Ra({assertInputs:e=>{if(!e.tagName.startsWith(Nl))throw new Error(`Tag name should start with '${Nl}' but got '${e.tagName}'`)}}),bd=p`
    pointer-events: none;
    opacity: 0.3;
`,St=ft({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),To=ft({"vira-form-input-border-radius":"8px"}),Co=ft({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${To["vira-form-input-border-radius"].value} + 4px)`});function yd({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=q(uf(n+r+t));return p`
        ${q(e)}::after {
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
    `}const $d=p`
    padding: 0;
    margin: 0;
`,fe=p`
    ${$d};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function I2(e){return p`
        ${q(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${q(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const Re=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ne=Cr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var ea;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ea||(ea={}));Cr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ea.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Re};
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
            ${bd};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${fe};
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
                color ${St["vira-interaction-animation-duration"].value},
                background-color
                    ${St["vira-interaction-animation-duration"].value},
                border-color ${St["vira-interaction-animation-duration"].value};
        }

        ${yd({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ne} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${ne.assign({icon:e.icon})}></${ne}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var ta;(function(e){e.Header="header"})(ta||(ta={}));Cr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${fe};
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
    `,events:{expandChange:Q()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${T("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${ta.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${on(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=ft({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function v({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const L2=v({name:"CloseX24Icon",svgTemplate:u`
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
    `}),P2=v({name:"Element16Icon",svgTemplate:u`
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
    `});const N2=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),q2=p`
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
`,kd=v({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${q2}
        </style>
        ${N2.svgTemplate}
    `}),O2=v({name:"Options24Icon",svgTemplate:u`
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
    `}),xd=v({name:"StatusFailure24Icon",svgTemplate:u`
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
    `});var yr;(function(e){e.Loading="loading",e.Error="error"})(yr||(yr={}));const $t=Cr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:Q(),imageError:Q()},styles:({hostClasses:e})=>p`
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
                  <slot class="status-wrapper" name=${yr.Error}>
                      <${ne.assign({icon:xd})} class="error"></${ne}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                    <slot class="status-wrapper" name=${yr.Loading}>
                        <${ne.assign({icon:kd})}></${ne}>
                    </slot>
                `;return u`
            ${Me(!!a,a)}
            <img
                class=${ve({hidden:!!a})}
                ${T("load",async()=>{e._debugLoadDelay&&await Ri(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${T("error",async s=>{e._debugLoadDelay&&await Ri(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function B2(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function ra({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ra({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Sd({value:e,allowed:t,blocked:r}){const n=t?ra({input:e,matcher:t}):!0,o=r?ra({input:e,matcher:r}):!1;return n&&!o}function Td(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Sd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function D2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=B2(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Sd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=Td({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const eo=Cr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Q(),inputBlocked:Q()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Co["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${bd};
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
                ${fe};
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
                ${Re};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${fe};
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
                    ${St["vira-interaction-animation-duration"].value};
            }

            label {
                ${fe};
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

            ${yd({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${fe};
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
                ${Re};
            }

            .close-x-button {
                ${fe};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Td({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${ne.assign({icon:e.icon})} class="left-side-icon"></${ne}>
              `:"",s=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${Me(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${on(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${T("input",l=>{D2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Me(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${ne.assign({icon:L2})}></${ne}>
                        </button>
                    `)}
                ${Me(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});Cr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:Q()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Do(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${T("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:He,defineElementNoInputs:eb}=Ra(),Ne=He()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
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
                ${T("click",i=>{(!e.router||Do(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new So(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function _2(e,t){return e.entry.entryType===me.Root?!1:!!(e.entry.entryType===me.Page||yt(t,e.fullUrlBreadcrumbs.slice(0,-1))||yt(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const lt=He()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
            ${Ne.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!_2(r,e.selectedPath))return;const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${Ne.assign({router:e.router,route:{paths:[$e.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ve({"title-row":!0,selected:e.selectedPath?yt(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Me(fr(r,me.ElementExample),u`
                                    <${ne.assign({icon:P2})}></${ne}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ne}>
                </li>
            `});return u`
            <${Ne.assign({route:br,router:e.router})}>
                <slot name=${et.NavHeader}>Book</slot>
            </${Ne}>
            <ul>
                ${t}
            </ul>
        `}});async function R2(e){await Hi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await gf(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Lt=He()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(Y(e.message,"array")?e.message:[e.message]).map(r=>u`
                <p>${r}</p>
            `)}}),un=He()({tagName:"book-page-controls",events:{controlValueChange:Q()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
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

        ${eo} {
            height: 24px;
            max-width: 128px;
        }

        ${ne}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===O.Hidden)return"";const a=H2(e.currentValues[n],o,s=>{const l=Y(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${Me(i===0,u`
                                <${ne.assign({icon:O2})}
                                    class="options-icon"
                                ></${ne}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function H2(e,t,r){return er(t,O.Hidden)?"":er(t,O.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${T("input",n=>{const o=Mn(n,HTMLInputElement);r(o.checked)})}
            />
        `:er(t,O.Color)?u`
            <input
                type="color"
                .value=${e}
                ${T("input",n=>{const o=Mn(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,O.Text)?u`
            <${eo.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${T(eo.events.valueChange,n=>{r(n.detail)})}
            ></${eo}>
        `:er(t,O.Number)?u`
            <input
                type="number"
                .value=${e}
                ${T("input",n=>{const o=Mn(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,O.Dropdown)?u`
            <select
                .value=${e}
                ${T("input",n=>{const o=Mn(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const ql=He()({tagName:"book-breadcrumbs",styles:p`
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
                <${Ne.assign({route:{hash:void 0,search:void 0,paths:[$e.Book,...a]},router:e.router})}>
                    ${r}
                </${Ne}>
                ${s}
            `}):u`
                &nbsp;
            `}}),fi=He()({tagName:"book-breadcrumbs-bar",styles:p`
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
            ${Me(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${ql.assign({currentRoute:e.currentRoute,router:e.router})}></${ql}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${T("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Ri(200),n.value===o&&(n.value?t(new So({paths:[$e.Search,encodeURIComponent(n.value)]})):t(new So(br)))})}
            />
        `}}),Ol=He()({tagName:"book-entry-description",styles:p`
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
            `)}}),Bl=He()({tagName:"book-page-wrapper",styles:p`
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

        ${Ne} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[$e.Book,...e.pageNode.fullUrlBreadcrumbs],n=Jc(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ne.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ne}>
                    ${n?u`
                              <${Lt.assign({message:n.message})}></${Lt}>
                          `:u`
                              <${Ol.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ol}>
                              <${un.assign({config:e.pageNode.entry.controls,currentValues:Fa(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${un}>
                          `}
                </div>
            </div>
        `}}),Bn=He()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[$e.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${Ne.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ne}>
        `}}),Dl=Symbol("unset-internal-state"),_l=He()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Dl},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Jc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Dl&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${Me(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${Lt.assign({message:`${t.elementExampleNode.entry.title} failed: ${Sr(n)}`})}></${Lt}>
            `}},options:{allowPolymorphicState:!0}}),Rl=He()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Bn} {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Bn} {
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${Bn.assign(ef(e,["currentPageControls"]))}></${Bn}>
                <${_l.assign(e)}></${_l}>
            </div>
        `}});function Cd(e,t,r,n){const o=zi(r,n),i=[];if(o){const a=Cd(e,t,o,n);a&&i.push(a)}if(fr(r,me.Page)&&!e.includes(r)){const a=Fa(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:Ct(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function F2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=Es(e,1)?Cd(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&Es(e,1)?u`
                  <${un.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${un}>
              `:te,l=Hf(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(fr(c,me.Page))return u`
                    <${Bl.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Bl}>
                `;if(fr(c,me.ElementExample)){const f=Fa(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${Rl.assign({elementExampleNode:c,currentPageControls:f,router:r})}
                        class="inline-entry"
                    ></${Rl}>
                `}else return fr(c,me.Root)?te:u`
                    <${Lt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Lt}>
                `});return[s,l]}const nr=He()({tagName:"book-entry-display",styles:p`
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

        ${fi} {
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
    `,events:{loadingRender:Q()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Zi(e.currentRoute.paths),a=F2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${fi.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${fi}>

            ${Me(e.showLoading,u`
                    <div
                        ${Us(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${ne.assign({icon:kd})}></${ne}>
                    </div>
                    ${Me(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${et.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${Us(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${et.Footer}></slot>
                `)}
        `}});function V2(e,t,r){const n=Hl(e,t);if(n.length)return n;r(br);const o=Hl(e,br.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Hl(e,t){return e.filter(r=>pf({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const mi=Nu()({tagName:"element-book-app",events:{pathUpdate:Q()},stateInitStatic:{currentRoute:br,router:void 0,loading:!0,colors:{config:void 0,theme:Pl(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
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

        ${nr} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${lt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Fl(e,Zi(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,f,m,g,w,k,$;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const C=a(x);return!yt(e.currentRoute,C)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(Nt).join(" - "))}function c(x){if(!s(x))return;const C=a(x);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!yt(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!yt(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const z=U1(t.internalRouterConfig.basePath);n({router:z}),z.addRouteListener(!0,ae=>{n({currentRoute:ae})})}else!((f=t.internalRouterConfig)!=null&&f.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!yt(x,(m=e.colors)==null?void 0:m.config)){const z=Pl(x);n({colors:{config:x,theme:z}}),J1(r,z)}const C=t._debug??!1,D=I1({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Du(D.tree,{children:(w=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:w.children,controls:t.globalValues})}}));const Z=Zi(e.currentRoute.paths),he=(Z?D1({flattenedNodes:D.flattenedNodes,searchQuery:Z}):void 0)??V2(D.flattenedNodes,e.currentRoute.paths,c);l((k=he[0])==null?void 0:k.entry.title);const ue=($=e.treeBasedControls)==null?void 0:$.controls;return ue?(t._debug&&console.info({currentControls:ue}),u`
                <div
                    class="root"
                    ${T(So,async z=>{const ae=z.detail;if(!s(ae))return;if(n({loading:!0}),c(ae),!(r.shadowRoot.querySelector(lt.tagName)instanceof lt))throw new Error(`Failed to find child '${lt.tagName}'`);Fl(r,Z,e.currentRoute)})}
                    ${T(un.events.controlValueChange,z=>{if(!e.treeBasedControls)return;const ae=P1(ue,z.detail.fullUrlBreadcrumbs,z.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ae}})})}
                >
                    <${lt.assign({flattenedNodes:D.flattenedNodes,router:e.router,selectedPath:Z?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${et.NavHeader}
                            slot=${et.NavHeader}
                        ></slot>
                    </${lt}>
                    <${nr.assign({controls:ue,currentNodes:he,currentRoute:e.currentRoute,debug:C,originalTree:D.tree,router:e.router,showLoading:e.loading})}
                        ${T(nr.events.loadingRender,async z=>{await Hi();const ae=r.shadowRoot.querySelector(nr.tagName);ae?ae.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${nr.tagName}' for scrolling.`),await Hi(),n({loading:!z.detail})})}
                    >
                        <slot
                            name=${et.Footer}
                            slot=${et.Footer}
                        ></slot>
                    </${nr}>
                </div>
            `):u`
                    <${Lt.assign({message:"Failed to generate page controls."})}></${Lt}>
                `}catch(x){return console.error(x),u`
                <p class="error">${Sr(x)}</p>
            `}}});async function Fl(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(lt.tagName);if(!(n instanceof lt))throw new Error(`Failed to find child '${lt.tagName}'`);await R2(n)}function j2(e,t){return e.includes(t)}function z2(e,t){return e.map(t)}function yn(e){return!!e}function Md(e,t){return e.match(t)??[]}function Z2(e){return e.replace(/,/g,"")}function W2(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var $r;(function(e){e.Upper="upper",e.Lower="lower"})($r||($r={}));function U2(e){return e.toLowerCase()!==e.toUpperCase()}function Vl(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!U2(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===$r.Upper&&o!==o.toUpperCase())return!1;if(t===$r.Lower&&o!==o.toLowerCase())return!1}return!0}function na(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Vl(a,$r.Lower,{blockNoCaseCharacters:!0})||Vl(s,$r.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function dn(e,t){return e.split(t)}const G2=String(NaN);function Ad(e){if(typeof e=="string"&&isNaN(Number(e)))return G2;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=Md(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(d=>d.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function Y2(e){return typeof e=="number"?e:Number(typeof e=="string"?Z2(e):e)}function J2(e){return String(e).includes("e")}function K2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Jr({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}var jl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(jl||(jl={}));const X2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function to(e,t){return e?X2.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ua(e){return!!e&&typeof e=="object"}function nt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Q2(e){return nt(e).filter(t=>isNaN(Number(t)))}function ep(e,t){return nt(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function oa(e,t){return ep(e,r=>!t.includes(r))}function Yt(e,t){let r=!1;const n=nt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(nt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function tp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Ed=tp();function rp({min:e,max:t}){const{min:r,max:n}=K2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Ed.getRandomValues(s),l=s.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%o}function np(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Ed.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const op="%",ip="px";function lr(e){return Ga({value:e,suffix:ip})}function pi(e){return Ga({value:e,suffix:op})}function Ga({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const gi="://";function ap(...e){const t=e.join("/"),[r,n=""]=t.includes(gi)?t.split(gi):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,d)=>{if(i)return s;const f=d[c+1];let m=l;const g=!l.includes("?")&&(f==null?void 0:f.startsWith("?"));if(f!=null&&f.startsWith("?")||g){i=!0;let w=!1;const k=d.slice(g?c+2:c+1).reduce(($,x)=>(x.includes("#")&&(w=!0),w?$.concat(x):[$,x].join("&")),"");m=[l,f,k].join("")}return s.concat(m)},[]);return[r,r?gi:"",a.join("/")].join("")}const sp=["k","M","B","T","P","E","Z","Y"];function Ya({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function lp(e,t,r){const[n,o]=dn(e,"."),i=Ad(n),a=Md(i,/,/g).length,s=t[a-1],[l,c]=dn(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Ya({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const zl=3;function cp({input:e,maxLength:t}){const r=String(e),[n,o]=dn(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=dn(n,"."),d=i.length+zl;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Ya({afterDot:c,beforeDot:l,maxLength:t-i.length+zl}),s].join("")}function up(e,t){const[r,n]=dn(Ad(e),".");if(r.length<=t)return Ya({beforeDot:r,afterDot:n,maxLength:t})}function dp(e,{customSuffixes:t=sp,maxLength:r=6}={}){const n=Y2(e);if(isNaN(n)||n===1/0)return String(n);if(J2(n))return cp({input:n,maxLength:r});const o=String(n),i=up(o,r);return i??lp(o,t,r)}const Id=Symbol("and"),Ja=Symbol("or"),Ld=Symbol("exact"),Pd=Symbol("enum"),Nd=Symbol("unknown"),qd=Symbol("indexed-keys"),Od="__vir__shape__definition__key__do__not__use__in__actual__objects";function hp(e){return to(e,Od)}const Bd="__vir__shape__specifier__key__do__not__use__in__actual__objects",fp=[Id,Ja,Ld,Pd,Nd,qd];function Ke(...e){return yp(e,Ja)}function mp(e){return Mr(e,qd)}function pp(e){return Mr(e,Ja)}function gp(e){return Mr(e,Id)}function wp(e){return Mr(e,Ld)}function vp(e){return Mr(e,Pd)}function bp(e){return Mr(e,Nd)}function Mr(e,t){const r=Dd(e);return!!r&&r.specifierType===t}function yp(e,t){return{[Bd]:!0,specifierType:t,parts:e}}function Dd(e){if(Ua(e)&&to(e,Bd)){if(!to(e,"parts")||!Y(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!to(e,"specifierType")||!j2(fp,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function ia(e,t=!1){return ro(e)}function ro(e){const t=Dd(e);if(t){if(pp(t)||wp(t))return ro(t.parts[0]);if(gp(t))return t.parts.reduce((r,n)=>Object.assign(r,ro(n)),{});if(vp(t))return Object.values(t.parts[0])[0];if(mp(t))return{};if(bp(t))return t.parts[0]??{};throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return hp(e)?ia(e.shape):e instanceof RegExp?e:Y(e,"array")?e.map(ro):Ua(e)?Yt(e,(r,n)=>ia(n)):e}function $p(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:ia(e),[Od]:!0}}const h=ft({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),V=Yt(h,(e,t)=>r=>q(`var(${t.name}, ${r})`)),kp=v({name:"Copy16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${h["toniq-icon-fill-color"].value}
            stroke=${h["toniq-icon-stroke-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M11 6V4.3c0-.7-.6-1.3-1.3-1.3H4.3C3.6 3 3 3.6 3 4.3v5.4c0 .7.6 1.3 1.3 1.3H6"
            ></path>
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M14 7.3c0-.7-.6-1.3-1.3-1.3H7.3C6.6 6 6 6.6 6 7.3v5.4c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3V7.3Z"
            ></path>
        </svg>
    `}),xp=v({name:"ExternalLink16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M7 4H4.3C3.6 4 3 4.6 3 5.3v6.4c0 .7.6 1.3 1.3 1.3h6.4c.7 0 1.3-.6 1.3-1.3V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `}),Tt=v({name:"InfoCircle16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
            />
        </svg>
    `}),Sp=v({name:"ArrowBarUp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M4 20h16" />
        </svg>
    `}),Tp=v({name:"ArrowForwardUp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4"
            />
        </svg>
    `}),Ka=v({name:"ArrowLeft24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5 12h14M5 12l6 6m-6-6 6-6"
            />
        </svg>
    `}),Cp=v({name:"ArrowLoopLeft24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3"
            />
        </svg>
    `}),Mp=v({name:"ArrowLoopRight24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3"
            />
        </svg>
    `}),Xa=v({name:"ArrowRight24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5 12h14m-6 6 6-6m-6-6 6 6"
            />
        </svg>
    `}),_d=v({name:"ArrowsSort24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4"
            />
        </svg>
    `}),Ap=v({name:"ArrowsSortAscending24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5 19 19 5m0 6V5h-6"
            />
        </svg>
    `}),Ep=v({name:"ArrowsSortDescending24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m5 5 14 14m0-6v6h-6"
            />
        </svg>
    `}),Ip=v({name:"Bell24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M4 18h16m-2 0v-7.5C18 6.9 15.3 4 12 4s-6 3-6 6.5V18m7.9-13.7a2 2 0 0 0-3.8 0M10 18v1a2 2 0 1 0 4 0v-1"
            />
        </svg>
    `}),Lp=v({name:"Bucket24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M7 9a5 5 0 0 1 5-5 5 5 0 0 1 5 5"
                fill="none"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m19 9-2 9c-.2 1.2-1 2-2 2H9c-1 0-1.8-.8-2-2L5 9h14Z"
            />
        </svg>
    `}),Pp=v({name:"BuildingStore24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5 10.827c.313.112.65.173 1 .173 1.646 0 3-1.354 3-3 0 1.646 1.354 3 3 3s3-1.354 3-3c0 1.646 1.354 3 3 3 .35 0 .687-.061 1-.173V21H5V10.827Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9 21v-4c0-1.1.9-2 2-2h2c1.097 0 2 .903 2 2v4"
            />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M3 21h18" />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M21 7v1c0 1.646-1.354 3-3 3s-3-1.354-3-3c0 1.646-1.354 3-3 3S9 9.646 9 8c0 1.646-1.354 3-3 3S3 9.646 3 8V7"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m3 7 2-4h14l2 4H3Z"
            />
        </svg>
    `}),Np=v({name:"CalendarEvent24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `}),qp=v({name:"Cash24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),Op=v({name:"Chain24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m11.181 12.944 1.356 1.138c.74.621 1.845.525 2.466-.215l4.178-4.98a1.75 1.75 0 0 0-.216-2.465l-2.681-2.25a1.751 1.751 0 0 0-2.466.216l-2.089 2.49"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m12.819 11.056-1.356-1.138a1.751 1.751 0 0 0-2.466.215l-4.178 4.98a1.75 1.75 0 0 0 .216 2.465l2.681 2.25c.74.621 1.845.524 2.466-.216l2.089-2.49"
            />
        </svg>
    `}),Rd=v({name:"CheckMark24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),Hd=v({name:"ChevronDown24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m6 9 6 6 6-6"
            />
        </svg>
    `}),Bp=v({name:"ChevronUp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m6 15 6-6 6 6"
            />
        </svg>
    `}),Dp=v({name:"Circle24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                r="9"
                cx="12"
                cy="12"
            />
        </svg>
    `}),Fd=v({name:"CircleDot24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${h["toniq-icon-stroke-color"].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `}),_p=v({name:"CirclePlus24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6"
            />
        </svg>
    `}),Rp=v({name:"CircleWavyCheck24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `}),Hp=v({name:"Clock24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 7v5l3 3"
                fill="none"
            />
        </svg>
    `}),Vd=v({name:"Code24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                stroke-width=${h["toniq-icon-stroke-width"].value}
            />
        </svg>
    `}),jd=v({name:"Copy24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),Fp=v({name:"CreateFile24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `}),Vp=v({name:"DotsVertical24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),jp=v({name:"Download24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4"
            />
        </svg>
    `}),zp=v({name:"Edit24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `}),zd=v({name:"ExternalLink24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 14 20 4m-5 0h5v5"
            />
        </svg>
    `}),Zp=v({name:"Filter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `}),Wp=v({name:"Gear24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5.74 10.25c.3-1.07.86-2.03 1.62-2.8L6.2 4.95l2.6-1.5 1.58 2.25a6.53 6.53 0 0 1 3.24 0l1.58-2.24 2.6 1.5-1.16 2.5a6.49 6.49 0 0 1 1.62 2.8l2.74.24v3l-2.74.25a6.49 6.49 0 0 1-1.62 2.8l1.16 2.5-2.6 1.5-1.58-2.25a6.53 6.53 0 0 1-3.24 0L8.8 20.54l-2.6-1.5 1.16-2.5a6.49 6.49 0 0 1-1.62-2.8L3 13.5v-3l2.74-.25ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            />
        </svg>
    `}),Up=v({name:"Geometry24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `}),Gp=v({name:"GridDots24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Yp=v({name:"Heart24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `}),aa=v({name:"Infinity24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `}),Jp=v({name:"Info24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                fill="none"
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 11.5v5"
            />
        </svg>
    `}),Kp=v({name:"LayersLinked24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `}),Xp=v({name:"LayoutGrid24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `}),Qp=v({name:"Lifebuoy24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m14.8 14.8 3.5 3.5m-9.1-3.5-3.5 3.5m0-12.6 3.5 3.5m9.2-3.5-3.6 3.5"
                fill="none"
            />
        </svg>
    `}),eg=v({name:"List24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
        </svg>
    `}),tg=v({name:"ListDetails24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9 5c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V5Zm0 10c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-4Z"
            />
        </svg>
    `}),rg=v({name:"Loader24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),Qa=v({name:"LoaderAnimated24Icon",svgTemplate:u`
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
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),ng=v({name:"Lock24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${h["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"
            />
        </svg>
    `}),og=v({name:"LockOpen24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${h["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V6a4 4 0 0 1 4-4 4 4 0 0 1 3.8 2.8"
            />
        </svg>
    `}),ig=v({name:"Menu24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    `}),ag=v({name:"Paper24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `}),sg=v({name:"People24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `}),lg=v({name:"Person24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${h["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke="none"
                fill=${h["toniq-icon-stroke-color"].value}
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
                stroke="none"
                fill=${h["toniq-icon-stroke-color"].value}
                d="M5.6 18.3A7.2 7.2 0 0 1 12 14c2.8 0 5.2 1.8 6.4 4.3a9 9 0 0 1-12.8 0Z"
            />
        </svg>
    `}),cg=v({name:"Photo24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M15 8h0"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="m4 15 4-4c1-.9 2-.9 3 0l5 5m-2-2 1-1c1-.9 2-.9 3 0l2 2"
            />
        </svg>
    `}),ug=v({name:"Refresh24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M18.3 15a7 7 0 1 1 .4-5"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19 5v5h-5"
            />
        </svg>
    `}),Zd=v({name:"Rocket24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Wd=v({name:"Search24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6"
            />
        </svg>
    `}),dg=v({name:"Send24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `}),hg=v({name:"ShoppingCart24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M6 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M17 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m6 5 14 1-1 7H6"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M17 17H6V3H4"
            />
        </svg>
    `}),fg=v({name:"Social24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `}),mg=v({name:"Square24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${h["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
        </svg>
    `}),Zl={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`},X={interaction:p`var(${Zl.interactionDuration}, 84ms)`,pretty:p`var(${Zl.prettyDuration}, 300ms)`};function wi(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const pg=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},r={...e,foregroundColor:p`#ACADAD`},n={...e,foregroundColor:p`#D6D6D6`},o={...t},i={...t,foregroundColor:p`#00A876`},a={...t,foregroundColor:p`#1D6852`},s={...n},l={...e,foregroundColor:p`#EAFBF7`},c={...e,backgroundColor:p`#D2EEFA`},d=wi(o),f=wi(i),m=wi(a),g=m,w={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},k={...w,foregroundColor:p`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:d,accentPrimaryHover:f,accentPrimaryActive:m,accentSecondary:w,accentTertiary:k}})(),Ud=pg;function Wl(e,t){return q(`--toniq-${na(e)}-${na(t)}`)}const es=Yt(Ud,e=>({backgroundColor:Wl(e,"backgroundColor"),foregroundColor:Wl(e,"foregroundColor")}));function Ue(e,t){const r=Ud[e][t],n=es[e][t];return p`var(${n}, ${r})`}const b=Yt(es,e=>({foregroundColor:Ue(e,"foregroundColor"),backgroundColor:Ue(e,"backgroundColor")}));function F(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Jt=p`
    pointer-events: none;
    opacity: 0.3;
    ${Re};
`;function Ot({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=q(lr(n+r+t));return p`
        ${q(e)}::after {
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
    `}const Gd={toniqFont:{"font-family":p`'Rubik', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`48px`,"font-size":p`32px`},h3Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}},gg=Yt(Gd,(e,t)=>{const r=q(na(e.replace(/Font$/,"")));return Yt(t,o=>{const i=q(o);return p`--toniq-font-${r}-${i}`})});function Xe(e){const t=gg[e],r=Gd[e],n=nt(t).map(o=>{const i=r[o],a=t[o];return p`
            ${q(o)}: var(${a}, ${i});
        `});return q(n.join(`
`))}const J=(()=>{const e=p`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
        ${Xe("toniqFont")};
    `,t=p`
        ${e};
        ${Xe("normalWeightFont")};
    `,r=p`
        ${e};
        ${Xe("boldFont")};
    `,n=p`
        ${e};
        ${Xe("extraBoldFont")};
    `,o=p`
        ${e};
        ${Xe("paragraphFont")};
        ${t};
    `,i=p`
        ${e};
        ${o};
        ${r};
    `,a=p`
        ${e};
        ${Xe("labelFont")};
        ${t};
    `,s=p`
        ${a};
        ${r};
    `,l=p`
        ${Xe("h1Font")};
        ${n};
    `,c=p`
        ${Xe("h2Font")};
        ${r};
    `,d=p`
        ${Xe("h3Font")};
        ${r};
    `,f=p`
        ${Xe("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:f}})(),Mo={popupShadow:p`
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
    `};function wg(e,t=!0){const r=q(e),n=e===":host"?p`
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
            ${Mo.popupShadow};
        }

        ${o}
    `}const vg=v({name:"SquareCheck24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${h["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),no=v({name:"Trash24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M9 7V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v3"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M4 7h16M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 11v6"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill="none"
                d="M14 11v6"
            />
        </svg>
    `}),bg=v({name:"Upload24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4"
            />
        </svg>
    `}),yg=v({name:"Wallet24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M4 8V6c0-2 2-2 2-2h10c.6 0 1 .4 1 1v3"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19 12V9c0-.6-.4-1-1-1H6S4 8 4 6v12c0 1 1 2 2 2h12c.6 0 1-.4 1-1v-2"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M20 12v4h-4a2 2 0 0 1-2-2c0-1.1.9-2 2-2h4"
            />
        </svg>
    `}),$g=v({name:"WorldUpload24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M21 12c0-5-4-9-9-9s-9 4-9 9 4 9 9 9M3.6 9h16.8M3.6 15H12m-.4-12a17 17 0 0 0 0 18m.9-18c1.7 2.7 2.5 5.8 2.5 9"
            />
            <path
                fill="none"
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `}),kg=v({name:"X24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M18 6 6 18M6 6l12 12"
            />
        </svg>
    `}),xg=v({name:"Folder48Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M38 38c2 0 4-2 4-4V18c0-2-2-4-4-4H24l-6-6h-8c-2 0-4 2-4 4v22c0 2 2 4 4 4h28Z"
            />
        </svg>
    `}),Yd=v({name:"FolderOff48Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M13.9 8H18l6 6h14a4 4 0 0 1 4 4v16a4 4 0 0 1-.4 1.7M32.1 38H10a4 4 0 0 1-4-4V11.9"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m6 6 36 36"
            />
        </svg>
    `}),Sg=v({name:"Kyc48Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${V["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${V["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${V["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),Jd=v({name:"Api64Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${h["toniq-icon-fill-color"].value}
                d="m32 3 26 12.5v31L32 61 6 46.5v-31L32 3Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M20.6 25.1a6 6 0 0 1 8.4 2l-10.4 6.4a6 6 0 0 1 2-8.4Zm15.7 16a4.5 4.5 0 0 1-6.3 0l6.3-6.3a4.5 4.5 0 0 1 0 6.3ZM58 15.5l-18.2 8.7M6 15.5l4 1.5c5 1.9 8.4 5.7 10.3 8.3M32 61V50.3M58 29a14 14 0 0 1-21.5 11.9m-8.3-4.4 3.2 3.2m.4-6.7 3.1 3.2"
            />
        </svg>
    `}),Tg=v({name:"CircleDashes64Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M19.1 33.8A13 13 0 0 1 32 19c2 0 3.8.4 5.4 1.2m7.5 10A13 13 0 0 1 32 45c-2 0-3.8-.4-5.4-1.2"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M6 31.3A26 26 0 0 1 33.7 6m12 3.7a26 26 0 0 1 8 36.6M44.3 55A25.9 25.9 0 0 1 8.7 43.5"
            />
        </svg>
    `}),Cg=v({name:"Rocket64Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${h["toniq-icon-stroke-color"].value}
            fill=${h["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M57.7 6.7c0-.2-.2-.4-.4-.4-6.8-1.7-22.5 4.2-31 12.8a36.8 36.8 0 0 0-4.1 4.9c-2.7-.3-5.3 0-7.5.9C8.4 27.7 6.5 34.9 6 38a1.1 1.1 0 0 0 1.2 1.3l10.2-1 .1 2.2c0 .5.3 1 .7 1.4l3.9 4c.4.3.9.5 1.4.6l2.3.1-1.2 10.2A1.1 1.1 0 0 0 26 58c3.2-.5 10.4-2.4 13.2-8.7 1-2.2 1.2-4.8 1-7.4 1.7-1.3 3.3-2.7 4.8-4.2 8.6-8.5 14.5-23.9 12.8-31Zm-20.4 20a5.4 5.4 0 0 1 3.8-9.1 5.4 5.4 0 0 1 3.8 9.1 5.3 5.3 0 0 1-7.6 0ZM13.7 44c-1.2.2-2.4.7-3.3 1.6C8.2 47.8 8 56 8 56s8.2-.2 10.4-2.4c.9-.9 1.5-2 1.6-3.3"
            />
        </svg>
    `}),Mg=v({name:"CryptoBtc16Icon",svgTemplate:u`
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
    `}),Ag=v({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),Eg=v({name:"CryptoCkBtc16Icon",svgTemplate:u`
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
    `}),Ig=v({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),Kd="0 0 58 58",Xd=Af`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,Lg=v({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${Kd}"
        >
            ${Xd}
        </svg>
    `}),Pg=v({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${Kd}"
        >
            ${Xd}
        </svg>
    `}),Qd=v({name:"BrandDiscord24Icon",svgTemplate:u`
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
    `}),e0=v({name:"BrandDistrikt24Icon",svgTemplate:u`
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
    `}),t0=v({name:"BrandDscvr24Icon",svgTemplate:u`
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
    `}),Ng=v({name:"BrandFacebookLogo24Icon",svgTemplate:u`
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
    `}),qg=v({name:"BrandGoogleLogo24Icon",svgTemplate:u`
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
    `}),Og=v({name:"BrandIcScan24Icon",svgTemplate:u`
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
    `}),r0=v({name:"BrandInstagram24Icon",svgTemplate:u`
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
    `}),Bg=v({name:"BrandInstagramFlat24Icon",svgTemplate:u`
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
    `}),n0=v({name:"BrandMedium24Icon",svgTemplate:u`
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
    `}),Dg=v({name:"BrandNftgeek24Icon",svgTemplate:u`
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
    `}),o0=v({name:"BrandTelegram24Icon",svgTemplate:u`
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
    `}),i0=v({name:"BrandTiktok24Icon",svgTemplate:u`
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
    `}),_g=v({name:"BrandTiktokFlat24Icon",svgTemplate:u`
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
    `}),a0=v({name:"BrandTwitch24Icon",svgTemplate:u`
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
    `}),s0=v({name:"BrandTwitter24Icon",svgTemplate:u`
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
    `}),Rg=v({name:"BioniqRobot100Icon",svgTemplate:u`
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
                fill=${h["toniq-icon-fill-color"].value}
                stroke-width="calc(${h["toniq-icon-stroke-width"].value} * 2)"
                d="m50 89-38.5-3L26 22h48l14.5 64L50 89M23 35.6l-8.5-2.1-6 23 9.2 2.3m59.6-23.2 8.4-2.1 6 23-9.2 2.3"
            />
            <path
                stroke-width="calc(${h["toniq-icon-stroke-width"].value} * 2)"
                d="M39 9.5 42.1 22M61 9.5 57.9 22M28.5 55h43L76 79H24l4.5-24ZM67 55v24m-8-24v24m-9-24v24M33 55v24m8-24v24m4.5-43.5-1-1.5h-13l-1 1.5 7 10h2l6-10Zm9 0 1-1.5h13l1 1.5-7 10h-2l-6-10Z"
            />
        </svg>
    `}),Hg=v({name:"EntrepotLogo144Icon",svgTemplate:u`
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
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `}),vt={"core-16":[kp,xp,Tt],"core-24":[Sp,Tp,Ka,Cp,Mp,Xa,_d,Ap,Ep,Ip,Lp,Pp,Np,qp,Op,Rd,Hd,Bp,Dp,Fd,_p,Rp,Hp,Vd,jd,Fp,Vp,jp,zp,zd,Zp,Wp,Up,Gp,Yp,aa,Jp,Kp,Xp,Qp,eg,tg,rg,Qa,ng,og,ig,ag,sg,lg,cg,ug,Zd,Wd,dg,hg,fg,mg,vg,no,bg,yg,$g,kg],"core-48":[xg,Yd,Sg],"core-64":[Jd,Tg,Cg],cryptocurrencies:[Mg,Ag,Eg,Ig,Lg,Pg],"third-party-brands":[Qd,e0,t0,Ng,qg,Og,r0,Bg,n0,Dg,o0,i0,_g,a0,s0],toniq:[Rg,Hg]},Fg=$p({discord:Ke(void 0,""),distrikt:Ke(void 0,""),dscvr:Ke(void 0,""),instagram:Ke(void 0,""),medium:Ke(void 0,""),telegram:Ke(void 0,""),tikTok:Ke(void 0,""),twitch:Ke(void 0,""),twitter:Ke(void 0,""),website:Ke(void 0,"")}),Vg=Fg.defaultValue,l0={discord:Qd,instagram:r0,telegram:o0,tikTok:i0,distrikt:e0,twitch:a0,dscvr:t0,medium:n0,twitter:s0,website:Vd},Ul="toniq-",{defineElement:oe,defineElementNoInputs:jg}=Ra({assertInputs:e=>{if(!e.tagName.startsWith(Ul))throw new Error(`Tag name should start with '${Ul}' but got '${e.tagName}'`)}}),Zt=oe()({tagName:"toniq-bold-space",styles:p`
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
            ${J.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),S=oe()({tagName:"toniq-icon",styles:p`
        :host {
            display: inline-flex;
            ${L["vira-icon-fill-color"].name}: ${h["toniq-icon-fill-color"].value}
            ${L["vira-icon-stroke-color"].name}: ${h["toniq-icon-stroke-color"].value}
            ${L["vira-icon-stroke-width"].name}: ${h["toniq-icon-stroke-width"].value}
        }

        ${ne} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return u`
            <${ne.assign(e)}></${ne}>
        `}}),sa=p`8px`;var Ao=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(Ao||{});const de=oe()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Re};
        }

        :host(:hover) button {
            ${F(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${F(b.accentPrimaryActive)};
        }

        button {
            ${fe};
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
            border-radius: ${sa};
            ${F(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                border-color ${X.interaction};
        }

        ${Ot({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${F(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${F(b.pagePrimary)};
            border-color: ${b.accentPrimary.backgroundColor};
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
                  <${S.assign({icon:e.icon})}
                      class="icon-template"
                  ></${S}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function zg(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=ts(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(f=>i==="+"?f>l:f<l).sort((f,m)=>i==="+"?f-m:m-f);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function Zg(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let w=parseFloat(m);return/%/.test(m)&&(w/=100,w*=g),w}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),f=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:f}}}function Wg(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function c0(e){let t=[];for(const r of e.children)t=t.concat(r,c0(r));return t}function Ug(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=c0(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const f=d.getBoundingClientRect();if(t&&!Wg(r,f,a))continue;const m=window.getComputedStyle(d);let[g,w]=m.getPropertyValue("scroll-snap-align").split(" ");typeof w>"u"&&(w=g);const k=i==="x"?w:g,$=f[s]-r[s]+e[c];switch(k){case"none":break;case"start":n[i].start.push($);break;case"center":n[i].center.push($+f[l]/2);break;case"end":n[i].end.push($+f[l]);break}}}return n}function ts(e){const t=e.getBoundingClientRect(),r=Zg(e),n=Ug(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Gl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Gl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Gl(e){return Array.from(new Set(e))}const oo="templates-container",Gg=4e3;var la=(e=>(e.Default="default",e.Banner="banner",e))(la||{});const xe=oe()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${I2(`.${oo}`)}

        .${q(oo)} {
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

        .arrow ${S} {
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

        .arrow ${S}:hover {
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{vi({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Gg)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Yl(t.scrollSnapPositions,0),i=Yl(t.scrollSnapPositions,-1);return u`
            <div>
                <div
                    class="arrow left ${ve({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${S.assign({icon:Ka})}
                        ${T("click",()=>{vi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${S}>
                </div>
                <div
                    ${on(()=>{r({scrollSnapPositions:ts(ca(n)).x})})}
                    class=${oo}
                    ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>u`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${ve({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${S.assign({icon:Xa})}
                        ${T("click",()=>{vi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${S}>
                </div>
            </div>
        `}});function Yl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function ca(e){const t=e.shadowRoot.querySelector(`.${oo}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function vi({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=ca(e),i=o.clientWidth,a=ts(ca(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const f=Yg(e,t),m=Jl(o.scrollLeft,a,!1),g=t==="right"?1:-1,w=(o.clientWidth-f*3)*g,k=Jl((m||0)+w,a,!0);t==="right"&&k>m?o.scrollTo({behavior:"smooth",left:k}):t==="left"&&k<m?o.scrollTo({behavior:"smooth",left:k}):zg(o,t)}}function Yg(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Jl(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const mt=oe()({tagName:"toniq-checkbox",events:{checkedChange:Q()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ue("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ue("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ue("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ue("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ue("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                opacity ${X.interaction};
            border-radius: 8px;
        }

        button {
            ${fe};
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
            ${Re};
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

        ${Ot({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
                <${S.assign({icon:Rd})}
                    class="check-mark ${ve({hidden:!e.checked})}"
                ></${S}>
            </span>
        `,o=u`
            <slot
                class=${ve({label:!0,checked:e.checked})}
            >
                <span
                    class=${ve({label:!0,checked:e.checked})}
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
        `}});var ua=(e=>(e.Default="default",e.Secondary="secondary",e))(ua||{});const bi=oe()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${J.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${F(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${F(b.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${S.assign({icon:e.icon})}></${S}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}});function Jg(e,t){return e.includes(t)}function u0(e){return!!e}var Kl;(function(e){e.Upper="upper",e.Lower="lower"})(Kl||(Kl={}));function da(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}var Xl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Xl||(Xl={}));const Kg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function mr(e,t){return e?Kg.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Xg(e){return e?e instanceof Error?e.message:mr(e,"message")?String(e.message):String(e):""}function Qg(e){return e instanceof Error?e:new Error(Xg(e))}function Pt(e){return!!e&&typeof e=="object"}function Kt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ew(e){return Kt(e).map(t=>e[t])}function tw(e){return Object.fromEntries(e)}function Ql({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const ec="Failed to compare objects using JSON.stringify";function tc(e,t,r){return Ql({source:e,errorHandler(n){if(r)return"";throw n}})===Ql({source:t,errorHandler(n){if(r)return"";throw n}})}function d0(e,t,r={}){try{return e===t?!0:Pt(e)&&Pt(t)?tc(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>d0(e[o],t[o])):!1:tc(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Qg(n);throw o.message.startsWith(ec)||(o.message=`${ec}: ${o.message}`),o}}function h0(e,t){return Kt(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function rw(e,t){return h0(e,r=>!t.includes(r))}function nw(e,t){return h0(e,r=>t.includes(r))}function Vo(e,t){let r=!1;const n=Kt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Kt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function ow(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ow();class Xt extends Error{}class iw extends Xt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class aw extends Xt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class sw extends Xt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class dr extends Xt{}class f0 extends Xt{constructor(t){super(`Invalid unit ${t}`)}}class ye extends Xt{}class pt extends Xt{constructor(){super("Zone is an abstract class")}}const y="numeric",Je="short",Ae="long",Eo={year:y,month:y,day:y},m0={year:y,month:Je,day:y},lw={year:y,month:Je,day:y,weekday:Je},p0={year:y,month:Ae,day:y},g0={year:y,month:Ae,day:y,weekday:Ae},w0={hour:y,minute:y},v0={hour:y,minute:y,second:y},b0={hour:y,minute:y,second:y,timeZoneName:Je},y0={hour:y,minute:y,second:y,timeZoneName:Ae},$0={hour:y,minute:y,hourCycle:"h23"},k0={hour:y,minute:y,second:y,hourCycle:"h23"},x0={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:Je},S0={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:Ae},T0={year:y,month:y,day:y,hour:y,minute:y},C0={year:y,month:y,day:y,hour:y,minute:y,second:y},M0={year:y,month:Je,day:y,hour:y,minute:y},A0={year:y,month:Je,day:y,hour:y,minute:y,second:y},cw={year:y,month:Je,day:y,weekday:Je,hour:y,minute:y},E0={year:y,month:Ae,day:y,hour:y,minute:y,timeZoneName:Je},I0={year:y,month:Ae,day:y,hour:y,minute:y,second:y,timeZoneName:Je},L0={year:y,month:Ae,day:y,weekday:Ae,hour:y,minute:y,timeZoneName:Ae},P0={year:y,month:Ae,day:y,weekday:Ae,hour:y,minute:y,second:y,timeZoneName:Ae};class $n{get type(){throw new pt}get name(){throw new pt}get ianaName(){return this.name}get isUniversal(){throw new pt}offsetName(t,r){throw new pt}formatOffset(t,r){throw new pt}offset(t){throw new pt}equals(t){throw new pt}get isValid(){throw new pt}}let yi=null;class jo extends $n{static get instance(){return yi===null&&(yi=new jo),yi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return F0(t,r,n)}formatOffset(t,r){return Kr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let io={};function uw(e){return io[e]||(io[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),io[e]}const dw={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function hw(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,d]=n;return[a,o,i,s,l,c,d]}function fw(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=dw[i];i==="era"?n[s]=a:I(s)||(n[s]=parseInt(a,10))}return n}let Dn={};class dt extends $n{static create(t){return Dn[t]||(Dn[t]=new dt(t)),Dn[t]}static resetCache(){Dn={},io={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=dt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return F0(t,r,n,this.name)}formatOffset(t,r){return Kr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=uw(this.name);let[o,i,a,s,l,c,d]=n.formatToParts?fw(n,r):hw(n,r);s==="BC"&&(o=-Math.abs(o)+1);const m=Zo({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let g=+r;const w=g%1e3;return g-=w>=0?w:1e3+w,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let rc={};function mw(e,t={}){const r=JSON.stringify([e,t]);let n=rc[r];return n||(n=new Intl.ListFormat(e,t),rc[r]=n),n}let ha={};function fa(e,t={}){const r=JSON.stringify([e,t]);let n=ha[r];return n||(n=new Intl.DateTimeFormat(e,t),ha[r]=n),n}let ma={};function pw(e,t={}){const r=JSON.stringify([e,t]);let n=ma[r];return n||(n=new Intl.NumberFormat(e,t),ma[r]=n),n}let pa={};function gw(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=pa[o];return i||(i=new Intl.RelativeTimeFormat(e,t),pa[o]=i),i}let Vr=null;function ww(){return Vr||(Vr=new Intl.DateTimeFormat().resolvedOptions().locale,Vr)}let nc={};function vw(e){let t=nc[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,nc[e]=t}return t}function bw(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=fa(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=fa(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function yw(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function $w(e){const t=[];for(let r=1;r<=12;r++){const n=A.utc(2009,r,1);t.push(e(n))}return t}function kw(e){const t=[];for(let r=1;r<=7;r++){const n=A.utc(2016,11,13+r);t.push(e(n))}return t}function _n(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function xw(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Sw{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=pw(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):is(t,3);return le(r,this.padTo)}}}class Tw{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&dt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=fa(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Cw{constructor(t,r,n){this.opts={style:"long",...n},!r&&R0()&&(this.rtf=gw(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Ww(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Mw={firstDay:1,minimalDays:4,weekend:[6,7]};class W{static fromOpts(t){return W.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const a=t||ee.defaultLocale,s=a||(i?"en-US":ww()),l=r||ee.defaultNumberingSystem,c=n||ee.defaultOutputCalendar,d=ga(o)||ee.defaultWeekSettings;return new W(s,l,c,d,a)}static resetCache(){Vr=null,ha={},ma={},pa={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return W.create(t,r,n,o)}constructor(t,r,n,o,i){const[a,s,l]=bw(t);this.locale=a,this.numberingSystem=r||s||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=yw(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=xw(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:W.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,ga(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return _n(this,t,z0,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=$w(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return _n(this,t,U0,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=kw(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return _n(this,void 0,()=>G0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[A.utc(2016,11,13,9),A.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return _n(this,t,Y0,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[A.utc(-40,1,1),A.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new Sw(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Tw(t,this.intl,r)}relFormatter(t={}){return new Cw(this.intl,this.isEnglish(),t)}listFormatter(t={}){return mw(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:H0()?vw(this.locale):Mw}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let $i=null;class we extends $n{static get utcInstance(){return $i===null&&($i=new we(0)),$i}static instance(t){return t===0?we.utcInstance:new we(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new we(Wo(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Kr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Kr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Kr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Aw extends $n{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function bt(e,t){if(I(e)||e===null)return t;if(e instanceof $n)return e;if(Lw(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?jo.instance:r==="utc"||r==="gmt"?we.utcInstance:we.parseSpecifier(r)||dt.create(e)}else return Wt(e)?we.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Aw(e)}let oc=()=>Date.now(),ic="system",ac=null,sc=null,lc=null,cc=60,uc,dc=null;class ee{static get now(){return oc}static set now(t){oc=t}static set defaultZone(t){ic=t}static get defaultZone(){return bt(ic,jo.instance)}static get defaultLocale(){return ac}static set defaultLocale(t){ac=t}static get defaultNumberingSystem(){return sc}static set defaultNumberingSystem(t){sc=t}static get defaultOutputCalendar(){return lc}static set defaultOutputCalendar(t){lc=t}static get defaultWeekSettings(){return dc}static set defaultWeekSettings(t){dc=ga(t)}static get twoDigitCutoffYear(){return cc}static set twoDigitCutoffYear(t){cc=t%100}static get throwOnInvalid(){return uc}static set throwOnInvalid(t){uc=t}static resetCaches(){W.resetCache(),dt.resetCache()}}class Ye{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const N0=[0,31,59,90,120,151,181,212,243,273,304,334],q0=[0,31,60,91,121,152,182,213,244,274,305,335];function Oe(e,t){return new Ye("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function rs(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function O0(e,t,r){return r+(kn(e)?q0:N0)[t-1]}function B0(e,t){const r=kn(e)?q0:N0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function ns(e,t){return(e-t+7)%7+1}function Io(e,t=4,r=1){const{year:n,month:o,day:i}=e,a=O0(n,o,i),s=ns(rs(n,o,i),r);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=n-1,l=hn(c,t,r)):l>hn(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:s,...Uo(e)}}function hc(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,a=ns(rs(n,1,t),r),s=pr(n);let l=o*7+i-a-7+t,c;l<1?(c=n-1,l+=pr(c)):l>s?(c=n+1,l-=pr(n)):c=n;const{month:d,day:f}=B0(c,l);return{year:c,month:d,day:f,...Uo(e)}}function ki(e){const{year:t,month:r,day:n}=e,o=O0(t,r,n);return{year:t,ordinal:o,...Uo(e)}}function fc(e){const{year:t,ordinal:r}=e,{month:n,day:o}=B0(t,r);return{year:t,month:n,day:o,...Uo(e)}}function mc(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new dr("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Ew(e,t=4,r=1){const n=zo(e.weekYear),o=Be(e.weekNumber,1,hn(e.weekYear,t,r)),i=Be(e.weekday,1,7);return n?o?i?!1:Oe("weekday",e.weekday):Oe("week",e.weekNumber):Oe("weekYear",e.weekYear)}function Iw(e){const t=zo(e.year),r=Be(e.ordinal,1,pr(e.year));return t?r?!1:Oe("ordinal",e.ordinal):Oe("year",e.year)}function D0(e){const t=zo(e.year),r=Be(e.month,1,12),n=Be(e.day,1,Lo(e.year,e.month));return t?r?n?!1:Oe("day",e.day):Oe("month",e.month):Oe("year",e.year)}function _0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Be(t,0,23)||t===24&&r===0&&n===0&&o===0,a=Be(r,0,59),s=Be(n,0,59),l=Be(o,0,999);return i?a?s?l?!1:Oe("millisecond",o):Oe("second",n):Oe("minute",r):Oe("hour",t)}function I(e){return typeof e>"u"}function Wt(e){return typeof e=="number"}function zo(e){return typeof e=="number"&&e%1===0}function Lw(e){return typeof e=="string"}function Pw(e){return Object.prototype.toString.call(e)==="[object Date]"}function R0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function H0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Nw(e){return Array.isArray(e)?e:[e]}function pc(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function qw(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function kr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ga(e){if(e==null)return null;if(typeof e!="object")throw new ye("Week settings must be an object");if(!Be(e.firstDay,1,7)||!Be(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Be(t,1,7)))throw new ye("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Be(e,t,r){return zo(e)&&e>=t&&e<=r}function Ow(e,t){return e-t*Math.floor(e/t)}function le(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function wt(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function _t(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function os(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function is(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function kn(e){return e%4===0&&(e%100!==0||e%400===0)}function pr(e){return kn(e)?366:365}function Lo(e,t){const r=Ow(t-1,12)+1,n=e+(t-r)/12;return r===2?kn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Zo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function gc(e,t,r){return-ns(rs(e,1,t),r)+t-1}function hn(e,t=4,r=1){const n=gc(e,t,r),o=gc(e+1,t,r);return(pr(e)-n+o)/7}function wa(e){return e>99?e:e>ee.twoDigitCutoffYear?1900+e:2e3+e}function F0(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Wo(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function V0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new ye(`Invalid unit value ${e}`);return t}function Po(e,t){const r={};for(const n in e)if(kr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=V0(o)}return r}function Kr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${le(r,2)}:${le(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${le(r,2)}${le(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Uo(e){return qw(e,["hour","minute","second","millisecond"])}const Bw=["January","February","March","April","May","June","July","August","September","October","November","December"],j0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Dw=["J","F","M","A","M","J","J","A","S","O","N","D"];function z0(e){switch(e){case"narrow":return[...Dw];case"short":return[...j0];case"long":return[...Bw];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Z0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],W0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],_w=["M","T","W","T","F","S","S"];function U0(e){switch(e){case"narrow":return[..._w];case"short":return[...W0];case"long":return[...Z0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const G0=["AM","PM"],Rw=["Before Christ","Anno Domini"],Hw=["BC","AD"],Fw=["B","A"];function Y0(e){switch(e){case"narrow":return[...Fw];case"short":return[...Hw];case"long":return[...Rw];default:return null}}function Vw(e){return G0[e.hour<12?0:1]}function jw(e,t){return U0(t)[e.weekday-1]}function zw(e,t){return z0(t)[e.month-1]}function Zw(e,t){return Y0(t)[e.year<0?0:1]}function Ww(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],d=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${d} ago`:`in ${s} ${d}`}function wc(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Uw={D:Eo,DD:m0,DDD:p0,DDDD:g0,t:w0,tt:v0,ttt:b0,tttt:y0,T:$0,TT:k0,TTT:x0,TTTT:S0,f:T0,ff:M0,fff:E0,ffff:L0,F:C0,FF:A0,FFF:I0,FFFF:P0};class ge{static create(t,r={}){return new ge(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Uw[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return le(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,w)=>this.loc.extract(t,g,w),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?Vw(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>n?zw(t,g):i(w?{month:g}:{month:g,day:"numeric"},"month"),c=(g,w)=>n?jw(t,g):i(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const w=ge.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(t,w):g},f=g=>n?Zw(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return wc(ge.parseFormat(r),m)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},i=ge.parseFormat(r),a=i.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return wc(i,o(s))}}const J0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ar(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Er(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function Ir(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function K0(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=wt(t[r+o]);return[n,null,r+o]}}const X0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Gw=`(?:${X0.source}?(?:\\[(${J0.source})\\])?)?`,as=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Q0=RegExp(`${as.source}${Gw}`),ss=RegExp(`(?:T${Q0.source})?`),Yw=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Jw=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Kw=/(\d{4})-?(\d{3})/,Xw=K0("weekYear","weekNumber","weekDay"),Qw=K0("year","ordinal"),ev=/(\d{4})-(\d\d)-(\d\d)/,eh=RegExp(`${as.source} ?(?:${X0.source}|(${J0.source}))?`),tv=RegExp(`(?: ${eh.source})?`);function gr(e,t,r){const n=e[t];return I(n)?r:wt(n)}function rv(e,t){return[{year:gr(e,t),month:gr(e,t+1,1),day:gr(e,t+2,1)},null,t+3]}function Lr(e,t){return[{hours:gr(e,t,0),minutes:gr(e,t+1,0),seconds:gr(e,t+2,0),milliseconds:os(e[t+3])},null,t+4]}function xn(e,t){const r=!e[t]&&!e[t+1],n=Wo(e[t+1],e[t+2]),o=r?null:we.instance(n);return[{},o,t+3]}function Sn(e,t){const r=e[t]?dt.create(e[t]):null;return[{},r,t+1]}const nv=RegExp(`^T?${as.source}$`),ov=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function iv(e){const[t,r,n,o,i,a,s,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",m=(g,w=!1)=>g!==void 0&&(w||g&&d)?-g:g;return[{years:m(_t(r)),months:m(_t(n)),weeks:m(_t(o)),days:m(_t(i)),hours:m(_t(a)),minutes:m(_t(s)),seconds:m(_t(l),l==="-0"),milliseconds:m(os(c),f)}]}const av={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ls(e,t,r,n,o,i,a){const s={year:t.length===2?wa(wt(t)):wt(t),month:j0.indexOf(r)+1,day:wt(n),hour:wt(o),minute:wt(i)};return a&&(s.second=wt(a)),e&&(s.weekday=e.length>3?Z0.indexOf(e)+1:W0.indexOf(e)+1),s}const sv=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function lv(e){const[,t,r,n,o,i,a,s,l,c,d,f]=e,m=ls(t,o,n,r,i,a,s);let g;return l?g=av[l]:c?g=0:g=Wo(d,f),[m,new we(g)]}function cv(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const uv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,dv=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,hv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function vc(e){const[,t,r,n,o,i,a,s]=e;return[ls(t,o,n,r,i,a,s),we.utcInstance]}function fv(e){const[,t,r,n,o,i,a,s]=e;return[ls(t,s,r,n,o,i,a),we.utcInstance]}const mv=Ar(Yw,ss),pv=Ar(Jw,ss),gv=Ar(Kw,ss),wv=Ar(Q0),th=Er(rv,Lr,xn,Sn),vv=Er(Xw,Lr,xn,Sn),bv=Er(Qw,Lr,xn,Sn),yv=Er(Lr,xn,Sn);function $v(e){return Ir(e,[mv,th],[pv,vv],[gv,bv],[wv,yv])}function kv(e){return Ir(cv(e),[sv,lv])}function xv(e){return Ir(e,[uv,vc],[dv,vc],[hv,fv])}function Sv(e){return Ir(e,[ov,iv])}const Tv=Er(Lr);function Cv(e){return Ir(e,[nv,Tv])}const Mv=Ar(ev,tv),Av=Ar(eh),Ev=Er(Lr,xn,Sn);function Iv(e){return Ir(e,[Mv,th],[Av,Ev])}const bc="Invalid Duration",rh={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Lv={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...rh},Le=146097/400,or=146097/4800,Pv={years:{quarters:4,months:12,weeks:Le/7,days:Le,hours:Le*24,minutes:Le*24*60,seconds:Le*24*60*60,milliseconds:Le*24*60*60*1e3},quarters:{months:3,weeks:Le/28,days:Le/4,hours:Le*24/4,minutes:Le*24*60/4,seconds:Le*24*60*60/4,milliseconds:Le*24*60*60*1e3/4},months:{weeks:or/7,days:or,hours:or*24,minutes:or*24*60,seconds:or*24*60*60,milliseconds:or*24*60*60*1e3},...rh},jt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Nv=jt.slice(0).reverse();function gt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new B(n)}function nh(e,t){let r=t.milliseconds??0;for(const n of Nv.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function yc(e,t){const r=nh(e,t)<0?-1:1;jt.reduceRight((n,o)=>{if(I(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),jt.reduce((n,o)=>{if(I(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function qv(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class B{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Pv:Lv;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||W.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return B.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new ye(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new B({values:Po(t,B.normalizeUnit),loc:W.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Wt(t))return B.fromMillis(t);if(B.isDuration(t))return t;if(typeof t=="object")return B.fromObject(t);throw new ye(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Sv(t);return n?B.fromObject(n,r):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Cv(t);return n?B.fromObject(n,r):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new ye("need to specify a reason the Duration is invalid");const n=t instanceof Ye?t:new Ye(t,r);if(ee.throwOnInvalid)throw new sw(n);return new B({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new f0(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ge.create(this.loc,n).formatDurationFromString(this,t):bc}toHuman(t={}){if(!this.isValid)return bc;const r=jt.map(n=>{const o=this.values[n];return I(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=is(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},A.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?nh(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t),n={};for(const o of jt)(kr(r.values,o)||kr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return gt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=V0(t(this.values[n],n));return gt(this,{values:r},!0)}get(t){return this[B.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Po(t,B.normalizeUnit)};return gt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return gt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return yc(this.matrix,t),gt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=qv(this.normalize().shiftToAll().toObject());return gt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>B.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of jt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;Wt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Wt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return yc(this.matrix,r),gt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return gt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of jt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const ir="Invalid Interval";function Ov(e,t){return!e||!e.isValid?re.invalid("missing or invalid start"):!t||!t.isValid?re.invalid("missing or invalid end"):t<e?re.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class re{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new ye("need to specify a reason the Interval is invalid");const n=t instanceof Ye?t:new Ye(t,r);if(ee.throwOnInvalid)throw new aw(n);return new re({invalid:n})}static fromDateTimes(t,r){const n=_r(t),o=_r(r),i=Ov(n,o);return i??new re({start:n,end:o})}static after(t,r){const n=B.fromDurationLike(r),o=_r(t);return re.fromDateTimes(o,o.plus(n))}static before(t,r){const n=B.fromDurationLike(r),o=_r(t);return re.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=A.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=A.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return re.fromDateTimes(i,s);if(a){const c=B.fromISO(o,r);if(c.isValid)return re.after(i,c)}else if(l){const c=B.fromISO(n,r);if(c.isValid)return re.before(s,c)}}return re.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r!=null&&r.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?re.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(_r).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(re.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=B.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(re.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:re.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return re.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(re.fromDateTimes(r,l.time)),r=null);return re.merge(o)}difference(...t){return re.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ir}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Eo,r={}){return this.isValid?ge.create(this.s.loc.clone(r),t).formatInterval(this):ir}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ir}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ir}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ir}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:ir}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):B.invalid(this.invalidReason)}mapEndpoints(t){return re.fromDateTimes(t(this.s),t(this.e))}}class jr{static hasDST(t=ee.defaultZone){const r=A.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return dt.isValidZone(t)}static normalizeZone(t){return bt(t,ee.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||W.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||W.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||W.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||W.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||W.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||W.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||W.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return W.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return W.create(r,null,"gregory").eras(t)}static features(){return{relative:R0(),localeWeek:H0()}}}function $c(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(B.fromMillis(n).as("days"))}function Bv(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=$c(l,c);return(d-d%7)/7}],["days",$c]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function Dv(e,t,r,n){let[o,i,a,s]=Bv(e,t,r);const l=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const d=B.fromObject(i,n);return c.length>0?B.fromMillis(l,n).shiftTo(...c).plus(d):d}const cs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},kc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},_v=cs.hanidec.replace(/[\[|\]]/g,"").split("");function Rv(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(cs.hanidec)!==-1)t+=_v.indexOf(e[r]);else for(const o in kc){const[i,a]=kc[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function Ve({numberingSystem:e},t=""){return new RegExp(`${cs[e||"latn"]}${t}`)}const Hv="missing Intl.DateTimeFormat.formatToParts support";function _(e,t=r=>r){return{regex:e,deser:([r])=>t(Rv(r))}}const Fv=String.fromCharCode(160),oh=`[ ${Fv}]`,ih=new RegExp(oh,"g");function Vv(e){return e.replace(/\./g,"\\.?").replace(ih,oh)}function xc(e){return e.replace(/\./g,"").replace(ih," ").toLowerCase()}function je(e,t){return e===null?null:{regex:RegExp(e.map(Vv).join("|")),deser:([r])=>e.findIndex(n=>xc(r)===xc(n))+t}}function Sc(e,t){return{regex:e,deser:([,r,n])=>Wo(r,n),groups:t}}function Rn(e){return{regex:e,deser:([t])=>t}}function jv(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function zv(e,t){const r=Ve(t),n=Ve(t,"{2}"),o=Ve(t,"{3}"),i=Ve(t,"{4}"),a=Ve(t,"{6}"),s=Ve(t,"{1,2}"),l=Ve(t,"{1,3}"),c=Ve(t,"{1,6}"),d=Ve(t,"{1,9}"),f=Ve(t,"{2,4}"),m=Ve(t,"{4,6}"),g=$=>({regex:RegExp(jv($.val)),deser:([x])=>x,literal:!0}),k=($=>{if(e.literal)return g($);switch($.val){case"G":return je(t.eras("short"),0);case"GG":return je(t.eras("long"),0);case"y":return _(c);case"yy":return _(f,wa);case"yyyy":return _(i);case"yyyyy":return _(m);case"yyyyyy":return _(a);case"M":return _(s);case"MM":return _(n);case"MMM":return je(t.months("short",!0),1);case"MMMM":return je(t.months("long",!0),1);case"L":return _(s);case"LL":return _(n);case"LLL":return je(t.months("short",!1),1);case"LLLL":return je(t.months("long",!1),1);case"d":return _(s);case"dd":return _(n);case"o":return _(l);case"ooo":return _(o);case"HH":return _(n);case"H":return _(s);case"hh":return _(n);case"h":return _(s);case"mm":return _(n);case"m":return _(s);case"q":return _(s);case"qq":return _(n);case"s":return _(s);case"ss":return _(n);case"S":return _(l);case"SSS":return _(o);case"u":return Rn(d);case"uu":return Rn(s);case"uuu":return _(r);case"a":return je(t.meridiems(),0);case"kkkk":return _(i);case"kk":return _(f,wa);case"W":return _(s);case"WW":return _(n);case"E":case"c":return _(r);case"EEE":return je(t.weekdays("short",!1),1);case"EEEE":return je(t.weekdays("long",!1),1);case"ccc":return je(t.weekdays("short",!0),1);case"cccc":return je(t.weekdays("long",!0),1);case"Z":case"ZZ":return Sc(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return Sc(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return Rn(/[a-z_+-/]{1,256}?/i);case" ":return Rn(/[^\S\n\r]/);default:return g($)}})(e)||{invalidReason:Hv};return k.token=e,k}const Zv={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Wv(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=Zv[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function Uv(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Gv(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(kr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function Yv(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return I(e.z)||(r=dt.create(e.z)),I(e.Z)||(r||(r=new we(e.Z)),n=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=os(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let xi=null;function Jv(){return xi||(xi=A.fromMillis(1555555555555)),xi}function Kv(e,t){if(e.literal)return e;const r=ge.macroTokenToFormatOpts(e.val),n=lh(r,t);return n==null||n.includes(void 0)?e:n}function ah(e,t){return Array.prototype.concat(...e.map(r=>Kv(r,t)))}function sh(e,t,r){const n=ah(ge.parseFormat(r),e),o=n.map(a=>zv(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=Uv(o),l=RegExp(a,"i"),[c,d]=Gv(t,l,s),[f,m,g]=d?Yv(d):[null,null,void 0];if(kr(d,"a")&&kr(d,"H"))throw new dr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:d,result:f,zone:m,specificOffset:g}}}function Xv(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=sh(e,t,r);return[n,o,i,a]}function lh(e,t){if(!e)return null;const n=ge.create(t,e).dtFormatter(Jv()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>Wv(a,e,i))}const Si="Invalid DateTime",Tc=864e13;function Hn(e){return new Ye("unsupported zone",`the zone "${e.name}" is not supported`)}function Ti(e){return e.weekData===null&&(e.weekData=Io(e.c)),e.weekData}function Ci(e){return e.localWeekData===null&&(e.localWeekData=Io(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Rt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new A({...r,...t,old:r})}function ch(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Fn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ao(e,t,r){return ch(Zo(e),t,r)}function Cc(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Lo(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=B.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Zo(i);let[l,c]=ch(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Dr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=A.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return A.invalid(new Ye("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Vn(e,t,r=!0){return e.isValid?ge.create(W.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Mi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=le(e.c.year,r?6:4),t?(n+="-",n+=le(e.c.month),n+="-",n+=le(e.c.day)):(n+=le(e.c.month),n+=le(e.c.day)),n}function Mc(e,t,r,n,o,i){let a=le(e.c.hour);return t?(a+=":",a+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=le(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=le(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=le(Math.trunc(-e.o/60)),a+=":",a+=le(Math.trunc(-e.o%60))):(a+="+",a+=le(Math.trunc(e.o/60)),a+=":",a+=le(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const uh={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Qv={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},e5={ordinal:1,hour:0,minute:0,second:0,millisecond:0},dh=["year","month","day","hour","minute","second","millisecond"],t5=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],r5=["year","ordinal","hour","minute","second","millisecond"];function n5(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new f0(e);return t}function Ac(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return n5(e)}}function Ec(e,t){const r=bt(t.zone,ee.defaultZone),n=W.fromObject(t),o=ee.now();let i,a;if(I(e.year))i=o;else{for(const c of dh)I(e[c])&&(e[c]=uh[c]);const s=D0(e)||_0(e);if(s)return A.invalid(s);const l=r.offset(o);[i,a]=ao(e,l,r)}return new A({ts:i,zone:r,loc:n,o:a})}function Ic(e,t,r){const n=I(r.round)?!0:r.round,o=(a,s)=>(a=is(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Lc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class A{constructor(t){const r=t.zone||ee.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Ye("invalid input"):null)||(r.isValid?null:Hn(r));this.ts=I(t.ts)?ee.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=Fn(this.ts,s),n=Number.isNaN(o.year)?new Ye("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||W.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new A({})}static local(){const[t,r]=Lc(arguments),[n,o,i,a,s,l,c]=r;return Ec({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=Lc(arguments),[n,o,i,a,s,l,c]=r;return t.zone=we.utcInstance,Ec({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=Pw(t)?t.valueOf():NaN;if(Number.isNaN(n))return A.invalid("invalid input");const o=bt(r.zone,ee.defaultZone);return o.isValid?new A({ts:n,zone:o,loc:W.fromObject(r)}):A.invalid(Hn(o))}static fromMillis(t,r={}){if(Wt(t))return t<-Tc||t>Tc?A.invalid("Timestamp out of range"):new A({ts:t,zone:bt(r.zone,ee.defaultZone),loc:W.fromObject(r)});throw new ye(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Wt(t))return new A({ts:t*1e3,zone:bt(r.zone,ee.defaultZone),loc:W.fromObject(r)});throw new ye("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=bt(r.zone,ee.defaultZone);if(!n.isValid)return A.invalid(Hn(n));const o=W.fromObject(r),i=Po(t,Ac),{minDaysInFirstWeek:a,startOfWeek:s}=mc(i,o),l=ee.now(),c=I(r.specificOffset)?n.offset(l):r.specificOffset,d=!I(i.ordinal),f=!I(i.year),m=!I(i.month)||!I(i.day),g=f||m,w=i.weekYear||i.weekNumber;if((g||d)&&w)throw new dr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&d)throw new dr("Can't mix ordinal dates with month/day");const k=w||i.weekday&&!g;let $,x,C=Fn(l,c);k?($=t5,x=Qv,C=Io(C,a,s)):d?($=r5,x=e5,C=ki(C)):($=dh,x=uh);let D=!1;for(const Fe of $){const be=i[Fe];I(be)?D?i[Fe]=x[Fe]:i[Fe]=C[Fe]:D=!0}const Z=k?Ew(i,a,s):d?Iw(i):D0(i),ie=Z||_0(i);if(ie)return A.invalid(ie);const he=k?hc(i,a,s):d?fc(i):i,[ue,z]=ao(he,c,n),ae=new A({ts:ue,zone:n,o:z,loc:o});return i.weekday&&g&&t.weekday!==ae.weekday?A.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${ae.toISO()}`):ae}static fromISO(t,r={}){const[n,o]=$v(t);return Dr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=kv(t);return Dr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=xv(t);return Dr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(I(t)||I(r))throw new ye("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=W.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,d]=Xv(a,t,r);return d?A.invalid(d):Dr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return A.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Iv(t);return Dr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new ye("need to specify a reason the DateTime is invalid");const n=t instanceof Ye?t:new Ye(t,r);if(ee.throwOnInvalid)throw new iw(n);return new A({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=lh(t,W.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return ah(ge.parseFormat(t),W.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ti(this).weekYear:NaN}get weekNumber(){return this.isValid?Ti(this).weekNumber:NaN}get weekday(){return this.isValid?Ti(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ci(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ci(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ci(this).weekYear:NaN}get ordinal(){return this.isValid?ki(this.c).ordinal:NaN}get monthShort(){return this.isValid?jr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?jr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?jr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?jr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Zo(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,d=Fn(l,a),f=Fn(c,s);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Rt(this,{ts:l}),Rt(this,{ts:c})]:[this]}get isInLeapYear(){return kn(this.year)}get daysInMonth(){return Lo(this.year,this.month)}get daysInYear(){return this.isValid?pr(this.year):NaN}get weeksInWeekYear(){return this.isValid?hn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?hn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=ge.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(we.instance(t),r)}toLocal(){return this.setZone(ee.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=bt(t,ee.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=ao(a,i,t)}return Rt(this,{ts:o,zone:t})}else return A.invalid(Hn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Rt(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Po(t,Ac),{minDaysInFirstWeek:n,startOfWeek:o}=mc(r,this.loc),i=!I(r.weekYear)||!I(r.weekNumber)||!I(r.weekday),a=!I(r.ordinal),s=!I(r.year),l=!I(r.month)||!I(r.day),c=s||l,d=r.weekYear||r.weekNumber;if((c||a)&&d)throw new dr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new dr("Can't mix ordinal dates with month/day");let f;i?f=hc({...Io(this.c,n,o),...r},n,o):I(r.ordinal)?(f={...this.toObject(),...r},I(r.day)&&(f.day=Math.min(Lo(f.year,f.month),f.day))):f=fc({...ki(this.c),...r});const[m,g]=ao(f,this.o,this.zone);return Rt(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t);return Rt(this,Cc(this,r))}minus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t).negate();return Rt(this,Cc(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=B.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ge.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Si}toLocaleString(t=Eo,r={}){return this.isValid?ge.create(this.loc.clone(r),t).formatDateTime(this):Si}toLocaleParts(t={}){return this.isValid?ge.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Mi(this,a);return s+="T",s+=Mc(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Mi(this,t==="extended"):null}toISOWeekDate(){return Vn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+Mc(this,a==="extended",r,t,n,i):null}toRFC2822(){return Vn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Vn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Mi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Vn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Si}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return B.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Nw(r).map(B.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=Dv(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(A.now(),t,r)}until(t){return this.isValid?re.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||A.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Ic(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Ic(t.base||A.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(A.isDateTime))throw new ye("min requires all arguments be DateTimes");return pc(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(A.isDateTime))throw new ye("max requires all arguments be DateTimes");return pc(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=W.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return sh(a,t,r)}static fromStringExplain(t,r,n={}){return A.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Eo}static get DATE_MED(){return m0}static get DATE_MED_WITH_WEEKDAY(){return lw}static get DATE_FULL(){return p0}static get DATE_HUGE(){return g0}static get TIME_SIMPLE(){return w0}static get TIME_WITH_SECONDS(){return v0}static get TIME_WITH_SHORT_OFFSET(){return b0}static get TIME_WITH_LONG_OFFSET(){return y0}static get TIME_24_SIMPLE(){return $0}static get TIME_24_WITH_SECONDS(){return k0}static get TIME_24_WITH_SHORT_OFFSET(){return x0}static get TIME_24_WITH_LONG_OFFSET(){return S0}static get DATETIME_SHORT(){return T0}static get DATETIME_SHORT_WITH_SECONDS(){return C0}static get DATETIME_MED(){return M0}static get DATETIME_MED_WITH_SECONDS(){return A0}static get DATETIME_MED_WITH_WEEKDAY(){return cw}static get DATETIME_FULL(){return E0}static get DATETIME_FULL_WITH_SECONDS(){return I0}static get DATETIME_HUGE(){return L0}static get DATETIME_HUGE_WITH_SECONDS(){return P0}}function _r(e){if(A.isDateTime(e))return e;if(e&&e.valueOf&&Wt(e.valueOf()))return A.fromJSDate(e);if(e&&typeof e=="object")return A.fromObject(e);throw new ye(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function xr(e){const t=A.fromObject(rw(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function hh(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function Ai(e,t){return hh(xr(e).plus(t))}function o5(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Qr(e)===Qr(t)&&r}const us=Symbol("and"),fh=Symbol("or"),mh=Symbol("exact"),ph=Symbol("enum"),gh=Symbol("unknown"),wh=Symbol("indexed-keys"),vh="__vir__shape__definition__key__do__not__use__in__actual__objects";function bh(e){return mr(e,vh)}const yh="__vir__shape__specifier__key__do__not__use__in__actual__objects",i5=[us,fh,mh,ph,gh,wh];function a5(...e){return s5(e,us)}function ds(e){return Pr(e,wh)}function Go(e){return Pr(e,fh)}function hs(e){return Pr(e,us)}function fs(e){return Pr(e,mh)}function ms(e){return Pr(e,ph)}function ps(e){return Pr(e,gh)}function Pr(e,t){const r=Yo(e);return!!r&&r.specifierType===t}function s5(e,t){return{[yh]:!0,specifierType:t,parts:e}}function cr(e,t,r){const n=Yo(t);if(n){if(hs(n))return n.parts.every(o=>cr(e,o));if(Go(n))return n.parts.some(o=>cr(e,o));if(fs(n))return Pt(e)?cr(e,n.parts[0]):e===n.parts[0];if(ms(n))return Object.values(n.parts[0]).some(o=>o===e);if(ds(n))return Pt(e)?(r?!0:Kt(e).every(i=>cr(i,n.parts[0].keys)))&&ew(e).every(i=>cr(i,n.parts[0].values)):!1;if(ps(n))return!0}return o5(e,t)}function Yo(e){if(Pt(e)&&mr(e,yh)){if(!mr(e,"parts")||!Y(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!mr(e,"specifierType")||!Jg(i5,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function va(e,t=!1){return so(e)}function so(e){const t=Yo(e);if(t){if(Go(t)||fs(t))return so(t.parts[0]);if(hs(t))return t.parts.reduce((r,n)=>Object.assign(r,so(n)),{});if(ms(t))return Object.values(t.parts[0])[0];if(ds(t))return{};if(ps(t))return t.parts[0]??{};throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return bh(e)?va(e.shape):e instanceof RegExp?e:Y(e,"array")?e.map(so):Pt(e)?Vo(e,(r,n)=>va(n)):e}function gs(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:va(e),[vh]:!0}}class Ze extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function l5(e,t,r={}){st({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function $h(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function st({subject:e,shape:t,keys:r,options:n}){if(ps(t))return!0;if(bh(t))return st({subject:e,shape:t.shape,keys:r,options:n});const o=$h(r);if(Yo(e))throw new Ze(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!cr(e,t,!n.ignoreExtraKeys))throw new Ze(`Subject does not match shape definition at key ${o}`);if(Y(t,"function"))return Y(e,"function");if(Pt(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Go(t))l=t.parts.some(c=>{try{const d=st({subject:e,shape:c,keys:r,options:{...n}});return Object.assign(s,d),!0}catch(d){if(d instanceof Ze)return!1;throw d}});else if(hs(t))l=t.parts.every(c=>{try{const d=st({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(s,d),!0}catch(d){if(d instanceof Ze)return!1;throw d}});else if(fs(t)){const c=st({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(s,c),l=!0}else{if(ms(t))throw new Ze(`Cannot compare an enum specifier to an object at ${o}`);if(Y(t,"array")&&Y(a,"array"))l=a.every((c,d)=>{const f=t.some(m=>{try{return st({subject:c,shape:m,keys:[...r,d],options:n}),!0}catch(g){if(g instanceof Ze)return!1;throw g}});return s[d]=f,f});else if(ds(t)){const c=Vo(e,(d,f)=>(n.ignoreExtraKeys||st({shape:t.parts[0].keys,subject:d,keys:[...r,d],options:n}),st({shape:t.parts[0].values,subject:f,keys:[...r,d],options:n}),!0));Object.assign(s,c),l=!0}else{const c=c5({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(f=>!s[f]).join(",")}`;throw new Ze(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new Ze(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function c5({keys:e,options:t,shape:r,subject:n}){const o=$h(e),i={};if(Pt(r)){const a=new Set(Kt(n)),s=new Set(Kt(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Ze(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const c=r[l],d=Go(c)?c.parts.includes(void 0):!1,f=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!f)throw new Ze(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];st({subject:c,shape:d,keys:[...e,l],options:t}),i[l]=!0})}else throw new Ze(`shape definition at ${o} was not an object.`);return i}const u5=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],d5=u5.reduce((e,t)=>(e[t]=t,e),{}),h5=ee.defaultZone.name,ws=d5.UTC;var Pc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Pc||(Pc={}));const f5=["hour","minute","second","millisecond"],m5=gs({hour:14,minute:19,second:7,millisecond:877,timezone:ws}),p5=gs({year:2023,month:6,day:5,timezone:ws}),g5=gs(a5(p5,m5));var E;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(E||(E={}));const w5={[E.Milliseconds]:"millisecond",[E.Seconds]:"second",[E.Minutes]:"minute",[E.Hours]:"hour",[E.Days]:"day",[E.Weeks]:"week",[E.Months]:"month",[E.Quarters]:"quarter",[E.Years]:"year"},Nc=[E.Milliseconds,E.Seconds,E.Minutes,E.Hours,E.Days,E.Weeks,E.Months,E.Quarters,E.Years];function qc(e,t){return Vo(e,(r,n)=>t==null||!Y(n,"number")?n:da({number:n,digits:t}))}const Oc={longterm:1,casual:0},kh={[E.Years]:"longterm",[E.Quarters]:"longterm",[E.Months]:"longterm",[E.Weeks]:"casual",[E.Days]:"casual",[E.Hours]:"casual",[E.Minutes]:"casual",[E.Seconds]:"casual",[E.Milliseconds]:"casual"};function v5(e){return e.map(n=>kh[n]).reduce((n,o)=>Oc[o]>Oc[n]?o:n)}var wr;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(wr||(wr={}));function b5({start:e,end:t,units:r,unit:n,diffType:o,decimalCount:i}){const a=xr(e),s=xr(t),l=r??[n],c=l.length===1?wr.EquivalentUnits:o;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===wr.AdditiveUnits){const d=v5(l),f=s.diff(a,l,{conversionAccuracy:d}).toObject();return qc(f,i)}else if(c===wr.EquivalentUnits){const d=l.map(m=>{const w=s.diff(a,m,{conversionAccuracy:kh[m]}).toObject()[m];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,w]}),f=tw(d);return qc(f,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function y5(e){if(!jr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function $5(e){l5(e,g5),y5(e.timezone),xr(e)}function k5(e){try{return $5(e),!0}catch{return!1}}function x5(e,t){const r=S5(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return hh(r,t)}function Bc(e){const t=A.fromJSDate(new Date(e));if(t.isValid)return t}function S5(e,t){if(k5(e)&&(e=xr(e).toMillis()),A.isDateTime(e))return e.setZone(t);if(Y(e,"number"))return A.fromMillis(e,{zone:ws}).setZone(t);if(Y(e,"string")){const r=A.fromISO(e,{zone:t});return r.isValid?r:Bc(e)}else if(e instanceof Date)return A.fromJSDate(e).setZone(t);return Bc(e)}function T5(e){return x5(Date.now(),e)}function xh(){return T5(h5)}const C5={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};nw(C5,f5);const M5=ee.defaultLocale;function A5(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Dc(e,t){const r=xr(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??M5});return A5(r)}function E5(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function I5(e,t){const r=mr(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(u0).join(":")}function L5(e,t){return{date:E5(e),time:I5(e,t.includeSeconds),timezone:e.timezone}}function P5(e,t){const r=L5(e,t);return[r.date,r.time,t.includeTimezone&&`(${r.timezone})`].filter(u0).join(" ")}const N5={[E.Milliseconds]:1e3,[E.Seconds]:60,[E.Minutes]:60,[E.Hours]:24,[E.Days]:30,[E.Weeks]:4,[E.Months]:12,[E.Quarters]:4,[E.Years]:1/0};function q5({fullDate:e,relativeTo:t,options:r={}}){const n=r.decimalDigitCount||0,o=b5({start:e,end:t,units:Nc,diffType:wr.EquivalentUnits}),i=Vo(o,(g,w)=>{const k=Math.floor(Math.abs(da({digits:1,number:w}))),$=k>0,x=r.limitUnitMax?k<N5[g]:!0;return $&&x}),a=Nc.reduce((g,w)=>{var $;return!(($=r.blockedRelativeUnits)!=null&&$.includes(w))&&i[w]?w:g},void 0);if(r.blockJustNow?!1:d0(e,t)||a===E.Minutes&&o.minutes<2||a===E.Seconds&&o.seconds<11||a===E.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],c=Math.abs(da({digits:n,number:l})),d=c===1,f=[w5[a],d?"":"s"].join(""),m=d?"a":c;return l<0?`in ${m} ${f}`:`${m} ${f} ago`}function O5(e){return{date:Dc(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Dc(e,{timeStyle:"short"}).replace(/\s/g," ")}}const B5={blockedRelativeUnits:[E.Years,E.Quarters],limitUnitMax:!0};function D5(e){var i,a,s;const t=O5(e.fullDate),r=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(yn).join(" "),n=P5(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?q5({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||xh(),options:{...B5,...e.relativeOptions}}):void 0;return{everythingString:n,displayString:o||r}}const Ei=oe()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:r}=D5(e);return u`
            <span title=${r}>${t}</span>
        `}}),_5="data-test-id",ur=qt(class extends ht{constructor(t){super(t);Cn(this,"element");this.element=R5(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(_5,t),Ie}});function R5(e,t,r){H5(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function H5(e,t){if(e.type!==pn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var ba=(e=>(e.Up="up",e.Down="down",e))(ba||{});const jn=oe()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:Q(),openChange:Q()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${J.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${fe};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${Ot({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${Re};
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
            ${Mo.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${Mo.popupShadowReversed};
        }

        .selected-label-prefix {
            ${J.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Re};
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
            ${Jt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${S.assign({icon:n.icon})}
                      ${ur("rendered-input-icon")}
                  ></${S}>
              `:"",s=n.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return u`
            <button
                ?disabled=${!!n.disabled}
                class=${ve({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${S.assign({icon:Hd})}
                            class="trigger-icon"
                        ></${S}>
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
        `}});var ut=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(ut||{});const We=oe()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){function t(n){if(e.linkType==="disabled"){n.preventDefault();return}e.linkType==="route-link"&&Do(n)&&(n.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const r=e.linkType==="new-tab";return u`
            <a
                href=${e.url.toString()}
                ${T("click",t)}
                target=${Fs(r?"_blank":void 0)}
                rel=${Fs(r?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),ya=360,Sh=8;function Th(e){return(e-Sh)/2}const Qe=ft({"main-image-size":ya,"secondary-image-size":Th(ya)}),it=oe()({tagName:"toniq-featured-flip-card-footer",styles:p`
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

        ${de} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Qe["secondary-image-size"].value} * 2);
        }

        ${We} ${de} {
            width: 100%;
        }

        ${We} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Qe["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:Q(),flipCardButtonClick:Q()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?nt(n).map(i=>{const a=n[i];if(!a)return;const s=l0[i];return u`
                          <${We.assign({linkType:ut.NewTab,url:a})}>
                              <${S.assign({icon:s})}></${S}>
                          </${We}>
                      `}).filter(yn):"";return u`
            <div class="buttons">
                <${We.assign({url:e.viewMoreButtonUrl,linkType:ut.RouteLink,scrollToTop:!0})}
                    ${T("click",()=>{t(new r.viewMoreButtonClick)})}
                >
                    <${de.assign({text:e.viewMoreButtonText,variant:Ao.Outline})}></${de}>
                </${We}>
                ${e.flipCardButtonText?u`
                          <${de.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new r.flipCardButtonClick)})}
                          ></${de}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),zt=oe()({tagName:"toniq-flip-card",events:{flippedChange:Q()},styles:p`
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

        ${wg(".card-face",!1)}

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
                class="flip-wrapper ${ve({flipped:e.flipped})}"
                ${T("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),K=oe()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:Q()},styles:p`
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
            ${J.h3Font};
            ${J.extraBoldFont};
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
            max-height: ${Qe["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Qe["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Sh}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${zt} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${Qe["main-image-size"].value};
            height: ${Qe["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${Qe["secondary-image-size"].value};
            height: ${Qe["secondary-image-size"].value};
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
            ${J.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var m,g,w,k;const a=e.mainImageSize||ya,s=Th(a);Vi({onElement:n,forCssVar:Qe["main-image-size"],toValue:`${a}px`}),Vi({onElement:n,forCssVar:Qe["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(yn).join(" "),c=u`
            <h3>${e.cardTitle}</h3>
        `,d=e.imageUrls[0],f=d?u`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,d))||u`
                          <${$t.assign({imageUrl:d})}></${$t}>
                      `}
                  </div>
              `:"";return u`
            <${zt.assign({flipped:t.flipped})}
                ${T(it.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map($=>{var x;return u`
                                    <div class="secondary-image-wrapper">
                                        ${((x=e.customTemplateCallback)==null?void 0:x.call(e,$))||u`
                                            <${$t.assign({imageUrl:$})}></${$t}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${it.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(it.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${it}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(w=e.infoParagraphs)==null?void 0:w.map($=>u`
                                <p>${$}</p>
                            `)}
                    </div>
                    <${it.assign({viewMoreButtonText:l,flipCardButtonText:(k=e.infoParagraphs)!=null&&k.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(it.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${it}>
                </div>
            </${zt}>
        `}});function $a({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>$a({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ch({value:e,allowed:t,blocked:r}){const n=t?$a({input:e,matcher:t}):!0,o=r?$a({input:e,matcher:r}):!1;return n&&!o}function _c(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ch({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var ka=(e=>(e.Default="default",e.Outline="outline",e))(ka||{});const zn=oe()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:Q(),inputBlock:Q()},styles:({hostClasses:e})=>p`
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
                border-radius: ${sa};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${b.pagePrimary.backgroundColor};
                border-color: ${b.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${S} {
                color: ${b.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${S} {
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
                border-radius: ${sa};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${J.paragraphFont};
                gap: 4px;
            }

            ${Ot({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${S} {
                margin-right: 10px;
            }

            input {
                ${fe};
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
                ${J.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Jt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Re};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=_c({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
                  <${S.assign({icon:e.icon})}></${S}>
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
                    ${T("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)Ch({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlock(s)));else{const{filtered:d,blocked:f}=_c({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlock(f))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Me(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var lo=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(lo||{});const Ii=oe()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>p`
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

        ${e["toniq-loading-whole-page"].selector} ${S} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${S} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>u`
            <${S.assign({icon:Qa,fitContainer:e.size!=="small"})}></${S}>
        `});async function F5(e){return navigator.clipboard.writeText(e)}const V5="…";function j5(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${V5}${n}`}function z5(e){return!(e%1)}function Z5(e){return e.letterCount==null?4:z5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const pe=oe()({tagName:"toniq-middle-ellipsis",events:{copy:Q()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${X.interaction};
            ${J.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${S} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${S} {
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
            ${fe};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Ot({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=Z5(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?j5(i,a):i,f=c?i:"",m=s?zd:l?jd:void 0,g=m?u`
                  <${S.assign({icon:m})}></${S}>
              `:"",w=u`
            <span title=${f} class="text-content">
                ${Me(!!e.copyOnClick,u`
                        <span
                            class=${ve({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${d}
            </span>
        `;return d?s?u`
                    <button
                        tabindex="0"
                        role="link"
                        ${T("click",k=>{var x,C;const $=(C=(x=k.currentTarget)==null?void 0:x.querySelector)==null?void 0:C.call(x,"a");if(!$)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");$.click()})}
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
                        ${T("click",async()=>{await F5(i),t(new r.copy),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${w} ${g}
                    </button>
                `:u`
                    ${w}
                `:u``}}),Rc="...";function W5(e,t,r=7,n=5){let o;e=Jr({value:e,min:1,max:t}),r=Jr({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Li(t-o,t):e>o?Li(Math.min(s.start,t-o),Math.min(s.end,t)):Li(1,Math.min(t,o+1));function c(f,m){return l.length+1!==t?m:[f]}const d=l[l.length-1];if(d&&d<t){const f=c(t,[Rc,t]);return[...l,...f]}else return l[0]!==1?c(1,[1,Rc]).concat(l):l}function Li(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}oe()({tagName:"toniq-pagination",styles:p`
        :host {
            display: flex;
        }

        button {
            ${fe};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Re};
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
            ${J.labelFont}
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
    `,events:{pageChange:Q()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${T("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${S.assign({icon:Ka})}></${S}>
                </button>
                ${W5(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${ve({page:!0,selected:e.currentPage===n})}
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
                    <${S.assign({icon:Xa})}></${S}>
                </button>
            `}});const G=oe()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:Q()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ue("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ue("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ue("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ue("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${J.boldParagraphFont};
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
            ${fe};
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

        ${Ot({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Jt};
        }

        .wrapper.disabled::before {
            ${Jt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:np()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return U5(e.entries).map(i=>G5(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function U5(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${G.tagName} was given duplicate entry values.`),Object.values(t)}function G5(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${ve({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}function Pi(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const f=e[d+1];return f==null?!0:c<=t&&f>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function Y5(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=J5(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Hc(o,r),o.length>r&&Hc(o,r)),o}function Hc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function J5(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const N={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Rr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function K5(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${N.lowerLabelWrapper} .${N.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${N.upperLabelWrapper} .${N.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function X5(e,t=8){const r=K5(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Ni({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function fn(e){return Ua(e)&&e.min!==void 0&&e.max!==void 0}function xa(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${N.range}`);return(t==null?void 0:t.clientWidth)??0}function qi(e,t,r){return`${r?dp(e):e} ${t}`}function Q5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function e4({value:e,double:t,min:r,max:n}){return t?fn(e)?{min:Jr({value:e.min,min:r,max:Math.min(e.max,n)}),max:Jr({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:fn(e)?r:Jr({value:e,min:r,max:n})}function t4({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:fn(e)?{min:Pi(n,e.min),max:Pi(n,e.max)}:Pi(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function Oi(e,t,r){return r?t[e]||0:e}function r4(e){return{actualLimits:Q5(e),actualValue:e4(e)}}function n4(e,t){var n,o,i;let r=!1;if(fn(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${N.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${N.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${N.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function Mh(e,t){const{actualValue:r,actualLimits:n}=r4({...e}),o=Y5(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=t4({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=xa(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Ht=16,Fc=p`
    ${Ht}px
`,Vc=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Fc};
    width: ${Fc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${X.interaction};
    ${F(b.accentPrimary)};
`,jc=p`
    transform: scale(1.2);
`;function zr(e){requestAnimationFrame(()=>{const t=Mh(e.instanceInputs,e).elementValue;n4(t,e)&&(e.setAttribute("disabled","true"),zr(e))})}const R=oe()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:Q()},styles:p`
        :host {
            display: block;
        }

        .${q(N.range)} {
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

        .${q(N.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${J.boldParagraphFont};
            ${Re};
        }

        .${q(N.labelPixelMarginWrapper)},
            .${q(N.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${q(N.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${q(N.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Ot({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${q(N.lowerSlider)},
        .${q(N.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-moz-range-thumb {
            ${Vc}
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-webkit-slider-thumb {
            ${Vc}
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-webkit-slider-thumb:hover {
            ${jc}
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-moz-range-thumb:hover {
            ${jc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{zr(e)}),e.addEventListener("keydown",()=>{zr(e)}),e.addEventListener("keyup",()=>{zr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:f,rangeWidth:m}=Mh({...e},t);if(zr(t),fn(d))return g(a,d,f);return k(a,d,f);function g($,x,C){const D={left:lr((m-Ht)*(x.min-C.min)/(C.max-C.min)+Ht/2),right:lr((m-Ht)*(C.max-x.max)/(C.max-C.min)+Ht/2)},Z=qi($.min,c,l),ie=qi($.max,c,l);requestAnimationFrame(()=>{const be=X5(t);be!==o.labelOverlap&&i({labelOverlap:be})});const he=(C.max-x.max)/(C.max-C.min)>.5,ue=Ni({value:x.min,limits:{min:C.min,max:x.max},flip:!0}),z=Ni({value:x.max,limits:{min:x.min,max:C.max},flip:!1}),ae=o.labelOverlap&&he?o.labelOverlap:0,Fe=o.labelOverlap&&!he?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${on(()=>{i({rangeWidth:xa(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${D.left}; right:${D.right}"
                    ></div>
                    <span
                        class="${N.labelOuterWrapper} ${N.lowerLabelWrapper}"
                        style="left: ${D.left}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-left: ${pi(ue)}"
                        >
                            <span
                                class="${N.labelPixelMarginWrapper}"
                                style="margin-right: ${lr(Fe)}"
                                ${ur(Rr.lowerLabel)}
                            >
                                ${Z}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${N.labelOuterWrapper} ${N.upperLabelWrapper} ${N.rightAlignedLabelWrapper}"
                        style="right: ${D.right}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-right: ${pi(z)}"
                        >
                            <span
                                class="${N.labelPixelMarginWrapper}"
                                style="margin-left: ${lr(ae)}"
                                ${ur(Rr.upperLabel)}
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
                            class="${N.lowerSlider} ${N.slider}"
                            .min=${C.min}
                            .max=${C.max}
                            .value=${x.min}
                            ${T("input",be=>{const Qt=be.target,Nr={...$,min:Oi(Number(Qt.value),s,l)};w(Nr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${N.upperSlider} ${N.slider}"
                            step=${e.step}
                            .min=${C.min}
                            .max=${C.max}
                            .value=${x.max}
                            ${ur(Rr.slider)}
                            ${T("input",be=>{const Qt=be.target,Nr={...$,max:Oi(Number(Qt.value),s,l)};w(Nr)})}
                        />
                    </div>
                </div>
            `}function w($){i({internalValue:$}),e.disabled||n(new r.valueChange($))}function k($,x,C){const D=lr((m-Ht)*(C.max-x)/(C.max-C.min)+Ht/2),Z=qi($,c,l),ie=Ni({value:x,limits:C,flip:!1});return u`
                <div
                    class="range"
                    ${on(()=>{i({rangeWidth:xa(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${D}"></div>
                    <span
                        class="${N.labelOuterWrapper} ${N.rightAlignedLabelWrapper}"
                        style="right: ${D}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-right: ${pi(ie)}"
                            ${ur(Rr.label)}
                        >
                            ${Z}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${N.slider}"
                        step=${e.step}
                        .min=${C.min}
                        .max=${C.max}
                        .value=${x}
                        ${ur(Rr.slider)}
                        ${T("input",he=>{const ue=he.target,z=Oi(Number(ue.value),s,l);w(z)})}
                    />
                </div>
            `}}});var Ah=(e=>(e.Default="default",e.TextOnly="text-only",e))(Ah||{});const Bi=oe()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${J.boldParagraphFont};
            ${Re};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${fe};
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

        ${Ot({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${Jt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${S.assign({icon:e.icon})}
                      class="icon-template"
                  ></${S}>
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
        `}}),Xr=jg({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${Mo.menuShadow};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),co=oe()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>p`
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return u`
            <div
                class="slot-wrapper"
                ${T("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${Xr}>${e.tooltipContent}</${Xr}>
            </div>
        `}}),Zr=oe()({tagName:"toniq-top-tabs",events:{routeChange:Q(),valueChange:Q()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>p`
        :host {
            display: block;
        }

        ul {
            ${fe};
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
            ${fe};
            ${$d};
            cursor: pointer;
            display: inline-block;
            ${J.paragraphFont};
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

        ${Zt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${J.boldFont};
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
                      <${S.assign({icon:o.icon})}></${S}>
                  `:"",s=o.label?u`
                      <${Zt.assign({text:o.label})}></${Zt}>
                  `:"";return u`
                <li
                    ${v1("tab")}
                    role="presentation"
                    class=${ve({selected:i})}
                >
                    <${We.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:ut.RouteLink})}
                        class="tab ${ve({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${T("click",c=>{var d;i||Do(c)&&((d=o.link)!=null&&d.route&&t(new r.routeChange(o.link.route)),t(new r.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${We}>
                </li>
            `});return u`
            <ul role="tablist">
                ${n}
                <li></li>
            </ul>
        `}}),Eh=U({title:"Data",parent:void 0}),No=oe()({tagName:"toniq-icon-book-viewer",styles:p`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${b.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${S.assign({icon:e.icon})}></${S}>
        `}}),Jo=Object.values(vt).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),o4=Object.keys(Jo).sort();function vs(e){return{controlType:O.Dropdown,initValue:e,options:["None",...o4]}}const Ih={"CSS color":{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-color"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-fill-color"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:O.Number,initValue:2}};function uo(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),Y(n,"number")&&(n=Ga({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const i4=U({title:"Social Urls",parent:Eh,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${No.assign({icon:n})}></${No}>
                    `}})}Object.entries(l0).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),se=U({title:"Elements",parent:void 0}),a4=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:p`
            ${Zt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],s4=U({title:Zt.tagName,parent:se,elementExamplesCallback({defineExample:e}){a4.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:p`
                    .bold {
                        ${J.boldFont}
                    }

                    ${t.extraStyle??p``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Zt.assign({text:t.text})}
                            ${T("click",()=>{n({isBold:!r.isBold})})}
                            class=${ve({bold:r.isBold})}
                        ></${Zt}>
                        More text
                    `}})})}}),l4=U({parent:se,title:de.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:Ao.Secondary}},{name:"Outline",inputs:{variant:Ao.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
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
                        <${de.assign({text:"Button",...r.inputs})}></${de}>
                        <${de.assign({icon:no,...r.inputs})}></${de}>
                        <${de.assign(n.showIcon?{icon:no,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${de}>
                        <${de.assign({text:"Button",icon:no,...r.inputs})}></${de}>
                        <${de.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${de}>
                        <${de.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${de}>
                    `}})})}}),zc=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${xe} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,c4=U({parent:se,title:xe.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:zc,renderCallback(){return u`
                    <${xe.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:vt["core-24"].map(t=>{const r=p`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${S.assign({icon:t})} style=${r}></${S}>
                            `})})}></${xe}>
                    <${xe.assign({enableAutomaticCycling:!0,templates:vt["core-24"].map(t=>{const r=p`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${S.assign({icon:t})} style=${r}></${S}>
                            `})})}></${xe}>
                    <${xe.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:vt["core-24"].map(t=>{const r=rp({min:0,max:150}),n=p`
                                padding: 100px ${r}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${S.assign({icon:t})} style=${n}></${S}>
                            `})})}></${xe}>
                `}}),e({title:"banner style",styles:zc,renderCallback(){const t=p`
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
                    <${xe.assign({enableAutomaticCycling:!0,variant:la.Banner,templates:vt["core-24"].map(r=>u`
                                <div style=${t}>
                                    <${S.assign({icon:r})}></${S}>
                                </div>
                            `)})}></${xe}>
                    <${xe.assign({enableAutomaticCycling:!0,variant:la.Banner,templates:[vt["core-24"][0]].map(r=>u`
                                <div style=${t}>
                                    <${S.assign({icon:r})}></${S}>
                                </div>
                            `)})}
                        class=${xe.hostClasses["toniq-carousel-banner-variant"]}
                    ></${xe}>
                `}})}});function u4(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:O.Color,initValue:""}]);return Object.fromEntries(t)}function d4(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(yn);return q(t.join(`
`))}const h4=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Di=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],f4=U({parent:se,title:mt.tagName,controls:{Text:{controlType:O.Text,initValue:"Text"},...u4(mt)},elementExamplesCallback({defineExample:e}){h4.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Di.map(r=>!!r.inputs.checked),extraEntryStatuses:Di.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:p`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Di.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var f;return u`
                                    <${mt.assign({...t.inputs,...oa(i.inputs,["checked"]),checked:!!((f=r.extraEntryStatuses[a])!=null&&f[d]),text:c})}
                                        ${T(mt.events.checkedChange,()=>{const m=[...r.extraEntryStatuses];m[a][d]=!m[a][d],n({extraEntryStatuses:m})})}
                                    ></${mt}>
                                `}),l=d4(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${mt.assign({...t.inputs,...oa(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${T(mt.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${mt}>
                                ${s}
                            </div>
                        `})}})})}}),m4=U({parent:se,title:bi.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Tt}},{inputs:{icon:Tt}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Tt},template:u`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:ua.Default}},{title:"secondary style",inputs:{variant:ua.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${bi.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${Me(!!o.template,o.template)}</${bi}>
                    `)}})})}}),p4=U({title:Ei.tagName,parent:se,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=xh();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:Ai(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:Ai(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:Ai(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[E.Days,E.Hours]}}}].forEach(n=>{e({title:n.title,renderCallback(){return u`
                        <${Ei.assign({...n.inputs})}></${Ei}>
                    `}})})}}),Zn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],g4=[{title:"default"},{title:"transparent background",customStyle:p`
            ${es.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Zc=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],w4=U({title:jn.tagName,parent:se,controls:{Selected:{controlType:O.Dropdown,initValue:Zn[0].label,options:Zn.map(e=>e.label)},Direction:{controlType:O.Dropdown,initValue:"Down",options:Q2(ba)},Icon:vs(_d.name),Prefix:{controlType:O.Text,initValue:"Sort by: "},"Force open":{controlType:O.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){g4.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Zc.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Zc.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return u`
                            <${jn.assign({...t.inputs,...i.inputs,options:Zn,value:r.selected[a]??Zn.find(l=>l.label===o.Selected),icon:Jo[o.Icon],selectedLabelPrefix:o.Prefix,direction:ba[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${T(jn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${jn}>
                        `})}})})}}),Wc="/toniq-labs-design-system";function v4(...e){const r=[globalThis.location.pathname.startsWith(Wc)?Wc:"",...e].filter(yn);return ap(...r)}const ar=Array(30).fill(v4("/toniq-labs-logo.png")),hr=["Hello there.","There is stuff here."],Wn=hr.concat(Array(30).fill(hr)),b4=U({title:K.tagName,parent:se,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({infoParagraphs:Wn,imageUrls:ar,socialUrls:Vg,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${K}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:ar,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${K}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Wn,viewMoreUrl:"https://toniqlabs.com"})}
                        ${T(K.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${K}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Wn})}></${K}>
                `}}),e({title:"with custom height",styles:p`
                ${K} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Wn})}></${K}>
                `}}),e({title:"smaller",styles:p`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:ar,infoParagraphs:hr,cardTitle:"Featured Stuff"})}></${K}>
                `}}),e({title:"with social URLs",styles:p`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:ar,infoParagraphs:hr,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${K}>
                `}}),e({title:"with custom template",styles:p`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:ar,infoParagraphs:hr,cardTitle:"With custom Template",customTemplateCallback(t){return u`
                                <${$t.assign({imageUrl:t})}></${$t}>
                            `}})}></${K}>
                `}}),e({title:"with custom template statuses",styles:p`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:ar.map((t,r)=>r%2?"/invalid-image.png":t),infoParagraphs:hr,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return u`
                                <${$t.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${yr.Loading}
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
                                        <${S.assign({icon:Qa,fitContainer:!0})}
                                            style=${p`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${S}>
                                    </div>
                                    <div
                                        slot=${yr.Error}
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
                                        <${S.assign({icon:xd,fitContainer:!0})}
                                            style=${p`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${S}>
                                    </div>
                                </${$t}>
                            `}})}></${K}>
                `}})}}),y4=U({title:zt.tagName,parent:se,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${zt.assign({flipped:t.flipped})}
                        ${T(zt.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${zt}>
                `}})}}),$4=U({parent:se,title:We.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:ut.ReplacePage}},{title:"new tab",inputs:{linkType:ut.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:ut.NewTab}},{title:"route link",inputs:{linkType:ut.RouteLink}},{title:"link disabled",inputs:{linkType:ut.Disabled}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${We.assign({url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${We}>
                    `}})})}}),k4=U({title:S.tagName,parent:se,controls:Ih,elementExamplesCallback({defineExample:e}){const t=[{icon:Jd},{icon:Yd},{icon:Fd},{icon:Tt},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${S.assign({icon:n.icon})}
                            style=${uo(r)}
                        ></${S}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=p`
                    ${h["toniq-icon-fill-color"].name}: orange;
                `;return vt["third-party-brands"].map(o=>u`
                        <${S.assign({icon:o})}
                            style=${uo(r)}
                        ></${S}>
                        <${S.assign({icon:o})}
                            style=${n}
                        ></${S}>
                    `)}}),e({title:"fit container",styles:p`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${S} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:r}){return u`
                    <${S.assign({icon:Tt,fitContainer:!0})}
                        style=${uo(r)}
                    ></${S}>
                `}})}}),x4=U({title:zn.tagName,parent:se,controls:{"External value":{controlType:O.Text,initValue:""},Placeholder:{controlType:O.Text,initValue:"placeholder"},Icon:vs(Wd.name),Suffix:{controlType:O.Text,initValue:"ICP"},"No browser helps":{controlType:O.Checkbox,initValue:!1},"Blocked characters":{controlType:O.Text,initValue:""},"Exclusive characters":{controlType:O.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:ka.Default}},{title:"outline",inputs:{variant:ka.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${zn.assign({...n.inputs,value:o["External value"]||i.value,icon:Jo[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${T(zn.events.valueChange,l=>{a({value:l.detail})})}
                            ></${zn}>
                        `))}})})}}),S4=U({title:Ii.tagName,parent:se,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:lo.Small}},{title:"large",inputs:{size:lo.Large}},{title:"whole page",inputs:{size:lo.WholePage},styles:p`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??p``,renderCallback(){return u`
                        <${Ii.assign(r.inputs)}></${Ii}>
                    `}})})}}),T4=U({title:pe.tagName,parent:se,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${pe.assign({text:"Long string instead of text"})}></${pe}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${pe.assign({text:"Short text"})}></${pe}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${pe.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${pe}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${pe.assign({text:"Long text that you can copy",copyOnClick:!0})}></${pe}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${pe} {
                    ${pe.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${pe.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${pe.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${pe.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${pe.assign({text:"long text with custom colors",copyOnClick:!0})}></${pe}>
                `}})}}),Hr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Pe={basic:Hr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Hr.slice(1)],disabled:[{...Hr[0],disabled:!0},...Hr.slice(1)],noLabels:z2(Hr,e=>({...e,label:void 0}))},C4=U({title:G.tagName,parent:se,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Pe.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Pe.basic[0].value},styles:p`
                ${G} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Pe.longText[0].value},styles:p`
                ${G} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Pe.longText,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Pe.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Pe.noLabels,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Pe.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Pe.disabled,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Pe.basic[0].value},styles:p`
                ${G} {
                    ${G.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${G.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${G.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${G.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}})}}),at=p`
    ${R} {
        width: 300px;
    }
`,_i={min:10,max:50},M4=U({title:R.tagName,parent:se,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,..._i})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,..._i,suffix:"ICP"})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${at}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,min:-100,max:100})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${at}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,..._i})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${at}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}})}}),A4=[{title:"default",inputs:{}},{title:"text only",inputs:{variant:Ah.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Uc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],E4=U({title:Bi.tagName,parent:se,controls:{Text:{controlType:O.Text,initValue:"Toggle Button"},Icon:vs(Zd.name)},elementExamplesCallback({defineExample:e}){A4.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Uc.map(r=>!!r.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Uc.map((i,a)=>u`
                            <${Bi.assign({...t.inputs,toggled:r.buttonStates[a],icon:Jo[o.Icon],text:o.Text,...oa(i.inputs,["toggled"])})}
                                ${T("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Bi}>
                        `)}})})}}),I4=U({parent:se,title:co.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:p`
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
                        <${co.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${co}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:u`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),L4=U({parent:se,title:Xr.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${co.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${Xr}>This is a tooltip.</${Xr}>
                `}})}}),P4=[I4,L4],N4=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:p`
            :host {
                width: 500px;
            }

            ${Zr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:p``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:p``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:aa},{label:"label here",value:2,icon:aa},{label:"",value:3,icon:Tt,disabled:!0},{label:"16px icon",value:4,icon:Tt},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],q4=U({title:Zr.tagName,parent:se,elementExamplesCallback({defineExample:e}){N4.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:p`
                    ${t.extraStyles??p``}
                `,renderCallback({state:r,updateState:n}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return u`
                        <${Zr.assign({tabs:o,value:r.selectedTab})}
                            ${T(Zr.events.valueChange,i=>{n({selectedTab:i.detail})})}
                        ></${Zr}>
                    `}})})}}),Lh=U({title:"Icons",parent:void 0,controls:Ih}),O4=Object.entries(vt).map(([e,t])=>U({title:e,parent:Lh,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${No.assign({icon:n})}
                                    style=${uo(o)}
                                ></${No}>
                            `}}))}}));function Ph(e){const t=B4(e),r=Yt(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return nt(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function B4(e){typeof e!="string"&&(e=String(e));const n=`{"${W2(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const bs=U({title:"Styles",parent:void 0}),D4=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${J.labelFont};
        ${J.monospaceFont};
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
        ${J.h2Font};
    }
`;function _4(e,t,r){const n=Ph(F(r));return e({title:t,styles:D4,renderCallback(){return u`
                <div class="color-example" style=${F(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const R4=U({title:"Colors",parent:bs,elementExamplesCallback({defineExample:e}){nt(b).map(t=>_4(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),H4=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${J.labelFont};
        ${J.monospaceFont};
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
`;function F4(e,t,r){const n=Ph(r);return e({title:t,styles:H4,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${nt(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const V4=U({title:"Fonts",parent:bs,elementExamplesCallback({defineExample:e}){nt(J).map(t=>{const r=J[t];return F4(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),j4=[se,Lh,bs,Eh],z4=[...O4,...P4,i4,s4,l4,c4,f4,m4,R4,p4,w4,b4,y4,V4,$4,k4,x4,S4,T4,C4,M4,E4,q4].sort((e,t)=>e.title.localeCompare(t.title)),Z4=[...j4,...z4];Bo({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${mi} {
            height: 100%;
            width: 100%;
            ${J.paragraphFont};
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
            <${mi.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:Z4,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${et.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${mi}>
        `}});
