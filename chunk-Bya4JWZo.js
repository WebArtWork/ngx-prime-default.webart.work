import{$a as zt,$r as gm,At as Lf,Br as em,Da as uw,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,Jr as g,K as Gl,La as wb,Li as nm,Nr as da,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Si as la,Sn as Tm,Ta as ua,U as GT,X as HV,Z as H_,Zt as P,br as bs,cn as Rb,d as AI,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,jt as Lm,ka as v,l as $w,lt as J2,na as qw,oi as hb,on as Qw,p as Al,qr as fm,r as $T,ua as sa,un as Rf,ut as JH,wn as Ts}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";import{n as nt}from"./chunk-Cw3svWHP.js";import{t as W}from"./chunk-CxBE3lzD.js";import{A as f}from"./main-4W6E6VEG.js";var pe=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var be=[`container`];var he=[`icon`];var _e=[`closeicon`];var ve=[`*`];var xe=n=>({closeCallback:n});function ye(n,s){n&1&&fm(0)}function Ce(n,s){if(n&1&&nm(0,ye,1,0,`ng-container`,3),n&2){let e=qw();cm(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}function we(n,s){if(n&1&&um(0,`i`,0),n&2){let e=qw();hb(e.cn(e.cx(`icon`),e.icon())),cm(`pBind`,e.ptm(`icon`)),am(`data-p`,e.dataP)}}function Te(n,s){n&1&&fm(0)}function Me(n,s){if(n&1&&nm(0,Te,1,0,`ng-container`,4),n&2){let e=qw();cm(`ngTemplateOutlet`,e.containerTemplate||e._containerTemplate)(`ngTemplateOutletContext`,Rb(2,xe,e.closeCallback))}}function ke(n,s){if(n&1&&um(0,`span`,6),n&2){let e=qw(3);cm(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`))(`innerHTML`,e.text(),AI),am(`data-p`,e.dataP)}}function ze(n,s){if(n&1&&(Ws(0,`div`),Aw(1,ke,1,4,`span`,6),wl()),n&2){let e=qw(2);MC(),xw(e.escape()?-1:1)}}function Ie(n,s){if(n&1&&(Ws(0,`span`,5),wb(1),wl()),n&2){let e=qw(3);cm(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),am(`data-p`,e.dataP),MC(),Lm(e.text())}}function Be(n,s){if(n&1&&Aw(0,Ie,2,4,`span`,5),n&2){let e=qw(2);xw(e.escape()&&e.text()?0:-1)}}function De(n,s){if(n&1&&(Aw(0,ze,2,1,`div`)(1,Be,1,1),Ws(2,`span`,5),la(3),wl()),n&2){let e=qw();xw(e.escape()?1:0),MC(2),cm(`pBind`,e.ptm(`text`))(`ngClass`,e.cx(`text`)),am(`data-p`,e.dataP)}}function Ne(n,s){if(n&1&&um(0,`i`,5),n&2){let e=qw(2);hb(e.cn(e.cx(`closeIcon`),e.closeIcon())),cm(`pBind`,e.ptm(`closeIcon`))(`ngClass`,e.closeIcon()),am(`data-p`,e.dataP)}}function Oe(n,s){n&1&&fm(0)}function Se(n,s){if(n&1&&nm(0,Oe,1,0,`ng-container`,3),n&2){let e=qw(2);cm(`ngTemplateOutlet`,e.closeIconTemplate||e._closeIconTemplate)}}function Ee(n,s){if(n&1&&(qf(),um(0,`svg`,10)),n&2){let e=qw(2);hb(e.cx(`closeIcon`)),cm(`pBind`,e.ptm(`closeIcon`)),am(`data-p`,e.dataP)}}function Pe(n,s){if(n&1){let e=$w();Ws(0,`button`,7),gm(`click`,function(t){Rf(e);return Lf(qw().close(t))}),Aw(1,Ne,1,5,`i`,8),Aw(2,Se,1,1,`ng-container`),Aw(3,Ee,1,4,`:svg:svg`,9),wl()}if(n&2){let e=qw();hb(e.cx(`closeButton`)),cm(`pBind`,e.ptm(`closeButton`)),am(`aria-label`,e.closeAriaLabel)(`data-p`,e.dataP),MC(),xw(e.closeIcon()?1:-1),MC(),xw(e.closeIconTemplate||e._closeIconTemplate?2:-1),MC(),xw(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Ae={root:({instance:n})=>[`p-message p-component p-message-`+n.severity(),n.variant()&&`p-message-`+n.variant(),{"p-message-sm":n.size()===`small`,"p-message-lg":n.size()===`large`}],contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var ue=(()=>{class n extends Nr{name=`message`;style=pe;classes=Ae;static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var fe=new b(`MESSAGE_INSTANCE`);var Fe=(()=>{class n extends J2{componentName=`Message`;_componentStyle=g(ue);bindDirectiveInstance=g(L,{self:!0});$pcMessage=g(fe,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}severity=zt(`info`);text=zt();escape=zt(!0,{transform:CT});style=zt();styleClass=zt();closable=zt(!1,{transform:CT});icon=zt();closeIcon=zt();life=zt();showTransitionOptions=zt(`300ms ease-out`);hideTransitionOptions=zt(`200ms cubic-bezier(0.86, 0, 0.07, 1)`);size=zt();variant=zt();motionOptions=zt(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));onClose=HV();get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=ne(!0);containerTemplate;iconTemplate;closeIconTemplate;templates=zV(JH);_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){let e=this.life();e&&setTimeout(()=>{this.visible.set(!1)},e)}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`container`:this._containerTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant()===`outlined`,simple:this.variant()===`simple`,[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵcmp=sa({type:n,selectors:[[`p-message`]],contentQueries:function(a,t,g){if(a&1&&(Dm(g,t.templates,JH,4),ym(g,be,4)(g,he,4)(g,_e,4)),a&2){Jw();let u;Kw(u=Qw())&&(t.containerTemplate=u.first),Kw(u=Qw())&&(t.iconTemplate=u.first),Kw(u=Qw())&&(t.closeIconTemplate=u.first)}},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:5,hostBindings:function(a,t){a&1&&(bs(function(){return`p-message-enter-active`}),Ts(function(){return`p-message-leave-active`})),a&2&&(am(`data-p`,t.dataP),hb(t.cn(t.cx(`root`),t.styleClass())),Tm(`p-message-leave-active`,!t.visible()))},inputs:{severity:[1,`severity`],text:[1,`text`],escape:[1,`escape`],style:[1,`style`],styleClass:[1,`styleClass`],closable:[1,`closable`],icon:[1,`icon`],closeIcon:[1,`closeIcon`],life:[1,`life`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],size:[1,`size`],variant:[1,`variant`],motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[Al([ue,{provide:fe,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],ngContentSelectors:ve,decls:7,vars:12,consts:[[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`,`ngClass`],[3,`pBind`,`ngClass`,`innerHTML`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(a,t){a&1&&(ua(),Ws(0,`div`,0)(1,`div`,0),Aw(2,Ce,1,1,`ng-container`),Aw(3,we,1,4,`i`,1),Aw(4,Me,1,4,`ng-container`)(5,De,4,4),Aw(6,Pe,4,8,`button`,2),wl()()),a&2&&(hb(t.cx(`contentWrapper`)),cm(`pBind`,t.ptm(`contentWrapper`)),am(`data-p`,t.dataP),MC(),hb(t.cx(`content`)),cm(`pBind`,t.ptm(`content`)),am(`data-p`,t.dataP),MC(),xw(t.iconTemplate||t._iconTemplate?2:-1),MC(),xw(t.icon()?3:-1),MC(),xw(t.containerTemplate||t._containerTemplate?4:5),MC(2),xw(t.closable()?6:-1))},dependencies:[Gl,$T,GT,f,W,XH,L,nt],encapsulation:2})}return n})();var sn=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[Fe,XH,XH]})}return n})();export{sn as n,Fe as t};