(self.webpackChunkshell=self.webpackChunkshell||[]).push([[3525,7957],{7957:(ee,A,l)=>{l.r(A),l.d(A,{MAT_AUTOCOMPLETE_DEFAULT_OPTIONS:()=>v,MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY:()=>T,MAT_AUTOCOMPLETE_SCROLL_STRATEGY:()=>O,MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY:()=>D,MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>R,MAT_AUTOCOMPLETE_VALUE_ACCESSOR:()=>S,MatAutocomplete:()=>Y,MatAutocompleteModule:()=>Q,MatAutocompleteOrigin:()=>H,MatAutocompleteSelectedEvent:()=>b,MatAutocompleteTrigger:()=>I,_MatAutocompleteBase:()=>C,_MatAutocompleteOriginBase:()=>P,_MatAutocompleteTriggerBase:()=>L,getMatAutocompleteMissingPanelError:()=>G});var i=l(5760),h=l(3424),g=l(4888),M=l(340),m=l(815),w=l(6083),_=l(8705),E=l(4098),u=l(3731),p=l(3635),d=l(3802),F=l(6514),B=l(525),k=l(3472),r=l(5893),U=l(8714);const W=["panel"];function V(o,a){if(1&o&&(i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd()),2&o){const e=a.id,t=i.\u0275\u0275nextContext();i.\u0275\u0275property("id",t.id)("ngClass",t._classList)("@panelAnimation",t.isOpen?"visible":"hidden"),i.\u0275\u0275attribute("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}const x=["*"],K=(0,u.trigger)("panelAnimation",[(0,u.state)("void, hidden",(0,u.style)({opacity:0,transform:"scaleY(0.8)"})),(0,u.transition)(":enter, hidden => visible",[(0,u.group)([(0,u.animate)("0.03s linear",(0,u.style)({opacity:1})),(0,u.animate)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,u.style)({transform:"scaleY(1)"}))])]),(0,u.transition)(":leave, visible => hidden",[(0,u.animate)("0.075s linear",(0,u.style)({opacity:0}))])]);let j=0;class b{constructor(a,e){this.source=a,this.option=e}}const N=(0,h.mixinDisableRipple)(class{}),v=new i.InjectionToken("mat-autocomplete-default-options",{providedIn:"root",factory:T});function T(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}let C=(()=>{class o extends N{get isOpen(){return this._isOpen&&this.showPanel}_setColor(e){this._color=e,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(e){this._autoActiveFirstOption=(0,_.coerceBooleanProperty)(e)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(e){this._autoSelectActiveOption=(0,_.coerceBooleanProperty)(e)}set classList(e){this._classList=e&&e.length?(0,_.coerceStringArray)(e).reduce((t,n)=>(t[n]=!0,t),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(e,t,n,s){super(),this._changeDetectorRef=e,this._elementRef=t,this._defaults=n,this._activeOptionChanges=p.Subscription.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this._autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this._autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.optionSelected=new i.EventEmitter,this.opened=new i.EventEmitter,this.closed=new i.EventEmitter,this.optionActivated=new i.EventEmitter,this._classList={},this.id="mat-autocomplete-"+j++,this.inertGroups=s?.SAFARI||!1}ngAfterContentInit(){this._keyManager=new w.ActiveDescendantKeyManager(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){const t=new b(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){return this.ariaLabel?null:this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_setVisibilityClasses(e){e[this._visibleClass]=this.showPanel,e[this._hiddenClass]=!this.showPanel}_setThemeClasses(e){e["mat-primary"]="primary"===this._color,e["mat-warn"]="warn"===this._color,e["mat-accent"]="accent"===this._color}}return o.\u0275fac=function(e){return new(e||o)(i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(v),i.\u0275\u0275directiveInject(E.Platform))},o.\u0275dir=i.\u0275\u0275defineDirective({type:o,viewQuery:function(e,t){if(1&e&&(i.\u0275\u0275viewQuery(i.TemplateRef,7),i.\u0275\u0275viewQuery(W,5)),2&e){let n;i.\u0275\u0275queryRefresh(n=i.\u0275\u0275loadQuery())&&(t.template=n.first),i.\u0275\u0275queryRefresh(n=i.\u0275\u0275loadQuery())&&(t.panel=n.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[i.\u0275\u0275InheritDefinitionFeature]}),o})(),Y=(()=>{class o extends C{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=(0,_.coerceBooleanProperty)(e),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const e of this.options)e._changeDetectorRef.markForCheck()}}return o.\u0275fac=function(){let a;return function(t){return(a||(a=i.\u0275\u0275getInheritedFactory(o)))(t||o)}}(),o.\u0275cmp=i.\u0275\u0275defineComponent({type:o,selectors:[["mat-autocomplete"]],contentQueries:function(e,t,n){if(1&e&&(i.\u0275\u0275contentQuery(n,h.MAT_OPTGROUP,5),i.\u0275\u0275contentQuery(n,h.MatOption,5)),2&e){let s;i.\u0275\u0275queryRefresh(s=i.\u0275\u0275loadQuery())&&(t.optionGroups=s),i.\u0275\u0275queryRefresh(s=i.\u0275\u0275loadQuery())&&(t.options=s)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[i.\u0275\u0275ProvidersFeature([{provide:h.MAT_OPTION_PARENT_COMPONENT,useExisting:o}]),i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:x,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(e,t){1&e&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275template(0,V,3,5,"ng-template"))},dependencies:[g.NgClass],styles:[".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[K]},changeDetection:0}),o})(),P=(()=>{class o{constructor(e){this.elementRef=e}}return o.\u0275fac=function(e){return new(e||o)(i.\u0275\u0275directiveInject(i.ElementRef))},o.\u0275dir=i.\u0275\u0275defineDirective({type:o}),o})(),H=(()=>{class o extends P{}return o.\u0275fac=function(){let a;return function(t){return(a||(a=i.\u0275\u0275getInheritedFactory(o)))(t||o)}}(),o.\u0275dir=i.\u0275\u0275defineDirective({type:o,selectors:[["","matAutocompleteOrigin",""]],exportAs:["matAutocompleteOrigin"],features:[i.\u0275\u0275InheritDefinitionFeature]}),o})();const S={provide:B.NG_VALUE_ACCESSOR,useExisting:(0,i.forwardRef)(()=>I),multi:!0};function G(){return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}const O=new i.InjectionToken("mat-autocomplete-scroll-strategy");function D(o){return()=>o.scrollStrategies.reposition()}const R={provide:O,deps:[m.Overlay],useFactory:D};let L=(()=>{class o{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(e){this._autocompleteDisabled=(0,_.coerceBooleanProperty)(e)}constructor(e,t,n,s,c,y,z,X,Z,$,J){this._element=e,this._overlay=t,this._viewContainerRef=n,this._zone=s,this._changeDetectorRef=c,this._dir=z,this._formField=X,this._document=Z,this._viewportRuler=$,this._defaults=J,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=p.Subscription.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new p.Subject,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,p.defer)(()=>{const f=this.autocomplete?this.autocomplete.options:null;return f?f.changes.pipe((0,r.startWith)(f),(0,r.switchMap)(()=>(0,p.merge)(...f.map(q=>q.onSelectionChange)))):this._zone.onStable.pipe((0,r.take)(1),(0,r.switchMap)(()=>this.optionSelections))}),this._scrollStrategy=y}ngAfterViewInit(){const e=this._getWindow();typeof e<"u"&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const e=this._getWindow();typeof e<"u"&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,p.merge)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,r.filter)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,r.filter)(()=>this._overlayAttached)):(0,p.of)()).pipe((0,r.map)(e=>e instanceof h.MatOptionSelectionChange?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,p.merge)((0,p.fromEvent)(this._document,"click"),(0,p.fromEvent)(this._document,"auxclick"),(0,p.fromEvent)(this._document,"touchend")).pipe((0,r.filter)(e=>{const t=(0,E._getEventTarget)(e),n=this._formField?this._formField._elementRef.nativeElement:null,s=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!n||!n.contains(t))&&(!s||!s.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)}))}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){const t=e.keyCode,n=(0,d.hasModifierKey)(e);if(t===d.ESCAPE&&!n&&e.preventDefault(),this.activeOption&&t===d.ENTER&&this.panelOpen&&!n)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){const s=this.autocomplete._keyManager.activeItem,c=t===d.UP_ARROW||t===d.DOWN_ARROW;t===d.TAB||c&&!n&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):c&&this._canOpen()&&this.openPanel(),(c||this.autocomplete._keyManager.activeItem!==s)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,n=t.value;"number"===t.type&&(n=""==n?null:parseFloat(n)),this._previousValue!==n&&(this._previousValue=n,this._pendingAutoselectedOption=null,this._onChange(n),this._canOpen()&&this._document.activeElement===e.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(e=!1){this._formField&&"auto"===this._formField.floatLabel&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const e=this._zone.onStable.pipe((0,r.take)(1)),t=this.autocomplete.options.changes.pipe((0,r.tap)(()=>this._positionStrategy.reapplyLastPosition()),(0,r.delay)(0));return(0,p.merge)(e,t).pipe((0,r.switchMap)(()=>(this._zone.run(()=>{const n=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),n!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,r.take)(1)).subscribe(n=>this._setValueAndClose(n))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(e){const t=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(e):e;this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){const t=e?e.source:this._pendingAutoselectedOption;t&&(this._clearPreviousSelectedOption(t),this._assignOptionValue(t.value),this._onChange(t.value),this.autocomplete._emitSelectEvent(t),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(t=>{t!==e&&t.selected&&t.deselect()})}_attachOverlay(){let e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new F.TemplatePortal(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,this._handleOverlayEvents(e),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&e&&e.updateSize({width:this._getPanelWidth()})})),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new m.OverlayConfig({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){const t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],n=this._aboveClass,s=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:n},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:n}];let c;c="above"===this.position?s:"below"===this.position?t:[...t,...s],e.withPositions(c)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const e=this.autocomplete;e.autoActiveFirstOption?e._keyManager.setFirstItemActive():e._keyManager.setActiveItem(-1)}_canOpen(){const e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(e){const t=this.autocomplete,n=(0,h._countGroupLabelsBeforeOption)(e,t.options,t.optionGroups);if(0===e&&1===n)t._setScrollTop(0);else if(t.panel){const s=t.options.toArray()[e];if(s){const c=s._getHostElement(),y=(0,h._getOptionScrollPosition)(c.offsetTop,c.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(y)}}}_handleOverlayEvents(e){e.keydownEvents().subscribe(t=>{(t.keyCode===d.ESCAPE&&!(0,d.hasModifierKey)(t)||t.keyCode===d.UP_ARROW&&(0,d.hasModifierKey)(t,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),t.stopPropagation(),t.preventDefault())}),e.outsidePointerEvents().subscribe()}}return o.\u0275fac=function(e){return new(e||o)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(m.Overlay),i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(O),i.\u0275\u0275directiveInject(U.Directionality,8),i.\u0275\u0275directiveInject(k.MAT_FORM_FIELD,9),i.\u0275\u0275directiveInject(g.DOCUMENT,8),i.\u0275\u0275directiveInject(M.ViewportRuler),i.\u0275\u0275directiveInject(v,8))},o.\u0275dir=i.\u0275\u0275defineDirective({type:o,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[i.\u0275\u0275NgOnChangesFeature]}),o})(),I=(()=>{class o extends L{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return o.\u0275fac=function(){let a;return function(t){return(a||(a=i.\u0275\u0275getInheritedFactory(o)))(t||o)}}(),o.\u0275dir=i.\u0275\u0275defineDirective({type:o,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(e,t){1&e&&i.\u0275\u0275listener("focusin",function(){return t._handleFocus()})("blur",function(){return t._onTouched()})("input",function(s){return t._handleInput(s)})("keydown",function(s){return t._handleKeydown(s)})("click",function(){return t._handleClick()}),2&e&&i.\u0275\u0275attribute("autocomplete",t.autocompleteAttribute)("role",t.autocompleteDisabled?null:"combobox")("aria-autocomplete",t.autocompleteDisabled?null:"list")("aria-activedescendant",t.panelOpen&&t.activeOption?t.activeOption.id:null)("aria-expanded",t.autocompleteDisabled?null:t.panelOpen.toString())("aria-owns",t.autocompleteDisabled||!t.panelOpen||null==t.autocomplete?null:t.autocomplete.id)("aria-haspopup",t.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[i.\u0275\u0275ProvidersFeature([S]),i.\u0275\u0275InheritDefinitionFeature]}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=i.\u0275\u0275defineInjector({providers:[R],imports:[m.OverlayModule,h.MatOptionModule,h.MatCommonModule,g.CommonModule,M.CdkScrollableModule,h.MatOptionModule,h.MatCommonModule]}),o})()}}]);