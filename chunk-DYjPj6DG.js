import{$a as zt,Br as em,Da as uw,Ea as um,Hn as XH,Ht as Nr,Jr as g$1,Kr as fb,La as wb,Pr as dh,Ra as wl,Rn as Ws,Z as H_,Zt as P,dn as Ro,fr as am,hr as b,ir as Zn,ka as v,lt as J2,oi as hb,p as Al,t as $,ua as sa}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";var F=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var _={root:{position:`relative`}};var j={root:({instance:e})=>[`p-skeleton p-component`,{"p-skeleton-circle":e.shape()===`circle`,"p-skeleton-animation-none":e.animation()===`none`}]};var R=(()=>{class e extends Nr{name=`skeleton`;style=F;classes=j;inlineStyles=_;static ɵfac=(()=>{let n;return function(i){return(n||(n=dh(e)))(i||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var T=new b(`SKELETON_INSTANCE`);var g=(()=>{class e extends J2{componentName=`Skeleton`;$pcSkeleton=g$1(T,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g$1(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zt();shape=zt(`rectangle`);animation=zt(`wave`);borderRadius=zt();size=zt();width=zt(`100%`);height=zt(`1rem`);_componentStyle=g$1(R);get containerStyle(){let n=this._componentStyle?.inlineStyles.root,t;return this.$unstyled()||(this.size()?t=$(v({},n),{width:this.size(),height:this.size(),borderRadius:this.borderRadius()}):t=$(v({},n),{width:this.width(),height:this.height(),borderRadius:this.borderRadius()})),t}get dataP(){return this.cn({[this.shape()]:this.shape()})}static ɵfac=(()=>{let n;return function(i){return(n||(n=dh(e)))(i||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-skeleton`]],hostVars:6,hostBindings:function(t,i){t&2&&(am(`aria-hidden`,!0)(`data-p`,i.dataP),fb(i.containerStyle),hb(i.cn(i.cx(`root`),i.styleClass())))},inputs:{styleClass:[1,`styleClass`],shape:[1,`shape`],animation:[1,`animation`],borderRadius:[1,`borderRadius`],size:[1,`size`],width:[1,`width`],height:[1,`height`]},features:[Al([R,{provide:T,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:0,vars:0,template:function(t,i){},dependencies:[XH],encapsulation:2})}return e})();var z=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[g,XH,XH]})}return e})();var Z=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-skeleton-demo`]],decls:16,vars:0,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[1,`demo-section__row`,2,`align-items`,`center`],[`width`,`10rem`,`height`,`1.5rem`],[`shape`,`circle`,`width`,`3rem`,`height`,`3rem`],[`width`,`6rem`,`height`,`6rem`],[2,`display`,`flex`,`flex-direction`,`column`,`gap`,`0.5rem`,`max-width`,`20rem`],[`width`,`100%`,`height`,`10rem`],[`width`,`80%`],[`width`,`60%`]],template:function(t,i){t&1&&(Ws(0,`h1`,0),wb(1,`Skeleton`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Shapes`),wl(),Ws(5,`div`,3),um(6,`p-skeleton`,4)(7,`p-skeleton`,5)(8,`p-skeleton`,6),wl()(),Ws(9,`section`,1)(10,`h2`,2),wb(11,`Card Placeholder`),wl(),Ws(12,`div`,7),um(13,`p-skeleton`,8)(14,`p-skeleton`,9)(15,`p-skeleton`,10),wl()())},dependencies:[z,g],encapsulation:2})}}return e})();export{Z as SkeletonDemo};