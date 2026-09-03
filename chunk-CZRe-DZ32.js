import{$a as zt$1,$i as qi,$r as gm,Ai as mS,At as Lf,Br as em,Bt as Nb,Da as uw,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,In as WT,It as Ml,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Ln as WV,Lr as eH,Ni as nH,Nn as Vy,Nr as da,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,U as GT,W as GV,X as HV,Z as H_,Zt as P,ci as iH,cn as Rb,dn as Ro,en as Pm,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,ka as v,kn as V,kt as Lb,l as $w,lr as _y,na as qw,nr as Zb,oi as hb,on as Qw,p as Al,pi as jm,qr as fm,ri as hS,s as $t$1,ua as sa,un as Rf,ut as JH,vi as kw}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import{n as L}from"./chunk-CerPySWC.js";import"./chunk-Cw3svWHP.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import{t as H}from"./chunk--HunKa9-.js";import{t as B}from"./chunk-Bc7G3ZMk.js";import{d as te,f as un,r as Rt$1,u as sn}from"./chunk-53wldAuq.js";import"./chunk-Da0TIp29.js";import{t as c}from"./chunk-D1ovfVna.js";import{A as f,F as d,h as Ie}from"./main-4W6E6VEG.js";import"./chunk-kdszuIhD.js";import{n as we}from"./chunk-BCVjHYHm.js";import{n as dt$1}from"./chunk-DFfGo9Zd.js";var ze=`
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('treeselect.background');
        border: 1px solid dt('treeselect.border.color');
        transition:
            background dt('treeselect.transition.duration'),
            color dt('treeselect.transition.duration'),
            border-color dt('treeselect.transition.duration'),
            outline-color dt('treeselect.transition.duration'),
            box-shadow dt('treeselect.transition.duration');
        border-radius: dt('treeselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('treeselect.shadow');
    }

    .p-treeselect:not(.p-disabled):hover {
        border-color: dt('treeselect.hover.border.color');
    }

    .p-treeselect:not(.p-disabled).p-focus {
        border-color: dt('treeselect.focus.border.color');
        box-shadow: dt('treeselect.focus.ring.shadow');
        outline: dt('treeselect.focus.ring.width') dt('treeselect.focus.ring.style') dt('treeselect.focus.ring.color');
        outline-offset: dt('treeselect.focus.ring.offset');
    }

    .p-treeselect.p-variant-filled {
        background: dt('treeselect.filled.background');
    }

    .p-treeselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('treeselect.filled.hover.background');
    }

    .p-treeselect.p-variant-filled.p-focus {
        background: dt('treeselect.filled.focus.background');
    }

    .p-treeselect.p-invalid {
        border-color: dt('treeselect.invalid.border.color');
    }

    .p-treeselect.p-disabled {
        opacity: 1;
        background: dt('treeselect.disabled.background');
    }

    .p-treeselect-clear-icon {
        align-self: center;
        color: dt('treeselect.clear.icon.color');
        inset-inline-end: dt('treeselect.dropdown.width');
    }

    .p-treeselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('treeselect.dropdown.color');
        width: dt('treeselect.dropdown.width');
        border-start-end-radius: dt('border.radius.md');
        border-end-end-radius: dt('border.radius.md');
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('treeselect.padding.y') / 2);
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('treeselect.padding.y') dt('treeselect.padding.x');
        color: dt('treeselect.color');
    }

    .p-treeselect-label.p-placeholder {
        color: dt('treeselect.placeholder.color');
    }

    .p-treeselect.p-invalid .p-treeselect-label.p-placeholder {
        color: dt('treeselect.invalid.placeholder.color');
    }

    .p-treeselect:has(.p-select-clear-icon) .p-treeselect-label {
        padding-inline-end: dt('treeselect.padding.x');
    }

    .p-treeselect.p-disabled .p-treeselect-label {
        color: dt('treeselect.disabled.color');
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('treeselect.overlay.background');
        color: dt('treeselect.overlay.color');
        border: 1px solid dt('treeselect.overlay.border.color');
        border-radius: dt('treeselect.overlay.border.radius');
        box-shadow: dt('treeselect.overlay.shadow');
        overflow: hidden;
        min-width: 100%;
        will-change: transform;
    }

    .p-treeselect-tree-container {
        overflow: auto;
    }

    .p-treeselect-empty-message {
        padding: dt('treeselect.empty.message.padding');
        background: transparent;
    }

    .p-treeselect-fluid {
        display: flex;
    }

    .p-treeselect-overlay .p-tree {
        padding: dt('treeselect.tree.padding');
    }

    .p-treeselect-overlay .p-tree-loading {
        min-height: 3rem;
    }

    .p-treeselect-label .p-chip {
        padding-block-start: calc(dt('treeselect.padding.y') / 2);
        padding-block-end: calc(dt('treeselect.padding.y') / 2);
        border-radius: dt('treeselect.chip.border.radius');
    }

    .p-treeselect-label:has(.p-chip) {
        padding: calc(dt('treeselect.padding.y') / 2) calc(dt('treeselect.padding.x') / 2);
    }

    .p-treeselect-sm .p-treeselect-label {
        font-size: dt('treeselect.sm.font.size');
        padding-block: dt('treeselect.sm.padding.y');
        padding-inline: dt('treeselect.sm.padding.x');
    }

    .p-treeselect-sm .p-treeselect-dropdown .p-icon {
        font-size: dt('treeselect.sm.font.size');
        width: dt('treeselect.sm.font.size');
        height: dt('treeselect.sm.font.size');
    }

    .p-treeselect-lg .p-treeselect-label {
        font-size: dt('treeselect.lg.font.size');
        padding-block: dt('treeselect.lg.padding.y');
        padding-inline: dt('treeselect.lg.padding.x');
    }

    .p-treeselect-lg .p-treeselect-dropdown .p-icon {
        font-size: dt('treeselect.lg.font.size');
        width: dt('treeselect.lg.font.size');
        height: dt('treeselect.lg.font.size');
    }
