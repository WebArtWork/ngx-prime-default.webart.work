import{$a as zt,$i as qi,$r as gm,At as Lf,Br as em,Da as uw,Dr as ce,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,In as WT,Jr as g,K as Gl,Li as nm,Ln as WV,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,U as GT,W as GV,X as HV,Z as H_,Zt as P,ca as sH,dn as Ro,fr as am,ft as JV,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,ka as v,l as $w,mn as ST,na as qw,oi as hb,on as Qw,p as Al,r as $T,s as $t,t as $,ua as sa,un as Rf,ut as JH}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{t as B}from"./chunk-Bc7G3ZMk.js";import{a as b$1,d as te}from"./chunk-53wldAuq.js";import{A as f,i as K,o as D}from"./main-4W6E6VEG.js";import{t as m}from"./chunk-MMRGOKz-.js";import{t as m$1}from"./chunk-DPHe9ERu.js";var Me=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var Fe=[`incrementbuttonicon`];var Re=[`decrementbuttonicon`];var Le=[`clearicon`];var Ae=[`input`];function Ue(r,m){if(r&1){let e=$w();qf(),Ws(0,`svg`,5),gm(`click`,function(){Rf(e);return Lf(qw(2).clear())}),wl()}if(r&2){let e=qw(2);hb(e.cx(`clearIcon`)),cm(`pBind`,e.ptm(`clearIcon`))}}function $e(r,m){}function ze(r,m){r&1&&nm(0,$e,0,0,`ng-template`)}function Pe(r,m){if(r&1){let e=$w();Ws(0,`span`,6),gm(`click`,function(){Rf(e);return Lf(qw(2).clear())}),nm(1,ze,1,0,null,7),wl()}if(r&2){let e=qw(2);hb(e.cx(`clearIcon`)),cm(`pBind`,e.ptm(`clearIcon`)),MC(),cm(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Ke(r,m){if(r&1&&(Aw(0,Ue,1,3,`:svg:svg`,4),Aw(1,Pe,2,4,`span`,2)),r&2){let e=qw();xw(!e.clearIconTemplate&&!e._clearIconTemplate?0:-1),MC(),xw(e.clearIconTemplate||e._clearIconTemplate?1:-1)}}function Ge(r,m){if(r&1&&um(0,`span`,10),r&2){let e=qw(2);cm(`pBind`,e.ptm(`incrementButtonIcon`))(`ngClass`,e.incrementButtonIcon())}}function Oe(r,m){if(r&1&&(qf(),um(0,`svg`,11)),r&2)cm(`pBind`,qw(3).ptm(`incrementButtonIcon`))}function qe(r,m){}function je(r,m){r&1&&nm(0,qe,0,0,`ng-template`)}function He(r,m){if(r&1&&(Aw(0,Oe,1,1,`:svg:svg`,11),nm(1,je,1,0,null,7)),r&2){let e=qw(2);xw(!e.incrementButtonIconTemplate()&&!e._incrementButtonIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.incrementButtonIconTemplate()||e._incrementButtonIconTemplate)}}function Qe(r,m){if(r&1&&um(0,`span`,10),r&2){let e=qw(2);cm(`pBind`,e.ptm(`decrementButtonIcon`))(`ngClass`,e.decrementButtonIcon())}}function We(r,m){if(r&1&&(qf(),um(0,`svg`,12)),r&2)cm(`pBind`,qw(3).ptm(`decrementButtonIcon`))}function Je(r,m){}function Xe(r,m){r&1&&nm(0,Je,0,0,`ng-template`)}function Ye(r,m){if(r&1&&(Aw(0,We,1,1,`:svg:svg`,12),nm(1,Xe,1,0,null,7)),r&2){let e=qw(2);xw(!e.decrementButtonIconTemplate()&&!e._decrementButtonIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.decrementButtonIconTemplate()||e._decrementButtonIconTemplate)}}function Ze(r,m){if(r&1){let e=$w();Ws(0,`span`,8)(1,`button`,9),gm(`mousedown`,function(t){Rf(e);return Lf(qw().onUpButtonMouseDown(t))})(`mouseup`,function(){Rf(e);return Lf(qw().onUpButtonMouseUp())})(`mouseleave`,function(){Rf(e);return Lf(qw().onUpButtonMouseLeave())})(`keydown`,function(t){Rf(e);return Lf(qw().onUpButtonKeyDown(t))})(`keyup`,function(){Rf(e);return Lf(qw().onUpButtonKeyUp())}),Aw(2,Ge,1,2,`span`,10),Aw(3,He,2,2),wl(),Ws(4,`button`,9),gm(`mousedown`,function(t){Rf(e);return Lf(qw().onDownButtonMouseDown(t))})(`mouseup`,function(){Rf(e);return Lf(qw().onDownButtonMouseUp())})(`mouseleave`,function(){Rf(e);return Lf(qw().onDownButtonMouseLeave())})(`keydown`,function(t){Rf(e);return Lf(qw().onDownButtonKeyDown(t))})(`keyup`,function(){Rf(e);return Lf(qw().onDownButtonKeyUp())}),Aw(5,Qe,1,2,`span`,10),Aw(6,Ye,2,2),wl()()}if(r&2){let e=qw();hb(e.cx(`buttonGroup`)),cm(`pBind`,e.ptm(`buttonGroup`)),am(`data-p`,e.dataP),MC(),hb(e.cn(e.cx(`incrementButton`),e.incrementButtonClass())),cm(`pBind`,e.ptm(`incrementButton`)),am(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),MC(),xw(e.incrementButtonIcon()?2:-1),MC(),xw(e.incrementButtonIcon()?-1:3),MC(),hb(e.cn(e.cx(`decrementButton`),e.decrementButtonClass())),cm(`pBind`,e.ptm(`decrementButton`)),am(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),MC(),xw(e.decrementButtonIcon()?5:-1),MC(),xw(e.decrementButtonIcon()?-1:6)}}function et(r,m){if(r&1&&um(0,`span`,10),r&2){let e=qw(2);cm(`pBind`,e.ptm(`incrementButtonIcon`))(`ngClass`,e.incrementButtonIcon())}}function tt(r,m){if(r&1&&(qf(),um(0,`svg`,11)),r&2)cm(`pBind`,qw(3).ptm(`incrementButtonIcon`))}function nt(r,m){}function it(r,m){r&1&&nm(0,nt,0,0,`ng-template`)}function rt(r,m){if(r&1&&(Aw(0,tt,1,1,`:svg:svg`,11),nm(1,it,1,0,null,7)),r&2){let e=qw(2);xw(!e.incrementButtonIconTemplate()&&!e._incrementButtonIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.incrementButtonIconTemplate()||e._incrementButtonIconTemplate)}}function ot(r,m){if(r&1){let e=$w();Ws(0,`button`,9),gm(`mousedown`,function(t){Rf(e);return Lf(qw().onUpButtonMouseDown(t))})(`mouseup`,function(){Rf(e);return Lf(qw().onUpButtonMouseUp())})(`mouseleave`,function(){Rf(e);return Lf(qw().onUpButtonMouseLeave())})(`keydown`,function(t){Rf(e);return Lf(qw().onUpButtonKeyDown(t))})(`keyup`,function(){Rf(e);return Lf(qw().onUpButtonKeyUp())}),Aw(1,et,1,2,`span`,10),Aw(2,rt,2,2),wl()}if(r&2){let e=qw();hb(e.cn(e.cx(`incrementButton`),e.incrementButtonClass())),cm(`pBind`,e.ptm(`incrementButton`)),am(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),MC(),xw(e.incrementButtonIcon()?1:-1),MC(),xw(e.incrementButtonIcon()?-1:2)}}function at(r,m){if(r&1&&um(0,`span`,10),r&2){let e=qw(2);cm(`pBind`,e.ptm(`decrementButtonIcon`))(`ngClass`,e.decrementButtonIcon())}}function ut(r,m){if(r&1&&(qf(),um(0,`svg`,12)),r&2)cm(`pBind`,qw(3).ptm(`decrementButtonIcon`))}function lt(r,m){}function st(r,m){r&1&&nm(0,lt,0,0,`ng-template`)}function dt(r,m){if(r&1&&(Aw(0,ut,1,1,`:svg:svg`,12),nm(1,st,1,0,null,7)),r&2){let e=qw(2);xw(!e.decrementButtonIconTemplate()&&!e._decrementButtonIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.decrementButtonIconTemplate()||e._decrementButtonIconTemplate)}}function ct(r,m){if(r&1){let e=$w();Ws(0,`button`,9),gm(`mousedown`,function(t){Rf(e);return Lf(qw().onDownButtonMouseDown(t))})(`mouseup`,function(){Rf(e);return Lf(qw().onDownButtonMouseUp())})(`mouseleave`,function(){Rf(e);return Lf(qw().onDownButtonMouseLeave())})(`keydown`,function(t){Rf(e);return Lf(qw().onDownButtonKeyDown(t))})(`keyup`,function(){Rf(e);return Lf(qw().onDownButtonKeyUp())}),Aw(1,at,1,2,`span`,10),Aw(2,dt,2,2),wl()}if(r&2){let e=qw();hb(e.cn(e.cx(`decrementButton`),e.decrementButtonClass())),cm(`pBind`,e.ptm(`decrementButton`)),am(`disabled`,e.$disabled()?``:void 0)(`aria-hidden`,!0)(`data-p`,e.dataP),MC(),xw(e.decrementButtonIcon()?1:-1),MC(),xw(e.decrementButtonIcon()?-1:2)}}var pt=`
    ${Me}

    /* For ngx-prime */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var mt={root:({instance:r})=>[`p-inputnumber p-component p-inputwrapper`,{"p-inputwrapper-filled":r.$filled()||r.allowEmpty()===!1,"p-inputwrapper-focus":r.focused,"p-inputnumber-stacked":r.showButtons()&&r.buttonLayout()===`stacked`,"p-inputnumber-horizontal":r.showButtons()&&r.buttonLayout()===`horizontal`,"p-inputnumber-vertical":r.showButtons()&&r.buttonLayout()===`vertical`,"p-inputnumber-fluid":r.hasFluid,"p-invalid":r.invalid()}],pcInputText:`p-inputnumber-input`,buttonGroup:`p-inputnumber-button-group`,incrementButton:({instance:r})=>[`p-inputnumber-button p-inputnumber-increment-button`,{"p-disabled":r.showButtons()&&r.max()!=null&&r.maxlength()}],decrementButton:({instance:r})=>[`p-inputnumber-button p-inputnumber-decrement-button`,{"p-disabled":r.showButtons()&&r.min()!=null&&r.minlength()}],clearIcon:`p-inputnumber-clear-icon`};var Ee=(()=>{class r extends Nr{name=`inputnumber`;style=pt;classes=mt;static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(r)))(t||r)}})();static ɵprov=P({token:r,factory:r.ɵfac})}return r})();var Ve=new b(`INPUTNUMBER_INSTANCE`);var ht={provide:te,useExisting:qi(()=>Se),multi:!0};var Se=(()=>{class r extends D{injector=g(ce);componentName=`InputNumber`;$pcInputNumber=g(Ve,{optional:!0,skipSelf:!0})??void 0;_componentStyle=g(Ee);bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}showButtons=zt(!1,{transform:CT});format=zt(!0,{transform:CT});buttonLayout=zt(`stacked`);inputId=zt();styleClass=zt();placeholder=zt();tabindex=zt(void 0,{transform:ST});title=zt();ariaLabelledBy=zt();ariaDescribedBy=zt();ariaLabel=zt();ariaRequired=zt(void 0,{transform:CT});autocomplete=zt();incrementButtonClass=zt();decrementButtonClass=zt();incrementButtonIcon=zt();decrementButtonIcon=zt();readonly=zt(void 0,{transform:CT});allowEmpty=zt(!0,{transform:CT});locale=zt();localeMatcher=zt();mode=zt(`decimal`);currency=zt();currencyDisplay=zt();useGrouping=zt(!0,{transform:CT});minFractionDigits=zt(void 0,{transform:e=>ST(e,void 0)});maxFractionDigits=zt(void 0,{transform:e=>ST(e,void 0)});prefix=zt();suffix=zt();inputStyle=zt();inputStyleClass=zt();showClear=zt(!1,{transform:CT});autofocus=zt(void 0,{transform:CT});onInput=HV();onFocus=HV();onBlur=HV();onKeyDown=HV();onClear=HV();clearIconTemplate;incrementButtonIconTemplate=GV(`incrementbuttonicon`,{descendants:!1});decrementButtonIconTemplate=GV(`decrementbuttonicon`,{descendants:!1});templates=zV(JH);input=WV.required(`input`);_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar=``;prefixChar=``;suffixChar=``;isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar=``;_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(){super(),JV()&&console.warn('`<p-inputnumber>` is deprecated and will be removed in a future major version. Use a native `<input type="number" pInputNumber>` instead.'),$t(()=>{this.locale(),this.localeMatcher(),this.mode(),this.currency(),this.currencyDisplay(),this.useGrouping(),this.minFractionDigits(),this.maxFractionDigits(),this.prefix(),this.suffix(),this.updateConstructParser()})}onInit(){this.ngControl=this.injector.get(b$1,null,{optional:!0}),this.constructParser(),this.initialized=!0}onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`clearicon`:this._clearIconTemplate=e.template;break;case`incrementbuttonicon`:this._incrementButtonIconTemplate=e.template;break;case`decrementbuttonicon`:this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(o,a,u)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(a,Math.min(u,Math.floor(o)))},n=e(this.minFractionDigits(),0,20),t=e(this.maxFractionDigits(),0,100),i=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher(),style:this.mode(),currency:this.currency(),currencyDisplay:this.currencyDisplay(),useGrouping:this.useGrouping(),minimumFractionDigits:i,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([,o])=>o!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale(),n);let t=[...new Intl.NumberFormat(this.locale(),{useGrouping:!1}).format(9876543210)].reverse(),i=new Map(t.map((o,a)=>[o,a]));this._numeral=new RegExp(`[${t.join(``)}]`,`g`),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>i.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,`\\$&`)}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,`g`)}getDecimalChar(){return new Intl.NumberFormat(this.locale(),$(v({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,``).trim().replace(this._numeral,``)}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale(),{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,``).charAt(0),new RegExp(`[${this.groupChar}]`,`g`)}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale(),{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,``)}]`,`g`)}getCurrencyExpression(){if(this.currency()){let e=new Intl.NumberFormat(this.locale(),{style:`currency`,currency:this.currency(),currencyDisplay:this.currencyDisplay(),minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,``).replace(this._numeral,``).replace(this._group,``)}]`,`g`)}return new RegExp(`[]`,`g`)}getPrefixExpression(){if(this.prefix())this.prefixChar=this.prefix();else{let e=new Intl.NumberFormat(this.locale(),{style:this.mode(),currency:this.currency(),currencyDisplay:this.currencyDisplay()});this.prefixChar=e.format(1).split(`1`)[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||``)}`,`g`)}getSuffixExpression(){if(this.suffix())this.suffixChar=this.suffix();else{let e=new Intl.NumberFormat(this.locale(),{style:this.mode(),currency:this.currency(),currencyDisplay:this.currencyDisplay(),minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split(`1`)[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||``)}`,`g`)}formatValue(e){if(e!=null){if(e===`-`)return e;if(this.format()){let t=new Intl.NumberFormat(this.locale(),this.getOptions()).format(e);return this.prefix()&&e!=this.prefix()&&(t=this.prefix()+t),this.suffix()&&e!=this.suffix()&&(t=t+this.suffix()),t}return e.toString()}return``}parseValue(e){let n=this._suffix?new RegExp(this._suffix,``):/(?:)/,t=this._prefix?new RegExp(this._prefix,``):/(?:)/,i=this._currency?new RegExp(this._currency,``):/(?:)/,o=e.replace(n,``).replace(t,``).trim().replace(/\s/g,``).replace(i,``).replace(this._group,``).replace(this._minusSign,`-`).replace(this._decimal,`.`).replace(this._numeral,this._index);if(o){if(o===`-`)return o;let a=+o;return isNaN(a)?null:a}return null}repeat(e,n,t){if(this.readonly())return;let i=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},i),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,i=this.parseValue(this.input()?.nativeElement.value)||0,o=this.validateValue(i+t),a=this.maxlength();a&&a<this.formatValue(o).length||(this.updateInput(o,null,`spin`,null),this.updateModel(e,o),this.handleOnInput(e,i,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input()?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input()?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly()||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly())return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,i=e.target.value,o=null;e.altKey&&e.preventDefault();let a=this.input();switch(e.key){case`ArrowUp`:this.spin(e,1),e.preventDefault();break;case`ArrowDown`:this.spin(e,-1),e.preventDefault();break;case`ArrowLeft`:for(let u=n;u<=i.length;u++){let c=u===0?0:u-1;if(this.isNumeralChar(i.charAt(c))){this.input().nativeElement.setSelectionRange(u,u);break}}break;case`ArrowRight`:for(let u=t;u>=0;u--)if(this.isNumeralChar(i.charAt(u))){this.input().nativeElement.setSelectionRange(u,u);break}break;case`Tab`:case`Enter`:o=this.validateValue(this.parseValue(this.input().nativeElement.value)),a.nativeElement.value=this.formatValue(o),a.nativeElement.setAttribute(`aria-valuenow`,o),this.updateModel(e,o);break;case`Backspace`:if(e.preventDefault(),n===t){if(n==1&&this.prefix()||n==i.length&&this.suffix())break;let u=i.charAt(n-1),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:p}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(u)){let s=this.getDecimalLength(i);if(this._group.test(u))this._group.lastIndex=0,o=i.slice(0,n-2)+i.slice(n-1);else if(this._decimal.test(u))this._decimal.lastIndex=0,s?this.input()?.nativeElement.setSelectionRange(n-1,n-1):o=i.slice(0,n-1)+i.slice(n);else if(c>0&&n>c){let y=this.isDecimalMode()&&(this.minFractionDigits()||0)<s?``:`0`;o=i.slice(0,n-1)+y+i.slice(n)}else p===1?(o=i.slice(0,n-1)+`0`+i.slice(n),o=this.parseValue(o)>0?o:``):o=i.slice(0,n-1)+i.slice(n)}else this.mode()===`currency`&&this._currency&&u.search(this._currency)!=-1&&(o=i.slice(1));this.updateValue(e,o,null,`delete-single`)}else o=this.deleteRange(i,n,t),this.updateValue(e,o,null,`delete-range`);break;case`Delete`:if(e.preventDefault(),n===t){if(n==0&&this.prefix()||n==i.length-1&&this.suffix())break;let u=i.charAt(n),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:p}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(u)){let s=this.getDecimalLength(i);if(this._group.test(u))this._group.lastIndex=0,o=i.slice(0,n)+i.slice(n+2);else if(this._decimal.test(u))this._decimal.lastIndex=0,s?this.input()?.nativeElement.setSelectionRange(n+1,n+1):o=i.slice(0,n)+i.slice(n+1);else if(c>0&&n>c){let y=this.isDecimalMode()&&(this.minFractionDigits()||0)<s?``:`0`;o=i.slice(0,n)+y+i.slice(n+1)}else p===1?(o=i.slice(0,n)+`0`+i.slice(n+1),o=this.parseValue(o)>0?o:``):o=i.slice(0,n)+i.slice(n+1)}this.updateValue(e,o,null,`delete-back-single`)}else o=this.deleteRange(i,n,t),this.updateValue(e,o,null,`delete-range`);break;case`Home`:this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case`End`:this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly())return;let n=e.which||e.keyCode,t=String.fromCharCode(n),i=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!i&&e.code===`NumpadDecimal`&&(i=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:a,selectionStart:u,selectionEnd:c}=this.input().nativeElement,p=this.parseValue(a+t),s=p!=null?p.toString():``,y=a.substring(u,c),D=this.parseValue(y),g=D!=null?D.toString():``;if(u!==c&&g.length>0){this.insert(e,t,{isDecimalSign:i,isMinusSign:o});return}let v=this.maxlength();v&&s.length>v||(48<=n&&n<=57||o||i)&&this.insert(e,t,{isDecimalSign:i,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly()){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData(`Text`);if(this.inputId()===`integeronly`&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e===`-`?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode()===`decimal`}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let i=e.replace(this._prefix,``).trim().replace(/\s/g,``).replace(this._currency,``).search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:i}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let i=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:i,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let i=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&i!==-1)return;let o=this.input(),a=o?.nativeElement.selectionStart,u=o?.nativeElement.selectionEnd,c=o?.nativeElement.value.trim(),{decimalCharIndex:p,minusCharIndex:s,suffixCharIndex:y,currencyCharIndex:D}=this.getCharIndexes(c),g;if(t.isMinusSign)a===0&&(g=c,(s===-1||u!==0)&&(g=this.insertText(c,n,0,u)),this.updateValue(e,g,n,`insert`));else if(t.isDecimalSign)p>0&&a===p?this.updateValue(e,c,n,`insert`):p>a&&p<u?(g=this.insertText(c,n,a,u),this.updateValue(e,g,n,`insert`)):p===-1&&this.maxFractionDigits()&&(g=this.insertText(c,n,a,u),this.updateValue(e,g,n,`insert`));else{let v=this.numberFormat.resolvedOptions().maximumFractionDigits,k=a!==u?`range-insert`:`insert`;if(p>0&&a>p){if(a+n.length-(p+1)<=v){let B=D>=a?D-1:y>=a?y:c.length;g=c.slice(0,a)+n+c.slice(a+n.length,B)+c.slice(B),this.updateValue(e,g,n,k)}}else g=this.insertText(c,n,a,u),this.updateValue(e,g,n,k)}}insertText(e,n,t,i){if((n===`.`?n:n.split(`.`)).length===2){let a=e.slice(t,i).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,t)+this.formatValue(n)+e.slice(i):e||this.formatValue(n)}else return i-t===e.length?this.formatValue(n):t===0?n+e.slice(i):i===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(i)}deleteRange(e,n,t){let i;return t-n===e.length?i=``:n===0?i=e.slice(t):t===e.length?i=e.slice(0,n):i=e.slice(0,n)+e.slice(t),i}initCursor(){let e=this.input(),n=e?.nativeElement.selectionStart,t=e?.nativeElement.selectionEnd,i=e?.nativeElement.value,o=i.length,a=null,u=(this.prefixChar||``).length;i=i.replace(this._prefix,``),(n===t||n!==0||t<u)&&(n-=u);let c=i.charAt(n);if(this.isNumeralChar(c))return n+u;let p=n-1;for(;p>=0;)if(c=i.charAt(p),this.isNumeralChar(c)){a=p+u;break}else p--;if(a!==null)e?.nativeElement.setSelectionRange(a+1,a+1);else{for(p=n;p<o;)if(c=i.charAt(p),this.isNumeralChar(c)){a=p+u;break}else p++;a!==null&&e?.nativeElement.setSelectionRange(a,a)}return a||0}onInputClick(){let e=this.input()?.nativeElement.value;!this.readonly()&&e!==sH()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,i){let o=this.input()?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty()?0:a,this.updateInput(a,t,i,n),this.handleOnInput(e,o,a))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input().nativeElement.value=this.formatValue(t),this.input()?.nativeElement.setAttribute(`aria-valuenow`,t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null)return n!==(typeof e==`string`?this.parseValue(e):e);return!1}validateValue(e){if(e===`-`||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,i){n=n||``;let o=this.input(),a=o?.nativeElement.value,u=this.formatValue(e),c=a.length;if(u!==i&&(u=this.concatValues(u,i)),c===0){o.nativeElement.value=u,o.nativeElement.setSelectionRange(0,0);let s=this.initCursor()+n.length;o.nativeElement.setSelectionRange(s,s)}else{let p=o.nativeElement.selectionStart,s=o.nativeElement.selectionEnd,y=this.maxlength();if(y&&u.length>y&&(u=u.slice(0,y),p=Math.min(p,y),s=Math.min(s,y)),y&&y<u.length)return;o.nativeElement.value=u;let D=u.length;if(t===`range-insert`){let g=this.parseValue((a||``).slice(0,p)),k=(g!==null?g.toString():``).split(``).join(`(${this.groupChar})?`),B=new RegExp(k,`g`);B.test(u);let ke=n.split(``).join(`(${this.groupChar})?`),O=new RegExp(ke,`g`);O.test(u.slice(B.lastIndex)),s=B.lastIndex+O.lastIndex,o.nativeElement.setSelectionRange(s,s)}else if(D===c)t===`insert`||t===`delete-back-single`?o.nativeElement.setSelectionRange(s+1,s+1):t===`delete-single`?o.nativeElement.setSelectionRange(s-1,s-1):(t===`delete-range`||t===`spin`)&&o.nativeElement.setSelectionRange(s,s);else if(t===`delete-back-single`){let g=a.charAt(s-1),v=a.charAt(s),k=c-D,B=this._group.test(v);B&&k===1?s+=1:!B&&this.isNumeralChar(g)&&(s+=-1*k+1),this._group.lastIndex=0,o.nativeElement.setSelectionRange(s,s)}else if(a===`-`&&t===`insert`){o.nativeElement.setSelectionRange(0,0);let v=this.initCursor()+n.length+1;o.nativeElement.setSelectionRange(v,v)}else s=s+(D-c),o.nativeElement.setSelectionRange(s,s)}o.nativeElement.setAttribute(`aria-valuenow`,e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,``).split(this._decimal)[0]+n.replace(this.suffixChar,``).slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,``).trim().replace(/\s/g,``).replace(this._currency,``).length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input().nativeElement.value)),t=n?.toString();this.input().nativeElement.value=this.formatValue(t),this.input().nativeElement.setAttribute(`aria-valuenow`,t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty()?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn===`blur`;this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}get dataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,empty:!this.$filled(),[this.size()]:this.size(),[this.buttonLayout()]:this.showButtons()&&this.buttonLayout()})}static ɵfac=function(n){return new(n||r)};static ɵcmp=sa({type:r,selectors:[[`p-inputNumber`],[`p-inputnumber`],[`p-input-number`]],contentQueries:function(n,t,i){if(n&1&&(Dm(i,t.incrementButtonIconTemplate,Fe,4)(i,t.decrementButtonIconTemplate,Re,4)(i,t.templates,JH,4),ym(i,Le,4)),n&2){Jw(3);let o;Kw(o=Qw())&&(t.clearIconTemplate=o.first)}},viewQuery:function(n,t){n&1&&Em(t.input,Ae,5),n&2&&Jw()},hostVars:3,hostBindings:function(n,t){n&2&&(am(`data-p`,t.dataP),hb(t.cn(t.cx(`root`),t.styleClass())))},inputs:{showButtons:[1,`showButtons`],format:[1,`format`],buttonLayout:[1,`buttonLayout`],inputId:[1,`inputId`],styleClass:[1,`styleClass`],placeholder:[1,`placeholder`],tabindex:[1,`tabindex`],title:[1,`title`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],ariaLabel:[1,`ariaLabel`],ariaRequired:[1,`ariaRequired`],autocomplete:[1,`autocomplete`],incrementButtonClass:[1,`incrementButtonClass`],decrementButtonClass:[1,`decrementButtonClass`],incrementButtonIcon:[1,`incrementButtonIcon`],decrementButtonIcon:[1,`decrementButtonIcon`],readonly:[1,`readonly`],allowEmpty:[1,`allowEmpty`],locale:[1,`locale`],localeMatcher:[1,`localeMatcher`],mode:[1,`mode`],currency:[1,`currency`],currencyDisplay:[1,`currencyDisplay`],useGrouping:[1,`useGrouping`],minFractionDigits:[1,`minFractionDigits`],maxFractionDigits:[1,`maxFractionDigits`],prefix:[1,`prefix`],suffix:[1,`suffix`],inputStyle:[1,`inputStyle`],inputStyleClass:[1,`inputStyleClass`],showClear:[1,`showClear`],autofocus:[1,`autofocus`]},outputs:{onInput:`onInput`,onFocus:`onFocus`,onBlur:`onBlur`,onKeyDown:`onKeyDown`,onClear:`onClear`},features:[Al([ht,Ee,{provide:Ve,useExisting:r},{provide:H_,useExisting:r}]),uw([L]),em],decls:6,vars:38,consts:[[`input`,``],[`pInputText`,``,`role`,`spinbutton`,`inputmode`,`decimal`,3,`input`,`keydown`,`keypress`,`paste`,`click`,`focus`,`blur`,`value`,`ngStyle`,`variant`,`invalid`,`pSize`,`pt`,`unstyled`,`pAutoFocus`,`fluid`],[3,`pBind`,`class`],[`type`,`button`,`tabindex`,`-1`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`click`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`],[`type`,`button`,`tabindex`,`-1`,3,`mousedown`,`mouseup`,`mouseleave`,`keydown`,`keyup`,`pBind`],[3,`pBind`,`ngClass`],[`data-p-icon`,`angle-up`,3,`pBind`],[`data-p-icon`,`angle-down`,3,`pBind`]],template:function(n,t){n&1&&(Ws(0,`input`,1,0),gm(`input`,function(o){return t.onUserInput(o)})(`keydown`,function(o){return t.onInputKeyDown(o)})(`keypress`,function(o){return t.onInputKeyPress(o)})(`paste`,function(o){return t.onPaste(o)})(`click`,function(){return t.onInputClick()})(`focus`,function(o){return t.onInputFocus(o)})(`blur`,function(o){return t.onInputBlur(o)}),wl(),Aw(2,Ke,2,2),Aw(3,Ze,7,20,`span`,2),Aw(4,ot,3,8,`button`,3),Aw(5,ct,3,8,`button`,3)),n&2&&(hb(t.cn(t.cx(`pcInputText`),t.inputStyleClass())),cm(`value`,t.formattedValue())(`ngStyle`,t.inputStyle())(`variant`,t.$variant())(`invalid`,t.invalid())(`pSize`,t.size())(`pt`,t.ptm(`pcInputText`))(`unstyled`,t.unstyled())(`pAutoFocus`,t.autofocus())(`fluid`,t.hasFluid),am(`id`,t.inputId())(`aria-valuemin`,t.min())(`aria-valuemax`,t.max())(`aria-valuenow`,t.value)(`placeholder`,t.placeholder())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.ariaDescribedBy())(`title`,t.title())(`size`,t.inputSize())(`name`,t.name())(`autocomplete`,t.autocomplete())(`maxlength`,t.maxlength())(`minlength`,t.minlength())(`tabindex`,t.tabindex())(`aria-required`,t.ariaRequired())(`min`,t.min())(`max`,t.max())(`step`,t.step()??1)(`required`,t.required()?``:void 0)(`readonly`,t.readonly()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`data-p`,t.dataP),MC(2),xw(t.buttonLayout()!==`vertical`&&t.showClear()&&t.value?2:-1),MC(),xw(t.showButtons()&&t.buttonLayout()===`stacked`?3:-1),MC(),xw(t.showButtons()&&t.buttonLayout()!==`stacked`?4:-1),MC(),xw(t.showButtons()&&t.buttonLayout()!==`stacked`?5:-1))},dependencies:[Gl,$T,GT,WT,K,B,f,m,m$1,XH,F,L],encapsulation:2})}return r})();var Gt=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵmod=Ro({type:r});static ɵinj=Zn({imports:[Se,XH,XH]})}return r})();export{Se as n,Gt as t};