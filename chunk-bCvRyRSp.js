import{$a as zt$1,$i as qi,$r as gm,At as Lf,Bn as X$,Br as em,Da as uw,Dt as L$,Ea as um,En as Ue,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne$1,Jr as g,K as Gl,Li as nm,Ln as WV,Lr as eH,Nn as Vy,Nr as da,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,Tn as UV,U as GT,W as GV,Wn as Xw,Z as H_,Zt as P,ba as td,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ii as h_,ir as Zn,j as Em,l as $w,la as s_,li as i_,lt as J2,mn as ST,na as qw,nr as Zb,oi as hb,on as Qw,p as Al,qi as pm,qr as fm,s as $t$1,ua as sa,un as Rf,ut as JH,wr as cH,xi as l_}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{n as X,t as W}from"./chunk-CxBE3lzD.js";import{R as f}from"./main-4W6E6VEG.js";import{t as m}from"./chunk-rld2UIvv.js";var Ct=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var z=[`*`];var Ht=[`previcon`];var Kt=[`nexticon`];var zt=[`content`];var $t=[`prevButton`];var Qt=[`nextButton`];var qt=[`inkbar`];var Wt=[`tabs`];function Ut(e,d){e&1&&fm(0)}function Gt(e,d){if(e&1&&nm(0,Ut,1,0,`ng-container`,11),e&2){let t=qw(2);cm(`ngTemplateOutlet`,t.prevIconTemplate||t._prevIconTemplate)}}function Jt(e,d){e&1&&(qf(),um(0,`svg`,10))}function Xt(e,d){if(e&1){let t=$w();Ws(0,`button`,9,3),gm(`click`,function(){Rf(t);return Lf(qw().onPrevButtonClick())}),Aw(2,Gt,1,1,`ng-container`)(3,Jt,1,0,`:svg:svg`,10),wl()}if(e&2){let t=qw();hb(t.cx(`prevButton`)),cm(`pBind`,t.ptm(`prevButton`)),am(`aria-label`,t.prevButtonAriaLabel)(`tabindex`,t.tabindex())(`data-pc-group-section`,`navigator`),MC(2),xw(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Yt(e,d){e&1&&fm(0)}function Zt(e,d){if(e&1&&nm(0,Yt,1,0,`ng-container`,11),e&2){let t=qw(2);cm(`ngTemplateOutlet`,t.nextIconTemplate||t._nextIconTemplate)}}function te(e,d){e&1&&(qf(),um(0,`svg`,12))}function ee(e,d){if(e&1){let t=$w();Ws(0,`button`,9,4),gm(`click`,function(){Rf(t);return Lf(qw().onNextButtonClick())}),Aw(2,Zt,1,1,`ng-container`)(3,te,1,0,`:svg:svg`,12),wl()}if(e&2){let t=qw();hb(t.cx(`nextButton`)),cm(`pBind`,t.ptm(`nextButton`)),am(`aria-label`,t.nextButtonAriaLabel)(`tabindex`,t.tabindex())(`data-pc-group-section`,`navigator`),MC(2),xw(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function ne(e,d){e&1&&la(0)}function ie(e,d){e&1&&fm(0)}function ae(e,d){if(e&1&&nm(0,ie,1,0,`ng-container`,1),e&2){let t=qw(),i=Xw(1);cm(`ngTemplateOutlet`,t.content()?t.content():i)}}var oe={root:({instance:e})=>[`p-tabs p-component`,{"p-tabs-scrollable":e.scrollable()}]};var kt=(()=>{class e extends Nr{name=`tabs`;style=Ct;classes=oe;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var It=new b(`TABS_INSTANCE`);var U=(()=>{class e extends J2{componentName=`Tabs`;$pcTabs=g(It,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=UV(void 0);scrollable=zt$1(!1,{transform:CT});lazy=zt$1(!1,{transform:CT});selectOnFocus=zt$1(!1,{transform:CT});showNavigators=zt$1(!0,{transform:CT});tabindex=zt$1(0,{transform:ST});id=ne$1(Vy(`pn_id_`));_componentStyle=g(kt);updateValue(t){this.value.update(()=>t)}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-tabs`]],hostVars:3,hostBindings:function(i,n){i&2&&(am(`id`,n.id()),hb(n.cx(`root`)))},inputs:{value:[1,`value`],scrollable:[1,`scrollable`],lazy:[1,`lazy`],selectOnFocus:[1,`selectOnFocus`],showNavigators:[1,`showNavigators`],tabindex:[1,`tabindex`]},outputs:{value:`valueChange`},features:[Al([kt,{provide:It,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:z,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return e})();var se={root:({instance:e})=>[`p-tab`,{"p-tab-active":e.active(),"p-disabled":e.disabled()}]};var Et=(()=>{class e extends Nr{name=`tab`;classes=se;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var re={root:`p-tablist`,content:`p-tablist-content p-tablist-viewport`,tabList:`p-tablist-tab-list`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`};var At=(()=>{class e extends Nr{name=`tablist`;classes=re;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Ft=new b(`TABLIST_INSTANCE`);var Rt=(()=>{class e extends J2{componentName=`TabList`;$pcTabList=g(Ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}prevIconTemplate;nextIconTemplate;templates=zV(JH);content=WV.required(`content`);prevButton=WV.required(`prevButton`);nextButton=WV.required(`nextButton`);inkbar=WV.required(`inkbar`);tabs=WV.required(`tabs`);pcTabs=g(qi(()=>U));isPrevButtonEnabled=ne$1(!1);isNextButtonEnabled=ne$1(!1);resizeObserver;showNavigators=da(()=>this.pcTabs.showNavigators());tabindex=da(()=>this.pcTabs.tabindex());scrollable=da(()=>this.pcTabs.scrollable());_componentStyle=g(At);constructor(){super(),$t$1(()=>{this.pcTabs.value(),L$(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&L$(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates()?.forEach(t=>{switch(t.getType()){case`previcon`:this._prevIconTemplate=t.template;break;case`nexticon`:this._nextIconTemplate=t.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content().nativeElement,i=cH(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=i_(t)?-1*a:a}onNextButtonClick(){let t=this.content().nativeElement,i=cH(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,s=n>=a?a:n;t.scrollLeft=i_(t)?-1*s:s}updateButtonState(){let t=this.content()?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=t,s=Math.abs(t.scrollLeft),jt=cH(t);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&Math.abs(s-n+jt)>1)}updateInkBar(){let t=this.content()?.nativeElement,i=this.inkbar()?.nativeElement,n=this.tabs()?.nativeElement,a=X$(t,`[data-pc-name="tab"][data-p-active="true"]`);i&&(i.style.width=s_(a)+`px`,i.style.left=h_(a).left-h_(n).left+`px`)}getVisibleButtonWidths(){return[this.prevButton()?.nativeElement,this.nextButton()?.nativeElement].reduce((n,a)=>a?n+cH(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static ɵfac=function(i){return new(i||e)};static ɵcmp=sa({type:e,selectors:[[`p-tablist`]],contentQueries:function(i,n,a){if(i&1&&(Dm(a,n.templates,JH,4),ym(a,Ht,4)(a,Kt,4)),i&2){Jw();let s;Kw(s=Qw())&&(n.prevIconTemplate=s.first),Kw(s=Qw())&&(n.nextIconTemplate=s.first)}},viewQuery:function(i,n){i&1&&Em(n.content,zt,5)(n.prevButton,$t,5)(n.nextButton,Qt,5)(n.inkbar,qt,5)(n.tabs,Wt,5),i&2&&Jw(5)},hostVars:2,hostBindings:function(i,n){i&2&&hb(n.cx(`root`))},features:[Al([At,{provide:Ft,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:z,decls:9,vars:11,consts:[[`content`,``],[`tabs`,``],[`inkbar`,``],[`prevButton`,``],[`nextButton`,``],[`type`,`button`,`pRipple`,``,3,`pBind`,`class`],[3,`scroll`,`pBind`],[`role`,`tablist`,3,`pBind`],[`role`,`presentation`,3,`pBind`],[`type`,`button`,`pRipple`,``,3,`click`,`pBind`],[`data-p-icon`,`chevron-left`],[4,`ngTemplateOutlet`],[`data-p-icon`,`chevron-right`]],template:function(i,n){i&1&&(ua(),Aw(0,Xt,4,7,`button`,5),Ws(1,`div`,6,0),gm(`scroll`,function(s){return n.onScroll(s)}),Ws(3,`div`,7,1),la(5),um(6,`span`,8,2),wl()(),Aw(8,ee,4,7,`button`,5)),i&2&&(xw(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),MC(),hb(n.cx(`content`)),cm(`pBind`,n.ptm(`content`)),MC(2),hb(n.cx(`tabList`)),cm(`pBind`,n.ptm(`tabList`)),MC(3),hb(n.cx(`activeBar`)),cm(`pBind`,n.ptm(`activeBar`)),MC(2),xw(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[Gl,GT,m,f,X,W,XH,F,L],encapsulation:2})}return e})();var St=new b(`TAB_INSTANCE`);var le=(()=>{class e extends J2{componentName=`Tab`;$pcTab=g(St,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=UV();disabled=zt$1(!1,{transform:CT});pcTabs=g(qi(()=>U));pcTabList=g(qi(()=>Rt));el=g(Ue);_componentStyle=g(Et);ripple=da(()=>this.config.ripple());id=da(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=da(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=da(()=>td(this.pcTabs.value(),this.value()));tabindex=da(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case`ArrowRight`:this.onArrowRightKey(t);break;case`ArrowLeft`:this.onArrowLeftKey(t);break;case`Home`:this.onHomeKey(t);break;case`End`:this.onEndKey(t);break;case`PageDown`:this.onPageDownKey(t);break;case`PageUp`:this.onPageUpKey(t);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(t);break;default:break}t.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?l_(n,`data-p-disabled`)||l_(n,`data-pc-section`)===`activebar`?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?l_(n,`data-p-disabled`)||l_(n,`data-pc-section`)===`activebar`?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){eH(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:`nearest`})}bindMutationObserver(){L$(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-tab`]],hostVars:10,hostBindings:function(i,n){i&1&&gm(`focus`,function(){return n.onFocus()})(`click`,function(){return n.onClick()})(`keydown`,function(s){return n.onKeyDown(s)}),i&2&&(am(`id`,n.id())(`aria-controls`,n.ariaControls())(`role`,`tab`)(`aria-selected`,n.active())(`aria-disabled`,n.disabled())(`data-p-disabled`,n.disabled())(`data-p-active`,n.active())(`tabindex`,n.tabindex()),hb(n.cx(`root`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[Al([Et,{provide:St,useExisting:e},{provide:H_,useExisting:e}]),uw([W,L]),em],ngContentSelectors:z,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[XH,F],encapsulation:2})}return e})();var ce={root:({instance:e})=>[`p-tabpanel`,{"p-tabpanel-active":e.active()}]};var Lt=(()=>{class e extends Nr{name=`tabpanel`;classes=ce;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Pt=new b(`TABPANEL_INSTANCE`);var de=(()=>{class e extends J2{componentName=`TabPanel`;$pcTabPanel=g(Pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});pcTabs=g(qi(()=>U));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}lazy=zt$1(!1,{transform:CT});value=UV(void 0);content=GV(`content`,{descendants:!1});id=da(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=da(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=da(()=>td(this.pcTabs.value(),this.value()));isLazyEnabled=da(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=da(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=g(Lt);static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-tabpanel`]],contentQueries:function(i,n,a){i&1&&Dm(a,n.content,zt,4),i&2&&Jw()},hostVars:7,hostBindings:function(i,n){i&2&&(pm(`hidden`,!n.active()),am(`id`,n.id())(`role`,`tabpanel`)(`aria-labelledby`,n.ariaLabelledby())(`data-p-active`,n.active()),hb(n.cx(`root`)))},inputs:{lazy:[1,`lazy`],value:[1,`value`]},outputs:{value:`valueChange`},features:[Al([Lt,{provide:Pt,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:z,decls:3,vars:1,consts:[[`defaultContent`,``],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(ua(),nm(0,ne,1,0,`ng-template`,null,0,Zb),Aw(2,ae,1,1,`ng-container`)),i&2&&(MC(2),xw(n.shouldRender()?2:-1))},dependencies:[GT,F],encapsulation:2})}return e})();var be={root:`p-tabpanels`};var Ot=(()=>{class e extends Nr{name=`tabpanels`;classes=be;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Vt=new b(`TABPANELS_INSTANCE`);var ue=(()=>{class e extends J2{componentName=`TabPanels`;$pcTabPanels=g(Vt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});_componentStyle=g(Ot);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-tabpanels`]],hostVars:3,hostBindings:function(i,n){i&2&&(am(`role`,`presentation`),hb(n.cx(`root`)))},features:[Al([Ot,{provide:Vt,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:z,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return e})();var Le=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[U,ue,de,Rt,le,F,F]})}return e})();export{le as a,de as i,Rt as n,ue as o,U as r,Le as t};