var Ta=Object.defineProperty;var Pa=(e,t,r)=>t in e?Ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Tr=(e,t,r)=>(Pa(e,typeof t!="symbol"?t+"":t,r),r),Pr=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var Je=(e,t,r)=>(Pr(e,t,"read from private field"),r?r.call(e):t.get(e)),ht=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Br=(e,t,r,n)=>(Pr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var qt=(e,t,r)=>(Pr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var Me;(function(e){e.Chapter="chapter",e.Page="page",e.Root="root"})(Me||(Me={}));function K(e){if(!e.title)throw new Error("Cannot have an element-book chapter with an empty title.");return{type:Me.Chapter,...e}}function Ba(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const La=["january","february","march","april","may","june","july","august","september","october","november","december"];La.map(e=>e.slice(0,3));function jn(e){return e?e instanceof Error?e.message:String(e):""}function _a(e){return e instanceof Error?e:new Error(jn(e))}function io(e){return!!e&&typeof e=="object"}const ao="Failed to compare objects using JSON.stringify";function lo(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Zn(e,t){try{return e===t?!0:io(e)&&io(t)?lo(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Zn(e[n],t[n])):!1:lo(e,t)}catch(r){const n=_a(r);throw n.message.startsWith(ao)||(n.message=`${ao}: ${n.message}`),n}}const Ra=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Dn(e,t){return e?Ra.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Rs(e,t){return e&&t.every(r=>Dn(e,r))}function dn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Na(e){return Array.isArray(e)?"array":typeof e}function ja(e,t){return Na(e)===t}function Za(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Da(e){return dn(e).filter(t=>isNaN(Number(t)))}function Oa(e){return Da(e).map(r=>e[r])}function za(e,t){return Oa(t).includes(e)}function Ha(e,t){let r=!1;const n=dn(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(dn(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function Va(e,t){try{return Fa(e,t),!0}catch{return!1}}function Fa(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function qa(e,t){return Dn(e,"type")&&e.type===t}const ar="isElementBookEntryTreeNode";function Wa(e,t){return!!(Rs(e,[ar,"entry"])&&e[ar]&&e.entry.type===t)}function Ua(e){return{[ar]:!0,entry:{type:Me.Root,title:e||"Everything",parent:void 0},breadcrumb:"",children:{}}}function un(e){return Ba(e).toLowerCase().replaceAll(/\s/g,"-")}function Ga(e,t){const r=Ua(t);return e.forEach(n=>{const o=Ya(n,r),s=un(n.title);if(s in o.children)throw new Error(`Cannot create duplicate entry '${s}' in parent '${o.breadcrumb}'.`);const i={[ar]:!0,children:{},breadcrumb:s,entry:n};o.children[s]=i}),r}function Ya(e,t){return Nt(e).reverse().reduce((o,s)=>{const i=o.children[s];if(!i)throw new Error(`Failed to find parent ElementBookEntry by name of '${s}' in entry '${o.entry.title}'`);return i},t)}function Nt(e,t){const r=un(e.title);return e.parent?[un(e.parent.title),...Nt(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function hn(e,t){if(!Va(e,1))return t;const r=e[0],n=t.children[r];if(n)return hn(e.slice(1),n)}function ee(e){if(!e.title)throw new Error("Cannot have an element-book page with an empty title.");const t={type:Me.Page,...e},r=Nt(t,!0),n=new Set;return e.examples.forEach(o=>{const s=`Failed to define example '${r.concat(o.title).join(" > ")}'`;if(n.has(o.title))throw new Error(`${s}: example title '${o.title}' is already being used.`);if(!o.title)throw new Error(`${s}: example title is missing or empty.`);n.add(o.title)}),t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t});let Ge=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lr;const lr=window,at=lr.trustedTypes,co=at?at.createPolicy("lit-html",{createHTML:e=>e}):void 0,cr="$lit$",Ce=`lit$${(Math.random()+"").slice(9)}$`,On="?"+Ce,Xa=`<${On}>`,lt=document,St=()=>lt.createComment(""),At=e=>e===null||typeof e!="object"&&typeof e!="function",Ns=Array.isArray,js=e=>Ns(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",_r=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uo=/-->/g,ho=/>/g,Oe=RegExp(`>|${_r}(?:([^\\s"'>=/]+)(${_r}*=${_r}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),po=/'/g,fo=/"/g,Zs=/^(?:script|style|textarea|title)$/i,Ja=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Qa=Ja(1),he=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),go=new WeakMap,st=lt.createTreeWalker(lt,129,null,!1),Ds=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",i=pt;for(let l=0;l<r;l++){const c=e[l];let u,d,p=-1,w=0;for(;w<c.length&&(i.lastIndex=w,d=i.exec(c),d!==null);)w=i.lastIndex,i===pt?d[1]==="!--"?i=uo:d[1]!==void 0?i=ho:d[2]!==void 0?(Zs.test(d[2])&&(o=RegExp("</"+d[2],"g")),i=Oe):d[3]!==void 0&&(i=Oe):i===Oe?d[0]===">"?(i=o??pt,p=-1):d[1]===void 0?p=-2:(p=i.lastIndex-d[2].length,u=d[1],i=d[3]===void 0?Oe:d[3]==='"'?fo:po):i===fo||i===po?i=Oe:i===uo||i===ho?i=pt:(i=Oe,o=void 0);const v=i===Oe&&e[l+1].startsWith("/>")?" ":"";s+=i===pt?c+Xa:p>=0?(n.push(u),c.slice(0,p)+cr+c.slice(p)+Ce+v):c+Ce+(p===-2?(n.push(void 0),l):v)}const a=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[co!==void 0?co.createHTML(a):a,n]};class It{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[c,u]=Ds(t,r);if(this.el=It.createElement(c,n),st.currentNode=this.el.content,r===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(o=st.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const p of o.getAttributeNames())if(p.endsWith(cr)||p.startsWith(Ce)){const w=u[i++];if(d.push(p),w!==void 0){const v=o.getAttribute(w.toLowerCase()+cr).split(Ce),k=/([.?@])?(.*)/.exec(w);l.push({type:1,index:s,name:k[2],strings:v,ctor:k[1]==="."?zs:k[1]==="?"?Hs:k[1]==="@"?Vs:Zt})}else l.push({type:6,index:s})}for(const p of d)o.removeAttribute(p)}if(Zs.test(o.tagName)){const d=o.textContent.split(Ce),p=d.length-1;if(p>0){o.textContent=at?at.emptyScript:"";for(let w=0;w<p;w++)o.append(d[w],St()),st.nextNode(),l.push({type:2,index:++s});o.append(d[p],St())}}}else if(o.nodeType===8)if(o.data===On)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(Ce,d+1))!==-1;)l.push({type:7,index:s}),d+=Ce.length-1}s++}}static createElement(t,r){const n=lt.createElement("template");return n.innerHTML=t,n}}function Fe(e,t,r=e,n){var o,s,i,a;if(t===he)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=At(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Fe(e,l._$AS(e,t.values),l,n)),t}let Os=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:lt).importNode(n,!0);st.currentNode=s;let i=st.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new ct(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new Fs(i,this,t)),this._$AV.push(u),c=o[++l]}a!==(c==null?void 0:c.index)&&(i=st.nextNode(),a++)}return s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class ct{constructor(t,r,n,o){var s;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Fe(this,t,r),At(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):js(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&At(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=It.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const i=new Os(s,this),a=i.u(this.options);i.v(n),this.$(a),this._$AH=i}}_$AC(t){let r=go.get(t.strings);return r===void 0&&go.set(t.strings,r=new It(t)),r}T(t){Ns(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new ct(this.k(St()),this.k(St()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Zt{constructor(t,r,n,o,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)t=Fe(this,t,r,0),i=!At(t)||t!==this._$AH&&t!==he,i&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Fe(this,a[n+l],r,l),c===he&&(c=this._$AH[l]),i||(i=!At(c)||c!==this._$AH[l]),c===H?t=H:t!==H&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zs extends Zt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const Ka=at?at.emptyScript:"";class Hs extends Zt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,Ka):this.element.removeAttribute(this.name)}}class Vs extends Zt{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=Fe(this,t,r,0))!==null&&n!==void 0?n:H)===he)return;const o=this._$AH,s=t===H&&o!==H||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==H&&(o===H||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Fs{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Fe(this,t)}}const el={O:cr,P:Ce,A:On,C:1,M:Ds,L:Os,D:js,R:Fe,I:ct,V:Zt,H:Hs,N:Vs,U:zs,F:Fs},mo=lr.litHtmlPolyfillSupport;mo==null||mo(It,ct),((Lr=lr.litHtmlVersions)!==null&&Lr!==void 0?Lr:lr.litHtmlVersions=[]).push("2.7.3");const tl=(e,t,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=s._$litPart$;if(i===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=i=new ct(t.insertBefore(St(),a),a,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:rl}=el,vo=()=>document.createComment(""),ft=(e,t,r)=>{var n;const o=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(vo(),s),a=o.insertBefore(vo(),s);r=new rl(i,a,e,e.options)}else{const i=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(i!==s||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,s),c=u}}}return r},ze=(e,t,r=e)=>(e._$AI(t,r),e),nl={},ol=(e,t=nl)=>e._$AH=t,sl=e=>e._$AH,Rr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=Ne(class extends Ge{constructor(e){var t;if(super(e),e.type!==jt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(t)}const o=e.element.classList;this.it.forEach(s=>{s in t||(o.remove(s),this.it.delete(s))});for(const s in t){const i=!!t[s];i===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(i?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return he}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},il=Ne(class extends Ge{constructor(e){if(super(e),e.type!==jt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],s=[];let i=0;for(const a of e)o[i]=n?n(a,i):i,s[i]=r(a,i),i++;return{values:s,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const s=sl(e),{values:i,keys:a}=this.dt(t,r,n);if(!Array.isArray(s))return this.ht=a,i;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,p=0,w=s.length-1,v=0,k=i.length-1;for(;p<=w&&v<=k;)if(s[p]===null)p++;else if(s[w]===null)w--;else if(l[p]===a[v])c[v]=ze(s[p],i[v]),p++,v++;else if(l[w]===a[k])c[k]=ze(s[w],i[k]),w--,k--;else if(l[p]===a[k])c[k]=ze(s[p],i[k]),ft(e,c[k+1],s[p]),p++,k--;else if(l[w]===a[v])c[v]=ze(s[w],i[v]),ft(e,s[p],s[w]),w--,v++;else if(u===void 0&&(u=wo(a,v,k),d=wo(l,p,w)),u.has(l[p]))if(u.has(l[w])){const M=d.get(a[v]),I=M!==void 0?s[M]:null;if(I===null){const E=ft(e,s[p]);ze(E,i[v]),c[v]=E}else c[v]=ze(I,i[v]),ft(e,s[p],I),s[M]=null;v++}else Rr(s[w]),w--;else Rr(s[p]),p++;for(;v<=k;){const M=ft(e,c[k+1]);ze(M,i[v]),c[v++]=M}for(;p<=w;){const M=s[p++];M!==null&&Rr(M)}return this.ht=a,ol(e,c),he}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dr=class extends Ge{constructor(t){if(super(t),this.et=H,t.type!==jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||t==null)return this.ft=void 0,this.et=t;if(t===he)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};dr.directiveName="unsafeHTML",dr.resultType=1;const al=Ne(dr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pn=class extends dr{};pn.directiveName="unsafeSVG",pn.resultType=2;const ll=Ne(pn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function cl(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=window,zn=or.ShadowRoot&&(or.ShadyCSS===void 0||or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hn=Symbol(),bo=new WeakMap;let qs=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(zn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=bo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&bo.set(r,t))}return t}toString(){return this.cssText}};const L=e=>new qs(typeof e=="string"?e:e+"",void 0,Hn),$t=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new qs(r,e,Hn)},dl=(e,t)=>{zn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=or.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},$o=zn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return L(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nr;const ur=window,yo=ur.trustedTypes,ul=yo?yo.emptyScript:"",xo=ur.reactiveElementPolyfillSupport,fn={toAttribute(e,t){switch(t){case Boolean:e=e?ul:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ws=(e,t)=>t!==e&&(t==t||e==e),jr={attribute:!0,type:String,converter:fn,reflect:!1,hasChanged:Ws};let tt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=jr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const s=this[t];this[r]=o,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||jr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift($o(o))}else t!==void 0&&r.push($o(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return dl(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=jr){var o;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:fn).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:fn;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ws)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};tt.finalized=!0,tt.elementProperties=new Map,tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},xo==null||xo({ReactiveElement:tt}),((Nr=ur.reactiveElementVersions)!==null&&Nr!==void 0?Nr:ur.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zr,Dr;class yt extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return he}}yt.finalized=!0,yt._$litElement$=!0,(Zr=globalThis.litElementHydrateSupport)===null||Zr===void 0||Zr.call(globalThis,{LitElement:yt});const ko=globalThis.litElementPolyfillSupport;ko==null||ko({LitElement:yt});((Dr=globalThis.litElementVersions)!==null&&Dr!==void 0?Dr:globalThis.litElementVersions=[]).push("3.3.2");var hl=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,s){function i(I){if(I!==void 0&&typeof I!="function")throw new TypeError("Function expected");return I}for(var a=n.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,p=!1,w=r.length-1;w>=0;w--){var v={};for(var k in n)v[k]=k==="access"?{}:n[k];for(var k in n.access)v.access[k]=n.access[k];v.addInitializer=function(I){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(i(I||null))};var M=(0,r[w])(a==="accessor"?{get:u.get,set:u.set}:u[l],v);if(a==="accessor"){if(M===void 0)continue;if(M===null||typeof M!="object")throw new TypeError("Object expected");(d=i(M.get))&&(u.get=d),(d=i(M.set))&&(u.set=d),(d=i(M.init))&&o.push(d)}else(d=i(M))&&(a==="field"?o.push(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),p=!0},pl=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},fl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function gl(){function e(t,r){return t}return e}let Us=(()=>{let e=[gl()],t,r=[],n;return n=class extends yt{},fl(n,"DeclarativeElement"),hl(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,pl(n,r),n})();function ml(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const vl={capitalizeFirstLetter:!1};function wl(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function bl(e,t){return t.capitalizeFirstLetter?wl(e):e}function $l(e,t=vl){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return bl(n,t)}function Co(e){return e!==e.toUpperCase()}function yl(e){return e.split("").reduce((r,n,o,s)=>{const i=o>0?s[o-1]:"",a=o<s.length-1?s[o+1]:"",l=Co(i)||Co(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const xl=["january","february","march","april","may","june","july","august","september","october","november","december"];xl.map(e=>e.slice(0,3));function kl(e){return e?e instanceof Error?e.message:String(e):""}function Cl(e){return e instanceof Error?e:new Error(kl(e))}const Ml=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function $r(e,t){return e?Ml.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Sl(e,t){return e&&t.every(r=>$r(e,r))}function qe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Et(e,t){let r=!1;const n=qe(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(qe(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Al=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Gs(e){return(t,r)=>r!==void 0?((n,o,s)=>{o.constructor.createProperty(s,n)})(e,t,r):Al(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Or;((Or=window.HTMLSlotElement)===null||Or===void 0?void 0:Or.prototype.assignedElements)!=null;const gn=Symbol("this-is-an-element-vir-declarative-element"),Vn=Symbol("key for ignoring inputs not having been set yet"),Il={[Vn]:!0};function Ys(e,t){const r=e.instanceState;qe(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);Gs()(e,n),"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&qe(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Xs(e)}function Xs(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Js(e,t){return mn(e,t),e.element}function mn(e,t){if(e.type!==jt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function g(e,t){return t?Mo(e,t):Mo(void 0,e)}const Mo=Ne(class extends Ge{constructor(e){super(e),this.element=Js(e,"assign")}render(e,t){return El(e,this.element,t),he}});function El(e,t,r){Ys(t,r)}function Qs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Us?!0:Qs(r)}function Ks(e,t){return`${e}-${yl(t)}`}function Tl(e,t){return t?Et(t,r=>L(`--${Ks(e,String(r))}`)):{}}function Pl(e,t){return e?Et(e,(r,n)=>{const o=t[r];return L(`var(${o}, ${n})`)}):{}}class Bl extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Fn(){return e=>{var t;return t=class extends Bl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Pe(){return Fn()}function Ll(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Fn()(r);return t[r]=n,t},{}):{}}const So="_is_element_vir_observable_property_handler_instance",Ao="_is_element_vir_observable_property_handler_creator";function _l(e){return $r(e,Ao)&&e[Ao]===!0}function Rl(e){return $r(e,So)&&e[So]===!0}function Io(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Eo(e,t){const r=e;function n(s,i){return t&&Io(i,e,e.tagName),r[i]}return new Proxy({},{get:n,set:(s,i,a)=>{t&&Io(i,e,e.tagName);const l=e.observablePropertyHandlerMap[i];function c(u){s[i]=u,r[i]=u}return _l(a)&&(a=a.init()),Rl(a)?(l&&a!==l?(a.addMultipleListeners(l.getAllListeners()),l.removeAllListeners()):a.addListener(!0,u=>{c(u)}),e.observablePropertyHandlerMap[i]=a):l?l.setValue(a):c(a),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return n(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Nl(e,t){return t?Et(t,r=>Ks(e,String(r))):{}}function jl({hostClassNames:e,cssVarNames:t,cssVarValues:r}){return{hostClassSelectors:Et(e,(n,o)=>L(`:host(.${o})`)),hostClassNames:Et(e,(n,o)=>L(o)),cssVarNames:t,cssVarValues:r}}function Zl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&qe(t).forEach(s=>{const i=t[s],a=r[s];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function Dl(e,t){function r(o){qe(o).forEach(s=>{const i=o[s];e.instanceState[s]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ol=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function yr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r=Ll(e.events),n=Nl(e.tagName,e.hostClasses),o=Tl(e.tagName,e.cssVars),s=Pl(e.cssVars,o),i={...Il,...e.options},a=typeof e.styles=="function"?e.styles(jl({hostClassNames:n,cssVarNames:o,cssVarValues:s})):e.styles||$t``,l=e.renderCallback,c=(t=class extends Us{createRenderParams(){return Dl(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Xs(this)}render(){try{Qs(this)&&!this.haveInputsBeenSet&&!i[Vn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${g.name}" directive on it. If no inputs are intended, use "${yr.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u));const d=l(u);return Zl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Cl(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();e.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();e.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Ys(this,u)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Eo(this,!1),this.instanceState=Eo(this,!0);const u=e.stateInit||{};qe(u).forEach(d=>{Gs()(this,d),this.instanceState[d]=u[d]}),this.definition=c}},Ol(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=l,t.hostClasses=n,t.cssVarNames=o,t.stateInit=e.stateInit,t.cssVarValues=o,t);return Object.defineProperties(c,{[gn]:{value:!0,writable:!1},name:{value:$l(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function qn(){return e=>yr({...e,options:{[Vn]:!1},...e.options})}function C(e,t){return zl(e,t)}const zl=Ne(class extends Ge{constructor(e){super(e),this.element=Js(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),he}}),zr="onResize",vn=Ne(class extends Ge{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),mn(e,zr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${zr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){mn(e,zr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function xr(e,t,r){return cl(e,()=>t,()=>r)}globalThis&&globalThis.__classPrivateFieldGet;globalThis&&globalThis.__classPrivateFieldSet;function wn(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],s=(t??[""]).map((i,a)=>{const l=Hl(i,n[a]);return`${i}${l}`});return ml(s.join(""))}function Hl(e,t){return t._$litType$!=null||t._$litDirective$!=null?wn(t):Array.isArray(t)?t.map(n=>wn(n)).join(""):e.endsWith("=")?`"${t}"`:t}function ei(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),qn()(r(n))),defineElementNoInputs:n=>(t(n),yr(r(n)))}}function Vl(e,t){return e.filter((r,n)=>!t.includes(n))}function ti(e){return e.filter(t=>Sl(t,["tagName",gn])&&!!t.tagName&&!!t[gn])}const ri=new WeakMap;function Fl(e,t){var o;const r=ti(t);return(o=ni(ri,[e,...r]).value)==null?void 0:o.template}function ql(e,t,r){const n=ti(t);return si(ri,[e,...n],r)}function ni(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=oi(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ni(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function oi(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function si(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:i}=oi(e,t,n);if(!s)return{result:!1,reason:i};const a=o??{nested:void 0,template:void 0};if(o||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),si(l,t,r,n+1)}function ii(e,t,r){return{name:e,check:t,transform:r}}const Wl=new WeakMap;function ai(e,t,r){const n=Fl(e,t),o=n??r();if(!n){const i=ql(e,t,o);if(i.result)Wl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const s=Vl(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function li(e,t,r,n){const o=[],s=[],i=[];return e.forEach((l,c)=>{var M;const u=o.length-1,d=o[u],p=c-1,w=t[p];let v;n&&n(l),typeof d=="string"&&(v=(M=r.find(I=>I.check(d,l,w)))==null?void 0:M.transform,v&&(o[u]=d+v(w)+l,i.push(p))),v||o.push(l);const k=e.raw[c];v?s[u]=s[u]+v(w)+k:s.push(k)}),{templateStrings:Object.assign([],o,{raw:s}),valueIndexDeletions:i}}function ci(e){return $r(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Ul=[ii("tag name css selector interpolation",(e,t,r)=>ci(r),e=>e.tagName)];function Gl(e,t){return li(e,t,Ul)}function f(e,...t){const r=ai(e,t,()=>Gl(e,t));return $t(r.strings,...r.values)}const Yl=[ii("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=ci(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Xl(e){}function Jl(e){return li(e.strings,e.values,Yl,Xl)}function h(e,...t){const r=Qa(e,...t),n=ai(e,t,()=>Jl(r));return{...r,strings:n.strings,values:n.values}}const Ql=0;function Kl(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Ql)}class Dt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class To extends Dt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const kr="locationchange";let Po=!1;const e0=globalThis.history.pushState;function Bo(...e){const t=e0.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(kr)),t}const t0=globalThis.history.replaceState;function Lo(...e){const t=t0.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(kr)),t}function r0(){if(!Po){if(globalThis.history.pushState===Bo)throw new To("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Lo)throw new To("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");Po=!0,globalThis.history.pushState=Bo,globalThis.history.replaceState=Lo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(kr))})}}function n0(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function o0(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function s0(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(i=>!!i),o=globalThis.location.search?n0(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:r,search:o,hash:s}}class i0 extends Dt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function di(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const _o=6;function Ro(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>_o)throw new i0(`Route sanitization depth has exceed the max of ${_o} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(di(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Hr extends Dt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function a0(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Hr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Hr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Hr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function l0(e,t,r,n=!1){const o=ui(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function ui(e,t,r=""){var l;if(!r&&t!=null)throw new Dt("Route base regexp was defined but routeBase string was not provided.");const n=c0(t)?`/${r}`:"",o=e.search?o0(e.search).toString():"",s=o?`?${o}`:"",i=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${i}${e.hash}`:"";return`${n}/${e.paths.join("/")}${s}${a}`}function c0(e){return!!(e&&globalThis.location.pathname.match(e))}function d0(e={}){var s;a0(e),r0();const t=(s=e.routeBase)==null?void 0:s.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o={listeners:new Set,initParams:e,sanitizeFullRoute:i=>{const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes:(i,a=!1,l=!1)=>{const c=o.getCurrentRawRoutes(),u={...c,...i},d=o.sanitizeFullRoute(u);if(!(!l&&di(c,d)))return l0(d,r,t,a)},createRoutesUrl:i=>ui(i,r,t),getCurrentRawRoutes:()=>s0(r),addRouteListener:(i,a)=>{if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Dt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),n||(globalThis.addEventListener(kr,()=>Ro(o)),n=!0),i&&Ro(o,a),a},hasRouteListener:i=>o.listeners.has(i),removeRouteListener:i=>o.listeners.delete(i),sanitizationDepth:0};return o}var le;(function(e){e.Search="search",e.Book="book"})(le||(le={}));const hi={hash:void 0,paths:[le.Book],search:void 0};function u0(e){return d0({routeBase:e,routeSanitizer(t){return{paths:h0(t.paths),hash:void 0,search:void 0}}})}function h0(e){const t=e[0];if(za(t,le)){if(t===le.Book)return[le.Book,...e.slice(1)];if(t===le.Search)return[t,e[1]??""];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return hi.paths}function No(e){return e!==e.toUpperCase()}function p0(e){return e.split("").reduce((r,n,o,s)=>{const i=o>0?s[o-1]:"",a=o<s.length-1?s[o+1]:"",l=No(i)||No(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const f0=["january","february","march","april","may","june","july","august","september","october","november","december"];f0.map(e=>e.slice(0,3));function g0(e){return!!e&&typeof e=="object"}function jo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function m0(e){return Array.isArray(e)?"array":typeof e}function v0(e,t){return m0(e)===t}function w0(e,t){let r=!1;const n=jo(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(jo(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function Cr(e){if(g0(e))return w0(e,(r,n)=>{if(!v0(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(p0(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,i=r.startsWith("--")?L(r):r.startsWith("-")?$t`-${L(r)}`:$t`--${L(r)}`;return{name:i,value:$t`var(${i}, ${L(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Cr.name}' function.`)}function b0({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const N=Cr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),$0={nav:{hover:{background:N["element-book-nav-hover-background-color"],foreground:N["element-book-nav-hover-foreground-color"]},active:{background:N["element-book-nav-active-background-color"],foreground:N["element-book-nav-active-foreground-color"]},selected:{background:N["element-book-nav-selected-background-color"],foreground:N["element-book-nav-selected-foreground-color"]}},accent:{icon:N["element-book-accent-icon-color"]},page:{background:N["element-book-page-background-color"],backgroundFaint1:N["element-book-page-background-faint-level-1-color"],backgroundFaint2:N["element-book-page-background-faint-level-2-color"],foreground:N["element-book-page-foreground-color"],foregroundFaint1:N["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:N["element-book-page-foreground-faint-level-2-color"]}};function y0(e,t){pi(e,t,$0)}function bn(e){return Dn(e,"_$cssResult$")}function Zo(e){return Rs(e,["name","value","default"])&&ja(e.default,"string")&&bn(e.name)&&bn(e.value)}function pi(e,t,r){Object.entries(t).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(bn(o)){if(!Zo(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);b0({forCssVar:s,onElement:e,toValue:String(o)})}else{if(Zo(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);pi(e,o,s)}})}function V(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,a)=>t.map(l=>l[a])),s=e.map(i=>o.map(a=>{let l=0;if(!Array.isArray(i)){for(let c of a)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(a[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(i=>i[0]):s}function Ot(e){return Ee(e)==="string"}function Ee(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function hr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function fi(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),s.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function gi(e){return e[e.length-1]}function pr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function mi(e,t,r){return(r-e)/(t-e)}function Wn(e,t,r){return pr(t[0],t[1],mi(e[0],e[1],r))}function vi(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var x0=Object.freeze({__proto__:null,isString:Ot,type:Ee,toPrecision:hr,parseFunction:fi,last:gi,interpolate:pr,interpolateInv:mi,mapRange:Wn,parseCoordGrammar:vi,multiplyMatrices:V});class k0{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Be=new k0;var be={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const me={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function $n(e){return Array.isArray(e)?e:me[e]}function fr(e,t,r,n={}){if(e=$n(e),t=$n(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Be.run("chromatic-adaptation-start",o),o.M||(o.W1===me.D65&&o.W2===me.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===me.D50&&o.W2===me.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Be.run("chromatic-adaptation-end",o),o.M)return V(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const C0=75e-6;var Rt,yn,it,br,wi;const ge=class{constructor(t){ht(this,Rt);ht(this,br);ht(this,it,void 0);var o,s,i;this.id=t.id,this.name=t.name,this.base=t.base?ge.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=$n(n),this.formats=t.formats??{};for(let a in this.formats){let l=this.formats[a];l.type||(l.type="function"),l.name||(l.name=a)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(s=this.formats)!=null&&s.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Br(this,it,qt(this,br,wi).call(this).reverse()),Be.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=C0}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,s)=>{let i=n[s];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[a,l]=i.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=qt(this,Rt,yn).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=qt(this,Rt,yn).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=ge.get(t),this===t)return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=Je(this,it),o=Je(t,it),s,i;for(let a=0;a<n.length&&n[a]===o[a];a++)s=n[a],i=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>i;a--)r=n[a].toBase(r);for(let a=i+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=ge.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(ge.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof ge)return t;if(Ee(t)==="string"){let o=ge.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return ge.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Ee(t),o,s;if(n==="string"?t.includes(".")?[o,s]=t.split("."):[o,s]=[,t]:Array.isArray(t)?[o,s]=t:(o=t.space,s=t.coordId),o=ge.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ee(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=ge.get(o);let i=s.toLowerCase(),a=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:a,...u};a++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let S=ge;Rt=new WeakSet,yn=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=vi(t.coords);let r=Object.entries(this.coords).map(([n,o],s)=>{let i=t.coordGrammar[s][0],a=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:a,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((s,i)=>{let{fromRange:a,toRange:l,suffix:c}=r[i];return a&&l&&(s=Wn(a,l,s)),s=hr(s,o),c&&(s+=c),s})}return t},it=new WeakMap,br=new WeakSet,wi=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},Tr(S,"registry",{}),Tr(S,"DEFAULT_FORMAT",{type:"functions",name:"color"});var de=new S({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class te extends S{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=de),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=V(t.toXYZ_M,r);return this.white!==this.base.white&&(n=fr(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=fr(this.base.white,this.white,r),V(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function bi(e){var r,n,o,s,i;let t={str:(r=String(e))==null?void 0:r.trim()};if(Be.run("parse-start",t),t.color)return t.color;if(t.parsed=fi(t.str),t.parsed){let a=t.parsed.name;if(a==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let d of S.all){let p=d.getFormat("color");if(p&&(l===p.id||(n=p.ids)!=null&&n.includes(l))){let w=Object.keys(d.coords).length,v=Array(w).fill(0);return v.forEach((k,M)=>v[M]=t.parsed.args[M]||0),{spaceId:d.id,coords:v,alpha:c}}}let u="";if(l in S.registry){let d=(i=(s=(o=S.registry[l].formats)==null?void 0:o.functions)==null?void 0:s.color)==null?void 0:i.id;d&&(u=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${l}). `+(u||"Missing a plugin?"))}else for(let l of S.all){let c=l.getFormat(a);if(c&&c.type==="function"){let u=1;(c.lastAlpha||gi(t.parsed.args).alpha)&&(u=t.parsed.args.pop());let d=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([p,w],v)=>{var F;let k=c.coordGrammar[v],M=(F=d[v])==null?void 0:F.type;if(k=k.find(G=>G==M),!k){let G=w.name||p;throw new TypeError(`${M} not allowed for ${G} in ${a}()`)}let I=k.range;M==="<percentage>"&&(I||(I=[0,1]));let E=w.range||w.refRange;I&&E&&(d[v]=Wn(I,E,d[v]))}),{spaceId:l.id,coords:d,alpha:u}}}}else for(let a of S.all)for(let l in a.formats){let c=a.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let u=c.parse(t.str);if(u)return u.alpha??(u.alpha=1),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Z(e){if(!e)throw new TypeError("Empty color reference");Ot(e)&&(e=bi(e));let t=e.space||e.spaceId;return t instanceof S||(e.space=S.get(t)),e.alpha===void 0&&(e.alpha=1),e}function zt(e,t){return t=S.get(t),t.from(e)}function ue(e,t){let{space:r,index:n}=S.resolveCoord(t,e.space);return zt(e,r)[n]}function $i(e,t,r){return t=S.get(t),e.coords=t.to(e.space,r),e}function Le(e,t,r){if(e=Z(e),arguments.length===2&&Ee(arguments[1])==="object"){let n=arguments[1];for(let o in n)Le(e,o,n[o])}else{typeof r=="function"&&(r=r(ue(e,t)));let{space:n,index:o}=S.resolveCoord(t,e.space),s=zt(e,n);s[o]=r,$i(e,n,s)}return e}var Un=new S({id:"xyz-d50",name:"XYZ D50",white:"D50",base:de,fromBase:e=>fr(de.white,"D50",e),toBase:e=>fr("D50",de.white,e),formats:{color:{}}});const M0=216/24389,Do=24/116,Wt=24389/27;let Vr=me.D50;var re=new S({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Vr,base:Un,fromBase(e){let r=e.map((n,o)=>n/Vr[o]).map(n=>n>M0?Math.cbrt(n):(Wt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Do?Math.pow(t[0],3):(116*t[0]-16)/Wt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Wt,t[2]>Do?Math.pow(t[2],3):(116*t[2]-16)/Wt].map((n,o)=>n*Vr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Mr(e){return(e%360+360)%360}function S0(e,t){if(e==="raw")return t;let[r,n]=t.map(Mr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Tt=new S({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:re,fromBase(e){let[t,r,n]=e,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Mr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Oo=25**7,gr=Math.PI,zo=180/gr,Qe=gr/180;function xn(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,i,a]=re.from(e),l=Tt.from(re,[s,i,a])[1],[c,u,d]=re.from(t),p=Tt.from(re,[c,u,d])[1];l<0&&(l=0),p<0&&(p=0);let v=((l+p)/2)**7,k=.5*(1-Math.sqrt(v/(v+Oo))),M=(1+k)*i,I=(1+k)*u,E=Math.sqrt(M**2+a**2),F=Math.sqrt(I**2+d**2),G=M===0&&a===0?0:Math.atan2(a,M),ne=I===0&&d===0?0:Math.atan2(d,I);G<0&&(G+=2*gr),ne<0&&(ne+=2*gr),G*=zo,ne*=zo;let $e=c-s,Ae=F-E,Q=ne-G,De=G+ne,Vt=Math.abs(Q),oe;E*F===0?oe=0:Vt<=180?oe=Q:Q>180?oe=Q-360:Q<-180?oe=Q+360:console.log("the unthinkable has happened");let Xe=2*Math.sqrt(F*E)*Math.sin(oe*Qe/2),dt=(s+c)/2,Er=(E+F)/2,ro=Math.pow(Er,7),ye;E*F===0?ye=De:Vt<=180?ye=De/2:De<360?ye=(De+360)/2:ye=(De-360)/2;let no=(dt-50)**2,Sa=1+.015*no/Math.sqrt(20+no),oo=1+.045*Er,ut=1;ut-=.17*Math.cos((ye-30)*Qe),ut+=.24*Math.cos(2*ye*Qe),ut+=.32*Math.cos((3*ye+6)*Qe),ut-=.2*Math.cos((4*ye-63)*Qe);let so=1+.015*Er*ut,Aa=30*Math.exp(-1*((ye-275)/25)**2),Ia=2*Math.sqrt(ro/(ro+Oo)),Ea=-1*Math.sin(2*Aa*Qe)*Ia,Ft=($e/(r*Sa))**2;return Ft+=(Ae/(n*oo))**2,Ft+=(Xe/(o*so))**2,Ft+=Ea*(Ae/(n*oo))*(Xe/(o*so)),Math.sqrt(Ft)}const A0=75e-6;function xt(e,t=e.space,{epsilon:r=A0}={}){e=Z(e),t=S.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Pt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function _e(e,{method:t=be.gamut_mapping,space:r=e.space}={}){if(Ot(arguments[1])&&(r=arguments[1]),r=S.get(r),xt(e,r,{epsilon:0}))return e;let n=ce(e,r);if(t!=="clip"&&!xt(e,r)){let o=_e(Pt(n),{method:"clip",space:r});if(xn(e,o)>2){let s=S.resolveCoord(t),i=s.space,a=s.id,l=ce(n,i),u=(s.range||s.refRange)[0],d=.01,p=u,w=ue(l,a);for(;w-p>d;){let v=Pt(l);v=_e(v,{space:r,method:"clip"}),xn(l,v)-2<d?p=ue(l,a):w=ue(l,a),Le(l,a,(p+w)/2)}n=ce(l,r)}else n=o}if(t==="clip"||!xt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,i)=>{let[a,l]=o[i];return a!==void 0&&(s=Math.max(a,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==e.space&&(n=ce(n,e.space)),e.coords=n.coords,e}_e.returns="color";function ce(e,t,{inGamut:r}={}){e=Z(e),t=S.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=_e(o)),o}ce.returns="color";function mr(e,{precision:t=be.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;e=Z(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??S.DEFAULT_FORMAT,n||(n=r.toGamut);let a=e.coords;if(a=a.map(c=>c||0),n&&!xt(e)&&(a=_e(Pt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)s=r.serialize(a,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(w=>hr(w,t)));let u=[...a];if(c==="color"){let w=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(w)}let d=e.alpha;t!==null&&(d=hr(d,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";s=`${c}(${u.join(r.commas?", ":" ")}${p})`}return s}const I0=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],E0=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Sr=new te({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:I0,fromXYZ_M:E0,formats:{color:{}}});const Ut=1.09929682680944,Ho=.018053968510807;var yi=new te({id:"rec2020",name:"REC.2020",base:Sr,toBase(e){return e.map(function(t){return t<Ho*4.5?t/4.5:Math.pow((t+Ut-1)/Ut,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ho?Ut*Math.pow(t,.45)-(Ut-1):4.5*t})},formats:{color:{}}});const T0=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],P0=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var xi=new te({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:T0,fromXYZ_M:P0});const B0=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],L0=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ki=new te({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:B0,fromXYZ_M:L0,formats:{color:{}}}),Vo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Fo=Array(3).fill("<percentage> | <number>[0, 255]"),qo=Array(3).fill("<number>[0, 255]");var Bt=new te({id:"srgb",name:"sRGB",base:ki,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Fo},rgb_number:{name:"rgb",commas:!0,coords:qo,noAlpha:!0},color:{},rgba:{coords:Fo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:qo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Vo.black,t.alpha=0):t.coords=Vo[e],t.coords)return t}}}}),Ci=new te({id:"p3",name:"P3",base:xi,fromBase:Bt.fromBase,toBase:Bt.toBase,formats:{color:{id:"display-p3"}}});be.display_space=Bt;if(typeof CSS<"u"&&CSS.supports)for(let e of[re,yi,Ci]){let t=e.getMinCoords(),n=mr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){be.display_space=e;break}}function _0(e,{space:t=be.display_space,...r}={}){let n=mr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!be.display_space)n=new String(n),n.color=e;else{let o=ce(e,t);n=new String(mr(o,r)),n.color=o}return n}function Mi(e,t,r="lab"){r=S.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((s,i,a)=>{let l=o[a];return isNaN(i)||isNaN(l)?s:s+(l-i)**2},0))}function R0(e,t){return e=Z(e),t=Z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Re(e){return ue(e,[de,"y"])}function Si(e,t){Le(e,[de,"y"],t)}function N0(e){Object.defineProperty(e.prototype,"luminance",{get(){return Re(this)},set(t){Si(this,t)}})}var j0=Object.freeze({__proto__:null,getLuminance:Re,setLuminance:Si,register:N0});function Z0(e,t){e=Z(e),t=Z(t);let r=Math.max(Re(e),0),n=Math.max(Re(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const D0=.56,O0=.57,z0=.62,H0=.65,Wo=.022,V0=1.414,F0=.1,q0=5e-4,W0=1.14,Uo=.027,U0=1.14;function Go(e){return e>=Wo?e:e+(Wo-e)**V0}function Ke(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function G0(e,t){t=Z(t),e=Z(e);let r,n,o,s,i,a;t=ce(t,"srgb"),[s,i,a]=t.coords;let l=Ke(s)*.2126729+Ke(i)*.7151522+Ke(a)*.072175;e=ce(e,"srgb"),[s,i,a]=e.coords;let c=Ke(s)*.2126729+Ke(i)*.7151522+Ke(a)*.072175,u=Go(l),d=Go(c),p=d>u;return Math.abs(d-u)<q0?n=0:p?(r=d**D0-u**O0,n=r*W0):(r=d**H0-u**z0,n=r*U0),Math.abs(n)<F0?o=0:n>0?o=n-Uo:o=n+Uo,o*100}function Y0(e,t){e=Z(e),t=Z(t);let r=Math.max(Re(e),0),n=Math.max(Re(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const X0=5e4;function J0(e,t){e=Z(e),t=Z(t);let r=Math.max(Re(e),0),n=Math.max(Re(t),0);return n>r&&([r,n]=[n,r]),n===0?X0:(r-n)/n}function Q0(e,t){e=Z(e),t=Z(t);let r=ue(e,[re,"l"]),n=ue(t,[re,"l"]);return Math.abs(r-n)}const K0=216/24389,Yo=24/116,Gt=24389/27;let Fr=me.D65;var kn=new S({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Fr,base:de,fromBase(e){let r=e.map((n,o)=>n/Fr[o]).map(n=>n>K0?Math.cbrt(n):(Gt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Yo?Math.pow(t[0],3):(116*t[0]-16)/Gt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Gt,t[2]>Yo?Math.pow(t[2],3):(116*t[2]-16)/Gt].map((n,o)=>n*Fr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const qr=Math.pow(5,.5)*.5+.5;function ec(e,t){e=Z(e),t=Z(t);let r=ue(e,[kn,"l"]),n=ue(t,[kn,"l"]),o=Math.abs(Math.pow(r,qr)-Math.pow(n,qr)),s=Math.pow(o,1/qr)*Math.SQRT2-40;return s<7.5?0:s}var sr=Object.freeze({__proto__:null,contrastWCAG21:Z0,contrastAPCA:G0,contrastMichelson:Y0,contrastWeber:J0,contrastLstar:Q0,contrastDeltaPhi:ec});function tc(e,t,r={}){Ot(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(sr).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Z(e),t=Z(t);for(let s in sr)if("contrast"+n.toLowerCase()===s.toLowerCase())return sr[s](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ai(e){let[t,r,n]=zt(e,de),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ii(e){let[t,r,n]=zt(e,de),o=t+r+n;return[t/o,r/o]}function rc(e){Object.defineProperty(e.prototype,"uv",{get(){return Ai(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ii(this)}})}var nc=Object.freeze({__proto__:null,uv:Ai,xy:Ii,register:rc});function oc(e,t){return Mi(e,t,"lab")}const sc=Math.PI,Xo=sc/180;function ic(e,t,{l:r=2,c:n=1}={}){let[o,s,i]=re.from(e),[,a,l]=Tt.from(re,[o,s,i]),[c,u,d]=re.from(t),p=Tt.from(re,[c,u,d])[1];a<0&&(a=0),p<0&&(p=0);let w=o-c,v=a-p,k=s-u,M=i-d,I=k**2+M**2-v**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let F=.0638*a/(1+.0131*a)+.638,G;Number.isNaN(l)&&(l=0),l>=164&&l<=345?G=.56+Math.abs(.2*Math.cos((l+168)*Xo)):G=.36+Math.abs(.4*Math.cos((l+35)*Xo));let ne=Math.pow(a,4),$e=Math.sqrt(ne/(ne+1900)),Ae=F*($e*G+1-$e),Q=(w/(r*E))**2;return Q+=(v/(n*F))**2,Q+=I/Ae**2,Math.sqrt(Q)}const Jo=203;var Gn=new S({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:de,fromBase(e){return e.map(t=>Math.max(t*Jo,0))},toBase(e){return e.map(t=>Math.max(t/Jo,0))}});const Yt=1.15,Xt=.66,Qo=2610/2**14,ac=2**14/2610,Ko=3424/2**12,es=2413/2**7,ts=2392/2**7,lc=1.7*2523/2**5,rs=2**5/(1.7*2523),Jt=-.56,Wr=16295499532821565e-27,cc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],dc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],uc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],hc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ei=new S({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Gn,fromBase(e){let[t,r,n]=e,o=Yt*t-(Yt-1)*n,s=Xt*r-(Xt-1)*t,a=V(cc,[o,s,n]).map(function(p){let w=Ko+es*(p/1e4)**Qo,v=1+ts*(p/1e4)**Qo;return(w/v)**lc}),[l,c,u]=V(uc,a);return[(1+Jt)*l/(1+Jt*l)-Wr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Wr)/(1+Jt-Jt*(t+Wr)),i=V(hc,[o,r,n]).map(function(p){let w=Ko-p**rs,v=ts*p**rs-es;return 1e4*(w/v)**ac}),[a,l,c]=V(dc,i),u=(a+(Yt-1)*c)/Yt,d=(l+(Xt-1)*u)/Xt;return[u,d,c]},formats:{color:{}}}),Cn=new S({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ei,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Mr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function pc(e,t){let[r,n,o]=Cn.from(e),[s,i,a]=Cn.from(t),l=r-s,c=n-i;Number.isNaN(o)&&Number.isNaN(a)?(o=0,a=0):Number.isNaN(o)?o=a:Number.isNaN(a)&&(a=o);let u=o-a,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Ti=3424/4096,Pi=2413/128,Bi=2392/128,ns=2610/16384,fc=2523/32,gc=16384/2610,os=32/2523,mc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],vc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],wc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],bc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Mn=new S({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Gn,fromBase(e){let t=V(mc,e);return $c(t)},toBase(e){let t=yc(e);return V(bc,t)},formats:{color:{}}});function $c(e){let t=e.map(function(r){let n=Ti+Pi*(r/1e4)**ns,o=1+Bi*(r/1e4)**ns;return(n/o)**fc});return V(vc,t)}function yc(e){return V(wc,e).map(function(n){let o=Math.max(n**os-Ti,0),s=Pi-Bi*n**os;return 1e4*(o/s)**gc})}function xc(e,t){let[r,n,o]=Mn.from(e),[s,i,a]=Mn.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-i)**2+(o-a)**2)}const kc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Cc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Mc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Sc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var vr=new S({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:de,fromBase(e){let r=V(kc,e).map(n=>Math.cbrt(n));return V(Mc,r)},toBase(e){let r=V(Sc,e).map(n=>n**3);return V(Cc,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ac(e,t){let[r,n,o]=vr.from(e),[s,i,a]=vr.from(t),l=r-s,c=n-i,u=o-a;return Math.sqrt(l**2+c**2+u**2)}var Sn=Object.freeze({__proto__:null,deltaE76:oc,deltaECMC:ic,deltaE2000:xn,deltaEJz:pc,deltaEITP:xc,deltaEOK:Ac});function vt(e,t,r={}){Ot(r)&&(r={method:r});let{method:n=be.deltaE,...o}=r;e=Z(e),t=Z(t);for(let s in Sn)if("deltae"+n.toLowerCase()===s.toLowerCase())return Sn[s](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Ic(e,t=.25){let n=[S.get("oklch","lch"),"l"];return Le(e,n,o=>o*(1+t))}function Ec(e,t=.25){let n=[S.get("oklch","lch"),"l"];return Le(e,n,o=>o*(1-t))}var Tc=Object.freeze({__proto__:null,lighten:Ic,darken:Ec});function Li(e,t,r=.5,n={}){[e,t]=[Z(e),Z(t)],Ee(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:i}=n;return Ht(e,t,{space:o,outputSpace:s,premultiplied:i})(r)}function _i(e,t,r={}){let n;Yn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:i=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[Z(e),Z(t)],n=Ht(e,t,l));let c=vt(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(a!==void 0&&(u=Math.min(u,a)),u===1)d=[{p:.5,color:n(.5)}];else{let p=1/(u-1);d=Array.from({length:u},(w,v)=>{let k=v*p;return{p:k,color:n(k)}})}if(o>0){let p=d.reduce((w,v,k)=>{if(k===0)return 0;let M=vt(v.color,d[k-1].color,s);return Math.max(w,M)},0);for(;p>o;){p=0;for(let w=1;w<d.length&&d.length<a;w++){let v=d[w-1],k=d[w],M=(k.p+v.p)/2,I=n(M);p=Math.max(p,vt(I,v.color),vt(I,k.color)),d.splice(w,0,{p:M,color:n(M)}),w++}}}return d=d.map(p=>p.color),d}function Ht(e,t,r={}){if(Yn(e)){let[l,c]=[e,t];return Ht(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:i}=r;e=Z(e),t=Z(t),e=Pt(e),t=Pt(t);let a={colors:[e,t],options:r};if(n?n=S.get(n):n=S.registry[be.interpolationSpace]||e.space,o=o?S.get(o):n,e=ce(e,n),t=ce(t,n),e=_e(e),t=_e(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[ue(e,c),ue(t,c)];[u,d]=S0(l,[u,d]),Le(e,c,u),Le(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((p,w)=>{let v=t.coords[w];return pr(p,v,l)}),u=pr(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(p=>p/u)),o!==n&&(d=ce(d,o)),d},{rangeArgs:a})}function Yn(e){return Ee(e)==="function"&&!!e.rangeArgs}be.interpolationSpace="lab";function Pc(e){e.defineFunction("mix",Li,{returns:"color"}),e.defineFunction("range",Ht,{returns:"function<color>"}),e.defineFunction("steps",_i,{returns:"array<color>"})}var Bc=Object.freeze({__proto__:null,mix:Li,steps:_i,range:Ht,isRange:Yn,register:Pc}),Ri=new S({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[i,a,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-s)/c+(o<s?6:0);break;case o:i=(s-n)/c+2;break;case s:i=(n-o)/c+4}i=i*60}return[i,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let i=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ni=new S({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ri,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Lc=new S({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ni,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let s=1-n,i=s===0?0:1-r/s;return[t,i*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const _c=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Rc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ji=new te({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:_c,fromXYZ_M:Rc}),Nc=new te({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ji,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const jc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Zc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Zi=new te({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Un,toXYZ_M:jc,fromXYZ_M:Zc});const Dc=1/512,Oc=16/512;var zc=new te({id:"prophoto",name:"ProPhoto",base:Zi,toBase(e){return e.map(t=>t<Oc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Dc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Hc=new S({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vr,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Mr(o)]},toBase(e){let[t,r,n]=e,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ss=203,is=2610/2**14,Vc=2**14/2610,Fc=2523/2**5,as=2**5/2523,ls=3424/2**12,cs=2413/2**7,ds=2392/2**7;var qc=new te({id:"rec2100pq",name:"REC.2100-PQ",base:Sr,toBase(e){return e.map(function(t){return(Math.max(t**as-ls,0)/(cs-ds*t**as))**Vc*1e4/ss})},fromBase(e){return e.map(function(t){let r=Math.max(t*ss/1e4,0),n=ls+cs*r**is,o=1+ds*r**is;return(n/o)**Fc})},formats:{color:{id:"rec2100-pq"}}});const us=.17883277,hs=.28466892,ps=.55991073,Ur=3.7743;var Wc=new te({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Sr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Ur:Math.exp((t-ps)/us+hs)/12*Ur})},fromBase(e){return e.map(function(t){return t/=Ur,t<=1/12?Math.sqrt(3*t):us*Math.log(12*t-hs)+ps})},formats:{color:{id:"rec2100-hlg"}}});const Di={};Be.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Oi(e.W1,e.W2,e.options.method))});Be.add("chromatic-adaptation-end",e=>{e.M||(e.M=Oi(e.W1,e.W2,e.options.method))});function Ar({id:e,toCone_M:t,fromCone_M:r}){Di[e]=arguments[0]}function Oi(e,t,r="Bradford"){let n=Di[r],[o,s,i]=V(n.toCone_M,e),[a,l,c]=V(n.toCone_M,t),u=[[a/o,0,0],[0,l/s,0],[0,0,c/i]],d=V(u,n.toCone_M);return V(n.fromCone_M,d)}Ar({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ar({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ar({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ar({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(me,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});me.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Uc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Gc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var zi=new te({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:me.ACES,toXYZ_M:Uc,fromXYZ_M:Gc,formats:{color:{}}});const Qt=2**-16,Gr=-.35828683,Kt=(Math.log2(65504)+9.72)/17.52;var Yc=new te({id:"acescc",name:"ACEScc",coords:{r:{range:[Gr,Kt],name:"Red"},g:{range:[Gr,Kt],name:"Green"},b:{range:[Gr,Kt],name:"Blue"}},referred:"scene",base:zi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Qt)*2:r<Kt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Qt)+9.72)/17.52:t<Qt?(Math.log2(Qt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),fs=Object.freeze({__proto__:null,XYZ_D65:de,XYZ_D50:Un,XYZ_ABS_D65:Gn,Lab_D65:kn,Lab:re,LCH:Tt,sRGB_Linear:ki,sRGB:Bt,HSL:Ri,HWB:Lc,HSV:Ni,P3_Linear:xi,P3:Ci,A98RGB_Linear:ji,A98RGB:Nc,ProPhoto_Linear:Zi,ProPhoto:zc,REC_2020_Linear:Sr,REC_2020:yi,OKLab:vr,OKLCH:Hc,Jzazbz:Ei,JzCzHz:Cn,ICTCP:Mn,REC_2100_PQ:qc,REC_2100_HLG:Wc,ACEScg:zi,ACEScc:Yc}),Ve;const X=class{constructor(...t){ht(this,Ve,void 0);let r;t.length===1&&(r=Z(t[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=t,Br(this,Ve,S.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in Je(this,Ve).coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:a=>this.set(i,a)})}get space(){return Je(this,Ve)}get spaceId(){return Je(this,Ve).id}clone(){return new X(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=_0(this,...t);return r.color=new X(r.color),r}static get(t,...r){return t instanceof X?t:new X(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:s}=n,i=function(...a){let l=r(...a);if(s==="color")l=X.get(l);else if(s==="function<color>"){let c=l;l=function(...u){let d=c(...u);return X.get(d)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>X.get(c)));return l};t in X||(X[t]=i),o&&(X.prototype[t]=function(...a){return i(this,...a)})}static defineFunctions(t){for(let r in t)X.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(X);else for(let r in t)X.defineFunction(r,t[r])}};let D=X;Ve=new WeakMap;D.defineFunctions({get:ue,getAll:zt,set:Le,setAll:$i,to:ce,equals:R0,inGamut:xt,toGamut:_e,distance:Mi,toString:mr});Object.assign(D,{util:x0,hooks:Be,WHITES:me,Space:S,spaces:S.registry,parse:bi,defaults:be});for(let e of Object.keys(fs))S.register(fs[e]);for(let e in S.registry)An(e,S.registry[e]);Be.add("colorspace-init-end",e=>{var t;An(e.id,e),(t=e.aliases)==null||t.forEach(r=>{An(r,e)})});function An(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(D.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return S.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,i)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:a}=S.resolveCoord([t,s]);if(a>=0)return o[a]}return Reflect.get(o,s,i)},set:(o,s,i,a)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=S.resolveCoord([t,s]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,s,i,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}D.extend(Sn);D.extend({deltaE:vt});D.extend(Tc);D.extend({contrast:tc});D.extend(nc);D.extend(j0);D.extend(Bc);D.extend(sr);function Hi(e){return Ha(e,(t,r)=>r instanceof D?L(r.toString({format:"hex"})):Hi(r))}const Xc="dodgerblue";function In(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Yr({background:e,foreground:t}){return{background:e??new D(In(t)),foreground:t??new D(In(e))}}var wr;(function(e){e.Dark="dark",e.Light="light"})(wr||(wr={}));function Jc(e){return e==="black"?"white":"black"}const Qc={black:{foregroundFaint1:new D("#ccc"),foregroundFaint2:new D("#eee")},white:{foregroundFaint1:new D("#ccc"),foregroundFaint2:new D("#eee")}},Kc={black:{backgroundFaint1:new D("#666"),backgroundFaint2:new D("#444")},white:{backgroundFaint1:new D("#ccc"),backgroundFaint2:new D("#fafafa")}};function gs({themeColor:e=Xc,themeStyle:t=wr.Light}={}){const r=new D(e),n=new D(t===wr.Dark?"black":"white"),o=In(n),s=new D(o),i={nav:{hover:Yr({background:r.clone().set({"hsl.l":93})}),active:Yr({background:r.clone().set({"hsl.l":90})}),selected:Yr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Kc[Jc(o)],foreground:s,...Qc[o]}};return Hi(i)}const Vi=Fn()("change-page"),En=Cr({"vir-icon-color":"currentColor"}),e1=Cr({"vir-icon-stroke-color":En["vir-icon-color"].value,"vir-icon-fill-color":En["vir-icon-color"].value}),Xr={...En,...e1};function Fi({name:e,svgTemplate:t}){return{name:e,templateString:typeof t=="string"?t:wn(t)}}const Te=qn()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:e})=>!!e.fitContainer},styles:({hostClassSelectors:e})=>f`
        :host {
            display: block;
            color: ${Xr["vir-icon-color"].value};
            fill: ${Xr["vir-icon-fill-color"].value};
            stroke: ${Xr["vir-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vir-icon-fit-icon"]} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?al(e.icon.templateString):""}),t1=Fi({name:"Element16Icon",svgTemplate:h`
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
    `}),{defineElement:Ye,defineElementNoInputs:Xd}=ei(),J=Ye()({tagName:"element-book-route-link",cssVars:{anchorPadding:""},styles:({cssVarValues:e})=>f`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e.anchorPadding};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return h`
            <a
                href=${r}
                ${C("click",s=>{(!e.router||Kl(s))&&(s.preventDefault(),window.scrollTo(0,0),t(new Vi(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),er=Ye()({tagName:"element-book-nav",styles:f`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${N["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${N["element-book-nav-hover-background-color"].value};
            color: ${N["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${N["element-book-nav-active-background-color"].value};
            color: ${N["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            padding-right: 16px;
            display: block;
            ${J.cssVarNames.anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${J} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${N["element-book-nav-selected-background-color"].value};
            color: ${N["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        ${Te} {
            display: inline-flex;
            color: ${N["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=qi({indent:0,entryTreeNode:e.tree,rootPath:[],router:e.router,selectedPath:e.selectedPath.slice(1)});return h`
            <ul>
                ${t}
            </ul>
        `}});function qi({indent:e,entryTreeNode:t,rootPath:r,selectedPath:n,router:o}){const s=t.breadcrumb?r.concat(t.breadcrumb):r,i=t.entry.type===Me.Page,a=Object.values(t.children).map(l=>qi({indent:e+1,entryTreeNode:l,rootPath:s,selectedPath:n,router:o}));return h`
        <div class="nav-tree-entry" style="--indent: ${e};">
            <slot></slot>
            <li class=${t.entry.type}>
                <${J}
                    ${g(J,{router:o,route:{paths:[le.Book,...s]}})}
                    class=${we({"title-row":!0,selected:Zn(n,s)})}
                >
                    <div class="title-text">
                        ${xr(i,h`
                                <${Te} ${g(Te,{icon:t1})}></${Te}>
                            `)}
                        ${t.entry.title}
                    </div>
                </${J}>
            </li>
            ${a}
        </div>
    `}const r1=Fi({name:"Element24Icon",svgTemplate:h`
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
    `}),Jr=Ye()({tagName:"element-book-breadcrumbs",styles:f`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const s=n>=o.length-1,i=o.slice(0,n+1),a=s?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${J}
                    ${g(J,{route:{hash:void 0,search:void 0,paths:[le.Book,...i]},router:e.router})}
                >
                    ${r}
                </${J}>
                ${a}
            `}):h`
                &nbsp;
            `}}),n1=h`
    &nbsp;
`,tr=Ye()({tagName:"element-book-example-controls",styles:f`
        :host {
            display: flex;
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=e.example.hideControls?"":e.example.title;return h`
            <span>
                ${t||n1}
                <span></span>
            </span>
        `}}),ms=Symbol("unset-internal-state"),Qr=Ye()({tagName:"element-book-example-viewer",stateInit:{internalState:ms},renderCallback({state:e,inputs:t,updateState:r}){e.internalState===ms&&r({internalState:t.example.stateInit});try{const n=t.example.render({state:e.internalState,updateState:o=>{r({internalState:{...e.internalState,...o}})}});return h`
                ${xr(!!t.example.styles,h`
                        <style>
                            ${t.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${t.breadcrumbs.join(" > ")} failed: ${jn(n)}`}}}),Kr=Ye()({tagName:"element-book-page-examples",styles:f`
        :host {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .individual-example-wrapper:hover ${tr} {
            color: ${N["element-book-accent-icon-color"].value};
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,renderCallback({inputs:e}){const t=e.page.examples,r=t.every(n=>n.hideControls);return il(t,n=>e.parentBreadcrumbs.concat(n.title).join(">"),n=>{const o=e.parentBreadcrumbs.concat(n.title);return h`
                    <div class="individual-example-wrapper">
                        ${xr(!r,h`
                                <${tr}
                                    class=${we({"hidden-controls":!!n.hideControls})}
                                    ${g(tr,{example:n})}
                                ></${tr}>
                            `)}
                        <${Qr}
                            ${g(Qr,{example:n,breadcrumbs:o})}
                        ></${Qr}>
                    </div>
                `})}}),et=Ye()({tagName:"element-book-entry-display",styles:f`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${N["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${N["element-book-page-background-color"].value};
            z-index: 9999999999;
        }

        .all-examples-wrapper {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        h1,
        h2,
        h3 {
            margin: 0;
            padding: 0;
        }

        h2,
        h3 {
            font-size: 1.5em;
        }

        ${J} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${Te} {
            color: ${N["element-book-accent-icon-color"].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${N["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=Ui(e.currentNode),r=Nt(e.currentNode.entry,!1).reverse(),n=Wi({nestedPages:t,parentBreadcrumbs:r,isTopLevel:!0,router:e.router});return h`
            <div class="title-bar">
                <${Jr}
                    ${g(Jr,{currentRoute:e.currentRoute,router:e.router})}
                ></${Jr}>
            </div>
            <div class="all-examples-wrapper">${n}</div>
        `}});function Wi({nestedPages:e,parentBreadcrumbs:t,isTopLevel:r,router:n}){return e.map(o=>{if(Wa(o,Me.Page)){const s=o.entry;if(!qa(s,Me.Page))throw new Error("nested entry should be a page");const i=h`
                    <${Te} ${g(Te,{icon:r1})}></${Te}>
                    ${s.title}
                `,a=r?h`
                          <h2 class="header-with-icon">${i}</h2>
                      `:h`
                          <h3 class="header-with-icon">${i}</h3>
                      `,l=[le.Book,...t.concat(o.breadcrumb)];return h`
                    <div class="page-examples">
                        <div class="title-group">
                            <${J}
                                ${g(J,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                            >
                                ${a}
                            </${J}>
                            ${vs(s)}
                        </div>
                        <${Kr}
                            ${g(Kr,{page:s,parentBreadcrumbs:t})}
                        ></${Kr}>
                    </div>
                `}else return Object.entries(o).map(([s,i])=>{const a=r?h`
                                  <h1>${s}</h1>
                              `:h`
                                  <h2>${s}</h2>
                              `,l=[le.Book,...t.concat(i.node.breadcrumb)];return h`
                            <div class="title-group">
                                <${J}
                                    ${g(J,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                                >
                                    ${a}
                                </${J}>
                                ${vs(i.node.entry)}
                            </div>
                            ${Wi({nestedPages:i.nested,parentBreadcrumbs:i.node.breadcrumb?t.concat(i.node.breadcrumb):t,isTopLevel:!1,router:n})}
                        `})}).flat()}function vs(e){const t=(e.descriptionParagraphs??[]).map(r=>h`
            <p>${r}</p>
        `);return h`
        <div class="description">${t}</div>
    `}function Ui(e){return e.entry.type===Me.Page?[e]:[{[e.entry.title]:{node:e,nested:Object.values(e.children).map(Ui).flat()}}]}const o1=new Map,rr=qn()({tagName:"element-book-app",stateInit:{currentRoute:hi,router:void 0,colors:{config:void 0,theme:gs(void 0)}},styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${N["element-book-page-background-color"].value};
            color: ${N["element-book-page-foreground-color"].value};
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

        ${et} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${er} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({updateState:e,state:t,inputs:r,host:n}){if(r.baseUrl&&!t.router){const o=u0(r.baseUrl);e({router:o}),o.addRouteListener(!0,s=>{e({currentRoute:s})})}},renderCallback:({state:e,inputs:t,host:r,updateState:n})=>{var s;try{let a=function(d){e.router?e.router.setRoutes(d):n({currentRoute:{...e.currentRoute,...d}})};var o=a;const i={themeColor:t.themeColor};if(!Zn(i,(s=e.colors)==null?void 0:s.config)){const d=gs(i);n({colors:{config:i,theme:d}}),y0(r,d)}const l=Za(o1,t.entries,()=>Ga(t.entries,t.everythingTitle));if(!hn(e.currentRoute.paths.slice(1),l)){const d=Object.values(l.children)[0];if(!d)throw new Error("No entries exist.");const p=Nt(d.entry,!0),w=t.defaultPath??(p.length?p:void 0);if(w&&w.length){const v={paths:[le.Book,...w]};a(v)}}const u=hn(e.currentRoute.paths.slice(1),l);if(!u)throw new Error(`Tried to self-correct for invalid path ${e.currentRoute.paths.join("/")}
                        but failed to do so.`);return h`
                <div
                    class="root"
                    ${C(Vi,d=>{const p=r.shadowRoot.querySelector(et.tagName);p?p.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${et.tagName}' for scrolling.`),a(d.detail)})}
                >
                    <${er}
                        ${g(er,{tree:l,router:e.router,selectedPath:e.currentRoute.paths})}
                    >
                        <slot name="nav-header"></slot>
                    </${er}>
                    <${et}
                        ${g(et,{currentRoute:e.currentRoute,currentNode:u,router:e.router})}
                    ></${et}>
                </div>
            `}catch(i){return h`
                <p class="error">${jn(i)}</p>
            `}}});function s1(e,t){return e.map(t)}function Gi(e,t){return e.match(t)??[]}function i1(e){return e.replace(/,/g,"")}function a1(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function ws(e){return e!==e.toUpperCase()}function Tn(e){return e.split("").reduce((r,n,o,s)=>{const i=o>0?s[o-1]:"",a=o<s.length-1?s[o+1]:"",l=ws(i)||ws(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Lt(e,t){return e.split(t)}const l1=String(NaN);function Yi(e){if(typeof e=="string"&&isNaN(Number(e)))return l1;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${Gi(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${o}`}function c1(e){return typeof e=="number"?e:Number(typeof e=="string"?i1(e):e)}function d1(e){return String(e).includes("e")}const u1=["january","february","march","april","may","june","july","august","september","october","november","december"];u1.map(e=>e.slice(0,3));function h1(e){return!!e&&typeof e=="object"}function We(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Se(e,t){let r=!1;const n=We(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(We(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}const p1=["k","M","B","T","P","E","Z","Y"];function Xn({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function f1(e,t,r){const[n,o]=Lt(e,"."),s=Yi(n),i=Gi(s,/,/g).length,a=t[i-1],[l,c]=Lt(s,","),u=[c,o].join("");return l.length+1>r?["0.",l[0],t[i]].join(""):[Xn({beforeDot:l,afterDot:u,maxLength:r-1}),a].join("")}const bs=3;function g1({input:e,maxLength:t}){const r=String(e),[n,o]=Lt(r,"e"),s=o.replace(/^[\-\+]/,""),i=o[0],a=["e",i,s].join(""),[l,c]=Lt(n,"."),u=s.length+bs;return u===t?[l,a].join(""):u>t?i==="-"?"0":String(1/0):[Xn({afterDot:c,beforeDot:l,maxLength:t-s.length+bs}),a].join("")}function m1(e,t){const[r,n]=Lt(Yi(e),".");if(r.length<=t)return Xn({beforeDot:r,afterDot:n,maxLength:t})}function v1(e,{customSuffixes:t=p1,maxLength:r=6}={}){const n=c1(e);if(isNaN(n)||n===1/0)return String(n);if(d1(n))return g1({input:n,maxLength:r});const o=String(n),s=m1(o,r);return s??f1(o,t,r)}const pe=K({title:"Elements",parent:void 0}),ke={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function $s(e,t){return`var(${e}, var(${ke.color}, ${t}))`}const y={stroke:(e="currentColor")=>$s(ke.strokeColor,e),fill:(e="currentColor")=>$s(ke.fillColor,e)};class b{constructor(t,r){this.iconName=t,this.svgString=r}}function $(e,...t){return e.reduce((n,o,s)=>{const i=s<t.length?t[s]:"";return n+o+i},"")}const w1=new b("Copy16Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),b1=new b("ExternalLink16Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),$1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",Xi="0 0 58 58",Ji=`<image xlink:href="${$1}" id="icp-16__b" width="58" height="58" />`,y1=new b("Icp16Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${Xi}"
        >
            ${Ji}
        </svg>
    `),kt=new b("InfoCircle16Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),x1=new b("ArrowBarUp24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),k1=new b("ArrowForwardUp24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Jn=new b("ArrowLeft24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),C1=new b("ArrowLoopLeft24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Qi=new b("ArrowLoopRight24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Qn=new b("ArrowRight24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Pn=new b("ArrowsSort24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),ys={interactionDuration:f`--toniq-interaction-transition-duration`,prettyDuration:f`--toniq-pretty-transition-duration`},Y={interaction:f`var(${ys.interactionDuration}, 84ms)`,pretty:f`var(${ys.prettyDuration}, 300ms)`};function Ir(){return e=>e}function en(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const M1=(()=>{const e={backgroundColor:f`#ffffff`,foregroundColor:f`#000000`},t={...e,foregroundColor:f`#00D093`},r={...e,foregroundColor:f`#ACADAD`},n={...e,foregroundColor:f`#D6D6D6`},o={...t},s={...t,foregroundColor:f`#00A876`},i={...t,foregroundColor:f`#1D6852`},a={...n},l={...e,foregroundColor:f`#EAFBF7`},c={...e,backgroundColor:f`#D2EEFA`},u=en(o),d=en(s),p=en(i),w=p,v={backgroundColor:f`#F1F3F6`,foregroundColor:e.foregroundColor},k={...v,foregroundColor:f`#9A9A9D`};return Ir()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:s,pageInteractionActive:i,divider:a,dividerFaint:l,dropShadow:c,pageDarkPrimary:w,accentPrimary:u,accentPrimaryHover:d,accentPrimaryActive:p,accentSecondary:v,accentTertiary:k})})(),Ki=M1;function xs(e,t){return L(`--toniq-${Tn(e)}-${Tn(t)}`)}const Kn=Se(Ki,e=>({backgroundColor:xs(e,"backgroundColor"),foregroundColor:xs(e,"foregroundColor")}));function ae(e,t){const r=Ki[e][t],n=Kn[e][t];return f`var(${n}, ${r})`}const x=Se(Kn,e=>({foregroundColor:ae(e,"foregroundColor"),backgroundColor:ae(e,"backgroundColor")}));function j(e){return f`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const S1=f`
    pointer-events: none;
    opacity: 0.3;
`;function Ct(e,t,r){return Math.min(Math.max(e,t),r)}function rt(e){return`${e}px`}function tn(e){return`${e}%`}function rn(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,u)=>{const d=e[u+1];return d==null?!0:c<=t&&d>=t});if(o<0)return r;const s=e[o];if(s==null)return r;const i=e[o+1];if(i==null)return s;const a=t-s,l=i-t;return a<l?o:o+1}function A1(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=I1(e);const o=[e];for(;n<t;){const s=Math.pow(10,String(n).length-1),i=n+s;i<t&&o.push(i),n=i}return o.push(t),o.length>r&&(ks(o,r),o.length>r&&ks(o,r)),o}function ks(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function I1(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function je({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=L(rt(n+r+t));return f`
        ${L(e)}::after {
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
    `}const ea=Ir()({toniqFont:{"font-family":f`'Rubik', sans-serif`},normalWeightFont:{"font-weight":f`400`},boldFont:{"font-weight":f`600`},extraBoldFont:{"font-weight":f`900`},paragraphFont:{"line-height":f`24px`,"font-size":f`16px`},boldParagraphFont:{},labelFont:{"line-height":f`16px`,"font-size":f`12px`},boldLabelFont:{},h1Font:{"line-height":f`96px`,"font-size":f`64px`},h2Font:{"line-height":f`48px`,"font-size":f`32px`},h3Font:{"line-height":f`32px`,"font-size":f`24px`},monospaceFont:{"font-family":f`'Inconsolata', monospace`,"line-height":f`1.125em`}}),E1=Se(ea,(e,t)=>{const r=L(Tn(e.replace(/Font$/,"")));return Se(t,o=>{const s=L(o);return f`--toniq-font-${r}-${s}`})});function ve(e){const t=E1[e],r=ea[e],n=We(t).map(o=>{const s=r[o],i=t[o];return f`
            ${L(o)}: var(${i}, ${s});
        `});return L(n.join(`
`))}const U=(()=>{const e=f`
        font-style: normal;
        color: ${x.pagePrimary.foregroundColor};
        ${ve("toniqFont")};
    `,t=f`
        ${e};
        ${ve("normalWeightFont")};
    `,r=f`
        ${e};
        ${ve("boldFont")};
    `,n=f`
        ${e};
        ${ve("extraBoldFont")};
    `,o=f`
        ${e};
        ${ve("paragraphFont")};
        ${t};
    `,s=f`
        ${e};
        ${o};
        ${r};
    `,i=f`
        ${e};
        ${ve("labelFont")};
        ${t};
    `,a=f`
        ${i};
        ${r};
    `,l=f`
        ${ve("h1Font")};
        ${n};
    `,c=f`
        ${ve("h2Font")};
        ${r};
    `,u=f`
        ${ve("h3Font")};
        ${r};
    `,d=f`
        ${ve("monospaceFont")}
    `;return Ir()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:s,labelFont:i,boldLabelFont:a,h1Font:l,h2Font:c,h3Font:u,monospaceFont:d})})(),Ze=f`
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
`,T1=Ir()({popupShadow:f`
        filter: drop-shadow(0px 12px 8px ${x.dropShadow.backgroundColor});
    `}),Ue=f`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,P1=new b("ArrowsSortAscending24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),B1=new b("ArrowsSortDescending24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),L1=new b("Bucket24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),_1=new b("BuildingStore24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),R1=new b("CalendarEvent24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),N1=new b("Cash24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),j1=new b("Chain24Icon",$`
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
            fill="${y.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="m11.736 16.792.206-.245a.64.64 0 0 1 .902-.079l.491.412a.64.64 0 0 1 .079.902l-2.059 2.451a3.206 3.206 0 0 1-2.451 1.142 3.206 3.206 0 0 1-2.058-.749l-2.452-2.058a3.208 3.208 0 0 1-1.142-2.454c0-.752.266-1.479.752-2.055l3.703-4.41v-.003a3.204 3.204 0 0 1 4.509-.39l1.456 1.223c.27.227.305.632.078.903l-.409.488a.641.641 0 0 1-.902.079l-1.459-1.224a1.283 1.283 0 0 0-1.801.157l-3.706 4.413c-.192.23-.301.521-.301.822 0 .378.17.736.458.979l2.451 2.058a1.274 1.274 0 0 0 1.802-.157l1.853-2.205Zm.528-9.584-.207.245a.64.64 0 0 1-.901.079l-.492-.412a.64.64 0 0 1-.078-.902l2.059-2.451a3.206 3.206 0 0 1 2.451-1.142c.752 0 1.482.266 2.058.749l2.451 2.058a3.208 3.208 0 0 1 1.142 2.454 3.18 3.18 0 0 1-.752 2.055l-3.702 4.41v.003a3.204 3.204 0 0 1-4.509.39l-1.457-1.223a.642.642 0 0 1-.078-.903l.41-.488a.64.64 0 0 1 .901-.079l1.459 1.224a1.286 1.286 0 0 0 1.802-.157l3.706-4.413c.192-.23.3-.521.3-.822 0-.378-.169-.736-.457-.979l-2.452-2.058a1.274 1.274 0 0 0-1.801.157l-1.853 2.205Z"
            />
        </svg>
    `),ta=new b("CheckMark24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),ra=new b("ChevronDown24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Z1=new b("ChevronUp24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),D1=new b("Circle24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),nt=new b("CircleDot24Icon",$`
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
                stroke="${y.stroke()}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${y.fill()}"
                stroke="${y.fill()}"
                stroke-width="2"
            />
        </svg>
    `),O1=new b("CirclePlusFill24Icon",$`
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
                fill="${y.fill()}"
                stroke="none"
                d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm-1 9H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2Z"
            />
        </svg>
    `),z1=new b("CirclePlusOutline24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),H1=new b("CircleWavyCheck24Icon",$`
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
                fill="${y.fill()}"
                stroke="none"
                d="M4.93 19.07c.49.48 1.15.7 1.9.75.63.04 1.35-.08 1.87.14.52.22.96.81 1.45 1.23.57.5 1.2.81 1.85.81.65 0 1.28-.32 1.86-.81.5-.42.94-1.02 1.44-1.23.5-.21 1.22-.09 1.86-.14a2.93 2.93 0 0 0 1.9-.75c.49-.48.7-1.15.76-1.9.04-.63-.08-1.35.14-1.87.22-.52.81-.96 1.23-1.45.5-.57.81-1.2.81-1.85 0-.65-.32-1.28-.81-1.86-.42-.5-1.02-.94-1.23-1.44-.21-.5-.09-1.22-.14-1.86a2.93 2.93 0 0 0-.75-1.9 2.9 2.9 0 0 0-1.9-.76c-.63-.04-1.35.08-1.87-.14-.52-.22-.96-.81-1.45-1.23A2.9 2.9 0 0 0 12 2c-.65 0-1.28.32-1.86.81-.5.42-.94 1.02-1.44 1.23-.5.21-1.22.09-1.86.14-.76.06-1.43.27-1.9.75a2.9 2.9 0 0 0-.76 1.9c-.04.63.08 1.35-.14 1.87-.22.52-.81.96-1.23 1.45-.5.57-.81 1.2-.81 1.85 0 .65.32 1.28.81 1.86.42.5 1.02.94 1.23 1.44.21.5.09 1.22.14 1.86.06.76.27 1.43.75 1.9ZM8.3 12.7l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L11 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),V1=new b("Clock24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),F1=new b("Code24Icon",$`
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
            fill="${y.stroke()}"
        >
            <path
                fill-rule="nonzero"
                d="M21.393 2H2.607A2.61 2.61 0 0 0 0 4.607v14.786A2.61 2.61 0 0 0 2.607 22h18.786A2.61 2.61 0 0 0 24 19.393V4.607A2.61 2.61 0 0 0 21.393 2Zm1.902 17.393a1.904 1.904 0 0 1-1.902 1.902H2.607a1.904 1.904 0 0 1-1.902-1.902V4.607c0-1.049.853-1.903 1.902-1.903h18.786c1.049 0 1.902.854 1.902 1.903v14.786ZM21.664 6H2.336A.344.344 0 0 0 2 6.352c0 .195.15.353.336.353h19.328A.345.345 0 0 0 22 6.352.344.344 0 0 0 21.664 6ZM2.607 4.583a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm3.006 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm-1.503 0a.351.351 0 0 0 .249-.601.351.351 0 0 0-.601.249.351.351 0 0 0 .352.352Zm4.757 5.411a.351.351 0 0 0-.498 0l-3.757 3.757a.351.351 0 0 0 0 .498l3.757 3.757a.352.352 0 1 0 .498-.498L5.359 14l3.508-3.508a.351.351 0 0 0 0-.498Zm6.764 0a.352.352 0 1 0-.499.498L18.641 14l-3.509 3.508a.353.353 0 0 0 .499.498l3.757-3.757a.353.353 0 0 0 0-.498l-3.757-3.757Zm-2.008-.458a.352.352 0 0 0-.451.211l-3.006 8.266a.351.351 0 1 0 .662.24l3.006-8.266a.352.352 0 0 0-.211-.451Z"
            />
        </svg>
    `),na=new b("Copy24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),q1=new b("DotsVertical24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),W1=new b("Download24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${y.stroke()}"
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
    `),U1=new b("Edit24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),oa=new b("ExternalLink24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),G1=new b("Filter24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Y1=new b("Geometry24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),X1=new b("GridDots24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),J1=new b("HeartFill24Icon",$`
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
                fill="${y.fill()}"
                stroke="${y.stroke()}"
                stroke-width="2"
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `),Q1=new b("HeartOutline24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),K1=new b("Icp24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${Xi}"
        >
            ${Ji}
        </svg>
        </svg>
    `),e2=new b("Infinity24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),t2=new b("LayersLinked24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),r2=new b("LayoutGrid24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),n2=new b("Lifebuoy24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),o2=new b("List24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),s2=new b("ListDetails24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),i2=new b("Loader24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),a2=new b("LoaderAnimated24Icon",$`
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
            stroke="${y.stroke()}"
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
    `),l2=new b("Lock24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),c2=new b("LockOpen24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),d2=new b("Menu24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),u2=new b("Paper24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),h2=new b("Photo24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),Bn=new b("Rocket24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),sa=new b("Search24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),p2=new b("Send24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),f2=new b("ShoppingCart24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),g2=new b("Social24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),m2=new b("Square24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),v2=new b("SquareCheck24Icon",$`
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
                fill="${y.fill()}"
                stroke="none"
                d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6ZM8.3 12.7l2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L11 12.58l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),Mt=new b("Trash24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),w2=new b("Upload24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            stroke="${y.stroke()}"
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
    `),b2=new b("User24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            fill="${y.stroke()}"
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
    `),$2=new b("Users24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),y2=new b("Wallet24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),x2=new b("WorldUpload24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),k2=new b("X24Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),ia=new b("Kyc32Icon",$`
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
    `),aa=new b("FolderOff48Icon",$`
        <svg
            fill="none"
            stroke="${y.stroke()}"
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
    `),la=new b("Api64Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            fill="${y.stroke()}"
            fill-rule="nonzero"
            viewBox="0 0 64 64"
            width="64"
            height="64"
        >
            <path
                d="m58.672 15.498-.007-.049a1.979 1.979 0 0 0-.043-.2c-.004-.013-.006-.026-.011-.039a1.7 1.7 0 0 0-.228-.486 1.924 1.924 0 0 0-.123-.169l-.013-.017a1.908 1.908 0 0 0-.165-.171l-.037-.031a1.736 1.736 0 0 0-.161-.125l-.035-.024a1.678 1.678 0 0 0-.206-.117l-.014-.009L32.808 2.138a1.87 1.87 0 0 0-1.617 0L6.366 14.061a1.868 1.868 0 0 0-1.058 1.682v30.67c0 .678.368 1.303.961 1.632l24.825 13.766.003.001a1.817 1.817 0 0 0 .411.166l.056.014a2.234 2.234 0 0 0 .219.041 1.72 1.72 0 0 0 .433 0l.056-.009c.055-.009.109-.018.162-.032l.058-.014c.058-.016.114-.035.171-.056l.036-.013a2.52 2.52 0 0 0 .204-.097l.002-.001L57.73 48.045c.593-.329.962-.954.962-1.632V15.739a2.175 2.175 0 0 0-.02-.241ZM54.96 45.312 33.866 57.011v-6.578a1.867 1.867 0 0 0-3.733 0v6.578L9.04 45.314V18.771a10.728 10.728 0 0 1 5.729 2.986l3.767 4.161c-.628.797-1.431 1.914-1.655 2.755a7.168 7.168 0 0 0 .725 5.452l12.434-7.206a7.166 7.166 0 0 0-4.369-3.34c-1.113-.296-2.814-.108-3.882.112l-.285.183-4.204-4.65a14.354 14.354 0 0 0-5.748-3.514l20.447-9.82 20.763 9.972-13.529 7.502a1.866 1.866 0 0 0 1.81 3.264l13.916-7.716v11.132h-.113c0 6.121-4.979 11.1-11.1 11.1a11 11 0 0 1-5.917-1.726 5.534 5.534 0 0 0-1.257-5.899l-1.422 1.42-2.756-2.755-.002.002a.923.923 0 1 0-1.305 1.306l2.755 2.755-2.392 2.392-2.837-2.837-.002.002a.925.925 0 0 0-1.306 1.306l2.838 2.837-1.422 1.42a5.534 5.534 0 0 0 6.682.889 14.716 14.716 0 0 0 8.344 2.587c4.48 0 8.497-2.003 11.213-5.157v5.626Z"
            />
        </svg>
    `),C2=new b("CircleDashes64Icon",$`
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
            fill="${y.stroke()}"
        >
            <path
                d="M18.769 37.78a3.053 3.053 0 0 1-2.989-2.457 16.934 16.934 0 0 1 2.354-12.479 16.912 16.912 0 0 1 3.799-4.186 16.882 16.882 0 0 1 5.873-3.003 17 17 0 0 1 12.017 1.037 3.051 3.051 0 0 1-2.643 5.498 10.9 10.9 0 0 0-7.709-.666 10.828 10.828 0 0 0-3.763 1.925 10.852 10.852 0 0 0-2.437 2.683 11.006 11.006 0 0 0-1.506 8.004 3.05 3.05 0 0 1-2.996 3.644Zm13.699 11.221a17.102 17.102 0 0 1-6.499-1.283 3.05 3.05 0 0 1 2.322-5.641 10.9 10.9 0 0 0 7.085.425 10.809 10.809 0 0 0 3.815-1.94 10.81 10.81 0 0 0 2.8-3.295 10.908 10.908 0 0 0 1.205-7.058 3.049 3.049 0 1 1 6.017-1c.287 1.721.306 3.47.058 5.2a16.943 16.943 0 0 1-6.304 10.944 16.885 16.885 0 0 1-5.956 3.026 16.903 16.903 0 0 1-4.543.622ZM32.093 62A29.9 29.9 0 0 1 5.161 45.097a3.051 3.051 0 0 1 5.491-2.659c4.804 9.918 15.698 15.233 26.494 12.925a23.959 23.959 0 0 0 6.3-2.302 3.048 3.048 0 0 1 4.129 1.247 3.051 3.051 0 0 1-1.249 4.13 30.093 30.093 0 0 1-7.904 2.891 30.291 30.291 0 0 1-6.329.671ZM54.5 50.09a3.051 3.051 0 0 1-2.527-4.754c3.652-5.428 4.91-11.939 3.541-18.335C54.15 20.62 50.352 15.2 44.818 11.739a3.05 3.05 0 1 1 3.234-5.172c6.947 4.344 11.715 11.148 13.428 19.158 1.717 8.03.138 16.203-4.446 23.017A3.05 3.05 0 0 1 54.5 50.09ZM5.218 34.128l-.103-.001a3.05 3.05 0 0 1-2.946-3.151A29.932 29.932 0 0 1 25.878 2.668c2.762-.59 5.577-.79 8.372-.597a3.05 3.05 0 0 1-.423 6.086 23.914 23.914 0 0 0-6.673.476A23.846 23.846 0 0 0 8.265 31.18a3.05 3.05 0 0 1-3.047 2.948Z"
            />
        </svg>
    `),M2=new b("Rocket64Icon",$`
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
            stroke="${y.stroke()}"
            stroke-width="4"
        >
            <path
                d="M61.733 2.813a.629.629 0 0 0-.476-.489c-7.85-1.92-25.984 4.921-35.819 14.748a42.506 42.506 0 0 0-4.776 5.642c-3.032-.275-6.063-.044-8.644 1.082C4.729 27.001 2.609 35.37 2.017 38.963a1.294 1.294 0 0 0 .829 1.427c.187.069.387.095.586.075l11.702-1.285c.008.883.061 1.764.159 2.642a2.62 2.62 0 0 0 .765 1.6l4.531 4.532c.429.433.996.704 1.603.765.872.097 1.748.15 2.626.159L23.534 60.57a1.296 1.296 0 0 0 .402 1.076 1.3 1.3 0 0 0 1.098.337c3.594-.577 11.981-2.698 15.167-9.985 1.126-2.584 1.357-5.599 1.097-8.616a42.377 42.377 0 0 0 5.658-4.777c9.87-9.816 16.668-27.551 14.777-35.792ZM38.182 25.889a6.166 6.166 0 0 1-1.337-6.717 6.166 6.166 0 0 1 5.695-3.806 6.164 6.164 0 0 1 4.358 10.523 6.154 6.154 0 0 1-8.716 0ZM10.896 45.858a6.505 6.505 0 0 0-3.804 1.854c-2.543 2.552-2.784 12.004-2.784 12.004s9.458-.241 12.003-2.787a6.46 6.46 0 0 0 1.855-3.807"
            />
        </svg>
    `),S2=new b("EntrepotLogo144Icon",$`
        <svg
            height="134"
            width="144"
            viewBox="0 0 134 144"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="${y.fill()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `),A2=new b("BrandDiscord24Icon",$`
        <svg
            fill="${y.fill("#5865f2")}"
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
    `),I2=new b("BrandIcScan24Icon",$`
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
    `),E2=new b("BrandInstagram24Icon",$`
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
    `),T2=new b("BrandInstagramFlat24Icon",$`
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
            fill="${y.fill()}"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `),P2=new b("BrandTelegram24Icon",$`
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
            fill="${y.fill("#2AABEE")}"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `),B2=new b("BrandTiktok24Icon",$`
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
    `),L2=new b("BrandTiktokFlat24Icon",$`
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
            fill="${y.fill()}"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `),_2=new b("BrandTwitch24Icon",$`
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
            fill="${y.fill("#9146FF")}"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `),R2=new b("BrandTwitter24Icon",$`
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
            fill="${y.fill("#41ABE1")}"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `),wt={"core-16":[w1,b1,y1,kt],"core-24":[x1,k1,Jn,C1,Qi,Qn,Pn,P1,B1,L1,_1,R1,N1,j1,ta,ra,Z1,D1,nt,O1,z1,H1,V1,F1,na,q1,W1,U1,oa,G1,Y1,X1,J1,Q1,K1,e2,t2,r2,n2,o2,s2,i2,a2,l2,c2,d2,u2,h2,Bn,sa,p2,f2,g2,m2,v2,Mt,w2,b2,$2,y2,x2,k2],"core-32":[ia],"core-48":[aa],"core-64":[la,C2,M2],logos:[S2],"third-party-brands":[A2,I2,E2,T2,P2,B2,L2,_2,R2]},Cs="toniq-",{defineElement:fe,defineElementNoInputs:Jd}=ei({assertInputs:e=>{if(!e.tagName.startsWith(Cs))throw new Error(`Tag name should start with '${Cs}' but got '${e.tagName}'`)}}),m=fe()({tagName:"toniq-icon",styles:f`
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
    `,renderCallback:({inputs:e})=>h`
            ${e.icon?ll(e.icon.svgString):""}
        `}),Ln=f`8px`,O=fe()({tagName:"toniq-button",hostClasses:{secondary:!1,outline:!1,disabled:!1},styles:({hostClassSelectors:e,hostClassNames:t})=>f`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ue};
        }

        :host(:hover) button {
            ${j(x.accentPrimaryHover)};
        }

        :host(:active) button {
            ${j(x.accentPrimaryActive)};
        }

        button {
            ${Ze};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Ln};
            ${j(x.accentPrimary)};
            padding: 10px;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                border-color ${Y.interaction};
        }

        ${je({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e.secondary} button {
            ${j(x.accentSecondary)};
        }

        ${e.outline} button {
            ${j(x.pagePrimary)};
            border-color: ${x.accentPrimary.backgroundColor};
        }

        ${e.disabled} {
            ${S1};
        }

        :host(.${t.secondary}:hover) button,
        :host(.${t.outline}:hover) button {
            border-color: ${x.accentPrimaryHover.backgroundColor};
        }

        :host(.${t.secondary}:active) button,
        :host(.${t.outline}:active) button {
            border-color: ${x.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${m}
                      class="icon-template"
                      ${g(m,{icon:e.icon})}
                  ></${m}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button>
                <slot>${t} ${r}</slot>
            </button>
        `}}),ca=K({title:"Toniq Button",parent:pe});function nr(e){return[{title:"Text",render(){return h`
                    <${O}
                        class=${e}
                        ${g(O,{text:"Button"})}
                    ></${O}>
                `}},{title:"Icon",render(){return h`
                    <${O}
                        class=${e}
                        ${g(O,{icon:Mt})}
                    ></${O}>
                `}},{title:"Toggling icon",stateInit:{showIcon:!0},render({state:t,updateState:r}){return setTimeout(()=>{r({showIcon:!t.showIcon})},1e3),h`
                    <${O}
                        class=${e}
                        ${g(O,t.showIcon?{icon:Mt,text:"icon"}:{text:"no icon"})}
                    ></${O}>
                `}},{title:"Text + Icon",render(){return h`
                    <${O}
                        class=${e}
                        ${g(O,{text:"Button",icon:Mt})}
                    ></${O}>
                `}},{title:"HTML child",render(){return h`
                    <${O} class=${e} ${g(O,{})}>
                        <span>HTML Child</span>
                    </${O}>
                `}},{title:"Sizable",render(){return h`
                    <${O}
                        class=${e}
                        style="height: 100px; width: 200px;"
                        ${g(O,{text:"bigger"})}
                    ></${O}>
                `}}]}const N2=Se({[O.tagName]:nr(""),[O.hostClasses.secondary]:nr(O.hostClasses.secondary),[O.hostClasses.outline]:nr(O.hostClasses.outline),[O.hostClasses.disabled]:nr(O.hostClasses.disabled)},(e,t)=>ee({title:e,examples:t,parent:ca})),j2=[ca,...Object.values(N2)];function Z2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}const D2=["january","february","march","april","may","june","july","august","september","october","november","december"];D2.map(e=>e.slice(0,3));const da=globalThis.crypto;function O2({min:e,max:t}){const{min:r,max:n}=Z2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,s=Math.ceil(Math.log2(o)/8),i=Math.floor(256**s/o)*o,a=new Uint8Array(s);let l;do da.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=i);return r+l%o}function z2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return da.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function H2(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",s=t==="right"||t==="down"?"+":"-",i=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,a=eo(e)[o];s==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=a.filter(d=>s==="+"?d>l:d<l).sort((d,p)=>s==="+"?d-p:p-d);let u;return c.length>0?u=c[0]:s==="+"?u=i:u=0,e.scrollTo({...r,[o==="x"?"left":"top"]:u})}function V2(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),s=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function a(p,w){let v=parseFloat(p);return/%/.test(p)&&(v/=100,v*=w),v}let l=a(n,r.width),c=a(o,r.height),u=a(s,r.width),d=a(i,r.height);return{x:{before:l,after:u},y:{before:c,after:d}}}function F2(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function ua(e){let t=[];for(const r of e.children)t=t.concat(r,ua(r));return t}function q2(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=ua(e);for(const s of["x","y"]){const i=s==="x"?"y":"x",a=s==="x"?"left":"top",l=s==="x"?"width":"height",c=s==="x"?"scrollLeft":"scrollTop";for(const u of o){const d=u.getBoundingClientRect();if(t&&!F2(r,d,i))continue;const p=window.getComputedStyle(u);let[w,v]=p.getPropertyValue("scroll-snap-align").split(" ");typeof v>"u"&&(v=w);const k=s==="x"?v:w,M=d[a]-r[a]+e[c];switch(k){case"none":break;case"start":n[s].start.push(M);break;case"center":n[s].center.push(M+d[l]/2);break;case"end":n[s].end.push(M+d[l]);break}}}return n}function eo(e){const t=e.getBoundingClientRect(),r=V2(e),n=q2(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},s=(i,a)=>l=>Math.max(i,Math.min(a,l));return{x:Ms([...n.x.start.map(i=>i-r.x.before),...n.x.center.map(i=>i-t.width/2),...n.x.end.map(i=>i-t.width+r.x.after)].map(s(0,o.x))),y:Ms([...n.y.start.map(i=>i-r.y.before),...n.y.center.map(i=>i-t.height/2),...n.y.end.map(i=>i-t.height+r.y.after)].map(s(0,o.y)))}}function Ms(e){return Array.from(new Set(e))}const ir="templates-container",W2=4e3,q=fe()({tagName:"toniq-carousel",cssVars:{"arrow-margin":"40px"},hostClasses:{"banner-style":!1},stateInit:{currentScrollPosition:{left:0,right:1/0},templatesWrapperHeight:0,scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVarValues:e,hostClassSelectors:t})=>f`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        .${L(ir)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }

        .${L(ir)} {
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
        }

        ${t["banner-style"]} .arrow {
            background: none;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow.right::after {
            left: unset;
            right: 0;
        }

        .arrow ${m} {
            transition: ${Y.pretty};
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["arrow-margin"]};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${j(x.pagePrimary)};
        }

        .hidden {
            /*
                Don't set opacity: 0 here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback:({inputs:e,state:t,updateState:r,host:n})=>{e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{nn({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||W2)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Ss(t.scrollSnapPositions,0),s=Ss(t.scrollSnapPositions,-1);return h`
            <div
                ${vn(()=>{r({scrollSnapPositions:eo(_n(n)).x})})}
                class=${ir}
                ${C("scroll",async i=>{const a=i.target;if(!(a instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:a.scrollLeft,right:a.scrollWidth-a.scrollLeft-a.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${m}
                        class=${we({hidden:t.currentScrollPosition.left<=(o??100)})}
                        ${g(m,{icon:Jn})}
                        ${C("click",()=>{nn({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${m}>
                </div>
                ${e.templates.map(i=>h`
                        <div class="template-wrapper">${i}</div>
                    `)}
                <div class="arrow right">
                    <${m}
                        class=${we({hidden:s==null?t.currentScrollPosition.right<=100:t.currentScrollPosition.left>=s})}
                        ${g(m,{icon:Qn})}
                        ${C("click",()=>{nn({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${m}>
                </div>
            </div>
        `}});function Ss(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,s=e[n],i=e[o];if(!(s==null||i==null))return(s+i)/2+r*20}function _n(e){const t=e.shadowRoot.querySelector(`.${ir}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function nn({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=_n(e),s=o.clientWidth,i=eo(_n(e)).x,a=i[0]??0,l=i.slice(-1).pop()??s,c=o.scrollLeft>=l-10,u=o.scrollLeft<=a+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:a});else if(t==="left"&&u)r&&o.scrollTo({behavior:"smooth",left:l});else{const d=U2(e,t),p=As(o.scrollLeft,i,!1),w=t==="right"?1:-1,v=(o.clientWidth-d*3)*w,k=As((p||0)+v,i,!0);t==="right"&&k>p?o.scrollTo({behavior:"smooth",left:k}):t==="left"&&k<p?o.scrollTo({behavior:"smooth",left:k}):H2(o,t)}}function U2(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function As(e,t,r){return t.reduce((o,s)=>{const i=Math.abs(e-s),a=Math.abs(e-o);return i<a&&(!r||s<=e)?s:o},1/0)}const ha=K({title:"Toniq Carousel",parent:pe}),G2=ee({title:q.tagName,parent:ha,descriptionParagraphs:["A carousel that will show multiple elements at once.","Automatic scrolling is optional."],examples:[{title:"short and fast",styles:f`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    width: 800px;
                    max-width: 100%;
                    border: 1px solid ${x.divider.foregroundColor};
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${q}
                        ${g(q,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:wt["core-24"].map(e=>{const t=f`
                                    padding: 24px;
                                    border: 1px solid ${x.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${m}
                                        style=${t}
                                        ${g(m,{icon:e})}
                                    ></${m}>
                                `})})}
                    ></${q}>
                `}},{title:"tall",styles:f`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    width: 800px;
                    max-width: 100%;
                    border: 1px solid ${x.divider.foregroundColor};
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${q}
                        ${g(q,{enableAutomaticCycling:!0,templates:wt["core-24"].map(e=>{const t=f`
                                    padding: 100px 24px;
                                    border: 1px solid ${x.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${m}
                                        style=${t}
                                        ${g(m,{icon:e})}
                                    ></${m}>
                                `})})}
                    ></${q}>
                `}},{title:"random sizes",styles:f`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    width: 800px;
                    max-width: 100%;
                    border: 1px solid ${x.divider.foregroundColor};
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${q}
                        ${g(q,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:wt["core-24"].map(e=>{const t=O2({min:0,max:150}),r=f`
                                    padding: 100px ${t}px;
                                    border: 1px solid ${x.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${m}
                                        style=${r}
                                        ${g(m,{icon:e})}
                                    ></${m}>
                                `})})}
                    ></${q}>
                `}},{title:q.hostClasses["banner-style"],styles:f`
                :host {
                    max-width: 100%;
                }

                ${q} {
                    max-width: 100%;
                    width: 800px;
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${q}
                        class=${q.hostClasses["banner-style"]}
                        ${g(q,{enableAutomaticCycling:!0,templates:wt["core-24"].map(e=>{const t=f`
                                    /* make sure this width matches the ToniqCarousel width */
                                    width: 800px;
                                    padding: 100px 0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-sizing: border-box;
                                    border: 1px solid ${x.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${m}
                                        style=${t}
                                        ${g(m,{icon:e})}
                                    ></${m}>
                                `})})}
                    ></${q}>
                `}}]}),Y2=[ha,G2],B=fe()({tagName:"toniq-checkbox",events:{checkedChange:Pe()},hostClasses:{},cssVars:{uncheckedCheckboxColor:String(ae("accentSecondary","backgroundColor")),uncheckedLabelColor:String(ae("pagePrimary","foregroundColor")),checkedCheckboxColor:String(ae("accentPrimary","backgroundColor")),checkedCheckColor:String(ae("accentPrimary","foregroundColor")),checkedLabelColor:String(ae("pageInteraction","foregroundColor"))},styles:({cssVarValues:e,cssVarNames:t})=>f`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                opacity ${Y.interaction};
            border-radius: 8px;
        }

        button {
            ${Ze};
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
            ${Ue};
            transition: inherit;
            text-align: start;
            color: ${e.uncheckedLabelColor};
        }

        .checkbox.checked {
            background-color: ${e.checkedCheckboxColor};
            color: ${e.checkedCheckColor};
        }

        .label.checked {
            color: ${e.checkedLabelColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${e.uncheckedCheckboxColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
        }

        ${je({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e.checkedCheckColor};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,renderCallback:({inputs:e,dispatch:t,events:r})=>{const n=h`
            <span class="checkbox ${e.checked?"checked":""}">
                <${m}
                    class="check-mark ${we({hidden:!e.checked})}"
                    ${g(m,{icon:ta})}
                ></${m}>
            </span>
        `,o=h`
            <slot
                class=${we({label:!0,checked:e.checked})}
            >
                <span
                    class=${we({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return h`
            <button
                class="wrapper ${e.checked?"checked":""}"
                ${C("click",()=>{const s=!e.checked;t(new r.checkedChange(s))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}}),pa=K({title:"Toniq Checkbox",parent:pe}),X2=ee({title:B.tagName,parent:pa,examples:[{title:"Unchecked",stateInit:{checked:!1},render({state:e,updateState:t}){return h`
                    <${B}
                        ${g(B,{checked:e.checked,text:"My Checkbox"})}
                        ${C(B.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${B}>
                `}},{title:"Checked",stateInit:{checked:!0},render({state:e,updateState:t}){return h`
                    <${B}
                        ${g(B,{checked:e.checked,text:"My Checkbox"})}
                        ${C(B.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${B}>
                `}},{title:"HTML Child",stateInit:{checked:!1},render({state:e,updateState:t}){return h`
                    <${B}
                        ${g(B,{checked:e.checked})}
                        ${C(B.events.checkedChange,r=>{t({checked:r.detail})})}
                    >
                        With HTML Child
                    </${B}>
                `}},{title:"Custom CSS Vars",stateInit:{checked:!1},styles:f`
                :host {
                    ${B.cssVarNames.uncheckedCheckboxColor}: red;
                    ${B.cssVarNames.uncheckedLabelColor}: orange;
                    ${B.cssVarNames.checkedCheckboxColor}: green;
                    ${B.cssVarNames.checkedCheckColor}: blue;
                    ${B.cssVarNames.checkedLabelColor}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${B}
                        ${g(B,{checked:e.checked,text:"wild colors"})}
                        ${C(B.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${B}>
                    <${B}
                        ${g(B,{checked:!e.checked,text:`wild colors (${e.checked?"unchecked":"checked"})`})}
                        ${C(B.events.checkedChange,r=>{t({checked:!r.detail})})}
                    ></${B}>
                `}},{title:"Multiple",stateInit:{checkedShort:!1,checkedLong:!1},styles:f`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${B}
                        ${g(B,{checked:e.checkedShort,text:"Short"})}
                        ${C(B.events.checkedChange,r=>{t({checkedShort:r.detail})})}
                    ></${B}>
                    <${B}
                        ${g(B,{checked:e.checkedLong,text:"With much longer checkbox label string"})}
                        ${C(B.events.checkedChange,r=>{t({checkedLong:r.detail})})}
                    ></${B}>
                `}}]}),J2=[pa,X2],W=fe()({tagName:"toniq-chip",hostClasses:{secondary:!1},styles:({hostClassSelectors:e})=>f`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${U.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${j(x.accentPrimary)};
        }

        ${e.secondary} {
            ${j(x.accentSecondary)};
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${m}
                      ${g(m,{icon:e.icon})}
                  ></${m}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}}),fa=K({title:"Toniq Chip",parent:pe});function Is(e){return[{title:"Text",render(){return h`
                    <${W}
                        class=${e}
                        ${g(W,{text:"Toniq Chip Text"})}
                    ></${W}>
                `}},{title:"Text + Icon",render(){return h`
                    <${W}
                        class=${e}
                        ${g(W,{text:"Toniq Chip Text",icon:kt})}
                    ></${W}>
                `}},{title:"HTML Child",render(){return h`
                    <${W} class=${e} ${g(W,{})}>
                        Slot in Use
                    </${W}>
                `}},{title:"HTML + Icon",render(){return h`
                    <${W}
                        class=${e}
                        ${g(W,{icon:kt})}
                    >
                        Slot in Use
                    </${W}>
                `}},{title:"custom size",styles:f`
                ${W} {
                    width: 150px;
                    height: 24px;
                }
            `,render(){return h`
                    <${W}
                        class=${e}
                        ${g(W,{icon:kt})}
                    >
                        Slot in Use
                    </${W}>
                `}}]}const Q2=Se({[W.tagName]:Is(""),[W.hostClasses.secondary]:Is(W.hostClasses.secondary)},(e,t)=>ee({title:e,examples:t,parent:fa})),K2=[fa,...Object.values(Q2)],ed="data-test-id",ot=Ne(class extends Ge{constructor(e){super(e),this.element=td(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(ed,e),he}});function td(e,t,r){rd(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function rd(e,t){if(e.type!==jt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}const R=fe()({tagName:"toniq-dropdown",stateInit:{dropdownOpen:!1},events:{selectChange:Pe()},styles:f`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${U.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${Ze}
            border-radius: 8px;
            outline: none;
        }

        ${je({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            will-change: filter;
        }

        .dropdown.open,
        .dropdown.open .select {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
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
            ${Ue};
            ${j(x.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 8px;
            ${j(x.pagePrimary)}
            ${T1.popupShadow};
        }

        .selected-label-prefix {
            ${U.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ue};
        }

        .select-options .option.selected {
            ${j(x.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${x.accentTertiary.backgroundColor};
        }

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var a;const s=(a=t.shadowRoot)==null?void 0:a.querySelector("button.dropdown");!o.composedPath().includes(s)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback:({dispatch:e,events:t,state:r,inputs:n,updateState:o})=>{const s=n.selected?n.selected:n.options[0];function i(){o({dropdownOpen:!r.dropdownOpen})}function a(u){o({dropdownOpen:!1}),e(new t.selectChange(u))}const l=n.icon?h`
                  <${m}
                      ${ot("rendered-input-icon")}
                      ${g(m,{icon:n.icon})}
                  ></${m}>
              `:"",c=n.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                class="dropdown ${r.dropdownOpen?"open":""}"
                @click=${()=>i()}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${l}
                    <span class="select-selected">${c} ${s==null?void 0:s.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${m}
                            class="trigger-icon"
                            ${g(m,{icon:ra})}
                        ></${m}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(u=>h`
                                <span
                                    class="option ${u.value===(s==null?void 0:s.value)?"selected":""}"
                                    @click=${d=>{d.preventDefault(),d.stopPropagation(),a(u)}}
                                    role="option"
                                >
                                    ${u.label}
                                </span>
                            `)}
                </div>
            </button>
        `}}),ga=K({title:"Toniq Dropdown",parent:pe}),Ie=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],nd=ee({title:R.tagName,parent:ga,examples:[{title:"Default",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"With Icon",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected,icon:Pn})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"With Icon + Prefix",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected,icon:Pn,selectedLabelPrefix:"Sort By:"})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"Defaulted to an option",stateInit:{selected:Ie[3]},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"Custom size",stateInit:{selected:void 0},styles:f`
                ${R} {
                    width: 500px;
                    height: 100px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"Squished",stateInit:{selected:void 0},styles:f`
                ${R} {
                    max-height: 20px;
                    min-height: 20px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}},{title:"No background",stateInit:{selected:void 0},styles:f`
                ${R} {
                    ${Kn.accentSecondary.backgroundColor}: transparent;
                }
            `,render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{options:Ie,selected:e.selected})}
                        ${C(R.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${R}>
                `}}]}),od=[ga,nd],ma=K({title:"Toniq Icon",parent:pe}),sd=Se({[m.tagName]:[{title:"With Icon",render(){return h`
                        <${m}
                            ${g(m,{icon:Mt})}
                        ></${m}>
                    `}},{title:"Without Icon",render(){return h`
                        <${m}
                            ${g(m,{icon:void 0})}
                        ></${m}>
                    `}},{title:"64px icon",render(){return h`
                        <${m}
                            ${g(m,{icon:la})}
                        ></${m}>
                    `}},{title:"48px icon",render(){return h`
                        <${m}
                            ${g(m,{icon:aa})}
                        ></${m}>
                    `}},{title:"32px icon",render(){return h`
                        <${m}
                            ${g(m,{icon:ia})}
                        ></${m}>
                    `}},{title:"24px icon",render(){return h`
                        <${m}
                            ${g(m,{icon:Qi})}
                        ></${m}>
                    `}},{title:"16px icon",render(){return h`
                        <${m}
                            ${g(m,{icon:kt})}
                        ></${m}>
                    `}}],[`${m.tagName} colors`]:[{title:"Inherited",render(){return h`
                        <${m}
                            ${g(m,{icon:nt})}
                        ></${m}>
                    `}},{title:'Using "color"',styles:f`
                    :host {
                        color: red;
                    }
                `,render(){return h`
                        <${m}
                            ${g(m,{icon:nt})}
                        ></${m}>
                    `}},{title:ke.color,styles:f`
                    :host {
                        ${L(ke.color)}: red;
                    }
                `,render(){return h`
                        <${m}
                            ${g(m,{icon:nt})}
                        ></${m}>
                    `}},{title:ke.strokeColor,styles:f`
                    :host {
                        ${L(ke.strokeColor)}: red;
                    }
                `,render(){return h`
                        <${m}
                            ${g(m,{icon:nt})}
                        ></${m}>
                    `}},{title:ke.fillColor,styles:f`
                    :host {
                        ${L(ke.fillColor)}: red;
                    }
                `,render(){return h`
                        <${m}
                            ${g(m,{icon:nt})}
                        ></${m}>
                    `}}]},(e,t)=>ee({title:e,examples:t,parent:ma})),id=[ma,...Object.values(sd)];function Rn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Rn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function va({value:e,allowed:t,blocked:r}){const n=t?Rn({input:e,matcher:t}):!0,o=r?Rn({input:e,matcher:r}):!1;return n&&!o}function Es(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(va({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const A=fe()({tagName:"toniq-input",hostClasses:{outline:!1,hasAValue:({inputs:e})=>!!e.value},events:{valueChange:Pe(),inputBlocked:Pe()},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
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
                border-radius: ${Ln};
                z-index: 0;
                pointer-events: none;
            }

            ${t.outline} label {
                background-color: ${x.pagePrimary.backgroundColor};
                border: 1px solid ${x.pageTertiary.foregroundColor};
            }

            ${t.outline} ${m} {
                color: ${x.pageSecondary.foregroundColor};
            }

            :host(.${e.hasAValue}.${e.outline}) ${m} {
                color: ${x.pagePrimary.foregroundColor};
            }

            ${t.outline} input::placeholder {
                color: ${x.pageSecondary.foregroundColor};
            }

            label {
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 12px 16px;
                border-radius: ${Ln};
                background-color: ${x.accentTertiary.backgroundColor};
                font: ${U.paragraphFont};
            }

            ${je({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${m} {
                margin-right: 10px;
            }

            input {
                ${Ze};
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
        `,renderCallback:({inputs:e,dispatch:t,events:r})=>{const{filtered:n}=Es({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?h`
                  <${m} ${g(m,{icon:e.icon})}></${m}>
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
                    ${C("input",s=>{if(!(s instanceof InputEvent))throw new Error(`Input event type mismatch: "${s.constructor.name}"`);const i=s.target;if(!(i instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const a=s.data,l=n;let c=i.value??"";if(a)if(a.length===1)va({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(a)));else{const{filtered:u,blocked:d}=Es({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});c=u,t(new r.inputBlocked(d))}i.value!==c&&(i.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                <div class="focus-border"></div>
            </label>
        `}});A.hostClasses.outline;const wa=K({title:"Toniq Input",parent:pe}),ad=ee({title:A.tagName,parent:wa,examples:[{title:"Assigned value",stateInit:{value:"init value"},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Placeholder",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"my placeholder"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Icon",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"with icon",icon:sa})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Custom size (big)",stateInit:{value:""},styles:f`
                ${A} {
                    height: 75px;
                    width: 300px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"stretched"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Custom size (small)",stateInit:{value:""},styles:f`
                ${A} {
                    height: 40px;
                    width: 140px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,placeholder:"squished"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"Outline style",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        class=${A.hostClasses.outline}
                        ${g(A,{value:e.value,placeholder:"outline"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:'Letter "a" blocked',stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,blockedInputs:"a",placeholder:"try typing a"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"only numbers allowed",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,allowedInputs:/\d/})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"disabled",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,disabled:!0,placeholder:"cannot select"})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}},{title:"no browser auto-helps",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${A}
                        ${g(A,{value:e.value,placeholder:'try typing "im"',disableBrowserHelps:!0})}
                        ${C(A.events.valueChange,r=>{t({value:r.detail})})}
                    ></${A}>
                `}}]}),ld=[wa,ad];async function cd(e){return navigator.clipboard.writeText(e)}const dd="…";function ud(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${dd}${n}`}function hd(e){return!(e%1)}function pd(e){return e.letterCount==null?4:hd(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const z=fe()({tagName:"toniq-middle-ellipsis",events:{copied:Pe()},cssVars:{textColor:x.pagePrimary.foregroundColor,iconColor:x.pagePrimary.foregroundColor,textHoverColor:x.pageInteraction.foregroundColor,iconHoverColor:x.pageInteraction.foregroundColor},styles:({hostClassNames:e,cssVarValues:t})=>f`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Y.interaction};
            ${U.paragraphFont};
            color: ${t.textColor};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.${e.clickable}:hover) {
            color: ${t.textHoverColor};
        }

        :host(.${e.clickable}:hover) ${m} {
            color: ${t.iconHoverColor};
        }

        ${m} {
            margin-left: 4px;
            color: ${t.iconColor};
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
            ${Ze};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${je({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${Y.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{clickable:({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInit:{showCopiedTextTimeoutId:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{if(!e.text)return h``;const s=e.text,i=pd(e),a=!!e.externalLink,l=!!e.copyOnClick,c=s.length>i*2+2,u=c?ud(s,i):s,d=c?s:"",p=a?oa:l?na:void 0,w=p?h`
                  <${m} ${g(m,{icon:p})}></${m}>
              `:"",v=h`
            <span title=${d} class="text-content">
                ${xr(!!e.copyOnClick,h`
                        <span
                            class=${we({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${u}
            </span>
        `;return u?a?h`
                    <button
                        tabindex="0"
                        role="link"
                        ${C("click",k=>{var I,E;const M=(E=(I=k.currentTarget)==null?void 0:I.querySelector)==null?void 0:E.call(I,"a");if(!M)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");M.click()})}
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
                            ${v} ${w}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${C("click",async()=>{await cd(s),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${v} ${w}
                    </button>
                `:h`
                    ${v}
                `:h``}}),ba=K({title:"Toniq Middle Ellipsis",parent:pe}),fd=ee({title:z.tagName,parent:ba,examples:[{title:"Long text",render(){return h`
                    <${z}
                        ${g(z,{text:"Long string instead of text"})}
                    ></${z}>
                `}},{title:"Short text",render(){return h`
                    <${z}
                        ${g(z,{text:"Short text"})}
                    ></${z}>
                `}},{title:"External Link",render(){return h`
                    <${z}
                        ${g(z,{text:"Long text with link",externalLink:"https://bioniq.io"})}
                    ></${z}>
                `}},{title:"Copyable",render(){return h`
                    <${z}
                        ${g(z,{text:"Long text that you can copy",copyOnClick:!0})}
                    ></${z}>
                `}},{title:"Custom CSS vars",styles:f`
                ${z} {
                    ${z.cssVarNames.iconColor}: red;
                    ${z.cssVarNames.iconHoverColor}: blue;
                    ${z.cssVarNames.textColor}: green;
                    ${z.cssVarNames.textHoverColor}: purple;
                }
            `,render(){return h`
                    <${z}
                        ${g(z,{text:"long text with custom colors",copyOnClick:!0})}
                    ></${z}>
                `}}]}),gd=[ba,fd],_=fe()({tagName:"toniq-radio-group",stateInit:{randomGroupName:""},events:{valueChange:Pe()},cssVars:{uncheckedRadioColor:String(ae("pagePrimary","foregroundColor")),uncheckedLabelColor:String(ae("pagePrimary","foregroundColor")),checkedRadioColor:String(ae("accentPrimary","backgroundColor")),checkedLabelColor:String(ae("pageInteraction","foregroundColor")),disabledColor:String(ae("pageSecondary","foregroundColor"))},styles:({cssVarValues:e})=>f`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            transition: color ${Y.interaction},
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
            color: ${e.uncheckedLabelColor};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${e.checkedRadioColor};
            outline: none;
            text-align: inherit;
        }

        button {
            ${Ze}
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
            border: 2px solid ${e.uncheckedRadioColor};
            border-radius: 50%;
            transition: ${Y.interaction};
            --color-stop: -10%;
            background-image: radial-gradient(
                ${e.checkedRadioColor} var(--color-stop),
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

        ${je({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e.checkedLabelColor};
        }

        .wrapper.disabled {
            color: ${e.disabledColor};
            cursor: not-allowed;
        }

        .wrapper.disabled::before {
            border-color: ${e.disabledColor};
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:z2()})},renderCallback:({inputs:e,dispatch:t,events:r,state:n})=>md(e.entries).map(s=>vd(e.groupName||n.randomGroupName,e.value,s,()=>{t(new r.valueChange(s.value))}))});function md(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${_.tagName} was given duplicate entry values.`),Object.values(t)}function vd(e,t,r,n){const o=t===r.value,s=h`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${we({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${C("click",()=>{n()})}
        >
            <input
                ${C("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${s}
        </button>
    `}const $a=K({title:"Toniq Radio Group",parent:pe}),gt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],se={basic:gt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...gt.slice(1)],disabled:[{...gt[0],disabled:!0},...gt.slice(1)],noLabels:s1(gt,e=>({...e,label:void 0}))},wd=ee({title:_.tagName,parent:$a,examples:[{title:"Default",stateInit:{selectedValue:se.basic[0].value},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{entries:se.basic,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Inline",stateInit:{selectedValue:se.basic[0].value},styles:f`
                ${_} {
                    flex-direction: row;
                }
            `,render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{entries:se.basic,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Restricted width",stateInit:{selectedValue:se.longText[0].value},styles:f`
                ${_} {
                    max-width: 200px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{entries:se.longText,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"No labels",stateInit:{selectedValue:se.noLabels[0].value},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{entries:se.noLabels,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Entry 1 disabled",stateInit:{selectedValue:se.disabled[1].value},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{entries:se.disabled,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}},{title:"Custom CSS vars",stateInit:{selectedValue:se.basic[0].value},styles:f`
                ${_} {
                    ${_.cssVarNames.checkedLabelColor}: red;
                    ${_.cssVarNames.checkedRadioColor}: blue;
                    ${_.cssVarNames.uncheckedLabelColor}: green;
                    ${_.cssVarNames.uncheckedRadioColor}: pink;
                }
            `,render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{entries:se.basic,value:e.selectedValue})}
                        ${C(_.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${_}>
                `}}]}),bd=[$a,wd],P={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},mt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function $d(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${P.lowerLabelWrapper} .${P.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${P.upperLabelWrapper} .${P.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getBoundingClientRect(),i=r.getBoundingClientRect();return{lower:s,upper:i}}else return}function yd(e,t=8){const r=$d(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function on({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function _t(e){return h1(e)&&e.min!==void 0&&e.max!==void 0}function Nn(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${P.range}`);return(t==null?void 0:t.clientWidth)??0}function sn(e,t,r){return`${r?v1(e):e} ${t}`}function xd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function kd({value:e,double:t,min:r,max:n}){return t?_t(e)?{min:Ct(e.min,r,Math.min(e.max,n)),max:Ct(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:_t(e)?r:Ct(e,r,n)}function Cd({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:_t(e)?{min:rn(n,e.min),max:rn(n,e.max)}:rn(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function an(e,t,r){return r?t[e]||0:e}function Md(e){return{actualLimits:xd(e),actualValue:kd(e)}}function Sd(e,t){var n,o,s;let r=!1;if(_t(e)){const i=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${P.lowerSlider}`),a=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${P.upperSlider}`);i instanceof HTMLInputElement&&a instanceof HTMLInputElement&&(Number(i.value)!==e.min&&(i.value=String(e.min),r=!0),Number(a.value)!==e.max&&(a.value=String(e.max),r=!0))}else{const i=(s=t.shadowRoot)==null?void 0:s.querySelector(`.${P.slider}`);i instanceof HTMLInputElement&&Number(i.value)!==e&&(i.value=String(e),r=!0)}return r}function ya(e,t){const{actualValue:r,actualLimits:n}=Md({...e}),o=A1(n.min,n.max),s=e.logScale??!1,i=e.suffix??"",{elementValue:a,elementLimits:l}=Cd({actualValue:r,actualLimits:n,logScale:s,logRange:o}),c=Nn(t);return{actualValue:r,elementLimits:l,elementValue:a,isLogScale:s,logRange:o,rangeWidth:c,suffix:i}}const He=16,Ts=f`
    ${He}px
`,Ps=f`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Ts};
    width: ${Ts};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Y.interaction};
    ${j(x.accentPrimary)};
`,Bs=f`
    transform: scale(1.2);
`;function bt(e){requestAnimationFrame(()=>{const t=ya(e.instanceInputs,e).elementValue;Sd(t,e)&&(e.setAttribute("disabled","true"),bt(e))})}const T=fe()({tagName:"toniq-slider",stateInit:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:Pe()},styles:f`
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
            ${j(x.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${j(x.accentPrimary)};
        }

        .${L(P.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${U.boldParagraphFont};
            ${Ue};
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
        ${je({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

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
            ${Ps}
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-webkit-slider-thumb {
            ${Ps}
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-webkit-slider-thumb:hover {
            ${Bs}
        }

        /* these selectors fail if combined with a comma */
        .${L(P.slider)}::-moz-range-thumb:hover {
            ${Bs}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{bt(e)}),e.addEventListener("keydown",()=>{bt(e)}),e.addEventListener("keyup",()=>{bt(e)})},renderCallback:({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:s})=>{const{actualValue:i,logRange:a,isLogScale:l,suffix:c,elementValue:u,elementLimits:d,rangeWidth:p}=ya({...e},t);if(bt(t),_t(u))return w(i,u,d);return k(i,u,d);function w(M,I,E){const F={left:rt((p-He)*(I.min-E.min)/(E.max-E.min)+He/2),right:rt((p-He)*(E.max-I.max)/(E.max-E.min)+He/2)},G=sn(M.min,c,l),ne=sn(M.max,c,l);requestAnimationFrame(()=>{const oe=yd(t);oe!==o.labelOverlap&&s({labelOverlap:oe})});const $e=(E.max-I.max)/(E.max-E.min)>.5,Ae=on({value:I.min,limits:{min:E.min,max:I.max},flip:!0}),Q=on({value:I.max,limits:{min:I.min,max:E.max},flip:!1}),De=o.labelOverlap&&$e?o.labelOverlap:0,Vt=o.labelOverlap&&!$e?o.labelOverlap:0;return h`
                <div
                    class="range"
                    ${vn(()=>{s({rangeWidth:Nn(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${F.left}; right:${F.right}"
                    ></div>
                    <span
                        class="${P.labelOuterWrapper} ${P.lowerLabelWrapper}"
                        style="left: ${F.left}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-left: ${tn(Ae)}"
                        >
                            <span
                                class="${P.labelPixelMarginWrapper}"
                                style="margin-right: ${rt(Vt)}"
                                ${ot(mt.lowerLabel)}
                            >
                                ${G}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${P.labelOuterWrapper} ${P.upperLabelWrapper} ${P.rightAlignedLabelWrapper}"
                        style="right: ${F.right}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-right: ${tn(Q)}"
                        >
                            <span
                                class="${P.labelPixelMarginWrapper}"
                                style="margin-left: ${rt(De)}"
                                ${ot(mt.upperLabel)}
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
                            class="${P.lowerSlider} ${P.slider}"
                            .min=${E.min}
                            .max=${E.max}
                            .value=${I.min}
                            ${C("input",oe=>{const Xe=oe.target,dt={...M,min:an(Number(Xe.value),a,l)};v(dt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${P.upperSlider} ${P.slider}"
                            step=${e.step}
                            .min=${E.min}
                            .max=${E.max}
                            .value=${I.max}
                            ${ot(mt.slider)}
                            ${C("input",oe=>{const Xe=oe.target,dt={...M,max:an(Number(Xe.value),a,l)};v(dt)})}
                        />
                    </div>
                </div>
            `}function v(M){s({internalValue:M}),e.disabled||n(new r.valueChange(M))}function k(M,I,E){const F=rt((p-He)*(E.max-I)/(E.max-E.min)+He/2),G=sn(M,c,l),ne=on({value:I,limits:E,flip:!1});return h`
                <div
                    class="range"
                    ${vn(()=>{s({rangeWidth:Nn(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${F}"></div>
                    <span
                        class="${P.labelOuterWrapper} ${P.rightAlignedLabelWrapper}"
                        style="right: ${F}"
                    >
                        <span
                            class="${P.labelPercentMarginWrapper}"
                            style="margin-right: ${tn(ne)}"
                            ${ot(mt.label)}
                        >
                            ${G}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${P.slider}"
                        step=${e.step}
                        .min=${E.min}
                        .max=${E.max}
                        .value=${I}
                        ${ot(mt.slider)}
                        ${C("input",$e=>{const Ae=$e.target,Q=an(Number(Ae.value),a,l);v(Q)})}
                    />
                </div>
            `}}}),xa=K({title:"Toniq Slider",parent:pe}),xe=f`
    ${T} {
        width: 300px;
    }
`,ln={min:10,max:50},Ad=ee({title:T.tagName,parent:xa,examples:[{title:"Default",stateInit:{value:20},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,...ln})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Double range",stateInit:{value:{min:10,max:72}},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{double:!0,value:e.value,min:0,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Suffix",stateInit:{value:20},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,...ln,suffix:"ICP"})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Log Scale",stateInit:{value:20},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Log Scale Double",stateInit:{value:{min:10,max:1e3}},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Decimals",stateInit:{value:{min:1.95,max:50}},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Negative min",stateInit:{value:20},styles:f`
                ${xe}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,min:-100,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Padding",stateInit:{value:20},styles:f`
                ${xe}

                ${T} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,...ln})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Padding Double",stateInit:{value:{min:10,max:72}},styles:f`
                ${xe}

                ${T} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{double:!0,value:e.value,min:0,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}}]}),Id=[xa,Ad],ie=fe()({tagName:"toniq-toggle-button",hostClasses:{textOnly:!1},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
        :host {
            ${U.boldParagraphFont};
            ${Ue};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${Ze};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${j(x.accentSecondary)};
            transition: color ${Y.interaction},
                background-color ${Y.interaction};
        }

        ${je({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${j(x.accentPrimary)};
        }

        :host(:hover) button {
            ${j(x.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${j(x.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${j(x.accentPrimaryActive)};
        }

        ${t.textOnly} button {
            ${j(x.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${t.textOnly} button.toggled {
            ${j(x.pageInteraction)};
            border-color: ${x.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e.textOnly}:hover) button.toggled {
            ${j(x.pageInteractionHover)};
        }
        :host(.${e.textOnly}:hover) button {
            color: ${x.pageInteraction.foregroundColor};
        }
        :host(.${e.textOnly}:active) button.toggled {
            ${j(x.pageInteractionActive)};
        }
        ${t.textOnly} button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${m}
                      class="icon-template"
                      ${g(m,{icon:e.icon})}
                  ></${m}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                aria-checked=${e.toggled}
            >
                ${t} ${r}
            </button>
        `}}),ka=K({title:"Toniq Toggle Button",parent:pe});function Ls(e){return[{title:"Default",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${ie}
                        class=${e}
                        ${g(ie,{toggled:t.toggled,text:"Toggle Button"})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${ie}>
                `}},{title:"Icon + text",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${ie}
                        class=${e}
                        ${g(ie,{toggled:t.toggled,icon:Bn,text:"Toggle Button"})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${ie}>
                `}},{title:"Icon only",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${ie}
                        class=${e}
                        ${g(ie,{toggled:t.toggled,icon:Bn})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${ie}>
                `}}]}const Ed=Se({[ie.tagName]:Ls(""),[ie.hostClasses.textOnly]:Ls(ie.hostClasses.textOnly)},(e,t)=>ee({title:e,examples:t,parent:ka})),Td=[ka,...Object.values(Ed)],Ca=K({title:"Icons",parent:void 0}),_s="...";function Pd(e,t,r=7,n=5){let o;e=Ct(e,1,t),r=Ct(r,n,t);const s=r-5,i=r-3;t<=r?o=r:o=e<i||e>t-i?i:s;const a={start:Math.round(e-o/2),end:Math.round(e+o/2)};(a.start-1===1||a.end+1===t)&&(a.start+=1,a.end+=1);const l=e>t-i&&t>r?cn(t-o,t):e>o?cn(Math.min(a.start,t-o),Math.min(a.end,t)):cn(1,Math.min(t,o+1));function c(d,p){return l.length+1!==t?p:[d]}const u=l[l.length-1];if(u&&u<t){const d=c(t,[_s,t]);return[...l,...d]}else return l[0]!==1?c(1,[1,_s]).concat(l):l}function cn(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}fe()({tagName:"toniq-pagination",styles:f`
        :host {
            display: flex;
        }

        button {
            ${Ze}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${Ue};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${j(x.accentSecondary)};
        }

        .control:hover {
            ${j(x.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${j(x.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${U.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${j(x.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${j(x.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:Pe()},renderCallback:({inputs:e,events:t,dispatch:r})=>e.pageCount<=1?h``:h`
                <button
                    ${C("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${m} ${g(m,{icon:Jn})}></${m}>
                </button>
                ${Pd(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?h`
                                <div class="page" disabled>${n}</div>
                            `:h`
                                <button
                                    class=${we({page:!0,selected:e.currentPage===n})}
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
                    <${m} ${g(m,{icon:Qn})}></${m}>
                </button>
            `});const Bd=Object.entries(wt).map(([e,t])=>ee({title:e,parent:Ca,examples:t.map(r=>({title:r.iconName,render(){return h`
                            <${m} ${g(m,{icon:r})}></${m}>
                        `}}))})),to=K({title:"Styles",parent:void 0});function Ma(e){const t=Ld(e),r=Se(t,(o,s)=>String(s).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return We(r).reduce((o,s)=>{const i=r[s];return i&&i[1]&&i[2]&&(o[s]={cssVarName:i[1],defaultValue:i[2]}),o},{})}function Ld(e){typeof e!="string"&&(e=String(e));const n=`{"${a1(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((i,a)=>(i[a]=o[a],i),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const _d=f`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${U.labelFont};
        ${U.monospaceFont};
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
        ${U.h2Font};
    }
`;function Rd(e,t){const r=Ma(j(t));return{title:e,styles:_d,render(){return h`
                <div class="color-example" style=${j(t)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(r).map(n=>h`
                            <span>
                                ${n.cssVarName}: ${n.defaultValue}
                            </span>
                        `)}
                </div>
            `}}}const Nd=We(x).map(e=>Rd(e,x[e])),jd=ee({title:"Toniq Colors",parent:to,examples:Nd,descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Zd=f`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${U.labelFont};
        ${U.monospaceFont};
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
`;function Dd(e,t){const r=Ma(t);return{title:e,styles:Zd,render(){return h`
                <div class="font-example" style=${t}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${We(r).map(n=>{const o=r[n];return h`
                            <div class="font-style-group">
                                <span>${n}: ${o.defaultValue}</span>
                                <span class="css-var-name">${o.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}}}const Od=We(U).map(e=>{const t=U[e];return Dd(e,t)}),zd=ee({title:"Toniq Fonts",parent:to,examples:Od,descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),Hd=[pe,Ca,to,...Bd,...j2,...Y2,...J2,...K2,...od,...id,...ld,...gd,...bd,...Id,...Td,jd,zd];yr({tagName:"toniq-design-system-app",styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${rr} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return h`
            <${rr}
                ${g(rr,{baseUrl:"toniq-labs-design-system",entries:Hd,themeColor:"#00D093",everythingTitle:"Design System"})}
            ></${rr}>
        `}});
