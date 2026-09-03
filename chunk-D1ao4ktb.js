import{$a as zt,$r as gm,$t as Ph,At as Lf,Bn as X$,Br as em,Ea as um,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,Jr as g,K as Gl,La as wb,Ln as WV,Nt as Lw,Or as cm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,S as CT,X as HV,Zt as P,d as AI,dn as Ro,fr as am,gt as Jw,h as Aw,ir as Zn,j as Em,jt as Lm,kt as Lb,l as $w,lt as J2,mn as ST,na as qw,oi as hb,p as Al,qt as Ob,ua as sa,un as Rf,vi as kw,wa as u_}from"./chunk-CXRXTJ2s.js";import"./chunk-B-beFFsS.js";import"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import"./chunk-CerPySWC.js";import{B as H,H as oa,I as at,L as rt,V as kt,z as G}from"./main-4W6E6VEG.js";var ae=`
    .p-steps {
        position: relative;
    }

    .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item.p-disabled,
    .p-steps-item.p-disabled * {
        opacity: 1;
        pointer-events: auto;
        user-select: auto;
        cursor: auto;
    }

    .p-steps-item:before {
        content: ' ';
        border-top: 2px solid dt('steps.separator.background');
        width: 100%;
        top: 50%;
        left: 0;
        display: block;
        position: absolute;
        margin-top: calc(-1rem + 1px);
    }

    .p-steps-item:first-child::before {
        width: calc(50% + 1rem);
        transform: translateX(100%);
    }

    .p-steps-item:last-child::before {
        width: 50%;
    }

    .p-steps-item-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        transition:
            outline-color dt('steps.transition.duration'),
            box-shadow dt('steps.transition.duration');
        border-radius: dt('steps.item.link.border.radius');
        outline-color: transparent;
        gap: dt('steps.item.link.gap');
    }

    .p-steps-item-link:not(.p-disabled):focus-visible {
        box-shadow: dt('steps.item.link.focus.ring.shadow');
        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');
        outline-offset: dt('steps.item.link.focus.ring.offset');
    }

    .p-steps-item-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('steps.item.label.color');
        display: block;
        font-weight: dt('steps.item.label.font.weight');
    }

    .p-steps-item-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('steps.item.number.color');
        border: 2px solid dt('steps.item.number.border.color');
        background: dt('steps.item.number.background');
        min-width: dt('steps.item.number.size');
        height: dt('steps.item.number.size');
        line-height: dt('steps.item.number.size');
        font-size: dt('steps.item.number.font.size');
        z-index: 1;
        border-radius: dt('steps.item.number.border.radius');
        position: relative;
        font-weight: dt('steps.item.number.font.weight');
    }

    .p-steps-item-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('steps.item.number.border.radius');
        box-shadow: dt('steps.item.number.shadow');
    }

    .p-steps:not(.p-readonly) .p-steps-item {
        cursor: pointer;
    }

    .p-steps-item-active .p-steps-item-number {
        background: dt('steps.item.number.active.background');
        border-color: dt('steps.item.number.active.border.color');
        color: dt('steps.item.number.active.color');
    }

    .p-steps-item-active .p-steps-item-label {
        color: dt('steps.item.label.active.color');
    }
