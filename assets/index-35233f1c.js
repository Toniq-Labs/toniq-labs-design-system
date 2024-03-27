var wh=Object.defineProperty;var vh=(e,t,r)=>t in e?wh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ln=(e,t,r)=>(vh(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const bh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Me(e,t){return e?bh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function jc(e,t){return e&&t.every(r=>Me(e,r))}function le(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function yh(e){return le(e).map(t=>e[t])}function kh(e){return le(e).map(t=>[t,e[t]])}function $h(e){return Object.fromEntries(e)}function xh(e,t){return e.includes(t)}function Th(e,t){return e.map(t)}function we(e){return!!e}function zc(e,t){return e.match(t)??[]}function Ch(e){return e.replace(/,/g,"")}function Zc(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Sh={capitalizeFirstLetter:!1};function Mh(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ah(e,t){return t.capitalizeFirstLetter?Mh(e):e}function Eh(e,t=Sh){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Ah(n,t)}var vr;(function(e){e.Upper="upper",e.Lower="lower"})(vr||(vr={}));function Ih(e){return e.toLowerCase()!==e.toUpperCase()}function Cs(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Ih(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===vr.Upper&&o!==o.toUpperCase())return!1;if(t===vr.Lower&&o!==o.toLowerCase())return!1}return!0}function ho(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Cs(a,vr.Lower,{blockNoCaseCharacters:!0})||Cs(s,vr.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function br(e,t){return e.split(t)}const qh=String(NaN);function Wc(e){if(typeof e=="string"&&isNaN(Number(e)))return qh;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=zc(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(f=>f.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function Ph(e){return typeof e=="number"?e:Number(typeof e=="string"?Ch(e):e)}function Lh(e){return String(e).includes("e")}function Nh({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Gi(e){const t=Math.pow(10,e.digits),r=e.number*t;return Number((Math.round(r)/t).toFixed(e.digits))}function fr({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}var on;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(on||(on={}));function Oh(e,t){let r=0,n;return o=>{n=o;const i=Date.now();r>i||(e===on.FirstThenWait?n():e===on.AfterWait&&setTimeout(()=>{n==null||n()},t.milliseconds),r=i+t.milliseconds)}}function Uc(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Nt(r).trim()).join(`
`))}function Bh(e){return e?e.map(Nt).filter(we).join(`
`):""}function Nt(e){return e?e instanceof Error?e.message:Me(e,"message")?String(e.message):String(e):""}function Gc(e){return e instanceof Error?e:new Error(Nt(e))}function Dh(e,t){const r=Gc(e);return r.message=`${t}: ${r.message}`,r}class Rh extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function fo(e){return Array.isArray(e)?"array":typeof e}function Q(e,t){return fo(e)===t}function _h(e,t){if(!(Q(e,"string")||Q(e,"number")||Q(e,"symbol")))throw new Rh(t||`value is of type '${fo(e)}' but expected a PropertyKey.`)}function ri(e){try{return _h(e),!0}catch{return!1}}function ze(e){return!!e&&typeof e=="object"}function Yc(e,t,r=!1,n={}){const o=le(e),i=new Set(le(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Me(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(f){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${f}`)}const l=e[a],c=t[a];n[a]||Jc(l,c,s,r,n[a]??{})})}function Jc(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Me(t,"constructor")&&(!Me(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(h=>{try{Jc(l,h,r,n,o);return}catch(m){return new Error(`entry at index "${c}" did not match expected shape: ${Nt(m)}`)}}).filter(we).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ze(t)&&Yc(e,t,n,o)}function Ss({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Ms="Failed to compare objects using JSON.stringify";function As(e,t,r){return Ss({source:e,errorHandler(n){if(r)return"";throw n}})===Ss({source:t,errorHandler(n){if(r)return"";throw n}})}function it(e,t,r={}){try{return e===t?!0:ze(e)&&ze(t)?As(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>it(e[o],t[o])):!1:As(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Gc(n);throw o.message.startsWith(Ms)||(o.message=`${Ms}: ${o.message}`),o}}function Kc(e){return le(e).filter(t=>isNaN(Number(t)))}function Xc(e){return Kc(e).map(r=>e[r])}function Hh(e,t){return Xc(t).includes(e)}function Qc(e,t){return le(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function an(e,t){return Qc(e,r=>!t.includes(r))}function Fh(e,t){return Qc(e,r=>t.includes(r))}function Vh(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ye(e,t){let r=!1;const n=le(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(le(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Yi(e,t){try{return eu(e,t),!0}catch{return!1}}function eu(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function qa(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${qa.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ji(e){const t=qa();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function jh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const tu=jh();function zh({min:e,max:t}){const{min:r,max:n}=Nh({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do tu.getRandomValues(s),l=s.reduce((c,f,h)=>c+f*256**h,0);while(l>=a);return r+l%o}function ru(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return tu.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Zh({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Wh(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(we);return t.length?`?${t.join("&")}`:""}function Uh(e){return Zh({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=br(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(we)}function Gh(e,t){const r=Q(e,"string")?new URL(e):e,n=Uh(r.search),o=Object.fromEntries(n);return t&&Yc(o,t),o}const Yh="%",Jh="px";function Vt(e){return Pa({value:e,suffix:Jh})}function ni(e){return Pa({value:e,suffix:Yh})}function Pa({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const oi="://";function sn(...e){const t=e.join("/"),[r,n=""]=t.includes(oi)?t.split(oi):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,f)=>{if(i)return s;const h=f[c+1];let m=l;const g=!l.includes("?")&&(h==null?void 0:h.startsWith("?"));if(h!=null&&h.startsWith("?")||g){i=!0;let w=!1;const k=f.slice(g?c+2:c+1).reduce(($,C)=>(C.includes("#")&&(w=!0),w?$.concat(C):[$,C].join("&")),"");m=[l,h,k].join("")}return s.concat(m)},[]);return[r,r?oi:"",a.join("/")].join("")}const Kh=["k","M","B","T","P","E","Z","Y"];function La({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function Xh(e,t,r){const[n,o]=br(e,"."),i=Wc(n),a=zc(i,/,/g).length,s=t[a-1],[l,c]=br(i,","),f=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[La({beforeDot:l,afterDot:f,maxLength:r-1}),s].join("")}const Es=3;function Qh({input:e,maxLength:t}){const r=String(e),[n,o]=br(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=br(n,"."),f=i.length+Es;return f===t?[l,s].join(""):f>t?a==="-"?"0":String(1/0):[La({afterDot:c,beforeDot:l,maxLength:t-i.length+Es}),s].join("")}function ef(e,t){const[r,n]=br(Wc(e),".");if(r.length<=t)return La({beforeDot:r,afterDot:n,maxLength:t})}function tf(e,{customSuffixes:t=Kh,maxLength:r=6}={}){const n=Ph(e);if(isNaN(n)||n===1/0)return String(n);if(Lh(n))return Qh({input:n,maxLength:r});const o=String(n),i=ef(o,r);return i??Xh(o,t,r)}function rf(e,t){return Me(e,"entryType")&&e.entryType===t}var be;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(be||(be={}));function er(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const nu=Symbol("any-type"),nf={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:"",[_.Hidden]:nu,[_.Number]:0,[_.Text]:""};function of(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=nf[o.controlType];i!==nu&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Na(e,t){const r=po(e.title);return e.parent?[...Na(e.parent,!1),po(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function po(e){return Zc(e).toLowerCase().replaceAll(/\s/g,"-")}function af({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function V(e){const t={...e,entryType:be.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:be.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(we)};r.add(n.title),t.elementExamples[po(o.title)]=o}}),t}var at;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(at||(at={}));async function Ki(e=1){const t=qa();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function sf(e){return lf(e,1)}async function lf(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{eu(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=globalThis,Oa=Qn.ShadowRoot&&(Qn.ShadyCSS===void 0||Qn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ba=Symbol(),Is=new WeakMap;let ou=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ba)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Oa&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Is.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Is.set(r,t))}return t}toString(){return this.cssText}};const M=e=>new ou(typeof e=="string"?e:e+"",void 0,Ba),eo=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ou(r,e,Ba)},cf=(e,t)=>{if(Oa)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Qn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},qs=Oa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return M(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:uf,defineProperty:df,getOwnPropertyDescriptor:hf,getOwnPropertyNames:ff,getOwnPropertySymbols:pf,getPrototypeOf:mf}=Object,Ct=globalThis,Ps=Ct.trustedTypes,gf=Ps?Ps.emptyScript:"",ii=Ct.reactiveElementPolyfillSupport,Gr=(e,t)=>e,mo={toAttribute(e,t){switch(t){case Boolean:e=e?gf:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Da=(e,t)=>!uf(e,t),Ls={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:Da};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ct.litPropertyMetadata??(Ct.litPropertyMetadata=new WeakMap);let lr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ls){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&df(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=hf(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ls}static _$Ei(){if(this.hasOwnProperty(Gr("elementProperties")))return;const t=mf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Gr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gr("properties"))){const r=this.properties,n=[...ff(r),...pf(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(qs(o))}else t!==void 0&&r.push(qs(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:mo).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:mo;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Da)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}};lr.elementStyles=[],lr.shadowRootOptions={mode:"open"},lr[Gr("elementProperties")]=new Map,lr[Gr("finalized")]=new Map,ii==null||ii({ReactiveElement:lr}),(Ct.reactiveElementVersions??(Ct.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=globalThis,go=Yr.trustedTypes,Ns=go?go.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ra="$lit$",ft=`lit$${(Math.random()+"").slice(9)}$`,_a="?"+ft,wf=`<${_a}>`,Yt=document,ln=()=>Yt.createComment(""),cn=e=>e===null||typeof e!="object"&&typeof e!="function",iu=Array.isArray,au=e=>iu(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ai=`[ 	
\f\r]`,Lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Os=/-->/g,Bs=/>/g,Dt=RegExp(`>|${ai}(?:([^\\s"'>=/]+)(${ai}*=${ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ds=/'/g,Rs=/"/g,su=/^(?:script|style|textarea|title)$/i,lu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),vf=lu(1),bf=lu(2),Ne=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),_s=new WeakMap,jt=Yt.createTreeWalker(Yt,129);function cu(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ns!==void 0?Ns.createHTML(t):t}const uu=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Lr;for(let s=0;s<r;s++){const l=e[s];let c,f,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,f=a.exec(l),f!==null);)m=a.lastIndex,a===Lr?f[1]==="!--"?a=Os:f[1]!==void 0?a=Bs:f[2]!==void 0?(su.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Dt):f[3]!==void 0&&(a=Dt):a===Dt?f[0]===">"?(a=o??Lr,h=-1):f[1]===void 0?h=-2:(h=a.lastIndex-f[2].length,c=f[1],a=f[3]===void 0?Dt:f[3]==='"'?Rs:Ds):a===Rs||a===Ds?a=Dt:a===Os||a===Bs?a=Lr:(a=Dt,o=void 0);const g=a===Dt&&e[s+1].startsWith("/>")?" ":"";i+=a===Lr?l+wf:h>=0?(n.push(c),l.slice(0,h)+Ra+l.slice(h)+ft+g):l+ft+(h===-2?s:g)}return[cu(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class un{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,f]=uu(t,r);if(this.el=un.createElement(c,n),jt.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=jt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Ra)){const m=f[a++],g=o.getAttribute(h).split(ft),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?hu:w[1]==="?"?fu:w[1]==="@"?pu:yn}),o.removeAttribute(h)}else h.startsWith(ft)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(su.test(o.tagName)){const h=o.textContent.split(ft),m=h.length-1;if(m>0){o.textContent=go?go.emptyScript:"";for(let g=0;g<m;g++)o.append(h[g],ln()),jt.nextNode(),l.push({type:2,index:++i});o.append(h[m],ln())}}}else if(o.nodeType===8)if(o.data===_a)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(ft,h+1))!==-1;)l.push({type:7,index:i}),h+=ft.length-1}i++}}static createElement(t,r){const n=Yt.createElement("template");return n.innerHTML=t,n}}function Jt(e,t,r=e,n){var a,s;if(t===Ne)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=cn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Jt(e,o._$AS(e,t.values),o,n)),t}class du{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Yt).importNode(r,!0);jt.currentNode=o;let i=jt.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Cr(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new mu(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=jt.nextNode(),a++)}return jt.currentNode=Yt,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Cr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Jt(this,t,r),cn(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Ne&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):au(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==X&&cn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Yt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=un.createElement(cu(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new du(o,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(t){let r=_s.get(t.strings);return r===void 0&&_s.set(t.strings,r=new un(t)),r}k(t){iu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Cr(this.S(ln()),this.S(ln()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class yn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=X}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Jt(this,t,r,0),a=!cn(t)||t!==this._$AH&&t!==Ne,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Jt(this,s[n+l],r,l),c===Ne&&(c=this._$AH[l]),a||(a=!cn(c)||c!==this._$AH[l]),c===X?t=X:t!==X&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hu extends yn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class fu extends yn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class pu extends yn{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Jt(this,t,r,0)??X)===Ne)return;const n=this._$AH,o=t===X&&n!==X||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==X&&(n===X||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class mu{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Jt(this,t)}}const yf={P:Ra,A:ft,C:_a,M:1,L:uu,R:du,D:au,V:Jt,I:Cr,H:yn,N:fu,U:pu,B:hu,F:mu},si=Yr.litHtmlPolyfillSupport;si==null||si(un,Cr),(Yr.litHtmlVersions??(Yr.litHtmlVersions=[])).push("3.1.2");const kf=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Cr(t.insertBefore(ln(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jr=class extends lr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kf(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ne}};var Vc;Jr._$litElement$=!0,Jr.finalized=!0,(Vc=globalThis.litElementHydrateSupport)==null||Vc.call(globalThis,{LitElement:Jr});const li=globalThis.litElementPolyfillSupport;li==null||li({LitElement:Jr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:$f}=yf,Hs=()=>document.createComment(""),Nr=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Hs(),o),s=n.insertBefore(Hs(),o);r=new $f(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const f=c.nextSibling;n.insertBefore(c,o),c=f}}}return r},Rt=(e,t,r=e)=>(e._$AI(t,r),e),xf={},Tf=(e,t=xf)=>e._$AH=t,Cf=e=>e._$AH,ci=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=e=>(...t)=>({_$litDirective$:e,values:t});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sf={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:Da},Mf=(e=Sf,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Af(e){return(t,r)=>typeof r=="object"?Mf(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=Ot(class extends gt{constructor(e){var t;if(super(e),e.type!==kn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Ne}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=e=>e??X;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xi extends gt{constructor(t){if(super(t),this.it=X,t.type!==kn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===X||t==null)return this._t=void 0,this.it=t;if(t===Ne)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Xi.directiveName="unsafeHTML",Xi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vs extends Xi{}Vs.directiveName="unsafeSVG",Vs.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ef(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},If=Ot(class extends gt{constructor(e){if(super(e),e.type!==kn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=Cf(e),{values:i,keys:a}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let c,f,h=0,m=o.length-1,g=0,w=i.length-1;for(;h<=m&&g<=w;)if(o[h]===null)h++;else if(o[m]===null)m--;else if(s[h]===a[g])l[g]=Rt(o[h],i[g]),h++,g++;else if(s[m]===a[w])l[w]=Rt(o[m],i[w]),m--,w--;else if(s[h]===a[w])l[w]=Rt(o[h],i[w]),Nr(e,l[w+1],o[h]),h++,w--;else if(s[m]===a[g])l[g]=Rt(o[m],i[g]),Nr(e,o[h],o[m]),m--,g++;else if(c===void 0&&(c=js(a,g,w),f=js(s,h,m)),c.has(s[h]))if(c.has(s[m])){const k=f.get(a[g]),$=k!==void 0?o[k]:null;if($===null){const C=Nr(e,o[h]);Rt(C,i[g]),l[g]=C}else l[g]=Rt($,i[g]),Nr(e,o[h],$),o[k]=null;g++}else ci(o[m]),m--;else ci(o[h]),h++;for(;g<=w;){const k=Nr(e,l[w+1]);Rt(k,i[g]),l[g++]=k}for(;h<=m;){const k=o[h++];k!==null&&ci(k)}return this.ut=a,Tf(e,l),Ne}}),qf=If;class gu extends Jr{}function wt(e){if(ze(e))return ye(e,(r,n)=>{if(!Q(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ho(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?M(r):r.startsWith("-")?eo`-${M(r)}`:eo`--${M(r)}`;return{name:a,value:eo`var(${a}, ${M(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${wt.name}' function.`)}function wo({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Pf(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function to(e){return Me(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ha(e){return Me(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function wu(e){return e.map(t=>to(t)?t.definition:t).filter(t=>Ha(t))}const vu=new WeakMap;function Lf(e,t){var o;const r=wu(t);return(o=bu(vu,[e,...r]).value)==null?void 0:o.template}function Nf(e,t,r){const n=wu(t);return ku(vu,[e,...n],r)}function bu(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=yu(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?bu(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function yu(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ku(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=yu(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),ku(l,t,r,n+1)}const Of=new WeakMap;function $u(e,t,r){const n=Lf(e,t),o=n??r();if(!n){const s=Nf(e,t,o);if(s.result)Of.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Pf(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function xu(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,f)=>{const h=o.length-1,m=o[h],g=f-1,w=t[g];n&&n(c);let k,$=[];if(typeof m=="string"&&(k=r(m,c,w),k)){o[h]=m+k.replacement,a.push(g);const S=k.getExtraValues;$=S?S(w):[],$.length&&S?(o[h]+=" ",$.forEach((B,j)=>{j&&o.push(" ")}),s.push(B=>{const j=B[g],ee=S(j);return{index:g,values:ee}}),o.push(c)):o[h]+=c}k||o.push(c);const C=e.raw[f];k?(i[h]=i[h]+k.replacement+C,$.length&&$.forEach(()=>{i.push("")})):i.push(C)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const f=s.map(h=>h(c)).flat();return{valueIndexDeletions:a,valueInsertions:f}}}}function Bf(...[e,t,r]){if(Ha(r))return{replacement:r.tagName,getExtraValues:void 0}}function Df(e,t){return xu(e,t,Bf)}function p(e,...t){const r=$u(e,t,()=>Df(e,t));return eo(r.strings,...r.values)}const Rf={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Tu(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof gu?!0:Tu(r)}function Cu(e,t){const r=e.instanceState;le(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&le(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),_f(e)}function _f(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function zs(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Hf extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Fa(){return e=>{var t;return t=class extends Hf{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function re(){return Fa()}function Ff(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Fa()([e,n].join("-"));return r[n]=o,r},{}):{}}const Vf="_elementVirStateSetup";function jf(e){return ze(e)?Vf in e:!1}function zf(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return fo(e)===fo(t)&&r}const Su="__vir__shape__definition__key__do__not__use__in__actual__objects";function Mu(e){return Me(e,Su)}const Va=Symbol("and"),Au=Symbol("instance"),Eu=Symbol("enum"),Iu=Symbol("exact"),ja=Symbol("indexed-keys"),za=Symbol("or"),Za=Symbol("unknown"),Zf=[Va,Eu,Iu,ja,Au,za,Za],qu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Wf(...e){return Fo(e,Va)}function Uf(...e){return Fo(e,ja)}function tt(...e){return Fo(e,za)}function Gf(e){return Fo([e],Za)}function Oo(e){return Xt(e,Va)}function Bo(e){return Xt(e,Au)}function Do(e){return Xt(e,Eu)}function Ro(e){return Xt(e,Iu)}function _o(e){return Xt(e,ja)}function $n(e){return Xt(e,za)}function Ho(e){return Xt(e,Za)}function Xt(e,t){const r=xn(e);return!!r&&r.specifierType===t}function Fo(e,t){return{[qu]:!0,specifierType:t,parts:e}}function zt(e,t,r,n){const o=xn(t);if(o){if(Bo(o))return e instanceof o.parts[0];if(Oo(o))return o.parts.every(i=>zt(e,i));if($n(o))return o.parts.some(i=>zt(e,i));if(Ro(o))return ze(e)?zt(e,o.parts[0]):e===o.parts[0];if(Do(o))return Object.values(o.parts[0]).some(i=>i===e);if(_o(o))return ze(e)?Yf(e,o,!!r)&&yh(e).every(i=>zt(i,o.parts[0].values)):!1;if(Ho(o))return!0}return n?t===e:zf(e,t)}function Yf(e,t,r){const n=t.parts[0].required,o=t.parts[0].keys;if(r)if(n){const i=Wa(t);return Q(i,"boolean")?i:i.every(a=>le(e).some(s=>zt(s,a,!1,!0)))}else return!0;else return le(e).every(i=>zt(i,o))}function Wa(e){const t=e.parts[0].keys,r=xn(t);if(ri(t))return[t];if(r){if(Bo(r))return!1;if(Oo(r))return!1;if($n(r)){const n=r.parts.map(i=>Wa(Uf({...e.parts[0],keys:i})));let o;return n.forEach(i=>{Q(i,"boolean")&&(i&&o==null?o=!0:o=!1)}),Q(o,"boolean")?o:n.flat().filter(ri)}else if(Ro(r)){const n=r.parts.filter(ri);return n.length!==r.parts.length?!1:n}else{if(Do(r))return Object.values(r.parts[0]);if(_o(r))return!1;if(Ho(r))return!0}}return!1}function xn(e){if(ze(e)&&Me(e,qu)){if(!Me(e,"parts")||!Q(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Me(e,"specifierType")||!xh(Zf,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Zs extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Qi(e,t=!1){return Hr(e)}function Hr(e){const t=xn(e);if(t)if(Bo(t)){const r=t.parts[0];try{return new r}catch(n){throw new Zs(`Failed to create default value for classShape for class '${r.name}': ${Nt(n)}`)}}else{if($n(t)||Ro(t))return Hr(t.parts[0]);if(Oo(t))return t.parts.reduce((r,n)=>Object.assign(r,Hr(n)),{});if(Do(t))return Object.values(t.parts[0])[0];if(_o(t)){const r=Wa(t);return!t.parts[0].required||Q(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,Hr(t.parts[0].values)]))}else{if(Ho(t))return t.parts[0]??{};throw new Zs(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Mu(e)?Qi(e.shape):e instanceof RegExp?e:Q(e,"array")?e.map(Hr):ze(e)?ye(e,(r,n)=>Qi(n)):e}function Tn(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return Qi(e)},[Su]:!0}}class De extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function Jf(e,t,r={}){try{return Pu(e,t,r),!0}catch{return!1}}function Pu(e,t,r={}){dt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function ea(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function dt({subject:e,shape:t,keys:r,options:n}){if(Ho(t))return!0;if(Mu(t))return dt({subject:e,shape:t.shape,keys:r,options:n});const o=ea(r);if(xn(e))throw new De(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!zt(e,t,!n.ignoreExtraKeys))throw new De(`Subject does not match shape definition at key ${o}`);if(Q(t,"function"))return Q(e,"function");if(Bo(t))return e instanceof t.parts[0];if(ze(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(f=>[f,!1])),l=[];let c=!1;if($n(t)){const f=[];c=t.parts.some(h=>{try{const m=dt({subject:e,shape:h,keys:r,options:{...n}});return Object.assign(s,m),!0}catch(m){if(m instanceof De)return f.push(m),!1;throw m}}),!c&&Yi(f,1)&&l.push(f[0])}else if(Oo(t))c=t.parts.every(f=>{try{const h=dt({subject:e,shape:f,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(s,h),!0}catch(h){if(h instanceof De)return l.push(h),!1;throw h}});else if(Ro(t)){const f=dt({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(s,f),c=!0}else{if(Do(t))throw new De(`Cannot compare an enum specifier to an object at ${o}`);if(Q(t,"array")&&Q(a,"array"))c=a.every((f,h)=>{const m=t.some(g=>{try{return dt({subject:f,shape:g,keys:[...r,h],options:n}),!0}catch(w){if(w instanceof De)return l.push(w),!1;throw w}});return s[h]=m,m});else if(_o(t)){const f=ye(e,(h,m)=>(n.ignoreExtraKeys||dt({shape:t.parts[0].keys,subject:h,keys:[...r,h],options:n}),dt({shape:t.parts[0].values,subject:m,keys:[...r,h],options:n}),!0));Object.assign(s,f),c=!0}else{const f=Kf({keys:r,options:n,shape:t,subject:e});Object.assign(s,f),c=!0}}if(l.length)throw new De(Bh(l));if(!c){const h=`Failed on key(s): ${Object.keys(s).filter(m=>!s[m]).map(m=>ea([...r,m])).join(",")}`;throw new De(h)}return n.ignoreExtraKeys||Object.entries(s).forEach(([f,h])=>{if(!h)throw new De(`subject as extra key '${f}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Kf({keys:e,options:t,shape:r,subject:n}){const o=ea(e),i={};if(ze(r)){const a=new Set(le(n)),s=new Set(le(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new De(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const c=r[l],f=$n(c)?c.parts.includes(void 0):!1,h=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!f&&!h)throw new De(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const f=r[l];dt({subject:c,shape:f,keys:[...e,l],options:t}),i[l]=!0})}else throw new De(`shape definition at ${o} was not an object.`);return i}const Xf=Tn({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:Gf()});function ui(e){return Jf(e,Xf,{allowExtraKeys:!0})}function Lu(e,t){t in e||Af()(e,t)}function Qf(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ws(e,t){const r=e;function n(a){t?Qf(a,e,e.tagName):Lu(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=jf(l)?l._elementVirStateSetup():l;n(s);const f=r[s];function h(w){a[s]=w,r[s]=w}const m=e.observablePropertyListenerMap[s];if(f!==c&&ui(f)&&(m!=null&&m.length)&&f.removeListener(m),ui(c))if(m)c.addListener(m);else{let w=function(){e.requestUpdate()};var g=w;e.observablePropertyListenerMap[s]=w,c.addListener(w)}else ui(f)&&(e.observablePropertyListenerMap[s]=void 0);return h(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function e1(e){return e?ye(e,t=>t):{}}function t1({hostClassNames:e,cssVars:t}){return{hostClasses:ye(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function r1({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&le(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function n1({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function o(a){le(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function o1(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var i1=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Vo(e){var t;const r=e;if(!Q(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!Q(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Rf,...r.options},o=Ff(r.tagName,r.events),i=e1(r.hostClasses);r.hostClasses&&zs(r.tagName,r.hostClasses),r.cssVars&&zs(r.tagName,r.cssVars);const a=r.cssVars?wt(r.cssVars):{},s=o1(r.slotNames),l=typeof r.styles=="function"?r.styles(t1({hostClassNames:i,cssVars:a})):r.styles||p``,c=r.renderCallback;function f(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:h,inputs:m}}const h=(t=class extends gu{createRenderParams(){return n1({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Tu(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Vo.name}' to define ${r.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const g=c(m);if(g instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return r1({host:m.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},g}catch(m){const g=Dh(m,`Failed to render ${r.tagName}`);return console.error(g),this._lastRenderError=g,Nt(g)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(r.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const m=this.createRenderParams();if(r.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){Cu(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Ws(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Ws(this,!n.allowPolymorphicState)});const m=r.stateInitStatic||{};le(m).forEach(g=>{Lu(this,g),this.instanceState[g]=m[g]}),this.definition=h}},i1(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(h,{name:{value:Eh(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof h,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,h),h}function Nu(){return e=>{const t=e;if(!Q(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Vo({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Ua(e,t){return dn(e,t),e.element}function a1(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function dn(e,t){const r=a1(e),n=r?`: in ${r}`:"";if(e.type!==kn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function s1(e){const t=Ot(class extends gt{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ua(r,e)}render(r){return this.element.setAttribute(e,r),Ne}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function y(e,t){return l1(e,t)}const l1=Ot(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ua(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Ne}}),Us="onDomCreated",ta=Ot(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),dn(e,Us)}update(e,[t]){dn(e,Us);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),di="onResize",yr=Ot(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),dn(e,di)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${di} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){dn(e,di),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function xe(e,t,r){return Ef(e,()=>t,()=>r)}const{attributeDirective:c1,attributeSelector:cv,attributeName:uv}=s1("data-test-id");function u1(e){return{_elementVirStateSetup:e}}function Ga(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Nu()(r(n))),defineElementNoInputs:n=>(t(n),Vo(r(n)))}}function d1(e,t){return t?Gs(e,t):Gs(void 0,e)}const Gs=Ot(class extends gt{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Ua(e,"assign")}render(e,t){return Cu(this.element,t),Ne}});function h1(...[e,t,r]){const n=to(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Ha(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!n.elementOptions.ignoreUnsetInputs&&!to(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(c){const f=to(c)?c.inputs:void 0;return[o&&f?d1(f):void 0].filter(we)}}}function f1(e){}function p1(e){return xu(e.strings,e.values,h1,f1)}function u(e,...t){const r=vf(e,...t),n=$u(e,t,()=>p1(r));return{...r,strings:n.strings,values:n.values}}const m1={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},g1=Object.keys(m1),w1=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...g1,...w1];function Fr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const v1={[be.ElementExample]:()=>[],[be.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...of(e.controls,e.title)].filter(we),[be.Root]:()=>[]},vo="_isBookTreeNode",Ou=new Map;function b1(e){return Ou.get(e)}function y1(e,t){Vh(Ou,e,()=>t)}function pr(e,t){return!!(Bu(e)&&e.entry.entryType===t)}function Bu(e){return!!(jc(e,[vo,"entry"])&&e[vo])}function k1(){return{[vo]:!0,entry:{entryType:be.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function $1({entries:e,debug:t}){const r=b1(e);if(r)return r;const n=k1();e.forEach(a=>Ya({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Du(n),i={tree:n,flattenedNodes:o};return y1(e,i),t&&console.info("element-book tree:",n),i}function x1(e,t,r){if(!t.parent)return e;const n=ra(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ya({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=ra(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Na(t,!1)}`);return o}function Ya({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=v1[t.entryType](t);t.errors.push(...o);const i=x1(e,t,r),a=po(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[vo]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,rf(t,be.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Ya({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function ra(e,t){const r=Bu(e)?e.fullUrlBreadcrumbs.slice(0,-1):Na(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Du(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Du(o));return[e,...r].flat()}function Ja(e,t){return Ka(e,["",...t],void 0)}function Ka(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Ka(i,n,r);return{...e.controls,...a}}function T1(e,t,r){const n={...e};return Ka(n,["",...t],r),n}function Ru(e,t){const r=(t==null?void 0:t.controls)||(pr(e,be.Page)?ye(e.entry.controls,(o,i)=>i.initValue):{});return{children:ye(e.children,(o,i)=>{var a;return Ru(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function C1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const S1=ru(32);function ro(e){return e.join(S1)}function _u(e){if(!e.length)return[];const t=ro(e),r=_u(e.slice(0,-1));return[t,...r]}const M1=["error","errors"];function A1(e){return M1.includes(e)}function E1({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),ro(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&A1(t),a=ro(o.fullUrlBreadcrumbs);if(C1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=_u(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=ro(o.fullUrlBreadcrumbs),a=r[i];if(!Q(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var Se;(function(e){e.Search="search",e.Book="book"})(Se||(Se={}));function na(e){return e[0]===Se.Book?"":e[1]?decodeURIComponent(e[1]):""}const kr={hash:void 0,paths:[Se.Book],search:void 0},I1=0;function jo(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==I1)}class zo extends Error{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class Ys extends zo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const hn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const q1=globalThis.history.pushState;function Js(...e){const t=q1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(hn)),t}const P1=globalThis.history.replaceState;function Ks(...e){const t=P1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(hn)),t}function L1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Js)throw new Ys("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ks)throw new Ys("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Js,globalThis.history.replaceState=Ks,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(hn))})}}function N1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?Gh(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function Hu(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Fu({routeBase:e,windowPath:t}){if(!e)return"";const r=Hu(e);if(Vu({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Fu({routeBase:n,windowPath:t}):""}function Vu({routeBase:e,windowPath:t}){const r=Hu(e);return r?t.startsWith(`/${r}`):!1}class O1 extends zo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function ju(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Xs=6;function Qs(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Xs)throw new O1(`Route sanitization depth has exceed the max of ${Xs} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ju(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class hi extends zo{constructor(t){super(t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function B1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new hi(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new hi(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new hi(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function D1(e,t,r=!1){const n=zu(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function zu(e,t){var s;const r=Vu({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Wh(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(we).join("/")}${n}${i}`}function R1(e={}){B1(e),L1();const t=e.routeBase?Fu({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Qs(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},f=o.sanitizeFullRoute(c);if(!(!s&&ju(l,f)))return D1(f,t,a)},createRoutesUrl(i){return zu(i,t)},getCurrentRawRoutes(){return N1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new zo(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(hn,n),r=!0),i&&Qs(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(hn,n),r=!1),a},sanitizationDepth:0};return o}function _1(e){return R1({routeBase:e,routeSanitizer(t){return{paths:H1(t.paths),hash:void 0,search:void 0}}})}function H1(e){const t=e[0];if(Hh(t,Se)){if(t===Se.Book)return[Se.Book,...e.slice(1)];if(t===Se.Search)return e[1]?[t,e[1]]:[Se.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return kr.paths}const Z=wt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),F1={nav:{hover:{background:Z["element-book-nav-hover-background-color"],foreground:Z["element-book-nav-hover-foreground-color"]},active:{background:Z["element-book-nav-active-background-color"],foreground:Z["element-book-nav-active-foreground-color"]},selected:{background:Z["element-book-nav-selected-background-color"],foreground:Z["element-book-nav-selected-foreground-color"]}},accent:{icon:Z["element-book-accent-icon-color"]},page:{background:Z["element-book-page-background-color"],backgroundFaint1:Z["element-book-page-background-faint-level-1-color"],backgroundFaint2:Z["element-book-page-background-faint-level-2-color"],foreground:Z["element-book-page-foreground-color"],foregroundFaint1:Z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Z["element-book-page-foreground-faint-level-2-color"]}};function V1(e,t){Zu(e,t,F1)}function oa(e){return Me(e,"_$cssResult$")}function el(e){return jc(e,["name","value","default"])&&Q(e.default,"string")&&oa(e.name)&&oa(e.value)}function Zu(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(oa(o)){if(!el(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);wo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(el(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Zu(e,o,i)}})}function me(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Cn(e){return St(e)==="string"}function St(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function bo(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Wu(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Uu(e){return e[e.length-1]}function yo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Gu(e,t,r){return(r-e)/(t-e)}function Xa(e,t,r){return yo(t[0],t[1],Gu(e[0],e[1],r))}function Yu(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var j1=Object.freeze({__proto__:null,interpolate:yo,interpolateInv:Gu,isString:Cn,last:Uu,mapRange:Xa,multiplyMatrices:me,parseCoordGrammar:Yu,parseFunction:Wu,toPrecision:bo,type:St});class z1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Et=new z1;var st={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Xe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function ia(e){return Array.isArray(e)?e:Xe[e]}function ko(e,t,r,n={}){if(e=ia(e),t=ia(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Et.run("chromatic-adaptation-start",o),o.M||(o.W1===Xe.D65&&o.W2===Xe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Xe.D50&&o.W2===Xe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Et.run("chromatic-adaptation-end",o),o.M)return me(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Z1=75e-6,qe=class qe{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?qe.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=ia(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:W1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Et.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Z1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=tl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=tl(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=qe.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=qe.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(qe.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof qe)return t;if(St(t)==="string"){let o=qe.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return qe.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=St(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=qe.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=St(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=qe.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let f=o.coords[c];if(c.toLowerCase()===a||((l=f.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...f};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Ln(qe,"registry",{}),Ln(qe,"DEFAULT_FORMAT",{type:"functions",name:"color"});let A=qe;function W1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function tl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Yu(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Xa(s,l,i)),i=bo(i,o),c&&(i+=c),i})}return e}var Ve=new A({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ae extends A{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ve),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=me(t.toXYZ_M,r);return this.white!==this.base.white&&(n=ko(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=ko(this.base.white,this.white,r),me(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ju(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Et.run("parse-start",r),r.color)return r.color;if(r.parsed=Wu(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),f=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of A.all){let g=m.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const w=Object.keys(m.coords).map((k,$)=>r.parsed.args[$]||0);return t&&(t.formatId="color"),{spaceId:m.id,coords:w,alpha:f}}}let h="";if(c in A.registry){let m=(s=(a=(i=A.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;m&&(h=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${c}). `+(h||"Missing a plugin?"))}else for(let c of A.all){let f=c.getFormat(l);if(f&&f.type==="function"){let h=1;(f.lastAlpha||Uu(r.parsed.args).alpha)&&(h=r.parsed.args.pop());let m=r.parsed.args,g;return f.coordGrammar&&(g=Object.entries(c.coords).map(([w,k],$)=>{var ie;let C=f.coordGrammar[$],S=(ie=m[$])==null?void 0:ie.type,B=C.find(ce=>ce==S);if(!B){let ce=k.name||w;throw new TypeError(`${S} not allowed for ${ce} in ${l}()`)}let j=B.range;S==="<percentage>"&&(j||(j=[0,1]));let ee=k.range||k.refRange;return j&&ee&&(m[$]=Xa(j,ee,m[$])),B})),t&&Object.assign(t,{formatId:f.name,types:g}),{spaceId:c.id,coords:m,alpha:h}}}}else for(let l of A.all)for(let c in l.formats){let f=l.formats[c];if(f.type!=="custom"||f.test&&!f.test(r.str))continue;let h=f.parse(r.str);if(h)return h.alpha??(h.alpha=1),t&&(t.formatId=c),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function G(e){if(!e)throw new TypeError("Empty color reference");Cn(e)&&(e=Ju(e));let t=e.space||e.spaceId;return t instanceof A||(e.space=A.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Sn(e,t){return t=A.get(t),t.from(e)}function je(e,t){let{space:r,index:n}=A.resolveCoord(t,e.space);return Sn(e,r)[n]}function Ku(e,t,r){return t=A.get(t),e.coords=t.to(e.space,r),e}function It(e,t,r){if(e=G(e),arguments.length===2&&St(arguments[1])==="object"){let n=arguments[1];for(let o in n)It(e,o,n[o])}else{typeof r=="function"&&(r=r(je(e,t)));let{space:n,index:o}=A.resolveCoord(t,e.space),i=Sn(e,n);i[o]=r,Ku(e,n,i)}return e}var Qa=new A({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ve,fromBase:e=>ko(Ve.white,"D50",e),toBase:e=>ko("D50",Ve.white,e),formats:{color:{}}});const U1=216/24389,rl=24/116,Nn=24389/27;let fi=Xe.D50;var Pe=new A({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fi,base:Qa,fromBase(e){let r=e.map((n,o)=>n/fi[o]).map(n=>n>U1?Math.cbrt(n):(Nn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>rl?Math.pow(t[0],3):(116*t[0]-16)/Nn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Nn,t[2]>rl?Math.pow(t[2],3):(116*t[2]-16)/Nn].map((n,o)=>n*fi[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Zo(e){return(e%360+360)%360}function G1(e,t){if(e==="raw")return t;let[r,n]=t.map(Zo),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var fn=new A({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Pe,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Zo(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const nl=25**7,$o=Math.PI,ol=180/$o,tr=$o/180;function aa(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=Pe.from(e),l=fn.from(Pe,[i,a,s])[1],[c,f,h]=Pe.from(t),m=fn.from(Pe,[c,f,h])[1];l<0&&(l=0),m<0&&(m=0);let w=((l+m)/2)**7,k=.5*(1-Math.sqrt(w/(w+nl))),$=(1+k)*a,C=(1+k)*f,S=Math.sqrt($**2+s**2),B=Math.sqrt(C**2+h**2),j=$===0&&s===0?0:Math.atan2(s,$),ee=C===0&&h===0?0:Math.atan2(h,C);j<0&&(j+=2*$o),ee<0&&(ee+=2*$o),j*=ol,ee*=ol;let ie=c-i,ce=B-S,H=ee-j,ae=j+ee,Te=Math.abs(H),ve;S*B===0?ve=0:Te<=180?ve=H:H>180?ve=H-360:H<-180?ve=H+360:console.log("the unthinkable has happened");let lt=2*Math.sqrt(B*S)*Math.sin(ve*tr/2),qr=(i+c)/2,ti=(S+B)/2,ks=Math.pow(ti,7),ct;S*B===0?ct=ae:Te<=180?ct=ae/2:ae<360?ct=(ae+360)/2:ct=(ae-360)/2;let $s=(qr-50)**2,fh=1+.015*$s/Math.sqrt(20+$s),xs=1+.045*ti,Pr=1;Pr-=.17*Math.cos((ct-30)*tr),Pr+=.24*Math.cos(2*ct*tr),Pr+=.32*Math.cos((3*ct+6)*tr),Pr-=.2*Math.cos((4*ct-63)*tr);let Ts=1+.015*ti*Pr,ph=30*Math.exp(-1*((ct-275)/25)**2),mh=2*Math.sqrt(ks/(ks+nl)),gh=-1*Math.sin(2*ph*tr)*mh,Pn=(ie/(r*fh))**2;return Pn+=(ce/(n*xs))**2,Pn+=(lt/(o*Ts))**2,Pn+=gh*(ce/(n*xs))*(lt/(o*Ts)),Math.sqrt(Pn)}const Y1=75e-6;function Kr(e,t=e.space,{epsilon:r=Y1}={}){e=G(e),t=A.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function pn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function qt(e,{method:t=st.gamut_mapping,space:r=e.space}={}){if(Cn(arguments[1])&&(r=arguments[1]),r=A.get(r),Kr(e,r,{epsilon:0}))return G(e);let n=_e(e,r);if(t!=="clip"&&!Kr(e,r)){let o=qt(pn(n),{method:"clip",space:r});if(aa(e,o)>2){let i=A.resolveCoord(t),a=i.space,s=i.id,l=_e(n,a),f=(i.range||i.refRange)[0],h=.01,m=f,g=je(l,s);for(;g-m>h;){let w=pn(l);w=qt(w,{space:r,method:"clip"}),aa(l,w)-2<h?m=je(l,s):g=je(l,s),It(l,s,(m+g)/2)}n=_e(l,r)}else n=o}if(t==="clip"||!Kr(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=_e(n,e.space)),e.coords=n.coords,e}qt.returns="color";function _e(e,t,{inGamut:r}={}){e=G(e),t=A.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=qt(o)),o}_e.returns="color";function xo(e,{precision:t=st.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=G(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??A.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Kr(e)&&(s=qt(pn(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>bo(g,t)));let f=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;f.unshift(g)}let h=e.alpha;t!==null&&(h=bo(h,t));let m=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${h}`:"";i=`${c}(${f.join(r.commas?", ":" ")}${m})`}return i}const J1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],K1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Wo=new Ae({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:J1,fromXYZ_M:K1,formats:{color:{}}});const On=1.09929682680944,il=.018053968510807;var Xu=new Ae({id:"rec2020",name:"REC.2020",base:Wo,toBase(e){return e.map(function(t){return t<il*4.5?t/4.5:Math.pow((t+On-1)/On,1/.45)})},fromBase(e){return e.map(function(t){return t>=il?On*Math.pow(t,.45)-(On-1):4.5*t})},formats:{color:{}}});const X1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Q1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Qu=new Ae({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:X1,fromXYZ_M:Q1});const e2=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],t2=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ed=new Ae({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:e2,fromXYZ_M:t2,formats:{color:{}}}),al={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let sl=Array(3).fill("<percentage> | <number>[0, 255]"),ll=Array(3).fill("<number>[0, 255]");var mn=new Ae({id:"srgb",name:"sRGB",base:ed,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:sl},rgb_number:{name:"rgb",commas:!0,coords:ll,noAlpha:!0},color:{},rgba:{coords:sl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ll},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=al.black,t.alpha=0):t.coords=al[e],t.coords)return t}}}}),td=new Ae({id:"p3",name:"P3",base:Qu,fromBase:mn.fromBase,toBase:mn.toBase,formats:{color:{id:"display-p3"}}});st.display_space=mn;if(typeof CSS<"u"&&CSS.supports)for(let e of[Pe,Xu,td]){let t=e.getMinCoords(),n=xo({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){st.display_space=e;break}}function r2(e,{space:t=st.display_space,...r}={}){let n=xo(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!st.display_space)n=new String(n),n.color=e;else{let o=_e(e,t);n=new String(xo(o,r)),n.color=o}return n}function rd(e,t,r="lab"){r=A.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function n2(e,t){return e=G(e),t=G(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Pt(e){return je(e,[Ve,"y"])}function nd(e,t){It(e,[Ve,"y"],t)}function o2(e){Object.defineProperty(e.prototype,"luminance",{get(){return Pt(this)},set(t){nd(this,t)}})}var i2=Object.freeze({__proto__:null,getLuminance:Pt,register:o2,setLuminance:nd});function a2(e,t){e=G(e),t=G(t);let r=Math.max(Pt(e),0),n=Math.max(Pt(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const s2=.56,l2=.57,c2=.62,u2=.65,cl=.022,d2=1.414,h2=.1,f2=5e-4,p2=1.14,ul=.027,m2=1.14;function dl(e){return e>=cl?e:e+(cl-e)**d2}function rr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function g2(e,t){t=G(t),e=G(e);let r,n,o,i,a,s;t=_e(t,"srgb"),[i,a,s]=t.coords;let l=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175;e=_e(e,"srgb"),[i,a,s]=e.coords;let c=rr(i)*.2126729+rr(a)*.7151522+rr(s)*.072175,f=dl(l),h=dl(c),m=h>f;return Math.abs(h-f)<f2?n=0:m?(r=h**s2-f**l2,n=r*p2):(r=h**u2-f**c2,n=r*m2),Math.abs(n)<h2?o=0:n>0?o=n-ul:o=n+ul,o*100}function w2(e,t){e=G(e),t=G(t);let r=Math.max(Pt(e),0),n=Math.max(Pt(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const v2=5e4;function b2(e,t){e=G(e),t=G(t);let r=Math.max(Pt(e),0),n=Math.max(Pt(t),0);return n>r&&([r,n]=[n,r]),n===0?v2:(r-n)/n}function y2(e,t){e=G(e),t=G(t);let r=je(e,[Pe,"l"]),n=je(t,[Pe,"l"]);return Math.abs(r-n)}const k2=216/24389,hl=24/116,Bn=24389/27;let pi=Xe.D65;var sa=new A({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:pi,base:Ve,fromBase(e){let r=e.map((n,o)=>n/pi[o]).map(n=>n>k2?Math.cbrt(n):(Bn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>hl?Math.pow(t[0],3):(116*t[0]-16)/Bn,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Bn,t[2]>hl?Math.pow(t[2],3):(116*t[2]-16)/Bn].map((n,o)=>n*pi[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const mi=Math.pow(5,.5)*.5+.5;function $2(e,t){e=G(e),t=G(t);let r=je(e,[sa,"l"]),n=je(t,[sa,"l"]),o=Math.abs(Math.pow(r,mi)-Math.pow(n,mi)),i=Math.pow(o,1/mi)*Math.SQRT2-40;return i<7.5?0:i}var no=Object.freeze({__proto__:null,contrastAPCA:g2,contrastDeltaPhi:$2,contrastLstar:y2,contrastMichelson:w2,contrastWCAG21:a2,contrastWeber:b2});function x2(e,t,r={}){Cn(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(no).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=G(e),t=G(t);for(let i in no)if("contrast"+n.toLowerCase()===i.toLowerCase())return no[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function od(e){let[t,r,n]=Sn(e,Ve),o=t+15*r+3*n;return[4*t/o,9*r/o]}function id(e){let[t,r,n]=Sn(e,Ve),o=t+r+n;return[t/o,r/o]}function T2(e){Object.defineProperty(e.prototype,"uv",{get(){return od(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return id(this)}})}var C2=Object.freeze({__proto__:null,register:T2,uv:od,xy:id});function S2(e,t){return rd(e,t,"lab")}const M2=Math.PI,fl=M2/180;function A2(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=Pe.from(e),[,s,l]=fn.from(Pe,[o,i,a]),[c,f,h]=Pe.from(t),m=fn.from(Pe,[c,f,h])[1];s<0&&(s=0),m<0&&(m=0);let g=o-c,w=s-m,k=i-f,$=a-h,C=k**2+$**2-w**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let B=.0638*s/(1+.0131*s)+.638,j;Number.isNaN(l)&&(l=0),l>=164&&l<=345?j=.56+Math.abs(.2*Math.cos((l+168)*fl)):j=.36+Math.abs(.4*Math.cos((l+35)*fl));let ee=Math.pow(s,4),ie=Math.sqrt(ee/(ee+1900)),ce=B*(ie*j+1-ie),H=(g/(r*S))**2;return H+=(w/(n*B))**2,H+=C/ce**2,Math.sqrt(H)}const pl=203;var es=new A({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ve,fromBase(e){return e.map(t=>Math.max(t*pl,0))},toBase(e){return e.map(t=>Math.max(t/pl,0))}});const Dn=1.15,Rn=.66,ml=2610/2**14,E2=2**14/2610,gl=3424/2**12,wl=2413/2**7,vl=2392/2**7,I2=1.7*2523/2**5,bl=2**5/(1.7*2523),_n=-.56,gi=16295499532821565e-27,q2=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],P2=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],L2=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],N2=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ad=new A({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:es,fromBase(e){let[t,r,n]=e,o=Dn*t-(Dn-1)*n,i=Rn*r-(Rn-1)*t,s=me(q2,[o,i,n]).map(function(m){let g=gl+wl*(m/1e4)**ml,w=1+vl*(m/1e4)**ml;return(g/w)**I2}),[l,c,f]=me(L2,s);return[(1+_n)*l/(1+_n*l)-gi,c,f]},toBase(e){let[t,r,n]=e,o=(t+gi)/(1+_n-_n*(t+gi)),a=me(N2,[o,r,n]).map(function(m){let g=gl-m**bl,w=vl*m**bl-wl;return 1e4*(g/w)**E2}),[s,l,c]=me(P2,a),f=(s+(Dn-1)*c)/Dn,h=(l+(Rn-1)*f)/Rn;return[f,h,c]},formats:{color:{}}}),la=new A({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ad,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Zo(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function O2(e,t){let[r,n,o]=la.from(e),[i,a,s]=la.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let f=o-s,h=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(l**2+c**2+h**2)}const sd=3424/4096,ld=2413/128,cd=2392/128,yl=2610/16384,B2=2523/32,D2=16384/2610,kl=32/2523,R2=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],_2=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],H2=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],F2=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var ca=new A({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:es,fromBase(e){let t=me(R2,e);return V2(t)},toBase(e){let t=j2(e);return me(F2,t)},formats:{color:{}}});function V2(e){let t=e.map(function(r){let n=sd+ld*(r/1e4)**yl,o=1+cd*(r/1e4)**yl;return(n/o)**B2});return me(_2,t)}function j2(e){return me(H2,e).map(function(n){let o=Math.max(n**kl-sd,0),i=ld-cd*n**kl;return 1e4*(o/i)**D2})}function z2(e,t){let[r,n,o]=ca.from(e),[i,a,s]=ca.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Z2=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],W2=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],U2=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],G2=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var To=new A({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ve,fromBase(e){let r=me(Z2,e).map(n=>Math.cbrt(n));return me(U2,r)},toBase(e){let r=me(G2,e).map(n=>n**3);return me(W2,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Y2(e,t){let[r,n,o]=To.from(e),[i,a,s]=To.from(t),l=r-i,c=n-a,f=o-s;return Math.sqrt(l**2+c**2+f**2)}var Co={deltaE76:S2,deltaECMC:A2,deltaE2000:aa,deltaEJz:O2,deltaEITP:z2,deltaEOK:Y2};function Vr(e,t,r={}){Cn(r)&&(r={method:r});let{method:n=st.deltaE,...o}=r;e=G(e),t=G(t);for(let i in Co)if("deltae"+n.toLowerCase()===i.toLowerCase())return Co[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function J2(e,t=.25){let n=[A.get("oklch","lch"),"l"];return It(e,n,o=>o*(1+t))}function K2(e,t=.25){let n=[A.get("oklch","lch"),"l"];return It(e,n,o=>o*(1-t))}var X2=Object.freeze({__proto__:null,darken:K2,lighten:J2});function ud(e,t,r=.5,n={}){[e,t]=[G(e),G(t)],St(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Mn(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function dd(e,t,r={}){let n;ts(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[G(e),G(t)],n=Mn(e,t,l));let c=Vr(e,t),f=o>0?Math.max(a,Math.ceil(c/o)+1):a,h=[];if(s!==void 0&&(f=Math.min(f,s)),f===1)h=[{p:.5,color:n(.5)}];else{let m=1/(f-1);h=Array.from({length:f},(g,w)=>{let k=w*m;return{p:k,color:n(k)}})}if(o>0){let m=h.reduce((g,w,k)=>{if(k===0)return 0;let $=Vr(w.color,h[k-1].color,i);return Math.max(g,$)},0);for(;m>o;){m=0;for(let g=1;g<h.length&&h.length<s;g++){let w=h[g-1],k=h[g],$=(k.p+w.p)/2,C=n($);m=Math.max(m,Vr(C,w.color),Vr(C,k.color)),h.splice(g,0,{p:$,color:n($)}),g++}}}return h=h.map(m=>m.color),h}function Mn(e,t,r={}){if(ts(e)){let[l,c]=[e,t];return Mn(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=G(e),t=G(t),e=pn(e),t=pn(t);let s={colors:[e,t],options:r};if(n?n=A.get(n):n=A.registry[st.interpolationSpace]||e.space,o=o?A.get(o):n,e=_e(e,n),t=_e(t,n),e=qt(e),t=qt(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[f,h]=[je(e,c),je(t,c)];[f,h]=G1(l,[f,h]),It(e,c,f),It(t,c,h)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((m,g)=>{let w=t.coords[g];return yo(m,w,l)}),f=yo(e.alpha,t.alpha,l),h={space:n,coords:c,alpha:f};return a&&(h.coords=h.coords.map(m=>m/f)),o!==n&&(h=_e(h,o)),h},{rangeArgs:s})}function ts(e){return St(e)==="function"&&!!e.rangeArgs}st.interpolationSpace="lab";function Q2(e){e.defineFunction("mix",ud,{returns:"color"}),e.defineFunction("range",Mn,{returns:"function<color>"}),e.defineFunction("steps",dd,{returns:"array<color>"})}var ep=Object.freeze({__proto__:null,isRange:ts,mix:ud,range:Mn,register:Q2,steps:dd}),hd=new A({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),fd=new A({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:hd,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),tp=new A({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:fd,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const rp=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],np=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var pd=new Ae({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:rp,fromXYZ_M:np}),op=new Ae({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:pd,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const ip=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],ap=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var md=new Ae({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Qa,toXYZ_M:ip,fromXYZ_M:ap});const sp=1/512,lp=16/512;var cp=new Ae({id:"prophoto",name:"ProPhoto",base:md,toBase(e){return e.map(t=>t<lp?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=sp?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),up=new A({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:To,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Zo(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const $l=203,xl=2610/2**14,dp=2**14/2610,hp=2523/2**5,Tl=2**5/2523,Cl=3424/2**12,Sl=2413/2**7,Ml=2392/2**7;var fp=new Ae({id:"rec2100pq",name:"REC.2100-PQ",base:Wo,toBase(e){return e.map(function(t){return(Math.max(t**Tl-Cl,0)/(Sl-Ml*t**Tl))**dp*1e4/$l})},fromBase(e){return e.map(function(t){let r=Math.max(t*$l/1e4,0),n=Cl+Sl*r**xl,o=1+Ml*r**xl;return(n/o)**hp})},formats:{color:{id:"rec2100-pq"}}});const Al=.17883277,El=.28466892,Il=.55991073,wi=3.7743;var pp=new Ae({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Wo,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wi:(Math.exp((t-Il)/Al)+El)/12*wi})},fromBase(e){return e.map(function(t){return t/=wi,t<=1/12?Math.sqrt(3*t):Al*Math.log(12*t-El)+Il})},formats:{color:{id:"rec2100-hlg"}}});const gd={};Et.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=wd(e.W1,e.W2,e.options.method))});Et.add("chromatic-adaptation-end",e=>{e.M||(e.M=wd(e.W1,e.W2,e.options.method))});function Uo({id:e,toCone_M:t,fromCone_M:r}){gd[e]=arguments[0]}function wd(e,t,r="Bradford"){let n=gd[r],[o,i,a]=me(n.toCone_M,e),[s,l,c]=me(n.toCone_M,t),f=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],h=me(f,n.toCone_M);return me(n.fromCone_M,h)}Uo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Uo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Uo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Uo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Xe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Xe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const mp=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],gp=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var vd=new Ae({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Xe.ACES,toXYZ_M:mp,fromXYZ_M:gp,formats:{color:{}}});const Hn=2**-16,vi=-.35828683,Fn=(Math.log2(65504)+9.72)/17.52;var wp=new Ae({id:"acescc",name:"ACEScc",coords:{r:{range:[vi,Fn],name:"Red"},g:{range:[vi,Fn],name:"Green"},b:{range:[vi,Fn],name:"Blue"}},referred:"scene",base:vd,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Hn)*2:r<Fn?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Hn)+9.72)/17.52:t<Hn?(Math.log2(Hn+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),ql=Object.freeze({__proto__:null,A98RGB:op,A98RGB_Linear:pd,ACEScc:wp,ACEScg:vd,HSL:hd,HSV:fd,HWB:tp,ICTCP:ca,JzCzHz:la,Jzazbz:ad,LCH:fn,Lab:Pe,Lab_D65:sa,OKLCH:up,OKLab:To,P3:td,P3_Linear:Qu,ProPhoto:cp,ProPhoto_Linear:md,REC_2020:Xu,REC_2020_Linear:Wo,REC_2100_HLG:pp,REC_2100_PQ:fp,XYZ_ABS_D65:es,XYZ_D50:Qa,XYZ_D65:Ve,sRGB:mn,sRGB_Linear:ed});class N{constructor(...t){let r;t.length===1&&(r=G(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:A.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new N(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=r2(this,...t);return r.color=new N(r.color),r}static get(t,...r){return t instanceof N?t:new N(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=N.get(l);else if(i==="function<color>"){let c=l;l=function(...f){let h=c(...f);return N.get(h)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>N.get(c)));return l};t in N||(N[t]=a),o&&(N.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)N.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(N);else for(let r in t)N.defineFunction(r,t[r])}}N.defineFunctions({get:je,getAll:Sn,set:It,setAll:Ku,to:_e,equals:n2,inGamut:Kr,toGamut:qt,distance:rd,toString:xo});Object.assign(N,{util:j1,hooks:Et,WHITES:Xe,Space:A,spaces:A.registry,parse:Ju,defaults:st});for(let e of Object.keys(ql))A.register(ql[e]);for(let e in A.registry)ua(e,A.registry[e]);Et.add("colorspace-init-end",e=>{var t;ua(e.id,e),(t=e.aliases)==null||t.forEach(r=>{ua(r,e)})});function ua(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(N.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return A.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=A.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=A.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}N.extend(Co);N.extend({deltaE:Vr});Object.assign(N,{deltaEMethods:Co});N.extend(X2);N.extend({contrast:x2});N.extend(C2);N.extend(i2);N.extend(ep);N.extend(no);function bd(e){return ye(e,(t,r)=>r instanceof N?M(r.toString({format:"hex"})):bd(r))}const vp="dodgerblue";function da(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function bi({background:e,foreground:t}){return{background:e??new N(da(t)),foreground:t??new N(da(e))}}var So;(function(e){e.Dark="dark",e.Light="light"})(So||(So={}));function bp(e){return e==="black"?"white":"black"}const yp={black:{foregroundFaint1:new N("#ccc"),foregroundFaint2:new N("#eee")},white:{foregroundFaint1:new N("#ccc"),foregroundFaint2:new N("#eee")}},kp={black:{backgroundFaint1:new N("#666"),backgroundFaint2:new N("#444")},white:{backgroundFaint1:new N("#ccc"),backgroundFaint2:new N("#fafafa")}};function Pl({themeColor:e=vp,themeStyle:t=So.Light}={}){const r=new N(e),n=new N(t===So.Dark?"black":"white"),o=da(n),i=new N(o),a={nav:{hover:bi({background:r.clone().set({"hsl.l":93})}),active:bi({background:r.clone().set({"hsl.l":90})}),selected:bi({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...kp[bp(o)],foreground:i,...yp[o]}};return bd(a)}const Mo=Fa()("element-book-change-route"),Ll="vira-",{defineElement:Sr,defineElementNoInputs:dv}=Ga({assertInputs:e=>{if(!e.tagName.startsWith(Ll))throw new Error(`Tag name should start with '${Ll}' but got '${e.tagName}'`)}}),yd=p`
    pointer-events: none;
    opacity: 0.3;
`,Mt=wt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ao=wt({"vira-form-input-border-radius":"8px"}),Eo=wt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${Ao["vira-form-input-border-radius"].value} + 4px)`});function kd({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(Vt(n+r+t));return p`
        ${M(e)}::after {
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
    `}const rs=p`
    padding: 0;
    margin: 0;
`,de=p`
    ${rs};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function $p(e){return p`
        ${M(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${M(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const Ze=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,he=Sr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var ha;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ha||(ha={}));Sr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ha.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ze};
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
            ${yd};
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
            border-radius: ${Ao["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Mt["vira-interaction-animation-duration"].value},
                background-color
                    ${Mt["vira-interaction-animation-duration"].value},
                border-color ${Mt["vira-interaction-animation-duration"].value};
        }

        ${kd({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${he} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${he.assign({icon:e.icon})}></${he}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var fa;(function(e){e.Header="header"})(fa||(fa={}));Sr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
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
            transition: height ${Mt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:re()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${y("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${fa.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${yr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const L=wt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function v({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const xp=v({name:"CloseX24Icon",svgTemplate:u`
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
    `}),Tp=v({name:"Element16Icon",svgTemplate:u`
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
    `});const Cp=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),Sp=p`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Mt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,$d=v({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${Sp}
        </style>
        ${Cp.svgTemplate}
    `}),Mp=v({name:"Options24Icon",svgTemplate:u`
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
    `});var $r;(function(e){e.Loading="loading",e.Error="error"})($r||($r={}));const Tt=Sr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:re(),imageError:re()},styles:({hostClasses:e})=>p`
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
                  <slot class="status-wrapper" name=${$r.Error}>
                      <${he.assign({icon:xd})} class="error"></${he}>
                  </slot>
              `:t.loadedUrls[i]?void 0:u`
                    <slot class="status-wrapper" name=${$r.Loading}>
                        <${he.assign({icon:$d})}></${he}>
                    </slot>
                `;return u`
            ${xe(!!a,a)}
            <img
                class=${fe({hidden:!!a})}
                ${y("load",async()=>{e._debugLoadDelay&&await Ji(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${y("error",async s=>{e._debugLoadDelay&&await Ji(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function pa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>pa({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Td({value:e,allowed:t,blocked:r}){const n=t?pa({input:e,matcher:t}):!0,o=r?pa({input:e,matcher:r}):!1;return n&&!o}function Cd(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Td({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Ap({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Fr(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Td({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:f}=Cd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(f)}i.value!==l&&(i.value=l),s!==l&&o(l)}const oo=Sr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:re(),inputBlocked:re()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Eo["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${yd};
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
                ${Ze};
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
                border-radius: ${Ao["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Mt["vira-interaction-animation-duration"].value};
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
                border-radius: ${Ao["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${kd({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Ze};
            }

            .close-x-button {
                ${de};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${Mt["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Cd({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${he.assign({icon:e.icon})} class="left-side-icon"></${he}>
              `:"",s=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${xe(!!e.fitText,u`
                        <span
                            class="size-span"
                            ${yr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${y("input",l=>{Ap({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${he.assign({icon:xp})}></${he}>
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
        `}});Sr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:re()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&jo(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${y("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:We,defineElementNoInputs:hv}=Ga(),Re=We()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
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
                ${y("click",i=>{(!e.router||jo(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new Mo(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Ep(e,t){return e.entry.entryType===be.Root?!1:!!(e.entry.entryType===be.Page||it(t,e.fullUrlBreadcrumbs.slice(0,-1))||it(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ht=We()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
            ${Re.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Ep(r,e.selectedPath))return;const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${Re.assign({router:e.router,route:{paths:[Se.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${fe({"title-row":!0,selected:e.selectedPath?it(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${xe(pr(r,be.ElementExample),u`
                                    <${he.assign({icon:Tp})}></${he}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Re}>
                </li>
            `});return u`
            <${Re.assign({route:kr,router:e.router})}>
                <slot name=${at.NavHeader}>Book</slot>
            </${Re}>
            <ul>
                ${t}
            </ul>
        `}});async function Ip(e){await Ki(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await sf(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Lt=We()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(Q(e.message,"array")?e.message:[e.message]).map(r=>u`
                <p>${r}</p>
            `)}}),gn=We()({tagName:"book-page-controls",events:{controlValueChange:re()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===_.Hidden)return"";const a=qp(e.currentValues[n],o,s=>{const l=Q(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${xe(i===0,u`
                                <${he.assign({icon:Mp})}
                                    class="options-icon"
                                ></${he}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function qp(e,t,r){return er(t,_.Hidden)?"":er(t,_.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${y("input",n=>{const o=Fr(n,HTMLInputElement);r(o.checked)})}
            />
        `:er(t,_.Color)?u`
            <input
                type="color"
                .value=${e}
                ${y("input",n=>{const o=Fr(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,_.Text)?u`
            <${oo.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${y(oo.events.valueChange,n=>{r(n.detail)})}
            ></${oo}>
        `:er(t,_.Number)?u`
            <input
                type="number"
                .value=${e}
                ${y("input",n=>{const o=Fr(n,HTMLInputElement);r(o.value)})}
            />
        `:er(t,_.Dropdown)?u`
            <select
                .value=${e}
                ${y("input",n=>{const o=Fr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Nl=We()({tagName:"book-breadcrumbs",styles:p`
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
                <${Re.assign({route:{hash:void 0,search:void 0,paths:[Se.Book,...a]},router:e.router})}>
                    ${r}
                </${Re}>
                ${s}
            `}):u`
                &nbsp;
            `}}),yi=We()({tagName:"book-breadcrumbs-bar",styles:p`
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
    `,renderCallback({inputs:e,dispatch:t}){return u`
            ${xe(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${Nl.assign({currentRoute:e.currentRoute,router:e.router})}></${Nl}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${y("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Ji(200),n.value===o&&(n.value?t(new Mo({paths:[Se.Search,encodeURIComponent(n.value)]})):t(new Mo(kr)))})}
            />
        `}}),Ol=We()({tagName:"book-entry-description",styles:p`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>u`
                <p>${t}</p>
            `)}}),Bl=We()({tagName:"book-page-wrapper",styles:p`
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

        ${Re} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Se.Book,...e.pageNode.fullUrlBreadcrumbs],n=Uc(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Re.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Re}>
                    ${n?u`
                              <${Lt.assign({message:n.message})}></${Lt}>
                          `:u`
                              <${Ol.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ol}>
                              <${gn.assign({config:e.pageNode.entry.controls,currentValues:Ja(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${gn}>
                          `}
                </div>
            </div>
        `}}),Vn=We()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[Se.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${Re.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Re}>
        `}}),Dl=Symbol("unset-internal-state"),Rl=We()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Dl},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Uc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Dl&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${xe(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${Lt.assign({message:`${t.elementExampleNode.entry.title} failed: ${Nt(n)}`})}></${Lt}>
            `}},options:{allowPolymorphicState:!0}}),_l=We()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Vn} {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Vn} {
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${Vn.assign(an(e,["currentPageControls"]))}></${Vn}>
                <${Rl.assign(e)}></${Rl}>
            </div>
        `}});function Sd(e,t,r,n){const o=ra(r,n),i=[];if(o){const a=Sd(e,t,o,n);a&&i.push(a)}if(pr(r,be.Page)&&!e.includes(r)){const a=Ja(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:ye(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Pp({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=Yi(e,1)?Sd(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&Yi(e,1)?u`
                  <${gn.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${gn}>
              `:X,l=qf(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,f)=>{if(pr(c,be.Page))return u`
                    <${Bl.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Bl}>
                `;if(pr(c,be.ElementExample)){const h=Ja(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${_l.assign({elementExampleNode:c,currentPageControls:h,router:r})}
                        class="inline-entry"
                    ></${_l}>
                `}else return pr(c,be.Root)?X:u`
                    <${Lt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Lt}>
                `});return[s,l]}const nr=We()({tagName:"book-entry-display",styles:p`
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

        ${yi} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Mt["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:re()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=na(e.currentRoute.paths),a=Pp({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${yi.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${yi}>

            ${xe(e.showLoading,u`
                    <div
                        ${ta(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${he.assign({icon:$d})}></${he}>
                    </div>
                    ${xe(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${at.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${ta(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${at.Footer}></slot>
                `)}
        `}});function Lp(e,t,r){const n=Hl(e,t);if(n.length)return n;r(kr);const o=Hl(e,kr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Hl(e,t){return e.filter(r=>af({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const ki=Nu()({tagName:"element-book-app",events:{pathUpdate:re()},stateInitStatic:{currentRoute:kr,router:void 0,loading:!0,colors:{config:void 0,theme:Pl(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:p`
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Fl(e,na(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var f,h,m,g,w,k,$;t._debug&&console.info("rendering element-book app");function a(C){return{...e.currentRoute,...C}}function s(C){const S=a(C);return!it(e.currentRoute,S)}function l(C){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,C].filter(we).join(" - "))}function c(C){if(!s(C))return;const S=a(C);e.router?e.router.setRoutes(S):n({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!it(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!it(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(f=t.internalRouterConfig)!=null&&f.useInternalRouter&&!e.router){const H=_1(t.internalRouterConfig.basePath);n({router:H}),H.addRouteListener(!0,ae=>{n({currentRoute:ae})})}else!((h=t.internalRouterConfig)!=null&&h.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const C={themeColor:t.themeColor};if(!it(C,(m=e.colors)==null?void 0:m.config)){const H=Pl(C);n({colors:{config:C,theme:H}}),V1(r,H)}const S=t._debug??!1,B=$1({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ru(B.tree,{children:(w=(g=e.treeBasedControls)==null?void 0:g.controls)==null?void 0:w.children,controls:t.globalValues})}}));const j=na(e.currentRoute.paths),ie=(j?E1({flattenedNodes:B.flattenedNodes,searchQuery:j}):void 0)??Lp(B.flattenedNodes,e.currentRoute.paths,c);l((k=ie[0])==null?void 0:k.entry.title);const ce=($=e.treeBasedControls)==null?void 0:$.controls;return ce?(t._debug&&console.info({currentControls:ce}),u`
                <div
                    class="root"
                    ${y(Mo,async H=>{const ae=H.detail;if(!s(ae))return;if(n({loading:!0}),c(ae),!(r.shadowRoot.querySelector(ht.tagName)instanceof ht))throw new Error(`Failed to find child '${ht.tagName}'`);Fl(r,j,e.currentRoute)})}
                    ${y(gn.events.controlValueChange,H=>{if(!e.treeBasedControls)return;const ae=T1(ce,H.detail.fullUrlBreadcrumbs,H.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:ae}})})}
                >
                    <${ht.assign({flattenedNodes:B.flattenedNodes,router:e.router,selectedPath:j?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${at.NavHeader}
                            slot=${at.NavHeader}
                        ></slot>
                    </${ht}>
                    <${nr.assign({controls:ce,currentNodes:ie,currentRoute:e.currentRoute,debug:S,originalTree:B.tree,router:e.router,showLoading:e.loading})}
                        ${y(nr.events.loadingRender,async H=>{await Ki();const ae=r.shadowRoot.querySelector(nr.tagName);ae?ae.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${nr.tagName}' for scrolling.`),await Ki(),n({loading:!H.detail})})}
                    >
                        <slot
                            name=${at.Footer}
                            slot=${at.Footer}
                        ></slot>
                    </${nr}>
                </div>
            `):u`
                    <${Lt.assign({message:"Failed to generate page controls."})}></${Lt}>
                `}catch(C){return console.error(C),u`
                <p class="error">${Nt(C)}</p>
            `}}});async function Fl(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ht.tagName);if(!(n instanceof ht))throw new Error(`Failed to find child '${ht.tagName}'`);await Ip(n)}const Vl={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`},K={interaction:p`var(${Vl.interactionDuration}, 84ms)`,pretty:p`var(${Vl.prettyDuration}, 300ms)`};p`toniq-modal-grow`,p`
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
        `,p`toniq-menu-grow`,p`
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
        `;function $i(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Np=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},r={...e,foregroundColor:p`#ACADAD`},n={...e,foregroundColor:p`#D6D6D6`},o={...t},i={...t,foregroundColor:p`#00A876`},a={...t,foregroundColor:p`#1D6852`},s={...n},l={...e,foregroundColor:p`rgba(0, 0, 0, 0.08)`},c={...e,backgroundColor:p`#D2EEFA`},f=$i(o),h=$i(i),m=$i(a),g=m,w={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},k={...w,foregroundColor:p`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:f,accentPrimaryHover:h,accentPrimaryActive:m,accentSecondary:w,accentTertiary:k}})(),Md=Np;function jl(e,t){return M(`--toniq-${ho(e)}-${ho(t)}`)}const ns=ye(Md,e=>({backgroundColor:jl(e,"backgroundColor"),foregroundColor:jl(e,"foregroundColor")}));function Ke(e,t){const r=Md[e][t],n=ns[e][t];return p`var(${n}, ${r})`}const b=ye(ns,e=>({foregroundColor:Ke(e,"foregroundColor"),backgroundColor:Ke(e,"backgroundColor")}));function W(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const Kt=p`
    pointer-events: none;
    opacity: 0.3;
    ${Ze};
`;function Bt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(Vt(n+r+t));return p`
        ${M(e)}::after {
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
    `}const Ad={toniqFont:{"font-family":p`'Lexend', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`64px`,"font-size":p`48px`},h3Font:{"line-height":p`48px`,"font-size":p`32px`},h4Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}},Op=ye(Ad,(e,t)=>{const r=M(ho(e.replace(/Font$/,"")));return ye(t,o=>{const i=M(o);return p`--toniq-font-${r}-${i}`})});function Ue(e){const t=Op[e],r=Ad[e],n=le(t).map(o=>{const i=r[o],a=t[o];return p`
            ${M(o)}: var(${a}, ${i});
        `});return M(n.join(`
`))}const O=(()=>{const e=p`
        font-style: normal;
        color: ${b.pagePrimary.foregroundColor};
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
        ${n};
    `,f=p`
        ${Ue("h3Font")};
        ${r};
    `,h=p`
        ${Ue("h4Font")};
        ${r};
    `,m=p`
        ${Ue("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:f,h4Font:h,monospaceFont:m}})(),d=wt({"toniq-icon-fill-color":L["vira-icon-fill-color"].default,"toniq-icon-stroke-color":L["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),U=ye(d,(e,t)=>r=>M(`var(${t.name}, ${r})`)),wn={popupShadow:p`
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
    `};function Bp(e,t=!0){const r=M(e),n=e===":host"?p`
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
    `}const Ed=v({name:"ChevronsRight16Icon",svgTemplate:u`
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
    `}),Dp=v({name:"Copy16Icon",svgTemplate:u`
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
    `}),Rp=v({name:"ExternalLink16Icon",svgTemplate:u`
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
    `}),At=v({name:"InfoCircle16Icon",svgTemplate:u`
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
    `}),_p=v({name:"ArrowBarUp24Icon",svgTemplate:u`
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
    `}),Hp=v({name:"ArrowForwardUp24Icon",svgTemplate:u`
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
    `}),os=v({name:"ArrowLeft24Icon",svgTemplate:u`
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
    `}),Fp=v({name:"ArrowLoopLeft24Icon",svgTemplate:u`
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
    `}),Vp=v({name:"ArrowLoopRight24Icon",svgTemplate:u`
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
    `}),is=v({name:"ArrowRight24Icon",svgTemplate:u`
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
    `}),Id=v({name:"ArrowsSort24Icon",svgTemplate:u`
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
    `}),jp=v({name:"ArrowsSortAscending24Icon",svgTemplate:u`
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
    `}),zp=v({name:"ArrowsSortDescending24Icon",svgTemplate:u`
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
    `}),Zp=v({name:"Bell24Icon",svgTemplate:u`
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
    `}),Wp=v({name:"Bucket24Icon",svgTemplate:u`
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
    `}),Up=v({name:"BuildingStore24Icon",svgTemplate:u`
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
    `}),Gp=v({name:"CalendarEvent24Icon",svgTemplate:u`
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
    `}),Yp=v({name:"Cash24Icon",svgTemplate:u`
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
    `}),Jp=v({name:"Chain24Icon",svgTemplate:u`
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
    `}),qd=v({name:"CheckMark24Icon",svgTemplate:u`
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
    `}),Pd=v({name:"ChevronDown24Icon",svgTemplate:u`
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
    `}),Kp=v({name:"ChevronUp24Icon",svgTemplate:u`
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
    `}),Xp=v({name:"Circle24Icon",svgTemplate:u`
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
    `}),Ld=v({name:"CircleDot24Icon",svgTemplate:u`
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
    `}),Qp=v({name:"CirclePlus24Icon",svgTemplate:u`
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
    `}),em=v({name:"CircleWavyCheck24Icon",svgTemplate:u`
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
    `}),tm=v({name:"Clock24Icon",svgTemplate:u`
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
    `}),rm=v({name:"Code24Icon",svgTemplate:u`
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
    `}),Nd=v({name:"Copy24Icon",svgTemplate:u`
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
    `}),nm=v({name:"CreateFile24Icon",svgTemplate:u`
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
    `}),om=v({name:"DotsVertical24Icon",svgTemplate:u`
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
    `}),im=v({name:"Download24Icon",svgTemplate:u`
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
    `}),am=v({name:"Edit24Icon",svgTemplate:u`
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
    `}),sm=v({name:"Envelope24Icon",svgTemplate:u`
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
    `}),Od=v({name:"ExternalLink24Icon",svgTemplate:u`
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
    `}),lm=v({name:"Filter24Icon",svgTemplate:u`
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
    `}),cm=v({name:"Fire24Icon",svgTemplate:u`
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
    `}),um=v({name:"Gear24Icon",svgTemplate:u`
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
    `}),dm=v({name:"Geometry24Icon",svgTemplate:u`
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
    `}),hm=v({name:"GridDots24Icon",svgTemplate:u`
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
    `}),fm=v({name:"Heart24Icon",svgTemplate:u`
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
    `}),ma=v({name:"Infinity24Icon",svgTemplate:u`
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
    `}),pm=v({name:"Info24Icon",svgTemplate:u`
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
    `}),mm=v({name:"LayersLinked24Icon",svgTemplate:u`
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
    `}),gm=v({name:"LayoutGrid24Icon",svgTemplate:u`
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
    `}),wm=v({name:"Lifebuoy24Icon",svgTemplate:u`
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
    `}),vm=v({name:"List24Icon",svgTemplate:u`
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
    `}),bm=v({name:"ListDetails24Icon",svgTemplate:u`
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
    `}),ym=v({name:"Loader24Icon",svgTemplate:u`
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
    `}),as=v({name:"LoaderAnimated24Icon",svgTemplate:u`
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
    `}),km=v({name:"Lock24Icon",svgTemplate:u`
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
    `}),$m=v({name:"LockOpen24Icon",svgTemplate:u`
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
    `}),xm=v({name:"Menu24Icon",svgTemplate:u`
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
    `}),Tm=v({name:"Paper24Icon",svgTemplate:u`
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
    `}),Cm=v({name:"People24Icon",svgTemplate:u`
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
    `}),Sm=v({name:"Person24Icon",svgTemplate:u`
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
    `}),Mm=v({name:"Photo24Icon",svgTemplate:u`
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
    `}),Am=v({name:"Refresh24Icon",svgTemplate:u`
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
    `}),Bd=v({name:"Rocket24Icon",svgTemplate:u`
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
    `}),Dd=v({name:"Search24Icon",svgTemplate:u`
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
    `}),Em=v({name:"Send24Icon",svgTemplate:u`
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
    `}),Im=v({name:"ShoppingCart24Icon",svgTemplate:u`
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
    `}),qm=v({name:"Social24Icon",svgTemplate:u`
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
    `}),Pm=v({name:"Square24Icon",svgTemplate:u`
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
    `}),Lm=v({name:"SquareCheck24Icon",svgTemplate:u`
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
    `}),Nm=v({name:"Tag24Icon",svgTemplate:u`
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
    `}),io=v({name:"Trash24Icon",svgTemplate:u`
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
    `}),Om=v({name:"Upload24Icon",svgTemplate:u`
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
    `}),Bm=v({name:"Wallet24Icon",svgTemplate:u`
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
    `}),Rd=v({name:"World24Icon",svgTemplate:u`
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
    `}),Dm=v({name:"WorldUpload24Icon",svgTemplate:u`
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
    `}),Rm=v({name:"X24Icon",svgTemplate:u`
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
    `}),_m=v({name:"Folder48Icon",svgTemplate:u`
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
    `}),_d=v({name:"FolderOff48Icon",svgTemplate:u`
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
    `}),Hm=v({name:"Kyc48Icon",svgTemplate:u`
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
                fill=${U["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${U["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${U["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),Fm=v({name:"Tag48Icon",svgTemplate:u`
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
    `}),Hd=v({name:"Api64Icon",svgTemplate:u`
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
    `}),Vm=v({name:"CircleDashes64Icon",svgTemplate:u`
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
    `}),jm=v({name:"Rocket64Icon",svgTemplate:u`
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
    `}),zm=v({name:"CryptoBtc16Icon",svgTemplate:u`
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
    `}),ss=v({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),Zm=v({name:"CryptoCkBtc16Icon",svgTemplate:u`
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
    `}),Wm=v({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),Fd="0 0 58 58",Vd=bf`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,Um=v({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${Fd}"
        >
            ${Vd}
        </svg>
    `}),Gm=v({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${Fd}"
        >
            ${Vd}
        </svg>
    `}),jd=v({name:"BrandDiscord24Icon",svgTemplate:u`
        <svg
            fill=${U["toniq-icon-fill-color"]("#5865f2")}
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
    `}),zd=v({name:"BrandDistrikt24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${U["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),Zd=v({name:"BrandDscvr24Icon",svgTemplate:u`
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
    `}),Ym=v({name:"BrandFacebookLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${U["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),Jm=v({name:"BrandGoogleLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${U["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),Km=v({name:"BrandIcScan24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${U["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),Wd=v({name:"BrandInstagram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${U["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),Xm=v({name:"BrandInstagramFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${U["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),Ud=v({name:"BrandMedium24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${U["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `}),Qm=v({name:"BrandNftgeek24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${U["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `}),Gd=v({name:"BrandTelegram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${U["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),Yd=v({name:"BrandTiktok24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${U["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${U["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),eg=v({name:"BrandTiktokFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${U["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),Jd=v({name:"BrandTwitch24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${U["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Kd=v({name:"BrandTwitter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${U["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),tg=v({name:"BioniqRobot100Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${U["toniq-icon-stroke-color"]("#8A2BE2")}
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
    `}),rg=v({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${U["toniq-icon-fill-color"](String(b.brandPrimary.foregroundColor))}
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
    `}),$t={"core-16":[Ed,Dp,Rp,At],"core-24":[_p,Hp,os,Fp,Vp,is,Id,jp,zp,Zp,Wp,Up,Gp,Yp,Jp,qd,Pd,Kp,Xp,Ld,Qp,em,tm,rm,Nd,nm,om,im,am,sm,Od,lm,cm,um,dm,hm,fm,ma,pm,mm,gm,wm,vm,bm,ym,as,km,$m,xm,Tm,Cm,Sm,Mm,Am,Bd,Dd,Em,Im,qm,Pm,Lm,Nm,io,Om,Bm,Rd,Dm,Rm],"core-48":[_m,_d,Hm,Fm],"core-64":[Hd,Vm,jm],cryptocurrencies:[zm,ss,Zm,Wm,Um,Gm],"third-party-brands":[jd,zd,Zd,Ym,Jm,Km,Wd,Xm,Ud,Qm,Gd,Yd,eg,Jd,Kd],toniq:[tg,rg]},ng=Tn({discord:tt(void 0,""),distrikt:tt(void 0,""),dscvr:tt(void 0,""),instagram:tt(void 0,""),medium:tt(void 0,""),telegram:tt(void 0,""),tikTok:tt(void 0,""),twitch:tt(void 0,""),twitter:tt(void 0,""),website:tt(void 0,"")}),og=ng.defaultValue,Xd={discord:jd,instagram:Wd,telegram:Gd,tikTok:Yd,distrikt:zd,twitch:Jd,dscvr:Zd,medium:Ud,twitter:Kd,website:Rd},zl="toniq-",{defineElement:ne,defineElementNoInputs:ls}=Ga({assertInputs:e=>{if(!e.tagName.startsWith(zl))throw new Error(`Tag name should start with '${zl}' but got '${e.tagName}'`)}}),Ut=ne()({tagName:"toniq-bold-space",styles:p`
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
    `,renderCallback({inputs:e}){return e.text?u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),T=ne()({tagName:"toniq-icon",styles:p`
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
    `,renderCallback({inputs:e}){return u`
            <${he.assign(e)}></${he}>
        `}}),ga=p`8px`;var Xr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e.TextOnly="text-only",e))(Xr||{});const ge=ne()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant==="secondary","toniq-button-outline":({inputs:e})=>e.variant==="outline","toniq-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${O.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ze};
        }

        :host(:hover) button {
            ${W(b.accentPrimaryHover)};
        }

        :host(:active) button {
            ${W(b.accentPrimaryActive)};
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
            border-radius: ${ga};
            ${W(b.accentPrimary)};
            padding: 10px;
            transition:
                color ${K.interaction},
                background-color ${K.interaction},
                border-color ${K.interaction};
        }

        ${Bt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${W(b.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${W(b.pagePrimary)};
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
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${T.assign({icon:e.icon})}
                      class="icon-template"
                  ></${T}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function ig(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=cs(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(h=>i==="+"?h>l:h<l).sort((h,m)=>i==="+"?h-m:m-h);let f;return c.length>0?f=c[0]:i==="+"?f=a:f=0,e.scrollTo({...r,[o==="x"?"left":"top"]:f})}function ag(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,g){let w=parseFloat(m);return/%/.test(m)&&(w/=100,w*=g),w}let l=s(n,r.width),c=s(o,r.height),f=s(i,r.width),h=s(a,r.height);return{x:{before:l,after:f},y:{before:c,after:h}}}function sg(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Qd(e){let t=[];for(const r of e.children)t=t.concat(r,Qd(r));return t}function lg(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Qd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const f of o){const h=f.getBoundingClientRect();if(t&&!sg(r,h,a))continue;const m=window.getComputedStyle(f);let[g,w]=m.getPropertyValue("scroll-snap-align").split(" ");typeof w>"u"&&(w=g);const k=i==="x"?w:g,$=h[s]-r[s]+e[c];switch(k){case"none":break;case"start":n[i].start.push($);break;case"center":n[i].center.push($+h[l]/2);break;case"end":n[i].end.push($+h[l]);break}}}return n}function cs(e){const t=e.getBoundingClientRect(),r=ag(e),n=lg(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Zl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Zl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Zl(e){return Array.from(new Set(e))}const ao="templates-container",cg=4e3;var wa=(e=>(e.Default="default",e.Banner="banner",e))(wa||{});const Ie=ne()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant==="banner"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${$p(`.${ao}`)}

        .${M(ao)} {
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
            transition: ${K.pretty};
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
            transition: ${K.interaction};
            border: 1px solid transparent;
            ${W(b.pagePrimary)};
        }

        .arrow ${T}:hover {
            border-color: ${b.pageInteractionHover.foregroundColor};
            ${W(b.pageInteractionHover)};
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{xi({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||cg)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Wl(t.scrollSnapPositions,0),i=Wl(t.scrollSnapPositions,-1);return u`
            <div>
                <div
                    class="arrow left ${fe({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${T.assign({icon:os})}
                        ${y("click",()=>{xi({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${T}>
                </div>
                <div
                    ${yr(()=>{r({scrollSnapPositions:cs(va(n)).x})})}
                    class=${ao}
                    ${y("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>u`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${fe({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${T.assign({icon:is})}
                        ${y("click",()=>{xi({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${T}>
                </div>
            </div>
        `}});function Wl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function va(e){const t=e.shadowRoot.querySelector(`.${ao}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function xi({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=va(e),i=o.clientWidth,a=cs(va(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,f=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&f)r&&o.scrollTo({behavior:"smooth",left:l});else{const h=ug(e,t),m=Ul(o.scrollLeft,a,!1),g=t==="right"?1:-1,w=(o.clientWidth-h*3)*g,k=Ul((m||0)+w,a,!0);t==="right"&&k>m?o.scrollTo({behavior:"smooth",left:k}):t==="left"&&k<m?o.scrollTo({behavior:"smooth",left:k}):ig(o,t)}}function ug(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Ul(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const vt=ne()({tagName:"toniq-checkbox",events:{checkedChange:re()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ke("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ke("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ke("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ke("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ke("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${O.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${K.interaction},
                background-color ${K.interaction},
                opacity ${K.interaction};
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
            ${Ze};
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

        ${Bt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${T.assign({icon:qd})}
                    class="check-mark ${fe({hidden:!e.checked})}"
                ></${T}>
            </span>
        `,o=u`
            <slot
                class=${fe({label:!0,checked:e.checked})}
            >
                <span
                    class=${fe({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return u`
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
        `}});var ba=(e=>(e.Default="default",e.Secondary="secondary",e))(ba||{});const Ti=ne()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant==="secondary"},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${O.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${W(b.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${W(b.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${T.assign({icon:e.icon})}></${T}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}});class Qt extends Error{}class dg extends Qt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class hg extends Qt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class fg extends Qt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class dr extends Qt{}class e0 extends Qt{constructor(t){super(`Invalid unit ${t}`)}}class Ce extends Qt{}class bt extends Qt{constructor(){super("Zone is an abstract class")}}const x="numeric",et="short",Le="long",Io={year:x,month:x,day:x},t0={year:x,month:et,day:x},pg={year:x,month:et,day:x,weekday:et},r0={year:x,month:Le,day:x},n0={year:x,month:Le,day:x,weekday:Le},o0={hour:x,minute:x},i0={hour:x,minute:x,second:x},a0={hour:x,minute:x,second:x,timeZoneName:et},s0={hour:x,minute:x,second:x,timeZoneName:Le},l0={hour:x,minute:x,hourCycle:"h23"},c0={hour:x,minute:x,second:x,hourCycle:"h23"},u0={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:et},d0={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Le},h0={year:x,month:x,day:x,hour:x,minute:x},f0={year:x,month:x,day:x,hour:x,minute:x,second:x},p0={year:x,month:et,day:x,hour:x,minute:x},m0={year:x,month:et,day:x,hour:x,minute:x,second:x},mg={year:x,month:et,day:x,weekday:et,hour:x,minute:x},g0={year:x,month:Le,day:x,hour:x,minute:x,timeZoneName:et},w0={year:x,month:Le,day:x,hour:x,minute:x,second:x,timeZoneName:et},v0={year:x,month:Le,day:x,weekday:Le,hour:x,minute:x,timeZoneName:Le},b0={year:x,month:Le,day:x,weekday:Le,hour:x,minute:x,second:x,timeZoneName:Le};class An{get type(){throw new bt}get name(){throw new bt}get ianaName(){return this.name}get isUniversal(){throw new bt}offsetName(t,r){throw new bt}formatOffset(t,r){throw new bt}offset(t){throw new bt}equals(t){throw new bt}get isValid(){throw new bt}}let Ci=null;class Go extends An{static get instance(){return Ci===null&&(Ci=new Go),Ci}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return A0(t,r,n)}formatOffset(t,r){return Qr(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let so={};function gg(e){return so[e]||(so[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),so[e]}const wg={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function vg(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,o,i,a,s,l,c,f]=n;return[a,o,i,s,l,c,f]}function bg(e,t){const r=e.formatToParts(t),n=[];for(let o=0;o<r.length;o++){const{type:i,value:a}=r[o],s=wg[i];i==="era"?n[s]=a:P(s)||(n[s]=parseInt(a,10))}return n}let jn={};class mt extends An{static create(t){return jn[t]||(jn[t]=new mt(t)),jn[t]}static resetCache(){jn={},so={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=mt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return A0(t,r,n,this.name)}formatOffset(t,r){return Qr(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=gg(this.name);let[o,i,a,s,l,c,f]=n.formatToParts?bg(n,r):vg(n,r);s==="BC"&&(o=-Math.abs(o)+1);const m=Jo({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:f,millisecond:0});let g=+r;const w=g%1e3;return g-=w>=0?w:1e3+w,(m-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Gl={};function yg(e,t={}){const r=JSON.stringify([e,t]);let n=Gl[r];return n||(n=new Intl.ListFormat(e,t),Gl[r]=n),n}let ya={};function ka(e,t={}){const r=JSON.stringify([e,t]);let n=ya[r];return n||(n=new Intl.DateTimeFormat(e,t),ya[r]=n),n}let $a={};function kg(e,t={}){const r=JSON.stringify([e,t]);let n=$a[r];return n||(n=new Intl.NumberFormat(e,t),$a[r]=n),n}let xa={};function $g(e,t={}){const{base:r,...n}=t,o=JSON.stringify([e,n]);let i=xa[o];return i||(i=new Intl.RelativeTimeFormat(e,t),xa[o]=i),i}let jr=null;function xg(){return jr||(jr=new Intl.DateTimeFormat().resolvedOptions().locale,jr)}let Yl={};function Tg(e){let t=Yl[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Yl[e]=t}return t}function Cg(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,o;try{n=ka(e).resolvedOptions(),o=e}catch{const l=e.substring(0,r);n=ka(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=n;return[o,i,a]}}function Sg(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function Mg(e){const t=[];for(let r=1;r<=12;r++){const n=E.utc(2009,r,1);t.push(e(n))}return t}function Ag(e){const t=[];for(let r=1;r<=7;r++){const n=E.utc(2016,11,13+r);t.push(e(n))}return t}function zn(e,t,r,n){const o=e.listingMode();return o==="error"?null:o==="en"?r(t):n(t)}function Eg(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Ig{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:o,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const s={useGrouping:!1,...n};n.padTo>0&&(s.minimumIntegerDigits=n.padTo),this.inf=kg(t,s)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):fs(t,3);return pe(r,this.padTo)}}}class qg{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&mt.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=ka(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Pg{constructor(t,r,n){this.opts={style:"long",...n},!r&&S0()&&(this.rtf=$g(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Xg(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Lg={firstDay:1,minimalDays:4,weekend:[6,7]};class Y{static fromOpts(t){return Y.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,o,i=!1){const a=t||se.defaultLocale,s=a||(i?"en-US":xg()),l=r||se.defaultNumberingSystem,c=n||se.defaultOutputCalendar,f=Ta(o)||se.defaultWeekSettings;return new Y(s,l,c,f,a)}static resetCache(){jr=null,ya={},$a={},xa={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:o}={}){return Y.create(t,r,n,o)}constructor(t,r,n,o,i){const[a,s,l]=Cg(t);this.locale=a,this.numberingSystem=r||s||null,this.outputCalendar=n||l||null,this.weekSettings=o,this.intl=Sg(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Eg(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Y.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ta(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return zn(this,t,q0,()=>{const n=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Mg(i=>this.extract(i,n,"month"))),this.monthsCache[o][t]})}weekdays(t,r=!1){return zn(this,t,N0,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=r?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=Ag(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return zn(this,void 0,()=>O0,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[E.utc(2016,11,13,9),E.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return zn(this,t,B0,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[E.utc(-40,1,1),E.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const o=this.dtFormatter(t,r),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===n);return a?a.value:null}numberFormatter(t={}){return new Ig(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new qg(t,this.intl,r)}relFormatter(t={}){return new Pg(this.intl,this.isEnglish(),t)}listFormatter(t={}){return yg(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:M0()?Tg(this.locale):Lg}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Si=null;class $e extends An{static get utcInstance(){return Si===null&&(Si=new $e(0)),Si}static instance(t){return t===0?$e.utcInstance:new $e(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new $e(Ko(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Qr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Qr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Qr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Ng extends An{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function xt(e,t){if(P(e)||e===null)return t;if(e instanceof An)return e;if(Dg(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Go.instance:r==="utc"||r==="gmt"?$e.utcInstance:$e.parseSpecifier(r)||mt.create(e)}else return Gt(e)?$e.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Ng(e)}let Jl=()=>Date.now(),Kl="system",Xl=null,Ql=null,ec=null,tc=60,rc,nc=null;class se{static get now(){return Jl}static set now(t){Jl=t}static set defaultZone(t){Kl=t}static get defaultZone(){return xt(Kl,Go.instance)}static get defaultLocale(){return Xl}static set defaultLocale(t){Xl=t}static get defaultNumberingSystem(){return Ql}static set defaultNumberingSystem(t){Ql=t}static get defaultOutputCalendar(){return ec}static set defaultOutputCalendar(t){ec=t}static get defaultWeekSettings(){return nc}static set defaultWeekSettings(t){nc=Ta(t)}static get twoDigitCutoffYear(){return tc}static set twoDigitCutoffYear(t){tc=t%100}static get throwOnInvalid(){return rc}static set throwOnInvalid(t){rc=t}static resetCaches(){Y.resetCache(),mt.resetCache()}}class Qe{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const y0=[0,31,59,90,120,151,181,212,243,273,304,334],k0=[0,31,60,91,121,152,182,213,244,274,305,335];function He(e,t){return new Qe("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function us(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const o=n.getUTCDay();return o===0?7:o}function $0(e,t,r){return r+(En(e)?k0:y0)[t-1]}function x0(e,t){const r=En(e)?k0:y0,n=r.findIndex(i=>i<t),o=t-r[n];return{month:n+1,day:o}}function ds(e,t){return(e-t+7)%7+1}function qo(e,t=4,r=1){const{year:n,month:o,day:i}=e,a=$0(n,o,i),s=ds(us(n,o,i),r);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=n-1,l=vn(c,t,r)):l>vn(n,t,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:s,...Xo(e)}}function oc(e,t=4,r=1){const{weekYear:n,weekNumber:o,weekday:i}=e,a=ds(us(n,1,t),r),s=mr(n);let l=o*7+i-a-7+t,c;l<1?(c=n-1,l+=mr(c)):l>s?(c=n+1,l-=mr(n)):c=n;const{month:f,day:h}=x0(c,l);return{year:c,month:f,day:h,...Xo(e)}}function Mi(e){const{year:t,month:r,day:n}=e,o=$0(t,r,n);return{year:t,ordinal:o,...Xo(e)}}function ic(e){const{year:t,ordinal:r}=e,{month:n,day:o}=x0(t,r);return{year:t,month:n,day:o,...Xo(e)}}function ac(e,t){if(!P(e.localWeekday)||!P(e.localWeekNumber)||!P(e.localWeekYear)){if(!P(e.weekday)||!P(e.weekNumber)||!P(e.weekYear))throw new dr("Cannot mix locale-based week fields with ISO-based week fields");return P(e.localWeekday)||(e.weekday=e.localWeekday),P(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),P(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Og(e,t=4,r=1){const n=Yo(e.weekYear),o=Fe(e.weekNumber,1,vn(e.weekYear,t,r)),i=Fe(e.weekday,1,7);return n?o?i?!1:He("weekday",e.weekday):He("week",e.weekNumber):He("weekYear",e.weekYear)}function Bg(e){const t=Yo(e.year),r=Fe(e.ordinal,1,mr(e.year));return t?r?!1:He("ordinal",e.ordinal):He("year",e.year)}function T0(e){const t=Yo(e.year),r=Fe(e.month,1,12),n=Fe(e.day,1,Po(e.year,e.month));return t?r?n?!1:He("day",e.day):He("month",e.month):He("year",e.year)}function C0(e){const{hour:t,minute:r,second:n,millisecond:o}=e,i=Fe(t,0,23)||t===24&&r===0&&n===0&&o===0,a=Fe(r,0,59),s=Fe(n,0,59),l=Fe(o,0,999);return i?a?s?l?!1:He("millisecond",o):He("second",n):He("minute",r):He("hour",t)}function P(e){return typeof e>"u"}function Gt(e){return typeof e=="number"}function Yo(e){return typeof e=="number"&&e%1===0}function Dg(e){return typeof e=="string"}function Rg(e){return Object.prototype.toString.call(e)==="[object Date]"}function S0(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function M0(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function _g(e){return Array.isArray(e)?e:[e]}function sc(e,t,r){if(e.length!==0)return e.reduce((n,o)=>{const i=[t(o),o];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Hg(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function xr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ta(e){if(e==null)return null;if(typeof e!="object")throw new Ce("Week settings must be an object");if(!Fe(e.firstDay,1,7)||!Fe(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Fe(t,1,7)))throw new Ce("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Fe(e,t,r){return Yo(e)&&e>=t&&e<=r}function Fg(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function kt(e){if(!(P(e)||e===null||e===""))return parseInt(e,10)}function _t(e){if(!(P(e)||e===null||e===""))return parseFloat(e)}function hs(e){if(!(P(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function fs(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function En(e){return e%4===0&&(e%100!==0||e%400===0)}function mr(e){return En(e)?366:365}function Po(e,t){const r=Fg(t-1,12)+1,n=e+(t-r)/12;return r===2?En(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Jo(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function lc(e,t,r){return-ds(us(e,1,t),r)+t-1}function vn(e,t=4,r=1){const n=lc(e,t,r),o=lc(e+1,t,r);return(mr(e)-n+o)/7}function Ca(e){return e>99?e:e>se.twoDigitCutoffYear?1900+e:2e3+e}function A0(e,t,r,n=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(r,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Ko(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,o=r<0||Object.is(r,-0)?-n:n;return r*60+o}function E0(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ce(`Invalid unit value ${e}`);return t}function Lo(e,t){const r={};for(const n in e)if(xr(e,n)){const o=e[n];if(o==null)continue;r[t(n)]=E0(o)}return r}function Qr(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${pe(r,2)}:${pe(n,2)}`;case"narrow":return`${o}${r}${n>0?`:${n}`:""}`;case"techie":return`${o}${pe(r,2)}${pe(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Xo(e){return Hg(e,["hour","minute","second","millisecond"])}const Vg=["January","February","March","April","May","June","July","August","September","October","November","December"],I0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],jg=["J","F","M","A","M","J","J","A","S","O","N","D"];function q0(e){switch(e){case"narrow":return[...jg];case"short":return[...I0];case"long":return[...Vg];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const P0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],L0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],zg=["M","T","W","T","F","S","S"];function N0(e){switch(e){case"narrow":return[...zg];case"short":return[...L0];case"long":return[...P0];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const O0=["AM","PM"],Zg=["Before Christ","Anno Domini"],Wg=["BC","AD"],Ug=["B","A"];function B0(e){switch(e){case"narrow":return[...Ug];case"short":return[...Wg];case"long":return[...Zg];default:return null}}function Gg(e){return O0[e.hour<12?0:1]}function Yg(e,t){return N0(t)[e.weekday-1]}function Jg(e,t){return q0(t)[e.month-1]}function Kg(e,t){return B0(t)[e.year<0?0:1]}function Xg(e,t,r="always",n=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const h=e==="days";switch(t){case 1:return h?"tomorrow":`next ${o[e][0]}`;case-1:return h?"yesterday":`last ${o[e][0]}`;case 0:return h?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],f=n?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${f} ago`:`in ${s} ${f}`}function cc(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Qg={D:Io,DD:t0,DDD:r0,DDDD:n0,t:o0,tt:i0,ttt:a0,tttt:s0,T:l0,TT:c0,TTT:u0,TTTT:d0,f:h0,ff:p0,fff:g0,ffff:v0,F:f0,FF:m0,FFF:w0,FFFF:b0};class ke{static create(t,r={}){return new ke(t,r)}static parseFormat(t){let r=null,n="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),r=null,n="",o=!o):o||s===r?n+=s:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=s,r=s)}return n.length>0&&i.push({literal:o||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Qg[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return pe(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(g,w)=>this.loc.extract(t,g,w),a=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",s=()=>n?Gg(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,w)=>n?Jg(t,g):i(w?{month:g}:{month:g,day:"numeric"},"month"),c=(g,w)=>n?Yg(t,g):i(w?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),f=g=>{const w=ke.macroTokenToFormatOpts(g);return w?this.formatWithSystemDefault(t,w):g},h=g=>n?Kg(t,g):i({era:g},"era"),m=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(g)}};return cc(ke.parseFormat(r),m)}formatDurationFromString(t,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const f=n(c);return f?this.num(l.get(f),c.length):c},i=ke.parseFormat(r),a=i.reduce((l,{literal:c,val:f})=>c?l:l.concat(f),[]),s=t.shiftTo(...a.map(n).filter(l=>l));return cc(i,o(s))}}const D0=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Mr(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Ar(...e){return t=>e.reduce(([r,n,o],i)=>{const[a,s,l]=i(t,o);return[{...r,...a},s||n,l]},[{},null,1]).slice(0,2)}function Er(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const o=r.exec(e);if(o)return n(o)}return[null,null]}function R0(...e){return(t,r)=>{const n={};let o;for(o=0;o<e.length;o++)n[e[o]]=kt(t[r+o]);return[n,null,r+o]}}const _0=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ew=`(?:${_0.source}?(?:\\[(${D0.source})\\])?)?`,ps=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,H0=RegExp(`${ps.source}${ew}`),ms=RegExp(`(?:T${H0.source})?`),tw=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,rw=/(\d{4})-?W(\d\d)(?:-?(\d))?/,nw=/(\d{4})-?(\d{3})/,ow=R0("weekYear","weekNumber","weekDay"),iw=R0("year","ordinal"),aw=/(\d{4})-(\d\d)-(\d\d)/,F0=RegExp(`${ps.source} ?(?:${_0.source}|(${D0.source}))?`),sw=RegExp(`(?: ${F0.source})?`);function gr(e,t,r){const n=e[t];return P(n)?r:kt(n)}function lw(e,t){return[{year:gr(e,t),month:gr(e,t+1,1),day:gr(e,t+2,1)},null,t+3]}function Ir(e,t){return[{hours:gr(e,t,0),minutes:gr(e,t+1,0),seconds:gr(e,t+2,0),milliseconds:hs(e[t+3])},null,t+4]}function In(e,t){const r=!e[t]&&!e[t+1],n=Ko(e[t+1],e[t+2]),o=r?null:$e.instance(n);return[{},o,t+3]}function qn(e,t){const r=e[t]?mt.create(e[t]):null;return[{},r,t+1]}const cw=RegExp(`^T?${ps.source}$`),uw=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function dw(e){const[t,r,n,o,i,a,s,l,c]=e,f=t[0]==="-",h=l&&l[0]==="-",m=(g,w=!1)=>g!==void 0&&(w||g&&f)?-g:g;return[{years:m(_t(r)),months:m(_t(n)),weeks:m(_t(o)),days:m(_t(i)),hours:m(_t(a)),minutes:m(_t(s)),seconds:m(_t(l),l==="-0"),milliseconds:m(hs(c),h)}]}const hw={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function gs(e,t,r,n,o,i,a){const s={year:t.length===2?Ca(kt(t)):kt(t),month:I0.indexOf(r)+1,day:kt(n),hour:kt(o),minute:kt(i)};return a&&(s.second=kt(a)),e&&(s.weekday=e.length>3?P0.indexOf(e)+1:L0.indexOf(e)+1),s}const fw=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function pw(e){const[,t,r,n,o,i,a,s,l,c,f,h]=e,m=gs(t,o,n,r,i,a,s);let g;return l?g=hw[l]:c?g=0:g=Ko(f,h),[m,new $e(g)]}function mw(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const gw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,ww=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,vw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function uc(e){const[,t,r,n,o,i,a,s]=e;return[gs(t,o,n,r,i,a,s),$e.utcInstance]}function bw(e){const[,t,r,n,o,i,a,s]=e;return[gs(t,s,r,n,o,i,a),$e.utcInstance]}const yw=Mr(tw,ms),kw=Mr(rw,ms),$w=Mr(nw,ms),xw=Mr(H0),V0=Ar(lw,Ir,In,qn),Tw=Ar(ow,Ir,In,qn),Cw=Ar(iw,Ir,In,qn),Sw=Ar(Ir,In,qn);function Mw(e){return Er(e,[yw,V0],[kw,Tw],[$w,Cw],[xw,Sw])}function Aw(e){return Er(mw(e),[fw,pw])}function Ew(e){return Er(e,[gw,uc],[ww,uc],[vw,bw])}function Iw(e){return Er(e,[uw,dw])}const qw=Ar(Ir);function Pw(e){return Er(e,[cw,qw])}const Lw=Mr(aw,sw),Nw=Mr(F0),Ow=Ar(Ir,In,qn);function Bw(e){return Er(e,[Lw,V0],[Nw,Ow])}const dc="Invalid Duration",j0={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Dw={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...j0},Oe=146097/400,or=146097/4800,Rw={years:{quarters:4,months:12,weeks:Oe/7,days:Oe,hours:Oe*24,minutes:Oe*24*60,seconds:Oe*24*60*60,milliseconds:Oe*24*60*60*1e3},quarters:{months:3,weeks:Oe/28,days:Oe/4,hours:Oe*24/4,minutes:Oe*24*60/4,seconds:Oe*24*60*60/4,milliseconds:Oe*24*60*60*1e3/4},months:{weeks:or/7,days:or,hours:or*24,minutes:or*24*60,seconds:or*24*60*60,milliseconds:or*24*60*60*1e3},...j0},Zt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],_w=Zt.slice(0).reverse();function yt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new F(n)}function z0(e,t){let r=t.milliseconds??0;for(const n of _w.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function hc(e,t){const r=z0(e,t)<0?-1:1;Zt.reduceRight((n,o)=>{if(P(t[o]))return n;if(n){const i=t[n]*r,a=e[o][n],s=Math.floor(i/a);t[o]+=s*r,t[n]-=s*a*r}return o},null),Zt.reduce((n,o)=>{if(P(t[o]))return n;if(n){const i=t[n]%1;t[n]-=i,t[o]+=i*e[n][o]}return o},null)}function Hw(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class F{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Rw:Dw;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Y.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return F.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Ce(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new F({values:Lo(t,F.normalizeUnit),loc:Y.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Gt(t))return F.fromMillis(t);if(F.isDuration(t))return t;if(typeof t=="object")return F.fromObject(t);throw new Ce(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Iw(t);return n?F.fromObject(n,r):F.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Pw(t);return n?F.fromObject(n,r):F.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Ce("need to specify a reason the Duration is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(se.throwOnInvalid)throw new fg(n);return new F({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new e0(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ke.create(this.loc,n).formatDurationFromString(this,t):dc}toHuman(t={}){if(!this.isValid)return dc;const r=Zt.map(n=>{const o=this.values[n];return P(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(o)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=fs(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},E.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?z0(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=F.fromDurationLike(t),n={};for(const o of Zt)(xr(r.values,o)||xr(this.values,o))&&(n[o]=r.get(o)+this.get(o));return yt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=F.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=E0(t(this.values[n],n));return yt(this,{values:r},!0)}get(t){return this[F.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Lo(t,F.normalizeUnit)};return yt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:o,conversionAccuracy:n};return yt(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return hc(this.matrix,t),yt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Hw(this.normalize().shiftToAll().toObject());return yt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>F.normalizeUnit(a));const r={},n={},o=this.toObject();let i;for(const a of Zt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in n)s+=this.matrix[c][a]*n[c],n[c]=0;Gt(o[a])&&(s+=o[a]);const l=Math.trunc(s);r[a]=l,n[a]=(s*1e3-l*1e3)/1e3}else Gt(o[a])&&(n[a]=o[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return hc(this.matrix,r),yt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return yt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,o){return n===void 0||n===0?o===void 0||o===0:n===o}for(const n of Zt)if(!r(this.values[n],t.values[n]))return!1;return!0}}const ir="Invalid Interval";function Fw(e,t){return!e||!e.isValid?ue.invalid("missing or invalid start"):!t||!t.isValid?ue.invalid("missing or invalid end"):t<e?ue.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ue{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Ce("need to specify a reason the Interval is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(se.throwOnInvalid)throw new hg(n);return new ue({invalid:n})}static fromDateTimes(t,r){const n=Br(t),o=Br(r),i=Fw(n,o);return i??new ue({start:n,end:o})}static after(t,r){const n=F.fromDurationLike(r),o=Br(t);return ue.fromDateTimes(o,o.plus(n))}static before(t,r){const n=F.fromDurationLike(r),o=Br(t);return ue.fromDateTimes(o.minus(n),o)}static fromISO(t,r){const[n,o]=(t||"").split("/",2);if(n&&o){let i,a;try{i=E.fromISO(n,r),a=i.isValid}catch{a=!1}let s,l;try{s=E.fromISO(o,r),l=s.isValid}catch{l=!1}if(a&&l)return ue.fromDateTimes(i,s);if(a){const c=F.fromISO(o,r);if(c.isValid)return ue.after(i,c)}else if(l){const c=F.fromISO(n,r);if(c.isValid)return ue.before(s,c)}}return ue.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let o;return r!=null&&r.useLocaleWeeks?o=this.end.reconfigure({locale:n.locale}):o=this.end,o=o.startOf(t,r),Math.floor(o.diff(n,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ue.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(Br).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),n=[];let{s:o}=this,i=0;for(;o<this.e;){const a=r[i]||this.e,s=+a>+this.e?this.e:a;n.push(ue.fromDateTimes(o,s)),o=s,i+=1}return n}splitBy(t){const r=F.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,o=1,i;const a=[];for(;n<this.e;){const s=this.start.plus(r.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(ue.fromDateTimes(n,i)),n=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ue.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ue.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&o.push(ue.fromDateTimes(r,l.time)),r=null);return ue.merge(o)}difference(...t){return ue.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ir}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Io,r={}){return this.isValid?ke.create(this.s.loc.clone(r),t).formatInterval(this):ir}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:ir}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ir}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:ir}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:ir}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):F.invalid(this.invalidReason)}mapEndpoints(t){return ue.fromDateTimes(t(this.s),t(this.e))}}class zr{static hasDST(t=se.defaultZone){const r=E.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return mt.isValidZone(t)}static normalizeZone(t){return xt(t,se.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Y.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Y.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Y.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Y.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||Y.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Y.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:o=null}={}){return(o||Y.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Y.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Y.create(r,null,"gregory").eras(t)}static features(){return{relative:S0(),localeWeek:M0()}}}function fc(e,t){const r=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(F.fromMillis(n).as("days"))}function Vw(e,t,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const f=fc(l,c);return(f-f%7)/7}],["days",fc]],o={},i=e;let a,s;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function jw(e,t,r,n){let[o,i,a,s]=Vw(e,t,r);const l=t-o,c=r.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const f=F.fromObject(i,n);return c.length>0?F.fromMillis(l,n).shiftTo(...c).plus(f):f}const ws={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},pc={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},zw=ws.hanidec.replace(/[\[|\]]/g,"").split("");function Zw(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(ws.hanidec)!==-1)t+=zw.indexOf(e[r]);else for(const o in pc){const[i,a]=pc[o];n>=i&&n<=a&&(t+=n-i)}}return parseInt(t,10)}else return t}function Ge({numberingSystem:e},t=""){return new RegExp(`${ws[e||"latn"]}${t}`)}const Ww="missing Intl.DateTimeFormat.formatToParts support";function z(e,t=r=>r){return{regex:e,deser:([r])=>t(Zw(r))}}const Uw=String.fromCharCode(160),Z0=`[ ${Uw}]`,W0=new RegExp(Z0,"g");function Gw(e){return e.replace(/\./g,"\\.?").replace(W0,Z0)}function mc(e){return e.replace(/\./g,"").replace(W0," ").toLowerCase()}function Ye(e,t){return e===null?null:{regex:RegExp(e.map(Gw).join("|")),deser:([r])=>e.findIndex(n=>mc(r)===mc(n))+t}}function gc(e,t){return{regex:e,deser:([,r,n])=>Ko(r,n),groups:t}}function Zn(e){return{regex:e,deser:([t])=>t}}function Yw(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Jw(e,t){const r=Ge(t),n=Ge(t,"{2}"),o=Ge(t,"{3}"),i=Ge(t,"{4}"),a=Ge(t,"{6}"),s=Ge(t,"{1,2}"),l=Ge(t,"{1,3}"),c=Ge(t,"{1,6}"),f=Ge(t,"{1,9}"),h=Ge(t,"{2,4}"),m=Ge(t,"{4,6}"),g=$=>({regex:RegExp(Yw($.val)),deser:([C])=>C,literal:!0}),k=($=>{if(e.literal)return g($);switch($.val){case"G":return Ye(t.eras("short"),0);case"GG":return Ye(t.eras("long"),0);case"y":return z(c);case"yy":return z(h,Ca);case"yyyy":return z(i);case"yyyyy":return z(m);case"yyyyyy":return z(a);case"M":return z(s);case"MM":return z(n);case"MMM":return Ye(t.months("short",!0),1);case"MMMM":return Ye(t.months("long",!0),1);case"L":return z(s);case"LL":return z(n);case"LLL":return Ye(t.months("short",!1),1);case"LLLL":return Ye(t.months("long",!1),1);case"d":return z(s);case"dd":return z(n);case"o":return z(l);case"ooo":return z(o);case"HH":return z(n);case"H":return z(s);case"hh":return z(n);case"h":return z(s);case"mm":return z(n);case"m":return z(s);case"q":return z(s);case"qq":return z(n);case"s":return z(s);case"ss":return z(n);case"S":return z(l);case"SSS":return z(o);case"u":return Zn(f);case"uu":return Zn(s);case"uuu":return z(r);case"a":return Ye(t.meridiems(),0);case"kkkk":return z(i);case"kk":return z(h,Ca);case"W":return z(s);case"WW":return z(n);case"E":case"c":return z(r);case"EEE":return Ye(t.weekdays("short",!1),1);case"EEEE":return Ye(t.weekdays("long",!1),1);case"ccc":return Ye(t.weekdays("short",!0),1);case"cccc":return Ye(t.weekdays("long",!0),1);case"Z":case"ZZ":return gc(new RegExp(`([+-]${s.source})(?::(${n.source}))?`),2);case"ZZZ":return gc(new RegExp(`([+-]${s.source})(${n.source})?`),2);case"z":return Zn(/[a-z_+-/]{1,256}?/i);case" ":return Zn(/[^\S\n\r]/);default:return g($)}})(e)||{invalidReason:Ww};return k.token=e,k}const Kw={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Xw(e,t,r){const{type:n,value:o}=e;if(n==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[n];let a=n;n==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let s=Kw[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function Qw(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function e4(e,t,r){const n=e.match(t);if(n){const o={};let i=1;for(const a in r)if(xr(r,a)){const s=r[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(n.slice(i,i+l))),i+=l}return[n,o]}else return[n,{}]}function t4(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return P(e.z)||(r=mt.create(e.z)),P(e.Z)||(r||(r=new $e(e.Z)),n=e.Z),P(e.q)||(e.M=(e.q-1)*3+1),P(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),P(e.u)||(e.S=hs(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),r,n]}let Ai=null;function r4(){return Ai||(Ai=E.fromMillis(1555555555555)),Ai}function n4(e,t){if(e.literal)return e;const r=ke.macroTokenToFormatOpts(e.val),n=Y0(r,t);return n==null||n.includes(void 0)?e:n}function U0(e,t){return Array.prototype.concat(...e.map(r=>n4(r,t)))}function G0(e,t,r){const n=U0(ke.parseFormat(r),e),o=n.map(a=>Jw(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{const[a,s]=Qw(o),l=RegExp(a,"i"),[c,f]=e4(t,l,s),[h,m,g]=f?t4(f):[null,null,void 0];if(xr(f,"a")&&xr(f,"H"))throw new dr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:f,result:h,zone:m,specificOffset:g}}}function o4(e,t,r){const{result:n,zone:o,specificOffset:i,invalidReason:a}=G0(e,t,r);return[n,o,i,a]}function Y0(e,t){if(!e)return null;const n=ke.create(t,e).dtFormatter(r4()),o=n.formatToParts(),i=n.resolvedOptions();return o.map(a=>Xw(a,e,i))}const Ei="Invalid DateTime",wc=864e13;function Wn(e){return new Qe("unsupported zone",`the zone "${e.name}" is not supported`)}function Ii(e){return e.weekData===null&&(e.weekData=qo(e.c)),e.weekData}function qi(e){return e.localWeekData===null&&(e.localWeekData=qo(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ht(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new E({...r,...t,old:r})}function J0(e,t,r){let n=e-t*60*1e3;const o=r.offset(n);if(t===o)return[n,t];n-=(o-t)*60*1e3;const i=r.offset(n);return o===i?[n,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Un(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function lo(e,t,r){return J0(Jo(e),t,r)}function vc(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:o,day:Math.min(e.c.day,Po(n,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=F.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Jo(i);let[l,c]=J0(s,r,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Or(e,t,r,n,o,i){const{setZone:a,zone:s}=r;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=E.fromObject(e,{...r,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return E.invalid(new Qe("unparsable",`the input "${o}" can't be parsed as ${n}`))}function Gn(e,t,r=!0){return e.isValid?ke.create(Y.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Pi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=pe(e.c.year,r?6:4),t?(n+="-",n+=pe(e.c.month),n+="-",n+=pe(e.c.day)):(n+=pe(e.c.month),n+=pe(e.c.day)),n}function bc(e,t,r,n,o,i){let a=pe(e.c.hour);return t?(a+=":",a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=":")):a+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(a+=pe(e.c.second),(e.c.millisecond!==0||!n)&&(a+=".",a+=pe(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=pe(Math.trunc(-e.o/60)),a+=":",a+=pe(Math.trunc(-e.o%60))):(a+="+",a+=pe(Math.trunc(e.o/60)),a+=":",a+=pe(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const K0={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},i4={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},a4={ordinal:1,hour:0,minute:0,second:0,millisecond:0},X0=["year","month","day","hour","minute","second","millisecond"],s4=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],l4=["year","ordinal","hour","minute","second","millisecond"];function c4(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new e0(e);return t}function yc(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return c4(e)}}function kc(e,t){const r=xt(t.zone,se.defaultZone),n=Y.fromObject(t),o=se.now();let i,a;if(P(e.year))i=o;else{for(const c of X0)P(e[c])&&(e[c]=K0[c]);const s=T0(e)||C0(e);if(s)return E.invalid(s);const l=r.offset(o);[i,a]=lo(e,l,r)}return new E({ts:i,zone:r,loc:n,o:a})}function $c(e,t,r){const n=P(r.round)?!0:r.round,o=(a,s)=>(a=fs(a,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(a,s)),i=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(i(r.unit),r.unit);for(const a of r.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function xc(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}class E{constructor(t){const r=t.zone||se.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Qe("invalid input"):null)||(r.isValid?null:Wn(r));this.ts=P(t.ts)?se.now():t.ts;let o=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[o,i]=[t.old.c,t.old.o];else{const s=r.offset(this.ts);o=Un(this.ts,s),n=Number.isNaN(o.year)?new Qe("invalid input"):null,o=n?null:o,i=n?null:s}this._zone=r,this.loc=t.loc||Y.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new E({})}static local(){const[t,r]=xc(arguments),[n,o,i,a,s,l,c]=r;return kc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,r]=xc(arguments),[n,o,i,a,s,l,c]=r;return t.zone=$e.utcInstance,kc({year:n,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,r={}){const n=Rg(t)?t.valueOf():NaN;if(Number.isNaN(n))return E.invalid("invalid input");const o=xt(r.zone,se.defaultZone);return o.isValid?new E({ts:n,zone:o,loc:Y.fromObject(r)}):E.invalid(Wn(o))}static fromMillis(t,r={}){if(Gt(t))return t<-wc||t>wc?E.invalid("Timestamp out of range"):new E({ts:t,zone:xt(r.zone,se.defaultZone),loc:Y.fromObject(r)});throw new Ce(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Gt(t))return new E({ts:t*1e3,zone:xt(r.zone,se.defaultZone),loc:Y.fromObject(r)});throw new Ce("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=xt(r.zone,se.defaultZone);if(!n.isValid)return E.invalid(Wn(n));const o=Y.fromObject(r),i=Lo(t,yc),{minDaysInFirstWeek:a,startOfWeek:s}=ac(i,o),l=se.now(),c=P(r.specificOffset)?n.offset(l):r.specificOffset,f=!P(i.ordinal),h=!P(i.year),m=!P(i.month)||!P(i.day),g=h||m,w=i.weekYear||i.weekNumber;if((g||f)&&w)throw new dr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&f)throw new dr("Can't mix ordinal dates with month/day");const k=w||i.weekday&&!g;let $,C,S=Un(l,c);k?($=s4,C=i4,S=qo(S,a,s)):f?($=l4,C=a4,S=Mi(S)):($=X0,C=K0);let B=!1;for(const Te of $){const ve=i[Te];P(ve)?B?i[Te]=C[Te]:i[Te]=S[Te]:B=!0}const j=k?Og(i,a,s):f?Bg(i):T0(i),ee=j||C0(i);if(ee)return E.invalid(ee);const ie=k?oc(i,a,s):f?ic(i):i,[ce,H]=lo(ie,c,n),ae=new E({ts:ce,zone:n,o:H,loc:o});return i.weekday&&g&&t.weekday!==ae.weekday?E.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${ae.toISO()}`):ae}static fromISO(t,r={}){const[n,o]=Mw(t);return Or(n,o,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,o]=Aw(t);return Or(n,o,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,o]=Ew(t);return Or(n,o,r,"HTTP",r)}static fromFormat(t,r,n={}){if(P(t)||P(r))throw new Ce("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=n,a=Y.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,f]=o4(a,t,r);return f?E.invalid(f):Or(s,l,n,`format ${r}`,t,c)}static fromString(t,r,n={}){return E.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,o]=Bw(t);return Or(n,o,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Ce("need to specify a reason the DateTime is invalid");const n=t instanceof Qe?t:new Qe(t,r);if(se.throwOnInvalid)throw new dg(n);return new E({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Y0(t,Y.fromObject(r));return n?n.map(o=>o?o.val:null).join(""):null}static expandFormat(t,r={}){return U0(ke.parseFormat(t),Y.fromObject(r)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ii(this).weekYear:NaN}get weekNumber(){return this.isValid?Ii(this).weekNumber:NaN}get weekday(){return this.isValid?Ii(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?qi(this).weekday:NaN}get localWeekNumber(){return this.isValid?qi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?qi(this).weekYear:NaN}get ordinal(){return this.isValid?Mi(this.c).ordinal:NaN}get monthShort(){return this.isValid?zr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?zr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?zr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?zr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Jo(this.c),o=this.zone.offset(n-t),i=this.zone.offset(n+t),a=this.zone.offset(n-o*r),s=this.zone.offset(n-i*r);if(a===s)return[this];const l=n-a*r,c=n-s*r,f=Un(l,a),h=Un(c,s);return f.hour===h.hour&&f.minute===h.minute&&f.second===h.second&&f.millisecond===h.millisecond?[Ht(this,{ts:l}),Ht(this,{ts:c})]:[this]}get isInLeapYear(){return En(this.year)}get daysInMonth(){return Po(this.year,this.month)}get daysInYear(){return this.isValid?mr(this.year):NaN}get weeksInWeekYear(){return this.isValid?vn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?vn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:o}=ke.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:o}}toUTC(t=0,r={}){return this.setZone($e.instance(t),r)}toLocal(){return this.setZone(se.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=xt(t,se.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(r||n){const i=t.offset(this.ts),a=this.toObject();[o]=lo(a,i,t)}return Ht(this,{ts:o,zone:t})}else return E.invalid(Wn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const o=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Ht(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Lo(t,yc),{minDaysInFirstWeek:n,startOfWeek:o}=ac(r,this.loc),i=!P(r.weekYear)||!P(r.weekNumber)||!P(r.weekday),a=!P(r.ordinal),s=!P(r.year),l=!P(r.month)||!P(r.day),c=s||l,f=r.weekYear||r.weekNumber;if((c||a)&&f)throw new dr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new dr("Can't mix ordinal dates with month/day");let h;i?h=oc({...qo(this.c,n,o),...r},n,o):P(r.ordinal)?(h={...this.toObject(),...r},P(r.day)&&(h.day=Math.min(Po(h.year,h.month),h.day))):h=ic({...Mi(this.c),...r});const[m,g]=lo(h,this.o,this.zone);return Ht(this,{ts:m,o:g})}plus(t){if(!this.isValid)return this;const r=F.fromDurationLike(t);return Ht(this,vc(this,r))}minus(t){if(!this.isValid)return this;const r=F.fromDurationLike(t).negate();return Ht(this,vc(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},o=F.normalizeUnit(t);switch(o){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(o==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?ke.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Ei}toLocaleString(t=Io,r={}){return this.isValid?ke.create(this.loc.clone(r),t).formatDateTime(this):Ei}toLocaleParts(t={}){return this.isValid?ke.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Pi(this,a);return s+="T",s+=bc(this,a,r,n,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Pi(this,t==="extended"):null}toISOWeekDate(){return Gn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+bc(this,a==="extended",r,t,n,i):null}toRFC2822(){return Gn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Gn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Pi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let o="HH:mm:ss.SSS";return(r||t)&&(n&&(o+=" "),r?o+="z":t&&(o+="ZZ")),Gn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ei}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return F.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=_g(r).map(F.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=jw(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",r={}){return this.diff(E.now(),t,r)}until(t){return this.isValid?ue.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=o&&o<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||E.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),$c(r,this.plus(n),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?$c(t.base||E.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(E.isDateTime))throw new Ce("min requires all arguments be DateTimes");return sc(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(E.isDateTime))throw new Ce("max requires all arguments be DateTimes");return sc(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:o=null,numberingSystem:i=null}=n,a=Y.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return G0(a,t,r)}static fromStringExplain(t,r,n={}){return E.fromFormatExplain(t,r,n)}static get DATE_SHORT(){return Io}static get DATE_MED(){return t0}static get DATE_MED_WITH_WEEKDAY(){return pg}static get DATE_FULL(){return r0}static get DATE_HUGE(){return n0}static get TIME_SIMPLE(){return o0}static get TIME_WITH_SECONDS(){return i0}static get TIME_WITH_SHORT_OFFSET(){return a0}static get TIME_WITH_LONG_OFFSET(){return s0}static get TIME_24_SIMPLE(){return l0}static get TIME_24_WITH_SECONDS(){return c0}static get TIME_24_WITH_SHORT_OFFSET(){return u0}static get TIME_24_WITH_LONG_OFFSET(){return d0}static get DATETIME_SHORT(){return h0}static get DATETIME_SHORT_WITH_SECONDS(){return f0}static get DATETIME_MED(){return p0}static get DATETIME_MED_WITH_SECONDS(){return m0}static get DATETIME_MED_WITH_WEEKDAY(){return mg}static get DATETIME_FULL(){return g0}static get DATETIME_FULL_WITH_SECONDS(){return w0}static get DATETIME_HUGE(){return v0}static get DATETIME_HUGE_WITH_SECONDS(){return b0}}function Br(e){if(E.isDateTime(e))return e;if(e&&e.valueOf&&Gt(e.valueOf()))return E.fromJSDate(e);if(e&&typeof e=="object")return E.fromObject(e);throw new Ce(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function Tr(e){const t=E.fromObject(an(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Q0(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}function Li(e,t){return Q0(Tr(e).plus(t))}const u4=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],d4=u4.reduce((e,t)=>(e[t]=t,e),{}),h4=se.defaultZone.name,vs=d4.UTC;var Tc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Tc||(Tc={}));const f4=["hour","minute","second","millisecond"],p4=Tn({hour:14,minute:19,second:7,millisecond:877,timezone:vs}),m4=Tn({year:2023,month:6,day:5,timezone:vs}),g4=Tn(Wf(m4,p4));var I;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(I||(I={}));const w4={[I.Milliseconds]:"millisecond",[I.Seconds]:"second",[I.Minutes]:"minute",[I.Hours]:"hour",[I.Days]:"day",[I.Weeks]:"week",[I.Months]:"month",[I.Quarters]:"quarter",[I.Years]:"year"},Cc=[I.Milliseconds,I.Seconds,I.Minutes,I.Hours,I.Days,I.Weeks,I.Months,I.Quarters,I.Years];function Sc(e,t){return ye(e,(r,n)=>t==null||!Q(n,"number")?n:Gi({number:n,digits:t}))}const Mc={longterm:1,casual:0},eh={[I.Years]:"longterm",[I.Quarters]:"longterm",[I.Months]:"longterm",[I.Weeks]:"casual",[I.Days]:"casual",[I.Hours]:"casual",[I.Minutes]:"casual",[I.Seconds]:"casual",[I.Milliseconds]:"casual"};function v4(e){return e.map(n=>eh[n]).reduce((n,o)=>Mc[o]>Mc[n]?o:n)}var wr;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(wr||(wr={}));function b4({start:e,end:t,units:r,unit:n,diffType:o,decimalCount:i}){const a=Tr(e),s=Tr(t),l=r??[n],c=l.length===1?wr.EquivalentUnits:o;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===wr.AdditiveUnits){const f=v4(l),h=s.diff(a,l,{conversionAccuracy:f}).toObject();return Sc(h,i)}else if(c===wr.EquivalentUnits){const f=l.map(m=>{const w=s.diff(a,m,{conversionAccuracy:eh[m]}).toObject()[m];if(w==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,w]}),h=$h(f);return Sc(h,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function y4(e){if(!zr.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function k4(e){Pu(e,g4),y4(e.timezone),Tr(e)}function $4(e){try{return k4(e),!0}catch{return!1}}function x4(e,t){const r=T4(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return Q0(r,t)}function Ac(e){const t=E.fromJSDate(new Date(e));if(t.isValid)return t}function T4(e,t){if($4(e)&&(e=Tr(e).toMillis()),E.isDateTime(e))return e.setZone(t);if(Q(e,"number"))return E.fromMillis(e,{zone:vs}).setZone(t);if(Q(e,"string")){const r=E.fromISO(e,{zone:t});return r.isValid?r:Ac(e)}else if(e instanceof Date)return E.fromJSDate(e).setZone(t);return Ac(e)}function C4(e){return x4(Date.now(),e)}function th(){return C4(h4)}const S4={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Fh(S4,f4);const M4=se.defaultLocale;function A4(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Ec(e,t){const r=Tr(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??M4});return A4(r)}function E4(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function I4(e,t){const r=Me(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(we).join(":")}function q4(e,t){return{date:E4(e),time:I4(e,t.includeSeconds),timezone:e.timezone}}function P4(e,t){const r=q4(e,t);return[r.date,r.time,t.includeTimezone&&`(${r.timezone})`].filter(we).join(" ")}const L4={[I.Milliseconds]:1e3,[I.Seconds]:60,[I.Minutes]:60,[I.Hours]:24,[I.Days]:30,[I.Weeks]:4,[I.Months]:12,[I.Quarters]:4,[I.Years]:1/0};function N4({fullDate:e,relativeTo:t,options:r={}}){const n=r.decimalDigitCount||0,o=b4({start:e,end:t,units:Cc,diffType:wr.EquivalentUnits}),i=ye(o,(g,w)=>{const k=Math.floor(Math.abs(Gi({digits:1,number:w}))),$=k>0,C=r.limitUnitMax?k<L4[g]:!0;return $&&C}),a=Cc.reduce((g,w)=>{var $;return!(($=r.blockedRelativeUnits)!=null&&$.includes(w))&&i[w]?w:g},void 0);if(r.blockJustNow?!1:it(e,t)||a===I.Minutes&&o.minutes<2||a===I.Seconds&&o.seconds<11||a===I.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],c=Math.abs(Gi({digits:n,number:l})),f=c===1,h=[w4[a],f?"":"s"].join(""),m=f?"a":c;return l<0?`in ${m} ${h}`:`${m} ${h} ago`}function O4(e){return{date:Ec(e,{dateStyle:"medium"}).replace(/\s/g," "),time:Ec(e,{timeStyle:"short"}).replace(/\s/g," ")}}const B4={blockedRelativeUnits:[I.Years,I.Quarters],limitUnitMax:!0};function D4(e){var i,a,s;const t=O4(e.fullDate),r=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(we).join(" "),n=P4(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?N4({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||th(),options:{...B4,...e.relativeOptions}}):void 0;return{everythingString:n,displayString:o||r}}const Ni=ne()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:r}=D4(e);return u`
            <span title=${r}>${t}</span>
        `}}),R4="data-test-id",cr=Ot(class extends gt{constructor(t){super(t);Ln(this,"element");this.element=_4(t,"testId",HTMLElement)}render(t){return this.element.setAttribute(R4,t),Ne}});function _4(e,t,r){H4(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function H4(e,t){if(e.type!==kn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Sa=(e=>(e.Up="up",e.Down="down",e))(Sa||{});const Yn=ne()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:re(),openChange:re()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
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

        ${Bt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${K.interaction} linear transform;
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
            ${Ze};
            ${W(b.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${W(b.pagePrimary)}
            ${wn.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${wn.popupShadowReversed};
        }

        .selected-label-prefix {
            ${O.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ze};
        }

        .select-options .option.selected {
            ${W(b.accentPrimary)}
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
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${T.assign({icon:n.icon})}
                      ${cr("rendered-input-icon")}
                  ></${T}>
              `:"",s=n.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return u`
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
                        <${T.assign({icon:Pd})}
                            class="trigger-icon"
                        ></${T}>
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
        `}}),Oi=ls({tagName:"toniq-error-message",styles:p`
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
        `}});var pt=(e=>(e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled",e))(pt||{});const Je=ne()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType==="disabled"},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e}){function t(n){if(e.linkType==="disabled"){n.preventDefault();return}e.linkType==="route-link"&&jo(n)&&(n.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const r=e.linkType==="new-tab";return u`
            <a
                href=${e.url.toString()}
                ${y("click",t)}
                target=${Fs(r?"_blank":void 0)}
                rel=${Fs(r?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),Ma=360,rh=8;function nh(e){return(e-rh)/2}const ot=wt({"main-image-size":Ma,"secondary-image-size":nh(Ma)}),ut=ne()({tagName:"toniq-featured-flip-card-footer",styles:p`
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
    `,events:{viewMoreButtonClick:re(),flipCardButtonClick:re()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?le(n).map(i=>{const a=n[i];if(!a)return;const s=Xd[i];return u`
                          <${Je.assign({linkType:pt.NewTab,url:a})}>
                              <${T.assign({icon:s})}></${T}>
                          </${Je}>
                      `}).filter(we):"";return u`
            <div class="buttons">
                <${Je.assign({url:e.viewMoreButtonUrl,linkType:pt.RouteLink,scrollToTop:!0})}
                    ${y("click",()=>{t(new r.viewMoreButtonClick)})}
                >
                    <${ge.assign({text:e.viewMoreButtonText,variant:Xr.Outline})}></${ge}>
                </${Je}>
                ${e.flipCardButtonText?u`
                          <${ge.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${y("click",()=>{t(new r.flipCardButtonClick)})}
                          ></${ge}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Wt=ne()({tagName:"toniq-flip-card",events:{flippedChange:re()},styles:p`
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

        ${Bp(".card-face",!1)}

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
            row-gap: ${rh}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Wt} {
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
            ${O.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var m,g,w,k;const a=e.mainImageSize||Ma,s=nh(a);wo({onElement:n,forCssVar:ot["main-image-size"],toValue:`${a}px`}),wo({onElement:n,forCssVar:ot["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(we).join(" "),c=u`
            <h3>${e.cardTitle}</h3>
        `,f=e.imageUrls[0],h=f?u`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,f))||u`
                          <${Tt.assign({imageUrl:f})}></${Tt}>
                      `}
                  </div>
              `:"";return u`
            <${Wt.assign({flipped:t.flipped})}
                ${y(ut.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map($=>{var C;return u`
                                    <div class="secondary-image-wrapper">
                                        ${((C=e.customTemplateCallback)==null?void 0:C.call(e,$))||u`
                                            <${Tt.assign({imageUrl:$})}></${Tt}>
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
                    ${c}
                    <div class="paragraphs">
                        ${(w=e.infoParagraphs)==null?void 0:w.map($=>u`
                                <p>${$}</p>
                            `)}
                    </div>
                    <${ut.assign({viewMoreButtonText:l,flipCardButtonText:(k=e.infoParagraphs)!=null&&k.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${y(ut.events.flipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${ut}>
                </div>
            </${Wt}>
        `}});var ur=(e=>(e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e))(ur||{});const Ee=ne()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level==="h1","toniq-heading-h2":({inputs:e})=>e.level==="h2","toniq-heading-h3":({inputs:e})=>e.level==="h3","toniq-heading-h4":({inputs:e})=>e.level==="h4"},styles:({hostClasses:e})=>p`
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

        h1,
        h2,
        h3,
        h4 {
            ${rs};
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
            `}});function Aa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Aa({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function oh({value:e,allowed:t,blocked:r}){const n=t?Aa({input:e,matcher:t}):!0,o=r?Aa({input:e,matcher:r}):!1;return n&&!o}function Ic(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(oh({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var Ea=(e=>(e.Default="default",e.Outline="outline",e))(Ea||{});const Jn=ne()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:re(),inputBlock:re()},styles:({hostClasses:e})=>p`
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
                border-radius: ${ga};
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
                border-radius: ${ga};
                background-color: ${b.accentTertiary.backgroundColor};
                font: ${O.paragraphFont};
                gap: 4px;
            }

            ${Bt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${T} {
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
                ${Kt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Ze};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Ic({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
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
                    .value=${n}
                    ${y("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)oh({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlock(s)));else{const{filtered:f,blocked:h}=Ic({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=f,t(new r.inputBlock(h))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!e.suffix,u`
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

        ${e["toniq-loading-whole-page"].selector} ${T} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${T} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>u`
            <${T.assign({icon:as,fitContainer:e.size!=="small"})}></${T}>
        `}),qc="...";function F4(e,t,r=7,n=5){let o;e=fr({value:e,min:1,max:t}),r=fr({value:r,min:n,max:t});const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Bi(t-o,t):e>o?Bi(Math.min(s.start,t-o),Math.min(s.end,t)):Bi(1,Math.min(t,o+1));function c(h,m){return l.length+1!==t?m:[h]}const f=l[l.length-1];if(f&&f<t){const h=c(t,[qc,t]);return[...l,...h]}else return l[0]!==1?c(1,[1,qc]).concat(l):l}function Bi(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}const Di=ne()({tagName:"toniq-pagination",styles:p`
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
            ${Ze};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${W(b.accentSecondary)};
        }

        .control:hover {
            ${W(b.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${W(b.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${O.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${W(b.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${W(b.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:re()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${y("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${T.assign({icon:os})}></${T}>
                </button>
                ${F4(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
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
                    <${T.assign({icon:is})}></${T}>
                </button>
            `}}),Ri=b.pageInteraction.foregroundColor,_i=b.accentSecondary.backgroundColor,nt=ne()({tagName:"toniq-list-table",cssVars:{"toniq-list-table-border-width":"1px","toniq-list-table-border-hover-width":"2px","toniq-list-table-header-radius":"16px","toniq-list-table-row-gap":"36px"},events:{pageChange:re()},styles:({cssVars:e})=>p`
        :host {
            display: flex;
            overflow-x: auto;
            border-radius: ${e["toniq-list-table-header-radius"].value};
            border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Firefox */
        :host {
            scrollbar-width: auto;
            scrollbar-color: ${Ri} ${_i};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 2px;
            height: 2px;
        }

        :host::-webkit-scrollbar-track {
            background: ${_i};
            border-radius: 8px;
        }

        :host::-webkit-scrollbar-thumb {
            background-color: ${Ri};
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
            scrollbar-color: ${Ri} ${_i};
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

        .scroll-indicator ${T} {
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
            visibility: hidden;
            pointer-events: none;
            opacity: 0;
            transition: ${K.interaction};
        }

        .loading-wrapper {
            transition: ${K.pretty};
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
    `,stateInitStatic:{canScroll:!1,debouncedResize:u1(()=>Oh(on.FirstThenWait,{milliseconds:30})),rowStyles:{},isPainting:!1,itemsPainted:0},initCallback({inputs:e,state:t,updateState:r}){const n=e.columns.filter(o=>!o.disabled);r({rowStyles:n.reduce((o,i)=>(o[i.key]={width:void 0,left:void 0},o),t.rowStyles)})},renderCallback({inputs:e,state:t,updateState:r,events:n,dispatch:o}){var h;const i=e.columns.filter(m=>!m.disabled),a=[e.rows[0],...e.rows].filter(we);function s(m){m instanceof HTMLElement&&t.debouncedResize(()=>{r({canScroll:m.scrollWidth>m.clientWidth})})}const l=e.pagination&&((h=e.pagination)==null?void 0:h.pageCount)>1?u`
                      <${Di.assign({currentPage:e.pagination.currentPage,pageCount:e.pagination.pageCount})}
                          class=${fe({"blocked-pagination":!!e.showLoading})}
                          ${y(Di.events.pageChange,m=>{o(new n.pageChange(m.detail))})}
                      ></${Di}>
                  `:X;function c(m,g){return u`
                <div
                    class="row-wrapper"
                    ${g>0?y("click",w=>{var k,$;($=(k=m.rowActions)==null?void 0:k.click)==null||$.call(k,{clickEvent:w,dispatch:o})}):X}
                >
                    ${i.map((w,k)=>{var C,S,B,j;const $=m.cells[w.key];return u`
                            <div
                                class=${fe({"row-item":!0,sticky:(C=w.mobile)!=null&&C.sticky?((S=w.mobile)==null?void 0:S.sticky)&&t.canScroll:!1})}
                                style=${p`
                                    left: ${M(`${(B=t.rowStyles[w.key])==null?void 0:B.left}px`)};
                                    min-width: ${k>=i.length-1?M("unset"):M(`${(j=t.rowStyles[w.key])==null?void 0:j.width}px`)};
                                `}
                            >
                                <div
                                    class=${fe({"row-content":!0,hidden:g===0})}
                                    ${ta(ee=>{var ve,lt;const ie=ee.closest(".table-list"),ce=ie==null?void 0:ie.getBoundingClientRect().left,H=ie==null?void 0:ie.querySelectorAll(".row-item")[k],ae=H==null?void 0:H.getBoundingClientRect().left,Te=ee.getBoundingClientRect().width;(!((ve=t.rowStyles[w.key])!=null&&ve.width)||Te>((lt=t.rowStyles[w.key])==null?void 0:lt.width))&&r({rowStyles:{...t.rowStyles,[w.key]:{width:Te,left:ce?ae-ce:ae}}}),r({itemsPainted:t.itemsPainted+1})})}
                                >
                                    ${$}
                                </div>
                                ${xe(g===0,u`
                                        <span class="header">${w.title}</span>
                                    `)}
                            </div>
                        `})}
                </div>
            `}const f=t.itemsPainted<i.length*a.length||!!e.showLoading;return u`
            <div
                class=${fe({"table-wrapper":!0,"can-scroll":t.canScroll})}
            >
                <div
                    class=${fe({"table-list":!0,hidden:f})}
                    ${yr(m=>{s(m.target)})}
                    ${y("scroll",m=>{s(m.target)})}
                    ${y("keydown",m=>{e.showLoading&&(m.preventDefault(),m.stopImmediatePropagation())})}
                >
                    ${a.filter(we).map((m,g)=>u`
                            ${c(m,g)}
                        `)}
                    ${xe(t.canScroll,u`
                            <div class="scroll-indicator">
                                <${T.assign({icon:Ed})}></${T}>
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
        `}});async function V4(e){return navigator.clipboard.writeText(e)}const j4="…";function z4(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${j4}${n}`}function Z4(e){return!(e%1)}function W4(e){return e.letterCount==null?4:Z4(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const R=ne()({tagName:"toniq-middle-ellipsis",events:{copy:re()},cssVars:{"toniq-middle-ellipsis-text-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":b.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":b.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":b.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${K.interaction};
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
            ${de};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Bt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${K.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=W4(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,f=c?z4(i,a):i,h=c?i:"",m=s?Od:l?Nd:void 0,g=m?u`
                  <${T.assign({icon:m})}></${T}>
              `:"",w=u`
            <span title=${h} class="text-content">
                ${xe(!!e.copyOnClick,u`
                        <span
                            class=${fe({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${y("click",k=>{var C,S;const $=(S=(C=k.currentTarget)==null?void 0:C.querySelector)==null?void 0:S.call(C,"a");if(!$)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");$.click()})}
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
                        ${y("click",async()=>{await V4(i),t(new r.copy),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${w} ${g}
                    </button>
                `:u`
                    ${w}
                `:u``}}),Dr=ne()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>p`
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
    `,renderCallback({inputs:e,cssVars:t,host:r}){const n=fr({value:e.percent,max:100,min:0}),o=`${n}%`;return wo({forCssVar:t["toniq-progress-width"],onElement:r,toValue:o}),r.setAttribute("title",`${o} finished`),n?u`
                <div class="progress"></div>
            `:X}}),J=ne()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:re()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ke("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ke("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ke("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ke("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${O.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${K.interaction},
                background-color ${K.interaction},
                opacity ${K.interaction};
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
            transition: ${K.interaction};
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

        ${Bt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${Kt};
        }

        .wrapper.disabled::before {
            ${Kt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:ru()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return U4(e.entries).map(i=>G4(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function U4(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${J.tagName} was given duplicate entry values.`),Object.values(t)}function G4(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
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
    `}function Hi(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,f)=>{const h=e[f+1];return h==null?!0:c<=t&&h>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function Y4(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=J4(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Pc(o,r),o.length>r&&Pc(o,r)),o}function Pc(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function J4(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}const q={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Rr={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"},rn={hot:"rgb(200,0,0)",medium:"orange",cold:"rgb(0,200,0)"};function ar(e){return p`
        background-color: ${M(rn[e])};
        color: ${M(rn[e])};
    `}function K4(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${q.lowerLabelWrapper} .${q.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${q.upperLabelWrapper} .${q.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function X4(e,t=8){const r=K4(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Fi({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function bn(e){return ze(e)&&e.min!==void 0&&e.max!==void 0}function Ia(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${q.range}`);return(t==null?void 0:t.clientWidth)??0}function Vi(e,t,r){return`${r?tf(e):e} ${t}`}function Q4({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function e5({value:e,double:t,min:r,max:n}){return t?bn(e)?{min:fr({value:e.min,min:r,max:Math.min(e.max,n)}),max:fr({value:e.max,min:Math.max(e.min,r),max:n})}:{min:r,max:n}:bn(e)?r:fr({value:e,min:r,max:n})}function t5({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:bn(e)?{min:Hi(n,e.min),max:Hi(n,e.max)}:Hi(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function ji(e,t,r){return r?t[e]||0:e}function r5(e){return{actualLimits:Q4(e),actualValue:e5(e)}}function n5(e,t){var n,o,i;let r=!1;if(bn(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${q.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${q.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${q.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function ih(e,t){const{actualValue:r,actualLimits:n}=r5({...e}),o=Y4(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=t5({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=Ia(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const Ft=16,Lc=p`
    ${Ft}px
`,Nc=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Lc};
    width: ${Lc};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${K.interaction};
    ${W(b.accentPrimary)};
`,Oc=p`
    transform: scale(1.2);
`;function o5(e){return e>100*(2/3)?"cold":e>100*(1/3)?"medium":"hot"}function Zr(e){requestAnimationFrame(()=>{const t=ih(e.instanceInputs,e).elementValue;n5(t,e)&&(e.setAttribute("disabled","true"),Zr(e))})}const D=ne()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:re()},styles:p`
        :host {
            display: block;
        }

        .${M(q.range)}-temp {
            background: linear-gradient(
                90deg,
                ${M(rn.cold)},
                ${M(rn.medium)},
                ${M(rn.hot)}
            );
        }

        .${M(q.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${W(b.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${W(b.accentPrimary)};
        }

        .progress-temp {
            background-color: transparent;
        }

        .${M(q.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${O.boldParagraphFont};
            ${Ze};
        }

        .${M(q.labelPixelMarginWrapper)},
            .${M(q.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${M(q.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${M(q.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Bt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${M(q.lowerSlider)},
        .${M(q.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${M(q.slider)}::-moz-range-thumb {
            ${Nc}
        }

        .${M(q.slider)}.hot::-moz-range-thumb {
            ${ar("hot")}
        }
        .${M(q.slider)}.medium::-moz-range-thumb {
            ${ar("medium")}
        }
        .${M(q.slider)}.cold::-moz-range-thumb {
            ${ar("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${M(q.slider)}::-webkit-slider-thumb {
            ${Nc}
        }

        .${M(q.slider)}.hot::-webkit-slider-thumb {
            ${ar("hot")}
        }
        .${M(q.slider)}.medium::-webkit-slider-thumb {
            ${ar("medium")}
        }
        .${M(q.slider)}.cold::-webkit-slider-thumb {
            ${ar("cold")}
        }

        /* these selectors fail if combined with a comma */
        .${M(q.slider)}::-webkit-slider-thumb:hover {
            ${Oc}
        }

        /* these selectors fail if combined with a comma */
        .${M(q.slider)}::-moz-range-thumb:hover {
            ${Oc}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Zr(e)}),e.addEventListener("keydown",()=>{Zr(e)}),e.addEventListener("keyup",()=>{Zr(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:f,elementLimits:h,rangeWidth:m}=ih({...e},t);if(Zr(t),bn(f))return g(a,f,h);return k(a,f,h);function g($,C,S){const B={left:Vt((m-Ft)*(C.min-S.min)/(S.max-S.min)+Ft/2),right:Vt((m-Ft)*(S.max-C.max)/(S.max-S.min)+Ft/2)},j=Vi($.min,c,l),ee=Vi($.max,c,l);requestAnimationFrame(()=>{const ve=X4(t);ve!==o.labelOverlap&&i({labelOverlap:ve})});const ie=(S.max-C.max)/(S.max-S.min)>.5,ce=Fi({value:C.min,limits:{min:S.min,max:C.max},flip:!0}),H=Fi({value:C.max,limits:{min:C.min,max:S.max},flip:!1}),ae=o.labelOverlap&&ie?o.labelOverlap:0,Te=o.labelOverlap&&!ie?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${yr(()=>{i({rangeWidth:Ia(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${B.left}; right:${B.right}"
                    ></div>
                    <span
                        class="${q.labelOuterWrapper} ${q.lowerLabelWrapper}"
                        style="left: ${B.left}"
                    >
                        <span
                            class="${q.labelPercentMarginWrapper}"
                            style="margin-left: ${ni(ce)}"
                        >
                            <span
                                class="${q.labelPixelMarginWrapper}"
                                style="margin-right: ${Vt(Te)}"
                                ${cr(Rr.lowerLabel)}
                            >
                                ${j}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${q.labelOuterWrapper} ${q.upperLabelWrapper} ${q.rightAlignedLabelWrapper}"
                        style="right: ${B.right}"
                    >
                        <span
                            class="${q.labelPercentMarginWrapper}"
                            style="margin-right: ${ni(H)}"
                        >
                            <span
                                class="${q.labelPixelMarginWrapper}"
                                style="margin-left: ${Vt(ae)}"
                                ${cr(Rr.upperLabel)}
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
                            class="${q.lowerSlider} ${q.slider}"
                            .min=${S.min}
                            .max=${S.max}
                            .value=${C.min}
                            ${y("input",ve=>{const lt=ve.target,qr={...$,min:ji(Number(lt.value),s,l)};w(qr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${q.upperSlider} ${q.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${C.max}
                            ${cr(Rr.slider)}
                            ${y("input",ve=>{const lt=ve.target,qr={...$,max:ji(Number(lt.value),s,l)};w(qr)})}
                        />
                    </div>
                </div>
            `}function w($){i({internalValue:$}),e.disabled||n(new r.valueChange($))}function k($,C,S){const B=Vt((m-Ft)*(S.max-C)/(S.max-S.min)+Ft/2),j=Vi($,c,l),ee=Fi({value:C,limits:S,flip:!1});return u`
                <div
                    class="range ${e.colorTemperature?"range-temp":""}"
                    ${yr(()=>{i({rangeWidth:Ia(t)})})}
                >
                    <div
                        class="progress ${e.colorTemperature?"progress-temp":""}"
                        style="left: 0px; right: ${B}"
                    ></div>
                    <span
                        class="${q.labelOuterWrapper} ${q.rightAlignedLabelWrapper}"
                        style="right: ${B}"
                    >
                        <span
                            class="${q.labelPercentMarginWrapper}"
                            style="margin-right: ${ni(ee)}"
                            ${cr(Rr.label)}
                        >
                            ${j}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${q.slider} ${e.colorTemperature?o5(Math.abs(ee)):""}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${C}
                        ${cr(Rr.slider)}
                        ${y("input",ie=>{const ce=ie.target,H=ji(Number(ce.value),s,l);w(H)})}
                    />
                </div>
            `}}});var ah=(e=>(e.Default="default",e.TextOnly="text-only",e))(ah||{});const zi=ne()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${O.boldParagraphFont};
            ${Ze};
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

            ${W(b.accentSecondary)};
            transition:
                color ${K.interaction},
                background-color ${K.interaction};
        }

        ${Bt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${W(b.accentPrimary)};
        }

        :host(:hover) button {
            ${W(b.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${W(b.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${W(b.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${W(b.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${W(b.pageInteraction)};
            border-color: ${b.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${W(b.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${b.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${W(b.pageInteractionActive)};
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
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${T.assign({icon:e.icon})}
                      class="icon-template"
                  ></${T}>
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
        `}}),nn=ls({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${b.accentPrimary.backgroundColor};
            ${wn.menuShadow};
            background-color: ${b.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
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
            transition: opacity ${K.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${K.pretty} ${K.pretty},
                opacity ${K.pretty};
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
                ${y("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${nn}>${e.tooltipContent}</${nn}>
            </div>
        `}}),Wr=ne()({tagName:"toniq-top-tabs",events:{routeChange:re(),valueChange:re()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>p`
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
                border-bottom-width ${K.interaction},
                border-color ${K.interaction},
                padding-bottom ${K.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${de};
            ${rs};
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

        ${Ut} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${O.boldFont};
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
                      <${T.assign({icon:o.icon})}></${T}>
                  `:"",s=o.label?u`
                      <${Ut.assign({text:o.label})}></${Ut}>
                  `:"";return u`
                <li
                    ${c1("tab")}
                    role="presentation"
                    class=${fe({selected:i})}
                >
                    <${Je.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:pt.RouteLink})}
                        class="tab ${fe({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${y("click",c=>{var f;i||jo(c)&&((f=o.link)!=null&&f.route&&t(new r.routeChange(o.link.route)),t(new r.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Je}>
                </li>
            `});return u`
            <ul role="tablist">
                ${n}
                <li></li>
            </ul>
        `}}),sh=V({title:"Data",parent:void 0}),No=ne()({tagName:"toniq-icon-book-viewer",styles:p`
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
        `}}),Qo=Object.values($t).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),i5=Object.keys(Qo).sort();function bs(e){return{controlType:_.Dropdown,initValue:e,options:["None",...i5]}}const lh={"CSS color":{controlType:_.Color,initValue:""},[String(d["toniq-icon-stroke-color"].name)]:{controlType:_.Color,initValue:""},[String(d["toniq-icon-fill-color"].name)]:{controlType:_.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:_.Color,initValue:""},[String(d["toniq-icon-stroke-width"].name)]:{controlType:_.Number,initValue:2}};function uo(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),Q(n,"number")&&(n=Pa({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const a5=V({title:"Social Urls",parent:sh,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${No.assign({icon:n})}></${No}>
                    `}})}Object.entries(Xd).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),oe=V({title:"Elements",parent:void 0}),s5=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:p`
            ${Ut} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],l5=V({title:Ut.tagName,parent:oe,elementExamplesCallback({defineExample:e}){s5.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:p`
                    .bold {
                        ${O.boldFont}
                    }

                    ${t.extraStyle??p``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Ut.assign({text:t.text})}
                            ${y("click",()=>{n({isBold:!r.isBold})})}
                            class=${fe({bold:r.isBold})}
                        ></${Ut}>
                        More text
                    `}})})}}),c5=V({parent:oe,title:ge.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{variant:Xr.Secondary}},{name:"Outline",inputs:{variant:Xr.Outline}},{name:"Text Only",inputs:{variant:Xr.TextOnly}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
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
                    `}})})}}),Bc=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Ie} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,u5=V({parent:oe,title:Ie.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Bc,renderCallback(){return u`
                    <${Ie.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:$t["core-24"].map(t=>{const r=p`
                                padding: 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${Ie}>
                    <${Ie.assign({enableAutomaticCycling:!0,templates:$t["core-24"].map(t=>{const r=p`
                                padding: 100px 24px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${Ie}>
                    <${Ie.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:$t["core-24"].map(t=>{const r=zh({min:0,max:150}),n=p`
                                padding: 100px ${r}px;
                                border: 1px solid ${b.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${n}></${T}>
                            `})})}></${Ie}>
                `}}),e({title:"banner style",styles:Bc,renderCallback(){const t=p`
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
                    <${Ie.assign({enableAutomaticCycling:!0,variant:wa.Banner,templates:$t["core-24"].map(r=>u`
                                <div style=${t}>
                                    <${T.assign({icon:r})}></${T}>
                                </div>
                            `)})}></${Ie}>
                    <${Ie.assign({enableAutomaticCycling:!0,variant:wa.Banner,templates:[$t["core-24"][0]].map(r=>u`
                                <div style=${t}>
                                    <${T.assign({icon:r})}></${T}>
                                </div>
                            `)})}
                        class=${Ie.hostClasses["toniq-carousel-banner-variant"]}
                    ></${Ie}>
                `}})}});function d5(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:_.Color,initValue:""}]);return Object.fromEntries(t)}function h5(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(we);return M(t.join(`
`))}const f5=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Zi=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],p5=V({parent:oe,title:vt.tagName,controls:{Text:{controlType:_.Text,initValue:"Text"},...d5(vt)},elementExamplesCallback({defineExample:e}){f5.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Zi.map(r=>!!r.inputs.checked),extraEntryStatuses:Zi.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:p`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Zi.map((i,a)=>{const s=(i.extraEntries??[]).map((c,f)=>{var h;return u`
                                    <${vt.assign({...t.inputs,...an(i.inputs,["checked"]),checked:!!((h=r.extraEntryStatuses[a])!=null&&h[f]),text:c})}
                                        ${y(vt.events.checkedChange,()=>{const m=[...r.extraEntryStatuses];m[a][f]=!m[a][f],n({extraEntryStatuses:m})})}
                                    ></${vt}>
                                `}),l=h5(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${vt.assign({...t.inputs,...an(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${y(vt.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${vt}>
                                ${s}
                            </div>
                        `})}})})}}),m5=V({parent:oe,title:Ti.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:At}},{inputs:{icon:At}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:At},template:u`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{variant:ba.Default}},{title:"secondary style",inputs:{variant:ba.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${Ti.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${xe(!!o.template,o.template)}</${Ti}>
                    `)}})})}}),g5=V({title:Ni.tagName,parent:oe,descriptionParagraphs:["Display a date and / or time in a consistent manner."],elementExamplesCallback({defineExample:e}){const t=th();[{title:"date and time",inputs:{fullDate:t,parts:{date:!0,time:!0}}},{title:"date only",inputs:{fullDate:t,parts:{date:!0,time:!1}}},{title:"time only",inputs:{fullDate:t,parts:{date:!1,time:!0}}},{title:"relative past date",inputs:{fullDate:Li(t,{weeks:-1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative future date",inputs:{fullDate:Li(t,{months:1}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0}}},{title:"relative forced unit",inputs:{fullDate:Li(t,{days:-2}),parts:{date:!0,time:!0},relativeOptions:{tryRelative:!0,blockedRelativeUnits:[I.Days,I.Hours]}}}].forEach(n=>{e({title:n.title,renderCallback(){return u`
                        <${Ni.assign({...n.inputs})}></${Ni}>
                    `}})})}}),Kn=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],w5=[{title:"default"},{title:"transparent background",customStyle:p`
            ${ns.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],Dc=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],v5=V({title:Yn.tagName,parent:oe,controls:{Selected:{controlType:_.Dropdown,initValue:Kn[0].label,options:Kn.map(e=>e.label)},Direction:{controlType:_.Dropdown,initValue:"Down",options:Kc(Sa)},Icon:bs(Id.name),Prefix:{controlType:_.Text,initValue:"Sort by: "},"Force open":{controlType:_.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){w5.forEach(t=>{e({title:t.title,stateInitStatic:{selected:Dc.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Dc.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return u`
                            <${Yn.assign({...t.inputs,...i.inputs,options:Kn,value:r.selected[a]??Kn.find(l=>l.label===o.Selected),icon:Qo[o.Icon],selectedLabelPrefix:o.Prefix,direction:Sa[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${y(Yn.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Yn}>
                        `})}})})}}),b5=[{title:"empty",content:""},{title:"with text",content:"Error: there was an error"}],y5=V({title:Oi.tagName,parent:oe,elementExamplesCallback({defineExample:e}){b5.forEach(t=>{e({title:t.title,renderCallback(){return u`
                        <${Oi}>${t.content}</${Oi}>
                    `}})})}}),Rc="/toniq-labs-design-system";function ch(...e){const r=[globalThis.location.pathname.startsWith(Rc)?Rc:"",...e].filter(we);return sn(...r)}const sr=Array(30).fill(ch("/toniq-labs-logo.png")),hr=["Hello there.","There is stuff here."],Xn=hr.concat(Array(30).fill(hr)),k5=V({title:te.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({infoParagraphs:Xn,imageUrls:sr,socialUrls:og,cardTitle:"Featured Stuff",viewButtonTitle:"Stuff"})}></${te}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:sr,cardTitle:"Featured Stuff",infoParagraphs:void 0})}></${te}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Xn,viewMoreUrl:"https://toniqlabs.com"})}
                        ${y(te.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${te}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Xn})}></${te}>
                `}}),e({title:"with custom height",styles:p`
                ${te} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:[],cardTitle:"Featured Stuff",infoParagraphs:Xn})}></${te}>
                `}}),e({title:"smaller",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:sr,infoParagraphs:hr,cardTitle:"Featured Stuff"})}></${te}>
                `}}),e({title:"with social URLs",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:sr,infoParagraphs:hr,cardTitle:"Featured Stuff",socialUrls:{discord:"https://toniqlabs.com",instagram:"https://toniqlabs.com",telegram:"https://toniqlabs.com"}})}></${te}>
                `}}),e({title:"with custom template",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:sr,infoParagraphs:hr,cardTitle:"With custom Template",customTemplateCallback(t){return u`
                                <${Tt.assign({imageUrl:t})}></${Tt}>
                            `}})}></${te}>
                `}}),e({title:"with custom template statuses",styles:p`
                ${te} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${te.assign({imageUrls:sr.map((t,r)=>r%2?"/invalid-image.png":t),infoParagraphs:hr,cardTitle:"With custom Template Statuses",customTemplateCallback(t){return u`
                                <${Tt.assign({imageUrl:t,_debugLoadDelay:t.includes("invalid-image")?void 0:{milliseconds:1/0}})}>
                                    <div
                                        slot=${$r.Loading}
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
                                        <${T.assign({icon:as,fitContainer:!0})}
                                            style=${p`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${T}>
                                    </div>
                                    <div
                                        slot=${$r.Error}
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
                                        <${T.assign({icon:xd,fitContainer:!0})}
                                            style=${p`
                                                ${L["vira-icon-fill-color"].name}: transparent;
                                            `}
                                        ></${T}>
                                    </div>
                                </${Tt}>
                            `}})}></${te}>
                `}})}}),$5=V({title:Wt.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${Wt.assign({flipped:t.flipped})}
                        ${y(Wt.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Wt}>
                `}})}}),x5=V({title:Ee.tagName,parent:oe,elementExamplesCallback({defineExample:e}){Xc(ur).forEach(t=>{e({title:t,renderCallback(){return u`
                        <${Ee.assign({level:t})}>Some text</${Ee}>
                    `}})}),e({title:"can be restyled",styles:p`
                ${Ee}:first-of-type {
                    ${O.h4Font};
                }
            `,renderCallback(){return u`
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
            `,renderCallback(){return u`
                    <${Ee.assign({level:ur.H3})}>
                        title longer than bounds
                    </${Ee}>
                    <${Ee.assign({level:ur.H3})}>
                        title longer than bounds
                    </${Ee}>
                `}})}}),T5=V({parent:oe,title:Je.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{linkType:pt.ReplacePage}},{title:"new tab",inputs:{linkType:pt.NewTab}},{title:"hover styles",inputs:{withHoverStyles:!0,linkType:pt.NewTab}},{title:"route link",inputs:{linkType:pt.RouteLink}},{title:"link disabled",inputs:{linkType:pt.Disabled}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${Je.assign({url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Je}>
                    `}})})}}),C5=V({title:T.tagName,parent:oe,controls:lh,elementExamplesCallback({defineExample:e}){const t=[{icon:Hd},{icon:_d},{icon:Ld},{icon:At},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${T.assign({icon:n.icon})}
                            style=${uo(r)}
                        ></${T}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=p`
                    ${d["toniq-icon-fill-color"].name}: orange;
                `;return $t["third-party-brands"].map(o=>u`
                        <${T.assign({icon:o})}
                            style=${uo(r)}
                        ></${T}>
                        <${T.assign({icon:o})}
                            style=${n}
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
            `,renderCallback({controls:r}){return u`
                    <${T.assign({icon:At,fitContainer:!0})}
                        style=${uo(r)}
                    ></${T}>
                `}})}}),S5=V({title:Jn.tagName,parent:oe,controls:{"External value":{controlType:_.Text,initValue:""},Placeholder:{controlType:_.Text,initValue:"placeholder"},Icon:bs(Dd.name),Suffix:{controlType:_.Text,initValue:"ICP"},"No browser helps":{controlType:_.Checkbox,initValue:!1},"Blocked characters":{controlType:_.Text,initValue:""},"Exclusive characters":{controlType:_.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{variant:Ea.Default}},{title:"outline",inputs:{variant:Ea.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${Jn.assign({...n.inputs,value:o["External value"]||i.value,icon:Qo[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${y(Jn.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Jn}>
                        `))}})})}});function ys({entries:e,columns:t,createRowObject:r}){const n=Object.fromEntries(t.map(i=>[i.key,""]));return{rows:e.map((i,a)=>{const s=r(i,a);if(!it(Object.keys(n).sort(),Object.keys(s.cells).sort()))throw console.error("broken list table row",{cells:s.cells,columns:n}),new Error("List table row keys does not match expect column keys.");return s}),columns:t}}const uh="https://cdn-bitcoin.bioniq.io",M5=sn(uh,"content"),A5=sn(uh,"thumbnail"),Ur={thumbnail(e){return sn(A5,e)},content(e){return sn(M5,e)}},E5=Array(5).fill({imageUrl:Ur.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),price:u`
        <div
            style=${p`
                display: flex;
                gap: 8px;
            `}
        >
            <${T.assign({icon:ss})}></${T}>
            <span>0.00042753</span>
        </div>
    `,from:u`
        <${R.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
        ></${R}>
    `,to:u`
        <${R.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
            style=${p`
                color: ${b.pageInteraction.foregroundColor};
            `}
            ${y("click",e=>{e.stopImmediatePropagation()})}
        ></${R}>
    `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:u`
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
                    ${O.boldParagraphFont};
                    color: ${b.pageInteraction.foregroundColor};
                    cursor: pointer;
                `}
            >
                Cancel
            </button>
        </div>
    `}),I5=[{imageUrl:Ur.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Payment Sent",price:u`
            <div
                style=${p`
                    display: flex;
                    gap: 8px;
                `}
            >
                <${T.assign({icon:ss})}></${T}>
                <span>0.00042753</span>
            </div>
        `,from:u`
            <${R.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${R}>
        `,to:u`
            <${R.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${R}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:u`
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
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:Ur.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Transfer",price:u`
            -
        `,from:u`
            <${R.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${R}>
        `,to:u`
            <${R.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${R}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:u`
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
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:Ur.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Accept Offer",price:u`
            -
        `,from:u`
            <${R.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${R}>
        `,to:u`
            <${R.assign({text:"TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V",externalLink:"https://toniqlabs.com"})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.stopImmediatePropagation()})}
            ></${R}>
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:u`
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
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `},{imageUrl:Ur.thumbnail("b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0"),type:"Cancel Listing",price:u`
            -
        `,from:u`
            <${R.assign({text:"QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U",copyOnClick:!0})}
                style=${p`
                    color: ${b.pageInteraction.foregroundColor};
                `}
                ${y("click",e=>{e.preventDefault(),e.stopImmediatePropagation()})}
            ></${R}>
        `,to:u`
            -
        `,date:"April 3, 2024 (1:57pm)",time:"2h ago",action:u`
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
                        ${O.boldParagraphFont};
                        color: ${b.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `}],q5=[],Wi=ys({entries:E5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"price",title:"PRICE",mobile:{sticky:!0}},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:u`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),_c=ys({entries:I5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:u`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),P5=ys({entries:q5,columns:[{key:"image",title:"",mobile:{sticky:!0}},{key:"type",title:"TYPE",mobile:{sticky:!0}},{key:"price",title:"PRICE"},{key:"from",title:"FROM"},{key:"to",title:"TO"},{key:"date",title:"DATE"},{key:"time",title:"TIME"},{key:"action",title:""}],createRowObject:e=>({cells:{image:u`
                    <img
                        style=${p`
                            width: 24px;
                            height: auto;
                        `}
                        src=${e.imageUrl}
                    />
                `,type:e.type,price:e.price,from:e.from,to:e.to,date:e.date,time:e.time,action:e.action},rowActions:{click(){alert("This could be useful on opening specific inscription or transaction")}}})}),L5=[{title:"basic"},{title:"with pagination",inputs:{pagination:{currentPage:1,pageCount:10}}},{title:"squished horizontally",styles:p`
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
            ${nt} {
                width: 100%;
                flex-grow: 1;
            }
        `},{title:"show loading",styles:p`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,inputs:{showLoading:!0,pagination:{currentPage:3,pageCount:10}}}],Hc=ls({tagName:"toniq-test-resize",stateInitStatic:{message:"",cleanup:void 0},initCallback({updateState:e,state:t}){if(!t.cleanup){const r=window.setInterval(()=>{t.message?e({message:""}):e({message:"April 3, 2024 (1:57pm)"})},1e3);e({cleanup(){window.clearInterval(r)}})}},cleanupCallback({state:e,updateState:t}){var r;(r=e.cleanup)==null||r.call(e),t({cleanup:void 0})},renderCallback({state:e}){return e.message}}),N5=V({title:nt.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"takes time to load",stateInitStatic:{tableInputs:{...P5,showLoading:!0,pagination:{currentPage:1,pageCount:5}}},renderCallback({state:t,updateState:r}){return setTimeout(()=>{r({tableInputs:{...t.tableInputs,..._c,showLoading:!1}})},5e3),u`
                    <${nt.assign(t.tableInputs)}
                        ${y(nt.events.pageChange,n=>{r({tableInputs:{...t.tableInputs,..._c,pagination:{currentPage:2,pageCount:5}}})})}
                    ></${nt}>
                `}}),L5.forEach(t=>{var r,n;e({title:t.title,styles:p`
                    ${M(t.styles)}
                `,stateInitStatic:{currentPage:(n=(r=t.inputs)==null?void 0:r.pagination)==null?void 0:n.currentPage},renderCallback({state:o,updateState:i}){var s;const a=(s=t.inputs)!=null&&s.pagination&&o.currentPage?{pagination:{...t.inputs.pagination,currentPage:o.currentPage}}:{};return u`
                        <${nt.assign({...Wi,...t.inputs,...a})}
                            ${y(nt.events.pageChange,l=>{i({currentPage:l.detail})})}
                        ></${nt}>
                    `}})}),e({title:"changing child size",styles:p`
                :host {
                    width: 600px;
                }
            `,stateInitStatic:{tableInputs:{...Wi,rows:Wi.rows.map(t=>({...t,cells:{...t.cells,date:u`
                                    <${Hc}></${Hc}>
                                `}}))}},renderCallback({state:t}){return u`
                    <${nt.assign(t.tableInputs)}></${nt}>
                `}})}}),O5=V({title:tn.tagName,parent:oe,elementExamplesCallback({defineExample:e}){[{title:"small",inputs:{size:en.Small}},{title:"large",inputs:{size:en.Large}},{title:"whole page",inputs:{size:en.WholePage},styles:p`
                    :host {
                        width: 500px;
                    }
                `}].forEach(r=>{e({title:r.title,styles:r.styles??p``,renderCallback(){return u`
                        <${tn.assign(r.inputs)}></${tn}>
                    `}})})}}),B5=V({title:R.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${R.assign({text:"Long string instead of text"})}></${R}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${R.assign({text:"Short text"})}></${R}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${R.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${R}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${R.assign({text:"Long text that you can copy",copyOnClick:!0})}></${R}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${R} {
                    ${R.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${R.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${R.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${R.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${R.assign({text:"long text with custom colors",copyOnClick:!0})}></${R}>
                `}})}}),D5=V({title:Dr.tagName,parent:oe,elementExamplesCallback({defineExample:e}){[{title:"halfway",percent:50},{title:"nothing",percent:0},{title:"complete",percent:100},{title:"custom height",styles:p`
                ${Dr} {
                    height: 32px;
                }
                :`,percent:75},{title:"custom width",styles:p`
                ${Dr} {
                    width: 200%;
                }
                :`,percent:75}].forEach(r=>{e({title:r.title,styles:r.styles,renderCallback(){return u`
                        <${Dr.assign({percent:r.percent})}></${Dr}>
                    `}})})}}),_r=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],Be={basic:_r,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},..._r.slice(1)],disabled:[{..._r[0],disabled:!0},..._r.slice(1)],noLabels:Th(_r,e=>({...e,label:void 0}))},R5=V({title:J.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:Be.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${J.assign({entries:Be.basic,value:t.selectedValue})}
                        ${y(J.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${J}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:Be.basic[0].value},styles:p`
                ${J} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${J.assign({entries:Be.basic,value:t.selectedValue})}
                        ${y(J.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${J}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:Be.longText[0].value},styles:p`
                ${J} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${J.assign({entries:Be.longText,value:t.selectedValue})}
                        ${y(J.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${J}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:Be.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${J.assign({entries:Be.noLabels,value:t.selectedValue})}
                        ${y(J.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${J}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:Be.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${J.assign({entries:Be.disabled,value:t.selectedValue})}
                        ${y(J.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${J}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:Be.basic[0].value},styles:p`
                ${J} {
                    ${J.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${J.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${J.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${J.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${J.assign({entries:Be.basic,value:t.selectedValue})}
                        ${y(J.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${J}>
                `}})}}),rt=p`
    ${D} {
        width: 300px;
    }
`,Ui={min:10,max:50},_5=V({title:D.tagName,parent:oe,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,...Ui})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({double:!0,value:t.value,min:0,max:100})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,...Ui,suffix:"ICP"})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,min:-100,max:100})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${rt}

                ${D} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,...Ui})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${rt}

                ${D} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({double:!0,value:t.value,min:0,max:100})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${D}>
                `}}),e({title:"Color Temperature",stateInitStatic:{value:9},styles:p`
                ${rt}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${D.assign({value:t.value,colorTemperature:!0,min:0,max:100})}
                        ${y(D.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${D}>
                `}})}}),H5=[{title:"default",inputs:{}},{title:"text only",inputs:{variant:ah.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Fc=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],F5=V({title:zi.tagName,parent:oe,controls:{Text:{controlType:_.Text,initValue:"Toggle Button"},Icon:bs(Bd.name)},elementExamplesCallback({defineExample:e}){H5.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Fc.map(r=>!!r.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Fc.map((i,a)=>u`
                            <${zi.assign({...t.inputs,toggled:r.buttonStates[a],icon:Qo[o.Icon],text:o.Text,...an(i.inputs,["toggled"])})}
                                ${y("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${zi}>
                        `)}})})}}),V5=V({parent:oe,title:co.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:p`
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
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),j5=V({parent:oe,title:nn.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${co.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${nn}>This is a tooltip.</${nn}>
                `}})}}),z5=[V5,j5],Z5=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:p`
            :host {
                width: 500px;
            }

            ${Wr} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:p``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}},{title:"with icon and disabled",extraStyles:p``,inputs:{value:"hi",tabs:[{label:"hi",value:0},{label:"",value:1,icon:ma},{label:"label here",value:2,icon:ma},{label:"",value:3,icon:At,disabled:!0},{label:"16px icon",value:4,icon:At},{label:"disabled",value:5,disabled:!0}]}},{title:"with routes",inputs:{value:0,tabs:[{label:"hi",value:0,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"bye",value:1,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"hello",value:2,link:{url:"https://toniqlabs.com",route:{paths:[]}}},{label:"so long",value:3,link:{url:"https://toniqlabs.com",route:{paths:[]}}}]}}],W5=V({title:Wr.tagName,parent:oe,elementExamplesCallback({defineExample:e}){Z5.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:p`
                    ${t.extraStyles??p``}
                `,renderCallback({state:r,updateState:n}){const o=t.inputs.tabs.map(i=>typeof i=="string"?{label:i,value:i}:i);return u`
                        <${Wr.assign({tabs:o,value:r.selectedTab})}
                            ${y(Wr.events.valueChange,i=>{n({selectedTab:i.detail})})}
                        ></${Wr}>
                    `}})})}}),dh=V({title:"Icons",parent:void 0,controls:lh}),U5=Object.entries($t).map(([e,t])=>V({title:e,parent:dh,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${No.assign({icon:n})}
                                    style=${uo(o)}
                                ></${No}>
                            `}}))}}));function hh(e){const t=G5(e),r=ye(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return le(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function G5(e){typeof e!="string"&&(e=String(e));const n=`{"${Zc(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const ei=V({title:"Styles",parent:void 0}),Y5=p`
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
`;function J5(e,t,r){const n=hh(W(r));return e({title:t,styles:Y5,renderCallback(){return u`
                <div class="color-example" style=${W(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const K5=V({title:"Colors",parent:ei,elementExamplesCallback({defineExample:e}){le(b).map(t=>J5(e,t,b[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),X5=p`
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
`;function Q5(e,t,r){const n=hh(r);return e({title:t,styles:X5,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${le(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const ev=V({title:"Fonts",parent:ei,elementExamplesCallback({defineExample:e}){le(O).map(t=>{const r=O[t];return Q5(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),tv=V({title:"Shadows",parent:ei,elementExamplesCallback({defineExample:e}){kh(wn).forEach(([t,r])=>{e({title:t,styles:p`
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
                        `}})})}}),rv=[oe,dh,ei,sh],nv=[...U5,...z5,a5,l5,c5,u5,p5,m5,K5,g5,v5,y5,k5,$5,ev,x5,T5,C5,S5,O5,B5,D5,R5,tv,_5,F5,W5,N5].sort((e,t)=>e.title.localeCompare(t.title)),ov=[...rv,...nv];Vo({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ki} {
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
    `,renderCallback(){return u`
            <${ki.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:ov,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${at.NavHeader}>
                    <img src=${ch("/logo.png")} />
                    <p>Design System</p>
                </div>
            </${ki}>
        `}});
