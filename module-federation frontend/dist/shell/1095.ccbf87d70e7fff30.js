(self.webpackChunkshell=self.webpackChunkshell||[]).push([[1095,1481],{1481:(Ye,H,g)=>{g.r(H),g.d(H,{BrowserModule:()=>Re,BrowserTransferStateModule:()=>je,By:()=>xe,DomSanitizer:()=>se,EVENT_MANAGER_PLUGINS:()=>f,EventManager:()=>m,HAMMER_GESTURE_CONFIG:()=>w,HAMMER_LOADER:()=>P,HammerGestureConfig:()=>re,HammerModule:()=>Ve,Meta:()=>Q,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>C,Title:()=>ee,TransferState:()=>Fe,VERSION:()=>Ke,bootstrapApplication:()=>we,createApplication:()=>Te,disableDebugTools:()=>Le,enableDebugTools:()=>Pe,makeStateKey:()=>Ue,platformBrowser:()=>Ce,provideProtractorTestingSupport:()=>Me,\u0275BrowserDomAdapter:()=>y,\u0275BrowserGetTestability:()=>k,\u0275DomEventsPlugin:()=>$,\u0275DomRendererFactory2:()=>v,\u0275DomSanitizerImpl:()=>L,\u0275DomSharedStylesHost:()=>p,\u0275HammerGesturesPlugin:()=>oe,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>I,\u0275KeyEventsPlugin:()=>Y,\u0275NAMESPACE_URIS:()=>S,\u0275SharedStylesHost:()=>D,\u0275TRANSITION_ID:()=>T,\u0275escapeHtml:()=>He,\u0275flattenStyles:()=>R,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>W,\u0275shimContentAttribute:()=>B,\u0275shimHostAttribute:()=>j});var l=g(4888),o=g(5760);class le extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class y extends le{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new y)}onAndCancel(r,e,t){return r.addEventListener(e,t,!1),()=>{r.removeEventListener(e,t,!1)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return(e=e||this.getDefaultDocument()).createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return"window"===e?window:"document"===e?r:"body"===e?r.body:null}getBaseHref(r){const e=function ue(){return h=h||document.querySelector("base"),h?h.getAttribute("href"):null}();return null==e?null:function ce(n){E=E||document.createElement("a"),E.setAttribute("href",n);const r=E.pathname;return"/"===r.charAt(0)?r:`/${r}`}(e)}resetBaseElement(){h=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return(0,l.\u0275parseCookieValue)(document.cookie,r)}}let E,h=null;const T=new o.InjectionToken("TRANSITION_ID"),fe=[{provide:o.APP_INITIALIZER,useFactory:function de(n,r,e){return()=>{e.get(o.ApplicationInitStatus).donePromise.then(()=>{const t=(0,l.\u0275getDOM)(),s=r.querySelectorAll(`style[ng-transition="${n}"]`);for(let i=0;i<s.length;i++)t.remove(s[i])})}},deps:[T,l.DOCUMENT,o.Injector],multi:!0}];class k{addToWindow(r){o.\u0275global.getAngularTestability=(t,s=!0)=>{const i=r.findTestabilityInTree(t,s);if(null==i)throw new Error("Could not find testability for element.");return i},o.\u0275global.getAllAngularTestabilities=()=>r.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>r.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(t=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const u=function(c){a=a||c,i--,0==i&&t(a)};s.forEach(function(c){c.whenStable(u)})})}findTestabilityInTree(r,e,t){return null==e?null:r.getTestability(e)??(t?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}}let pe=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const f=new o.InjectionToken("EventManagerPlugins");let m=(()=>{class n{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s){return this._findPluginFor(t).addEventListener(e,t,s)}addGlobalEventListener(e,t,s){return this._findPluginFor(t).addGlobalEventListener(e,t,s)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const s=this._plugins;for(let i=0;i<s.length;i++){const a=s[i];if(a.supports(e))return this._eventNameToPlugin.set(e,a),a}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(f),o.\u0275\u0275inject(o.NgZone))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class M{constructor(r){this._doc=r}addGlobalEventListener(r,e,t){const s=(0,l.\u0275getDOM)().getGlobalEventTarget(this._doc,r);if(!s)throw new Error(`Unsupported event target ${s} for event ${e}`);return this.addEventListener(s,e,t)}}let D=(()=>{class n{constructor(){this.usageCount=new Map}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)0===this.changeUsageCount(t,-1)&&this.onStyleRemoved(t)}onStyleRemoved(e){}onStyleAdded(e){}getAllStyles(){return this.usageCount.keys()}changeUsageCount(e,t){const s=this.usageCount;let i=s.get(e)??0;return i+=t,i>0?s.set(e,i):s.delete(e),i}ngOnDestroy(){for(const e of this.getAllStyles())this.onStyleRemoved(e);this.usageCount.clear()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),p=(()=>{class n extends D{constructor(e){super(),this.doc=e,this.styleRef=new Map,this.hostNodes=new Set,this.resetHostNodes()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.forEach(i=>i.remove()),t.delete(e)}ngOnDestroy(){super.ngOnDestroy(),this.styleRef.clear(),this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}addStyleToHost(e,t){const s=this.doc.createElement("style");s.textContent=t,e.appendChild(s);const i=this.styleRef.get(t);i?i.push(s):this.styleRef.set(t,[s])}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const S={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},_=/%COMP%/g,F="%COMP%",he=`_nghost-${F}`,me=`_ngcontent-${F}`,C=new o.InjectionToken("RemoveStylesOnCompDestory",{providedIn:"root",factory:()=>!1});function B(n){return me.replace(_,n)}function j(n){return he.replace(_,n)}function R(n,r){return r.flat(100).map(e=>e.replace(_,n))}function x(n){return r=>{if("__ngUnwrap__"===r)return n;!1===n(r)&&(r.preventDefault(),r.returnValue=!1)}}let v=(()=>{class n{constructor(e,t,s,i){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestory=i,this.rendererByCompId=new Map,this.defaultRenderer=new A(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;const s=this.getOrCreateRenderer(e,t);return s instanceof V?s.applyToHost(e):s instanceof b&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.eventManager,u=this.sharedStylesHost,c=this.removeStylesOnCompDestory;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:i=new V(a,u,t,this.appId,c);break;case o.ViewEncapsulation.ShadowDom:return new Ee(a,u,e,t);default:i=new b(a,u,t,c)}i.onDestroy=()=>s.delete(t.id),s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(m),o.\u0275\u0275inject(p),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(C))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class A{constructor(r){this.eventManager=r,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(r,e){return e?document.createElementNS(S[e]||e,r):document.createElement(r)}createComment(r){return document.createComment(r)}createText(r){return document.createTextNode(r)}appendChild(r,e){(G(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(G(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let t="string"==typeof r?document.querySelector(r):r;if(!t)throw new Error(`The selector "${r}" did not match any elements`);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,s){if(s){e=s+":"+e;const i=S[s];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){const s=S[t];s?r.removeAttributeNS(s,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?r.style.setProperty(e,t,s&o.RendererStyleFlags2.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&o.RendererStyleFlags2.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r[e]=t}setValue(r,e){r.nodeValue=e}listen(r,e,t){return"string"==typeof r?this.eventManager.addGlobalEventListener(r,e,x(t)):this.eventManager.addEventListener(r,e,x(t))}}function G(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class Ee extends A{constructor(r,e,t,s){super(r),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=R(s.id,s.styles);for(const a of i){const u=document.createElement("style");u.textContent=a,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class b extends A{constructor(r,e,t,s,i=t.id){super(r),this.sharedStylesHost=e,this.removeStylesOnCompDestory=s,this.rendererUsageCount=0,this.styles=R(i,t.styles)}applyStyles(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}destroy(){this.removeStylesOnCompDestory&&(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,0===this.rendererUsageCount&&this.onDestroy?.())}}class V extends b{constructor(r,e,t,s,i){const a=s+"-"+t.id;super(r,e,t,i,a),this.contentAttr=B(a),this.hostAttr=j(a)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){const t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}}let $=(()=>{class n extends M{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s){return e.addEventListener(t,s,!1),()=>this.removeEventListener(e,t,s)}removeEventListener(e,t,s){return e.removeEventListener(t,s)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const K=["alt","control","meta","shift"],Se={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ve={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let Y=(()=>{class n extends M{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,t,s){const i=n.parseEventName(t),a=n.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=n._normalizeKey(t.pop());let a="",u=t.indexOf("code");if(u>-1&&(t.splice(u,1),a="code."),K.forEach(ie=>{const ae=t.indexOf(ie);ae>-1&&(t.splice(ae,1),a+=ie+".")}),a+=i,0!=t.length||0===i.length)return null;const c={};return c.domEventName=s,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let s=Se[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),K.forEach(a=>{a!==s&&(0,ve[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{n.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function we(n,r){return(0,o.\u0275internalCreateApplication)({rootComponent:n,...Z(r)})}function Te(n){return(0,o.\u0275internalCreateApplication)(Z(n))}function Z(n){return{appProviders:[...J,...n?.providers??[]],platformProviders:I}}function Me(){return[...q]}function W(){y.makeCurrent()}const I=[{provide:o.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:W,multi:!0},{provide:l.DOCUMENT,useFactory:function _e(){return(0,o.\u0275setDocument)(document),document},deps:[]}],Ce=(0,o.createPlatformFactory)(o.platformCore,"browser",I),X=new o.InjectionToken(""),q=[{provide:o.\u0275TESTABILITY_GETTER,useClass:k,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],J=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function De(){return new o.ErrorHandler},deps:[]},{provide:f,useClass:$,multi:!0,deps:[l.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:f,useClass:Y,multi:!0,deps:[l.DOCUMENT]},{provide:v,useClass:v,deps:[m,p,o.APP_ID,C]},{provide:o.RendererFactory2,useExisting:v},{provide:D,useExisting:p},{provide:p,useClass:p,deps:[l.DOCUMENT]},{provide:m,useClass:m,deps:[f,o.NgZone]},{provide:l.XhrFactory,useClass:pe,deps:[]},[]];let Re=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:o.APP_ID,useValue:e.appId},{provide:T,useExisting:o.APP_ID},fe]}}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(X,12))},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[...J,...q],imports:[l.CommonModule,o.ApplicationModule]}),n})(),Q=(()=>{class n{constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),u=this.getTags(a).filter(c=>this._containsAttributes(e,c))[0];if(void 0!==u)return u}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return be[e]||e}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let t=null;return t=e?new e:function Ae(){return new Q((0,o.\u0275\u0275inject)(l.DOCUMENT))}(),t},providedIn:"root"}),n})();const be={httpEquiv:"http-equiv"};let ee=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let t=null;return t=e?new e:function Oe(){return new ee((0,o.\u0275\u0275inject)(l.DOCUMENT))}(),t},providedIn:"root"}),n})();function te(n,r){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[n]=r)}const d=typeof window<"u"&&window||{};class Ie{constructor(r,e){this.msPerTick=r,this.numTicks=e}}class Ne{constructor(r){this.appRef=r.injector.get(o.ApplicationRef)}timeChangeDetection(r){const e=r&&r.record,t="Change Detection",s=null!=d.console.profile;e&&s&&d.console.profile(t);const i=N();let a=0;for(;a<5||N()-i<500;)this.appRef.tick(),a++;const u=N();e&&s&&d.console.profileEnd(t);const c=(u-i)/a;return d.console.log(`ran ${a} change detection cycles`),d.console.log(`${c.toFixed(2)} ms per check`),new Ie(c,a)}}function N(){return d.performance&&d.performance.now?d.performance.now():(new Date).getTime()}const ne="profiler";function Pe(n){return te(ne,new Ne(n)),n}function Le(){te(ne,null)}function He(n){const r={"&":"&a;",'"':"&q;","'":"&s;","<":"&l;",">":"&g;"};return n.replace(/[&"'<>]/g,e=>r[e])}function Ue(n){return n}let Fe=(()=>{class n{constructor(){this.store={},this.onSerializeCallbacks={},this.store=function Be(n,r){const e=n.getElementById(r+"-state");let t={};if(e&&e.textContent)try{t=JSON.parse(function ke(n){const r={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return n.replace(/&[^;]+;/g,e=>r[e])}(e.textContent))}catch(s){console.warn("Exception while restoring TransferState for app "+r,s)}return t}((0,o.inject)(l.DOCUMENT),(0,o.inject)(o.APP_ID))}get(e,t){return void 0!==this.store[e]?this.store[e]:t}set(e,t){this.store[e]=t}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return 0===Object.keys(this.store).length}onSerialize(e,t){this.onSerializeCallbacks[e]=t}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(t){console.warn("Exception in onSerialize callback: ",t)}return JSON.stringify(this.store)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({}),n})();class xe{static all(){return()=>!0}static css(r){return e=>null!=e.nativeElement&&function ze(n,r){return!!(0,l.\u0275getDOM)().isElementNode(n)&&(n.matches&&n.matches(r)||n.msMatchesSelector&&n.msMatchesSelector(r)||n.webkitMatchesSelector&&n.webkitMatchesSelector(r))}(e.nativeElement,r)}static directive(r){return e=>-1!==e.providerTokens.indexOf(r)}}const Ge={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},w=new o.InjectionToken("HammerGestureConfig"),P=new o.InjectionToken("HammerLoader");let re=(()=>{class n{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),oe=(()=>{class n extends M{constructor(e,t,s,i){super(e),this._config=t,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Ge.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,u=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(u=this.addEventListener(e,t,s)):u=()=>{}}).catch(()=>{u=()=>{}})),()=>{u()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),u=function(c){i.runGuarded(function(){s(c)})};return a.on(t,u),()=>{a.off(t,u),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(w),o.\u0275\u0275inject(o.\u0275Console),o.\u0275\u0275inject(P,8))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),Ve=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:f,useClass:oe,multi:!0,deps:[l.DOCUMENT,w,o.\u0275Console,[new o.Optional,P]]},{provide:w,useClass:re,deps:[]}]}),n})(),se=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let t=null;return t=e?new(e||n):o.\u0275\u0275inject(L),t},providedIn:"root"}),n})(),L=(()=>{class n extends se{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case o.SecurityContext.NONE:return t;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,o.\u0275unwrapSafeValue)(t):t;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,o.\u0275unwrapSafeValue)(t);throw new Error("unsafe value used in a script context");case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeUrl)(String(t));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(t);throw new Error(`unsafe value used in a resource URL context (see ${o.\u0275XSS_SECURITY_URL})`);default:throw new Error(`Unexpected SecurityContext ${e} (see ${o.\u0275XSS_SECURITY_URL})`)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}}return n.\u0275fac=function(e){return new(e||n)(o.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(e){let t=null;return t=e?new e:function $e(n){return new L(n.get(l.DOCUMENT))}(o.\u0275\u0275inject(o.Injector)),t},providedIn:"root"}),n})();const Ke=new o.Version("15.2.10")}}]);