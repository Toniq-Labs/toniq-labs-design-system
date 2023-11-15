var dh=Object.defineProperty;var hh=(e,t,r)=>t in e?dh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Bo=(e,t,r)=>(hh(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function fa(e){return!!e}function fh(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var ls;(function(e){e.Upper="upper",e.Lower="lower"})(ls||(ls={}));const mh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function wo(e,t){return e?mh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Vc(e,t){return e&&t.every(r=>wo(e,r))}function Fc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>bo(r).trim()).join(`
`))}function bo(e){return e?e instanceof Error?e.message:wo(e,"message")?String(e.message):String(e):""}function ph(e){return e instanceof Error?e:new Error(bo(e))}function cs(e){return!!e&&typeof e=="object"}function Zn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function gh(e){return Array.isArray(e)?"array":typeof e}function yo(e,t){return gh(e)===t}function us({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const ds="Failed to compare objects using JSON.stringify";function hs(e,t,r){return us({source:e,errorHandler(n){if(r)return"";throw n}})===us({source:t,errorHandler(n){if(r)return"";throw n}})}function ht(e,t,r={}){try{return e===t?!0:cs(e)&&cs(t)?hs(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ht(e[o],t[o])):!1:hs(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ph(n);throw o.message.startsWith(ds)||(o.message=`${ds}: ${o.message}`),o}}function vh(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function wh(e){return Zn(e).filter(t=>isNaN(Number(t)))}function bh(e){return wh(e).map(r=>e[r])}function yh(e,t){return bh(t).includes(e)}function $h(e,t){return Zn(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function kh(e,t){return $h(e,r=>!t.includes(r))}function Wn(e,t){let r=!1;const n=Zn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Zn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function fs(e,t){try{return xh(e,t),!0}catch{return!1}}function xh(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function zc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${zc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Th(e){const t=zc();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Sh=globalThis.crypto;function Ch(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Sh.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Mh(e,t){return wo(e,"entryType")&&e.entryType===t}var fe;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(fe||(fe={}));function Vt(e,t){return e.controlType===t}var O;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(O||(O={}));const jc=Symbol("any-type"),Ah={[O.Checkbox]:!1,[O.Color]:"",[O.Dropdown]:"",[O.Hidden]:jc,[O.Number]:0,[O.Text]:""};function Eh(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=Ah[o.controlType];i!==jc&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function ma(e,t){const r=Un(e.title);return e.parent?[...ma(e.parent,!1),Un(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Un(e){return fh(e).toLowerCase().replaceAll(/\s/g,"-")}function Ih({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function U(e){const t={...e,entryType:fe.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:fe.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(fa)};r.add(n.title),t.elementExamples[Un(o.title)]=o}}),t}var Ye;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Ye||(Ye={}));var ms;(function(e){e.Upper="upper",e.Lower="lower"})(ms||(ms={}));function Lh(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Zc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Zc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function Mi(e=1){const t=Zc();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function Ph(e){return Nh(e,1)}async function Nh(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Lh(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln=window,pa=Ln.ShadowRoot&&(Ln.ShadyCSS===void 0||Ln.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ga=Symbol(),ps=new WeakMap;let Wc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(pa&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ps.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ps.set(r,t))}return t}toString(){return this.cssText}};const q=e=>new Wc(typeof e=="string"?e:e+"",void 0,ga),Pn=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Wc(r,e,ga)},qh=(e,t)=>{pa?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Ln.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},gs=pa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return q(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Do;const Gn=window,vs=Gn.trustedTypes,Oh=vs?vs.emptyScript:"",ws=Gn.reactiveElementPolyfillSupport,Ai={toAttribute(e,t){switch(t){case Boolean:e=e?Oh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Uc=(e,t)=>t!==e&&(t==t||e==e),Ro={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Uc},Ei="finalized";let Ut=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Ro){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ro}static finalize(){if(this.hasOwnProperty(Ei))return!1;this[Ei]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(gs(o))}else t!==void 0&&r.push(gs(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return qh(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Ro){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ai).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Ai;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Uc)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ut[Ei]=!0,Ut.elementProperties=new Map,Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},ws==null||ws({ReactiveElement:Ut}),((Do=Gn.reactiveElementVersions)!==null&&Do!==void 0?Do:Gn.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _o;const Yn=window,rr=Yn.trustedTypes,bs=rr?rr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jn="$lit$",rt=`lit$${(Math.random()+"").slice(9)}$`,va="?"+rt,Bh=`<${va}>`,Ot=document,Dr=()=>Ot.createComment(""),Rr=e=>e===null||typeof e!="object"&&typeof e!="function",Gc=Array.isArray,Yc=e=>Gc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ho=`[ 	
\f\r]`,wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ys=/-->/g,$s=/>/g,xt=RegExp(`>|${Ho}(?:([^\\s"'>=/]+)(${Ho}*=${Ho}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ks=/'/g,xs=/"/g,Jc=/^(?:script|style|textarea|title)$/i,Kc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Dh=Kc(1),Rh=Kc(2),Me=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),Ts=new WeakMap,It=Ot.createTreeWalker(Ot,129,null,!1);function Xc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bs!==void 0?bs.createHTML(t):t}const Qc=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=wr;for(let s=0;s<r;s++){const l=e[s];let c,d,f=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===wr?d[1]==="!--"?a=ys:d[1]!==void 0?a=$s:d[2]!==void 0?(Jc.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=xt):d[3]!==void 0&&(a=xt):a===xt?d[0]===">"?(a=o??wr,f=-1):d[1]===void 0?f=-2:(f=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?xt:d[3]==='"'?xs:ks):a===xs||a===ks?a=xt:a===ys||a===$s?a=wr:(a=xt,o=void 0);const g=a===xt&&e[s+1].startsWith("/>")?" ":"";i+=a===wr?l+Bh:f>=0?(n.push(c),l.slice(0,f)+Jn+l.slice(f)+rt+g):l+rt+(f===-2?(n.push(void 0),s):g)}return[Xc(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class _r{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=Qc(t,r);if(this.el=_r.createElement(c,n),It.currentNode=this.el.content,r===2){const f=this.el.content,m=f.firstChild;m.remove(),f.append(...m.childNodes)}for(;(o=It.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const m of o.getAttributeNames())if(m.endsWith(Jn)||m.startsWith(rt)){const g=d[a++];if(f.push(m),g!==void 0){const v=o.getAttribute(g.toLowerCase()+Jn).split(rt),y=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:y[2],strings:v,ctor:y[1]==="."?tu:y[1]==="?"?ru:y[1]==="@"?nu:Kr})}else l.push({type:6,index:i})}for(const m of f)o.removeAttribute(m)}if(Jc.test(o.tagName)){const f=o.textContent.split(rt),m=f.length-1;if(m>0){o.textContent=rr?rr.emptyScript:"";for(let g=0;g<m;g++)o.append(f[g],Dr()),It.nextNode(),l.push({type:2,index:++i});o.append(f[m],Dr())}}}else if(o.nodeType===8)if(o.data===va)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(rt,f+1))!==-1;)l.push({type:7,index:i}),f+=rt.length-1}i++}}static createElement(t,r){const n=Ot.createElement("template");return n.innerHTML=t,n}}function Bt(e,t,r=e,n){var o,i,a,s;if(t===Me)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Rr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Bt(e,l._$AS(e,t.values),l,n)),t}class eu{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Ot).importNode(n,!0);It.currentNode=i;let a=It.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new ur(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new ou(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=It.nextNode(),s++)}return It.currentNode=Ot,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ur{constructor(t,r,n,o){var i;this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Bt(this,t,r),Rr(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Yc(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==le&&Rr(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ot.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=_r.createElement(Xc(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new eu(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=Ts.get(t.strings);return r===void 0&&Ts.set(t.strings,r=new _r(t)),r}T(t){Gc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new ur(this.k(Dr()),this.k(Dr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Kr{constructor(t,r,n,o,i){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=le}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Bt(this,t,r,0),a=!Rr(t)||t!==this._$AH&&t!==Me,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Bt(this,s[n+l],r,l),c===Me&&(c=this._$AH[l]),a||(a=!Rr(c)||c!==this._$AH[l]),c===le?t=le:t!==le&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tu extends Kr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}}const _h=rr?rr.emptyScript:"";class ru extends Kr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==le?this.element.setAttribute(this.name,_h):this.element.removeAttribute(this.name)}}class nu extends Kr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=Bt(this,t,r,0))!==null&&n!==void 0?n:le)===Me)return;const o=this._$AH,i=t===le&&o!==le||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==le&&(o===le||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ou{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}}const Hh={O:Jn,P:rt,A:va,C:1,M:Qc,L:eu,R:Yc,D:Bt,I:ur,V:Kr,H:ru,N:nu,U:tu,F:ou},Ss=Yn.litHtmlPolyfillSupport;Ss==null||Ss(_r,ur),((_o=Yn.litHtmlVersions)!==null&&_o!==void 0?_o:Yn.litHtmlVersions=[]).push("2.8.0");const Vh=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new ur(t.insertBefore(Dr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vo,Fo;let Lr=class extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Me}};Lr.finalized=!0,Lr._$litElement$=!0,(Vo=globalThis.litElementHydrateSupport)===null||Vo===void 0||Vo.call(globalThis,{LitElement:Lr});const Cs=globalThis.litElementPolyfillSupport;Cs==null||Cs({LitElement:Lr});((Fo=globalThis.litElementVersions)!==null&&Fo!==void 0?Fo:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$t=e=>(...t)=>({_$litDirective$:e,values:t});let ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Fh}=Hh,Ms=()=>document.createComment(""),br=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Ms(),i),s=o.insertBefore(Ms(),i);r=new Fh(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},Tt=(e,t,r=e)=>(e._$AI(t,r),e),zh={},jh=(e,t=zh)=>e._$AH=t,Zh=e=>e._$AH,zo=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=$t(class extends ot{constructor(e){var t;if(super(e),e.type!==Xr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Me}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Wh=$t(class extends ot{constructor(e){if(super(e),e.type!==Xr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=Zh(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let d,f,m=0,g=i.length-1,v=0,y=a.length-1;for(;m<=g&&v<=y;)if(i[m]===null)m++;else if(i[g]===null)g--;else if(l[m]===s[v])c[v]=Tt(i[m],a[v]),m++,v++;else if(l[g]===s[y])c[y]=Tt(i[g],a[y]),g--,y--;else if(l[m]===s[y])c[y]=Tt(i[m],a[y]),br(e,c[y+1],i[m]),m++,y--;else if(l[g]===s[v])c[v]=Tt(i[g],a[v]),br(e,i[m],i[g]),g--,v++;else if(d===void 0&&(d=As(s,v,y),f=As(l,m,g)),d.has(l[m]))if(d.has(l[g])){const b=f.get(s[v]),x=b!==void 0?i[b]:null;if(x===null){const C=br(e,i[m]);Tt(C,a[v]),c[v]=C}else c[v]=Tt(x,a[v]),br(e,i[m],x),i[b]=null;v++}else zo(i[g]),g--;else zo(i[m]),m++;for(;v<=y;){const b=br(e,c[y+1]);Tt(b,a[v]),c[v++]=b}for(;m<=g;){const b=i[m++];b!==null&&zo(b)}return this.ut=s,jh(e,c),Me}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ii=class extends ot{constructor(t){if(super(t),this.et=le,t.type!==Xr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===le||t==null)return this.ft=void 0,this.et=t;if(t===Me)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Ii.directiveName="unsafeHTML",Ii.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es extends Ii{}Es.directiveName="unsafeSVG",Es.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Uh(e,t,r){return e?t():r==null?void 0:r()}var Gh=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),f,m=!1,g=r.length-1;g>=0;g--){var v={};for(var y in n)v[y]=y==="access"?{}:n[y];for(var y in n.access)v.access[y]=n.access[y];v.addInitializer=function(x){if(m)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(x||null))};var b=(0,r[g])(s==="accessor"?{get:d.get,set:d.set}:d[l],v);if(s==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(f=a(b.get))&&(d.get=f),(f=a(b.set))&&(d.set=f),(f=a(b.init))&&o.unshift(f)}else(f=a(b))&&(s==="field"?o.unshift(f):d[l]=f)}c&&Object.defineProperty(c,n.name,d),m=!0},Yh=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Jh=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Kh(){function e(t,r){return t}return e}let iu=(()=>{let e=[Kh()],t,r=[],n,o=Lr;return n=class extends o{},Jh(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;Gh(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),Yh(n,r)})(),n})();function Xh(e){return!!e}const Qh={capitalizeFirstLetter:!1};function ef(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function tf(e,t){return t.capitalizeFirstLetter?ef(e):e}function rf(e,t=Qh){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return tf(n,t)}var Is;(function(e){e.Upper="upper",e.Lower="lower"})(Is||(Is={}));const nf=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function wa(e,t){return e?nf.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function of(e){return e?e instanceof Error?e.message:wa(e,"message")?String(e.message):String(e):""}function af(e){return e instanceof Error?e:new Error(of(e))}function sf(e){return!!e&&typeof e=="object"}function Dt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function au(e,t){let r=!1;const n=Dt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Dt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}var nr;(function(e){e.Upper="upper",e.Lower="lower"})(nr||(nr={}));function lf(e){return e.toLowerCase()!==e.toUpperCase()}function Ls(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!lf(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===nr.Upper&&o!==o.toUpperCase())return!1;if(t===nr.Lower&&o!==o.toLowerCase())return!1}return!0}function cf(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ls(a,nr.Lower,{blockNoCaseCharacters:!0})||Ls(s,nr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function uf(e){return!!e&&typeof e=="object"}function Ps(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function df(e){return Array.isArray(e)?"array":typeof e}function hf(e,t){return df(e)===t}function ff(e,t){let r=!1;const n=Ps(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ps(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function it(e){if(uf(e))return ff(e,(r,n)=>{if(!hf(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(cf(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?q(r):r.startsWith("-")?Pn`-${q(r)}`:Pn`--${q(r)}`;return{name:a,value:Pn`var(${a}, ${q(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${it.name}' function.`)}function Li({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mf=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},pf=(e,t,r)=>{t.constructor.createProperty(r,e)};function su(e){return(t,r)=>r!==void 0?pf(e,t,r):mf(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jo;((jo=window.HTMLSlotElement)===null||jo===void 0?void 0:jo.prototype.assignedElements)!=null;function gf(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Pi(e){return wa(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function ba(e){return wa(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function lu(e){return e.map(t=>Pi(t)?t.definition:t).filter(t=>ba(t))}const cu=new WeakMap;function vf(e,t){var o;const r=lu(t);return(o=uu(cu,[e,...r]).value)==null?void 0:o.template}function wf(e,t,r){const n=lu(t);return hu(cu,[e,...n],r)}function uu(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=du(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?uu(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function du(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function hu(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=du(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),hu(l,t,r,n+1)}const bf=new WeakMap;function fu(e,t,r){const n=vf(e,t),o=n??r();if(!n){const s=wf(e,t,o);if(s.result)bf.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=gf(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function mu(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const f=o.length-1,m=o[f],g=d-1,v=t[g];n&&n(c);let y,b=[];if(typeof m=="string"&&(y=r(m,c,v),y)){o[f]=m+y.replacement,a.push(g);const C=y.getExtraValues;b=C?C(v):[],b.length&&C?(o[f]+=" ",b.forEach((D,Z)=>{Z&&o.push(" ")}),s.push(D=>{const Z=D[g],ne=C(Z);return{index:g,values:ne}}),o.push(c)):o[f]+=c}y||o.push(c);const x=e.raw[d];y?(i[f]=i[f]+y.replacement+x,b.length&&b.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function yf(...[e,t,r]){if(ba(r))return{replacement:r.tagName,getExtraValues:void 0}}function $f(e,t){return mu(e,t,yf)}function p(e,...t){const r=fu(e,t,()=>$f(e,t));return Pn(r.strings,...r.values)}const ya=Symbol("key for ignoring inputs not having been set yet"),kf={[ya]:!0,allowPolymorphicState:!1};function pu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof iu?!0:pu(r)}function gu(e,t){const r=e.instanceState;Dt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Dt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),xf(e)}function xf(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ns(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Tf extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function $a(){return e=>{var t;return t=class extends Tf{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function K(){return $a()}function Sf(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=$a()(r);return t[r]=n,t},{}):{}}const Cf="_elementVirStateSetup";function Mf(e){return sf(e)?Cf in e:!1}function Af(e,t){return e.includes(t)}var qs;(function(e){e.Upper="upper",e.Lower="lower"})(qs||(qs={}));const Ef=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Nn(e,t){return e?Ef.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Qr(e){return!!e&&typeof e=="object"}function Kn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ni(e){return Array.isArray(e)?"array":typeof e}function Jt(e,t){return Ni(e)===t}function If(e,t){let r=!1;const n=Kn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Kn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Lf(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ni(e)===Ni(t)&&r}const ka=Symbol("and"),xa=Symbol("or"),vu=Symbol("exact"),wu=Symbol("enum"),Ta=Symbol("unknown"),bu="__vir__shape__definition__key__do__not__use__in__actual__objects";function yu(e){return Nn(e,bu)}const $u="__vir__shape__specifier__key__do__not__use__in__actual__objects",Pf=[ka,xa,vu,wu,Ta];function St(...e){return Ea(e,xa)}function Nf(...e){return Ea(e,ka)}function qf(){return Ea([],Ta)}function $o(e){return en(e,xa)}function Sa(e){return en(e,ka)}function Ca(e){return en(e,vu)}function Ma(e){return en(e,wu)}function Aa(e){return en(e,Ta)}function en(e,t){const r=ko(e);return!!r&&r.specifierType===t}function Ea(e,t){return{[$u]:!0,specifierType:t,parts:e}}function qn(e,t){const r=ko(t);if(r){if(Sa(r))return r.parts.every(n=>qn(e,n));if($o(r))return r.parts.some(n=>qn(e,n));if(Ca(r))return Qr(e)?qn(e,r.parts[0]):e===r.parts[0];if(Ma(r))return Object.values(r.parts[0]).some(n=>n===e);if(Aa(r))return!0}return Lf(e,t)}function ko(e){if(Qr(e)&&Nn(e,$u)){if(!Nn(e,"parts")||!Jt(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Nn(e,"specifierType")||!Af(Pf,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function qi(e,t=!1){return Oi(e)}function Oi(e){const t=ko(e);if(t){if($o(t)||Ca(t))return Oi(t.parts[0]);if(Sa(t))return t.parts.reduce((r,n)=>Object.assign(r,Oi(n)),{});if(Ma(t))return Object.values(t.parts[0])[0];if(Aa(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return yu(e)?qi(e.shape):e instanceof RegExp||Jt(e,"array")?e:Qr(e)?If(e,(r,n)=>qi(n)):e}function tn(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:qi(e),[bu]:!0}}class Ve extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Of(e,t,r={}){try{return ku(e,t,r),!0}catch{return!1}}function ku(e,t,r={}){Et(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function xu(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Et(e,t,r,n){if(Aa(t))return!0;if(yu(t))return Et(e,t.shape,r,n);const o=xu(r);if(ko(e))throw new Ve(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!qn(e,t))throw new Ve(`Subject does not match shape definition at key ${o}`);if(Jt(t,"function"))return Jt(e,"function");if(Qr(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if($o(t))l=t.parts.some(c=>{try{const d=Et(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof Ve)return!1;throw d}});else if(Sa(t))l=t.parts.every(c=>{try{const d=Et(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof Ve)return!1;throw d}});else if(Ca(t)){const c=Et(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(Ma(t))throw new Ve(`Cannot compare an enum specifier to an object at ${o}`);if(Jt(t,"array")&&Jt(a,"array"))l=a.every((c,d)=>{const f=t.some(m=>{try{return Et(c,m,[...r,d],n),!0}catch(g){if(g instanceof Ve)return!1;throw g}});return s[d]=f,f});else{const c=Bf({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(f=>!s[f]).join(",")}`;throw new Ve(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new Ve(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Bf({keys:e,options:t,shape:r,subject:n}){const o=xu(e),i={};if(Qr(r)){const a=new Set(Kn(n)),s=new Set(Kn(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Ve(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const c=r[l],d=$o(c)?c.parts.includes(void 0):!1,f=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!f)throw new Ve(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];Et(c,d,[...e,l],t),i[l]=!0})}else throw new Ve(`shape definition at ${o} was not an object.`);return i}const Df=tn({addListener(){return!1},removeListener(){return!1},value:qf()});function Zo(e){return Of(e,Df,{allowExtraKeys:!0})}function Rf(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Os(e,t){const r=e;function n(a){t?Rf(a,e,e.tagName):su()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=Mf(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function f(v){a[s]=v,r[s]=v}const m=e.observablePropertyListenerMap[s];if(d!==c&&Zo(d)&&(m!=null&&m.length)&&d.removeListener(m),Zo(c))if(m)c.addListener(m);else{let v=function(){e.requestUpdate()};var g=v;e.observablePropertyListenerMap[s]=v,c.addListener(v)}else Zo(d)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function _f(e){return e?au(e,t=>t):{}}function Hf({hostClassNames:e,cssVars:t}){return{hostClasses:au(e,(r,n)=>({name:q(n),selector:q(`:host(.${n})`)})),cssVars:t}}function Vf({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Dt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Ff(e,t){function r(o){Dt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var zf=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function xo(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...kf,...e.options},n=Sf(e.events),o=_f(e.hostClasses);e.hostClasses&&Ns(e.tagName,e.hostClasses),e.cssVars&&Ns(e.tagName,e.cssVars);const i=e.cssVars?it(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Hf({hostClassNames:o,cssVars:i})):e.styles||p``,s=e.renderCallback;function l(...[d]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:d}}const c=(t=class extends iu{createRenderParams(){return Ff(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{pu(this)&&!this.haveInputsBeenSet&&!r[ya]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${xo.name}' to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const f=s(d);if(f instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Vf({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=af(d);throw f.message=`Failed to render '${e.tagName}': ${f.message}`,this.lastRenderError=f,f}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();if(e.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();if(e.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(d){gu(this,d)}constructor(){var f;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Os(this,!1),this.instanceState=Os(this,!((f=e.options)!=null&&f.allowPolymorphicState));const d=e.stateInitStatic||{};Dt(d).forEach(m=>{su()(this,m),this.instanceState[m]=d[m]}),this.definition=c}},zf(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:rf(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Tu(){return e=>xo({...e,options:{[ya]:!1,...e.options}})}function Ia(e,t){return Hr(e,t),e.element}function jf(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Hr(e,t){const r=jf(e),n=r?`: in ${r}`:"";if(e.type!==Xr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Zf(e,t){return t?Bs(e,t):Bs(void 0,e)}const Bs=$t(class extends ot{constructor(e){super(e),this.element=Ia(e,"assign")}render(e,t){return gu(this.element,t),Me}});function Wf(e){const t=$t(class extends ot{constructor(r){super(r),this.element=Ia(r,"testId")}render(r){return this.element.setAttribute(e,r),Me}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function T(e,t){return Uf(e,t)}const Uf=$t(class extends ot{constructor(e){super(e),this.element=Ia(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Me}}),Ds="onDomCreated",Rs=$t(class extends ot{constructor(e){super(e),Hr(e,Ds)}update(e,[t]){Hr(e,Ds);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Wo="onResize",Vr=$t(class extends ot{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Hr(e,Wo)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Wo} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Hr(e,Wo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Se(e,t,r){return Uh(e,()=>t,()=>r)}const{attributeDirective:Gf,attributeSelector:xw,attributeName:Tw}=Wf("data-test-id");function La(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Tu()(r(n))),defineElementNoInputs:n=>(t(n),xo(r(n)))}}function Yf(...[e,t,r]){const n=Pi(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ba(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const d=Pi(c)?c.inputs:void 0;return[o&&d?Zf(d):void 0].filter(Xh)}}}function Jf(e){}function Kf(e){return mu(e.strings,e.values,Yf,Jf)}function u(e,...t){const r=Dh(e,...t),n=fu(e,t,()=>Kf(r));return{...r,strings:n.strings,values:n.values}}var _s;(function(e){e.Upper="upper",e.Lower="lower"})(_s||(_s={}));const Xf={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Qf=Object.keys(Xf),e1=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Qf,...e1];function Sr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const t1={[fe.ElementExample]:()=>[],[fe.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Eh(e.controls,e.title)].filter(fa),[fe.Root]:()=>[]},Xn="_isBookTreeNode",Su=new Map;function r1(e){return Su.get(e)}function n1(e,t){vh(Su,e,()=>t)}function Xt(e,t){return!!(Cu(e)&&e.entry.entryType===t)}function Cu(e){return!!(Vc(e,[Xn,"entry"])&&e[Xn])}function o1(){return{[Xn]:!0,entry:{entryType:fe.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function i1({entries:e,debug:t}){const r=r1(e);if(r)return r;const n=o1();e.forEach(a=>Pa({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Mu(n),i={tree:n,flattenedNodes:o};return n1(e,i),t&&console.info("element-book tree:",n),i}function a1(e,t,r){if(!t.parent)return e;const n=Bi(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Pa({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Bi(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${ma(t,!1)}`);return o}function Pa({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=t1[t.entryType](t);t.errors.push(...o);const i=a1(e,t,r),a=Un(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Xn]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Mh(t,fe.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Pa({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Bi(e,t){const r=Cu(e)?e.fullUrlBreadcrumbs.slice(0,-1):ma(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Mu(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Mu(o));return[e,...r].flat()}function Na(e,t){return qa(e,["",...t],void 0)}function qa(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&qa(i,n,r);return{...e.controls,...a}}function s1(e,t,r){const n={...e};return qa(n,["",...t],r),n}function Au(e,t){const r=(t==null?void 0:t.controls)||(Xt(e,fe.Page)?Wn(e.entry.controls,(o,i)=>i.initValue):{});return{children:Wn(e.children,(o,i)=>{var a;return Au(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function l1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const c1=Ch(32);function On(e){return e.join(c1)}function Eu(e){if(!e.length)return[];const t=On(e),r=Eu(e.slice(0,-1));return[t,...r]}const u1=["error","errors"];function d1(e){return u1.includes(e)}function h1({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),On(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&d1(t),a=On(o.fullUrlBreadcrumbs);if(l1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=Eu(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=On(o.fullUrlBreadcrumbs),a=r[i];if(!yo(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var be;(function(e){e.Search="search",e.Book="book"})(be||(be={}));function Di(e){return e[0]===be.Book?"":e[1]?decodeURIComponent(e[1]):""}const or={hash:void 0,paths:[be.Book],search:void 0},f1=0;function Oa(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==f1)}class To extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Hs extends To{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Fr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const m1=globalThis.history.pushState;function Vs(...e){const t=m1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Fr)),t}const p1=globalThis.history.replaceState;function Fs(...e){const t=p1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Fr)),t}function g1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Vs)throw new Hs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Fs)throw new Hs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Vs,globalThis.history.replaceState=Fs,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Fr))})}}function So(e){return!!e}var zs;(function(e){e.Upper="upper",e.Lower="lower"})(zs||(zs={}));function v1(e,t){return e.split(t)}function w1(e){return e?e instanceof Error?e.message:Qn(e,"message")?String(e.message):String(e):""}function b1(e){return!!e&&typeof e=="object"}const y1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Qn(e,t){return e?y1.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function js(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Iu(e,t,r=!1,n={}){const o=js(e),i=new Set(js(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Qn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||Lu(l,c,s,r,n[a]??{})})}function Lu(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Qn(t,"constructor")&&(!Qn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(f=>{try{Lu(l,f,r,n,o);return}catch(m){return new Error(`entry at index "${c}" did not match expected shape: ${w1(m)}`)}}).filter(So).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):b1(t)&&Iu(e,t,n,o)}function $1(e){return Array.isArray(e)?"array":typeof e}function k1(e,t){return $1(e)===t}function x1({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function T1(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(So);return t.length?`?${t.join("&")}`:""}function S1(e){return x1({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=v1(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(So)}function C1(e,t){const r=k1(e,"string")?new URL(e):e,n=S1(r.search),o=Object.fromEntries(n);return t&&Iu(o,t),o}function M1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?C1(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function Pu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Nu({routeBase:e,windowPath:t}){if(!e)return"";const r=Pu(e);if(qu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Nu({routeBase:n,windowPath:t}):""}function qu({routeBase:e,windowPath:t}){const r=Pu(e);return r?t.startsWith(`/${r}`):!1}class A1 extends To{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ou(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Zs=6;function Ws(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Zs)throw new A1(`Route sanitization depth has exceed the max of ${Zs} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ou(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Uo extends To{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function E1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Uo(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Uo(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Uo(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function I1(e,t,r=!1){const n=Bu(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Bu(e,t){var s;const r=qu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?T1(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(So).join("/")}${n}${i}`}function L1(e={}){E1(e),g1();const t=e.routeBase?Nu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Ws(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&Ou(l,d)))return I1(d,t,a)},createRoutesUrl(i){return Bu(i,t)},getCurrentRawRoutes(){return M1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new To(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Fr,n),r=!0),i&&Ws(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Fr,n),r=!1),a},sanitizationDepth:0};return o}function P1(e){return L1({routeBase:e,routeSanitizer(t){return{paths:N1(t.paths),hash:void 0,search:void 0}}})}function N1(e){const t=e[0];if(yh(t,be)){if(t===be.Book)return[be.Book,...e.slice(1)];if(t===be.Search)return e[1]?[t,e[1]]:[be.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return or.paths}const H=it({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),q1={nav:{hover:{background:H["element-book-nav-hover-background-color"],foreground:H["element-book-nav-hover-foreground-color"]},active:{background:H["element-book-nav-active-background-color"],foreground:H["element-book-nav-active-foreground-color"]},selected:{background:H["element-book-nav-selected-background-color"],foreground:H["element-book-nav-selected-foreground-color"]}},accent:{icon:H["element-book-accent-icon-color"]},page:{background:H["element-book-page-background-color"],backgroundFaint1:H["element-book-page-background-faint-level-1-color"],backgroundFaint2:H["element-book-page-background-faint-level-2-color"],foreground:H["element-book-page-foreground-color"],foregroundFaint1:H["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:H["element-book-page-foreground-faint-level-2-color"]}};function O1(e,t){Du(e,t,q1)}function Ri(e){return wo(e,"_$cssResult$")}function Us(e){return Vc(e,["name","value","default"])&&yo(e.default,"string")&&Ri(e.name)&&Ri(e.value)}function Du(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Ri(o)){if(!Us(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Li({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Us(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Du(e,o,i)}})}function ce(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function rn(e){return mt(e)==="string"}function mt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function eo(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ru(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function _u(e){return e[e.length-1]}function to(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Hu(e,t,r){return(r-e)/(t-e)}function Ba(e,t,r){return to(t[0],t[1],Hu(e[0],e[1],r))}function Vu(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var B1=Object.freeze({__proto__:null,interpolate:to,interpolateInv:Hu,isString:rn,last:_u,mapRange:Ba,multiplyMatrices:ce,parseCoordGrammar:Vu,parseFunction:Ru,toPrecision:eo,type:mt});class D1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const gt=new D1;var Je={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const je={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function _i(e){return Array.isArray(e)?e:je[e]}function ro(e,t,r,n={}){if(e=_i(e),t=_i(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(gt.run("chromatic-adaptation-start",o),o.M||(o.W1===je.D65&&o.W2===je.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===je.D50&&o.W2===je.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),gt.run("chromatic-adaptation-end",o),o.M)return ce(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const R1=75e-6,xe=class xe{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?xe.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=_i(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:_1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),gt.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=R1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Gs(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Gs(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=xe.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=xe.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(xe.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof xe)return t;if(mt(t)==="string"){let o=xe.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return xe.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=mt(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=xe.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=mt(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=xe.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Bo(xe,"registry",{}),Bo(xe,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=xe;function _1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Gs(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Vu(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Ba(s,l,i)),i=eo(i,o),c&&(i+=c),i})}return e}var qe=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class $e extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=qe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=ce(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ro(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=ro(this.base.white,this.white,r),ce(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Fu(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(gt.run("parse-start",r),r.color)return r.color;if(r.parsed=Ru(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of M.all){let g=m.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const v=Object.keys(m.coords).map((y,b)=>r.parsed.args[b]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:v,alpha:d}}}let f="";if(c in M.registry){let m=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${c}). `+(f||"Missing a plugin?"))}else for(let c of M.all){let d=c.getFormat(l);if(d&&d.type==="function"){let f=1;(d.lastAlpha||_u(r.parsed.args).alpha)&&(f=r.parsed.args.pop());let m=r.parsed.args,g;return d.coordGrammar&&(g=Object.entries(c.coords).map(([v,y],b)=>{var de;let x=d.coordGrammar[b],C=(de=m[b])==null?void 0:de.type,D=x.find(ue=>ue==C);if(!D){let ue=y.name||v;throw new TypeError(`${C} not allowed for ${ue} in ${l}()`)}let Z=D.range;C==="<percentage>"&&(Z||(Z=[0,1]));let ne=y.range||y.refRange;return Z&&ne&&(m[b]=Ba(Z,ne,m[b])),D})),t&&Object.assign(t,{formatId:d.name,types:g}),{spaceId:c.id,coords:m,alpha:f}}}}else for(let l of M.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let f=d.parse(r.str);if(f)return f.alpha??(f.alpha=1),t&&(t.formatId=c),f}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function z(e){if(!e)throw new TypeError("Empty color reference");rn(e)&&(e=Fu(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function nn(e,t){return t=M.get(t),t.from(e)}function Oe(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return nn(e,r)[n]}function zu(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function vt(e,t,r){if(e=z(e),arguments.length===2&&mt(arguments[1])==="object"){let n=arguments[1];for(let o in n)vt(e,o,n[o])}else{typeof r=="function"&&(r=r(Oe(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=nn(e,n);i[o]=r,zu(e,n,i)}return e}var Da=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:qe,fromBase:e=>ro(qe.white,"D50",e),toBase:e=>ro("D50",qe.white,e),formats:{color:{}}});const H1=216/24389,Ys=24/116,hn=24389/27;let Go=je.D50;var Te=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Go,base:Da,fromBase(e){let r=e.map((n,o)=>n/Go[o]).map(n=>n>H1?Math.cbrt(n):(hn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ys?Math.pow(t[0],3):(116*t[0]-16)/hn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/hn,t[2]>Ys?Math.pow(t[2],3):(116*t[2]-16)/hn].map((n,o)=>n*Go[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Co(e){return(e%360+360)%360}function V1(e,t){if(e==="raw")return t;let[r,n]=t.map(Co),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var zr=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Te,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Co(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Js=25**7,no=Math.PI,Ks=180/no,Ft=no/180;function Hi(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Te.from(e),l=zr.from(Te,[i,a,s])[1],[c,d,f]=Te.from(t),m=zr.from(Te,[c,d,f])[1];l<0&&(l=0),m<0&&(m=0);let v=((l+m)/2)**7,y=.5*(1-Math.sqrt(v/(v+Js))),b=(1+y)*a,x=(1+y)*d,C=Math.sqrt(b**2+s**2),D=Math.sqrt(x**2+f**2),Z=b===0&&s===0?0:Math.atan2(s,b),ne=x===0&&f===0?0:Math.atan2(f,x);Z<0&&(Z+=2*no),ne<0&&(ne+=2*no),Z*=Ks,ne*=Ks;let de=c-i,ue=D-C,j=ne-Z,oe=Z+ne,Re=Math.abs(j),ve;C*D===0?ve=0:Re<=180?ve=j:j>180?ve=j-360:j<-180?ve=j+360:console.log("the unthinkable has happened");let Ht=2*Math.sqrt(D*C)*Math.sin(ve*Ft/2),gr=(i+c)/2,Oo=(C+D)/2,os=Math.pow(Oo,7),Xe;C*D===0?Xe=oe:Re<=180?Xe=oe/2:oe<360?Xe=(oe+360)/2:Xe=(oe-360)/2;let is=(gr-50)**2,sh=1+.015*is/Math.sqrt(20+is),as=1+.045*Oo,vr=1;vr-=.17*Math.cos((Xe-30)*Ft),vr+=.24*Math.cos(2*Xe*Ft),vr+=.32*Math.cos((3*Xe+6)*Ft),vr-=.2*Math.cos((4*Xe-63)*Ft);let ss=1+.015*Oo*vr,lh=30*Math.exp(-1*((Xe-275)/25)**2),ch=2*Math.sqrt(os/(os+Js)),uh=-1*Math.sin(2*lh*Ft)*ch,dn=(de/(r*sh))**2;return dn+=(ue/(n*as))**2,dn+=(Ht/(o*ss))**2,dn+=uh*(ue/(n*as))*(Ht/(o*ss)),Math.sqrt(dn)}const F1=75e-6;function Pr(e,t=e.space,{epsilon:r=F1}={}){e=z(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function jr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function wt(e,{method:t=Je.gamut_mapping,space:r=e.space}={}){if(rn(arguments[1])&&(r=arguments[1]),r=M.get(r),Pr(e,r,{epsilon:0}))return z(e);let n=Le(e,r);if(t!=="clip"&&!Pr(e,r)){let o=wt(jr(n),{method:"clip",space:r});if(Hi(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=Le(n,a),d=(i.range||i.refRange)[0],f=.01,m=d,g=Oe(l,s);for(;g-m>f;){let v=jr(l);v=wt(v,{space:r,method:"clip"}),Hi(l,v)-2<f?m=Oe(l,s):g=Oe(l,s),vt(l,s,(m+g)/2)}n=Le(l,r)}else n=o}if(t==="clip"||!Pr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Le(n,e.space)),e.coords=n.coords,e}wt.returns="color";function Le(e,t,{inGamut:r}={}){e=z(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=wt(o)),o}Le.returns="color";function oo(e,{precision:t=Je.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=z(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Pr(e)&&(s=wt(jr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>eo(g,t)));let d=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(g)}let f=e.alpha;t!==null&&(f=eo(f,t));let m=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${f}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${m})`}return i}const z1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],j1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Mo=new $e({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:z1,fromXYZ_M:j1,formats:{color:{}}});const fn=1.09929682680944,Xs=.018053968510807;var ju=new $e({id:"rec2020",name:"REC.2020",base:Mo,toBase(e){return e.map(function(t){return t<Xs*4.5?t/4.5:Math.pow((t+fn-1)/fn,1/.45)})},fromBase(e){return e.map(function(t){return t>=Xs?fn*Math.pow(t,.45)-(fn-1):4.5*t})},formats:{color:{}}});const Z1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],W1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Zu=new $e({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Z1,fromXYZ_M:W1});const U1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],G1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Wu=new $e({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:U1,fromXYZ_M:G1,formats:{color:{}}}),Qs={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let el=Array(3).fill("<percentage> | <number>[0, 255]"),tl=Array(3).fill("<number>[0, 255]");var Zr=new $e({id:"srgb",name:"sRGB",base:Wu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:el},rgb_number:{name:"rgb",commas:!0,coords:tl,noAlpha:!0},color:{},rgba:{coords:el,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:tl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Qs.black,t.alpha=0):t.coords=Qs[e],t.coords)return t}}}}),Uu=new $e({id:"p3",name:"P3",base:Zu,fromBase:Zr.fromBase,toBase:Zr.toBase,formats:{color:{id:"display-p3"}}});Je.display_space=Zr;if(typeof CSS<"u"&&CSS.supports)for(let e of[Te,ju,Uu]){let t=e.getMinCoords(),n=oo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Je.display_space=e;break}}function Y1(e,{space:t=Je.display_space,...r}={}){let n=oo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Je.display_space)n=new String(n),n.color=e;else{let o=Le(e,t);n=new String(oo(o,r)),n.color=o}return n}function Gu(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function J1(e,t){return e=z(e),t=z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function bt(e){return Oe(e,[qe,"y"])}function Yu(e,t){vt(e,[qe,"y"],t)}function K1(e){Object.defineProperty(e.prototype,"luminance",{get(){return bt(this)},set(t){Yu(this,t)}})}var X1=Object.freeze({__proto__:null,getLuminance:bt,register:K1,setLuminance:Yu});function Q1(e,t){e=z(e),t=z(t);let r=Math.max(bt(e),0),n=Math.max(bt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const em=.56,tm=.57,rm=.62,nm=.65,rl=.022,om=1.414,im=.1,am=5e-4,sm=1.14,nl=.027,lm=1.14;function ol(e){return e>=rl?e:e+(rl-e)**om}function zt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function cm(e,t){t=z(t),e=z(e);let r,n,o,i,a,s;t=Le(t,"srgb"),[i,a,s]=t.coords;let l=zt(i)*.2126729+zt(a)*.7151522+zt(s)*.072175;e=Le(e,"srgb"),[i,a,s]=e.coords;let c=zt(i)*.2126729+zt(a)*.7151522+zt(s)*.072175,d=ol(l),f=ol(c),m=f>d;return Math.abs(f-d)<am?n=0:m?(r=f**em-d**tm,n=r*sm):(r=f**nm-d**rm,n=r*lm),Math.abs(n)<im?o=0:n>0?o=n-nl:o=n+nl,o*100}function um(e,t){e=z(e),t=z(t);let r=Math.max(bt(e),0),n=Math.max(bt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const dm=5e4;function hm(e,t){e=z(e),t=z(t);let r=Math.max(bt(e),0),n=Math.max(bt(t),0);return n>r&&([r,n]=[n,r]),n===0?dm:(r-n)/n}function fm(e,t){e=z(e),t=z(t);let r=Oe(e,[Te,"l"]),n=Oe(t,[Te,"l"]);return Math.abs(r-n)}const mm=216/24389,il=24/116,mn=24389/27;let Yo=je.D65;var Vi=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yo,base:qe,fromBase(e){let r=e.map((n,o)=>n/Yo[o]).map(n=>n>mm?Math.cbrt(n):(mn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>il?Math.pow(t[0],3):(116*t[0]-16)/mn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/mn,t[2]>il?Math.pow(t[2],3):(116*t[2]-16)/mn].map((n,o)=>n*Yo[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Jo=Math.pow(5,.5)*.5+.5;function pm(e,t){e=z(e),t=z(t);let r=Oe(e,[Vi,"l"]),n=Oe(t,[Vi,"l"]),o=Math.abs(Math.pow(r,Jo)-Math.pow(n,Jo)),i=Math.pow(o,1/Jo)*Math.SQRT2-40;return i<7.5?0:i}var Bn=Object.freeze({__proto__:null,contrastAPCA:cm,contrastDeltaPhi:pm,contrastLstar:fm,contrastMichelson:um,contrastWCAG21:Q1,contrastWeber:hm});function gm(e,t,r={}){rn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Bn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=z(e),t=z(t);for(let i in Bn)if("contrast"+n.toLowerCase()===i.toLowerCase())return Bn[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ju(e){let[t,r,n]=nn(e,qe),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ku(e){let[t,r,n]=nn(e,qe),o=t+r+n;return[t/o,r/o]}function vm(e){Object.defineProperty(e.prototype,"uv",{get(){return Ju(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ku(this)}})}var wm=Object.freeze({__proto__:null,register:vm,uv:Ju,xy:Ku});function bm(e,t){return Gu(e,t,"lab")}const ym=Math.PI,al=ym/180;function $m(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Te.from(e),[,s,l]=zr.from(Te,[o,i,a]),[c,d,f]=Te.from(t),m=zr.from(Te,[c,d,f])[1];s<0&&(s=0),m<0&&(m=0);let g=o-c,v=s-m,y=i-d,b=a-f,x=y**2+b**2-v**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let D=.0638*s/(1+.0131*s)+.638,Z;Number.isNaN(l)&&(l=0),l>=164&&l<=345?Z=.56+Math.abs(.2*Math.cos((l+168)*al)):Z=.36+Math.abs(.4*Math.cos((l+35)*al));let ne=Math.pow(s,4),de=Math.sqrt(ne/(ne+1900)),ue=D*(de*Z+1-de),j=(g/(r*C))**2;return j+=(v/(n*D))**2,j+=x/ue**2,Math.sqrt(j)}const sl=203;var Ra=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:qe,fromBase(e){return e.map(t=>Math.max(t*sl,0))},toBase(e){return e.map(t=>Math.max(t/sl,0))}});const pn=1.15,gn=.66,ll=2610/2**14,km=2**14/2610,cl=3424/2**12,ul=2413/2**7,dl=2392/2**7,xm=1.7*2523/2**5,hl=2**5/(1.7*2523),vn=-.56,Ko=16295499532821565e-27,Tm=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Sm=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Cm=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Mm=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Xu=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ra,fromBase(e){let[t,r,n]=e,o=pn*t-(pn-1)*n,i=gn*r-(gn-1)*t,s=ce(Tm,[o,i,n]).map(function(m){let g=cl+ul*(m/1e4)**ll,v=1+dl*(m/1e4)**ll;return(g/v)**xm}),[l,c,d]=ce(Cm,s);return[(1+vn)*l/(1+vn*l)-Ko,c,d]},toBase(e){let[t,r,n]=e,o=(t+Ko)/(1+vn-vn*(t+Ko)),a=ce(Mm,[o,r,n]).map(function(m){let g=cl-m**hl,v=dl*m**hl-ul;return 1e4*(g/v)**km}),[s,l,c]=ce(Sm,a),d=(s+(pn-1)*c)/pn,f=(l+(gn-1)*d)/gn;return[d,f,c]},formats:{color:{}}}),Fi=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xu,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Co(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Am(e,t){let[r,n,o]=Fi.from(e),[i,a,s]=Fi.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,f=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const Qu=3424/4096,ed=2413/128,td=2392/128,fl=2610/16384,Em=2523/32,Im=16384/2610,ml=32/2523,Lm=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Pm=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Nm=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],qm=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var zi=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ra,fromBase(e){let t=ce(Lm,e);return Om(t)},toBase(e){let t=Bm(e);return ce(qm,t)},formats:{color:{}}});function Om(e){let t=e.map(function(r){let n=Qu+ed*(r/1e4)**fl,o=1+td*(r/1e4)**fl;return(n/o)**Em});return ce(Pm,t)}function Bm(e){return ce(Nm,e).map(function(n){let o=Math.max(n**ml-Qu,0),i=ed-td*n**ml;return 1e4*(o/i)**Im})}function Dm(e,t){let[r,n,o]=zi.from(e),[i,a,s]=zi.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Rm=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],_m=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Hm=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Vm=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var io=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:qe,fromBase(e){let r=ce(Rm,e).map(n=>Math.cbrt(n));return ce(Hm,r)},toBase(e){let r=ce(Vm,e).map(n=>n**3);return ce(_m,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Fm(e,t){let[r,n,o]=io.from(e),[i,a,s]=io.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var ao={deltaE76:bm,deltaECMC:$m,deltaE2000:Hi,deltaEJz:Am,deltaEITP:Dm,deltaEOK:Fm};function Cr(e,t,r={}){rn(r)&&(r={method:r});let{method:n=Je.deltaE,...o}=r;e=z(e),t=z(t);for(let i in ao)if("deltae"+n.toLowerCase()===i.toLowerCase())return ao[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function zm(e,t=.25){let n=[M.get("oklch","lch"),"l"];return vt(e,n,o=>o*(1+t))}function jm(e,t=.25){let n=[M.get("oklch","lch"),"l"];return vt(e,n,o=>o*(1-t))}var Zm=Object.freeze({__proto__:null,darken:jm,lighten:zm});function rd(e,t,r=.5,n={}){[e,t]=[z(e),z(t)],mt(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return on(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function nd(e,t,r={}){let n;_a(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[z(e),z(t)],n=on(e,t,l));let c=Cr(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,f=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)f=[{p:.5,color:n(.5)}];else{let m=1/(d-1);f=Array.from({length:d},(g,v)=>{let y=v*m;return{p:y,color:n(y)}})}if(o>0){let m=f.reduce((g,v,y)=>{if(y===0)return 0;let b=Cr(v.color,f[y-1].color,i);return Math.max(g,b)},0);for(;m>o;){m=0;for(let g=1;g<f.length&&f.length<s;g++){let v=f[g-1],y=f[g],b=(y.p+v.p)/2,x=n(b);m=Math.max(m,Cr(x,v.color),Cr(x,y.color)),f.splice(g,0,{p:b,color:n(b)}),g++}}}return f=f.map(m=>m.color),f}function on(e,t,r={}){if(_a(e)){let[l,c]=[e,t];return on(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=z(e),t=z(t),e=jr(e),t=jr(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[Je.interpolationSpace]||e.space,o=o?M.get(o):n,e=Le(e,n),t=Le(t,n),e=wt(e),t=wt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[Oe(e,c),Oe(t,c)];[d,f]=V1(l,[d,f]),vt(e,c,d),vt(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((m,g)=>{let v=t.coords[g];return to(m,v,l)}),d=to(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return a&&(f.coords=f.coords.map(m=>m/d)),o!==n&&(f=Le(f,o)),f},{rangeArgs:s})}function _a(e){return mt(e)==="function"&&!!e.rangeArgs}Je.interpolationSpace="lab";function Wm(e){e.defineFunction("mix",rd,{returns:"color"}),e.defineFunction("range",on,{returns:"function<color>"}),e.defineFunction("steps",nd,{returns:"array<color>"})}var Um=Object.freeze({__proto__:null,isRange:_a,mix:rd,range:on,register:Wm,steps:nd}),od=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Zr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),id=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:od,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Gm=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:id,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Ym=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Jm=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ad=new $e({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Ym,fromXYZ_M:Jm}),Km=new $e({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ad,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Xm=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Qm=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var sd=new $e({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Da,toXYZ_M:Xm,fromXYZ_M:Qm});const e2=1/512,t2=16/512;var r2=new $e({id:"prophoto",name:"ProPhoto",base:sd,toBase(e){return e.map(t=>t<t2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=e2?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),n2=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:io,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Co(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const pl=203,gl=2610/2**14,o2=2**14/2610,i2=2523/2**5,vl=2**5/2523,wl=3424/2**12,bl=2413/2**7,yl=2392/2**7;var a2=new $e({id:"rec2100pq",name:"REC.2100-PQ",base:Mo,toBase(e){return e.map(function(t){return(Math.max(t**vl-wl,0)/(bl-yl*t**vl))**o2*1e4/pl})},fromBase(e){return e.map(function(t){let r=Math.max(t*pl/1e4,0),n=wl+bl*r**gl,o=1+yl*r**gl;return(n/o)**i2})},formats:{color:{id:"rec2100-pq"}}});const $l=.17883277,kl=.28466892,xl=.55991073,Xo=3.7743;var s2=new $e({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Mo,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Xo:(Math.exp((t-xl)/$l)+kl)/12*Xo})},fromBase(e){return e.map(function(t){return t/=Xo,t<=1/12?Math.sqrt(3*t):$l*Math.log(12*t-kl)+xl})},formats:{color:{id:"rec2100-hlg"}}});const ld={};gt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=cd(e.W1,e.W2,e.options.method))});gt.add("chromatic-adaptation-end",e=>{e.M||(e.M=cd(e.W1,e.W2,e.options.method))});function Ao({id:e,toCone_M:t,fromCone_M:r}){ld[e]=arguments[0]}function cd(e,t,r="Bradford"){let n=ld[r],[o,i,a]=ce(n.toCone_M,e),[s,l,c]=ce(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],f=ce(d,n.toCone_M);return ce(n.fromCone_M,f)}Ao({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ao({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ao({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ao({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(je,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});je.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const l2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],c2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ud=new $e({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:je.ACES,toXYZ_M:l2,fromXYZ_M:c2,formats:{color:{}}});const wn=2**-16,Qo=-.35828683,bn=(Math.log2(65504)+9.72)/17.52;var u2=new $e({id:"acescc",name:"ACEScc",coords:{r:{range:[Qo,bn],name:"Red"},g:{range:[Qo,bn],name:"Green"},b:{range:[Qo,bn],name:"Blue"}},referred:"scene",base:ud,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-wn)*2:r<bn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(wn)+9.72)/17.52:t<wn?(Math.log2(wn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Tl=Object.freeze({__proto__:null,A98RGB:Km,A98RGB_Linear:ad,ACEScc:u2,ACEScg:ud,HSL:od,HSV:id,HWB:Gm,ICTCP:zi,JzCzHz:Fi,Jzazbz:Xu,LCH:zr,Lab:Te,Lab_D65:Vi,OKLCH:n2,OKLab:io,P3:Uu,P3_Linear:Zu,ProPhoto:r2,ProPhoto_Linear:sd,REC_2020:ju,REC_2020_Linear:Mo,REC_2100_HLG:s2,REC_2100_PQ:a2,XYZ_ABS_D65:Ra,XYZ_D50:Da,XYZ_D65:qe,sRGB:Zr,sRGB_Linear:Wu});class P{constructor(...t){let r;t.length===1&&(r=z(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Y1(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let f=c(...d);return P.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}}P.defineFunctions({get:Oe,getAll:nn,set:vt,setAll:zu,to:Le,equals:J1,inGamut:Pr,toGamut:wt,distance:Gu,toString:oo});Object.assign(P,{util:B1,hooks:gt,WHITES:je,Space:M,spaces:M.registry,parse:Fu,defaults:Je});for(let e of Object.keys(Tl))M.register(Tl[e]);for(let e in M.registry)ji(e,M.registry[e]);gt.add("colorspace-init-end",e=>{var t;ji(e.id,e),(t=e.aliases)==null||t.forEach(r=>{ji(r,e)})});function ji(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}P.extend(ao);P.extend({deltaE:Cr});Object.assign(P,{deltaEMethods:ao});P.extend(Zm);P.extend({contrast:gm});P.extend(wm);P.extend(X1);P.extend(Um);P.extend(Bn);function dd(e){return Wn(e,(t,r)=>r instanceof P?q(r.toString({format:"hex"})):dd(r))}const d2="dodgerblue";function Zi(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ei({background:e,foreground:t}){return{background:e??new P(Zi(t)),foreground:t??new P(Zi(e))}}var so;(function(e){e.Dark="dark",e.Light="light"})(so||(so={}));function h2(e){return e==="black"?"white":"black"}const f2={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},m2={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function Sl({themeColor:e=d2,themeStyle:t=so.Light}={}){const r=new P(e),n=new P(t===so.Dark?"black":"white"),o=Zi(n),i=new P(o),a={nav:{hover:ei({background:r.clone().set({"hsl.l":93})}),active:ei({background:r.clone().set({"hsl.l":90})}),selected:ei({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...m2[h2(o)],foreground:i,...f2[o]}};return dd(a)}const lo=$a()("element-book-change-route"),Cl="vira-",{defineElement:dr,defineElementNoInputs:Sw}=La({assertInputs:e=>{if(!e.tagName.startsWith(Cl))throw new Error(`Tag name should start with '${Cl}' but got '${e.tagName}'`)}});var Ml;(function(e){e.Upper="upper",e.Lower="lower"})(Ml||(Ml={}));function hd(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${hd.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Al(e){const t=hd();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const p2="px";function g2(e){return v2({value:e,suffix:p2})}function v2({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const fd=p`
    pointer-events: none;
    opacity: 0.3;
`,pt=it({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),co=it({"vira-form-input-border-radius":"8px"}),uo=it({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${co["vira-form-input-border-radius"].value} + 4px)`});function md({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=q(g2(n+r+t));return p`
        ${q(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${uo["vira-focus-outline-color"].value};
            border-radius: ${uo["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const w2=p`
    padding: 0;
    margin: 0;
`,he=p`
    ${w2};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function b2(e){return p`
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
    `}const Be=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,te=dr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Wi;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Wi||(Wi={}));dr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Wi.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Be};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${uo["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${fd};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${he};
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
            border-radius: ${co["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${pt["vira-interaction-animation-duration"].value},
                background-color
                    ${pt["vira-interaction-animation-duration"].value},
                border-color ${pt["vira-interaction-animation-duration"].value};
        }

        ${md({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${te} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${te.assign({icon:e.icon})}></${te}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Ui;(function(e){e.Header="header"})(Ui||(Ui={}));dr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${he};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${pt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:K()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${T("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Ui.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Vr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=it({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function w({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const y2=w({name:"CloseX24Icon",svgTemplate:u`
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
    `}),$2=w({name:"Element16Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"Element24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${L["vira-icon-stroke-color"].value}
                stroke-width=${L["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const k2=w({name:"Loader24Icon",svgTemplate:u`
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
    `}),x2=p`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${pt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,pd=w({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${x2}
        </style>
        ${k2.svgTemplate}
    `}),T2=w({name:"Options24Icon",svgTemplate:u`
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
    `}),gd=w({name:"StatusFailure24Icon",svgTemplate:u`
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
    `});w({name:"StatusInProgress24Icon",svgTemplate:u`
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
    `});w({name:"StatusSuccess24Icon",svgTemplate:u`
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
    `});var ir;(function(e){e.Loading="loading",e.Error="error"})(ir||(ir={}));const ft=dr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:K(),imageError:K()},styles:({hostClasses:e})=>p`
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
                  <slot class="status-wrapper" name=${ir.Error}>
                      <${te.assign({icon:gd})} class="error"></${te}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                  <slot class="status-wrapper" name=${ir.Loading}>
                      <${te.assign({icon:pd})}></${te}>
                  </slot>
              `;return u`
            ${Se(!!a,a)}
            <img
                class=${ye({hidden:!!a})}
                ${T("load",async()=>{e._debugLoadDelay&&await Al(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${T("error",async s=>{e._debugLoadDelay&&await Al(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Gi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Gi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function vd({value:e,allowed:t,blocked:r}){const n=t?Gi({input:e,matcher:t}):!0,o=r?Gi({input:e,matcher:r}):!1;return n&&!o}function wd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(vd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function S2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Sr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)vd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=wd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const Dn=dr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:K(),inputBlocked:K()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${uo["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${fd};
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
                ${he};
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
                ${Be};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${he};
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
                border-radius: ${co["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${pt["vira-interaction-animation-duration"].value};
            }

            label {
                ${he};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${co["vira-form-input-border-radius"].value};
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
                ${he};
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
                ${Be};
            }

            .close-x-button {
                ${he};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${pt["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=wd({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${te.assign({icon:e.icon})} class="left-side-icon"></${te}>
              `:"",s=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${Se(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${Vr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${T("input",l=>{S2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Se(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${te.assign({icon:y2})}></${te}>
                        </button>
                    `)}
                ${Se(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});dr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:K()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Oa(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${T("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:De,defineElementNoInputs:Cw}=La(),Ie=De()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
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
                ${T("click",i=>{(!e.router||Oa(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new lo(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function C2(e,t){return e.entry.entryType===fe.Root?!1:!!(e.entry.entryType===fe.Page||ht(t,e.fullUrlBreadcrumbs.slice(0,-1))||ht(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const tt=De()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
            ${Ie.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${te} {
            display: inline-flex;
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!C2(r,e.selectedPath))return;const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${Ie.assign({router:e.router,route:{paths:[be.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ye({"title-row":!0,selected:e.selectedPath?ht(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Se(Xt(r,fe.ElementExample),u`
                                    <${te.assign({icon:$2})}></${te}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ie}>
                </li>
            `});return u`
            <${Ie.assign({route:or,router:e.router})}>
                <slot name=${Ye.NavHeader}>Book</slot>
            </${Ie}>
            <ul>
                ${t}
            </ul>
        `}});async function M2(e){await Mi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ph(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const yt=De()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(yo(e.message,"array")?e.message:[e.message]).map(r=>u`
                <p>${r}</p>
            `)}}),Wr=De()({tagName:"book-page-controls",events:{controlValueChange:K()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
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

        ${Dn} {
            height: 24px;
            max-width: 128px;
        }

        ${te}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===O.Hidden)return"";const a=A2(e.currentValues[n],o,s=>{const l=yo(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${Se(i===0,u`
                                <${te.assign({icon:T2})}
                                    class="options-icon"
                                ></${te}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function A2(e,t,r){return Vt(t,O.Hidden)?"":Vt(t,O.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${T("input",n=>{const o=Sr(n,HTMLInputElement);r(o.checked)})}
            />
        `:Vt(t,O.Color)?u`
            <input
                type="color"
                .value=${e}
                ${T("input",n=>{const o=Sr(n,HTMLInputElement);r(o.value)})}
            />
        `:Vt(t,O.Text)?u`
            <${Dn.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${T(Dn.events.valueChange,n=>{r(n.detail)})}
            ></${Dn}>
        `:Vt(t,O.Number)?u`
            <input
                type="number"
                .value=${e}
                ${T("input",n=>{const o=Sr(n,HTMLInputElement);r(o.value)})}
            />
        `:Vt(t,O.Dropdown)?u`
            <select
                .value=${e}
                ${T("input",n=>{const o=Sr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const El=De()({tagName:"book-breadcrumbs",styles:p`
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
                <${Ie.assign({route:{hash:void 0,search:void 0,paths:[be.Book,...a]},router:e.router})}>
                    ${r}
                </${Ie}>
                ${s}
            `}):u`
                &nbsp;
            `}}),ti=De()({tagName:"book-breadcrumbs-bar",styles:p`
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
            ${Se(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${El.assign({currentRoute:e.currentRoute,router:e.router})}></${El}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${T("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Th(200),n.value===o&&(n.value?t(new lo({paths:[be.Search,encodeURIComponent(n.value)]})):t(new lo(or)))})}
            />
        `}}),Il=De()({tagName:"book-entry-description",styles:p`
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
            `)}}),Ll=De()({tagName:"book-page-wrapper",styles:p`
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

        ${Ie} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[be.Book,...e.pageNode.fullUrlBreadcrumbs],n=Fc(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ie.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ie}>
                    ${n?u`
                              <${yt.assign({message:n.message})}></${yt}>
                          `:u`
                              <${Il.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Il}>
                              <${Wr.assign({config:e.pageNode.entry.controls,currentValues:Na(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Wr}>
                          `}
                </div>
            </div>
        `}}),yn=De()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[be.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${Ie.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ie}>
        `}}),Pl=Symbol("unset-internal-state"),Nl=De()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Pl},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Fc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Pl&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${Se(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${yt.assign({message:`${t.elementExampleNode.entry.title} failed: ${bo(n)}`})}></${yt}>
            `}},options:{allowPolymorphicState:!0}}),ql=De()({tagName:"book-element-example-wrapper",styles:p`
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

        ${yn} {
            color: ${H["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${yn} {
            color: ${H["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${yn.assign(kh(e,["currentPageControls"]))}></${yn}>
                <${Nl.assign(e)}></${Nl}>
            </div>
        `}});function bd(e,t,r,n){const o=Bi(r,n),i=[];if(o){const a=bd(e,t,o,n);a&&i.push(a)}if(Xt(r,fe.Page)&&!e.includes(r)){const a=Na(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:Wn(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function E2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=fs(e,1)?bd(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&fs(e,1)?u`
                  <${Wr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Wr}>
              `:"",l=Wh(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Xt(c,fe.Page))return u`
                    <${Ll.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Ll}>
                `;if(Xt(c,fe.ElementExample)){const f=Na(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${ql.assign({elementExampleNode:c,currentPageControls:f,router:r})}
                        class="inline-entry"
                    ></${ql}>
                `}else return Xt(c,fe.Root)?"":u`
                    <${yt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${yt}>
                `});return[s,l].flat()}const jt=De()({tagName:"book-entry-display",styles:p`
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

        ${ti} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${pt["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:K()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Di(e.currentRoute.paths),a=E2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${ti.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${ti}>

            ${Se(e.showLoading,u`
                    <div
                        ${Rs(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${te.assign({icon:pd})}></${te}>
                    </div>
                    ${Se(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${Ye.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${Rs(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${Ye.Footer}></slot>
                `)}
        `}});function I2(e,t,r){const n=Ol(e,t);if(n.length)return n;r(or);const o=Ol(e,or.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ol(e,t){return e.filter(r=>Ih({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const ri=Tu()({tagName:"element-book-app",events:{pathUpdate:K()},stateInitStatic:{currentRoute:or,router:void 0,loading:!0,colors:{config:void 0,theme:Sl(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
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

        ${jt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${tt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Bl(e,Di(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,f,m,g,v,y,b;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const C=a(x);return!ht(e.currentRoute,C)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(fa).join(" - "))}function c(x){if(!s(x))return;const C=a(x);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ht(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!ht(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const j=P1(t.internalRouterConfig.basePath);n({router:j}),j.addRouteListener(!0,oe=>{n({currentRoute:oe})})}else!((f=t.internalRouterConfig)!=null&&f.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!ht(x,(m=e.colors)==null?void 0:m.config)){const j=Sl(x);n({colors:{config:x,theme:j}}),O1(r,j)}const C=t._debug??!1,D=i1({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Au(D.tree,{children:(v=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:v.children,controls:t.globalValues})}}));const Z=Di(e.currentRoute.paths),de=(Z?h1({flattenedNodes:D.flattenedNodes,searchQuery:Z}):void 0)??I2(D.flattenedNodes,e.currentRoute.paths,c);l((y=de[0])==null?void 0:y.entry.title);const ue=(b=e.treeBasedControls)==null?void 0:b.controls;return ue?(t._debug&&console.info({currentControls:ue}),u`
                <div
                    class="root"
                    ${T(lo,async j=>{const oe=j.detail;if(!s(oe))return;if(n({loading:!0}),c(oe),!(r.shadowRoot.querySelector(tt.tagName)instanceof tt))throw new Error(`Failed to find child '${tt.tagName}'`);Bl(r,Z,e.currentRoute)})}
                    ${T(Wr.events.controlValueChange,j=>{if(!e.treeBasedControls)return;const oe=s1(ue,j.detail.fullUrlBreadcrumbs,j.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:oe}})})}
                >
                    <${tt.assign({flattenedNodes:D.flattenedNodes,router:e.router,selectedPath:Z?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Ye.NavHeader}
                            slot=${Ye.NavHeader}
                        ></slot>
                    </${tt}>
                    <${jt.assign({controls:ue,currentNodes:de,currentRoute:e.currentRoute,debug:C,originalTree:D.tree,router:e.router,showLoading:e.loading})}
                        ${T(jt.events.loadingRender,async j=>{await Mi();const oe=r.shadowRoot.querySelector(jt.tagName);oe?oe.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${jt.tagName}' for scrolling.`),await Mi(),n({loading:!j.detail})})}
                    >
                        <slot
                            name=${Ye.Footer}
                            slot=${Ye.Footer}
                        ></slot>
                    </${jt}>
                </div>
            `):u`
                    <${yt.assign({message:"Failed to generate page controls."})}></${yt}>
                `}catch(x){return console.error(x),u`
                <p class="error">${bo(x)}</p>
            `}}});async function Bl(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(tt.tagName);if(!(n instanceof tt))throw new Error(`Failed to find child '${tt.tagName}'`);await M2(n)}function L2(e,t){return e.map(t)}function an(e){return!!e}function yd(e,t){return e.match(t)??[]}function P2(e){return e.replace(/,/g,"")}function N2(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var ar;(function(e){e.Upper="upper",e.Lower="lower"})(ar||(ar={}));function q2(e){return e.toLowerCase()!==e.toUpperCase()}function Dl(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!q2(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===ar.Upper&&o!==o.toUpperCase())return!1;if(t===ar.Lower&&o!==o.toLowerCase())return!1}return!0}function Yi(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Dl(a,ar.Lower,{blockNoCaseCharacters:!0})||Dl(s,ar.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Ur(e,t){return e.split(t)}const O2=String(NaN);function $d(e){if(typeof e=="string"&&isNaN(Number(e)))return O2;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=yd(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(d=>d.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function B2(e){return typeof e=="number"?e:Number(typeof e=="string"?P2(e):e)}function D2(e){return String(e).includes("e")}function R2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Nr({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}function _2(e){return!!e&&typeof e=="object"}function Ke(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function H2(e){return Array.isArray(e)?"array":typeof e}function V2(e,t){return H2(e)===t}function F2(e){return Ke(e).filter(t=>isNaN(Number(t)))}function z2(e,t){return Ke(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ji(e,t){return z2(e,r=>!t.includes(r))}function sr(e,t){let r=!1;const n=Ke(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ke(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const kd=globalThis.crypto;function j2({min:e,max:t}){const{min:r,max:n}=R2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do kd.getRandomValues(s),l=s.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%o}function Z2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return kd.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const W2="%",U2="px";function Gt(e){return Ha({value:e,suffix:U2})}function ni(e){return Ha({value:e,suffix:W2})}function Ha({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const oi="://";function G2(...e){const t=e.join("/"),[r,n=""]=t.includes(oi)?t.split(oi):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,d)=>{if(i)return s;const f=d[c+1];let m=l;const g=!l.includes("?")&&(f==null?void 0:f.startsWith("?"));if(f!=null&&f.startsWith("?")||g){i=!0;let v=!1;const y=d.slice(g?c+2:c+1).reduce((b,x)=>(x.includes("#")&&(v=!0),v?b.concat(x):[b,x].join("&")),"");m=[l,f,y].join("")}return s.concat(m)},[]);return[r,r?oi:"",a.join("/")].join("")}const Y2=["k","M","B","T","P","E","Z","Y"];function Va({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function J2(e,t,r){const[n,o]=Ur(e,"."),i=$d(n),a=yd(i,/,/g).length,s=t[a-1],[l,c]=Ur(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Va({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const Rl=3;function K2({input:e,maxLength:t}){const r=String(e),[n,o]=Ur(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=Ur(n,"."),d=i.length+Rl;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Va({afterDot:c,beforeDot:l,maxLength:t-i.length+Rl}),s].join("")}function X2(e,t){const[r,n]=Ur($d(e),".");if(r.length<=t)return Va({beforeDot:r,afterDot:n,maxLength:t})}function Q2(e,{customSuffixes:t=Y2,maxLength:r=6}={}){const n=B2(e);if(isNaN(n)||n===1/0)return String(n);if(D2(n))return K2({input:n,maxLength:r});const o=String(n),i=X2(o,r);return i??J2(o,t,r)}const h=it({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),V=sr(h,(e,t)=>r=>q(`var(${t.name}, ${r})`)),ep=w({name:"Copy16Icon",svgTemplate:u`
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
    `}),tp=w({name:"ExternalLink16Icon",svgTemplate:u`
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
    `}),rp=w({name:"ArrowBarUp24Icon",svgTemplate:u`
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
    `}),np=w({name:"ArrowForwardUp24Icon",svgTemplate:u`
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
    `}),Fa=w({name:"ArrowLeft24Icon",svgTemplate:u`
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
    `}),op=w({name:"ArrowLoopLeft24Icon",svgTemplate:u`
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
    `}),ip=w({name:"ArrowLoopRight24Icon",svgTemplate:u`
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
    `}),za=w({name:"ArrowRight24Icon",svgTemplate:u`
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
    `}),xd=w({name:"ArrowsSort24Icon",svgTemplate:u`
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
    `}),ap=w({name:"ArrowsSortAscending24Icon",svgTemplate:u`
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
    `}),sp=w({name:"ArrowsSortDescending24Icon",svgTemplate:u`
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
    `}),lp=w({name:"Bucket24Icon",svgTemplate:u`
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
    `}),cp=w({name:"BuildingStore24Icon",svgTemplate:u`
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
    `}),up=w({name:"CalendarEvent24Icon",svgTemplate:u`
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
    `}),dp=w({name:"Cash24Icon",svgTemplate:u`
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
    `}),hp=w({name:"Chain24Icon",svgTemplate:u`
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
    `}),Td=w({name:"CheckMark24Icon",svgTemplate:u`
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
    `}),Sd=w({name:"ChevronDown24Icon",svgTemplate:u`
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
    `}),fp=w({name:"ChevronUp24Icon",svgTemplate:u`
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
    `}),mp=w({name:"Circle24Icon",svgTemplate:u`
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
    `}),Cd=w({name:"CircleDot24Icon",svgTemplate:u`
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
    `}),pp=w({name:"CirclePlus24Icon",svgTemplate:u`
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
    `}),gp=w({name:"CircleWavyCheck24Icon",svgTemplate:u`
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
    `}),vp=w({name:"Clock24Icon",svgTemplate:u`
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
    `}),Md=w({name:"Code24Icon",svgTemplate:u`
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
    `}),Ad=w({name:"Copy24Icon",svgTemplate:u`
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
    `}),wp=w({name:"CreateFile24Icon",svgTemplate:u`
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
    `}),bp=w({name:"DotsVertical24Icon",svgTemplate:u`
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
    `}),yp=w({name:"Download24Icon",svgTemplate:u`
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
    `}),$p=w({name:"Edit24Icon",svgTemplate:u`
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
    `}),Ed=w({name:"ExternalLink24Icon",svgTemplate:u`
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
    `}),kp=w({name:"Filter24Icon",svgTemplate:u`
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
    `}),xp=w({name:"Geometry24Icon",svgTemplate:u`
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
    `}),Tp=w({name:"GridDots24Icon",svgTemplate:u`
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
    `}),Sp=w({name:"Heart24Icon",svgTemplate:u`
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
    `}),Cp=w({name:"Infinity24Icon",svgTemplate:u`
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
    `}),Mp=w({name:"Info24Icon",svgTemplate:u`
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
    `}),Ap=w({name:"LayersLinked24Icon",svgTemplate:u`
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
    `}),Ep=w({name:"LayoutGrid24Icon",svgTemplate:u`
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
    `}),Ip=w({name:"Lifebuoy24Icon",svgTemplate:u`
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
    `}),Lp=w({name:"List24Icon",svgTemplate:u`
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
    `}),Pp=w({name:"ListDetails24Icon",svgTemplate:u`
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
    `}),Np=w({name:"Loader24Icon",svgTemplate:u`
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
    `}),ja=w({name:"LoaderAnimated24Icon",svgTemplate:u`
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
    `}),qp=w({name:"Lock24Icon",svgTemplate:u`
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
    `}),Op=w({name:"LockOpen24Icon",svgTemplate:u`
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
    `}),Bp=w({name:"Menu24Icon",svgTemplate:u`
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
    `}),Dp=w({name:"Paper24Icon",svgTemplate:u`
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
    `}),Rp=w({name:"People24Icon",svgTemplate:u`
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
    `}),_p=w({name:"Person24Icon",svgTemplate:u`
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
    `}),Hp=w({name:"Photo24Icon",svgTemplate:u`
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
    `}),Vp=w({name:"Refresh24Icon",svgTemplate:u`
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
    `}),Id=w({name:"Rocket24Icon",svgTemplate:u`
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
    `}),Ld=w({name:"Search24Icon",svgTemplate:u`
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
    `}),Fp=w({name:"Send24Icon",svgTemplate:u`
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
    `}),zp=w({name:"ShoppingCart24Icon",svgTemplate:u`
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
    `}),jp=w({name:"Social24Icon",svgTemplate:u`
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
    `}),Zp=w({name:"Square24Icon",svgTemplate:u`
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
    `}),_l={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`},J={interaction:p`var(${_l.interactionDuration}, 84ms)`,pretty:p`var(${_l.prettyDuration}, 300ms)`};function ii(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Wp=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},r={...e,foregroundColor:p`#ACADAD`},n={...e,foregroundColor:p`#D6D6D6`},o={...t},i={...t,foregroundColor:p`#00A876`},a={...t,foregroundColor:p`#1D6852`},s={...n},l={...e,foregroundColor:p`#EAFBF7`},c={...e,backgroundColor:p`#D2EEFA`},d=ii(o),f=ii(i),m=ii(a),g=m,v={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},y={...v,foregroundColor:p`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:d,accentPrimaryHover:f,accentPrimaryActive:m,accentSecondary:v,accentTertiary:y}})(),Pd=Wp;function Hl(e,t){return q(`--toniq-${Yi(e)}-${Yi(t)}`)}const Za=sr(Pd,e=>({backgroundColor:Hl(e,"backgroundColor"),foregroundColor:Hl(e,"foregroundColor")}));function ze(e,t){const r=Pd[e][t],n=Za[e][t];return p`var(${n}, ${r})`}const $=sr(Za,e=>({foregroundColor:ze(e,"foregroundColor"),backgroundColor:ze(e,"backgroundColor")}));function F(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Rt=p`
    pointer-events: none;
    opacity: 0.3;
    ${Be};
`;function kt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=q(Gt(n+r+t));return p`
        ${q(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${$.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const Nd={toniqFont:{"font-family":p`'Rubik', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`48px`,"font-size":p`32px`},h3Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}},Up=sr(Nd,(e,t)=>{const r=q(Yi(e.replace(/Font$/,"")));return sr(t,o=>{const i=q(o);return p`--toniq-font-${r}-${i}`})});function Ue(e){const t=Up[e],r=Nd[e],n=Ke(t).map(o=>{const i=r[o],a=t[o];return p`
            ${q(o)}: var(${a}, ${i});
        `});return q(n.join(`
`))}const Y=(()=>{const e=p`
        font-style: normal;
        color: ${$.pagePrimary.foregroundColor};
        ${Ue("toniqFont")};
    `,t=p`
        ${e};
        ${Ue("normalWeightFont")};
    `,r=p`
        ${e};
        ${Ue("boldFont")};
    `,n=p`
        ${e};
        ${Ue("extraBoldFont")};
    `,o=p`
        ${e};
        ${Ue("paragraphFont")};
        ${t};
    `,i=p`
        ${e};
        ${o};
        ${r};
    `,a=p`
        ${e};
        ${Ue("labelFont")};
        ${t};
    `,s=p`
        ${a};
        ${r};
    `,l=p`
        ${Ue("h1Font")};
        ${n};
    `,c=p`
        ${Ue("h2Font")};
        ${r};
    `,d=p`
        ${Ue("h3Font")};
        ${r};
    `,f=p`
        ${Ue("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:f}})(),ho={popupShadow:p`
        filter: drop-shadow(0px 12px 8px ${$.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:p`
        filter: drop-shadow(0px -12px 8px ${$.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:p`
        filter: drop-shadow(0px 12px 8px ${$.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Gp(e,t=!0){const r=q(e),n=e===":host"?p`
                  :host(:hover);
              `:p`
                  ${r}:hover
              `,o=t?p`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${$.pageInteraction.foregroundColor};
              }
          `:p``;return p`
        ${r} {
            border-radius: 16px;
            background-color: ${$.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${ho.popupShadow};
        }

        ${o}
    `}const Yp=w({name:"SquareCheck24Icon",svgTemplate:u`
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
    `}),Rn=w({name:"Trash24Icon",svgTemplate:u`
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
    `}),Jp=w({name:"Upload24Icon",svgTemplate:u`
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
    `}),Kp=w({name:"Wallet24Icon",svgTemplate:u`
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
    `}),Xp=w({name:"WorldUpload24Icon",svgTemplate:u`
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
    `}),Qp=w({name:"X24Icon",svgTemplate:u`
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
    `}),eg=w({name:"Folder48Icon",svgTemplate:u`
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
    `}),qd=w({name:"FolderOff48Icon",svgTemplate:u`
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
    `}),tg=w({name:"Kyc48Icon",svgTemplate:u`
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
    `}),Od=w({name:"Api64Icon",svgTemplate:u`
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
    `}),rg=w({name:"CircleDashes64Icon",svgTemplate:u`
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
    `}),ng=w({name:"Rocket64Icon",svgTemplate:u`
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
    `}),og=w({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),ig=w({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),Bd="0 0 58 58",Dd=Rh`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,ag=w({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${Bd}"
        >
            ${Dd}
        </svg>
    `}),sg=w({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="24"
            height="24"
            viewBox="${Bd}"
        >
            ${Dd}
        </svg>
    `}),Rd=w({name:"BrandDiscord24Icon",svgTemplate:u`
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
    `}),lg=w({name:"BrandDistrikt24Icon",svgTemplate:u`
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
    `}),cg=w({name:"BrandDscvr24Icon",svgTemplate:u`
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
    `}),ug=w({name:"BrandFacebookLogo24Icon",svgTemplate:u`
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
    `}),dg=w({name:"BrandGoogleLogo24Icon",svgTemplate:u`
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
    `}),hg=w({name:"BrandIcScan24Icon",svgTemplate:u`
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
    `}),_d=w({name:"BrandInstagram24Icon",svgTemplate:u`
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
    `}),fg=w({name:"BrandInstagramFlat24Icon",svgTemplate:u`
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
    `}),mg=w({name:"BrandMedium24Icon",svgTemplate:u`
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
    `}),pg=w({name:"BrandNftgeek24Icon",svgTemplate:u`
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
    `}),Hd=w({name:"BrandTelegram24Icon",svgTemplate:u`
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
    `}),Vd=w({name:"BrandTiktok24Icon",svgTemplate:u`
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
    `}),gg=w({name:"BrandTiktokFlat24Icon",svgTemplate:u`
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
    `}),Fd=w({name:"BrandTwitch24Icon",svgTemplate:u`
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
    `}),zd=w({name:"BrandTwitter24Icon",svgTemplate:u`
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
    `}),vg=w({name:"BioniqRobot100Icon",svgTemplate:u`
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
    `}),wg=w({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${V["toniq-icon-fill-color"](String($.brandPrimary.foregroundColor))}
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
    `}),ut={"core-16":[ep,tp,Qt],"core-24":[rp,np,Fa,op,ip,za,xd,ap,sp,lp,cp,up,dp,hp,Td,Sd,fp,mp,Cd,pp,gp,vp,Md,Ad,wp,bp,yp,$p,Ed,kp,xp,Tp,Sp,Cp,Mp,Ap,Ep,Ip,Lp,Pp,Np,ja,qp,Op,Bp,Dp,Rp,_p,Hp,Vp,Id,Ld,Fp,zp,jp,Zp,Yp,Rn,Jp,Kp,Xp,Qp],"core-48":[eg,qd,tg],"core-64":[Od,rg,ng],cryptocurrencies:[og,ig,ag,sg],"third-party-brands":[Rd,lg,cg,ug,dg,hg,_d,fg,mg,pg,Hd,Vd,gg,Fd,zd],toniq:[vg,wg]},bg=tn({Discord:St(void 0,""),Instagram:St(void 0,""),Telegram:St(void 0,""),TikTok:St(void 0,""),Twitch:St(void 0,""),Twitter:St(void 0,""),website:St(void 0,"")}),yg=bg.defaultValue,jd={Discord:Rd,Instagram:_d,Telegram:Hd,TikTok:Vd,Twitch:Fd,Twitter:zd,website:Md},Vl="toniq-",{defineElement:re,defineElementNoInputs:$g}=La({assertInputs:e=>{if(!e.tagName.startsWith(Vl))throw new Error(`Tag name should start with '${Vl}' but got '${e.tagName}'`)}}),Nt=re()({tagName:"toniq-bold-space",styles:p`
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
            ${Y.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `}}),S=re()({tagName:"toniq-icon",styles:p`
        :host {
            display: inline-flex;
            ${L["vira-icon-fill-color"].name}: ${h["toniq-icon-fill-color"].value}
            ${L["vira-icon-stroke-color"].name}: ${h["toniq-icon-stroke-color"].value}
            ${L["vira-icon-stroke-width"].name}: ${h["toniq-icon-stroke-width"].value}
        }

        ${te} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return u`
            <${te.assign(e)}></${te}>
        `}}),Ki=p`8px`;var Gr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(Gr||{});const ie=re()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${Y.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Be};
        }

        :host(:hover) button {
            ${F($.accentPrimaryHover)};
        }

        :host(:active) button {
            ${F($.accentPrimaryActive)};
        }

        button {
            ${he};
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
            border-radius: ${Ki};
            ${F($.accentPrimary)};
            padding: 10px;
            transition:
                color ${J.interaction},
                background-color ${J.interaction},
                border-color ${J.interaction};
        }

        ${kt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${F($.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${F($.pagePrimary)};
            border-color: ${$.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Rt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${$.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${$.accentPrimaryActive.backgroundColor};
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
        `}});function kg(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Wa(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(f=>i==="+"?f>l:f<l).sort((f,m)=>i==="+"?f-m:m-f);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function xg(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let v=parseFloat(m);return/%/.test(m)&&(v/=100,v*=g),v}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),f=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:f}}}function Tg(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Zd(e){let t=[];for(const r of e.children)t=t.concat(r,Zd(r));return t}function Sg(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Zd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const f=d.getBoundingClientRect();if(t&&!Tg(r,f,a))continue;const m=window.getComputedStyle(d);let[g,v]=m.getPropertyValue("scroll-snap-align").split(" ");typeof v>"u"&&(v=g);const y=i==="x"?v:g,b=f[s]-r[s]+e[c];switch(y){case"none":break;case"start":n[i].start.push(b);break;case"center":n[i].center.push(b+f[l]/2);break;case"end":n[i].end.push(b+f[l]);break}}}return n}function Wa(e){const t=e.getBoundingClientRect(),r=xg(e),n=Sg(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Fl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Fl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Fl(e){return Array.from(new Set(e))}const _n="templates-container",Cg=4e3;var Xi=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(Xi||{});const ke=re()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${b2(`.${_n}`)}

        .${q(_n)} {
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
            width: 100px;
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

        .arrow ${S} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${F($.pagePrimary)};
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{ai({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Cg)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=zl(t.scrollSnapPositions,0),i=zl(t.scrollSnapPositions,-1);return u`
            <div>
                <div
                    class="arrow left ${ye({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${S.assign({icon:Fa})}
                        ${T("click",()=>{ai({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${S}>
                </div>
                <div
                    ${Vr(()=>{r({scrollSnapPositions:Wa(Qi(n)).x})})}
                    class=${_n}
                    ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>u`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${ye({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${S.assign({icon:za})}
                        ${T("click",()=>{ai({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${S}>
                </div>
            </div>
        `}});function zl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function Qi(e){const t=e.shadowRoot.querySelector(`.${_n}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function ai({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=Qi(e),i=o.clientWidth,a=Wa(Qi(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const f=Mg(e,t),m=jl(o.scrollLeft,a,!1),g=t==="right"?1:-1,v=(o.clientWidth-f*3)*g,y=jl((m||0)+v,a,!0);t==="right"&&y>m?o.scrollTo({behavior:"smooth",left:y}):t==="left"&&y<m?o.scrollTo({behavior:"smooth",left:y}):kg(o,t)}}function Mg(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function jl(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const at=re()({tagName:"toniq-checkbox",events:{checkedChange:K()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(ze("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(ze("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(ze("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(ze("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(ze("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${Y.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${J.interaction},
                background-color ${J.interaction},
                opacity ${J.interaction};
            border-radius: 8px;
        }

        button {
            ${he};
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
            ${Be};
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

        ${kt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Rt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${S.assign({icon:Td})}
                    class="check-mark ${ye({hidden:!e.checked})}"
                ></${S}>
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
                ${T("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var ea=(e=>(e.Default="default",e.Secondary="secondary",e))(ea||{});const si=re()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${Y.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${F($.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${F($.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${S.assign({icon:e.icon})}></${S}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}});function Wd(e){return!!e}var Zl;(function(e){e.Upper="upper",e.Lower="lower"})(Zl||(Zl={}));function Wl(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}const Ag=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ud(e,t){return e?Ag.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Eg(e){return e?e instanceof Error?e.message:Ud(e,"message")?String(e.message):String(e):""}function Ig(e){return e instanceof Error?e:new Error(Eg(e))}function Ul(e){return!!e&&typeof e=="object"}function ta(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Lg(e){return Object.fromEntries(e)}function Pg(e){return Array.isArray(e)?"array":typeof e}function Gl(e,t){return Pg(e)===t}function Yl({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Jl="Failed to compare objects using JSON.stringify";function Kl(e,t,r){return Yl({source:e,errorHandler(n){if(r)return"";throw n}})===Yl({source:t,errorHandler(n){if(r)return"";throw n}})}function Gd(e,t,r={}){try{return e===t?!0:Ul(e)&&Ul(t)?Kl(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Gd(e[o],t[o])):!1:Kl(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ig(n);throw o.message.startsWith(Jl)||(o.message=`${Jl}: ${o.message}`),o}}function Yd(e,t){return ta(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ng(e,t){return Yd(e,r=>!t.includes(r))}function qg(e,t){return Yd(e,r=>t.includes(r))}function Og(e,t){let r=!1;const n=ta(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ta(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}class _t extends Error{}class Bg extends _t{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Dg extends _t{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Rg extends _t{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Kt extends _t{}class Jd extends _t{constructor(t){super(`Invalid unit ${t}`)}}class we extends _t{}class st extends _t{constructor(){super("Zone is an abstract class")}}const k="numeric",We="short",Ce="long",fo={year:k,month:k,day:k},Kd={year:k,month:We,day:k},_g={year:k,month:We,day:k,weekday:We},Xd={year:k,month:Ce,day:k},Qd={year:k,month:Ce,day:k,weekday:Ce},e0={hour:k,minute:k},t0={hour:k,minute:k,second:k},r0={hour:k,minute:k,second:k,timeZoneName:We},n0={hour:k,minute:k,second:k,timeZoneName:Ce},o0={hour:k,minute:k,hourCycle:"h23"},i0={hour:k,minute:k,second:k,hourCycle:"h23"},a0={hour:k,minute:k,second:k,hourCycle:"h23",timeZoneName:We},s0={hour:k,minute:k,second:k,hourCycle:"h23",timeZoneName:Ce},l0={year:k,month:k,day:k,hour:k,minute:k},c0={year:k,month:k,day:k,hour:k,minute:k,second:k},u0={year:k,month:We,day:k,hour:k,minute:k},d0={year:k,month:We,day:k,hour:k,minute:k,second:k},Hg={year:k,month:We,day:k,weekday:We,hour:k,minute:k},h0={year:k,month:Ce,day:k,hour:k,minute:k,timeZoneName:We},f0={year:k,month:Ce,day:k,hour:k,minute:k,second:k,timeZoneName:We},m0={year:k,month:Ce,day:k,weekday:Ce,hour:k,minute:k,timeZoneName:Ce},p0={year:k,month:Ce,day:k,weekday:Ce,hour:k,minute:k,second:k,timeZoneName:Ce};class sn{get type(){throw new st}get name(){throw new st}get ianaName(){return this.name}get isUniversal(){throw new st}offsetName(t,r){throw new st}formatOffset(t,r){throw new st}offset(t){throw new st}equals(t){throw new st}get isValid(){throw new st}}let li=null;class Eo extends sn{static get instance(){return li===null&&(li=new Eo),li}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return T0(t,r,n)}formatOffset(t,r){return qr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Hn={};function Vg(e){return Hn[e]||(Hn[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Hn[e]}const Fg={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function zg(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,d]=n;return[a,o,i,s,l,c,d]}function jg(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=Fg[i];i==="era"?n[s]=a:I(s)||(n[s]=parseInt(a,10))}return n}let $n={};class nt extends sn{static create(t){return $n[t]||($n[t]=new nt(t)),$n[t]}static resetCache(){$n={},Hn={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=nt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return T0(t,r,n,this.name)}formatOffset(t,r){return qr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=Vg(this.name);let[o,i,a,s,l,c,d]=n.formatToParts?jg(n,r):zg(n,r);s==="BC"&&(o=-Math.abs(o)+1);const m=Lo({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let g=+r;const v=g%1e3;return g-=v>=0?v:1e3+v,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Xl={};function Zg(e,t={}){const r=JSON.stringify([e,t]);let n=Xl[r];return n||(n=new Intl.ListFormat(e,t),Xl[r]=n),n}let ra={};function na(e,t={}){const r=JSON.stringify([e,t]);let n=ra[r];return n||(n=new Intl.DateTimeFormat(e,t),ra[r]=n),n}let oa={};function Wg(e,t={}){const r=JSON.stringify([e,t]);let n=oa[r];return n||(n=new Intl.NumberFormat(e,t),oa[r]=n),n}let ia={};function Ug(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=ia[o];return i||(i=new Intl.RelativeTimeFormat(e,t),ia[o]=i),i}let Mr=null;function Gg(){return Mr||(Mr=new Intl.DateTimeFormat().resolvedOptions().locale,Mr)}let Ql={};function Yg(e){let t=Ql[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Ql[e]=t}return t}function Jg(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=na(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=na(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function Kg(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Xg(e){const t=[];for(let r=1;r<=12;r++){const n=A.utc(2009,r,1);t.push(e(n))}return t}function Qg(e){const t=[];for(let r=1;r<=7;r++){const n=A.utc(2016,11,13+r);t.push(e(n))}return t}function kn(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function ev(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class tv{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=Wg(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Ja(t,3);return se(r,this.padTo)}}}class rv{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&nt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=na(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class nv{constructor(t,r,n){this.opts={style:"long",...n},!r&&k0()&&(this.rtf=Ug(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):xv(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const ov={firstDay:1,minimalDays:4,weekend:[6,7]};class W{static fromOpts(t){return W.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const a=t||X.defaultLocale,s=a||(i?"en-US":Gg()),l=r||X.defaultNumberingSystem,c=n||X.defaultOutputCalendar,d=aa(o)||X.defaultWeekSettings;return new W(s,l,c,d,a)}static resetCache(){Mr=null,ra={},oa={},ia={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return W.create(t,r,n,o)}constructor(t,r,n,o,i){const[a,s,l]=Jg(t);this.locale=a,this.numberingSystem=r||s||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=Kg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=ev(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:W.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,aa(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return kn(this,t,M0,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Xg(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return kn(this,t,I0,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Qg(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return kn(this,void 0,()=>L0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[A.utc(2016,11,13,9),A.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return kn(this,t,P0,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[A.utc(-40,1,1),A.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new tv(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new rv(t,this.intl,r)}relFormatter(t={}){return new nv(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Zg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:x0()?Yg(this.locale):ov}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let ci=null;class ge extends sn{static get utcInstance(){return ci===null&&(ci=new ge(0)),ci}static instance(t){return t===0?ge.utcInstance:new ge(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new ge(Po(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${qr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${qr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return qr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class iv extends sn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function dt(e,t){if(I(e)||e===null)return t;if(e instanceof sn)return e;if(lv(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Eo.instance:r==="utc"||r==="gmt"?ge.utcInstance:ge.parseSpecifier(r)||nt.create(e)}else return qt(e)?ge.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new iv(e)}let ec=()=>Date.now(),tc="system",rc=null,nc=null,oc=null,ic=60,ac,sc=null;class X{static get now(){return ec}static set now(t){ec=t}static set defaultZone(t){tc=t}static get defaultZone(){return dt(tc,Eo.instance)}static get defaultLocale(){return rc}static set defaultLocale(t){rc=t}static get defaultNumberingSystem(){return nc}static set defaultNumberingSystem(t){nc=t}static get defaultOutputCalendar(){return oc}static set defaultOutputCalendar(t){oc=t}static get defaultWeekSettings(){return sc}static set defaultWeekSettings(t){sc=aa(t)}static get twoDigitCutoffYear(){return ic}static set twoDigitCutoffYear(t){ic=t%100}static get throwOnInvalid(){return ac}static set throwOnInvalid(t){ac=t}static resetCaches(){W.resetCache(),nt.resetCache()}}class Ze{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const g0=[0,31,59,90,120,151,181,212,243,273,304,334],v0=[0,31,60,91,121,152,182,213,244,274,305,335];function Pe(e,t){return new Ze("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Ua(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function w0(e,t,r){return r+(ln(e)?v0:g0)[t-1]}function b0(e,t){const r=ln(e)?v0:g0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function Ga(e,t){return(e-t+7)%7+1}function mo(e,t=4,r=1){const{year:n,month:o,day:i}=e,a=w0(n,o,i),s=Ga(Ua(n,o,i),r);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=n-1,l=Yr(c,t,r)):l>Yr(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:s,...No(e)}}function lc(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,a=Ga(Ua(n,1,t),r),s=er(n);let l=o*7+i-a-7+t,c;l<1?(c=n-1,l+=er(c)):l>s?(c=n+1,l-=er(n)):c=n;const{month:d,day:f}=b0(c,l);return{year:c,month:d,day:f,...No(e)}}function ui(e){const{year:t,month:r,day:n}=e,o=w0(t,r,n);return{year:t,ordinal:o,...No(e)}}function cc(e){const{year:t,ordinal:r}=e,{month:n,day:o}=b0(t,r);return{year:t,month:n,day:o,...No(e)}}function uc(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new Kt("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function av(e,t=4,r=1){const n=Io(e.weekYear),o=Ne(e.weekNumber,1,Yr(e.weekYear,t,r)),i=Ne(e.weekday,1,7);return n?o?i?!1:Pe("weekday",e.weekday):Pe("week",e.weekNumber):Pe("weekYear",e.weekYear)}function sv(e){const t=Io(e.year),r=Ne(e.ordinal,1,er(e.year));return t?r?!1:Pe("ordinal",e.ordinal):Pe("year",e.year)}function y0(e){const t=Io(e.year),r=Ne(e.month,1,12),n=Ne(e.day,1,po(e.year,e.month));return t?r?n?!1:Pe("day",e.day):Pe("month",e.month):Pe("year",e.year)}function $0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Ne(t,0,23)||t===24&&r===0&&n===0&&o===0,a=Ne(r,0,59),s=Ne(n,0,59),l=Ne(o,0,999);return i?a?s?l?!1:Pe("millisecond",o):Pe("second",n):Pe("minute",r):Pe("hour",t)}function I(e){return typeof e>"u"}function qt(e){return typeof e=="number"}function Io(e){return typeof e=="number"&&e%1===0}function lv(e){return typeof e=="string"}function cv(e){return Object.prototype.toString.call(e)==="[object Date]"}function k0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function x0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function uv(e){return Array.isArray(e)?e:[e]}function dc(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function dv(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function lr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function aa(e){if(e==null)return null;if(typeof e!="object")throw new we("Week settings must be an object");if(!Ne(e.firstDay,1,7)||!Ne(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Ne(t,1,7)))throw new we("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Ne(e,t,r){return Io(e)&&e>=t&&e<=r}function hv(e,t){return e-t*Math.floor(e/t)}function se(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function ct(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function Ct(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function Ya(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ja(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function ln(e){return e%4===0&&(e%100!==0||e%400===0)}function er(e){return ln(e)?366:365}function po(e,t){const r=hv(t-1,12)+1,n=e+(t-r)/12;return r===2?ln(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Lo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function hc(e,t,r){return-Ga(Ua(e,1,t),r)+t-1}function Yr(e,t=4,r=1){const n=hc(e,t,r),o=hc(e+1,t,r);return(er(e)-n+o)/7}function sa(e){return e>99?e:e>X.twoDigitCutoffYear?1900+e:2e3+e}function T0(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Po(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function S0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new we(`Invalid unit value ${e}`);return t}function go(e,t){const r={};for(const n in e)if(lr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=S0(o)}return r}function qr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${se(r,2)}:${se(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${se(r,2)}${se(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function No(e){return dv(e,["hour","minute","second","millisecond"])}const fv=["January","February","March","April","May","June","July","August","September","October","November","December"],C0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mv=["J","F","M","A","M","J","J","A","S","O","N","D"];function M0(e){switch(e){case"narrow":return[...mv];case"short":return[...C0];case"long":return[...fv];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const A0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],E0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],pv=["M","T","W","T","F","S","S"];function I0(e){switch(e){case"narrow":return[...pv];case"short":return[...E0];case"long":return[...A0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const L0=["AM","PM"],gv=["Before Christ","Anno Domini"],vv=["BC","AD"],wv=["B","A"];function P0(e){switch(e){case"narrow":return[...wv];case"short":return[...vv];case"long":return[...gv];default:return null}}function bv(e){return L0[e.hour<12?0:1]}function yv(e,t){return I0(t)[e.weekday-1]}function $v(e,t){return M0(t)[e.month-1]}function kv(e,t){return P0(t)[e.year<0?0:1]}function xv(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],d=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${d} ago`:`in ${s} ${d}`}function fc(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Tv={D:fo,DD:Kd,DDD:Xd,DDDD:Qd,t:e0,tt:t0,ttt:r0,tttt:n0,T:o0,TT:i0,TTT:a0,TTTT:s0,f:l0,ff:u0,fff:h0,ffff:m0,F:c0,FF:d0,FFF:f0,FFFF:p0};class pe{static create(t,r={}){return new pe(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Tv[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return se(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,v)=>this.loc.extract(t,g,v),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?bv(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,v)=>n?$v(t,g):i(v?{month:g}:{month:g,day:"numeric"},"month"),c=(g,v)=>n?yv(t,g):i(v?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const v=pe.macroTokenToFormatOpts(g);return v?this.formatWithSystemDefault(t,v):g},f=g=>n?kv(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return fc(pe.parseFormat(r),m)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},i=pe.parseFormat(r),a=i.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return fc(i,o(s))}}const N0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function hr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function fr(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function mr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function q0(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=ct(t[r+o]);return[n,null,r+o]}}const O0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Sv=`(?:${O0.source}?(?:\\[(${N0.source})\\])?)?`,Ka=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,B0=RegExp(`${Ka.source}${Sv}`),Xa=RegExp(`(?:T${B0.source})?`),Cv=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Mv=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Av=/(\d{4})-?(\d{3})/,Ev=q0("weekYear","weekNumber","weekDay"),Iv=q0("year","ordinal"),Lv=/(\d{4})-(\d\d)-(\d\d)/,D0=RegExp(`${Ka.source} ?(?:${O0.source}|(${N0.source}))?`),Pv=RegExp(`(?: ${D0.source})?`);function tr(e,t,r){const n=e[t];return I(n)?r:ct(n)}function Nv(e,t){return[{year:tr(e,t),month:tr(e,t+1,1),day:tr(e,t+2,1)},null,t+3]}function pr(e,t){return[{hours:tr(e,t,0),minutes:tr(e,t+1,0),seconds:tr(e,t+2,0),milliseconds:Ya(e[t+3])},null,t+4]}function cn(e,t){const r=!e[t]&&!e[t+1],n=Po(e[t+1],e[t+2]),o=r?null:ge.instance(n);return[{},o,t+3]}function un(e,t){const r=e[t]?nt.create(e[t]):null;return[{},r,t+1]}const qv=RegExp(`^T?${Ka.source}$`),Ov=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Bv(e){const[t,r,n,o,i,a,s,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",m=(g,v=!1)=>g!==void 0&&(v||g&&d)?-g:g;return[{years:m(Ct(r)),months:m(Ct(n)),weeks:m(Ct(o)),days:m(Ct(i)),hours:m(Ct(a)),minutes:m(Ct(s)),seconds:m(Ct(l),l==="-0"),milliseconds:m(Ya(c),f)}]}const Dv={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Qa(e,t,r,n,o,i,a){const s={year:t.length===2?sa(ct(t)):ct(t),month:C0.indexOf(r)+1,day:ct(n),hour:ct(o),minute:ct(i)};return a&&(s.second=ct(a)),e&&(s.weekday=e.length>3?A0.indexOf(e)+1:E0.indexOf(e)+1),s}const Rv=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function _v(e){const[,t,r,n,o,i,a,s,l,c,d,f]=e,m=Qa(t,o,n,r,i,a,s);let g;return l?g=Dv[l]:c?g=0:g=Po(d,f),[m,new ge(g)]}function Hv(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Vv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Fv=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,zv=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function mc(e){const[,t,r,n,o,i,a,s]=e;return[Qa(t,o,n,r,i,a,s),ge.utcInstance]}function jv(e){const[,t,r,n,o,i,a,s]=e;return[Qa(t,s,r,n,o,i,a),ge.utcInstance]}const Zv=hr(Cv,Xa),Wv=hr(Mv,Xa),Uv=hr(Av,Xa),Gv=hr(B0),R0=fr(Nv,pr,cn,un),Yv=fr(Ev,pr,cn,un),Jv=fr(Iv,pr,cn,un),Kv=fr(pr,cn,un);function Xv(e){return mr(e,[Zv,R0],[Wv,Yv],[Uv,Jv],[Gv,Kv])}function Qv(e){return mr(Hv(e),[Rv,_v])}function e5(e){return mr(e,[Vv,mc],[Fv,mc],[zv,jv])}function t5(e){return mr(e,[Ov,Bv])}const r5=fr(pr);function n5(e){return mr(e,[qv,r5])}const o5=hr(Lv,Pv),i5=hr(D0),a5=fr(pr,cn,un);function s5(e){return mr(e,[o5,R0],[i5,a5])}const pc="Invalid Duration",_0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},l5={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},..._0},Ae=146097/400,Zt=146097/4800,c5={years:{quarters:4,months:12,weeks:Ae/7,days:Ae,hours:Ae*24,minutes:Ae*24*60,seconds:Ae*24*60*60,milliseconds:Ae*24*60*60*1e3},quarters:{months:3,weeks:Ae/28,days:Ae/4,hours:Ae*24/4,minutes:Ae*24*60/4,seconds:Ae*24*60*60/4,milliseconds:Ae*24*60*60*1e3/4},months:{weeks:Zt/7,days:Zt,hours:Zt*24,minutes:Zt*24*60,seconds:Zt*24*60*60,milliseconds:Zt*24*60*60*1e3},..._0},Lt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],u5=Lt.slice(0).reverse();function lt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new B(n)}function H0(e,t){let r=t.milliseconds??0;for(const n of u5.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function gc(e,t){const r=H0(e,t)<0?-1:1;Lt.reduceRight((n,o)=>{if(I(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),Lt.reduce((n,o)=>{if(I(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function d5(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class B{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?c5:l5;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||W.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return B.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new we(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new B({values:go(t,B.normalizeUnit),loc:W.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(qt(t))return B.fromMillis(t);if(B.isDuration(t))return t;if(typeof t=="object")return B.fromObject(t);throw new we(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=t5(t);return n?B.fromObject(n,r):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=n5(t);return n?B.fromObject(n,r):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new we("need to specify a reason the Duration is invalid");const n=t instanceof Ze?t:new Ze(t,r);if(X.throwOnInvalid)throw new Rg(n);return new B({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new Jd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?pe.create(this.loc,n).formatDurationFromString(this,t):pc}toHuman(t={}){if(!this.isValid)return pc;const r=Lt.map(n=>{const o=this.values[n];return I(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ja(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},A.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?H0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t),n={};for(const o of Lt)(lr(r.values,o)||lr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return lt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=S0(t(this.values[n],n));return lt(this,{values:r},!0)}get(t){return this[B.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...go(t,B.normalizeUnit)};return lt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return lt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return gc(this.matrix,t),lt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=d5(this.normalize().shiftToAll().toObject());return lt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>B.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of Lt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;qt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else qt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return gc(this.matrix,r),lt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return lt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Lt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Wt="Invalid Interval";function h5(e,t){return!e||!e.isValid?ee.invalid("missing or invalid start"):!t||!t.isValid?ee.invalid("missing or invalid end"):t<e?ee.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ee{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new we("need to specify a reason the Interval is invalid");const n=t instanceof Ze?t:new Ze(t,r);if(X.throwOnInvalid)throw new Dg(n);return new ee({invalid:n})}static fromDateTimes(t,r){const n=$r(t),o=$r(r),i=h5(n,o);return i??new ee({start:n,end:o})}static after(t,r){const n=B.fromDurationLike(r),o=$r(t);return ee.fromDateTimes(o,o.plus(n))}static before(t,r){const n=B.fromDurationLike(r),o=$r(t);return ee.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=A.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=A.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return ee.fromDateTimes(i,s);if(a){const c=B.fromISO(o,r);if(c.isValid)return ee.after(i,c)}else if(l){const c=B.fromISO(n,r);if(c.isValid)return ee.before(s,c)}}return ee.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r!=null&&r.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ee.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map($r).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(ee.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=B.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ee.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ee.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ee.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ee.fromDateTimes(r,l.time)),r=null);return ee.merge(o)}difference(...t){return ee.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wt}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=fo,r={}){return this.isValid?pe.create(this.s.loc.clone(r),t).formatInterval(this):Wt}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Wt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wt}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Wt}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Wt}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):B.invalid(this.invalidReason)}mapEndpoints(t){return ee.fromDateTimes(t(this.s),t(this.e))}}class Ar{static hasDST(t=X.defaultZone){const r=A.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return nt.isValidZone(t)}static normalizeZone(t){return dt(t,X.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||W.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||W.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||W.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||W.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||W.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||W.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||W.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return W.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return W.create(r,null,"gregory").eras(t)}static features(){return{relative:k0(),localeWeek:x0()}}}function vc(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(B.fromMillis(n).as("days"))}function f5(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=vc(l,c);return(d-d%7)/7}],["days",vc]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function m5(e,t,r,n){let[o,i,a,s]=f5(e,t,r);const l=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const d=B.fromObject(i,n);return c.length>0?B.fromMillis(l,n).shiftTo(...c).plus(d):d}const es={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},wc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},p5=es.hanidec.replace(/[\[|\]]/g,"").split("");function g5(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(es.hanidec)!==-1)t+=p5.indexOf(e[r]);else for(const o in wc){const[i,a]=wc[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function _e({numberingSystem:e},t=""){return new RegExp(`${es[e||"latn"]}${t}`)}const v5="missing Intl.DateTimeFormat.formatToParts support";function R(e,t=r=>r){return{regex:e,deser:([r])=>t(g5(r))}}const w5=String.fromCharCode(160),V0=`[ ${w5}]`,F0=new RegExp(V0,"g");function b5(e){return e.replace(/\./g,"\\.?").replace(F0,V0)}function bc(e){return e.replace(/\./g,"").replace(F0," ").toLowerCase()}function He(e,t){return e===null?null:{regex:RegExp(e.map(b5).join("|")),deser:([r])=>e.findIndex(n=>bc(r)===bc(n))+t}}function yc(e,t){return{regex:e,deser:([,r,n])=>Po(r,n),groups:t}}function xn(e){return{regex:e,deser:([t])=>t}}function y5(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $5(e,t){const r=_e(t),n=_e(t,"{2}"),o=_e(t,"{3}"),i=_e(t,"{4}"),a=_e(t,"{6}"),s=_e(t,"{1,2}"),l=_e(t,"{1,3}"),c=_e(t,"{1,6}"),d=_e(t,"{1,9}"),f=_e(t,"{2,4}"),m=_e(t,"{4,6}"),g=b=>({regex:RegExp(y5(b.val)),deser:([x])=>x,literal:!0}),y=(b=>{if(e.literal)return g(b);switch(b.val){case"G":return He(t.eras("short"),0);case"GG":return He(t.eras("long"),0);case"y":return R(c);case"yy":return R(f,sa);case"yyyy":return R(i);case"yyyyy":return R(m);case"yyyyyy":return R(a);case"M":return R(s);case"MM":return R(n);case"MMM":return He(t.months("short",!0),1);case"MMMM":return He(t.months("long",!0),1);case"L":return R(s);case"LL":return R(n);case"LLL":return He(t.months("short",!1),1);case"LLLL":return He(t.months("long",!1),1);case"d":return R(s);case"dd":return R(n);case"o":return R(l);case"ooo":return R(o);case"HH":return R(n);case"H":return R(s);case"hh":return R(n);case"h":return R(s);case"mm":return R(n);case"m":return R(s);case"q":return R(s);case"qq":return R(n);case"s":return R(s);case"ss":return R(n);case"S":return R(l);case"SSS":return R(o);case"u":return xn(d);case"uu":return xn(s);case"uuu":return R(r);case"a":return He(t.meridiems(),0);case"kkkk":return R(i);case"kk":return R(f,sa);case"W":return R(s);case"WW":return R(n);case"E":case"c":return R(r);case"EEE":return He(t.weekdays("short",!1),1);case"EEEE":return He(t.weekdays("long",!1),1);case"ccc":return He(t.weekdays("short",!0),1);case"cccc":return He(t.weekdays("long",!0),1);case"Z":case"ZZ":return yc(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return yc(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return xn(/[a-z_+-/]{1,256}?/i);case" ":return xn(/[^\S\n\r]/);default:return g(b)}})(e)||{invalidReason:v5};return y.token=e,y}const k5={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function x5(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=k5[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function T5(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function S5(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(lr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function C5(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return I(e.z)||(r=nt.create(e.z)),I(e.Z)||(r||(r=new ge(e.Z)),n=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=Ya(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let di=null;function M5(){return di||(di=A.fromMillis(1555555555555)),di}function A5(e,t){if(e.literal)return e;const r=pe.macroTokenToFormatOpts(e.val),n=Z0(r,t);return n==null||n.includes(void 0)?e:n}function z0(e,t){return Array.prototype.concat(...e.map(r=>A5(r,t)))}function j0(e,t,r){const n=z0(pe.parseFormat(r),e),o=n.map(a=>$5(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=T5(o),l=RegExp(a,"i"),[c,d]=S5(t,l,s),[f,m,g]=d?C5(d):[null,null,void 0];if(lr(d,"a")&&lr(d,"H"))throw new Kt("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:d,result:f,zone:m,specificOffset:g}}}function E5(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=j0(e,t,r);return[n,o,i,a]}function Z0(e,t){if(!e)return null;const n=pe.create(t,e).dtFormatter(M5()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>x5(a,e,i))}const hi="Invalid DateTime",$c=864e13;function Tn(e){return new Ze("unsupported zone",`the zone "${e.name}" is not supported`)}function fi(e){return e.weekData===null&&(e.weekData=mo(e.c)),e.weekData}function mi(e){return e.localWeekData===null&&(e.localWeekData=mo(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Mt(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new A({...r,...t,old:r})}function W0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Sn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Vn(e,t,r){return W0(Lo(e),t,r)}function kc(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,po(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=B.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Lo(i);let[l,c]=W0(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function yr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=A.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return A.invalid(new Ze("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Cn(e,t,r=!0){return e.isValid?pe.create(W.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function pi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=se(e.c.year,r?6:4),t?(n+="-",n+=se(e.c.month),n+="-",n+=se(e.c.day)):(n+=se(e.c.month),n+=se(e.c.day)),n}function xc(e,t,r,n,o,i){let a=se(e.c.hour);return t?(a+=":",a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=se(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=se(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=se(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=se(Math.trunc(-e.o/60)),a+=":",a+=se(Math.trunc(-e.o%60))):(a+="+",a+=se(Math.trunc(e.o/60)),a+=":",a+=se(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const U0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},I5={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},L5={ordinal:1,hour:0,minute:0,second:0,millisecond:0},G0=["year","month","day","hour","minute","second","millisecond"],P5=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],N5=["year","ordinal","hour","minute","second","millisecond"];function q5(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Jd(e);return t}function Tc(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return q5(e)}}function Sc(e,t){const r=dt(t.zone,X.defaultZone),n=W.fromObject(t),o=X.now();let i,a;if(I(e.year))i=o;else{for(const c of G0)I(e[c])&&(e[c]=U0[c]);const s=y0(e)||$0(e);if(s)return A.invalid(s);const l=r.offset(o);[i,a]=Vn(e,l,r)}return new A({ts:i,zone:r,loc:n,o:a})}function Cc(e,t,r){const n=I(r.round)?!0:r.round,o=(a,s)=>(a=Ja(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function Mc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class A{constructor(t){const r=t.zone||X.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Ze("invalid input"):null)||(r.isValid?null:Tn(r));this.ts=I(t.ts)?X.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=Sn(this.ts,s),n=Number.isNaN(o.year)?new Ze("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||W.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new A({})}static local(){const[t,r]=Mc(arguments),[n,o,i,a,s,l,c]=r;return Sc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=Mc(arguments),[n,o,i,a,s,l,c]=r;return t.zone=ge.utcInstance,Sc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=cv(t)?t.valueOf():NaN;if(Number.isNaN(n))return A.invalid("invalid input");const o=dt(r.zone,X.defaultZone);return o.isValid?new A({ts:n,zone:o,loc:W.fromObject(r)}):A.invalid(Tn(o))}static fromMillis(t,r={}){if(qt(t))return t<-$c||t>$c?A.invalid("Timestamp out of range"):new A({ts:t,zone:dt(r.zone,X.defaultZone),loc:W.fromObject(r)});throw new we(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(qt(t))return new A({ts:t*1e3,zone:dt(r.zone,X.defaultZone),loc:W.fromObject(r)});throw new we("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=dt(r.zone,X.defaultZone);if(!n.isValid)return A.invalid(Tn(n));const o=W.fromObject(r),i=go(t,Tc),{minDaysInFirstWeek:a,startOfWeek:s}=uc(i,o),l=X.now(),c=I(r.specificOffset)?n.offset(l):r.specificOffset,d=!I(i.ordinal),f=!I(i.year),m=!I(i.month)||!I(i.day),g=f||m,v=i.weekYear||i.weekNumber;if((g||d)&&v)throw new Kt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&d)throw new Kt("Can't mix ordinal dates with month/day");const y=v||i.weekday&&!g;let b,x,C=Sn(l,c);y?(b=P5,x=I5,C=mo(C,a,s)):d?(b=N5,x=L5,C=ui(C)):(b=G0,x=U0);let D=!1;for(const Re of b){const ve=i[Re];I(ve)?D?i[Re]=x[Re]:i[Re]=C[Re]:D=!0}const Z=y?av(i,a,s):d?sv(i):y0(i),ne=Z||$0(i);if(ne)return A.invalid(ne);const de=y?lc(i,a,s):d?cc(i):i,[ue,j]=Vn(de,c,n),oe=new A({ts:ue,zone:n,o:j,loc:o});return i.weekday&&g&&t.weekday!==oe.weekday?A.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${oe.toISO()}`):oe}static fromISO(t,r={}){const[n,o]=Xv(t);return yr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=Qv(t);return yr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=e5(t);return yr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(I(t)||I(r))throw new we("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=W.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,d]=E5(a,t,r);return d?A.invalid(d):yr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return A.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=s5(t);return yr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new we("need to specify a reason the DateTime is invalid");const n=t instanceof Ze?t:new Ze(t,r);if(X.throwOnInvalid)throw new Bg(n);return new A({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Z0(t,W.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return z0(pe.parseFormat(t),W.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?fi(this).weekYear:NaN}get weekNumber(){return this.isValid?fi(this).weekNumber:NaN}get weekday(){return this.isValid?fi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?mi(this).weekday:NaN}get localWeekNumber(){return this.isValid?mi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?mi(this).weekYear:NaN}get ordinal(){return this.isValid?ui(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ar.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ar.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ar.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ar.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Lo(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,d=Sn(l,a),f=Sn(c,s);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Mt(this,{ts:l}),Mt(this,{ts:c})]:[this]}get isInLeapYear(){return ln(this.year)}get daysInMonth(){return po(this.year,this.month)}get daysInYear(){return this.isValid?er(this.year):NaN}get weeksInWeekYear(){return this.isValid?Yr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Yr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=pe.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(ge.instance(t),r)}toLocal(){return this.setZone(X.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=dt(t,X.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=Vn(a,i,t)}return Mt(this,{ts:o,zone:t})}else return A.invalid(Tn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Mt(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=go(t,Tc),{minDaysInFirstWeek:n,startOfWeek:o}=uc(r,this.loc),i=!I(r.weekYear)||!I(r.weekNumber)||!I(r.weekday),a=!I(r.ordinal),s=!I(r.year),l=!I(r.month)||!I(r.day),c=s||l,d=r.weekYear||r.weekNumber;if((c||a)&&d)throw new Kt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Kt("Can't mix ordinal dates with month/day");let f;i?f=lc({...mo(this.c,n,o),...r},n,o):I(r.ordinal)?(f={...this.toObject(),...r},I(r.day)&&(f.day=Math.min(po(f.year,f.month),f.day))):f=cc({...ui(this.c),...r});const[m,g]=Vn(f,this.o,this.zone);return Mt(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t);return Mt(this,kc(this,r))}minus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t).negate();return Mt(this,kc(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=B.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?pe.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):hi}toLocaleString(t=fo,r={}){return this.isValid?pe.create(this.loc.clone(r),t).formatDateTime(this):hi}toLocaleParts(t={}){return this.isValid?pe.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=pi(this,a);return s+="T",s+=xc(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?pi(this,t==="extended"):null}toISOWeekDate(){return Cn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+xc(this,a==="extended",r,t,n,i):null}toRFC2822(){return Cn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Cn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?pi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Cn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():hi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return B.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=uv(r).map(B.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=m5(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(A.now(),t,r)}until(t){return this.isValid?ee.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||A.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Cc(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Cc(t.base||A.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(A.isDateTime))throw new we("min requires all arguments be DateTimes");return dc(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(A.isDateTime))throw new we("max requires all arguments be DateTimes");return dc(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=W.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return j0(a,t,r)}static fromStringExplain(t,r,n={}){return A.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return fo}static get DATE_MED(){return Kd}static get DATE_MED_WITH_WEEKDAY(){return _g}static get DATE_FULL(){return Xd}static get DATE_HUGE(){return Qd}static get TIME_SIMPLE(){return e0}static get TIME_WITH_SECONDS(){return t0}static get TIME_WITH_SHORT_OFFSET(){return r0}static get TIME_WITH_LONG_OFFSET(){return n0}static get TIME_24_SIMPLE(){return o0}static get TIME_24_WITH_SECONDS(){return i0}static get TIME_24_WITH_SHORT_OFFSET(){return a0}static get TIME_24_WITH_LONG_OFFSET(){return s0}static get DATETIME_SHORT(){return l0}static get DATETIME_SHORT_WITH_SECONDS(){return c0}static get DATETIME_MED(){return u0}static get DATETIME_MED_WITH_SECONDS(){return d0}static get DATETIME_MED_WITH_WEEKDAY(){return Hg}static get DATETIME_FULL(){return h0}static get DATETIME_FULL_WITH_SECONDS(){return f0}static get DATETIME_HUGE(){return m0}static get DATETIME_HUGE_WITH_SECONDS(){return p0}}function $r(e){if(A.isDateTime(e))return e;if(e&&e.valueOf&&qt(e.valueOf()))return A.fromJSDate(e);if(e&&typeof e=="object")return A.fromObject(e);throw new we(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function cr(e){const t=A.fromObject(Ng(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Y0(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function gi(e,t){return Y0(cr(e).plus(t))}const O5=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],B5=O5.reduce((e,t)=>(e[t]=t,e),{}),D5=X.defaultZone.name,ts=B5.UTC;var Ac;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Ac||(Ac={}));const R5=["hour","minute","second","millisecond"],_5=tn({hour:14,minute:19,second:7,millisecond:877,timezone:ts}),H5=tn({year:2023,month:6,day:5,timezone:ts}),V5=tn(Nf(H5,_5));var E;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(E||(E={}));const F5={[E.Milliseconds]:"millisecond",[E.Seconds]:"second",[E.Minutes]:"minute",[E.Hours]:"hour",[E.Days]:"day",[E.Weeks]:"week",[E.Months]:"month",[E.Quarters]:"quarter",[E.Years]:"year"},J0=[E.Milliseconds,E.Seconds,E.Minutes,E.Hours,E.Days,E.Weeks,E.Months,E.Quarters,E.Years],z5={[E.Years]:"longterm",[E.Quarters]:"longterm",[E.Months]:"longterm",[E.Weeks]:"casual",[E.Days]:"casual",[E.Hours]:"casual",[E.Minutes]:"casual",[E.Seconds]:"casual",[E.Milliseconds]:"casual"};function j5({start:e,end:t,unit:r}){const n=cr(e);return cr(t).diff(n,r,{conversionAccuracy:z5[r]}).toObject()}function Z5({start:e,end:t}){const r=J0.map(o=>{const a=j5({start:e,end:t,unit:o})[o];if(a==null)throw new Error(`Internal date-vir error: failed to find duration for '${o}'`);return[o,a]});return Lg(r)}function W5(e){if(!Ar.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function U5(e){ku(e,V5),W5(e.timezone),cr(e)}function G5(e){try{return U5(e),!0}catch{return!1}}function Y5(e,t){const r=J5(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return Y0(r,t)}function Ec(e){const t=A.fromJSDate(new Date(e));if(t.isValid)return t}function J5(e,t){if(G5(e)&&(e=cr(e).toMillis()),A.isDateTime(e))return e.setZone(t);if(Gl(e,"number"))return A.fromMillis(e,{zone:ts}).setZone(t);if(Gl(e,"string")){const r=A.fromISO(e,{zone:t});return r.isValid?r:Ec(e)}else if(e instanceof Date)return A.fromJSDate(e).setZone(t);return Ec(e)}function K5(e){return Y5(Date.now(),e)}function K0(){return K5(D5)}const X5={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};qg(X5,R5);const Q5=X.defaultLocale;function e4(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Ic(e,t){const r=cr(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??Q5});return e4(r)}function t4(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function r4(e,t){const r=Ud(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(Wd).join(":")}function n4(e,t){return{date:t4(e),time:r4(e,t.includeSeconds),timezone:e.timezone}}function o4(e,t){const r=n4(e,t);return[r.date,r.time,t.includeTimezone&&`(${r.timezone})`].filter(Wd).join(" ")}const i4={[E.Milliseconds]:1e3,[E.Seconds]:60,[E.Minutes]:60,[E.Hours]:24,[E.Days]:30,[E.Weeks]:4,[E.Months]:12,[E.Quarters]:4,[E.Years]:1/0};function a4({fullDate:e,relativeTo:t,options:r={}}){const n=r.decimalDigitCount||0,o=Z5({start:e,end:t}),i=Og(o,(g,v)=>{const y=Math.floor(Math.abs(Wl({digits:1,number:v}))),b=y>0,x=r.limitUnitMax?y<i4[g]:!0;return b&&x}),a=J0.reduce((g,v)=>{var b;return!((b=r.blockedRelativeUnits)!=null&&b.includes(v))&&i[v]?v:g},void 0);if(r.blockJustNow?!1:Gd(e,t)||a===E.Minutes&&o.minutes<2||a===E.Seconds&&o.seconds<11||a===E.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],c=Math.abs(Wl({digits:n,number:l})),d=c===1,f=[F5[a],d?"":"s"].join(""),m=d?"a":c;return l<0?`in ${m} ${f}`:`${m} ${f} ago`}function s4(e){return{date:Ic(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Ic(e,{timeStyle:"short"}).replace(/\s/g," ")}}const l4={blockedRelativeUnits:[E.Years,E.Quarters],limitUnitMax:!0},vi=re()({tagName:"toniq-date-time",renderCallback({inputs:e}){var i,a,s;const t=s4(e.fullDate),r=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(an).join(" "),n=o4(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?a4({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||K0(),options:{...l4,...e.relativeOptions}}):void 0;return u`
            <span title=${n}>${o||r}</span>
        `}}),c4="data-test-id",Yt=$t(class extends ot{constructor(e){super(e),this.element=u4(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(c4,e),Me}});function u4(e,t,r){d4(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function d4(e,t){if(e.type!==Xr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var la=(e=>(e.Up="up",e.Down="down",e))(la||{});const Mn=re()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:K(),openChange:K()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
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
            ${he};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${kt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${Be};
            ${F($.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${F($.pagePrimary)}
            ${ho.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${ho.popupShadowReversed};
        }

        .selected-label-prefix {
            ${Y.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Be};
        }

        .select-options .option.selected {
            ${F($.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${$.accentTertiary.backgroundColor};
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
            ${Rt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${S.assign({icon:n.icon})}
                      ${Yt("rendered-input-icon")}
                  ></${S}>
              `:"",s=n.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return u`
            <button
                ?disabled=${!!n.disabled}
                class=${ye({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${S.assign({icon:Sd})}
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
        `}}),Fe=re()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>!!e.linkDisabled},events:{routeChangeTriggered:K()},styles:({hostClasses:e})=>p`
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
            color: ${$.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${$.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} a {
            cursor: default;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){if(e.linkDisabled){o.preventDefault();return}e.treatAsRouteChange&&Oa(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?u`
                <a
                    href=${e.url}
                    ${T("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:u`
                <a href=${e.url} ${T("click",n)}><slot></slot></a>
            `}}),ca=360,X0=8;function Q0(e){return(e-X0)/2}const Ge=it({"main-image-size":ca,"secondary-image-size":Q0(ca)}),Qe=re()({tagName:"toniq-featured-flip-card-footer",styles:p`
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

        ${ie}, ${Fe} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Ge["secondary-image-size"].value} * 2);
        }

        ${Fe} ${ie} {
            width: 100%;
        }

        ${Fe} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Ge["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:K(),footerFlipCardButtonClick:K()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?Ke(n).map(i=>{const a=n[i];if(!a)return;const s=jd[i];return u`
                          <${Fe.assign({newTab:!0,url:a})}>
                              <${S.assign({icon:s})}></${S}>
                          </${Fe}>
                      `}).filter(an):"";return u`
            <div class="buttons">
                ${e.viewMoreButtonUrl?u`
                          <${Fe.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${T(Fe.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${ie.assign({text:e.viewMoreButtonText,buttonStyle:Gr.Outline})}></${ie}>
                          </${Fe}>
                      `:u`
                          <${ie.assign({text:e.viewMoreButtonText,buttonStyle:Gr.Outline})}
                              ${T("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${ie}>
                      `}
                ${e.flipCardButtonText?u`
                          <${ie.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${ie}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Pt=re()({tagName:"toniq-flip-card",events:{flippedChange:K()},styles:p`
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

        ${Gp(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${$.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <div
                class="flip-wrapper ${ye({flipped:e.flipped})}"
                ${T("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),Q=re()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:K()},styles:p`
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
            max-height: ${Ge["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Ge["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${X0}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Pt} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${Ge["main-image-size"].value};
            height: ${Ge["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${Ge["secondary-image-size"].value};
            height: ${Ge["secondary-image-size"].value};
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

        .card-face.front ${Qe} {
            margin-top: 24px;
        }

        .card-face.back ${Qe} {
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
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var m,g,v,y;const a=e.mainImageSize||ca,s=Q0(a);Li({onElement:n,forCssVar:Ge["main-image-size"],toValue:`${a}px`}),Li({onElement:n,forCssVar:Ge["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(an).join(" "),c=u`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],f=d?u`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,d))||u`
                          <${ft.assign({imageUrl:d})}></${ft}>
                      `}
                  </div>
              `:"";return u`
            <${Pt.assign({flipped:t.flipped})}
                ${T(Qe.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(b=>{var x;return u`
                                    <div class="secondary-image-wrapper">
                                        ${((x=e.customTemplateCallback)==null?void 0:x.call(e,b))||u`
                                            <${ft.assign({imageUrl:b})}></${ft}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${Qe.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(Qe.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Qe}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(v=e.infoParagraphs)==null?void 0:v.map(b=>u`
                                <p>${b}</p>
                            `)}
                    </div>
                    <${Qe.assign({viewMoreButtonText:l,flipCardButtonText:(y=e.infoParagraphs)!=null&&y.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(Qe.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Qe}>
                </div>
            </${Pt}>
        `}});function ua({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ua({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function eh({value:e,allowed:t,blocked:r}){const n=t?ua({input:e,matcher:t}):!0,o=r?ua({input:e,matcher:r}):!1;return n&&!o}function Lc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(eh({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var da=(e=>(e.Default="default",e.Outline="outline",e))(da||{});const An=re()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:K(),inputBlocked:K()},styles:({hostClasses:e})=>p`
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
                border-radius: ${Ki};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${$.pagePrimary.backgroundColor};
                border-color: ${$.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${S} {
                color: ${$.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${S} {
                color: ${$.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${$.pageSecondary.foregroundColor};
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
                border-radius: ${Ki};
                background-color: ${$.accentTertiary.backgroundColor};
                font: ${Y.paragraphFont};
                gap: 4px;
            }

            ${kt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${S} {
                margin-right: 10px;
            }

            input {
                ${he};
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
                color: ${$.accentTertiary.foregroundColor};
            }

            .suffix {
                ${Y.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Rt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Be};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Lc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
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
                    ${T("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)eh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:f}=Lc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(f))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Se(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var Fn=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(Fn||{});const wi=re()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>p`
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
            <${S.assign({icon:ja,fitContainer:e.size!=="small"})}></${S}>
        `});async function h4(e){return navigator.clipboard.writeText(e)}const f4="…";function m4(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${f4}${n}`}function p4(e){return!(e%1)}function g4(e){return e.letterCount==null?4:p4(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const me=re()({tagName:"toniq-middle-ellipsis",events:{copied:K()},cssVars:{"toniq-middle-ellipsis-text-color":$.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":$.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":$.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":$.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${J.interaction};
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
            ${he};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${kt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${$.pagePrimary.backgroundColor};
            background-color: ${$.pagePrimary.backgroundColor};
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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=g4(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?m4(i,a):i,f=c?i:"",m=s?Ed:l?Ad:void 0,g=m?u`
                  <${S.assign({icon:m})}></${S}>
              `:"",v=u`
            <span title=${f} class="text-content">
                ${Se(!!e.copyOnClick,u`
                        <span
                            class=${ye({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${T("click",y=>{var x,C;const b=(C=(x=y.currentTarget)==null?void 0:x.querySelector)==null?void 0:C.call(x,"a");if(!b)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");b.click()})}
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
                        ${T("click",async()=>{await h4(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${v} ${g}
                    </button>
                `:u`
                    ${v}
                `:u``}}),Pc="...";function v4(e,t,r=7,n=5){let o;e=Nr({value:e,min:1,max:t}),r=Nr({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?bi(t-o,t):e>o?bi(Math.min(s.start,t-o),Math.min(s.end,t)):bi(1,Math.min(t,o+1));function c(f,m){return l.length+1!==t?m:[f]}const d=l[l.length-1];if(d&&d<t){const f=c(t,[Pc,t]);return[...l,...f]}else return l[0]!==1?c(1,[1,Pc]).concat(l):l}function bi(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}re()({tagName:"toniq-pagination",styles:p`
        :host {
            display: flex;
        }

        button {
            ${he};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Be};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${F($.accentSecondary)};
        }

        .control:hover {
            ${F($.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${F($.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${Y.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${F($.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${F($.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:K()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${T("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${S.assign({icon:Fa})}></${S}>
                </button>
                ${v4(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${ye({page:!0,selected:e.currentPage===n})}
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
                    <${S.assign({icon:za})}></${S}>
                </button>
            `}});const G=re()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:K()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(ze("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(ze("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(ze("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(ze("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${Y.boldParagraphFont};
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
            ${he};
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

        ${kt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Rt};
        }

        .wrapper.disabled::before {
            ${Rt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Z2()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return w4(e.entries).map(i=>b4(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function w4(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${G.tagName} was given duplicate entry values.`),Object.values(t)}function b4(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${ye({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}function yi(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const f=e[d+1];return f==null?!0:c<=t&&f>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function y4(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=$4(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Nc(o,r),o.length>r&&Nc(o,r)),o}function Nc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function $4(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const N={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},kr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function k4(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${N.lowerLabelWrapper} .${N.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${N.upperLabelWrapper} .${N.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function x4(e,t=8){const r=k4(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function $i({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function Jr(e){return _2(e)&&e.min!==void 0&&e.max!==void 0}function ha(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${N.range}`);return(t==null?void 0:t.clientWidth)??0}function ki(e,t,r){return`${r?Q2(e):e} ${t}`}function T4({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function S4({value:e,double:t,min:r,max:n}){return t?Jr(e)?{min:Nr({value:e.min,min:r,max:Math.min(e.max,n)}),max:Nr({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:Jr(e)?r:Nr({value:e,min:r,max:n})}function C4({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:Jr(e)?{min:yi(n,e.min),max:yi(n,e.max)}:yi(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function xi(e,t,r){return r?t[e]||0:e}function M4(e){return{actualLimits:T4(e),actualValue:S4(e)}}function A4(e,t){var n,o,i;let r=!1;if(Jr(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${N.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${N.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${N.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function th(e,t){const{actualValue:r,actualLimits:n}=M4({...e}),o=y4(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=C4({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=ha(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const At=16,qc=p`
    ${At}px
`,Oc=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${qc};
    width: ${qc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${J.interaction};
    ${F($.accentPrimary)};
`,Bc=p`
    transform: scale(1.2);
`;function Er(e){requestAnimationFrame(()=>{const t=th(e.instanceInputs,e).elementValue;A4(t,e)&&(e.setAttribute("disabled","true"),Er(e))})}const _=re()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:K()},styles:p`
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
            ${F($.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${F($.accentPrimary)};
        }

        .${q(N.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${Y.boldParagraphFont};
            ${Be};
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
        ${kt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

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
            ${Oc}
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-webkit-slider-thumb {
            ${Oc}
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-webkit-slider-thumb:hover {
            ${Bc}
        }

        /* these selectors fail if combined with a comma */
        .${q(N.slider)}::-moz-range-thumb:hover {
            ${Bc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Er(e)}),e.addEventListener("keydown",()=>{Er(e)}),e.addEventListener("keyup",()=>{Er(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:f,rangeWidth:m}=th({...e},t);if(Er(t),Jr(d))return g(a,d,f);return y(a,d,f);function g(b,x,C){const D={left:Gt((m-At)*(x.min-C.min)/(C.max-C.min)+At/2),right:Gt((m-At)*(C.max-x.max)/(C.max-C.min)+At/2)},Z=ki(b.min,c,l),ne=ki(b.max,c,l);requestAnimationFrame(()=>{const ve=x4(t);ve!==o.labelOverlap&&i({labelOverlap:ve})});const de=(C.max-x.max)/(C.max-C.min)>.5,ue=$i({value:x.min,limits:{min:C.min,max:x.max},flip:!0}),j=$i({value:x.max,limits:{min:x.min,max:C.max},flip:!1}),oe=o.labelOverlap&&de?o.labelOverlap:0,Re=o.labelOverlap&&!de?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${Vr(()=>{i({rangeWidth:ha(t)})})}
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
                            style="margin-left: ${ni(ue)}"
                        >
                            <span
                                class="${N.labelPixelMarginWrapper}"
                                style="margin-right: ${Gt(Re)}"
                                ${Yt(kr.lowerLabel)}
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
                            style="margin-right: ${ni(j)}"
                        >
                            <span
                                class="${N.labelPixelMarginWrapper}"
                                style="margin-left: ${Gt(oe)}"
                                ${Yt(kr.upperLabel)}
                            >
                                ${ne}
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
                            ${T("input",ve=>{const Ht=ve.target,gr={...b,min:xi(Number(Ht.value),s,l)};v(gr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${N.upperSlider} ${N.slider}"
                            step=${e.step}
                            .min=${C.min}
                            .max=${C.max}
                            .value=${x.max}
                            ${Yt(kr.slider)}
                            ${T("input",ve=>{const Ht=ve.target,gr={...b,max:xi(Number(Ht.value),s,l)};v(gr)})}
                        />
                    </div>
                </div>
            `}function v(b){i({internalValue:b}),e.disabled||n(new r.valueChange(b))}function y(b,x,C){const D=Gt((m-At)*(C.max-x)/(C.max-C.min)+At/2),Z=ki(b,c,l),ne=$i({value:x,limits:C,flip:!1});return u`
                <div
                    class="range"
                    ${Vr(()=>{i({rangeWidth:ha(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${D}"></div>
                    <span
                        class="${N.labelOuterWrapper} ${N.rightAlignedLabelWrapper}"
                        style="right: ${D}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-right: ${ni(ne)}"
                            ${Yt(kr.label)}
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
                        ${Yt(kr.slider)}
                        ${T("input",de=>{const ue=de.target,j=xi(Number(ue.value),s,l);v(j)})}
                    />
                </div>
            `}}});var rh=(e=>(e.Default="default",e.TextOnly="text-only",e))(rh||{});const Ti=re()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${Y.boldParagraphFont};
            ${Be};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${he};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${F($.accentSecondary)};
            transition:
                color ${J.interaction},
                background-color ${J.interaction};
        }

        ${kt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${F($.accentPrimary)};
        }

        :host(:hover) button {
            ${F($.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${F($.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${F($.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${F($.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${F($.pageInteraction)};
            border-color: ${$.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${F($.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${$.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${F($.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Rt};
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
        `}}),Or=$g({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${$.accentPrimary.backgroundColor};
            ${ho.menuShadow};
            background-color: ${$.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),zn=re()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>p`
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
                <${Or}>${e.tooltipContent}</${Or}>
            </div>
        `}}),Ir=re()({tagName:"toniq-top-tabs",events:{valueChange:K()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>p`
        :host {
            display: block;
        }

        ul {
            ${he};
            display: flex;
            width: 100%;
        }

        li {
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${$.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${J.interaction},
                border-color ${J.interaction};
        }

        button {
            ${he};
            cursor: pointer;
            ${Y.paragraphFont};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
            transition: padding-bottom ${J.interaction};
        }

        button {
            max-width: 300px;
        }

        ${Nt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected button {
            ${Y.boldFont};
            padding-bottom: calc(
                ${e["toniq-top-tabs-tab-vertical-padding"].value} -
                    ${e["toniq-top-tabs-selected-border-width"].value}
            );
        }

        li.selected {
            border-color: ${$.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <ul role="tablist">
                ${e.tabs.map(n=>{const o=n.value===e.value;return u`
                        <li
                            ${Gf("tab")}
                            role="presentation"
                            class=${ye({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${T("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${Nt.assign({text:n.label})}></${Nt}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),nh=U({title:"Data",parent:void 0}),vo=re()({tagName:"toniq-icon-book-viewer",styles:p`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${$.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${S.assign({icon:e.icon})}></${S}>
        `}}),qo=Object.values(ut).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),E4=Object.keys(qo).sort();function rs(e){return{controlType:O.Dropdown,initValue:e,options:["None",...E4]}}const oh={"CSS color":{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-color"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-fill-color"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:O.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:O.Number,initValue:2}};function jn(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),V2(n,"number")&&(n=Ha({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const I4=U({title:"Social Urls",parent:nh,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${vo.assign({icon:n})}></${vo}>
                    `}})}Object.entries(jd).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),ae=U({title:"Elements",parent:void 0}),L4=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:p`
            ${Nt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],P4=U({title:Nt.tagName,parent:ae,elementExamplesCallback({defineExample:e}){L4.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:p`
                    .bold {
                        ${Y.boldFont}
                    }

                    ${t.extraStyle??p``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Nt.assign({text:t.text})}
                            ${T("click",()=>{n({isBold:!r.isBold})})}
                            class=${ye({bold:r.isBold})}
                        ></${Nt}>
                        More text
                    `}})})}}),N4=U({parent:ae,title:ie.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:Gr.Secondary}},{name:"Outline",inputs:{buttonStyle:Gr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
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
                        <${ie.assign({text:"Button",...r.inputs})}></${ie}>
                        <${ie.assign({icon:Rn,...r.inputs})}></${ie}>
                        <${ie.assign(n.showIcon?{icon:Rn,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${ie}>
                        <${ie.assign({text:"Button",icon:Rn,...r.inputs})}></${ie}>
                        <${ie.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${ie}>
                        <${ie.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ie}>
                    `}})})}}),Dc=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${ke} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,q4=U({parent:ae,title:ke.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Dc,renderCallback(){return u`
                    <${ke.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ut["core-24"].map(t=>{const r=p`
                                padding: 24px;
                                border: 1px solid ${$.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${S.assign({icon:t})} style=${r}></${S}>
                            `})})}></${ke}>
                    <${ke.assign({enableAutomaticCycling:!0,templates:ut["core-24"].map(t=>{const r=p`
                                padding: 100px 24px;
                                border: 1px solid ${$.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${S.assign({icon:t})} style=${r}></${S}>
                            `})})}></${ke}>
                    <${ke.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ut["core-24"].map(t=>{const r=j2({min:0,max:150}),n=p`
                                padding: 100px ${r}px;
                                border: 1px solid ${$.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${S.assign({icon:t})} style=${n}></${S}>
                            `})})}></${ke}>
                `}}),e({title:"banner style",styles:Dc,renderCallback(){const t=p`
                    /* make sure this width matches the ToniqCarousel width */
                    width: 800px;
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 100px 0;
                    box-sizing: border-box;
                    border: 1px solid ${$.pageInteraction.foregroundColor};
                    border-radius: 12px;
                `;return u`
                    <${ke.assign({enableAutomaticCycling:!0,style:Xi.BannerStyle,templates:ut["core-24"].map(r=>u`
                                <div style=${t}>
                                    <${S.assign({icon:r})}></${S}>
                                </div>
                            `)})}></${ke}>
                    <${ke.assign({enableAutomaticCycling:!0,style:Xi.BannerStyle,templates:[ut["core-24"][0]].map(r=>u`
                                <div style=${t}>
                                    <${S.assign({icon:r})}></${S}>
                                </div>
                            `)})}
                        class=${ke.hostClasses["toniq-carousel-banner-style"]}
                    ></${ke}>
                `}})}});function O4(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:O.Color,initValue:""}]);return Object.fromEntries(t)}function B4(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(an);return q(t.join(`
`))}const D4=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Si=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],R4=U({parent:ae,title:at.tagName,controls:{Text:{controlType:O.Text,initValue:"Text"},...O4(at)},elementExamplesCallback({defineExample:e}){D4.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Si.map(r=>!!r.inputs.checked),extraEntryStatuses:Si.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:p`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Si.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var f;return u`
                                    <${at.assign({...t.inputs,...Ji(i.inputs,["checked"]),checked:!!((f=r.extraEntryStatuses[a])!=null&&f[d]),text:c})}
                                        ${T(at.events.checkedChange,()=>{const m=[...r.extraEntryStatuses];m[a][d]=!m[a][d],n({extraEntryStatuses:m})})}
                                    ></${at}>
                                `}),l=B4(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${at.assign({...t.inputs,...Ji(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${T(at.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${at}>
                                ${s}
                            </div>
                        `})}})})}}),_4=U({parent:ae,title:si.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Qt}},{inputs:{icon:Qt}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Qt},template:u`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:ea.Default}},{title:"secondary style",inputs:{style:ea.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${si.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${Se(!!o.template,o.template)}</${si}>
                    `)}})})}}),H4=U({title:vi.tagName,parent:ae,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=K0();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:gi(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:gi(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:gi(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[E.Days,E.Hours]}}}].forEach(n=>{e({title:n.title,renderCallback(){return u`
                        <${vi.assign({...n.inputs})}></${vi}>
                    `}})})}}),En=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],V4=[{title:"default"},{title:"transparent background",customStyle:p`
            ${Za.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Rc=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],F4=U({title:Mn.tagName,parent:ae,controls:{Selected:{controlType:O.Dropdown,initValue:En[0].label,options:En.map(e=>e.label)},Direction:{controlType:O.Dropdown,initValue:"Down",options:F2(la)},Icon:rs(xd.name),Prefix:{controlType:O.Text,initValue:"Sort by: "},"Force open":{controlType:O.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){V4.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Rc.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Rc.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return u`
                            <${Mn.assign({...t.inputs,...i.inputs,options:En,value:r.selected[a]??En.find(l=>l.label===o.Selected),icon:qo[o.Icon],selectedLabelPrefix:o.Prefix,direction:la[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${T(Mn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Mn}>
                        `})}})})}}),_c="/toniq-labs-design-system";function z4(...e){const r=[globalThis.location.pathname.startsWith(_c)?_c:"",...e].filter(an);return G2(...r)}const xr=Array(30).fill(z4("/toniq-labs-logo.png")),Br=["Hello there.","There is stuff here."],In=Br.concat(Array(30).fill(Br)),j4=U({title:Q.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({infoParagraphs:In,imageUrls:xr,socialUrls:yg,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${Q}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:xr,title:"Featured Stuff",infoParagraphs:void 0})}></${Q}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:In,viewMoreUrl:"https://toniqlabs.com"})}
                        ${T(Q.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${Q}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:In})}></${Q}>
                `}}),e({title:"with custom height",styles:p`
                ${Q} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:In})}></${Q}>
                `}}),e({title:"smaller",styles:p`
                ${Q} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:xr,infoParagraphs:Br,title:"Featured Stuff"})}></${Q}>
                `}}),e({title:"with custom template",styles:p`
                ${Q} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:xr,infoParagraphs:Br,title:"With custom Template",customTemplateCallback(t){return u`
                                <${ft.assign({imageUrl:t})}></${ft}>
                            `}})}></${Q}>
                `}}),e({title:"with custom template statuses",styles:p`
                ${Q} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${Q.assign({imageUrls:xr.map((t,r)=>r%2?"/invalid-image.png":t),infoParagraphs:Br,title:"With custom Template Statuses",customTemplateCallback(t){return u`
                                <${ft.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${ir.Loading}
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
                                        <${S.assign({icon:ja,fitContainer:!0})}
                                            style=${p`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${S}>
                                    </div>
                                    <div
                                        slot=${ir.Error}
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
                                        <${S.assign({icon:gd,fitContainer:!0})}
                                            style=${p`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${S}>
                                    </div>
                                </${ft}>
                            `}})}></${Q}>
                `}})}}),Z4=U({title:Pt.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${Pt.assign({flipped:t.flipped})}
                        ${T(Pt.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Pt}>
                `}})}}),W4=U({parent:ae,title:Fe.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}},{title:"link disabled",inputs:{linkDisabled:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${Fe.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Fe}>
                    `}})})}}),U4=U({title:S.tagName,parent:ae,controls:oh,elementExamplesCallback({defineExample:e}){const t=[{icon:Od},{icon:qd},{icon:Cd},{icon:Qt},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${S.assign({icon:n.icon})}
                            style=${jn(r)}
                        ></${S}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=p`
                    ${h["toniq-icon-fill-color"].name}: orange;
                `;return ut["third-party-brands"].map(o=>u`
                        <${S.assign({icon:o})}
                            style=${jn(r)}
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
                    <${S.assign({icon:Qt,fitContainer:!0})}
                        style=${jn(r)}
                    ></${S}>
                `}})}}),G4=U({title:An.tagName,parent:ae,controls:{"External value":{controlType:O.Text,initValue:""},Placeholder:{controlType:O.Text,initValue:"placeholder"},Icon:rs(Ld.name),Suffix:{controlType:O.Text,initValue:"ICP"},"No browser helps":{controlType:O.Checkbox,initValue:!1},"Blocked characters":{controlType:O.Text,initValue:""},"Exclusive characters":{controlType:O.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:da.Default}},{title:"outline",inputs:{style:da.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${An.assign({...n.inputs,value:o["External value"]||i.value,icon:qo[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${T(An.events.valueChange,l=>{a({value:l.detail})})}
                            ></${An}>
                        `))}})})}}),Y4=U({title:wi.tagName,parent:ae,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:Fn.Small}},{title:"large",inputs:{size:Fn.Large}},{title:"whole page",inputs:{size:Fn.WholePage},styles:p`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??p``,renderCallback(){return u`
                        <${wi.assign(r.inputs)}></${wi}>
                    `}})})}}),J4=U({title:me.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${me.assign({text:"Long string instead of text"})}></${me}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${me.assign({text:"Short text"})}></${me}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${me.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${me}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${me.assign({text:"Long text that you can copy",copyOnClick:!0})}></${me}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${me} {
                    ${me.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${me.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${me.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${me.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${me.assign({text:"long text with custom colors",copyOnClick:!0})}></${me}>
                `}})}}),Tr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Ee={basic:Tr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Tr.slice(1)],disabled:[{...Tr[0],disabled:!0},...Tr.slice(1)],noLabels:L2(Tr,e=>({...e,label:void 0}))},K4=U({title:G.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Ee.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Ee.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Ee.basic[0].value},styles:p`
                ${G} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Ee.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Ee.longText[0].value},styles:p`
                ${G} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Ee.longText,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Ee.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Ee.noLabels,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Ee.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Ee.disabled,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Ee.basic[0].value},styles:p`
                ${G} {
                    ${G.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${G.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${G.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${G.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${G.assign({entries:Ee.basic,value:t.selectedValue})}
                        ${T(G.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${G}>
                `}})}}),et=p`
    ${_} {
        width: 300px;
    }
`,Ci={min:10,max:50},X4=U({title:_.tagName,parent:ae,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,...Ci})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,...Ci,suffix:"ICP"})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${et}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,min:-100,max:100})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${et}

                ${_} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({value:t.value,...Ci})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${et}

                ${_} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${_.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}})}}),Q4=[{title:"default",inputs:{}},{title:"text only",inputs:{style:rh.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Hc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],ew=U({title:Ti.tagName,parent:ae,controls:{Text:{controlType:O.Text,initValue:"Toggle Button"},Icon:rs(Id.name)},elementExamplesCallback({defineExample:e}){Q4.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Hc.map(r=>!!r.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Hc.map((i,a)=>u`
                            <${Ti.assign({...t.inputs,toggled:r.buttonStates[a],icon:qo[o.Icon],text:o.Text,...Ji(i.inputs,["toggled"])})}
                                ${T("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Ti}>
                        `)}})})}}),tw=U({parent:ae,title:zn.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:p`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${$.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,renderCallback(){return u`
                        <${zn.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${zn}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:u`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),rw=U({parent:ae,title:Or.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${zn.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${Or}>This is a tooltip.</${Or}>
                `}})}}),nw=[tw,rw],ow=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:p`
            :host {
                width: 500px;
            }

            ${Ir} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:p``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],iw=U({title:Ir.tagName,parent:ae,elementExamplesCallback({defineExample:e}){ow.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:p`
                    ${t.extraStyles??p``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Ir.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${T(Ir.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${Ir}>
                    `}})})}}),ih=U({title:"Icons",parent:void 0,controls:oh}),aw=Object.entries(ut).map(([e,t])=>U({title:e,parent:ih,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${vo.assign({icon:n})}
                                    style=${jn(o)}
                                ></${vo}>
                            `}}))}}));function ah(e){const t=sw(e),r=sr(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Ke(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function sw(e){typeof e!="string"&&(e=String(e));const n=`{"${N2(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const ns=U({title:"Styles",parent:void 0}),lw=p`
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
        color: ${$.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${$.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${Y.h2Font};
    }
`;function cw(e,t,r){const n=ah(F(r));return e({title:t,styles:lw,renderCallback(){return u`
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
            `}})}const uw=U({title:"Colors",parent:ns,elementExamplesCallback({defineExample:e}){Ke($).map(t=>cw(e,t,$[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),dw=p`
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
        color: ${$.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${$.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${$.divider.foregroundColor};
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
`;function hw(e,t,r){const n=ah(r);return e({title:t,styles:dw,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Ke(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const fw=U({title:"Fonts",parent:ns,elementExamplesCallback({defineExample:e}){Ke(Y).map(t=>{const r=Y[t];return hw(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),mw=[ae,ih,ns,nh],pw=[...aw,...nw,I4,P4,N4,q4,R4,_4,uw,H4,F4,j4,Z4,fw,W4,U4,G4,Y4,J4,K4,X4,ew,iw].sort((e,t)=>e.title.localeCompare(t.title)),gw=[...mw,...pw];xo({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ri} {
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
            <${ri.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:gw,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${Ye.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${ri}>
        `}});