`;var qe=[`header`];var Ke=[`footer`];var We=[`closeicon`];var je=[`value`];var Ge=[`empty`];var Je=[`clearicon`];var Xe=[`triggericon`];var Ye=[`dropdownicon`];var Ze=[`filtericon`];var et=[`itemtogglericon`];var tt=[`itemcheckboxicon`];var nt=[`itemloadingicon`];var it=[`focusInput`];var lt=[`filter`];var ot=[`tree`];var at=[`panel`];var rt=[`overlay`];var dt=[`firstHiddenFocusableEl`];var ct=[`lastHiddenFocusableEl`];var st=(n,o)=>({$implicit:n,placeholder:o});var Re=(n,o)=>({$implicit:n,options:o});var pt=n=>({"max-height":n});var ut=n=>({$implicit:n});var mt=(n,o)=>({$implicit:n,partialSelected:o});function ft(n,o){n&1&&fm(0)}function _t(n,o){if(n&1&&nm(0,ft,1,0,`ng-container`,20),n&2){let e=qw();cm(`ngTemplateOutlet`,e.valueTemplate||e._valueTemplate)(`ngTemplateOutletContext`,Lb(2,st,e.value,e.placeholder()))}}function gt(n,o){if(n&1&&wb(0),n&2)Ml(` `,qw(2).label||`empty`,` `)}function ht(n,o){if(n&1&&(Ws(0,`div`,14),um(1,`p-chip`,21),wl()),n&2){let e=o.$implicit,i=qw(3);hb(i.cx(`chipItem`)),cm(`pBind`,i.ptm(`chipItem`)),MC(),hb(i.cx(`pcChip`)),cm(`unstyled`,i.unstyled())(`label`,e.label)(`pt`,i.ptm(`pcChip`))}}function vt(n,o){if(n&1&&wb(0),n&2)Ml(` `,qw(3).placeholder()||`empty`,` `)}function yt(n,o){if(n&1&&(Lw(0,ht,2,8,`div`,18,Rw),Aw(2,vt,1,1)),n&2){let e=qw(2);kw(e.value),MC(2),xw(e.emptyValue?2:-1)}}function bt(n,o){if(n&1&&Aw(0,gt,1,1)(1,yt,3,1),n&2)xw(qw().display()===`comma`?0:1)}function Tt(n,o){if(n&1){let e=$w();qf(),Ws(0,`svg`,23),gm(`click`,function(t){Rf(e);return Lf(qw(2).clear(t))}),wl()}if(n&2){let e=qw(2);hb(e.cx(`clearIcon`)),cm(`pBind`,e.ptm(`clearIcon`))}}function St(n,o){}function Ct(n,o){n&1&&nm(0,St,0,0,`ng-template`)}function wt(n,o){if(n&1){let e=$w();Ws(0,`span`,24),gm(`click`,function(t){Rf(e);return Lf(qw(2).clear(t))}),nm(1,Ct,1,0,null,25),wl()}if(n&2){let e=qw(2);hb(e.cx(`clearIcon`)),cm(`pBind`,e.ptm(`clearIcon`)),MC(),cm(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Mt(n,o){if(n&1&&(Aw(0,Tt,1,3,`:svg:svg`,22),Aw(1,wt,2,4,`span`,18)),n&2){let e=qw();xw(!e.clearIconTemplate&&!e._clearIconTemplate?0:-1),MC(),xw(e.clearIconTemplate||e.clearIconTemplate?1:-1)}}function It(n,o){if(n&1&&(qf(),um(0,`svg`,26)),n&2){let e=qw();hb(e.cx(`dropdownIcon`)),cm(`pBind`,e.ptm(`dropdownIcon`))}}function xt(n,o){}function Et(n,o){n&1&&nm(0,xt,0,0,`ng-template`)}function Nt(n,o){if(n&1&&(Ws(0,`span`,14),nm(1,Et,1,0,null,25),wl()),n&2){let e=qw();hb(e.cx(`dropdownIcon`)),cm(`pBind`,e.ptm(`dropdownIcon`)),MC(),cm(`ngTemplateOutlet`,e.triggerIconTemplate||e._triggerIconTemplate||e.dropdownIconTemplate||e._dropdownIconTemplate)}}function kt(n,o){n&1&&fm(0)}function Dt(n,o){n&1&&fm(0)}function Vt(n,o){if(n&1&&nm(0,Dt,1,0,`ng-container`,25),n&2){let e=qw(3);cm(`ngTemplateOutlet`,e.emptyTemplate||e._emptyTemplate)}}function Ft(n,o){n&1&&nm(0,Vt,1,1,`ng-template`,null,7,Zb)}function Ot(n,o){n&1&&fm(0)}function Bt(n,o){if(n&1&&nm(0,Ot,1,0,`ng-container`,20),n&2){let e=o.$implicit,i=qw(3);cm(`ngTemplateOutlet`,i.itemTogglerIconTemplate||i._itemTogglerIconTemplate)(`ngTemplateOutletContext`,Rb(2,ut,e))}}function Ht(n,o){n&1&&nm(0,Bt,1,4,`ng-template`,null,8,Zb)}function Lt(n,o){n&1&&fm(0)}function At(n,o){if(n&1&&nm(0,Lt,1,0,`ng-container`,20),n&2){let e=o.$implicit,i=o.partialSelected,t=qw(3);cm(`ngTemplateOutlet`,t.itemCheckboxIconTemplate||t._itemCheckboxIconTemplate)(`ngTemplateOutletContext`,Lb(2,mt,e,i))}}function zt(n,o){n&1&&nm(0,At,1,5,`ng-template`,null,9,Zb)}function Rt(n,o){n&1&&fm(0)}function Pt(n,o){if(n&1&&nm(0,Rt,1,0,`ng-container`,25),n&2){let e=qw(3);cm(`ngTemplateOutlet`,e.itemLoadingIconTemplate||e._itemLoadingIconTemplate)}}function Ut(n,o){n&1&&nm(0,Pt,1,1,`ng-template`,null,10,Zb)}function $t(n,o){n&1&&fm(0)}function Qt(n,o){if(n&1&&nm(0,$t,1,0,`ng-container`,25),n&2){let e=qw(3);cm(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function qt(n,o){n&1&&nm(0,Qt,1,1,`ng-template`,null,11,Zb)}function Kt(n,o){n&1&&fm(0)}function Wt(n,o){if(n&1){let e=$w();Ws(0,`div`,15,3)(2,`span`,27,4),gm(`focus`,function(t){Rf(e);return Lf(qw().onFirstHiddenFocus(t))}),wl(),nm(4,kt,1,0,`ng-container`,20),Ws(5,`div`,15)(6,`p-tree`,28,5),gm(`selectionChange`,function(t){Rf(e);return Lf(qw().onSelectionChange(t))})(`onNodeExpand`,function(t){Rf(e);return Lf(qw().nodeExpand(t))})(`onNodeCollapse`,function(t){Rf(e);return Lf(qw().nodeCollapse(t))})(`onNodeSelect`,function(t){Rf(e);return Lf(qw().onSelect(t))})(`onNodeUnselect`,function(t){Rf(e);return Lf(qw().onUnselect(t))}),Aw(8,Ft,2,0),Aw(9,Ht,2,0),Aw(10,zt,2,0),Aw(11,Ut,2,0),Aw(12,qt,2,0),wl()(),nm(13,Kt,1,0,`ng-container`,20),Ws(14,`span`,27,6),gm(`focus`,function(t){Rf(e);return Lf(qw().onLastHiddenFocus(t))}),wl()()}if(n&2){let e,i=qw();hb(i.cn(i.cx(`panel`),i.panelStyleClass(),i.panelClass())),cm(`ngStyle`,i.panelStyle())(`pBind`,i.ptm(`panel`)),am(`id`,i.listId),MC(2),cm(`pBind`,i.ptm(`hiddenFirstFocusableEl`)),am(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),MC(2),cm(`ngTemplateOutlet`,i.headerTemplate()||i._headerTemplate)(`ngTemplateOutletContext`,Lb(48,Re,i.value,i.options())),MC(),hb(i.cx(`treeContainer`)),cm(`ngStyle`,Rb(51,pt,i.scrollHeight()))(`pBind`,i.ptm(`treeContainer`)),MC(),cm(`value`,i.options())(`propagateSelectionDown`,i.propagateSelectionDown())(`propagateSelectionUp`,i.propagateSelectionUp())(`selectionMode`,i.selectionMode())(`selection`,i.value)(`metaKeySelection`,i.metaKeySelection())(`emptyMessage`,i.emptyMessage())(`filter`,i.filter())(`filterBy`,i.filterBy())(`filterMode`,i.filterMode())(`filterPlaceholder`,i.filterPlaceholder())(`filterLocale`,i.filterLocale())(`filteredNodes`,i.filteredNodes)(`virtualScroll`,i.virtualScroll())(`virtualScrollItemSize`,i.virtualScrollItemSize())(`virtualScrollOptions`,i.virtualScrollOptions())(`_templateMap`,i.templateMap)(`loading`,i.loading())(`filterInputAutoFocus`,i.filterInputAutoFocus())(`loadingMode`,i.loadingMode())(`pt`,i.ptm(`pcTree`))(`unstyled`,i.unstyled()),MC(2),xw(i.emptyTemplate||i._emptyTemplate?8:-1),MC(),xw((e=i.itemTogglerIconTemplate||i._itemTogglerIconTemplate)?9:-1,e),MC(),xw(i.itemCheckboxIconTemplate||i._itemCheckboxIconTemplate?10:-1),MC(),xw(i.itemLoadingIconTemplate||i._itemLoadingIconTemplate?11:-1),MC(),xw(i.filterIconTemplate||i._filterIconTemplate?12:-1),MC(),cm(`ngTemplateOutlet`,i.footerTemplate())(`ngTemplateOutletContext`,Lb(53,Re,i.value,i.options())),MC(),cm(`pBind`,i.ptm(`hiddenLastFocusableEl`)),am(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var jt=`
    ${ze}

    /* For ngx-prime */

    .p-treeselect.ng-invalid.ng-dirty {
        border-color: dt('treeselect.invalid.border.color');
    }

    p-treeselect.ng-invalid.ng-dirty.p-focus {
        border-color: dt('treeselect.focus.border.color');
    }

    p-treeselect.ng-invalid.ng-dirty .p-treeselect-label.p-placeholder {
        color: dt('treeselect.invalid.placeholder.color');
    }

    .p-treeselect-clear-icon.p-icon {
        flex-shrink: 0;
    }
