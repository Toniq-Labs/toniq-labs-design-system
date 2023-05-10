var wi=Object.defineProperty;var bi=(e,t,r)=>t in e?wi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ar=(e,t,r)=>(bi(e,typeof t!="symbol"?t+"":t,r),r),Ir=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var Ye=(e,t,r)=>(Ir(e,t,"read from private field"),r?r.call(e):t.get(e)),ut=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Er=(e,t,r,n)=>(Ir(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var Ht=(e,t,r)=>(Ir(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var xe;(function(e){e.Chapter="chapter",e.Page="page",e.Root="root"})(xe||(xe={}));function ee(e){if(!e.title)throw new Error("Cannot have an element-book chapter with an empty title.");return{type:xe.Chapter,...e}}function $i(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const ki=["january","february","march","april","may","june","july","august","september","october","november","december"];ki.map(e=>e.slice(0,3));function Bn(e){return e?e instanceof Error?e.message:String(e):""}function yi(e){return e instanceof Error?e:new Error(Bn(e))}function Jn(e){return!!e&&typeof e=="object"}const Kn="Failed to compare objects using JSON.stringify";function Qn(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Pn(e,t){try{return e===t?!0:Jn(e)&&Jn(t)?Qn(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Pn(e[n],t[n])):!1:Qn(e,t)}catch(r){const n=yi(r);throw n.message.startsWith(Kn)||(n.message=`${Kn}: ${n.message}`),n}}const xi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ln(e,t){return e?xi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Cs(e,t){return e&&t.every(r=>Ln(e,r))}function sn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ci(e){return Array.isArray(e)?"array":typeof e}function Mi(e,t){return Ci(e)===t}function Si(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ai(e){return sn(e).filter(t=>isNaN(Number(t)))}function Ii(e){return Ai(e).map(r=>e[r])}function Ei(e,t){return Ii(t).includes(e)}function Ti(e,t){let r=!1;const n=sn(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(sn(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function Bi(e,t){try{return Pi(e,t),!0}catch{return!1}}function Pi(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Li(e,t){return Ln(e,"type")&&e.type===t}const nr="isElementBookEntryTreeNode";function _i(e,t){return!!(Cs(e,[nr,"entry"])&&e[nr]&&e.entry.type===t)}function Ri(e){return{[nr]:!0,entry:{type:xe.Root,title:e||"Everything",parent:void 0},breadcrumb:"",children:{}}}function an(e){return $i(e).toLowerCase().replaceAll(/\s/g,"-")}function Ni(e,t){const r=Ri(t);return e.forEach(n=>{const o=ji(n,r),s=an(n.title);if(s in o.children)throw new Error(`Cannot create duplicate entry '${s}' in parent '${o.breadcrumb}'.`);const a={[nr]:!0,children:{},breadcrumb:s,entry:n};o.children[s]=a}),r}function ji(e,t){return Lt(e).reverse().reduce((o,s)=>{const a=o.children[s];if(!a)throw new Error(`Failed to find parent ElementBookEntry by name of '${s}' in entry '${o.entry.title}'`);return a},t)}function Lt(e,t){const r=an(e.title);return e.parent?[an(e.parent.title),...Lt(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function ln(e,t){if(!Bi(e,1))return t;const r=e[0],n=t.children[r];if(n)return ln(e.slice(1),n)}function te(e){if(!e.title)throw new Error("Cannot have an element-book page with an empty title.");const t={type:xe.Page,...e},r=Lt(t,!0),n=new Set;return e.examples.forEach(o=>{const s=`Failed to define example '${r.concat(o.title).join(" > ")}'`;if(n.has(o.title))throw new Error(`${s}: example title '${o.title}' is already being used.`);if(!o.title)throw new Error(`${s}: example title is missing or empty.`);n.add(o.title)}),t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Re=e=>(...t)=>({_$litDirective$:e,values:t});let We=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tr;const or=window,st=or.trustedTypes,eo=st?st.createPolicy("lit-html",{createHTML:e=>e}):void 0,sr="$lit$",ye=`lit$${(Math.random()+"").slice(9)}$`,_n="?"+ye,Zi=`<${_n}>`,at=document,xt=()=>at.createComment(""),Ct=e=>e===null||typeof e!="object"&&typeof e!="function",Ms=Array.isArray,Ss=e=>Ms(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Br=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,to=/-->/g,ro=/>/g,Oe=RegExp(`>|${Br}(?:([^\\s"'>=/]+)(${Br}*=${Br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,oo=/"/g,As=/^(?:script|style|textarea|title)$/i,Oi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Di=Oi(1),ue=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),so=new WeakMap,nt=at.createTreeWalker(at,129,null,!1),Is=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",a=ht;for(let l=0;l<r;l++){const c=e[l];let u,d,p=-1,b=0;for(;b<c.length&&(a.lastIndex=b,d=a.exec(c),d!==null);)b=a.lastIndex,a===ht?d[1]==="!--"?a=to:d[1]!==void 0?a=ro:d[2]!==void 0?(As.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=Oe):d[3]!==void 0&&(a=Oe):a===Oe?d[0]===">"?(a=o??ht,p=-1):d[1]===void 0?p=-2:(p=a.lastIndex-d[2].length,u=d[1],a=d[3]===void 0?Oe:d[3]==='"'?oo:no):a===oo||a===no?a=Oe:a===to||a===ro?a=ht:(a=Oe,o=void 0);const m=a===Oe&&e[l+1].startsWith("/>")?" ":"";s+=a===ht?c+Zi:p>=0?(n.push(u),c.slice(0,p)+sr+c.slice(p)+ye+m):c+ye+(p===-2?(n.push(void 0),l):m)}const i=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[eo!==void 0?eo.createHTML(i):i,n]};class Mt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,a=0;const i=t.length-1,l=this.parts,[c,u]=Is(t,r);if(this.el=Mt.createElement(c,n),nt.currentNode=this.el.content,r===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(o=nt.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const p of o.getAttributeNames())if(p.endsWith(sr)||p.startsWith(ye)){const b=u[a++];if(d.push(p),b!==void 0){const m=o.getAttribute(b.toLowerCase()+sr).split(ye),y=/([.?@])?(.*)/.exec(b);l.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?Ts:y[1]==="?"?Bs:y[1]==="@"?Ps:Rt})}else l.push({type:6,index:s})}for(const p of d)o.removeAttribute(p)}if(As.test(o.tagName)){const d=o.textContent.split(ye),p=d.length-1;if(p>0){o.textContent=st?st.emptyScript:"";for(let b=0;b<p;b++)o.append(d[b],xt()),nt.nextNode(),l.push({type:2,index:++s});o.append(d[p],xt())}}}else if(o.nodeType===8)if(o.data===_n)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(ye,d+1))!==-1;)l.push({type:7,index:s}),d+=ye.length-1}s++}}static createElement(t,r){const n=at.createElement("template");return n.innerHTML=t,n}}function Ve(e,t,r=e,n){var o,s,a,i;if(t===ue)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ct(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(i=r)._$Co)!==null&&a!==void 0?a:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ve(e,l._$AS(e,t.values),l,n)),t}let Es=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:at).importNode(n,!0);nt.currentNode=s;let a=nt.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new lt(a,a.nextSibling,this,t):c.type===1?u=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(u=new Ls(a,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(a=nt.nextNode(),i++)}return s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class lt{constructor(t,r,n,o){var s;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ve(this,t,r),Ct(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==ue&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ss(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&Ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(at.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Mt.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const a=new Es(s,this),i=a.u(this.options);a.v(n),this.$(i),this._$AH=a}}_$AC(t){let r=so.get(t.strings);return r===void 0&&so.set(t.strings,r=new Mt(t)),r}T(t){Ms(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new lt(this.k(xt()),this.k(xt()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Rt{constructor(t,r,n,o,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const s=this.strings;let a=!1;if(s===void 0)t=Ve(this,t,r,0),a=!Ct(t)||t!==this._$AH&&t!==ue,a&&(this._$AH=t);else{const i=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Ve(this,i[n+l],r,l),c===ue&&(c=this._$AH[l]),a||(a=!Ct(c)||c!==this._$AH[l]),c===H?t=H:t!==H&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ts extends Rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const zi=st?st.emptyScript:"";class Bs extends Rt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,zi):this.element.removeAttribute(this.name)}}class Ps extends Rt{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ve(this,t,r,0))!==null&&n!==void 0?n:H)===ue)return;const o=this._$AH,s=t===H&&o!==H||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==H&&(o===H||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ls{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ve(this,t)}}const Hi={O:sr,P:ye,A:_n,C:1,M:Is,L:Es,D:Ss,R:Ve,I:lt,V:Rt,H:Bs,N:Ps,U:Ts,F:Ls},ao=or.litHtmlPolyfillSupport;ao==null||ao(Mt,lt),((Tr=or.litHtmlVersions)!==null&&Tr!==void 0?Tr:or.litHtmlVersions=[]).push("2.7.3");const Vi=(e,t,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=s._$litPart$;if(a===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new lt(t.insertBefore(xt(),i),i,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Fi}=Hi,io=()=>document.createComment(""),pt=(e,t,r)=>{var n;const o=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(io(),s),i=o.insertBefore(io(),s);r=new Fi(a,i,e,e.options)}else{const a=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(a!==s||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;o.insertBefore(c,s),c=u}}}return r},De=(e,t,r=e)=>(e._$AI(t,r),e),qi={},Wi=(e,t=qi)=>e._$AH=t,Ui=e=>e._$AH,Pr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=Re(class extends We{constructor(e){var t;if(super(e),e.type!==_t.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(t)}const o=e.element.classList;this.it.forEach(s=>{s in t||(o.remove(s),this.it.delete(s))});for(const s in t){const a=!!t[s];a===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(a?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return ue}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Gi=Re(class extends We{constructor(e){if(super(e),e.type!==_t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],s=[];let a=0;for(const i of e)o[a]=n?n(i,a):a,s[a]=r(i,a),a++;return{values:s,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const s=Ui(e),{values:a,keys:i}=this.dt(t,r,n);if(!Array.isArray(s))return this.ht=i,a;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,p=0,b=s.length-1,m=0,y=a.length-1;for(;p<=b&&m<=y;)if(s[p]===null)p++;else if(s[b]===null)b--;else if(l[p]===i[m])c[m]=De(s[p],a[m]),p++,m++;else if(l[b]===i[y])c[y]=De(s[b],a[y]),b--,y--;else if(l[p]===i[y])c[y]=De(s[p],a[y]),pt(e,c[y+1],s[p]),p++,y--;else if(l[b]===i[m])c[m]=De(s[b],a[m]),pt(e,s[p],s[b]),b--,m++;else if(u===void 0&&(u=lo(i,m,y),d=lo(l,p,b)),u.has(l[p]))if(u.has(l[b])){const M=d.get(i[m]),I=M!==void 0?s[M]:null;if(I===null){const E=pt(e,s[p]);De(E,a[m]),c[m]=E}else c[m]=De(I,a[m]),pt(e,s[p],I),s[M]=null;m++}else Pr(s[b]),b--;else Pr(s[p]),p++;for(;m<=y;){const M=pt(e,c[y+1]);De(M,a[m]),c[m++]=M}for(;p<=b;){const M=s[p++];M!==null&&Pr(M)}return this.ht=i,Wi(e,c),ue}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ar=class extends We{constructor(t){if(super(t),this.et=H,t.type!==_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||t==null)return this.ft=void 0,this.et=t;if(t===ue)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};ar.directiveName="unsafeHTML",ar.resultType=1;const Yi=Re(ar);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cn=class extends ar{};cn.directiveName="unsafeSVG",cn.resultType=2;const Xi=Re(cn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ji(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=window,Rn=tr.ShadowRoot&&(tr.ShadyCSS===void 0||tr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nn=Symbol(),co=new WeakMap;let _s=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Nn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Rn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=co.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&co.set(r,t))}return t}toString(){return this.cssText}};const R=e=>new _s(typeof e=="string"?e:e+"",void 0,Nn),wt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new _s(r,e,Nn)},Ki=(e,t)=>{Rn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=tr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},uo=Rn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return R(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lr;const ir=window,ho=ir.trustedTypes,Qi=ho?ho.emptyScript:"",po=ir.reactiveElementPolyfillSupport,dn={toAttribute(e,t){switch(t){case Boolean:e=e?Qi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Rs=(e,t)=>t!==e&&(t==t||e==e),_r={attribute:!0,type:String,converter:dn,reflect:!1,hasChanged:Rs};let Qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=_r){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const s=this[t];this[r]=o,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_r}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(uo(o))}else t!==void 0&&r.push(uo(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ki(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=_r){var o;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:dn).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),i=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:dn;this._$El=s,this[s]=i.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Rs)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Qe.finalized=!0,Qe.elementProperties=new Map,Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},po==null||po({ReactiveElement:Qe}),((Lr=ir.reactiveElementVersions)!==null&&Lr!==void 0?Lr:ir.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rr,Nr;class bt extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ue}}bt.finalized=!0,bt._$litElement$=!0,(Rr=globalThis.litElementHydrateSupport)===null||Rr===void 0||Rr.call(globalThis,{LitElement:bt});const fo=globalThis.litElementPolyfillSupport;fo==null||fo({LitElement:bt});((Nr=globalThis.litElementVersions)!==null&&Nr!==void 0?Nr:globalThis.litElementVersions=[]).push("3.3.2");var el=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,s){function a(I){if(I!==void 0&&typeof I!="function")throw new TypeError("Function expected");return I}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,p=!1,b=r.length-1;b>=0;b--){var m={};for(var y in n)m[y]=y==="access"?{}:n[y];for(var y in n.access)m.access[y]=n.access[y];m.addInitializer=function(I){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a(I||null))};var M=(0,r[b])(i==="accessor"?{get:u.get,set:u.set}:u[l],m);if(i==="accessor"){if(M===void 0)continue;if(M===null||typeof M!="object")throw new TypeError("Object expected");(d=a(M.get))&&(u.get=d),(d=a(M.set))&&(u.set=d),(d=a(M.init))&&o.push(d)}else(d=a(M))&&(i==="field"?o.push(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),p=!0},tl=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},rl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function nl(){function e(t,r){return t}return e}let Ns=(()=>{let e=[nl()],t,r=[],n;return n=class extends bt{},rl(n,"DeclarativeElement"),el(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,tl(n,r),n})();function ol(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const sl={capitalizeFirstLetter:!1};function al(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function il(e,t){return t.capitalizeFirstLetter?al(e):e}function ll(e,t=sl){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return il(n,t)}function go(e){return e!==e.toUpperCase()}function cl(e){return e.split("").reduce((r,n,o,s)=>{const a=o>0?s[o-1]:"",i=o<s.length-1?s[o+1]:"",l=go(a)||go(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const dl=["january","february","march","april","may","june","july","august","september","october","november","december"];dl.map(e=>e.slice(0,3));function ul(e){return e?e instanceof Error?e.message:String(e):""}function hl(e){return e instanceof Error?e:new Error(ul(e))}const pl=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function vr(e,t){return e?pl.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function fl(e,t){return e&&t.every(r=>vr(e,r))}function it(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function St(e,t){let r=!1;const n=it(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(it(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function js(e){return(t,r)=>r!==void 0?((n,o,s)=>{o.constructor.createProperty(s,n)})(e,t,r):gl(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jr;((jr=window.HTMLSlotElement)===null||jr===void 0?void 0:jr.prototype.assignedElements)!=null;const un=Symbol("this-is-an-element-vir-declarative-element"),jn=Symbol("key for ignoring inputs not having been set yet"),ml={[jn]:!0};function Zs(e,t){const r=e.instanceState;it(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);js()(e,n),"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),Os(e)}function Os(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ds(e,t){return hn(e,t),e.element}function hn(e,t){if(e.type!==_t.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function g(e,t){return t?mo(e,t):mo(void 0,e)}const mo=Re(class extends We{constructor(e){super(e),this.element=Ds(e,"assign")}render(e,t){return vl(e,this.element,t),ue}});function vl(e,t,r){Zs(t,r)}function zs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Ns?!0:zs(r)}function Hs(e,t){return`${e}-${cl(t)}`}function wl(e,t){return t?St(t,r=>R(`--${Hs(e,String(r))}`)):{}}function bl(e,t){return e?St(e,(r,n)=>{const o=t[r];return R(`var(${o}, ${n})`)}):{}}class $l extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Zn(){return e=>{var t;return t=class extends $l{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Te(){return Zn()}function kl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Zn()(r);return t[r]=n,t},{}):{}}const vo="_is_element_vir_observable_property_handler_instance",wo="_is_element_vir_observable_property_handler_creator";function yl(e){return vr(e,wo)&&e[wo]===!0}function xl(e){return vr(e,vo)&&e[vo]===!0}function bo(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function $o(e,t){const r=e;function n(s,a){return t&&bo(a,e,e.tagName),r[a]}return new Proxy({},{get:n,set:(s,a,i)=>{t&&bo(a,e,e.tagName);const l=e.observablePropertyHandlerMap[a];function c(u){s[a]=u,r[a]=u}return yl(i)&&(i=i.init()),xl(i)?(l&&i!==l?(i.addMultipleListeners(l.getAllListeners()),l.removeAllListeners()):i.addListener(!0,u=>{c(u)}),e.observablePropertyHandlerMap[a]=i):l?l.setValue(i):c(i),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return n(s,a)},configurable:!0,enumerable:!0}},has:(s,a)=>Reflect.has(s,a)})}function Cl(e,t){return t?St(t,r=>Hs(e,String(r))):{}}function Ml({hostClassNames:e,cssVarNames:t,cssVarValues:r}){return{hostClassSelectors:St(e,(n,o)=>R(`:host(.${o})`)),hostClassNames:St(e,(n,o)=>R(o)),cssVarNames:t,cssVarValues:r}}function Sl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&it(t).forEach(s=>{const a=t[s],i=r[s];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Al(e,t){function r(o){it(o).forEach(s=>{const a=o[s];e.instanceState[s]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Il=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function wr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r=kl(e.events),n=Cl(e.tagName,e.hostClasses),o=wl(e.tagName,e.cssVars),s=bl(e.cssVars,o),a={...ml,...e.options},i=typeof e.styles=="function"?e.styles(Ml({hostClassNames:n,cssVarNames:o,cssVarValues:s})):e.styles||wt``,l=e.renderCallback,c=(t=class extends Ns{createRenderParams(){return Al(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Os(this)}render(){try{zs(this)&&!this.haveInputsBeenSet&&!a[jn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${g.name}" directive on it. If no inputs are intended, use "${wr.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u));const d=l(u);return Sl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=hl(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();e.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();e.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Zs(this,u)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=$o(this,!1),this.instanceState=$o(this,!0);const u=e.stateInit||{};it(u).forEach(d=>{js()(this,d),this.instanceState[d]=u[d]}),this.definition=c}},Il(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=l,t.hostClasses=n,t.cssVarNames=o,t.stateInit=e.stateInit,t.cssVarValues=o,t);return Object.defineProperties(c,{[un]:{value:!0,writable:!1},name:{value:ll(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function On(){return e=>wr({...e,options:{[jn]:!1},...e.options})}function C(e,t){return El(e,t)}const El=Re(class extends We{constructor(e){super(e),this.element=Ds(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ue}}),Zr="onResize",ko=Re(class extends We{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),hn(e,Zr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Zr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){hn(e,Zr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function br(e,t,r){return Ji(e,()=>t,()=>r)}globalThis&&globalThis.__classPrivateFieldGet;globalThis&&globalThis.__classPrivateFieldSet;function pn(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],s=(t??[""]).map((a,i)=>{const l=Tl(a,n[i]);return`${a}${l}`});return ol(s.join(""))}function Tl(e,t){return t._$litType$!=null||t._$litDirective$!=null?pn(t):Array.isArray(t)?t.map(n=>pn(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Vs(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),On()(r(n))),defineElementNoInputs:n=>(t(n),wr(r(n)))}}function Bl(e,t){return e.filter((r,n)=>!t.includes(n))}function Fs(e){return e.filter(t=>fl(t,["tagName",un])&&!!t.tagName&&!!t[un])}const qs=new WeakMap;function Pl(e,t){var o;const r=Fs(t);return(o=Ws(qs,[e,...r]).value)==null?void 0:o.template}function Ll(e,t,r){const n=Fs(t);return Gs(qs,[e,...n],r)}function Ws(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Us(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ws(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Us(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Gs(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=Us(e,t,n);if(!s)return{result:!1,reason:a};const i=o??{nested:void 0,template:void 0};if(o||e.set(s,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Gs(l,t,r,n+1)}function Ys(e,t,r){return{name:e,check:t,transform:r}}const _l=new WeakMap;function Xs(e,t,r){const n=Pl(e,t),o=n??r();if(!n){const a=Ll(e,t,o);if(a.result)_l.set(e,o);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=Bl(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Js(e,t,r,n){const o=[],s=[],a=[];return e.forEach((l,c)=>{var M;const u=o.length-1,d=o[u],p=c-1,b=t[p];let m;n&&n(l),typeof d=="string"&&(m=(M=r.find(I=>I.check(d,l,b)))==null?void 0:M.transform,m&&(o[u]=d+m(b)+l,a.push(p))),m||o.push(l);const y=e.raw[c];m?s[u]=s[u]+m(b)+y:s.push(y)}),{templateStrings:Object.assign([],o,{raw:s}),valueIndexDeletions:a}}function Ks(e){return vr(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Rl=[Ys("tag name css selector interpolation",(e,t,r)=>Ks(r),e=>e.tagName)];function Nl(e,t){return Js(e,t,Rl)}function f(e,...t){const r=Xs(e,t,()=>Nl(e,t));return wt(r.strings,...r.values)}const jl=[Ys("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=Ks(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Zl(e){}function Ol(e){return Js(e.strings,e.values,jl,Zl)}function h(e,...t){const r=Di(e,...t),n=Xs(e,t,()=>Ol(r));return{...r,strings:n.strings,values:n.values}}const Dl=0;function zl(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Dl)}class Nt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class yo extends Nt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const $r="locationchange";let xo=!1;const Hl=globalThis.history.pushState;function Co(...e){const t=Hl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event($r)),t}const Vl=globalThis.history.replaceState;function Mo(...e){const t=Vl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event($r)),t}function Fl(){if(!xo){if(globalThis.history.pushState===Co)throw new yo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Mo)throw new yo("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");xo=!0,globalThis.history.pushState=Co,globalThis.history.replaceState=Mo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event($r))})}}function ql(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Wl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Ul(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?ql(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:r,search:o,hash:s}}class Gl extends Nt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Qs(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const So=6;function Ao(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>So)throw new Gl(`Route sanitization depth has exceed the max of ${So} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Qs(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Or extends Nt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Yl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Or(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Or(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Or(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Xl(e,t,r,n=!1){const o=ea(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function ea(e,t,r=""){var l;if(!r&&t!=null)throw new Nt("Route base regexp was defined but routeBase string was not provided.");const n=Jl(t)?`/${r}`:"",o=e.search?Wl(e.search).toString():"",s=o?`?${o}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${a}${e.hash}`:"";return`${n}/${e.paths.join("/")}${s}${i}`}function Jl(e){return!!(e&&globalThis.location.pathname.match(e))}function Kl(e={}){var s;Yl(e),Fl();const t=(s=e.routeBase)==null?void 0:s.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o={listeners:new Set,initParams:e,sanitizeFullRoute:a=>{const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes:(a,i=!1,l=!1)=>{const c=o.getCurrentRawRoutes(),u={...c,...a},d=o.sanitizeFullRoute(u);if(!(!l&&Qs(c,d)))return Xl(d,r,t,i)},createRoutesUrl:a=>ea(a,r,t),getCurrentRawRoutes:()=>Ul(r),addRouteListener:(a,i)=>{if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Nt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),n||(globalThis.addEventListener($r,()=>Ao(o)),n=!0),a&&Ao(o,i),i},hasRouteListener:a=>o.listeners.has(a),removeRouteListener:a=>o.listeners.delete(a),sanitizationDepth:0};return o}var ie;(function(e){e.Search="search",e.Book="book"})(ie||(ie={}));const ta={hash:void 0,paths:[ie.Book],search:void 0};function Ql(e){return Kl({routeBase:e,routeSanitizer(t){return{paths:e0(t.paths),hash:void 0,search:void 0}}})}function e0(e){const t=e[0];if(Ei(t,ie)){if(t===ie.Book)return[ie.Book,...e.slice(1)];if(t===ie.Search)return[t,e[1]??""];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ta.paths}function Io(e){return e!==e.toUpperCase()}function t0(e){return e.split("").reduce((r,n,o,s)=>{const a=o>0?s[o-1]:"",i=o<s.length-1?s[o+1]:"",l=Io(a)||Io(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const r0=["january","february","march","april","may","june","july","august","september","october","november","december"];r0.map(e=>e.slice(0,3));function n0(e){return!!e&&typeof e=="object"}function Eo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function o0(e){return Array.isArray(e)?"array":typeof e}function s0(e,t){return o0(e)===t}function a0(e,t){let r=!1;const n=Eo(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(Eo(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function kr(e){if(n0(e))return a0(e,(r,n)=>{if(!s0(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(t0(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,a=r.startsWith("--")?R(r):r.startsWith("-")?wt`-${R(r)}`:wt`--${R(r)}`;return{name:a,value:wt`var(${a}, ${R(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${kr.name}' function.`)}function i0({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const N=kr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),l0={nav:{hover:{background:N["element-book-nav-hover-background-color"],foreground:N["element-book-nav-hover-foreground-color"]},active:{background:N["element-book-nav-active-background-color"],foreground:N["element-book-nav-active-foreground-color"]},selected:{background:N["element-book-nav-selected-background-color"],foreground:N["element-book-nav-selected-foreground-color"]}},accent:{icon:N["element-book-accent-icon-color"]},page:{background:N["element-book-page-background-color"],backgroundFaint1:N["element-book-page-background-faint-level-1-color"],backgroundFaint2:N["element-book-page-background-faint-level-2-color"],foreground:N["element-book-page-foreground-color"],foregroundFaint1:N["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:N["element-book-page-foreground-faint-level-2-color"]}};function c0(e,t){ra(e,t,l0)}function fn(e){return Ln(e,"_$cssResult$")}function To(e){return Cs(e,["name","value","default"])&&Mi(e.default,"string")&&fn(e.name)&&fn(e.value)}function ra(e,t,r){Object.entries(t).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(fn(o)){if(!To(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);i0({forCssVar:s,onElement:e,toValue:String(o)})}else{if(To(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ra(e,o,s)}})}function V(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,i)=>t.map(l=>l[i])),s=e.map(a=>o.map(i=>{let l=0;if(!Array.isArray(a)){for(let c of i)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(i[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(a=>a[0]):s}function jt(e){return Ie(e)==="string"}function Ie(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function lr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function na(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),s.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function oa(e){return e[e.length-1]}function cr(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function sa(e,t,r){return(r-e)/(t-e)}function Dn(e,t,r){return cr(t[0],t[1],sa(e[0],e[1],r))}function aa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var d0=Object.freeze({__proto__:null,isString:jt,type:Ie,toPrecision:lr,parseFunction:na,last:oa,interpolate:cr,interpolateInv:sa,mapRange:Dn,parseCoordGrammar:aa,multiplyMatrices:V});class u0{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Be=new u0;var ve={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const pe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function gn(e){return Array.isArray(e)?e:pe[e]}function dr(e,t,r,n={}){if(e=gn(e),t=gn(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Be.run("chromatic-adaptation-start",o),o.M||(o.W1===pe.D65&&o.W2===pe.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===pe.D50&&o.W2===pe.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Be.run("chromatic-adaptation-end",o),o.M)return V(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const h0=75e-6;var Pt,mn,ot,mr,ia;const he=class{constructor(t){ut(this,Pt);ut(this,mr);ut(this,ot,void 0);var o,s,a;this.id=t.id,this.name=t.name,this.base=t.base?he.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=gn(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(s=this.formats)!=null&&s.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Er(this,ot,Ht(this,mr,ia).call(this).reverse()),Be.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=h0}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[i,l]=a.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ht(this,Pt,mn).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Ht(this,Pt,mn).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=he.get(t),this===t)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=Ye(this,ot),o=Ye(t,ot),s,a;for(let i=0;i<n.length&&n[i]===o[i];i++)s=n[i],a=i;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>a;i--)r=n[i].toBase(r);for(let i=a+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=he.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(he.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof he)return t;if(Ie(t)==="string"){let o=he.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return he.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Ie(t),o,s;if(n==="string"?t.includes(".")?[o,s]=t.split("."):[o,s]=[,t]:Array.isArray(t)?[o,s]=t:(o=t.space,s=t.coordId),o=he.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ie(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=he.get(o);let a=s.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let S=he;Pt=new WeakSet,mn=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=aa(t.coords);let r=Object.entries(this.coords).map(([n,o],s)=>{let a=t.coordGrammar[s][0],i=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((s,a)=>{let{fromRange:i,toRange:l,suffix:c}=r[a];return i&&l&&(s=Dn(i,l,s)),s=lr(s,o),c&&(s+=c),s})}return t},ot=new WeakMap,mr=new WeakSet,ia=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},Ar(S,"registry",{}),Ar(S,"DEFAULT_FORMAT",{type:"functions",name:"color"});var ce=new S({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class K extends S{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ce),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=V(t.toXYZ_M,r);return this.white!==this.base.white&&(n=dr(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=dr(this.base.white,this.white,r),V(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function la(e){var r,n,o,s,a;let t={str:(r=String(e))==null?void 0:r.trim()};if(Be.run("parse-start",t),t.color)return t.color;if(t.parsed=na(t.str),t.parsed){let i=t.parsed.name;if(i==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let d of S.all){let p=d.getFormat("color");if(p&&(l===p.id||(n=p.ids)!=null&&n.includes(l))){let b=Object.keys(d.coords).length,m=Array(b).fill(0);return m.forEach((y,M)=>m[M]=t.parsed.args[M]||0),{spaceId:d.id,coords:m,alpha:c}}}let u="";if(l in S.registry){let d=(a=(s=(o=S.registry[l].formats)==null?void 0:o.functions)==null?void 0:s.color)==null?void 0:a.id;d&&(u=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${l}). `+(u||"Missing a plugin?"))}else for(let l of S.all){let c=l.getFormat(i);if(c&&c.type==="function"){let u=1;(c.lastAlpha||oa(t.parsed.args).alpha)&&(u=t.parsed.args.pop());let d=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([p,b],m)=>{var F;let y=c.coordGrammar[m],M=(F=d[m])==null?void 0:F.type;if(y=y.find(U=>U==M),!y){let U=b.name||p;throw new TypeError(`${M} not allowed for ${U} in ${i}()`)}let I=y.range;M==="<percentage>"&&(I||(I=[0,1]));let E=b.range||b.refRange;I&&E&&(d[m]=Dn(I,E,d[m]))}),{spaceId:l.id,coords:d,alpha:u}}}}else for(let i of S.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let u=c.parse(t.str);if(u)return u.alpha??(u.alpha=1),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Z(e){if(!e)throw new TypeError("Empty color reference");jt(e)&&(e=la(e));let t=e.space||e.spaceId;return t instanceof S||(e.space=S.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Zt(e,t){return t=S.get(t),t.from(e)}function de(e,t){let{space:r,index:n}=S.resolveCoord(t,e.space);return Zt(e,r)[n]}function ca(e,t,r){return t=S.get(t),e.coords=t.to(e.space,r),e}function Pe(e,t,r){if(e=Z(e),arguments.length===2&&Ie(arguments[1])==="object"){let n=arguments[1];for(let o in n)Pe(e,o,n[o])}else{typeof r=="function"&&(r=r(de(e,t)));let{space:n,index:o}=S.resolveCoord(t,e.space),s=Zt(e,n);s[o]=r,ca(e,n,s)}return e}var zn=new S({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ce,fromBase:e=>dr(ce.white,"D50",e),toBase:e=>dr("D50",ce.white,e),formats:{color:{}}});const p0=216/24389,Bo=24/116,Vt=24389/27;let Dr=pe.D50;var Q=new S({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Dr,base:zn,fromBase(e){let r=e.map((n,o)=>n/Dr[o]).map(n=>n>p0?Math.cbrt(n):(Vt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Bo?Math.pow(t[0],3):(116*t[0]-16)/Vt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Vt,t[2]>Bo?Math.pow(t[2],3):(116*t[2]-16)/Vt].map((n,o)=>n*Dr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function yr(e){return(e%360+360)%360}function f0(e,t){if(e==="raw")return t;let[r,n]=t.map(yr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var At=new S({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Q,fromBase(e){let[t,r,n]=e,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Po=25**7,ur=Math.PI,Lo=180/ur,Xe=ur/180;function vn(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,a,i]=Q.from(e),l=At.from(Q,[s,a,i])[1],[c,u,d]=Q.from(t),p=At.from(Q,[c,u,d])[1];l<0&&(l=0),p<0&&(p=0);let m=((l+p)/2)**7,y=.5*(1-Math.sqrt(m/(m+Po))),M=(1+y)*a,I=(1+y)*u,E=Math.sqrt(M**2+i**2),F=Math.sqrt(I**2+d**2),U=M===0&&i===0?0:Math.atan2(i,M),re=I===0&&d===0?0:Math.atan2(d,I);U<0&&(U+=2*ur),re<0&&(re+=2*ur),U*=Lo,re*=Lo;let we=c-s,Me=F-E,J=re-U,Ze=U+re,Dt=Math.abs(J),ne;E*F===0?ne=0:Dt<=180?ne=J:J>180?ne=J-360:J<-180?ne=J+360:console.log("the unthinkable has happened");let Ge=2*Math.sqrt(F*E)*Math.sin(ne*Xe/2),ct=(s+c)/2,Sr=(E+F)/2,Un=Math.pow(Sr,7),be;E*F===0?be=Ze:Dt<=180?be=Ze/2:Ze<360?be=(Ze+360)/2:be=(Ze-360)/2;let Gn=(ct-50)**2,fi=1+.015*Gn/Math.sqrt(20+Gn),Yn=1+.045*Sr,dt=1;dt-=.17*Math.cos((be-30)*Xe),dt+=.24*Math.cos(2*be*Xe),dt+=.32*Math.cos((3*be+6)*Xe),dt-=.2*Math.cos((4*be-63)*Xe);let Xn=1+.015*Sr*dt,gi=30*Math.exp(-1*((be-275)/25)**2),mi=2*Math.sqrt(Un/(Un+Po)),vi=-1*Math.sin(2*gi*Xe)*mi,zt=(we/(r*fi))**2;return zt+=(Me/(n*Yn))**2,zt+=(Ge/(o*Xn))**2,zt+=vi*(Me/(n*Yn))*(Ge/(o*Xn)),Math.sqrt(zt)}const g0=75e-6;function $t(e,t=e.space,{epsilon:r=g0}={}){e=Z(e),t=S.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function It(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Le(e,{method:t=ve.gamut_mapping,space:r=e.space}={}){if(jt(arguments[1])&&(r=arguments[1]),r=S.get(r),$t(e,r,{epsilon:0}))return e;let n=le(e,r);if(t!=="clip"&&!$t(e,r)){let o=Le(It(n),{method:"clip",space:r});if(vn(e,o)>2){let s=S.resolveCoord(t),a=s.space,i=s.id,l=le(n,a),u=(s.range||s.refRange)[0],d=.01,p=u,b=de(l,i);for(;b-p>d;){let m=It(l);m=Le(m,{space:r,method:"clip"}),vn(l,m)-2<d?p=de(l,i):b=de(l,i),Pe(l,i,(p+b)/2)}n=le(l,r)}else n=o}if(t==="clip"||!$t(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,a)=>{let[i,l]=o[a];return i!==void 0&&(s=Math.max(i,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==e.space&&(n=le(n,e.space)),e.coords=n.coords,e}Le.returns="color";function le(e,t,{inGamut:r}={}){e=Z(e),t=S.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Le(o)),o}le.returns="color";function hr(e,{precision:t=ve.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;e=Z(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??S.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!$t(e)&&(i=Le(It(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)s=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(b=>lr(b,t)));let u=[...i];if(c==="color"){let b=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(b)}let d=e.alpha;t!==null&&(d=lr(d,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";s=`${c}(${u.join(r.commas?", ":" ")}${p})`}return s}const m0=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],v0=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var xr=new K({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:m0,fromXYZ_M:v0,formats:{color:{}}});const Ft=1.09929682680944,_o=.018053968510807;var da=new K({id:"rec2020",name:"REC.2020",base:xr,toBase(e){return e.map(function(t){return t<_o*4.5?t/4.5:Math.pow((t+Ft-1)/Ft,1/.45)})},fromBase(e){return e.map(function(t){return t>=_o?Ft*Math.pow(t,.45)-(Ft-1):4.5*t})},formats:{color:{}}});const w0=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],b0=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ua=new K({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:w0,fromXYZ_M:b0});const $0=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],k0=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ha=new K({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:$0,fromXYZ_M:k0,formats:{color:{}}}),Ro={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let No=Array(3).fill("<percentage> | <number>[0, 255]"),jo=Array(3).fill("<number>[0, 255]");var Et=new K({id:"srgb",name:"sRGB",base:ha,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:No},rgb_number:{name:"rgb",commas:!0,coords:jo,noAlpha:!0},color:{},rgba:{coords:No,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:jo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ro.black,t.alpha=0):t.coords=Ro[e],t.coords)return t}}}}),pa=new K({id:"p3",name:"P3",base:ua,fromBase:Et.fromBase,toBase:Et.toBase,formats:{color:{id:"display-p3"}}});ve.display_space=Et;if(typeof CSS<"u"&&CSS.supports)for(let e of[Q,da,pa]){let t=e.getMinCoords(),n=hr({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ve.display_space=e;break}}function y0(e,{space:t=ve.display_space,...r}={}){let n=hr(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ve.display_space)n=new String(n),n.color=e;else{let o=le(e,t);n=new String(hr(o,r)),n.color=o}return n}function fa(e,t,r="lab"){r=S.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((s,a,i)=>{let l=o[i];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}function x0(e,t){return e=Z(e),t=Z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function _e(e){return de(e,[ce,"y"])}function ga(e,t){Pe(e,[ce,"y"],t)}function C0(e){Object.defineProperty(e.prototype,"luminance",{get(){return _e(this)},set(t){ga(this,t)}})}var M0=Object.freeze({__proto__:null,getLuminance:_e,setLuminance:ga,register:C0});function S0(e,t){e=Z(e),t=Z(t);let r=Math.max(_e(e),0),n=Math.max(_e(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const A0=.56,I0=.57,E0=.62,T0=.65,Zo=.022,B0=1.414,P0=.1,L0=5e-4,_0=1.14,Oo=.027,R0=1.14;function Do(e){return e>=Zo?e:e+(Zo-e)**B0}function Je(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function N0(e,t){t=Z(t),e=Z(e);let r,n,o,s,a,i;t=le(t,"srgb"),[s,a,i]=t.coords;let l=Je(s)*.2126729+Je(a)*.7151522+Je(i)*.072175;e=le(e,"srgb"),[s,a,i]=e.coords;let c=Je(s)*.2126729+Je(a)*.7151522+Je(i)*.072175,u=Do(l),d=Do(c),p=d>u;return Math.abs(d-u)<L0?n=0:p?(r=d**A0-u**I0,n=r*_0):(r=d**T0-u**E0,n=r*R0),Math.abs(n)<P0?o=0:n>0?o=n-Oo:o=n+Oo,o*100}function j0(e,t){e=Z(e),t=Z(t);let r=Math.max(_e(e),0),n=Math.max(_e(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Z0=5e4;function O0(e,t){e=Z(e),t=Z(t);let r=Math.max(_e(e),0),n=Math.max(_e(t),0);return n>r&&([r,n]=[n,r]),n===0?Z0:(r-n)/n}function D0(e,t){e=Z(e),t=Z(t);let r=de(e,[Q,"l"]),n=de(t,[Q,"l"]);return Math.abs(r-n)}const z0=216/24389,zo=24/116,qt=24389/27;let zr=pe.D65;var wn=new S({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:zr,base:ce,fromBase(e){let r=e.map((n,o)=>n/zr[o]).map(n=>n>z0?Math.cbrt(n):(qt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>zo?Math.pow(t[0],3):(116*t[0]-16)/qt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/qt,t[2]>zo?Math.pow(t[2],3):(116*t[2]-16)/qt].map((n,o)=>n*zr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const Hr=Math.pow(5,.5)*.5+.5;function H0(e,t){e=Z(e),t=Z(t);let r=de(e,[wn,"l"]),n=de(t,[wn,"l"]),o=Math.abs(Math.pow(r,Hr)-Math.pow(n,Hr)),s=Math.pow(o,1/Hr)*Math.SQRT2-40;return s<7.5?0:s}var rr=Object.freeze({__proto__:null,contrastWCAG21:S0,contrastAPCA:N0,contrastMichelson:j0,contrastWeber:O0,contrastLstar:D0,contrastDeltaPhi:H0});function V0(e,t,r={}){jt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(rr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Z(e),t=Z(t);for(let s in rr)if("contrast"+n.toLowerCase()===s.toLowerCase())return rr[s](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ma(e){let[t,r,n]=Zt(e,ce),o=t+15*r+3*n;return[4*t/o,9*r/o]}function va(e){let[t,r,n]=Zt(e,ce),o=t+r+n;return[t/o,r/o]}function F0(e){Object.defineProperty(e.prototype,"uv",{get(){return ma(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return va(this)}})}var q0=Object.freeze({__proto__:null,uv:ma,xy:va,register:F0});function W0(e,t){return fa(e,t,"lab")}const U0=Math.PI,Ho=U0/180;function G0(e,t,{l:r=2,c:n=1}={}){let[o,s,a]=Q.from(e),[,i,l]=At.from(Q,[o,s,a]),[c,u,d]=Q.from(t),p=At.from(Q,[c,u,d])[1];i<0&&(i=0),p<0&&(p=0);let b=o-c,m=i-p,y=s-u,M=a-d,I=y**2+M**2-m**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let F=.0638*i/(1+.0131*i)+.638,U;Number.isNaN(l)&&(l=0),l>=164&&l<=345?U=.56+Math.abs(.2*Math.cos((l+168)*Ho)):U=.36+Math.abs(.4*Math.cos((l+35)*Ho));let re=Math.pow(i,4),we=Math.sqrt(re/(re+1900)),Me=F*(we*U+1-we),J=(b/(r*E))**2;return J+=(m/(n*F))**2,J+=I/Me**2,Math.sqrt(J)}const Vo=203;var Hn=new S({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ce,fromBase(e){return e.map(t=>Math.max(t*Vo,0))},toBase(e){return e.map(t=>Math.max(t/Vo,0))}});const Wt=1.15,Ut=.66,Fo=2610/2**14,Y0=2**14/2610,qo=3424/2**12,Wo=2413/2**7,Uo=2392/2**7,X0=1.7*2523/2**5,Go=2**5/(1.7*2523),Gt=-.56,Vr=16295499532821565e-27,J0=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],K0=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Q0=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ec=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var wa=new S({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Hn,fromBase(e){let[t,r,n]=e,o=Wt*t-(Wt-1)*n,s=Ut*r-(Ut-1)*t,i=V(J0,[o,s,n]).map(function(p){let b=qo+Wo*(p/1e4)**Fo,m=1+Uo*(p/1e4)**Fo;return(b/m)**X0}),[l,c,u]=V(Q0,i);return[(1+Gt)*l/(1+Gt*l)-Vr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Vr)/(1+Gt-Gt*(t+Vr)),a=V(ec,[o,r,n]).map(function(p){let b=qo-p**Go,m=Uo*p**Go-Wo;return 1e4*(b/m)**Y0}),[i,l,c]=V(K0,a),u=(i+(Wt-1)*c)/Wt,d=(l+(Ut-1)*u)/Ut;return[u,d,c]},formats:{color:{}}}),bn=new S({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:wa,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function tc(e,t){let[r,n,o]=bn.from(e),[s,a,i]=bn.from(t),l=r-s,c=n-a;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const ba=3424/4096,$a=2413/128,ka=2392/128,Yo=2610/16384,rc=2523/32,nc=16384/2610,Xo=32/2523,oc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],sc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],ac=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],ic=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var $n=new S({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Hn,fromBase(e){let t=V(oc,e);return lc(t)},toBase(e){let t=cc(e);return V(ic,t)},formats:{color:{}}});function lc(e){let t=e.map(function(r){let n=ba+$a*(r/1e4)**Yo,o=1+ka*(r/1e4)**Yo;return(n/o)**rc});return V(sc,t)}function cc(e){return V(ac,e).map(function(n){let o=Math.max(n**Xo-ba,0),s=$a-ka*n**Xo;return 1e4*(o/s)**nc})}function dc(e,t){let[r,n,o]=$n.from(e),[s,a,i]=$n.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(o-i)**2)}const uc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],hc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],pc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],fc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var pr=new S({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ce,fromBase(e){let r=V(uc,e).map(n=>Math.cbrt(n));return V(pc,r)},toBase(e){let r=V(fc,e).map(n=>n**3);return V(hc,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function gc(e,t){let[r,n,o]=pr.from(e),[s,a,i]=pr.from(t),l=r-s,c=n-a,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var kn=Object.freeze({__proto__:null,deltaE76:W0,deltaECMC:G0,deltaE2000:vn,deltaEJz:tc,deltaEITP:dc,deltaEOK:gc});function mt(e,t,r={}){jt(r)&&(r={method:r});let{method:n=ve.deltaE,...o}=r;e=Z(e),t=Z(t);for(let s in kn)if("deltae"+n.toLowerCase()===s.toLowerCase())return kn[s](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function mc(e,t=.25){let n=[S.get("oklch","lch"),"l"];return Pe(e,n,o=>o*(1+t))}function vc(e,t=.25){let n=[S.get("oklch","lch"),"l"];return Pe(e,n,o=>o*(1-t))}var wc=Object.freeze({__proto__:null,lighten:mc,darken:vc});function ya(e,t,r=.5,n={}){[e,t]=[Z(e),Z(t)],Ie(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:a}=n;return Ot(e,t,{space:o,outputSpace:s,premultiplied:a})(r)}function xa(e,t,r={}){let n;Vn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:a=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[Z(e),Z(t)],n=Ot(e,t,l));let c=mt(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let p=1/(u-1);d=Array.from({length:u},(b,m)=>{let y=m*p;return{p:y,color:n(y)}})}if(o>0){let p=d.reduce((b,m,y)=>{if(y===0)return 0;let M=mt(m.color,d[y-1].color,s);return Math.max(b,M)},0);for(;p>o;){p=0;for(let b=1;b<d.length&&d.length<i;b++){let m=d[b-1],y=d[b],M=(y.p+m.p)/2,I=n(M);p=Math.max(p,mt(I,m.color),mt(I,y.color)),d.splice(b,0,{p:M,color:n(M)}),b++}}}return d=d.map(p=>p.color),d}function Ot(e,t,r={}){if(Vn(e)){let[l,c]=[e,t];return Ot(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:a}=r;e=Z(e),t=Z(t),e=It(e),t=It(t);let i={colors:[e,t],options:r};if(n?n=S.get(n):n=S.registry[ve.interpolationSpace]||e.space,o=o?S.get(o):n,e=le(e,n),t=le(t,n),e=Le(e),t=Le(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[de(e,c),de(t,c)];[u,d]=f0(l,[u,d]),Pe(e,c,u),Pe(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((p,b)=>{let m=t.coords[b];return cr(p,m,l)}),u=cr(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(p=>p/u)),o!==n&&(d=le(d,o)),d},{rangeArgs:i})}function Vn(e){return Ie(e)==="function"&&!!e.rangeArgs}ve.interpolationSpace="lab";function bc(e){e.defineFunction("mix",ya,{returns:"color"}),e.defineFunction("range",Ot,{returns:"function<color>"}),e.defineFunction("steps",xa,{returns:"array<color>"})}var $c=Object.freeze({__proto__:null,mix:ya,steps:xa,range:Ot,isRange:Vn,register:bc}),Ca=new S({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Et,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[a,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-s)/c+(o<s?6:0);break;case o:a=(s-n)/c+2;break;case s:a=(n-o)/c+4}a=a*60}return[a,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let a=(s+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ma=new S({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ca,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),kc=new S({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ma,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let s=1-n,a=s===0?0:1-r/s;return[t,a*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const yc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],xc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Sa=new K({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:yc,fromXYZ_M:xc}),Cc=new K({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Sa,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Mc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Sc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Aa=new K({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:zn,toXYZ_M:Mc,fromXYZ_M:Sc});const Ac=1/512,Ic=16/512;var Ec=new K({id:"prophoto",name:"ProPhoto",base:Aa,toBase(e){return e.map(t=>t<Ic?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Ac?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Tc=new S({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:pr,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),yr(o)]},toBase(e){let[t,r,n]=e,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Jo=203,Ko=2610/2**14,Bc=2**14/2610,Pc=2523/2**5,Qo=2**5/2523,es=3424/2**12,ts=2413/2**7,rs=2392/2**7;var Lc=new K({id:"rec2100pq",name:"REC.2100-PQ",base:xr,toBase(e){return e.map(function(t){return(Math.max(t**Qo-es,0)/(ts-rs*t**Qo))**Bc*1e4/Jo})},fromBase(e){return e.map(function(t){let r=Math.max(t*Jo/1e4,0),n=es+ts*r**Ko,o=1+rs*r**Ko;return(n/o)**Pc})},formats:{color:{id:"rec2100-pq"}}});const ns=.17883277,os=.28466892,ss=.55991073,Fr=3.7743;var _c=new K({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:xr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Fr:Math.exp((t-ss)/ns+os)/12*Fr})},fromBase(e){return e.map(function(t){return t/=Fr,t<=1/12?Math.sqrt(3*t):ns*Math.log(12*t-os)+ss})},formats:{color:{id:"rec2100-hlg"}}});const Ia={};Be.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ea(e.W1,e.W2,e.options.method))});Be.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ea(e.W1,e.W2,e.options.method))});function Cr({id:e,toCone_M:t,fromCone_M:r}){Ia[e]=arguments[0]}function Ea(e,t,r="Bradford"){let n=Ia[r],[o,s,a]=V(n.toCone_M,e),[i,l,c]=V(n.toCone_M,t),u=[[i/o,0,0],[0,l/s,0],[0,0,c/a]],d=V(u,n.toCone_M);return V(n.fromCone_M,d)}Cr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Cr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Cr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Cr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(pe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});pe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Rc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Nc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ta=new K({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:pe.ACES,toXYZ_M:Rc,fromXYZ_M:Nc,formats:{color:{}}});const Yt=2**-16,qr=-.35828683,Xt=(Math.log2(65504)+9.72)/17.52;var jc=new K({id:"acescc",name:"ACEScc",coords:{r:{range:[qr,Xt],name:"Red"},g:{range:[qr,Xt],name:"Green"},b:{range:[qr,Xt],name:"Blue"}},referred:"scene",base:Ta,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Yt)*2:r<Xt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Yt)+9.72)/17.52:t<Yt?(Math.log2(Yt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),as=Object.freeze({__proto__:null,XYZ_D65:ce,XYZ_D50:zn,XYZ_ABS_D65:Hn,Lab_D65:wn,Lab:Q,LCH:At,sRGB_Linear:ha,sRGB:Et,HSL:Ca,HWB:kc,HSV:Ma,P3_Linear:ua,P3:pa,A98RGB_Linear:Sa,A98RGB:Cc,ProPhoto_Linear:Aa,ProPhoto:Ec,REC_2020_Linear:xr,REC_2020:da,OKLab:pr,OKLCH:Tc,Jzazbz:wa,JzCzHz:bn,ICTCP:$n,REC_2100_PQ:Lc,REC_2100_HLG:_c,ACEScg:Ta,ACEScc:jc}),He;const Y=class{constructor(...t){ut(this,He,void 0);let r;t.length===1&&(r=Z(t[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=t,Er(this,He,S.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in Ye(this,He).coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:i=>this.set(a,i)})}get space(){return Ye(this,He)}get spaceId(){return Ye(this,He).id}clone(){return new Y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=y0(this,...t);return r.color=new Y(r.color),r}static get(t,...r){return t instanceof Y?t:new Y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:s}=n,a=function(...i){let l=r(...i);if(s==="color")l=Y.get(l);else if(s==="function<color>"){let c=l;l=function(...u){let d=c(...u);return Y.get(d)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>Y.get(c)));return l};t in Y||(Y[t]=a),o&&(Y.prototype[t]=function(...i){return a(this,...i)})}static defineFunctions(t){for(let r in t)Y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Y);else for(let r in t)Y.defineFunction(r,t[r])}};let O=Y;He=new WeakMap;O.defineFunctions({get:de,getAll:Zt,set:Pe,setAll:ca,to:le,equals:x0,inGamut:$t,toGamut:Le,distance:fa,toString:hr});Object.assign(O,{util:d0,hooks:Be,WHITES:pe,Space:S,spaces:S.registry,parse:la,defaults:ve});for(let e of Object.keys(as))S.register(as[e]);for(let e in S.registry)yn(e,S.registry[e]);Be.add("colorspace-init-end",e=>{var t;yn(e.id,e),(t=e.aliases)==null||t.forEach(r=>{yn(r,e)})});function yn(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(O.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return S.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:i}=S.resolveCoord([t,s]);if(i>=0)return o[i]}return Reflect.get(o,s,a)},set:(o,s,a,i)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=S.resolveCoord([t,s]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}O.extend(kn);O.extend({deltaE:mt});O.extend(wc);O.extend({contrast:V0});O.extend(q0);O.extend(M0);O.extend($c);O.extend(rr);function Ba(e){return Ti(e,(t,r)=>r instanceof O?R(r.toString({format:"hex"})):Ba(r))}const Zc="dodgerblue";function xn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Wr({background:e,foreground:t}){return{background:e??new O(xn(t)),foreground:t??new O(xn(e))}}var fr;(function(e){e.Dark="dark",e.Light="light"})(fr||(fr={}));function Oc(e){return e==="black"?"white":"black"}const Dc={black:{foregroundFaint1:new O("#ccc"),foregroundFaint2:new O("#eee")},white:{foregroundFaint1:new O("#ccc"),foregroundFaint2:new O("#eee")}},zc={black:{backgroundFaint1:new O("#666"),backgroundFaint2:new O("#444")},white:{backgroundFaint1:new O("#ccc"),backgroundFaint2:new O("#fafafa")}};function is({themeColor:e=Zc,themeStyle:t=fr.Light}={}){const r=new O(e),n=new O(t===fr.Dark?"black":"white"),o=xn(n),s=new O(o),a={nav:{hover:Wr({background:r.clone().set({"hsl.l":93})}),active:Wr({background:r.clone().set({"hsl.l":90})}),selected:Wr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...zc[Oc(o)],foreground:s,...Dc[o]}};return Ba(a)}const Pa=Zn()("change-page"),Cn=kr({"vir-icon-color":"currentColor"}),Hc=kr({"vir-icon-stroke-color":Cn["vir-icon-color"].value,"vir-icon-fill-color":Cn["vir-icon-color"].value}),Ur={...Cn,...Hc};function La({name:e,svgTemplate:t}){return{name:e,templateString:typeof t=="string"?t:pn(t)}}const Ee=On()({tagName:"vir-icon",hostClasses:{"vir-icon-fit-icon":({inputs:e})=>!!e.fitContainer},styles:({hostClassSelectors:e})=>f`
        :host {
            display: block;
            color: ${Ur["vir-icon-color"].value};
            fill: ${Ur["vir-icon-fill-color"].value};
            stroke: ${Ur["vir-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?Yi(e.icon.templateString):""}),Vc=La({name:"Element16Icon",svgTemplate:h`
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
    `}),{defineElement:Ue,defineElementNoInputs:Td}=Vs(),X=Ue()({tagName:"element-book-route-link",cssVars:{anchorPadding:""},styles:({cssVarValues:e})=>f`
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
                ${C("click",s=>{(!e.router||zl(s))&&(s.preventDefault(),window.scrollTo(0,0),t(new Pa(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),Jt=Ue()({tagName:"element-book-nav",styles:f`
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
            ${X.cssVarNames.anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${X} {
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

        ${Ee} {
            display: inline-flex;
            color: ${N["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=_a({indent:0,entryTreeNode:e.tree,rootPath:[],router:e.router,selectedPath:e.selectedPath.slice(1)});return h`
            <ul>
                ${t}
            </ul>
        `}});function _a({indent:e,entryTreeNode:t,rootPath:r,selectedPath:n,router:o}){const s=t.breadcrumb?r.concat(t.breadcrumb):r,a=t.entry.type===xe.Page,i=Object.values(t.children).map(l=>_a({indent:e+1,entryTreeNode:l,rootPath:s,selectedPath:n,router:o}));return h`
        <div class="nav-tree-entry" style="--indent: ${e};">
            <slot></slot>
            <li class=${t.entry.type}>
                <${X}
                    ${g(X,{router:o,route:{paths:[ie.Book,...s]}})}
                    class=${Ae({"title-row":!0,selected:Pn(n,s)})}
                >
                    <div class="title-text">
                        ${br(a,h`
                                <${Ee} ${g(Ee,{icon:Vc})}></${Ee}>
                            `)}
                        ${t.entry.title}
                    </div>
                </${X}>
            </li>
            ${i}
        </div>
    `}const Fc=La({name:"Element24Icon",svgTemplate:h`
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
    `}),Gr=Ue()({tagName:"element-book-breadcrumbs",styles:f`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const s=n>=o.length-1,a=o.slice(0,n+1),i=s?"":h`
                      <span class="spacer">&gt;</span>
                  `;return h`
                <${X}
                    ${g(X,{route:{hash:void 0,search:void 0,paths:[ie.Book,...a]},router:e.router})}
                >
                    ${r}
                </${X}>
                ${i}
            `}):h`
                &nbsp;
            `}}),qc=h`
    &nbsp;
`,Kt=Ue()({tagName:"element-book-example-controls",styles:f`
        :host {
            display: flex;
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=e.example.hideControls?"":e.example.title;return h`
            <span>
                ${t||qc}
                <span></span>
            </span>
        `}}),ls=Symbol("unset-internal-state"),Yr=Ue()({tagName:"element-book-example-viewer",stateInit:{internalState:ls},renderCallback({state:e,inputs:t,updateState:r}){e.internalState===ls&&r({internalState:t.example.stateInit});try{const n=t.example.render({state:e.internalState,updateState:o=>{r({internalState:{...e.internalState,...o}})}});return h`
                ${br(!!t.example.styles,h`
                        <style>
                            ${t.example.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),`${t.breadcrumbs.join(" > ")} failed: ${Bn(n)}`}}}),Xr=Ue()({tagName:"element-book-page-examples",styles:f`
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

        .individual-example-wrapper:hover ${Kt} {
            color: ${N["element-book-accent-icon-color"].value};
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,renderCallback({inputs:e}){const t=e.page.examples,r=t.every(n=>n.hideControls);return Gi(t,n=>e.parentBreadcrumbs.concat(n.title).join(">"),n=>{const o=e.parentBreadcrumbs.concat(n.title);return h`
                    <div class="individual-example-wrapper">
                        ${br(!r,h`
                                <${Kt}
                                    class=${Ae({"hidden-controls":!!n.hideControls})}
                                    ${g(Kt,{example:n})}
                                ></${Kt}>
                            `)}
                        <${Yr}
                            ${g(Yr,{example:n,breadcrumbs:o})}
                        ></${Yr}>
                    </div>
                `})}}),Ke=Ue()({tagName:"element-book-entry-display",styles:f`
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

        ${X} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${Ee} {
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
    `,renderCallback:({inputs:e})=>{const t=Na(e.currentNode),r=Lt(e.currentNode.entry,!1).reverse(),n=Ra({nestedPages:t,parentBreadcrumbs:r,isTopLevel:!0,router:e.router});return h`
            <div class="title-bar">
                <${Gr}
                    ${g(Gr,{currentRoute:e.currentRoute,router:e.router})}
                ></${Gr}>
            </div>
            <div class="all-examples-wrapper">${n}</div>
        `}});function Ra({nestedPages:e,parentBreadcrumbs:t,isTopLevel:r,router:n}){return e.map(o=>{if(_i(o,xe.Page)){const s=o.entry;if(!Li(s,xe.Page))throw new Error("nested entry should be a page");const a=h`
                    <${Ee} ${g(Ee,{icon:Fc})}></${Ee}>
                    ${s.title}
                `,i=r?h`
                          <h2 class="header-with-icon">${a}</h2>
                      `:h`
                          <h3 class="header-with-icon">${a}</h3>
                      `,l=[ie.Book,...t.concat(o.breadcrumb)];return h`
                    <div class="page-examples">
                        <div class="title-group">
                            <${X}
                                ${g(X,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                            >
                                ${i}
                            </${X}>
                            ${cs(s)}
                        </div>
                        <${Xr}
                            ${g(Xr,{page:s,parentBreadcrumbs:t})}
                        ></${Xr}>
                    </div>
                `}else return Object.entries(o).map(([s,a])=>{const i=r?h`
                                  <h1>${s}</h1>
                              `:h`
                                  <h2>${s}</h2>
                              `,l=[ie.Book,...t.concat(a.node.breadcrumb)];return h`
                            <div class="title-group">
                                <${X}
                                    ${g(X,{route:{paths:l,hash:void 0,search:void 0},router:n})}
                                >
                                    ${i}
                                </${X}>
                                ${cs(a.node.entry)}
                            </div>
                            ${Ra({nestedPages:a.nested,parentBreadcrumbs:a.node.breadcrumb?t.concat(a.node.breadcrumb):t,isTopLevel:!1,router:n})}
                        `})}).flat()}function cs(e){const t=(e.descriptionParagraphs??[]).map(r=>h`
            <p>${r}</p>
        `);return h`
        <div class="description">${t}</div>
    `}function Na(e){return e.entry.type===xe.Page?[e]:[{[e.entry.title]:{node:e,nested:Object.values(e.children).map(Na).flat()}}]}const Wc=new Map,Qt=On()({tagName:"element-book-app",stateInit:{currentRoute:ta,router:void 0,colors:{config:void 0,theme:is(void 0)}},styles:f`
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

        ${Ke} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Jt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({updateState:e,state:t,inputs:r,host:n}){if(r.baseUrl&&!t.router){const o=Ql(r.baseUrl);e({router:o}),o.addRouteListener(!0,s=>{e({currentRoute:s})})}},renderCallback:({state:e,inputs:t,host:r,updateState:n})=>{var s;try{let i=function(d){e.router?e.router.setRoutes(d):n({currentRoute:{...e.currentRoute,...d}})};var o=i;const a={themeColor:t.themeColor};if(!Pn(a,(s=e.colors)==null?void 0:s.config)){const d=is(a);n({colors:{config:a,theme:d}}),c0(r,d)}const l=Si(Wc,t.entries,()=>Ni(t.entries,t.everythingTitle));if(!ln(e.currentRoute.paths.slice(1),l)){const d=Object.values(l.children)[0];if(!d)throw new Error("No entries exist.");const p=Lt(d.entry,!0),b=t.defaultPath??(p.length?p:void 0);if(b&&b.length){const m={paths:[ie.Book,...b]};i(m)}}const u=ln(e.currentRoute.paths.slice(1),l);if(!u)throw new Error(`Tried to self-correct for invalid path ${e.currentRoute.paths.join("/")}
                        but failed to do so.`);return h`
                <div
                    class="root"
                    ${C(Pa,d=>{const p=r.shadowRoot.querySelector(Ke.tagName);p?p.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Ke.tagName}' for scrolling.`),i(d.detail)})}
                >
                    <${Jt}
                        ${g(Jt,{tree:l,router:e.router,selectedPath:e.currentRoute.paths})}
                    >
                        <slot name="nav-header"></slot>
                    </${Jt}>
                    <${Ke}
                        ${g(Ke,{currentRoute:e.currentRoute,currentNode:u,router:e.router})}
                    ></${Ke}>
                </div>
            `}catch(a){return h`
                <p class="error">${Bn(a)}</p>
            `}}});function Uc(e,t){return e.map(t)}function ja(e,t){return e.match(t)??[]}function Gc(e){return e.replace(/,/g,"")}function Yc(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function ds(e){return e!==e.toUpperCase()}function Mn(e){return e.split("").reduce((r,n,o,s)=>{const a=o>0?s[o-1]:"",i=o<s.length-1?s[o+1]:"",l=ds(a)||ds(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Tt(e,t){return e.split(t)}const Xc=String(NaN);function Za(e){if(typeof e=="string"&&isNaN(Number(e)))return Xc;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${ja(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(i=>i.split("").reverse().join("")).join(",")}${o}`}function Jc(e){return typeof e=="number"?e:Number(typeof e=="string"?Gc(e):e)}function Kc(e){return String(e).includes("e")}const Qc=["january","february","march","april","may","june","july","august","september","october","november","december"];Qc.map(e=>e.slice(0,3));function e1(e){return!!e&&typeof e=="object"}function Fe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ce(e,t){let r=!1;const n=Fe(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(Fe(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}const t1=["k","M","B","T","P","E","Z","Y"];function Fn({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function r1(e,t,r){const[n,o]=Tt(e,"."),s=Za(n),a=ja(s,/,/g).length,i=t[a-1],[l,c]=Tt(s,","),u=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Fn({beforeDot:l,afterDot:u,maxLength:r-1}),i].join("")}const us=3;function n1({input:e,maxLength:t}){const r=String(e),[n,o]=Tt(r,"e"),s=o.replace(/^[\-\+]/,""),a=o[0],i=["e",a,s].join(""),[l,c]=Tt(n,"."),u=s.length+us;return u===t?[l,i].join(""):u>t?a==="-"?"0":String(1/0):[Fn({afterDot:c,beforeDot:l,maxLength:t-s.length+us}),i].join("")}function o1(e,t){const[r,n]=Tt(Za(e),".");if(r.length<=t)return Fn({beforeDot:r,afterDot:n,maxLength:t})}function s1(e,{customSuffixes:t=t1,maxLength:r=6}={}){const n=Jc(e);if(isNaN(n)||n===1/0)return String(n);if(Kc(n))return n1({input:n,maxLength:r});const o=String(n),s=o1(o,r);return s??r1(o,t,r)}const fe=ee({title:"Elements",parent:void 0}),ke={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function hs(e,t){return`var(${e}, var(${ke.color}, ${t}))`}const $={stroke:(e="currentColor")=>hs(ke.strokeColor,e),fill:(e="currentColor")=>hs(ke.fillColor,e)};class v{constructor(t,r){this.iconName=t,this.svgString=r}}function w(e,...t){return e.reduce((n,o,s)=>{const a=s<t.length?t[s]:"";return n+o+a},"")}const a1=new v("Copy16Icon",w`
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
    `),i1=new v("ExternalLink16Icon",w`
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
    `),l1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",Oa="0 0 58 58",Da=`<image xlink:href="${l1}" id="icp-16__b" width="58" height="58" />`,c1=new v("Icp16Icon",w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${Oa}"
        >
            ${Da}
        </svg>
    `),kt=new v("InfoCircle16Icon",w`
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
    `),d1=new v("ArrowBarUp24Icon",w`
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
    `),u1=new v("ArrowForwardUp24Icon",w`
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
    `),za=new v("ArrowLeft24Icon",w`
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
    `),h1=new v("ArrowLoopLeft24Icon",w`
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
    `),Ha=new v("ArrowLoopRight24Icon",w`
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
    `),Va=new v("ArrowRight24Icon",w`
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
    `),Sn=new v("ArrowsSort24Icon",w`
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
    `),ps={interactionDuration:f`--toniq-interaction-transition-duration`,prettyDuration:f`--toniq-pretty-transition-duration`},G={interaction:f`var(${ps.interactionDuration}, 84ms)`,pretty:f`var(${ps.prettyDuration}, 300ms)`};function Mr(){return e=>e}function Jr(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const p1=(()=>{const e={backgroundColor:f`#ffffff`,foregroundColor:f`#000000`},t={...e,foregroundColor:f`#00D093`},r={...e,foregroundColor:f`#ACADAD`},n={...e,foregroundColor:f`#D6D6D6`},o={...t},s={...t,foregroundColor:f`#00A876`},a={...t,foregroundColor:f`#1D6852`},i={...n},l={...e,foregroundColor:f`#EAFBF7`},c={...e,backgroundColor:f`#D2EEFA`},u=Jr(o),d=Jr(s),p=Jr(a),b=p,m={backgroundColor:f`#F1F3F6`,foregroundColor:e.foregroundColor},y={...m,foregroundColor:f`#9A9A9D`};return Mr()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:s,pageInteractionActive:a,divider:i,dividerFaint:l,dropShadow:c,pageDarkPrimary:b,accentPrimary:u,accentPrimaryHover:d,accentPrimaryActive:p,accentSecondary:m,accentTertiary:y})})(),Fa=p1;function fs(e,t){return R(`--toniq-${Mn(e)}-${Mn(t)}`)}const qn=Ce(Fa,e=>({backgroundColor:fs(e,"backgroundColor"),foregroundColor:fs(e,"foregroundColor")}));function ae(e,t){const r=Fa[e][t],n=qn[e][t];return f`var(${n}, ${r})`}const x=Ce(qn,e=>({foregroundColor:ae(e,"foregroundColor"),backgroundColor:ae(e,"backgroundColor")}));function j(e){return f`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const f1=f`
    pointer-events: none;
    opacity: 0.3;
`;function yt(e,t,r){return Math.min(Math.max(e,t),r)}function et(e){return`${e}px`}function Kr(e){return`${e}%`}function Qr(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,u)=>{const d=e[u+1];return d==null?!0:c<=t&&d>=t});if(o<0)return r;const s=e[o];if(s==null)return r;const a=e[o+1];if(a==null)return s;const i=t-s,l=a-t;return i<l?o:o+1}function g1(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=m1(e);const o=[e];for(;n<t;){const s=Math.pow(10,String(n).length-1),a=n+s;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(gs(o,r),o.length>r&&gs(o,r)),o}function gs(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function m1(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function Ne({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=R(et(n+r+t));return f`
        ${R(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            border: ${n}px solid ${x.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const qa=Mr()({toniqFont:{"font-family":f`'Rubik', sans-serif`},normalWeightFont:{"font-weight":f`400`},boldFont:{"font-weight":f`600`},extraBoldFont:{"font-weight":f`900`},paragraphFont:{"line-height":f`24px`,"font-size":f`16px`},boldParagraphFont:{},labelFont:{"line-height":f`16px`,"font-size":f`12px`},boldLabelFont:{},h1Font:{"line-height":f`96px`,"font-size":f`64px`},h2Font:{"line-height":f`48px`,"font-size":f`32px`},h3Font:{"line-height":f`32px`,"font-size":f`24px`},monospaceFont:{"font-family":f`'Inconsolata', monospace`,"line-height":f`1.125em`}}),v1=Ce(qa,(e,t)=>{const r=R(Mn(e.replace(/Font$/,"")));return Ce(t,o=>{const s=R(o);return f`--toniq-font-${r}-${s}`})});function me(e){const t=v1[e],r=qa[e],n=Fe(t).map(o=>{const s=r[o],a=t[o];return f`
            ${R(o)}: var(${a}, ${s});
        `});return R(n.join(`
`))}const W=(()=>{const e=f`
        font-style: normal;
        color: ${x.pagePrimary.foregroundColor};
        ${me("toniqFont")};
    `,t=f`
        ${e};
        ${me("normalWeightFont")};
    `,r=f`
        ${e};
        ${me("boldFont")};
    `,n=f`
        ${e};
        ${me("extraBoldFont")};
    `,o=f`
        ${e};
        ${me("paragraphFont")};
        ${t};
    `,s=f`
        ${e};
        ${o};
        ${r};
    `,a=f`
        ${e};
        ${me("labelFont")};
        ${t};
    `,i=f`
        ${a};
        ${r};
    `,l=f`
        ${me("h1Font")};
        ${n};
    `,c=f`
        ${me("h2Font")};
        ${r};
    `,u=f`
        ${me("h3Font")};
        ${r};
    `,d=f`
        ${me("monospaceFont")}
    `;return Mr()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:s,labelFont:a,boldLabelFont:i,h1Font:l,h2Font:c,h3Font:u,monospaceFont:d})})(),je=f`
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
`,w1=Mr()({popupShadow:f`
        filter: drop-shadow(0px 12px 8px ${x.dropShadow.backgroundColor});
    `}),qe=f`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,b1=new v("ArrowsSortAscending24Icon",w`
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
    `),$1=new v("ArrowsSortDescending24Icon",w`
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
    `),k1=new v("Bucket24Icon",w`
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
    `),y1=new v("BuildingStore24Icon",w`
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
    `),x1=new v("CalendarEvent24Icon",w`
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
    `),C1=new v("Cash24Icon",w`
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
    `),M1=new v("Chain24Icon",w`
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
    `),Wa=new v("CheckMark24Icon",w`
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
    `),Ua=new v("ChevronDown24Icon",w`
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
    `),S1=new v("ChevronUp24Icon",w`
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
    `),A1=new v("Circle24Icon",w`
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
    `),tt=new v("CircleDot24Icon",w`
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
    `),I1=new v("CirclePlusFill24Icon",w`
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
    `),E1=new v("CirclePlusOutline24Icon",w`
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
    `),T1=new v("CircleWavyCheck24Icon",w`
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
    `),B1=new v("Clock24Icon",w`
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
    `),P1=new v("Code24Icon",w`
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
    `),Ga=new v("Copy24Icon",w`
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
    `),L1=new v("DotsVertical24Icon",w`
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
    `),_1=new v("Download24Icon",w`
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
    `),R1=new v("Edit24Icon",w`
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
    `),Ya=new v("ExternalLink24Icon",w`
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
    `),N1=new v("Filter24Icon",w`
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
    `),j1=new v("Geometry24Icon",w`
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
    `),Z1=new v("GridDots24Icon",w`
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
    `),O1=new v("HeartFill24Icon",w`
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
    `),D1=new v("HeartOutline24Icon",w`
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
    `),z1=new v("Icp24Icon",w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${Oa}"
        >
            ${Da}
        </svg>
        </svg>
    `),H1=new v("Infinity24Icon",w`
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
    `),V1=new v("LayersLinked24Icon",w`
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
    `),F1=new v("LayoutGrid24Icon",w`
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
    `),q1=new v("Lifebuoy24Icon",w`
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
    `),W1=new v("List24Icon",w`
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
    `),U1=new v("ListDetails24Icon",w`
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
    `),G1=new v("Loader24Icon",w`
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
    `),Y1=new v("LoaderAnimated24Icon",w`
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
    `),X1=new v("Lock24Icon",w`
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
    `),J1=new v("LockOpen24Icon",w`
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
    `),K1=new v("Menu24Icon",w`
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
    `),Q1=new v("Paper24Icon",w`
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
    `),e2=new v("Photo24Icon",w`
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
    `),An=new v("Rocket24Icon",w`
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
    `),Xa=new v("Search24Icon",w`
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
    `),t2=new v("Send24Icon",w`
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
    `),r2=new v("ShoppingCart24Icon",w`
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
    `),n2=new v("Social24Icon",w`
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
    `),o2=new v("Square24Icon",w`
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
    `),s2=new v("SquareCheck24Icon",w`
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
    `),gr=new v("Trash24Icon",w`
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
    `),a2=new v("Upload24Icon",w`
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
    `),i2=new v("User24Icon",w`
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
    `),l2=new v("Users24Icon",w`
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
    `),c2=new v("Wallet24Icon",w`
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
    `),d2=new v("WorldUpload24Icon",w`
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
    `),u2=new v("X24Icon",w`
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
    `),Ja=new v("Kyc32Icon",w`
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
    `),Ka=new v("FolderOff48Icon",w`
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
    `),Qa=new v("Api64Icon",w`
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
    `),h2=new v("CircleDashes64Icon",w`
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
    `),p2=new v("Rocket64Icon",w`
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
    `),f2=new v("EntrepotLogo144Icon",w`
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
    `),g2=new v("BrandDiscord24Icon",w`
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
    `),m2=new v("BrandIcScan24Icon",w`
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
    `),v2=new v("BrandInstagram24Icon",w`
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
    `),w2=new v("BrandInstagramFlat24Icon",w`
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
    `),b2=new v("BrandTelegram24Icon",w`
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
    `),$2=new v("BrandTiktok24Icon",w`
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
    `),k2=new v("BrandTiktokFlat24Icon",w`
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
    `),y2=new v("BrandTwitch24Icon",w`
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
    `),x2=new v("BrandTwitter24Icon",w`
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
    `),C2={"core-16":[a1,i1,c1,kt],"core-24":[d1,u1,za,h1,Ha,Va,Sn,b1,$1,k1,y1,x1,C1,M1,Wa,Ua,S1,A1,tt,I1,E1,T1,B1,P1,Ga,L1,_1,R1,Ya,N1,j1,Z1,O1,D1,z1,H1,V1,F1,q1,W1,U1,G1,Y1,X1,J1,K1,Q1,e2,An,Xa,t2,r2,n2,o2,s2,gr,a2,i2,l2,c2,d2,u2],"core-32":[Ja],"core-48":[Ka],"core-64":[Qa,h2,p2],logos:[f2],"third-party-brands":[g2,m2,v2,w2,b2,$2,k2,y2,x2]},ms="toniq-",{defineElement:ge,defineElementNoInputs:Bd}=Vs({assertInputs:e=>{if(!e.tagName.startsWith(ms))throw new Error(`Tag name should start with '${ms}' but got '${e.tagName}'`)}}),k=ge()({tagName:"toniq-icon",styles:f`
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
            ${e.icon?Xi(e.icon.svgString):""}
        `}),In=f`8px`,D=ge()({tagName:"toniq-button",hostClasses:{secondary:!1,outline:!1,disabled:!1},styles:({hostClassSelectors:e,hostClassNames:t})=>f`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${qe};
        }

        :host(:hover) button {
            ${j(x.accentPrimaryHover)};
        }

        :host(:active) button {
            ${j(x.accentPrimaryActive)};
        }

        button {
            ${je};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${In};
            ${j(x.accentPrimary)};
            padding: 10px;
            transition: color ${G.interaction},
                background-color ${G.interaction},
                border-color ${G.interaction};
        }

        ${Ne({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e.secondary} button {
            ${j(x.accentSecondary)};
        }

        ${e.outline} button {
            ${j(x.pagePrimary)};
            border-color: ${x.accentPrimary.backgroundColor};
        }

        ${e.disabled} {
            ${f1};
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
                  <${k}
                      class="icon-template"
                      ${g(k,{icon:e.icon})}
                  ></${k}>
              `:"",r=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button>
                <slot>${t} ${r}</slot>
            </button>
        `}}),ei=ee({title:"Toniq Button",parent:fe});function er(e){return[{title:"Text",render(){return h`
                    <${D}
                        class=${e}
                        ${g(D,{text:"Button"})}
                    ></${D}>
                `}},{title:"Icon",render(){return h`
                    <${D}
                        class=${e}
                        ${g(D,{icon:gr})}
                    ></${D}>
                `}},{title:"Text + Icon",render(){return h`
                    <${D}
                        class=${e}
                        ${g(D,{text:"Button",icon:gr})}
                    ></${D}>
                `}},{title:"HTML child",render(){return h`
                    <${D} class=${e} ${g(D,{})}>
                        <span>HTML Child</span>
                    </${D}>
                `}},{title:"Sizable",render(){return h`
                    <${D}
                        class=${e}
                        style="height: 100px; width: 200px;"
                        ${g(D,{text:"bigger"})}
                    ></${D}>
                `}}]}const M2=Ce({[D.tagName]:er(""),[D.hostClasses.secondary]:er(D.hostClasses.secondary),[D.hostClasses.outline]:er(D.hostClasses.outline),[D.hostClasses.disabled]:er(D.hostClasses.disabled)},(e,t)=>te({title:e,examples:t,parent:ei})),S2=[ei,...Object.values(M2)],P=ge()({tagName:"toniq-checkbox",events:{checkedChange:Te()},hostClasses:{},cssVars:{uncheckedCheckboxColor:String(ae("accentSecondary","backgroundColor")),uncheckedLabelColor:String(ae("pagePrimary","foregroundColor")),checkedCheckboxColor:String(ae("accentPrimary","backgroundColor")),checkedCheckColor:String(ae("accentPrimary","foregroundColor")),checkedLabelColor:String(ae("pageInteraction","foregroundColor"))},styles:({cssVarValues:e,cssVarNames:t})=>f`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition: color ${G.interaction},
                background-color ${G.interaction},
                opacity ${G.interaction};
            border-radius: 8px;
        }

        button {
            ${je};
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
            ${qe};
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

        ${Ne({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
                <${k}
                    class="check-mark ${Ae({hidden:!e.checked})}"
                    ${g(k,{icon:Wa})}
                ></${k}>
            </span>
        `,o=h`
            <slot
                class=${Ae({label:!0,checked:e.checked})}
            >
                <span
                    class=${Ae({label:!0,checked:e.checked})}
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
        `}}),ti=ee({title:"Toniq Checkbox",parent:fe}),A2=te({title:P.tagName,parent:ti,examples:[{title:"Unchecked",stateInit:{checked:!1},render({state:e,updateState:t}){return h`
                    <${P}
                        ${g(P,{checked:e.checked,text:"My Checkbox"})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${P}>
                `}},{title:"Checked",stateInit:{checked:!0},render({state:e,updateState:t}){return h`
                    <${P}
                        ${g(P,{checked:e.checked,text:"My Checkbox"})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${P}>
                `}},{title:"HTML Child",stateInit:{checked:!1},render({state:e,updateState:t}){return h`
                    <${P}
                        ${g(P,{checked:e.checked})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    >
                        With HTML Child
                    </${P}>
                `}},{title:"Custom CSS Vars",stateInit:{checked:!1},styles:f`
                :host {
                    ${P.cssVarNames.uncheckedCheckboxColor}: red;
                    ${P.cssVarNames.uncheckedLabelColor}: orange;
                    ${P.cssVarNames.checkedCheckboxColor}: green;
                    ${P.cssVarNames.checkedCheckColor}: blue;
                    ${P.cssVarNames.checkedLabelColor}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${P}
                        ${g(P,{checked:e.checked,text:"wild colors"})}
                        ${C(P.events.checkedChange,r=>{t({checked:r.detail})})}
                    ></${P}>
                    <${P}
                        ${g(P,{checked:!e.checked,text:`wild colors (${e.checked?"unchecked":"checked"})`})}
                        ${C(P.events.checkedChange,r=>{t({checked:!r.detail})})}
                    ></${P}>
                `}},{title:"Multiple",stateInit:{checkedShort:!1,checkedLong:!1},styles:f`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${P}
                        ${g(P,{checked:e.checkedShort,text:"Short"})}
                        ${C(P.events.checkedChange,r=>{t({checkedShort:r.detail})})}
                    ></${P}>
                    <${P}
                        ${g(P,{checked:e.checkedLong,text:"With much longer checkbox label string"})}
                        ${C(P.events.checkedChange,r=>{t({checkedLong:r.detail})})}
                    ></${P}>
                `}}]}),I2=[ti,A2],q=ge()({tagName:"toniq-chip",hostClasses:{secondary:!1},styles:({hostClassSelectors:e})=>f`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${W.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${j(x.accentPrimary)};
        }

        ${e.secondary} {
            ${j(x.accentSecondary)};
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${k}
                      ${g(k,{icon:e.icon})}
                  ></${k}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}}),ri=ee({title:"Toniq Chip",parent:fe});function vs(e){return[{title:"Text",render(){return h`
                    <${q}
                        class=${e}
                        ${g(q,{text:"Toniq Chip Text"})}
                    ></${q}>
                `}},{title:"Text + Icon",render(){return h`
                    <${q}
                        class=${e}
                        ${g(q,{text:"Toniq Chip Text",icon:kt})}
                    ></${q}>
                `}},{title:"HTML Child",render(){return h`
                    <${q} class=${e} ${g(q,{})}>
                        Slot in Use
                    </${q}>
                `}},{title:"HTML + Icon",render(){return h`
                    <${q}
                        class=${e}
                        ${g(q,{icon:kt})}
                    >
                        Slot in Use
                    </${q}>
                `}},{title:"custom size",styles:f`
                ${q} {
                    width: 150px;
                    height: 24px;
                }
            `,render(){return h`
                    <${q}
                        class=${e}
                        ${g(q,{icon:kt})}
                    >
                        Slot in Use
                    </${q}>
                `}}]}const E2=Ce({[q.tagName]:vs(""),[q.hostClasses.secondary]:vs(q.hostClasses.secondary)},(e,t)=>te({title:e,examples:t,parent:ri})),T2=[ri,...Object.values(E2)],B2="data-test-id",rt=Re(class extends We{constructor(e){super(e),this.element=P2(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(B2,e),ue}});function P2(e,t,r){L2(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function L2(e,t){if(e.type!==_t.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}const _=ge()({tagName:"toniq-dropdown",stateInit:{dropdownOpen:!1},events:{selectChange:Te()},styles:f`
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
            ${je}
            border-radius: 8px;
            outline: none;
        }

        ${Ne({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${G.interaction} linear transform;
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
            ${qe};
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
            ${w1.popupShadow};
        }

        .selected-label-prefix {
            ${W.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${qe};
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
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var i;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("button.dropdown");!o.composedPath().includes(s)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback:({dispatch:e,events:t,state:r,inputs:n,updateState:o})=>{const s=n.selected?n.selected:n.options[0];function a(){o({dropdownOpen:!r.dropdownOpen})}function i(u){o({dropdownOpen:!1}),e(new t.selectChange(u))}const l=n.icon?h`
                  <${k}
                      ${rt("rendered-input-icon")}
                      ${g(k,{icon:n.icon})}
                  ></${k}>
              `:"",c=n.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                class="dropdown ${r.dropdownOpen?"open":""}"
                @click=${()=>a()}
                role="listbox"
                aria-expanded=${r.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${l}
                    <span class="select-selected">${c} ${s==null?void 0:s.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${k}
                            class="trigger-icon"
                            ${g(k,{icon:Ua})}
                        ></${k}>
                    </span>
                </div>
                <div class="select-options">
                    ${n.options.map(u=>h`
                                <span
                                    class="option ${u.value===(s==null?void 0:s.value)?"selected":""}"
                                    @click=${d=>{d.preventDefault(),d.stopPropagation(),i(u)}}
                                    role="option"
                                >
                                    ${u.label}
                                </span>
                            `)}
                </div>
            </button>
        `}}),ni=ee({title:"Toniq Dropdown",parent:fe}),Se=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],_2=te({title:_.tagName,parent:ni,examples:[{title:"Default",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}},{title:"With Icon",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected,icon:Sn})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}},{title:"With Icon + Prefix",stateInit:{selected:void 0},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected,icon:Sn,selectedLabelPrefix:"Sort By:"})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}},{title:"Defaulted to an option",stateInit:{selected:Se[3]},render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}},{title:"Custom size",stateInit:{selected:void 0},styles:f`
                ${_} {
                    width: 500px;
                    height: 100px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}},{title:"Squished",stateInit:{selected:void 0},styles:f`
                ${_} {
                    max-height: 20px;
                    min-height: 20px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}},{title:"No background",stateInit:{selected:void 0},styles:f`
                ${_} {
                    ${qn.accentSecondary.backgroundColor}: transparent;
                }
            `,render({state:e,updateState:t}){return h`
                    <${_}
                        ${g(_,{options:Se,selected:e.selected})}
                        ${C(_.events.selectChange,r=>{t({selected:r.detail})})}
                    ></${_}>
                `}}]}),R2=[ni,_2],oi=ee({title:"Toniq Icon",parent:fe}),N2=Ce({[k.tagName]:[{title:"With Icon",render(){return h`
                        <${k}
                            ${g(k,{icon:gr})}
                        ></${k}>
                    `}},{title:"Without Icon",render(){return h`
                        <${k}
                            ${g(k,{icon:void 0})}
                        ></${k}>
                    `}},{title:"64px icon",render(){return h`
                        <${k}
                            ${g(k,{icon:Qa})}
                        ></${k}>
                    `}},{title:"48px icon",render(){return h`
                        <${k}
                            ${g(k,{icon:Ka})}
                        ></${k}>
                    `}},{title:"32px icon",render(){return h`
                        <${k}
                            ${g(k,{icon:Ja})}
                        ></${k}>
                    `}},{title:"24px icon",render(){return h`
                        <${k}
                            ${g(k,{icon:Ha})}
                        ></${k}>
                    `}},{title:"16px icon",render(){return h`
                        <${k}
                            ${g(k,{icon:kt})}
                        ></${k}>
                    `}}],[`${k.tagName} colors`]:[{title:"Inherited",render(){return h`
                        <${k}
                            ${g(k,{icon:tt})}
                        ></${k}>
                    `}},{title:'Using "color"',styles:f`
                    :host {
                        color: red;
                    }
                `,render(){return h`
                        <${k}
                            ${g(k,{icon:tt})}
                        ></${k}>
                    `}},{title:ke.color,styles:f`
                    :host {
                        ${R(ke.color)}: red;
                    }
                `,render(){return h`
                        <${k}
                            ${g(k,{icon:tt})}
                        ></${k}>
                    `}},{title:ke.strokeColor,styles:f`
                    :host {
                        ${R(ke.strokeColor)}: red;
                    }
                `,render(){return h`
                        <${k}
                            ${g(k,{icon:tt})}
                        ></${k}>
                    `}},{title:ke.fillColor,styles:f`
                    :host {
                        ${R(ke.fillColor)}: red;
                    }
                `,render(){return h`
                        <${k}
                            ${g(k,{icon:tt})}
                        ></${k}>
                    `}}]},(e,t)=>te({title:e,examples:t,parent:oi})),j2=[oi,...Object.values(N2)];function En({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>En({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function si({value:e,allowed:t,blocked:r}){const n=t?En({input:e,matcher:t}):!0,o=r?En({input:e,matcher:r}):!1;return n&&!o}function ws(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(si({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const A=ge()({tagName:"toniq-input",hostClasses:{outline:!1,hasAValue:({inputs:e})=>!!e.value},events:{valueChange:Te(),inputBlocked:Te()},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
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
                border-radius: ${In};
                z-index: 0;
                pointer-events: none;
            }

            ${t.outline} label {
                background-color: ${x.pagePrimary.backgroundColor};
                border: 1px solid ${x.pageTertiary.foregroundColor};
            }

            ${t.outline} ${k} {
                color: ${x.pageSecondary.foregroundColor};
            }

            :host(.${e.hasAValue}.${e.outline}) ${k} {
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
                border-radius: ${In};
                background-color: ${x.accentTertiary.backgroundColor};
                font: ${W.paragraphFont};
            }

            ${Ne({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${k} {
                margin-right: 10px;
            }

            input {
                ${je};
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
        `,renderCallback:({inputs:e,dispatch:t,events:r})=>{const{filtered:n}=ws({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?h`
                  <${k} ${g(k,{icon:e.icon})}></${k}>
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
                    ${C("input",s=>{if(!(s instanceof InputEvent))throw new Error(`Input event type mismatch: "${s.constructor.name}"`);const a=s.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const i=s.data,l=n;let c=a.value??"";if(i)if(i.length===1)si({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(i)));else{const{filtered:u,blocked:d}=ws({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs});c=u,t(new r.inputBlocked(d))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                <div class="focus-border"></div>
            </label>
        `}});A.hostClasses.outline;const ai=ee({title:"Toniq Input",parent:fe}),Z2=te({title:A.tagName,parent:ai,examples:[{title:"Assigned value",stateInit:{value:"init value"},render({state:e,updateState:t}){return h`
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
                        ${g(A,{value:e.value,placeholder:"with icon",icon:Xa})}
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
                `}}]}),O2=[ai,Z2];async function D2(e){return navigator.clipboard.writeText(e)}const z2="…";function H2(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${z2}${n}`}function V2(e){return!(e%1)}function F2(e){return e.letterCount==null?4:V2(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const z=ge()({tagName:"toniq-middle-ellipsis",events:{copied:Te()},cssVars:{textColor:x.pagePrimary.foregroundColor,iconColor:x.pagePrimary.foregroundColor,textHoverColor:x.pageInteraction.foregroundColor,iconHoverColor:x.pageInteraction.foregroundColor},styles:({hostClassNames:e,cssVarValues:t})=>f`
        :host {
            /* 5 frames at 60 fps */
            transition: ${G.interaction};
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

        :host(.${e.clickable}:hover) ${k} {
            color: ${t.iconHoverColor};
        }

        ${k} {
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
            ${je};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Ne({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            transition: opacity ${G.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{clickable:({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInit:{showCopiedTextTimeoutId:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{if(!e.text)return h``;const s=e.text,a=F2(e),i=!!e.externalLink,l=!!e.copyOnClick,c=s.length>a*2+2,u=c?H2(s,a):s,d=c?s:"",p=i?Ya:l?Ga:void 0,b=p?h`
                  <${k} ${g(k,{icon:p})}></${k}>
              `:"",m=h`
            <span title=${d} class="text-content">
                ${br(!!e.copyOnClick,h`
                        <span
                            class=${Ae({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${u}
            </span>
        `;return u?i?h`
                    <button
                        tabindex="0"
                        role="link"
                        ${C("click",y=>{var I,E;const M=(E=(I=y.currentTarget)==null?void 0:I.querySelector)==null?void 0:E.call(I,"a");if(!M)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");M.click()})}
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
                            ${m} ${b}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${C("click",async()=>{await D2(s),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${m} ${b}
                    </button>
                `:h`
                    ${m}
                `:h``}}),ii=ee({title:"Toniq Middle Ellipsis",parent:fe}),q2=te({title:z.tagName,parent:ii,examples:[{title:"Long text",render(){return h`
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
                `}}]}),W2=[ii,q2],U2=["january","february","march","april","may","june","july","august","september","october","november","december"];U2.map(e=>e.slice(0,3));const G2=globalThis.crypto;function Y2(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return G2.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const L=ge()({tagName:"toniq-radio-group",stateInit:{randomGroupName:""},events:{valueChange:Te()},cssVars:{uncheckedRadioColor:String(ae("pagePrimary","foregroundColor")),uncheckedLabelColor:String(ae("pagePrimary","foregroundColor")),checkedRadioColor:String(ae("accentPrimary","backgroundColor")),checkedLabelColor:String(ae("pageInteraction","foregroundColor")),disabledColor:String(ae("pageSecondary","foregroundColor"))},styles:({cssVarValues:e})=>f`
        :host {
            ${W.boldParagraphFont};
            display: inline-flex;
            transition: color ${G.interaction},
                background-color ${G.interaction},
                opacity ${G.interaction};
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
            ${je}
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
            transition: ${G.interaction};
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

        ${Ne({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,initCallback:({updateState:e})=>{e({randomGroupName:Y2()})},renderCallback:({inputs:e,dispatch:t,events:r,state:n})=>X2(e.entries).map(s=>J2(e.groupName||n.randomGroupName,e.value,s,()=>{t(new r.valueChange(s.value))}))});function X2(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${L.tagName} was given duplicate entry values.`),Object.values(t)}function J2(e,t,r,n){const o=t===r.value,s=h`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${Ae({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}const li=ee({title:"Toniq Radio Group",parent:fe}),ft=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],oe={basic:ft,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...ft.slice(1)],disabled:[{...ft[0],disabled:!0},...ft.slice(1)],noLabels:Uc(ft,e=>({...e,label:void 0}))},K2=te({title:L.tagName,parent:li,examples:[{title:"Default",stateInit:{selectedValue:oe.basic[0].value},render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{entries:oe.basic,value:e.selectedValue})}
                        ${C(L.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${L}>
                `}},{title:"Inline",stateInit:{selectedValue:oe.basic[0].value},styles:f`
                ${L} {
                    flex-direction: row;
                }
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{entries:oe.basic,value:e.selectedValue})}
                        ${C(L.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${L}>
                `}},{title:"Restricted width",stateInit:{selectedValue:oe.longText[0].value},styles:f`
                ${L} {
                    max-width: 200px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{entries:oe.longText,value:e.selectedValue})}
                        ${C(L.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${L}>
                `}},{title:"No labels",stateInit:{selectedValue:oe.noLabels[0].value},render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{entries:oe.noLabels,value:e.selectedValue})}
                        ${C(L.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${L}>
                `}},{title:"Entry 1 disabled",stateInit:{selectedValue:oe.disabled[1].value},render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{entries:oe.disabled,value:e.selectedValue})}
                        ${C(L.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${L}>
                `}},{title:"Custom CSS vars",stateInit:{selectedValue:oe.basic[0].value},styles:f`
                ${L} {
                    ${L.cssVarNames.checkedLabelColor}: red;
                    ${L.cssVarNames.checkedRadioColor}: blue;
                    ${L.cssVarNames.uncheckedLabelColor}: green;
                    ${L.cssVarNames.uncheckedRadioColor}: pink;
                }
            `,render({state:e,updateState:t}){return h`
                    <${L}
                        ${g(L,{entries:oe.basic,value:e.selectedValue})}
                        ${C(L.events.valueChange,r=>{t({selectedValue:r.detail})})}
                    ></${L}>
                `}}]}),Q2=[li,K2],B={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},gt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function ed(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${B.lowerLabelWrapper} .${B.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${B.upperLabelWrapper} .${B.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:s,upper:a}}else return}function td(e,t=8){const r=ed(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function en({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function Bt(e){return e1(e)&&e.min!==void 0&&e.max!==void 0}function Tn(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${B.range}`);return(t==null?void 0:t.clientWidth)??0}function tn(e,t,r){return`${r?s1(e):e} ${t}`}function rd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function nd({value:e,double:t,min:r,max:n}){return t?Bt(e)?{min:yt(e.min,r,Math.min(e.max,n)),max:yt(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:Bt(e)?r:yt(e,r,n)}function od({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:Bt(e)?{min:Qr(n,e.min),max:Qr(n,e.max)}:Qr(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function rn(e,t,r){return r?t[e]||0:e}function sd(e){return{actualLimits:rd(e),actualValue:nd(e)}}function ad(e,t){var n,o,s;let r=!1;if(Bt(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${B.lowerSlider}`),i=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${B.upperSlider}`);a instanceof HTMLInputElement&&i instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(i.value)!==e.max&&(i.value=String(e.max),r=!0))}else{const a=(s=t.shadowRoot)==null?void 0:s.querySelector(`.${B.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function ci(e,t){const{actualValue:r,actualLimits:n}=sd({...e}),o=g1(n.min,n.max),s=e.logScale??!1,a=e.suffix??"",{elementValue:i,elementLimits:l}=od({actualValue:r,actualLimits:n,logScale:s,logRange:o}),c=Tn(t);return{actualValue:r,elementLimits:l,elementValue:i,isLogScale:s,logRange:o,rangeWidth:c,suffix:a}}const ze=16,bs=f`
    ${ze}px
`,$s=f`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${bs};
    width: ${bs};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${G.interaction};
    ${j(x.accentPrimary)};
`,ks=f`
    transform: scale(1.2);
`;function vt(e){requestAnimationFrame(()=>{const t=ci(e.instanceInputs,e).elementValue;ad(t,e)&&(e.setAttribute("disabled","true"),vt(e))})}const T=ge()({tagName:"toniq-slider",stateInit:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:Te()},styles:f`
        :host {
            display: block;
        }

        .${R(B.range)} {
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

        .${R(B.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${W.boldParagraphFont};
            ${qe};
        }

        .${R(B.labelPixelMarginWrapper)},
            .${R(B.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${R(B.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${R(B.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Ne({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${R(B.lowerSlider)},
        .${R(B.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${R(B.slider)}::-moz-range-thumb {
            ${$s}
        }

        /* these selectors fail if combined with a comma */
        .${R(B.slider)}::-webkit-slider-thumb {
            ${$s}
        }

        /* these selectors fail if combined with a comma */
        .${R(B.slider)}::-webkit-slider-thumb:hover {
            ${ks}
        }

        /* these selectors fail if combined with a comma */
        .${R(B.slider)}::-moz-range-thumb:hover {
            ${ks}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{vt(e)}),e.addEventListener("keydown",()=>{vt(e)}),e.addEventListener("keyup",()=>{vt(e)})},renderCallback:({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:s})=>{const{actualValue:a,logRange:i,isLogScale:l,suffix:c,elementValue:u,elementLimits:d,rangeWidth:p}=ci({...e},t);if(vt(t),Bt(u))return b(a,u,d);return y(a,u,d);function b(M,I,E){const F={left:et((p-ze)*(I.min-E.min)/(E.max-E.min)+ze/2),right:et((p-ze)*(E.max-I.max)/(E.max-E.min)+ze/2)},U=tn(M.min,c,l),re=tn(M.max,c,l);requestAnimationFrame(()=>{const ne=td(t);ne!==o.labelOverlap&&s({labelOverlap:ne})});const we=(E.max-I.max)/(E.max-E.min)>.5,Me=en({value:I.min,limits:{min:E.min,max:I.max},flip:!0}),J=en({value:I.max,limits:{min:I.min,max:E.max},flip:!1}),Ze=o.labelOverlap&&we?o.labelOverlap:0,Dt=o.labelOverlap&&!we?o.labelOverlap:0;return h`
                <div
                    class="range"
                    ${ko(()=>{s({rangeWidth:Tn(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${F.left}; right:${F.right}"
                    ></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.lowerLabelWrapper}"
                        style="left: ${F.left}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-left: ${Kr(Me)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-right: ${et(Dt)}"
                                ${rt(gt.lowerLabel)}
                            >
                                ${U}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${B.labelOuterWrapper} ${B.upperLabelWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${F.right}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${Kr(J)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-left: ${et(Ze)}"
                                ${rt(gt.upperLabel)}
                            >
                                ${re}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${B.lowerSlider} ${B.slider}"
                            .min=${E.min}
                            .max=${E.max}
                            .value=${I.min}
                            ${C("input",ne=>{const Ge=ne.target,ct={...M,min:rn(Number(Ge.value),i,l)};m(ct)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${B.upperSlider} ${B.slider}"
                            step=${e.step}
                            .min=${E.min}
                            .max=${E.max}
                            .value=${I.max}
                            ${rt(gt.slider)}
                            ${C("input",ne=>{const Ge=ne.target,ct={...M,max:rn(Number(Ge.value),i,l)};m(ct)})}
                        />
                    </div>
                </div>
            `}function m(M){s({internalValue:M}),e.disabled||n(new r.valueChange(M))}function y(M,I,E){const F=et((p-ze)*(E.max-I)/(E.max-E.min)+ze/2),U=tn(M,c,l),re=en({value:I,limits:E,flip:!1});return h`
                <div
                    class="range"
                    ${ko(()=>{s({rangeWidth:Tn(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${F}"></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${F}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${Kr(re)}"
                            ${rt(gt.label)}
                        >
                            ${U}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${B.slider}"
                        step=${e.step}
                        .min=${E.min}
                        .max=${E.max}
                        .value=${I}
                        ${rt(gt.slider)}
                        ${C("input",we=>{const Me=we.target,J=rn(Number(Me.value),i,l);m(J)})}
                    />
                </div>
            `}}}),di=ee({title:"Toniq Slider",parent:fe}),$e=f`
    ${T} {
        width: 300px;
    }
`,nn={min:10,max:50},id=te({title:T.tagName,parent:di,examples:[{title:"Default",stateInit:{value:20},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,...nn})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Double range",stateInit:{value:{min:10,max:72}},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{double:!0,value:e.value,min:0,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Suffix",stateInit:{value:20},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,...nn,suffix:"ICP"})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Log Scale",stateInit:{value:20},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Log Scale Double",stateInit:{value:{min:10,max:1e3}},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Decimals",stateInit:{value:{min:1.95,max:50}},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Negative min",stateInit:{value:20},styles:f`
                ${$e}
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,min:-100,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Padding",stateInit:{value:20},styles:f`
                ${$e}

                ${T} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{value:e.value,...nn})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail!="number")throw new Error("was expecting a single numeric slider value");t({value:r.detail})})}
                    ></${T}>
                `}},{title:"Padding Double",stateInit:{value:{min:10,max:72}},styles:f`
                ${$e}

                ${T} {
                    padding: 32px;
                }
            `,render({state:e,updateState:t}){return h`
                    <${T}
                        ${g(T,{double:!0,value:e.value,min:0,max:100})}
                        ${C(T.events.valueChange,r=>{if(typeof r.detail=="number")throw new Error("was expecting a double slider value");t({value:r.detail})})}
                    ></${T}>
                `}}]}),ld=[di,id],se=ge()({tagName:"toniq-toggle-button",hostClasses:{textOnly:!1},styles:({hostClassNames:e,hostClassSelectors:t})=>f`
        :host {
            ${W.boldParagraphFont};
            ${qe};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${je};
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
            transition: color ${G.interaction},
                background-color ${G.interaction};
        }

        ${Ne({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
                  <${k}
                      class="icon-template"
                      ${g(k,{icon:e.icon})}
                  ></${k}>
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
        `}}),ui=ee({title:"Toniq Toggle Button",parent:fe});function ys(e){return[{title:"Default",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${se}
                        class=${e}
                        ${g(se,{toggled:t.toggled,text:"Toggle Button"})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${se}>
                `}},{title:"Icon + text",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${se}
                        class=${e}
                        ${g(se,{toggled:t.toggled,icon:An,text:"Toggle Button"})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${se}>
                `}},{title:"Icon only",stateInit:{toggled:!1},render({state:t,updateState:r}){return h`
                    <${se}
                        class=${e}
                        ${g(se,{toggled:t.toggled,icon:An})}
                        ${C("click",()=>{r({toggled:!t.toggled})})}
                    ></${se}>
                `}}]}const cd=Ce({[se.tagName]:ys(""),[se.hostClasses.textOnly]:ys(se.hostClasses.textOnly)},(e,t)=>te({title:e,examples:t,parent:ui})),dd=[ui,...Object.values(cd)],hi=ee({title:"Icons",parent:void 0}),xs="...";function ud(e,t,r=7,n=5){let o;e=yt(e,1,t),r=yt(r,n,t);const s=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:s;const i={start:Math.round(e-o/2),end:Math.round(e+o/2)};(i.start-1===1||i.end+1===t)&&(i.start+=1,i.end+=1);const l=e>t-a&&t>r?on(t-o,t):e>o?on(Math.min(i.start,t-o),Math.min(i.end,t)):on(1,Math.min(t,o+1));function c(d,p){return l.length+1!==t?p:[d]}const u=l[l.length-1];if(u&&u<t){const d=c(t,[xs,t]);return[...l,...d]}else return l[0]!==1?c(1,[1,xs]).concat(l):l}function on(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}ge()({tagName:"toniq-pagination",styles:f`
        :host {
            display: flex;
        }

        button {
            ${je}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${qe};
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
            ${W.labelFont}
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
    `,events:{pageChange:Te()},renderCallback:({inputs:e,events:t,dispatch:r})=>e.pageCount<=1?h``:h`
                <button
                    ${C("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${k} ${g(k,{icon:za})}></${k}>
                </button>
                ${ud(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?h`
                                <div class="page" disabled>${n}</div>
                            `:h`
                                <button
                                    class=${Ae({page:!0,selected:e.currentPage===n})}
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
                    <${k} ${g(k,{icon:Va})}></${k}>
                </button>
            `});const hd=Object.entries(C2).map(([e,t])=>te({title:e,parent:hi,examples:t.map(r=>({title:r.iconName,render(){return h`
                            <${k} ${g(k,{icon:r})}></${k}>
                        `}}))})),Wn=ee({title:"Styles",parent:void 0});function pi(e){const t=pd(e),r=Ce(t,(o,s)=>String(s).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Fe(r).reduce((o,s)=>{const a=r[s];return a&&a[1]&&a[2]&&(o[s]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function pd(e){typeof e!="string"&&(e=String(e));const n=`{"${Yc(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,i)=>(a[i]=o[i],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const fd=f`
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
        ${W.h2Font};
    }
`;function gd(e,t){const r=pi(j(t));return{title:e,styles:fd,render(){return h`
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
            `}}}const md=Fe(x).map(e=>gd(e,x[e])),vd=te({title:"Toniq Colors",parent:Wn,examples:md,descriptionParagraphs:['Accessed via the "toniqColors" export.']}),wd=f`
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
`;function bd(e,t){const r=pi(t);return{title:e,styles:wd,render(){return h`
                <div class="font-example" style=${t}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Fe(r).map(n=>{const o=r[n];return h`
                            <div class="font-style-group">
                                <span>${n}: ${o.defaultValue}</span>
                                <span class="css-var-name">${o.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}}}const $d=Fe(W).map(e=>{const t=W[e];return bd(e,t)}),kd=te({title:"Toniq Fonts",parent:Wn,examples:$d,descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),yd=[fe,hi,Wn,...S2,...I2,...T2,...R2,...j2,...hd,...O2,...W2,...Q2,...ld,...dd,vd,kd];wr({tagName:"toniq-design-system-app",styles:f`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Qt} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return h`
            <${Qt}
                ${g(Qt,{baseUrl:"toniq-labs-design-system",entries:yd,themeColor:"#00D093",everythingTitle:"Design System"})}
            ></${Qt}>
        `}});
