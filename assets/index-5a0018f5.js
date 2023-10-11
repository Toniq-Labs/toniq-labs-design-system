var al=Object.freeze,sl=Object.defineProperty;var q0=(e,t,r)=>t in e?sl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var si=(e,t,r)=>(q0(e,typeof t!="symbol"?t+"":t,r),r);var li=(e,t)=>al(sl(e,"raw",{value:al(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function ts(e){return!!e}function H0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var ll;(function(e){e.Upper="upper",e.Lower="lower"})(ll||(ll={}));function Uu(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Ho(r).trim()).join(`
`))}function Ho(e){return e?e instanceof Error?e.message:Fo(e,"message")?String(e.message):String(e):""}function F0(e){return e instanceof Error?e:new Error(Ho(e))}function cl(e){return!!e&&typeof e=="object"}const z0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Fo(e,t){return e?z0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Wu(e,t){return e&&t.every(r=>Fo(e,r))}function lo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function V0(e){return Array.isArray(e)?"array":typeof e}function zo(e,t){return V0(e)===t}function ul({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const dl="Failed to compare objects using JSON.stringify";function fl(e,t,r){return ul({source:e,errorHandler(n){if(r)return"";throw n}})===ul({source:t,errorHandler(n){if(r)return"";throw n}})}function wt(e,t,r={}){try{return e===t?!0:cl(e)&&cl(t)?fl(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>wt(e[o],t[o])):!1:fl(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=F0(n);throw o.message.startsWith(dl)||(o.message=`${dl}: ${o.message}`),o}}function j0(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Z0(e){return lo(e).filter(t=>isNaN(Number(t)))}function U0(e){return Z0(e).map(r=>e[r])}function W0(e,t){return U0(t).includes(e)}function G0(e,t){return lo(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Y0(e,t){return G0(e,r=>!t.includes(r))}function co(e,t){let r=!1;const n=lo(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(lo(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function J0(e){const t=rs();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function rs(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${rs.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function hl(e,t){try{return Gu(e,t),!0}catch{return!1}}function Gu(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function K0(e,t){return Fo(e,"entryType")&&e.entryType===t}var pe;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(pe||(pe={}));function Jt(e,t){return e.controlType===t}var R;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(R||(R={}));const Yu=Symbol("any-type"),X0={[R.Checkbox]:!1,[R.Color]:"",[R.Dropdown]:"",[R.Hidden]:Yu,[R.Number]:0,[R.Text]:""};function Q0(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=X0[o.controlType];i!==Yu&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function ns(e,t){const r=uo(e.title);return e.parent?[...ns(e.parent,!1),uo(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function uo(e){return H0(e).toLowerCase().replaceAll(/\s/g,"-")}function em({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function U(e){const t={...e,entryType:pe.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:pe.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ts)};r.add(n.title),t.elementExamples[uo(o.title)]=o}}),t}var Xe;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Xe||(Xe={}));async function ia(e=1){const t=rs();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const tm=globalThis.crypto;function rm(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return tm.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function nm(e){return om(e,1)}async function om(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Gu(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function xn(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn=window,os=Wn.ShadowRoot&&(Wn.ShadyCSS===void 0||Wn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,is=Symbol(),ml=new WeakMap;let Ju=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==is)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(os&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ml.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ml.set(r,t))}return t}toString(){return this.cssText}};const _=e=>new Ju(typeof e=="string"?e:e+"",void 0,is),Gn=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Ju(r,e,is)},im=(e,t)=>{os?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Wn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},pl=os?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return _(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ci;const fo=window,gl=fo.trustedTypes,am=gl?gl.emptyScript:"",vl=fo.reactiveElementPolyfillSupport,aa={toAttribute(e,t){switch(t){case Boolean:e=e?am:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ku=(e,t)=>t!==e&&(t==t||e==e),ui={attribute:!0,type:String,converter:aa,reflect:!1,hasChanged:Ku},sa="finalized";let rr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=ui){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ui}static finalize(){if(this.hasOwnProperty(sa))return!1;this[sa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(pl(o))}else t!==void 0&&r.push(pl(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return im(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=ui){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:aa).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:aa;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ku)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};rr[sa]=!0,rr.elementProperties=new Map,rr.elementStyles=[],rr.shadowRootOptions={mode:"open"},vl==null||vl({ReactiveElement:rr}),((ci=fo.reactiveElementVersions)!==null&&ci!==void 0?ci:fo.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var di;const ho=window,fr=ho.trustedTypes,wl=fr?fr.createPolicy("lit-html",{createHTML:e=>e}):void 0,mo="$lit$",it=`lit$${(Math.random()+"").slice(9)}$`,as="?"+it,sm=`<${as}>`,Vt=document,Ur=()=>Vt.createComment(""),Wr=e=>e===null||typeof e!="object"&&typeof e!="function",Xu=Array.isArray,Qu=e=>Xu(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",fi=`[ 	
\f\r]`,Ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yl=/-->/g,bl=/>/g,It=RegExp(`>|${fi}(?:([^\\s"'>=/]+)(${fi}*=${fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$l=/'/g,kl=/"/g,ed=/^(?:script|style|textarea|title)$/i,td=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),lm=td(1),cm=td(2),Me=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),xl=new WeakMap,Dt=Vt.createTreeWalker(Vt,129,null,!1);function rd(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return wl!==void 0?wl.createHTML(t):t}const nd=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Ar;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,h=0;for(;h<l.length&&(a.lastIndex=h,u=a.exec(l),u!==null);)h=a.lastIndex,a===Ar?u[1]==="!--"?a=yl:u[1]!==void 0?a=bl:u[2]!==void 0?(ed.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=It):u[3]!==void 0&&(a=It):a===It?u[0]===">"?(a=o??Ar,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?It:u[3]==='"'?kl:$l):a===kl||a===$l?a=It:a===yl||a===bl?a=Ar:(a=It,o=void 0);const p=a===It&&e[s+1].startsWith("/>")?" ":"";i+=a===Ar?l+sm:d>=0?(n.push(c),l.slice(0,d)+mo+l.slice(d)+it+p):l+it+(d===-2?(n.push(void 0),s):p)}return[rd(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Gr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,u]=nd(t,r);if(this.el=Gr.createElement(c,n),Dt.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=Dt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith(mo)||h.startsWith(it)){const p=u[a++];if(d.push(h),p!==void 0){const g=o.getAttribute(p.toLowerCase()+mo).split(it),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?id:w[1]==="?"?ad:w[1]==="@"?sd:sn})}else l.push({type:6,index:i})}for(const h of d)o.removeAttribute(h)}if(ed.test(o.tagName)){const d=o.textContent.split(it),h=d.length-1;if(h>0){o.textContent=fr?fr.emptyScript:"";for(let p=0;p<h;p++)o.append(d[p],Ur()),Dt.nextNode(),l.push({type:2,index:++i});o.append(d[h],Ur())}}}else if(o.nodeType===8)if(o.data===as)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(it,d+1))!==-1;)l.push({type:7,index:i}),d+=it.length-1}i++}}static createElement(t,r){const n=Vt.createElement("template");return n.innerHTML=t,n}}function jt(e,t,r=e,n){var o,i,a,s;if(t===Me)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Wr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=jt(e,l._$AS(e,t.values),l,n)),t}class od{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Vt).importNode(n,!0);Dt.currentNode=i;let a=Dt.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new yr(a,a.nextSibling,this,t):c.type===1?u=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(u=new ld(a,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=Dt.nextNode(),s++)}return Dt.currentNode=Vt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class yr{constructor(t,r,n,o){var i;this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=jt(this,t,r),Wr(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qu(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==le&&Wr(this._$AH)?this._$AA.nextSibling.data=t:this.$(Vt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Gr.createElement(rd(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new od(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=xl.get(t.strings);return r===void 0&&xl.set(t.strings,r=new Gr(t)),r}T(t){Xu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new yr(this.k(Ur()),this.k(Ur()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class sn{constructor(t,r,n,o,i){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=le}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=jt(this,t,r,0),a=!Wr(t)||t!==this._$AH&&t!==Me,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=jt(this,s[n+l],r,l),c===Me&&(c=this._$AH[l]),a||(a=!Wr(c)||c!==this._$AH[l]),c===le?t=le:t!==le&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class id extends sn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}}const um=fr?fr.emptyScript:"";class ad extends sn{constructor(){super(...arguments),this.type=4}j(t){t&&t!==le?this.element.setAttribute(this.name,um):this.element.removeAttribute(this.name)}}class sd extends sn{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=jt(this,t,r,0))!==null&&n!==void 0?n:le)===Me)return;const o=this._$AH,i=t===le&&o!==le||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==le&&(o===le||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ld{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){jt(this,t)}}const dm={O:mo,P:it,A:as,C:1,M:nd,L:od,R:Qu,D:jt,I:yr,V:sn,H:ad,N:sd,U:id,F:ld},Sl=ho.litHtmlPolyfillSupport;Sl==null||Sl(Gr,yr),((di=ho.litHtmlVersions)!==null&&di!==void 0?di:ho.litHtmlVersions=[]).push("2.8.0");const fm=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new yr(t.insertBefore(Ur(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hi,mi;let Hr=class extends rr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fm(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Me}};Hr.finalized=!0,Hr._$litElement$=!0,(hi=globalThis.litElementHydrateSupport)===null||hi===void 0||hi.call(globalThis,{LitElement:Hr});const Tl=globalThis.litElementPolyfillSupport;Tl==null||Tl({LitElement:Hr});((mi=globalThis.litElementVersions)!==null&&mi!==void 0?mi:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},At=e=>(...t)=>({_$litDirective$:e,values:t});let lt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:hm}=dm,Cl=()=>document.createComment(""),Er=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Cl(),i),s=o.insertBefore(Cl(),i);r=new hm(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;o.insertBefore(c,i),c=u}}}return r},Lt=(e,t,r=e)=>(e._$AI(t,r),e),mm={},pm=(e,t=mm)=>e._$AH=t,gm=e=>e._$AH,pi=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=At(class extends lt{constructor(e){var t;if(super(e),e.type!==ln.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Me}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Al=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},vm=At(class extends lt{constructor(e){if(super(e),e.type!==ln.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=gm(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,h=0,p=i.length-1,g=0,w=a.length-1;for(;h<=p&&g<=w;)if(i[h]===null)h++;else if(i[p]===null)p--;else if(l[h]===s[g])c[g]=Lt(i[h],a[g]),h++,g++;else if(l[p]===s[w])c[w]=Lt(i[p],a[w]),p--,w--;else if(l[h]===s[w])c[w]=Lt(i[h],a[w]),Er(e,c[w+1],i[h]),h++,w--;else if(l[p]===s[g])c[g]=Lt(i[p],a[g]),Er(e,i[h],i[p]),p--,g++;else if(u===void 0&&(u=Al(s,g,w),d=Al(l,h,p)),u.has(l[h]))if(u.has(l[p])){const y=d.get(s[g]),$=y!==void 0?i[y]:null;if($===null){const S=Er(e,i[h]);Lt(S,a[g]),c[g]=S}else c[g]=Lt($,a[g]),Er(e,i[h],$),i[y]=null;g++}else pi(i[p]),p--;else pi(i[h]),h++;for(;g<=w;){const y=Er(e,c[w+1]);Lt(y,a[g]),c[g++]=y}for(;h<=p;){const y=i[h++];y!==null&&pi(y)}return this.ut=s,pm(e,c),Me}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let la=class extends lt{constructor(t){if(super(t),this.et=le,t.type!==ln.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===le||t==null)return this.ft=void 0,this.et=t;if(t===Me)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};la.directiveName="unsafeHTML",la.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class El extends la{}El.directiveName="unsafeSVG",El.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wm(e,t,r){return e?t():r==null?void 0:r()}var ym=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,h=!1,p=r.length-1;p>=0;p--){var g={};for(var w in n)g[w]=w==="access"?{}:n[w];for(var w in n.access)g.access[w]=n.access[w];g.addInitializer=function($){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a($||null))};var y=(0,r[p])(s==="accessor"?{get:u.get,set:u.set}:u[l],g);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=a(y.get))&&(u.get=d),(d=a(y.set))&&(u.set=d),(d=a(y.init))&&o.unshift(d)}else(d=a(y))&&(s==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),h=!0},bm=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},$m=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function km(){function e(t,r){return t}return e}let cd=(()=>{let e=[km()],t,r=[],n,o=Hr;return n=class extends o{},$m(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;ym(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),bm(n,r)})(),n})();function xm(e){return!!e}function Sm(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Tm={capitalizeFirstLetter:!1};function Cm(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Am(e,t){return t.capitalizeFirstLetter?Cm(e):e}function Em(e,t=Tm){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Am(n,t)}var Ml;(function(e){e.Upper="upper",e.Lower="lower"})(Ml||(Ml={}));function ud(e){return e?e instanceof Error?e.message:Vo(e,"message")?String(e.message):String(e):""}function ss(e){return e instanceof Error?e:new Error(ud(e))}function ca(e){return!!e&&typeof e=="object"}const Mm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Vo(e,t){return e?Mm.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Zt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Il({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Ll="Failed to compare objects using JSON.stringify";function Pl(e,t,r){return Il({source:e,errorHandler(n){if(r)return"";throw n}})===Il({source:t,errorHandler(n){if(r)return"";throw n}})}function dd(e,t,r={}){try{return e===t?!0:ca(e)&&ca(t)?Pl(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>dd(e[o],t[o])):!1:Pl(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ss(n);throw o.message.startsWith(Ll)||(o.message=`${Ll}: ${o.message}`),o}}function fd(e,t){let r=!1;const n=Zt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Zt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Im(e){return!!(Vo(e,"then")&&typeof e.then=="function")}function ua(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ua.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}var hr;(function(e){e.Upper="upper",e.Lower="lower"})(hr||(hr={}));function Lm(e){return e.toLowerCase()!==e.toUpperCase()}function Nl(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Lm(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===hr.Upper&&o!==o.toUpperCase())return!1;if(t===hr.Lower&&o!==o.toLowerCase())return!1}return!0}function Pm(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Nl(a,hr.Lower,{blockNoCaseCharacters:!0})||Nl(s,hr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Nm(e){return!!e&&typeof e=="object"}function _l(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function _m(e){return Array.isArray(e)?"array":typeof e}function Om(e,t){return _m(e)===t}function Bm(e,t){let r=!1;const n=_l(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(_l(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function ct(e){if(Nm(e))return Bm(e,(r,n)=>{if(!Om(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Pm(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?_(r):r.startsWith("-")?Gn`-${_(r)}`:Gn`--${_(r)}`;return{name:a,value:Gn`var(${a}, ${_(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${ct.name}' function.`)}function da({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dm=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Rm=(e,t,r)=>{t.constructor.createProperty(r,e)};function hd(e){return(t,r)=>r!==void 0?Rm(e,t,r):Dm(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gi;((gi=window.HTMLSlotElement)===null||gi===void 0?void 0:gi.prototype.assignedElements)!=null;function qm(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function fa(e){return Vo(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function ls(e){return Vo(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function md(e){return e.map(t=>fa(t)?t.definition:t).filter(t=>ls(t))}const pd=new WeakMap;function Hm(e,t){var o;const r=md(t);return(o=gd(pd,[e,...r]).value)==null?void 0:o.template}function Fm(e,t,r){const n=md(t);return wd(pd,[e,...n],r)}function gd(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=vd(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?gd(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function vd(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function wd(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=vd(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),wd(l,t,r,n+1)}const zm=new WeakMap;function yd(e,t,r){const n=Hm(e,t),o=n??r();if(!n){const s=Fm(e,t,o);if(s.result)zm.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=qm(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function bd(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,h=o[d],p=u-1,g=t[p];n&&n(c);let w,y=[];if(typeof h=="string"&&(w=r(h,c,g),w)){o[d]=h+w.replacement,a.push(p);const S=w.getExtraValues;y=S?S(g):[],y.length&&S?(o[d]+=" ",y.forEach((L,D)=>{D&&o.push(" ")}),s.push(L=>{const D=L[p],ae=S(D);return{index:p,values:ae}}),o.push(c)):o[d]+=c}w||o.push(c);const $=e.raw[u];w?(i[d]=i[d]+w.replacement+$,y.length&&y.forEach(()=>{i.push("")})):i.push($)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function Vm(...[e,t,r]){if(ls(r))return{replacement:r.tagName,getExtraValues:void 0}}function jm(e,t){return bd(e,t,Vm)}function v(e,...t){const r=yd(e,t,()=>jm(e,t));return Gn(r.strings,...r.values)}const cs=Symbol("key for ignoring inputs not having been set yet"),Zm={[cs]:!0,allowPolymorphicState:!1};function $d(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof cd?!0:$d(r)}function kd(e,t){const r=e.instanceState;Zt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Zt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Um(e)}function Um(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ol(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Wm extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function us(){return e=>{var t;return t=class extends Wm{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function X(){return us()}function Gm(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=us()(r);return t[r]=n,t},{}):{}}const Ym="_elementVirStateSetup";function Jm(e){return ca(e)?Ym in e:!1}function Km(e,t){return e.includes(t)}var Bl;(function(e){e.Upper="upper",e.Lower="lower"})(Bl||(Bl={}));function cn(e){return!!e&&typeof e=="object"}const Xm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Yn(e,t){return e?Xm.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function po(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ha(e){return Array.isArray(e)?"array":typeof e}function ar(e,t){return ha(e)===t}function Qm(e,t){let r=!1;const n=po(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(po(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function ep(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return ha(e)===ha(t)&&r}const ds=Symbol("and"),fs=Symbol("or"),xd=Symbol("exact"),Sd=Symbol("enum"),hs=Symbol("unknown"),Td="__vir__shape__definition__key__do__not__use__in__actual__objects";function Cd(e){return Yn(e,Td)}const Ad="__vir__shape__specifier__key__do__not__use__in__actual__objects",tp=[ds,fs,xd,Sd,hs];function Pt(...e){return ws(e,fs)}function rp(...e){return ws(e,ds)}function np(){return ws([],hs)}function jo(e){return un(e,fs)}function ms(e){return un(e,ds)}function ps(e){return un(e,xd)}function gs(e){return un(e,Sd)}function vs(e){return un(e,hs)}function un(e,t){const r=Zo(e);return!!r&&r.specifierType===t}function ws(e,t){return{[Ad]:!0,specifierType:t,parts:e}}function Jn(e,t){const r=Zo(t);if(r){if(ms(r))return r.parts.every(n=>Jn(e,n));if(jo(r))return r.parts.some(n=>Jn(e,n));if(ps(r))return cn(e)?Jn(e,r.parts[0]):e===r.parts[0];if(gs(r))return Object.values(r.parts[0]).some(n=>n===e);if(vs(r))return!0}return ep(e,t)}function Zo(e){if(cn(e)&&Yn(e,Ad)){if(!Yn(e,"parts")||!ar(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Yn(e,"specifierType")||!Km(tp,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function ma(e){return pa(e)}function pa(e){const t=Zo(e);if(t){if(jo(t)||ps(t))return pa(t.parts[0]);if(ms(t))return t.parts.reduce((r,n)=>Object.assign(r,pa(n)),{});if(gs(t))return Object.values(t.parts[0])[0];if(vs(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Cd(e)?ma(e.shape):e instanceof RegExp||ar(e,"array")?e:cn(e)?Qm(e,(r,n)=>ma(n)):e}function dn(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:ma(e),[Td]:!0}}class je extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function op(e,t,r={}){try{return Ed(e,t,r),!0}catch{return!1}}function Ed(e,t,r={}){Bt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Md(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Bt(e,t,r,n){if(vs(t))return!0;if(Cd(t))return Bt(e,t.shape,r,n);const o=Md(r);if(Zo(e))throw new je(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Jn(e,t))throw new je(`Subject does not match shape definition at key ${o}`);if(ar(t,"function"))return ar(e,"function");if(cn(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(jo(t))l=t.parts.some(c=>{try{const u=Bt(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof je)return!1;throw u}});else if(ms(t))l=t.parts.every(c=>{try{const u=Bt(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof je)return!1;throw u}});else if(ps(t)){const c=Bt(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(gs(t))throw new je(`Cannot compare an enum specifier to an object at ${o}`);if(ar(t,"array")&&ar(a,"array"))l=a.every((c,u)=>{const d=t.some(h=>{try{return Bt(c,h,[...r,u],n),!0}catch(p){if(p instanceof je)return!1;throw p}});return s[u]=d,d});else{const c=ip({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new je(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new je(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function ip({keys:e,options:t,shape:r,subject:n}){const o=Md(e),i={};if(cn(r)){const a=new Set(po(n)),s=new Set(po(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new je(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var h;const c=r[l],u=jo(c)?c.parts.includes(void 0):!1,d=((h=c==null?void 0:c.includes)==null?void 0:h.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new je(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];Bt(c,u,[...e,l],t),i[l]=!0})}else throw new je(`shape definition at ${o} was not an object.`);return i}const ap=dn({addListener(){return!1},removeListener(){return!1},value:np()});function vi(e){return op(e,ap,{allowExtraKeys:!0})}function sp(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Dl(e,t){const r=e;function n(a){t?sp(a,e,e.tagName):hd()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=Jm(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(g){a[s]=g,r[s]=g}const h=e.observablePropertyListenerMap[s];if(u!==c&&vi(u)&&(h!=null&&h.length)&&u.removeListener(h),vi(c))if(h)c.addListener(h);else{let g=function(){e.requestUpdate()};var p=g;e.observablePropertyListenerMap[s]=g,c.addListener(g)}else vi(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function lp(e){return e?fd(e,t=>t):{}}function cp({hostClassNames:e,cssVars:t}){return{hostClasses:fd(e,(r,n)=>({name:_(n),selector:_(`:host(.${n})`)})),cssVars:t}}function up({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Zt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function dp(e,t){function r(o){Zt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var fp=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Uo(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Zm,...e.options},n=Gm(e.events),o=lp(e.hostClasses);e.hostClasses&&Ol(e.tagName,e.hostClasses),e.cssVars&&Ol(e.tagName,e.cssVars);const i=e.cssVars?ct(e.cssVars):{},a=typeof e.styles=="function"?e.styles(cp({hostClassNames:o,cssVars:i})):e.styles||v``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends cd{createRenderParams(){return dp(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{$d(this)&&!this.haveInputsBeenSet&&!r[cs]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Uo.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return up({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=ss(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){kd(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Dl(this,!1),this.instanceState=Dl(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Zt(u).forEach(h=>{hd()(this,h),this.instanceState[h]=u[h]}),this.definition=c}},fp(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Em(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function ys(){return e=>Uo({...e,options:{[cs]:!1,...e.options}})}function bs(e,t){return Yr(e,t),e.element}function hp(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Yr(e,t){const r=hp(e),n=r?`: in ${r}`:"";if(e.type!==ln.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function mp(e,t){return t?Rl(e,t):Rl(void 0,e)}const Rl=At(class extends lt{constructor(e){super(e),this.element=bs(e,"assign")}render(e,t){return kd(this.element,t),Me}});function pp(e,t){return e===t}function gp(e,t=pp){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const wi=Symbol("not set");function vp(e){let t=wi,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=ua();const i=gp(o.promise);function a(){o=ua(),i.setValue(o.promise)}function s(g){o.resolve(g),i.setValue(g)}function l(g){o.reject(g),i.setValue(g)}function c(g){g!==r&&(r=g,o.isSettled()&&a(),g.then(w=>{r===g&&s(w)}).catch(w=>{r===g&&(o.promise.catch(()=>{}),l(ss(w)))}))}function u(g,w){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const y={...g},$={...w};if(t===wi||!dd(y,t,{ignoreNonSerializableProperties:!0})){t=y;const S=n(t,$);c(S)}}function d(g,w){t=wi,u(g,w)}const h=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return h instanceof Promise?c(h):s(h),Object.assign(i,{setNewPromise(g){c(g)},setResolvedValue(g){g!==i.value&&(o.isSettled()&&a(),o.resolve(g),s(g))},updateTrigger:n?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?d:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function wp(...e){return{_elementVirStateSetup(){return vp(...e)}}}function yp(e){const t=At(class extends lt{constructor(r){super(r),this.element=bs(r,"testId")}render(r){return this.element.setAttribute(e,r),Me}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function T(e,t){return bp(e,t)}const bp=At(class extends lt{constructor(e){super(e),this.element=bs(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Me}}),ql="onDomCreated",go=At(class extends lt{constructor(e){super(e),Yr(e,ql)}update(e,[t]){Yr(e,ql);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),yi="onResize",Jr=At(class extends lt{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Yr(e,yi)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${yi} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Yr(e,yi),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Hl(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):ud(o):Im(o)?t:r?r(o):o}function $e(e,t,r){return wm(e,()=>t,()=>r)}const{attributeDirective:$p,attributeSelector:M$,attributeName:I$}=yp("data-test-id");function $s(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ys()(r(n))),defineElementNoInputs:n=>(t(n),Uo(r(n)))}}function kp(...[e,t,r]){const n=fa(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ls(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=fa(c)?c.inputs:void 0;return[o&&u?mp(u):void 0].filter(xm)}}}function xp(e){}function Sp(e){return bd(e.strings,e.values,kp,xp)}function f(e,...t){const r=lm(e,...t),n=yd(e,t,()=>Sp(r));return{...r,strings:n.strings,values:n.values}}function Rt(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=Tp(a,n[s]);return`${a}${l}`});return Sm(i.join(""))}function Tp(e,t){return t._$litType$!=null||t._$litDirective$!=null?Rt(t):Array.isArray(t)?t.map(n=>Rt(n)).join(""):e.endsWith("=")?`"${t}"`:t}const Cp={[pe.ElementExample]:()=>[],[pe.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Q0(e.controls,e.title)].filter(ts),[pe.Root]:()=>[]},vo="_isBookTreeNode",Id=new Map;function Ap(e){return Id.get(e)}function Ep(e,t){j0(Id,e,()=>t)}function lr(e,t){return!!(Ld(e)&&e.entry.entryType===t)}function Ld(e){return!!(Wu(e,[vo,"entry"])&&e[vo])}function Mp(){return{[vo]:!0,entry:{entryType:pe.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ip({entries:e,debug:t}){const r=Ap(e);if(r)return r;const n=Mp();e.forEach(a=>ks({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Pd(n),i={tree:n,flattenedNodes:o};return Ep(e,i),t&&console.info("element-book tree:",n),i}function Lp(e,t,r){if(!t.parent)return e;const n=ga(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ks({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=ga(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${ns(t,!1)}`);return o}function ks({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Cp[t.entryType](t);t.errors.push(...o);const i=Lp(e,t,r),a=uo(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[vo]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,K0(t,pe.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>ks({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function ga(e,t){const r=Ld(e)?e.fullUrlBreadcrumbs.slice(0,-1):ns(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Pd(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Pd(o));return[e,...r].flat()}function xs(e,t){return Ss(e,["",...t],void 0)}function Ss(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Ss(i,n,r);return{...e.controls,...a}}function Pp(e,t,r){const n={...e};return Ss(n,["",...t],r),n}function Nd(e,t){const r=(t==null?void 0:t.controls)||(lr(e,pe.Page)?co(e.entry.controls,(o,i)=>i.initValue):{});return{children:co(e.children,(o,i)=>{var a;return Nd(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Np({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const _p=rm(32);function Kn(e){return e.join(_p)}function _d(e){if(!e.length)return[];const t=Kn(e),r=_d(e.slice(0,-1));return[t,...r]}const Op=["error","errors"];function Bp(e){return Op.includes(e)}function Dp({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Kn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Bp(t),a=Kn(o.fullUrlBreadcrumbs);if(Np({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=_d(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Kn(o.fullUrlBreadcrumbs),a=r[i];if(!zo(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var be;(function(e){e.Search="search",e.Book="book"})(be||(be={}));function va(e){return e[0]===be.Book?"":e[1]?decodeURIComponent(e[1]):""}const mr={hash:void 0,paths:[be.Book],search:void 0},Rp=0;function Ts(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Rp)}class Wo extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Fl extends Wo{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Kr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const qp=globalThis.history.pushState;function zl(...e){const t=qp.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Kr)),t}const Hp=globalThis.history.replaceState;function Vl(...e){const t=Hp.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Kr)),t}function Fp(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===zl)throw new Fl("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Vl)throw new Fl("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=zl,globalThis.history.replaceState=Vl,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Kr))})}}function Go(e){return!!e}var jl;(function(e){e.Upper="upper",e.Lower="lower"})(jl||(jl={}));function zp(e,t){return e.split(t)}function Vp(e){return e?e instanceof Error?e.message:wo(e,"message")?String(e.message):String(e):""}function jp(e){return!!e&&typeof e=="object"}const Zp=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function wo(e,t){return e?Zp.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Zl(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Od(e,t,r=!1,n={}){const o=Zl(e),i=new Set(Zl(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!wo(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||Bd(l,c,s,r,n[a]??{})})}function Bd(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{wo(t,"constructor")&&(!wo(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Bd(l,d,r,n,o);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${Vp(h)}`)}}).filter(Go).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):jp(t)&&Od(e,t,n,o)}function Up(e){return Array.isArray(e)?"array":typeof e}function Wp(e,t){return Up(e)===t}function Gp({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Yp(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(Go);return t.length?`?${t.join("&")}`:""}function Jp(e){return Gp({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=zp(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(Go)}function Kp(e,t){const r=Wp(e,"string")?new URL(e):e,n=Jp(r.search),o=Object.fromEntries(n);return t&&Od(o,t),o}function Xp(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?Kp(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function Dd(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Rd({routeBase:e,windowPath:t}){if(!e)return"";const r=Dd(e);if(qd({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Rd({routeBase:n,windowPath:t}):""}function qd({routeBase:e,windowPath:t}){const r=Dd(e);return r?t.startsWith(`/${r}`):!1}class Qp extends Wo{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Hd(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Ul=6;function Wl(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Ul)throw new Qp(`Route sanitization depth has exceed the max of ${Ul} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Hd(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class bi extends Wo{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function e1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new bi(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new bi(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new bi(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function t1(e,t,r=!1){const n=Fd(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Fd(e,t){var s;const r=qd({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Yp(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(Go).join("/")}${n}${i}`}function r1(e={}){e1(e),Fp();const t=e.routeBase?Rd({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Wl(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},u=o.sanitizeFullRoute(c);if(!(!s&&Hd(l,u)))return t1(u,t,a)},createRoutesUrl(i){return Fd(i,t)},getCurrentRawRoutes(){return Xp(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Wo(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Kr,n),r=!0),i&&Wl(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Kr,n),r=!1),a},sanitizationDepth:0};return o}function n1(e){return r1({routeBase:e,routeSanitizer(t){return{paths:o1(t.paths),hash:void 0,search:void 0}}})}function o1(e){const t=e[0];if(W0(t,be)){if(t===be.Book)return[be.Book,...e.slice(1)];if(t===be.Search)return e[1]?[t,e[1]]:[be.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return mr.paths}const V=ct({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),i1={nav:{hover:{background:V["element-book-nav-hover-background-color"],foreground:V["element-book-nav-hover-foreground-color"]},active:{background:V["element-book-nav-active-background-color"],foreground:V["element-book-nav-active-foreground-color"]},selected:{background:V["element-book-nav-selected-background-color"],foreground:V["element-book-nav-selected-foreground-color"]}},accent:{icon:V["element-book-accent-icon-color"]},page:{background:V["element-book-page-background-color"],backgroundFaint1:V["element-book-page-background-faint-level-1-color"],backgroundFaint2:V["element-book-page-background-faint-level-2-color"],foreground:V["element-book-page-foreground-color"],foregroundFaint1:V["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:V["element-book-page-foreground-faint-level-2-color"]}};function a1(e,t){zd(e,t,i1)}function wa(e){return Fo(e,"_$cssResult$")}function Gl(e){return Wu(e,["name","value","default"])&&zo(e.default,"string")&&wa(e.name)&&wa(e.value)}function zd(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(wa(o)){if(!Gl(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);da({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Gl(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);zd(e,o,i)}})}function ce(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function fn(e){return bt(e)==="string"}function bt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function yo(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Vd(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function jd(e){return e[e.length-1]}function bo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Zd(e,t,r){return(r-e)/(t-e)}function Cs(e,t,r){return bo(t[0],t[1],Zd(e[0],e[1],r))}function Ud(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var s1=Object.freeze({__proto__:null,interpolate:bo,interpolateInv:Zd,isString:fn,last:jd,mapRange:Cs,multiplyMatrices:ce,parseCoordGrammar:Ud,parseFunction:Vd,toPrecision:yo,type:bt});class l1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const kt=new l1;var Qe={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const We={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function ya(e){return Array.isArray(e)?e:We[e]}function $o(e,t,r,n={}){if(e=ya(e),t=ya(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(kt.run("chromatic-adaptation-start",o),o.M||(o.W1===We.D65&&o.W2===We.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===We.D50&&o.W2===We.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),kt.run("chromatic-adaptation-end",o),o.M)return ce(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const c1=75e-6,Se=class Se{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Se.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=ya(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:u1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),kt.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=c1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Yl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Yl(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Se.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Se.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Se.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Se)return t;if(bt(t)==="string"){let o=Se.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Se.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=bt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Se.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=bt(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Se.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};si(Se,"registry",{}),si(Se,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=Se;function u1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Yl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ud(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Cs(s,l,i)),i=yo(i,o),c&&(i+=c),i})}return e}var De=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ke extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=De),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=ce(t.toXYZ_M,r);return this.white!==this.base.white&&(n=$o(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=$o(this.base.white,this.white,r),ce(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Wd(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(kt.run("parse-start",r),r.color)return r.color;if(r.parsed=Vd(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let h of M.all){let p=h.getFormat("color");if(p&&(c===p.id||(o=p.ids)!=null&&o.includes(c))){const g=Object.keys(h.coords).map((w,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:h.id,coords:g,alpha:u}}}let d="";if(c in M.registry){let h=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;h&&(d=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of M.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||jd(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let h=r.parsed.args,p;return u.coordGrammar&&(p=Object.entries(c.coords).map(([g,w],y)=>{var he;let $=u.coordGrammar[y],S=(he=h[y])==null?void 0:he.type,L=$.find(ne=>ne==S);if(!L){let ne=w.name||g;throw new TypeError(`${S} not allowed for ${ne} in ${l}()`)}let D=L.range;S==="<percentage>"&&(D||(D=[0,1]));let ae=w.range||w.refRange;return D&&ae&&(h[y]=Cs(D,ae,h[y])),L})),t&&Object.assign(t,{formatId:u.name,types:p}),{spaceId:c.id,coords:h,alpha:d}}}}else for(let l of M.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Z(e){if(!e)throw new TypeError("Empty color reference");fn(e)&&(e=Wd(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function hn(e,t){return t=M.get(t),t.from(e)}function Re(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return hn(e,r)[n]}function Gd(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function xt(e,t,r){if(e=Z(e),arguments.length===2&&bt(arguments[1])==="object"){let n=arguments[1];for(let o in n)xt(e,o,n[o])}else{typeof r=="function"&&(r=r(Re(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=hn(e,n);i[o]=r,Gd(e,n,i)}return e}var As=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:De,fromBase:e=>$o(De.white,"D50",e),toBase:e=>$o("D50",De.white,e),formats:{color:{}}});const d1=216/24389,Jl=24/116,Sn=24389/27;let $i=We.D50;var Ce=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:$i,base:As,fromBase(e){let r=e.map((n,o)=>n/$i[o]).map(n=>n>d1?Math.cbrt(n):(Sn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Jl?Math.pow(t[0],3):(116*t[0]-16)/Sn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Sn,t[2]>Jl?Math.pow(t[2],3):(116*t[2]-16)/Sn].map((n,o)=>n*$i[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Yo(e){return(e%360+360)%360}function f1(e,t){if(e==="raw")return t;let[r,n]=t.map(Yo),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Xr=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ce,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Yo(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Kl=25**7,ko=Math.PI,Xl=180/ko,Kt=ko/180;function ba(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Ce.from(e),l=Xr.from(Ce,[i,a,s])[1],[c,u,d]=Ce.from(t),h=Xr.from(Ce,[c,u,d])[1];l<0&&(l=0),h<0&&(h=0);let g=((l+h)/2)**7,w=.5*(1-Math.sqrt(g/(g+Kl))),y=(1+w)*a,$=(1+w)*u,S=Math.sqrt(y**2+s**2),L=Math.sqrt($**2+d**2),D=y===0&&s===0?0:Math.atan2(s,y),ae=$===0&&d===0?0:Math.atan2(d,$);D<0&&(D+=2*ko),ae<0&&(ae+=2*ko),D*=Xl,ae*=Xl;let he=c-i,ne=L-S,q=ae-D,ue=D+ae,Sr=Math.abs(q),Ie;S*L===0?Ie=0:Sr<=180?Ie=q:q>180?Ie=q-360:q<-180?Ie=q+360:console.log("the unthinkable has happened");let Yt=2*Math.sqrt(L*S)*Math.sin(Ie*Kt/2),Tr=(i+c)/2,ai=(S+L)/2,rl=Math.pow(ai,7),tt;S*L===0?tt=ue:Sr<=180?tt=ue/2:ue<360?tt=(ue+360)/2:tt=(ue-360)/2;let nl=(Tr-50)**2,O0=1+.015*nl/Math.sqrt(20+nl),ol=1+.045*ai,Cr=1;Cr-=.17*Math.cos((tt-30)*Kt),Cr+=.24*Math.cos(2*tt*Kt),Cr+=.32*Math.cos((3*tt+6)*Kt),Cr-=.2*Math.cos((4*tt-63)*Kt);let il=1+.015*ai*Cr,B0=30*Math.exp(-1*((tt-275)/25)**2),D0=2*Math.sqrt(rl/(rl+Kl)),R0=-1*Math.sin(2*B0*Kt)*D0,kn=(he/(r*O0))**2;return kn+=(ne/(n*ol))**2,kn+=(Yt/(o*il))**2,kn+=R0*(ne/(n*ol))*(Yt/(o*il)),Math.sqrt(kn)}const h1=75e-6;function Fr(e,t=e.space,{epsilon:r=h1}={}){e=Z(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Qr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function St(e,{method:t=Qe.gamut_mapping,space:r=e.space}={}){if(fn(arguments[1])&&(r=arguments[1]),r=M.get(r),Fr(e,r,{epsilon:0}))return Z(e);let n=Oe(e,r);if(t!=="clip"&&!Fr(e,r)){let o=St(Qr(n),{method:"clip",space:r});if(ba(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=Oe(n,a),u=(i.range||i.refRange)[0],d=.01,h=u,p=Re(l,s);for(;p-h>d;){let g=Qr(l);g=St(g,{space:r,method:"clip"}),ba(l,g)-2<d?h=Re(l,s):p=Re(l,s),xt(l,s,(h+p)/2)}n=Oe(l,r)}else n=o}if(t==="clip"||!Fr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Oe(n,e.space)),e.coords=n.coords,e}St.returns="color";function Oe(e,t,{inGamut:r}={}){e=Z(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=St(o)),o}Oe.returns="color";function xo(e,{precision:t=Qe.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=Z(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Fr(e)&&(s=St(Qr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(p=>yo(p,t)));let u=[...s];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(p)}let d=e.alpha;t!==null&&(d=yo(d,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";i=`${c}(${u.join(r.commas?", ":" ")}${h})`}return i}const m1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],p1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Jo=new ke({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:m1,fromXYZ_M:p1,formats:{color:{}}});const Tn=1.09929682680944,Ql=.018053968510807;var Yd=new ke({id:"rec2020",name:"REC.2020",base:Jo,toBase(e){return e.map(function(t){return t<Ql*4.5?t/4.5:Math.pow((t+Tn-1)/Tn,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ql?Tn*Math.pow(t,.45)-(Tn-1):4.5*t})},formats:{color:{}}});const g1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],v1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Jd=new ke({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:g1,fromXYZ_M:v1});const w1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],y1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Kd=new ke({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:w1,fromXYZ_M:y1,formats:{color:{}}}),ec={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let tc=Array(3).fill("<percentage> | <number>[0, 255]"),rc=Array(3).fill("<number>[0, 255]");var en=new ke({id:"srgb",name:"sRGB",base:Kd,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:tc},rgb_number:{name:"rgb",commas:!0,coords:rc,noAlpha:!0},color:{},rgba:{coords:tc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:rc},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=ec.black,t.alpha=0):t.coords=ec[e],t.coords)return t}}}}),Xd=new ke({id:"p3",name:"P3",base:Jd,fromBase:en.fromBase,toBase:en.toBase,formats:{color:{id:"display-p3"}}});Qe.display_space=en;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ce,Yd,Xd]){let t=e.getMinCoords(),n=xo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Qe.display_space=e;break}}function b1(e,{space:t=Qe.display_space,...r}={}){let n=xo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Qe.display_space)n=new String(n),n.color=e;else{let o=Oe(e,t);n=new String(xo(o,r)),n.color=o}return n}function Qd(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function $1(e,t){return e=Z(e),t=Z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Tt(e){return Re(e,[De,"y"])}function ef(e,t){xt(e,[De,"y"],t)}function k1(e){Object.defineProperty(e.prototype,"luminance",{get(){return Tt(this)},set(t){ef(this,t)}})}var x1=Object.freeze({__proto__:null,getLuminance:Tt,register:k1,setLuminance:ef});function S1(e,t){e=Z(e),t=Z(t);let r=Math.max(Tt(e),0),n=Math.max(Tt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const T1=.56,C1=.57,A1=.62,E1=.65,nc=.022,M1=1.414,I1=.1,L1=5e-4,P1=1.14,oc=.027,N1=1.14;function ic(e){return e>=nc?e:e+(nc-e)**M1}function Xt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function _1(e,t){t=Z(t),e=Z(e);let r,n,o,i,a,s;t=Oe(t,"srgb"),[i,a,s]=t.coords;let l=Xt(i)*.2126729+Xt(a)*.7151522+Xt(s)*.072175;e=Oe(e,"srgb"),[i,a,s]=e.coords;let c=Xt(i)*.2126729+Xt(a)*.7151522+Xt(s)*.072175,u=ic(l),d=ic(c),h=d>u;return Math.abs(d-u)<L1?n=0:h?(r=d**T1-u**C1,n=r*P1):(r=d**E1-u**A1,n=r*N1),Math.abs(n)<I1?o=0:n>0?o=n-oc:o=n+oc,o*100}function O1(e,t){e=Z(e),t=Z(t);let r=Math.max(Tt(e),0),n=Math.max(Tt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const B1=5e4;function D1(e,t){e=Z(e),t=Z(t);let r=Math.max(Tt(e),0),n=Math.max(Tt(t),0);return n>r&&([r,n]=[n,r]),n===0?B1:(r-n)/n}function R1(e,t){e=Z(e),t=Z(t);let r=Re(e,[Ce,"l"]),n=Re(t,[Ce,"l"]);return Math.abs(r-n)}const q1=216/24389,ac=24/116,Cn=24389/27;let ki=We.D65;var $a=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ki,base:De,fromBase(e){let r=e.map((n,o)=>n/ki[o]).map(n=>n>q1?Math.cbrt(n):(Cn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ac?Math.pow(t[0],3):(116*t[0]-16)/Cn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Cn,t[2]>ac?Math.pow(t[2],3):(116*t[2]-16)/Cn].map((n,o)=>n*ki[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const xi=Math.pow(5,.5)*.5+.5;function H1(e,t){e=Z(e),t=Z(t);let r=Re(e,[$a,"l"]),n=Re(t,[$a,"l"]),o=Math.abs(Math.pow(r,xi)-Math.pow(n,xi)),i=Math.pow(o,1/xi)*Math.SQRT2-40;return i<7.5?0:i}var Xn=Object.freeze({__proto__:null,contrastAPCA:_1,contrastDeltaPhi:H1,contrastLstar:R1,contrastMichelson:O1,contrastWCAG21:S1,contrastWeber:D1});function F1(e,t,r={}){fn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Xn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=Z(e),t=Z(t);for(let i in Xn)if("contrast"+n.toLowerCase()===i.toLowerCase())return Xn[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function tf(e){let[t,r,n]=hn(e,De),o=t+15*r+3*n;return[4*t/o,9*r/o]}function rf(e){let[t,r,n]=hn(e,De),o=t+r+n;return[t/o,r/o]}function z1(e){Object.defineProperty(e.prototype,"uv",{get(){return tf(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return rf(this)}})}var V1=Object.freeze({__proto__:null,register:z1,uv:tf,xy:rf});function j1(e,t){return Qd(e,t,"lab")}const Z1=Math.PI,sc=Z1/180;function U1(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Ce.from(e),[,s,l]=Xr.from(Ce,[o,i,a]),[c,u,d]=Ce.from(t),h=Xr.from(Ce,[c,u,d])[1];s<0&&(s=0),h<0&&(h=0);let p=o-c,g=s-h,w=i-u,y=a-d,$=w**2+y**2-g**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let L=.0638*s/(1+.0131*s)+.638,D;Number.isNaN(l)&&(l=0),l>=164&&l<=345?D=.56+Math.abs(.2*Math.cos((l+168)*sc)):D=.36+Math.abs(.4*Math.cos((l+35)*sc));let ae=Math.pow(s,4),he=Math.sqrt(ae/(ae+1900)),ne=L*(he*D+1-he),q=(p/(r*S))**2;return q+=(g/(n*L))**2,q+=$/ne**2,Math.sqrt(q)}const lc=203;var Es=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:De,fromBase(e){return e.map(t=>Math.max(t*lc,0))},toBase(e){return e.map(t=>Math.max(t/lc,0))}});const An=1.15,En=.66,cc=2610/2**14,W1=2**14/2610,uc=3424/2**12,dc=2413/2**7,fc=2392/2**7,G1=1.7*2523/2**5,hc=2**5/(1.7*2523),Mn=-.56,Si=16295499532821565e-27,Y1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],J1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],K1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],X1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var nf=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Es,fromBase(e){let[t,r,n]=e,o=An*t-(An-1)*n,i=En*r-(En-1)*t,s=ce(Y1,[o,i,n]).map(function(h){let p=uc+dc*(h/1e4)**cc,g=1+fc*(h/1e4)**cc;return(p/g)**G1}),[l,c,u]=ce(K1,s);return[(1+Mn)*l/(1+Mn*l)-Si,c,u]},toBase(e){let[t,r,n]=e,o=(t+Si)/(1+Mn-Mn*(t+Si)),a=ce(X1,[o,r,n]).map(function(h){let p=uc-h**hc,g=fc*h**hc-dc;return 1e4*(p/g)**W1}),[s,l,c]=ce(J1,a),u=(s+(An-1)*c)/An,d=(l+(En-1)*u)/En;return[u,d,c]},formats:{color:{}}}),ka=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:nf,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Yo(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Q1(e,t){let[r,n,o]=ka.from(e),[i,a,s]=ka.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const of=3424/4096,af=2413/128,sf=2392/128,mc=2610/16384,eg=2523/32,tg=16384/2610,pc=32/2523,rg=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],ng=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],og=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],ig=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var xa=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Es,fromBase(e){let t=ce(rg,e);return ag(t)},toBase(e){let t=sg(e);return ce(ig,t)},formats:{color:{}}});function ag(e){let t=e.map(function(r){let n=of+af*(r/1e4)**mc,o=1+sf*(r/1e4)**mc;return(n/o)**eg});return ce(ng,t)}function sg(e){return ce(og,e).map(function(n){let o=Math.max(n**pc-of,0),i=af-sf*n**pc;return 1e4*(o/i)**tg})}function lg(e,t){let[r,n,o]=xa.from(e),[i,a,s]=xa.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const cg=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],ug=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],dg=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],fg=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var So=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:De,fromBase(e){let r=ce(cg,e).map(n=>Math.cbrt(n));return ce(dg,r)},toBase(e){let r=ce(fg,e).map(n=>n**3);return ce(ug,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function hg(e,t){let[r,n,o]=So.from(e),[i,a,s]=So.from(t),l=r-i,c=n-a,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var To={deltaE76:j1,deltaECMC:U1,deltaE2000:ba,deltaEJz:Q1,deltaEITP:lg,deltaEOK:hg};function _r(e,t,r={}){fn(r)&&(r={method:r});let{method:n=Qe.deltaE,...o}=r;e=Z(e),t=Z(t);for(let i in To)if("deltae"+n.toLowerCase()===i.toLowerCase())return To[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function mg(e,t=.25){let n=[M.get("oklch","lch"),"l"];return xt(e,n,o=>o*(1+t))}function pg(e,t=.25){let n=[M.get("oklch","lch"),"l"];return xt(e,n,o=>o*(1-t))}var gg=Object.freeze({__proto__:null,darken:pg,lighten:mg});function lf(e,t,r=.5,n={}){[e,t]=[Z(e),Z(t)],bt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return mn(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function cf(e,t,r={}){let n;Ms(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[Z(e),Z(t)],n=mn(e,t,l));let c=_r(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let h=1/(u-1);d=Array.from({length:u},(p,g)=>{let w=g*h;return{p:w,color:n(w)}})}if(o>0){let h=d.reduce((p,g,w)=>{if(w===0)return 0;let y=_r(g.color,d[w-1].color,i);return Math.max(p,y)},0);for(;h>o;){h=0;for(let p=1;p<d.length&&d.length<s;p++){let g=d[p-1],w=d[p],y=(w.p+g.p)/2,$=n(y);h=Math.max(h,_r($,g.color),_r($,w.color)),d.splice(p,0,{p:y,color:n(y)}),p++}}}return d=d.map(h=>h.color),d}function mn(e,t,r={}){if(Ms(e)){let[l,c]=[e,t];return mn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=Z(e),t=Z(t),e=Qr(e),t=Qr(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[Qe.interpolationSpace]||e.space,o=o?M.get(o):n,e=Oe(e,n),t=Oe(t,n),e=St(e),t=St(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Re(e,c),Re(t,c)];[u,d]=f1(l,[u,d]),xt(e,c,u),xt(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((h,p)=>{let g=t.coords[p];return bo(h,g,l)}),u=bo(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(h=>h/u)),o!==n&&(d=Oe(d,o)),d},{rangeArgs:s})}function Ms(e){return bt(e)==="function"&&!!e.rangeArgs}Qe.interpolationSpace="lab";function vg(e){e.defineFunction("mix",lf,{returns:"color"}),e.defineFunction("range",mn,{returns:"function<color>"}),e.defineFunction("steps",cf,{returns:"array<color>"})}var wg=Object.freeze({__proto__:null,isRange:Ms,mix:lf,range:mn,register:vg,steps:cf}),uf=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:en,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),df=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:uf,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),yg=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:df,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const bg=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],$g=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ff=new ke({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:bg,fromXYZ_M:$g}),kg=new ke({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ff,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const xg=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Sg=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var hf=new ke({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:As,toXYZ_M:xg,fromXYZ_M:Sg});const Tg=1/512,Cg=16/512;var Ag=new ke({id:"prophoto",name:"ProPhoto",base:hf,toBase(e){return e.map(t=>t<Cg?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Tg?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Eg=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:So,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Yo(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const gc=203,vc=2610/2**14,Mg=2**14/2610,Ig=2523/2**5,wc=2**5/2523,yc=3424/2**12,bc=2413/2**7,$c=2392/2**7;var Lg=new ke({id:"rec2100pq",name:"REC.2100-PQ",base:Jo,toBase(e){return e.map(function(t){return(Math.max(t**wc-yc,0)/(bc-$c*t**wc))**Mg*1e4/gc})},fromBase(e){return e.map(function(t){let r=Math.max(t*gc/1e4,0),n=yc+bc*r**vc,o=1+$c*r**vc;return(n/o)**Ig})},formats:{color:{id:"rec2100-pq"}}});const kc=.17883277,xc=.28466892,Sc=.55991073,Ti=3.7743;var Pg=new ke({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Jo,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Ti:(Math.exp((t-Sc)/kc)+xc)/12*Ti})},fromBase(e){return e.map(function(t){return t/=Ti,t<=1/12?Math.sqrt(3*t):kc*Math.log(12*t-xc)+Sc})},formats:{color:{id:"rec2100-hlg"}}});const mf={};kt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=pf(e.W1,e.W2,e.options.method))});kt.add("chromatic-adaptation-end",e=>{e.M||(e.M=pf(e.W1,e.W2,e.options.method))});function Ko({id:e,toCone_M:t,fromCone_M:r}){mf[e]=arguments[0]}function pf(e,t,r="Bradford"){let n=mf[r],[o,i,a]=ce(n.toCone_M,e),[s,l,c]=ce(n.toCone_M,t),u=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],d=ce(u,n.toCone_M);return ce(n.fromCone_M,d)}Ko({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ko({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ko({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ko({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(We,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});We.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Ng=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],_g=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var gf=new ke({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:We.ACES,toXYZ_M:Ng,fromXYZ_M:_g,formats:{color:{}}});const In=2**-16,Ci=-.35828683,Ln=(Math.log2(65504)+9.72)/17.52;var Og=new ke({id:"acescc",name:"ACEScc",coords:{r:{range:[Ci,Ln],name:"Red"},g:{range:[Ci,Ln],name:"Green"},b:{range:[Ci,Ln],name:"Blue"}},referred:"scene",base:gf,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-In)*2:r<Ln?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(In)+9.72)/17.52:t<In?(Math.log2(In+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Tc=Object.freeze({__proto__:null,A98RGB:kg,A98RGB_Linear:ff,ACEScc:Og,ACEScg:gf,HSL:uf,HSV:df,HWB:yg,ICTCP:xa,JzCzHz:ka,Jzazbz:nf,LCH:Xr,Lab:Ce,Lab_D65:$a,OKLCH:Eg,OKLab:So,P3:Xd,P3_Linear:Jd,ProPhoto:Ag,ProPhoto_Linear:hf,REC_2020:Yd,REC_2020_Linear:Jo,REC_2100_HLG:Pg,REC_2100_PQ:Lg,XYZ_ABS_D65:Es,XYZ_D50:As,XYZ_D65:De,sRGB:en,sRGB_Linear:Kd});class N{constructor(...t){let r;t.length===1&&(r=Z(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new N(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=b1(this,...t);return r.color=new N(r.color),r}static get(t,...r){return t instanceof N?t:new N(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=N.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return N.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>N.get(c)));return l};t in N||(N[t]=a),o&&(N.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)N.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(N);else for(let r in t)N.defineFunction(r,t[r])}}N.defineFunctions({get:Re,getAll:hn,set:xt,setAll:Gd,to:Oe,equals:$1,inGamut:Fr,toGamut:St,distance:Qd,toString:xo});Object.assign(N,{util:s1,hooks:kt,WHITES:We,Space:M,spaces:M.registry,parse:Wd,defaults:Qe});for(let e of Object.keys(Tc))M.register(Tc[e]);for(let e in M.registry)Sa(e,M.registry[e]);kt.add("colorspace-init-end",e=>{var t;Sa(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Sa(r,e)})});function Sa(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(N.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}N.extend(To);N.extend({deltaE:_r});Object.assign(N,{deltaEMethods:To});N.extend(gg);N.extend({contrast:F1});N.extend(V1);N.extend(x1);N.extend(wg);N.extend(Xn);function vf(e){return co(e,(t,r)=>r instanceof N?_(r.toString({format:"hex"})):vf(r))}const Bg="dodgerblue";function Ta(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Ai({background:e,foreground:t}){return{background:e??new N(Ta(t)),foreground:t??new N(Ta(e))}}var Co;(function(e){e.Dark="dark",e.Light="light"})(Co||(Co={}));function Dg(e){return e==="black"?"white":"black"}const Rg={black:{foregroundFaint1:new N("#ccc"),foregroundFaint2:new N("#eee")},white:{foregroundFaint1:new N("#ccc"),foregroundFaint2:new N("#eee")}},qg={black:{backgroundFaint1:new N("#666"),backgroundFaint2:new N("#444")},white:{backgroundFaint1:new N("#ccc"),backgroundFaint2:new N("#fafafa")}};function Cc({themeColor:e=Bg,themeStyle:t=Co.Light}={}){const r=new N(e),n=new N(t===Co.Dark?"black":"white"),o=Ta(n),i=new N(o),a={nav:{hover:Ai({background:r.clone().set({"hsl.l":93})}),active:Ai({background:r.clone().set({"hsl.l":90})}),selected:Ai({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...qg[Dg(o)],foreground:i,...Rg[o]}};return vf(a)}const Ao=us()("element-book-change-route"),Ac="vira-",{defineElement:pn,defineElementNoInputs:L$}=$s({assertInputs:e=>{if(!e.tagName.startsWith(Ac))throw new Error(`Tag name should start with '${Ac}' but got '${e.tagName}'`)}});var Ec;(function(e){e.Upper="upper",e.Lower="lower"})(Ec||(Ec={}));function Hg(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Fg(e){return Array.isArray(e)?"array":typeof e}function Mc(e,t){return Fg(e)===t}function wf(e,t){return Hg(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function zg(e,t){return wf(e,r=>!t.includes(r))}function Vg(e,t){return wf(e,r=>t.includes(r))}const jg="px";function Zg(e){return Ug({value:e,suffix:jg})}function Ug({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const yf=v`
    pointer-events: none;
    opacity: 0.3;
`,$t=ct({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Eo=ct({"vira-form-input-border-radius":"8px"}),Mo=ct({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Eo["vira-form-input-border-radius"].value} + 4px)`});function bf({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(Zg(n+r+t));return v`
        ${_(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Mo["vira-focus-outline-color"].value};
            border-radius: ${Mo["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Wg=v`
    padding: 0;
    margin: 0;
`,me=v`
    ${Wg};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function Gg(e){return v`
        ${_(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${_(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const He=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,fe=pn()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Ca;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Ca||(Ca={}));pn()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Ca.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
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
            ${Mo["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${yf};
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
            border-radius: ${Eo["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${$t["vira-interaction-animation-duration"].value},
                background-color
                    ${$t["vira-interaction-animation-duration"].value},
                border-color ${$t["vira-interaction-animation-duration"].value};
        }

        ${bf({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${fe} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?f`
                  <${fe.assign({icon:e.icon})}></${fe}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Aa;(function(e){e.Header="header"})(Aa||(Aa={}));pn()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
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
            transition: height ${$t["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:X()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return f`
            <button
                class="header-wrapper"
                ${T("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Aa.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Jr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const P=ct({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function b({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Yg=b({name:"CloseX24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${P["vira-icon-fill-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Ic;(function(e){e.Upper="upper",e.Lower="lower"})(Ic||(Ic={}));const Jg={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Kg=Object.keys(Jg),Xg=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Kg,...Xg];function Qg(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function Ea({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ea({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function $f({value:e,allowed:t,blocked:r}){const n=t?Ea({input:e,matcher:t}):!0,o=r?Ea({input:e,matcher:r}):!1;return n&&!o}function kf(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>($f({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function e2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Qg(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)$f({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:u}=kf({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}i.value!==l&&(i.value=l),s!==l&&o(l)}const Qn=pn()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:X(),inputBlocked:X()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Mo["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${yf};
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
                ${He};
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
                border-radius: ${Eo["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${$t["vira-interaction-animation-duration"].value};
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

            ${bf({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${He};
            }

            .close-x-button {
                ${me};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${$t["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=kf({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?f`
                  <${fe.assign({icon:e.icon})} class="left-side-icon"></${fe}>
              `:"",s=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return f`
            <label>
                ${a}
                ${$e(!!e.fitText,f`
                        <span
                            class="size-span"
                            ${Jr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${T("input",l=>{e2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${$e(!!(e.showClearButton&&e.value),f`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${fe.assign({icon:Yg})}></${fe}>
                        </button>
                    `)}
                ${$e(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});pn()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:X()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Ts(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return f`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return f`
                <a href=${a} rel="noopener noreferrer" ${T("click",n)}>
                    <slot></slot>
                </a>
            `}}});const t2=b({name:"Element16Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"Element24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const r2=b({name:"Loader24Icon",svgTemplate:f`
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
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),n2=v`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${$t["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,o2=b({name:"LoaderAnimated24Icon",svgTemplate:f`
        <style>
            ${n2}
        </style>
        ${r2.svgTemplate}
    `}),i2=b({name:"Options24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${P["vira-icon-fill-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${P["vira-icon-stroke-color"].value}"
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"StatusFailure24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${P["vira-icon-fill-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"StatusInProgress24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${P["vira-icon-fill-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${P["vira-icon-stroke-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width="calc(${P["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${P["vira-icon-stroke-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width="calc(${P["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${P["vira-icon-stroke-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width="calc(${P["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});b({name:"StatusSuccess24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${P["vira-icon-fill-color"].value}
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${P["vira-icon-stroke-color"].value}
                stroke-width=${P["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const{defineElement:Fe,defineElementNoInputs:P$}=$s(),_e=Fe()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>v`
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
                ${T("click",i=>{(!e.router||Ts(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new Ao(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function a2(e,t){return e.entry.entryType===pe.Root?!1:!!(e.entry.entryType===pe.Page||wt(t,e.fullUrlBreadcrumbs.slice(0,-1))||wt(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ot=Fe()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>v`
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
            ${_e.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${fe} {
            display: inline-flex;
            color: ${V["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!a2(r,e.selectedPath))return;const n=v`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return f`
                <li style=${n}>
                    <${_e.assign({router:e.router,route:{paths:[be.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Ae({"title-row":!0,selected:e.selectedPath?wt(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${$e(lr(r,pe.ElementExample),f`
                                    <${fe.assign({icon:t2})}></${fe}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${_e}>
                </li>
            `});return f`
            <${_e.assign({route:mr,router:e.router})}>
                <slot name=${Xe.NavHeader}>Book</slot>
            </${_e}>
            <ul>
                ${t}
            </ul>
        `}});async function s2(e){await ia(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await nm(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Ct=Fe()({tagName:"book-error",styles:v`
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
    `,renderCallback({inputs:e}){return(zo(e.message,"array")?e.message:[e.message]).map(r=>f`
                    <p>${r}</p>
                `)}}),tn=Fe()({tagName:"book-page-controls",events:{controlValueChange:X()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>v`
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

        ${Qn} {
            height: 24px;
            max-width: 128px;
        }

        ${fe}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===R.Hidden)return"";const a=l2(e.currentValues[n],o,s=>{const l=zo(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return f`
                    <div class="control-wrapper">
                        ${$e(i===0,f`
                                <${fe.assign({icon:i2})}
                                    class="options-icon"
                                ></${fe}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function l2(e,t,r){return Jt(t,R.Hidden)?"":Jt(t,R.Checkbox)?f`
            <input
                type="checkbox"
                .value=${e}
                ${T("input",n=>{const o=xn(n,HTMLInputElement);r(o.checked)})}
            />
        `:Jt(t,R.Color)?f`
            <input
                type="color"
                .value=${e}
                ${T("input",n=>{const o=xn(n,HTMLInputElement);r(o.value)})}
            />
        `:Jt(t,R.Text)?f`
            <${Qn.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${T(Qn.events.valueChange,n=>{r(n.detail)})}
            ></${Qn}>
        `:Jt(t,R.Number)?f`
            <input
                type="number"
                .value=${e}
                ${T("input",n=>{const o=xn(n,HTMLInputElement);r(o.value)})}
            />
        `:Jt(t,R.Dropdown)?f`
            <select
                .value=${e}
                ${T("input",n=>{const o=xn(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>f`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:f`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Lc=Fe()({tagName:"book-breadcrumbs",styles:v`
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
                <${_e.assign({route:{hash:void 0,search:void 0,paths:[be.Book,...a]},router:e.router})}>
                    ${r}
                </${_e}>
                ${s}
            `}):f`
                &nbsp;
            `}}),Ei=Fe()({tagName:"book-breadcrumbs-bar",styles:v`
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
    `,renderCallback({inputs:e,dispatch:t}){return f`
            ${$e(!!e.currentSearch,f`
                    &nbsp;
                `,f`
                    <${Lc.assign({currentRoute:e.currentRoute,router:e.router})}></${Lc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${T("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await J0(200),n.value===o&&(n.value?t(new Ao({paths:[be.Search,encodeURIComponent(n.value)]})):t(new Ao(mr)))})}
            />
        `}}),Pc=Fe()({tagName:"book-entry-description",styles:v`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>f`
                <p>${t}</p>
            `)}}),Nc=Fe()({tagName:"book-page-wrapper",styles:v`
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

        ${_e} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?f`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:f`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[be.Book,...e.pageNode.fullUrlBreadcrumbs],n=Uu(e.pageNode.entry.errors);return n&&console.error(n),f`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${_e.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${_e}>
                    ${n?f`
                              <${Ct.assign({message:n.message})}></${Ct}>
                          `:f`
                              <${Pc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Pc}>
                              <${tn.assign({config:e.pageNode.entry.controls,currentValues:xs(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${tn}>
                          `}
                </div>
            </div>
        `}}),Pn=Fe()({tagName:"book-element-example-controls",styles:v`
        :host {
            display: flex;
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[be.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return f`
            <${_e.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${_e}>
        `}}),_c=Symbol("unset-internal-state"),Oc=Fe()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:_c},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Uu(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===_c&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return f`
                ${$e(!!t.elementExampleNode.entry.styles,f`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),f`
                <${Ct.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ho(n)}`})}></${Ct}>
            `}},options:{allowPolymorphicState:!0}}),Bc=Fe()({tagName:"book-element-example-wrapper",styles:v`
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

        ${Pn} {
            color: ${V["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Pn} {
            color: ${V["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return f`
            <div class="individual-example-wrapper">
                <${Pn.assign(Y0(e,["currentPageControls"]))}></${Pn}>
                <${Oc.assign(e)}></${Oc}>
            </div>
        `}});function xf(e,t,r,n){const o=ga(r,n),i=[];if(o){const a=xf(e,t,o,n);a&&i.push(a)}if(lr(r,pe.Page)&&!e.includes(r)){const a=xs(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:co(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function c2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[f`
                No results
            `];const a=hl(e,1)?xf(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&hl(e,1)?f`
                  <${tn.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${tn}>
              `:"",l=vm(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(lr(c,pe.Page))return f`
                    <${Nc.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Nc}>
                `;if(lr(c,pe.ElementExample)){const d=xs(o,c.fullUrlBreadcrumbs.slice(0,-1));return f`
                    <${Bc.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Bc}>
                `}else return lr(c,pe.Root)?"":f`
                    <${Ct.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Ct}>
                `});return[s,l].flat()}const Qt=Fe()({tagName:"book-entry-display",styles:v`
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

        ${Ei} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${$t["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:X()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=va(e.currentRoute.paths),a=c2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return f`
            <${Ei.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Ei}>

            ${$e(e.showLoading,f`
                    <div
                        ${go(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${fe.assign({icon:o2})}></${fe}>
                    </div>
                    ${$e(!!n.lastElement,f`
                            ${n.lastElement}
                            <slot name=${Xe.Footer}></slot>
                        `)}
                `,f`
                    <div
                        ${go(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${Xe.Footer}></slot>
                `)}
        `}});function u2(e,t,r){const n=Dc(e,t);if(n.length)return n;r(mr);const o=Dc(e,mr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Dc(e,t){return e.filter(r=>em({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Mi=ys()({tagName:"element-book-app",events:{pathUpdate:X()},stateInitStatic:{currentRoute:mr,router:void 0,loading:!0,colors:{config:void 0,theme:Cc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:v`
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

        ${Qt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ot} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Rc(e,va(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var u,d,h,p,g,w,y;t._debug&&console.info("rendering element-book app");function a($){return{...e.currentRoute,...$}}function s($){const S=a($);return!wt(e.currentRoute,S)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(ts).join(" - "))}function c($){if(!s($))return;const S=a($);e.router?e.router.setRoutes(S):n({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!wt(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!wt(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const q=n1(t.internalRouterConfig.basePath);n({router:q}),q.addRouteListener(!0,ue=>{n({currentRoute:ue})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!wt($,(h=e.colors)==null?void 0:h.config)){const q=Cc($);n({colors:{config:$,theme:q}}),a1(r,q)}const S=t._debug??!1,L=Ip({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Nd(L.tree,{children:(g=(p=e.treeBasedControls)==null?void 0:p.controls)==null?void 0:g.children,controls:t.globalValues})}}));const D=va(e.currentRoute.paths),he=(D?Dp({flattenedNodes:L.flattenedNodes,searchQuery:D}):void 0)??u2(L.flattenedNodes,e.currentRoute.paths,c);l((w=he[0])==null?void 0:w.entry.title);const ne=(y=e.treeBasedControls)==null?void 0:y.controls;return ne?(t._debug&&console.info({currentControls:ne}),f`
                <div
                    class="root"
                    ${T(Ao,async q=>{const ue=q.detail;if(!s(ue))return;if(n({loading:!0}),c(ue),!(r.shadowRoot.querySelector(ot.tagName)instanceof ot))throw new Error(`Failed to find child '${ot.tagName}'`);Rc(r,D,e.currentRoute)})}
                    ${T(tn.events.controlValueChange,q=>{if(!e.treeBasedControls)return;const ue=Pp(ne,q.detail.fullUrlBreadcrumbs,q.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ue}})})}
                >
                    <${ot.assign({flattenedNodes:L.flattenedNodes,router:e.router,selectedPath:D?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Xe.NavHeader}
                            slot=${Xe.NavHeader}
                        ></slot>
                    </${ot}>
                    <${Qt.assign({controls:ne,currentNodes:he,currentRoute:e.currentRoute,debug:S,originalTree:L.tree,router:e.router,showLoading:e.loading})}
                        ${T(Qt.events.loadingRender,async q=>{await ia();const ue=r.shadowRoot.querySelector(Qt.tagName);ue?ue.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Qt.tagName}' for scrolling.`),await ia(),n({loading:!q.detail})})}
                    >
                        <slot
                            name=${Xe.Footer}
                            slot=${Xe.Footer}
                        ></slot>
                    </${Qt}>
                </div>
            `):f`
                    <${Ct.assign({message:"Failed to generate page controls."})}></${Ct}>
                `}catch($){return console.error($),f`
                <p class="error">${Ho($)}</p>
            `}}});async function Rc(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ot.tagName);if(!(n instanceof ot))throw new Error(`Failed to find child '${ot.tagName}'`);await s2(n)}function d2(e,t){return e.map(t)}function gn(e){return!!e}function Sf(e,t){return e.match(t)??[]}function f2(e){return e.replace(/,/g,"")}function h2(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var pr;(function(e){e.Upper="upper",e.Lower="lower"})(pr||(pr={}));function m2(e){return e.toLowerCase()!==e.toUpperCase()}function qc(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!m2(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===pr.Upper&&o!==o.toUpperCase())return!1;if(t===pr.Lower&&o!==o.toLowerCase())return!1}return!0}function Ma(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=qc(a,pr.Lower,{blockNoCaseCharacters:!0})||qc(s,pr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function rn(e,t){return e.split(t)}const p2=String(NaN);function Tf(e){if(typeof e=="string"&&isNaN(Number(e)))return p2;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=Sf(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(u=>u.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function g2(e){return typeof e=="number"?e:Number(typeof e=="string"?f2(e):e)}function v2(e){return String(e).includes("e")}function w2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function y2(e){return!!e&&typeof e=="object"}function et(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function b2(e){return Array.isArray(e)?"array":typeof e}function $2(e,t){return b2(e)===t}function k2(e){return et(e).filter(t=>isNaN(Number(t)))}function x2(e,t){return et(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ia(e,t){return x2(e,r=>!t.includes(r))}function gr(e,t){let r=!1;const n=et(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(et(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const Cf=globalThis.crypto;function S2({min:e,max:t}){const{min:r,max:n}=w2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Cf.getRandomValues(s),l=s.reduce((c,u,d)=>c+u*256**d,0);while(l>=a);return r+l%o}function T2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Cf.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function C2({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Ii="://";function A2(...e){const t=e.join("/"),[r,n=""]=t.includes(Ii)?t.split(Ii):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,u)=>{if(i)return s;const d=u[c+1];let h=l;const p=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||p){i=!0;let g=!1;const w=u.slice(p?c+2:c+1).reduce((y,$)=>($.includes("#")&&(g=!0),g?y.concat($):[y,$].join("&")),"");h=[l,d,w].join("")}return s.concat(h)},[]);return[r,r?Ii:"",a.join("/")].join("")}const E2=["k","M","B","T","P","E","Z","Y"];function Is({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function M2(e,t,r){const[n,o]=rn(e,"."),i=Tf(n),a=Sf(i,/,/g).length,s=t[a-1],[l,c]=rn(i,","),u=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Is({beforeDot:l,afterDot:u,maxLength:r-1}),s].join("")}const Hc=3;function I2({input:e,maxLength:t}){const r=String(e),[n,o]=rn(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=rn(n,"."),u=i.length+Hc;return u===t?[l,s].join(""):u>t?a==="-"?"0":String(1/0):[Is({afterDot:c,beforeDot:l,maxLength:t-i.length+Hc}),s].join("")}function L2(e,t){const[r,n]=rn(Tf(e),".");if(r.length<=t)return Is({beforeDot:r,afterDot:n,maxLength:t})}function P2(e,{customSuffixes:t=E2,maxLength:r=6}={}){const n=g2(e);if(isNaN(n)||n===1/0)return String(n);if(v2(n))return I2({input:n,maxLength:r});const o=String(n),i=L2(o,r);return i??M2(o,t,r)}const m=ct({"toniq-icon-fill-color":P["vira-icon-fill-color"].default,"toniq-icon-stroke-color":P["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),Y=gr(m,(e,t)=>r=>_(`var(${t.name}, ${r})`)),N2=b({name:"Copy16Icon",svgTemplate:f`
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
    `}),_2=b({name:"ExternalLink16Icon",svgTemplate:f`
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
    `}),cr=b({name:"InfoCircle16Icon",svgTemplate:f`
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
    `}),O2=b({name:"ArrowBarUp24Icon",svgTemplate:f`
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
    `}),B2=b({name:"ArrowForwardUp24Icon",svgTemplate:f`
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
    `}),Ls=b({name:"ArrowLeft24Icon",svgTemplate:f`
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
    `}),D2=b({name:"ArrowLoopLeft24Icon",svgTemplate:f`
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
    `}),R2=b({name:"ArrowLoopRight24Icon",svgTemplate:f`
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
    `}),Ps=b({name:"ArrowRight24Icon",svgTemplate:f`
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
    `}),Af=b({name:"ArrowsSort24Icon",svgTemplate:f`
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
    `}),q2=b({name:"ArrowsSortAscending24Icon",svgTemplate:f`
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
    `}),H2=b({name:"ArrowsSortDescending24Icon",svgTemplate:f`
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
    `}),F2=b({name:"Bucket24Icon",svgTemplate:f`
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
    `}),z2=b({name:"BuildingStore24Icon",svgTemplate:f`
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
    `}),V2=b({name:"CalendarEvent24Icon",svgTemplate:f`
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
    `}),j2=b({name:"Cash24Icon",svgTemplate:f`
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
    `}),Z2=b({name:"Chain24Icon",svgTemplate:f`
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
    `}),Ef=b({name:"CheckMark24Icon",svgTemplate:f`
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
    `}),Mf=b({name:"ChevronDown24Icon",svgTemplate:f`
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
    `}),U2=b({name:"ChevronUp24Icon",svgTemplate:f`
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
    `}),W2=b({name:"Circle24Icon",svgTemplate:f`
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
    `}),If=b({name:"CircleDot24Icon",svgTemplate:f`
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
    `}),G2=b({name:"CirclePlus24Icon",svgTemplate:f`
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
    `}),Y2=b({name:"CircleWavyCheck24Icon",svgTemplate:f`
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
    `}),J2=b({name:"Clock24Icon",svgTemplate:f`
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
    `}),Lf=b({name:"Code24Icon",svgTemplate:f`
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
    `}),Pf=b({name:"Copy24Icon",svgTemplate:f`
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
    `}),K2=b({name:"CreateFile24Icon",svgTemplate:f`
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
    `}),X2=b({name:"DotsVertical24Icon",svgTemplate:f`
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
    `}),Q2=b({name:"Download24Icon",svgTemplate:f`
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
    `}),ev=b({name:"Edit24Icon",svgTemplate:f`
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
    `}),Nf=b({name:"ExternalLink24Icon",svgTemplate:f`
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
    `}),tv=b({name:"Filter24Icon",svgTemplate:f`
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
    `}),rv=b({name:"Geometry24Icon",svgTemplate:f`
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
    `}),nv=b({name:"GridDots24Icon",svgTemplate:f`
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
    `}),ov=b({name:"Heart24Icon",svgTemplate:f`
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
    `}),iv=b({name:"Infinity24Icon",svgTemplate:f`
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
    `}),av=b({name:"Info24Icon",svgTemplate:f`
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
    `}),sv=b({name:"LayersLinked24Icon",svgTemplate:f`
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
    `}),lv=b({name:"LayoutGrid24Icon",svgTemplate:f`
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
    `}),cv=b({name:"Lifebuoy24Icon",svgTemplate:f`
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
    `}),uv=b({name:"List24Icon",svgTemplate:f`
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
    `}),dv=b({name:"ListDetails24Icon",svgTemplate:f`
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
    `}),fv=b({name:"Loader24Icon",svgTemplate:f`
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
    `}),Ns=b({name:"LoaderAnimated24Icon",svgTemplate:f`
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
    `}),hv=b({name:"Lock24Icon",svgTemplate:f`
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
    `}),mv=b({name:"LockOpen24Icon",svgTemplate:f`
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
    `}),pv=b({name:"Menu24Icon",svgTemplate:f`
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
    `}),gv=b({name:"Paper24Icon",svgTemplate:f`
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
    `}),vv=b({name:"People24Icon",svgTemplate:f`
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
    `}),wv=b({name:"Person24Icon",svgTemplate:f`
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
    `}),yv=b({name:"Photo24Icon",svgTemplate:f`
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
    `}),bv=b({name:"Refresh24Icon",svgTemplate:f`
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
    `}),_f=b({name:"Rocket24Icon",svgTemplate:f`
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
    `}),Of=b({name:"Search24Icon",svgTemplate:f`
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
    `}),$v=b({name:"Send24Icon",svgTemplate:f`
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
    `}),kv=b({name:"ShoppingCart24Icon",svgTemplate:f`
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
    `}),xv=b({name:"Social24Icon",svgTemplate:f`
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
    `}),Sv=b({name:"Square24Icon",svgTemplate:f`
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
    `}),Fc={interactionDuration:v`--toniq-interaction-transition-duration`,prettyDuration:v`--toniq-pretty-transition-duration`},Q={interaction:v`var(${Fc.interactionDuration}, 84ms)`,pretty:v`var(${Fc.prettyDuration}, 300ms)`};function _s(){return e=>e}function Li(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Tv=(()=>{const e={backgroundColor:v`#ffffff`,foregroundColor:v`#000000`},t={...e,foregroundColor:v`#00D093`},r={...e,foregroundColor:v`#ACADAD`},n={...e,foregroundColor:v`#D6D6D6`},o={...t},i={...t,foregroundColor:v`#00A876`},a={...t,foregroundColor:v`#1D6852`},s={...n},l={...e,foregroundColor:v`#EAFBF7`},c={...e,backgroundColor:v`#D2EEFA`},u=Li(o),d=Li(i),h=Li(a),p=h,g={backgroundColor:v`#F1F3F6`,foregroundColor:e.foregroundColor},w={...g,foregroundColor:v`#9A9A9D`};return _s()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:p,accentPrimary:u,accentPrimaryHover:d,accentPrimaryActive:h,accentSecondary:g,accentTertiary:w})})(),Bf=Tv;function zc(e,t){return _(`--toniq-${Ma(e)}-${Ma(t)}`)}const Os=gr(Bf,e=>({backgroundColor:zc(e,"backgroundColor"),foregroundColor:zc(e,"foregroundColor")}));function Ue(e,t){const r=Bf[e][t],n=Os[e][t];return v`var(${n}, ${r})`}const k=gr(Os,e=>({foregroundColor:Ue(e,"foregroundColor"),backgroundColor:Ue(e,"backgroundColor")}));function j(e){return v`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Ut=v`
    pointer-events: none;
    opacity: 0.3;
    ${He};
`;function zr(e,t,r){return Math.min(Math.max(e,t),r)}function nr(e){return`${e}px`}function Pi(e){return`${e}%`}function Ni(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,u)=>{const d=e[u+1];return d==null?!0:c<=t&&d>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function Cv(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=Av(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Vc(o,r),o.length>r&&Vc(o,r)),o}function Vc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function Av(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function Et({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(nr(n+r+t));return v`
        ${_(e)}::after {
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
    `}const Df=_s()({toniqFont:{"font-family":v`'Rubik', sans-serif`},normalWeightFont:{"font-weight":v`400`},boldFont:{"font-weight":v`600`},extraBoldFont:{"font-weight":v`900`},paragraphFont:{"line-height":v`24px`,"font-size":v`16px`},boldParagraphFont:{},labelFont:{"line-height":v`16px`,"font-size":v`12px`},boldLabelFont:{},h1Font:{"line-height":v`96px`,"font-size":v`64px`},h2Font:{"line-height":v`48px`,"font-size":v`32px`},h3Font:{"line-height":v`32px`,"font-size":v`24px`},monospaceFont:{"font-family":v`'Inconsolata', monospace`,"line-height":v`1.125em`}}),Ev=gr(Df,(e,t)=>{const r=_(Ma(e.replace(/Font$/,"")));return gr(t,o=>{const i=_(o);return v`--toniq-font-${r}-${i}`})});function Je(e){const t=Ev[e],r=Df[e],n=et(t).map(o=>{const i=r[o],a=t[o];return v`
            ${_(o)}: var(${a}, ${i});
        `});return _(n.join(`
`))}const J=(()=>{const e=v`
        font-style: normal;
        color: ${k.pagePrimary.foregroundColor};
        ${Je("toniqFont")};
    `,t=v`
        ${e};
        ${Je("normalWeightFont")};
    `,r=v`
        ${e};
        ${Je("boldFont")};
    `,n=v`
        ${e};
        ${Je("extraBoldFont")};
    `,o=v`
        ${e};
        ${Je("paragraphFont")};
        ${t};
    `,i=v`
        ${e};
        ${o};
        ${r};
    `,a=v`
        ${e};
        ${Je("labelFont")};
        ${t};
    `,s=v`
        ${a};
        ${r};
    `,l=v`
        ${Je("h1Font")};
        ${n};
    `,c=v`
        ${Je("h2Font")};
        ${r};
    `,u=v`
        ${Je("h3Font")};
        ${r};
    `,d=v`
        ${Je("monospaceFont")}
    `;return _s()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:u,monospaceFont:d})})(),Io={popupShadow:v`
        filter: drop-shadow(0px 12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:v`
        filter: drop-shadow(0px -12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:v`
        filter: drop-shadow(0px 12px 8px ${k.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Mv(e,t=!0){const r=_(e),n=e===":host"?v`
                  :host(:hover) ;
              `:v`
                  ${r}:hover
              `,o=t?v`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${k.pageInteraction.foregroundColor};
              }
          `:v``;return v`
        ${r} {
            border-radius: 16px;
            background-color: ${k.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${Io.popupShadow};
        }

        ${o}
    `}const Iv=b({name:"SquareCheck24Icon",svgTemplate:f`
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
    `}),eo=b({name:"Trash24Icon",svgTemplate:f`
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
    `}),Lv=b({name:"Upload24Icon",svgTemplate:f`
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
    `}),Pv=b({name:"Wallet24Icon",svgTemplate:f`
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
    `}),Nv=b({name:"WorldUpload24Icon",svgTemplate:f`
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
    `}),_v=b({name:"X24Icon",svgTemplate:f`
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
    `}),Ov=b({name:"Folder48Icon",svgTemplate:f`
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
    `}),Rf=b({name:"FolderOff48Icon",svgTemplate:f`
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
    `}),Bv=b({name:"Kyc48Icon",svgTemplate:f`
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
                fill=${Y["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${Y["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${m["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${m["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                fill=${Y["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${m["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),qf=b({name:"Api64Icon",svgTemplate:f`
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
    `}),Dv=b({name:"CircleDashes64Icon",svgTemplate:f`
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
    `}),Rv=b({name:"Rocket64Icon",svgTemplate:f`
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
    `}),qv=b({name:"CryptoBtc24Icon",svgTemplate:f`
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
    `}),Hv=b({name:"CryptoCkBtc24Icon",svgTemplate:f`
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
    `}),Hf="0 0 58 58",Ff=cm`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,Fv=b({name:"CryptoIcp16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${Hf}"
        >
            ${Ff}
        </svg>
    `}),zv=b({name:"CryptoIcp24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="24"
            height="24"
            viewBox="${Hf}"
        >
            ${Ff}
        </svg>
    `}),Vv=b({name:"EntrepotLogo144Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${Y["toniq-icon-fill-color"](String(k.brandPrimary.foregroundColor))}
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
    `}),zf=b({name:"BrandDiscord24Icon",svgTemplate:f`
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
    `}),jv=b({name:"BrandFacebookLogo24Icon",svgTemplate:f`
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
    `}),Zv=b({name:"BrandGoogleLogo24Icon",svgTemplate:f`
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
    `}),Uv=b({name:"BrandIcScan24Icon",svgTemplate:f`
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
    `}),Vf=b({name:"BrandInstagram24Icon",svgTemplate:f`
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
    `}),Wv=b({name:"BrandInstagramFlat24Icon",svgTemplate:f`
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
    `}),jf=b({name:"BrandTelegram24Icon",svgTemplate:f`
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
    `}),Zf=b({name:"BrandTiktok24Icon",svgTemplate:f`
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
    `}),Gv=b({name:"BrandTiktokFlat24Icon",svgTemplate:f`
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
    `}),Uf=b({name:"BrandTwitch24Icon",svgTemplate:f`
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
    `}),Wf=b({name:"BrandTwitter24Icon",svgTemplate:f`
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
    `}),gt={"core-16":[N2,_2,cr],"core-24":[O2,B2,Ls,D2,R2,Ps,Af,q2,H2,F2,z2,V2,j2,Z2,Ef,Mf,U2,W2,If,G2,Y2,J2,Lf,Pf,K2,X2,Q2,ev,Nf,tv,rv,nv,ov,iv,av,sv,lv,cv,uv,dv,fv,Ns,hv,mv,pv,gv,vv,wv,yv,bv,_f,Of,$v,kv,xv,Sv,Iv,eo,Lv,Pv,Nv,_v],"core-48":[Ov,Rf,Bv],"core-64":[qf,Dv,Rv],cryptocurrencies:[qv,Hv,Fv,zv],logos:[Vv],"third-party-brands":[zf,jv,Zv,Uv,Vf,Wv,jf,Zf,Gv,Uf,Wf]},Yv=dn({Discord:Pt(void 0,""),Instagram:Pt(void 0,""),Telegram:Pt(void 0,""),TikTok:Pt(void 0,""),Twitch:Pt(void 0,""),Twitter:Pt(void 0,""),website:Pt(void 0,"")}),Jv=Yv.defaultValue,Gf={Discord:zf,Instagram:Vf,Telegram:jf,TikTok:Zf,Twitch:Uf,Twitter:Wf,website:Lf},jc="toniq-",{defineElement:re,defineElementNoInputs:Kv}=$s({assertInputs:e=>{if(!e.tagName.startsWith(jc))throw new Error(`Tag name should start with '${jc}' but got '${e.tagName}'`)}}),Ft=re()({tagName:"toniq-bold-space",styles:v`
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
        `}}),C=re()({tagName:"toniq-icon",styles:v`
        :host {
            display: inline-flex;
            ${P["vira-icon-fill-color"].name}: ${m["toniq-icon-fill-color"].value}
            ${P["vira-icon-stroke-color"].name}: ${m["toniq-icon-stroke-color"].value}
            ${P["vira-icon-stroke-width"].name}: ${m["toniq-icon-stroke-width"].value}
        }

        ${fe} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return f`
            <${fe.assign(e)}></${fe}>
        `}}),La=v`8px`;var nn=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(nn||{});const oe=re()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${He};
        }

        :host(:hover) button {
            ${j(k.accentPrimaryHover)};
        }

        :host(:active) button {
            ${j(k.accentPrimaryActive)};
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
            border-radius: ${La};
            ${j(k.accentPrimary)};
            padding: 10px;
            transition: color ${Q.interaction},
                background-color ${Q.interaction},
                border-color ${Q.interaction};
        }

        ${Et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${j(k.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${j(k.pagePrimary)};
            border-color: ${k.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Ut};
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
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function Xv(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Bs(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(d=>i==="+"?d>l:d<l).sort((d,h)=>i==="+"?d-h:h-d);let u;return c.length>0?u=c[0]:i==="+"?u=a:u=0,e.scrollTo({...r,[o==="x"?"left":"top"]:u})}function Qv(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(h,p){let g=parseFloat(h);return/%/.test(h)&&(g/=100,g*=p),g}let l=s(n,r.width),c=s(o,r.height),u=s(i,r.width),d=s(a,r.height);return{x:{before:l,after:u},y:{before:c,after:d}}}function ew(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Yf(e){let t=[];for(const r of e.children)t=t.concat(r,Yf(r));return t}function tw(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Yf(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const u of o){const d=u.getBoundingClientRect();if(t&&!ew(r,d,a))continue;const h=window.getComputedStyle(u);let[p,g]=h.getPropertyValue("scroll-snap-align").split(" ");typeof g>"u"&&(g=p);const w=i==="x"?g:p,y=d[s]-r[s]+e[c];switch(w){case"none":break;case"start":n[i].start.push(y);break;case"center":n[i].center.push(y+d[l]/2);break;case"end":n[i].end.push(y+d[l]);break}}}return n}function Bs(e){const t=e.getBoundingClientRect(),r=Qv(e),n=tw(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Zc([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Zc([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Zc(e){return Array.from(new Set(e))}const to="templates-container",rw=4e3;var Pa=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(Pa||{});const xe=re()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>v`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${Gg(`.${to}`)}

        .${_(to)} {
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
            ${j(k.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{_i({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||rw)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Uc(t.scrollSnapPositions,0),i=Uc(t.scrollSnapPositions,-1);return f`
            <div
                ${Jr(()=>{r({scrollSnapPositions:Bs(Na(n)).x})})}
                class=${to}
                ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${C.assign({icon:Ls})}
                        class=${Ae({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${T("click",()=>{_i({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${C}>
                </div>
                ${e.templates.map(a=>f`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${C.assign({icon:Ps})}
                        class=${Ae({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${T("click",()=>{_i({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${C}>
                </div>
            </div>
        `}});function Uc(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function Na(e){const t=e.shadowRoot.querySelector(`.${to}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function _i({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=Na(e),i=o.clientWidth,a=Bs(Na(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,u=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&u)r&&o.scrollTo({behavior:"smooth",left:l});else{const d=nw(e,t),h=Wc(o.scrollLeft,a,!1),p=t==="right"?1:-1,g=(o.clientWidth-d*3)*p,w=Wc((h||0)+g,a,!0);t==="right"&&w>h?o.scrollTo({behavior:"smooth",left:w}):t==="left"&&w<h?o.scrollTo({behavior:"smooth",left:w}):Xv(o,t)}}function nw(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Wc(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const ft=re()({tagName:"toniq-checkbox",events:{checkedChange:X()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ue("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ue("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ue("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ue("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ue("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>v`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            transition: color ${Q.interaction},
                background-color ${Q.interaction},
                opacity ${Q.interaction};
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

        ${Et({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Ut};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=f`
            <span class="checkbox ${e.checked?"checked":""}">
                <${C.assign({icon:Ef})}
                    class="check-mark ${Ae({hidden:!e.checked})}"
                ></${C}>
            </span>
        `,o=f`
            <slot
                class=${Ae({label:!0,checked:e.checked})}
            >
                <span
                    class=${Ae({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return f`
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
        `}});var _a=(e=>(e.Default="default",e.Secondary="secondary",e))(_a||{});const Oi=re()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${J.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${j(k.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${j(k.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${C.assign({icon:e.icon})}></${C}>
              `:"";return f`
            ${t}
            <slot>${e.text}</slot>
        `}});class Gt extends Error{}class ow extends Gt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class iw extends Gt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class aw extends Gt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Or extends Gt{}class Jf extends Gt{constructor(t){super(`Invalid unit ${t}`)}}class Ne extends Gt{}class ht extends Gt{constructor(){super("Zone is an abstract class")}}const x="numeric",Ye="short",Ee="long",Lo={year:x,month:x,day:x},Kf={year:x,month:Ye,day:x},sw={year:x,month:Ye,day:x,weekday:Ye},Xf={year:x,month:Ee,day:x},Qf={year:x,month:Ee,day:x,weekday:Ee},eh={hour:x,minute:x},th={hour:x,minute:x,second:x},rh={hour:x,minute:x,second:x,timeZoneName:Ye},nh={hour:x,minute:x,second:x,timeZoneName:Ee},oh={hour:x,minute:x,hourCycle:"h23"},ih={hour:x,minute:x,second:x,hourCycle:"h23"},ah={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Ye},sh={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Ee},lh={year:x,month:x,day:x,hour:x,minute:x},ch={year:x,month:x,day:x,hour:x,minute:x,second:x},uh={year:x,month:Ye,day:x,hour:x,minute:x},dh={year:x,month:Ye,day:x,hour:x,minute:x,second:x},lw={year:x,month:Ye,day:x,weekday:Ye,hour:x,minute:x},fh={year:x,month:Ee,day:x,hour:x,minute:x,timeZoneName:Ye},hh={year:x,month:Ee,day:x,hour:x,minute:x,second:x,timeZoneName:Ye},mh={year:x,month:Ee,day:x,weekday:Ee,hour:x,minute:x,timeZoneName:Ee},ph={year:x,month:Ee,day:x,weekday:Ee,hour:x,minute:x,second:x,timeZoneName:Ee};class vn{get type(){throw new ht}get name(){throw new ht}get ianaName(){return this.name}get isUniversal(){throw new ht}offsetName(t,r){throw new ht}formatOffset(t,r){throw new ht}offset(t){throw new ht}equals(t){throw new ht}get isValid(){throw new ht}}let Bi=null;class Xo extends vn{static get instance(){return Bi===null&&(Bi=new Xo),Bi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return vh(t,r,n)}formatOffset(t,r){return jr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let ro={};function cw(e){return ro[e]||(ro[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),ro[e]}const uw={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function dw(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,u]=n;return[a,o,i,s,l,c,u]}function fw(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=uw[i];i==="era"?n[s]=a:B(s)||(n[s]=parseInt(a,10))}return n}let Nn={};class st extends vn{static create(t){return Nn[t]||(Nn[t]=new st(t)),Nn[t]}static resetCache(){Nn={},ro={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=st.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return vh(t,r,n,this.name)}formatOffset(t,r){return jr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=cw(this.name);let[o,i,a,s,l,c,u]=n.formatToParts?fw(n,r):dw(n,r);s==="BC"&&(o=-Math.abs(o)+1);const h=ei({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:u,millisecond:0});let p=+r;const g=p%1e3;return p-=g>=0?g:1e3+g,(h-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Gc={};function hw(e,t={}){const r=JSON.stringify([e,t]);let n=Gc[r];return n||(n=new Intl.ListFormat(e,t),Gc[r]=n),n}let Oa={};function Ba(e,t={}){const r=JSON.stringify([e,t]);let n=Oa[r];return n||(n=new Intl.DateTimeFormat(e,t),Oa[r]=n),n}let Da={};function mw(e,t={}){const r=JSON.stringify([e,t]);let n=Da[r];return n||(n=new Intl.NumberFormat(e,t),Da[r]=n),n}let Ra={};function pw(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Ra[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Ra[o]=i),i}let Br=null;function gw(){return Br||(Br=new Intl.DateTimeFormat().resolvedOptions().locale,Br)}function vw(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Ba(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=Ba(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function ww(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function yw(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function bw(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function _n(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function $w(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class kw{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=mw(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Rs(t,3);return se(r,this.padTo)}}}class xw{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&st.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Ba(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Sw{constructor(t,r,n){this.opts={style:"long",...n},!r&&gh()&&(this.rtf=pw(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Fw(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}class K{static fromOpts(t){return K.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,r,n,o=!1){const i=t||te.defaultLocale,a=i||(o?"en-US":gw()),s=r||te.defaultNumberingSystem,l=n||te.defaultOutputCalendar;return new K(a,s,l,i)}static resetCache(){Br=null,Oa={},Da={},Ra={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n}={}){return K.create(t,r,n)}constructor(t,r,n,o){const[i,a,s]=vw(t);this.locale=i,this.numberingSystem=r||a||null,this.outputCalendar=n||s||null,this.intl=ww(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=$w(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:K.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return _n(this,t,bh,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=yw(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return _n(this,t,xh,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=bw(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return _n(this,void 0,()=>Sh,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return _n(this,t,Th,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new kw(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new xw(t,this.intl,r)}relFormatter(t={}){return new Sw(this.intl,this.isEnglish(),t)}listFormatter(t={}){return hw(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Di=null;class ye extends vn{static get utcInstance(){return Di===null&&(Di=new ye(0)),Di}static instance(t){return t===0?ye.utcInstance:new ye(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new ye(ti(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${jr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${jr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return jr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Tw extends vn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function vt(e,t){if(B(e)||e===null)return t;if(e instanceof vn)return e;if(Cw(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Xo.instance:r==="utc"||r==="gmt"?ye.utcInstance:ye.parseSpecifier(r)||st.create(e)}else return zt(e)?ye.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Tw(e)}let Yc=()=>Date.now(),Jc="system",Kc=null,Xc=null,Qc=null,eu=60,tu;class te{static get now(){return Yc}static set now(t){Yc=t}static set defaultZone(t){Jc=t}static get defaultZone(){return vt(Jc,Xo.instance)}static get defaultLocale(){return Kc}static set defaultLocale(t){Kc=t}static get defaultNumberingSystem(){return Xc}static set defaultNumberingSystem(t){Xc=t}static get defaultOutputCalendar(){return Qc}static set defaultOutputCalendar(t){Qc=t}static get twoDigitCutoffYear(){return eu}static set twoDigitCutoffYear(t){eu=t%100}static get throwOnInvalid(){return tu}static set throwOnInvalid(t){tu=t}static resetCaches(){K.resetCache(),st.resetCache()}}function B(e){return typeof e>"u"}function zt(e){return typeof e=="number"}function Qo(e){return typeof e=="number"&&e%1===0}function Cw(e){return typeof e=="string"}function Aw(e){return Object.prototype.toString.call(e)==="[object Date]"}function gh(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Ew(e){return Array.isArray(e)?e:[e]}function ru(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Mw(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function vr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function at(e,t,r){return Qo(e)&&e>=t&&e<=r}function Iw(e,t){return e-t*Math.floor(e/t)}function se(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function pt(e){if(!(B(e)||e===null||e===""))return parseInt(e,10)}function Nt(e){if(!(B(e)||e===null||e===""))return parseFloat(e)}function Ds(e){if(!(B(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Rs(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function wn(e){return e%4===0&&(e%100!==0||e%400===0)}function Vr(e){return wn(e)?366:365}function Po(e,t){const r=Iw(t-1,12)+1,n=e+(t-r)/12;return r===2?wn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ei(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function No(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,r=e-1,n=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return t===4||n===3?53:52}function qa(e){return e>99?e:e>te.twoDigitCutoffYear?1900+e:2e3+e}function vh(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function ti(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function wh(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ne(`Invalid unit value ${e}`);return t}function _o(e,t){const r={};for(const n in e)if(vr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=wh(o)}return r}function jr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${se(r,2)}:${se(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${se(r,2)}${se(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ri(e){return Mw(e,["hour","minute","second","millisecond"])}const Lw=["January","February","March","April","May","June","July","August","September","October","November","December"],yh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Pw=["J","F","M","A","M","J","J","A","S","O","N","D"];function bh(e){switch(e){case"narrow":return[...Pw];case"short":return[...yh];case"long":return[...Lw];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const $h=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],kh=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Nw=["M","T","W","T","F","S","S"];function xh(e){switch(e){case"narrow":return[...Nw];case"short":return[...kh];case"long":return[...$h];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Sh=["AM","PM"],_w=["Before Christ","Anno Domini"],Ow=["BC","AD"],Bw=["B","A"];function Th(e){switch(e){case"narrow":return[...Bw];case"short":return[...Ow];case"long":return[..._w];default:return null}}function Dw(e){return Sh[e.hour<12?0:1]}function Rw(e,t){return xh(t)[e.weekday-1]}function qw(e,t){return bh(t)[e.month-1]}function Hw(e,t){return Th(t)[e.year<0?0:1]}function Fw(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${o[e][0]}`;case-1:return d?"yesterday":`last ${o[e][0]}`;case 0:return d?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],u=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${u} ago`:`in ${s} ${u}`}function nu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const zw={D:Lo,DD:Kf,DDD:Xf,DDDD:Qf,t:eh,tt:th,ttt:rh,tttt:nh,T:oh,TT:ih,TTT:ah,TTTT:sh,f:lh,ff:uh,fff:fh,ffff:mh,F:ch,FF:dh,FFF:hh,FFFF:ph};class we{static create(t,r={}){return new we(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return zw[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return se(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(p,g)=>this.loc.extract(t,p,g),a=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",s=()=>n?Dw(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(p,g)=>n?qw(t,p):i(g?{month:p}:{month:p,day:"numeric"},"month"),c=(p,g)=>n?Rw(t,p):i(g?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),u=p=>{const g=we.macroTokenToFormatOpts(p);return g?this.formatWithSystemDefault(t,g):p},d=p=>n?Hw(t,p):i({era:p},"era"),h=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(p)}};return nu(we.parseFormat(r),h)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const u=n(c);return u?this.num(l.get(u),c.length):c},i=we.parseFormat(r),a=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return nu(i,o(s))}}class Ge{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ch=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function br(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function $r(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function kr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function Ah(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=pt(t[r+o]);return[n,null,r+o]}}const Eh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Vw=`(?:${Eh.source}?(?:\\[(${Ch.source})\\])?)?`,qs=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Mh=RegExp(`${qs.source}${Vw}`),Hs=RegExp(`(?:T${Mh.source})?`),jw=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Zw=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Uw=/(\d{4})-?(\d{3})/,Ww=Ah("weekYear","weekNumber","weekDay"),Gw=Ah("year","ordinal"),Yw=/(\d{4})-(\d\d)-(\d\d)/,Ih=RegExp(`${qs.source} ?(?:${Eh.source}|(${Ch.source}))?`),Jw=RegExp(`(?: ${Ih.source})?`);function ur(e,t,r){const n=e[t];return B(n)?r:pt(n)}function Kw(e,t){return[{year:ur(e,t),month:ur(e,t+1,1),day:ur(e,t+2,1)},null,t+3]}function xr(e,t){return[{hours:ur(e,t,0),minutes:ur(e,t+1,0),seconds:ur(e,t+2,0),milliseconds:Ds(e[t+3])},null,t+4]}function yn(e,t){const r=!e[t]&&!e[t+1],n=ti(e[t+1],e[t+2]),o=r?null:ye.instance(n);return[{},o,t+3]}function bn(e,t){const r=e[t]?st.create(e[t]):null;return[{},r,t+1]}const Xw=RegExp(`^T?${qs.source}$`),Qw=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ey(e){const[t,r,n,o,i,a,s,l,c]=e,u=t[0]==="-",d=l&&l[0]==="-",h=(p,g=!1)=>p!==void 0&&(g||p&&u)?-p:p;return[{years:h(Nt(r)),months:h(Nt(n)),weeks:h(Nt(o)),days:h(Nt(i)),hours:h(Nt(a)),minutes:h(Nt(s)),seconds:h(Nt(l),l==="-0"),milliseconds:h(Ds(c),d)}]}const ty={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Fs(e,t,r,n,o,i,a){const s={year:t.length===2?qa(pt(t)):pt(t),month:yh.indexOf(r)+1,day:pt(n),hour:pt(o),minute:pt(i)};return a&&(s.second=pt(a)),e&&(s.weekday=e.length>3?$h.indexOf(e)+1:kh.indexOf(e)+1),s}const ry=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function ny(e){const[,t,r,n,o,i,a,s,l,c,u,d]=e,h=Fs(t,o,n,r,i,a,s);let p;return l?p=ty[l]:c?p=0:p=ti(u,d),[h,new ye(p)]}function oy(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const iy=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,ay=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,sy=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ou(e){const[,t,r,n,o,i,a,s]=e;return[Fs(t,o,n,r,i,a,s),ye.utcInstance]}function ly(e){const[,t,r,n,o,i,a,s]=e;return[Fs(t,s,r,n,o,i,a),ye.utcInstance]}const cy=br(jw,Hs),uy=br(Zw,Hs),dy=br(Uw,Hs),fy=br(Mh),Lh=$r(Kw,xr,yn,bn),hy=$r(Ww,xr,yn,bn),my=$r(Gw,xr,yn,bn),py=$r(xr,yn,bn);function gy(e){return kr(e,[cy,Lh],[uy,hy],[dy,my],[fy,py])}function vy(e){return kr(oy(e),[ry,ny])}function wy(e){return kr(e,[iy,ou],[ay,ou],[sy,ly])}function yy(e){return kr(e,[Qw,ey])}const by=$r(xr);function $y(e){return kr(e,[Xw,by])}const ky=br(Yw,Jw),xy=br(Ih),Sy=$r(xr,yn,bn);function Ty(e){return kr(e,[ky,Lh],[xy,Sy])}const iu="Invalid Duration",Ph={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Cy={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Ph},Le=146097/400,er=146097/4800,Ay={years:{quarters:4,months:12,weeks:Le/7,days:Le,hours:Le*24,minutes:Le*24*60,seconds:Le*24*60*60,milliseconds:Le*24*60*60*1e3},quarters:{months:3,weeks:Le/28,days:Le/4,hours:Le*24/4,minutes:Le*24*60/4,seconds:Le*24*60*60/4,milliseconds:Le*24*60*60*1e3/4},months:{weeks:er/7,days:er,hours:er*24,minutes:er*24*60,seconds:er*24*60*60,milliseconds:er*24*60*60*1e3},...Ph},qt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Ey=qt.slice(0).reverse();function mt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new H(n)}function Nh(e,t){let r=t.milliseconds??0;for(const n of Ey.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function au(e,t){const r=Nh(e,t)<0?-1:1;qt.reduceRight((n,o)=>{if(B(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),qt.reduce((n,o)=>{if(B(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function My(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class H{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Ay:Cy;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||K.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return H.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Ne(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new H({values:_o(t,H.normalizeUnit),loc:K.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(zt(t))return H.fromMillis(t);if(H.isDuration(t))return t;if(typeof t=="object")return H.fromObject(t);throw new Ne(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=yy(t);return n?H.fromObject(n,r):H.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=$y(t);return n?H.fromObject(n,r):H.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Ne("need to specify a reason the Duration is invalid");const n=t instanceof Ge?t:new Ge(t,r);if(te.throwOnInvalid)throw new aw(n);return new H({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Jf(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?we.create(this.loc,n).formatDurationFromString(this,t):iu}toHuman(t={}){if(!this.isValid)return iu;const r=qt.map(n=>{const o=this.values[n];return B(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Rs(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?Nh(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=H.fromDurationLike(t),n={};for(const o of qt)(vr(r.values,o)||vr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return mt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=H.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=wh(t(this.values[n],n));return mt(this,{values:r},!0)}get(t){return this[H.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,..._o(t,H.normalizeUnit)};return mt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return mt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return au(this.matrix,t),mt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=My(this.normalize().shiftToAll().toObject());return mt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>H.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of qt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;zt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else zt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return au(this.matrix,r),mt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return mt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of qt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const tr="Invalid Interval";function Iy(e,t){return!e||!e.isValid?ee.invalid("missing or invalid start"):!t||!t.isValid?ee.invalid("missing or invalid end"):t<e?ee.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ee{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Ne("need to specify a reason the Interval is invalid");const n=t instanceof Ge?t:new Ge(t,r);if(te.throwOnInvalid)throw new iw(n);return new ee({invalid:n})}static fromDateTimes(t,r){const n=Ir(t),o=Ir(r),i=Iy(n,o);return i??new ee({start:n,end:o})}static after(t,r){const n=H.fromDurationLike(r),o=Ir(t);return ee.fromDateTimes(o,o.plus(n))}static before(t,r){const n=H.fromDurationLike(r),o=Ir(t);return ee.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=I.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=I.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return ee.fromDateTimes(i,s);if(a){const c=H.fromISO(o,r);if(c.isValid)return ee.after(i,c)}else if(l){const c=H.fromISO(n,r);if(c.isValid)return ee.before(s,c)}}return ee.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;const r=this.start.startOf(t),n=this.end.startOf(t);return Math.floor(n.diff(r,t).get(t))+(n.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ee.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Ir).filter(a=>this.contains(a)).sort(),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(ee.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=H.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ee.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ee.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ee.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ee.fromDateTimes(r,l.time)),r=null);return ee.merge(o)}difference(...t){return ee.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:tr}toLocaleString(t=Lo,r={}){return this.isValid?we.create(this.s.loc.clone(r),t).formatInterval(this):tr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:tr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:tr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:tr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:tr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):H.invalid(this.invalidReason)}mapEndpoints(t){return ee.fromDateTimes(t(this.s),t(this.e))}}class Dr{static hasDST(t=te.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return st.isValidZone(t)}static normalizeZone(t){return vt(t,te.defaultZone)}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||K.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||K.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||K.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||K.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return K.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return K.create(r,null,"gregory").eras(t)}static features(){return{relative:gh()}}}function su(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(H.fromMillis(n).as("days"))}function Ly(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=su(l,c);return(u-u%7)/7}],["days",su]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function Py(e,t,r,n){let[o,i,a,s]=Ly(e,t,r);const l=t-o,c=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const u=H.fromObject(i,n);return c.length>0?H.fromMillis(l,n).shiftTo(...c).plus(u):u}const zs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},lu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Ny=zs.hanidec.replace(/[\[|\]]/g,"").split("");function _y(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(zs.hanidec)!==-1)t+=Ny.indexOf(e[r]);else for(const o in lu){const[i,a]=lu[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function ze({numberingSystem:e},t=""){return new RegExp(`${zs[e||"latn"]}${t}`)}const Oy="missing Intl.DateTimeFormat.formatToParts support";function F(e,t=r=>r){return{regex:e,deser:([r])=>t(_y(r))}}const By=String.fromCharCode(160),_h=`[ ${By}]`,Oh=new RegExp(_h,"g");function Dy(e){return e.replace(/\./g,"\\.?").replace(Oh,_h)}function cu(e){return e.replace(/\./g,"").replace(Oh," ").toLowerCase()}function Ve(e,t){return e===null?null:{regex:RegExp(e.map(Dy).join("|")),deser:([r])=>e.findIndex(n=>cu(r)===cu(n))+t}}function uu(e,t){return{regex:e,deser:([,r,n])=>ti(r,n),groups:t}}function On(e){return{regex:e,deser:([t])=>t}}function Ry(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function qy(e,t){const r=ze(t),n=ze(t,"{2}"),o=ze(t,"{3}"),i=ze(t,"{4}"),a=ze(t,"{6}"),s=ze(t,"{1,2}"),l=ze(t,"{1,3}"),c=ze(t,"{1,6}"),u=ze(t,"{1,9}"),d=ze(t,"{2,4}"),h=ze(t,"{4,6}"),p=y=>({regex:RegExp(Ry(y.val)),deser:([$])=>$,literal:!0}),w=(y=>{if(e.literal)return p(y);switch(y.val){case"G":return Ve(t.eras("short"),0);case"GG":return Ve(t.eras("long"),0);case"y":return F(c);case"yy":return F(d,qa);case"yyyy":return F(i);case"yyyyy":return F(h);case"yyyyyy":return F(a);case"M":return F(s);case"MM":return F(n);case"MMM":return Ve(t.months("short",!0),1);case"MMMM":return Ve(t.months("long",!0),1);case"L":return F(s);case"LL":return F(n);case"LLL":return Ve(t.months("short",!1),1);case"LLLL":return Ve(t.months("long",!1),1);case"d":return F(s);case"dd":return F(n);case"o":return F(l);case"ooo":return F(o);case"HH":return F(n);case"H":return F(s);case"hh":return F(n);case"h":return F(s);case"mm":return F(n);case"m":return F(s);case"q":return F(s);case"qq":return F(n);case"s":return F(s);case"ss":return F(n);case"S":return F(l);case"SSS":return F(o);case"u":return On(u);case"uu":return On(s);case"uuu":return F(r);case"a":return Ve(t.meridiems(),0);case"kkkk":return F(i);case"kk":return F(d,qa);case"W":return F(s);case"WW":return F(n);case"E":case"c":return F(r);case"EEE":return Ve(t.weekdays("short",!1),1);case"EEEE":return Ve(t.weekdays("long",!1),1);case"ccc":return Ve(t.weekdays("short",!0),1);case"cccc":return Ve(t.weekdays("long",!0),1);case"Z":case"ZZ":return uu(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return uu(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return On(/[a-z_+-/]{1,256}?/i);case" ":return On(/[^\S\n\r]/);default:return p(y)}})(e)||{invalidReason:Oy};return w.token=e,w}const Hy={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Fy(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=Hy[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function zy(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Vy(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(vr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function jy(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return B(e.z)||(r=st.create(e.z)),B(e.Z)||(r||(r=new ye(e.Z)),n=e.Z),B(e.q)||(e.M=(e.q-1)*3+1),B(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),B(e.u)||(e.S=Ds(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let Ri=null;function Zy(){return Ri||(Ri=I.fromMillis(1555555555555)),Ri}function Uy(e,t){if(e.literal)return e;const r=we.macroTokenToFormatOpts(e.val),n=Rh(r,t);return n==null||n.includes(void 0)?e:n}function Bh(e,t){return Array.prototype.concat(...e.map(r=>Uy(r,t)))}function Dh(e,t,r){const n=Bh(we.parseFormat(r),e),o=n.map(a=>qy(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=zy(o),l=RegExp(a,"i"),[c,u]=Vy(t,l,s),[d,h,p]=u?jy(u):[null,null,void 0];if(vr(u,"a")&&vr(u,"H"))throw new Or("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:u,result:d,zone:h,specificOffset:p}}}function Wy(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=Dh(e,t,r);return[n,o,i,a]}function Rh(e,t){if(!e)return null;const n=we.create(t,e).dtFormatter(Zy()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>Fy(a,e,i))}const qh=[0,31,59,90,120,151,181,212,243,273,304,334],Hh=[0,31,60,91,121,152,182,213,244,274,305,335];function Be(e,t){return new Ge("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Fh(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function zh(e,t,r){return r+(wn(e)?Hh:qh)[t-1]}function Vh(e,t){const r=wn(e)?Hh:qh,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Ha(e){const{year:t,month:r,day:n}=e,o=zh(t,r,n),i=Fh(t,r,n);let a=Math.floor((o-i+10)/7),s;return a<1?(s=t-1,a=No(s)):a>No(t)?(s=t+1,a=1):s=t,{weekYear:s,weekNumber:a,weekday:i,...ri(e)}}function du(e){const{weekYear:t,weekNumber:r,weekday:n}=e,o=Fh(t,1,4),i=Vr(t);let a=r*7+n-o-3,s;a<1?(s=t-1,a+=Vr(s)):a>i?(s=t+1,a-=Vr(t)):s=t;const{month:l,day:c}=Vh(s,a);return{year:s,month:l,day:c,...ri(e)}}function qi(e){const{year:t,month:r,day:n}=e,o=zh(t,r,n);return{year:t,ordinal:o,...ri(e)}}function fu(e){const{year:t,ordinal:r}=e,{month:n,day:o}=Vh(t,r);return{year:t,month:n,day:o,...ri(e)}}function Gy(e){const t=Qo(e.weekYear),r=at(e.weekNumber,1,No(e.weekYear)),n=at(e.weekday,1,7);return t?r?n?!1:Be("weekday",e.weekday):Be("week",e.week):Be("weekYear",e.weekYear)}function Yy(e){const t=Qo(e.year),r=at(e.ordinal,1,Vr(e.year));return t?r?!1:Be("ordinal",e.ordinal):Be("year",e.year)}function jh(e){const t=Qo(e.year),r=at(e.month,1,12),n=at(e.day,1,Po(e.year,e.month));return t?r?n?!1:Be("day",e.day):Be("month",e.month):Be("year",e.year)}function Zh(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=at(t,0,23)||t===24&&r===0&&n===0&&o===0,a=at(r,0,59),s=at(n,0,59),l=at(o,0,999);return i?a?s?l?!1:Be("millisecond",o):Be("second",n):Be("minute",r):Be("hour",t)}const Hi="Invalid DateTime",hu=864e13;function Bn(e){return new Ge("unsupported zone",`the zone "${e.name}" is not supported`)}function Fi(e){return e.weekData===null&&(e.weekData=Ha(e.c)),e.weekData}function _t(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function Uh(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Dn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function no(e,t,r){return Uh(ei(e),t,r)}function mu(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Po(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=H.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=ei(i);let[l,c]=Uh(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Mr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=I.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return I.invalid(new Ge("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Rn(e,t,r=!0){return e.isValid?we.create(K.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function zi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=se(e.c.year,r?6:4),t?(n+="-",n+=se(e.c.month),n+="-",n+=se(e.c.day)):(n+=se(e.c.month),n+=se(e.c.day)),n}function pu(e,t,r,n,o,i){let a=se(e.c.hour);return t?(a+=":",a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=se(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=se(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=se(Math.trunc(-e.o/60)),a+=":",a+=se(Math.trunc(-e.o%60))):(a+="+",a+=se(Math.trunc(e.o/60)),a+=":",a+=se(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const Wh={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Jy={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Ky={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Gh=["year","month","day","hour","minute","second","millisecond"],Xy=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Qy=["year","ordinal","hour","minute","second","millisecond"];function gu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Jf(e);return t}function vu(e,t){const r=vt(t.zone,te.defaultZone),n=K.fromObject(t),o=te.now();let i,a;if(B(e.year))i=o;else{for(const c of Gh)B(e[c])&&(e[c]=Wh[c]);const s=jh(e)||Zh(e);if(s)return I.invalid(s);const l=r.offset(o);[i,a]=no(e,l,r)}return new I({ts:i,zone:r,loc:n,o:a})}function wu(e,t,r){const n=B(r.round)?!0:r.round,o=(a,s)=>(a=Rs(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function yu(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class I{constructor(t){const r=t.zone||te.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Ge("invalid input"):null)||(r.isValid?null:Bn(r));this.ts=B(t.ts)?te.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=Dn(this.ts,s),n=Number.isNaN(o.year)?new Ge("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||K.create(),this.invalid=n,this.weekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=yu(arguments),[n,o,i,a,s,l,c]=r;return vu({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=yu(arguments),[n,o,i,a,s,l,c]=r;return t.zone=ye.utcInstance,vu({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=Aw(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const o=vt(r.zone,te.defaultZone);return o.isValid?new I({ts:n,zone:o,loc:K.fromObject(r)}):I.invalid(Bn(o))}static fromMillis(t,r={}){if(zt(t))return t<-hu||t>hu?I.invalid("Timestamp out of range"):new I({ts:t,zone:vt(r.zone,te.defaultZone),loc:K.fromObject(r)});throw new Ne(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(zt(t))return new I({ts:t*1e3,zone:vt(r.zone,te.defaultZone),loc:K.fromObject(r)});throw new Ne("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=vt(r.zone,te.defaultZone);if(!n.isValid)return I.invalid(Bn(n));const o=te.now(),i=B(r.specificOffset)?n.offset(o):r.specificOffset,a=_o(t,gu),s=!B(a.ordinal),l=!B(a.year),c=!B(a.month)||!B(a.day),u=l||c,d=a.weekYear||a.weekNumber,h=K.fromObject(r);if((u||s)&&d)throw new Or("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&s)throw new Or("Can't mix ordinal dates with month/day");const p=d||a.weekday&&!u;let g,w,y=Dn(o,i);p?(g=Xy,w=Jy,y=Ha(y)):s?(g=Qy,w=Ky,y=qi(y)):(g=Gh,w=Wh);let $=!1;for(const q of g){const ue=a[q];B(ue)?$?a[q]=w[q]:a[q]=y[q]:$=!0}const S=p?Gy(a):s?Yy(a):jh(a),L=S||Zh(a);if(L)return I.invalid(L);const D=p?du(a):s?fu(a):a,[ae,he]=no(D,i,n),ne=new I({ts:ae,zone:n,o:he,loc:h});return a.weekday&&u&&t.weekday!==ne.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${ne.toISO()}`):ne}static fromISO(t,r={}){const[n,o]=gy(t);return Mr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=vy(t);return Mr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=wy(t);return Mr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(B(t)||B(r))throw new Ne("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=K.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,u]=Wy(a,t,r);return u?I.invalid(u):Mr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Ty(t);return Mr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Ne("need to specify a reason the DateTime is invalid");const n=t instanceof Ge?t:new Ge(t,r);if(te.throwOnInvalid)throw new ow(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Rh(t,K.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Bh(we.parseFormat(t),K.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Fi(this).weekYear:NaN}get weekNumber(){return this.isValid?Fi(this).weekNumber:NaN}get weekday(){return this.isValid?Fi(this).weekday:NaN}get ordinal(){return this.isValid?qi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Dr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Dr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Dr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Dr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=ei(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,u=Dn(l,a),d=Dn(c,s);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[_t(this,{ts:l}),_t(this,{ts:c})]:[this]}get isInLeapYear(){return wn(this.year)}get daysInMonth(){return Po(this.year,this.month)}get daysInYear(){return this.isValid?Vr(this.year):NaN}get weeksInWeekYear(){return this.isValid?No(this.weekYear):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=we.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(ye.instance(t),r)}toLocal(){return this.setZone(te.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=vt(t,te.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=no(a,i,t)}return _t(this,{ts:o,zone:t})}else return I.invalid(Bn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return _t(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=_o(t,gu),n=!B(r.weekYear)||!B(r.weekNumber)||!B(r.weekday),o=!B(r.ordinal),i=!B(r.year),a=!B(r.month)||!B(r.day),s=i||a,l=r.weekYear||r.weekNumber;if((s||o)&&l)throw new Or("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&o)throw new Or("Can't mix ordinal dates with month/day");let c;n?c=du({...Ha(this.c),...r}):B(r.ordinal)?(c={...this.toObject(),...r},B(r.day)&&(c.day=Math.min(Po(c.year,c.month),c.day))):c=fu({...qi(this.c),...r});const[u,d]=no(c,this.o,this.zone);return _t(this,{ts:u,o:d})}plus(t){if(!this.isValid)return this;const r=H.fromDurationLike(t);return _t(this,mu(this,r))}minus(t){if(!this.isValid)return this;const r=H.fromDurationLike(t).negate();return _t(this,mu(this,r))}startOf(t){if(!this.isValid)return this;const r={},n=H.normalizeUnit(t);switch(n){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(n==="weeks"&&(r.weekday=1),n==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,r={}){return this.isValid?we.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Hi}toLocaleString(t=Lo,r={}){return this.isValid?we.create(this.loc.clone(r),t).formatDateTime(this):Hi}toLocaleParts(t={}){return this.isValid?we.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=zi(this,a);return s+="T",s+=pu(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?zi(this,t==="extended"):null}toISOWeekDate(){return Rn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+pu(this,a==="extended",r,t,n,i):null}toRFC2822(){return Rn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Rn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?zi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Rn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Hi}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return H.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Ew(r).map(H.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=Py(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ee.fromDateTimes(this,t):this}hasSame(t,r){if(!this.isValid)return!1;const n=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r)<=n&&n<=o.endOf(r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),wu(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?wu(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new Ne("min requires all arguments be DateTimes");return ru(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new Ne("max requires all arguments be DateTimes");return ru(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=K.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Dh(a,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Lo}static get DATE_MED(){return Kf}static get DATE_MED_WITH_WEEKDAY(){return sw}static get DATE_FULL(){return Xf}static get DATE_HUGE(){return Qf}static get TIME_SIMPLE(){return eh}static get TIME_WITH_SECONDS(){return th}static get TIME_WITH_SHORT_OFFSET(){return rh}static get TIME_WITH_LONG_OFFSET(){return nh}static get TIME_24_SIMPLE(){return oh}static get TIME_24_WITH_SECONDS(){return ih}static get TIME_24_WITH_SHORT_OFFSET(){return ah}static get TIME_24_WITH_LONG_OFFSET(){return sh}static get DATETIME_SHORT(){return lh}static get DATETIME_SHORT_WITH_SECONDS(){return ch}static get DATETIME_MED(){return uh}static get DATETIME_MED_WITH_SECONDS(){return dh}static get DATETIME_MED_WITH_WEEKDAY(){return lw}static get DATETIME_FULL(){return fh}static get DATETIME_FULL_WITH_SECONDS(){return hh}static get DATETIME_HUGE(){return mh}static get DATETIME_HUGE_WITH_SECONDS(){return ph}}function Ir(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&zt(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new Ne(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function Vs(e){const t=I.fromObject(zg(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function eb(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}const tb=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],rb=tb.reduce((e,t)=>(e[t]=t,e),{}),nb=te.defaultZone.name,js=rb.UTC;var bu;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(bu||(bu={}));const ob=["hour","minute","second","millisecond"],ib=dn({hour:14,minute:19,second:7,millisecond:877,timezone:js}),ab=dn({year:2023,month:6,day:5,timezone:js}),sb=dn(rp(ab,ib));var $u;(function(e){e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})($u||($u={}));const lb=te.defaultLocale;function cb(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function ku(e,t){const r=Vs(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??lb});return cb(r)}function ub(e){if(!Dr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function db(e){Ed(e,sb),ub(e.timezone),Vs(e)}function fb(e){try{return db(e),!0}catch{return!1}}function hb(e,t){const r=mb(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return eb(r,t)}function xu(e){const t=I.fromJSDate(new Date(e));if(t.isValid)return t}function mb(e,t){if(fb(e)&&(e=Vs(e).toMillis()),I.isDateTime(e))return e.setZone(t);if(Mc(e,"number"))return I.fromMillis(e,{zone:js}).setZone(t);if(Mc(e,"string")){const r=I.fromISO(e,{zone:t});return r.isValid?r:xu(e)}else if(e instanceof Date)return I.fromJSDate(e).setZone(t);return xu(e)}function pb(e){return hb(Date.now(),e)}function gb(){return pb(nb)}const vb={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Vg(vb,ob);function wb(e){return{date:ku(e,{dateStyle:"medium"}).replace(/\s/g," "),time:ku(e,{timeStyle:"short"}).replace(/\s/g," ")}}const Vi=re()({tagName:"toniq-date-time",renderCallback({inputs:e}){const t=wb(e.fullDate),r=[e.parts.date&&t.date,e.parts.time&&t.time].filter(gn).join(" "),n=[t.date,t.time,`(${e.fullDate.timezone})`].join(" ");return f`
            <span title=${n}>${r}</span>
        `}}),yb="data-test-id",or=At(class extends lt{constructor(e){super(e),this.element=bb(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(yb,e),Me}});function bb(e,t,r){$b(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function $b(e,t){if(e.type!==ln.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Fa=(e=>(e.Up="up",e.Down="down",e))(Fa||{});const qn=re()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:X(),openChange:X()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
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

        ${Et({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${Q.interaction} linear transform;
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
            ${j(k.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${j(k.pagePrimary)}
            ${Io.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${Io.popupShadowReversed};
        }

        .selected-label-prefix {
            ${J.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${He};
        }

        .select-options .option.selected {
            ${j(k.accentPrimary)}
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
            ${Ut};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?f`
                  <${C.assign({icon:n.icon})}
                      ${or("rendered-input-icon")}
                  ></${C}>
              `:"",s=n.selectedLabelPrefix?f`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return f`
            <button
                ?disabled=${!!n.disabled}
                class=${Ae({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${C.assign({icon:Mf})}
                            class="trigger-icon"
                        ></${C}>
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
        `}}),Ze=re()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>!!e.linkDisabled},events:{routeChangeTriggered:X()},styles:({hostClasses:e})=>v`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){if(e.linkDisabled){o.preventDefault();return}e.treatAsRouteChange&&Ts(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?f`
                <a
                    href=${e.url}
                    ${T("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:f`
                <a href=${e.url} ${T("click",n)}><slot></slot></a>
            `}}),za=360,Yh=8;function Jh(e){return(e-Yh)/2}const sr=ct({"main-image-size":za,"secondary-image-size":Jh(za)}),rt=re()({tagName:"toniq-featured-flip-card-footer",styles:v`
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

        ${oe}, ${Ze} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${sr["secondary-image-size"].value} * 2);
        }

        ${Ze} ${oe} {
            width: 100%;
        }

        ${Ze} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${sr["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:X(),footerFlipCardButtonClick:X()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?et(n).map(i=>{const a=n[i];if(!a)return;const s=Gf[i];return f`
                          <${Ze.assign({newTab:!0,url:a})}>
                              <${C.assign({icon:s})}></${C}>
                          </${Ze}>
                      `}).filter(gn):"";return f`
            <div class="buttons">
                ${e.viewMoreButtonUrl?f`
                          <${Ze.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${T(Ze.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${oe.assign({text:e.viewMoreButtonText,buttonStyle:nn.Outline})}></${oe}>
                          </${Ze}>
                      `:f`
                          <${oe.assign({text:e.viewMoreButtonText,buttonStyle:nn.Outline})}
                              ${T("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${oe}>
                      `}
                ${e.flipCardButtonText?f`
                          <${oe.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${oe}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function kb(e){return!!e}function Kh(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function xb({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function Xh(e){return e?e instanceof Error?e.message:Oo(e,"message")?String(e.message):String(e):""}function ji(e){return e instanceof Error?e:new Error(Xh(e))}function Sb(e){return!!e&&typeof e=="object"}const Tb=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Oo(e,t){return e?Tb.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function on(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Qh(e,t,r=!1,n={}){const o=on(e),i=new Set(on(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Oo(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${u}`)}const l=e[a],c=t[a];n[a]||e0(l,c,s,r,n[a]??{})})}function e0(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Oo(t,"constructor")&&(!Oo(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{e0(l,d,r,n,o);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${Xh(h)}`)}}).filter(kb).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Sb(t)&&Qh(e,t,n,o)}function Zs(e){return Array.isArray(e)?"array":typeof e}function Bo(e,t){return Zs(e)===t}function Cb(e,t,r){if(!Bo(e,t))throw new TypeError(`'${r}' is of type '${Zs(e)}' but type '${t}' was expected.`)}function Su({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(Bo(r,"object")?Qh(n,r):Cb(n,Zs(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function Ab(e,t){return on(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Eb(e,t){return Ab(e,r=>!t.includes(r))}function t0(e,t){let r=!1;const n=on(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(on(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Mb(e){const t=ni();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class Ib extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function Lb(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new Ib(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function ni(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ni.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const Pb="px";function Hn(e){return Nb(e,Pb)}function Nb(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function _b(e,t){return e<t}function Ob(e,t){return e>t}const Tu={width:250,height:250};function Bb({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?Ob:_b)(t.width/t.height,e.width/e.height)?"width":"height"}function Zi({box:e,constraint:t,constraintType:r}){const n=Bb({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function r0({box:e,ratio:t}){return t0(e,(r,n)=>n*t)}function Va({box:e,min:t,max:r}){return t0(e,(n,o)=>xb({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function n0({min:e,max:t,box:r}){const n=o0({min:e,max:t,box:r}),o=r0({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Tu.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Tu.width)}}function o0({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?Zi({box:r,constraint:e,constraintType:"min"}):1,o=t?Zi({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=r0({ratio:i,box:r});return(e?Zi({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function Db(e){const t=Rb(e);return Bo(t,"object")||Bo(t,"array")}function Rb(e){const t=Su({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=qb(e);return Su({jsonString:r,errorHandler:()=>{}})}function qb(e){return Kh(e).replace(/,\s*([}\]])/,"$1")}const Us="vir-resizable-image";function Hb(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var wr=Hb();function Fb(){try{if(!wr||!wr.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Ws(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const E=Promise;function W(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function ir(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function ut(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Gs(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const ja="local-forage-detect-blob-support";let Fn;const qe={},zb=Object.prototype.toString,$n="readonly",oi="readwrite";function Vb(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function jb(e){return new E(function(t){var r=e.transaction(ja,oi),n=Ws([""]);r.objectStore(ja).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function Zb(e){return typeof Fn=="boolean"?E.resolve(Fn):jb(e).then(function(t){return Fn=t,Fn})}function Do(e){var t=qe[e.name],r={};r.promise=new E(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function Za(e){var t=qe[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Ua(e,t){var r=qe[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function i0(e,t){return new E(function(r,n){if(qe[e.name]=qe[e.name]||c0(),e.db)if(t)Do(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=wr.open.apply(wr,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(ja)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),Za(e)}})}function Ys(e){return i0(e,!1)}function Js(e){return i0(e,!0)}function a0(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function Ub(e){return new E(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function s0(e){var t=Vb(atob(e.data));return Ws([t],{type:e.type})}function l0(e){return e&&e.__local_forage_encoded_blob}function Wb(e){var t=this,r=t._initReady().then(function(){var n=qe[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return ir(r,e,e),r}function Gb(e){Do(e);for(var t=qe[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,Ys(e).then(o=>(e.db=o,a0(e)?Js(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw Ua(e,o),o})}function dt(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return E.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Js(e)}).then(()=>Gb(e).then(function(){dt(e,t,r,n-1)})).catch(r);r(i)}}function c0(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Yb(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=qe[r.name];o||(o=c0(),qe[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Wb);var i=[];function a(){return E.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return E.all(i).then(function(){return r.db=o.db,Ys(r)}).then(function(u){return r.db=u,a0(r,t._defaultConfig.version)?Js(r):u}).then(function(u){r.db=o.db=u,t._dbInfo=r;for(var d=0;d<c.length;d++){var h=c[d];h!==t&&(h._dbInfo.db=r.db,h._dbInfo.version=r.version)}})}function Jb(e,t){var r=this;e=ut(e);var n=new E(function(o,i){r.ready().then(function(){dt(r._dbInfo,$n,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),l0(u)&&(u=s0(u)),o(u)},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return W(n,t),n}function Kb(e,t){var r=this,n=new E(function(o,i){r.ready().then(function(){dt(r._dbInfo,$n,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var h=d.value;l0(h)&&(h=s0(h));var p=e(h,d.key,u++);p!==void 0?o(p):d.continue()}else o()},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return W(n,t),n}function Xb(e,t,r){var n=this;e=ut(e);var o=new E(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,zb.call(t)==="[object Blob]"?Zb(s.db).then(function(l){return l?t:Ub(t)}):t}).then(function(l){dt(n._dbInfo,oi,function(c,u){if(c)return a(c);try{var d=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var h=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),i(l)},u.onabort=u.onerror=function(){var p=h.error?h.error:h.transaction.error;a(p)}}catch(p){a(p)}})}).catch(a)});return W(o,r),o}function Qb(e,t){var r=this;e=ut(e);var n=new E(function(o,i){r.ready().then(function(){dt(r._dbInfo,oi,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return W(n,t),n}function e4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){dt(t._dbInfo,oi,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return W(r,e),r}function t4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){dt(t._dbInfo,$n,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return W(r,e),r}function r4(e,t){var r=this,n=new E(function(o,i){if(e<0){o(null);return}r.ready().then(function(){dt(r._dbInfo,$n,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){o(null);return}e===0||c?o(d.key):(c=!0,d.advance(e))},u.onerror=function(){i(u.error)}}catch(d){i(d)}})}).catch(i)});return W(n,t),n}function n4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){dt(t._dbInfo,$n,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){o(l.error)}}catch(u){o(u)}})}).catch(o)});return W(r,e),r}function o4(e,t){t=Gs.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=E.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?E.resolve(n._dbInfo.db):Ys(e).then(s=>{const l=qe[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Do(e);const c=qe[e.name],u=c.forages;s.close();for(let h=0;h<u.length;h++){const p=u[h];p._dbInfo.db=null,p._dbInfo.version=l}return new E((h,p)=>{const g=wr.open(e.name,l);g.onerror=w=>{g.result.close(),p(w)},g.onupgradeneeded=()=>{var w=g.result;w.deleteObjectStore(e.storeName)},g.onsuccess=()=>{const w=g.result;w.close(),h(w)}}).then(h=>{c.db=h;for(let p=0;p<u.length;p++){const g=u[p];g._dbInfo.db=h,Za(g._dbInfo)}}).catch(h=>{throw(Ua(e,h)||E.resolve()).catch(()=>{}),h})}):o=a.then(s=>{Do(e);const l=qe[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const h=c[u];h._dbInfo.db=null}return new E((h,p)=>{var g=wr.deleteDatabase(e.name);g.onerror=()=>{const w=g.result;w&&w.close(),p(g.error)},g.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},g.onsuccess=()=>{const w=g.result;w&&w.close(),h(w)}}).then(h=>{l.db=h;for(var p=0;p<c.length;p++){const g=c[p];Za(g._dbInfo)}}).catch(h=>{throw(Ua(e,h)||E.resolve()).catch(()=>{}),h})})}return W(o,t),o}var i4={_driver:"asyncStorage",_initStorage:Yb,_support:Fb(),iterate:Kb,getItem:Jb,setItem:Xb,removeItem:Qb,clear:e4,length:t4,key:r4,keys:n4,dropInstance:o4};function a4(){return typeof openDatabase=="function"}var yt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s4="~~local_forage_type~",Cu=/^~~local_forage_type~([^~]+)~/,Ro="__lfsc__:",Wa=Ro.length,Ks="arbf",Ga="blob",u0="si08",d0="ui08",f0="uic8",h0="si16",m0="si32",p0="ur16",g0="ui32",v0="fl32",w0="fl64",Au=Wa+Ks.length,Eu=Object.prototype.toString;function y0(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)i=yt.indexOf(e[n]),a=yt.indexOf(e[n+1]),s=yt.indexOf(e[n+2]),l=yt.indexOf(e[n+3]),u[o++]=i<<2|a>>4,u[o++]=(a&15)<<4|s>>2,u[o++]=(s&3)<<6|l&63;return c}function Ya(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=yt[t[n]>>2],r+=yt[(t[n]&3)<<4|t[n+1]>>4],r+=yt[(t[n+1]&15)<<2|t[n+2]>>6],r+=yt[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function l4(e,t){var r="";if(e&&(r=Eu.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Eu.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Ro;e instanceof ArrayBuffer?(n=e,o+=Ks):(n=e.buffer,r==="[object Int8Array]"?o+=u0:r==="[object Uint8Array]"?o+=d0:r==="[object Uint8ClampedArray]"?o+=f0:r==="[object Int16Array]"?o+=h0:r==="[object Uint16Array]"?o+=p0:r==="[object Int32Array]"?o+=m0:r==="[object Uint32Array]"?o+=g0:r==="[object Float32Array]"?o+=v0:r==="[object Float64Array]"?o+=w0:t(new Error("Failed to get type for BinaryArray"))),t(o+Ya(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=s4+e.type+"~"+Ya(this.result);t(Ro+Ga+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function c4(e){if(e.substring(0,Wa)!==Ro)return JSON.parse(e);var t=e.substring(Au),r=e.substring(Wa,Au),n;if(r===Ga&&Cu.test(t)){var o=t.match(Cu);n=o[1],t=t.substring(o[0].length)}var i=y0(t);switch(r){case Ks:return i;case Ga:return Ws([i],{type:n});case u0:return new Int8Array(i);case d0:return new Uint8Array(i);case f0:return new Uint8ClampedArray(i);case h0:return new Int16Array(i);case p0:return new Uint16Array(i);case m0:return new Int32Array(i);case g0:return new Uint32Array(i);case v0:return new Float32Array(i);case w0:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var Xs={serialize:l4,deserialize:c4,stringToBuffer:y0,bufferToString:Ya};function b0(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function u4(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new E(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){b0(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=Xs,o}function Mt(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):b0(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function d4(e,t){var r=this;e=ut(e);var n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Mt(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),o(u)},function(l,c){i(c)})})}).catch(i)});return W(n,t),n}function f4(e,t){var r=this,n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Mt(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,h=0;h<d;h++){var p=u.item(h),g=p.value;if(g&&(g=a.serializer.deserialize(g)),g=e(g,p.key,h+1),g!==void 0){o(g);return}}o()},function(l,c){i(c)})})}).catch(i)});return W(n,t),n}function $0(e,t,r,n){var o=this;e=ut(e);var i=new E(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(u,d){d?s(d):c.db.transaction(function(h){Mt(h,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(p,g){s(g)})},function(h){if(h.code===h.QUOTA_ERR){if(n>0){a($0.apply(o,[e,l,r,n-1]));return}s(h)}})})}).catch(s)});return W(i,r),i}function h4(e,t,r){return $0.apply(this,[e,t,r,1])}function m4(e,t){var r=this;e=ut(e);var n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Mt(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return W(n,t),n}function p4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Mt(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return W(r,e),r}function g4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Mt(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return W(r,e),r}function v4(e,t){var r=this,n=new E(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Mt(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;o(u)},function(l,c){i(c)})})}).catch(i)});return W(n,t),n}function w4(e){var t=this,r=new E(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Mt(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(s,l){o(l)})})}).catch(o)});return W(r,e),r}function y4(e){return new E(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function b4(e,t){t=Gs.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new E(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(y4(a))}).then(function(i){return new E(function(a,s){i.db.transaction(function(l){function c(p){return new E(function(g,w){l.executeSql(`DROP TABLE IF EXISTS ${p}`,[],function(){g()},function(y,$){w($)})})}for(var u=[],d=0,h=i.storeNames.length;d<h;d++)u.push(c(i.storeNames[d]));E.all(u).then(function(){a()}).catch(function(p){s(p)})},function(l){s(l)})})}):o=E.reject("Invalid arguments"),W(o,t),o}var $4={_driver:"webSQLStorage",_initStorage:u4,_support:a4(),iterate:f4,getItem:d4,setItem:h4,removeItem:m4,clear:p4,length:g4,key:v4,keys:w4,dropInstance:b4};function k4(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function k0(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function x4(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function S4(){return!x4()||localStorage.length>0}function T4(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=k0(e,t._defaultConfig),S4()?(t._dbInfo=r,r.serializer=Xs,E.resolve()):E.reject()}function C4(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return W(r,e),r}function A4(e,t){var r=this;e=ut(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return W(n,t),n}function E4(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(i)===0){var d=localStorage.getItem(u);if(d&&(d=o.serializer.deserialize(d)),d=e(d,u.substring(a),l++),d!==void 0)return d}}});return W(n,t),n}function M4(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return W(n,t),n}function I4(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return W(r,e),r}function L4(e){var t=this,r=t.keys().then(function(n){return n.length});return W(r,e),r}function P4(e,t){var r=this;e=ut(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return W(n,t),n}function N4(e,t,r){var n=this;e=ut(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new E(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(d),s(d)}})})});return W(o,r),o}function _4(e,t){if(t=Gs.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new E(function(i){e.storeName?i(k0(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=E.reject("Invalid arguments"),W(o,t),o}var O4={_driver:"localStorageWrapper",_initStorage:T4,_support:k4(),iterate:E4,getItem:A4,setItem:N4,removeItem:P4,clear:C4,length:L4,key:M4,keys:I4,dropInstance:_4};const B4=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),D4=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(B4(e[n],t))return!0;n++}return!1},x0=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Lr={},Mu={},dr={INDEXEDDB:i4,WEBSQL:$4,LOCALSTORAGE:O4},R4=[dr.INDEXEDDB._driver,dr.WEBSQL._driver,dr.LOCALSTORAGE._driver],oo=["dropInstance"],Ui=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(oo),q4={description:"",driver:R4.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function H4(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function Wi(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(x0(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class Qs{constructor(t){for(let r in dr)if(dr.hasOwnProperty(r)){const n=dr[r],o=n._driver;this[r]=o,Lr[o]||this.defineDriver(n)}this._defaultConfig=Wi({},q4),this._config=Wi({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new E(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=Ui.concat("_initStorage");for(let h=0,p=c.length;h<p;h++){const g=c[h];if((!D4(oo,g)||t[g])&&typeof t[g]!="function"){a(l);return}}(function(){const h=function(p){return function(){const g=new Error(`Method ${p} is not implemented by the current driver`),w=E.reject(g);return W(w,arguments[arguments.length-1]),w}};for(let p=0,g=oo.length;p<g;p++){const w=oo[p];t[w]||(t[w]=h(w))}})();const d=function(h){Lr[s]&&console.info(`Redefining LocalForage driver: ${s}`),Lr[s]=t,Mu[s]=h,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,a):d(!!t._support):d(!0)}catch(s){a(s)}});return ir(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Lr[t]?E.resolve(Lr[t]):E.reject(new Error("Driver not found."));return ir(o,r,n),o}getSerializer(t){const r=E.resolve(Xs);return ir(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return ir(n,t,t),n}setDriver(t,r,n){const o=this;x0(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(u){return o._extend(u),a(),o._ready=o._initStorage(o._config),o._ready}function l(u){return function(){let d=0;function h(){for(;d<u.length;){let g=u[d];return d++,o._dbInfo=null,o._ready=null,o.getDriver(g).then(s).catch(h)}a();const p=new Error("No available storage method found.");return o._driverSet=E.reject(p),o._driverSet}return h()}}const c=this._driverSet!==null?this._driverSet.catch(()=>E.resolve()):E.resolve();return this._driverSet=c.then(()=>{const u=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(u).then(d=>{o._driver=d._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const u=new Error("No available storage method found.");return o._driverSet=E.reject(u),o._driverSet}),ir(this._driverSet,r,n),this._driverSet}supports(t){return!!Mu[t]}_extend(t){Wi(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=Ui.length;t<r;t++)H4(this,Ui[t])}createInstance(t){return new Qs(t)}}const F4=new Qs,z4=F4;async function S0(){return await caches.open(Us)}async function V4(e){return await(await S0()).match(e)}const Iu=z4.createInstance({name:Us});async function j4(e,t){await(await S0()).put(e,t)}const Gi=new Map;async function Z4(e,t){var n;if(t=t,!Gi.has(e)){const o=ni();Gi.set(e,o.promise);try{const i=new Request(e),a=t?await V4(i):void 0,s=a??await fetch(i),l=t?await Iu.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{Iu.setItem(e,c)}catch{}const u={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{j4(i,s)}catch{}o.resolve(u)}catch(i){throw o.reject(i),i}}const r=await Gi.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var A;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(A||(A={}));const U4=[A.Text,A.Json],W4=[A.Audio];function Lu(e){return U4.includes(e)}function G4(e){return W4.includes(e)}async function Y4(e,t){return e.includes("video")?A.Video:e.includes("svg")||t.includes("<svg")?A.Svg:e.includes("html")||t.includes("<html")?A.Html:Db(t)?A.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?A.Text:e.includes("audio")?A.Audio:e.includes("pdf")?A.Pdf:A.Image}function J4({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===A.Image?Rt(f`
            <img src=${r} />
        `):e===A.Video?Rt(f`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===A.Text||e===A.Json?Rt(f`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===A.Audio?Rt(f`
                <audio controls src=${r}></audio>
            `):t}function K4(e,t,r){if(t===A.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===A.Html&&r)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function Pu({imageUrl:e,blockAutoPlay:t,textTransformer:r=i=>i,allowPersistentCache:n,removeConsoleLogs:o}){const i=await Z4(e,n);if(!i.ok)throw new Error(`Failed to load '${e}'`);const a=await Y4(i.contentType,i.text),s=r(K4(i.text,a,o));return{templateString:J4({imageText:s,imageType:a,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:a}}class Ja extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let X4=!1;function Q4(){return X4}function e5(e){return e?e instanceof Error?e.message:o5(e,"message")?String(e.message):String(e):""}function t5(e){return e instanceof Error?e:new Error(e5(e))}function r5(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}const n5=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function o5(e,t){return e?n5.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function i5(e){const t=T0();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function T0(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${T0.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function C0(e,t,r){return r5({callback(){return a5(e,t,r),!0},fallbackValue:!1})}function a5(e,t,r){if(e==="*")r||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var Wt;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(Wt||(Wt={}));const s5=globalThis.crypto;function l5(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return s5.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function c5(e,t,r){return r.type===e&&r.direction===t}function u5(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function d5({message:e,verifyChildData:t,iframeElement:r},n,o,i,a){if(!r)throw new Error("No iframe element was provided.");let s=0,l=!1,c,u,d,h=!1;const p={...e,direction:Wt.FromParent,messageId:l5(32)},g=e.type;function w($){try{if(!C0(n,$,!1))return;const S=$.data;if(S.type==="error")throw new Error(`Child threw an error: ${S.data}`);if(Q4(),S&&h&&c5(g,Wt.FromChild,S)&&S.messageId===p.messageId){let L=!1;try{L=t?t(S.data):!0}catch{}if(!L)return;l=!0,u=$,c=S}}catch(S){d=t5(S)}}a.addEventListener("message",w);const y=Date.now();for(;!l&&Date.now()-y<o&&!d;){if(!r.isConnected)throw new Ja;const $=r.contentWindow;$&&(h=!0,$.postMessage(p,{targetOrigin:n})),await i5(i||u5(s)),s++}if(a.removeEventListener("message",w),d)throw d;if(!l)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!u)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:u}}function f5({timeoutMs:e=1e4}={timeoutMs:1e4}){return{async sendMessageToChild(t){if(t.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await d5(t,t.childOrigin,t.timeoutMs||e,t.intervalMs,t.globalObject??globalThis)},listenForParentMessages(t){const r=t.globalObject??globalThis;async function n(o){var l;if(!C0(t.parentOrigin,o,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const i=o.data,a=await t.listener({...i,originalEvent:o},()=>{r.removeEventListener("message",n)}),s={type:i.type,direction:Wt.FromChild,data:a,messageId:i.messageId};r.parent.postMessage(s,{targetOrigin:t.parentOrigin})}r.addEventListener("message",n)}}}var Te;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(Te||(Te={}));var de;(function(e){e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded"})(de||(de={}));const Ke=f5({});async function h5(e,t){const r=ni();e.onload=()=>{r.resolve()};try{await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.FrameReady},iframeElement:e,timeoutMs:t})}catch{await r.promise,await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.FrameReady},iframeElement:e,timeoutMs:t})}}async function m5({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await h5(n,s),i&&await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(u){return!!(u&&!isNaN(u.width)&&!isNaN(u.height)&&u.width&&u.height)}})).data;return await A0({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.ImageElementLoaded},iframeElement:n,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function A0({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:a??r},d=Lu(i.imageType)||G4(i.imageType)?Va(u):n0(u);c.style.width=Hn(Math.floor(d.width)),c.style.height=Hn(Math.floor(d.height));const h=Va({min:e,max:t,box:d});d.height<h.height?n.classList.add(Te.VerticallyCenter):n.classList.remove(Te.VerticallyCenter),n.style.width=Hn(h.width),n.style.height=Hn(h.height);const p=o0({min:e,max:t,box:a??r});if(s){if(p>3?await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SizeDetermined,data:d},iframeElement:o,timeoutMs:l}),i.imageType===A.Html){const g=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},w={width:p*g.width,height:p*g.height};await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScale,data:w},iframeElement:o,timeoutMs:l})}else if(Lu(i.imageType)){const g=a??r;if(g.height<d.height){const w=d.width/g.width,y=d.height/g.height,$=Math.min(w,y);await Ke.sendMessageToChild({childOrigin:window.location.origin,message:{type:de.SendScale,data:{height:$,width:$}},iframeElement:o,timeoutMs:l})}}}}const zn={x:16,y:8};var ju,Zu;function p5(e,t,r,n){const o=Math.random(),i=f(ju||(ju=li([`
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
    `])),e.imageType,r??"",A.Svg,A.Html,A.Image,A.Video,A.Text,A.Json,A.Audio,A.Svg,A.Html,A.Image,A.Video,A.Text,A.Json,A.Audio,Wt.FromChild,Wt.FromChild,de.ImageElementLoaded,de.FrameReady,de.SendScale,de.SendScalingMethod,de.SendSize,de.ForceSize,de.SizeDetermined,A.Json,A.Text,zn.y,n,A.Audio),a=f(Zu||(Zu=li([`
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
    `])),e.imageType,n?"allow-scrolling":"",A.Image,A.Svg,A.Video,A.Text,A.Json,A.Text,A.Json,A.Text,A.Json,A.Text,A.Json,zn.y,zn.x,A.Text,A.Json,zn.y,o,t??"",i);return Kh(Rt(a)).replace(String(o),`
${e.templateString}
`)}const g5=[A.Html,A.Video,A.Audio,A.Pdf],v5=[A.Html,A.Text,A.Json];function Nu({blockInteractionInput:e,imageType:t,allowScrolling:r}){return typeof e=="boolean"?!e:g5.includes(t)?!0:!!(r&&v5.includes(t))}const w5=1e4,y5={imageData:wp({async updateCallback(e,t){if(t.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const r={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!e.blockPersistentCache,removeConsoleLogs:!e.allowConsoleLogs};let n;try{n=await Lb(e.timeoutMs,Pu(r))}catch{await Mb(1e3);try{n=await Pu(r)}catch(i){throw i}}if(n)return n;throw new Error("no image data result")}}),error:void 0},Vn=ys()({tagName:Us,stateInitStatic:y5,events:{settled:X(),imageDataCalculated:X(),errored:X()},styles:v`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${_(Te.VerticallyCenter)}) {
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

        :host(.${_(Te.HideLoading)}) .loading-wrapper,
        :host(.${_(Te.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${_(Te.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${_(Te.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[Yi];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??w5;e.imageData.updateTrigger(Eb({...t,timeoutMs:a},["textTransformer"]),{textTransformer:t.textTransformer,updateTriggered(){e.error&&r({error:void 0}),n.classList.remove(Te.HideLoading),o(new i.settled(!1)),n.classList.remove(Te.VerticallyCenter)}});const s=t.min&&t.max?Va({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?n0({min:s,max:l,box:t.forcedOriginalImageSize}):void 0,u=Hl(e.imageData,"",y=>{if(o(new i.imageDataCalculated(y)),y.imageType===A.Pdf)return f`
                        <iframe
                            src=${y.imageUrl}
                            ${go(async $=>{try{await A0({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:$,imageData:y,imageDimensions:l??{width:500,height:500},max:l,min:s,sendSizeMessage:!1,timeoutMs:a}),n[Yi]="",o(new i.settled(!0)),n.classList.add(Te.HideLoading)}catch(S){const L=ji(S);if(L instanceof Ja)return;console.error(L),r({error:L}),o(new i.errored(L))}})}
                        ></iframe>
                    `;{const $=Nu({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})&&!!t.allowScrolling;return f`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${p5(y,t.extraHtml,t.htmlSizeQuerySelector,$)}
                            ${go(async S=>{try{const L=await m5({min:s,max:l,host:n,iframeElement:S,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:a});n[Yi]=L,o(new i.settled(!0)),n.classList.add(Te.HideLoading)}catch(L){const D=ji(L);if(D instanceof Ja)return;console.error(D),r({error:D}),o(new i.errored(D))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},y=>{r({error:y}),o(new i.errored(ji(y)))}),d=Hl(e.imageData,_u,y=>Nu({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})?"":_u,()=>""),h=e.imageData instanceof Error?e.imageData:e.error,p=h?v`
                  max-width: 100%;
                  max-height: 100%;
              `:c?v`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",g=v`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,w=f`
            <div class="frame-constraint" style=${p}>${u}</div>
        `;return f`
            ${$e(!h,f`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${g}>
                ${$e(!!h,f`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${h==null?void 0:h.message}</slot>
                        </div>
                    `,w)}
            </div>
            ${d}
        `}}),_u=f`
    <div class="click-cover"></div>
`,Yi="latest-frame-srcdoc",Ht=re()({tagName:"toniq-flip-card",events:{flippedChange:X()},styles:v`
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

        ${Mv(".card-face",!1)}

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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return f`
            <div
                class="flip-wrapper ${Ae({flipped:e.flipped})}"
                ${T("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),ge=re()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:X()},styles:v`
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
            max-height: ${sr["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${sr["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Yh}px;
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

        .card-face.front ${rt} {
            margin-top: 24px;
        }

        .card-face.back ${rt} {
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
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var p,g,w;const a=e.mainImageSize||za,s=Jh(a);da({onElement:n,forCssVar:sr["main-image-size"],toValue:`${a}px`}),da({onElement:n,forCssVar:sr["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(gn).join(" "),c=f`
            <h3>${e.title}</h3>
        `,u=e.imageUrls[0],d=f`
            <${C.assign({icon:Ns})} slot="loading"></${C}>
        `,h=u?f`
                  <div class="big-image-wrapper">
                      <${Vn.assign({imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}>
                          ${d}
                      </${Vn}>
                  </div>
              `:"";return f`
            <${Ht.assign({flipped:t.flipped})}
                ${T(rt.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(y=>f`
                                    <div class="pic-wrapper">
                                        <${Vn.assign({imageUrl:y,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}>
                                            ${d}
                                        </${Vn}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${rt.assign({viewMoreButtonText:l,flipCardButtonText:(p=e.infoParagraphs)!=null&&p.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(rt.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${rt}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(g=e.infoParagraphs)==null?void 0:g.map(y=>f`
                                    <p>${y}</p>
                                `)}
                    </div>
                    <${rt.assign({viewMoreButtonText:l,flipCardButtonText:(w=e.infoParagraphs)!=null&&w.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(rt.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${rt}>
                </div>
            </${Ht}>
        `}});function Ka({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Ka({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function E0({value:e,allowed:t,blocked:r}){const n=t?Ka({input:e,matcher:t}):!0,o=r?Ka({input:e,matcher:r}):!1;return n&&!o}function Ou(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(E0({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var Xa=(e=>(e.Default="default",e.Outline="outline",e))(Xa||{});const jn=re()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:X(),inputBlocked:X()},styles:({hostClasses:e})=>v`
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
                border-radius: ${La};
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
                border-radius: ${La};
                background-color: ${k.accentTertiary.backgroundColor};
                font: ${J.paragraphFont};
                gap: 4px;
            }

            ${Et({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${C} {
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
                color: ${k.accentTertiary.foregroundColor};
            }

            .suffix {
                ${J.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Ut};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${He};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Ou({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?f`
                  <${C.assign({icon:e.icon})}></${C}>
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
                    ${T("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)E0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:u,blocked:d}=Ou({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=u,t(new r.inputBlocked(d))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${$e(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var io=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(io||{});const Ji=re()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>v`
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
    `,renderCallback:({inputs:e})=>f`
            <${C.assign({icon:Ns,fitContainer:e.size!=="small"})}></${C}>
        `});async function b5(e){return navigator.clipboard.writeText(e)}const $5="…";function k5(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${$5}${n}`}function x5(e){return!(e%1)}function S5(e){return e.letterCount==null?4:x5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const ve=re()({tagName:"toniq-middle-ellipsis",events:{copied:X()},cssVars:{"toniq-middle-ellipsis-text-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":k.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":k.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Q.interaction};
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
            ${me};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${Q.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return f``;const i=e.text,a=S5(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,u=c?k5(i,a):i,d=c?i:"",h=s?Nf:l?Pf:void 0,p=h?f`
                  <${C.assign({icon:h})}></${C}>
              `:"",g=f`
            <span title=${d} class="text-content">
                ${$e(!!e.copyOnClick,f`
                        <span
                            class=${Ae({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${T("click",w=>{var $,S;const y=(S=($=w.currentTarget)==null?void 0:$.querySelector)==null?void 0:S.call($,"a");if(!y)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");y.click()})}
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
                            ${g} ${p}
                        </a>
                    </button>
                `:l?f`
                    <button
                        class="text-wrapper copyable"
                        ${T("click",async()=>{await b5(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${g} ${p}
                    </button>
                `:f`
                    ${g}
                `:f``}}),Bu="...";function T5(e,t,r=7,n=5){let o;e=zr(e,1,t),r=zr(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Ki(t-o,t):e>o?Ki(Math.min(s.start,t-o),Math.min(s.end,t)):Ki(1,Math.min(t,o+1));function c(d,h){return l.length+1!==t?h:[d]}const u=l[l.length-1];if(u&&u<t){const d=c(t,[Bu,t]);return[...l,...d]}else return l[0]!==1?c(1,[1,Bu]).concat(l):l}function Ki(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}re()({tagName:"toniq-pagination",styles:v`
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
            ${j(k.accentSecondary)};
        }

        .control:hover {
            ${j(k.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${j(k.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${J.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${j(k.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${j(k.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:X()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?f``:f`
                <button
                    ${T("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${C.assign({icon:Ls})}></${C}>
                </button>
                ${T5(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?f`
                                <div class="page" disabled>${n}</div>
                            `:f`
                                <button
                                    class=${Ae({page:!0,selected:e.currentPage===n})}
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
                    <${C.assign({icon:Ps})}></${C}>
                </button>
            `}});const G=re()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:X()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ue("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ue("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ue("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ue("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>v`
        :host {
            ${J.boldParagraphFont};
            display: inline-flex;
            transition: color ${Q.interaction},
                background-color ${Q.interaction},
                opacity ${Q.interaction};
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
            transition: ${Q.interaction};
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

        ${Et({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Ut};
        }

        .wrapper.disabled::before {
            ${Ut}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:T2()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return C5(e.entries).map(i=>A5(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function C5(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${G.tagName} was given duplicate entry values.`),Object.values(t)}function A5(e,t,r,n){const o=t===r.value,i=f`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return f`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${Ae({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}const O={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Pr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function E5(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${O.lowerLabelWrapper} .${O.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${O.upperLabelWrapper} .${O.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function M5(e,t=8){const r=E5(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Xi({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function an(e){return y2(e)&&e.min!==void 0&&e.max!==void 0}function Qa(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${O.range}`);return(t==null?void 0:t.clientWidth)??0}function Qi(e,t,r){return`${r?P2(e):e} ${t}`}function I5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function L5({value:e,double:t,min:r,max:n}){return t?an(e)?{min:zr(e.min,r,Math.min(e.max,n)),max:zr(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:an(e)?r:zr(e,r,n)}function P5({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:an(e)?{min:Ni(n,e.min),max:Ni(n,e.max)}:Ni(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function ea(e,t,r){return r?t[e]||0:e}function N5(e){return{actualLimits:I5(e),actualValue:L5(e)}}function _5(e,t){var n,o,i;let r=!1;if(an(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${O.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${O.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${O.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function M0(e,t){const{actualValue:r,actualLimits:n}=N5({...e}),o=Cv(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=P5({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=Qa(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Ot=16,Du=v`
    ${Ot}px
`,Ru=v`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Du};
    width: ${Du};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Q.interaction};
    ${j(k.accentPrimary)};
`,qu=v`
    transform: scale(1.2);
`;function Rr(e){requestAnimationFrame(()=>{const t=M0(e.instanceInputs,e).elementValue;_5(t,e)&&(e.setAttribute("disabled","true"),Rr(e))})}const z=re()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:X()},styles:v`
        :host {
            display: block;
        }

        .${_(O.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${j(k.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${j(k.accentPrimary)};
        }

        .${_(O.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${J.boldParagraphFont};
            ${He};
        }

        .${_(O.labelPixelMarginWrapper)},
            .${_(O.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${_(O.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${_(O.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Et({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${_(O.lowerSlider)},
        .${_(O.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${_(O.slider)}::-moz-range-thumb {
            ${Ru}
        }

        /* these selectors fail if combined with a comma */
        .${_(O.slider)}::-webkit-slider-thumb {
            ${Ru}
        }

        /* these selectors fail if combined with a comma */
        .${_(O.slider)}::-webkit-slider-thumb:hover {
            ${qu}
        }

        /* these selectors fail if combined with a comma */
        .${_(O.slider)}::-moz-range-thumb:hover {
            ${qu}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Rr(e)}),e.addEventListener("keydown",()=>{Rr(e)}),e.addEventListener("keyup",()=>{Rr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:u,elementLimits:d,rangeWidth:h}=M0({...e},t);if(Rr(t),an(u))return p(a,u,d);return w(a,u,d);function p(y,$,S){const L={left:nr((h-Ot)*($.min-S.min)/(S.max-S.min)+Ot/2),right:nr((h-Ot)*(S.max-$.max)/(S.max-S.min)+Ot/2)},D=Qi(y.min,c,l),ae=Qi(y.max,c,l);requestAnimationFrame(()=>{const Ie=M5(t);Ie!==o.labelOverlap&&i({labelOverlap:Ie})});const he=(S.max-$.max)/(S.max-S.min)>.5,ne=Xi({value:$.min,limits:{min:S.min,max:$.max},flip:!0}),q=Xi({value:$.max,limits:{min:$.min,max:S.max},flip:!1}),ue=o.labelOverlap&&he?o.labelOverlap:0,Sr=o.labelOverlap&&!he?o.labelOverlap:0;return f`
                <div
                    class="range"
                    ${Jr(()=>{i({rangeWidth:Qa(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${L.left}; right:${L.right}"
                    ></div>
                    <span
                        class="${O.labelOuterWrapper} ${O.lowerLabelWrapper}"
                        style="left: ${L.left}"
                    >
                        <span
                            class="${O.labelPercentMarginWrapper}"
                            style="margin-left: ${Pi(ne)}"
                        >
                            <span
                                class="${O.labelPixelMarginWrapper}"
                                style="margin-right: ${nr(Sr)}"
                                ${or(Pr.lowerLabel)}
                            >
                                ${D}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${O.labelOuterWrapper} ${O.upperLabelWrapper} ${O.rightAlignedLabelWrapper}"
                        style="right: ${L.right}"
                    >
                        <span
                            class="${O.labelPercentMarginWrapper}"
                            style="margin-right: ${Pi(q)}"
                        >
                            <span
                                class="${O.labelPixelMarginWrapper}"
                                style="margin-left: ${nr(ue)}"
                                ${or(Pr.upperLabel)}
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
                            class="${O.lowerSlider} ${O.slider}"
                            .min=${S.min}
                            .max=${S.max}
                            .value=${$.min}
                            ${T("input",Ie=>{const Yt=Ie.target,Tr={...y,min:ea(Number(Yt.value),s,l)};g(Tr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${O.upperSlider} ${O.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${$.max}
                            ${or(Pr.slider)}
                            ${T("input",Ie=>{const Yt=Ie.target,Tr={...y,max:ea(Number(Yt.value),s,l)};g(Tr)})}
                        />
                    </div>
                </div>
            `}function g(y){i({internalValue:y}),e.disabled||n(new r.valueChange(y))}function w(y,$,S){const L=nr((h-Ot)*(S.max-$)/(S.max-S.min)+Ot/2),D=Qi(y,c,l),ae=Xi({value:$,limits:S,flip:!1});return f`
                <div
                    class="range"
                    ${Jr(()=>{i({rangeWidth:Qa(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${L}"></div>
                    <span
                        class="${O.labelOuterWrapper} ${O.rightAlignedLabelWrapper}"
                        style="right: ${L}"
                    >
                        <span
                            class="${O.labelPercentMarginWrapper}"
                            style="margin-right: ${Pi(ae)}"
                            ${or(Pr.label)}
                        >
                            ${D}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${O.slider}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${$}
                        ${or(Pr.slider)}
                        ${T("input",he=>{const ne=he.target,q=ea(Number(ne.value),s,l);g(q)})}
                    />
                </div>
            `}}});var I0=(e=>(e.Default="default",e.TextOnly="text-only",e))(I0||{});const ta=re()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${J.boldParagraphFont};
            ${He};
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

            ${j(k.accentSecondary)};
            transition: color ${Q.interaction},
                background-color ${Q.interaction};
        }

        ${Et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${j(k.accentPrimary)};
        }

        :host(:hover) button {
            ${j(k.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${j(k.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${j(k.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${j(k.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${j(k.pageInteraction)};
            border-color: ${k.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${j(k.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${k.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${j(k.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Ut};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
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
        `}}),Zr=Kv({tagName:"toniq-tooltip",styles:v`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${k.accentPrimary.backgroundColor};
            ${Io.menuShadow};
            background-color: ${k.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return f`
            <slot></slot>
        `}}),ao=re()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${Q.pretty};
        }

        .tooltip-wrapper {
            transition: visibility ${Q.pretty} ${Q.pretty},
                opacity ${Q.pretty};
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
                ${T("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${Zr}>${e.tooltipContent}</${Zr}>
            </div>
        `}}),qr=re()({tagName:"toniq-top-tabs",events:{valueChange:X()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>v`
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
            border-bottom: 1px solid ${k.pageTertiary.foregroundColor};
            transition: border-bottom-width ${Q.interaction},
                border-color ${Q.interaction};
        }

        button {
            ${me};
            cursor: pointer;
            ${J.paragraphFont};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
            transition: padding-bottom ${Q.interaction};
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
            border-color: ${k.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return f`
            <ul role="tablist">
                ${e.tabs.map(n=>{const o=n.value===e.value;return f`
                        <li
                            ${$p("tab")}
                            role="presentation"
                            class=${Ae({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${T("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${Ft.assign({text:n.label})}></${Ft}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),L0=U({title:"Data",parent:void 0}),qo=re()({tagName:"toniq-icon-book-viewer",styles:v`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${k.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return f`
            <${C.assign({icon:e.icon})}></${C}>
        `}}),ii=Object.values(gt).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),O5=Object.keys(ii).sort();function el(e){return{controlType:R.Dropdown,initValue:e,options:["None",...O5]}}const P0={"CSS color":{controlType:R.Color,initValue:""},[String(m["toniq-icon-stroke-color"].name)]:{controlType:R.Color,initValue:""},[String(m["toniq-icon-fill-color"].name)]:{controlType:R.Color,initValue:""},[String(m["toniq-icon-stroke-width"].name)]:{controlType:R.Color,initValue:""},[String(m["toniq-icon-stroke-width"].name)]:{controlType:R.Number,initValue:2}};function so(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),$2(n,"number")&&(n=C2({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const B5=U({title:"Social Urls",parent:L0,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return f`
                        <${qo.assign({icon:n})}></${qo}>
                    `}})}Object.entries(Gf).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),ie=U({title:"Elements",parent:void 0}),D5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:v`
            ${Ft} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],R5=U({title:Ft.tagName,parent:ie,elementExamplesCallback({defineExample:e}){D5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:v`
                    .bold {
                        ${J.boldFont}
                    }

                    ${t.extraStyle??v``}
                `,renderCallback({state:r,updateState:n}){return f`
                        <${Ft.assign({text:t.text})}
                            ${T("click",()=>{n({isBold:!r.isBold})})}
                            class=${Ae({bold:r.isBold})}
                        ></${Ft}>
                        More text
                    `}})})}}),q5=U({parent:ie,title:oe.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:nn.Secondary}},{name:"Outline",inputs:{buttonStyle:nn.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:v`
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
                        <${oe.assign({icon:eo,...r.inputs})}></${oe}>
                        <${oe.assign(n.showIcon?{icon:eo,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${oe}>
                        <${oe.assign({text:"Button",icon:eo,...r.inputs})}></${oe}>
                        <${oe.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${oe}>
                        <${oe.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${oe}>
                    `}})})}}),Hu=v`
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
`,H5=U({parent:ie,title:xe.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Hu,renderCallback(){return f`
                    <${xe.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:gt["core-24"].map(t=>{const r=v`
                                padding: 24px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${xe}>
                    <${xe.assign({enableAutomaticCycling:!0,templates:gt["core-24"].map(t=>{const r=v`
                                padding: 100px 24px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${xe}>
                    <${xe.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:gt["core-24"].map(t=>{const r=S2({min:0,max:150}),n=v`
                                padding: 100px ${r}px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${C.assign({icon:t})} style=${n}></${C}>
                            `})})}></${xe}>
                `}}),e({title:"banner style",styles:Hu,renderCallback(){return f`
                    <${xe.assign({enableAutomaticCycling:!0,style:Pa.BannerStyle,templates:gt["core-24"].map(t=>{const r=v`
                                /* make sure this width matches the ToniqCarousel width */
                                width: 800px;
                                max-width: 100%;
                                padding: 100px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-sizing: border-box;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${xe}>
                    <${xe.assign({enableAutomaticCycling:!0,style:Pa.BannerStyle,templates:[gt["core-24"][0]].map(t=>{const r=v`
                                /* make sure this width matches the ToniqCarousel width */
                                width: 800px;
                                max-width: 100%;
                                padding: 100px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-sizing: border-box;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}
                        class=${xe.hostClasses["toniq-carousel-banner-style"]}
                    ></${xe}>
                `}})}});function F5(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:R.Color,initValue:""}]);return Object.fromEntries(t)}function z5(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(gn);return _(t.join(`
`))}const V5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],ra=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],j5=U({parent:ie,title:ft.tagName,controls:{Text:{controlType:R.Text,initValue:"Text"},...F5(ft)},elementExamplesCallback({defineExample:e}){V5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:ra.map(r=>!!r.inputs.checked),extraEntryStatuses:ra.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:v`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return ra.map((i,a)=>{const s=(i.extraEntries??[]).map((c,u)=>{var d;return f`
                                    <${ft.assign({...t.inputs,...Ia(i.inputs,["checked"]),checked:!!((d=r.extraEntryStatuses[a])!=null&&d[u]),text:c})}
                                        ${T(ft.events.checkedChange,()=>{const h=[...r.extraEntryStatuses];h[a][u]=!h[a][u],n({extraEntryStatuses:h})})}
                                    ></${ft}>
                                `}),l=z5(o);return f`
                            <div class="checkbox-group" style=${l}>
                                <${ft.assign({...t.inputs,...Ia(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${T(ft.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${ft}>
                                ${s}
                            </div>
                        `})}})})}}),Z5=U({parent:ie,title:Oi.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:cr}},{inputs:{icon:cr}},{inputs:{},template:f`
                    HTML child
                `},{inputs:{icon:cr},template:f`
                    HTML child
                `},{customStyle:v`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:_a.Default}},{title:"secondary style",inputs:{style:_a.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>f`
                        <${Oi.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${$e(!!o.template,o.template)}</${Oi}>
                    `)}})})}}),U5=U({title:Vi.tagName,parent:ie,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=[{title:"date and time",inputs:{parts:{date:!0,time:!0}}},{title:"date only",inputs:{parts:{date:!0,time:!1}}},{title:"time only",inputs:{parts:{date:!1,time:!0}}}],r=gb();t.forEach(n=>{e({title:n.title,renderCallback(){return f`
                        <${Vi.assign({fullDate:r,...n.inputs})}></${Vi}>
                    `}})})}}),Zn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],W5=[{title:"default"},{title:"transparent background",customStyle:v`
            ${Os.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Fu=[{},{customStyle:v`
            width: 500px;
            height: 100px;
        `},{customStyle:v`
            max-height: 30px;
            min-height: 30px;
        `}],G5=U({title:qn.tagName,parent:ie,controls:{Selected:{controlType:R.Dropdown,initValue:Zn[0].label,options:Zn.map(e=>e.label)},Direction:{controlType:R.Dropdown,initValue:"Down",options:k2(Fa)},Icon:el(Af.name),Prefix:{controlType:R.Text,initValue:"Sort by: "},"Force open":{controlType:R.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){W5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Fu.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:v`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Fu.map((i,a)=>{const s=v`
                            ${t.customStyle??v``};
                            ${i.customStyle??v``};
                        `;return f`
                            <${qn.assign({...t.inputs,...i.inputs,options:Zn,value:r.selected[a]??Zn.find(l=>l.label===o.Selected),icon:ii[o.Icon],selectedLabelPrefix:o.Prefix,direction:Fa[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${T(qn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${qn}>
                        `})}})})}}),zu="/toniq-labs-design-system";function Y5(...e){const r=[globalThis.location.pathname.startsWith(zu)?zu:"",...e].filter(gn);return A2(...r)}const na=Array(30).fill(Y5("/toniq-labs-logo.png")),es=["Hello there.","There is stuff here."],Un=es.concat(Array(30).fill(es)),J5=U({title:ge.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${ge.assign({infoParagraphs:Un,imageUrls:na,socialUrls:Jv,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${ge}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${ge.assign({imageUrls:na,title:"Featured Stuff",infoParagraphs:void 0})}></${ge}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${ge.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Un,viewMoreUrl:"https://toniqlabs.com"})}
                        ${T(ge.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${ge}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${ge.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Un})}></${ge}>
                `}}),e({title:"with custom height",styles:v`
                ${ge} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${ge.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Un})}></${ge}>
                `}}),e({title:"smaller",styles:v`
                ${ge} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${ge.assign({imageUrls:na,infoParagraphs:es,title:"Featured Stuff"})}></${ge}>
                `}})}}),K5=U({title:Ht.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:v`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return f`
                    <${Ht.assign({flipped:t.flipped})}
                        ${T(Ht.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Ht}>
                `}})}}),X5=U({parent:ie,title:Ze.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}},{title:"link disabled",inputs:{linkDisabled:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return f`
                        <${Ze.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Ze}>
                    `}})})}}),Q5=U({title:C.tagName,parent:ie,controls:P0,elementExamplesCallback({defineExample:e}){const t=[{icon:qf},{icon:Rf},{icon:If},{icon:cr},{icon:void 0}];e({title:"sizes",styles:v`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>f`
                        <${C.assign({icon:n.icon})}
                            style=${so(r)}
                        ></${C}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=v`
                    ${m["toniq-icon-fill-color"].name}: orange;
                `;return gt["third-party-brands"].map(o=>f`
                        <${C.assign({icon:o})}
                            style=${so(r)}
                        ></${C}>
                        <${C.assign({icon:o})}
                            style=${n}
                        ></${C}>
                    `)}}),e({title:"fit container",styles:v`
                :host {
                    width: 64px;
                    height: 64px;
                }

                ${C} {
                    width: inherit;
                    height: inherit;
                }
            `,renderCallback({controls:r}){return f`
                    <${C.assign({icon:cr,fitContainer:!0})}
                        style=${so(r)}
                    ></${C}>
                `}})}}),e$=U({title:jn.tagName,parent:ie,controls:{"External value":{controlType:R.Text,initValue:""},Placeholder:{controlType:R.Text,initValue:"placeholder"},Icon:el(Of.name),Suffix:{controlType:R.Text,initValue:"ICP"},"No browser helps":{controlType:R.Checkbox,initValue:!1},"Blocked characters":{controlType:R.Text,initValue:""},"Exclusive characters":{controlType:R.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:v`
                    height: 75px;
                    width: 300px;
                `},{customStyles:v`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:Xa.Default}},{title:"outline",inputs:{style:Xa.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:v`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),f`
                            <${jn.assign({...n.inputs,value:o["External value"]||i.value,icon:ii[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${T(jn.events.valueChange,l=>{a({value:l.detail})})}
                            ></${jn}>
                        `))}})})}}),t$=U({title:Ji.tagName,parent:ie,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:io.Small}},{title:"large",inputs:{size:io.Large}},{title:"whole page",inputs:{size:io.WholePage},styles:v`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??v``,renderCallback(){return f`
                        <${Ji.assign(r.inputs)}></${Ji}>
                    `}})})}}),r$=U({title:ve.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return f`
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
                `}})}}),Nr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Pe={basic:Nr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Nr.slice(1)],disabled:[{...Nr[0],disabled:!0},...Nr.slice(1)],noLabels:d2(Nr,e=>({...e,label:void 0}))},n$=U({title:G.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Pe.basic[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${G.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Pe.basic[0].value},styles:v`
                ${G} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${G.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Pe.longText[0].value},styles:v`
                ${G} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${G.assign({entries:Pe.longText,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Pe.noLabels[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${G.assign({entries:Pe.noLabels,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Pe.disabled[1].value},renderCallback({state:t,updateState:r}){return f`
                    <${G.assign({entries:Pe.disabled,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Pe.basic[0].value},styles:v`
                ${G} {
                    ${G.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${G.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${G.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${G.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${G.assign({entries:Pe.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}})}}),nt=v`
    ${z} {
        width: 300px;
    }
`,oa={min:10,max:50},o$=U({title:z.tagName,parent:ie,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,...oa})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,...oa,suffix:"ICP"})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:v`
                ${nt}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,min:-100,max:100})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:v`
                ${nt}

                ${z} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({value:t.value,...oa})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:v`
                ${nt}

                ${z} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${z.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}})}}),i$=[{title:"default",inputs:{}},{title:"text only",inputs:{style:I0.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Vu=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],a$=U({title:ta.tagName,parent:ie,controls:{Text:{controlType:R.Text,initValue:"Toggle Button"},Icon:el(_f.name)},elementExamplesCallback({defineExample:e}){i$.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Vu.map(r=>!!r.inputs.toggled)},styles:v`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Vu.map((i,a)=>f`
                            <${ta.assign({...t.inputs,toggled:r.buttonStates[a],icon:ii[o.Icon],text:o.Text,...Ia(i.inputs,["toggled"])})}
                                ${T("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${ta}>
                        `)}})})}}),s$=U({parent:ie,title:ao.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:v`
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
                `,renderCallback(){return f`
                        <${ao.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${ao}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:f`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),l$=U({parent:ie,title:Zr.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${ao.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return f`
                    <${Zr}>This is a tooltip.</${Zr}>
                `}})}}),c$=[s$,l$],u$=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:v`
            :host {
                width: 500px;
            }

            ${qr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:v``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],d$=U({title:qr.tagName,parent:ie,elementExamplesCallback({defineExample:e}){u$.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:v`
                    ${t.extraStyles??v``}
                `,renderCallback({state:r,updateState:n}){return f`
                        <${qr.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${T(qr.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${qr}>
                    `}})})}}),N0=U({title:"Icons",parent:void 0,controls:P0}),f$=Object.entries(gt).map(([e,t])=>U({title:e,parent:N0,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return f`
                                <${qo.assign({icon:n})}
                                    style=${so(o)}
                                ></${qo}>
                            `}}))}}));function _0(e){const t=h$(e),r=gr(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return et(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function h$(e){typeof e!="string"&&(e=String(e));const n=`{"${h2(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const tl=U({title:"Styles",parent:void 0}),m$=v`
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
        ${J.h2Font};
    }
`;function p$(e,t,r){const n=_0(j(r));return e({title:t,styles:m$,renderCallback(){return f`
                <div class="color-example" style=${j(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>f`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const g$=U({title:"Colors",parent:tl,elementExamplesCallback({defineExample:e}){et(k).map(t=>p$(e,t,k[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),v$=v`
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
`;function w$(e,t,r){const n=_0(r);return e({title:t,styles:v$,renderCallback(){return f`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${et(n).map(o=>{const i=n[o];return f`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const y$=U({title:"Fonts",parent:tl,elementExamplesCallback({defineExample:e}){et(J).map(t=>{const r=J[t];return w$(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),b$=[ie,N0,tl,L0],$$=[...f$,...c$,B5,R5,q5,H5,j5,Z5,g$,U5,G5,J5,K5,y$,X5,Q5,e$,t$,r$,n$,o$,a$,d$].sort((e,t)=>e.title.localeCompare(t.title)),k$=[...b$,...$$];Uo({tagName:"toniq-design-system-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Mi} {
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
            <${Mi.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:k$,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${Xe.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${Mi}>
        `}});
