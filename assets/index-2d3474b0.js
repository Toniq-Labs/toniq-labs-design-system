var va=Object.freeze,wa=Object.defineProperty;var m0=(e,t,r)=>t in e?wa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Hn=(e,t,r)=>(m0(e,typeof t!="symbol"?t+"":t,r),r);var Vn=(e,t)=>va(wa(e,"raw",{value:va(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function ki(e){return!!e}function v0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function yl(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>In(r).trim()).join(`
`))}function In(e){return e?e instanceof Error?e.message:En(e,"message")?String(e.message):String(e):""}function w0(e){return e instanceof Error?e:new Error(In(e))}function ba(e){return!!e&&typeof e=="object"}function b0(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const y0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function En(e,t){return e?y0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function $l(e,t){return e&&t.every(r=>En(e,r))}function Qr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function $0(e){return Array.isArray(e)?"array":typeof e}function An(e,t){return $0(e)===t}function ya({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const $a="Failed to compare objects using JSON.stringify";function xa(e,t,r){return ya({source:e,errorHandler(n){if(r)return"";throw n}})===ya({source:t,errorHandler(n){if(r)return"";throw n}})}function We(e,t,r={}){try{return e===t?!0:ba(e)&&ba(t)?xa(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>We(e[o],t[o])):!1:xa(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=w0(n);throw o.message.startsWith($a)||(o.message=`${$a}: ${o.message}`),o}}function x0(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function k0(e){return Qr(e).filter(t=>isNaN(Number(t)))}function S0(e){return k0(e).map(r=>e[r])}function C0(e,t){return S0(t).includes(e)}function T0(e,t){return Qr(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function I0(e,t){return T0(e,r=>!t.includes(r))}function en(e,t){let r=!1;const n=Qr(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Qr(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function E0(e){const t=xl();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function xl(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${xl.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function ka(e,t){try{return A0(e,t),!0}catch{return!1}}function A0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function M0(e,t){return En(e,"entryType")&&e.entryType===t}var oe;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(oe||(oe={}));function yt(e,t){return e.controlType===t}var R;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(R||(R={}));const kl=Symbol("any-type"),P0={[R.Checkbox]:!1,[R.Color]:"",[R.Dropdown]:"",[R.Hidden]:kl,[R.Number]:0,[R.Text]:""};function B0(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=P0[o.controlType];i!==kl&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Si(e,t){const r=tn(e.title);return e.parent?[...Si(e.parent,!1),tn(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function tn(e){return v0(e).toLowerCase().replaceAll(/\s/g,"-")}function _0({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Z(e){const t={...e,entryType:oe.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:oe.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ki)};r.add(n.title),t.elementExamples[tn(o.title)]=o}}),t}var _e;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(_e||(_e={}));function L0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Sl(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Sl.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function R0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}async function Bo(e=1){const t=Sl();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Cl=globalThis.crypto;function N0({min:e,max:t}){const{min:r,max:n}=L0({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do Cl.getRandomValues(s),l=s.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%o}function Tl(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Cl.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function z0(e){return D0(e,1)}async function D0(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{R0(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Zt(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=e=>(...t)=>({_$litDirective$:e,values:t});let He=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qn;const rn=window,_t=rn.trustedTypes,Sa=_t?_t.createPolicy("lit-html",{createHTML:e=>e}):void 0,nn="$lit$",je=`lit$${(Math.random()+"").slice(9)}$`,Ci="?"+je,O0=`<${Ci}>`,pt=document,tr=()=>pt.createComment(""),rr=e=>e===null||typeof e!="object"&&typeof e!="function",Il=Array.isArray,El=e=>Il(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Zn=`[ 	
\f\r]`,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ca=/-->/g,Ta=/>/g,it=RegExp(`>|${Zn}(?:([^\\s"'>=/]+)(${Zn}*=${Zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ia=/'/g,Ea=/"/g,Al=/^(?:script|style|textarea|title)$/i,j0=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),F0=j0(1),ve=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Aa=new WeakMap,dt=pt.createTreeWalker(pt,129,null,!1);function Ml(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sa!==void 0?Sa.createHTML(t):t}const Pl=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=jt;for(let s=0;s<r;s++){const l=e[s];let c,d,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===jt?d[1]==="!--"?a=Ca:d[1]!==void 0?a=Ta:d[2]!==void 0?(Al.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=it):d[3]!==void 0&&(a=it):a===it?d[0]===">"?(a=o??jt,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?it:d[3]==='"'?Ea:Ia):a===Ea||a===Ia?a=it:a===Ca||a===Ta?a=jt:(a=it,o=void 0);const m=a===it&&e[s+1].startsWith("/>")?" ":"";i+=a===jt?l+O0:u>=0?(n.push(c),l.slice(0,u)+nn+l.slice(u)+je+m):l+je+(u===-2?(n.push(void 0),s):m)}return[Ml(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class nr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=Pl(t,r);if(this.el=nr.createElement(c,n),dt.currentNode=this.el.content,r===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(o=dt.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const f of o.getAttributeNames())if(f.endsWith(nn)||f.startsWith(je)){const m=d[a++];if(u.push(f),m!==void 0){const p=o.getAttribute(m.toLowerCase()+nn).split(je),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:v[2],strings:p,ctor:v[1]==="."?_l:v[1]==="?"?Ll:v[1]==="@"?Rl:vr})}else l.push({type:6,index:i})}for(const f of u)o.removeAttribute(f)}if(Al.test(o.tagName)){const u=o.textContent.split(je),f=u.length-1;if(f>0){o.textContent=_t?_t.emptyScript:"";for(let m=0;m<f;m++)o.append(u[m],tr()),dt.nextNode(),l.push({type:2,index:++i});o.append(u[f],tr())}}}else if(o.nodeType===8)if(o.data===Ci)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(je,u+1))!==-1;)l.push({type:7,index:i}),u+=je.length-1}i++}}static createElement(t,r){const n=pt.createElement("template");return n.innerHTML=t,n}}function gt(e,t,r=e,n){var o,i,a,s;if(t===ve)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=rr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=gt(e,l._$AS(e,t.values),l,n)),t}class Bl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:pt).importNode(n,!0);dt.currentNode=i;let a=dt.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new Nt(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new Nl(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=dt.nextNode(),s++)}return dt.currentNode=pt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Nt{constructor(t,r,n,o){var i;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=gt(this,t,r),rr(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==ve&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):El(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&rr(this._$AH)?this._$AA.nextSibling.data=t:this.$(pt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=nr.createElement(Ml(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new Bl(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=Aa.get(t.strings);return r===void 0&&Aa.set(t.strings,r=new nr(t)),r}T(t){Il(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Nt(this.k(tr()),this.k(tr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class vr{constructor(t,r,n,o,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=gt(this,t,r,0),a=!rr(t)||t!==this._$AH&&t!==ve,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=gt(this,s[n+l],r,l),c===ve&&(c=this._$AH[l]),a||(a=!rr(c)||c!==this._$AH[l]),c===Y?t=Y:t!==Y&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _l extends vr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}const H0=_t?_t.emptyScript:"";class Ll extends vr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,H0):this.element.removeAttribute(this.name)}}class Rl extends vr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=gt(this,t,r,0))!==null&&n!==void 0?n:Y)===ve)return;const o=this._$AH,i=t===Y&&o!==Y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==Y&&(o===Y||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Nl{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}}const V0={O:nn,P:je,A:Ci,C:1,M:Pl,L:Bl,R:El,D:gt,I:Nt,V:vr,H:Ll,N:Rl,U:_l,F:Nl},Ma=rn.litHtmlPolyfillSupport;Ma==null||Ma(nr,Nt),((qn=rn.litHtmlVersions)!==null&&qn!==void 0?qn:rn.litHtmlVersions=[]).push("2.8.0");const q0=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new Nt(t.insertBefore(tr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Z0}=V0,Pa=()=>document.createComment(""),Ft=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Pa(),i),s=o.insertBefore(Pa(),i);r=new Z0(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},at=(e,t,r=e)=>(e._$AI(t,r),e),U0={},W0=(e,t=U0)=>e._$AH=t,G0=e=>e._$AH,Un=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=Fe(class extends He{constructor(e){var t;if(super(e),e.type!==mr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return ve}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ba=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Y0=Fe(class extends He{constructor(e){if(super(e),e.type!==mr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=G0(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let d,u,f=0,m=i.length-1,p=0,v=a.length-1;for(;f<=m&&p<=v;)if(i[f]===null)f++;else if(i[m]===null)m--;else if(l[f]===s[p])c[p]=at(i[f],a[p]),f++,p++;else if(l[m]===s[v])c[v]=at(i[m],a[v]),m--,v--;else if(l[f]===s[v])c[v]=at(i[f],a[v]),Ft(e,c[v+1],i[f]),f++,v--;else if(l[m]===s[p])c[p]=at(i[m],a[p]),Ft(e,i[f],i[m]),m--,p++;else if(d===void 0&&(d=Ba(s,p,v),u=Ba(l,f,m)),d.has(l[f]))if(d.has(l[m])){const w=u.get(s[p]),x=w!==void 0?i[w]:null;if(x===null){const S=Ft(e,i[f]);at(S,a[p]),c[p]=S}else c[p]=at(x,a[p]),Ft(e,i[f],x),i[w]=null;p++}else Un(i[m]),m--;else Un(i[f]),f++;for(;p<=v;){const w=Ft(e,c[v+1]);at(w,a[p]),c[p++]=w}for(;f<=m;){const w=i[f++];w!==null&&Un(w)}return this.ut=s,W0(e,c),ve}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _o=class extends He{constructor(t){if(super(t),this.et=Y,t.type!==mr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Y||t==null)return this.ft=void 0,this.et=t;if(t===ve)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};_o.directiveName="unsafeHTML",_o.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lo=class extends _o{};Lo.directiveName="unsafeSVG",Lo.resultType=2;const J0=Fe(Lo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X0(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=window,Ti=Vr.ShadowRoot&&(Vr.ShadyCSS===void 0||Vr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),_a=new WeakMap;let zl=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ti&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=_a.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&_a.set(r,t))}return t}toString(){return this.cssText}};const B=e=>new zl(typeof e=="string"?e:e+"",void 0,Ii),Yt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new zl(r,e,Ii)},K0=(e,t)=>{Ti?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Vr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},La=Ti?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return B(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn;const on=window,Ra=on.trustedTypes,Q0=Ra?Ra.emptyScript:"",Na=on.reactiveElementPolyfillSupport,Ro={toAttribute(e,t){switch(t){case Boolean:e=e?Q0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Dl=(e,t)=>t!==e&&(t==t||e==e),Gn={attribute:!0,type:String,converter:Ro,reflect:!1,hasChanged:Dl},No="finalized";class St extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Gn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Gn}static finalize(){if(this.hasOwnProperty(No))return!1;this[No]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(La(o))}else t!==void 0&&r.push(La(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return K0(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Gn){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ro).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Ro;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Dl)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}St[No]=!0,St.elementProperties=new Map,St.elementStyles=[],St.shadowRootOptions={mode:"open"},Na==null||Na({ReactiveElement:St}),((Wn=on.reactiveElementVersions)!==null&&Wn!==void 0?Wn:on.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yn,Jn;class Jt extends St{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=q0(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ve}}Jt.finalized=!0,Jt._$litElement$=!0,(Yn=globalThis.litElementHydrateSupport)===null||Yn===void 0||Yn.call(globalThis,{LitElement:Jt});const za=globalThis.litElementPolyfillSupport;za==null||za({LitElement:Jt});((Jn=globalThis.litElementVersions)!==null&&Jn!==void 0?Jn:globalThis.litElementVersions=[]).push("3.3.3");var eu=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,f=!1,m=r.length-1;m>=0;m--){var p={};for(var v in n)p[v]=v==="access"?{}:n[v];for(var v in n.access)p.access[v]=n.access[v];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(x||null))};var w=(0,r[m])(s==="accessor"?{get:d.get,set:d.set}:d[l],p);if(s==="accessor"){if(w===void 0)continue;if(w===null||typeof w!="object")throw new TypeError("Object expected");(u=a(w.get))&&(d.get=u),(u=a(w.set))&&(d.set=u),(u=a(w.init))&&o.unshift(u)}else(u=a(w))&&(s==="field"?o.unshift(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),f=!0},tu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},ru=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function nu(){function e(t,r){return t}return e}let Ol=(()=>{let e=[nu()],t,r=[],n,o=Jt;return n=class extends o{},ru(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;eu(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),tu(n,r)})(),n})();function ou(e){return!!e}function iu(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const au={capitalizeFirstLetter:!1};function su(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function lu(e,t){return t.capitalizeFirstLetter?su(e):e}function cu(e,t=au){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return lu(n,t)}function jl(e){return e?e instanceof Error?e.message:Mn(e,"message")?String(e.message):String(e):""}function Ei(e){return e instanceof Error?e:new Error(jl(e))}function zo(e){return!!e&&typeof e=="object"}const du=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Mn(e,t){return e?du.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function mt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Da({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Oa="Failed to compare objects using JSON.stringify";function ja(e,t,r){return Da({source:e,errorHandler(n){if(r)return"";throw n}})===Da({source:t,errorHandler(n){if(r)return"";throw n}})}function Fl(e,t,r={}){try{return e===t?!0:zo(e)&&zo(t)?ja(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Fl(e[o],t[o])):!1:ja(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ei(n);throw o.message.startsWith(Oa)||(o.message=`${Oa}: ${o.message}`),o}}function Hl(e,t){let r=!1;const n=mt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(mt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function uu(e){return!!(Mn(e,"then")&&typeof e.then=="function")}function Do(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Do.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Fa(e){return e!==e.toUpperCase()}function fu(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=Fa(a)||Fa(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function hu(e){return!!e&&typeof e=="object"}function Ha(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function pu(e){return Array.isArray(e)?"array":typeof e}function gu(e,t){return pu(e)===t}function mu(e,t){let r=!1;const n=Ha(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ha(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function rt(e){if(hu(e))return mu(e,(r,n)=>{if(!gu(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(fu(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?B(r):r.startsWith("-")?Yt`-${B(r)}`:Yt`--${B(r)}`;return{name:a,value:Yt`var(${a}, ${B(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${rt.name}' function.`)}function Oo({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vu=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},wu=(e,t,r)=>{t.constructor.createProperty(r,e)};function Vl(e){return(t,r)=>r!==void 0?wu(e,t,r):vu(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xn;((Xn=window.HTMLSlotElement)===null||Xn===void 0?void 0:Xn.prototype.assignedElements)!=null;const Ai=Symbol("key for ignoring inputs not having been set yet"),bu={[Ai]:!0,allowPolymorphicState:!1};function ql(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Ol?!0:ql(r)}function Zl(e,t){const r=e.instanceState;mt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&mt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),yu(e)}function yu(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Va(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class $u extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Mi(){return e=>{var t;return t=class extends $u{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function U(){return Mi()}function xu(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Mi()(r);return t[r]=n,t},{}):{}}const ku="_elementVirStateSetup";function Su(e){return zo(e)?ku in e:!1}function Cu(e,t){return e.includes(t)}function wr(e){return!!e&&typeof e=="object"}const Tu=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function qr(e,t){return e?Tu.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function an(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function jo(e){return Array.isArray(e)?"array":typeof e}function Et(e,t){return jo(e)===t}function Iu(e,t){let r=!1;const n=an(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(an(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Eu(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return jo(e)===jo(t)&&r}const Ul=Symbol("and"),Wl=Symbol("or"),Gl=Symbol("exact"),Yl=Symbol("enum"),Pi=Symbol("unknown"),Jl="__vir__shape__definition__key__do__not__use__in__actual__objects";function Xl(e){return qr(e,Jl)}const Kl="__vir__shape__specifier__key__do__not__use__in__actual__objects",Au=[Ul,Wl,Gl,Yl,Pi];function Mu(){return Pu([],Pi)}function Pn(e){return br(e,Wl)}function Bi(e){return br(e,Ul)}function _i(e){return br(e,Gl)}function Li(e){return br(e,Yl)}function Ri(e){return br(e,Pi)}function br(e,t){const r=Bn(e);return!!r&&r.specifierType===t}function Pu(e,t){return{[Kl]:!0,specifierType:t,parts:e}}function Zr(e,t){const r=Bn(t);if(r){if(Bi(r))return r.parts.every(n=>Zr(e,n));if(Pn(r))return r.parts.some(n=>Zr(e,n));if(_i(r))return wr(e)?Zr(e,r.parts[0]):e===r.parts[0];if(Li(r))return Object.values(r.parts[0]).some(n=>n===e);if(Ri(r))return!0}return Eu(e,t)}function Bn(e){if(wr(e)&&qr(e,Kl)){if(!qr(e,"parts")||!Et(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!qr(e,"specifierType")||!Cu(Au,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Fo(e){return Ho(e)}function Ho(e){const t=Bn(e);if(t){if(Pn(t)||_i(t))return Ho(t.parts[0]);if(Bi(t))return t.parts.reduce((r,n)=>Object.assign(r,Ho(n)),{});if(Li(t))return Object.values(t.parts[0])[0];if(Ri(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Xl(e)?Fo(e.shape):e instanceof RegExp||Et(e,"array")?e:wr(e)?Iu(e,(r,n)=>Fo(n)):e}function Ql(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Fo(e),[Jl]:!0}}class Ie extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Bu(e,t,r={}){try{return _u(e,t,r),!0}catch{return!1}}function _u(e,t,r={}){lt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function ec(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function lt(e,t,r,n){if(Ri(t))return!0;if(Xl(t))return lt(e,t.shape,r,n);const o=ec(r);if(Bn(e))throw new Ie(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Zr(e,t))throw new Ie(`Subject does not match shape definition at key ${o}`);if(Et(t,"function"))return Et(e,"function");if(wr(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Pn(t))l=t.parts.some(c=>{try{const d=lt(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof Ie)return!1;throw d}});else if(Bi(t))l=t.parts.every(c=>{try{const d=lt(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof Ie)return!1;throw d}});else if(_i(t)){const c=lt(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(Li(t))throw new Ie(`Cannot compare an enum specifier to an object at ${o}`);if(Et(t,"array")&&Et(a,"array"))l=a.every((c,d)=>{const u=t.some(f=>{try{return lt(c,f,[...r,d],n),!0}catch(m){if(m instanceof Ie)return!1;throw m}});return s[d]=u,u});else{const c=Lu({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(u=>!s[u]).join(",")}`;throw new Ie(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new Ie(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Lu({keys:e,options:t,shape:r,subject:n}){const o=ec(e),i={};if(wr(r)){const a=new Set(an(n)),s=new Set(an(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Ie(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],d=Pn(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!u)throw new Ie(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];lt(c,d,[...e,l],t),i[l]=!0})}else throw new Ie(`shape definition at ${o} was not an object.`);return i}const Ru=Ql({addListener(){return!1},removeListener(){return!1},value:Mu()});function Kn(e){return Bu(e,Ru,{allowExtraKeys:!0})}function Nu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function qa(e,t){const r=e;function n(a){t?Nu(a,e,e.tagName):Vl()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=Su(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function u(p){a[s]=p,r[s]=p}const f=e.observablePropertyListenerMap[s];if(d!==c&&Kn(d)&&(f!=null&&f.length)&&d.removeListener(f),Kn(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var m=p;e.observablePropertyListenerMap[s]=p,c.addListener(p)}else Kn(d)&&(e.observablePropertyListenerMap[s]=void 0);return u(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function zu(e){return e?Hl(e,t=>t):{}}function Du({hostClassNames:e,cssVars:t}){return{hostClasses:Hl(e,(r,n)=>({name:B(n),selector:B(`:host(.${n})`)})),cssVars:t}}function Ou({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&mt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function ju(e,t){function r(o){mt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Fu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function _n(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...bu,...e.options},n=xu(e.events),o=zu(e.hostClasses);e.hostClasses&&Va(e.tagName,e.hostClasses),e.cssVars&&Va(e.tagName,e.cssVars);const i=e.cssVars?rt(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Du({hostClassNames:o,cssVars:i})):e.styles||Yt``,s=e.renderCallback;function l(...[d]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:d}}const c=(t=class extends Ol{createRenderParams(){return ju(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{ql(this)&&!this.haveInputsBeenSet&&!r[Ai]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${_n.name}' to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=s(d);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ou({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},u}catch(d){const u=Ei(d);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,this.lastRenderError=u,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();if(e.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();if(e.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(d){Zl(this,d)}constructor(){var u;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=qa(this,!1),this.instanceState=qa(this,!((u=e.options)!=null&&u.allowPolymorphicState));const d=e.stateInitStatic||{};mt(d).forEach(f=>{Vl()(this,f),this.instanceState[f]=d[f]}),this.definition=c}},Fu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:cu(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Ni(){return e=>_n({...e,options:{[Ai]:!1,...e.options}})}function zi(e,t){return or(e,t),e.element}function Hu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function or(e,t){const r=Hu(e),n=r?`: in ${r}`:"";if(e.type!==mr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Vu(e,t){return t?Za(e,t):Za(void 0,e)}const Za=Fe(class extends He{constructor(e){super(e),this.element=zi(e,"assign")}render(e,t){return Zl(this.element,t),ve}});function qu(e,t){return e===t}function Zu(e,t=qu){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const Qn=Symbol("not set");function Uu(e){let t=Qn,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=Do();const i=Zu(o.promise);function a(){o=Do(),i.setValue(o.promise)}function s(p){o.resolve(p),i.setValue(p)}function l(p){o.reject(p),i.setValue(p)}function c(p){p!==r&&(r=p,o.isSettled()&&a(),p.then(v=>{r===p&&s(v)}).catch(v=>{r===p&&(o.promise.catch(()=>{}),l(Ei(v)))}))}function d(p,v){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const w={...p},x={...v};if(t===Qn||!Fl(w,t,{ignoreNonSerializableProperties:!0})){t=w;const S=n(t,x);c(S)}}function u(p,v){t=Qn,d(p,v)}const f=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return f instanceof Promise?c(f):s(f),Object.assign(i,{setNewPromise(p){c(p)},setResolvedValue(p){p!==i.value&&(o.isSettled()&&a(),o.resolve(p),s(p))},updateTrigger:n?d:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?u:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function Wu(...e){return{_elementVirStateSetup(){return Uu(...e)}}}function Gu(e){const t=Fe(class extends He{constructor(r){super(r),this.element=zi(r,"testId")}render(r){return this.element.setAttribute(e,r),ve}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function C(e,t){return Yu(e,t)}const Yu=Fe(class extends He{constructor(e){super(e),this.element=zi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ve}}),Ua="onDomCreated",sn=Fe(class extends He{constructor(e){super(e),or(e,Ua)}update(e,[t]){or(e,Ua);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),eo="onResize",ir=Fe(class extends He{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),or(e,eo)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${eo} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){or(e,eo),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Wa(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):jl(o):uu(o)?t:r?r(o):o}function de(e,t,r){return X0(e,()=>t,()=>r)}const{attributeDirective:Ju,attributeSelector:M5,attributeName:P5}=Gu("data-test-id");function Di(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Ni()(r(n))),defineElementNoInputs:n=>(t(n),_n(r(n)))}}function Xu(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Vo(e){return Mn(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Oi(e){return Mn(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function tc(e){return e.map(t=>Vo(t)?t.definition:t).filter(t=>Oi(t))}const rc=new WeakMap;function Ku(e,t){var o;const r=tc(t);return(o=nc(rc,[e,...r]).value)==null?void 0:o.template}function Qu(e,t,r){const n=tc(t);return ic(rc,[e,...n],r)}function nc(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=oc(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?nc(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function oc(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ic(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=oc(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),ic(l,t,r,n+1)}const e1=new WeakMap;function ac(e,t,r){const n=Ku(e,t),o=n??r();if(!n){const s=Qu(e,t,o);if(s.result)e1.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Xu(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function sc(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const u=o.length-1,f=o[u],m=d-1,p=t[m];n&&n(c);let v,w=[];if(typeof f=="string"&&(v=r(f,c,p),v)){o[u]=f+v.replacement,a.push(m);const S=v.getExtraValues;w=S?S(p):[],w.length&&S?(o[u]+=" ",w.forEach((M,N)=>{N&&o.push(" ")}),s.push(M=>{const N=M[m],ee=S(N);return{index:m,values:ee}}),o.push(c)):o[u]+=c}v||o.push(c);const x=e.raw[d];v?(i[u]=i[u]+v.replacement+x,w.length&&w.forEach(()=>{i.push("")})):i.push(x)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function t1(...[e,t,r]){if(Oi(r))return{replacement:r.tagName,getExtraValues:void 0}}function r1(e,t){return sc(e,t,t1)}function g(e,...t){const r=ac(e,t,()=>r1(e,t));return Yt(r.strings,...r.values)}function n1(...[e,t,r]){const n=Vo(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=Oi(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const d=Vo(c)?c.inputs:void 0;return[o&&d?Vu(d):void 0].filter(ou)}}}function o1(e){}function i1(e){return sc(e.strings,e.values,n1,o1)}function h(e,...t){const r=F0(e,...t),n=ac(e,t,()=>i1(r));return{...r,strings:n.strings,values:n.values}}function ut(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=a1(a,n[s]);return`${a}${l}`});return iu(i.join(""))}function a1(e,t){return t._$litType$!=null||t._$litDirective$!=null?ut(t):Array.isArray(t)?t.map(n=>ut(n)).join(""):e.endsWith("=")?`"${t}"`:t}const s1={[oe.ElementExample]:()=>[],[oe.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...B0(e.controls,e.title)].filter(ki),[oe.Root]:()=>[]},ln="_isBookTreeNode",lc=new Map;function l1(e){return lc.get(e)}function c1(e,t){x0(lc,e,()=>t)}function Mt(e,t){return!!(cc(e)&&e.entry.entryType===t)}function cc(e){return!!($l(e,[ln,"entry"])&&e[ln])}function d1(){return{[ln]:!0,entry:{entryType:oe.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function u1({entries:e,debug:t}){const r=l1(e);if(r)return r;const n=d1();e.forEach(a=>ji({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=dc(n),i={tree:n,flattenedNodes:o};return c1(e,i),t&&console.info("element-book tree:",n),i}function f1(e,t,r){if(!t.parent)return e;const n=qo(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ji({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=qo(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Si(t,!1)}`);return o}function ji({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=s1[t.entryType](t);t.errors.push(...o);const i=f1(e,t,r),a=tn(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[ln]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,M0(t,oe.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>ji({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function qo(e,t){const r=cc(e)?e.fullUrlBreadcrumbs.slice(0,-1):Si(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function dc(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>dc(o));return[e,...r].flat()}function Fi(e,t){return Hi(e,["",...t],void 0)}function Hi(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Hi(i,n,r);return{...e.controls,...a}}function h1(e,t,r){const n=b0(e);return Hi(n,["",...t],r),n}function uc(e,t){const r=(t==null?void 0:t.controls)||(Mt(e,oe.Page)?en(e.entry.controls,(o,i)=>i.initValue):{});return{children:en(e.children,(o,i)=>{var a;return uc(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function p1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const g1=Tl(32);function Ur(e){return e.join(g1)}function fc(e){if(!e.length)return[];const t=Ur(e),r=fc(e.slice(0,-1));return[t,...r]}const m1=["error","errors"];function v1(e){return m1.includes(e)}function w1({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Ur(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&v1(t),a=Ur(o.fullUrlBreadcrumbs);if(p1({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=fc(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Ur(o.fullUrlBreadcrumbs),a=r[i];if(!An(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var ce;(function(e){e.Search="search",e.Book="book"})(ce||(ce={}));function Zo(e){return e[0]===ce.Book?"":e[1]?decodeURIComponent(e[1]):""}const Lt={hash:void 0,paths:[ce.Book],search:void 0},b1=0;function Vi(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==b1)}class Ln extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Ga extends Ln{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ar="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const y1=globalThis.history.pushState;function Ya(...e){const t=y1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ar)),t}const $1=globalThis.history.replaceState;function Ja(...e){const t=$1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ar)),t}function x1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Ya)throw new Ga("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ja)throw new Ga("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Ya,globalThis.history.replaceState=Ja,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ar))})}}function qi(e){return!!e}function k1(e){return e?e instanceof Error?e.message:cn(e,"message")?String(e.message):String(e):""}function S1(e){return!!e&&typeof e=="object"}const C1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function cn(e,t){return e?C1.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Xa(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function hc(e,t,r=!1,n={}){const o=Xa(e),i=new Set(Xa(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!cn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||pc(l,c,s,r,n[a]??{})})}function pc(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{cn(t,"constructor")&&(!cn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{pc(l,u,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${k1(f)}`)}}).filter(qi).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):S1(t)&&hc(e,t,n,o)}function T1(e){return Array.isArray(e)?"array":typeof e}function I1(e,t){return T1(e)===t}function E1(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(qi);return t.length?`?${t.join("&")}`:""}function A1(e,t){const r=I1(e,"string")?new URL(e):e,n=Array.from(r.searchParams.entries()),o=Object.fromEntries(n);return t&&hc(o,t),o}function M1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?A1(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function gc(e){return e.replace(/(?:^\/|\/+$)/g,"")}function mc({routeBase:e,windowPath:t}){if(!e)return"";const r=gc(e);if(vc({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?mc({routeBase:n,windowPath:t}):""}function vc({routeBase:e,windowPath:t}){const r=gc(e);return r?t.startsWith(`/${r}`):!1}class P1 extends Ln{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function wc(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Ka=6;function Qa(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Ka)throw new P1(`Route sanitization depth has exceed the max of ${Ka} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(wc(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class to extends Ln{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function B1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new to(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new to(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new to(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function _1(e,t,r=!1){const n=bc(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function bc(e,t){var s;const r=vc({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?E1(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(qi).join("/")}${n}${i}`}function L1(e={}){B1(e),x1();const t=e.routeBase?mc({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Qa(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&wc(l,d)))return _1(d,t,a)},createRoutesUrl(i){return bc(i,t)},getCurrentRawRoutes(){return M1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Ln(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(ar,n),r=!0),i&&Qa(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(ar,n),r=!1),a},sanitizationDepth:0};return o}function R1(e){return L1({routeBase:e,routeSanitizer(t){return{paths:N1(t.paths),hash:void 0,search:void 0}}})}function N1(e){const t=e[0];if(C0(t,ce)){if(t===ce.Book)return[ce.Book,...e.slice(1)];if(t===ce.Search)return e[1]?[t,e[1]]:[ce.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Lt.paths}const D=rt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),z1={nav:{hover:{background:D["element-book-nav-hover-background-color"],foreground:D["element-book-nav-hover-foreground-color"]},active:{background:D["element-book-nav-active-background-color"],foreground:D["element-book-nav-active-foreground-color"]},selected:{background:D["element-book-nav-selected-background-color"],foreground:D["element-book-nav-selected-foreground-color"]}},accent:{icon:D["element-book-accent-icon-color"]},page:{background:D["element-book-page-background-color"],backgroundFaint1:D["element-book-page-background-faint-level-1-color"],backgroundFaint2:D["element-book-page-background-faint-level-2-color"],foreground:D["element-book-page-foreground-color"],foregroundFaint1:D["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:D["element-book-page-foreground-faint-level-2-color"]}};function D1(e,t){yc(e,t,z1)}function Uo(e){return En(e,"_$cssResult$")}function es(e){return $l(e,["name","value","default"])&&An(e.default,"string")&&Uo(e.name)&&Uo(e.value)}function yc(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Uo(o)){if(!es(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Oo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(es(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);yc(e,o,i)}})}function J(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function yr(e){return Ye(e)==="string"}function Ye(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function dn(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function $c(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function xc(e){return e[e.length-1]}function un(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function kc(e,t,r){return(r-e)/(t-e)}function Zi(e,t,r){return un(t[0],t[1],kc(e[0],e[1],r))}function Sc(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var O1=Object.freeze({__proto__:null,interpolate:un,interpolateInv:kc,isString:yr,last:xc,mapRange:Zi,multiplyMatrices:J,parseCoordGrammar:Sc,parseFunction:$c,toPrecision:dn,type:Ye});class j1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Xe=new j1;var Le={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Me={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Wo(e){return Array.isArray(e)?e:Me[e]}function fn(e,t,r,n={}){if(e=Wo(e),t=Wo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Xe.run("chromatic-adaptation-start",o),o.M||(o.W1===Me.D65&&o.W2===Me.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Me.D50&&o.W2===Me.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Xe.run("chromatic-adaptation-end",o),o.M)return J(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const F1=75e-6,he=class he{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?he.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Wo(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:H1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Xe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=F1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ts(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=ts(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=he.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=he.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(he.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof he)return t;if(Ye(t)==="string"){let o=he.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return he.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Ye(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=he.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ye(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=he.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Hn(he,"registry",{}),Hn(he,"DEFAULT_FORMAT",{type:"functions",name:"color"});let A=he;function H1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function ts(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Sc(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Zi(s,l,i)),i=dn(i,o),c&&(i+=c),i})}return e}var xe=new A({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ue extends A{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=xe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=J(t.toXYZ_M,r);return this.white!==this.base.white&&(n=fn(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=fn(this.base.white,this.white,r),J(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Cc(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Xe.run("parse-start",r),r.color)return r.color;if(r.parsed=$c(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of A.all){let m=f.getFormat("color");if(m&&(c===m.id||(o=m.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((v,w)=>r.parsed.args[w]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:d}}}let u="";if(c in A.registry){let f=(s=(a=(i=A.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;f&&(u=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(u||"Missing a plugin?"))}else for(let c of A.all){let d=c.getFormat(l);if(d&&d.type==="function"){let u=1;(d.lastAlpha||xc(r.parsed.args).alpha)&&(u=r.parsed.args.pop());let f=r.parsed.args,m;return d.coordGrammar&&(m=Object.entries(c.coords).map(([p,v],w)=>{var se;let x=d.coordGrammar[w],S=(se=f[w])==null?void 0:se.type,M=x.find(te=>te==S);if(!M){let te=v.name||p;throw new TypeError(`${S} not allowed for ${te} in ${l}()`)}let N=M.range;S==="<percentage>"&&(N||(N=[0,1]));let ee=v.range||v.refRange;return N&&ee&&(f[w]=Zi(N,ee,f[w])),M})),t&&Object.assign(t,{formatId:d.name,types:m}),{spaceId:c.id,coords:f,alpha:u}}}}else for(let l of A.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let u=d.parse(r.str);if(u)return u.alpha??(u.alpha=1),t&&(t.formatId=c),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function j(e){if(!e)throw new TypeError("Empty color reference");yr(e)&&(e=Cc(e));let t=e.space||e.spaceId;return t instanceof A||(e.space=A.get(t)),e.alpha===void 0&&(e.alpha=1),e}function $r(e,t){return t=A.get(t),t.from(e)}function ke(e,t){let{space:r,index:n}=A.resolveCoord(t,e.space);return $r(e,r)[n]}function Tc(e,t,r){return t=A.get(t),e.coords=t.to(e.space,r),e}function Ke(e,t,r){if(e=j(e),arguments.length===2&&Ye(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ke(e,o,n[o])}else{typeof r=="function"&&(r=r(ke(e,t)));let{space:n,index:o}=A.resolveCoord(t,e.space),i=$r(e,n);i[o]=r,Tc(e,n,i)}return e}var Ui=new A({id:"xyz-d50",name:"XYZ D50",white:"D50",base:xe,fromBase:e=>fn(xe.white,"D50",e),toBase:e=>fn("D50",xe.white,e),formats:{color:{}}});const V1=216/24389,rs=24/116,Tr=24389/27;let ro=Me.D50;var ge=new A({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ro,base:Ui,fromBase(e){let r=e.map((n,o)=>n/ro[o]).map(n=>n>V1?Math.cbrt(n):(Tr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>rs?Math.pow(t[0],3):(116*t[0]-16)/Tr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Tr,t[2]>rs?Math.pow(t[2],3):(116*t[2]-16)/Tr].map((n,o)=>n*ro[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Rn(e){return(e%360+360)%360}function q1(e,t){if(e==="raw")return t;let[r,n]=t.map(Rn),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var sr=new A({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ge,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Rn(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ns=25**7,hn=Math.PI,os=180/hn,$t=hn/180;function Go(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=ge.from(e),l=sr.from(ge,[i,a,s])[1],[c,d,u]=ge.from(t),f=sr.from(ge,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,v=.5*(1-Math.sqrt(p/(p+ns))),w=(1+v)*a,x=(1+v)*d,S=Math.sqrt(w**2+s**2),M=Math.sqrt(x**2+u**2),N=w===0&&s===0?0:Math.atan2(s,w),ee=x===0&&u===0?0:Math.atan2(u,x);N<0&&(N+=2*hn),ee<0&&(ee+=2*hn),N*=os,ee*=os;let se=c-i,te=M-S,H=ee-N,re=N+ee,zt=Math.abs(H),we;S*M===0?we=0:zt<=180?we=H:H>180?we=H-360:H<-180?we=H+360:console.log("the unthinkable has happened");let bt=2*Math.sqrt(M*S)*Math.sin(we*$t/2),Dt=(i+c)/2,Fn=(S+M)/2,ha=Math.pow(Fn,7),Ne;S*M===0?Ne=re:zt<=180?Ne=re/2:re<360?Ne=(re+360)/2:Ne=(re-360)/2;let pa=(Dt-50)**2,f0=1+.015*pa/Math.sqrt(20+pa),ga=1+.045*Fn,Ot=1;Ot-=.17*Math.cos((Ne-30)*$t),Ot+=.24*Math.cos(2*Ne*$t),Ot+=.32*Math.cos((3*Ne+6)*$t),Ot-=.2*Math.cos((4*Ne-63)*$t);let ma=1+.015*Fn*Ot,h0=30*Math.exp(-1*((Ne-275)/25)**2),p0=2*Math.sqrt(ha/(ha+ns)),g0=-1*Math.sin(2*h0*$t)*p0,Cr=(se/(r*f0))**2;return Cr+=(te/(n*ga))**2,Cr+=(bt/(o*ma))**2,Cr+=g0*(te/(n*ga))*(bt/(o*ma)),Math.sqrt(Cr)}const Z1=75e-6;function Xt(e,t=e.space,{epsilon:r=Z1}={}){e=j(e),t=A.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Qe(e,{method:t=Le.gamut_mapping,space:r=e.space}={}){if(yr(arguments[1])&&(r=arguments[1]),r=A.get(r),Xt(e,r,{epsilon:0}))return j(e);let n=$e(e,r);if(t!=="clip"&&!Xt(e,r)){let o=Qe(lr(n),{method:"clip",space:r});if(Go(e,o)>2){let i=A.resolveCoord(t),a=i.space,s=i.id,l=$e(n,a),d=(i.range||i.refRange)[0],u=.01,f=d,m=ke(l,s);for(;m-f>u;){let p=lr(l);p=Qe(p,{space:r,method:"clip"}),Go(l,p)-2<u?f=ke(l,s):m=ke(l,s),Ke(l,s,(f+m)/2)}n=$e(l,r)}else n=o}if(t==="clip"||!Xt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=$e(n,e.space)),e.coords=n.coords,e}Qe.returns="color";function $e(e,t,{inGamut:r}={}){e=j(e),t=A.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Qe(o)),o}$e.returns="color";function pn(e,{precision:t=Le.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=j(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??A.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Xt(e)&&(s=Qe(lr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(m=>dn(m,t)));let d=[...s];if(c==="color"){let m=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(m)}let u=e.alpha;t!==null&&(u=dn(u,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${f})`}return i}const U1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],W1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Nn=new ue({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:U1,fromXYZ_M:W1,formats:{color:{}}});const Ir=1.09929682680944,is=.018053968510807;var Ic=new ue({id:"rec2020",name:"REC.2020",base:Nn,toBase(e){return e.map(function(t){return t<is*4.5?t/4.5:Math.pow((t+Ir-1)/Ir,1/.45)})},fromBase(e){return e.map(function(t){return t>=is?Ir*Math.pow(t,.45)-(Ir-1):4.5*t})},formats:{color:{}}});const G1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Y1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ec=new ue({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:G1,fromXYZ_M:Y1});const J1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],X1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ac=new ue({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:J1,fromXYZ_M:X1,formats:{color:{}}}),as={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ss=Array(3).fill("<percentage> | <number>[0, 255]"),ls=Array(3).fill("<number>[0, 255]");var cr=new ue({id:"srgb",name:"sRGB",base:Ac,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ss},rgb_number:{name:"rgb",commas:!0,coords:ls,noAlpha:!0},color:{},rgba:{coords:ss,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ls},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=as.black,t.alpha=0):t.coords=as[e],t.coords)return t}}}}),Mc=new ue({id:"p3",name:"P3",base:Ec,fromBase:cr.fromBase,toBase:cr.toBase,formats:{color:{id:"display-p3"}}});Le.display_space=cr;if(typeof CSS<"u"&&CSS.supports)for(let e of[ge,Ic,Mc]){let t=e.getMinCoords(),n=pn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Le.display_space=e;break}}function K1(e,{space:t=Le.display_space,...r}={}){let n=pn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Le.display_space)n=new String(n),n.color=e;else{let o=$e(e,t);n=new String(pn(o,r)),n.color=o}return n}function Pc(e,t,r="lab"){r=A.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function Q1(e,t){return e=j(e),t=j(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function et(e){return ke(e,[xe,"y"])}function Bc(e,t){Ke(e,[xe,"y"],t)}function ef(e){Object.defineProperty(e.prototype,"luminance",{get(){return et(this)},set(t){Bc(this,t)}})}var tf=Object.freeze({__proto__:null,getLuminance:et,register:ef,setLuminance:Bc});function rf(e,t){e=j(e),t=j(t);let r=Math.max(et(e),0),n=Math.max(et(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const nf=.56,of=.57,af=.62,sf=.65,cs=.022,lf=1.414,cf=.1,df=5e-4,uf=1.14,ds=.027,ff=1.14;function us(e){return e>=cs?e:e+(cs-e)**lf}function xt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function hf(e,t){t=j(t),e=j(e);let r,n,o,i,a,s;t=$e(t,"srgb"),[i,a,s]=t.coords;let l=xt(i)*.2126729+xt(a)*.7151522+xt(s)*.072175;e=$e(e,"srgb"),[i,a,s]=e.coords;let c=xt(i)*.2126729+xt(a)*.7151522+xt(s)*.072175,d=us(l),u=us(c),f=u>d;return Math.abs(u-d)<df?n=0:f?(r=u**nf-d**of,n=r*uf):(r=u**sf-d**af,n=r*ff),Math.abs(n)<cf?o=0:n>0?o=n-ds:o=n+ds,o*100}function pf(e,t){e=j(e),t=j(t);let r=Math.max(et(e),0),n=Math.max(et(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const gf=5e4;function mf(e,t){e=j(e),t=j(t);let r=Math.max(et(e),0),n=Math.max(et(t),0);return n>r&&([r,n]=[n,r]),n===0?gf:(r-n)/n}function vf(e,t){e=j(e),t=j(t);let r=ke(e,[ge,"l"]),n=ke(t,[ge,"l"]);return Math.abs(r-n)}const wf=216/24389,fs=24/116,Er=24389/27;let no=Me.D65;var Yo=new A({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:no,base:xe,fromBase(e){let r=e.map((n,o)=>n/no[o]).map(n=>n>wf?Math.cbrt(n):(Er*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fs?Math.pow(t[0],3):(116*t[0]-16)/Er,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Er,t[2]>fs?Math.pow(t[2],3):(116*t[2]-16)/Er].map((n,o)=>n*no[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const oo=Math.pow(5,.5)*.5+.5;function bf(e,t){e=j(e),t=j(t);let r=ke(e,[Yo,"l"]),n=ke(t,[Yo,"l"]),o=Math.abs(Math.pow(r,oo)-Math.pow(n,oo)),i=Math.pow(o,1/oo)*Math.SQRT2-40;return i<7.5?0:i}var Wr=Object.freeze({__proto__:null,contrastAPCA:hf,contrastDeltaPhi:bf,contrastLstar:vf,contrastMichelson:pf,contrastWCAG21:rf,contrastWeber:mf});function yf(e,t,r={}){yr(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Wr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=j(e),t=j(t);for(let i in Wr)if("contrast"+n.toLowerCase()===i.toLowerCase())return Wr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function _c(e){let[t,r,n]=$r(e,xe),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Lc(e){let[t,r,n]=$r(e,xe),o=t+r+n;return[t/o,r/o]}function $f(e){Object.defineProperty(e.prototype,"uv",{get(){return _c(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Lc(this)}})}var xf=Object.freeze({__proto__:null,register:$f,uv:_c,xy:Lc});function kf(e,t){return Pc(e,t,"lab")}const Sf=Math.PI,hs=Sf/180;function Cf(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=ge.from(e),[,s,l]=sr.from(ge,[o,i,a]),[c,d,u]=ge.from(t),f=sr.from(ge,[c,d,u])[1];s<0&&(s=0),f<0&&(f=0);let m=o-c,p=s-f,v=i-d,w=a-u,x=v**2+w**2-p**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let M=.0638*s/(1+.0131*s)+.638,N;Number.isNaN(l)&&(l=0),l>=164&&l<=345?N=.56+Math.abs(.2*Math.cos((l+168)*hs)):N=.36+Math.abs(.4*Math.cos((l+35)*hs));let ee=Math.pow(s,4),se=Math.sqrt(ee/(ee+1900)),te=M*(se*N+1-se),H=(m/(r*S))**2;return H+=(p/(n*M))**2,H+=x/te**2,Math.sqrt(H)}const ps=203;var Wi=new A({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:xe,fromBase(e){return e.map(t=>Math.max(t*ps,0))},toBase(e){return e.map(t=>Math.max(t/ps,0))}});const Ar=1.15,Mr=.66,gs=2610/2**14,Tf=2**14/2610,ms=3424/2**12,vs=2413/2**7,ws=2392/2**7,If=1.7*2523/2**5,bs=2**5/(1.7*2523),Pr=-.56,io=16295499532821565e-27,Ef=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Af=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Mf=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Pf=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Rc=new A({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Wi,fromBase(e){let[t,r,n]=e,o=Ar*t-(Ar-1)*n,i=Mr*r-(Mr-1)*t,s=J(Ef,[o,i,n]).map(function(f){let m=ms+vs*(f/1e4)**gs,p=1+ws*(f/1e4)**gs;return(m/p)**If}),[l,c,d]=J(Mf,s);return[(1+Pr)*l/(1+Pr*l)-io,c,d]},toBase(e){let[t,r,n]=e,o=(t+io)/(1+Pr-Pr*(t+io)),a=J(Pf,[o,r,n]).map(function(f){let m=ms-f**bs,p=ws*f**bs-vs;return 1e4*(m/p)**Tf}),[s,l,c]=J(Af,a),d=(s+(Ar-1)*c)/Ar,u=(l+(Mr-1)*d)/Mr;return[d,u,c]},formats:{color:{}}}),Jo=new A({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rc,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Rn(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Bf(e,t){let[r,n,o]=Jo.from(e),[i,a,s]=Jo.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Nc=3424/4096,zc=2413/128,Dc=2392/128,ys=2610/16384,_f=2523/32,Lf=16384/2610,$s=32/2523,Rf=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Nf=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],zf=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Df=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Xo=new A({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Wi,fromBase(e){let t=J(Rf,e);return Of(t)},toBase(e){let t=jf(e);return J(Df,t)},formats:{color:{}}});function Of(e){let t=e.map(function(r){let n=Nc+zc*(r/1e4)**ys,o=1+Dc*(r/1e4)**ys;return(n/o)**_f});return J(Nf,t)}function jf(e){return J(zf,e).map(function(n){let o=Math.max(n**$s-Nc,0),i=zc-Dc*n**$s;return 1e4*(o/i)**Lf})}function Ff(e,t){let[r,n,o]=Xo.from(e),[i,a,s]=Xo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Hf=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Vf=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],qf=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Zf=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var gn=new A({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:xe,fromBase(e){let r=J(Hf,e).map(n=>Math.cbrt(n));return J(qf,r)},toBase(e){let r=J(Zf,e).map(n=>n**3);return J(Vf,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Uf(e,t){let[r,n,o]=gn.from(e),[i,a,s]=gn.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var mn={deltaE76:kf,deltaECMC:Cf,deltaE2000:Go,deltaEJz:Bf,deltaEITP:Ff,deltaEOK:Uf};function Ut(e,t,r={}){yr(r)&&(r={method:r});let{method:n=Le.deltaE,...o}=r;e=j(e),t=j(t);for(let i in mn)if("deltae"+n.toLowerCase()===i.toLowerCase())return mn[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Wf(e,t=.25){let n=[A.get("oklch","lch"),"l"];return Ke(e,n,o=>o*(1+t))}function Gf(e,t=.25){let n=[A.get("oklch","lch"),"l"];return Ke(e,n,o=>o*(1-t))}var Yf=Object.freeze({__proto__:null,darken:Gf,lighten:Wf});function Oc(e,t,r=.5,n={}){[e,t]=[j(e),j(t)],Ye(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return xr(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function jc(e,t,r={}){let n;Gi(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[j(e),j(t)],n=xr(e,t,l));let c=Ut(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(m,p)=>{let v=p*f;return{p:v,color:n(v)}})}if(o>0){let f=u.reduce((m,p,v)=>{if(v===0)return 0;let w=Ut(p.color,u[v-1].color,i);return Math.max(m,w)},0);for(;f>o;){f=0;for(let m=1;m<u.length&&u.length<s;m++){let p=u[m-1],v=u[m],w=(v.p+p.p)/2,x=n(w);f=Math.max(f,Ut(x,p.color),Ut(x,v.color)),u.splice(m,0,{p:w,color:n(w)}),m++}}}return u=u.map(f=>f.color),u}function xr(e,t,r={}){if(Gi(e)){let[l,c]=[e,t];return xr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=j(e),t=j(t),e=lr(e),t=lr(t);let s={colors:[e,t],options:r};if(n?n=A.get(n):n=A.registry[Le.interpolationSpace]||e.space,o=o?A.get(o):n,e=$e(e,n),t=$e(t,n),e=Qe(e),t=Qe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[ke(e,c),ke(t,c)];[d,u]=q1(l,[d,u]),Ke(e,c,d),Ke(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((f,m)=>{let p=t.coords[m];return un(f,p,l)}),d=un(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(f=>f/d)),o!==n&&(u=$e(u,o)),u},{rangeArgs:s})}function Gi(e){return Ye(e)==="function"&&!!e.rangeArgs}Le.interpolationSpace="lab";function Jf(e){e.defineFunction("mix",Oc,{returns:"color"}),e.defineFunction("range",xr,{returns:"function<color>"}),e.defineFunction("steps",jc,{returns:"array<color>"})}var Xf=Object.freeze({__proto__:null,isRange:Gi,mix:Oc,range:xr,register:Jf,steps:jc}),Fc=new A({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Hc=new A({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Fc,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Kf=new A({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Hc,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Qf=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],eh=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Vc=new ue({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Qf,fromXYZ_M:eh}),th=new ue({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Vc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const rh=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],nh=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var qc=new ue({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ui,toXYZ_M:rh,fromXYZ_M:nh});const oh=1/512,ih=16/512;var ah=new ue({id:"prophoto",name:"ProPhoto",base:qc,toBase(e){return e.map(t=>t<ih?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=oh?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),sh=new A({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:gn,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Rn(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const xs=203,ks=2610/2**14,lh=2**14/2610,ch=2523/2**5,Ss=2**5/2523,Cs=3424/2**12,Ts=2413/2**7,Is=2392/2**7;var dh=new ue({id:"rec2100pq",name:"REC.2100-PQ",base:Nn,toBase(e){return e.map(function(t){return(Math.max(t**Ss-Cs,0)/(Ts-Is*t**Ss))**lh*1e4/xs})},fromBase(e){return e.map(function(t){let r=Math.max(t*xs/1e4,0),n=Cs+Ts*r**ks,o=1+Is*r**ks;return(n/o)**ch})},formats:{color:{id:"rec2100-pq"}}});const Es=.17883277,As=.28466892,Ms=.55991073,ao=3.7743;var uh=new ue({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Nn,toBase(e){return e.map(function(t){return t<=.5?t**2/3*ao:(Math.exp((t-Ms)/Es)+As)/12*ao})},fromBase(e){return e.map(function(t){return t/=ao,t<=1/12?Math.sqrt(3*t):Es*Math.log(12*t-As)+Ms})},formats:{color:{id:"rec2100-hlg"}}});const Zc={};Xe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Uc(e.W1,e.W2,e.options.method))});Xe.add("chromatic-adaptation-end",e=>{e.M||(e.M=Uc(e.W1,e.W2,e.options.method))});function zn({id:e,toCone_M:t,fromCone_M:r}){Zc[e]=arguments[0]}function Uc(e,t,r="Bradford"){let n=Zc[r],[o,i,a]=J(n.toCone_M,e),[s,l,c]=J(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],u=J(d,n.toCone_M);return J(n.fromCone_M,u)}zn({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});zn({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});zn({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});zn({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Me,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Me.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const fh=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],hh=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Wc=new ue({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Me.ACES,toXYZ_M:fh,fromXYZ_M:hh,formats:{color:{}}});const Br=2**-16,so=-.35828683,_r=(Math.log2(65504)+9.72)/17.52;var ph=new ue({id:"acescc",name:"ACEScc",coords:{r:{range:[so,_r],name:"Red"},g:{range:[so,_r],name:"Green"},b:{range:[so,_r],name:"Blue"}},referred:"scene",base:Wc,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Br)*2:r<_r?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Br)+9.72)/17.52:t<Br?(Math.log2(Br+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ps=Object.freeze({__proto__:null,A98RGB:th,A98RGB_Linear:Vc,ACEScc:ph,ACEScg:Wc,HSL:Fc,HSV:Hc,HWB:Kf,ICTCP:Xo,JzCzHz:Jo,Jzazbz:Rc,LCH:sr,Lab:ge,Lab_D65:Yo,OKLCH:sh,OKLab:gn,P3:Mc,P3_Linear:Ec,ProPhoto:ah,ProPhoto_Linear:qc,REC_2020:Ic,REC_2020_Linear:Nn,REC_2100_HLG:uh,REC_2100_PQ:dh,XYZ_ABS_D65:Wi,XYZ_D50:Ui,XYZ_D65:xe,sRGB:cr,sRGB_Linear:Ac});class P{constructor(...t){let r;t.length===1&&(r=j(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:A.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=K1(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let u=c(...d);return P.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}}P.defineFunctions({get:ke,getAll:$r,set:Ke,setAll:Tc,to:$e,equals:Q1,inGamut:Xt,toGamut:Qe,distance:Pc,toString:pn});Object.assign(P,{util:O1,hooks:Xe,WHITES:Me,Space:A,spaces:A.registry,parse:Cc,defaults:Le});for(let e of Object.keys(Ps))A.register(Ps[e]);for(let e in A.registry)Ko(e,A.registry[e]);Xe.add("colorspace-init-end",e=>{var t;Ko(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ko(r,e)})});function Ko(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return A.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=A.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=A.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}P.extend(mn);P.extend({deltaE:Ut});Object.assign(P,{deltaEMethods:mn});P.extend(Yf);P.extend({contrast:yf});P.extend(xf);P.extend(tf);P.extend(Xf);P.extend(Wr);function Gc(e){return en(e,(t,r)=>r instanceof P?B(r.toString({format:"hex"})):Gc(r))}const gh="dodgerblue";function Qo(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function lo({background:e,foreground:t}){return{background:e??new P(Qo(t)),foreground:t??new P(Qo(e))}}var vn;(function(e){e.Dark="dark",e.Light="light"})(vn||(vn={}));function mh(e){return e==="black"?"white":"black"}const vh={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},wh={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function Bs({themeColor:e=gh,themeStyle:t=vn.Light}={}){const r=new P(e),n=new P(t===vn.Dark?"black":"white"),o=Qo(n),i=new P(o),a={nav:{hover:lo({background:r.clone().set({"hsl.l":93})}),active:lo({background:r.clone().set({"hsl.l":90})}),selected:lo({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...wh[mh(o)],foreground:i,...vh[o]}};return Gc(a)}const wn=Mi()("element-book-change-route"),_s="vira-",{defineElement:kr,defineElementNoInputs:B5}=Di({assertInputs:e=>{if(!e.tagName.startsWith(_s))throw new Error(`Tag name should start with '${_s}' but got '${e.tagName}'`)}}),Yc=g`
    pointer-events: none;
    opacity: 0.3;
`,Je=rt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),bh="px";function yh(e){return $h(e,bh)}function $h(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const bn=rt({"vira-form-input-border-radius":"8px"}),yn=rt({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${bn["vira-form-input-border-radius"].value} + 4px)`});function Jc({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(yh(n+r+t));return g`
        ${B(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${yn["vira-focus-outline-color"].value};
            border-radius: ${yn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const xh=g`
    padding: 0;
    margin: 0;
`,ne=g`
    ${xh};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function kh(e){return g`
        ${B(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${B(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const Ce=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,le=kr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ei;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ei||(ei={}));kr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ei.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ce};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${yn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Yc};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${ne};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${bn["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Je["vira-interaction-animation-duration"].value},
                background-color
                    ${Je["vira-interaction-animation-duration"].value},
                border-color ${Je["vira-interaction-animation-duration"].value};
        }

        ${Jc({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${le} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${le.assign({icon:e.icon})}></${le}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var ti;(function(e){e.Header="header"})(ti||(ti={}));kr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ne};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Je["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:U()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${C("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${ti.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${ir(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const _=rt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Ve({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Sh=Ve({name:"CloseX24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${_["vira-icon-fill-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function ri({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ri({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Xc({value:e,allowed:t,blocked:r}){const n=t?ri({input:e,matcher:t}):!0,o=r?ri({input:e,matcher:r}):!1;return n&&!o}function Kc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Xc({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Ch({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=Zt(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Xc({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=Kc({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const Gr=kr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:U(),inputBlocked:U()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${yn["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Yc};
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
                ${ne};
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
                ${Ce};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ne};
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
                border-radius: ${bn["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Je["vira-interaction-animation-duration"].value};
            }

            label {
                ${ne};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${bn["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Jc({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ne};
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
                ${Ce};
            }

            .close-x-button {
                ${ne};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${Je["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Kc({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?h`
                  <${le.assign({icon:e.icon})} class="left-side-icon"></${le}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${a}
                ${de(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${ir(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${C("input",l=>{Ch({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${de(!!(e.showClearButton&&e.value),h`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${C("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${le.assign({icon:Sh})}></${le}>
                        </button>
                    `)}
                ${de(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});kr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>g`
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
    `,events:{routeChange:U()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Vi(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return h`
                <a href=${a} rel="noopener noreferrer" ${C("click",n)}>
                    <slot></slot>
                </a>
            `}}});const Th=Ve({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `});Ve({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Ih=Ve({name:"Loader24Icon",svgTemplate:h`
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
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Eh=g`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Je["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ah=Ve({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${Eh}
        </style>
        ${Ih.svgTemplate}
    `}),Mh=Ve({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${_["vira-icon-fill-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${_["vira-icon-stroke-color"].value}"
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `});Ve({name:"StatusFailure24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${_["vira-icon-fill-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `});Ve({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${_["vira-icon-fill-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${_["vira-icon-stroke-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width="calc(${_["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${_["vira-icon-stroke-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width="calc(${_["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${_["vira-icon-stroke-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width="calc(${_["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});Ve({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${_["vira-icon-fill-color"].value}
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${_["vira-icon-stroke-color"].value}
                stroke-width=${_["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const{defineElement:Te,defineElementNoInputs:_5}=Di(),ye=Te()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>g`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return h`
            <a
                href=${r}
                ${C("click",i=>{(!e.router||Vi(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new wn(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Ph(e,t){return e.entry.entryType===oe.Root?!1:!!(e.entry.entryType===oe.Page||We(t,e.fullUrlBreadcrumbs.slice(0,-1))||We(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const Oe=Te()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${D["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${D["element-book-nav-hover-background-color"].value};
            color: ${D["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${D["element-book-nav-active-background-color"].value};
            color: ${D["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${ye.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${D["element-book-nav-selected-background-color"].value};
            color: ${D["element-book-nav-selected-foreground-color"].value};
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

        ${le} {
            display: inline-flex;
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Ph(r,e.selectedPath))return;const n=g`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return h`
                <li style=${n}>
                    <${ye.assign({router:e.router,route:{paths:[ce.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${me({"title-row":!0,selected:e.selectedPath?We(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${de(Mt(r,oe.ElementExample),h`
                                    <${le.assign({icon:Th})}></${le}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${ye}>
                </li>
            `});return h`
            <${ye.assign({route:Lt,router:e.router})}>
                <slot name=${_e.NavHeader}>Book</slot>
            </${ye}>
            <ul>
                ${t}
            </ul>
        `}});async function Bh(e){await Bo(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await z0(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const tt=Te()({tagName:"book-error",styles:g`
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
    `,renderCallback({inputs:e}){return(An(e.message,"array")?e.message:[e.message]).map(r=>h`
                    <p>${r}</p>
                `)}}),dr=Te()({tagName:"book-page-controls",events:{controlValueChange:U()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Gr} {
            height: 24px;
            max-width: 128px;
        }

        ${le}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===R.Hidden)return"";const a=_h(e.currentValues[n],o,s=>{const l=An(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return h`
                    <div class="control-wrapper">
                        ${de(i===0,h`
                                <${le.assign({icon:Mh})}
                                    class="options-icon"
                                ></${le}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function _h(e,t,r){return yt(t,R.Hidden)?"":yt(t,R.Checkbox)?h`
            <input
                type="checkbox"
                .value=${e}
                ${C("input",n=>{const o=Zt(n,HTMLInputElement);r(o.checked)})}
            />
        `:yt(t,R.Color)?h`
            <input
                type="color"
                .value=${e}
                ${C("input",n=>{const o=Zt(n,HTMLInputElement);r(o.value)})}
            />
        `:yt(t,R.Text)?h`
            <${Gr.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${C(Gr.events.valueChange,n=>{r(n.detail)})}
            ></${Gr}>
        `:yt(t,R.Number)?h`
            <input
                type="number"
                .value=${e}
                ${C("input",n=>{const o=Zt(n,HTMLInputElement);r(o.value)})}
            />
        `:yt(t,R.Dropdown)?h`
            <select
                .value=${e}
                ${C("input",n=>{const o=Zt(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>h`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:h`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Ls=Te()({tagName:"book-breadcrumbs",styles:g`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${ye.assign({route:{hash:void 0,search:void 0,paths:[ce.Book,...a]},router:e.router})}>
                    ${r}
                </${ye}>
                ${s}
            `}):h`
                &nbsp;
            `}}),co=Te()({tagName:"book-breadcrumbs-bar",styles:g`
        :host {
            border-bottom: 1px solid
                ${D["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${D["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return h`
            ${de(!!e.currentSearch,h`
                    &nbsp;
                `,h`
                    <${Ls.assign({currentRoute:e.currentRoute,router:e.router})}></${Ls}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${C("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await E0(200),n.value===o&&(n.value?t(new wn({paths:[ce.Search,encodeURIComponent(n.value)]})):t(new wn(Lt)))})}
            />
        `}}),Rs=Te()({tagName:"book-entry-description",styles:g`
        :host {
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${D["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>h`
                <p>${t}</p>
            `)}}),Ns=Te()({tagName:"book-page-wrapper",styles:g`
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

        ${ye} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?h`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:h`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[ce.Book,...e.pageNode.fullUrlBreadcrumbs],n=yl(e.pageNode.entry.errors);return n&&console.error(n),h`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${ye.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${ye}>
                    ${n?h`
                              <${tt.assign({message:n.message})}></${tt}>
                          `:h`
                              <${Rs.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Rs}>
                              <${dr.assign({config:e.pageNode.entry.controls,currentValues:Fi(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${dr}>
                          `}
                </div>
            </div>
        `}}),Lr=Te()({tagName:"book-element-example-controls",styles:g`
        :host {
            display: flex;
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[ce.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return h`
            <${ye.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${ye}>
        `}}),zs=Symbol("unset-internal-state"),Ds=Te()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:zs},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw yl(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===zs&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return h`
                ${de(!!t.elementExampleNode.entry.styles,h`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),h`
                <${tt.assign({message:`${t.elementExampleNode.entry.title} failed: ${In(n)}`})}></${tt}>
            `}},options:{allowPolymorphicState:!0}}),Os=Te()({tagName:"book-element-example-wrapper",styles:g`
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

        ${Lr} {
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Lr} {
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return h`
            <div class="individual-example-wrapper">
                <${Lr.assign(I0(e,["currentPageControls"]))}></${Lr}>
                <${Ds.assign(e)}></${Ds}>
            </div>
        `}});function Qc(e,t,r,n){const o=qo(r,n),i=[];if(o){const a=Qc(e,t,o,n);a&&i.push(a)}if(Mt(r,oe.Page)&&!e.includes(r)){const a=Fi(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:en(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Lh({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[h`
                No results
            `];const a=ka(e,1)?Qc(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&ka(e,1)?h`
                  <${dr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${dr}>
              `:"",l=Y0(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Mt(c,oe.Page))return h`
                    <${Ns.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Ns}>
                `;if(Mt(c,oe.ElementExample)){const u=Fi(o,c.fullUrlBreadcrumbs.slice(0,-1));return h`
                    <${Os.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${Os}>
                `}else return Mt(c,oe.Root)?"":h`
                    <${tt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${tt}>
                `});return[s,l].flat()}const kt=Te()({tagName:"book-entry-display",styles:g`
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

        ${co} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Je["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:U()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Zo(e.currentRoute.paths),a=Lh({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return h`
            <${co.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${co}>

            ${de(e.showLoading,h`
                    <div
                        ${sn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${le.assign({icon:Ah})}></${le}>
                    </div>
                    ${de(!!n.lastElement,h`
                            ${n.lastElement}
                            <slot name=${_e.Footer}></slot>
                        `)}
                `,h`
                    <div
                        ${sn(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${_e.Footer}></slot>
                `)}
        `}});function Rh(e,t,r){const n=js(e,t);if(n.length)return n;r(Lt);const o=js(e,Lt.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function js(e,t){return e.filter(r=>_0({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const uo=Ni()({tagName:"element-book-app",events:{pathUpdate:U()},stateInitStatic:{currentRoute:Lt,router:void 0,loading:!0,colors:{config:void 0,theme:Bs(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${D["element-book-page-background-color"].value};
            color: ${D["element-book-page-foreground-color"].value};
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

        ${kt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Oe} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Fs(e,Zo(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,u,f,m,p,v,w;t._debug&&console.info("rendering element-book app");function a(x){return{...e.currentRoute,...x}}function s(x){const S=a(x);return!We(e.currentRoute,S)}function l(x){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,x].filter(ki).join(" - "))}function c(x){if(!s(x))return;const S=a(x);e.router?e.router.setRoutes(S):n({currentRoute:{...e.currentRoute,...S}}),t.elementBookRoutePaths&&!We(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(S.paths??[]))}try{if(t.elementBookRoutePaths&&!We(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const H=R1(t.internalRouterConfig.basePath);n({router:H}),H.addRouteListener(!0,re=>{n({currentRoute:re})})}else!((u=t.internalRouterConfig)!=null&&u.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const x={themeColor:t.themeColor};if(!We(x,(f=e.colors)==null?void 0:f.config)){const H=Bs(x);n({colors:{config:x,theme:H}}),D1(r,H)}const S=t._debug??!1,M=u1({entries:t.entries,debug:S});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:uc(M.tree,{children:(p=(m=e.treeBasedControls)==null?void 0:m.controls)==null?void 0:p.children,controls:t.globalValues})}}));const N=Zo(e.currentRoute.paths),se=(N?w1({flattenedNodes:M.flattenedNodes,searchQuery:N}):void 0)??Rh(M.flattenedNodes,e.currentRoute.paths,c);l((v=se[0])==null?void 0:v.entry.title);const te=(w=e.treeBasedControls)==null?void 0:w.controls;return te?(t._debug&&console.info({currentControls:te}),h`
                <div
                    class="root"
                    ${C(wn,async H=>{const re=H.detail;if(!s(re))return;if(n({loading:!0}),c(re),!(r.shadowRoot.querySelector(Oe.tagName)instanceof Oe))throw new Error(`Failed to find child '${Oe.tagName}'`);Fs(r,N,e.currentRoute)})}
                    ${C(dr.events.controlValueChange,H=>{if(!e.treeBasedControls)return;const re=h1(te,H.detail.fullUrlBreadcrumbs,H.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:re}})})}
                >
                    <${Oe.assign({flattenedNodes:M.flattenedNodes,router:e.router,selectedPath:N?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${_e.NavHeader}
                            slot=${_e.NavHeader}
                        ></slot>
                    </${Oe}>
                    <${kt.assign({controls:te,currentNodes:se,currentRoute:e.currentRoute,debug:S,originalTree:M.tree,router:e.router,showLoading:e.loading})}
                        ${C(kt.events.loadingRender,async H=>{await Bo();const re=r.shadowRoot.querySelector(kt.tagName);re?re.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${kt.tagName}' for scrolling.`),await Bo(),n({loading:!H.detail})})}
                    >
                        <slot
                            name=${_e.Footer}
                            slot=${_e.Footer}
                        ></slot>
                    </${kt}>
                </div>
            `):h`
                    <${tt.assign({message:"Failed to generate page controls."})}></${tt}>
                `}catch(x){return console.error(x),h`
                <p class="error">${In(x)}</p>
            `}}});async function Fs(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Oe.tagName);if(!(n instanceof Oe))throw new Error(`Failed to find child '${Oe.tagName}'`);await Bh(n)}const Pt={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function Hs(e,t){return`var(${e}, var(${Pt.color}, ${t}))`}const $={stroke:(e="currentColor")=>Hs(Pt.strokeColor,e),fill:(e="currentColor")=>Hs(Pt.fillColor,e)};class b{constructor(t,r){this.iconName=t,this.svgString=r}}function y(e,...t){return e.reduce((n,o,i)=>{const a=i<t.length?t[i]:"";return n+o+a},"")}const Nh=new b("Copy16Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),zh=new b("ExternalLink16Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Kt=new b("InfoCircle16Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Dh=new b("ArrowBarUp24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Oh=new b("ArrowForwardUp24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Yi=new b("ArrowLeft24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),jh=new b("ArrowLoopLeft24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Fh=new b("ArrowLoopRight24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Ji=new b("ArrowRight24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),ed=new b("ArrowsSort24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Vs={interactionDuration:g`--toniq-interaction-transition-duration`,prettyDuration:g`--toniq-pretty-transition-duration`},W={interaction:g`var(${Vs.interactionDuration}, 84ms)`,pretty:g`var(${Vs.prettyDuration}, 300ms)`};function Hh(e,t){return e.map(t)}function Xi(e){return!!e}function td(e,t){return e.match(t)??[]}function Vh(e){return e.replace(/,/g,"")}function qh(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function qs(e){return e!==e.toUpperCase()}function ni(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=qs(a)||qs(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function ur(e,t){return e.split(t)}const Zh=String(NaN);function rd(e){if(typeof e=="string"&&isNaN(Number(e)))return Zh;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${td(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(s=>s.split("").reverse().join("")).join(",")}${o}`}function Uh(e){return typeof e=="number"?e:Number(typeof e=="string"?Vh(e):e)}function Wh(e){return String(e).includes("e")}function Gh(e){return!!e&&typeof e=="object"}function Re(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Yh(e){return Re(e).filter(t=>isNaN(Number(t)))}function Jh(e,t){return Re(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function oi(e,t){return Jh(e,r=>!t.includes(r))}function fr(e,t){let r=!1;const n=Re(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Re(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const fo="://";function Xh(...e){const t=e.join("/"),[r,n=""]=t.includes(fo)?t.split(fo):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>s.includes("?")||o?(o=!0,s):encodeURIComponent(s)).reduce((s,l,c,d)=>{if(i)return s;const u=d[c+1];let f=l;const m=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||m){i=!0;let p=!1;const v=d.slice(m?c+2:c+1).reduce((w,x)=>(x.includes("#")&&(p=!0),p?w.concat(x):[w,x].join("&")),"");f=[l,u,v].join("")}return s.concat(f)},[]);return[r,r?fo:"",a.join("/")].join("")}const Kh=["k","M","B","T","P","E","Z","Y"];function Ki({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function Qh(e,t,r){const[n,o]=ur(e,"."),i=rd(n),a=td(i,/,/g).length,s=t[a-1],[l,c]=ur(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Ki({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const Zs=3;function e2({input:e,maxLength:t}){const r=String(e),[n,o]=ur(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=ur(n,"."),d=i.length+Zs;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Ki({afterDot:c,beforeDot:l,maxLength:t-i.length+Zs}),s].join("")}function t2(e,t){const[r,n]=ur(rd(e),".");if(r.length<=t)return Ki({beforeDot:r,afterDot:n,maxLength:t})}function r2(e,{customSuffixes:t=Kh,maxLength:r=6}={}){const n=Uh(e);if(isNaN(n)||n===1/0)return String(n);if(Wh(n))return e2({input:n,maxLength:r});const o=String(n),i=t2(o,r);return i??Qh(o,t,r)}function Qi(){return e=>e}function ho(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const n2=(()=>{const e={backgroundColor:g`#ffffff`,foregroundColor:g`#000000`},t={...e,foregroundColor:g`#00D093`},r={...e,foregroundColor:g`#ACADAD`},n={...e,foregroundColor:g`#D6D6D6`},o={...t},i={...t,foregroundColor:g`#00A876`},a={...t,foregroundColor:g`#1D6852`},s={...n},l={...e,foregroundColor:g`#EAFBF7`},c={...e,backgroundColor:g`#D2EEFA`},d=ho(o),u=ho(i),f=ho(a),m=f,p={backgroundColor:g`#F1F3F6`,foregroundColor:e.foregroundColor},v={...p,foregroundColor:g`#9A9A9D`};return Qi()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:m,accentPrimary:d,accentPrimaryHover:u,accentPrimaryActive:f,accentSecondary:p,accentTertiary:v})})(),nd=n2;function Us(e,t){return B(`--toniq-${ni(e)}-${ni(t)}`)}const ea=fr(nd,e=>({backgroundColor:Us(e,"backgroundColor"),foregroundColor:Us(e,"foregroundColor")}));function Ae(e,t){const r=nd[e][t],n=ea[e][t];return g`var(${n}, ${r})`}const k=fr(ea,e=>({foregroundColor:Ae(e,"foregroundColor"),backgroundColor:Ae(e,"backgroundColor")}));function O(e){return g`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const vt=g`
    pointer-events: none;
    opacity: 0.3;
    ${Ce};
`;function Qt(e,t,r){return Math.min(Math.max(e,t),r)}function Ct(e){return`${e}px`}function po(e){return`${e}%`}function go(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const u=e[d+1];return u==null?!0:c<=t&&u>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function o2(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=i2(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(Ws(o,r),o.length>r&&Ws(o,r)),o}function Ws(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function i2(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function nt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(Ct(n+r+t));return g`
        ${B(e)}::after {
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
    `}const od=Qi()({toniqFont:{"font-family":g`'Rubik', sans-serif`},normalWeightFont:{"font-weight":g`400`},boldFont:{"font-weight":g`600`},extraBoldFont:{"font-weight":g`900`},paragraphFont:{"line-height":g`24px`,"font-size":g`16px`},boldParagraphFont:{},labelFont:{"line-height":g`16px`,"font-size":g`12px`},boldLabelFont:{},h1Font:{"line-height":g`96px`,"font-size":g`64px`},h2Font:{"line-height":g`48px`,"font-size":g`32px`},h3Font:{"line-height":g`32px`,"font-size":g`24px`},monospaceFont:{"font-family":g`'Inconsolata', monospace`,"line-height":g`1.125em`}}),a2=fr(od,(e,t)=>{const r=B(ni(e.replace(/Font$/,"")));return fr(t,o=>{const i=B(o);return g`--toniq-font-${r}-${i}`})});function Pe(e){const t=a2[e],r=od[e],n=Re(t).map(o=>{const i=r[o],a=t[o];return g`
            ${B(o)}: var(${a}, ${i});
        `});return B(n.join(`
`))}const q=(()=>{const e=g`
        font-style: normal;
        color: ${k.pagePrimary.foregroundColor};
        ${Pe("toniqFont")};
    `,t=g`
        ${e};
        ${Pe("normalWeightFont")};
    `,r=g`
        ${e};
        ${Pe("boldFont")};
    `,n=g`
        ${e};
        ${Pe("extraBoldFont")};
    `,o=g`
        ${e};
        ${Pe("paragraphFont")};
        ${t};
    `,i=g`
        ${e};
        ${o};
        ${r};
    `,a=g`
        ${e};
        ${Pe("labelFont")};
        ${t};
    `,s=g`
        ${a};
        ${r};
    `,l=g`
        ${Pe("h1Font")};
        ${n};
    `,c=g`
        ${Pe("h2Font")};
        ${r};
    `,d=g`
        ${Pe("h3Font")};
        ${r};
    `,u=g`
        ${Pe("monospaceFont")}
    `;return Qi()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:u})})(),$n={popupShadow:g`
        filter: drop-shadow(0px 12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:g`
        filter: drop-shadow(0px -12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:g`
        filter: drop-shadow(0px 12px 8px ${k.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function s2(e,t=!0){const r=B(e),n=e===":host"?g`
                  :host(:hover) ;
              `:g`
                  ${r}:hover
              `,o=t?g`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${k.pageInteraction.foregroundColor};
              }
          `:g``;return g`
        ${r} {
            border-radius: 16px;
            background-color: ${k.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${$n.popupShadow};
        }

        ${o}
    `}const l2=new b("ArrowsSortAscending24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),c2=new b("ArrowsSortDescending24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),d2=new b("Bucket24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),u2=new b("BuildingStore24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),f2=new b("CalendarEvent24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),h2=new b("Cash24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),p2=new b("Chain24Icon",y`
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
            fill="${$.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="m11.736 16.792.206-.245a.64.64 0 0 1 .902-.079l.491.412a.64.64 0 0 1 .079.902l-2.059 2.451a3.206 3.206 0 0 1-2.451 1.142 3.206 3.206 0 0 1-2.058-.749l-2.452-2.058a3.208 3.208 0 0 1-1.142-2.454c0-.752.266-1.479.752-2.055l3.703-4.41v-.003a3.204 3.204 0 0 1 4.509-.39l1.456 1.223c.27.227.305.632.078.903l-.409.488a.641.641 0 0 1-.902.079l-1.459-1.224a1.283 1.283 0 0 0-1.801.157l-3.706 4.413c-.192.23-.301.521-.301.822 0 .378.17.736.458.979l2.451 2.058a1.274 1.274 0 0 0 1.802-.157l1.853-2.205Zm.528-9.584-.207.245a.64.64 0 0 1-.901.079l-.492-.412a.64.64 0 0 1-.078-.902l2.059-2.451a3.206 3.206 0 0 1 2.451-1.142c.752 0 1.482.266 2.058.749l2.451 2.058a3.208 3.208 0 0 1 1.142 2.454 3.18 3.18 0 0 1-.752 2.055l-3.702 4.41v.003a3.204 3.204 0 0 1-4.509.39l-1.457-1.223a.642.642 0 0 1-.078-.903l.41-.488a.64.64 0 0 1 .901-.079l1.459 1.224a1.286 1.286 0 0 0 1.802-.157l3.706-4.413c.192-.23.3-.521.3-.822 0-.378-.169-.736-.457-.979l-2.452-2.058a1.274 1.274 0 0 0-1.801.157l-1.853 2.205Z"
            />
        </svg>
    `),id=new b("CheckMark24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),ad=new b("ChevronDown24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),g2=new b("ChevronUp24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),m2=new b("Circle24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),sd=new b("CircleDot24Icon",y`
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
                stroke="${$.stroke()}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${$.fill()}"
                stroke="${$.fill()}"
                stroke-width="2"
            />
        </svg>
    `),v2=new b("CirclePlusFill24Icon",y`
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
                fill="${$.fill()}"
                stroke="none"
                d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm-1 9H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2Z"
            />
        </svg>
    `),w2=new b("CirclePlusOutline24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),b2=new b("CircleWavyCheck24Icon",y`
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
                fill="${$.fill()}"
                stroke="none"
                d="M4.93 19.07c.49.48 1.15.7 1.9.75.63.04 1.35-.08 1.87.14.52.22.96.81 1.45 1.23.57.5 1.2.81 1.85.81.65 0 1.28-.32 1.86-.81.5-.42.94-1.02 1.44-1.23.5-.21 1.22-.09 1.86-.14a2.93 2.93 0 0 0 1.9-.75c.49-.48.7-1.15.76-1.9.04-.63-.08-1.35.14-1.87.22-.52.81-.96 1.23-1.45.5-.57.81-1.2.81-1.85 0-.65-.32-1.28-.81-1.86-.42-.5-1.02-.94-1.23-1.44-.21-.5-.09-1.22-.14-1.86a2.93 2.93 0 0 0-.75-1.9 2.9 2.9 0 0 0-1.9-.76c-.63-.04-1.35.08-1.87-.14-.52-.22-.96-.81-1.45-1.23A2.9 2.9 0 0 0 12 2c-.65 0-1.28.32-1.86.81-.5.42-.94 1.02-1.44 1.23-.5.21-1.22.09-1.86.14-.76.06-1.43.27-1.9.75a2.9 2.9 0 0 0-.76 1.9c-.04.63.08 1.35-.14 1.87-.22.52-.81.96-1.23 1.45-.5.57-.81 1.2-.81 1.85 0 .65.32 1.28.81 1.86.42.5 1.02.94 1.23 1.44.21.5.09 1.22.14 1.86.06.76.27 1.43.75 1.9ZM8.3 12.7l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L11 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),y2=new b("Clock24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),ld=new b("Code24Icon",y`
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
            fill="${$.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="M21.393 2H2.607A2.61 2.61 0 0 0 0 4.607v14.786A2.61 2.61 0 0 0 2.607 22h18.786A2.61 2.61 0 0 0 24 19.393V4.607A2.61 2.61 0 0 0 21.393 2Zm1.902 17.393a1.904 1.904 0 0 1-1.902 1.902H2.607a1.904 1.904 0 0 1-1.902-1.902V4.607c0-1.049.853-1.903 1.902-1.903h18.786c1.049 0 1.902.854 1.902 1.903v14.786ZM21.664 6H2.336A.344.344 0 0 0 2 6.352c0 .195.15.353.336.353h19.328A.345.345 0 0 0 22 6.352.344.344 0 0 0 21.664 6ZM2.607 4.583a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm3.006 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm-1.503 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm4.757 5.411a.351.351 0 0 0-.498 0l-3.757 3.757a.351.351 0 0 0 0 .498l3.757 3.757a.352.352 0 1 0 .498-.498L5.359 14l3.508-3.508a.351.351 0 0 0 0-.498Zm6.764 0a.352.352 0 1 0-.499.498L18.641 14l-3.509 3.508a.353.353 0 0 0 .499.498l3.757-3.757a.353.353 0 0 0 0-.498l-3.757-3.757Zm-2.008-.458a.352.352 0 0 0-.451.211l-3.006 8.266a.351.351 0 1 0 .662.24l3.006-8.266a.352.352 0 0 0-.211-.451Z"
            />
        </svg>
    `),cd=new b("Copy24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),$2=new b("CreateFile24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            stoke-miterlimit="1.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2px"
            stroke="${$.stroke()}"
            width="24"
            height="24"
        >
            <path
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `),x2=new b("DotsVertical24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),k2=new b("Download24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${$.stroke()}"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4" />
        </svg>
    `),S2=new b("Edit24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),dd=new b("ExternalLink24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),C2=new b("Filter24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),T2=new b("Geometry24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),I2=new b("GridDots24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),E2=new b("HeartFill24Icon",y`
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
                fill="${$.fill()}"
                stroke="${$.stroke()}"
                stroke-width="2"
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `),A2=new b("HeartOutline24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),M2=new b("Infinity24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),P2=new b("Info24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill="${$.stroke()}"
            viewBox="0 0 24 24"
        >
            <path
                d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-8-3a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 9Zm-.01 8.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Z"
            />
        </svg>
    `),B2=new b("LayersLinked24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),_2=new b("LayoutGrid24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),L2=new b("Lifebuoy24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),R2=new b("List24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),N2=new b("ListDetails24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),z2=new b("Loader24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),ud=new b("LoaderAnimated24Icon",y`
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
            stroke="${$.stroke()}"
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
    `),D2=new b("Lock24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),O2=new b("LockOpen24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),j2=new b("Menu24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),F2=new b("Paper24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),H2=new b("Person24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill="${$.stroke()}"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 2c-2.651.003-5.193 1.057-7.068 2.932S2.003 9.349 2 12c.004 2.651 1.059 5.192 2.934 7.066C6.808 20.941 9.349 21.996 12 22c2.652 0 5.196-1.054 7.071-2.929C20.946 17.196 22 14.652 22 12s-1.054-5.196-2.929-7.071C17.196 3.054 14.652 2 12 2Zm6.082 15.77c-.561-1.132-1.428-2.086-2.503-2.752-1.074-.666-2.314-1.019-3.578-1.018-1.265.001-2.504.355-3.577 1.022-1.074.667-1.94 1.621-2.501 2.755C4.428 16.226 3.595 14.154 3.6 12c0-2.228.885-4.364 2.46-5.94C7.636 4.485 9.772 3.6 12 3.6s4.364.885 5.94 2.46C19.515 7.636 20.4 9.772 20.4 12c.005 2.151-.826 4.22-2.318 5.77Z"
            />
            <path
                d="M12 5.5c-.692 0-1.369.205-1.945.59-.575.384-1.024.931-1.289 1.571-.264.639-.334 1.343-.199 2.022.135.679.469 1.302.958 1.792.49.489 1.113.823 1.792.958s1.383.065 2.022-.199c.64-.265 1.187-.714 1.571-1.29.385-.575.59-1.252.59-1.944 0-.46-.091-.915-.266-1.339a3.50094 3.50094 0 0 0-1.895-1.895C12.915 5.591 12.46 5.5 12 5.5Z"
            />
        </svg>
    `),V2=new b("Photo24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),q2=new b("Refresh24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${$.stroke()}"
        >
            <path
                d="M17 9a6 6 0 1 0 0 6 1 1 0 0 1 2 0 8 8 0 1 1-1-8V5a1 1 0 0 1 2 0v5l-1 1h-5a1 1 0 0 1 0-2h3Z"
            />
        </svg>
    `),fd=new b("Rocket24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),hd=new b("Search24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Z2=new b("Send24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),U2=new b("ShoppingCart24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),W2=new b("Social24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),G2=new b("Square24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Y2=new b("SquareCheck24Icon",y`
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
                fill="${$.fill()}"
                stroke="none"
                d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6ZM8.3 12.7l2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L11 12.58l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),Yr=new b("Trash24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            />
        </svg>
    `),J2=new b("Upload24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${$.stroke()}"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4" />
        </svg>
    `),X2=new b("User24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            fill="${$.stroke()}"
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
    `),K2=new b("Users24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),Q2=new b("Wallet24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),ep=new b("WorldUpload24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),tp=new b("X24Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),pd=new b("Kyc32Icon",y`
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
    `),gd=new b("FolderOff48Icon",y`
        <svg
            fill="none"
            stroke="${$.stroke()}"
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
    `),md=new b("Api64Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            fill="${$.stroke()}"
            fill-rule="nonzero"
            viewBox="0 0 64 64"
            width="64"
            height="64"
        >
            <path
                d="m58.672 15.498-.007-.049a1.979 1.979 0 0 0-.043-.2c-.004-.013-.006-.026-.011-.039a1.7 1.7 0 0 0-.228-.486 1.924 1.924 0 0 0-.123-.169l-.013-.017a1.908 1.908 0 0 0-.165-.171l-.037-.031a1.736 1.736 0 0 0-.161-.125l-.035-.024a1.678 1.678 0 0 0-.206-.117l-.014-.009L32.808 2.138a1.87 1.87 0 0 0-1.617 0L6.366 14.061a1.868 1.868 0 0 0-1.058 1.682v30.67c0 .678.368 1.303.961 1.632l24.825 13.766.003.001a1.817 1.817 0 0 0 .411.166l.056.014a2.234 2.234 0 0 0 .219.041 1.72 1.72 0 0 0 .433 0l.056-.009c.055-.009.109-.018.162-.032l.058-.014c.058-.016.114-.035.171-.056l.036-.013a2.52 2.52 0 0 0 .204-.097l.002-.001L57.73 48.045c.593-.329.962-.954.962-1.632V15.739a2.175 2.175 0 0 0-.02-.241ZM54.96 45.312 33.866 57.011v-6.578a1.867 1.867 0 0 0-3.733 0v6.578L9.04 45.314V18.771a10.728 10.728 0 0 1 5.729 2.986l3.767 4.161c-.628.797-1.431 1.914-1.655 2.755a7.168 7.168 0 0 0 .725 5.452l12.434-7.206a7.166 7.166 0 0 0-4.369-3.34c-1.113-.296-2.814-.108-3.882.112l-.285.183-4.204-4.65a14.354 14.354 0 0 0-5.748-3.514l20.447-9.82 20.763 9.972-13.529 7.502a1.866 1.866 0 0 0 1.81 3.264l13.916-7.716v11.132h-.113c0 6.121-4.979 11.1-11.1 11.1a11 11 0 0 1-5.917-1.726 5.534 5.534 0 0 0-1.257-5.899l-1.422 1.42-2.756-2.755-.002.002a.923.923 0 1 0-1.305 1.306l2.755 2.755-2.392 2.392-2.837-2.837-.002.002a.925.925 0 0 0-1.306 1.306l2.838 2.837-1.422 1.42a5.534 5.534 0 0 0 6.682.889 14.716 14.716 0 0 0 8.344 2.587c4.48 0 8.497-2.003 11.213-5.157v5.626Z"
            />
        </svg>
    `),rp=new b("CircleDashes64Icon",y`
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
            fill="${$.stroke()}"
        >
            <path
                d="M18.769 37.78a3.053 3.053 0 0 1-2.989-2.457 16.934 16.934 0 0 1 2.354-12.479 16.912 16.912 0 0 1 3.799-4.186 16.882 16.882 0 0 1 5.873-3.003 17 17 0 0 1 12.017 1.037 3.051 3.051 0 0 1-2.643 5.498 10.9 10.9 0 0 0-7.709-.666 10.828 10.828 0 0 0-3.763 1.925 10.852 10.852 0 0 0-2.437 2.683 11.006 11.006 0 0 0-1.506 8.004 3.05 3.05 0 0 1-2.996 3.644Zm13.699 11.221a17.102 17.102 0 0 1-6.499-1.283 3.05 3.05 0 0 1 2.322-5.641 10.9 10.9 0 0 0 7.085.425 10.809 10.809 0 0 0 3.815-1.94 10.81 10.81 0 0 0 2.8-3.295 10.908 10.908 0 0 0 1.205-7.058 3.049 3.049 0 1 1 6.017-1c.287 1.721.306 3.47.058 5.2a16.943 16.943 0 0 1-6.304 10.944 16.885 16.885 0 0 1-5.956 3.026 16.903 16.903 0 0 1-4.543.622ZM32.093 62A29.9 29.9 0 0 1 5.161 45.097a3.051 3.051 0 0 1 5.491-2.659c4.804 9.918 15.698 15.233 26.494 12.925a23.959 23.959 0 0 0 6.3-2.302 3.048 3.048 0 0 1 4.129 1.247 3.051 3.051 0 0 1-1.249 4.13 30.093 30.093 0 0 1-7.904 2.891 30.291 30.291 0 0 1-6.329.671ZM54.5 50.09a3.051 3.051 0 0 1-2.527-4.754c3.652-5.428 4.91-11.939 3.541-18.335C54.15 20.62 50.352 15.2 44.818 11.739a3.05 3.05 0 1 1 3.234-5.172c6.947 4.344 11.715 11.148 13.428 19.158 1.717 8.03.138 16.203-4.446 23.017A3.05 3.05 0 0 1 54.5 50.09ZM5.218 34.128l-.103-.001a3.05 3.05 0 0 1-2.946-3.151A29.932 29.932 0 0 1 25.878 2.668c2.762-.59 5.577-.79 8.372-.597a3.05 3.05 0 0 1-.423 6.086 23.914 23.914 0 0 0-6.673.476A23.846 23.846 0 0 0 8.265 31.18a3.05 3.05 0 0 1-3.047 2.948Z"
            />
        </svg>
    `),np=new b("Rocket64Icon",y`
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
            stroke="${$.stroke()}"
            stroke-width="4"
        >
            <path
                d="M61.733 2.813a.629.629 0 0 0-.476-.489c-7.85-1.92-25.984 4.921-35.819 14.748a42.506 42.506 0 0 0-4.776 5.642c-3.032-.275-6.063-.044-8.644 1.082C4.729 27.001 2.609 35.37 2.017 38.963a1.294 1.294 0 0 0 .829 1.427c.187.069.387.095.586.075l11.702-1.285c.008.883.061 1.764.159 2.642a2.62 2.62 0 0 0 .765 1.6l4.531 4.532c.429.433.996.704 1.603.765.872.097 1.748.15 2.626.159L23.534 60.57a1.296 1.296 0 0 0 .402 1.076 1.3 1.3 0 0 0 1.098.337c3.594-.577 11.981-2.698 15.167-9.985 1.126-2.584 1.357-5.599 1.097-8.616a42.377 42.377 0 0 0 5.658-4.777c9.87-9.816 16.668-27.551 14.777-35.792ZM38.182 25.889a6.166 6.166 0 0 1-1.337-6.717 6.166 6.166 0 0 1 5.695-3.806 6.164 6.164 0 0 1 4.358 10.523 6.154 6.154 0 0 1-8.716 0ZM10.896 45.858a6.505 6.505 0 0 0-3.804 1.854c-2.543 2.552-2.784 12.004-2.784 12.004s9.458-.241 12.003-2.787a6.46 6.46 0 0 0 1.855-3.807"
            />
        </svg>
    `),op=new b("CryptoBtc24Icon",y`
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
                fill-rule="nonzero"
                d="M17.3 10.3c.23-1.6-.99-2.46-2.65-3.04l.54-2.16-1.32-.33-.52 2.1-1.06-.24.53-2.12-1.31-.33-.54 2.16-.84-.2-1.82-.45-.35 1.4s.98.23.96.24c.53.13.63.49.61.77l-.61 2.46.13.04-.13-.03-.87 3.45c-.06.16-.23.4-.6.31.01.02-.96-.24-.96-.24l-.65 1.51 1.71.43.94.24-.54 2.19 1.31.33.54-2.17c.36.1.71.2 1.05.28l-.54 2.15 1.32.33.54-2.19c2.25.43 3.94.26 4.65-1.77.57-1.64-.03-2.58-1.21-3.2.86-.2 1.5-.76 1.68-1.93Zm-3.02 4.2c-.4 1.64-3.16.76-4.05.54l.72-2.9c.9.22 3.76.66 3.33 2.37Zm.4-4.23c-.36 1.48-2.65.73-3.4.54l.66-2.63c.74.19 3.14.54 2.75 2.09Z"
            />
        </svg>
    `),ip=new b("CryptoCkBtc24Icon",y`
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
    `),ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",vd="0 0 58 58",wd=`<image xlink:href="${ap}" id="icp-16__b" width="58" height="58" />`,sp=new b("CryptoIcp16Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${vd}"
        >
            ${wd}
        </svg>
    `),lp=new b("CryptoIcp24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${vd}"
        >
            ${wd}
        </svg>
        </svg>
    `),cp=new b("EntrepotLogo144Icon",y`
        <svg
            height="134"
            width="144"
            viewBox="0 0 134 144"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="${$.fill()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `),bd=new b("BrandDiscord24Icon",y`
        <svg
            fill="${$.fill("#5865f2")}"
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
    `),dp=new b("BrandFacebookLogo24Icon",y`
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
            <g fill-rule="nonzero">
                <path
                    fill="#1877f2"
                    d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
                />
                <path
                    fill="#fff"
                    d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
                />
            </g>
        </svg>
    `),up=new b("BrandGoogleLogo24Icon",y`
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
                fill="#4285f4"
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill="#34a853"
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill="#fbbc05"
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill="#ea4335"
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `),fp=new b("BrandIcScan24Icon",y`
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
    `),yd=new b("BrandInstagram24Icon",y`
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
    `),hp=new b("BrandInstagramFlat24Icon",y`
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
            fill="${$.fill()}"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `),$d=new b("BrandTelegram24Icon",y`
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
            fill="${$.fill("#2AABEE")}"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `),xd=new b("BrandTiktok24Icon",y`
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
    `),pp=new b("BrandTiktokFlat24Icon",y`
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
            fill="${$.fill()}"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `),kd=new b("BrandTwitch24Icon",y`
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
            fill="${$.fill("#9146FF")}"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `),Sd=new b("BrandTwitter24Icon",y`
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
            fill="${$.fill("#41ABE1")}"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `),ct={"core-16":[Nh,zh,Kt],"core-24":[Dh,Oh,Yi,jh,Fh,Ji,ed,l2,c2,d2,u2,f2,h2,p2,id,ad,g2,m2,sd,v2,w2,b2,y2,ld,cd,$2,x2,k2,S2,dd,C2,T2,I2,E2,A2,M2,P2,B2,_2,L2,R2,N2,z2,ud,D2,O2,j2,F2,H2,V2,q2,fd,hd,Z2,U2,W2,G2,Y2,Yr,J2,X2,K2,Q2,ep,tp],"core-32":[pd],"core-48":[gd],"core-64":[md,rp,np],cryptocurrencies:[op,ip,sp,lp],logos:[cp],"third-party-brands":[bd,dp,up,fp,yd,hp,$d,xd,pp,kd,Sd]},gp=Ql({Discord:"",Instagram:"",Telegram:"",TikTok:"",Twitch:"",Twitter:"",website:""}),mp=gp.defaultValue,Cd={Discord:bd,Instagram:yd,Telegram:$d,TikTok:xd,Twitch:kd,Twitter:Sd,website:ld},Gs="toniq-",{defineElement:X,defineElementNoInputs:vp}=Di({assertInputs:e=>{if(!e.tagName.startsWith(Gs))throw new Error(`Tag name should start with '${Gs}' but got '${e.tagName}'`)}}),ht=X()({tagName:"toniq-bold-space",styles:g`
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
            ${q.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return h`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `}}),E=X()({tagName:"toniq-icon",hostClasses:{"toniq-icon-fit-icon":!1},styles:({hostClasses:e})=>g`
        :host {
            display: block;
        }
        svg {
            /*
                svg elements are set to inline by default which gives it space under the image. So 
                we're changing it to block here.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["toniq-icon-fit-icon"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return h`
            ${e.icon?J0(e.icon.svgString):""}
        `}}),ii=g`8px`;var hr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(hr||{});const G=X()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>g`
        :host {
            ${q.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ce};
        }

        :host(:hover) button {
            ${O(k.accentPrimaryHover)};
        }

        :host(:active) button {
            ${O(k.accentPrimaryActive)};
        }

        button {
            ${ne};
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
            border-radius: ${ii};
            ${O(k.accentPrimary)};
            padding: 10px;
            transition: color ${W.interaction},
                background-color ${W.interaction},
                border-color ${W.interaction};
        }

        ${nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${O(k.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${O(k.pagePrimary)};
            border-color: ${k.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${vt};
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
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${E.assign({icon:e.icon})}
                      class="icon-template"
                  ></${E}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function wp(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=ta(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(u=>i==="+"?u>l:u<l).sort((u,f)=>i==="+"?u-f:f-u);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function bp(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(f,m){let p=parseFloat(f);return/%/.test(f)&&(p/=100,p*=m),p}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),u=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:u}}}function yp(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Td(e){let t=[];for(const r of e.children)t=t.concat(r,Td(r));return t}function $p(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Td(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const u=d.getBoundingClientRect();if(t&&!yp(r,u,a))continue;const f=window.getComputedStyle(d);let[m,p]=f.getPropertyValue("scroll-snap-align").split(" ");typeof p>"u"&&(p=m);const v=i==="x"?p:m,w=u[s]-r[s]+e[c];switch(v){case"none":break;case"start":n[i].start.push(w);break;case"center":n[i].center.push(w+u[l]/2);break;case"end":n[i].end.push(w+u[l]);break}}}return n}function ta(e){const t=e.getBoundingClientRect(),r=bp(e),n=$p(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Ys([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Ys([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Ys(e){return Array.from(new Set(e))}const Jr="templates-container",xp=4e3;var ai=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(ai||{});const fe=X()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>g`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${kh(`.${Jr}`)}

        .${B(Jr)} {
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

        .arrow ${E} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${O(k.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{mo({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||xp)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Js(t.scrollSnapPositions,0),i=Js(t.scrollSnapPositions,-1);return h`
            <div
                ${ir(()=>{r({scrollSnapPositions:ta(si(n)).x})})}
                class=${Jr}
                ${C("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${E.assign({icon:Yi})}
                        class=${me({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${C("click",()=>{mo({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${E}>
                </div>
                ${e.templates.map(a=>h`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${E.assign({icon:Ji})}
                        class=${me({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${C("click",()=>{mo({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${E}>
                </div>
            </div>
        `}});function Js(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function si(e){const t=e.shadowRoot.querySelector(`.${Jr}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function mo({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=si(e),i=o.clientWidth,a=ta(si(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const u=kp(e,t),f=Xs(o.scrollLeft,a,!1),m=t==="right"?1:-1,p=(o.clientWidth-u*3)*m,v=Xs((f||0)+p,a,!0);t==="right"&&v>f?o.scrollTo({behavior:"smooth",left:v}):t==="left"&&v<f?o.scrollTo({behavior:"smooth",left:v}):wp(o,t)}}function kp(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Xs(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const Ue=X()({tagName:"toniq-checkbox",events:{checkedChange:U()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ae("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ae("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ae("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ae("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ae("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>g`
        :host {
            ${q.boldParagraphFont};
            display: inline-flex;
            transition: color ${W.interaction},
                background-color ${W.interaction},
                opacity ${W.interaction};
            border-radius: 8px;
        }

        button {
            ${ne};
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
            ${Ce};
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

        ${nt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${vt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=h`
            <span class="checkbox ${e.checked?"checked":""}">
                <${E.assign({icon:id})}
                    class="check-mark ${me({hidden:!e.checked})}"
                ></${E}>
            </span>
        `,o=h`
            <slot
                class=${me({label:!0,checked:e.checked})}
            >
                <span
                    class=${me({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return h`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${C("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var li=(e=>(e.Default="default",e.Secondary="secondary",e))(li||{});const vo=X()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>g`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${q.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${O(k.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${O(k.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${E.assign({icon:e.icon})}></${E}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}}),Sp="data-test-id",Tt=Fe(class extends He{constructor(e){super(e),this.element=Cp(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(Sp,e),ve}});function Cp(e,t,r){Tp(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function Tp(e,t){if(e.type!==mr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var ci=(e=>(e.Up="up",e.Down="down",e))(ci||{});const Rr=X()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:U(),openChange:U()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>g`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${q.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${ne};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${nt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${W.interaction} linear transform;
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
            ${Ce};
            ${O(k.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${O(k.pagePrimary)}
            ${$n.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${$n.popupShadowReversed};
        }

        .selected-label-prefix {
            ${q.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ce};
        }

        .select-options .option.selected {
            ${O(k.accentPrimary)}
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
            ${vt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?h`
                  <${E.assign({icon:n.icon})}
                      ${Tt("rendered-input-icon")}
                  ></${E}>
              `:"",s=n.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                ?disabled=${!!n.disabled}
                class=${me({dropdown:!0,open:r.dropdownOpen,"reverse-direction":n.direction==="up"})}
                @click=${()=>{const l=!r.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${E.assign({icon:ad})}
                            class="trigger-icon"
                        ></${E}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(l=>h`
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
        `}}),Ee=X()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles},events:{routeChangeTriggered:U()},styles:({hostClasses:e})=>g`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){e.treatAsRouteChange&&Vi(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?h`
                <a
                    href=${e.url}
                    ${C("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:h`
                <a href=${e.url} ${C("click",n)}><slot></slot></a>
            `}}),di=360,Id=8;function Ed(e){return(e-Id)/2}const At=rt({"main-image-size":di,"secondary-image-size":Ed(di)}),ze=X()({tagName:"toniq-featured-flip-card-footer",styles:g`
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

        ${G}, ${Ee} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${At["secondary-image-size"].value} * 2);
        }

        ${Ee} ${G} {
            width: 100%;
        }

        ${Ee} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${At["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:U(),footerFlipCardButtonClick:U()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?Re(n).filter(i=>!!n[i]).map(i=>{const a=n[i],s=Cd[i];return h`
                          <${Ee.assign({newTab:!0,url:a})}>
                              <${E.assign({icon:s})}></${E}>
                          </${Ee}>
                      `}):"";return h`
            <div class="buttons">
                ${e.viewMoreButtonUrl?h`
                          <${Ee.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${C(Ee.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${G.assign({text:e.viewMoreButtonText,buttonStyle:hr.Outline})}></${G}>
                          </${Ee}>
                      `:h`
                          <${G.assign({text:e.viewMoreButtonText,buttonStyle:hr.Outline})}
                              ${C("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${G}>
                      `}
                ${e.flipCardButtonText?h`
                          <${G.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${C("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${G}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function Ip(e){return!!e}function Ad(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Ep({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function Md(e){return e?e instanceof Error?e.message:xn(e,"message")?String(e.message):String(e):""}function wo(e){return e instanceof Error?e:new Error(Md(e))}function Ap(e){return!!e&&typeof e=="object"}const Mp=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function xn(e,t){return e?Mp.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function pr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Pd(e,t,r=!1,n={}){const o=pr(e),i=new Set(pr(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!xn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||Bd(l,c,s,r,n[a]??{})})}function Bd(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{xn(t,"constructor")&&(!xn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{Bd(l,u,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${Md(f)}`)}}).filter(Ip).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Ap(t)&&Pd(e,t,n,o)}function ra(e){return Array.isArray(e)?"array":typeof e}function kn(e,t){return ra(e)===t}function Pp(e,t,r){if(!kn(e,t))throw new TypeError(`'${r}' is of type '${ra(e)}' but type '${t}' was expected.`)}function Ks({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(kn(r,"object")?Pd(n,r):Pp(n,ra(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function Bp(e,t){return pr(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function _p(e,t){return Bp(e,r=>!t.includes(r))}function _d(e,t){let r=!1;const n=pr(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(pr(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Lp(e){const t=Dn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class Rp extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function Np(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new Rp(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function Dn(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Dn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const zp="px";function Nr(e){return Dp(e,zp)}function Dp(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Op(e,t){return e<t}function jp(e,t){return e>t}const Qs={width:250,height:250};function Fp({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?jp:Op)(t.width/t.height,e.width/e.height)?"width":"height"}function bo({box:e,constraint:t,constraintType:r}){const n=Fp({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function Ld({box:e,ratio:t}){return _d(e,(r,n)=>n*t)}function ui({box:e,min:t,max:r}){return _d(e,(n,o)=>Ep({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function Rd({min:e,max:t,box:r}){const n=Nd({min:e,max:t,box:r}),o=Ld({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Qs.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Qs.width)}}function Nd({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?bo({box:r,constraint:e,constraintType:"min"}):1,o=t?bo({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=Ld({ratio:i,box:r});return(e?bo({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function Hp(e){const t=Vp(e);return kn(t,"object")||kn(t,"array")}function Vp(e){const t=Ks({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=qp(e);return Ks({jsonString:r,errorHandler:()=>{}})}function qp(e){return Ad(e).replace(/,\s*([}\]])/,"$1")}const na="vir-resizable-image";function Zp(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Rt=Zp();function Up(){try{if(!Rt||!Rt.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function oa(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const I=Promise;function F(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function It(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function qe(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function ia(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const fi="local-forage-detect-blob-support";let zr;const Se={},Wp=Object.prototype.toString,Sr="readonly",On="readwrite";function Gp(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function Yp(e){return new I(function(t){var r=e.transaction(fi,On),n=oa([""]);r.objectStore(fi).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function Jp(e){return typeof zr=="boolean"?I.resolve(zr):Yp(e).then(function(t){return zr=t,zr})}function Sn(e){var t=Se[e.name],r={};r.promise=new I(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function hi(e){var t=Se[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function pi(e,t){var r=Se[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function zd(e,t){return new I(function(r,n){if(Se[e.name]=Se[e.name]||Fd(),e.db)if(t)Sn(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=Rt.open.apply(Rt,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(fi)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),hi(e)}})}function aa(e){return zd(e,!1)}function sa(e){return zd(e,!0)}function Dd(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function Xp(e){return new I(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function Od(e){var t=Gp(atob(e.data));return oa([t],{type:e.type})}function jd(e){return e&&e.__local_forage_encoded_blob}function Kp(e){var t=this,r=t._initReady().then(function(){var n=Se[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return It(r,e,e),r}function Qp(e){Sn(e);for(var t=Se[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,aa(e).then(o=>(e.db=o,Dd(e)?sa(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw pi(e,o),o})}function Ze(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return I.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),sa(e)}).then(()=>Qp(e).then(function(){Ze(e,t,r,n-1)})).catch(r);r(i)}}function Fd(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function eg(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=Se[r.name];o||(o=Fd(),Se[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Kp);var i=[];function a(){return I.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return I.all(i).then(function(){return r.db=o.db,aa(r)}).then(function(d){return r.db=d,Dd(r,t._defaultConfig.version)?sa(r):d}).then(function(d){r.db=o.db=d,t._dbInfo=r;for(var u=0;u<c.length;u++){var f=c[u];f!==t&&(f._dbInfo.db=r.db,f._dbInfo.version=r.version)}})}function tg(e,t){var r=this;e=qe(e);var n=new I(function(o,i){r.ready().then(function(){Ze(r._dbInfo,Sr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),jd(d)&&(d=Od(d)),o(d)},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return F(n,t),n}function rg(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){Ze(r._dbInfo,Sr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),d=1;c.onsuccess=function(){var u=c.result;if(u){var f=u.value;jd(f)&&(f=Od(f));var m=e(f,u.key,d++);m!==void 0?o(m):u.continue()}else o()},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return F(n,t),n}function ng(e,t,r){var n=this;e=qe(e);var o=new I(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,Wp.call(t)==="[object Blob]"?Jp(s.db).then(function(l){return l?t:Xp(t)}):t}).then(function(l){Ze(n._dbInfo,On,function(c,d){if(c)return a(c);try{var u=d.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var f=u.put(l,e);d.oncomplete=function(){l===void 0&&(l=null),i(l)},d.onabort=d.onerror=function(){var m=f.error?f.error:f.transaction.error;a(m)}}catch(m){a(m)}})}).catch(a)});return F(o,r),o}function og(e,t){var r=this;e=qe(e);var n=new I(function(o,i){r.ready().then(function(){Ze(r._dbInfo,On,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;i(d)}}catch(d){i(d)}})}).catch(i)});return F(n,t),n}function ig(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Ze(t._dbInfo,On,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return F(r,e),r}function ag(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Ze(t._dbInfo,Sr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return F(r,e),r}function sg(e,t){var r=this,n=new I(function(o,i){if(e<0){o(null);return}r.ready().then(function(){Ze(r._dbInfo,Sr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,d=l.openKeyCursor();d.onsuccess=function(){var u=d.result;if(!u){o(null);return}e===0||c?o(u.key):(c=!0,u.advance(e))},d.onerror=function(){i(d.error)}}catch(u){i(u)}})}).catch(i)});return F(n,t),n}function lg(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Ze(t._dbInfo,Sr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var d=l.result;if(!d){n(c);return}c.push(d.key),d.continue()},l.onerror=function(){o(l.error)}}catch(d){o(d)}})}).catch(o)});return F(r,e),r}function cg(e,t){t=ia.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=I.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?I.resolve(n._dbInfo.db):aa(e).then(s=>{const l=Se[e.name],c=l.forages;l.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Sn(e);const c=Se[e.name],d=c.forages;s.close();for(let f=0;f<d.length;f++){const m=d[f];m._dbInfo.db=null,m._dbInfo.version=l}return new I((f,m)=>{const p=Rt.open(e.name,l);p.onerror=v=>{p.result.close(),m(v)},p.onupgradeneeded=()=>{var v=p.result;v.deleteObjectStore(e.storeName)},p.onsuccess=()=>{const v=p.result;v.close(),f(v)}}).then(f=>{c.db=f;for(let m=0;m<d.length;m++){const p=d[m];p._dbInfo.db=f,hi(p._dbInfo)}}).catch(f=>{throw(pi(e,f)||I.resolve()).catch(()=>{}),f})}):o=a.then(s=>{Sn(e);const l=Se[e.name],c=l.forages;s.close();for(var d=0;d<c.length;d++){const f=c[d];f._dbInfo.db=null}return new I((f,m)=>{var p=Rt.deleteDatabase(e.name);p.onerror=()=>{const v=p.result;v&&v.close(),m(p.error)},p.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},p.onsuccess=()=>{const v=p.result;v&&v.close(),f(v)}}).then(f=>{l.db=f;for(var m=0;m<c.length;m++){const p=c[m];hi(p._dbInfo)}}).catch(f=>{throw(pi(e,f)||I.resolve()).catch(()=>{}),f})})}return F(o,t),o}var dg={_driver:"asyncStorage",_initStorage:eg,_support:Up(),iterate:rg,getItem:tg,setItem:ng,removeItem:og,clear:ig,length:ag,key:sg,keys:lg,dropInstance:cg};function ug(){return typeof openDatabase=="function"}var Ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fg="~~local_forage_type~",el=/^~~local_forage_type~([^~]+)~/,Cn="__lfsc__:",gi=Cn.length,la="arbf",mi="blob",Hd="si08",Vd="ui08",qd="uic8",Zd="si16",Ud="si32",Wd="ur16",Gd="ui32",Yd="fl32",Jd="fl64",tl=gi+la.length,rl=Object.prototype.toString;function Xd(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),d=new Uint8Array(c);for(n=0;n<r;n+=4)i=Ge.indexOf(e[n]),a=Ge.indexOf(e[n+1]),s=Ge.indexOf(e[n+2]),l=Ge.indexOf(e[n+3]),d[o++]=i<<2|a>>4,d[o++]=(a&15)<<4|s>>2,d[o++]=(s&3)<<6|l&63;return c}function vi(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Ge[t[n]>>2],r+=Ge[(t[n]&3)<<4|t[n+1]>>4],r+=Ge[(t[n+1]&15)<<2|t[n+2]>>6],r+=Ge[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function hg(e,t){var r="";if(e&&(r=rl.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&rl.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Cn;e instanceof ArrayBuffer?(n=e,o+=la):(n=e.buffer,r==="[object Int8Array]"?o+=Hd:r==="[object Uint8Array]"?o+=Vd:r==="[object Uint8ClampedArray]"?o+=qd:r==="[object Int16Array]"?o+=Zd:r==="[object Uint16Array]"?o+=Wd:r==="[object Int32Array]"?o+=Ud:r==="[object Uint32Array]"?o+=Gd:r==="[object Float32Array]"?o+=Yd:r==="[object Float64Array]"?o+=Jd:t(new Error("Failed to get type for BinaryArray"))),t(o+vi(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=fg+e.type+"~"+vi(this.result);t(Cn+mi+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function pg(e){if(e.substring(0,gi)!==Cn)return JSON.parse(e);var t=e.substring(tl),r=e.substring(gi,tl),n;if(r===mi&&el.test(t)){var o=t.match(el);n=o[1],t=t.substring(o[0].length)}var i=Xd(t);switch(r){case la:return i;case mi:return oa([i],{type:n});case Hd:return new Int8Array(i);case Vd:return new Uint8Array(i);case qd:return new Uint8ClampedArray(i);case Zd:return new Int16Array(i);case Wd:return new Uint16Array(i);case Ud:return new Int32Array(i);case Gd:return new Uint32Array(i);case Yd:return new Float32Array(i);case Jd:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var ca={serialize:hg,deserialize:pg,stringToBuffer:Xd,bufferToString:vi};function Kd(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function gg(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new I(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){Kd(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=ca,o}function ot(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):Kd(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function mg(e,t){var r=this;e=qe(e);var n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=a.serializer.deserialize(d)),o(d)},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function vg(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var d=c.rows,u=d.length,f=0;f<u;f++){var m=d.item(f),p=m.value;if(p&&(p=a.serializer.deserialize(p)),p=e(p,m.key,f+1),p!==void 0){o(p);return}}o()},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function Qd(e,t,r,n){var o=this;e=qe(e);var i=new I(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(d,u){u?s(u):c.db.transaction(function(f){ot(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,d],function(){a(l)},function(m,p){s(p)})},function(f){if(f.code===f.QUOTA_ERR){if(n>0){a(Qd.apply(o,[e,l,r,n-1]));return}s(f)}})})}).catch(s)});return F(i,r),i}function wg(e,t,r){return Qd.apply(this,[e,t,r,1])}function bg(e,t){var r=this;e=qe(e);var n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function yg(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ot(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return F(r,e),r}function $g(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ot(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return F(r,e),r}function xg(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var d=c.rows.length?c.rows.item(0).key:null;o(d)},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function kg(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ot(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],d=0;d<l.rows.length;d++)c.push(l.rows.item(d).key);n(c)},function(s,l){o(l)})})}).catch(o)});return F(r,e),r}function Sg(e){return new I(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function Cg(e,t){t=ia.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new I(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(Sg(a))}).then(function(i){return new I(function(a,s){i.db.transaction(function(l){function c(m){return new I(function(p,v){l.executeSql(`DROP TABLE IF EXISTS ${m}`,[],function(){p()},function(w,x){v(x)})})}for(var d=[],u=0,f=i.storeNames.length;u<f;u++)d.push(c(i.storeNames[u]));I.all(d).then(function(){a()}).catch(function(m){s(m)})},function(l){s(l)})})}):o=I.reject("Invalid arguments"),F(o,t),o}var Tg={_driver:"webSQLStorage",_initStorage:gg,_support:ug(),iterate:vg,getItem:mg,setItem:wg,removeItem:bg,clear:yg,length:$g,key:xg,keys:kg,dropInstance:Cg};function Ig(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function e0(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Eg(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Ag(){return!Eg()||localStorage.length>0}function Mg(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=e0(e,t._defaultConfig),Ag()?(t._dbInfo=r,r.serializer=ca,I.resolve()):I.reject()}function Pg(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return F(r,e),r}function Bg(e,t){var r=this;e=qe(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return F(n,t),n}function _g(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(i)===0){var u=localStorage.getItem(d);if(u&&(u=o.serializer.deserialize(u)),u=e(u,d.substring(a),l++),u!==void 0)return u}}});return F(n,t),n}function Lg(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return F(n,t),n}function Rg(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return F(r,e),r}function Ng(e){var t=this,r=t.keys().then(function(n){return n.length});return F(r,e),r}function zg(e,t){var r=this;e=qe(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return F(n,t),n}function Dg(e,t,r){var n=this;e=qe(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new I(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,d){if(d)s(d);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(u){(u.name==="QuotaExceededError"||u.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(u),s(u)}})})});return F(o,r),o}function Og(e,t){if(t=ia.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new I(function(i){e.storeName?i(e0(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=I.reject("Invalid arguments"),F(o,t),o}var jg={_driver:"localStorageWrapper",_initStorage:Mg,_support:Ig(),iterate:_g,getItem:Bg,setItem:Dg,removeItem:zg,clear:Pg,length:Ng,key:Lg,keys:Rg,dropInstance:Og};const Fg=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Hg=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Fg(e[n],t))return!0;n++}return!1},t0=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Ht={},nl={},Bt={INDEXEDDB:dg,WEBSQL:Tg,LOCALSTORAGE:jg},Vg=[Bt.INDEXEDDB._driver,Bt.WEBSQL._driver,Bt.LOCALSTORAGE._driver],Xr=["dropInstance"],yo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Xr),qg={description:"",driver:Vg.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Zg(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function $o(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(t0(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class da{constructor(t){for(let r in Bt)if(Bt.hasOwnProperty(r)){const n=Bt[r],o=n._driver;this[r]=o,Ht[o]||this.defineDriver(n)}this._defaultConfig=$o({},qg),this._config=$o({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new I(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=yo.concat("_initStorage");for(let f=0,m=c.length;f<m;f++){const p=c[f];if((!Hg(Xr,p)||t[p])&&typeof t[p]!="function"){a(l);return}}(function(){const f=function(m){return function(){const p=new Error(`Method ${m} is not implemented by the current driver`),v=I.reject(p);return F(v,arguments[arguments.length-1]),v}};for(let m=0,p=Xr.length;m<p;m++){const v=Xr[m];t[v]||(t[v]=f(v))}})();const u=function(f){Ht[s]&&console.info(`Redefining LocalForage driver: ${s}`),Ht[s]=t,nl[s]=f,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(u,a):u(!!t._support):u(!0)}catch(s){a(s)}});return It(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Ht[t]?I.resolve(Ht[t]):I.reject(new Error("Driver not found."));return It(o,r,n),o}getSerializer(t){const r=I.resolve(ca);return It(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return It(n,t,t),n}setDriver(t,r,n){const o=this;t0(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(d){return o._extend(d),a(),o._ready=o._initStorage(o._config),o._ready}function l(d){return function(){let u=0;function f(){for(;u<d.length;){let p=d[u];return u++,o._dbInfo=null,o._ready=null,o.getDriver(p).then(s).catch(f)}a();const m=new Error("No available storage method found.");return o._driverSet=I.reject(m),o._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>I.resolve()):I.resolve();return this._driverSet=c.then(()=>{const d=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(d).then(u=>{o._driver=u._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const d=new Error("No available storage method found.");return o._driverSet=I.reject(d),o._driverSet}),It(this._driverSet,r,n),this._driverSet}supports(t){return!!nl[t]}_extend(t){$o(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=yo.length;t<r;t++)Zg(this,yo[t])}createInstance(t){return new da(t)}}const Ug=new da,Wg=Ug;async function r0(){return await caches.open(na)}async function Gg(e){return await(await r0()).match(e)}const ol=Wg.createInstance({name:na});async function Yg(e,t){await(await r0()).put(e,t)}const xo=new Map;async function Jg(e,t){var n;if(t=t,!xo.has(e)){const o=Dn();xo.set(e,o.promise);try{const i=new Request(e),a=t?await Gg(i):void 0,s=a??await fetch(i),l=t?await ol.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{ol.setItem(e,c)}catch{}const d={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{Yg(i,s)}catch{}o.resolve(d)}catch(i){throw o.reject(i),i}}const r=await xo.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var T;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(T||(T={}));const Xg=[T.Text,T.Json],Kg=[T.Audio];function il(e){return Xg.includes(e)}function Qg(e){return Kg.includes(e)}async function em(e,t){return e.includes("video")?T.Video:e.includes("svg")||t.includes("<svg")?T.Svg:e.includes("html")||t.includes("<html")?T.Html:Hp(t)?T.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?T.Text:e.includes("audio")?T.Audio:e.includes("pdf")?T.Pdf:T.Image}function tm({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===T.Image?ut(h`
            <img src=${r} />
        `):e===T.Video?ut(h`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===T.Text||e===T.Json?ut(h`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===T.Audio?ut(h`
                <audio controls src=${r}></audio>
            `):t}function rm(e,t,r){if(t===T.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===T.Html&&r)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function al({imageUrl:e,blockAutoPlay:t,textTransformer:r=i=>i,allowPersistentCache:n,removeConsoleLogs:o}){const i=await Jg(e,n);if(!i.ok)throw new Error(`Failed to load '${e}'`);const a=await em(i.contentType,i.text),s=r(rm(i.text,a,o));return{templateString:tm({imageText:s,imageType:a,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:a}}class wi extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let nm=!1;function om(){return nm}function im(e){return e?e instanceof Error?e.message:cm(e,"message")?String(e.message):String(e):""}function am(e){return e instanceof Error?e:new Error(im(e))}function sm(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}const lm=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function cm(e,t){return e?lm.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function dm(e){const t=n0();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function n0(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${n0.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function o0(e,t,r){return sm({callback(){return um(e,t,r),!0},fallbackValue:!1})}function um(e,t,r){if(e==="*")r||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var wt;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(wt||(wt={}));const fm=globalThis.crypto;function hm(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return fm.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function pm(e,t,r){return r.type===e&&r.direction===t}function gm(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function mm({message:e,verifyChildData:t,iframeElement:r},n,o,i,a){if(!r)throw new Error("No iframe element was provided.");let s=0,l=!1,c,d,u,f=!1;const m={...e,direction:wt.FromParent,messageId:hm(32)},p=e.type;function v(x){try{if(!o0(n,x,!1))return;const S=x.data;if(S.type==="error")throw new Error(`Child threw an error: ${S.data}`);if(om(),S&&f&&pm(p,wt.FromChild,S)&&S.messageId===m.messageId){let M=!1;try{M=t?t(S.data):!0}catch{}if(!M)return;l=!0,d=x,c=S}}catch(S){u=am(S)}}a.addEventListener("message",v);const w=Date.now();for(;!l&&Date.now()-w<o&&!u;){if(!r.isConnected)throw new wi;const x=r.contentWindow;x&&(f=!0,x.postMessage(m,{targetOrigin:n})),await dm(i||gm(s)),s++}if(a.removeEventListener("message",v),u)throw u;if(!l)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!d)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:d}}function vm({timeoutMs:e=1e4}={timeoutMs:1e4}){return{async sendMessageToChild(t){if(t.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await mm(t,t.childOrigin,t.timeoutMs||e,t.intervalMs,t.globalObject??globalThis)},listenForParentMessages(t){const r=t.globalObject??globalThis;async function n(o){var l;if(!o0(t.parentOrigin,o,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const i=o.data,a=await t.listener({...i,originalEvent:o},()=>{r.removeEventListener("message",n)}),s={type:i.type,direction:wt.FromChild,data:a,messageId:i.messageId};r.parent.postMessage(s,{targetOrigin:t.parentOrigin})}r.addEventListener("message",n)}}}var pe;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(pe||(pe={}));var Q;(function(e){e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded"})(Q||(Q={}));const Be=vm({});async function wm(e,t){const r=Dn();e.onload=()=>{r.resolve()};try{await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.FrameReady},iframeElement:e,timeoutMs:t})}catch{await r.promise,await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.FrameReady},iframeElement:e,timeoutMs:t})}}async function bm({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await wm(n,s),i&&await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(d){return!!(d&&!isNaN(d.width)&&!isNaN(d.height)&&d.width&&d.height)}})).data;return await i0({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.ImageElementLoaded},iframeElement:n,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function i0({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const d={min:e,max:t,box:a??r},u=il(i.imageType)||Qg(i.imageType)?ui(d):Rd(d);c.style.width=Nr(Math.floor(u.width)),c.style.height=Nr(Math.floor(u.height));const f=ui({min:e,max:t,box:u});u.height<f.height?n.classList.add(pe.VerticallyCenter):n.classList.remove(pe.VerticallyCenter),n.style.width=Nr(f.width),n.style.height=Nr(f.height);const m=Nd({min:e,max:t,box:a??r});if(s){if(m>3?await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.SizeDetermined,data:u},iframeElement:o,timeoutMs:l}),i.imageType===T.Html){const p=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},v={width:m*p.width,height:m*p.height};await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.SendScale,data:v},iframeElement:o,timeoutMs:l})}else if(il(i.imageType)){const p=a??r;if(p.height<u.height){const v=u.width/p.width,w=u.height/p.height,x=Math.min(v,w);await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:Q.SendScale,data:{height:x,width:x}},iframeElement:o,timeoutMs:l})}}}}const Dr={x:16,y:8};var wl,bl;function ym(e,t,r,n){const o=Math.random(),i=h(wl||(wl=Vn([`
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
    `])),e.imageType,r??"",T.Svg,T.Html,T.Image,T.Video,T.Text,T.Json,T.Audio,T.Svg,T.Html,T.Image,T.Video,T.Text,T.Json,T.Audio,wt.FromChild,wt.FromChild,Q.ImageElementLoaded,Q.FrameReady,Q.SendScale,Q.SendScalingMethod,Q.SendSize,Q.ForceSize,Q.SizeDetermined,T.Json,T.Text,Dr.y,n,T.Audio),a=h(bl||(bl=Vn([`
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
    `])),e.imageType,n?"allow-scrolling":"",T.Image,T.Svg,T.Video,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,Dr.y,Dr.x,T.Text,T.Json,Dr.y,o,t??"",i);return Ad(ut(a)).replace(String(o),`
${e.templateString}
`)}const $m=[T.Html,T.Video,T.Audio,T.Pdf],xm=[T.Html,T.Text,T.Json];function sl({blockInteractionInput:e,imageType:t,allowScrolling:r}){return typeof e=="boolean"?!e:$m.includes(t)?!0:!!(r&&xm.includes(t))}const km=1e4,Sm={imageData:Wu({async updateCallback(e,t){if(t.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const r={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!e.blockPersistentCache,removeConsoleLogs:!e.allowConsoleLogs};let n;try{n=await Np(e.timeoutMs,al(r))}catch{await Lp(1e3);try{n=await al(r)}catch(i){throw i}}if(n)return n;throw new Error("no image data result")}}),error:void 0},Or=Ni()({tagName:na,stateInitStatic:Sm,events:{settled:U(),imageDataCalculated:U(),errored:U()},styles:g`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${B(pe.VerticallyCenter)}) {
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

        :host(.${B(pe.HideLoading)}) .loading-wrapper,
        :host(.${B(pe.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${B(pe.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${B(pe.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[ko];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??km;e.imageData.updateTrigger(_p({...t,timeoutMs:a},["textTransformer"]),{textTransformer:t.textTransformer,updateTriggered(){e.error&&r({error:void 0}),n.classList.remove(pe.HideLoading),o(new i.settled(!1)),n.classList.remove(pe.VerticallyCenter)}});const s=t.min&&t.max?ui({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?Rd({min:s,max:l,box:t.forcedOriginalImageSize}):void 0,d=Wa(e.imageData,"",w=>{if(o(new i.imageDataCalculated(w)),w.imageType===T.Pdf)return h`
                        <iframe
                            src=${w.imageUrl}
                            ${sn(async x=>{try{await i0({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:x,imageData:w,imageDimensions:l??{width:500,height:500},max:l,min:s,sendSizeMessage:!1,timeoutMs:a}),n[ko]="",o(new i.settled(!0)),n.classList.add(pe.HideLoading)}catch(S){const M=wo(S);if(M instanceof wi)return;console.error(M),r({error:M}),o(new i.errored(M))}})}
                        ></iframe>
                    `;{const x=sl({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:w.imageType})&&!!t.allowScrolling;return h`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${ym(w,t.extraHtml,t.htmlSizeQuerySelector,x)}
                            ${sn(async S=>{try{const M=await bm({min:s,max:l,host:n,iframeElement:S,imageData:w,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:a});n[ko]=M,o(new i.settled(!0)),n.classList.add(pe.HideLoading)}catch(M){const N=wo(M);if(N instanceof wi)return;console.error(N),r({error:N}),o(new i.errored(N))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},w=>{r({error:w}),o(new i.errored(wo(w)))}),u=Wa(e.imageData,ll,w=>sl({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:w.imageType})?"":ll,()=>""),f=e.imageData instanceof Error?e.imageData:e.error,m=f?g`
                  max-width: 100%;
                  max-height: 100%;
              `:c?g`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",p=g`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,v=h`
            <div class="frame-constraint" style=${m}>${d}</div>
        `;return h`
            ${de(!f,h`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${p}>
                ${de(!!f,h`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${f==null?void 0:f.message}</slot>
                        </div>
                    `,v)}
            </div>
            ${u}
        `}}),ll=h`
    <div class="click-cover"></div>
`,ko="latest-frame-srcdoc",ft=X()({tagName:"toniq-flip-card",events:{flippedChange:U()},styles:g`
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

        ${s2(".card-face",!1)}

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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return h`
            <div
                class="flip-wrapper ${me({flipped:e.flipped})}"
                ${C("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),ie=X()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:U()},styles:g`
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
            ${q.h3Font};
            ${q.extraBoldFont};
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
            max-height: ${At["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${At["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Id}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${ft} {
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

        .card-face.front ${ze} {
            margin-top: 24px;
        }

        .card-face.back ${ze} {
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
            ${q.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var m,p,v;const a=e.mainImageSize||di,s=Ed(a);Oo({onElement:n,forCssVar:At["main-image-size"],toValue:`${a}px`}),Oo({onElement:n,forCssVar:At["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(Xi).join(" "),c=h`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],u=h`
            <${E.assign({icon:ud})} slot="loading"></${E}>
        `,f=d?h`
                  <div class="big-image-wrapper">
                      <${Or.assign({imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}>
                          ${u}
                      </${Or}>
                  </div>
              `:"";return h`
            <${ft.assign({flipped:t.flipped})}
                ${C(ze.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(w=>h`
                                    <div class="pic-wrapper">
                                        <${Or.assign({imageUrl:w,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}>
                                            ${u}
                                        </${Or}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${ze.assign({viewMoreButtonText:l,flipCardButtonText:(m=e.infoParagraphs)!=null&&m.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${C(ze.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${ze}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(p=e.infoParagraphs)==null?void 0:p.map(w=>h`
                                    <p>${w}</p>
                                `)}
                    </div>
                    <${ze.assign({viewMoreButtonText:l,flipCardButtonText:(v=e.infoParagraphs)!=null&&v.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${C(ze.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${ze}>
                </div>
            </${ft}>
        `}});function bi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>bi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function a0({value:e,allowed:t,blocked:r}){const n=t?bi({input:e,matcher:t}):!0,o=r?bi({input:e,matcher:r}):!1;return n&&!o}function cl(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(a0({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var yi=(e=>(e.Default="default",e.Outline="outline",e))(yi||{});const jr=X()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:U(),inputBlocked:U()},styles:({hostClasses:e})=>g`
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
                border-radius: ${ii};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${k.pagePrimary.backgroundColor};
                border-color: ${k.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${E} {
                color: ${k.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${E} {
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
                border-radius: ${ii};
                background-color: ${k.accentTertiary.backgroundColor};
                font: ${q.paragraphFont};
                gap: 4px;
            }

            ${nt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${E} {
                margin-right: 10px;
            }

            input {
                ${ne};
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
                ${q.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${vt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Ce};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=cl({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?h`
                  <${E.assign({icon:e.icon})}></${E}>
              `:"";return h`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${n}
                    ${C("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)a0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:u}=cl({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(u))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${de(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});async function Cm(e){return navigator.clipboard.writeText(e)}const Tm="…";function Im(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${Tm}${n}`}function Em(e){return!(e%1)}function Am(e){return e.letterCount==null?4:Em(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const ae=X()({tagName:"toniq-middle-ellipsis",events:{copied:U()},cssVars:{"toniq-middle-ellipsis-text-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":k.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":k.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            /* 5 frames at 60 fps */
            transition: ${W.interaction};
            ${q.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${E} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${E} {
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
            ${ne};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${W.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return h``;const i=e.text,a=Am(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?Im(i,a):i,u=c?i:"",f=s?dd:l?cd:void 0,m=f?h`
                  <${E.assign({icon:f})}></${E}>
              `:"",p=h`
            <span title=${u} class="text-content">
                ${de(!!e.copyOnClick,h`
                        <span
                            class=${me({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${d}
            </span>
        `;return d?s?h`
                    <button
                        tabindex="0"
                        role="link"
                        ${C("click",v=>{var x,S;const w=(S=(x=v.currentTarget)==null?void 0:x.querySelector)==null?void 0:S.call(x,"a");if(!w)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");w.click()})}
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
                            title=${u}
                        >
                            ${p} ${m}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${C("click",async()=>{await Cm(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${p} ${m}
                    </button>
                `:h`
                    ${p}
                `:h``}}),dl="...";function Mm(e,t,r=7,n=5){let o;e=Qt(e,1,t),r=Qt(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?So(t-o,t):e>o?So(Math.min(s.start,t-o),Math.min(s.end,t)):So(1,Math.min(t,o+1));function c(u,f){return l.length+1!==t?f:[u]}const d=l[l.length-1];if(d&&d<t){const u=c(t,[dl,t]);return[...l,...u]}else return l[0]!==1?c(1,[1,dl]).concat(l):l}function So(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}X()({tagName:"toniq-pagination",styles:g`
        :host {
            display: flex;
        }

        button {
            ${ne};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Ce};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${O(k.accentSecondary)};
        }

        .control:hover {
            ${O(k.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${O(k.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${q.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${O(k.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${O(k.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:U()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?h``:h`
                <button
                    ${C("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${E.assign({icon:Yi})}></${E}>
                </button>
                ${Mm(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?h`
                                <div class="page" disabled>${n}</div>
                            `:h`
                                <button
                                    class=${me({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${C("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${C("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${E.assign({icon:Ji})}></${E}>
                </button>
            `}});const V=X()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:U()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ae("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ae("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ae("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ae("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>g`
        :host {
            ${q.boldParagraphFont};
            display: inline-flex;
            transition: color ${W.interaction},
                background-color ${W.interaction},
                opacity ${W.interaction};
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
            ${ne};
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
            transition: ${W.interaction};
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

        ${nt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${vt};
        }

        .wrapper.disabled::before {
            ${vt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Tl()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return Pm(e.entries).map(i=>Bm(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function Pm(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${V.tagName} was given duplicate entry values.`),Object.values(t)}function Bm(e,t,r,n){const o=t===r.value,i=h`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${me({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${C("click",()=>{n()})}
        >
            <input
                ${C("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}const L={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Vt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function _m(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${L.lowerLabelWrapper} .${L.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${L.upperLabelWrapper} .${L.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function Lm(e,t=8){const r=_m(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Co({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function gr(e){return Gh(e)&&e.min!==void 0&&e.max!==void 0}function $i(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${L.range}`);return(t==null?void 0:t.clientWidth)??0}function To(e,t,r){return`${r?r2(e):e} ${t}`}function Rm({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Nm({value:e,double:t,min:r,max:n}){return t?gr(e)?{min:Qt(e.min,r,Math.min(e.max,n)),max:Qt(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:gr(e)?r:Qt(e,r,n)}function zm({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:gr(e)?{min:go(n,e.min),max:go(n,e.max)}:go(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function Io(e,t,r){return r?t[e]||0:e}function Dm(e){return{actualLimits:Rm(e),actualValue:Nm(e)}}function Om(e,t){var n,o,i;let r=!1;if(gr(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${L.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${L.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${L.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function s0(e,t){const{actualValue:r,actualLimits:n}=Dm({...e}),o=o2(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=zm({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=$i(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const st=16,ul=g`
    ${st}px
`,fl=g`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${ul};
    width: ${ul};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${W.interaction};
    ${O(k.accentPrimary)};
`,hl=g`
    transform: scale(1.2);
`;function Wt(e){requestAnimationFrame(()=>{const t=s0(e.instanceInputs,e).elementValue;Om(t,e)&&(e.setAttribute("disabled","true"),Wt(e))})}const z=X()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:U()},styles:g`
        :host {
            display: block;
        }

        .${B(L.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${O(k.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${O(k.accentPrimary)};
        }

        .${B(L.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${q.boldParagraphFont};
            ${Ce};
        }

        .${B(L.labelPixelMarginWrapper)},
            .${B(L.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${B(L.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${B(L.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${nt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${B(L.lowerSlider)},
        .${B(L.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-moz-range-thumb {
            ${fl}
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-webkit-slider-thumb {
            ${fl}
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-webkit-slider-thumb:hover {
            ${hl}
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-moz-range-thumb:hover {
            ${hl}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Wt(e)}),e.addEventListener("keydown",()=>{Wt(e)}),e.addEventListener("keyup",()=>{Wt(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:u,rangeWidth:f}=s0({...e},t);if(Wt(t),gr(d))return m(a,d,u);return v(a,d,u);function m(w,x,S){const M={left:Ct((f-st)*(x.min-S.min)/(S.max-S.min)+st/2),right:Ct((f-st)*(S.max-x.max)/(S.max-S.min)+st/2)},N=To(w.min,c,l),ee=To(w.max,c,l);requestAnimationFrame(()=>{const we=Lm(t);we!==o.labelOverlap&&i({labelOverlap:we})});const se=(S.max-x.max)/(S.max-S.min)>.5,te=Co({value:x.min,limits:{min:S.min,max:x.max},flip:!0}),H=Co({value:x.max,limits:{min:x.min,max:S.max},flip:!1}),re=o.labelOverlap&&se?o.labelOverlap:0,zt=o.labelOverlap&&!se?o.labelOverlap:0;return h`
                <div
                    class="range"
                    ${ir(()=>{i({rangeWidth:$i(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${M.left}; right:${M.right}"
                    ></div>
                    <span
                        class="${L.labelOuterWrapper} ${L.lowerLabelWrapper}"
                        style="left: ${M.left}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-left: ${po(te)}"
                        >
                            <span
                                class="${L.labelPixelMarginWrapper}"
                                style="margin-right: ${Ct(zt)}"
                                ${Tt(Vt.lowerLabel)}
                            >
                                ${N}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${L.labelOuterWrapper} ${L.upperLabelWrapper} ${L.rightAlignedLabelWrapper}"
                        style="right: ${M.right}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-right: ${po(H)}"
                        >
                            <span
                                class="${L.labelPixelMarginWrapper}"
                                style="margin-left: ${Ct(re)}"
                                ${Tt(Vt.upperLabel)}
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
                            class="${L.lowerSlider} ${L.slider}"
                            .min=${S.min}
                            .max=${S.max}
                            .value=${x.min}
                            ${C("input",we=>{const bt=we.target,Dt={...w,min:Io(Number(bt.value),s,l)};p(Dt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${L.upperSlider} ${L.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${x.max}
                            ${Tt(Vt.slider)}
                            ${C("input",we=>{const bt=we.target,Dt={...w,max:Io(Number(bt.value),s,l)};p(Dt)})}
                        />
                    </div>
                </div>
            `}function p(w){i({internalValue:w}),e.disabled||n(new r.valueChange(w))}function v(w,x,S){const M=Ct((f-st)*(S.max-x)/(S.max-S.min)+st/2),N=To(w,c,l),ee=Co({value:x,limits:S,flip:!1});return h`
                <div
                    class="range"
                    ${ir(()=>{i({rangeWidth:$i(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${M}"></div>
                    <span
                        class="${L.labelOuterWrapper} ${L.rightAlignedLabelWrapper}"
                        style="right: ${M}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-right: ${po(ee)}"
                            ${Tt(Vt.label)}
                        >
                            ${N}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${L.slider}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${x}
                        ${Tt(Vt.slider)}
                        ${C("input",se=>{const te=se.target,H=Io(Number(te.value),s,l);p(H)})}
                    />
                </div>
            `}}});var l0=(e=>(e.Default="default",e.TextOnly="text-only",e))(l0||{});const Eo=X()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>g`
        :host {
            ${q.boldParagraphFont};
            ${Ce};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${ne};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${O(k.accentSecondary)};
            transition: color ${W.interaction},
                background-color ${W.interaction};
        }

        ${nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${O(k.accentPrimary)};
        }

        :host(:hover) button {
            ${O(k.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${O(k.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${O(k.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${O(k.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${O(k.pageInteraction)};
            border-color: ${k.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${O(k.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${k.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${O(k.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${vt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${E.assign({icon:e.icon})}
                      class="icon-template"
                  ></${E}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),er=vp({tagName:"toniq-tooltip",styles:g`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${k.accentPrimary.backgroundColor};
            ${$n.menuShadow};
            background-color: ${k.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return h`
            <slot></slot>
        `}}),Kr=X()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${W.pretty};
        }

        .tooltip-wrapper {
            transition: visibility ${W.pretty} ${W.pretty},
                opacity ${W.pretty};
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return h`
            <div
                class="slot-wrapper"
                ${C("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${er}>${e.tooltipContent}</${er}>
            </div>
        `}}),Gt=X()({tagName:"toniq-top-tabs",events:{valueChange:U()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>g`
        :host {
            display: block;
        }

        ul {
            ${ne};
            display: flex;
            width: 100%;
        }

        li {
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${k.pageTertiary.foregroundColor};
            transition: border-bottom-width ${W.interaction},
                border-color ${W.interaction};
        }

        button {
            ${ne};
            cursor: pointer;
            ${q.paragraphFont};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
            transition: padding-bottom ${W.interaction};
        }

        button {
            max-width: 300px;
        }

        ${ht} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected button {
            ${q.boldFont};
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return h`
            <ul role="tablist">
                ${e.tabs.map(n=>{const o=n.value===e.value;return h`
                        <li
                            ${Ju("tab")}
                            role="presentation"
                            class=${me({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${C("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${ht.assign({text:n.label})}></${ht}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),c0=Z({title:"Data",parent:void 0}),Tn=X()({tagName:"toniq-icon-book-viewer",styles:g`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${k.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return h`
            <${E.assign({icon:e.icon})}></${E}>
        `}}),jn=Object.values(ct).reduce((e,t)=>(t.forEach(r=>{if(r.iconName in e)throw new Error(`Icon name duplicate: '${r.iconName}'`);e[r.iconName]=r}),e),{}),ua=Object.keys(jn).sort(),jm=Z({title:"Social Urls",parent:c0,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return h`
                        <${Tn.assign({icon:n})}></${Tn}>
                    `}})}Object.entries(Cd).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),K=Z({title:"Elements",parent:void 0}),Fm=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:g`
            ${ht} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],Hm=Z({title:ht.tagName,parent:K,elementExamplesCallback({defineExample:e}){Fm.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:g`
                    .bold {
                        ${q.boldFont}
                    }

                    ${t.extraStyle??g``}
                `,renderCallback({state:r,updateState:n}){return h`
                        <${ht.assign({text:t.text})}
                            ${C("click",()=>{n({isBold:!r.isBold})})}
                            class=${me({bold:r.isBold})}
                        ></${ht}>
                        More text
                    `}})})}}),Vm=Z({parent:K,title:G.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:hr.Secondary}},{name:"Outline",inputs:{buttonStyle:hr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:g`
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
                `,renderCallback({state:n,updateState:o}){return n.timeoutId||o({timeoutId:window.setTimeout(()=>{o({showIcon:!n.showIcon,timeoutId:void 0})},1e3)}),h`
                        <${G.assign({text:"Button",...r.inputs})}></${G}>
                        <${G.assign({icon:Yr,...r.inputs})}></${G}>
                        <${G.assign(n.showIcon?{icon:Yr,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${G}>
                        <${G.assign({text:"Button",icon:Yr,...r.inputs})}></${G}>
                        <${G.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${G}>
                        <${G.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${G}>
                    `}})})}}),pl=g`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${fe} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,qm=Z({parent:K,title:fe.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:pl,renderCallback(){return h`
                    <${fe.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ct["core-24"].map(t=>{const r=g`
                                padding: 24px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return h`
                                <${E.assign({icon:t})} style=${r}></${E}>
                            `})})}></${fe}>
                    <${fe.assign({enableAutomaticCycling:!0,templates:ct["core-24"].map(t=>{const r=g`
                                padding: 100px 24px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return h`
                                <${E.assign({icon:t})} style=${r}></${E}>
                            `})})}></${fe}>
                    <${fe.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ct["core-24"].map(t=>{const r=N0({min:0,max:150}),n=g`
                                padding: 100px ${r}px;
                                border: 1px solid ${k.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return h`
                                <${E.assign({icon:t})} style=${n}></${E}>
                            `})})}></${fe}>
                `}}),e({title:"banner style",styles:pl,renderCallback(){return h`
                    <${fe.assign({enableAutomaticCycling:!0,style:ai.BannerStyle,templates:ct["core-24"].map(t=>{const r=g`
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
                            `;return h`
                                <${E.assign({icon:t})} style=${r}></${E}>
                            `})})}></${fe}>
                    <${fe.assign({enableAutomaticCycling:!0,style:ai.BannerStyle,templates:[ct["core-24"][0]].map(t=>{const r=g`
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
                            `;return h`
                                <${E.assign({icon:t})} style=${r}></${E}>
                            `})})}
                        class=${fe.hostClasses["toniq-carousel-banner-style"]}
                    ></${fe}>
                `}})}});function Zm(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:R.Color,initValue:""}]);return Object.fromEntries(t)}function Um(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(Xi);return B(t.join(`
`))}const Wm=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Ao=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],Gm=Z({parent:K,title:Ue.tagName,controls:{Text:{controlType:R.Text,initValue:"Text"},...Zm(Ue)},elementExamplesCallback({defineExample:e}){Wm.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Ao.map(r=>!!r.inputs.checked),extraEntryStatuses:Ao.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:g`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Ao.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var u;return h`
                                    <${Ue.assign({...t.inputs,...oi(i.inputs,["checked"]),checked:!!((u=r.extraEntryStatuses[a])!=null&&u[d]),text:c})}
                                        ${C(Ue.events.checkedChange,()=>{const f=[...r.extraEntryStatuses];f[a][d]=!f[a][d],n({extraEntryStatuses:f})})}
                                    ></${Ue}>
                                `}),l=Um(o);return h`
                            <div class="checkbox-group" style=${l}>
                                <${Ue.assign({...t.inputs,...oi(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${C(Ue.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${Ue}>
                                ${s}
                            </div>
                        `})}})})}}),Ym=Z({parent:K,title:vo.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Kt}},{inputs:{icon:Kt}},{inputs:{},template:h`
                    HTML child
                `},{inputs:{icon:Kt},template:h`
                    HTML child
                `},{customStyle:g`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:li.Default}},{title:"secondary style",inputs:{style:li.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>h`
                        <${vo.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${de(!!o.template,o.template)}</${vo}>
                    `)}})})}}),Fr=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],Jm=[{title:"default"},{title:"transparent background",customStyle:g`
            ${ea.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],gl=[{},{customStyle:g`
            width: 500px;
            height: 100px;
        `},{customStyle:g`
            max-height: 30px;
            min-height: 30px;
        `}],Xm=Z({title:Rr.tagName,parent:K,controls:{Selected:{controlType:R.Dropdown,initValue:Fr[0].label,options:Fr.map(e=>e.label)},Direction:{controlType:R.Dropdown,initValue:"Down",options:Yh(ci)},Icon:{controlType:R.Dropdown,initValue:ed.iconName,options:["None",...ua]},Prefix:{controlType:R.Text,initValue:"Sort by: "},"Force open":{controlType:R.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){Jm.forEach(t=>{e({title:t.title,stateInitStatic:{selected:gl.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:g`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return gl.map((i,a)=>{const s=g`
                            ${t.customStyle??g``};
                            ${i.customStyle??g``};
                        `;return h`
                            <${Rr.assign({...t.inputs,...i.inputs,options:Fr,value:r.selected[a]??Fr.find(l=>l.label===o.Selected),icon:jn[o.Icon],selectedLabelPrefix:o.Prefix,direction:ci[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${C(Rr.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Rr}>
                        `})}})})}}),ml="/toniq-labs-design-system";function Km(...e){const r=[globalThis.location.pathname.startsWith(ml)?ml:"",...e].filter(Xi);return Xh(...r)}const Mo=Array(30).fill(Km("/toniq-labs-logo.png")),xi=["Hello there.","There is stuff here."],Hr=xi.concat(Array(30).fill(xi)),Qm=Z({title:ie.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${ie.assign({infoParagraphs:Hr,imageUrls:Mo,socialUrls:mp,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${ie}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${ie.assign({imageUrls:Mo,title:"Featured Stuff",infoParagraphs:void 0})}></${ie}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${ie.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Hr,viewMoreUrl:"https://toniqlabs.com"})}
                        ${C(ie.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${ie}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${ie.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Hr})}></${ie}>
                `}}),e({title:"with custom height",styles:g`
                ${ie} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${ie.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Hr})}></${ie}>
                `}}),e({title:"smaller",styles:g`
                ${ie} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return h`
                    <${ie.assign({imageUrls:Mo,infoParagraphs:xi,title:"Featured Stuff"})}></${ie}>
                `}})}}),e5=Z({title:ft.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:g`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return h`
                    <${ft.assign({flipped:t.flipped})}
                        ${C(ft.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${ft}>
                `}})}}),t5=Z({parent:K,title:Ee.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return h`
                        <${Ee.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Ee}>
                    `}})})}}),r5=Z({title:E.tagName,parent:K,controls:{"CSS color":{controlType:R.Color,initValue:""},[Pt.color]:{controlType:R.Color,initValue:""},[Pt.strokeColor]:{controlType:R.Color,initValue:""},[Pt.fillColor]:{controlType:R.Color,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{icon:md},{icon:gd},{icon:pd},{icon:sd},{icon:Kt},{icon:void 0}];e({title:"sizes",styles:g`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){const n=Object.entries(r).filter(([,o])=>!!o).map(([o,i])=>(o.toLowerCase().includes("css")&&(o="color"),`${o}: ${i};`)).join(`
`);return t.map(o=>h`
                        <${E.assign({icon:o.icon})}
                            style=${n}
                        ></${E}>
                    `)}})}}),n5=Z({title:jr.tagName,parent:K,controls:{"External value":{controlType:R.Text,initValue:""},Placeholder:{controlType:R.Text,initValue:"placeholder"},Icon:{controlType:R.Dropdown,initValue:hd.iconName,options:["None",...ua]},Suffix:{controlType:R.Text,initValue:"ICP"},"No browser helps":{controlType:R.Checkbox,initValue:!1},"Blocked characters":{controlType:R.Text,initValue:""},"Exclusive characters":{controlType:R.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:g`
                    height: 75px;
                    width: 300px;
                `},{customStyles:g`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:yi.Default}},{title:"outline",inputs:{style:yi.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:g`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),h`
                            <${jr.assign({...n.inputs,value:o["External value"]||i.value,icon:jn[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${C(jr.events.valueChange,l=>{a({value:l.detail})})}
                            ></${jr}>
                        `))}})})}}),o5=Z({title:ae.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return h`
                    <${ae.assign({text:"Long string instead of text"})}></${ae}>
                `}}),e({title:"Short text",renderCallback(){return h`
                    <${ae.assign({text:"Short text"})}></${ae}>
                `}}),e({title:"External Link",renderCallback(){return h`
                    <${ae.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${ae}>
                `}}),e({title:"Copyable",renderCallback(){return h`
                    <${ae.assign({text:"Long text that you can copy",copyOnClick:!0})}></${ae}>
                `}}),e({title:"Custom CSS vars",styles:g`
                ${ae} {
                    ${ae.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${ae.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${ae.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${ae.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return h`
                    <${ae.assign({text:"long text with custom colors",copyOnClick:!0})}></${ae}>
                `}})}}),qt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],be={basic:qt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...qt.slice(1)],disabled:[{...qt[0],disabled:!0},...qt.slice(1)],noLabels:Hh(qt,e=>({...e,label:void 0}))},i5=Z({title:V.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:be.basic[0].value},renderCallback({state:t,updateState:r}){return h`
                    <${V.assign({entries:be.basic,value:t.selectedValue})}
                        ${C(V.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${V}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:be.basic[0].value},styles:g`
                ${V} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${V.assign({entries:be.basic,value:t.selectedValue})}
                        ${C(V.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${V}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:be.longText[0].value},styles:g`
                ${V} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${V.assign({entries:be.longText,value:t.selectedValue})}
                        ${C(V.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${V}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:be.noLabels[0].value},renderCallback({state:t,updateState:r}){return h`
                    <${V.assign({entries:be.noLabels,value:t.selectedValue})}
                        ${C(V.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${V}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:be.disabled[1].value},renderCallback({state:t,updateState:r}){return h`
                    <${V.assign({entries:be.disabled,value:t.selectedValue})}
                        ${C(V.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${V}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:be.basic[0].value},styles:g`
                ${V} {
                    ${V.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${V.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${V.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${V.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${V.assign({entries:be.basic,value:t.selectedValue})}
                        ${C(V.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${V}>
                `}})}}),De=g`
    ${z} {
        width: 300px;
    }
`,Po={min:10,max:50},a5=Z({title:z.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,...Po})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({double:!0,value:t.value,min:0,max:100})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,...Po,suffix:"ICP"})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:g`
                ${De}
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,min:-100,max:100})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:g`
                ${De}

                ${z} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({value:t.value,...Po})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${z}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:g`
                ${De}

                ${z} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return h`
                    <${z.assign({double:!0,value:t.value,min:0,max:100})}
                        ${C(z.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${z}>
                `}})}});Z({title:"Toggle Button",parent:K});const s5=[{title:"default",inputs:{}},{title:"text only",inputs:{style:l0.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],vl=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],l5=Z({title:Eo.tagName,parent:K,controls:{Text:{controlType:R.Text,initValue:"Toggle Button"},Icon:{controlType:R.Dropdown,initValue:fd.iconName,options:["None",...ua]}},elementExamplesCallback({defineExample:e}){s5.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:vl.map(r=>!!r.inputs.toggled)},styles:g`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return vl.map((i,a)=>h`
                            <${Eo.assign({...t.inputs,toggled:r.buttonStates[a],icon:jn[o.Icon],text:o.Text,...oi(i.inputs,["toggled"])})}
                                ${C("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Eo}>
                        `)}})})}}),c5=Z({parent:K,title:Kr.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:g`
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
                `,renderCallback(){return h`
                        <${Kr.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${Kr}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:h`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),d5=Z({parent:K,title:er.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${Kr.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return h`
                    <${er}>This is a tooltip.</${er}>
                `}})}}),u5=[c5,d5],f5=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:g`
            :host {
                width: 500px;
            }

            ${Gt} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:g``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],h5=Z({title:Gt.tagName,parent:K,elementExamplesCallback({defineExample:e}){f5.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:g`
                    ${t.extraStyles??g``}
                `,renderCallback({state:r,updateState:n}){return h`
                        <${Gt.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${C(Gt.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${Gt}>
                    `}})})}}),d0=Z({title:"Icons",parent:void 0}),p5=Object.entries(ct).map(([e,t])=>Z({title:e,parent:d0,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.iconName,renderCallback(){return h`
                                <${Tn.assign({icon:n})}></${Tn}>
                            `}}))}}));function u0(e){const t=g5(e),r=fr(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Re(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function g5(e){typeof e!="string"&&(e=String(e));const n=`{"${qh(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const fa=Z({title:"Styles",parent:void 0}),m5=g`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${q.labelFont};
        ${q.monospaceFont};
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
        ${q.h2Font};
    }
`;function v5(e,t,r){const n=u0(O(r));return e({title:t,styles:m5,renderCallback(){return h`
                <div class="color-example" style=${O(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>h`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const w5=Z({title:"Colors",parent:fa,elementExamplesCallback({defineExample:e}){Re(k).map(t=>v5(e,t,k[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),b5=g`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${q.labelFont};
        ${q.monospaceFont};
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
`;function y5(e,t,r){const n=u0(r);return e({title:t,styles:b5,renderCallback(){return h`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Re(n).map(o=>{const i=n[o];return h`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const $5=Z({title:"Fonts",parent:fa,elementExamplesCallback({defineExample:e}){Re(q).map(t=>{const r=q[t];return y5(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),x5=[K,d0,fa,c0],k5=[...p5,Vm,qm,Gm,Ym,Xm,Qm,e5,t5,r5,n5,o5,i5,a5,l5,...u5,jm,w5,$5,h5,Hm].sort((e,t)=>e.title.localeCompare(t.title)),S5=[...x5,...k5];_n({tagName:"toniq-design-system-app",styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${uo} {
            height: 100%;
            width: 100%;
            ${q.paragraphFont};
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
    `,renderCallback(){return h`
            <${uo.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:S5,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${_e.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${uo}>
        `}});
