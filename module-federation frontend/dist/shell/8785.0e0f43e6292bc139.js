(self.webpackChunkshell=self.webpackChunkshell||[]).push([[8785,3267],{3267:(J,S,c)=>{c.r(S),c.d(S,{MAT_DRAWER_DEFAULT_AUTOSIZE:()=>T,MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY:()=>B,MatDrawer:()=>D,MatDrawerContainer:()=>M,MatDrawerContent:()=>u,MatSidenav:()=>A,MatSidenavContainer:()=>P,MatSidenavContent:()=>y,MatSidenavModule:()=>Y,matDrawerAnimations:()=>b,throwMatDuplicatedDrawerError:()=>K});var l=c(340),g=c(4888),t=c(5760),x=c(3424),v=c(6083),O=c(8714),m=c(8705),I=c(3802),R=c(4098),h=c(3635),o=c(5893),_=c(3731),j=c(1775);const w=["*"],W=["content"];function U(i,a){if(1&i){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const r=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(r._onBackdropClicked())}),t.\u0275\u0275elementEnd()}if(2&i){const e=t.\u0275\u0275nextContext();t.\u0275\u0275classProp("mat-drawer-shown",e._isShowingBackdrop())}}function V(i,a){1&i&&(t.\u0275\u0275elementStart(0,"mat-drawer-content"),t.\u0275\u0275projection(1,2),t.\u0275\u0275elementEnd())}const z=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],L=["mat-drawer","mat-drawer-content","*"];function Q(i,a){if(1&i){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const r=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(r._onBackdropClicked())}),t.\u0275\u0275elementEnd()}if(2&i){const e=t.\u0275\u0275nextContext();t.\u0275\u0275classProp("mat-drawer-shown",e._isShowingBackdrop())}}function N(i,a){1&i&&(t.\u0275\u0275elementStart(0,"mat-sidenav-content"),t.\u0275\u0275projection(1,2),t.\u0275\u0275elementEnd())}const Z=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],G=["mat-sidenav","mat-sidenav-content","*"],b={transformDrawer:(0,_.trigger)("transform",[(0,_.state)("open, open-instant",(0,_.style)({transform:"none",visibility:"visible"})),(0,_.state)("void",(0,_.style)({"box-shadow":"none",visibility:"hidden"})),(0,_.transition)("void => open-instant",(0,_.animate)("0ms")),(0,_.transition)("void <=> open, open-instant => void",(0,_.animate)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};function K(i){throw Error(`A drawer was already declared for 'position="${i}"'`)}const T=new t.InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:B}),C=new t.InjectionToken("MAT_DRAWER_CONTAINER");function B(){return!1}let u=(()=>{class i extends l.CdkScrollable{constructor(e,n,r,d,p){super(r,d,p),this._changeDetectorRef=e,this._container=n}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}}return i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject((0,t.forwardRef)(()=>M)),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(l.ScrollDispatcher),t.\u0275\u0275directiveInject(t.NgZone))},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(e,n){2&e&&t.\u0275\u0275styleProp("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px")},features:[t.\u0275\u0275ProvidersFeature([{provide:l.CdkScrollable,useExisting:i}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:w,decls:1,vars:0,template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0}),i})(),D=(()=>{class i{get position(){return this._position}set position(e){(e="end"===e?"end":"start")!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=(0,m.coerceBooleanProperty)(e)}get autoFocus(){return this._autoFocus??("side"===this.mode?"dialog":"first-tabbable")}set autoFocus(e){("true"===e||"false"===e||null==e)&&(e=(0,m.coerceBooleanProperty)(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle((0,m.coerceBooleanProperty)(e))}constructor(e,n,r,d,p,k,E,$){this._elementRef=e,this._focusTrapFactory=n,this._focusMonitor=r,this._platform=d,this._ngZone=p,this._interactivityChecker=k,this._doc=E,this._container=$,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new h.Subject,this._animationEnd=new h.Subject,this._animationState="void",this.openedChange=new t.EventEmitter(!0),this._openedStream=this.openedChange.pipe((0,o.filter)(s=>s),(0,o.map)(()=>{})),this.openedStart=this._animationStarted.pipe((0,o.filter)(s=>s.fromState!==s.toState&&0===s.toState.indexOf("open")),(0,o.mapTo)(void 0)),this._closedStream=this.openedChange.pipe((0,o.filter)(s=>!s),(0,o.map)(()=>{})),this.closedStart=this._animationStarted.pipe((0,o.filter)(s=>s.fromState!==s.toState&&"void"===s.toState),(0,o.mapTo)(void 0)),this._destroyed=new h.Subject,this.onPositionChanged=new t.EventEmitter,this._modeChanged=new h.Subject,this.openedChange.subscribe(s=>{s?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{(0,h.fromEvent)(this._elementRef.nativeElement,"keydown").pipe((0,o.filter)(s=>s.keyCode===I.ESCAPE&&!this.disableClose&&!(0,I.hasModifierKey)(s)),(0,o.takeUntil)(this._destroyed)).subscribe(s=>this._ngZone.run(()=>{this.close(),s.stopPropagation(),s.preventDefault()}))}),this._animationEnd.pipe((0,o.distinctUntilChanged)((s,f)=>s.fromState===f.fromState&&s.toState===f.toState)).subscribe(s=>{const{fromState:f,toState:F}=s;(0===F.indexOf("open")&&"void"===f||"void"===F&&0===f.indexOf("open"))&&this.openedChange.emit(this._opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const r=()=>{e.removeEventListener("blur",r),e.removeEventListener("mousedown",r),e.removeAttribute("tabindex")};e.addEventListener("blur",r),e.addEventListener("mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_takeFocus(){if(!this._focusTrap)return;const e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(n=>{!n&&"function"==typeof this._elementRef.nativeElement.focus&&e.focus()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){"dialog"!==this.autoFocus&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){const e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState(),"end"===this._position&&this._updatePositionInParent("end")}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap&&this._focusTrap.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);const r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,n,r){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",n&&this._restoreFocus(r)),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe((0,o.take)(1)).subscribe(p=>d(p?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&"side"!==this.mode)}_updatePositionInParent(e){const n=this._elementRef.nativeElement,r=n.parentNode;"end"===e?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,n)),r.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}}return i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(v.FocusTrapFactory),t.\u0275\u0275directiveInject(v.FocusMonitor),t.\u0275\u0275directiveInject(R.Platform),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(v.InteractivityChecker),t.\u0275\u0275directiveInject(g.DOCUMENT,8),t.\u0275\u0275directiveInject(C,8))},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(1&e&&t.\u0275\u0275viewQuery(W,5),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(n._content=r.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){1&e&&t.\u0275\u0275syntheticHostListener("@transform.start",function(d){return n._animationStarted.next(d)})("@transform.done",function(d){return n._animationEnd.next(d)}),2&e&&(t.\u0275\u0275attribute("align",null),t.\u0275\u0275syntheticHostProperty("@transform",n._animationState),t.\u0275\u0275classProp("mat-drawer-end","end"===n.position)("mat-drawer-over","over"===n.mode)("mat-drawer-push","push"===n.mode)("mat-drawer-side","side"===n.mode)("mat-drawer-opened",n.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:w,decls:3,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"],["content",""]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0,1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd())},dependencies:[l.CdkScrollable],encapsulation:2,data:{animation:[b.transformDrawer]},changeDetection:0}),i})(),M=(()=>{class i{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=(0,m.coerceBooleanProperty)(e)}get hasBackdrop(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride}set hasBackdrop(e){this._backdropOverride=null==e?null:(0,m.coerceBooleanProperty)(e)}get scrollable(){return this._userContent||this._content}constructor(e,n,r,d,p,k=!1,E){this._dir=e,this._element=n,this._ngZone=r,this._changeDetectorRef=d,this._animationMode=E,this._drawers=new t.QueryList,this.backdropClick=new t.EventEmitter,this._destroyed=new h.Subject,this._doCheckSubject=new h.Subject,this._contentMargins={left:null,right:null},this._contentMarginChanges=new h.Subject,e&&e.change.pipe((0,o.takeUntil)(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),p.change().pipe((0,o.takeUntil)(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=k}ngAfterContentInit(){this._allDrawers.changes.pipe((0,o.startWith)(this._allDrawers),(0,o.takeUntil)(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe((0,o.startWith)(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe((0,o.debounceTime)(10),(0,o.takeUntil)(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened)if("side"==this._left.mode)e+=this._left._getWidth();else if("push"==this._left.mode){const r=this._left._getWidth();e+=r,n-=r}if(this._right&&this._right.opened)if("side"==this._right.mode)n+=this._right._getWidth();else if("push"==this._right.mode){const r=this._right._getWidth();n+=r,e-=r}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe((0,o.filter)(n=>n.fromState!==n.toState),(0,o.takeUntil)(this._drawers.changes)).subscribe(n=>{"open-instant"!==n.toState&&"NoopAnimations"!==this._animationMode&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),"side"!==e.mode&&e.openedChange.pipe((0,o.takeUntil)(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e&&e.onPositionChanged.pipe((0,o.takeUntil)(this._drawers.changes)).subscribe(()=>{this._ngZone.onMicrotaskEmpty.pipe((0,o.take)(1)).subscribe(()=>{this._validateDrawers()})})}_watchDrawerMode(e){e&&e._modeChanged.pipe((0,o.takeUntil)((0,h.merge)(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){const n=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?n.add(r):n.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{"end"==e.position?this._end=e:this._start=e}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._canHaveBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)}_canHaveBackdrop(e){return"side"!==e.mode||!!this._backdropOverride}_isDrawerOpen(e){return null!=e&&e.opened}}return i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(O.Directionality,8),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(l.ViewportRuler),t.\u0275\u0275directiveInject(T),t.\u0275\u0275directiveInject(j.ANIMATION_MODULE_TYPE,8))},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,r){if(1&e&&(t.\u0275\u0275contentQuery(r,u,5),t.\u0275\u0275contentQuery(r,D,5)),2&e){let d;t.\u0275\u0275queryRefresh(d=t.\u0275\u0275loadQuery())&&(n._content=d.first),t.\u0275\u0275queryRefresh(d=t.\u0275\u0275loadQuery())&&(n._allDrawers=d)}},viewQuery:function(e,n){if(1&e&&t.\u0275\u0275viewQuery(u,5),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(n._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){2&e&&t.\u0275\u0275classProp("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[t.\u0275\u0275ProvidersFeature([{provide:C,useExisting:i}])],ngContentSelectors:L,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(z),t.\u0275\u0275template(0,U,1,2,"div",0),t.\u0275\u0275projection(1),t.\u0275\u0275projection(2,1),t.\u0275\u0275template(3,V,2,0,"mat-drawer-content",1)),2&e&&(t.\u0275\u0275property("ngIf",n.hasBackdrop),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",!n._content))},dependencies:[g.NgIf,u],styles:['.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0}),i})(),y=(()=>{class i extends u{constructor(e,n,r,d,p){super(e,n,r,d,p)}}return i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject((0,t.forwardRef)(()=>P)),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(l.ScrollDispatcher),t.\u0275\u0275directiveInject(t.NgZone))},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],hostVars:4,hostBindings:function(e,n){2&e&&t.\u0275\u0275styleProp("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px")},features:[t.\u0275\u0275ProvidersFeature([{provide:l.CdkScrollable,useExisting:i}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:w,decls:1,vars:0,template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0}),i})(),A=(()=>{class i extends D{constructor(){super(...arguments),this._fixedInViewport=!1,this._fixedTopGap=0,this._fixedBottomGap=0}get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=(0,m.coerceBooleanProperty)(e)}get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=(0,m.coerceNumberProperty)(e)}get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=(0,m.coerceNumberProperty)(e)}}return i.\u0275fac=function(){let a;return function(n){return(a||(a=t.\u0275\u0275getInheritedFactory(i)))(n||i)}}(),i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(e,n){2&e&&(t.\u0275\u0275attribute("align",null),t.\u0275\u0275styleProp("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),t.\u0275\u0275classProp("mat-drawer-end","end"===n.position)("mat-drawer-over","over"===n.mode)("mat-drawer-push","push"===n.mode)("mat-drawer-side","side"===n.mode)("mat-drawer-opened",n.opened)("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:w,decls:3,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"],["content",""]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0,1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd())},dependencies:[l.CdkScrollable],encapsulation:2,data:{animation:[b.transformDrawer]},changeDetection:0}),i})(),P=(()=>{class i extends M{}return i.\u0275fac=function(){let a;return function(n){return(a||(a=t.\u0275\u0275getInheritedFactory(i)))(n||i)}}(),i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,r){if(1&e&&(t.\u0275\u0275contentQuery(r,y,5),t.\u0275\u0275contentQuery(r,A,5)),2&e){let d;t.\u0275\u0275queryRefresh(d=t.\u0275\u0275loadQuery())&&(n._content=d.first),t.\u0275\u0275queryRefresh(d=t.\u0275\u0275loadQuery())&&(n._allDrawers=d)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){2&e&&t.\u0275\u0275classProp("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[t.\u0275\u0275ProvidersFeature([{provide:C,useExisting:i}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:G,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(Z),t.\u0275\u0275template(0,Q,1,2,"div",0),t.\u0275\u0275projection(1),t.\u0275\u0275projection(2,1),t.\u0275\u0275template(3,N,2,0,"mat-sidenav-content",1)),2&e&&(t.\u0275\u0275property("ngIf",n.hasBackdrop),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",!n._content))},dependencies:[g.NgIf,y],styles:['.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0}),i})(),Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=t.\u0275\u0275defineInjector({imports:[g.CommonModule,x.MatCommonModule,l.CdkScrollableModule,l.CdkScrollableModule,x.MatCommonModule]}),i})()}}]);