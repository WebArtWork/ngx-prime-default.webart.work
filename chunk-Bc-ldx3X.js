import{$a as zt$1,$i as qi,$n as ZH,$r as gm,Ai as mS,At as Lf,Bn as X$,Br as em,Bt as Nb,Da as uw,Ea as um,Et as Kw,Fr as e2,Ft as MH,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,It as Ml,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Ln as WV,Lr as eH,Nn as Vy,Nr as da,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Q as Ho,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,U as GT,Vt as Nl,W as GV,Wn as Xw,X as HV,Z as H_,Zt as P,ba as td,cn as Rb,dn as Ro,en as Pm,fn as Rw,fr as am,gt as Jw,h as Aw,hi as kb,hr as b,ir as Zn,j as Em,jt as Lm,kn as V,kt as Lb,l as $w,mn as ST,na as qw,nr as Zb,oi as hb,on as Qw,or as _e,p as Al,pi as jm,qr as fm,qt as Ob,r as $T,ri as hS,s as $t$1,sr as _l,tt as Ia,ua as sa,un as Rf,ut as JH,vi as kw,yr as bm}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import"./chunk-Cw3svWHP.js";import{t as y}from"./chunk-CUoEEuYl.js";import{t as W}from"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import{t as B}from"./chunk-Bc7G3ZMk.js";import{d as te,f as un$1,r as Rt$1,u as sn$1}from"./chunk-53wldAuq.js";import"./chunk-Da0TIp29.js";import"./chunk-D1ovfVna.js";import{A as f,F as d,h as Ie,i as K,o as D,s as Ce}from"./main-4W6E6VEG.js";import{t as L$1}from"./chunk-kdszuIhD.js";import{n as we}from"./chunk-BCVjHYHm.js";var it=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var ct=[`item`];var mt=[`empty`];var ht=[`header`];var gt=[`footer`];var _t=[`selecteditem`];var ft=[`group`];var yt=[`dropdownicon`];var bt=[`loader`];var Ct=[`removeicon`];var vt=[`loadingicon`];var xt=[`clearicon`];var wt=[`focusInput`];var It=[`multiIn`];var Ot=[`multiContainer`];var Tt=[`ddBtn`];var Mt=[`items`];var St=[`scroller`];var Vt=[`overlay`];var Et=o=>({i:o});var pt=o=>({$implicit:o});var Dt=(o,p,e)=>({removeCallback:o,index:p,class:e});var ie=o=>({height:o});var rt=(o,p)=>({$implicit:o,options:p});var kt=o=>({options:o});var At=()=>({});var Lt=(o,p,e)=>({option:o,i:p,scrollerOptions:e});var Ft=(o,p)=>({$implicit:o,index:p});function Nt(o,p){if(o&1){let e=$w();Ws(0,`input`,16,2),gm(`input`,function(t){Rf(e);return Lf(qw().onInput(t))})(`keydown`,function(t){Rf(e);return Lf(qw().onKeyDown(t))})(`change`,function(t){Rf(e);return Lf(qw().onInputChange(t))})(`focus`,function(t){Rf(e);return Lf(qw().onInputFocus(t))})(`blur`,function(t){Rf(e);return Lf(qw().onInputBlur(t))})(`paste`,function(t){Rf(e);return Lf(qw().onInputPaste(t))})(`keyup`,function(t){Rf(e);return Lf(qw().onInputKeyUp(t))}),wl()}if(o&2){let e=qw();hb(e.cn(e.cx(`pcInputText`),e.inputStyleClass())),cm(`pAutoFocus`,e.autofocus())(`pt`,e.ptm(`pcInputText`))(`ngStyle`,e.inputStyle())(`variant`,e.$variant())(`invalid`,e.invalid())(`pSize`,e.size())(`fluid`,e.hasFluid)(`pInputTextUnstyled`,e.unstyled()),am(`type`,e.type())(`value`,e.inputValue())(`id`,e.inputId())(`autocomplete`,e.autocomplete())(`placeholder`,e.placeholder())(`name`,e.name())(`minlength`,e.minlength())(`min`,e.min())(`max`,e.max())(`pattern`,e.pattern())(`size`,e.inputSize())(`maxlength`,e.maxlength())(`tabindex`,e.$disabled()?-1:e.tabindex())(`required`,e.required()?``:void 0)(`readonly`,e.readonly()?``:void 0)(`disabled`,e.$disabled()?``:void 0)(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-required`,e.required())(`aria-expanded`,e.overlayVisible??!1)(`aria-controls`,e.overlayVisible?e.id()+`_list`:null)(`aria-activedescendant`,e.focused?e.focusedOptionId:void 0)}}function Bt(o,p){if(o&1){let e=$w();qf(),Ws(0,`svg`,19),gm(`click`,function(){Rf(e);return Lf(qw(2).clear())}),wl()}if(o&2){let e=qw(2);hb(e.cx(`clearIcon`)),cm(`pBind`,e.ptm(`clearIcon`)),am(`aria-hidden`,!0)}}function Kt(o,p){}function $t(o,p){o&1&&nm(0,Kt,0,0,`ng-template`)}function zt(o,p){if(o&1){let e=$w();Ws(0,`span`,20),gm(`click`,function(){Rf(e);return Lf(qw(2).clear())}),nm(1,$t,1,0,null,21),wl()}if(o&2){let e=qw(2);hb(e.cx(`clearIcon`)),cm(`pBind`,e.ptm(`clearIcon`)),am(`aria-hidden`,!0),MC(),cm(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Pt(o,p){if(o&1&&(_l(0),Aw(1,Bt,1,4,`:svg:svg`,17),Aw(2,zt,2,5,`span`,18),Nl()),o&2){let e=qw();MC(),xw(!e.clearIconTemplate&&!e._clearIconTemplate?1:-1),MC(),xw(e.clearIconTemplate||e._clearIconTemplate?2:-1)}}function Ht(o,p){o&1&&fm(0)}function Gt(o,p){if(o&1){let e=$w();Ws(0,`span`,20),gm(`click`,function(t){Rf(e);let i=qw(2).$index,l=qw(2);return Lf(!l.readonly()&&!l.$disabled()?l.removeOption(t,i):``)}),qf(),um(1,`svg`,29),wl()}if(o&2){let e=qw(4);hb(e.cx(`chipIcon`)),cm(`pBind`,e.ptm(`chipIcon`)),MC(),hb(e.cx(`chipIcon`)),am(`aria-hidden`,!0)}}function Rt(o,p){}function Ut(o,p){o&1&&nm(0,Rt,0,0,`ng-template`)}function qt(o,p){if(o&1&&(Ws(0,`span`,28),nm(1,Ut,1,0,null,27),wl()),o&2){let e=qw(2).$index,n=qw(2);cm(`pBind`,n.ptm(`chipIcon`)),am(`aria-hidden`,!0),MC(),cm(`ngTemplateOutlet`,n.removeIconTemplate||n._removeIconTemplate)(`ngTemplateOutletContext`,kb(4,Dt,n.removeOption.bind(n),e,n.cx(`chipIcon`)))}}function Wt(o,p){if(o&1&&(Aw(0,Gt,2,6,`span`,18),Aw(1,qt,2,8,`span`,28)),o&2){let e=qw(3);xw(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),MC(),xw(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}function Qt(o,p){if(o&1){let e=$w();Ws(0,`li`,24,5)(2,`p-chip`,26),gm(`onRemove`,function(t){let i=Rf(e).$index,l=qw(2);return Lf(l.readonly()?``:l.removeOption(t,i))}),nm(3,Ht,1,0,`ng-container`,27)(4,Wt,2,2,`ng-template`,null,6,Zb),wl()()}if(o&2){let e=p.$implicit,n=p.$index,t=qw(2);hb(t.cx(`chipItem`,Rb(17,Et,n))),cm(`pBind`,t.ptm(`chipItem`)),am(`id`,t.id()+`_multiple_option_`+n)(`aria-label`,t.getOptionLabel(e))(`aria-setsize`,t.modelValue().length)(`aria-posinset`,n+1)(`aria-selected`,!0),MC(2),hb(t.cx(`pcChip`)),cm(`pt`,t.ptm(`pcChip`))(`label`,!t.selectedItemTemplate()&&!t._selectedItemTemplate&&t.getOptionLabel(e))(`disabled`,t.$disabled())(`removable`,!0)(`unstyled`,t.unstyled()),MC(),cm(`ngTemplateOutlet`,t.selectedItemTemplate()||t._selectedItemTemplate)(`ngTemplateOutletContext`,Rb(19,pt,e))}}function jt(o,p){if(o&1){let e=$w();Ws(0,`ul`,22,3),gm(`focus`,function(t){Rf(e);return Lf(qw().onMultipleContainerFocus(t))})(`blur`,function(t){Rf(e);return Lf(qw().onMultipleContainerBlur(t))})(`keydown`,function(t){Rf(e);return Lf(qw().onMultipleContainerKeyDown(t))}),Lw(2,Qt,6,21,`li`,23,Rw),Ws(4,`li`,24)(5,`input`,25,4),gm(`input`,function(t){Rf(e);return Lf(qw().onInput(t))})(`keydown`,function(t){Rf(e);return Lf(qw().onKeyDown(t))})(`change`,function(t){Rf(e);return Lf(qw().onInputChange(t))})(`focus`,function(t){Rf(e);return Lf(qw().onInputFocus(t))})(`blur`,function(t){Rf(e);return Lf(qw().onInputBlur(t))})(`paste`,function(t){Rf(e);return Lf(qw().onInputPaste(t))})(`keyup`,function(t){Rf(e);return Lf(qw().onInputKeyUp(t))}),wl()()()}if(o&2){let e=qw();hb(e.cx(`inputMultiple`)),cm(`pBind`,e.ptm(`inputMultiple`))(`tabindex`,-1),am(`data-p`,e.inputMultipleDataP)(`aria-orientation`,`horizontal`)(`aria-activedescendant`,e.focused?e.focusedMultipleOptionId:void 0),MC(2),kw(e.modelValue()),MC(2),hb(e.cx(`inputChip`)),cm(`pBind`,e.ptm(`inputChip`)),MC(),hb(e.cx(`pcInputText`)),cm(`pAutoFocus`,e.autofocus())(`pBind`,e.ptm(`input`))(`ngStyle`,e.inputStyle()),am(`type`,e.type())(`id`,e.inputId())(`autocomplete`,e.autocomplete())(`name`,e.name())(`minlength`,e.minlength())(`maxlength`,e.maxlength())(`size`,e.size())(`min`,e.min())(`max`,e.max())(`pattern`,e.pattern())(`placeholder`,e.$filled()?null:e.placeholder())(`tabindex`,e.$disabled()?-1:e.tabindex())(`required`,e.required()?``:void 0)(`readonly`,e.readonly()?``:void 0)(`disabled`,e.$disabled()?``:void 0)(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-required`,e.required())(`aria-expanded`,e.overlayVisible??!1)(`aria-controls`,e.overlayVisible?e.id()+`_list`:null)(`aria-activedescendant`,e.focused?e.focusedOptionId:void 0)}}function Zt(o,p){if(o&1&&(qf(),um(0,`svg`,31)),o&2){let e=qw(2);hb(e.cx(`loader`)),cm(`pBind`,e.ptm(`loader`))(`spin`,!0),am(`aria-hidden`,!0)}}function Jt(o,p){}function Xt(o,p){o&1&&nm(0,Jt,0,0,`ng-template`)}function Yt(o,p){if(o&1&&(Ws(0,`span`,28),nm(1,Xt,1,0,null,21),wl()),o&2){let e=qw(2);hb(e.cx(`loader`)),cm(`pBind`,e.ptm(`loader`)),am(`aria-hidden`,!0),MC(),cm(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function en(o,p){if(o&1&&(_l(0),Aw(1,Zt,1,5,`:svg:svg`,30),Aw(2,Yt,2,5,`span`,18),Nl()),o&2){let e=qw();MC(),xw(!e.loadingIconTemplate&&!e._loadingIconTemplate?1:-1),MC(),xw(e.loadingIconTemplate||e._loadingIconTemplate?2:-1)}}function tn(o,p){if(o&1&&um(0,`span`,33),o&2)cm(`ngClass`,qw(2).dropdownIcon()),am(`aria-hidden`,!0)}function nn(o,p){if(o&1&&(qf(),um(0,`svg`,34)),o&2)cm(`pBind`,qw(3).ptm(`dropdown`))}function on(o,p){}function ln(o,p){o&1&&nm(0,on,0,0,`ng-template`)}function an(o,p){if(o&1&&(_l(0),Aw(1,nn,1,1,`:svg:svg`,34),nm(2,ln,1,0,null,21),Nl()),o&2){let e=qw(2);MC(),xw(!e.dropdownIconTemplate()&&!e._dropdownIconTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,e.dropdownIconTemplate()||e._dropdownIconTemplate)}}function pn(o,p){if(o&1){let e=$w();Ws(0,`button`,32,7),gm(`click`,function(t){Rf(e);return Lf(qw().handleDropdownClick(t))}),Aw(2,tn,1,2,`span`,33),Aw(3,an,3,2,`ng-container`),wl()}if(o&2){let e=qw();hb(e.cx(`dropdown`)),cm(`pBind`,e.ptm(`dropdown`))(`disabled`,e.$disabled()),am(`aria-label`,e.dropdownAriaLabel())(`tabindex`,e.tabindex()),MC(2),xw(e.dropdownIcon()?2:-1),MC(),xw(e.dropdownIcon()?-1:3)}}function rn(o,p){o&1&&fm(0)}function dn(o,p){o&1&&fm(0)}function sn(o,p){if(o&1&&nm(0,dn,1,0,`ng-container`,27),o&2){let e=p.$implicit,n=p.options;qw(2);cm(`ngTemplateOutlet`,Xw(6))(`ngTemplateOutletContext`,Lb(2,rt,e,n))}}function un(o,p){o&1&&fm(0)}function cn(o,p){if(o&1&&nm(0,un,1,0,`ng-container`,27),o&2){let e=p.options,n=qw(4);cm(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,Rb(2,kt,e))}}function mn(o,p){o&1&&nm(0,cn,1,4,`ng-template`,null,10,Zb)}function hn(o,p){if(o&1){let e=$w();Ws(0,`p-scroller`,39,9),gm(`onLazyLoad`,function(t){Rf(e);return Lf(qw(2).onLazyLoad.emit(t))}),nm(2,sn,1,5,`ng-template`,null,1,Zb),Aw(4,mn,2,0),wl()}if(o&2){let e=qw(2);fb(Rb(10,ie,e.scrollHeight())),cm(`tabindex`,-1)(`pt`,e.ptm(`virtualScroller`))(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize())(`autoSize`,!0)(`lazy`,e.lazy())(`options`,e.virtualScrollOptions()),MC(4),xw(e.loaderTemplate||e._loaderTemplate?4:-1)}}function gn(o,p){o&1&&fm(0)}function _n(o,p){if(o&1&&nm(0,gn,1,0,`ng-container`,27),o&2){qw();let e=Xw(6),n=qw();cm(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,Lb(3,rt,n.visibleOptions(),Ob(2,At)))}}function fn(o,p){if(o&1&&(Ws(0,`span`),wb(1),wl()),o&2){let e=qw(2).$implicit,n=qw(3);MC(),Lm(n.getOptionGroupLabel(e.optionGroup))}}function yn(o,p){o&1&&fm(0)}function bn(o,p){if(o&1&&(Ws(0,`li`,43),Aw(1,fn,2,1,`span`),nm(2,yn,1,0,`ng-container`,27),wl()),o&2){let e=qw(),n=e.$implicit,t=e.$index,i=qw().options,l=qw(2);hb(l.cx(`optionGroup`)),cm(`pBind`,l.ptm(`optionGroup`))(`ngStyle`,Rb(8,ie,i.itemSize+`px`)),am(`id`,l.id()+`_`+l.getOptionIndex(t,i)),MC(),xw(l.groupTemplate()?-1:1),MC(),cm(`ngTemplateOutlet`,l.groupTemplate())(`ngTemplateOutletContext`,Rb(10,pt,n.optionGroup))}}function Cn(o,p){if(o&1&&(Ws(0,`span`),wb(1),wl()),o&2){let e=qw(2).$implicit,n=qw(3);MC(),Lm(n.getOptionLabel(e))}}function vn(o,p){o&1&&fm(0)}function xn(o,p){if(o&1){let e=$w();Ws(0,`li`,44),gm(`click`,function(t){Rf(e);let i=qw().$implicit;return Lf(qw(3).onOptionSelect(t,i))})(`mouseenter`,function(t){Rf(e);let i=qw().$index,l=qw().options,C=qw(2);return Lf(C.onOptionMouseEnter(t,C.getOptionIndex(i,l)))}),Aw(1,Cn,2,1,`span`),nm(2,vn,1,0,`ng-container`,27),wl()}if(o&2){let e=qw(),n=e.$implicit,t=e.$index,i=qw().options,l=qw(2);hb(l.cx(`option`,kb(15,Lt,n,t,i))),cm(`pBind`,l.getPTOptions(n,i,t,`option`))(`ngStyle`,Rb(19,ie,i.itemSize+`px`)),am(`id`,l.id()+`_`+l.getOptionIndex(t,i))(`aria-label`,l.getOptionLabel(n))(`aria-selected`,l.isSelected(n))(`data-p-selected`,l.isSelected(n))(`aria-disabled`,l.isOptionDisabled(n))(`data-p-focused`,l.focusedOptionIndex()===l.getOptionIndex(t,i))(`aria-setsize`,l.ariaSetSize)(`aria-posinset`,l.getAriaPosInset(l.getOptionIndex(t,i))),MC(),xw(!l.itemTemplate()&&!l._itemTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,l.itemTemplate()||l._itemTemplate)(`ngTemplateOutletContext`,Lb(21,Ft,n,i.getOptions?i.getOptions(t):t))}}function wn(o,p){if(o&1&&(Aw(0,bn,3,12,`li`,41),Aw(1,xn,3,24,`li`,42)),o&2){let e=p.$implicit,n=qw(3);xw(n.isOptionGroup(e)?0:-1),MC(),xw(n.isOptionGroup(e)?-1:1)}}function In(o,p){if(o&1&&wb(0),o&2)Ml(` `,qw(4).searchResultMessageText,` `)}function On(o,p){o&1&&fm(0)}function Tn(o,p){if(o&1&&nm(0,On,1,0,`ng-container`,21),o&2){let e=qw(4);cm(`ngTemplateOutlet`,e.emptyTemplate()||e._emptyTemplate)}}function Mn(o,p){if(o&1&&(Ws(0,`li`,43),Aw(1,In,1,1)(2,Tn,1,1,`ng-container`),wl()),o&2){let e=qw().options,n=qw(2);hb(n.cx(`emptyMessage`)),cm(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,Rb(5,ie,e.itemSize+`px`)),MC(),xw(!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function Sn(o,p){if(o&1&&(Ws(0,`ul`,40,11),Lw(2,wn,2,2,null,null,Rw),Aw(4,Mn,3,7,`li`,41),wl()),o&2){let e=p.$implicit,n=p.options,t=qw(2);fb(n.contentStyle),hb(t.cn(t.cx(`list`),n.contentStyleClass)),cm(`pBind`,t.ptm(`list`)),am(`id`,t.id()+`_list`)(`aria-label`,t.listLabel),MC(2),kw(e),MC(2),xw(!e||e&&e.length===0&&t.showEmptyMessage()?4:-1)}}function Vn(o,p){o&1&&fm(0)}function En(o,p){if(o&1&&(Ws(0,`div`,35),nm(1,rn,1,0,`ng-container`,21),Ws(2,`div`,36),Aw(3,hn,5,12,`p-scroller`,37),Aw(4,_n,1,6,`ng-container`),wl(),nm(5,Sn,5,8,`ng-template`,null,8,Zb)(7,Vn,1,0,`ng-container`,21),wl(),Ws(8,`span`,38),wb(9),wl()),o&2){let e=qw();hb(e.cn(e.cx(`overlay`),e.panelStyleClass())),cm(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle()),MC(),cm(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate),MC(),hb(e.cx(`listContainer`)),bm(`max-height`,e.virtualScroll()?`auto`:e.scrollHeight()),cm(`pBind`,e.ptm(`listContainer`))(`tabindex`,-1),MC(),xw(e.virtualScroll()?3:-1),MC(),xw(e.virtualScroll()?-1:4),MC(3),cm(`ngTemplateOutlet`,e.footerTemplate()||e._footerTemplate),MC(2),Ml(` `,e.selectedMessageText,` `)}}var Dn=`
${it}

