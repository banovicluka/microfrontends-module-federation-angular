(self.webpackChunkshell=self.webpackChunkshell||[]).push([[5841,3353],{3353:(B,c,l)=>{l.r(c),l.d(c,{Platform:()=>w,PlatformModule:()=>g,_getEventTarget:()=>T,_getFocusedElementPierceShadowDom:()=>P,_getShadowRoot:()=>_,_isTestEnvironment:()=>D,_supportsShadowDom:()=>m,getRtlScrollAxisType:()=>S,getSupportedInputTypes:()=>y,normalizePassiveListenerOptions:()=>E,supportsPassiveEventListeners:()=>p,supportsScrollBehavior:()=>I});var i=l(5760),v=l(4888);let d;try{d=typeof Intl<"u"&&Intl.v8BreakIterator}catch{d=!1}let r,w=(()=>{class e{constructor(o){this._platformId=o,this.isBrowser=this._platformId?(0,v.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!d)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.\u0275fac=function(o){return new(o||e)(i.\u0275\u0275inject(i.PLATFORM_ID))},e.\u0275prov=i.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({}),e})();const f=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function y(){if(r)return r;if("object"!=typeof document||!document)return r=new Set(f),r;let e=document.createElement("input");return r=new Set(f.filter(t=>(e.setAttribute("type",t),e.type===t))),r}let s,a,n,u;function p(){if(null==s&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>s=!0}))}finally{s=s||!1}return s}function E(e){return p()?e:!!e.capture}function I(){if(null==n){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return n=!1,n;if("scrollBehavior"in document.documentElement.style)n=!0;else{const e=Element.prototype.scrollTo;n=!!e&&!/\{\s*\[native code\]\s*\}/.test(e.toString())}}return n}function S(){if("object"!=typeof document||!document)return 0;if(null==a){const e=document.createElement("div"),t=e.style;e.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";const o=document.createElement("div"),h=o.style;h.width="2px",h.height="1px",e.appendChild(o),document.body.appendChild(e),a=0,0===e.scrollLeft&&(e.scrollLeft=1,a=0===e.scrollLeft?1:2),e.remove()}return a}function m(){if(null==u){const e=typeof document<"u"?document.head:null;u=!(!e||!e.createShadowRoot&&!e.attachShadow)}return u}function _(e){if(m()){const t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function P(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}function T(e){return e.composedPath?e.composedPath()[0]:e.target}function D(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}}}]);