`;var Gt={root:({instance:n})=>v({position:n.$appendTo()===`self`?`relative`:void 0},n.containerStyle())};var Jt={root:({instance:n})=>[`p-treeselect p-component p-inputwrapper`,{"p-treeselect-display-chip":n.display()===`chip`,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-focus":n.focused,"p-variant-filled":n.$variant()===`filled`,"p-inputwrapper-filled":!n.emptyValue,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-treeselect-open":n.overlayVisible,"p-treeselect-clearable":n.showClear(),"p-treeselect-fluid":n.hasFluid,"p-treeselect-sm p-inputfield-sm":n.size()===`small`,"p-treeselect-lg p-inputfield-lg":n.size()===`large`}],labelContainer:`p-treeselect-label-container`,label:({instance:n})=>[`p-treeselect-label`,{"p-placeholder":n.label===n.placeholder(),"p-treeselect-label-empty":!n.placeholder()&&n.emptyValue}],clearIcon:`p-treeselect-clear-icon`,chip:`p-treeselect-chip-item`,pcChip:`p-treeselect-chip`,dropdown:`p-treeselect-dropdown`,dropdownIcon:`p-treeselect-dropdown-icon`,panel:`p-treeselect-overlay p-component-overlay p-component`,treeContainer:`p-treeselect-tree-container`,emptyMessage:`p-treeselect-empty-message`};var Pe=(()=>{class n extends Nr{name=`treeselect`;style=jt;classes=Jt;inlineStyles=Gt;static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var Xt={provide:te,useExisting:qi(()=>q),multi:!0};var Ue=new b(`TREESELECT_INSTANCE`);var q=(()=>{class n extends c{componentName=`TreeSelect`;$pcTreeSelect=g(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});_componentStyle=g(Pe);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}inputId=zt$1();scrollHeight=zt$1(`400px`);metaKeySelection=zt$1(!1,{transform:CT});display=zt$1(`comma`);selectionMode=zt$1(`single`);tabindex=zt$1(`0`);ariaLabel=zt$1();ariaLabelledBy=zt$1();placeholder=zt$1();panelClass=zt$1();panelStyle=zt$1();panelStyleClass=zt$1();containerStyle=zt$1();containerStyleClass=zt$1();labelStyle=zt$1();labelStyleClass=zt$1();overlayOptions=zt$1();emptyMessage=zt$1(``);filter=zt$1(!1,{transform:CT});filterBy=zt$1(`label`);filterMode=zt$1(`lenient`);filterPlaceholder=zt$1();filterLocale=zt$1();filterInputAutoFocus=zt$1(!0,{transform:CT});propagateSelectionDown=zt$1(!0,{transform:CT});propagateSelectionUp=zt$1(!0,{transform:CT});showClear=zt$1(!1,{transform:CT});resetFilterOnHide=zt$1(!0,{transform:CT});virtualScroll=zt$1();virtualScrollItemSize=zt$1();virtualScrollOptions=zt$1();autofocus=zt$1(void 0,{transform:CT});options=zt$1();loading=zt$1(void 0,{transform:CT});loadingMode=zt$1(`mask`);size=zt$1();variant=zt$1();fluid=zt$1(void 0,{transform:CT});appendTo=zt$1(void 0);motionOptions=zt$1(void 0);onNodeExpand=HV();onNodeCollapse=HV();onShow=HV();onHide=HV();onClear=HV();onFilter=HV();onFocus=HV();onBlur=HV();onNodeUnselect=HV();onNodeSelect=HV();$appendTo=da(()=>this.appendTo()||this.config.overlayAppendTo());focusInput=WV(`focusInput`);filterViewChild=WV(`filter`);treeViewChild=WV(`tree`);panelEl=WV(`panel`);overlayViewChild=WV(`overlay`);firstHiddenFocusableElementOnOverlay=WV(`firstHiddenFocusableEl`);lastHiddenFocusableElementOnOverlay=WV(`lastHiddenFocusableEl`);$variant=da(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}filteredNodes;filterValue=null;serializedValue;valueTemplate;headerTemplate=GV(`header`,{descendants:!1});emptyTemplate;footerTemplate=GV(`footer`,{descendants:!1});clearIconTemplate;triggerIconTemplate;dropdownIconTemplate;filterIconTemplate;closeIconTemplate=GV(`closeicon`,{descendants:!1});itemTogglerIconTemplate;itemCheckboxIconTemplate;itemLoadingIconTemplate;templates=zV(JH);_valueTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_clearIconTemplate;_triggerIconTemplate;_filterIconTemplate;_closeIconTemplate;_itemTogglerIconTemplate;_itemCheckboxIconTemplate;_itemLoadingIconTemplate;_dropdownIconTemplate;focused;overlayVisible;value;expandedNodes=[];templateMap;listId=``;constructor(){super(),$t$1(()=>{this.options(),this.updateTreeState()})}onHostClick(e){this.onClick(e)}onInit(){this.listId=Vy(`pn_id_`)+`_list`,this.updateTreeState()}onAfterContentInit(){this.templates().length&&(this.templateMap={}),this.templates().forEach(e=>{switch(e.getType()){case`value`:this._valueTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`triggericon`:this._triggerIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`closeicon`:this._closeIconTemplate=e.template;break;case`itemtogglericon`:this._itemTogglerIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemloadingicon`:this._itemLoadingIconTemplate=e.template;break;default:{let i=e.name();i?this.templateMap[i]=e.template:this.valueTemplate=e.template;break}}})}onOverlayBeforeEnter(){if(this.filter())V(this.filterValue)&&this.treeViewChild()?._filter(this.filterValue),this.filterInputAutoFocus()&&this.filterViewChild()?.nativeElement.focus();else{let e=this.panelEl()?.nativeElement,i=_y(e);i&&i.length>0&&i[0].focus()}}onOverlayBeforeHide(){let e=_y(this.el.nativeElement);e&&e.length>0&&e[0].focus()}onSelectionChange(e){this.value=e,this.onModelChange(this.value),this.cd.markForCheck()}onClick(e){if(this.$disabled())return;let i=e.target?.getAttribute?.(`data-pc-section`);!this.overlayViewChild()?.el?.nativeElement?.contains(e.target)&&i!==`box`&&i!==`icon`&&(this.overlayVisible?this.hide():this.show(),this.focusInput()?.nativeElement.focus())}onKeyDown(e){switch(e.code){case`ArrowDown`:this.overlayVisible||(this.show(),e.preventDefault()),this.onArrowDown(e),e.preventDefault();break;case`Space`:case`Enter`:this.overlayVisible||(this.show(),e.preventDefault());break;case`Escape`:this.overlayVisible&&(this.hide(),this.focusInput()?.nativeElement.focus(),e.preventDefault());break;case`Tab`:this.onTabKey(e);break;default:break}}onFilterInput(e){this.filterValue=e.target.value;let i=this.treeViewChild();i?._filter(this.filterValue),this.onFilter.emit({filter:this.filterValue,filteredValue:i?._filteredNodesBacking}),setTimeout(()=>{this.overlayViewChild()?.alignOverlay()})}onArrowDown(e){let i=this.panelEl();if(this.overlayVisible&&i?.nativeElement){let t=_y(i.nativeElement,`[data-pc-section="node"]`);t&&t.length>0&&t[0].focus(),e.preventDefault()}}onFirstHiddenFocus(e){let i=this.focusInput();eH(e.relatedTarget===i?.nativeElement?nH(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):i?.nativeElement)}onLastHiddenFocus(e){let i=this.focusInput();eH(e.relatedTarget===i?.nativeElement?iH(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):i?.nativeElement)}show(){this.overlayVisible=!0}hide(e){this.overlayVisible=!1,this.resetFilter(),this.onHide.emit(e),this.cd.markForCheck()}clear(e){this.value=null,this.resetExpandedNodes(),this.resetPartialSelected(),this.onModelChange(this.value),this.onClear.emit(void 0),e.stopPropagation()}checkValue(){return this.value!==null&&V(this.value)}onTabKey(e,i=!1){i||(this.overlayVisible&&this.hasFocusableElements()?(eH(e.shiftKey?this.lastHiddenFocusableElementOnOverlay()?.nativeElement:this.firstHiddenFocusableElementOnOverlay()?.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter()))}hasFocusableElements(){return _y(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}resetFilter(){if(this.filter()&&!this.resetFilterOnHide()){let e=this.treeViewChild();this.filteredNodes=e?._filteredNodesBacking,e?.resetFilter()}else this.filterValue=null}updateTreeState(){if(this.value){let e=this.selectionMode()===`single`?[this.value]:[...this.value];this.resetExpandedNodes(),this.resetPartialSelected(),e&&this.options()&&this.updateTreeBranchState(null,null,e)}}updateTreeBranchState(e,i,t){if(e){if(this.isSelected(e)&&(this.expandPath(i),t.splice(t.indexOf(e),1)),t.length>0&&e.children)for(let l of e.children)this.updateTreeBranchState(l,[...i,e],t)}else for(let l of this.options())this.updateTreeBranchState(l,[],t)}expandPath(e){for(let i of e)i.expanded=!0;this.expandedNodes=[...e]}nodeExpand(e){this.onNodeExpand.emit(e),this.expandedNodes.push(e.node),setTimeout(()=>{this.overlayViewChild()?.alignOverlay()})}nodeCollapse(e){this.onNodeCollapse.emit(e),this.expandedNodes.splice(this.expandedNodes.indexOf(e.node),1),setTimeout(()=>{this.overlayViewChild()?.alignOverlay()})}resetExpandedNodes(){for(let e of this.expandedNodes)e.expanded=!1;this.expandedNodes=[]}resetPartialSelected(e=this.options()){if(e)for(let i of e)i.partialSelected=!1,i.children&&i.children?.length>0&&this.resetPartialSelected(i.children)}findSelectedNodes(e,i,t){if(e){if(this.isSelected(e)&&(t.push(e),delete i[e.key]),Object.keys(i).length&&e.children)for(let l of e.children)this.findSelectedNodes(l,i,t)}else for(let l of this.options())this.findSelectedNodes(l,i,t)}isSelected(e){return this.findIndexInSelection(e)!=-1}findIndexInSelection(e){let i=-1;if(this.value)if(this.selectionMode()===`single`)i=this.value.key&&this.value.key===e.key||this.value==e?0:-1;else for(let t=0;t<this.value.length;t++){let l=this.value[t];if(l.key&&l.key===e.key||l==e){i=t;break}}return i}onSelect(e){this.onNodeSelect.emit(e),this.selectionMode()===`single`&&(this.hide(),this.focusInput()?.nativeElement.focus())}onUnselect(e){this.onNodeUnselect.emit(e)}onInputFocus(e){this.$disabled()||(this.focused=!0,this.onFocus.emit(e))}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}writeControlValue(e){this.value=e,this.updateTreeState(),this.cd.markForCheck()}get emptyValue(){return!this.value||Object.keys(this.value).length===0}get emptyOptions(){return!this.options()||this.options().length===0}get label(){let e=this.value||[];return e.length?e.map(i=>i.label).join(`, `):this.selectionMode()===`single`&&this.value?e.label:this.placeholder()}static ɵfac=function(i){return new(i||n)};static ɵcmp=sa({type:n,selectors:[[`p-treeSelect`],[`p-treeselect`],[`p-tree-select`]],contentQueries:function(i,t,l){if(i&1&&(Dm(l,t.headerTemplate,qe,4)(l,t.footerTemplate,Ke,4)(l,t.closeIconTemplate,We,4)(l,t.templates,JH,4),ym(l,je,4)(l,Ge,4)(l,Je,4)(l,Xe,4)(l,Ye,4)(l,Ze,4)(l,et,4)(l,tt,4)(l,nt,4)),i&2){Jw(4);let r;Kw(r=Qw())&&(t.valueTemplate=r.first),Kw(r=Qw())&&(t.emptyTemplate=r.first),Kw(r=Qw())&&(t.clearIconTemplate=r.first),Kw(r=Qw())&&(t.triggerIconTemplate=r.first),Kw(r=Qw())&&(t.dropdownIconTemplate=r.first),Kw(r=Qw())&&(t.filterIconTemplate=r.first),Kw(r=Qw())&&(t.itemTogglerIconTemplate=r.first),Kw(r=Qw())&&(t.itemCheckboxIconTemplate=r.first),Kw(r=Qw())&&(t.itemLoadingIconTemplate=r.first)}},viewQuery:function(i,t){i&1&&Em(t.focusInput,it,5)(t.filterViewChild,lt,5)(t.treeViewChild,ot,5)(t.panelEl,at,5)(t.overlayViewChild,rt,5)(t.firstHiddenFocusableElementOnOverlay,dt,5)(t.lastHiddenFocusableElementOnOverlay,ct,5),i&2&&Jw(7)},hostVars:4,hostBindings:function(i,t){i&1&&gm(`mousedown`,function(r){return t.onHostClick(r)}),i&2&&(fb(t.sx(`root`)),hb(t.cn(t.cx(`root`),t.containerStyleClass())))},inputs:{inputId:[1,`inputId`],scrollHeight:[1,`scrollHeight`],metaKeySelection:[1,`metaKeySelection`],display:[1,`display`],selectionMode:[1,`selectionMode`],tabindex:[1,`tabindex`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],placeholder:[1,`placeholder`],panelClass:[1,`panelClass`],panelStyle:[1,`panelStyle`],panelStyleClass:[1,`panelStyleClass`],containerStyle:[1,`containerStyle`],containerStyleClass:[1,`containerStyleClass`],labelStyle:[1,`labelStyle`],labelStyleClass:[1,`labelStyleClass`],overlayOptions:[1,`overlayOptions`],emptyMessage:[1,`emptyMessage`],filter:[1,`filter`],filterBy:[1,`filterBy`],filterMode:[1,`filterMode`],filterPlaceholder:[1,`filterPlaceholder`],filterLocale:[1,`filterLocale`],filterInputAutoFocus:[1,`filterInputAutoFocus`],propagateSelectionDown:[1,`propagateSelectionDown`],propagateSelectionUp:[1,`propagateSelectionUp`],showClear:[1,`showClear`],resetFilterOnHide:[1,`resetFilterOnHide`],virtualScroll:[1,`virtualScroll`],virtualScrollItemSize:[1,`virtualScrollItemSize`],virtualScrollOptions:[1,`virtualScrollOptions`],autofocus:[1,`autofocus`],options:[1,`options`],loading:[1,`loading`],loadingMode:[1,`loadingMode`],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{onNodeExpand:`onNodeExpand`,onNodeCollapse:`onNodeCollapse`,onShow:`onShow`,onHide:`onHide`,onClear:`onClear`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onNodeUnselect:`onNodeUnselect`,onNodeSelect:`onNodeSelect`},features:[Al([Xt,Pe,{provide:Ue,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],decls:15,vars:36,consts:[[`focusInput`,``],[`overlay`,``],[`content`,``],[`panel`,``],[`firstHiddenFocusableEl`,``],[`tree`,``],[`lastHiddenFocusableEl`,``],[`empty`,``],[`togglericon`,``],[`checkboxicon`,``],[`loadingicon`,``],[`filtericon`,``],[1,`p-hidden-accessible`,3,`pBind`],[`type`,`text`,`role`,`combobox`,`readonly`,``,3,`focus`,`blur`,`keydown`,`pAutoFocus`,`pBind`],[3,`pBind`],[3,`ngStyle`,`pBind`],[`role`,`button`,`aria-haspopup`,`tree`,3,`pBind`],[`data-p-icon`,`chevron-down`,3,`class`,`pBind`],[3,`class`,`pBind`],[3,`visibleChange`,`onBeforeEnter`,`onBeforeHide`,`onShow`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`unstyled`,`label`,`pt`],[`data-p-icon`,`times`,3,`class`,`pBind`],[`data-p-icon`,`times`,3,`click`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`],[`data-p-icon`,`chevron-down`,3,`pBind`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`selectionChange`,`onNodeExpand`,`onNodeCollapse`,`onNodeSelect`,`onNodeUnselect`,`value`,`propagateSelectionDown`,`propagateSelectionUp`,`selectionMode`,`selection`,`metaKeySelection`,`emptyMessage`,`filter`,`filterBy`,`filterMode`,`filterPlaceholder`,`filterLocale`,`filteredNodes`,`virtualScroll`,`virtualScrollItemSize`,`virtualScrollOptions`,`_templateMap`,`loading`,`filterInputAutoFocus`,`loadingMode`,`pt`,`unstyled`]],template:function(i,t){if(i&1){let l=$w();Ws(0,`div`,12)(1,`input`,13,0),gm(`focus`,function(g){return t.onInputFocus(g)})(`blur`,function(g){return t.onInputBlur(g)})(`keydown`,function(g){return t.onKeyDown(g)}),wl()(),Ws(3,`div`,14)(4,`div`,15),Aw(5,_t,1,5,`ng-container`)(6,bt,2,1),wl()(),Aw(7,Mt,2,2),Ws(8,`div`,16),Aw(9,It,1,3,`:svg:svg`,17),Aw(10,Nt,2,4,`span`,18),wl(),Ws(11,`p-overlay`,19,1),jm(`visibleChange`,function(g){return Rf(l),Nb(t.overlayVisible,g)||(t.overlayVisible=g),Lf(g)}),gm(`onBeforeEnter`,function(){return t.onOverlayBeforeEnter()})(`onBeforeHide`,function(){return t.onOverlayBeforeHide()})(`onShow`,function(g){return t.onShow.emit(g)})(`onHide`,function(g){return t.hide(g)}),nm(13,Wt,16,56,`ng-template`,null,2,Zb),wl()}i&2&&(cm(`pBind`,t.ptm(`hiddenInputContainer`)),am(`data-p-hidden-accessible`,!0),MC(),cm(`pAutoFocus`,t.autofocus())(`pBind`,t.ptm(`hiddenInput`)),am(`id`,t.inputId())(`disabled`,t.$disabled()?``:void 0)(`tabindex`,t.$disabled()?-1:t.tabindex())(`aria-controls`,t.overlayVisible?t.listId:null)(`aria-haspopup`,`tree`)(`aria-expanded`,t.overlayVisible??!1)(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel()||(t.label===`p-emptylabel`?void 0:t.label)),MC(2),hb(t.cx(`labelContainer`)),cm(`pBind`,t.ptm(`labelContainer`)),MC(),hb(t.cn(t.cx(`label`),t.labelStyleClass())),cm(`ngStyle`,t.labelStyle())(`pBind`,t.ptm(`label`)),MC(),xw(t.valueTemplate||t._valueTemplate?5:6),MC(2),xw(t.checkValue()&&!t.$disabled()&&t.showClear()?7:-1),MC(),hb(t.cx(`dropdown`)),cm(`pBind`,t.ptm(`dropdown`)),am(`aria-expanded`,t.overlayVisible??!1)(`aria-label`,`treeselect trigger`),MC(),xw(!t.triggerIconTemplate&&!t._triggerIconTemplate&&!t.dropdownIconTemplate&&!t._dropdownIconTemplate?9:-1),MC(),xw(t.triggerIconTemplate||t._triggerIconTemplate||t.dropdownIconTemplate||t._dropdownIconTemplate?10:-1),MC(),cm(`hostAttrSelector`,t.$attrSelector),Pm(`visible`,t.overlayVisible),cm(`options`,t.overlayOptions())(`target`,`@parent`)(`appendTo`,t.$appendTo())(`unstyled`,t.unstyled())(`pt`,t.ptm(`pcOverlay`))(`motionOptions`,t.motionOptions()))},dependencies:[Gl,GT,WT,Ie,XH,dt$1,B,f,d,we,L],encapsulation:2})}return n})();var $e=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[q,XH,XH]})}return n})();var Fn=(()=>{class n{constructor(){this.nodes=[{key:`0`,label:`Documents`,data:`Documents Folder`,icon:`pi pi-fw pi-folder`,children:[{key:`0-0`,label:`Work`,data:`Work Folder`,icon:`pi pi-fw pi-folder`,children:[{key:`0-0-0`,label:`Expenses.doc`,icon:`pi pi-fw pi-file`,data:`Expenses Document`},{key:`0-0-1`,label:`Resume.doc`,icon:`pi pi-fw pi-file`,data:`Resume Document`}]},{key:`0-1`,label:`Home`,data:`Home Folder`,icon:`pi pi-fw pi-folder`,children:[{key:`0-1-0`,label:`Invoices.txt`,icon:`pi pi-fw pi-file`,data:`Invoices for this month`}]}]}],this.selection=ne(void 0),this.multiSelection=ne(void 0)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=sa({type:n,selectors:[[`uk-treeselect-demo`]],decls:20,vars:13,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`placeholder`,`Select Item`,2,`min-width`,`14rem`,3,`ngModelChange`,`ngModel`,`options`],[`selectionMode`,`checkbox`,`display`,`chip`,`placeholder`,`Select Items`,2,`min-width`,`18rem`,3,`ngModelChange`,`ngModel`,`options`],[`placeholder`,`Select Item`,2,`min-width`,`14rem`,3,`ngModel`,`options`,`filter`],[1,`demo-section__row`],[`placeholder`,`Disabled`,3,`ngModel`,`options`,`disabled`],[`placeholder`,`Invalid`,3,`ngModel`,`options`,`invalid`]],template:function(i,t){i&1&&(Ws(0,`h1`,0),wb(1,`TreeSelect`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),Ws(5,`p-treeSelect`,3),jm(`ngModelChange`,function(r){return Nb(t.selection,r)||(t.selection=r),r}),wl(),hS(),wl(),Ws(6,`section`,1)(7,`h2`,2),wb(8,`Checkbox Selection`),wl(),Ws(9,`p-treeSelect`,4),jm(`ngModelChange`,function(r){return Nb(t.multiSelection,r)||(t.multiSelection=r),r}),wl(),hS(),wl(),Ws(10,`section`,1)(11,`h2`,2),wb(12,`Filter`),wl(),um(13,`p-treeSelect`,5),hS(),wl(),Ws(14,`section`,1)(15,`h2`,2),wb(16,`States`),wl(),Ws(17,`div`,6),um(18,`p-treeSelect`,7),hS(),um(19,`p-treeSelect`,8),hS(),wl()()),i&2&&(MC(5),Pm(`ngModel`,t.selection),cm(`options`,t.nodes),mS(),MC(4),Pm(`ngModel`,t.multiSelection),cm(`options`,t.nodes),mS(),MC(4),cm(`ngModel`,t.selection())(`options`,t.nodes)(`filter`,!0),mS(),MC(5),cm(`ngModel`,t.selection())(`options`,t.nodes)(`disabled`,!0),mS(),MC(),cm(`ngModel`,t.selection())(`options`,t.nodes)(`invalid`,!0),mS())},dependencies:[un,sn,Rt$1,$e,q],encapsulation:2})}}return n})();export{Fn as TreeSelectDemo};