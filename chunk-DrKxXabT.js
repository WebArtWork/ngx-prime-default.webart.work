import{$a as zt,$i as qi,$r as gm,Bn as X$,Br as em,Da as uw,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,Jr as g,La as wb,Li as nm,Lr as eH,Nn as Vy,Nr as da,Or as cm,Pr as dh,Pt as MC,Qi as qf,Ra as wl,Rn as Ws,Si as la,Ta as ua,Tn as UV,U as GT,X as HV,Z as H_,Zt as P,cn as Rb,dn as Ro,fr as am,h as Aw,hr as b,ir as Zn,ka as v,lt as J2,na as qw,oi as hb,on as Qw,p as Al,qt as Ob,ua as sa,xi as l_,yr as bm}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{t as I}from"./chunk-Br98bhvT.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{n as nt,t as ke$1}from"./chunk-Cw3svWHP.js";import{t as W}from"./chunk-CxBE3lzD.js";import{F as d}from"./main-4W6E6VEG.js";import{t as f}from"./chunk-BM45g-Uf.js";var fe=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var $=[`*`];var _e=[`toggleicon`];var De=n=>({active:n});function xe(n,h){}function Ee(n,h){n&1&&nm(0,xe,0,0,`ng-template`)}function Ne(n,h){if(n&1&&nm(0,Ee,1,0,null,0),n&2){let e=qw();cm(`ngTemplateOutlet`,e.toggleicon)(`ngTemplateOutletContext`,Rb(2,De,e.active()))}}function He(n,h){if(n&1&&um(0,`span`,3),n&2){let e=qw(3);hb(e.cn(e.cx(`toggleicon`),e.pcAccordion.collapseIcon())),cm(`pBind`,e.ptm(`toggleicon`)),am(`aria-hidden`,!0)}}function we(n,h){if(n&1&&(qf(),um(0,`svg`,4)),n&2){let e=qw(3);hb(e.cx(`toggleicon`)),cm(`pBind`,e.ptm(`toggleicon`)),am(`aria-hidden`,!0)}}function Ie(n,h){if(n&1&&(Aw(0,He,1,4,`span`,1),Aw(1,we,1,4,`:svg:svg`,2)),n&2){let e=qw(2);xw(e.pcAccordion.collapseIcon()?0:-1),MC(),xw(e.pcAccordion.collapseIcon()?-1:1)}}function Pe(n,h){if(n&1&&um(0,`span`,3),n&2){let e=qw(3);hb(e.cn(e.cx(`toggleicon`),e.pcAccordion.expandIcon())),cm(`pBind`,e.ptm(`toggleicon`)),am(`aria-hidden`,!0)}}function Me(n,h){if(n&1&&(qf(),um(0,`svg`,5)),n&2)cm(`pBind`,qw(3).ptm(`toggleicon`)),am(`aria-hidden`,!0)}function Te(n,h){if(n&1&&(Aw(0,Pe,1,4,`span`,1),Aw(1,Me,1,2,`:svg:svg`,5)),n&2){let e=qw(2);xw(e.pcAccordion.expandIcon()?0:-1),MC(),xw(e.pcAccordion.expandIcon()?-1:1)}}function Fe(n,h){if(n&1&&(Aw(0,Ie,2,2),Aw(1,Te,2,2)),n&2){let e=qw();xw(e.active()?0:-1),MC(),xw(e.active()?-1:1)}}var Oe=`
${fe}

