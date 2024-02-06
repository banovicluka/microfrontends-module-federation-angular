(self.webpackChunkshell=self.webpackChunkshell||[]).push([[3071],{9349:(H,m,l)=>{l.r(m),l.d(m,{AutofillMonitor:()=>x,CdkAutofill:()=>p,CdkTextareaAutosize:()=>v,TextFieldModule:()=>M});var _=l(4098),s=l(5760),h=l(8705),c=l(3635),f=l(5893),E=l(4888);const g=(0,_.normalizePassiveListenerOptions)({passive:!0});let x=(()=>{class i{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return c.EMPTY;const t=(0,h.coerceElement)(e),n=this._monitoredElements.get(t);if(n)return n.subject;const o=new c.Subject,r="cdk-text-field-autofilled",d=u=>{"cdk-text-field-autofill-start"!==u.animationName||t.classList.contains(r)?"cdk-text-field-autofill-end"===u.animationName&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1}))):(t.classList.add(r),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",d,g),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:o,unlisten:()=>{t.removeEventListener("animationstart",d,g)}}),o}stopMonitoring(e){const t=(0,h.coerceElement)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275inject(_.Platform),s.\u0275\u0275inject(s.NgZone))},i.\u0275prov=s.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),p=(()=>{class i{constructor(e,t){this._elementRef=e,this._autofillMonitor=t,this.cdkAutofill=new s.EventEmitter}ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}}return i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(x))},i.\u0275dir=s.\u0275\u0275defineDirective({type:i,selectors:[["","cdkAutofill",""]],outputs:{cdkAutofill:"cdkAutofill"}}),i})(),v=(()=>{class i{get minRows(){return this._minRows}set minRows(e){this._minRows=(0,h.coerceNumberProperty)(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=(0,h.coerceNumberProperty)(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){e=(0,h.coerceBooleanProperty)(e),this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}constructor(e,t,n,o){this._elementRef=e,this._platform=t,this._ngZone=n,this._destroyed=new c.Subject,this._enabled=!0,this._previousMinRows=-1,this._isViewInited=!1,this._handleFocusEvent=r=>{this._hasFocus="focus"===r.type},this._document=o,this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){const e=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){const e=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();(0,c.fromEvent)(e,"resize").pipe((0,f.auditTime)(16),(0,f.takeUntil)(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0)),this._textareaElement.addEventListener("focus",this._handleFocusEvent),this._textareaElement.addEventListener("blur",this._handleFocusEvent)}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._textareaElement.removeEventListener("focus",this._handleFocusEvent),this._textareaElement.removeEventListener("blur",this._handleFocusEvent),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){const e=this._textareaElement,t=e.style.marginBottom||"",n=this._platform.FIREFOX,o=n&&this._hasFocus,r=n?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";o&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(r);const d=e.scrollHeight-4;return e.classList.remove(r),o&&(e.style.marginBottom=t),d}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||null!=this._cachedPlaceholderHeight)return;if(!this.placeholder)return void(this._cachedPlaceholderHeight=0);const e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;const t=this._elementRef.nativeElement,n=t.value;if(!e&&this._minRows===this._previousMinRows&&n===this._previousValue)return;const o=this._measureScrollHeight(),r=Math.max(o,this._cachedPlaceholderHeight||0);t.style.height=`${r}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=n,this._previousMinRows=this._minRows}reset(){void 0!==this._initialHeight&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(e){const{selectionStart:t,selectionEnd:n}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,n)}}return i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(_.Platform),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(E.DOCUMENT,8))},i.\u0275dir=s.\u0275\u0275defineDirective({type:i,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(e,t){1&e&&s.\u0275\u0275listener("input",function(){return t._noopInputHandler()})},inputs:{minRows:["cdkAutosizeMinRows","minRows"],maxRows:["cdkAutosizeMaxRows","maxRows"],enabled:["cdkTextareaAutosize","enabled"],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]}),i})(),M=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=s.\u0275\u0275defineInjector({}),i})()}}]);