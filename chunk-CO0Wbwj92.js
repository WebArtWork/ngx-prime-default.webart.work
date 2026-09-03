import{$a as zt,Br as em,Da as uw,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Ii as ne$1,It as Ml,Jr as g,K as Gl,Kr as fb,La as wb,Li as nm,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,Si as la,Ta as ua,U as GT,W as GV,Z as H_,Zt as P,ba as td,dn as Ro,gt as Jw,h as Aw,hr as b,ir as Zn,lt as J2,na as qw,nn as QH,oi as hb,on as Qw,p as Al,qr as fm,s as $t,ua as sa,ut as JH,yt as KH}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&fm(0)}function se(t,r){if(t&1&&(Ws(0,`div`,1),la(1,1),nm(2,pe,1,0,`ng-container`,2),wl()),t&2){let e=qw();hb(e.cx(`header`)),cm(`pBind`,e.ptm(`header`)),MC(2),cm(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&wb(0),t&2)Ml(` `,qw(2).header(),` `)}function ue(t,r){t&1&&fm(0)}function fe(t,r){if(t&1&&(Ws(0,`div`,1),Aw(1,me,1,1),nm(2,ue,1,0,`ng-container`,2),wl()),t&2){let e=qw();hb(e.cx(`title`)),cm(`pBind`,e.ptm(`title`)),MC(),xw(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&wb(0),t&2)Ml(` `,qw(2).subheader(),` `)}function he(t,r){t&1&&fm(0)}function ye(t,r){if(t&1&&(Ws(0,`div`,1),Aw(1,_e,1,1),nm(2,he,1,0,`ng-container`,2),wl()),t&2){let e=qw();hb(e.cx(`subtitle`)),cm(`pBind`,e.ptm(`subtitle`)),MC(),xw(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),MC(),cm(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&fm(0)}function ge(t,r){t&1&&fm(0)}function be(t,r){if(t&1&&(Ws(0,`div`,1),la(1,2),nm(2,ge,1,0,`ng-container`,2),wl()),t&2){let e=qw();hb(e.cx(`footer`)),cm(`pBind`,e.ptm(`footer`)),MC(2),cm(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Nr{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var ne=new b(`CARD_INSTANCE`);var Me=(()=>{class t extends J2{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=zt();subheader=zt();style=zt();styleClass=zt();headerFacet=GV(KH);footerFacet=GV(QH);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=GV(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ne$1(null);constructor(){super(),$t(()=>{let e=this.style();td(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=zV(JH);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=sa({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(Dm(l,n.headerFacet,KH,5)(l,n.footerFacet,QH,5)(l,n.contentTemplate,ie,4)(l,n.templates,JH,4),ym(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){Jw(4);let d;Kw(d=Qw())&&(n.headerTemplate=d.first),Kw(d=Qw())&&(n.titleTemplate=d.first),Kw(d=Qw())&&(n.subtitleTemplate=d.first),Kw(d=Qw())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(fb(n._style()),hb(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[Al([te,{provide:ne,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(ua(de),Aw(0,se,3,4,`div`,0),Ws(1,`div`,1),Aw(2,fe,3,5,`div`,0),Aw(3,ye,3,5,`div`,0),Ws(4,`div`,1),la(5),nm(6,Te,1,0,`ng-container`,2),wl(),Aw(7,be,3,4,`div`,0),wl()),i&2&&(xw(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),MC(),hb(n.cx(`body`)),cm(`pBind`,n.ptm(`body`)),MC(),xw(n.header()||n.titleTemplate||n._titleTemplate?2:-1),MC(),xw(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),MC(),hb(n.cx(`content`)),cm(`pBind`,n.ptm(`content`)),MC(2),cm(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),MC(),xw(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Gl,GT,XH,F,L],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[Me,XH,F,XH,F]})}return t})();export{Ve as n,Me as t};