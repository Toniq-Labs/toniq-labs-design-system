var Qi=Object.freeze,ea=Object.defineProperty;var r0=(e,t,r)=>t in e?ea(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Mn=(e,t,r)=>(r0(e,typeof t!="symbol"?t+"":t,r),r);var Pn=(e,t)=>Qi(ea(e,"raw",{value:Qi(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function n0(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function il(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>wn(r).trim()).join(`
`))}function wn(e){return e?e instanceof Error?e.message:bn(e,"message")?String(e.message):String(e):""}function o0(e){return e instanceof Error?e:new Error(wn(e))}function al(e){return!!e}function ta(e){return!!e&&typeof e=="object"}function i0(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const a0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function bn(e,t){return e?a0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function sl(e,t){return e&&t.every(r=>bn(e,r))}function Ur(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function s0(e){return Array.isArray(e)?"array":typeof e}function yn(e,t){return s0(e)===t}function ra({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const na="Failed to compare objects using JSON.stringify";function oa(e,t,r){return ra({source:e,errorHandler(n){if(r)return"";throw n}})===ra({source:t,errorHandler(n){if(r)return"";throw n}})}function jt(e,t,r={}){try{return e===t?!0:ta(e)&&ta(t)?oa(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>jt(e[o],t[o])):!1:oa(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=o0(n);throw o.message.startsWith(na)||(o.message=`${na}: ${o.message}`),o}}function l0(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function c0(e){return Ur(e).filter(t=>isNaN(Number(t)))}function d0(e){return c0(e).map(r=>e[r])}function u0(e,t){return d0(t).includes(e)}function h0(e,t){return Ur(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function f0(e,t){return h0(e,r=>!t.includes(r))}function Wr(e,t){let r=!1;const n=Ur(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ur(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function p0(e){const t=ll();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function ll(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ll.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function ia(e,t){try{return g0(e,t),!0}catch{return!1}}function g0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function m0(e,t){return bn(e,"entryType")&&e.entryType===t}var te;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(te||(te={}));function gt(e,t){return e.controlType===t}var L;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(L||(L={}));const cl=Symbol("any-type"),v0={[L.Checkbox]:!1,[L.Color]:"",[L.Dropdown]:"",[L.Hidden]:cl,[L.Number]:0,[L.Text]:""};function w0(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=v0[o.controlType];i!==cl&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function li(e,t){const r=Yr(e.title);return e.parent?[...li(e.parent,!1),Yr(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Yr(e){return n0(e).toLowerCase().replaceAll(/\s/g,"-")}function b0({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function V(e){const t={...e,entryType:te.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:te.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(al)};r.add(n.title),t.elementExamples[Yr(o.title)]=o}}),t}var Ve;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Ve||(Ve={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=e=>(...t)=>({_$litDirective$:e,values:t});let Je=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _n;const Gr=window,It=Gr.trustedTypes,aa=It?It.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jr="$lit$",Re=`lit$${(Math.random()+"").slice(9)}$`,ci="?"+Re,y0=`<${ci}>`,lt=document,Gt=()=>lt.createComment(""),Jt=e=>e===null||typeof e!="object"&&typeof e!="function",dl=Array.isArray,ul=e=>dl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Bn=`[ 	
\f\r]`,_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sa=/-->/g,la=/>/g,tt=RegExp(`>|${Bn}(?:([^\\s"'>=/]+)(${Bn}*=${Bn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ca=/'/g,da=/"/g,hl=/^(?:script|style|textarea|title)$/i,$0=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),x0=$0(1),ye=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),ua=new WeakMap,it=lt.createTreeWalker(lt,129,null,!1);function fl(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return aa!==void 0?aa.createHTML(t):t}const pl=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=_t;for(let s=0;s<r;s++){const l=e[s];let c,d,u=-1,h=0;for(;h<l.length&&(a.lastIndex=h,d=a.exec(l),d!==null);)h=a.lastIndex,a===_t?d[1]==="!--"?a=sa:d[1]!==void 0?a=la:d[2]!==void 0?(hl.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=tt):d[3]!==void 0&&(a=tt):a===tt?d[0]===">"?(a=o??_t,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?tt:d[3]==='"'?da:ca):a===da||a===ca?a=tt:a===sa||a===la?a=_t:(a=tt,o=void 0);const g=a===tt&&e[s+1].startsWith("/>")?" ":"";i+=a===_t?l+y0:u>=0?(n.push(c),l.slice(0,u)+Jr+l.slice(u)+Re+g):l+Re+(u===-2?(n.push(void 0),s):g)}return[fl(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Xt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=pl(t,r);if(this.el=Xt.createElement(c,n),it.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=it.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(Jr)||h.startsWith(Re)){const g=d[a++];if(u.push(h),g!==void 0){const m=o.getAttribute(g.toLowerCase()+Jr).split(Re),v=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?ml:v[1]==="?"?vl:v[1]==="@"?wl:ur})}else l.push({type:6,index:i})}for(const h of u)o.removeAttribute(h)}if(hl.test(o.tagName)){const u=o.textContent.split(Re),h=u.length-1;if(h>0){o.textContent=It?It.emptyScript:"";for(let g=0;g<h;g++)o.append(u[g],Gt()),it.nextNode(),l.push({type:2,index:++i});o.append(u[h],Gt())}}}else if(o.nodeType===8)if(o.data===ci)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(Re,u+1))!==-1;)l.push({type:7,index:i}),u+=Re.length-1}i++}}static createElement(t,r){const n=lt.createElement("template");return n.innerHTML=t,n}}function ct(e,t,r=e,n){var o,i,a,s;if(t===ye)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Jt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=ct(e,l._$AS(e,t.values),l,n)),t}class gl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:lt).importNode(n,!0);it.currentNode=i;let a=it.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new At(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new bl(a,this,t)),this._$AV.push(d),c=o[++l]}s!==(c==null?void 0:c.index)&&(a=it.nextNode(),s++)}return it.currentNode=lt,i}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class At{constructor(t,r,n,o){var i;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ct(this,t,r),Jt(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==ye&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ul(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&Jt(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Xt.createElement(fl(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const a=new gl(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=ua.get(t.strings);return r===void 0&&ua.set(t.strings,r=new Xt(t)),r}T(t){dl(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new At(this.k(Gt()),this.k(Gt()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ur{constructor(t,r,n,o,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=ct(this,t,r,0),a=!Jt(t)||t!==this._$AH&&t!==ye,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=ct(this,s[n+l],r,l),c===ye&&(c=this._$AH[l]),a||(a=!Jt(c)||c!==this._$AH[l]),c===U?t=U:t!==U&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ml extends ur{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const k0=It?It.emptyScript:"";class vl extends ur{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,k0):this.element.removeAttribute(this.name)}}class wl extends ur{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=ct(this,t,r,0))!==null&&n!==void 0?n:U)===ye)return;const o=this._$AH,i=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==U&&(o===U||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class bl{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ct(this,t)}}const S0={O:Jr,P:Re,A:ci,C:1,M:pl,L:gl,D:ul,R:ct,I:At,V:ur,H:vl,N:wl,U:ml,F:bl},ha=Gr.litHtmlPolyfillSupport;ha==null||ha(Xt,At),((_n=Gr.litHtmlVersions)!==null&&_n!==void 0?_n:Gr.litHtmlVersions=[]).push("2.7.5");const C0=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=i._$litPart$;if(a===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new At(t.insertBefore(Gt(),s),s,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:T0}=S0,fa=()=>document.createComment(""),Bt=(e,t,r)=>{var n;const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(fa(),i),s=o.insertBefore(fa(),i);r=new T0(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==i||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;o.insertBefore(c,i),c=d}}}return r},rt=(e,t,r=e)=>(e._$AI(t,r),e),I0={},E0=(e,t=I0)=>e._$AH=t,A0=e=>e._$AH,Ln=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=Ge(class extends Je{constructor(e){var t;if(super(e),e.type!==dr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const a=!!t[i];a===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(a?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return ye}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pa=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},M0=Ge(class extends Je{constructor(e){if(super(e),e.type!==dr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const i=A0(e),{values:a,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ht=s,a;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,g=i.length-1,m=0,v=a.length-1;for(;h<=g&&m<=v;)if(i[h]===null)h++;else if(i[g]===null)g--;else if(l[h]===s[m])c[m]=rt(i[h],a[m]),h++,m++;else if(l[g]===s[v])c[v]=rt(i[g],a[v]),g--,v--;else if(l[h]===s[v])c[v]=rt(i[h],a[v]),Bt(e,c[v+1],i[h]),h++,v--;else if(l[g]===s[m])c[m]=rt(i[g],a[m]),Bt(e,i[h],i[g]),g--,m++;else if(d===void 0&&(d=pa(s,m,v),u=pa(l,h,g)),d.has(l[h]))if(d.has(l[g])){const y=u.get(s[m]),k=y!==void 0?i[y]:null;if(k===null){const S=Bt(e,i[h]);rt(S,a[m]),c[m]=S}else c[m]=rt(k,a[m]),Bt(e,i[h],k),i[y]=null;m++}else Ln(i[g]),g--;else Ln(i[h]),h++;for(;m<=v;){const y=Bt(e,c[v+1]);rt(y,a[m]),c[m++]=y}for(;h<=g;){const y=i[h++];y!==null&&Ln(y)}return this.ht=s,E0(e,c),ye}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vo=class extends Je{constructor(t){if(super(t),this.et=U,t.type!==dr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||t==null)return this.ft=void 0,this.et=t;if(t===ye)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};vo.directiveName="unsafeHTML",vo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wo=class extends vo{};wo.directiveName="unsafeSVG",wo.resultType=2;const P0=Ge(wo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _0(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=window,di=Dr.ShadowRoot&&(Dr.ShadyCSS===void 0||Dr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ui=Symbol(),ga=new WeakMap;let yl=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(di&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ga.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ga.set(r,t))}return t}toString(){return this.cssText}};const _=e=>new yl(typeof e=="string"?e:e+"",void 0,ui),Vt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new yl(r,e,ui)},B0=(e,t)=>{di?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Dr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},ma=di?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return _(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rn;const Xr=window,va=Xr.trustedTypes,L0=va?va.emptyScript:"",wa=Xr.reactiveElementPolyfillSupport,bo={toAttribute(e,t){switch(t){case Boolean:e=e?L0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$l=(e,t)=>t!==e&&(t==t||e==e),Nn={attribute:!0,type:String,converter:bo,reflect:!1,hasChanged:$l},yo="finalized";class wt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Nn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Nn}static finalize(){if(this.hasOwnProperty(yo))return!1;this[yo]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(ma(o))}else t!==void 0&&r.push(ma(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return B0(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Nn){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:bo).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:bo;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||$l)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}wt[yo]=!0,wt.elementProperties=new Map,wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},wa==null||wa({ReactiveElement:wt}),((Rn=Xr.reactiveElementVersions)!==null&&Rn!==void 0?Rn:Xr.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zn,Dn;class Ht extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=C0(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ye}}Ht.finalized=!0,Ht._$litElement$=!0,(zn=globalThis.litElementHydrateSupport)===null||zn===void 0||zn.call(globalThis,{LitElement:Ht});const ba=globalThis.litElementPolyfillSupport;ba==null||ba({LitElement:Ht});((Dn=globalThis.litElementVersions)!==null&&Dn!==void 0?Dn:globalThis.litElementVersions=[]).push("3.3.2");var R0=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,i){function a(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,g=r.length-1;g>=0;g--){var m={};for(var v in n)m[v]=v==="access"?{}:n[v];for(var v in n.access)m.access[v]=n.access[v];m.addInitializer=function(k){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(k||null))};var y=(0,r[g])(s==="accessor"?{get:d.get,set:d.set}:d[l],m);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(u=a(y.get))&&(d.get=u),(u=a(y.set))&&(d.set=u),(u=a(y.init))&&o.unshift(u)}else(u=a(y))&&(s==="field"?o.unshift(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},N0=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},z0=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function D0(){function e(t,r){return t}return e}let xl=(()=>{let e=[D0()],t,r=[],n;return n=class extends Ht{},z0(n,"DeclarativeElement"),R0(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,N0(n,r),n})();const O0={capitalizeFirstLetter:!1};function F0(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function j0(e,t){return t.capitalizeFirstLetter?F0(e):e}function V0(e,t=O0){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return j0(n,t)}function kl(e){return e?e instanceof Error?e.message:Ne(e,"message")?String(e.message):String(e):""}function hi(e){return e instanceof Error?e:new Error(kl(e))}function H0(e){return!!e}function ya(e){return!!e&&typeof e=="object"}const Z0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ne(e,t){return e?Z0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function dt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function $a({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const xa="Failed to compare objects using JSON.stringify";function ka(e,t,r){return $a({source:e,errorHandler(n){if(r)return"";throw n}})===$a({source:t,errorHandler(n){if(r)return"";throw n}})}function Sl(e,t,r={}){try{return e===t?!0:ya(e)&&ya(t)?ka(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Sl(e[o],t[o])):!1:ka(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=hi(n);throw o.message.startsWith(xa)||(o.message=`${xa}: ${o.message}`),o}}function Cl(e,t){let r=!1;const n=dt(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(dt(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function q0(e){return!!(Ne(e,"then")&&typeof e.then=="function")}function $o(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${$o.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function U0(e,t){try{return W0(e,t),!0}catch{return!1}}function W0(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Y0(e,t){return e.includes(t)}function Sa(e){return e!==e.toUpperCase()}function G0(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=Sa(a)||Sa(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const J0=["january","february","march","april","may","june","july","august","september","october","november","december"];J0.map(e=>e.slice(0,3));function X0(e){return!!e}function fi(e){return!!e&&typeof e=="object"}const K0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Or(e,t){return e?K0.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ca(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Q0(e){return Array.isArray(e)?"array":typeof e}function pi(e,t){return Q0(e)===t}function Tl(e,t){let r=!1;const n=Ca(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Ca(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function De(e){if(fi(e))return Tl(e,(r,n)=>{if(!pi(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(G0(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?_(r):r.startsWith("-")?Vt`-${_(r)}`:Vt`--${_(r)}`;return{name:a,value:Vt`var(${a}, ${_(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${De.name}' function.`)}function xo({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},tu=(e,t,r)=>{t.constructor.createProperty(r,e)};function Il(e){return(t,r)=>r!==void 0?tu(e,t,r):eu(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var On;((On=window.HTMLSlotElement)===null||On===void 0?void 0:On.prototype.assignedElements)!=null;const gi=Symbol("key for ignoring inputs not having been set yet"),ru={[gi]:!0,allowPolymorphicState:!1};function El(e,t){const r=e.instanceState;dt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&dt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Al(e)}function Al(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Ml(e,t){return Kt(e,t),e.element}function nu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Kt(e,t){const r=nu(e),n=r?`: in ${r}`:"";if(e.type!==dr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function hr(e,t){return t?Ta(e,t):Ta(void 0,e)}const Ta=Ge(class extends Je{constructor(e){super(e),this.element=Ml(e,"assign")}render(e,t){return ou(e,this.element,t),ye}});function ou(e,t,r){El(t,r)}function Pl(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof xl?!0:Pl(r)}function Ia(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class iu extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function mi(){return e=>{var t;return t=class extends iu{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function H(){return mi()}function au(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=mi()(r);return t[r]=n,t},{}):{}}const ko="_is_element_vir_observable_property_handler_instance",So="_is_element_vir_observable_property_handler_creator";function su(e){return Ne(e,So)&&e[So]===!0}function lu(e){return Ne(e,ko)&&e[ko]===!0}function cu(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ea(e,t){const r=e;function n(a){t?cu(a,e,e.tagName):Il()(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set:(a,s,l)=>{n(s);const c=e.observablePropertyHandlerMap[s];function d(u){a[s]=u,r[s]=u}return su(l)&&(l=l.init()),lu(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[s]=l):c?c.setValue(l):d(l),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has:(a,s)=>Reflect.has(a,s)})}function du(e){return e?Cl(e,t=>t):{}}function uu({hostClassNames:e,cssVars:t}){return{hostClasses:Cl(e,(r,n)=>({name:_(n),selector:_(`:host(.${n})`)})),cssVars:t}}function hu({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&dt(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function fu(e,t){function r(o){dt(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var pu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function $n(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ru,...e.options},n=au(e.events),o=du(e.hostClasses);e.hostClasses&&Ia(e.tagName,e.hostClasses),e.cssVars&&Ia(e.tagName,e.cssVars);const i=e.cssVars?De(e.cssVars):{},a=typeof e.styles=="function"?e.styles(uu({hostClassNames:o,cssVars:i})):e.styles||Vt``,s=e.renderCallback;function l(...[d]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:d}}const c=(t=class extends xl{createRenderParams(){return fu(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Al(this)}render(){try{Pl(this)&&!this.haveInputsBeenSet&&!r[gi]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${hr.name}" directive on it. If no inputs are intended, use "${$n.name}" to define ${e.tagName}.`),this.hasRendered=!0;const d=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=s(d);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return hu({host:d.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this.lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},u}catch(d){const u=hi(d);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const d=this.createRenderParams();if(e.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const d=this.createRenderParams();if(e.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(d){El(this,d)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Ea(this,!1),this.instanceState=Ea(this,!((u=e.options)!=null&&u.allowPolymorphicState));const d=e.stateInitStatic||{};dt(d).forEach(h=>{Il()(this,h),this.instanceState[h]=d[h]}),this.definition=c}},pu(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:V0(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function vi(){return e=>$n({...e,options:{[gi]:!1,...e.options}})}var _l;const ne=Symbol("not set");class gu{constructor(t){this.lastTrigger=ne,this.resolutionValue=ne,this.rejectionError=ne,this.listeners=new Set,this.waitingForValuePromise=$o(),this[_l]=!0,this.resetValue(t)}resetValue(t){if(this.resetWaitingForValuePromise(),t!==ne){if(Ne(t,"defaultValue"))t.defaultValue instanceof Promise?this.setValue({newPromise:t.defaultValue}):this.setValue({resolvedValue:t.defaultValue});else if(Ne(t,"updateCallback")){this.promiseUpdater=t.updateCallback;return}}}fireListeners(){const t=this.getValue();this.listeners.forEach(r=>{r(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=ne,this.rejectionError=ne,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(r=>{this.lastSetPromise===t&&this.resolveValue(r)}).catch(r=>{this.lastSetPromise===t&&(this.rejectionError=hi(r),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(r),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=ne,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=$o()}setValue(t){if(Ne(t,"serializableTrigger")){const r={...t.serializableTrigger},n={...t.updaterInputs};if(this.lastTrigger===ne||!Sl(r,this.lastTrigger,{ignoreNonSerializableProperties:!0})){if(this.lastTrigger=r,!this.promiseUpdater)throw new Error("got serializableTrigger input to updateState for asyncProp but no updateCallback has been defined.");const o=this.promiseUpdater(r,n);this.setPromise(o),this.fireListeners()}}else if("newPromise"in t)this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners();else if("resolvedValue"in t)this.resolveValue(t.resolvedValue);else if("forceUpdate"in t)this.lastTrigger=ne,this.resolutionValue=ne,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners();else throw new Error("Got no properties for updating asyncProp.")}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==ne)return this.rejectionError;if(this.resolutionValue===ne)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,r){this.listeners.add(r),t&&r(this.getValue())}addMultipleListeners(t){t.forEach(r=>this.listeners.add(r))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}_l=ko;function mu(...e){const t=U0(e,1)?e[0]:ne;return{[So]:!0,init(){return new gu(t)}}}function T(e,t){return vu(e,t)}const vu=Ge(class extends Je{constructor(e){super(e),this.element=Ml(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ye}}),Aa="onDomCreated",Ma=Ge(class extends Je{constructor(e){super(e),Kt(e,Aa)}update(e,[t]){Kt(e,Aa);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Fn="onResize",Qt=Ge(class extends Je{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Kt(e,Fn)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Fn} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Kt(e,Fn),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Pa(e,t,r,n){return e instanceof Error?n?n(e):kl(e):q0(e)?t:r?r(e):e}function Ce(e,t,r){return _0(e,()=>t,()=>r)}function wi(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),vi()(r(n))),defineElementNoInputs:n=>(t(n),$n(r(n)))}}function wu(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Co(e){return Ne(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function bi(e){return Ne(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Bl(e){return e.map(t=>Co(t)?t.definition:t).filter(t=>bi(t))}const Ll=new WeakMap;function bu(e,t){var o;const r=Bl(t);return(o=Rl(Ll,[e,...r]).value)==null?void 0:o.template}function yu(e,t,r){const n=Bl(t);return zl(Ll,[e,...n],r)}function Rl(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Nl(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Rl(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Nl(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function zl(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Nl(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),zl(l,t,r,n+1)}const $u=new WeakMap;function Dl(e,t,r){const n=bu(e,t),o=n??r();if(!n){const s=yu(e,t,o);if(s.result)$u.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=wu(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Ol(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const u=o.length-1,h=o[u],g=d-1,m=t[g];n&&n(c);let v,y=[];if(typeof h=="string"&&(v=r(h,c,m),v)){o[u]=h+v.replacement,a.push(g);const S=v.getExtraValues;y=S?S(m):[],y.length&&S?(o[u]+=" ",y.forEach((E,R)=>{R&&o.push(" ")}),s.push(E=>{const R=E[g],J=S(R);return{index:g,values:J}}),o.push(c)):o[u]+=c}v||o.push(c);const k=e.raw[d];v?(i[u]=i[u]+v.replacement+k,y.length&&y.forEach(()=>{i.push("")})):i.push(k)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function xu(...[e,t,r]){if(bi(r))return{replacement:r.tagName,getExtraValues:void 0}}function ku(e,t){return Ol(e,t,xu)}function p(e,...t){const r=Dl(e,t,()=>ku(e,t));return Vt(r.strings,...r.values)}function Su(...[e,t,r]){const n=Co(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=bi(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:n.tagName,getExtraValues(c){const d=Co(c)?c.inputs:void 0;return[o&&d&&Object.values(d).length?hr(d):void 0].filter(H0)}}}function Cu(e){}function Tu(e){return Ol(e.strings,e.values,Su,Cu)}function f(e,...t){const r=x0(e,...t),n=Dl(e,t,()=>Tu(r));return{...r,strings:n.strings,values:n.values}}const Iu={[te.ElementExample]:()=>[],[te.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...w0(e.controls,e.title)].filter(al),[te.Root]:()=>[]},Kr="_isBookTreeNode",Fl=new Map;function Eu(e){return Fl.get(e)}function Au(e,t){l0(Fl,e,()=>t)}function St(e,t){return!!(jl(e)&&e.entry.entryType===t)}function jl(e){return!!(sl(e,[Kr,"entry"])&&e[Kr])}function Mu(e,t){return{[Kr]:!0,entry:{entryType:te.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Pu({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Eu(e);if(o)return o;const i=Mu(t,r);e.forEach(l=>yi({tree:i,newEntry:l,debug:n,manuallyAdded:!0}));const a=Vl(i),s={tree:i,flattenedNodes:a};return Au(e,s),n&&console.info("element-book tree:",i),s}function _u(e,t,r){if(!t.parent)return e;const n=To(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),yi({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=To(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${li(t,!1)}`);return o}function yi({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Iu[t.entryType](t);t.errors.push(...o);const i=_u(e,t,r),a=Yr(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Kr]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,m0(t,te.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>yi({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function To(e,t){const r=jl(e)?e.fullUrlBreadcrumbs.slice(0,-1):li(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Vl(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Vl(o));return[e,...r].flat()}function Bu(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function $i(e,t){return xi(e,t,void 0)}function xi(e,t,r){const n=t[0];if(!n)return{};const o=Bu(e,n,r);if(!o)return{};const i=t.slice(1);return!i.length&&r&&(o.controls=r),{...o.controls,...xi(o.children,i,r)}}function Lu(e,t,r){const n=i0(e);return xi(n,t,r),n}function Hl(e,t){return Wr(e.children,(n,o)=>St(o,te.Page)?{children:Hl(o,{}),controls:{...t,...Wr(o.entry.controls,(i,a)=>a.initValue)}}:{children:{},controls:{}})}function Ru({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Zl(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Zl.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Nu(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}async function zu(e=1){const t=Zl();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const ql=globalThis.crypto;function Du({min:e,max:t}){const{min:r,max:n}=Ru({min:Math.floor(e),max:Math.floor(t)}),o=n-r+1,i=Math.ceil(Math.log2(o)/8),a=Math.floor(256**i/o)*o,s=new Uint8Array(i);let l;do ql.getRandomValues(s),l=s.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%o}function ki(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return ql.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Ou(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{Nu(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Lt(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function Fu({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const ju=ki(32);function Io(e){return e.join(ju)}function Ul(e){if(!e.length)return[];const t=Io(e),r=Ul(e.slice(0,-1));return[t,...r]}const Vu=["error","errors"];function Hu(e){return Vu.includes(e)}function Zu({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&Hu(t);if(Fu({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)Ul(n.fullUrlBreadcrumbs).forEach(s=>r[s]=!0);else{const a=Io(n.fullUrlBreadcrumbs);r[a]=!1}}),e.filter(n=>{const o=Io(n.fullUrlBreadcrumbs),i=r[o];if(!yn(i,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var oe;(function(e){e.Search="search",e.Book="book"})(oe||(oe={}));function Wl(e){return e[0]===oe.Book?"":e[1]?decodeURIComponent(e[1]):""}const er={hash:void 0,paths:[oe.Book],search:void 0},qu=0;function Si(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==qu)}class xn extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class _a extends xn{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const tr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Uu=globalThis.history.pushState;function Ba(...e){const t=Uu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(tr)),t}const Wu=globalThis.history.replaceState;function La(...e){const t=Wu.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(tr)),t}function Yu(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Ba)throw new _a("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===La)throw new _a("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Ba,globalThis.history.replaceState=La,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(tr))})}}function Gu(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Ju(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Xu(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),i=globalThis.location.search?Gu(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:i,hash:a}}function Yl(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Gl({routeBase:e,windowPath:t}){if(!e)return"";const r=Yl(e);if(Jl({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Gl({routeBase:n,windowPath:t}):""}function Jl({routeBase:e,windowPath:t}){const r=Yl(e);return r?t.startsWith(`/${r}`):!1}class Ku extends xn{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Xl(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Ra=6;function Na(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Ra)throw new Ku(`Route sanitization depth has exceed the max of ${Ra} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Xl(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class jn extends xn{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Qu(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new jn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new jn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new jn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function e1(e,t,r=!1){const n=Kl(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Kl(e,t){var l;const r=Jl({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Ju(e.search).toString():"",o=n?`?${n}`:"",i=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${i}${e.hash}`:"";return`/${[r,...e.paths].filter(X0).join("/")}${o}${a}`}function t1(e={}){Qu(e),Yu();const t=e.routeBase?Gl({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Na(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&Xl(l,d)))return e1(d,t,a)},createRoutesUrl(i){return Kl(i,t)},getCurrentRawRoutes(){return Xu(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new xn(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(tr,n),r=!0),i&&Na(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(tr,n),r=!1),a},sanitizationDepth:0};return o}function r1(e){return t1({routeBase:e,routeSanitizer(t){return{paths:n1(t.paths),hash:void 0,search:void 0}}})}function n1(e){const t=e[0];if(u0(t,oe)){if(t===oe.Book)return[oe.Book,...e.slice(1)];if(t===oe.Search)return e[1]?[t,e[1]]:[oe.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return er.paths}const z=De({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),o1={nav:{hover:{background:z["element-book-nav-hover-background-color"],foreground:z["element-book-nav-hover-foreground-color"]},active:{background:z["element-book-nav-active-background-color"],foreground:z["element-book-nav-active-foreground-color"]},selected:{background:z["element-book-nav-selected-background-color"],foreground:z["element-book-nav-selected-foreground-color"]}},accent:{icon:z["element-book-accent-icon-color"]},page:{background:z["element-book-page-background-color"],backgroundFaint1:z["element-book-page-background-faint-level-1-color"],backgroundFaint2:z["element-book-page-background-faint-level-2-color"],foreground:z["element-book-page-foreground-color"],foregroundFaint1:z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:z["element-book-page-foreground-faint-level-2-color"]}};function i1(e,t){Ql(e,t,o1)}function Eo(e){return bn(e,"_$cssResult$")}function za(e){return sl(e,["name","value","default"])&&yn(e.default,"string")&&Eo(e.name)&&Eo(e.value)}function Ql(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Eo(o)){if(!za(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);xo({forCssVar:i,onElement:e,toValue:String(o)})}else{if(za(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ql(e,o,i)}})}function W(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function fr(e){return Ze(e)==="string"}function Ze(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Qr(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function ec(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function tc(e){return e[e.length-1]}function en(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function rc(e,t,r){return(r-e)/(t-e)}function Ci(e,t,r){return en(t[0],t[1],rc(e[0],e[1],r))}function nc(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var a1=Object.freeze({__proto__:null,interpolate:en,interpolateInv:rc,isString:fr,last:tc,mapRange:Ci,multiplyMatrices:W,parseCoordGrammar:nc,parseFunction:ec,toPrecision:Qr,type:Ze});class s1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const qe=new s1;var Ae={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Se={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ao(e){return Array.isArray(e)?e:Se[e]}function tn(e,t,r,n={}){if(e=Ao(e),t=Ao(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(qe.run("chromatic-adaptation-start",o),o.M||(o.W1===Se.D65&&o.W2===Se.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Se.D50&&o.W2===Se.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),qe.run("chromatic-adaptation-end",o),o.M)return W(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const l1=75e-6,le=class le{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?le.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ao(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:c1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),qe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=l1}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Da(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Da(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=le.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=le.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(le.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof le)return t;if(Ze(t)==="string"){let o=le.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return le.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=Ze(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=le.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Ze(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=le.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Mn(le,"registry",{}),Mn(le,"DEFAULT_FORMAT",{type:"functions",name:"color"});let M=le;function c1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Da(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=nc(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=Ci(s,l,i)),i=Qr(i,o),c&&(i+=c),i})}return e}var ve=new M({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ae extends M{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ve),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=W(t.toXYZ_M,r);return this.white!==this.base.white&&(n=tn(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=tn(this.base.white,this.white,r),W(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function oc(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(qe.run("parse-start",r),r.color)return r.color;if(r.parsed=ec(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let h of M.all){let g=h.getFormat("color");if(g&&(c===g.id||(o=g.ids)!=null&&o.includes(c))){const m=Object.keys(h.coords).map((v,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:h.id,coords:m,alpha:d}}}let u="";if(c in M.registry){let h=(s=(a=(i=M.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;h&&(u=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${c}). `+(u||"Missing a plugin?"))}else for(let c of M.all){let d=c.getFormat(l);if(d&&d.type==="function"){let u=1;(d.lastAlpha||tc(r.parsed.args).alpha)&&(u=r.parsed.args.pop());let h=r.parsed.args,g;return d.coordGrammar&&(g=Object.entries(c.coords).map(([m,v],y)=>{var ue;let k=d.coordGrammar[y],S=(ue=h[y])==null?void 0:ue.type,E=k.find(he=>he==S);if(!E){let he=v.name||m;throw new TypeError(`${S} not allowed for ${he} in ${l}()`)}let R=E.range;S==="<percentage>"&&(R||(R=[0,1]));let J=v.range||v.refRange;return R&&J&&(h[y]=Ci(R,J,h[y])),E})),t&&Object.assign(t,{formatId:d.name,types:g}),{spaceId:c.id,coords:h,alpha:u}}}}else for(let l of M.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let u=d.parse(r.str);if(u)return u.alpha??(u.alpha=1),t&&(t.formatId=c),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function O(e){if(!e)throw new TypeError("Empty color reference");fr(e)&&(e=oc(e));let t=e.space||e.spaceId;return t instanceof M||(e.space=M.get(t)),e.alpha===void 0&&(e.alpha=1),e}function pr(e,t){return t=M.get(t),t.from(e)}function we(e,t){let{space:r,index:n}=M.resolveCoord(t,e.space);return pr(e,r)[n]}function ic(e,t,r){return t=M.get(t),e.coords=t.to(e.space,r),e}function Ue(e,t,r){if(e=O(e),arguments.length===2&&Ze(arguments[1])==="object"){let n=arguments[1];for(let o in n)Ue(e,o,n[o])}else{typeof r=="function"&&(r=r(we(e,t)));let{space:n,index:o}=M.resolveCoord(t,e.space),i=pr(e,n);i[o]=r,ic(e,n,i)}return e}var Ti=new M({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ve,fromBase:e=>tn(ve.white,"D50",e),toBase:e=>tn("D50",ve.white,e),formats:{color:{}}});const d1=216/24389,Oa=24/116,$r=24389/27;let Vn=Se.D50;var de=new M({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Vn,base:Ti,fromBase(e){let r=e.map((n,o)=>n/Vn[o]).map(n=>n>d1?Math.cbrt(n):($r*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Oa?Math.pow(t[0],3):(116*t[0]-16)/$r,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/$r,t[2]>Oa?Math.pow(t[2],3):(116*t[2]-16)/$r].map((n,o)=>n*Vn[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function kn(e){return(e%360+360)%360}function u1(e,t){if(e==="raw")return t;let[r,n]=t.map(kn),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var rr=new M({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:de,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),kn(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Fa=25**7,rn=Math.PI,ja=180/rn,mt=rn/180;function Mo(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=de.from(e),l=rr.from(de,[i,a,s])[1],[c,d,u]=de.from(t),h=rr.from(de,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let m=((l+h)/2)**7,v=.5*(1-Math.sqrt(m/(m+Fa))),y=(1+v)*a,k=(1+v)*d,S=Math.sqrt(y**2+s**2),E=Math.sqrt(k**2+u**2),R=y===0&&s===0?0:Math.atan2(s,y),J=k===0&&u===0?0:Math.atan2(u,k);R<0&&(R+=2*rn),J<0&&(J+=2*rn),R*=ja,J*=ja;let ue=c-i,he=E-S,re=J-R,et=R+J,br=Math.abs(re),fe;S*E===0?fe=0:br<=180?fe=re:re>180?fe=re-360:re<-180?fe=re+360:console.log("the unthinkable has happened");let pt=2*Math.sqrt(E*S)*Math.sin(fe*mt/2),Mt=(i+c)/2,An=(S+E)/2,Gi=Math.pow(An,7),Pe;S*E===0?Pe=et:br<=180?Pe=et/2:et<360?Pe=(et+360)/2:Pe=(et-360)/2;let Ji=(Mt-50)**2,Kd=1+.015*Ji/Math.sqrt(20+Ji),Xi=1+.045*An,Pt=1;Pt-=.17*Math.cos((Pe-30)*mt),Pt+=.24*Math.cos(2*Pe*mt),Pt+=.32*Math.cos((3*Pe+6)*mt),Pt-=.2*Math.cos((4*Pe-63)*mt);let Ki=1+.015*An*Pt,Qd=30*Math.exp(-1*((Pe-275)/25)**2),e0=2*Math.sqrt(Gi/(Gi+Fa)),t0=-1*Math.sin(2*Qd*mt)*e0,yr=(ue/(r*Kd))**2;return yr+=(he/(n*Xi))**2,yr+=(pt/(o*Ki))**2,yr+=t0*(he/(n*Xi))*(pt/(o*Ki)),Math.sqrt(yr)}const h1=75e-6;function Zt(e,t=e.space,{epsilon:r=h1}={}){e=O(e),t=M.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function nr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function We(e,{method:t=Ae.gamut_mapping,space:r=e.space}={}){if(fr(arguments[1])&&(r=arguments[1]),r=M.get(r),Zt(e,r,{epsilon:0}))return O(e);let n=ge(e,r);if(t!=="clip"&&!Zt(e,r)){let o=We(nr(n),{method:"clip",space:r});if(Mo(e,o)>2){let i=M.resolveCoord(t),a=i.space,s=i.id,l=ge(n,a),d=(i.range||i.refRange)[0],u=.01,h=d,g=we(l,s);for(;g-h>u;){let m=nr(l);m=We(m,{space:r,method:"clip"}),Mo(l,m)-2<u?h=we(l,s):g=we(l,s),Ue(l,s,(h+g)/2)}n=ge(l,r)}else n=o}if(t==="clip"||!Zt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=ge(n,e.space)),e.coords=n.coords,e}We.returns="color";function ge(e,t,{inGamut:r}={}){e=O(e),t=M.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=We(o)),o}ge.returns="color";function nn(e,{precision:t=Ae.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=O(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??M.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Zt(e)&&(s=We(nr(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(g=>Qr(g,t)));let d=[...s];if(c==="color"){let g=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(g)}let u=e.alpha;t!==null&&(u=Qr(u,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${h})`}return i}const f1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],p1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Sn=new ae({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:f1,fromXYZ_M:p1,formats:{color:{}}});const xr=1.09929682680944,Va=.018053968510807;var ac=new ae({id:"rec2020",name:"REC.2020",base:Sn,toBase(e){return e.map(function(t){return t<Va*4.5?t/4.5:Math.pow((t+xr-1)/xr,1/.45)})},fromBase(e){return e.map(function(t){return t>=Va?xr*Math.pow(t,.45)-(xr-1):4.5*t})},formats:{color:{}}});const g1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],m1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var sc=new ae({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:g1,fromXYZ_M:m1});const v1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],w1=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var lc=new ae({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:v1,fromXYZ_M:w1,formats:{color:{}}}),Ha={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Za=Array(3).fill("<percentage> | <number>[0, 255]"),qa=Array(3).fill("<number>[0, 255]");var or=new ae({id:"srgb",name:"sRGB",base:lc,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Za},rgb_number:{name:"rgb",commas:!0,coords:qa,noAlpha:!0},color:{},rgba:{coords:Za,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:qa},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ha.black,t.alpha=0):t.coords=Ha[e],t.coords)return t}}}}),cc=new ae({id:"p3",name:"P3",base:sc,fromBase:or.fromBase,toBase:or.toBase,formats:{color:{id:"display-p3"}}});Ae.display_space=or;if(typeof CSS<"u"&&CSS.supports)for(let e of[de,ac,cc]){let t=e.getMinCoords(),n=nn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Ae.display_space=e;break}}function b1(e,{space:t=Ae.display_space,...r}={}){let n=nn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Ae.display_space)n=new String(n),n.color=e;else{let o=ge(e,t);n=new String(nn(o,r)),n.color=o}return n}function dc(e,t,r="lab"){r=M.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function y1(e,t){return e=O(e),t=O(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ye(e){return we(e,[ve,"y"])}function uc(e,t){Ue(e,[ve,"y"],t)}function $1(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ye(this)},set(t){uc(this,t)}})}var x1=Object.freeze({__proto__:null,getLuminance:Ye,register:$1,setLuminance:uc});function k1(e,t){e=O(e),t=O(t);let r=Math.max(Ye(e),0),n=Math.max(Ye(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const S1=.56,C1=.57,T1=.62,I1=.65,Ua=.022,E1=1.414,A1=.1,M1=5e-4,P1=1.14,Wa=.027,_1=1.14;function Ya(e){return e>=Ua?e:e+(Ua-e)**E1}function vt(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function B1(e,t){t=O(t),e=O(e);let r,n,o,i,a,s;t=ge(t,"srgb"),[i,a,s]=t.coords;let l=vt(i)*.2126729+vt(a)*.7151522+vt(s)*.072175;e=ge(e,"srgb"),[i,a,s]=e.coords;let c=vt(i)*.2126729+vt(a)*.7151522+vt(s)*.072175,d=Ya(l),u=Ya(c),h=u>d;return Math.abs(u-d)<M1?n=0:h?(r=u**S1-d**C1,n=r*P1):(r=u**I1-d**T1,n=r*_1),Math.abs(n)<A1?o=0:n>0?o=n-Wa:o=n+Wa,o*100}function L1(e,t){e=O(e),t=O(t);let r=Math.max(Ye(e),0),n=Math.max(Ye(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const R1=5e4;function N1(e,t){e=O(e),t=O(t);let r=Math.max(Ye(e),0),n=Math.max(Ye(t),0);return n>r&&([r,n]=[n,r]),n===0?R1:(r-n)/n}function z1(e,t){e=O(e),t=O(t);let r=we(e,[de,"l"]),n=we(t,[de,"l"]);return Math.abs(r-n)}const D1=216/24389,Ga=24/116,kr=24389/27;let Hn=Se.D65;var Po=new M({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Hn,base:ve,fromBase(e){let r=e.map((n,o)=>n/Hn[o]).map(n=>n>D1?Math.cbrt(n):(kr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ga?Math.pow(t[0],3):(116*t[0]-16)/kr,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/kr,t[2]>Ga?Math.pow(t[2],3):(116*t[2]-16)/kr].map((n,o)=>n*Hn[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Zn=Math.pow(5,.5)*.5+.5;function O1(e,t){e=O(e),t=O(t);let r=we(e,[Po,"l"]),n=we(t,[Po,"l"]),o=Math.abs(Math.pow(r,Zn)-Math.pow(n,Zn)),i=Math.pow(o,1/Zn)*Math.SQRT2-40;return i<7.5?0:i}var Fr=Object.freeze({__proto__:null,contrastAPCA:B1,contrastDeltaPhi:O1,contrastLstar:z1,contrastMichelson:L1,contrastWCAG21:k1,contrastWeber:N1});function F1(e,t,r={}){fr(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Fr).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=O(e),t=O(t);for(let i in Fr)if("contrast"+n.toLowerCase()===i.toLowerCase())return Fr[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function hc(e){let[t,r,n]=pr(e,ve),o=t+15*r+3*n;return[4*t/o,9*r/o]}function fc(e){let[t,r,n]=pr(e,ve),o=t+r+n;return[t/o,r/o]}function j1(e){Object.defineProperty(e.prototype,"uv",{get(){return hc(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return fc(this)}})}var V1=Object.freeze({__proto__:null,register:j1,uv:hc,xy:fc});function H1(e,t){return dc(e,t,"lab")}const Z1=Math.PI,Ja=Z1/180;function q1(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=de.from(e),[,s,l]=rr.from(de,[o,i,a]),[c,d,u]=de.from(t),h=rr.from(de,[c,d,u])[1];s<0&&(s=0),h<0&&(h=0);let g=o-c,m=s-h,v=i-d,y=a-u,k=v**2+y**2-m**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let E=.0638*s/(1+.0131*s)+.638,R;Number.isNaN(l)&&(l=0),l>=164&&l<=345?R=.56+Math.abs(.2*Math.cos((l+168)*Ja)):R=.36+Math.abs(.4*Math.cos((l+35)*Ja));let J=Math.pow(s,4),ue=Math.sqrt(J/(J+1900)),he=E*(ue*R+1-ue),re=(g/(r*S))**2;return re+=(m/(n*E))**2,re+=k/he**2,Math.sqrt(re)}const Xa=203;var Ii=new M({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ve,fromBase(e){return e.map(t=>Math.max(t*Xa,0))},toBase(e){return e.map(t=>Math.max(t/Xa,0))}});const Sr=1.15,Cr=.66,Ka=2610/2**14,U1=2**14/2610,Qa=3424/2**12,es=2413/2**7,ts=2392/2**7,W1=1.7*2523/2**5,rs=2**5/(1.7*2523),Tr=-.56,qn=16295499532821565e-27,Y1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],G1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],J1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],X1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var pc=new M({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ii,fromBase(e){let[t,r,n]=e,o=Sr*t-(Sr-1)*n,i=Cr*r-(Cr-1)*t,s=W(Y1,[o,i,n]).map(function(h){let g=Qa+es*(h/1e4)**Ka,m=1+ts*(h/1e4)**Ka;return(g/m)**W1}),[l,c,d]=W(J1,s);return[(1+Tr)*l/(1+Tr*l)-qn,c,d]},toBase(e){let[t,r,n]=e,o=(t+qn)/(1+Tr-Tr*(t+qn)),a=W(X1,[o,r,n]).map(function(h){let g=Qa-h**rs,m=ts*h**rs-es;return 1e4*(g/m)**U1}),[s,l,c]=W(G1,a),d=(s+(Sr-1)*c)/Sr,u=(l+(Cr-1)*d)/Cr;return[d,u,c]},formats:{color:{}}}),_o=new M({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:pc,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),kn(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function K1(e,t){let[r,n,o]=_o.from(e),[i,a,s]=_o.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const gc=3424/4096,mc=2413/128,vc=2392/128,ns=2610/16384,Q1=2523/32,eh=16384/2610,os=32/2523,th=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],rh=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],nh=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],oh=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Bo=new M({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ii,fromBase(e){let t=W(th,e);return ih(t)},toBase(e){let t=ah(e);return W(oh,t)},formats:{color:{}}});function ih(e){let t=e.map(function(r){let n=gc+mc*(r/1e4)**ns,o=1+vc*(r/1e4)**ns;return(n/o)**Q1});return W(rh,t)}function ah(e){return W(nh,e).map(function(n){let o=Math.max(n**os-gc,0),i=mc-vc*n**os;return 1e4*(o/i)**eh})}function sh(e,t){let[r,n,o]=Bo.from(e),[i,a,s]=Bo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const lh=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],ch=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],dh=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],uh=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var on=new M({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ve,fromBase(e){let r=W(lh,e).map(n=>Math.cbrt(n));return W(dh,r)},toBase(e){let r=W(uh,e).map(n=>n**3);return W(ch,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function hh(e,t){let[r,n,o]=on.from(e),[i,a,s]=on.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var an={deltaE76:H1,deltaECMC:q1,deltaE2000:Mo,deltaEJz:K1,deltaEITP:sh,deltaEOK:hh};function Ot(e,t,r={}){fr(r)&&(r={method:r});let{method:n=Ae.deltaE,...o}=r;e=O(e),t=O(t);for(let i in an)if("deltae"+n.toLowerCase()===i.toLowerCase())return an[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function fh(e,t=.25){let n=[M.get("oklch","lch"),"l"];return Ue(e,n,o=>o*(1+t))}function ph(e,t=.25){let n=[M.get("oklch","lch"),"l"];return Ue(e,n,o=>o*(1-t))}var gh=Object.freeze({__proto__:null,darken:ph,lighten:fh});function wc(e,t,r=.5,n={}){[e,t]=[O(e),O(t)],Ze(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return gr(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function bc(e,t,r={}){let n;Ei(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[O(e),O(t)],n=gr(e,t,l));let c=Ot(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(g,m)=>{let v=m*h;return{p:v,color:n(v)}})}if(o>0){let h=u.reduce((g,m,v)=>{if(v===0)return 0;let y=Ot(m.color,u[v-1].color,i);return Math.max(g,y)},0);for(;h>o;){h=0;for(let g=1;g<u.length&&u.length<s;g++){let m=u[g-1],v=u[g],y=(v.p+m.p)/2,k=n(y);h=Math.max(h,Ot(k,m.color),Ot(k,v.color)),u.splice(g,0,{p:y,color:n(y)}),g++}}}return u=u.map(h=>h.color),u}function gr(e,t,r={}){if(Ei(e)){let[l,c]=[e,t];return gr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=O(e),t=O(t),e=nr(e),t=nr(t);let s={colors:[e,t],options:r};if(n?n=M.get(n):n=M.registry[Ae.interpolationSpace]||e.space,o=o?M.get(o):n,e=ge(e,n),t=ge(t,n),e=We(e),t=We(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[we(e,c),we(t,c)];[d,u]=u1(l,[d,u]),Ue(e,c,d),Ue(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((h,g)=>{let m=t.coords[g];return en(h,m,l)}),d=en(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=ge(u,o)),u},{rangeArgs:s})}function Ei(e){return Ze(e)==="function"&&!!e.rangeArgs}Ae.interpolationSpace="lab";function mh(e){e.defineFunction("mix",wc,{returns:"color"}),e.defineFunction("range",gr,{returns:"function<color>"}),e.defineFunction("steps",bc,{returns:"array<color>"})}var vh=Object.freeze({__proto__:null,isRange:Ei,mix:wc,range:gr,register:mh,steps:bc}),yc=new M({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:or,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),$c=new M({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:yc,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),wh=new M({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:$c,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const bh=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],yh=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var xc=new ae({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:bh,fromXYZ_M:yh}),$h=new ae({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:xc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const xh=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],kh=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var kc=new ae({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ti,toXYZ_M:xh,fromXYZ_M:kh});const Sh=1/512,Ch=16/512;var Th=new ae({id:"prophoto",name:"ProPhoto",base:kc,toBase(e){return e.map(t=>t<Ch?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Sh?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Ih=new M({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:on,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),kn(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const is=203,as=2610/2**14,Eh=2**14/2610,Ah=2523/2**5,ss=2**5/2523,ls=3424/2**12,cs=2413/2**7,ds=2392/2**7;var Mh=new ae({id:"rec2100pq",name:"REC.2100-PQ",base:Sn,toBase(e){return e.map(function(t){return(Math.max(t**ss-ls,0)/(cs-ds*t**ss))**Eh*1e4/is})},fromBase(e){return e.map(function(t){let r=Math.max(t*is/1e4,0),n=ls+cs*r**as,o=1+ds*r**as;return(n/o)**Ah})},formats:{color:{id:"rec2100-pq"}}});const us=.17883277,hs=.28466892,fs=.55991073,Un=3.7743;var Ph=new ae({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Sn,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Un:(Math.exp((t-fs)/us)+hs)/12*Un})},fromBase(e){return e.map(function(t){return t/=Un,t<=1/12?Math.sqrt(3*t):us*Math.log(12*t-hs)+fs})},formats:{color:{id:"rec2100-hlg"}}});const Sc={};qe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Cc(e.W1,e.W2,e.options.method))});qe.add("chromatic-adaptation-end",e=>{e.M||(e.M=Cc(e.W1,e.W2,e.options.method))});function Cn({id:e,toCone_M:t,fromCone_M:r}){Sc[e]=arguments[0]}function Cc(e,t,r="Bradford"){let n=Sc[r],[o,i,a]=W(n.toCone_M,e),[s,l,c]=W(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],u=W(d,n.toCone_M);return W(n.fromCone_M,u)}Cn({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Cn({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Cn({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Cn({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Se,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Se.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const _h=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Bh=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Tc=new ae({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Se.ACES,toXYZ_M:_h,fromXYZ_M:Bh,formats:{color:{}}});const Ir=2**-16,Wn=-.35828683,Er=(Math.log2(65504)+9.72)/17.52;var Lh=new ae({id:"acescc",name:"ACEScc",coords:{r:{range:[Wn,Er],name:"Red"},g:{range:[Wn,Er],name:"Green"},b:{range:[Wn,Er],name:"Blue"}},referred:"scene",base:Tc,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ir)*2:r<Er?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ir)+9.72)/17.52:t<Ir?(Math.log2(Ir+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),ps=Object.freeze({__proto__:null,A98RGB:$h,A98RGB_Linear:xc,ACEScc:Lh,ACEScg:Tc,HSL:yc,HSV:$c,HWB:wh,ICTCP:Bo,JzCzHz:_o,Jzazbz:pc,LCH:rr,Lab:de,Lab_D65:Po,OKLCH:Ih,OKLab:on,P3:cc,P3_Linear:sc,ProPhoto:Th,ProPhoto_Linear:kc,REC_2020:ac,REC_2020_Linear:Sn,REC_2100_HLG:Ph,REC_2100_PQ:Mh,XYZ_ABS_D65:Ii,XYZ_D50:Ti,XYZ_D65:ve,sRGB:or,sRGB_Linear:lc});class P{constructor(...t){let r;t.length===1&&(r=O(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:M.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=b1(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=P.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let u=c(...d);return P.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=a),o&&(P.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}}P.defineFunctions({get:we,getAll:pr,set:Ue,setAll:ic,to:ge,equals:y1,inGamut:Zt,toGamut:We,distance:dc,toString:nn});Object.assign(P,{util:a1,hooks:qe,WHITES:Se,Space:M,spaces:M.registry,parse:oc,defaults:Ae});for(let e of Object.keys(ps))M.register(ps[e]);for(let e in M.registry)Lo(e,M.registry[e]);qe.add("colorspace-init-end",e=>{var t;Lo(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Lo(r,e)})});function Lo(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return M.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=M.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=M.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}P.extend(an);P.extend({deltaE:Ot});Object.assign(P,{deltaEMethods:an});P.extend(gh);P.extend({contrast:F1});P.extend(V1);P.extend(x1);P.extend(vh);P.extend(Fr);function Ic(e){return Wr(e,(t,r)=>r instanceof P?_(r.toString({format:"hex"})):Ic(r))}const Rh="dodgerblue";function Ro(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Yn({background:e,foreground:t}){return{background:e??new P(Ro(t)),foreground:t??new P(Ro(e))}}var sn;(function(e){e.Dark="dark",e.Light="light"})(sn||(sn={}));function Nh(e){return e==="black"?"white":"black"}const zh={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},Dh={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function gs({themeColor:e=Rh,themeStyle:t=sn.Light}={}){const r=new P(e),n=new P(t===sn.Dark?"black":"white"),o=Ro(n),i=new P(o),a={nav:{hover:Yn({background:r.clone().set({"hsl.l":93})}),active:Yn({background:r.clone().set({"hsl.l":90})}),selected:Yn({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Dh[Nh(o)],foreground:i,...zh[o]}};return Ic(a)}const ln=mi()("element-book-change-route"),ms="vira-",{defineElement:mr,defineElementNoInputs:Zm}=wi({assertInputs:e=>{if(!e.tagName.startsWith(ms))throw new Error(`Tag name should start with '${ms}' but got '${e.tagName}'`)}}),Ec=p`
    pointer-events: none;
    opacity: 0.3;
`,qt=De({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Oh(e){return`${e}px`}const cn=De({"vira-form-input-border-radius":"8px"}),dn=De({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":p`calc(${cn["vira-form-input-border-radius"].value} + 4px)`});function Ac({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(Oh(n+r+t));return p`
        ${_(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${dn["vira-focus-outline-color"].value};
            border-radius: ${dn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const xt=p`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Mc=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,No=De({"vira-icon-color":"currentColor"}),Fh=De({"vira-icon-stroke-color":No["vira-icon-color"].value,"vira-icon-fill-color":No["vira-icon-color"].value}),jr={...No,...Fh},ie=mr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>p`
        :host {
            display: inline-block;
            color: ${jr["vira-icon-color"].value};
            fill: ${jr["vira-icon-fill-color"].value};
            stroke: ${jr["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var zo;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(zo||(zo={}));mr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===zo.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Mc};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${dn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ec};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${xt};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${cn["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${qt["vira-interaction-animation-duration"].value},
                background-color
                    ${qt["vira-interaction-animation-duration"].value},
                border-color ${qt["vira-interaction-animation-duration"].value};
        }

        ${Ac({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ie} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?f`
                  <${ie}
                      ${hr(ie,{icon:e.icon})}
                  ></${ie}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Do;(function(e){e.Header="header"})(Do||(Do={}));mr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>p`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${xt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${qt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:H()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?p`
                  height: ${e.contentHeight}px;
              `:p`
                  height: 0;
              `;return f`
            <button
                class="header-wrapper"
                ${T("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Do.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Qt(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Oo({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Oo({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Pc({value:e,allowed:t,blocked:r}){const n=t?Oo({input:e,matcher:t}):!0,o=r?Oo({input:e,matcher:r}):!1;return n&&!o}function vs(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Pc({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}mr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:H(),inputBlocked:H()},styles:({hostClasses:e,cssVars:t})=>p`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${dn["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ec};
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
                ${xt};
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
                ${Mc};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${xt};
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
                border-radius: ${cn["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${qt["vira-interaction-animation-duration"].value};
            }

            label {
                ${xt};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${cn["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ac({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${ie} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${xt};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=vs({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?f`
                  <${ie} ${hr(ie,{icon:e.icon})}></${ie}>
              `:"",s=e.fitText?p`
                  width: ${r.forcedInputWidth}px;
              `:"";return f`
            <label>
                ${a}
                ${Ce(!!e.fitText,f`
                        <span
                            class="size-span"
                            ${Qt(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${me({"have-value":!!i})}
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${T("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=i;let h=c.value??"";if(d)if(d.length===1)Pc({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:g,blocked:m}=vs({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=g,t(new o.inputBlocked(m))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${Ce(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});mr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>p`
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
    `,events:{routeChange:H()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Si(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return f`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return f`
                <a href=${a} rel="noopener noreferrer" ${T("click",n)}>
                    <slot></slot>
                </a>
            `}}});function Ai({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const jh=Ai({name:"Element16Icon",svgTemplate:f`
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
    `});Ai({name:"Element24Icon",svgTemplate:f`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const Vh=Ai({name:"Options24Icon",svgTemplate:f`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${jr["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),Hh=p`
    padding: 0;
    margin: 0;
`;p`
    ${Hh}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:$e,defineElementNoInputs:qm}=wi(),Ee=$e()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>p`
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
                ${T("click",i=>{(!e.router||Si(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new ln(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),Le=$e()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>p`
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
            ${Ee.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${ie} {
            display: inline-flex;
            color: ${z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=p`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return f`
                <li style=${n}>
                    <${Ee.assign({router:e.router,route:{paths:[oe.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${me({"title-row":!0,selected:e.selectedPath?jt(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ce(St(r,te.ElementExample),f`
                                    <${ie.assign({icon:jh})}></${ie}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Ee}>
                </li>
            `});return f`
            <slot name=${Ve.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function Zh(e){await zu(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ou(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ze=$e()({tagName:"book-error",styles:p`
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
    `,renderCallback({inputs:e}){return(yn(e.message,"array")?e.message:[e.message]).map(r=>f`
                    <p>${r}</p>
                `)}}),ws=$e()({tagName:"book-breadcrumbs",styles:p`
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
                <${Ee.assign({route:{hash:void 0,search:void 0,paths:[oe.Book,...a]},router:e.router})}>
                    ${r}
                </${Ee}>
                ${s}
            `}):f`
                &nbsp;
            `}}),bs=$e()({tagName:"book-breadcrumbs-bar",styles:p`
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
            ${Ce(!!e.currentSearch,f`
                    &nbsp;
                `,f`
                    <${ws.assign({currentRoute:e.currentRoute,router:e.router})}></${ws}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${T("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await p0(200),n.value===o&&(n.value?t(new ln({paths:[oe.Search,encodeURIComponent(n.value)]})):t(new ln(er)))})}
            />
        `}}),ir=$e()({tagName:"book-page-controls",events:{controlValueChange:H()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>p`
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

        ${ie}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===L.Hidden)return"";const a=qh(e.currentValues[n],o,s=>{const l=yn(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return f`
                    <div class="control-wrapper">
                        ${Ce(i===0,f`
                                <${ie.assign({icon:Vh})}
                                    class="options-icon"
                                ></${ie}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function qh(e,t,r){return gt(t,L.Hidden)?"":gt(t,L.Checkbox)?f`
            <input
                type="checkbox"
                .value=${e}
                ${T("input",n=>{const o=Lt(n,HTMLInputElement);r(o.checked)})}
            />
        `:gt(t,L.Color)?f`
            <input
                type="color"
                .value=${e}
                ${T("input",n=>{const o=Lt(n,HTMLInputElement);r(o.value)})}
            />
        `:gt(t,L.Text)?f`
            <input
                type="text"
                .value=${e}
                ${T("input",n=>{const o=Lt(n,HTMLInputElement);r(o.value)})}
            />
        `:gt(t,L.Number)?f`
            <input
                type="number"
                .value=${e}
                ${T("input",n=>{const o=Lt(n,HTMLInputElement);r(o.value)})}
            />
        `:gt(t,L.Dropdown)?f`
            <select
                .value=${e}
                ${T("input",n=>{const o=Lt(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>f`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:f`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const ys=$e()({tagName:"book-entry-description",styles:p`
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
            `)}}),$s=$e()({tagName:"book-page-wrapper",styles:p`
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
    `,renderCallback({inputs:e}){const t=e.isTopLevel?f`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:f`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[oe.Book,...e.pageNode.fullUrlBreadcrumbs],n=il(e.pageNode.entry.errors);return n&&console.error(n),f`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Ee.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Ee}>
                    ${n?f`
                              <${ze.assign({message:n.message})}></${ze}>
                          `:f`
                              <${ys.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${ys}>
                              <${ir.assign({config:e.pageNode.entry.controls,currentValues:$i(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ir}>
                          `}
                </div>
            </div>
        `}}),Ar=$e()({tagName:"book-element-example-controls",styles:p`
        :host {
            display: flex;
            color: ${z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[oe.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return f`
            <${Ee.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Ee}>
        `}}),xs=Symbol("unset-internal-state"),ks=$e()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:xs},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw il(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===xs&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return f`
                ${Ce(!!t.elementExampleNode.entry.styles,f`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),f`
                <${ze.assign({message:`${t.elementExampleNode.entry.title} failed: ${wn(n)}`})}></${ze}>
            `}},options:{allowPolymorphicState:!0}}),Ss=$e()({tagName:"book-element-example-wrapper",styles:p`
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

        ${Ar} {
            color: ${z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ar} {
            color: ${z["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return f`
            <div class="individual-example-wrapper">
                <${Ar.assign(f0(e,["currentPageControls"]))}></${Ar}>
                <${ks.assign(e)}></${ks}>
            </div>
        `}}),Rt=$e()({tagName:"book-entry-display",styles:p`
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
    `,renderCallback:({inputs:e})=>{const t=Wl(e.currentRoute.paths),r=Uh({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return f`
            <${bs.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${bs}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${Ve.Footer}></slot>
        `}});function _c(e,t,r,n){const o=To(r,n),i=[];if(o){const a=_c(e,t,o,n);a&&i.push(a)}if(St(r,te.Page)&&!e.includes(r)){const a=$i(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:Wr(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Uh({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:i}){if(!e.length&&n)return[f`
                No results
            `];const a=ia(e,1)?_c(e,o,e[0],i):void 0,s=a&&ia(e,1)?f`
                  <${ir.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${ir}>
              `:"",l=M0(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(St(c,te.Page))return f`
                    <${$s.assign({isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                        class="block-entry"
                    ></${$s}>
                `;if(St(c,te.ElementExample)){const u=$i(o,c.fullUrlBreadcrumbs.slice(0,-1));return f`
                    <${Ss.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${Ss}>
                `}else return St(c,te.Root)?f`
                    <h1>${c.entry.title}</h1>
                `:f`
                    <${ze}
                        class="block-entry"
                        ${hr(ze,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${ze}>
                `});return[s,l]}function Wh(e,t,r){const n=Cs(e,t);if(n.length)return n;r(er);const o=Cs(e,er.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Cs(e,t){return e.filter(r=>b0({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Gn=vi()({tagName:"element-book-app",events:{pathUpdate:H()},stateInitStatic:{currentRoute:er,router:void 0,colors:{config:void 0,theme:gs(void 0)},treeBasedCurrentControls:void 0},styles:p`
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

        ${Rt} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Le} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{Ts(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var s,l,c,d;try{let u=function(E){e.router?e.router.setRoutes(E):n({currentRoute:{...e.currentRoute,...E}}),t.elementBookRoutePaths&&!jt(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(E.paths??[]))};var a=u;if(t.elementBookRoutePaths&&!jt(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(s=t.internalRouterConfig)!=null&&s.useInternalRouter&&!e.router){const E=r1(t.internalRouterConfig.basePath);n({router:E}),E.addRouteListener(!0,R=>{n({currentRoute:R})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const h={themeColor:t.themeColor};if(!jt(h,(c=e.colors)==null?void 0:c.config)){const E=gs(h);n({colors:{config:h,theme:E}}),i1(r,E)}const g=t.debug??!1,m=Pu({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:g});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.entries!==t.entries||e.treeBasedCurrentControls.globalValues!==t.globalValues)&&n({treeBasedCurrentControls:{entries:t.entries,globalValues:t.globalValues??{},currentControls:Hl(m.tree,t.globalValues??{})}});const v=Wl(e.currentRoute.paths),k=(v?Zu({flattenedNodes:m.flattenedNodes,searchQuery:v}):void 0)??Wh(m.flattenedNodes,e.currentRoute.paths,u),S=(d=e.treeBasedCurrentControls)==null?void 0:d.currentControls;return S?(t.debug&&console.info({currentControls:S}),f`
                <div
                    class="root"
                    ${T(ln,E=>{const R=r.shadowRoot.querySelector(Rt.tagName);if(R?R.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Rt.tagName}' for scrolling.`),u(E.detail),!(r.shadowRoot.querySelector(Le.tagName)instanceof Le))throw new Error(`Failed to find child '${Le.tagName}'`);Ts(r)})}
                    ${T(ir.events.controlValueChange,E=>{if(!e.treeBasedCurrentControls)return;const R=Lu(S,E.detail.fullUrlBreadcrumbs,E.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:R}})})}
                >
                    <${Le.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:v?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Ve.NavHeader}
                            slot=${Ve.NavHeader}
                        ></slot>
                    </${Le}>
                    <${Rt.assign({currentRoute:e.currentRoute,currentNodes:k,router:e.router,debug:g,currentControls:S,originalTree:m.tree})}>
                        <slot
                            name=${Ve.Footer}
                            slot=${Ve.Footer}
                        ></slot>
                    </${Rt}>
                </div>
            `):f`
                    <${ze.assign({message:"Failed to generate page controls."})}></${ze}>
                `}catch(u){return console.error(u),f`
                <p class="error">${wn(u)}</p>
            `}}});async function Ts(e){const t=e.shadowRoot.querySelector(Le.tagName);if(!(t instanceof Le))throw new Error(`Failed to find child '${Le.tagName}'`);await Zh(t)}const Bc=Symbol("and"),Lc=Symbol("or"),Rc=Symbol("exact"),Nc=Symbol("enum"),zc=Symbol("unknown"),Dc="__vir__shape__definition__key__do__not__use__in__actual__objects";function Yh(e){return Or(e,Dc)}const Gh="__vir__shape__specifier__key__do__not__use__in__actual__objects",Jh=[Bc,Lc,Rc,Nc,zc];function Xh(e){return vr(e,Lc)}function Kh(e){return vr(e,Bc)}function Qh(e){return vr(e,Rc)}function ef(e){return vr(e,Nc)}function tf(e){return vr(e,zc)}function vr(e,t){const r=Oc(e);return!!r&&r.specifierType===t}function Oc(e){if(fi(e)&&Or(e,Gh)){if(!Or(e,"parts")||!pi(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!Or(e,"specifierType")||!Y0(Jh,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Fo(e){return jo(e)}function jo(e){const t=Oc(e);if(t){if(Xh(t)||Qh(t))return jo(t.parts[0]);if(Kh(t))return t.parts.reduce((r,n)=>Object.assign(r,jo(n)),{});if(ef(t))return Object.values(t.parts[0])[0];if(tf(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Yh(e)?Fo(e.shape):e instanceof RegExp||pi(e,"array")?e:fi(e)?Tl(e,(r,n)=>Fo(n)):e}function rf(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Fo(e),[Dc]:!0}}const Ct={color:"--toniq-icon-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function Is(e,t){return`var(${e}, var(${Ct.color}, ${t}))`}const $={stroke:(e="currentColor")=>Is(Ct.strokeColor,e),fill:(e="currentColor")=>Is(Ct.fillColor,e)};class w{constructor(t,r){this.iconName=t,this.svgString=r}}function b(e,...t){return e.reduce((n,o,i)=>{const a=i<t.length?t[i]:"";return n+o+a},"")}const nf=new w("Copy16Icon",b`
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
    `),of=new w("ExternalLink16Icon",b`
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
    `),Ut=new w("InfoCircle16Icon",b`
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
    `),af=new w("ArrowBarUp24Icon",b`
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
    `),sf=new w("ArrowForwardUp24Icon",b`
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
    `),Mi=new w("ArrowLeft24Icon",b`
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
    `),lf=new w("ArrowLoopLeft24Icon",b`
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
    `),cf=new w("ArrowLoopRight24Icon",b`
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
    `),Pi=new w("ArrowRight24Icon",b`
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
    `),Fc=new w("ArrowsSort24Icon",b`
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
    `),Es={interactionDuration:p`--toniq-interaction-transition-duration`,prettyDuration:p`--toniq-pretty-transition-duration`},Y={interaction:p`var(${Es.interactionDuration}, 84ms)`,pretty:p`var(${Es.prettyDuration}, 300ms)`};function df(e,t){return e.map(t)}function jc(e,t){return e.match(t)??[]}function uf(e){return e.replace(/,/g,"")}function hf(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function As(e){return e!==e.toUpperCase()}function Vo(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0?i[o-1]:"",s=o<i.length-1?i[o+1]:"",l=As(a)||As(s);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function ar(e,t){return e.split(t)}const ff=String(NaN);function Vc(e){if(typeof e=="string"&&isNaN(Number(e)))return ff;const t=String(e),[r,n]=t.split("."),o=n?`.${n}`:"";return`${jc(r.split("").reverse().join(""),/.{1,3}/g).reverse().map(s=>s.split("").reverse().join("")).join(",")}${o}`}function pf(e){return typeof e=="number"?e:Number(typeof e=="string"?uf(e):e)}function gf(e){return String(e).includes("e")}function _i(e){return!!e}function mf(e){return!!e&&typeof e=="object"}function Me(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function vf(e){return Me(e).filter(t=>isNaN(Number(t)))}function wf(e,t){return Me(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ho(e,t){return wf(e,r=>!t.includes(r))}function sr(e,t){let r=!1;const n=Me(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Me(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}const Jn="://";function bf(...e){const t=e.join("/"),[r,n=""]=t.includes(Jn)?t.split(Jn):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>s.includes("?")||o?(o=!0,s):encodeURIComponent(s)).reduce((s,l,c,d)=>{if(i)return s;const u=d[c+1];let h=l;const g=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||g){i=!0;let m=!1;const v=d.slice(g?c+2:c+1).reduce((y,k)=>(k.includes("#")&&(m=!0),m?y.concat(k):[y,k].join("&")),"");h=[l,u,v].join("")}return s.concat(h)},[]);return[r,r?Jn:"",a.join("/")].join("")}const yf=["k","M","B","T","P","E","Z","Y"];function Bi({beforeDot:e,afterDot:t="",maxLength:r}){if(t.length){const n=r-e.length-1;if(n>0){const o=t.slice(0,n);return Number(o)?[e,o].join("."):e}}return e}function $f(e,t,r){const[n,o]=ar(e,"."),i=Vc(n),a=jc(i,/,/g).length,s=t[a-1],[l,c]=ar(i,","),d=[c,o].join("");return l.length+1>r?["0.",l[0],t[a]].join(""):[Bi({beforeDot:l,afterDot:d,maxLength:r-1}),s].join("")}const Ms=3;function xf({input:e,maxLength:t}){const r=String(e),[n,o]=ar(r,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=ar(n,"."),d=i.length+Ms;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Bi({afterDot:c,beforeDot:l,maxLength:t-i.length+Ms}),s].join("")}function kf(e,t){const[r,n]=ar(Vc(e),".");if(r.length<=t)return Bi({beforeDot:r,afterDot:n,maxLength:t})}function Sf(e,{customSuffixes:t=yf,maxLength:r=6}={}){const n=pf(e);if(isNaN(n)||n===1/0)return String(n);if(gf(n))return xf({input:n,maxLength:r});const o=String(n),i=kf(o,r);return i??$f(o,t,r)}function Li(){return e=>e}function Xn(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Cf=(()=>{const e={backgroundColor:p`#ffffff`,foregroundColor:p`#000000`},t={...e,foregroundColor:p`#00D093`},r={...e,foregroundColor:p`#ACADAD`},n={...e,foregroundColor:p`#D6D6D6`},o={...t},i={...t,foregroundColor:p`#00A876`},a={...t,foregroundColor:p`#1D6852`},s={...n},l={...e,foregroundColor:p`#EAFBF7`},c={...e,backgroundColor:p`#D2EEFA`},d=Xn(o),u=Xn(i),h=Xn(a),g=h,m={backgroundColor:p`#F1F3F6`,foregroundColor:e.foregroundColor},v={...m,foregroundColor:p`#9A9A9D`};return Li()({brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:n,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:g,accentPrimary:d,accentPrimaryHover:u,accentPrimaryActive:h,accentSecondary:m,accentTertiary:v})})(),Hc=Cf;function Ps(e,t){return _(`--toniq-${Vo(e)}-${Vo(t)}`)}const Ri=sr(Hc,e=>({backgroundColor:Ps(e,"backgroundColor"),foregroundColor:Ps(e,"foregroundColor")}));function ke(e,t){const r=Hc[e][t],n=Ri[e][t];return p`var(${n}, ${r})`}const x=sr(Ri,e=>({foregroundColor:ke(e,"foregroundColor"),backgroundColor:ke(e,"backgroundColor")}));function D(e){return p`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const ut=p`
    pointer-events: none;
    opacity: 0.3;
`;function Wt(e,t,r){return Math.min(Math.max(e,t),r)}function bt(e){return`${e}px`}function Kn(e){return`${e}%`}function Qn(e,t){const r=e[0],n=e[e.length-1];if(r==null||n==null)return 0;if(t<r)return r;if(t>n)return n;const o=e.findIndex((c,d)=>{const u=e[d+1];return u==null?!0:c<=t&&u>=t});if(o<0)return r;const i=e[o];if(i==null)return r;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function Tf(e,t,r=100){e>t&&([e,t]=[t,e]),r<2&&(r=2);let n=If(e);const o=[e];for(;n<t;){const i=Math.pow(10,String(n).length-1),a=n+i;a<t&&o.push(a),n=a}return o.push(t),o.length>r&&(_s(o,r),o.length>r&&_s(o,r)),o}function _s(e,t){const r=e.length-t,n=(e.length-2)/r;for(let o=e.length-2;o>=1;o-=n)e.splice(Math.floor(o),1)}function If(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const r=e.toFixed(0),n=Math.pow(10,r.length-1),o=Number(r[0]||1);return n*o*t}function Xe({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=_(bt(n+r+t));return p`
        ${_(e)}::after {
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
    `}const Zc=Li()({toniqFont:{"font-family":p`'Rubik', sans-serif`},normalWeightFont:{"font-weight":p`400`},boldFont:{"font-weight":p`600`},extraBoldFont:{"font-weight":p`900`},paragraphFont:{"line-height":p`24px`,"font-size":p`16px`},boldParagraphFont:{},labelFont:{"line-height":p`16px`,"font-size":p`12px`},boldLabelFont:{},h1Font:{"line-height":p`96px`,"font-size":p`64px`},h2Font:{"line-height":p`48px`,"font-size":p`32px`},h3Font:{"line-height":p`32px`,"font-size":p`24px`},monospaceFont:{"font-family":p`'Inconsolata', monospace`,"line-height":p`1.125em`}}),Ef=sr(Zc,(e,t)=>{const r=_(Vo(e.replace(/Font$/,"")));return sr(t,o=>{const i=_(o);return p`--toniq-font-${r}-${i}`})});function Te(e){const t=Ef[e],r=Zc[e],n=Me(t).map(o=>{const i=r[o],a=t[o];return p`
            ${_(o)}: var(${a}, ${i});
        `});return _(n.join(`
`))}const Z=(()=>{const e=p`
        font-style: normal;
        color: ${x.pagePrimary.foregroundColor};
        ${Te("toniqFont")};
    `,t=p`
        ${e};
        ${Te("normalWeightFont")};
    `,r=p`
        ${e};
        ${Te("boldFont")};
    `,n=p`
        ${e};
        ${Te("extraBoldFont")};
    `,o=p`
        ${e};
        ${Te("paragraphFont")};
        ${t};
    `,i=p`
        ${e};
        ${o};
        ${r};
    `,a=p`
        ${e};
        ${Te("labelFont")};
        ${t};
    `,s=p`
        ${a};
        ${r};
    `,l=p`
        ${Te("h1Font")};
        ${n};
    `,c=p`
        ${Te("h2Font")};
        ${r};
    `,d=p`
        ${Te("h3Font")};
        ${r};
    `,u=p`
        ${Te("monospaceFont")}
    `;return Li()({toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:n,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,monospaceFont:u})})(),Ke=p`
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
`,un={popupShadow:p`
        filter: drop-shadow(0px 12px 8px ${x.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:p`
        filter: drop-shadow(0px -12px 8px ${x.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:p`
        filter: drop-shadow(0px 12px 8px ${x.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Af(e,t=!0){const r=_(e),n=e===":host"?p`
                  :host(:hover) ;
              `:p`
                  ${r}:hover
              `,o=t?p`
              ${r} {
                  cursor: pointer;
              }
              ${n} {
                  border-color: ${x.pageInteraction.foregroundColor};
              }
          `:p``;return p`
        ${r} {
            border-radius: 16px;
            background-color: ${x.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${un.popupShadow};
        }

        ${o}
    `}const ht=p`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Mf=new w("ArrowsSortAscending24Icon",b`
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
    `),Pf=new w("ArrowsSortDescending24Icon",b`
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
    `),_f=new w("Bucket24Icon",b`
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
    `),Bf=new w("BuildingStore24Icon",b`
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
    `),Lf=new w("CalendarEvent24Icon",b`
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
    `),Rf=new w("Cash24Icon",b`
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
    `),Nf=new w("Chain24Icon",b`
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
    `),qc=new w("CheckMark24Icon",b`
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
    `),Uc=new w("ChevronDown24Icon",b`
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
    `),zf=new w("ChevronUp24Icon",b`
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
    `),Df=new w("Circle24Icon",b`
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
    `),Wc=new w("CircleDot24Icon",b`
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
    `),Of=new w("CirclePlusFill24Icon",b`
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
    `),Ff=new w("CirclePlusOutline24Icon",b`
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
    `),jf=new w("CircleWavyCheck24Icon",b`
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
    `),Vf=new w("Clock24Icon",b`
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
    `),Yc=new w("Code24Icon",b`
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
    `),Gc=new w("Copy24Icon",b`
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
    `),Hf=new w("CreateFile24Icon",b`
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
    `),Zf=new w("DotsVertical24Icon",b`
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
    `),qf=new w("Download24Icon",b`
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
    `),Uf=new w("Edit24Icon",b`
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
    `),Jc=new w("ExternalLink24Icon",b`
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
    `),Wf=new w("Filter24Icon",b`
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
    `),Yf=new w("Geometry24Icon",b`
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
    `),Gf=new w("GridDots24Icon",b`
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
    `),Jf=new w("HeartFill24Icon",b`
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
    `),Xf=new w("HeartOutline24Icon",b`
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
    `),Kf=new w("Infinity24Icon",b`
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
    `),Qf=new w("Info24Icon",b`
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
    `),e2=new w("LayersLinked24Icon",b`
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
    `),t2=new w("LayoutGrid24Icon",b`
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
    `),r2=new w("Lifebuoy24Icon",b`
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
    `),n2=new w("List24Icon",b`
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
    `),o2=new w("ListDetails24Icon",b`
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
    `),i2=new w("Loader24Icon",b`
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
    `),Xc=new w("LoaderAnimated24Icon",b`
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
    `),a2=new w("Lock24Icon",b`
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
    `),s2=new w("LockOpen24Icon",b`
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
    `),l2=new w("Menu24Icon",b`
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
    `),c2=new w("Paper24Icon",b`
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
    `),d2=new w("Person24Icon",b`
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
    `),u2=new w("Photo24Icon",b`
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
    `),h2=new w("Refresh24Icon",b`
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
    `),Kc=new w("Rocket24Icon",b`
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
    `),Qc=new w("Search24Icon",b`
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
    `),f2=new w("Send24Icon",b`
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
    `),p2=new w("ShoppingCart24Icon",b`
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
    `),g2=new w("Social24Icon",b`
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
    `),m2=new w("Square24Icon",b`
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
    `),v2=new w("SquareCheck24Icon",b`
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
    `),Vr=new w("Trash24Icon",b`
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
    `),w2=new w("Upload24Icon",b`
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
    `),b2=new w("User24Icon",b`
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
    `),y2=new w("Users24Icon",b`
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
    `),$2=new w("Wallet24Icon",b`
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
    `),x2=new w("WorldUpload24Icon",b`
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
    `),k2=new w("X24Icon",b`
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
    `),ed=new w("Kyc32Icon",b`
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
    `),td=new w("FolderOff48Icon",b`
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
    `),rd=new w("Api64Icon",b`
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
    `),S2=new w("CircleDashes64Icon",b`
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
    `),C2=new w("Rocket64Icon",b`
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
    `),T2=new w("CryptoBtc24Icon",b`
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
    `),I2=new w("CryptoCkBtc24Icon",b`
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
    `),E2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==",nd="0 0 58 58",od=`<image xlink:href="${E2}" id="icp-16__b" width="58" height="58" />`,A2=new w("CryptoIcp16Icon",b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${nd}"
        >
            ${od}
        </svg>
    `),M2=new w("CryptoIcp24Icon",b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${nd}"
        >
            ${od}
        </svg>
        </svg>
    `),P2=new w("EntrepotLogo144Icon",b`
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
    `),id=new w("BrandDiscord24Icon",b`
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
    `),_2=new w("BrandFacebookLogo24Icon",b`
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
    `),B2=new w("BrandGoogleLogo24Icon",b`
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
    `),L2=new w("BrandIcScan24Icon",b`
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
    `),ad=new w("BrandInstagram24Icon",b`
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
    `),R2=new w("BrandInstagramFlat24Icon",b`
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
    `),sd=new w("BrandTelegram24Icon",b`
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
    `),ld=new w("BrandTiktok24Icon",b`
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
    `),N2=new w("BrandTiktokFlat24Icon",b`
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
    `),cd=new w("BrandTwitch24Icon",b`
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
    `),dd=new w("BrandTwitter24Icon",b`
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
    `),ot={"core-16":[nf,of,Ut],"core-24":[af,sf,Mi,lf,cf,Pi,Fc,Mf,Pf,_f,Bf,Lf,Rf,Nf,qc,Uc,zf,Df,Wc,Of,Ff,jf,Vf,Yc,Gc,Hf,Zf,qf,Uf,Jc,Wf,Yf,Gf,Jf,Xf,Kf,Qf,e2,t2,r2,n2,o2,i2,Xc,a2,s2,l2,c2,d2,u2,h2,Kc,Qc,f2,p2,g2,m2,v2,Vr,w2,b2,y2,$2,x2,k2],"core-32":[ed],"core-48":[td],"core-64":[rd,S2,C2],cryptocurrencies:[T2,I2,A2,M2],logos:[P2],"third-party-brands":[id,_2,B2,L2,ad,R2,sd,ld,N2,cd,dd]},z2=rf({Discord:"",Instagram:"",Telegram:"",TikTok:"",Twitch:"",Twitter:"",website:""}),D2=z2.defaultValue,ud={Discord:id,Instagram:ad,Telegram:sd,TikTok:ld,Twitch:cd,Twitter:dd,website:Yc},Bs="toniq-",{defineElement:X,defineElementNoInputs:O2}=wi({assertInputs:e=>{if(!e.tagName.startsWith(Bs))throw new Error(`Tag name should start with '${Bs}' but got '${e.tagName}'`)}}),A=X()({tagName:"toniq-icon",hostClasses:{"toniq-icon-fit-icon":!1},styles:({hostClasses:e})=>p`
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
            ${e.icon?P0(e.icon.svgString):""}
        `}}),Zo=p`8px`;var lr=(e=>(e.Default="default",e.Outline="outline",e.Secondary="secondary",e))(lr||{});const q=X()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.buttonStyle==="secondary","toniq-button-outline":({inputs:e})=>e.buttonStyle==="outline","toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${Z.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${ht};
        }

        :host(:hover) button {
            ${D(x.accentPrimaryHover)};
        }

        :host(:active) button {
            ${D(x.accentPrimaryActive)};
        }

        button {
            ${Ke};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Zo};
            ${D(x.accentPrimary)};
            padding: 10px;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                border-color ${Y.interaction};
        }

        ${Xe({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${D(x.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${D(x.pagePrimary)};
            border-color: ${x.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${ut};
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
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${A.assign({icon:e.icon})}
                      class="icon-template"
                  ></${A}>
              `:"",r=e.text?f`
                  <span class="text-template">${e.text}</span>
              `:"";return f`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${r}</slot>
            </button>
        `}});function F2(e,t,r={behavior:"smooth"}){let n=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=Ni(e)[o];i==="-"&&(n*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+n,c=s.filter(u=>i==="+"?u>l:u<l).sort((u,h)=>i==="+"?u-h:h-u);let d;return c.length>0?d=c[0]:i==="+"?d=a:d=0,e.scrollTo({...r,[o==="x"?"left":"top"]:d})}function j2(e){const t=window.getComputedStyle(e),r=e.getBoundingClientRect();let n=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(h,g){let m=parseFloat(h);return/%/.test(h)&&(m/=100,m*=g),m}let l=s(n,r.width),c=s(o,r.height),d=s(i,r.width),u=s(a,r.height);return{x:{before:l,after:d},y:{before:c,after:u}}}function V2(e,t,r="both"){return r==="x"&&e.right>=t.left&&e.left<=t.right||r==="y"&&e.bottom>=t.top&&e.top<=t.bottom||r==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function hd(e){let t=[];for(const r of e.children)t=t.concat(r,hd(r));return t}function H2(e,t=!0){const r=e.getBoundingClientRect(),n={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=hd(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const d of o){const u=d.getBoundingClientRect();if(t&&!V2(r,u,a))continue;const h=window.getComputedStyle(d);let[g,m]=h.getPropertyValue("scroll-snap-align").split(" ");typeof m>"u"&&(m=g);const v=i==="x"?m:g,y=u[s]-r[s]+e[c];switch(v){case"none":break;case"start":n[i].start.push(y);break;case"center":n[i].center.push(y+u[l]/2);break;case"end":n[i].end.push(y+u[l]);break}}}return n}function Ni(e){const t=e.getBoundingClientRect(),r=j2(e),n=H2(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Ls([...n.x.start.map(a=>a-r.x.before),...n.x.center.map(a=>a-t.width/2),...n.x.end.map(a=>a-t.width+r.x.after)].map(i(0,o.x))),y:Ls([...n.y.start.map(a=>a-r.y.before),...n.y.center.map(a=>a-t.height/2),...n.y.end.map(a=>a-t.height+r.y.after)].map(i(0,o.y)))}}function Ls(e){return Array.from(new Set(e))}const Hr="templates-container",Z2=4e3;var qo=(e=>(e.Default="default",e.BannerStyle="banner-style",e))(qo||{});const se=X()({tagName:"toniq-carousel",cssVars:{"toniq-carousel-arrow-margin":"40px"},hostClasses:{"toniq-carousel-banner-style":({inputs:e})=>e.style==="banner-style"},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},templatesWrapperHeight:0,scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        .${_(Hr)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }

        .${_(Hr)} {
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

        .arrow ${A} {
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:r,host:n}){e.enableAutomaticCycling&&t.rotationIntervalId==null?r({rotationIntervalId:window.setInterval(()=>{eo({host:n,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||Z2)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),r({rotationIntervalId:void 0}));const o=Rs(t.scrollSnapPositions,0),i=Rs(t.scrollSnapPositions,-1);return f`
            <div
                ${Qt(()=>{r({scrollSnapPositions:Ni(Uo(n)).x})})}
                class=${Hr}
                ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};r({currentScrollPosition:l})})}
            >
                <div class="arrow left">
                    <${A.assign({icon:Mi})}
                        class=${me({hidden:o==null?!0:t.currentScrollPosition.left<=o})}
                        ${T("click",()=>{eo({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:n})})}
                    ></${A}>
                </div>
                ${e.templates.map(a=>f`
                        <div class="template-wrapper">${a}</div>
                    `)}
                <div class="arrow right">
                    <${A.assign({icon:Pi})}
                        class=${me({hidden:i==null?!0:t.currentScrollPosition.left>=i})}
                        ${T("click",()=>{eo({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:n})})}
                    ></${A}>
                </div>
            </div>
        `}});function Rs(e,t){const r=t>=0?1:-1,n=t<0?e.length+t:t,o=n+r,i=e[n],a=e[o];if(!(i==null||a==null))return(i+a)/2+r*20}function Uo(e){const t=e.shadowRoot.querySelector(`.${Hr}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function eo({host:e,direction:t,allowWrapping:r,blockIfHovering:n}){if(n&&e.matches(":hover"))return;const o=Uo(e),i=o.clientWidth,a=Ni(Uo(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,d=o.scrollLeft<=s+10;if(t==="right"&&c)r&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)r&&o.scrollTo({behavior:"smooth",left:l});else{const u=q2(e,t),h=Ns(o.scrollLeft,a,!1),g=t==="right"?1:-1,m=(o.clientWidth-u*3)*g,v=Ns((h||0)+m,a,!0);t==="right"&&v>h?o.scrollTo({behavior:"smooth",left:v}):t==="left"&&v<h?o.scrollTo({behavior:"smooth",left:v}):F2(o,t)}}function q2(e,t){const r=`.arrow.${t}`,n=e.shadowRoot.querySelector(r);if(!n)throw new Error("Failed to find arrow element for calculating its size.");return n.clientWidth}function Ns(e,t,r){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!r||i<=e)?i:o},1/0)}const je=X()({tagName:"toniq-checkbox",events:{checkedChange:H()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(ke("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(ke("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(ke("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(ke("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(ke("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>p`
        :host {
            ${Z.boldParagraphFont};
            display: inline-flex;
            transition: color ${Y.interaction},
                background-color ${Y.interaction},
                opacity ${Y.interaction};
            border-radius: 8px;
        }

        button {
            ${Ke};
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
            ${ht};
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

        ${Xe({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${ut};
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){const n=f`
            <span class="checkbox ${e.checked?"checked":""}">
                <${A.assign({icon:qc})}
                    class="check-mark ${me({hidden:!e.checked})}"
                ></${A}>
            </span>
        `,o=f`
            <slot
                class=${me({label:!0,checked:e.checked})}
            >
                <span
                    class=${me({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return f`
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
        `}});var Wo=(e=>(e.Default="default",e.Secondary="secondary",e))(Wo||{});const to=X()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.style==="secondary"},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${Z.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${D(x.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${D(x.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${A.assign({icon:e.icon})}></${A}>
              `:"";return f`
            ${t}
            <slot>${e.text}</slot>
        `}}),U2="data-test-id",yt=Ge(class extends Je{constructor(e){super(e),this.element=W2(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(U2,e),ye}});function W2(e,t,r){Y2(e,t);const n=e.element;if(!(n instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return n}function Y2(e,t){if(e.type!==dr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Yo=(e=>(e.Up="up",e.Down="down",e))(Yo||{});const Mr=X()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:H(),openChange:H()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${Z.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${Ke}
            border-radius: 8px;
            outline: none;
        }

        ${Xe({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${ht};
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
            ${un.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${un.popupShadowReversed};
        }

        .selected-label-prefix {
            ${Z.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${ht};
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
            ${ut};
        }
    `,initCallback:({state:e,host:t,updateState:r})=>{function n(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&r({dropdownOpen:!1})}window.addEventListener("click",n)},renderCallback({dispatch:e,events:t,state:r,inputs:n,updateState:o}){n._forceOpenState!=null&&o({dropdownOpen:n._forceOpenState}),n.disabled&&o({dropdownOpen:!1});const i=n.value?n.options.find(l=>{var c;return l.value===((c=n.value)==null?void 0:c.value)})??n.options[0]:n.options[0],a=n.icon?f`
                  <${A.assign({icon:n.icon})}
                      ${yt("rendered-input-icon")}
                  ></${A}>
              `:"",s=n.selectedLabelPrefix?f`
                  <span class="selected-label-prefix">${n.selectedLabelPrefix}</span>
              `:"";return f`
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
                        <${A.assign({icon:Uc})}
                            class="trigger-icon"
                        ></${A}>
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
        `}}),xe=X()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles},events:{routeChangeTriggered:H()},styles:({hostClasses:e})=>p`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){function n(o){e.treatAsRouteChange&&Si(o)&&(o.preventDefault(),e.scrollToTop&&window.scrollTo(0,0),t(new r.routeChangeTriggered))}return e.newTab?f`
                <a
                    href=${e.url}
                    ${T("click",n)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `:f`
                <a href=${e.url} ${T("click",n)}><slot></slot></a>
            `}}),Go=360,fd=8;function pd(e){return(e-fd)/2}const kt=De({"main-image-size":Go,"secondary-image-size":pd(Go)}),_e=X()({tagName:"toniq-featured-flip-card-footer",styles:p`
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

        ${q}, ${xe} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${kt["secondary-image-size"].value} * 2);
        }

        ${xe} ${q} {
            width: 100%;
        }

        ${xe} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${kt["secondary-image-size"].value};
        }
    `,events:{footerViewMoreButtonClick:H(),footerFlipCardButtonClick:H()},renderCallback({inputs:e,dispatch:t,events:r}){const n=e.socialUrls,o=n?Me(n).filter(i=>!!n[i]).map(i=>{const a=n[i],s=ud[i];return f`
                          <${xe.assign({newTab:!0,url:a})}>
                              <${A.assign({icon:s})}></${A}>
                          </${xe}>
                      `}):"";return f`
            <div class="buttons">
                ${e.viewMoreButtonUrl?f`
                          <${xe.assign({newTab:!1,url:e.viewMoreButtonUrl,scrollToTop:!0,treatAsRouteChange:!0})}
                              ${T(xe.events.routeChangeTriggered,()=>{t(new r.footerViewMoreButtonClick)})}
                          >
                              <${q.assign({text:e.viewMoreButtonText,buttonStyle:lr.Outline})}></${q}>
                          </${xe}>
                      `:f`
                          <${q.assign({text:e.viewMoreButtonText,buttonStyle:lr.Outline})}
                              ${T("click",()=>{t(new r.footerViewMoreButtonClick)})}
                          ></${q}>
                      `}
                ${e.flipCardButtonText?f`
                          <${q.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new r.footerFlipCardButtonClick)})}
                          ></${q}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}});function gd(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function G2({value:e,min:t,max:r}){return Math.max(Math.min(e,r),t)}function md(e){return e?e instanceof Error?e.message:hn(e,"message")?String(e.message):String(e):""}function ro(e){return e instanceof Error?e:new Error(md(e))}function J2(e){return!!e}function X2(e){return!!e&&typeof e=="object"}const K2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function hn(e,t){return e?K2.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function fn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function vd(e,t,r=!1,n={}){const o=fn(e),i=new Set(fn(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!hn(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||wd(l,c,s,r,n[a]??{})})}function wd(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{hn(t,"constructor")&&(!hn(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{wd(l,u,r,n,o);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${md(h)}`)}}).filter(J2).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):X2(t)&&vd(e,t,n,o)}function zi(e){return Array.isArray(e)?"array":typeof e}function pn(e,t){return zi(e)===t}function Q2(e,t,r){if(!pn(e,t))throw new TypeError(`'${r}' is of type '${zi(e)}' but type '${t}' was expected.`)}function zs({jsonString:e,errorHandler:t,shapeMatcher:r}){try{const n=JSON.parse(e);return r!=null&&(pn(r,"object")?vd(n,r):Q2(n,zi(r),"parsedJson")),n}catch(n){if(t)return t(n);throw n}}function bd(e,t){let r=!1;const n=fn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(fn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Pr(e){return String(e).endsWith("px")?String(e):`${e}px`}function ep(e){const t=Tn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class tp extends Error{constructor(t,r=`Promised timed out after ${t} ms.`){super(r),this.durationMs=t,this.message=r,this.name="PromiseTimeoutError"}}function rp(e,t){return new Promise(async(r,n)=>{const o=e===1/0?void 0:setTimeout(()=>{n(new tp(e))},e);try{const i=await t;r(i)}catch(i){n(i)}finally{clearTimeout(o)}})}function Tn(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Tn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function np(e,t){return e<t}function op(e,t){return e>t}const Ds={width:250,height:250};function ip({constraint:e,box:t,constraintType:r="max"}){return(r==="max"?op:np)(t.width/t.height,e.width/e.height)?"width":"height"}function no({box:e,constraint:t,constraintType:r}){const n=ip({box:e,constraint:t,constraintType:r});return t[n]/e[n]}function yd({box:e,ratio:t}){return bd(e,(r,n)=>n*t)}function Jo({box:e,min:t,max:r}){return bd(e,(n,o)=>G2({value:o,min:(t==null?void 0:t[n])??0,max:(r==null?void 0:r[n])??1/0}))}function $d({min:e,max:t,box:r}){const n=xd({min:e,max:t,box:r}),o=yd({box:r,ratio:n});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Ds.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Ds.width)}}function xd({min:e,max:t,box:r}){if(!e&&!t)return 1;const n=e?no({box:r,constraint:e,constraintType:"min"}):1,o=t?no({box:r,constraint:t,constraintType:"max"}):1,i=n>1?n:o<1?o:1,a=yd({ratio:i,box:r});return(e?no({box:a,constraint:e,constraintType:"min"}):1)>1?n:i}function ap(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function at(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if((!t||!(t!=null&&t.length))&&(!r||!r.length))return"";const n=[...r||[],""],i=(t??[""]).map((a,s)=>{const l=sp(a,n[s]);return`${a}${l}`});return ap(i.join(""))}function sp(e,t){return t._$litType$!=null||t._$litDirective$!=null?at(t):Array.isArray(t)?t.map(n=>at(n)).join(""):e.endsWith("=")?`"${t}"`:t}function lp(e){const t=cp(e);return pn(t,"object")||pn(t,"array")}function cp(e){const t=zs({jsonString:e,errorHandler:()=>{}});if(t)return t;const r=dp(e);return zs({jsonString:r,errorHandler:()=>{}})}function dp(e){return gd(e).replace(/,\s*([}\]])/,"$1")}const Di="vir-resizable-image";function up(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Et=up();function hp(){try{if(!Et||!Et.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Oi(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const I=Promise;function F(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function $t(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function Oe(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Fi(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Xo="local-forage-detect-blob-support";let _r;const be={},fp=Object.prototype.toString,wr="readonly",In="readwrite";function pp(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function gp(e){return new I(function(t){var r=e.transaction(Xo,In),n=Oi([""]);r.objectStore(Xo).put(n,"key"),r.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},r.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function mp(e){return typeof _r=="boolean"?I.resolve(_r):gp(e).then(function(t){return _r=t,_r})}function gn(e){var t=be[e.name],r={};r.promise=new I(function(n,o){r.resolve=n,r.reject=o}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function Ko(e){var t=be[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Qo(e,t){var r=be[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function kd(e,t){return new I(function(r,n){if(be[e.name]=be[e.name]||Id(),e.db)if(t)gn(e),e.db.close();else return r(e.db);var o=[e.name];t&&o.push(e.version);var i=Et.open.apply(Et,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Xo)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),n(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},r(a),Ko(e)}})}function ji(e){return kd(e,!1)}function Vi(e){return kd(e,!0)}function Sd(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function vp(e){return new I(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},n.readAsBinaryString(e)})}function Cd(e){var t=pp(atob(e.data));return Oi([t],{type:e.type})}function Td(e){return e&&e.__local_forage_encoded_blob}function wp(e){var t=this,r=t._initReady().then(function(){var n=be[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return $t(r,e,e),r}function bp(e){gn(e);for(var t=be[e.name],r=t.forages,n=0;n<r.length;n++){const o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,ji(e).then(o=>(e.db=o,Sd(e)?Vi(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=o}).catch(o=>{throw Qo(e,o),o})}function Fe(e,t,r,n){n===void 0&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(i){if(n>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return I.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Vi(e)}).then(()=>bp(e).then(function(){Fe(e,t,r,n-1)})).catch(r);r(i)}}function Id(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function yp(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=be[r.name];o||(o=Id(),be[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=wp);var i=[];function a(){return I.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return I.all(i).then(function(){return r.db=o.db,ji(r)}).then(function(d){return r.db=d,Sd(r,t._defaultConfig.version)?Vi(r):d}).then(function(d){r.db=o.db=d,t._dbInfo=r;for(var u=0;u<c.length;u++){var h=c[u];h!==t&&(h._dbInfo.db=r.db,h._dbInfo.version=r.version)}})}function $p(e,t){var r=this;e=Oe(e);var n=new I(function(o,i){r.ready().then(function(){Fe(r._dbInfo,wr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),Td(d)&&(d=Cd(d)),o(d)},c.onerror=function(){i(c.error)}}catch(d){i(d)}})}).catch(i)});return F(n,t),n}function xp(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){Fe(r._dbInfo,wr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),d=1;c.onsuccess=function(){var u=c.result;if(u){var h=u.value;Td(h)&&(h=Cd(h));var g=e(h,u.key,d++);g!==void 0?o(g):u.continue()}else o()},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return F(n,t),n}function kp(e,t,r){var n=this;e=Oe(e);var o=new I(function(i,a){var s;n.ready().then(function(){return s=n._dbInfo,fp.call(t)==="[object Blob]"?mp(s.db).then(function(l){return l?t:vp(t)}):t}).then(function(l){Fe(n._dbInfo,In,function(c,d){if(c)return a(c);try{var u=d.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var h=u.put(l,e);d.oncomplete=function(){l===void 0&&(l=null),i(l)},d.onabort=d.onerror=function(){var g=h.error?h.error:h.transaction.error;a(g)}}catch(g){a(g)}})}).catch(a)});return F(o,r),o}function Sp(e,t){var r=this;e=Oe(e);var n=new I(function(o,i){r.ready().then(function(){Fe(r._dbInfo,In,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;i(d)}}catch(d){i(d)}})}).catch(i)});return F(n,t),n}function Cp(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Fe(t._dbInfo,In,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return F(r,e),r}function Tp(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Fe(t._dbInfo,wr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return F(r,e),r}function Ip(e,t){var r=this,n=new I(function(o,i){if(e<0){o(null);return}r.ready().then(function(){Fe(r._dbInfo,wr,function(a,s){if(a)return i(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,d=l.openKeyCursor();d.onsuccess=function(){var u=d.result;if(!u){o(null);return}e===0||c?o(u.key):(c=!0,u.advance(e))},d.onerror=function(){i(d.error)}}catch(u){i(u)}})}).catch(i)});return F(n,t),n}function Ep(e){var t=this,r=new I(function(n,o){t.ready().then(function(){Fe(t._dbInfo,wr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var d=l.result;if(!d){n(c);return}c.push(d.key),d.continue()},l.onerror=function(){o(l.error)}}catch(d){o(d)}})}).catch(o)});return F(r,e),r}function Ap(e,t){t=Fi.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;if(!e.name)o=I.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?I.resolve(n._dbInfo.db):ji(e).then(s=>{const l=be[e.name],c=l.forages;l.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;gn(e);const c=be[e.name],d=c.forages;s.close();for(let h=0;h<d.length;h++){const g=d[h];g._dbInfo.db=null,g._dbInfo.version=l}return new I((h,g)=>{const m=Et.open(e.name,l);m.onerror=v=>{m.result.close(),g(v)},m.onupgradeneeded=()=>{var v=m.result;v.deleteObjectStore(e.storeName)},m.onsuccess=()=>{const v=m.result;v.close(),h(v)}}).then(h=>{c.db=h;for(let g=0;g<d.length;g++){const m=d[g];m._dbInfo.db=h,Ko(m._dbInfo)}}).catch(h=>{throw(Qo(e,h)||I.resolve()).catch(()=>{}),h})}):o=a.then(s=>{gn(e);const l=be[e.name],c=l.forages;s.close();for(var d=0;d<c.length;d++){const h=c[d];h._dbInfo.db=null}return new I((h,g)=>{var m=Et.deleteDatabase(e.name);m.onerror=()=>{const v=m.result;v&&v.close(),g(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},m.onsuccess=()=>{const v=m.result;v&&v.close(),h(v)}}).then(h=>{l.db=h;for(var g=0;g<c.length;g++){const m=c[g];Ko(m._dbInfo)}}).catch(h=>{throw(Qo(e,h)||I.resolve()).catch(()=>{}),h})})}return F(o,t),o}var Mp={_driver:"asyncStorage",_initStorage:yp,_support:hp(),iterate:xp,getItem:$p,setItem:kp,removeItem:Sp,clear:Cp,length:Tp,key:Ip,keys:Ep,dropInstance:Ap};function Pp(){return typeof openDatabase=="function"}var He="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_p="~~local_forage_type~",Os=/^~~local_forage_type~([^~]+)~/,mn="__lfsc__:",ei=mn.length,Hi="arbf",ti="blob",Ed="si08",Ad="ui08",Md="uic8",Pd="si16",_d="si32",Bd="ur16",Ld="ui32",Rd="fl32",Nd="fl64",Fs=ei+Hi.length,js=Object.prototype.toString;function zd(e){var t=e.length*.75,r=e.length,n,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),d=new Uint8Array(c);for(n=0;n<r;n+=4)i=He.indexOf(e[n]),a=He.indexOf(e[n+1]),s=He.indexOf(e[n+2]),l=He.indexOf(e[n+3]),d[o++]=i<<2|a>>4,d[o++]=(a&15)<<4|s>>2,d[o++]=(s&3)<<6|l&63;return c}function ri(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=He[t[n]>>2],r+=He[(t[n]&3)<<4|t[n+1]>>4],r+=He[(t[n+1]&15)<<2|t[n+2]>>6],r+=He[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function Bp(e,t){var r="";if(e&&(r=js.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&js.call(e.buffer)==="[object ArrayBuffer]")){var n,o=mn;e instanceof ArrayBuffer?(n=e,o+=Hi):(n=e.buffer,r==="[object Int8Array]"?o+=Ed:r==="[object Uint8Array]"?o+=Ad:r==="[object Uint8ClampedArray]"?o+=Md:r==="[object Int16Array]"?o+=Pd:r==="[object Uint16Array]"?o+=Bd:r==="[object Int32Array]"?o+=_d:r==="[object Uint32Array]"?o+=Ld:r==="[object Float32Array]"?o+=Rd:r==="[object Float64Array]"?o+=Nd:t(new Error("Failed to get type for BinaryArray"))),t(o+ri(n))}else if(r==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=_p+e.type+"~"+ri(this.result);t(mn+ti+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function Lp(e){if(e.substring(0,ei)!==mn)return JSON.parse(e);var t=e.substring(Fs),r=e.substring(ei,Fs),n;if(r===ti&&Os.test(t)){var o=t.match(Os);n=o[1],t=t.substring(o[0].length)}var i=zd(t);switch(r){case Hi:return i;case ti:return Oi([i],{type:n});case Ed:return new Int8Array(i);case Ad:return new Uint8Array(i);case Md:return new Uint8ClampedArray(i);case Pd:return new Int16Array(i);case Bd:return new Uint16Array(i);case _d:return new Int32Array(i);case Ld:return new Uint32Array(i);case Rd:return new Float32Array(i);case Nd:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var Zi={serialize:Bp,deserialize:Lp,stringToBuffer:zd,bufferToString:ri};function Dd(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Rp(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var o=new I(function(i,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){Dd(s,r,function(){t._dbInfo=r,i()},function(l,c){a(c)})},a)});return r.serializer=Zi,o}function Qe(e,t,r,n,o,i){e.executeSql(r,n,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):Dd(l,t,function(){l.executeSql(r,n,o,i)},i)},i):i(a,s)},i)}function Np(e,t){var r=this;e=Oe(e);var n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Qe(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=a.serializer.deserialize(d)),o(d)},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function zp(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Qe(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var d=c.rows,u=d.length,h=0;h<u;h++){var g=d.item(h),m=g.value;if(m&&(m=a.serializer.deserialize(m)),m=e(m,g.key,h+1),m!==void 0){o(m);return}}o()},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function Od(e,t,r,n){var o=this;e=Oe(e);var i=new I(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(d,u){u?s(u):c.db.transaction(function(h){Qe(h,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,d],function(){a(l)},function(g,m){s(m)})},function(h){if(h.code===h.QUOTA_ERR){if(n>0){a(Od.apply(o,[e,l,r,n-1]));return}s(h)}})})}).catch(s)});return F(i,r),i}function Dp(e,t,r){return Od.apply(this,[e,t,r,1])}function Op(e,t){var r=this;e=Oe(e);var n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Qe(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function Fp(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Qe(a,i,`DELETE FROM ${i.storeName}`,[],function(){n()},function(s,l){o(l)})})}).catch(o)});return F(r,e),r}function jp(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Qe(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){o(l)})})}).catch(o)});return F(r,e),r}function Vp(e,t){var r=this,n=new I(function(o,i){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){Qe(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var d=c.rows.length?c.rows.item(0).key:null;o(d)},function(l,c){i(c)})})}).catch(i)});return F(n,t),n}function Hp(e){var t=this,r=new I(function(n,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){Qe(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],d=0;d<l.rows.length;d++)c.push(l.rows.item(d).key);n(c)},function(s,l){o(l)})})}).catch(o)});return F(r,e),r}function Zp(e){return new I(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){r(i)})},function(n){r(n)})})}function qp(e,t){t=Fi.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,o;return e.name?o=new I(function(i){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(Zp(a))}).then(function(i){return new I(function(a,s){i.db.transaction(function(l){function c(g){return new I(function(m,v){l.executeSql(`DROP TABLE IF EXISTS ${g}`,[],function(){m()},function(y,k){v(k)})})}for(var d=[],u=0,h=i.storeNames.length;u<h;u++)d.push(c(i.storeNames[u]));I.all(d).then(function(){a()}).catch(function(g){s(g)})},function(l){s(l)})})}):o=I.reject("Invalid arguments"),F(o,t),o}var Up={_driver:"webSQLStorage",_initStorage:Rp,_support:Pp(),iterate:zp,getItem:Np,setItem:Dp,removeItem:Op,clear:Fp,length:jp,key:Vp,keys:Hp,dropInstance:qp};function Wp(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Fd(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Yp(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Gp(){return!Yp()||localStorage.length>0}function Jp(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=Fd(e,t._defaultConfig),Gp()?(t._dbInfo=r,r.serializer=Zi,I.resolve()):I.reject()}function Xp(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(n)===0&&localStorage.removeItem(i)}});return F(r,e),r}function Kp(e,t){var r=this;e=Oe(e);var n=r.ready().then(function(){var o=r._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return F(n,t),n}function Qp(e,t){var r=this,n=r.ready().then(function(){for(var o=r._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(i)===0){var u=localStorage.getItem(d);if(u&&(u=o.serializer.deserialize(u)),u=e(u,d.substring(a),l++),u!==void 0)return u}}});return F(n,t),n}function eg(e,t){var r=this,n=r.ready().then(function(){var o=r._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return F(n,t),n}function tg(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&i.push(s.substring(n.keyPrefix.length))}return i});return F(r,e),r}function rg(e){var t=this,r=t.keys().then(function(n){return n.length});return F(r,e),r}function ng(e,t){var r=this;e=Oe(e);var n=r.ready().then(function(){var o=r._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return F(n,t),n}function og(e,t,r){var n=this;e=Oe(e);var o=n.ready().then(function(){t===void 0&&(t=null);var i=t;return new I(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,d){if(d)s(d);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(u){(u.name==="QuotaExceededError"||u.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(u),s(u)}})})});return F(o,r),o}function ig(e,t){if(t=Fi.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,o;return e.name?o=new I(function(i){e.storeName?i(Fd(e,n._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=I.reject("Invalid arguments"),F(o,t),o}var ag={_driver:"localStorageWrapper",_initStorage:Jp,_support:Wp(),iterate:Qp,getItem:Kp,setItem:og,removeItem:ng,clear:Xp,length:rg,key:eg,keys:tg,dropInstance:ig};const sg=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),lg=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(sg(e[n],t))return!0;n++}return!1},jd=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Nt={},Vs={},Tt={INDEXEDDB:Mp,WEBSQL:Up,LOCALSTORAGE:ag},cg=[Tt.INDEXEDDB._driver,Tt.WEBSQL._driver,Tt.LOCALSTORAGE._driver],Zr=["dropInstance"],oo=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Zr),dg={description:"",driver:cg.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ug(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function io(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(jd(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class qi{constructor(t){for(let r in Tt)if(Tt.hasOwnProperty(r)){const n=Tt[r],o=n._driver;this[r]=o,Nt[o]||this.defineDriver(n)}this._defaultConfig=io({},dg),this._config=io({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const o=new I(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=oo.concat("_initStorage");for(let h=0,g=c.length;h<g;h++){const m=c[h];if((!lg(Zr,m)||t[m])&&typeof t[m]!="function"){a(l);return}}(function(){const h=function(g){return function(){const m=new Error(`Method ${g} is not implemented by the current driver`),v=I.reject(m);return F(v,arguments[arguments.length-1]),v}};for(let g=0,m=Zr.length;g<m;g++){const v=Zr[g];t[v]||(t[v]=h(v))}})();const u=function(h){Nt[s]&&console.info(`Redefining LocalForage driver: ${s}`),Nt[s]=t,Vs[s]=h,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(u,a):u(!!t._support):u(!0)}catch(s){a(s)}});return $t(o,r,n),o}driver(){return this._driver||null}getDriver(t,r,n){const o=Nt[t]?I.resolve(Nt[t]):I.reject(new Error("Driver not found."));return $t(o,r,n),o}getSerializer(t){const r=I.resolve(Zi);return $t(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return $t(n,t,t),n}setDriver(t,r,n){const o=this;jd(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(d){return o._extend(d),a(),o._ready=o._initStorage(o._config),o._ready}function l(d){return function(){let u=0;function h(){for(;u<d.length;){let m=d[u];return u++,o._dbInfo=null,o._ready=null,o.getDriver(m).then(s).catch(h)}a();const g=new Error("No available storage method found.");return o._driverSet=I.reject(g),o._driverSet}return h()}}const c=this._driverSet!==null?this._driverSet.catch(()=>I.resolve()):I.resolve();return this._driverSet=c.then(()=>{const d=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(d).then(u=>{o._driver=u._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const d=new Error("No available storage method found.");return o._driverSet=I.reject(d),o._driverSet}),$t(this._driverSet,r,n),this._driverSet}supports(t){return!!Vs[t]}_extend(t){io(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,o=t.length;n<o;n++){const i=t[n];this.supports(i)&&r.push(i)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=oo.length;t<r;t++)ug(this,oo[t])}createInstance(t){return new qi(t)}}const hg=new qi,fg=hg;async function Vd(){return await caches.open(Di)}async function pg(e){return await(await Vd()).match(e)}const Hs=fg.createInstance({name:Di});async function gg(e,t){await(await Vd()).put(e,t)}const ao=new Map;async function mg(e,t){var n;if(t=t,!ao.has(e)){const o=Tn();ao.set(e,o.promise);try{const i=new Request(e),a=t?await pg(i):void 0,s=a??await fetch(i),l=t?await Hs.getItem(e)??void 0:void 0,c=l??{contentType:((n=s.headers.get("Content-Type"))==null?void 0:n.toLowerCase())||"",ok:s.ok,text:await s.clone().text()??""};if(!l&&t)try{Hs.setItem(e,c)}catch{}const d={blobUrl:URL.createObjectURL(await s.clone().blob()),...c};if(!a&&t)try{gg(i,s)}catch{}o.resolve(d)}catch(i){throw o.reject(i),i}}const r=await ao.get(e);if(!r)throw new Error("Stored a cached response but couldn't find it afterwards.");return r}var C;(function(e){e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf"})(C||(C={}));const vg=[C.Text,C.Json],wg=[C.Audio];function Zs(e){return vg.includes(e)}function bg(e){return wg.includes(e)}async function yg(e,t){return e.includes("video")?C.Video:e.includes("svg")||t.includes("<svg")?C.Svg:e.includes("html")||t.includes("<html")?C.Html:lp(t)?C.Json:e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?C.Text:e.includes("audio")?C.Audio:e.includes("pdf")?C.Pdf:C.Image}function $g({imageType:e,imageText:t,imageUrl:r,blockAutoPlay:n}){return e===C.Image?at(f`
            <img src=${r} />
        `):e===C.Video?at(f`
            <video
                ${n?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${r} />
            </video>
        `):e===C.Text||e===C.Json?at(f`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e===C.Audio?at(f`
                <audio controls src=${r}></audio>
            `):t}function xg(e,t,r){if(t===C.Json)try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t===C.Html&&r)return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function qs({imageUrl:e,blockAutoPlay:t,textTransformer:r=i=>i,allowPersistentCache:n,removeConsoleLogs:o}){const i=await mg(e,n);if(!i.ok)throw new Error(`Failed to load '${e}'`);const a=await yg(i.contentType,i.text),s=r(xg(i.text,a,o));return{templateString:$g({imageText:s,imageType:a,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:a}}class ni extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let kg=!1;function Sg(){return kg}function Cg(e){return e?e instanceof Error?e.message:Ag(e,"message")?String(e.message):String(e):""}function Tg(e){return e instanceof Error?e:new Error(Cg(e))}function Ig(e){try{return e.callback()}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}const Eg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ag(e,t){return e?Eg.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Mg(e){const t=Hd();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Hd(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Hd.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Zd(e,t,r){return Ig({callback(){return Pg(e,t,r),!0},fallbackValue:!1})}function Pg(e,t,r){if(e==="*")r||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var ft;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(ft||(ft={}));function _g(e,t,r){return r.type===e&&r.direction===t}function Bg(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function Lg({message:e,verifyChildData:t,iframeElement:r},n,o,i,a){if(!r)throw new Error("No iframe element was provided.");let s=0,l=!1,c,d,u,h=!1;const g={...e,direction:ft.FromParent,messageId:ki(32)},m=e.type;function v(k){try{if(!Zd(n,k,!1))return;const S=k.data;if(S.type==="error")throw new Error(`Child threw an error: ${S.data}`);if(Sg(),S&&h&&_g(m,ft.FromChild,S)&&S.messageId===g.messageId){let E=!1;try{E=t?t(S.data):!0}catch{}if(!E)return;l=!0,d=k,c=S}}catch(S){u=Tg(S)}}a.addEventListener("message",v);const y=Date.now();for(;!l&&Date.now()-y<o&&!u;){if(!r.isConnected)throw new ni;const k=r.contentWindow;k&&(h=!0,k.postMessage(g,{targetOrigin:n})),await Mg(i||Bg(s)),s++}if(a.removeEventListener("message",v),u)throw u;if(!l)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(o/1e3)}' seconds).`);if(!d)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:d}}function Rg({timeoutMs:e=1e4}={timeoutMs:1e4}){return{async sendMessageToChild(t){if(t.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await Lg(t,t.childOrigin,t.timeoutMs||e,t.intervalMs,t.globalObject??globalThis)},listenForParentMessages(t){const r=t.globalObject??globalThis;async function n(o){var l;if(!Zd(t.parentOrigin,o,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const i=o.data,a=await t.listener({...i,originalEvent:o},()=>{r.removeEventListener("message",n)}),s={type:i.type,direction:ft.FromChild,data:a,messageId:i.messageId};r.parent.postMessage(s,{targetOrigin:t.parentOrigin})}r.addEventListener("message",n)}}}var ce;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(ce||(ce={}));var G;(function(e){e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded"})(G||(G={}));const Ie=Rg({});async function Ng(e,t){const r=Tn();e.onload=()=>{r.resolve()};try{await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.FrameReady},iframeElement:e,timeoutMs:t})}catch{await r.promise,await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.FrameReady},iframeElement:e,timeoutMs:t})}}async function zg({min:e,max:t,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,forcedOriginalImageSize:a,timeoutMs:s}){var c;await Ng(n,s),i&&await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.ForceSize,data:i},iframeElement:n,timeoutMs:s});const l=a??(await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.SendSize},iframeElement:n,timeoutMs:s,verifyChildData(d){return!!(d&&!isNaN(d.width)&&!isNaN(d.height)&&d.width&&d.height)}})).data;return await qd({min:e,max:t,imageDimensions:l,host:r,iframeElement:n,imageData:o,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:s}),await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.ImageElementLoaded},iframeElement:n,timeoutMs:s}),((c=n.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function qd({min:e,max:t,imageDimensions:r,host:n,iframeElement:o,imageData:i,forcedFinalImageSize:a,sendSizeMessage:s,timeoutMs:l}){const c=n.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const d={min:e,max:t,box:a??r},u=Zs(i.imageType)||bg(i.imageType)?Jo(d):$d(d);c.style.width=Pr(Math.floor(u.width)),c.style.height=Pr(Math.floor(u.height));const h=Jo({min:e,max:t,box:u});u.height<h.height?n.classList.add(ce.VerticallyCenter):n.classList.remove(ce.VerticallyCenter),n.style.width=Pr(h.width),n.style.height=Pr(h.height);const g=xd({min:e,max:t,box:a??r});if(s){if(g>3?await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.SendScalingMethod,data:"pixelated"},iframeElement:o,timeoutMs:l}):await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.SendScalingMethod,data:"default"},iframeElement:o,timeoutMs:l}),await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.SizeDetermined,data:u},iframeElement:o,timeoutMs:l}),i.imageType===C.Html){const m=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},v={width:g*m.width,height:g*m.height};await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.SendScale,data:v},iframeElement:o,timeoutMs:l})}else if(Zs(i.imageType)){const m=a??r;if(m.height<u.height){const v=u.width/m.width,y=u.height/m.height,k=Math.min(v,y);await Ie.sendMessageToChild({childOrigin:window.location.origin,message:{type:G.SendScale,data:{height:k,width:k}},iframeElement:o,timeoutMs:l})}}}}const Br={x:16,y:8};var nl,ol;function Dg(e,t,r,n){const o=Math.random(),i=f(nl||(nl=Pn([`
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
    `])),e.imageType,r??"",C.Svg,C.Html,C.Image,C.Video,C.Text,C.Json,C.Audio,C.Svg,C.Html,C.Image,C.Video,C.Text,C.Json,C.Audio,ft.FromChild,ft.FromChild,G.ImageElementLoaded,G.FrameReady,G.SendScale,G.SendScalingMethod,G.SendSize,G.ForceSize,G.SizeDetermined,C.Json,C.Text,Br.y,n,C.Audio),a=f(ol||(ol=Pn([`
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
    `])),e.imageType,n?"allow-scrolling":"",C.Image,C.Svg,C.Video,C.Text,C.Json,C.Text,C.Json,C.Text,C.Json,C.Text,C.Json,Br.y,Br.x,C.Text,C.Json,Br.y,o,t??"",i);return gd(at(a)).replace(String(o),`
${e.templateString}
`)}const Og=[C.Html,C.Video,C.Audio,C.Pdf],Fg=[C.Html,C.Text,C.Json];function Us({blockInteractionInput:e,imageType:t,allowScrolling:r}){return typeof e=="boolean"?!e:Og.includes(t)?!0:!!(r&&Fg.includes(t))}const jg=1e4,Vg={imageData:mu({async updateCallback(e){if(e.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const t={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer,allowPersistentCache:!e.blockPersistentCache,removeConsoleLogs:!e.allowConsoleLogs};let r;try{r=await rp(e.timeoutMs,qs(t))}catch{await ep(1e3);try{r=await qs(t)}catch(o){throw o}}if(r)return r;throw new Error("no image data result")}}),error:void 0},Lr=vi()({tagName:Di,stateInitStatic:Vg,events:{settled:H(),imageDataCalculated:H(),errored:H()},styles:p`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${_(ce.VerticallyCenter)}) {
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

        :host(.${_(ce.HideLoading)}) .loading-wrapper,
        :host(.${_(ce.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${_(ce.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${_(ce.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),r=e[so];t&&r&&(t.srcdoc=r)},renderCallback({state:e,inputs:t,updateState:r,host:n,dispatch:o,events:i}){const a=t.timeoutMs??jg;r({imageData:{serializableTrigger:{...t,timeoutMs:a,updateTriggered(){e.error&&r({error:void 0}),n.classList.remove(ce.HideLoading),o(new i.settled(!1)),n.classList.remove(ce.VerticallyCenter)}}}});const s=t.min&&t.max?Jo({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?$d({min:s,max:l,box:t.forcedOriginalImageSize}):void 0,d=Pa(e.imageData,"",y=>{if(o(new i.imageDataCalculated(y)),y.imageType===C.Pdf)return f`
                        <iframe
                            src=${y.imageUrl}
                            ${Ma(async k=>{try{await qd({forcedFinalImageSize:t.forcedFinalImageSize,host:n,iframeElement:k,imageData:y,imageDimensions:l??{width:500,height:500},max:l,min:s,sendSizeMessage:!1,timeoutMs:a}),n[so]="",o(new i.settled(!0)),n.classList.add(ce.HideLoading)}catch(S){const E=ro(S);if(E instanceof ni)return;console.error(E),r({error:E}),o(new i.errored(E))}})}
                        ></iframe>
                    `;{const k=Us({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})&&!!t.allowScrolling;return f`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${Dg(y,t.extraHtml,t.htmlSizeQuerySelector,k)}
                            ${Ma(async S=>{try{const E=await zg({min:s,max:l,host:n,iframeElement:S,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:a});n[so]=E,o(new i.settled(!0)),n.classList.add(ce.HideLoading)}catch(E){const R=ro(E);if(R instanceof ni)return;console.error(R),r({error:R}),o(new i.errored(R))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},y=>{r({error:y}),o(new i.errored(ro(y)))}),u=Pa(e.imageData,Ws,y=>Us({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})?"":Ws,()=>""),h=e.imageData instanceof Error?e.imageData:e.error,g=h?p`
                  max-width: 100%;
                  max-height: 100%;
              `:c?p`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",m=p`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,v=f`
            <div class="frame-constraint" style=${g}>${d}</div>
        `;return f`
            ${Ce(!h,f`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${m}>
                ${Ce(!!h,f`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${h==null?void 0:h.message}</slot>
                        </div>
                    `,v)}
            </div>
            ${u}
        `}}),Ws=f`
    <div class="click-cover"></div>
`,so="latest-frame-srcdoc",st=X()({tagName:"toniq-flip-card",events:{flippedChange:H()},styles:p`
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

        ${Af(".card-face",!1)}

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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return f`
            <div
                class="flip-wrapper ${me({flipped:e.flipped})}"
                ${T("click",()=>{t(new r.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}}),Q=X()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:H()},styles:p`
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
            ${Z.h3Font};
            ${Z.extraBoldFont};
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
            max-height: ${kt["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${kt["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${fd}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${st} {
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

        .card-face.front ${_e} {
            margin-top: 24px;
        }

        .card-face.back ${_e} {
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
            ${Z.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:r,host:n,dispatch:o,events:i}){var g,m,v;const a=e.mainImageSize||Go,s=pd(a);xo({onElement:n,forCssVar:kt["main-image-size"],toValue:`${a}px`}),xo({onElement:n,forCssVar:kt["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(_i).join(" "),c=f`
            <h3>${e.title}</h3>
        `,d=e.imageUrls[0],u=f`
            <${A.assign({icon:Xc})} slot="loading"></${A}>
        `,h=d?f`
                  <div class="big-image-wrapper">
                      <${Lr.assign({imageUrl:e.imageUrls[0]??"",eagerLoading:!0,min:{width:a,height:a},max:{width:a,height:a}})}>
                          ${u}
                      </${Lr}>
                  </div>
              `:"";return f`
            <${st.assign({flipped:t.flipped})}
                ${T(_e.events.footerViewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${h}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(y=>f`
                                    <div class="pic-wrapper">
                                        <${Lr.assign({imageUrl:y,eagerLoading:!0,min:{width:s,height:s},max:{width:s,height:s}})}>
                                            ${u}
                                        </${Lr}>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <${_e.assign({viewMoreButtonText:l,flipCardButtonText:(g=e.infoParagraphs)!=null&&g.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(_e.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${_e}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(m=e.infoParagraphs)==null?void 0:m.map(y=>f`
                                    <p>${y}</p>
                                `)}
                    </div>
                    <${_e.assign({viewMoreButtonText:l,flipCardButtonText:(v=e.infoParagraphs)!=null&&v.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(_e.events.footerFlipCardButtonClick,()=>{r({flipped:!t.flipped})})}
                    ></${_e}>
                </div>
            </${st}>
        `}});function oi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>oi({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ud({value:e,allowed:t,blocked:r}){const n=t?oi({input:e,matcher:t}):!0,o=r?oi({input:e,matcher:r}):!1;return n&&!o}function Ys(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ud({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}var ii=(e=>(e.Default="default",e.Outline="outline",e))(ii||{});const Rr=X()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.style==="outline","toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:H(),inputBlocked:H()},styles:({hostClasses:e})=>p`
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
                border-radius: ${Zo};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${x.pagePrimary.backgroundColor};
                border-color: ${x.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${A} {
                color: ${x.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${A} {
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
                border-radius: ${Zo};
                background-color: ${x.accentTertiary.backgroundColor};
                font: ${Z.paragraphFont};
                gap: 4px;
            }

            ${Xe({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${A} {
                margin-right: 10px;
            }

            input {
                ${Ke};
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
                ${Z.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${ut};
            }
        `,renderCallback({inputs:e,dispatch:t,events:r}){const{filtered:n}=Ys({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?f`
                  <${A.assign({icon:e.icon})}></${A}>
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
                    ${T("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=n;let c=a.value??"";if(s)if(s.length===1)Ud({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new r.inputBlocked(s)));else{const{filtered:d,blocked:u}=Ys({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new r.inputBlocked(u))}a.value!==c&&(a.value=c),l!==c&&t(new r.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Ce(!!e.suffix,f`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});async function Hg(e){return navigator.clipboard.writeText(e)}const Zg="…";function qg(e,t){const r=e.slice(0,t).trim(),n=e.slice(-1*t).trim();return`${r}${Zg}${n}`}function Ug(e){return!(e%1)}function Wg(e){return e.letterCount==null?4:Ug(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}const ee=X()({tagName:"toniq-middle-ellipsis",events:{copied:H()},cssVars:{"toniq-middle-ellipsis-text-color":x.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":x.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":x.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":x.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>p`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Y.interaction};
            ${Z.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${A} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${A} {
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
            ${Ke};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${Xe({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:r,state:n,updateState:o}){if(!e.text)return f``;const i=e.text,a=Wg(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,d=c?qg(i,a):i,u=c?i:"",h=s?Jc:l?Gc:void 0,g=h?f`
                  <${A.assign({icon:h})}></${A}>
              `:"",m=f`
            <span title=${u} class="text-content">
                ${Ce(!!e.copyOnClick,f`
                        <span
                            class=${me({"copied-text":!0,"show-copied-text":n.showCopiedTextTimeoutId!=null})}
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
                        ${T("click",v=>{var k,S;const y=(S=(k=v.currentTarget)==null?void 0:k.querySelector)==null?void 0:S.call(k,"a");if(!y)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");y.click()})}
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
                            ${m} ${g}
                        </a>
                    </button>
                `:l?f`
                    <button
                        class="text-wrapper copyable"
                        ${T("click",async()=>{await Hg(i),t(new r.copied),n.showCopiedTextTimeoutId!=null&&window.clearTimeout(n.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${m} ${g}
                    </button>
                `:f`
                    ${m}
                `:f``}}),Gs="...";function Yg(e,t,r=7,n=5){let o;e=Wt(e,1,t),r=Wt(r,n,t);const i=r-5,a=r-3;t<=r?o=r:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>r?lo(t-o,t):e>o?lo(Math.min(s.start,t-o),Math.min(s.end,t)):lo(1,Math.min(t,o+1));function c(u,h){return l.length+1!==t?h:[u]}const d=l[l.length-1];if(d&&d<t){const u=c(t,[Gs,t]);return[...l,...u]}else return l[0]!==1?c(1,[1,Gs]).concat(l):l}function lo(e,t){const r=t-e+1;return Array.from({length:r},(n,o)=>e+o)}X()({tagName:"toniq-pagination",styles:p`
        :host {
            display: flex;
        }

        button {
            ${Ke}
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${ht};
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
            ${Z.labelFont}
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
    `,events:{pageChange:H()},renderCallback({inputs:e,events:t,dispatch:r}){return e.pageCount<=1?f``:f`
                <button
                    ${T("click",()=>{e.currentPage>1&&r(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${A.assign({icon:Mi})}></${A}>
                </button>
                ${Yg(e.currentPage,e.pageCount,e.pagesShown).map(n=>typeof n=="string"?f`
                                <div class="page" disabled>${n}</div>
                            `:f`
                                <button
                                    class=${me({page:!0,selected:e.currentPage===n})}
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
                    <${A.assign({icon:Pi})}></${A}>
                </button>
            `}});const j=X()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:H()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(ke("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(ke("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(ke("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(ke("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>p`
        :host {
            ${Z.boldParagraphFont};
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
            color: ${e["toniq-radio-group-unchecked-label-color"].value};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${e["toniq-radio-group-checked-radio-color"].value};
            outline: none;
            text-align: inherit;
        }

        button {
            ${Ke}
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

        ${Xe({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${ut};
        }

        .wrapper.disabled::before {
            ${ut}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:ki()})},renderCallback({inputs:e,dispatch:t,events:r,state:n}){return Gg(e.entries).map(i=>Jg(e.groupName||n.randomGroupName,e.value,i,()=>{t(new r.valueChange(i.value))}))}});function Gg(e){const t=Object.fromEntries(e.map(n=>[n.value,n]));return Object.values(t).length!==e.length&&console.error(`${j.tagName} was given duplicate entry values.`),Object.values(t)}function Jg(e,t,r,n){const o=t===r.value,i=f`
        <slot name=${r.value} class="label">
            <span class="label">${r.label||r.value}</span>
        </slot>
    `;return f`
        <button
            ?disabled=${r.disabled}
            tabindex="0"
            class=${me({disabled:!!r.disabled,checked:o&&!r.disabled,wrapper:!0})}
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
    `}const B={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},zt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function Xg(e){var n,o;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${B.lowerLabelWrapper} .${B.labelPercentMarginWrapper}`),r=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${B.upperLabelWrapper} .${B.labelPercentMarginWrapper}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=r.getBoundingClientRect();return{lower:i,upper:a}}else return}function Kg(e,t=8){const r=Xg(e);if(!r)return 0;const n=r.lower.right-r.upper.left+t;return Math.max(0,n)}function co({value:e,limits:t,flip:r}){const o=(t.max-e)/(t.max-t.min)*100;return-(r?100-o:o)}function cr(e){return mf(e)&&e.min!==void 0&&e.max!==void 0}function ai(e){var r;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${B.range}`);return(t==null?void 0:t.clientWidth)??0}function uo(e,t,r){return`${r?Sf(e):e} ${t}`}function Qg({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function em({value:e,double:t,min:r,max:n}){return t?cr(e)?{min:Wt(e.min,r,Math.min(e.max,n)),max:Wt(e.max,Math.max(e.min,r),n)}:{min:r,max:n}:cr(e)?r:Wt(e,r,n)}function tm({actualValue:e,actualLimits:t,logScale:r,logRange:n}){return r?{elementValue:cr(e)?{min:Qn(n,e.min),max:Qn(n,e.max)}:Qn(n,e),elementLimits:{min:0,max:n.length-1}}:{elementValue:e,elementLimits:t}}function ho(e,t,r){return r?t[e]||0:e}function rm(e){return{actualLimits:Qg(e),actualValue:em(e)}}function nm(e,t){var n,o,i;let r=!1;if(cr(e)){const a=(n=t.shadowRoot)==null?void 0:n.querySelector(`.${B.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${B.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),r=!0),Number(s.value)!==e.max&&(s.value=String(e.max),r=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${B.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),r=!0)}return r}function Wd(e,t){const{actualValue:r,actualLimits:n}=rm({...e}),o=Tf(n.min,n.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=tm({actualValue:r,actualLimits:n,logScale:i,logRange:o}),c=ai(t);return{actualValue:r,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const nt=16,Js=p`
    ${nt}px
`,Xs=p`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${Js};
    width: ${Js};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Y.interaction};
    ${D(x.accentPrimary)};
`,Ks=p`
    transform: scale(1.2);
`;function Ft(e){requestAnimationFrame(()=>{const t=Wd(e.instanceInputs,e).elementValue;nm(t,e)&&(e.setAttribute("disabled","true"),Ft(e))})}const N=X()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:H()},styles:p`
        :host {
            display: block;
        }

        .${_(B.range)} {
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

        .${_(B.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${Z.boldParagraphFont};
            ${ht};
        }

        .${_(B.labelPixelMarginWrapper)},
            .${_(B.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${_(B.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${_(B.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${Xe({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${_(B.lowerSlider)},
        .${_(B.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${_(B.slider)}::-moz-range-thumb {
            ${Xs}
        }

        /* these selectors fail if combined with a comma */
        .${_(B.slider)}::-webkit-slider-thumb {
            ${Xs}
        }

        /* these selectors fail if combined with a comma */
        .${_(B.slider)}::-webkit-slider-thumb:hover {
            ${Ks}
        }

        /* these selectors fail if combined with a comma */
        .${_(B.slider)}::-moz-range-thumb:hover {
            ${Ks}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{Ft(e)}),e.addEventListener("keydown",()=>{Ft(e)}),e.addEventListener("keyup",()=>{Ft(e)})},renderCallback({inputs:e,host:t,events:r,dispatch:n,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:u,rangeWidth:h}=Wd({...e},t);if(Ft(t),cr(d))return g(a,d,u);return v(a,d,u);function g(y,k,S){const E={left:bt((h-nt)*(k.min-S.min)/(S.max-S.min)+nt/2),right:bt((h-nt)*(S.max-k.max)/(S.max-S.min)+nt/2)},R=uo(y.min,c,l),J=uo(y.max,c,l);requestAnimationFrame(()=>{const fe=Kg(t);fe!==o.labelOverlap&&i({labelOverlap:fe})});const ue=(S.max-k.max)/(S.max-S.min)>.5,he=co({value:k.min,limits:{min:S.min,max:k.max},flip:!0}),re=co({value:k.max,limits:{min:k.min,max:S.max},flip:!1}),et=o.labelOverlap&&ue?o.labelOverlap:0,br=o.labelOverlap&&!ue?o.labelOverlap:0;return f`
                <div
                    class="range"
                    ${Qt(()=>{i({rangeWidth:ai(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${E.left}; right:${E.right}"
                    ></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.lowerLabelWrapper}"
                        style="left: ${E.left}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-left: ${Kn(he)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-right: ${bt(br)}"
                                ${yt(zt.lowerLabel)}
                            >
                                ${R}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${B.labelOuterWrapper} ${B.upperLabelWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${E.right}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${Kn(re)}"
                        >
                            <span
                                class="${B.labelPixelMarginWrapper}"
                                style="margin-left: ${bt(et)}"
                                ${yt(zt.upperLabel)}
                            >
                                ${J}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${B.lowerSlider} ${B.slider}"
                            .min=${S.min}
                            .max=${S.max}
                            .value=${k.min}
                            ${T("input",fe=>{const pt=fe.target,Mt={...y,min:ho(Number(pt.value),s,l)};m(Mt)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${B.upperSlider} ${B.slider}"
                            step=${e.step}
                            .min=${S.min}
                            .max=${S.max}
                            .value=${k.max}
                            ${yt(zt.slider)}
                            ${T("input",fe=>{const pt=fe.target,Mt={...y,max:ho(Number(pt.value),s,l)};m(Mt)})}
                        />
                    </div>
                </div>
            `}function m(y){i({internalValue:y}),e.disabled||n(new r.valueChange(y))}function v(y,k,S){const E=bt((h-nt)*(S.max-k)/(S.max-S.min)+nt/2),R=uo(y,c,l),J=co({value:k,limits:S,flip:!1});return f`
                <div
                    class="range"
                    ${Qt(()=>{i({rangeWidth:ai(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${E}"></div>
                    <span
                        class="${B.labelOuterWrapper} ${B.rightAlignedLabelWrapper}"
                        style="right: ${E}"
                    >
                        <span
                            class="${B.labelPercentMarginWrapper}"
                            style="margin-right: ${Kn(J)}"
                            ${yt(zt.label)}
                        >
                            ${R}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${B.slider}"
                        step=${e.step}
                        .min=${S.min}
                        .max=${S.max}
                        .value=${k}
                        ${yt(zt.slider)}
                        ${T("input",ue=>{const he=ue.target,re=ho(Number(he.value),s,l);m(re)})}
                    />
                </div>
            `}}});var Yd=(e=>(e.Default="default",e.TextOnly="text-only",e))(Yd||{});const fo=X()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.style==="text-only","toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>p`
        :host {
            ${Z.boldParagraphFont};
            ${ht};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${Ke};
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
            transition: color ${Y.interaction},
                background-color ${Y.interaction};
        }

        ${Xe({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

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
            ${ut};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?f`
                  <${A.assign({icon:e.icon})}
                      class="icon-template"
                  ></${A}>
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
        `}}),Yt=O2({tagName:"toniq-tooltip",styles:p`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${x.accentPrimary.backgroundColor};
            ${un.menuShadow};
            background-color: ${x.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return f`
            <slot></slot>
        `}}),qr=X()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>p`
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
            transition: visibility ${Y.pretty} ${Y.pretty},
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
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:r}){return f`
            <div
                class="slot-wrapper"
                ${T("click",()=>{r({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{r({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${Yt}>${e.tooltipContent}</${Yt}>
            </div>
        `}}),Gd=V({title:"Data",parent:void 0}),vn=X()({tagName:"toniq-icon-book-viewer",styles:p`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${x.accentTertiary.backgroundColor};
        }
    `,renderCallback({inputs:e}){return f`
            <${A.assign({icon:e.icon})}></${A}>
        `}}),En=Object.values(ot).reduce((e,t)=>(t.forEach(r=>{if(r.iconName in e)throw new Error(`Icon name duplicate: '${r.iconName}'`);e[r.iconName]=r}),e),{}),Ui=Object.keys(En).sort(),om=V({title:"Social Urls",parent:Gd,elementExamplesCallback({defineExample:e}){function t({socialName:r,icon:n}){e({title:r,renderCallback(){return f`
                        <${vn.assign({icon:n})}></${vn}>
                    `}})}Object.entries(ud).forEach(([r,n])=>{t({socialName:r,icon:n})})}}),K=V({title:"Elements",parent:void 0}),im=V({parent:K,title:q.tagName,elementExamplesCallback({defineExample:e}){[{name:"default",inputs:{}},{name:"Secondary",inputs:{buttonStyle:lr.Secondary}},{name:"Outline",inputs:{buttonStyle:lr.Outline}},{name:"Disabled",inputs:{disabled:!0}}].forEach(r=>{e({title:r.name,stateInitStatic:{showIcon:!1,timeoutId:void 0},styles:p`
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
                        <${q.assign({text:"Button",...r.inputs})}></${q}>
                        <${q.assign({icon:Vr,...r.inputs})}></${q}>
                        <${q.assign(n.showIcon?{icon:Vr,text:"icon",...r.inputs}:{text:"no icon",...r.inputs})}
                            class="icon-toggle"
                        ></${q}>
                        <${q.assign({text:"Button",icon:Vr,...r.inputs})}></${q}>
                        <${q.assign({...r.inputs})}>
                            <span>HTML Child</span>
                        </${q}>
                        <${q.assign({text:"bigger",...r.inputs})}
                            style="height: 100px; width: 200px;"
                        ></${q}>
                    `}})})}}),Qs=p`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${se} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`,am=V({parent:K,title:se.tagName,descriptionParagraphs:["Carousel that uses native browser API.","Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc."],elementExamplesCallback({defineExample:e}){e({title:"default",styles:Qs,renderCallback(){return f`
                    <${se.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ot["core-24"].map(t=>{const r=p`
                                padding: 24px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${A.assign({icon:t})} style=${r}></${A}>
                            `})})}></${se}>
                    <${se.assign({enableAutomaticCycling:!0,templates:ot["core-24"].map(t=>{const r=p`
                                padding: 100px 24px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${A.assign({icon:t})} style=${r}></${A}>
                            `})})}></${se}>
                    <${se.assign({enableAutomaticCycling:!0,cycleIntervalMs:1e3,templates:ot["core-24"].map(t=>{const r=Du({min:0,max:150}),n=p`
                                padding: 100px ${r}px;
                                border: 1px solid ${x.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;return f`
                                <${A.assign({icon:t})} style=${n}></${A}>
                            `})})}></${se}>
                `}}),e({title:"banner style",styles:Qs,renderCallback(){return f`
                    <${se.assign({enableAutomaticCycling:!0,style:qo.BannerStyle,templates:ot["core-24"].map(t=>{const r=p`
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
                            `;return f`
                                <${A.assign({icon:t})} style=${r}></${A}>
                            `})})}></${se}>
                    <${se.assign({enableAutomaticCycling:!0,style:qo.BannerStyle,templates:[ot["core-24"][0]].map(t=>{const r=p`
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
                            `;return f`
                                <${A.assign({icon:t})} style=${r}></${A}>
                            `})})}
                        class=${se.hostClasses["toniq-carousel-banner-style"]}
                    ></${se}>
                `}})}});function sm(e){const t=Object.keys(e.cssVars).map(r=>[`--${r}`,{controlType:L.Color,initValue:""}]);return Object.fromEntries(t)}function lm(e){const t=Object.entries(e).map(([r,n])=>{if(r.startsWith("--"))return typeof n!="string"||!n?void 0:`${r}: ${n};`}).filter(_i);return _(t.join(`
`))}const cm=[{title:"default",inputs:{}},{title:"disabled",inputs:{disabled:!0}}],po=[{inputs:{checked:!1}},{inputs:{checked:!0}},{extraEntries:["With much longer checkbox label string"],inputs:{checked:!1}}],dm=V({parent:K,title:je.tagName,controls:{Text:{controlType:L.Text,initValue:"Text"},...sm(je)},elementExamplesCallback({defineExample:e}){cm.forEach(t=>{e({title:t.title,stateInitStatic:{checkedStatuses:po.map(r=>!!r.inputs.checked),extraEntryStatuses:po.map(r=>(r.extraEntries??[]).map(()=>!1))},styles:p`
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
                `,renderCallback({state:r,updateState:n,controls:o}){return po.map((i,a)=>{const s=(i.extraEntries??[]).map((c,d)=>{var u;return f`
                                    <${je.assign({...t.inputs,...Ho(i.inputs,["checked"]),checked:!!((u=r.extraEntryStatuses[a])!=null&&u[d]),text:c})}
                                        ${T(je.events.checkedChange,()=>{const h=[...r.extraEntryStatuses];h[a][d]=!h[a][d],n({extraEntryStatuses:h})})}
                                    ></${je}>
                                `}),l=lm(o);return f`
                            <div class="checkbox-group" style=${l}>
                                <${je.assign({...t.inputs,...Ho(i.inputs,["checked"]),checked:r.checkedStatuses[a],text:o.Text})}
                                    ${T(je.events.checkedChange,()=>{const c=[...r.checkedStatuses];c[a]=!c[a],n({checkedStatuses:c})})}
                                ></${je}>
                                ${s}
                            </div>
                        `})}})})}}),um=V({parent:K,title:to.tagName,elementExamplesCallback({defineExample:e}){const t=[{inputs:{text:"text"}},{inputs:{text:"text + icon",icon:Ut}},{inputs:{icon:Ut}},{inputs:{},template:f`
                    HTML child
                `},{inputs:{icon:Ut},template:f`
                    HTML child
                `},{customStyle:p`
                    width: 150px;
                    height: 24px;
                `,inputs:{text:"custom size"}}];[{title:"default",inputs:{style:Wo.Default}},{title:"secondary style",inputs:{style:Wo.Secondary}}].forEach(n=>{e({title:n.title,renderCallback(){return t.map(o=>f`
                        <${to.assign({...n.inputs,...o.inputs})}
                            style=${o.customStyle}
                        >${Ce(!!o.template,o.template)}</${to}>
                    `)}})})}}),Nr=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3},{label:"Really really super duper long option",value:4}],hm=[{title:"default"},{title:"transparent background",customStyle:p`
            ${Ri.accentSecondary.backgroundColor}: transparent;
        `},{title:"disabled",inputs:{disabled:!0}}],el=[{},{customStyle:p`
            width: 500px;
            height: 100px;
        `},{customStyle:p`
            max-height: 30px;
            min-height: 30px;
        `}],fm=V({title:Mr.tagName,parent:K,controls:{Selected:{controlType:L.Dropdown,initValue:Nr[0].label,options:Nr.map(e=>e.label)},Direction:{controlType:L.Dropdown,initValue:"Down",options:vf(Yo)},Icon:{controlType:L.Dropdown,initValue:Fc.iconName,options:["None",...Ui]},Prefix:{controlType:L.Text,initValue:"Sort by: "},"Force open":{controlType:L.Checkbox,initValue:!1}},elementExamplesCallback({defineExample:e}){hm.forEach(t=>{e({title:t.title,stateInitStatic:{selected:el.map(r=>{var n;return(n=r.inputs)==null?void 0:n.value})},styles:p`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return el.map((i,a)=>{const s=p`
                            ${t.customStyle??p``};
                            ${i.customStyle??p``};
                        `;return f`
                            <${Mr.assign({...t.inputs,...i.inputs,options:Nr,value:r.selected[a]??Nr.find(l=>l.label===o.Selected),icon:En[o.Icon],selectedLabelPrefix:o.Prefix,direction:Yo[o.Direction],_forceOpenState:o["Force open"]||void 0})}
                                style=${s}
                                ${T(Mr.events.selectChange,l=>{const c=[...r.selected];c[a]=l.detail,n({selected:c})})}
                            ></${Mr}>
                        `})}})})}}),tl="/toniq-labs-design-system";function pm(...e){const r=[globalThis.location.pathname.startsWith(tl)?tl:"",...e].filter(_i);return bf(...r)}const go=Array(30).fill(pm("/toniq-labs-logo.png")),si=["Hello there.","There is stuff here."],zr=si.concat(Array(30).fill(si)),gm=V({title:Q.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"basic",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${Q.assign({infoParagraphs:zr,imageUrls:go,socialUrls:D2,title:"Featured Stuff",viewButtonTitle:"Stuff"})}></${Q}>
                `}}),e({title:"with missing inputs",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${Q.assign({imageUrls:go,title:"Featured Stuff",infoParagraphs:void 0})}></${Q}>
                `}}),e({title:"hyperlink view button",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${Q.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:zr,viewMoreUrl:"https://toniqlabs.com"})}
                        ${T(Q.events.viewMoreButtonClick,()=>{console.info("view more clicked")})}
                    ></${Q}>
                `}}),e({title:"min height",stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${Q.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:zr})}></${Q}>
                `}}),e({title:"with custom height",styles:p`
                ${Q} {
                    height: 300px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${Q.assign({imageUrls:[],title:"Featured Stuff",infoParagraphs:zr})}></${Q}>
                `}}),e({title:"smaller",styles:p`
                ${Q} {
                    width: 1000px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback(){return f`
                    <${Q.assign({imageUrls:go,infoParagraphs:si,title:"Featured Stuff"})}></${Q}>
                `}})}}),mm=V({title:st.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"basic",styles:p`
                .front,
                .back {
                    padding: 32px;
                }
            `,stateInitStatic:{flipped:!1},renderCallback({state:t,updateState:r}){return f`
                    <${st.assign({flipped:t.flipped})}
                        ${T(st.events.flippedChange,n=>{r({flipped:n.detail})})}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${st}>
                `}})}}),vm=V({parent:K,title:xe.tagName,elementExamplesCallback({defineExample:e}){[{title:"default",inputs:{}},{title:"hover styles",inputs:{withHoverStyles:!0}},{title:"route link",inputs:{treatAsRouteChange:!0}}].forEach(r=>{e({title:r.title,descriptionParagraphs:r.descriptions,renderCallback(){return f`
                        <${xe.assign({newTab:!0,url:"https://toniqlabs.com",...r.inputs})}>
                            Toniq Labs Link
                        </${xe}>
                    `}})})}}),wm=V({title:A.tagName,parent:K,controls:{"CSS color":{controlType:L.Color,initValue:""},[Ct.color]:{controlType:L.Color,initValue:""},[Ct.strokeColor]:{controlType:L.Color,initValue:""},[Ct.fillColor]:{controlType:L.Color,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{icon:rd},{icon:td},{icon:ed},{icon:Wc},{icon:Ut},{icon:void 0}];e({title:"sizes",styles:p`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,renderCallback({controls:r}){const n=Object.entries(r).filter(([,o])=>!!o).map(([o,i])=>(o.toLowerCase().includes("css")&&(o="color"),`${o}: ${i};`)).join(`
`);return t.map(o=>f`
                        <${A.assign({icon:o.icon})}
                            style=${n}
                        ></${A}>
                    `)}})}}),bm=V({title:Rr.tagName,parent:K,controls:{"External value":{controlType:L.Text,initValue:""},Placeholder:{controlType:L.Text,initValue:"placeholder"},Icon:{controlType:L.Dropdown,initValue:Qc.iconName,options:["None",...Ui]},Suffix:{controlType:L.Text,initValue:"ICP"},"No browser helps":{controlType:L.Checkbox,initValue:!1},"Blocked characters":{controlType:L.Text,initValue:""},"Exclusive characters":{controlType:L.Text,initValue:""}},elementExamplesCallback({defineExample:e}){const t=[{},{customStyles:p`
                    height: 75px;
                    width: 300px;
                `},{customStyles:p`
                    height: 40px;
                    width: 140px;
                `}];[{title:"default",inputs:{style:ii.Default}},{title:"outline",inputs:{style:ii.Outline}},{title:"disabled",inputs:{disabled:!0}}].forEach(n=>{e({title:n.title,stateInitStatic:{value:""},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,renderCallback({controls:o,state:i,updateState:a}){return t.map(s=>(o["External value"]&&o["External value"]!==i.value&&a({value:o["External value"]}),f`
                            <${Rr.assign({...n.inputs,value:o["External value"]||i.value,icon:En[o.Icon],placeholder:o.Placeholder,suffix:o.Suffix,disableBrowserHelps:o["No browser helps"],allowedInputs:o["Exclusive characters"],blockedInputs:o["Blocked characters"]})}
                                style=${s.customStyles}
                                ${T(Rr.events.valueChange,l=>{a({value:l.detail})})}
                            ></${Rr}>
                        `))}})})}}),ym=V({title:ee.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"Long text",renderCallback(){return f`
                    <${ee.assign({text:"Long string instead of text"})}></${ee}>
                `}}),e({title:"Short text",renderCallback(){return f`
                    <${ee.assign({text:"Short text"})}></${ee}>
                `}}),e({title:"External Link",renderCallback(){return f`
                    <${ee.assign({text:"Long text with link",externalLink:"https://toniqlabs.com"})}></${ee}>
                `}}),e({title:"Copyable",renderCallback(){return f`
                    <${ee.assign({text:"Long text that you can copy",copyOnClick:!0})}></${ee}>
                `}}),e({title:"Custom CSS vars",styles:p`
                ${ee} {
                    ${ee.cssVars["toniq-middle-ellipsis-icon-color"].name}: red;
                    ${ee.cssVars["toniq-middle-ellipsis-icon-hover-color"].name}: blue;
                    ${ee.cssVars["toniq-middle-ellipsis-text-color"].name}: green;
                    ${ee.cssVars["toniq-middle-ellipsis-text-hover-color"].name}: purple;
                }
            `,renderCallback(){return f`
                    <${ee.assign({text:"long text with custom colors",copyOnClick:!0})}></${ee}>
                `}})}}),Dt=[{value:"1",label:"Entry 1"},{value:"2",label:"Entry 2"},{value:"3",label:"Entry 3"}],pe={basic:Dt,longText:[{value:"first",label:"Entry 1 with really really really really really really really really really long label"},...Dt.slice(1)],disabled:[{...Dt[0],disabled:!0},...Dt.slice(1)],noLabels:df(Dt,e=>({...e,label:void 0}))},$m=V({title:j.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{selectedValue:pe.basic[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({entries:pe.basic,value:t.selectedValue})}
                        ${T(j.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${j}>
                `}}),e({title:"Inline",stateInitStatic:{selectedValue:pe.basic[0].value},styles:p`
                ${j} {
                    flex-direction: row;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({entries:pe.basic,value:t.selectedValue})}
                        ${T(j.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${j}>
                `}}),e({title:"Restricted width",stateInitStatic:{selectedValue:pe.longText[0].value},styles:p`
                ${j} {
                    max-width: 200px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({entries:pe.longText,value:t.selectedValue})}
                        ${T(j.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${j}>
                `}}),e({title:"No labels",stateInitStatic:{selectedValue:pe.noLabels[0].value},renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({entries:pe.noLabels,value:t.selectedValue})}
                        ${T(j.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${j}>
                `}}),e({title:"Entry 1 disabled",stateInitStatic:{selectedValue:pe.disabled[1].value},renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({entries:pe.disabled,value:t.selectedValue})}
                        ${T(j.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${j}>
                `}}),e({title:"Custom CSS vars",stateInitStatic:{selectedValue:pe.basic[0].value},styles:p`
                ${j} {
                    ${j.cssVars["toniq-radio-group-checked-label-color"].name}: red;
                    ${j.cssVars["toniq-radio-group-checked-radio-color"].name}: blue;
                    ${j.cssVars["toniq-radio-group-unchecked-label-color"].name}: green;
                    ${j.cssVars["toniq-radio-group-unchecked-radio-color"].name}: pink;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${j.assign({entries:pe.basic,value:t.selectedValue})}
                        ${T(j.events.valueChange,n=>{r({selectedValue:n.detail})})}
                    ></${j}>
                `}})}}),Be=p`
    ${N} {
        width: 300px;
    }
`,mo={min:10,max:50},xm=V({title:N.tagName,parent:K,elementExamplesCallback({defineExample:e}){e({title:"Default",stateInitStatic:{value:20},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,...mo})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Double range",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Suffix",stateInitStatic:{value:20},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,...mo,suffix:"ICP"})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Log Scale",stateInitStatic:{value:20},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,min:0,max:1e6,suffix:"ICP",logScale:!0})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Log Scale Double",stateInitStatic:{value:{min:10,max:1e3}},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,double:!0,min:0,max:1e6,logScale:!0})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Decimals",stateInitStatic:{value:{min:1.95,max:50}},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,double:!0,min:1.95,max:100.5,logScale:!0})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Negative min",stateInitStatic:{value:20},styles:p`
                ${Be}
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,min:-100,max:100})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Padding",stateInitStatic:{value:20},styles:p`
                ${Be}

                ${N} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({value:t.value,...mo})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail!="number")throw new Error("was expecting a single numeric slider value");r({value:n.detail})})}
                    ></${N}>
                `}}),e({title:"Padding Double",stateInitStatic:{value:{min:10,max:72}},styles:p`
                ${Be}

                ${N} {
                    padding: 32px;
                }
            `,renderCallback({state:t,updateState:r}){return f`
                    <${N.assign({double:!0,value:t.value,min:0,max:100})}
                        ${T(N.events.valueChange,n=>{if(typeof n.detail=="number")throw new Error("was expecting a double slider value");r({value:n.detail})})}
                    ></${N}>
                `}})}});V({title:"Toggle Button",parent:K});const km=[{title:"default",inputs:{}},{title:"text only",inputs:{style:Yd.TextOnly}},{title:"disabled",inputs:{disabled:!0}}],rl=[{inputs:{icon:void 0}},{inputs:{toggled:!0}},{inputs:{}},{inputs:{text:void 0}}],Sm=V({title:fo.tagName,parent:K,controls:{Text:{controlType:L.Text,initValue:"Toggle Button"},Icon:{controlType:L.Dropdown,initValue:Kc.iconName,options:["None",...Ui]}},elementExamplesCallback({defineExample:e}){km.forEach(t=>{e({title:t.title,stateInitStatic:{buttonStates:rl.map(r=>!!r.inputs.toggled)},styles:p`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,renderCallback({state:r,updateState:n,controls:o}){return rl.map((i,a)=>f`
                            <${fo.assign({...t.inputs,toggled:r.buttonStates[a],icon:En[o.Icon],text:o.Text,...Ho(i.inputs,["toggled"])})}
                                ${T("click",()=>{const s=[...r.buttonStates];s[a]=!s[a],n({buttonStates:s})})}
                            ></${fo}>
                        `)}})})}}),Wi=V({title:"Tooltip",parent:K}),Cm=V({parent:Wi,title:qr.tagName,elementExamplesCallback({defineExample:e}){function t({title:r,tooltipContent:n,forceShow:o}){e({title:r,styles:p`
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
                `,renderCallback(){return f`
                        <${qr.assign({tooltipContent:n,forceShow:o})}>
                            <div>Hover me!</div>
                        </${qr}>
                    `}})}t({title:"default",tooltipContent:"This is a tooltip!"}),t({title:"tooltip forced on",tooltipContent:"This is a tooltip!",forceShow:!0}),t({title:"with template content",tooltipContent:f`
                <p>a paragraph element</p>
                <p>another one</p>
            `,forceShow:!0}),t({title:"long tooltip",tooltipContent:"This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",forceShow:!0})}}),Tm=V({parent:Wi,title:Yt.tagName,descriptionParagraphs:[`This element should almost never be used alone. You should instead use <${qr.tagName}>, which in turn uses this element.`],elementExamplesCallback({defineExample:e}){e({title:"standalone tooltip",renderCallback(){return f`
                    <${Yt}>This is a tooltip.</${Yt}>
                `}})}}),Im=[Wi,Cm,Tm],Jd=V({title:"Icons",parent:void 0}),Em=Object.entries(ot).map(([e,t])=>V({title:e,parent:Jd,elementExamplesCallback({defineExample:r}){t.map(n=>r({title:n.iconName,renderCallback(){return f`
                                <${vn.assign({icon:n})}></${vn}>
                            `}}))}}));function Xd(e){const t=Am(e),r=sr(t,(o,i)=>String(i).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/));return Me(r).reduce((o,i)=>{const a=r[i];return a&&a[1]&&a[2]&&(o[i]={cssVarName:a[1],defaultValue:a[2]}),o},{})}function Am(e){typeof e!="string"&&(e=String(e));const n=`{"${hf(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const o=JSON.parse(n);return Object.keys(o).reduce((a,s)=>(a[s]=o[s],a),{})}catch(o){throw console.error(`Failed to JSON parse: ${n}`),o}}const Yi=V({title:"Styles",parent:void 0}),Mm=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${Z.labelFont};
        ${Z.monospaceFont};
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
        ${Z.h2Font};
    }
`;function Pm(e,t,r){const n=Xd(D(r));return e({title:t,styles:Mm,renderCallback(){return f`
                <div class="color-example" style=${D(r)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(n).map(o=>f`
                            <span>
                                ${o.cssVarName}: ${o.defaultValue}
                            </span>
                        `)}
                </div>
            `}})}const _m=V({title:"Colors",parent:Yi,elementExamplesCallback({defineExample:e}){Me(x).map(t=>Pm(e,t,x[t]))},descriptionParagraphs:['Accessed via the "toniqColors" export.']}),Bm=p`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${Z.labelFont};
        ${Z.monospaceFont};
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
`;function Lm(e,t,r){const n=Xd(r);return e({title:t,styles:Bm,renderCallback(){return f`
                <div class="font-example" style=${r}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${Me(n).map(o=>{const i=n[o];return f`
                            <div class="font-style-group">
                                <span>${o}: ${i.defaultValue}</span>
                                <span class="css-var-name">${i.cssVarName}</span>
                            </div>
                        `})}
                </div>
            `}})}const Rm=V({title:"Fonts",parent:Yi,elementExamplesCallback({defineExample:e}){Me(Z).map(t=>{const r=Z[t];return Lm(e,t,r)})},descriptionParagraphs:['Accessed via the "toniqFontStyles" export.']}),Nm=[K,Jd,Yi,Gd],zm=[...Em,im,am,dm,um,fm,gm,mm,vm,wm,bm,ym,$m,xm,Sm,...Im,om,_m,Rm].sort((e,t)=>e.title.localeCompare(t.title)),Dm=[...Nm,...zm];$n({tagName:"toniq-design-system-app",styles:p`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Gn} {
            height: 100%;
            width: 100%;
            ${Z.paragraphFont};
        }
    `,renderCallback(){return f`
            <${Gn.assign({internalRouterConfig:{basePath:"toniq-labs-design-system",useInternalRouter:!0},entries:Dm,themeColor:"#00D093",everythingTitle:"Design System"})}></${Gn}>
        `}});
