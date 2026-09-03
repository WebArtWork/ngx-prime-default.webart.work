import{$a as zt,$i as qi,$r as gm,Br as em,Da as uw,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,Kr as fb,Li as nm,O as Dm,Or as cm,Pa as vm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,U as GT,X as HV,Z as H_,Zt as P,cn as Rb,dn as Ro,fr as am,ft as JV,gt as Jw,h as Aw,hr as b,ir as Zn,mn as ST,na as qw,oi as hb,on as Qw,p as Al,qr as fm,ua as sa,ut as JH}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{t as B}from"./chunk-Bc7G3ZMk.js";import{d as te$1}from"./chunk-53wldAuq.js";import{t as c}from"./chunk-D1ovfVna.js";var ee=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var le=[`handle`];var de=[`input`];var ae=t=>({checked:t});function se(t,oe){t&1&&fm(0)}function re(t,oe){if(t&1&&nm(0,se,1,0,`ng-container`,3),t&2){let i=qw();cm(`ngTemplateOutlet`,i.handleTemplate||i._handleTemplate)(`ngTemplateOutletContext`,Rb(2,ae,i.checked()))}}var ce=`
    ${ee}

    /* Native toggle-switch directive: preserve the checkbox while applying the active theme color. */
    input.p-toggleswitch.p-component {
        accent-color: dt('toggleswitch.checked.background');
        cursor: pointer;
    }

    input.p-toggleswitch.p-component.p-disabled,
    input.p-toggleswitch.p-component[readonly] {
        cursor: default;
    }

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`;var ge={root:{position:`relative`}};var ue={root:({instance:t})=>[`p-toggleswitch p-component`,{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`};var te=(()=>{class t extends Nr{name=`toggleswitch`;style=ce;classes=ue;inlineStyles=ge;static ɵfac=(()=>{let i;return function(e){return(i||(i=dh(t)))(e||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var ie=new b(`TOGGLESWITCH_INSTANCE`);var he={provide:te$1,useExisting:qi(()=>ne),multi:!0};var ne=(()=>{class t extends c{componentName=`ToggleSwitch`;$pcToggleSwitch=g(ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),JV()&&console.warn('`<p-toggleswitch>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pToggleSwitch>` instead.')}styleClass=zt();tabindex=zt(void 0,{transform:ST});inputId=zt();readonly=zt(void 0,{transform:CT});trueValue=zt(!0);falseValue=zt(!1);ariaLabel=zt();size=zt();ariaLabelledBy=zt();autofocus=zt(void 0,{transform:CT});onChange=HV();input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=g(te);templates=zV(JH);onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates().forEach(i=>{i.getType()===`handle`?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.$disabled()&&!this.readonly()&&(this.writeModelValue(this.checked()?this.falseValue():this.trueValue()),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue()}writeControlValue(i,n){n(i),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=sa({type:t,selectors:[[`p-toggleswitch`],[`p-toggleSwitch`],[`p-toggle-switch`]],contentQueries:function(n,e,l){if(n&1&&(Dm(l,e.templates,JH,4),ym(l,le,4)),n&2){Jw();let c;Kw(c=Qw())&&(e.handleTemplate=c.first)}},viewQuery:function(n,e){if(n&1&&vm(de,5),n&2){let l;Kw(l=Qw())&&(e.input=l.first)}},hostVars:7,hostBindings:function(n,e){n&1&&gm(`click`,function(c){return e.onHostClick(c)}),n&2&&(am(`data-p-checked`,e.checked())(`data-p-disabled`,e.$disabled())(`data-p`,e.dataP),fb(e.sx(`root`)),hb(e.cn(e.cx(`root`),e.styleClass())))},inputs:{styleClass:[1,`styleClass`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],readonly:[1,`readonly`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],ariaLabel:[1,`ariaLabel`],size:[1,`size`],ariaLabelledBy:[1,`ariaLabelledBy`],autofocus:[1,`autofocus`]},outputs:{onChange:`onChange`},features:[Al([he,te,{provide:ie,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],decls:5,vars:22,consts:[[`input`,``],[`type`,`checkbox`,`role`,`switch`,3,`focus`,`blur`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,e){n&1&&(Ws(0,`input`,1,0),gm(`focus`,function(){return e.onFocus()})(`blur`,function(){return e.onBlur()}),wl(),Ws(2,`div`,2)(3,`div`,2),Aw(4,re,1,4,`ng-container`),wl()()),n&2&&(hb(e.cx(`input`)),cm(`checked`,e.checked())(`pAutoFocus`,e.autofocus())(`pBind`,e.ptm(`input`)),am(`id`,e.inputId())(`required`,e.required()?``:void 0)(`disabled`,e.$disabled()?``:void 0)(`aria-checked`,e.checked())(`aria-labelledby`,e.ariaLabelledBy())(`aria-label`,e.ariaLabel())(`name`,e.name())(`tabindex`,e.tabindex()),MC(2),hb(e.cx(`slider`)),cm(`pBind`,e.ptm(`slider`)),am(`data-p`,e.dataP),MC(),hb(e.cx(`handle`)),cm(`pBind`,e.ptm(`handle`)),am(`data-p`,e.dataP),MC(),xw(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[Gl,GT,B,XH,F,L],encapsulation:2})}return t})();var $e=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[ne,XH,XH]})}return t})();export{ne as n,$e as t};