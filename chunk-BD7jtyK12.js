import{$a as zt$1,$r as gm,$t as Ph,At as Lf,Ba as xH,Bn as X$,Br as em,Da as uw,Dt as L$,Ea as um,En as Ue,Et as Kw,Ft as MH,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,It as Ml,J as H,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Ln as WV,Lr as eH,Nn as Vy,Nt as Lw,O as Dm,Oi as mD,Or as cm,Pa as vm,Pr as dh,Pt as MC,Q as Ho,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,U as GT,Ur as fD,Vi as oe,W as GV,X as HV,Z as H_,Zt as P,ai as ha,d as AI,dn as Ro,fi as ji,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,jt as Lm,ka as v,ki as mH,kn as V,kt as Lb,l as $w,lt as J2,ma as so,mn as ST,na as qw,oi as hb,on as Qw,p as Al,qa as yt$1,qr as fm,qt as Ob,s as $t$1,t as $,ua as sa,un as Rf,ut as JH,vi as kw,xa as te}from"./chunk-CXRXTJ2s.js";import{r as m}from"./chunk-Br98bhvT.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{n as ne$1,t as P$1}from"./chunk-CC7-t2QW.js";import{t as W}from"./chunk-CxBE3lzD.js";import{H as oa,I as at,L as rt,U as ta,V as kt$1}from"./main-4W6E6VEG.js";import{t as m$1}from"./chunk-DPHe9ERu.js";import{t as m$2}from"./chunk-ByvPUi5T.js";import{t as p}from"./chunk-B7lRkRge2.js";var mt=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var ut=(o,s)=>({instance:o,processedItem:s});var dt=()=>({exact:!1});var ct=(o,s)=>({$implicit:o,root:s});function pt(o,s){if(o&1&&um(0,`li`,3),o&2){let e=qw().$implicit,t=qw();fb(t.getItemProp(e,`style`)),hb(t.cn(t.cx(`separator`),e?.styleClass)),cm(`pBind`,t.ptm(`separator`)),am(`id`,t.getItemId(e))}}function bt(o,s){if(o&1&&um(0,`span`,14),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemIcon`),n.getItemProp(t,`icon`),n.getItemProp(t,`iconClass`))),cm(`ngStyle`,n.getItemProp(t,`iconStyle`))(`pBind`,n.getPTOptions(t,i,`itemIcon`)),am(`tabindex`,-1)}}function _t(o,s){if(o&1&&(Ws(0,`span`,15),wb(1),wl()),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`id`,n.getItemLabelId(t))(`pBind`,n.getPTOptions(t,i,`itemLabel`)),MC(),Ml(` `,n.getItemLabel(t),` `)}}function It(o,s){if(o&1&&um(0,`span`,16),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`innerHTML`,n.getItemLabel(t),AI)(`id`,n.getItemLabelId(t))(`pBind`,n.getPTOptions(t,i,`itemLabel`))}}function ft(o,s){if(o&1&&um(0,`p-badge`,17),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.getItemProp(t,`badgeStyleClass`)),cm(`value`,n.getItemProp(t,`badge`))(`pt`,n.getPTOptions(t,i,`pcBadge`))(`unstyled`,n.unstyled())}}function ht(o,s){if(o&1&&(qf(),um(0,`svg`,21)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`))}}function gt(o,s){if(o&1&&(qf(),um(0,`svg`,22)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`))}}function xt(o,s){if(o&1&&(Aw(0,ht,1,3,`:svg:svg`,19),Aw(1,gt,1,3,`:svg:svg`,20)),o&2){let e=qw(6);xw(e.root()?0:-1),MC(),xw(e.root()?-1:1)}}function yt(o,s){}function vt(o,s){o&1&&nm(0,yt,0,0,`ng-template`)}function Ct(o,s){if(o&1&&(Aw(0,xt,2,2),nm(1,vt,1,0,null,18)),o&2){let e=qw(5);xw(e.submenuiconTemplate()?-1:0),MC(),cm(`ngTemplateOutlet`,e.submenuiconTemplate())}}function Mt(o,s){if(o&1&&(Ws(0,`a`,9),Aw(1,bt,1,5,`span`,10),Aw(2,_t,2,6,`span`,11)(3,It,1,6,`span`,12),Aw(4,ft,1,5,`p-badge`,13),Aw(5,Ct,2,2),wl()),o&2){let e=qw(3),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLink`),n.getItemProp(t,`linkClass`))),cm(`ngStyle`,n.getItemProp(t,`linkStyle`))(`pBind`,n.getPTOptions(t,i,`itemLink`)),am(`href`,n.getItemProp(t,`url`),Ph)(`data-automationid`,n.getItemProp(t,`automationId`))(`title`,n.getItemProp(t,`title`))(`target`,n.getItemProp(t,`target`))(`tabindex`,-1),MC(),xw(n.getItemProp(t,`icon`)?1:-1),MC(),xw(n.getItemProp(t,`escape`)?2:3),MC(2),xw(n.getItemProp(t,`badge`)?4:-1),MC(),xw(n.isItemGroup(t)?5:-1)}}function Tt(o,s){if(o&1&&um(0,`span`,14),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemIcon`),n.getItemProp(t,`icon`),n.getItemProp(t,`iconClass`))),cm(`ngStyle`,n.getItemProp(t,`iconStyle`))(`pBind`,n.getPTOptions(t,i,`itemIcon`)),am(`tabindex`,-1)}}function kt(o,s){if(o&1&&(Ws(0,`span`,14),wb(1),wl()),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`pBind`,n.getPTOptions(t,i,`itemLabel`)),MC(),Lm(n.getItemLabel(t))}}function Pt(o,s){if(o&1&&um(0,`span`,25),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`innerHTML`,n.getItemLabel(t),AI)(`pBind`,n.getPTOptions(t,i,`itemLabel`))}}function St(o,s){if(o&1&&um(0,`p-badge`,17),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.getItemProp(t,`badgeStyleClass`)),cm(`value`,n.getItemProp(t,`badge`))(`pt`,n.getPTOptions(t,i,`pcBadge`))(`unstyled`,n.unstyled())}}function Lt(o,s){if(o&1&&(qf(),um(0,`svg`,21)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`))}}function Dt(o,s){if(o&1&&(qf(),um(0,`svg`,22)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`))}}function Ft(o,s){if(o&1&&(Aw(0,Lt,1,3,`:svg:svg`,19),Aw(1,Dt,1,3,`:svg:svg`,20)),o&2){let e=qw(6);xw(e.root()?0:-1),MC(),xw(e.root()?-1:1)}}function wt(o,s){}function Bt(o,s){o&1&&nm(0,wt,0,0,`ng-template`)}function Et(o,s){if(o&1&&(Aw(0,Ft,2,2),nm(1,Bt,1,0,null,18)),o&2){let e=qw(5);xw(e.submenuiconTemplate()?-1:0),MC(),cm(`ngTemplateOutlet`,e.submenuiconTemplate())}}function At(o,s){if(o&1&&(Ws(0,`a`,23),Aw(1,Tt,1,5,`span`,10),Aw(2,kt,2,5,`span`,10)(3,Pt,1,5,`span`,24),Aw(4,St,1,5,`p-badge`,13),Aw(5,Et,2,2),wl()),o&2){let e=qw(3),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLink`),n.getItemProp(t,`linkClass`))),cm(`routerLink`,n.getItemProp(t,`routerLink`))(`queryParams`,n.getItemProp(t,`queryParams`))(`routerLinkActive`,`p-menubar-item-link-active`)(`routerLinkActiveOptions`,n.getItemProp(t,`routerLinkActiveOptions`)||Ob(22,dt))(`target`,n.getItemProp(t,`target`))(`ngStyle`,n.getItemProp(t,`linkStyle`))(`fragment`,n.getItemProp(t,`fragment`))(`queryParamsHandling`,n.getItemProp(t,`queryParamsHandling`))(`preserveFragment`,n.getItemProp(t,`preserveFragment`))(`skipLocationChange`,n.getItemProp(t,`skipLocationChange`))(`replaceUrl`,n.getItemProp(t,`replaceUrl`))(`state`,n.getItemProp(t,`state`))(`pBind`,n.getPTOptions(t,i,`itemLink`)),am(`data-automationid`,n.getItemProp(t,`automationId`))(`title`,n.getItemProp(t,`title`))(`tabindex`,-1),MC(),xw(n.getItemProp(t,`icon`)?1:-1),MC(),xw(n.getItemProp(t,`escape`)?2:3),MC(2),xw(n.getItemProp(t,`badge`)?4:-1),MC(),xw(n.isItemGroup(t)?5:-1)}}function $t(o,s){if(o&1&&(Aw(0,Mt,6,13,`a`,7),Aw(1,At,6,23,`a`,8)),o&2){let e=qw(2).$implicit,t=qw();xw(t.getItemProp(e,`routerLink`)?-1:0),MC(),xw(t.getItemProp(e,`routerLink`)?1:-1)}}function Kt(o,s){}function Nt(o,s){o&1&&nm(0,Kt,0,0,`ng-template`)}function Vt(o,s){if(o&1&&nm(0,Nt,1,0,null,26),o&2){let e=qw(2).$implicit,t=qw();cm(`ngTemplateOutlet`,t.itemTemplate())(`ngTemplateOutletContext`,Lb(2,ct,e.item,t.root()))}}function Ot(o,s){if(o&1){let e=$w();Ws(0,`ul`,27),gm(`itemClick`,function(i){Rf(e);return Lf(qw(3).itemClick.emit(i))})(`itemMouseEnter`,function(i){Rf(e);return Lf(qw(3).onItemMouseEnter(i))}),wl()}if(o&2){let e=qw(2).$implicit,t=qw();cm(`itemTemplate`,t.itemTemplate())(`items`,e.items)(`mobileActive`,t.mobileActive())(`autoDisplay`,t.autoDisplay())(`menuId`,t.menuId())(`activeItemPath`,t.activeItemPath())(`focusedItemId`,t.focusedItemId())(`level`,t.level()+1)(`inlineStyles`,t.sx(`submenu`,!0,Lb(13,ut,t,e)))(`pt`,t.pt())(`pBind`,t.ptm(`submenu`))(`unstyled`,t.unstyled()),am(`aria-labelledby`,t.getItemLabelId(e))}}function Ht(o,s){if(o&1){let e=$w();Ws(0,`li`,4,0)(2,`div`,5),gm(`click`,function(i){Rf(e);let n=qw().$implicit;return Lf(qw().onItemClick(i,n))})(`mouseenter`,function(i){Rf(e);let n=qw().$implicit;return Lf(qw().onItemMouseEnter({$event:i,processedItem:n}))}),Aw(3,$t,2,2),Aw(4,Vt,1,5),wl(),Aw(5,Ot,1,16,`ul`,6),wl()}if(o&2){let e=qw(),t=e.$implicit,i=e.$index,n=qw();fb(n.getItemProp(t,`style`)),hb(n.cn(n.cx(`item`,Lb(23,ut,n,t)),n.getItemProp(t,`styleClass`))),cm(`pBind`,n.getPTOptions(t,i,`item`))(`tooltipOptions`,n.getItemProp(t,`tooltipOptions`))(`pTooltipUnstyled`,n.unstyled()),am(`id`,n.getItemId(t))(`data-p-highlight`,n.isItemActive(t))(`data-p-focused`,n.isItemFocused(t))(`data-p-disabled`,n.isItemDisabled(t))(`aria-label`,n.getItemLabel(t))(`aria-disabled`,n.isItemDisabled(t)||void 0)(`aria-haspopup`,n.isItemGroup(t)&&!n.getItemProp(t,`to`)?`menu`:void 0)(`aria-expanded`,n.isItemGroup(t)?n.isItemActive(t):void 0)(`aria-setsize`,n.getAriaSetSize())(`aria-posinset`,n.getAriaPosInset(i)),MC(2),hb(n.cx(`itemContent`)),cm(`pBind`,n.getPTOptions(t,i,`itemContent`)),MC(),xw(n.itemTemplate()?-1:3),MC(),xw(n.itemTemplate()?4:-1),MC(),xw(n.isItemVisible(t)&&n.isItemGroup(t)?5:-1)}}function Rt(o,s){if(o&1&&(Aw(0,pt,1,6,`li`,1),Aw(1,Ht,6,26,`li`,2)),o&2){let e=s.$implicit,t=qw();xw(t.isItemVisible(e)&&t.getItemProp(e,`separator`)?0:-1),MC(),xw(t.isItemVisible(e)&&!t.getItemProp(e,`separator`)?1:-1)}}var zt=[`item`];var qt=[`menuicon`];var Zt=[`submenuicon`];var Gt=[`start`];var Ut=[`end`];var jt=[`menubutton`];var Qt=[`rootmenu`];var Wt=[`*`];function Jt(o,s){o&1&&fm(0)}function Xt(o,s){if(o&1&&(Ws(0,`div`,6),nm(1,Jt,1,0,`ng-container`,7),wl()),o&2){let e=qw();hb(e.cx(`start`)),cm(`pBind`,e.ptm(`start`)),MC(),cm(`ngTemplateOutlet`,e.startTemplate||e._startTemplate)}}function Yt(o,s){if(o&1&&(qf(),um(0,`svg`,9)),o&2)cm(`pBind`,qw(2).ptm(`buttonIcon`))}function en(o,s){}function tn(o,s){o&1&&nm(0,en,0,0,`ng-template`)}function nn(o,s){if(o&1){let e=$w();Ws(0,`a`,8,1),gm(`click`,function(i){Rf(e);return Lf(qw().menuButtonClick(i))})(`keydown`,function(i){Rf(e);return Lf(qw().menuButtonKeydown(i))}),Aw(2,Yt,1,1,`:svg:svg`,9),nm(3,tn,1,0,null,7),wl()}if(o&2){let e=qw();hb(e.cx(`button`)),cm(`pBind`,e.ptm(`button`)),am(`aria-haspopup`,!!(e.model().length&&e.model().length>0))(`aria-expanded`,e.mobileActive)(`aria-controls`,e.resolvedId)(`aria-label`,e.config.translation.aria.navigation),MC(2),xw(!e.menuIconTemplate()&&!e._menuIconTemplate?2:-1),MC(),cm(`ngTemplateOutlet`,e.menuIconTemplate()||e._menuIconTemplate)}}function on(o,s){o&1&&fm(0)}function an(o,s){if(o&1&&(Ws(0,`div`,6),nm(1,on,1,0,`ng-container`,7),wl()),o&2){let e=qw();hb(e.cx(`end`)),cm(`pBind`,e.ptm(`end`)),MC(),cm(`ngTemplateOutlet`,e.endTemplate||e._endTemplate)}}function sn(o,s){if(o&1&&(Ws(0,`div`),la(1),wl()),o&2)hb(qw().cx(`end`))}var rn={submenu:({instance:o,processedItem:s})=>({display:o.isItemActive(s)?`flex`:`none`})};var mn={root:({instance:o})=>[`p-menubar p-component`,{"p-menubar-mobile":o.queryMatches(),"p-menubar-mobile-active":o.mobileActive}],start:`p-menubar-start`,button:`p-menubar-button`,rootList:`p-menubar-root-list`,item:({instance:o,processedItem:s})=>[`p-menubar-item`,{"p-menubar-item-active":o.isItemActive(s),"p-focus":o.isItemFocused(s),"p-disabled":o.isItemDisabled(s)}],itemContent:`p-menubar-item-content`,itemLink:`p-menubar-item-link`,itemIcon:`p-menubar-item-icon`,itemLabel:`p-menubar-item-label`,submenuIcon:`p-menubar-submenu-icon`,submenu:`p-menubar-submenu`,separator:`p-menubar-separator`,end:`p-menubar-end`};var _e=(()=>{class o extends Nr{name=`menubar`;style=mt;classes=mn;inlineStyles=rn;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(o)))(i||o)}})();static ɵprov=P({token:o,factory:o.ɵfac})}return o})();var lt=new b(`MENUBAR_INSTANCE`);var Ie=(()=>{class o{autoHide;autoHideDelay;mouseLeaves=new H;mouseLeft$=this.mouseLeaves.pipe(mD(()=>fD(this.autoHideDelay)),ji(e=>this.autoHide&&e));static ɵfac=function(t){return new(t||o)};static ɵprov=P({token:o,factory:o.ɵfac})}return o})();var ln=(()=>{class o extends J2{items=zt$1();itemTemplate=zt$1();root=zt$1(!1,{transform:CT});autoZIndex=zt$1(!0,{transform:CT});baseZIndex=zt$1(0,{transform:ST});mobileActive=zt$1(void 0,{transform:CT});autoDisplay=zt$1(void 0,{transform:CT});menuId=zt$1();ariaLabel=zt$1();ariaLabelledBy=zt$1();level=zt$1(0,{transform:ST});focusedItemId=zt$1();activeItemPath=zt$1();inlineStyles=zt$1();submenuiconTemplate=zt$1();itemClick=HV();itemMouseEnter=HV();menuFocus=HV();menuBlur=HV();menuKeydown=HV();mouseLeaveSubscriber;menubarService=g(Ie);_componentStyle=g(_e);hostName=`Menubar`;onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,i=null){return e&&e.item?oe(e.item[t],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId()}_${e.key}`}getItemLabelId(e){return`${this.menuId()}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,`label`)}isItemVisible(e){return this.getItemProp(e,`visible`)!==!1}isItemActive(e){let t=this.activeItemPath();return t?t.some(i=>i.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,`disabled`)}isItemFocused(e){return this.focusedItemId()===this.getItemId(e)}isItemGroup(e){return V(e.items)}getAriaSetSize(){return this.items()?.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,`separator`)).length}getAriaPosInset(e){return e-(this.items()?.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,`separator`)).length||0)+1}onItemMouseEnter(e){if(this.autoDisplay()){let{event:t,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:i})}}getPTOptions(e,t,i){return this.ptm(i,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level()}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(o)))(i||o)}})();static ɵcmp=sa({type:o,selectors:[[`p-menubarSub`],[`p-menubarsub`],[``,`pMenubarSub`,``]],hostVars:7,hostBindings:function(t,i){t&2&&(am(`id`,i.root()?i.menuId():null)(`aria-activedescendant`,i.focusedItemId())(`role`,`menubar`),fb(i.inlineStyles()),hb(i.level()===0?i.cx(`rootList`):i.cx(`submenu`)))},inputs:{items:[1,`items`],itemTemplate:[1,`itemTemplate`],root:[1,`root`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],mobileActive:[1,`mobileActive`],autoDisplay:[1,`autoDisplay`],menuId:[1,`menuId`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],level:[1,`level`],focusedItemId:[1,`focusedItemId`],activeItemPath:[1,`activeItemPath`],inlineStyles:[1,`inlineStyles`],submenuiconTemplate:[1,`submenuiconTemplate`]},outputs:{itemClick:`itemClick`,itemMouseEnter:`itemMouseEnter`,menuFocus:`menuFocus`,menuBlur:`menuBlur`,menuKeydown:`menuKeydown`},features:[em],decls:2,vars:0,consts:[[`listItem`,``],[`role`,`separator`,3,`style`,`class`,`pBind`],[`role`,`menuitem`,`pTooltip`,``,3,`style`,`class`,`pBind`,`tooltipOptions`,`pTooltipUnstyled`],[`role`,`separator`,3,`pBind`],[`role`,`menuitem`,`pTooltip`,``,3,`pBind`,`tooltipOptions`,`pTooltipUnstyled`],[3,`click`,`mouseenter`,`pBind`],[`pMenubarSub`,``,3,`itemTemplate`,`items`,`mobileActive`,`autoDisplay`,`menuId`,`activeItemPath`,`focusedItemId`,`level`,`inlineStyles`,`pt`,`pBind`,`unstyled`],[`pRipple`,``,3,`class`,`ngStyle`,`pBind`],[`pRipple`,``,3,`routerLink`,`queryParams`,`routerLinkActive`,`routerLinkActiveOptions`,`target`,`class`,`ngStyle`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`,`pBind`],[`pRipple`,``,3,`ngStyle`,`pBind`],[3,`class`,`ngStyle`,`pBind`],[3,`class`,`ngStyle`,`id`,`pBind`],[3,`class`,`ngStyle`,`innerHTML`,`id`,`pBind`],[3,`class`,`value`,`pt`,`unstyled`],[3,`ngStyle`,`pBind`],[3,`ngStyle`,`id`,`pBind`],[3,`ngStyle`,`innerHTML`,`id`,`pBind`],[3,`value`,`pt`,`unstyled`],[4,`ngTemplateOutlet`],[`data-p-icon`,`angle-down`,3,`class`,`pBind`],[`data-p-icon`,`angle-right`,3,`class`,`pBind`],[`data-p-icon`,`angle-down`,3,`pBind`],[`data-p-icon`,`angle-right`,3,`pBind`],[`pRipple`,``,3,`routerLink`,`queryParams`,`routerLinkActive`,`routerLinkActiveOptions`,`target`,`ngStyle`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`,`pBind`],[3,`class`,`ngStyle`,`innerHTML`,`pBind`],[3,`ngStyle`,`innerHTML`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMenubarSub`,``,3,`itemClick`,`itemMouseEnter`,`itemTemplate`,`items`,`mobileActive`,`autoDisplay`,`menuId`,`activeItemPath`,`focusedItemId`,`level`,`inlineStyles`,`pt`,`pBind`,`unstyled`]],template:function(t,i){t&1&&Lw(0,Rt,2,2,null,null,Rw),t&2&&kw(i.items())},dependencies:[o,Gl,GT,WT,oa,kt$1,ta,W,at,rt,L,m$1,m$2,ne$1,P$1,XH,F],encapsulation:2})}return o})();var un=(()=>{class o extends J2{document=g(te);platformId=g(so);el=g(Ue);renderer=g(yt$1);cd=g(ha);menubarService=g(Ie);componentName=`Menubar`;$pcMenubar=g(lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}model=zt$1();styleClass=zt$1();autoZIndex=zt$1(!0,{transform:CT});baseZIndex=zt$1(0,{transform:ST});autoDisplay=zt$1(!0,{transform:CT});autoHide=zt$1(void 0,{transform:CT});breakpoint=zt$1(`960px`);autoHideDelay=zt$1(100,{transform:ST});id=zt$1();ariaLabel=zt$1();ariaLabelledBy=zt$1();onFocus=HV();onBlur=HV();menubutton=WV(`menubutton`);rootmenu;mobileActive;matchMediaListener;query;queryMatches=ne(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=ne([]);number=ne(0);focusedItemInfo=ne({index:-1,level:0,parentKey:``,item:null});searchValue=``;searchTimeout;_processedItems;_componentStyle=g(_e);_generatedId;get resolvedId(){return this.id()||(this._generatedId??=Vy(`pn_id_`))}get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model()||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.resolvedId}${V(e.parentKey)?`_`+e.parentKey:``}_${e.index}`:null}constructor(){super(),$t$1(()=>{V(this.activeItemPath())?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}),$t$1(()=>{this._processedItems=this.createProcessedItems(this.model()||[])})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide(),this.menubarService.autoHideDelay=this.autoHideDelay(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()})}startTemplate;endTemplate;itemTemplate=GV(`item`,{descendants:!1});menuIconTemplate=GV(`menuicon`,{descendants:!1});submenuIconTemplate=GV(`submenuicon`,{descendants:!1});templates=zV(JH);_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`start`:this._startTemplate=e.template;break;case`end`:this._endTemplate=e.template;break;case`menuicon`:this._menuIconTemplate=e.template;break;case`submenuicon`:this._submenuIconTemplate=e.template;break;case`item`:this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,i={},n=``){let r=[];return e&&e.forEach((T,y)=>{let x=(n!==``?n+`_`:``)+y,k={item:T,index:y,level:t,key:x,parent:i,parentKey:n};k.items=this.createProcessedItems(T.items,t+1,k,x),r.push(k)}),r}bindMatchMediaListener(){if(L$(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint()})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener(`change`,this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener(`change`,this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?oe(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code===`Enter`||e.code===`Space`)&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:i}=e,n=this.isProcessedItemGroup(i),r=Ho(i.parent);if(this.isSelected(i)){let{index:y,key:x,level:k,parentKey:U,item:V}=i;this.activeItemPath.set(this.activeItemPath().filter(w=>x!==w.key&&x.startsWith(w.key))),this.focusedItemInfo.set({index:y,level:k,parentKey:U,item:V}),this.dirty=!r,eH(this.rootmenu?.el.nativeElement)}else if(n)this.onItemChange(e);else{let y=r?i:this.activeItemPath().find(x=>x.parentKey===``);this.hide(t),this.changeFocusedItemIndex(t,y?y.index:-1),this.mobileActive=!1,eH(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){mH()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},`hover`):this.dirty&&this.onItemChange(e,`hover`)}onMouseLeave(){let e=this.menubarService.autoHide,t=this.menubarService.autoHideDelay;e&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},t)}changeFocusedItemIndex(e,t){let i=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let n=this.focusedItemInfo();this.focusedItemInfo.set($(v({},n),{item:i.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.resolvedId}_${e}`:this.focusedItemId,i=X$(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:`nearest`,inline:`nearest`})}onItemChange(e,t){let{processedItem:i,isFocus:n}=e;if(Ho(i))return;let{index:r,key:T,level:y,parentKey:x,items:k,item:U}=i,V$1=V(k),w=this.activeItemPath().filter(fe=>fe.parentKey!==x&&fe.parentKey!==T);V$1&&w.push(i),this.focusedItemInfo.set({index:r,level:y,parentKey:x,item:U}),V$1&&(this.dirty=!0),n&&eH(this.rootmenu?.el.nativeElement),!(t===`hover`&&this.queryMatches())&&this.activeItemPath.set(w)}toggle(e){this.mobileActive?(this.mobileActive=!1,m.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,m.set(`menu`,this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{eH(this.menubutton()?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:``,item:null}),t&&eH(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:``,item:e?.item}),eH(this.rootmenu?.el.nativeElement)}onMenuMouseDown(){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let n=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:``,item:n?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let i=this.document.activeElement;i&&this.el.nativeElement.contains(i)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:``,item:null}),this.searchValue=``,this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&xH(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return V(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&V(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,`disabled`)}isItemSeparator(e){return this.getItemProp(e,`separator`)}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&V(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||``)+t;let i=-1,n=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(r=>this.isItemMatched(r)),i!==-1&&(n=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),n}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,`label`)}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?Ho(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let n=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(n=>n.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let n=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(Ho(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let n=this.activeItemPath().find(r=>r.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:n?n.parentKey:``,item:t.item}),this.searchValue=``,this.onArrowLeftKey(e);let r=this.activeItemPath().filter(T=>T.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],i=t?this.activeItemPath().find(n=>n.key===t.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let n=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(n),e.preventDefault()}else{let n=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=X$(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&(X$(t,`[data-pc-section="itemlink"]`)||X$(t,`a,button`));i?i.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return MH(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?MH(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e}bindResizeListener(){L$(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,`resize`,e=>{mH()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){L$(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,`click`,e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.menubutton(),n=this.mobileActive&&i?.nativeElement!==e.target&&!i?.nativeElement?.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static ɵfac=function(t){return new(t||o)};static ɵcmp=sa({type:o,selectors:[[`p-menubar`]],contentQueries:function(t,i,n){if(t&1&&(Dm(n,i.itemTemplate,zt,4)(n,i.menuIconTemplate,qt,4)(n,i.submenuIconTemplate,Zt,4)(n,i.templates,JH,4),ym(n,Gt,4)(n,Ut,4)),t&2){Jw(4);let r;Kw(r=Qw())&&(i.startTemplate=r.first),Kw(r=Qw())&&(i.endTemplate=r.first)}},viewQuery:function(t,i){if(t&1&&(Em(i.menubutton,jt,5),vm(Qt,5)),t&2){Jw();let n;Kw(n=Qw())&&(i.rootmenu=n.first)}},hostVars:2,hostBindings:function(t,i){t&2&&hb(i.cn(i.cx(`root`),i.styleClass()))},inputs:{model:[1,`model`],styleClass:[1,`styleClass`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],autoDisplay:[1,`autoDisplay`],autoHide:[1,`autoHide`],breakpoint:[1,`breakpoint`],autoHideDelay:[1,`autoHideDelay`],id:[1,`id`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onFocus:`onFocus`,onBlur:`onBlur`},features:[Al([Ie,_e,{provide:lt,useExisting:o},{provide:H_,useExisting:o}]),uw([L]),em],ngContentSelectors:Wt,decls:6,vars:19,consts:[[`rootmenu`,``],[`menubutton`,``],[3,`class`,`pBind`],[`tabindex`,`0`,`role`,`button`,3,`class`,`pBind`],[`pMenubarSub`,``,`tabindex`,`0`,3,`itemClick`,`mousedown`,`focus`,`blur`,`keydown`,`itemMouseEnter`,`mouseleave`,`items`,`itemTemplate`,`menuId`,`root`,`baseZIndex`,`autoZIndex`,`mobileActive`,`autoDisplay`,`focusedItemId`,`submenuiconTemplate`,`activeItemPath`,`pt`,`pBind`,`unstyled`],[3,`class`],[3,`pBind`],[4,`ngTemplateOutlet`],[`tabindex`,`0`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`data-p-icon`,`bars`,3,`pBind`]],template:function(t,i){t&1&&(ua(),Aw(0,Xt,2,4,`div`,2),Aw(1,nn,4,9,`a`,3),Ws(2,`ul`,4,0),gm(`itemClick`,function(r){return i.onItemClick(r)})(`mousedown`,function(){return i.onMenuMouseDown()})(`focus`,function(r){return i.onMenuFocus(r)})(`blur`,function(r){return i.onMenuBlur(r)})(`keydown`,function(r){return i.onKeyDown(r)})(`itemMouseEnter`,function(r){return i.onItemMouseEnter(r)})(`mouseleave`,function(){return i.onMouseLeave()}),wl(),Aw(4,an,2,4,`div`,2)(5,sn,2,2,`div`,5)),t&2&&(xw(i.startTemplate||i._startTemplate?0:-1),MC(),xw(i.model()&&i.model().length>0?1:-1),MC(),cm(`items`,i.processedItems)(`itemTemplate`,i.itemTemplate())(`menuId`,i.resolvedId)(`root`,!0)(`baseZIndex`,i.baseZIndex())(`autoZIndex`,i.autoZIndex())(`mobileActive`,i.mobileActive)(`autoDisplay`,i.autoDisplay())(`focusedItemId`,i.focused?i.focusedItemId:void 0)(`submenuiconTemplate`,i.submenuIconTemplate()||i._submenuIconTemplate)(`activeItemPath`,i.activeItemPath())(`pt`,i.pt())(`pBind`,i.ptm(`rootList`))(`unstyled`,i.unstyled()),am(`aria-label`,i.ariaLabel())(`aria-labelledby`,i.ariaLabelledBy()),MC(2),xw(i.endTemplate||i._endTemplate?4:5))},dependencies:[Gl,GT,oa,ln,at,L,p,ne$1,XH,F],encapsulation:2})}return o})();var Hn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=Ro({type:o});static ɵinj=Zn({imports:[un,XH,XH]})}return o})();export{un as n,Hn as t};