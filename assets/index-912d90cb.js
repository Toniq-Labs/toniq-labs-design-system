var J0=Object.defineProperty;var K0=(e,t,r)=>t in e?J0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Do=(e,t,r)=>(K0(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function ma(e){return!!e}function X0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var ss;(function(e){e.Upper="upper",e.Lower="lower"})(ss||(ss={}));const Q0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function bo(e,t){return e?Q0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Lc(e,t){return e&&t.every(r=>bo(e,r))}function Pc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>yo(r).trim()).join(`
`))}function yo(e){return e?e instanceof Error?e.message:bo(e,"message")?String(e.message):String(e):""}function eh(e){return e instanceof Error?e:new Error(yo(e))}function ls(e){return!!e&&typeof e=="object"}function Un(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function th(e){return Array.isArray(e)?"array":typeof e}function $o(e,t){return th(e)===t}function cs({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const us="Failed to compare objects using JSON.stringify";function ds(e,t,r){return cs({source:e,errorHandler(n){if(r)return"";throw n}})===cs({source:t,errorHandler(n){if(r)return"";throw n}})}function ut(e,t,r={}){try{return e===t?!0:ls(e)&&ls(t)?ds(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ut(e[o],t[o])):!1:ds(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=eh(n);throw o.message.startsWith(us)||(o.message=`${us}: ${o.message}`),o}}function rh(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function nh(e){return Un(e).filter(t=>isNaN(Number(t)))}function oh(e){return nh(e).map(r=>e[r])}function ih(e,t){return oh(t).includes(e)}function ah(e,t){return Un(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function sh(e,t){return ah(e,r=>!t.includes(r))}function Wn(e,t){let r=!1;const n=Un(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Un(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function hs(e,t){try{return lh(e,t),!0}catch{return!1}}function lh(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function qc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${qc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function ch(e){const t=qc();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const uh=globalThis.crypto;function dh(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return uh.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function hh(e,t){return bo(e,"entryType")&&e.entryType===t}var he;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(he||(he={}));function Ht(e,t){return e.controlType===t}var N;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(N||(N={}));const Nc=Symbol("any-type"),fh={[N.Checkbox]:!1,[N.Color]:"",[N.Dropdown]:"",[N.Hidden]:Nc,[N.Number]:0,[N.Text]:""};function mh(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=fh[o.controlType];i!==Nc&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function pa(e,t){const r=Gn(e.title);return e.parent?[...pa(e.parent,!1),Gn(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Gn(e){return X0(e).toLowerCase().replaceAll(/\s/g,"-")}function ph({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Z(e){const t={...e,entryType:he.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:he.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ma)};r.add(n.title),t.elementExamples[Gn(o.title)]=o}}),t}var Ue;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Ue||(Ue={}));var fs;(function(e){e.Upper="upper",e.Lower="lower"})(fs||(fs={}));function gh(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Oc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Oc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function Mi(e=1){const t=Oc();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function vh(e){return wh(e,1)}async function wh(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{gh(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const In=window,ga=In.ShadowRoot&&(In.ShadyCSS===void 0||In.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,va=Symbol(),ms=new WeakMap;let Bc=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==va)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ga&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ms.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ms.set(r,t))}return t}toString(){return this.cssText}};const q=e=>new Bc(typeof e=="string"?e:e+"",void 0,va),Ln=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Bc(r,e,va)},bh=(e,t)=>{ga?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=In.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},ps=ga?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return q(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _o;const Yn=window,gs=Yn.trustedTypes,yh=gs?gs.emptyScript:"",vs=Yn.reactiveElementPolyfillSupport,Ai={toAttribute(e,t){switch(t){case Boolean:e=e?yh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Dc=(e,t)=>t!==e&&(t==t||e==e),Ho={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Dc},Ei="finalized";let Zt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Ho){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ho}static finalize(){if(this.hasOwnProperty(Ei))return!1;this[Ei]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(ps(o))}else t!==void 0&&r.push(ps(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return bh(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Ho){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ai).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Ai;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Dc)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Zt[Ei]=!0,Zt.elementProperties=new Map,Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},vs==null||vs({ReactiveElement:Zt}),((_o=Yn.reactiveElementVersions)!==null&&_o!==void 0?_o:Yn.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ro;const Jn=window,Qt=Jn.trustedTypes,ws=Qt?Qt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Kn="$lit$",Qe=`lit$${(Math.random()+"").slice(9)}$`,wa="?"+Qe,$h=`<${wa}>`,qt=document,Dr=()=>qt.createComment(""),_r=e=>e===null||typeof e!="object"&&typeof e!="function",_c=Array.isArray,Hc=e=>_c(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Fo=`[ 	
\f\r]`,gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bs=/-->/g,ys=/>/g,$t=RegExp(`>|${Fo}(?:([^\\s"'>=/]+)(${Fo}*=${Fo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$s=/'/g,ks=/"/g,Rc=/^(?:script|style|textarea|title)$/i,Fc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),kh=Fc(1),xh=Fc(2),Te=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),xs=new WeakMap,At=qt.createTreeWalker(qt,129,null,!1);function Vc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ws!==void 0?ws.createHTML(t):t}const jc=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=gr;for(let s=0;s<r;s++){const l=e[s];let c,d,f=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===gr?d[1]==="!--"?a=bs:d[1]!==void 0?a=ys:d[2]!==void 0?(Rc.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=$t):d[3]!==void 0&&(a=$t):a===$t?d[0]===">"?(a=o??gr,f=-1):d[1]===void 0?f=-2:(f=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?$t:d[3]==='"'?ks:$s):a===ks||a===$s?a=$t:a===bs||a===ys?a=gr:(a=$t,o=void 0);const g=a===$t&&e[s+1].startsWith("/>")?" ":"";i+=a===gr?l+$h:f>=0?(n.push(c),l.slice(0,f)+Kn+l.slice(f)+Qe+g):l+Qe+(f===-2?(n.push(void 0),s):g)}return[Vc(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Hr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=jc(t,r);if(this.el=Hr.createElement(c,n),At.currentNode=this.el.content,r===2){const f=this.el.content,p=f.firstChild;p.remove(),f.append(...p.childNodes)}for(;(o=At.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const p of o.getAttributeNames())if(p.endsWith(Kn)||p.startsWith(Qe)){const g=d[a++];if(f.push(p),g!==void 0){const v=o.getAttribute(g.toLowerCase()+Kn).split(Qe),b=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:b[2],strings:v,ctor:b[1]==="."?Zc:b[1]==="?"?Uc:b[1]==="@"?Wc:Jr})}else l.push({type:6,index:i})}for(const p of f)o.removeAttribute(p)}if(Rc.test(o.tagName)){const f=o.textContent.split(Qe),p=f.length-1;if(p>0){o.textContent=Qt?Qt.emptyScript:"";for(let g=0;g<p;g++)o.append(f[g],Dr()),At.nextNode(),l.push({type:2,index:++i});o.append(f[p],Dr())}}}else if(o.nodeType===8)if(o.data===wa)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(Qe,f+1))!==-1;)l.push({type:7,index:i}),f+=Qe.length-1}i++}}static createElement(t,r){const n=qt.createElement("template");return n.innerHTML=t,n}}function Nt(e,t,r=e,n){var o,i,a,s;if(t===Te)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=_r(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Nt(e,l._$AS(e,t.values),l,n)),t}class zc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:qt).importNode(n,!0);At.currentNode=i;let a=At.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new sr(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new Gc(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=At.nextNode(),s++)}return At.currentNode=qt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class sr{constructor(t,r,n,o){var i;this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Nt(this,t,r),_r(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==Te&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Hc(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==se&&_r(this._$AH)?this._$AA.nextSibling.data=t:this.$(qt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Hr.createElement(Vc(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new zc(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=xs.get(t.strings);return r===void 0&&xs.set(t.strings,r=new Hr(t)),r}T(t){_c(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new sr(this.k(Dr()),this.k(Dr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Jr{constructor(t,r,n,o,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=se}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Nt(this,t,r,0),a=!_r(t)||t!==this._$AH&&t!==Te,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Nt(this,s[n+l],r,l),c===Te&&(c=this._$AH[l]),a||(a=!_r(c)||c!==this._$AH[l]),c===se?t=se:t!==se&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Zc extends Jr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}const Th=Qt?Qt.emptyScript:"";class Uc extends Jr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==se?this.element.setAttribute(this.name,Th):this.element.removeAttribute(this.name)}}class Wc extends Jr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=Nt(this,t,r,0))!==null&&n!==void 0?n:se)===Te)return;const o=this._$AH,i=t===se&&o!==se||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==se&&(o===se||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Gc{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Nt(this,t)}}const Sh={O:Kn,P:Qe,A:wa,C:1,M:jc,L:zc,R:Hc,D:Nt,I:sr,V:Jr,H:Uc,N:Wc,U:Zc,F:Gc},Ts=Jn.litHtmlPolyfillSupport;Ts==null||Ts(Hr,sr),((Ro=Jn.litHtmlVersions)!==null&&Ro!==void 0?Ro:Jn.litHtmlVersions=[]).push("2.8.0");const Ch=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new sr(t.insertBefore(Dr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vo,jo;let Ir=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ch(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Te}};Ir.finalized=!0,Ir._$litElement$=!0,(Vo=globalThis.litElementHydrateSupport)===null||Vo===void 0||Vo.call(globalThis,{LitElement:Ir});const Ss=globalThis.litElementPolyfillSupport;Ss==null||Ss({LitElement:Ir});((jo=globalThis.litElementVersions)!==null&&jo!==void 0?jo:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bt=e=>(...t)=>({_$litDirective$:e,values:t});let rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Mh}=Sh,Cs=()=>document.createComment(""),vr=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Cs(),i),s=o.insertBefore(Cs(),i);r=new Mh(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},kt=(e,t,r=e)=>(e._$AI(t,r),e),Ah={},Eh=(e,t=Ah)=>e._$AH=t,Ih=e=>e._$AH,zo=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=bt(class extends rt{constructor(e){var t;if(super(e),e.type!==Kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Te}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Lh=bt(class extends rt{constructor(e){if(super(e),e.type!==Kr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=Ih(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let d,f,p=0,g=i.length-1,v=0,b=a.length-1;for(;p<=g&&v<=b;)if(i[p]===null)p++;else if(i[g]===null)g--;else if(l[p]===s[v])c[v]=kt(i[p],a[v]),p++,v++;else if(l[g]===s[b])c[b]=kt(i[g],a[b]),g--,b--;else if(l[p]===s[b])c[b]=kt(i[p],a[b]),vr(e,c[b+1],i[p]),p++,b--;else if(l[g]===s[v])c[v]=kt(i[g],a[v]),vr(e,i[p],i[g]),g--,v++;else if(d===void 0&&(d=Ms(s,v,b),f=Ms(l,p,g)),d.has(l[p]))if(d.has(l[g])){const y=f.get(s[v]),x=y!==void 0?i[y]:null;if(x===null){const M=vr(e,i[p]);kt(M,a[v]),c[v]=M}else c[v]=kt(x,a[v]),vr(e,i[p],x),i[y]=null;v++}else zo(i[g]),g--;else zo(i[p]),p++;for(;v<=b;){const y=vr(e,c[b+1]);kt(y,a[v]),c[v++]=y}for(;p<=g;){const y=i[p++];y!==null&&zo(y)}return this.ut=s,Eh(e,c),Te}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ii=class extends rt{constructor(t){if(super(t),this.et=se,t.type!==Kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===se||t==null)return this.ft=void 0,this.et=t;if(t===Te)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Ii.directiveName="unsafeHTML",Ii.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class As extends Ii{}As.directiveName="unsafeSVG",As.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ph(e,t,r){return e?t():r==null?void 0:r()}var qh=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),f,p=!1,g=r.length-1;g>=0;g--){var v={};for(var b in n)v[b]=b==="access"?{}:n[b];for(var b in n.access)v.access[b]=n.access[b];v.addInitializer=function(x){if(p)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(x||null))};var y=(0,r[g])(s==="accessor"?{get:d.get,set:d.set}:d[l],v);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(f=a(y.get))&&(d.get=f),(f=a(y.set))&&(d.set=f),(f=a(y.init))&&o.unshift(f)}else(f=a(y))&&(s==="field"?o.unshift(f):d[l]=f)}c&&Object.defineProperty(c,n.name,d),p=!0},Nh=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Oh=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Bh(){function e(t,r){return t}return e}let Yc=(()=>{let e=[Bh()],t,r=[],n,o=Ir;return n=class extends o{},Oh(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;qh(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),Nh(n,r)})(),n})();function Dh(e){return!!e}const _h={capitalizeFirstLetter:!1};function Hh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Rh(e,t){return t.capitalizeFirstLetter?Hh(e):e}function Fh(e,t=_h){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Rh(n,t)}var Es;(function(e){e.Upper="upper",e.Lower="lower"})(Es||(Es={}));const Vh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ba(e,t){return e?Vh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function jh(e){return e?e instanceof Error?e.message:ba(e,"message")?String(e.message):String(e):""}function zh(e){return e instanceof Error?e:new Error(jh(e))}function Zh(e){return!!e&&typeof e=="object"}function Ot(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Jc(e,t){let r=!1;const n=Ot(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ot(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}var er;(function(e){e.Upper="upper",e.Lower="lower"})(er||(er={}));function Uh(e){return e.toLowerCase()!==e.toUpperCase()}function Is(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Uh(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===er.Upper&&o!==o.toUpperCase())return!1;if(t===er.Lower&&o!==o.toLowerCase())return!1}return!0}function Wh(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Is(a,er.Lower,{blockNoCaseCharacters:!0})||Is(s,er.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Gh(e){return!!e&&typeof e=="object"}function Ls(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Yh(e){return Array.isArray(e)?"array":typeof e}function Jh(e,t){return Yh(e)===t}function Kh(e,t){let r=!1;const n=Ls(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ls(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function nt(e){if(Gh(e))return Kh(e,(r,n)=>{if(!Jh(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Wh(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?q(r):r.startsWith("-")?Ln`-${q(r)}`:Ln`--${q(r)}`;return{name:a,value:Ln`var(${a}, ${q(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${nt.name}' function.`)}function Li({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xh=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Qh=(e,t,r)=>{t.constructor.createProperty(r,e)};function Kc(e){return(t,r)=>r!==void 0?Qh(e,t,r):Xh(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zo;((Zo=window.HTMLSlotElement)===null||Zo===void 0?void 0:Zo.prototype.assignedElements)!=null;function ef(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Pi(e){return ba(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function ya(e){return ba(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Xc(e){return e.map(t=>Pi(t)?t.definition:t).filter(t=>ya(t))}const Qc=new WeakMap;function tf(e,t){var o;const r=Xc(t);return(o=eu(Qc,[e,...r]).value)==null?void 0:o.template}function rf(e,t,r){const n=Xc(t);return ru(Qc,[e,...n],r)}function eu(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=tu(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?eu(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function tu(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ru(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=tu(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),ru(l,t,r,n+1)}const nf=new WeakMap;function nu(e,t,r){const n=tf(e,t),o=n??r();if(!n){const s=rf(e,t,o);if(s.result)nf.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=ef(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function ou(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const f=o.length-1,p=o[f],g=d-1,v=t[g];n&&n(c);let b,y=[];if(typeof p=="string"&&(b=r(p,c,v),b)){o[f]=p+b.replacement,a.push(g);const M=b.getExtraValues;y=M?M(v):[],y.length&&M?(o[f]+=" ",y.forEach((D,z)=>{z&&o.push(" ")}),s.push(D=>{const z=D[g],ie=M(z);return{index:g,values:ie}}),o.push(c)):o[f]+=c}b||o.push(c);const x=e.raw[d];b?(i[f]=i[f]+b.replacement+x,y.length&&y.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function of(...[e,t,r]){if(ya(r))return{replacement:r.tagName,getExtraValues:void 0}}function af(e,t){return ou(e,t,of)}function m(e,...t){const r=nu(e,t,()=>af(e,t));return Ln(r.strings,...r.values)}const $a=Symbol("key for ignoring inputs not having been set yet"),sf={[$a]:!0,allowPolymorphicState:!1};function iu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Yc?!0:iu(r)}function au(e,t){const r=e.instanceState;Ot(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Ot(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),lf(e)}function lf(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ps(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class cf extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function ka(){return e=>{var t;return t=class extends cf{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function J(){return ka()}function uf(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=ka()(r);return t[r]=n,t},{}):{}}const df="_elementVirStateSetup";function hf(e){return Zh(e)?df in e:!1}function ff(e,t){return e.includes(t)}var qs;(function(e){e.Upper="upper",e.Lower="lower"})(qs||(qs={}));const mf=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Pn(e,t){return e?mf.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Xr(e){return!!e&&typeof e=="object"}function Xn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function qi(e){return Array.isArray(e)?"array":typeof e}function Gt(e,t){return qi(e)===t}function pf(e,t){let r=!1;const n=Xn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Xn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function gf(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return qi(e)===qi(t)&&r}const xa=Symbol("and"),Ta=Symbol("or"),su=Symbol("exact"),lu=Symbol("enum"),Sa=Symbol("unknown"),cu="__vir__shape__definition__key__do__not__use__in__actual__objects";function uu(e){return Pn(e,cu)}const du="__vir__shape__specifier__key__do__not__use__in__actual__objects",vf=[xa,Ta,su,lu,Sa];function xt(...e){return Ia(e,Ta)}function wf(...e){return Ia(e,xa)}function bf(){return Ia([],Sa)}function ko(e){return Qr(e,Ta)}function Ca(e){return Qr(e,xa)}function Ma(e){return Qr(e,su)}function Aa(e){return Qr(e,lu)}function Ea(e){return Qr(e,Sa)}function Qr(e,t){const r=xo(e);return!!r&&r.specifierType===t}function Ia(e,t){return{[du]:!0,specifierType:t,parts:e}}function qn(e,t){const r=xo(t);if(r){if(Ca(r))return r.parts.every(n=>qn(e,n));if(ko(r))return r.parts.some(n=>qn(e,n));if(Ma(r))return Xr(e)?qn(e,r.parts[0]):e===r.parts[0];if(Aa(r))return Object.values(r.parts[0]).some(n=>n===e);if(Ea(r))return!0}return gf(e,t)}function xo(e){if(Xr(e)&&Pn(e,du)){if(!Pn(e,"parts")||!Gt(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Pn(e,"specifierType")||!ff(vf,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Ni(e,t=!1){return Oi(e)}function Oi(e){const t=xo(e);if(t){if(ko(t)||Ma(t))return Oi(t.parts[0]);if(Ca(t))return t.parts.reduce((r,n)=>Object.assign(r,Oi(n)),{});if(Aa(t))return Object.values(t.parts[0])[0];if(Ea(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return uu(e)?Ni(e.shape):e instanceof RegExp||Gt(e,"array")?e:Xr(e)?pf(e,(r,n)=>Ni(n)):e}function en(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Ni(e),[cu]:!0}}class _e extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function yf(e,t,r={}){try{return hu(e,t,r),!0}catch{return!1}}function hu(e,t,r={}){Mt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function fu(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Mt(e,t,r,n){if(Ea(t))return!0;if(uu(t))return Mt(e,t.shape,r,n);const o=fu(r);if(xo(e))throw new _e(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!qn(e,t))throw new _e(`Subject does not match shape definition at key ${o}`);if(Gt(t,"function"))return Gt(e,"function");if(Xr(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(ko(t))l=t.parts.some(c=>{try{const d=Mt(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof _e)return!1;throw d}});else if(Ca(t))l=t.parts.every(c=>{try{const d=Mt(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof _e)return!1;throw d}});else if(Ma(t)){const c=Mt(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(Aa(t))throw new _e(`Cannot compare an enum specifier to an object at ${o}`);if(Gt(t,"array")&&Gt(a,"array"))l=a.every((c,d)=>{const f=t.some(p=>{try{return Mt(c,p,[...r,d],n),!0}catch(g){if(g instanceof _e)return!1;throw g}});return s[d]=f,f});else{const c=$f({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(f=>!s[f]).join(",")}`;throw new _e(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new _e(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function $f({keys:e,options:t,shape:r,subject:n}){const o=fu(e),i={};if(Xr(r)){const a=new Set(Xn(n)),s=new Set(Xn(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new _e(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var p;const c=r[l],d=ko(c)?c.parts.includes(void 0):!1,f=((p=c==null?void 0:c.includes)==null?void 0:p.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!f)throw new _e(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];Mt(c,d,[...e,l],t),i[l]=!0})}else throw new _e(`shape definition at ${o} was not an object.`);return i}const kf=en({addListener(){return!1},removeListener(){return!1},value:bf()});function Uo(e){return yf(e,kf,{allowExtraKeys:!0})}function xf(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ns(e,t){const r=e;function n(a){t?xf(a,e,e.tagName):Kc()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=hf(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function f(v){a[s]=v,r[s]=v}const p=e.observablePropertyListenerMap[s];if(d!==c&&Uo(d)&&(p!=null&&p.length)&&d.removeListener(p),Uo(c))if(p)c.addListener(p);else{let v=function(){e.requestUpdate()};var g=v;e.observablePropertyListenerMap[s]=v,c.addListener(v)}else Uo(d)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function Tf(e){return e?Jc(e,t=>t):{}}function Sf({hostClassNames:e,cssVars:t}){return{hostClasses:Jc(e,(r,n)=>({name:q(n),selector:q(`:host(.${n})`)})),cssVars:t}}function Cf({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Ot(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Mf(e,t){function r(o){Ot(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Af=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function To(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...sf,...e.options},n=uf(e.events),o=Tf(e.hostClasses);e.hostClasses&&Ps(e.tagName,e.hostClasses),e.cssVars&&Ps(e.tagName,e.cssVars);const i=e.cssVars?nt(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Sf({hostClassNames:o,cssVars:i})):e.styles||m``,s=e.renderCallback;function l(...[d]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:d}}const c=(t=class extends Yc{createRenderParams(){return Mf(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{iu(this)&&!this.haveInputsBeenSet&&!r[$a]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${To.name}' to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const f=s(d);if(f instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Cf({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},f}catch(d){const f=zh(d);throw f.message=`Failed to render '${e.tagName}': ${f.message}`,this.lastRenderError=f,f}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();if(e.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();if(e.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(d){au(this,d)}constructor(){var f;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Ns(this,!1),this.instanceState=Ns(this,!((f=e.options)!=null&&f.allowPolymorphicState));const d=e.stateInitStatic||{};Ot(d).forEach(p=>{Kc()(this,p),this.instanceState[p]=d[p]}),this.definition=c}},Af(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Fh(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function mu(){return e=>To({...e,options:{[$a]:!1,...e.options}})}function La(e,t){return Rr(e,t),e.element}function Ef(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Rr(e,t){const r=Ef(e),n=r?`: in ${r}`:"";if(e.type!==Kr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function If(e,t){return t?Os(e,t):Os(void 0,e)}const Os=bt(class extends rt{constructor(e){super(e),this.element=La(e,"assign")}render(e,t){return au(this.element,t),Te}});function Lf(e){const t=bt(class extends rt{constructor(r){super(r),this.element=La(r,"testId")}render(r){return this.element.setAttribute(e,r),Te}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function S(e,t){return Pf(e,t)}const Pf=bt(class extends rt{constructor(e){super(e),this.element=La(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Te}}),Bs="onDomCreated",Ds=bt(class extends rt{constructor(e){super(e),Rr(e,Bs)}update(e,[t]){Rr(e,Bs);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Wo="onResize",Fr=bt(class extends rt{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Rr(e,Wo)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Wo} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Rr(e,Wo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function ke(e,t,r){return Ph(e,()=>t,()=>r)}const{attributeDirective:qf,attributeSelector:U4,attributeName:W4}=Lf("data-test-id");function Pa(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),mu()(r(n))),defineElementNoInputs:n=>(t(n),To(r(n)))}}function Nf(...[e,t,r]){const n=Pi(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ya(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const d=Pi(c)?c.inputs:void 0;return[o&&d?If(d):void 0].filter(Dh)}}}function Of(e){}function Bf(e){return ou(e.strings,e.values,Nf,Of)}function u(e,...t){const r=kh(e,...t),n=nu(e,t,()=>Bf(r));return{...r,strings:n.strings,values:n.values}}var _s;(function(e){e.Upper="upper",e.Lower="lower"})(_s||(_s={}));const Df={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},_f=Object.keys(Df),Hf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[..._f,...Hf];function xr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Rf={[he.ElementExample]:()=>[],[he.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...mh(e.controls,e.title)].filter(ma),[he.Root]:()=>[]},Qn="_isBookTreeNode",pu=new Map;function Ff(e){return pu.get(e)}function Vf(e,t){rh(pu,e,()=>t)}function Yt(e,t){return!!(gu(e)&&e.entry.entryType===t)}function gu(e){return!!(Lc(e,[Qn,"entry"])&&e[Qn])}function jf(){return{[Qn]:!0,entry:{entryType:he.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function zf({entries:e,debug:t}){const r=Ff(e);if(r)return r;const n=jf();e.forEach(a=>qa({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=vu(n),i={tree:n,flattenedNodes:o};return Vf(e,i),t&&console.info("element-book tree:",n),i}function Zf(e,t,r){if(!t.parent)return e;const n=Bi(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),qa({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Bi(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${pa(t,!1)}`);return o}function qa({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Rf[t.entryType](t);t.errors.push(...o);const i=Zf(e,t,r),a=Gn(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Qn]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,hh(t,he.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>qa({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Bi(e,t){const r=gu(e)?e.fullUrlBreadcrumbs.slice(0,-1):pa(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function vu(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>vu(o));return[e,...r].flat()}function Na(e,t){return Oa(e,["",...t],void 0)}function Oa(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Oa(i,n,r);return{...e.controls,...a}}function Uf(e,t,r){const n={...e};return Oa(n,["",...t],r),n}function wu(e,t){const r=(t==null?void 0:t.controls)||(Yt(e,he.Page)?Wn(e.entry.controls,(o,i)=>i.initValue):{});return{children:Wn(e.children,(o,i)=>{var a;return wu(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Wf({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Gf=dh(32);function Nn(e){return e.join(Gf)}function bu(e){if(!e.length)return[];const t=Nn(e),r=bu(e.slice(0,-1));return[t,...r]}const Yf=["error","errors"];function Jf(e){return Yf.includes(e)}function Kf({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Nn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Jf(t),a=Nn(o.fullUrlBreadcrumbs);if(Wf({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=bu(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Nn(o.fullUrlBreadcrumbs),a=r[i];if(!$o(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var ge;(function(e){e.Search="search",e.Book="book"})(ge||(ge={}));function Di(e){return e[0]===ge.Book?"":e[1]?decodeURIComponent(e[1]):""}const tr={hash:void 0,paths:[ge.Book],search:void 0},Xf=0;function Ba(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Xf)}class So extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Hs extends So{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Vr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Qf=globalThis.history.pushState;function Rs(...e){const t=Qf.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Vr)),t}const e1=globalThis.history.replaceState;function Fs(...e){const t=e1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Vr)),t}function t1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Rs)throw new Hs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Fs)throw new Hs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Rs,globalThis.history.replaceState=Fs,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Vr))})}}function Co(e){return!!e}var Vs;(function(e){e.Upper="upper",e.Lower="lower"})(Vs||(Vs={}));function r1(e,t){return e.split(t)}function n1(e){return e?e instanceof Error?e.message:eo(e,"message")?String(e.message):String(e):""}function o1(e){return!!e&&typeof e=="object"}const i1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function eo(e,t){return e?i1.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function js(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function yu(e,t,r=!1,n={}){const o=js(e),i=new Set(js(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!eo(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||$u(l,c,s,r,n[a]??{})})}function $u(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{eo(t,"constructor")&&(!eo(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(f=>{try{$u(l,f,r,n,o);return}catch(p){return new Error(`entry at index "${c}" did not match expected shape: ${n1(p)}`)}}).filter(Co).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):o1(t)&&yu(e,t,n,o)}function a1(e){return Array.isArray(e)?"array":typeof e}function s1(e,t){return a1(e)===t}function l1({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function c1(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(Co);return t.length?`?${t.join("&")}`:""}function u1(e){return l1({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=r1(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(Co)}function d1(e,t){const r=s1(e,"string")?new URL(e):e,n=u1(r.search),o=Object.fromEntries(n);return t&&yu(o,t),o}function h1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?d1(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function ku(e){return e.replace(/(?:^\/|\/+$)/g,"")}function xu({routeBase:e,windowPath:t}){if(!e)return"";const r=ku(e);if(Tu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?xu({routeBase:n,windowPath:t}):""}function Tu({routeBase:e,windowPath:t}){const r=ku(e);return r?t.startsWith(`/${r}`):!1}class f1 extends So{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Su(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const zs=6;function Zs(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>zs)throw new f1(`Route sanitization depth has exceed the max of ${zs} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Su(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Go extends So{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function m1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Go(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Go(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Go(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function p1(e,t,r=!1){const n=Cu(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Cu(e,t){var s;const r=Tu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?c1(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(Co).join("/")}${n}${i}`}function g1(e={}){m1(e),t1();const t=e.routeBase?xu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Zs(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&Su(l,d)))return p1(d,t,a)},createRoutesUrl(i){return Cu(i,t)},getCurrentRawRoutes(){return h1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new So(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Vr,n),r=!0),i&&Zs(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(Vr,n),r=!1),a},sanitizationDepth:0};return o}function v1(e){return g1({routeBase:e,routeSanitizer(t){return{paths:w1(t.paths),hash:void 0,search:void 0}}})}function w1(e){const t=e[0];if(ih(t,ge)){if(t===ge.Book)return[ge.Book,...e.slice(1)];if(t===ge.Search)return e[1]?[t,e[1]]:[ge.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return tr.paths}const R=nt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),b1={nav:{hover:{background:R["element-book-nav-hover-background-color"],foreground:R["element-book-nav-hover-foreground-color"]},active:{background:R["element-book-nav-active-background-color"],foreground:R["element-book-nav-active-foreground-color"]},selected:{background:R["element-book-nav-selected-background-color"],foreground:R["element-book-nav-selected-foreground-color"]}},accent:{icon:R["element-book-accent-icon-color"]},page:{background:R["element-book-page-background-color"],backgroundFaint1:R["element-book-page-background-faint-level-1-color"],backgroundFaint2:R["element-book-page-background-faint-level-2-color"],foreground:R["element-book-page-foreground-color"],foregroundFaint1:R["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:R["element-book-page-foreground-faint-level-2-color"]}};function y1(e,t){Mu(e,t,b1)}function _i(e){return bo(e,"_$cssResult$")}function Us(e){return Lc(e,["name","value","default"])&&$o(e.default,"string")&&_i(e.name)&&_i(e.value)}function Mu(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(_i(o)){if(!Us(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Li({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Us(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Mu(e,o,i)}})}function le(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function tn(e){return ht(e)==="string"}function ht(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function to(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Au(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Eu(e){return e[e.length-1]}function ro(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Iu(e,t,r){return(r-e)/(t-e)}function Da(e,t,r){return ro(t[0],t[1],Iu(e[0],e[1],r))}function Lu(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var $1=Object.freeze({__proto__:null,interpolate:ro,interpolateInv:Iu,isString:tn,last:Eu,mapRange:Da,multiplyMatrices:le,parseCoordGrammar:Lu,parseFunction:Au,toPrecision:to,type:ht});class k1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const mt=new k1;var We={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Fe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Hi(e){return Array.isArray(e)?e:Fe[e]}function no(e,t,r,n={}){if(e=Hi(e),t=Hi(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(mt.run("chromatic-adaptation-start",o),o.M||(o.W1===Fe.D65&&o.W2===Fe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Fe.D50&&o.W2===Fe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),mt.run("chromatic-adaptation-end",o),o.M)return le(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const x1=75e-6,ye=class ye{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?ye.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Hi(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:T1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),mt.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=x1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ws(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Ws(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=ye.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=ye.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(ye.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof ye)return t;if(ht(t)==="string"){let o=ye.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return ye.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ht(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=ye.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ht(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=ye.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Do(ye,"registry",{}),Do(ye,"DEFAULT_FORMAT",{type:"functions",name:"color"});let A=ye;function T1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Ws(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Lu(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Da(s,l,i)),i=to(i,o),c&&(i+=c),i})}return e}var Pe=new A({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class we extends A{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Pe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=le(t.toXYZ_M,r);return this.white!==this.base.white&&(n=no(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=no(this.base.white,this.white,r),le(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Pu(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(mt.run("parse-start",r),r.color)return r.color;if(r.parsed=Au(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let p of A.all){let g=p.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const v=Object.keys(p.coords).map((b,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:p.id,coords:v,alpha:d}}}let f="";if(c in A.registry){let p=(s=(a=(i=A.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;p&&(f=`Did you mean color(${p})?`)}throw new TypeError(`Cannot parse color(${c}). `+(f||"Missing a plugin?"))}else for(let c of A.all){let d=c.getFormat(l);if(d&&d.type==="function"){let f=1;(d.lastAlpha||Eu(r.parsed.args).alpha)&&(f=r.parsed.args.pop());let p=r.parsed.args,g;return d.coordGrammar&&(g=Object.entries(c.coords).map(([v,b],y)=>{var ue;let x=d.coordGrammar[y],M=(ue=p[y])==null?void 0:ue.type,D=x.find(re=>re==M);if(!D){let re=b.name||v;throw new TypeError(`${M} not allowed for ${re} in ${l}()`)}let z=D.range;M==="<percentage>"&&(z||(z=[0,1]));let ie=b.range||b.refRange;return z&&ie&&(p[y]=Da(z,ie,p[y])),D})),t&&Object.assign(t,{formatId:d.name,types:g}),{spaceId:c.id,coords:p,alpha:f}}}}else for(let l of A.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let f=d.parse(r.str);if(f)return f.alpha??(f.alpha=1),t&&(t.formatId=c),f}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function j(e){if(!e)throw new TypeError("Empty color reference");tn(e)&&(e=Pu(e));let t=e.space||e.spaceId;return t instanceof A||(e.space=A.get(t)),e.alpha===void 0&&(e.alpha=1),e}function rn(e,t){return t=A.get(t),t.from(e)}function qe(e,t){let{space:r,index:n}=A.resolveCoord(t,e.space);return rn(e,r)[n]}function qu(e,t,r){return t=A.get(t),e.coords=t.to(e.space,r),e}function pt(e,t,r){if(e=j(e),arguments.length===2&&ht(arguments[1])==="object"){let n=arguments[1];for(let o in n)pt(e,o,n[o])}else{typeof r=="function"&&(r=r(qe(e,t)));let{space:n,index:o}=A.resolveCoord(t,e.space),i=rn(e,n);i[o]=r,qu(e,n,i)}return e}var _a=new A({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Pe,fromBase:e=>no(Pe.white,"D50",e),toBase:e=>no("D50",Pe.white,e),formats:{color:{}}});const S1=216/24389,Gs=24/116,dn=24389/27;let Yo=Fe.D50;var $e=new A({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yo,base:_a,fromBase(e){let r=e.map((n,o)=>n/Yo[o]).map(n=>n>S1?Math.cbrt(n):(dn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Gs?Math.pow(t[0],3):(116*t[0]-16)/dn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/dn,t[2]>Gs?Math.pow(t[2],3):(116*t[2]-16)/dn].map((n,o)=>n*Yo[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Mo(e){return(e%360+360)%360}function C1(e,t){if(e==="raw")return t;let[r,n]=t.map(Mo),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var jr=new A({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:$e,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Mo(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Ys=25**7,oo=Math.PI,Js=180/oo,Rt=oo/180;function Ri(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=$e.from(e),l=jr.from($e,[i,a,s])[1],[c,d,f]=$e.from(t),p=jr.from($e,[c,d,f])[1];l<0&&(l=0),p<0&&(p=0);let v=((l+p)/2)**7,b=.5*(1-Math.sqrt(v/(v+Ys))),y=(1+b)*a,x=(1+b)*d,M=Math.sqrt(y**2+s**2),D=Math.sqrt(x**2+f**2),z=y===0&&s===0?0:Math.atan2(s,y),ie=x===0&&f===0?0:Math.atan2(f,x);z<0&&(z+=2*oo),ie<0&&(ie+=2*oo),z*=Js,ie*=Js;let ue=c-i,re=D-M,O=ie-z,ce=z+ie,fr=Math.abs(O),Se;M*D===0?Se=0:fr<=180?Se=O:O>180?Se=O-360:O<-180?Se=O+360:console.log("the unthinkable has happened");let _t=2*Math.sqrt(D*M)*Math.sin(Se*Rt/2),mr=(i+c)/2,Bo=(M+D)/2,ns=Math.pow(Bo,7),Ye;M*D===0?Ye=ce:fr<=180?Ye=ce/2:ce<360?Ye=(ce+360)/2:Ye=(ce-360)/2;let os=(mr-50)**2,U0=1+.015*os/Math.sqrt(20+os),is=1+.045*Bo,pr=1;pr-=.17*Math.cos((Ye-30)*Rt),pr+=.24*Math.cos(2*Ye*Rt),pr+=.32*Math.cos((3*Ye+6)*Rt),pr-=.2*Math.cos((4*Ye-63)*Rt);let as=1+.015*Bo*pr,W0=30*Math.exp(-1*((Ye-275)/25)**2),G0=2*Math.sqrt(ns/(ns+Ys)),Y0=-1*Math.sin(2*W0*Rt)*G0,un=(ue/(r*U0))**2;return un+=(re/(n*is))**2,un+=(_t/(o*as))**2,un+=Y0*(re/(n*is))*(_t/(o*as)),Math.sqrt(un)}const M1=75e-6;function Lr(e,t=e.space,{epsilon:r=M1}={}){e=j(e),t=A.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function zr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function gt(e,{method:t=We.gamut_mapping,space:r=e.space}={}){if(tn(arguments[1])&&(r=arguments[1]),r=A.get(r),Lr(e,r,{epsilon:0}))return j(e);let n=Ie(e,r);if(t!=="clip"&&!Lr(e,r)){let o=gt(zr(n),{method:"clip",space:r});if(Ri(e,o)>2){let i=A.resolveCoord(t),a=i.space,s=i.id,l=Ie(n,a),d=(i.range||i.refRange)[0],f=.01,p=d,g=qe(l,s);for(;g-p>f;){let v=zr(l);v=gt(v,{space:r,method:"clip"}),Ri(l,v)-2<f?p=qe(l,s):g=qe(l,s),pt(l,s,(p+g)/2)}n=Ie(l,r)}else n=o}if(t==="clip"||!Lr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Ie(n,e.space)),e.coords=n.coords,e}gt.returns="color";function Ie(e,t,{inGamut:r}={}){e=j(e),t=A.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=gt(o)),o}Ie.returns="color";function io(e,{precision:t=We.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=j(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??A.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Lr(e)&&(s=gt(zr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>to(g,t)));let d=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(g)}let f=e.alpha;t!==null&&(f=to(f,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${f}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${p})`}return i}const A1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],E1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ao=new we({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:A1,fromXYZ_M:E1,formats:{color:{}}});const hn=1.09929682680944,Ks=.018053968510807;var Nu=new we({id:"rec2020",name:"REC.2020",base:Ao,toBase(e){return e.map(function(t){return t<Ks*4.5?t/4.5:Math.pow((t+hn-1)/hn,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ks?hn*Math.pow(t,.45)-(hn-1):4.5*t})},formats:{color:{}}});const I1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],L1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ou=new we({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:I1,fromXYZ_M:L1});const P1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],q1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Bu=new we({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:P1,fromXYZ_M:q1,formats:{color:{}}}),Xs={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Qs=Array(3).fill("<percentage> | <number>[0, 255]"),el=Array(3).fill("<number>[0, 255]");var Zr=new we({id:"srgb",name:"sRGB",base:Bu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Qs},rgb_number:{name:"rgb",commas:!0,coords:el,noAlpha:!0},color:{},rgba:{coords:Qs,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:el},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Xs.black,t.alpha=0):t.coords=Xs[e],t.coords)return t}}}}),Du=new we({id:"p3",name:"P3",base:Ou,fromBase:Zr.fromBase,toBase:Zr.toBase,formats:{color:{id:"display-p3"}}});We.display_space=Zr;if(typeof CSS<"u"&&CSS.supports)for(let e of[$e,Nu,Du]){let t=e.getMinCoords(),n=io({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){We.display_space=e;break}}function N1(e,{space:t=We.display_space,...r}={}){let n=io(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!We.display_space)n=new String(n),n.color=e;else{let o=Ie(e,t);n=new String(io(o,r)),n.color=o}return n}function _u(e,t,r="lab"){r=A.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function O1(e,t){return e=j(e),t=j(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function vt(e){return qe(e,[Pe,"y"])}function Hu(e,t){pt(e,[Pe,"y"],t)}function B1(e){Object.defineProperty(e.prototype,"luminance",{get(){return vt(this)},set(t){Hu(this,t)}})}var D1=Object.freeze({__proto__:null,getLuminance:vt,register:B1,setLuminance:Hu});function _1(e,t){e=j(e),t=j(t);let r=Math.max(vt(e),0),n=Math.max(vt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const H1=.56,R1=.57,F1=.62,V1=.65,tl=.022,j1=1.414,z1=.1,Z1=5e-4,U1=1.14,rl=.027,W1=1.14;function nl(e){return e>=tl?e:e+(tl-e)**j1}function Ft(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function G1(e,t){t=j(t),e=j(e);let r,n,o,i,a,s;t=Ie(t,"srgb"),[i,a,s]=t.coords;let l=Ft(i)*.2126729+Ft(a)*.7151522+Ft(s)*.072175;e=Ie(e,"srgb"),[i,a,s]=e.coords;let c=Ft(i)*.2126729+Ft(a)*.7151522+Ft(s)*.072175,d=nl(l),f=nl(c),p=f>d;return Math.abs(f-d)<Z1?n=0:p?(r=f**H1-d**R1,n=r*U1):(r=f**V1-d**F1,n=r*W1),Math.abs(n)<z1?o=0:n>0?o=n-rl:o=n+rl,o*100}function Y1(e,t){e=j(e),t=j(t);let r=Math.max(vt(e),0),n=Math.max(vt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const J1=5e4;function K1(e,t){e=j(e),t=j(t);let r=Math.max(vt(e),0),n=Math.max(vt(t),0);return n>r&&([r,n]=[n,r]),n===0?J1:(r-n)/n}function X1(e,t){e=j(e),t=j(t);let r=qe(e,[$e,"l"]),n=qe(t,[$e,"l"]);return Math.abs(r-n)}const Q1=216/24389,ol=24/116,fn=24389/27;let Jo=Fe.D65;var Fi=new A({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Jo,base:Pe,fromBase(e){let r=e.map((n,o)=>n/Jo[o]).map(n=>n>Q1?Math.cbrt(n):(fn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ol?Math.pow(t[0],3):(116*t[0]-16)/fn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/fn,t[2]>ol?Math.pow(t[2],3):(116*t[2]-16)/fn].map((n,o)=>n*Jo[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Ko=Math.pow(5,.5)*.5+.5;function em(e,t){e=j(e),t=j(t);let r=qe(e,[Fi,"l"]),n=qe(t,[Fi,"l"]),o=Math.abs(Math.pow(r,Ko)-Math.pow(n,Ko)),i=Math.pow(o,1/Ko)*Math.SQRT2-40;return i<7.5?0:i}var On=Object.freeze({__proto__:null,contrastAPCA:G1,contrastDeltaPhi:em,contrastLstar:X1,contrastMichelson:Y1,contrastWCAG21:_1,contrastWeber:K1});function tm(e,t,r={}){tn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(On).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=j(e),t=j(t);for(let i in On)if("contrast"+n.toLowerCase()===i.toLowerCase())return On[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ru(e){let[t,r,n]=rn(e,Pe),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Fu(e){let[t,r,n]=rn(e,Pe),o=t+r+n;return[t/o,r/o]}function rm(e){Object.defineProperty(e.prototype,"uv",{get(){return Ru(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Fu(this)}})}var nm=Object.freeze({__proto__:null,register:rm,uv:Ru,xy:Fu});function om(e,t){return _u(e,t,"lab")}const im=Math.PI,il=im/180;function am(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=$e.from(e),[,s,l]=jr.from($e,[o,i,a]),[c,d,f]=$e.from(t),p=jr.from($e,[c,d,f])[1];s<0&&(s=0),p<0&&(p=0);let g=o-c,v=s-p,b=i-d,y=a-f,x=b**2+y**2-v**2,M=.511;o>=16&&(M=.040975*o/(1+.01765*o));let D=.0638*s/(1+.0131*s)+.638,z;Number.isNaN(l)&&(l=0),l>=164&&l<=345?z=.56+Math.abs(.2*Math.cos((l+168)*il)):z=.36+Math.abs(.4*Math.cos((l+35)*il));let ie=Math.pow(s,4),ue=Math.sqrt(ie/(ie+1900)),re=D*(ue*z+1-ue),O=(g/(r*M))**2;return O+=(v/(n*D))**2,O+=x/re**2,Math.sqrt(O)}const al=203;var Ha=new A({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Pe,fromBase(e){return e.map(t=>Math.max(t*al,0))},toBase(e){return e.map(t=>Math.max(t/al,0))}});const mn=1.15,pn=.66,sl=2610/2**14,sm=2**14/2610,ll=3424/2**12,cl=2413/2**7,ul=2392/2**7,lm=1.7*2523/2**5,dl=2**5/(1.7*2523),gn=-.56,Xo=16295499532821565e-27,cm=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],um=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],dm=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],hm=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Vu=new A({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ha,fromBase(e){let[t,r,n]=e,o=mn*t-(mn-1)*n,i=pn*r-(pn-1)*t,s=le(cm,[o,i,n]).map(function(p){let g=ll+cl*(p/1e4)**sl,v=1+ul*(p/1e4)**sl;return(g/v)**lm}),[l,c,d]=le(dm,s);return[(1+gn)*l/(1+gn*l)-Xo,c,d]},toBase(e){let[t,r,n]=e,o=(t+Xo)/(1+gn-gn*(t+Xo)),a=le(hm,[o,r,n]).map(function(p){let g=ll-p**dl,v=ul*p**dl-cl;return 1e4*(g/v)**sm}),[s,l,c]=le(um,a),d=(s+(mn-1)*c)/mn,f=(l+(pn-1)*d)/pn;return[d,f,c]},formats:{color:{}}}),Vi=new A({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Vu,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Mo(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function fm(e,t){let[r,n,o]=Vi.from(e),[i,a,s]=Vi.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,f=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const ju=3424/4096,zu=2413/128,Zu=2392/128,hl=2610/16384,mm=2523/32,pm=16384/2610,fl=32/2523,gm=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],vm=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],wm=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],bm=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var ji=new A({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ha,fromBase(e){let t=le(gm,e);return ym(t)},toBase(e){let t=$m(e);return le(bm,t)},formats:{color:{}}});function ym(e){let t=e.map(function(r){let n=ju+zu*(r/1e4)**hl,o=1+Zu*(r/1e4)**hl;return(n/o)**mm});return le(vm,t)}function $m(e){return le(wm,e).map(function(n){let o=Math.max(n**fl-ju,0),i=zu-Zu*n**fl;return 1e4*(o/i)**pm})}function km(e,t){let[r,n,o]=ji.from(e),[i,a,s]=ji.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const xm=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Tm=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Sm=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Cm=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var ao=new A({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Pe,fromBase(e){let r=le(xm,e).map(n=>Math.cbrt(n));return le(Sm,r)},toBase(e){let r=le(Cm,e).map(n=>n**3);return le(Tm,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Mm(e,t){let[r,n,o]=ao.from(e),[i,a,s]=ao.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var so={deltaE76:om,deltaECMC:am,deltaE2000:Ri,deltaEJz:fm,deltaEITP:km,deltaEOK:Mm};function Tr(e,t,r={}){tn(r)&&(r={method:r});let{method:n=We.deltaE,...o}=r;e=j(e),t=j(t);for(let i in so)if("deltae"+n.toLowerCase()===i.toLowerCase())return so[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Am(e,t=.25){let n=[A.get("oklch","lch"),"l"];return pt(e,n,o=>o*(1+t))}function Em(e,t=.25){let n=[A.get("oklch","lch"),"l"];return pt(e,n,o=>o*(1-t))}var Im=Object.freeze({__proto__:null,darken:Em,lighten:Am});function Uu(e,t,r=.5,n={}){[e,t]=[j(e),j(t)],ht(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return nn(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Wu(e,t,r={}){let n;Ra(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[j(e),j(t)],n=nn(e,t,l));let c=Tr(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,f=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)f=[{p:.5,color:n(.5)}];else{let p=1/(d-1);f=Array.from({length:d},(g,v)=>{let b=v*p;return{p:b,color:n(b)}})}if(o>0){let p=f.reduce((g,v,b)=>{if(b===0)return 0;let y=Tr(v.color,f[b-1].color,i);return Math.max(g,y)},0);for(;p>o;){p=0;for(let g=1;g<f.length&&f.length<s;g++){let v=f[g-1],b=f[g],y=(b.p+v.p)/2,x=n(y);p=Math.max(p,Tr(x,v.color),Tr(x,b.color)),f.splice(g,0,{p:y,color:n(y)}),g++}}}return f=f.map(p=>p.color),f}function nn(e,t,r={}){if(Ra(e)){let[l,c]=[e,t];return nn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=j(e),t=j(t),e=zr(e),t=zr(t);let s={colors:[e,t],options:r};if(n?n=A.get(n):n=A.registry[We.interpolationSpace]||e.space,o=o?A.get(o):n,e=Ie(e,n),t=Ie(t,n),e=gt(e),t=gt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,f]=[qe(e,c),qe(t,c)];[d,f]=C1(l,[d,f]),pt(e,c,d),pt(t,c,f)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((p,g)=>{let v=t.coords[g];return ro(p,v,l)}),d=ro(e.alpha,t.alpha,l),f={space:n,coords:c,alpha:d};return a&&(f.coords=f.coords.map(p=>p/d)),o!==n&&(f=Ie(f,o)),f},{rangeArgs:s})}function Ra(e){return ht(e)==="function"&&!!e.rangeArgs}We.interpolationSpace="lab";function Lm(e){e.defineFunction("mix",Uu,{returns:"color"}),e.defineFunction("range",nn,{returns:"function<color>"}),e.defineFunction("steps",Wu,{returns:"array<color>"})}var Pm=Object.freeze({__proto__:null,isRange:Ra,mix:Uu,range:nn,register:Lm,steps:Wu}),Gu=new A({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Zr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Yu=new A({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Gu,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),qm=new A({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Yu,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Nm=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Om=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ju=new we({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Nm,fromXYZ_M:Om}),Bm=new we({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ju,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Dm=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],_m=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ku=new we({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:_a,toXYZ_M:Dm,fromXYZ_M:_m});const Hm=1/512,Rm=16/512;var Fm=new we({id:"prophoto",name:"ProPhoto",base:Ku,toBase(e){return e.map(t=>t<Rm?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Hm?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Vm=new A({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:ao,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Mo(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ml=203,pl=2610/2**14,jm=2**14/2610,zm=2523/2**5,gl=2**5/2523,vl=3424/2**12,wl=2413/2**7,bl=2392/2**7;var Zm=new we({id:"rec2100pq",name:"REC.2100-PQ",base:Ao,toBase(e){return e.map(function(t){return(Math.max(t**gl-vl,0)/(wl-bl*t**gl))**jm*1e4/ml})},fromBase(e){return e.map(function(t){let r=Math.max(t*ml/1e4,0),n=vl+wl*r**pl,o=1+bl*r**pl;return(n/o)**zm})},formats:{color:{id:"rec2100-pq"}}});const yl=.17883277,$l=.28466892,kl=.55991073,Qo=3.7743;var Um=new we({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ao,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Qo:(Math.exp((t-kl)/yl)+$l)/12*Qo})},fromBase(e){return e.map(function(t){return t/=Qo,t<=1/12?Math.sqrt(3*t):yl*Math.log(12*t-$l)+kl})},formats:{color:{id:"rec2100-hlg"}}});const Xu={};mt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Qu(e.W1,e.W2,e.options.method))});mt.add("chromatic-adaptation-end",e=>{e.M||(e.M=Qu(e.W1,e.W2,e.options.method))});function Eo({id:e,toCone_M:t,fromCone_M:r}){Xu[e]=arguments[0]}function Qu(e,t,r="Bradford"){let n=Xu[r],[o,i,a]=le(n.toCone_M,e),[s,l,c]=le(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],f=le(d,n.toCone_M);return le(n.fromCone_M,f)}Eo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Eo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Eo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Eo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Fe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Fe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Wm=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Gm=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ed=new we({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Fe.ACES,toXYZ_M:Wm,fromXYZ_M:Gm,formats:{color:{}}});const vn=2**-16,ei=-.35828683,wn=(Math.log2(65504)+9.72)/17.52;var Ym=new we({id:"acescc",name:"ACEScc",coords:{r:{range:[ei,wn],name:"Red"},g:{range:[ei,wn],name:"Green"},b:{range:[ei,wn],name:"Blue"}},referred:"scene",base:ed,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-vn)*2:r<wn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(vn)+9.72)/17.52:t<vn?(Math.log2(vn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),xl=Object.freeze({__proto__:null,A98RGB:Bm,A98RGB_Linear:Ju,ACEScc:Ym,ACEScg:ed,HSL:Gu,HSV:Yu,HWB:qm,ICTCP:ji,JzCzHz:Vi,Jzazbz:Vu,LCH:jr,Lab:$e,Lab_D65:Fi,OKLCH:Vm,OKLab:ao,P3:Du,P3_Linear:Ou,ProPhoto:Fm,ProPhoto_Linear:Ku,REC_2020:Nu,REC_2020_Linear:Ao,REC_2100_HLG:Um,REC_2100_PQ:Zm,XYZ_ABS_D65:Ha,XYZ_D50:_a,XYZ_D65:Pe,sRGB:Zr,sRGB_Linear:Bu});class I{constructor(...t){let r;t.length===1&&(r=j(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:A.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new I(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=N1(this,...t);return r.color=new I(r.color),r}static get(t,...r){return t instanceof I?t:new I(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=I.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let f=c(...d);return I.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>I.get(c)));return l};t in I||(I[t]=a),o&&(I.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)I.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(I);else for(let r in t)I.defineFunction(r,t[r])}}I.defineFunctions({get:qe,getAll:rn,set:pt,setAll:qu,to:Ie,equals:O1,inGamut:Lr,toGamut:gt,distance:_u,toString:io});Object.assign(I,{util:$1,hooks:mt,WHITES:Fe,Space:A,spaces:A.registry,parse:Pu,defaults:We});for(let e of Object.keys(xl))A.register(xl[e]);for(let e in A.registry)zi(e,A.registry[e]);mt.add("colorspace-init-end",e=>{var t;zi(e.id,e),(t=e.aliases)==null||t.forEach(r=>{zi(r,e)})});function zi(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(I.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return A.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=A.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=A.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}I.extend(so);I.extend({deltaE:Tr});Object.assign(I,{deltaEMethods:so});I.extend(Im);I.extend({contrast:tm});I.extend(nm);I.extend(D1);I.extend(Pm);I.extend(On);function td(e){return Wn(e,(t,r)=>r instanceof I?q(r.toString({format:"hex"})):td(r))}const Jm="dodgerblue";function Zi(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ti({background:e,foreground:t}){return{background:e??new I(Zi(t)),foreground:t??new I(Zi(e))}}var lo;(function(e){e.Dark="dark",e.Light="light"})(lo||(lo={}));function Km(e){return e==="black"?"white":"black"}const Xm={black:{foregroundFaint1:new I("#ccc"),foregroundFaint2:new I("#eee")},white:{foregroundFaint1:new I("#ccc"),foregroundFaint2:new I("#eee")}},Qm={black:{backgroundFaint1:new I("#666"),backgroundFaint2:new I("#444")},white:{backgroundFaint1:new I("#ccc"),backgroundFaint2:new I("#fafafa")}};function Tl({themeColor:e=Jm,themeStyle:t=lo.Light}={}){const r=new I(e),n=new I(t===lo.Dark?"black":"white"),o=Zi(n),i=new I(o),a={nav:{hover:ti({background:r.clone().set({"hsl.l":93})}),active:ti({background:r.clone().set({"hsl.l":90})}),selected:ti({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Qm[Km(o)],foreground:i,...Xm[o]}};return td(a)}const co=ka()("element-book-change-route"),Sl="vira-",{defineElement:lr,defineElementNoInputs:G4}=Pa({assertInputs:e=>{if(!e.tagName.startsWith(Sl))throw new Error(`Tag name should start with '${Sl}' but got '${e.tagName}'`)}});var Cl;(function(e){e.Upper="upper",e.Lower="lower"})(Cl||(Cl={}));function rd(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${rd.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ml(e){const t=rd();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const e2="px";function t2(e){return r2({value:e,suffix:e2})}function r2({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const nd=m`
    pointer-events: none;
    opacity: 0.3;
`,ft=nt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),uo=nt({"vira-form-input-border-radius":"8px"}),ho=nt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${uo["vira-form-input-border-radius"].value} + 4px)`});function od({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=q(t2(n+r+t));return m`
        ${q(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${ho["vira-focus-outline-color"].value};
            border-radius: ${ho["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const n2=m`
    padding: 0;
    margin: 0;
`,de=m`
    ${n2};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function o2(e){return m`
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
    `}const Ne=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ee=lr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Ui;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Ui||(Ui={}));lr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Ui.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ne};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${ho["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${nd};
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
            border-radius: ${uo["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ft["vira-interaction-animation-duration"].value},
                background-color
                    ${ft["vira-interaction-animation-duration"].value},
                border-color ${ft["vira-interaction-animation-duration"].value};
        }

        ${od({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ee} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${ee.assign({icon:e.icon})}></${ee}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Wi;(function(e){e.Header="header"})(Wi||(Wi={}));lr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>m`
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
            transition: height ${ft["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:J()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?m`
                  height: ${e.contentHeight}px;
              `:m`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${S("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Wi.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Fr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const E=nt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function w({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const i2=w({name:"CloseX24Icon",svgTemplate:u`
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
    `}),a2=w({name:"Element16Icon",svgTemplate:u`
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
    `});const s2=w({name:"Loader24Icon",svgTemplate:u`
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
    `}),l2=m`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ft["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,id=w({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${l2}
        </style>
        ${s2.svgTemplate}
    `}),c2=w({name:"Options24Icon",svgTemplate:u`
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
    `}),ad=w({name:"StatusFailure24Icon",svgTemplate:u`
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
    `});var rr;(function(e){e.Loading="loading",e.Error="error"})(rr||(rr={}));const dt=lr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:J(),imageError:J()},styles:({hostClasses:e})=>m`
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
                  <slot class="status-wrapper" name=${rr.Error}>
                      <${ee.assign({icon:ad})} class="error"></${ee}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                  <slot class="status-wrapper" name=${rr.Loading}>
                      <${ee.assign({icon:id})}></${ee}>
                  </slot>
              `;return u`
            ${ke(!!a,a)}
            <img
                class=${ve({hidden:!!a})}
                ${S("load",async()=>{e._debugLoadDelay&&await Ml(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${S("error",async s=>{e._debugLoadDelay&&await Ml(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Gi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Gi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function sd({value:e,allowed:t,blocked:r}){const n=t?Gi({input:e,matcher:t}):!0,o=r?Gi({input:e,matcher:r}):!1;return n&&!o}function ld(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(sd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function u2({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=xr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)sd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=ld({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const Bn=lr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:J(),inputBlocked:J()},styles:({hostClasses:e,cssVars:t})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${ho["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${nd};
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
                ${Ne};
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
                border-radius: ${uo["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ft["vira-interaction-animation-duration"].value};
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
                border-radius: ${uo["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${od({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Ne};
            }

            .close-x-button {
                ${de};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ft["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=ld({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${ee.assign({icon:e.icon})} class="left-side-icon"></${ee}>
              `:"",s=e.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${ke(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${Fr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${S("input",l=>{u2({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ke(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${S("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${ee.assign({icon:i2})}></${ee}>
                        </button>
                    `)}
                ${ke(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});lr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>m`
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
    `,events:{routeChange:J()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Ba(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${S("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:Oe,defineElementNoInputs:Y4}=Pa(),Ee=Oe()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
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
                ${S("click",i=>{(!e.router||Ba(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new co(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function d2(e,t){return e.entry.entryType===he.Root?!1:!!(e.entry.entryType===he.Page||ut(t,e.fullUrlBreadcrumbs.slice(0,-1))||ut(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const Xe=Oe()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>m`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${R["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${R["element-book-nav-hover-background-color"].value};
            color: ${R["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${R["element-book-nav-active-background-color"].value};
            color: ${R["element-book-nav-active-foreground-color"].value};
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
            background-color: ${R["element-book-nav-selected-background-color"].value};
            color: ${R["element-book-nav-selected-foreground-color"].value};
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
            color: ${R["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!d2(r,e.selectedPath))return;const n=m`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${Ee.assign({router:e.router,route:{paths:[ge.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ve({"title-row":!0,selected:e.selectedPath?ut(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ke(Yt(r,he.ElementExample),u`
                                    <${ee.assign({icon:a2})}></${ee}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ee}>
                </li>
            `});return u`
            <${Ee.assign({route:tr,router:e.router})}>
                <slot name=${Ue.NavHeader}>Book</slot>
            </${Ee}>
            <ul>
                ${t}
            </ul>
        `}});async function h2(e){await Mi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await vh(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const wt=Oe()({tagName:"book-error",styles:m`
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
    `,renderCallback({inputs:e}){return($o(e.message,"array")?e.message:[e.message]).map(r=>u`
                <p>${r}</p>
            `)}}),Ur=Oe()({tagName:"book-page-controls",events:{controlValueChange:J()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>m`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${R["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Bn} {
            height: 24px;
            max-width: 128px;
        }

        ${ee}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===N.Hidden)return"";const a=f2(e.currentValues[n],o,s=>{const l=$o(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${ke(i===0,u`
                                <${ee.assign({icon:c2})}
                                    class="options-icon"
                                ></${ee}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function f2(e,t,r){return Ht(t,N.Hidden)?"":Ht(t,N.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${S("input",n=>{const o=xr(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ht(t,N.Color)?u`
            <input
                type="color"
                .value=${e}
                ${S("input",n=>{const o=xr(n,HTMLInputElement);r(o.value)})}
            />
        `:Ht(t,N.Text)?u`
            <${Bn.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${S(Bn.events.valueChange,n=>{r(n.detail)})}
            ></${Bn}>
        `:Ht(t,N.Number)?u`
            <input
                type="number"
                .value=${e}
                ${S("input",n=>{const o=xr(n,HTMLInputElement);r(o.value)})}
            />
        `:Ht(t,N.Dropdown)?u`
            <select
                .value=${e}
                ${S("input",n=>{const o=xr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Al=Oe()({tagName:"book-breadcrumbs",styles:m`
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
            `}}),ri=Oe()({tagName:"book-breadcrumbs-bar",styles:m`
        :host {
            border-bottom: 1px solid
                ${R["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${R["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return u`
            ${ke(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${Al.assign({currentRoute:e.currentRoute,router:e.router})}></${Al}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${S("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await ch(200),n.value===o&&(n.value?t(new co({paths:[ge.Search,encodeURIComponent(n.value)]})):t(new co(tr)))})}
            />
        `}}),El=Oe()({tagName:"book-entry-description",styles:m`
        :host {
            color: ${R["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${R["element-book-page-foreground-color"].value};
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
            `)}}),Il=Oe()({tagName:"book-page-wrapper",styles:m`
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
              `,r=[ge.Book,...e.pageNode.fullUrlBreadcrumbs],n=Pc(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ee.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ee}>
                    ${n?u`
                              <${wt.assign({message:n.message})}></${wt}>
                          `:u`
                              <${El.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${El}>
                              <${Ur.assign({config:e.pageNode.entry.controls,currentValues:Na(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Ur}>
                          `}
                </div>
            </div>
        `}}),bn=Oe()({tagName:"book-element-example-controls",styles:m`
        :host {
            display: flex;
            color: ${R["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[ge.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${Ee.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ee}>
        `}}),Ll=Symbol("unset-internal-state"),Pl=Oe()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Ll},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Pc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Ll&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${ke(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${wt.assign({message:`${t.elementExampleNode.entry.title} failed: ${yo(n)}`})}></${wt}>
            `}},options:{allowPolymorphicState:!0}}),ql=Oe()({tagName:"book-element-example-wrapper",styles:m`
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

        ${bn} {
            color: ${R["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${bn} {
            color: ${R["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${bn.assign(sh(e,["currentPageControls"]))}></${bn}>
                <${Pl.assign(e)}></${Pl}>
            </div>
        `}});function cd(e,t,r,n){const o=Bi(r,n),i=[];if(o){const a=cd(e,t,o,n);a&&i.push(a)}if(Yt(r,he.Page)&&!e.includes(r)){const a=Na(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:Wn(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function m2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=hs(e,1)?cd(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&hs(e,1)?u`
                  <${Ur.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Ur}>
              `:"",l=Lh(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Yt(c,he.Page))return u`
                    <${Il.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Il}>
                `;if(Yt(c,he.ElementExample)){const f=Na(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${ql.assign({elementExampleNode:c,currentPageControls:f,router:r})}
                        class="inline-entry"
                    ></${ql}>
                `}else return Yt(c,he.Root)?"":u`
                    <${wt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${wt}>
                `});return[s,l].flat()}const Vt=Oe()({tagName:"book-entry-display",styles:m`
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

        ${ri} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ft["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:J()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Di(e.currentRoute.paths),a=m2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${ri.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${ri}>

            ${ke(e.showLoading,u`
                    <div
                        ${Ds(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${ee.assign({icon:id})}></${ee}>
                    </div>
                    ${ke(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${Ue.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${Ds(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${Ue.Footer}></slot>
                `)}
        `}});function p2(e,t,r){const n=Nl(e,t);if(n.length)return n;r(tr);const o=Nl(e,tr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Nl(e,t){return e.filter(r=>ph({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const ni=mu()({tagName:"element-book-app",events:{pathUpdate:J()},stateInitStatic:{currentRoute:tr,router:void 0,loading:!0,colors:{config:void 0,theme:Tl(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${R["element-book-page-background-color"].value};
            color: ${R["element-book-page-foreground-color"].value};
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

        ${Vt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Xe} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ol(e,Di(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,f,p,g,v,b,y;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const M=a(x);return!ut(e.currentRoute,M)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(ma).join(" - "))}function c(x){if(!s(x))return;const M=a(x);e.router?e.router.setRoutes(M):n({currentRoute:{...e.currentRoute,...M}}),t.elementBookRoutePaths&&!ut(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(M.paths??[]))}try{if(t.elementBookRoutePaths&&!ut(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const O=v1(t.internalRouterConfig.basePath);n({router:O}),O.addRouteListener(!0,ce=>{n({currentRoute:ce})})}else!((f=t.internalRouterConfig)!=null&&f.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!ut(x,(p=e.colors)==null?void 0:p.config)){const O=Tl(x);n({colors:{config:x,theme:O}}),y1(r,O)}const M=t._debug??!1,D=zf({entries:t.entries,debug:M});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:wu(D.tree,{children:(v=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:v.children,controls:t.globalValues})}}));const z=Di(e.currentRoute.paths),ue=(z?Kf({flattenedNodes:D.flattenedNodes,searchQuery:z}):void 0)??p2(D.flattenedNodes,e.currentRoute.paths,c);l((b=ue[0])==null?void 0:b.entry.title);const re=(y=e.treeBasedControls)==null?void 0:y.controls;return re?(t._debug&&console.info({currentControls:re}),u`
                <div
                    class="root"
                    ${S(co,async O=>{const ce=O.detail;if(!s(ce))return;if(n({loading:!0}),c(ce),!(r.shadowRoot.querySelector(Xe.tagName)instanceof Xe))throw new Error(`Failed to find child '${Xe.tagName}'`);Ol(r,z,e.currentRoute)})}
                    ${S(Ur.events.controlValueChange,O=>{if(!e.treeBasedControls)return;const ce=Uf(re,O.detail.fullUrlBreadcrumbs,O.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ce}})})}
                >
                    <${Xe.assign({flattenedNodes:D.flattenedNodes,router:e.router,selectedPath:z?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Ue.NavHeader}
                            slot=${Ue.NavHeader}
                        ></slot>
                    </${Xe}>
                    <${Vt.assign({controls:re,currentNodes:ue,currentRoute:e.currentRoute,debug:M,originalTree:D.tree,router:e.router,showLoading:e.loading})}
                        ${S(Vt.events.loadingRender,async O=>{await Mi();const ce=r.shadowRoot.querySelector(Vt.tagName);ce?ce.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Vt.tagName}' for scrolling.`),await Mi(),n({loading:!O.detail})})}
                    >
                        <slot
                            name=${Ue.Footer}
                            slot=${Ue.Footer}
                        ></slot>
                    </${Vt}>
                </div>
            `):u`
                    <${wt.assign({message:"Failed to generate page controls."})}></${wt}>
                `}catch(x){return console.error(x),u`
                <p class="error">${yo(x)}</p>
            `}}});async function Ol(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Xe.tagName);if(!(n instanceof Xe))throw new Error(`Failed to find child '${Xe.tagName}'`);await h2(n)}var Bl;(function(e){e.Upper="upper",e.Lower="lower"})(Bl||(Bl={}));function g2(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function v2(e){return Array.isArray(e)?"array":typeof e}function Dl(e,t){return v2(e)===t}function ud(e,t){return g2(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function w2(e,t){return ud(e,r=>!t.includes(r))}function b2(e,t){return ud(e,r=>t.includes(r))}class Dt extends Error{}class y2 extends Dt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class $2 extends Dt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class k2 extends Dt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Sr extends Dt{}class dd extends Dt{constructor(t){super(`Invalid unit ${t}`)}}class Ae extends Dt{}class ot extends Dt{constructor(){super("Zone is an abstract class")}}const k="numeric",je="short",xe="long",fo={year:k,month:k,day:k},hd={year:k,month:je,day:k},x2={year:k,month:je,day:k,weekday:je},fd={year:k,month:xe,day:k},md={year:k,month:xe,day:k,weekday:xe},pd={hour:k,minute:k},gd={hour:k,minute:k,second:k},vd={hour:k,minute:k,second:k,timeZoneName:je},wd={hour:k,minute:k,second:k,timeZoneName:xe},bd={hour:k,minute:k,hourCycle:"h23"},yd={hour:k,minute:k,second:k,hourCycle:"h23"},$d={hour:k,minute:k,second:k,hourCycle:"h23",timeZoneName:je},kd={hour:k,minute:k,second:k,hourCycle:"h23",timeZoneName:xe},xd={year:k,month:k,day:k,hour:k,minute:k},Td={year:k,month:k,day:k,hour:k,minute:k,second:k},Sd={year:k,month:je,day:k,hour:k,minute:k},Cd={year:k,month:je,day:k,hour:k,minute:k,second:k},T2={year:k,month:je,day:k,weekday:je,hour:k,minute:k},Md={year:k,month:xe,day:k,hour:k,minute:k,timeZoneName:je},Ad={year:k,month:xe,day:k,hour:k,minute:k,second:k,timeZoneName:je},Ed={year:k,month:xe,day:k,weekday:xe,hour:k,minute:k,timeZoneName:xe},Id={year:k,month:xe,day:k,weekday:xe,hour:k,minute:k,second:k,timeZoneName:xe};class on{get type(){throw new ot}get name(){throw new ot}get ianaName(){return this.name}get isUniversal(){throw new ot}offsetName(t,r){throw new ot}formatOffset(t,r){throw new ot}offset(t){throw new ot}equals(t){throw new ot}get isValid(){throw new ot}}let oi=null;class Io extends on{static get instance(){return oi===null&&(oi=new Io),oi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Pd(t,r,n)}formatOffset(t,r){return qr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Dn={};function S2(e){return Dn[e]||(Dn[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Dn[e]}const C2={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function M2(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,d]=n;return[a,o,i,s,l,c,d]}function A2(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=C2[i];i==="era"?n[s]=a:P(s)||(n[s]=parseInt(a,10))}return n}let yn={};class tt extends on{static create(t){return yn[t]||(yn[t]=new tt(t)),yn[t]}static resetCache(){yn={},Dn={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=tt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Pd(t,r,n,this.name)}formatOffset(t,r){return qr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=S2(this.name);let[o,i,a,s,l,c,d]=n.formatToParts?A2(n,r):M2(n,r);s==="BC"&&(o=-Math.abs(o)+1);const p=Po({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let g=+r;const v=g%1e3;return g-=v>=0?v:1e3+v,(p-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let _l={};function E2(e,t={}){const r=JSON.stringify([e,t]);let n=_l[r];return n||(n=new Intl.ListFormat(e,t),_l[r]=n),n}let Yi={};function Ji(e,t={}){const r=JSON.stringify([e,t]);let n=Yi[r];return n||(n=new Intl.DateTimeFormat(e,t),Yi[r]=n),n}let Ki={};function I2(e,t={}){const r=JSON.stringify([e,t]);let n=Ki[r];return n||(n=new Intl.NumberFormat(e,t),Ki[r]=n),n}let Xi={};function L2(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=Xi[o];return i||(i=new Intl.RelativeTimeFormat(e,t),Xi[o]=i),i}let Cr=null;function P2(){return Cr||(Cr=new Intl.DateTimeFormat().resolvedOptions().locale,Cr)}function q2(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=Ji(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=Ji(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function N2(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function O2(e){const t=[];for(let r=1;r<=12;r++){const n=T.utc(2009,r,1);t.push(e(n))}return t}function B2(e){const t=[];for(let r=1;r<=7;r++){const n=T.utc(2016,11,13+r);t.push(e(n))}return t}function $n(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function D2(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class _2{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=I2(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Va(t,3);return ae(r,this.padTo)}}}class H2{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&tt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=Ji(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class R2{constructor(t,r,n){this.opts={style:"long",...n},!r&&Ld()&&(this.rtf=L2(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):np(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}class G{static fromOpts(t){return G.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,r,n,o=!1){const i=t||Q.defaultLocale,a=i||(o?"en-US":P2()),s=r||Q.defaultNumberingSystem,l=n||Q.defaultOutputCalendar;return new G(a,s,l,i)}static resetCache(){Cr=null,Yi={},Ki={},Xi={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n}={}){return G.create(t,r,n)}constructor(t,r,n,o){const[i,a,s]=q2(t);this.locale=i,this.numberingSystem=r||a||null,this.outputCalendar=n||s||null,this.intl=N2(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=D2(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:G.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return $n(this,t,Od,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=O2(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return $n(this,t,_d,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=B2(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return $n(this,void 0,()=>Hd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[T.utc(2016,11,13,9),T.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return $n(this,t,Rd,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[T.utc(-40,1,1),T.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new _2(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new H2(t,this.intl,r)}relFormatter(t={}){return new R2(this.intl,this.isEnglish(),t)}listFormatter(t={}){return E2(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let ii=null;class pe extends on{static get utcInstance(){return ii===null&&(ii=new pe(0)),ii}static instance(t){return t===0?pe.utcInstance:new pe(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new pe(qo(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${qr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${qr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return qr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class F2 extends on{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function lt(e,t){if(P(e)||e===null)return t;if(e instanceof on)return e;if(V2(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Io.instance:r==="utc"||r==="gmt"?pe.utcInstance:pe.parseSpecifier(r)||tt.create(e)}else return Lt(e)?pe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new F2(e)}let Hl=()=>Date.now(),Rl="system",Fl=null,Vl=null,jl=null,zl=60,Zl;class Q{static get now(){return Hl}static set now(t){Hl=t}static set defaultZone(t){Rl=t}static get defaultZone(){return lt(Rl,Io.instance)}static get defaultLocale(){return Fl}static set defaultLocale(t){Fl=t}static get defaultNumberingSystem(){return Vl}static set defaultNumberingSystem(t){Vl=t}static get defaultOutputCalendar(){return jl}static set defaultOutputCalendar(t){jl=t}static get twoDigitCutoffYear(){return zl}static set twoDigitCutoffYear(t){zl=t%100}static get throwOnInvalid(){return Zl}static set throwOnInvalid(t){Zl=t}static resetCaches(){G.resetCache(),tt.resetCache()}}function P(e){return typeof e>"u"}function Lt(e){return typeof e=="number"}function Lo(e){return typeof e=="number"&&e%1===0}function V2(e){return typeof e=="string"}function j2(e){return Object.prototype.toString.call(e)==="[object Date]"}function Ld(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function z2(e){return Array.isArray(e)?e:[e]}function Ul(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Z2(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function nr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function et(e,t,r){return Lo(e)&&e>=t&&e<=r}function U2(e,t){return e-t*Math.floor(e/t)}function ae(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function st(e){if(!(P(e)||e===null||e===""))return parseInt(e,10)}function Tt(e){if(!(P(e)||e===null||e===""))return parseFloat(e)}function Fa(e){if(!(P(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Va(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function an(e){return e%4===0&&(e%100!==0||e%400===0)}function Pr(e){return an(e)?366:365}function mo(e,t){const r=U2(t-1,12)+1,n=e+(t-r)/12;return r===2?an(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Po(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function po(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,r=e-1,n=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return t===4||n===3?53:52}function Qi(e){return e>99?e:e>Q.twoDigitCutoffYear?1900+e:2e3+e}function Pd(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function qo(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function qd(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ae(`Invalid unit value ${e}`);return t}function go(e,t){const r={};for(const n in e)if(nr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=qd(o)}return r}function qr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${ae(r,2)}:${ae(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${ae(r,2)}${ae(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function No(e){return Z2(e,["hour","minute","second","millisecond"])}const W2=["January","February","March","April","May","June","July","August","September","October","November","December"],Nd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],G2=["J","F","M","A","M","J","J","A","S","O","N","D"];function Od(e){switch(e){case"narrow":return[...G2];case"short":return[...Nd];case"long":return[...W2];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Bd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Dd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Y2=["M","T","W","T","F","S","S"];function _d(e){switch(e){case"narrow":return[...Y2];case"short":return[...Dd];case"long":return[...Bd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Hd=["AM","PM"],J2=["Before Christ","Anno Domini"],K2=["BC","AD"],X2=["B","A"];function Rd(e){switch(e){case"narrow":return[...X2];case"short":return[...K2];case"long":return[...J2];default:return null}}function Q2(e){return Hd[e.hour<12?0:1]}function ep(e,t){return _d(t)[e.weekday-1]}function tp(e,t){return Od(t)[e.month-1]}function rp(e,t){return Rd(t)[e.year<0?0:1]}function np(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],d=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${d} ago`:`in ${s} ${d}`}function Wl(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const op={D:fo,DD:hd,DDD:fd,DDDD:md,t:pd,tt:gd,ttt:vd,tttt:wd,T:bd,TT:yd,TTT:$d,TTTT:kd,f:xd,ff:Sd,fff:Md,ffff:Ed,F:Td,FF:Cd,FFF:Ad,FFFF:Id};class me{static create(t,r={}){return new me(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return op[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return ae(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,v)=>this.loc.extract(t,g,v),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?Q2(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,v)=>n?tp(t,g):i(v?{month:g}:{month:g,day:"numeric"},"month"),c=(g,v)=>n?ep(t,g):i(v?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const v=me.macroTokenToFormatOpts(g);return v?this.formatWithSystemDefault(t,v):g},f=g=>n?rp(t,g):i({era:g},"era"),p=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return Wl(me.parseFormat(r),p)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},i=me.parseFormat(r),a=i.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return Wl(i,o(s))}}class Ve{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Fd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function cr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function ur(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function dr(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function Vd(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=st(t[r+o]);return[n,null,r+o]}}const jd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ip=`(?:${jd.source}?(?:\\[(${Fd.source})\\])?)?`,ja=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,zd=RegExp(`${ja.source}${ip}`),za=RegExp(`(?:T${zd.source})?`),ap=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,sp=/(\d{4})-?W(\d\d)(?:-?(\d))?/,lp=/(\d{4})-?(\d{3})/,cp=Vd("weekYear","weekNumber","weekDay"),up=Vd("year","ordinal"),dp=/(\d{4})-(\d\d)-(\d\d)/,Zd=RegExp(`${ja.source} ?(?:${jd.source}|(${Fd.source}))?`),hp=RegExp(`(?: ${Zd.source})?`);function Jt(e,t,r){const n=e[t];return P(n)?r:st(n)}function fp(e,t){return[{year:Jt(e,t),month:Jt(e,t+1,1),day:Jt(e,t+2,1)},null,t+3]}function hr(e,t){return[{hours:Jt(e,t,0),minutes:Jt(e,t+1,0),seconds:Jt(e,t+2,0),milliseconds:Fa(e[t+3])},null,t+4]}function sn(e,t){const r=!e[t]&&!e[t+1],n=qo(e[t+1],e[t+2]),o=r?null:pe.instance(n);return[{},o,t+3]}function ln(e,t){const r=e[t]?tt.create(e[t]):null;return[{},r,t+1]}const mp=RegExp(`^T?${ja.source}$`),pp=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function gp(e){const[t,r,n,o,i,a,s,l,c]=e,d=t[0]==="-",f=l&&l[0]==="-",p=(g,v=!1)=>g!==void 0&&(v||g&&d)?-g:g;return[{years:p(Tt(r)),months:p(Tt(n)),weeks:p(Tt(o)),days:p(Tt(i)),hours:p(Tt(a)),minutes:p(Tt(s)),seconds:p(Tt(l),l==="-0"),milliseconds:p(Fa(c),f)}]}const vp={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Za(e,t,r,n,o,i,a){const s={year:t.length===2?Qi(st(t)):st(t),month:Nd.indexOf(r)+1,day:st(n),hour:st(o),minute:st(i)};return a&&(s.second=st(a)),e&&(s.weekday=e.length>3?Bd.indexOf(e)+1:Dd.indexOf(e)+1),s}const wp=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function bp(e){const[,t,r,n,o,i,a,s,l,c,d,f]=e,p=Za(t,o,n,r,i,a,s);let g;return l?g=vp[l]:c?g=0:g=qo(d,f),[p,new pe(g)]}function yp(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const $p=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,kp=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,xp=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Gl(e){const[,t,r,n,o,i,a,s]=e;return[Za(t,o,n,r,i,a,s),pe.utcInstance]}function Tp(e){const[,t,r,n,o,i,a,s]=e;return[Za(t,s,r,n,o,i,a),pe.utcInstance]}const Sp=cr(ap,za),Cp=cr(sp,za),Mp=cr(lp,za),Ap=cr(zd),Ud=ur(fp,hr,sn,ln),Ep=ur(cp,hr,sn,ln),Ip=ur(up,hr,sn,ln),Lp=ur(hr,sn,ln);function Pp(e){return dr(e,[Sp,Ud],[Cp,Ep],[Mp,Ip],[Ap,Lp])}function qp(e){return dr(yp(e),[wp,bp])}function Np(e){return dr(e,[$p,Gl],[kp,Gl],[xp,Tp])}function Op(e){return dr(e,[pp,gp])}const Bp=ur(hr);function Dp(e){return dr(e,[mp,Bp])}const _p=cr(dp,hp),Hp=cr(Zd),Rp=ur(hr,sn,ln);function Fp(e){return dr(e,[_p,Ud],[Hp,Rp])}const Yl="Invalid Duration",Wd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Vp={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Wd},Ce=146097/400,jt=146097/4800,jp={years:{quarters:4,months:12,weeks:Ce/7,days:Ce,hours:Ce*24,minutes:Ce*24*60,seconds:Ce*24*60*60,milliseconds:Ce*24*60*60*1e3},quarters:{months:3,weeks:Ce/28,days:Ce/4,hours:Ce*24/4,minutes:Ce*24*60/4,seconds:Ce*24*60*60/4,milliseconds:Ce*24*60*60*1e3/4},months:{weeks:jt/7,days:jt,hours:jt*24,minutes:jt*24*60,seconds:jt*24*60*60,milliseconds:jt*24*60*60*1e3},...Wd},Et=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],zp=Et.slice(0).reverse();function it(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new B(n)}function Gd(e,t){let r=t.milliseconds??0;for(const n of zp.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Jl(e,t){const r=Gd(e,t)<0?-1:1;Et.reduceRight((n,o)=>{if(P(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),Et.reduce((n,o)=>{if(P(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Zp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class B{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?jp:Vp;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||G.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return B.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Ae(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new B({values:go(t,B.normalizeUnit),loc:G.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Lt(t))return B.fromMillis(t);if(B.isDuration(t))return t;if(typeof t=="object")return B.fromObject(t);throw new Ae(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Op(t);return n?B.fromObject(n,r):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Dp(t);return n?B.fromObject(n,r):B.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the Duration is invalid");const n=t instanceof Ve?t:new Ve(t,r);if(Q.throwOnInvalid)throw new k2(n);return new B({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new dd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?me.create(this.loc,n).formatDurationFromString(this,t):Yl}toHuman(t={}){if(!this.isValid)return Yl;const r=Et.map(n=>{const o=this.values[n];return P(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Va(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},T.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?Gd(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t),n={};for(const o of Et)(nr(r.values,o)||nr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return it(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=qd(t(this.values[n],n));return it(this,{values:r},!0)}get(t){return this[B.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...go(t,B.normalizeUnit)};return it(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return it(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Jl(this.matrix,t),it(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Zp(this.normalize().shiftToAll().toObject());return it(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>B.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of Et)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;Lt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Lt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return Jl(this.matrix,r),it(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return it(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Et)if(!r(this.values[n],t.values[n]))return!1;return!0}}const zt="Invalid Interval";function Up(e,t){return!e||!e.isValid?X.invalid("missing or invalid start"):!t||!t.isValid?X.invalid("missing or invalid end"):t<e?X.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class X{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the Interval is invalid");const n=t instanceof Ve?t:new Ve(t,r);if(Q.throwOnInvalid)throw new $2(n);return new X({invalid:n})}static fromDateTimes(t,r){const n=br(t),o=br(r),i=Up(n,o);return i??new X({start:n,end:o})}static after(t,r){const n=B.fromDurationLike(r),o=br(t);return X.fromDateTimes(o,o.plus(n))}static before(t,r){const n=B.fromDurationLike(r),o=br(t);return X.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=T.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=T.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return X.fromDateTimes(i,s);if(a){const c=B.fromISO(o,r);if(c.isValid)return X.after(i,c)}else if(l){const c=B.fromISO(n,r);if(c.isValid)return X.before(s,c)}}return X.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;const r=this.start.startOf(t),n=this.end.startOf(t);return Math.floor(n.diff(r,t).get(t))+(n.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?X.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(br).filter(a=>this.contains(a)).sort(),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(X.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=B.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(X.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:X.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return X.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(X.fromDateTimes(r,l.time)),r=null);return X.merge(o)}difference(...t){return X.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:zt}toLocaleString(t=fo,r={}){return this.isValid?me.create(this.s.loc.clone(r),t).formatInterval(this):zt}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:zt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:zt}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:zt}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:zt}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):B.invalid(this.invalidReason)}mapEndpoints(t){return X.fromDateTimes(t(this.s),t(this.e))}}class Mr{static hasDST(t=Q.defaultZone){const r=T.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return tt.isValidZone(t)}static normalizeZone(t){return lt(t,Q.defaultZone)}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||G.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||G.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||G.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||G.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return G.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return G.create(r,null,"gregory").eras(t)}static features(){return{relative:Ld()}}}function Kl(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(B.fromMillis(n).as("days"))}function Wp(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=Kl(l,c);return(d-d%7)/7}],["days",Kl]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function Gp(e,t,r,n){let[o,i,a,s]=Wp(e,t,r);const l=t-o,c=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const d=B.fromObject(i,n);return c.length>0?B.fromMillis(l,n).shiftTo(...c).plus(d):d}const Ua={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Xl={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Yp=Ua.hanidec.replace(/[\[|\]]/g,"").split("");function Jp(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Ua.hanidec)!==-1)t+=Yp.indexOf(e[r]);else for(const o in Xl){const[i,a]=Xl[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function Be({numberingSystem:e},t=""){return new RegExp(`${Ua[e||"latn"]}${t}`)}const Kp="missing Intl.DateTimeFormat.formatToParts support";function _(e,t=r=>r){return{regex:e,deser:([r])=>t(Jp(r))}}const Xp=String.fromCharCode(160),Yd=`[ ${Xp}]`,Jd=new RegExp(Yd,"g");function Qp(e){return e.replace(/\./g,"\\.?").replace(Jd,Yd)}function Ql(e){return e.replace(/\./g,"").replace(Jd," ").toLowerCase()}function De(e,t){return e===null?null:{regex:RegExp(e.map(Qp).join("|")),deser:([r])=>e.findIndex(n=>Ql(r)===Ql(n))+t}}function ec(e,t){return{regex:e,deser:([,r,n])=>qo(r,n),groups:t}}function kn(e){return{regex:e,deser:([t])=>t}}function eg(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function tg(e,t){const r=Be(t),n=Be(t,"{2}"),o=Be(t,"{3}"),i=Be(t,"{4}"),a=Be(t,"{6}"),s=Be(t,"{1,2}"),l=Be(t,"{1,3}"),c=Be(t,"{1,6}"),d=Be(t,"{1,9}"),f=Be(t,"{2,4}"),p=Be(t,"{4,6}"),g=y=>({regex:RegExp(eg(y.val)),deser:([x])=>x,literal:!0}),b=(y=>{if(e.literal)return g(y);switch(y.val){case"G":return De(t.eras("short"),0);case"GG":return De(t.eras("long"),0);case"y":return _(c);case"yy":return _(f,Qi);case"yyyy":return _(i);case"yyyyy":return _(p);case"yyyyyy":return _(a);case"M":return _(s);case"MM":return _(n);case"MMM":return De(t.months("short",!0),1);case"MMMM":return De(t.months("long",!0),1);case"L":return _(s);case"LL":return _(n);case"LLL":return De(t.months("short",!1),1);case"LLLL":return De(t.months("long",!1),1);case"d":return _(s);case"dd":return _(n);case"o":return _(l);case"ooo":return _(o);case"HH":return _(n);case"H":return _(s);case"hh":return _(n);case"h":return _(s);case"mm":return _(n);case"m":return _(s);case"q":return _(s);case"qq":return _(n);case"s":return _(s);case"ss":return _(n);case"S":return _(l);case"SSS":return _(o);case"u":return kn(d);case"uu":return kn(s);case"uuu":return _(r);case"a":return De(t.meridiems(),0);case"kkkk":return _(i);case"kk":return _(f,Qi);case"W":return _(s);case"WW":return _(n);case"E":case"c":return _(r);case"EEE":return De(t.weekdays("short",!1),1);case"EEEE":return De(t.weekdays("long",!1),1);case"ccc":return De(t.weekdays("short",!0),1);case"cccc":return De(t.weekdays("long",!0),1);case"Z":case"ZZ":return ec(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return ec(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return kn(/[a-z_+-/]{1,256}?/i);case" ":return kn(/[^\S\n\r]/);default:return g(y)}})(e)||{invalidReason:Kp};return b.token=e,b}const rg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function ng(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=rg[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function og(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function ig(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(nr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function ag(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return P(e.z)||(r=tt.create(e.z)),P(e.Z)||(r||(r=new pe(e.Z)),n=e.Z),P(e.q)||(e.M=(e.q-1)*3+1),P(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),P(e.u)||(e.S=Fa(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let ai=null;function sg(){return ai||(ai=T.fromMillis(1555555555555)),ai}function lg(e,t){if(e.literal)return e;const r=me.macroTokenToFormatOpts(e.val),n=Qd(r,t);return n==null||n.includes(void 0)?e:n}function Kd(e,t){return Array.prototype.concat(...e.map(r=>lg(r,t)))}function Xd(e,t,r){const n=Kd(me.parseFormat(r),e),o=n.map(a=>tg(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=og(o),l=RegExp(a,"i"),[c,d]=ig(t,l,s),[f,p,g]=d?ag(d):[null,null,void 0];if(nr(d,"a")&&nr(d,"H"))throw new Sr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:d,result:f,zone:p,specificOffset:g}}}function cg(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=Xd(e,t,r);return[n,o,i,a]}function Qd(e,t){if(!e)return null;const n=me.create(t,e).dtFormatter(sg()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>ng(a,e,i))}const e0=[0,31,59,90,120,151,181,212,243,273,304,334],t0=[0,31,60,91,121,152,182,213,244,274,305,335];function Le(e,t){return new Ve("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function r0(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function n0(e,t,r){return r+(an(e)?t0:e0)[t-1]}function o0(e,t){const r=an(e)?t0:e0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function ea(e){const{year:t,month:r,day:n}=e,o=n0(t,r,n),i=r0(t,r,n);let a=Math.floor((o-i+10)/7),s;return a<1?(s=t-1,a=po(s)):a>po(t)?(s=t+1,a=1):s=t,{weekYear:s,weekNumber:a,weekday:i,...No(e)}}function tc(e){const{weekYear:t,weekNumber:r,weekday:n}=e,o=r0(t,1,4),i=Pr(t);let a=r*7+n-o-3,s;a<1?(s=t-1,a+=Pr(s)):a>i?(s=t+1,a-=Pr(t)):s=t;const{month:l,day:c}=o0(s,a);return{year:s,month:l,day:c,...No(e)}}function si(e){const{year:t,month:r,day:n}=e,o=n0(t,r,n);return{year:t,ordinal:o,...No(e)}}function rc(e){const{year:t,ordinal:r}=e,{month:n,day:o}=o0(t,r);return{year:t,month:n,day:o,...No(e)}}function ug(e){const t=Lo(e.weekYear),r=et(e.weekNumber,1,po(e.weekYear)),n=et(e.weekday,1,7);return t?r?n?!1:Le("weekday",e.weekday):Le("week",e.week):Le("weekYear",e.weekYear)}function dg(e){const t=Lo(e.year),r=et(e.ordinal,1,Pr(e.year));return t?r?!1:Le("ordinal",e.ordinal):Le("year",e.year)}function i0(e){const t=Lo(e.year),r=et(e.month,1,12),n=et(e.day,1,mo(e.year,e.month));return t?r?n?!1:Le("day",e.day):Le("month",e.month):Le("year",e.year)}function a0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=et(t,0,23)||t===24&&r===0&&n===0&&o===0,a=et(r,0,59),s=et(n,0,59),l=et(o,0,999);return i?a?s?l?!1:Le("millisecond",o):Le("second",n):Le("minute",r):Le("hour",t)}const li="Invalid DateTime",nc=864e13;function xn(e){return new Ve("unsupported zone",`the zone "${e.name}" is not supported`)}function ci(e){return e.weekData===null&&(e.weekData=ea(e.c)),e.weekData}function St(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new T({...r,...t,old:r})}function s0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Tn(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function _n(e,t,r){return s0(Po(e),t,r)}function oc(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,mo(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=B.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Po(i);let[l,c]=s0(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function wr(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=T.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return T.invalid(new Ve("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Sn(e,t,r=!0){return e.isValid?me.create(G.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function ui(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=ae(e.c.year,r?6:4),t?(n+="-",n+=ae(e.c.month),n+="-",n+=ae(e.c.day)):(n+=ae(e.c.month),n+=ae(e.c.day)),n}function ic(e,t,r,n,o,i){let a=ae(e.c.hour);return t?(a+=":",a+=ae(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=ae(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=ae(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=ae(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=ae(Math.trunc(-e.o/60)),a+=":",a+=ae(Math.trunc(-e.o%60))):(a+="+",a+=ae(Math.trunc(e.o/60)),a+=":",a+=ae(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const l0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},hg={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},fg={ordinal:1,hour:0,minute:0,second:0,millisecond:0},c0=["year","month","day","hour","minute","second","millisecond"],mg=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],pg=["year","ordinal","hour","minute","second","millisecond"];function ac(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new dd(e);return t}function sc(e,t){const r=lt(t.zone,Q.defaultZone),n=G.fromObject(t),o=Q.now();let i,a;if(P(e.year))i=o;else{for(const c of c0)P(e[c])&&(e[c]=l0[c]);const s=i0(e)||a0(e);if(s)return T.invalid(s);const l=r.offset(o);[i,a]=_n(e,l,r)}return new T({ts:i,zone:r,loc:n,o:a})}function lc(e,t,r){const n=P(r.round)?!0:r.round,o=(a,s)=>(a=Va(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function cc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class T{constructor(t){const r=t.zone||Q.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Ve("invalid input"):null)||(r.isValid?null:xn(r));this.ts=P(t.ts)?Q.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=Tn(this.ts,s),n=Number.isNaN(o.year)?new Ve("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||G.create(),this.invalid=n,this.weekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new T({})}static local(){const[t,r]=cc(arguments),[n,o,i,a,s,l,c]=r;return sc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=cc(arguments),[n,o,i,a,s,l,c]=r;return t.zone=pe.utcInstance,sc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=j2(t)?t.valueOf():NaN;if(Number.isNaN(n))return T.invalid("invalid input");const o=lt(r.zone,Q.defaultZone);return o.isValid?new T({ts:n,zone:o,loc:G.fromObject(r)}):T.invalid(xn(o))}static fromMillis(t,r={}){if(Lt(t))return t<-nc||t>nc?T.invalid("Timestamp out of range"):new T({ts:t,zone:lt(r.zone,Q.defaultZone),loc:G.fromObject(r)});throw new Ae(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Lt(t))return new T({ts:t*1e3,zone:lt(r.zone,Q.defaultZone),loc:G.fromObject(r)});throw new Ae("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=lt(r.zone,Q.defaultZone);if(!n.isValid)return T.invalid(xn(n));const o=Q.now(),i=P(r.specificOffset)?n.offset(o):r.specificOffset,a=go(t,ac),s=!P(a.ordinal),l=!P(a.year),c=!P(a.month)||!P(a.day),d=l||c,f=a.weekYear||a.weekNumber,p=G.fromObject(r);if((d||s)&&f)throw new Sr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&s)throw new Sr("Can't mix ordinal dates with month/day");const g=f||a.weekday&&!d;let v,b,y=Tn(o,i);g?(v=mg,b=hg,y=ea(y)):s?(v=pg,b=fg,y=si(y)):(v=c0,b=l0);let x=!1;for(const O of v){const ce=a[O];P(ce)?x?a[O]=b[O]:a[O]=y[O]:x=!0}const M=g?ug(a):s?dg(a):i0(a),D=M||a0(a);if(D)return T.invalid(D);const z=g?tc(a):s?rc(a):a,[ie,ue]=_n(z,i,n),re=new T({ts:ie,zone:n,o:ue,loc:p});return a.weekday&&d&&t.weekday!==re.weekday?T.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${re.toISO()}`):re}static fromISO(t,r={}){const[n,o]=Pp(t);return wr(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=qp(t);return wr(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Np(t);return wr(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(P(t)||P(r))throw new Ae("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=G.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,d]=cg(a,t,r);return d?T.invalid(d):wr(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return T.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Fp(t);return wr(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the DateTime is invalid");const n=t instanceof Ve?t:new Ve(t,r);if(Q.throwOnInvalid)throw new y2(n);return new T({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Qd(t,G.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return Kd(me.parseFormat(t),G.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ci(this).weekYear:NaN}get weekNumber(){return this.isValid?ci(this).weekNumber:NaN}get weekday(){return this.isValid?ci(this).weekday:NaN}get ordinal(){return this.isValid?si(this.c).ordinal:NaN}get monthShort(){return this.isValid?Mr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Mr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Mr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Mr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Po(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,d=Tn(l,a),f=Tn(c,s);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[St(this,{ts:l}),St(this,{ts:c})]:[this]}get isInLeapYear(){return an(this.year)}get daysInMonth(){return mo(this.year,this.month)}get daysInYear(){return this.isValid?Pr(this.year):NaN}get weeksInWeekYear(){return this.isValid?po(this.weekYear):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=me.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone(pe.instance(t),r)}toLocal(){return this.setZone(Q.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=lt(t,Q.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=_n(a,i,t)}return St(this,{ts:o,zone:t})}else return T.invalid(xn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return St(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=go(t,ac),n=!P(r.weekYear)||!P(r.weekNumber)||!P(r.weekday),o=!P(r.ordinal),i=!P(r.year),a=!P(r.month)||!P(r.day),s=i||a,l=r.weekYear||r.weekNumber;if((s||o)&&l)throw new Sr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&o)throw new Sr("Can't mix ordinal dates with month/day");let c;n?c=tc({...ea(this.c),...r}):P(r.ordinal)?(c={...this.toObject(),...r},P(r.day)&&(c.day=Math.min(mo(c.year,c.month),c.day))):c=rc({...si(this.c),...r});const[d,f]=_n(c,this.o,this.zone);return St(this,{ts:d,o:f})}plus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t);return St(this,oc(this,r))}minus(t){if(!this.isValid)return this;const r=B.fromDurationLike(t).negate();return St(this,oc(this,r))}startOf(t){if(!this.isValid)return this;const r={},n=B.normalizeUnit(t);switch(n){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(n==="weeks"&&(r.weekday=1),n==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,r={}){return this.isValid?me.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):li}toLocaleString(t=fo,r={}){return this.isValid?me.create(this.loc.clone(r),t).formatDateTime(this):li}toLocaleParts(t={}){return this.isValid?me.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=ui(this,a);return s+="T",s+=ic(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?ui(this,t==="extended"):null}toISOWeekDate(){return Sn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+ic(this,a==="extended",r,t,n,i):null}toRFC2822(){return Sn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Sn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?ui(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Sn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():li}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return B.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=z2(r).map(B.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=Gp(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(T.now(),t,r)}until(t){return this.isValid?X.fromDateTimes(this,t):this}hasSame(t,r){if(!this.isValid)return!1;const n=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r)<=n&&n<=o.endOf(r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||T.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),lc(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?lc(t.base||T.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(T.isDateTime))throw new Ae("min requires all arguments be DateTimes");return Ul(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(T.isDateTime))throw new Ae("max requires all arguments be DateTimes");return Ul(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=G.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Xd(a,t,r)}static fromStringExplain(t,r,n={}){return T.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return fo}static get DATE_MED(){return hd}static get DATE_MED_WITH_WEEKDAY(){return x2}static get DATE_FULL(){return fd}static get DATE_HUGE(){return md}static get TIME_SIMPLE(){return pd}static get TIME_WITH_SECONDS(){return gd}static get TIME_WITH_SHORT_OFFSET(){return vd}static get TIME_WITH_LONG_OFFSET(){return wd}static get TIME_24_SIMPLE(){return bd}static get TIME_24_WITH_SECONDS(){return yd}static get TIME_24_WITH_SHORT_OFFSET(){return $d}static get TIME_24_WITH_LONG_OFFSET(){return kd}static get DATETIME_SHORT(){return xd}static get DATETIME_SHORT_WITH_SECONDS(){return Td}static get DATETIME_MED(){return Sd}static get DATETIME_MED_WITH_SECONDS(){return Cd}static get DATETIME_MED_WITH_WEEKDAY(){return T2}static get DATETIME_FULL(){return Md}static get DATETIME_FULL_WITH_SECONDS(){return Ad}static get DATETIME_HUGE(){return Ed}static get DATETIME_HUGE_WITH_SECONDS(){return Id}}function br(e){if(T.isDateTime(e))return e;if(e&&e.valueOf&&Lt(e.valueOf()))return T.fromJSDate(e);if(e&&typeof e=="object")return T.fromObject(e);throw new Ae(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function or(e){const t=T.fromObject(w2(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function u0(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function di(e,t){return u0(or(e).plus(t))}const gg=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],vg=gg.reduce((e,t)=>(e[t]=t,e),{}),wg=Q.defaultZone.name,Wa=vg.UTC;var uc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(uc||(uc={}));const bg=["hour","minute","second","millisecond"],yg=en({hour:14,minute:19,second:7,millisecond:877,timezone:Wa}),$g=en({year:2023,month:6,day:5,timezone:Wa}),kg=en(wf($g,yg));var Kt;(function(e){e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(Kt||(Kt={}));function Hn({start:e,end:t,unit:r}){const n=or(e);return or(t).diff(n,r).toObject()}function xg({start:e,end:t}){return Hn({start:e,end:t,unit:Kt.Milliseconds}).milliseconds>=0}const Tg=Q.defaultLocale;function Sg(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function ta(e,t){const r=or(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??Tg});return Sg(r)}function Cg(e){if(!Mr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Mg(e){hu(e,kg),Cg(e.timezone),or(e)}function Ag(e){try{return Mg(e),!0}catch{return!1}}function Eg(e,t){const r=Ig(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return u0(r,t)}function dc(e){const t=T.fromJSDate(new Date(e));if(t.isValid)return t}function Ig(e,t){if(Ag(e)&&(e=or(e).toMillis()),T.isDateTime(e))return e.setZone(t);if(Dl(e,"number"))return T.fromMillis(e,{zone:Wa}).setZone(t);if(Dl(e,"string")){const r=T.fromISO(e,{zone:t});return r.isValid?r:dc(e)}else if(e instanceof Date)return T.fromJSDate(e).setZone(t);return dc(e)}function Lg(e){return Eg(Date.now(),e)}function ra(){return Lg(wg)}const Pg={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};b2(Pg,bg);const qg={DateShort:T.DATE_SHORT,DateMed:T.DATE_MED,DateMedWithWeekday:T.DATE_MED_WITH_WEEKDAY,DateFull:T.DATE_FULL,DateHuge:T.DATE_HUGE,TimeSimple:T.TIME_SIMPLE,TimeWithSeconds:T.TIME_WITH_SECONDS,TimeWithShortOffset:T.TIME_WITH_SHORT_OFFSET,TimeWithLongOffset:T.TIME_WITH_LONG_OFFSET,Time24Simple:T.TIME_24_SIMPLE,Time24WithSeconds:T.TIME_24_WITH_SECONDS,Time24WithShortOffset:T.TIME_24_WITH_SHORT_OFFSET,Time24WithLongOffset:T.TIME_24_WITH_LONG_OFFSET,DatetimeShort:T.DATETIME_SHORT,DatetimeShortWithSeconds:T.DATETIME_SHORT_WITH_SECONDS,DatetimeMed:T.DATETIME_MED,DatetimeMedWithSeconds:T.DATETIME_MED_WITH_SECONDS,DatetimeMedWithWeekday:T.DATETIME_MED_WITH_WEEKDAY,DatetimeFull:T.DATETIME_FULL,DatetimeFullWithSeconds:T.DATETIME_FULL_WITH_SECONDS,DatetimeHuge:T.DATETIME_HUGE,DatetimeHugeWithSeconds:T.DATETIME_HUGE_WITH_SECONDS};var Rn=(e=>(e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e))(Rn||{});function Ng(e){return{date:ta(e,{dateStyle:"medium"}).replace(/\s/g," "),time:ta(e,{timeStyle:"short"}).replace(/\s/g," ")}}function hc({start:e,end:t,allowedRelativeUnits:r=["month","week","day","hour","minute"]}){const{days:n}=Hn({start:e,end:t,unit:Kt.Days}),{hours:o}=Hn({start:e,end:t,unit:Kt.Hours}),{minutes:i}=Hn({start:e,end:t,unit:Kt.Minutes}),a=ta(e,qg.DateFull);let s,l;if(xg({start:t,end:e})){if(r.includes("minute")&&Math.abs(Math.round(i))<2)return"now";if(r.includes("minute")&&Math.abs(Math.round(i))<60)s=i,l="min";else if(r.includes("hour")&&Math.abs(Math.round(o))<24)s=o,l="hour";else if(r.includes("day")&&Math.abs(Math.round(n))<7)s=n,l="day";else if(r.includes("week")&&Math.abs(Math.round(n))<30)s=n/7,l="week";else if(r.includes("month")&&Math.abs(Math.round(n))<365)s=n/30,l="month";else return a;const c=Math.round(Math.abs(s));return`in ${c>1?c:"a"} ${l}${c>1?"s":""}`}else{if(r.includes("minute")&&Math.round(i)<2)return"Just now";if(r.includes("minute")&&Math.round(i)<60)s=i,l="min";else if(r.includes("hour")&&Math.round(o)<24)s=o,l="hour";else if(r.includes("day")&&Math.round(n)<7)s=n,l="day";else if(r.includes("week")&&Math.round(n)<30)s=n/7,l="week";else if(r.includes("month")&&Math.round(n)<365)s=n/30,l="month";else return a;const c=Math.round(s);return`${c} ${l}${c>1?"s":""} ago`}}function Og(e,t){return e.map(t)}function cn(e){return!!e}function d0(e,t){return e.match(t)??[]}function Bg(e){return e.replace(/,/g,"")}function Dg(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var ir;(function(e){e.Upper="upper",e.Lower="lower"})(ir||(ir={}));function _g(e){return e.toLowerCase()!==e.toUpperCase()}function fc(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!_g(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===ir.Upper&&o!==o.toUpperCase())return!1;if(t===ir.Lower&&o!==o.toLowerCase())return!1}return!0}function na(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=fc(a,ir.Lower,{blockNoCaseCharacters:!0})||fc(s,ir.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Wr(e,t){return e.split(t)}const Hg=String(NaN);function h0(e){if(typeof e=="string"&&isNaN(Number(e)))return Hg;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=d0(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(d=>d.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function Rg(e){return typeof e=="number"?e:Number(typeof e=="string"?Bg(e):e)}function Fg(e){return String(e).includes("e")}function Vg({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Nr({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}function jg(e){return!!e&&typeof e=="object"}function Ge(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function zg(e){return Array.isArray(e)?"array":typeof e}function Zg(e,t){return zg(e)===t}function Ug(e){return Ge(e).filter(t=>isNaN(Number(t)))}function Wg(e,t){return Ge(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function oa(e,t){return Wg(e,r=>!t.includes(r))}function ar(e,t){let r=!1;const n=Ge(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ge(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const f0=globalThis.crypto;function Gg({min:e,max:t}){const{min:r,max:n}=Vg({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do f0.getRandomValues(s),l=s.reduce((c,d,f)=>c+d*256**f,0);while(l>=a);return r+l%o}function Yg(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return f0.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const Jg="%",Kg="px";function Ut(e){return Ga({value:e,suffix:Kg})}function hi(e){return Ga({value:e,suffix:Jg})}function Ga({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const fi="://";function Xg(...e){const t=e.join("/"),[r,n=""]=t.includes(fi)?t.split(fi):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,d)=>{if(i)return s;const f=d[c+1];let p=l;const g=!l.includes("?")&&(f==null?void 0:f.startsWith("?"));if(f!=null&&f.startsWith("?")||g){i=!0;let v=!1;const b=d.slice(g?c+2:c+1).reduce((y,x)=>(x.includes("#")&&(v=!0),v?y.concat(x):[y,x].join("&")),"");p=[l,f,b].join("")}return s.concat(p)},[]);return[r,r?fi:"",a.join("/")].join("")}const Qg=["k","M","B","T","P","E","Z","Y"];function Ya({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function ev(e,t,r){const[n,o]=Wr(e,"."),i=h0(n),a=d0(i,/,/g).length,s=t[a-1],[l,c]=Wr(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Ya({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const mc=3;function tv({input:e,maxLength:t}){const r=String(e),[n,o]=Wr(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=Wr(n,"."),d=i.length+mc;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Ya({afterDot:c,beforeDot:l,maxLength:t-i.length+mc}),s].join("")}function rv(e,t){const[r,n]=Wr(h0(e),".");if(r.length<=t)return Ya({beforeDot:r,afterDot:n,maxLength:t})}function nv(e,{customSuffixes:t=Qg,maxLength:r=6}={}){const n=Rg(e);if(isNaN(n)||n===1/0)return String(n);if(Fg(n))return tv({input:n,maxLength:r});const o=String(n),i=rv(o,r);return i??ev(o,t,r)}const h=nt({"toniq-icon-fill-color":E["vira-icon-fill-color"].default,"toniq-icon-stroke-color":E["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),F=ar(h,(e,t)=>r=>q(`var(${t.name}, ${r})`)),ov=w({name:"Copy16Icon",svgTemplate:u`
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
    `}),iv=w({name:"ExternalLink16Icon",svgTemplate:u`
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
    `}),Xt=w({name:"InfoCircle16Icon",svgTemplate:u`
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
    `}),av=w({name:"ArrowBarUp24Icon",svgTemplate:u`
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
    `}),sv=w({name:"ArrowForwardUp24Icon",svgTemplate:u`
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
    `}),Ja=w({name:"ArrowLeft24Icon",svgTemplate:u`
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
    `}),lv=w({name:"ArrowLoopLeft24Icon",svgTemplate:u`
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
    `}),cv=w({name:"ArrowLoopRight24Icon",svgTemplate:u`
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
    `}),Ka=w({name:"ArrowRight24Icon",svgTemplate:u`
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
    `}),m0=w({name:"ArrowsSort24Icon",svgTemplate:u`
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
    `}),uv=w({name:"ArrowsSortAscending24Icon",svgTemplate:u`
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
    `}),dv=w({name:"ArrowsSortDescending24Icon",svgTemplate:u`
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
    `}),hv=w({name:"Bucket24Icon",svgTemplate:u`
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
    `}),fv=w({name:"BuildingStore24Icon",svgTemplate:u`
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
    `}),mv=w({name:"CalendarEvent24Icon",svgTemplate:u`
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
    `}),pv=w({name:"Cash24Icon",svgTemplate:u`
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
    `}),gv=w({name:"Chain24Icon",svgTemplate:u`
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
    `}),p0=w({name:"CheckMark24Icon",svgTemplate:u`
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
    `}),g0=w({name:"ChevronDown24Icon",svgTemplate:u`
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
    `}),vv=w({name:"ChevronUp24Icon",svgTemplate:u`
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
    `}),wv=w({name:"Circle24Icon",svgTemplate:u`
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
    `}),v0=w({name:"CircleDot24Icon",svgTemplate:u`
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
    `}),bv=w({name:"CirclePlus24Icon",svgTemplate:u`
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
    `}),yv=w({name:"CircleWavyCheck24Icon",svgTemplate:u`
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
    `}),$v=w({name:"Clock24Icon",svgTemplate:u`
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
    `}),w0=w({name:"Code24Icon",svgTemplate:u`
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
    `}),b0=w({name:"Copy24Icon",svgTemplate:u`
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
    `}),kv=w({name:"CreateFile24Icon",svgTemplate:u`
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
    `}),xv=w({name:"DotsVertical24Icon",svgTemplate:u`
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
    `}),Tv=w({name:"Download24Icon",svgTemplate:u`
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
    `}),Sv=w({name:"Edit24Icon",svgTemplate:u`
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
    `}),y0=w({name:"ExternalLink24Icon",svgTemplate:u`
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
    `}),Cv=w({name:"Filter24Icon",svgTemplate:u`
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
    `}),Mv=w({name:"Geometry24Icon",svgTemplate:u`
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
    `}),Av=w({name:"GridDots24Icon",svgTemplate:u`
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
    `}),Ev=w({name:"Heart24Icon",svgTemplate:u`
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
    `}),Iv=w({name:"Infinity24Icon",svgTemplate:u`
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
    `}),Lv=w({name:"Info24Icon",svgTemplate:u`
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
    `}),Pv=w({name:"LayersLinked24Icon",svgTemplate:u`
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
    `}),qv=w({name:"LayoutGrid24Icon",svgTemplate:u`
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
    `}),Nv=w({name:"Lifebuoy24Icon",svgTemplate:u`
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
    `}),Ov=w({name:"List24Icon",svgTemplate:u`
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
    `}),Bv=w({name:"ListDetails24Icon",svgTemplate:u`
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
    `}),Dv=w({name:"Loader24Icon",svgTemplate:u`
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
    `}),Xa=w({name:"LoaderAnimated24Icon",svgTemplate:u`
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
    `}),_v=w({name:"Lock24Icon",svgTemplate:u`
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
    `}),Hv=w({name:"LockOpen24Icon",svgTemplate:u`
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
    `}),Rv=w({name:"Menu24Icon",svgTemplate:u`
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
    `}),Fv=w({name:"Paper24Icon",svgTemplate:u`
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
    `}),Vv=w({name:"People24Icon",svgTemplate:u`
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
    `}),jv=w({name:"Person24Icon",svgTemplate:u`
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
    `}),zv=w({name:"Photo24Icon",svgTemplate:u`
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
    `}),Zv=w({name:"Refresh24Icon",svgTemplate:u`
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
    `}),$0=w({name:"Rocket24Icon",svgTemplate:u`
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
    `}),k0=w({name:"Search24Icon",svgTemplate:u`
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
    `}),Uv=w({name:"Send24Icon",svgTemplate:u`
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
    `}),Wv=w({name:"ShoppingCart24Icon",svgTemplate:u`
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
    `}),Gv=w({name:"Social24Icon",svgTemplate:u`
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
    `}),Yv=w({name:"Square24Icon",svgTemplate:u`
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
    `}),pc={interactionDuration:m`--toniq-interaction-transition-duration`,prettyDuration:m`--toniq-pretty-transition-duration`},Y={interaction:m`var(${pc.interactionDuration}, 84ms)`,pretty:m`var(${pc.prettyDuration}, 300ms)`};function mi(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Jv=(()=>{const e={backgroundColor:m`#ffffff`,foregroundColor:m`#000000`},t={...e,foregroundColor:m`#00D093`},r={...e,foregroundColor:m`#ACADAD`},n={...e,foregroundColor:m`#D6D6D6`},o={...t},i={...t,foregroundColor:m`#00A876`},a={...t,foregroundColor:m`#1D6852`},s={...n},l={...e,foregroundColor:m`#EAFBF7`},c={...e,backgroundColor:m`#D2EEFA`},d=mi(o),f=mi(i),p=mi(a),g=p,v={backgroundColor:m`#F1F3F6`,foregroundColor:e.foregroundColor},b={...v,foregroundColor:m`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:d,accentPrimaryHover:f,accentPrimaryActive:p,accentSecondary:v,accentTertiary:b}})(),x0=Jv;function gc(e,t){return q(`--toniq-${na(e)}-${na(t)}`)}const Qa=ar(x0,e=>({backgroundColor:gc(e,"backgroundColor"),foregroundColor:gc(e,"foregroundColor")}));function Re(e,t){const r=x0[e][t],n=Qa[e][t];return m`var(${n}, ${r})`}const $=ar(Qa,e=>({foregroundColor:Re(e,"foregroundColor"),backgroundColor:Re(e,"backgroundColor")}));function V(e){return m`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Bt=m`
    pointer-events: none;
    opacity: 0.3;
    ${Ne};
`;function yt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=q(Ut(n+r+t));return m`
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
    `}const T0={toniqFont:{"font-family":m`'Rubik', sans-serif`},normalWeightFont:{"font-weight":m`400`},boldFont:{"font-weight":m`600`},extraBoldFont:{"font-weight":m`900`},paragraphFont:{"line-height":m`24px`,"font-size":m`16px`},boldParagraphFont:{},labelFont:{"line-height":m`16px`,"font-size":m`12px`},boldLabelFont:{},h1Font:{"line-height":m`96px`,"font-size":m`64px`},h2Font:{"line-height":m`48px`,"font-size":m`32px`},h3Font:{"line-height":m`32px`,"font-size":m`24px`},monospaceFont:{"font-family":m`'Inconsolata', monospace`,"line-height":m`1.125em`}},Kv=ar(T0,(e,t)=>{const r=q(na(e.replace(/Font$/,"")));return ar(t,o=>{const i=q(o);return m`--toniq-font-${r}-${i}`})});function ze(e){const t=Kv[e],r=T0[e],n=Ge(t).map(o=>{const i=r[o],a=t[o];return m`
            ${q(o)}: var(${a}, ${i});
        `});return q(n.join(`
`))}const W=(()=>{const e=m`
        font-style: normal;
        color: ${$.pagePrimary.foregroundColor};
        ${ze("toniqFont")};
    `,t=m`
        ${e};
        ${ze("normalWeightFont")};
    `,r=m`
        ${e};
        ${ze("boldFont")};
    `,n=m`
        ${e};
        ${ze("extraBoldFont")};
    `,o=m`
        ${e};
        ${ze("paragraphFont")};
        ${t};
    `,i=m`
        ${e};
        ${o};
        ${r};
    `,a=m`
        ${e};
        ${ze("labelFont")};
        ${t};
    `,s=m`
        ${a};
        ${r};
    `,l=m`
        ${ze("h1Font")};
        ${n};
    `,c=m`
        ${ze("h2Font")};
        ${r};
    `,d=m`
        ${ze("h3Font")};
        ${r};
    `,f=m`
        ${ze("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:f}})(),vo={popupShadow:m`
        filter: drop-shadow(0px 12px 8px ${$.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:m`
        filter: drop-shadow(0px -12px 8px ${$.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:m`
        filter: drop-shadow(0px 12px 8px ${$.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Xv(e,t=!0){const r=q(e),n=e===":host"?m`
                  :host(:hover);
              `:m`
                  ${r}:hover
              `,o=t?m`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${$.pageInteraction.foregroundColor};
              }
          `:m``;return m`
        ${r} {
            border-radius: 16px;
            background-color: ${$.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${vo.popupShadow};
        }

        ${o}
    `}const Qv=w({name:"SquareCheck24Icon",svgTemplate:u`
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
    `}),Fn=w({name:"Trash24Icon",svgTemplate:u`
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
    `}),e5=w({name:"Upload24Icon",svgTemplate:u`
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
    `}),t5=w({name:"Wallet24Icon",svgTemplate:u`
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
    `}),r5=w({name:"WorldUpload24Icon",svgTemplate:u`
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
    `}),n5=w({name:"X24Icon",svgTemplate:u`
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
    `}),o5=w({name:"Folder48Icon",svgTemplate:u`
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
    `}),S0=w({name:"FolderOff48Icon",svgTemplate:u`
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
    `}),i5=w({name:"Kyc48Icon",svgTemplate:u`
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
                fill=${F["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${F["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${h["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                fill=${F["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${h["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),C0=w({name:"Api64Icon",svgTemplate:u`
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
    `}),a5=w({name:"CircleDashes64Icon",svgTemplate:u`
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
    `}),s5=w({name:"Rocket64Icon",svgTemplate:u`
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
    `}),l5=w({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),c5=w({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),M0="0 0 58 58",A0=xh`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,u5=w({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${M0}"
        >
            ${A0}
        </svg>
    `}),d5=w({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="24"
            height="24"
            viewBox="${M0}"
        >
            ${A0}
        </svg>
    `}),E0=w({name:"BrandDiscord24Icon",svgTemplate:u`
        <svg
            fill=${F["toniq-icon-fill-color"]("#5865f2")}
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
    `}),h5=w({name:"BrandDistrikt24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${F["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),f5=w({name:"BrandDscvr24Icon",svgTemplate:u`
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
    `}),m5=w({name:"BrandFacebookLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${F["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),p5=w({name:"BrandGoogleLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${F["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),g5=w({name:"BrandIcScan24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${F["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),I0=w({name:"BrandInstagram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${F["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),v5=w({name:"BrandInstagramFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${F["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),w5=w({name:"BrandMedium24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${F["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),b5=w({name:"BrandNftgeek24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${F["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),L0=w({name:"BrandTelegram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${F["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),P0=w({name:"BrandTiktok24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${F["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${F["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),y5=w({name:"BrandTiktokFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${F["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),q0=w({name:"BrandTwitch24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${F["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),N0=w({name:"BrandTwitter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${F["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),$5=w({name:"BioniqRobot100Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${F["toniq-icon-stroke-color"]("#8A2BE2")}
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
    `}),k5=w({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${F["toniq-icon-fill-color"](String($.brandPrimary.foregroundColor))}
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
    `}),ct={"core-16":[ov,iv,Xt],"core-24":[av,sv,Ja,lv,cv,Ka,m0,uv,dv,hv,fv,mv,pv,gv,p0,g0,vv,wv,v0,bv,yv,$v,w0,b0,kv,xv,Tv,Sv,y0,Cv,Mv,Av,Ev,Iv,Lv,Pv,qv,Nv,Ov,Bv,Dv,Xa,_v,Hv,Rv,Fv,Vv,jv,zv,Zv,$0,k0,Uv,Wv,Gv,Yv,Qv,Fn,e5,t5,r5,n5],"core-48":[o5,S0,i5],"core-64":[C0,a5,s5],cryptocurrencies:[l5,c5,u5,d5],"third-party-brands":[E0,h5,f5,m5,p5,g5,I0,v5,w5,b5,L0,P0,y5,q0,N0],toniq:[$5,k5]},x5=en({Discord:xt(void 0,""),Instagram:xt(void 0,""),Telegram:xt(void 0,""),TikTok:xt(void 0,""),Twitch:xt(void 0,""),Twitter:xt(void 0,""),website:xt(void 0,"")}),T5=x5.defaultValue,O0={Discord:E0,Instagram:I0,Telegram:L0,TikTok:P0,Twitch:q0,Twitter:N0,website:w0},vc="toniq-",{defineElement:te,defineElementNoInputs:S5}=Pa({assertInputs:e=>{if(!e.tagName.startsWith(vc))throw new Error(`Tag name should start with '${vc}' but got '${e.tagName}'`)}}),Pt=te()({tagName:"toniq-bold-space",styles:m`
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
            ${W.boldFont};
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
        `}}),ia=m`8px`;var Gr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(Gr||{});const ne=te()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ne};
        }

        :host(:hover) button {
            ${V($.accentPrimaryHover)};
        }

        :host(:active) button {
            ${V($.accentPrimaryActive)};
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
            border-radius: ${ia};
            ${V($.accentPrimary)};
            padding: 10px;
            transition:
                color ${Y.interaction},
                background-color ${Y.interaction},
                border-color ${Y.interaction};
        }

        ${yt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${V($.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${V($.pagePrimary)};
            border-color: ${$.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${Bt};
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
                  <${C.assign({icon:e.icon})}
                      class="icon-template"
                  ></${C}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function C5(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=es(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(f=>i==="+"?f>l:f<l).sort((f,p)=>i==="+"?f-p:p-f);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function M5(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(p,g){let v=parseFloat(p);return/%/.test(p)&&(v/=100,v*=g),v}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),f=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:f}}}function A5(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function B0(e){let t=[];for(const r of e.children)t=t.concat(r,B0(r));return t}function E5(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=B0(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const f=d.getBoundingClientRect();if(t&&!A5(r,f,a))continue;const p=window.getComputedStyle(d);let[g,v]=p.getPropertyValue("scroll-snap-align").split(" ");typeof v>"u"&&(v=g);const b=i==="x"?v:g,y=f[s]-r[s]+e[c];switch(b){case"none":break;case"start":n[i].start.push(y);break;case"center":n[i].center.push(y+f[l]/2);break;case"end":n[i].end.push(y+f[l]);break}}}return n}function es(e){const t=e.getBoundingClientRect(),r=M5(e),n=E5(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:wc([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:wc([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function wc(e){return Array.from(new Set(e))}const Vn="templates-container",I5=4e3;var aa=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(aa||{});const be=te()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${o2(`.${Vn}`)}

        .${q(Vn)} {
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
            transition: ${Y.pretty};
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

        .arrow ${C} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${V($.pagePrimary)};
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{pi({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||I5)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=bc(t.scrollSnapPositions,0),i=bc(t.scrollSnapPositions,-1);return u`
            <div>
                <div
                    class="arrow left ${ve({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${C.assign({icon:Ja})}
                        ${S("click",()=>{pi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${C}>
                </div>
                <div
                    ${Fr(()=>{r({scrollSnapPositions:es(sa(n)).x})})}
                    class=${Vn}
                    ${S("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>u`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${ve({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${C.assign({icon:Ka})}
                        ${S("click",()=>{pi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${C}>
                </div>
            </div>
        `}});function bc(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function sa(e){const t=e.shadowRoot.querySelector(`.${Vn}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function pi({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=sa(e),i=o.clientWidth,a=es(sa(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const f=L5(e,t),p=yc(o.scrollLeft,a,!1),g=t==="right"?1:-1,v=(o.clientWidth-f*3)*g,b=yc((p||0)+v,a,!0);t==="right"&&b>p?o.scrollTo({behavior:"smooth",left:b}):t==="left"&&b<p?o.scrollTo({behavior:"smooth",left:b}):C5(o,t)}}function L5(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function yc(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const at=te()({tagName:"toniq-checkbox",events:{checkedChange:J()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Re("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Re("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Re("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Re("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Re("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${Y.interaction},
                background-color ${Y.interaction},
                opacity ${Y.interaction};
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
            ${Ne};
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

        ${yt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${Bt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${C.assign({icon:p0})}
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
                ${S("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var la=(e=>(e.Default="default",e.Secondary="secondary",e))(la||{});const gi=te()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${W.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${V($.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${V($.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${C.assign({icon:e.icon})}></${C}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}}),vi=te()({tagName:"toniq-date-time",renderCallback({inputs:e}){var i,a;const t=Ng(e.fullDate),r=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(cn).join(" "),n=[t.date,t.time,`(${e.fullDate.timezone})`].join(" "),o=typeof e.relativeUnits=="boolean"?hc({start:e.fullDate,end:ra()}):hc({start:e.fullDate,end:ra(),allowedRelativeUnits:e.relativeUnits});return u`
            ${e.relativeUnits?u`
                      <span title=${n}>${o}</span>
                  `:u`
                      <span title=${n}>${r}</span>
                  `}
        `}}),P5="data-test-id",Wt=bt(class extends rt{constructor(e){super(e),this.element=q5(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(P5,e),Te}});function q5(e,t,r){N5(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function N5(e,t){if(e.type!==Kr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var ca=(e=>(e.Up="up",e.Down="down",e))(ca||{});const Cn=te()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:J(),openChange:J()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${W.boldParagraphFont};
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

        ${yt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${Y.interaction} linear transform;
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
            ${Ne};
            ${V($.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${V($.pagePrimary)}
            ${vo.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${vo.popupShadowReversed};
        }

        .selected-label-prefix {
            ${W.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ne};
        }

        .select-options .option.selected {
            ${V($.accentPrimary)}
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
            ${Bt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${C.assign({icon:n.icon})}
                      ${Wt("rendered-input-icon")}
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
                        <${C.assign({icon:g0})}
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
        `}}),He=te()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>!!e.linkDisabled},events:{routeChangeTriggered:J()},styles:({hostClasses:e})=>m`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){if(e.linkDisabled){o.preventDefault();return}e.treatAsRouteChange&&Ba(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?u`
                <a
                    href=${e.url}
                    ${S("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:u`
                <a href=${e.url} ${S("click",n)}><slot></slot></a>
            `}}),ua=360,D0=8;function _0(e){return(e-D0)/2}const Ze=nt({"main-image-size":ua,"secondary-image-size":_0(ua)}),Je=te()({tagName:"toniq-featured-flip-card-footer",styles:m`
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

        ${ne}, ${He} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Ze["secondary-image-size"].value} * 2);
        }

        ${He} ${ne} {
            width: 100%;
        }

        ${He} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Ze["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:J(),footerFlipCardButtonClick:J()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?Ge(n).map(i=>{const a=n[i];if(!a)return;const s=O0[i];return u`
                          <${He.assign({newTab:!0,url:a})}>
                              <${C.assign({icon:s})}></${C}>
                          </${He}>
                      `}).filter(cn):"";return u`
            <div class="buttons">
                ${e.viewMoreButtonUrl?u`
                          <${He.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${S(He.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${ne.assign({text:e.viewMoreButtonText,buttonStyle:Gr.Outline})}></${ne}>
                          </${He}>
                      `:u`
                          <${ne.assign({text:e.viewMoreButtonText,buttonStyle:Gr.Outline})}
                              ${S("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${ne}>
                      `}
                ${e.flipCardButtonText?u`
                          <${ne.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${S("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${ne}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),It=te()({tagName:"toniq-flip-card",events:{flippedChange:J()},styles:m`
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

        ${Xv(".card-face",!1)}

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
                class="flip-wrapper ${ve({flipped:e.flipped})}"
                ${S("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),K=te()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:J()},styles:m`
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
            ${W.h3Font};
            ${W.extraBoldFont};
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
            max-height: ${Ze["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Ze["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${D0}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${It} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${Ze["main-image-size"].value};
            height: ${Ze["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${Ze["secondary-image-size"].value};
            height: ${Ze["secondary-image-size"].value};
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

        .card-face.front ${Je} {
            margin-top: 24px;
        }

        .card-face.back ${Je} {
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
            ${W.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var p,g,v,b;const a=e.mainImageSize||ua,s=_0(a);Li({onElement:n,forCssVar:Ze["main-image-size"],toValue:`${a}px`}),Li({onElement:n,forCssVar:Ze["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(cn).join(" "),c=u`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],f=d?u`
                  <div class="main-image-wrapper">
                      ${((p=e.customTemplateCallback)==null?void 0:p.call(e,d))||u`
                          <${dt.assign({imageUrl:d})}></${dt}>
                      `}
                  </div>
              `:"";return u`
            <${It.assign({flipped:t.flipped})}
                ${S(Je.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(y=>{var x;return u`
                                    <div class="secondary-image-wrapper">
                                        ${((x=e.customTemplateCallback)==null?void 0:x.call(e,y))||u`
                                            <${dt.assign({imageUrl:y})}></${dt}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${Je.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${S(Je.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Je}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(v=e.infoParagraphs)==null?void 0:v.map(y=>u`
                                <p>${y}</p>
                            `)}
                    </div>
                    <${Je.assign({viewMoreButtonText:l,flipCardButtonText:(b=e.infoParagraphs)!=null&&b.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${S(Je.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Je}>
                </div>
            </${It}>
        `}});function da({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>da({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function H0({value:e,allowed:t,blocked:r}){const n=t?da({input:e,matcher:t}):!0,o=r?da({input:e,matcher:r}):!1;return n&&!o}function $c(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(H0({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var ha=(e=>(e.Default="default",e.Outline="outline",e))(ha||{});const Mn=te()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:J(),inputBlocked:J()},styles:({hostClasses:e})=>m`
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
                border-radius: ${ia};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${$.pagePrimary.backgroundColor};
                border-color: ${$.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${C} {
                color: ${$.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${C} {
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
                border-radius: ${ia};
                background-color: ${$.accentTertiary.backgroundColor};
                font: ${W.paragraphFont};
                gap: 4px;
            }

            ${yt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

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
                color: ${$.accentTertiary.foregroundColor};
            }

            .suffix {
                ${W.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${Bt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Ne};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=$c({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
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
                    ${S("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)H0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:f}=$c({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(f))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${ke(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var jn=(e=>(e.Small="small",e.Large="large",e.WholePage="whole-page",e))(jn||{});const wi=te()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size==="large","toniq-loading-whole-page":({inputs:e})=>e.size==="whole-page"},styles:({hostClasses:e})=>m`
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
            <${C.assign({icon:Xa,fitContainer:e.size!=="small"})}></${C}>
        `});async function O5(e){return navigator.clipboard.writeText(e)}const B5="…";function D5(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${B5}${n}`}function _5(e){return!(e%1)}function H5(e){return e.letterCount==null?4:_5(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const fe=te()({tagName:"toniq-middle-ellipsis",events:{copied:J()},cssVars:{"toniq-middle-ellipsis-text-color":$.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":$.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":$.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":$.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Y.interaction};
            ${W.paragraphFont};
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

        ${yt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${Y.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=H5(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?D5(i,a):i,f=c?i:"",p=s?y0:l?b0:void 0,g=p?u`
                  <${C.assign({icon:p})}></${C}>
              `:"",v=u`
            <span title=${f} class="text-content">
                ${ke(!!e.copyOnClick,u`
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
                        ${S("click",b=>{var x,M;const y=(M=(x=b.currentTarget)==null?void 0:x.querySelector)==null?void 0:M.call(x,"a");if(!y)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");y.click()})}
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
                        ${S("click",async()=>{await O5(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${v} ${g}
                    </button>
                `:u`
                    ${v}
                `:u``}}),kc="...";function R5(e,t,r=7,n=5){let o;e=Nr({value:e,min:1,max:t}),r=Nr({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?bi(t-o,t):e>o?bi(Math.min(s.start,t-o),Math.min(s.end,t)):bi(1,Math.min(t,o+1));function c(f,p){return l.length+1!==t?p:[f]}const d=l[l.length-1];if(d&&d<t){const f=c(t,[kc,t]);return[...l,...f]}else return l[0]!==1?c(1,[1,kc]).concat(l):l}function bi(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}te()({tagName:"toniq-pagination",styles:m`
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
            ${Ne};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${V($.accentSecondary)};
        }

        .control:hover {
            ${V($.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${V($.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${W.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${V($.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${V($.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:J()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${S("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${C.assign({icon:Ja})}></${C}>
                </button>
                ${R5(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${ve({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${S("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${S("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${C.assign({icon:Ka})}></${C}>
                </button>
            `}});const U=te()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:J()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Re("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Re("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Re("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Re("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>m`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${Y.interaction},
                background-color ${Y.interaction},
                opacity ${Y.interaction};
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
            transition: ${Y.interaction};
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

        ${yt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Bt};
        }

        .wrapper.disabled::before {
            ${Bt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Yg()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return F5(e.entries).map(i=>V5(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function F5(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${U.tagName} was given duplicate entry values.`),Object.values(t)}function V5(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${ve({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${S("click",()=>{n()})}
        >
            <input
                ${S("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function yi(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const f=e[d+1];return f==null?!0:c<=t&&f>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function j5(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=z5(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(xc(o,r),o.length>r&&xc(o,r)),o}function xc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function z5(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const L={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},yr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function Z5(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${L.lowerLabelWrapper} .${L.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${L.upperLabelWrapper} .${L.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function U5(e,t=8){const r=Z5(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function $i({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function Yr(e){return jg(e)&&e.min!==void 0&&e.max!==void 0}function fa(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${L.range}`);return(t==null?void 0:t.clientWidth)??0}function ki(e,t,r){return`${r?nv(e):e} ${t}`}function W5({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function G5({value:e,double:t,min:r,max:n}){return t?Yr(e)?{min:Nr({value:e.min,min:r,max:Math.min(e.max,n)}),max:Nr({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:Yr(e)?r:Nr({value:e,min:r,max:n})}function Y5({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:Yr(e)?{min:yi(n,e.min),max:yi(n,e.max)}:yi(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function xi(e,t,r){return r?t[e]||0:e}function J5(e){return{actualLimits:W5(e),actualValue:G5(e)}}function K5(e,t){var n,o,i;let r=!1;if(Yr(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${L.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${L.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${L.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function R0(e,t){const{actualValue:r,actualLimits:n}=J5({...e}),o=j5(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=Y5({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=fa(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Ct=16,Tc=m`
    ${Ct}px
`,Sc=m`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Tc};
    width: ${Tc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Y.interaction};
    ${V($.accentPrimary)};
`,Cc=m`
    transform: scale(1.2);
`;function Ar(e){requestAnimationFrame(()=>{const t=R0(e.instanceInputs,e).elementValue;K5(t,e)&&(e.setAttribute("disabled","true"),Ar(e))})}const H=te()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:J()},styles:m`
        :host {
            display: block;
        }

        .${q(L.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${V($.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${V($.accentPrimary)};
        }

        .${q(L.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${W.boldParagraphFont};
            ${Ne};
        }

        .${q(L.labelPixelMarginWrapper)},
            .${q(L.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${q(L.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${q(L.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${yt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${q(L.lowerSlider)},
        .${q(L.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${q(L.slider)}::-moz-range-thumb {
            ${Sc}
        }

        /* these selectors fail if combined with a comma */
        .${q(L.slider)}::-webkit-slider-thumb {
            ${Sc}
        }

        /* these selectors fail if combined with a comma */
        .${q(L.slider)}::-webkit-slider-thumb:hover {
            ${Cc}
        }

        /* these selectors fail if combined with a comma */
        .${q(L.slider)}::-moz-range-thumb:hover {
            ${Cc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Ar(e)}),e.addEventListener("keydown",()=>{Ar(e)}),e.addEventListener("keyup",()=>{Ar(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:f,rangeWidth:p}=R0({...e},t);if(Ar(t),Yr(d))return g(a,d,f);return b(a,d,f);function g(y,x,M){const D={left:Ut((p-Ct)*(x.min-M.min)/(M.max-M.min)+Ct/2),right:Ut((p-Ct)*(M.max-x.max)/(M.max-M.min)+Ct/2)},z=ki(y.min,c,l),ie=ki(y.max,c,l);requestAnimationFrame(()=>{const Se=U5(t);Se!==o.labelOverlap&&i({labelOverlap:Se})});const ue=(M.max-x.max)/(M.max-M.min)>.5,re=$i({value:x.min,limits:{min:M.min,max:x.max},flip:!0}),O=$i({value:x.max,limits:{min:x.min,max:M.max},flip:!1}),ce=o.labelOverlap&&ue?o.labelOverlap:0,fr=o.labelOverlap&&!ue?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${Fr(()=>{i({rangeWidth:fa(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${D.left}; right:${D.right}"
                    ></div>
                    <span
                        class="${L.labelOuterWrapper} ${L.lowerLabelWrapper}"
                        style="left: ${D.left}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-left: ${hi(re)}"
                        >
                            <span
                                class="${L.labelPixelMarginWrapper}"
                                style="margin-right: ${Ut(fr)}"
                                ${Wt(yr.lowerLabel)}
                            >
                                ${z}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${L.labelOuterWrapper} ${L.upperLabelWrapper} ${L.rightAlignedLabelWrapper}"
                        style="right: ${D.right}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-right: ${hi(O)}"
                        >
                            <span
                                class="${L.labelPixelMarginWrapper}"
                                style="margin-left: ${Ut(ce)}"
                                ${Wt(yr.upperLabel)}
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
                            class="${L.lowerSlider} ${L.slider}"
                            .min=${M.min}
                            .max=${M.max}
                            .value=${x.min}
                            ${S("input",Se=>{const _t=Se.target,mr={...y,min:xi(Number(_t.value),s,l)};v(mr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${L.upperSlider} ${L.slider}"
                            step=${e.step}
                            .min=${M.min}
                            .max=${M.max}
                            .value=${x.max}
                            ${Wt(yr.slider)}
                            ${S("input",Se=>{const _t=Se.target,mr={...y,max:xi(Number(_t.value),s,l)};v(mr)})}
                        />
                    </div>
                </div>
            `}function v(y){i({internalValue:y}),e.disabled||n(new r.valueChange(y))}function b(y,x,M){const D=Ut((p-Ct)*(M.max-x)/(M.max-M.min)+Ct/2),z=ki(y,c,l),ie=$i({value:x,limits:M,flip:!1});return u`
                <div
                    class="range"
                    ${Fr(()=>{i({rangeWidth:fa(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${D}"></div>
                    <span
                        class="${L.labelOuterWrapper} ${L.rightAlignedLabelWrapper}"
                        style="right: ${D}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-right: ${hi(ie)}"
                            ${Wt(yr.label)}
                        >
                            ${z}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${L.slider}"
                        step=${e.step}
                        .min=${M.min}
                        .max=${M.max}
                        .value=${x}
                        ${Wt(yr.slider)}
                        ${S("input",ue=>{const re=ue.target,O=xi(Number(re.value),s,l);v(O)})}
                    />
                </div>
            `}}});var F0=(e=>(e.Default="default",e.TextOnly="text-only",e))(F0||{});const Ti=te()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${W.boldParagraphFont};
            ${Ne};
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

            ${V($.accentSecondary)};
            transition:
                color ${Y.interaction},
                background-color ${Y.interaction};
        }

        ${yt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${V($.accentPrimary)};
        }

        :host(:hover) button {
            ${V($.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${V($.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${V($.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${V($.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${V($.pageInteraction)};
            border-color: ${$.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${V($.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${$.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${V($.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${Bt};
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
        `}}),Or=S5({tagName:"toniq-tooltip",styles:m`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${$.accentPrimary.backgroundColor};
            ${vo.menuShadow};
            background-color: ${$.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),zn=te()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${Y.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${Y.pretty} ${Y.pretty},
                opacity ${Y.pretty};
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
                ${S("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${Or}>${e.tooltipContent}</${Or}>
            </div>
        `}}),Er=te()({tagName:"toniq-top-tabs",events:{valueChange:J()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>m`
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
            border-bottom: 1px solid ${$.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${Y.interaction},
                border-color ${Y.interaction};
        }

        button {
            ${de};
            cursor: pointer;
            ${W.paragraphFont};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
            transition: padding-bottom ${Y.interaction};
        }

        button {
            max-width: 300px;
        }

        ${Pt} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected button {
            ${W.boldFont};
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
                            ${qf("tab")}
                            role="presentation"
                            class=${ve({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${S("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${Pt.assign({text:n.label})}></${Pt}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),V0=Z({title:"Data",parent:void 0}),wo=te()({tagName:"toniq-icon-book-viewer",styles:m`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${$.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${C.assign({icon:e.icon})}></${C}>
        `}}),Oo=Object.values(ct).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),X5=Object.keys(Oo).sort();function ts(e){return{controlType:N.Dropdown,initValue:e,options:["None",...X5]}}const j0={"CSS color":{controlType:N.Color,initValue:""},[String(h["toniq-icon-stroke-color"].name)]:{controlType:N.Color,initValue:""},[String(h["toniq-icon-fill-color"].name)]:{controlType:N.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:N.Color,initValue:""},[String(h["toniq-icon-stroke-width"].name)]:{controlType:N.Number,initValue:2}};function Zn(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),Zg(n,"number")&&(n=Ga({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const Q5=Z({title:"Social Urls",parent:V0,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${wo.assign({icon:n})}></${wo}>
                    `}})}Object.entries(O0).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),oe=Z({title:"Elements",parent:void 0}),e4=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:m`
            ${Pt} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],t4=Z({title:Pt.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e4.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:m`
                    .bold {
                        ${W.boldFont}
                    }

                    ${t.extraStyle??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Pt.assign({text:t.text})}
                            ${S("click",()=>{n({isBold:!r.isBold})})}
                            class=${ve({bold:r.isBold})}
                        ></${Pt}>
                        More text
                    `}})})}}),r4=Z({parent:oe,title:ne.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:Gr.Secondary}},{name:"Outline",inputs:{buttonStyle:Gr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:m`
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
                        <${ne.assign({icon:Fn,...r.inputs})}></${ne}>
                        <${ne.assign(n.showIcon?{icon:Fn,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${ne}>
                        <${ne.assign({text:"Button",icon:Fn,...r.inputs})}></${ne}>
                        <${ne.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${ne}>
                        <${ne.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${ne}>
                    `}})})}}),Mc=m`
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
`,n4=Z({parent:oe,title:be.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Mc,renderCallback(){return u`
                    <${be.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ct["core-24"].map(t=>{const r=m`
                                padding: 24px;
                                border: 1px solid ${$.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${be}>
                    <${be.assign({enableAutomaticCycling:!0,templates:ct["core-24"].map(t=>{const r=m`
                                padding: 100px 24px;
                                border: 1px solid ${$.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${C.assign({icon:t})} style=${r}></${C}>
                            `})})}></${be}>
                    <${be.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ct["core-24"].map(t=>{const r=Gg({min:0,max:150}),n=m`
                                padding: 100px ${r}px;
                                border: 1px solid ${$.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${C.assign({icon:t})} style=${n}></${C}>
                            `})})}></${be}>
                `}}),e({title:"banner style",styles:Mc,renderCallback(){const t=m`
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
                    <${be.assign({enableAutomaticCycling:!0,style:aa.BannerStyle,templates:ct["core-24"].map(r=>u`
                                <div style=${t}>
                                    <${C.assign({icon:r})}></${C}>
                                </div>
                            `)})}></${be}>
                    <${be.assign({enableAutomaticCycling:!0,style:aa.BannerStyle,templates:[ct["core-24"][0]].map(r=>u`
                                <div style=${t}>
                                    <${C.assign({icon:r})}></${C}>
                                </div>
                            `)})}
                        class=${be.hostClasses["toniq-carousel-banner-style"]}
                    ></${be}>
                `}})}});function o4(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:N.Color,initValue:""}]);return Object.fromEntries(t)}function i4(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(cn);return q(t.join(`
`))}const a4=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Si=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],s4=Z({parent:oe,title:at.tagName,controls:{Text:{controlType:N.Text,initValue:"Text"},...o4(at)},elementExamplesCallback({defineExample:e}){a4.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Si.map(r=>!!r.inputs.checked),extraEntryStatuses:Si.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:m`
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
                                    <${at.assign({...t.inputs,...oa(i.inputs,["checked"]),checked:!!((f=r.extraEntryStatuses[a])!=null&&f[d]),text:c})}
                                        ${S(at.events.checkedChange,()=>{const p=[...r.extraEntryStatuses];p[a][d]=!p[a][d],n({extraEntryStatuses:p})})}
                                    ></${at}>
                                `}),l=i4(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${at.assign({...t.inputs,...oa(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${S(at.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${at}>
                                ${s}
                            </div>
                        `})}})})}}),l4=Z({parent:oe,title:gi.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Xt}},{inputs:{icon:Xt}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Xt},template:u`
                    HTML child
                `},{customStyle:m`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:la.Default}},{title:"secondary style",inputs:{style:la.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${gi.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${ke(!!o.template,o.template)}</${gi}>
                    `)}})})}}),c4=Z({title:vi.tagName,parent:oe,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=ra();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"humanize in before date",inputs:{fullDate:di(t,{weeks:-1}),parts:{date:!0,time:!0},relativeUnits:!0}},{title:"humanize in after date",inputs:{fullDate:di(t,{months:1}),parts:{date:!0,time:!0},relativeUnits:!0}},{title:"humanize with custom relative unit",inputs:{fullDate:di(t,{days:-2}),parts:{date:!0,time:!0},relativeUnits:[Rn.Day,Rn.Hour,Rn.Minute]}}].forEach(n=>{e({title:n.title,renderCallback(){return u`
                        <${vi.assign({...n.inputs})}></${vi}>
                    `}})})}}),An=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],u4=[{title:"default"},{title:"transparent background",customStyle:m`
            ${Qa.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Ac=[{},{customStyle:m`
            width: 500px;
            height: 100px;
        `},{customStyle:m`
            max-height: 30px;
            min-height: 30px;
        `}],d4=Z({title:Cn.tagName,parent:oe,controls:{Selected:{controlType:N.Dropdown,initValue:An[0].label,options:An.map(e=>e.label)},Direction:{controlType:N.Dropdown,initValue:"Down",options:Ug(ca)},Icon:ts(m0.name),Prefix:{controlType:N.Text,initValue:"Sort by: "},"Force open":{controlType:N.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){u4.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Ac.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:m`
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
                            <${Cn.assign({...t.inputs,...i.inputs,options:An,value:r.selected[a]??An.find(l=>l.label===o.Selected),icon:Oo[o.Icon],selectedLabelPrefix:o.Prefix,direction:ca[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${S(Cn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Cn}>
                        `})}})})}}),Ec="/toniq-labs-design-system";function h4(...e){const r=[globalThis.location.pathname.startsWith(Ec)?Ec:"",...e].filter(cn);return Xg(...r)}const $r=Array(30).fill(h4("/toniq-labs-logo.png")),Br=["Hello there.","There is stuff here."],En=Br.concat(Array(30).fill(Br)),f4=Z({title:K.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({infoParagraphs:En,imageUrls:$r,socialUrls:T5,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${K}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:$r,title:"Featured Stuff",infoParagraphs:void 0})}></${K}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:En,viewMoreUrl:"https://toniqlabs.com"})}
                        ${S(K.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${K}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:En})}></${K}>
                `}}),e({title:"with custom height",styles:m`
                ${K} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:En})}></${K}>
                `}}),e({title:"smaller",styles:m`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:$r,infoParagraphs:Br,title:"Featured Stuff"})}></${K}>
                `}}),e({title:"with custom template",styles:m`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:$r,infoParagraphs:Br,title:"With custom Template",customTemplateCallback(t){return u`
                                <${dt.assign({imageUrl:t})}></${dt}>
                            `}})}></${K}>
                `}}),e({title:"with custom template statuses",styles:m`
                ${K} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${K.assign({imageUrls:$r.map((t,r)=>r%2?"/invalid-image.png":t),infoParagraphs:Br,title:"With custom Template Statuses",customTemplateCallback(t){return u`
                                <${dt.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${rr.Loading}
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
                                        <${C.assign({icon:Xa,fitContainer:!0})}
                                            style=${m`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${C}>
                                    </div>
                                    <div
                                        slot=${rr.Error}
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
                                        <${C.assign({icon:ad,fitContainer:!0})}
                                            style=${m`
                                                ${E["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${C}>
                                    </div>
                                </${dt}>
                            `}})}></${K}>
                `}})}}),m4=Z({title:It.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:m`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${It.assign({flipped:t.flipped})}
                        ${S(It.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${It}>
                `}})}}),p4=Z({parent:oe,title:He.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}},{title:"link disabled",inputs:{linkDisabled:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${He.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${He}>
                    `}})})}}),g4=Z({title:C.tagName,parent:oe,controls:j0,elementExamplesCallback({defineExample:e}){const t=[{icon:C0},{icon:S0},{icon:v0},{icon:Xt},{icon:void 0}];e({title:"sizes",styles:m`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${C.assign({icon:n.icon})}
                            style=${Zn(r)}
                        ></${C}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=m`
                    ${h["toniq-icon-fill-color"].name}: orange;
                `;return ct["third-party-brands"].map(o=>u`
                        <${C.assign({icon:o})}
                            style=${Zn(r)}
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
                    <${C.assign({icon:Xt,fitContainer:!0})}
                        style=${Zn(r)}
                    ></${C}>
                `}})}}),v4=Z({title:Mn.tagName,parent:oe,controls:{"External value":{controlType:N.Text,initValue:""},Placeholder:{controlType:N.Text,initValue:"placeholder"},Icon:ts(k0.name),Suffix:{controlType:N.Text,initValue:"ICP"},"No browser helps":{controlType:N.Checkbox,initValue:!1},"Blocked characters":{controlType:N.Text,initValue:""},"Exclusive characters":{controlType:N.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:m`
                    height: 75px;
                    width: 300px;
                `},{customStyles:m`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:ha.Default}},{title:"outline",inputs:{style:ha.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${Mn.assign({...n.inputs,value:o["External value"]||i.value,icon:Oo[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${S(Mn.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Mn}>
                        `))}})})}}),w4=Z({title:wi.tagName,parent:oe,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:jn.Small}},{title:"large",inputs:{size:jn.Large}},{title:"whole page",inputs:{size:jn.WholePage},styles:m`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??m``,renderCallback(){return u`
                        <${wi.assign(r.inputs)}></${wi}>
                    `}})})}}),b4=Z({title:fe.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
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
                `}})}}),kr=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Me={basic:kr,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...kr.slice(1)],disabled:[{...kr[0],disabled:!0},...kr.slice(1)],noLabels:Og(kr,e=>({...e,label:void 0}))},y4=Z({title:U.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Me.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Me.basic,value:t.selectedValue})}
                        ${S(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Me.basic[0].value},styles:m`
                ${U} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Me.basic,value:t.selectedValue})}
                        ${S(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Me.longText[0].value},styles:m`
                ${U} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Me.longText,value:t.selectedValue})}
                        ${S(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Me.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Me.noLabels,value:t.selectedValue})}
                        ${S(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Me.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Me.disabled,value:t.selectedValue})}
                        ${S(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Me.basic[0].value},styles:m`
                ${U} {
                    ${U.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${U.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${U.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${U.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${U.assign({entries:Me.basic,value:t.selectedValue})}
                        ${S(U.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${U}>
                `}})}}),Ke=m`
    ${H} {
        width: 300px;
    }
`,Ci={min:10,max:50},$4=Z({title:H.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,...Ci})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({double:!0,value:t.value,min:0,max:100})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,...Ci,suffix:"ICP"})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:m`
                ${Ke}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,min:-100,max:100})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:m`
                ${Ke}

                ${H} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({value:t.value,...Ci})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${H}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${Ke}

                ${H} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${H.assign({double:!0,value:t.value,min:0,max:100})}
                        ${S(H.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${H}>
                `}})}}),k4=[{title:"default",inputs:{}},{title:"text only",inputs:{style:F0.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Ic=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],x4=Z({title:Ti.tagName,parent:oe,controls:{Text:{controlType:N.Text,initValue:"Toggle Button"},Icon:ts($0.name)},elementExamplesCallback({defineExample:e}){k4.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Ic.map(r=>!!r.inputs.toggled)},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Ic.map((i,a)=>u`
                            <${Ti.assign({...t.inputs,toggled:r.buttonStates[a],icon:Oo[o.Icon],text:o.Text,...oa(i.inputs,["toggled"])})}
                                ${S("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Ti}>
                        `)}})})}}),T4=Z({parent:oe,title:zn.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:m`
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
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),S4=Z({parent:oe,title:Or.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${zn.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${Or}>This is a tooltip.</${Or}>
                `}})}}),C4=[T4,S4],M4=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:m`
            :host {
                width: 500px;
            }

            ${Er} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:m``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],A4=Z({title:Er.tagName,parent:oe,elementExamplesCallback({defineExample:e}){M4.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:m`
                    ${t.extraStyles??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Er.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${S(Er.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${Er}>
                    `}})})}}),z0=Z({title:"Icons",parent:void 0,controls:j0}),E4=Object.entries(ct).map(([e,t])=>Z({title:e,parent:z0,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${wo.assign({icon:n})}
                                    style=${Zn(o)}
                                ></${wo}>
                            `}}))}}));function Z0(e){const t=I4(e),r=ar(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Ge(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function I4(e){typeof e!="string"&&(e=String(e));const n=`{"${Dg(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const rs=Z({title:"Styles",parent:void 0}),L4=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${W.labelFont};
        ${W.monospaceFont};
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
        ${W.h2Font};
    }
`;function P4(e,t,r){const n=Z0(V(r));return e({title:t,styles:L4,renderCallback(){return u`
                <div class="color-example" style=${V(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const q4=Z({title:"Colors",parent:rs,elementExamplesCallback({defineExample:e}){Ge($).map(t=>P4(e,t,$[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),N4=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${W.labelFont};
        ${W.monospaceFont};
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
`;function O4(e,t,r){const n=Z0(r);return e({title:t,styles:N4,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Ge(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const B4=Z({title:"Fonts",parent:rs,elementExamplesCallback({defineExample:e}){Ge(W).map(t=>{const r=W[t];return O4(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),D4=[oe,z0,rs,V0],_4=[...E4,...C4,Q5,t4,r4,n4,s4,l4,q4,c4,d4,f4,m4,B4,p4,g4,v4,w4,b4,y4,$4,x4,A4].sort((e,t)=>e.title.localeCompare(t.title)),H4=[...D4,..._4];To({tagName:"toniq-design-system-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ni} {
            height: 100%;
            width: 100%;
            ${W.paragraphFont};
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
            <${ni.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:H4,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${Ue.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${ni}>
        `}});