`;var pe=[`list`];var me=(i,r)=>({item:i,index:r});var ue=()=>({exact:!1});var xe=(i,r)=>r.label;function _e(i,r){if(i&1&&(Ws(0,`span`),wb(1),wl()),i&2){let e=qw(3).$implicit;hb(qw().cx(`itemLabel`)),MC(),Lm(e.label)}}function fe(i,r){if(i&1&&um(0,`span`,10),i&2){let e=qw(3).$implicit;hb(qw().cx(`itemLabel`)),cm(`innerHTML`,e.label,AI)}}function be(i,r){if(i&1){let e=$w();Ws(0,`a`,7),gm(`click`,function(n){Rf(e);let o=qw(2),u=o.$implicit,x=o.$index;return Lf(qw().onItemClick(n,u,x))})(`keydown`,function(n){Rf(e);let o=qw(2),u=o.$implicit,x=o.$index;return Lf(qw().onItemKeydown(n,u,x))}),Ws(1,`span`),wb(2),wl(),Aw(3,_e,2,3,`span`,8)(4,fe,1,3,`span`,9),wl()}if(i&2){let e=qw(2),t=e.$implicit,n=e.$index,o=qw();hb(o.cx(`itemLink`)),cm(`routerLink`,t.routerLink)(`queryParams`,t.queryParams)(`routerLinkActiveOptions`,t.routerLinkActiveOptions||Ob(20,ue))(`target`,t.target)(`fragment`,t.fragment)(`queryParamsHandling`,t.queryParamsHandling)(`preserveFragment`,t.preserveFragment)(`skipLocationChange`,t.skipLocationChange)(`replaceUrl`,t.replaceUrl)(`state`,t.state),am(`tabindex`,o.getItemTabIndex(t,n))(`aria-expanded`,n===o.activeIndex())(`aria-disabled`,t.disabled||o.readonly()&&n!==o.activeIndex())(`ariaCurrentWhenActive`,o.exact()?`step`:void 0),MC(),hb(o.cx(`itemNumber`)),MC(),Lm(n+1),MC(),xw(t.escape!==!1?3:4)}}function ge(i,r){if(i&1&&(Ws(0,`span`),wb(1),wl()),i&2){let e=qw(3).$implicit;hb(qw().cx(`itemLabel`)),MC(),Lm(e.label)}}function ve(i,r){if(i&1&&um(0,`span`,10),i&2){let e=qw(3).$implicit;hb(qw().cx(`itemLabel`)),cm(`innerHTML`,e.label,AI)}}function ye(i,r){if(i&1){let e=$w();Ws(0,`a`,11),gm(`click`,function(n){Rf(e);let o=qw(2),u=o.$implicit,x=o.$index;return Lf(qw().onItemClick(n,u,x))})(`keydown`,function(n){Rf(e);let o=qw(2),u=o.$implicit,x=o.$index;return Lf(qw().onItemKeydown(n,u,x))}),Ws(1,`span`),wb(2),wl(),Aw(3,ge,2,3,`span`,8)(4,ve,1,3,`span`,9),wl()}if(i&2){let e=qw(2),t=e.$implicit,n=e.$index,o=qw();hb(o.cx(`itemLink`)),cm(`target`,t.target),am(`href`,t.url,Ph)(`tabindex`,o.getItemTabIndex(t,n))(`aria-expanded`,n===o.activeIndex())(`aria-disabled`,t.disabled||o.readonly()&&n!==o.activeIndex())(`ariaCurrentWhenActive`,o.exact()&&(!t.disabled||o.readonly())?`step`:void 0),MC(),hb(o.cx(`itemNumber`)),MC(),Lm(n+1),MC(),xw(t.escape!==!1?3:4)}}function he(i,r){if(i&1&&(Ws(0,`li`,4,1),Aw(2,be,5,21,`a`,5)(3,ye,5,12,`a`,6),wl()),i&2){let e=qw(),t=e.$implicit,n=e.$index,o=qw();hb(o.cx(`item`,Lb(9,me,t,n))),cm(`ngStyle`,t.style)(`tooltipOptions`,t.tooltipOptions)(`pTooltipUnstyled`,o.unstyled()),am(`aria-current`,o.isActive(t,n)?`step`:void 0)(`id`,t.id)(`data-pc-section`,`menuitem`),MC(2),xw(o.isClickableRouterLink(t)?2:3)}}function Ce(i,r){if(i&1&&Aw(0,he,4,12,`li`,3),i&2){let e=r.$implicit;xw(e.visible!==!1?0:-1)}}var ke={root:({instance:i})=>[`p-steps p-component`,{"p-readonly":i.readonly()}],list:`p-steps-list`,item:({instance:i,item:r,index:e})=>[`p-steps-item`,{"p-steps-item-active":i.isActive(r,e),"p-disabled":i.isItemDisabled(r,e)}],itemLink:`p-steps-item-link`,itemNumber:`p-steps-item-number`,itemLabel:`p-steps-item-label`};var le=(()=>{class i extends Nr{name=`steps`;style=ae;classes=ke;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(i)))(n||i)}})();static ɵprov=P({token:i,factory:i.ɵfac})}return i})();var E=(()=>{class i extends J2{componentName=`Steps`;activeIndex=zt(0,{transform:ST});model=zt();readonly=zt(!0,{transform:CT});style=zt();styleClass=zt();exact=zt(!0,{transform:CT});activeIndexChange=HV();listViewChild=WV(`list`);router=g(H);route=g(G);_componentStyle=g(le);subscription;onInit(){this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}onItemClick(e,t,n){if(this.readonly()||t.disabled){e.preventDefault();return}this.activeIndexChange.emit(n),!t.url&&!t.routerLink&&e.preventDefault(),t.command&&t.command({originalEvent:e,item:t,index:n})}onItemKeydown(e,t,n){switch(e.code){case`ArrowRight`:this.navigateToNextItem(e.target),e.preventDefault();break;case`ArrowLeft`:this.navigateToPrevItem(e.target),e.preventDefault();break;case`Home`:this.navigateToFirstItem(e.target),e.preventDefault();break;case`End`:this.navigateToLastItem(e.target),e.preventDefault();break;case`Tab`:if(n!==(this.activeIndex()??-1)){let o=u_(this.listViewChild()?.nativeElement,`[data-pc-section="menuitem"]`);o[n].children[0].tabIndex=`-1`,o[this.activeIndex()??0].children[0].tabIndex=`0`}break;case`Enter`:case`Space`:this.onItemClick(e,t,n),e.preventDefault();break;default:break}}navigateToNextItem(e){let t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToPrevItem(e){let t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToFirstItem(e){let t=this.findFirstItem();t&&this.setFocusToMenuitem(e,t)}navigateToLastItem(e){let t=this.findLastItem();t&&this.setFocusToMenuitem(e,t)}findNextItem(e){let t=e.parentElement.nextElementSibling;return t?t.children[0]:null}findPrevItem(e){let t=e.parentElement.previousElementSibling;return t?t.children[0]:null}findFirstItem(){let e=X$(this.listViewChild()?.nativeElement,`[data-pc-section="menuitem"]`);return e?e.children[0]:null}findLastItem(){let e=u_(this.listViewChild()?.nativeElement,`[data-pc-section="menuitem"]`);return e?e[e.length-1].children[0]:null}setFocusToMenuitem(e,t){e.tabIndex=`-1`,t.tabIndex=`0`,t.focus()}isClickableRouterLink(e){return e.routerLink&&!this.readonly()&&!e.disabled}isItemDisabled(e,t){return e.disabled||this.readonly()&&!this.isActive(e,t)}isActive(e,t){if(e.routerLink){let n=Array.isArray(e.routerLink)?e.routerLink:[e.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),!1)}return t===this.activeIndex()}getItemTabIndex(e,t){return e.disabled?`-1`:!e.disabled&&this.activeIndex()===t?e.tabindex||`0`:e.tabindex??`-1`}onDestroy(){this.subscription&&this.subscription.unsubscribe()}static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(i)))(n||i)}})();static ɵcmp=sa({type:i,selectors:[[`p-steps`]],viewQuery:function(t,n){t&1&&Em(n.listViewChild,pe,5),t&2&&Jw()},inputs:{activeIndex:[1,`activeIndex`],model:[1,`model`],readonly:[1,`readonly`],style:[1,`style`],styleClass:[1,`styleClass`],exact:[1,`exact`]},outputs:{activeIndexChange:`activeIndexChange`},features:[Al([le]),em],decls:5,vars:7,consts:[[`list`,``],[`menuitem`,``],[3,`ngStyle`],[`pTooltip`,``,3,`class`,`ngStyle`,`tooltipOptions`,`pTooltipUnstyled`],[`pTooltip`,``,3,`ngStyle`,`tooltipOptions`,`pTooltipUnstyled`],[`role`,`link`,3,`routerLink`,`queryParams`,`routerLinkActiveOptions`,`class`,`target`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`],[`role`,`link`,3,`class`,`target`],[`role`,`link`,3,`click`,`keydown`,`routerLink`,`queryParams`,`routerLinkActiveOptions`,`target`,`fragment`,`queryParamsHandling`,`preserveFragment`,`skipLocationChange`,`replaceUrl`,`state`],[3,`class`],[3,`class`,`innerHTML`],[3,`innerHTML`],[`role`,`link`,3,`click`,`keydown`,`target`]],template:function(t,n){t&1&&(Ws(0,`nav`,2)(1,`ul`,null,0),Lw(3,Ce,1,1,null,null,xe),wl()()),t&2&&(hb(n.cn(n.cx(`root`),n.styleClass())),cm(`ngStyle`,n.style()),am(`data-pc-name`,`steps`),MC(),hb(n.cx(`list`)),am(`data-pc-section`,`menu`),MC(2),kw(n.model()))},dependencies:[Gl,WT,oa,kt,at,rt,XH],encapsulation:2})}return i})();var de=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ro({type:i});static ɵinj=Zn({imports:[E,XH,XH]})}return i})();var Qe=(()=>{class i{constructor(){this.activeIndex=ne(1),this.items=[{label:`Personal`},{label:`Payment`},{label:`Confirmation`}]}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵcmp=sa({type:i,selectors:[[`uk-steps-demo`]],decls:10,vars:5,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[3,`model`,`activeIndex`],[3,`model`,`activeIndex`,`readonly`]],template:function(t,n){t&1&&(Ws(0,`h1`,0),wb(1,`Steps`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-steps`,3),wl(),Ws(6,`section`,1)(7,`h2`,2),wb(8,`Readonly (non-linear disabled)`),wl(),um(9,`p-steps`,4),wl()),t&2&&(MC(5),cm(`model`,n.items)(`activeIndex`,n.activeIndex()),MC(4),cm(`model`,n.items)(`activeIndex`,n.activeIndex())(`readonly`,!0))},dependencies:[de,E],encapsulation:2})}}return i})();export{Qe as StepsDemo};