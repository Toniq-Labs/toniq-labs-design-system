var wa=Object.freeze,ba=Object.defineProperty;var xu=(e,t,r)=>t in e?ba(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Hn=(e,t,r)=>(xu(e,typeof t!="symbol"?t+"":t,r),r);var Vn=(e,t)=>wa(ba(e,"raw",{value:wa(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Si(e){return!!e}function ku(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var $a;(function(e){e.Upper="upper",e.Lower="lower"})($a||($a={}));function Il(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>In(r).trim()).join(`
`))}function In(e){return e?e instanceof Error?e.message:En(e,"message")?String(e.message):String(e):""}function Su(e){return e instanceof Error?e:new Error(In(e))}function ya(e){return!!e&&typeof e=="object"}const Cu=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function En(e,t){return e?Cu.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function El(e,t){return e&&t.every(r=>En(e,r))}function Qr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Tu(e){return Array.isArray(e)?"array":typeof e}function An(e,t){return Tu(e)===t}function xa({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const ka="Failed to compare objects using JSON.stringify";function Sa(e,t,r){return xa({source:e,errorHandler(n){if(r)return"";throw n}})===xa({source:t,errorHandler(n){if(r)return"";throw n}})}function We(e,t,r={}){try{return e===t?!0:ya(e)&&ya(t)?Sa(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>We(e[o],t[o])):!1:Sa(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Su(n);throw o.message.startsWith(ka)||(o.message=`${ka}: ${o.message}`),o}}function Iu(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Eu(e){return Qr(e).filter(t=>isNaN(Number(t)))}function Au(e){return Eu(e).map(r=>e[r])}function Mu(e,t){return Au(t).includes(e)}function Pu(e,t){return Qr(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Bu(e,t){return Pu(e,r=>!t.includes(r))}function en(e,t){let r=!1;const n=Qr(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Qr(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function _u(e){const t=Ci();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Ci(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ci.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ca(e,t){try{return Al(e,t),!0}catch{return!1}}function Al(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Lu(e,t){return En(e,"entryType")&&e.entryType===t}var ie;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ie||(ie={}));function bt(e,t){return e.controlType===t}var L;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(L||(L={}));const Ml=Symbol("any-type"),qu={[L.Checkbox]:!1,[L.Color]:"",[L.Dropdown]:"",[L.Hidden]:Ml,[L.Number]:0,[L.Text]:""};function Ru(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=qu[o.controlType];i!==Ml&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ti(e,t){const r=tn(e.title);return e.parent?[...Ti(e.parent,!1),tn(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function tn(e){return ku(e).toLowerCase().replaceAll(/\s/g,"-")}function Nu({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function U(e){const t={...e,entryType:ie.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:ie.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Si)};r.add(n.title),t.elementExamples[tn(o.title)]=o}}),t}var _e;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(_e||(_e={}));async function _o(e=1){const t=Ci();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Du=globalThis.crypto;function zu(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Du.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Ou(e){return ju(e,1)}async function ju(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Al(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Cr(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rt=e=>(...t)=>({_$litDirective$:e,values:t});let je=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Un;const rn=window,Pt=rn.trustedTypes,Ta=Pt?Pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,nn="$lit$",Oe=`lit$${(Math.random()+"").slice(9)}$`,Ii="?"+Oe,Fu=`<${Ii}>`,ft=document,tr=()=>ft.createComment(""),rr=e=>e===null||typeof e!="object"&&typeof e!="function",Pl=Array.isArray,Bl=e=>Pl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Zn=`[ 	
\f\r]`,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ia=/-->/g,Ea=/>/g,it=RegExp(`>|${Zn}(?:([^\\s"'>=/]+)(${Zn}*=${Zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Aa=/'/g,Ma=/"/g,_l=/^(?:script|style|textarea|title)$/i,Ll=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Hu=Ll(1),Vu=Ll(2),ve=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Pa=new WeakMap,ct=ft.createTreeWalker(ft,129,null,!1);function ql(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ta!==void 0?Ta.createHTML(t):t}const Rl=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=jt;for(let s=0;s<r;s++){const l=e[s];let c,d,h=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===jt?d[1]==="!--"?a=Ia:d[1]!==void 0?a=Ea:d[2]!==void 0?(_l.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=it):d[3]!==void 0&&(a=it):a===it?d[0]===">"?(a=o??jt,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?it:d[3]==='"'?Ma:Aa):a===Ma||a===Aa?a=it:a===Ia||a===Ea?a=jt:(a=it,o=void 0);const v=a===it&&e[s+1].startsWith("/>")?" ":"";i+=a===jt?l+Fu:h>=0?(n.push(c),l.slice(0,h)+nn+l.slice(h)+Oe+v):l+Oe+(h===-2?(n.push(void 0),s):v)}return[ql(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class nr{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=Rl(t,r);if(this.el=nr.createElement(c,n),ct.currentNode=this.el.content,r===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=ct.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const p of o.getAttributeNames())if(p.endsWith(nn)||p.startsWith(Oe)){const v=d[a++];if(h.push(p),v!==void 0){const g=o.getAttribute(v.toLowerCase()+nn).split(Oe),w=/([.?@])?(.*)/.exec(v);l.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?Dl:w[1]==="?"?zl:w[1]==="@"?Ol:mr})}else l.push({type:6,index:i})}for(const p of h)o.removeAttribute(p)}if(_l.test(o.tagName)){const h=o.textContent.split(Oe),p=h.length-1;if(p>0){o.textContent=Pt?Pt.emptyScript:"";for(let v=0;v<p;v++)o.append(h[v],tr()),ct.nextNode(),l.push({type:2,index:++i});o.append(h[p],tr())}}}else if(o.nodeType===8)if(o.data===Ii)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(Oe,h+1))!==-1;)l.push({type:7,index:i}),h+=Oe.length-1}i++}}static createElement(t,r){const n=ft.createElement("template");return n.innerHTML=t,n}}function pt(e,t,r=e,n){var o,i,a,s;if(t===ve)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=rr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=pt(e,l._$AS(e,t.values),l,n)),t}class Nl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ft).importNode(n,!0);ct.currentNode=i;let a=ct.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new Nt(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new jl(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=ct.nextNode(),s++)}return ct.currentNode=ft,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Nt{constructor(t,r,n,o){var i;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=pt(this,t,r),rr(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==ve&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Bl(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&rr(this._$AH)?this._$AA.nextSibling.data=t:this.$(ft.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=nr.createElement(ql(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new Nl(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=Pa.get(t.strings);return r===void 0&&Pa.set(t.strings,r=new nr(t)),r}T(t){Pl(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Nt(this.k(tr()),this.k(tr()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class mr{constructor(t,r,n,o,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=pt(this,t,r,0),a=!rr(t)||t!==this._$AH&&t!==ve,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=pt(this,s[n+l],r,l),c===ve&&(c=this._$AH[l]),a||(a=!rr(c)||c!==this._$AH[l]),c===Y?t=Y:t!==Y&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Dl extends mr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}const Uu=Pt?Pt.emptyScript:"";class zl extends mr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,Uu):this.element.removeAttribute(this.name)}}class Ol extends mr{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=pt(this,t,r,0))!==null&&n!==void 0?n:Y)===ve)return;const o=this._$AH,i=t===Y&&o!==Y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==Y&&(o===Y||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class jl{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pt(this,t)}}const Zu={O:nn,P:Oe,A:Ii,C:1,M:Rl,L:Nl,R:Bl,D:pt,I:Nt,V:mr,H:zl,N:Ol,U:Dl,F:jl},Ba=rn.litHtmlPolyfillSupport;Ba==null||Ba(nr,Nt),((Un=rn.litHtmlVersions)!==null&&Un!==void 0?Un:rn.litHtmlVersions=[]).push("2.8.0");const Wu=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new Nt(t.insertBefore(tr(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Gu}=Zu,_a=()=>document.createComment(""),Ft=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(_a(),i),s=o.insertBefore(_a(),i);r=new Gu(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},at=(e,t,r=e)=>(e._$AI(t,r),e),Yu={},Ju=(e,t=Yu)=>e._$AH=t,Xu=e=>e._$AH,Wn=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=rt(class extends je{constructor(e){var t;if(super(e),e.type!==gr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return ve}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Ku=rt(class extends je{constructor(e){if(super(e),e.type!==gr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const i=Xu(e),{values:a,keys:s}=this.ct(t,r,n);if(!Array.isArray(i))return this.ut=s,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let d,h,p=0,v=i.length-1,g=0,w=a.length-1;for(;p<=v&&g<=w;)if(i[p]===null)p++;else if(i[v]===null)v--;else if(l[p]===s[g])c[g]=at(i[p],a[g]),p++,g++;else if(l[v]===s[w])c[w]=at(i[v],a[w]),v--,w--;else if(l[p]===s[w])c[w]=at(i[p],a[w]),Ft(e,c[w+1],i[p]),p++,w--;else if(l[v]===s[g])c[g]=at(i[v],a[g]),Ft(e,i[p],i[v]),v--,g++;else if(d===void 0&&(d=La(s,g,w),h=La(l,p,v)),d.has(l[p]))if(d.has(l[v])){const $=h.get(s[g]),y=$!==void 0?i[$]:null;if(y===null){const k=Ft(e,i[p]);at(k,a[g]),c[g]=k}else c[g]=at(y,a[g]),Ft(e,i[p],y),i[$]=null;g++}else Wn(i[v]),v--;else Wn(i[p]),p++;for(;g<=w;){const $=Ft(e,c[w+1]);at($,a[g]),c[g++]=$}for(;p<=v;){const $=i[p++];$!==null&&Wn($)}return this.ut=s,Ju(e,c),ve}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lo=class extends je{constructor(t){if(super(t),this.et=Y,t.type!==gr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Y||t==null)return this.ft=void 0,this.et=t;if(t===ve)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Lo.directiveName="unsafeHTML",Lo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qa=class extends Lo{};qa.directiveName="unsafeSVG",qa.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qu(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=window,Ei=Hr.ShadowRoot&&(Hr.ShadyCSS===void 0||Hr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ai=Symbol(),Ra=new WeakMap;let Fl=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ei&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ra.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ra.set(r,t))}return t}toString(){return this.cssText}};const B=e=>new Fl(typeof e=="string"?e:e+"",void 0,Ai),Yt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Fl(r,e,Ai)},e0=(e,t)=>{Ei?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Hr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Na=Ei?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return B(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gn;const on=window,Da=on.trustedTypes,t0=Da?Da.emptyScript:"",za=on.reactiveElementPolyfillSupport,qo={toAttribute(e,t){switch(t){case Boolean:e=e?t0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Hl=(e,t)=>t!==e&&(t==t||e==e),Yn={attribute:!0,type:String,converter:qo,reflect:!1,hasChanged:Hl},Ro="finalized";class kt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Yn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Yn}static finalize(){if(this.hasOwnProperty(Ro))return!1;this[Ro]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Na(o))}else t!==void 0&&r.push(Na(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return e0(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Yn){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:qo).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:qo;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Hl)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}kt[Ro]=!0,kt.elementProperties=new Map,kt.elementStyles=[],kt.shadowRootOptions={mode:"open"},za==null||za({ReactiveElement:kt}),((Gn=on.reactiveElementVersions)!==null&&Gn!==void 0?Gn:on.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jn,Xn;class Jt extends kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wu(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ve}}Jt.finalized=!0,Jt._$litElement$=!0,(Jn=globalThis.litElementHydrateSupport)===null||Jn===void 0||Jn.call(globalThis,{LitElement:Jt});const Oa=globalThis.litElementPolyfillSupport;Oa==null||Oa({LitElement:Jt});((Xn=globalThis.litElementVersions)!==null&&Xn!==void 0?Xn:globalThis.litElementVersions=[]).push("3.3.3");var r0=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(y){if(y!==void 0&&typeof y!="function")throw new TypeError("Function expected");return y}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),h,p=!1,v=r.length-1;v>=0;v--){var g={};for(var w in n)g[w]=w==="access"?{}:n[w];for(var w in n.access)g.access[w]=n.access[w];g.addInitializer=function(y){if(p)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(y||null))};var $=(0,r[v])(s==="accessor"?{get:d.get,set:d.set}:d[l],g);if(s==="accessor"){if($===void 0)continue;if($===null||typeof $!="object")throw new TypeError("Object expected");(h=a($.get))&&(d.get=h),(h=a($.set))&&(d.set=h),(h=a($.init))&&o.unshift(h)}else(h=a($))&&(s==="field"?o.unshift(h):d[l]=h)}c&&Object.defineProperty(c,n.name,d),p=!0},n0=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},o0=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function i0(){function e(t,r){return t}return e}let Vl=(()=>{let e=[i0()],t,r=[],n,o=Jt;return n=class extends o{},o0(n,"DeclarativeElement"),(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;r0(null,t={value:n},e,{kind:"class",name:n.name,metadata:i},null,r),n=t.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),n0(n,r)})(),n})();function a0(e){return!!e}function s0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const l0={capitalizeFirstLetter:!1};function c0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function d0(e,t){return t.capitalizeFirstLetter?c0(e):e}function u0(e,t=l0){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return d0(n,t)}var ja;(function(e){e.Upper="upper",e.Lower="lower"})(ja||(ja={}));function Ul(e){return e?e instanceof Error?e.message:Mn(e,"message")?String(e.message):String(e):""}function Mi(e){return e instanceof Error?e:new Error(Ul(e))}function No(e){return!!e&&typeof e=="object"}const h0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Mn(e,t){return e?h0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function gt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Fa({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Ha="Failed to compare objects using JSON.stringify";function Va(e,t,r){return Fa({source:e,errorHandler(n){if(r)return"";throw n}})===Fa({source:t,errorHandler(n){if(r)return"";throw n}})}function Zl(e,t,r={}){try{return e===t?!0:No(e)&&No(t)?Va(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Zl(e[o],t[o])):!1:Va(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Mi(n);throw o.message.startsWith(Ha)||(o.message=`${Ha}: ${o.message}`),o}}function Wl(e,t){let r=!1;const n=gt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(gt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function f0(e){return!!(Mn(e,"then")&&typeof e.then=="function")}function Do(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Do.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}var Bt;(function(e){e.Upper="upper",e.Lower="lower"})(Bt||(Bt={}));function p0(e){return e.toLowerCase()!==e.toUpperCase()}function Ua(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!p0(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Bt.Upper&&o!==o.toUpperCase())return!1;if(t===Bt.Lower&&o!==o.toLowerCase())return!1}return!0}function g0(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Ua(a,Bt.Lower,{blockNoCaseCharacters:!0})||Ua(s,Bt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function m0(e){return!!e&&typeof e=="object"}function Za(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function v0(e){return Array.isArray(e)?"array":typeof e}function w0(e,t){return v0(e)===t}function b0(e,t){let r=!1;const n=Za(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Za(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Fe(e){if(m0(e))return b0(e,(r,n)=>{if(!w0(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(g0(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?B(r):r.startsWith("-")?Yt`-${B(r)}`:Yt`--${B(r)}`;return{name:a,value:Yt`var(${a}, ${B(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Fe.name}' function.`)}function zo({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $0=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},y0=(e,t,r)=>{t.constructor.createProperty(r,e)};function Gl(e){return(t,r)=>r!==void 0?y0(e,t,r):$0(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn;((Kn=window.HTMLSlotElement)===null||Kn===void 0?void 0:Kn.prototype.assignedElements)!=null;const Pi=Symbol("key for ignoring inputs not having been set yet"),x0={[Pi]:!0,allowPolymorphicState:!1};function Yl(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Vl?!0:Yl(r)}function Jl(e,t){const r=e.instanceState;gt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&gt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),k0(e)}function k0(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Wa(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class S0 extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Bi(){return e=>{var t;return t=class extends S0{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Z(){return Bi()}function C0(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Bi()(r);return t[r]=n,t},{}):{}}const T0="_elementVirStateSetup";function I0(e){return No(e)?T0 in e:!1}function E0(e,t){return e.includes(t)}var Ga;(function(e){e.Upper="upper",e.Lower="lower"})(Ga||(Ga={}));function vr(e){return!!e&&typeof e=="object"}const A0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Vr(e,t){return e?A0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function an(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Oo(e){return Array.isArray(e)?"array":typeof e}function It(e,t){return Oo(e)===t}function M0(e,t){let r=!1;const n=an(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(an(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function P0(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Oo(e)===Oo(t)&&r}const Xl=Symbol("and"),Kl=Symbol("or"),Ql=Symbol("exact"),ec=Symbol("enum"),_i=Symbol("unknown"),tc="__vir__shape__definition__key__do__not__use__in__actual__objects";function rc(e){return Vr(e,tc)}const nc="__vir__shape__specifier__key__do__not__use__in__actual__objects",B0=[Xl,Kl,Ql,ec,_i];function _0(){return L0([],_i)}function Pn(e){return wr(e,Kl)}function Li(e){return wr(e,Xl)}function qi(e){return wr(e,Ql)}function Ri(e){return wr(e,ec)}function Ni(e){return wr(e,_i)}function wr(e,t){const r=Bn(e);return!!r&&r.specifierType===t}function L0(e,t){return{[nc]:!0,specifierType:t,parts:e}}function Ur(e,t){const r=Bn(t);if(r){if(Li(r))return r.parts.every(n=>Ur(e,n));if(Pn(r))return r.parts.some(n=>Ur(e,n));if(qi(r))return vr(e)?Ur(e,r.parts[0]):e===r.parts[0];if(Ri(r))return Object.values(r.parts[0]).some(n=>n===e);if(Ni(r))return!0}return P0(e,t)}function Bn(e){if(vr(e)&&Vr(e,nc)){if(!Vr(e,"parts")||!It(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Vr(e,"specifierType")||!E0(B0,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function jo(e){return Fo(e)}function Fo(e){const t=Bn(e);if(t){if(Pn(t)||qi(t))return Fo(t.parts[0]);if(Li(t))return t.parts.reduce((r,n)=>Object.assign(r,Fo(n)),{});if(Ri(t))return Object.values(t.parts[0])[0];if(Ni(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return rc(e)?jo(e.shape):e instanceof RegExp||It(e,"array")?e:vr(e)?M0(e,(r,n)=>jo(n)):e}function oc(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:jo(e),[tc]:!0}}class Ie extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function q0(e,t,r={}){try{return R0(e,t,r),!0}catch{return!1}}function R0(e,t,r={}){lt(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function ic(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function lt(e,t,r,n){if(Ni(t))return!0;if(rc(t))return lt(e,t.shape,r,n);const o=ic(r);if(Bn(e))throw new Ie(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ur(e,t))throw new Ie(`Subject does not match shape definition at key ${o}`);if(It(t,"function"))return It(e,"function");if(vr(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Pn(t))l=t.parts.some(c=>{try{const d=lt(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof Ie)return!1;throw d}});else if(Li(t))l=t.parts.every(c=>{try{const d=lt(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof Ie)return!1;throw d}});else if(qi(t)){const c=lt(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(Ri(t))throw new Ie(`Cannot compare an enum specifier to an object at ${o}`);if(It(t,"array")&&It(a,"array"))l=a.every((c,d)=>{const h=t.some(p=>{try{return lt(c,p,[...r,d],n),!0}catch(v){if(v instanceof Ie)return!1;throw v}});return s[d]=h,h});else{const c=N0({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(h=>!s[h]).join(",")}`;throw new Ie(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new Ie(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function N0({keys:e,options:t,shape:r,subject:n}){const o=ic(e),i={};if(vr(r)){const a=new Set(an(n)),s=new Set(an(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new Ie(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var p;const c=r[l],d=Pn(c)?c.parts.includes(void 0):!1,h=((p=c==null?void 0:c.includes)==null?void 0:p.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!h)throw new Ie(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];lt(c,d,[...e,l],t),i[l]=!0})}else throw new Ie(`shape definition at ${o} was not an object.`);return i}const D0=oc({addListener(){return!1},removeListener(){return!1},value:_0()});function Qn(e){return q0(e,D0,{allowExtraKeys:!0})}function z0(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ya(e,t){const r=e;function n(a){t?z0(a,e,e.tagName):Gl()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{const c=I0(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function h(g){a[s]=g,r[s]=g}const p=e.observablePropertyListenerMap[s];if(d!==c&&Qn(d)&&(p!=null&&p.length)&&d.removeListener(p),Qn(c))if(p)c.addListener(p);else{let g=function(){e.requestUpdate()};var v=g;e.observablePropertyListenerMap[s]=g,c.addListener(g)}else Qn(d)&&(e.observablePropertyListenerMap[s]=void 0);return h(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function O0(e){return e?Wl(e,t=>t):{}}function j0({hostClassNames:e,cssVars:t}){return{hostClasses:Wl(e,(r,n)=>({name:B(n),selector:B(`:host(.${n})`)})),cssVars:t}}function F0({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&gt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function H0(e,t){function r(o){gt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var V0=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function _n(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...x0,...e.options},n=C0(e.events),o=O0(e.hostClasses);e.hostClasses&&Wa(e.tagName,e.hostClasses),e.cssVars&&Wa(e.tagName,e.cssVars);const i=e.cssVars?Fe(e.cssVars):{},a=typeof e.styles=="function"?e.styles(j0({hostClassNames:o,cssVars:i})):e.styles||Yt``,s=e.renderCallback;function l(...[d]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:d}}const c=(t=class extends Vl{createRenderParams(){return H0(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{Yl(this)&&!this.haveInputsBeenSet&&!r[Pi]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${_n.name}' to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=s(d);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return F0({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},h}catch(d){const h=Mi(d);throw h.message=`Failed to render '${e.tagName}': ${h.message}`,this.lastRenderError=h,h}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();if(e.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();if(e.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(d){Jl(this,d)}constructor(){var h;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Ya(this,!1),this.instanceState=Ya(this,!((h=e.options)!=null&&h.allowPolymorphicState));const d=e.stateInitStatic||{};gt(d).forEach(p=>{Gl()(this,p),this.instanceState[p]=d[p]}),this.definition=c}},V0(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:u0(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Di(){return e=>_n({...e,options:{[Pi]:!1,...e.options}})}function zi(e,t){return or(e,t),e.element}function U0(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function or(e,t){const r=U0(e),n=r?`: in ${r}`:"";if(e.type!==gr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Z0(e,t){return t?Ja(e,t):Ja(void 0,e)}const Ja=rt(class extends je{constructor(e){super(e),this.element=zi(e,"assign")}render(e,t){return Jl(this.element,t),ve}});function W0(e,t){return e===t}function G0(e,t=W0){const r=new Set;function n(){r.forEach(i=>i(o.value))}const o={value:e,setValue(i){t(o.value,i)||(o.value=i,n())},addListener(i){const a=!r.has(i);return a&&r.add(i),a},removeListener(i){return r.delete(i)}};return o}const eo=Symbol("not set");function Y0(e){let t=eo,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let o=Do();const i=G0(o.promise);function a(){o=Do(),i.setValue(o.promise)}function s(g){o.resolve(g),i.setValue(g)}function l(g){o.reject(g),i.setValue(g)}function c(g){g!==r&&(r=g,o.isSettled()&&a(),g.then(w=>{r===g&&s(w)}).catch(w=>{r===g&&(o.promise.catch(()=>{}),l(Mi(w)))}))}function d(g,w){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const $={...g},y={...w};if(t===eo||!Zl($,t,{ignoreNonSerializableProperties:!0})){t=$;const k=n(t,y);c(k)}}function h(g,w){t=eo,d(g,w)}const p=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return p instanceof Promise?c(p):s(p),Object.assign(i,{setNewPromise(g){c(g)},setResolvedValue(g){g!==i.value&&(o.isSettled()&&a(),o.resolve(g),s(g))},updateTrigger:n?d:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?h:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function J0(...e){return{_elementVirStateSetup(){return Y0(...e)}}}function X0(e){const t=rt(class extends je{constructor(r){super(r),this.element=zi(r,"testId")}render(r){return this.element.setAttribute(e,r),ve}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function S(e,t){return K0(e,t)}const K0=rt(class extends je{constructor(e){super(e),this.element=zi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ve}}),Xa="onDomCreated",sn=rt(class extends je{constructor(e){super(e),or(e,Xa)}update(e,[t]){or(e,Xa);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),to="onResize",ir=rt(class extends je{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),or(e,to)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${to} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){or(e,to),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Ka(e,t,r,n){const o=e.value;return o instanceof Error?n?n(o):Ul(o):f0(o)?t:r?r(o):o}function de(e,t,r){return Qu(e,()=>t,()=>r)}const{attributeDirective:Q0,attributeSelector:Hv,attributeName:Vv}=X0("data-test-id");function Oi(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Di()(r(n))),defineElementNoInputs:n=>(t(n),_n(r(n)))}}function eh(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Ho(e){return Mn(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function ji(e){return Mn(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ac(e){return e.map(t=>Ho(t)?t.definition:t).filter(t=>ji(t))}const sc=new WeakMap;function th(e,t){var o;const r=ac(t);return(o=lc(sc,[e,...r]).value)==null?void 0:o.template}function rh(e,t,r){const n=ac(t);return dc(sc,[e,...n],r)}function lc(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=cc(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?lc(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function cc(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function dc(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=cc(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),dc(l,t,r,n+1)}const nh=new WeakMap;function uc(e,t,r){const n=th(e,t),o=n??r();if(!n){const s=rh(e,t,o);if(s.result)nh.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=eh(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function hc(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const h=o.length-1,p=o[h],v=d-1,g=t[v];n&&n(c);let w,$=[];if(typeof p=="string"&&(w=r(p,c,g),w)){o[h]=p+w.replacement,a.push(v);const k=w.getExtraValues;$=k?k(g):[],$.length&&k?(o[h]+=" ",$.forEach((M,q)=>{q&&o.push(" ")}),s.push(M=>{const q=M[v],ee=k(q);return{index:v,values:ee}}),o.push(c)):o[h]+=c}w||o.push(c);const y=e.raw[d];w?(i[h]=i[h]+w.replacement+y,$.length&&$.forEach(()=>{i.push("")})):i.push(y)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(h=>h(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function oh(...[e,t,r]){if(ji(r))return{replacement:r.tagName,getExtraValues:void 0}}function ih(e,t){return hc(e,t,oh)}function m(e,...t){const r=uc(e,t,()=>ih(e,t));return Yt(r.strings,...r.values)}function ah(...[e,t,r]){const n=Ho(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ji(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const d=Ho(c)?c.inputs:void 0;return[o&&d?Z0(d):void 0].filter(a0)}}}function sh(e){}function lh(e){return hc(e.strings,e.values,ah,sh)}function u(e,...t){const r=Hu(e,...t),n=uc(e,t,()=>lh(r));return{...r,strings:n.strings,values:n.values}}function dt(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=ch(a,n[s]);return`${a}${l}`});return s0(i.join(""))}function ch(e,t){return t._$litType$!=null||t._$litDirective$!=null?dt(t):Array.isArray(t)?t.map(n=>dt(n)).join(""):e.endsWith("=")?`"${t}"`:t}const dh={[ie.ElementExample]:()=>[],[ie.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ru(e.controls,e.title)].filter(Si),[ie.Root]:()=>[]},ln="_isBookTreeNode",fc=new Map;function uh(e){return fc.get(e)}function hh(e,t){Iu(fc,e,()=>t)}function At(e,t){return!!(pc(e)&&e.entry.entryType===t)}function pc(e){return!!(El(e,[ln,"entry"])&&e[ln])}function fh(){return{[ln]:!0,entry:{entryType:ie.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function ph({entries:e,debug:t}){const r=uh(e);if(r)return r;const n=fh();e.forEach(a=>Fi({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=gc(n),i={tree:n,flattenedNodes:o};return hh(e,i),t&&console.info("element-book tree:",n),i}function gh(e,t,r){if(!t.parent)return e;const n=Vo(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Fi({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Vo(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ti(t,!1)}`);return o}function Fi({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=dh[t.entryType](t);t.errors.push(...o);const i=gh(e,t,r),a=tn(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[ln]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,Lu(t,ie.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Fi({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Vo(e,t){const r=pc(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ti(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function gc(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>gc(o));return[e,...r].flat()}function Hi(e,t){return Vi(e,["",...t],void 0)}function Vi(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&Vi(i,n,r);return{...e.controls,...a}}function mh(e,t,r){const n={...e};return Vi(n,["",...t],r),n}function mc(e,t){const r=(t==null?void 0:t.controls)||(At(e,ie.Page)?en(e.entry.controls,(o,i)=>i.initValue):{});return{children:en(e.children,(o,i)=>{var a;return mc(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function vh({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const wh=zu(32);function Zr(e){return e.join(wh)}function vc(e){if(!e.length)return[];const t=Zr(e),r=vc(e.slice(0,-1));return[t,...r]}const bh=["error","errors"];function $h(e){return bh.includes(e)}function yh({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Zr(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&$h(t),a=Zr(o.fullUrlBreadcrumbs);if(vh({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=vc(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Zr(o.fullUrlBreadcrumbs),a=r[i];if(!An(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var ce;(function(e){e.Search="search",e.Book="book"})(ce||(ce={}));function Uo(e){return e[0]===ce.Book?"":e[1]?decodeURIComponent(e[1]):""}const _t={hash:void 0,paths:[ce.Book],search:void 0},xh=0;function Ui(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==xh)}class Ln extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Qa extends Ln{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ar="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const kh=globalThis.history.pushState;function es(...e){const t=kh.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ar)),t}const Sh=globalThis.history.replaceState;function ts(...e){const t=Sh.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ar)),t}function Ch(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===es)throw new Qa("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ts)throw new Qa("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=es,globalThis.history.replaceState=ts,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ar))})}}function qn(e){return!!e}var rs;(function(e){e.Upper="upper",e.Lower="lower"})(rs||(rs={}));function Th(e,t){return e.split(t)}function Ih(e){return e?e instanceof Error?e.message:cn(e,"message")?String(e.message):String(e):""}function Eh(e){return!!e&&typeof e=="object"}const Ah=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function cn(e,t){return e?Ah.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ns(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function wc(e,t,r=!1,n={}){const o=ns(e),i=new Set(ns(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!cn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||bc(l,c,s,r,n[a]??{})})}function bc(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{cn(t,"constructor")&&(!cn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(h=>{try{bc(l,h,r,n,o);return}catch(p){return new Error(`entry at index "${c}" did not match expected shape: ${Ih(p)}`)}}).filter(qn).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Eh(t)&&wc(e,t,n,o)}function Mh(e){return Array.isArray(e)?"array":typeof e}function Ph(e,t){return Mh(e)===t}function Bh({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function _h(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(qn);return t.length?`?${t.join("&")}`:""}function Lh(e){return Bh({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=Th(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(qn)}function qh(e,t){const r=Ph(e,"string")?new URL(e):e,n=Lh(r.search),o=Object.fromEntries(n);return t&&wc(o,t),o}function Rh(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?qh(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function $c(e){return e.replace(/(?:^\/|\/+$)/g,"")}function yc({routeBase:e,windowPath:t}){if(!e)return"";const r=$c(e);if(xc({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?yc({routeBase:n,windowPath:t}):""}function xc({routeBase:e,windowPath:t}){const r=$c(e);return r?t.startsWith(`/${r}`):!1}class Nh extends Ln{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function kc(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const os=6;function is(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>os)throw new Nh(`Route sanitization depth has exceed the max of ${os} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(kc(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ro extends Ln{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Dh(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ro(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ro(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ro(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function zh(e,t,r=!1){const n=Sc(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Sc(e,t){var s;const r=xc({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?_h(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(qn).join("/")}${n}${i}`}function Oh(e={}){Dh(e),Ch();const t=e.routeBase?yc({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>is(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&kc(l,d)))return zh(d,t,a)},createRoutesUrl(i){return Sc(i,t)},getCurrentRawRoutes(){return Rh(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Ln(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(ar,n),r=!0),i&&is(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(ar,n),r=!1),a},sanitizationDepth:0};return o}function jh(e){return Oh({routeBase:e,routeSanitizer(t){return{paths:Fh(t.paths),hash:void 0,search:void 0}}})}function Fh(e){const t=e[0];if(Mu(t,ce)){if(t===ce.Book)return[ce.Book,...e.slice(1)];if(t===ce.Search)return e[1]?[t,e[1]]:[ce.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return _t.paths}const N=Fe({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Hh={nav:{hover:{background:N["element-book-nav-hover-background-color"],foreground:N["element-book-nav-hover-foreground-color"]},active:{background:N["element-book-nav-active-background-color"],foreground:N["element-book-nav-active-foreground-color"]},selected:{background:N["element-book-nav-selected-background-color"],foreground:N["element-book-nav-selected-foreground-color"]}},accent:{icon:N["element-book-accent-icon-color"]},page:{background:N["element-book-page-background-color"],backgroundFaint1:N["element-book-page-background-faint-level-1-color"],backgroundFaint2:N["element-book-page-background-faint-level-2-color"],foreground:N["element-book-page-foreground-color"],foregroundFaint1:N["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:N["element-book-page-foreground-faint-level-2-color"]}};function Vh(e,t){Cc(e,t,Hh)}function Zo(e){return En(e,"_$cssResult$")}function as(e){return El(e,["name","value","default"])&&An(e.default,"string")&&Zo(e.name)&&Zo(e.value)}function Cc(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Zo(o)){if(!as(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);zo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(as(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Cc(e,o,i)}})}function J(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function br(e){return Ye(e)==="string"}function Ye(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function dn(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Tc(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ic(e){return e[e.length-1]}function un(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ec(e,t,r){return(r-e)/(t-e)}function Zi(e,t,r){return un(t[0],t[1],Ec(e[0],e[1],r))}function Ac(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Uh=Object.freeze({__proto__:null,interpolate:un,interpolateInv:Ec,isString:br,last:Ic,mapRange:Zi,multiplyMatrices:J,parseCoordGrammar:Ac,parseFunction:Tc,toPrecision:dn,type:Ye});class Zh{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Xe=new Zh;var Le={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Me={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Wo(e){return Array.isArray(e)?e:Me[e]}function hn(e,t,r,n={}){if(e=Wo(e),t=Wo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(Xe.run("chromatic-adaptation-start",o),o.M||(o.W1===Me.D65&&o.W2===Me.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Me.D50&&o.W2===Me.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Xe.run("chromatic-adaptation-end",o),o.M)return J(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Wh=75e-6,fe=class fe{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?fe.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Wo(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Gh(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Xe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Wh}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ss(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=ss(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=fe.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=fe.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(fe.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof fe)return t;if(Ye(t)==="string"){let o=fe.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return fe.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Ye(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=fe.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ye(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=fe.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Hn(fe,"registry",{}),Hn(fe,"DEFAULT_FORMAT",{type:"functions",name:"color"});let E=fe;function Gh(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function ss(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ac(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Zi(s,l,i)),i=dn(i,o),c&&(i+=c),i})}return e}var xe=new E({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ue extends E{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=xe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=J(t.toXYZ_M,r);return this.white!==this.base.white&&(n=hn(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=hn(this.base.white,this.white,r),J(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Mc(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(Xe.run("parse-start",r),r.color)return r.color;if(r.parsed=Tc(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let p of E.all){let v=p.getFormat("color");if(v&&(c===v.id||(o=v.ids)!=null&&o.includes(c))){const g=Object.keys(p.coords).map((w,$)=>r.parsed.args[$]||0);return t&&(t.formatId="color"),{spaceId:p.id,coords:g,alpha:d}}}let h="";if(c in E.registry){let p=(s=(a=(i=E.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;p&&(h=`Did you mean color(${p})?`)}throw new TypeError(`Cannot parse color(${c}). `+(h||"Missing a plugin?"))}else for(let c of E.all){let d=c.getFormat(l);if(d&&d.type==="function"){let h=1;(d.lastAlpha||Ic(r.parsed.args).alpha)&&(h=r.parsed.args.pop());let p=r.parsed.args,v;return d.coordGrammar&&(v=Object.entries(c.coords).map(([g,w],$)=>{var le;let y=d.coordGrammar[$],k=(le=p[$])==null?void 0:le.type,M=y.find(te=>te==k);if(!M){let te=w.name||g;throw new TypeError(`${k} not allowed for ${te} in ${l}()`)}let q=M.range;k==="<percentage>"&&(q||(q=[0,1]));let ee=w.range||w.refRange;return q&&ee&&(p[$]=Zi(q,ee,p[$])),M})),t&&Object.assign(t,{formatId:d.name,types:v}),{spaceId:c.id,coords:p,alpha:h}}}}else for(let l of E.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let h=d.parse(r.str);if(h)return h.alpha??(h.alpha=1),t&&(t.formatId=c),h}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function z(e){if(!e)throw new TypeError("Empty color reference");br(e)&&(e=Mc(e));let t=e.space||e.spaceId;return t instanceof E||(e.space=E.get(t)),e.alpha===void 0&&(e.alpha=1),e}function $r(e,t){return t=E.get(t),t.from(e)}function ke(e,t){let{space:r,index:n}=E.resolveCoord(t,e.space);return $r(e,r)[n]}function Pc(e,t,r){return t=E.get(t),e.coords=t.to(e.space,r),e}function Ke(e,t,r){if(e=z(e),arguments.length===2&&Ye(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ke(e,o,n[o])}else{typeof r=="function"&&(r=r(ke(e,t)));let{space:n,index:o}=E.resolveCoord(t,e.space),i=$r(e,n);i[o]=r,Pc(e,n,i)}return e}var Wi=new E({id:"xyz-d50",name:"XYZ D50",white:"D50",base:xe,fromBase:e=>hn(xe.white,"D50",e),toBase:e=>hn("D50",xe.white,e),formats:{color:{}}});const Yh=216/24389,ls=24/116,Tr=24389/27;let no=Me.D50;var ge=new E({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:no,base:Wi,fromBase(e){let r=e.map((n,o)=>n/no[o]).map(n=>n>Yh?Math.cbrt(n):(Tr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ls?Math.pow(t[0],3):(116*t[0]-16)/Tr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Tr,t[2]>ls?Math.pow(t[2],3):(116*t[2]-16)/Tr].map((n,o)=>n*no[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Rn(e){return(e%360+360)%360}function Jh(e,t){if(e==="raw")return t;let[r,n]=t.map(Rn),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var sr=new E({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ge,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Rn(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const cs=25**7,fn=Math.PI,ds=180/fn,$t=fn/180;function Go(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=ge.from(e),l=sr.from(ge,[i,a,s])[1],[c,d,h]=ge.from(t),p=sr.from(ge,[c,d,h])[1];l<0&&(l=0),p<0&&(p=0);let g=((l+p)/2)**7,w=.5*(1-Math.sqrt(g/(g+cs))),$=(1+w)*a,y=(1+w)*d,k=Math.sqrt($**2+s**2),M=Math.sqrt(y**2+h**2),q=$===0&&s===0?0:Math.atan2(s,$),ee=y===0&&h===0?0:Math.atan2(h,y);q<0&&(q+=2*fn),ee<0&&(ee+=2*fn),q*=ds,ee*=ds;let le=c-i,te=M-k,j=ee-q,re=q+ee,Dt=Math.abs(j),we;k*M===0?we=0:Dt<=180?we=j:j>180?we=j-360:j<-180?we=j+360:console.log("the unthinkable has happened");let wt=2*Math.sqrt(M*k)*Math.sin(we*$t/2),zt=(i+c)/2,Fn=(k+M)/2,pa=Math.pow(Fn,7),Re;k*M===0?Re=re:Dt<=180?Re=re/2:re<360?Re=(re+360)/2:Re=(re-360)/2;let ga=(zt-50)**2,wu=1+.015*ga/Math.sqrt(20+ga),ma=1+.045*Fn,Ot=1;Ot-=.17*Math.cos((Re-30)*$t),Ot+=.24*Math.cos(2*Re*$t),Ot+=.32*Math.cos((3*Re+6)*$t),Ot-=.2*Math.cos((4*Re-63)*$t);let va=1+.015*Fn*Ot,bu=30*Math.exp(-1*((Re-275)/25)**2),$u=2*Math.sqrt(pa/(pa+cs)),yu=-1*Math.sin(2*bu*$t)*$u,Sr=(le/(r*wu))**2;return Sr+=(te/(n*ma))**2,Sr+=(wt/(o*va))**2,Sr+=yu*(te/(n*ma))*(wt/(o*va)),Math.sqrt(Sr)}const Xh=75e-6;function Xt(e,t=e.space,{epsilon:r=Xh}={}){e=z(e),t=E.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function lr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Qe(e,{method:t=Le.gamut_mapping,space:r=e.space}={}){if(br(arguments[1])&&(r=arguments[1]),r=E.get(r),Xt(e,r,{epsilon:0}))return z(e);let n=ye(e,r);if(t!=="clip"&&!Xt(e,r)){let o=Qe(lr(n),{method:"clip",space:r});if(Go(e,o)>2){let i=E.resolveCoord(t),a=i.space,s=i.id,l=ye(n,a),d=(i.range||i.refRange)[0],h=.01,p=d,v=ke(l,s);for(;v-p>h;){let g=lr(l);g=Qe(g,{space:r,method:"clip"}),Go(l,g)-2<h?p=ke(l,s):v=ke(l,s),Ke(l,s,(p+v)/2)}n=ye(l,r)}else n=o}if(t==="clip"||!Xt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=ye(n,e.space)),e.coords=n.coords,e}Qe.returns="color";function ye(e,t,{inGamut:r}={}){e=z(e),t=E.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=Qe(o)),o}ye.returns="color";function pn(e,{precision:t=Le.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=z(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??E.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Xt(e)&&(s=Qe(lr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(v=>dn(v,t)));let d=[...s];if(c==="color"){let v=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(v)}let h=e.alpha;t!==null&&(h=dn(h,t));let p=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${h}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${p})`}return i}const Kh=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Qh=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Nn=new ue({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Kh,fromXYZ_M:Qh,formats:{color:{}}});const Ir=1.09929682680944,us=.018053968510807;var Bc=new ue({id:"rec2020",name:"REC.2020",base:Nn,toBase(e){return e.map(function(t){return t<us*4.5?t/4.5:Math.pow((t+Ir-1)/Ir,1/.45)})},fromBase(e){return e.map(function(t){return t>=us?Ir*Math.pow(t,.45)-(Ir-1):4.5*t})},formats:{color:{}}});const ef=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],tf=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var _c=new ue({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:ef,fromXYZ_M:tf});const rf=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],nf=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Lc=new ue({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:rf,fromXYZ_M:nf,formats:{color:{}}}),hs={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let fs=Array(3).fill("<percentage> | <number>[0, 255]"),ps=Array(3).fill("<number>[0, 255]");var cr=new ue({id:"srgb",name:"sRGB",base:Lc,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:fs},rgb_number:{name:"rgb",commas:!0,coords:ps,noAlpha:!0},color:{},rgba:{coords:fs,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:ps},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=hs.black,t.alpha=0):t.coords=hs[e],t.coords)return t}}}}),qc=new ue({id:"p3",name:"P3",base:_c,fromBase:cr.fromBase,toBase:cr.toBase,formats:{color:{id:"display-p3"}}});Le.display_space=cr;if(typeof CSS<"u"&&CSS.supports)for(let e of[ge,Bc,qc]){let t=e.getMinCoords(),n=pn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Le.display_space=e;break}}function of(e,{space:t=Le.display_space,...r}={}){let n=pn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Le.display_space)n=new String(n),n.color=e;else{let o=ye(e,t);n=new String(pn(o,r)),n.color=o}return n}function Rc(e,t,r="lab"){r=E.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function af(e,t){return e=z(e),t=z(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function et(e){return ke(e,[xe,"y"])}function Nc(e,t){Ke(e,[xe,"y"],t)}function sf(e){Object.defineProperty(e.prototype,"luminance",{get(){return et(this)},set(t){Nc(this,t)}})}var lf=Object.freeze({__proto__:null,getLuminance:et,register:sf,setLuminance:Nc});function cf(e,t){e=z(e),t=z(t);let r=Math.max(et(e),0),n=Math.max(et(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const df=.56,uf=.57,hf=.62,ff=.65,gs=.022,pf=1.414,gf=.1,mf=5e-4,vf=1.14,ms=.027,wf=1.14;function vs(e){return e>=gs?e:e+(gs-e)**pf}function yt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function bf(e,t){t=z(t),e=z(e);let r,n,o,i,a,s;t=ye(t,"srgb"),[i,a,s]=t.coords;let l=yt(i)*.2126729+yt(a)*.7151522+yt(s)*.072175;e=ye(e,"srgb"),[i,a,s]=e.coords;let c=yt(i)*.2126729+yt(a)*.7151522+yt(s)*.072175,d=vs(l),h=vs(c),p=h>d;return Math.abs(h-d)<mf?n=0:p?(r=h**df-d**uf,n=r*vf):(r=h**ff-d**hf,n=r*wf),Math.abs(n)<gf?o=0:n>0?o=n-ms:o=n+ms,o*100}function $f(e,t){e=z(e),t=z(t);let r=Math.max(et(e),0),n=Math.max(et(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const yf=5e4;function xf(e,t){e=z(e),t=z(t);let r=Math.max(et(e),0),n=Math.max(et(t),0);return n>r&&([r,n]=[n,r]),n===0?yf:(r-n)/n}function kf(e,t){e=z(e),t=z(t);let r=ke(e,[ge,"l"]),n=ke(t,[ge,"l"]);return Math.abs(r-n)}const Sf=216/24389,ws=24/116,Er=24389/27;let oo=Me.D65;var Yo=new E({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:oo,base:xe,fromBase(e){let r=e.map((n,o)=>n/oo[o]).map(n=>n>Sf?Math.cbrt(n):(Er*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ws?Math.pow(t[0],3):(116*t[0]-16)/Er,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Er,t[2]>ws?Math.pow(t[2],3):(116*t[2]-16)/Er].map((n,o)=>n*oo[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const io=Math.pow(5,.5)*.5+.5;function Cf(e,t){e=z(e),t=z(t);let r=ke(e,[Yo,"l"]),n=ke(t,[Yo,"l"]),o=Math.abs(Math.pow(r,io)-Math.pow(n,io)),i=Math.pow(o,1/io)*Math.SQRT2-40;return i<7.5?0:i}var Wr=Object.freeze({__proto__:null,contrastAPCA:bf,contrastDeltaPhi:Cf,contrastLstar:kf,contrastMichelson:$f,contrastWCAG21:cf,contrastWeber:xf});function Tf(e,t,r={}){br(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Wr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=z(e),t=z(t);for(let i in Wr)if("contrast"+n.toLowerCase()===i.toLowerCase())return Wr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Dc(e){let[t,r,n]=$r(e,xe),o=t+15*r+3*n;return[4*t/o,9*r/o]}function zc(e){let[t,r,n]=$r(e,xe),o=t+r+n;return[t/o,r/o]}function If(e){Object.defineProperty(e.prototype,"uv",{get(){return Dc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return zc(this)}})}var Ef=Object.freeze({__proto__:null,register:If,uv:Dc,xy:zc});function Af(e,t){return Rc(e,t,"lab")}const Mf=Math.PI,bs=Mf/180;function Pf(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=ge.from(e),[,s,l]=sr.from(ge,[o,i,a]),[c,d,h]=ge.from(t),p=sr.from(ge,[c,d,h])[1];s<0&&(s=0),p<0&&(p=0);let v=o-c,g=s-p,w=i-d,$=a-h,y=w**2+$**2-g**2,k=.511;o>=16&&(k=.040975*o/(1+.01765*o));let M=.0638*s/(1+.0131*s)+.638,q;Number.isNaN(l)&&(l=0),l>=164&&l<=345?q=.56+Math.abs(.2*Math.cos((l+168)*bs)):q=.36+Math.abs(.4*Math.cos((l+35)*bs));let ee=Math.pow(s,4),le=Math.sqrt(ee/(ee+1900)),te=M*(le*q+1-le),j=(v/(r*k))**2;return j+=(g/(n*M))**2,j+=y/te**2,Math.sqrt(j)}const $s=203;var Gi=new E({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:xe,fromBase(e){return e.map(t=>Math.max(t*$s,0))},toBase(e){return e.map(t=>Math.max(t/$s,0))}});const Ar=1.15,Mr=.66,ys=2610/2**14,Bf=2**14/2610,xs=3424/2**12,ks=2413/2**7,Ss=2392/2**7,_f=1.7*2523/2**5,Cs=2**5/(1.7*2523),Pr=-.56,ao=16295499532821565e-27,Lf=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],qf=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Rf=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Nf=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Oc=new E({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Gi,fromBase(e){let[t,r,n]=e,o=Ar*t-(Ar-1)*n,i=Mr*r-(Mr-1)*t,s=J(Lf,[o,i,n]).map(function(p){let v=xs+ks*(p/1e4)**ys,g=1+Ss*(p/1e4)**ys;return(v/g)**_f}),[l,c,d]=J(Rf,s);return[(1+Pr)*l/(1+Pr*l)-ao,c,d]},toBase(e){let[t,r,n]=e,o=(t+ao)/(1+Pr-Pr*(t+ao)),a=J(Nf,[o,r,n]).map(function(p){let v=xs-p**Cs,g=Ss*p**Cs-ks;return 1e4*(v/g)**Bf}),[s,l,c]=J(qf,a),d=(s+(Ar-1)*c)/Ar,h=(l+(Mr-1)*d)/Mr;return[d,h,c]},formats:{color:{}}}),Jo=new E({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Oc,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Rn(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Df(e,t){let[r,n,o]=Jo.from(e),[i,a,s]=Jo.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,h=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+h**2)}const jc=3424/4096,Fc=2413/128,Hc=2392/128,Ts=2610/16384,zf=2523/32,Of=16384/2610,Is=32/2523,jf=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Ff=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hf=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Vf=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Xo=new E({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Gi,fromBase(e){let t=J(jf,e);return Uf(t)},toBase(e){let t=Zf(e);return J(Vf,t)},formats:{color:{}}});function Uf(e){let t=e.map(function(r){let n=jc+Fc*(r/1e4)**Ts,o=1+Hc*(r/1e4)**Ts;return(n/o)**zf});return J(Ff,t)}function Zf(e){return J(Hf,e).map(function(n){let o=Math.max(n**Is-jc,0),i=Fc-Hc*n**Is;return 1e4*(o/i)**Of})}function Wf(e,t){let[r,n,o]=Xo.from(e),[i,a,s]=Xo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Gf=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Yf=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Jf=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Xf=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var gn=new E({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:xe,fromBase(e){let r=J(Gf,e).map(n=>Math.cbrt(n));return J(Jf,r)},toBase(e){let r=J(Xf,e).map(n=>n**3);return J(Yf,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Kf(e,t){let[r,n,o]=gn.from(e),[i,a,s]=gn.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var mn={deltaE76:Af,deltaECMC:Pf,deltaE2000:Go,deltaEJz:Df,deltaEITP:Wf,deltaEOK:Kf};function Zt(e,t,r={}){br(r)&&(r={method:r});let{method:n=Le.deltaE,...o}=r;e=z(e),t=z(t);for(let i in mn)if("deltae"+n.toLowerCase()===i.toLowerCase())return mn[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Qf(e,t=.25){let n=[E.get("oklch","lch"),"l"];return Ke(e,n,o=>o*(1+t))}function e1(e,t=.25){let n=[E.get("oklch","lch"),"l"];return Ke(e,n,o=>o*(1-t))}var t1=Object.freeze({__proto__:null,darken:e1,lighten:Qf});function Vc(e,t,r=.5,n={}){[e,t]=[z(e),z(t)],Ye(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return yr(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Uc(e,t,r={}){let n;Yi(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[z(e),z(t)],n=yr(e,t,l));let c=Zt(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,h=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)h=[{p:.5,color:n(.5)}];else{let p=1/(d-1);h=Array.from({length:d},(v,g)=>{let w=g*p;return{p:w,color:n(w)}})}if(o>0){let p=h.reduce((v,g,w)=>{if(w===0)return 0;let $=Zt(g.color,h[w-1].color,i);return Math.max(v,$)},0);for(;p>o;){p=0;for(let v=1;v<h.length&&h.length<s;v++){let g=h[v-1],w=h[v],$=(w.p+g.p)/2,y=n($);p=Math.max(p,Zt(y,g.color),Zt(y,w.color)),h.splice(v,0,{p:$,color:n($)}),v++}}}return h=h.map(p=>p.color),h}function yr(e,t,r={}){if(Yi(e)){let[l,c]=[e,t];return yr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=z(e),t=z(t),e=lr(e),t=lr(t);let s={colors:[e,t],options:r};if(n?n=E.get(n):n=E.registry[Le.interpolationSpace]||e.space,o=o?E.get(o):n,e=ye(e,n),t=ye(t,n),e=Qe(e),t=Qe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,h]=[ke(e,c),ke(t,c)];[d,h]=Jh(l,[d,h]),Ke(e,c,d),Ke(t,c,h)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((p,v)=>{let g=t.coords[v];return un(p,g,l)}),d=un(e.alpha,t.alpha,l),h={space:n,coords:c,alpha:d};return a&&(h.coords=h.coords.map(p=>p/d)),o!==n&&(h=ye(h,o)),h},{rangeArgs:s})}function Yi(e){return Ye(e)==="function"&&!!e.rangeArgs}Le.interpolationSpace="lab";function r1(e){e.defineFunction("mix",Vc,{returns:"color"}),e.defineFunction("range",yr,{returns:"function<color>"}),e.defineFunction("steps",Uc,{returns:"array<color>"})}var n1=Object.freeze({__proto__:null,isRange:Yi,mix:Vc,range:yr,register:r1,steps:Uc}),Zc=new E({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Wc=new E({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Zc,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),o1=new E({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Wc,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const i1=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],a1=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Gc=new ue({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:i1,fromXYZ_M:a1}),s1=new ue({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Gc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const l1=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],c1=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Yc=new ue({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Wi,toXYZ_M:l1,fromXYZ_M:c1});const d1=1/512,u1=16/512;var h1=new ue({id:"prophoto",name:"ProPhoto",base:Yc,toBase(e){return e.map(t=>t<u1?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=d1?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),f1=new E({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:gn,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Rn(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Es=203,As=2610/2**14,p1=2**14/2610,g1=2523/2**5,Ms=2**5/2523,Ps=3424/2**12,Bs=2413/2**7,_s=2392/2**7;var m1=new ue({id:"rec2100pq",name:"REC.2100-PQ",base:Nn,toBase(e){return e.map(function(t){return(Math.max(t**Ms-Ps,0)/(Bs-_s*t**Ms))**p1*1e4/Es})},fromBase(e){return e.map(function(t){let r=Math.max(t*Es/1e4,0),n=Ps+Bs*r**As,o=1+_s*r**As;return(n/o)**g1})},formats:{color:{id:"rec2100-pq"}}});const Ls=.17883277,qs=.28466892,Rs=.55991073,so=3.7743;var v1=new ue({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Nn,toBase(e){return e.map(function(t){return t<=.5?t**2/3*so:(Math.exp((t-Rs)/Ls)+qs)/12*so})},fromBase(e){return e.map(function(t){return t/=so,t<=1/12?Math.sqrt(3*t):Ls*Math.log(12*t-qs)+Rs})},formats:{color:{id:"rec2100-hlg"}}});const Jc={};Xe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Xc(e.W1,e.W2,e.options.method))});Xe.add("chromatic-adaptation-end",e=>{e.M||(e.M=Xc(e.W1,e.W2,e.options.method))});function Dn({id:e,toCone_M:t,fromCone_M:r}){Jc[e]=arguments[0]}function Xc(e,t,r="Bradford"){let n=Jc[r],[o,i,a]=J(n.toCone_M,e),[s,l,c]=J(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],h=J(d,n.toCone_M);return J(n.fromCone_M,h)}Dn({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Dn({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Dn({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Dn({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Me,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Me.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const w1=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],b1=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Kc=new ue({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Me.ACES,toXYZ_M:w1,fromXYZ_M:b1,formats:{color:{}}});const Br=2**-16,lo=-.35828683,_r=(Math.log2(65504)+9.72)/17.52;var $1=new ue({id:"acescc",name:"ACEScc",coords:{r:{range:[lo,_r],name:"Red"},g:{range:[lo,_r],name:"Green"},b:{range:[lo,_r],name:"Blue"}},referred:"scene",base:Kc,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Br)*2:r<_r?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Br)+9.72)/17.52:t<Br?(Math.log2(Br+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ns=Object.freeze({__proto__:null,A98RGB:s1,A98RGB_Linear:Gc,ACEScc:$1,ACEScg:Kc,HSL:Zc,HSV:Wc,HWB:o1,ICTCP:Xo,JzCzHz:Jo,Jzazbz:Oc,LCH:sr,Lab:ge,Lab_D65:Yo,OKLCH:f1,OKLab:gn,P3:qc,P3_Linear:_c,ProPhoto:h1,ProPhoto_Linear:Yc,REC_2020:Bc,REC_2020_Linear:Nn,REC_2100_HLG:v1,REC_2100_PQ:m1,XYZ_ABS_D65:Gi,XYZ_D50:Wi,XYZ_D65:xe,sRGB:cr,sRGB_Linear:Lc});class P{constructor(...t){let r;t.length===1&&(r=z(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:E.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=of(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let h=c(...d);return P.get(h)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}}P.defineFunctions({get:ke,getAll:$r,set:Ke,setAll:Pc,to:ye,equals:af,inGamut:Xt,toGamut:Qe,distance:Rc,toString:pn});Object.assign(P,{util:Uh,hooks:Xe,WHITES:Me,Space:E,spaces:E.registry,parse:Mc,defaults:Le});for(let e of Object.keys(Ns))E.register(Ns[e]);for(let e in E.registry)Ko(e,E.registry[e]);Xe.add("colorspace-init-end",e=>{var t;Ko(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ko(r,e)})});function Ko(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return E.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=E.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=E.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}P.extend(mn);P.extend({deltaE:Zt});Object.assign(P,{deltaEMethods:mn});P.extend(t1);P.extend({contrast:Tf});P.extend(Ef);P.extend(lf);P.extend(n1);P.extend(Wr);function Qc(e){return en(e,(t,r)=>r instanceof P?B(r.toString({format:"hex"})):Qc(r))}const y1="dodgerblue";function Qo(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function co({background:e,foreground:t}){return{background:e??new P(Qo(t)),foreground:t??new P(Qo(e))}}var vn;(function(e){e.Dark="dark",e.Light="light"})(vn||(vn={}));function x1(e){return e==="black"?"white":"black"}const k1={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},S1={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function Ds({themeColor:e=y1,themeStyle:t=vn.Light}={}){const r=new P(e),n=new P(t===vn.Dark?"black":"white"),o=Qo(n),i=new P(o),a={nav:{hover:co({background:r.clone().set({"hsl.l":93})}),active:co({background:r.clone().set({"hsl.l":90})}),selected:co({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...S1[x1(o)],foreground:i,...k1[o]}};return Qc(a)}const wn=Bi()("element-book-change-route"),zs="vira-",{defineElement:xr,defineElementNoInputs:Uv}=Oi({assertInputs:e=>{if(!e.tagName.startsWith(zs))throw new Error(`Tag name should start with '${zs}' but got '${e.tagName}'`)}});var Os;(function(e){e.Upper="upper",e.Lower="lower"})(Os||(Os={}));const C1="px";function T1(e){return I1({value:e,suffix:C1})}function I1({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const ed=m`
    pointer-events: none;
    opacity: 0.3;
`,Je=Fe({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),bn=Fe({"vira-form-input-border-radius":"8px"}),$n=Fe({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${bn["vira-form-input-border-radius"].value} + 4px)`});function td({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(T1(n+r+t));return m`
        ${B(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${$n["vira-focus-outline-color"].value};
            border-radius: ${$n["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const E1=m`
    padding: 0;
    margin: 0;
`,ne=m`
    ${E1};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function A1(e){return m`
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
    `}const Ce=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,oe=xr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ei;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ei||(ei={}));xr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ei.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>m`
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
            ${$n["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${ed};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
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
            border-radius: ${bn["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Je["vira-interaction-animation-duration"].value},
                background-color
                    ${Je["vira-interaction-animation-duration"].value},
                border-color ${Je["vira-interaction-animation-duration"].value};
        }

        ${td({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${oe} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?u`
                  <${oe.assign({icon:e.icon})}></${oe}>
              `:"",r=e.text?u`
                  <span class="text-template">${e.text}</span>
              `:"";return u`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var ti;(function(e){e.Header="header"})(ti||(ti={}));xr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>m`
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
    `,events:{expandChange:Z()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?m`
                  height: ${e.contentHeight}px;
              `:m`
                  height: 0;
              `;return u`
            <button
                class="header-wrapper"
                ${S("click",()=>{r(new n.expandChange(!o.expanded))})}
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
        `}});const A=Fe({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function b({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const M1=b({name:"CloseX24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${A["vira-icon-fill-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var js;(function(e){e.Upper="upper",e.Lower="lower"})(js||(js={}));function P1({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}const rd=globalThis.crypto;function B1({min:e,max:t}){const{min:r,max:n}=P1({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do rd.getRandomValues(s),l=s.reduce((c,d,h)=>c+d*256**h,0);while(l>=a);return r+l%o}function _1(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return rd.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function L1(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function ri({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ri({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function nd({value:e,allowed:t,blocked:r}){const n=t?ri({input:e,matcher:t}):!0,o=r?ri({input:e,matcher:r}):!1;return n&&!o}function od(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(nd({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function q1({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=L1(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)nd({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=od({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const Gr=xr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Z(),inputBlocked:Z()},styles:({hostClasses:e,cssVars:t})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${$n["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ed};
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

            ${td({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=od({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?u`
                  <${oe.assign({icon:e.icon})} class="left-side-icon"></${oe}>
              `:"",s=e.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return u`
            <label>
                ${a}
                ${de(!!e.fitText,u`
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
                    ${S("input",l=>{q1({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${de(!!(e.showClearButton&&e.value),u`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${S("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${oe.assign({icon:M1})}></${oe}>
                        </button>
                    `)}
                ${de(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});xr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>m`
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
    `,events:{routeChange:Z()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Ui(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return u`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return u`
                <a href=${a} rel="noopener noreferrer" ${S("click",n)}>
                    <slot></slot>
                </a>
            `}}});const R1=b({name:"Element16Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"Element24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const N1=b({name:"Loader24Icon",svgTemplate:u`
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
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),D1=m`
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
`,z1=b({name:"LoaderAnimated24Icon",svgTemplate:u`
        <style>
            ${D1}
        </style>
        ${N1.svgTemplate}
    `}),O1=b({name:"Options24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${A["vira-icon-fill-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${A["vira-icon-stroke-color"].value}"
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"StatusFailure24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${A["vira-icon-fill-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `});b({name:"StatusInProgress24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${A["vira-icon-fill-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${A["vira-icon-stroke-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width="calc(${A["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${A["vira-icon-stroke-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width="calc(${A["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${A["vira-icon-stroke-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width="calc(${A["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});b({name:"StatusSuccess24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${A["vira-icon-fill-color"].value}
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${A["vira-icon-stroke-color"].value}
                stroke-width=${A["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const{defineElement:Te,defineElementNoInputs:Zv}=Oi(),$e=Te()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
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
                ${S("click",i=>{(!e.router||Ui(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new wn(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function j1(e,t){return e.entry.entryType===ie.Root?!1:!!(e.entry.entryType===ie.Page||We(t,e.fullUrlBreadcrumbs.slice(0,-1))||We(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ze=Te()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>m`
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
            display: block;
            ${$e.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${oe} {
            display: inline-flex;
            color: ${N["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!j1(r,e.selectedPath))return;const n=m`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return u`
                <li style=${n}>
                    <${$e.assign({router:e.router,route:{paths:[ce.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${me({"title-row":!0,selected:e.selectedPath?We(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${de(At(r,ie.ElementExample),u`
                                    <${oe.assign({icon:R1})}></${oe}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${$e}>
                </li>
            `});return u`
            <${$e.assign({route:_t,router:e.router})}>
                <slot name=${_e.NavHeader}>Book</slot>
            </${$e}>
            <ul>
                ${t}
            </ul>
        `}});async function F1(e){await _o(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ou(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const tt=Te()({tagName:"book-error",styles:m`
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
    `,renderCallback({inputs:e}){return(An(e.message,"array")?e.message:[e.message]).map(r=>u`
                    <p>${r}</p>
                `)}}),dr=Te()({tagName:"book-page-controls",events:{controlValueChange:Z()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>m`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
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

        ${oe}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===L.Hidden)return"";const a=H1(e.currentValues[n],o,s=>{const l=An(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return u`
                    <div class="control-wrapper">
                        ${de(i===0,u`
                                <${oe.assign({icon:O1})}
                                    class="options-icon"
                                ></${oe}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function H1(e,t,r){return bt(t,L.Hidden)?"":bt(t,L.Checkbox)?u`
            <input
                type="checkbox"
                .value=${e}
                ${S("input",n=>{const o=Cr(n,HTMLInputElement);r(o.checked)})}
            />
        `:bt(t,L.Color)?u`
            <input
                type="color"
                .value=${e}
                ${S("input",n=>{const o=Cr(n,HTMLInputElement);r(o.value)})}
            />
        `:bt(t,L.Text)?u`
            <${Gr.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${S(Gr.events.valueChange,n=>{r(n.detail)})}
            ></${Gr}>
        `:bt(t,L.Number)?u`
            <input
                type="number"
                .value=${e}
                ${S("input",n=>{const o=Cr(n,HTMLInputElement);r(o.value)})}
            />
        `:bt(t,L.Dropdown)?u`
            <select
                .value=${e}
                ${S("input",n=>{const o=Cr(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>u`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:u`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Fs=Te()({tagName:"book-breadcrumbs",styles:m`
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
                <${$e.assign({route:{hash:void 0,search:void 0,paths:[ce.Book,...a]},router:e.router})}>
                    ${r}
                </${$e}>
                ${s}
            `}):u`
                &nbsp;
            `}}),uo=Te()({tagName:"book-breadcrumbs-bar",styles:m`
        :host {
            border-bottom: 1px solid
                ${N["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${N["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return u`
            ${de(!!e.currentSearch,u`
                    &nbsp;
                `,u`
                    <${Fs.assign({currentRoute:e.currentRoute,router:e.router})}></${Fs}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${S("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await _u(200),n.value===o&&(n.value?t(new wn({paths:[ce.Search,encodeURIComponent(n.value)]})):t(new wn(_t)))})}
            />
        `}}),Hs=Te()({tagName:"book-entry-description",styles:m`
        :host {
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${N["element-book-page-foreground-color"].value};
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
            `)}}),Vs=Te()({tagName:"book-page-wrapper",styles:m`
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

        ${$e} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?u`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:u`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[ce.Book,...e.pageNode.fullUrlBreadcrumbs],n=Il(e.pageNode.entry.errors);return n&&console.error(n),u`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${$e.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${$e}>
                    ${n?u`
                              <${tt.assign({message:n.message})}></${tt}>
                          `:u`
                              <${Hs.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Hs}>
                              <${dr.assign({config:e.pageNode.entry.controls,currentValues:Hi(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${dr}>
                          `}
                </div>
            </div>
        `}}),Lr=Te()({tagName:"book-element-example-controls",styles:m`
        :host {
            display: flex;
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[ce.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return u`
            <${$e.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${$e}>
        `}}),Us=Symbol("unset-internal-state"),Zs=Te()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Us},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Il(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Us&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return u`
                ${de(!!t.elementExampleNode.entry.styles,u`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),u`
                <${tt.assign({message:`${t.elementExampleNode.entry.title} failed: ${In(n)}`})}></${tt}>
            `}},options:{allowPolymorphicState:!0}}),Ws=Te()({tagName:"book-element-example-wrapper",styles:m`
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
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Lr} {
            color: ${N["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return u`
            <div class="individual-example-wrapper">
                <${Lr.assign(Bu(e,["currentPageControls"]))}></${Lr}>
                <${Zs.assign(e)}></${Zs}>
            </div>
        `}});function id(e,t,r,n){const o=Vo(r,n),i=[];if(o){const a=id(e,t,o,n);a&&i.push(a)}if(At(r,ie.Page)&&!e.includes(r)){const a=Hi(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:en(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function V1({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[u`
                No results
            `];const a=Ca(e,1)?id(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&Ca(e,1)?u`
                  <${dr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${dr}>
              `:"",l=Ku(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(At(c,ie.Page))return u`
                    <${Vs.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Vs}>
                `;if(At(c,ie.ElementExample)){const h=Hi(o,c.fullUrlBreadcrumbs.slice(0,-1));return u`
                    <${Ws.assign({elementExampleNode:c,currentPageControls:h,router:r})}
                        class="inline-entry"
                    ></${Ws}>
                `}else return At(c,ie.Root)?"":u`
                    <${tt.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${tt}>
                `});return[s,l].flat()}const xt=Te()({tagName:"book-entry-display",styles:m`
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

        ${uo} {
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
    `,events:{loadingRender:Z()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Uo(e.currentRoute.paths),a=V1({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return u`
            <${uo.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${uo}>

            ${de(e.showLoading,u`
                    <div
                        ${sn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${oe.assign({icon:z1})}></${oe}>
                    </div>
                    ${de(!!n.lastElement,u`
                            ${n.lastElement}
                            <slot name=${_e.Footer}></slot>
                        `)}
                `,u`
                    <div
                        ${sn(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${_e.Footer}></slot>
                `)}
        `}});function U1(e,t,r){const n=Gs(e,t);if(n.length)return n;r(_t);const o=Gs(e,_t.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Gs(e,t){return e.filter(r=>Nu({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const ho=Di()({tagName:"element-book-app",events:{pathUpdate:Z()},stateInitStatic:{currentRoute:_t,router:void 0,loading:!0,colors:{config:void 0,theme:Ds(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:m`
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

        ${xt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ze} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ys(e,Uo(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,h,p,v,g,w,$;t._debug&&console.info("rendering element-book app");function a(y){return{...e.currentRoute,...y}}function s(y){const k=a(y);return!We(e.currentRoute,k)}function l(y){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,y].filter(Si).join(" - "))}function c(y){if(!s(y))return;const k=a(y);e.router?e.router.setRoutes(k):n({currentRoute:{...e.currentRoute,...k}}),t.elementBookRoutePaths&&!We(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(k.paths??[]))}try{if(t.elementBookRoutePaths&&!We(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const j=jh(t.internalRouterConfig.basePath);n({router:j}),j.addRouteListener(!0,re=>{n({currentRoute:re})})}else!((h=t.internalRouterConfig)!=null&&h.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const y={themeColor:t.themeColor};if(!We(y,(p=e.colors)==null?void 0:p.config)){const j=Ds(y);n({colors:{config:y,theme:j}}),Vh(r,j)}const k=t._debug??!1,M=ph({entries:t.entries,debug:k});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:mc(M.tree,{children:(g=(v=e.treeBasedControls)==null?void 0:v.controls)==null?void 0:g.children,controls:t.globalValues})}}));const q=Uo(e.currentRoute.paths),le=(q?yh({flattenedNodes:M.flattenedNodes,searchQuery:q}):void 0)??U1(M.flattenedNodes,e.currentRoute.paths,c);l((w=le[0])==null?void 0:w.entry.title);const te=($=e.treeBasedControls)==null?void 0:$.controls;return te?(t._debug&&console.info({currentControls:te}),u`
                <div
                    class="root"
                    ${S(wn,async j=>{const re=j.detail;if(!s(re))return;if(n({loading:!0}),c(re),!(r.shadowRoot.querySelector(ze.tagName)instanceof ze))throw new Error(`Failed to find child '${ze.tagName}'`);Ys(r,q,e.currentRoute)})}
                    ${S(dr.events.controlValueChange,j=>{if(!e.treeBasedControls)return;const re=mh(te,j.detail.fullUrlBreadcrumbs,j.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:re}})})}
                >
                    <${ze.assign({flattenedNodes:M.flattenedNodes,router:e.router,selectedPath:q?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${_e.NavHeader}
                            slot=${_e.NavHeader}
                        ></slot>
                    </${ze}>
                    <${xt.assign({controls:te,currentNodes:le,currentRoute:e.currentRoute,debug:k,originalTree:M.tree,router:e.router,showLoading:e.loading})}
                        ${S(xt.events.loadingRender,async j=>{await _o();const re=r.shadowRoot.querySelector(xt.tagName);re?re.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${xt.tagName}' for scrolling.`),await _o(),n({loading:!j.detail})})}
                    >
                        <slot
                            name=${_e.Footer}
                            slot=${_e.Footer}
                        ></slot>
                    </${xt}>
                </div>
            `):u`
                    <${tt.assign({message:"Failed to generate page controls."})}></${tt}>
                `}catch(y){return console.error(y),u`
                <p class="error">${In(y)}</p>
            `}}});async function Ys(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ze.tagName);if(!(n instanceof ze))throw new Error(`Failed to find child '${ze.tagName}'`);await F1(n)}function Z1(e,t){return e.map(t)}function Ji(e){return!!e}function ad(e,t){return e.match(t)??[]}function W1(e){return e.replace(/,/g,"")}function G1(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var Lt;(function(e){e.Upper="upper",e.Lower="lower"})(Lt||(Lt={}));function Y1(e){return e.toLowerCase()!==e.toUpperCase()}function Js(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Y1(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Lt.Upper&&o!==o.toUpperCase())return!1;if(t===Lt.Lower&&o!==o.toLowerCase())return!1}return!0}function ni(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Js(a,Lt.Lower,{blockNoCaseCharacters:!0})||Js(s,Lt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function ur(e,t){return e.split(t)}const J1=String(NaN);function sd(e){if(typeof e=="string"&&isNaN(Number(e)))return J1;const t=Number(e),r=t<0,n=String(Math.abs(t)),[o,i]=n.split("."),a=i?`.${i}`:"",l=ad(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(d=>d.split("").reverse().join("")).join(",");return[r?"-":"",l,a].join("")}function X1(e){return typeof e=="number"?e:Number(typeof e=="string"?W1(e):e)}function K1(e){return String(e).includes("e")}function Q1(e){return!!e&&typeof e=="object"}function qe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ep(e){return Array.isArray(e)?"array":typeof e}function tp(e,t){return ep(e)===t}function rp(e){return qe(e).filter(t=>isNaN(Number(t)))}function np(e,t){return qe(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function oi(e,t){return np(e,r=>!t.includes(r))}function qt(e,t){let r=!1;const n=qe(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(qe(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function op({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const fo="://";function ip(...e){const t=e.join("/"),[r,n=""]=t.includes(fo)?t.split(fo):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>s.includes("?")||o?(o=!0,s):encodeURIComponent(s)).reduce((s,l,c,d)=>{if(i)return s;const h=d[c+1];let p=l;const v=!l.includes("?")&&(h==null?void 0:h.startsWith("?"));if(h!=null&&h.startsWith("?")||v){i=!0;let g=!1;const w=d.slice(v?c+2:c+1).reduce(($,y)=>(y.includes("#")&&(g=!0),g?$.concat(y):[$,y].join("&")),"");p=[l,h,w].join("")}return s.concat(p)},[]);return[r,r?fo:"",a.join("/")].join("")}const ap=["k","M","B","T","P","E","Z","Y"];function Xi({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function sp(e,t,r){const[n,o]=ur(e,"."),i=sd(n),a=ad(i,/,/g).length,s=t[a-1],[l,c]=ur(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Xi({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const Xs=3;function lp({input:e,maxLength:t}){const r=String(e),[n,o]=ur(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=ur(n,"."),d=i.length+Xs;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Xi({afterDot:c,beforeDot:l,maxLength:t-i.length+Xs}),s].join("")}function cp(e,t){const[r,n]=ur(sd(e),".");if(r.length<=t)return Xi({beforeDot:r,afterDot:n,maxLength:t})}function dp(e,{customSuffixes:t=ap,maxLength:r=6}={}){const n=X1(e);if(isNaN(n)||n===1/0)return String(n);if(K1(n))return lp({input:n,maxLength:r});const o=String(n),i=cp(o,r);return i??sp(o,t,r)}const f=Fe({"toniq-icon-fill-color":A["vira-icon-fill-color"].default,"toniq-icon-stroke-color":A["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),H=qt(f,(e,t)=>r=>B(`var(${t.name}, ${r})`)),up=b({name:"Copy16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${f["toniq-icon-fill-color"].value}
            stroke=${f["toniq-icon-stroke-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 6V4.3c0-.7-.6-1.3-1.3-1.3H4.3C3.6 3 3 3.6 3 4.3v5.4c0 .7.6 1.3 1.3 1.3H6"
            ></path>
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M14 7.3c0-.7-.6-1.3-1.3-1.3H7.3C6.6 6 6 6.6 6 7.3v5.4c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3V7.3Z"
            ></path>
        </svg>
    `}),hp=b({name:"ExternalLink16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M7 4H4.3C3.6 4 3 4.6 3 5.3v6.4c0 .7.6 1.3 1.3 1.3h6.4c.7 0 1.3-.6 1.3-1.3V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `}),Kt=b({name:"InfoCircle16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
            />
        </svg>
    `}),fp=b({name:"ArrowBarUp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M4 20h16" />
        </svg>
    `}),pp=b({name:"ArrowForwardUp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4"
            />
        </svg>
    `}),Ki=b({name:"ArrowLeft24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 12h14M5 12l6 6m-6-6 6-6"
            />
        </svg>
    `}),gp=b({name:"ArrowLoopLeft24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3"
            />
        </svg>
    `}),mp=b({name:"ArrowLoopRight24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3"
            />
        </svg>
    `}),Qi=b({name:"ArrowRight24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 12h14m-6 6 6-6m-6-6 6 6"
            />
        </svg>
    `}),ld=b({name:"ArrowsSort24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4"
            />
        </svg>
    `}),vp=b({name:"ArrowsSortAscending24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 19 19 5m0 6V5h-6"
            />
        </svg>
    `}),wp=b({name:"ArrowsSortDescending24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m5 5 14 14m0-6v6h-6"
            />
        </svg>
    `}),bp=b({name:"Bucket24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M7 9a5 5 0 0 1 5-5 5 5 0 0 1 5 5"
                fill="none"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m19 9-2 9c-.2 1.2-1 2-2 2H9c-1 0-1.8-.8-2-2L5 9h14Z"
            />
        </svg>
    `}),$p=b({name:"BuildingStore24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 10.827c.313.112.65.173 1 .173 1.646 0 3-1.354 3-3 0 1.646 1.354 3 3 3s3-1.354 3-3c0 1.646 1.354 3 3 3 .35 0 .687-.061 1-.173V21H5V10.827Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 21v-4c0-1.1.9-2 2-2h2c1.097 0 2 .903 2 2v4"
            />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M3 21h18" />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M21 7v1c0 1.646-1.354 3-3 3s-3-1.354-3-3c0 1.646-1.354 3-3 3S9 9.646 9 8c0 1.646-1.354 3-3 3S3 9.646 3 8V7"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m3 7 2-4h14l2 4H3Z"
            />
        </svg>
    `}),yp=b({name:"CalendarEvent24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `}),xp=b({name:"Cash24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),kp=b({name:"Chain24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m11.181 12.944 1.356 1.138c.74.621 1.845.525 2.466-.215l4.178-4.98a1.75 1.75 0 0 0-.216-2.465l-2.681-2.25a1.751 1.751 0 0 0-2.466.216l-2.089 2.49"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m12.819 11.056-1.356-1.138a1.751 1.751 0 0 0-2.466.215l-4.178 4.98a1.75 1.75 0 0 0 .216 2.465l2.681 2.25c.74.621 1.845.524 2.466-.216l2.089-2.49"
            />
        </svg>
    `}),cd=b({name:"CheckMark24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),dd=b({name:"ChevronDown24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 9 6 6 6-6"
            />
        </svg>
    `}),Sp=b({name:"ChevronUp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 15 6-6 6 6"
            />
        </svg>
    `}),Cp=b({name:"Circle24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                r="9"
                cx="12"
                cy="12"
            />
        </svg>
    `}),ud=b({name:"CircleDot24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-stroke-color"].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `}),Tp=b({name:"CirclePlus24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6"
            />
        </svg>
    `}),Ip=b({name:"CircleWavyCheck24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `}),Ep=b({name:"Clock24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 7v5l3 3"
                fill="none"
            />
        </svg>
    `}),hd=b({name:"Code24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                stroke-width=${f["toniq-icon-stroke-width"].value}
            />
        </svg>
    `}),fd=b({name:"Copy24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `}),Ap=b({name:"CreateFile24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `}),Mp=b({name:"DotsVertical24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Pp=b({name:"Download24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4"
            />
        </svg>
    `}),Bp=b({name:"Edit24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `}),pd=b({name:"ExternalLink24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 14 20 4m-5 0h5v5"
            />
        </svg>
    `}),_p=b({name:"Filter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `}),Lp=b({name:"Geometry24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `}),qp=b({name:"GridDots24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),Rp=b({name:"Heart24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `}),Np=b({name:"Infinity24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `}),Dp=b({name:"Info24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                fill="none"
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 11.5v5"
            />
        </svg>
    `}),zp=b({name:"LayersLinked24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `}),Op=b({name:"LayoutGrid24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `}),jp=b({name:"Lifebuoy24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m14.8 14.8 3.5 3.5m-9.1-3.5-3.5 3.5m0-12.6 3.5 3.5m9.2-3.5-3.6 3.5"
                fill="none"
            />
        </svg>
    `}),Fp=b({name:"List24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
        </svg>
    `}),Hp=b({name:"ListDetails24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 5c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V5Zm0 10c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-4Z"
            />
        </svg>
    `}),Vp=b({name:"Loader24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),gd=b({name:"LoaderAnimated24Icon",svgTemplate:u`
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
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `}),Up=b({name:"Lock24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"
            />
        </svg>
    `}),Zp=b({name:"LockOpen24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V6a4 4 0 0 1 4-4 4 4 0 0 1 3.8 2.8"
            />
        </svg>
    `}),Wp=b({name:"Menu24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    `}),Gp=b({name:"Paper24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `}),Yp=b({name:"People24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `}),Jp=b({name:"Person24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke="none"
                fill=${f["toniq-icon-stroke-color"].value}
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
                stroke="none"
                fill=${f["toniq-icon-stroke-color"].value}
                d="M5.6 18.3A7.2 7.2 0 0 1 12 14c2.8 0 5.2 1.8 6.4 4.3a9 9 0 0 1-12.8 0Z"
            />
        </svg>
    `}),Xp=b({name:"Photo24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M15 8h0"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="m4 15 4-4c1-.9 2-.9 3 0l5 5m-2-2 1-1c1-.9 2-.9 3 0l2 2"
            />
        </svg>
    `}),Kp=b({name:"Refresh24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18.3 15a7 7 0 1 1 .4-5"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 5v5h-5"
            />
        </svg>
    `}),md=b({name:"Rocket24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `}),vd=b({name:"Search24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6"
            />
        </svg>
    `}),Qp=b({name:"Send24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `}),eg=b({name:"ShoppingCart24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M6 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M17 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 5 14 1-1 7H6"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M17 17H6V3H4"
            />
        </svg>
    `}),tg=b({name:"Social24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `}),rg=b({name:"Square24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${f["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
        </svg>
    `}),Ks={interactionDuration:m`--toniq-interaction-transition-duration`,prettyDuration:m`--toniq-pretty-transition-duration`},W={interaction:m`var(${Ks.interactionDuration}, 84ms)`,pretty:m`var(${Ks.prettyDuration}, 300ms)`};function ea(){return e=>e}function po(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const ng=(()=>{const e={backgroundColor:m`#ffffff`,foregroundColor:m`#000000`},t={...e,foregroundColor:m`#00D093`},r={...e,foregroundColor:m`#ACADAD`},n={...e,foregroundColor:m`#D6D6D6`},o={...t},i={...t,foregroundColor:m`#00A876`},a={...t,foregroundColor:m`#1D6852`},s={...n},l={...e,foregroundColor:m`#EAFBF7`},c={...e,backgroundColor:m`#D2EEFA`},d=po(o),h=po(i),p=po(a),v=p,g={backgroundColor:m`#F1F3F6`,foregroundColor:e.foregroundColor},w={...g,foregroundColor:m`#9A9A9D`};return ea()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:v,accentPrimary:d,accentPrimaryHover:h,accentPrimaryActive:p,accentSecondary:g,accentTertiary:w})})(),wd=ng;function Qs(e,t){return B(`--toniq-${ni(e)}-${ni(t)}`)}const ta=qt(wd,e=>({backgroundColor:Qs(e,"backgroundColor"),foregroundColor:Qs(e,"foregroundColor")}));function Ae(e,t){const r=wd[e][t],n=ta[e][t];return m`var(${n}, ${r})`}const x=qt(ta,e=>({foregroundColor:Ae(e,"foregroundColor"),backgroundColor:Ae(e,"backgroundColor")}));function D(e){return m`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const mt=m`
    pointer-events: none;
    opacity: 0.3;
    ${Ce};
`;function Qt(e,t,r){return Math.min(Math.max(e,t),r)}function St(e){return`${e}px`}function go(e){return`${e}%`}function mo(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const h=e[d+1];return h==null?!0:c<=t&&h>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function og(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=ig(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(el(o,r),o.length>r&&el(o,r)),o}function el(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function ig(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function nt({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=B(St(n+r+t));return m`
        ${B(e)}::after {
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
    `}const bd=ea()({toniqFont:{"font-family":m`'Rubik', sans-serif`},normalWeightFont:{"font-weight":m`400`},boldFont:{"font-weight":m`600`},extraBoldFont:{"font-weight":m`900`},paragraphFont:{"line-height":m`24px`,"font-size":m`16px`},boldParagraphFont:{},labelFont:{"line-height":m`16px`,"font-size":m`12px`},boldLabelFont:{},h1Font:{"line-height":m`96px`,"font-size":m`64px`},h2Font:{"line-height":m`48px`,"font-size":m`32px`},h3Font:{"line-height":m`32px`,"font-size":m`24px`},monospaceFont:{"font-family":m`'Inconsolata', monospace`,"line-height":m`1.125em`}}),ag=qt(bd,(e,t)=>{const r=B(ni(e.replace(/Font$/,"")));return qt(t,o=>{const i=B(o);return m`--toniq-font-${r}-${i}`})});function Pe(e){const t=ag[e],r=bd[e],n=qe(t).map(o=>{const i=r[o],a=t[o];return m`
            ${B(o)}: var(${a}, ${i});
        `});return B(n.join(`
`))}const V=(()=>{const e=m`
        font-style: normal;
        color: ${x.pagePrimary.foregroundColor};
        ${Pe("toniqFont")};
    `,t=m`
        ${e};
        ${Pe("normalWeightFont")};
    `,r=m`
        ${e};
        ${Pe("boldFont")};
    `,n=m`
        ${e};
        ${Pe("extraBoldFont")};
    `,o=m`
        ${e};
        ${Pe("paragraphFont")};
        ${t};
    `,i=m`
        ${e};
        ${o};
        ${r};
    `,a=m`
        ${e};
        ${Pe("labelFont")};
        ${t};
    `,s=m`
        ${a};
        ${r};
    `,l=m`
        ${Pe("h1Font")};
        ${n};
    `,c=m`
        ${Pe("h2Font")};
        ${r};
    `,d=m`
        ${Pe("h3Font")};
        ${r};
    `,h=m`
        ${Pe("monospaceFont")}
    `;return ea()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:h})})(),yn={popupShadow:m`
        filter: drop-shadow(0px 12px 8px ${x.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:m`
        filter: drop-shadow(0px -12px 8px ${x.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:m`
        filter: drop-shadow(0px 12px 8px ${x.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function sg(e,t=!0){const r=B(e),n=e===":host"?m`
                  :host(:hover) ;
              `:m`
                  ${r}:hover
              `,o=t?m`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${x.pageInteraction.foregroundColor};
              }
          `:m``;return m`
        ${r} {
            border-radius: 16px;
            background-color: ${x.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${yn.popupShadow};
        }

        ${o}
    `}const lg=b({name:"SquareCheck24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${f["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),Yr=b({name:"Trash24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M9 7V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v3"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 7h16M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 11v6"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M14 11v6"
            />
        </svg>
    `}),cg=b({name:"Upload24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4"
            />
        </svg>
    `}),dg=b({name:"Wallet24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 8V6c0-2 2-2 2-2h10c.6 0 1 .4 1 1v3"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 12V9c0-.6-.4-1-1-1H6S4 8 4 6v12c0 1 1 2 2 2h12c.6 0 1-.4 1-1v-2"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 12v4h-4a2 2 0 0 1-2-2c0-1.1.9-2 2-2h4"
            />
        </svg>
    `}),ug=b({name:"WorldUpload24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M21 12c0-5-4-9-9-9s-9 4-9 9 4 9 9 9M3.6 9h16.8M3.6 15H12m-.4-12a17 17 0 0 0 0 18m.9-18c1.7 2.7 2.5 5.8 2.5 9"
            />
            <path
                fill="none"
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `}),hg=b({name:"X24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18 6 6 18M6 6l12 12"
            />
        </svg>
    `}),fg=b({name:"Folder48Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M38 38c2 0 4-2 4-4V18c0-2-2-4-4-4H24l-6-6h-8c-2 0-4 2-4 4v22c0 2 2 4 4 4h28Z"
            />
        </svg>
    `}),$d=b({name:"FolderOff48Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M13.9 8H18l6 6h14a4 4 0 0 1 4 4v16a4 4 0 0 1-.4 1.7M32.1 38H10a4 4 0 0 1-4-4V11.9"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 6 36 36"
            />
        </svg>
    `}),pg=b({name:"Kyc48Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `}),yd=b({name:"Api64Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-fill-color"].value}
                d="m32 3 26 12.5v31L32 61 6 46.5v-31L32 3Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20.6 25.1a6 6 0 0 1 8.4 2l-10.4 6.4a6 6 0 0 1 2-8.4Zm15.7 16a4.5 4.5 0 0 1-6.3 0l6.3-6.3a4.5 4.5 0 0 1 0 6.3ZM58 15.5l-18.2 8.7M6 15.5l4 1.5c5 1.9 8.4 5.7 10.3 8.3M32 61V50.3M58 29a14 14 0 0 1-21.5 11.9m-8.3-4.4 3.2 3.2m.4-6.7 3.1 3.2"
            />
        </svg>
    `}),gg=b({name:"CircleDashes64Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19.1 33.8A13 13 0 0 1 32 19c2 0 3.8.4 5.4 1.2m7.5 10A13 13 0 0 1 32 45c-2 0-3.8-.4-5.4-1.2"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M6 31.3A26 26 0 0 1 33.7 6m12 3.7a26 26 0 0 1 8 36.6M44.3 55A25.9 25.9 0 0 1 8.7 43.5"
            />
        </svg>
    `}),mg=b({name:"Rocket64Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M57.7 6.7c0-.2-.2-.4-.4-.4-6.8-1.7-22.5 4.2-31 12.8a36.8 36.8 0 0 0-4.1 4.9c-2.7-.3-5.3 0-7.5.9C8.4 27.7 6.5 34.9 6 38a1.1 1.1 0 0 0 1.2 1.3l10.2-1 .1 2.2c0 .5.3 1 .7 1.4l3.9 4c.4.3.9.5 1.4.6l2.3.1-1.2 10.2A1.1 1.1 0 0 0 26 58c3.2-.5 10.4-2.4 13.2-8.7 1-2.2 1.2-4.8 1-7.4 1.7-1.3 3.3-2.7 4.8-4.2 8.6-8.5 14.5-23.9 12.8-31Zm-20.4 20a5.4 5.4 0 0 1 3.8-9.1 5.4 5.4 0 0 1 3.8 9.1 5.3 5.3 0 0 1-7.6 0ZM13.7 44c-1.2.2-2.4.7-3.3 1.6C8.2 47.8 8 56 8 56s8.2-.2 10.4-2.4c.9-.9 1.5-2 1.6-3.3"
            />
        </svg>
    `}),vg=b({name:"CryptoBtc24Icon",svgTemplate:u`
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
    `}),wg=b({name:"CryptoCkBtc24Icon",svgTemplate:u`
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
    `}),xd="0 0 58 58",kd=Vu`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`,bg=b({name:"CryptoIcp16Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${xd}"
        >
            ${kd}
        </svg>
    `}),$g=b({name:"CryptoIcp24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="24"
            height="24"
            viewBox="${xd}"
        >
            ${kd}
        </svg>
    `}),yg=b({name:"EntrepotLogo144Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"](String(x.brandPrimary.foregroundColor))}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="134"
            height="144"
            viewBox="0 0 134 144"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `}),Sd=b({name:"BrandDiscord24Icon",svgTemplate:u`
        <svg
            fill=${H["toniq-icon-fill-color"]("#5865f2")}
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
    `}),xg=b({name:"BrandFacebookLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${H["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `}),kg=b({name:"BrandGoogleLogo24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${H["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `}),Sg=b({name:"BrandIcScan24Icon",svgTemplate:u`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `}),Cd=b({name:"BrandInstagram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${H["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
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
    `}),Cg=b({name:"BrandInstagramFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `}),Td=b({name:"BrandTelegram24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${H["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),Id=b({name:"BrandTiktok24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${H["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `}),Tg=b({name:"BrandTiktokFlat24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `}),Ed=b({name:"BrandTwitch24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Ad=b({name:"BrandTwitter24Icon",svgTemplate:u`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),Ze={"core-16":[up,hp,Kt],"core-24":[fp,pp,Ki,gp,mp,Qi,ld,vp,wp,bp,$p,yp,xp,kp,cd,dd,Sp,Cp,ud,Tp,Ip,Ep,hd,fd,Ap,Mp,Pp,Bp,pd,_p,Lp,qp,Rp,Np,Dp,zp,Op,jp,Fp,Hp,Vp,gd,Up,Zp,Wp,Gp,Yp,Jp,Xp,Kp,md,vd,Qp,eg,tg,rg,lg,Yr,cg,dg,ug,hg],"core-48":[fg,$d,pg],"core-64":[yd,gg,mg],cryptocurrencies:[vg,wg,bg,$g],logos:[yg],"third-party-brands":[Sd,xg,kg,Sg,Cd,Cg,Td,Id,Tg,Ed,Ad]},Ig=oc({Discord:"",Instagram:"",Telegram:"",TikTok:"",Twitch:"",Twitter:"",website:""}),Eg=Ig.defaultValue,Md={Discord:Sd,Instagram:Cd,Telegram:Td,TikTok:Id,Twitch:Ed,Twitter:Ad,website:hd},tl="toniq-",{defineElement:X,defineElementNoInputs:Ag}=Oi({assertInputs:e=>{if(!e.tagName.startsWith(tl))throw new Error(`Tag name should start with '${tl}' but got '${e.tagName}'`)}}),ht=X()({tagName:"toniq-bold-space",styles:m`
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
            ${V.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return u`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `}}),T=X()({tagName:"toniq-icon",styles:m`
        :host {
            display: inline-flex;
            ${A["vira-icon-fill-color"].name}: ${f["toniq-icon-fill-color"].value}
            ${A["vira-icon-stroke-color"].name}: ${f["toniq-icon-stroke-color"].value}
            ${A["vira-icon-stroke-width"].name}: ${f["toniq-icon-stroke-width"].value}
        }
    `,renderCallback({inputs:e}){return u`
            <${oe.assign(e)}></${oe}>
        `}}),ii=m`8px`;var hr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(hr||{});const G=X()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${V.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ce};
        }

        :host(:hover) button {
            ${D(x.accentPrimaryHover)};
        }

        :host(:active) button {
            ${D(x.accentPrimaryActive)};
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
            ${D(x.accentPrimary)};
            padding: 10px;
            transition: color ${W.interaction},
                background-color ${W.interaction},
                border-color ${W.interaction};
        }

        ${nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${D(x.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${D(x.pagePrimary)};
            border-color: ${x.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${mt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${x.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${x.accentPrimaryActive.backgroundColor};
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
        `}});function Mg(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=ra(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(h=>i==="+"?h>l:h<l).sort((h,p)=>i==="+"?h-p:p-h);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function Pg(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(p,v){let g=parseFloat(p);return/%/.test(p)&&(g/=100,g*=v),g}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),h=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:h}}}function Bg(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Pd(e){let t=[];for(const r of e.children)t=t.concat(r,Pd(r));return t}function _g(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Pd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const h=d.getBoundingClientRect();if(t&&!Bg(r,h,a))continue;const p=window.getComputedStyle(d);let[v,g]=p.getPropertyValue("scroll-snap-align").split(" ");typeof g>"u"&&(g=v);const w=i==="x"?g:v,$=h[s]-r[s]+e[c];switch(w){case"none":break;case"start":n[i].start.push($);break;case"center":n[i].center.push($+h[l]/2);break;case"end":n[i].end.push($+h[l]);break}}}return n}function ra(e){const t=e.getBoundingClientRect(),r=Pg(e),n=_g(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:rl([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:rl([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function rl(e){return Array.from(new Set(e))}const Jr="templates-container",Lg=4e3;var ai=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(ai||{});const he=X()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${A1(`.${Jr}`)}

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

        .arrow ${T} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${e["toniq-carousel-arrow-margin"].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${D(x.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{vo({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Lg)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=nl(t.scrollSnapPositions,0),i=nl(t.scrollSnapPositions,-1);return u`
            <div
                ${ir(()=>{r({scrollSnapPositions:ra(si(n)).x})})}
                class=${Jr}
                ${S("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${T.assign({icon:Ki})}
                        class=${me({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${S("click",()=>{vo({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${T}>
                </div>
                ${e.templates.map(a=>u`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${T.assign({icon:Qi})}
                        class=${me({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${S("click",()=>{vo({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${T}>
                </div>
            </div>
        `}});function nl(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function si(e){const t=e.shadowRoot.querySelector(`.${Jr}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function vo({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=si(e),i=o.clientWidth,a=ra(si(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const h=qg(e,t),p=ol(o.scrollLeft,a,!1),v=t==="right"?1:-1,g=(o.clientWidth-h*3)*v,w=ol((p||0)+g,a,!0);t==="right"&&w>p?o.scrollTo({behavior:"smooth",left:w}):t==="left"&&w<p?o.scrollTo({behavior:"smooth",left:w}):Mg(o,t)}}function qg(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function ol(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const Ue=X()({tagName:"toniq-checkbox",events:{checkedChange:Z()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Ae("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Ae("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Ae("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Ae("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Ae("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>m`
        :host {
            ${V.boldParagraphFont};
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
            ${mt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=u`
            <span class="checkbox ${e.checked?"checked":""}">
                <${T.assign({icon:cd})}
                    class="check-mark ${me({hidden:!e.checked})}"
                ></${T}>
            </span>
        `,o=u`
            <slot
                class=${me({label:!0,checked:e.checked})}
            >
                <span
                    class=${me({label:!0,checked:e.checked})}
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
        `}});var li=(e=>(e.Default="default",e.Secondary="secondary",e))(li||{});const wo=X()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${V.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${D(x.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${D(x.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?u`
                  <${T.assign({icon:e.icon})}></${T}>
              `:"";return u`
            ${t}
            <slot>${e.text}</slot>
        `}}),Rg="data-test-id",Ct=rt(class extends je{constructor(e){super(e),this.element=Ng(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(Rg,e),ve}});function Ng(e,t,r){Dg(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function Dg(e,t){if(e.type!==gr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var ci=(e=>(e.Up="up",e.Down="down",e))(ci||{});const qr=X()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:Z(),openChange:Z()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${V.boldParagraphFont};
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
            ${D(x.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${D(x.pagePrimary)}
            ${yn.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${yn.popupShadowReversed};
        }

        .selected-label-prefix {
            ${V.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ce};
        }

        .select-options .option.selected {
            ${D(x.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${x.accentTertiary.backgroundColor};
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
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?u`
                  <${T.assign({icon:n.icon})}
                      ${Ct("rendered-input-icon")}
                  ></${T}>
              `:"",s=n.selectedLabelPrefix?u`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return u`
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
                        <${T.assign({icon:dd})}
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
        `}}),Ee=X()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>!!e.linkDisabled},events:{routeChangeTriggered:Z()},styles:({hostClasses:e})=>m`
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
            color: ${x.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${x.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} a {
            cursor: default;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){if(e.linkDisabled){o.preventDefault();return}e.treatAsRouteChange&&Ui(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?u`
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
            `}}),di=360,Bd=8;function _d(e){return(e-Bd)/2}const Et=Fe({"main-image-size":di,"secondary-image-size":_d(di)}),Ne=X()({tagName:"toniq-featured-flip-card-footer",styles:m`
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
            max-width: calc(${Et["secondary-image-size"].value} * 2);
        }

        ${Ee} ${G} {
            width: 100%;
        }

        ${Ee} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Et["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:Z(),footerFlipCardButtonClick:Z()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?qe(n).filter(i=>!!n[i]).map(i=>{const a=n[i],s=Md[i];return u`
                          <${Ee.assign({newTab:!0,url:a})}>
                              <${T.assign({icon:s})}></${T}>
                          </${Ee}>
                      `}):"";return u`
            <div class="buttons">
                ${e.viewMoreButtonUrl?u`
                          <${Ee.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${S(Ee.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${G.assign({text:e.viewMoreButtonText,buttonStyle:hr.Outline})}></${G}>
                          </${Ee}>
                      `:u`
                          <${G.assign({text:e.viewMoreButtonText,buttonStyle:hr.Outline})}
                              ${S("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${G}>
                      `}
                ${e.flipCardButtonText?u`
                          <${G.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${S("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${G}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function zg(e){return!!e}function Ld(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Og({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function qd(e){return e?e instanceof Error?e.message:xn(e,"message")?String(e.message):String(e):""}function bo(e){return e instanceof Error?e:new Error(qd(e))}function jg(e){return!!e&&typeof e=="object"}const Fg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function xn(e,t){return e?Fg.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function fr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Rd(e,t,r=!1,n={}){const o=fr(e),i=new Set(fr(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!xn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||Nd(l,c,s,r,n[a]??{})})}function Nd(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{xn(t,"constructor")&&(!xn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(h=>{try{Nd(l,h,r,n,o);return}catch(p){return new Error(`entry at index "${c}" did not match expected shape: ${qd(p)}`)}}).filter(zg).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):jg(t)&&Rd(e,t,n,o)}function na(e){return Array.isArray(e)?"array":typeof e}function kn(e,t){return na(e)===t}function Hg(e,t,r){if(!kn(e,t))throw new TypeError(`'${r}' is of type '${na(e)}' but type '${t}' was expected.`)}function il({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(kn(r,"object")?Rd(n,r):Hg(n,na(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function Vg(e,t){return fr(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ug(e,t){return Vg(e,r=>!t.includes(r))}function Dd(e,t){let r=!1;const n=fr(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(fr(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Zg(e){const t=zn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class Wg extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function Gg(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new Wg(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function zn(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${zn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}const Yg="px";function Rr(e){return Jg(e,Yg)}function Jg(e,t){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Xg(e,t){return e<t}function Kg(e,t){return e>t}const al={width:250,height:250};function Qg({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?Kg:Xg)(t.width/t.height,e.width/e.height)?"width":"height"}function $o({box:e,constraint:t,constraintType:r}){const n=Qg({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function zd({box:e,ratio:t}){return Dd(e,(r,n)=>n*t)}function ui({box:e,min:t,max:r}){return Dd(e,(n,o)=>Og({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function Od({min:e,max:t,box:r}){const n=jd({min:e,max:t,box:r}),o=zd({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||al.height),width:Math.floor(o.width||(e==null?void 0:e.width)||al.width)}}function jd({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?$o({box:r,constraint:e,constraintType:"min"}):1,o=t?$o({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=zd({ratio:i,box:r});return(e?$o({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function e2(e){const t=t2(e);return kn(t,"object")||kn(t,"array")}function t2(e){const t=il({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=r2(e);return il({jsonString:r,errorHandler:()=>{}})}function r2(e){return Ld(e).replace(/,\s*([}\]])/,"$1")}const oa="vir-resizable-image";function n2(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Rt=n2();function o2(){try{if(!Rt||!Rt.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function ia(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const I=Promise;function O(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function Tt(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function He(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function aa(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const hi="local-forage-detect-blob-support";let Nr;const Se={},i2=Object.prototype.toString,kr="readonly",On="readwrite";function a2(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function s2(e){return new I(function(t){var r=e.transaction(hi,On),n=ia([""]);r.objectStore(hi).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function l2(e){return typeof Nr=="boolean"?I.resolve(Nr):s2(e).then(function(t){return Nr=t,Nr})}function Sn(e){var t=Se[e.name],r={};r.promise=new I(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function fi(e){var t=Se[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function pi(e,t){var r=Se[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function Fd(e,t){return new I(function(r,n){if(Se[e.name]=Se[e.name]||Zd(),e.db)if(t)Sn(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=Rt.open.apply(Rt,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(hi)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),fi(e)}})}function sa(e){return Fd(e,!1)}function la(e){return Fd(e,!0)}function Hd(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function c2(e){return new I(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function Vd(e){var t=a2(atob(e.data));return ia([t],{type:e.type})}function Ud(e){return e&&e.__local_forage_encoded_blob}function d2(e){var t=this,r=t._initReady().then(function(){var n=Se[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return Tt(r,e,e),r}function u2(e){Sn(e);for(var t=Se[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,sa(e).then(o=>(e.db=o,Hd(e)?la(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw pi(e,o),o})}function Ve(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return I.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),la(e)}).then(()=>u2(e).then(function(){Ve(e,t,r,n-1)})).catch(r);r(i)}}function Zd(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function h2(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=Se[r.name];o||(o=Zd(),Se[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=d2);var i=[];function a(){return I.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return I.all(i).then(function(){return r.db=o.db,sa(r)}).then(function(d){return r.db=d,Hd(r,t._defaultConfig.version)?la(r):d}).then(function(d){r.db=o.db=d,t._dbInfo=r;for(var h=0;h<c.length;h++){var p=c[h];p!==t&&(p._dbInfo.db=r.db,p._dbInfo.version=r.version)}})}function f2(e,t){var r=this;e=He(e);var n=new I(function(o,i){r.ready().then(function(){Ve(r._dbInfo,kr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),Ud(d)&&(d=Vd(d)),o(d)},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return O(n,t),n}function p2(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){Ve(r._dbInfo,kr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),d=1;c.onsuccess=function(){var h=c.result;if(h){var p=h.value;Ud(p)&&(p=Vd(p));var v=e(p,h.key,d++);v!==void 0?o(v):h.continue()}else o()},c.onerror=function(){i(c.error)}}catch(h){i(h)}})}).catch(i)});return O(n,t),n}function g2(e,t,r){var n=this;e=He(e);var o=new I(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,i2.call(t)==="[object Blob]"?l2(s.db).then(function(l){return l?t:c2(t)}):t}).then(function(l){Ve(n._dbInfo,On,function(c,d){if(c)return a(c);try{var h=d.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var p=h.put(l,e);d.oncomplete=function(){l===void 0&&(l=null),i(l)},d.onabort=d.onerror=function(){var v=p.error?p.error:p.transaction.error;a(v)}}catch(v){a(v)}})}).catch(a)});return O(o,r),o}function m2(e,t){var r=this;e=He(e);var n=new I(function(o,i){r.ready().then(function(){Ve(r._dbInfo,On,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;i(d)}}catch(d){i(d)}})}).catch(i)});return O(n,t),n}function v2(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Ve(t._dbInfo,On,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return O(r,e),r}function w2(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Ve(t._dbInfo,kr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return O(r,e),r}function b2(e,t){var r=this,n=new I(function(o,i){if(e<0){o(null);return}r.ready().then(function(){Ve(r._dbInfo,kr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,d=l.openKeyCursor();d.onsuccess=function(){var h=d.result;if(!h){o(null);return}e===0||c?o(h.key):(c=!0,h.advance(e))},d.onerror=function(){i(d.error)}}catch(h){i(h)}})}).catch(i)});return O(n,t),n}function $2(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Ve(t._dbInfo,kr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var d=l.result;if(!d){n(c);return}c.push(d.key),d.continue()},l.onerror=function(){o(l.error)}}catch(d){o(d)}})}).catch(o)});return O(r,e),r}function y2(e,t){t=aa.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=I.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?I.resolve(n._dbInfo.db):sa(e).then(s=>{const l=Se[e.name],c=l.forages;l.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Sn(e);const c=Se[e.name],d=c.forages;s.close();for(let p=0;p<d.length;p++){const v=d[p];v._dbInfo.db=null,v._dbInfo.version=l}return new I((p,v)=>{const g=Rt.open(e.name,l);g.onerror=w=>{g.result.close(),v(w)},g.onupgradeneeded=()=>{var w=g.result;w.deleteObjectStore(e.storeName)},g.onsuccess=()=>{const w=g.result;w.close(),p(w)}}).then(p=>{c.db=p;for(let v=0;v<d.length;v++){const g=d[v];g._dbInfo.db=p,fi(g._dbInfo)}}).catch(p=>{throw(pi(e,p)||I.resolve()).catch(()=>{}),p})}):o=a.then(s=>{Sn(e);const l=Se[e.name],c=l.forages;s.close();for(var d=0;d<c.length;d++){const p=c[d];p._dbInfo.db=null}return new I((p,v)=>{var g=Rt.deleteDatabase(e.name);g.onerror=()=>{const w=g.result;w&&w.close(),v(g.error)},g.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},g.onsuccess=()=>{const w=g.result;w&&w.close(),p(w)}}).then(p=>{l.db=p;for(var v=0;v<c.length;v++){const g=c[v];fi(g._dbInfo)}}).catch(p=>{throw(pi(e,p)||I.resolve()).catch(()=>{}),p})})}return O(o,t),o}var x2={_driver:"asyncStorage",_initStorage:h2,_support:o2(),iterate:p2,getItem:f2,setItem:g2,removeItem:m2,clear:v2,length:w2,key:b2,keys:$2,dropInstance:y2};function k2(){return typeof openDatabase=="function"}var Ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",S2="~~local_forage_type~",sl=/^~~local_forage_type~([^~]+)~/,Cn="__lfsc__:",gi=Cn.length,ca="arbf",mi="blob",Wd="si08",Gd="ui08",Yd="uic8",Jd="si16",Xd="si32",Kd="ur16",Qd="ui32",eu="fl32",tu="fl64",ll=gi+ca.length,cl=Object.prototype.toString;function ru(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),d=new Uint8Array(c);for(n=0;n<r;n+=4)i=Ge.indexOf(e[n]),a=Ge.indexOf(e[n+1]),s=Ge.indexOf(e[n+2]),l=Ge.indexOf(e[n+3]),d[o++]=i<<2|a>>4,d[o++]=(a&15)<<4|s>>2,d[o++]=(s&3)<<6|l&63;return c}function vi(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=Ge[t[n]>>2],r+=Ge[(t[n]&3)<<4|t[n+1]>>4],r+=Ge[(t[n+1]&15)<<2|t[n+2]>>6],r+=Ge[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function C2(e,t){var r="";if(e&&(r=cl.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&cl.call(e.buffer)==="[object ArrayBuffer]")){var n,o=Cn;e instanceof ArrayBuffer?(n=e,o+=ca):(n=e.buffer,r==="[object Int8Array]"?o+=Wd:r==="[object Uint8Array]"?o+=Gd:r==="[object Uint8ClampedArray]"?o+=Yd:r==="[object Int16Array]"?o+=Jd:r==="[object Uint16Array]"?o+=Kd:r==="[object Int32Array]"?o+=Xd:r==="[object Uint32Array]"?o+=Qd:r==="[object Float32Array]"?o+=eu:r==="[object Float64Array]"?o+=tu:t(new Error("Failed to get type for BinaryArray"))),t(o+vi(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=S2+e.type+"~"+vi(this.result);t(Cn+mi+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function T2(e){if(e.substring(0,gi)!==Cn)return JSON.parse(e);var t=e.substring(ll),r=e.substring(gi,ll),n;if(r===mi&&sl.test(t)){var o=t.match(sl);n=o[1],t=t.substring(o[0].length)}var i=ru(t);switch(r){case ca:return i;case mi:return ia([i],{type:n});case Wd:return new Int8Array(i);case Gd:return new Uint8Array(i);case Yd:return new Uint8ClampedArray(i);case Jd:return new Int16Array(i);case Kd:return new Uint16Array(i);case Xd:return new Int32Array(i);case Qd:return new Uint32Array(i);case eu:return new Float32Array(i);case tu:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var da={serialize:C2,deserialize:T2,stringToBuffer:ru,bufferToString:vi};function nu(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function I2(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new I(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){nu(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=da,o}function ot(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):nu(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function E2(e,t){var r=this;e=He(e);var n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=a.serializer.deserialize(d)),o(d)},function(l,c){i(c)})})}).catch(i)});return O(n,t),n}function A2(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var d=c.rows,h=d.length,p=0;p<h;p++){var v=d.item(p),g=v.value;if(g&&(g=a.serializer.deserialize(g)),g=e(g,v.key,p+1),g!==void 0){o(g);return}}o()},function(l,c){i(c)})})}).catch(i)});return O(n,t),n}function ou(e,t,r,n){var o=this;e=He(e);var i=new I(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(d,h){h?s(h):c.db.transaction(function(p){ot(p,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,d],function(){a(l)},function(v,g){s(g)})},function(p){if(p.code===p.QUOTA_ERR){if(n>0){a(ou.apply(o,[e,l,r,n-1]));return}s(p)}})})}).catch(s)});return O(i,r),i}function M2(e,t,r){return ou.apply(this,[e,t,r,1])}function P2(e,t){var r=this;e=He(e);var n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return O(n,t),n}function B2(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ot(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return O(r,e),r}function _2(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ot(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return O(r,e),r}function L2(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){ot(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var d=c.rows.length?c.rows.item(0).key:null;o(d)},function(l,c){i(c)})})}).catch(i)});return O(n,t),n}function q2(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ot(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],d=0;d<l.rows.length;d++)c.push(l.rows.item(d).key);n(c)},function(s,l){o(l)})})}).catch(o)});return O(r,e),r}function R2(e){return new I(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function N2(e,t){t=aa.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new I(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(R2(a))}).then(function(i){return new I(function(a,s){i.db.transaction(function(l){function c(v){return new I(function(g,w){l.executeSql(`DROP TABLE IF EXISTS ${v}`,[],function(){g()},function($,y){w(y)})})}for(var d=[],h=0,p=i.storeNames.length;h<p;h++)d.push(c(i.storeNames[h]));I.all(d).then(function(){a()}).catch(function(v){s(v)})},function(l){s(l)})})}):o=I.reject("Invalid arguments"),O(o,t),o}var D2={_driver:"webSQLStorage",_initStorage:I2,_support:k2(),iterate:A2,getItem:E2,setItem:M2,removeItem:P2,clear:B2,length:_2,key:L2,keys:q2,dropInstance:N2};function z2(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function iu(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function O2(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function j2(){return!O2()||localStorage.length>0}function F2(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=iu(e,t._defaultConfig),j2()?(t._dbInfo=r,r.serializer=da,I.resolve()):I.reject()}function H2(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return O(r,e),r}function V2(e,t){var r=this;e=He(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return O(n,t),n}function U2(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(i)===0){var h=localStorage.getItem(d);if(h&&(h=o.serializer.deserialize(h)),h=e(h,d.substring(a),l++),h!==void 0)return h}}});return O(n,t),n}function Z2(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return O(n,t),n}function W2(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return O(r,e),r}function G2(e){var t=this,r=t.keys().then(function(n){return n.length});return O(r,e),r}function Y2(e,t){var r=this;e=He(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return O(n,t),n}function J2(e,t,r){var n=this;e=He(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new I(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,d){if(d)s(d);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(h){(h.name==="QuotaExceededError"||h.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(h),s(h)}})})});return O(o,r),o}function X2(e,t){if(t=aa.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new I(function(i){e.storeName?i(iu(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=I.reject("Invalid arguments"),O(o,t),o}var K2={_driver:"localStorageWrapper",_initStorage:F2,_support:z2(),iterate:U2,getItem:V2,setItem:J2,removeItem:Y2,clear:H2,length:G2,key:Z2,keys:W2,dropInstance:X2};const Q2=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),em=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Q2(e[n],t))return!0;n++}return!1},au=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Ht={},dl={},Mt={INDEXEDDB:x2,WEBSQL:D2,LOCALSTORAGE:K2},tm=[Mt.INDEXEDDB._driver,Mt.WEBSQL._driver,Mt.LOCALSTORAGE._driver],Xr=["dropInstance"],yo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Xr),rm={description:"",driver:tm.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function nm(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function xo(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(au(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class ua{constructor(t){for(let r in Mt)if(Mt.hasOwnProperty(r)){const n=Mt[r],o=n._driver;this[r]=o,Ht[o]||this.defineDriver(n)}this._defaultConfig=xo({},rm),this._config=xo({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new I(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=yo.concat("_initStorage");for(let p=0,v=c.length;p<v;p++){const g=c[p];if((!em(Xr,g)||t[g])&&typeof t[g]!="function"){a(l);return}}(function(){const p=function(v){return function(){const g=new Error(`Method ${v} is not implemented by the current driver`),w=I.reject(g);return O(w,arguments[arguments.length-1]),w}};for(let v=0,g=Xr.length;v<g;v++){const w=Xr[v];t[w]||(t[w]=p(w))}})();const h=function(p){Ht[s]&&console.info(`Redefining LocalForage driver: ${s}`),Ht[s]=t,dl[s]=p,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(h,a):h(!!t._support):h(!0)}catch(s){a(s)}});return Tt(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Ht[t]?I.resolve(Ht[t]):I.reject(new Error("Driver not found."));return Tt(o,r,n),o}getSerializer(t){const r=I.resolve(da);return Tt(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return Tt(n,t,t),n}setDriver(t,r,n){const o=this;au(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(d){return o._extend(d),a(),o._ready=o._initStorage(o._config),o._ready}function l(d){return function(){let h=0;function p(){for(;h<d.length;){let g=d[h];return h++,o._dbInfo=null,o._ready=null,o.getDriver(g).then(s).catch(p)}a();const v=new Error("No available storage method found.");return o._driverSet=I.reject(v),o._driverSet}return p()}}const c=this._driverSet!==null?this._driverSet.catch(()=>I.resolve()):I.resolve();return this._driverSet=c.then(()=>{const d=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(d).then(h=>{o._driver=h._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const d=new Error("No available storage method found.");return o._driverSet=I.reject(d),o._driverSet}),Tt(this._driverSet,r,n),this._driverSet}supports(t){return!!dl[t]}_extend(t){xo(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=yo.length;t<r;t++)nm(this,yo[t])}createInstance(t){return new ua(t)}}const om=new ua,im=om;async function su(){return await caches.open(oa)}async function am(e){return await(await su()).match(e)}const ul=im.createInstance({name:oa});async function sm(e,t){await(await su()).put(e,t)}const ko=new Map;async function lm(e,t){var n;if(t=t,!ko.has(e)){const o=zn();ko.set(e,o.promise);try{const i=new Request(e),a=t?await am(i):void 0,s=a??await fetch(i),l=t?await ul.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{ul.setItem(e,c)}catch{}const d={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{sm(i,s)}catch{}o.resolve(d)}catch(i){throw o.reject(i),i}}const r=await ko.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var C;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(C||(C={}));const cm=[C.Text,C.Json],dm=[C.Audio];function hl(e){return cm.includes(e)}function um(e){return dm.includes(e)}async function hm(e,t){return e.includes("video")?C.Video:e.includes("svg")||t.includes("<svg")?C.Svg:e.includes("html")||t.includes("<html")?C.Html:e2(t)?C.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?C.Text:e.includes("audio")?C.Audio:e.includes("pdf")?C.Pdf:C.Image}function fm({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===C.Image?dt(u`
            <img src=${r} />
        `):e===C.Video?dt(u`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===C.Text||e===C.Json?dt(u`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===C.Audio?dt(u`
                <audio controls src=${r}></audio>
            `):t}function pm(e,t,r){if(t===C.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===C.Html&&r)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function fl({imageUrl:e,blockAutoPlay:t,textTransformer:r=i=>i,allowPersistentCache:n,removeConsoleLogs:o}){const i=await lm(e,n);if(!i.ok)throw new Error(`Failed to load '${e}'`);const a=await hm(i.contentType,i.text),s=r(pm(i.text,a,o));return{templateString:fm({imageText:s,imageType:a,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:a}}class wi extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let gm=!1;function mm(){return gm}function vm(e){return e?e instanceof Error?e.message:ym(e,"message")?String(e.message):String(e):""}function wm(e){return e instanceof Error?e:new Error(vm(e))}function bm(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}const $m=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ym(e,t){return e?$m.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function xm(e){const t=lu();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function lu(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${lu.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function cu(e,t,r){return bm({callback(){return km(e,t,r),!0},fallbackValue:!1})}function km(e,t,r){if(e==="*")r||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var vt;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(vt||(vt={}));const Sm=globalThis.crypto;function Cm(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Sm.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Tm(e,t,r){return r.type===e&&r.direction===t}function Im(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function Em({message:e,verifyChildData:t,iframeElement:r},n,o,i,a){if(!r)throw new Error("No iframe element was provided.");let s=0,l=!1,c,d,h,p=!1;const v={...e,direction:vt.FromParent,messageId:Cm(32)},g=e.type;function w(y){try{if(!cu(n,y,!1))return;const k=y.data;if(k.type==="error")throw new Error(`Child threw an error: ${k.data}`);if(mm(),k&&p&&Tm(g,vt.FromChild,k)&&k.messageId===v.messageId){let M=!1;try{M=t?t(k.data):!0}catch{}if(!M)return;l=!0,d=y,c=k}}catch(k){h=wm(k)}}a.addEventListener("message",w);const $=Date.now();for(;!l&&Date.now()-$<o&&!h;){if(!r.isConnected)throw new wi;const y=r.contentWindow;y&&(p=!0,y.postMessage(v,{targetOrigin:n})),await xm(i||Im(s)),s++}if(a.removeEventListener("message",w),h)throw h;if(!l)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!d)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:d}}function Am({timeoutMs:e=1e4}={timeoutMs:1e4}){return{async sendMessageToChild(t){if(t.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await Em(t,t.childOrigin,t.timeoutMs||e,t.intervalMs,t.globalObject??globalThis)},listenForParentMessages(t){const r=t.globalObject??globalThis;async function n(o){var l;if(!cu(t.parentOrigin,o,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const i=o.data,a=await t.listener({...i,originalEvent:o},()=>{r.removeEventListener("message",n)}),s={type:i.type,direction:vt.FromChild,data:a,messageId:i.messageId};r.parent.postMessage(s,{targetOrigin:t.parentOrigin})}r.addEventListener("message",n)}}}var pe;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(pe||(pe={}));var K;(function(e){e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded"})(K||(K={}));const Be=Am({});async function Mm(e,t){const r=zn();e.onload=()=>{r.resolve()};try{await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.FrameReady},iframeElement:e,timeoutMs:t})}catch{await r.promise,await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.FrameReady},iframeElement:e,timeoutMs:t})}}async function Pm({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await Mm(n,s),i&&await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(d){return!!(d&&!isNaN(d.width)&&!isNaN(d.height)&&d.width&&d.height)}})).data;return await du({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.ImageElementLoaded},iframeElement:n,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function du({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const d={min:e,max:t,box:a??r},h=hl(i.imageType)||um(i.imageType)?ui(d):Od(d);c.style.width=Rr(Math.floor(h.width)),c.style.height=Rr(Math.floor(h.height));const p=ui({min:e,max:t,box:h});h.height<p.height?n.classList.add(pe.VerticallyCenter):n.classList.remove(pe.VerticallyCenter),n.style.width=Rr(p.width),n.style.height=Rr(p.height);const v=jd({min:e,max:t,box:a??r});if(s){if(v>3?await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.SizeDetermined,data:h},iframeElement:o,timeoutMs:l}),i.imageType===C.Html){const g=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},w={width:v*g.width,height:v*g.height};await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.SendScale,data:w},iframeElement:o,timeoutMs:l})}else if(hl(i.imageType)){const g=a??r;if(g.height<h.height){const w=h.width/g.width,$=h.height/g.height,y=Math.min(w,$);await Be.sendMessageToChild({childOrigin:window.location.origin,message:{type:K.SendScale,data:{height:y,width:y}},iframeElement:o,timeoutMs:l})}}}}const Dr={x:16,y:8};var Cl,Tl;function Bm(e,t,r,n){const o=Math.random(),i=u(Cl||(Cl=Vn([`
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
    `])),e.imageType,r??"",C.Svg,C.Html,C.Image,C.Video,C.Text,C.Json,C.Audio,C.Svg,C.Html,C.Image,C.Video,C.Text,C.Json,C.Audio,vt.FromChild,vt.FromChild,K.ImageElementLoaded,K.FrameReady,K.SendScale,K.SendScalingMethod,K.SendSize,K.ForceSize,K.SizeDetermined,C.Json,C.Text,Dr.y,n,C.Audio),a=u(Tl||(Tl=Vn([`
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
    `])),e.imageType,n?"allow-scrolling":"",C.Image,C.Svg,C.Video,C.Text,C.Json,C.Text,C.Json,C.Text,C.Json,C.Text,C.Json,Dr.y,Dr.x,C.Text,C.Json,Dr.y,o,t??"",i);return Ld(dt(a)).replace(String(o),`
${e.templateString}
`)}const _m=[C.Html,C.Video,C.Audio,C.Pdf],Lm=[C.Html,C.Text,C.Json];function pl({blockInteractionInput:e,imageType:t,allowScrolling:r}){return typeof e=="boolean"?!e:_m.includes(t)?!0:!!(r&&Lm.includes(t))}const qm=1e4,Rm={imageData:J0({async updateCallback(e,t){if(t.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const r={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!e.blockPersistentCache,removeConsoleLogs:!e.allowConsoleLogs};let n;try{n=await Gg(e.timeoutMs,fl(r))}catch{await Zg(1e3);try{n=await fl(r)}catch(i){throw i}}if(n)return n;throw new Error("no image data result")}}),error:void 0},zr=Di()({tagName:oa,stateInitStatic:Rm,events:{settled:Z(),imageDataCalculated:Z(),errored:Z()},styles:m`
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[So];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??qm;e.imageData.updateTrigger(Ug({...t,timeoutMs:a},["textTransformer"]),{textTransformer:t.textTransformer,updateTriggered(){e.error&&r({error:void 0}),n.classList.remove(pe.HideLoading),o(new i.settled(!1)),n.classList.remove(pe.VerticallyCenter)}});const s=t.min&&t.max?ui({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?Od({min:s,max:l,box:t.forcedOriginalImageSize}):void 0,d=Ka(e.imageData,"",$=>{if(o(new i.imageDataCalculated($)),$.imageType===C.Pdf)return u`
                        <iframe
                            src=${$.imageUrl}
                            ${sn(async y=>{try{await du({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:y,imageData:$,imageDimensions:l??{width:500,height:500},max:l,min:s,sendSizeMessage:!1,timeoutMs:a}),n[So]="",o(new i.settled(!0)),n.classList.add(pe.HideLoading)}catch(k){const M=bo(k);if(M instanceof wi)return;console.error(M),r({error:M}),o(new i.errored(M))}})}
                        ></iframe>
                    `;{const y=pl({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:$.imageType})&&!!t.allowScrolling;return u`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${Bm($,t.extraHtml,t.htmlSizeQuerySelector,y)}
                            ${sn(async k=>{try{const M=await Pm({min:s,max:l,host:n,iframeElement:k,imageData:$,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:a});n[So]=M,o(new i.settled(!0)),n.classList.add(pe.HideLoading)}catch(M){const q=bo(M);if(q instanceof wi)return;console.error(q),r({error:q}),o(new i.errored(q))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},$=>{r({error:$}),o(new i.errored(bo($)))}),h=Ka(e.imageData,gl,$=>pl({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:$.imageType})?"":gl,()=>""),p=e.imageData instanceof Error?e.imageData:e.error,v=p?m`
                  max-width: 100%;
                  max-height: 100%;
              `:c?m`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",g=m`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,w=u`
            <div class="frame-constraint" style=${v}>${d}</div>
        `;return u`
            ${de(!p,u`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${g}>
                ${de(!!p,u`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${p==null?void 0:p.message}</slot>
                        </div>
                    `,w)}
            </div>
            ${h}
        `}}),gl=u`
    <div class="click-cover"></div>
`,So="latest-frame-srcdoc",ut=X()({tagName:"toniq-flip-card",events:{flippedChange:Z()},styles:m`
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

        ${sg(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${x.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <div
                class="flip-wrapper ${me({flipped:e.flipped})}"
                ${S("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),ae=X()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:Z()},styles:m`
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
            ${V.h3Font};
            ${V.extraBoldFont};
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
            max-height: ${Et["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Et["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Bd}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${ut} {
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

        .card-face.front ${Ne} {
            margin-top: 24px;
        }

        .card-face.back ${Ne} {
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
            ${V.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var v,g,w;const a=e.mainImageSize||di,s=_d(a);zo({onElement:n,forCssVar:Et["main-image-size"],toValue:`${a}px`}),zo({onElement:n,forCssVar:Et["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(Ji).join(" "),c=u`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],h=u`
            <${T.assign({icon:gd})} slot="loading"></${T}>
        `,p=d?u`
                  <div class="big-image-wrapper">
                      <${zr.assign({imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}>
                          ${h}
                      </${zr}>
                  </div>
              `:"";return u`
            <${ut.assign({flipped:t.flipped})}
                ${S(Ne.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${p}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map($=>u`
                                    <div class="pic-wrapper">
                                        <${zr.assign({imageUrl:$,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}>
                                            ${h}
                                        </${zr}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${Ne.assign({viewMoreButtonText:l,flipCardButtonText:(v=e.infoParagraphs)!=null&&v.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${S(Ne.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Ne}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(g=e.infoParagraphs)==null?void 0:g.map($=>u`
                                    <p>${$}</p>
                                `)}
                    </div>
                    <${Ne.assign({viewMoreButtonText:l,flipCardButtonText:(w=e.infoParagraphs)!=null&&w.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${S(Ne.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${Ne}>
                </div>
            </${ut}>
        `}});function bi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>bi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function uu({value:e,allowed:t,blocked:r}){const n=t?bi({input:e,matcher:t}):!0,o=r?bi({input:e,matcher:r}):!1;return n&&!o}function ml(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(uu({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var $i=(e=>(e.Default="default",e.Outline="outline",e))($i||{});const Or=X()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:Z(),inputBlocked:Z()},styles:({hostClasses:e})=>m`
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
                background-color: ${x.pagePrimary.backgroundColor};
                border-color: ${x.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${T} {
                color: ${x.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${T} {
                color: ${x.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${x.pageSecondary.foregroundColor};
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
                background-color: ${x.accentTertiary.backgroundColor};
                font: ${V.paragraphFont};
                gap: 4px;
            }

            ${nt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${T} {
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
                color: ${x.accentTertiary.foregroundColor};
            }

            .suffix {
                ${V.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${mt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${Ce};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=ml({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?u`
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
                    ${S("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)uu({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:h}=ml({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(h))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${de(!!e.suffix,u`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});async function Nm(e){return navigator.clipboard.writeText(e)}const Dm="…";function zm(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${Dm}${n}`}function Om(e){return!(e%1)}function jm(e){return e.letterCount==null?4:Om(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const se=X()({tagName:"toniq-middle-ellipsis",events:{copied:Z()},cssVars:{"toniq-middle-ellipsis-text-color":x.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":x.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":x.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":x.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            /* 5 frames at 60 fps */
            transition: ${W.interaction};
            ${V.paragraphFont};
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
            box-shadow: 0 0 20px 100px ${x.pagePrimary.backgroundColor};
            background-color: ${x.pagePrimary.backgroundColor};
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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return u``;const i=e.text,a=jm(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?zm(i,a):i,h=c?i:"",p=s?pd:l?fd:void 0,v=p?u`
                  <${T.assign({icon:p})}></${T}>
              `:"",g=u`
            <span title=${h} class="text-content">
                ${de(!!e.copyOnClick,u`
                        <span
                            class=${me({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${S("click",w=>{var y,k;const $=(k=(y=w.currentTarget)==null?void 0:y.querySelector)==null?void 0:k.call(y,"a");if(!$)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");$.click()})}
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
                            ${g} ${v}
                        </a>
                    </button>
                `:l?u`
                    <button
                        class="text-wrapper copyable"
                        ${S("click",async()=>{await Nm(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${g} ${v}
                    </button>
                `:u`
                    ${g}
                `:u``}}),vl="...";function Fm(e,t,r=7,n=5){let o;e=Qt(e,1,t),r=Qt(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?Co(t-o,t):e>o?Co(Math.min(s.start,t-o),Math.min(s.end,t)):Co(1,Math.min(t,o+1));function c(h,p){return l.length+1!==t?p:[h]}const d=l[l.length-1];if(d&&d<t){const h=c(t,[vl,t]);return[...l,...h]}else return l[0]!==1?c(1,[1,vl]).concat(l):l}function Co(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}X()({tagName:"toniq-pagination",styles:m`
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
            ${D(x.accentSecondary)};
        }

        .control:hover {
            ${D(x.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${D(x.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${V.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${D(x.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${D(x.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:Z()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?u``:u`
                <button
                    ${S("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${T.assign({icon:Ki})}></${T}>
                </button>
                ${Fm(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?u`
                                <div class="page" disabled>${n}</div>
                            `:u`
                                <button
                                    class=${me({page:!0,selected:e.currentPage===n})}
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
                    <${T.assign({icon:Qi})}></${T}>
                </button>
            `}});const F=X()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:Z()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Ae("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Ae("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Ae("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Ae("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>m`
        :host {
            ${V.boldParagraphFont};
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
            ${mt};
        }

        .wrapper.disabled::before {
            ${mt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:_1()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return Hm(e.entries).map(i=>Vm(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function Hm(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${F.tagName} was given duplicate entry values.`),Object.values(t)}function Vm(e,t,r,n){const o=t===r.value,i=u`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return u`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${me({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}const _={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Vt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function Um(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${_.lowerLabelWrapper} .${_.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${_.upperLabelWrapper} .${_.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function Zm(e,t=8){const r=Um(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function To({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function pr(e){return Q1(e)&&e.min!==void 0&&e.max!==void 0}function yi(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${_.range}`);return(t==null?void 0:t.clientWidth)??0}function Io(e,t,r){return`${r?dp(e):e} ${t}`}function Wm({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Gm({value:e,double:t,min:r,max:n}){return t?pr(e)?{min:Qt(e.min,r,Math.min(e.max,n)),max:Qt(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:pr(e)?r:Qt(e,r,n)}function Ym({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:pr(e)?{min:mo(n,e.min),max:mo(n,e.max)}:mo(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function Eo(e,t,r){return r?t[e]||0:e}function Jm(e){return{actualLimits:Wm(e),actualValue:Gm(e)}}function Xm(e,t){var n,o,i;let r=!1;if(pr(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${_.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${_.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${_.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function hu(e,t){const{actualValue:r,actualLimits:n}=Jm({...e}),o=og(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=Ym({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=yi(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const st=16,wl=m`
    ${st}px
`,bl=m`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${wl};
    width: ${wl};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${W.interaction};
    ${D(x.accentPrimary)};
`,$l=m`
    transform: scale(1.2);
`;function Wt(e){requestAnimationFrame(()=>{const t=hu(e.instanceInputs,e).elementValue;Xm(t,e)&&(e.setAttribute("disabled","true"),Wt(e))})}const R=X()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:Z()},styles:m`
        :host {
            display: block;
        }

        .${B(_.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${D(x.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${D(x.accentPrimary)};
        }

        .${B(_.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${V.boldParagraphFont};
            ${Ce};
        }

        .${B(_.labelPixelMarginWrapper)},
            .${B(_.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${B(_.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${B(_.slider)} {
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

        .${B(_.lowerSlider)},
        .${B(_.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${B(_.slider)}::-moz-range-thumb {
            ${bl}
        }

        /* these selectors fail if combined with a comma */
        .${B(_.slider)}::-webkit-slider-thumb {
            ${bl}
        }

        /* these selectors fail if combined with a comma */
        .${B(_.slider)}::-webkit-slider-thumb:hover {
            ${$l}
        }

        /* these selectors fail if combined with a comma */
        .${B(_.slider)}::-moz-range-thumb:hover {
            ${$l}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Wt(e)}),e.addEventListener("keydown",()=>{Wt(e)}),e.addEventListener("keyup",()=>{Wt(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:h,rangeWidth:p}=hu({...e},t);if(Wt(t),pr(d))return v(a,d,h);return w(a,d,h);function v($,y,k){const M={left:St((p-st)*(y.min-k.min)/(k.max-k.min)+st/2),right:St((p-st)*(k.max-y.max)/(k.max-k.min)+st/2)},q=Io($.min,c,l),ee=Io($.max,c,l);requestAnimationFrame(()=>{const we=Zm(t);we!==o.labelOverlap&&i({labelOverlap:we})});const le=(k.max-y.max)/(k.max-k.min)>.5,te=To({value:y.min,limits:{min:k.min,max:y.max},flip:!0}),j=To({value:y.max,limits:{min:y.min,max:k.max},flip:!1}),re=o.labelOverlap&&le?o.labelOverlap:0,Dt=o.labelOverlap&&!le?o.labelOverlap:0;return u`
                <div
                    class="range"
                    ${ir(()=>{i({rangeWidth:yi(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${M.left}; right:${M.right}"
                    ></div>
                    <span
                        class="${_.labelOuterWrapper} ${_.lowerLabelWrapper}"
                        style="left: ${M.left}"
                    >
                        <span
                            class="${_.labelPercentMarginWrapper}"
                            style="margin-left: ${go(te)}"
                        >
                            <span
                                class="${_.labelPixelMarginWrapper}"
                                style="margin-right: ${St(Dt)}"
                                ${Ct(Vt.lowerLabel)}
                            >
                                ${q}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${_.labelOuterWrapper} ${_.upperLabelWrapper} ${_.rightAlignedLabelWrapper}"
                        style="right: ${M.right}"
                    >
                        <span
                            class="${_.labelPercentMarginWrapper}"
                            style="margin-right: ${go(j)}"
                        >
                            <span
                                class="${_.labelPixelMarginWrapper}"
                                style="margin-left: ${St(re)}"
                                ${Ct(Vt.upperLabel)}
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
                            class="${_.lowerSlider} ${_.slider}"
                            .min=${k.min}
                            .max=${k.max}
                            .value=${y.min}
                            ${S("input",we=>{const wt=we.target,zt={...$,min:Eo(Number(wt.value),s,l)};g(zt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${_.upperSlider} ${_.slider}"
                            step=${e.step}
                            .min=${k.min}
                            .max=${k.max}
                            .value=${y.max}
                            ${Ct(Vt.slider)}
                            ${S("input",we=>{const wt=we.target,zt={...$,max:Eo(Number(wt.value),s,l)};g(zt)})}
                        />
                    </div>
                </div>
            `}function g($){i({internalValue:$}),e.disabled||n(new r.valueChange($))}function w($,y,k){const M=St((p-st)*(k.max-y)/(k.max-k.min)+st/2),q=Io($,c,l),ee=To({value:y,limits:k,flip:!1});return u`
                <div
                    class="range"
                    ${ir(()=>{i({rangeWidth:yi(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${M}"></div>
                    <span
                        class="${_.labelOuterWrapper} ${_.rightAlignedLabelWrapper}"
                        style="right: ${M}"
                    >
                        <span
                            class="${_.labelPercentMarginWrapper}"
                            style="margin-right: ${go(ee)}"
                            ${Ct(Vt.label)}
                        >
                            ${q}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${_.slider}"
                        step=${e.step}
                        .min=${k.min}
                        .max=${k.max}
                        .value=${y}
                        ${Ct(Vt.slider)}
                        ${S("input",le=>{const te=le.target,j=Eo(Number(te.value),s,l);g(j)})}
                    />
                </div>
            `}}});var fu=(e=>(e.Default="default",e.TextOnly="text-only",e))(fu||{});const Ao=X()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>m`
        :host {
            ${V.boldParagraphFont};
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

            ${D(x.accentSecondary)};
            transition: color ${W.interaction},
                background-color ${W.interaction};
        }

        ${nt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${D(x.accentPrimary)};
        }

        :host(:hover) button {
            ${D(x.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${D(x.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${D(x.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${D(x.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${D(x.pageInteraction)};
            border-color: ${x.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${D(x.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${x.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${D(x.pageInteractionActive)};
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
        `}}),er=Ag({tagName:"toniq-tooltip",styles:m`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${x.accentPrimary.backgroundColor};
            ${yn.menuShadow};
            background-color: ${x.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return u`
            <slot></slot>
        `}}),Kr=X()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>m`
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return u`
            <div
                class="slot-wrapper"
                ${S("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${er}>${e.tooltipContent}</${er}>
            </div>
        `}}),Gt=X()({tagName:"toniq-top-tabs",events:{valueChange:Z()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>m`
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
            border-bottom: 1px solid ${x.pageTertiary.foregroundColor};
            transition: border-bottom-width ${W.interaction},
                border-color ${W.interaction};
        }

        button {
            ${ne};
            cursor: pointer;
            ${V.paragraphFont};
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
            ${V.boldFont};
            padding-bottom: calc(
                ${e["toniq-top-tabs-tab-vertical-padding"].value} -
                    ${e["toniq-top-tabs-selected-border-width"].value}
            );
        }

        li.selected {
            border-color: ${x.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return u`
            <ul role="tablist">
                ${e.tabs.map(n=>{const o=n.value===e.value;return u`
                        <li
                            ${Q0("tab")}
                            role="presentation"
                            class=${me({selected:o})}
                        >
                            <button
                                role="tab"
                                title=${n}
                                aria-selected=${o?"true":"false"}
                                ${S("click",()=>{e.value!==n.value&&t(new r.valueChange(n.value))})}
                            >
                                <${ht.assign({text:n.label})}></${ht}>
                            </button>
                        </li>
                    `})}
                <li></li>
                <li></li>
            </ul>
        `}}),pu=U({title:"Data",parent:void 0}),Tn=X()({tagName:"toniq-icon-book-viewer",styles:m`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${x.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return u`
            <${T.assign({icon:e.icon})}></${T}>
        `}}),jn=Object.values(Ze).reduce((e,t)=>(t.forEach(r=>{if(r.name in e)throw new Error(`Icon name duplicate: '${r.name}'`);e[r.name]=r}),e),{}),Km=Object.keys(jn).sort();function ha(e){return{controlType:L.Dropdown,initValue:e,options:["None",...Km]}}const gu={"CSS color":{controlType:L.Color,initValue:""},[String(f["toniq-icon-stroke-color"].name)]:{controlType:L.Color,initValue:""},[String(f["toniq-icon-fill-color"].name)]:{controlType:L.Color,initValue:""},[String(f["toniq-icon-stroke-width"].name)]:{controlType:L.Color,initValue:""},[String(f["toniq-icon-stroke-width"].name)]:{controlType:L.Number,initValue:2}};function xi(e){return Object.entries(e).filter(([,r])=>r!==""&&r!=null).map(([r,n])=>(r.toLowerCase()==="css color"&&(r="color"),tp(n,"number")&&(n=op({value:n,suffix:"px"})),`${r}: ${n};`)).join(`
`)}const Qm=U({title:"Social Urls",parent:pu,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return u`
                        <${Tn.assign({icon:n})}></${Tn}>
                    `}})}Object.entries(Md).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),Q=U({title:"Elements",parent:void 0}),ev=[{title:"basic",text:"Hello there"},{title:"constrained width",text:"Hello there, this text is much longer",extraStyle:m`
            ${ht} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `}],tv=U({title:ht.tagName,parent:Q,elementExamplesCallback({defineExample:e}){ev.forEach(t=>{e({title:t.title,stateInitStatic:{isBold:!1},styles:m`
                    .bold {
                        ${V.boldFont}
                    }

                    ${t.extraStyle??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${ht.assign({text:t.text})}
                            ${S("click",()=>{n({isBold:!r.isBold})})}
                            class=${me({bold:r.isBold})}
                        ></${ht}>
                        More text
                    `}})})}}),rv=U({parent:Q,title:G.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:hr.Secondary}},{name:"Outline",inputs:{buttonStyle:hr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:m`
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
                    `}})})}}),yl=m`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${he} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,nv=U({parent:Q,title:he.tagName,descriptionParagraphs:["Carousel that uses native scroll APIs.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:yl,renderCallback(){return u`
                    <${he.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:Ze["core-24"].map(t=>{const r=m`
                                padding: 24px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${he}>
                    <${he.assign({enableAutomaticCycling:!0,templates:Ze["core-24"].map(t=>{const r=m`
                                padding: 100px 24px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${he}>
                    <${he.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:Ze["core-24"].map(t=>{const r=B1({min:0,max:150}),n=m`
                                padding: 100px ${r}px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${n}></${T}>
                            `})})}></${he}>
                `}}),e({title:"banner style",styles:yl,renderCallback(){return u`
                    <${he.assign({enableAutomaticCycling:!0,style:ai.BannerStyle,templates:Ze["core-24"].map(t=>{const r=m`
                                /* make sure this width matches the ToniqCarousel width */
                                width: 800px;
                                max-width: 100%;
                                padding: 100px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-sizing: border-box;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}></${he}>
                    <${he.assign({enableAutomaticCycling:!0,style:ai.BannerStyle,templates:[Ze["core-24"][0]].map(t=>{const r=m`
                                /* make sure this width matches the ToniqCarousel width */
                                width: 800px;
                                max-width: 100%;
                                padding: 100px 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-sizing: border-box;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return u`
                                <${T.assign({icon:t})} style=${r}></${T}>
                            `})})}
                        class=${he.hostClasses["toniq-carousel-banner-style"]}
                    ></${he}>
                `}})}});function ov(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:L.Color,initValue:""}]);return Object.fromEntries(t)}function iv(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(Ji);return B(t.join(`
`))}const av=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],Mo=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],sv=U({parent:Q,title:Ue.tagName,controls:{Text:{controlType:L.Text,initValue:"Text"},...ov(Ue)},elementExamplesCallback({defineExample:e}){av.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:Mo.map(r=>!!r.inputs.checked),extraEntryStatuses:Mo.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:m`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return Mo.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var h;return u`
                                    <${Ue.assign({...t.inputs,...oi(i.inputs,["checked"]),checked:!!((h=r.extraEntryStatuses[a])!=null&&h[d]),text:c})}
                                        ${S(Ue.events.checkedChange,()=>{const p=[...r.extraEntryStatuses];p[a][d]=!p[a][d],n({extraEntryStatuses:p})})}
                                    ></${Ue}>
                                `}),l=iv(o);return u`
                            <div class="checkbox-group" style=${l}>
                                <${Ue.assign({...t.inputs,...oi(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${S(Ue.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${Ue}>
                                ${s}
                            </div>
                        `})}})})}}),lv=U({parent:Q,title:wo.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Kt}},{inputs:{icon:Kt}},{inputs:{},template:u`
                    HTML child
                `},{inputs:{icon:Kt},template:u`
                    HTML child
                `},{customStyle:m`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:li.Default}},{title:"secondary style",inputs:{style:li.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>u`
                        <${wo.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${de(!!o.template,o.template)}</${wo}>
                    `)}})})}}),jr=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],cv=[{title:"default"},{title:"transparent background",customStyle:m`
            ${ta.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],xl=[{},{customStyle:m`
            width: 500px;
            height: 100px;
        `},{customStyle:m`
            max-height: 30px;
            min-height: 30px;
        `}],dv=U({title:qr.tagName,parent:Q,controls:{Selected:{controlType:L.Dropdown,initValue:jr[0].label,options:jr.map(e=>e.label)},Direction:{controlType:L.Dropdown,initValue:"Down",options:rp(ci)},Icon:ha(ld.name),Prefix:{controlType:L.Text,initValue:"Sort by: "},"Force open":{controlType:L.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){cv.forEach(t=>{e({title:t.title,stateInitStatic:{selected:xl.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:m`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return xl.map((i,a)=>{const s=m`
                            ${t.customStyle??m``};
                            ${i.customStyle??m``};
                        `;return u`
                            <${qr.assign({...t.inputs,...i.inputs,options:jr,value:r.selected[a]??jr.find(l=>l.label===o.Selected),icon:jn[o.Icon],selectedLabelPrefix:o.Prefix,direction:ci[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${S(qr.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${qr}>
                        `})}})})}}),kl="/toniq-labs-design-system";function uv(...e){const r=[globalThis.location.pathname.startsWith(kl)?kl:"",...e].filter(Ji);return ip(...r)}const Po=Array(30).fill(uv("/toniq-labs-logo.png")),ki=["Hello there.","There is stuff here."],Fr=ki.concat(Array(30).fill(ki)),hv=U({title:ae.tagName,parent:Q,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${ae.assign({infoParagraphs:Fr,imageUrls:Po,socialUrls:Eg,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${ae}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${ae.assign({imageUrls:Po,title:"Featured Stuff",infoParagraphs:void 0})}></${ae}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${ae.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Fr,viewMoreUrl:"https://toniqlabs.com"})}
                        ${S(ae.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${ae}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${ae.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Fr})}></${ae}>
                `}}),e({title:"with custom height",styles:m`
                ${ae} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${ae.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:Fr})}></${ae}>
                `}}),e({title:"smaller",styles:m`
                ${ae} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return u`
                    <${ae.assign({imageUrls:Po,infoParagraphs:ki,title:"Featured Stuff"})}></${ae}>
                `}})}}),fv=U({title:ut.tagName,parent:Q,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:m`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return u`
                    <${ut.assign({flipped:t.flipped})}
                        ${S(ut.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${ut}>
                `}})}}),pv=U({parent:Q,title:Ee.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}},{title:"link disabled",inputs:{linkDisabled:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return u`
                        <${Ee.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${Ee}>
                    `}})})}}),gv=U({title:T.tagName,parent:Q,controls:gu,elementExamplesCallback({defineExample:e}){const t=[{icon:yd},{icon:$d},{icon:ud},{icon:Kt},{icon:void 0}];e({title:"sizes",styles:m`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){return t.map(n=>u`
                        <${T.assign({icon:n.icon})}
                            style=${xi(r)}
                        ></${T}>
                    `)}}),e({title:"brand icons",renderCallback({controls:r}){const n=m`
                    ${f["toniq-icon-fill-color"].name}: orange;
                `;return Ze["third-party-brands"].map(o=>u`
                        <${T.assign({icon:o})}
                            style=${xi(r)}
                        ></${T}>
                        <${T.assign({icon:o})}
                            style=${n}
                        ></${T}>
                    `)}})}}),mv=U({title:Or.tagName,parent:Q,controls:{"External value":{controlType:L.Text,initValue:""},Placeholder:{controlType:L.Text,initValue:"placeholder"},Icon:ha(vd.name),Suffix:{controlType:L.Text,initValue:"ICP"},"No browser helps":{controlType:L.Checkbox,initValue:!1},"Blocked characters":{controlType:L.Text,initValue:""},"Exclusive characters":{controlType:L.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:m`
                    height: 75px;
                    width: 300px;
                `},{customStyles:m`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:$i.Default}},{title:"outline",inputs:{style:$i.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),u`
                            <${Or.assign({...n.inputs,value:o["External value"]||i.value,icon:jn[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${S(Or.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Or}>
                        `))}})})}}),vv=U({title:se.tagName,parent:Q,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return u`
                    <${se.assign({text:"Long string instead of text"})}></${se}>
                `}}),e({title:"Short text",renderCallback(){return u`
                    <${se.assign({text:"Short text"})}></${se}>
                `}}),e({title:"External Link",renderCallback(){return u`
                    <${se.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${se}>
                `}}),e({title:"Copyable",renderCallback(){return u`
                    <${se.assign({text:"Long text that you can copy",copyOnClick:!0})}></${se}>
                `}}),e({title:"Custom CSS vars",styles:m`
                ${se} {
                    ${se.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${se.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${se.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${se.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return u`
                    <${se.assign({text:"long text with custom colors",copyOnClick:!0})}></${se}>
                `}})}}),Ut=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],be={basic:Ut,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Ut.slice(1)],disabled:[{...Ut[0],disabled:!0},...Ut.slice(1)],noLabels:Z1(Ut,e=>({...e,label:void 0}))},wv=U({title:F.tagName,parent:Q,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:be.basic[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({entries:be.basic,value:t.selectedValue})}
                        ${S(F.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${F}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:be.basic[0].value},styles:m`
                ${F} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({entries:be.basic,value:t.selectedValue})}
                        ${S(F.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${F}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:be.longText[0].value},styles:m`
                ${F} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({entries:be.longText,value:t.selectedValue})}
                        ${S(F.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${F}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:be.noLabels[0].value},renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({entries:be.noLabels,value:t.selectedValue})}
                        ${S(F.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${F}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:be.disabled[1].value},renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({entries:be.disabled,value:t.selectedValue})}
                        ${S(F.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${F}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:be.basic[0].value},styles:m`
                ${F} {
                    ${F.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${F.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${F.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${F.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${F.assign({entries:be.basic,value:t.selectedValue})}
                        ${S(F.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${F}>
                `}})}}),De=m`
    ${R} {
        width: 300px;
    }
`,Bo={min:10,max:50},bv=U({title:R.tagName,parent:Q,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,...Bo})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,...Bo,suffix:"ICP"})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:m`
                ${De}
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,min:-100,max:100})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:m`
                ${De}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({value:t.value,...Bo})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${R}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:m`
                ${De}

                ${R} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return u`
                    <${R.assign({double:!0,value:t.value,min:0,max:100})}
                        ${S(R.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${R}>
                `}})}}),$v=[{title:"default",inputs:{}},{title:"text only",inputs:{style:fu.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],Sl=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],yv=U({title:Ao.tagName,parent:Q,controls:{Text:{controlType:L.Text,initValue:"Toggle Button"},Icon:ha(md.name)},elementExamplesCallback({defineExample:e}){$v.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:Sl.map(r=>!!r.inputs.toggled)},styles:m`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return Sl.map((i,a)=>u`
                            <${Ao.assign({...t.inputs,toggled:r.buttonStates[a],icon:jn[o.Icon],text:o.Text,...oi(i.inputs,["toggled"])})}
                                ${S("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${Ao}>
                        `)}})})}}),xv=U({parent:Q,title:Kr.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:m`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${x.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,renderCallback(){return u`
                        <${Kr.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${Kr}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:u`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),kv=U({parent:Q,title:er.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${Kr.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return u`
                    <${er}>This is a tooltip.</${er}>
                `}})}}),Sv=[xv,kv],Cv=[{title:"basic",inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"wide parent",extraStyles:m`
            :host {
                width: 500px;
            }

            ${Gt} {
                width: 100%;
            }
        `,inputs:{value:"hi",tabs:["hi","bye","hello","so long"]}},{title:"really long tab",extraStyles:m``,inputs:{value:"hi",tabs:["hi","bye","hello","So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you"]}}],Tv=U({title:Gt.tagName,parent:Q,elementExamplesCallback({defineExample:e}){Cv.forEach(t=>{e({title:t.title,stateInitStatic:{selectedTab:t.inputs.value},styles:m`
                    ${t.extraStyles??m``}
                `,renderCallback({state:r,updateState:n}){return u`
                        <${Gt.assign({tabs:t.inputs.tabs.map(o=>({label:o,value:o})),value:r.selectedTab})}
                            ${S(Gt.events.valueChange,o=>{console.log(o),n({selectedTab:o.detail})})}
                        ></${Gt}>
                    `}})})}}),mu=U({title:"Icons",parent:void 0,controls:gu}),Iv=Object.entries(Ze).map(([e,t])=>U({title:e,parent:mu,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.name,renderCallback({controls:o}){return u`
                                <${Tn.assign({icon:n})}
                                    style=${xi(o)}
                                ></${Tn}>
                            `}}))}}));function vu(e){const t=Ev(e),r=qt(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return qe(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function Ev(e){typeof e!="string"&&(e=String(e));const n=`{"${G1(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const fa=U({title:"Styles",parent:void 0}),Av=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${V.labelFont};
        ${V.monospaceFont};
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
        ${V.h2Font};
    }
`;function Mv(e,t,r){const n=vu(D(r));return e({title:t,styles:Av,renderCallback(){return u`
                <div class="color-example" style=${D(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>u`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const Pv=U({title:"Colors",parent:fa,elementExamplesCallback({defineExample:e}){qe(x).map(t=>Mv(e,t,x[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Bv=m`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${V.labelFont};
        ${V.monospaceFont};
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
`;function _v(e,t,r){const n=vu(r);return e({title:t,styles:Bv,renderCallback(){return u`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${qe(n).map(o=>{const i=n[o];return u`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const Lv=U({title:"Fonts",parent:fa,elementExamplesCallback({defineExample:e}){qe(V).map(t=>{const r=V[t];return _v(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),qv=[Q,mu,fa,pu],Rv=[...Iv,rv,nv,sv,lv,dv,hv,fv,pv,gv,mv,vv,wv,bv,yv,...Sv,Qm,Pv,Lv,Tv,tv].sort((e,t)=>e.title.localeCompare(t.title)),Nv=[...qv,...Rv];_n({tagName:"toniq-design-system-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ho} {
            height: 100%;
            width: 100%;
            ${V.paragraphFont};
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
            <${ho.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:Nv,themeColor:"#00D093"})}>
                <div class="nav-header" slot=${_e.NavHeader}>
                    <h1>Toniq Labs</h1>
                    <p>Design System</p>
                </div>
            </${ho}>
        `}});
