import{$a as zt,$r as gm,At as Lf,Br as em,Da as uw,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,In as WT,Jr as g,K as Gl,La as wb,Li as nm,Ln as WV,Nn as Vy,Nr as da,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,Tn as UV,U as GT,W as GV,Wn as Xw,X as HV,Z as H_,Zt as P,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,jt as Lm,ka as v,l as $w,lt as J2,na as qw,nr as Zb,oi as hb,on as Qw,p as Al,qr as fm,ua as sa,un as Rf,ut as JH}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{n as nt,r as tt}from"./chunk-Cw3svWHP.js";import{b as u}from"./main-4W6E6VEG.js";import{t as y}from"./chunk-cS6kn1qh2.js";var be=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        color: dt('fieldset.legend.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`;var ye=[`header`];var xe=[`content`];var Me=[`expandicon`];var Ie=[`collapseicon`];var we=[`contentWrapper`];var Be=[`*`,[[`p-header`]],[[`p-header`]]];var De=[`*`,`p-header`,`p-header`];function Ee(t,r){if(t&1&&(qf(),um(0,`svg`,10)),t&2){let e=qw(3);hb(e.cx(`toggleIcon`)),cm(`pBind`,e.ptm(`toggleIcon`))}}function Fe(t,r){t&1&&fm(0)}function Se(t,r){if(t&1&&(Ws(0,`span`,3),nm(1,Fe,1,0,`ng-container`,6),wl()),t&2){let e=qw(3);hb(e.cx(`toggleIcon`)),cm(`pBind`,e.ptm(`toggleIcon`)),MC(),cm(`ngTemplateOutlet`,e.expandIconTemplate||e._expandIconTemplate)}}function Oe(t,r){if(t&1&&(Aw(0,Ee,1,3,`:svg:svg`,8),Aw(1,Se,2,4,`span`,9)),t&2){let e=qw(2);xw(!e.expandIconTemplate&&!e._expandIconTemplate?0:-1),MC(),xw(e.expandIconTemplate||e._expandIconTemplate?1:-1)}}function ke(t,r){if(t&1&&(qf(),um(0,`svg`,12)),t&2){let e=qw(3);hb(e.cx(`toggleIcon`)),cm(`pBind`,e.ptm(`toggleIcon`)),am(`aria-hidden`,!0)}}function Ae(t,r){t&1&&fm(0)}function Ne(t,r){if(t&1&&(Ws(0,`span`,3),nm(1,Ae,1,0,`ng-container`,6),wl()),t&2){let e=qw(3);hb(e.cx(`toggleIcon`)),cm(`pBind`,e.ptm(`toggleIcon`)),MC(),cm(`ngTemplateOutlet`,e.collapseIconTemplate||e._collapseIconTemplate)}}function Ve(t,r){if(t&1&&(Aw(0,ke,1,4,`:svg:svg`,11),Aw(1,Ne,2,4,`span`,9)),t&2){let e=qw(2);xw(!e.collapseIconTemplate&&!e._collapseIconTemplate?0:-1),MC(),xw(e.collapseIconTemplate||e._collapseIconTemplate?1:-1)}}function Le(t,r){t&1&&fm(0)}function We(t,r){if(t&1){let e=$w();Ws(0,`button`,7),gm(`click`,function(n){Rf(e);return Lf(qw().toggle(n))})(`keydown`,function(n){Rf(e);return Lf(qw().onKeyDown(n))}),Aw(1,Oe,2,2),Aw(2,Ve,2,2),nm(3,Le,1,0,`ng-container`,6),wl()}if(t&2){let e=qw(),i=Xw(5);hb(e.cx(`toggleButton`)),cm(`pBind`,e.ptm(`toggleButton`)),am(`id`,e.id+`_header`)(`aria-controls`,e.id+`_content`)(`aria-expanded`,!e.collapsed())(`aria-label`,e.buttonAriaLabel),MC(),xw(e.collapsed()?1:-1),MC(),xw(e.collapsed()?-1:2),MC(),cm(`ngTemplateOutlet`,i)}}function je(t,r){t&1&&fm(0)}function Qe(t,r){if(t&1&&(Ws(0,`span`,3),wb(1),wl(),la(2,1),nm(3,je,1,0,`ng-container`,6)),t&2){let e=qw();hb(e.cx(`legendLabel`)),cm(`pBind`,e.ptm(`legendLabel`)),MC(),Lm(e.legend()),MC(2),cm(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate)}}function Pe(t,r){t&1&&fm(0)}function qe(t,r){if(t&1&&(Ws(0,`span`,3),wb(1),wl(),la(2,2),nm(3,Pe,1,0,`ng-container`,6)),t&2){let e=qw();hb(e.cx(`legendLabel`)),cm(`pBind`,e.ptm(`legendLabel`)),MC(),Lm(e.legend()),MC(2),cm(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate)}}function Re(t,r){t&1&&fm(0)}var He={root:({instance:t})=>[`p-fieldset p-component`,{"p-fieldset-toggleable":t.toggleable(),"p-fieldset-collapsed":t.collapsed()&&t.toggleable()}],legend:`p-fieldset-legend`,legendLabel:`p-fieldset-legend-label`,toggleButton:`p-fieldset-toggle-button`,toggleIcon:`p-fieldset-toggle-icon`,contentContainer:`p-fieldset-content-container`,contentWrapper:`p-fieldset-content-wrapper`,content:`p-fieldset-content`};var he=(()=>{class t extends Nr{name=`fieldset`;style=be;classes=He;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var Te=new b(`FIELDSET_INSTANCE`);var Q=(()=>{class t extends J2{componentName=`Fieldset`;$pcFieldset=g(Te,{optional:!0,skipSelf:!0})??void 0;_componentStyle=g(he);bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}get dataP(){return this.cn({toggleable:this.toggleable()})}legend=zt();toggleable=zt(!1,{transform:CT});style=zt();styleClass=zt();transitionOptions=zt(`400ms cubic-bezier(0.86, 0, 0.07, 1)`);motionOptions=zt(void 0);computedMotionOptions=da(()=>v(v({},this.ptm(`motion`)),this.motionOptions()));onBeforeToggle=HV();onAfterToggle=HV();contentWrapperViewChild=WV.required(`contentWrapper`);_id=Vy(`pn_id_`);get id(){return this._id}get buttonAriaLabel(){return this.legend()}collapsed=UV(void 0);headerTemplate=GV(`header`,{descendants:!1});expandIconTemplate;collapseIconTemplate;contentTemplate=GV(`content`,{descendants:!1});toggle(e){this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed()}),this.collapsed()?this.expand():this.collapse(),e.preventDefault()}onKeyDown(e){(e.code===`Enter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}expand(){this.collapsed.set(!1),this.updateTabIndex()}collapse(){this.collapsed.set(!0),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement.children[0]}updateTabIndex(){let e=this.contentWrapperViewChild();e&&e.nativeElement.querySelectorAll(`input, button, select, a, textarea, [tabindex]`).forEach(n=>{this.collapsed()?n.setAttribute(`tabindex`,`-1`):n.removeAttribute(`tabindex`)})}onToggleDone(e){this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed()})}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates=zV(JH);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`expandicon`:this._expandIconTemplate=e.template;break;case`collapseicon`:this._collapseIconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break}})}static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵcmp=sa({type:t,selectors:[[`p-fieldset`]],contentQueries:function(i,n,c){if(i&1&&(Dm(c,n.headerTemplate,ye,4)(c,n.contentTemplate,xe,4)(c,n.templates,JH,4),ym(c,Me,4)(c,Ie,4)),i&2){Jw(3);let m;Kw(m=Qw())&&(n.expandIconTemplate=m.first),Kw(m=Qw())&&(n.collapseIconTemplate=m.first)}},viewQuery:function(i,n){i&1&&Em(n.contentWrapperViewChild,we,5),i&2&&Jw()},inputs:{legend:[1,`legend`],toggleable:[1,`toggleable`],style:[1,`style`],styleClass:[1,`styleClass`],transitionOptions:[1,`transitionOptions`],motionOptions:[1,`motionOptions`],collapsed:[1,`collapsed`]},outputs:{onBeforeToggle:`onBeforeToggle`,onAfterToggle:`onAfterToggle`,collapsed:`collapsedChange`},features:[Al([he,{provide:Te,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],ngContentSelectors:De,decls:12,vars:27,consts:[[`legendContent`,``],[`contentWrapper`,``],[3,`ngStyle`,`pBind`],[3,`pBind`],[`tabindex`,`0`,`role`,`button`,3,`class`,`pBind`],[`pMotionName`,`p-collapsible`,`role`,`region`,3,`pMotionOnAfterEnter`,`pMotionOnAfterLeave`,`pBind`,`pMotion`,`pMotionOptions`,`id`],[4,`ngTemplateOutlet`],[`tabindex`,`0`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`data-p-icon`,`plus`,3,`class`,`pBind`],[3,`class`,`pBind`],[`data-p-icon`,`plus`,3,`pBind`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(i,n){i&1&&(ua(Be),Ws(0,`fieldset`,2)(1,`legend`,3),Aw(2,We,4,10,`button`,4)(3,Qe,4,5),nm(4,qe,4,5,`ng-template`,null,0,Zb),wl(),Ws(6,`div`,5),gm(`pMotionOnAfterEnter`,function(m){return n.onToggleDone(m)})(`pMotionOnAfterLeave`,function(m){return n.onToggleDone(m)}),Ws(7,`div`,3)(8,`div`,3,1),la(10),nm(11,Re,1,0,`ng-container`,6),wl()()()()),i&2&&(hb(n.cn(n.cx(`root`),n.styleClass())),cm(`ngStyle`,n.style())(`pBind`,n.ptm(`root`)),am(`id`,n.id)(`data-p`,n.dataP),MC(),hb(n.cx(`legend`)),cm(`pBind`,n.ptm(`legend`)),am(`data-p`,n.dataP),MC(),xw(n.toggleable()?2:3),MC(4),hb(n.cx(`contentContainer`)),cm(`pBind`,n.ptm(`contentContainer`))(`pMotion`,!n.toggleable()||n.toggleable()&&!n.collapsed())(`pMotionOptions`,n.computedMotionOptions())(`id`,n.id+`_content`),am(`aria-labelledby`,n.id+`_header`)(`aria-hidden`,n.collapsed())(`tabindex`,n.collapsed()?`-1`:void 0),MC(),hb(n.cx(`contentWrapper`)),cm(`pBind`,n.ptm(`contentWrapper`)),MC(),hb(n.cx(`content`)),cm(`pBind`,n.ptm(`content`)),MC(3),cm(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate))},dependencies:[Gl,GT,WT,u,y,XH,F,L,nt,tt],encapsulation:2})}return t})();var Ce=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[Q,XH,F,XH,F]})}return t})();var ut=(()=>{class t{static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=sa({type:t,selectors:[[`uk-fieldset-demo`]],decls:20,vars:3,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`legend`,`Header`],[2,`margin`,`0`],[`legend`,`Toggleable`,3,`toggleable`],[`legend`,`Collapsed`,3,`toggleable`,`collapsed`]],template:function(i,n){i&1&&(Ws(0,`h1`,0),wb(1,`Fieldset`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),Ws(5,`p-fieldset`,3)(6,`p`,4),wb(7,` Content of the fieldset, can be any content such as text or other components. `),wl()()(),Ws(8,`section`,1)(9,`h2`,2),wb(10,`Toggleable`),wl(),Ws(11,`p-fieldset`,5)(12,`p`,4),wb(13,`Click the legend to collapse and expand the content.`),wl()()(),Ws(14,`section`,1)(15,`h2`,2),wb(16,`Collapsed by default`),wl(),Ws(17,`p-fieldset`,6)(18,`p`,4),wb(19,`Hidden content shown once expanded.`),wl()()()),i&2&&(MC(11),cm(`toggleable`,!0),MC(6),cm(`toggleable`,!0)(`collapsed`,!0))},dependencies:[Ce,Q],encapsulation:2})}}return t})();export{ut as FieldsetDemo};