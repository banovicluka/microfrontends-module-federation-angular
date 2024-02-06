(self.webpackChunkshell=self.webpackChunkshell||[]).push([[3588,1948],{1948:(F,p,a)=>{a.r(p),a.d(p,{MAT_RADIO_DEFAULT_OPTIONS:()=>v,MAT_RADIO_DEFAULT_OPTIONS_FACTORY:()=>k,MAT_RADIO_GROUP:()=>u,MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR:()=>g,MatRadioButton:()=>D,MatRadioChange:()=>m,MatRadioGroup:()=>M,MatRadioModule:()=>G,_MatRadioButtonBase:()=>y,_MatRadioGroupBase:()=>R});var i=a(5760),n=a(3424),I=a(6083),l=a(8705),x=a(1661),E=a(1775),C=a(525),O=a(4888);const T=["input"],A=["*"];let f=0;class m{constructor(t,e){this.source=t,this.value=e}}const g={provide:C.NG_VALUE_ACCESSOR,useExisting:(0,i.forwardRef)(()=>M),multi:!0},u=new i.InjectionToken("MatRadioGroup"),v=new i.InjectionToken("mat-radio-default-options",{providedIn:"root",factory:k});function k(){return{color:"accent"}}let R=(()=>{class r{get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,l.coerceBooleanProperty)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=(0,l.coerceBooleanProperty)(e),this._markRadiosForCheck()}constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+f++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new i.EventEmitter}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(o=>{o.checked=this.value===o.value,o.checked&&(this._selected=o)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new m(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return r.\u0275fac=function(e){return new(e||r)(i.\u0275\u0275directiveInject(i.ChangeDetectorRef))},r.\u0275dir=i.\u0275\u0275defineDirective({type:r,inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required"},outputs:{change:"change"}}),r})();class P{constructor(t){this._elementRef=t}}const B=(0,n.mixinDisableRipple)((0,n.mixinTabIndex)(P));let y=(()=>{class r extends B{get checked(){return this._checked}set checked(e){const o=(0,l.coerceBooleanProperty)(e);this._checked!==o&&(this._checked=o,o&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!o&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),o&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled((0,l.coerceBooleanProperty)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=(0,l.coerceBooleanProperty)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(e,o,d,c,_,h,b,s){super(o),this._changeDetector=d,this._focusMonitor=c,this._radioDispatcher=_,this._providerOverride=b,this._uniqueId="mat-radio-"+ ++f,this.id=this._uniqueId,this.change=new i.EventEmitter,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._noopAnimations="NoopAnimations"===h,s&&(this.tabIndex=(0,l.coerceNumberProperty)(s,0))}focus(e,o){o?this._focusMonitor.focusVia(this._inputElement,o,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,o)=>{e!==this.id&&o===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new m(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){const o=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),o&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),this.disabled||this._inputElement.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_updateTabIndex(){const e=this.radioGroup;let o;if(o=e&&e.selected&&!this.disabled?e.selected===this?this.tabIndex:-1:this.tabIndex,o!==this._previousTabIndex){const d=this._inputElement?.nativeElement;d&&(d.setAttribute("tabindex",o+""),this._previousTabIndex=o)}}}return r.\u0275fac=function(e){i.\u0275\u0275invalidFactory()},r.\u0275dir=i.\u0275\u0275defineDirective({type:r,viewQuery:function(e,o){if(1&e&&i.\u0275\u0275viewQuery(T,5),2&e){let d;i.\u0275\u0275queryRefresh(d=i.\u0275\u0275loadQuery())&&(o._inputElement=d.first)}},inputs:{id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"},features:[i.\u0275\u0275InheritDefinitionFeature]}),r})(),M=(()=>{class r extends R{}return r.\u0275fac=function(){let t;return function(o){return(t||(t=i.\u0275\u0275getInheritedFactory(r)))(o||r)}}(),r.\u0275dir=i.\u0275\u0275defineDirective({type:r,selectors:[["mat-radio-group"]],contentQueries:function(e,o,d){if(1&e&&i.\u0275\u0275contentQuery(d,D,5),2&e){let c;i.\u0275\u0275queryRefresh(c=i.\u0275\u0275loadQuery())&&(o._radios=c)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],exportAs:["matRadioGroup"],features:[i.\u0275\u0275ProvidersFeature([g,{provide:u,useExisting:r}]),i.\u0275\u0275InheritDefinitionFeature]}),r})(),D=(()=>{class r extends y{constructor(e,o,d,c,_,h,b,s){super(e,o,d,c,_,h,b,s)}}return r.\u0275fac=function(e){return new(e||r)(i.\u0275\u0275directiveInject(u,8),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(I.FocusMonitor),i.\u0275\u0275directiveInject(x.UniqueSelectionDispatcher),i.\u0275\u0275directiveInject(E.ANIMATION_MODULE_TYPE,8),i.\u0275\u0275directiveInject(v,8),i.\u0275\u0275injectAttribute("tabindex"))},r.\u0275cmp=i.\u0275\u0275defineComponent({type:r,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-mdc-radio-button"],hostVars:15,hostBindings:function(e,o){1&e&&i.\u0275\u0275listener("focus",function(){return o._inputElement.nativeElement.focus()}),2&e&&(i.\u0275\u0275attribute("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),i.\u0275\u0275classProp("mat-primary","primary"===o.color)("mat-accent","accent"===o.color)("mat-warn","warn"===o.color)("mat-mdc-radio-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:A,decls:13,vars:17,consts:[[1,"mdc-form-field"],["formField",""],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"id","checked","disabled","required","change"],["input",""],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[3,"for"]],template:function(e,o){if(1&e&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0,1)(2,"div",2)(3,"div",3),i.\u0275\u0275listener("click",function(c){return o._onTouchTargetClick(c)}),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(4,"input",4,5),i.\u0275\u0275listener("change",function(c){return o._onInputInteraction(c)}),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(6,"div",6),i.\u0275\u0275element(7,"div",7)(8,"div",8),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(9,"div",9),i.\u0275\u0275element(10,"div",10),i.\u0275\u0275elementEnd()(),i.\u0275\u0275elementStart(11,"label",11),i.\u0275\u0275projection(12),i.\u0275\u0275elementEnd()()),2&e){const d=i.\u0275\u0275reference(1);i.\u0275\u0275classProp("mdc-form-field--align-end","before"==o.labelPosition),i.\u0275\u0275advance(2),i.\u0275\u0275classProp("mdc-radio--disabled",o.disabled),i.\u0275\u0275advance(2),i.\u0275\u0275property("id",o.inputId)("checked",o.checked)("disabled",o.disabled)("required",o.required),i.\u0275\u0275attribute("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby),i.\u0275\u0275advance(5),i.\u0275\u0275property("matRippleTrigger",d)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),i.\u0275\u0275advance(2),i.\u0275\u0275property("for",o.inputId)}},dependencies:[n.MatRipple],styles:['.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, #000)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, #000)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, #000)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, #6200ee)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, #000)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, #000)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, #000)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);right:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);left:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-mdc-radio-ripple-color, transparent)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-mdc-radio-checked-ripple-color, transparent)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-mdc-radio-checked-ripple-color, transparent)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0}),r})(),G=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=i.\u0275\u0275defineInjector({imports:[n.MatCommonModule,O.CommonModule,n.MatRippleModule,n.MatCommonModule]}),r})()}}]);