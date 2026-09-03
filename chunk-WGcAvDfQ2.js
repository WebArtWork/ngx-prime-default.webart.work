import{$a as zt$1,$n as ZH,$r as gm,At as Lf,Bn as X$,Br as em,Da as uw,Ea as um,En as Ue,Et as Kw,Fr as e2,Ga as ym,Gn as Y$,H as GH,Ha as xw,Hn as XH,Ht as Nr,Ii as ne$1,In as WT,Ja as z$,Jr as g,K as Gl,La as wb,Li as nm,Ln as WV,Lr as eH,Mn as Vo,Nr as da,O as Dm,Or as cm,Ot as LI,P as Ey,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,U as GT,W as GV,Z as H_,Zt as P,ai as ha,cn as Rb,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ii as h_,ir as Zn,j as Em,jt as Lm,ka as v,ki as mH,l as $w,lt as J2,mn as ST,mr as at,na as qw,ni as hH,nr as Zb,oi as hb,on as Qw,p as Al,qa as yt,qr as fm,s as $t$1,ua as sa,un as Rf,ut as JH,xa as te$1}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{r as m}from"./chunk-Br98bhvT.js";import{i as x}from"./chunk-TSmMf5t-.js";import{n as L}from"./chunk-CerPySWC.js";import{n as nt,r as tt}from"./chunk-Cw3svWHP.js";import"./chunk-CC7-t2QW.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import"./chunk-Bc7G3ZMk.js";import{D as Rt,j as C,k as vn}from"./main-4W6E6VEG.js";var It=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
        will-change: transform;
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`;var zt=[`accepticon`];var Zt=[`rejecticon`];var $t=[`content`];var Ht=[`headless`];var Qt=[`acceptButton`];var qt=[`rejectButton`];var Nt=e=>({$implicit:e});function Ut(e,r){e&1&&fm(0)}function Kt(e,r){if(e&1&&nm(0,Ut,1,0,`ng-container`,4),e&2){let t=qw(2);cm(`ngTemplateOutlet`,t.headlessTemplate||t._headlessTemplate)(`ngTemplateOutletContext`,Rb(2,Nt,t.confirmation))}}function Wt(e,r){e&1&&fm(0)}function Jt(e,r){if(e&1&&nm(0,Wt,1,0,`ng-container`,4),e&2){let t=qw(3);cm(`ngTemplateOutlet`,t.contentTemplate||t._contentTemplate)(`ngTemplateOutletContext`,Rb(2,Nt,t.confirmation))}}function Gt(e,r){if(e&1&&um(0,`i`,5),e&2){let t=qw(4);hb(t.cx(`icon`)),cm(`pBind`,t.ptm(`icon`))}}function Xt(e,r){if(e&1&&(Aw(0,Gt,1,3,`i`,8),Ws(1,`span`,5),wb(2),wl()),e&2){let t=qw(3);xw(t.confirmation?.icon?0:-1),MC(),hb(t.cx(`message`)),cm(`pBind`,t.ptm(`message`)),MC(),Lm(t.confirmation?.message)}}function Yt(e,r){if(e&1&&um(0,`i`),e&2)hb(qw(5).confirmation?.rejectIcon)}function te(e,r){e&1&&fm(0)}function ee(e,r){if(e&1&&nm(0,te,1,0,`ng-container`,11),e&2){let t=qw(5);cm(`ngTemplateOutlet`,t.rejectIconTemplate()||t._rejectIconTemplate)}}function ne(e,r){if(e&1&&Aw(0,Yt,1,2,`i`,10)(1,ee,1,1,`ng-container`),e&2)xw(qw(4).confirmation?.rejectIcon?0:1)}function ie(e,r){if(e&1){let t=$w();Ws(0,`p-button`,9),gm(`onClick`,function(){Rf(t);return Lf(qw(3).onReject())}),nm(1,ne,2,1,`ng-template`,null,1,Zb),wl()}if(e&2){let t=qw(3);hb(t.cx(`pcRejectButton`)),cm(`label`,t.rejectButtonLabel)(`pt`,t.ptm(`pcRejectButton`))(`styleClass`,t.confirmation?.rejectButtonStyleClass)(`size`,t.confirmation?.rejectButtonProps?.size||`small`)(`text`,t.confirmation?.rejectButtonProps?.text||!1)(`buttonProps`,t.getRejectButtonProps())(`autofocus`,t.autoFocusReject)(`unstyled`,t.unstyled()),am(`aria-label`,t.rejectButtonLabel)}}function oe(e,r){if(e&1&&um(0,`i`),e&2)hb(qw(5).confirmation?.acceptIcon)}function re(e,r){e&1&&fm(0)}function ce(e,r){if(e&1&&nm(0,re,1,0,`ng-container`,11),e&2){let t=qw(5);cm(`ngTemplateOutlet`,t.acceptIconTemplate()||t._acceptIconTemplate)}}function ae(e,r){if(e&1&&Aw(0,oe,1,2,`i`,10)(1,ce,1,1,`ng-container`),e&2)xw(qw(4).confirmation?.acceptIcon?0:1)}function pe(e,r){if(e&1){let t=$w();Ws(0,`p-button`,12),gm(`onClick`,function(){Rf(t);return Lf(qw(3).onAccept())}),nm(1,ae,2,1,`ng-template`,null,1,Zb),wl()}if(e&2){let t=qw(3);hb(t.cx(`pcAcceptButton`)),cm(`label`,t.acceptButtonLabel)(`pt`,t.ptm(`pcAcceptButton`))(`styleClass`,t.confirmation?.acceptButtonStyleClass)(`size`,t.confirmation?.acceptButtonProps?.size||`small`)(`buttonProps`,t.getAcceptButtonProps())(`autofocus`,t.autoFocusAccept)(`unstyled`,t.unstyled()),am(`aria-label`,t.acceptButtonLabel)}}function se(e,r){if(e&1&&(Ws(0,`div`,5,0),Aw(2,Jt,1,4,`ng-container`)(3,Xt,3,5),wl(),Ws(4,`div`,5),Aw(5,ie,3,11,`p-button`,6),Aw(6,pe,3,10,`p-button`,7),wl()),e&2){let t=qw(2);hb(t.cx(`content`)),cm(`pBind`,t.ptm(`content`)),MC(2),xw(t.contentTemplate||t._contentTemplate?2:3),MC(2),hb(t.cx(`footer`)),cm(`pBind`,t.ptm(`footer`)),MC(),xw(t.confirmation?.rejectVisible!==!1?5:-1),MC(),xw(t.confirmation?.acceptVisible!==!1?6:-1)}}function le(e,r){if(e&1){let t=$w();Ws(0,`div`,3),gm(`pMotionOnBeforeEnter`,function(n){Rf(t);return Lf(qw().onBeforeEnter(n))})(`pMotionOnAfterLeave`,function(){Rf(t);return Lf(qw().onAfterLeave())})(`click`,function(n){Rf(t);return Lf(qw().onOverlayClick(n))}),Aw(1,Kt,1,4,`ng-container`)(2,se,7,9),wl()}if(e&2){let t=qw();hb(t.cn(t.cx(`root`),t.styleClass())),cm(`pMotion`,t.computedVisible())(`pMotionAppear`,!0)(`pMotionName`,`p-anchored-overlay`)(`pMotionOptions`,t.computedMotionOptions())(`pBind`,t.ptm(`root`))(`ngStyle`,t.style()),MC(),xw(t.headlessTemplate||t._headlessTemplate?1:2)}}var de={root:()=>[`p-confirmpopup p-component`],content:`p-confirmpopup-content`,icon:({instance:e})=>[`p-confirmpopup-icon`,e.confirmation?.icon],message:`p-confirmpopup-message`,footer:`p-confirmpopup-footer`,pcRejectButton:`p-confirmpopup-reject-button`,pcAcceptButton:`p-confirmpopup-accept-button`};var Lt=(()=>{class e extends Nr{name=`confirmpopup`;style=It;classes=de;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var At=new b(`CONFIRMPOPUP_INSTANCE`);var X=(()=>{class e extends J2{el=g(Ue);confirmationService=g(GH);renderer=g(yt);cd=g(ha);overlayService=g(ZH);document=g(te$1);componentName=`ConfirmPopup`;$pcConfirmPopup=g(At,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}key=zt$1();defaultFocus=zt$1(`accept`);showTransitionOptions=zt$1(`.12s cubic-bezier(0, 0, 0.2, 1)`);hideTransitionOptions=zt$1(`.1s linear`);autoZIndex=zt$1(!0,{transform:CT});baseZIndex=zt$1(0,{transform:ST});style=zt$1();styleClass=zt$1();visible=zt$1();_visible=ne$1(!1);computedVisible=da(()=>this.visible()??this._visible());render=ne$1(!1);motionOptions=zt$1(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));appendTo=zt$1(`body`);$appendTo=da(()=>this.appendTo()||this.config.overlayAppendTo());container;subscription;confirmation;autoFocusAccept=!1;autoFocusReject=!1;contentTemplate;acceptIconTemplate=GV(`accepticon`,{descendants:!1});rejectIconTemplate=GV(`rejecticon`,{descendants:!1});headlessTemplate;acceptButtonViewChild=WV(`acceptButton`,{read:Ue});rejectButtonViewChild=WV(`rejectButton`,{read:Ue});_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=g(Lt);constructor(){super(),this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(t=>{if(!t){this.hide();return}this.computedVisible()&&requestAnimationFrame(()=>{this.alignOverlay(),this.cd.markForCheck()}),t.key===this.key()&&(this.confirmation=t,Object.keys(t).forEach(n=>{n===`key`||n===`defaultFocus`||(this[n]=t[n])}),this.confirmation.accept&&(this.confirmation.acceptEvent=new at,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new at,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this._visible.set(!0))}),$t$1(()=>{this.computedVisible()&&Vo(()=>{this.render()||this.render.set(!0)})})}templates=zV(JH);onAfterContentInit(){this.templates()?.forEach(t=>{switch(t.getType()){case`content`:this._contentTemplate=t.template;break;case`rejecticon`:this._rejectIconTemplate=t.template;break;case`accepticon`:this._acceptIconTemplate=t.template;break;case`headless`:this._headlessTemplate=t.template;break}})}option(t,i){let n=this;if(Object.prototype.hasOwnProperty.call(n,t))return i?n[i]:n[t]}onEscapeKeydown(){this.confirmation&&this.confirmation.closeOnEscape!==!1&&this.onReject()}onBeforeEnter(t){if(this.confirmation){let i=this.confirmation.defaultFocus??this.defaultFocus();this.autoFocusAccept=i===`accept`,this.autoFocusReject=i===`reject`}this.container=t.element,this.appendOverlay(),this.alignOverlay(),this.alignArrow(),this.setZIndex(),this.handleFocus(),this.bindListeners()}handleFocus(){let t=this.defaultFocus();t&&(this.acceptButtonViewChild()||this.rejectButtonViewChild())&&(t===`accept`?X$(this.acceptButtonViewChild()?.nativeElement,`[data-pc-section="root"]`):X$(this.rejectButtonViewChild()?.nativeElement,`[data-pc-section="root"]`)).focus()}onAfterLeave(){this.autoFocusAccept=!1,this.autoFocusReject=!1,this.restoreAppend(),this.onContainerDestroy()}getAcceptButtonProps(){return this.option(`acceptButtonProps`)}getRejectButtonProps(){return this.option(`rejectButtonProps`)}alignOverlay(){!this.confirmation||!this.confirmation.target||z$(this.container,this.confirmation?.target,!1)}setZIndex(){this.autoZIndex()&&m.set(`overlay`,this.container,this.config.zIndex.overlay)}alignArrow(){let t=h_(this.container),i=h_(this.confirmation?.target),n=0;t&&i&&t.left<i.left&&(n=i.left-t.left),this.container&&this.container.style.setProperty(`--p-confirmpopup-arrow-left`,`${n}px`),t&&i&&t.top<i.top&&(this.container.setAttribute(`data-p-confirmpopup-flipped`,`true`),!this.$unstyled()&&Ey(this.container,`p-confirm-popup-flipped`))}appendOverlay(){this.$appendTo()&&this.$appendTo()!==`self`&&(this.$appendTo()===`body`?Y$(this.document.body,this.container):Y$(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()!==`self`&&Y$(this.el.nativeElement,this.container),this.onContainerDestroy()}hide(){this._visible.set(!1)}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(),eH(this.confirmation?.target)}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),eH(this.confirmation?.target)}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=hH()?`touchstart`:`click`,i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,t,n=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let c=this.confirmation.target;this.container!==n.target&&!this.container?.contains(n.target)&&c!==n.target&&!c.contains(n.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.computedVisible()&&!mH()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,`resize`,this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new x(this.confirmation?.target,()=>{this.computedVisible()&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex()&&m.clear(this.container),this.confirmation=null,this.render.set(!1),this.container=null}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(e2.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(e2.REJECT)}onDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static ɵfac=function(i){return new(i||e)};static ɵcmp=sa({type:e,selectors:[[`p-confirmpopup`]],contentQueries:function(i,n,c){if(i&1&&(Dm(c,n.acceptIconTemplate,zt,4)(c,n.rejectIconTemplate,Zt,4)(c,n.templates,JH,4),ym(c,$t,4)(c,Ht,4)),i&2){Jw(3);let b;Kw(b=Qw())&&(n.contentTemplate=b.first),Kw(b=Qw())&&(n.headlessTemplate=b.first)}},viewQuery:function(i,n){i&1&&Em(n.acceptButtonViewChild,Qt,5,Ue)(n.rejectButtonViewChild,qt,5,Ue),i&2&&Jw(2)},hostBindings:function(i,n){i&1&&gm(`keydown.escape`,function(){return n.onEscapeKeydown()},LI)},inputs:{key:[1,`key`],defaultFocus:[1,`defaultFocus`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],style:[1,`style`],styleClass:[1,`styleClass`],visible:[1,`visible`],motionOptions:[1,`motionOptions`],appendTo:[1,`appendTo`]},features:[Al([Lt,{provide:At,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:1,vars:1,consts:[[`content`,``],[`icon`,``],[`pFocusTrap`,``,`role`,`alertdialog`,3,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`,`pBind`,`class`,`ngStyle`],[`pFocusTrap`,``,`role`,`alertdialog`,3,`pMotionOnBeforeEnter`,`pMotionOnAfterLeave`,`click`,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`,`pBind`,`ngStyle`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`],[`type`,`button`,3,`label`,`pt`,`class`,`styleClass`,`size`,`text`,`buttonProps`,`autofocus`,`unstyled`],[`type`,`button`,3,`label`,`pt`,`class`,`styleClass`,`size`,`buttonProps`,`autofocus`,`unstyled`],[3,`pBind`,`class`],[`type`,`button`,3,`onClick`,`label`,`pt`,`styleClass`,`size`,`text`,`buttonProps`,`autofocus`,`unstyled`],[3,`class`],[4,`ngTemplateOutlet`],[`type`,`button`,3,`onClick`,`label`,`pt`,`styleClass`,`size`,`buttonProps`,`autofocus`,`unstyled`]],template:function(i,n){i&1&&Aw(0,le,3,9,`div`,2),i&2&&xw(n.render()?0:-1)},dependencies:[Gl,GT,WT,XH,vn,Rt,C,L,nt,tt],encapsulation:2})}return e})();var Ft=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[X,XH,XH]})}return e})();var He=(()=>{class e{constructor(){this.confirmationService=g(GH)}confirm(t){this.confirmationService.confirm({target:t.target,message:`Are you sure you want to proceed?`,icon:`pi pi-exclamation-triangle`})}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-confirmpopup-demo`]],features:[Al([GH])],decls:7,vars:0,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`label`,`Delete`,`icon`,`pi pi-trash`,`severity`,`danger`,3,`onClick`]],template:function(i,n){i&1&&(Ws(0,`h1`,0),wb(1,`ConfirmPopup`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-confirmpopup`),Ws(6,`p-button`,3),gm(`onClick`,function(b){return n.confirm(b)}),wl()())},dependencies:[vn,Rt,Ft,X],encapsulation:2})}}return e})();export{He as ConfirmPopupDemo};