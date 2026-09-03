import{$a as zt,$n as ZH,$r as gm,Ar as d2,At as Lf,Bn as X$,Br as em,Da as uw,Dt as L$,Gn as Y$,Ha as xw,Hn as XH,Ht as Nr,In as WT,Ja as z$,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Ln as WV,Nr as da,O as Dm,Or as cm,Ot as LI,P as Ey,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,U as GT,W as GV,Wn as Xw,X as HV,Z as H_,Zt as P,cn as Rb,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ii as h_,ir as Zn,j as Em,ka as v,ki as mH,l as $w,lt as J2,mn as ST,na as qw,ni as hH,oi as hb,or as _e,p as Al,ua as sa,un as Rf,ut as JH}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{r as m}from"./chunk-Br98bhvT.js";import{i as x}from"./chunk-TSmMf5t-.js";import{n as L}from"./chunk-CerPySWC.js";import{n as nt,r as tt}from"./chunk-Cw3svWHP.js";import"./chunk-CC7-t2QW.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import"./chunk-Bc7G3ZMk.js";import{D as Rt,k as vn}from"./main-4W6E6VEG.js";var ke=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`;var Oe=[`content`];var Le=[`*`];var Pe=o=>({closeCallback:o});function Ne(o,V){}function Ee(o,V){o&1&&nm(0,Ne,0,0,`ng-template`)}function Ie(o,V){if(o&1){let e=$w();Ws(0,`div`,1),gm(`click`,function(n){Rf(e);return Lf(qw().onOverlayClick(n))})(`pMotionOnEnter`,function(n){Rf(e);return Lf(qw().onAnimationStart(n))})(`pMotionOnAfterLeave`,function(){Rf(e);return Lf(qw().onAnimationEnd())}),Ws(1,`div`,2),gm(`click`,function(n){Rf(e);return Lf(qw().onContentClick(n))})(`mousedown`,function(n){Rf(e);return Lf(qw().onContentClick(n))}),la(2),nm(3,Ee,1,0,null,3),wl()()}if(o&2){let e=qw();fb(e.sx(`root`)),hb(e.cn(e.cx(`root`),e.styleClass())),cm(`pBind`,e.ptm(`root`))(`ngStyle`,e.style())(`pMotion`,e.overlayVisible)(`pMotionAppear`,!0)(`pMotionOptions`,e.computedMotionOptions()),am(`aria-modal`,e.overlayVisible)(`aria-label`,e.ariaLabel())(`aria-labelledBy`,e.ariaLabelledBy()),MC(),hb(e.cx(`content`)),cm(`pBind`,e.ptm(`content`)),MC(2),cm(`ngTemplateOutlet`,e.contentTemplate()||e._contentTemplate)(`ngTemplateOutletContext`,Rb(17,Pe,e.onCloseClick.bind(e)))}}var Ve={root:()=>({position:`absolute`})};var Ae={root:`p-popover p-component`,content:`p-popover-content`};var Te=(()=>{class o extends Nr{name=`popover`;style=ke;classes=Ae;inlineStyles=Ve;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(o)))(n||o)}})();static ɵprov=P({token:o,factory:o.ɵfac})}return o})();var Me=new b(`POPOVER_INSTANCE`);var I=(()=>{class o extends J2{componentName=`Popover`;$pcPopover=g(Me,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}ariaLabel=zt();ariaLabelledBy=zt();dismissable=zt(!0,{transform:CT});style=zt();styleClass=zt();appendTo=zt(`body`);autoZIndex=zt(!0,{transform:CT});ariaCloseLabel=zt();baseZIndex=zt(0,{transform:ST});focusOnShow=zt(!0,{transform:CT});showTransitionOptions=zt(`.12s cubic-bezier(0, 0, 0.2, 1)`);hideTransitionOptions=zt(`.1s linear`);motionOptions=zt(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));onShow=HV();onHide=HV();$appendTo=da(()=>this.appendTo()||this.config.overlayAppendTo());container;overlayVisible=!1;render=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate=GV(`content`,{descendants:!1});templates=zV(JH);_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=g(Te);zone=g(_e);overlayService=g(ZH);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`content`&&(this._contentTemplate=e.template)})}bindDocumentClickListener(){if(L$(this.platformId)&&!this.documentClickListener){let e=hH()?`touchstart`:`click`,t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,n=>{this.dismissable()&&(!this.container?.contains(n.target)&&this.target!==n.target&&!this.target.contains(n.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,t){this.overlayVisible?(this.hasTargetChanged(e,t)&&(this.destroyCallback=()=>{this.show(null,t||e.currentTarget||e.target)}),this.hide()):this.show(e,t)}show(e,t){t&&e&&e.stopPropagation(),this.container&&!this.overlayVisible&&(this.container=null),this.target=t||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let t=e.target;this.selfClick=e.offsetX<t.clientWidth&&e.offsetY<t.clientHeight}hasTargetChanged(e,t){return this.target!=null&&this.target!==(t||e.currentTarget||e.target)}appendOverlay(){this.$appendTo()&&this.$appendTo()!==`self`&&(this.$appendTo()===`body`?Y$(this.document.body,this.container):Y$(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()&&this.$appendTo()!==`self`&&Y$(this.el.nativeElement,this.container)}setZIndex(){this.autoZIndex()&&m.set(`overlay`,this.container,this.baseZIndex()+this.config.zIndex.overlay)}align(){if(this.target&&this.container){z$(this.container,this.target,!1);let e=h_(this.container),t=h_(this.target),n=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue(`border-radius`),i=0;e.left<t.left&&(i=t.left-e.left-parseFloat(n)*2),this.container.style.setProperty(d2(`popover.arrow.left`).name,`${i}px`),e.top<t.top&&(this.container.setAttribute(`data-p-popover-flipped`,`true`),!this.$unstyled()&&Ey(this.container,`p-popover-flipped`))}}onAnimationStart(e){this.container=e.element,this.container?.setAttribute(this.$attrSelector,``),this.appendOverlay(),this.align(),this.setZIndex(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow()&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)}onAnimationEnd(){this.overlayVisible||(this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.autoZIndex()&&m.clear(this.container),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1,this.container=null)}focus(){let e=X$(this.container,`[autofocus]`);e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(){this.hide()}onWindowResize(){this.overlayVisible&&!mH()&&this.hide()}bindDocumentResizeListener(){if(L$(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,`resize`,this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){L$(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new x(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex()&&m.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(o)))(n||o)}})();static ɵcmp=sa({type:o,selectors:[[`p-popover`]],contentQueries:function(t,n,i){t&1&&Dm(i,n.contentTemplate,Oe,4)(i,n.templates,JH,4),t&2&&Jw(2)},hostBindings:function(t,n){t&1&&gm(`keydown.escape`,function(){return n.onEscapeKeydown()},LI)},inputs:{ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],dismissable:[1,`dismissable`],style:[1,`style`],styleClass:[1,`styleClass`],appendTo:[1,`appendTo`],autoZIndex:[1,`autoZIndex`],ariaCloseLabel:[1,`ariaCloseLabel`],baseZIndex:[1,`baseZIndex`],focusOnShow:[1,`focusOnShow`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],motionOptions:[1,`motionOptions`]},outputs:{onShow:`onShow`,onHide:`onHide`},features:[Al([Te,{provide:Me,useExisting:o},{provide:H_,useExisting:o}]),uw([L]),em],ngContentSelectors:Le,decls:1,vars:1,consts:[[`role`,`dialog`,`pMotionName`,`p-anchored-overlay`,3,`pBind`,`class`,`style`,`ngStyle`,`pMotion`,`pMotionAppear`,`pMotionOptions`],[`role`,`dialog`,`pMotionName`,`p-anchored-overlay`,3,`click`,`pMotionOnEnter`,`pMotionOnAfterLeave`,`pBind`,`ngStyle`,`pMotion`,`pMotionAppear`,`pMotionOptions`],[3,`click`,`mousedown`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(t,n){t&1&&(ua(),Aw(0,Ie,4,19,`div`,0)),t&2&&xw(n.render?0:-1)},dependencies:[Gl,GT,WT,XH,L,nt,tt],encapsulation:2})}return o})();var Se=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=Ro({type:o});static ɵinj=Zn({imports:[I,XH,XH]})}return o})();var He=[`op`];var ht=(()=>{class o{constructor(){this.op=WV.required(`op`)}toggle(e){this.op().toggle(e)}static{this.ɵfac=function(t){return new(t||o)}}static{this.ɵcmp=sa({type:o,selectors:[[`uk-popover-demo`]],viewQuery:function(t,n){t&1&&Em(n.op,He,5),t&2&&Jw()},decls:12,vars:0,consts:[[`op`,``],[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`label`,`Show`,3,`onClick`],[2,`padding`,`0.5rem`,`max-width`,`20rem`],[2,`margin`,`0 0 0.5rem`],[`label`,`Close`,`size`,`small`,3,`onClick`]],template:function(t,n){if(t&1){let i=$w();Ws(0,`h1`,1),wb(1,`Popover`),wl(),Ws(2,`section`,2)(3,`h2`,3),wb(4,`Basic`),wl(),Ws(5,`p-button`,4),gm(`onClick`,function(T){return n.toggle(T)}),wl(),Ws(6,`p-popover`,null,0)(8,`div`,5)(9,`p`,6),wb(10,`Popover content rendered on demand.`),wl(),Ws(11,`p-button`,7),gm(`onClick`,function(){Rf(i);return Lf(Xw(7).hide())}),wl()()()()}},dependencies:[vn,Rt,Se,I],encapsulation:2})}}return o})();export{ht as PopoverDemo};