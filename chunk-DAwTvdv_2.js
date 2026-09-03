import{$a as zt,$r as gm,$t as Ph,At as Lf,Bn as X$,Br as em,Da as uw,Dt as L$,Ea as um,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,Jr as g,K as Gl,La as wb,Li as nm,Ln as WV,Nn as Vy,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,U as GT,Vi as oe,W as GV,X as HV,Z as H_,Zt as P,ai as ha,cn as Rb,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,kt as Lb,l as $w,lt as J2,na as qw,oi as hb,p as Al,qr as fm,qt as Ob,ua as sa,un as Rf,ut as JH,vi as kw,wa as u_}from"./chunk-CXRXTJ2s.js";import"./chunk-B-beFFsS.js";import"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import{n as L}from"./chunk-CerPySWC.js";import{t as P$1}from"./chunk-CC7-t2QW.js";import{t as W}from"./chunk-CxBE3lzD.js";import{H as oa,I as at,L as rt,U as ta,V as kt}from"./main-4W6E6VEG.js";var he=`
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
        background: dt('dock.background');
        border: 1px solid dt('dock.border.color');
        padding: dt('dock.padding');
        border-radius: dt('dock.border.radius');
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0 none;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        padding: dt('dock.item.padding');
        border-radius: dt('dock.item.border.radius');
    }

    .p-dock-item.p-focus {
        box-shadow: dt('dock.item.focus.ring.shadow');
        outline: dt('dock.item.focus.ring.width') dt('dock.item.focus.ring.style') dt('dock.item.focus.ring.color');
        outline-offset: dt('dock.item.focus.ring.offset');
    }

    .p-dock-item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
        width: dt('dock.item.size');
        height: dt('dock.item.size');
    }

    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container {
        overflow-x: auto;
        width: 100%;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
        margin: 0 auto;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container,
    .p-dock-mobile.p-dock-right .p-dock-list-container {
        overflow-y: auto;
        height: 100%;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
        margin: auto 0;
    }

    .p-dock-mobile .p-dock-list .p-dock-item {
        transform: none;
        margin: 0;
    }
`;var Ie=[`item`];var Te=[`list`];var De=(i,s)=>({item:i,id:s});var Me=()=>({exact:!1});var xe=i=>({$implicit:i});var Le=(i,s)=>s.label;function we(i,s){if(i&1&&um(0,`span`,11),i&2){let t=qw(3),e=t.$implicit,n=t.$index,o=qw();hb(o.cn(o.cx(`itemIcon`),e.icon,e.iconClass)),cm(`ngStyle`,e.iconStyle)(`pBind`,o.getPTOptions(e,n,`itemIcon`))}}function Oe(i,s){i&1&&fm(0)}function Se(i,s){if(i&1&&um(0,`p-badge`,10),i&2){let t=qw(3),e=t.$implicit,n=t.$index,o=qw();cm(`styleClass`,e.badgeStyleClass)(`value`,e.badge)(`pt`,o.getPTOptions(e,n,`pcBadge`))(`unstyled`,o.unstyled())}}function Fe(i,s){if(i&1&&(Ws(0,`a`,7),Aw(1,we,1,4,`span`,8),nm(2,Oe,1,0,`ng-container`,9),Aw(3,Se,1,4,`p-badge`,10),wl()),i&2){let t=qw(2),e=t.$implicit,n=t.$index,o=qw();hb(o.cn(o.cx(`itemLink`),e?.linkClass)),cm(`routerLink`,e.routerLink)(`queryParams`,e.queryParams)(`ngStyle`,e?.linkStyle)(`routerLinkActiveOptions`,e.routerLinkActiveOptions||Ob(24,Me))(`target`,e.target)(`tooltipOptions`,e.tooltipOptions)(`pTooltipUnstyled`,o.unstyled())(`fragment`,e.fragment)(`queryParamsHandling`,e.queryParamsHandling)(`preserveFragment`,e.preserveFragment)(`skipLocationChange`,e.skipLocationChange)(`replaceUrl`,e.replaceUrl)(`state`,e.state)(`pBind`,o.getPTOptions(e,n,`itemLink`)),am(`title`,e.title)(`data-automationid`,e.automationId)(`tabindex`,e.disabled?null:e.tabindex?e.tabindex:`-1`)(`aria-hidden`,!0),MC(),xw(e.icon&&!o.itemTemplate()&&!o._itemTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,o.itemTemplate()||o.itemTemplate())(`ngTemplateOutletContext`,Rb(25,xe,e)),MC(),xw(e.badge?3:-1)}}function Be(i,s){if(i&1&&um(0,`span`,11),i&2){let t=qw(3),e=t.$implicit,n=t.$index,o=qw();hb(o.cn(o.cx(`itemIcon`),e.icon,e.iconClass)),cm(`ngStyle`,e.iconStyle)(`pBind`,o.getPTOptions(e,n,`itemIcon`))}}function Ae(i,s){i&1&&fm(0)}function $e(i,s){if(i&1&&um(0,`p-badge`,10),i&2){let t=qw(3),e=t.$implicit,n=t.$index,o=qw();cm(`styleClass`,e.badgeStyleClass)(`value`,e.badge)(`pt`,o.getPTOptions(e,n,`pcBadge`))(`unstyled`,o.unstyled())}}function Ee(i,s){if(i&1&&(Ws(0,`a`,12),Aw(1,Be,1,4,`span`,8),nm(2,Ae,1,0,`ng-container`,9),Aw(3,$e,1,4,`p-badge`,10),wl()),i&2){let t=qw(2),e=t.$implicit,n=t.$index,o=qw();hb(o.cn(o.cx(`itemLink`),e?.linkClass)),cm(`tooltipPosition`,e.tooltipPosition)(`ngStyle`,e?.linkStyle)(`tooltipOptions`,e.tooltipOptions)(`pTooltipUnstyled`,o.unstyled())(`target`,e.target)(`pBind`,o.getPTOptions(e,n,`itemLink`)),am(`href`,e.url||null,Ph)(`title`,e.title)(`data-automationid`,e.automationId)(`tabindex`,e.disabled?null:e.tabindex?e.tabindex:`-1`)(`aria-hidden`,!0),MC(),xw(e.icon&&!o.itemTemplate()&&!o._itemTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,o.itemTemplate()||o._itemTemplate)(`ngTemplateOutletContext`,Rb(17,xe,e)),MC(),xw(e.badge?3:-1)}}function Pe(i,s){if(i&1){let t=$w();Ws(0,`li`,4),gm(`click`,function(n){Rf(t);let o=qw().$implicit;return Lf(qw().onItemClick(n,o))})(`mouseenter`,function(){Rf(t);let n=qw().$index;return Lf(qw().onItemMouseEnter(n))}),Ws(1,`div`,1),Aw(2,Fe,4,27,`a`,5)(3,Ee,4,19,`a`,6),wl()()}if(i&2){let t=qw(),e=t.$implicit,n=t.$index,o=qw();hb(o.cn(o.cx(`item`,Lb(13,De,e,o.getItemId(e,n))),e?.styleClass)),cm(`ngStyle`,e.style)(`pBind`,o.getPTOptions(e,n,`item`)),am(`id`,o.getItemId(e,n))(`aria-label`,e.label)(`aria-disabled`,o.disabled(e)||!1)(`data-p-focused`,o.isItemActive(o.getItemId(e,n)))(`data-p-disabled`,o.disabled(e)||!1),MC(),hb(o.cx(`itemContent`)),cm(`pBind`,o.getPTOptions(e,n,`itemContent`)),MC(),xw(o.isClickableRouterLink(e)?2:3)}}function Ne(i,s){if(i&1&&Aw(0,Pe,4,16,`li`,3),i&2){let t=s.$implicit;xw(t.visible!==!1?0:-1)}}var qe={root:({instance:i})=>[`p-dock p-component`,`p-dock-${i.position()}`,{"p-dock-mobile":i.queryMatches()}],listContainer:`p-dock-list-container`,list:`p-dock-list`,item:({instance:i,item:s,id:t})=>[`p-dock-item`,{"p-focus":i.isItemActive(t),"p-disabled":i.disabled(s)}],itemContent:`p-dock-item-content`,itemLink:`p-dock-item-link`,itemIcon:`p-dock-item-icon`};var be=(()=>{class i extends Nr{name=`dock`;style=he;classes=qe;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(i)))(n||i)}})();static ɵprov=P({token:i,factory:i.ɵfac})}return i})();var ye=new b(`DOCK_INSTANCE`);var $=(()=>{class i extends J2{cd=g(ha);componentName=`Dock`;id=zt();styleClass=zt();model=zt(null);position=zt(`bottom`);ariaLabel=zt();breakpoint=zt(`960px`);ariaLabelledBy=zt();onFocus=HV();onBlur=HV();_generatedId=Vy(`pn_id_`);get resolvedId(){return this.id()||this._generatedId}listViewChild=WV(`list`);currentIndex;tabindex=0;focused=!1;focusedOptionIndex=-1;_componentStyle=g(be);bindDirectiveInstance=g(L,{self:!0});$pcDock=g(ye,{optional:!0,skipSelf:!0})??void 0;matchMediaListener;query;queryMatches=ne(!1);mobileActive=ne(!1);get focusedOptionId(){return this.focusedOptionIndex!==-1&&this.focusedOptionIndex!==`-1`?String(this.focusedOptionIndex):null}constructor(){super(),this.currentIndex=-3}onInit(){this.bindMatchMediaListener()}onDestroy(){this.unbindMatchMediaListener()}itemTemplate=GV(`item`);_itemTemplate;getItemId(t,e){return t&&t?.id?t.id:`${e}`}getItemProp(t,e){return t&&t.item?oe(t.item[e]):void 0}disabled(t){return typeof t.disabled==`function`?t.disabled():t.disabled||!1}isItemActive(t){return String(t)===String(this.focusedOptionIndex)}onListMouseLeave(){this.currentIndex=-3,this.cd.markForCheck()}onItemMouseEnter(t){this.currentIndex=t,this.cd.markForCheck()}onItemClick(t,e){e.command&&e.command({originalEvent:t,item:e})}onListFocus(t){this.focused=!0,this.changeFocusedOptionIndex(0),this.onFocus.emit(t)}onListBlur(t){this.focused=!1,this.focusedOptionIndex=-1,this.onBlur.emit(t)}onListKeyDown(t){switch(t.code){case`ArrowDown`:(this.position()===`left`||this.position()===`right`)&&this.onArrowDownKey(),t.preventDefault();break;case`ArrowUp`:(this.position()===`left`||this.position()===`right`)&&this.onArrowUpKey(),t.preventDefault();break;case`ArrowRight`:(this.position()===`top`||this.position()===`bottom`)&&this.onArrowDownKey(),t.preventDefault();break;case`ArrowLeft`:(this.position()===`top`||this.position()===`bottom`)&&this.onArrowUpKey(),t.preventDefault();break;case`Home`:this.onHomeKey(),t.preventDefault();break;case`End`:this.onEndKey(),t.preventDefault();break;case`Enter`:case`Space`:this.onSpaceKey(),t.preventDefault();break;default:break}}onArrowDownKey(){let t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t)}onArrowUpKey(){let t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t)}onHomeKey(){this.changeFocusedOptionIndex(0)}onEndKey(){this.changeFocusedOptionIndex(u_(this.listViewChild()?.nativeElement,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1)}onSpaceKey(){let t=X$(this.listViewChild()?.nativeElement,`li[id="${`${this.focusedOptionIndex}`}"]`),e=t&&X$(t,`a,button`);e?e.click():t&&t.click()}findNextOptionIndex(t){let n=[...u_(this.listViewChild()?.nativeElement,`li[data-pc-section="item"][data-p-disabled="false"]`)].findIndex(o=>o.id===t);return n>-1?n+1:0}changeFocusedOptionIndex(t){let e=u_(this.listViewChild()?.nativeElement,`li[data-pc-section="item"][data-p-disabled="false"]`),n=t>=e.length?e.length-1:t<0?0:t;this.focusedOptionIndex=e[n]?.getAttribute(`id`)}findPrevOptionIndex(t){let n=[...u_(this.listViewChild()?.nativeElement,`li[data-pc-section="item"][data-p-disabled="false"]`)].findIndex(o=>o.id===t);return n>-1?n-1:0}isClickableRouterLink(t){return!!t.routerLink&&!this.disabled(t)}templates=zV(JH);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`item`?this._itemTemplate=t.template:this._itemTemplate=t.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getPTOptions(t,e,n){return this.ptm(n,{context:{item:t,index:e}})}bindMatchMediaListener(){if(L$(this.platformId)&&!this.matchMediaListener){let t=window.matchMedia(`(max-width: ${this.breakpoint()})`);this.query=t,this.queryMatches.set(t.matches),this.matchMediaListener=()=>{this.queryMatches.set(t.matches),this.mobileActive.set(!1)},this.renderer.listen(this.query,`change`,this.matchMediaListener.bind(this))}}unbindMatchMediaListener(){this.matchMediaListener&&(this.matchMediaListener(),this.matchMediaListener=null,this.query=null)}static ɵfac=function(e){return new(e||i)};static ɵcmp=sa({type:i,selectors:[[`p-dock`]],contentQueries:function(e,n,o){e&1&&Dm(o,n.itemTemplate,Ie,5)(o,n.templates,JH,4),e&2&&Jw(2)},viewQuery:function(e,n){e&1&&Em(n.listViewChild,Te,5),e&2&&Jw()},hostVars:2,hostBindings:function(e,n){e&2&&hb(n.cn(n.cx(`root`),n.styleClass()))},inputs:{id:[1,`id`],styleClass:[1,`styleClass`],model:[1,`model`],position:[1,`position`],ariaLabel:[1,`ariaLabel`],breakpoint:[1,`breakpoint`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onFocus:`onFocus`,onBlur:`onBlur`},features:[Al([be,{provide:ye,useExisting:i},{provide:H_,useExisting:i}]),uw([L]),em],decls:5,vars:12,consts:[[`list`,``],[3,`pBind`],[`role`,`menu`,3,`focus`,`blur`,`keydown`,`mouseleave`,`tabindex`,`pBind`],[`role`,`menuitem`,3,`class`,`ngStyle`,`pBind`],[`role`,`menuitem`,3,`click`,`mouseenter`,`ngStyle`,`pBind`],[`pRipple`,``,`routerLinkActive`,`router-link-active`,`pTooltip`,``,3,`routerLink`,`queryParams`,`class`,`ngStyle`,`routerLinkActiveOptions`,`target`,`tooltipOptions`,`pTooltipUnstyled`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`,`pBind`],[`pRipple`,``,`pTooltip`,``,3,`tooltipPosition`,`class`,`ngStyle`,`tooltipOptions`,`pTooltipUnstyled`,`target`,`pBind`],[`pRipple`,``,`routerLinkActive`,`router-link-active`,`pTooltip`,``,3,`routerLink`,`queryParams`,`ngStyle`,`routerLinkActiveOptions`,`target`,`tooltipOptions`,`pTooltipUnstyled`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`,`pBind`],[3,`class`,`ngStyle`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`styleClass`,`value`,`pt`,`unstyled`],[3,`ngStyle`,`pBind`],[`pRipple`,``,`pTooltip`,``,3,`tooltipPosition`,`ngStyle`,`tooltipOptions`,`pTooltipUnstyled`,`target`,`pBind`]],template:function(e,n){e&1&&(Ws(0,`div`,1)(1,`ul`,2,0),gm(`focus`,function(u){return n.onListFocus(u)})(`blur`,function(u){return n.onListBlur(u)})(`keydown`,function(u){return n.onListKeyDown(u)})(`mouseleave`,function(){return n.onListMouseLeave()}),Lw(3,Ne,1,1,null,null,Le),wl()()),e&2&&(hb(n.cx(`listContainer`)),cm(`pBind`,n.ptm(`listContainer`)),MC(),hb(n.cx(`list`)),cm(`tabindex`,n.tabindex)(`pBind`,n.ptm(`list`)),am(`id`,n.resolvedId)(`aria-orientation`,n.position()===`bottom`||n.position()===`top`?`horizontal`:`vertical`)(`aria-activedescendant`,n.focused?n.focusedOptionId:void 0)(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy()),MC(2),kw(n.model()))},dependencies:[Gl,GT,WT,oa,kt,ta,W,at,rt,L,XH,P$1],encapsulation:2})}return i})();var Ce=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ro({type:i});static ɵinj=Zn({imports:[$,XH,XH]})}return i})();var ut=(()=>{class i{constructor(){this.items=[{label:`Finder`,icon:`pi pi-desktop`},{label:`Terminal`,icon:`pi pi-server`},{label:`Mail`,icon:`pi pi-envelope`},{label:`Settings`,icon:`pi pi-cog`}]}static{this.ɵfac=function(e){return new(e||i)}}static{this.ɵcmp=sa({type:i,selectors:[[`uk-dock-demo`]],decls:6,vars:1,consts:[[1,`demo-page__title`],[1,`demo-section`,2,`position`,`relative`,`height`,`8rem`],[1,`demo-section__title`],[`position`,`bottom`,3,`model`]],template:function(e,n){e&1&&(Ws(0,`h1`,0),wb(1,`Dock`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-dock`,3),wl()),e&2&&(MC(5),cm(`model`,n.items))},dependencies:[Ce,$],encapsulation:2})}}return i})();export{ut as DockDemo};