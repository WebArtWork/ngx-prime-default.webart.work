import{$a as zt,$i as qi,$r as gm,Ai as mS,At as Lf,Br as em,Da as uw,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,Li as nm,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,U as GT,X as HV,Z as H_,Zt as P,ba as td,dn as Ro,fr as am,ft as JV,gt as Jw,h as Aw,hr as b,ir as Zn,kt as Lb,l as $w,mn as ST,na as qw,nr as Zb,oi as hb,on as Qw,p as Al,qr as fm,ri as hS,tt as Ia,ua as sa,un as Rf,ut as JH,vi as kw}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{d as te,f as un,r as Rt,u as sn}from"./chunk-53wldAuq.js";import{t as c}from"./chunk-D1ovfVna.js";import{n as ie}from"./chunk-DfZU4LD52.js";var fe=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var ve=[`item`];var ye=(i,s)=>({$implicit:i,index:s});function De(i,s){return this.getOptionLabel(s)}function Be(i,s){i&1&&fm(0)}function Ce(i,s){if(i&1&&nm(0,Be,1,0,`ng-container`,3),i&2){let t=qw(2),e=t.$implicit,n=t.$index,l=qw();cm(`ngTemplateOutlet`,l.itemTemplate||l._itemTemplate)(`ngTemplateOutletContext`,Lb(2,ye,e,n))}}function _e(i,s){i&1&&nm(0,Ce,1,5,`ng-template`,null,0,Zb)}function Me(i,s){if(i&1){let t=$w();Ws(0,`p-togglebutton`,2),gm(`onChange`,function(n){let l=Rf(t),o=l.$implicit,r=l.$index;return Lf(qw().onOptionSelect(n,o,r))}),Aw(1,_e,2,0),wl(),hS()}if(i&2){let t=s.$implicit,e=qw();cm(`autofocus`,e.autofocus())(`styleClass`,e.styleClass())(`ngModel`,e.isSelected(t))(`onLabel`,e.getOptionLabel(t))(`offLabel`,e.getOptionLabel(t))(`disabled`,e.$disabled()||e.isOptionDisabled(t))(`allowEmpty`,e.getAllowEmpty())(`size`,e.size())(`fluid`,e.fluid())(`pt`,e.ptm(`pcToggleButton`))(`unstyled`,e.unstyled()),mS(),MC(),xw(e.itemTemplate||e._itemTemplate?1:-1)}}var Ee=`
    ${fe}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var xe={root:({instance:i})=>[`p-selectbutton p-component`,{"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-selectbutton-fluid":i.fluid()}]};var me=(()=>{class i extends Nr{name=`selectbutton`;style=Ee;classes=xe;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(i)))(n||i)}})();static ɵprov=P({token:i,factory:i.ɵfac})}return i})();var ge=new b(`SELECTBUTTON_INSTANCE`);var Ne={provide:te,useExisting:qi(()=>he),multi:!0};var he=(()=>{class i extends c{componentName=`SelectButton`;constructor(){super(),JV()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=zt();optionLabel=zt();optionValue=zt();optionDisabled=zt();unselectable=zt(!1,{transform:CT});tabindex=zt(0,{transform:ST});multiple=zt(void 0,{transform:CT});allowEmpty=zt(!0,{transform:CT});styleClass=zt();ariaLabelledBy=zt();dataKey=zt();autofocus=zt(void 0,{transform:CT});size=zt();fluid=zt(void 0,{transform:CT});onOptionClick=HV();onChange=HV();itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=g(me);$pcSelectButton=g(ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(t){let e=this.optionLabel();return e?Ia(t,e):t.label!=null?t.label:t}getOptionValue(t){let e=this.optionValue();return e?Ia(t,e):this.optionLabel()||t.value===void 0?t:t.value}isOptionDisabled(t){let e=this.optionDisabled();return e?Ia(t,e):t.disabled!==void 0?t.disabled:!1}onOptionSelect(t,e,n){if(this.$disabled()||this.isOptionDisabled(e))return;let l=this.isSelected(e);if(l&&this.unselectable())return;let o=this.getOptionValue(e),r;if(this.multiple())l?r=this.value.filter(g=>!td(g,o,this.equalityKey||void 0)):r=this.value?[...this.value,o]:[o];else{if(l&&!this.allowEmpty())return;r=l?null:o}this.focusedIndex=n,this.value=r,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:e,index:n})}changeTabIndexes(t,e){let n,l;for(let o=0;o<=this.el.nativeElement.children.length-1;o++)this.el.nativeElement.children[o].getAttribute(`tabindex`)===`0`&&(n={elem:this.el.nativeElement.children[o],index:o});e===`prev`?n.index===0?l=this.el.nativeElement.children.length-1:l=n.index-1:n.index===this.el.nativeElement.children.length-1?l=0:l=n.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(t,e){this.focusedIndex=e}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(e=>!td(e,this.getOptionValue(t),this.dataKey()))}isSelected(t){let e=!1,n=this.getOptionValue(t);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if(td(l,n,this.dataKey())){e=!0;break}}}else e=td(this.getOptionValue(t),this.value,this.equalityKey||void 0);return e}templates=zV(JH);onAfterContentInit(){this.templates().forEach(t=>{t.getType()===`item`&&(this._itemTemplate=t.template)})}writeControlValue(t,e){this.value=t,e(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(e){return new(e||i)};static ɵcmp=sa({type:i,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(e,n,l){if(e&1&&(Dm(l,n.templates,JH,4),ym(l,ve,4)),e&2){Jw();let o;Kw(o=Qw())&&(n.itemTemplate=o.first)}},hostVars:5,hostBindings:function(e,n){e&2&&(am(`role`,`group`)(`aria-labelledby`,n.ariaLabelledBy())(`data-p`,n.dataP),hb(n.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[Al([Ne,me,{provide:ge,useExisting:i},{provide:H_,useExisting:i}]),uw([L]),em],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(e,n){e&1&&Lw(0,Me,2,12,`p-togglebutton`,1,De,!0),e&2&&kw(n.options())},dependencies:[ie,un,sn,Rt,Gl,GT,XH,F],encapsulation:2})}return i})();var lt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Ro({type:i});static ɵinj=Zn({imports:[he,XH,XH]})}return i})();export{lt as n,he as t};