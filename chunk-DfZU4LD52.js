import{$a as zt,$i as qi,$r as gm,Br as em,Da as uw,Ea as um,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,La as wb,Li as nm,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,U as GT,W as GV,X as HV,Z as H_,Zt as P,cn as Rb,dn as Ro,fr as am,ft as JV,gt as Jw,h as Aw,hr as b,ir as Zn,jt as Lm,mn as ST,na as qw,oi as hb,p as Al,qr as fm,ua as sa,ut as JH}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{t as W}from"./chunk-CxBE3lzD.js";import{d as te$1}from"./chunk-53wldAuq.js";import{t as c}from"./chunk-D1ovfVna.js";var ee=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var ae=[`icon`];var le=[`content`];var oe=t=>({$implicit:t});function de(t,l){t&1&&fm(0)}function re(t,l){if(t&1&&um(0,`span`,0),t&2){let e=qw(3);hb(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),cm(`pBind`,e.ptm(`icon`))}}function ce(t,l){if(t&1&&Aw(0,re,1,3,`span`,2),t&2){let e=qw(2);xw(e.onIcon()||e.offIcon()?0:-1)}}function ge(t,l){t&1&&fm(0)}function ue(t,l){if(t&1&&nm(0,ge,1,0,`ng-container`,1),t&2){let e=qw(2);cm(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,Rb(2,oe,e.checked))}}function se(t,l){if(t&1&&(Aw(0,ce,1,1)(1,ue,1,4,`ng-container`),Ws(2,`span`,0),wb(3),wl()),t&2){let e=qw();xw(e.iconTemplate()?1:0),MC(2),hb(e.cx(`label`)),cm(`pBind`,e.ptm(`label`)),MC(),Lm(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var be=`
    ${ee}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var pe=t=>typeof t.checked==`function`?t.checked():t.checked;var fe={root:({instance:t})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":pe(t),"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size()===`small`,"p-togglebutton-lg p-inputfield-lg":t.size()===`large`,"p-togglebutton-fluid":t.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var te=(()=>{class t extends Nr{name=`togglebutton`;style=be;classes=fe;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var ne=new b(`TOGGLEBUTTON_INSTANCE`);var me={provide:te$1,useExisting:qi(()=>ie),multi:!0};var ie=(()=>{class t extends c{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),JV()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=zt(`Yes`);offLabel=zt(`No`);onIcon=zt();offIcon=zt();ariaLabel=zt();ariaLabelledBy=zt();styleClass=zt();inputId=zt();tabindex=zt(0,{transform:ST});iconPos=zt(`left`);autofocus=zt(void 0,{transform:CT});size=zt();allowEmpty=zt();fluid=zt(void 0,{transform:CT});onChange=HV();iconTemplate=GV(`icon`,{descendants:!1});contentTemplate=GV(`content`,{descendants:!1});templates=zV(JH);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=g(te);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,o){this.checked=e,o(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(o){return new(o||t)};static ɵcmp=sa({type:t,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(o,n,d){o&1&&Dm(d,n.iconTemplate,ae,4)(d,n.contentTemplate,le,4)(d,n.templates,JH,4),o&2&&Jw(3)},hostVars:11,hostBindings:function(o,n){o&1&&gm(`keydown`,function(m){return n.onKeyDown(m)})(`click`,function(m){return n.toggle(m)}),o&2&&(am(`aria-labelledby`,n.ariaLabelledBy())(`aria-label`,n.ariaLabel())(`aria-pressed`,n.checked?`true`:`false`)(`role`,`button`)(`tabindex`,n.tabindex()!==void 0?n.tabindex():n.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,n.active)(`data-p-disabled`,n.$disabled())(`data-p`,n.dataP),hb(n.cn(n.cx(`root`),n.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[Al([me,te,{provide:ne,useExisting:t},{provide:H_,useExisting:t}]),uw([W,L]),em],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(o,n){o&1&&(Ws(0,`span`,0),nm(1,de,1,0,`ng-container`,1),Aw(2,se,4,5),wl()),o&2&&(hb(n.cx(`content`)),cm(`pBind`,n.ptm(`content`)),am(`data-p`,n.dataP),MC(),cm(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate)(`ngTemplateOutletContext`,Rb(7,oe,n.checked)),MC(),xw(n.contentTemplate()?-1:2))},dependencies:[Gl,GT,XH,F,L],encapsulation:2})}return t})();var $e=(()=>{class t{static ɵfac=function(o){return new(o||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[ie,XH,XH]})}return t})();export{ie as n,$e as t};