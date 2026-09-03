import{$a as zt,$i as qi,$r as gm,Br as em,Da as uw,Dr as ce,Ea as um,Hn as XH,Ht as Nr,Jr as g,Ln as WV,Nr as da,Or as cm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,S as CT,X as HV,Z as H_,Zt as P,dn as Ro,fr as am,ft as JV,gt as Jw,hr as b,ir as Zn,j as Em,mn as ST,oi as hb,p as Al,ua as sa}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{t as B}from"./chunk-Bc7G3ZMk.js";import{a as b$1,d as te}from"./chunk-53wldAuq.js";import{t as c}from"./chunk-D1ovfVna.js";var q=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
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
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var Z=[`input`];var J=`
    ${q}

    /* Native radio directive: preserve browser grouping and accessibility while using the active theme color. */
    input.p-radiobutton.p-component {
        accent-color: dt('radiobutton.checked.background');
        cursor: pointer;
    }

    input.p-radiobutton.p-component.p-disabled {
        cursor: default;
    }

    /* For ngx-prime */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`;var K={root:({instance:t})=>[`p-radiobutton p-component`,{"p-radiobutton-checked":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-radiobutton-sm p-inputfield-sm":t.size()===`small`,"p-radiobutton-lg p-inputfield-lg":t.size()===`large`}],box:`p-radiobutton-box`,input:`p-radiobutton-input`,icon:`p-radiobutton-icon`};var O=(()=>{class t extends Nr{name=`radiobutton`;style=J;classes=K;static ɵfac=(()=>{let n;return function(e){return(n||(n=dh(t)))(e||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var G=new b(`RADIOBUTTON_INSTANCE`);var W={provide:te,useExisting:qi(()=>Q),multi:!0};var X=(()=>{class t{accessors=[];add(n,o){this.accessors.push([n,o])}remove(n){this.accessors=this.accessors.filter(o=>o[1]!==n)}select(n){this.accessors.forEach(o=>{this.isSameGroup(o,n)&&o[1]!==n&&o[1].writeValue(n.value())})}isSameGroup(n,o){return n[0].control?n[0].control.root===o.control.control.root&&n[1].name()===o.name():!1}static ɵfac=function(o){return new(o||t)};static ɵprov=P({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Q=(()=>{class t extends c{componentName=`RadioButton`;$pcRadioButton=g(G,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),JV()&&console.warn('`<p-radioButton>` is deprecated and will be removed in a future major version. Use a native `<input type="radio" pRadioButton>` instead.')}value=zt();tabindex=zt(void 0,{transform:ST});inputId=zt();ariaLabelledBy=zt();ariaLabel=zt();styleClass=zt();autofocus=zt(void 0,{transform:CT});binary=zt(void 0,{transform:CT});variant=zt();size=zt();onClick=HV();onFocus=HV();onBlur=HV();inputViewChild=WV.required(`input`);$variant=da(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=g(O);injector=g(ce);registry=g(X);onInit(){this.control=this.injector.get(b$1),this.registry.add(this.control,this)}onChange(n){this.$disabled()||this.select(n)}select(n){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value()),this.registry.select(this),this.onClick.emit({originalEvent:n,value:this.value()}))}onInputFocus(n){this.focused=!0,this.onFocus.emit(n)}onInputBlur(n){this.focused=!1,this.onModelTouched(),this.onBlur.emit(n)}focus(){this.inputViewChild().nativeElement.focus()}writeControlValue(n,o){this.checked=this.binary()?!!n:n==this.value(),o(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(o){return new(o||t)};static ɵcmp=sa({type:t,selectors:[[`p-radioButton`],[`p-radiobutton`],[`p-radio-button`]],viewQuery:function(o,e){o&1&&Em(e.inputViewChild,Z,5),o&2&&Jw()},hostVars:5,hostBindings:function(o,e){o&2&&(am(`data-p-disabled`,e.$disabled())(`data-p-checked`,e.checked)(`data-p`,e.dataP),hb(e.cx(`root`)))},inputs:{value:[1,`value`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],autofocus:[1,`autofocus`],binary:[1,`binary`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[Al([W,O,{provide:G,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],decls:4,vars:20,consts:[[`input`,``],[`type`,`radio`,3,`focus`,`blur`,`change`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`]],template:function(o,e){o&1&&(Ws(0,`input`,1,0),gm(`focus`,function(a){return e.onInputFocus(a)})(`blur`,function(a){return e.onInputBlur(a)})(`change`,function(a){return e.onChange(a)}),wl(),Ws(2,`div`,2),um(3,`div`,2),wl()),o&2&&(hb(e.cx(`input`)),cm(`checked`,e.checked)(`pAutoFocus`,e.autofocus())(`pBind`,e.ptm(`input`)),am(`id`,e.inputId())(`name`,e.name())(`required`,e.required()?``:void 0)(`disabled`,e.$disabled()?``:void 0)(`value`,e.modelValue())(`aria-labelledby`,e.ariaLabelledBy())(`aria-label`,e.ariaLabel())(`aria-checked`,e.checked)(`tabindex`,e.tabindex()),MC(2),hb(e.cx(`box`)),cm(`pBind`,e.ptm(`box`)),MC(),hb(e.cx(`icon`)),cm(`pBind`,e.ptm(`icon`)))},dependencies:[B,XH,F,L],encapsulation:2})}return t})();var kt=(()=>{class t{static ɵfac=function(o){return new(o||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[Q,XH,XH]})}return t})();export{kt as n,Q as t};