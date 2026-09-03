import{$a as zt,Br as em,Da as uw,Hn as XH,Ht as Nr,Jr as g,Kr as fb,Or as cm,Pr as dh,Ra as wl,Rn as Ws,Si as la,Ta as ua,Z as H_,Zt as P,dn as Ro,fr as am,hr as b,ir as Zn,lt as J2,oi as hb,p as Al,ua as sa}from"./chunk-CXRXTJ2s.js";import{n as L,t as F$1}from"./chunk-CerPySWC.js";var S=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var F=[`*`];var w={root:({instance:e})=>({justifyContent:e.layout()===`horizontal`?e.align()===`center`||e.align()==null?`center`:e.align()===`left`?`flex-start`:e.align()===`right`?`flex-end`:null:null,alignItems:e.layout()===`vertical`?e.align()===`center`||e.align()==null?`center`:e.align()===`top`?`flex-start`:e.align()===`bottom`?`flex-end`:null:null})};var A={root:({instance:e})=>[`p-divider p-component`,`p-divider-`+e.layout(),`p-divider-`+e.type(),{"p-divider-left":e.layout()===`horizontal`&&(!e.align()||e.align()===`left`)},{"p-divider-center":e.layout()===`horizontal`&&e.align()===`center`},{"p-divider-right":e.layout()===`horizontal`&&e.align()===`right`},{"p-divider-top":e.layout()===`vertical`&&e.align()===`top`},{"p-divider-center":e.layout()===`vertical`&&(!e.align()||e.align()===`center`)},{"p-divider-bottom":e.layout()===`vertical`&&e.align()===`bottom`}],content:`p-divider-content`};var j=(()=>{class e extends Nr{name=`divider`;style=S;classes=A;inlineStyles=w;static ɵfac=(()=>{let i;return function(t){return(i||(i=dh(e)))(t||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var E=new b(`DIVIDER_INSTANCE`);var T=(()=>{class e extends J2{componentName=`Divider`;$pcDivider=g(E,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zt();layout=zt(`horizontal`);type=zt(`solid`);align=zt();_componentStyle=g(j);get dataP(){return this.cn({[this.align()]:this.align(),[this.layout()]:this.layout(),[this.type()]:this.type()})}static ɵfac=(()=>{let i;return function(t){return(i||(i=dh(e)))(t||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-divider`]],hostAttrs:[`role`,`separator`],hostVars:6,hostBindings:function(n,t){n&2&&(am(`aria-orientation`,t.layout())(`data-p`,t.dataP),fb(t.sx(`root`)),hb(t.cn(t.cx(`root`),t.styleClass())))},inputs:{styleClass:[1,`styleClass`],layout:[1,`layout`],type:[1,`type`],align:[1,`align`]},features:[Al([j,{provide:E,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:F,decls:2,vars:3,consts:[[3,`pBind`]],template:function(n,t){n&1&&(ua(),Ws(0,`div`,0),la(1),wl()),n&2&&(hb(t.cx(`content`)),cm(`pBind`,t.ptm(`content`)))},dependencies:[XH,F$1,L],encapsulation:2})}return e})();var W=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[T,F$1,F$1]})}return e})();export{W as n,T as t};