import{$a as zt,$r as gm,$t as Ph,Br as em,Da as uw,Dt as L$,Ea as um,Et as Kw,Ga as ym,Hn as XH,Ht as Nr,Jr as g,K as Gl,La as wb,Li as nm,O as Dm,Or as cm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,U as GT,W as GV,Z as H_,Zt as P,dn as Ro,fr as am,gt as Jw,hr as b,ir as Zn,lt as J2,na as qw,nr as Zb,oi as hb,on as Qw,p as Al,ua as sa,ut as JH}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";var J=`
    .p-imagecompare {
        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    .p-imagecompare img {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .p-imagecompare img + img {
        clip-path: polygon(0 0, dt('imagecompare.scope.x', '50%') 0, dt('imagecompare.scope.x', '50%') 100%, 0 100%);
    }

    .p-imagecompare:dir(rtl) img + img {
        clip-path: polygon(calc(100% - dt('imagecompare.scope.x', '50%')) 0, 100% 0, 100% 100%, calc(100% - dt('imagecompare.scope.x', '50%')) 100%);
    }

    .p-imagecompare-slider {
        position: relative;
        -webkit-appearance: none;
        width: calc(100% + dt('imagecompare.handle.size'));
        height: 100%;
        margin-inline-start: calc(-1 * calc(dt('imagecompare.handle.size') / 2));
        background-color: transparent;
        outline: none;
        transition: all dt('imagecompare.handle.transition.duration');
    }

    .p-imagecompare-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: dt('imagecompare.handle.size');
        width: dt('imagecompare.handle.size');
        background: dt('imagecompare.handle.background');
        border: dt('imagecompare.handle.border.width') solid dt('imagecompare.handle.border.color');
        border-radius: dt('imagecompare.handle.border.radius');
        background-size: contain;
        cursor: ew-resize;
        transition: all dt('imagecompare.handle.transition.duration');
    }

    .p-imagecompare-slider::-moz-range-thumb {
        height: dt('imagecompare.handle.size');
        width: dt('imagecompare.handle.size');
        background: dt('imagecompare.handle.background');
        border: dt('imagecompare.handle.border.width') dt('imagecompare.handle.border.style') dt('imagecompare.handle.border.color');
        border-radius: dt('imagecompare.handle.border.radius');
        background-size: contain;
        cursor: ew-resize;
    }

    .p-imagecompare-slider:focus-visible::-webkit-slider-thumb {
        box-shadow: dt('imagecompare.handle.focus.ring.shadow');
        outline: dt('imagecompare.handle.focus.ring.width') dt('imagecompare.handle.focus.ring.style') dt('imagecompare.handle.focus.ring.color');
        outline-offset: dt('imagecompare.handle.focus.ring.offset');
    }

    .p-imagecompare-slider:focus-visible::-moz-range-thumb {
        box-shadow: dt('imagecompare.handle.focus.ring.shadow');
        outline: dt('imagecompare.handle.focus.ring.width') dt('imagecompare.handle.focus.ring.style') dt('imagecompare.handle.focus.ring.color');
        outline-offset: dt('imagecompare.handle.focus.ring.offset');
    }

    .p-imagecompare-slider:hover {
        width: calc(100% + dt('imagecompare.handle.hover.size'));
        margin-inline-start: calc(-1 * calc(dt('imagecompare.handle.hover.size') / 2));
    }

    .p-imagecompare-slider:hover::-webkit-slider-thumb {
        background: dt('imagecompare.handle.hover.background');
        border-color: dt('imagecompare.handle.hover.border.color');
        height: dt('imagecompare.handle.hover.size');
        width: dt('imagecompare.handle.hover.size');
    }

    .p-imagecompare-slider:hover::-moz-range-thumb {
        background: dt('imagecompare.handle.hover.background');
        border-color: dt('imagecompare.handle.hover.border.color');
        height: dt('imagecompare.handle.hover.size');
        width: dt('imagecompare.handle.hover.size');
    }
`;var ee=[`left`];var te=[`right`];function ae(e,l){}function ie(e,l){e&1&&nm(0,ae,0,0,`ng-template`)}function ne(e,l){}function oe(e,l){e&1&&nm(0,ne,0,0,`ng-template`)}var re={root:`p-imagecompare`,slider:`p-imagecompare-slider`};var K=(()=>{class e extends Nr{name=`imagecompare`;style=J;classes=re;static ɵfac=(()=>{let t;return function(a){return(t||(t=dh(e)))(a||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var W=new b(`IMAGECOMPARE_INSTANCE`);var x=(()=>{class e extends J2{componentName=`ImageCompare`;$pcImageCompare=g(W,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});tabindex=zt();ariaLabelledby=zt();ariaLabel=zt();leftTemplate=GV(`left`,{descendants:!1});rightTemplate=GV(`right`,{descendants:!1});_leftTemplate;_rightTemplate;templates;_componentStyle=g(K);mutationObserver;isRTL=!1;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onInit(){this.updateDirection(),this.observeDirectionChanges()}onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case`left`:this._leftTemplate=t.template;break;case`right`:this._rightTemplate=t.template;break}})}onSlide(t){let i=t.target.value,a=t.target.previousElementSibling;this.isRTL?a.style.clipPath=`polygon(${100-i}% 0, 100% 0, 100% 100%, ${100-i}% 100%)`:a.style.clipPath=`polygon(0 0, ${i}% 0, ${i}% 100%, 0 100%)`}updateDirection(){this.isRTL=!!this.el.nativeElement.closest(`[dir="rtl"]`)}observeDirectionChanges(){if(L$(this.platformId)){let t=document?.documentElement,i={attributes:!0,attributeFilter:[`dir`]};this.mutationObserver=new MutationObserver(()=>{this.updateDirection()}),this.mutationObserver.observe(t,i)}}onDestroy(){this.mutationObserver&&this.mutationObserver.disconnect()}static ɵfac=(()=>{let t;return function(a){return(t||(t=dh(e)))(a||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-imageCompare`],[`p-imagecompare`],[`p-image-compare`]],contentQueries:function(i,a,c){if(i&1&&(Dm(c,a.leftTemplate,ee,4)(c,a.rightTemplate,te,4),ym(c,JH,4)),i&2){Jw(2);let s;Kw(s=Qw())&&(a.templates=s)}},hostVars:5,hostBindings:function(i,a){i&2&&(am(`tabindex`,a.tabindex())(`aria-labelledby`,a.ariaLabelledby())(`aria-label`,a.ariaLabel()),hb(a.cx(`root`)))},inputs:{tabindex:[1,`tabindex`],ariaLabelledby:[1,`ariaLabelledby`],ariaLabel:[1,`ariaLabel`]},features:[Al([K,{provide:W,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:3,vars:5,consts:[[4,`ngTemplateOutlet`],[`type`,`range`,`min`,`0`,`max`,`100`,`value`,`50`,3,`input`,`pBind`]],template:function(i,a){i&1&&(nm(0,ie,1,0,null,0)(1,oe,1,0,null,0),Ws(2,`input`,1),gm(`input`,function(s){return a.onSlide(s)}),wl()),i&2&&(cm(`ngTemplateOutlet`,a.leftTemplate()||a._leftTemplate),MC(),cm(`ngTemplateOutlet`,a.rightTemplate()||a._rightTemplate),MC(),hb(a.cx(`slider`)),cm(`pBind`,a.ptm(`slider`)))},dependencies:[Gl,GT,XH,F,L],encapsulation:2})}return e})();var X=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[x,XH,XH]})}return e})();function le(e,l){if(e&1&&um(0,`img`,6),e&2)cm(`src`,qw().before,Ph)}function de(e,l){if(e&1&&um(0,`img`,7),e&2)cm(`src`,qw().after,Ph)}function Y(e){return`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250"><rect width="100%" height="100%" fill="${e}"/></svg>`)}var Me=(()=>{class e{constructor(){this.before=Y(`#94a3b8`),this.after=Y(`#4ade80`)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-imagecompare-demo`]],decls:10,vars:0,consts:[[`left`,``],[`right`,``],[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[2,`max-width`,`25rem`,`display`,`block`],[`alt`,`Before`,2,`width`,`100%`,3,`src`],[`alt`,`After`,2,`width`,`100%`,3,`src`]],template:function(i,a){i&1&&(Ws(0,`h1`,2),wb(1,`ImageCompare`),wl(),Ws(2,`section`,3)(3,`h2`,4),wb(4,`Basic`),wl(),Ws(5,`p-imageCompare`,5),nm(6,le,1,1,`ng-template`,null,0,Zb)(8,de,1,1,`ng-template`,null,1,Zb),wl()())},dependencies:[X,x],encapsulation:2})}}return e})();export{Me as ImageCompareDemo};