/* For ngx-prime */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`;var Se={root:`p-accordion p-component`,panel:({instance:n})=>[`p-accordionpanel`,{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`,contentContainer:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`};var C=(()=>{class n extends Nr{name=`accordion`;style=Oe;classes=Se;static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var ge=new b(`ACCORDION_PANEL_INSTANCE`);var ve=new b(`ACCORDION_HEADER_INSTANCE`);var be=new b(`ACCORDION_CONTENT_INSTANCE`);var Ae=new b(`ACCORDION_INSTANCE`);var V=(()=>{class n extends J2{$pcAccordionPanel=g(ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`AccordionPanel`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(qi(()=>H));value=UV(void 0);disabled=zt(!1,{transform:e=>I(e)});active=da(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,o){return Array.isArray(e)?e.includes(o):e===o}_componentStyle=g(C);static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵcmp=sa({type:n,selectors:[[`p-accordion-panel`],[`p-accordionpanel`]],hostVars:4,hostBindings:function(o,t){o&2&&(am(`data-p-disabled`,t.disabled())(`data-p-active`,t.active()),hb(t.cx(`panel`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[Al([C,{provide:ge,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],ngContentSelectors:$,decls:1,vars:0,template:function(o,t){o&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return n})();var z=(()=>{class n extends J2{$pcAccordionHeader=g(ve,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`AccordionHeader`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(qi(()=>H));pcAccordionPanel=g(qi(()=>V));id=da(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=da(()=>this.pcAccordionPanel.active());disabled=da(()=>this.pcAccordionPanel.disabled());ariaControls=da(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let o=this.active();this.changeActiveValue();let t=this.active(),i=this.pcAccordionPanel.value();!o&&t?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):o&&!t&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case`ArrowDown`:this.arrowDownKey(e);break;case`ArrowUp`:this.arrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`Space`:case`NumpadEnter`:this.onEnterKey(e);break;default:break}}_componentStyle=g(C);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest(`[data-pc-name="accordionpanel"]`)}findHeader(e){return X$(e,`[data-pc-name="accordionheader"]`)}findNextPanel(e,o=!1){let t=o?e:e.nextElementSibling;return t?l_(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null}findPrevPanel(e,o=!1){let t=o?e:e.previousElementSibling;return t?l_(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,o){eH(o)}arrowDownKey(e){let o=this.findNextPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let o=this.findPrevPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let o=this.findFirstPanel();this.changeFocusedPanel(e,o),e.preventDefault()}onEndKey(e){let o=this.findLastPanel();this.changeFocusedPanel(e,o),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵcmp=sa({type:n,selectors:[[`p-accordion-header`],[`p-accordionheader`]],contentQueries:function(o,t,i){if(o&1&&ym(i,_e,5),o&2){let v;Kw(v=Qw())&&(t.toggleicon=v.first)}},hostVars:13,hostBindings:function(o,t){o&1&&gm(`click`,function(v){return t.onClick(v)})(`focus`,function(){return t.onFocus()})(`keydown`,function(v){return t.onKeydown(v)}),o&2&&(am(`id`,t.id())(`aria-expanded`,t.active())(`aria-controls`,t.ariaControls())(`aria-disabled`,t.disabled())(`role`,`button`)(`tabindex`,t.disabled()?`-1`:`0`)(`data-p-active`,t.active())(`data-p-disabled`,t.disabled())(`data-p`,t.dataP),hb(t.cx(`header`)),bm(`user-select`,`none`))},features:[Al([C,{provide:ve,useExisting:n},{provide:H_,useExisting:n}]),uw([W,L]),em],ngContentSelectors:$,decls:3,vars:1,consts:[[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`],[`data-p-icon`,`chevron-up`,3,`class`,`pBind`],[3,`pBind`],[`data-p-icon`,`chevron-up`,3,`pBind`],[`data-p-icon`,`chevron-down`,3,`pBind`]],template:function(o,t){o&1&&(ua(),la(0),Aw(1,Ne,1,4)(2,Fe,2,2)),o&2&&(MC(),xw(t.toggleicon?1:2))},dependencies:[d,f,F,L,GT],encapsulation:2})}return n})();var J=(()=>{class n extends J2{$pcAccordionContent=g(be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`AccordionContent`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(qi(()=>H));pcAccordionPanel=g(qi(()=>V));active=da(()=>this.pcAccordionPanel.active());ariaLabelledby=da(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=da(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=g(C);ptParams=da(()=>({context:this.active()}));computedMotionOptions=da(()=>v(v({},this.ptm(`motion`,this.ptParams())),this.pcAccordion.computedMotionOptions()));static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵcmp=sa({type:n,selectors:[[`p-accordion-content`],[`p-accordioncontent`]],hostVars:6,hostBindings:function(o,t){o&2&&(am(`id`,t.id())(`role`,`region`)(`data-p-active`,t.active())(`aria-labelledby`,t.ariaLabelledby()),hb(t.cx(`contentContainer`)))},features:[Al([C,{provide:be,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],ngContentSelectors:$,decls:4,vars:10,consts:[[`name`,`p-collapsible`,`hideStrategy`,`visibility`,3,`visible`,`mountOnEnter`,`unmountOnLeave`,`options`],[3,`pBind`]],template:function(o,t){o&1&&(ua(),Ws(0,`p-motion`,0)(1,`div`,1)(2,`div`,1),la(3),wl()()()),o&2&&(cm(`visible`,t.active())(`mountOnEnter`,!1)(`unmountOnLeave`,!1)(`options`,t.computedMotionOptions()),MC(),hb(t.cx(`contentWrapper`)),cm(`pBind`,t.ptm(`contentWrapper`,t.ptParams())),MC(),hb(t.cx(`content`)),cm(`pBind`,t.ptm(`content`,t.ptParams())))},dependencies:[F,L,nt,ke$1],encapsulation:2})}return n})();var H=(()=>{class n extends J2{componentName=`Accordion`;$pcAccordion=g(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}value=UV(void 0);multiple=zt(!1,{transform:e=>I(e)});styleClass=zt();expandIcon=zt();collapseIcon=zt();selectOnFocus=zt(!1,{transform:e=>I(e)});transitionOptions=zt(`400ms cubic-bezier(0.86, 0, 0.07, 1)`);motionOptions=zt(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));onClose=HV();onOpen=HV();id=ne(Vy(`pn_id_`));_componentStyle=g(C);onKeydown(e){switch(e.code){case`ArrowDown`:this.onTabArrowDownKey(e);break;case`ArrowUp`:this.onTabArrowUpKey(e);break;case`Home`:e.shiftKey||this.onTabHomeKey(e);break;case`End`:e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let o=this.findNextHeaderAction(e.target.parentElement);o?this.changeFocusedTab(o):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let o=this.findPrevHeaderAction(e.target.parentElement);o?this.changeFocusedTab(o):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let o=this.findFirstHeaderAction();this.changeFocusedTab(o),e.preventDefault()}changeFocusedTab(e){e&&eH(e)}findNextHeaderAction(e,o=!1){let i=X$(o?e:e.nextElementSibling,`[data-pc-section="accordionheader"]`);return i?l_(i,`data-p-disabled`)?this.findNextHeaderAction(i.parentElement):X$(i.parentElement,`[data-pc-section="accordionheader"]`):null}findPrevHeaderAction(e,o=!1){let i=X$(o?e:e.previousElementSibling,`[data-pc-section="accordionheader"]`);return i?l_(i,`data-p-disabled`)?this.findPrevHeaderAction(i.parentElement):X$(i.parentElement,`[data-pc-section="accordionheader"]`):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let o=this.findLastHeaderAction();this.changeFocusedTab(o),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let o=this.value();if(this.multiple()){let t=Array.isArray(o)?[...o]:[],i=t.indexOf(e);i!==-1?t.splice(i,1):t.push(e),this.value.set(t)}else o===e?this.value.set(void 0):this.value.set(e)}static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵcmp=sa({type:n,selectors:[[`p-accordion`]],hostVars:2,hostBindings:function(o,t){o&1&&gm(`keydown`,function(v){return t.onKeydown(v)}),o&2&&hb(t.cn(t.cx(`root`),t.styleClass()))},inputs:{value:[1,`value`],multiple:[1,`multiple`],styleClass:[1,`styleClass`],expandIcon:[1,`expandIcon`],collapseIcon:[1,`collapseIcon`],selectOnFocus:[1,`selectOnFocus`],transitionOptions:[1,`transitionOptions`],motionOptions:[1,`motionOptions`]},outputs:{value:`valueChange`,onClose:`onClose`,onOpen:`onOpen`},features:[Al([C,{provide:Ae,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],ngContentSelectors:$,decls:1,vars:0,template:function(o,t){o&1&&(ua(),la(0))},dependencies:[XH,F],encapsulation:2})}return n})();var ye=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[H,XH,V,z,J,F,XH,F]})}return n})();var ke=()=>[`0`,`1`];var sn=(()=>{class n{static{this.ɵfac=function(o){return new(o||n)}}static{this.ɵcmp=sa({type:n,selectors:[[`uk-accordion-demo`]],decls:40,vars:3,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`value`,`0`],[2,`margin`,`0`],[`value`,`1`],[`value`,`2`],[3,`value`,`multiple`]],template:function(o,t){o&1&&(Ws(0,`h1`,0),wb(1,`Accordion`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),Ws(5,`p-accordion`,3)(6,`p-accordion-panel`,3)(7,`p-accordion-header`),wb(8,`Header I`),wl(),Ws(9,`p-accordion-content`)(10,`p`,4),wb(11,`Content of the first panel.`),wl()()(),Ws(12,`p-accordion-panel`,5)(13,`p-accordion-header`),wb(14,`Header II`),wl(),Ws(15,`p-accordion-content`)(16,`p`,4),wb(17,`Content of the second panel.`),wl()()(),Ws(18,`p-accordion-panel`,6)(19,`p-accordion-header`),wb(20,`Header III`),wl(),Ws(21,`p-accordion-content`)(22,`p`,4),wb(23,`Content of the third panel.`),wl()()()()(),Ws(24,`section`,1)(25,`h2`,2),wb(26,`Multiple`),wl(),Ws(27,`p-accordion`,7)(28,`p-accordion-panel`,3)(29,`p-accordion-header`),wb(30,`Header I`),wl(),Ws(31,`p-accordion-content`)(32,`p`,4),wb(33,`Content of the first panel.`),wl()()(),Ws(34,`p-accordion-panel`,5)(35,`p-accordion-header`),wb(36,`Header II`),wl(),Ws(37,`p-accordion-content`)(38,`p`,4),wb(39,`Content of the second panel.`),wl()()()()()),o&2&&(MC(27),cm(`value`,Ob(2,ke))(`multiple`,!0))},dependencies:[ye,H,V,z,J],encapsulation:2})}}return n})();export{sn as AccordionDemo};