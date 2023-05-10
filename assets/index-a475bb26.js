var si=Object.freeze,ai=Object.defineProperty;var Ic=(e,t,r)=>t in e?ai(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ln=(e,t,r)=>(Ic(e,typeof t!="symbol"?t+"":t,r),r),cn=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var vt=(e,t,r)=>(cn(e,t,"read from private field"),r?r.call(e):t.get(e)),jt=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},dn=(e,t,r,n)=>(cn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var yr=(e,t,r)=>(cn(e,t,"access private method"),r);var un=(e,t)=>si(ai(e,"raw",{value:si(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Oe;(function(e){e.Chapter="chapter",e.Page="page",e.Root="root"})(Oe||(Oe={}));function ee(e){if(!e.title)throw new Error("Cannot have an element-book chapter with an empty title.");return{type:Oe.Chapter,...e}}function Tc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Pc=["january","february","march","april","may","june","july","august","september","october","november","december"];Pc.map(e=>e.slice(0,3));function Po(e){return e?e instanceof Error?e.message:String(e):""}function Lc(e){return e instanceof Error?e:new Error(Po(e))}function li(e){return!!e&&typeof e=="object"}const ci="Failed to compare objects using JSON.stringify";function di(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Lo(e,t){try{return e===t?!0:li(e)&&li(t)?di(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Lo(e[n],t[n])):!1:di(e,t)}catch(r){const n=Lc(r);throw n.message.startsWith(ci)||(n.message=`${ci}: ${n.message}`),n}}const Bc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Bo(e,t){return e?Bc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Js(e,t){return e&&t.every(r=>Bo(e,r))}function Wn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function _c(e){return Array.isArray(e)?"array":typeof e}function zc(e,t){return _c(e)===t}function Rc(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function jc(e){return Wn(e).filter(t=>isNaN(Number(t)))}function Nc(e){return jc(e).map(r=>e[r])}function Hc(e,t){return Nc(t).includes(e)}function Oc(e,t){let r=!1;const n=Wn(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),{...o,[i]:s}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Wn(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(s)}}):n}function Dc(e,t){try{return Fc(e,t),!0}catch{return!1}}function Fc(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Zc(e,t){return Bo(e,"type")&&e.type===t}const Or="isElementBookEntryTreeNode";function Vc(e,t){return!!(Js(e,[Or,"entry"])&&e[Or]&&e.entry.type===t)}function qc(e){return{[Or]:!0,entry:{type:Oe.Root,title:e||"Everything",parent:void 0},breadcrumb:"",children:{}}}function Un(e){return Tc(e).toLowerCase().replaceAll(/\s/g,"-")}function Wc(e,t){const r=qc(t);return e.forEach(n=>{const o=Uc(n,r),i=Un(n.title);if(i in o.children)throw new Error(`Cannot create duplicate entry '${i}' in parent '${o.breadcrumb}'.`);const s={[Or]:!0,children:{},breadcrumb:i,entry:n};o.children[i]=s}),r}function Uc(e,t){return cr(e).reverse().reduce((o,i)=>{const s=o.children[i];if(!s)throw new Error(`Failed to find parent ElementBookEntry by name of '${i}' in entry '${o.entry.title}'`);return s},t)}function cr(e,t){const r=Un(e.title);return e.parent?[Un(e.parent.title),...cr(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function Gn(e,t){if(!Dc(e,1))return t;const r=e[0],n=t.children[r];if(n)return Gn(e.slice(1),n)}function J(e){if(!e.title)throw new Error("Cannot have an element-book page with an empty title.");const t={type:Oe.Page,...e},r=cr(t,!0),n=new Set;return e.examples.forEach(o=>{const i=`Failed to define example '${r.concat(o.title).join(" > ")}'`;if(n.has(o.title))throw new Error(`${i}: example title '${o.title}' is already being used.`);if(!o.title)throw new Error(`${i}: example title is missing or empty.`);n.add(o.title)}),t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=e=>(...t)=>({_$litDirective$:e,values:t});let Ke=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hn;const Dr=window,Pt=Dr.trustedTypes,ui=Pt?Pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fr="$lit$",Re=`lit$${(Math.random()+"").slice(9)}$`,_o="?"+Re,Gc=`<${_o}>`,Lt=document,Kt=()=>Lt.createComment(""),Qt=e=>e===null||typeof e!="object"&&typeof e!="function",Xs=Array.isArray,Ks=e=>Xs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",pn=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hi=/-->/g,pi=/>/g,rt=RegExp(`>|${pn}(?:([^\\s"'>=/]+)(${pn}*=${pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fi=/'/g,gi=/"/g,Qs=/^(?:script|style|textarea|title)$/i,Yc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Jc=Yc(1),xe=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),mi=new WeakMap,Et=Lt.createTreeWalker(Lt,129,null,!1),ea=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=Nt;for(let l=0;l<r;l++){const c=e[l];let u,d,p=-1,w=0;for(;w<c.length&&(s.lastIndex=w,d=s.exec(c),d!==null);)w=s.lastIndex,s===Nt?d[1]==="!--"?s=hi:d[1]!==void 0?s=pi:d[2]!==void 0?(Qs.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=rt):d[3]!==void 0&&(s=rt):s===rt?d[0]===">"?(s=o??Nt,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?rt:d[3]==='"'?gi:fi):s===gi||s===fi?s=rt:s===hi||s===pi?s=Nt:(s=rt,o=void 0);const m=s===rt&&e[l+1].startsWith("/>")?" ":"";i+=s===Nt?c+Gc:p>=0?(n.push(u),c.slice(0,p)+Fr+c.slice(p)+Re+m):c+Re+(p===-2?(n.push(void 0),l):m)}const a=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ui!==void 0?ui.createHTML(a):a,n]};class er{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[c,u]=ea(t,r);if(this.el=er.createElement(c,n),Et.currentNode=this.el.content,r===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(o=Et.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const p of o.getAttributeNames())if(p.endsWith(Fr)||p.startsWith(Re)){const w=u[s++];if(d.push(p),w!==void 0){const m=o.getAttribute(w.toLowerCase()+Fr).split(Re),k=/([.?@])?(.*)/.exec(w);l.push({type:1,index:i,name:k[2],strings:m,ctor:k[1]==="."?ra:k[1]==="?"?na:k[1]==="@"?oa:ur})}else l.push({type:6,index:i})}for(const p of d)o.removeAttribute(p)}if(Qs.test(o.tagName)){const d=o.textContent.split(Re),p=d.length-1;if(p>0){o.textContent=Pt?Pt.emptyScript:"";for(let w=0;w<p;w++)o.append(d[w],Kt()),Et.nextNode(),l.push({type:2,index:++i});o.append(d[p],Kt())}}}else if(o.nodeType===8)if(o.data===_o)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Re,d+1))!==-1;)l.push({type:7,index:i}),d+=Re.length-1}i++}}static createElement(t,r){const n=Lt.createElement("template");return n.innerHTML=t,n}}function dt(e,t,r=e,n){var o,i,s,a;if(t===xe)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Qt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(a=r)._$Co)!==null&&s!==void 0?s:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=dt(e,l._$AS(e,t.values),l,n)),t}let ta=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Lt).importNode(n,!0);Et.currentNode=i;let s=Et.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new _t(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ia(s,this,t)),this._$AV.push(u),c=o[++l]}a!==(c==null?void 0:c.index)&&(s=Et.nextNode(),a++)}return i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class _t{constructor(t,r,n,o){var i;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=dt(this,t,r),Qt(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==xe&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ks(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&Qt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Lt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=er.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const s=new ta(i,this),a=s.u(this.options);s.v(n),this.$(a),this._$AH=s}}_$AC(t){let r=mi.get(t.strings);return r===void 0&&mi.set(t.strings,r=new er(t)),r}T(t){Xs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new _t(this.k(Kt()),this.k(Kt()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ur{constructor(t,r,n,o,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=dt(this,t,r,0),s=!Qt(t)||t!==this._$AH&&t!==xe,s&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=dt(this,a[n+l],r,l),c===xe&&(c=this._$AH[l]),s||(s=!Qt(c)||c!==this._$AH[l]),c===U?t=U:t!==U&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ra extends ur{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const Xc=Pt?Pt.emptyScript:"";class na extends ur{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,Xc):this.element.removeAttribute(this.name)}}class oa extends ur{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=dt(this,t,r,0))!==null&&n!==void 0?n:U)===xe)return;const o=this._$AH,i=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==U&&(o===U||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ia{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}}const Kc={O:Fr,P:Re,A:_o,C:1,M:ea,L:ta,D:Ks,R:dt,I:_t,V:ur,H:na,N:oa,U:ra,F:ia},vi=Dr.litHtmlPolyfillSupport;vi==null||vi(er,_t),((hn=Dr.litHtmlVersions)!==null&&hn!==void 0?hn:Dr.litHtmlVersions=[]).push("2.7.3");const Qc=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=i._$litPart$;if(s===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new _t(t.insertBefore(Kt(),a),a,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:e0}=Kc,wi=()=>document.createComment(""),Ht=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(wi(),i),a=o.insertBefore(wi(),i);r=new e0(s,a,e,e.options)}else{const s=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(s!==i||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,i),c=u}}}return r},nt=(e,t,r=e)=>(e._$AI(t,r),e),t0={},r0=(e,t=t0)=>e._$AH=t,n0=e=>e._$AH,fn=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=De(class extends Ke{constructor(e){var t;if(super(e),e.type!==dr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const s=!!t[i];s===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(s?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return xe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},o0=De(class extends Ke{constructor(e){if(super(e),e.type!==dr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of e)o[s]=n?n(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const i=n0(e),{values:s,keys:a}=this.dt(t,r,n);if(!Array.isArray(i))return this.ht=a,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,p=0,w=i.length-1,m=0,k=s.length-1;for(;p<=w&&m<=k;)if(i[p]===null)p++;else if(i[w]===null)w--;else if(l[p]===a[m])c[m]=nt(i[p],s[m]),p++,m++;else if(l[w]===a[k])c[k]=nt(i[w],s[k]),w--,k--;else if(l[p]===a[k])c[k]=nt(i[p],s[k]),Ht(e,c[k+1],i[p]),p++,k--;else if(l[w]===a[m])c[m]=nt(i[w],s[m]),Ht(e,i[p],i[w]),w--,m++;else if(u===void 0&&(u=bi(a,m,k),d=bi(l,p,w)),u.has(l[p]))if(u.has(l[w])){const y=d.get(a[m]),C=y!==void 0?i[y]:null;if(C===null){const M=Ht(e,i[p]);nt(M,s[m]),c[m]=M}else c[m]=nt(C,s[m]),Ht(e,i[p],C),i[y]=null;m++}else fn(i[w]),w--;else fn(i[p]),p++;for(;m<=k;){const y=Ht(e,c[k+1]);nt(y,s[m]),c[m++]=y}for(;p<=w;){const y=i[p++];y!==null&&fn(y)}return this.ht=a,r0(e,c),xe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zr=class extends Ke{constructor(t){if(super(t),this.et=U,t.type!==dr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||t==null)return this.ft=void 0,this.et=t;if(t===xe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Zr.directiveName="unsafeHTML",Zr.resultType=1;const i0=De(Zr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yn=class extends Zr{};Yn.directiveName="unsafeSVG",Yn.resultType=2;const s0=De(Yn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function a0(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=window,zo=Rr.ShadowRoot&&(Rr.ShadyCSS===void 0||Rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ro=Symbol(),$i=new WeakMap;let sa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ro)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(zo&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=$i.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&$i.set(r,t))}return t}toString(){return this.cssText}};const B=e=>new sa(typeof e=="string"?e:e+"",void 0,Ro),Vt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new sa(r,e,Ro)},l0=(e,t)=>{zo?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Rr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},yi=zo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return B(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;const Vr=window,xi=Vr.trustedTypes,c0=xi?xi.emptyScript:"",ki=Vr.reactiveElementPolyfillSupport,Jn={toAttribute(e,t){switch(t){case Boolean:e=e?c0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},aa=(e,t)=>t!==e&&(t==t||e==e),mn={attribute:!0,type:String,converter:Jn,reflect:!1,hasChanged:aa};let kt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=mn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(yi(o))}else t!==void 0&&r.push(yi(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return l0(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=mn){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Jn).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=o.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Jn;this._$El=i,this[i]=a.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||aa)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};kt.finalized=!0,kt.elementProperties=new Map,kt.elementStyles=[],kt.shadowRootOptions={mode:"open"},ki==null||ki({ReactiveElement:kt}),((gn=Vr.reactiveElementVersions)!==null&&gn!==void 0?gn:Vr.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,wn;class qt extends kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return xe}}qt.finalized=!0,qt._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:qt});const Ci=globalThis.litElementPolyfillSupport;Ci==null||Ci({LitElement:qt});((wn=globalThis.litElementVersions)!==null&&wn!==void 0?wn:globalThis.litElementVersions=[]).push("3.3.2");var d0=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function s(C){if(C!==void 0&&typeof C!="function")throw new TypeError("Function expected");return C}for(var a=n.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,p=!1,w=r.length-1;w>=0;w--){var m={};for(var k in n)m[k]=k==="access"?{}:n[k];for(var k in n.access)m.access[k]=n.access[k];m.addInitializer=function(C){if(p)throw new TypeError("Cannot add initializers after decoration has completed");i.push(s(C||null))};var y=(0,r[w])(a==="accessor"?{get:u.get,set:u.set}:u[l],m);if(a==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=s(y.get))&&(u.get=d),(d=s(y.set))&&(u.set=d),(d=s(y.init))&&o.push(d)}else(d=s(y))&&(a==="field"?o.push(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),p=!0},u0=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},h0=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function p0(){function e(t,r){return t}return e}let la=(()=>{let e=[p0()],t,r=[],n;return n=class extends qt{},h0(n,"DeclarativeElement"),d0(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,u0(n,r),n})();function f0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const g0={capitalizeFirstLetter:!1};function m0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function v0(e,t){return t.capitalizeFirstLetter?m0(e):e}function w0(e,t=g0){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return v0(n,t)}function Si(e){return e!==e.toUpperCase()}function b0(e){return e.split("").reduce((r,n,o,i)=>{const s=o>0?i[o-1]:"",a=o<i.length-1?i[o+1]:"",l=Si(s)||Si(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const $0=["january","february","march","april","may","june","july","august","september","october","november","december"];$0.map(e=>e.slice(0,3));function ca(e){return e?e instanceof Error?e.message:String(e):""}function jo(e){return e instanceof Error?e:new Error(ca(e))}function Mi(e){return!!e&&typeof e=="object"}const Ai="Failed to compare objects using JSON.stringify";function Ei(e,t){return JSON.stringify(e)===JSON.stringify(t)}function da(e,t){try{return e===t?!0:Mi(e)&&Mi(t)?Ei(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>da(e[n],t[n])):!1:Ei(e,t)}catch(r){const n=jo(r);throw n.message.startsWith(Ai)||(n.message=`${Ai}: ${n.message}`),n}}const y0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function hr(e,t){return e?y0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function x0(e,t){return e&&t.every(r=>hr(e,r))}function ut(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function tr(e,t){let r=!1;const n=ut(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),{...o,[i]:s}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(ut(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(s)}}):n}function k0(e){return!!(hr(e,"then")&&typeof e.then=="function")}function No(){let e,t,r=!1;const n=new Promise((o,i)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,i(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${No.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function C0(e,t){try{return S0(e,t),!0}catch{return!1}}function S0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M0=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function ua(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):M0(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bn;((bn=window.HTMLSlotElement)===null||bn===void 0?void 0:bn.prototype.assignedElements)!=null;const Xn=Symbol("this-is-an-element-vir-declarative-element"),Ho=Symbol("key for ignoring inputs not having been set yet"),A0={[Ho]:!0};function ha(e,t){const r=e.instanceState;ut(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);ua()(e,n),"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ut(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),pa(e)}function pa(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function fa(e,t){return rr(e,t),e.element}function rr(e,t){if(e.type!==dr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function g(e,t){return t?Ii(e,t):Ii(void 0,e)}const Ii=De(class extends Ke{constructor(e){super(e),this.element=fa(e,"assign")}render(e,t){return E0(e,this.element,t),xe}});function E0(e,t,r){ha(t,r)}function ga(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof la?!0:ga(r)}function ma(e,t){return`${e}-${b0(t)}`}function I0(e,t){return t?tr(t,r=>B(`--${ma(e,String(r))}`)):{}}function T0(e,t){return e?tr(e,(r,n)=>{const o=t[r];return B(`var(${o}, ${n})`)}):{}}class P0 extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Oo(){return e=>{var t;return t=class extends P0{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function ue(){return Oo()}function L0(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Oo()(r);return t[r]=n,t},{}):{}}const Kn="_is_element_vir_observable_property_handler_instance",Qn="_is_element_vir_observable_property_handler_creator";function B0(e){return hr(e,Qn)&&e[Qn]===!0}function _0(e){return hr(e,Kn)&&e[Kn]===!0}function Ti(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Pi(e,t){const r=e;function n(i,s){return t&&Ti(s,e,e.tagName),r[s]}return new Proxy({},{get:n,set:(i,s,a)=>{t&&Ti(s,e,e.tagName);const l=e.observablePropertyHandlerMap[s];function c(u){i[s]=u,r[s]=u}return B0(a)&&(a=a.init()),_0(a)?(l&&a!==l?(a.addMultipleListeners(l.getAllListeners()),l.removeAllListeners()):a.addListener(!0,u=>{c(u)}),e.observablePropertyHandlerMap[s]=a):l?l.setValue(a):c(a),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return n(i,s)},configurable:!0,enumerable:!0}},has:(i,s)=>Reflect.has(i,s)})}function z0(e,t){return t?tr(t,r=>ma(e,String(r))):{}}function R0({hostClassNames:e,cssVarNames:t,cssVarValues:r}){return{hostClassSelectors:tr(e,(n,o)=>B(`:host(.${o})`)),hostClassNames:tr(e,(n,o)=>B(o)),cssVarNames:t,cssVarValues:r}}function j0({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ut(t).forEach(i=>{const s=t[i],a=r[i];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function N0(e,t){function r(o){ut(o).forEach(i=>{const s=o[i];e.instanceState[i]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var H0=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function en(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r=L0(e.events),n=z0(e.tagName,e.hostClasses),o=I0(e.tagName,e.cssVars),i=T0(e.cssVars,o),s={...A0,...e.options},a=typeof e.styles=="function"?e.styles(R0({hostClassNames:n,cssVarNames:o,cssVarValues:i})):e.styles||Vt``,l=e.renderCallback,c=(t=class extends la{createRenderParams(){return N0(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){pa(this)}render(){try{ga(this)&&!this.haveInputsBeenSet&&!s[Ho]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${g.name}" directive on it. If no inputs are intended, use "${en.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u));const d=l(u);return j0({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=jo(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();e.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();e.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){ha(this,u)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Pi(this,!1),this.instanceState=Pi(this,!0);const u=e.stateInit||{};ut(u).forEach(d=>{ua()(this,d),this.instanceState[d]=u[d]}),this.definition=c}},H0(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=l,t.hostClasses=n,t.cssVarNames=o,t.stateInit=e.stateInit,t.cssVarValues=o,t);return Object.defineProperties(c,{[Xn]:{value:!0,writable:!1},name:{value:w0(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function tn(){return e=>en({...e,options:{[Ho]:!1},...e.options})}function A(e,t){return O0(e,t)}const O0=De(class extends Ke{constructor(e){super(e),this.element=fa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),xe}}),Li="onDomCreated",Bi=De(class extends Ke{constructor(e){super(e),rr(e,Li)}update(e,[t]){rr(e,Li);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),$n="onResize",eo=De(class extends Ke{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),rr(e,$n)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${$n} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){rr(e,$n),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function _i(e,t,r,n){return e instanceof Error?n?n(e):ca(e):k0(e)?t:r?r(e):e}function ht(e,t,r){return a0(e,()=>t,()=>r)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)},Ie=globalThis&&globalThis.__classPrivateFieldSet||function(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r},re,ot,Ve,at,Ee,Ct,me,It,to,ro,Wt,va;const se=Symbol("not set");class D0{constructor(t){re.add(this),ot.set(this,se),Ve.set(this,se),at.set(this,se),Ee.set(this,new Set),Ct.set(this,void 0),me.set(this,No()),this[va]=!0,this.resetValue(t)}resetValue(t){P(this,re,"m",Wt).call(this),t!==se&&(t instanceof Promise?this.setValue({newPromise:t}):this.setValue({resolvedValue:t}))}setValue(t){if("createPromise"in t){if(P(this,ot,"f")===se||!da(t.trigger,P(this,ot,"f"))){Ie(this,ot,t.trigger,"f");const r=t.createPromise();P(this,re,"m",to).call(this,r),P(this,re,"m",It).call(this)}}else"newPromise"in t?(P(this,ot,"f"),P(this,re,"m",to).call(this,t.newPromise),P(this,re,"m",It).call(this)):"resolvedValue"in t?P(this,re,"m",ro).call(this,t.resolvedValue):"forceUpdate"in t?(Ie(this,ot,se,"f"),Ie(this,Ve,se,"f"),P(this,me,"f").isSettled()||P(this,me,"f").reject("Canceled by force update"),P(this,re,"m",Wt).call(this),P(this,re,"m",It).call(this)):this.resetValue(t)}getValue(){if(P(this,me,"f").isSettled()){if(P(this,at,"f")!==se)return P(this,at,"f");if(P(this,Ve,"f")===se)throw new Error("Promise says it has settled but resolution value was not set!");return P(this,Ve,"f")}else return P(this,me,"f").promise}addListener(t,r){P(this,Ee,"f").add(r),t&&r(this.getValue())}addMultipleListeners(t){t.forEach(r=>P(this,Ee,"f").add(r))}getAllListeners(){return P(this,Ee,"f")}removeListener(t){return P(this,Ee,"f").has(t)?(P(this,Ee,"f").delete(t),!0):!1}removeAllListeners(){const t=P(this,Ee,"f").size;return P(this,Ee,"f").clear(),t}}ot=new WeakMap,Ve=new WeakMap,at=new WeakMap,Ee=new WeakMap,Ct=new WeakMap,me=new WeakMap,re=new WeakSet,va=Kn,It=function(){const t=this.getValue();P(this,Ee,"f").forEach(r=>{r(t)})},to=function(t){t!==P(this,Ct,"f")&&(Ie(this,Ve,se,"f"),Ie(this,at,se,"f"),Ie(this,Ct,t,"f"),P(this,me,"f").isSettled()&&P(this,re,"m",Wt).call(this),t.then(r=>{P(this,Ct,"f")===t&&P(this,re,"m",ro).call(this,r)}).catch(r=>{P(this,Ct,"f")===t&&(Ie(this,at,jo(r),"f"),P(this,me,"f").promise.catch(()=>{}),P(this,me,"f").reject(r),P(this,re,"m",It).call(this))}))},ro=function(t){t!==P(this,Ve,"f")&&(Ie(this,at,se,"f"),Ie(this,Ve,t,"f"),P(this,me,"f").isSettled()&&P(this,re,"m",Wt).call(this),P(this,me,"f").resolve(t),P(this,re,"m",It).call(this))},Wt=function(){Ie(this,me,No(),"f")};function F0(...e){const t=C0(e,1)?e[0]:se;return{[Qn]:!0,init(){return new D0(t)}}}function no(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const l=Z0(s,n[a]);return`${s}${l}`});return f0(i.join(""))}function Z0(e,t){return t._$litType$!=null||t._$litDirective$!=null?no(t):Array.isArray(t)?t.map(n=>no(n)).join(""):e.endsWith("=")?`"${t}"`:t}function wa(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),tn()(r(n))),defineElementNoInputs:n=>(t(n),en(r(n)))}}function V0(e,t){return e.filter((r,n)=>!t.includes(n))}function ba(e){return e.filter(t=>x0(t,["tagName",Xn])&&!!t.tagName&&!!t[Xn])}const $a=new WeakMap;function q0(e,t){var o;const r=ba(t);return(o=ya($a,[e,...r]).value)==null?void 0:o.template}function W0(e,t,r){const n=ba(t);return ka($a,[e,...n],r)}function ya(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=xa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ya(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function xa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ka(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:s}=xa(e,t,n);if(!i)return{result:!1,reason:s};const a=o??{nested:void 0,template:void 0};if(o||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),ka(l,t,r,n+1)}function Ca(e,t,r){return{name:e,check:t,transform:r}}const U0=new WeakMap;function Sa(e,t,r){const n=q0(e,t),o=n??r();if(!n){const s=W0(e,t,o);if(s.result)U0.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=V0(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function Ma(e,t,r,n){const o=[],i=[],s=[];return e.forEach((l,c)=>{var y;const u=o.length-1,d=o[u],p=c-1,w=t[p];let m;n&&n(l),typeof d=="string"&&(m=(y=r.find(C=>C.check(d,l,w)))==null?void 0:y.transform,m&&(o[u]=d+m(w)+l,s.push(p))),m||o.push(l);const k=e.raw[c];m?i[u]=i[u]+m(w)+k:i.push(k)}),{templateStrings:Object.assign([],o,{raw:i}),valueIndexDeletions:s}}function Aa(e){return hr(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const G0=[Ca("tag name css selector interpolation",(e,t,r)=>Aa(r),e=>e.tagName)];function Y0(e,t){return Ma(e,t,G0)}function f(e,...t){const r=Sa(e,t,()=>Y0(e,t));return Vt(r.strings,...r.values)}const J0=[Ca("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Aa(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function X0(e){}function K0(e){return Ma(e.strings,e.values,J0,X0)}function h(e,...t){const r=Jc(e,...t),n=Sa(e,t,()=>K0(r));return{...r,strings:n.strings,values:n.values}}const Q0=0;function ed(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Q0)}class pr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class zi extends pr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const rn="locationchange";let Ri=!1;const td=globalThis.history.pushState;function ji(...e){const t=td.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(rn)),t}const rd=globalThis.history.replaceState;function Ni(...e){const t=rd.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(rn)),t}function nd(){if(!Ri){if(globalThis.history.pushState===ji)throw new zi("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Ni)throw new zi("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");Ri=!0,globalThis.history.pushState=ji,globalThis.history.replaceState=Ni,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(rn))})}}function od(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function id(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function sd(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?od(new URLSearchParams(globalThis.location.search)):void 0,i=globalThis.location.hash||void 0;return{paths:r,search:o,hash:i}}class ad extends pr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ea(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Hi=6;function Oi(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Hi)throw new ad(`Route sanitization depth has exceed the max of ${Hi} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ea(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class yn extends pr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function ld(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new yn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new yn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new yn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function cd(e,t,r,n=!1){const o=Ia(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function Ia(e,t,r=""){var l;if(!r&&t!=null)throw new pr("Route base regexp was defined but routeBase string was not provided.");const n=dd(t)?`/${r}`:"",o=e.search?id(e.search).toString():"",i=o?`?${o}`:"",s=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${s}${e.hash}`:"";return`${n}/${e.paths.join("/")}${i}${a}`}function dd(e){return!!(e&&globalThis.location.pathname.match(e))}function ud(e={}){var i;ld(e),nd();const t=(i=e.routeBase)==null?void 0:i.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o={listeners:new Set,initParams:e,sanitizeFullRoute:s=>{const a={hash:void 0,search:void 0,...s};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes:(s,a=!1,l=!1)=>{const c=o.getCurrentRawRoutes(),u={...c,...s},d=o.sanitizeFullRoute(u);if(!(!l&&Ea(c,d)))return cd(d,r,t,a)},createRoutesUrl:s=>Ia(s,r,t),getCurrentRawRoutes:()=>sd(r),addRouteListener:(s,a)=>{if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new pr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),n||(globalThis.addEventListener(rn,()=>Oi(o)),n=!0),s&&Oi(o,a),a},hasRouteListener:s=>o.listeners.has(s),removeRouteListener:s=>o.listeners.delete(s),sanitizationDepth:0};return o}var we;(function(e){e.Search="search",e.Book="book"})(we||(we={}));const Ta={hash:void 0,paths:[we.Book],search:void 0};function hd(e){return ud({routeBase:e,routeSanitizer(t){return{paths:pd(t.paths),hash:void 0,search:void 0}}})}function pd(e){const t=e[0];if(Hc(t,we)){if(t===we.Book)return[we.Book,...e.slice(1)];if(t===we.Search)return[t,e[1]??""];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ta.paths}function Di(e){return e!==e.toUpperCase()}function fd(e){return e.split("").reduce((r,n,o,i)=>{const s=o>0?i[o-1]:"",a=o<i.length-1?i[o+1]:"",l=Di(s)||Di(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const gd=["january","february","march","april","may","june","july","august","september","october","november","december"];gd.map(e=>e.slice(0,3));function md(e){return!!e&&typeof e=="object"}function Fi(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function vd(e){return Array.isArray(e)?"array":typeof e}function wd(e,t){return vd(e)===t}function bd(e,t){let r=!1;const n=Fi(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),{...o,[i]:s}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Fi(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(s)}}):n}function fr(e){if(md(e))return bd(e,(r,n)=>{if(!wd(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(fd(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,s=r.startsWith("--")?B(r):r.startsWith("-")?Vt`-${B(r)}`:Vt`--${B(r)}`;return{name:s,value:Vt`var(${s}, ${B(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${fr.name}' function.`)}function oo({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const D=fr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),$d={nav:{hover:{background:D["element-book-nav-hover-background-color"],foreground:D["element-book-nav-hover-foreground-color"]},active:{background:D["element-book-nav-active-background-color"],foreground:D["element-book-nav-active-foreground-color"]},selected:{background:D["element-book-nav-selected-background-color"],foreground:D["element-book-nav-selected-foreground-color"]}},accent:{icon:D["element-book-accent-icon-color"]},page:{background:D["element-book-page-background-color"],backgroundFaint1:D["element-book-page-background-faint-level-1-color"],backgroundFaint2:D["element-book-page-background-faint-level-2-color"],foreground:D["element-book-page-foreground-color"],foregroundFaint1:D["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:D["element-book-page-foreground-faint-level-2-color"]}};function yd(e,t){Pa(e,t,$d)}function io(e){return Bo(e,"_$cssResult$")}function Zi(e){return Js(e,["name","value","default"])&&zc(e.default,"string")&&io(e.name)&&io(e.value)}function Pa(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(io(o)){if(!Zi(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);oo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Zi(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Pa(e,o,i)}})}function G(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,a)=>t.map(l=>l[a])),i=e.map(s=>o.map(a=>{let l=0;if(!Array.isArray(s)){for(let c of a)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(a[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(s=>s[0]):i}function gr(e){return qe(e)==="string"}function qe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function qr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function La(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),i.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ba(e){return e[e.length-1]}function Wr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function _a(e,t,r){return(r-e)/(t-e)}function Do(e,t,r){return Wr(t[0],t[1],_a(e[0],e[1],r))}function za(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var xd=Object.freeze({__proto__:null,isString:gr,type:qe,toPrecision:qr,parseFunction:La,last:Ba,interpolate:Wr,interpolateInv:_a,mapRange:Do,parseCoordGrammar:za,multiplyMatrices:G});class kd{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Ue=new kd;var Te={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Se={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function so(e){return Array.isArray(e)?e:Se[e]}function Ur(e,t,r,n={}){if(e=so(e),t=so(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Ue.run("chromatic-adaptation-start",o),o.M||(o.W1===Se.D65&&o.W2===Se.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Se.D50&&o.W2===Se.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Ue.run("chromatic-adaptation-end",o),o.M)return G(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Cd=75e-6;var lr,ao,Tt,Qr,Ra;const Ce=class{constructor(t){jt(this,lr);jt(this,Qr);jt(this,Tt,void 0);var o,i,s;this.id=t.id,this.name=t.name,this.base=t.base?Ce.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=so(n),this.formats=t.formats??{};for(let a in this.formats){let l=this.formats[a];l.type||(l.type="function"),l.name||(l.name=a)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,dn(this,Tt,yr(this,Qr,Ra).call(this).reverse()),Ue.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Cd}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let s=n[i];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[a,l]=s.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=yr(this,lr,ao).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=yr(this,lr,ao).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ce.get(t),this===t)return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=vt(this,Tt),o=vt(t,Tt),i,s;for(let a=0;a<n.length&&n[a]===o[a];a++)i=n[a],s=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Ce.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Ce.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Ce)return t;if(qe(t)==="string"){let o=Ce.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Ce.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=qe(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Ce.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=qe(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Ce.get(o);let s=i.toLowerCase(),a=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:a,...u};a++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let E=Ce;lr=new WeakSet,ao=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=za(t.coords);let r=Object.entries(this.coords).map(([n,o],i)=>{let s=t.coordGrammar[i][0],a=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:a,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((i,s)=>{let{fromRange:a,toRange:l,suffix:c}=r[s];return a&&l&&(i=Do(a,l,i)),i=qr(i,o),c&&(i+=c),i})}return t},Tt=new WeakMap,Qr=new WeakSet,Ra=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},ln(E,"registry",{}),ln(E,"DEFAULT_FORMAT",{type:"functions",name:"color"});var $e=new E({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ae extends E{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=$e),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=G(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ur(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ur(this.base.white,this.white,r),G(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ja(e){var r,n,o,i,s;let t={str:(r=String(e))==null?void 0:r.trim()};if(Ue.run("parse-start",t),t.color)return t.color;if(t.parsed=La(t.str),t.parsed){let a=t.parsed.name;if(a==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let d of E.all){let p=d.getFormat("color");if(p&&(l===p.id||(n=p.ids)!=null&&n.includes(l))){let w=Object.keys(d.coords).length,m=Array(w).fill(0);return m.forEach((k,y)=>m[y]=t.parsed.args[y]||0),{spaceId:d.id,coords:m,alpha:c}}}let u="";if(l in E.registry){let d=(s=(i=(o=E.registry[l].formats)==null?void 0:o.functions)==null?void 0:i.color)==null?void 0:s.id;d&&(u=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${l}). `+(u||"Missing a plugin?"))}else for(let l of E.all){let c=l.getFormat(a);if(c&&c.type==="function"){let u=1;(c.lastAlpha||Ba(t.parsed.args).alpha)&&(u=t.parsed.args.pop());let d=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([p,w],m)=>{var _;let k=c.coordGrammar[m],y=(_=d[m])==null?void 0:_.type;if(k=k.find(X=>X==y),!k){let X=w.name||p;throw new TypeError(`${y} not allowed for ${X} in ${a}()`)}let C=k.range;y==="<percentage>"&&(C||(C=[0,1]));let M=w.range||w.refRange;C&&M&&(d[m]=Do(C,M,d[m]))}),{spaceId:l.id,coords:d,alpha:u}}}}else for(let a of E.all)for(let l in a.formats){let c=a.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let u=c.parse(t.str);if(u)return u.alpha??(u.alpha=1),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function F(e){if(!e)throw new TypeError("Empty color reference");gr(e)&&(e=ja(e));let t=e.space||e.spaceId;return t instanceof E||(e.space=E.get(t)),e.alpha===void 0&&(e.alpha=1),e}function mr(e,t){return t=E.get(t),t.from(e)}function ye(e,t){let{space:r,index:n}=E.resolveCoord(t,e.space);return mr(e,r)[n]}function Na(e,t,r){return t=E.get(t),e.coords=t.to(e.space,r),e}function Ge(e,t,r){if(e=F(e),arguments.length===2&&qe(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ge(e,o,n[o])}else{typeof r=="function"&&(r=r(ye(e,t)));let{space:n,index:o}=E.resolveCoord(t,e.space),i=mr(e,n);i[o]=r,Na(e,n,i)}return e}var Fo=new E({id:"xyz-d50",name:"XYZ D50",white:"D50",base:$e,fromBase:e=>Ur($e.white,"D50",e),toBase:e=>Ur("D50",$e.white,e),formats:{color:{}}});const Sd=216/24389,Vi=24/116,xr=24389/27;let xn=Se.D50;var de=new E({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xn,base:Fo,fromBase(e){let r=e.map((n,o)=>n/xn[o]).map(n=>n>Sd?Math.cbrt(n):(xr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Vi?Math.pow(t[0],3):(116*t[0]-16)/xr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/xr,t[2]>Vi?Math.pow(t[2],3):(116*t[2]-16)/xr].map((n,o)=>n*xn[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function nn(e){return(e%360+360)%360}function Md(e,t){if(e==="raw")return t;let[r,n]=t.map(nn),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var nr=new E({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:de,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nn(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const qi=25**7,Gr=Math.PI,Wi=180/Gr,wt=Gr/180;function lo(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,s,a]=de.from(e),l=nr.from(de,[i,s,a])[1],[c,u,d]=de.from(t),p=nr.from(de,[c,u,d])[1];l<0&&(l=0),p<0&&(p=0);let m=((l+p)/2)**7,k=.5*(1-Math.sqrt(m/(m+qi))),y=(1+k)*s,C=(1+k)*u,M=Math.sqrt(y**2+a**2),_=Math.sqrt(C**2+d**2),X=y===0&&a===0?0:Math.atan2(a,y),he=C===0&&d===0?0:Math.atan2(d,C);X<0&&(X+=2*Gr),he<0&&(he+=2*Gr),X*=Wi,he*=Wi;let Le=c-i,Fe=_-M,ie=he-X,tt=X+he,br=Math.abs(ie),pe;M*_===0?pe=0:br<=180?pe=ie:ie>180?pe=ie-360:ie<-180?pe=ie+360:console.log("the unthinkable has happened");let mt=2*Math.sqrt(_*M)*Math.sin(pe*wt/2),zt=(i+c)/2,an=(M+_)/2,ri=Math.pow(an,7),Be;M*_===0?Be=tt:br<=180?Be=tt/2:tt<360?Be=(tt+360)/2:Be=(tt-360)/2;let ni=(zt-50)**2,Sc=1+.015*ni/Math.sqrt(20+ni),oi=1+.045*an,Rt=1;Rt-=.17*Math.cos((Be-30)*wt),Rt+=.24*Math.cos(2*Be*wt),Rt+=.32*Math.cos((3*Be+6)*wt),Rt-=.2*Math.cos((4*Be-63)*wt);let ii=1+.015*an*Rt,Mc=30*Math.exp(-1*((Be-275)/25)**2),Ac=2*Math.sqrt(ri/(ri+qi)),Ec=-1*Math.sin(2*Mc*wt)*Ac,$r=(Le/(r*Sc))**2;return $r+=(Fe/(n*oi))**2,$r+=(mt/(o*ii))**2,$r+=Ec*(Fe/(n*oi))*(mt/(o*ii)),Math.sqrt($r)}const Ad=75e-6;function Ut(e,t=e.space,{epsilon:r=Ad}={}){e=F(e),t=E.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function or(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ye(e,{method:t=Te.gamut_mapping,space:r=e.space}={}){if(gr(arguments[1])&&(r=arguments[1]),r=E.get(r),Ut(e,r,{epsilon:0}))return e;let n=be(e,r);if(t!=="clip"&&!Ut(e,r)){let o=Ye(or(n),{method:"clip",space:r});if(lo(e,o)>2){let i=E.resolveCoord(t),s=i.space,a=i.id,l=be(n,s),u=(i.range||i.refRange)[0],d=.01,p=u,w=ye(l,a);for(;w-p>d;){let m=or(l);m=Ye(m,{space:r,method:"clip"}),lo(l,m)-2<d?p=ye(l,a):w=ye(l,a),Ge(l,a,(p+w)/2)}n=be(l,r)}else n=o}if(t==="clip"||!Ut(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,s)=>{let[a,l]=o[s];return a!==void 0&&(i=Math.max(a,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=be(n,e.space)),e.coords=n.coords,e}Ye.returns="color";function be(e,t,{inGamut:r}={}){e=F(e),t=E.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Ye(o)),o}be.returns="color";function Yr(e,{precision:t=Te.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=F(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??E.DEFAULT_FORMAT,n||(n=r.toGamut);let a=e.coords;if(a=a.map(c=>c||0),n&&!Ut(e)&&(a=Ye(or(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(a,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(w=>qr(w,t)));let u=[...a];if(c==="color"){let w=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(w)}let d=e.alpha;t!==null&&(d=qr(d,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";i=`${c}(${u.join(r.commas?", ":" ")}${p})`}return i}const Ed=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Id=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var on=new ae({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Ed,fromXYZ_M:Id,formats:{color:{}}});const kr=1.09929682680944,Ui=.018053968510807;var Ha=new ae({id:"rec2020",name:"REC.2020",base:on,toBase(e){return e.map(function(t){return t<Ui*4.5?t/4.5:Math.pow((t+kr-1)/kr,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ui?kr*Math.pow(t,.45)-(kr-1):4.5*t})},formats:{color:{}}});const Td=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Pd=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Oa=new ae({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Td,fromXYZ_M:Pd});const Ld=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Bd=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Da=new ae({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Ld,fromXYZ_M:Bd,formats:{color:{}}}),Gi={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Yi=Array(3).fill("<percentage> | <number>[0, 255]"),Ji=Array(3).fill("<number>[0, 255]");var ir=new ae({id:"srgb",name:"sRGB",base:Da,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Yi},rgb_number:{name:"rgb",commas:!0,coords:Ji,noAlpha:!0},color:{},rgba:{coords:Yi,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ji},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Gi.black,t.alpha=0):t.coords=Gi[e],t.coords)return t}}}}),Fa=new ae({id:"p3",name:"P3",base:Oa,fromBase:ir.fromBase,toBase:ir.toBase,formats:{color:{id:"display-p3"}}});Te.display_space=ir;if(typeof CSS<"u"&&CSS.supports)for(let e of[de,Ha,Fa]){let t=e.getMinCoords(),n=Yr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Te.display_space=e;break}}function _d(e,{space:t=Te.display_space,...r}={}){let n=Yr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Te.display_space)n=new String(n),n.color=e;else{let o=be(e,t);n=new String(Yr(o,r)),n.color=o}return n}function Za(e,t,r="lab"){r=E.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,s,a)=>{let l=o[a];return isNaN(s)||isNaN(l)?i:i+(l-s)**2},0))}function zd(e,t){return e=F(e),t=F(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Je(e){return ye(e,[$e,"y"])}function Va(e,t){Ge(e,[$e,"y"],t)}function Rd(e){Object.defineProperty(e.prototype,"luminance",{get(){return Je(this)},set(t){Va(this,t)}})}var jd=Object.freeze({__proto__:null,getLuminance:Je,setLuminance:Va,register:Rd});function Nd(e,t){e=F(e),t=F(t);let r=Math.max(Je(e),0),n=Math.max(Je(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Hd=.56,Od=.57,Dd=.62,Fd=.65,Xi=.022,Zd=1.414,Vd=.1,qd=5e-4,Wd=1.14,Ki=.027,Ud=1.14;function Qi(e){return e>=Xi?e:e+(Xi-e)**Zd}function bt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Gd(e,t){t=F(t),e=F(e);let r,n,o,i,s,a;t=be(t,"srgb"),[i,s,a]=t.coords;let l=bt(i)*.2126729+bt(s)*.7151522+bt(a)*.072175;e=be(e,"srgb"),[i,s,a]=e.coords;let c=bt(i)*.2126729+bt(s)*.7151522+bt(a)*.072175,u=Qi(l),d=Qi(c),p=d>u;return Math.abs(d-u)<qd?n=0:p?(r=d**Hd-u**Od,n=r*Wd):(r=d**Fd-u**Dd,n=r*Ud),Math.abs(n)<Vd?o=0:n>0?o=n-Ki:o=n+Ki,o*100}function Yd(e,t){e=F(e),t=F(t);let r=Math.max(Je(e),0),n=Math.max(Je(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Jd=5e4;function Xd(e,t){e=F(e),t=F(t);let r=Math.max(Je(e),0),n=Math.max(Je(t),0);return n>r&&([r,n]=[n,r]),n===0?Jd:(r-n)/n}function Kd(e,t){e=F(e),t=F(t);let r=ye(e,[de,"l"]),n=ye(t,[de,"l"]);return Math.abs(r-n)}const Qd=216/24389,es=24/116,Cr=24389/27;let kn=Se.D65;var co=new E({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:kn,base:$e,fromBase(e){let r=e.map((n,o)=>n/kn[o]).map(n=>n>Qd?Math.cbrt(n):(Cr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>es?Math.pow(t[0],3):(116*t[0]-16)/Cr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Cr,t[2]>es?Math.pow(t[2],3):(116*t[2]-16)/Cr].map((n,o)=>n*kn[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const Cn=Math.pow(5,.5)*.5+.5;function e1(e,t){e=F(e),t=F(t);let r=ye(e,[co,"l"]),n=ye(t,[co,"l"]),o=Math.abs(Math.pow(r,Cn)-Math.pow(n,Cn)),i=Math.pow(o,1/Cn)*Math.SQRT2-40;return i<7.5?0:i}var jr=Object.freeze({__proto__:null,contrastWCAG21:Nd,contrastAPCA:Gd,contrastMichelson:Yd,contrastWeber:Xd,contrastLstar:Kd,contrastDeltaPhi:e1});function t1(e,t,r={}){gr(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(jr).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=F(e),t=F(t);for(let i in jr)if("contrast"+n.toLowerCase()===i.toLowerCase())return jr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function qa(e){let[t,r,n]=mr(e,$e),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Wa(e){let[t,r,n]=mr(e,$e),o=t+r+n;return[t/o,r/o]}function r1(e){Object.defineProperty(e.prototype,"uv",{get(){return qa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Wa(this)}})}var n1=Object.freeze({__proto__:null,uv:qa,xy:Wa,register:r1});function o1(e,t){return Za(e,t,"lab")}const i1=Math.PI,ts=i1/180;function s1(e,t,{l:r=2,c:n=1}={}){let[o,i,s]=de.from(e),[,a,l]=nr.from(de,[o,i,s]),[c,u,d]=de.from(t),p=nr.from(de,[c,u,d])[1];a<0&&(a=0),p<0&&(p=0);let w=o-c,m=a-p,k=i-u,y=s-d,C=k**2+y**2-m**2,M=.511;o>=16&&(M=.040975*o/(1+.01765*o));let _=.0638*a/(1+.0131*a)+.638,X;Number.isNaN(l)&&(l=0),l>=164&&l<=345?X=.56+Math.abs(.2*Math.cos((l+168)*ts)):X=.36+Math.abs(.4*Math.cos((l+35)*ts));let he=Math.pow(a,4),Le=Math.sqrt(he/(he+1900)),Fe=_*(Le*X+1-Le),ie=(w/(r*M))**2;return ie+=(m/(n*_))**2,ie+=C/Fe**2,Math.sqrt(ie)}const rs=203;var Zo=new E({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:$e,fromBase(e){return e.map(t=>Math.max(t*rs,0))},toBase(e){return e.map(t=>Math.max(t/rs,0))}});const Sr=1.15,Mr=.66,ns=2610/2**14,a1=2**14/2610,os=3424/2**12,is=2413/2**7,ss=2392/2**7,l1=1.7*2523/2**5,as=2**5/(1.7*2523),Ar=-.56,Sn=16295499532821565e-27,c1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],d1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],u1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],h1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ua=new E({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Zo,fromBase(e){let[t,r,n]=e,o=Sr*t-(Sr-1)*n,i=Mr*r-(Mr-1)*t,a=G(c1,[o,i,n]).map(function(p){let w=os+is*(p/1e4)**ns,m=1+ss*(p/1e4)**ns;return(w/m)**l1}),[l,c,u]=G(u1,a);return[(1+Ar)*l/(1+Ar*l)-Sn,c,u]},toBase(e){let[t,r,n]=e,o=(t+Sn)/(1+Ar-Ar*(t+Sn)),s=G(h1,[o,r,n]).map(function(p){let w=os-p**as,m=ss*p**as-is;return 1e4*(w/m)**a1}),[a,l,c]=G(d1,s),u=(a+(Sr-1)*c)/Sr,d=(l+(Mr-1)*u)/Mr;return[u,d,c]},formats:{color:{}}}),uo=new E({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ua,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nn(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function p1(e,t){let[r,n,o]=uo.from(e),[i,s,a]=uo.from(t),l=r-i,c=n-s;Number.isNaN(o)&&Number.isNaN(a)?(o=0,a=0):Number.isNaN(o)?o=a:Number.isNaN(a)&&(a=o);let u=o-a,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Ga=3424/4096,Ya=2413/128,Ja=2392/128,ls=2610/16384,f1=2523/32,g1=16384/2610,cs=32/2523,m1=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],v1=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],w1=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],b1=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var ho=new E({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Zo,fromBase(e){let t=G(m1,e);return $1(t)},toBase(e){let t=y1(e);return G(b1,t)},formats:{color:{}}});function $1(e){let t=e.map(function(r){let n=Ga+Ya*(r/1e4)**ls,o=1+Ja*(r/1e4)**ls;return(n/o)**f1});return G(v1,t)}function y1(e){return G(w1,e).map(function(n){let o=Math.max(n**cs-Ga,0),i=Ya-Ja*n**cs;return 1e4*(o/i)**g1})}function x1(e,t){let[r,n,o]=ho.from(e),[i,s,a]=ho.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-s)**2+(o-a)**2)}const k1=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],C1=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],S1=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],M1=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Jr=new E({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:$e,fromBase(e){let r=G(k1,e).map(n=>Math.cbrt(n));return G(S1,r)},toBase(e){let r=G(M1,e).map(n=>n**3);return G(C1,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function A1(e,t){let[r,n,o]=Jr.from(e),[i,s,a]=Jr.from(t),l=r-i,c=n-s,u=o-a;return Math.sqrt(l**2+c**2+u**2)}var po=Object.freeze({__proto__:null,deltaE76:o1,deltaECMC:s1,deltaE2000:lo,deltaEJz:p1,deltaEITP:x1,deltaEOK:A1});function Ft(e,t,r={}){gr(r)&&(r={method:r});let{method:n=Te.deltaE,...o}=r;e=F(e),t=F(t);for(let i in po)if("deltae"+n.toLowerCase()===i.toLowerCase())return po[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function E1(e,t=.25){let n=[E.get("oklch","lch"),"l"];return Ge(e,n,o=>o*(1+t))}function I1(e,t=.25){let n=[E.get("oklch","lch"),"l"];return Ge(e,n,o=>o*(1-t))}var T1=Object.freeze({__proto__:null,lighten:E1,darken:I1});function Xa(e,t,r=.5,n={}){[e,t]=[F(e),F(t)],qe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:s}=n;return vr(e,t,{space:o,outputSpace:i,premultiplied:s})(r)}function Ka(e,t,r={}){let n;Vo(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:s=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[F(e),F(t)],n=vr(e,t,l));let c=Ft(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(a!==void 0&&(u=Math.min(u,a)),u===1)d=[{p:.5,color:n(.5)}];else{let p=1/(u-1);d=Array.from({length:u},(w,m)=>{let k=m*p;return{p:k,color:n(k)}})}if(o>0){let p=d.reduce((w,m,k)=>{if(k===0)return 0;let y=Ft(m.color,d[k-1].color,i);return Math.max(w,y)},0);for(;p>o;){p=0;for(let w=1;w<d.length&&d.length<a;w++){let m=d[w-1],k=d[w],y=(k.p+m.p)/2,C=n(y);p=Math.max(p,Ft(C,m.color),Ft(C,k.color)),d.splice(w,0,{p:y,color:n(y)}),w++}}}return d=d.map(p=>p.color),d}function vr(e,t,r={}){if(Vo(e)){let[l,c]=[e,t];return vr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:s}=r;e=F(e),t=F(t),e=or(e),t=or(t);let a={colors:[e,t],options:r};if(n?n=E.get(n):n=E.registry[Te.interpolationSpace]||e.space,o=o?E.get(o):n,e=be(e,n),t=be(t,n),e=Ye(e),t=Ye(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[ye(e,c),ye(t,c)];[u,d]=Md(l,[u,d]),Ge(e,c,u),Ge(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((p,w)=>{let m=t.coords[w];return Wr(p,m,l)}),u=Wr(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(p=>p/u)),o!==n&&(d=be(d,o)),d},{rangeArgs:a})}function Vo(e){return qe(e)==="function"&&!!e.rangeArgs}Te.interpolationSpace="lab";function P1(e){e.defineFunction("mix",Xa,{returns:"color"}),e.defineFunction("range",vr,{returns:"function<color>"}),e.defineFunction("steps",Ka,{returns:"array<color>"})}var L1=Object.freeze({__proto__:null,mix:Xa,steps:Ka,range:vr,isRange:Vo,register:P1}),Qa=new E({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ir,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[s,a,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-i)/c+(o<i?6:0);break;case o:s=(i-n)/c+2;break;case i:s=(n-o)/c+4}s=s*60}return[s,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let s=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),el=new E({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Qa,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),B1=new E({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:el,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let i=1-n,s=i===0?0:1-r/i;return[t,s*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const _1=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],z1=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var tl=new ae({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:_1,fromXYZ_M:z1}),R1=new ae({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:tl,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const j1=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],N1=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var rl=new ae({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Fo,toXYZ_M:j1,fromXYZ_M:N1});const H1=1/512,O1=16/512;var D1=new ae({id:"prophoto",name:"ProPhoto",base:rl,toBase(e){return e.map(t=>t<O1?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=H1?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),F1=new E({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Jr,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),nn(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const ds=203,us=2610/2**14,Z1=2**14/2610,V1=2523/2**5,hs=2**5/2523,ps=3424/2**12,fs=2413/2**7,gs=2392/2**7;var q1=new ae({id:"rec2100pq",name:"REC.2100-PQ",base:on,toBase(e){return e.map(function(t){return(Math.max(t**hs-ps,0)/(fs-gs*t**hs))**Z1*1e4/ds})},fromBase(e){return e.map(function(t){let r=Math.max(t*ds/1e4,0),n=ps+fs*r**us,o=1+gs*r**us;return(n/o)**V1})},formats:{color:{id:"rec2100-pq"}}});const ms=.17883277,vs=.28466892,ws=.55991073,Mn=3.7743;var W1=new ae({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:on,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Mn:Math.exp((t-ws)/ms+vs)/12*Mn})},fromBase(e){return e.map(function(t){return t/=Mn,t<=1/12?Math.sqrt(3*t):ms*Math.log(12*t-vs)+ws})},formats:{color:{id:"rec2100-hlg"}}});const nl={};Ue.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ol(e.W1,e.W2,e.options.method))});Ue.add("chromatic-adaptation-end",e=>{e.M||(e.M=ol(e.W1,e.W2,e.options.method))});function sn({id:e,toCone_M:t,fromCone_M:r}){nl[e]=arguments[0]}function ol(e,t,r="Bradford"){let n=nl[r],[o,i,s]=G(n.toCone_M,e),[a,l,c]=G(n.toCone_M,t),u=[[a/o,0,0],[0,l/i,0],[0,0,c/s]],d=G(u,n.toCone_M);return G(n.fromCone_M,d)}sn({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});sn({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});sn({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});sn({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Se,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Se.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const U1=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],G1=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var il=new ae({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Se.ACES,toXYZ_M:U1,fromXYZ_M:G1,formats:{color:{}}});const Er=2**-16,An=-.35828683,Ir=(Math.log2(65504)+9.72)/17.52;var Y1=new ae({id:"acescc",name:"ACEScc",coords:{r:{range:[An,Ir],name:"Red"},g:{range:[An,Ir],name:"Green"},b:{range:[An,Ir],name:"Blue"}},referred:"scene",base:il,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Er)*2:r<Ir?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Er)+9.72)/17.52:t<Er?(Math.log2(Er+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),bs=Object.freeze({__proto__:null,XYZ_D65:$e,XYZ_D50:Fo,XYZ_ABS_D65:Zo,Lab_D65:co,Lab:de,LCH:nr,sRGB_Linear:Da,sRGB:ir,HSL:Qa,HWB:B1,HSV:el,P3_Linear:Oa,P3:Fa,A98RGB_Linear:tl,A98RGB:R1,ProPhoto_Linear:rl,ProPhoto:D1,REC_2020_Linear:on,REC_2020:Ha,OKLab:Jr,OKLCH:F1,Jzazbz:Ua,JzCzHz:uo,ICTCP:ho,REC_2100_PQ:q1,REC_2100_HLG:W1,ACEScg:il,ACEScc:Y1}),ct;const te=class{constructor(...t){jt(this,ct,void 0);let r;t.length===1&&(r=F(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,dn(this,ct,E.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in vt(this,ct).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get space(){return vt(this,ct)}get spaceId(){return vt(this,ct).id}clone(){return new te(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=_d(this,...t);return r.color=new te(r.color),r}static get(t,...r){return t instanceof te?t:new te(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,s=function(...a){let l=r(...a);if(i==="color")l=te.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let d=c(...u);return te.get(d)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>te.get(c)));return l};t in te||(te[t]=s),o&&(te.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)te.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(te);else for(let r in t)te.defineFunction(r,t[r])}};let Z=te;ct=new WeakMap;Z.defineFunctions({get:ye,getAll:mr,set:Ge,setAll:Na,to:be,equals:zd,inGamut:Ut,toGamut:Ye,distance:Za,toString:Yr});Object.assign(Z,{util:xd,hooks:Ue,WHITES:Se,Space:E,spaces:E.registry,parse:ja,defaults:Te});for(let e of Object.keys(bs))E.register(bs[e]);for(let e in E.registry)fo(e,E.registry[e]);Ue.add("colorspace-init-end",e=>{var t;fo(e.id,e),(t=e.aliases)==null||t.forEach(r=>{fo(r,e)})});function fo(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(Z.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return E.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,s)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:a}=E.resolveCoord([t,i]);if(a>=0)return o[a]}return Reflect.get(o,i,s)},set:(o,i,s,a)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=E.resolveCoord([t,i]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,i,s,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Z.extend(po);Z.extend({deltaE:Ft});Z.extend(T1);Z.extend({contrast:t1});Z.extend(n1);Z.extend(jd);Z.extend(L1);Z.extend(jr);function sl(e){return Oc(e,(t,r)=>r instanceof Z?B(r.toString({format:"hex"})):sl(r))}const J1="dodgerblue";function go(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function En({background:e,foreground:t}){return{background:e??new Z(go(t)),foreground:t??new Z(go(e))}}var Xr;(function(e){e.Dark="dark",e.Light="light"})(Xr||(Xr={}));function X1(e){return e==="black"?"white":"black"}const K1={black:{foregroundFaint1:new Z("#ccc"),foregroundFaint2:new Z("#eee")},white:{foregroundFaint1:new Z("#ccc"),foregroundFaint2:new Z("#eee")}},Q1={black:{backgroundFaint1:new Z("#666"),backgroundFaint2:new Z("#444")},white:{backgroundFaint1:new Z("#ccc"),backgroundFaint2:new Z("#fafafa")}};function $s({themeColor:e=J1,themeStyle:t=Xr.Light}={}){const r=new Z(e),n=new Z(t===Xr.Dark?"black":"white"),o=go(n),i=new Z(o),s={nav:{hover:En({background:r.clone().set({"hsl.l":93})}),active:En({background:r.clone().set({"hsl.l":90})}),selected:En({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Q1[X1(o)],foreground:i,...K1[o]}};return sl(s)}const al=Oo()("change-page"),mo=fr({"vir-icon-color":"currentColor"}),eu=fr({"vir-icon-stroke-color":mo["vir-icon-color"].value,"vir-icon-fill-color":mo["vir-icon-color"].value}),In={...mo,...eu};function ll({name:e,svgTemplate:t}){return{name:e,templateString:typeof t=="string"?t:no(t)}}const We=tn()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:e})=>!!e.fitContainer},styles:({hostClassSelectors:e})=>f`
        :host {
            display: block;
            color: ${In["vir-icon-color"].value};
            fill: ${In["vir-icon-fill-color"].value};
            stroke: ${In["vir-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?i0(e.icon.templateString):""}),tu=ll({name:"Element16Icon",svgTemplate:h`
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
    `}),{defineElement:gt,defineElementNoInputs:ef}=wa(),ne=gt()({tagName:"element-book-route-link",cssVars:{anchorPadding:""},styles:({cssVarValues:e})=>f`
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
                ${A("click",i=>{(!e.router||ed(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new al(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),Tr=gt()({tagName:"element-book-nav",styles:f`
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
            padding-right: 16px;
            display: block;
            ${ne.cssVarNames.anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${ne} {
            font-size: 20px;
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
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        ${We} {
            display: inline-flex;
            color: ${D["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=cl({indent:0,entryTreeNode:e.tree,rootPath:[],router:e.router,selectedPath:e.selectedPath.slice(1)});return h`
            <ul>
                ${t}
            </ul>
        `}});function cl({indent:e,entryTreeNode:t,rootPath:r,selectedPath:n,router:o}){const i=t.breadcrumb?r.concat(t.breadcrumb):r,s=t.entry.type===Oe.Page,a=Object.values(t.children).map(l=>cl({indent:e+1,entryTreeNode:l,rootPath:i,selectedPath:n,router:o}));return h`
        <div class="nav-tree-entry" style="--indent: ${e};">
            <slot></slot>
            <li class=${t.entry.type}>
                <${ne}
                    ${g(ne,{router:o,route:{paths:[we.Book,...i]}})}
                    class=${Me({"title-row":!0,selected:Lo(n,i)})}
                >
                    <div class="title-text">
                        ${ht(s,h`
                                <${We} ${g(We,{icon:tu})}></${We}>
                            `)}
                        ${t.entry.title}
                    </div>
                </${ne}>
            </li>
            ${a}
        </div>
    `}const ru=ll({name:"Element24Icon",svgTemplate:h`
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
    `}),Tn=gt()({tagName:"element-book-breadcrumbs",styles:f`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,s=o.slice(0,n+1),a=i?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${ne}
                    ${g(ne,{route:{hash:void 0,search:void 0,paths:[we.Book,...s]},router:e.router})}
                >
                    ${r}
                </${ne}>
                ${a}
            `}):h`
                &nbsp;
            `}}),nu=h`
    &nbsp;
`,Pr=gt()({tagName:"element-book-example-controls",styles:f`
        :host {
            display: flex;
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=e.example.hideControls?"":e.example.title;return h`
            <span>
                ${t||nu}
                <span></span>
            </span>
        `}}),ys=Symbol("unset-internal-state"),Pn=gt()({tagName:"element-book-example-viewer",stateInit:{internalState:ys},renderCallback({state:e,inputs:t,updateState:r}){e.internalState===ys&&r({internalState:t.example.stateInit});try{const n=t.example.render({state:e.internalState,updateState:o=>{r({internalState:{...e.internalState,...o}})}});return h`
                ${ht(!!t.example.styles,h`
                        <style>
                            ${t.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${t.breadcrumbs.join(" > ")} failed: ${Po(n)}`}}}),Ln=gt()({tagName:"element-book-page-examples",styles:f`
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

        .individual-example-wrapper:hover ${Pr} {
            color: ${D["element-book-accent-icon-color"].value};
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,renderCallback({inputs:e}){const t=e.page.examples,r=t.every(n=>n.hideControls);return o0(t,n=>e.parentBreadcrumbs.concat(n.title).join(">"),n=>{const o=e.parentBreadcrumbs.concat(n.title);return h`
                    <div class="individual-example-wrapper">
                        ${ht(!r,h`
                                <${Pr}
                                    class=${Me({"hidden-controls":!!n.hideControls})}
                                    ${g(Pr,{example:n})}
                                ></${Pr}>
                            `)}
                        <${Pn}
                            ${g(Pn,{example:n,breadcrumbs:o})}
                        ></${Pn}>
                    </div>
                `})}}),$t=gt()({tagName:"element-book-entry-display",styles:f`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${D["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${D["element-book-page-background-color"].value};
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

        ${ne} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${We} {
            color: ${D["element-book-accent-icon-color"].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${D["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${D["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=ul(e.currentNode),r=cr(e.currentNode.entry,!1).reverse(),n=dl({nestedPages:t,parentBreadcrumbs:r,isTopLevel:!0,router:e.router});return h`
            <div class="title-bar">
                <${Tn}
                    ${g(Tn,{currentRoute:e.currentRoute,router:e.router})}
                ></${Tn}>
            </div>
            <div class="all-examples-wrapper">${n}</div>
        `}});function dl({nestedPages:e,parentBreadcrumbs:t,isTopLevel:r,router:n}){return e.map(o=>{if(Vc(o,Oe.Page)){const i=o.entry;if(!Zc(i,Oe.Page))throw new Error("nested entry should be a page");const s=h`
                    <${We} ${g(We,{icon:ru})}></${We}>
                    ${i.title}
                `,a=r?h`
                          <h2 class="header-with-icon">${s}</h2>
                      `:h`
                          <h3 class="header-with-icon">${s}</h3>
                      `,l=[we.Book,...t.concat(o.breadcrumb)];return h`
                    <div class="page-examples">
                        <div class="title-group">
                            <${ne}
                                ${g(ne,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                            >
                                ${a}
                            </${ne}>
                            ${xs(i)}
                        </div>
                        <${Ln}
                            ${g(Ln,{page:i,parentBreadcrumbs:t})}
                        ></${Ln}>
                    </div>
                `}else return Object.entries(o).map(([i,s])=>{const a=r?h`
                                  <h1>${i}</h1>
                              `:h`
                                  <h2>${i}</h2>
                              `,l=[we.Book,...t.concat(s.node.breadcrumb)];return h`
                            <div class="title-group">
                                <${ne}
                                    ${g(ne,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                                >
                                    ${a}
                                </${ne}>
                                ${xs(s.node.entry)}
                            </div>
                            ${dl({nestedPages:s.nested,parentBreadcrumbs:s.node.breadcrumb?t.concat(s.node.breadcrumb):t,isTopLevel:!1,router:n})}
                        `})}).flat()}function xs(e){const t=(e.descriptionParagraphs??[]).map(r=>h`
            <p>${r}</p>
        `);return h`
        <div class="description">${t}</div>
    `}function ul(e){return e.entry.type===Oe.Page?[e]:[{[e.entry.title]:{node:e,nested:Object.values(e.children).map(ul).flat()}}]}const ou=new Map,Lr=tn()({tagName:"element-book-app",stateInit:{currentRoute:Ta,router:void 0,colors:{config:void 0,theme:$s(void 0)}},styles:f`
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

        ${$t} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Tr} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({updateState:e,state:t,inputs:r,host:n}){if(r.baseUrl&&!t.router){const o=hd(r.baseUrl);e({router:o}),o.addRouteListener(!0,i=>{e({currentRoute:i})})}},renderCallback:({state:e,inputs:t,host:r,updateState:n})=>{var i;try{let a=function(d){e.router?e.router.setRoutes(d):n({currentRoute:{...e.currentRoute,...d}})};var o=a;const s={themeColor:t.themeColor};if(!Lo(s,(i=e.colors)==null?void 0:i.config)){const d=$s(s);n({colors:{config:s,theme:d}}),yd(r,d)}const l=Rc(ou,t.entries,()=>Wc(t.entries,t.everythingTitle));if(!Gn(e.currentRoute.paths.slice(1),l)){const d=Object.values(l.children)[0];if(!d)throw new Error("No entries exist.");const p=cr(d.entry,!0),w=t.defaultPath??(p.length?p:void 0);if(w&&w.length){const m={paths:[we.Book,...w]};a(m)}}const u=Gn(e.currentRoute.paths.slice(1),l);if(!u)throw new Error(`Tried to self-correct for invalid path ${e.currentRoute.paths.join("/")}
                        but failed to do so.`);return h`
                <div
                    class="root"
                    ${A(al,d=>{const p=r.shadowRoot.querySelector($t.tagName);p?p.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${$t.tagName}' for scrolling.`),a(d.detail)})}
                >
                    <${Tr}
                        ${g(Tr,{tree:l,router:e.router,selectedPath:e.currentRoute.paths})}
                    >
                        <slot name="nav-header"></slot>
                    </${Tr}>
                    <${$t}
                        ${g($t,{currentRoute:e.currentRoute,currentNode:u,router:e.router})}
                    ></${$t}>
                </div>
            `}catch(s){return h`
                <p class="error">${Po(s)}</p>
            `}}}),hl=ee({title:"Data",parent:void 0}),ks="toniq-",{defineElement:oe,defineElementNoInputs:tf}=wa({assertInputs:e=>{if(!e.tagName.startsWith(ks))throw new Error(`Tag name should start with '${ks}' but got '${e.tagName}'`)}}),Cs={interactionDuration:f`--toniq-interaction-transition-duration`,prettyDuration:f`--toniq-pretty-transition-duration`},Q={interaction:f`var(${Cs.interactionDuration}, 84ms)`,pretty:f`var(${Cs.prettyDuration}, 300ms)`};function iu(e,t){return e.map(t)}function pl(e,t){return e.match(t)??[]}function su(e){return e.replace(/,/g,"")}function au(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Ss(e){return e!==e.toUpperCase()}function vo(e){return e.split("").reduce((r,n,o,i)=>{const s=o>0?i[o-1]:"",a=o<i.length-1?i[o+1]:"",l=Ss(s)||Ss(a);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function sr(e,t){return e.split(t)}const lu=String(NaN);function fl(e){if(typeof e=="string"&&isNaN(Number(e)))return lu;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${pl(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${o}`}function cu(e){return typeof e=="number"?e:Number(typeof e=="string"?su(e):e)}function du(e){return String(e).includes("e")}const uu=["january","february","march","april","may","june","july","august","september","october","november","december"];uu.map(e=>e.slice(0,3));function hu(e){return!!e}function pu(e){return!!e&&typeof e=="object"}function Xe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Pe(e,t){let r=!1;const n=Xe(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),{...o,[i]:s}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Xe(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(s)}}):n}const fu=["k","M","B","T","P","E","Z","Y"];function qo({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function gu(e,t,r){const[n,o]=sr(e,"."),i=fl(n),s=pl(i,/,/g).length,a=t[s-1],[l,c]=sr(i,","),u=[c,o].join("");return l.length+1>r?["0.",l[0],t[s]].join(""):[qo({beforeDot:l,afterDot:u,maxLength:r-1}),a].join("")}const Ms=3;function mu({input:e,maxLength:t}){const r=String(e),[n,o]=sr(r,"e"),i=o.replace(/^[\-\+]/,""),s=o[0],a=["e",s,i].join(""),[l,c]=sr(n,"."),u=i.length+Ms;return u===t?[l,a].join(""):u>t?s==="-"?"0":String(1/0):[qo({afterDot:c,beforeDot:l,maxLength:t-i.length+Ms}),a].join("")}function vu(e,t){const[r,n]=sr(fl(e),".");if(r.length<=t)return qo({beforeDot:r,afterDot:n,maxLength:t})}function wu(e,{customSuffixes:t=fu,maxLength:r=6}={}){const n=cu(e);if(isNaN(n)||n===1/0)return String(n);if(du(n))return mu({input:n,maxLength:r});const o=String(n),i=vu(o,r);return i??gu(o,t,r)}function Wo(){return e=>e}function Bn(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const bu=(()=>{const e={backgroundColor:f`#ffffff`,foregroundColor:f`#000000`},t={...e,foregroundColor:f`#00D093`},r={...e,foregroundColor:f`#ACADAD`},n={...e,foregroundColor:f`#D6D6D6`},o={...t},i={...t,foregroundColor:f`#00A876`},s={...t,foregroundColor:f`#1D6852`},a={...n},l={...e,foregroundColor:f`#EAFBF7`},c={...e,backgroundColor:f`#D2EEFA`},u=Bn(o),d=Bn(i),p=Bn(s),w=p,m={backgroundColor:f`#F1F3F6`,foregroundColor:e.foregroundColor},k={...m,foregroundColor:f`#9A9A9D`};return Wo()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:s,divider:a,dividerFaint:l,dropShadow:c,pageDarkPrimary:w,accentPrimary:u,accentPrimaryHover:d,accentPrimaryActive:p,accentSecondary:m,accentTertiary:k})})(),gl=bu;function As(e,t){return B(`--toniq-${vo(e)}-${vo(t)}`)}const Uo=Pe(gl,e=>({backgroundColor:As(e,"backgroundColor"),foregroundColor:As(e,"foregroundColor")}));function ve(e,t){const r=gl[e][t],n=Uo[e][t];return f`var(${n}, ${r})`}const S=Pe(Uo,e=>({foregroundColor:ve(e,"foregroundColor"),backgroundColor:ve(e,"backgroundColor")}));function O(e){return f`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const $u=f`
    pointer-events: none;
    opacity: 0.3;
`;function Gt(e,t,r){return Math.min(Math.max(e,t),r)}function St(e){return`${e}px`}function _n(e){return`${e}%`}function zn(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,u)=>{const d=e[u+1];return d==null?!0:c<=t&&d>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const s=e[o+1];if(s==null)return i;const a=t-i,l=s-t;return a<l?o:o+1}function yu(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=xu(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),s=n+i;s<t&&o.push(s),n=s}return o.push(t),o.length>r&&(Es(o,r),o.length>r&&Es(o,r)),o}function Es(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function xu(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function Qe({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(St(n+r+t));return f`
        ${B(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${S.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const ml=Wo()({toniqFont:{"font-family":f`'Rubik', sans-serif`},normalWeightFont:{"font-weight":f`400`},boldFont:{"font-weight":f`600`},extraBoldFont:{"font-weight":f`900`},paragraphFont:{"line-height":f`24px`,"font-size":f`16px`},boldParagraphFont:{},labelFont:{"line-height":f`16px`,"font-size":f`12px`},boldLabelFont:{},h1Font:{"line-height":f`96px`,"font-size":f`64px`},h2Font:{"line-height":f`48px`,"font-size":f`32px`},h3Font:{"line-height":f`32px`,"font-size":f`24px`},monospaceFont:{"font-family":f`'Inconsolata', monospace`,"line-height":f`1.125em`}}),ku=Pe(ml,(e,t)=>{const r=B(vo(e.replace(/Font$/,"")));return Pe(t,o=>{const i=B(o);return f`--toniq-font-${r}-${i}`})});function Ae(e){const t=ku[e],r=ml[e],n=Xe(t).map(o=>{const i=r[o],s=t[o];return f`
            ${B(o)}: var(${s}, ${i});
        `});return B(n.join(`
`))}const W=(()=>{const e=f`
        font-style: normal;
        color: ${S.pagePrimary.foregroundColor};
        ${Ae("toniqFont")};
    `,t=f`
        ${e};
        ${Ae("normalWeightFont")};
    `,r=f`
        ${e};
        ${Ae("boldFont")};
    `,n=f`
        ${e};
        ${Ae("extraBoldFont")};
    `,o=f`
        ${e};
        ${Ae("paragraphFont")};
        ${t};
    `,i=f`
        ${e};
        ${o};
        ${r};
    `,s=f`
        ${e};
        ${Ae("labelFont")};
        ${t};
    `,a=f`
        ${s};
        ${r};
    `,l=f`
        ${Ae("h1Font")};
        ${n};
    `,c=f`
        ${Ae("h2Font")};
        ${r};
    `,u=f`
        ${Ae("h3Font")};
        ${r};
    `,d=f`
        ${Ae("monospaceFont")}
    `;return Wo()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:s,boldLabelFont:a,h1Font:l,h2Font:c,h3Font:u,monospaceFont:d})})(),et=f`
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
`,pt=f`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,v=oe()({tagName:"toniq-icon",hostClasses:{"icon-fit":!1},styles:({hostClassSelectors:e})=>f`
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

        ${e["icon-fit"]} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>h`
            ${e.icon?s0(e.icon.svgString):""}
        `}),wo=f`8px`,H=oe()({tagName:"toniq-button",hostClasses:{secondary:!1,outline:!1,disabled:!1},styles:({hostClassSelectors:e,hostClassNames:t})=>f`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${pt};
        }

        :host(:hover) button {
            ${O(S.accentPrimaryHover)};
        }

        :host(:active) button {
            ${O(S.accentPrimaryActive)};
        }

        button {
            ${et};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${wo};
            ${O(S.accentPrimary)};
            padding: 10px;
            transition: color ${Q.interaction},
                background-color ${Q.interaction},
                border-color ${Q.interaction};
        }

        ${Qe({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e.secondary} button {
            ${O(S.accentSecondary)};
        }

        ${e.outline} button {
            ${O(S.pagePrimary)};
            border-color: ${S.accentPrimary.backgroundColor};
        }

        ${e.disabled} {
            ${$u};
        }

        :host(.${t.secondary}:hover) button,
        :host(.${t.outline}:hover) button {
            border-color: ${S.accentPrimaryHover.backgroundColor};
        }

        :host(.${t.secondary}:active) button,
        :host(.${t.outline}:active) button {
            border-color: ${S.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${v}
                      class="icon-template"
                      ${g(v,{icon:e.icon})}
                  ></${v}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button>
                <slot>${t} ${r}</slot>
            </button>
        `}});function Cu(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",s=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,a=Go(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=a.filter(d=>i==="+"?d>l:d<l).sort((d,p)=>i==="+"?d-p:p-d);let u;return c.length>0?u=c[0]:i==="+"?u=s:u=0,e.scrollTo({...r,[o==="x"?"left":"top"]:u})}function Su(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),s=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function a(p,w){let m=parseFloat(p);return/%/.test(p)&&(m/=100,m*=w),m}let l=a(n,r.width),c=a(o,r.height),u=a(i,r.width),d=a(s,r.height);return{x:{before:l,after:u},y:{before:c,after:d}}}function Mu(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function vl(e){let t=[];for(const r of e.children)t=t.concat(r,vl(r));return t}function Au(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=vl(e);for(const i of["x","y"]){const s=i==="x"?"y":"x",a=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const u of o){const d=u.getBoundingClientRect();if(t&&!Mu(r,d,s))continue;const p=window.getComputedStyle(u);let[w,m]=p.getPropertyValue("scroll-snap-align").split(" ");typeof m>"u"&&(m=w);const k=i==="x"?m:w,y=d[a]-r[a]+e[c];switch(k){case"none":break;case"start":n[i].start.push(y);break;case"center":n[i].center.push(y+d[l]/2);break;case"end":n[i].end.push(y+d[l]);break}}}return n}function Go(e){const t=e.getBoundingClientRect(),r=Su(e),n=Au(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(s,a)=>l=>Math.max(s,Math.min(a,l));return{x:Is([...n.x.start.map(s=>s-r.x.before),...n.x.center.map(s=>s-t.width/2),...n.x.end.map(s=>s-t.width+r.x.after)].map(i(0,o.x))),y:Is([...n.y.start.map(s=>s-r.y.before),...n.y.center.map(s=>s-t.height/2),...n.y.end.map(s=>s-t.height+r.y.after)].map(i(0,o.y)))}}function Is(e){return Array.from(new Set(e))}const ze={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function Ts(e,t){return`var(${e}, var(${ze.color}, ${t}))`}const x={stroke:(e="currentColor")=>Ts(ze.strokeColor,e),fill:(e="currentColor")=>Ts(ze.fillColor,e)};class b{constructor(t,r){this.iconName=t,this.svgString=r}}function $(e,...t){return e.reduce((n,o,i)=>{const s=i<t.length?t[i]:"";return n+o+s},"")}const Eu=new b("Copy16Icon",$`
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
    `),Iu=new b("ExternalLink16Icon",$`
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
    `),Tu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",wl="0 0 58 58",bl=`<image xlink:href="${Tu}" id="icp-16__b" width="58" height="58" />`,Pu=new b("Icp16Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${wl}"
        >
            ${bl}
        </svg>
    `),Yt=new b("InfoCircle16Icon",$`
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
    `),Lu=new b("ArrowBarUp24Icon",$`
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
    `),Bu=new b("ArrowForwardUp24Icon",$`
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
    `),Yo=new b("ArrowLeft24Icon",$`
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
    `),_u=new b("ArrowLoopLeft24Icon",$`
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
    `),$l=new b("ArrowLoopRight24Icon",$`
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
    `),Jo=new b("ArrowRight24Icon",$`
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
    `),bo=new b("ArrowsSort24Icon",$`
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
    `),yl={popupShadow:f`
        filter: drop-shadow(0px 12px 8px ${S.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function zu(e,t=!0){const r=B(e),n=e===":host"?f`
                  :host(:hover) ;
              `:f`
                  ${r}:hover
              `,o=t?f`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${S.pageInteraction.foregroundColor};
              }
          `:f``;return f`
        ${r} {
            border-radius: 16px;
            background-color: ${S.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${yl.popupShadow};
        }

        ${o}
    `}const Ru=new b("ArrowsSortAscending24Icon",$`
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
    `),ju=new b("ArrowsSortDescending24Icon",$`
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
    `),Nu=new b("Bucket24Icon",$`
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
    `),Hu=new b("BuildingStore24Icon",$`
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
    `),Ou=new b("CalendarEvent24Icon",$`
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
    `),Du=new b("Cash24Icon",$`
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
    `),Fu=new b("Chain24Icon",$`
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
    `),xl=new b("CheckMark24Icon",$`
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
    `),kl=new b("ChevronDown24Icon",$`
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
    `),Zu=new b("ChevronUp24Icon",$`
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
    `),Vu=new b("Circle24Icon",$`
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
    `),Mt=new b("CircleDot24Icon",$`
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
    `),qu=new b("CirclePlusFill24Icon",$`
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
    `),Wu=new b("CirclePlusOutline24Icon",$`
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
    `),Uu=new b("CircleWavyCheck24Icon",$`
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
    `),Gu=new b("Clock24Icon",$`
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
    `),Cl=new b("Code24Icon",$`
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
    `),Sl=new b("Copy24Icon",$`
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
    `),Yu=new b("DotsVertical24Icon",$`
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
    `),Ju=new b("Download24Icon",$`
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
    `),Xu=new b("Edit24Icon",$`
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
    `),Ml=new b("ExternalLink24Icon",$`
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
    `),Ku=new b("Filter24Icon",$`
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
    `),Qu=new b("Geometry24Icon",$`
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
    `),e2=new b("GridDots24Icon",$`
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
    `),t2=new b("HeartFill24Icon",$`
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
    `),r2=new b("HeartOutline24Icon",$`
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
    `),n2=new b("Icp24Icon",$`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${wl}"
        >
            ${bl}
        </svg>
        </svg>
    `),o2=new b("Infinity24Icon",$`
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
    `),i2=new b("LayersLinked24Icon",$`
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
    `),s2=new b("LayoutGrid24Icon",$`
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
    `),a2=new b("Lifebuoy24Icon",$`
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
    `),l2=new b("List24Icon",$`
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
    `),c2=new b("ListDetails24Icon",$`
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
    `),d2=new b("Loader24Icon",$`
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
    `),Al=new b("LoaderAnimated24Icon",$`
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
    `),u2=new b("Lock24Icon",$`
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
    `),h2=new b("LockOpen24Icon",$`
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
    `),p2=new b("Menu24Icon",$`
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
    `),f2=new b("Paper24Icon",$`
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
    `),g2=new b("Photo24Icon",$`
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
    `),$o=new b("Rocket24Icon",$`
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
    `),El=new b("Search24Icon",$`
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
    `),m2=new b("Send24Icon",$`
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
    `),v2=new b("ShoppingCart24Icon",$`
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
    `),w2=new b("Social24Icon",$`
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
    `),b2=new b("Square24Icon",$`
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
    `),$2=new b("SquareCheck24Icon",$`
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
    `),Jt=new b("Trash24Icon",$`
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
    `),y2=new b("Upload24Icon",$`
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
    `),x2=new b("User24Icon",$`
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
    `),k2=new b("Users24Icon",$`
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
    `),C2=new b("Wallet24Icon",$`
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
    `),S2=new b("WorldUpload24Icon",$`
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
    `),M2=new b("X24Icon",$`
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
    `),Il=new b("Kyc32Icon",$`
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
    `),Tl=new b("FolderOff48Icon",$`
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
    `),Pl=new b("Api64Icon",$`
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
    `),A2=new b("CircleDashes64Icon",$`
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
    `),E2=new b("Rocket64Icon",$`
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
    `),I2=new b("EntrepotLogo144Icon",$`
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
    `),Ll=new b("BrandDiscord24Icon",$`
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
    `),T2=new b("BrandIcScan24Icon",$`
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
    `),Bl=new b("BrandInstagram24Icon",$`
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
    `),P2=new b("BrandInstagramFlat24Icon",$`
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
    `),_l=new b("BrandTelegram24Icon",$`
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
    `),zl=new b("BrandTiktok24Icon",$`
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
            fill="${x.fill()}"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `),Rl=new b("BrandTwitch24Icon",$`
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
    `),jl=new b("BrandTwitter24Icon",$`
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
    `),Xt={"core-16":[Eu,Iu,Pu,Yt],"core-24":[Lu,Bu,Yo,_u,$l,Jo,bo,Ru,ju,Nu,Hu,Ou,Du,Fu,xl,kl,Zu,Vu,Mt,qu,Wu,Uu,Gu,Cl,Sl,Yu,Ju,Xu,Ml,Ku,Qu,e2,t2,r2,n2,o2,i2,s2,a2,l2,c2,d2,Al,u2,h2,p2,f2,g2,$o,El,m2,v2,w2,b2,$2,Jt,y2,x2,k2,C2,S2,M2],"core-32":[Il],"core-48":[Tl],"core-64":[Pl,A2,E2],logos:[I2],"third-party-brands":[Ll,T2,Bl,P2,_l,zl,L2,Rl,jl]},Nr="templates-container",B2=4e3,V=oe()({tagName:"toniq-carousel",cssVars:{"arrow-margin":"40px"},hostClasses:{"banner-style":!1},stateInit:{currentScrollPosition:{left:0,right:1/0},templatesWrapperHeight:0,scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVarValues:e,hostClassSelectors:t})=>f`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        .${B(Nr)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }

        .${B(Nr)} {
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

        .arrow ${v} {
            transition: ${Q.pretty};
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["arrow-margin"]};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${O(S.pagePrimary)};
        }

        .hidden {
            /*
                Don't set opacity: 0 here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback:({inputs:e,state:t,updateState:r,host:n})=>{e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{Rn({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||B2)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Ps(t.scrollSnapPositions,0),i=Ps(t.scrollSnapPositions,-1);return h`
            <div
                ${eo(()=>{r({scrollSnapPositions:Go(yo(n)).x})})}
                class=${Nr}
                ${A("scroll",async s=>{const a=s.target;if(!(a instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:a.scrollLeft,right:a.scrollWidth-a.scrollLeft-a.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${v}
                        class=${Me({hidden:t.currentScrollPosition.left<=(o??100)})}
                        ${g(v,{icon:Yo})}
                        ${A("click",()=>{Rn({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${v}>
                </div>
                ${e.templates.map(s=>h`
                        <div class="template-wrapper">${s}</div>
                    `)}
                <div class="arrow right">
                    <${v}
                        class=${Me({hidden:i==null?t.currentScrollPosition.right<=100:t.currentScrollPosition.left>=i})}
                        ${g(v,{icon:Jo})}
                        ${A("click",()=>{Rn({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${v}>
                </div>
            </div>
        `}});function Ps(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],s=e[o];if(!(i==null||s==null))return(i+s)/2+r*20}function yo(e){const t=e.shadowRoot.querySelector(`.${Nr}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function Rn({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=yo(e),i=o.clientWidth,s=Go(yo(e)).x,a=s[0]??0,l=s.slice(-1).pop()??i,c=o.scrollLeft>=l-10,u=o.scrollLeft<=a+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:a});else if(t==="left"&&u)r&&o.scrollTo({behavior:"smooth",left:l});else{const d=_2(e,t),p=Ls(o.scrollLeft,s,!1),w=t==="right"?1:-1,m=(o.clientWidth-d*3)*w,k=Ls((p||0)+m,s,!0);t==="right"&&k>p?o.scrollTo({behavior:"smooth",left:k}):t==="left"&&k<p?o.scrollTo({behavior:"smooth",left:k}):Cu(o,t)}}function _2(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Ls(e,t,r){return t.reduce((o,i)=>{const s=Math.abs(e-i),a=Math.abs(e-o);return s<a&&(!r||i<=e)?i:o},1/0)}const R=oe()({tagName:"toniq-checkbox",events:{checkedChange:ue()},hostClasses:{},cssVars:{uncheckedCheckboxColor:String(ve("accentSecondary","backgroundColor")),uncheckedLabelColor:String(ve("pagePrimary","foregroundColor")),checkedCheckboxColor:String(ve("accentPrimary","backgroundColor")),checkedCheckColor:String(ve("accentPrimary","foregroundColor")),checkedLabelColor:String(ve("pageInteraction","foregroundColor"))},styles:({cssVarValues:e,cssVarNames:t})=>f`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition: color ${Q.interaction},
                background-color ${Q.interaction},
                opacity ${Q.interaction};
            border-radius: 8px;
        }

        button {
            ${et};
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
            ${pt};
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

        ${Qe({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
                <${v}
                    class="check-mark ${Me({hidden:!e.checked})}"
                    ${g(v,{icon:xl})}
                ></${v}>
            </span>
        `,o=h`
            <slot
                class=${Me({label:!0,checked:e.checked})}
            >
                <span
                    class=${Me({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return h`
            <button
                class="wrapper ${e.checked?"checked":""}"
                ${A("click",()=>{const i=!e.checked;t(new r.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${n} ${o}
            </button>
        `}}),Y=oe()({tagName:"toniq-chip",hostClasses:{secondary:!1},styles:({hostClassSelectors:e})=>f`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${W.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${O(S.accentPrimary)};
        }

        ${e.secondary} {
            ${O(S.accentSecondary)};
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${v}
                      ${g(v,{icon:e.icon})}
                  ></${v}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}}),z2="data-test-id",At=De(class extends Ke{constructor(e){super(e),this.element=R2(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(z2,e),xe}});function R2(e,t,r){j2(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function j2(e,t){if(e.type!==dr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}const N=oe()({tagName:"toniq-dropdown",stateInit:{dropdownOpen:!1},events:{selectChange:ue()},styles:f`
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
            ${et}
            border-radius: 8px;
            outline: none;
        }

        ${Qe({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${pt};
            ${O(S.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 8px;
            ${O(S.pagePrimary)}
            ${yl.popupShadow};
        }

        .selected-label-prefix {
            ${W.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${pt};
        }

        .select-options .option.selected {
            ${O(S.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${S.accentTertiary.backgroundColor};
        }

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var a;const i=(a=t.shadowRoot)==null?void 0:a.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback:({dispatch:e,events:t,state:r,inputs:n,updateState:o})=>{const i=n.selected?n.selected:n.options[0];function s(){o({dropdownOpen:!r.dropdownOpen})}function a(u){o({dropdownOpen:!1}),e(new t.selectChange(u))}const l=n.icon?h`
                  <${v}
                      ${At("rendered-input-icon")}
                      ${g(v,{icon:n.icon})}
                  ></${v}>
              `:"",c=n.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                class="dropdown ${r.dropdownOpen?"open":""}"
                @click=${()=>s()}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${l}
                    <span class="select-selected">${c} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${v}
                            class="trigger-icon"
                            ${g(v,{icon:kl})}
                        ></${v}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(u=>h`
                                <span
                                    class="option ${u.value===(i==null?void 0:i.value)?"selected":""}"
                                    @click=${d=>{d.preventDefault(),d.stopPropagation(),a(u)}}
                                    role="option"
                                >
                                    ${u.label}
                                </span>
                            `)}
                </div>
            </button>
        `}}),je=oe()({tagName:"toniq-flip-card",events:{flippedChange:ue()},styles:f`
        :host {
            max-width: 100%;
            display: inline-block;
            perspective: 1200px;
            position: relative;
            border-radius: 16px;
            box-sizing: border-box;
        }

        * {
            border-radius: inherit;
            box-sizing: border-box;
        }

        .flip-wrapper {
            height: 100%;
            width: 100%;
            position: relative;
            transition: transform 600ms;
            transform-style: preserve-3d;
            will-change: transform;
        }

        .flip-wrapper.flipped {
            transform: rotateY(180deg);
        }

        ${zu(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${S.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
        }
    `,renderCallback:({inputs:e,dispatch:t,events:r})=>h`
            <div
                class="flip-wrapper ${Me({flipped:e.flipped})}"
                ${A("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}),He=oe()({tagName:"toniq-hyperlink",hostClasses:{"with-hover-styles":!1},styles:({hostClassSelectors:e})=>f`
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

        ${e["with-hover-styles"]}:hover a, ${e["with-hover-styles"]} a:hover {
            color: ${S.pageInteraction.foregroundColor};
        }

        ${e["with-hover-styles"]}:active a, ${e["with-hover-styles"]} a:active {
            color: ${S.pageInteractionActive.foregroundColor};
        }
    `,renderCallback({inputs:e}){return e.newTab?h`
                <a href=${e.url} target="_blank" rel="noopener noreferrer"><slot></slot></a>
            `:h`
                <a href=${e.url}><slot></slot></a>
            `}});function xo({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>xo({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Nl({value:e,allowed:t,blocked:r}){const n=t?xo({input:e,matcher:t}):!0,o=r?xo({input:e,matcher:r}):!1;return n&&!o}function Bs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Nl({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const T=oe()({tagName:"toniq-input",hostClasses:{outline:!1,hasAValue:({inputs:e})=>!!e.value},events:{valueChange:ue(),inputBlocked:ue()},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
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
                border-radius: ${wo};
                z-index: 0;
                pointer-events: none;
            }

            ${t.outline} label {
                background-color: ${S.pagePrimary.backgroundColor};
                border: 1px solid ${S.pageTertiary.foregroundColor};
            }

            ${t.outline} ${v} {
                color: ${S.pageSecondary.foregroundColor};
            }

            :host(.${e.hasAValue}.${e.outline}) ${v} {
                color: ${S.pagePrimary.foregroundColor};
            }

            ${t.outline} input::placeholder {
                color: ${S.pageSecondary.foregroundColor};
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
                border-radius: ${wo};
                background-color: ${S.accentTertiary.backgroundColor};
                font: ${W.paragraphFont};
            }

            ${Qe({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${v} {
                margin-right: 10px;
            }

            input {
                ${et};
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
                color: ${S.accentTertiary.foregroundColor};
            }
        `,renderCallback:({inputs:e,dispatch:t,events:r})=>{const{filtered:n}=Bs({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?h`
                  <${v} ${g(v,{icon:e.icon})}></${v}>
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
                    ${A("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const s=i.target;if(!(s instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const a=i.data,l=n;let c=s.value??"";if(a)if(a.length===1)Nl({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(a)));else{const{filtered:u,blocked:d}=Bs({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});c=u,t(new r.inputBlocked(d))}s.value!==c&&(s.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                <div class="focus-border"></div>
            </label>
        `}});T.hostClasses.outline;async function N2(e){return navigator.clipboard.writeText(e)}const H2="…";function O2(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${H2}${n}`}function D2(e){return!(e%1)}function F2(e){return e.letterCount==null?4:D2(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const q=oe()({tagName:"toniq-middle-ellipsis",events:{copied:ue()},cssVars:{textColor:S.pagePrimary.foregroundColor,iconColor:S.pagePrimary.foregroundColor,textHoverColor:S.pageInteraction.foregroundColor,iconHoverColor:S.pageInteraction.foregroundColor},styles:({hostClassNames:e,cssVarValues:t})=>f`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Q.interaction};
            ${W.paragraphFont};
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

        :host(.${e.clickable}:hover) ${v} {
            color: ${t.iconHoverColor};
        }

        ${v} {
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
            ${et};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Qe({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${S.pagePrimary.backgroundColor};
            background-color: ${S.pagePrimary.backgroundColor};
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
    `,hostClasses:{clickable:({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInit:{showCopiedTextTimeoutId:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{if(!e.text)return h``;const i=e.text,s=F2(e),a=!!e.externalLink,l=!!e.copyOnClick,c=i.length>s*2+2,u=c?O2(i,s):i,d=c?i:"",p=a?Ml:l?Sl:void 0,w=p?h`
                  <${v} ${g(v,{icon:p})}></${v}>
              `:"",m=h`
            <span title=${d} class="text-content">
                ${ht(!!e.copyOnClick,h`
                        <span
                            class=${Me({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${A("click",k=>{var C,M;const y=(M=(C=k.currentTarget)==null?void 0:C.querySelector)==null?void 0:M.call(C,"a");if(!y)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");y.click()})}
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
                            ${m} ${w}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${A("click",async()=>{await N2(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${m} ${w}
                    </button>
                `:h`
                    ${m}
                `:h``}}),_s="...";function Z2(e,t,r=7,n=5){let o;e=Gt(e,1,t),r=Gt(r,n,t);const i=r-5,s=r-3;t<=r?o=r:o=e<s||e>t-s?s:i;const a={start:Math.round(e-o/2),end:Math.round(e+o/2)};(a.start-1===1||a.end+1===t)&&(a.start+=1,a.end+=1);const l=e>t-s&&t>r?jn(t-o,t):e>o?jn(Math.min(a.start,t-o),Math.min(a.end,t)):jn(1,Math.min(t,o+1));function c(d,p){return l.length+1!==t?p:[d]}const u=l[l.length-1];if(u&&u<t){const d=c(t,[_s,t]);return[...l,...d]}else return l[0]!==1?c(1,[1,_s]).concat(l):l}function jn(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}oe()({tagName:"toniq-pagination",styles:f`
        :host {
            display: flex;
        }

        button {
            ${et}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${pt};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${O(S.accentSecondary)};
        }

        .control:hover {
            ${O(S.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${O(S.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${W.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${O(S.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${O(S.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:ue()},renderCallback:({inputs:e,events:t,dispatch:r})=>e.pageCount<=1?h``:h`
                <button
                    ${A("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${v} ${g(v,{icon:Yo})}></${v}>
                </button>
                ${Z2(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?h`
                                <div class="page" disabled>${n}</div>
                            `:h`
                                <button
                                    class=${Me({page:!0,selected:e.currentPage===n})}
                                    ?disabled=${e.currentPage===n}
                                    ${A("click",()=>{r(new t.pageChange(n))})}
                                >
                                    ${n}
                                </button>
                            `)}
                <button
                    ${A("click",()=>{e.currentPage<e.pageCount&&r(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${v} ${g(v,{icon:Jo})}></${v}>
                </button>
            `});function V2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}const q2=["january","february","march","april","may","june","july","august","september","october","november","december"];q2.map(e=>e.slice(0,3));const Hl=globalThis.crypto;function W2({min:e,max:t}){const{min:r,max:n}=V2({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),s=Math.floor(256**i/o)*o,a=new Uint8Array(i);let l;do Hl.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=s);return r+l%o}function Ol(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Hl.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Br(e){return String(e).endsWith("px")?String(e):`${e}px`}const j=oe()({tagName:"toniq-radio-group",stateInit:{randomGroupName:""},events:{valueChange:ue()},cssVars:{uncheckedRadioColor:String(ve("pagePrimary","foregroundColor")),uncheckedLabelColor:String(ve("pagePrimary","foregroundColor")),checkedRadioColor:String(ve("accentPrimary","backgroundColor")),checkedLabelColor:String(ve("pageInteraction","foregroundColor")),disabledColor:String(ve("pageSecondary","foregroundColor"))},styles:({cssVarValues:e})=>f`
        :host {
            ${W.boldParagraphFont};
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
            color: ${e.uncheckedLabelColor};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${e.checkedRadioColor};
            outline: none;
            text-align: inherit;
        }

        button {
            ${et}
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
            transition: ${Q.interaction};
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

        ${Qe({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,initCallback:({updateState:e})=>{e({randomGroupName:Ol()})},renderCallback:({inputs:e,dispatch:t,events:r,state:n})=>U2(e.entries).map(i=>G2(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))});function U2(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${j.tagName} was given duplicate entry values.`),Object.values(t)}function G2(e,t,r,n){const o=t===r.value,i=h`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${Me({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
            ${A("click",()=>{n()})}
        >
            <input
                ${A("input",()=>{n()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}const z={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Ot={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function Y2(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${z.lowerLabelWrapper} .${z.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${z.upperLabelWrapper} .${z.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),s=r.getBoundingClientRect();return{lower:i,upper:s}}else return}function J2(e,t=8){const r=Y2(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function Nn({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function ar(e){return pu(e)&&e.min!==void 0&&e.max!==void 0}function ko(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${z.range}`);return(t==null?void 0:t.clientWidth)??0}function Hn(e,t,r){return`${r?wu(e):e} ${t}`}function X2({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function K2({value:e,double:t,min:r,max:n}){return t?ar(e)?{min:Gt(e.min,r,Math.min(e.max,n)),max:Gt(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:ar(e)?r:Gt(e,r,n)}function Q2({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:ar(e)?{min:zn(n,e.min),max:zn(n,e.max)}:zn(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function On(e,t,r){return r?t[e]||0:e}function eh(e){return{actualLimits:X2(e),actualValue:K2(e)}}function th(e,t){var n,o,i;let r=!1;if(ar(e)){const s=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${z.lowerSlider}`),a=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${z.upperSlider}`);s instanceof HTMLInputElement&&a instanceof HTMLInputElement&&(Number(s.value)!==e.min&&(s.value=String(e.min),r=!0),Number(a.value)!==e.max&&(a.value=String(e.max),r=!0))}else{const s=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${z.slider}`);s instanceof HTMLInputElement&&Number(s.value)!==e&&(s.value=String(e),r=!0)}return r}function Dl(e,t){const{actualValue:r,actualLimits:n}=eh({...e}),o=yu(n.min,n.max),i=e.logScale??!1,s=e.suffix??"",{elementValue:a,elementLimits:l}=Q2({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=ko(t);return{actualValue:r,elementLimits:l,elementValue:a,isLogScale:i,logRange:o,rangeWidth:c,suffix:s}}const it=16,zs=f`
    ${it}px
`,Rs=f`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${zs};
    width: ${zs};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Q.interaction};
    ${O(S.accentPrimary)};
`,js=f`
    transform: scale(1.2);
`;function Zt(e){requestAnimationFrame(()=>{const t=Dl(e.instanceInputs,e).elementValue;th(t,e)&&(e.setAttribute("disabled","true"),Zt(e))})}const L=oe()({tagName:"toniq-slider",stateInit:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:ue()},styles:f`
        :host {
            display: block;
        }

        .${B(z.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${O(S.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${O(S.accentPrimary)};
        }

        .${B(z.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${W.boldParagraphFont};
            ${pt};
        }

        .${B(z.labelPixelMarginWrapper)},
            .${B(z.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${B(z.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${B(z.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Qe({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${B(z.lowerSlider)},
        .${B(z.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${B(z.slider)}::-moz-range-thumb {
            ${Rs}
        }

        /* these selectors fail if combined with a comma */
        .${B(z.slider)}::-webkit-slider-thumb {
            ${Rs}
        }

        /* these selectors fail if combined with a comma */
        .${B(z.slider)}::-webkit-slider-thumb:hover {
            ${js}
        }

        /* these selectors fail if combined with a comma */
        .${B(z.slider)}::-moz-range-thumb:hover {
            ${js}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Zt(e)}),e.addEventListener("keydown",()=>{Zt(e)}),e.addEventListener("keyup",()=>{Zt(e)})},renderCallback:({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i})=>{const{actualValue:s,logRange:a,isLogScale:l,suffix:c,elementValue:u,elementLimits:d,rangeWidth:p}=Dl({...e},t);if(Zt(t),ar(u))return w(s,u,d);return k(s,u,d);function w(y,C,M){const _={left:St((p-it)*(C.min-M.min)/(M.max-M.min)+it/2),right:St((p-it)*(M.max-C.max)/(M.max-M.min)+it/2)},X=Hn(y.min,c,l),he=Hn(y.max,c,l);requestAnimationFrame(()=>{const pe=J2(t);pe!==o.labelOverlap&&i({labelOverlap:pe})});const Le=(M.max-C.max)/(M.max-M.min)>.5,Fe=Nn({value:C.min,limits:{min:M.min,max:C.max},flip:!0}),ie=Nn({value:C.max,limits:{min:C.min,max:M.max},flip:!1}),tt=o.labelOverlap&&Le?o.labelOverlap:0,br=o.labelOverlap&&!Le?o.labelOverlap:0;return h`
                <div
                    class="range"
                    ${eo(()=>{i({rangeWidth:ko(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${_.left}; right:${_.right}"
                    ></div>
                    <span
                        class="${z.labelOuterWrapper} ${z.lowerLabelWrapper}"
                        style="left: ${_.left}"
                    >
                        <span
                            class="${z.labelPercentMarginWrapper}"
                            style="margin-left: ${_n(Fe)}"
                        >
                            <span
                                class="${z.labelPixelMarginWrapper}"
                                style="margin-right: ${St(br)}"
                                ${At(Ot.lowerLabel)}
                            >
                                ${X}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${z.labelOuterWrapper} ${z.upperLabelWrapper} ${z.rightAlignedLabelWrapper}"
                        style="right: ${_.right}"
                    >
                        <span
                            class="${z.labelPercentMarginWrapper}"
                            style="margin-right: ${_n(ie)}"
                        >
                            <span
                                class="${z.labelPixelMarginWrapper}"
                                style="margin-left: ${St(tt)}"
                                ${At(Ot.upperLabel)}
                            >
                                ${he}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${z.lowerSlider} ${z.slider}"
                            .min=${M.min}
                            .max=${M.max}
                            .value=${C.min}
                            ${A("input",pe=>{const mt=pe.target,zt={...y,min:On(Number(mt.value),a,l)};m(zt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${z.upperSlider} ${z.slider}"
                            step=${e.step}
                            .min=${M.min}
                            .max=${M.max}
                            .value=${C.max}
                            ${At(Ot.slider)}
                            ${A("input",pe=>{const mt=pe.target,zt={...y,max:On(Number(mt.value),a,l)};m(zt)})}
                        />
                    </div>
                </div>
            `}function m(y){i({internalValue:y}),e.disabled||n(new r.valueChange(y))}function k(y,C,M){const _=St((p-it)*(M.max-C)/(M.max-M.min)+it/2),X=Hn(y,c,l),he=Nn({value:C,limits:M,flip:!1});return h`
                <div
                    class="range"
                    ${eo(()=>{i({rangeWidth:ko(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${_}"></div>
                    <span
                        class="${z.labelOuterWrapper} ${z.rightAlignedLabelWrapper}"
                        style="right: ${_}"
                    >
                        <span
                            class="${z.labelPercentMarginWrapper}"
                            style="margin-right: ${_n(he)}"
                            ${At(Ot.label)}
                        >
                            ${X}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${z.slider}"
                        step=${e.step}
                        .min=${M.min}
                        .max=${M.max}
                        .value=${C}
                        ${At(Ot.slider)}
                        ${A("input",Le=>{const Fe=Le.target,ie=On(Number(Fe.value),a,l);m(ie)})}
                    />
                </div>
            `}}}),ge=oe()({tagName:"toniq-toggle-button",hostClasses:{textOnly:!1},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
        :host {
            ${W.boldParagraphFont};
            ${pt};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${et};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${O(S.accentSecondary)};
            transition: color ${Q.interaction},
                background-color ${Q.interaction};
        }

        ${Qe({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${O(S.accentPrimary)};
        }

        :host(:hover) button {
            ${O(S.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${O(S.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${O(S.accentPrimaryActive)};
        }

        ${t.textOnly} button {
            ${O(S.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${t.textOnly} button.toggled {
            ${O(S.pageInteraction)};
            border-color: ${S.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e.textOnly}:hover) button.toggled {
            ${O(S.pageInteractionHover)};
        }
        :host(.${e.textOnly}:hover) button {
            color: ${S.pageInteraction.foregroundColor};
        }
        :host(.${e.textOnly}:active) button.toggled {
            ${O(S.pageInteractionActive)};
        }
        ${t.textOnly} button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${v}
                      class="icon-template"
                      ${g(v,{icon:e.icon})}
                  ></${v}>
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
        `}});function rh(e,t){return e.includes(t)}const nh=["january","february","march","april","may","june","july","august","september","october","november","december"];nh.map(e=>e.slice(0,3));function Fl(e){return!!e&&typeof e=="object"}const oh=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Hr(e,t){return e?oh.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ns(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ih(e){return Array.isArray(e)?"array":typeof e}function Zl(e,t){return ih(e)===t}function sh(e,t){let r=!1;const n=Ns(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),{...o,[i]:s}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ns(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(s)}}):n}const Vl=Symbol("and"),ql=Symbol("or"),Wl=Symbol("exact"),Ul=Symbol("enum"),Gl=Symbol("unknown"),Yl="__vir__shape__definition__key__do__not__use__in__actual__objects";function ah(e){return Hr(e,Yl)}const lh="__vir__shape__specifier__key__do__not__use__in__actual__objects",ch=[Vl,ql,Wl,Ul,Gl];function dh(e){return wr(e,ql)}function uh(e){return wr(e,Vl)}function hh(e){return wr(e,Wl)}function ph(e){return wr(e,Ul)}function fh(e){return wr(e,Gl)}function wr(e,t){const r=Jl(e);return!!r&&r.specifierType===t}function Jl(e){if(Fl(e)&&Hr(e,lh)){if(!Hr(e,"parts")||!Zl(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Hr(e,"specifierType")||!rh(ch,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Co(e){return So(e)}function So(e){const t=Jl(e);if(t){if(dh(t)||hh(t))return So(t.parts[0]);if(uh(t))return t.parts.reduce((r,n)=>Object.assign(r,So(n)),{});if(ph(t))return Object.values(t.parts[0])[0];if(fh(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return ah(e)?Co(e.shape):e instanceof RegExp||Zl(e,"array")?e:Fl(e)?sh(e,(r,n)=>Co(n)):e}function gh(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Co(e),[Yl]:!0}}const mh=gh({Discord:"",Instagram:"",Telegram:"",TikTok:"",Twitch:"",Twitter:"",website:""}),vh=mh.defaultValue,Xl={Discord:Ll,Instagram:Bl,Telegram:_l,TikTok:zl,Twitch:Rl,Twitter:jl,website:Cl},wh=J({title:"Social Urls",parent:hl,examples:[{title:"Icons",styles:f`
                :host {
                    display: flex;
                    gap: 32px;
                }

                .social-icon-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .social-name {
                    ${O(S.pageSecondary)};
                }
            `,render(){return Object.entries(Xl).map(([e,t])=>h`
                            <div class="social-icon-wrapper">
                                <span class="social-name">${e}</span>
                                <${v} ${g(v,{icon:t})}></${v}>
                            </div>
                        `)}}]}),le=ee({title:"Elements",parent:void 0}),Kl=ee({title:"Button",parent:le});function _r(e){return[{title:"Text",render(){return h`
                    <${H}
                        class=${e}
                        ${g(H,{text:"Button"})}
                    ></${H}>
                `}},{title:"Icon",render(){return h`
                    <${H}
                        class=${e}
                        ${g(H,{icon:Jt})}
                    ></${H}>
                `}},{title:"Toggling icon",stateInit:{showIcon:!0},render({state:t,updateState:r}){return setTimeout(()=>{r({showIcon:!t.showIcon})},1e3),h`
                    <${H}
                        class=${e}
                        ${g(H,t.showIcon?{icon:Jt,text:"icon"}:{text:"no icon"})}
                    ></${H}>
                `}},{title:"Text + Icon",render(){return h`
                    <${H}
                        class=${e}
                        ${g(H,{text:"Button",icon:Jt})}
                    ></${H}>
                `}},{title:"HTML child",render(){return h`
                    <${H} class=${e} ${g(H,{})}>
                        <span>HTML Child</span>
                    </${H}>
                `}},{title:"Sizable",render(){return h`
                    <${H}
                        class=${e}
                        style="height: 100px; width: 200px;"
                        ${g(H,{text:"bigger"})}
                    ></${H}>
                `}}]}const bh=Pe({[H.tagName]:_r(""),[H.hostClasses.secondary]:_r(H.hostClasses.secondary),[H.hostClasses.outline]:_r(H.hostClasses.outline),[H.hostClasses.disabled]:_r(H.hostClasses.disabled)},(e,t)=>J({title:e,examples:t,parent:Kl})),$h=[Kl,...Object.values(bh)],Xo=ee({title:"Carousel",parent:le}),yh=J({title:V.tagName,parent:Xo,descriptionParagraphs:["A carousel that can show multiple elements at once.","Automatic scrolling is optional."],examples:[{title:"short and fast",styles:f`
                :host {
                    max-width: 100%;
                }

                ${V} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${V}
                        ${g(V,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:Xt["core-24"].map(e=>{const t=f`
                                    padding: 24px;
                                    border: 1px solid ${S.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${v}
                                        style=${t}
                                        ${g(v,{icon:e})}
                                    ></${v}>
                                `})})}
                    ></${V}>
                `}},{title:"tall",styles:f`
                :host {
                    max-width: 100%;
                }

                ${V} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${V}
                        ${g(V,{enableAutomaticCycling:!0,templates:Xt["core-24"].map(e=>{const t=f`
                                    padding: 100px 24px;
                                    border: 1px solid ${S.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${v}
                                        style=${t}
                                        ${g(v,{icon:e})}
                                    ></${v}>
                                `})})}
                    ></${V}>
                `}},{title:"random sizes",styles:f`
                :host {
                    max-width: 100%;
                }

                ${V} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,render(){return h`
                    <${V}
                        ${g(V,{enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:Xt["core-24"].map(e=>{const t=W2({min:0,max:150}),r=f`
                                    padding: 100px ${t}px;
                                    border: 1px solid ${S.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${v}
                                        style=${r}
                                        ${g(v,{icon:e})}
                                    ></${v}>
                                `})})}
                    ></${V}>
                `}}]}),xh=J({title:V.hostClasses["banner-style"],parent:Xo,descriptionParagraphs:[`${V.tagName} style for a single, full-width element.`],examples:[{title:V.hostClasses["banner-style"],styles:f`
                :host {
                    max-width: 100%;
                }

                ${V} {
                    max-width: 100%;
                    width: 800px;
                    border-radius: 8px;
                    ${V.cssVarNames["arrow-margin"]}: 16px;
                }
            `,render(){return h`
                    <${V}
                        class=${V.hostClasses["banner-style"]}
                        ${g(V,{enableAutomaticCycling:!0,templates:Xt["core-24"].map(e=>{const t=f`
                                    /* make sure this width matches the ToniqCarousel width */
                                    width: 800px;
                                    max-width: 100%;
                                    padding: 100px 0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-sizing: border-box;
                                    border: 1px solid ${S.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;return h`
                                    <${v}
                                        style=${t}
                                        ${g(v,{icon:e})}
                                    ></${v}>
                                `})})}
                    ></${V}>
                `}}]}),kh=[Xo,yh,xh],Ql=ee({title:"Checkbox",parent:le}),Ch=J({title:R.tagName,parent:Ql,examples:[{title:"Unchecked",stateInit:{checked:!1},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{checked:e.checked,text:"My Checkbox"})}
                        ${A(R.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${R}>
                `}},{title:"Checked",stateInit:{checked:!0},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{checked:e.checked,text:"My Checkbox"})}
                        ${A(R.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${R}>
                `}},{title:"HTML Child",stateInit:{checked:!1},render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{checked:e.checked})}
                        ${A(R.events.checkedChange,r=>{t({checked:r.detail})})}
                    >
                        With HTML Child
                    </${R}>
                `}},{title:"Custom CSS Vars",stateInit:{checked:!1},styles:f`
                :host {
                    ${R.cssVarNames.uncheckedCheckboxColor}: red;
                    ${R.cssVarNames.uncheckedLabelColor}: orange;
                    ${R.cssVarNames.checkedCheckboxColor}: green;
                    ${R.cssVarNames.checkedCheckColor}: blue;
                    ${R.cssVarNames.checkedLabelColor}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{checked:e.checked,text:"wild colors"})}
                        ${A(R.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${R}>
                    <${R}
                        ${g(R,{checked:!e.checked,text:`wild colors (${e.checked?"unchecked":"checked"})`})}
                        ${A(R.events.checkedChange,r=>{t({checked:!r.detail})})}
                    ></${R}>
                `}},{title:"Multiple",stateInit:{checkedShort:!1,checkedLong:!1},styles:f`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${R}
                        ${g(R,{checked:e.checkedShort,text:"Short"})}
                        ${A(R.events.checkedChange,r=>{t({checkedShort:r.detail})})}
                    ></${R}>
                    <${R}
                        ${g(R,{checked:e.checkedLong,text:"With much longer checkbox label string"})}
                        ${A(R.events.checkedChange,r=>{t({checkedLong:r.detail})})}
                    ></${R}>
                `}}]}),Sh=[Ql,Ch],ec=ee({title:"Chip",parent:le});function Hs(e){return[{title:"Text",render(){return h`
                    <${Y}
                        class=${e}
                        ${g(Y,{text:"Toniq Chip Text"})}
                    ></${Y}>
                `}},{title:"Text + Icon",render(){return h`
                    <${Y}
                        class=${e}
                        ${g(Y,{text:"Toniq Chip Text",icon:Yt})}
                    ></${Y}>
                `}},{title:"HTML Child",render(){return h`
                    <${Y} class=${e} ${g(Y,{})}>
                        Slot in Use
                    </${Y}>
                `}},{title:"HTML + Icon",render(){return h`
                    <${Y}
                        class=${e}
                        ${g(Y,{icon:Yt})}
                    >
                        Slot in Use
                    </${Y}>
                `}},{title:"custom size",styles:f`
                ${Y} {
                    width: 150px;
                    height: 24px;
                }
            `,render(){return h`
                    <${Y}
                        class=${e}
                        ${g(Y,{icon:Yt})}
                    >
                        Slot in Use
                    </${Y}>
                `}}]}const Mh=Pe({[Y.tagName]:Hs(""),[Y.hostClasses.secondary]:Hs(Y.hostClasses.secondary)},(e,t)=>J({title:e,examples:t,parent:ec})),Ah=[ec,...Object.values(Mh)],tc=ee({title:"Dropdown",parent:le}),Ze=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],Eh=J({title:N.tagName,parent:tc,examples:[{title:"Default",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}},{title:"With Icon",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected,icon:bo})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}},{title:"With Icon + Prefix",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected,icon:bo,selectedLabelPrefix:"Sort By:"})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}},{title:"Defaulted to an option",stateInit:{selected:Ze[3]},render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}},{title:"Custom size",stateInit:{selected:void 0},styles:f`
                ${N} {
                    width: 500px;
                    height: 100px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}},{title:"Squished",stateInit:{selected:void 0},styles:f`
                ${N} {
                    max-height: 20px;
                    min-height: 20px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}},{title:"No background",stateInit:{selected:void 0},styles:f`
                ${N} {
                    ${Uo.accentSecondary.backgroundColor}: transparent;
                }
            `,render({state:e,updateState:t}){return h`
                    <${N}
                        ${g(N,{options:Ze,selected:e.selected})}
                        ${A(N.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${N}>
                `}}]}),Ih=[tc,Eh];function rc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Th({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}const Ph=["january","february","march","april","may","june","july","august","september","october","november","december"];Ph.map(e=>e.slice(0,3));function nc(e){return e?e instanceof Error?e.message:String(e):""}function Dn(e){return e instanceof Error?e:new Error(nc(e))}function Lh(e){return!!e}function Bh(e){return!!e&&typeof e=="object"}const _h=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Mo(e,t){return e?_h.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Bt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function zh(e){return Bt(e).map(t=>e[t])}function oc(e,t,r=!1,n={}){const o=Bt(e),i=new Set(Bt(t));if(!r){const s=o.filter(a=>!i.has(a));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}i.forEach(s=>{if(!Mo(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||ic(l,c,a,r,n[s]??{})})}function ic(e,t,r,n,o){var a;const i=typeof e,s=typeof t;i!==s&&r(`type "${i}" did not match expected type "${s}"`);try{Mo(t,"constructor")&&(!Mo(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(a=e==null?void 0:e.constructor)==null?void 0:a.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{ic(l,d,r,n,o);return}catch(p){return new Error(`entry at index "${c}" did not match expected shape: ${nc(p)}`)}}).filter(Lh).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Bh(t)&&oc(e,t,n,o)}function Ko(e){return Array.isArray(e)?"array":typeof e}function Kr(e,t){return Ko(e)===t}function Rh(e,t,r){if(!Kr(e,t))throw new TypeError(`'${r}' is of type '${Ko(e)}' but type '${t}' was expected.`)}function Os({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(Kr(r,"object")?oc(n,r):Rh(n,Ko(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function jh(e,t){return Bt(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Nh(e,t){return jh(e,r=>!t.includes(r))}function sc(e,t){let r=!1;const n=Bt(e).reduce((o,i)=>{const s=t(i,e[i],e);return s instanceof Promise&&(r=!0),{...o,[i]:s}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Bt(n).map(async s=>{const a=await n[s];n[s]=a})),o(n)}catch(s){i(s)}}):n}function Ds(e){const t=Qo();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class Hh extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function Oh(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new Hh(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function Qo(){let e,t,r=!1;const n=new Promise((o,i)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,i(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Qo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Dh(e,t){return e<t}function Fh(e,t){return e>t}const Fs={width:250,height:250};function Zh({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?Fh:Dh)(t.width/t.height,e.width/e.height)?"width":"height"}function Fn({box:e,constraint:t,constraintType:r}){const n=Zh({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function ac({box:e,ratio:t}){return sc(e,(r,n)=>n*t)}function Ao({box:e,min:t,max:r}){return sc(e,(n,o)=>Th({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function lc({min:e,max:t,box:r}){const n=cc({min:e,max:t,box:r}),o=ac({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Fs.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Fs.width)}}function cc({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?Fn({box:r,constraint:e,constraintType:"min"}):1,o=t?Fn({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,s=ac({ratio:i,box:r});return(e?Fn({box:s,constraint:e,constraintType:"min"}):1)>1?n:i}function Vh(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const qh=["january","february","march","april","may","june","july","august","september","october","november","december"];qh.map(e=>e.slice(0,3));function lt(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((s,a)=>{const l=Wh(s,n[a]);return`${s}${l}`});return Vh(i.join(""))}function Wh(e,t){return t._$litType$!=null||t._$litDirective$!=null?lt(t):Array.isArray(t)?t.map(n=>lt(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Uh(e){const t=Gh(e);return Kr(t,"object")||Kr(t,"array")}function Gh(e){const t=Os({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=Yh(e);return Os({jsonString:r,errorHandler:()=>{}})}function Yh(e){return rc(e).replace(/,\s*([}\]])/,"$1")}var I;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(I||(I={}));const Jh=[I.Text,I.Json];function Zs(e){return Jh.includes(e)}async function Xh(e,t){return e.includes("video")?I.Video:e.includes("svg")||t.includes("<svg")?I.Svg:e.includes("html")||t.includes("<html")?I.Html:Uh(t)?I.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?I.Text:e.includes("audio")?I.Audio:e.includes("pdf")?I.Pdf:I.Image}function Kh({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===I.Image?lt(h`
            <img src=${r} />
        `):e===I.Video?lt(h`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===I.Text||e===I.Json?lt(h`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===I.Audio?lt(h`
                <audio controls src=${r}></audio>
            `):t}function Qh(e,t){if(t===I.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===I.Html)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function Vs({imageUrl:e,blockAutoPlay:t,textTransformer:r=n=>n}){var c;const n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch '${e}'`);const o=((c=n==null?void 0:n.headers.get("Content-Type"))==null?void 0:c.toLowerCase())??"",i=await(n==null?void 0:n.text())??"",s=n?await Xh(o,i):I.Image,a=r(Qh(i??"",s));return{templateString:Kh({imageText:a,imageType:s,imageUrl:e,blockAutoPlay:t}),imageUrl:e,imageType:s}}class Eo extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let ep=!1;function tp(){return ep}var ft;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(ft||(ft={}));const st=Symbol("any-origin");function dc(e,t){try{return rp(e,t),!0}catch{return!1}}function rp(e,t){if(e===st)return;if(!e.filter(n=>t.origin===n).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const np=Symbol("dangerDisableSecurityWarningsSymbol"),op=["january","february","march","april","may","june","july","august","september","october","november","december"];op.map(e=>e.slice(0,3));function ip(e){return e?e instanceof Error?e.message:String(e):""}function sp(e){return e instanceof Error?e:new Error(ip(e))}function ap(e){const t=uc();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function uc(){let e,t,r=!1;const n=new Promise((o,i)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,i(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${uc.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function lp(e,t,r){return r.type===e&&r.direction===t}function cp(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function dp({message:e,verifyChildData:t,iframeElement:r},n,o,i){if(!r)throw new Error("No iframe element was provided.");let s=0,a=!1,l,c,u,d=!1;const p={...e,direction:ft.FromParent,messageId:Ol(32)},w=e.type,m=n===st?["*"]:n;function k(C){try{if(!dc(n,C))return;const M=C.data;if(M.type==="error")throw new Error(`Child threw an error: ${M.data}`);if(tp(),M&&d&&lp(w,ft.FromChild,M)&&M.messageId===p.messageId){let _=!1;try{_=t?t(M.data):!0}catch{}if(!_)return;a=!0,c=C,l=M}}catch(M){u=sp(M)}}globalThis.addEventListener("message",k);const y=Date.now();for(;!a&&Date.now()-y<o&&!u;){if(!r.isConnected)throw new Eo;const C=r.contentWindow;C&&(d=!0,m.forEach(M=>{try{C.postMessage(p,{targetOrigin:M})}catch{}})),await ap(i||cp(s)),s++}if(globalThis.removeEventListener("message",k),u)throw u;if(!a)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!c)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:c}}function hc({allowedOrigins:e,timeoutMs:t=1e4,...r}){if(e!==st&&e.includes("*")&&(e=st),e===st&&!r[np]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==st&&!e.length)throw new Error(`No allowed origins were provide to ${hc.name}. At least one must be provided.`);const n=e===st?["*"]:e;return{async sendMessageToChild(o){if(o.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await dp(o,e,o.timeoutMs||t,o.intervalMs)},listenForParentMessages(o){globalThis.addEventListener("message",async i=>{if(!dc(e,i))return;const s=i.data,a=await o({...s,originalEvent:i}),l={type:s.type,direction:ft.FromChild,data:a,messageId:s.messageId};n.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}var ce;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(ce||(ce={}));var K;(function(e){e.Ready="ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined"})(K||(K={}));const Ne=hc({allowedOrigins:[window.location.origin]});async function up(e,t){const r=Qo();e.onload=()=>{r.resolve()};try{await Ne.sendMessageToChild({message:{type:K.Ready},iframeElement:e,timeoutMs:t})}catch{await r.promise,await Ne.sendMessageToChild({message:{type:K.Ready},iframeElement:e,timeoutMs:t})}}async function hp({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:s,timeoutMs:a}){var c;await up(n,a),i&&await Ne.sendMessageToChild({message:{type:K.ForceSize,data:i},iframeElement:n,timeoutMs:a});const l=s??(await Ne.sendMessageToChild({message:{type:K.SendSize},iframeElement:n,timeoutMs:a,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await pc({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:a}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function pc({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:s,sendSizeMessage:a,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:s??r},d=Zs(i.imageType)?Ao(u):lc(u);c.style.width=Br(Math.floor(d.width)),c.style.height=Br(Math.floor(d.height));const p=Ao({min:e,max:t,box:d});d.height<p.height?n.classList.add(ce.VerticallyCenter):n.classList.remove(ce.VerticallyCenter),n.style.width=Br(p.width),n.style.height=Br(p.height);const w=cc({min:e,max:t,box:s??r});if(a){if(w>3?await Ne.sendMessageToChild({message:{type:K.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await Ne.sendMessageToChild({message:{type:K.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await Ne.sendMessageToChild({message:{type:K.SizeDetermined,data:d},iframeElement:o,timeoutMs:l}),i.imageType===I.Html){const m=s?{width:s.width/r.width,height:s.height/r.height}:{width:1,height:1},k={width:w*m.width,height:w*m.height};await Ne.sendMessageToChild({message:{type:K.SendScale,data:k},iframeElement:o,timeoutMs:l})}else if(Zs(i.imageType)){const m=s??r;if(m.height<d.height){const k=d.width/m.width,y=d.height/m.height,C=Math.min(k,y);await Ne.sendMessageToChild({message:{type:K.SendScale,data:{height:C,width:C}},iframeElement:o,timeoutMs:l})}}}}const zr={x:16,y:8};var Gs,Ys;function pp(e,t,r){const n=Math.random(),o=h(Gs||(Gs=un([`
        <script>
            function doNothing() {}
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
                                const textElement = document.querySelector('.text');
                                textElement.style.height = totalHeight + 'px';
                                textElement.style.setProperty('-webkit-line-clamp', totalLines);
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
            function doNothing() {}
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
                                const textElement = document.querySelector('.text');
                                textElement.style.height = totalHeight + 'px';
                                textElement.style.setProperty('-webkit-line-clamp', totalLines);
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
    `])),e.imageType,r??"",I.Svg,I.Html,I.Image,I.Video,I.Text,I.Json,I.Audio,ft.FromChild,ft.FromChild,K.Ready,K.SendScale,K.SendScalingMethod,K.SendSize,K.ForceSize,K.SizeDetermined,I.Json,I.Text,zr.y,I.Audio),i=h(Ys||(Ys=un([`
        <!DOCTYPE html>
        <html class="image-type-`,`">
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
                </style>
                <script>
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),e.imageType,I.Image,I.Svg,I.Video,I.Text,I.Json,I.Text,I.Json,I.Text,I.Json,I.Text,I.Json,zr.y,zr.x,I.Text,I.Json,zr.y,n,t??"",o);return rc(lt(i)).replace(String(n),`
${e.templateString}
`)}const fp=1e4,gp={textTransformer:"textTransformer",extraHtml:"extraHtml"},mp=zh(gp),vp={imageData:F0(),error:void 0},yt=tn()({tagName:"vir-resizable-image",stateInit:vp,events:{settled:ue(),imageDataCalculated:ue(),errored:ue()},styles:f`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${B(ce.VerticallyCenter)}) {
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
            position: relative;
            transition: 100ms;
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

        :host(.${B(ce.HideLoading)}) .loading-wrapper,
        :host(.${B(ce.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${B(ce.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${B(ce.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[Zn];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const s=t.timeoutMs??fp,a=e.imageData instanceof Error?e.imageData:e.error;r({imageData:{createPromise:async()=>{if(e.error&&r({error:void 0}),n.classList.remove(ce.HideLoading),o(new i.settled(!1)),n.classList.remove(ce.VerticallyCenter),!t.imageUrl)return new Promise(async(M,_)=>{await Ds(s),_(new Error("An imageUrl was never provided to vir-resizable-image."))});const y={imageUrl:t.imageUrl,blockAutoPlay:!!t.blockAutoPlay,textTransformer:t.textTransformer};let C;try{C=await Oh(s,Vs(y))}catch{await Ds(1e3);try{C=await Vs(y)}catch(_){throw _}}if(C)return C;throw new Error("no image data result")},trigger:{...Nh(t,mp)}}});const l=t.min&&t.max?Ao({box:t.min,max:t.max}):t.min,c=t.max,u=t.forcedOriginalImageSize?lc({min:l,max:c,box:t.forcedOriginalImageSize}):void 0,d=_i(e.imageData,"",y=>(o(new i.imageDataCalculated(y)),y.imageType===I.Pdf?h`
                        <iframe
                            src=${y.imageUrl}
                            ${Bi(async C=>{try{await pc({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:C,imageData:y,imageDimensions:c??{width:500,height:500},max:c,min:l,sendSizeMessage:!1,timeoutMs:s}),n[Zn]="",o(new i.settled(!0)),n.classList.add(ce.HideLoading)}catch(M){const _=Dn(M);if(_ instanceof Eo)return;console.error(_),r({error:_}),o(new i.errored(_))}})}
                        ></iframe>
                    `:h`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${pp(y,t.extraHtml,t.htmlSizeQuerySelector)}
                            ${Bi(async C=>{try{const M=await hp({min:l,max:c,host:n,iframeElement:C,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:u,timeoutMs:s});n[Zn]=M,o(new i.settled(!0)),n.classList.add(ce.HideLoading)}catch(M){const _=Dn(M);if(_ instanceof Eo)return;console.error(_),r({error:_}),o(new i.errored(_))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),y=>{r({error:y}),o(new i.errored(Dn(y)))}),p=_i(e.imageData,qs,y=>!t.blockInteraction&&[I.Html,I.Video,I.Audio,I.Pdf].includes(y.imageType)?"":qs,()=>""),w=a?f`
                  max-width: 100%;
                  max-height: 100%;
              `:u?f`
                  width: ${u.width}px;
                  height: ${u.height}px;
              `:"",m=f`
            width: ${(l==null?void 0:l.width)??250}px;
            height: ${(l==null?void 0:l.height)??250}px;
        `,k=h`
            <div class="frame-constraint" style=${w}>${d}</div>
        `;return h`
            ${ht(!a,h`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${m}>
                ${ht(!!a,h`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,k)}
            </div>
            ${p}
        `}}),qs=h`
    <div class="click-cover"></div>
`,Zn="latest-frame-srcdoc",Io=360,fc=8;function gc(e){return(e-fc)/2}const xt=fr({"main-image-size":Io,"secondary-image-size":gc(Io)}),ke=oe()({tagName:"toniq-featured-flip-card",stateInit:{flipped:!1},events:{viewButtonClicked:ue()},styles:f`
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
            margin-bottom: 20px;
        }

        .card-face {
            display: flex;
            flex-direction: column;
            padding: 32px;
        }

        .all-images {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow: hidden;
            max-height: ${xt["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${xt["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${fc}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${je} {
            width: 100%;
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

        .card-footer {
            display: inline-flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            align-items: center;
            flex-shrink: 0;
            max-height: 48px;
            overflow: hidden;
            justify-content: space-between;
            margin-top: 24px;
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

        ${H} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${xt["secondary-image-size"].value} * 2);
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${xt["secondary-image-size"].value};
        }

        .card-face.back {
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .paragraphs {
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
    `,renderCallback:({inputs:e,state:t,updateState:r,dispatch:n,events:o,host:i})=>{var y;const s=e.mainImageSize||Io,a=gc(s);oo({onElement:i,forCssVar:xt["main-image-size"],toValue:`${s}px`}),oo({onElement:i,forCssVar:xt["secondary-image-size"],toValue:`${a}px`});const l=e.socialUrls,c=l?Xe(l).filter(C=>!!l[C]).map(C=>{const M=l[C],_=Xl[C];return h`
                          <${He}
                              ${g(He,{newTab:!0,url:M})}
                          >
                              <${v} ${g(v,{icon:_})}></${v}>
                          </${He}>
                      `}):"",u=["View",e.viewName].filter(hu).join(" "),d=h`
            <div class="card-footer">
                <div class="buttons">
                    <${H}
                        class="toniq-button-outline"
                        ${g(H,{text:u})}
                        ${A("click",()=>{n(new o.viewButtonClicked)})}
                    ></${H}>
                    ${ht(!!e.moreInfoParagraphs&&!!e.moreInfoParagraphs.length,h`
                            <${H}
                                class="more-info-button"
                                ${g(H,{text:t.flipped?"Back":"More Info"})}
                                ${A("click",()=>{r({flipped:!t.flipped})})}
                            ></${H}>
                        `)}
                </div>
                <div class="social-urls">${c}</div>
            </div>
        `,p=h`
            <h3>${e.title}</h3>
        `,w=e.imageUrls[0],m=h`
            <${v}
                slot="loading"
                ${g(v,{icon:Al})}
            ></${v}>
        `,k=w?h`
                  <div class="big-image-wrapper">
                      <${yt}
                          ${g(yt,{imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}
                      >
                          ${m}
                      </${yt}>
                  </div>
              `:"";return h`
            <${je} ${g(je,{flipped:t.flipped})}>
                <div class="card-face" slot="front">
                    ${p}
                    <div class="all-images">
                        ${k}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(C=>h`
                                    <div class="pic-wrapper">
                                        <${yt}
                                            ${g(yt,{imageUrl:C,eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}
                                        >
                                            ${m}
                                        </${yt}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    ${d}
                </div>
                <div class="card-face back" slot="back">
                    ${p}
                    <div class="paragraphs">
                        ${(y=e.moreInfoParagraphs)==null?void 0:y.map(C=>h`
                                    <p>${C}</p>
                                `)}
                    </div>
                    ${d}
                </div>
            </${je}>
        `}}),ei=ee({title:"Flip Card",parent:le}),Vn=Array(30).fill("/toniq-labs-logo.png"),To=["Hello there.","There is stuff here."],wp=To.concat(Array(30).fill(To)),bp=J({title:ke.tagName,parent:ei,examples:[{title:"basic",styles:f`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInit:{flipped:!1},render(){return h`
                    <${ke}
                        ${g(ke,{moreInfoParagraphs:wp,imageUrls:Vn,socialUrls:vh,title:"Featured Stuff",viewName:"Stuff"})}
                    ></${ke}>
                `}},{title:"with missing inputs",styles:f`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInit:{flipped:!1},render(){return h`
                    <${ke}
                        ${g(ke,{imageUrls:Vn,title:"Featured Stuff"})}
                    ></${ke}>
                `}},{title:"smaller",styles:f`
                .front,
                .back {
                    padding: 32px;
                }

                ${ke} {
                    width: 1000px;
                }
            `,stateInit:{flipped:!1},render(){return h`
                    <${ke}
                        ${g(ke,{imageUrls:Vn,moreInfoParagraphs:To,title:"Featured Stuff"})}
                    ></${ke}>
                `}}]}),$p=J({title:je.tagName,parent:ei,examples:[{title:"basic",styles:f`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInit:{flipped:!1},render({state:e,updateState:t}){return h`
                    <${je}
                        ${g(je,{flipped:e.flipped})}
                        ${A(je.events.flippedChange,r=>{t({flipped:r.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${je}>
                `}}]}),yp=[ei,$p,bp],mc=ee({title:"Hyperlink",parent:le});function Ws(e){return[{title:"text hyperlink",render(){return h`
                    <${He}
                        class=${e}
                        ${g(He,{newTab:!0,url:"https://toniqlabs.com"})}
                    >
                        Toniq Labs Link
                    </${He}>
                `}}]}const xp=Pe({[He.tagName]:Ws(""),[He.hostClasses["with-hover-styles"]]:Ws(He.hostClasses["with-hover-styles"])},(e,t)=>J({title:e,examples:t,parent:mc})),kp=[mc,...Object.values(xp)],vc=ee({title:"Icon",parent:le}),Cp=Pe({[v.tagName]:[{title:"With Icon",render(){return h`
                        <${v}
                            ${g(v,{icon:Jt})}
                        ></${v}>
                    `}},{title:"Without Icon",render(){return h`
                        <${v}
                            ${g(v,{icon:void 0})}
                        ></${v}>
                    `}},{title:"64px icon",render(){return h`
                        <${v}
                            ${g(v,{icon:Pl})}
                        ></${v}>
                    `}},{title:"48px icon",render(){return h`
                        <${v}
                            ${g(v,{icon:Tl})}
                        ></${v}>
                    `}},{title:"32px icon",render(){return h`
                        <${v}
                            ${g(v,{icon:Il})}
                        ></${v}>
                    `}},{title:"24px icon",render(){return h`
                        <${v}
                            ${g(v,{icon:$l})}
                        ></${v}>
                    `}},{title:"16px icon",render(){return h`
                        <${v}
                            ${g(v,{icon:Yt})}
                        ></${v}>
                    `}}],[`${v.tagName} colors`]:[{title:"Inherited",render(){return h`
                        <${v}
                            ${g(v,{icon:Mt})}
                        ></${v}>
                    `}},{title:'Using "color"',styles:f`
                    :host {
                        color: red;
                    }
                `,render(){return h`
                        <${v}
                            ${g(v,{icon:Mt})}
                        ></${v}>
                    `}},{title:ze.color,styles:f`
                    :host {
                        ${B(ze.color)}: red;
                    }
                `,render(){return h`
                        <${v}
                            ${g(v,{icon:Mt})}
                        ></${v}>
                    `}},{title:ze.strokeColor,styles:f`
                    :host {
                        ${B(ze.strokeColor)}: red;
                    }
                `,render(){return h`
                        <${v}
                            ${g(v,{icon:Mt})}
                        ></${v}>
                    `}},{title:ze.fillColor,styles:f`
                    :host {
                        ${B(ze.fillColor)}: red;
                    }
                `,render(){return h`
                        <${v}
                            ${g(v,{icon:Mt})}
                        ></${v}>
                    `}}]},(e,t)=>J({title:e,examples:t,parent:vc})),Sp=[vc,...Object.values(Cp)],wc=ee({title:"Input",parent:le}),Mp=J({title:T.tagName,parent:wc,examples:[{title:"Assigned value",stateInit:{value:"init value"},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Placeholder",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,placeholder:"my placeholder"})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Icon",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,placeholder:"with icon",icon:El})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Custom size (big)",stateInit:{value:""},styles:f`
                ${T} {
                    height: 75px;
                    width: 300px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,placeholder:"stretched"})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Custom size (small)",stateInit:{value:""},styles:f`
                ${T} {
                    height: 40px;
                    width: 140px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,placeholder:"squished"})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Outline style",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        class=${T.hostClasses.outline}
                        ${g(T,{value:e.value,placeholder:"outline"})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:'Letter "a" blocked',stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,blockedInputs:"a",placeholder:"try typing a"})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"only numbers allowed",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,allowedInputs:/\d/})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"disabled",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,disabled:!0,placeholder:"cannot select"})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}},{title:"no browser auto-helps",stateInit:{value:""},render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,placeholder:'try typing "im"',disableBrowserHelps:!0})}
                        ${A(T.events.valueChange,r=>{t({value:r.detail})})}
                    ></${T}>
                `}}]}),Ap=[wc,Mp],bc=ee({title:"Middle Ellipsis",parent:le}),Ep=J({title:q.tagName,parent:bc,examples:[{title:"Long text",render(){return h`
                    <${q}
                        ${g(q,{text:"Long string instead of text"})}
                    ></${q}>
                `}},{title:"Short text",render(){return h`
                    <${q}
                        ${g(q,{text:"Short text"})}
                    ></${q}>
                `}},{title:"External Link",render(){return h`
                    <${q}
                        ${g(q,{text:"Long text with link",externalLink:"https://bioniq.io"})}
                    ></${q}>
                `}},{title:"Copyable",render(){return h`
                    <${q}
                        ${g(q,{text:"Long text that you can copy",copyOnClick:!0})}
                    ></${q}>
                `}},{title:"Custom CSS vars",styles:f`
                ${q} {
                    ${q.cssVarNames.iconColor}: red;
                    ${q.cssVarNames.iconHoverColor}: blue;
                    ${q.cssVarNames.textColor}: green;
                    ${q.cssVarNames.textHoverColor}: purple;
                }
            `,render(){return h`
                    <${q}
                        ${g(q,{text:"long text with custom colors",copyOnClick:!0})}
                    ></${q}>
                `}}]}),Ip=[bc,Ep],$c=ee({title:"Radio Group",parent:le}),Dt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],fe={basic:Dt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Dt.slice(1)],disabled:[{...Dt[0],disabled:!0},...Dt.slice(1)],noLabels:iu(Dt,e=>({...e,label:void 0}))},Tp=J({title:j.tagName,parent:$c,examples:[{title:"Default",stateInit:{selectedValue:fe.basic[0].value},render({state:e,updateState:t}){return h`
                    <${j}
                        ${g(j,{entries:fe.basic,value:e.selectedValue})}
                        ${A(j.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${j}>
                `}},{title:"Inline",stateInit:{selectedValue:fe.basic[0].value},styles:f`
                ${j} {
                    flex-direction: row;
                }
            `,render({state:e,updateState:t}){return h`
                    <${j}
                        ${g(j,{entries:fe.basic,value:e.selectedValue})}
                        ${A(j.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${j}>
                `}},{title:"Restricted width",stateInit:{selectedValue:fe.longText[0].value},styles:f`
                ${j} {
                    max-width: 200px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${j}
                        ${g(j,{entries:fe.longText,value:e.selectedValue})}
                        ${A(j.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${j}>
                `}},{title:"No labels",stateInit:{selectedValue:fe.noLabels[0].value},render({state:e,updateState:t}){return h`
                    <${j}
                        ${g(j,{entries:fe.noLabels,value:e.selectedValue})}
                        ${A(j.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${j}>
                `}},{title:"Entry 1 disabled",stateInit:{selectedValue:fe.disabled[1].value},render({state:e,updateState:t}){return h`
                    <${j}
                        ${g(j,{entries:fe.disabled,value:e.selectedValue})}
                        ${A(j.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${j}>
                `}},{title:"Custom CSS vars",stateInit:{selectedValue:fe.basic[0].value},styles:f`
                ${j} {
                    ${j.cssVarNames.checkedLabelColor}: red;
                    ${j.cssVarNames.checkedRadioColor}: blue;
                    ${j.cssVarNames.uncheckedLabelColor}: green;
                    ${j.cssVarNames.uncheckedRadioColor}: pink;
                }
            `,render({state:e,updateState:t}){return h`
                    <${j}
                        ${g(j,{entries:fe.basic,value:e.selectedValue})}
                        ${A(j.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${j}>
                `}}]}),Pp=[$c,Tp],yc=ee({title:"Slider",parent:le}),_e=f`
    ${L} {
        width: 300px;
    }
`,qn={min:10,max:50},Lp=J({title:L.tagName,parent:yc,examples:[{title:"Default",stateInit:{value:20},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,...qn})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Double range",stateInit:{value:{min:10,max:72}},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{double:!0,value:e.value,min:0,max:100})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Suffix",stateInit:{value:20},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,...qn,suffix:"ICP"})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Log Scale",stateInit:{value:20},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Log Scale Double",stateInit:{value:{min:10,max:1e3}},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Decimals",stateInit:{value:{min:1.95,max:50}},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Negative min",stateInit:{value:20},styles:f`
                ${_e}
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,min:-100,max:100})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Padding",stateInit:{value:20},styles:f`
                ${_e}

                ${L} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{value:e.value,...qn})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${L}>
                `}},{title:"Padding Double",stateInit:{value:{min:10,max:72}},styles:f`
                ${_e}

                ${L} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{double:!0,value:e.value,min:0,max:100})}
                        ${A(L.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${L}>
                `}}]}),Bp=[yc,Lp],xc=ee({title:"Toggle Button",parent:le});function Us(e){return[{title:"Default",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${ge}
                        class=${e}
                        ${g(ge,{toggled:t.toggled,text:"Toggle Button"})}
                        ${A("click",()=>{r({toggled:!t.toggled})})}
                    ></${ge}>
                `}},{title:"Icon + text",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${ge}
                        class=${e}
                        ${g(ge,{toggled:t.toggled,icon:$o,text:"Toggle Button"})}
                        ${A("click",()=>{r({toggled:!t.toggled})})}
                    ></${ge}>
                `}},{title:"Icon only",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${ge}
                        class=${e}
                        ${g(ge,{toggled:t.toggled,icon:$o})}
                        ${A("click",()=>{r({toggled:!t.toggled})})}
                    ></${ge}>
                `}}]}const _p=Pe({[ge.tagName]:Us(""),[ge.hostClasses.textOnly]:Us(ge.hostClasses.textOnly)},(e,t)=>J({title:e,examples:t,parent:xc})),zp=[xc,...Object.values(_p)],kc=ee({title:"Icons",parent:void 0}),Rp=Object.entries(Xt).map(([e,t])=>J({title:e,parent:kc,examples:t.map(r=>({title:r.iconName,render(){return h`
                            <${v} ${g(v,{icon:r})}></${v}>
                        `}}))})),ti=ee({title:"Styles",parent:void 0});function Cc(e){const t=jp(e),r=Pe(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Xe(r).reduce((o,i)=>{const s=r[i];return s&&s[1]&&s[2]&&(o[i]={cssVarName:s[1],defaultValue:s[2]}),o},{})}function jp(e){typeof e!="string"&&(e=String(e));const n=`{"${au(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((s,a)=>(s[a]=o[a],s),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const Np=f`
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
        color: ${S.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${S.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${W.h2Font};
    }
`;function Hp(e,t){const r=Cc(O(t));return{title:e,styles:Np,render(){return h`
                <div class="color-example" style=${O(t)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(r).map(n=>h`
                            <span>
                                ${n.cssVarName}: ${n.defaultValue}
                            </span>
                        `)}
                </div>
            `}}}const Op=Xe(S).map(e=>Hp(e,S[e])),Dp=J({title:"Colors",parent:ti,examples:Op,descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Fp=f`
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
        color: ${S.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${S.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${S.divider.foregroundColor};
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
`;function Zp(e,t){const r=Cc(t);return{title:e,styles:Fp,render(){return h`
                <div class="font-example" style=${t}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Xe(r).map(n=>{const o=r[n];return h`
                            <div class="font-style-group">
                                <span>${n}: ${o.defaultValue}</span>
                                <span class="css-var-name">${o.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}}}const Vp=Xe(W).map(e=>{const t=W[e];return Zp(e,t)}),qp=J({title:"Fonts",parent:ti,examples:Vp,descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),Wp=[le,kc,ti,...Rp,...$h,...kh,...Sh,...Ah,...Ih,...yp,...kp,...Sp,...Ap,...Ip,...Pp,...Bp,...zp,Dp,qp,hl,wh];en({tagName:"toniq-design-system-app",styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Lr} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return h`
            <${Lr}
                ${g(Lr,{baseUrl:"toniq-labs-design-system",entries:Wp,themeColor:"#00D093",everythingTitle:"Design System"})}
            ></${Lr}>
        `}});