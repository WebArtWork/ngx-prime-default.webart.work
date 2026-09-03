import{$a as zt,Ai as mS,Br as em,Bt as Nb,Da as uw,Hn as XH,Ht as Nr,Ii as ne,Jr as g,La as wb,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,Si as la,Ta as ua,Z as H_,Zt as P,dn as Ro,en as Pm,hr as b,ir as Zn,lt as J2,oi as hb,p as Al,pi as jm,ri as hS,ua as sa}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import"./chunk--HunKa9-.js";import{f as un,r as Rt,t as Ie,u as sn}from"./chunk-53wldAuq.js";import"./chunk-Da0TIp29.js";import{a as L$1,i as K$1}from"./main-4W6E6VEG.js";var U=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var J=[`*`];var K=`
    ${U}

    /* For ngx-prime */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`;var Q={root:({instance:e})=>[`p-floatlabel`,{"p-floatlabel-over":e.variant()===`over`,"p-floatlabel-on":e.variant()===`on`,"p-floatlabel-in":e.variant()===`in`}]};var H=(()=>{class e extends Nr{name=`floatlabel`;style=K;classes=Q;static ɵfac=(()=>{let i;return function(l){return(i||(i=dh(e)))(l||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var R=new b(`FLOATLABEL_INSTANCE`);var y=(()=>{class e extends J2{componentName=`FloatLabel`;_componentStyle=g(H);$pcFloatLabel=g(R,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}variant=zt(`over`);static ɵfac=(()=>{let i;return function(l){return(i||(i=dh(e)))(l||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-floatlabel`],[`p-floatLabel`],[`p-float-label`]],hostVars:2,hostBindings:function(t,l){t&2&&hb(l.cx(`root`))},inputs:{variant:[1,`variant`]},features:[Al([H,{provide:R,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:J,decls:1,vars:0,template:function(t,l){t&1&&(ua(),la(0))},dependencies:[XH,F],encapsulation:2})}return e})();var q=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[y,XH,XH]})}return e})();var ye=(()=>{class e{constructor(){this.value=ne(``)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-floatlabel-demo`]],decls:23,vars:3,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`pInputText`,``,`id`,`fl-basic`,3,`ngModelChange`,`ngModel`],[`for`,`fl-basic`],[`variant`,`in`],[`pInputText`,``,`id`,`fl-in`,3,`ngModelChange`,`ngModel`],[`for`,`fl-in`],[`variant`,`on`],[`pInputText`,``,`id`,`fl-on`,3,`ngModelChange`,`ngModel`],[`for`,`fl-on`]],template:function(t,l){t&1&&(Ws(0,`h1`,0),wb(1,`FloatLabel`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic (over)`),wl(),Ws(5,`p-floatlabel`)(6,`input`,3),jm(`ngModelChange`,function(a){return Nb(l.value,a)||(l.value=a),a}),wl(),hS(),Ws(7,`label`,4),wb(8,`Username`),wl()()(),Ws(9,`section`,1)(10,`h2`,2),wb(11,`In`),wl(),Ws(12,`p-floatlabel`,5)(13,`input`,6),jm(`ngModelChange`,function(a){return Nb(l.value,a)||(l.value=a),a}),wl(),hS(),Ws(14,`label`,7),wb(15,`Username`),wl()()(),Ws(16,`section`,1)(17,`h2`,2),wb(18,`On`),wl(),Ws(19,`p-floatlabel`,8)(20,`input`,9),jm(`ngModelChange`,function(a){return Nb(l.value,a)||(l.value=a),a}),wl(),hS(),Ws(21,`label`,10),wb(22,`Username`),wl()()()),t&2&&(MC(6),Pm(`ngModel`,l.value),mS(),MC(7),Pm(`ngModel`,l.value),mS(),MC(7),Pm(`ngModel`,l.value),mS())},dependencies:[un,Ie,sn,Rt,q,y,L$1,K$1],encapsulation:2})}}return e})();export{ye as FloatLabelDemo};