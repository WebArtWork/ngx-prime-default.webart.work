import{$a as zt,$i as qi,$r as gm,At as Lf,Br as em,Da as uw,Ea as um,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,Jr as g,Kr as fb,La as wb,Li as nm,Nn as Vy,Nr as da,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,Si as la,Ta as ua,Tn as UV,W as GV,Z as H_,Zt as P,ar as _H,dn as Ro,fr as am,gt as Jw,h as Aw,hi as kb,hr as b,ir as Zn,jt as Lm,ka as v,l as $w,lt as J2,na as qw,nr as Zb,oi as hb,p as Al,qr as fm,qt as Ob,s as $t,ua as sa,un as Rf,ut as JH,wa as u_}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{t as I}from"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{n as nt$1,t as ke$1}from"./chunk-Cw3svWHP.js";import"./chunk-CC7-t2QW.js";import"./chunk-CUoEEuYl.js";import"./chunk-CxBE3lzD.js";import"./chunk--HunKa9-.js";import"./chunk-Bc7G3ZMk.js";import{D as Rt,k as vn}from"./main-4W6E6VEG.js";var _e=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }
    
    .p-stepitem .p-steppanel {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-stepitem .p-steppanel-content-wrapper {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
    }
    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`;var Q=[`*`];var Ae=[`content`];var Pe=(e,f,t)=>({activateCallback:e,value:f,active:t});function je(e,f){e&1&&um(0,`p-stepper-separator`)}function $e(e,f){if(e&1){let t=$w();Ws(0,`button`,0),gm(`click`,function(){Rf(t);return Lf(qw().onStepClick())}),Ws(1,`span`,1),wb(2),wl(),Ws(3,`span`,1),la(4),wl()(),Aw(5,je,1,0,`p-stepper-separator`)}if(e&2){let t=qw();hb(t.cx(`header`)),cm(`pBind`,t.ptm(`header`))(`tabindex`,t.isStepDisabled()?-1:void 0)(`disabled`,t.isStepDisabled()),am(`id`,t.id())(`role`,`tab`)(`aria-controls`,t.ariaControls()),MC(),hb(t.cx(`number`)),cm(`pBind`,t.ptm(`number`)),MC(),Lm(t.value()),MC(),hb(t.cx(`title`)),cm(`pBind`,t.ptm(`title`)),MC(2),xw(t.isSeparatorVisible()?5:-1)}}function Le(e,f){e&1&&fm(0)}function Qe(e,f){e&1&&um(0,`p-stepper-separator`)}function He(e,f){if(e&1&&(nm(0,Le,1,0,`ng-container`,2),Aw(1,Qe,1,0,`p-stepper-separator`)),e&2){let t=qw();cm(`ngTemplateOutlet`,t.content()||t._contentTemplate)(`ngTemplateOutletContext`,kb(3,Pe,t.onStepClick.bind(t),t.value(),t.active())),MC(),xw(t.isSeparatorVisible()?1:-1)}}function Re(e,f){e&1&&um(0,`p-stepper-separator`)}function ze(e,f){e&1&&fm(0)}var qe={root:({instance:e})=>[`p-stepitem`,{"p-stepitem-active":e.isActive()}]};var De=(()=>{class e extends Nr{name=`stepitem`;classes=qe;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var We={root:`p-steplist`};var Ce=(()=>{class e extends Nr{name=`steplist`;classes=We;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Ge={root:`p-steppanels`};var Me=(()=>{class e extends Nr{name=`steppanel`;classes=Ge;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Je={root:({instance:e})=>[`p-steppanel`,{"p-steppanel-active":e.isVertical()&&e.active()}],contentWrapper:`p-steppanel-content-wrapper`,content:`p-steppanel-content`};var xe=(()=>{class e extends Nr{name=`steppanel`;classes=Je;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Ke=`
${_e}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`;var Ue={root:({instance:e})=>[`p-stepper p-component`,{"p-readonly":e.linear()}],separator:`p-stepper-separator`};var te=(()=>{class e extends Nr{name=`stepper`;style=Ke;classes=Ue;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Xe={root:({instance:e})=>[`p-step`,{"p-step-active":e.active(),"p-disabled":e.isStepDisabled()}],header:`p-step-header`,number:`p-step-number`,title:`p-step-title`};var Ee=(()=>{class e extends Nr{name=`step`;classes=Xe;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Te=new b(`STEPPER_INSTANCE`);var Ne=new b(`STEPLIST_INSTANCE`);var Ie=new b(`STEPITEM_INSTANCE`);var ke=new b(`STEP_INSTANCE`);var we=new b(`STEPPANEL_INSTANCE`);var Fe=new b(`STEPPANELS_INSTANCE`);var Be=new b(`STEPPERSEPARATOR_INSTANCE`);var K=(()=>{class e extends J2{$pcStepList=g(Ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`StepList`;steps=zV(qi(()=>h));_componentStyle=g(Ce);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-step-list`]],contentQueries:function(i,n,d){i&1&&Dm(d,n.steps,h,4),i&2&&Jw()},hostVars:2,hostBindings:function(i,n){i&2&&hb(n.cx(`root`))},features:[Al([Ce,{provide:Ne,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return e})();var se=(()=>{class e extends J2{$pcStepperSeparator=g(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`StepperSeparator`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=g(te);static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-stepper-separator`]],hostVars:2,hostBindings:function(i,n){i&2&&hb(n.cx(`separator`))},features:[Al([te,{provide:Be,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return e})();var U=(()=>{class e extends J2{$pcStepItem=g(Ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`StepItem`;_componentStyle=g(De);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}pcStepper=g(qi(()=>H));value=UV();isActive=da(()=>this.pcStepper.value()===this.value());step=GV(qi(()=>h));stepPanel=GV(qi(()=>X));constructor(){super(),$t(()=>{this.step().value.set(this.value())}),$t(()=>{this.stepPanel().value.set(this.value())})}static ɵfac=function(i){return new(i||e)};static ɵcmp=sa({type:e,selectors:[[`p-step-item`]],contentQueries:function(i,n,d){i&1&&Dm(d,n.step,h,5)(d,n.stepPanel,X,5),i&2&&Jw(2)},hostVars:3,hostBindings:function(i,n){i&2&&(am(`data-p-active`,n.isActive()),hb(n.cx(`root`)))},inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[Al([De,{provide:Ie,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[F],encapsulation:2})}return e})();var h=(()=>{class e extends J2{$pcStep=g(ke,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`Step`;pcStepper=g(qi(()=>H));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=UV();disabled=zt(!1,{transform:t=>I(t)});active=da(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=da(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=da(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=da(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=da(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps();return t.indexOf(this)!==t.length-1}else return!1});content=GV(`content`,{descendants:!1});templates=zV(JH);_contentTemplate;_componentStyle=g(Ee);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`content`&&(this._contentTemplate=t.template)})}onStepClick(){this.pcStepper.updateValue(this.value())}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-step`]],contentQueries:function(i,n,d){i&1&&Dm(d,n.content,Ae,4)(d,n.templates,JH,4),i&2&&Jw(2)},hostVars:6,hostBindings:function(i,n){i&2&&(am(`aria-current`,n.active()?`step`:void 0)(`role`,`presentation`)(`data-p-active`,n.active())(`data-p-disabled`,n.isStepDisabled()),hb(n.cx(`root`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[Al([Ee,{provide:ke,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Q,decls:2,vars:1,consts:[[`type`,`button`,3,`click`,`pBind`,`tabindex`,`disabled`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(i,n){i&1&&(ua(),Aw(0,$e,6,16)(1,He,2,7)),i&2&&xw(!n.content()&&!n._contentTemplate?0:1)},dependencies:[se,XH,F,L],encapsulation:2})}return e})();var X=(()=>{class e extends J2{$pcStepPanel=g(we,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`StepPanel`;pcStepper=g(qi(()=>H));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=UV(void 0);active=da(()=>this.pcStepper.value()===this.value());ariaControls=da(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=da(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=da(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=da(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,i=u_(this.pcStepper.el.nativeElement,`[data-pc-name="steppanel"]`);return _H(this.el.nativeElement,i)!==t-1}});computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.pcStepper.computedMotionOptions()));contentTemplate=GV(`content`);templates=zV(JH);_contentTemplate;_componentStyle=g(xe);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`content`&&(this._contentTemplate=t.template)})}updateValue(t){this.pcStepper.updateValue(t)}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-step-panel`]],contentQueries:function(i,n,d){i&1&&Dm(d,n.contentTemplate,Ae,5)(d,n.templates,JH,4),i&2&&Jw(2)},hostVars:7,hostBindings:function(i,n){i&2&&(am(`role`,`tabpanel`)(`aria-controls`,n.ariaControls())(`id`,n.id())(`data-p-active`,n.active())(`data-pc-name`,`steppanel`),hb(n.cx(`root`)))},inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[Al([xe,{provide:we,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:5,vars:16,consts:[[`name`,`p-collapsible`,3,`visible`,`disabled`,`options`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(i,n){i&1&&(Ws(0,`p-motion`,0)(1,`div`,1),Aw(2,Re,1,0,`p-stepper-separator`),Ws(3,`div`,1),nm(4,ze,1,0,`ng-container`,2),wl()()()),i&2&&(cm(`visible`,n.active())(`disabled`,!n.isVertical())(`options`,n.computedMotionOptions()),MC(),hb(n.cx(`contentWrapper`)),cm(`pBind`,n.ptm(`contentWrapper`)),MC(),xw(n.isSeparatorVisible()?2:-1),MC(),hb(n.cx(`content`)),cm(`pBind`,n.ptm(`content`)),MC(),cm(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate)(`ngTemplateOutletContext`,kb(12,Pe,n.updateValue.bind(n),n.value(),n.active())))},dependencies:[se,XH,F,L,nt$1,ke$1],encapsulation:2})}return e})();var re=(()=>{class e extends J2{$pcStepPanels=g(Fe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});componentName=`StepPanels`;_componentStyle=g(Me);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-step-panels`]],hostVars:2,hostBindings:function(i,n){i&2&&hb(n.cx(`root`))},features:[Al([Me,{provide:Fe,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[XH,F],encapsulation:2})}return e})();var H=(()=>{class e extends J2{componentName=`Stepper`;$pcStepper=g(Te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=UV(void 0);linear=zt(!1,{transform:t=>I(t)});transitionOptions=zt(`400ms cubic-bezier(0.86, 0, 0.07, 1)`);motionOptions=zt(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));id=ne(Vy(`pn_id_`));stepItems=zV(U);steps=zV(h);stepList=GV(K);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-stepper`]],contentQueries:function(i,n,d){i&1&&Dm(d,n.stepItems,U,4)(d,n.steps,h,4)(d,n.stepList,K,5),i&2&&Jw(3)},hostVars:4,hostBindings:function(i,n){i&2&&(am(`role`,`tablist`)(`id`,n.id()),hb(n.cx(`root`)))},inputs:{value:[1,`value`],linear:[1,`linear`],transitionOptions:[1,`transitionOptions`],motionOptions:[1,`motionOptions`]},outputs:{value:`valueChange`},features:[Al([te,{provide:Te,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Q,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},dependencies:[XH,F],encapsulation:2})}return e})();var Ve=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[H,K,re,X,U,h,se,XH,F,XH,F]})}return e})();var Ze=()=>({"max-width":`30rem`});function et(e,f){if(e&1){let t=$w();Ws(0,`div`,5),wb(1,`Personal details step content.`),wl(),Ws(2,`p-button`,6),gm(`onClick`,function(){let n=Rf(t).activateCallback;return Lf(n(2))}),wl()}}function tt(e,f){if(e&1){let t=$w();Ws(0,`div`,5),wb(1,`Payment details step content.`),wl(),Ws(2,`p-button`,7),gm(`onClick`,function(){let n=Rf(t).activateCallback;return Lf(n(1))}),wl(),Ws(3,`p-button`,6),gm(`onClick`,function(){let n=Rf(t).activateCallback;return Lf(n(3))}),wl()}}function nt(e,f){if(e&1){let t=$w();Ws(0,`div`,5),wb(1,`Confirmation step content.`),wl(),Ws(2,`p-button`,7),gm(`onClick`,function(){let n=Rf(t).activateCallback;return Lf(n(2))}),wl()}}var Mt=(()=>{class e{static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-stepper-demo`]],decls:26,vars:10,consts:[[`content`,``],[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[3,`value`],[2,`padding`,`1rem 0`],[`label`,`Next`,3,`onClick`],[`label`,`Back`,`severity`,`secondary`,3,`onClick`]],template:function(i,n){i&1&&(Ws(0,`h1`,1),wb(1,`Stepper`),wl(),Ws(2,`section`,2)(3,`h2`,3),wb(4,`Basic`),wl(),Ws(5,`p-stepper`,4)(6,`p-step-list`)(7,`p-step-item`,4)(8,`p-step`),wb(9,`Personal`),wl()(),Ws(10,`p-step-item`,4)(11,`p-step`),wb(12,`Payment`),wl()(),Ws(13,`p-step-item`,4)(14,`p-step`),wb(15,`Confirmation`),wl()()(),Ws(16,`p-step-panels`)(17,`p-step-panel`,4),nm(18,et,3,0,`ng-template`,null,0,Zb),wl(),Ws(20,`p-step-panel`,4),nm(21,tt,4,0,`ng-template`,null,0,Zb),wl(),Ws(23,`p-step-panel`,4),nm(24,nt,3,0,`ng-template`,null,0,Zb),wl()()()()),i&2&&(MC(5),fb(Ob(9,Ze)),cm(`value`,1),MC(2),cm(`value`,1),MC(3),cm(`value`,2),MC(3),cm(`value`,3),MC(4),cm(`value`,1),MC(3),cm(`value`,2),MC(3),cm(`value`,3))},dependencies:[vn,Rt,Ve,H,K,re,X,U,h],encapsulation:2})}}return e})();export{Mt as StepperDemo};