import{$a as zt,$r as gm,$t as Ph,At as Lf,Br as em,Da as uw,Ea as um,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,La as wb,Or as cm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,Si as la,Ta as ua,X as HV,Z as H_,Zt as P,dn as Ro,fr as am,h as Aw,hr as b,ir as Zn,jt as Lm,l as $w,lt as J2,na as qw,oi as hb,p as Al,r as $T,ua as sa,un as Rf}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";var U=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var K=[`*`];function O(a,d){if(a&1&&(Ws(0,`span`,1),wb(1),wl()),a&2){let t=qw();hb(t.cx(`label`)),cm(`pBind`,t.ptm(`label`)),am(`data-p`,t.dataP),MC(),Lm(t.label())}}function Q(a,d){if(a&1&&um(0,`span`,3),a&2){let t=qw(2);hb(t.icon()),cm(`pBind`,t.ptm(`icon`))(`ngClass`,t.cx(`icon`)),am(`data-p`,t.dataP)}}function W(a,d){if(a&1){let t=$w();Ws(0,`img`,5),gm(`error`,function(e){Rf(t);return Lf(qw(3).imageError(e))}),wl()}if(a&2){let t=qw(3);cm(`pBind`,t.ptm(`image`))(`src`,t.image(),Ph),am(`aria-label`,t.ariaLabel())(`data-p`,t.dataP)}}function X(a,d){if(a&1&&Aw(0,W,1,4,`img`,4),a&2)xw(qw(2).image()?0:-1)}function Y(a,d){if(a&1&&Aw(0,Q,1,5,`span`,2)(1,X,1,1),a&2)xw(qw().icon()?0:1)}var Z={root:({instance:a})=>[`p-avatar p-component`,{"p-avatar-image":a.image()!=null,"p-avatar-circle":a.shape()===`circle`,"p-avatar-lg":a.size()===`large`,"p-avatar-xl":a.size()===`xlarge`}],label:`p-avatar-label`,icon:`p-avatar-icon`};var $=(()=>{class a extends Nr{name=`avatar`;style=U;classes=Z;static ɵfac=(()=>{let t;return function(e){return(t||(t=dh(a)))(e||a)}})();static ɵprov=P({token:a,factory:a.ɵfac})}return a})();var G=new b(`AVATAR_INSTANCE`);var aa=(()=>{class a extends J2{componentName=`Avatar`;$pcAvatar=g(G,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=zt();icon=zt();image=zt();size=zt(`normal`);shape=zt(`square`);styleClass=zt();ariaLabel=zt();ariaLabelledBy=zt();onImageError=HV();_componentStyle=g($);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape()]:this.shape(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(e){return(t||(t=dh(a)))(e||a)}})();static ɵcmp=sa({type:a,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,e){n&2&&(am(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`data-p`,e.dataP),hb(e.cn(e.cx(`root`),e.styleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],styleClass:[1,`styleClass`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[Al([$,{provide:G,useExisting:a},{provide:H_,useExisting:a}]),uw([L]),em],ngContentSelectors:K,decls:3,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`,`src`],[3,`error`,`pBind`,`src`]],template:function(n,e){n&1&&(ua(),la(0),Aw(1,O,2,5,`span`,0)(2,Y,2,1)),n&2&&(MC(),xw(e.label()?1:2))},dependencies:[Gl,$T,XH,L],encapsulation:2})}return a})();var ba=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=Ro({type:a});static ɵinj=Zn({imports:[aa,XH,XH]})}return a})();export{ba as n,aa as t};