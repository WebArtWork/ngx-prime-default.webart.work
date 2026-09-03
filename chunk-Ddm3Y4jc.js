import{$a as zt,$r as gm,At as Lf,Br as em,Bt as Nb,Da as uw,Ea as um,Et as Kw,Ga as ym,Gn as Y$,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Ln as WV,Lt as My,Nr as da,O as Dm,Or as cm,P as Ey,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,Tn as UV,U as GT,W as GV,X as HV,Z as H_,Zt as P,dn as Ro,en as Pm,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,jt as Lm,ka as v,l as $w,lt as J2,mn as ST,na as qw,nr as Zb,oi as hb,on as Qw,ot as Iy,p as Al,pi as jm,qr as fm,r as $T,s as $t$1,ua as sa,un as Rf,ut as JH}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{r as m}from"./chunk-Br98bhvT.js";import{n as O,t as L}from"./chunk-TSmMf5t-.js";import{n as L$1}from"./chunk-CerPySWC.js";import{n as nt$1,r as tt$1}from"./chunk-Cw3svWHP.js";import"./chunk-CC7-t2QW.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import"./chunk-Bc7G3ZMk.js";import{A as f,D as Rt,M as x,j as C,k as vn}from"./main-4W6E6VEG.js";var Ve=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Oe=[`header`];var ze=[`content`];var Pe=[`closeicon`];var Fe=[`footer`];var $e=[`headless`];var We=[`container`];var Ze=[`closeButton`];var je=[`*`];function Re(t,c){t&1&&fm(0)}function Qe(t,c){if(t&1&&nm(0,Re,1,0,`ng-container`,4),t&2){let e=qw(2);cm(`ngTemplateOutlet`,e.headlessTemplate||e._headlessTemplate)}}function qe(t,c){t&1&&fm(0)}function He(t,c){if(t&1&&(Ws(0,`div`,8),wb(1),wl()),t&2){let e=qw(3);hb(e.cx(`title`)),cm(`pBind`,e.ptm(`title`)),MC(),Lm(e.header())}}function Ge(t,c){t&1&&(qf(),um(0,`svg`,10)),t&2&&am(`data-pc-section`,`closeicon`)}function Ke(t,c){}function Ue(t,c){t&1&&nm(0,Ke,0,0,`ng-template`)}function Je(t,c){if(t&1&&(Aw(0,Ge,1,1,`:svg:svg`,10),nm(1,Ue,1,0,null,4)),t&2){let e=qw(4);xw(!e.closeIconTemplate()&&!e._closeIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.closeIconTemplate()||e._closeIconTemplate)}}function Xe(t,c){if(t&1){let e=$w();Ws(0,`p-button`,9),gm(`onClick`,function(n){Rf(e);return Lf(qw(3).close(n))})(`keydown.enter`,function(n){Rf(e);return Lf(qw(3).close(n))}),nm(1,Je,2,2,`ng-template`,null,1,Zb),wl()}if(t&2){let e=qw(3);cm(`pt`,e.ptm(`pcCloseButton`))(`ngClass`,e.cx(`pcCloseButton`))(`buttonProps`,e.closeButtonProps())(`ariaLabel`,e.ariaCloseLabel())(`unstyled`,e.unstyled()),am(`data-pc-group-section`,`iconcontainer`)}}function Ye(t,c){t&1&&fm(0)}function et(t,c){t&1&&fm(0)}function tt(t,c){if(t&1&&(Ws(0,`div`,5),nm(1,et,1,0,`ng-container`,4),wl()),t&2){let e=qw(3);cm(`pBind`,e.ptm(`footer`))(`ngClass`,e.cx(`footer`)),am(`data-pc-section`,`footer`),MC(),cm(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function nt(t,c){if(t&1&&(Ws(0,`div`,5),nm(1,qe,1,0,`ng-container`,4),Aw(2,He,2,4,`div`,6),Aw(3,Xe,3,6,`p-button`,7),wl(),Ws(4,`div`,5),la(5),nm(6,Ye,1,0,`ng-container`,4),wl(),Aw(7,tt,2,4,`div`,5)),t&2){let e=qw(2);cm(`pBind`,e.ptm(`header`))(`ngClass`,e.cx(`header`)),am(`data-pc-section`,`header`),MC(),cm(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate),MC(),xw(e.header()?2:-1),MC(),xw(e.showCloseIcon()&&e.closable()?3:-1),MC(),cm(`pBind`,e.ptm(`content`))(`ngClass`,e.cx(`content`)),am(`data-pc-section`,`content`),MC(2),cm(`ngTemplateOutlet`,e.contentTemplate()||e._contentTemplate),MC(),xw(e.footerTemplate||e._footerTemplate?7:-1)}}function it(t,c){if(t&1){let e=$w();Ws(0,`div`,3,0),gm(`pMotionOnBeforeEnter`,function(n){Rf(e);return Lf(qw().onBeforeEnter(n))})(`pMotionOnAfterLeave`,function(n){Rf(e);return Lf(qw().onAfterLeave(n))})(`keydown`,function(n){Rf(e);return Lf(qw().onKeyDown(n))}),Aw(2,Qe,1,1,`ng-container`)(3,nt,8,11),wl()}if(t&2){let e=qw();fb(e.style()),hb(e.cn(e.cx(`root`),e.styleClass())),cm(`pBind`,e.ptm(`root`))(`pMotion`,e.visible())(`pMotionAppear`,!0)(`pMotionEnterActiveClass`,e.$enterAnimation())(`pMotionLeaveActiveClass`,e.$leaveAnimation())(`pMotionOptions`,e.computedMotionOptions()),am(`data-p`,e.dataP)(`data-p-open`,e.visible()),MC(2),xw(e.headlessTemplate||e._headlessTemplate?2:3)}}var ot=`
${Ve}

