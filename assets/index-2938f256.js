var ga=Object.freeze,ma=Object.defineProperty;var g0=(e,t,r)=>t in e?ma(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var On=(e,t,r)=>(g0(e,typeof t!="symbol"?t+"":t,r),r),jn=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var yt=(e,t,r)=>(jn(e,t,"read from private field"),r?r.call(e):t.get(e)),Ht=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Hn=(e,t,r,n)=>(jn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var Lr=(e,t,r)=>(jn(e,t,"access private method"),r);var Vn=(e,t)=>ga(ma(e,"raw",{value:ga(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function $t(e,t){return e.controlType===t}var R;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(R||(R={}));const pl=Symbol("any-type"),m0={[R.Checkbox]:!1,[R.Color]:"",[R.Dropdown]:"",[R.Hidden]:pl,[R.Number]:0,[R.Text]:""};function v0(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=m0[o.controlType];i!==pl&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function w0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function gl(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>In(r).trim()).join(`
`))}function In(e){return e?e instanceof Error?e.message:En(e,"message")?String(e.message):String(e):""}function b0(e){return e instanceof Error?e:new Error(In(e))}function ml(e){return!!e}function va(e){return!!e&&typeof e=="object"}function y0(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const $0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function En(e,t){return e?$0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function vl(e,t){return e&&t.every(r=>En(e,r))}function _o(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function x0(e){return Array.isArray(e)?"array":typeof e}function An(e,t){return x0(e)===t}function wa({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const ba="Failed to compare objects using JSON.stringify";function ya(e,t,r){return wa({source:e,errorHandler(n){if(r)return"";throw n}})===wa({source:t,errorHandler(n){if(r)return"";throw n}})}function tr(e,t,r={}){try{return e===t?!0:va(e)&&va(t)?ya(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>tr(e[o],t[o])):!1:ya(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=b0(n);throw o.message.startsWith(ba)||(o.message=`${ba}: ${o.message}`),o}}function k0(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function S0(e){return _o(e).filter(t=>isNaN(Number(t)))}function C0(e){return S0(e).map(r=>e[r])}function T0(e,t){return C0(t).includes(e)}function nn(e,t){let r=!1;const n=_o(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(_o(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function I0(e){const t=wl();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function wl(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${wl.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function $a(e,t){try{return E0(e,t),!0}catch{return!1}}function E0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}var oe;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(oe||(oe={}));function Ti(e,t){const r=on(e.title);return e.parent?[...Ti(e.parent,!1),on(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function on(e){return w0(e).toLowerCase().replaceAll(/\s/g,"-")}function A0({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Z(e){const t={...e,entryType:oe.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:oe.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ml)};r.add(n.title),t.elementExamples[on(o.title)]=o}}),t}var qe;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(qe||(qe={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ke=e=>(...t)=>({_$litDirective$:e,values:t});let Qe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zn;const an=window,zt=an.trustedTypes,xa=zt?zt.createPolicy("lit-html",{createHTML:e=>e}):void 0,sn="$lit$",De=`lit$${(Math.random()+"").slice(9)}$`,Ii="?"+De,M0=`<${Ii}>`,ft=document,dr=()=>ft.createComment(""),ur=e=>e===null||typeof e!="object"&&typeof e!="function",bl=Array.isArray,yl=e=>bl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qn=`[ 	
\f\r]`,Vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ka=/-->/g,Sa=/>/g,ot=RegExp(`>|${qn}(?:([^\\s"'>=/]+)(${qn}*=${qn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ca=/'/g,Ta=/"/g,$l=/^(?:script|style|textarea|title)$/i,P0=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),_0=P0(1),xe=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Ia=new WeakMap,ct=ft.createTreeWalker(ft,129,null,!1),xl=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Vt;for(let l=0;l<r;l++){const c=e[l];let d,u,h=-1,m=0;for(;m<c.length&&(a.lastIndex=m,u=a.exec(c),u!==null);)m=a.lastIndex,a===Vt?u[1]==="!--"?a=ka:u[1]!==void 0?a=Sa:u[2]!==void 0?($l.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=ot):u[3]!==void 0&&(a=ot):a===ot?u[0]===">"?(a=o??Vt,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?ot:u[3]==='"'?Ta:Ca):a===Ta||a===Ca?a=ot:a===ka||a===Sa?a=Vt:(a=ot,o=void 0);const p=a===ot&&e[l+1].startsWith("/>")?" ":"";i+=a===Vt?c+M0:h>=0?(n.push(d),c.slice(0,h)+sn+c.slice(h)+De+p):c+De+(h===-2?(n.push(void 0),l):p)}const s=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xa!==void 0?xa.createHTML(s):s,n]};class hr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=xl(t,r);if(this.el=hr.createElement(c,n),ct.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ct.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(sn)||h.startsWith(De)){const m=d[a++];if(u.push(h),m!==void 0){const p=o.getAttribute(m.toLowerCase()+sn).split(De),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:v[2],strings:p,ctor:v[1]==="."?Sl:v[1]==="?"?Cl:v[1]==="@"?Tl:Tr})}else l.push({type:6,index:i})}for(const h of u)o.removeAttribute(h)}if($l.test(o.tagName)){const u=o.textContent.split(De),h=u.length-1;if(h>0){o.textContent=zt?zt.emptyScript:"";for(let m=0;m<h;m++)o.append(u[m],dr()),ct.nextNode(),l.push({type:2,index:++i});o.append(u[h],dr())}}}else if(o.nodeType===8)if(o.data===Ii)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(De,u+1))!==-1;)l.push({type:7,index:i}),u+=De.length-1}i++}}static createElement(t,r){const n=ft.createElement("template");return n.innerHTML=t,n}}function pt(e,t,r=e,n){var o,i,a,s;if(t===xe)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=ur(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=pt(e,l._$AS(e,t.values),l,n)),t}let kl=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ft).importNode(n,!0);ct.currentNode=i;let a=ct.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new Ft(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new Il(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=ct.nextNode(),s++)}return ct.currentNode=ft,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Ft{constructor(t,r,n,o){var i;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=pt(this,t,r),ur(t)?t===G||t==null||t===""?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==xe&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):yl(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==G&&ur(this._$AH)?this._$AA.nextSibling.data=t:this.$(ft.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=hr.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new kl(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=Ia.get(t.strings);return r===void 0&&Ia.set(t.strings,r=new hr(t)),r}T(t){bl(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Ft(this.k(dr()),this.k(dr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Tr{constructor(t,r,n,o,i){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=pt(this,t,r,0),a=!ur(t)||t!==this._$AH&&t!==xe,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=pt(this,s[n+l],r,l),c===xe&&(c=this._$AH[l]),a||(a=!ur(c)||c!==this._$AH[l]),c===G?t=G:t!==G&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Sl extends Tr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}const B0=zt?zt.emptyScript:"";class Cl extends Tr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==G?this.element.setAttribute(this.name,B0):this.element.removeAttribute(this.name)}}class Tl extends Tr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=pt(this,t,r,0))!==null&&n!==void 0?n:G)===xe)return;const o=this._$AH,i=t===G&&o!==G||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==G&&(o===G||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Il{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pt(this,t)}}const L0={O:sn,P:De,A:Ii,C:1,M:xl,L:kl,D:yl,R:pt,I:Ft,V:Tr,H:Cl,N:Tl,U:Sl,F:Il},Ea=an.litHtmlPolyfillSupport;Ea==null||Ea(hr,Ft),((Zn=an.litHtmlVersions)!==null&&Zn!==void 0?Zn:an.litHtmlVersions=[]).push("2.7.4");const R0=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new Ft(t.insertBefore(dr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:N0}=L0,Aa=()=>document.createComment(""),Zt=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Aa(),i),s=o.insertBefore(Aa(),i);r=new N0(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},it=(e,t,r=e)=>(e._$AI(t,r),e),z0={},D0=(e,t=z0)=>e._$AH=t,F0=e=>e._$AH,Un=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=Ke(class extends Qe{constructor(e){var t;if(super(e),e.type!==Cr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return xe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ma=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},O0=Ke(class extends Qe{constructor(e){if(super(e),e.type!==Cr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const i=F0(e),{values:a,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ht=s,a;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,m=i.length-1,p=0,v=a.length-1;for(;h<=m&&p<=v;)if(i[h]===null)h++;else if(i[m]===null)m--;else if(l[h]===s[p])c[p]=it(i[h],a[p]),h++,p++;else if(l[m]===s[v])c[v]=it(i[m],a[v]),m--,v--;else if(l[h]===s[v])c[v]=it(i[h],a[v]),Zt(e,c[v+1],i[h]),h++,v--;else if(l[m]===s[p])c[p]=it(i[m],a[p]),Zt(e,i[h],i[m]),m--,p++;else if(d===void 0&&(d=Ma(s,p,v),u=Ma(l,h,m)),d.has(l[h]))if(d.has(l[m])){const $=u.get(s[p]),C=$!==void 0?i[$]:null;if(C===null){const T=Zt(e,i[h]);it(T,a[p]),c[p]=T}else c[p]=it(C,a[p]),Zt(e,i[h],C),i[$]=null;p++}else Un(i[m]),m--;else Un(i[h]),h++;for(;p<=v;){const $=Zt(e,c[v+1]);it($,a[p]),c[p++]=$}for(;h<=m;){const $=i[h++];$!==null&&Un($)}return this.ht=s,D0(e,c),xe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bo=class extends Qe{constructor(t){if(super(t),this.et=G,t.type!==Cr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===G||t==null)return this.ft=void 0,this.et=t;if(t===xe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Bo.directiveName="unsafeHTML",Bo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lo=class extends Bo{};Lo.directiveName="unsafeSVG",Lo.resultType=2;const j0=Ke(Lo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H0(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=window,Ei=Xr.ShadowRoot&&(Xr.ShadyCSS===void 0||Xr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ai=Symbol(),Pa=new WeakMap;let El=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ei&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Pa.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Pa.set(r,t))}return t}toString(){return this.cssText}};const B=e=>new El(typeof e=="string"?e:e+"",void 0,Ai),rr=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new El(r,e,Ai)},V0=(e,t)=>{Ei?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Xr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},_a=Ei?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return B(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn;const ln=window,Ba=ln.trustedTypes,Z0=Ba?Ba.emptyScript:"",La=ln.reactiveElementPolyfillSupport,Ro={toAttribute(e,t){switch(t){case Boolean:e=e?Z0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Al=(e,t)=>t!==e&&(t==t||e==e),Yn={attribute:!0,type:String,converter:Ro,reflect:!1,hasChanged:Al},No="finalized";class Tt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Yn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Yn}static finalize(){if(this.hasOwnProperty(No))return!1;this[No]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(_a(o))}else t!==void 0&&r.push(_a(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return V0(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Yn){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ro).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Ro;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Al)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Tt[No]=!0,Tt.elementProperties=new Map,Tt.elementStyles=[],Tt.shadowRootOptions={mode:"open"},La==null||La({ReactiveElement:Tt}),((Wn=ln.reactiveElementVersions)!==null&&Wn!==void 0?Wn:ln.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gn,Jn;class nr extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=R0(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return xe}}nr.finalized=!0,nr._$litElement$=!0,(Gn=globalThis.litElementHydrateSupport)===null||Gn===void 0||Gn.call(globalThis,{LitElement:nr});const Ra=globalThis.litElementPolyfillSupport;Ra==null||Ra({LitElement:nr});((Jn=globalThis.litElementVersions)!==null&&Jn!==void 0?Jn:globalThis.litElementVersions=[]).push("3.3.2");var q0=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(C){if(C!==void 0&&typeof C!="function")throw new TypeError("Function expected");return C}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,m=r.length-1;m>=0;m--){var p={};for(var v in n)p[v]=v==="access"?{}:n[v];for(var v in n.access)p.access[v]=n.access[v];p.addInitializer=function(C){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(C||null))};var $=(0,r[m])(s==="accessor"?{get:d.get,set:d.set}:d[l],p);if(s==="accessor"){if($===void 0)continue;if($===null||typeof $!="object")throw new TypeError("Object expected");(u=a($.get))&&(d.get=u),(u=a($.set))&&(d.set=u),(u=a($.init))&&o.push(u)}else(u=a($))&&(s==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},U0=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},W0=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Y0(){function e(t,r){return t}return e}let Ml=(()=>{let e=[Y0()],t,r=[],n;return n=class extends nr{},W0(n,"DeclarativeElement"),q0(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,U0(n,r),n})();const G0={capitalizeFirstLetter:!1};function J0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function X0(e,t){return t.capitalizeFirstLetter?J0(e):e}function K0(e,t=G0){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return X0(n,t)}function Pl(e){return e?e instanceof Error?e.message:Oe(e,"message")?String(e.message):String(e):""}function Mi(e){return e instanceof Error?e:new Error(Pl(e))}function Na(e){return!!e&&typeof e=="object"}const Q0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Oe(e,t){return e?Q0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function eu(e,t){return e&&t.every(r=>Oe(e,r))}function gt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function za({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Da="Failed to compare objects using JSON.stringify";function Fa(e,t,r){return za({source:e,errorHandler(n){if(r)return"";throw n}})===za({source:t,errorHandler(n){if(r)return"";throw n}})}function _l(e,t,r={}){try{return e===t?!0:Na(e)&&Na(t)?Fa(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>_l(e[o],t[o])):!1:Fa(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Mi(n);throw o.message.startsWith(Da)||(o.message=`${Da}: ${o.message}`),o}}function Bl(e,t){let r=!1;const n=gt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(gt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function tu(e){return!!(Oe(e,"then")&&typeof e.then=="function")}function zo(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${zo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function ru(e,t){try{return nu(e,t),!0}catch{return!1}}function nu(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ou(e,t){return e.includes(t)}function Oa(e){return e!==e.toUpperCase()}function iu(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=Oa(a)||Oa(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const au=["january","february","march","april","may","june","july","august","september","october","november","december"];au.map(e=>e.slice(0,3));function su(e){return e?e instanceof Error?e.message:or(e,"message")?String(e.message):String(e):""}function lu(e){return e instanceof Error?e:new Error(su(e))}function cu(e){return!!e}function Pi(e){return!!e&&typeof e=="object"}const du=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function or(e,t){return e?du.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ja(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function uu(e){return Array.isArray(e)?"array":typeof e}function _i(e,t){return uu(e)===t}function Ll(e,t){let r=!1;const n=ja(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ja(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function hu(e){const t=Rl();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Rl(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Rl.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function je(e){if(Pi(e))return Ll(e,(r,n)=>{if(!_i(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(iu(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?B(r):r.startsWith("-")?rr`-${B(r)}`:rr`--${B(r)}`;return{name:a,value:rr`var(${a}, ${B(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${je.name}' function.`)}function Do({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fu=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},pu=(e,t,r)=>{t.constructor.createProperty(r,e)};function Nl(e){return(t,r)=>r!==void 0?pu(e,t,r):fu(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xn;((Xn=window.HTMLSlotElement)===null||Xn===void 0?void 0:Xn.prototype.assignedElements)!=null;const Fo=Symbol("this-is-an-element-vir-declarative-element"),Bi=Symbol("key for ignoring inputs not having been set yet"),gu={[Bi]:!0,allowPolymorphicState:!1};function zl(e,t){const r=e.instanceState;gt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&gt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Dl(e)}function Dl(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Fl(e,t){return fr(e,t),e.element}function mu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function fr(e,t){const r=mu(e),n=r?`: found in ${r}`:"";if(e.type!==Cr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function w(e,t){return t?Ha(e,t):Ha(void 0,e)}const Ha=Ke(class extends Qe{constructor(e){super(e),this.element=Fl(e,"assign")}render(e,t){return vu(e,this.element,t),xe}});function vu(e,t,r){zl(t,r)}function Ol(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Ml?!0:Ol(r)}function Va(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class wu extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Li(){return e=>{var t;return t=class extends wu{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function W(){return Li()}function bu(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Li()(r);return t[r]=n,t},{}):{}}const Oo="_is_element_vir_observable_property_handler_instance",jo="_is_element_vir_observable_property_handler_creator";function yu(e){return Oe(e,jo)&&e[jo]===!0}function $u(e){return Oe(e,Oo)&&e[Oo]===!0}function xu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Za(e,t){const r=e;function n(a){t?xu(a,e,e.tagName):Nl()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{n(s);const c=e.observablePropertyHandlerMap[s];function d(u){a[s]=u,r[s]=u}return yu(l)&&(l=l.init()),$u(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[s]=l):c?c.setValue(l):d(l),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function ku(e){return e?Bl(e,t=>t):{}}function Su({hostClassNames:e,cssVars:t}){return{hostClasses:Bl(e,(r,n)=>({name:B(n),selector:B(`:host(.${n})`)})),cssVars:t}}function Cu({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&gt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Tu(e,t){function r(o){gt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Iu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Mn(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...gu,...e.options},n=bu(e.events),o=ku(e.hostClasses);e.hostClasses&&Va(e.tagName,e.hostClasses),e.cssVars&&Va(e.tagName,e.cssVars);const i=e.cssVars?je(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Su({hostClassNames:o,cssVars:i})):e.styles||rr``,s=e.renderCallback,l=(t=class extends Ml{createRenderParams(){return Tu(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Dl(this)}render(){try{Ol(this)&&!this.haveInputsBeenSet&&!r[Bi]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${w.name}" directive on it. If no inputs are intended, use "${Mn.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Cu({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Mi(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){zl(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Za(this,!1),this.instanceState=Za(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};gt(c).forEach(u=>{Nl()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},Iu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Fo]:{value:!0,writable:!1},name:{value:K0(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Ri(){return e=>Mn({...e,options:{[Bi]:!1,...e.options}})}var jl;const ae=Symbol("not set");class Eu{constructor(t){this.lastTrigger=ae,this.resolutionValue=ae,this.rejectionError=ae,this.listeners=new Set,this.waitingForValuePromise=zo(),this[jl]=!0,this.resetValue(t)}resetValue(t){if(this.resetWaitingForValuePromise(),t!==ae){if(Oe(t,"defaultValue"))t.defaultValue instanceof Promise?this.setValue({newPromise:t.defaultValue}):this.setValue({resolvedValue:t.defaultValue});else if(Oe(t,"updateCallback")){this.promiseUpdater=t.updateCallback;return}}}fireListeners(){const t=this.getValue();this.listeners.forEach(r=>{r(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=ae,this.rejectionError=ae,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(r=>{this.lastSetPromise===t&&this.resolveValue(r)}).catch(r=>{this.lastSetPromise===t&&(this.rejectionError=Mi(r),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(r),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=ae,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=zo()}setValue(t){if(Oe(t,"serializableTrigger")){const r={...t.serializableTrigger};if(this.lastTrigger===ae||!_l(r,this.lastTrigger,{ignoreNonSerializableProperties:!0})){if(this.lastTrigger=r,!this.promiseUpdater)throw new Error("got serializableTrigger input to updateState for asyncProp but no updateCallback has been defined.");const n=this.promiseUpdater(r);this.setPromise(n),this.fireListeners()}}else if("newPromise"in t)this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners();else if("resolvedValue"in t)this.resolveValue(t.resolvedValue);else if("forceUpdate"in t)this.lastTrigger=ae,this.resolutionValue=ae,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners();else throw new Error("Got no properties for updating asyncProp.")}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==ae)return this.rejectionError;if(this.resolutionValue===ae)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,r){this.listeners.add(r),t&&r(this.getValue())}addMultipleListeners(t){t.forEach(r=>this.listeners.add(r))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}jl=Oo;function Au(...e){const t=ru(e,1)?e[0]:ae;return{[jo]:!0,init(){return new Eu(t)}}}function E(e,t){return Mu(e,t)}const Mu=Ke(class extends Qe{constructor(e){super(e),this.element=Fl(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),xe}}),qa="onDomCreated",Ua=Ke(class extends Qe{constructor(e){super(e),fr(e,qa)}update(e,[t]){fr(e,qa);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Kn="onResize",pr=Ke(class extends Qe{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),fr(e,Kn)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Kn} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){fr(e,Kn),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Wa(e,t,r,n){return e instanceof Error?n?n(e):Pl(e):tu(e)?t:r?r(e):e}function Ee(e,t,r){return H0(e,()=>t,()=>r)}function Ni(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Ri()(r(n))),defineElementNoInputs:n=>(t(n),Mn(r(n)))}}function Pu(e,t){return e.filter((r,n)=>!t.includes(n))}function Hl(e){return e.filter(t=>eu(t,["tagName",Fo])&&!!t.tagName&&!!t[Fo])}const Vl=new WeakMap;function _u(e,t){var o;const r=Hl(t);return(o=Zl(Vl,[e,...r]).value)==null?void 0:o.template}function Bu(e,t,r){const n=Hl(t);return Ul(Vl,[e,...n],r)}function Zl(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ql(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Zl(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ql(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ul(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=ql(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Ul(l,t,r,n+1)}function Wl(e,t,r){return{name:e,check:t,transform:r}}const Lu=new WeakMap;function Yl(e,t,r){const n=_u(e,t),o=n??r();if(!n){const a=Bu(e,t,o);if(a.result)Lu.set(e,o);else throw new Error(`Failed to set template transform: ${a.reason}`)}const i=Pu(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function Gl(e,t,r,n){const o=[],i=[],a=[];return e.forEach((l,c)=>{var $;const d=o.length-1,u=o[d],h=c-1,m=t[h];let p;n&&n(l),typeof u=="string"&&(p=($=r.find(C=>C.check(u,l,m)))==null?void 0:$.transform,p&&(o[d]=u+p(m)+l,a.push(h))),p||o.push(l);const v=e.raw[c];p?i[d]=i[d]+p(m)+v:i.push(v)}),{templateStrings:Object.assign([],o,{raw:i}),valueIndexDeletions:a}}function Jl(e){return Oe(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Ru=[Wl("tag name css selector interpolation",(e,t,r)=>Jl(r),e=>e.tagName)];function Nu(e,t){return Gl(e,t,Ru)}function g(e,...t){const r=Yl(e,t,()=>Nu(e,t));return rr(r.strings,...r.values)}const zu=[Wl("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Jl(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Du(e){}function Fu(e){return Gl(e.strings,e.values,zu,Du)}function f(e,...t){const r=_0(e,...t),n=Yl(e,t,()=>Fu(r));return{...r,strings:n.strings,values:n.values}}function Ou(e,t){return En(e,"entryType")&&e.entryType===t}const ju={[oe.ElementExample]:()=>[],[oe.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...v0(e.controls,e.title)].filter(ml),[oe.Root]:()=>[]},cn="_isBookTreeNode",Xl=new Map;function Hu(e){return Xl.get(e)}function Vu(e,t){k0(Xl,e,()=>t)}function _t(e,t){return!!(Kl(e)&&e.entry.entryType===t)}function Kl(e){return!!(vl(e,[cn,"entry"])&&e[cn])}function Zu(e,t){return{[cn]:!0,entry:{entryType:oe.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function qu({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Hu(e);if(o)return o;const i=Zu(t,r);e.forEach(l=>zi({tree:i,newEntry:l,debug:n,manuallyAdded:!0}));const a=Ql(i),s={tree:i,flattenedNodes:a};return Vu(e,s),n&&console.info("element-book tree:",i),s}function Uu(e,t,r){if(!t.parent)return e;const n=Ho(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),zi({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Ho(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ti(t,!1)}`);return o}function zi({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=ju[t.entryType](t);t.errors.push(...o);const i=Uu(e,t,r),a=on(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[cn]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Ou(t,oe.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>zi({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Ho(e,t){const r=Kl(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ti(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Ql(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ql(o));return[e,...r].flat()}function Wu(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function Di(e,t){return Fi(e,t,void 0)}function Fi(e,t,r){const n=t[0];if(!n)return{};const o=Wu(e,n,r);if(!o)return{};const i=t.slice(1);return!i.length&&r&&(o.controls=r),{...o.controls,...Fi(o.children,i,r)}}function Yu(e,t,r){const n=y0(e);return Fi(n,t,r),n}function ec(e){return nn(e.children,(r,n)=>_t(n,oe.Page)?{children:ec(n),controls:nn(n.entry.controls,(o,i)=>i.initValue)}:{children:{},controls:{}})}function Gu({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function tc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${tc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ju(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}async function Xu(e=1){const t=tc();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const rc=globalThis.crypto;function Ku({min:e,max:t}){const{min:r,max:n}=Gu({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do rc.getRandomValues(s),l=s.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%o}function Oi(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return rc.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Qu(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{Ju(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function qt(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function e1({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const t1=Oi(32);function Vo(e){return e.join(t1)}function nc(e){if(!e.length)return[];const t=Vo(e),r=nc(e.slice(0,-1));return[t,...r]}const r1=["error","errors"];function n1(e){return r1.includes(e)}function o1({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&n1(t);if(e1({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)nc(n.fullUrlBreadcrumbs).forEach(s=>r[s]=!0);else{const a=Vo(n.fullUrlBreadcrumbs);r[a]=!1}}),e.filter(n=>{const o=Vo(n.fullUrlBreadcrumbs),i=r[o];if(!An(i,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var le;(function(e){e.Search="search",e.Book="book"})(le||(le={}));function oc(e){return e[0]===le.Book?"":e[1]?decodeURIComponent(e[1]):""}const gr={hash:void 0,paths:[le.Book],search:void 0},i1=0;function ic(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==i1)}class Pn extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Ya extends Pn{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const mr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const a1=globalThis.history.pushState;function Ga(...e){const t=a1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(mr)),t}const s1=globalThis.history.replaceState;function Ja(...e){const t=s1.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(mr)),t}function l1(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Ga)throw new Ya("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ja)throw new Ya("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Ga,globalThis.history.replaceState=Ja,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(mr))})}}function c1(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function d1(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function u1(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),i=globalThis.location.search?c1(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:i,hash:a}}function ac(e){return e.replace(/(?:^\/|\/+$)/g,"")}function sc({routeBase:e,windowPath:t}){if(!e)return"";const r=ac(e);if(lc({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?sc({routeBase:n,windowPath:t}):""}function lc({routeBase:e,windowPath:t}){const r=ac(e);return r?t.startsWith(`/${r}`):!1}class h1 extends Pn{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function cc(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Xa=6;function Ka(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Xa)throw new h1(`Route sanitization depth has exceed the max of ${Xa} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(cc(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Qn extends Pn{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function f1(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Qn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Qn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Qn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function p1(e,t,r=!1){const n=dc(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function dc(e,t){var l;const r=lc({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?d1(e.search).toString():"",o=n?`?${n}`:"",i=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${i}${e.hash}`:"";return`/${[r,...e.paths].filter(cu).join("/")}${o}${a}`}function g1(e={}){f1(e),l1();const t=e.routeBase?sc({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Ka(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&cc(l,d)))return p1(d,t,a)},createRoutesUrl(i){return dc(i,t)},getCurrentRawRoutes(){return u1(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Pn(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(mr,n),r=!0),i&&Ka(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(mr,n),r=!1),a},sanitizationDepth:0};return o}function m1(e){return g1({routeBase:e,routeSanitizer(t){return{paths:v1(t.paths),hash:void 0,search:void 0}}})}function v1(e){const t=e[0];if(T0(t,le)){if(t===le.Book)return[le.Book,...e.slice(1)];if(t===le.Search)return e[1]?[t,e[1]]:[le.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return gr.paths}const z=je({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),w1={nav:{hover:{background:z["element-book-nav-hover-background-color"],foreground:z["element-book-nav-hover-foreground-color"]},active:{background:z["element-book-nav-active-background-color"],foreground:z["element-book-nav-active-foreground-color"]},selected:{background:z["element-book-nav-selected-background-color"],foreground:z["element-book-nav-selected-foreground-color"]}},accent:{icon:z["element-book-accent-icon-color"]},page:{background:z["element-book-page-background-color"],backgroundFaint1:z["element-book-page-background-faint-level-1-color"],backgroundFaint2:z["element-book-page-background-faint-level-2-color"],foreground:z["element-book-page-foreground-color"],foregroundFaint1:z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:z["element-book-page-foreground-faint-level-2-color"]}};function b1(e,t){uc(e,t,w1)}function Zo(e){return En(e,"_$cssResult$")}function Qa(e){return vl(e,["name","value","default"])&&An(e.default,"string")&&Zo(e.name)&&Zo(e.value)}function uc(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Zo(o)){if(!Qa(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Do({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Qa(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);uc(e,o,i)}})}function J(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Ir(e){return We(e)==="string"}function We(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function dn(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function hc(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function fc(e){return e[e.length-1]}function un(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function pc(e,t,r){return(r-e)/(t-e)}function ji(e,t,r){return un(t[0],t[1],pc(e[0],e[1],r))}function gc(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var y1=Object.freeze({__proto__:null,isString:Ir,type:We,toPrecision:dn,parseFunction:hc,last:fc,interpolate:un,interpolateInv:pc,mapRange:ji,parseCoordGrammar:gc,multiplyMatrices:J});class $1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Ye=new $1;var Be={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Ie={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function qo(e){return Array.isArray(e)?e:Ie[e]}function hn(e,t,r,n={}){if(e=qo(e),t=qo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Ye.run("chromatic-adaptation-start",o),o.M||(o.W1===Ie.D65&&o.W2===Ie.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Ie.D50&&o.W2===Ie.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Ye.run("chromatic-adaptation-end",o),o.M)return J(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const x1=75e-6;var Sr,Uo,Nt,Tn,mc;const Ce=class{constructor(t){Ht(this,Sr);Ht(this,Tn);Ht(this,Nt,void 0);var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Ce.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=qo(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Hn(this,Nt,Lr(this,Tn,mc).call(this).reverse()),Ye.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=x1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Lr(this,Sr,Uo).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Lr(this,Sr,Uo).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ce.get(t),this===t)return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=yt(this,Nt),o=yt(t,Nt),i,a;for(let s=0;s<n.length&&n[s]===o[s];s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ce.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Ce.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Ce)return t;if(We(t)==="string"){let o=Ce.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Ce.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=We(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Ce.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=We(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Ce.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let M=Ce;Sr=new WeakSet,Uo=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=gc(t.coords);let r=Object.entries(this.coords).map(([n,o],i)=>{let a=t.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=ji(s,l,i)),i=dn(i,o),c&&(i+=c),i})}return t},Nt=new WeakMap,Tn=new WeakSet,mc=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},On(M,"registry",{}),On(M,"DEFAULT_FORMAT",{type:"functions",name:"color"});var we=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class de extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=we),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=J(t.toXYZ_M,r);return this.white!==this.base.white&&(n=hn(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=hn(this.base.white,this.white,r),J(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function vc(e){var r,n,o,i,a;let t={str:(r=String(e))==null?void 0:r.trim()};if(Ye.run("parse-start",t),t.color)return t.color;if(t.parsed=hc(t.str),t.parsed){let s=t.parsed.name;if(s==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of M.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let m=Object.keys(u.coords).length,p=Array(m).fill(0);return p.forEach((v,$)=>p[$]=t.parsed.args[$]||0),{spaceId:u.id,coords:p,alpha:c}}}let d="";if(l in M.registry){let u=(a=(i=(o=M.registry[l].formats)==null?void 0:o.functions)==null?void 0:i.color)==null?void 0:a.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of M.all){let c=l.getFormat(s);if(c&&c.type==="function"){let d=1;(c.lastAlpha||fc(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,m],p)=>{var P;let v=c.coordGrammar[p],$=(P=u[p])==null?void 0:P.type;if(v=v.find(D=>D==$),!v){let D=m.name||h;throw new TypeError(`${$} not allowed for ${D} in ${s}()`)}let C=v.range;$==="<percentage>"&&(C||(C=[0,1]));let T=m.range||m.refRange;C&&T&&(u[p]=ji(C,T,u[p]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let s of M.all)for(let l in s.formats){let c=s.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function j(e){if(!e)throw new TypeError("Empty color reference");Ir(e)&&(e=vc(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Er(e,t){return t=M.get(t),t.from(e)}function be(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return Er(e,r)[n]}function wc(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function Ge(e,t,r){if(e=j(e),arguments.length===2&&We(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ge(e,o,n[o])}else{typeof r=="function"&&(r=r(be(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=Er(e,n);i[o]=r,wc(e,n,i)}return e}var Hi=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:we,fromBase:e=>hn(we.white,"D50",e),toBase:e=>hn("D50",we.white,e),formats:{color:{}}});const k1=216/24389,es=24/116,Rr=24389/27;let eo=Ie.D50;var fe=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:eo,base:Hi,fromBase(e){let r=e.map((n,o)=>n/eo[o]).map(n=>n>k1?Math.cbrt(n):(Rr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>es?Math.pow(t[0],3):(116*t[0]-16)/Rr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Rr,t[2]>es?Math.pow(t[2],3):(116*t[2]-16)/Rr].map((n,o)=>n*eo[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function _n(e){return(e%360+360)%360}function S1(e,t){if(e==="raw")return t;let[r,n]=t.map(_n),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var vr=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:fe,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),_n(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ts=25**7,fn=Math.PI,rs=180/fn,xt=fn/180;function Wo(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=fe.from(e),l=vr.from(fe,[i,a,s])[1],[c,d,u]=fe.from(t),h=vr.from(fe,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let p=((l+h)/2)**7,v=.5*(1-Math.sqrt(p/(p+ts))),$=(1+v)*a,C=(1+v)*d,T=Math.sqrt($**2+s**2),P=Math.sqrt(C**2+u**2),D=$===0&&s===0?0:Math.atan2(s,$),ue=C===0&&u===0?0:Math.atan2(u,C);D<0&&(D+=2*fn),ue<0&&(ue+=2*fn),D*=rs,ue*=rs;let Re=c-i,Ze=P-T,ie=ue-D,nt=D+ue,_r=Math.abs(ie),pe;T*P===0?pe=0:_r<=180?pe=ie:ie>180?pe=ie-360:ie<-180?pe=ie+360:console.log("the unthinkable has happened");let bt=2*Math.sqrt(P*T)*Math.sin(pe*xt/2),Ot=(i+c)/2,Fn=(T+P)/2,ua=Math.pow(Fn,7),Ne;T*P===0?Ne=nt:_r<=180?Ne=nt/2:nt<360?Ne=(nt+360)/2:Ne=(nt-360)/2;let ha=(Ot-50)**2,u0=1+.015*ha/Math.sqrt(20+ha),fa=1+.045*Fn,jt=1;jt-=.17*Math.cos((Ne-30)*xt),jt+=.24*Math.cos(2*Ne*xt),jt+=.32*Math.cos((3*Ne+6)*xt),jt-=.2*Math.cos((4*Ne-63)*xt);let pa=1+.015*Fn*jt,h0=30*Math.exp(-1*((Ne-275)/25)**2),f0=2*Math.sqrt(ua/(ua+ts)),p0=-1*Math.sin(2*h0*xt)*f0,Br=(Re/(r*u0))**2;return Br+=(Ze/(n*fa))**2,Br+=(bt/(o*pa))**2,Br+=p0*(Ze/(n*fa))*(bt/(o*pa)),Math.sqrt(Br)}const C1=75e-6;function ir(e,t=e.space,{epsilon:r=C1}={}){e=j(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function wr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Je(e,{method:t=Be.gamut_mapping,space:r=e.space}={}){if(Ir(arguments[1])&&(r=arguments[1]),r=M.get(r),ir(e,r,{epsilon:0}))return e;let n=me(e,r);if(t!=="clip"&&!ir(e,r)){let o=Je(wr(n),{method:"clip",space:r});if(Wo(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=me(n,a),d=(i.range||i.refRange)[0],u=.01,h=d,m=be(l,s);for(;m-h>u;){let p=wr(l);p=Je(p,{space:r,method:"clip"}),Wo(l,p)-2<u?h=be(l,s):m=be(l,s),Ge(l,s,(h+m)/2)}n=me(l,r)}else n=o}if(t==="clip"||!ir(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=me(n,e.space)),e.coords=n.coords,e}Je.returns="color";function me(e,t,{inGamut:r}={}){e=j(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Je(o)),o}me.returns="color";function pn(e,{precision:t=Be.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=j(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!ir(e)&&(s=Je(wr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(m=>dn(m,t)));let d=[...s];if(c==="color"){let m=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(m)}let u=e.alpha;t!==null&&(u=dn(u,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${h})`}return i}const T1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],I1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Bn=new de({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:T1,fromXYZ_M:I1,formats:{color:{}}});const Nr=1.09929682680944,ns=.018053968510807;var bc=new de({id:"rec2020",name:"REC.2020",base:Bn,toBase(e){return e.map(function(t){return t<ns*4.5?t/4.5:Math.pow((t+Nr-1)/Nr,1/.45)})},fromBase(e){return e.map(function(t){return t>=ns?Nr*Math.pow(t,.45)-(Nr-1):4.5*t})},formats:{color:{}}});const E1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],A1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var yc=new de({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:E1,fromXYZ_M:A1});const M1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],P1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var $c=new de({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:M1,fromXYZ_M:P1,formats:{color:{}}}),os={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let is=Array(3).fill("<percentage> | <number>[0, 255]"),as=Array(3).fill("<number>[0, 255]");var br=new de({id:"srgb",name:"sRGB",base:$c,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:is},rgb_number:{name:"rgb",commas:!0,coords:as,noAlpha:!0},color:{},rgba:{coords:is,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:as},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=os.black,t.alpha=0):t.coords=os[e],t.coords)return t}}}}),xc=new de({id:"p3",name:"P3",base:yc,fromBase:br.fromBase,toBase:br.toBase,formats:{color:{id:"display-p3"}}});Be.display_space=br;if(typeof CSS<"u"&&CSS.supports)for(let e of[fe,bc,xc]){let t=e.getMinCoords(),n=pn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Be.display_space=e;break}}function _1(e,{space:t=Be.display_space,...r}={}){let n=pn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Be.display_space)n=new String(n),n.color=e;else{let o=me(e,t);n=new String(pn(o,r)),n.color=o}return n}function kc(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function B1(e,t){return e=j(e),t=j(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Xe(e){return be(e,[we,"y"])}function Sc(e,t){Ge(e,[we,"y"],t)}function L1(e){Object.defineProperty(e.prototype,"luminance",{get(){return Xe(this)},set(t){Sc(this,t)}})}var R1=Object.freeze({__proto__:null,getLuminance:Xe,setLuminance:Sc,register:L1});function N1(e,t){e=j(e),t=j(t);let r=Math.max(Xe(e),0),n=Math.max(Xe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const z1=.56,D1=.57,F1=.62,O1=.65,ss=.022,j1=1.414,H1=.1,V1=5e-4,Z1=1.14,ls=.027,q1=1.14;function cs(e){return e>=ss?e:e+(ss-e)**j1}function kt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function U1(e,t){t=j(t),e=j(e);let r,n,o,i,a,s;t=me(t,"srgb"),[i,a,s]=t.coords;let l=kt(i)*.2126729+kt(a)*.7151522+kt(s)*.072175;e=me(e,"srgb"),[i,a,s]=e.coords;let c=kt(i)*.2126729+kt(a)*.7151522+kt(s)*.072175,d=cs(l),u=cs(c),h=u>d;return Math.abs(u-d)<V1?n=0:h?(r=u**z1-d**D1,n=r*Z1):(r=u**O1-d**F1,n=r*q1),Math.abs(n)<H1?o=0:n>0?o=n-ls:o=n+ls,o*100}function W1(e,t){e=j(e),t=j(t);let r=Math.max(Xe(e),0),n=Math.max(Xe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Y1=5e4;function G1(e,t){e=j(e),t=j(t);let r=Math.max(Xe(e),0),n=Math.max(Xe(t),0);return n>r&&([r,n]=[n,r]),n===0?Y1:(r-n)/n}function J1(e,t){e=j(e),t=j(t);let r=be(e,[fe,"l"]),n=be(t,[fe,"l"]);return Math.abs(r-n)}const X1=216/24389,ds=24/116,zr=24389/27;let to=Ie.D65;var Yo=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:to,base:we,fromBase(e){let r=e.map((n,o)=>n/to[o]).map(n=>n>X1?Math.cbrt(n):(zr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ds?Math.pow(t[0],3):(116*t[0]-16)/zr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/zr,t[2]>ds?Math.pow(t[2],3):(116*t[2]-16)/zr].map((n,o)=>n*to[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const ro=Math.pow(5,.5)*.5+.5;function K1(e,t){e=j(e),t=j(t);let r=be(e,[Yo,"l"]),n=be(t,[Yo,"l"]),o=Math.abs(Math.pow(r,ro)-Math.pow(n,ro)),i=Math.pow(o,1/ro)*Math.SQRT2-40;return i<7.5?0:i}var Kr=Object.freeze({__proto__:null,contrastWCAG21:N1,contrastAPCA:U1,contrastMichelson:W1,contrastWeber:G1,contrastLstar:J1,contrastDeltaPhi:K1});function Q1(e,t,r={}){Ir(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Kr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=j(e),t=j(t);for(let i in Kr)if("contrast"+n.toLowerCase()===i.toLowerCase())return Kr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Cc(e){let[t,r,n]=Er(e,we),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Tc(e){let[t,r,n]=Er(e,we),o=t+r+n;return[t/o,r/o]}function eh(e){Object.defineProperty(e.prototype,"uv",{get(){return Cc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Tc(this)}})}var th=Object.freeze({__proto__:null,uv:Cc,xy:Tc,register:eh});function rh(e,t){return kc(e,t,"lab")}const nh=Math.PI,us=nh/180;function oh(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=fe.from(e),[,s,l]=vr.from(fe,[o,i,a]),[c,d,u]=fe.from(t),h=vr.from(fe,[c,d,u])[1];s<0&&(s=0),h<0&&(h=0);let m=o-c,p=s-h,v=i-d,$=a-u,C=v**2+$**2-p**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let P=.0638*s/(1+.0131*s)+.638,D;Number.isNaN(l)&&(l=0),l>=164&&l<=345?D=.56+Math.abs(.2*Math.cos((l+168)*us)):D=.36+Math.abs(.4*Math.cos((l+35)*us));let ue=Math.pow(s,4),Re=Math.sqrt(ue/(ue+1900)),Ze=P*(Re*D+1-Re),ie=(m/(r*T))**2;return ie+=(p/(n*P))**2,ie+=C/Ze**2,Math.sqrt(ie)}const hs=203;var Vi=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:we,fromBase(e){return e.map(t=>Math.max(t*hs,0))},toBase(e){return e.map(t=>Math.max(t/hs,0))}});const Dr=1.15,Fr=.66,fs=2610/2**14,ih=2**14/2610,ps=3424/2**12,gs=2413/2**7,ms=2392/2**7,ah=1.7*2523/2**5,vs=2**5/(1.7*2523),Or=-.56,no=16295499532821565e-27,sh=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],lh=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ch=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],dh=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ic=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Vi,fromBase(e){let[t,r,n]=e,o=Dr*t-(Dr-1)*n,i=Fr*r-(Fr-1)*t,s=J(sh,[o,i,n]).map(function(h){let m=ps+gs*(h/1e4)**fs,p=1+ms*(h/1e4)**fs;return(m/p)**ah}),[l,c,d]=J(ch,s);return[(1+Or)*l/(1+Or*l)-no,c,d]},toBase(e){let[t,r,n]=e,o=(t+no)/(1+Or-Or*(t+no)),a=J(dh,[o,r,n]).map(function(h){let m=ps-h**vs,p=ms*h**vs-gs;return 1e4*(m/p)**ih}),[s,l,c]=J(lh,a),d=(s+(Dr-1)*c)/Dr,u=(l+(Fr-1)*d)/Fr;return[d,u,c]},formats:{color:{}}}),Go=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ic,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),_n(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function uh(e,t){let[r,n,o]=Go.from(e),[i,a,s]=Go.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Ec=3424/4096,Ac=2413/128,Mc=2392/128,ws=2610/16384,hh=2523/32,fh=16384/2610,bs=32/2523,ph=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],gh=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],mh=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],vh=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Jo=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Vi,fromBase(e){let t=J(ph,e);return wh(t)},toBase(e){let t=bh(e);return J(vh,t)},formats:{color:{}}});function wh(e){let t=e.map(function(r){let n=Ec+Ac*(r/1e4)**ws,o=1+Mc*(r/1e4)**ws;return(n/o)**hh});return J(gh,t)}function bh(e){return J(mh,e).map(function(n){let o=Math.max(n**bs-Ec,0),i=Ac-Mc*n**bs;return 1e4*(o/i)**fh})}function yh(e,t){let[r,n,o]=Jo.from(e),[i,a,s]=Jo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const $h=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],xh=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],kh=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Sh=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var gn=new M({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:we,fromBase(e){let r=J($h,e).map(n=>Math.cbrt(n));return J(kh,r)},toBase(e){let r=J(Sh,e).map(n=>n**3);return J(xh,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ch(e,t){let[r,n,o]=gn.from(e),[i,a,s]=gn.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var Xo=Object.freeze({__proto__:null,deltaE76:rh,deltaECMC:oh,deltaE2000:Wo,deltaEJz:uh,deltaEITP:yh,deltaEOK:Ch});function Kt(e,t,r={}){Ir(r)&&(r={method:r});let{method:n=Be.deltaE,...o}=r;e=j(e),t=j(t);for(let i in Xo)if("deltae"+n.toLowerCase()===i.toLowerCase())return Xo[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Th(e,t=.25){let n=[M.get("oklch","lch"),"l"];return Ge(e,n,o=>o*(1+t))}function Ih(e,t=.25){let n=[M.get("oklch","lch"),"l"];return Ge(e,n,o=>o*(1-t))}var Eh=Object.freeze({__proto__:null,lighten:Th,darken:Ih});function Pc(e,t,r=.5,n={}){[e,t]=[j(e),j(t)],We(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Ar(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function _c(e,t,r={}){let n;Zi(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[j(e),j(t)],n=Ar(e,t,l));let c=Kt(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(m,p)=>{let v=p*h;return{p:v,color:n(v)}})}if(o>0){let h=u.reduce((m,p,v)=>{if(v===0)return 0;let $=Kt(p.color,u[v-1].color,i);return Math.max(m,$)},0);for(;h>o;){h=0;for(let m=1;m<u.length&&u.length<s;m++){let p=u[m-1],v=u[m],$=(v.p+p.p)/2,C=n($);h=Math.max(h,Kt(C,p.color),Kt(C,v.color)),u.splice(m,0,{p:$,color:n($)}),m++}}}return u=u.map(h=>h.color),u}function Ar(e,t,r={}){if(Zi(e)){let[l,c]=[e,t];return Ar(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=j(e),t=j(t),e=wr(e),t=wr(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[Be.interpolationSpace]||e.space,o=o?M.get(o):n,e=me(e,n),t=me(t,n),e=Je(e),t=Je(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[be(e,c),be(t,c)];[d,u]=S1(l,[d,u]),Ge(e,c,d),Ge(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((h,m)=>{let p=t.coords[m];return un(h,p,l)}),d=un(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=me(u,o)),u},{rangeArgs:s})}function Zi(e){return We(e)==="function"&&!!e.rangeArgs}Be.interpolationSpace="lab";function Ah(e){e.defineFunction("mix",Pc,{returns:"color"}),e.defineFunction("range",Ar,{returns:"function<color>"}),e.defineFunction("steps",_c,{returns:"array<color>"})}var Mh=Object.freeze({__proto__:null,mix:Pc,steps:_c,range:Ar,isRange:Zi,register:Ah}),Bc=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:br,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Lc=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Bc,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Ph=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Lc,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const _h=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Bh=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Rc=new de({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:_h,fromXYZ_M:Bh}),Lh=new de({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Rc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Rh=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Nh=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Nc=new de({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Hi,toXYZ_M:Rh,fromXYZ_M:Nh});const zh=1/512,Dh=16/512;var Fh=new de({id:"prophoto",name:"ProPhoto",base:Nc,toBase(e){return e.map(t=>t<Dh?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=zh?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Oh=new M({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:gn,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),_n(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ys=203,$s=2610/2**14,jh=2**14/2610,Hh=2523/2**5,xs=2**5/2523,ks=3424/2**12,Ss=2413/2**7,Cs=2392/2**7;var Vh=new de({id:"rec2100pq",name:"REC.2100-PQ",base:Bn,toBase(e){return e.map(function(t){return(Math.max(t**xs-ks,0)/(Ss-Cs*t**xs))**jh*1e4/ys})},fromBase(e){return e.map(function(t){let r=Math.max(t*ys/1e4,0),n=ks+Ss*r**$s,o=1+Cs*r**$s;return(n/o)**Hh})},formats:{color:{id:"rec2100-pq"}}});const Ts=.17883277,Is=.28466892,Es=.55991073,oo=3.7743;var Zh=new de({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Bn,toBase(e){return e.map(function(t){return t<=.5?t**2/3*oo:Math.exp((t-Es)/Ts+Is)/12*oo})},fromBase(e){return e.map(function(t){return t/=oo,t<=1/12?Math.sqrt(3*t):Ts*Math.log(12*t-Is)+Es})},formats:{color:{id:"rec2100-hlg"}}});const zc={};Ye.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Dc(e.W1,e.W2,e.options.method))});Ye.add("chromatic-adaptation-end",e=>{e.M||(e.M=Dc(e.W1,e.W2,e.options.method))});function Ln({id:e,toCone_M:t,fromCone_M:r}){zc[e]=arguments[0]}function Dc(e,t,r="Bradford"){let n=zc[r],[o,i,a]=J(n.toCone_M,e),[s,l,c]=J(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],u=J(d,n.toCone_M);return J(n.fromCone_M,u)}Ln({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ln({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ln({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ln({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Ie,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ie.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const qh=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Uh=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Fc=new de({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ie.ACES,toXYZ_M:qh,fromXYZ_M:Uh,formats:{color:{}}});const jr=2**-16,io=-.35828683,Hr=(Math.log2(65504)+9.72)/17.52;var Wh=new de({id:"acescc",name:"ACEScc",coords:{r:{range:[io,Hr],name:"Red"},g:{range:[io,Hr],name:"Green"},b:{range:[io,Hr],name:"Blue"}},referred:"scene",base:Fc,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-jr)*2:r<Hr?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(jr)+9.72)/17.52:t<jr?(Math.log2(jr+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),As=Object.freeze({__proto__:null,XYZ_D65:we,XYZ_D50:Hi,XYZ_ABS_D65:Vi,Lab_D65:Yo,Lab:fe,LCH:vr,sRGB_Linear:$c,sRGB:br,HSL:Bc,HWB:Ph,HSV:Lc,P3_Linear:yc,P3:xc,A98RGB_Linear:Rc,A98RGB:Lh,ProPhoto_Linear:Nc,ProPhoto:Fh,REC_2020_Linear:Bn,REC_2020:bc,OKLab:gn,OKLCH:Oh,Jzazbz:Ic,JzCzHz:Go,ICTCP:Jo,REC_2100_PQ:Vh,REC_2100_HLG:Zh,ACEScg:Fc,ACEScc:Wh}),ut;const ne=class{constructor(...t){Ht(this,ut,void 0);let r;t.length===1&&(r=j(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Hn(this,ut,M.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in yt(this,ut).coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get space(){return yt(this,ut)}get spaceId(){return yt(this,ut).id}clone(){return new ne(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=_1(this,...t);return r.color=new ne(r.color),r}static get(t,...r){return t instanceof ne?t:new ne(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=ne.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let u=c(...d);return ne.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>ne.get(c)));return l};t in ne||(ne[t]=a),o&&(ne.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)ne.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(ne);else for(let r in t)ne.defineFunction(r,t[r])}};let V=ne;ut=new WeakMap;V.defineFunctions({get:be,getAll:Er,set:Ge,setAll:wc,to:me,equals:B1,inGamut:ir,toGamut:Je,distance:kc,toString:pn});Object.assign(V,{util:y1,hooks:Ye,WHITES:Ie,Space:M,spaces:M.registry,parse:vc,defaults:Be});for(let e of Object.keys(As))M.register(As[e]);for(let e in M.registry)Ko(e,M.registry[e]);Ye.add("colorspace-init-end",e=>{var t;Ko(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ko(r,e)})});function Ko(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(V.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}V.extend(Xo);V.extend({deltaE:Kt});V.extend(Eh);V.extend({contrast:Q1});V.extend(th);V.extend(R1);V.extend(Mh);V.extend(Kr);function Oc(e){return nn(e,(t,r)=>r instanceof V?B(r.toString({format:"hex"})):Oc(r))}const Yh="dodgerblue";function Qo(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ao({background:e,foreground:t}){return{background:e??new V(Qo(t)),foreground:t??new V(Qo(e))}}var mn;(function(e){e.Dark="dark",e.Light="light"})(mn||(mn={}));function Gh(e){return e==="black"?"white":"black"}const Jh={black:{foregroundFaint1:new V("#ccc"),foregroundFaint2:new V("#eee")},white:{foregroundFaint1:new V("#ccc"),foregroundFaint2:new V("#eee")}},Xh={black:{backgroundFaint1:new V("#666"),backgroundFaint2:new V("#444")},white:{backgroundFaint1:new V("#ccc"),backgroundFaint2:new V("#fafafa")}};function Ms({themeColor:e=Yh,themeStyle:t=mn.Light}={}){const r=new V(e),n=new V(t===mn.Dark?"black":"white"),o=Qo(n),i=new V(o),a={nav:{hover:ao({background:r.clone().set({"hsl.l":93})}),active:ao({background:r.clone().set({"hsl.l":90})}),selected:ao({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Xh[Gh(o)],foreground:i,...Jh[o]}};return Oc(a)}const vn=Li()("element-book-change-route"),Ps="vira-",{defineElement:Rn,defineElementNoInputs:Xm}=Ni({assertInputs:e=>{if(!e.tagName.startsWith(Ps))throw new Error(`Tag name should start with '${Ps}' but got '${e.tagName}'`)}}),jc=g`
    pointer-events: none;
    opacity: 0.3;
`,ar=je({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Kh(e){return`${e}px`}const wn=je({"vira-form-input-border-radius":"8px"}),bn=je({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":g`calc(${wn["vira-form-input-border-radius"].value} + 4px)`});function Hc({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(Kh(n+r+t));return g`
        ${B(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${bn["vira-focus-outline-color"].value};
            border-radius: ${bn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Mt=g`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vc=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ei=je({"vira-icon-color":"currentColor"}),Qh=je({"vira-icon-stroke-color":ei["vira-icon-color"].value,"vira-icon-fill-color":ei["vira-icon-color"].value}),Qr={...ei,...Qh},re=Rn()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>g`
        :host {
            display: inline-block;
            color: ${Qr["vira-icon-color"].value};
            fill: ${Qr["vira-icon-fill-color"].value};
            stroke: ${Qr["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ti;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ti||(ti={}));Rn()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ti.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Vc};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${bn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${jc};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Mt};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${wn["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${ar["vira-interaction-animation-duration"].value},
                background-color
                    ${ar["vira-interaction-animation-duration"].value},
                border-color ${ar["vira-interaction-animation-duration"].value};
        }

        ${Hc({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${re} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?f`
                  <${re}
                      ${w(re,{icon:e.icon})}
                  ></${re}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var ri;(function(e){e.Header="header"})(ri||(ri={}));Rn()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Mt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ar["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:W()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?g`
                  height: ${e.contentHeight}px;
              `:g`
                  height: 0;
              `;return f`
            <button
                class="header-wrapper"
                ${E("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${ri.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${pr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function ni({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ni({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Zc({value:e,allowed:t,blocked:r}){const n=t?ni({input:e,matcher:t}):!0,o=r?ni({input:e,matcher:r}):!1;return n&&!o}function _s(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Zc({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}Rn()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:W(),inputBlocked:W()},styles:({hostClasses:e,cssVars:t})=>g`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${bn["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${jc};
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
                ${Mt};
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
                ${Vc};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Mt};
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
                border-radius: ${wn["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ar["vira-interaction-animation-duration"].value};
            }

            label {
                ${Mt};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${wn["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Hc({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${re} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Mt};
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
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=_s({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?f`
                  <${re} ${w(re,{icon:e.icon})}></${re}>
              `:"",s=e.fitText?g`
                  width: ${r.forcedInputWidth}px;
              `:"";return f`
            <label>
                ${a}
                ${Ee(!!e.fitText,f`
                        <span
                            class="size-span"
                            ${pr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${ve({"have-value":!!i})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${E("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=i;let h=c.value??"";if(d)if(d.length===1)Zc({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:m,blocked:p}=_s({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=m,t(new o.inputBlocked(p))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${Ee(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function qi({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const e2=qi({name:"Element16Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="1"
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `});qi({name:"Element24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const t2=qi({name:"Options24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Qr["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),{defineElement:ke,defineElementNoInputs:Km}=Ni(),ce=ke()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>g`
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
                ${E("click",i=>{(!e.router||ic(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new vn(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),Pe=ke()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>g`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${z["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${z["element-book-nav-hover-background-color"].value};
            color: ${z["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${z["element-book-nav-active-background-color"].value};
            color: ${z["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${ce.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${z["element-book-nav-selected-background-color"].value};
            color: ${z["element-book-nav-selected-foreground-color"].value};
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

        ${re} {
            display: inline-flex;
            color: ${z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=g`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return f`
                <li style=${n}>
                    <${ce}
                        ${w(ce,{router:e.router,route:{paths:[le.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ve({"title-row":!0,selected:e.selectedPath?tr(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ee(_t(r,oe.ElementExample),f`
                                    <${re}
                                        ${w(re,{icon:e2})}
                                    ></${re}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${ce}>
                </li>
            `});return f`
            <slot name=${qe.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function r2(e){await Xu(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Qu(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ye=ke()({tagName:"book-error",styles:g`
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
    `,renderCallback({inputs:e}){return(An(e.message,"array")?e.message:[e.message]).map(r=>f`
                    <p>${r}</p>
                `)}}),so=ke()({tagName:"book-breadcrumbs",styles:g`
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
                <${ce}
                    ${w(ce,{route:{hash:void 0,search:void 0,paths:[le.Book,...a]},router:e.router})}
                >
                    ${r}
                </${ce}>
                ${s}
            `}):f`
                &nbsp;
            `}}),lo=ke()({tagName:"book-breadcrumbs-bar",styles:g`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${z["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${z["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return f`
            ${Ee(!!e.currentSearch,f`
                    &nbsp;
                `,f`
                    <${so}
                        ${w(so,{currentRoute:e.currentRoute,router:e.router})}
                    ></${so}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${E("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await I0(200),n.value===o&&(n.value?t(new vn({paths:[le.Search,encodeURIComponent(n.value)]})):t(new vn(gr)))})}
            />
        `}}),ht=ke()({tagName:"book-page-controls",events:{controlValueChange:W()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>g`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${z["element-book-page-foreground-faint-level-1-color"].value};
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

        ${re}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===R.Hidden)return"";const a=n2(e.currentValues[n],o,s=>{const l=An(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return f`
                    <div class="control-wrapper">
                        ${Ee(i===0,f`
                                <${re}
                                    class="options-icon"
                                    ${w(re,{icon:t2})}
                                ></${re}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function n2(e,t,r){return $t(t,R.Hidden)?"":$t(t,R.Checkbox)?f`
            <input
                type="checkbox"
                .value=${e}
                ${E("input",n=>{const o=qt(n,HTMLInputElement);r(o.checked)})}
            />
        `:$t(t,R.Color)?f`
            <input
                type="color"
                .value=${e}
                ${E("input",n=>{const o=qt(n,HTMLInputElement);r(o.value)})}
            />
        `:$t(t,R.Text)?f`
            <input
                type="text"
                .value=${e}
                ${E("input",n=>{const o=qt(n,HTMLInputElement);r(o.value)})}
            />
        `:$t(t,R.Number)?f`
            <input
                type="number"
                .value=${e}
                ${E("input",n=>{const o=qt(n,HTMLInputElement);r(o.value)})}
            />
        `:$t(t,R.Dropdown)?f`
            <select
                .value=${e}
                ${E("input",n=>{const o=qt(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>f`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:f`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const co=ke()({tagName:"book-entry-description",styles:g`
        :host {
            color: ${z["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${z["element-book-page-foreground-color"].value};
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
            `)}}),uo=ke()({tagName:"book-page-wrapper",styles:g`
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

        ${ce} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?f`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:f`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[le.Book,...e.pageNode.fullUrlBreadcrumbs],n=gl(e.pageNode.entry.errors);return n&&console.error(n),f`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${ce}
                        ${w(ce,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${ce}>
                    ${n?f`
                              <${ye}
                                  ${w(ye,{message:n.message})}
                              ></${ye}>
                          `:f`
                              <${co}
                                  ${w(co,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${co}>
                              <${ht}
                                  ${w(ht,{config:e.pageNode.entry.controls,currentValues:Di(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${ht}>
                          `}
                </div>
            </div>
        `}}),Ut=ke()({tagName:"book-element-example-controls",styles:g`
        :host {
            display: flex;
            color: ${z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[le.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return f`
            <${ce}
                ${w(ce,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${ce}>
        `}}),Bs=Symbol("unset-internal-state"),ho=ke()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Bs},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw gl(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Bs&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return f`
                ${Ee(!!t.elementExampleNode.entry.styles,f`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),f`
                <${ye}
                    ${w(ye,{message:`${t.elementExampleNode.entry.title} failed: ${In(n)}`})}
                ></${ye}>
            `}},options:{allowPolymorphicState:!0}}),fo=ke()({tagName:"book-element-example-wrapper",styles:g`
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

        ${Ut} {
            color: ${z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ut} {
            color: ${z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return f`
            <div class="individual-example-wrapper">
                <${Ut}
                    ${w(Ut,e)}
                ></${Ut}>
                <${ho}
                    ${w(ho,e)}
                ></${ho}>
            </div>
        `}}),St=ke()({tagName:"book-entry-display",styles:g`
        :host {
            display: flex;
            flex-direction: column;
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
    `,renderCallback:({inputs:e})=>{const t=oc(e.currentRoute.paths),r=o2({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return f`
            <${lo}
                ${w(lo,{currentSearch:t,currentRoute:e.currentRoute,router:e.router})}
            ></${lo}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${qe.Footer}></slot>
        `}});function qc(e,t,r,n){const o=Ho(r,n),i=[];if(o){const a=qc(e,t,o,n);a&&i.push(a)}if(_t(r,oe.Page)&&!e.includes(r)){const a=Di(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:nn(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function o2({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:i}){if(!e.length&&n)return[f`
                No results
            `];const a=$a(e,1)?qc(e,o,e[0],i):void 0,s=a&&$a(e,1)?f`
                  <${ht}
                      ${w(ht,{config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}
                  ></${ht}>
              `:"",l=O0(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(_t(c,oe.Page))return f`
                    <${uo}
                        class="block-entry"
                        ${w(uo,{isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                    ></${uo}>
                `;if(_t(c,oe.ElementExample)){const u=Di(o,c.fullUrlBreadcrumbs.slice(0,-1));return f`
                    <${fo}
                        class="inline-entry"
                        ${w(fo,{elementExampleNode:c,currentPageControls:u,router:r})}
                    ></${fo}>
                `}else return _t(c,oe.Root)?f`
                    <h1>${c.entry.title}</h1>
                `:f`
                    <${ye}
                        class="block-entry"
                        ${w(ye,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${ye}>
                `});return[s,l]}function i2(e,t,r){const n=Ls(e,t);if(n.length)return n;r(gr);const o=Ls(e,gr.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ls(e,t){return e.filter(r=>A0({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Vr=Ri()({tagName:"element-book-app",events:{pathUpdate:W()},stateInitStatic:{currentRoute:gr,router:void 0,colors:{config:void 0,theme:Ms(void 0)},treeBasedCurrentControls:void 0},styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${z["element-book-page-background-color"].value};
            color: ${z["element-book-page-foreground-color"].value};
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

        ${St} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Pe} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{Rs(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var s,l,c,d;try{let u=function(P){e.router?e.router.setRoutes(P):n({currentRoute:{...e.currentRoute,...P}}),t.elementBookRoutePaths&&!tr(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(P.paths??[]))};var a=u;if(t.elementBookRoutePaths&&!tr(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(s=t.internalRouterConfig)!=null&&s.useInternalRouter&&!e.router){const P=m1(t.internalRouterConfig.basePath);n({router:P}),P.addRouteListener(!0,D=>{n({currentRoute:D})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const h={themeColor:t.themeColor};if(!tr(h,(c=e.colors)==null?void 0:c.config)){const P=Ms(h);n({colors:{config:h,theme:P}}),b1(r,P)}const m=t.debug??!1,p=qu({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:m});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.trigger!==t.entries)&&n({treeBasedCurrentControls:{trigger:t.entries,currentControls:ec(p.tree)}});const v=oc(e.currentRoute.paths),C=(v?o1({flattenedNodes:p.flattenedNodes,searchQuery:v}):void 0)??i2(p.flattenedNodes,e.currentRoute.paths,u),T=(d=e.treeBasedCurrentControls)==null?void 0:d.currentControls;return T?(t.debug&&console.info({currentControls:T}),f`
                <div
                    class="root"
                    ${E(vn,P=>{const D=r.shadowRoot.querySelector(St.tagName);if(D?D.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${St.tagName}' for scrolling.`),u(P.detail),!(r.shadowRoot.querySelector(Pe.tagName)instanceof Pe))throw new Error(`Failed to find child '${Pe.tagName}'`);Rs(r)})}
                    ${E(ht.events.controlValueChange,P=>{if(!e.treeBasedCurrentControls)return;const D=Yu(T,P.detail.fullUrlBreadcrumbs,P.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:D}})})}
                >
                    <${Pe}
                        ${w(Pe,{flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:v?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${qe.NavHeader}
                            slot=${qe.NavHeader}
                        ></slot>
                    </${Pe}>
                    <${St}
                        ${w(St,{currentRoute:e.currentRoute,currentNodes:C,router:e.router,debug:m,currentControls:T,originalTree:p.tree})}
                    >
                        <slot
                            name=${qe.Footer}
                            slot=${qe.Footer}
                        ></slot>
                    </${St}>
                </div>
            `):f`
                    <${ye}
                        ${w(ye,{message:"Failed to generate page controls."})}
                    ></${ye}>
                `}catch(u){return console.error(u),f`
                <p class="error">${In(u)}</p>
            `}}});async function Rs(e){const t=e.shadowRoot.querySelector(Pe.tagName);if(!(t instanceof Pe))throw new Error(`Failed to find child '${Pe.tagName}'`);await r2(t)}const Uc=Symbol("and"),Wc=Symbol("or"),Yc=Symbol("exact"),Gc=Symbol("enum"),Jc=Symbol("unknown"),Xc="__vir__shape__definition__key__do__not__use__in__actual__objects";function a2(e){return or(e,Xc)}const s2="__vir__shape__specifier__key__do__not__use__in__actual__objects",l2=[Uc,Wc,Yc,Gc,Jc];function c2(e){return Mr(e,Wc)}function d2(e){return Mr(e,Uc)}function u2(e){return Mr(e,Yc)}function h2(e){return Mr(e,Gc)}function f2(e){return Mr(e,Jc)}function Mr(e,t){const r=Kc(e);return!!r&&r.specifierType===t}function Kc(e){if(Pi(e)&&or(e,s2)){if(!or(e,"parts")||!_i(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!or(e,"specifierType")||!ou(l2,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function oi(e){return ii(e)}function ii(e){const t=Kc(e);if(t){if(c2(t)||u2(t))return ii(t.parts[0]);if(d2(t))return t.parts.reduce((r,n)=>Object.assign(r,ii(n)),{});if(h2(t))return Object.values(t.parts[0])[0];if(f2(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return a2(e)?oi(e.shape):e instanceof RegExp||_i(e,"array")?e:Pi(e)?Ll(e,(r,n)=>oi(n)):e}function p2(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:oi(e),[Xc]:!0}}const Bt={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function Ns(e,t){return`var(${e}, var(${Bt.color}, ${t}))`}const x={stroke:(e="currentColor")=>Ns(Bt.strokeColor,e),fill:(e="currentColor")=>Ns(Bt.fillColor,e)};class b{constructor(t,r){this.iconName=t,this.svgString=r}}function y(e,...t){return e.reduce((n,o,i)=>{const a=i<t.length?t[i]:"";return n+o+a},"")}const g2=new b("Copy16Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),m2=new b("ExternalLink16Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),sr=new b("InfoCircle16Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),v2=new b("ArrowBarUp24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),w2=new b("ArrowForwardUp24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Ui=new b("ArrowLeft24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),b2=new b("ArrowLoopLeft24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),y2=new b("ArrowLoopRight24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Wi=new b("ArrowRight24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Qc=new b("ArrowsSort24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),zs={interactionDuration:g`--toniq-interaction-transition-duration`,prettyDuration:g`--toniq-pretty-transition-duration`},X={interaction:g`var(${zs.interactionDuration}, 84ms)`,pretty:g`var(${zs.prettyDuration}, 300ms)`};function $2(e,t){return e.map(t)}function ed(e,t){return e.match(t)??[]}function x2(e){return e.replace(/,/g,"")}function k2(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Ds(e){return e!==e.toUpperCase()}function ai(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=Ds(a)||Ds(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function yr(e,t){return e.split(t)}const S2=String(NaN);function td(e){if(typeof e=="string"&&isNaN(Number(e)))return S2;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${ed(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(s=>s.split("").reverse().join("")).join(",")}${o}`}function C2(e){return typeof e=="number"?e:Number(typeof e=="string"?x2(e):e)}function T2(e){return String(e).includes("e")}function Yi(e){return!!e}function I2(e){return!!e&&typeof e=="object"}function Le(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function E2(e){return Le(e).filter(t=>isNaN(Number(t)))}function A2(e,t){return Le(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function si(e,t){return A2(e,r=>!t.includes(r))}function $r(e,t){let r=!1;const n=Le(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Le(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const po="://";function M2(...e){const t=e.join("/"),[r,n=""]=t.includes(po)?t.split(po):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>s.includes("?")||o?(o=!0,s):encodeURIComponent(s)).reduce((s,l,c,d)=>{if(i)return s;const u=d[c+1];let h=l;const m=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||m){i=!0;let p=!1;const v=d.slice(m?c+2:c+1).reduce(($,C)=>(C.includes("#")&&(p=!0),p?$.concat(C):[$,C].join("&")),"");h=[l,u,v].join("")}return s.concat(h)},[]);return[r,r?po:"",a.join("/")].join("")}const P2=["k","M","B","T","P","E","Z","Y"];function Gi({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function _2(e,t,r){const[n,o]=yr(e,"."),i=td(n),a=ed(i,/,/g).length,s=t[a-1],[l,c]=yr(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Gi({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const Fs=3;function B2({input:e,maxLength:t}){const r=String(e),[n,o]=yr(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=yr(n,"."),d=i.length+Fs;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Gi({afterDot:c,beforeDot:l,maxLength:t-i.length+Fs}),s].join("")}function L2(e,t){const[r,n]=yr(td(e),".");if(r.length<=t)return Gi({beforeDot:r,afterDot:n,maxLength:t})}function R2(e,{customSuffixes:t=P2,maxLength:r=6}={}){const n=C2(e);if(isNaN(n)||n===1/0)return String(n);if(T2(n))return B2({input:n,maxLength:r});const o=String(n),i=L2(o,r);return i??_2(o,t,r)}function Ji(){return e=>e}function go(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const N2=(()=>{const e={backgroundColor:g`#ffffff`,foregroundColor:g`#000000`},t={...e,foregroundColor:g`#00D093`},r={...e,foregroundColor:g`#ACADAD`},n={...e,foregroundColor:g`#D6D6D6`},o={...t},i={...t,foregroundColor:g`#00A876`},a={...t,foregroundColor:g`#1D6852`},s={...n},l={...e,foregroundColor:g`#EAFBF7`},c={...e,backgroundColor:g`#D2EEFA`},d=go(o),u=go(i),h=go(a),m=h,p={backgroundColor:g`#F1F3F6`,foregroundColor:e.foregroundColor},v={...p,foregroundColor:g`#9A9A9D`};return Ji()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:m,accentPrimary:d,accentPrimaryHover:u,accentPrimaryActive:h,accentSecondary:p,accentTertiary:v})})(),rd=N2;function Os(e,t){return B(`--toniq-${ai(e)}-${ai(t)}`)}const Xi=$r(rd,e=>({backgroundColor:Os(e,"backgroundColor"),foregroundColor:Os(e,"foregroundColor")}));function Te(e,t){const r=rd[e][t],n=Xi[e][t];return g`var(${n}, ${r})`}const k=$r(Xi,e=>({foregroundColor:Te(e,"foregroundColor"),backgroundColor:Te(e,"backgroundColor")}));function O(e){return g`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const mt=g`
    pointer-events: none;
    opacity: 0.3;
`;function lr(e,t,r){return Math.min(Math.max(e,t),r)}function It(e){return`${e}px`}function mo(e){return`${e}%`}function vo(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const u=e[d+1];return u==null?!0:c<=t&&u>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function z2(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=D2(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(js(o,r),o.length>r&&js(o,r)),o}function js(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function D2(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function et({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(It(n+r+t));return g`
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
    `}const nd=Ji()({toniqFont:{"font-family":g`'Rubik', sans-serif`},normalWeightFont:{"font-weight":g`400`},boldFont:{"font-weight":g`600`},extraBoldFont:{"font-weight":g`900`},paragraphFont:{"line-height":g`24px`,"font-size":g`16px`},boldParagraphFont:{},labelFont:{"line-height":g`16px`,"font-size":g`12px`},boldLabelFont:{},h1Font:{"line-height":g`96px`,"font-size":g`64px`},h2Font:{"line-height":g`48px`,"font-size":g`32px`},h3Font:{"line-height":g`32px`,"font-size":g`24px`},monospaceFont:{"font-family":g`'Inconsolata', monospace`,"line-height":g`1.125em`}}),F2=$r(nd,(e,t)=>{const r=B(ai(e.replace(/Font$/,"")));return $r(t,o=>{const i=B(o);return g`--toniq-font-${r}-${i}`})});function Ae(e){const t=F2[e],r=nd[e],n=Le(t).map(o=>{const i=r[o],a=t[o];return g`
            ${B(o)}: var(${a}, ${i});
        `});return B(n.join(`
`))}const q=(()=>{const e=g`
        font-style: normal;
        color: ${k.pagePrimary.foregroundColor};
        ${Ae("toniqFont")};
    `,t=g`
        ${e};
        ${Ae("normalWeightFont")};
    `,r=g`
        ${e};
        ${Ae("boldFont")};
    `,n=g`
        ${e};
        ${Ae("extraBoldFont")};
    `,o=g`
        ${e};
        ${Ae("paragraphFont")};
        ${t};
    `,i=g`
        ${e};
        ${o};
        ${r};
    `,a=g`
        ${e};
        ${Ae("labelFont")};
        ${t};
    `,s=g`
        ${a};
        ${r};
    `,l=g`
        ${Ae("h1Font")};
        ${n};
    `,c=g`
        ${Ae("h2Font")};
        ${r};
    `,d=g`
        ${Ae("h3Font")};
        ${r};
    `,u=g`
        ${Ae("monospaceFont")}
    `;return Ji()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:u})})(),tt=g`
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
`,yn={popupShadow:g`
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
    `};function O2(e,t=!0){const r=B(e),n=e===":host"?g`
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
            ${yn.popupShadow};
        }

        ${o}
    `}const vt=g`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,j2=new b("ArrowsSortAscending24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),H2=new b("ArrowsSortDescending24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),V2=new b("Bucket24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Z2=new b("BuildingStore24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),q2=new b("CalendarEvent24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),U2=new b("Cash24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),W2=new b("Chain24Icon",y`
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
            fill="${x.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="m11.736 16.792.206-.245a.64.64 0 0 1 .902-.079l.491.412a.64.64 0 0 1 .079.902l-2.059 2.451a3.206 3.206 0 0 1-2.451 1.142 3.206 3.206 0 0 1-2.058-.749l-2.452-2.058a3.208 3.208 0 0 1-1.142-2.454c0-.752.266-1.479.752-2.055l3.703-4.41v-.003a3.204 3.204 0 0 1 4.509-.39l1.456 1.223c.27.227.305.632.078.903l-.409.488a.641.641 0 0 1-.902.079l-1.459-1.224a1.283 1.283 0 0 0-1.801.157l-3.706 4.413c-.192.23-.301.521-.301.822 0 .378.17.736.458.979l2.451 2.058a1.274 1.274 0 0 0 1.802-.157l1.853-2.205Zm.528-9.584-.207.245a.64.64 0 0 1-.901.079l-.492-.412a.64.64 0 0 1-.078-.902l2.059-2.451a3.206 3.206 0 0 1 2.451-1.142c.752 0 1.482.266 2.058.749l2.451 2.058a3.208 3.208 0 0 1 1.142 2.454 3.18 3.18 0 0 1-.752 2.055l-3.702 4.41v.003a3.204 3.204 0 0 1-4.509.39l-1.457-1.223a.642.642 0 0 1-.078-.903l.41-.488a.64.64 0 0 1 .901-.079l1.459 1.224a1.286 1.286 0 0 0 1.802-.157l3.706-4.413c.192-.23.3-.521.3-.822 0-.378-.169-.736-.457-.979l-2.452-2.058a1.274 1.274 0 0 0-1.801.157l-1.853 2.205Z"
            />
        </svg>
    `),od=new b("CheckMark24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),id=new b("ChevronDown24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Y2=new b("ChevronUp24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),G2=new b("Circle24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),ad=new b("CircleDot24Icon",y`
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
                stroke="${x.stroke()}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${x.fill()}"
                stroke="${x.fill()}"
                stroke-width="2"
            />
        </svg>
    `),J2=new b("CirclePlusFill24Icon",y`
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
                fill="${x.fill()}"
                stroke="none"
                d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm-1 9H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2Z"
            />
        </svg>
    `),X2=new b("CirclePlusOutline24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),K2=new b("CircleWavyCheck24Icon",y`
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
                fill="${x.fill()}"
                stroke="none"
                d="M4.93 19.07c.49.48 1.15.7 1.9.75.63.04 1.35-.08 1.87.14.52.22.96.81 1.45 1.23.57.5 1.2.81 1.85.81.65 0 1.28-.32 1.86-.81.5-.42.94-1.02 1.44-1.23.5-.21 1.22-.09 1.86-.14a2.93 2.93 0 0 0 1.9-.75c.49-.48.7-1.15.76-1.9.04-.63-.08-1.35.14-1.87.22-.52.81-.96 1.23-1.45.5-.57.81-1.2.81-1.85 0-.65-.32-1.28-.81-1.86-.42-.5-1.02-.94-1.23-1.44-.21-.5-.09-1.22-.14-1.86a2.93 2.93 0 0 0-.75-1.9 2.9 2.9 0 0 0-1.9-.76c-.63-.04-1.35.08-1.87-.14-.52-.22-.96-.81-1.45-1.23A2.9 2.9 0 0 0 12 2c-.65 0-1.28.32-1.86.81-.5.42-.94 1.02-1.44 1.23-.5.21-1.22.09-1.86.14-.76.06-1.43.27-1.9.75a2.9 2.9 0 0 0-.76 1.9c-.04.63.08 1.35-.14 1.87-.22.52-.81.96-1.23 1.45-.5.57-.81 1.2-.81 1.85 0 .65.32 1.28.81 1.86.42.5 1.02.94 1.23 1.44.21.5.09 1.22.14 1.86.06.76.27 1.43.75 1.9ZM8.3 12.7l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L11 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),Q2=new b("Clock24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),sd=new b("Code24Icon",y`
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
            fill="${x.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="M21.393 2H2.607A2.61 2.61 0 0 0 0 4.607v14.786A2.61 2.61 0 0 0 2.607 22h18.786A2.61 2.61 0 0 0 24 19.393V4.607A2.61 2.61 0 0 0 21.393 2Zm1.902 17.393a1.904 1.904 0 0 1-1.902 1.902H2.607a1.904 1.904 0 0 1-1.902-1.902V4.607c0-1.049.853-1.903 1.902-1.903h18.786c1.049 0 1.902.854 1.902 1.903v14.786ZM21.664 6H2.336A.344.344 0 0 0 2 6.352c0 .195.15.353.336.353h19.328A.345.345 0 0 0 22 6.352.344.344 0 0 0 21.664 6ZM2.607 4.583a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm3.006 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm-1.503 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm4.757 5.411a.351.351 0 0 0-.498 0l-3.757 3.757a.351.351 0 0 0 0 .498l3.757 3.757a.352.352 0 1 0 .498-.498L5.359 14l3.508-3.508a.351.351 0 0 0 0-.498Zm6.764 0a.352.352 0 1 0-.499.498L18.641 14l-3.509 3.508a.353.353 0 0 0 .499.498l3.757-3.757a.353.353 0 0 0 0-.498l-3.757-3.757Zm-2.008-.458a.352.352 0 0 0-.451.211l-3.006 8.266a.351.351 0 1 0 .662.24l3.006-8.266a.352.352 0 0 0-.211-.451Z"
            />
        </svg>
    `),ld=new b("Copy24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),ef=new b("CreateFile24Icon",y`
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
            stroke="${x.stroke()}"
            width="24"
            height="24"
        >
            <path
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `),tf=new b("DotsVertical24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),rf=new b("Download24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${x.stroke()}"
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
    `),nf=new b("Edit24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),cd=new b("ExternalLink24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),of=new b("Filter24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),af=new b("Geometry24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),sf=new b("GridDots24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),lf=new b("HeartFill24Icon",y`
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
                fill="${x.fill()}"
                stroke="${x.stroke()}"
                stroke-width="2"
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `),cf=new b("HeartOutline24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),df=new b("Infinity24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),uf=new b("Info24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill="${x.stroke()}"
            viewBox="0 0 24 24"
        >
            <path
                d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-8-3a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 9Zm-.01 8.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Z"
            />
        </svg>
    `),hf=new b("LayersLinked24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),ff=new b("LayoutGrid24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),pf=new b("Lifebuoy24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),gf=new b("List24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),mf=new b("ListDetails24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),vf=new b("Loader24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),dd=new b("LoaderAnimated24Icon",y`
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
            stroke="${x.stroke()}"
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
    `),wf=new b("Lock24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),bf=new b("LockOpen24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),yf=new b("Menu24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),$f=new b("Paper24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),xf=new b("Person24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill="${x.stroke()}"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 2c-2.651.003-5.193 1.057-7.068 2.932S2.003 9.349 2 12c.004 2.651 1.059 5.192 2.934 7.066C6.808 20.941 9.349 21.996 12 22c2.652 0 5.196-1.054 7.071-2.929C20.946 17.196 22 14.652 22 12s-1.054-5.196-2.929-7.071C17.196 3.054 14.652 2 12 2Zm6.082 15.77c-.561-1.132-1.428-2.086-2.503-2.752-1.074-.666-2.314-1.019-3.578-1.018-1.265.001-2.504.355-3.577 1.022-1.074.667-1.94 1.621-2.501 2.755C4.428 16.226 3.595 14.154 3.6 12c0-2.228.885-4.364 2.46-5.94C7.636 4.485 9.772 3.6 12 3.6s4.364.885 5.94 2.46C19.515 7.636 20.4 9.772 20.4 12c.005 2.151-.826 4.22-2.318 5.77Z"
            />
            <path
                d="M12 5.5c-.692 0-1.369.205-1.945.59-.575.384-1.024.931-1.289 1.571-.264.639-.334 1.343-.199 2.022.135.679.469 1.302.958 1.792.49.489 1.113.823 1.792.958s1.383.065 2.022-.199c.64-.265 1.187-.714 1.571-1.29.385-.575.59-1.252.59-1.944 0-.46-.091-.915-.266-1.339a3.50094 3.50094 0 0 0-1.895-1.895C12.915 5.591 12.46 5.5 12 5.5Z"
            />
        </svg>
    `),kf=new b("Photo24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Sf=new b("Refresh24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="${x.stroke()}"
        >
            <path
                d="M17 9a6 6 0 1 0 0 6 1 1 0 0 1 2 0 8 8 0 1 1-1-8V5a1 1 0 0 1 2 0v5l-1 1h-5a1 1 0 0 1 0-2h3Z"
            />
        </svg>
    `),ud=new b("Rocket24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
            stroke="${x.stroke()}"
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
    `),Cf=new b("Send24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Tf=new b("ShoppingCart24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),If=new b("Social24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Ef=new b("Square24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Af=new b("SquareCheck24Icon",y`
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
                fill="${x.fill()}"
                stroke="none"
                d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6ZM8.3 12.7l2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L11 12.58l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),en=new b("Trash24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Mf=new b("Upload24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${x.stroke()}"
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
    `),Pf=new b("User24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            fill="${x.stroke()}"
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
    `),_f=new b("Users24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Bf=new b("Wallet24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Lf=new b("WorldUpload24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),Rf=new b("X24Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),fd=new b("Kyc32Icon",y`
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
    `),pd=new b("FolderOff48Icon",y`
        <svg
            fill="none"
            stroke="${x.stroke()}"
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
    `),gd=new b("Api64Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            fill="${x.stroke()}"
            fill-rule="nonzero"
            viewBox="0 0 64 64"
            width="64"
            height="64"
        >
            <path
                d="m58.672 15.498-.007-.049a1.979 1.979 0 0 0-.043-.2c-.004-.013-.006-.026-.011-.039a1.7 1.7 0 0 0-.228-.486 1.924 1.924 0 0 0-.123-.169l-.013-.017a1.908 1.908 0 0 0-.165-.171l-.037-.031a1.736 1.736 0 0 0-.161-.125l-.035-.024a1.678 1.678 0 0 0-.206-.117l-.014-.009L32.808 2.138a1.87 1.87 0 0 0-1.617 0L6.366 14.061a1.868 1.868 0 0 0-1.058 1.682v30.67c0 .678.368 1.303.961 1.632l24.825 13.766.003.001a1.817 1.817 0 0 0 .411.166l.056.014a2.234 2.234 0 0 0 .219.041 1.72 1.72 0 0 0 .433 0l.056-.009c.055-.009.109-.018.162-.032l.058-.014c.058-.016.114-.035.171-.056l.036-.013a2.52 2.52 0 0 0 .204-.097l.002-.001L57.73 48.045c.593-.329.962-.954.962-1.632V15.739a2.175 2.175 0 0 0-.02-.241ZM54.96 45.312 33.866 57.011v-6.578a1.867 1.867 0 0 0-3.733 0v6.578L9.04 45.314V18.771a10.728 10.728 0 0 1 5.729 2.986l3.767 4.161c-.628.797-1.431 1.914-1.655 2.755a7.168 7.168 0 0 0 .725 5.452l12.434-7.206a7.166 7.166 0 0 0-4.369-3.34c-1.113-.296-2.814-.108-3.882.112l-.285.183-4.204-4.65a14.354 14.354 0 0 0-5.748-3.514l20.447-9.82 20.763 9.972-13.529 7.502a1.866 1.866 0 0 0 1.81 3.264l13.916-7.716v11.132h-.113c0 6.121-4.979 11.1-11.1 11.1a11 11 0 0 1-5.917-1.726 5.534 5.534 0 0 0-1.257-5.899l-1.422 1.42-2.756-2.755-.002.002a.923.923 0 1 0-1.305 1.306l2.755 2.755-2.392 2.392-2.837-2.837-.002.002a.925.925 0 0 0-1.306 1.306l2.838 2.837-1.422 1.42a5.534 5.534 0 0 0 6.682.889 14.716 14.716 0 0 0 8.344 2.587c4.48 0 8.497-2.003 11.213-5.157v5.626Z"
            />
        </svg>
    `),Nf=new b("CircleDashes64Icon",y`
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
            fill="${x.stroke()}"
        >
            <path
                d="M18.769 37.78a3.053 3.053 0 0 1-2.989-2.457 16.934 16.934 0 0 1 2.354-12.479 16.912 16.912 0 0 1 3.799-4.186 16.882 16.882 0 0 1 5.873-3.003 17 17 0 0 1 12.017 1.037 3.051 3.051 0 0 1-2.643 5.498 10.9 10.9 0 0 0-7.709-.666 10.828 10.828 0 0 0-3.763 1.925 10.852 10.852 0 0 0-2.437 2.683 11.006 11.006 0 0 0-1.506 8.004 3.05 3.05 0 0 1-2.996 3.644Zm13.699 11.221a17.102 17.102 0 0 1-6.499-1.283 3.05 3.05 0 0 1 2.322-5.641 10.9 10.9 0 0 0 7.085.425 10.809 10.809 0 0 0 3.815-1.94 10.81 10.81 0 0 0 2.8-3.295 10.908 10.908 0 0 0 1.205-7.058 3.049 3.049 0 1 1 6.017-1c.287 1.721.306 3.47.058 5.2a16.943 16.943 0 0 1-6.304 10.944 16.885 16.885 0 0 1-5.956 3.026 16.903 16.903 0 0 1-4.543.622ZM32.093 62A29.9 29.9 0 0 1 5.161 45.097a3.051 3.051 0 0 1 5.491-2.659c4.804 9.918 15.698 15.233 26.494 12.925a23.959 23.959 0 0 0 6.3-2.302 3.048 3.048 0 0 1 4.129 1.247 3.051 3.051 0 0 1-1.249 4.13 30.093 30.093 0 0 1-7.904 2.891 30.291 30.291 0 0 1-6.329.671ZM54.5 50.09a3.051 3.051 0 0 1-2.527-4.754c3.652-5.428 4.91-11.939 3.541-18.335C54.15 20.62 50.352 15.2 44.818 11.739a3.05 3.05 0 1 1 3.234-5.172c6.947 4.344 11.715 11.148 13.428 19.158 1.717 8.03.138 16.203-4.446 23.017A3.05 3.05 0 0 1 54.5 50.09ZM5.218 34.128l-.103-.001a3.05 3.05 0 0 1-2.946-3.151A29.932 29.932 0 0 1 25.878 2.668c2.762-.59 5.577-.79 8.372-.597a3.05 3.05 0 0 1-.423 6.086 23.914 23.914 0 0 0-6.673.476A23.846 23.846 0 0 0 8.265 31.18a3.05 3.05 0 0 1-3.047 2.948Z"
            />
        </svg>
    `),zf=new b("Rocket64Icon",y`
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
            stroke="${x.stroke()}"
            stroke-width="4"
        >
            <path
                d="M61.733 2.813a.629.629 0 0 0-.476-.489c-7.85-1.92-25.984 4.921-35.819 14.748a42.506 42.506 0 0 0-4.776 5.642c-3.032-.275-6.063-.044-8.644 1.082C4.729 27.001 2.609 35.37 2.017 38.963a1.294 1.294 0 0 0 .829 1.427c.187.069.387.095.586.075l11.702-1.285c.008.883.061 1.764.159 2.642a2.62 2.62 0 0 0 .765 1.6l4.531 4.532c.429.433.996.704 1.603.765.872.097 1.748.15 2.626.159L23.534 60.57a1.296 1.296 0 0 0 .402 1.076 1.3 1.3 0 0 0 1.098.337c3.594-.577 11.981-2.698 15.167-9.985 1.126-2.584 1.357-5.599 1.097-8.616a42.377 42.377 0 0 0 5.658-4.777c9.87-9.816 16.668-27.551 14.777-35.792ZM38.182 25.889a6.166 6.166 0 0 1-1.337-6.717 6.166 6.166 0 0 1 5.695-3.806 6.164 6.164 0 0 1 4.358 10.523 6.154 6.154 0 0 1-8.716 0ZM10.896 45.858a6.505 6.505 0 0 0-3.804 1.854c-2.543 2.552-2.784 12.004-2.784 12.004s9.458-.241 12.003-2.787a6.46 6.46 0 0 0 1.855-3.807"
            />
        </svg>
    `),Df=new b("CryptoBtc24Icon",y`
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
    `),Ff=new b("CryptoCkBtc24Icon",y`
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
    `),Of="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",md="0 0 58 58",vd=`<image xlink:href="${Of}" id="icp-16__b" width="58" height="58" />`,jf=new b("CryptoIcp16Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${md}"
        >
            ${vd}
        </svg>
    `),Hf=new b("CryptoIcp24Icon",y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${md}"
        >
            ${vd}
        </svg>
        </svg>
    `),Vf=new b("EntrepotLogo144Icon",y`
        <svg
            height="134"
            width="144"
            viewBox="0 0 134 144"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="${x.fill()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `),wd=new b("BrandDiscord24Icon",y`
        <svg
            fill="${x.fill("#5865f2")}"
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
    `),Zf=new b("BrandFacebookLogo24Icon",y`
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
    `),qf=new b("BrandGoogleLogo24Icon",y`
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
    `),Uf=new b("BrandIcScan24Icon",y`
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
    `),bd=new b("BrandInstagram24Icon",y`
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
    `),Wf=new b("BrandInstagramFlat24Icon",y`
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
            fill="${x.fill()}"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `),yd=new b("BrandTelegram24Icon",y`
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
            fill="${x.fill("#2AABEE")}"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `),$d=new b("BrandTiktok24Icon",y`
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
    `),Yf=new b("BrandTiktokFlat24Icon",y`
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
            fill="${x.fill()}"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `),xd=new b("BrandTwitch24Icon",y`
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
            fill="${x.fill("#9146FF")}"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `),kd=new b("BrandTwitter24Icon",y`
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
            fill="${x.fill("#41ABE1")}"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `),st={"core-16":[g2,m2,sr],"core-24":[v2,w2,Ui,b2,y2,Wi,Qc,j2,H2,V2,Z2,q2,U2,W2,od,id,Y2,G2,ad,J2,X2,K2,Q2,sd,ld,ef,tf,rf,nf,cd,of,af,sf,lf,cf,df,uf,hf,ff,pf,gf,mf,vf,dd,wf,bf,yf,$f,xf,kf,Sf,ud,hd,Cf,Tf,If,Ef,Af,en,Mf,Pf,_f,Bf,Lf,Rf],"core-32":[fd],"core-48":[pd],"core-64":[gd,Nf,zf],cryptocurrencies:[Df,Ff,jf,Hf],logos:[Vf],"third-party-brands":[wd,Zf,qf,Uf,bd,Wf,yd,$d,Yf,xd,kd]},Gf=p2({Discord:"",Instagram:"",Telegram:"",TikTok:"",Twitch:"",Twitter:"",website:""}),Jf=Gf.defaultValue,Sd={Discord:wd,Instagram:bd,Telegram:yd,TikTok:$d,Twitch:xd,Twitter:kd,website:sd},Hs="toniq-",{defineElement:ee,defineElementNoInputs:Xf}=Ni({assertInputs:e=>{if(!e.tagName.startsWith(Hs))throw new Error(`Tag name should start with '${Hs}' but got '${e.tagName}'`)}}),S=ee()({tagName:"toniq-icon",hostClasses:{"toniq-icon-fit-icon":!1},styles:({hostClasses:e})=>g`
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
    `,renderCallback({inputs:e}){return f`
            ${e.icon?j0(e.icon.svgString):""}
        `}}),li=g`8px`;var xr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(xr||{});const F=ee()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>g`
        :host {
            ${q.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${vt};
        }

        :host(:hover) button {
            ${O(k.accentPrimaryHover)};
        }

        :host(:active) button {
            ${O(k.accentPrimaryActive)};
        }

        button {
            ${tt};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${li};
            ${O(k.accentPrimary)};
            padding: 10px;
            transition: color ${X.interaction},
                background-color ${X.interaction},
                border-color ${X.interaction};
        }

        ${et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${O(k.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${O(k.pagePrimary)};
            border-color: ${k.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${mt};
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
                  <${S}
                      class="icon-template"
                      ${w(S,{icon:e.icon})}
                  ></${S}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function Kf(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Ki(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(u=>i==="+"?u>l:u<l).sort((u,h)=>i==="+"?u-h:h-u);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function Qf(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(h,m){let p=parseFloat(h);return/%/.test(h)&&(p/=100,p*=m),p}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),u=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:u}}}function ep(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Cd(e){let t=[];for(const r of e.children)t=t.concat(r,Cd(r));return t}function tp(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Cd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const u=d.getBoundingClientRect();if(t&&!ep(r,u,a))continue;const h=window.getComputedStyle(d);let[m,p]=h.getPropertyValue("scroll-snap-align").split(" ");typeof p>"u"&&(p=m);const v=i==="x"?p:m,$=u[s]-r[s]+e[c];switch(v){case"none":break;case"start":n[i].start.push($);break;case"center":n[i].center.push($+u[l]/2);break;case"end":n[i].end.push($+u[l]);break}}}return n}function Ki(e){const t=e.getBoundingClientRect(),r=Qf(e),n=tp(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Vs([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Vs([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Vs(e){return Array.from(new Set(e))}const tn="templates-container",rp=4e3;var ci=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(ci||{});const Q=ee()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},templatesWrapperHeight:0,scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>g`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        .${B(tn)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }

        .${B(tn)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;

            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
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

        .arrow ${S} {
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{wo({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||rp)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Zs(t.scrollSnapPositions,0),i=Zs(t.scrollSnapPositions,-1);return f`
            <div
                ${pr(()=>{r({scrollSnapPositions:Ki(di(n)).x})})}
                class=${tn}
                ${E("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${S}
                        class=${ve({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${w(S,{icon:Ui})}
                        ${E("click",()=>{wo({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${S}>
                </div>
                ${e.templates.map(a=>f`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${S}
                        class=${ve({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${w(S,{icon:Wi})}
                        ${E("click",()=>{wo({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${S}>
                </div>
            </div>
        `}});function Zs(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function di(e){const t=e.shadowRoot.querySelector(`.${tn}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function wo({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=di(e),i=o.clientWidth,a=Ki(di(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const u=np(e,t),h=qs(o.scrollLeft,a,!1),m=t==="right"?1:-1,p=(o.clientWidth-u*3)*m,v=qs((h||0)+p,a,!0);t==="right"&&v>h?o.scrollTo({behavior:"smooth",left:v}):t==="left"&&v<h?o.scrollTo({behavior:"smooth",left:v}):Kf(o,t)}}function np(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function qs(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const Me=ee()({tagName:"toniq-checkbox",events:{checkedChange:W()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Te("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Te("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Te("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Te("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Te("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>g`
        :host {
            ${q.boldParagraphFont};
            display: inline-flex;
            transition: color ${X.interaction},
                background-color ${X.interaction},
                opacity ${X.interaction};
            border-radius: 8px;
        }

        button {
            ${tt};
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
            ${vt};
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

        ${et({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${mt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=f`
            <span class="checkbox ${e.checked?"checked":""}">
                <${S}
                    class="check-mark ${ve({hidden:!e.checked})}"
                    ${w(S,{icon:od})}
                ></${S}>
            </span>
        `,o=f`
            <slot
                class=${ve({label:!0,checked:e.checked})}
            >
                <span
                    class=${ve({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return f`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${E("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}});var ui=(e=>(e.Default="default",e.Secondary="secondary",e))(ui||{});const Zr=ee()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>g`
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
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${S}
                      ${w(S,{icon:e.icon})}
                  ></${S}>
              `:"";return f`
            ${t}
            <slot>${e.text}</slot>
        `}}),op="data-test-id",Et=Ke(class extends Qe{constructor(e){super(e),this.element=ip(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(op,e),xe}});function ip(e,t,r){ap(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function ap(e,t){if(e.type!==Cr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var hi=(e=>(e.Up="up",e.Down="down",e))(hi||{});const Wt=ee()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:W(),openChange:W()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>g`
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
            ${tt}
            border-radius: 8px;
            outline: none;
        }

        ${et({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${vt};
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
            ${yn.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${yn.popupShadowReversed};
        }

        .selected-label-prefix {
            ${q.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${vt};
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
            ${mt};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?f`
                  <${S}
                      ${Et("rendered-input-icon")}
                      ${w(S,{icon:n.icon})}
                  ></${S}>
              `:"",s=n.selectedLabelPrefix?f`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return f`
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
                        <${S}
                            class="trigger-icon"
                            ${w(S,{icon:id})}
                        ></${S}>
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
        `}}),se=ee()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles},events:{routeChangeTriggered:W()},styles:({hostClasses:e})=>g`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){e.treatAsRouteChange&&ic(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?f`
                <a
                    href=${e.url}
                    ${E("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:f`
                <a href=${e.url} ${E("click",n)}><slot></slot></a>
            `}}),fi=360,Td=8;function Id(e){return(e-Td)/2}const Pt=je({"main-image-size":fi,"secondary-image-size":Id(fi)}),Se=ee()({tagName:"toniq-featured-flip-card-footer",styles:g`
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

        ${F}, ${se} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Pt["secondary-image-size"].value} * 2);
        }

        ${se} ${F} {
            width: 100%;
        }

        ${se} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Pt["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:W(),footerFlipCardButtonClick:W()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?Le(n).filter(i=>!!n[i]).map(i=>{const a=n[i],s=Sd[i];return f`
                          <${se}
                              ${w(se,{newTab:!0,url:a})}
                          >
                              <${S} ${w(S,{icon:s})}></${S}>
                          </${se}>
                      `}):"";return f`
            <div class="buttons">
                ${e.viewMoreButtonUrl?f`
                          <${se}
                              ${w(se,{newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${E(se.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${F}
                                  ${w(F,{text:e.viewMoreButtonText,buttonStyle:xr.Outline})}
                              ></${F}>
                          </${se}>
                      `:f`
                          <${F}
                              ${w(F,{text:e.viewMoreButtonText,buttonStyle:xr.Outline})}
                              ${E("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${F}>
                      `}
                ${e.flipCardButtonText?f`
                          <${F}
                              class="more-info-button"
                              ${w(F,{text:e.flipCardButtonText})}
                              ${E("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${F}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function Ed(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function sp({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function Ad(e){return e?e instanceof Error?e.message:$n(e,"message")?String(e.message):String(e):""}function bo(e){return e instanceof Error?e:new Error(Ad(e))}function lp(e){return!!e}function cp(e){return!!e&&typeof e=="object"}const dp=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function $n(e,t){return e?dp.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function xn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Md(e,t,r=!1,n={}){const o=xn(e),i=new Set(xn(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!$n(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||Pd(l,c,s,r,n[a]??{})})}function Pd(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{$n(t,"constructor")&&(!$n(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{Pd(l,u,r,n,o);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${Ad(h)}`)}}).filter(lp).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):cp(t)&&Md(e,t,n,o)}function Qi(e){return Array.isArray(e)?"array":typeof e}function kn(e,t){return Qi(e)===t}function up(e,t,r){if(!kn(e,t))throw new TypeError(`'${r}' is of type '${Qi(e)}' but type '${t}' was expected.`)}function Us({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(kn(r,"object")?Md(n,r):up(n,Qi(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function _d(e,t){let r=!1;const n=xn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(xn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function qr(e){return String(e).endsWith("px")?String(e):`${e}px`}function hp(e){const t=Nn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class fp extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function pp(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new fp(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function Nn(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Nn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function gp(e,t){return e<t}function mp(e,t){return e>t}const Ws={width:250,height:250};function vp({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?mp:gp)(t.width/t.height,e.width/e.height)?"width":"height"}function yo({box:e,constraint:t,constraintType:r}){const n=vp({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function Bd({box:e,ratio:t}){return _d(e,(r,n)=>n*t)}function pi({box:e,min:t,max:r}){return _d(e,(n,o)=>sp({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function Ld({min:e,max:t,box:r}){const n=Rd({min:e,max:t,box:r}),o=Bd({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Ws.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Ws.width)}}function Rd({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?yo({box:r,constraint:e,constraintType:"min"}):1,o=t?yo({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=Bd({ratio:i,box:r});return(e?yo({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function wp(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function dt(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=bp(a,n[s]);return`${a}${l}`});return wp(i.join(""))}function bp(e,t){return t._$litType$!=null||t._$litDirective$!=null?dt(t):Array.isArray(t)?t.map(n=>dt(n)).join(""):e.endsWith("=")?`"${t}"`:t}function yp(e){const t=$p(e);return kn(t,"object")||kn(t,"array")}function $p(e){const t=Us({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=xp(e);return Us({jsonString:r,errorHandler:()=>{}})}function xp(e){return Ed(e).replace(/,\s*([}\]])/,"$1")}const ea="vir-resizable-image";function kp(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Dt=kp();function Sp(){try{if(!Dt||!Dt.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function ta(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const A=Promise;function H(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function At(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function He(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function ra(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const gi="local-forage-detect-blob-support";let Ur;const $e={},Cp=Object.prototype.toString,Pr="readonly",zn="readwrite";function Tp(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function Ip(e){return new A(function(t){var r=e.transaction(gi,zn),n=ta([""]);r.objectStore(gi).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function Ep(e){return typeof Ur=="boolean"?A.resolve(Ur):Ip(e).then(function(t){return Ur=t,Ur})}function Sn(e){var t=$e[e.name],r={};r.promise=new A(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function mi(e){var t=$e[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function vi(e,t){var r=$e[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function Nd(e,t){return new A(function(r,n){if($e[e.name]=$e[e.name]||Od(),e.db)if(t)Sn(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=Dt.open.apply(Dt,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(gi)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),mi(e)}})}function na(e){return Nd(e,!1)}function oa(e){return Nd(e,!0)}function zd(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function Ap(e){return new A(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function Dd(e){var t=Tp(atob(e.data));return ta([t],{type:e.type})}function Fd(e){return e&&e.__local_forage_encoded_blob}function Mp(e){var t=this,r=t._initReady().then(function(){var n=$e[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return At(r,e,e),r}function Pp(e){Sn(e);for(var t=$e[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,na(e).then(o=>(e.db=o,zd(e)?oa(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw vi(e,o),o})}function Ve(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return A.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),oa(e)}).then(()=>Pp(e).then(function(){Ve(e,t,r,n-1)})).catch(r);r(i)}}function Od(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function _p(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=$e[r.name];o||(o=Od(),$e[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Mp);var i=[];function a(){return A.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return A.all(i).then(function(){return r.db=o.db,na(r)}).then(function(d){return r.db=d,zd(r,t._defaultConfig.version)?oa(r):d}).then(function(d){r.db=o.db=d,t._dbInfo=r;for(var u=0;u<c.length;u++){var h=c[u];h!==t&&(h._dbInfo.db=r.db,h._dbInfo.version=r.version)}})}function Bp(e,t){var r=this;e=He(e);var n=new A(function(o,i){r.ready().then(function(){Ve(r._dbInfo,Pr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),Fd(d)&&(d=Dd(d)),o(d)},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return H(n,t),n}function Lp(e,t){var r=this,n=new A(function(o,i){r.ready().then(function(){Ve(r._dbInfo,Pr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),d=1;c.onsuccess=function(){var u=c.result;if(u){var h=u.value;Fd(h)&&(h=Dd(h));var m=e(h,u.key,d++);m!==void 0?o(m):u.continue()}else o()},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return H(n,t),n}function Rp(e,t,r){var n=this;e=He(e);var o=new A(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,Cp.call(t)==="[object Blob]"?Ep(s.db).then(function(l){return l?t:Ap(t)}):t}).then(function(l){Ve(n._dbInfo,zn,function(c,d){if(c)return a(c);try{var u=d.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var h=u.put(l,e);d.oncomplete=function(){l===void 0&&(l=null),i(l)},d.onabort=d.onerror=function(){var m=h.error?h.error:h.transaction.error;a(m)}}catch(m){a(m)}})}).catch(a)});return H(o,r),o}function Np(e,t){var r=this;e=He(e);var n=new A(function(o,i){r.ready().then(function(){Ve(r._dbInfo,zn,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;i(d)}}catch(d){i(d)}})}).catch(i)});return H(n,t),n}function zp(e){var t=this,r=new A(function(n,o){t.ready().then(function(){Ve(t._dbInfo,zn,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return H(r,e),r}function Dp(e){var t=this,r=new A(function(n,o){t.ready().then(function(){Ve(t._dbInfo,Pr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return H(r,e),r}function Fp(e,t){var r=this,n=new A(function(o,i){if(e<0){o(null);return}r.ready().then(function(){Ve(r._dbInfo,Pr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,d=l.openKeyCursor();d.onsuccess=function(){var u=d.result;if(!u){o(null);return}e===0||c?o(u.key):(c=!0,u.advance(e))},d.onerror=function(){i(d.error)}}catch(u){i(u)}})}).catch(i)});return H(n,t),n}function Op(e){var t=this,r=new A(function(n,o){t.ready().then(function(){Ve(t._dbInfo,Pr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var d=l.result;if(!d){n(c);return}c.push(d.key),d.continue()},l.onerror=function(){o(l.error)}}catch(d){o(d)}})}).catch(o)});return H(r,e),r}function jp(e,t){t=ra.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=A.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?A.resolve(n._dbInfo.db):na(e).then(s=>{const l=$e[e.name],c=l.forages;l.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Sn(e);const c=$e[e.name],d=c.forages;s.close();for(let h=0;h<d.length;h++){const m=d[h];m._dbInfo.db=null,m._dbInfo.version=l}return new A((h,m)=>{const p=Dt.open(e.name,l);p.onerror=v=>{p.result.close(),m(v)},p.onupgradeneeded=()=>{var v=p.result;v.deleteObjectStore(e.storeName)},p.onsuccess=()=>{const v=p.result;v.close(),h(v)}}).then(h=>{c.db=h;for(let m=0;m<d.length;m++){const p=d[m];p._dbInfo.db=h,mi(p._dbInfo)}}).catch(h=>{throw(vi(e,h)||A.resolve()).catch(()=>{}),h})}):o=a.then(s=>{Sn(e);const l=$e[e.name],c=l.forages;s.close();for(var d=0;d<c.length;d++){const h=c[d];h._dbInfo.db=null}return new A((h,m)=>{var p=Dt.deleteDatabase(e.name);p.onerror=()=>{const v=p.result;v&&v.close(),m(p.error)},p.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},p.onsuccess=()=>{const v=p.result;v&&v.close(),h(v)}}).then(h=>{l.db=h;for(var m=0;m<c.length;m++){const p=c[m];mi(p._dbInfo)}}).catch(h=>{throw(vi(e,h)||A.resolve()).catch(()=>{}),h})})}return H(o,t),o}var Hp={_driver:"asyncStorage",_initStorage:_p,_support:Sp(),iterate:Lp,getItem:Bp,setItem:Rp,removeItem:Np,clear:zp,length:Dp,key:Fp,keys:Op,dropInstance:jp};function Vp(){return typeof openDatabase=="function"}var Ue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Zp="~~local_forage_type~",Ys=/^~~local_forage_type~([^~]+)~/,Cn="__lfsc__:",wi=Cn.length,ia="arbf",bi="blob",jd="si08",Hd="ui08",Vd="uic8",Zd="si16",qd="si32",Ud="ur16",Wd="ui32",Yd="fl32",Gd="fl64",Gs=wi+ia.length,Js=Object.prototype.toString;function Jd(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),d=new Uint8Array(c);for(n=0;n<r;n+=4)i=Ue.indexOf(e[n]),a=Ue.indexOf(e[n+1]),s=Ue.indexOf(e[n+2]),l=Ue.indexOf(e[n+3]),d[o++]=i<<2|a>>4,d[o++]=(a&15)<<4|s>>2,d[o++]=(s&3)<<6|l&63;return c}function yi(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Ue[t[n]>>2],r+=Ue[(t[n]&3)<<4|t[n+1]>>4],r+=Ue[(t[n+1]&15)<<2|t[n+2]>>6],r+=Ue[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function qp(e,t){var r="";if(e&&(r=Js.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Js.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Cn;e instanceof ArrayBuffer?(n=e,o+=ia):(n=e.buffer,r==="[object Int8Array]"?o+=jd:r==="[object Uint8Array]"?o+=Hd:r==="[object Uint8ClampedArray]"?o+=Vd:r==="[object Int16Array]"?o+=Zd:r==="[object Uint16Array]"?o+=Ud:r==="[object Int32Array]"?o+=qd:r==="[object Uint32Array]"?o+=Wd:r==="[object Float32Array]"?o+=Yd:r==="[object Float64Array]"?o+=Gd:t(new Error("Failed to get type for BinaryArray"))),t(o+yi(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=Zp+e.type+"~"+yi(this.result);t(Cn+bi+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function Up(e){if(e.substring(0,wi)!==Cn)return JSON.parse(e);var t=e.substring(Gs),r=e.substring(wi,Gs),n;if(r===bi&&Ys.test(t)){var o=t.match(Ys);n=o[1],t=t.substring(o[0].length)}var i=Jd(t);switch(r){case ia:return i;case bi:return ta([i],{type:n});case jd:return new Int8Array(i);case Hd:return new Uint8Array(i);case Vd:return new Uint8ClampedArray(i);case Zd:return new Int16Array(i);case Ud:return new Uint16Array(i);case qd:return new Int32Array(i);case Wd:return new Uint32Array(i);case Yd:return new Float32Array(i);case Gd:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var aa={serialize:qp,deserialize:Up,stringToBuffer:Jd,bufferToString:yi};function Xd(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Wp(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new A(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){Xd(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=aa,o}function rt(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):Xd(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function Yp(e,t){var r=this;e=He(e);var n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){rt(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=a.serializer.deserialize(d)),o(d)},function(l,c){i(c)})})}).catch(i)});return H(n,t),n}function Gp(e,t){var r=this,n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){rt(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var d=c.rows,u=d.length,h=0;h<u;h++){var m=d.item(h),p=m.value;if(p&&(p=a.serializer.deserialize(p)),p=e(p,m.key,h+1),p!==void 0){o(p);return}}o()},function(l,c){i(c)})})}).catch(i)});return H(n,t),n}function Kd(e,t,r,n){var o=this;e=He(e);var i=new A(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(d,u){u?s(u):c.db.transaction(function(h){rt(h,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,d],function(){a(l)},function(m,p){s(p)})},function(h){if(h.code===h.QUOTA_ERR){if(n>0){a(Kd.apply(o,[e,l,r,n-1]));return}s(h)}})})}).catch(s)});return H(i,r),i}function Jp(e,t,r){return Kd.apply(this,[e,t,r,1])}function Xp(e,t){var r=this;e=He(e);var n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){rt(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return H(n,t),n}function Kp(e){var t=this,r=new A(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){rt(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return H(r,e),r}function Qp(e){var t=this,r=new A(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){rt(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return H(r,e),r}function eg(e,t){var r=this,n=new A(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){rt(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var d=c.rows.length?c.rows.item(0).key:null;o(d)},function(l,c){i(c)})})}).catch(i)});return H(n,t),n}function tg(e){var t=this,r=new A(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){rt(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],d=0;d<l.rows.length;d++)c.push(l.rows.item(d).key);n(c)},function(s,l){o(l)})})}).catch(o)});return H(r,e),r}function rg(e){return new A(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function ng(e,t){t=ra.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new A(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(rg(a))}).then(function(i){return new A(function(a,s){i.db.transaction(function(l){function c(m){return new A(function(p,v){l.executeSql(`DROP TABLE IF EXISTS ${m}`,[],function(){p()},function($,C){v(C)})})}for(var d=[],u=0,h=i.storeNames.length;u<h;u++)d.push(c(i.storeNames[u]));A.all(d).then(function(){a()}).catch(function(m){s(m)})},function(l){s(l)})})}):o=A.reject("Invalid arguments"),H(o,t),o}var og={_driver:"webSQLStorage",_initStorage:Wp,_support:Vp(),iterate:Gp,getItem:Yp,setItem:Jp,removeItem:Xp,clear:Kp,length:Qp,key:eg,keys:tg,dropInstance:ng};function ig(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Qd(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function ag(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function sg(){return!ag()||localStorage.length>0}function lg(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=Qd(e,t._defaultConfig),sg()?(t._dbInfo=r,r.serializer=aa,A.resolve()):A.reject()}function cg(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return H(r,e),r}function dg(e,t){var r=this;e=He(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return H(n,t),n}function ug(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(i)===0){var u=localStorage.getItem(d);if(u&&(u=o.serializer.deserialize(u)),u=e(u,d.substring(a),l++),u!==void 0)return u}}});return H(n,t),n}function hg(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return H(n,t),n}function fg(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return H(r,e),r}function pg(e){var t=this,r=t.keys().then(function(n){return n.length});return H(r,e),r}function gg(e,t){var r=this;e=He(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return H(n,t),n}function mg(e,t,r){var n=this;e=He(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new A(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,d){if(d)s(d);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(u){(u.name==="QuotaExceededError"||u.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(u),s(u)}})})});return H(o,r),o}function vg(e,t){if(t=ra.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new A(function(i){e.storeName?i(Qd(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=A.reject("Invalid arguments"),H(o,t),o}var wg={_driver:"localStorageWrapper",_initStorage:lg,_support:ig(),iterate:ug,getItem:dg,setItem:mg,removeItem:gg,clear:cg,length:pg,key:hg,keys:fg,dropInstance:vg};const bg=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),yg=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(bg(e[n],t))return!0;n++}return!1},e0=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Yt={},Xs={},Lt={INDEXEDDB:Hp,WEBSQL:og,LOCALSTORAGE:wg},$g=[Lt.INDEXEDDB._driver,Lt.WEBSQL._driver,Lt.LOCALSTORAGE._driver],rn=["dropInstance"],$o=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(rn),xg={description:"",driver:$g.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function kg(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function xo(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(e0(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class sa{constructor(t){for(let r in Lt)if(Lt.hasOwnProperty(r)){const n=Lt[r],o=n._driver;this[r]=o,Yt[o]||this.defineDriver(n)}this._defaultConfig=xo({},xg),this._config=xo({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new A(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=$o.concat("_initStorage");for(let h=0,m=c.length;h<m;h++){const p=c[h];if((!yg(rn,p)||t[p])&&typeof t[p]!="function"){a(l);return}}(function(){const h=function(m){return function(){const p=new Error(`Method ${m} is not implemented by the current driver`),v=A.reject(p);return H(v,arguments[arguments.length-1]),v}};for(let m=0,p=rn.length;m<p;m++){const v=rn[m];t[v]||(t[v]=h(v))}})();const u=function(h){Yt[s]&&console.info(`Redefining LocalForage driver: ${s}`),Yt[s]=t,Xs[s]=h,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(u,a):u(!!t._support):u(!0)}catch(s){a(s)}});return At(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Yt[t]?A.resolve(Yt[t]):A.reject(new Error("Driver not found."));return At(o,r,n),o}getSerializer(t){const r=A.resolve(aa);return At(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return At(n,t,t),n}setDriver(t,r,n){const o=this;e0(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(d){return o._extend(d),a(),o._ready=o._initStorage(o._config),o._ready}function l(d){return function(){let u=0;function h(){for(;u<d.length;){let p=d[u];return u++,o._dbInfo=null,o._ready=null,o.getDriver(p).then(s).catch(h)}a();const m=new Error("No available storage method found.");return o._driverSet=A.reject(m),o._driverSet}return h()}}const c=this._driverSet!==null?this._driverSet.catch(()=>A.resolve()):A.resolve();return this._driverSet=c.then(()=>{const d=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(d).then(u=>{o._driver=u._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const d=new Error("No available storage method found.");return o._driverSet=A.reject(d),o._driverSet}),At(this._driverSet,r,n),this._driverSet}supports(t){return!!Xs[t]}_extend(t){xo(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=$o.length;t<r;t++)kg(this,$o[t])}createInstance(t){return new sa(t)}}const Sg=new sa,Cg=Sg;async function t0(){return await caches.open(ea)}async function Tg(e){return await(await t0()).match(e)}const Ks=Cg.createInstance({name:ea});async function Ig(e,t){await(await t0()).put(e,t)}const ko=new Map;async function Eg(e,t){var n;if(!ko.has(e)){const o=Nn();ko.set(e,o.promise);try{const i=new Request(e),a=t?await Tg(i):void 0,s=a??await fetch(i),l=t?await Ks.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{Ks.setItem(e,c)}catch{}const d={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{Ig(i,s)}catch{}o.resolve(d)}catch(i){throw o.reject(i),i}}const r=await ko.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var I;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(I||(I={}));const Ag=[I.Text,I.Json],Mg=[I.Audio];function Qs(e){return Ag.includes(e)}function Pg(e){return Mg.includes(e)}async function _g(e,t){return e.includes("video")?I.Video:e.includes("svg")||t.includes("<svg")?I.Svg:e.includes("html")||t.includes("<html")?I.Html:yp(t)?I.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?I.Text:e.includes("audio")?I.Audio:e.includes("pdf")?I.Pdf:I.Image}function Bg({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===I.Image?dt(f`
            <img src=${r} />
        `):e===I.Video?dt(f`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===I.Text||e===I.Json?dt(f`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===I.Audio?dt(f`
                <audio controls src=${r}></audio>
            `):t}function Lg(e,t){if(t===I.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===I.Html)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function el({imageUrl:e,blockAutoPlay:t,textTransformer:r=o=>o,allowPersistentCache:n}){const o=await Eg(e,n);if(!o.ok)throw new Error(`Failed to load '${e}'`);const i=await _g(o.contentType,o.text),a=r(Lg(o.text,i));return{templateString:Bg({imageText:a,imageType:i,imageUrl:o.blobUrl,blockAutoPlay:t}),imageUrl:o.blobUrl,imageType:i}}class $i extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let Rg=!1;function Ng(){return Rg}var wt;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(wt||(wt={}));const lt=Symbol("any-origin");function r0(e,t){try{return zg(e,t),!0}catch{return!1}}function zg(e,t){if(e===lt)return;if(!e.filter(n=>t.origin===n).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const Dg=Symbol("dangerDisableSecurityWarningsSymbol");function Fg(e,t,r){return r.type===e&&r.direction===t}function Og(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function jg({message:e,verifyChildData:t,iframeElement:r},n,o,i){if(!r)throw new Error("No iframe element was provided.");let a=0,s=!1,l,c,d,u=!1;const h={...e,direction:wt.FromParent,messageId:Oi(32)},m=e.type,p=n===lt?["*"]:n;function v(C){try{if(!r0(n,C))return;const T=C.data;if(T.type==="error")throw new Error(`Child threw an error: ${T.data}`);if(Ng(),T&&u&&Fg(m,wt.FromChild,T)&&T.messageId===h.messageId){let P=!1;try{P=t?t(T.data):!0}catch{}if(!P)return;s=!0,c=C,l=T}}catch(T){d=lu(T)}}globalThis.addEventListener("message",v);const $=Date.now();for(;!s&&Date.now()-$<o&&!d;){if(!r.isConnected)throw new $i;const C=r.contentWindow;C&&(u=!0,p.forEach(T=>{try{C.postMessage(h,{targetOrigin:T})}catch{}})),await hu(i||Og(a)),a++}if(globalThis.removeEventListener("message",v),d)throw d;if(!s)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!c)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:c}}function n0({allowedOrigins:e,timeoutMs:t=1e4,...r}){if(e!==lt&&e.includes("*")&&(e=lt),e===lt&&!r[Dg]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==lt&&!e.length)throw new Error(`No allowed origins were provide to ${n0.name}. At least one must be provided.`);const n=e===lt?["*"]:e;return{async sendMessageToChild(o){if(o.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await jg(o,e,o.timeoutMs||t,o.intervalMs)},listenForParentMessages(o){globalThis.addEventListener("message",async i=>{if(!r0(e,i))return;const a=i.data,s=await o({...a,originalEvent:i}),l={type:a.type,direction:wt.FromChild,data:s,messageId:a.messageId};n.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}var he;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(he||(he={}));var K;(function(e){e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded"})(K||(K={}));const _e=n0({allowedOrigins:[window.location.origin]});async function Hg(e,t){const r=Nn();e.onload=()=>{r.resolve()};try{await _e.sendMessageToChild({message:{type:K.FrameReady},iframeElement:e,timeoutMs:t})}catch{await r.promise,await _e.sendMessageToChild({message:{type:K.FrameReady},iframeElement:e,timeoutMs:t})}}async function Vg({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await Hg(n,s),i&&await _e.sendMessageToChild({message:{type:K.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await _e.sendMessageToChild({message:{type:K.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(d){return!isNaN(d.width)&&!isNaN(d.height)&&!!d.width&&!!d.height}})).data;return await o0({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),await _e.sendMessageToChild({message:{type:K.ImageElementLoaded},iframeElement:n,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function o0({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const d={min:e,max:t,box:a??r},u=Qs(i.imageType)||Pg(i.imageType)?pi(d):Ld(d);c.style.width=qr(Math.floor(u.width)),c.style.height=qr(Math.floor(u.height));const h=pi({min:e,max:t,box:u});u.height<h.height?n.classList.add(he.VerticallyCenter):n.classList.remove(he.VerticallyCenter),n.style.width=qr(h.width),n.style.height=qr(h.height);const m=Rd({min:e,max:t,box:a??r});if(s){if(m>3?await _e.sendMessageToChild({message:{type:K.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await _e.sendMessageToChild({message:{type:K.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await _e.sendMessageToChild({message:{type:K.SizeDetermined,data:u},iframeElement:o,timeoutMs:l}),i.imageType===I.Html){const p=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},v={width:m*p.width,height:m*p.height};await _e.sendMessageToChild({message:{type:K.SendScale,data:v},iframeElement:o,timeoutMs:l})}else if(Qs(i.imageType)){const p=a??r;if(p.height<u.height){const v=u.width/p.width,$=u.height/p.height,C=Math.min(v,$);await _e.sendMessageToChild({message:{type:K.SendScale,data:{height:C,width:C}},iframeElement:o,timeoutMs:l})}}}}const Wr={x:16,y:8};var hl,fl;function Zg(e,t,r,n){const o=Math.random(),i=f(hl||(hl=Vn([`
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
    `])),e.imageType,r??"",I.Svg,I.Html,I.Image,I.Video,I.Text,I.Json,I.Audio,I.Svg,I.Html,I.Image,I.Video,I.Text,I.Json,I.Audio,wt.FromChild,wt.FromChild,K.ImageElementLoaded,K.FrameReady,K.SendScale,K.SendScalingMethod,K.SendSize,K.ForceSize,K.SizeDetermined,I.Json,I.Text,Wr.y,n,I.Audio),a=f(fl||(fl=Vn([`
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
    `])),e.imageType,n?"allow-scrolling":"",I.Image,I.Svg,I.Video,I.Text,I.Json,I.Text,I.Json,I.Text,I.Json,I.Text,I.Json,Wr.y,Wr.x,I.Text,I.Json,Wr.y,o,t??"",i);return Ed(dt(a)).replace(String(o),`
${e.templateString}
`)}const qg=[I.Html,I.Video,I.Audio,I.Pdf],Ug=[I.Html,I.Text,I.Json];function tl({blockInteractionInput:e,imageType:t,allowScrolling:r}){return typeof e=="boolean"?!e:qg.includes(t)?!0:!!(r&&Ug.includes(t))}const Wg=1e4,Yg={imageData:Au({async updateCallback(e){if(e.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const t={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer,allowPersistentCache:!e.blockPersistentCache};let r;try{r=await pp(e.timeoutMs,el(t))}catch{await hp(1e3);try{r=await el(t)}catch(o){throw o}}if(r)return r;throw new Error("no image data result")}}),error:void 0},Ct=Ri()({tagName:ea,stateInitStatic:Yg,events:{settled:W(),imageDataCalculated:W(),errored:W()},styles:g`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${B(he.VerticallyCenter)}) {
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

        :host(.${B(he.HideLoading)}) .loading-wrapper,
        :host(.${B(he.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${B(he.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${B(he.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[So];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??Wg;r({imageData:{serializableTrigger:{...t,timeoutMs:a,updateTriggered(){e.error&&r({error:void 0}),n.classList.remove(he.HideLoading),o(new i.settled(!1)),n.classList.remove(he.VerticallyCenter)}}}});const s=t.min&&t.max?pi({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?Ld({min:s,max:l,box:t.forcedOriginalImageSize}):void 0,d=Wa(e.imageData,"",$=>{if(o(new i.imageDataCalculated($)),$.imageType===I.Pdf)return f`
                        <iframe
                            src=${$.imageUrl}
                            ${Ua(async C=>{try{await o0({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:C,imageData:$,imageDimensions:l??{width:500,height:500},max:l,min:s,sendSizeMessage:!1,timeoutMs:a}),n[So]="",o(new i.settled(!0)),n.classList.add(he.HideLoading)}catch(T){const P=bo(T);if(P instanceof $i)return;console.error(P),r({error:P}),o(new i.errored(P))}})}
                        ></iframe>
                    `;{const C=tl({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:$.imageType})&&!!t.allowScrolling;return f`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${Zg($,t.extraHtml,t.htmlSizeQuerySelector,C)}
                            ${Ua(async T=>{try{const P=await Vg({min:s,max:l,host:n,iframeElement:T,imageData:$,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:a});n[So]=P,o(new i.settled(!0)),n.classList.add(he.HideLoading)}catch(P){const D=bo(P);if(D instanceof $i)return;console.error(D),r({error:D}),o(new i.errored(D))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},$=>{r({error:$}),o(new i.errored(bo($)))}),u=Wa(e.imageData,rl,$=>tl({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:$.imageType})?"":rl,()=>""),h=e.imageData instanceof Error?e.imageData:e.error,m=h?g`
                  max-width: 100%;
                  max-height: 100%;
              `:c?g`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",p=g`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,v=f`
            <div class="frame-constraint" style=${m}>${d}</div>
        `;return f`
            ${Ee(!h,f`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${p}>
                ${Ee(!!h,f`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${h==null?void 0:h.message}</slot>
                        </div>
                    `,v)}
            </div>
            ${u}
        `}}),rl=f`
    <div class="click-cover"></div>
`,So="latest-frame-srcdoc",Fe=ee()({tagName:"toniq-flip-card",events:{flippedChange:W()},styles:g`
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

        ${O2(".card-face",!1)}

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
                class="flip-wrapper ${ve({flipped:e.flipped})}"
                ${E("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),U=ee()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:W()},styles:g`
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
            max-height: ${Pt["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Pt["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Td}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Fe} {
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

        .card-face.front ${Se} {
            margin-top: 24px;
        }

        .card-face.back ${Se} {
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
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var m,p,v;const a=e.mainImageSize||fi,s=Id(a);Do({onElement:n,forCssVar:Pt["main-image-size"],toValue:`${a}px`}),Do({onElement:n,forCssVar:Pt["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(Yi).join(" "),c=f`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],u=f`
            <${S}
                slot="loading"
                ${w(S,{icon:dd})}
            ></${S}>
        `,h=d?f`
                  <div class="big-image-wrapper">
                      <${Ct}
                          ${w(Ct,{imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}
                      >
                          ${u}
                      </${Ct}>
                  </div>
              `:"";return f`
            <${Fe}
                ${w(Fe,{flipped:t.flipped})}
                ${E(Se.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map($=>f`
                                    <div class="pic-wrapper">
                                        <${Ct}
                                            ${w(Ct,{imageUrl:$,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}
                                        >
                                            ${u}
                                        </${Ct}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${Se}
                        ${w(Se,{viewMoreButtonText:l,flipCardButtonText:(m=e.infoParagraphs)!=null&&m.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${E(Se.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Se}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(p=e.infoParagraphs)==null?void 0:p.map($=>f`
                                    <p>${$}</p>
                                `)}
                    </div>
                    <${Se}
                        ${w(Se,{viewMoreButtonText:l,flipCardButtonText:(v=e.infoParagraphs)!=null&&v.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${E(Se.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Se}>
                </div>
            </${Fe}>
        `}});function xi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>xi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function i0({value:e,allowed:t,blocked:r}){const n=t?xi({input:e,matcher:t}):!0,o=r?xi({input:e,matcher:r}):!1;return n&&!o}function nl(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(i0({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var ki=(e=>(e.Default="default",e.Outline="outline",e))(ki||{});const Gt=ee()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:W(),inputBlocked:W()},styles:({hostClasses:e})=>g`
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
                border-radius: ${li};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${k.pagePrimary.backgroundColor};
                border-color: ${k.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${S} {
                color: ${k.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${S} {
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
                border-radius: ${li};
                background-color: ${k.accentTertiary.backgroundColor};
                font: ${q.paragraphFont};
                gap: 4px;
            }

            ${et({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${S} {
                margin-right: 10px;
            }

            input {
                ${tt};
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
                ${mt};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=nl({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?f`
                  <${S} ${w(S,{icon:e.icon})}></${S}>
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
                    ${E("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)i0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:u}=nl({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(u))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Ee(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});async function Gg(e){return navigator.clipboard.writeText(e)}const Jg="…";function Xg(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${Jg}${n}`}function Kg(e){return!(e%1)}function Qg(e){return e.letterCount==null?4:Kg(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const Y=ee()({tagName:"toniq-middle-ellipsis",events:{copied:W()},cssVars:{"toniq-middle-ellipsis-text-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":k.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":k.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>g`
        :host {
            /* 5 frames at 60 fps */
            transition: ${X.interaction};
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
            ${tt};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return f``;const i=e.text,a=Qg(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?Xg(i,a):i,u=c?i:"",h=s?cd:l?ld:void 0,m=h?f`
                  <${S} ${w(S,{icon:h})}></${S}>
              `:"",p=f`
            <span title=${u} class="text-content">
                ${Ee(!!e.copyOnClick,f`
                        <span
                            class=${ve({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${d}
            </span>
        `;return d?s?f`
                    <button
                        tabindex="0"
                        role="link"
                        ${E("click",v=>{var C,T;const $=(T=(C=v.currentTarget)==null?void 0:C.querySelector)==null?void 0:T.call(C,"a");if(!$)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");$.click()})}
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
                `:l?f`
                    <button
                        class="text-wrapper copyable"
                        ${E("click",async()=>{await Gg(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${p} ${m}
                    </button>
                `:f`
                    ${p}
                `:f``}}),ol="...";function em(e,t,r=7,n=5){let o;e=lr(e,1,t),r=lr(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Co(t-o,t):e>o?Co(Math.min(s.start,t-o),Math.min(s.end,t)):Co(1,Math.min(t,o+1));function c(u,h){return l.length+1!==t?h:[u]}const d=l[l.length-1];if(d&&d<t){const u=c(t,[ol,t]);return[...l,...u]}else return l[0]!==1?c(1,[1,ol]).concat(l):l}function Co(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}ee()({tagName:"toniq-pagination",styles:g`
        :host {
            display: flex;
        }

        button {
            ${tt}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${vt};
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
    `,events:{pageChange:W()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?f``:f`
                <button
                    ${E("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${S} ${w(S,{icon:Ui})}></${S}>
                </button>
                ${em(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?f`
                                <div class="page" disabled>${n}</div>
                            `:f`
                                <button
                                    class=${ve({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${E("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${E("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${S} ${w(S,{icon:Wi})}></${S}>
                </button>
            `}});const N=ee()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:W()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Te("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Te("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Te("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Te("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>g`
        :host {
            ${q.boldParagraphFont};
            display: inline-flex;
            transition: color ${X.interaction},
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
            ${tt}
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

        ${et({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${mt};
        }

        .wrapper.disabled::before {
            ${mt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Oi()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return tm(e.entries).map(i=>rm(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function tm(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${N.tagName} was given duplicate entry values.`),Object.values(t)}function rm(e,t,r,n){const o=t===r.value,i=f`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return f`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${ve({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${E("click",()=>{n()})}
        >
            <input
                ${E("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}const L={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Jt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function nm(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${L.lowerLabelWrapper} .${L.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${L.upperLabelWrapper} .${L.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function om(e,t=8){const r=nm(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function To({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function kr(e){return I2(e)&&e.min!==void 0&&e.max!==void 0}function Si(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${L.range}`);return(t==null?void 0:t.clientWidth)??0}function Io(e,t,r){return`${r?R2(e):e} ${t}`}function im({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function am({value:e,double:t,min:r,max:n}){return t?kr(e)?{min:lr(e.min,r,Math.min(e.max,n)),max:lr(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:kr(e)?r:lr(e,r,n)}function sm({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:kr(e)?{min:vo(n,e.min),max:vo(n,e.max)}:vo(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function Eo(e,t,r){return r?t[e]||0:e}function lm(e){return{actualLimits:im(e),actualValue:am(e)}}function cm(e,t){var n,o,i;let r=!1;if(kr(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${L.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${L.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${L.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function a0(e,t){const{actualValue:r,actualLimits:n}=lm({...e}),o=z2(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=sm({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=Si(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const at=16,il=g`
    ${at}px
`,al=g`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${il};
    width: ${il};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${X.interaction};
    ${O(k.accentPrimary)};
`,sl=g`
    transform: scale(1.2);
`;function Qt(e){requestAnimationFrame(()=>{const t=a0(e.instanceInputs,e).elementValue;cm(t,e)&&(e.setAttribute("disabled","true"),Qt(e))})}const _=ee()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:W()},styles:g`
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
            ${vt};
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
        ${et({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

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
            ${al}
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-webkit-slider-thumb {
            ${al}
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-webkit-slider-thumb:hover {
            ${sl}
        }

        /* these selectors fail if combined with a comma */
        .${B(L.slider)}::-moz-range-thumb:hover {
            ${sl}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Qt(e)}),e.addEventListener("keydown",()=>{Qt(e)}),e.addEventListener("keyup",()=>{Qt(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:u,rangeWidth:h}=a0({...e},t);if(Qt(t),kr(d))return m(a,d,u);return v(a,d,u);function m($,C,T){const P={left:It((h-at)*(C.min-T.min)/(T.max-T.min)+at/2),right:It((h-at)*(T.max-C.max)/(T.max-T.min)+at/2)},D=Io($.min,c,l),ue=Io($.max,c,l);requestAnimationFrame(()=>{const pe=om(t);pe!==o.labelOverlap&&i({labelOverlap:pe})});const Re=(T.max-C.max)/(T.max-T.min)>.5,Ze=To({value:C.min,limits:{min:T.min,max:C.max},flip:!0}),ie=To({value:C.max,limits:{min:C.min,max:T.max},flip:!1}),nt=o.labelOverlap&&Re?o.labelOverlap:0,_r=o.labelOverlap&&!Re?o.labelOverlap:0;return f`
                <div
                    class="range"
                    ${pr(()=>{i({rangeWidth:Si(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${P.left}; right:${P.right}"
                    ></div>
                    <span
                        class="${L.labelOuterWrapper} ${L.lowerLabelWrapper}"
                        style="left: ${P.left}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-left: ${mo(Ze)}"
                        >
                            <span
                                class="${L.labelPixelMarginWrapper}"
                                style="margin-right: ${It(_r)}"
                                ${Et(Jt.lowerLabel)}
                            >
                                ${D}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${L.labelOuterWrapper} ${L.upperLabelWrapper} ${L.rightAlignedLabelWrapper}"
                        style="right: ${P.right}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-right: ${mo(ie)}"
                        >
                            <span
                                class="${L.labelPixelMarginWrapper}"
                                style="margin-left: ${It(nt)}"
                                ${Et(Jt.upperLabel)}
                            >
                                ${ue}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${L.lowerSlider} ${L.slider}"
                            .min=${T.min}
                            .max=${T.max}
                            .value=${C.min}
                            ${E("input",pe=>{const bt=pe.target,Ot={...$,min:Eo(Number(bt.value),s,l)};p(Ot)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${L.upperSlider} ${L.slider}"
                            step=${e.step}
                            .min=${T.min}
                            .max=${T.max}
                            .value=${C.max}
                            ${Et(Jt.slider)}
                            ${E("input",pe=>{const bt=pe.target,Ot={...$,max:Eo(Number(bt.value),s,l)};p(Ot)})}
                        />
                    </div>
                </div>
            `}function p($){i({internalValue:$}),e.disabled||n(new r.valueChange($))}function v($,C,T){const P=It((h-at)*(T.max-C)/(T.max-T.min)+at/2),D=Io($,c,l),ue=To({value:C,limits:T,flip:!1});return f`
                <div
                    class="range"
                    ${pr(()=>{i({rangeWidth:Si(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${P}"></div>
                    <span
                        class="${L.labelOuterWrapper} ${L.rightAlignedLabelWrapper}"
                        style="right: ${P}"
                    >
                        <span
                            class="${L.labelPercentMarginWrapper}"
                            style="margin-right: ${mo(ue)}"
                            ${Et(Jt.label)}
                        >
                            ${D}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${L.slider}"
                        step=${e.step}
                        .min=${T.min}
                        .max=${T.max}
                        .value=${C}
                        ${Et(Jt.slider)}
                        ${E("input",Re=>{const Ze=Re.target,ie=Eo(Number(Ze.value),s,l);p(ie)})}
                    />
                </div>
            `}}});var s0=(e=>(e.Default="default",e.TextOnly="text-only",e))(s0||{});const Yr=ee()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>g`
        :host {
            ${q.boldParagraphFont};
            ${vt};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${tt};
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
            transition: color ${X.interaction},
                background-color ${X.interaction};
        }

        ${et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${mt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${S}
                      class="icon-template"
                      ${w(S,{icon:e.icon})}
                  ></${S}>
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
        `}}),cr=Xf({tagName:"toniq-tooltip",styles:g`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${k.accentPrimary.backgroundColor};
            ${yn.menuShadow};
            background-color: ${k.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return f`
            <slot></slot>
        `}}),er=ee()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>g`
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
            transition: visibility ${X.pretty} ${X.pretty},
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return f`
            <div
                class="slot-wrapper"
                ${E("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${cr}>${e.tooltipContent}</${cr}>
            </div>
        `}}),l0=Z({title:"Data",parent:void 0}),Rt=ee()({tagName:"toniq-icon-book-viewer",styles:g`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${k.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return f`
            <${S} ${w(S,{icon:e.icon})}></${S}>
        `}}),Dn=Object.values(st).reduce((e,t)=>(t.forEach(r=>{if(r.iconName in e)throw new Error(`Icon name duplicate: '${r.iconName}'`);e[r.iconName]=r}),e),{}),la=Object.keys(Dn).sort(),dm=Z({title:"Social Urls",parent:l0,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return f`
                        <${Rt}
                            ${w(Rt,{icon:n})}
                        ></${Rt}>
                    `}})}Object.entries(Sd).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),te=Z({title:"Elements",parent:void 0}),um=Z({parent:te,title:F.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:xr.Secondary}},{name:"Outline",inputs:{buttonStyle:xr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:g`
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
                        <${F}
                            ${w(F,{text:"Button",...r.inputs})}
                        ></${F}>
                        <${F}
                            ${w(F,{icon:en,...r.inputs})}
                        ></${F}>
                        <${F}
                            class="icon-toggle"
                            ${w(F,n.showIcon?{icon:en,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                        ></${F}>
                        <${F}
                            ${w(F,{text:"Button",icon:en,...r.inputs})}
                        ></${F}>
                        <${F}
                            ${w(F,{...r.inputs})}
                        >
                            <span>HTML Child</span>
                        </${F}>
                        <${F}
                            style="height: 100px; width: 200px;"
                            ${w(F,{text:"bigger",...r.inputs})}
                        ></${F}>
                    `}})})}}),ll=g`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${Q} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,hm=Z({parent:te,title:Q.tagName,descriptionParagraphs:["Carousel that uses native browser API.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:ll,renderCallback(){return f`
                    <${Q}
                        ${w(Q,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:st["core-24"].map(t=>{const r=g`
                                    padding: 24px;
                                    border: 1px solid ${k.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return f`
                                    <${S}
                                        style=${r}
                                        ${w(S,{icon:t})}
                                    ></${S}>
                                `})})}
                    ></${Q}>
                    <${Q}
                        ${w(Q,{enableAutomaticCycling:!0,templates:st["core-24"].map(t=>{const r=g`
                                    padding: 100px 24px;
                                    border: 1px solid ${k.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return f`
                                    <${S}
                                        style=${r}
                                        ${w(S,{icon:t})}
                                    ></${S}>
                                `})})}
                    ></${Q}>
                    <${Q}
                        ${w(Q,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:st["core-24"].map(t=>{const r=Ku({min:0,max:150}),n=g`
                                    padding: 100px ${r}px;
                                    border: 1px solid ${k.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return f`
                                    <${S}
                                        style=${n}
                                        ${w(S,{icon:t})}
                                    ></${S}>
                                `})})}
                    ></${Q}>
                `}}),e({title:"banner style",styles:ll,renderCallback(){return f`
                    <${Q}
                        ${w(Q,{enableAutomaticCycling:!0,style:ci.BannerStyle,templates:st["core-24"].map(t=>{const r=g`
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
                                    <${S}
                                        style=${r}
                                        ${w(S,{icon:t})}
                                    ></${S}>
                                `})})}
                    ></${Q}>
                    <${Q}
                        class=${Q.hostClasses["toniq-carousel-banner-style"]}
                        ${w(Q,{enableAutomaticCycling:!0,style:ci.BannerStyle,templates:[st["core-24"][0]].map(t=>{const r=g`
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
                                    <${S}
                                        style=${r}
                                        ${w(S,{icon:t})}
                                    ></${S}>
                                `})})}
                    ></${Q}>
                `}})}});function fm(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:R.Color,initValue:""}]);return Object.fromEntries(t)}function pm(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(Yi);return B(t.join(`
`))}const gm=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Ao=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],mm=Z({parent:te,title:Me.tagName,controls:{Text:{controlType:R.Text,initValue:"Text"},...fm(Me)},elementExamplesCallback({defineExample:e}){gm.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Ao.map(r=>!!r.inputs.checked),extraEntryStatuses:Ao.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:g`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Ao.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var u;return f`
                                    <${Me}
                                        ${w(Me,{...t.inputs,...si(i.inputs,["checked"]),checked:!!((u=r.extraEntryStatuses[a])!=null&&u[d]),text:c})}
                                        ${E(Me.events.checkedChange,()=>{const h=[...r.extraEntryStatuses];h[a][d]=!h[a][d],n({extraEntryStatuses:h})})}
                                    ></${Me}>
                                `}),l=pm(o);return f`
                            <div class="checkbox-group" style=${l}>
                                <${Me}
                                    ${w(Me,{...t.inputs,...si(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${E(Me.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${Me}>
                                ${s}
                            </div>
                        `})}})})}}),vm=Z({parent:te,title:Zr.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:sr}},{inputs:{icon:sr}},{inputs:{},template:f`
                    HTML child
                `},{inputs:{icon:sr},template:f`
                    HTML child
                `},{customStyle:g`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:ui.Default}},{title:"secondary style",inputs:{style:ui.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>f`
                        <${Zr}
                            style=${o.customStyle}
                            ${w(Zr,{...n.inputs,...o.inputs})}
                        >${Ee(!!o.template,o.template)}</${Zr}>
                    `)}})})}}),Gr=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],wm=[{title:"default"},{title:"transparent background",customStyle:g`
            ${Xi.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],cl=[{},{customStyle:g`
            width: 500px;
            height: 100px;
        `},{customStyle:g`
            max-height: 30px;
            min-height: 30px;
        `}],bm=Z({title:Wt.tagName,parent:te,controls:{Selected:{controlType:R.Dropdown,initValue:Gr[0].label,options:Gr.map(e=>e.label)},Direction:{controlType:R.Dropdown,initValue:"Down",options:E2(hi)},Icon:{controlType:R.Dropdown,initValue:Qc.iconName,options:["None",...la]},Prefix:{controlType:R.Text,initValue:"Sort by: "},"Force open":{controlType:R.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){wm.forEach(t=>{e({title:t.title,stateInitStatic:{selected:cl.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:g`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return cl.map((i,a)=>{const s=g`
                            ${t.customStyle??g``};
                            ${i.customStyle??g``};
                        `;return f`
                            <${Wt}
                                style=${s}
                                ${w(Wt,{...t.inputs,...i.inputs,options:Gr,value:r.selected[a]??Gr.find(l=>l.label===o.Selected),icon:Dn[o.Icon],selectedLabelPrefix:o.Prefix,direction:hi[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                ${E(Wt.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Wt}>
                        `})}})})}}),dl="/toniq-labs-design-system";function ym(...e){const r=[globalThis.location.pathname.startsWith(dl)?dl:"",...e].filter(Yi);return M2(...r)}const Mo=Array(30).fill(ym("/toniq-labs-logo.png")),Ci=["Hello there.","There is stuff here."],Jr=Ci.concat(Array(30).fill(Ci)),$m=Z({title:U.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${U}
                        ${w(U,{infoParagraphs:Jr,imageUrls:Mo,socialUrls:Jf,title:"Featured Stuff",viewButtonTitle:"Stuff"})}
                    ></${U}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${U}
                        ${w(U,{imageUrls:Mo,title:"Featured Stuff",infoParagraphs:void 0})}
                    ></${U}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${U}
                        ${w(U,{imageUrls:[],title:"Featured Stuff",infoParagraphs:Jr,viewMoreUrl:"https://toniqlabs.com"})}
                        ${E(U.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${U}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${U}
                        ${w(U,{imageUrls:[],title:"Featured Stuff",infoParagraphs:Jr})}
                    ></${U}>
                `}}),e({title:"with custom height",styles:g`
                ${U} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${U}
                        ${w(U,{imageUrls:[],title:"Featured Stuff",infoParagraphs:Jr})}
                    ></${U}>
                `}}),e({title:"smaller",styles:g`
                ${U} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${U}
                        ${w(U,{imageUrls:Mo,infoParagraphs:Ci,title:"Featured Stuff"})}
                    ></${U}>
                `}})}}),xm=Z({title:Fe.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:g`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return f`
                    <${Fe}
                        ${w(Fe,{flipped:t.flipped})}
                        ${E(Fe.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${Fe}>
                `}})}}),km=Z({parent:te,title:se.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return f`
                        <${se}
                            ${w(se,{newTab:!0,url:"https://toniqlabs.com",...r.inputs})}
                        >
                            Toniq Labs Link
                        </${se}>
                    `}})})}}),Sm=Z({title:S.tagName,parent:te,controls:{"CSS color":{controlType:R.Color,initValue:""},[Bt.color]:{controlType:R.Color,initValue:""},[Bt.strokeColor]:{controlType:R.Color,initValue:""},[Bt.fillColor]:{controlType:R.Color,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{icon:gd},{icon:pd},{icon:fd},{icon:ad},{icon:sr},{icon:void 0}];e({title:"sizes",styles:g`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){const n=Object.entries(r).filter(([,o])=>!!o).map(([o,i])=>(o.toLowerCase().includes("css")&&(o="color"),`${o}: ${i};`)).join(`
`);return t.map(o=>f`
                        <${S}
                            style=${n}
                            ${w(S,{icon:o.icon})}
                        ></${S}>
                    `)}})}}),Cm=Z({title:Gt.tagName,parent:te,controls:{"External value":{controlType:R.Text,initValue:""},Placeholder:{controlType:R.Text,initValue:"placeholder"},Icon:{controlType:R.Dropdown,initValue:hd.iconName,options:["None",...la]},Suffix:{controlType:R.Text,initValue:"ICP"},"No browser helps":{controlType:R.Checkbox,initValue:!1},"Blocked characters":{controlType:R.Text,initValue:""},"Exclusive characters":{controlType:R.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:g`
                    height: 75px;
                    width: 300px;
                `},{customStyles:g`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:ki.Default}},{title:"outline",inputs:{style:ki.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:g`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),f`
                            <${Gt}
                                style=${s.customStyles}
                                ${w(Gt,{...n.inputs,value:o["External value"]||i.value,icon:Dn[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                ${E(Gt.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Gt}>
                        `))}})})}}),Tm=Z({title:Y.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return f`
                    <${Y}
                        ${w(Y,{text:"Long string instead of text"})}
                    ></${Y}>
                `}}),e({title:"Short text",renderCallback(){return f`
                    <${Y}
                        ${w(Y,{text:"Short text"})}
                    ></${Y}>
                `}}),e({title:"External Link",renderCallback(){return f`
                    <${Y}
                        ${w(Y,{text:"Long text with link",externalLink:"https://toniqlabs.com"})}
                    ></${Y}>
                `}}),e({title:"Copyable",renderCallback(){return f`
                    <${Y}
                        ${w(Y,{text:"Long text that you can copy",copyOnClick:!0})}
                    ></${Y}>
                `}}),e({title:"Custom CSS vars",styles:g`
                ${Y} {
                    ${Y.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${Y.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${Y.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${Y.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return f`
                    <${Y}
                        ${w(Y,{text:"long text with custom colors",copyOnClick:!0})}
                    ></${Y}>
                `}})}}),Xt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],ge={basic:Xt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Xt.slice(1)],disabled:[{...Xt[0],disabled:!0},...Xt.slice(1)],noLabels:$2(Xt,e=>({...e,label:void 0}))},Im=Z({title:N.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:ge.basic[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${N}
                        ${w(N,{entries:ge.basic,value:t.selectedValue})}
                        ${E(N.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${N}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:ge.basic[0].value},styles:g`
                ${N} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N}
                        ${w(N,{entries:ge.basic,value:t.selectedValue})}
                        ${E(N.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${N}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:ge.longText[0].value},styles:g`
                ${N} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N}
                        ${w(N,{entries:ge.longText,value:t.selectedValue})}
                        ${E(N.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${N}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:ge.noLabels[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${N}
                        ${w(N,{entries:ge.noLabels,value:t.selectedValue})}
                        ${E(N.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${N}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:ge.disabled[1].value},renderCallback({state:t,updateState:r}){return f`
                    <${N}
                        ${w(N,{entries:ge.disabled,value:t.selectedValue})}
                        ${E(N.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${N}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:ge.basic[0].value},styles:g`
                ${N} {
                    ${N.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${N.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${N.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${N.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N}
                        ${w(N,{entries:ge.basic,value:t.selectedValue})}
                        ${E(N.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${N}>
                `}})}}),ze=g`
    ${_} {
        width: 300px;
    }
`,Po={min:10,max:50},Em=Z({title:_.tagName,parent:te,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,...Po})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{double:!0,value:t.value,min:0,max:100})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,...Po,suffix:"ICP"})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:g`
                ${ze}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,min:-100,max:100})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:g`
                ${ze}

                ${_} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{value:t.value,...Po})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${_}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:g`
                ${ze}

                ${_} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${_}
                        ${w(_,{double:!0,value:t.value,min:0,max:100})}
                        ${E(_.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${_}>
                `}})}});Z({title:"Toggle Button",parent:te});const Am=[{title:"default",inputs:{}},{title:"text only",inputs:{style:s0.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],ul=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],Mm=Z({title:Yr.tagName,parent:te,controls:{Text:{controlType:R.Text,initValue:"Toggle Button"},Icon:{controlType:R.Dropdown,initValue:ud.iconName,options:["None",...la]}},elementExamplesCallback({defineExample:e}){Am.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:ul.map(r=>!!r.inputs.toggled)},styles:g`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return ul.map((i,a)=>f`
                            <${Yr}
                                ${w(Yr,{...t.inputs,toggled:r.buttonStates[a],icon:Dn[o.Icon],text:o.Text,...si(i.inputs,["toggled"])})}
                                ${E("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Yr}>
                        `)}})})}}),ca=Z({title:"Tooltip",parent:te}),Pm=Z({parent:ca,title:er.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:g`
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
                        <${er}
                            ${w(er,{tooltipContent:n,forceShow:o})}
                        >
                            <div>Hover me!</div>
                        </${er}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:f`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),_m=Z({parent:ca,title:cr.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${er.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return f`
                    <${cr}>This is a tooltip.</${cr}>
                `}})}}),Bm=[ca,Pm,_m],c0=Z({title:"Icons",parent:void 0}),Lm=Object.entries(st).map(([e,t])=>Z({title:e,parent:c0,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.iconName,renderCallback(){return f`
                                <${Rt}
                                    ${w(Rt,{icon:n})}
                                ></${Rt}>
                            `}}))}}));function d0(e){const t=Rm(e),r=$r(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Le(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function Rm(e){typeof e!="string"&&(e=String(e));const n=`{"${k2(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const da=Z({title:"Styles",parent:void 0}),Nm=g`
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
`;function zm(e,t,r){const n=d0(O(r));return e({title:t,styles:Nm,renderCallback(){return f`
                <div class="color-example" style=${O(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>f`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const Dm=Z({title:"Colors",parent:da,elementExamplesCallback({defineExample:e}){Le(k).map(t=>zm(e,t,k[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Fm=g`
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
`;function Om(e,t,r){const n=d0(r);return e({title:t,styles:Fm,renderCallback(){return f`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Le(n).map(o=>{const i=n[o];return f`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const jm=Z({title:"Fonts",parent:da,elementExamplesCallback({defineExample:e}){Le(q).map(t=>{const r=q[t];return Om(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),Hm=[te,c0,da,l0],Vm=[...Lm,um,hm,mm,vm,bm,$m,xm,km,Sm,Cm,Tm,Im,Em,Mm,...Bm,dm,Dm,jm].sort((e,t)=>e.title.localeCompare(t.title)),Zm=[...Hm,...Vm];Mn({tagName:"toniq-design-system-app",styles:g`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Vr} {
            height: 100%;
            width: 100%;
            ${q.paragraphFont};
        }
    `,renderCallback(){return f`
            <${Vr}
                ${w(Vr,{internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:Zm,themeColor:"#00D093",everythingTitle:"Design System"})}
            ></${Vr}>
        `}});
