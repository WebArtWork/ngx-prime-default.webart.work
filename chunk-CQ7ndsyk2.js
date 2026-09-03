import{$a as zt$1,$i as qi,$r as gm,$t as Ph,At as Lf,Ba as xH,Bn as X$,Br as em,Da as uw,Dt as L$,Ea as um,Et as Kw,Ft as MH,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,It as Ml,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Ln as WV,Lr as eH,Nn as Vy,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Q as Ho,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,U as GT,Vi as oe,W as GV,X as HV,Z as H_,Zt as P,cn as Rb,d as AI,dn as Ro,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,jt as Lm,ki as mH,kn as V,l as $w,lt as J2,mn as ST,na as qw,oi as hb,on as Qw,p as Al,pa as sm,qi as pm,qr as fm,qt as Ob,s as $t$1,ua as sa,un as Rf,ut as JH,vi as kw,yr as bm}from"./chunk-CXRXTJ2s.js";import"./chunk-B-beFFsS.js";import"./chunk-Dh3CHJA7.js";import{r as m}from"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import{n as L}from"./chunk-CerPySWC.js";import{n as ne$1,t as P$1}from"./chunk-CC7-t2QW.js";import{t as W}from"./chunk-CxBE3lzD.js";import{H as oa,I as at$1,L as rt$1,U as ta,V as kt$1}from"./main-4W6E6VEG.js";import{t as m$1}from"./chunk-DPHe9ERu.js";import{t as m$2}from"./chunk-ByvPUi5T.js";import{t as p}from"./chunk-B7lRkRge2.js";var je=`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`;var Ze=o=>({processedItem:o});var nt=()=>({exact:!1});var it=o=>({$implicit:o});function ot(o,s){if(o&1&&(Ws(0,`li`,2),wb(1),wl()),o&2){let e=qw();fb(e.getItemProp(e.submenu(),`style`)),hb(e.cn(e.cx(`submenuLabel`),e.getItemProp(e.submenu(),`class`))),cm(`pBind`,e.ptm(`submenuLabel`)),MC(),Ml(` `,e.getItemLabel(e.submenu()),` `)}}function at(o,s){if(o&1&&um(0,`li`,5),o&2){let e=qw().$implicit,t=qw();fb(t.getItemProp(e,`style`)),hb(t.cn(t.cx(`separator`),t.getItemProp(e,`class`))),cm(`pBind`,t.ptm(`separator`)),am(`id`,t.getItemId(e))}}function mt(o,s){if(o&1&&um(0,`span`,15),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemIcon`),n.getItemProp(t,`icon`),n.getItemProp(t,`iconClass`))),cm(`ngStyle`,n.getItemProp(t,`iconStyle`))(`pBind`,n.getPTOptions(t,i,`itemIcon`)),am(`tabindex`,-1)}}function st(o,s){if(o&1&&(Ws(0,`span`,15),wb(1),wl()),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`pBind`,n.getPTOptions(t,i,`itemLabel`)),MC(),Ml(` `,n.getItemLabel(t),` `)}}function rt(o,s){if(o&1&&um(0,`span`,16),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`innerHTML`,n.getItemLabel(t),AI)(`pBind`,n.getPTOptions(t,i,`itemLabel`))}}function lt(o,s){if(o&1&&um(0,`p-badge`,17),o&2){let e=qw(4).$implicit,t=qw();hb(t.getItemProp(e,`badgeStyleClass`)),cm(`value`,t.getItemProp(e,`badge`))(`unstyled`,t.unstyled())}}function dt(o,s){if(o&1&&(qf(),um(0,`svg`,20)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`)),am(`aria-hidden`,!0)}}function ut(o,s){if(o&1&&(qf(),um(0,`svg`,22)),o&2){let e=qw(7),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`)),am(`aria-hidden`,!0)}}function ct(o,s){if(o&1&&Aw(0,ut,1,4,`:svg:svg`,21),o&2)xw(qw(7).orientation()===`vertical`?0:-1)}function pt(o,s){if(o&1&&Aw(0,dt,1,4,`:svg:svg`,19)(1,ct,1,1),o&2){let e=qw(6);xw(e.orientation()===`horizontal`||e.mobileActive()?0:1)}}function gt(o,s){}function _t(o,s){o&1&&nm(0,gt,0,0,`ng-template`,23),o&2&&sm(`aria-hidden`,!0)}function It(o,s){if(o&1&&(Aw(0,pt,2,1),nm(1,_t,1,1,null,18)),o&2){let e=qw(5);xw(!e.megaMenu.submenuIconTemplate()&&!e.megaMenu._submenuIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.megaMenu.submenuIconTemplate()||e.megaMenu._submenuIconTemplate)}}function bt(o,s){if(o&1&&(Ws(0,`a`,11),Aw(1,mt,1,5,`span`,12),Aw(2,st,2,5,`span`,12)(3,rt,1,5,`span`,13),Aw(4,lt,1,4,`p-badge`,14),Aw(5,It,2,2),wl()),o&2){let e=qw(3),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLink`),n.getItemProp(t,`linkClass`))),cm(`target`,n.getItemProp(t,`target`))(`ngStyle`,n.getItemProp(t,`linkStyle`))(`pBind`,n.getPTOptions(t,i,`itemLink`)),am(`href`,n.getItemProp(t,`url`),Ph)(`data-automationid`,n.getItemProp(t,`automationId`))(`title`,n.getItemProp(t,`title`))(`tabindex`,-1),MC(),xw(n.getItemProp(t,`icon`)?1:-1),MC(),xw(n.getItemProp(t,`escape`)?2:3),MC(2),xw(n.getItemProp(t,`badge`)?4:-1),MC(),xw(n.isItemGroup(t)?5:-1)}}function ft(o,s){if(o&1&&um(0,`span`,15),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemIcon`),n.getItemProp(t,`icon`),n.getItemProp(t,`iconClass`))),cm(`ngStyle`,n.getItemProp(t,`iconStyle`))(`pBind`,n.getPTOptions(t,i,`itemIcon`)),am(`tabindex`,-1)}}function ht(o,s){if(o&1&&(Ws(0,`span`,15),wb(1),wl()),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`pBind`,n.getPTOptions(t,i,`itemLabel`)),MC(),Lm(n.getItemLabel(t))}}function xt(o,s){if(o&1&&um(0,`span`,16),o&2){let e=qw(4),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLabel`),n.getItemProp(t,`labelClass`))),cm(`ngStyle`,n.getItemProp(t,`labelStyle`))(`innerHTML`,n.getItemLabel(t),AI)(`pBind`,n.getPTOptions(t,i,`itemLabel`))}}function vt(o,s){if(o&1&&um(0,`p-badge`,25),o&2){let e=qw(4).$implicit,t=qw();cm(`styleClass`,t.getItemProp(e,`badgeStyleClass`))(`value`,t.getItemProp(e,`badge`))(`unstyled`,t.unstyled())}}function yt(o,s){if(o&1&&(qf(),um(0,`svg`,20)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`)),am(`aria-hidden`,!0)}}function Ct(o,s){if(o&1&&(qf(),um(0,`svg`,22)),o&2){let e=qw(6),t=e.$implicit,i=e.$index,n=qw();hb(n.cx(`submenuIcon`)),cm(`pBind`,n.getPTOptions(t,i,`submenuIcon`)),am(`aria-hidden`,!0)}}function Mt(o,s){if(o&1&&(Aw(0,yt,1,4,`:svg:svg`,19),Aw(1,Ct,1,4,`:svg:svg`,21)),o&2){let e=qw(6);xw(e.orientation()===`horizontal`?0:-1),MC(),xw(e.orientation()===`vertical`?1:-1)}}function Tt(o,s){}function kt(o,s){o&1&&nm(0,Tt,0,0,`ng-template`,23),o&2&&sm(`aria-hidden`,!0)}function St(o,s){if(o&1&&(Aw(0,Mt,2,2),nm(1,kt,1,1,null,18)),o&2){let e=qw(5);xw(!e.megaMenu.submenuIconTemplate()&&!e.megaMenu._submenuIconTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.megaMenu.submenuIconTemplate()||e.megaMenu._submenuIconTemplate)}}function Lt(o,s){if(o&1&&(Ws(0,`a`,24),Aw(1,ft,1,5,`span`,12),Aw(2,ht,2,5,`span`,12)(3,xt,1,5,`span`,13),Aw(4,vt,1,3,`p-badge`,25),Aw(5,St,2,2),wl()),o&2){let e=qw(3),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`itemLink`),n.getItemProp(t,`linkClass`))),cm(`routerLink`,n.getItemProp(t,`routerLink`))(`queryParams`,n.getItemProp(t,`queryParams`))(`routerLinkActive`,`p-megamenu-item-link-active`)(`routerLinkActiveOptions`,n.getItemProp(t,`routerLinkActiveOptions`)||Ob(22,nt))(`target`,n.getItemProp(t,`target`))(`ngStyle`,n.getItemProp(t,`linkStyle`))(`fragment`,n.getItemProp(t,`fragment`))(`queryParamsHandling`,n.getItemProp(t,`queryParamsHandling`))(`preserveFragment`,n.getItemProp(t,`preserveFragment`))(`skipLocationChange`,n.getItemProp(t,`skipLocationChange`))(`replaceUrl`,n.getItemProp(t,`replaceUrl`))(`state`,n.getItemProp(t,`state`))(`pBind`,n.getPTOptions(t,i,`itemLink`)),am(`data-automationid`,n.getItemProp(t,`automationId`))(`title`,n.getItemProp(t,`title`))(`tabindex`,-1),MC(),xw(n.getItemProp(t,`icon`)?1:-1),MC(),xw(n.getItemProp(t,`escape`)?2:3),MC(2),xw(n.getItemProp(t,`badge`)?4:-1),MC(),xw(n.isItemGroup(t)?5:-1)}}function wt(o,s){if(o&1&&(Aw(0,bt,6,13,`a`,9),Aw(1,Lt,6,23,`a`,10)),o&2){let e=qw(2).$implicit,t=qw();xw(t.getItemProp(e,`routerLink`)?-1:0),MC(),xw(t.getItemProp(e,`routerLink`)?1:-1)}}function Pt(o,s){}function Ft(o,s){o&1&&nm(0,Pt,0,0,`ng-template`)}function Bt(o,s){if(o&1&&nm(0,Ft,1,0,null,26),o&2){let e=qw(2).$implicit;cm(`ngTemplateOutlet`,qw().itemTemplate())(`ngTemplateOutletContext`,Rb(2,it,e.item))}}function Et(o,s){if(o&1){let e=$w();Ws(0,`ul`,29),gm(`itemClick`,function(i){Rf(e);return Lf(qw(5).itemClick.emit(i))})(`itemMouseEnter`,function(i){Rf(e);return Lf(qw(5).onItemMouseEnter(i))}),wl()}if(o&2){let e=s.$implicit,t=qw(5);cm(`id`,t.getSubListId(e))(`submenu`,e)(`items`,e.items)(`itemTemplate`,t.itemTemplate())(`mobileActive`,t.mobileActive())(`menuId`,t.menuId())(`focusedItemId`,t.focusedItemId())(`level`,t.level()+1)(`root`,!1)(`pt`,t.pt())(`unstyled`,t.unstyled())}}function Dt(o,s){if(o&1&&(Ws(0,`div`,27),Lw(1,Et,1,11,`ul`,28,Rw),wl()),o&2){let e=s.$implicit,t=qw(3).$implicit,i=qw();hb(i.cx(`column`,Rb(3,Ze,t))),cm(`pBind`,i.ptm(`column`)),MC(),kw(e)}}function At(o,s){if(o&1&&(Ws(0,`div`,27)(1,`div`,27),Lw(2,Dt,3,5,`div`,8,Rw),wl()()),o&2){let e=qw(2).$implicit,t=qw();hb(t.cx(`overlay`)),cm(`pBind`,t.ptm(`overlay`)),MC(),hb(t.cx(`grid`)),cm(`pBind`,t.ptm(`grid`)),MC(),kw(e.items)}}function Vt(o,s){if(o&1){let e=$w();Ws(0,`li`,6,0)(2,`div`,7),gm(`click`,function(i){Rf(e);let n=qw().$implicit;return Lf(qw().onItemClick(i,n))})(`mouseenter`,function(i){Rf(e);let n=qw().$implicit;return Lf(qw().onItemMouseEnter({$event:i,processedItem:n}))}),Aw(3,wt,2,2),Aw(4,Bt,1,4),wl(),Aw(5,At,4,6,`div`,8),wl()}if(o&2){let e=qw(),t=e.$implicit,i=e.$index,n=qw();hb(n.cn(n.cx(`item`,Rb(23,Ze,t)),n.getItemProp(t,`styleClass`))),cm(`ngStyle`,n.getItemProp(t,`style`))(`tooltipOptions`,n.getItemProp(t,`tooltipOptions`))(`pBind`,n.getPTOptions(t,i,`item`))(`pTooltipUnstyled`,n.unstyled()),am(`id`,n.getItemId(t))(`data-p-active`,n.isItemActive(t))(`data-p-focused`,n.isItemFocused(t))(`data-p-disabled`,n.isItemDisabled(t))(`aria-label`,n.getItemLabel(t))(`aria-disabled`,n.isItemDisabled(t)||void 0)(`aria-haspopup`,n.isItemGroup(t)&&!n.getItemProp(t,`to`)?`menu`:void 0)(`aria-expanded`,n.isItemGroup(t)?n.isItemActive(t):void 0)(`aria-level`,n.level()+1)(`aria-setsize`,n.getAriaSetSize())(`aria-posinset`,n.getAriaPosInset(i)),MC(2),hb(n.cx(`itemContent`)),cm(`pBind`,n.getPTOptions(t,i,`itemContent`)),MC(),xw(n.itemTemplate()?-1:3),MC(),xw(n.itemTemplate()?4:-1),MC(),xw(n.isItemVisible(t)&&n.isItemGroup(t)?5:-1)}}function $t(o,s){if(o&1&&(Aw(0,at,1,6,`li`,3),Aw(1,Vt,6,25,`li`,4)),o&2){let e=s.$implicit,t=qw();xw(t.isItemVisible(e)&&t.getItemProp(e,`separator`)?0:-1),MC(),xw(t.isItemVisible(e)&&!t.getItemProp(e,`separator`)?1:-1)}}var Nt=[`menuicon`];var Kt=[`submenuicon`];var Ot=[`item`];var zt=[`button`];var Ht=[`buttonicon`];var qt=[`start`];var Gt=[`end`];var Rt=[`menubutton`];var Ut=[`rootmenu`];function Qt(o,s){o&1&&fm(0)}function jt(o,s){if(o&1&&(Ws(0,`div`,5),nm(1,Qt,1,0,`ng-container`,3),wl()),o&2){let e=qw();hb(e.cx(`start`)),cm(`pBind`,e.ptm(`start`)),MC(),cm(`ngTemplateOutlet`,e.startTemplate||e._startTemplate)}}function Wt(o,s){if(o&1&&(qf(),um(0,`svg`,8)),o&2)cm(`pBind`,qw(3).ptm(`buttonIcon`))}function Zt(o,s){}function Jt(o,s){o&1&&nm(0,Zt,0,0,`ng-template`)}function Xt(o,s){if(o&1){let e=$w();Ws(0,`a`,7,1),gm(`click`,function(i){Rf(e);return Lf(qw(2).menuButtonClick(i))})(`keydown`,function(i){Rf(e);return Lf(qw(2).menuButtonKeydown(i))}),Aw(2,Wt,1,1,`:svg:svg`,8),nm(3,Jt,1,0,null,3),wl()}if(o&2){let e=qw(2);hb(e.cx(`button`)),cm(`pBind`,e.ptm(`button`)),am(`aria-haspopup`,!!(e.model().length&&e.model().length>0))(`aria-expanded`,e.mobileActive)(`aria-controls`,e.resolvedId)(`aria-label`,e.config.translation.aria.navigation),MC(2),xw(!e.buttonIconTemplate()&&!e._buttonIconTemplate?2:-1),MC(),cm(`ngTemplateOutlet`,e.buttonIconTemplate()||e._buttonIconTemplate)}}function Yt(o,s){if(o&1&&Aw(0,Xt,4,9,`a`,6),o&2){let e=qw();xw(e.model()&&e.model().length>0?0:-1)}}function en(o,s){o&1&&fm(0)}function tn(o,s){o&1&&fm(0)}function nn(o,s){if(o&1&&(Ws(0,`div`,5),nm(1,tn,1,0,`ng-container`,3),wl()),o&2){let e=qw();hb(e.cx(`end`)),cm(`pBind`,e.ptm(`end`)),MC(),cm(`ngTemplateOutlet`,e.endTemplate||e._endTemplate)}}var on={rootList:({instance:o})=>({"max-height":o.scrollHeight(),overflow:`auto`})};var an={root:({instance:o})=>[`p-megamenu p-component`,{"p-megamenu-mobile":o.queryMatches(),"p-megamenu-mobile-active":o.mobileActive,"p-megamenu-horizontal":o.orientation()===`horizontal`,"p-megamenu-vertical":o.orientation()===`vertical`}],start:`p-megamenu-start`,button:`p-megamenu-button`,rootList:`p-megamenu-root-list`,submenuLabel:({instance:o,processedItem:s})=>[`p-megamenu-submenu-label`,{"p-disabled":o.isItemDisabled(s)}],item:({instance:o,processedItem:s})=>[`p-megamenu-item`,o.getItemProp(s,`styleClass`),o.getItemProp(s,`class`),{"p-megamenu-item-active":o.isItemActive(s),"p-focus":o.isItemFocused(s),"p-disabled":o.isItemDisabled(s)}],itemContent:`p-megamenu-item-content`,itemLink:`p-megamenu-item-link`,itemIcon:`p-megamenu-item-icon`,itemLabel:`p-megamenu-item-label`,submenuIcon:`p-megamenu-submenu-icon`,overlay:`p-megamenu-overlay`,grid:`p-megamenu-grid`,column:({instance:o,processedItem:s})=>{let e=o.isItemGroup(s)?s.items.length:0,t;if(o.megaMenu.queryMatches())t=`p-megamenu-col-12`;else switch(e){case 2:t=`p-megamenu-col-6`;break;case 3:t=`p-megamenu-col-4`;break;case 4:t=`p-megamenu-col-3`;break;case 6:t=`p-megamenu-col-2`;break;default:t=`p-megamenu-col-12`;break}return t},submenu:`p-megamenu-submenu`,separator:`p-megamenu-separator`,end:`p-megamenu-end`};var ye=(()=>{class o extends Nr{name=`megamenu`;style=je;classes=an;inlineStyles=on;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(o)))(i||o)}})();static ɵprov=P({token:o,factory:o.ɵfac})}return o})();var Je=new b(`MEGAMENU_INSTANCE`);var We=new b(`MEGAMENU_SUB_INSTANCE`);var mn=(()=>{class o extends J2{bindDirectiveInstance=g(L,{self:!0});$pcMegaMenu=g(Je,{optional:!0,skipSelf:!0})??void 0;$pcMegaMenuSub=g(We,{optional:!0,skipSelf:!0})??void 0;id=zt$1();items=zt$1();itemTemplate=zt$1();menuId=zt$1();ariaLabel=zt$1();ariaLabelledBy=zt$1();level=zt$1(0,{transform:ST});focusedItemId=zt$1();disabled=zt$1(!1,{transform:CT});orientation=zt$1();activeItem=zt$1();submenu=zt$1();queryMatches=zt$1(!1,{transform:CT});mobileActive=zt$1(!1,{transform:CT});scrollHeight=zt$1();tabindex=zt$1(0,{transform:ST});root=zt$1(!1,{transform:CT});itemClick=HV();itemMouseEnter=HV();menuFocus=HV();menuBlur=HV();menuKeydown=HV();menuMouseDown=HV();megaMenu=g(qi(()=>Z));_componentStyle=g(ye);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(this.root()?`rootList`:`submenu`))}onItemClick(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,i=null){return e&&e.item?oe(e.item[t],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId()}_${e.key}`}getSubListId(e){return`${this.getItemId(e)}_list`}getItemLabel(e){return this.getItemProp(e,`label`)}isSubmenuVisible(e){return this.submenu()&&!this.root()?this.isItemVisible(e):!0}isItemVisible(e){return this.getItemProp(e,`visible`)!==!1}isItemActive(e){let t=this.activeItem();return V(t)?t.key===e.key:!1}isItemDisabled(e){return this.getItemProp(e,`disabled`)}isItemFocused(e){return this.focusedItemId()===this.getItemId(e)}isItemGroup(e){return V(e.items)}getAriaSetSize(){return this.items()?.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,`separator`)).length}getAriaPosInset(e){return e-(this.items()?.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,`separator`)).length||0)+1}onItemMouseEnter(e){let{event:t,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:i})}getPTOptions(e,t,i){let n={context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}};return this.ptm(i,n)}static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(o)))(i||o)}})();static ɵcmp=sa({type:o,selectors:[[`p-megaMenuSub`],[`p-megamenu-sub`],[`ul`,`pMegaMenuSub`,``]],hostVars:12,hostBindings:function(t,i){t&1&&gm(`keydown`,function(a){return i.menuKeydown.emit(a)})(`focus`,function(a){return i.menuFocus.emit(a)})(`blur`,function(a){return i.menuBlur.emit(a)})(`mousedown`,function(a){return i.menuMouseDown.emit(a)}),t&2&&(pm(`tabIndex`,i.tabindex()),am(`role`,i.root()?`menubar`:`menu`)(`id`,i.id())(`aria-orientation`,i.orientation())(`aria-activedescendant`,i.focusedItemId())(`data-pc-section`,i.root()?`rootlist`:`submenu`),fb(i.sx(`rootList`)),hb(i.root()?i.cx(`rootList`):i.cx(`submenu`)),bm(`display`,i.isSubmenuVisible(i.submenu())?null:`none`))},inputs:{id:[1,`id`],items:[1,`items`],itemTemplate:[1,`itemTemplate`],menuId:[1,`menuId`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],level:[1,`level`],focusedItemId:[1,`focusedItemId`],disabled:[1,`disabled`],orientation:[1,`orientation`],activeItem:[1,`activeItem`],submenu:[1,`submenu`],queryMatches:[1,`queryMatches`],mobileActive:[1,`mobileActive`],scrollHeight:[1,`scrollHeight`],tabindex:[1,`tabindex`],root:[1,`root`]},outputs:{itemClick:`itemClick`,itemMouseEnter:`itemMouseEnter`,menuFocus:`menuFocus`,menuBlur:`menuBlur`,menuKeydown:`menuKeydown`,menuMouseDown:`menuMouseDown`},features:[Al([{provide:We,useExisting:o},{provide:H_,useExisting:o}]),uw([L]),em],decls:3,vars:1,consts:[[`listItem`,``],[`role`,`presentation`,3,`class`,`style`,`pBind`],[`role`,`presentation`,3,`pBind`],[`role`,`separator`,3,`style`,`class`,`pBind`],[`role`,`menuitem`,`pTooltip`,``,3,`ngStyle`,`class`,`tooltipOptions`,`pBind`,`pTooltipUnstyled`],[`role`,`separator`,3,`pBind`],[`role`,`menuitem`,`pTooltip`,``,3,`ngStyle`,`tooltipOptions`,`pBind`,`pTooltipUnstyled`],[3,`click`,`mouseenter`,`pBind`],[3,`class`,`pBind`],[`pRipple`,``,3,`target`,`class`,`ngStyle`,`pBind`],[`pRipple`,``,3,`routerLink`,`queryParams`,`routerLinkActive`,`routerLinkActiveOptions`,`target`,`class`,`ngStyle`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`,`pBind`],[`pRipple`,``,3,`target`,`ngStyle`,`pBind`],[3,`class`,`ngStyle`,`pBind`],[3,`class`,`ngStyle`,`innerHTML`,`pBind`],[3,`class`,`value`,`unstyled`],[3,`ngStyle`,`pBind`],[3,`ngStyle`,`innerHTML`,`pBind`],[3,`value`,`unstyled`],[4,`ngTemplateOutlet`],[`data-p-icon`,`angle-down`,3,`class`,`pBind`],[`data-p-icon`,`angle-down`,3,`pBind`],[`data-p-icon`,`angle-right`,3,`class`,`pBind`],[`data-p-icon`,`angle-right`,3,`pBind`],[3,`aria-hidden`],[`pRipple`,``,3,`routerLink`,`queryParams`,`routerLinkActive`,`routerLinkActiveOptions`,`target`,`ngStyle`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`,`pBind`],[3,`styleClass`,`value`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`],[`pMegaMenuSub`,``,3,`id`,`submenu`,`items`,`itemTemplate`,`mobileActive`,`menuId`,`focusedItemId`,`level`,`root`,`pt`,`unstyled`],[`pMegaMenuSub`,``,3,`itemClick`,`itemMouseEnter`,`id`,`submenu`,`items`,`itemTemplate`,`mobileActive`,`menuId`,`focusedItemId`,`level`,`root`,`pt`,`unstyled`]],template:function(t,i){t&1&&(Aw(0,ot,2,6,`li`,1),Lw(1,$t,2,2,null,null,Rw)),t&2&&(xw(i.submenu()?0:-1),MC(),kw(i.items()))},dependencies:[o,Gl,GT,WT,oa,kt$1,ta,W,at$1,rt$1,L,m$1,m$2,ne$1,P$1,XH],encapsulation:2})}return o})();var Z=(()=>{class o extends J2{componentName=`MegaMenu`;bindDirectiveInstance=g(L,{self:!0});model=zt$1();styleClass=zt$1();orientation=zt$1(`horizontal`);id=zt$1();ariaLabel=zt$1();ariaLabelledBy=zt$1();breakpoint=zt$1(`960px`);scrollHeight=zt$1(`20rem`);disabled=zt$1(!1,{transform:CT});tabindex=zt$1(0,{transform:ST});startTemplate;endTemplate;menuIconTemplate=GV(`menuicon`,{descendants:!1});submenuIconTemplate=GV(`submenuicon`,{descendants:!1});itemTemplate=GV(`item`,{descendants:!1});buttonTemplate=GV(`button`,{descendants:!1});buttonIconTemplate=GV(`buttonicon`,{descendants:!1});templates=zV(JH);menubuttonViewChild=WV(`menubutton`);rootmenu=WV(`rootmenu`);_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=ne(null);focusedItemInfo=ne({index:-1,level:0,parentKey:``,item:null});searchValue=``;searchTimeout;_processedItems;_componentStyle=g(ye);matchMediaListener;query;queryMatches=ne(!1);mobileActive=!1;_generatedId;get resolvedId(){return this.id()||(this._generatedId??=Vy(`pn_id_`))}get visibleItems(){let e=V(this.activeItem())?this.activeItem():null;return e?e.items.reduce((t,i)=>(i.forEach(n=>{n.items.forEach(a=>{t.push(a)})}),t),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model()||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e?.item&&e.item?.id?e.item.id:V(e.key)?`${this.resolvedId}_${e.key}`:null}constructor(){super(),$t$1(()=>{V(this.activeItem())?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}),$t$1(()=>{this._processedItems=this.createProcessedItems(this.model()||[])})}onInit(){this.bindMatchMediaListener()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`start`:this._startTemplate=e.template;break;case`end`:this._endTemplate=e.template;break;case`menuicon`:this._menuIconTemplate=e.template;break;case`submenuicon`:this._submenuIconTemplate=e.template;break;case`item`:this._itemTemplate=e.template;break;case`button`:this._buttonTemplate=e.template;break;case`buttonicon`:this._buttonIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}bindMatchMediaListener(){if(L$(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint()})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener(`change`,this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener(`change`,this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,t=0,i={},n=``,a){let f=[];return e&&e.forEach((v,T)=>{let y=(n!==``?n+`_`:``)+(a!==void 0?a+`_`:``)+T,P={item:v,index:T,level:t,key:y,parent:i,parentKey:n,columnIndex:a!==void 0?a:i.columnIndex!==void 0?i.columnIndex:T};P.items=t===0&&v.items&&v.items.length>0?v.items.map((Ye,et)=>this.createProcessedItems(Ye,t+1,P,y,et)):this.createProcessedItems(v.items,t+1,P,y),f.push(P)}),f}getItemProp(e,t){return e?oe(e[t]):void 0}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:i}=e,n=this.isProcessedItemGroup(i),a=Ho(i.parent);if(this.isSelected(i)){let{index:v,key:T,parentKey:y,item:P}=i;this.activeItem.set(null),this.focusedItemInfo.set({index:v,key:T,parentKey:y,item:P}),this.dirty=!a,this.mobileActive||eH(this.rootmenu()?.el?.nativeElement,{preventScroll:!0})}else n?this.onItemChange(e):this.hide(t)}onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&this.menuButtonClick(e)}toggle(e){this.mobileActive?(this.mobileActive=!1,m.clear(this.rootmenu()?.el.nativeElement),this.hide()):(this.mobileActive=!0,m.set(`menu`,this.rootmenu()?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:``}),eH(this.rootmenu()?.el.nativeElement)}scrollInView(e=-1){let t=e!==-1?`${this.resolvedId}_${e}`:this.focusedItemId,i;t===null&&this.queryMatches()?i=this.menubuttonViewChild()?.nativeElement:i=X$(this.rootmenu()?.el?.nativeElement,`li[id="${t}"]`),i&&i.scrollIntoView&&i.scrollIntoView({block:`nearest`,inline:`nearest`,behavior:`smooth`})}onItemChange(e){let{processedItem:t,isFocus:i}=e;if(Ho(t))return;let{index:n,key:a,parentKey:f,items:v,item:T}=t,y=V(v);y&&this.activeItem.set(t),this.focusedItemInfo.set({index:n,key:a,parentKey:f,item:T}),y&&(this.dirty=!0),i&&eH(this.rootmenu()?.el?.nativeElement)}hide(e,t){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{eH(this.menubuttonViewChild()?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:``,parentKey:``,item:null}),t&&eH(this.rootmenu()?.el?.nativeElement),this.dirty=!1}onMenuMouseDown(){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&Ho(this.activeItem())&&!this.dirty){let n=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(n);this.focusedItemInfo.set({index:n,key:a.key,parentKey:a.parentKey,item:a.item})}}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let i=this.document.activeElement;i&&this.el.nativeElement.contains(i)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:``,item:null}),this.searchValue=``,this.dirty=!1)})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&xH(e.key)&&this.searchItems(e,e.key);break}}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&V(e.items)}isSelected(e){return V(this.activeItem())?this.activeItem().key===e.key:!1}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,`disabled`)}isItemSeparator(e){return this.getItemProp(e,`separator`)}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&V(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||``)+t;let i=-1,n=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(a=>this.isItemMatched(a)),i!==-1&&(n=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemInfo(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),n}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,`label`)}changeFocusedItemInfo(e,t){let i=this.findVisibleItem(t);if(V(i)){let{key:n,parentKey:a,item:f}=i;this.focusedItemInfo.set({index:t,key:n||``,parentKey:a,item:f})}this.scrollInView()}onArrowDownKey(e){if(this.orientation()===`horizontal`)if(V(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:i,item:n}=this.activeItem();this.focusedItemInfo.set({index:-1,key:``,parentKey:i,item:n})}else{let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){let{parentKey:a,key:f,item:v}=i;this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,key:f,parentKey:a,item:v}),this.searchValue=``}}let t=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}onArrowRightKey(e){let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){if(this.orientation()===`vertical`)if(V(this.activeItem())&&this.activeItem().key===t.key)this.focusedItemInfo.set({index:-1,key:``,parentKey:this.activeItem().key,item:t.item});else{let a=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(a)&&(this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo.set({index:-1,key:a.key,parentKey:a.parentKey,item:a.item}),this.searchValue=``)}let n=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,n)}else{let n=t.columnIndex+1,a=this.visibleItems.findIndex(f=>f.columnIndex===n);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.orientation()===`horizontal`){if(this.focusedItemInfo().index!==-1){let t=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(t)&&V(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:t.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{let t=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}}onArrowLeftKey(e){let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){if(this.orientation()===`horizontal`){let n=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,n)}}else{this.orientation()===`vertical`&&V(this.activeItem())&&t.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:t.item}),this.activeItem.set(null));let n=t.columnIndex-1,a=this.visibleItems.findIndex(f=>f.columnIndex===n);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){V(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=X$(this.rootmenu()?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&(X$(t,`[data-pc-section="itemlink"]`)||X$(t,`a,button`));i?i.click():t&&t.click();let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()}findVisibleItem(e){return V(this.visibleItems)?this.visibleItems[e]:null}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return MH(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?MH(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e}bindResizeListener(){L$(this.platformId)&&(this.resizeListener||(this.resizeListener=e=>{mH()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener(`resize`,this.resizeListener)))}bindOutsideClickListener(){L$(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,`click`,e=>{this.el?.nativeElement!==e.target&&!this.el?.nativeElement.contains(e.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){L$(this.platformId)&&this.resizeListener&&(window.removeEventListener(`resize`,this.resizeListener),this.resizeListener=null)}onDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static ɵfac=function(t){return new(t||o)};static ɵcmp=sa({type:o,selectors:[[`p-megaMenu`],[`p-megamenu`],[`p-mega-menu`]],contentQueries:function(t,i,n){if(t&1&&(Dm(n,i.menuIconTemplate,Nt,4)(n,i.submenuIconTemplate,Kt,4)(n,i.itemTemplate,Ot,4)(n,i.buttonTemplate,zt,4)(n,i.buttonIconTemplate,Ht,4)(n,i.templates,JH,4),ym(n,qt,4)(n,Gt,4)),t&2){Jw(6);let a;Kw(a=Qw())&&(i.startTemplate=a.first),Kw(a=Qw())&&(i.endTemplate=a.first)}},viewQuery:function(t,i){t&1&&Em(i.menubuttonViewChild,Rt,5)(i.rootmenu,Ut,5),t&2&&Jw(2)},hostVars:3,hostBindings:function(t,i){t&2&&(pm(`id`,i.resolvedId),hb(i.cn(i.cx(`root`),i.styleClass())))},inputs:{model:[1,`model`],styleClass:[1,`styleClass`],orientation:[1,`orientation`],id:[1,`id`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],breakpoint:[1,`breakpoint`],scrollHeight:[1,`scrollHeight`],disabled:[1,`disabled`],tabindex:[1,`tabindex`]},features:[Al([ye,{provide:Je,useExisting:o},{provide:H_,useExisting:o}]),uw([L]),em],decls:6,vars:22,consts:[[`rootmenu`,``],[`menubutton`,``],[3,`class`,`pBind`],[4,`ngTemplateOutlet`],[`pMegaMenuSub`,``,3,`itemClick`,`menuFocus`,`menuBlur`,`menuKeydown`,`menuMouseDown`,`itemMouseEnter`,`itemTemplate`,`items`,`menuId`,`root`,`orientation`,`ariaLabel`,`disabled`,`tabindex`,`activeItem`,`level`,`ariaLabelledBy`,`focusedItemId`,`mobileActive`,`queryMatches`,`scrollHeight`,`pt`,`unstyled`],[3,`pBind`],[`role`,`button`,`tabindex`,`0`,3,`class`,`pBind`],[`role`,`button`,`tabindex`,`0`,3,`click`,`keydown`,`pBind`],[`data-p-icon`,`bars`,3,`pBind`]],template:function(t,i){t&1&&(Aw(0,jt,2,4,`div`,2),Aw(1,Yt,1,1),nm(2,en,1,0,`ng-container`,3),Ws(3,`ul`,4,0),gm(`itemClick`,function(a){return i.onItemClick(a)})(`menuFocus`,function(a){return i.onMenuFocus(a)})(`menuBlur`,function(a){return i.onMenuBlur(a)})(`menuKeydown`,function(a){return i.onKeyDown(a)})(`menuMouseDown`,function(){return i.onMenuMouseDown()})(`itemMouseEnter`,function(a){return i.onItemMouseEnter(a)}),wl(),Aw(5,nn,2,4,`div`,2)),t&2&&(xw(i.startTemplate||i._startTemplate?0:-1),MC(),xw(!i.buttonTemplate()&&!i._buttonTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,i.buttonTemplate()||i._buttonTemplate),MC(),cm(`itemTemplate`,i.itemTemplate()||i._itemTemplate)(`items`,i.processedItems)(`menuId`,i.resolvedId)(`root`,!0)(`orientation`,i.orientation())(`ariaLabel`,i.ariaLabel())(`disabled`,i.disabled())(`tabindex`,i.disabled()?-1:i.tabindex())(`activeItem`,i.activeItem())(`level`,0)(`ariaLabelledBy`,i.ariaLabelledBy())(`focusedItemId`,i.focused?i.focusedItemId:void 0)(`mobileActive`,i.mobileActive)(`queryMatches`,i.queryMatches())(`scrollHeight`,i.scrollHeight())(`pt`,i.pt())(`unstyled`,i.unstyled()),am(`id`,i.resolvedId+`_list`),MC(2),xw(i.endTemplate||i._endTemplate?5:-1))},dependencies:[Gl,GT,oa,mn,at$1,L,p,ne$1,XH],encapsulation:2})}return o})();var Xe=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=Ro({type:o});static ɵinj=Zn({imports:[Z,XH,XH]})}return o})();var Vn=(()=>{class o{constructor(){this.items=[{label:`Category 1`,items:[[{label:`Sub 1`,items:[{label:`Item 1`},{label:`Item 2`}]},{label:`Sub 2`,items:[{label:`Item 3`},{label:`Item 4`}]}]]},{label:`Category 2`,items:[[{label:`Sub 3`,items:[{label:`Item 5`},{label:`Item 6`}]}]]}]}static{this.ɵfac=function(t){return new(t||o)}}static{this.ɵcmp=sa({type:o,selectors:[[`uk-megamenu-demo`]],decls:6,vars:1,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[3,`model`]],template:function(t,i){t&1&&(Ws(0,`h1`,0),wb(1,`MegaMenu`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-megaMenu`,3),wl()),t&2&&(MC(5),cm(`model`,i.items))},dependencies:[Xe,Z],encapsulation:2})}}return o})();export{Vn as MegaMenuDemo};