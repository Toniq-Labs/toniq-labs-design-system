var Z0=Object.defineProperty;var W0=(e,t,r)=>t in e?Z0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Lo=(e,t,r)=>(W0(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function sa(e){return!!e}function U0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var ts;(function(e){e.Upper="upper",e.Lower="lower"})(ts||(ts={}));const G0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function po(e,t){return e?G0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Tc(e,t){return e&&t.every(r=>po(e,r))}function Sc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>go(r).trim()).join(`
`))}function go(e){return e?e instanceof Error?e.message:po(e,"message")?String(e.message):String(e):""}function Y0(e){return e instanceof Error?e:new Error(go(e))}function rs(e){return!!e&&typeof e=="object"}function zn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Q0(e){return Array.isArray(e)?"array":typeof e}function vo(e,t){return Q0(e)===t}function ns({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const os="Failed to compare objects using JSON.stringify";function is(e,t,r){return ns({source:e,errorHandler(n){if(r)return"";throw n}})===ns({source:t,errorHandler(n){if(r)return"";throw n}})}function ut(e,t,r={}){try{return e===t?!0:rs(e)&&rs(t)?is(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ut(e[o],t[o])):!1:is(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Y0(n);throw o.message.startsWith(os)||(o.message=`${os}: ${o.message}`),o}}function X0(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function J0(e){return zn(e).filter(t=>isNaN(Number(t)))}function K0(e){return J0(e).map(r=>e[r])}function _0(e,t){return K0(t).includes(e)}function eh(e,t){return zn(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function th(e,t){return eh(e,r=>!t.includes(r))}function Fn(e,t){let r=!1;const n=zn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(zn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function as(e,t){try{return rh(e,t),!0}catch{return!1}}function rh(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Mc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Mc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function nh(e){const t=Mc();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const oh=globalThis.crypto;function ih(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return oh.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function ah(e,t){return po(e,"entryType")&&e.entryType===t}var he;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(he||(he={}));function Ht(e,t){return e.controlType===t}var O;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(O||(O={}));const Ec=Symbol("any-type"),sh={[O.Checkbox]:!1,[O.Color]:"",[O.Dropdown]:"",[O.Hidden]:Ec,[O.Number]:0,[O.Text]:""};function lh(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=sh[o.controlType];i!==Ec&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function la(e,t){const r=Zn(e.title);return e.parent?[...la(e.parent,!1),Zn(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Zn(e){return U0(e).toLowerCase().replaceAll(/\s/g,"-")}function ch({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function W(e){const t={...e,entryType:he.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:he.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(sa)};r.add(n.title),t.elementExamples[Zn(o.title)]=o}}),t}var Ue;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Ue||(Ue={}));var ss;(function(e){e.Upper="upper",e.Lower="lower"})(ss||(ss={}));function uh(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ic(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ic.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function xi(e=1){const t=Ic();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function dh(e){return hh(e,1)}async function hh(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{uh(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn=window,ca=Mn.ShadowRoot&&(Mn.ShadyCSS===void 0||Mn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ua=Symbol(),ls=new WeakMap;let Pc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ua)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ca&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ls.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ls.set(r,t))}return t}toString(){return this.cssText}};const L=e=>new Pc(typeof e=="string"?e:e+"",void 0,ua),En=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Pc(r,e,ua)},fh=(e,t)=>{ca?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Mn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},cs=ca?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return L(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oo;const Wn=window,us=Wn.trustedTypes,mh=us?us.emptyScript:"",ds=Wn.reactiveElementPolyfillSupport,Ai={toAttribute(e,t){switch(t){case Boolean:e=e?mh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Bc=(e,t)=>t!==e&&(t==t||e==e),Do={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Bc},$i="finalized";let Zt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Do){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Do}static finalize(){if(this.hasOwnProperty($i))return!1;this[$i]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(cs(o))}else t!==void 0&&r.push(cs(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fh(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Do){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ai).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Ai;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Bc)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Zt[$i]=!0,Zt.elementProperties=new Map,Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},ds==null||ds({ReactiveElement:Zt}),((Oo=Wn.reactiveElementVersions)!==null&&Oo!==void 0?Oo:Wn.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var No;const Un=window,Jt=Un.trustedTypes,hs=Jt?Jt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gn="$lit$",_e=`lit$${(Math.random()+"").slice(9)}$`,da="?"+_e,ph=`<${da}>`,Bt=document,Or=()=>Bt.createComment(""),Dr=e=>e===null||typeof e!="object"&&typeof e!="function",Lc=Array.isArray,Oc=e=>Lc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qo=`[ 	
\f\r]`,fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fs=/-->/g,ms=/>/g,yt=RegExp(`>|${qo}(?:([^\\s"'>=/]+)(${qo}*=${qo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ps=/'/g,gs=/"/g,Dc=/^(?:script|style|textarea|title)$/i,Nc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),gh=Nc(1),vh=Nc(2),$e=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),vs=new WeakMap,St=Bt.createTreeWalker(Bt,129,null,!1);function qc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return hs!==void 0?hs.createHTML(t):t}const Hc=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=fr;for(let s=0;s<r;s++){const l=e[s];let c,d,f=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===fr?d[1]==="!--"?a=fs:d[1]!==void 0?a=ms:d[2]!==void 0?(Dc.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=yt):d[3]!==void 0&&(a=yt):a===yt?d[0]===">"?(a=o??fr,f=-1):d[1]===void 0?f=-2:(f=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?yt:d[3]==='"'?gs:ps):a===gs||a===ps?a=yt:a===fs||a===ms?a=fr:(a=yt,o=void 0);const g=a===yt&&e[s+1].startsWith("/>")?" ":"";i+=a===fr?l+ph:f>=0?(n.push(c),l.slice(0,f)+Gn+l.slice(f)+_e+g):l+_e+(f===-2?(n.push(void 0),s):g)}return[qc(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Nr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=Hc(t,r);if(this.el=Nr.createElement(c,n),St.currentNode=this.el.content,r===2){const f=this.el.content,p=f.firstChild;p.remove(),f.append(...p.childNodes)}for(;(o=St.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const p of o.getAttributeNames())if(p.endsWith(Gn)||p.startsWith(_e)){const g=d[a++];if(f.push(p),g!==void 0){const v=o.getAttribute(g.toLowerCase()+Gn).split(_e),b=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:b[2],strings:v,ctor:b[1]==="."?Vc:b[1]==="?"?jc:b[1]==="@"?zc:Gr})}else l.push({type:6,index:i})}for(const p of f)o.removeAttribute(p)}if(Dc.test(o.tagName)){const f=o.textContent.split(_e),p=f.length-1;if(p>0){o.textContent=Jt?Jt.emptyScript:"";for(let g=0;g<p;g++)o.append(f[g],Or()),St.nextNode(),l.push({type:2,index:++i});o.append(f[p],Or())}}}else if(o.nodeType===8)if(o.data===da)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(_e,f+1))!==-1;)l.push({type:7,index:i}),f+=_e.length-1}i++}}static createElement(t,r){const n=Bt.createElement("template");return n.innerHTML=t,n}}function Lt(e,t,r=e,n){var o,i,a,s;if(t===$e)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Dr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Lt(e,l._$AS(e,t.values),l,n)),t}class Rc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Bt).importNode(n,!0);St.currentNode=i;let a=St.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new or(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new Fc(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=St.nextNode(),s++)}return St.currentNode=Bt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class or{constructor(t,r,n,o){var i;this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Lt(this,t,r),Dr(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==$e&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Oc(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==se&&Dr(this._$AH)?this._$AA.nextSibling.data=t:this.$(Bt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Nr.createElement(qc(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new Rc(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=vs.get(t.strings);return r===void 0&&vs.set(t.strings,r=new Nr(t)),r}T(t){Lc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new or(this.k(Or()),this.k(Or()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Gr{constructor(t,r,n,o,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=se}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Lt(this,t,r,0),a=!Dr(t)||t!==this._$AH&&t!==$e,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Lt(this,s[n+l],r,l),c===$e&&(c=this._$AH[l]),a||(a=!Dr(c)||c!==this._$AH[l]),c===se?t=se:t!==se&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vc extends Gr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}const wh=Jt?Jt.emptyScript:"";class jc extends Gr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==se?this.element.setAttribute(this.name,wh):this.element.removeAttribute(this.name)}}class zc extends Gr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=Lt(this,t,r,0))!==null&&n!==void 0?n:se)===$e)return;const o=this._$AH,i=t===se&&o!==se||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==se&&(o===se||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Fc{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Lt(this,t)}}const bh={O:Gn,P:_e,A:da,C:1,M:Hc,L:Rc,R:Oc,D:Lt,I:or,V:Gr,H:jc,N:zc,U:Vc,F:Fc},ws=Un.litHtmlPolyfillSupport;ws==null||ws(Nr,or),((No=Un.litHtmlVersions)!==null&&No!==void 0?No:Un.litHtmlVersions=[]).push("2.8.0");const yh=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new or(t.insertBefore(Or(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ho,Ro;let Sr=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return $e}};Sr.finalized=!0,Sr._$litElement$=!0,(Ho=globalThis.litElementHydrateSupport)===null||Ho===void 0||Ho.call(globalThis,{LitElement:Sr});const bs=globalThis.litElementPolyfillSupport;bs==null||bs({LitElement:Sr});((Ro=globalThis.litElementVersions)!==null&&Ro!==void 0?Ro:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wt=e=>(...t)=>({_$litDirective$:e,values:t});let rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:kh}=bh,ys=()=>document.createComment(""),mr=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(ys(),i),s=o.insertBefore(ys(),i);r=new kh(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},kt=(e,t,r=e)=>(e._$AI(t,r),e),xh={},Ah=(e,t=xh)=>e._$AH=t,$h=e=>e._$AH,Vo=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=wt(class extends rt{constructor(e){var t;if(super(e),e.type!==Yr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return $e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Ch=wt(class extends rt{constructor(e){if(super(e),e.type!==Yr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=$h(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let d,f,p=0,g=i.length-1,v=0,b=a.length-1;for(;p<=g&&v<=b;)if(i[p]===null)p++;else if(i[g]===null)g--;else if(l[p]===s[v])c[v]=kt(i[p],a[v]),p++,v++;else if(l[g]===s[b])c[b]=kt(i[g],a[b]),g--,b--;else if(l[p]===s[b])c[b]=kt(i[p],a[b]),mr(e,c[b+1],i[p]),p++,b--;else if(l[g]===s[v])c[v]=kt(i[g],a[v]),mr(e,i[p],i[g]),g--,v++;else if(d===void 0&&(d=ks(s,v,b),f=ks(l,p,g)),d.has(l[p]))if(d.has(l[g])){const y=f.get(s[v]),A=y!==void 0?i[y]:null;if(A===null){const T=mr(e,i[p]);kt(T,a[v]),c[v]=T}else c[v]=kt(A,a[v]),mr(e,i[p],A),i[y]=null;v++}else Vo(i[g]),g--;else Vo(i[p]),p++;for(;v<=b;){const y=mr(e,c[b+1]);kt(y,a[v]),c[v++]=y}for(;p<=g;){const y=i[p++];y!==null&&Vo(y)}return this.ut=s,Ah(e,c),$e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ci=class extends rt{constructor(t){if(super(t),this.et=se,t.type!==Yr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===se||t==null)return this.ft=void 0,this.et=t;if(t===$e)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Ci.directiveName="unsafeHTML",Ci.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xs extends Ci{}xs.directiveName="unsafeSVG",xs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Th(e,t,r){return e?t():r==null?void 0:r()}var Sh=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(A){if(A!==void 0&&typeof A!="function")throw new TypeError("Function expected");return A}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),f,p=!1,g=r.length-1;g>=0;g--){var v={};for(var b in n)v[b]=b==="access"?{}:n[b];for(var b in n.access)v.access[b]=n.access[b];v.addInitializer=function(A){if(p)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(A||null))};var y=(0,r[g])(s==="accessor"?{get:d.get,set:d.set}:d[l],v);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(f=a(y.get))&&(d.get=f),(f=a(y.set))&&(d.set=f),(f=a(y.init))&&o.unshift(f)}else(f=a(y))&&(s==="field"?o.unshift(f):d[l]=f)}c&&Object.defineProperty(c,n.name,d),p=!0},Mh=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Eh=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ih(){function e(t,r){return t}return e}let Zc=(()=>{let e=[Ih()],t,r=[],n,o=Sr;return n=class extends o{},Eh(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;Sh(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),Mh(n,r)})(),n})();function Ph(e){return!!e}const Bh={capitalizeFirstLetter:!1};function Lh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Oh(e,t){return t.capitalizeFirstLetter?Lh(e):e}function Dh(e,t=Bh){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Oh(n,t)}var As;(function(e){e.Upper="upper",e.Lower="lower"})(As||(As={}));const Nh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ha(e,t){return e?Nh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function qh(e){return e?e instanceof Error?e.message:ha(e,"message")?String(e.message):String(e):""}function Hh(e){return e instanceof Error?e:new Error(qh(e))}function Rh(e){return!!e&&typeof e=="object"}function Ot(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Wc(e,t){let r=!1;const n=Ot(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ot(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}var Kt;(function(e){e.Upper="upper",e.Lower="lower"})(Kt||(Kt={}));function Vh(e){return e.toLowerCase()!==e.toUpperCase()}function $s(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Vh(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Kt.Upper&&o!==o.toUpperCase())return!1;if(t===Kt.Lower&&o!==o.toLowerCase())return!1}return!0}function jh(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=$s(a,Kt.Lower,{blockNoCaseCharacters:!0})||$s(s,Kt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function zh(e){return!!e&&typeof e=="object"}function Cs(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Fh(e){return Array.isArray(e)?"array":typeof e}function Zh(e,t){return Fh(e)===t}function Wh(e,t){let r=!1;const n=Cs(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Cs(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function nt(e){if(zh(e))return Wh(e,(r,n)=>{if(!Zh(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(jh(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?L(r):r.startsWith("-")?En`-${L(r)}`:En`--${L(r)}`;return{name:a,value:En`var(${a}, ${L(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${nt.name}' function.`)}function Ti({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uh=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Gh=(e,t,r)=>{t.constructor.createProperty(r,e)};function Uc(e){return(t,r)=>r!==void 0?Gh(e,t,r):Uh(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jo;((jo=window.HTMLSlotElement)===null||jo===void 0?void 0:jo.prototype.assignedElements)!=null;function Yh(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Si(e){return ha(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function fa(e){return ha(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Gc(e){return e.map(t=>Si(t)?t.definition:t).filter(t=>fa(t))}const Yc=new WeakMap;function Qh(e,t){var o;const r=Gc(t);return(o=Qc(Yc,[e,...r]).value)==null?void 0:o.template}function Xh(e,t,r){const n=Gc(t);return Jc(Yc,[e,...n],r)}function Qc(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Xc(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Qc(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Xc(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Jc(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Xc(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Jc(l,t,r,n+1)}const Jh=new WeakMap;function Kc(e,t,r){const n=Qh(e,t),o=n??r();if(!n){const s=Xh(e,t,o);if(s.result)Jh.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Yh(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function _c(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const f=o.length-1,p=o[f],g=d-1,v=t[g];n&&n(c);let b,y=[];if(typeof p=="string"&&(b=r(p,c,v),b)){o[f]=p+b.replacement,a.push(g);const T=b.getExtraValues;y=T?T(v):[],y.length&&T?(o[f]+=" ",y.forEach((q,Z)=>{Z&&o.push(" ")}),s.push(q=>{const Z=q[g],ie=T(Z);return{index:g,values:ie}}),o.push(c)):o[f]+=c}b||o.push(c);const A=e.raw[d];b?(i[f]=i[f]+b.replacement+A,y.length&&y.forEach(()=>{i.push("")})):i.push(A)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function Kh(...[e,t,r]){if(fa(r))return{replacement:r.tagName,getExtraValues:void 0}}function _h(e,t){return _c(e,t,Kh)}function m(e,...t){const r=Kc(e,t,()=>_h(e,t));return En(r.strings,...r.values)}const ma=Symbol("key for ignoring inputs not having been set yet"),ef={[ma]:!0,allowPolymorphicState:!1};function eu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Zc?!0:eu(r)}function tu(e,t){const r=e.instanceState;Ot(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ot(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),tf(e)}function tf(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ts(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class rf extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function pa(){return e=>{var t;return t=class extends rf{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Q(){return pa()}function nf(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=pa()(r);return t[r]=n,t},{}):{}}const of="_elementVirStateSetup";function af(e){return Rh(e)?of in e:!1}function sf(e,t){return e.includes(t)}var Ss;(function(e){e.Upper="upper",e.Lower="lower"})(Ss||(Ss={}));const lf=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function In(e,t){return e?lf.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Qr(e){return!!e&&typeof e=="object"}function Yn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Mi(e){return Array.isArray(e)?"array":typeof e}function Gt(e,t){return Mi(e)===t}function cf(e,t){let r=!1;const n=Yn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Yn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function uf(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Mi(e)===Mi(t)&&r}const ga=Symbol("and"),va=Symbol("or"),ru=Symbol("exact"),nu=Symbol("enum"),wa=Symbol("unknown"),ou="__vir__shape__definition__key__do__not__use__in__actual__objects";function iu(e){return In(e,ou)}const au="__vir__shape__specifier__key__do__not__use__in__actual__objects",df=[ga,va,ru,nu,wa];function xt(...e){return Aa(e,va)}function hf(...e){return Aa(e,ga)}function ff(){return Aa([],wa)}function wo(e){return Xr(e,va)}function ba(e){return Xr(e,ga)}function ya(e){return Xr(e,ru)}function ka(e){return Xr(e,nu)}function xa(e){return Xr(e,wa)}function Xr(e,t){const r=bo(e);return!!r&&r.specifierType===t}function Aa(e,t){return{[au]:!0,specifierType:t,parts:e}}function Pn(e,t){const r=bo(t);if(r){if(ba(r))return r.parts.every(n=>Pn(e,n));if(wo(r))return r.parts.some(n=>Pn(e,n));if(ya(r))return Qr(e)?Pn(e,r.parts[0]):e===r.parts[0];if(ka(r))return Object.values(r.parts[0]).some(n=>n===e);if(xa(r))return!0}return uf(e,t)}function bo(e){if(Qr(e)&&In(e,au)){if(!In(e,"parts")||!Gt(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!In(e,"specifierType")||!sf(df,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Ei(e,t=!1){return Ii(e)}function Ii(e){const t=bo(e);if(t){if(wo(t)||ya(t))return Ii(t.parts[0]);if(ba(t))return t.parts.reduce((r,n)=>Object.assign(r,Ii(n)),{});if(ka(t))return Object.values(t.parts[0])[0];if(xa(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return iu(e)?Ei(e.shape):e instanceof RegExp||Gt(e,"array")?e:Qr(e)?cf(e,(r,n)=>Ei(n)):e}function Jr(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Ei(e),[ou]:!0}}class He extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function mf(e,t,r={}){try{return su(e,t,r),!0}catch{return!1}}function su(e,t,r={}){Tt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function lu(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Tt(e,t,r,n){if(xa(t))return!0;if(iu(t))return Tt(e,t.shape,r,n);const o=lu(r);if(bo(e))throw new He(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Pn(e,t))throw new He(`Subject does not match shape definition at key ${o}`);if(Gt(t,"function"))return Gt(e,"function");if(Qr(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(wo(t))l=t.parts.some(c=>{try{const d=Tt(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof He)return!1;throw d}});else if(ba(t))l=t.parts.every(c=>{try{const d=Tt(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof He)return!1;throw d}});else if(ya(t)){const c=Tt(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(ka(t))throw new He(`Cannot compare an enum specifier to an object at ${o}`);if(Gt(t,"array")&&Gt(a,"array"))l=a.every((c,d)=>{const f=t.some(p=>{try{return Tt(c,p,[...r,d],n),!0}catch(g){if(g instanceof He)return!1;throw g}});return s[d]=f,f});else{const c=pf({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(f=>!s[f]).join(",")}`;throw new He(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new He(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function pf({keys:e,options:t,shape:r,subject:n}){const o=lu(e),i={};if(Qr(r)){const a=new Set(Yn(n)),s=new Set(Yn(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new He(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var p;const c=r[l],d=wo(c)?c.parts.includes(void 0):!1,f=((p=c==null?void 0:c.includes)==null?void 0:p.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!f)throw new He(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];Tt(c,d,[...e,l],t),i[l]=!0})}else throw new He(`shape definition at ${o} was not an object.`);return i}const gf=Jr({addListener(){return!1},removeListener(){return!1},value:ff()});function zo(e){return mf(e,gf,{allowExtraKeys:!0})}function vf(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ms(e,t){const r=e;function n(a){t?vf(a,e,e.tagName):Uc()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=af(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function f(v){a[s]=v,r[s]=v}const p=e.observablePropertyListenerMap[s];if(d!==c&&zo(d)&&(p!=null&&p.length)&&d.removeListener(p),zo(c))if(p)c.addListener(p);else{let v=function(){e.requestUpdate()};var g=v;e.observablePropertyListenerMap[s]=v,c.addListener(v)}else zo(d)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function wf(e){return e?Wc(e,t=>t):{}}function bf({hostClassNames:e,cssVars:t}){return{hostClasses:Wc(e,(r,n)=>({name:L(n),selector:L(`:host(.${n})`)})),cssVars:t}}function yf({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Ot(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function kf(e,t){function r(o){Ot(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var xf=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function yo(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ef,...e.options},n=nf(e.events),o=wf(e.hostClasses);e.hostClasses&&Ts(e.tagName,e.hostClasses),e.cssVars&&Ts(e.tagName,e.cssVars);const i=e.cssVars?nt(e.cssVars):{},a=typeof e.styles=="function"?e.styles(bf({hostClassNames:o,cssVars:i})):e.styles||m``,s=e.renderCallback;function l(...[d]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:d}}const c=(t=class extends Zc{createRenderParams(){return kf(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{eu(this)&&!this.haveInputsBeenSet&&!r[ma]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${yo.name}' to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const f=s(d);if(f instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return yf({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=Hh(d);throw f.message=`Failed to render '${e.tagName}': ${f.message}`,this.lastRenderError=f,f}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();if(e.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();if(e.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(d){tu(this,d)}constructor(){var f;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Ms(this,!1),this.instanceState=Ms(this,!((f=e.options)!=null&&f.allowPolymorphicState));const d=e.stateInitStatic||{};Ot(d).forEach(p=>{Uc()(this,p),this.instanceState[p]=d[p]}),this.definition=c}},xf(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Dh(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function cu(){return e=>yo({...e,options:{[ma]:!1,...e.options}})}function $a(e,t){return qr(e,t),e.element}function Af(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function qr(e,t){const r=Af(e),n=r?`: in ${r}`:"";if(e.type!==Yr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function $f(e,t){return t?Es(e,t):Es(void 0,e)}const Es=wt(class extends rt{constructor(e){super(e),this.element=$a(e,"assign")}render(e,t){return tu(this.element,t),$e}});function Cf(e){const t=wt(class extends rt{constructor(r){super(r),this.element=$a(r,"testId")}render(r){return this.element.setAttribute(e,r),$e}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function $(e,t){return Tf(e,t)}const Tf=wt(class extends rt{constructor(e){super(e),this.element=$a(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),$e}}),Is="onDomCreated",Ps=wt(class extends rt{constructor(e){super(e),qr(e,Is)}update(e,[t]){qr(e,Is);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Fo="onResize",Hr=wt(class extends rt{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),qr(e,Fo)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Fo} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){qr(e,Fo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function xe(e,t,r){return Th(e,()=>t,()=>r)}const{attributeDirective:Sf,attributeSelector:Vw,attributeName:jw}=Cf("data-test-id");function Ca(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),cu()(r(n))),defineElementNoInputs:n=>(t(n),yo(r(n)))}}function Mf(...[e,t,r]){const n=Si(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=fa(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const d=Si(c)?c.inputs:void 0;return[o&&d?$f(d):void 0].filter(Ph)}}}function Ef(e){}function If(e){return _c(e.strings,e.values,Mf,Ef)}function u(e,...t){const r=gh(e,...t),n=Kc(e,t,()=>If(r));return{...r,strings:n.strings,values:n.values}}var Bs;(function(e){e.Upper="upper",e.Lower="lower"})(Bs||(Bs={}));const Pf={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Bf=Object.keys(Pf),Lf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Bf,...Lf];function yr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Of={[he.ElementExample]:()=>[],[he.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...lh(e.controls,e.title)].filter(sa),[he.Root]:()=>[]},Qn="_isBookTreeNode",uu=new Map;function Df(e){return uu.get(e)}function Nf(e,t){X0(uu,e,()=>t)}function Yt(e,t){return!!(du(e)&&e.entry.entryType===t)}function du(e){return!!(Tc(e,[Qn,"entry"])&&e[Qn])}function qf(){return{[Qn]:!0,entry:{entryType:he.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Hf({entries:e,debug:t}){const r=Df(e);if(r)return r;const n=qf();e.forEach(a=>Ta({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=hu(n),i={tree:n,flattenedNodes:o};return Nf(e,i),t&&console.info("element-book tree:",n),i}function Rf(e,t,r){if(!t.parent)return e;const n=Pi(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ta({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Pi(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${la(t,!1)}`);return o}function Ta({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Of[t.entryType](t);t.errors.push(...o);const i=Rf(e,t,r),a=Zn(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Qn]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,ah(t,he.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Ta({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Pi(e,t){const r=du(e)?e.fullUrlBreadcrumbs.slice(0,-1):la(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function hu(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>hu(o));return[e,...r].flat()}function Sa(e,t){return Ma(e,["",...t],void 0)}function Ma(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Ma(i,n,r);return{...e.controls,...a}}function Vf(e,t,r){const n={...e};return Ma(n,["",...t],r),n}function fu(e,t){const r=(t==null?void 0:t.controls)||(Yt(e,he.Page)?Fn(e.entry.controls,(o,i)=>i.initValue):{});return{children:Fn(e.children,(o,i)=>{var a;return fu(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function jf({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const zf=ih(32);function Bn(e){return e.join(zf)}function mu(e){if(!e.length)return[];const t=Bn(e),r=mu(e.slice(0,-1));return[t,...r]}const Ff=["error","errors"];function Zf(e){return Ff.includes(e)}function Wf({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Bn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Zf(t),a=Bn(o.fullUrlBreadcrumbs);if(jf({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=mu(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Bn(o.fullUrlBreadcrumbs),a=r[i];if(!vo(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var ge;(function(e){e.Search="search",e.Book="book"})(ge||(ge={}));function Bi(e){return e[0]===ge.Book?"":e[1]?decodeURIComponent(e[1]):""}const _t={hash:void 0,paths:[ge.Book],search:void 0},Uf=0;function Ea(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Uf)}class ko extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Ls extends ko{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Rr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Gf=globalThis.history.pushState;function Os(...e){const t=Gf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Rr)),t}const Yf=globalThis.history.replaceState;function Ds(...e){const t=Yf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Rr)),t}function Qf(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Os)throw new Ls("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ds)throw new Ls("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Os,globalThis.history.replaceState=Ds,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Rr))})}}function xo(e){return!!e}var Ns;(function(e){e.Upper="upper",e.Lower="lower"})(Ns||(Ns={}));function Xf(e,t){return e.split(t)}function Jf(e){return e?e instanceof Error?e.message:Xn(e,"message")?String(e.message):String(e):""}function Kf(e){return!!e&&typeof e=="object"}const _f=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Xn(e,t){return e?_f.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function qs(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function pu(e,t,r=!1,n={}){const o=qs(e),i=new Set(qs(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Xn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||gu(l,c,s,r,n[a]??{})})}function gu(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Xn(t,"constructor")&&(!Xn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(f=>{try{gu(l,f,r,n,o);return}catch(p){return new Error(`entry at index "${c}" did not match expected shape: ${Jf(p)}`)}}).filter(xo).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Kf(t)&&pu(e,t,n,o)}function e1(e){return Array.isArray(e)?"array":typeof e}function t1(e,t){return e1(e)===t}function r1({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function n1(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(xo);return t.length?`?${t.join("&")}`:""}function o1(e){return r1({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=Xf(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(xo)}function i1(e,t){const r=t1(e,"string")?new URL(e):e,n=o1(r.search),o=Object.fromEntries(n);return t&&pu(o,t),o}function a1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?i1(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function vu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function wu({routeBase:e,windowPath:t}){if(!e)return"";const r=vu(e);if(bu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?wu({routeBase:n,windowPath:t}):""}function bu({routeBase:e,windowPath:t}){const r=vu(e);return r?t.startsWith(`/${r}`):!1}class s1 extends ko{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function yu(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Hs=6;function Rs(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Hs)throw new s1(`Route sanitization depth has exceed the max of ${Hs} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(yu(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Zo extends ko{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function l1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Zo(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Zo(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Zo(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function c1(e,t,r=!1){const n=ku(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function ku(e,t){var s;const r=bu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?n1(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(xo).join("/")}${n}${i}`}function u1(e={}){l1(e),Qf();const t=e.routeBase?wu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Rs(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&yu(l,d)))return c1(d,t,a)},createRoutesUrl(i){return ku(i,t)},getCurrentRawRoutes(){return a1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ko(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Rr,n),r=!0),i&&Rs(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Rr,n),r=!1),a},sanitizationDepth:0};return o}function d1(e){return u1({routeBase:e,routeSanitizer(t){return{paths:h1(t.paths),hash:void 0,search:void 0}}})}function h1(e){const t=e[0];if(_0(t,ge)){if(t===ge.Book)return[ge.Book,...e.slice(1)];if(t===ge.Search)return e[1]?[t,e[1]]:[ge.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return _t.paths}const V=nt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),f1={nav:{hover:{background:V["element-book-nav-hover-background-color"],foreground:V["element-book-nav-hover-foreground-color"]},active:{background:V["element-book-nav-active-background-color"],foreground:V["element-book-nav-active-foreground-color"]},selected:{background:V["element-book-nav-selected-background-color"],foreground:V["element-book-nav-selected-foreground-color"]}},accent:{icon:V["element-book-accent-icon-color"]},page:{background:V["element-book-page-background-color"],backgroundFaint1:V["element-book-page-background-faint-level-1-color"],backgroundFaint2:V["element-book-page-background-faint-level-2-color"],foreground:V["element-book-page-foreground-color"],foregroundFaint1:V["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:V["element-book-page-foreground-faint-level-2-color"]}};function m1(e,t){xu(e,t,f1)}function Li(e){return po(e,"_$cssResult$")}function Vs(e){return Tc(e,["name","value","default"])&&vo(e.default,"string")&&Li(e.name)&&Li(e.value)}function xu(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Li(o)){if(!Vs(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ti({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Vs(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);xu(e,o,i)}})}function le(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Kr(e){return dt(e)==="string"}function dt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Jn(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Au(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function $u(e){return e[e.length-1]}function Kn(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Cu(e,t,r){return(r-e)/(t-e)}function Ia(e,t,r){return Kn(t[0],t[1],Cu(e[0],e[1],r))}function Tu(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var p1=Object.freeze({__proto__:null,interpolate:Kn,interpolateInv:Cu,isString:Kr,last:$u,mapRange:Ia,multiplyMatrices:le,parseCoordGrammar:Tu,parseFunction:Au,toPrecision:Jn,type:dt});class g1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ft=new g1;var Ge={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const je={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Oi(e){return Array.isArray(e)?e:je[e]}function _n(e,t,r,n={}){if(e=Oi(e),t=Oi(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ft.run("chromatic-adaptation-start",o),o.M||(o.W1===je.D65&&o.W2===je.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===je.D50&&o.W2===je.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ft.run("chromatic-adaptation-end",o),o.M)return le(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const v1=75e-6,ye=class ye{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?ye.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Oi(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:w1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ft.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=v1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=js(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=js(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=ye.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=ye.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(ye.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof ye)return t;if(dt(t)==="string"){let o=ye.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return ye.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=dt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=ye.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=dt(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=ye.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Lo(ye,"registry",{}),Lo(ye,"DEFAULT_FORMAT",{type:"functions",name:"color"});let S=ye;function w1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function js(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Tu(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Ia(s,l,i)),i=Jn(i,o),c&&(i+=c),i})}return e}var Be=new S({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class we extends S{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Be),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=le(t.toXYZ_M,r);return this.white!==this.base.white&&(n=_n(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=_n(this.base.white,this.white,r),le(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Su(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(ft.run("parse-start",r),r.color)return r.color;if(r.parsed=Au(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let p of S.all){let g=p.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const v=Object.keys(p.coords).map((b,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:p.id,coords:v,alpha:d}}}let f="";if(c in S.registry){let p=(s=(a=(i=S.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;p&&(f=`Did you mean color(${p})?`)}throw new TypeError(`Cannot parse color(${c}). `+(f||"Missing a plugin?"))}else for(let c of S.all){let d=c.getFormat(l);if(d&&d.type==="function"){let f=1;(d.lastAlpha||$u(r.parsed.args).alpha)&&(f=r.parsed.args.pop());let p=r.parsed.args,g;return d.coordGrammar&&(g=Object.entries(c.coords).map(([v,b],y)=>{var ue;let A=d.coordGrammar[y],T=(ue=p[y])==null?void 0:ue.type,q=A.find(re=>re==T);if(!q){let re=b.name||v;throw new TypeError(`${T} not allowed for ${re} in ${l}()`)}let Z=q.range;T==="<percentage>"&&(Z||(Z=[0,1]));let ie=b.range||b.refRange;return Z&&ie&&(p[y]=Ia(Z,ie,p[y])),q})),t&&Object.assign(t,{formatId:d.name,types:g}),{spaceId:c.id,coords:p,alpha:f}}}}else for(let l of S.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let f=d.parse(r.str);if(f)return f.alpha??(f.alpha=1),t&&(t.formatId=c),f}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function F(e){if(!e)throw new TypeError("Empty color reference");Kr(e)&&(e=Su(e));let t=e.space||e.spaceId;return t instanceof S||(e.space=S.get(t)),e.alpha===void 0&&(e.alpha=1),e}function _r(e,t){return t=S.get(t),t.from(e)}function Le(e,t){let{space:r,index:n}=S.resolveCoord(t,e.space);return _r(e,r)[n]}function Mu(e,t,r){return t=S.get(t),e.coords=t.to(e.space,r),e}function mt(e,t,r){if(e=F(e),arguments.length===2&&dt(arguments[1])==="object"){let n=arguments[1];for(let o in n)mt(e,o,n[o])}else{typeof r=="function"&&(r=r(Le(e,t)));let{space:n,index:o}=S.resolveCoord(t,e.space),i=_r(e,n);i[o]=r,Mu(e,n,i)}return e}var Pa=new S({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Be,fromBase:e=>_n(Be.white,"D50",e),toBase:e=>_n("D50",Be.white,e),formats:{color:{}}});const b1=216/24389,zs=24/116,ln=24389/27;let Wo=je.D50;var ke=new S({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Wo,base:Pa,fromBase(e){let r=e.map((n,o)=>n/Wo[o]).map(n=>n>b1?Math.cbrt(n):(ln*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>zs?Math.pow(t[0],3):(116*t[0]-16)/ln,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ln,t[2]>zs?Math.pow(t[2],3):(116*t[2]-16)/ln].map((n,o)=>n*Wo[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ao(e){return(e%360+360)%360}function y1(e,t){if(e==="raw")return t;let[r,n]=t.map(Ao),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Vr=new S({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ke,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ao(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Fs=25**7,eo=Math.PI,Zs=180/eo,Rt=eo/180;function Di(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=ke.from(e),l=Vr.from(ke,[i,a,s])[1],[c,d,f]=ke.from(t),p=Vr.from(ke,[c,d,f])[1];l<0&&(l=0),p<0&&(p=0);let v=((l+p)/2)**7,b=.5*(1-Math.sqrt(v/(v+Fs))),y=(1+b)*a,A=(1+b)*d,T=Math.sqrt(y**2+s**2),q=Math.sqrt(A**2+f**2),Z=y===0&&s===0?0:Math.atan2(s,y),ie=A===0&&f===0?0:Math.atan2(f,A);Z<0&&(Z+=2*eo),ie<0&&(ie+=2*eo),Z*=Zs,ie*=Zs;let ue=c-i,re=q-T,D=ie-Z,ce=Z+ie,ur=Math.abs(D),Ce;T*q===0?Ce=0:ur<=180?Ce=D:D>180?Ce=D-360:D<-180?Ce=D+360:console.log("the unthinkable has happened");let qt=2*Math.sqrt(q*T)*Math.sin(Ce*Rt/2),dr=(i+c)/2,Bo=(T+q)/2,Ja=Math.pow(Bo,7),Qe;T*q===0?Qe=ce:ur<=180?Qe=ce/2:ce<360?Qe=(ce+360)/2:Qe=(ce-360)/2;let Ka=(dr-50)**2,V0=1+.015*Ka/Math.sqrt(20+Ka),_a=1+.045*Bo,hr=1;hr-=.17*Math.cos((Qe-30)*Rt),hr+=.24*Math.cos(2*Qe*Rt),hr+=.32*Math.cos((3*Qe+6)*Rt),hr-=.2*Math.cos((4*Qe-63)*Rt);let es=1+.015*Bo*hr,j0=30*Math.exp(-1*((Qe-275)/25)**2),z0=2*Math.sqrt(Ja/(Ja+Fs)),F0=-1*Math.sin(2*j0*Rt)*z0,sn=(ue/(r*V0))**2;return sn+=(re/(n*_a))**2,sn+=(qt/(o*es))**2,sn+=F0*(re/(n*_a))*(qt/(o*es)),Math.sqrt(sn)}const k1=75e-6;function Mr(e,t=e.space,{epsilon:r=k1}={}){e=F(e),t=S.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function jr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function pt(e,{method:t=Ge.gamut_mapping,space:r=e.space}={}){if(Kr(arguments[1])&&(r=arguments[1]),r=S.get(r),Mr(e,r,{epsilon:0}))return F(e);let n=Ie(e,r);if(t!=="clip"&&!Mr(e,r)){let o=pt(jr(n),{method:"clip",space:r});if(Di(e,o)>2){let i=S.resolveCoord(t),a=i.space,s=i.id,l=Ie(n,a),d=(i.range||i.refRange)[0],f=.01,p=d,g=Le(l,s);for(;g-p>f;){let v=jr(l);v=pt(v,{space:r,method:"clip"}),Di(l,v)-2<f?p=Le(l,s):g=Le(l,s),mt(l,s,(p+g)/2)}n=Ie(l,r)}else n=o}if(t==="clip"||!Mr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Ie(n,e.space)),e.coords=n.coords,e}pt.returns="color";function Ie(e,t,{inGamut:r}={}){e=F(e),t=S.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=pt(o)),o}Ie.returns="color";function to(e,{precision:t=Ge.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=F(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??S.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Mr(e)&&(s=pt(jr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>Jn(g,t)));let d=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(g)}let f=e.alpha;t!==null&&(f=Jn(f,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${f}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${p})`}return i}const x1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],A1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var $o=new we({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:x1,fromXYZ_M:A1,formats:{color:{}}});const cn=1.09929682680944,Ws=.018053968510807;var Eu=new we({id:"rec2020",name:"REC.2020",base:$o,toBase(e){return e.map(function(t){return t<Ws*4.5?t/4.5:Math.pow((t+cn-1)/cn,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ws?cn*Math.pow(t,.45)-(cn-1):4.5*t})},formats:{color:{}}});const $1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],C1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Iu=new we({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:$1,fromXYZ_M:C1});const T1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],S1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Pu=new we({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:T1,fromXYZ_M:S1,formats:{color:{}}}),Us={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Gs=Array(3).fill("<percentage> | <number>[0, 255]"),Ys=Array(3).fill("<number>[0, 255]");var zr=new we({id:"srgb",name:"sRGB",base:Pu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Gs},rgb_number:{name:"rgb",commas:!0,coords:Ys,noAlpha:!0},color:{},rgba:{coords:Gs,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ys},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Us.black,t.alpha=0):t.coords=Us[e],t.coords)return t}}}}),Bu=new we({id:"p3",name:"P3",base:Iu,fromBase:zr.fromBase,toBase:zr.toBase,formats:{color:{id:"display-p3"}}});Ge.display_space=zr;if(typeof CSS<"u"&&CSS.supports)for(let e of[ke,Eu,Bu]){let t=e.getMinCoords(),n=to({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Ge.display_space=e;break}}function M1(e,{space:t=Ge.display_space,...r}={}){let n=to(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Ge.display_space)n=new String(n),n.color=e;else{let o=Ie(e,t);n=new String(to(o,r)),n.color=o}return n}function Lu(e,t,r="lab"){r=S.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function E1(e,t){return e=F(e),t=F(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function gt(e){return Le(e,[Be,"y"])}function Ou(e,t){mt(e,[Be,"y"],t)}function I1(e){Object.defineProperty(e.prototype,"luminance",{get(){return gt(this)},set(t){Ou(this,t)}})}var P1=Object.freeze({__proto__:null,getLuminance:gt,register:I1,setLuminance:Ou});function B1(e,t){e=F(e),t=F(t);let r=Math.max(gt(e),0),n=Math.max(gt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const L1=.56,O1=.57,D1=.62,N1=.65,Qs=.022,q1=1.414,H1=.1,R1=5e-4,V1=1.14,Xs=.027,j1=1.14;function Js(e){return e>=Qs?e:e+(Qs-e)**q1}function Vt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function z1(e,t){t=F(t),e=F(e);let r,n,o,i,a,s;t=Ie(t,"srgb"),[i,a,s]=t.coords;let l=Vt(i)*.2126729+Vt(a)*.7151522+Vt(s)*.072175;e=Ie(e,"srgb"),[i,a,s]=e.coords;let c=Vt(i)*.2126729+Vt(a)*.7151522+Vt(s)*.072175,d=Js(l),f=Js(c),p=f>d;return Math.abs(f-d)<R1?n=0:p?(r=f**L1-d**O1,n=r*V1):(r=f**N1-d**D1,n=r*j1),Math.abs(n)<H1?o=0:n>0?o=n-Xs:o=n+Xs,o*100}function F1(e,t){e=F(e),t=F(t);let r=Math.max(gt(e),0),n=Math.max(gt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Z1=5e4;function W1(e,t){e=F(e),t=F(t);let r=Math.max(gt(e),0),n=Math.max(gt(t),0);return n>r&&([r,n]=[n,r]),n===0?Z1:(r-n)/n}function U1(e,t){e=F(e),t=F(t);let r=Le(e,[ke,"l"]),n=Le(t,[ke,"l"]);return Math.abs(r-n)}const G1=216/24389,Ks=24/116,un=24389/27;let Uo=je.D65;var Ni=new S({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Uo,base:Be,fromBase(e){let r=e.map((n,o)=>n/Uo[o]).map(n=>n>G1?Math.cbrt(n):(un*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ks?Math.pow(t[0],3):(116*t[0]-16)/un,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/un,t[2]>Ks?Math.pow(t[2],3):(116*t[2]-16)/un].map((n,o)=>n*Uo[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Go=Math.pow(5,.5)*.5+.5;function Y1(e,t){e=F(e),t=F(t);let r=Le(e,[Ni,"l"]),n=Le(t,[Ni,"l"]),o=Math.abs(Math.pow(r,Go)-Math.pow(n,Go)),i=Math.pow(o,1/Go)*Math.SQRT2-40;return i<7.5?0:i}var Ln=Object.freeze({__proto__:null,contrastAPCA:z1,contrastDeltaPhi:Y1,contrastLstar:U1,contrastMichelson:F1,contrastWCAG21:B1,contrastWeber:W1});function Q1(e,t,r={}){Kr(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Ln).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=F(e),t=F(t);for(let i in Ln)if("contrast"+n.toLowerCase()===i.toLowerCase())return Ln[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Du(e){let[t,r,n]=_r(e,Be),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Nu(e){let[t,r,n]=_r(e,Be),o=t+r+n;return[t/o,r/o]}function X1(e){Object.defineProperty(e.prototype,"uv",{get(){return Du(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Nu(this)}})}var J1=Object.freeze({__proto__:null,register:X1,uv:Du,xy:Nu});function K1(e,t){return Lu(e,t,"lab")}const _1=Math.PI,_s=_1/180;function em(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=ke.from(e),[,s,l]=Vr.from(ke,[o,i,a]),[c,d,f]=ke.from(t),p=Vr.from(ke,[c,d,f])[1];s<0&&(s=0),p<0&&(p=0);let g=o-c,v=s-p,b=i-d,y=a-f,A=b**2+y**2-v**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let q=.0638*s/(1+.0131*s)+.638,Z;Number.isNaN(l)&&(l=0),l>=164&&l<=345?Z=.56+Math.abs(.2*Math.cos((l+168)*_s)):Z=.36+Math.abs(.4*Math.cos((l+35)*_s));let ie=Math.pow(s,4),ue=Math.sqrt(ie/(ie+1900)),re=q*(ue*Z+1-ue),D=(g/(r*T))**2;return D+=(v/(n*q))**2,D+=A/re**2,Math.sqrt(D)}const el=203;var Ba=new S({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Be,fromBase(e){return e.map(t=>Math.max(t*el,0))},toBase(e){return e.map(t=>Math.max(t/el,0))}});const dn=1.15,hn=.66,tl=2610/2**14,tm=2**14/2610,rl=3424/2**12,nl=2413/2**7,ol=2392/2**7,rm=1.7*2523/2**5,il=2**5/(1.7*2523),fn=-.56,Yo=16295499532821565e-27,nm=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],om=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],im=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],am=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var qu=new S({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ba,fromBase(e){let[t,r,n]=e,o=dn*t-(dn-1)*n,i=hn*r-(hn-1)*t,s=le(nm,[o,i,n]).map(function(p){let g=rl+nl*(p/1e4)**tl,v=1+ol*(p/1e4)**tl;return(g/v)**rm}),[l,c,d]=le(im,s);return[(1+fn)*l/(1+fn*l)-Yo,c,d]},toBase(e){let[t,r,n]=e,o=(t+Yo)/(1+fn-fn*(t+Yo)),a=le(am,[o,r,n]).map(function(p){let g=rl-p**il,v=ol*p**il-nl;return 1e4*(g/v)**tm}),[s,l,c]=le(om,a),d=(s+(dn-1)*c)/dn,f=(l+(hn-1)*d)/hn;return[d,f,c]},formats:{color:{}}}),qi=new S({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:qu,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ao(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function sm(e,t){let[r,n,o]=qi.from(e),[i,a,s]=qi.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,f=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const Hu=3424/4096,Ru=2413/128,Vu=2392/128,al=2610/16384,lm=2523/32,cm=16384/2610,sl=32/2523,um=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],dm=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hm=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],fm=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Hi=new S({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ba,fromBase(e){let t=le(um,e);return mm(t)},toBase(e){let t=pm(e);return le(fm,t)},formats:{color:{}}});function mm(e){let t=e.map(function(r){let n=Hu+Ru*(r/1e4)**al,o=1+Vu*(r/1e4)**al;return(n/o)**lm});return le(dm,t)}function pm(e){return le(hm,e).map(function(n){let o=Math.max(n**sl-Hu,0),i=Ru-Vu*n**sl;return 1e4*(o/i)**cm})}function gm(e,t){let[r,n,o]=Hi.from(e),[i,a,s]=Hi.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const vm=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],wm=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],bm=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],ym=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var ro=new S({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Be,fromBase(e){let r=le(vm,e).map(n=>Math.cbrt(n));return le(bm,r)},toBase(e){let r=le(ym,e).map(n=>n**3);return le(wm,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function km(e,t){let[r,n,o]=ro.from(e),[i,a,s]=ro.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var no={deltaE76:K1,deltaECMC:em,deltaE2000:Di,deltaEJz:sm,deltaEITP:gm,deltaEOK:km};function kr(e,t,r={}){Kr(r)&&(r={method:r});let{method:n=Ge.deltaE,...o}=r;e=F(e),t=F(t);for(let i in no)if("deltae"+n.toLowerCase()===i.toLowerCase())return no[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function xm(e,t=.25){let n=[S.get("oklch","lch"),"l"];return mt(e,n,o=>o*(1+t))}function Am(e,t=.25){let n=[S.get("oklch","lch"),"l"];return mt(e,n,o=>o*(1-t))}var $m=Object.freeze({__proto__:null,darken:Am,lighten:xm});function ju(e,t,r=.5,n={}){[e,t]=[F(e),F(t)],dt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return en(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function zu(e,t,r={}){let n;La(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[F(e),F(t)],n=en(e,t,l));let c=kr(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,f=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)f=[{p:.5,color:n(.5)}];else{let p=1/(d-1);f=Array.from({length:d},(g,v)=>{let b=v*p;return{p:b,color:n(b)}})}if(o>0){let p=f.reduce((g,v,b)=>{if(b===0)return 0;let y=kr(v.color,f[b-1].color,i);return Math.max(g,y)},0);for(;p>o;){p=0;for(let g=1;g<f.length&&f.length<s;g++){let v=f[g-1],b=f[g],y=(b.p+v.p)/2,A=n(y);p=Math.max(p,kr(A,v.color),kr(A,b.color)),f.splice(g,0,{p:y,color:n(y)}),g++}}}return f=f.map(p=>p.color),f}function en(e,t,r={}){if(La(e)){let[l,c]=[e,t];return en(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=F(e),t=F(t),e=jr(e),t=jr(t);let s={colors:[e,t],options:r};if(n?n=S.get(n):n=S.registry[Ge.interpolationSpace]||e.space,o=o?S.get(o):n,e=Ie(e,n),t=Ie(t,n),e=pt(e),t=pt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[Le(e,c),Le(t,c)];[d,f]=y1(l,[d,f]),mt(e,c,d),mt(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((p,g)=>{let v=t.coords[g];return Kn(p,v,l)}),d=Kn(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return a&&(f.coords=f.coords.map(p=>p/d)),o!==n&&(f=Ie(f,o)),f},{rangeArgs:s})}function La(e){return dt(e)==="function"&&!!e.rangeArgs}Ge.interpolationSpace="lab";function Cm(e){e.defineFunction("mix",ju,{returns:"color"}),e.defineFunction("range",en,{returns:"function<color>"}),e.defineFunction("steps",zu,{returns:"array<color>"})}var Tm=Object.freeze({__proto__:null,isRange:La,mix:ju,range:en,register:Cm,steps:zu}),Fu=new S({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:zr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Zu=new S({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Fu,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Sm=new S({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Zu,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Mm=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Em=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Wu=new we({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Mm,fromXYZ_M:Em}),Im=new we({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Wu,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Pm=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Bm=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Uu=new we({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Pa,toXYZ_M:Pm,fromXYZ_M:Bm});const Lm=1/512,Om=16/512;var Dm=new we({id:"prophoto",name:"ProPhoto",base:Uu,toBase(e){return e.map(t=>t<Om?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Lm?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Nm=new S({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:ro,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ao(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ll=203,cl=2610/2**14,qm=2**14/2610,Hm=2523/2**5,ul=2**5/2523,dl=3424/2**12,hl=2413/2**7,fl=2392/2**7;var Rm=new we({id:"rec2100pq",name:"REC.2100-PQ",base:$o,toBase(e){return e.map(function(t){return(Math.max(t**ul-dl,0)/(hl-fl*t**ul))**qm*1e4/ll})},fromBase(e){return e.map(function(t){let r=Math.max(t*ll/1e4,0),n=dl+hl*r**cl,o=1+fl*r**cl;return(n/o)**Hm})},formats:{color:{id:"rec2100-pq"}}});const ml=.17883277,pl=.28466892,gl=.55991073,Qo=3.7743;var Vm=new we({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:$o,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Qo:(Math.exp((t-gl)/ml)+pl)/12*Qo})},fromBase(e){return e.map(function(t){return t/=Qo,t<=1/12?Math.sqrt(3*t):ml*Math.log(12*t-pl)+gl})},formats:{color:{id:"rec2100-hlg"}}});const Gu={};ft.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Yu(e.W1,e.W2,e.options.method))});ft.add("chromatic-adaptation-end",e=>{e.M||(e.M=Yu(e.W1,e.W2,e.options.method))});function Co({id:e,toCone_M:t,fromCone_M:r}){Gu[e]=arguments[0]}function Yu(e,t,r="Bradford"){let n=Gu[r],[o,i,a]=le(n.toCone_M,e),[s,l,c]=le(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],f=le(d,n.toCone_M);return le(n.fromCone_M,f)}Co({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Co({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Co({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Co({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(je,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});je.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const jm=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],zm=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Qu=new we({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:je.ACES,toXYZ_M:jm,fromXYZ_M:zm,formats:{color:{}}});const mn=2**-16,Xo=-.35828683,pn=(Math.log2(65504)+9.72)/17.52;var Fm=new we({id:"acescc",name:"ACEScc",coords:{r:{range:[Xo,pn],name:"Red"},g:{range:[Xo,pn],name:"Green"},b:{range:[Xo,pn],name:"Blue"}},referred:"scene",base:Qu,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-mn)*2:r<pn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(mn)+9.72)/17.52:t<mn?(Math.log2(mn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),vl=Object.freeze({__proto__:null,A98RGB:Im,A98RGB_Linear:Wu,ACEScc:Fm,ACEScg:Qu,HSL:Fu,HSV:Zu,HWB:Sm,ICTCP:Hi,JzCzHz:qi,Jzazbz:qu,LCH:Vr,Lab:ke,Lab_D65:Ni,OKLCH:Nm,OKLab:ro,P3:Bu,P3_Linear:Iu,ProPhoto:Dm,ProPhoto_Linear:Uu,REC_2020:Eu,REC_2020_Linear:$o,REC_2100_HLG:Vm,REC_2100_PQ:Rm,XYZ_ABS_D65:Ba,XYZ_D50:Pa,XYZ_D65:Be,sRGB:zr,sRGB_Linear:Pu});class I{constructor(...t){let r;t.length===1&&(r=F(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:S.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new I(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=M1(this,...t);return r.color=new I(r.color),r}static get(t,...r){return t instanceof I?t:new I(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=I.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let f=c(...d);return I.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>I.get(c)));return l};t in I||(I[t]=a),o&&(I.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)I.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(I);else for(let r in t)I.defineFunction(r,t[r])}}I.defineFunctions({get:Le,getAll:_r,set:mt,setAll:Mu,to:Ie,equals:E1,inGamut:Mr,toGamut:pt,distance:Lu,toString:to});Object.assign(I,{util:p1,hooks:ft,WHITES:je,Space:S,spaces:S.registry,parse:Su,defaults:Ge});for(let e of Object.keys(vl))S.register(vl[e]);for(let e in S.registry)Ri(e,S.registry[e]);ft.add("colorspace-init-end",e=>{var t;Ri(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ri(r,e)})});function Ri(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(I.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return S.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=S.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=S.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}I.extend(no);I.extend({deltaE:kr});Object.assign(I,{deltaEMethods:no});I.extend($m);I.extend({contrast:Q1});I.extend(J1);I.extend(P1);I.extend(Tm);I.extend(Ln);function Xu(e){return Fn(e,(t,r)=>r instanceof I?L(r.toString({format:"hex"})):Xu(r))}const Zm="dodgerblue";function Vi(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Jo({background:e,foreground:t}){return{background:e??new I(Vi(t)),foreground:t??new I(Vi(e))}}var oo;(function(e){e.Dark="dark",e.Light="light"})(oo||(oo={}));function Wm(e){return e==="black"?"white":"black"}const Um={black:{foregroundFaint1:new I("#ccc"),foregroundFaint2:new I("#eee")},white:{foregroundFaint1:new I("#ccc"),foregroundFaint2:new I("#eee")}},Gm={black:{backgroundFaint1:new I("#666"),backgroundFaint2:new I("#444")},white:{backgroundFaint1:new I("#ccc"),backgroundFaint2:new I("#fafafa")}};function wl({themeColor:e=Zm,themeStyle:t=oo.Light}={}){const r=new I(e),n=new I(t===oo.Dark?"black":"white"),o=Vi(n),i=new I(o),a={nav:{hover:Jo({background:r.clone().set({"hsl.l":93})}),active:Jo({background:r.clone().set({"hsl.l":90})}),selected:Jo({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Gm[Wm(o)],foreground:i,...Um[o]}};return Xu(a)}const io=pa()("element-book-change-route"),bl="vira-",{defineElement:ir,defineElementNoInputs:zw}=Ca({assertInputs:e=>{if(!e.tagName.startsWith(bl))throw new Error(`Tag name should start with '${bl}' but got '${e.tagName}'`)}});var yl;(function(e){e.Upper="upper",e.Lower="lower"})(yl||(yl={}));function Ju(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ju.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function kl(e){const t=Ju();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Ym="px";function Qm(e){return Xm({value:e,suffix:Ym})}function Xm({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Ku=m`
    pointer-events: none;
    opacity: 0.3;
`,ht=nt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),ao=nt({"vira-form-input-border-radius":"8px"}),so=nt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${ao["vira-form-input-border-radius"].value} + 4px)`});function _u({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=L(Qm(n+r+t));return m`
        ${L(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${so["vira-focus-outline-color"].value};
            border-radius: ${so["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Jm=m`
    padding: 0;
    margin: 0;
`,de=m`
    ${Jm};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function Km(e){return m`
        ${L(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${L(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const Oe=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ee=ir()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ji;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ji||(ji={}));ir()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ji.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Oe};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${so["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ku};
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
            border-radius: ${ao["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ht["vira-interaction-animation-duration"].value},
                background-color
                    ${ht["vira-interaction-animation-duration"].value},
                border-color ${ht["vira-interaction-animation-duration"].value};
        }

        ${_u({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ee} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${ee.assign({icon:e.icon})}></${ee}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var zi;(function(e){e.Header="header"})(zi||(zi={}));ir()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>m`
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
            transition: height ${ht["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Q()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?m`
                  height: ${e.contentHeight}px;
              `:m`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${$("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${zi.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Hr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const E=nt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function w({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const _m=w({name:"CloseX24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),e2=w({name:"Element16Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"Element24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const t2=w({name:"Loader24Icon",svgTemplate:u`
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
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),r2=m`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ht["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ed=w({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${r2}
        </style>
        ${t2.svgTemplate}
    `}),n2=w({name:"Options24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${E["vira-icon-stroke-color"].value}"
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),td=w({name:"StatusFailure24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"StatusInProgress24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});w({name:"StatusSuccess24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var er;(function(e){e.Loading="loading",e.Error="error"})(er||(er={}));const pr=ir()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:Q(),imageError:Q()},styles:({hostClasses:e})=>m`
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
                  <slot class="status-wrapper" name=${er.Error}>
                      <${ee.assign({icon:td})} class="error"></${ee}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                  <slot class="status-wrapper" name=${er.Loading}>
                      <${ee.assign({icon:ed})}></${ee}>
                  </slot>
              `;return u`
            ${xe(!!a,a)}
            <img
                class=${ve({hidden:!!a})}
                ${$("load",async()=>{e._debugLoadDelay&&await kl(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${$("error",async s=>{e._debugLoadDelay&&await kl(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Fi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Fi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function rd({value:e,allowed:t,blocked:r}){const n=t?Fi({input:e,matcher:t}):!0,o=r?Fi({input:e,matcher:r}):!1;return n&&!o}function nd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(rd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function o2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=yr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)rd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=nd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const On=ir()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Q(),inputBlocked:Q()},styles:({hostClasses:e,cssVars:t})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${so["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ku};
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
                ${Oe};
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
                border-radius: ${ao["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ht["vira-interaction-animation-duration"].value};
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
                border-radius: ${ao["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${_u({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Oe};
            }

            .close-x-button {
                ${de};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ht["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=nd({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${ee.assign({icon:e.icon})} class="left-side-icon"></${ee}>
              `:"",s=e.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${xe(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${Hr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${$("input",l=>{o2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${$("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${ee.assign({icon:_m})}></${ee}>
                        </button>
                    `)}
                ${xe(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});ir()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>m`
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
    `,events:{routeChange:Q()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Ea(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${$("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:De,defineElementNoInputs:Fw}=Ca(),Ee=De()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
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
                ${$("click",i=>{(!e.router||Ea(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new io(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function i2(e,t){return e.entry.entryType===he.Root?!1:!!(e.entry.entryType===he.Page||ut(t,e.fullUrlBreadcrumbs.slice(0,-1))||ut(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const Ke=De()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>m`
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
            ${Ee.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${ee} {
            display: inline-flex;
            color: ${V["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!i2(r,e.selectedPath))return;const n=m`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${Ee.assign({router:e.router,route:{paths:[ge.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ve({"title-row":!0,selected:e.selectedPath?ut(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${xe(Yt(r,he.ElementExample),u`
                                    <${ee.assign({icon:e2})}></${ee}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ee}>
                </li>
            `});return u`
            <${Ee.assign({route:_t,router:e.router})}>
                <slot name=${Ue.NavHeader}>Book</slot>
            </${Ee}>
            <ul>
                ${t}
            </ul>
        `}});async function a2(e){await xi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await dh(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const vt=De()({tagName:"book-error",styles:m`
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
    `,renderCallback({inputs:e}){return(vo(e.message,"array")?e.message:[e.message]).map(r=>u`
                <p>${r}</p>
            `)}}),Fr=De()({tagName:"book-page-controls",events:{controlValueChange:Q()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>m`
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

        ${On} {
            height: 24px;
            max-width: 128px;
        }

        ${ee}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===O.Hidden)return"";const a=s2(e.currentValues[n],o,s=>{const l=vo(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${xe(i===0,u`
                                <${ee.assign({icon:n2})}
                                    class="options-icon"
                                ></${ee}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function s2(e,t,r){return Ht(t,O.Hidden)?"":Ht(t,O.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${$("input",n=>{const o=yr(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ht(t,O.Color)?u`
            <input
                type="color"
                .value=${e}
                ${$("input",n=>{const o=yr(n,HTMLInputElement);r(o.value)})}
            />
        `:Ht(t,O.Text)?u`
            <${On.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${$(On.events.valueChange,n=>{r(n.detail)})}
            ></${On}>
        `:Ht(t,O.Number)?u`
            <input
                type="number"
                .value=${e}
                ${$("input",n=>{const o=yr(n,HTMLInputElement);r(o.value)})}
            />
        `:Ht(t,O.Dropdown)?u`
            <select
                .value=${e}
                ${$("input",n=>{const o=yr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const xl=De()({tagName:"book-breadcrumbs",styles:m`
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
                <${Ee.assign({route:{hash:void 0,search:void 0,paths:[ge.Book,...a]},router:e.router})}>
                    ${r}
                </${Ee}>
                ${s}
            `}):u`
                &nbsp;
            `}}),Ko=De()({tagName:"book-breadcrumbs-bar",styles:m`
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
            ${xe(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${xl.assign({currentRoute:e.currentRoute,router:e.router})}></${xl}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${$("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await nh(200),n.value===o&&(n.value?t(new io({paths:[ge.Search,encodeURIComponent(n.value)]})):t(new io(_t)))})}
            />
        `}}),Al=De()({tagName:"book-entry-description",styles:m`
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
            `)}}),$l=De()({tagName:"book-page-wrapper",styles:m`
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

        ${Ee} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[ge.Book,...e.pageNode.fullUrlBreadcrumbs],n=Sc(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ee.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ee}>
                    ${n?u`
                              <${vt.assign({message:n.message})}></${vt}>
                          `:u`
                              <${Al.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Al}>
                              <${Fr.assign({config:e.pageNode.entry.controls,currentValues:Sa(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Fr}>
                          `}
                </div>
            </div>
        `}}),gn=De()({tagName:"book-element-example-controls",styles:m`
        :host {
            display: flex;
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[ge.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${Ee.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ee}>
        `}}),Cl=Symbol("unset-internal-state"),Tl=De()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Cl},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Sc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Cl&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${xe(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${vt.assign({message:`${t.elementExampleNode.entry.title} failed: ${go(n)}`})}></${vt}>
            `}},options:{allowPolymorphicState:!0}}),Sl=De()({tagName:"book-element-example-wrapper",styles:m`
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

        ${gn} {
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${gn} {
            color: ${V["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${gn.assign(th(e,["currentPageControls"]))}></${gn}>
                <${Tl.assign(e)}></${Tl}>
            </div>
        `}});function od(e,t,r,n){const o=Pi(r,n),i=[];if(o){const a=od(e,t,o,n);a&&i.push(a)}if(Yt(r,he.Page)&&!e.includes(r)){const a=Sa(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:Fn(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function l2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=as(e,1)?od(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&as(e,1)?u`
                  <${Fr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Fr}>
              `:"",l=Ch(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Yt(c,he.Page))return u`
                    <${$l.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${$l}>
                `;if(Yt(c,he.ElementExample)){const f=Sa(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${Sl.assign({elementExampleNode:c,currentPageControls:f,router:r})}
                        class="inline-entry"
                    ></${Sl}>
                `}else return Yt(c,he.Root)?"":u`
                    <${vt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${vt}>
                `});return[s,l].flat()}const jt=De()({tagName:"book-entry-display",styles:m`
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

        ${Ko} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ht["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Q()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Bi(e.currentRoute.paths),a=l2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${Ko.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Ko}>

            ${xe(e.showLoading,u`
                    <div
                        ${Ps(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${ee.assign({icon:ed})}></${ee}>
                    </div>
                    ${xe(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${Ue.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${Ps(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${Ue.Footer}></slot>
                `)}
        `}});function c2(e,t,r){const n=Ml(e,t);if(n.length)return n;r(_t);const o=Ml(e,_t.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ml(e,t){return e.filter(r=>ch({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const _o=cu()({tagName:"element-book-app",events:{pathUpdate:Q()},stateInitStatic:{currentRoute:_t,router:void 0,loading:!0,colors:{config:void 0,theme:wl(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:m`
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

        ${jt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Ke} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{El(e,Bi(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,f,p,g,v,b,y;t._debug&&console.info("rendering element-book app");function a(A){return{...e.currentRoute,...A}}function s(A){const T=a(A);return!ut(e.currentRoute,T)}function l(A){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,A].filter(sa).join(" - "))}function c(A){if(!s(A))return;const T=a(A);e.router?e.router.setRoutes(T):n({currentRoute:{...e.currentRoute,...T}}),t.elementBookRoutePaths&&!ut(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(T.paths??[]))}try{if(t.elementBookRoutePaths&&!ut(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const D=d1(t.internalRouterConfig.basePath);n({router:D}),D.addRouteListener(!0,ce=>{n({currentRoute:ce})})}else!((f=t.internalRouterConfig)!=null&&f.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const A={themeColor:t.themeColor};if(!ut(A,(p=e.colors)==null?void 0:p.config)){const D=wl(A);n({colors:{config:A,theme:D}}),m1(r,D)}const T=t._debug??!1,q=Hf({entries:t.entries,debug:T});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:fu(q.tree,{children:(v=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:v.children,controls:t.globalValues})}}));const Z=Bi(e.currentRoute.paths),ue=(Z?Wf({flattenedNodes:q.flattenedNodes,searchQuery:Z}):void 0)??c2(q.flattenedNodes,e.currentRoute.paths,c);l((b=ue[0])==null?void 0:b.entry.title);const re=(y=e.treeBasedControls)==null?void 0:y.controls;return re?(t._debug&&console.info({currentControls:re}),u`
                <div
                    class="root"
                    ${$(io,async D=>{const ce=D.detail;if(!s(ce))return;if(n({loading:!0}),c(ce),!(r.shadowRoot.querySelector(Ke.tagName)instanceof Ke))throw new Error(`Failed to find child '${Ke.tagName}'`);El(r,Z,e.currentRoute)})}
                    ${$(Fr.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const ce=Vf(re,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ce}})})}
                >
                    <${Ke.assign({flattenedNodes:q.flattenedNodes,router:e.router,selectedPath:Z?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Ue.NavHeader}
                            slot=${Ue.NavHeader}
                        ></slot>
                    </${Ke}>
                    <${jt.assign({controls:re,currentNodes:ue,currentRoute:e.currentRoute,debug:T,originalTree:q.tree,router:e.router,showLoading:e.loading})}
                        ${$(jt.events.loadingRender,async D=>{await xi();const ce=r.shadowRoot.querySelector(jt.tagName);ce?ce.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${jt.tagName}' for scrolling.`),await xi(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${Ue.Footer}
                            slot=${Ue.Footer}
                        ></slot>
                    </${jt}>
                </div>
            `):u`
                    <${vt.assign({message:"Failed to generate page controls."})}></${vt}>
                `}catch(A){return console.error(A),u`
                <p class="error">${go(A)}</p>
            `}}});async function El(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Ke.tagName);if(!(n instanceof Ke))throw new Error(`Failed to find child '${Ke.tagName}'`);await a2(n)}function u2(e,t){return e.map(t)}function tn(e){return!!e}function id(e,t){return e.match(t)??[]}function d2(e){return e.replace(/,/g,"")}function h2(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var tr;(function(e){e.Upper="upper",e.Lower="lower"})(tr||(tr={}));function f2(e){return e.toLowerCase()!==e.toUpperCase()}function Il(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!f2(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===tr.Upper&&o!==o.toUpperCase())return!1;if(t===tr.Lower&&o!==o.toLowerCase())return!1}return!0}function Zi(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Il(a,tr.Lower,{blockNoCaseCharacters:!0})||Il(s,tr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Zr(e,t){return e.split(t)}const m2=String(NaN);function ad(e){if(typeof e=="string"&&isNaN(Number(e)))return m2;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=id(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(d=>d.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function p2(e){return typeof e=="number"?e:Number(typeof e=="string"?d2(e):e)}function g2(e){return String(e).includes("e")}function v2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Er({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}function w2(e){return!!e&&typeof e=="object"}function Ye(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function b2(e){return Array.isArray(e)?"array":typeof e}function y2(e,t){return b2(e)===t}function k2(e){return Ye(e).filter(t=>isNaN(Number(t)))}function x2(e,t){return Ye(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Wi(e,t){return x2(e,r=>!t.includes(r))}function rr(e,t){let r=!1;const n=Ye(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ye(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const sd=globalThis.crypto;function A2({min:e,max:t}){const{min:r,max:n}=v2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do sd.getRandomValues(s),l=s.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%o}function $2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return sd.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const C2="%",T2="px";function Wt(e){return Oa({value:e,suffix:T2})}function ei(e){return Oa({value:e,suffix:C2})}function Oa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const ti="://";function S2(...e){const t=e.join("/"),[r,n=""]=t.includes(ti)?t.split(ti):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,d)=>{if(i)return s;const f=d[c+1];let p=l;const g=!l.includes("?")&&(f==null?void 0:f.startsWith("?"));if(f!=null&&f.startsWith("?")||g){i=!0;let v=!1;const b=d.slice(g?c+2:c+1).reduce((y,A)=>(A.includes("#")&&(v=!0),v?y.concat(A):[y,A].join("&")),"");p=[l,f,b].join("")}return s.concat(p)},[]);return[r,r?ti:"",a.join("/")].join("")}const M2=["k","M","B","T","P","E","Z","Y"];function Da({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function E2(e,t,r){const[n,o]=Zr(e,"."),i=ad(n),a=id(i,/,/g).length,s=t[a-1],[l,c]=Zr(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Da({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const Pl=3;function I2({input:e,maxLength:t}){const r=String(e),[n,o]=Zr(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=Zr(n,"."),d=i.length+Pl;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Da({afterDot:c,beforeDot:l,maxLength:t-i.length+Pl}),s].join("")}function P2(e,t){const[r,n]=Zr(ad(e),".");if(r.length<=t)return Da({beforeDot:r,afterDot:n,maxLength:t})}function B2(e,{customSuffixes:t=M2,maxLength:r=6}={}){const n=p2(e);if(isNaN(n)||n===1/0)return String(n);if(g2(n))return I2({input:n,maxLength:r});const o=String(n),i=P2(o,r);return i??E2(o,t,r)}const h=nt({"toniq-icon-fill-color":E["vira-icon-fill-color"].default,"toniq-icon-stroke-color":E["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),j=rr(h,(e,t)=>r=>L(`var(${t.name}, ${r})`)),L2=w({name:"Copy16Icon",svgTemplate:u`
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
    `}),O2=w({name:"ExternalLink16Icon",svgTemplate:u`
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
    `}),Qt=w({name:"InfoCircle16Icon",svgTemplate:u`
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
    `}),D2=w({name:"ArrowBarUp24Icon",svgTemplate:u`
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
    `}),N2=w({name:"ArrowForwardUp24Icon",svgTemplate:u`
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
    `}),Na=w({name:"ArrowLeft24Icon",svgTemplate:u`
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
    `}),q2=w({name:"ArrowLoopLeft24Icon",svgTemplate:u`
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
    `}),H2=w({name:"ArrowLoopRight24Icon",svgTemplate:u`
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
    `}),qa=w({name:"ArrowRight24Icon",svgTemplate:u`
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
    `}),ld=w({name:"ArrowsSort24Icon",svgTemplate:u`
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
    `}),R2=w({name:"ArrowsSortAscending24Icon",svgTemplate:u`
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
    `}),V2=w({name:"ArrowsSortDescending24Icon",svgTemplate:u`
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
    `}),j2=w({name:"Bucket24Icon",svgTemplate:u`
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
    `}),z2=w({name:"BuildingStore24Icon",svgTemplate:u`
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
    `}),F2=w({name:"CalendarEvent24Icon",svgTemplate:u`
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
    `}),Z2=w({name:"Cash24Icon",svgTemplate:u`
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
    `}),W2=w({name:"Chain24Icon",svgTemplate:u`
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
    `}),cd=w({name:"CheckMark24Icon",svgTemplate:u`
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
    `}),ud=w({name:"ChevronDown24Icon",svgTemplate:u`
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
    `}),U2=w({name:"ChevronUp24Icon",svgTemplate:u`
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
    `}),G2=w({name:"Circle24Icon",svgTemplate:u`
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
    `}),dd=w({name:"CircleDot24Icon",svgTemplate:u`
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
    `}),Y2=w({name:"CirclePlus24Icon",svgTemplate:u`
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
    `}),Q2=w({name:"CircleWavyCheck24Icon",svgTemplate:u`
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
    `}),X2=w({name:"Clock24Icon",svgTemplate:u`
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
    `}),hd=w({name:"Code24Icon",svgTemplate:u`
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
    `}),fd=w({name:"Copy24Icon",svgTemplate:u`
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
    `}),J2=w({name:"CreateFile24Icon",svgTemplate:u`
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
    `}),K2=w({name:"DotsVertical24Icon",svgTemplate:u`
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
    `}),_2=w({name:"Download24Icon",svgTemplate:u`
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
    `}),ep=w({name:"Edit24Icon",svgTemplate:u`
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
    `}),md=w({name:"ExternalLink24Icon",svgTemplate:u`
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
    `}),tp=w({name:"Filter24Icon",svgTemplate:u`
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
    `}),rp=w({name:"Geometry24Icon",svgTemplate:u`
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
    `}),np=w({name:"GridDots24Icon",svgTemplate:u`
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
    `}),op=w({name:"Heart24Icon",svgTemplate:u`
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
    `}),ip=w({name:"Infinity24Icon",svgTemplate:u`
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
    `}),ap=w({name:"Info24Icon",svgTemplate:u`
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
    `}),sp=w({name:"LayersLinked24Icon",svgTemplate:u`
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
    `}),lp=w({name:"LayoutGrid24Icon",svgTemplate:u`
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
    `}),cp=w({name:"Lifebuoy24Icon",svgTemplate:u`
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
    `}),up=w({name:"List24Icon",svgTemplate:u`
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
    `}),dp=w({name:"ListDetails24Icon",svgTemplate:u`
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
    `}),hp=w({name:"Loader24Icon",svgTemplate:u`
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
    `}),Ha=w({name:"LoaderAnimated24Icon",svgTemplate:u`
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
    `}),fp=w({name:"Lock24Icon",svgTemplate:u`
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
    `}),mp=w({name:"LockOpen24Icon",svgTemplate:u`
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
    `}),pp=w({name:"Menu24Icon",svgTemplate:u`
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
    `}),gp=w({name:"Paper24Icon",svgTemplate:u`
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
    `}),vp=w({name:"People24Icon",svgTemplate:u`
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
    `}),wp=w({name:"Person24Icon",svgTemplate:u`
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
    `}),bp=w({name:"Photo24Icon",svgTemplate:u`
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
    `}),yp=w({name:"Refresh24Icon",svgTemplate:u`
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
    `}),pd=w({name:"Rocket24Icon",svgTemplate:u`
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
    `}),gd=w({name:"Search24Icon",svgTemplate:u`
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
    `}),kp=w({name:"Send24Icon",svgTemplate:u`
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
    `}),xp=w({name:"ShoppingCart24Icon",svgTemplate:u`
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
    `}),Ap=w({name:"Social24Icon",svgTemplate:u`
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
    `}),$p=w({name:"Square24Icon",svgTemplate:u`
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
    `}),Bl={interactionDuration:m`--toniq-interaction-transition-duration`,prettyDuration:m`--toniq-pretty-transition-duration`},X={interaction:m`var(${Bl.interactionDuration}, 84ms)`,pretty:m`var(${Bl.prettyDuration}, 300ms)`};function ri(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Cp=(()=>{const e={backgroundColor:m`#ffffff`,foregroundColor:m`#000000`},t={...e,foregroundColor:m`#00D093`},r={...e,foregroundColor:m`#ACADAD`},n={...e,foregroundColor:m`#D6D6D6`},o={...t},i={...t,foregroundColor:m`#00A876`},a={...t,foregroundColor:m`#1D6852`},s={...n},l={...e,foregroundColor:m`#EAFBF7`},c={...e,backgroundColor:m`#D2EEFA`},d=ri(o),f=ri(i),p=ri(a),g=p,v={backgroundColor:m`#F1F3F6`,foregroundColor:e.foregroundColor},b={...v,foregroundColor:m`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:d,accentPrimaryHover:f,accentPrimaryActive:p,accentSecondary:v,accentTertiary:b}})(),vd=Cp;function Ll(e,t){return L(`--toniq-${Zi(e)}-${Zi(t)}`)}const Ra=rr(vd,e=>({backgroundColor:Ll(e,"backgroundColor"),foregroundColor:Ll(e,"foregroundColor")}));function Ve(e,t){const r=vd[e][t],n=Ra[e][t];return m`var(${n}, ${r})`}const k=rr(Ra,e=>({foregroundColor:Ve(e,"foregroundColor"),backgroundColor:Ve(e,"backgroundColor")}));function z(e){return m`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Dt=m`
    pointer-events: none;
    opacity: 0.3;
    ${Oe};
`;function bt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=L(Wt(n+r+t));return m`
        ${L(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${k.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const wd={toniqFont:{"font-family":m`'Rubik', sans-serif`},normalWeightFont:{"font-weight":m`400`},boldFont:{"font-weight":m`600`},extraBoldFont:{"font-weight":m`900`},paragraphFont:{"line-height":m`24px`,"font-size":m`16px`},boldParagraphFont:{},labelFont:{"line-height":m`16px`,"font-size":m`12px`},boldLabelFont:{},h1Font:{"line-height":m`96px`,"font-size":m`64px`},h2Font:{"line-height":m`48px`,"font-size":m`32px`},h3Font:{"line-height":m`32px`,"font-size":m`24px`},monospaceFont:{"font-family":m`'Inconsolata', monospace`,"line-height":m`1.125em`}},Tp=rr(wd,(e,t)=>{const r=L(Zi(e.replace(/Font$/,"")));return rr(t,o=>{const i=L(o);return m`--toniq-font-${r}-${i}`})});function Ze(e){const t=Tp[e],r=wd[e],n=Ye(t).map(o=>{const i=r[o],a=t[o];return m`
            ${L(o)}: var(${a}, ${i});
        `});return L(n.join(`
`))}const G=(()=>{const e=m`
        font-style: normal;
        color: ${k.pagePrimary.foregroundColor};
        ${Ze("toniqFont")};
    `,t=m`
        ${e};
        ${Ze("normalWeightFont")};
    `,r=m`
        ${e};
        ${Ze("boldFont")};
    `,n=m`
        ${e};
        ${Ze("extraBoldFont")};
    `,o=m`
        ${e};
        ${Ze("paragraphFont")};
        ${t};
    `,i=m`
        ${e};
        ${o};
        ${r};
    `,a=m`
        ${e};
        ${Ze("labelFont")};
        ${t};
    `,s=m`
        ${a};
        ${r};
    `,l=m`
        ${Ze("h1Font")};
        ${n};
    `,c=m`
        ${Ze("h2Font")};
        ${r};
    `,d=m`
        ${Ze("h3Font")};
        ${r};
    `,f=m`
        ${Ze("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:f}})(),lo={popupShadow:m`
        filter: drop-shadow(0px 12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:m`
        filter: drop-shadow(0px -12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:m`
        filter: drop-shadow(0px 12px 8px ${k.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Sp(e,t=!0){const r=L(e),n=e===":host"?m`
                  :host(:hover);
              `:m`
                  ${r}:hover
              `,o=t?m`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${k.pageInteraction.foregroundColor};
              }
          `:m``;return m`
        ${r} {
            border-radius: 16px;
            background-color: ${k.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${lo.popupShadow};
        }

        ${o}
    `}const Mp=w({name:"SquareCheck24Icon",svgTemplate:u`
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
    `}),Dn=w({name:"Trash24Icon",svgTemplate:u`
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
    `}),Ep=w({name:"Upload24Icon",svgTemplate:u`
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
    `}),Ip=w({name:"Wallet24Icon",svgTemplate:u`
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
    `}),Pp=w({name:"WorldUpload24Icon",svgTemplate:u`
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
    `}),Bp=w({name:"X24Icon",svgTemplate:u`
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
    `}),Lp=w({name:"Folder48Icon",svgTemplate:u`
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
    `}),bd=w({name:"FolderOff48Icon",svgTemplate:u`
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
    `}),Op=w({name:"Kyc48Icon",svgTemplate:u`
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
                fill=${j["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${j["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${j["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),yd=w({name:"Api64Icon",svgTemplate:u`
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
    `}),Dp=w({name:"CircleDashes64Icon",svgTemplate:u`
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
    `}),Np=w({name:"Rocket64Icon",svgTemplate:u`
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
    `}),qp=w({name:"CryptoBtc24Icon",svgTemplate:u`
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
                d="M17.3 10.3c.23-1.6-.99-2.46-2.65-3.04l.54-2.16-1.32-.33-.52 2.1-1.06-.24.53-2.12-1.31-.33-.54 2.16-.84-.2-1.82-.45-.35 1.4s.98.23.96.24c.53.13.63.49.61.77l-.61 2.46.13.04-.13-.03-.87 3.45c-.06.16-.23.4-.6.31.01.02-.96-.24-.96-.24l-.65 1.51 1.71.43.94.24-.54 2.19 1.31.33.54-2.17c.36.1.71.2 1.05.28l-.54 2.15 1.32.33.54-2.19c2.25.43 3.94.26 4.65-1.77.57-1.64-.03-2.58-1.21-3.2.86-.2 1.5-.76 1.68-1.93Zm-3.02 4.2c-.4 1.64-3.16.76-4.05.54l.72-2.9c.9.22 3.76.66 3.33 2.37Zm.4-4.23c-.36 1.48-2.65.73-3.4.54l.66-2.63c.74.19 3.14.54 2.75 2.09Z"
            />
        </svg>
    `}),Hp=w({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),kd="0 0 58 58",xd=vh`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDct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" width="58" height="58" />
`,Rp=w({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${kd}"
        >
            ${xd}
        </svg>
    `}),Vp=w({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="24"
            height="24"
            viewBox="${kd}"
        >
            ${xd}
        </svg>
    `}),Ad=w({name:"BrandDiscord24Icon",svgTemplate:u`
        <svg
            fill=${j["toniq-icon-fill-color"]("#5865f2")}
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
    `}),jp=w({name:"BrandDistrikt24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${j["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),zp=w({name:"BrandDscvr24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24">
            <image
                xlink:href="data:image/png;base64,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"
                width="250"
                height="250"
            />
        </svg>
    `}),Fp=w({name:"BrandFacebookLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${j["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),Zp=w({name:"BrandGoogleLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${j["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),Wp=w({name:"BrandIcScan24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${j["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),$d=w({name:"BrandInstagram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${j["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),Up=w({name:"BrandInstagramFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${j["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),Gp=w({name:"BrandMedium24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${j["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),Yp=w({name:"BrandNftgeek24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${j["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),Cd=w({name:"BrandTelegram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${j["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),Td=w({name:"BrandTiktok24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${j["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${j["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),Qp=w({name:"BrandTiktokFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${j["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),Sd=w({name:"BrandTwitch24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${j["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Md=w({name:"BrandTwitter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${j["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),Xp=w({name:"BioniqRobot100Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${j["toniq-icon-stroke-color"]("#8A2BE2")}
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
    `}),Jp=w({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${j["toniq-icon-fill-color"](String(k.brandPrimary.foregroundColor))}
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
    `}),lt={"core-16":[L2,O2,Qt],"core-24":[D2,N2,Na,q2,H2,qa,ld,R2,V2,j2,z2,F2,Z2,W2,cd,ud,U2,G2,dd,Y2,Q2,X2,hd,fd,J2,K2,_2,ep,md,tp,rp,np,op,ip,ap,sp,lp,cp,up,dp,hp,Ha,fp,mp,pp,gp,vp,wp,bp,yp,pd,gd,kp,xp,Ap,$p,Mp,Dn,Ep,Ip,Pp,Bp],"core-48":[Lp,bd,Op],"core-64":[yd,Dp,Np],cryptocurrencies:[qp,Hp,Rp,Vp],"third-party-brands":[Ad,jp,zp,Fp,Zp,Wp,$d,Up,Gp,Yp,Cd,Td,Qp,Sd,Md],toniq:[Xp,Jp]},Kp=Jr({Discord:xt(void 0,""),Instagram:xt(void 0,""),Telegram:xt(void 0,""),TikTok:xt(void 0,""),Twitch:xt(void 0,""),Twitter:xt(void 0,""),website:xt(void 0,"")}),_p=Kp.defaultValue,Ed={Discord:Ad,Instagram:$d,Telegram:Cd,TikTok:Td,Twitch:Sd,Twitter:Md,website:hd},Ol="toniq-",{defineElement:te,defineElementNoInputs:eg}=Ca({assertInputs:e=>{if(!e.tagName.startsWith(Ol))throw new Error(`Tag name should start with '${Ol}' but got '${e.tagName}'`)}}),It=te()({tagName:"toniq-bold-space",styles:m`
        :host {
            display: inline-block;
            position: relative;
            vertical-align: top;
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
            ${G.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `}}),C=te()({tagName:"toniq-icon",styles:m`
        :host {
            display: inline-flex;
            ${E["vira-icon-fill-color"].name}: ${h["toniq-icon-fill-color"].value}
            ${E["vira-icon-stroke-color"].name}: ${h["toniq-icon-stroke-color"].value}
            ${E["vira-icon-stroke-width"].name}: ${h["toniq-icon-stroke-width"].value}
        }

        ${ee} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return u`
            <${ee.assign(e)}></${ee}>
        `}}),Ui=m`8px`;var Wr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(Wr||{});const ne=te()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${G.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Oe};
        }

        :host(:hover) button {
            ${z(k.accentPrimaryHover)};
        }

        :host(:active) button {
            ${z(k.accentPrimaryActive)};
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
            border-radius: ${Ui};
            ${z(k.accentPrimary)};
            padding: 10px;
            transition:
                color ${X.interaction},
                background-color ${X.interaction},
                border-color ${X.interaction};
        }

        ${bt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${z(k.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${z(k.pagePrimary)};
            border-color: ${k.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Dt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${k.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${k.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function tg(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Va(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(f=>i==="+"?f>l:f<l).sort((f,p)=>i==="+"?f-p:p-f);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function rg(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(p,g){let v=parseFloat(p);return/%/.test(p)&&(v/=100,v*=g),v}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),f=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:f}}}function ng(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Id(e){let t=[];for(const r of e.children)t=t.concat(r,Id(r));return t}function og(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Id(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const f=d.getBoundingClientRect();if(t&&!ng(r,f,a))continue;const p=window.getComputedStyle(d);let[g,v]=p.getPropertyValue("scroll-snap-align").split(" ");typeof v>"u"&&(v=g);const b=i==="x"?v:g,y=f[s]-r[s]+e[c];switch(b){case"none":break;case"start":n[i].start.push(y);break;case"center":n[i].center.push(y+f[l]/2);break;case"end":n[i].end.push(y+f[l]);break}}}return n}function Va(e){const t=e.getBoundingClientRect(),r=rg(e),n=og(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Dl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Dl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Dl(e){return Array.from(new Set(e))}const Nn="templates-container",ig=4e3;var Gi=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(Gi||{});const be=te()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${Km(`.${Nn}`)}

        .${L(Nn)} {
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

        .arrow ${C} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${z(k.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{ni({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||ig)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Nl(t.scrollSnapPositions,0),i=Nl(t.scrollSnapPositions,-1);return u`
            <div
                ${Hr(()=>{r({scrollSnapPositions:Va(Yi(n)).x})})}
                class=${Nn}
                ${$("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${C.assign({icon:Na})}
                        class=${ve({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${$("click",()=>{ni({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${C}>
                </div>
                ${e.templates.map(a=>u`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${C.assign({icon:qa})}
                        class=${ve({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${$("click",()=>{ni({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${C}>
                </div>
            </div>
        `}});function Nl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function Yi(e){const t=e.shadowRoot.querySelector(`.${Nn}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function ni({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=Yi(e),i=o.clientWidth,a=Va(Yi(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const f=ag(e,t),p=ql(o.scrollLeft,a,!1),g=t==="right"?1:-1,v=(o.clientWidth-f*3)*g,b=ql((p||0)+v,a,!0);t==="right"&&b>p?o.scrollTo({behavior:"smooth",left:b}):t==="left"&&b<p?o.scrollTo({behavior:"smooth",left:b}):tg(o,t)}}function ag(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function ql(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const ot=te()({tagName:"toniq-checkbox",events:{checkedChange:Q()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ve("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ve("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ve("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ve("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ve("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            ${G.boldParagraphFont};
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
            ${Oe};
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

        ${bt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Dt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${C.assign({icon:cd})}
                    class="check-mark ${ve({hidden:!e.checked})}"
                ></${C}>
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
                ${$("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var Qi=(e=>(e.Default="default",e.Secondary="secondary",e))(Qi||{});const oi=te()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${G.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${z(k.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${z(k.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${C.assign({icon:e.icon})}></${C}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}});var Hl;(function(e){e.Upper="upper",e.Lower="lower"})(Hl||(Hl={}));function sg(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function lg(e){return Array.isArray(e)?"array":typeof e}function Rl(e,t){return lg(e)===t}function Pd(e,t){return sg(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function cg(e,t){return Pd(e,r=>!t.includes(r))}function ug(e,t){return Pd(e,r=>t.includes(r))}class Nt extends Error{}class dg extends Nt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class hg extends Nt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class fg extends Nt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class xr extends Nt{}class Bd extends Nt{constructor(t){super(`Invalid unit ${t}`)}}class Me extends Nt{}class it extends Nt{constructor(){super("Zone is an abstract class")}}const x="numeric",Fe="short",Ae="long",co={year:x,month:x,day:x},Ld={year:x,month:Fe,day:x},mg={year:x,month:Fe,day:x,weekday:Fe},Od={year:x,month:Ae,day:x},Dd={year:x,month:Ae,day:x,weekday:Ae},Nd={hour:x,minute:x},qd={hour:x,minute:x,second:x},Hd={hour:x,minute:x,second:x,timeZoneName:Fe},Rd={hour:x,minute:x,second:x,timeZoneName:Ae},Vd={hour:x,minute:x,hourCycle:"h23"},jd={hour:x,minute:x,second:x,hourCycle:"h23"},zd={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Fe},Fd={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Ae},Zd={year:x,month:x,day:x,hour:x,minute:x},Wd={year:x,month:x,day:x,hour:x,minute:x,second:x},Ud={year:x,month:Fe,day:x,hour:x,minute:x},Gd={year:x,month:Fe,day:x,hour:x,minute:x,second:x},pg={year:x,month:Fe,day:x,weekday:Fe,hour:x,minute:x},Yd={year:x,month:Ae,day:x,hour:x,minute:x,timeZoneName:Fe},Qd={year:x,month:Ae,day:x,hour:x,minute:x,second:x,timeZoneName:Fe},Xd={year:x,month:Ae,day:x,weekday:Ae,hour:x,minute:x,timeZoneName:Ae},Jd={year:x,month:Ae,day:x,weekday:Ae,hour:x,minute:x,second:x,timeZoneName:Ae};class rn{get type(){throw new it}get name(){throw new it}get ianaName(){return this.name}get isUniversal(){throw new it}offsetName(t,r){throw new it}formatOffset(t,r){throw new it}offset(t){throw new it}equals(t){throw new it}get isValid(){throw new it}}let ii=null;class To extends rn{static get instance(){return ii===null&&(ii=new To),ii}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return _d(t,r,n)}formatOffset(t,r){return Pr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let qn={};function gg(e){return qn[e]||(qn[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),qn[e]}const vg={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function wg(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,d]=n;return[a,o,i,s,l,c,d]}function bg(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=vg[i];i==="era"?n[s]=a:B(s)||(n[s]=parseInt(a,10))}return n}let vn={};class tt extends rn{static create(t){return vn[t]||(vn[t]=new tt(t)),vn[t]}static resetCache(){vn={},qn={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=tt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return _d(t,r,n,this.name)}formatOffset(t,r){return Pr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=gg(this.name);let[o,i,a,s,l,c,d]=n.formatToParts?bg(n,r):wg(n,r);s==="BC"&&(o=-Math.abs(o)+1);const p=Mo({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let g=+r;const v=g%1e3;return g-=v>=0?v:1e3+v,(p-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Vl={};function yg(e,t={}){const r=JSON.stringify([e,t]);let n=Vl[r];return n||(n=new Intl.ListFormat(e,t),Vl[r]=n),n}let Xi={};function Ji(e,t={}){const r=JSON.stringify([e,t]);let n=Xi[r];return n||(n=new Intl.DateTimeFormat(e,t),Xi[r]=n),n}let Ki={};function kg(e,t={}){const r=JSON.stringify([e,t]);let n=Ki[r];return n||(n=new Intl.NumberFormat(e,t),Ki[r]=n),n}let _i={};function xg(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=_i[o];return i||(i=new Intl.RelativeTimeFormat(e,t),_i[o]=i),i}let Ar=null;function Ag(){return Ar||(Ar=new Intl.DateTimeFormat().resolvedOptions().locale,Ar)}function $g(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Ji(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=Ji(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function Cg(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Tg(e){const t=[];for(let r=1;r<=12;r++){const n=M.utc(2009,r,1);t.push(e(n))}return t}function Sg(e){const t=[];for(let r=1;r<=7;r++){const n=M.utc(2016,11,13+r);t.push(e(n))}return t}function wn(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Mg(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Eg{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=kg(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):za(t,3);return ae(r,this.padTo)}}}class Ig{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&tt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Ji(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Pg{constructor(t,r,n){this.opts={style:"long",...n},!r&&Kd()&&(this.rtf=xg(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Yg(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}class Y{static fromOpts(t){return Y.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,r,n,o=!1){const i=t||_.defaultLocale,a=i||(o?"en-US":Ag()),s=r||_.defaultNumberingSystem,l=n||_.defaultOutputCalendar;return new Y(a,s,l,i)}static resetCache(){Ar=null,Xi={},Ki={},_i={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n}={}){return Y.create(t,r,n)}constructor(t,r,n,o){const[i,a,s]=$g(t);this.locale=i,this.numberingSystem=r||a||null,this.outputCalendar=n||s||null,this.intl=Cg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Mg(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Y.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return wn(this,t,r0,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Tg(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return wn(this,t,i0,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Sg(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return wn(this,void 0,()=>a0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[M.utc(2016,11,13,9),M.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return wn(this,t,s0,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[M.utc(-40,1,1),M.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new Eg(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Ig(t,this.intl,r)}relFormatter(t={}){return new Pg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return yg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let ai=null;class pe extends rn{static get utcInstance(){return ai===null&&(ai=new pe(0)),ai}static instance(t){return t===0?pe.utcInstance:new pe(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new pe(Eo(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Pr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Pr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Pr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Bg extends rn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ct(e,t){if(B(e)||e===null)return t;if(e instanceof rn)return e;if(Lg(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?To.instance:r==="utc"||r==="gmt"?pe.utcInstance:pe.parseSpecifier(r)||tt.create(e)}else return Pt(e)?pe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Bg(e)}let jl=()=>Date.now(),zl="system",Fl=null,Zl=null,Wl=null,Ul=60,Gl;class _{static get now(){return jl}static set now(t){jl=t}static set defaultZone(t){zl=t}static get defaultZone(){return ct(zl,To.instance)}static get defaultLocale(){return Fl}static set defaultLocale(t){Fl=t}static get defaultNumberingSystem(){return Zl}static set defaultNumberingSystem(t){Zl=t}static get defaultOutputCalendar(){return Wl}static set defaultOutputCalendar(t){Wl=t}static get twoDigitCutoffYear(){return Ul}static set twoDigitCutoffYear(t){Ul=t%100}static get throwOnInvalid(){return Gl}static set throwOnInvalid(t){Gl=t}static resetCaches(){Y.resetCache(),tt.resetCache()}}function B(e){return typeof e>"u"}function Pt(e){return typeof e=="number"}function So(e){return typeof e=="number"&&e%1===0}function Lg(e){return typeof e=="string"}function Og(e){return Object.prototype.toString.call(e)==="[object Date]"}function Kd(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Dg(e){return Array.isArray(e)?e:[e]}function Yl(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Ng(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function nr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function et(e,t,r){return So(e)&&e>=t&&e<=r}function qg(e,t){return e-t*Math.floor(e/t)}function ae(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function st(e){if(!(B(e)||e===null||e===""))return parseInt(e,10)}function At(e){if(!(B(e)||e===null||e===""))return parseFloat(e)}function ja(e){if(!(B(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function za(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function nn(e){return e%4===0&&(e%100!==0||e%400===0)}function Ir(e){return nn(e)?366:365}function uo(e,t){const r=qg(t-1,12)+1,n=e+(t-r)/12;return r===2?nn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Mo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function ho(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,r=e-1,n=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return t===4||n===3?53:52}function ea(e){return e>99?e:e>_.twoDigitCutoffYear?1900+e:2e3+e}function _d(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Eo(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function e0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Me(`Invalid unit value ${e}`);return t}function fo(e,t){const r={};for(const n in e)if(nr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=e0(o)}return r}function Pr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${ae(r,2)}:${ae(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${ae(r,2)}${ae(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Io(e){return Ng(e,["hour","minute","second","millisecond"])}const Hg=["January","February","March","April","May","June","July","August","September","October","November","December"],t0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Rg=["J","F","M","A","M","J","J","A","S","O","N","D"];function r0(e){switch(e){case"narrow":return[...Rg];case"short":return[...t0];case"long":return[...Hg];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const n0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],o0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Vg=["M","T","W","T","F","S","S"];function i0(e){switch(e){case"narrow":return[...Vg];case"short":return[...o0];case"long":return[...n0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const a0=["AM","PM"],jg=["Before Christ","Anno Domini"],zg=["BC","AD"],Fg=["B","A"];function s0(e){switch(e){case"narrow":return[...Fg];case"short":return[...zg];case"long":return[...jg];default:return null}}function Zg(e){return a0[e.hour<12?0:1]}function Wg(e,t){return i0(t)[e.weekday-1]}function Ug(e,t){return r0(t)[e.month-1]}function Gg(e,t){return s0(t)[e.year<0?0:1]}function Yg(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],d=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${d} ago`:`in ${s} ${d}`}function Ql(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Qg={D:co,DD:Ld,DDD:Od,DDDD:Dd,t:Nd,tt:qd,ttt:Hd,tttt:Rd,T:Vd,TT:jd,TTT:zd,TTTT:Fd,f:Zd,ff:Ud,fff:Yd,ffff:Xd,F:Wd,FF:Gd,FFF:Qd,FFFF:Jd};class me{static create(t,r={}){return new me(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Qg[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return ae(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,v)=>this.loc.extract(t,g,v),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?Zg(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,v)=>n?Ug(t,g):i(v?{month:g}:{month:g,day:"numeric"},"month"),c=(g,v)=>n?Wg(t,g):i(v?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const v=me.macroTokenToFormatOpts(g);return v?this.formatWithSystemDefault(t,v):g},f=g=>n?Gg(t,g):i({era:g},"era"),p=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return Ql(me.parseFormat(r),p)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},i=me.parseFormat(r),a=i.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return Ql(i,o(s))}}class ze{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const l0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ar(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function sr(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function lr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function c0(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=st(t[r+o]);return[n,null,r+o]}}const u0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Xg=`(?:${u0.source}?(?:\\[(${l0.source})\\])?)?`,Fa=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,d0=RegExp(`${Fa.source}${Xg}`),Za=RegExp(`(?:T${d0.source})?`),Jg=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Kg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,_g=/(\d{4})-?(\d{3})/,ev=c0("weekYear","weekNumber","weekDay"),tv=c0("year","ordinal"),rv=/(\d{4})-(\d\d)-(\d\d)/,h0=RegExp(`${Fa.source} ?(?:${u0.source}|(${l0.source}))?`),nv=RegExp(`(?: ${h0.source})?`);function Xt(e,t,r){const n=e[t];return B(n)?r:st(n)}function ov(e,t){return[{year:Xt(e,t),month:Xt(e,t+1,1),day:Xt(e,t+2,1)},null,t+3]}function cr(e,t){return[{hours:Xt(e,t,0),minutes:Xt(e,t+1,0),seconds:Xt(e,t+2,0),milliseconds:ja(e[t+3])},null,t+4]}function on(e,t){const r=!e[t]&&!e[t+1],n=Eo(e[t+1],e[t+2]),o=r?null:pe.instance(n);return[{},o,t+3]}function an(e,t){const r=e[t]?tt.create(e[t]):null;return[{},r,t+1]}const iv=RegExp(`^T?${Fa.source}$`),av=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function sv(e){const[t,r,n,o,i,a,s,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",p=(g,v=!1)=>g!==void 0&&(v||g&&d)?-g:g;return[{years:p(At(r)),months:p(At(n)),weeks:p(At(o)),days:p(At(i)),hours:p(At(a)),minutes:p(At(s)),seconds:p(At(l),l==="-0"),milliseconds:p(ja(c),f)}]}const lv={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Wa(e,t,r,n,o,i,a){const s={year:t.length===2?ea(st(t)):st(t),month:t0.indexOf(r)+1,day:st(n),hour:st(o),minute:st(i)};return a&&(s.second=st(a)),e&&(s.weekday=e.length>3?n0.indexOf(e)+1:o0.indexOf(e)+1),s}const cv=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function uv(e){const[,t,r,n,o,i,a,s,l,c,d,f]=e,p=Wa(t,o,n,r,i,a,s);let g;return l?g=lv[l]:c?g=0:g=Eo(d,f),[p,new pe(g)]}function dv(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const hv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,fv=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,mv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Xl(e){const[,t,r,n,o,i,a,s]=e;return[Wa(t,o,n,r,i,a,s),pe.utcInstance]}function pv(e){const[,t,r,n,o,i,a,s]=e;return[Wa(t,s,r,n,o,i,a),pe.utcInstance]}const gv=ar(Jg,Za),vv=ar(Kg,Za),wv=ar(_g,Za),bv=ar(d0),f0=sr(ov,cr,on,an),yv=sr(ev,cr,on,an),kv=sr(tv,cr,on,an),xv=sr(cr,on,an);function Av(e){return lr(e,[gv,f0],[vv,yv],[wv,kv],[bv,xv])}function $v(e){return lr(dv(e),[cv,uv])}function Cv(e){return lr(e,[hv,Xl],[fv,Xl],[mv,pv])}function Tv(e){return lr(e,[av,sv])}const Sv=sr(cr);function Mv(e){return lr(e,[iv,Sv])}const Ev=ar(rv,nv),Iv=ar(h0),Pv=sr(cr,on,an);function Bv(e){return lr(e,[Ev,f0],[Iv,Pv])}const Jl="Invalid Duration",m0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Lv={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...m0},Te=146097/400,zt=146097/4800,Ov={years:{quarters:4,months:12,weeks:Te/7,days:Te,hours:Te*24,minutes:Te*24*60,seconds:Te*24*60*60,milliseconds:Te*24*60*60*1e3},quarters:{months:3,weeks:Te/28,days:Te/4,hours:Te*24/4,minutes:Te*24*60/4,seconds:Te*24*60*60/4,milliseconds:Te*24*60*60*1e3/4},months:{weeks:zt/7,days:zt,hours:zt*24,minutes:zt*24*60,seconds:zt*24*60*60,milliseconds:zt*24*60*60*1e3},...m0},Mt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Dv=Mt.slice(0).reverse();function at(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new N(n)}function p0(e,t){let r=t.milliseconds??0;for(const n of Dv.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Kl(e,t){const r=p0(e,t)<0?-1:1;Mt.reduceRight((n,o)=>{if(B(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),Mt.reduce((n,o)=>{if(B(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Nv(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class N{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Ov:Lv;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Y.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return N.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Me(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new N({values:fo(t,N.normalizeUnit),loc:Y.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Pt(t))return N.fromMillis(t);if(N.isDuration(t))return t;if(typeof t=="object")return N.fromObject(t);throw new Me(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Tv(t);return n?N.fromObject(n,r):N.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Mv(t);return n?N.fromObject(n,r):N.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Me("need to specify a reason the Duration is invalid");const n=t instanceof ze?t:new ze(t,r);if(_.throwOnInvalid)throw new fg(n);return new N({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Bd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?me.create(this.loc,n).formatDurationFromString(this,t):Jl}toHuman(t={}){if(!this.isValid)return Jl;const r=Mt.map(n=>{const o=this.values[n];return B(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=za(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},M.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?p0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=N.fromDurationLike(t),n={};for(const o of Mt)(nr(r.values,o)||nr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return at(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=N.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=e0(t(this.values[n],n));return at(this,{values:r},!0)}get(t){return this[N.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...fo(t,N.normalizeUnit)};return at(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return at(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Kl(this.matrix,t),at(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Nv(this.normalize().shiftToAll().toObject());return at(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>N.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of Mt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;Pt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Pt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return Kl(this.matrix,r),at(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return at(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Mt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Ft="Invalid Interval";function qv(e,t){return!e||!e.isValid?K.invalid("missing or invalid start"):!t||!t.isValid?K.invalid("missing or invalid end"):t<e?K.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class K{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Me("need to specify a reason the Interval is invalid");const n=t instanceof ze?t:new ze(t,r);if(_.throwOnInvalid)throw new hg(n);return new K({invalid:n})}static fromDateTimes(t,r){const n=vr(t),o=vr(r),i=qv(n,o);return i??new K({start:n,end:o})}static after(t,r){const n=N.fromDurationLike(r),o=vr(t);return K.fromDateTimes(o,o.plus(n))}static before(t,r){const n=N.fromDurationLike(r),o=vr(t);return K.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=M.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=M.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return K.fromDateTimes(i,s);if(a){const c=N.fromISO(o,r);if(c.isValid)return K.after(i,c)}else if(l){const c=N.fromISO(n,r);if(c.isValid)return K.before(s,c)}}return K.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;const r=this.start.startOf(t),n=this.end.startOf(t);return Math.floor(n.diff(r,t).get(t))+(n.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?K.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(vr).filter(a=>this.contains(a)).sort(),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(K.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=N.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(K.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:K.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return K.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(K.fromDateTimes(r,l.time)),r=null);return K.merge(o)}difference(...t){return K.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ft}toLocaleString(t=co,r={}){return this.isValid?me.create(this.s.loc.clone(r),t).formatInterval(this):Ft}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ft}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ft}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ft}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Ft}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):N.invalid(this.invalidReason)}mapEndpoints(t){return K.fromDateTimes(t(this.s),t(this.e))}}class $r{static hasDST(t=_.defaultZone){const r=M.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return tt.isValidZone(t)}static normalizeZone(t){return ct(t,_.defaultZone)}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Y.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Y.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Y.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Y.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Y.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Y.create(r,null,"gregory").eras(t)}static features(){return{relative:Kd()}}}function _l(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(N.fromMillis(n).as("days"))}function Hv(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=_l(l,c);return(d-d%7)/7}],["days",_l]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function Rv(e,t,r,n){let[o,i,a,s]=Hv(e,t,r);const l=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const d=N.fromObject(i,n);return c.length>0?N.fromMillis(l,n).shiftTo(...c).plus(d):d}const Ua={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ec={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Vv=Ua.hanidec.replace(/[\[|\]]/g,"").split("");function jv(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Ua.hanidec)!==-1)t+=Vv.indexOf(e[r]);else for(const o in ec){const[i,a]=ec[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function Ne({numberingSystem:e},t=""){return new RegExp(`${Ua[e||"latn"]}${t}`)}const zv="missing Intl.DateTimeFormat.formatToParts support";function H(e,t=r=>r){return{regex:e,deser:([r])=>t(jv(r))}}const Fv=String.fromCharCode(160),g0=`[ ${Fv}]`,v0=new RegExp(g0,"g");function Zv(e){return e.replace(/\./g,"\\.?").replace(v0,g0)}function tc(e){return e.replace(/\./g,"").replace(v0," ").toLowerCase()}function qe(e,t){return e===null?null:{regex:RegExp(e.map(Zv).join("|")),deser:([r])=>e.findIndex(n=>tc(r)===tc(n))+t}}function rc(e,t){return{regex:e,deser:([,r,n])=>Eo(r,n),groups:t}}function bn(e){return{regex:e,deser:([t])=>t}}function Wv(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Uv(e,t){const r=Ne(t),n=Ne(t,"{2}"),o=Ne(t,"{3}"),i=Ne(t,"{4}"),a=Ne(t,"{6}"),s=Ne(t,"{1,2}"),l=Ne(t,"{1,3}"),c=Ne(t,"{1,6}"),d=Ne(t,"{1,9}"),f=Ne(t,"{2,4}"),p=Ne(t,"{4,6}"),g=y=>({regex:RegExp(Wv(y.val)),deser:([A])=>A,literal:!0}),b=(y=>{if(e.literal)return g(y);switch(y.val){case"G":return qe(t.eras("short"),0);case"GG":return qe(t.eras("long"),0);case"y":return H(c);case"yy":return H(f,ea);case"yyyy":return H(i);case"yyyyy":return H(p);case"yyyyyy":return H(a);case"M":return H(s);case"MM":return H(n);case"MMM":return qe(t.months("short",!0),1);case"MMMM":return qe(t.months("long",!0),1);case"L":return H(s);case"LL":return H(n);case"LLL":return qe(t.months("short",!1),1);case"LLLL":return qe(t.months("long",!1),1);case"d":return H(s);case"dd":return H(n);case"o":return H(l);case"ooo":return H(o);case"HH":return H(n);case"H":return H(s);case"hh":return H(n);case"h":return H(s);case"mm":return H(n);case"m":return H(s);case"q":return H(s);case"qq":return H(n);case"s":return H(s);case"ss":return H(n);case"S":return H(l);case"SSS":return H(o);case"u":return bn(d);case"uu":return bn(s);case"uuu":return H(r);case"a":return qe(t.meridiems(),0);case"kkkk":return H(i);case"kk":return H(f,ea);case"W":return H(s);case"WW":return H(n);case"E":case"c":return H(r);case"EEE":return qe(t.weekdays("short",!1),1);case"EEEE":return qe(t.weekdays("long",!1),1);case"ccc":return qe(t.weekdays("short",!0),1);case"cccc":return qe(t.weekdays("long",!0),1);case"Z":case"ZZ":return rc(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return rc(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return bn(/[a-z_+-/]{1,256}?/i);case" ":return bn(/[^\S\n\r]/);default:return g(y)}})(e)||{invalidReason:zv};return b.token=e,b}const Gv={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Yv(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=Gv[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function Qv(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Xv(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(nr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function Jv(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return B(e.z)||(r=tt.create(e.z)),B(e.Z)||(r||(r=new pe(e.Z)),n=e.Z),B(e.q)||(e.M=(e.q-1)*3+1),B(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),B(e.u)||(e.S=ja(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let si=null;function Kv(){return si||(si=M.fromMillis(1555555555555)),si}function _v(e,t){if(e.literal)return e;const r=me.macroTokenToFormatOpts(e.val),n=y0(r,t);return n==null||n.includes(void 0)?e:n}function w0(e,t){return Array.prototype.concat(...e.map(r=>_v(r,t)))}function b0(e,t,r){const n=w0(me.parseFormat(r),e),o=n.map(a=>Uv(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=Qv(o),l=RegExp(a,"i"),[c,d]=Xv(t,l,s),[f,p,g]=d?Jv(d):[null,null,void 0];if(nr(d,"a")&&nr(d,"H"))throw new xr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:d,result:f,zone:p,specificOffset:g}}}function e5(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=b0(e,t,r);return[n,o,i,a]}function y0(e,t){if(!e)return null;const n=me.create(t,e).dtFormatter(Kv()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>Yv(a,e,i))}const k0=[0,31,59,90,120,151,181,212,243,273,304,334],x0=[0,31,60,91,121,152,182,213,244,274,305,335];function Pe(e,t){return new ze("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function A0(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function $0(e,t,r){return r+(nn(e)?x0:k0)[t-1]}function C0(e,t){const r=nn(e)?x0:k0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function ta(e){const{year:t,month:r,day:n}=e,o=$0(t,r,n),i=A0(t,r,n);let a=Math.floor((o-i+10)/7),s;return a<1?(s=t-1,a=ho(s)):a>ho(t)?(s=t+1,a=1):s=t,{weekYear:s,weekNumber:a,weekday:i,...Io(e)}}function nc(e){const{weekYear:t,weekNumber:r,weekday:n}=e,o=A0(t,1,4),i=Ir(t);let a=r*7+n-o-3,s;a<1?(s=t-1,a+=Ir(s)):a>i?(s=t+1,a-=Ir(t)):s=t;const{month:l,day:c}=C0(s,a);return{year:s,month:l,day:c,...Io(e)}}function li(e){const{year:t,month:r,day:n}=e,o=$0(t,r,n);return{year:t,ordinal:o,...Io(e)}}function oc(e){const{year:t,ordinal:r}=e,{month:n,day:o}=C0(t,r);return{year:t,month:n,day:o,...Io(e)}}function t5(e){const t=So(e.weekYear),r=et(e.weekNumber,1,ho(e.weekYear)),n=et(e.weekday,1,7);return t?r?n?!1:Pe("weekday",e.weekday):Pe("week",e.week):Pe("weekYear",e.weekYear)}function r5(e){const t=So(e.year),r=et(e.ordinal,1,Ir(e.year));return t?r?!1:Pe("ordinal",e.ordinal):Pe("year",e.year)}function T0(e){const t=So(e.year),r=et(e.month,1,12),n=et(e.day,1,uo(e.year,e.month));return t?r?n?!1:Pe("day",e.day):Pe("month",e.month):Pe("year",e.year)}function S0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=et(t,0,23)||t===24&&r===0&&n===0&&o===0,a=et(r,0,59),s=et(n,0,59),l=et(o,0,999);return i?a?s?l?!1:Pe("millisecond",o):Pe("second",n):Pe("minute",r):Pe("hour",t)}const ci="Invalid DateTime",ic=864e13;function yn(e){return new ze("unsupported zone",`the zone "${e.name}" is not supported`)}function ui(e){return e.weekData===null&&(e.weekData=ta(e.c)),e.weekData}function $t(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new M({...r,...t,old:r})}function M0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function kn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Hn(e,t,r){return M0(Mo(e),t,r)}function ac(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,uo(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=N.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Mo(i);let[l,c]=M0(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function gr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=M.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return M.invalid(new ze("unparsable",`the input "${o}" can't be parsed as ${n}`))}function xn(e,t,r=!0){return e.isValid?me.create(Y.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function di(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=ae(e.c.year,r?6:4),t?(n+="-",n+=ae(e.c.month),n+="-",n+=ae(e.c.day)):(n+=ae(e.c.month),n+=ae(e.c.day)),n}function sc(e,t,r,n,o,i){let a=ae(e.c.hour);return t?(a+=":",a+=ae(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=ae(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=ae(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=ae(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=ae(Math.trunc(-e.o/60)),a+=":",a+=ae(Math.trunc(-e.o%60))):(a+="+",a+=ae(Math.trunc(e.o/60)),a+=":",a+=ae(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const E0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},n5={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},o5={ordinal:1,hour:0,minute:0,second:0,millisecond:0},I0=["year","month","day","hour","minute","second","millisecond"],i5=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],a5=["year","ordinal","hour","minute","second","millisecond"];function lc(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Bd(e);return t}function cc(e,t){const r=ct(t.zone,_.defaultZone),n=Y.fromObject(t),o=_.now();let i,a;if(B(e.year))i=o;else{for(const c of I0)B(e[c])&&(e[c]=E0[c]);const s=T0(e)||S0(e);if(s)return M.invalid(s);const l=r.offset(o);[i,a]=Hn(e,l,r)}return new M({ts:i,zone:r,loc:n,o:a})}function uc(e,t,r){const n=B(r.round)?!0:r.round,o=(a,s)=>(a=za(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function dc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class M{constructor(t){const r=t.zone||_.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new ze("invalid input"):null)||(r.isValid?null:yn(r));this.ts=B(t.ts)?_.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=kn(this.ts,s),n=Number.isNaN(o.year)?new ze("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||Y.create(),this.invalid=n,this.weekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new M({})}static local(){const[t,r]=dc(arguments),[n,o,i,a,s,l,c]=r;return cc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=dc(arguments),[n,o,i,a,s,l,c]=r;return t.zone=pe.utcInstance,cc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=Og(t)?t.valueOf():NaN;if(Number.isNaN(n))return M.invalid("invalid input");const o=ct(r.zone,_.defaultZone);return o.isValid?new M({ts:n,zone:o,loc:Y.fromObject(r)}):M.invalid(yn(o))}static fromMillis(t,r={}){if(Pt(t))return t<-ic||t>ic?M.invalid("Timestamp out of range"):new M({ts:t,zone:ct(r.zone,_.defaultZone),loc:Y.fromObject(r)});throw new Me(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Pt(t))return new M({ts:t*1e3,zone:ct(r.zone,_.defaultZone),loc:Y.fromObject(r)});throw new Me("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=ct(r.zone,_.defaultZone);if(!n.isValid)return M.invalid(yn(n));const o=_.now(),i=B(r.specificOffset)?n.offset(o):r.specificOffset,a=fo(t,lc),s=!B(a.ordinal),l=!B(a.year),c=!B(a.month)||!B(a.day),d=l||c,f=a.weekYear||a.weekNumber,p=Y.fromObject(r);if((d||s)&&f)throw new xr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&s)throw new xr("Can't mix ordinal dates with month/day");const g=f||a.weekday&&!d;let v,b,y=kn(o,i);g?(v=i5,b=n5,y=ta(y)):s?(v=a5,b=o5,y=li(y)):(v=I0,b=E0);let A=!1;for(const D of v){const ce=a[D];B(ce)?A?a[D]=b[D]:a[D]=y[D]:A=!0}const T=g?t5(a):s?r5(a):T0(a),q=T||S0(a);if(q)return M.invalid(q);const Z=g?nc(a):s?oc(a):a,[ie,ue]=Hn(Z,i,n),re=new M({ts:ie,zone:n,o:ue,loc:p});return a.weekday&&d&&t.weekday!==re.weekday?M.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${re.toISO()}`):re}static fromISO(t,r={}){const[n,o]=Av(t);return gr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=$v(t);return gr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Cv(t);return gr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(B(t)||B(r))throw new Me("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=Y.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,d]=e5(a,t,r);return d?M.invalid(d):gr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return M.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Bv(t);return gr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Me("need to specify a reason the DateTime is invalid");const n=t instanceof ze?t:new ze(t,r);if(_.throwOnInvalid)throw new dg(n);return new M({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=y0(t,Y.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return w0(me.parseFormat(t),Y.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ui(this).weekYear:NaN}get weekNumber(){return this.isValid?ui(this).weekNumber:NaN}get weekday(){return this.isValid?ui(this).weekday:NaN}get ordinal(){return this.isValid?li(this.c).ordinal:NaN}get monthShort(){return this.isValid?$r.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?$r.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?$r.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?$r.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Mo(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,d=kn(l,a),f=kn(c,s);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[$t(this,{ts:l}),$t(this,{ts:c})]:[this]}get isInLeapYear(){return nn(this.year)}get daysInMonth(){return uo(this.year,this.month)}get daysInYear(){return this.isValid?Ir(this.year):NaN}get weeksInWeekYear(){return this.isValid?ho(this.weekYear):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=me.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(pe.instance(t),r)}toLocal(){return this.setZone(_.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=ct(t,_.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=Hn(a,i,t)}return $t(this,{ts:o,zone:t})}else return M.invalid(yn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return $t(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=fo(t,lc),n=!B(r.weekYear)||!B(r.weekNumber)||!B(r.weekday),o=!B(r.ordinal),i=!B(r.year),a=!B(r.month)||!B(r.day),s=i||a,l=r.weekYear||r.weekNumber;if((s||o)&&l)throw new xr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&o)throw new xr("Can't mix ordinal dates with month/day");let c;n?c=nc({...ta(this.c),...r}):B(r.ordinal)?(c={...this.toObject(),...r},B(r.day)&&(c.day=Math.min(uo(c.year,c.month),c.day))):c=oc({...li(this.c),...r});const[d,f]=Hn(c,this.o,this.zone);return $t(this,{ts:d,o:f})}plus(t){if(!this.isValid)return this;const r=N.fromDurationLike(t);return $t(this,ac(this,r))}minus(t){if(!this.isValid)return this;const r=N.fromDurationLike(t).negate();return $t(this,ac(this,r))}startOf(t){if(!this.isValid)return this;const r={},n=N.normalizeUnit(t);switch(n){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(n==="weeks"&&(r.weekday=1),n==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,r={}){return this.isValid?me.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):ci}toLocaleString(t=co,r={}){return this.isValid?me.create(this.loc.clone(r),t).formatDateTime(this):ci}toLocaleParts(t={}){return this.isValid?me.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=di(this,a);return s+="T",s+=sc(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?di(this,t==="extended"):null}toISOWeekDate(){return xn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+sc(this,a==="extended",r,t,n,i):null}toRFC2822(){return xn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return xn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?di(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),xn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():ci}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return N.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Dg(r).map(N.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=Rv(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(M.now(),t,r)}until(t){return this.isValid?K.fromDateTimes(this,t):this}hasSame(t,r){if(!this.isValid)return!1;const n=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r)<=n&&n<=o.endOf(r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||M.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),uc(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?uc(t.base||M.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(M.isDateTime))throw new Me("min requires all arguments be DateTimes");return Yl(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(M.isDateTime))throw new Me("max requires all arguments be DateTimes");return Yl(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=Y.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return b0(a,t,r)}static fromStringExplain(t,r,n={}){return M.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return co}static get DATE_MED(){return Ld}static get DATE_MED_WITH_WEEKDAY(){return mg}static get DATE_FULL(){return Od}static get DATE_HUGE(){return Dd}static get TIME_SIMPLE(){return Nd}static get TIME_WITH_SECONDS(){return qd}static get TIME_WITH_SHORT_OFFSET(){return Hd}static get TIME_WITH_LONG_OFFSET(){return Rd}static get TIME_24_SIMPLE(){return Vd}static get TIME_24_WITH_SECONDS(){return jd}static get TIME_24_WITH_SHORT_OFFSET(){return zd}static get TIME_24_WITH_LONG_OFFSET(){return Fd}static get DATETIME_SHORT(){return Zd}static get DATETIME_SHORT_WITH_SECONDS(){return Wd}static get DATETIME_MED(){return Ud}static get DATETIME_MED_WITH_SECONDS(){return Gd}static get DATETIME_MED_WITH_WEEKDAY(){return pg}static get DATETIME_FULL(){return Yd}static get DATETIME_FULL_WITH_SECONDS(){return Qd}static get DATETIME_HUGE(){return Xd}static get DATETIME_HUGE_WITH_SECONDS(){return Jd}}function vr(e){if(M.isDateTime(e))return e;if(e&&e.valueOf&&Pt(e.valueOf()))return M.fromJSDate(e);if(e&&typeof e=="object")return M.fromObject(e);throw new Me(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function Ga(e){const t=M.fromObject(cg(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function s5(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}const l5=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],c5=l5.reduce((e,t)=>(e[t]=t,e),{}),u5=_.defaultZone.name,Ya=c5.UTC;var hc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(hc||(hc={}));const d5=["hour","minute","second","millisecond"],h5=Jr({hour:14,minute:19,second:7,millisecond:877,timezone:Ya}),f5=Jr({year:2023,month:6,day:5,timezone:Ya}),m5=Jr(hf(f5,h5));var fc;(function(e){e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(fc||(fc={}));const p5=_.defaultLocale;function g5(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function mc(e,t){const r=Ga(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??p5});return g5(r)}function v5(e){if(!$r.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function w5(e){su(e,m5),v5(e.timezone),Ga(e)}function b5(e){try{return w5(e),!0}catch{return!1}}function y5(e,t){const r=k5(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return s5(r,t)}function pc(e){const t=M.fromJSDate(new Date(e));if(t.isValid)return t}function k5(e,t){if(b5(e)&&(e=Ga(e).toMillis()),M.isDateTime(e))return e.setZone(t);if(Rl(e,"number"))return M.fromMillis(e,{zone:Ya}).setZone(t);if(Rl(e,"string")){const r=M.fromISO(e,{zone:t});return r.isValid?r:pc(e)}else if(e instanceof Date)return M.fromJSDate(e).setZone(t);return pc(e)}function x5(e){return y5(Date.now(),e)}function A5(){return x5(u5)}const $5={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};ug($5,d5);function C5(e){return{date:mc(e,{dateStyle:"medium"}).replace(/\s/g," "),time:mc(e,{timeStyle:"short"}).replace(/\s/g," ")}}const hi=te()({tagName:"toniq-date-time",renderCallback({inputs:e}){const t=C5(e.fullDate),r=[e.parts.date&&t.date,e.parts.time&&t.time].filter(tn).join(" "),n=[t.date,t.time,`(${e.fullDate.timezone})`].join(" ");return u`
            <span title=${n}>${r}</span>
        `}}),T5="data-test-id",Ut=wt(class extends rt{constructor(e){super(e),this.element=S5(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(T5,e),$e}});function S5(e,t,r){M5(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function M5(e,t){if(e.type!==Yr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var ra=(e=>(e.Up="up",e.Down="down",e))(ra||{});const An=te()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:Q(),openChange:Q()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${G.boldParagraphFont};
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

        ${bt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${Oe};
            ${z(k.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${z(k.pagePrimary)}
            ${lo.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${lo.popupShadowReversed};
        }

        .selected-label-prefix {
            ${G.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Oe};
        }

        .select-options .option.selected {
            ${z(k.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${k.accentTertiary.backgroundColor};
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
            ${Dt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${C.assign({icon:n.icon})}
                      ${Ut("rendered-input-icon")}
                  ></${C}>
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
                        <${C.assign({icon:ud})}
                            class="trigger-icon"
                        ></${C}>
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
        `}}),Re=te()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>!!e.linkDisabled},events:{routeChangeTriggered:Q()},styles:({hostClasses:e})=>m`
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
            color: ${k.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${k.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} a {
            cursor: default;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){if(e.linkDisabled){o.preventDefault();return}e.treatAsRouteChange&&Ea(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?u`
                <a
                    href=${e.url}
                    ${$("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:u`
                <a href=${e.url} ${$("click",n)}><slot></slot></a>
            `}}),na=360,P0=8;function B0(e){return(e-P0)/2}const We=nt({"main-image-size":na,"secondary-image-size":B0(na)}),Xe=te()({tagName:"toniq-featured-flip-card-footer",styles:m`
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

        ${ne}, ${Re} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${We["secondary-image-size"].value} * 2);
        }

        ${Re} ${ne} {
            width: 100%;
        }

        ${Re} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${We["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:Q(),footerFlipCardButtonClick:Q()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?Ye(n).map(i=>{const a=n[i];if(!a)return;const s=Ed[i];return u`
                          <${Re.assign({newTab:!0,url:a})}>
                              <${C.assign({icon:s})}></${C}>
                          </${Re}>
                      `}).filter(tn):"";return u`
            <div class="buttons">
                ${e.viewMoreButtonUrl?u`
                          <${Re.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${$(Re.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${ne.assign({text:e.viewMoreButtonText,buttonStyle:Wr.Outline})}></${ne}>
                          </${Re}>
                      `:u`
                          <${ne.assign({text:e.viewMoreButtonText,buttonStyle:Wr.Outline})}
                              ${$("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${ne}>
                      `}
                ${e.flipCardButtonText?u`
                          <${ne.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${$("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${ne}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Et=te()({tagName:"toniq-flip-card",events:{flippedChange:Q()},styles:m`
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

        ${Sp(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${k.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <div
                class="flip-wrapper ${ve({flipped:e.flipped})}"
                ${$("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),J=te()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:Q()},styles:m`
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
            ${G.h3Font};
            ${G.extraBoldFont};
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
            max-height: ${We["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${We["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${P0}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Et} {
            width: 100%;
            height: 100%;
        }

        ${pr} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${We["main-image-size"].value};
            height: ${We["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${We["secondary-image-size"].value};
            height: ${We["secondary-image-size"].value};
        }

        .slot-wrapper {
            height: 100%;
            width: 100%;
        }

        .main-image-wrapper,
        .secondary-image-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .card-face.front ${Xe} {
            margin-top: 24px;
        }

        .card-face.back ${Xe} {
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
            ${G.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var g,v,b;const a=e.mainImageSize||na,s=B0(a);Ti({onElement:n,forCssVar:We["main-image-size"],toValue:`${a}px`}),Ti({onElement:n,forCssVar:We["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(tn).join(" "),c=u`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],f=u`
            ${e.imageLoadingTemplate?u`
                      <div class="slot-wrapper" slot=${er.Loading}>
                          ${e.imageLoadingTemplate}
                      </div>
                  `:""}
            ${e.imageErrorTemplate?u`
                      <div class="slot-wrapper" slot=${er.Error}>
                          ${e.imageErrorTemplate}
                      </div>
                  `:""}
        `,p=d?u`
                  <div class="main-image-wrapper">
                      <${pr.assign({imageUrl:d,_debugLoadDelay:e._debugImageLoadDelay})}>
                          ${f}
                      </${pr}>
                  </div>
              `:"";return u`
            <${Et.assign({flipped:t.flipped})}
                ${$(Xe.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${p}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(y=>u`
                                    <div class="secondary-image-wrapper">
                                        <${pr.assign({imageUrl:y,_debugLoadDelay:e._debugImageLoadDelay})}>
                                            ${f}
                                        </${pr}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${Xe.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${$(Xe.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Xe}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(v=e.infoParagraphs)==null?void 0:v.map(y=>u`
                                <p>${y}</p>
                            `)}
                    </div>
                    <${Xe.assign({viewMoreButtonText:l,flipCardButtonText:(b=e.infoParagraphs)!=null&&b.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${$(Xe.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Xe}>
                </div>
            </${Et}>
        `}});function oa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>oa({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function L0({value:e,allowed:t,blocked:r}){const n=t?oa({input:e,matcher:t}):!0,o=r?oa({input:e,matcher:r}):!1;return n&&!o}function gc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(L0({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var ia=(e=>(e.Default="default",e.Outline="outline",e))(ia||{});const $n=te()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:Q(),inputBlocked:Q()},styles:({hostClasses:e})=>m`
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
                border-radius: ${Ui};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${k.pagePrimary.backgroundColor};
                border-color: ${k.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${C} {
                color: ${k.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${C} {
                color: ${k.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${k.pageSecondary.foregroundColor};
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
                border-radius: ${Ui};
                background-color: ${k.accentTertiary.backgroundColor};
                font: ${G.paragraphFont};
                gap: 4px;
            }

            ${bt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

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
                color: ${k.accentTertiary.foregroundColor};
            }

            .suffix {
                ${G.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Dt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Oe};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=gc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
                  <${C.assign({icon:e.icon})}></${C}>
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
                    ${$("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)L0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:f}=gc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(f))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var Rn=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(Rn||{});const fi=te()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>m`
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
    `,renderCallback:({inputs:e})=>u`
            <${C.assign({icon:Ha,fitContainer:e.size!=="small"})}></${C}>
        `});async function E5(e){return navigator.clipboard.writeText(e)}const I5="…";function P5(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${I5}${n}`}function B5(e){return!(e%1)}function L5(e){return e.letterCount==null?4:B5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const fe=te()({tagName:"toniq-middle-ellipsis",events:{copied:Q()},cssVars:{"toniq-middle-ellipsis-text-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":k.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":k.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            /* 5 frames at 60 fps */
            transition: ${X.interaction};
            ${G.paragraphFont};
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

        ${bt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${k.pagePrimary.backgroundColor};
            background-color: ${k.pagePrimary.backgroundColor};
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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=L5(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?P5(i,a):i,f=c?i:"",p=s?md:l?fd:void 0,g=p?u`
                  <${C.assign({icon:p})}></${C}>
              `:"",v=u`
            <span title=${f} class="text-content">
                ${xe(!!e.copyOnClick,u`
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
                        ${$("click",b=>{var A,T;const y=(T=(A=b.currentTarget)==null?void 0:A.querySelector)==null?void 0:T.call(A,"a");if(!y)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");y.click()})}
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
                            ${v} ${g}
                        </a>
                    </button>
                `:l?u`
                    <button
                        class="text-wrapper copyable"
                        ${$("click",async()=>{await E5(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${v} ${g}
                    </button>
                `:u`
                    ${v}
                `:u``}}),vc="...";function O5(e,t,r=7,n=5){let o;e=Er({value:e,min:1,max:t}),r=Er({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?mi(t-o,t):e>o?mi(Math.min(s.start,t-o),Math.min(s.end,t)):mi(1,Math.min(t,o+1));function c(f,p){return l.length+1!==t?p:[f]}const d=l[l.length-1];if(d&&d<t){const f=c(t,[vc,t]);return[...l,...f]}else return l[0]!==1?c(1,[1,vc]).concat(l):l}function mi(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}te()({tagName:"toniq-pagination",styles:m`
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
            ${Oe};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${z(k.accentSecondary)};
        }

        .control:hover {
            ${z(k.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${z(k.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${G.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${z(k.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${z(k.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:Q()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${$("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${C.assign({icon:Na})}></${C}>
                </button>
                ${O5(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${ve({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${$("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${$("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${C.assign({icon:qa})}></${C}>
                </button>
            `}});const U=te()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:Q()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ve("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ve("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ve("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ve("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>m`
        :host {
            ${G.boldParagraphFont};
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

        ${bt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Dt};
        }

        .wrapper.disabled::before {
            ${Dt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:$2()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return D5(e.entries).map(i=>N5(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function D5(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${U.tagName} was given duplicate entry values.`),Object.values(t)}function N5(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${ve({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${$("click",()=>{n()})}
        >
            <input
                ${$("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function pi(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const f=e[d+1];return f==null?!0:c<=t&&f>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function q5(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=H5(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(wc(o,r),o.length>r&&wc(o,r)),o}function wc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function H5(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const P={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},wr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function R5(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${P.lowerLabelWrapper} .${P.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${P.upperLabelWrapper} .${P.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function V5(e,t=8){const r=R5(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function gi({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function Ur(e){return w2(e)&&e.min!==void 0&&e.max!==void 0}function aa(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${P.range}`);return(t==null?void 0:t.clientWidth)??0}function vi(e,t,r){return`${r?B2(e):e} ${t}`}function j5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function z5({value:e,double:t,min:r,max:n}){return t?Ur(e)?{min:Er({value:e.min,min:r,max:Math.min(e.max,n)}),max:Er({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:Ur(e)?r:Er({value:e,min:r,max:n})}function F5({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:Ur(e)?{min:pi(n,e.min),max:pi(n,e.max)}:pi(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function wi(e,t,r){return r?t[e]||0:e}function Z5(e){return{actualLimits:j5(e),actualValue:z5(e)}}function W5(e,t){var n,o,i;let r=!1;if(Ur(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${P.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${P.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${P.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function O0(e,t){const{actualValue:r,actualLimits:n}=Z5({...e}),o=q5(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=F5({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=aa(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Ct=16,bc=m`
    ${Ct}px
`,yc=m`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${bc};
    width: ${bc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${X.interaction};
    ${z(k.accentPrimary)};
`,kc=m`
    transform: scale(1.2);
`;function Cr(e){requestAnimationFrame(()=>{const t=O0(e.instanceInputs,e).elementValue;W5(t,e)&&(e.setAttribute("disabled","true"),Cr(e))})}const R=te()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:Q()},styles:m`
        :host {
            display: block;
        }

        .${L(P.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${z(k.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${z(k.accentPrimary)};
        }

        .${L(P.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${G.boldParagraphFont};
            ${Oe};
        }

        .${L(P.labelPixelMarginWrapper)},
            .${L(P.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${L(P.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${L(P.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${bt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${L(P.lowerSlider)},
        .${L(P.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-moz-range-thumb {
            ${yc}
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-webkit-slider-thumb {
            ${yc}
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-webkit-slider-thumb:hover {
            ${kc}
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-moz-range-thumb:hover {
            ${kc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Cr(e)}),e.addEventListener("keydown",()=>{Cr(e)}),e.addEventListener("keyup",()=>{Cr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:f,rangeWidth:p}=O0({...e},t);if(Cr(t),Ur(d))return g(a,d,f);return b(a,d,f);function g(y,A,T){const q={left:Wt((p-Ct)*(A.min-T.min)/(T.max-T.min)+Ct/2),right:Wt((p-Ct)*(T.max-A.max)/(T.max-T.min)+Ct/2)},Z=vi(y.min,c,l),ie=vi(y.max,c,l);requestAnimationFrame(()=>{const Ce=V5(t);Ce!==o.labelOverlap&&i({labelOverlap:Ce})});const ue=(T.max-A.max)/(T.max-T.min)>.5,re=gi({value:A.min,limits:{min:T.min,max:A.max},flip:!0}),D=gi({value:A.max,limits:{min:A.min,max:T.max},flip:!1}),ce=o.labelOverlap&&ue?o.labelOverlap:0,ur=o.labelOverlap&&!ue?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${Hr(()=>{i({rangeWidth:aa(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${q.left}; right:${q.right}"
                    ></div>
                    <span
                        class="${P.labelOuterWrapper} ${P.lowerLabelWrapper}"
                        style="left: ${q.left}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-left: ${ei(re)}"
                        >
                            <span
                                class="${P.labelPixelMarginWrapper}"
                                style="margin-right: ${Wt(ur)}"
                                ${Ut(wr.lowerLabel)}
                            >
                                ${Z}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${P.labelOuterWrapper} ${P.upperLabelWrapper} ${P.rightAlignedLabelWrapper}"
                        style="right: ${q.right}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-right: ${ei(D)}"
                        >
                            <span
                                class="${P.labelPixelMarginWrapper}"
                                style="margin-left: ${Wt(ce)}"
                                ${Ut(wr.upperLabel)}
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
                            class="${P.lowerSlider} ${P.slider}"
                            .min=${T.min}
                            .max=${T.max}
                            .value=${A.min}
                            ${$("input",Ce=>{const qt=Ce.target,dr={...y,min:wi(Number(qt.value),s,l)};v(dr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${P.upperSlider} ${P.slider}"
                            step=${e.step}
                            .min=${T.min}
                            .max=${T.max}
                            .value=${A.max}
                            ${Ut(wr.slider)}
                            ${$("input",Ce=>{const qt=Ce.target,dr={...y,max:wi(Number(qt.value),s,l)};v(dr)})}
                        />
                    </div>
                </div>
            `}function v(y){i({internalValue:y}),e.disabled||n(new r.valueChange(y))}function b(y,A,T){const q=Wt((p-Ct)*(T.max-A)/(T.max-T.min)+Ct/2),Z=vi(y,c,l),ie=gi({value:A,limits:T,flip:!1});return u`
                <div
                    class="range"
                    ${Hr(()=>{i({rangeWidth:aa(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${q}"></div>
                    <span
                        class="${P.labelOuterWrapper} ${P.rightAlignedLabelWrapper}"
                        style="right: ${q}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-right: ${ei(ie)}"
                            ${Ut(wr.label)}
                        >
                            ${Z}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${P.slider}"
                        step=${e.step}
                        .min=${T.min}
                        .max=${T.max}
                        .value=${A}
                        ${Ut(wr.slider)}
                        ${$("input",ue=>{const re=ue.target,D=wi(Number(re.value),s,l);v(D)})}
                    />
                </div>
            `}}});var D0=(e=>(e.Default="default",e.TextOnly="text-only",e))(D0||{});const bi=te()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${G.boldParagraphFont};
            ${Oe};
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

            ${z(k.accentSecondary)};
            transition:
                color ${X.interaction},
                background-color ${X.interaction};
        }

        ${bt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${z(k.accentPrimary)};
        }

        :host(:hover) button {
            ${z(k.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${z(k.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${z(k.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${z(k.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${z(k.pageInteraction)};
            border-color: ${k.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${z(k.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${k.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${z(k.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Dt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
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
        `}}),Br=eg({tagName:"toniq-tooltip",styles:m`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${k.accentPrimary.backgroundColor};
            ${lo.menuShadow};
            background-color: ${k.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),Vn=te()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>m`
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
                ${$("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${Br}>${e.tooltipContent}</${Br}>
            </div>
        `}}),Tr=te()({tagName:"toniq-top-tabs",events:{valueChange:Q()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>m`
        :host {
            display: block;
        }

        ul {
            ${de};
            display: flex;
            width: 100%;
        }

        li {
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${k.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${X.interaction},
                border-color ${X.interaction};
        }

        button {
            ${de};
            cursor: pointer;
            ${G.paragraphFont};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
            transition: padding-bottom ${X.interaction};
        }

        button {
            max-width: 300px;
        }

        ${It} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected button {
            ${G.boldFont};
            padding-bottom: calc(
                ${e["toniq-top-tabs-tab-vertical-padding"].value} -
                    ${e["toniq-top-tabs-selected-border-width"].value}
            );
        }

        li.selected {
            border-color: ${k.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <ul role="tablist">
                ${e.tabs.map(n=>{const o=n.value===e.value;return u`
                        <li
                            ${Sf("tab")}
                            role="presentation"
                            class=${ve({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${$("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${It.assign({text:n.label})}></${It}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),N0=W({title:"Data",parent:void 0}),mo=te()({tagName:"toniq-icon-book-viewer",styles:m`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${k.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${C.assign({icon:e.icon})}></${C}>
        `}}),Po=Object.values(lt).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),U5=Object.keys(Po).sort();function Qa(e){return{controlType:O.Dropdown,initValue:e,options:["None",...U5]}}const q0={"CSS color":{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-color"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-fill-color"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:O.Number,initValue:2}};function jn(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),y2(n,"number")&&(n=Oa({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const G5=W({title:"Social Urls",parent:N0,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${mo.assign({icon:n})}></${mo}>
                    `}})}Object.entries(Ed).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),oe=W({title:"Elements",parent:void 0}),Y5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:m`
            ${It} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],Q5=W({title:It.tagName,parent:oe,elementExamplesCallback({defineExample:e}){Y5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:m`
                    .bold {
                        ${G.boldFont}
                    }

                    ${t.extraStyle??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${It.assign({text:t.text})}
                            ${$("click",()=>{n({isBold:!r.isBold})})}
                            class=${ve({bold:r.isBold})}
                        ></${It}>
                        More text
                    `}})})}}),X5=W({parent:oe,title:ne.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:Wr.Secondary}},{name:"Outline",inputs:{buttonStyle:Wr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:m`
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
                        <${ne.assign({text:"Button",...r.inputs})}></${ne}>
                        <${ne.assign({icon:Dn,...r.inputs})}></${ne}>
                        <${ne.assign(n.showIcon?{icon:Dn,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${ne}>
                        <${ne.assign({text:"Button",icon:Dn,...r.inputs})}></${ne}>
                        <${ne.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${ne}>
                        <${ne.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ne}>
                    `}})})}}),xc=m`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${be} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,J5=W({parent:oe,title:be.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:xc,renderCallback(){return u`
                    <${be.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:lt["core-24"].map(t=>{const r=m`
                                padding: 24px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${be}>
                    <${be.assign({enableAutomaticCycling:!0,templates:lt["core-24"].map(t=>{const r=m`
                                padding: 100px 24px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${be}>
                    <${be.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:lt["core-24"].map(t=>{const r=A2({min:0,max:150}),n=m`
                                padding: 100px ${r}px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${C.assign({icon:t})} style=${n}></${C}>
                            `})})}></${be}>
                `}}),e({title:"banner style",styles:xc,renderCallback(){const t=m`
                    /* make sure this width matches the ToniqCarousel width */
                    width: 800px;
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 100px 0;
                    box-sizing: border-box;
                    border: 1px solid ${k.pageInteraction.foregroundColor};
                    border-radius: 12px;
                `;return u`
                    <${be.assign({enableAutomaticCycling:!0,style:Gi.BannerStyle,templates:lt["core-24"].map(r=>u`
                                <div style=${t}>
                                    <${C.assign({icon:r})}></${C}>
                                </div>
                            `)})}></${be}>
                    <${be.assign({enableAutomaticCycling:!0,style:Gi.BannerStyle,templates:[lt["core-24"][0]].map(r=>u`
                                <div style=${t}>
                                    <${C.assign({icon:r})}></${C}>
                                </div>
                            `)})}
                        class=${be.hostClasses["toniq-carousel-banner-style"]}
                    ></${be}>
                `}})}});function K5(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:O.Color,initValue:""}]);return Object.fromEntries(t)}function _5(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(tn);return L(t.join(`
`))}const ew=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],yi=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],tw=W({parent:oe,title:ot.tagName,controls:{Text:{controlType:O.Text,initValue:"Text"},...K5(ot)},elementExamplesCallback({defineExample:e}){ew.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:yi.map(r=>!!r.inputs.checked),extraEntryStatuses:yi.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:m`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return yi.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var f;return u`
                                    <${ot.assign({...t.inputs,...Wi(i.inputs,["checked"]),checked:!!((f=r.extraEntryStatuses[a])!=null&&f[d]),text:c})}
                                        ${$(ot.events.checkedChange,()=>{const p=[...r.extraEntryStatuses];p[a][d]=!p[a][d],n({extraEntryStatuses:p})})}
                                    ></${ot}>
                                `}),l=_5(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${ot.assign({...t.inputs,...Wi(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${$(ot.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${ot}>
                                ${s}
                            </div>
                        `})}})})}}),rw=W({parent:oe,title:oi.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Qt}},{inputs:{icon:Qt}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Qt},template:u`
                    HTML child
                `},{customStyle:m`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:Qi.Default}},{title:"secondary style",inputs:{style:Qi.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${oi.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${xe(!!o.template,o.template)}</${oi}>
                    `)}})})}}),nw=W({title:hi.tagName,parent:oe,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=[{title:"date and time",inputs:{parts:{date:!0,time:!0}}},{title:"date only",inputs:{parts:{date:!0,time:!1}}},{title:"time only",inputs:{parts:{date:!1,time:!0}}}],r=A5();t.forEach(n=>{e({title:n.title,renderCallback(){return u`
                        <${hi.assign({fullDate:r,...n.inputs})}></${hi}>
                    `}})})}}),Cn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],ow=[{title:"default"},{title:"transparent background",customStyle:m`
            ${Ra.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Ac=[{},{customStyle:m`
            width: 500px;
            height: 100px;
        `},{customStyle:m`
            max-height: 30px;
            min-height: 30px;
        `}],iw=W({title:An.tagName,parent:oe,controls:{Selected:{controlType:O.Dropdown,initValue:Cn[0].label,options:Cn.map(e=>e.label)},Direction:{controlType:O.Dropdown,initValue:"Down",options:k2(ra)},Icon:Qa(ld.name),Prefix:{controlType:O.Text,initValue:"Sort by: "},"Force open":{controlType:O.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){ow.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Ac.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:m`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Ac.map((i,a)=>{const s=m`
                            ${t.customStyle??m``};
                            ${i.customStyle??m``};
                        `;return u`
                            <${An.assign({...t.inputs,...i.inputs,options:Cn,value:r.selected[a]??Cn.find(l=>l.label===o.Selected),icon:Po[o.Icon],selectedLabelPrefix:o.Prefix,direction:ra[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${$(An.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${An}>
                        `})}})})}}),$c="/toniq-labs-design-system";function aw(...e){const r=[globalThis.location.pathname.startsWith($c)?$c:"",...e].filter(tn);return S2(...r)}const Tn=Array(30).fill(aw("/toniq-labs-logo.png")),Lr=["Hello there.","There is stuff here."],Sn=Lr.concat(Array(30).fill(Lr)),sw=W({title:J.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({infoParagraphs:Sn,imageUrls:Tn,socialUrls:_p,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${J}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:Tn,title:"Featured Stuff",infoParagraphs:void 0})}></${J}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Sn,viewMoreUrl:"https://toniqlabs.com"})}
                        ${$(J.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${J}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Sn})}></${J}>
                `}}),e({title:"with custom height",styles:m`
                ${J} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Sn})}></${J}>
                `}}),e({title:"smaller",styles:m`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:Tn,infoParagraphs:Lr,title:"Featured Stuff"})}></${J}>
                `}}),e({title:"with loading template",styles:m`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:Tn,infoParagraphs:Lr,title:"With Loading Template",_debugImageLoadDelay:{milliseconds:1/0},imageLoadingTemplate:u`
                            <div
                                class="icon-wrapper"
                                style=${m`
                                    background-color: #f0faff;
                                    box-sizing: border-box;
                                    border-radius: 16px;
                                    width: 100%;
                                    height: 100%;
                                    border: 2px solid blue;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    color: blue;
                                `}
                            >
                                <${C.assign({icon:Ha,fitContainer:!0})}
                                    style=${m`
                                        width: 100%;
                                        height: 100%;
                                    `}
                                ></${C}>
                            </div>
                        `})}></${J}>
                `}}),e({title:"with error template",styles:m`
                ${J} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${J.assign({imageUrls:Array(20).fill(0).map(()=>"/invalid-image.png"),infoParagraphs:Lr,title:"With Error Template",imageErrorTemplate:u`
                            <div
                                class="icon-wrapper"
                                style=${m`
                                    background-color: #fff0f0;
                                    box-sizing: border-box;
                                    border-radius: 16px;
                                    width: 100%;
                                    height: 100%;
                                    border: 2px solid red;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    color: red;
                                `}
                            >
                                <${C.assign({icon:td,fitContainer:!0})}
                                    style=${m`
                                        ${E["vira-icon-fill-color"].name}: transparent;
                                    `}
                                ></${C}>
                            </div>
                        `})}></${J}>
                `}})}}),lw=W({title:Et.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:m`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${Et.assign({flipped:t.flipped})}
                        ${$(Et.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Et}>
                `}})}}),cw=W({parent:oe,title:Re.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}},{title:"link disabled",inputs:{linkDisabled:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${Re.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Re}>
                    `}})})}}),uw=W({title:C.tagName,parent:oe,controls:q0,elementExamplesCallback({defineExample:e}){const t=[{icon:yd},{icon:bd},{icon:dd},{icon:Qt},{icon:void 0}];e({title:"sizes",styles:m`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${C.assign({icon:n.icon})}
                            style=${jn(r)}
                        ></${C}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=m`
                    ${h["toniq-icon-fill-color"].name}: orange;
                `;return lt["third-party-brands"].map(o=>u`
                        <${C.assign({icon:o})}
                            style=${jn(r)}
                        ></${C}>
                        <${C.assign({icon:o})}
                            style=${n}
                        ></${C}>
                    `)}}),e({title:"fit container",styles:m`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${C} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:r}){return u`
                    <${C.assign({icon:Qt,fitContainer:!0})}
                        style=${jn(r)}
                    ></${C}>
                `}})}}),dw=W({title:$n.tagName,parent:oe,controls:{"External value":{controlType:O.Text,initValue:""},Placeholder:{controlType:O.Text,initValue:"placeholder"},Icon:Qa(gd.name),Suffix:{controlType:O.Text,initValue:"ICP"},"No browser helps":{controlType:O.Checkbox,initValue:!1},"Blocked characters":{controlType:O.Text,initValue:""},"Exclusive characters":{controlType:O.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:m`
                    height: 75px;
                    width: 300px;
                `},{customStyles:m`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:ia.Default}},{title:"outline",inputs:{style:ia.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${$n.assign({...n.inputs,value:o["External value"]||i.value,icon:Po[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${$($n.events.valueChange,l=>{a({value:l.detail})})}
                            ></${$n}>
                        `))}})})}}),hw=W({title:fi.tagName,parent:oe,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:Rn.Small}},{title:"large",inputs:{size:Rn.Large}},{title:"whole page",inputs:{size:Rn.WholePage},styles:m`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??m``,renderCallback(){return u`
                        <${fi.assign(r.inputs)}></${fi}>
                    `}})})}}),fw=W({title:fe.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${fe.assign({text:"Long string instead of text"})}></${fe}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${fe.assign({text:"Short text"})}></${fe}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${fe.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${fe}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${fe.assign({text:"Long text that you can copy",copyOnClick:!0})}></${fe}>
                `}}),e({title:"Custom CSS vars",styles:m`
                ${fe} {
                    ${fe.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${fe.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${fe.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${fe.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${fe.assign({text:"long text with custom colors",copyOnClick:!0})}></${fe}>
                `}})}}),br=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Se={basic:br,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...br.slice(1)],disabled:[{...br[0],disabled:!0},...br.slice(1)],noLabels:u2(br,e=>({...e,label:void 0}))},mw=W({title:U.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Se.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Se.basic,value:t.selectedValue})}
                        ${$(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Se.basic[0].value},styles:m`
                ${U} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Se.basic,value:t.selectedValue})}
                        ${$(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Se.longText[0].value},styles:m`
                ${U} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Se.longText,value:t.selectedValue})}
                        ${$(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Se.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Se.noLabels,value:t.selectedValue})}
                        ${$(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Se.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Se.disabled,value:t.selectedValue})}
                        ${$(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Se.basic[0].value},styles:m`
                ${U} {
                    ${U.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${U.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${U.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${U.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Se.basic,value:t.selectedValue})}
                        ${$(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}})}}),Je=m`
    ${R} {
        width: 300px;
    }
`,ki={min:10,max:50},pw=W({title:R.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,...ki})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,...ki,suffix:"ICP"})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:m`
                ${Je}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,min:-100,max:100})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:m`
                ${Je}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,...ki})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${Je}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${$(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}})}}),gw=[{title:"default",inputs:{}},{title:"text only",inputs:{style:D0.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Cc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],vw=W({title:bi.tagName,parent:oe,controls:{Text:{controlType:O.Text,initValue:"Toggle Button"},Icon:Qa(pd.name)},elementExamplesCallback({defineExample:e}){gw.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Cc.map(r=>!!r.inputs.toggled)},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Cc.map((i,a)=>u`
                            <${bi.assign({...t.inputs,toggled:r.buttonStates[a],icon:Po[o.Icon],text:o.Text,...Wi(i.inputs,["toggled"])})}
                                ${$("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${bi}>
                        `)}})})}}),ww=W({parent:oe,title:Vn.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:m`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${k.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,renderCallback(){return u`
                        <${Vn.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${Vn}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:u`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),bw=W({parent:oe,title:Br.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${Vn.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${Br}>This is a tooltip.</${Br}>
                `}})}}),yw=[ww,bw],kw=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:m`
            :host {
                width: 500px;
            }

            ${Tr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:m``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],xw=W({title:Tr.tagName,parent:oe,elementExamplesCallback({defineExample:e}){kw.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:m`
                    ${t.extraStyles??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Tr.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${$(Tr.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${Tr}>
                    `}})})}}),H0=W({title:"Icons",parent:void 0,controls:q0}),Aw=Object.entries(lt).map(([e,t])=>W({title:e,parent:H0,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${mo.assign({icon:n})}
                                    style=${jn(o)}
                                ></${mo}>
                            `}}))}}));function R0(e){const t=$w(e),r=rr(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Ye(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function $w(e){typeof e!="string"&&(e=String(e));const n=`{"${h2(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const Xa=W({title:"Styles",parent:void 0}),Cw=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${G.labelFont};
        ${G.monospaceFont};
        color: ${k.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${k.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${G.h2Font};
    }
`;function Tw(e,t,r){const n=R0(z(r));return e({title:t,styles:Cw,renderCallback(){return u`
                <div class="color-example" style=${z(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const Sw=W({title:"Colors",parent:Xa,elementExamplesCallback({defineExample:e}){Ye(k).map(t=>Tw(e,t,k[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Mw=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${G.labelFont};
        ${G.monospaceFont};
        color: ${k.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${k.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${k.divider.foregroundColor};
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
`;function Ew(e,t,r){const n=R0(r);return e({title:t,styles:Mw,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Ye(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const Iw=W({title:"Fonts",parent:Xa,elementExamplesCallback({defineExample:e}){Ye(G).map(t=>{const r=G[t];return Ew(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),Pw=[oe,H0,Xa,N0],Bw=[...Aw,...yw,G5,Q5,X5,J5,tw,rw,Sw,nw,iw,sw,lw,Iw,cw,uw,dw,hw,fw,mw,pw,vw,xw].sort((e,t)=>e.title.localeCompare(t.title)),Lw=[...Pw,...Bw];yo({tagName:"toniq-design-system-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${_o} {
            height: 100%;
            width: 100%;
            ${G.paragraphFont};
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
            <${_o.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:Lw,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${Ue.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${_o}>
        `}});
