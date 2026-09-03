import{Br as em,Ea as um,Ht as Nr,Jr as g,La as wb,Or as cm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,Si as la,Ta as ua,Zt as P,dn as Ro,ir as Zn,lt as J2,p as Al,ua as sa,vr as bl,xn as Tl}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import"./chunk-TSmMf5t-.js";import"./chunk-CerPySWC.js";import"./chunk-CC7-t2QW.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import"./chunk-Bc7G3ZMk.js";import{D as Rt,k as vn}from"./main-4W6E6VEG.js";var F=`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`;var k=[`*`];var w=`
    ${F}

    /* For ngx-prime */
    .p-buttongroup p-button:focus .p-button {
        position: relative;
        z-index: 1;
    }

    .p-buttongroup p-button:not(:last-child) .p-button,
    .p-buttongroup p-button:not(:last-child) .p-button:hover {
        border-right: 0 none;
    }

    .p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button {
        border-radius: 0;
    }

    .p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }
`;var N={root:`p-buttongroup p-component`};var C=(()=>{class t extends Nr{name=`buttongroup`;style=w;classes=N;static ɵfac=(()=>{let o;return function(i){return(o||(o=dh(t)))(i||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var E=(()=>{class t extends J2{componentName=`ButtonGroup`;_componentStyle=g(C);static ɵfac=(()=>{let o;return function(i){return(o||(o=dh(t)))(i||t)}})();static ɵcmp=sa({type:t,selectors:[[`p-buttonGroup`],[`p-buttongroup`],[`p-button-group`]],features:[Al([C]),em],ngContentSelectors:k,decls:2,vars:0,consts:[[`role`,`group`,1,`p-buttongroup`,`p-component`]],template:function(e,i){e&1&&(ua(),bl(0,`span`,0),la(1),Tl())},encapsulation:2})}return t})();var j=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({})}return t})();var R=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=sa({type:t,selectors:[[`uk-buttongroup-demo`]],decls:16,vars:3,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`label`,`Save`,`icon`,`pi pi-check`],[`label`,`Delete`,`icon`,`pi pi-trash`],[`label`,`Cancel`,`icon`,`pi pi-times`],[`label`,`1`,3,`outlined`],[`label`,`2`,3,`outlined`],[`label`,`3`,3,`outlined`]],template:function(e,i){e&1&&(Ws(0,`h1`,0),wb(1,`ButtonGroup`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),Ws(5,`p-buttonGroup`),um(6,`p-button`,3)(7,`p-button`,4)(8,`p-button`,5),wl()(),Ws(9,`section`,1)(10,`h2`,2),wb(11,`Outlined`),wl(),Ws(12,`p-buttonGroup`),um(13,`p-button`,6)(14,`p-button`,7)(15,`p-button`,8),wl()()),e&2&&(MC(13),cm(`outlined`,!0),MC(),cm(`outlined`,!0),MC(),cm(`outlined`,!0))},dependencies:[vn,Rt,j,E],encapsulation:2})}}return t})();export{R as ButtonGroupDemo};