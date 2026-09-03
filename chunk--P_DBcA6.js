import{$a as zt$1,$r as gm,At as Lf,Bn as X$,Br as em,Da as uw,Dt as L$,Ea as um,En as Ue$1,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,Jr as g,K as Gl,Kr as fb,Li as nm,Ln as WV,Lr as eH,Lt as My,Nn as Vy,Nr as da,Nt as Lw,O as Dm,Or as cm,Ot as LI,P as Ey,Pa as vm,Pr as dh,Pt as MC,Qi as qf,Ra as wl,Rn as Ws,S as CT,Tn as UV,U as GT,W as GV,X as HV,Z as H_,Zt as P,cn as Rb,dn as Ro,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,jn as Vl,ka as v,kt as Lb,l as $w,lt as J2,mn as ST,na as qw,oi as hb,on as Qw,ot as Iy,p as Al,qr as fm,qt as Ob,r as $T,s as $t$1,ua as sa,un as Rf,ut as JH,vi as kw,wa as u_,xi as l_}from"./chunk-CXRXTJ2s.js";import{r as m}from"./chunk-Br98bhvT.js";import{n as O,t as L}from"./chunk-TSmMf5t-.js";import{n as L$1,t as F}from"./chunk-CerPySWC.js";import{n as nt$1,r as tt$1}from"./chunk-Cw3svWHP.js";import{t as W}from"./chunk-CxBE3lzD.js";import{A as f,F as d,R as f$1,j as C}from"./main-4W6E6VEG.js";import{t as f$2}from"./chunk-BM45g-Uf.js";import{t as m$1}from"./chunk-rld2UIvv.js";var Ke=`
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

       .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }

    .p-galleria-enter-active {
        animation: p-animate-galleria-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-leave-active {
        animation: p-animate-galleria-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    @keyframes p-animate-galleria-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-galleria-leave {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var We=[`header`];var Xe=[`footer`];var Ye=[`indicator`];var Je=[`caption`];var et=[`closeicon`];var tt=[`previousthumbnailicon`];var it=[`nextthumbnailicon`];var nt=[`itempreviousicon`];var at=[`itemnexticon`];var ot=[`item`];var lt=[`thumbnail`];var rt=[`container`];function st(n,r){if(n&1){let e=$w();Ws(0,`div`,5),gm(`pMotionOnBeforeEnter`,function(i){Rf(e);return Lf(qw(3).onBeforeEnter(i))})(`pMotionOnBeforeLeave`,function(){Rf(e);return Lf(qw(3).onBeforeLeave())})(`pMotionOnAfterLeave`,function(){Rf(e);return Lf(qw(3).onAfterLeave())})(`maskHide`,function(){Rf(e);return Lf(qw(3).onMaskHide())})(`activeItemChange`,function(i){Rf(e);return Lf(qw(3).onActiveItemChange(i))}),wl()}if(n&2){let e=qw(3);cm(`pMotion`,e.visible())(`pMotionAppear`,!0)(`pMotionName`,`p-galleria`)(`pMotionOptions`,e.computedMotionOptions())(`value`,e.value())(`activeIndex`,e.activeIndex())(`numVisible`,e.numVisibleLimit||e.numVisible())(`ngStyle`,e.containerStyle())(`fullScreen`,e.fullScreen())(`pt`,e.pt())(`pFocusTrapDisabled`,!e.fullScreen())(`unstyled`,e.unstyled())}}function ct(n,r){if(n&1){let e=$w();Ws(0,`div`,3),gm(`pMotionOnAfterLeave`,function(){Rf(e);return Lf(qw(2).onMaskAfterLeave())})(`click`,function(i){Rf(e);return Lf(qw(2).onMaskHide(i))}),Aw(1,st,1,12,`div`,4),wl()}if(n&2){let e=qw(2);hb(e.maskClass()),cm(`pBind`,e.ptm(`mask`))(`pMotion`,e.maskVisible)(`pMotionAppear`,!0)(`pMotionEnterActiveClass`,e.fullScreen()?`p-overlay-mask-enter-active`:``)(`pMotionLeaveActiveClass`,e.fullScreen()?`p-overlay-mask-leave-active`:``)(`pMotionOptions`,e.computedMaskMotionOptions())(`ngClass`,e.cx(`mask`)),am(`role`,e.fullScreen()?`dialog`:`region`)(`aria-modal`,e.fullScreen()?`true`:void 0),MC(),xw(e.renderContent()?1:-1)}}function dt(n,r){if(n&1&&(Ws(0,`div`,null,0),Aw(2,ct,2,12,`div`,2),wl()),n&2){let e=qw();MC(2),xw(e.renderMask()?2:-1)}}function ut(n,r){if(n&1){let e=$w();Ws(0,`div`,6),gm(`activeItemChange`,function(i){Rf(e);return Lf(qw().onActiveItemChange(i))}),wl()}if(n&2){let e=qw();cm(`pt`,e.pt())(`unstyled`,e.unstyled())(`value`,e.value())(`activeIndex`,e.activeIndex())(`numVisible`,e.numVisibleLimit||e.numVisible())}}var mt=[`closeButton`];var pt=()=>({});function ht(n,r){if(n&1&&(qf(),um(0,`svg`,9)),n&2){let e=qw(3);hb(e.cx(`closeIcon`)),cm(`pBind`,e.getPTOptions(`closeIcon`))}}function gt(n,r){}function vt(n,r){n&1&&nm(0,gt,0,0,`ng-template`)}function bt(n,r){if(n&1){let e=$w();Ws(0,`button`,6),gm(`click`,function(){Rf(e);return Lf(qw(2).maskHide.emit())}),Aw(1,ht,1,3,`:svg:svg`,7),nm(2,vt,1,0,null,8),wl()}if(n&2){let e=qw(2);hb(e.cx(`closeButton`)),cm(`pBind`,e.getPTOptions(`closeButton`)),am(`aria-label`,e.closeAriaLabel()),MC(),xw(!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate()?1:-1),MC(),cm(`ngTemplateOutlet`,e.galleria.closeIconTemplate||e.galleria._closeIconTemplate())}}function ft(n,r){if(n&1&&um(0,`div`,10),n&2){let e=qw(2);hb(e.cx(`header`)),cm(`unstyled`,e.unstyled())(`templates`,e.galleria.templates)(`pBind`,e.getPTOptions(`header`))}}function _t(n,r){if(n&1){let e=$w();Ws(0,`div`,11),gm(`onActiveIndexChange`,function(i){Rf(e);return Lf(qw(2).onActiveIndexChange(i))})(`stopSlideShow`,function(){Rf(e);return Lf(qw(2).stopSlideShow())}),wl()}if(n&2){let e=qw(2);cm(`containerId`,e.id)(`value`,e.value())(`activeIndex`,e._activeIndexBacking)(`templates`,e.galleria.templates)(`numVisible`,e.numVisible())(`responsiveOptions`,e.galleria.responsiveOptions())(`circular`,e.galleria.circular())(`isVertical`,e.isVertical())(`contentHeight`,e.galleria.verticalThumbnailViewPortHeight())(`showThumbnailNavigators`,e.galleria.showThumbnailNavigators())(`slideShowActive`,e.slideShowActive)(`pt`,e.pt())(`unstyled`,e.unstyled())}}function xt(n,r){if(n&1&&um(0,`div`,12),n&2){let e=qw(2);hb(e.cx(`footer`)),cm(`pBind`,e.getPTOptions(`footer`))(`templates`,e.galleria.templates)(`unstyled`,e.unstyled())}}function It(n,r){if(n&1){let e=$w();Aw(0,bt,3,6,`button`,0),Aw(1,ft,1,5,`div`,1),Ws(2,`div`,2)(3,`div`,3),gm(`onActiveIndexChange`,function(i){Rf(e);return Lf(qw().onActiveIndexChange(i))})(`startSlideShow`,function(){Rf(e);return Lf(qw().startSlideShow())})(`stopSlideShow`,function(){Rf(e);return Lf(qw().stopSlideShow())}),wl(),Aw(4,_t,1,13,`div`,4),wl(),Aw(5,xt,1,5,`div`,5)}if(n&2){let e=qw();xw(e.galleria.fullScreen()?0:-1),MC(),xw(e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate())?1:-1),MC(),hb(e.cx(`content`)),cm(`pBind`,e.getPTOptions(`content`)),am(`aria-live`,e.galleria.autoPlay()?`polite`:`off`),MC(),hb(e.cx(`itemsContainer`)),cm(`id`,e.id)(`value`,e.value())(`activeIndex`,e._activeIndexBacking)(`circular`,e.galleria.circular())(`templates`,e.galleria.templates)(`showIndicators`,e.galleria.showIndicators())(`changeItemOnIndicatorHover`,e.galleria.changeItemOnIndicatorHover())(`indicatorFacet`,e.galleria.indicatorFacet)(`captionFacet`,e.galleria.captionFacet)(`showItemNavigators`,e.galleria.showItemNavigators())(`autoPlay`,e.galleria.autoPlay())(`slideShowActive`,e.slideShowActive)(`pt`,e.pt())(`unstyled`,e.unstyled()),MC(),xw(e.galleria.showThumbnails()?4:-1),MC(),xw(e.shouldRenderFooter()?5:-1)}}function Ct(n,r){n&1&&fm(0)}function Tt(n,r){if(n&1&&nm(0,Ct,1,0,`ng-container`,0),n&2){let e=qw();cm(`ngTemplateOutlet`,e.contentTemplate)(`ngTemplateOutletContext`,e.context)}}var wt=n=>({index:n});function yt(n,r){if(n&1&&(qf(),um(0,`svg`,8)),n&2){let e=qw(2);hb(e.cx(`prevIcon`)),cm(`pBind`,e.ptm(`prevIcon`))}}function St(n,r){}function kt(n,r){n&1&&nm(0,St,0,0,`ng-template`)}function Mt(n,r){if(n&1){let e=$w();Ws(0,`button`,5),gm(`click`,function(i){Rf(e);return Lf(qw().navBackward(i))})(`focus`,function(){Rf(e);return Lf(qw().onButtonFocus(`left`))})(`blur`,function(){Rf(e);return Lf(qw().onButtonBlur(`left`))}),Aw(1,yt,1,3,`:svg:svg`,6),nm(2,kt,1,0,null,7),wl()}if(n&2){let e=qw();hb(e.cx(`prevButton`)),cm(`pBind`,e.ptm(`prevButton`)),MC(),xw(!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate()?1:-1),MC(),cm(`ngTemplateOutlet`,e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate())}}function Vt(n,r){if(n&1&&(qf(),um(0,`svg`,10)),n&2){let e=qw(2);hb(e.cx(`nextIcon`)),cm(`pBind`,e.ptm(`nextIcon`))}}function Bt(n,r){}function Nt(n,r){n&1&&nm(0,Bt,0,0,`ng-template`)}function Dt(n,r){if(n&1){let e=$w();Ws(0,`button`,5),gm(`click`,function(i){Rf(e);return Lf(qw().navForward(i))})(`focus`,function(){Rf(e);return Lf(qw().onButtonFocus(`right`))})(`blur`,function(){Rf(e);return Lf(qw().onButtonBlur(`right`))}),Aw(1,Vt,1,3,`:svg:svg`,9),nm(2,Nt,1,0,null,7),wl()}if(n&2){let e=qw();hb(e.cx(`nextButton`)),cm(`pBind`,e.ptm(`nextButton`)),MC(),xw(!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate()?1:-1),MC(),cm(`ngTemplateOutlet`,e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate())}}function At(n,r){if(n&1&&um(0,`div`,11),n&2){let e=qw();hb(e.cx(`caption`)),cm(`pBind`,e.ptm(`caption`))(`unstyled`,e.unstyled())(`item`,e.activeItem)(`templates`,e.templates())}}function Ot(n,r){if(n&1&&um(0,`button`,16),n&2){let e=qw().$index,t=qw(2);hb(t.cx(`indicatorButton`)),cm(`pBind`,t.ptm(`indicatorButton`,t.getIndicatorPTOptions(e)))}}function Ft(n,r){if(n&1&&um(0,`div`,15),n&2){let e=qw().$index,t=qw(2);cm(`index`,e)(`templates`,t.templates())(`pBind`,t.ptm(`item`))(`unstyled`,t.unstyled())}}function Gt(n,r){if(n&1){let e=$w();Ws(0,`li`,13),gm(`click`,function(){let i=Rf(e).$index;return Lf(qw(2).onIndicatorClick(i))})(`mouseenter`,function(){let i=Rf(e).$index;return Lf(qw(2).onIndicatorMouseEnter(i))})(`keydown`,function(i){let a=Rf(e).$index;return Lf(qw(2).onIndicatorKeyDown(i,a))}),Aw(1,Ot,1,3,`button`,14),Aw(2,Ft,1,4,`div`,15),wl()}if(n&2){let e=r.$index,t=qw(2);hb(t.cx(`indicator`,Rb(10,wt,e))),cm(`pBind`,t.getIndicatorPTOptions(e))(`pBind`,t.ptm(`indicator`,t.getIndicatorPTOptions(e))),am(`aria-label`,t.ariaPageLabel(e+1))(`aria-selected`,t.activeIndex()===e)(`aria-controls`,t.id()+`_item_`+e)(`data-p-active`,t.isIndicatorItemActive(e)),MC(),xw(!t.indicatorFacet()&&!t.galleria.indicatorTemplate()?1:-1),MC(),xw(t.indicatorFacet()||t.galleria.indicatorTemplate()?2:-1)}}function Pt(n,r){if(n&1&&(Ws(0,`ul`,0),Lw(1,Gt,3,12,`li`,12,Rw),wl()),n&2){let e=qw();hb(e.cx(`indicatorList`)),cm(`pBind`,e.ptm(`indicatorList`)),MC(),kw(e.value())}}var Et=[`itemsContainer`];var Lt=n=>({height:n});var Ht=(n,r)=>({index:n,activeIndex:r});function $t(n,r){if(n&1&&(qf(),um(0,`svg`,10)),n&2){let e=qw(3);hb(e.cx(`thumbnailPrevIcon`)),cm(`pBind`,e.ptm(`thumbnailPrevIcon`))}}function Rt(n,r){if(n&1&&(qf(),um(0,`svg`,11)),n&2){let e=qw(3);hb(e.cx(`thumbnailPrevIcon`)),cm(`pBind`,e.ptm(`thumbnailPrevIcon`))}}function zt(n,r){if(n&1&&(Aw(0,$t,1,3,`:svg:svg`,8),Aw(1,Rt,1,3,`:svg:svg`,9)),n&2){let e=qw(2);xw(e.isVertical()?-1:0),MC(),xw(e.isVertical()?1:-1)}}function Qt(n,r){}function jt(n,r){n&1&&nm(0,Qt,0,0,`ng-template`)}function Kt(n,r){if(n&1){let e=$w();Ws(0,`button`,6),gm(`click`,function(i){Rf(e);return Lf(qw().navBackward(i))}),Aw(1,zt,2,2),nm(2,jt,1,0,null,7),wl()}if(n&2){let e=qw();hb(e.cx(`thumbnailPrevButton`)),cm(`pBind`,e.ptm(`thumbnailPrevButton`)),am(`aria-label`,e.ariaPrevButtonLabel()),MC(),xw(!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate()?1:-1),MC(),cm(`ngTemplateOutlet`,e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate())}}function Zt(n,r){if(n&1){let e=$w();Ws(0,`div`,12),gm(`keydown`,function(i){let a=Rf(e).$index;return Lf(qw().onThumbnailKeydown(i,a))}),Ws(1,`div`,13),gm(`click`,function(){let i=Rf(e).$index;return Lf(qw().onItemClick(i))})(`touchend`,function(){let i=Rf(e).$index;return Lf(qw().onItemClick(i))})(`keydown.enter`,function(){let i=Rf(e).$index;return Lf(qw().onItemClick(i))}),um(2,`div`,14),wl()()}if(n&2){let e=r.$implicit,t=r.$index,i=qw();hb(i.cx(`thumbnailItem`,Lb(16,Ht,t,i._activeIndex))),cm(`pBind`,i.ptm(`thumbnailItem`)),am(`aria-selected`,i._activeIndex===t)(`aria-controls`,i.containerId()+`_item_`+t)(`data-p-active`,i._activeIndex===t),MC(),hb(i.cx(`thumbnail`)),cm(`pBind`,i.ptm(`thumbnail`)),am(`tabindex`,i._activeIndex===t?0:-1)(`aria-current`,i._activeIndex===t?`page`:void 0)(`aria-label`,i.ariaPageLabel(t+1)),MC(),cm(`pBind`,i.ptm(`thumbnailItem`))(`item`,e)(`templates`,i.templates())(`unstyled`,i.unstyled())}}function qt(n,r){if(n&1&&(qf(),um(0,`svg`,17)),n&2){let e=qw(3);hb(e.cx(`thumbnailNextIcon`)),cm(`pBind`,e.ptm(`thumbnailNextIcon`))}}function Ut(n,r){if(n&1&&(qf(),um(0,`svg`,18)),n&2){let e=qw(3);hb(e.cx(`thumbnailNextIcon`)),cm(`pBind`,e.ptm(`thumbnailNextIcon`))}}function Wt(n,r){if(n&1&&(Aw(0,qt,1,3,`:svg:svg`,15),Aw(1,Ut,1,3,`:svg:svg`,16)),n&2){let e=qw(2);xw(e.isVertical()?-1:0),MC(),xw(e.isVertical()?1:-1)}}function Xt(n,r){}function Yt(n,r){n&1&&nm(0,Xt,0,0,`ng-template`)}function Jt(n,r){if(n&1){let e=$w();Ws(0,`button`,6),gm(`click`,function(i){Rf(e);return Lf(qw().navForward(i))}),Aw(1,Wt,2,2),nm(2,Yt,1,0,null,7),wl()}if(n&2){let e=qw();hb(e.cx(`thumbnailNextButton`)),cm(`pBind`,e.ptm(`thumbnailNextButton`)),am(`aria-label`,e.ariaNextButtonLabel()),MC(),xw(!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate()?1:-1),MC(),cm(`ngTemplateOutlet`,e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate())}}var ei={mask:`p-galleria-mask p-overlay-mask`,root:({instance:n})=>{let r=n.galleria.showThumbnails()&&n.getPositionClass(`p-galleria-thumbnails`,n.galleria.thumbnailsPosition()),e=n.galleria.showIndicators()&&n.getPositionClass(`p-galleria-indicators`,n.galleria.indicatorsPosition());return[`p-galleria p-component`,{"p-galleria-fullscreen":n.galleria.fullScreen(),"p-galleria-inset-indicators":n.galleria.showIndicatorsOnItem(),"p-galleria-hover-navigators":n.galleria.showItemNavigatorsOnHover()&&!n.galleria.fullScreen()},r,e]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:({instance:n})=>[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":n.isNavBackwardDisabled()}],prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:({instance:n})=>[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":n.isNavForwardDisabled()}],nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:({instance:n,index:r})=>[`p-galleria-indicator`,{"p-galleria-indicator-active":n.isIndicatorItemActive(r)}],indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:({instance:n})=>[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":n.isNavBackwardDisabled()}],thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:({instance:n,index:r,activeIndex:e})=>[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e===r,"p-galleria-thumbnail-item-active":n.isItemActive(r),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===r,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===r}],thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:({instance:n})=>[`p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button`,{"p-disabled":n.isNavForwardDisabled()}],thumbnailNextIcon:`p-galleria-thumbnail-next-icon`};var N=(()=>{class n extends Nr{name=`galleria`;style=Ke;classes=ei;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(n)))(i||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var U=new b(`GALLERIA_INSTANCE`);var z=(()=>{class n extends J2{element=g(Ue$1);componentName=`Galleria`;bindDirectiveInstance=g(L$1,{self:!0});$pcGalleria=g(U,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}activeIndex=UV(0);fullScreen=zt$1(!1,{transform:CT});id=zt$1();value=zt$1();numVisible=zt$1(3,{transform:ST});responsiveOptions=zt$1();showItemNavigators=zt$1(!1,{transform:CT});showThumbnailNavigators=zt$1(!0,{transform:CT});showItemNavigatorsOnHover=zt$1(!1,{transform:CT});changeItemOnIndicatorHover=zt$1(!1,{transform:CT});circular=zt$1(!1,{transform:CT});autoPlay=zt$1(!1,{transform:CT});shouldStopAutoplayByClick=zt$1(!0,{transform:CT});transitionInterval=zt$1(4e3,{transform:ST});showThumbnails=zt$1(!0,{transform:CT});thumbnailsPosition=zt$1(`bottom`);verticalThumbnailViewPortHeight=zt$1(`300px`);showIndicators=zt$1(!1,{transform:CT});showIndicatorsOnItem=zt$1(!1,{transform:CT});indicatorsPosition=zt$1(`bottom`);baseZIndex=zt$1(0,{transform:ST});maskClass=zt$1();containerClass=zt$1();containerStyle=zt$1();showTransitionOptions=zt$1(`150ms cubic-bezier(0, 0, 0.2, 1)`);hideTransitionOptions=zt$1(`150ms cubic-bezier(0, 0, 0.2, 1)`);motionOptions=zt$1(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));maskMotionOptions=zt$1(void 0);computedMaskMotionOptions=da(()=>v(v({},this.ptm(`maskMotion`)),this.maskMotionOptions()));visible=UV(!1);renderMask=ne(!1);renderContent=ne(!1);container;headerTemplate=GV(`header`,{descendants:!1});headerFacet;footerTemplate=GV(`footer`,{descendants:!1});footerFacet;indicatorTemplate=GV(`indicator`,{descendants:!1});indicatorFacet;captionTemplate=GV(`caption`,{descendants:!1});captionFacet;_closeIconTemplate=GV(`closeicon`,{descendants:!1});closeIconTemplate;_previousThumbnailIconTemplate=GV(`previousthumbnailicon`,{descendants:!1});previousThumbnailIconTemplate;_nextThumbnailIconTemplate=GV(`nextthumbnailicon`,{descendants:!1});nextThumbnailIconTemplate;_itemPreviousIconTemplate=GV(`itempreviousicon`,{descendants:!1});itemPreviousIconTemplate;_itemNextIconTemplate=GV(`itemnexticon`,{descendants:!1});itemNextIconTemplate;_itemTemplate=GV(`item`,{descendants:!1});itemTemplate;_thumbnailTemplate=GV(`thumbnail`,{descendants:!1});thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=g(N);mask;templates;constructor(){super(),$t$1(()=>{let e=this.visible();e&&!this.maskVisible?(this.maskVisible=!0,this.renderMask.set(!0),this.renderContent.set(!0)):!e&&this.maskVisible&&(this.maskVisible=!1)}),$t$1(()=>{let e=this.value();e&&e.length<this.numVisible()?this.numVisibleLimit=e.length:this.numVisibleLimit=0})}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`header`:this.headerFacet=e.template;break;case`footer`:this.footerFacet=e.template;break;case`indicator`:this.indicatorFacet=e.template;break;case`closeicon`:this.closeIconTemplate=e.template;break;case`itemnexticon`:this.itemNextIconTemplate=e.template;break;case`itempreviousicon`:this.itemPreviousIconTemplate=e.template;break;case`previousthumbnailicon`:this.previousThumbnailIconTemplate=e.template;break;case`nextthumbnailicon`:this.nextThumbnailIconTemplate=e.template;break;case`caption`:this.captionFacet=e.template;break;case`item`:this.itemTemplate=e.template;break;case`thumbnail`:this.thumbnailTemplate=e.template;break}})}onMaskHide(e){(!e||e.target===e.currentTarget)&&this.visible.set(!1)}onActiveItemChange(e){this.activeIndex()!==e&&this.activeIndex.set(e)}onBeforeEnter(e){this.mask=e.element?.parentElement,this.enableModality(),setTimeout(()=>{let t=X$(this.container?.nativeElement,`[data-pc-section="closebutton"]`);t&&eH(t)},25)}onBeforeLeave(){this.mask&&(this.maskVisible=!1)}onAfterLeave(){this.disableModality(),this.renderContent.set(!1)}onMaskAfterLeave(){this.renderContent()||this.renderMask.set(!1)}enableModality(){L(),this.cd.markForCheck(),this.mask&&m.set(`modal`,this.mask,this.baseZIndex()||this.config.zIndex.modal)}disableModality(){O(),this.cd.markForCheck(),this.mask&&m.clear(this.mask)}onDestroy(){this.fullScreen()&&Iy(this.document.body,`p-overflow-hidden`),this.mask&&this.disableModality()}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`p-galleria`]],contentQueries:function(t,i,a){if(t&1&&(Dm(a,i.headerTemplate,We,4)(a,i.footerTemplate,Xe,4)(a,i.indicatorTemplate,Ye,4)(a,i.captionTemplate,Je,4)(a,i._closeIconTemplate,et,4)(a,i._previousThumbnailIconTemplate,tt,4)(a,i._nextThumbnailIconTemplate,it,4)(a,i._itemPreviousIconTemplate,nt,4)(a,i._itemNextIconTemplate,at,4)(a,i._itemTemplate,ot,4)(a,i._thumbnailTemplate,lt,4),ym(a,JH,4)),t&2){Jw(11);let g;Kw(g=Qw())&&(i.templates=g)}},viewQuery:function(t,i){if(t&1&&vm(rt,5),t&2){let a;Kw(a=Qw())&&(i.container=a.first)}},inputs:{activeIndex:[1,`activeIndex`],fullScreen:[1,`fullScreen`],id:[1,`id`],value:[1,`value`],numVisible:[1,`numVisible`],responsiveOptions:[1,`responsiveOptions`],showItemNavigators:[1,`showItemNavigators`],showThumbnailNavigators:[1,`showThumbnailNavigators`],showItemNavigatorsOnHover:[1,`showItemNavigatorsOnHover`],changeItemOnIndicatorHover:[1,`changeItemOnIndicatorHover`],circular:[1,`circular`],autoPlay:[1,`autoPlay`],shouldStopAutoplayByClick:[1,`shouldStopAutoplayByClick`],transitionInterval:[1,`transitionInterval`],showThumbnails:[1,`showThumbnails`],thumbnailsPosition:[1,`thumbnailsPosition`],verticalThumbnailViewPortHeight:[1,`verticalThumbnailViewPortHeight`],showIndicators:[1,`showIndicators`],showIndicatorsOnItem:[1,`showIndicatorsOnItem`],indicatorsPosition:[1,`indicatorsPosition`],baseZIndex:[1,`baseZIndex`],maskClass:[1,`maskClass`],containerClass:[1,`containerClass`],containerStyle:[1,`containerStyle`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],motionOptions:[1,`motionOptions`],maskMotionOptions:[1,`maskMotionOptions`],visible:[1,`visible`]},outputs:{activeIndex:`activeIndexChange`,visible:`visibleChange`},features:[Al([N,{provide:U,useExisting:n},{provide:H_,useExisting:n}]),uw([L$1]),em],decls:2,vars:1,consts:[[`container`,``],[`pGalleriaContent`,``,3,`pt`,`unstyled`,`value`,`activeIndex`,`numVisible`],[3,`pBind`,`pMotion`,`pMotionAppear`,`pMotionEnterActiveClass`,`pMotionLeaveActiveClass`,`pMotionOptions`,`ngClass`,`class`],[3,`pMotionOnAfterLeave`,`click`,`pBind`,`pMotion`,`pMotionAppear`,`pMotionEnterActiveClass`,`pMotionLeaveActiveClass`,`pMotionOptions`,`ngClass`],[`pGalleriaContent`,``,`pFocusTrap`,``,3,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`,`value`,`activeIndex`,`numVisible`,`ngStyle`,`fullScreen`,`pt`,`pFocusTrapDisabled`,`unstyled`],[`pGalleriaContent`,``,`pFocusTrap`,``,3,`pMotionOnBeforeEnter`,`pMotionOnBeforeLeave`,`pMotionOnAfterLeave`,`maskHide`,`activeItemChange`,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`,`value`,`activeIndex`,`numVisible`,`ngStyle`,`fullScreen`,`pt`,`pFocusTrapDisabled`,`unstyled`],[`pGalleriaContent`,``,3,`activeItemChange`,`pt`,`unstyled`,`value`,`activeIndex`,`numVisible`]],template:function(t,i){t&1&&Aw(0,dt,3,1,`div`)(1,ut,1,5,`div`,1),t&2&&xw(i.fullScreen()?0:1)},dependencies:()=>[L$1,tt$1,$T,Ze,C,WT],encapsulation:2})}return n})();var Ze=(()=>{class n extends J2{galleria=g(z);differs=g(Vl);hostName=`Galleria`;bindDirectiveInstance=g(L$1,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.getPTOptions(`root`))}activeIndex=zt$1(0);_activeIndexBacking=0;value=zt$1([]);numVisible=zt$1(void 0,{transform:ST});fullScreen=zt$1(void 0,{transform:CT});_fullScreenBacking=!1;maskHide=HV();activeItemChange=HV();closeButton=WV(`closeButton`);_componentStyle=g(N);$pcGalleria=g(U,{optional:!0,skipSelf:!0})??void 0;id;slideShowActive=!0;interval;styleClass;differ;constructor(){super(),this.id=this.galleria.id()||Vy(`pn_id_`),this.differ=this.differs.find(this.galleria).create(),$t$1(()=>{this._activeIndexBacking=this.activeIndex()}),$t$1(()=>{this._fullScreenBacking=this.fullScreen()})}handleFullscreenChange(){document?.fullscreenElement===this.el.nativeElement?.children[0]?this._fullScreenBacking=!0:this._fullScreenBacking=!1}onDoCheck(){if(L$(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate()}startSlideShow(){L$(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular()&&this.value().length-1===this._activeIndexBacking?0:this._activeIndexBacking+1;this.onActiveIndexChange(e)},this.galleria.transitionInterval()),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay()&&!this.galleria.shouldStopAutoplayByClick()||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,t){let a=[`top`,`left`,`bottom`,`right`].find(g=>g===t);return a?`${e}-${a}`:``}isVertical(){let e=this.galleria.thumbnailsPosition();return e===`left`||e===`right`}onActiveIndexChange(e){this._activeIndexBacking!==e&&(this._activeIndexBacking=e,this.activeItemChange.emit(this._activeIndexBacking))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}getPTOptions(e){return this.ptm(e,{context:{pt:this.pt(),unstyled:this.unstyled()}})}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`div`,`pGalleriaContent`,``]],viewQuery:function(t,i){t&1&&Em(i.closeButton,mt,5),t&2&&Jw()},hostVars:7,hostBindings:function(t,i){t&1&&gm(`fullscreenchange`,function(){return i.handleFullscreenChange()},LI),t&2&&(am(`id`,i.id)(`role`,`region`),fb(i.galleria.fullScreen()?Ob(6,pt):i.galleria.containerStyle()),hb(i.cn(i.cx(`root`))))},inputs:{activeIndex:[1,`activeIndex`],value:[1,`value`],numVisible:[1,`numVisible`],fullScreen:[1,`fullScreen`]},outputs:{maskHide:`maskHide`,activeItemChange:`activeItemChange`},features:[Al([N]),uw([L$1]),em],decls:1,vars:1,consts:[[`type`,`button`,3,`pBind`,`class`],[`pGalleriaItemSlot`,``,`type`,`header`,3,`unstyled`,`templates`,`pBind`,`class`],[3,`pBind`],[`pGalleriaItem`,``,3,`onActiveIndexChange`,`startSlideShow`,`stopSlideShow`,`id`,`value`,`activeIndex`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`indicatorFacet`,`captionFacet`,`showItemNavigators`,`autoPlay`,`slideShowActive`,`pt`,`unstyled`],[`pGalleriaThumbnails`,``,3,`containerId`,`value`,`activeIndex`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`slideShowActive`,`pt`,`unstyled`],[`pGalleriaItemSlot`,``,`type`,`footer`,3,`pBind`,`class`,`templates`,`unstyled`],[`type`,`button`,3,`click`,`pBind`],[`data-p-icon`,`times`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[`data-p-icon`,`times`,3,`pBind`],[`pGalleriaItemSlot`,``,`type`,`header`,3,`unstyled`,`templates`,`pBind`],[`pGalleriaThumbnails`,``,3,`onActiveIndexChange`,`stopSlideShow`,`containerId`,`value`,`activeIndex`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`slideShowActive`,`pt`,`unstyled`],[`pGalleriaItemSlot`,``,`type`,`footer`,3,`pBind`,`templates`,`unstyled`]],template:function(t,i){t&1&&Aw(0,It,6,24),t&2&&xw(i.value()&&i.value().length>0?0:-1)},dependencies:()=>[L$1,f,GT,ge,qe,Ue],encapsulation:2})}return n})();var ge=(()=>{class n extends J2{hostName=`Galleria`;templates=zt$1();index=zt$1(void 0,{transform:ST});item=zt$1();constructor(){super(),$t$1(()=>{this.item();let e=this.templates();e&&e?.toArray().length>0?e.forEach(t=>{let i=this.type();if(t.getType()===i)switch(i){case`item`:case`caption`:case`thumbnail`:this.context={$implicit:this.item()},this.contentTemplate=t.template;break;case`footer`:this.context={$implicit:this.item()},this.contentTemplate=t.template;break}}):this.getContentTemplate()})}shouldRender(){let e=this.galleria.captionTemplate();return this.contentTemplate||this.galleria._itemTemplate()||this.galleria.itemTemplate||e||e||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate()||this.galleria.footerTemplate()}galleria=g(z);$pcGalleria=g(U,{optional:!0,skipSelf:!0})??void 0;getTemplateFromQueryList(e){return this.galleria.templates?.find(t=>t.getType()===e)?.template}getContentTemplate(){switch(this.type()){case`item`:this.context={$implicit:this.item()},this.contentTemplate=this.galleria._itemTemplate()||this.getTemplateFromQueryList(`item`);break;case`caption`:this.context={$implicit:this.item()},this.contentTemplate=this.galleria.captionTemplate()||this.getTemplateFromQueryList(`caption`);break;case`thumbnail`:this.context={$implicit:this.item()},this.contentTemplate=this.galleria._thumbnailTemplate()||this.getTemplateFromQueryList(`thumbnail`);break;case`indicator`:this.context={$implicit:this.index()},this.contentTemplate=this.galleria.indicatorTemplate()||this.getTemplateFromQueryList(`indicator`);break;case`footer`:this.context={$implicit:this.item()},this.contentTemplate=this.galleria.footerTemplate()||this.getTemplateFromQueryList(`footer`);break;default:this.context={$implicit:this.item()},this.contentTemplate=this.galleria._itemTemplate()||this.getTemplateFromQueryList(`item`)}}type=zt$1();contentTemplate;context;onAfterContentInit(){let e=this.templates();e&&e.toArray().length>0?e?.forEach(t=>{let i=this.type();if(t.getType()===i)switch(i){case`item`:case`caption`:case`thumbnail`:this.context={$implicit:this.item()},this.contentTemplate=t.template;break;case`indicator`:this.context={$implicit:this.index()},this.contentTemplate=t.template;break;case`footer`:this.context={$implicit:this.item()},this.contentTemplate=t.template;break;default:this.context={$implicit:this.item()},this.contentTemplate=t.template;break}}):this.getContentTemplate()}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`div`,`pGalleriaItemSlot`,``]],inputs:{templates:[1,`templates`],index:[1,`index`],item:[1,`item`],type:[1,`type`]},features:[em],decls:1,vars:1,consts:[[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(t,i){t&1&&Aw(0,Tt,1,2,`ng-container`),t&2&&xw(i.shouldRender()?0:-1)},dependencies:[GT],encapsulation:2})}return n})();var qe=(()=>{class n extends J2{galleria=g(z);hostName=`Galleria`;bindDirectiveInstance=g(L$1,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`itemsContainer`))}id=zt$1();circular=zt$1(!1,{transform:CT});value=zt$1();showItemNavigators=zt$1(!1,{transform:CT});showIndicators=zt$1(!0,{transform:CT});slideShowActive=zt$1(!0,{transform:CT});changeItemOnIndicatorHover=zt$1(!0,{transform:CT});autoPlay=zt$1(!1,{transform:CT});templates=zt$1();indicatorFacet=zt$1();captionFacet=zt$1();startSlideShow=HV();stopSlideShow=HV();onActiveIndexChange=HV();_componentStyle=g(N);activeIndex=zt$1(0);get activeItem(){let e=this.value();return e&&e[this.activeIndex()]}leftButtonFocused=!1;rightButtonFocused=!1;constructor(){super(),$t$1(()=>{this.autoPlay()?this.startSlideShow.emit(void 0):this.stopTheSlideShow()})}getIndicatorPTOptions(e){return this.ptm(`indicator`,{context:{highlighted:this.activeIndex()===e}})}next(){let e=this.activeIndex()+1,t=this.circular()&&this.value().length-1===this.activeIndex()?0:e;this.onActiveIndexChange.emit(t)}prev(){let e=this.activeIndex()!==0?this.activeIndex()-1:0,t=this.circular()&&this.activeIndex()===0?this.value().length-1:e;this.onActiveIndexChange.emit(t)}onButtonFocus(e){e===`left`?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e===`left`?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive()&&this.stopSlideShow&&this.stopSlideShow.emit(void 0)}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover()&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,t){switch(e.code){case`Enter`:case`Space`:this.stopTheSlideShow(),this.onActiveIndexChange.emit(t),e.preventDefault();break;case`ArrowDown`:case`ArrowUp`:e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular()&&this.activeIndex()===this.value().length-1}isNavBackwardDisabled(){return!this.circular()&&this.activeIndex()===0}isIndicatorItemActive(e){return this.activeIndex()===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber?.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`div`,`pGalleriaItem`,``]],inputs:{id:[1,`id`],circular:[1,`circular`],value:[1,`value`],showItemNavigators:[1,`showItemNavigators`],showIndicators:[1,`showIndicators`],slideShowActive:[1,`slideShowActive`],changeItemOnIndicatorHover:[1,`changeItemOnIndicatorHover`],autoPlay:[1,`autoPlay`],templates:[1,`templates`],indicatorFacet:[1,`indicatorFacet`],captionFacet:[1,`captionFacet`],activeIndex:[1,`activeIndex`]},outputs:{startSlideShow:`startSlideShow`,stopSlideShow:`stopSlideShow`,onActiveIndexChange:`onActiveIndexChange`},features:[Al([N]),uw([L$1]),em],decls:6,vars:16,consts:[[3,`pBind`],[`type`,`button`,`role`,`navigation`,`data-pc-group-section`,`itemnavigator`,3,`pBind`,`class`],[`pGalleriaItemSlot`,``,`role`,`group`,3,`pBind`,`unstyled`,`item`,`templates`,`id`],[`pGalleriaItemSlot`,``,`type`,`caption`,3,`pBind`,`unstyled`,`class`,`item`,`templates`],[3,`pBind`,`class`],[`type`,`button`,`role`,`navigation`,`data-pc-group-section`,`itemnavigator`,3,`click`,`focus`,`blur`,`pBind`],[`data-p-icon`,`chevron-left`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[`data-p-icon`,`chevron-left`,3,`pBind`],[`data-p-icon`,`chevron-right`,3,`pBind`,`class`],[`data-p-icon`,`chevron-right`,3,`pBind`],[`pGalleriaItemSlot`,``,`type`,`caption`,3,`pBind`,`unstyled`,`item`,`templates`],[`tabindex`,`0`,3,`pBind`,`class`],[`tabindex`,`0`,3,`click`,`mouseenter`,`keydown`,`pBind`],[`type`,`button`,`tabIndex`,`-1`,3,`pBind`,`class`],[`pGalleriaItemSlot`,``,`type`,`indicator`,3,`index`,`templates`,`pBind`,`unstyled`],[`type`,`button`,`tabIndex`,`-1`,3,`pBind`]],template:function(t,i){t&1&&(Ws(0,`div`,0),Aw(1,Mt,3,5,`button`,1),um(2,`div`,2),Aw(3,Dt,3,5,`button`,1),Aw(4,At,1,6,`div`,3),wl(),Aw(5,Pt,3,3,`ul`,4)),t&2&&(hb(i.cx(`items`)),cm(`pBind`,i.ptm(`items`)),MC(),xw(i.showItemNavigators()?1:-1),MC(),hb(i.cx(`item`)),cm(`pBind`,i.ptm(`item`))(`unstyled`,i.unstyled())(`item`,i.activeItem)(`templates`,i.templates())(`id`,i.id()+`_item_`+i.activeIndex()),am(`aria-label`,i.ariaSlideNumber(i.activeIndex()+1))(`aria-roledescription`,i.ariaSlideLabel()),MC(),xw(i.showItemNavigators()?3:-1),MC(),xw(i.captionFacet()||i.galleria.captionTemplate()?4:-1),MC(),xw(i.showIndicators()?5:-1))},dependencies:[L$1,m$1,GT,ge,f$1],encapsulation:2})}return n})();var Ue=(()=>{class n extends J2{galleria=g(z);hostName=`Galleria`;bindDirectiveInstance=g(L$1,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`thumbnails`))}containerId=zt$1();value=zt$1();isVertical=zt$1(!1,{transform:CT});slideShowActive=zt$1(!1,{transform:CT});circular=zt$1(!1,{transform:CT});responsiveOptions=zt$1();contentHeight=zt$1(`300px`);showThumbnailNavigators=zt$1(!0);templates=zt$1();onActiveIndexChange=HV();stopSlideShow=HV();itemsContainer=WV(`itemsContainer`);numVisible=zt$1(0);activeIndex=zt$1(0);constructor(){super(),$t$1(()=>{let e=this.numVisible();this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}),$t$1(()=>{let e=this.activeIndex();this._oldactiveIndex=this._activeIndex,this._activeIndex=e})}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;_componentStyle=g(N);onInit(){L$(this.platformId)&&(this.createStyle(),this.responsiveOptions()&&this.bindDocumentListeners())}onAfterContentChecked(){let e=this.totalShiftedItems,t=this.itemsContainer();(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&t&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value().length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value().length:this.value().length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),t&&t.nativeElement&&(t.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(this.document.body.setAttribute(`data-p-items-hidden`,`false`),!this.$unstyled()&&Iy(t.nativeElement,`p-items-hidden`),t.nativeElement.style.transition=`transform 500ms ease 0s`),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}onAfterViewInit(){L$(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement(`style`),My(this.thumbnailsStyle,`nonce`,this.galleria.config?.csp()?.nonce),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId()} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `,t=this.responsiveOptions();if(t&&!this.$unstyled()){this.sortedResponsiveOptions=[...t],this.sortedResponsiveOptions.sort((i,a)=>{let g=i.breakpoint,S=a.breakpoint,A;return g==null&&S!=null?A=-1:g!=null&&S==null?A=1:g==null&&S==null?A=0:typeof g==`string`&&typeof S==`string`?A=g.localeCompare(S,void 0,{numeric:!0}):A=g<S?-1:g>S?1:0,-1*A});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let a=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        #${this.containerId()} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/a.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,My(this.thumbnailsStyle,`nonce`,this.galleria.config?.csp()?.nonce)}calculatePosition(){if(L$(this.platformId)&&this.itemsContainer()&&this.sortedResponsiveOptions){let e=window.innerWidth,t={numVisible:this._numVisible};for(let i=0;i<this.sortedResponsiveOptions.length;i++){let a=this.sortedResponsiveOptions[i];parseInt(a.breakpoint,10)>=e&&(t=a)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let t=this._activeIndex+1,i=this.circular();t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||i)&&this.step(-1);let a=i&&this.value().length-1===this._activeIndex?0:t;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let t=this._activeIndex!==0?this._activeIndex-1:0,i=t+this.totalShiftedItems,a=this.circular();this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||a)&&this.step(1);let g=a&&this._activeIndex===0?this.value().length-1:t;this.onActiveIndexChange.emit(g),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let t=e;if(t!==this._activeIndex){let i=t+this.totalShiftedItems,a=0;t<this._activeIndex?(a=this.d_numVisible-i-1-this.getMedianItemIndex(),a>0&&-1*this.totalShiftedItems!==0&&this.step(a)):(a=this.getMedianItemIndex()-i,a<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(a)),this._oldactiveIndex=this._activeIndex,this._activeIndex=t,this.onActiveIndexChange.emit(this._activeIndex)}}onThumbnailKeydown(e,t){switch((e.code===`Enter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break;default:break}}onRightKey(){let e=u_(this.itemsContainer()?.nativeElement,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=u_(this.itemsContainer()?.nativeElement,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)}onTabKey(){let e=this.itemsContainer(),t=[...u_(e?.nativeElement,`[data-pc-section="thumbnailitem"]`)],i=t.findIndex(S=>l_(S,`data-p-active`)===!0),a=X$(e?.nativeElement,`[tabindex="0"]`),g=t.findIndex(S=>S===a?.parentElement);t[g].children[0].tabIndex=`-1`,t[i].children[0].tabIndex=`0`}findFocusedIndicatorIndex(){let e=this.itemsContainer(),t=[...u_(e?.nativeElement,`[data-pc-section="thumbnailitem"]`)],i=X$(e?.nativeElement,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return t.findIndex(a=>a===i?.parentElement)}changedFocusedIndicator(e,t){let i=u_(this.itemsContainer()?.nativeElement,`[data-pc-section="thumbnailitem"]`);i[e].children[0].tabIndex=`-1`,i[t].children[0].tabIndex=`0`,i[t].children[0].focus()}step(e){let t=this.totalShiftedItems+e;if(e<0&&-1*t+this.d_numVisible>this.value().length-1?t=this.d_numVisible-this.value().length:e>0&&t>0&&(t=0),this.circular()){let a=this.value();e<0&&a.length-1===this._activeIndex?t=0:e>0&&this._activeIndex===0&&(t=this.d_numVisible-a.length)}let i=this.itemsContainer();i&&(this.document.body.setAttribute(`data-p-items-hidden`,`false`),!this.$unstyled()&&Iy(i.nativeElement,`p-items-hidden`),i.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,i.nativeElement.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t}stopTheSlideShow(){this.slideShowActive()&&this.stopSlideShow&&this.stopSlideShow.emit(void 0)}changePageOnTouch(e,t){t<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value().length>this.d_numVisible?this.value().length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){let e=this.itemsContainer();e&&e.nativeElement&&(this.document.body.setAttribute(`data-p-items-hidden`,`true`),!this.$unstyled()&&Ey(e.nativeElement,`p-items-hidden`),e.nativeElement.style.transition=``)}onTouchEnd(e){let t=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}}isNavBackwardDisabled(){return!this.circular()&&this._activeIndex===0||this.value().length<=this.d_numVisible}isNavForwardDisabled(){let e=this.value();return!this.circular()&&this._activeIndex===e.length-1||e.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(L$(this.platformId)){let e=this.document.defaultView||`window`;this.documentResizeListener=this.renderer.listen(e,`resize`,()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions()&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`div`,`pGalleriaThumbnails`,``]],viewQuery:function(t,i){t&1&&Em(i.itemsContainer,Et,5),t&2&&Jw()},hostVars:2,hostBindings:function(t,i){t&2&&hb(i.cx(`thumbnails`))},inputs:{containerId:[1,`containerId`],value:[1,`value`],isVertical:[1,`isVertical`],slideShowActive:[1,`slideShowActive`],circular:[1,`circular`],responsiveOptions:[1,`responsiveOptions`],contentHeight:[1,`contentHeight`],showThumbnailNavigators:[1,`showThumbnailNavigators`],templates:[1,`templates`],numVisible:[1,`numVisible`],activeIndex:[1,`activeIndex`]},outputs:{onActiveIndexChange:`onActiveIndexChange`,stopSlideShow:`stopSlideShow`},features:[Al([N]),uw([L$1]),em],decls:8,vars:14,consts:[[`itemsContainer`,``],[3,`pBind`],[`type`,`button`,`pRipple`,``,`data-pc-group-section`,`thumbnailnavigator`,3,`pBind`,`class`],[3,`pBind`,`ngStyle`],[`role`,`tablist`,3,`transitionend`,`touchstart`,`touchmove`,`pBind`],[3,`pBind`,`class`],[`type`,`button`,`pRipple`,``,`data-pc-group-section`,`thumbnailnavigator`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[`data-p-icon`,`chevron-left`,3,`pBind`,`class`],[`data-p-icon`,`chevron-up`,3,`pBind`,`class`],[`data-p-icon`,`chevron-left`,3,`pBind`],[`data-p-icon`,`chevron-up`,3,`pBind`],[3,`keydown`,`pBind`],[3,`click`,`touchend`,`keydown.enter`,`pBind`],[`pGalleriaItemSlot`,``,`type`,`thumbnail`,3,`pBind`,`item`,`templates`,`unstyled`],[`data-p-icon`,`chevron-right`,3,`pBind`,`class`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`],[`data-p-icon`,`chevron-right`,3,`pBind`],[`data-p-icon`,`chevron-down`,3,`pBind`]],template:function(t,i){t&1&&(Ws(0,`div`,1),Aw(1,Kt,3,6,`button`,2),Ws(2,`div`,3)(3,`div`,4,0),gm(`transitionend`,function(){return i.onTransitionEnd()})(`touchstart`,function(g){return i.onTouchStart(g)})(`touchmove`,function(g){return i.onTouchMove(g)}),Lw(5,Zt,3,19,`div`,5,Rw),wl()(),Aw(7,Jt,3,6,`button`,2),wl()),t&2&&(hb(i.cx(`thumbnailContent`)),cm(`pBind`,i.ptm(`thumbnailContent`)),MC(),xw(i.showThumbnailNavigators()?1:-1),MC(),hb(i.cx(`thumbnailsViewport`)),cm(`pBind`,i.ptm(`thumbnailsViewport`))(`ngStyle`,Rb(12,Lt,i.isVertical()?i.contentHeight():``)),MC(),hb(i.cx(`thumbnailItems`)),cm(`pBind`,i.ptm(`thumbnailItems`)),MC(2),kw(i.value()),MC(2),xw(i.showThumbnailNavigators()?7:-1))},dependencies:[L$1,W,m$1,f$2,GT,WT,ge,f$1,d],encapsulation:2})}return n})();var Si=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[Gl,XH,f,f$1,f$2,d,m$1,F,nt$1,z,Ze,qe,Ue,Gl,XH]})}return n})();export{z as n,Si as t};