/* For ngx-prime */
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.invalid.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.focus.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}
`;var kn={root:{position:`relative`}};var An={root:({instance:o})=>[`p-autocomplete p-component p-inputwrapper`,{"p-invalid":o.invalid(),"p-focus":o.focused,"p-inputwrapper-filled":o.$filled(),"p-inputwrapper-focus":o.focused&&!o.$disabled()||o.autofocus||o.overlayVisible,"p-autocomplete-open":o.overlayVisible,"p-autocomplete-clearable":o.showClear&&!o.$disabled(),"p-autocomplete-fluid":o.hasFluid}],pcInputText:`p-autocomplete-input`,inputMultiple:({instance:o})=>[`p-autocomplete-input-multiple`,{"p-disabled":o.$disabled(),"p-variant-filled":o.$variant()===`filled`}],chipItem:({instance:o,i:p})=>[`p-autocomplete-chip-item`,{"p-focus":o.focusedMultipleOptionIndex()===p}],pcChip:`p-autocomplete-chip`,chipIcon:`p-autocomplete-chip-icon`,inputChip:`p-autocomplete-input-chip`,loader:`p-autocomplete-loader`,dropdown:`p-autocomplete-dropdown`,overlay:({instance:o})=>[`p-autocomplete-overlay p-component-overlay p-component`,{"p-input-filled":o.$variant()===`filled`,"p-ripple-disabled":o.config.ripple()===!1}],listContainer:`p-autocomplete-list-container`,list:`p-autocomplete-list`,optionGroup:`p-autocomplete-option-group`,option:({instance:o,option:p,i:e,scrollerOptions:n})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":o.isSelected(p),"p-focus":o.focusedOptionIndex()===o.getOptionIndex(e,n),"p-disabled":o.isOptionDisabled(p)}),emptyMessage:`p-autocomplete-empty-message`,clearIcon:`p-autocomplete-clear-icon`};var lt=(()=>{class o extends Nr{name=`autocomplete`;style=Dn;classes=An;inlineStyles=kn;static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(o)))(t||o)}})();static ɵprov=P({token:o,factory:o.ɵfac})}return o})();var at=new b(`AUTOCOMPLETE_INSTANCE`);var Ln={provide:te,useExisting:qi(()=>le),multi:!0};var le=(()=>{class o extends D{overlayService=g(ZH);zone=g(_e);componentName=`AutoComplete`;$pcAutoComplete=g(at,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});minLength=zt$1(1,{transform:ST});minQueryLength=zt$1(void 0,{transform:ST});delay=zt$1(300,{transform:ST});panelStyle=zt$1();styleClass=zt$1();panelStyleClass=zt$1();inputStyle=zt$1();inputId=zt$1();inputStyleClass=zt$1();placeholder=zt$1();readonly=zt$1(void 0,{transform:CT});scrollHeight=zt$1(`200px`);lazy=zt$1(!1,{transform:CT});virtualScroll=zt$1(void 0,{transform:CT});virtualScrollItemSize=zt$1(void 0,{transform:ST});virtualScrollOptions=zt$1();autoHighlight=zt$1(void 0,{transform:CT});forceSelection=zt$1(void 0,{transform:CT});type=zt$1(`text`);autoZIndex=zt$1(!0,{transform:CT});baseZIndex=zt$1(0,{transform:ST});ariaLabel=zt$1();dropdownAriaLabel=zt$1();ariaLabelledBy=zt$1();dropdownIcon=zt$1();unique=zt$1(!0,{transform:CT});group=zt$1(void 0,{transform:CT});completeOnFocus=zt$1(!1,{transform:CT});showClear=zt$1(!1,{transform:CT});dropdown=zt$1(void 0,{transform:CT});showEmptyMessage=zt$1(!0,{transform:CT});dropdownMode=zt$1(`blank`);multiple=zt$1(void 0,{transform:CT});addOnTab=zt$1(!1,{transform:CT});tabindex=zt$1(void 0,{transform:ST});dataKey=zt$1();emptyMessage=zt$1();showTransitionOptions=zt$1(`.12s cubic-bezier(0, 0, 0.2, 1)`);hideTransitionOptions=zt$1(`.1s linear`);autofocus=zt$1(void 0,{transform:CT});autocomplete=zt$1(`off`);optionGroupChildren=zt$1(`items`);optionGroupLabel=zt$1(`label`);overlayOptions=zt$1();suggestions=zt$1();optionLabel=zt$1();optionValue=zt$1();id=zt$1();_generatedId;get resolvedId(){return this.id()||(this._generatedId??=Vy(`pn_id_`))}searchMessage=zt$1();emptySelectionMessage=zt$1();selectionMessage=zt$1();autoOptionFocus=zt$1(!1,{transform:CT});selectOnFocus=zt$1(void 0,{transform:CT});searchLocale=zt$1(void 0,{transform:CT});optionDisabled=zt$1();focusOnHover=zt$1(!0,{transform:CT});typeahead=zt$1(!0,{transform:CT});addOnBlur=zt$1(!1,{transform:CT});separator=zt$1();appendTo=zt$1(void 0);motionOptions=zt$1(void 0);completeMethod=HV();onSelect=HV();onUnselect=HV();onAdd=HV();onFocus=HV();onBlur=HV();onDropdownClick=HV();onClear=HV();onInputKeydown=HV();onKeyUp=HV();onShow=HV();onHide=HV();onLazyLoad=HV();inputEL=WV(`focusInput`);multiInputEl=WV(`multiIn`);multiContainerEL=WV(`multiContainer`);dropdownButton=WV(`ddBtn`);itemsViewChild=WV(`items`);scroller=WV(`scroller`);overlayViewChild=WV.required(`overlay`);itemsWrapper;itemTemplate=GV(`item`);emptyTemplate=GV(`empty`);headerTemplate=GV(`header`);footerTemplate=GV(`footer`);selectedItemTemplate=GV(`selecteditem`);groupTemplate=GV(`group`);loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate=GV(`dropdownicon`);onHostClick(e){this.onContainerClick(e)}value;_suggestions=ne(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=ne(-1);focusedOptionIndex=ne(-1);_componentStyle=g(lt);$appendTo=da(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=da(()=>this.group()?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=da(()=>{let e=this.modelValue(),n=this.optionValueSelected?(this._suggestions()||[]).find(t=>td(t,e,this.equalityKey())):e;if(V(e))if(typeof e==`object`||this.optionValueSelected)return this.getOptionLabel(n)??e;else return e;else return``});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.resolvedId}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.resolvedId}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return V(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll(`{0}`,this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage()||this.config.translation.searchMessage||``}get emptySearchMessageText(){return this.emptyMessage()||this.config.translation.emptySearchMessage||``}get selectionMessageText(){return this.selectionMessage()||this.config.translation.selectionMessage||``}get emptySelectionMessageText(){return this.emptySelectionMessage()||this.config.translation.emptySelectionMessage||``}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll(`{0}`,this.multiple()?this.modelValue()?.length:`1`):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(e2.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll()}get optionValueSelected(){return typeof this.modelValue()==`string`&&this.optionValue()}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(){super(),$t$1(()=>{this._suggestions.set(this.suggestions()),this.handleSuggestionsChange()})}onInit(){this.cd.detectChanges()}templates=zV(JH);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selecteditem`:this._selectedItemTemplate=e.template;break;case`selectedItem`:this._selectedItemTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`removetokenicon`:this._removeIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.suggestionsUpdated&&this.overlayViewChild()&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{let e=this.overlayViewChild();e&&e.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage()||this.emptyTemplate()?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus()?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((n,t,i)=>{n.push({optionGroup:t,group:!0,index:i});let l=this.getOptionGroupChildren(t);return l&&l.forEach(C=>n.push(C)),n},[])}isOptionGroup(e){return this.optionGroupLabel()&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return MH(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(t=>this.isValidOption(t)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?MH(this.visibleOptions().slice(0,e),t=>this.isValidOption(t)):-1;return n>-1?n:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){let n=this.optionDisabled();return n?Ia(e,n):!1}isSelected(e){return this.multiple()?this.unique()?this.modelValue()?.some(n=>td(n,e,this.equalityKey())):!1:td(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,n){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale())===n.toLocaleLowerCase(this.searchLocale())}isInputClicked(e){return e.target===this.inputEL()?.nativeElement}isDropdownClicked(e){let n=this.dropdownButton();return n?.nativeElement?e.target===n.nativeElement||n.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue()?void 0:this.dataKey()}onContainerClick(e){if(this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e))return;let n=this.overlayViewChild();(!n||!n.overlayViewChild()?.nativeElement.contains(e.target))&&eH(this.inputEL()?.nativeElement)}handleDropdownClick(e){let n;if(this.overlayVisible)this.hide(!0);else{let t=this.inputEL();eH(t?.nativeElement),n=t?.nativeElement?.value;let i=this.dropdownMode();i===`blank`?this.search(e,``,`dropdown`):i===`current`&&this.search(e,n,`dropdown`)}this.onDropdownClick.emit({originalEvent:e,query:n})}onInput(e){if(this.typeahead()){let n=this.minQueryLength()||this.minLength();this.searchTimeout&&clearTimeout(this.searchTimeout);let t=e.target.value;this.maxlength()!==null&&(t=t.split(``).slice(0,this.maxlength()).join(``));let i=this.multiple();!i&&!this.forceSelection()&&this.updateModel(t),t.length===0&&!i?(this.onClear.emit(void 0),setTimeout(()=>{this.hide()},this.delay()/2)):t.length>=n?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,t,`input`)},this.delay())):this.hide()}}onInputChange(e){this.updateInputWithForceSelection(e)}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus()&&this.search(e,e.target.value,`focus`),this.dirty=!0,this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus()?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case`ArrowLeft`:this.onArrowLeftKeyOnMultiple();break;case`ArrowRight`:this.onArrowRightKeyOnMultiple();break;case`Backspace`:this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur()&&this.multiple()&&!this.typeahead()){let n=(this.multiInputEl()?.nativeElement?.value||e.target.value||``).trim();if(n&&!this.isSelected(n)){this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n});let t=this.multiInputEl();t?.nativeElement?t.nativeElement.value=``:e.target.value=``}}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){let n=this.separator();if(n&&this.multiple()&&!this.typeahead()){let t=(e.clipboardData||window.clipboardData)?.getData(`Text`);if(t){let i=t.split(n),l=[...this.modelValue()||[]];if(i.forEach(C=>{let L=C.trim();L&&!this.isSelected(L)&&l.push(L)}),l.length>(this.modelValue()||[]).length){let C=l.slice((this.modelValue()||[]).length);this.updateModel(l),C.forEach(st=>{this.onAdd.emit({originalEvent:e,value:st})});let L=this.multiInputEl();L?.nativeElement?L.nativeElement.value=``:e.target.value=``,e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`Backspace`:this.onBackspaceKey(e);break;case`ShiftLeft`:case`ShiftRight`:break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){let n=this.separator();if(n&&this.multiple()&&!this.typeahead()&&(n===e.key||typeof n==`string`&&e.key===n||n instanceof RegExp&&e.key.match(n))){let t=(this.multiInputEl()?.nativeElement?.value||e.target.value||``).trim();if(t&&!this.isSelected(t)){this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t});let i=this.multiInputEl();i?.nativeElement?i.nativeElement.value=``:e.target.value=``,e.preventDefault()}}}onArrowDownKey(e){if(!this.overlayVisible)return;let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let n=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple()&&(Ho(n.value)&&this.hasSelectedOption()?(eH(this.multiContainerEL()?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple()&&e.stopPropagation()}onHomeKey(e){let{currentTarget:n}=e,t=n.value.length;n.setSelectionRange(0,e.shiftKey?t:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:n}=e,t=n.value.length;n.setSelectionRange(e.shiftKey?0:t,t),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead()&&!this.forceSelection()&&this.multiple()){let n=e.target.value?.trim();if(n&&!this.isSelected(n)){this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n});let t=this.inputEL();t?.nativeElement&&(t.nativeElement.value=``)}}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple()&&!this.typeahead()){let n=(this.multiInputEl()?.nativeElement?.value||this.inputEL()?.nativeElement?.value||``).trim();if(this.addOnTab()&&n&&!this.isSelected(n)){this.updateModel([...this.modelValue()||[],n]),this.onAdd.emit({originalEvent:e,value:n});let t=this.inputEL(),i=this.multiInputEl();i?.nativeElement?i.nativeElement.value=``:t?.nativeElement&&(t.nativeElement.value=``),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple()){if(V(this.modelValue())&&!this.inputEL()?.nativeElement?.value){let n=this.modelValue()[this.modelValue().length-1],t=this.modelValue().slice(0,-1);this.updateModel(t),this.onUnselect.emit({originalEvent:e,value:n})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(){let e=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(e)}onArrowRightKeyOnMultiple(){let e=this.focusedMultipleOptionIndex();e++,this.focusedMultipleOptionIndex.set(e),e>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),eH(this.inputEL()?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,n,t=!0){if(this.multiple()){let i=this.inputEL();i?.nativeElement&&(i.nativeElement.value=``),this.isSelected(n)||this.updateModel([...this.modelValue()||[],n])}else this.updateModel(n);this.onSelect.emit({originalEvent:e,value:n}),t&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover()&&this.changeFocusedOptionIndex(e,n)}search(e,n,t){n!=null&&(t===`input`&&n.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:n})))}removeOption(e,n){e.stopPropagation();let t=this.modelValue()[n],i=this.modelValue().filter((l,C)=>C!==n);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:t}),eH(this.inputEL()?.nativeElement)}updateModel(e){let n=null;e&&(n=this.multiple()?e.map(t=>this.getOptionValue(t)):this.getOptionValue(e)),this.value=n,this.writeModelValue(e),this.onModelChange(n),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){let e=this.inputEL();e&&e.nativeElement&&(this.multiple()?e.nativeElement.value=``:e.nativeElement.value=this.inputValue())}updateInputWithForceSelection(e){let n=this.inputEL()?.nativeElement,t=!n?.value&&V(this.modelValue());if(!this.forceSelection()||this.overlayVisible||!n?.value&&!t)return;let i=this.minQueryLength()??this.minLength();if(!t&&n.value.length<i)return;let l=this.visibleOptions()?.find(C=>this.isOptionMatched(C,n.value));if(!l){n.value=``,this.multiple()||this.clear();return}l&&!this.isSelected(l)&&this.onOptionSelect(e,l)}autoUpdateModel(){if((this.selectOnFocus()||this.autoHighlight())&&this.autoOptionFocus()&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let n=e!==-1?`${this.resolvedId}_${e}`:this.focusedOptionId,t=this.itemsViewChild();if(t&&t.nativeElement){let i=X$(t.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll()&&this.scroller()?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus()&&this.onOptionSelect(e,this.visibleOptions()[n],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus()?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),e&&eH(this.inputEL()?.nativeElement),e&&eH(this.inputEL()?.nativeElement),this.onShow.emit(void 0),this.cd.markForCheck()}hide(e=!1){let n=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&eH(this.inputEL()?.nativeElement),this.onHide.emit(void 0),this.updateInputWithForceSelection(null),this.cd.markForCheck()};setTimeout(()=>{n()},0)}clear(){this.updateModel(null);let e=this.inputEL();e?.nativeElement&&(e.nativeElement.value=``),this.onClear.emit(void 0)}hasSelectedOption(){return V(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel()?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}getOptionLabel(e){let n=this.optionLabel();return n?Ia(e,n):e&&e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Ia(e,n):e&&e.value!=null?e.value:e}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionGroupLabel(e){let n=this.optionGroupLabel();return n?Ia(e,n):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){let n=this.optionGroupChildren();return n?Ia(e,n):e.items}getPTOptions(e,n,t,i){return this.ptm(i,{context:{option:e,index:this.getOptionIndex(t,n),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(t,n),disabled:this.isOptionDisabled(e)}})}onOverlayBeforeEnter(){this.itemsWrapper=X$(this.overlayViewChild().overlayViewChild()?.nativeElement,this.virtualScroll()?`[data-pc-name="virtualscroller"]`:`[data-pc-name="pcoverlay"]`);let e=this.scroller(),n=this.virtualScroll();if(n&&(e?.setContentEl(this.itemsViewChild()?.nativeElement),e?.viewInit()),this.visibleOptions()&&this.visibleOptions().length)if(n){let t=this.modelValue()?this.focusedOptionIndex():-1;t!==-1&&e?.scrollToIndex(t)}else{let t=X$(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);t&&t.scrollIntoView({block:`nearest`,inline:`center`})}}get containerDataP(){return this.cn({fluid:this.hasFluid})}get overlayDataP(){return this.cn({[`overlay-${this.$appendTo()}`]:!0})}get inputMultipleDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,empty:!this.$filled(),[this.size()]:this.size()})}writeControlValue(e,n){if(this.multiple()){let t=(e||[]).map(i=>this.visibleOptions().find(C=>td(i,C,this.equalityKey()))??i);n(Ho(e)?e:t)}else{let t=this.visibleOptions().find(i=>td(e,i,this.equalityKey()));n(Ho(t)?e:t)}this.value=e,this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static ɵfac=function(n){return new(n||o)};static ɵcmp=sa({type:o,selectors:[[`p-autoComplete`],[`p-autocomplete`],[`p-auto-complete`]],contentQueries:function(n,t,i){if(n&1&&(Dm(i,t.itemTemplate,ct,5)(i,t.emptyTemplate,mt,5)(i,t.headerTemplate,ht,5)(i,t.footerTemplate,gt,5)(i,t.selectedItemTemplate,_t,5)(i,t.groupTemplate,ft,5)(i,t.dropdownIconTemplate,yt,5)(i,t.templates,JH,4),ym(i,bt,5)(i,Ct,5)(i,vt,5)(i,xt,5)),n&2){Jw(8);let l;Kw(l=Qw())&&(t.loaderTemplate=l.first),Kw(l=Qw())&&(t.removeIconTemplate=l.first),Kw(l=Qw())&&(t.loadingIconTemplate=l.first),Kw(l=Qw())&&(t.clearIconTemplate=l.first)}},viewQuery:function(n,t){n&1&&Em(t.inputEL,wt,5)(t.multiInputEl,It,5)(t.multiContainerEL,Ot,5)(t.dropdownButton,Tt,5)(t.itemsViewChild,Mt,5)(t.scroller,St,5)(t.overlayViewChild,Vt,5),n&2&&Jw(7)},hostVars:5,hostBindings:function(n,t){n&1&&gm(`click`,function(l){return t.onHostClick(l)}),n&2&&(am(`data-p`,t.containerDataP),fb(t.sx(`root`)),hb(t.cn(t.cx(`root`),t.styleClass())))},inputs:{minLength:[1,`minLength`],minQueryLength:[1,`minQueryLength`],delay:[1,`delay`],panelStyle:[1,`panelStyle`],styleClass:[1,`styleClass`],panelStyleClass:[1,`panelStyleClass`],inputStyle:[1,`inputStyle`],inputId:[1,`inputId`],inputStyleClass:[1,`inputStyleClass`],placeholder:[1,`placeholder`],readonly:[1,`readonly`],scrollHeight:[1,`scrollHeight`],lazy:[1,`lazy`],virtualScroll:[1,`virtualScroll`],virtualScrollItemSize:[1,`virtualScrollItemSize`],virtualScrollOptions:[1,`virtualScrollOptions`],autoHighlight:[1,`autoHighlight`],forceSelection:[1,`forceSelection`],type:[1,`type`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],ariaLabel:[1,`ariaLabel`],dropdownAriaLabel:[1,`dropdownAriaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],dropdownIcon:[1,`dropdownIcon`],unique:[1,`unique`],group:[1,`group`],completeOnFocus:[1,`completeOnFocus`],showClear:[1,`showClear`],dropdown:[1,`dropdown`],showEmptyMessage:[1,`showEmptyMessage`],dropdownMode:[1,`dropdownMode`],multiple:[1,`multiple`],addOnTab:[1,`addOnTab`],tabindex:[1,`tabindex`],dataKey:[1,`dataKey`],emptyMessage:[1,`emptyMessage`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],autofocus:[1,`autofocus`],autocomplete:[1,`autocomplete`],optionGroupChildren:[1,`optionGroupChildren`],optionGroupLabel:[1,`optionGroupLabel`],overlayOptions:[1,`overlayOptions`],suggestions:[1,`suggestions`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],id:[1,`id`],searchMessage:[1,`searchMessage`],emptySelectionMessage:[1,`emptySelectionMessage`],selectionMessage:[1,`selectionMessage`],autoOptionFocus:[1,`autoOptionFocus`],selectOnFocus:[1,`selectOnFocus`],searchLocale:[1,`searchLocale`],optionDisabled:[1,`optionDisabled`],focusOnHover:[1,`focusOnHover`],typeahead:[1,`typeahead`],addOnBlur:[1,`addOnBlur`],separator:[1,`separator`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{completeMethod:`completeMethod`,onSelect:`onSelect`,onUnselect:`onUnselect`,onAdd:`onAdd`,onFocus:`onFocus`,onBlur:`onBlur`,onDropdownClick:`onDropdownClick`,onClear:`onClear`,onInputKeydown:`onInputKeydown`,onKeyUp:`onKeyUp`,onShow:`onShow`,onHide:`onHide`,onLazyLoad:`onLazyLoad`},features:[Al([Ln,lt,{provide:at,useExisting:o},{provide:H_,useExisting:o}]),uw([L]),em],decls:9,vars:14,consts:[[`overlay`,``],[`content`,``],[`focusInput`,``],[`multiContainer`,``],[`focusInput`,``,`multiIn`,``],[`token`,``],[`removeicon`,``],[`ddBtn`,``],[`buildInItems`,``],[`scroller`,``],[`loader`,``],[`items`,``],[`pInputText`,``,`aria-autocomplete`,`list`,`role`,`combobox`,3,`pAutoFocus`,`pt`,`class`,`ngStyle`,`variant`,`invalid`,`pSize`,`fluid`,`pInputTextUnstyled`],[`role`,`listbox`,3,`pBind`,`class`,`tabindex`],[`type`,`button`,`pRipple`,``,3,`pBind`,`class`,`disabled`],[3,`visibleChange`,`onBeforeEnter`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[`pInputText`,``,`aria-autocomplete`,`list`,`role`,`combobox`,3,`input`,`keydown`,`change`,`focus`,`blur`,`paste`,`keyup`,`pAutoFocus`,`pt`,`ngStyle`,`variant`,`invalid`,`pSize`,`fluid`,`pInputTextUnstyled`],[`data-p-icon`,`times`,3,`pBind`,`class`],[3,`pBind`,`class`],[`data-p-icon`,`times`,3,`click`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`],[`role`,`listbox`,3,`focus`,`blur`,`keydown`,`pBind`,`tabindex`],[`role`,`option`,3,`pBind`,`class`],[`role`,`option`,3,`pBind`],[`role`,`combobox`,`aria-autocomplete`,`list`,3,`input`,`keydown`,`change`,`focus`,`blur`,`paste`,`keyup`,`pAutoFocus`,`pBind`,`ngStyle`],[3,`onRemove`,`pt`,`label`,`disabled`,`removable`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`],[`data-p-icon`,`times-circle`],[`data-p-icon`,`spinner`,3,`pBind`,`class`,`spin`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[`type`,`button`,`pRipple`,``,3,`click`,`pBind`,`disabled`],[3,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[3,`pBind`,`tabindex`],[3,`tabindex`,`pt`,`items`,`style`,`itemSize`,`autoSize`,`lazy`,`options`],[`role`,`status`,`aria-live`,`polite`,1,`p-hidden-accessible`],[3,`onLazyLoad`,`tabindex`,`pt`,`items`,`itemSize`,`autoSize`,`lazy`,`options`],[`role`,`listbox`,3,`pBind`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`],[`pRipple`,``,`role`,`option`,3,`pBind`,`ngStyle`,`class`],[`role`,`option`,3,`pBind`,`ngStyle`],[`pRipple`,``,`role`,`option`,3,`click`,`mouseenter`,`pBind`,`ngStyle`]],template:function(n,t){if(n&1){let i=$w();Aw(0,Nt,2,32,`input`,12),Aw(1,Pt,3,2,`ng-container`),Aw(2,jt,8,36,`ul`,13),Aw(3,en,3,2,`ng-container`),Aw(4,pn,4,8,`button`,14),Ws(5,`p-overlay`,15,0),jm(`visibleChange`,function(C){return Rf(i),Nb(t.overlayVisible,C)||(t.overlayVisible=C),Lf(C)}),gm(`onBeforeEnter`,function(){return t.onOverlayBeforeEnter()})(`onHide`,function(){return t.hide()}),nm(7,En,10,15,`ng-template`,null,1,Zb),wl()}n&2&&(xw(t.multiple()?-1:0),MC(),xw(t.$filled()&&!t.$disabled()&&t.showClear()&&!t.loading?1:-1),MC(),xw(t.multiple()?2:-1),MC(),xw(t.loading?3:-1),MC(),xw(t.dropdown()?4:-1),MC(),cm(`hostAttrSelector`,t.$attrSelector),Pm(`visible`,t.overlayVisible),cm(`options`,t.overlayOptions())(`target`,`@parent`)(`appendTo`,t.$appendTo())(`unstyled`,t.unstyled())(`pt`,t.ptm(`pcOverlay`))(`motionOptions`,t.motionOptions()),am(`data-p`,t.overlayDataP))},dependencies:[Gl,$T,GT,WT,Ie,K,W,Ce,B,L$1,y,d,we,XH,f,F,L],encapsulation:2})}return o})();var dt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=Ro({type:o});static ɵinj=Zn({imports:[le,XH,XH]})}return o})();var _o=(()=>{class o{constructor(){this.countries=[`Australia`,`Brazil`,`China`,`Denmark`,`Egypt`,`France`,`Germany`,`India`,`Japan`,`Kenya`,`Norway`,`Portugal`],this.selectedCountry=ne(void 0),this.selectedCountries=ne([]),this.filtered=ne([])}search(e){let n=e.query.toLowerCase();this.filtered.set(this.countries.filter(t=>t.toLowerCase().includes(n)))}static{this.ɵfac=function(n){return new(n||o)}}static{this.ɵcmp=sa({type:o,selectors:[[`uk-autocomplete-demo`]],decls:20,vars:14,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[3,`ngModelChange`,`completeMethod`,`ngModel`,`suggestions`],[3,`ngModelChange`,`completeMethod`,`ngModel`,`suggestions`,`dropdown`],[3,`ngModelChange`,`completeMethod`,`ngModel`,`suggestions`,`multiple`],[1,`demo-section__row`],[`placeholder`,`Disabled`,3,`ngModel`,`suggestions`,`disabled`],[`placeholder`,`Invalid`,3,`ngModel`,`suggestions`,`invalid`]],template:function(n,t){n&1&&(Ws(0,`h1`,0),wb(1,`AutoComplete`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),Ws(5,`p-autoComplete`,3),jm(`ngModelChange`,function(l){return Nb(t.selectedCountry,l)||(t.selectedCountry=l),l}),gm(`completeMethod`,function(l){return t.search(l)}),wl(),hS(),wl(),Ws(6,`section`,1)(7,`h2`,2),wb(8,`Dropdown`),wl(),Ws(9,`p-autoComplete`,4),jm(`ngModelChange`,function(l){return Nb(t.selectedCountry,l)||(t.selectedCountry=l),l}),gm(`completeMethod`,function(l){return t.search(l)}),wl(),hS(),wl(),Ws(10,`section`,1)(11,`h2`,2),wb(12,`Multiple`),wl(),Ws(13,`p-autoComplete`,5),jm(`ngModelChange`,function(l){return Nb(t.selectedCountries,l)||(t.selectedCountries=l),l}),gm(`completeMethod`,function(l){return t.search(l)}),wl(),hS(),wl(),Ws(14,`section`,1)(15,`h2`,2),wb(16,`States`),wl(),Ws(17,`div`,6),um(18,`p-autoComplete`,7),hS(),um(19,`p-autoComplete`,8),hS(),wl()()),n&2&&(MC(5),Pm(`ngModel`,t.selectedCountry),cm(`suggestions`,t.filtered()),mS(),MC(4),Pm(`ngModel`,t.selectedCountry),cm(`suggestions`,t.filtered())(`dropdown`,!0),mS(),MC(4),Pm(`ngModel`,t.selectedCountries),cm(`suggestions`,t.filtered())(`multiple`,!0),mS(),MC(5),cm(`ngModel`,t.selectedCountry())(`suggestions`,t.filtered())(`disabled`,!0),mS(),MC(),cm(`ngModel`,t.selectedCountry())(`suggestions`,t.filtered())(`invalid`,!0),mS())},dependencies:[un$1,sn$1,Rt$1,dt,le],encapsulation:2})}}return o})();export{_o as AutoCompleteDemo};