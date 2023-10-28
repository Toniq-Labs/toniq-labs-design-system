var kl=Object.freeze,xl=Object.defineProperty;var hm=(e,t,r)=>t in e?xl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pi=(e,t,r)=>(hm(e,typeof t!="symbol"?t+"":t,r),r);var vi=(e,t)=>kl(xl(e,"raw",{value:kl(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function hs(e){return!!e}function mm(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var Al;(function(e){e.Upper="upper",e.Lower="lower"})(Al||(Al={}));const gm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Go(e,t){return e?gm.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ld(e,t){return e&&t.every(r=>Go(e,r))}function cd(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Yo(r).trim()).join(`
`))}function Yo(e){return e?e instanceof Error?e.message:Go(e,"message")?String(e.message):String(e):""}function pm(e){return e instanceof Error?e:new Error(Yo(e))}function Sl(e){return!!e&&typeof e=="object"}function go(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function vm(e){return Array.isArray(e)?"array":typeof e}function Qo(e,t){return vm(e)===t}function $l({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Tl="Failed to compare objects using JSON.stringify";function Cl(e,t,r){return $l({source:e,errorHandler(n){if(r)return"";throw n}})===$l({source:t,errorHandler(n){if(r)return"";throw n}})}function yt(e,t,r={}){try{return e===t?!0:Sl(e)&&Sl(t)?Cl(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>yt(e[o],t[o])):!1:Cl(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=pm(n);throw o.message.startsWith(Tl)||(o.message=`${Tl}: ${o.message}`),o}}function wm(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ym(e){return go(e).filter(t=>isNaN(Number(t)))}function bm(e){return ym(e).map(r=>e[r])}function km(e,t){return bm(t).includes(e)}function xm(e,t){return go(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Am(e,t){return xm(e,r=>!t.includes(r))}function po(e,t){let r=!1;const n=go(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(go(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function El(e,t){try{return Sm(e,t),!0}catch{return!1}}function Sm(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ud(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ud.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function $m(e){const t=ud();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Tm=globalThis.crypto;function Cm(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Tm.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Em(e,t){return Go(e,"entryType")&&e.entryType===t}var ge;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ge||(ge={}));function Kt(e,t){return e.controlType===t}var H;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(H||(H={}));const dd=Symbol("any-type"),Mm={[H.Checkbox]:!1,[H.Color]:"",[H.Dropdown]:"",[H.Hidden]:dd,[H.Number]:0,[H.Text]:""};function Im(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=Mm[o.controlType];i!==dd&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function ms(e,t){const r=vo(e.title);return e.parent?[...ms(e.parent,!1),vo(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function vo(e){return mm(e).toLowerCase().replaceAll(/\s/g,"-")}function Pm({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function G(e){const t={...e,entryType:ge.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:ge.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(hs)};r.add(n.title),t.elementExamples[vo(o.title)]=o}}),t}var _e;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(_e||(_e={}));var Ml;(function(e){e.Upper="upper",e.Lower="lower"})(Ml||(Ml={}));function Lm(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function fd(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${fd.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function ma(e=1){const t=fd();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function Bm(e){return Om(e,1)}async function Om(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Lm(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn=window,gs=Xn.ShadowRoot&&(Xn.ShadyCSS===void 0||Xn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ps=Symbol(),Il=new WeakMap;let hd=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ps)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(gs&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Il.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Il.set(r,t))}return t}toString(){return this.cssText}};const O=e=>new hd(typeof e=="string"?e:e+"",void 0,ps),Kn=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new hd(r,e,ps)},Dm=(e,t)=>{gs?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Xn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Pl=gs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return O(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wi;const wo=window,Ll=wo.trustedTypes,Nm=Ll?Ll.emptyScript:"",Bl=wo.reactiveElementPolyfillSupport,ga={toAttribute(e,t){switch(t){case Boolean:e=e?Nm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},md=(e,t)=>t!==e&&(t==t||e==e),yi={attribute:!0,type:String,converter:ga,reflect:!1,hasChanged:md},pa="finalized";let or=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=yi){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||yi}static finalize(){if(this.hasOwnProperty(pa))return!1;this[pa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Pl(o))}else t!==void 0&&r.push(Pl(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Dm(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=yi){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:ga).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:ga;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||md)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};or[pa]=!0,or.elementProperties=new Map,or.elementStyles=[],or.shadowRootOptions={mode:"open"},Bl==null||Bl({ReactiveElement:or}),((wi=wo.reactiveElementVersions)!==null&&wi!==void 0?wi:wo.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bi;const yo=window,gr=yo.trustedTypes,Ol=gr?gr.createPolicy("lit-html",{createHTML:e=>e}):void 0,bo="$lit$",at=`lit$${(Math.random()+"").slice(9)}$`,vs="?"+at,Rm=`<${vs}>`,Wt=document,Jr=()=>Wt.createComment(""),Xr=e=>e===null||typeof e!="object"&&typeof e!="function",gd=Array.isArray,pd=e=>gd(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ki=`[ 	
\f\r]`,Ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dl=/-->/g,Nl=/>/g,Pt=RegExp(`>|${ki}(?:([^\\s"'>=/]+)(${ki}*=${ki}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rl=/'/g,Hl=/"/g,vd=/^(?:script|style|textarea|title)$/i,wd=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Hm=wd(1),qm=wd(2),Me=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),ql=new WeakMap,qt=Wt.createTreeWalker(Wt,129,null,!1);function yd(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ol!==void 0?Ol.createHTML(t):t}const bd=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Ir;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,h=0;for(;h<l.length&&(a.lastIndex=h,u=a.exec(l),u!==null);)h=a.lastIndex,a===Ir?u[1]==="!--"?a=Dl:u[1]!==void 0?a=Nl:u[2]!==void 0?(vd.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=Pt):u[3]!==void 0&&(a=Pt):a===Pt?u[0]===">"?(a=o??Ir,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?Pt:u[3]==='"'?Hl:Rl):a===Hl||a===Rl?a=Pt:a===Dl||a===Nl?a=Ir:(a=Pt,o=void 0);const g=a===Pt&&e[s+1].startsWith("/>")?" ":"";i+=a===Ir?l+Rm:d>=0?(n.push(c),l.slice(0,d)+bo+l.slice(d)+at+g):l+at+(d===-2?(n.push(void 0),s):g)}return[yd(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Kr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,u]=bd(t,r);if(this.el=Kr.createElement(c,n),qt.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=qt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith(bo)||h.startsWith(at)){const g=u[a++];if(d.push(h),g!==void 0){const p=o.getAttribute(g.toLowerCase()+bo).split(at),w=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:w[2],strings:p,ctor:w[1]==="."?xd:w[1]==="?"?Ad:w[1]==="@"?Sd:dn})}else l.push({type:6,index:i})}for(const h of d)o.removeAttribute(h)}if(vd.test(o.tagName)){const d=o.textContent.split(at),h=d.length-1;if(h>0){o.textContent=gr?gr.emptyScript:"";for(let g=0;g<h;g++)o.append(d[g],Jr()),qt.nextNode(),l.push({type:2,index:++i});o.append(d[h],Jr())}}}else if(o.nodeType===8)if(o.data===vs)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(at,d+1))!==-1;)l.push({type:7,index:i}),d+=at.length-1}i++}}static createElement(t,r){const n=Wt.createElement("template");return n.innerHTML=t,n}}function Ut(e,t,r=e,n){var o,i,a,s;if(t===Me)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Xr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ut(e,l._$AS(e,t.values),l,n)),t}class kd{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Wt).importNode(n,!0);qt.currentNode=i;let a=qt.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new xr(a,a.nextSibling,this,t):c.type===1?u=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(u=new $d(a,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=qt.nextNode(),s++)}return qt.currentNode=Wt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class xr{constructor(t,r,n,o){var i;this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ut(this,t,r),Xr(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):pd(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==le&&Xr(this._$AH)?this._$AA.nextSibling.data=t:this.$(Wt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Kr.createElement(yd(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new kd(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=ql.get(t.strings);return r===void 0&&ql.set(t.strings,r=new Kr(t)),r}T(t){gd(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new xr(this.k(Jr()),this.k(Jr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class dn{constructor(t,r,n,o,i){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=le}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Ut(this,t,r,0),a=!Xr(t)||t!==this._$AH&&t!==Me,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Ut(this,s[n+l],r,l),c===Me&&(c=this._$AH[l]),a||(a=!Xr(c)||c!==this._$AH[l]),c===le?t=le:t!==le&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xd extends dn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}}const zm=gr?gr.emptyScript:"";class Ad extends dn{constructor(){super(...arguments),this.type=4}j(t){t&&t!==le?this.element.setAttribute(this.name,zm):this.element.removeAttribute(this.name)}}class Sd extends dn{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ut(this,t,r,0))!==null&&n!==void 0?n:le)===Me)return;const o=this._$AH,i=t===le&&o!==le||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==le&&(o===le||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class $d{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ut(this,t)}}const Vm={O:bo,P:at,A:vs,C:1,M:bd,L:kd,R:pd,D:Ut,I:xr,V:dn,H:Ad,N:Sd,U:xd,F:$d},zl=yo.litHtmlPolyfillSupport;zl==null||zl(Kr,xr),((bi=yo.litHtmlVersions)!==null&&bi!==void 0?bi:yo.litHtmlVersions=[]).push("2.8.0");const jm=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new xr(t.insertBefore(Jr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xi,Ai;let Zr=class extends or{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jm(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Me}};Zr.finalized=!0,Zr._$litElement$=!0,(xi=globalThis.litElementHydrateSupport)===null||xi===void 0||xi.call(globalThis,{LitElement:Zr});const Vl=globalThis.litElementPolyfillSupport;Vl==null||Vl({LitElement:Zr});((Ai=globalThis.litElementVersions)!==null&&Ai!==void 0?Ai:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Et=e=>(...t)=>({_$litDirective$:e,values:t});let ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Fm}=Vm,jl=()=>document.createComment(""),Pr=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(jl(),i),s=o.insertBefore(jl(),i);r=new Fm(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;o.insertBefore(c,i),c=u}}}return r},Lt=(e,t,r=e)=>(e._$AI(t,r),e),Zm={},Wm=(e,t=Zm)=>e._$AH=t,Um=e=>e._$AH,Si=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=Et(class extends ct{constructor(e){var t;if(super(e),e.type!==fn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Me}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fl=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Gm=Et(class extends ct{constructor(e){if(super(e),e.type!==fn.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=Um(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,h=0,g=i.length-1,p=0,w=a.length-1;for(;h<=g&&p<=w;)if(i[h]===null)h++;else if(i[g]===null)g--;else if(l[h]===s[p])c[p]=Lt(i[h],a[p]),h++,p++;else if(l[g]===s[w])c[w]=Lt(i[g],a[w]),g--,w--;else if(l[h]===s[w])c[w]=Lt(i[h],a[w]),Pr(e,c[w+1],i[h]),h++,w--;else if(l[g]===s[p])c[p]=Lt(i[g],a[p]),Pr(e,i[h],i[g]),g--,p++;else if(u===void 0&&(u=Fl(s,p,w),d=Fl(l,h,g)),u.has(l[h]))if(u.has(l[g])){const y=d.get(s[p]),k=y!==void 0?i[y]:null;if(k===null){const S=Pr(e,i[h]);Lt(S,a[p]),c[p]=S}else c[p]=Lt(k,a[p]),Pr(e,i[h],k),i[y]=null;p++}else Si(i[g]),g--;else Si(i[h]),h++;for(;p<=w;){const y=Pr(e,c[w+1]);Lt(y,a[p]),c[p++]=y}for(;h<=g;){const y=i[h++];y!==null&&Si(y)}return this.ut=s,Wm(e,c),Me}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let va=class extends ct{constructor(t){if(super(t),this.et=le,t.type!==fn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===le||t==null)return this.ft=void 0,this.et=t;if(t===Me)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};va.directiveName="unsafeHTML",va.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zl extends va{}Zl.directiveName="unsafeSVG",Zl.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ym(e,t,r){return e?t():r==null?void 0:r()}var Qm=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,h=!1,g=r.length-1;g>=0;g--){var p={};for(var w in n)p[w]=w==="access"?{}:n[w];for(var w in n.access)p.access[w]=n.access[w];p.addInitializer=function(k){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(k||null))};var y=(0,r[g])(s==="accessor"?{get:u.get,set:u.set}:u[l],p);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=a(y.get))&&(u.get=d),(d=a(y.set))&&(u.set=d),(d=a(y.init))&&o.unshift(d)}else(d=a(y))&&(s==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),h=!0},Jm=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Xm=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Km(){function e(t,r){return t}return e}let Td=(()=>{let e=[Km()],t,r=[],n,o=Zr;return n=class extends o{},Xm(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;Qm(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),Jm(n,r)})(),n})();function _m(e){return!!e}function eg(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const tg={capitalizeFirstLetter:!1};function rg(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function ng(e,t){return t.capitalizeFirstLetter?rg(e):e}function og(e,t=tg){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return ng(n,t)}var Wl;(function(e){e.Upper="upper",e.Lower="lower"})(Wl||(Wl={}));const ig=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Jo(e,t){return e?ig.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ag(e){return!!(Jo(e,"then")&&typeof e.then=="function")}function Cd(e){return e?e instanceof Error?e.message:Jo(e,"message")?String(e.message):String(e):""}function ws(e){return e instanceof Error?e:new Error(Cd(e))}function wa(e){return!!e&&typeof e=="object"}function Gt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ul({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Gl="Failed to compare objects using JSON.stringify";function Yl(e,t,r){return Ul({source:e,errorHandler(n){if(r)return"";throw n}})===Ul({source:t,errorHandler(n){if(r)return"";throw n}})}function Ed(e,t,r={}){try{return e===t?!0:wa(e)&&wa(t)?Yl(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Ed(e[o],t[o])):!1:Yl(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ws(n);throw o.message.startsWith(Gl)||(o.message=`${Gl}: ${o.message}`),o}}function Md(e,t){let r=!1;const n=Gt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Gt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function ya(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ya.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}var pr;(function(e){e.Upper="upper",e.Lower="lower"})(pr||(pr={}));function sg(e){return e.toLowerCase()!==e.toUpperCase()}function Ql(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!sg(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===pr.Upper&&o!==o.toUpperCase())return!1;if(t===pr.Lower&&o!==o.toLowerCase())return!1}return!0}function lg(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ql(a,pr.Lower,{blockNoCaseCharacters:!0})||Ql(s,pr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function cg(e){return!!e&&typeof e=="object"}function Jl(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ug(e){return Array.isArray(e)?"array":typeof e}function dg(e,t){return ug(e)===t}function fg(e,t){let r=!1;const n=Jl(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Jl(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function ut(e){if(cg(e))return fg(e,(r,n)=>{if(!dg(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(lg(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?O(r):r.startsWith("-")?Kn`-${O(r)}`:Kn`--${O(r)}`;return{name:a,value:Kn`var(${a}, ${O(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${ut.name}' function.`)}function ba({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hg=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},mg=(e,t,r)=>{t.constructor.createProperty(r,e)};function Id(e){return(t,r)=>r!==void 0?mg(e,t,r):hg(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $i;(($i=window.HTMLSlotElement)===null||$i===void 0?void 0:$i.prototype.assignedElements)!=null;function gg(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function ka(e){return Jo(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function ys(e){return Jo(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Pd(e){return e.map(t=>ka(t)?t.definition:t).filter(t=>ys(t))}const Ld=new WeakMap;function pg(e,t){var o;const r=Pd(t);return(o=Bd(Ld,[e,...r]).value)==null?void 0:o.template}function vg(e,t,r){const n=Pd(t);return Dd(Ld,[e,...n],r)}function Bd(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Od(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Bd(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Od(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Dd(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Od(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Dd(l,t,r,n+1)}const wg=new WeakMap;function Nd(e,t,r){const n=pg(e,t),o=n??r();if(!n){const s=vg(e,t,o);if(s.result)wg.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=gg(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Rd(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,h=o[d],g=u-1,p=t[g];n&&n(c);let w,y=[];if(typeof h=="string"&&(w=r(h,c,p),w)){o[d]=h+w.replacement,a.push(g);const S=w.getExtraValues;y=S?S(p):[],y.length&&S?(o[d]+=" ",y.forEach((P,R)=>{R&&o.push(" ")}),s.push(P=>{const R=P[g],ae=S(R);return{index:g,values:ae}}),o.push(c)):o[d]+=c}w||o.push(c);const k=e.raw[u];w?(i[d]=i[d]+w.replacement+k,y.length&&y.forEach(()=>{i.push("")})):i.push(k)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function yg(...[e,t,r]){if(ys(r))return{replacement:r.tagName,getExtraValues:void 0}}function bg(e,t){return Rd(e,t,yg)}function v(e,...t){const r=Nd(e,t,()=>bg(e,t));return Kn(r.strings,...r.values)}const bs=Symbol("key for ignoring inputs not having been set yet"),kg={[bs]:!0,allowPolymorphicState:!1};function Hd(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Td?!0:Hd(r)}function qd(e,t){const r=e.instanceState;Gt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Gt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),xg(e)}function xg(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Xl(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Ag extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function ks(){return e=>{var t;return t=class extends Ag{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function K(){return ks()}function Sg(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=ks()(r);return t[r]=n,t},{}):{}}const $g="_elementVirStateSetup";function Tg(e){return wa(e)?$g in e:!1}function Cg(e,t){return e.includes(t)}var Kl;(function(e){e.Upper="upper",e.Lower="lower"})(Kl||(Kl={}));const Eg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function _n(e,t){return e?Eg.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function hn(e){return!!e&&typeof e=="object"}function ko(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function xa(e){return Array.isArray(e)?"array":typeof e}function lr(e,t){return xa(e)===t}function Mg(e,t){let r=!1;const n=ko(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ko(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Ig(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return xa(e)===xa(t)&&r}const zd=Symbol("and"),xs=Symbol("or"),Vd=Symbol("exact"),jd=Symbol("enum"),As=Symbol("unknown"),Fd="__vir__shape__definition__key__do__not__use__in__actual__objects";function Zd(e){return _n(e,Fd)}const Wd="__vir__shape__specifier__key__do__not__use__in__actual__objects",Pg=[zd,xs,Vd,jd,As];function Bt(...e){return Ud(e,xs)}function Lg(){return Ud([],As)}function Xo(e){return mn(e,xs)}function Ss(e){return mn(e,zd)}function $s(e){return mn(e,Vd)}function Ts(e){return mn(e,jd)}function Cs(e){return mn(e,As)}function mn(e,t){const r=Ko(e);return!!r&&r.specifierType===t}function Ud(e,t){return{[Wd]:!0,specifierType:t,parts:e}}function eo(e,t){const r=Ko(t);if(r){if(Ss(r))return r.parts.every(n=>eo(e,n));if(Xo(r))return r.parts.some(n=>eo(e,n));if($s(r))return hn(e)?eo(e,r.parts[0]):e===r.parts[0];if(Ts(r))return Object.values(r.parts[0]).some(n=>n===e);if(Cs(r))return!0}return Ig(e,t)}function Ko(e){if(hn(e)&&_n(e,Wd)){if(!_n(e,"parts")||!lr(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!_n(e,"specifierType")||!Cg(Pg,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Aa(e,t=!1){return Sa(e)}function Sa(e){const t=Ko(e);if(t){if(Xo(t)||$s(t))return Sa(t.parts[0]);if(Ss(t))return t.parts.reduce((r,n)=>Object.assign(r,Sa(n)),{});if(Ts(t))return Object.values(t.parts[0])[0];if(Cs(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Zd(e)?Aa(e.shape):e instanceof RegExp||lr(e,"array")?e:hn(e)?Mg(e,(r,n)=>Aa(n)):e}function Gd(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Aa(e),[Fd]:!0}}let Ze=class extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}};function Bg(e,t,r={}){try{return Og(e,t,r),!0}catch{return!1}}function Og(e,t,r={}){Rt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Yd(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Rt(e,t,r,n){if(Cs(t))return!0;if(Zd(t))return Rt(e,t.shape,r,n);const o=Yd(r);if(Ko(e))throw new Ze(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!eo(e,t))throw new Ze(`Subject does not match shape definition at key ${o}`);if(lr(t,"function"))return lr(e,"function");if(hn(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Xo(t))l=t.parts.some(c=>{try{const u=Rt(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof Ze)return!1;throw u}});else if(Ss(t))l=t.parts.every(c=>{try{const u=Rt(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof Ze)return!1;throw u}});else if($s(t)){const c=Rt(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(Ts(t))throw new Ze(`Cannot compare an enum specifier to an object at ${o}`);if(lr(t,"array")&&lr(a,"array"))l=a.every((c,u)=>{const d=t.some(h=>{try{return Rt(c,h,[...r,u],n),!0}catch(g){if(g instanceof Ze)return!1;throw g}});return s[u]=d,d});else{const c=Dg({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new Ze(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new Ze(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Dg({keys:e,options:t,shape:r,subject:n}){const o=Yd(e),i={};if(hn(r)){const a=new Set(ko(n)),s=new Set(ko(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Ze(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var h;const c=r[l],u=Xo(c)?c.parts.includes(void 0):!1,d=((h=c==null?void 0:c.includes)==null?void 0:h.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new Ze(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];Rt(c,u,[...e,l],t),i[l]=!0})}else throw new Ze(`shape definition at ${o} was not an object.`);return i}const Ng=Gd({addListener(){return!1},removeListener(){return!1},value:Lg()});function Ti(e){return Bg(e,Ng,{allowExtraKeys:!0})}function Rg(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function _l(e,t){const r=e;function n(a){t?Rg(a,e,e.tagName):Id()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=Tg(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(p){a[s]=p,r[s]=p}const h=e.observablePropertyListenerMap[s];if(u!==c&&Ti(u)&&(h!=null&&h.length)&&u.removeListener(h),Ti(c))if(h)c.addListener(h);else{let p=function(){e.requestUpdate()};var g=p;e.observablePropertyListenerMap[s]=p,c.addListener(p)}else Ti(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function Hg(e){return e?Md(e,t=>t):{}}function qg({hostClassNames:e,cssVars:t}){return{hostClasses:Md(e,(r,n)=>({name:O(n),selector:O(`:host(.${n})`)})),cssVars:t}}function zg({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Gt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Vg(e,t){function r(o){Gt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var jg=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function _o(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...kg,...e.options},n=Sg(e.events),o=Hg(e.hostClasses);e.hostClasses&&Xl(e.tagName,e.hostClasses),e.cssVars&&Xl(e.tagName,e.cssVars);const i=e.cssVars?ut(e.cssVars):{},a=typeof e.styles=="function"?e.styles(qg({hostClassNames:o,cssVars:i})):e.styles||v``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Td{createRenderParams(){return Vg(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{Hd(this)&&!this.haveInputsBeenSet&&!r[bs]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${_o.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return zg({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=ws(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){qd(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=_l(this,!1),this.instanceState=_l(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Gt(u).forEach(h=>{Id()(this,h),this.instanceState[h]=u[h]}),this.definition=c}},jg(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:og(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Es(){return e=>_o({...e,options:{[bs]:!1,...e.options}})}function Ms(e,t){return _r(e,t),e.element}function Fg(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function _r(e,t){const r=Fg(e),n=r?`: in ${r}`:"";if(e.type!==fn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Zg(e,t){return t?ec(e,t):ec(void 0,e)}const ec=Et(class extends ct{constructor(e){super(e),this.element=Ms(e,"assign")}render(e,t){return qd(this.element,t),Me}});function Wg(e,t){return e===t}function Ug(e,t=Wg){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const Ci=Symbol("not set");function Gg(e){let t=Ci,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=ya();const i=Ug(o.promise);function a(){o=ya(),i.setValue(o.promise)}function s(p){o.resolve(p),i.setValue(p)}function l(p){o.reject(p),i.setValue(p)}function c(p){p!==r&&(r=p,o.isSettled()&&a(),p.then(w=>{r===p&&s(w)}).catch(w=>{r===p&&(o.promise.catch(()=>{}),l(ws(w)))}))}function u(p,w){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const y={...p},k={...w};if(t===Ci||!Ed(y,t,{ignoreNonSerializableProperties:!0})){t=y;const S=n(t,k);c(S)}}function d(p,w){t=Ci,u(p,w)}const h=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return h instanceof Promise?c(h):s(h),Object.assign(i,{setNewPromise(p){c(p)},setResolvedValue(p){p!==i.value&&(o.isSettled()&&a(),o.resolve(p),s(p))},updateTrigger:n?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?d:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function Yg(...e){return{_elementVirStateSetup(){return Gg(...e)}}}function Qg(e){const t=Et(class extends ct{constructor(r){super(r),this.element=Ms(r,"testId")}render(r){return this.element.setAttribute(e,r),Me}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function $(e,t){return Jg(e,t)}const Jg=Et(class extends ct{constructor(e){super(e),this.element=Ms(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Me}}),tc="onDomCreated",xo=Et(class extends ct{constructor(e){super(e),_r(e,tc)}update(e,[t]){_r(e,tc);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Ei="onResize",en=Et(class extends ct{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),_r(e,Ei)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Ei} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){_r(e,Ei),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function rc(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):Cd(o):ag(o)?t:r?r(o):o}function ke(e,t,r){return Ym(e,()=>t,()=>r)}const{attributeDirective:Xg,attributeSelector:p6,attributeName:v6}=Qg("data-test-id");function Is(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Es()(r(n))),defineElementNoInputs:n=>(t(n),_o(r(n)))}}function Kg(...[e,t,r]){const n=ka(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ys(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=ka(c)?c.inputs:void 0;return[o&&u?Zg(u):void 0].filter(_m)}}}function _g(e){}function e1(e){return Rd(e.strings,e.values,Kg,_g)}function f(e,...t){const r=Hm(e,...t),n=Nd(e,t,()=>e1(r));return{...r,strings:n.strings,values:n.values}}function zt(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=t1(a,n[s]);return`${a}${l}`});return eg(i.join(""))}function t1(e,t){return t._$litType$!=null||t._$litDirective$!=null?zt(t):Array.isArray(t)?t.map(n=>zt(n)).join(""):e.endsWith("=")?`"${t}"`:t}var nc;(function(e){e.Upper="upper",e.Lower="lower"})(nc||(nc={}));function r1(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function n1(e){return Array.isArray(e)?"array":typeof e}function oc(e,t){return n1(e)===t}function Qd(e,t){return r1(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function o1(e,t){return Qd(e,r=>!t.includes(r))}function i1(e,t){return Qd(e,r=>t.includes(r))}const a1="px";function s1(e){return l1({value:e,suffix:a1})}function l1({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const c1={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},u1=Object.keys(c1),d1=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...u1,...d1];function Rr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const f1={[ge.ElementExample]:()=>[],[ge.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Im(e.controls,e.title)].filter(hs),[ge.Root]:()=>[]},Ao="_isBookTreeNode",Jd=new Map;function h1(e){return Jd.get(e)}function m1(e,t){wm(Jd,e,()=>t)}function dr(e,t){return!!(Xd(e)&&e.entry.entryType===t)}function Xd(e){return!!(ld(e,[Ao,"entry"])&&e[Ao])}function g1(){return{[Ao]:!0,entry:{entryType:ge.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function p1({entries:e,debug:t}){const r=h1(e);if(r)return r;const n=g1();e.forEach(a=>Ps({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Kd(n),i={tree:n,flattenedNodes:o};return m1(e,i),t&&console.info("element-book tree:",n),i}function v1(e,t,r){if(!t.parent)return e;const n=$a(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ps({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=$a(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${ms(t,!1)}`);return o}function Ps({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=f1[t.entryType](t);t.errors.push(...o);const i=v1(e,t,r),a=vo(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Ao]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Em(t,ge.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Ps({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function $a(e,t){const r=Xd(e)?e.fullUrlBreadcrumbs.slice(0,-1):ms(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Kd(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Kd(o));return[e,...r].flat()}function Ls(e,t){return Bs(e,["",...t],void 0)}function Bs(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Bs(i,n,r);return{...e.controls,...a}}function w1(e,t,r){const n={...e};return Bs(n,["",...t],r),n}function _d(e,t){const r=(t==null?void 0:t.controls)||(dr(e,ge.Page)?po(e.entry.controls,(o,i)=>i.initValue):{});return{children:po(e.children,(o,i)=>{var a;return _d(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function y1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const b1=Cm(32);function to(e){return e.join(b1)}function ef(e){if(!e.length)return[];const t=to(e),r=ef(e.slice(0,-1));return[t,...r]}const k1=["error","errors"];function x1(e){return k1.includes(e)}function A1({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),to(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&x1(t),a=to(o.fullUrlBreadcrumbs);if(y1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=ef(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=to(o.fullUrlBreadcrumbs),a=r[i];if(!Qo(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var be;(function(e){e.Search="search",e.Book="book"})(be||(be={}));function Ta(e){return e[0]===be.Book?"":e[1]?decodeURIComponent(e[1]):""}const vr={hash:void 0,paths:[be.Book],search:void 0},S1=0;function Os(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==S1)}class ei extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class ic extends ei{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const tn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const $1=globalThis.history.pushState;function ac(...e){const t=$1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(tn)),t}const T1=globalThis.history.replaceState;function sc(...e){const t=T1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(tn)),t}function C1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ac)throw new ic("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===sc)throw new ic("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ac,globalThis.history.replaceState=sc,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(tn))})}}function ti(e){return!!e}var lc;(function(e){e.Upper="upper",e.Lower="lower"})(lc||(lc={}));function E1(e,t){return e.split(t)}function M1(e){return e?e instanceof Error?e.message:So(e,"message")?String(e.message):String(e):""}function I1(e){return!!e&&typeof e=="object"}const P1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function So(e,t){return e?P1.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function cc(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function tf(e,t,r=!1,n={}){const o=cc(e),i=new Set(cc(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!So(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||rf(l,c,s,r,n[a]??{})})}function rf(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{So(t,"constructor")&&(!So(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{rf(l,d,r,n,o);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${M1(h)}`)}}).filter(ti).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):I1(t)&&tf(e,t,n,o)}function L1(e){return Array.isArray(e)?"array":typeof e}function B1(e,t){return L1(e)===t}function O1({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function D1(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(ti);return t.length?`?${t.join("&")}`:""}function N1(e){return O1({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=E1(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(ti)}function R1(e,t){const r=B1(e,"string")?new URL(e):e,n=N1(r.search),o=Object.fromEntries(n);return t&&tf(o,t),o}function H1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?R1(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function nf(e){return e.replace(/(?:^\/|\/+$)/g,"")}function of({routeBase:e,windowPath:t}){if(!e)return"";const r=nf(e);if(af({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?of({routeBase:n,windowPath:t}):""}function af({routeBase:e,windowPath:t}){const r=nf(e);return r?t.startsWith(`/${r}`):!1}class q1 extends ei{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function sf(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const uc=6;function dc(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>uc)throw new q1(`Route sanitization depth has exceed the max of ${uc} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(sf(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Mi extends ei{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function z1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Mi(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Mi(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Mi(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function V1(e,t,r=!1){const n=lf(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function lf(e,t){var s;const r=af({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?D1(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(ti).join("/")}${n}${i}`}function j1(e={}){z1(e),C1();const t=e.routeBase?of({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>dc(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},u=o.sanitizeFullRoute(c);if(!(!s&&sf(l,u)))return V1(u,t,a)},createRoutesUrl(i){return lf(i,t)},getCurrentRawRoutes(){return H1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ei(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(tn,n),r=!0),i&&dc(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(tn,n),r=!1),a},sanitizationDepth:0};return o}function F1(e){return j1({routeBase:e,routeSanitizer(t){return{paths:Z1(t.paths),hash:void 0,search:void 0}}})}function Z1(e){const t=e[0];if(km(t,be)){if(t===be.Book)return[be.Book,...e.slice(1)];if(t===be.Search)return e[1]?[t,e[1]]:[be.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return vr.paths}const F=ut({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),W1={nav:{hover:{background:F["element-book-nav-hover-background-color"],foreground:F["element-book-nav-hover-foreground-color"]},active:{background:F["element-book-nav-active-background-color"],foreground:F["element-book-nav-active-foreground-color"]},selected:{background:F["element-book-nav-selected-background-color"],foreground:F["element-book-nav-selected-foreground-color"]}},accent:{icon:F["element-book-accent-icon-color"]},page:{background:F["element-book-page-background-color"],backgroundFaint1:F["element-book-page-background-faint-level-1-color"],backgroundFaint2:F["element-book-page-background-faint-level-2-color"],foreground:F["element-book-page-foreground-color"],foregroundFaint1:F["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:F["element-book-page-foreground-faint-level-2-color"]}};function U1(e,t){cf(e,t,W1)}function Ca(e){return Go(e,"_$cssResult$")}function fc(e){return ld(e,["name","value","default"])&&Qo(e.default,"string")&&Ca(e.name)&&Ca(e.value)}function cf(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Ca(o)){if(!fc(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);ba({forCssVar:i,onElement:e,toValue:String(o)})}else{if(fc(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);cf(e,o,i)}})}function ce(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function gn(e){return kt(e)==="string"}function kt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function $o(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function uf(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function df(e){return e[e.length-1]}function To(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function ff(e,t,r){return(r-e)/(t-e)}function Ds(e,t,r){return To(t[0],t[1],ff(e[0],e[1],r))}function hf(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var G1=Object.freeze({__proto__:null,interpolate:To,interpolateInv:ff,isString:gn,last:df,mapRange:Ds,multiplyMatrices:ce,parseCoordGrammar:hf,parseFunction:uf,toPrecision:$o,type:kt});class Y1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const At=new Y1;var et={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Ye={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ea(e){return Array.isArray(e)?e:Ye[e]}function Co(e,t,r,n={}){if(e=Ea(e),t=Ea(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(At.run("chromatic-adaptation-start",o),o.M||(o.W1===Ye.D65&&o.W2===Ye.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Ye.D50&&o.W2===Ye.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),At.run("chromatic-adaptation-end",o),o.M)return ce(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Q1=75e-6,Se=class Se{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Se.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ea(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:J1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),At.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Q1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=hc(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=hc(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Se.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Se.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Se.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Se)return t;if(kt(t)==="string"){let o=Se.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Se.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=kt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Se.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=kt(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Se.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};pi(Se,"registry",{}),pi(Se,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Se;function J1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function hc(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=hf(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Ds(s,l,i)),i=$o(i,o),c&&(i+=c),i})}return e}var Re=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class xe extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Re),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=ce(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Co(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Co(this.base.white,this.white,r),ce(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function mf(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(At.run("parse-start",r),r.color)return r.color;if(r.parsed=uf(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let h of M.all){let g=h.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const p=Object.keys(h.coords).map((w,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:h.id,coords:p,alpha:u}}}let d="";if(c in M.registry){let h=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;h&&(d=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of M.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||df(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let h=r.parsed.args,g;return u.coordGrammar&&(g=Object.entries(c.coords).map(([p,w],y)=>{var he;let k=u.coordGrammar[y],S=(he=h[y])==null?void 0:he.type,P=k.find(ne=>ne==S);if(!P){let ne=w.name||p;throw new TypeError(`${S} not allowed for ${ne} in ${l}()`)}let R=P.range;S==="<percentage>"&&(R||(R=[0,1]));let ae=w.range||w.refRange;return R&&ae&&(h[y]=Ds(R,ae,h[y])),P})),t&&Object.assign(t,{formatId:u.name,types:g}),{spaceId:c.id,coords:h,alpha:d}}}}else for(let l of M.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function U(e){if(!e)throw new TypeError("Empty color reference");gn(e)&&(e=mf(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function pn(e,t){return t=M.get(t),t.from(e)}function He(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return pn(e,r)[n]}function gf(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function St(e,t,r){if(e=U(e),arguments.length===2&&kt(arguments[1])==="object"){let n=arguments[1];for(let o in n)St(e,o,n[o])}else{typeof r=="function"&&(r=r(He(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=pn(e,n);i[o]=r,gf(e,n,i)}return e}var Ns=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Re,fromBase:e=>Co(Re.white,"D50",e),toBase:e=>Co("D50",Re.white,e),formats:{color:{}}});const X1=216/24389,mc=24/116,En=24389/27;let Ii=Ye.D50;var Te=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ii,base:Ns,fromBase(e){let r=e.map((n,o)=>n/Ii[o]).map(n=>n>X1?Math.cbrt(n):(En*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>mc?Math.pow(t[0],3):(116*t[0]-16)/En,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/En,t[2]>mc?Math.pow(t[2],3):(116*t[2]-16)/En].map((n,o)=>n*Ii[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ri(e){return(e%360+360)%360}function K1(e,t){if(e==="raw")return t;let[r,n]=t.map(ri),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var rn=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Te,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ri(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const gc=25**7,Eo=Math.PI,pc=180/Eo,_t=Eo/180;function Ma(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Te.from(e),l=rn.from(Te,[i,a,s])[1],[c,u,d]=Te.from(t),h=rn.from(Te,[c,u,d])[1];l<0&&(l=0),h<0&&(h=0);let p=((l+h)/2)**7,w=.5*(1-Math.sqrt(p/(p+gc))),y=(1+w)*a,k=(1+w)*u,S=Math.sqrt(y**2+s**2),P=Math.sqrt(k**2+d**2),R=y===0&&s===0?0:Math.atan2(s,y),ae=k===0&&d===0?0:Math.atan2(d,k);R<0&&(R+=2*Eo),ae<0&&(ae+=2*Eo),R*=pc,ae*=pc;let he=c-i,ne=P-S,q=ae-R,ue=R+ae,Cr=Math.abs(q),Ie;S*P===0?Ie=0:Cr<=180?Ie=q:q>180?Ie=q-360:q<-180?Ie=q+360:console.log("the unthinkable has happened");let Xt=2*Math.sqrt(P*S)*Math.sin(Ie*_t/2),Er=(i+c)/2,gi=(S+P)/2,vl=Math.pow(gi,7),rt;S*P===0?rt=ue:Cr<=180?rt=ue/2:ue<360?rt=(ue+360)/2:rt=(ue-360)/2;let wl=(Er-50)**2,cm=1+.015*wl/Math.sqrt(20+wl),yl=1+.045*gi,Mr=1;Mr-=.17*Math.cos((rt-30)*_t),Mr+=.24*Math.cos(2*rt*_t),Mr+=.32*Math.cos((3*rt+6)*_t),Mr-=.2*Math.cos((4*rt-63)*_t);let bl=1+.015*gi*Mr,um=30*Math.exp(-1*((rt-275)/25)**2),dm=2*Math.sqrt(vl/(vl+gc)),fm=-1*Math.sin(2*um*_t)*dm,Cn=(he/(r*cm))**2;return Cn+=(ne/(n*yl))**2,Cn+=(Xt/(o*bl))**2,Cn+=fm*(ne/(n*yl))*(Xt/(o*bl)),Math.sqrt(Cn)}const _1=75e-6;function Wr(e,t=e.space,{epsilon:r=_1}={}){e=U(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function nn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function $t(e,{method:t=et.gamut_mapping,space:r=e.space}={}){if(gn(arguments[1])&&(r=arguments[1]),r=M.get(r),Wr(e,r,{epsilon:0}))return U(e);let n=De(e,r);if(t!=="clip"&&!Wr(e,r)){let o=$t(nn(n),{method:"clip",space:r});if(Ma(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=De(n,a),u=(i.range||i.refRange)[0],d=.01,h=u,g=He(l,s);for(;g-h>d;){let p=nn(l);p=$t(p,{space:r,method:"clip"}),Ma(l,p)-2<d?h=He(l,s):g=He(l,s),St(l,s,(h+g)/2)}n=De(l,r)}else n=o}if(t==="clip"||!Wr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=De(n,e.space)),e.coords=n.coords,e}$t.returns="color";function De(e,t,{inGamut:r}={}){e=U(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=$t(o)),o}De.returns="color";function Mo(e,{precision:t=et.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=U(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Wr(e)&&(s=$t(nn(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>$o(g,t)));let u=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(g)}let d=e.alpha;t!==null&&(d=$o(d,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";i=`${c}(${u.join(r.commas?", ":" ")}${h})`}return i}const ep=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],tp=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ni=new xe({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ep,fromXYZ_M:tp,formats:{color:{}}});const Mn=1.09929682680944,vc=.018053968510807;var pf=new xe({id:"rec2020",name:"REC.2020",base:ni,toBase(e){return e.map(function(t){return t<vc*4.5?t/4.5:Math.pow((t+Mn-1)/Mn,1/.45)})},fromBase(e){return e.map(function(t){return t>=vc?Mn*Math.pow(t,.45)-(Mn-1):4.5*t})},formats:{color:{}}});const rp=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],np=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var vf=new xe({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:rp,fromXYZ_M:np});const op=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ip=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var wf=new xe({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:op,fromXYZ_M:ip,formats:{color:{}}}),wc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let yc=Array(3).fill("<percentage> | <number>[0, 255]"),bc=Array(3).fill("<number>[0, 255]");var on=new xe({id:"srgb",name:"sRGB",base:wf,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:yc},rgb_number:{name:"rgb",commas:!0,coords:bc,noAlpha:!0},color:{},rgba:{coords:yc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:bc},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=wc.black,t.alpha=0):t.coords=wc[e],t.coords)return t}}}}),yf=new xe({id:"p3",name:"P3",base:vf,fromBase:on.fromBase,toBase:on.toBase,formats:{color:{id:"display-p3"}}});et.display_space=on;if(typeof CSS<"u"&&CSS.supports)for(let e of[Te,pf,yf]){let t=e.getMinCoords(),n=Mo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){et.display_space=e;break}}function ap(e,{space:t=et.display_space,...r}={}){let n=Mo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!et.display_space)n=new String(n),n.color=e;else{let o=De(e,t);n=new String(Mo(o,r)),n.color=o}return n}function bf(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function sp(e,t){return e=U(e),t=U(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Tt(e){return He(e,[Re,"y"])}function kf(e,t){St(e,[Re,"y"],t)}function lp(e){Object.defineProperty(e.prototype,"luminance",{get(){return Tt(this)},set(t){kf(this,t)}})}var cp=Object.freeze({__proto__:null,getLuminance:Tt,register:lp,setLuminance:kf});function up(e,t){e=U(e),t=U(t);let r=Math.max(Tt(e),0),n=Math.max(Tt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const dp=.56,fp=.57,hp=.62,mp=.65,kc=.022,gp=1.414,pp=.1,vp=5e-4,wp=1.14,xc=.027,yp=1.14;function Ac(e){return e>=kc?e:e+(kc-e)**gp}function er(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function bp(e,t){t=U(t),e=U(e);let r,n,o,i,a,s;t=De(t,"srgb"),[i,a,s]=t.coords;let l=er(i)*.2126729+er(a)*.7151522+er(s)*.072175;e=De(e,"srgb"),[i,a,s]=e.coords;let c=er(i)*.2126729+er(a)*.7151522+er(s)*.072175,u=Ac(l),d=Ac(c),h=d>u;return Math.abs(d-u)<vp?n=0:h?(r=d**dp-u**fp,n=r*wp):(r=d**mp-u**hp,n=r*yp),Math.abs(n)<pp?o=0:n>0?o=n-xc:o=n+xc,o*100}function kp(e,t){e=U(e),t=U(t);let r=Math.max(Tt(e),0),n=Math.max(Tt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const xp=5e4;function Ap(e,t){e=U(e),t=U(t);let r=Math.max(Tt(e),0),n=Math.max(Tt(t),0);return n>r&&([r,n]=[n,r]),n===0?xp:(r-n)/n}function Sp(e,t){e=U(e),t=U(t);let r=He(e,[Te,"l"]),n=He(t,[Te,"l"]);return Math.abs(r-n)}const $p=216/24389,Sc=24/116,In=24389/27;let Pi=Ye.D65;var Ia=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Pi,base:Re,fromBase(e){let r=e.map((n,o)=>n/Pi[o]).map(n=>n>$p?Math.cbrt(n):(In*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Sc?Math.pow(t[0],3):(116*t[0]-16)/In,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/In,t[2]>Sc?Math.pow(t[2],3):(116*t[2]-16)/In].map((n,o)=>n*Pi[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Li=Math.pow(5,.5)*.5+.5;function Tp(e,t){e=U(e),t=U(t);let r=He(e,[Ia,"l"]),n=He(t,[Ia,"l"]),o=Math.abs(Math.pow(r,Li)-Math.pow(n,Li)),i=Math.pow(o,1/Li)*Math.SQRT2-40;return i<7.5?0:i}var ro=Object.freeze({__proto__:null,contrastAPCA:bp,contrastDeltaPhi:Tp,contrastLstar:Sp,contrastMichelson:kp,contrastWCAG21:up,contrastWeber:Ap});function Cp(e,t,r={}){gn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(ro).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=U(e),t=U(t);for(let i in ro)if("contrast"+n.toLowerCase()===i.toLowerCase())return ro[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function xf(e){let[t,r,n]=pn(e,Re),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Af(e){let[t,r,n]=pn(e,Re),o=t+r+n;return[t/o,r/o]}function Ep(e){Object.defineProperty(e.prototype,"uv",{get(){return xf(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Af(this)}})}var Mp=Object.freeze({__proto__:null,register:Ep,uv:xf,xy:Af});function Ip(e,t){return bf(e,t,"lab")}const Pp=Math.PI,$c=Pp/180;function Lp(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Te.from(e),[,s,l]=rn.from(Te,[o,i,a]),[c,u,d]=Te.from(t),h=rn.from(Te,[c,u,d])[1];s<0&&(s=0),h<0&&(h=0);let g=o-c,p=s-h,w=i-u,y=a-d,k=w**2+y**2-p**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let P=.0638*s/(1+.0131*s)+.638,R;Number.isNaN(l)&&(l=0),l>=164&&l<=345?R=.56+Math.abs(.2*Math.cos((l+168)*$c)):R=.36+Math.abs(.4*Math.cos((l+35)*$c));let ae=Math.pow(s,4),he=Math.sqrt(ae/(ae+1900)),ne=P*(he*R+1-he),q=(g/(r*S))**2;return q+=(p/(n*P))**2,q+=k/ne**2,Math.sqrt(q)}const Tc=203;var Rs=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Re,fromBase(e){return e.map(t=>Math.max(t*Tc,0))},toBase(e){return e.map(t=>Math.max(t/Tc,0))}});const Pn=1.15,Ln=.66,Cc=2610/2**14,Bp=2**14/2610,Ec=3424/2**12,Mc=2413/2**7,Ic=2392/2**7,Op=1.7*2523/2**5,Pc=2**5/(1.7*2523),Bn=-.56,Bi=16295499532821565e-27,Dp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Np=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Rp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Hp=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Sf=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Rs,fromBase(e){let[t,r,n]=e,o=Pn*t-(Pn-1)*n,i=Ln*r-(Ln-1)*t,s=ce(Dp,[o,i,n]).map(function(h){let g=Ec+Mc*(h/1e4)**Cc,p=1+Ic*(h/1e4)**Cc;return(g/p)**Op}),[l,c,u]=ce(Rp,s);return[(1+Bn)*l/(1+Bn*l)-Bi,c,u]},toBase(e){let[t,r,n]=e,o=(t+Bi)/(1+Bn-Bn*(t+Bi)),a=ce(Hp,[o,r,n]).map(function(h){let g=Ec-h**Pc,p=Ic*h**Pc-Mc;return 1e4*(g/p)**Bp}),[s,l,c]=ce(Np,a),u=(s+(Pn-1)*c)/Pn,d=(l+(Ln-1)*u)/Ln;return[u,d,c]},formats:{color:{}}}),Pa=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Sf,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ri(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function qp(e,t){let[r,n,o]=Pa.from(e),[i,a,s]=Pa.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const $f=3424/4096,Tf=2413/128,Cf=2392/128,Lc=2610/16384,zp=2523/32,Vp=16384/2610,Bc=32/2523,jp=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Fp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Zp=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Wp=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var La=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Rs,fromBase(e){let t=ce(jp,e);return Up(t)},toBase(e){let t=Gp(e);return ce(Wp,t)},formats:{color:{}}});function Up(e){let t=e.map(function(r){let n=$f+Tf*(r/1e4)**Lc,o=1+Cf*(r/1e4)**Lc;return(n/o)**zp});return ce(Fp,t)}function Gp(e){return ce(Zp,e).map(function(n){let o=Math.max(n**Bc-$f,0),i=Tf-Cf*n**Bc;return 1e4*(o/i)**Vp})}function Yp(e,t){let[r,n,o]=La.from(e),[i,a,s]=La.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Qp=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Jp=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Xp=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Kp=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Io=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Re,fromBase(e){let r=ce(Qp,e).map(n=>Math.cbrt(n));return ce(Xp,r)},toBase(e){let r=ce(Kp,e).map(n=>n**3);return ce(Jp,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function _p(e,t){let[r,n,o]=Io.from(e),[i,a,s]=Io.from(t),l=r-i,c=n-a,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var Po={deltaE76:Ip,deltaECMC:Lp,deltaE2000:Ma,deltaEJz:qp,deltaEITP:Yp,deltaEOK:_p};function Hr(e,t,r={}){gn(r)&&(r={method:r});let{method:n=et.deltaE,...o}=r;e=U(e),t=U(t);for(let i in Po)if("deltae"+n.toLowerCase()===i.toLowerCase())return Po[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function e2(e,t=.25){let n=[M.get("oklch","lch"),"l"];return St(e,n,o=>o*(1+t))}function t2(e,t=.25){let n=[M.get("oklch","lch"),"l"];return St(e,n,o=>o*(1-t))}var r2=Object.freeze({__proto__:null,darken:t2,lighten:e2});function Ef(e,t,r=.5,n={}){[e,t]=[U(e),U(t)],kt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return vn(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Mf(e,t,r={}){let n;Hs(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[U(e),U(t)],n=vn(e,t,l));let c=Hr(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let h=1/(u-1);d=Array.from({length:u},(g,p)=>{let w=p*h;return{p:w,color:n(w)}})}if(o>0){let h=d.reduce((g,p,w)=>{if(w===0)return 0;let y=Hr(p.color,d[w-1].color,i);return Math.max(g,y)},0);for(;h>o;){h=0;for(let g=1;g<d.length&&d.length<s;g++){let p=d[g-1],w=d[g],y=(w.p+p.p)/2,k=n(y);h=Math.max(h,Hr(k,p.color),Hr(k,w.color)),d.splice(g,0,{p:y,color:n(y)}),g++}}}return d=d.map(h=>h.color),d}function vn(e,t,r={}){if(Hs(e)){let[l,c]=[e,t];return vn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=U(e),t=U(t),e=nn(e),t=nn(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[et.interpolationSpace]||e.space,o=o?M.get(o):n,e=De(e,n),t=De(t,n),e=$t(e),t=$t(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[He(e,c),He(t,c)];[u,d]=K1(l,[u,d]),St(e,c,u),St(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((h,g)=>{let p=t.coords[g];return To(h,p,l)}),u=To(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(h=>h/u)),o!==n&&(d=De(d,o)),d},{rangeArgs:s})}function Hs(e){return kt(e)==="function"&&!!e.rangeArgs}et.interpolationSpace="lab";function n2(e){e.defineFunction("mix",Ef,{returns:"color"}),e.defineFunction("range",vn,{returns:"function<color>"}),e.defineFunction("steps",Mf,{returns:"array<color>"})}var o2=Object.freeze({__proto__:null,isRange:Hs,mix:Ef,range:vn,register:n2,steps:Mf}),If=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:on,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Pf=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:If,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),i2=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Pf,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const a2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],s2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Lf=new xe({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:a2,fromXYZ_M:s2}),l2=new xe({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Lf,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const c2=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],u2=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Bf=new xe({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ns,toXYZ_M:c2,fromXYZ_M:u2});const d2=1/512,f2=16/512;var h2=new xe({id:"prophoto",name:"ProPhoto",base:Bf,toBase(e){return e.map(t=>t<f2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=d2?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),m2=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Io,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),ri(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Oc=203,Dc=2610/2**14,g2=2**14/2610,p2=2523/2**5,Nc=2**5/2523,Rc=3424/2**12,Hc=2413/2**7,qc=2392/2**7;var v2=new xe({id:"rec2100pq",name:"REC.2100-PQ",base:ni,toBase(e){return e.map(function(t){return(Math.max(t**Nc-Rc,0)/(Hc-qc*t**Nc))**g2*1e4/Oc})},fromBase(e){return e.map(function(t){let r=Math.max(t*Oc/1e4,0),n=Rc+Hc*r**Dc,o=1+qc*r**Dc;return(n/o)**p2})},formats:{color:{id:"rec2100-pq"}}});const zc=.17883277,Vc=.28466892,jc=.55991073,Oi=3.7743;var w2=new xe({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ni,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Oi:(Math.exp((t-jc)/zc)+Vc)/12*Oi})},fromBase(e){return e.map(function(t){return t/=Oi,t<=1/12?Math.sqrt(3*t):zc*Math.log(12*t-Vc)+jc})},formats:{color:{id:"rec2100-hlg"}}});const Of={};At.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Df(e.W1,e.W2,e.options.method))});At.add("chromatic-adaptation-end",e=>{e.M||(e.M=Df(e.W1,e.W2,e.options.method))});function oi({id:e,toCone_M:t,fromCone_M:r}){Of[e]=arguments[0]}function Df(e,t,r="Bradford"){let n=Of[r],[o,i,a]=ce(n.toCone_M,e),[s,l,c]=ce(n.toCone_M,t),u=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],d=ce(u,n.toCone_M);return ce(n.fromCone_M,d)}oi({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});oi({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});oi({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});oi({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Ye,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ye.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const y2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],b2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Nf=new xe({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ye.ACES,toXYZ_M:y2,fromXYZ_M:b2,formats:{color:{}}});const On=2**-16,Di=-.35828683,Dn=(Math.log2(65504)+9.72)/17.52;var k2=new xe({id:"acescc",name:"ACEScc",coords:{r:{range:[Di,Dn],name:"Red"},g:{range:[Di,Dn],name:"Green"},b:{range:[Di,Dn],name:"Blue"}},referred:"scene",base:Nf,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-On)*2:r<Dn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(On)+9.72)/17.52:t<On?(Math.log2(On+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Fc=Object.freeze({__proto__:null,A98RGB:l2,A98RGB_Linear:Lf,ACEScc:k2,ACEScg:Nf,HSL:If,HSV:Pf,HWB:i2,ICTCP:La,JzCzHz:Pa,Jzazbz:Sf,LCH:rn,Lab:Te,Lab_D65:Ia,OKLCH:m2,OKLab:Io,P3:yf,P3_Linear:vf,ProPhoto:h2,ProPhoto_Linear:Bf,REC_2020:pf,REC_2020_Linear:ni,REC_2100_HLG:w2,REC_2100_PQ:v2,XYZ_ABS_D65:Rs,XYZ_D50:Ns,XYZ_D65:Re,sRGB:on,sRGB_Linear:wf});class B{constructor(...t){let r;t.length===1&&(r=U(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new B(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=ap(this,...t);return r.color=new B(r.color),r}static get(t,...r){return t instanceof B?t:new B(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=B.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return B.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>B.get(c)));return l};t in B||(B[t]=a),o&&(B.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)B.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(B);else for(let r in t)B.defineFunction(r,t[r])}}B.defineFunctions({get:He,getAll:pn,set:St,setAll:gf,to:De,equals:sp,inGamut:Wr,toGamut:$t,distance:bf,toString:Mo});Object.assign(B,{util:G1,hooks:At,WHITES:Ye,Space:M,spaces:M.registry,parse:mf,defaults:et});for(let e of Object.keys(Fc))M.register(Fc[e]);for(let e in M.registry)Ba(e,M.registry[e]);At.add("colorspace-init-end",e=>{var t;Ba(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ba(r,e)})});function Ba(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(B.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}B.extend(Po);B.extend({deltaE:Hr});Object.assign(B,{deltaEMethods:Po});B.extend(r2);B.extend({contrast:Cp});B.extend(Mp);B.extend(cp);B.extend(o2);B.extend(ro);function Rf(e){return po(e,(t,r)=>r instanceof B?O(r.toString({format:"hex"})):Rf(r))}const x2="dodgerblue";function Oa(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Ni({background:e,foreground:t}){return{background:e??new B(Oa(t)),foreground:t??new B(Oa(e))}}var Lo;(function(e){e.Dark="dark",e.Light="light"})(Lo||(Lo={}));function A2(e){return e==="black"?"white":"black"}const S2={black:{foregroundFaint1:new B("#ccc"),foregroundFaint2:new B("#eee")},white:{foregroundFaint1:new B("#ccc"),foregroundFaint2:new B("#eee")}},$2={black:{backgroundFaint1:new B("#666"),backgroundFaint2:new B("#444")},white:{backgroundFaint1:new B("#ccc"),backgroundFaint2:new B("#fafafa")}};function Zc({themeColor:e=x2,themeStyle:t=Lo.Light}={}){const r=new B(e),n=new B(t===Lo.Dark?"black":"white"),o=Oa(n),i=new B(o),a={nav:{hover:Ni({background:r.clone().set({"hsl.l":93})}),active:Ni({background:r.clone().set({"hsl.l":90})}),selected:Ni({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...$2[A2(o)],foreground:i,...S2[o]}};return Rf(a)}const Bo=ks()("element-book-change-route"),Wc="vira-",{defineElement:wn,defineElementNoInputs:w6}=Is({assertInputs:e=>{if(!e.tagName.startsWith(Wc))throw new Error(`Tag name should start with '${Wc}' but got '${e.tagName}'`)}}),Hf=v`
    pointer-events: none;
    opacity: 0.3;
`,xt=ut({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Oo=ut({"vira-form-input-border-radius":"8px"}),Do=ut({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Oo["vira-form-input-border-radius"].value} + 4px)`});function qf({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=O(s1(n+r+t));return v`
        ${O(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Do["vira-focus-outline-color"].value};
            border-radius: ${Do["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const T2=v`
    padding: 0;
    margin: 0;
`,me=v`
    ${T2};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function C2(e){return v`
        ${O(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${O(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const ze=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,fe=wn()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Da;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Da||(Da={}));wn()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Da.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
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
            ${Do["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Hf};
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
            border-radius: ${Oo["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${xt["vira-interaction-animation-duration"].value},
                background-color
                    ${xt["vira-interaction-animation-duration"].value},
                border-color ${xt["vira-interaction-animation-duration"].value};
        }

        ${qf({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${fe} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?f`
                  <${fe.assign({icon:e.icon})}></${fe}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Na;(function(e){e.Header="header"})(Na||(Na={}));wn()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
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
    `,events:{expandChange:K()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return f`
            <button
                class="header-wrapper"
                ${$("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Na.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${en(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=ut({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function b({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const zf=b({name:"CloseX24Icon",svgTemplate:f`
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
    `});function Ra({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ra({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Vf({value:e,allowed:t,blocked:r}){const n=t?Ra({input:e,matcher:t}):!0,o=r?Ra({input:e,matcher:r}):!1;return n&&!o}function jf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Vf({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function E2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Rr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Vf({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:u}=jf({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}i.value!==l&&(i.value=l),s!==l&&o(l)}const no=wn()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:K(),inputBlocked:K()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Do["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Hf};
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
                border-radius: ${Oo["vira-form-input-border-radius"].value};
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
                border-radius: ${Oo["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${qf({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                transition: ${xt["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=jf({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?f`
                  <${fe.assign({icon:e.icon})} class="left-side-icon"></${fe}>
              `:"",s=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return f`
            <label>
                ${a}
                ${ke(!!e.fitText,f`
                        <span
                            class="size-span"
                            ${en(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${$("input",l=>{E2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ke(!!(e.showClearButton&&e.value),f`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${$("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${fe.assign({icon:zf})}></${fe}>
                        </button>
                    `)}
                ${ke(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});wn()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:K()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Os(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return f`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return f`
                <a href=${a} rel="noopener noreferrer" ${$("click",n)}>
                    <slot></slot>
                </a>
            `}}});const M2=b({name:"Element16Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"Element24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const I2=b({name:"Loader24Icon",svgTemplate:f`
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
    `}),P2=v`
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
`,L2=b({name:"LoaderAnimated24Icon",svgTemplate:f`
        <style>
            ${P2}
        </style>
        ${I2.svgTemplate}
    `});b({name:"Options24Icon",svgTemplate:f`
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
    `});b({name:"StatusFailure24Icon",svgTemplate:f`
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
    `});b({name:"StatusInProgress24Icon",svgTemplate:f`
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
    `});b({name:"StatusSuccess24Icon",svgTemplate:f`
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
    `});const{defineElement:Ve,defineElementNoInputs:y6}=Is(),Oe=Ve()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>v`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return f`
            <a
                href=${r}
                ${$("click",i=>{(!e.router||Os(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new Bo(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function B2(e,t){return e.entry.entryType===ge.Root?!1:!!(e.entry.entryType===ge.Page||yt(t,e.fullUrlBreadcrumbs.slice(0,-1))||yt(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const it=Ve()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${F["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${F["element-book-nav-hover-background-color"].value};
            color: ${F["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${F["element-book-nav-active-background-color"].value};
            color: ${F["element-book-nav-active-foreground-color"].value};
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
            background-color: ${F["element-book-nav-selected-background-color"].value};
            color: ${F["element-book-nav-selected-foreground-color"].value};
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

        ${fe} {
            display: inline-flex;
            color: ${F["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!B2(r,e.selectedPath))return;const n=v`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return f`
                <li style=${n}>
                    <${Oe.assign({router:e.router,route:{paths:[be.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Ce({"title-row":!0,selected:e.selectedPath?yt(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ke(dr(r,ge.ElementExample),f`
                                    <${fe.assign({icon:M2})}></${fe}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Oe}>
                </li>
            `});return f`
            <${Oe.assign({route:vr,router:e.router})}>
                <slot name=${_e.NavHeader}>Book</slot>
            </${Oe}>
            <ul>
                ${t}
            </ul>
        `}});async function O2(e){await ma(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Bm(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Ct=Ve()({tagName:"book-error",styles:v`
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
    `,renderCallback({inputs:e}){return(Qo(e.message,"array")?e.message:[e.message]).map(r=>f`
                <p>${r}</p>
            `)}}),an=Ve()({tagName:"book-page-controls",events:{controlValueChange:K()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${F["element-book-page-foreground-faint-level-1-color"].value};
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

        ${no} {
            height: 24px;
            max-width: 128px;
        }

        ${fe}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===H.Hidden)return"";const a=D2(e.currentValues[n],o,s=>{const l=Qo(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return f`
                    <div class="control-wrapper">
                        ${ke(i===0,f`
                                <${fe.assign({icon:zf})}
                                    class="options-icon"
                                ></${fe}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function D2(e,t,r){return Kt(t,H.Hidden)?"":Kt(t,H.Checkbox)?f`
            <input
                type="checkbox"
                .value=${e}
                ${$("input",n=>{const o=Rr(n,HTMLInputElement);r(o.checked)})}
            />
        `:Kt(t,H.Color)?f`
            <input
                type="color"
                .value=${e}
                ${$("input",n=>{const o=Rr(n,HTMLInputElement);r(o.value)})}
            />
        `:Kt(t,H.Text)?f`
            <${no.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${$(no.events.valueChange,n=>{r(n.detail)})}
            ></${no}>
        `:Kt(t,H.Number)?f`
            <input
                type="number"
                .value=${e}
                ${$("input",n=>{const o=Rr(n,HTMLInputElement);r(o.value)})}
            />
        `:Kt(t,H.Dropdown)?f`
            <select
                .value=${e}
                ${$("input",n=>{const o=Rr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>f`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:f`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Uc=Ve()({tagName:"book-breadcrumbs",styles:v`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":f`
                      <span class="spacer">&gt;</span>
                  `;return f`
                <${Oe.assign({route:{hash:void 0,search:void 0,paths:[be.Book,...a]},router:e.router})}>
                    ${r}
                </${Oe}>
                ${s}
            `}):f`
                &nbsp;
            `}}),Ri=Ve()({tagName:"book-breadcrumbs-bar",styles:v`
        :host {
            border-bottom: 1px solid
                ${F["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${F["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return f`
            ${ke(!!e.currentSearch,f`
                    &nbsp;
                `,f`
                    <${Uc.assign({currentRoute:e.currentRoute,router:e.router})}></${Uc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${$("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await $m(200),n.value===o&&(n.value?t(new Bo({paths:[be.Search,encodeURIComponent(n.value)]})):t(new Bo(vr)))})}
            />
        `}}),Gc=Ve()({tagName:"book-entry-description",styles:v`
        :host {
            color: ${F["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${F["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>f`
                <p>${t}</p>
            `)}}),Yc=Ve()({tagName:"book-page-wrapper",styles:v`
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
    `,renderCallback({inputs:e}){const t=e.isTopLevel?f`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:f`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[be.Book,...e.pageNode.fullUrlBreadcrumbs],n=cd(e.pageNode.entry.errors);return n&&console.error(n),f`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Oe.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Oe}>
                    ${n?f`
                              <${Ct.assign({message:n.message})}></${Ct}>
                          `:f`
                              <${Gc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Gc}>
                              <${an.assign({config:e.pageNode.entry.controls,currentValues:Ls(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${an}>
                          `}
                </div>
            </div>
        `}}),Nn=Ve()({tagName:"book-element-example-controls",styles:v`
        :host {
            display: flex;
            color: ${F["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[be.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return f`
            <${Oe.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Oe}>
        `}}),Qc=Symbol("unset-internal-state"),Jc=Ve()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Qc},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw cd(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Qc&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return f`
                ${ke(!!t.elementExampleNode.entry.styles,f`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),f`
                <${Ct.assign({message:`${t.elementExampleNode.entry.title} failed: ${Yo(n)}`})}></${Ct}>
            `}},options:{allowPolymorphicState:!0}}),Xc=Ve()({tagName:"book-element-example-wrapper",styles:v`
        :host {
            display: inline-flex;
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

        ${Nn} {
            color: ${F["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Nn} {
            color: ${F["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return f`
            <div class="individual-example-wrapper">
                <${Nn.assign(Am(e,["currentPageControls"]))}></${Nn}>
                <${Jc.assign(e)}></${Jc}>
            </div>
        `}});function Ff(e,t,r,n){const o=$a(r,n),i=[];if(o){const a=Ff(e,t,o,n);a&&i.push(a)}if(dr(r,ge.Page)&&!e.includes(r)){const a=Ls(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:po(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function N2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[f`
                No results
            `];const a=El(e,1)?Ff(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&El(e,1)?f`
                  <${an.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${an}>
              `:"",l=Gm(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(dr(c,ge.Page))return f`
                    <${Yc.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Yc}>
                `;if(dr(c,ge.ElementExample)){const d=Ls(o,c.fullUrlBreadcrumbs.slice(0,-1));return f`
                    <${Xc.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Xc}>
                `}else return dr(c,ge.Root)?"":f`
                    <${Ct.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Ct}>
                `});return[s,l].flat()}const tr=Ve()({tagName:"book-entry-display",styles:v`
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

        ${Ri} {
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
    `,events:{loadingRender:K()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Ta(e.currentRoute.paths),a=N2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return f`
            <${Ri.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Ri}>

            ${ke(e.showLoading,f`
                    <div
                        ${xo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${fe.assign({icon:L2})}></${fe}>
                    </div>
                    ${ke(!!n.lastElement,f`
                            ${n.lastElement}
                            <slot name=${_e.Footer}></slot>
                        `)}
                `,f`
                    <div
                        ${xo(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${_e.Footer}></slot>
                `)}
        `}});function R2(e,t,r){const n=Kc(e,t);if(n.length)return n;r(vr);const o=Kc(e,vr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Kc(e,t){return e.filter(r=>Pm({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Hi=Es()({tagName:"element-book-app",events:{pathUpdate:K()},stateInitStatic:{currentRoute:vr,router:void 0,loading:!0,colors:{config:void 0,theme:Zc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${F["element-book-page-background-color"].value};
            color: ${F["element-book-page-foreground-color"].value};
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

        ${tr} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${it} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{_c(e,Ta(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var u,d,h,g,p,w,y;t._debug&&console.info("rendering element-book app");function a(k){return{...e.currentRoute,...k}}function s(k){const S=a(k);return!yt(e.currentRoute,S)}function l(k){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,k].filter(hs).join(" - "))}function c(k){if(!s(k))return;const S=a(k);e.router?e.router.setRoutes(S):n({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!yt(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!yt(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const q=F1(t.internalRouterConfig.basePath);n({router:q}),q.addRouteListener(!0,ue=>{n({currentRoute:ue})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const k={themeColor:t.themeColor};if(!yt(k,(h=e.colors)==null?void 0:h.config)){const q=Zc(k);n({colors:{config:k,theme:q}}),U1(r,q)}const S=t._debug??!1,P=p1({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:_d(P.tree,{children:(p=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:p.children,controls:t.globalValues})}}));const R=Ta(e.currentRoute.paths),he=(R?A1({flattenedNodes:P.flattenedNodes,searchQuery:R}):void 0)??R2(P.flattenedNodes,e.currentRoute.paths,c);l((w=he[0])==null?void 0:w.entry.title);const ne=(y=e.treeBasedControls)==null?void 0:y.controls;return ne?(t._debug&&console.info({currentControls:ne}),f`
                <div
                    class="root"
                    ${$(Bo,async q=>{const ue=q.detail;if(!s(ue))return;if(n({loading:!0}),c(ue),!(r.shadowRoot.querySelector(it.tagName)instanceof it))throw new Error(`Failed to find child '${it.tagName}'`);_c(r,R,e.currentRoute)})}
                    ${$(an.events.controlValueChange,q=>{if(!e.treeBasedControls)return;const ue=w1(ne,q.detail.fullUrlBreadcrumbs,q.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ue}})})}
                >
                    <${it.assign({flattenedNodes:P.flattenedNodes,router:e.router,selectedPath:R?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${_e.NavHeader}
                            slot=${_e.NavHeader}
                        ></slot>
                    </${it}>
                    <${tr.assign({controls:ne,currentNodes:he,currentRoute:e.currentRoute,debug:S,originalTree:P.tree,router:e.router,showLoading:e.loading})}
                        ${$(tr.events.loadingRender,async q=>{await ma();const ue=r.shadowRoot.querySelector(tr.tagName);ue?ue.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${tr.tagName}' for scrolling.`),await ma(),n({loading:!q.detail})})}
                    >
                        <slot
                            name=${_e.Footer}
                            slot=${_e.Footer}
                        ></slot>
                    </${tr}>
                </div>
            `):f`
                    <${Ct.assign({message:"Failed to generate page controls."})}></${Ct}>
                `}catch(k){return console.error(k),f`
                <p class="error">${Yo(k)}</p>
            `}}});async function _c(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(it.tagName);if(!(n instanceof it))throw new Error(`Failed to find child '${it.tagName}'`);await O2(n)}function H2(e,t){return e.map(t)}function yn(e){return!!e}function Zf(e,t){return e.match(t)??[]}function q2(e){return e.replace(/,/g,"")}function z2(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var wr;(function(e){e.Upper="upper",e.Lower="lower"})(wr||(wr={}));function V2(e){return e.toLowerCase()!==e.toUpperCase()}function eu(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!V2(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===wr.Upper&&o!==o.toUpperCase())return!1;if(t===wr.Lower&&o!==o.toLowerCase())return!1}return!0}function Ha(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=eu(a,wr.Lower,{blockNoCaseCharacters:!0})||eu(s,wr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function sn(e,t){return e.split(t)}const j2=String(NaN);function Wf(e){if(typeof e=="string"&&isNaN(Number(e)))return j2;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=Zf(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(u=>u.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function F2(e){return typeof e=="number"?e:Number(typeof e=="string"?q2(e):e)}function Z2(e){return String(e).includes("e")}function W2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function U2(e){return!!e&&typeof e=="object"}function tt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function G2(e){return Array.isArray(e)?"array":typeof e}function Y2(e,t){return G2(e)===t}function Q2(e){return tt(e).filter(t=>isNaN(Number(t)))}function J2(e,t){return tt(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function qa(e,t){return J2(e,r=>!t.includes(r))}function yr(e,t){let r=!1;const n=tt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(tt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const Uf=globalThis.crypto;function X2({min:e,max:t}){const{min:r,max:n}=W2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Uf.getRandomValues(s),l=s.reduce((c,u,d)=>c+u*256**d,0);while(l>=a);return r+l%o}function K2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Uf.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function _2({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const qi="://";function ev(...e){const t=e.join("/"),[r,n=""]=t.includes(qi)?t.split(qi):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,u)=>{if(i)return s;const d=u[c+1];let h=l;const g=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||g){i=!0;let p=!1;const w=u.slice(g?c+2:c+1).reduce((y,k)=>(k.includes("#")&&(p=!0),p?y.concat(k):[y,k].join("&")),"");h=[l,d,w].join("")}return s.concat(h)},[]);return[r,r?qi:"",a.join("/")].join("")}const tv=["k","M","B","T","P","E","Z","Y"];function qs({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function rv(e,t,r){const[n,o]=sn(e,"."),i=Wf(n),a=Zf(i,/,/g).length,s=t[a-1],[l,c]=sn(i,","),u=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[qs({beforeDot:l,afterDot:u,maxLength:r-1}),s].join("")}const tu=3;function nv({input:e,maxLength:t}){const r=String(e),[n,o]=sn(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=sn(n,"."),u=i.length+tu;return u===t?[l,s].join(""):u>t?a==="-"?"0":String(1/0):[qs({afterDot:c,beforeDot:l,maxLength:t-i.length+tu}),s].join("")}function ov(e,t){const[r,n]=sn(Wf(e),".");if(r.length<=t)return qs({beforeDot:r,afterDot:n,maxLength:t})}function iv(e,{customSuffixes:t=tv,maxLength:r=6}={}){const n=F2(e);if(isNaN(n)||n===1/0)return String(n);if(Z2(n))return nv({input:n,maxLength:r});const o=String(n),i=ov(o,r);return i??rv(o,t,r)}const m=ut({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),W=yr(m,(e,t)=>r=>O(`var(${t.name}, ${r})`)),av=b({name:"Copy16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${m["toniq-icon-fill-color"].value}
            stroke=${m["toniq-icon-stroke-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M11 6V4.3c0-.7-.6-1.3-1.3-1.3H4.3C3.6 3 3 3.6 3 4.3v5.4c0 .7.6 1.3 1.3 1.3H6"
            ></path>
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M14 7.3c0-.7-.6-1.3-1.3-1.3H7.3C6.6 6 6 6.6 6 7.3v5.4c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3V7.3Z"
            ></path>
        </svg>
    `}),sv=b({name:"ExternalLink16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M7 4H4.3C3.6 4 3 4.6 3 5.3v6.4c0 .7.6 1.3 1.3 1.3h6.4c.7 0 1.3-.6 1.3-1.3V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `}),fr=b({name:"InfoCircle16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
            />
        </svg>
    `}),lv=b({name:"ArrowBarUp24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${m["toniq-icon-stroke-width"].value} d="M4 20h16" />
        </svg>
    `}),cv=b({name:"ArrowForwardUp24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4"
            />
        </svg>
    `}),zs=b({name:"ArrowLeft24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M5 12h14M5 12l6 6m-6-6 6-6"
            />
        </svg>
    `}),uv=b({name:"ArrowLoopLeft24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3"
            />
        </svg>
    `}),dv=b({name:"ArrowLoopRight24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3"
            />
        </svg>
    `}),Vs=b({name:"ArrowRight24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M5 12h14m-6 6 6-6m-6-6 6 6"
            />
        </svg>
    `}),Gf=b({name:"ArrowsSort24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4"
            />
        </svg>
    `}),fv=b({name:"ArrowsSortAscending24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M5 19 19 5m0 6V5h-6"
            />
        </svg>
    `}),hv=b({name:"ArrowsSortDescending24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m5 5 14 14m0-6v6h-6"
            />
        </svg>
    `}),mv=b({name:"Bucket24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M7 9a5 5 0 0 1 5-5 5 5 0 0 1 5 5"
                fill="none"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m19 9-2 9c-.2 1.2-1 2-2 2H9c-1 0-1.8-.8-2-2L5 9h14Z"
            />
        </svg>
    `}),gv=b({name:"BuildingStore24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M5 10.827c.313.112.65.173 1 .173 1.646 0 3-1.354 3-3 0 1.646 1.354 3 3 3s3-1.354 3-3c0 1.646 1.354 3 3 3 .35 0 .687-.061 1-.173V21H5V10.827Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9 21v-4c0-1.1.9-2 2-2h2c1.097 0 2 .903 2 2v4"
            />
            <path stroke-width=${m["toniq-icon-stroke-width"].value} d="M3 21h18" />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M21 7v1c0 1.646-1.354 3-3 3s-3-1.354-3-3c0 1.646-1.354 3-3 3S9 9.646 9 8c0 1.646-1.354 3-3 3S3 9.646 3 8V7"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m3 7 2-4h14l2 4H3Z"
            />
        </svg>
    `}),pv=b({name:"CalendarEvent24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `}),vv=b({name:"Cash24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),wv=b({name:"Chain24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m11.181 12.944 1.356 1.138c.74.621 1.845.525 2.466-.215l4.178-4.98a1.75 1.75 0 0 0-.216-2.465l-2.681-2.25a1.751 1.751 0 0 0-2.466.216l-2.089 2.49"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m12.819 11.056-1.356-1.138a1.751 1.751 0 0 0-2.466.215l-4.178 4.98a1.75 1.75 0 0 0 .216 2.465l2.681 2.25c.74.621 1.845.524 2.466-.216l2.089-2.49"
            />
        </svg>
    `}),Yf=b({name:"CheckMark24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),Qf=b({name:"ChevronDown24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m6 9 6 6 6-6"
            />
        </svg>
    `}),yv=b({name:"ChevronUp24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m6 15 6-6 6 6"
            />
        </svg>
    `}),bv=b({name:"Circle24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                r="9"
                cx="12"
                cy="12"
            />
        </svg>
    `}),Jf=b({name:"CircleDot24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${m["toniq-icon-stroke-color"].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `}),kv=b({name:"CirclePlus24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6"
            />
        </svg>
    `}),xv=b({name:"CircleWavyCheck24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `}),Av=b({name:"Clock24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 7v5l3 3"
                fill="none"
            />
        </svg>
    `}),Xf=b({name:"Code24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                stroke-width=${m["toniq-icon-stroke-width"].value}
            />
        </svg>
    `}),Kf=b({name:"Copy24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),Sv=b({name:"CreateFile24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `}),$v=b({name:"DotsVertical24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Tv=b({name:"Download24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4"
            />
        </svg>
    `}),Cv=b({name:"Edit24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `}),_f=b({name:"ExternalLink24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 14 20 4m-5 0h5v5"
            />
        </svg>
    `}),Ev=b({name:"Filter24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `}),Mv=b({name:"Geometry24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `}),Iv=b({name:"GridDots24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Pv=b({name:"Heart24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `}),Lv=b({name:"Infinity24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `}),Bv=b({name:"Info24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                fill="none"
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 11.5v5"
            />
        </svg>
    `}),Ov=b({name:"LayersLinked24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `}),Dv=b({name:"LayoutGrid24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `}),Nv=b({name:"Lifebuoy24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m14.8 14.8 3.5 3.5m-9.1-3.5-3.5 3.5m0-12.6 3.5 3.5m9.2-3.5-3.6 3.5"
                fill="none"
            />
        </svg>
    `}),Rv=b({name:"List24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
        </svg>
    `}),Hv=b({name:"ListDetails24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9 5c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V5Zm0 10c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-4Z"
            />
        </svg>
    `}),qv=b({name:"Loader24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),js=b({name:"LoaderAnimated24Icon",svgTemplate:f`
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
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),zv=b({name:"Lock24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${m["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"
            />
        </svg>
    `}),Vv=b({name:"LockOpen24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${m["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V6a4 4 0 0 1 4-4 4 4 0 0 1 3.8 2.8"
            />
        </svg>
    `}),jv=b({name:"Menu24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    `}),Fv=b({name:"Paper24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `}),Zv=b({name:"People24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `}),Wv=b({name:"Person24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${m["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke="none"
                fill=${m["toniq-icon-stroke-color"].value}
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
                stroke="none"
                fill=${m["toniq-icon-stroke-color"].value}
                d="M5.6 18.3A7.2 7.2 0 0 1 12 14c2.8 0 5.2 1.8 6.4 4.3a9 9 0 0 1-12.8 0Z"
            />
        </svg>
    `}),Uv=b({name:"Photo24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M15 8h0"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="m4 15 4-4c1-.9 2-.9 3 0l5 5m-2-2 1-1c1-.9 2-.9 3 0l2 2"
            />
        </svg>
    `}),Gv=b({name:"Refresh24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M18.3 15a7 7 0 1 1 .4-5"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19 5v5h-5"
            />
        </svg>
    `}),eh=b({name:"Rocket24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),th=b({name:"Search24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6"
            />
        </svg>
    `}),Yv=b({name:"Send24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `}),Qv=b({name:"ShoppingCart24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M6 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M17 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m6 5 14 1-1 7H6"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M17 17H6V3H4"
            />
        </svg>
    `}),Jv=b({name:"Social24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `}),Xv=b({name:"Square24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${m["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
        </svg>
    `}),ru={interactionDuration:v`--toniq-interaction-transition-duration`,prettyDuration:v`--toniq-pretty-transition-duration`},_={interaction:v`var(${ru.interactionDuration}, 84ms)`,pretty:v`var(${ru.prettyDuration}, 300ms)`};function Fs(){return e=>e}function zi(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Kv=(()=>{const e={backgroundColor:v`#ffffff`,foregroundColor:v`#000000`},t={...e,foregroundColor:v`#00D093`},r={...e,foregroundColor:v`#ACADAD`},n={...e,foregroundColor:v`#D6D6D6`},o={...t},i={...t,foregroundColor:v`#00A876`},a={...t,foregroundColor:v`#1D6852`},s={...n},l={...e,foregroundColor:v`#EAFBF7`},c={...e,backgroundColor:v`#D2EEFA`},u=zi(o),d=zi(i),h=zi(a),g=h,p={backgroundColor:v`#F1F3F6`,foregroundColor:e.foregroundColor},w={...p,foregroundColor:v`#9A9A9D`};return Fs()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:u,accentPrimaryHover:d,accentPrimaryActive:h,accentSecondary:p,accentTertiary:w})})(),rh=Kv;function nu(e,t){return O(`--toniq-${Ha(e)}-${Ha(t)}`)}const Zs=yr(rh,e=>({backgroundColor:nu(e,"backgroundColor"),foregroundColor:nu(e,"foregroundColor")}));function Ge(e,t){const r=rh[e][t],n=Zs[e][t];return v`var(${n}, ${r})`}const x=yr(Zs,e=>({foregroundColor:Ge(e,"foregroundColor"),backgroundColor:Ge(e,"backgroundColor")}));function Z(e){return v`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Yt=v`
    pointer-events: none;
    opacity: 0.3;
    ${ze};
`;function Ur(e,t,r){return Math.min(Math.max(e,t),r)}function ir(e){return`${e}px`}function Vi(e){return`${e}%`}function ji(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,u)=>{const d=e[u+1];return d==null?!0:c<=t&&d>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function _v(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=ew(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(ou(o,r),o.length>r&&ou(o,r)),o}function ou(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function ew(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function Mt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=O(ir(n+r+t));return v`
        ${O(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${x.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const nh=Fs()({toniqFont:{"font-family":v`'Rubik', sans-serif`},normalWeightFont:{"font-weight":v`400`},boldFont:{"font-weight":v`600`},extraBoldFont:{"font-weight":v`900`},paragraphFont:{"line-height":v`24px`,"font-size":v`16px`},boldParagraphFont:{},labelFont:{"line-height":v`16px`,"font-size":v`12px`},boldLabelFont:{},h1Font:{"line-height":v`96px`,"font-size":v`64px`},h2Font:{"line-height":v`48px`,"font-size":v`32px`},h3Font:{"line-height":v`32px`,"font-size":v`24px`},monospaceFont:{"font-family":v`'Inconsolata', monospace`,"line-height":v`1.125em`}}),tw=yr(nh,(e,t)=>{const r=O(Ha(e.replace(/Font$/,"")));return yr(t,o=>{const i=O(o);return v`--toniq-font-${r}-${i}`})});function Xe(e){const t=tw[e],r=nh[e],n=tt(t).map(o=>{const i=r[o],a=t[o];return v`
            ${O(o)}: var(${a}, ${i});
        `});return O(n.join(`
`))}const J=(()=>{const e=v`
        font-style: normal;
        color: ${x.pagePrimary.foregroundColor};
        ${Xe("toniqFont")};
    `,t=v`
        ${e};
        ${Xe("normalWeightFont")};
    `,r=v`
        ${e};
        ${Xe("boldFont")};
    `,n=v`
        ${e};
        ${Xe("extraBoldFont")};
    `,o=v`
        ${e};
        ${Xe("paragraphFont")};
        ${t};
    `,i=v`
        ${e};
        ${o};
        ${r};
    `,a=v`
        ${e};
        ${Xe("labelFont")};
        ${t};
    `,s=v`
        ${a};
        ${r};
    `,l=v`
        ${Xe("h1Font")};
        ${n};
    `,c=v`
        ${Xe("h2Font")};
        ${r};
    `,u=v`
        ${Xe("h3Font")};
        ${r};
    `,d=v`
        ${Xe("monospaceFont")}
    `;return Fs()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:u,monospaceFont:d})})(),No={popupShadow:v`
        filter: drop-shadow(0px 12px 8px ${x.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:v`
        filter: drop-shadow(0px -12px 8px ${x.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:v`
        filter: drop-shadow(0px 12px 8px ${x.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function rw(e,t=!0){const r=O(e),n=e===":host"?v`
                  :host(:hover);
              `:v`
                  ${r}:hover
              `,o=t?v`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${x.pageInteraction.foregroundColor};
              }
          `:v``;return v`
        ${r} {
            border-radius: 16px;
            background-color: ${x.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${No.popupShadow};
        }

        ${o}
    `}const nw=b({name:"SquareCheck24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${m["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),oo=b({name:"Trash24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M9 7V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v3"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M4 7h16M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 11v6"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill="none"
                d="M14 11v6"
            />
        </svg>
    `}),ow=b({name:"Upload24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4"
            />
        </svg>
    `}),iw=b({name:"Wallet24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M4 8V6c0-2 2-2 2-2h10c.6 0 1 .4 1 1v3"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19 12V9c0-.6-.4-1-1-1H6S4 8 4 6v12c0 1 1 2 2 2h12c.6 0 1-.4 1-1v-2"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M20 12v4h-4a2 2 0 0 1-2-2c0-1.1.9-2 2-2h4"
            />
        </svg>
    `}),aw=b({name:"WorldUpload24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M21 12c0-5-4-9-9-9s-9 4-9 9 4 9 9 9M3.6 9h16.8M3.6 15H12m-.4-12a17 17 0 0 0 0 18m.9-18c1.7 2.7 2.5 5.8 2.5 9"
            />
            <path
                fill="none"
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `}),sw=b({name:"X24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M18 6 6 18M6 6l12 12"
            />
        </svg>
    `}),lw=b({name:"Folder48Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M38 38c2 0 4-2 4-4V18c0-2-2-4-4-4H24l-6-6h-8c-2 0-4 2-4 4v22c0 2 2 4 4 4h28Z"
            />
        </svg>
    `}),oh=b({name:"FolderOff48Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M13.9 8H18l6 6h14a4 4 0 0 1 4 4v16a4 4 0 0 1-.4 1.7M32.1 38H10a4 4 0 0 1-4-4V11.9"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m6 6 36 36"
            />
        </svg>
    `}),cw=b({name:"Kyc48Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${W["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${W["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${m["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${m["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${W["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),ih=b({name:"Api64Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${m["toniq-icon-fill-color"].value}
                d="m32 3 26 12.5v31L32 61 6 46.5v-31L32 3Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M20.6 25.1a6 6 0 0 1 8.4 2l-10.4 6.4a6 6 0 0 1 2-8.4Zm15.7 16a4.5 4.5 0 0 1-6.3 0l6.3-6.3a4.5 4.5 0 0 1 0 6.3ZM58 15.5l-18.2 8.7M6 15.5l4 1.5c5 1.9 8.4 5.7 10.3 8.3M32 61V50.3M58 29a14 14 0 0 1-21.5 11.9m-8.3-4.4 3.2 3.2m.4-6.7 3.1 3.2"
            />
        </svg>
    `}),uw=b({name:"CircleDashes64Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M19.1 33.8A13 13 0 0 1 32 19c2 0 3.8.4 5.4 1.2m7.5 10A13 13 0 0 1 32 45c-2 0-3.8-.4-5.4-1.2"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M6 31.3A26 26 0 0 1 33.7 6m12 3.7a26 26 0 0 1 8 36.6M44.3 55A25.9 25.9 0 0 1 8.7 43.5"
            />
        </svg>
    `}),dw=b({name:"Rocket64Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${m["toniq-icon-stroke-color"].value}
            fill=${m["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M57.7 6.7c0-.2-.2-.4-.4-.4-6.8-1.7-22.5 4.2-31 12.8a36.8 36.8 0 0 0-4.1 4.9c-2.7-.3-5.3 0-7.5.9C8.4 27.7 6.5 34.9 6 38a1.1 1.1 0 0 0 1.2 1.3l10.2-1 .1 2.2c0 .5.3 1 .7 1.4l3.9 4c.4.3.9.5 1.4.6l2.3.1-1.2 10.2A1.1 1.1 0 0 0 26 58c3.2-.5 10.4-2.4 13.2-8.7 1-2.2 1.2-4.8 1-7.4 1.7-1.3 3.3-2.7 4.8-4.2 8.6-8.5 14.5-23.9 12.8-31Zm-20.4 20a5.4 5.4 0 0 1 3.8-9.1 5.4 5.4 0 0 1 3.8 9.1 5.3 5.3 0 0 1-7.6 0ZM13.7 44c-1.2.2-2.4.7-3.3 1.6C8.2 47.8 8 56 8 56s8.2-.2 10.4-2.4c.9-.9 1.5-2 1.6-3.3"
            />
        </svg>
    `}),fw=b({name:"CryptoBtc24Icon",svgTemplate:f`
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
    `}),hw=b({name:"CryptoCkBtc24Icon",svgTemplate:f`
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
    `}),ah="0 0 58 58",sh=qm`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDct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" width="58" height="58" />
`,mw=b({name:"CryptoIcp16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${ah}"
        >
            ${sh}
        </svg>
    `}),gw=b({name:"CryptoIcp24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="24"
            height="24"
            viewBox="${ah}"
        >
            ${sh}
        </svg>
    `}),pw=b({name:"EntrepotLogo144Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${W["toniq-icon-fill-color"](String(x.brandPrimary.foregroundColor))}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="134"
            height="144"
            viewBox="0 0 134 144"
        >
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `}),lh=b({name:"BrandDiscord24Icon",svgTemplate:f`
        <svg
            fill=${W["toniq-icon-fill-color"]("#5865f2")}
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
    `}),vw=b({name:"BrandDistrikt24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${W["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),ww=b({name:"BrandDscvr24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="24" height="24">
            <image
                xlink:href="data:image/png;base64,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"
                width="250"
                height="250"
            />
        </svg>
    `}),yw=b({name:"BrandFacebookLogo24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${W["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),bw=b({name:"BrandGoogleLogo24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${W["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),kw=b({name:"BrandIcScan24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${W["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),ch=b({name:"BrandInstagram24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${W["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),xw=b({name:"BrandInstagramFlat24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${W["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),Aw=b({name:"BrandMedium24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${W["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),Sw=b({name:"BrandNftgeek24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${W["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),uh=b({name:"BrandTelegram24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${W["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),dh=b({name:"BrandTiktok24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${W["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${W["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),$w=b({name:"BrandTiktokFlat24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${W["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),fh=b({name:"BrandTwitch24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${W["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),hh=b({name:"BrandTwitter24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${W["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),vt={"core-16":[av,sv,fr],"core-24":[lv,cv,zs,uv,dv,Vs,Gf,fv,hv,mv,gv,pv,vv,wv,Yf,Qf,yv,bv,Jf,kv,xv,Av,Xf,Kf,Sv,$v,Tv,Cv,_f,Ev,Mv,Iv,Pv,Lv,Bv,Ov,Dv,Nv,Rv,Hv,qv,js,zv,Vv,jv,Fv,Zv,Wv,Uv,Gv,eh,th,Yv,Qv,Jv,Xv,nw,oo,ow,iw,aw,sw],"core-48":[lw,oh,cw],"core-64":[ih,uw,dw],cryptocurrencies:[fw,hw,mw,gw],logos:[pw],"third-party-brands":[lh,vw,ww,yw,bw,kw,ch,xw,Aw,Sw,uh,dh,$w,fh,hh]},Tw=Gd({Discord:Bt(void 0,""),Instagram:Bt(void 0,""),Telegram:Bt(void 0,""),TikTok:Bt(void 0,""),Twitch:Bt(void 0,""),Twitter:Bt(void 0,""),website:Bt(void 0,"")}),Cw=Tw.defaultValue,mh={Discord:lh,Instagram:ch,Telegram:uh,TikTok:dh,Twitch:fh,Twitter:hh,website:Xf},iu="toniq-",{defineElement:re,defineElementNoInputs:Ew}=Is({assertInputs:e=>{if(!e.tagName.startsWith(iu))throw new Error(`Tag name should start with '${iu}' but got '${e.tagName}'`)}}),Ft=re()({tagName:"toniq-bold-space",styles:v`
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
            ${J.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return f`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `}}),T=re()({tagName:"toniq-icon",styles:v`
        :host {
            display: inline-flex;
            ${L["vira-icon-fill-color"].name}: ${m["toniq-icon-fill-color"].value}
            ${L["vira-icon-stroke-color"].name}: ${m["toniq-icon-stroke-color"].value}
            ${L["vira-icon-stroke-width"].name}: ${m["toniq-icon-stroke-width"].value}
        }

        ${fe} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return f`
            <${fe.assign(e)}></${fe}>
        `}}),za=v`8px`;var ln=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(ln||{});const oe=re()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${ze};
        }

        :host(:hover) button {
            ${Z(x.accentPrimaryHover)};
        }

        :host(:active) button {
            ${Z(x.accentPrimaryActive)};
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
            border-radius: ${za};
            ${Z(x.accentPrimary)};
            padding: 10px;
            transition:
                color ${_.interaction},
                background-color ${_.interaction},
                border-color ${_.interaction};
        }

        ${Mt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${Z(x.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${Z(x.pagePrimary)};
            border-color: ${x.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Yt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${x.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${x.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${T.assign({icon:e.icon})}
                      class="icon-template"
                  ></${T}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function Mw(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Ws(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(d=>i==="+"?d>l:d<l).sort((d,h)=>i==="+"?d-h:h-d);let u;return c.length>0?u=c[0]:i==="+"?u=a:u=0,e.scrollTo({...r,[o==="x"?"left":"top"]:u})}function Iw(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(h,g){let p=parseFloat(h);return/%/.test(h)&&(p/=100,p*=g),p}let l=s(n,r.width),c=s(o,r.height),u=s(i,r.width),d=s(a,r.height);return{x:{before:l,after:u},y:{before:c,after:d}}}function Pw(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function gh(e){let t=[];for(const r of e.children)t=t.concat(r,gh(r));return t}function Lw(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=gh(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const u of o){const d=u.getBoundingClientRect();if(t&&!Pw(r,d,a))continue;const h=window.getComputedStyle(u);let[g,p]=h.getPropertyValue("scroll-snap-align").split(" ");typeof p>"u"&&(p=g);const w=i==="x"?p:g,y=d[s]-r[s]+e[c];switch(w){case"none":break;case"start":n[i].start.push(y);break;case"center":n[i].center.push(y+d[l]/2);break;case"end":n[i].end.push(y+d[l]);break}}}return n}function Ws(e){const t=e.getBoundingClientRect(),r=Iw(e),n=Lw(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:au([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:au([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function au(e){return Array.from(new Set(e))}const io="templates-container",Bw=4e3;var Va=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(Va||{});const Ae=re()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>v`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${C2(`.${io}`)}

        .${O(io)} {
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

        .arrow ${T} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${Z(x.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{Fi({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Bw)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=su(t.scrollSnapPositions,0),i=su(t.scrollSnapPositions,-1);return f`
            <div
                ${en(()=>{r({scrollSnapPositions:Ws(ja(n)).x})})}
                class=${io}
                ${$("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${T.assign({icon:zs})}
                        class=${Ce({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${$("click",()=>{Fi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${T}>
                </div>
                ${e.templates.map(a=>f`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${T.assign({icon:Vs})}
                        class=${Ce({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${$("click",()=>{Fi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${T}>
                </div>
            </div>
        `}});function su(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function ja(e){const t=e.shadowRoot.querySelector(`.${io}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function Fi({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=ja(e),i=o.clientWidth,a=Ws(ja(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,u=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&u)r&&o.scrollTo({behavior:"smooth",left:l});else{const d=Ow(e,t),h=lu(o.scrollLeft,a,!1),g=t==="right"?1:-1,p=(o.clientWidth-d*3)*g,w=lu((h||0)+p,a,!0);t==="right"&&w>h?o.scrollTo({behavior:"smooth",left:w}):t==="left"&&w<h?o.scrollTo({behavior:"smooth",left:w}):Mw(o,t)}}function Ow(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function lu(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const ht=re()({tagName:"toniq-checkbox",events:{checkedChange:K()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ge("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ge("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ge("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ge("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ge("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>v`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${_.interaction},
                background-color ${_.interaction},
                opacity ${_.interaction};
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

        ${Mt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Yt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=f`
            <span class="checkbox ${e.checked?"checked":""}">
                <${T.assign({icon:Yf})}
                    class="check-mark ${Ce({hidden:!e.checked})}"
                ></${T}>
            </span>
        `,o=f`
            <slot
                class=${Ce({label:!0,checked:e.checked})}
            >
                <span
                    class=${Ce({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return f`
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
        `}});var Fa=(e=>(e.Default="default",e.Secondary="secondary",e))(Fa||{});const Zi=re()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${J.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${Z(x.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${Z(x.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${T.assign({icon:e.icon})}></${T}>
              `:"";return f`
            ${t}
            <slot>${e.text}</slot>
        `}});class Jt extends Error{}class Dw extends Jt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Nw extends Jt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Rw extends Jt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class qr extends Jt{}class ph extends Jt{constructor(t){super(`Invalid unit ${t}`)}}class Be extends Jt{}class mt extends Jt{constructor(){super("Zone is an abstract class")}}const A="numeric",Je="short",Ee="long",Ro={year:A,month:A,day:A},vh={year:A,month:Je,day:A},Hw={year:A,month:Je,day:A,weekday:Je},wh={year:A,month:Ee,day:A},yh={year:A,month:Ee,day:A,weekday:Ee},bh={hour:A,minute:A},kh={hour:A,minute:A,second:A},xh={hour:A,minute:A,second:A,timeZoneName:Je},Ah={hour:A,minute:A,second:A,timeZoneName:Ee},Sh={hour:A,minute:A,hourCycle:"h23"},$h={hour:A,minute:A,second:A,hourCycle:"h23"},Th={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:Je},Ch={hour:A,minute:A,second:A,hourCycle:"h23",timeZoneName:Ee},Eh={year:A,month:A,day:A,hour:A,minute:A},Mh={year:A,month:A,day:A,hour:A,minute:A,second:A},Ih={year:A,month:Je,day:A,hour:A,minute:A},Ph={year:A,month:Je,day:A,hour:A,minute:A,second:A},qw={year:A,month:Je,day:A,weekday:Je,hour:A,minute:A},Lh={year:A,month:Ee,day:A,hour:A,minute:A,timeZoneName:Je},Bh={year:A,month:Ee,day:A,hour:A,minute:A,second:A,timeZoneName:Je},Oh={year:A,month:Ee,day:A,weekday:Ee,hour:A,minute:A,timeZoneName:Ee},Dh={year:A,month:Ee,day:A,weekday:Ee,hour:A,minute:A,second:A,timeZoneName:Ee};class bn{get type(){throw new mt}get name(){throw new mt}get ianaName(){return this.name}get isUniversal(){throw new mt}offsetName(t,r){throw new mt}formatOffset(t,r){throw new mt}offset(t){throw new mt}equals(t){throw new mt}get isValid(){throw new mt}}let Wi=null;class ii extends bn{static get instance(){return Wi===null&&(Wi=new ii),Wi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Rh(t,r,n)}formatOffset(t,r){return Yr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let ao={};function zw(e){return ao[e]||(ao[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),ao[e]}const Vw={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function jw(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,u]=n;return[a,o,i,s,l,c,u]}function Fw(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=Vw[i];i==="era"?n[s]=a:N(s)||(n[s]=parseInt(a,10))}return n}let Rn={};class lt extends bn{static create(t){return Rn[t]||(Rn[t]=new lt(t)),Rn[t]}static resetCache(){Rn={},ao={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=lt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Rh(t,r,n,this.name)}formatOffset(t,r){return Yr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=zw(this.name);let[o,i,a,s,l,c,u]=n.formatToParts?Fw(n,r):jw(n,r);s==="BC"&&(o=-Math.abs(o)+1);const h=si({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:u,millisecond:0});let g=+r;const p=g%1e3;return g-=p>=0?p:1e3+p,(h-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let cu={};function Zw(e,t={}){const r=JSON.stringify([e,t]);let n=cu[r];return n||(n=new Intl.ListFormat(e,t),cu[r]=n),n}let Za={};function Wa(e,t={}){const r=JSON.stringify([e,t]);let n=Za[r];return n||(n=new Intl.DateTimeFormat(e,t),Za[r]=n),n}let Ua={};function Ww(e,t={}){const r=JSON.stringify([e,t]);let n=Ua[r];return n||(n=new Intl.NumberFormat(e,t),Ua[r]=n),n}let Ga={};function Uw(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Ga[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Ga[o]=i),i}let zr=null;function Gw(){return zr||(zr=new Intl.DateTimeFormat().resolvedOptions().locale,zr)}function Yw(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Wa(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=Wa(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function Qw(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Jw(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function Xw(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function Hn(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Kw(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class _w{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=Ww(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Gs(t,3);return se(r,this.padTo)}}}class ey{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&lt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Wa(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class ty{constructor(t,r,n){this.opts={style:"long",...n},!r&&Nh()&&(this.rtf=Uw(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):wy(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}class X{static fromOpts(t){return X.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,r,n,o=!1){const i=t||te.defaultLocale,a=i||(o?"en-US":Gw()),s=r||te.defaultNumberingSystem,l=n||te.defaultOutputCalendar;return new X(a,s,l,i)}static resetCache(){zr=null,Za={},Ua={},Ga={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n}={}){return X.create(t,r,n)}constructor(t,r,n,o){const[i,a,s]=Yw(t);this.locale=i,this.numberingSystem=r||a||null,this.outputCalendar=n||s||null,this.intl=Qw(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Kw(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:X.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Hn(this,t,zh,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Jw(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return Hn(this,t,Fh,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Xw(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return Hn(this,void 0,()=>Zh,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Hn(this,t,Wh,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new _w(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new ey(t,this.intl,r)}relFormatter(t={}){return new ty(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Zw(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Ui=null;class ye extends bn{static get utcInstance(){return Ui===null&&(Ui=new ye(0)),Ui}static instance(t){return t===0?ye.utcInstance:new ye(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new ye(li(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Yr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Yr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Yr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class ry extends bn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function wt(e,t){if(N(e)||e===null)return t;if(e instanceof bn)return e;if(ny(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?ii.instance:r==="utc"||r==="gmt"?ye.utcInstance:ye.parseSpecifier(r)||lt.create(e)}else return Zt(e)?ye.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new ry(e)}let uu=()=>Date.now(),du="system",fu=null,hu=null,mu=null,gu=60,pu;class te{static get now(){return uu}static set now(t){uu=t}static set defaultZone(t){du=t}static get defaultZone(){return wt(du,ii.instance)}static get defaultLocale(){return fu}static set defaultLocale(t){fu=t}static get defaultNumberingSystem(){return hu}static set defaultNumberingSystem(t){hu=t}static get defaultOutputCalendar(){return mu}static set defaultOutputCalendar(t){mu=t}static get twoDigitCutoffYear(){return gu}static set twoDigitCutoffYear(t){gu=t%100}static get throwOnInvalid(){return pu}static set throwOnInvalid(t){pu=t}static resetCaches(){X.resetCache(),lt.resetCache()}}function N(e){return typeof e>"u"}function Zt(e){return typeof e=="number"}function ai(e){return typeof e=="number"&&e%1===0}function ny(e){return typeof e=="string"}function oy(e){return Object.prototype.toString.call(e)==="[object Date]"}function Nh(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function iy(e){return Array.isArray(e)?e:[e]}function vu(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function ay(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function br(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function st(e,t,r){return ai(e)&&e>=t&&e<=r}function sy(e,t){return e-t*Math.floor(e/t)}function se(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function pt(e){if(!(N(e)||e===null||e===""))return parseInt(e,10)}function Ot(e){if(!(N(e)||e===null||e===""))return parseFloat(e)}function Us(e){if(!(N(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Gs(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function kn(e){return e%4===0&&(e%100!==0||e%400===0)}function Gr(e){return kn(e)?366:365}function Ho(e,t){const r=sy(t-1,12)+1,n=e+(t-r)/12;return r===2?kn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function si(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function qo(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,r=e-1,n=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return t===4||n===3?53:52}function Ya(e){return e>99?e:e>te.twoDigitCutoffYear?1900+e:2e3+e}function Rh(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function li(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function Hh(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Be(`Invalid unit value ${e}`);return t}function zo(e,t){const r={};for(const n in e)if(br(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=Hh(o)}return r}function Yr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${se(r,2)}:${se(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${se(r,2)}${se(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ci(e){return ay(e,["hour","minute","second","millisecond"])}const ly=["January","February","March","April","May","June","July","August","September","October","November","December"],qh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cy=["J","F","M","A","M","J","J","A","S","O","N","D"];function zh(e){switch(e){case"narrow":return[...cy];case"short":return[...qh];case"long":return[...ly];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Vh=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],jh=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],uy=["M","T","W","T","F","S","S"];function Fh(e){switch(e){case"narrow":return[...uy];case"short":return[...jh];case"long":return[...Vh];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Zh=["AM","PM"],dy=["Before Christ","Anno Domini"],fy=["BC","AD"],hy=["B","A"];function Wh(e){switch(e){case"narrow":return[...hy];case"short":return[...fy];case"long":return[...dy];default:return null}}function my(e){return Zh[e.hour<12?0:1]}function gy(e,t){return Fh(t)[e.weekday-1]}function py(e,t){return zh(t)[e.month-1]}function vy(e,t){return Wh(t)[e.year<0?0:1]}function wy(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${o[e][0]}`;case-1:return d?"yesterday":`last ${o[e][0]}`;case 0:return d?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],u=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${u} ago`:`in ${s} ${u}`}function wu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const yy={D:Ro,DD:vh,DDD:wh,DDDD:yh,t:bh,tt:kh,ttt:xh,tttt:Ah,T:Sh,TT:$h,TTT:Th,TTTT:Ch,f:Eh,ff:Ih,fff:Lh,ffff:Oh,F:Mh,FF:Ph,FFF:Bh,FFFF:Dh};class we{static create(t,r={}){return new we(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return yy[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return se(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,p)=>this.loc.extract(t,g,p),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?my(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,p)=>n?py(t,g):i(p?{month:g}:{month:g,day:"numeric"},"month"),c=(g,p)=>n?gy(t,g):i(p?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),u=g=>{const p=we.macroTokenToFormatOpts(g);return p?this.formatWithSystemDefault(t,p):g},d=g=>n?vy(t,g):i({era:g},"era"),h=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(g)}};return wu(we.parseFormat(r),h)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const u=n(c);return u?this.num(l.get(u),c.length):c},i=we.parseFormat(r),a=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return wu(i,o(s))}}class Qe{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Uh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ar(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Sr(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function $r(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function Gh(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=pt(t[r+o]);return[n,null,r+o]}}const Yh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,by=`(?:${Yh.source}?(?:\\[(${Uh.source})\\])?)?`,Ys=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Qh=RegExp(`${Ys.source}${by}`),Qs=RegExp(`(?:T${Qh.source})?`),ky=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,xy=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ay=/(\d{4})-?(\d{3})/,Sy=Gh("weekYear","weekNumber","weekDay"),$y=Gh("year","ordinal"),Ty=/(\d{4})-(\d\d)-(\d\d)/,Jh=RegExp(`${Ys.source} ?(?:${Yh.source}|(${Uh.source}))?`),Cy=RegExp(`(?: ${Jh.source})?`);function hr(e,t,r){const n=e[t];return N(n)?r:pt(n)}function Ey(e,t){return[{year:hr(e,t),month:hr(e,t+1,1),day:hr(e,t+2,1)},null,t+3]}function Tr(e,t){return[{hours:hr(e,t,0),minutes:hr(e,t+1,0),seconds:hr(e,t+2,0),milliseconds:Us(e[t+3])},null,t+4]}function xn(e,t){const r=!e[t]&&!e[t+1],n=li(e[t+1],e[t+2]),o=r?null:ye.instance(n);return[{},o,t+3]}function An(e,t){const r=e[t]?lt.create(e[t]):null;return[{},r,t+1]}const My=RegExp(`^T?${Ys.source}$`),Iy=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Py(e){const[t,r,n,o,i,a,s,l,c]=e,u=t[0]==="-",d=l&&l[0]==="-",h=(g,p=!1)=>g!==void 0&&(p||g&&u)?-g:g;return[{years:h(Ot(r)),months:h(Ot(n)),weeks:h(Ot(o)),days:h(Ot(i)),hours:h(Ot(a)),minutes:h(Ot(s)),seconds:h(Ot(l),l==="-0"),milliseconds:h(Us(c),d)}]}const Ly={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Js(e,t,r,n,o,i,a){const s={year:t.length===2?Ya(pt(t)):pt(t),month:qh.indexOf(r)+1,day:pt(n),hour:pt(o),minute:pt(i)};return a&&(s.second=pt(a)),e&&(s.weekday=e.length>3?Vh.indexOf(e)+1:jh.indexOf(e)+1),s}const By=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Oy(e){const[,t,r,n,o,i,a,s,l,c,u,d]=e,h=Js(t,o,n,r,i,a,s);let g;return l?g=Ly[l]:c?g=0:g=li(u,d),[h,new ye(g)]}function Dy(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Ny=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ry=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Hy=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function yu(e){const[,t,r,n,o,i,a,s]=e;return[Js(t,o,n,r,i,a,s),ye.utcInstance]}function qy(e){const[,t,r,n,o,i,a,s]=e;return[Js(t,s,r,n,o,i,a),ye.utcInstance]}const zy=Ar(ky,Qs),Vy=Ar(xy,Qs),jy=Ar(Ay,Qs),Fy=Ar(Qh),Xh=Sr(Ey,Tr,xn,An),Zy=Sr(Sy,Tr,xn,An),Wy=Sr($y,Tr,xn,An),Uy=Sr(Tr,xn,An);function Gy(e){return $r(e,[zy,Xh],[Vy,Zy],[jy,Wy],[Fy,Uy])}function Yy(e){return $r(Dy(e),[By,Oy])}function Qy(e){return $r(e,[Ny,yu],[Ry,yu],[Hy,qy])}function Jy(e){return $r(e,[Iy,Py])}const Xy=Sr(Tr);function Ky(e){return $r(e,[My,Xy])}const _y=Ar(Ty,Cy),eb=Ar(Jh),tb=Sr(Tr,xn,An);function rb(e){return $r(e,[_y,Xh],[eb,tb])}const bu="Invalid Duration",Kh={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},nb={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Kh},Pe=146097/400,rr=146097/4800,ob={years:{quarters:4,months:12,weeks:Pe/7,days:Pe,hours:Pe*24,minutes:Pe*24*60,seconds:Pe*24*60*60,milliseconds:Pe*24*60*60*1e3},quarters:{months:3,weeks:Pe/28,days:Pe/4,hours:Pe*24/4,minutes:Pe*24*60/4,seconds:Pe*24*60*60/4,milliseconds:Pe*24*60*60*1e3/4},months:{weeks:rr/7,days:rr,hours:rr*24,minutes:rr*24*60,seconds:rr*24*60*60,milliseconds:rr*24*60*60*1e3},...Kh},Vt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],ib=Vt.slice(0).reverse();function gt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new z(n)}function _h(e,t){let r=t.milliseconds??0;for(const n of ib.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function ku(e,t){const r=_h(e,t)<0?-1:1;Vt.reduceRight((n,o)=>{if(N(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),Vt.reduce((n,o)=>{if(N(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function ab(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class z{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?ob:nb;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||X.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return z.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Be(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new z({values:zo(t,z.normalizeUnit),loc:X.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Zt(t))return z.fromMillis(t);if(z.isDuration(t))return t;if(typeof t=="object")return z.fromObject(t);throw new Be(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Jy(t);return n?z.fromObject(n,r):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Ky(t);return n?z.fromObject(n,r):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Be("need to specify a reason the Duration is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(te.throwOnInvalid)throw new Rw(n);return new z({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new ph(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?we.create(this.loc,n).formatDurationFromString(this,t):bu}toHuman(t={}){if(!this.isValid)return bu;const r=Vt.map(n=>{const o=this.values[n];return N(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Gs(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?_h(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t),n={};for(const o of Vt)(br(r.values,o)||br(this.values,o))&&(n[o]=r.get(o)+this.get(o));return gt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Hh(t(this.values[n],n));return gt(this,{values:r},!0)}get(t){return this[z.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...zo(t,z.normalizeUnit)};return gt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return gt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ku(this.matrix,t),gt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=ab(this.normalize().shiftToAll().toObject());return gt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>z.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of Vt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;Zt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Zt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return ku(this.matrix,r),gt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return gt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Vt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const nr="Invalid Interval";function sb(e,t){return!e||!e.isValid?ee.invalid("missing or invalid start"):!t||!t.isValid?ee.invalid("missing or invalid end"):t<e?ee.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ee{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Be("need to specify a reason the Interval is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(te.throwOnInvalid)throw new Nw(n);return new ee({invalid:n})}static fromDateTimes(t,r){const n=Br(t),o=Br(r),i=sb(n,o);return i??new ee({start:n,end:o})}static after(t,r){const n=z.fromDurationLike(r),o=Br(t);return ee.fromDateTimes(o,o.plus(n))}static before(t,r){const n=z.fromDurationLike(r),o=Br(t);return ee.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=I.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=I.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return ee.fromDateTimes(i,s);if(a){const c=z.fromISO(o,r);if(c.isValid)return ee.after(i,c)}else if(l){const c=z.fromISO(n,r);if(c.isValid)return ee.before(s,c)}}return ee.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;const r=this.start.startOf(t),n=this.end.startOf(t);return Math.floor(n.diff(r,t).get(t))+(n.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ee.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Br).filter(a=>this.contains(a)).sort(),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(ee.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=z.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ee.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ee.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ee.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ee.fromDateTimes(r,l.time)),r=null);return ee.merge(o)}difference(...t){return ee.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:nr}toLocaleString(t=Ro,r={}){return this.isValid?we.create(this.s.loc.clone(r),t).formatInterval(this):nr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:nr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:nr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:nr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:nr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):z.invalid(this.invalidReason)}mapEndpoints(t){return ee.fromDateTimes(t(this.s),t(this.e))}}class Vr{static hasDST(t=te.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return lt.isValidZone(t)}static normalizeZone(t){return wt(t,te.defaultZone)}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||X.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||X.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||X.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||X.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return X.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return X.create(r,null,"gregory").eras(t)}static features(){return{relative:Nh()}}}function xu(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(z.fromMillis(n).as("days"))}function lb(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=xu(l,c);return(u-u%7)/7}],["days",xu]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function cb(e,t,r,n){let[o,i,a,s]=lb(e,t,r);const l=t-o,c=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const u=z.fromObject(i,n);return c.length>0?z.fromMillis(l,n).shiftTo(...c).plus(u):u}const Xs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Au={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},ub=Xs.hanidec.replace(/[\[|\]]/g,"").split("");function db(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Xs.hanidec)!==-1)t+=ub.indexOf(e[r]);else for(const o in Au){const[i,a]=Au[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function je({numberingSystem:e},t=""){return new RegExp(`${Xs[e||"latn"]}${t}`)}const fb="missing Intl.DateTimeFormat.formatToParts support";function V(e,t=r=>r){return{regex:e,deser:([r])=>t(db(r))}}const hb=String.fromCharCode(160),e0=`[ ${hb}]`,t0=new RegExp(e0,"g");function mb(e){return e.replace(/\./g,"\\.?").replace(t0,e0)}function Su(e){return e.replace(/\./g,"").replace(t0," ").toLowerCase()}function Fe(e,t){return e===null?null:{regex:RegExp(e.map(mb).join("|")),deser:([r])=>e.findIndex(n=>Su(r)===Su(n))+t}}function $u(e,t){return{regex:e,deser:([,r,n])=>li(r,n),groups:t}}function qn(e){return{regex:e,deser:([t])=>t}}function gb(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function pb(e,t){const r=je(t),n=je(t,"{2}"),o=je(t,"{3}"),i=je(t,"{4}"),a=je(t,"{6}"),s=je(t,"{1,2}"),l=je(t,"{1,3}"),c=je(t,"{1,6}"),u=je(t,"{1,9}"),d=je(t,"{2,4}"),h=je(t,"{4,6}"),g=y=>({regex:RegExp(gb(y.val)),deser:([k])=>k,literal:!0}),w=(y=>{if(e.literal)return g(y);switch(y.val){case"G":return Fe(t.eras("short"),0);case"GG":return Fe(t.eras("long"),0);case"y":return V(c);case"yy":return V(d,Ya);case"yyyy":return V(i);case"yyyyy":return V(h);case"yyyyyy":return V(a);case"M":return V(s);case"MM":return V(n);case"MMM":return Fe(t.months("short",!0),1);case"MMMM":return Fe(t.months("long",!0),1);case"L":return V(s);case"LL":return V(n);case"LLL":return Fe(t.months("short",!1),1);case"LLLL":return Fe(t.months("long",!1),1);case"d":return V(s);case"dd":return V(n);case"o":return V(l);case"ooo":return V(o);case"HH":return V(n);case"H":return V(s);case"hh":return V(n);case"h":return V(s);case"mm":return V(n);case"m":return V(s);case"q":return V(s);case"qq":return V(n);case"s":return V(s);case"ss":return V(n);case"S":return V(l);case"SSS":return V(o);case"u":return qn(u);case"uu":return qn(s);case"uuu":return V(r);case"a":return Fe(t.meridiems(),0);case"kkkk":return V(i);case"kk":return V(d,Ya);case"W":return V(s);case"WW":return V(n);case"E":case"c":return V(r);case"EEE":return Fe(t.weekdays("short",!1),1);case"EEEE":return Fe(t.weekdays("long",!1),1);case"ccc":return Fe(t.weekdays("short",!0),1);case"cccc":return Fe(t.weekdays("long",!0),1);case"Z":case"ZZ":return $u(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return $u(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return qn(/[a-z_+-/]{1,256}?/i);case" ":return qn(/[^\S\n\r]/);default:return g(y)}})(e)||{invalidReason:fb};return w.token=e,w}const vb={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function wb(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=vb[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function yb(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function bb(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(br(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function kb(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return N(e.z)||(r=lt.create(e.z)),N(e.Z)||(r||(r=new ye(e.Z)),n=e.Z),N(e.q)||(e.M=(e.q-1)*3+1),N(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),N(e.u)||(e.S=Us(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let Gi=null;function xb(){return Gi||(Gi=I.fromMillis(1555555555555)),Gi}function Ab(e,t){if(e.literal)return e;const r=we.macroTokenToFormatOpts(e.val),n=o0(r,t);return n==null||n.includes(void 0)?e:n}function r0(e,t){return Array.prototype.concat(...e.map(r=>Ab(r,t)))}function n0(e,t,r){const n=r0(we.parseFormat(r),e),o=n.map(a=>pb(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=yb(o),l=RegExp(a,"i"),[c,u]=bb(t,l,s),[d,h,g]=u?kb(u):[null,null,void 0];if(br(u,"a")&&br(u,"H"))throw new qr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:u,result:d,zone:h,specificOffset:g}}}function Sb(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=n0(e,t,r);return[n,o,i,a]}function o0(e,t){if(!e)return null;const n=we.create(t,e).dtFormatter(xb()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>wb(a,e,i))}const i0=[0,31,59,90,120,151,181,212,243,273,304,334],a0=[0,31,60,91,121,152,182,213,244,274,305,335];function Ne(e,t){return new Qe("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function s0(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function l0(e,t,r){return r+(kn(e)?a0:i0)[t-1]}function c0(e,t){const r=kn(e)?a0:i0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Qa(e){const{year:t,month:r,day:n}=e,o=l0(t,r,n),i=s0(t,r,n);let a=Math.floor((o-i+10)/7),s;return a<1?(s=t-1,a=qo(s)):a>qo(t)?(s=t+1,a=1):s=t,{weekYear:s,weekNumber:a,weekday:i,...ci(e)}}function Tu(e){const{weekYear:t,weekNumber:r,weekday:n}=e,o=s0(t,1,4),i=Gr(t);let a=r*7+n-o-3,s;a<1?(s=t-1,a+=Gr(s)):a>i?(s=t+1,a-=Gr(t)):s=t;const{month:l,day:c}=c0(s,a);return{year:s,month:l,day:c,...ci(e)}}function Yi(e){const{year:t,month:r,day:n}=e,o=l0(t,r,n);return{year:t,ordinal:o,...ci(e)}}function Cu(e){const{year:t,ordinal:r}=e,{month:n,day:o}=c0(t,r);return{year:t,month:n,day:o,...ci(e)}}function $b(e){const t=ai(e.weekYear),r=st(e.weekNumber,1,qo(e.weekYear)),n=st(e.weekday,1,7);return t?r?n?!1:Ne("weekday",e.weekday):Ne("week",e.week):Ne("weekYear",e.weekYear)}function Tb(e){const t=ai(e.year),r=st(e.ordinal,1,Gr(e.year));return t?r?!1:Ne("ordinal",e.ordinal):Ne("year",e.year)}function u0(e){const t=ai(e.year),r=st(e.month,1,12),n=st(e.day,1,Ho(e.year,e.month));return t?r?n?!1:Ne("day",e.day):Ne("month",e.month):Ne("year",e.year)}function d0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=st(t,0,23)||t===24&&r===0&&n===0&&o===0,a=st(r,0,59),s=st(n,0,59),l=st(o,0,999);return i?a?s?l?!1:Ne("millisecond",o):Ne("second",n):Ne("minute",r):Ne("hour",t)}const Qi="Invalid DateTime",Eu=864e13;function zn(e){return new Qe("unsupported zone",`the zone "${e.name}" is not supported`)}function Ji(e){return e.weekData===null&&(e.weekData=Qa(e.c)),e.weekData}function Dt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function f0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Vn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function so(e,t,r){return f0(si(e),t,r)}function Mu(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Ho(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=z.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=si(i);let[l,c]=f0(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Lr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=I.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return I.invalid(new Qe("unparsable",`the input "${o}" can't be parsed as ${n}`))}function jn(e,t,r=!0){return e.isValid?we.create(X.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Xi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=se(e.c.year,r?6:4),t?(n+="-",n+=se(e.c.month),n+="-",n+=se(e.c.day)):(n+=se(e.c.month),n+=se(e.c.day)),n}function Iu(e,t,r,n,o,i){let a=se(e.c.hour);return t?(a+=":",a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=se(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=se(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=se(Math.trunc(-e.o/60)),a+=":",a+=se(Math.trunc(-e.o%60))):(a+="+",a+=se(Math.trunc(e.o/60)),a+=":",a+=se(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const h0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Cb={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Eb={ordinal:1,hour:0,minute:0,second:0,millisecond:0},m0=["year","month","day","hour","minute","second","millisecond"],Mb=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Ib=["year","ordinal","hour","minute","second","millisecond"];function Pu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new ph(e);return t}function Lu(e,t){const r=wt(t.zone,te.defaultZone),n=X.fromObject(t),o=te.now();let i,a;if(N(e.year))i=o;else{for(const c of m0)N(e[c])&&(e[c]=h0[c]);const s=u0(e)||d0(e);if(s)return I.invalid(s);const l=r.offset(o);[i,a]=so(e,l,r)}return new I({ts:i,zone:r,loc:n,o:a})}function Bu(e,t,r){const n=N(r.round)?!0:r.round,o=(a,s)=>(a=Gs(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Ou(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class I{constructor(t){const r=t.zone||te.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Qe("invalid input"):null)||(r.isValid?null:zn(r));this.ts=N(t.ts)?te.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=Vn(this.ts,s),n=Number.isNaN(o.year)?new Qe("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||X.create(),this.invalid=n,this.weekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=Ou(arguments),[n,o,i,a,s,l,c]=r;return Lu({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=Ou(arguments),[n,o,i,a,s,l,c]=r;return t.zone=ye.utcInstance,Lu({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=oy(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const o=wt(r.zone,te.defaultZone);return o.isValid?new I({ts:n,zone:o,loc:X.fromObject(r)}):I.invalid(zn(o))}static fromMillis(t,r={}){if(Zt(t))return t<-Eu||t>Eu?I.invalid("Timestamp out of range"):new I({ts:t,zone:wt(r.zone,te.defaultZone),loc:X.fromObject(r)});throw new Be(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Zt(t))return new I({ts:t*1e3,zone:wt(r.zone,te.defaultZone),loc:X.fromObject(r)});throw new Be("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=wt(r.zone,te.defaultZone);if(!n.isValid)return I.invalid(zn(n));const o=te.now(),i=N(r.specificOffset)?n.offset(o):r.specificOffset,a=zo(t,Pu),s=!N(a.ordinal),l=!N(a.year),c=!N(a.month)||!N(a.day),u=l||c,d=a.weekYear||a.weekNumber,h=X.fromObject(r);if((u||s)&&d)throw new qr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&s)throw new qr("Can't mix ordinal dates with month/day");const g=d||a.weekday&&!u;let p,w,y=Vn(o,i);g?(p=Mb,w=Cb,y=Qa(y)):s?(p=Ib,w=Eb,y=Yi(y)):(p=m0,w=h0);let k=!1;for(const q of p){const ue=a[q];N(ue)?k?a[q]=w[q]:a[q]=y[q]:k=!0}const S=g?$b(a):s?Tb(a):u0(a),P=S||d0(a);if(P)return I.invalid(P);const R=g?Tu(a):s?Cu(a):a,[ae,he]=so(R,i,n),ne=new I({ts:ae,zone:n,o:he,loc:h});return a.weekday&&u&&t.weekday!==ne.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${ne.toISO()}`):ne}static fromISO(t,r={}){const[n,o]=Gy(t);return Lr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=Yy(t);return Lr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Qy(t);return Lr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(N(t)||N(r))throw new Be("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=X.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,u]=Sb(a,t,r);return u?I.invalid(u):Lr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=rb(t);return Lr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Be("need to specify a reason the DateTime is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(te.throwOnInvalid)throw new Dw(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=o0(t,X.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return r0(we.parseFormat(t),X.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ji(this).weekYear:NaN}get weekNumber(){return this.isValid?Ji(this).weekNumber:NaN}get weekday(){return this.isValid?Ji(this).weekday:NaN}get ordinal(){return this.isValid?Yi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Vr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Vr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Vr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Vr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=si(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,u=Vn(l,a),d=Vn(c,s);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[Dt(this,{ts:l}),Dt(this,{ts:c})]:[this]}get isInLeapYear(){return kn(this.year)}get daysInMonth(){return Ho(this.year,this.month)}get daysInYear(){return this.isValid?Gr(this.year):NaN}get weeksInWeekYear(){return this.isValid?qo(this.weekYear):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=we.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(ye.instance(t),r)}toLocal(){return this.setZone(te.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=wt(t,te.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=so(a,i,t)}return Dt(this,{ts:o,zone:t})}else return I.invalid(zn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Dt(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=zo(t,Pu),n=!N(r.weekYear)||!N(r.weekNumber)||!N(r.weekday),o=!N(r.ordinal),i=!N(r.year),a=!N(r.month)||!N(r.day),s=i||a,l=r.weekYear||r.weekNumber;if((s||o)&&l)throw new qr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&o)throw new qr("Can't mix ordinal dates with month/day");let c;n?c=Tu({...Qa(this.c),...r}):N(r.ordinal)?(c={...this.toObject(),...r},N(r.day)&&(c.day=Math.min(Ho(c.year,c.month),c.day))):c=Cu({...Yi(this.c),...r});const[u,d]=so(c,this.o,this.zone);return Dt(this,{ts:u,o:d})}plus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t);return Dt(this,Mu(this,r))}minus(t){if(!this.isValid)return this;const r=z.fromDurationLike(t).negate();return Dt(this,Mu(this,r))}startOf(t){if(!this.isValid)return this;const r={},n=z.normalizeUnit(t);switch(n){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(n==="weeks"&&(r.weekday=1),n==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,r={}){return this.isValid?we.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Qi}toLocaleString(t=Ro,r={}){return this.isValid?we.create(this.loc.clone(r),t).formatDateTime(this):Qi}toLocaleParts(t={}){return this.isValid?we.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Xi(this,a);return s+="T",s+=Iu(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Xi(this,t==="extended"):null}toISOWeekDate(){return jn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+Iu(this,a==="extended",r,t,n,i):null}toRFC2822(){return jn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return jn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Xi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),jn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Qi}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return z.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=iy(r).map(z.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=cb(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ee.fromDateTimes(this,t):this}hasSame(t,r){if(!this.isValid)return!1;const n=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r)<=n&&n<=o.endOf(r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Bu(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Bu(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new Be("min requires all arguments be DateTimes");return vu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new Be("max requires all arguments be DateTimes");return vu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=X.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return n0(a,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Ro}static get DATE_MED(){return vh}static get DATE_MED_WITH_WEEKDAY(){return Hw}static get DATE_FULL(){return wh}static get DATE_HUGE(){return yh}static get TIME_SIMPLE(){return bh}static get TIME_WITH_SECONDS(){return kh}static get TIME_WITH_SHORT_OFFSET(){return xh}static get TIME_WITH_LONG_OFFSET(){return Ah}static get TIME_24_SIMPLE(){return Sh}static get TIME_24_WITH_SECONDS(){return $h}static get TIME_24_WITH_SHORT_OFFSET(){return Th}static get TIME_24_WITH_LONG_OFFSET(){return Ch}static get DATETIME_SHORT(){return Eh}static get DATETIME_SHORT_WITH_SECONDS(){return Mh}static get DATETIME_MED(){return Ih}static get DATETIME_MED_WITH_SECONDS(){return Ph}static get DATETIME_MED_WITH_WEEKDAY(){return qw}static get DATETIME_FULL(){return Lh}static get DATETIME_FULL_WITH_SECONDS(){return Bh}static get DATETIME_HUGE(){return Oh}static get DATETIME_HUGE_WITH_SECONDS(){return Dh}}function Br(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&Zt(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new Be(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function Ks(e){const t=I.fromObject(o1(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Pb(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function Lb(e,t){return e.includes(t)}var Du;(function(e){e.Upper="upper",e.Lower="lower"})(Du||(Du={}));function Sn(e){return!!e&&typeof e=="object"}const Bb=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function lo(e,t){return e?Bb.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Vo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ja(e){return Array.isArray(e)?"array":typeof e}function cr(e,t){return Ja(e)===t}function Ob(e,t){let r=!1;const n=Vo(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Vo(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Db(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ja(e)===Ja(t)&&r}const _s=Symbol("and"),g0=Symbol("or"),p0=Symbol("exact"),v0=Symbol("enum"),w0=Symbol("unknown"),y0="__vir__shape__definition__key__do__not__use__in__actual__objects";function b0(e){return lo(e,y0)}const k0="__vir__shape__specifier__key__do__not__use__in__actual__objects",Nb=[_s,g0,p0,v0,w0];function Rb(...e){return Hb(e,_s)}function ui(e){return $n(e,g0)}function el(e){return $n(e,_s)}function tl(e){return $n(e,p0)}function rl(e){return $n(e,v0)}function nl(e){return $n(e,w0)}function $n(e,t){const r=di(e);return!!r&&r.specifierType===t}function Hb(e,t){return{[k0]:!0,specifierType:t,parts:e}}function co(e,t){const r=di(t);if(r){if(el(r))return r.parts.every(n=>co(e,n));if(ui(r))return r.parts.some(n=>co(e,n));if(tl(r))return Sn(e)?co(e,r.parts[0]):e===r.parts[0];if(rl(r))return Object.values(r.parts[0]).some(n=>n===e);if(nl(r))return!0}return Db(e,t)}function di(e){if(Sn(e)&&lo(e,k0)){if(!lo(e,"parts")||!cr(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!lo(e,"specifierType")||!Lb(Nb,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Xa(e){return Ka(e)}function Ka(e){const t=di(e);if(t){if(ui(t)||tl(t))return Ka(t.parts[0]);if(el(t))return t.parts.reduce((r,n)=>Object.assign(r,Ka(n)),{});if(rl(t))return Object.values(t.parts[0])[0];if(nl(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return b0(e)?Xa(e.shape):e instanceof RegExp||cr(e,"array")?e:Sn(e)?Ob(e,(r,n)=>Xa(n)):e}function ol(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Xa(e),[y0]:!0}}class We extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function qb(e,t,r={}){Ht(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function x0(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Ht(e,t,r,n){if(nl(t))return!0;if(b0(t))return Ht(e,t.shape,r,n);const o=x0(r);if(di(e))throw new We(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!co(e,t))throw new We(`Subject does not match shape definition at key ${o}`);if(cr(t,"function"))return cr(e,"function");if(Sn(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(ui(t))l=t.parts.some(c=>{try{const u=Ht(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof We)return!1;throw u}});else if(el(t))l=t.parts.every(c=>{try{const u=Ht(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof We)return!1;throw u}});else if(tl(t)){const c=Ht(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(rl(t))throw new We(`Cannot compare an enum specifier to an object at ${o}`);if(cr(t,"array")&&cr(a,"array"))l=a.every((c,u)=>{const d=t.some(h=>{try{return Ht(c,h,[...r,u],n),!0}catch(g){if(g instanceof We)return!1;throw g}});return s[u]=d,d});else{const c=zb({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new We(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new We(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function zb({keys:e,options:t,shape:r,subject:n}){const o=x0(e),i={};if(Sn(r)){const a=new Set(Vo(n)),s=new Set(Vo(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new We(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var h;const c=r[l],u=ui(c)?c.parts.includes(void 0):!1,d=((h=c==null?void 0:c.includes)==null?void 0:h.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new We(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];Ht(c,u,[...e,l],t),i[l]=!0})}else throw new We(`shape definition at ${o} was not an object.`);return i}const Vb=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],jb=Vb.reduce((e,t)=>(e[t]=t,e),{}),Fb=te.defaultZone.name,il=jb.UTC;var Nu;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Nu||(Nu={}));const Zb=["hour","minute","second","millisecond"],Wb=ol({hour:14,minute:19,second:7,millisecond:877,timezone:il}),Ub=ol({year:2023,month:6,day:5,timezone:il}),Gb=ol(Rb(Ub,Wb));var Ru;(function(e){e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Ru||(Ru={}));const Yb=te.defaultLocale;function Qb(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Hu(e,t){const r=Ks(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??Yb});return Qb(r)}function Jb(e){if(!Vr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Xb(e){qb(e,Gb),Jb(e.timezone),Ks(e)}function Kb(e){try{return Xb(e),!0}catch{return!1}}function _b(e,t){const r=e5(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return Pb(r,t)}function qu(e){const t=I.fromJSDate(new Date(e));if(t.isValid)return t}function e5(e,t){if(Kb(e)&&(e=Ks(e).toMillis()),I.isDateTime(e))return e.setZone(t);if(oc(e,"number"))return I.fromMillis(e,{zone:il}).setZone(t);if(oc(e,"string")){const r=I.fromISO(e,{zone:t});return r.isValid?r:qu(e)}else if(e instanceof Date)return I.fromJSDate(e).setZone(t);return qu(e)}function t5(e){return _b(Date.now(),e)}function r5(){return t5(Fb)}const n5={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};i1(n5,Zb);function o5(e){return{date:Hu(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Hu(e,{timeStyle:"short"}).replace(/\s/g," ")}}const Ki=re()({tagName:"toniq-date-time",renderCallback({inputs:e}){const t=o5(e.fullDate),r=[e.parts.date&&t.date,e.parts.time&&t.time].filter(yn).join(" "),n=[t.date,t.time,`(${e.fullDate.timezone})`].join(" ");return f`
            <span title=${n}>${r}</span>
        `}}),i5="data-test-id",ar=Et(class extends ct{constructor(e){super(e),this.element=a5(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(i5,e),Me}});function a5(e,t,r){s5(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function s5(e,t){if(e.type!==fn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var _a=(e=>(e.Up="up",e.Down="down",e))(_a||{});const Fn=re()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:K(),openChange:K()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
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
            ${me};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${Mt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${_.interaction} linear transform;
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
            ${Z(x.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${Z(x.pagePrimary)}
            ${No.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${No.popupShadowReversed};
        }

        .selected-label-prefix {
            ${J.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${ze};
        }

        .select-options .option.selected {
            ${Z(x.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${x.accentTertiary.backgroundColor};
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
            ${Yt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?f`
                  <${T.assign({icon:n.icon})}
                      ${ar("rendered-input-icon")}
                  ></${T}>
              `:"",s=n.selectedLabelPrefix?f`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return f`
            <button
                ?disabled=${!!n.disabled}
                class=${Ce({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${T.assign({icon:Qf})}
                            class="trigger-icon"
                        ></${T}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(l=>f`
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
        `}}),Ue=re()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>!!e.linkDisabled},events:{routeChangeTriggered:K()},styles:({hostClasses:e})=>v`
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
            color: ${x.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${x.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} a {
            cursor: default;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){if(e.linkDisabled){o.preventDefault();return}e.treatAsRouteChange&&Os(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?f`
                <a
                    href=${e.url}
                    ${$("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:f`
                <a href=${e.url} ${$("click",n)}><slot></slot></a>
            `}}),es=360,A0=8;function S0(e){return(e-A0)/2}const ur=ut({"main-image-size":es,"secondary-image-size":S0(es)}),nt=re()({tagName:"toniq-featured-flip-card-footer",styles:v`
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

        ${oe}, ${Ue} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${ur["secondary-image-size"].value} * 2);
        }

        ${Ue} ${oe} {
            width: 100%;
        }

        ${Ue} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${ur["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:K(),footerFlipCardButtonClick:K()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?tt(n).map(i=>{const a=n[i];if(!a)return;const s=mh[i];return f`
                          <${Ue.assign({newTab:!0,url:a})}>
                              <${T.assign({icon:s})}></${T}>
                          </${Ue}>
                      `}).filter(yn):"";return f`
            <div class="buttons">
                ${e.viewMoreButtonUrl?f`
                          <${Ue.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${$(Ue.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${oe.assign({text:e.viewMoreButtonText,buttonStyle:ln.Outline})}></${oe}>
                          </${Ue}>
                      `:f`
                          <${oe.assign({text:e.viewMoreButtonText,buttonStyle:ln.Outline})}
                              ${$("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${oe}>
                      `}
                ${e.flipCardButtonText?f`
                          <${oe.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${$("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${oe}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function l5(e){return!!e}function $0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function c5({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function T0(e){return e?e instanceof Error?e.message:jo(e,"message")?String(e.message):String(e):""}function _i(e){return e instanceof Error?e:new Error(T0(e))}function u5(e){return!!e&&typeof e=="object"}const d5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function jo(e,t){return e?d5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function cn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function C0(e,t,r=!1,n={}){const o=cn(e),i=new Set(cn(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!jo(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||E0(l,c,s,r,n[a]??{})})}function E0(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{jo(t,"constructor")&&(!jo(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{E0(l,d,r,n,o);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${T0(h)}`)}}).filter(l5).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):u5(t)&&C0(e,t,n,o)}function al(e){return Array.isArray(e)?"array":typeof e}function Fo(e,t){return al(e)===t}function f5(e,t,r){if(!Fo(e,t))throw new TypeError(`'${r}' is of type '${al(e)}' but type '${t}' was expected.`)}function zu({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(Fo(r,"object")?C0(n,r):f5(n,al(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function h5(e,t){return cn(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function m5(e,t){return h5(e,r=>!t.includes(r))}function M0(e,t){let r=!1;const n=cn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(cn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function g5(e){const t=fi();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class p5 extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function v5(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new p5(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function fi(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${fi.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const w5="px";function Zn(e){return y5(e,w5)}function y5(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function b5(e,t){return e<t}function k5(e,t){return e>t}const Vu={width:250,height:250};function x5({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?k5:b5)(t.width/t.height,e.width/e.height)?"width":"height"}function ea({box:e,constraint:t,constraintType:r}){const n=x5({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function I0({box:e,ratio:t}){return M0(e,(r,n)=>n*t)}function ts({box:e,min:t,max:r}){return M0(e,(n,o)=>c5({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function P0({min:e,max:t,box:r}){const n=L0({min:e,max:t,box:r}),o=I0({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Vu.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Vu.width)}}function L0({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?ea({box:r,constraint:e,constraintType:"min"}):1,o=t?ea({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=I0({ratio:i,box:r});return(e?ea({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function A5(e){const t=S5(e);return Fo(t,"object")||Fo(t,"array")}function S5(e){const t=zu({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=$5(e);return zu({jsonString:r,errorHandler:()=>{}})}function $5(e){return $0(e).replace(/,\s*([}\]])/,"$1")}const sl="vir-resizable-image";function T5(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var kr=T5();function C5(){try{if(!kr||!kr.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function ll(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const E=Promise;function Y(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function sr(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function dt(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function cl(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const rs="local-forage-detect-blob-support";let Wn;const qe={},E5=Object.prototype.toString,Tn="readonly",hi="readwrite";function M5(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function I5(e){return new E(function(t){var r=e.transaction(rs,hi),n=ll([""]);r.objectStore(rs).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function P5(e){return typeof Wn=="boolean"?E.resolve(Wn):I5(e).then(function(t){return Wn=t,Wn})}function Zo(e){var t=qe[e.name],r={};r.promise=new E(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function ns(e){var t=qe[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function os(e,t){var r=qe[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function B0(e,t){return new E(function(r,n){if(qe[e.name]=qe[e.name]||R0(),e.db)if(t)Zo(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=kr.open.apply(kr,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(rs)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),ns(e)}})}function ul(e){return B0(e,!1)}function dl(e){return B0(e,!0)}function O0(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function L5(e){return new E(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function D0(e){var t=M5(atob(e.data));return ll([t],{type:e.type})}function N0(e){return e&&e.__local_forage_encoded_blob}function B5(e){var t=this,r=t._initReady().then(function(){var n=qe[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return sr(r,e,e),r}function O5(e){Zo(e);for(var t=qe[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,ul(e).then(o=>(e.db=o,O0(e)?dl(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw os(e,o),o})}function ft(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return E.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),dl(e)}).then(()=>O5(e).then(function(){ft(e,t,r,n-1)})).catch(r);r(i)}}function R0(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function D5(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=qe[r.name];o||(o=R0(),qe[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=B5);var i=[];function a(){return E.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return E.all(i).then(function(){return r.db=o.db,ul(r)}).then(function(u){return r.db=u,O0(r,t._defaultConfig.version)?dl(r):u}).then(function(u){r.db=o.db=u,t._dbInfo=r;for(var d=0;d<c.length;d++){var h=c[d];h!==t&&(h._dbInfo.db=r.db,h._dbInfo.version=r.version)}})}function N5(e,t){var r=this;e=dt(e);var n=new E(function(o,i){r.ready().then(function(){ft(r._dbInfo,Tn,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),N0(u)&&(u=D0(u)),o(u)},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return Y(n,t),n}function R5(e,t){var r=this,n=new E(function(o,i){r.ready().then(function(){ft(r._dbInfo,Tn,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var h=d.value;N0(h)&&(h=D0(h));var g=e(h,d.key,u++);g!==void 0?o(g):d.continue()}else o()},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return Y(n,t),n}function H5(e,t,r){var n=this;e=dt(e);var o=new E(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,E5.call(t)==="[object Blob]"?P5(s.db).then(function(l){return l?t:L5(t)}):t}).then(function(l){ft(n._dbInfo,hi,function(c,u){if(c)return a(c);try{var d=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var h=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),i(l)},u.onabort=u.onerror=function(){var g=h.error?h.error:h.transaction.error;a(g)}}catch(g){a(g)}})}).catch(a)});return Y(o,r),o}function q5(e,t){var r=this;e=dt(e);var n=new E(function(o,i){r.ready().then(function(){ft(r._dbInfo,hi,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return Y(n,t),n}function z5(e){var t=this,r=new E(function(n,o){t.ready().then(function(){ft(t._dbInfo,hi,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return Y(r,e),r}function V5(e){var t=this,r=new E(function(n,o){t.ready().then(function(){ft(t._dbInfo,Tn,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return Y(r,e),r}function j5(e,t){var r=this,n=new E(function(o,i){if(e<0){o(null);return}r.ready().then(function(){ft(r._dbInfo,Tn,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){o(null);return}e===0||c?o(d.key):(c=!0,d.advance(e))},u.onerror=function(){i(u.error)}}catch(d){i(d)}})}).catch(i)});return Y(n,t),n}function F5(e){var t=this,r=new E(function(n,o){t.ready().then(function(){ft(t._dbInfo,Tn,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){o(l.error)}}catch(u){o(u)}})}).catch(o)});return Y(r,e),r}function Z5(e,t){t=cl.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=E.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?E.resolve(n._dbInfo.db):ul(e).then(s=>{const l=qe[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Zo(e);const c=qe[e.name],u=c.forages;s.close();for(let h=0;h<u.length;h++){const g=u[h];g._dbInfo.db=null,g._dbInfo.version=l}return new E((h,g)=>{const p=kr.open(e.name,l);p.onerror=w=>{p.result.close(),g(w)},p.onupgradeneeded=()=>{var w=p.result;w.deleteObjectStore(e.storeName)},p.onsuccess=()=>{const w=p.result;w.close(),h(w)}}).then(h=>{c.db=h;for(let g=0;g<u.length;g++){const p=u[g];p._dbInfo.db=h,ns(p._dbInfo)}}).catch(h=>{throw(os(e,h)||E.resolve()).catch(()=>{}),h})}):o=a.then(s=>{Zo(e);const l=qe[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const h=c[u];h._dbInfo.db=null}return new E((h,g)=>{var p=kr.deleteDatabase(e.name);p.onerror=()=>{const w=p.result;w&&w.close(),g(p.error)},p.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},p.onsuccess=()=>{const w=p.result;w&&w.close(),h(w)}}).then(h=>{l.db=h;for(var g=0;g<c.length;g++){const p=c[g];ns(p._dbInfo)}}).catch(h=>{throw(os(e,h)||E.resolve()).catch(()=>{}),h})})}return Y(o,t),o}var W5={_driver:"asyncStorage",_initStorage:D5,_support:C5(),iterate:R5,getItem:N5,setItem:H5,removeItem:q5,clear:z5,length:V5,key:j5,keys:F5,dropInstance:Z5};function U5(){return typeof openDatabase=="function"}var bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G5="~~local_forage_type~",ju=/^~~local_forage_type~([^~]+)~/,Wo="__lfsc__:",is=Wo.length,fl="arbf",as="blob",H0="si08",q0="ui08",z0="uic8",V0="si16",j0="si32",F0="ur16",Z0="ui32",W0="fl32",U0="fl64",Fu=is+fl.length,Zu=Object.prototype.toString;function G0(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)i=bt.indexOf(e[n]),a=bt.indexOf(e[n+1]),s=bt.indexOf(e[n+2]),l=bt.indexOf(e[n+3]),u[o++]=i<<2|a>>4,u[o++]=(a&15)<<4|s>>2,u[o++]=(s&3)<<6|l&63;return c}function ss(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=bt[t[n]>>2],r+=bt[(t[n]&3)<<4|t[n+1]>>4],r+=bt[(t[n+1]&15)<<2|t[n+2]>>6],r+=bt[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Y5(e,t){var r="";if(e&&(r=Zu.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Zu.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Wo;e instanceof ArrayBuffer?(n=e,o+=fl):(n=e.buffer,r==="[object Int8Array]"?o+=H0:r==="[object Uint8Array]"?o+=q0:r==="[object Uint8ClampedArray]"?o+=z0:r==="[object Int16Array]"?o+=V0:r==="[object Uint16Array]"?o+=F0:r==="[object Int32Array]"?o+=j0:r==="[object Uint32Array]"?o+=Z0:r==="[object Float32Array]"?o+=W0:r==="[object Float64Array]"?o+=U0:t(new Error("Failed to get type for BinaryArray"))),t(o+ss(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=G5+e.type+"~"+ss(this.result);t(Wo+as+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function Q5(e){if(e.substring(0,is)!==Wo)return JSON.parse(e);var t=e.substring(Fu),r=e.substring(is,Fu),n;if(r===as&&ju.test(t)){var o=t.match(ju);n=o[1],t=t.substring(o[0].length)}var i=G0(t);switch(r){case fl:return i;case as:return ll([i],{type:n});case H0:return new Int8Array(i);case q0:return new Uint8Array(i);case z0:return new Uint8ClampedArray(i);case V0:return new Int16Array(i);case F0:return new Uint16Array(i);case j0:return new Int32Array(i);case Z0:return new Uint32Array(i);case W0:return new Float32Array(i);case U0:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var hl={serialize:Y5,deserialize:Q5,stringToBuffer:G0,bufferToString:ss};function Y0(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function J5(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new E(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){Y0(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=hl,o}function It(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):Y0(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function X5(e,t){var r=this;e=dt(e);var n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){It(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),o(u)},function(l,c){i(c)})})}).catch(i)});return Y(n,t),n}function K5(e,t){var r=this,n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){It(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,h=0;h<d;h++){var g=u.item(h),p=g.value;if(p&&(p=a.serializer.deserialize(p)),p=e(p,g.key,h+1),p!==void 0){o(p);return}}o()},function(l,c){i(c)})})}).catch(i)});return Y(n,t),n}function Q0(e,t,r,n){var o=this;e=dt(e);var i=new E(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(u,d){d?s(d):c.db.transaction(function(h){It(h,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(g,p){s(p)})},function(h){if(h.code===h.QUOTA_ERR){if(n>0){a(Q0.apply(o,[e,l,r,n-1]));return}s(h)}})})}).catch(s)});return Y(i,r),i}function _5(e,t,r){return Q0.apply(this,[e,t,r,1])}function e4(e,t){var r=this;e=dt(e);var n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){It(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return Y(n,t),n}function t4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){It(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return Y(r,e),r}function r4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){It(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return Y(r,e),r}function n4(e,t){var r=this,n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){It(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;o(u)},function(l,c){i(c)})})}).catch(i)});return Y(n,t),n}function o4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){It(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(s,l){o(l)})})}).catch(o)});return Y(r,e),r}function i4(e){return new E(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function a4(e,t){t=cl.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new E(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(i4(a))}).then(function(i){return new E(function(a,s){i.db.transaction(function(l){function c(g){return new E(function(p,w){l.executeSql(`DROP TABLE IF EXISTS ${g}`,[],function(){p()},function(y,k){w(k)})})}for(var u=[],d=0,h=i.storeNames.length;d<h;d++)u.push(c(i.storeNames[d]));E.all(u).then(function(){a()}).catch(function(g){s(g)})},function(l){s(l)})})}):o=E.reject("Invalid arguments"),Y(o,t),o}var s4={_driver:"webSQLStorage",_initStorage:J5,_support:U5(),iterate:K5,getItem:X5,setItem:_5,removeItem:e4,clear:t4,length:r4,key:n4,keys:o4,dropInstance:a4};function l4(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function J0(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function c4(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function u4(){return!c4()||localStorage.length>0}function d4(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=J0(e,t._defaultConfig),u4()?(t._dbInfo=r,r.serializer=hl,E.resolve()):E.reject()}function f4(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return Y(r,e),r}function h4(e,t){var r=this;e=dt(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return Y(n,t),n}function m4(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(i)===0){var d=localStorage.getItem(u);if(d&&(d=o.serializer.deserialize(d)),d=e(d,u.substring(a),l++),d!==void 0)return d}}});return Y(n,t),n}function g4(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return Y(n,t),n}function p4(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return Y(r,e),r}function v4(e){var t=this,r=t.keys().then(function(n){return n.length});return Y(r,e),r}function w4(e,t){var r=this;e=dt(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return Y(n,t),n}function y4(e,t,r){var n=this;e=dt(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new E(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(d),s(d)}})})});return Y(o,r),o}function b4(e,t){if(t=cl.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new E(function(i){e.storeName?i(J0(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=E.reject("Invalid arguments"),Y(o,t),o}var k4={_driver:"localStorageWrapper",_initStorage:d4,_support:l4(),iterate:m4,getItem:h4,setItem:y4,removeItem:w4,clear:f4,length:v4,key:g4,keys:p4,dropInstance:b4};const x4=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),A4=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(x4(e[n],t))return!0;n++}return!1},X0=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Or={},Wu={},mr={INDEXEDDB:W5,WEBSQL:s4,LOCALSTORAGE:k4},S4=[mr.INDEXEDDB._driver,mr.WEBSQL._driver,mr.LOCALSTORAGE._driver],uo=["dropInstance"],ta=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(uo),$4={description:"",driver:S4.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function T4(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function ra(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(X0(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class ml{constructor(t){for(let r in mr)if(mr.hasOwnProperty(r)){const n=mr[r],o=n._driver;this[r]=o,Or[o]||this.defineDriver(n)}this._defaultConfig=ra({},$4),this._config=ra({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new E(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=ta.concat("_initStorage");for(let h=0,g=c.length;h<g;h++){const p=c[h];if((!A4(uo,p)||t[p])&&typeof t[p]!="function"){a(l);return}}(function(){const h=function(g){return function(){const p=new Error(`Method ${g} is not implemented by the current driver`),w=E.reject(p);return Y(w,arguments[arguments.length-1]),w}};for(let g=0,p=uo.length;g<p;g++){const w=uo[g];t[w]||(t[w]=h(w))}})();const d=function(h){Or[s]&&console.info(`Redefining LocalForage driver: ${s}`),Or[s]=t,Wu[s]=h,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,a):d(!!t._support):d(!0)}catch(s){a(s)}});return sr(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Or[t]?E.resolve(Or[t]):E.reject(new Error("Driver not found."));return sr(o,r,n),o}getSerializer(t){const r=E.resolve(hl);return sr(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return sr(n,t,t),n}setDriver(t,r,n){const o=this;X0(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(u){return o._extend(u),a(),o._ready=o._initStorage(o._config),o._ready}function l(u){return function(){let d=0;function h(){for(;d<u.length;){let p=u[d];return d++,o._dbInfo=null,o._ready=null,o.getDriver(p).then(s).catch(h)}a();const g=new Error("No available storage method found.");return o._driverSet=E.reject(g),o._driverSet}return h()}}const c=this._driverSet!==null?this._driverSet.catch(()=>E.resolve()):E.resolve();return this._driverSet=c.then(()=>{const u=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(u).then(d=>{o._driver=d._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const u=new Error("No available storage method found.");return o._driverSet=E.reject(u),o._driverSet}),sr(this._driverSet,r,n),this._driverSet}supports(t){return!!Wu[t]}_extend(t){ra(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=ta.length;t<r;t++)T4(this,ta[t])}createInstance(t){return new ml(t)}}const C4=new ml,E4=C4;async function K0(){return await caches.open(sl)}async function M4(e){return await(await K0()).match(e)}const Uu=E4.createInstance({name:sl});async function I4(e,t){await(await K0()).put(e,t)}const na=new Map;async function P4(e,t){var n;if(t=t,!na.has(e)){const o=fi();na.set(e,o.promise);try{const i=new Request(e),a=t?await M4(i):void 0,s=a??await fetch(i),l=t?await Uu.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{Uu.setItem(e,c)}catch{}const u={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{I4(i,s)}catch{}o.resolve(u)}catch(i){throw o.reject(i),i}}const r=await na.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var C;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(C||(C={}));const L4=[C.Text,C.Json],B4=[C.Audio];function Gu(e){return L4.includes(e)}function O4(e){return B4.includes(e)}async function D4(e,t){return e.includes("video")?C.Video:e.includes("svg")||t.includes("<svg")?C.Svg:e.includes("html")||t.includes("<html")?C.Html:A5(t)?C.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?C.Text:e.includes("audio")?C.Audio:e.includes("pdf")?C.Pdf:C.Image}function N4({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===C.Image?zt(f`
            <img src=${r} />
        `):e===C.Video?zt(f`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===C.Text||e===C.Json?zt(f`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===C.Audio?zt(f`
                <audio controls src=${r}></audio>
            `):t}function R4(e,t,r){if(t===C.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===C.Html&&r)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function Yu({imageUrl:e,blockAutoPlay:t,textTransformer:r=i=>i,allowPersistentCache:n,removeConsoleLogs:o}){const i=await P4(e,n);if(!i.ok)throw new Error(`Failed to load '${e}'`);const a=await D4(i.contentType,i.text),s=r(R4(i.text,a,o));return{templateString:N4({imageText:s,imageType:a,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:a}}class ls extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let H4=!1;function q4(){return H4}function z4(e){return e?e instanceof Error?e.message:Z4(e,"message")?String(e.message):String(e):""}function V4(e){return e instanceof Error?e:new Error(z4(e))}function j4(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}const F4=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Z4(e,t){return e?F4.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function W4(e){const t=_0();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function _0(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_0.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function em(e,t,r){return j4({callback(){return U4(e,t,r),!0},fallbackValue:!1})}function U4(e,t,r){if(e==="*")r||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var Qt;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(Qt||(Qt={}));const G4=globalThis.crypto;function Y4(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return G4.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Q4(e,t,r){return r.type===e&&r.direction===t}function J4(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function X4({message:e,verifyChildData:t,iframeElement:r},n,o,i,a){if(!r)throw new Error("No iframe element was provided.");let s=0,l=!1,c,u,d,h=!1;const g={...e,direction:Qt.FromParent,messageId:Y4(32)},p=e.type;function w(k){try{if(!em(n,k,!1))return;const S=k.data;if(S.type==="error")throw new Error(`Child threw an error: ${S.data}`);if(q4(),S&&h&&Q4(p,Qt.FromChild,S)&&S.messageId===g.messageId){let P=!1;try{P=t?t(S.data):!0}catch{}if(!P)return;l=!0,u=k,c=S}}catch(S){d=V4(S)}}a.addEventListener("message",w);const y=Date.now();for(;!l&&Date.now()-y<o&&!d;){if(!r.isConnected)throw new ls;const k=r.contentWindow;k&&(h=!0,k.postMessage(g,{targetOrigin:n})),await W4(i||J4(s)),s++}if(a.removeEventListener("message",w),d)throw d;if(!l)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!u)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:u}}function K4({timeoutMs:e=1e4}={timeoutMs:1e4}){return{async sendMessageToChild(t){if(t.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await X4(t,t.childOrigin,t.timeoutMs||e,t.intervalMs,t.globalObject??globalThis)},listenForParentMessages(t){const r=t.globalObject??globalThis;async function n(o){var l;if(!em(t.parentOrigin,o,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const i=o.data,a=await t.listener({...i,originalEvent:o},()=>{r.removeEventListener("message",n)}),s={type:i.type,direction:Qt.FromChild,data:a,messageId:i.messageId};r.parent.postMessage(s,{targetOrigin:t.parentOrigin})}r.addEventListener("message",n)}}}var $e;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})($e||($e={}));var de;(function(e){e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded"})(de||(de={}));const Ke=K4({});async function _4(e,t){const r=fi();e.onload=()=>{r.resolve()};try{await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.FrameReady},iframeElement:e,timeoutMs:t})}catch{await r.promise,await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.FrameReady},iframeElement:e,timeoutMs:t})}}async function e3({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await _4(n,s),i&&await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(u){return!!(u&&!isNaN(u.width)&&!isNaN(u.height)&&u.width&&u.height)}})).data;return await tm({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.ImageElementLoaded},iframeElement:n,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function tm({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:a??r},d=Gu(i.imageType)||O4(i.imageType)?ts(u):P0(u);c.style.width=Zn(Math.floor(d.width)),c.style.height=Zn(Math.floor(d.height));const h=ts({min:e,max:t,box:d});d.height<h.height?n.classList.add($e.VerticallyCenter):n.classList.remove($e.VerticallyCenter),n.style.width=Zn(h.width),n.style.height=Zn(h.height);const g=L0({min:e,max:t,box:a??r});if(s){if(g>3?await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SizeDetermined,data:d},iframeElement:o,timeoutMs:l}),i.imageType===C.Html){const p=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},w={width:g*p.width,height:g*p.height};await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScale,data:w},iframeElement:o,timeoutMs:l})}else if(Gu(i.imageType)){const p=a??r;if(p.height<d.height){const w=d.width/p.width,y=d.height/p.height,k=Math.min(w,y);await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScale,data:{height:k,width:k}},iframeElement:o,timeoutMs:l})}}}}const Un={x:16,y:8};var ad,sd;function t3(e,t,r,n){const o=Math.random(),i=f(ad||(ad=vi([`
        <script>
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

            function isVideoLoaded() {
                const video = document.querySelector('video');

                if (video) {
                    return video.readyState >= 3;
                } else {
                    return false;
                }
            }

            function isImageLoaded() {
                const image = document.querySelector('img');

                return image?.complete;
            }

            function isAudioLoaded() {
                const audioElement = document.querySelector('audio');

                return audioElement?.readyState >= 3;
            }

            const loadedGrabbers = {
                `,`: () => true,
                `,`: () => true,
                `,`: () => isImageLoaded,
                `,`: isVideoLoaded,
                `,`: () => true,
                `,`: () => true,
                `,`: isAudioLoaded,
            };

            function isLoaded() {
                return loadedGrabbers[imageType]();
            }

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
                        if (isLoaded()) {
                            sendMessageToParent();
                        }
                        return;
                    }
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
                        document.querySelector('html').classList.add('scaled');
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
                                const scroll = `,`;
                                const textElement = document.querySelector('.text');

                                if (!scroll) {
                                    textElement.style.height = totalHeight + 'px';
                                    textElement.style.setProperty('-webkit-line-clamp', totalLines);
                                }
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

            function isVideoLoaded() {
                const video = document.querySelector('video');

                if (video) {
                    return video.readyState >= 3;
                } else {
                    return false;
                }
            }

            function isImageLoaded() {
                const image = document.querySelector('img');

                return image?.complete;
            }

            function isAudioLoaded() {
                const audioElement = document.querySelector('audio');

                return audioElement?.readyState >= 3;
            }

            const loadedGrabbers = {
                `,`: () => true,
                `,`: () => true,
                `,`: () => isImageLoaded,
                `,`: isVideoLoaded,
                `,`: () => true,
                `,`: () => true,
                `,`: isAudioLoaded,
            };

            function isLoaded() {
                return loadedGrabbers[imageType]();
            }

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
                        if (isLoaded()) {
                            sendMessageToParent();
                        }
                        return;
                    }
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
                        document.querySelector('html').classList.add('scaled');
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
                                const scroll = `,`;
                                const textElement = document.querySelector('.text');

                                if (!scroll) {
                                    textElement.style.height = totalHeight + 'px';
                                    textElement.style.setProperty('-webkit-line-clamp', totalLines);
                                }
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
    `])),e.imageType,r??"",C.Svg,C.Html,C.Image,C.Video,C.Text,C.Json,C.Audio,C.Svg,C.Html,C.Image,C.Video,C.Text,C.Json,C.Audio,Qt.FromChild,Qt.FromChild,de.ImageElementLoaded,de.FrameReady,de.SendScale,de.SendScalingMethod,de.SendSize,de.ForceSize,de.SizeDetermined,C.Json,C.Text,Un.y,n,C.Audio),a=f(sd||(sd=vi([`
        <!DOCTYPE html>
        <html class="image-type-`," ",`">
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
                        overflow: hidden;
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

                    /*
                        If the html body has been scaled then we don't want to allow scrolling.
                    */
                    html.allow-scrolling:not(.scaled) {
                        overflow-y: auto;
                    }

                    /*
                        If the html body has been scaled then we don't want to allow scrolling.
                    */
                    html.allow-scrolling:not(.scaled) body {
                        max-height: unset;
                        overflow: unset;
                    }
                </style>
                <script>
                    function doNothing() {}
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),e.imageType,n?"allow-scrolling":"",C.Image,C.Svg,C.Video,C.Text,C.Json,C.Text,C.Json,C.Text,C.Json,C.Text,C.Json,Un.y,Un.x,C.Text,C.Json,Un.y,o,t??"",i);return $0(zt(a)).replace(String(o),`
${e.templateString}
`)}const r3=[C.Html,C.Video,C.Audio,C.Pdf],n3=[C.Html,C.Text,C.Json];function Qu({blockInteractionInput:e,imageType:t,allowScrolling:r}){return typeof e=="boolean"?!e:r3.includes(t)?!0:!!(r&&n3.includes(t))}const o3=1e4,i3={imageData:Yg({async updateCallback(e,t){if(t.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const r={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!e.blockPersistentCache,removeConsoleLogs:!e.allowConsoleLogs};let n;try{n=await v5(e.timeoutMs,Yu(r))}catch{await g5(1e3);try{n=await Yu(r)}catch(i){throw i}}if(n)return n;throw new Error("no image data result")}}),error:void 0},Gn=Es()({tagName:sl,stateInitStatic:i3,events:{settled:K(),imageDataCalculated:K(),errored:K()},styles:v`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${O($e.VerticallyCenter)}) {
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

        :host(.${O($e.HideLoading)}) .loading-wrapper,
        :host(.${O($e.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${O($e.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${O($e.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[oa];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??o3;e.imageData.updateTrigger(m5({...t,timeoutMs:a},["textTransformer"]),{textTransformer:t.textTransformer,updateTriggered(){e.error&&r({error:void 0}),n.classList.remove($e.HideLoading),o(new i.settled(!1)),n.classList.remove($e.VerticallyCenter)}});const s=t.min&&t.max?ts({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?P0({min:s,max:l,box:t.forcedOriginalImageSize}):void 0,u=rc(e.imageData,"",y=>{if(o(new i.imageDataCalculated(y)),y.imageType===C.Pdf)return f`
                        <iframe
                            src=${y.imageUrl}
                            ${xo(async k=>{try{await tm({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:k,imageData:y,imageDimensions:l??{width:500,height:500},max:l,min:s,sendSizeMessage:!1,timeoutMs:a}),n[oa]="",o(new i.settled(!0)),n.classList.add($e.HideLoading)}catch(S){const P=_i(S);if(P instanceof ls)return;console.error(P),r({error:P}),o(new i.errored(P))}})}
                        ></iframe>
                    `;{const k=Qu({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})&&!!t.allowScrolling;return f`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${t3(y,t.extraHtml,t.htmlSizeQuerySelector,k)}
                            ${xo(async S=>{try{const P=await e3({min:s,max:l,host:n,iframeElement:S,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:a});n[oa]=P,o(new i.settled(!0)),n.classList.add($e.HideLoading)}catch(P){const R=_i(P);if(R instanceof ls)return;console.error(R),r({error:R}),o(new i.errored(R))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},y=>{r({error:y}),o(new i.errored(_i(y)))}),d=rc(e.imageData,Ju,y=>Qu({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})?"":Ju,()=>""),h=e.imageData instanceof Error?e.imageData:e.error,g=h?v`
                  max-width: 100%;
                  max-height: 100%;
              `:c?v`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",p=v`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,w=f`
            <div class="frame-constraint" style=${g}>${u}</div>
        `;return f`
            ${ke(!h,f`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${p}>
                ${ke(!!h,f`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${h==null?void 0:h.message}</slot>
                        </div>
                    `,w)}
            </div>
            ${d}
        `}}),Ju=f`
    <div class="click-cover"></div>
`,oa="latest-frame-srcdoc",jt=re()({tagName:"toniq-flip-card",events:{flippedChange:K()},styles:v`
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

        ${rw(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${x.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return f`
            <div
                class="flip-wrapper ${Ce({flipped:e.flipped})}"
                ${$("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),pe=re()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:K()},styles:v`
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
            max-height: ${ur["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${ur["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${A0}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${jt} {
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

        .card-face.front ${nt} {
            margin-top: 24px;
        }

        .card-face.back ${nt} {
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
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var g,p,w;const a=e.mainImageSize||es,s=S0(a);ba({onElement:n,forCssVar:ur["main-image-size"],toValue:`${a}px`}),ba({onElement:n,forCssVar:ur["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(yn).join(" "),c=f`
            <h3>${e.title}</h3>
        `,u=e.imageUrls[0],d=f`
            <${T.assign({icon:js})} slot="loading"></${T}>
        `,h=u?f`
                  <div class="big-image-wrapper">
                      <${Gn.assign({imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}>
                          ${d}
                      </${Gn}>
                  </div>
              `:"";return f`
            <${jt.assign({flipped:t.flipped})}
                ${$(nt.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(y=>f`
                                    <div class="pic-wrapper">
                                        <${Gn.assign({imageUrl:y,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}>
                                            ${d}
                                        </${Gn}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${nt.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${$(nt.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${nt}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(p=e.infoParagraphs)==null?void 0:p.map(y=>f`
                                <p>${y}</p>
                            `)}
                    </div>
                    <${nt.assign({viewMoreButtonText:l,flipCardButtonText:(w=e.infoParagraphs)!=null&&w.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${$(nt.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${nt}>
                </div>
            </${jt}>
        `}});function cs({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>cs({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function rm({value:e,allowed:t,blocked:r}){const n=t?cs({input:e,matcher:t}):!0,o=r?cs({input:e,matcher:r}):!1;return n&&!o}function Xu(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(rm({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var us=(e=>(e.Default="default",e.Outline="outline",e))(us||{});const Yn=re()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:K(),inputBlocked:K()},styles:({hostClasses:e})=>v`
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
                border-radius: ${za};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${x.pagePrimary.backgroundColor};
                border-color: ${x.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${T} {
                color: ${x.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${T} {
                color: ${x.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${x.pageSecondary.foregroundColor};
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
                border-radius: ${za};
                background-color: ${x.accentTertiary.backgroundColor};
                font: ${J.paragraphFont};
                gap: 4px;
            }

            ${Mt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

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
                color: ${x.accentTertiary.foregroundColor};
            }

            .suffix {
                ${J.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Yt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${ze};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Xu({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?f`
                  <${T.assign({icon:e.icon})}></${T}>
              `:"";return f`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${n}
                    ${$("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)rm({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:u,blocked:d}=Xu({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=u,t(new r.inputBlocked(d))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${ke(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var fo=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(fo||{});const ia=re()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>f`
            <${T.assign({icon:js,fitContainer:e.size!=="small"})}></${T}>
        `});async function a3(e){return navigator.clipboard.writeText(e)}const s3="…";function l3(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${s3}${n}`}function c3(e){return!(e%1)}function u3(e){return e.letterCount==null?4:c3(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const ve=re()({tagName:"toniq-middle-ellipsis",events:{copied:K()},cssVars:{"toniq-middle-ellipsis-text-color":x.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":x.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":x.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":x.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            /* 5 frames at 60 fps */
            transition: ${_.interaction};
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

        ${Mt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${_.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return f``;const i=e.text,a=u3(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,u=c?l3(i,a):i,d=c?i:"",h=s?_f:l?Kf:void 0,g=h?f`
                  <${T.assign({icon:h})}></${T}>
              `:"",p=f`
            <span title=${d} class="text-content">
                ${ke(!!e.copyOnClick,f`
                        <span
                            class=${Ce({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${u}
            </span>
        `;return u?s?f`
                    <button
                        tabindex="0"
                        role="link"
                        ${$("click",w=>{var k,S;const y=(S=(k=w.currentTarget)==null?void 0:k.querySelector)==null?void 0:S.call(k,"a");if(!y)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");y.click()})}
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
                            ${p} ${g}
                        </a>
                    </button>
                `:l?f`
                    <button
                        class="text-wrapper copyable"
                        ${$("click",async()=>{await a3(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${p} ${g}
                    </button>
                `:f`
                    ${p}
                `:f``}}),Ku="...";function d3(e,t,r=7,n=5){let o;e=Ur(e,1,t),r=Ur(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?aa(t-o,t):e>o?aa(Math.min(s.start,t-o),Math.min(s.end,t)):aa(1,Math.min(t,o+1));function c(d,h){return l.length+1!==t?h:[d]}const u=l[l.length-1];if(u&&u<t){const d=c(t,[Ku,t]);return[...l,...d]}else return l[0]!==1?c(1,[1,Ku]).concat(l):l}function aa(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}re()({tagName:"toniq-pagination",styles:v`
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
            ${J.labelFont}
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
    `,events:{pageChange:K()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?f``:f`
                <button
                    ${$("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${T.assign({icon:zs})}></${T}>
                </button>
                ${d3(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?f`
                                <div class="page" disabled>${n}</div>
                            `:f`
                                <button
                                    class=${Ce({page:!0,selected:e.currentPage===n})}
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
                    <${T.assign({icon:Vs})}></${T}>
                </button>
            `}});const Q=re()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:K()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ge("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ge("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ge("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ge("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>v`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${_.interaction},
                background-color ${_.interaction},
                opacity ${_.interaction};
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
            transition: ${_.interaction};
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

        ${Mt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Yt};
        }

        .wrapper.disabled::before {
            ${Yt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:K2()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return f3(e.entries).map(i=>h3(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function f3(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${Q.tagName} was given duplicate entry values.`),Object.values(t)}function h3(e,t,r,n){const o=t===r.value,i=f`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return f`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${Ce({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}const D={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Dr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function m3(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${D.lowerLabelWrapper} .${D.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${D.upperLabelWrapper} .${D.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function g3(e,t=8){const r=m3(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function sa({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function un(e){return U2(e)&&e.min!==void 0&&e.max!==void 0}function ds(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${D.range}`);return(t==null?void 0:t.clientWidth)??0}function la(e,t,r){return`${r?iv(e):e} ${t}`}function p3({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function v3({value:e,double:t,min:r,max:n}){return t?un(e)?{min:Ur(e.min,r,Math.min(e.max,n)),max:Ur(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:un(e)?r:Ur(e,r,n)}function w3({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:un(e)?{min:ji(n,e.min),max:ji(n,e.max)}:ji(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function ca(e,t,r){return r?t[e]||0:e}function y3(e){return{actualLimits:p3(e),actualValue:v3(e)}}function b3(e,t){var n,o,i;let r=!1;if(un(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${D.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${D.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${D.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function nm(e,t){const{actualValue:r,actualLimits:n}=y3({...e}),o=_v(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=w3({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=ds(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Nt=16,_u=v`
    ${Nt}px
`,ed=v`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${_u};
    width: ${_u};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${_.interaction};
    ${Z(x.accentPrimary)};
`,td=v`
    transform: scale(1.2);
`;function jr(e){requestAnimationFrame(()=>{const t=nm(e.instanceInputs,e).elementValue;b3(t,e)&&(e.setAttribute("disabled","true"),jr(e))})}const j=re()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:K()},styles:v`
        :host {
            display: block;
        }

        .${O(D.range)} {
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

        .${O(D.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${J.boldParagraphFont};
            ${ze};
        }

        .${O(D.labelPixelMarginWrapper)},
            .${O(D.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${O(D.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${O(D.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Mt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${O(D.lowerSlider)},
        .${O(D.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${O(D.slider)}::-moz-range-thumb {
            ${ed}
        }

        /* these selectors fail if combined with a comma */
        .${O(D.slider)}::-webkit-slider-thumb {
            ${ed}
        }

        /* these selectors fail if combined with a comma */
        .${O(D.slider)}::-webkit-slider-thumb:hover {
            ${td}
        }

        /* these selectors fail if combined with a comma */
        .${O(D.slider)}::-moz-range-thumb:hover {
            ${td}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{jr(e)}),e.addEventListener("keydown",()=>{jr(e)}),e.addEventListener("keyup",()=>{jr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:u,elementLimits:d,rangeWidth:h}=nm({...e},t);if(jr(t),un(u))return g(a,u,d);return w(a,u,d);function g(y,k,S){const P={left:ir((h-Nt)*(k.min-S.min)/(S.max-S.min)+Nt/2),right:ir((h-Nt)*(S.max-k.max)/(S.max-S.min)+Nt/2)},R=la(y.min,c,l),ae=la(y.max,c,l);requestAnimationFrame(()=>{const Ie=g3(t);Ie!==o.labelOverlap&&i({labelOverlap:Ie})});const he=(S.max-k.max)/(S.max-S.min)>.5,ne=sa({value:k.min,limits:{min:S.min,max:k.max},flip:!0}),q=sa({value:k.max,limits:{min:k.min,max:S.max},flip:!1}),ue=o.labelOverlap&&he?o.labelOverlap:0,Cr=o.labelOverlap&&!he?o.labelOverlap:0;return f`
                <div
                    class="range"
                    ${en(()=>{i({rangeWidth:ds(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${P.left}; right:${P.right}"
                    ></div>
                    <span
                        class="${D.labelOuterWrapper} ${D.lowerLabelWrapper}"
                        style="left: ${P.left}"
                    >
                        <span
                            class="${D.labelPercentMarginWrapper}"
                            style="margin-left: ${Vi(ne)}"
                        >
                            <span
                                class="${D.labelPixelMarginWrapper}"
                                style="margin-right: ${ir(Cr)}"
                                ${ar(Dr.lowerLabel)}
                            >
                                ${R}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${D.labelOuterWrapper} ${D.upperLabelWrapper} ${D.rightAlignedLabelWrapper}"
                        style="right: ${P.right}"
                    >
                        <span
                            class="${D.labelPercentMarginWrapper}"
                            style="margin-right: ${Vi(q)}"
                        >
                            <span
                                class="${D.labelPixelMarginWrapper}"
                                style="margin-left: ${ir(ue)}"
                                ${ar(Dr.upperLabel)}
                            >
                                ${ae}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${D.lowerSlider} ${D.slider}"
                            .min=${S.min}
                            .max=${S.max}
                            .value=${k.min}
                            ${$("input",Ie=>{const Xt=Ie.target,Er={...y,min:ca(Number(Xt.value),s,l)};p(Er)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${D.upperSlider} ${D.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${k.max}
                            ${ar(Dr.slider)}
                            ${$("input",Ie=>{const Xt=Ie.target,Er={...y,max:ca(Number(Xt.value),s,l)};p(Er)})}
                        />
                    </div>
                </div>
            `}function p(y){i({internalValue:y}),e.disabled||n(new r.valueChange(y))}function w(y,k,S){const P=ir((h-Nt)*(S.max-k)/(S.max-S.min)+Nt/2),R=la(y,c,l),ae=sa({value:k,limits:S,flip:!1});return f`
                <div
                    class="range"
                    ${en(()=>{i({rangeWidth:ds(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${P}"></div>
                    <span
                        class="${D.labelOuterWrapper} ${D.rightAlignedLabelWrapper}"
                        style="right: ${P}"
                    >
                        <span
                            class="${D.labelPercentMarginWrapper}"
                            style="margin-right: ${Vi(ae)}"
                            ${ar(Dr.label)}
                        >
                            ${R}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${D.slider}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${k}
                        ${ar(Dr.slider)}
                        ${$("input",he=>{const ne=he.target,q=ca(Number(ne.value),s,l);p(q)})}
                    />
                </div>
            `}}});var om=(e=>(e.Default="default",e.TextOnly="text-only",e))(om||{});const ua=re()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${J.boldParagraphFont};
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

            ${Z(x.accentSecondary)};
            transition:
                color ${_.interaction},
                background-color ${_.interaction};
        }

        ${Mt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${Z(x.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${Z(x.pageInteraction)};
            border-color: ${x.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${Z(x.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${x.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${Z(x.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Yt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${T.assign({icon:e.icon})}
                      class="icon-template"
                  ></${T}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),Qr=Ew({tagName:"toniq-tooltip",styles:v`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${x.accentPrimary.backgroundColor};
            ${No.menuShadow};
            background-color: ${x.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return f`
            <slot></slot>
        `}}),ho=re()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${_.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${_.pretty} ${_.pretty},
                opacity ${_.pretty};
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return f`
            <div
                class="slot-wrapper"
                ${$("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${Qr}>${e.tooltipContent}</${Qr}>
            </div>
        `}}),Fr=re()({tagName:"toniq-top-tabs",events:{valueChange:K()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>v`
        :host {
            display: block;
        }

        ul {
            ${me};
            display: flex;
            width: 100%;
        }

        li {
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${x.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${_.interaction},
                border-color ${_.interaction};
        }

        button {
            ${me};
            cursor: pointer;
            ${J.paragraphFont};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
            transition: padding-bottom ${_.interaction};
        }

        button {
            max-width: 300px;
        }

        ${Ft} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected button {
            ${J.boldFont};
            padding-bottom: calc(
                ${e["toniq-top-tabs-tab-vertical-padding"].value} -
                    ${e["toniq-top-tabs-selected-border-width"].value}
            );
        }

        li.selected {
            border-color: ${x.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return f`
            <ul role="tablist">
                ${e.tabs.map(n=>{const o=n.value===e.value;return f`
                        <li
                            ${Xg("tab")}
                            role="presentation"
                            class=${Ce({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${$("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${Ft.assign({text:n.label})}></${Ft}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),im=G({title:"Data",parent:void 0}),Uo=re()({tagName:"toniq-icon-book-viewer",styles:v`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${x.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return f`
            <${T.assign({icon:e.icon})}></${T}>
        `}}),mi=Object.values(vt).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),k3=Object.keys(mi).sort();function gl(e){return{controlType:H.Dropdown,initValue:e,options:["None",...k3]}}const am={"CSS color":{controlType:H.Color,initValue:""},[String(m["toniq-icon-stroke-color"].name)]:{controlType:H.Color,initValue:""},[String(m["toniq-icon-fill-color"].name)]:{controlType:H.Color,initValue:""},[String(m["toniq-icon-stroke-width"].name)]:{controlType:H.Color,initValue:""},[String(m["toniq-icon-stroke-width"].name)]:{controlType:H.Number,initValue:2}};function mo(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),Y2(n,"number")&&(n=_2({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const x3=G({title:"Social Urls",parent:im,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return f`
                        <${Uo.assign({icon:n})}></${Uo}>
                    `}})}Object.entries(mh).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),ie=G({title:"Elements",parent:void 0}),A3=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:v`
            ${Ft} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],S3=G({title:Ft.tagName,parent:ie,elementExamplesCallback({defineExample:e}){A3.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:v`
                    .bold {
                        ${J.boldFont}
                    }

                    ${t.extraStyle??v``}
                `,renderCallback({state:r,updateState:n}){return f`
                        <${Ft.assign({text:t.text})}
                            ${$("click",()=>{n({isBold:!r.isBold})})}
                            class=${Ce({bold:r.isBold})}
                        ></${Ft}>
                        More text
                    `}})})}}),$3=G({parent:ie,title:oe.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:ln.Secondary}},{name:"Outline",inputs:{buttonStyle:ln.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:v`
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
                `,renderCallback({state:n,updateState:o}){return n.timeoutId||o({timeoutId:window.setTimeout(()=>{o({showIcon:!n.showIcon,timeoutId:void 0})},1e3)}),f`
                        <${oe.assign({text:"Button",...r.inputs})}></${oe}>
                        <${oe.assign({icon:oo,...r.inputs})}></${oe}>
                        <${oe.assign(n.showIcon?{icon:oo,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${oe}>
                        <${oe.assign({text:"Button",icon:oo,...r.inputs})}></${oe}>
                        <${oe.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${oe}>
                        <${oe.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${oe}>
                    `}})})}}),rd=v`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Ae} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,T3=G({parent:ie,title:Ae.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:rd,renderCallback(){return f`
                    <${Ae.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:vt["core-24"].map(t=>{const r=v`
                                padding: 24px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${Ae}>
                    <${Ae.assign({enableAutomaticCycling:!0,templates:vt["core-24"].map(t=>{const r=v`
                                padding: 100px 24px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${Ae}>
                    <${Ae.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:vt["core-24"].map(t=>{const r=X2({min:0,max:150}),n=v`
                                padding: 100px ${r}px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${T.assign({icon:t})} style=${n}></${T}>
                            `})})}></${Ae}>
                `}}),e({title:"banner style",styles:rd,renderCallback(){return f`
                    <${Ae.assign({enableAutomaticCycling:!0,style:Va.BannerStyle,templates:vt["core-24"].map(t=>{const r=v`
                                /* make sure this width matches the ToniqCarousel width */
                                width: 800px;
                                max-width: 100%;
                                padding: 100px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-sizing: border-box;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${Ae}>
                    <${Ae.assign({enableAutomaticCycling:!0,style:Va.BannerStyle,templates:[vt["core-24"][0]].map(t=>{const r=v`
                                /* make sure this width matches the ToniqCarousel width */
                                width: 800px;
                                max-width: 100%;
                                padding: 100px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-sizing: border-box;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}
                        class=${Ae.hostClasses["toniq-carousel-banner-style"]}
                    ></${Ae}>
                `}})}});function C3(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:H.Color,initValue:""}]);return Object.fromEntries(t)}function E3(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(yn);return O(t.join(`
`))}const M3=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],da=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],I3=G({parent:ie,title:ht.tagName,controls:{Text:{controlType:H.Text,initValue:"Text"},...C3(ht)},elementExamplesCallback({defineExample:e}){M3.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:da.map(r=>!!r.inputs.checked),extraEntryStatuses:da.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:v`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return da.map((i,a)=>{const s=(i.extraEntries??[]).map((c,u)=>{var d;return f`
                                    <${ht.assign({...t.inputs,...qa(i.inputs,["checked"]),checked:!!((d=r.extraEntryStatuses[a])!=null&&d[u]),text:c})}
                                        ${$(ht.events.checkedChange,()=>{const h=[...r.extraEntryStatuses];h[a][u]=!h[a][u],n({extraEntryStatuses:h})})}
                                    ></${ht}>
                                `}),l=E3(o);return f`
                            <div class="checkbox-group" style=${l}>
                                <${ht.assign({...t.inputs,...qa(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${$(ht.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${ht}>
                                ${s}
                            </div>
                        `})}})})}}),P3=G({parent:ie,title:Zi.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:fr}},{inputs:{icon:fr}},{inputs:{},template:f`
                    HTML child
                `},{inputs:{icon:fr},template:f`
                    HTML child
                `},{customStyle:v`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:Fa.Default}},{title:"secondary style",inputs:{style:Fa.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>f`
                        <${Zi.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${ke(!!o.template,o.template)}</${Zi}>
                    `)}})})}}),L3=G({title:Ki.tagName,parent:ie,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=[{title:"date and time",inputs:{parts:{date:!0,time:!0}}},{title:"date only",inputs:{parts:{date:!0,time:!1}}},{title:"time only",inputs:{parts:{date:!1,time:!0}}}],r=r5();t.forEach(n=>{e({title:n.title,renderCallback(){return f`
                        <${Ki.assign({fullDate:r,...n.inputs})}></${Ki}>
                    `}})})}}),Qn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],B3=[{title:"default"},{title:"transparent background",customStyle:v`
            ${Zs.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],nd=[{},{customStyle:v`
            width: 500px;
            height: 100px;
        `},{customStyle:v`
            max-height: 30px;
            min-height: 30px;
        `}],O3=G({title:Fn.tagName,parent:ie,controls:{Selected:{controlType:H.Dropdown,initValue:Qn[0].label,options:Qn.map(e=>e.label)},Direction:{controlType:H.Dropdown,initValue:"Down",options:Q2(_a)},Icon:gl(Gf.name),Prefix:{controlType:H.Text,initValue:"Sort by: "},"Force open":{controlType:H.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){B3.forEach(t=>{e({title:t.title,stateInitStatic:{selected:nd.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:v`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return nd.map((i,a)=>{const s=v`
                            ${t.customStyle??v``};
                            ${i.customStyle??v``};
                        `;return f`
                            <${Fn.assign({...t.inputs,...i.inputs,options:Qn,value:r.selected[a]??Qn.find(l=>l.label===o.Selected),icon:mi[o.Icon],selectedLabelPrefix:o.Prefix,direction:_a[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${$(Fn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Fn}>
                        `})}})})}}),od="/toniq-labs-design-system";function D3(...e){const r=[globalThis.location.pathname.startsWith(od)?od:"",...e].filter(yn);return ev(...r)}const fa=Array(30).fill(D3("/toniq-labs-logo.png")),fs=["Hello there.","There is stuff here."],Jn=fs.concat(Array(30).fill(fs)),N3=G({title:pe.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${pe.assign({infoParagraphs:Jn,imageUrls:fa,socialUrls:Cw,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${pe}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${pe.assign({imageUrls:fa,title:"Featured Stuff",infoParagraphs:void 0})}></${pe}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${pe.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Jn,viewMoreUrl:"https://toniqlabs.com"})}
                        ${$(pe.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${pe}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${pe.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Jn})}></${pe}>
                `}}),e({title:"with custom height",styles:v`
                ${pe} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${pe.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Jn})}></${pe}>
                `}}),e({title:"smaller",styles:v`
                ${pe} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${pe.assign({imageUrls:fa,infoParagraphs:fs,title:"Featured Stuff"})}></${pe}>
                `}})}}),R3=G({title:jt.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:v`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return f`
                    <${jt.assign({flipped:t.flipped})}
                        ${$(jt.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${jt}>
                `}})}}),H3=G({parent:ie,title:Ue.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}},{title:"link disabled",inputs:{linkDisabled:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return f`
                        <${Ue.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Ue}>
                    `}})})}}),q3=G({title:T.tagName,parent:ie,controls:am,elementExamplesCallback({defineExample:e}){const t=[{icon:ih},{icon:oh},{icon:Jf},{icon:fr},{icon:void 0}];e({title:"sizes",styles:v`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>f`
                        <${T.assign({icon:n.icon})}
                            style=${mo(r)}
                        ></${T}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=v`
                    ${m["toniq-icon-fill-color"].name}: orange;
                `;return vt["third-party-brands"].map(o=>f`
                        <${T.assign({icon:o})}
                            style=${mo(r)}
                        ></${T}>
                        <${T.assign({icon:o})}
                            style=${n}
                        ></${T}>
                    `)}}),e({title:"fit container",styles:v`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${T} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:r}){return f`
                    <${T.assign({icon:fr,fitContainer:!0})}
                        style=${mo(r)}
                    ></${T}>
                `}})}}),z3=G({title:Yn.tagName,parent:ie,controls:{"External value":{controlType:H.Text,initValue:""},Placeholder:{controlType:H.Text,initValue:"placeholder"},Icon:gl(th.name),Suffix:{controlType:H.Text,initValue:"ICP"},"No browser helps":{controlType:H.Checkbox,initValue:!1},"Blocked characters":{controlType:H.Text,initValue:""},"Exclusive characters":{controlType:H.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:v`
                    height: 75px;
                    width: 300px;
                `},{customStyles:v`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:us.Default}},{title:"outline",inputs:{style:us.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:v`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),f`
                            <${Yn.assign({...n.inputs,value:o["External value"]||i.value,icon:mi[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${$(Yn.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Yn}>
                        `))}})})}}),V3=G({title:ia.tagName,parent:ie,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:fo.Small}},{title:"large",inputs:{size:fo.Large}},{title:"whole page",inputs:{size:fo.WholePage},styles:v`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??v``,renderCallback(){return f`
                        <${ia.assign(r.inputs)}></${ia}>
                    `}})})}}),j3=G({title:ve.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return f`
                    <${ve.assign({text:"Long string instead of text"})}></${ve}>
                `}}),e({title:"Short text",renderCallback(){return f`
                    <${ve.assign({text:"Short text"})}></${ve}>
                `}}),e({title:"External Link",renderCallback(){return f`
                    <${ve.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${ve}>
                `}}),e({title:"Copyable",renderCallback(){return f`
                    <${ve.assign({text:"Long text that you can copy",copyOnClick:!0})}></${ve}>
                `}}),e({title:"Custom CSS vars",styles:v`
                ${ve} {
                    ${ve.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${ve.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${ve.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${ve.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return f`
                    <${ve.assign({text:"long text with custom colors",copyOnClick:!0})}></${ve}>
                `}})}}),Nr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Le={basic:Nr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Nr.slice(1)],disabled:[{...Nr[0],disabled:!0},...Nr.slice(1)],noLabels:H2(Nr,e=>({...e,label:void 0}))},F3=G({title:Q.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Le.basic[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${Q.assign({entries:Le.basic,value:t.selectedValue})}
                        ${$(Q.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Q}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Le.basic[0].value},styles:v`
                ${Q} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${Q.assign({entries:Le.basic,value:t.selectedValue})}
                        ${$(Q.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Q}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Le.longText[0].value},styles:v`
                ${Q} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${Q.assign({entries:Le.longText,value:t.selectedValue})}
                        ${$(Q.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Q}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Le.noLabels[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${Q.assign({entries:Le.noLabels,value:t.selectedValue})}
                        ${$(Q.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Q}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Le.disabled[1].value},renderCallback({state:t,updateState:r}){return f`
                    <${Q.assign({entries:Le.disabled,value:t.selectedValue})}
                        ${$(Q.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Q}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Le.basic[0].value},styles:v`
                ${Q} {
                    ${Q.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${Q.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${Q.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${Q.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${Q.assign({entries:Le.basic,value:t.selectedValue})}
                        ${$(Q.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${Q}>
                `}})}}),ot=v`
    ${j} {
        width: 300px;
    }
`,ha={min:10,max:50},Z3=G({title:j.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,...ha})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({double:!0,value:t.value,min:0,max:100})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,...ha,suffix:"ICP"})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:v`
                ${ot}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,min:-100,max:100})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:v`
                ${ot}

                ${j} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({value:t.value,...ha})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${j}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:v`
                ${ot}

                ${j} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({double:!0,value:t.value,min:0,max:100})}
                        ${$(j.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${j}>
                `}})}}),W3=[{title:"default",inputs:{}},{title:"text only",inputs:{style:om.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],id=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],U3=G({title:ua.tagName,parent:ie,controls:{Text:{controlType:H.Text,initValue:"Toggle Button"},Icon:gl(eh.name)},elementExamplesCallback({defineExample:e}){W3.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:id.map(r=>!!r.inputs.toggled)},styles:v`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return id.map((i,a)=>f`
                            <${ua.assign({...t.inputs,toggled:r.buttonStates[a],icon:mi[o.Icon],text:o.Text,...qa(i.inputs,["toggled"])})}
                                ${$("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${ua}>
                        `)}})})}}),G3=G({parent:ie,title:ho.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:v`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${x.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,renderCallback(){return f`
                        <${ho.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${ho}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:f`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),Y3=G({parent:ie,title:Qr.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${ho.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return f`
                    <${Qr}>This is a tooltip.</${Qr}>
                `}})}}),Q3=[G3,Y3],J3=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:v`
            :host {
                width: 500px;
            }

            ${Fr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:v``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],X3=G({title:Fr.tagName,parent:ie,elementExamplesCallback({defineExample:e}){J3.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:v`
                    ${t.extraStyles??v``}
                `,renderCallback({state:r,updateState:n}){return f`
                        <${Fr.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${$(Fr.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${Fr}>
                    `}})})}}),sm=G({title:"Icons",parent:void 0,controls:am}),K3=Object.entries(vt).map(([e,t])=>G({title:e,parent:sm,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return f`
                                <${Uo.assign({icon:n})}
                                    style=${mo(o)}
                                ></${Uo}>
                            `}}))}}));function lm(e){const t=_3(e),r=yr(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return tt(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function _3(e){typeof e!="string"&&(e=String(e));const n=`{"${z2(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const pl=G({title:"Styles",parent:void 0}),e6=v`
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
        ${J.h2Font};
    }
`;function t6(e,t,r){const n=lm(Z(r));return e({title:t,styles:e6,renderCallback(){return f`
                <div class="color-example" style=${Z(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>f`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const r6=G({title:"Colors",parent:pl,elementExamplesCallback({defineExample:e}){tt(x).map(t=>t6(e,t,x[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),n6=v`
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
`;function o6(e,t,r){const n=lm(r);return e({title:t,styles:n6,renderCallback(){return f`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${tt(n).map(o=>{const i=n[o];return f`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const i6=G({title:"Fonts",parent:pl,elementExamplesCallback({defineExample:e}){tt(J).map(t=>{const r=J[t];return o6(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),a6=[ie,sm,pl,im],s6=[...K3,...Q3,x3,S3,$3,T3,I3,P3,r6,L3,O3,N3,R3,i6,H3,q3,z3,V3,j3,F3,Z3,U3,X3].sort((e,t)=>e.title.localeCompare(t.title)),l6=[...a6,...s6];_o({tagName:"toniq-design-system-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Hi} {
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
    `,renderCallback(){return f`
            <${Hi.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:l6,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${_e.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${Hi}>
        `}});