/** For ngx-prime **/
.p-drawer {
    position: fixed;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-end-width: 1px;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-start-width: 1px;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

/* Animations */
.p-drawer-enter-left {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-left {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-right {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-right {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-top {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-top {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-bottom {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-bottom {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-full {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-full {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`;var at={mask:({instance:t})=>[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":t.modal()},{"p-drawer-full":t.fullScreen()}],root:({instance:t})=>[`p-drawer p-component`,{"p-drawer-full":t.fullScreen(),"p-drawer-open":t.visible()},`p-drawer-${t.position()}`],header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`};var Ne=(()=>{class t extends Nr{name=`drawer`;style=ot;classes=at;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var Ie=new b(`DRAWER_INSTANCE`);var H=(()=>{class t extends J2{componentName=`Drawer`;$pcDrawer=g(Ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L$1,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}appendTo=zt(void 0);motionOptions=zt(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));blockScroll=zt(!1,{transform:CT});style=zt();styleClass=zt();ariaCloseLabel=zt();autoZIndex=zt(!0,{transform:CT});baseZIndex=zt(0,{transform:ST});modal=zt(!0,{transform:CT});closeButtonProps=zt({severity:`secondary`,text:!0,rounded:!0});dismissible=zt(!0,{transform:CT});showCloseIcon=zt(!0,{transform:CT});closeOnEscape=zt(!0,{transform:CT});transitionOptions=zt(`150ms cubic-bezier(0, 0, 0.2, 1)`);visible=UV(!1);position=zt(`left`);fullScreen=zt(!1);$enterAnimation=da(()=>this.fullScreen()?`p-drawer-enter-full`:`p-drawer-enter-${this.position()}`);$leaveAnimation=da(()=>this.fullScreen()?`p-drawer-leave-full`:`p-drawer-leave-${this.position()}`);header=zt();maskStyle=zt();closable=zt(!0,{transform:CT});onShow=HV();onHide=HV();containerViewChild=WV(`container`);closeButtonViewChild=WV(`closeButton`);initialized;_position=`left`;_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=g(Ne);constructor(){super(),$t$1(()=>{this.visible()&&!this.modalVisible&&(this.modalVisible=!0)})}onAfterViewInit(){this.initialized=!0}headerTemplate=GV(`header`,{descendants:!1});footerTemplate;contentTemplate=GV(`content`,{descendants:!1});closeIconTemplate=GV(`closeicon`,{descendants:!1});headlessTemplate;$appendTo=da(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates=zV(JH);onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`content`:this._contentTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break;case`headless`:this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code===`Escape`&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,``),this.autoZIndex()&&m.set(`modal`,this.container,this.baseZIndex()||this.config.zIndex.modal),this.modal()&&this.enableModality(),this.onShow.emit({}),this.visible.set(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal()&&this.disableModality()}close(e){this.hide(),this.visible.set(!1),this.cd.markForCheck(),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(`[data-p-open="true"]`),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement(`div`),this.mask){let o=`z-index: ${n};${this.getMaskStyle()}`;My(this.mask,`style`,o),My(this.mask,`data-p`,this.dataP),Ey(this.mask,this.cx(`mask`))}this.dismissible()&&(this.maskClickListener=this.renderer.listen(this.mask,`click`,o=>{this.dismissible()&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll()&&L()}}getMaskStyle(){let e=this.maskStyle();return e?Object.entries(e).map(([i,n])=>`${i}: ${n}`).join(`; `):``}disableModality(){this.mask&&(!this.$unstyled()&&Iy(this.mask,`p-overlay-mask-enter-active`),!this.$unstyled()&&Ey(this.mask,`p-overlay-mask-leave-active`),this.animationEndListener=this.renderer.listen(this.mask,`animationend`,this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll()&&O(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape()&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),m.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!==`self`&&(this.$appendTo()===`body`?Y$(this.document.body,this.container):Y$(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,`keydown`,i=>{i.which==27&&parseInt(this.container?.style.zIndex)===m.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible()&&this.modal()&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex()&&m.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()===`full`,[this.position()]:this.position(),open:this.visible(),modal:this.modal()})}static ɵfac=function(i){return new(i||t)};static ɵcmp=sa({type:t,selectors:[[`p-drawer`]],contentQueries:function(i,n,o){if(i&1&&(Dm(o,n.headerTemplate,Oe,4)(o,n.contentTemplate,ze,4)(o,n.closeIconTemplate,Pe,4)(o,n.templates,JH,4),ym(o,Fe,4)(o,$e,4)),i&2){Jw(4);let r;Kw(r=Qw())&&(n.footerTemplate=r.first),Kw(r=Qw())&&(n.headlessTemplate=r.first)}},viewQuery:function(i,n){i&1&&Em(n.containerViewChild,We,5)(n.closeButtonViewChild,Ze,5),i&2&&Jw(2)},inputs:{appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`],blockScroll:[1,`blockScroll`],style:[1,`style`],styleClass:[1,`styleClass`],ariaCloseLabel:[1,`ariaCloseLabel`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],modal:[1,`modal`],closeButtonProps:[1,`closeButtonProps`],dismissible:[1,`dismissible`],showCloseIcon:[1,`showCloseIcon`],closeOnEscape:[1,`closeOnEscape`],transitionOptions:[1,`transitionOptions`],visible:[1,`visible`],position:[1,`position`],fullScreen:[1,`fullScreen`],header:[1,`header`],maskStyle:[1,`maskStyle`],closable:[1,`closable`]},outputs:{visible:`visibleChange`,onShow:`onShow`,onHide:`onHide`},features:[Al([Ne,{provide:Ie,useExisting:t},{provide:H_,useExisting:t}]),uw([L$1]),em],ngContentSelectors:je,decls:1,vars:1,consts:[[`container`,``],[`icon`,``],[`role`,`complementary`,`pFocusTrap`,``,3,`pBind`,`pMotion`,`pMotionAppear`,`pMotionEnterActiveClass`,`pMotionLeaveActiveClass`,`pMotionOptions`,`class`,`style`],[`role`,`complementary`,`pFocusTrap`,``,3,`pMotionOnBeforeEnter`,`pMotionOnAfterLeave`,`keydown`,`pBind`,`pMotion`,`pMotionAppear`,`pMotionEnterActiveClass`,`pMotionLeaveActiveClass`,`pMotionOptions`],[4,`ngTemplateOutlet`],[3,`pBind`,`ngClass`],[3,`pBind`,`class`],[3,`pt`,`ngClass`,`buttonProps`,`ariaLabel`,`unstyled`],[3,`pBind`],[3,`onClick`,`keydown.enter`,`pt`,`ngClass`,`buttonProps`,`ariaLabel`,`unstyled`],[`data-p-icon`,`times`]],template:function(i,n){i&1&&(ua(),Aw(0,it,4,13,`div`,2)),i&2&&xw(n.modalVisible?0:-1)},dependencies:[Gl,$T,GT,Rt,f,XH,L$1,x,C,nt$1,tt$1],encapsulation:2})}return t})();var Be=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[H,XH,XH]})}return t})();var $t=(()=>{class t{constructor(){this.leftVisible=ne(!1),this.rightVisible=ne(!1),this.topVisible=ne(!1),this.fullVisible=ne(!1)}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=sa({type:t,selectors:[[`uk-drawer-demo`]],decls:22,vars:5,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[1,`demo-section__row`],[`label`,`Left`,3,`onClick`],[`label`,`Right`,3,`onClick`],[`label`,`Top`,3,`onClick`],[`label`,`Full Screen`,3,`onClick`],[`header`,`Left Drawer`,3,`visibleChange`,`visible`],[2,`margin`,`0`],[`position`,`right`,`header`,`Right Drawer`,3,`visibleChange`,`visible`],[`position`,`top`,`header`,`Top Drawer`,3,`visibleChange`,`visible`],[`header`,`Full Screen Drawer`,3,`visibleChange`,`visible`,`fullScreen`]],template:function(i,n){i&1&&(Ws(0,`h1`,0),wb(1,`Drawer`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Positions`),wl(),Ws(5,`div`,3)(6,`p-button`,4),gm(`onClick`,function(){return n.leftVisible.set(!0)}),wl(),Ws(7,`p-button`,5),gm(`onClick`,function(){return n.rightVisible.set(!0)}),wl(),Ws(8,`p-button`,6),gm(`onClick`,function(){return n.topVisible.set(!0)}),wl(),Ws(9,`p-button`,7),gm(`onClick`,function(){return n.fullVisible.set(!0)}),wl()(),Ws(10,`p-drawer`,8),jm(`visibleChange`,function(r){return Nb(n.leftVisible,r)||(n.leftVisible=r),r}),Ws(11,`p`,9),wb(12,`Drawer content slides in from the left.`),wl()(),Ws(13,`p-drawer`,10),jm(`visibleChange`,function(r){return Nb(n.rightVisible,r)||(n.rightVisible=r),r}),Ws(14,`p`,9),wb(15,`Drawer content slides in from the right.`),wl()(),Ws(16,`p-drawer`,11),jm(`visibleChange`,function(r){return Nb(n.topVisible,r)||(n.topVisible=r),r}),Ws(17,`p`,9),wb(18,`Drawer content slides in from the top.`),wl()(),Ws(19,`p-drawer`,12),jm(`visibleChange`,function(r){return Nb(n.fullVisible,r)||(n.fullVisible=r),r}),Ws(20,`p`,9),wb(21,`Full screen drawer content.`),wl()()()),i&2&&(MC(10),Pm(`visible`,n.leftVisible),MC(3),Pm(`visible`,n.rightVisible),MC(3),Pm(`visible`,n.topVisible),MC(3),Pm(`visible`,n.fullVisible),cm(`fullScreen`,!0))},dependencies:[vn,Rt,Be,H],encapsulation:2})}}return t})();export{$t as DrawerDemo};