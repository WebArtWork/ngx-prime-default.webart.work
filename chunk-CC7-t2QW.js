import{$a as zt,Br as em,Da as uw,Hn as XH,Ht as Nr,Jr as g,La as wb,Pr as dh,Q as Ho,S as CT,Z as H_,Zt as P$1,dn as Ro,fr as am,hr as b,ir as Zn,jt as Lm,kn as V,lt as J2,oi as hb,p as Al,ua as sa,yr as bm}from"./chunk-CXRXTJ2s.js";import{n as L,t as F$1}from"./chunk-CerPySWC.js";var A=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }


    /* For ngx-prime (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;var F={root:({instance:e})=>{let g=typeof e.value==`function`?e.value():e.value,i=typeof e.size==`function`?e.size():e.size,d=typeof e.badgeSize==`function`?e.badgeSize():e.badgeSize,t=typeof e.severity==`function`?e.severity():e.severity;return[`p-badge p-component`,{"p-badge-circle":V(g)&&String(g).length===1,"p-badge-dot":Ho(g),"p-badge-sm":i===`small`||d===`small`,"p-badge-lg":i===`large`||d===`large`,"p-badge-xl":i===`xlarge`||d===`xlarge`,"p-badge-info":t===`info`,"p-badge-success":t===`success`,"p-badge-warn":t===`warn`,"p-badge-danger":t===`danger`,"p-badge-secondary":t===`secondary`,"p-badge-contrast":t===`contrast`}]}};var k=(()=>{class e extends Nr{name=`badge`;style=A;classes=F;static ɵfac=(()=>{let i;return function(t){return(i||(i=dh(e)))(t||e)}})();static ɵprov=P$1({token:e,factory:e.ɵfac})}return e})();var T=new b(`BADGE_INSTANCE`);var P=(()=>{class e extends J2{componentName=`Badge`;$pcBadge=g(T,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zt();badgeSize=zt();size=zt();severity=zt();value=zt();badgeDisabled=zt(!1,{transform:CT});_componentStyle=g(k);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let i;return function(t){return(i||(i=dh(e)))(t||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(d,t){d&2&&(am(`data-p`,t.dataP),hb(t.cn(t.cx(`root`),t.styleClass())),bm(`display`,t.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[Al([k,{provide:T,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:1,vars:1,template:function(d,t){d&1&&wb(0),d&2&&Lm(t.value())},dependencies:[XH,F$1],encapsulation:2})}return e})();var ne=(()=>{class e{static ɵfac=function(d){return new(d||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[P,XH,XH]})}return e})();export{ne as n,P as t};