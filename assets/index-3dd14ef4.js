var Q0=Object.defineProperty;var K0=(t,e,r)=>e in t?Q0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Jt=(t,e,r)=>(K0(t,typeof e!="symbol"?e+"":e,r),r),Qt=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var xe=(t,e,r)=>(Qt(t,e,"read from private field"),r?r.call(t):e.get(t)),He=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Kt=(t,e,r,n)=>(Qt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);var pt=(t,e,r)=>(Qt(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var te;(function(t){t.Chapter="chapter",t.Page="page",t.Root="root"})(te||(te={}));function Re({title:t,parent:e}){if(!t)throw new Error("Cannot have an element-book chapter with an empty title.");return{type:te.Chapter,title:t,parent:e}}function Mo(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const es={capitalizeFirstLetter:!1};function ts(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function rs(t,e){return e.capitalizeFirstLetter?ts(t):t}function ns(t,e=es){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return rs(n,e)}function fn(t){return t!==t.toUpperCase()}function We(t){return t.split("").reduce((r,n,o,s)=>{const i=o>0?s[o-1]:"",a=o<s.length-1?s[o+1]:"",l=fn(i)||fn(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const os=["january","february","march","april","may","june","july","august","september","october","november","december"];os.map(t=>t.slice(0,3));function Fr(t){return t?t instanceof Error?t.message:String(t):""}function Ur(t){return t instanceof Error?t:new Error(Fr(t))}function xr(t){return!!t&&typeof t=="object"}const pn="Failed to compare objects using JSON.stringify";function mn(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Gr(t,e){try{return t===e?!0:xr(t)&&xr(e)?mn(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(n=>Gr(t[n],e[n])):!1:mn(t,e)}catch(r){const n=Ur(r);throw n.message.startsWith(pn)||(n.message=`${pn}: ${n.message}`),n}}const ss=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function jt(t,e){return t?ss.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ao(t,e){return t&&e.every(r=>jt(t,r))}function ye(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function is(t){return Array.isArray(t)?"array":typeof t}function So(t,e){return is(t)===e}function V(t,e){let r=!1;const n=ye(t).reduce((o,s)=>{const i=e(s,t[s],t);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(ye(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function Yr(){let t,e,r=!1;const n=new Promise((o,s)=>{t=i=>(r=!0,o(i)),e=i=>{r=!0,s(i)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Yr.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function as(t,e){try{return ls(t,e),!0}catch{return!1}}function ls(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Eo(t,e){return jt(t,"type")&&t.type===e}function cs(){return{entry:{type:te.Root,title:"element book tree root",parent:void 0},breadcrumb:"",children:{}}}function Cr(t){return Mo(t).toLowerCase().replaceAll(/\s/g,"-")}function ds(t){const e=cs();return t.forEach(r=>{const n=hs(r,e),o=Cr(r.title);if(o in n.children)throw new Error(`Cannot create duplicate entry '${o}' in parent '${n.breadcrumb}'.`);const s={children:{},breadcrumb:o,entry:r};n.children[o]=s}),e}function hs(t,e){return ot(t).reverse().reduce((o,s)=>{const i=o.children[s];if(!i)throw new Error(`Failed to find parent ElementBookEntry by name of '${s}' in entry '${o.entry.title}'`);return i},e)}function ot(t,e){const r=Cr(t.title);return t.parent?[Cr(t.parent.title),...ot(t.parent,!1)].concat(e?[r]:[]):e?[r]:[]}function Mr(t,e){if(!as(t,1))return e;const r=t[0],n=e.children[r];if(n)return Mr(t.slice(1),n)}function qr(t){if(!t.title)throw new Error("Cannot have an element-book page with an empty title.");const e={type:te.Page,...t},r=ot(e,!0),n=new Set;return t.examples.forEach(o=>{const s=`Failed to define example '${r.concat(o.title).join(" > ")}'`;if(n.has(o.title))throw new Error(`${s}: example title '${o.title}' is already being used.`);if(!o.title)throw new Error(`${s}: example title is missing or empty.`);n.add(o.title)}),e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},st=t=>(...e)=>({_$litDirective$:t,values:e});let Ht=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var er;const Et=window,Le=Et.trustedTypes,gn=Le?Le.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ar="$lit$",ae=`lit$${(Math.random()+"").slice(9)}$`,_o="?"+ae,us=`<${_o}>`,Te=document,Xe=()=>Te.createComment(""),Je=t=>t===null||typeof t!="object"&&typeof t!="function",Bo=Array.isArray,fs=t=>Bo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",tr=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vn=/-->/g,wn=/>/g,me=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kn=/'/g,bn=/"/g,Io=/^(?:script|style|textarea|title)$/i,ps=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),ms=ps(1),re=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),yn=new WeakMap,_e=Te.createTreeWalker(Te,129,null,!1),gs=(t,e)=>{const r=t.length-1,n=[];let o,s=e===2?"<svg>":"",i=De;for(let l=0;l<r;l++){const c=t[l];let h,d,u=-1,v=0;for(;v<c.length&&(i.lastIndex=v,d=i.exec(c),d!==null);)v=i.lastIndex,i===De?d[1]==="!--"?i=vn:d[1]!==void 0?i=wn:d[2]!==void 0?(Io.test(d[2])&&(o=RegExp("</"+d[2],"g")),i=me):d[3]!==void 0&&(i=me):i===me?d[0]===">"?(i=o??De,u=-1):d[1]===void 0?u=-2:(u=i.lastIndex-d[2].length,h=d[1],i=d[3]===void 0?me:d[3]==='"'?bn:kn):i===bn||i===kn?i=me:i===vn||i===wn?i=De:(i=me,o=void 0);const w=i===me&&t[l+1].startsWith("/>")?" ":"";s+=i===De?c+us:u>=0?(n.push(h),c.slice(0,u)+Ar+c.slice(u)+ae+w):c+ae+(u===-2?(n.push(void 0),l):w)}const a=s+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gn!==void 0?gn.createHTML(a):a,n]};class Qe{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=e.length-1,l=this.parts,[c,h]=gs(e,r);if(this.el=Qe.createElement(c,n),_e.currentNode=this.el.content,r===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(o=_e.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const u of o.getAttributeNames())if(u.endsWith(Ar)||u.startsWith(ae)){const v=h[i++];if(d.push(u),v!==void 0){const w=o.getAttribute(v.toLowerCase()+Ar).split(ae),y=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:y[2],strings:w,ctor:y[1]==="."?ws:y[1]==="?"?bs:y[1]==="@"?ys:Dt})}else l.push({type:6,index:s})}for(const u of d)o.removeAttribute(u)}if(Io.test(o.tagName)){const d=o.textContent.split(ae),u=d.length-1;if(u>0){o.textContent=Le?Le.emptyScript:"";for(let v=0;v<u;v++)o.append(d[v],Xe()),_e.nextNode(),l.push({type:2,index:++s});o.append(d[u],Xe())}}}else if(o.nodeType===8)if(o.data===_o)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(ae,d+1))!==-1;)l.push({type:7,index:s}),d+=ae.length-1}s++}}static createElement(e,r){const n=Te.createElement("template");return n.innerHTML=e,n}}function Pe(t,e,r=t,n){var o,s,i,a;if(e===re)return e;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Je(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,n)),n!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(e=Pe(t,l._$AS(t,e.values),l,n)),e}let vs=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:Te).importNode(n,!0);_e.currentNode=s;let i=_e.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new it(i,i.nextSibling,this,e):c.type===1?h=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(h=new $s(i,this,e)),this._$AV.push(h),c=o[++l]}a!==(c==null?void 0:c.index)&&(i=_e.nextNode(),a++)}return s}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};class it{constructor(e,r,n,o){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Pe(this,e,r),Je(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):fs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==E&&Je(this._$AH)?this._$AA.nextSibling.data=e:this.$(Te.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Qe.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const i=new vs(s,this),a=i.u(this.options);i.v(n),this.$(a),this._$AH=i}}_$AC(e){let r=yn.get(e.strings);return r===void 0&&yn.set(e.strings,r=new Qe(e)),r}T(e){Bo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of e)o===r.length?r.push(n=new it(this.k(Xe()),this.k(Xe()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class Dt{constructor(e,r,n,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)e=Pe(this,e,r,0),i=!Je(e)||e!==this._$AH&&e!==re,i&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Pe(this,a[n+l],r,l),c===re&&(c=this._$AH[l]),i||(i=!Je(c)||c!==this._$AH[l]),c===E?e=E:e!==E&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ws extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}const ks=Le?Le.emptyScript:"";class bs extends Dt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,ks):this.element.removeAttribute(this.name)}}class ys extends Dt{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){var n;if((e=(n=Pe(this,e,r,0))!==null&&n!==void 0?n:E)===re)return;const o=this._$AH,s=e===E&&o!==E||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==E&&(o===E||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class $s{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}}const $n=Et.litHtmlPolyfillSupport;$n==null||$n(Qe,it),((er=Et.litHtmlVersions)!==null&&er!==void 0?er:Et.litHtmlVersions=[]).push("2.7.3");const xs=(t,e,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let i=s._$litPart$;if(i===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=i=new it(e.insertBefore(Xe(),a),a,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=st(class extends Ht{constructor(t){var e;if(super(t),t.type!==Wr.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(e)}const o=t.element.classList;this.it.forEach(s=>{s in e||(o.remove(s),this.it.delete(s))});for(const s in e){const i=!!e[s];i===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(i?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return re}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t=class extends Ht{constructor(e){if(super(e),this.et=E,e.type!==Wr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this.ft=void 0,this.et=e;if(e===re)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};_t.directiveName="unsafeHTML",_t.resultType=1;const Cs=st(_t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Sr=class extends _t{};Sr.directiveName="unsafeSVG",Sr.resultType=2;const Ms=st(Sr);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function As(t,e,r){return t?e():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,Xr=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jr=Symbol(),xn=new WeakMap;let Lo=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Xr&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=xn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&xn.set(r,e))}return e}toString(){return this.cssText}};const L=t=>new Lo(typeof t=="string"?t:t+"",void 0,Jr),Oe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new Lo(r,t,Jr)},Ss=(t,e)=>{Xr?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=At.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},Cn=Xr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return L(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rr;const Bt=window,Mn=Bt.trustedTypes,Es=Mn?Mn.emptyScript:"",An=Bt.reactiveElementPolyfillSupport,Er={toAttribute(t,e){switch(e){case Boolean:t=t?Es:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},To=(t,e)=>e!==t&&(e==e||t==t),nr={attribute:!0,type:String,converter:Er,reflect:!1,hasChanged:To};let Ae=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,r=nr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(o){const s=this[e];this[r]=o,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||nr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(Cn(o))}else e!==void 0&&r.push(Cn(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ss(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=nr){var o;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Er).toAttribute(r,n.type);this._$El=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(e,r){var n;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Er;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(e,r,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||To)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ae.finalized=!0,Ae.elementProperties=new Map,Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},An==null||An({ReactiveElement:Ae}),((rr=Bt.reactiveElementVersions)!==null&&rr!==void 0?rr:Bt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var or,sr;class Fe extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xs(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return re}}Fe.finalized=!0,Fe._$litElement$=!0,(or=globalThis.litElementHydrateSupport)===null||or===void 0||or.call(globalThis,{LitElement:Fe});const Sn=globalThis.litElementPolyfillSupport;Sn==null||Sn({LitElement:Fe});((sr=globalThis.litElementVersions)!==null&&sr!==void 0?sr:globalThis.litElementVersions=[]).push("3.3.2");var _s=globalThis&&globalThis.__esDecorate||function(t,e,r,n,o,s){function i(S){if(S!==void 0&&typeof S!="function")throw new TypeError("Function expected");return S}for(var a=n.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!e&&t?n.static?t:t.prototype:null,h=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,u=!1,v=r.length-1;v>=0;v--){var w={};for(var y in n)w[y]=y==="access"?{}:n[y];for(var y in n.access)w.access[y]=n.access[y];w.addInitializer=function(S){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(i(S||null))};var M=(0,r[v])(a==="accessor"?{get:h.get,set:h.set}:h[l],w);if(a==="accessor"){if(M===void 0)continue;if(M===null||typeof M!="object")throw new TypeError("Object expected");(d=i(M.get))&&(h.get=d),(d=i(M.set))&&(h.set=d),(d=i(M.init))&&o.push(d)}else(d=i(M))&&(a==="field"?o.push(d):h[l]=d)}c&&Object.defineProperty(c,n.name,h),u=!0},Bs=globalThis&&globalThis.__runInitializers||function(t,e,r){for(var n=arguments.length>2,o=0;o<e.length;o++)r=n?e[o].call(t,r):e[o].call(t);return n?r:void 0},Is=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Ls(){function t(e,r){return e}return t}let Po=(()=>{let t=[Ls()],e,r=[],n;return n=class extends Fe{},Is(n,"DeclarativeElement"),_s(null,e={value:n},t,{kind:"class",name:n.name},null,r),n=e.value,Bs(n,r),n})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Ro(t){return(e,r)=>r!==void 0?((n,o,s)=>{o.constructor.createProperty(s,n)})(t,e,r):Ts(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir;((ir=window.HTMLSlotElement)===null||ir===void 0?void 0:ir.prototype.assignedElements)!=null;const _r=Symbol("this-is-an-element-vir-declarative-element"),Qr=Symbol("key for ignoring inputs not having been set yet"),Ps={[Qr]:!0};function Zo(t,e){const r=t.instanceState;ye(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);Ro()(t,n),"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),No(t)}function No(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function jo(t,e){return Rs(t,e),t.element}function Rs(t,e){if(t.type!==Wr.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function C(t,e){return e?En(t,e):En(void 0,t)}const En=st(class extends Ht{constructor(t){super(t),this.element=jo(t,"assign")}render(t,e){return Zs(t,this.element,e),re}});function Zs(t,e,r){Zo(e,r)}function Ho(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof Po?!0:Ho(r)}function Do(t,e){return`${t}-${We(e)}`}function Ns(t,e){return e?V(e,r=>L(`--${Do(t,String(r))}`)):{}}function js(t,e){return t?V(t,(r,n)=>{const o=e[r];return L(`var(${o}, ${n})`)}):{}}class Hs extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Kr(){return t=>{var e;return e=class extends Hs{constructor(r){super(t,r),this._type=t}},e.type=t,e}}function Ds(){return Kr()}function zs(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,r)=>{const n=Kr()(r);return e[r]=n,e},{}):{}}var $=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)},X=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(t,r):o?o.value=r:e.set(t,r),r},Z,ge,le,ke,Ee,Se,O,Ue,Br,Ir,Ge;const zo=Symbol("element-vir-async-state-marker"),H=Symbol("not set");class Vs{constructor(e,r){Z.add(this),ge.set(this,H),le.set(this,H),ke.set(this,H),Ee.set(this,[]),Se.set(this,void 0),O.set(this,Yr()),this.asyncMarkerSymbol=zo,this.addSettleListener(r),this.resetValue(e)}resetValue(e){e instanceof Vo&&(e=e.initialValue),$(this,Z,"m",Ge).call(this),e!==H&&(e instanceof Promise?this.setValue({newPromise:e}):this.setValue({resolvedValue:e}))}setValue(e){if("createPromise"in e){if($(this,ge,"f")===H||!Gr(e.trigger,$(this,ge,"f"))){X(this,ge,e.trigger,"f");const r=e.createPromise();$(this,Z,"m",Br).call(this,r)}}else"newPromise"in e?($(this,ge,"f"),$(this,Z,"m",Br).call(this,e.newPromise),$(this,Z,"m",Ue).call(this)):"resolvedValue"in e?$(this,Z,"m",Ir).call(this,e.resolvedValue):"forceUpdate"in e?(X(this,ge,H,"f"),X(this,le,H,"f"),$(this,O,"f").isSettled()||$(this,O,"f").reject("Canceled by force update"),$(this,Z,"m",Ge).call(this),$(this,Z,"m",Ue).call(this)):this.resetValue(e)}getValue(){if($(this,O,"f").isSettled()){if($(this,ke,"f")!==H)return $(this,ke,"f");if($(this,le,"f")===H)throw new Error("Promise says it has settled but resolution value was not set!");return $(this,le,"f")}else return $(this,O,"f").promise}addSettleListener(e){$(this,Ee,"f").push(e)}removeSettleListener(e){X(this,Ee,$(this,Ee,"f").filter(r=>r!==e),"f")}}ge=new WeakMap,le=new WeakMap,ke=new WeakMap,Ee=new WeakMap,Se=new WeakMap,O=new WeakMap,Z=new WeakSet,Ue=function(){$(this,Ee,"f").forEach(e=>{e(this)})},Br=function(e){e!==$(this,Se,"f")&&(X(this,le,H,"f"),X(this,ke,H,"f"),X(this,Se,e,"f"),$(this,O,"f").isSettled()&&$(this,Z,"m",Ge).call(this),e.then(r=>{$(this,Se,"f")===e&&$(this,Z,"m",Ir).call(this,r)}).catch(r=>{$(this,Se,"f")===e&&(X(this,ke,Ur(r),"f"),$(this,O,"f").promise.catch(()=>{}),$(this,O,"f").reject(r),$(this,Z,"m",Ue).call(this))}))},Ir=function(e){e!==$(this,le,"f")&&(X(this,ke,H,"f"),X(this,le,e,"f"),$(this,O,"f").isSettled()&&$(this,Z,"m",Ge).call(this),$(this,O,"f").resolve(e),$(this,Z,"m",Ue).call(this))},Ge=function(){X(this,O,Yr(),"f")};class Vo{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=zo}}function _n(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function Bn(t,e){const r=t;function n(s,i){e&&_n(i,t,t.tagName);const a=t.asyncStateHandlerMap[i];return a?a.getValue():r[i]}return new Proxy({},{get:n,set:(s,i,a)=>{e&&_n(i,t,t.tagName),s[i]=a;const l=t.asyncStateHandlerMap[i];if(a instanceof Vo)if(l)l.resetValue(a);else{const c=new Vs(a,h=>{t[i]=h.getValue()});t.asyncStateHandlerMap[i]=c}else l?l.setValue(a):r[i]=a;return!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return n(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Os(t,e){return e?V(e,r=>Do(t,String(r))):{}}function Fs({hostClassNames:t,cssVarNames:e,cssVarValues:r}){return{hostClassSelectors:V(t,(n,o)=>L(`:host(.${o})`)),hostClassNames:V(t,(n,o)=>L(o)),cssVarNames:e,cssVarValues:r}}function Us({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:o}){e&&ye(e).forEach(s=>{const i=e[s],a=r[s];typeof i=="function"&&(i({state:n,inputs:o})?t.classList.add(a):t.classList.remove(a))})}function Gs(t,e){function r(o){ye(o).forEach(s=>{const i=o[s];t.instanceState[s]=i})}return{dispatch:o=>t.dispatchEvent(o),updateState:r,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Ys=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function zt(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const r=zs(t.events),n=Os(t.tagName,t.hostClasses),o=Ns(t.tagName,t.cssVars),s=js(t.cssVars,o),i={...Ps,...t.options},a=typeof t.styles=="function"?t.styles(Fs({hostClassNames:n,cssVarNames:o,cssVarValues:s})):t.styles||Oe``,l=t.renderCallback,c=t.inputsDefiner??(d=>d),h=(e=class extends Po{createRenderParams(){return Gs(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){No(this)}render(){try{Ho(this)&&!this.haveInputsBeenSet&&!i[Qr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${C.name}" directive on it. If no inputs are intended, use "${zt.name}" to define ${t.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(d));const u=l(d);return Us({host:d.host,hostClassesInit:t.hostClasses,hostClassNames:n,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},u}catch(d){const u=Ur(d);throw u.message=`Failed to render '${t.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const d=this.createRenderParams();t.initCallback(d)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const d=this.createRenderParams();t.cleanupCallback(d)}this.initCalled=!1}assignInputs(d){Zo(this,d)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap={},this.instanceInputs=Bn(this,!1),this.instanceState=Bn(this,!0);const d=t.stateInit||{};ye(d).forEach(u=>{Ro()(this,u),this.instanceState[u]=d[u]}),this.definition=h}},Ys(e,"anonymousClass"),e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=r,e.renderCallback=l,e.defineInputs=c,e.hostClasses=n,e.cssVarNames=o,e.stateInit=t.stateInit,e.cssVarValues=o,e);return Object.defineProperties(h,{[_r]:{value:!0,writable:!1},name:{value:ns(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof h,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,h),h}function en(t){return e=>zt({...e,options:{...e.options,[Qr]:!1},inputsDefiner:t})}function ee(t,e){return qs(t,e)}const qs=st(class extends Ht{constructor(t){super(t),this.element=jo(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),re}});function Ke(t,e,r){return As(t,()=>e,()=>r)}function Lr(t){if("templateString"in t)return t.templateString;const{strings:e,values:r}=t;if((!e||!(e!=null&&e.length))&&(!r||!r.length))return"";const n=[...r||[],""],s=(e??[""]).map((i,a)=>{const l=Ws(i,n[a]);return`${i}${l}`});return Mo(s.join(""))}function Ws(t,e){return e._$litType$!=null||e._$litDirective$!=null?Lr(e):Array.isArray(e)?e.map(n=>Lr(n)).join(""):t.endsWith("=")?`"${e}"`:e}function Oo(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),en()(r(n))),defineElementNoInputs:n=>(e(n),zt(r(n)))}}function Xs(t,e){return t.filter((r,n)=>!e.includes(n))}function Fo(t){return t.filter(e=>Ao(e,["tagName",_r])&&!!e.tagName&&!!e[_r])}const Uo=new WeakMap;function Js(t,e){var o;const r=Fo(e);return(o=Go(Uo,[t,...r]).value)==null?void 0:o.template}function Qs(t,e,r){const n=Fo(e);return qo(Uo,[t,...n],r)}function Go(t,e,r=0){const{currentTemplateAndNested:n,reason:o}=Yo(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Go(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Yo(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=t.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function qo(t,e,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:i}=Yo(t,e,n);if(!s)return{result:!1,reason:i};const a=o??{nested:void 0,template:void 0};if(o||t.set(s,a),n===e.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),qo(l,e,r,n+1)}function Wo(t,e,r){return{name:t,check:e,transform:r}}const Ks=new WeakMap;function Xo(t,e,r){const n=Js(t,e),o=n??r();if(!n){const i=Qs(t,e,o);if(i.result)Ks.set(t,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const s=Xs(e,o.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Jo(t,e,r,n){const o=[],s=[],i=[];return t.forEach((l,c)=>{var M;const h=o.length-1,d=o[h],u=c-1,v=e[u];let w;n&&n(l),typeof d=="string"&&(w=(M=r.find(S=>S.check(d,l,v)))==null?void 0:M.transform,w&&(o[h]=d+w(v)+l,i.push(u))),w||o.push(l);const y=t.raw[c];w?s[h]=s[h]+w(v)+y:s.push(y)}),{templateStrings:Object.assign([],o,{raw:s}),valueIndexDeletions:i}}function Qo(t){return jt(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const ei=[Wo("tag name css selector interpolation",(t,e,r)=>Qo(r),t=>t.tagName)];function ti(t,e){return Jo(t,e,ei)}function g(t,...e){const r=Xo(t,e,()=>ti(t,e));return Oe(r.strings,...r.values)}const ri=[Wo("tag name interpolation",(t,e,r)=>{const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),o=Qo(r);if(n&&!o)throw console.error({lastNewString:t,currentLitString:e,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},t=>t.tagName)];function ni(t){}function oi(t){return Jo(t.strings,t.values,ri,ni)}function b(t,...e){const r=ms(t,...e),n=Xo(t,e,()=>oi(r));return{...r,strings:n.strings,values:n.values}}const si=0;function ii(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==si)}class at extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class In extends at{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Vt="locationchange";let Ln=!1;const ai=window.history.pushState;function Tn(...t){const e=ai.apply(window.history,t);return window.dispatchEvent(new Event(Vt)),e}const li=window.history.replaceState;function Pn(...t){const e=li.apply(window.history,t);return window.dispatchEvent(new Event(Vt)),e}function ci(){if(!Ln){if(window.history.pushState===Tn)throw new In("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===Pn)throw new In("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");Ln=!0,window.history.pushState=Tn,window.history.replaceState=Pn,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Vt))})}}function di(t){return Array.from(t.entries()).reduce((e,r)=>(e[r[0]]=r[1],e),{})}function hi(t){const e=Object.entries(t).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(e)}function ui(t){const r=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(i=>!!i),o=window.location.search?di(new URLSearchParams(window.location.search)):void 0,s=window.location.hash||void 0;return{paths:r,search:o,hash:s}}class fi extends at{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Ko(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const Rn=6;function Zn(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>Rn)throw new fi(`Route sanitization depth has exceed the max of ${Rn} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(Ko(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(o=>{o(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class ar extends at{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function pi(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new ar(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new ar(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new ar(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function mi(t,e,r,n=!1){const o=e0(t,e,r);n?window.history.replaceState(void 0,"",o):window.history.pushState(void 0,"",o)}function e0(t,e,r=""){var n;if(!r&&e!=null)throw new at("Route base regexp was defined but routeBase string was not provided.");const o=gi(e)?`/${r}`:"",s=t.search?hi(t.search).toString():"",i=s?`?${s}`:"",a=!((n=t.hash)===null||n===void 0)&&n.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${o}/${t.paths.join("/")}${i}${l}`}function gi(t){return!!(t&&window.location.pathname.match(t))}function vi(t={}){var e;pi(t),ci();const r=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),n=r?new RegExp(`^\\/${t.routeBase}`):void 0;let o=!1;const s={listeners:new Set,initParams:t,sanitizeFullRoute:i=>{const a={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(i,a=!1,l=!1)=>{const c=s.getCurrentRawRoutes(),h={...c,...i},d=s.sanitizeFullRoute(h);if(!(!l&&Ko(c,d)))return mi(d,n,r,a)},createRoutesUrl:i=>e0(i,n,r),getCurrentRawRoutes:()=>ui(n),addRouteListener:(i,a)=>{if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new at(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return s.listeners.add(a),o||(window.addEventListener(Vt,()=>Zn(s)),o=!0),i&&Zn(s,a),a},hasRouteListener:i=>s.listeners.has(i),removeRouteListener:i=>s.listeners.delete(i),sanitizationDepth:0};return s}function wi(t){return vi({routeBase:t})}const ki={hash:void 0,paths:[],search:void 0};function Ot(t){if(xr(t))return V(t,(r,n)=>{if(!So(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(We(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,i=r.startsWith("--")?L(r):r.startsWith("-")?Oe`-${L(r)}`:Oe`--${L(r)}`;return{name:i,value:Oe`var(${i}, ${L(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Ot.name}' function.`)}function bi({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}const R=Ot({"element-book-nav-hover-background-color":"grey","element-book-nav-hover-foreground-color":"grey","element-book-nav-active-background-color":"grey","element-book-nav-active-foreground-color":"grey","element-book-nav-selected-background-color":"grey","element-book-nav-selected-foreground-color":"grey","element-book-accent-icon-color":"grey"}),yi={nav:{hover:{background:R["element-book-nav-hover-background-color"],foreground:R["element-book-nav-hover-foreground-color"]},active:{background:R["element-book-nav-active-background-color"],foreground:R["element-book-nav-active-foreground-color"]},selected:{background:R["element-book-nav-selected-background-color"],foreground:R["element-book-nav-selected-foreground-color"]}},accent:{icon:R["element-book-accent-icon-color"]}};function Nn(t,e){t0(t,e,yi)}function Tr(t){return jt(t,"_$cssResult$")}function jn(t){return Ao(t,["name","value","default"])&&So(t.default,"string")&&Tr(t.name)&&Tr(t.value)}function t0(t,e,r){Object.entries(e).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Tr(o)){if(!jn(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);bi({forCssVar:s,onElement:t,toValue:String(o)})}else{if(jn(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);t0(t,o,s)}})}function _(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(i=>[i]));let n=e[0].length,o=e[0].map((i,a)=>e.map(l=>l[a])),s=t.map(i=>o.map(a=>{let l=0;if(!Array.isArray(i)){for(let c of a)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(a[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(i=>i[0]):s}function lt(t){return ce(t)==="string"}function ce(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function It(t,e){t=+t,e=+e;let r=(Math.floor(t)+"").length;if(e>r)return+t.toFixed(e-r);{let n=10**(r-e);return Math.round(t/n)*n}}function r0(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=t.match(e);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),s.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function n0(t){return t[t.length-1]}function Lt(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function o0(t,e,r){return(r-t)/(e-t)}function tn(t,e,r){return Lt(e[0],e[1],o0(t[0],t[1],r))}function s0(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var $i=Object.freeze({__proto__:null,isString:lt,type:ce,toPrecision:It,parseFunction:r0,last:n0,interpolate:Lt,interpolateInv:o0,mapRange:tn,parseCoordGrammar:s0,multiplyMatrices:_});class xi{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const he=new xi;var ne={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const J={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Pr(t){return Array.isArray(t)?t:J[t]}function Tt(t,e,r,n={}){if(t=Pr(t),e=Pr(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let o={W1:t,W2:e,XYZ:r,options:n};if(he.run("chromatic-adaptation-start",o),o.M||(o.W1===J.D65&&o.W2===J.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===J.D50&&o.W2===J.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),he.run("chromatic-adaptation-end",o),o.M)return _(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ci=75e-6;var nt,Rr,Ie,Nt,i0;const W=class{constructor(e){He(this,nt);He(this,Nt);He(this,Ie,void 0);var o,s,i;this.id=e.id,this.name=e.name,this.base=e.base?W.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;this.coords=r;let n=e.white??this.base.white??"D65";this.white=Pr(n),this.formats=e.formats??{};for(let a in this.formats){let l=this.formats[a];l.type||(l.type="function"),l.name||(l.name=a)}e.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:e.cssId},Object.defineProperty(this,"cssId",{value:e.cssId})):(s=this.formats)!=null&&s.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=e.referred,Kt(this,Ie,pt(this,Nt,i0).call(this).reverse()),he.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Ci}={}){if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((o,s)=>{let i=n[s];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[a,l]=i.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var e,r;return((r=(e=this.formats.functions)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=pt(this,nt,Rr).call(this,e),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=pt(this,nt,Rr).call(this,r),r):null}to(e,r){if(arguments.length===1&&([e,r]=[e.space,e.coords]),e=W.get(e),this===e)return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=xe(this,Ie),o=xe(e,Ie),s,i;for(let a=0;a<n.length&&n[a]===o[a];a++)s=n[a],i=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let a=n.length-1;a>i;a--)r=n[a].toBase(r);for(let a=i+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(e,r){return arguments.length===1&&([e,r]=[e.space,e.coords]),e=W.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;e.push((o==null?void 0:o.min)??0)}return e}static get all(){return[...new Set(Object.values(W.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof W)return e;if(ce(e)==="string"){let o=W.registry[e.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${e}"`);return o}if(r.length)return W.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=ce(e),o,s;if(n==="string"?e.includes(".")?[o,s]=e.split("."):[o,s]=[,e]:Array.isArray(e)?[o,s]=e:(o=e.space,s=e.coordId),o=W.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=ce(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=W.get(o);let i=s.toLowerCase(),a=0;for(let c in o.coords){let h=o.coords[c];if(c.toLowerCase()===i||((l=h.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:a,...h};a++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let k=W;nt=new WeakSet,Rr=function(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=s0(e.coords);let r=Object.entries(this.coords).map(([n,o],s)=>{let i=e.coordGrammar[s][0],a=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:a,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((s,i)=>{let{fromRange:a,toRange:l,suffix:c}=r[i];return a&&l&&(s=tn(a,l,s)),s=It(s,o),c&&(s+=c),s})}return e},Ie=new WeakMap,Nt=new WeakSet,i0=function(){let e=[this];for(let r=this;r=r.base;)e.push(r);return e},Jt(k,"registry",{}),Jt(k,"DEFAULT_FORMAT",{type:"functions",name:"color"});var U=new k({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class N extends k{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=U),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=_(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Tt(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Tt(this.base.white,this.white,r),_(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function a0(t){var r,n,o,s,i;let e={str:(r=String(t))==null?void 0:r.trim()};if(he.run("parse-start",e),e.color)return e.color;if(e.parsed=r0(e.str),e.parsed){let a=e.parsed.name;if(a==="color"){let l=e.parsed.args.shift(),c=e.parsed.rawArgs.indexOf("/")>0?e.parsed.args.pop():1;for(let d of k.all){let u=d.getFormat("color");if(u&&(l===u.id||(n=u.ids)!=null&&n.includes(l))){let v=Object.keys(d.coords).length,w=Array(v).fill(0);return w.forEach((y,M)=>w[M]=e.parsed.args[M]||0),{spaceId:d.id,coords:w,alpha:c}}}let h="";if(l in k.registry){let d=(i=(s=(o=k.registry[l].formats)==null?void 0:o.functions)==null?void 0:s.color)==null?void 0:i.id;d&&(h=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${l}). `+(h||"Missing a plugin?"))}else for(let l of k.all){let c=l.getFormat(a);if(c&&c.type==="function"){let h=1;(c.lastAlpha||n0(e.parsed.args).alpha)&&(h=e.parsed.args.pop());let d=e.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([u,v],w)=>{var q;let y=c.coordGrammar[w],M=(q=d[w])==null?void 0:q.type;if(y=y.find(j=>j==M),!y){let j=v.name||u;throw new TypeError(`${M} not allowed for ${j} in ${a}()`)}let S=y.range;M==="<percentage>"&&(S||(S=[0,1]));let Y=v.range||v.refRange;S&&Y&&(d[w]=tn(S,Y,d[w]))}),{spaceId:l.id,coords:d,alpha:h}}}}else for(let a of k.all)for(let l in a.formats){let c=a.formats[l];if(c.type!=="custom"||c.test&&!c.test(e.str))continue;let h=c.parse(e.str);if(h)return h.alpha??(h.alpha=1),h}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function A(t){if(!t)throw new TypeError("Empty color reference");lt(t)&&(t=a0(t));let e=t.space||t.spaceId;return e instanceof k||(t.space=k.get(e)),t.alpha===void 0&&(t.alpha=1),t}function ct(t,e){return e=k.get(e),e.from(t)}function G(t,e){let{space:r,index:n}=k.resolveCoord(e,t.space);return ct(t,r)[n]}function l0(t,e,r){return e=k.get(e),t.coords=e.to(t.space,r),t}function ue(t,e,r){if(t=A(t),arguments.length===2&&ce(arguments[1])==="object"){let n=arguments[1];for(let o in n)ue(t,o,n[o])}else{typeof r=="function"&&(r=r(G(t,e)));let{space:n,index:o}=k.resolveCoord(e,t.space),s=ct(t,n);s[o]=r,l0(t,n,s)}return t}var rn=new k({id:"xyz-d50",name:"XYZ D50",white:"D50",base:U,fromBase:t=>Tt(U.white,"D50",t),toBase:t=>Tt("D50",U.white,t),formats:{color:{}}});const Mi=216/24389,Hn=24/116,mt=24389/27;let lr=J.D50;var z=new k({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:lr,base:rn,fromBase(t){let r=t.map((n,o)=>n/lr[o]).map(n=>n>Mi?Math.cbrt(n):(mt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Hn?Math.pow(e[0],3):(116*e[0]-16)/mt,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/mt,e[2]>Hn?Math.pow(e[2],3):(116*e[2]-16)/mt].map((n,o)=>n*lr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ft(t){return(t%360+360)%360}function Ai(t,e){if(t==="raw")return e;let[r,n]=e.map(Ft),o=n-r;return t==="increasing"?o<0&&(n+=360):t==="decreasing"?o>0&&(r+=360):t==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):t==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var et=new k({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:z,fromBase(t){let[e,r,n]=t,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ft(o)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Dn=25**7,Pt=Math.PI,zn=180/Pt,Ce=Pt/180;function Zr(t,e,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,i,a]=z.from(t),l=et.from(z,[s,i,a])[1],[c,h,d]=z.from(e),u=et.from(z,[c,h,d])[1];l<0&&(l=0),u<0&&(u=0);let w=((l+u)/2)**7,y=.5*(1-Math.sqrt(w/(w+Dn))),M=(1+y)*i,S=(1+y)*h,Y=Math.sqrt(M**2+a**2),q=Math.sqrt(S**2+d**2),j=M===0&&a===0?0:Math.atan2(a,M),ie=S===0&&d===0?0:Math.atan2(d,S);j<0&&(j+=2*Pt),ie<0&&(ie+=2*Pt),j*=zn,ie*=zn;let ht=c-s,ut=q-Y,Q=ie-j,Ze=j+ie,an=Math.abs(Q),Ne;Y*q===0?Ne=0:an<=180?Ne=Q:Q>180?Ne=Q-360:Q<-180?Ne=Q+360:console.log("the unthinkable has happened");let ln=2*Math.sqrt(q*Y)*Math.sin(Ne*Ce/2),Y0=(s+c)/2,Xt=(Y+q)/2,cn=Math.pow(Xt,7),oe;Y*q===0?oe=Ze:an<=180?oe=Ze/2:Ze<360?oe=(Ze+360)/2:oe=(Ze-360)/2;let dn=(Y0-50)**2,q0=1+.015*dn/Math.sqrt(20+dn),hn=1+.045*Xt,je=1;je-=.17*Math.cos((oe-30)*Ce),je+=.24*Math.cos(2*oe*Ce),je+=.32*Math.cos((3*oe+6)*Ce),je-=.2*Math.cos((4*oe-63)*Ce);let un=1+.015*Xt*je,W0=30*Math.exp(-1*((oe-275)/25)**2),X0=2*Math.sqrt(cn/(cn+Dn)),J0=-1*Math.sin(2*W0*Ce)*X0,ft=(ht/(r*q0))**2;return ft+=(ut/(n*hn))**2,ft+=(ln/(o*un))**2,ft+=J0*(ut/(n*hn))*(ln/(o*un)),Math.sqrt(ft)}const Si=75e-6;function Ye(t,e=t.space,{epsilon:r=Si}={}){t=A(t),e=k.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function tt(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function fe(t,{method:e=ne.gamut_mapping,space:r=t.space}={}){if(lt(arguments[1])&&(r=arguments[1]),r=k.get(r),Ye(t,r,{epsilon:0}))return t;let n=F(t,r);if(e!=="clip"&&!Ye(t,r)){let o=fe(tt(n),{method:"clip",space:r});if(Zr(t,o)>2){let s=k.resolveCoord(e),i=s.space,a=s.id,l=F(n,i),h=(s.range||s.refRange)[0],d=.01,u=h,v=G(l,a);for(;v-u>d;){let w=tt(l);w=fe(w,{space:r,method:"clip"}),Zr(l,w)-2<d?u=G(l,a):v=G(l,a),ue(l,a,(u+v)/2)}n=F(l,r)}else n=o}if(e==="clip"||!Ye(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,i)=>{let[a,l]=o[i];return a!==void 0&&(s=Math.max(a,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==t.space&&(n=F(n,t.space)),t.coords=n.coords,t}fe.returns="color";function F(t,e,{inGamut:r}={}){t=A(t),e=k.get(e);let n=e.from(t),o={space:e,coords:n,alpha:t.alpha};return r&&(o=fe(o)),o}F.returns="color";function Rt(t,{precision:e=ne.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;t=A(t);let i=r;r=t.space.getFormat(r)??t.space.getFormat("default")??k.DEFAULT_FORMAT,n||(n=r.toGamut);let a=t.coords;if(a=a.map(c=>c||0),n&&!Ye(t)&&(a=fe(tt(t),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=e,r.serialize)s=r.serialize(a,t.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,e):e!==null&&(a=a.map(v=>It(v,e)));let h=[...a];if(c==="color"){let v=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;h.unshift(v)}let d=t.alpha;e!==null&&(d=It(d,e));let u=t.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";s=`${c}(${h.join(r.commas?", ":" ")}${u})`}return s}const Ei=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],_i=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ut=new N({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Ei,fromXYZ_M:_i,formats:{color:{}}});const gt=1.09929682680944,Vn=.018053968510807;var c0=new N({id:"rec2020",name:"REC.2020",base:Ut,toBase(t){return t.map(function(e){return e<Vn*4.5?e/4.5:Math.pow((e+gt-1)/gt,1/.45)})},fromBase(t){return t.map(function(e){return e>=Vn?gt*Math.pow(e,.45)-(gt-1):4.5*e})},formats:{color:{}}});const Bi=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ii=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var d0=new N({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Bi,fromXYZ_M:Ii});const Li=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ti=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var h0=new N({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Li,fromXYZ_M:Ti,formats:{color:{}}}),On={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Fn=Array(3).fill("<percentage> | <number>[0, 255]"),Un=Array(3).fill("<number>[0, 255]");var rt=new N({id:"srgb",name:"sRGB",base:h0,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Fn},rgb_number:{name:"rgb",commas:!0,coords:Un,noAlpha:!0},color:{},rgba:{coords:Fn,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Un},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(s=>Math.round(s*255));let n=r&&t.every(s=>s%17===0);return"#"+t.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=On.black,e.alpha=0):e.coords=On[t],e.coords)return e}}}}),u0=new N({id:"p3",name:"P3",base:d0,fromBase:rt.fromBase,toBase:rt.toBase,formats:{color:{id:"display-p3"}}});ne.display_space=rt;if(typeof CSS<"u"&&CSS.supports)for(let t of[z,c0,u0]){let e=t.getMinCoords(),n=Rt({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){ne.display_space=t;break}}function Pi(t,{space:e=ne.display_space,...r}={}){let n=Rt(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ne.display_space)n=new String(n),n.color=t;else{let o=F(t,e);n=new String(Rt(o,r)),n.color=o}return n}function f0(t,e,r="lab"){r=k.get(r);let n=r.from(t),o=r.from(e);return Math.sqrt(n.reduce((s,i,a)=>{let l=o[a];return isNaN(i)||isNaN(l)?s:s+(l-i)**2},0))}function Ri(t,e){return t=A(t),e=A(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function pe(t){return G(t,[U,"y"])}function p0(t,e){ue(t,[U,"y"],e)}function Zi(t){Object.defineProperty(t.prototype,"luminance",{get(){return pe(this)},set(e){p0(this,e)}})}var Ni=Object.freeze({__proto__:null,getLuminance:pe,setLuminance:p0,register:Zi});function ji(t,e){t=A(t),e=A(e);let r=Math.max(pe(t),0),n=Math.max(pe(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Hi=.56,Di=.57,zi=.62,Vi=.65,Gn=.022,Oi=1.414,Fi=.1,Ui=5e-4,Gi=1.14,Yn=.027,Yi=1.14;function qn(t){return t>=Gn?t:t+(Gn-t)**Oi}function Me(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function qi(t,e){e=A(e),t=A(t);let r,n,o,s,i,a;e=F(e,"srgb"),[s,i,a]=e.coords;let l=Me(s)*.2126729+Me(i)*.7151522+Me(a)*.072175;t=F(t,"srgb"),[s,i,a]=t.coords;let c=Me(s)*.2126729+Me(i)*.7151522+Me(a)*.072175,h=qn(l),d=qn(c),u=d>h;return Math.abs(d-h)<Ui?n=0:u?(r=d**Hi-h**Di,n=r*Gi):(r=d**Vi-h**zi,n=r*Yi),Math.abs(n)<Fi?o=0:n>0?o=n-Yn:o=n+Yn,o*100}function Wi(t,e){t=A(t),e=A(e);let r=Math.max(pe(t),0),n=Math.max(pe(e),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Xi=5e4;function Ji(t,e){t=A(t),e=A(e);let r=Math.max(pe(t),0),n=Math.max(pe(e),0);return n>r&&([r,n]=[n,r]),n===0?Xi:(r-n)/n}function Qi(t,e){t=A(t),e=A(e);let r=G(t,[z,"l"]),n=G(e,[z,"l"]);return Math.abs(r-n)}const Ki=216/24389,Wn=24/116,vt=24389/27;let cr=J.D65;var Nr=new k({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:cr,base:U,fromBase(t){let r=t.map((n,o)=>n/cr[o]).map(n=>n>Ki?Math.cbrt(n):(vt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Wn?Math.pow(e[0],3):(116*e[0]-16)/vt,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/vt,e[2]>Wn?Math.pow(e[2],3):(116*e[2]-16)/vt].map((n,o)=>n*cr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const dr=Math.pow(5,.5)*.5+.5;function ea(t,e){t=A(t),e=A(e);let r=G(t,[Nr,"l"]),n=G(e,[Nr,"l"]),o=Math.abs(Math.pow(r,dr)-Math.pow(n,dr)),s=Math.pow(o,1/dr)*Math.SQRT2-40;return s<7.5?0:s}var St=Object.freeze({__proto__:null,contrastWCAG21:ji,contrastAPCA:qi,contrastMichelson:Wi,contrastWeber:Ji,contrastLstar:Qi,contrastDeltaPhi:ea});function ta(t,e,r={}){lt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(St).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}t=A(t),e=A(e);for(let s in St)if("contrast"+n.toLowerCase()===s.toLowerCase())return St[s](t,e,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function m0(t){let[e,r,n]=ct(t,U),o=e+15*r+3*n;return[4*e/o,9*r/o]}function g0(t){let[e,r,n]=ct(t,U),o=e+r+n;return[e/o,r/o]}function ra(t){Object.defineProperty(t.prototype,"uv",{get(){return m0(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return g0(this)}})}var na=Object.freeze({__proto__:null,uv:m0,xy:g0,register:ra});function oa(t,e){return f0(t,e,"lab")}const sa=Math.PI,Xn=sa/180;function ia(t,e,{l:r=2,c:n=1}={}){let[o,s,i]=z.from(t),[,a,l]=et.from(z,[o,s,i]),[c,h,d]=z.from(e),u=et.from(z,[c,h,d])[1];a<0&&(a=0),u<0&&(u=0);let v=o-c,w=a-u,y=s-h,M=i-d,S=y**2+M**2-w**2,Y=.511;o>=16&&(Y=.040975*o/(1+.01765*o));let q=.0638*a/(1+.0131*a)+.638,j;Number.isNaN(l)&&(l=0),l>=164&&l<=345?j=.56+Math.abs(.2*Math.cos((l+168)*Xn)):j=.36+Math.abs(.4*Math.cos((l+35)*Xn));let ie=Math.pow(a,4),ht=Math.sqrt(ie/(ie+1900)),ut=q*(ht*j+1-ht),Q=(v/(r*Y))**2;return Q+=(w/(n*q))**2,Q+=S/ut**2,Math.sqrt(Q)}const Jn=203;var nn=new k({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:U,fromBase(t){return t.map(e=>Math.max(e*Jn,0))},toBase(t){return t.map(e=>Math.max(e/Jn,0))}});const wt=1.15,kt=.66,Qn=2610/2**14,aa=2**14/2610,Kn=3424/2**12,eo=2413/2**7,to=2392/2**7,la=1.7*2523/2**5,ro=2**5/(1.7*2523),bt=-.56,hr=16295499532821565e-27,ca=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],da=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ha=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ua=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var v0=new k({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:nn,fromBase(t){let[e,r,n]=t,o=wt*e-(wt-1)*n,s=kt*r-(kt-1)*e,a=_(ca,[o,s,n]).map(function(u){let v=Kn+eo*(u/1e4)**Qn,w=1+to*(u/1e4)**Qn;return(v/w)**la}),[l,c,h]=_(ha,a);return[(1+bt)*l/(1+bt*l)-hr,c,h]},toBase(t){let[e,r,n]=t,o=(e+hr)/(1+bt-bt*(e+hr)),i=_(ua,[o,r,n]).map(function(u){let v=Kn-u**ro,w=to*u**ro-eo;return 1e4*(v/w)**aa}),[a,l,c]=_(da,i),h=(a+(wt-1)*c)/wt,d=(l+(kt-1)*h)/kt;return[h,d,c]},formats:{color:{}}}),jr=new k({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:v0,fromBase(t){let[e,r,n]=t,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ft(o)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]},formats:{color:{}}});function fa(t,e){let[r,n,o]=jr.from(t),[s,i,a]=jr.from(e),l=r-s,c=n-i;Number.isNaN(o)&&Number.isNaN(a)?(o=0,a=0):Number.isNaN(o)?o=a:Number.isNaN(a)&&(a=o);let h=o-a,d=2*Math.sqrt(n*i)*Math.sin(h/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const w0=3424/4096,k0=2413/128,b0=2392/128,no=2610/16384,pa=2523/32,ma=16384/2610,oo=32/2523,ga=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],va=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],wa=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],ka=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Hr=new k({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:nn,fromBase(t){let e=_(ga,t);return ba(e)},toBase(t){let e=ya(t);return _(ka,e)},formats:{color:{}}});function ba(t){let e=t.map(function(r){let n=w0+k0*(r/1e4)**no,o=1+b0*(r/1e4)**no;return(n/o)**pa});return _(va,e)}function ya(t){return _(wa,t).map(function(n){let o=Math.max(n**oo-w0,0),s=k0-b0*n**oo;return 1e4*(o/s)**ma})}function $a(t,e){let[r,n,o]=Hr.from(t),[s,i,a]=Hr.from(e);return 720*Math.sqrt((r-s)**2+.25*(n-i)**2+(o-a)**2)}const xa=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ca=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Ma=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Aa=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Zt=new k({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:U,fromBase(t){let r=_(xa,t).map(n=>Math.cbrt(n));return _(Ma,r)},toBase(t){let r=_(Aa,t).map(n=>n**3);return _(Ca,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Sa(t,e){let[r,n,o]=Zt.from(t),[s,i,a]=Zt.from(e),l=r-s,c=n-i,h=o-a;return Math.sqrt(l**2+c**2+h**2)}var Dr=Object.freeze({__proto__:null,deltaE76:oa,deltaECMC:ia,deltaE2000:Zr,deltaEJz:fa,deltaEITP:$a,deltaEOK:Sa});function ze(t,e,r={}){lt(r)&&(r={method:r});let{method:n=ne.deltaE,...o}=r;t=A(t),e=A(e);for(let s in Dr)if("deltae"+n.toLowerCase()===s.toLowerCase())return Dr[s](t,e,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Ea(t,e=.25){let n=[k.get("oklch","lch"),"l"];return ue(t,n,o=>o*(1+e))}function _a(t,e=.25){let n=[k.get("oklch","lch"),"l"];return ue(t,n,o=>o*(1-e))}var Ba=Object.freeze({__proto__:null,lighten:Ea,darken:_a});function y0(t,e,r=.5,n={}){[t,e]=[A(t),A(e)],ce(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:i}=n;return dt(t,e,{space:o,outputSpace:s,premultiplied:i})(r)}function $0(t,e,r={}){let n;on(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:i=2,maxSteps:a=1e3,...l}=r;n||([t,e]=[A(t),A(e)],n=dt(t,e,l));let c=ze(t,e),h=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(a!==void 0&&(h=Math.min(h,a)),h===1)d=[{p:.5,color:n(.5)}];else{let u=1/(h-1);d=Array.from({length:h},(v,w)=>{let y=w*u;return{p:y,color:n(y)}})}if(o>0){let u=d.reduce((v,w,y)=>{if(y===0)return 0;let M=ze(w.color,d[y-1].color,s);return Math.max(v,M)},0);for(;u>o;){u=0;for(let v=1;v<d.length&&d.length<a;v++){let w=d[v-1],y=d[v],M=(y.p+w.p)/2,S=n(M);u=Math.max(u,ze(S,w.color),ze(S,y.color)),d.splice(v,0,{p:M,color:n(M)}),v++}}}return d=d.map(u=>u.color),d}function dt(t,e,r={}){if(on(t)){let[l,c]=[t,e];return dt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:i}=r;t=A(t),e=A(e),t=tt(t),e=tt(e);let a={colors:[t,e],options:r};if(n?n=k.get(n):n=k.registry[ne.interpolationSpace]||t.space,o=o?k.get(o):n,t=F(t,n),e=F(e,n),t=fe(t),e=fe(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[h,d]=[G(t,c),G(e,c)];[h,d]=Ai(l,[h,d]),ue(t,c,h),ue(e,c,d)}return i&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=s?s(l):l;let c=t.coords.map((u,v)=>{let w=e.coords[v];return Lt(u,w,l)}),h=Lt(t.alpha,e.alpha,l),d={space:n,coords:c,alpha:h};return i&&(d.coords=d.coords.map(u=>u/h)),o!==n&&(d=F(d,o)),d},{rangeArgs:a})}function on(t){return ce(t)==="function"&&!!t.rangeArgs}ne.interpolationSpace="lab";function Ia(t){t.defineFunction("mix",y0,{returns:"color"}),t.defineFunction("range",dt,{returns:"function<color>"}),t.defineFunction("steps",$0,{returns:"array<color>"})}var La=Object.freeze({__proto__:null,mix:y0,steps:$0,range:dt,isRange:on,register:Ia}),x0=new k({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:rt,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,o,s]=t,[i,a,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(a=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:i=(o-s)/c+(o<s?6:0);break;case o:i=(s-n)/c+2;break;case s:i=(n-o)/c+4}i=i*60}return[i,a*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function o(s){let i=(s+e/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),C0=new k({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:x0,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[e,o===0?0:200*(1-n/o),100*o]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n*(1-r/2);return[e,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Ta=new k({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:C0,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[e,0,a*100]}let s=1-n,i=s===0?0:1-r/s;return[e,i*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Pa=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Ra=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var M0=new N({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Pa,fromXYZ_M:Ra}),Za=new N({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:M0,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e)),formats:{color:{id:"a98-rgb"}}});const Na=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],ja=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var A0=new N({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:rn,toXYZ_M:Na,fromXYZ_M:ja});const Ha=1/512,Da=16/512;var za=new N({id:"prophoto",name:"ProPhoto",base:A0,toBase(t){return t.map(e=>e<Da?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=Ha?e**(1/1.8):16*e)},formats:{color:{id:"prophoto-rgb"}}}),Va=new k({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Zt,fromBase(t){let[e,r,n]=t,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ft(o)]},toBase(t){let[e,r,n]=t,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[e,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const so=203,io=2610/2**14,Oa=2**14/2610,Fa=2523/2**5,ao=2**5/2523,lo=3424/2**12,co=2413/2**7,ho=2392/2**7;var Ua=new N({id:"rec2100pq",name:"REC.2100-PQ",base:Ut,toBase(t){return t.map(function(e){return(Math.max(e**ao-lo,0)/(co-ho*e**ao))**Oa*1e4/so})},fromBase(t){return t.map(function(e){let r=Math.max(e*so/1e4,0),n=lo+co*r**io,o=1+ho*r**io;return(n/o)**Fa})},formats:{color:{id:"rec2100-pq"}}});const uo=.17883277,fo=.28466892,po=.55991073,ur=3.7743;var Ga=new N({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ut,toBase(t){return t.map(function(e){return e<=.5?e**2/3*ur:Math.exp((e-po)/uo+fo)/12*ur})},fromBase(t){return t.map(function(e){return e/=ur,e<=1/12?Math.sqrt(3*e):uo*Math.log(12*e-fo)+po})},formats:{color:{id:"rec2100-hlg"}}});const S0={};he.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=E0(t.W1,t.W2,t.options.method))});he.add("chromatic-adaptation-end",t=>{t.M||(t.M=E0(t.W1,t.W2,t.options.method))});function Gt({id:t,toCone_M:e,fromCone_M:r}){S0[t]=arguments[0]}function E0(t,e,r="Bradford"){let n=S0[r],[o,s,i]=_(n.toCone_M,t),[a,l,c]=_(n.toCone_M,e),h=[[a/o,0,0],[0,l/s,0],[0,0,c/i]],d=_(h,n.toCone_M);return _(n.fromCone_M,d)}Gt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Gt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Gt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Gt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(J,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});J.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Ya=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],qa=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var _0=new N({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:J.ACES,toXYZ_M:Ya,fromXYZ_M:qa,formats:{color:{}}});const yt=2**-16,fr=-.35828683,$t=(Math.log2(65504)+9.72)/17.52;var Wa=new N({id:"acescc",name:"ACEScc",coords:{r:{range:[fr,$t],name:"Red"},g:{range:[fr,$t],name:"Green"},b:{range:[fr,$t],name:"Blue"}},referred:"scene",base:_0,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-yt)*2:r<$t?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(yt)+9.72)/17.52:e<yt?(Math.log2(yt+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),mo=Object.freeze({__proto__:null,XYZ_D65:U,XYZ_D50:rn,XYZ_ABS_D65:nn,Lab_D65:Nr,Lab:z,LCH:et,sRGB_Linear:h0,sRGB:rt,HSL:x0,HWB:Ta,HSV:C0,P3_Linear:d0,P3:u0,A98RGB_Linear:M0,A98RGB:Za,ProPhoto_Linear:A0,ProPhoto:za,REC_2020_Linear:Ut,REC_2020:c0,OKLab:Zt,OKLCH:Va,Jzazbz:v0,JzCzHz:jr,ICTCP:Hr,REC_2100_PQ:Ua,REC_2100_HLG:Ga,ACEScg:_0,ACEScc:Wa}),be;const P=class{constructor(...e){He(this,be,void 0);let r;e.length===1&&(r=A(e[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=e,Kt(this,be,k.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in xe(this,be).coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:a=>this.set(i,a)})}get space(){return xe(this,be)}get spaceId(){return xe(this,be).id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=Pi(this,...e);return r.color=new P(r.color),r}static get(e,...r){return e instanceof P?e:new P(e,...r)}static defineFunction(e,r,n=r){let{instance:o=!0,returns:s}=n,i=function(...a){let l=r(...a);if(s==="color")l=P.get(l);else if(s==="function<color>"){let c=l;l=function(...h){let d=c(...h);return P.get(d)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>P.get(c)));return l};e in P||(P[e]=i),o&&(P.prototype[e]=function(...a){return i(this,...a)})}static defineFunctions(e){for(let r in e)P.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(P);else for(let r in e)P.defineFunction(r,e[r])}};let T=P;be=new WeakMap;T.defineFunctions({get:G,getAll:ct,set:ue,setAll:l0,to:F,equals:Ri,inGamut:Ye,toGamut:fe,distance:f0,toString:Rt});Object.assign(T,{util:$i,hooks:he,WHITES:J,Space:k,spaces:k.registry,parse:a0,defaults:ne});for(let t of Object.keys(mo))k.register(mo[t]);for(let t in k.registry)zr(t,k.registry[t]);he.add("colorspace-init-end",t=>{var e;zr(t.id,t),(e=t.aliases)==null||e.forEach(r=>{zr(r,t)})});function zr(t,e){Object.keys(e.coords),Object.values(e.coords).map(n=>n.name);let r=t.replace(/-/g,"_");Object.defineProperty(T.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return k.resolveCoord([e,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,i)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:a}=k.resolveCoord([e,s]);if(a>=0)return o[a]}return Reflect.get(o,s,i)},set:(o,s,i,a)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=k.resolveCoord([e,s]);if(l>=0)return o[l]=i,this.setAll(t,o),!0}return Reflect.set(o,s,i,a)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}T.extend(Dr);T.extend({deltaE:ze});T.extend(Ba);T.extend({contrast:ta});T.extend(na);T.extend(Ni);T.extend(La);T.extend(St);function B0(t){return V(t,(e,r)=>r instanceof T?L(r.toString({format:"hex"})):B0(r))}const Xa="dodgerblue";function go(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA")),n=e>r?"white":"black";return new T(n)}function pr({background:t,foreground:e}){return{background:t??go(e),foreground:e??go(t)}}function vo(t=Xa){const e=new T(t),r={nav:{hover:pr({background:e.clone().set({"hsl.l":93})}),active:pr({background:e.clone().set({"hsl.l":90})}),selected:pr({background:e.clone().set({"hsl.l":85})})},accent:{icon:e.clone().set({"hsl.l":40})}};return B0(r)}const I0=Kr()("change-page"),Vr=Ot({"vir-icon-color":"currentColor"}),Ja=Ot({"vir-icon-stroke-color":Vr["vir-icon-color"].value,"vir-icon-fill-color":Vr["vir-icon-color"].value}),mr={...Vr,...Ja};function L0({name:t,svgTemplate:e}){return{name:t,templateString:typeof e=="string"?e:Lr(e)}}const de=en()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:t})=>!!t.fitContainer},styles:({hostClassSelectors:t})=>g`
        :host {
            display: block;
            color: ${mr["vir-icon-color"].value};
            fill: ${mr["vir-icon-fill-color"].value};
            stroke: ${mr["vir-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vir-icon-fit-icon"]} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t})=>t.icon?Cs(t.icon.templateString):""}),Qa=L0({name:"Element16Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            stroke-width="1px"
        >
            <path d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6" />
        </svg>
    `}),{defineElement:$e,defineElementNoInputs:$1}=Oo(),qe=$e()({tagName:"element-book-route-link",cssVars:{anchorPadding:""},styles:({cssVarValues:t})=>g`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t.anchorPadding};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n,o;const r=((o=t.router)==null?void 0:o.createRoutesUrl({...(n=t.router)==null?void 0:n.getCurrentRawRoutes(),...t.route}))??"#";return b`
            <a
                href=${r}
                ${ee("click",s=>{(!t.router||ii(s))&&(s.preventDefault(),window.scrollTo(0,0),e(new I0(t.route)))})}
            >
                <slot></slot>
            </a>
        `}}),xt=$e()({tagName:"element-book-nav",styles:g`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: #f8f8f8;
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
            padding-right: 24px;
            display: block;
            ${qe.cssVarNames.anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 24px);
        }

        ${qe} {
            font-size: 20px;
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
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        ${de} {
            display: inline-flex;
            color: ${R["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=T0({indent:0,tree:t.tree,rootPath:[],router:t.router,selectedPath:t.selectedPath});return b`
            <ul>
                ${e}
            </ul>
        `}});function T0({indent:t,tree:e,rootPath:r,selectedPath:n,router:o}){return e.children?Object.values(e.children).map(s=>{const i=r.concat(s.breadcrumb),a=T0({indent:t+1,tree:s,rootPath:i,selectedPath:n,router:o}),l=s.entry.type===te.Page;return b`
            <div class="nav-tree-entry" style="--indent: ${t};">
                <li class=${s.entry.type}>
                    <${qe}
                        ${C(qe,{router:o,route:{paths:i}})}
                        class=${Ve({"title-row":!0,selected:Gr(n,i)})}
                    >
                        <div class="title-text">
                            ${Ke(l,b`
                                    <${de}
                                        ${C(de,{icon:Qa})}
                                    ></${de}>
                                `)}
                            ${s.entry.title}
                        </div>
                    </${qe}>
                </li>
                ${a}
            </div>
        `}):[]}const Ka=L0({name:"Element24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
            stroke-width="1px"
        >
            <path d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),gr=$e()({tagName:"element-book-breadcrumbs",styles:g`
        :host {
            display: flex;
            color: #999;
        }
    `,renderCallback:({inputs:t})=>t.currentRoute.paths.map((e,r)=>{const o=r>=t.currentRoute.paths.length-1?"":b`
                      &gt;
                  `;return b`
                ${e} ${o}
            `})}),vr=$e()({tagName:"element-book-example-controls",styles:g`
        :host {
            display: flex;
            color: #bbb;
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }

        :host(:hover) {
            color: black;
        }
    `,renderCallback({inputs:t}){return b`
            <span>
                ${t.example.title}
                <span></span>
            </span>
        `}}),wo=Symbol("unset-internal-state"),wr=$e()({tagName:"element-book-example-viewer",stateInit:{internalState:wo},renderCallback({state:t,inputs:e,updateState:r}){const n=e.parentBreadcrumbs.concat(e.example.title);t.internalState===wo&&r({internalState:e.example.stateInit});try{const o=e.example.render({state:t.internalState,updateState:s=>{r({internalState:{...t.internalState,...s}})}});return b`
                ${Ke(!!e.example.styles,b`
                        <style>
                            ${e.example.styles}
                        </style>
                    `)}
                ${o}
            `}catch(o){return console.error(o),`${n.join(" > ")} failed: ${Fr(o)}`}}}),kr=$e()({tagName:"element-book-page-examples",styles:g`
        :host {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }
        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,renderCallback({inputs:t}){const e=t.page.examples,r=e.every(n=>n.hideControls);return e.map(n=>b`
                <div class="individual-example-wrapper">
                    ${Ke(!r,b`
                            <${vr}
                                class=${Ve({"hidden-controls":!!n.hideControls})}
                                ${C(vr,{example:n})}
                            ></${vr}>
                        `)}
                    <${wr}
                        ${C(wr,{example:n,parentBreadcrumbs:t.parentBreadcrumbs})}
                    ></${wr}>
                </div>
            `)}}),Ct=$e()({tagName:"element-book-entry-display",styles:g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid #f8f8f8;
            padding: 4px 8px;
            background-color: white;
        }

        .all-examples-wrapper {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        h2 {
            margin: 0;
            margin-bottom: 24px;
            padding: 0;
            display: flex;
            gap: 16px;
            align-items: center;
        }

        ${de} {
            color: ${R["element-book-accent-icon-color"].value};
        }
    `,renderCallback:({inputs:t})=>{const e=R0(t.currentNode),r=ot(t.currentNode.entry,!0),n=P0(e,r,!0);return b`
            <div class="title-bar">
                <${gr}
                    ${C(gr,{currentRoute:t.currentRoute})}
                ></${gr}>
            </div>
            <div class="all-examples-wrapper">${n}</div>
        `}});function P0(t,e,r){var o;const n=!r&&(t.length!==1||((o=t[0])==null?void 0:o.type)!==te.Page);return t.map(s=>Eo(s,te.Page)?b`
                    <div class="page-examples">
                        ${Ke(n,b`
                                <h2>
                                    <${de}
                                        ${C(de,{icon:Ka})}
                                    ></${de}>
                                    ${s.title}
                                </h2>
                            `)}
                        <${kr}
                            ${C(kr,{page:s,parentBreadcrumbs:e})}
                        ></${kr}>
                    </div>
                `:Object.entries(s).map(([i,a])=>b`
                            ${Ke(n,b`
                                    <h1>${i}</h1>
                                `)}
                            ${P0(a,e,!1)}
                        `)).flat()}function R0(t){return t.entry.type===te.Page?[t.entry]:[{[t.entry.title]:Object.values(t.children).map(R0).flat()}]}const Mt=en()({tagName:"element-book-app",stateInit:{currentRoute:ki,router:void 0,colors:{original:void 0,theme:vo(void 0)}},styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
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

        ${Ct} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${xt} {
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({updateState:t,state:e,inputs:r,host:n}){if(r.baseRoute&&!e.router){const o=wi(r.baseRoute);t({router:o}),o.addRouteListener(!0,s=>{t({currentRoute:s})})}Nn(n,e.colors.theme)},renderCallback:({state:t,inputs:e,host:r,updateState:n})=>{var s;try{let i=function(h){t.router?t.router.setRoutes(h):n({currentRoute:{...t.currentRoute,...h}})};var o=i;if(e.themeColor!==((s=t.colors)==null?void 0:s.original)){const h=vo(e.themeColor);n({colors:{original:e.themeColor,theme:h}}),Nn(r,h)}const a=ds(e.entries),l=Mr(t.currentRoute.paths,a);if(!l||Eo(l.entry,te.Root)){const h=Object.values(a.children)[0];if(!h)throw new Error("No entries exist.");const d=ot(h.entry,!0),u=e.defaultPath??(d.length?d:void 0);u&&u.length&&i({paths:u})}const c=Mr(t.currentRoute.paths,a);if(!c)throw new Error(`Tried to self-correct for invalid path ${t.currentRoute.paths.join("/")}
                        but failed to do so.`);return b`
                <div
                    class="root"
                    ${ee(I0,h=>{i(h.detail)})}
                >
                    <${xt}
                        ${C(xt,{tree:a,router:t.router,selectedPath:t.currentRoute.paths})}
                    ></${xt}>
                    <${Ct}
                        ${C(Ct,{currentRoute:t.currentRoute,currentNode:c})}
                    ></${Ct}>
                </div>
            `}catch(i){return b`
                <p class="error">${Fr(i)}</p>
            `}}}),Yt=Re({title:"Elements"}),Or={color:"--icon-stroke-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function ko(t,e){return`var(${t}, var(${Or.color}, ${e}))`}const m={stroke:(t="currentColor")=>ko(Or.strokeColor,t),fill:(t="currentColor")=>ko(Or.fillColor,t)};class f{constructor(e,r){this.iconName=e,this.svgString=r}}function p(t,...e){return t.reduce((n,o,s)=>{const i=s<e.length?e[s]:"";return n+o+i},"")}new f("Copy16Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="2"
                d="M14 7.33C14 6.6 13.4 6 12.67 6H7.33C6.6 6 6 6.6 6 7.33v5.34C6 13.4 6.6 14 7.33 14h5.34c.73 0 1.33-.6 1.33-1.33V7.33Z"
            ></path>
            <path
                stroke-width="2"
                d="M11 5.67V4.33C11 3.6 10.4 3 9.67 3H4.33C3.6 3 3 3.6 3 4.33v5.34C3 10.4 3.6 11 4.33 11h1.34"
            ></path>
        </svg>
    `);new f("ExternalLink16Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="2"
                d="M7 4H4.33C3.6 4 3 4.6 3 5.33v6.34C3 12.4 3.6 13 4.33 13h6.34c.73 0 1.33-.6 1.33-1.33V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `);const e1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",Z0="0 0 58 58",N0=`<image xlink:href="${e1}" id="icp-16__b" width="58" height="58" />`;new f("Icp16Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${Z0}"
        >
            ${N0}
        </svg>
    `);const br=new f("InfoCircle16Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path stroke-width="2" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1" />
        </svg>
    `);new f("ArrowBarUp24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 14V4L8 8m4-4 4 4" />
            <path stroke-miterlimit="4" stroke-width="2" d="M4 20h16" />
        </svg>
    `);new f("ArrowForwardUp24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4" />
        </svg>
    `);new f("ArrowLeft24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14M5 12l6 6m-6-6 6-6" />
        </svg>
    `);new f("ArrowLoopLeft24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3" />
        </svg>
    `);new f("ArrowLoopRight24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3" />
        </svg>
    `);new f("ArrowRight24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14m-6 6 6-6m-6-6 6 6" />
        </svg>
    `);new f("ArrowsSort24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4" />
        </svg>
    `);const bo={interactionDuration:g`--toniq-interaction-transition-duration`,prettyDuration:g`--toniq-pretty-transition-duration`},Be={interaction:g`var(${bo.interactionDuration}, 84ms)`,pretty:g`var(${bo.prettyDuration}, 300ms)`};function qt(){return t=>t}function yr(t){return{foregroundColor:t.backgroundColor,backgroundColor:t.foregroundColor}}const t1=(()=>{const t={backgroundColor:g`#ffffff`,foregroundColor:g`#000000`},e={...t,foregroundColor:g`#00D093`},r={...t,foregroundColor:g`#ACADAD`},n={...t,foregroundColor:g`#D6D6D6`},o={...e},s={...e,foregroundColor:g`#00A876`},i={...e,foregroundColor:g`#1D6852`},a={...n},l={...t,foregroundColor:g`#EAFBF7`},c={...t,backgroundColor:g`#D2EEFA`},h=yr(o),d=yr(s),u=yr(i),v=u,w={backgroundColor:g`#F1F3F6`,foregroundColor:t.foregroundColor},y={...w,foregroundColor:g`#9A9A9D`};return qt()({brandPrimary:e,pagePrimary:t,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:s,pageInteractionActive:i,divider:a,dividerFaint:l,dropShadow:c,pageDarkPrimary:v,accentPrimary:h,accentPrimaryHover:d,accentPrimaryActive:u,accentSecondary:w,accentTertiary:y})})(),j0=t1;function yo(t,e){return L(`--toniq-${We(t)}-${We(e)}`)}const H0=V(j0,t=>({backgroundColor:yo(t,"backgroundColor"),foregroundColor:yo(t,"foregroundColor")}));function ve(t,e){const r=j0[t][e],n=H0[t][e];return g`var(${n}, ${r})`}const D=V(H0,t=>({foregroundColor:ve(t,"foregroundColor"),backgroundColor:ve(t,"backgroundColor")}));function we(t){return g`
        background-color: ${t.backgroundColor};
        color: ${t.foregroundColor};
    `}function r1(t){return`${t}px`}function D0({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const o=L(r1(n+r+e));return g`
        ${L(t)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            border: ${n}px solid ${D.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const z0=qt()({toniqFont:{"font-family":g`'Rubik', sans-serif`},normalWeightFont:{"font-weight":g`400`},boldFont:{"font-weight":g`600`},extraBoldFont:{"font-weight":g`900`},paragraphFont:{"line-height":g`24px`,"font-size":g`16px`},boldParagraphFont:{},labelFont:{"line-height":g`16px`,"font-size":g`12px`},boldLabelFont:{},h1Font:{"line-height":g`96px`,"font-size":g`64px`},h2Font:{"line-height":g`48px`,"font-size":g`32px`},h3Font:{"line-height":g`32px`,"font-size":g`24px`},monospaceFont:{"font-family":g`'Inconsolata', monospace`,"line-height":g`1.125em`}}),n1=V(z0,(t,e)=>{const r=L(We(t.replace(/Font$/,"")));return V(e,o=>{const s=L(o);return g`--toniq-font-${r}-${s}`})});function K(t){const e=n1[t],r=z0[t],n=ye(e).map(o=>{const s=r[o],i=e[o];return g`
            ${L(o)}: var(${i}, ${s});
        `});return L(n.join(`
`))}const sn=(()=>{const t=g`
        font-style: normal;
        color: ${D.pagePrimary.foregroundColor};
        ${K("toniqFont")};
    `,e=g`
        ${t};
        ${K("normalWeightFont")};
    `,r=g`
        ${t};
        ${K("boldFont")};
    `,n=g`
        ${t};
        ${K("extraBoldFont")};
    `,o=g`
        ${t};
        ${K("paragraphFont")};
        ${e};
    `,s=g`
        ${t};
        ${o};
        ${r};
    `,i=g`
        ${t};
        ${K("labelFont")};
        ${e};
    `,a=g`
        ${i};
        ${r};
    `,l=g`
        ${K("h1Font")};
        ${n};
    `,c=g`
        ${K("h2Font")};
        ${r};
    `,h=g`
        ${K("h3Font")};
        ${r};
    `,d=g`
        ${K("monospaceFont")}
    `;return qt()({toniqFont:t,normalWeightFont:e,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:s,labelFont:i,boldLabelFont:a,h1Font:l,h2Font:c,h3Font:h,monospaceFont:d})})(),V0=g`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;qt()({popupShadow:g`
        filter: drop-shadow(0px 12px 8px ${D.dropShadow.backgroundColor});
    `});const O0=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;new f("ArrowsSortAscending24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 19 19 5m0 6V5h-6" />
        </svg>
    `);new f("ArrowsSortDescending24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m5 5 14 14m0-6v6h-6" />
        </svg>
    `);new f("Bucket24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="m19 9-2 9c-.2 1.18-1.03 2.02-2 2H9c-.97.02-1.8-.82-2-2L5 9h14ZM7 9a5 5 0 0 1 10 0"
            />
        </svg>
    `);new f("BuildingStore24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M3 21h18M5 21V10.85M19 21V10.85M9 21v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4M3 7l2-4h14l2 4H3Zm18 0v1a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V7"
            />
        </svg>
    `);new f("CalendarEvent24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `);new f("Cash24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `);new f("Chain24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${m.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="m11.736 16.792.206-.245a.64.64 0 0 1 .902-.079l.491.412a.64.64 0 0 1 .079.902l-2.059 2.451a3.206 3.206 0 0 1-2.451 1.142 3.206 3.206 0 0 1-2.058-.749l-2.452-2.058a3.208 3.208 0 0 1-1.142-2.454c0-.752.266-1.479.752-2.055l3.703-4.41v-.003a3.204 3.204 0 0 1 4.509-.39l1.456 1.223c.27.227.305.632.078.903l-.409.488a.641.641 0 0 1-.902.079l-1.459-1.224a1.283 1.283 0 0 0-1.801.157l-3.706 4.413c-.192.23-.301.521-.301.822 0 .378.17.736.458.979l2.451 2.058a1.274 1.274 0 0 0 1.802-.157l1.853-2.205Zm.528-9.584-.207.245a.64.64 0 0 1-.901.079l-.492-.412a.64.64 0 0 1-.078-.902l2.059-2.451a3.206 3.206 0 0 1 2.451-1.142c.752 0 1.482.266 2.058.749l2.451 2.058a3.208 3.208 0 0 1 1.142 2.454 3.18 3.18 0 0 1-.752 2.055l-3.702 4.41v.003a3.204 3.204 0 0 1-4.509.39l-1.457-1.223a.642.642 0 0 1-.078-.903l.41-.488a.64.64 0 0 1 .901-.079l1.459 1.224a1.286 1.286 0 0 0 1.802-.157l3.706-4.413c.192-.23.3-.521.3-.822 0-.378-.169-.736-.457-.979l-2.452-2.058a1.274 1.274 0 0 0-1.801.157l-1.853 2.205Z"
            />
        </svg>
    `);const o1=new f("CheckMark24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m19 6-9 12-5-5" />
        </svg>
    `);new f("ChevronDown24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
            />
        </svg>
    `);new f("ChevronUp24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 15 6-6 6 6"
            />
        </svg>
    `);new f("Circle24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
        </svg>
    `);new f("CircleDot24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="${m.stroke()}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${m.fill()}"
                stroke="${m.fill()}"
                stroke-width="2"
            />
        </svg>
    `);new f("CirclePlusFill24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${m.fill()}"
                stroke="none"
                d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm-1 9H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2Z"
            />
        </svg>
    `);new f("CirclePlusOutline24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6" />
        </svg>
    `);new f("CircleWavyCheck24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${m.fill()}"
                stroke="none"
                d="M4.93 19.07c.49.48 1.15.7 1.9.75.63.04 1.35-.08 1.87.14.52.22.96.81 1.45 1.23.57.5 1.2.81 1.85.81.65 0 1.28-.32 1.86-.81.5-.42.94-1.02 1.44-1.23.5-.21 1.22-.09 1.86-.14a2.93 2.93 0 0 0 1.9-.75c.49-.48.7-1.15.76-1.9.04-.63-.08-1.35.14-1.87.22-.52.81-.96 1.23-1.45.5-.57.81-1.2.81-1.85 0-.65-.32-1.28-.81-1.86-.42-.5-1.02-.94-1.23-1.44-.21-.5-.09-1.22-.14-1.86a2.93 2.93 0 0 0-.75-1.9 2.9 2.9 0 0 0-1.9-.76c-.63-.04-1.35.08-1.87-.14-.52-.22-.96-.81-1.45-1.23A2.9 2.9 0 0 0 12 2c-.65 0-1.28.32-1.86.81-.5.42-.94 1.02-1.44 1.23-.5.21-1.22.09-1.86.14-.76.06-1.43.27-1.9.75a2.9 2.9 0 0 0-.76 1.9c-.04.63.08 1.35-.14 1.87-.22.52-.81.96-1.23 1.45-.5.57-.81 1.2-.81 1.85 0 .65.32 1.28.81 1.86.42.5 1.02.94 1.23 1.44.21.5.09 1.22.14 1.86.06.76.27 1.43.75 1.9ZM8.3 12.7l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L11 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `);new f("Clock24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 4v5l3 3" />
        </svg>
    `);new f("Code24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${m.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="M21.393 2H2.607A2.61 2.61 0 0 0 0 4.607v14.786A2.61 2.61 0 0 0 2.607 22h18.786A2.61 2.61 0 0 0 24 19.393V4.607A2.61 2.61 0 0 0 21.393 2Zm1.902 17.393a1.904 1.904 0 0 1-1.902 1.902H2.607a1.904 1.904 0 0 1-1.902-1.902V4.607c0-1.049.853-1.903 1.902-1.903h18.786c1.049 0 1.902.854 1.902 1.903v14.786ZM21.664 6H2.336A.344.344 0 0 0 2 6.352c0 .195.15.353.336.353h19.328A.345.345 0 0 0 22 6.352.344.344 0 0 0 21.664 6ZM2.607 4.583a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm3.006 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm-1.503 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm4.757 5.411a.351.351 0 0 0-.498 0l-3.757 3.757a.351.351 0 0 0 0 .498l3.757 3.757a.352.352 0 1 0 .498-.498L5.359 14l3.508-3.508a.351.351 0 0 0 0-.498Zm6.764 0a.352.352 0 1 0-.499.498L18.641 14l-3.509 3.508a.353.353 0 0 0 .499.498l3.757-3.757a.353.353 0 0 0 0-.498l-3.757-3.757Zm-2.008-.458a.352.352 0 0 0-.451.211l-3.006 8.266a.351.351 0 1 0 .662.24l3.006-8.266a.352.352 0 0 0-.211-.451Z"
            />
        </svg>
    `);new f("Copy24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `);new f("DotsVertical24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `);new f("Edit24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `);new f("ExternalLink24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
            />
        </svg>
    `);new f("Filter24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `);new f("Geometry24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `);new f("GridDots24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `);new f("HeartFill24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${m.fill()}"
                stroke="${m.stroke()}"
                stroke-width="2"
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `);new f("HeartOutline24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="m19.51 13.58-7.5 7.43-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57"
            />
        </svg>
    `);new f("Icp24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${Z0}"
        >
            ${N0}
        </svg>
        </svg>
    `);new f("Infinity24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `);new f("LayersLinked24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `);new f("LayoutGrid24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `);new f("Lifebuoy24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-5a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm3 12 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"
            />
        </svg>
    `);new f("List24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
        </svg>
    `);new f("ListDetails24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M9 5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm0 10a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `);new f("Loader24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `);new f("LoaderAnimated24Icon",p`
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
            class="loader-animated-24-icon__svg"
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
        >
            <path d="M12 6V3" />
            <path d="M16.25 7.75 18.4 5.6" />
            <path d="M18 12h3" />
            <path d="m16.25 16.25 2.15 2.15" />
            <path d="M12 18v3" />
            <path d="M7.75 16.25 5.6 18.4" />
            <path d="M6 12H3" />
            <path d="M7.75 7.75 5.6 5.6" />
        </svg>
    `);new f("Lock24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4V7a4 4 0 0 1 8 0v4"
            />
        </svg>
    `);new f("LockOpen24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4V6a4 4 0 0 1 8 0"
            />
        </svg>
    `);new f("Menu24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `);new f("Paper24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            width="24"
            height="24"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `);new f("Photo24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M15 8h.01M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7ZM4 15l4-4c.93-.9 2.07-.9 3 0l5 5m-2-2 1-1c.93-.9 2.07-.9 3 0l2 2"
            />
        </svg>
    `);new f("Rocket24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `);new f("Search24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6" />
        </svg>
    `);new f("Send24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `);new f("ShoppingCart24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm11 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0H6V3H4m2 2 14 1-1 7H6"
            />
        </svg>
    `);new f("Social24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `);new f("Square24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                width="16"
                height="16"
                x="4"
                y="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                rx="2"
            />
        </svg>
    `);new f("SquareCheck24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path fill="none" d="M6 6h12v12H6z" />
            <path
                fill="${m.fill()}"
                stroke="none"
                d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6ZM8.3 12.7l2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L11 12.58l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `);const $o=new f("Trash24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            />
        </svg>
    `);new f("User24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            fill="${m.stroke()}"
            width="24"
            height="24"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="nonzero"
                d="M12 3.379A8.632 8.632 0 0 0 3.379 12 8.637 8.637 0 0 0 12 20.621a8.621 8.621 0 0 0 0-17.242Zm5.243 13.595a5.85 5.85 0 0 0-10.482.006A7.153 7.153 0 0 1 4.758 12 7.24 7.24 0 0 1 12 4.759 7.241 7.241 0 0 1 19.241 12a7.15 7.15 0 0 1-1.998 4.974ZM12 6.828a3.107 3.107 0 0 0-2.868 1.915 3.1 3.1 0 0 0 .673 3.382 3.106 3.106 0 0 0 3.382.673 3.1 3.1 0 0 0 1.007-5.061A3.086 3.086 0 0 0 12 6.828Z"
            />
        </svg>
    `);new f("Users24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `);new f("Wallet24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 12V9c0-.62-.42-1-1-1H6S4 8 4 6s2-2 2-2h10c.59 0 1 .4 1 1v2m3 5v4h-4a2 2 0 1 1 0-4h4m-1 5v2c0 .6-.4 1-1 1H6c-1 0-2-1-2-2V6"
            />
        </svg>
    `);new f("WorldUpload24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12m-.42-12a17 17 0 0 0 0 18m.92-18a16.9 16.9 0 0 1 2.5 9m3 9v-7l3 3m-3-3-3 3"
            />
        </svg>
    `);new f("X24Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M18 6 6 18M6 6l12 12" />
        </svg>
    `);new f("Kyc32Icon",p`
        <svg
            viewBox="0 0 32 32"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
        >
            <path
                style="fill:none"
                d="M106 122h533v491H106z"
                transform="matrix(.06004 0 0 .06517 -6.364 -7.951)"
            />
            <path
                d="M30.198 5.54a.47.47 0 0 0-.427-.417 9.458 9.458 0 0 1-2.592-.722 9.192 9.192 0 0 1-2.356-1.428.47.47 0 0 0-.632 0 9.175 9.175 0 0 1-2.356 1.428 9.48 9.48 0 0 1-2.578.722.468.468 0 0 0-.429.417c-.021.199-.49 4.88.668 7.19 1.385 2.762 4.687 4.311 4.826 4.376a.468.468 0 0 0 .394 0c.138-.065 3.44-1.614 4.825-4.376 1.147-2.31.678-6.991.657-7.19Z"
                style="fill:#00d093;fill-rule:nonzero"
            />
            <path
                d="M24.86 2.137 24.506 2a.525.525 0 0 0-.354.137 10.284 10.284 0 0 1-2.635 1.598 10.62 10.62 0 0 1-2.885.807.527.527 0 0 0-.48.467c-.024.223-.549 5.46.747 8.046 1.55 3.09 5.245 4.823 5.4 4.897h.441c.154-.073 3.85-1.807 5.4-4.897 1.282-2.586.758-7.823.734-8.046a.526.526 0 0 0-.477-.467 10.566 10.566 0 0 1-2.9-.807 10.29 10.29 0 0 1-2.637-1.598Zm4.328 10.449c-1.178 2.353-3.895 3.892-4.682 4.304-.786-.412-3.504-1.951-4.68-4.304-.966-1.93-.772-5.793-.678-7.057a12.426 12.426 0 0 0 2.78-.829 11.926 11.926 0 0 0 2.578-1.495c.794.604 1.66 1.106 2.578 1.495.891.384 1.825.662 2.78.829.097 1.264.291 5.127-.676 7.057Zm-1.994-4.661-3.299 3.3-2.077-2.078a.526.526 0 0 0-.743.743l2.447 2.447a.527.527 0 0 0 .743 0l3.671-3.672a.524.524 0 0 0-.742-.74Z"
            />
            <path
                d="M16.5 7.5H5.93A2.431 2.431 0 0 0 3.5 9.93v13.14a2.431 2.431 0 0 0 2.43 2.43h20.14a2.431 2.431 0 0 0 2.43-2.43V17.5"
                style="fill:none;stroke:#000;stroke-width:1px"
            />
            <path
                d="M19 21h6"
                style="fill:none;stroke:#000;stroke-width:1px"
                transform="matrix(1 0 0 1 .5 .5)"
            />
            <path
                d="M19 19h4"
                style="fill:none;stroke:#000;stroke-width:1.13px"
                transform="matrix(.75 0 0 1 5.25 .5)"
            />
            <circle
                cx="11.5"
                cy="14.5"
                r="2.5"
                style="fill:tan;stroke:#000;stroke-width:.83px"
                transform="matrix(1.2 0 0 1.2 -2.3 -3.9)"
            />
            <path
                d="M8.001 20.597v.225c0 .419.129.82.358 1.117.23.295.542.462.866.462h4.55c.324 0 .636-.167.866-.462.229-.297.358-.698.358-1.117v-.225c.014-.778-.172-1.54-.531-2.167-.359-.626-.868-1.082-1.449-1.294H9.981c-.581.212-1.09.668-1.449 1.294a4.25 4.25 0 0 0-.531 2.167Z"
                style="fill:#6495ed;fill-rule:nonzero;stroke:#000;stroke-width:.88px;stroke-linecap:butt;stroke-miterlimit:2"
                transform="matrix(1.14286 0 0 1.13955 -1.643 -3.027)"
            />
        </svg>
    `);new f("FolderOff48Icon",p`
        <svg
            fill="none"
            stroke="${m.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="48"
            height="48"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width="4"
                d="m6 6 36 36m0-8V18c0-2.2-1.77-4-4-4l-14-.02-6-6h-2M8 8s-2 2-2 4v22c0 2.2 1.77 4 4 4h28"
            />
        </svg>
    `);new f("Api64Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            fill="${m.stroke()}"
            fill-rule="nonzero"
            viewBox="0 0 64 64"
            width="64"
            height="64"
        >
            <path
                d="m58.672 15.498-.007-.049a1.979 1.979 0 0 0-.043-.2c-.004-.013-.006-.026-.011-.039a1.7 1.7 0 0 0-.228-.486 1.924 1.924 0 0 0-.123-.169l-.013-.017a1.908 1.908 0 0 0-.165-.171l-.037-.031a1.736 1.736 0 0 0-.161-.125l-.035-.024a1.678 1.678 0 0 0-.206-.117l-.014-.009L32.808 2.138a1.87 1.87 0 0 0-1.617 0L6.366 14.061a1.868 1.868 0 0 0-1.058 1.682v30.67c0 .678.368 1.303.961 1.632l24.825 13.766.003.001a1.817 1.817 0 0 0 .411.166l.056.014a2.234 2.234 0 0 0 .219.041 1.72 1.72 0 0 0 .433 0l.056-.009c.055-.009.109-.018.162-.032l.058-.014c.058-.016.114-.035.171-.056l.036-.013a2.52 2.52 0 0 0 .204-.097l.002-.001L57.73 48.045c.593-.329.962-.954.962-1.632V15.739a2.175 2.175 0 0 0-.02-.241ZM54.96 45.312 33.866 57.011v-6.578a1.867 1.867 0 0 0-3.733 0v6.578L9.04 45.314V18.771a10.728 10.728 0 0 1 5.729 2.986l3.767 4.161c-.628.797-1.431 1.914-1.655 2.755a7.168 7.168 0 0 0 .725 5.452l12.434-7.206a7.166 7.166 0 0 0-4.369-3.34c-1.113-.296-2.814-.108-3.882.112l-.285.183-4.204-4.65a14.354 14.354 0 0 0-5.748-3.514l20.447-9.82 20.763 9.972-13.529 7.502a1.866 1.866 0 0 0 1.81 3.264l13.916-7.716v11.132h-.113c0 6.121-4.979 11.1-11.1 11.1a11 11 0 0 1-5.917-1.726 5.534 5.534 0 0 0-1.257-5.899l-1.422 1.42-2.756-2.755-.002.002a.923.923 0 1 0-1.305 1.306l2.755 2.755-2.392 2.392-2.837-2.837-.002.002a.925.925 0 0 0-1.306 1.306l2.838 2.837-1.422 1.42a5.534 5.534 0 0 0 6.682.889 14.716 14.716 0 0 0 8.344 2.587c4.48 0 8.497-2.003 11.213-5.157v5.626Z"
            />
        </svg>
    `);new f("CircleDashes64Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            fill="${m.stroke()}"
        >
            <path
                d="M18.769 37.78a3.053 3.053 0 0 1-2.989-2.457 16.934 16.934 0 0 1 2.354-12.479 16.912 16.912 0 0 1 3.799-4.186 16.882 16.882 0 0 1 5.873-3.003 17 17 0 0 1 12.017 1.037 3.051 3.051 0 0 1-2.643 5.498 10.9 10.9 0 0 0-7.709-.666 10.828 10.828 0 0 0-3.763 1.925 10.852 10.852 0 0 0-2.437 2.683 11.006 11.006 0 0 0-1.506 8.004 3.05 3.05 0 0 1-2.996 3.644Zm13.699 11.221a17.102 17.102 0 0 1-6.499-1.283 3.05 3.05 0 0 1 2.322-5.641 10.9 10.9 0 0 0 7.085.425 10.809 10.809 0 0 0 3.815-1.94 10.81 10.81 0 0 0 2.8-3.295 10.908 10.908 0 0 0 1.205-7.058 3.049 3.049 0 1 1 6.017-1c.287 1.721.306 3.47.058 5.2a16.943 16.943 0 0 1-6.304 10.944 16.885 16.885 0 0 1-5.956 3.026 16.903 16.903 0 0 1-4.543.622ZM32.093 62A29.9 29.9 0 0 1 5.161 45.097a3.051 3.051 0 0 1 5.491-2.659c4.804 9.918 15.698 15.233 26.494 12.925a23.959 23.959 0 0 0 6.3-2.302 3.048 3.048 0 0 1 4.129 1.247 3.051 3.051 0 0 1-1.249 4.13 30.093 30.093 0 0 1-7.904 2.891 30.291 30.291 0 0 1-6.329.671ZM54.5 50.09a3.051 3.051 0 0 1-2.527-4.754c3.652-5.428 4.91-11.939 3.541-18.335C54.15 20.62 50.352 15.2 44.818 11.739a3.05 3.05 0 1 1 3.234-5.172c6.947 4.344 11.715 11.148 13.428 19.158 1.717 8.03.138 16.203-4.446 23.017A3.05 3.05 0 0 1 54.5 50.09ZM5.218 34.128l-.103-.001a3.05 3.05 0 0 1-2.946-3.151A29.932 29.932 0 0 1 25.878 2.668c2.762-.59 5.577-.79 8.372-.597a3.05 3.05 0 0 1-.423 6.086 23.914 23.914 0 0 0-6.673.476A23.846 23.846 0 0 0 8.265 31.18a3.05 3.05 0 0 1-3.047 2.948Z"
            />
        </svg>
    `);new f("Rocket64Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            stroke="${m.stroke()}"
            stroke-width="4"
        >
            <path
                d="M61.733 2.813a.629.629 0 0 0-.476-.489c-7.85-1.92-25.984 4.921-35.819 14.748a42.506 42.506 0 0 0-4.776 5.642c-3.032-.275-6.063-.044-8.644 1.082C4.729 27.001 2.609 35.37 2.017 38.963a1.294 1.294 0 0 0 .829 1.427c.187.069.387.095.586.075l11.702-1.285c.008.883.061 1.764.159 2.642a2.62 2.62 0 0 0 .765 1.6l4.531 4.532c.429.433.996.704 1.603.765.872.097 1.748.15 2.626.159L23.534 60.57a1.296 1.296 0 0 0 .402 1.076 1.3 1.3 0 0 0 1.098.337c3.594-.577 11.981-2.698 15.167-9.985 1.126-2.584 1.357-5.599 1.097-8.616a42.377 42.377 0 0 0 5.658-4.777c9.87-9.816 16.668-27.551 14.777-35.792ZM38.182 25.889a6.166 6.166 0 0 1-1.337-6.717 6.166 6.166 0 0 1 5.695-3.806 6.164 6.164 0 0 1 4.358 10.523 6.154 6.154 0 0 1-8.716 0ZM10.896 45.858a6.505 6.505 0 0 0-3.804 1.854c-2.543 2.552-2.784 12.004-2.784 12.004s9.458-.241 12.003-2.787a6.46 6.46 0 0 0 1.855-3.807"
            />
        </svg>
    `);new f("EntrepotLogo144Icon",p`
        <svg
            height="134"
            width="144"
            viewBox="0 0 134 144"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="${m.fill()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `);new f("BrandDiscord24Icon",p`
        <svg
            fill="${m.fill("#5865f2")}"
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
    `);new f("BrandIcScan24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path fill="#33307c" d="M13 21h-1L1 16v2l11 5 1-1v-1Z" />
            <path
                fill="#7f85db"
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path fill="#33307c" d="M1 7.976 23 18v-2L1 6v1.976Z" />
            <path fill="#7f85db" d="m23 16-11 5v2l11-5v-2Z" />
            <path fill="#33307c" d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z" />
            <path fill="#7f85db" d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z" />
            <path fill="#33307c" d="m12 3 11 5V6L12 1v2Z" />
        </svg>
    `);new f("BrandInstagram24Icon",p`
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
            <path
                fill="url(#brand_instagram_32_icon_a)"
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill="url(#brand_instagram_32_icon_b)"
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
    `);new f("BrandInstagramFlat24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${m.fill()}"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `);new f("BrandTelegram24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${m.fill("#2AABEE")}"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `);new f("BrandTiktok24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill="#ee1d52"
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill="#252525"
                fill-rule="nonzero"
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill="#69c9d0"
                fill-rule="nonzero"
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `);new f("BrandTiktokFlat24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${m.fill()}"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `);new f("BrandTwitch24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${m.fill("#9146FF")}"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `);new f("BrandTwitter24Icon",p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="${m.fill("#41ABE1")}"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `);const xo="toniq-",{defineElement:Wt,defineElementNoInputs:x1}=Oo({assertInputs:t=>{if(!t.tagName.startsWith(xo))throw new Error(`Tag name should start with '${xo}' but got '${t.tagName}'`)}}),se=Wt()({tagName:"toniq-icon",styles:g`
        :host {
            display: block;
        }
        svg {
            /* svg is set to inline by default which gives it space under the image. See: https://stackoverflow.com/a/34952703 */
            display: block;
        }

        :host(.toniq-icon-fit-icon) svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t})=>b`
            ${t.icon?Ms(t.icon.svgString):""}
        `}),s1=g`8px`,B=Wt()({tagName:"toniq-button",hostClasses:{secondary:!1,outline:!1},styles:({hostClassSelectors:t,hostClassNames:e})=>g`
        :host {
            ${sn.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${O0};
        }

        :host(:hover) button {
            ${we(D.accentPrimaryHover)};
        }

        :host(:active) button {
            ${we(D.accentPrimaryActive)};
        }

        button {
            ${V0};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${s1};
            ${we(D.accentPrimary)};
            padding: 10px;
            transition: color ${Be.interaction},
                background-color ${Be.interaction},
                border-color ${Be.interaction};
        }

        ${D0({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${t.secondary} button {
            ${we(D.accentSecondary)};
        }

        ${t.outline} button {
            ${we(D.pagePrimary)};
            border-color: ${D.accentPrimary.backgroundColor};
        }

        :host(.${e.secondary}:hover) button,
        :host(.${e.outline}:hover) button {
            border-color: ${D.accentPrimaryHover.backgroundColor};
        }

        :host(.${e.secondary}:active) button,
        :host(.${e.outline}:active) button {
            border-color: ${D.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?b`
                  <${se}
                      class="icon-template"
                      ${C(se,{icon:t.icon})}
                  ></${se}>
              `:"",r=t.text?b`
                  <span class="text-template">${t.text}</span>
              `:"";return b`
            <button>
                <slot>${e} ${r}</slot>
            </button>
        `}}),F0=Re({title:"Toniq Button",parent:Yt});function $r(t){return[{title:"Text",render(){return b`
                    <${B}
                        class=${t}
                        ${C(B,{text:"Button"})}
                    ></${B}>
                `}},{title:"Icon",render(){return b`
                    <${B}
                        class=${t}
                        ${C(B,{icon:$o})}
                    ></${B}>
                `}},{title:"Text + Icon",render(){return b`
                    <${B}
                        class=${t}
                        ${C(B,{text:"Button",icon:$o})}
                    ></${B}>
                `}},{title:"HTML child",render(){return b`
                    <${B} class=${t} ${C(B,{})}>
                        <span>HTML Child</span>
                    </${B}>
                `}},{title:"Sizable",render(){return b`
                    <${B}
                        class=${t}
                        style="height: 100px; width: 200px;"
                        ${C(B,{text:"bigger"})}
                    ></${B}>
                `}}]}const i1=V({"toniq-button":$r(""),[B.hostClasses.secondary]:$r(B.hostClasses.secondary),[B.hostClasses.outline]:$r(B.hostClasses.outline)},(t,e)=>qr({title:t,examples:e,parent:F0})),a1=[F0,...Object.values(i1)],x=Wt()({tagName:"toniq-checkbox",events:{checkedChange:Ds()},hostClasses:{},cssVars:{uncheckedCheckboxColor:String(ve("accentSecondary","backgroundColor")),uncheckedLabelColor:String(ve("pagePrimary","foregroundColor")),checkedCheckboxColor:String(ve("accentPrimary","backgroundColor")),checkedCheckColor:String(ve("accentPrimary","foregroundColor")),checkedLabelColor:String(ve("pageInteraction","foregroundColor"))},styles:({cssVarValues:t,cssVarNames:e})=>g`
        :host {
            ${sn.boldParagraphFont};
            display: inline-flex;
            transition: color ${Be.interaction},
                background-color ${Be.interaction},
                opacity ${Be.interaction};
            border-radius: 8px;
        }

        button {
            ${V0};
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
            ${O0};
            transition: inherit;
            text-align: start;
            color: ${t.uncheckedLabelColor};
        }

        .checkbox.checked {
            background-color: ${t.checkedCheckboxColor};
            color: ${t.checkedCheckColor};
        }

        .label.checked {
            color: ${t.checkedLabelColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${t.uncheckedCheckboxColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
        }

        ${D0({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${t.checkedCheckColor};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,renderCallback:({inputs:t,dispatch:e,events:r})=>{const n=b`
            <span class="checkbox ${t.checked?"checked":""}">
                <${se}
                    class="check-mark ${Ve({hidden:!t.checked})}"
                    ${C(se,{icon:o1})}
                ></${se}>
            </span>
        `,o=b`
            <slot
                class=${Ve({label:!0,checked:t.checked})}
            >
                <span
                    class=${Ve({label:!0,checked:t.checked})}
                >
                    ${t.text}
                </span>
            </slot>
        `;return b`
            <button
                class="wrapper ${t.checked?"checked":""}"
                ${ee("click",()=>{const s=!t.checked;e(new r.checkedChange(s))})}
                role="checkbox"
                aria-checked=${t.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}}),U0=Re({title:"Toniq Checkbox",parent:Yt}),l1=qr({title:"toniq-checkbox",parent:U0,examples:[{title:"Unchecked",stateInit:{checked:!1},render({state:t,updateState:e}){return b`
                    <${x}
                        ${C(x,{checked:t.checked,text:"My Checkbox"})}
                        ${ee(x.events.checkedChange,r=>{e({checked:r.detail})})}
                    ></${x}>
                `}},{title:"Checked",stateInit:{checked:!0},render({state:t,updateState:e}){return b`
                    <${x}
                        ${C(x,{checked:t.checked,text:"My Checkbox"})}
                        ${ee(x.events.checkedChange,r=>{e({checked:r.detail})})}
                    ></${x}>
                `}},{title:"HTML Child",stateInit:{checked:!1},render({state:t,updateState:e}){return b`
                    <${x}
                        ${C(x,{checked:t.checked})}
                        ${ee(x.events.checkedChange,r=>{e({checked:r.detail})})}
                    >
                        With HTML Child
                    </${x}>
                `}},{title:"Custom CSS Vars",stateInit:{checked:!1},styles:g`
                :host {
                    ${x.cssVarNames.uncheckedCheckboxColor}: red;
                    ${x.cssVarNames.uncheckedLabelColor}: orange;
                    ${x.cssVarNames.checkedCheckboxColor}: green;
                    ${x.cssVarNames.checkedCheckColor}: blue;
                    ${x.cssVarNames.checkedLabelColor}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,render({state:t,updateState:e}){return b`
                    <${x}
                        ${C(x,{checked:t.checked,text:"wild colors"})}
                        ${ee(x.events.checkedChange,r=>{e({checked:r.detail})})}
                    ></${x}>
                    <${x}
                        ${C(x,{checked:!t.checked,text:`wild colors (${t.checked?"unchecked":"checked"})`})}
                        ${ee(x.events.checkedChange,r=>{e({checked:!r.detail})})}
                    ></${x}>
                `}},{title:"Multiple",stateInit:{checkedShort:!1,checkedLong:!1},styles:g`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,render({state:t,updateState:e}){return b`
                    <${x}
                        ${C(x,{checked:t.checkedShort,text:"Short"})}
                        ${ee(x.events.checkedChange,r=>{e({checkedShort:r.detail})})}
                    ></${x}>
                    <${x}
                        ${C(x,{checked:t.checkedLong,text:"With much longer checkbox label string"})}
                        ${ee(x.events.checkedChange,r=>{e({checkedLong:r.detail})})}
                    ></${x}>
                `}}]}),c1=[U0,l1],I=Wt()({tagName:"toniq-chip",hostClasses:{secondary:!1},styles:({hostClassSelectors:t})=>g`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${sn.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${we(D.accentPrimary)};
        }

        ${t.secondary} {
            ${we(D.accentSecondary)};
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?b`
                  <${se}
                      ${C(se,{icon:t.icon})}
                  ></${se}>
              `:"";return b`
            ${e}
            <slot>${t.text}</slot>
        `}}),G0=Re({title:"Toniq Chip",parent:Yt});function Co(t){return[{title:"Text",render(){return b`
                    <${I}
                        class=${t}
                        ${C(I,{text:"Toniq Chip Text"})}
                    ></${I}>
                `}},{title:"Text + Icon",render(){return b`
                    <${I}
                        class=${t}
                        ${C(I,{text:"Toniq Chip Text",icon:br})}
                    ></${I}>
                `}},{title:"HTML Child",render(){return b`
                    <${I} class=${t} ${C(I,{})}>
                        Slot in Use
                    </${I}>
                `}},{title:"HTML + Icon",render(){return b`
                    <${I}
                        class=${t}
                        ${C(I,{icon:br})}
                    >
                        Slot in Use
                    </${I}>
                `}},{title:"custom size",styles:g`
                ${I} {
                    width: 150px;
                    height: 24px;
                }
            `,render(){return b`
                    <${I}
                        class=${t}
                        ${C(I,{icon:br})}
                    >
                        Slot in Use
                    </${I}>
                `}}]}const d1=V({"toniq-chip":Co(""),[I.hostClasses.secondary]:Co(I.hostClasses.secondary)},(t,e)=>qr({title:t,examples:e,parent:G0})),h1=[G0,...Object.values(d1)],u1=Re({title:"Icons"}),f1=Re({title:"Styles"}),p1=[Yt,u1,f1,...a1,...c1,...h1];zt({tagName:"toniq-design-system-app",styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Mt} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return b`
            <${Mt}
                ${C(Mt,{baseRoute:"toniq-labs-design-system",entries:p1,themeColor:"#00D093"})}
            ></${Mt}>
        `}});
