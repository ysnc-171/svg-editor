/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}function e(t,e,i,s){return new(i||(i=Promise))((function(o,n){function r(t){try{h(s.next(t))}catch(t){n(t)}}function l(t){try{h(s.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}h((s=s.apply(t,e||[])).next())}))}function i(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return s&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,o)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const d=window.trustedTypes,c=d?d.emptyScript:"",u=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||w}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=w){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:p.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:p.fromAttribute;this._$Ei=r,this[r]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.2");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,C="?"+$,_=`<${C}>`,E=document,A=(t="")=>E.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,T=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,U=/"/g,R=/^(?:script|style|textarea)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),H=new WeakMap,N=E.createTreeWalker(E,129,null,!1),I=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=S;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===S?"!--"===h[1]?r=L:void 0!==h[1]?r=T:void 0!==h[2]?(R.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=P):void 0!==h[3]&&(r=P):r===P?">"===h[0]?(r=null!=o?o:S,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?P:'"'===h[3]?U:k):r===U||r===k?r=P:r===L||r===T?r=S:(r=P,o=void 0);const c=r===P&&t[e+1].startsWith("/>")?" ":"";n+=r===S?i+_:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+$+c):i+$+(-2===a?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(l):l,s]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=I(t,e);if(this.el=z.createElement(h,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=N.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?X:"@"===e[1]?Y:V})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),N.nextNode(),l.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===C)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var o,n,r,l;if(e===M)return e;let h=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const a=b(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=B(t,h._$AS(t,e.values),h,s)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);N.currentNode=o;let n=N.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new j(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new q(n,this,t)),this.v.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(n=N.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,s){var o;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),b(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new W(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new z(t)),e}M(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new j(this.A(A()),this.A(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,s,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,e,0),n=!b(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=B(this,s[i+r],e,r),l===M&&(l=this._$AH[r]),n||(n=!b(l)||l!==this._$AH[r]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends V{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}const K=f?f.emptyScript:"";class X extends V{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Y extends V{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:O)===M)return;const s=this._$AH,o=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==O&&(s===O||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,G;null==J||J(z,j),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.0.2");class Q extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new j(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ot(t){return st({...t,state:!0})}const nt=[l`:host{height:100%;width:100%}`];let rt=class extends Q{render(){return D`<editor-layout></editor-layout>`}};var lt,ht;rt.styles=[nt],rt=t([et("svg-editor")],rt);class at{constructor(){var t,e;this.index=i(at,lt,"f",ht),function(t,e,i,s,o){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===s?o.call(t,i):o?o.value=i:e.set(t,i)}(t=at,lt,(e=i(t,lt,"f",ht),++e),"f",ht)}}lt=at,ht={value:0};class dt extends at{constructor(t,e){super(),this.center=t,this.radius=e}}class ct extends at{constructor(t,e,i){super(),this.center=t,this.radiusX=e,this.radiusY=i}}class ut extends at{constructor(t,e){super(),this.points=[t,e]}}const pt=(t,e)=>{const i=t[0]-e[0],s=t[1]-e[1],o=Math.pow(i,2)+Math.pow(s,2);return Math.sqrt(o)},vt=(t,e)=>{const i=[(t[0]+e[0])/2,(t[1]+e[1])/2],s=pt(i,[e[0],(t[1]+e[1])/2]),o=pt(i,[(t[0]+e[0])/2,e[1]]);return new ct(i,s,o)},wt=(t,e)=>{const i=t,s=pt(t,e);return new dt(i,s)},gt={drawLine:(t,e,i)=>{null==i||i.beginPath(),null==i||i.moveTo(...t),null==i||i.lineTo(...e),null==i||i.stroke(),null==i||i.closePath()},drawRectangle:(t,e,i)=>{null==i||i.beginPath(),null==i||i.moveTo(...t),null==i||i.lineTo(e[0],t[1]),null==i||i.stroke(),null==i||i.moveTo(e[0],t[1]),null==i||i.lineTo(e[0],e[1]),null==i||i.stroke(),null==i||i.moveTo(e[0],e[1]),null==i||i.lineTo(t[0],e[1]),null==i||i.stroke(),null==i||i.moveTo(t[0],e[1]),null==i||i.lineTo(t[0],t[1]),null==i||i.stroke(),null==i||i.closePath()},drawOval:(t,e)=>{if(null==e||e.beginPath(),(t=>void 0!==t.radius)(t)){const{center:i,radius:s}=t;null==e||e.arc(i[0],i[1],s,0,2*Math.PI)}else{const{center:i,radiusX:s,radiusY:o}=t;null==e||e.ellipse(i[0],i[1],s,o,0,0,2*Math.PI)}null==e||e.stroke(),null==e||e.closePath()}};class yt{constructor(t,e,i,s){var o;this.allShapes=[],this.shallWait=!1,this.pen=gt,this.isDrawing=!1,this.previousCoordinates=[0,0],this.currentCoordinates=[0,0],this.resetPreview=()=>{var t,e;this.previewLayer&&(null===(t=this.previewContext)||void 0===t||t.clearRect(0,0,null===(e=this.previewLayer)||void 0===e?void 0:e.width,this.previewLayer.height))},this.getCoords=t=>[t.clientX-this.offset[0],t.clientY-this.offset[1]],this.draw=()=>{throw new Error("not implemented")},this.executeAction=()=>{throw new Error("not implemented")},this.destroy=()=>{throw new Error("not implemented")},this.drawLayer=t,this.self=e,this.offset=i,this.previewLayer=s;const n=this.drawLayer.getContext("2d");n&&(this.context=n);const r=null===(o=this.previewLayer)||void 0===o?void 0:o.getContext("2d");r&&(this.previewContext=r)}}class ft extends yt{constructor(t,e,i,s){super(t,i,s,e),this.draw=()=>{if(this.isCircle){const t=wt(this.previousCoordinates,this.currentCoordinates);this.pen.drawOval(t,this.context)}else{const t=vt(this.previousCoordinates,this.currentCoordinates);this.pen.drawOval(t,this.context)}this.resetPreview()},this.executeAction=()=>{this.drawLayer.addEventListener("mousemove",this.onMove),this.drawLayer.addEventListener("mousedown",this.onDown),this.drawLayer.addEventListener("mouseup",this.onUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},this.destroy=()=>(this.drawLayer.removeEventListener("mousemove",this.onMove),this.drawLayer.removeEventListener("mousedown",this.onDown),this.drawLayer.removeEventListener("mouseup",this.onUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.allShapes),this.onDown=t=>{this.previousCoordinates=this.getCoords(t),this.isDrawing=!0},this.onUp=t=>{this.isDrawing=!1,this.currentCoordinates=this.getCoords(t),this.currentShape=vt(this.previousCoordinates,this.currentCoordinates),this.allShapes.push(this.currentShape),this.draw()},this.isCircle=!1,this.onKeyDown=t=>{t.ctrlKey&&(this.isCircle=!0)},this.onKeyUp=t=>{this.isCircle=!1},this.onMove=t=>{if(this.currentCoordinates=this.getCoords(t),this.resetPreview(),this.isDrawing&&this.previewLayer)if(this.isCircle){const t=wt(this.previousCoordinates,this.currentCoordinates);this.pen.drawOval(t,this.previewContext)}else{const t=vt(this.previousCoordinates,this.currentCoordinates);this.pen.drawOval(t,this.previewContext)}};const o=this.drawLayer.getContext("2d");o&&(this.context=o)}}class mt extends at{constructor(t){super(),this.points=[],this.addPoint=t=>{this.points.push(t)},this.toLines=()=>this.points.reduce(((t,e,i)=>i<this.points.length-1?[...t,new ut(e,this.points[i+1])]:t),[]),this.points.push(t)}}class $t extends yt{constructor(t,e,i){super(t,e,i),this.timesPerSecond=30,this.draw=()=>{var t,e,i,s,o;console.log(this.previousCoordinates,this.currentCoordinates),null===(t=this.context)||void 0===t||t.beginPath(),null===(e=this.context)||void 0===e||e.moveTo(...this.previousCoordinates),null===(i=this.context)||void 0===i||i.lineTo(...this.currentCoordinates),null===(s=this.context)||void 0===s||s.stroke(),null===(o=this.context)||void 0===o||o.closePath()},this.executeAction=()=>{this.drawLayer.addEventListener("mousemove",this.onMove),this.drawLayer.addEventListener("mousedown",this.onDown),this.drawLayer.addEventListener("mouseup",this.onUp),this.drawLayer.addEventListener("mouseout",this.onOut),this.setDrawTool()},this.destroy=()=>(this.drawLayer.removeEventListener("mousemove",this.onMove),this.drawLayer.removeEventListener("mousedown",this.onDown),this.drawLayer.removeEventListener("mouseup",this.onUp),this.drawLayer.removeEventListener("mouseout",this.onOut),this.allShapes),this.setDrawTool=()=>{this.context&&(this.context.strokeStyle="red",this.context.lineWidth=2,this.context.fillStyle="red")},this.onDown=t=>{this.previousCoordinates=this.currentCoordinates,this.currentCoordinates=this.getCoords(t),this.currentShape=new mt(this.currentCoordinates),this.currentShape.addPoint([this.currentCoordinates[0],this.currentCoordinates[1]]),this.isDrawing=!0},this.onUp=()=>{this.currentShape&&this.allShapes.push(this.currentShape),this.isDrawing=!1},this.onOut=()=>{this.isDrawing=!1},this.onMove=t=>{this.isDrawing&&!this.shallWait&&(this.previousCoordinates=this.currentCoordinates,this.currentCoordinates=this.getCoords(t),this.draw(),this.shallWait=!0,setTimeout((()=>{this.shallWait=!1}),1e3/this.timesPerSecond))}}}class Ct extends yt{constructor(t,e,i,s){super(t,i,s,e),this.draw=()=>{this.pen.drawLine(this.previousCoordinates,this.currentCoordinates,this.context)},this.executeAction=()=>{this.drawLayer.addEventListener("mousemove",this.onMove),this.drawLayer.addEventListener("mousedown",this.onDown),this.drawLayer.addEventListener("mouseup",this.onUp)},this.destroy=()=>(this.drawLayer.removeEventListener("mousemove",this.onMove),this.drawLayer.removeEventListener("mousedown",this.onDown),this.drawLayer.removeEventListener("mouseup",this.onUp),this.allShapes),this.onDown=t=>{this.previousCoordinates=this.getCoords(t),this.isDrawing=!0},this.onUp=t=>{this.isDrawing=!1,this.currentCoordinates=this.getCoords(t),this.currentShape=new ut([this.previousCoordinates[0],this.previousCoordinates[1]],[this.currentCoordinates[0],this.currentCoordinates[1]]),this.allShapes.push(this.currentShape),this.draw()},this.onMove=t=>{var e,i,s,o;this.resetPreview(),this.isDrawing&&this.previewLayer&&(this.currentCoordinates=this.getCoords(t),null===(e=this.previewContext)||void 0===e||e.beginPath(),null===(i=this.previewContext)||void 0===i||i.moveTo(...this.previousCoordinates),null===(s=this.previewContext)||void 0===s||s.lineTo(...this.currentCoordinates),null===(o=this.previewContext)||void 0===o||o.stroke())};const o=this.drawLayer.getContext("2d");o&&(this.context=o)}}class _t extends at{constructor(t){super(),this.corners=t}}class Et extends yt{constructor(t,e,i,s){super(t,i,s,e),this.draw=()=>{this.pen.drawRectangle(this.previousCoordinates,this.currentCoordinates,this.context)},this.executeAction=()=>{this.drawLayer.addEventListener("mousemove",this.onMove),this.drawLayer.addEventListener("mousedown",this.onDown),this.drawLayer.addEventListener("mouseup",this.onUp)},this.destroy=()=>(this.drawLayer.removeEventListener("mousemove",this.onMove),this.drawLayer.removeEventListener("mousedown",this.onDown),this.drawLayer.removeEventListener("mouseup",this.onUp),this.allShapes),this.onDown=t=>{this.previousCoordinates=this.getCoords(t),this.isDrawing=!0},this.onUp=t=>{this.isDrawing=!1,this.currentCoordinates=this.getCoords(t);const e=((t,e)=>{const i=t,s=[e[0],t[1]],o=e,n=[t[0],e[1]];return[new ut(i,s),new ut(s,o),new ut(o,n),new ut(n,i)]})(this.previousCoordinates,this.currentCoordinates);this.currentShape=new _t(e),this.allShapes.push(this.currentShape),this.draw()},this.onMove=t=>{var e,i;this.currentCoordinates=this.getCoords(t),this.isDrawing&&this.previewLayer&&(null===(e=this.previewContext)||void 0===e||e.clearRect(0,0,null===(i=this.previewLayer)||void 0===i?void 0:i.width,this.previewLayer.height),this.pen.drawRectangle(this.previousCoordinates,this.currentCoordinates,this.previewContext))};const o=this.drawLayer.getContext("2d");o&&(this.context=o)}}class At extends yt{constructor(t,e,i,s,o){super(t,i,s,e),this.onUp=t=>{this.allShapes.forEach((t=>t))},this.onMove=t=>{var e,i;this.currentCoordinates=this.getCoords(t),this.isDrawing&&this.previewLayer&&(null===(e=this.previewContext)||void 0===e||e.clearRect(0,0,null===(i=this.previewLayer)||void 0===i?void 0:i.width,this.previewLayer.height),this.pen.drawRectangle(this.previousCoordinates,this.currentCoordinates,this.previewContext))};const n=this.drawLayer.getContext("2d");n&&(this.context=n)}}var bt;!function(t){t[t.DRAW=0]="DRAW",t[t.LINE=1]="LINE",t[t.RECT=2]="RECT",t[t.CIRCLE=3]="CIRCLE",t[t.SELECT=4]="SELECT"}(bt||(bt={}));class xt{constructor(t,e,i,s){this.selectedTool=null,this.canvas=null,this.previewLayer=null,this.shapes=[],this.selectTool=t=>{var e;if(this.selectedTool&&this.deselectTool(),this.canvas&&this.previewLayer){switch(t){case bt.DRAW:this.selectedTool=new $t(this.canvas,this.self,this.offset);break;case bt.LINE:this.selectedTool=new Ct(this.canvas,this.previewLayer,this.self,this.offset);break;case bt.RECT:this.selectedTool=new Et(this.canvas,this.previewLayer,this.self,this.offset);break;case bt.CIRCLE:this.selectedTool=new ft(this.canvas,this.previewLayer,this.self,this.offset);break;case bt.SELECT:this.selectedTool=new At(this.canvas,this.previewLayer,this.self,this.offset,this.shapes)}null===(e=this.selectedTool)||void 0===e||e.executeAction()}},this.deselectTool=()=>{var t;this.selectedTool&&(this.shapes.push(...null===(t=this.selectedTool)||void 0===t?void 0:t.destroy()),this.selectedTool=null),console.log(this.shapes)},this.useSelectedTool=t=>{var e,i;return null===(i=null===(e=this.selectedTool)||void 0===e?void 0:e.executeAction)||void 0===i?void 0:i.call(e)},this.canvas=t,this.previewLayer=e,this.self=s,this.offset=i}addElement(t){throw new Error("Not implemented")}}const St=l`:host{height:100%;transition:all 1s;display:flex;flex-direction:column;background-color:#2196f3}#footer{background-color:rgba(255,255,255,.8)}`,Lt=l`#header{background-color:rgba(255,255,255,.8);width:100%}`,Tt=l`#content{display:flex;flex-wrap:nowrap}#draw-container{margin:0;padding:0;top:0;left:0;position:relative}#drawzone{top:0;left:0;position:absolute}#connection-info{background-color:rgba(255,255,255,.8)}`;let Pt=class extends Q{constructor(){super(...arguments),this.width=0,this.height=0,this.editor=null,this.handleSelectTool=()=>{console.log("selected")},this.handleSelectDraw=()=>{var t;null===(t=this.editor)||void 0===t||t.selectTool(bt.DRAW)},this.handleSelectLine=()=>{var t;null===(t=this.editor)||void 0===t||t.selectTool(bt.LINE)},this.handleSelectRect=()=>{var t;null===(t=this.editor)||void 0===t||t.selectTool(bt.RECT)},this.handleSelectCircle=()=>{var t;null===(t=this.editor)||void 0===t||t.selectTool(bt.CIRCLE)},this.deselectTool=()=>{var t;null===(t=this.editor)||void 0===t||t.deselectTool()},this.tools=[{title:"Draw Tool",onClick:this.handleSelectDraw,id:"0",isSelected:!1},{title:"Line Tool",onClick:this.handleSelectLine,id:"1",isSelected:!1},{title:"Rect Tool",onClick:this.handleSelectRect,id:"2",isSelected:!1},{title:"Circle Tool",onClick:this.handleSelectCircle,id:"3",isSelected:!1},{title:"Deselect",onClick:this.deselectTool,id:"2",isSelected:!1}],this.updateResize=()=>{this.width=parseInt(getComputedStyle(this).getPropertyValue("width")),this.height=parseInt(getComputedStyle(this).getPropertyValue("height"))}}firstUpdated(){var t,i;return e(this,void 0,void 0,(function*(){this.updateResize();const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("drawzone"),s=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById("preview-layer");s&&console.log(s),e&&(console.log(this.height,this.width),console.log("drin"),console.log(e),new ResizeObserver(this.updateResize).observe(e),this.editor=new xt(e,s,[s.offsetLeft,s.offsetTop],this))}))}render(){return D`<div id="content"><div id="draw-container"><canvas id="drawzone" height="${window.innerHeight/1.5}" width="${window.innerHeight/1.5}"></canvas><canvas id="preview-layer" height="${window.innerHeight/1.5}" width="${window.innerHeight/1.5}"></canvas></div><tool-box .tools="${this.tools}"></tool-box></div><editor-header></editor-header><div id="footer"></div>`}};Pt.styles=[St,Lt,Tt],t([ot()],Pt.prototype,"width",void 0),t([ot()],Pt.prototype,"height",void 0),t([ot()],Pt.prototype,"editor",void 0),Pt=t([et("editor-layout")],Pt);const kt=l`:host{min-width:75px;display:block}button{aspect-ratio:1;border-radius:0;padding:5px;display:flex;justify-content:center;align-items:center}button:not(.isSelected){border:1px solid grey;background-color:#fff}button.isSelected{border:1px solid #00f;background-color:#0ff}`;l``;let Ut=class extends Q{handleClick(){var t;this.buttonId&&(null===(t=this.onClick)||void 0===t||t.call(this,this.buttonId))}render(){return D`<button class="${this.isSelected?"isSelected":""}" @click="${this.handleClick}">${this.title}</button>`}};Ut.styles=[kt],t([st({type:Boolean})],Ut.prototype,"isSelected",void 0),t([st({type:String})],Ut.prototype,"buttonId",void 0),t([st()],Ut.prototype,"onClick",void 0),Ut=t([et("toolbox-button")],Ut);const Rt=l`:host{min-width:145px;transition:width 1s,height 1s;background-color:rgba(255,255,255,.8);width:fit-content;display:flex;gap:5px;padding:5px}:host>.col-0,:host>.col-1{flex:.5 1 15%;display:flex;flex-direction:column;gap:5px}`,Dt=(t,e)=>null==e?void 0:e.slice(t[0],t[1]).map(((t,e)=>D`<span class="row-${e}"><toolbox-button .onClick="${t.onClick}" .buttonId="${t.id}" .title="${t.title}" .isSelected="${t.isSelected}"></toolbox-button></span>`));let Mt=class extends Q{render(){var t,e;const i=null!==(e=null===(t=this.tools)||void 0===t?void 0:t.length)&&void 0!==e?e:0,s=[(i+i%2)/2,i];return D`<div class="col-0">${Dt([0,(i+i%2)/2],this.tools)}</div><div class="col-1">${Dt(s,this.tools)}</div>`}};Mt.styles=Rt,t([st({type:Array})],Mt.prototype,"tools",void 0),t([st({type:String})],Mt.prototype,"selectedTool",void 0),Mt=t([et("tool-box")],Mt);const Ot=[l`:host{aspect-ratio:1;display:flex;width:100%;background-color:rgba(255,255,255,.8);margin:0}:host #drawzone{transition:width .1s,height .1s;display:flex;flex-direction:column;width:100%;margin:0}`];var Ht;let Nt=class extends Q{constructor(){super(),this.mouseX=null,this.mouseY=null,this.width=null,this.height=null,this.openedFile="",this.setCurrentMousePosition=t=>{var e;const i=t.currentTarget.getBoundingClientRect(),s=t.clientX-i.left,o=t.clientY-i.top;null===(e=this.onPositionChange)||void 0===e||e.call(this,{xPosition:s,yPosition:o})},this.cancelDrawMode=()=>{var t;null===(t=this.onPositionChange)||void 0===t||t.call(this,{xPosition:null,yPosition:null})},Ht.set(this,(()=>{this.width=parseFloat(getComputedStyle(this).getPropertyValue("width")),this.height=parseFloat(getComputedStyle(this).getPropertyValue("height"))})),new ResizeObserver(i(this,Ht,"f")).observe(this)}render(){return D`<div id="drawzone"></div>`}};Ht=new WeakMap,Nt.styles=[Ot],t([st({type:Number})],Nt.prototype,"mouseX",void 0),t([st({type:Number})],Nt.prototype,"mouseY",void 0),t([ot()],Nt.prototype,"width",void 0),t([ot()],Nt.prototype,"height",void 0),t([st()],Nt.prototype,"onPositionChange",void 0),t([st()],Nt.prototype,"openedFile",void 0),Nt=t([et("draw-zone")],Nt);const It=l`:host{display:flex;gap:5px;padding:5px;background-color:rgba(255,255,255,.8)}#open-svg-button{border:1px solid grey;background-color:#fff;padding:10px 15px}#open-svg-button:hover{background-color:#0ff}`;let zt=class extends Q{constructor(){super(...arguments),this.handleSelectFile=t=>{var e;const i=t.target,s=null===(e=null==i?void 0:i.files)||void 0===e?void 0:e[0];if(!s)return;const o=new FileReader;o.addEventListener("load",(t=>{var e,i;const s=null===(e=t.target)||void 0===e?void 0:e.result;"string"==typeof s&&(null===(i=this.onSelectSvgFile)||void 0===i||i.call(this,(new DOMParser).parseFromString(s,"image/svg+xml")))})),o.readAsText(s)}}render(){return D`<label id="open-svg-button">Open <input id="open-file" type="file" hidden .onchange="${this.handleSelectFile}" accept="image/svg+xml"></label>`}};zt.styles=[It],t([st()],zt.prototype,"onSelectSvgFile",void 0),zt=t([et("editor-header")],zt);