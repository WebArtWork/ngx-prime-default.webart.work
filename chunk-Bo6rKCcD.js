import{$a as zt,Br as em,Da as uw,Ea as um,Hn as XH,Ht as Nr,Jr as g,Kr as fb,La as wb,Pr as dh,Ra as wl,Rn as Ws,Si as la,Ta as ua,Z as H_,Zt as P$1,dn as Ro,hr as b,ir as Zn,lt as J2,oi as hb,p as Al,ua as sa}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import"./chunk-TSmMf5t-.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import"./chunk-CC7-t2QW.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import"./chunk-Bc7G3ZMk.js";import{f as un}from"./chunk-53wldAuq.js";import"./chunk-Da0TIp29.js";import{D as Rt,a as L$1,i as K$1,k as vn}from"./main-4W6E6VEG.js";var P=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-floatlabel .p-inputwrapper,
    .p-inputgroup .p-iftalabel .p-inputwrapper {
        display: inline-flex;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label,
    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,
    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var K=[`*`];var q=`
    ${P}

    /*For ngx-prime*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`;var J={root:({instance:t})=>[`p-inputgroup`,{"p-inputgroup-fluid":t.fluid}]};var U=(()=>{class t extends Nr{name=`inputgroup`;style=q;classes=J;static ɵfac=(()=>{let n;return function(p){return(n||(n=dh(t)))(p||t)}})();static ɵprov=P$1({token:t,factory:t.ɵfac})}return t})();var O=new b(`INPUTGROUP_INSTANCE`);var N=(()=>{class t extends J2{componentName=`InputGroup`;_componentStyle=g(U);$pcInputGroup=g(O,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zt();static ɵfac=(()=>{let n;return function(p){return(n||(n=dh(t)))(p||t)}})();static ɵcmp=sa({type:t,selectors:[[`p-inputgroup`],[`p-inputGroup`],[`p-input-group`]],hostVars:2,hostBindings:function(e,p){e&2&&hb(p.cn(p.cx(`root`),p.styleClass()))},inputs:{styleClass:[1,`styleClass`]},features:[Al([U,{provide:O,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],ngContentSelectors:K,decls:1,vars:0,template:function(e,p){e&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return t})();var _=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[N,XH,XH]})}return t})();var Q=[`*`];var W={root:`p-inputgroupaddon`};var $=(()=>{class t extends Nr{name=`inputgroupaddon`;classes=W;static ɵfac=(()=>{let n;return function(p){return(n||(n=dh(t)))(p||t)}})();static ɵprov=P$1({token:t,factory:t.ɵfac})}return t})();var H=new b(`INPUTGROUPADDON_INSTANCE`);var S=(()=>{class t extends J2{componentName=`InputGroupAddon`;_componentStyle=g($);$pcInputGroupAddon=g(H,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}style=zt();styleClass=zt();static ɵfac=(()=>{let n;return function(p){return(n||(n=dh(t)))(p||t)}})();static ɵcmp=sa({type:t,selectors:[[`p-inputgroup-addon`],[`p-inputGroupAddon`]],hostVars:4,hostBindings:function(e,p){e&2&&(fb(p.style()),hb(p.cn(p.cx(`root`),p.styleClass())))},inputs:{style:[1,`style`],styleClass:[1,`styleClass`]},features:[Al([$,{provide:H,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],ngContentSelectors:Q,decls:1,vars:0,template:function(e,p){e&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return t})();var V=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[S,XH,XH]})}return t})();var wt=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=sa({type:t,selectors:[[`uk-inputgroup-demo`]],decls:31,vars:0,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`type`,`text`,`pInputText`,``,`placeholder`,`Username`],[1,`pi`,`pi-user`],[`type`,`text`,`pInputText`,``,`placeholder`,`Price`],[`type`,`text`,`pInputText`,``,`placeholder`,`Keyword`],[`icon`,`pi pi-search`]],template:function(e,p){e&1&&(Ws(0,`h1`,0),wb(1,`InputGroup`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Text Addon`),wl(),Ws(5,`p-inputGroup`)(6,`p-inputGroupAddon`),wb(7,`@`),wl(),um(8,`input`,3),wl()(),Ws(9,`section`,1)(10,`h2`,2),wb(11,`Icon Addon`),wl(),Ws(12,`p-inputGroup`)(13,`p-inputGroupAddon`),um(14,`i`,4),wl(),um(15,`input`,3),wl()(),Ws(16,`section`,1)(17,`h2`,2),wb(18,`Multiple Addons`),wl(),Ws(19,`p-inputGroup`)(20,`p-inputGroupAddon`),wb(21,`$`),wl(),um(22,`input`,5),Ws(23,`p-inputGroupAddon`),wb(24,`.00`),wl()()(),Ws(25,`section`,1)(26,`h2`,2),wb(27,`Button Addon`),wl(),Ws(28,`p-inputGroup`),um(29,`input`,6)(30,`p-button`,7),wl()())},dependencies:[un,vn,Rt,_,N,V,S,L$1,K$1],encapsulation:2})}}return t})();export{wt as InputGroupDemo};