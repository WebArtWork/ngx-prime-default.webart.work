import{$a as zt,$r as gm,$t as Ph,At as Lf,Br as em,Da as uw,Ea as um,Et as Kw,Fr as e2,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,Nr as da,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,U as GT,X as HV,Z as H_,Zt as P,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,jt as Lm,l as $w,lt as J2,na as qw,oi as hb,on as Qw,p as Al,r as $T,ua as sa,un as Rf,ut as JH}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";import{t as L$1}from"./chunk-kdszuIhD.js";var re=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var se=[`removeicon`];var de=[`*`];function pe(i,r){if(i&1){let e=$w();Ws(0,`img`,2),gm(`error`,function(n){Rf(e);return Lf(qw().imageError(n))}),wl()}if(i&2){let e=qw();hb(e.cx(`image`)),cm(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),Ph)(`alt`,e.resolvedAlt())}}function me(i,r){if(i&1&&um(0,`span`,4),i&2){let e=qw(2);hb(e.resolvedIcon()),cm(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function _e(i,r){if(i&1&&Aw(0,me,1,4,`span`,3),i&2)xw(qw().resolvedIcon()?0:-1)}function ve(i,r){if(i&1&&(Ws(0,`div`,5),wb(1),wl()),i&2){let e=qw();hb(e.cx(`label`)),cm(`pBind`,e.ptm(`label`)),MC(),Lm(e.resolvedLabel())}}function ue(i,r){if(i&1){let e=$w();Ws(0,`span`,9),gm(`click`,function(n){Rf(e);return Lf(qw(3).close(n))})(`keydown`,function(n){Rf(e);return Lf(qw(3).onKeydown(n))}),wl()}if(i&2){let e=qw(3);hb(e.resolvedRemoveIcon()),cm(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),am(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function he(i,r){if(i&1){let e=$w();qf(),Ws(0,`svg`,10),gm(`click`,function(n){Rf(e);return Lf(qw(3).close(n))})(`keydown`,function(n){Rf(e);return Lf(qw(3).onKeydown(n))}),wl()}if(i&2){let e=qw(3);hb(e.cx(`removeIcon`)),cm(`pBind`,e.ptm(`removeIcon`)),am(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function ge(i,r){if(i&1&&(Aw(0,ue,1,6,`span`,7),Aw(1,he,1,5,`:svg:svg`,8)),i&2){let e=qw(2);xw(e.resolvedRemoveIcon()?0:-1),MC(),xw(e.resolvedRemoveIcon()?-1:1)}}function Ce(i,r){}function fe(i,r){i&1&&nm(0,Ce,0,0,`ng-template`)}function be(i,r){if(i&1){let e=$w();Ws(0,`span`,11),gm(`click`,function(n){Rf(e);return Lf(qw(2).close(n))})(`keydown`,function(n){Rf(e);return Lf(qw(2).onKeydown(n))}),nm(1,fe,1,0,null,12),wl()}if(i&2){let e=qw(2);hb(e.cx(`removeIcon`)),cm(`pBind`,e.ptm(`removeIcon`)),am(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),MC(),cm(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function xe(i,r){if(i&1&&(Aw(0,ge,2,2),Aw(1,be,2,6,`span`,6)),i&2){let e=qw();xw(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),MC(),xw(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var ye={root:({instance:i})=>({display:!i.visible&&`none`})};var Ie={root:({instance:i})=>[`p-chip p-component`,{"p-disabled":i.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var ce=(()=>{class i extends Nr{name=`chip`;style=re;classes=Ie;inlineStyles=ye;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(i)))(n||i)}})();static ɵprov=P({token:i,factory:i.ɵfac})}return i})();var le=new b(`CHIP_INSTANCE`);var we=(()=>{class i extends J2{componentName=`Chip`;$pcChip=g(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=zt();icon=zt();image=zt();alt=zt();styleClass=zt();disabled=zt(!1,{transform:CT});removable=zt(!1,{transform:CT});removeIcon=zt();onRemove=HV();onImageError=HV();visible=!0;get removeAriaLabel(){return this.config.getTranslation(e2.ARIA).removeLabel}chipProps=zt();resolvedLabel=da(()=>this.chipProps()?.label??this.label());resolvedIcon=da(()=>this.chipProps()?.icon??this.icon());resolvedImage=da(()=>this.chipProps()?.image??this.image());resolvedAlt=da(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=da(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=da(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=da(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=g(ce);removeIconTemplate;templates=zV(JH);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(i)))(n||i)}})();static ɵcmp=sa({type:i,selectors:[[`p-chip`]],contentQueries:function(t,n,a){if(t&1&&(Dm(a,n.templates,JH,4),ym(a,se,4)),t&2){Jw();let N;Kw(N=Qw())&&(n.removeIconTemplate=N.first)}},hostVars:6,hostBindings:function(t,n){t&2&&(am(`aria-label`,n.resolvedLabel())(`data-p`,n.dataP),fb(n.sx(`root`)),hb(n.cn(n.cx(`root`),n.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[Al([ce,{provide:le,useExisting:i},{provide:H_,useExisting:i}]),uw([L]),em],ngContentSelectors:de,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(t,n){t&1&&(ua(),la(0),Aw(1,pe,1,5,`img`,0)(2,_e,1,1),Aw(3,ve,2,4,`div`,1),Aw(4,xe,2,2)),t&2&&(MC(),xw(n.resolvedImage()?1:2),MC(2),xw(n.resolvedLabel()?3:-1),MC(),xw(n.resolvedRemovable()?4:-1))},dependencies:[Gl,$T,GT,L$1,XH,L],encapsulation:2})}return i})();var He=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ro({type:i});static ɵinj=Zn({imports:[we,XH,XH]})}return i})();export{we as n,He as t};