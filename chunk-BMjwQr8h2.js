import{$a as zt,Br as em,Da as uw,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,La as wb,Li as nm,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,Si as la,Ta as ua,U as GT,Z as H_,Zt as P,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,jt as Lm,lt as J2,na as qw,oi as hb,on as Qw,p as Al,r as $T,ua as sa,ut as JH}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";var U=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&um(0,`span`,3),e&2){let t=qw(2);hb(t.cx(`icon`)),cm(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&Aw(0,ee,1,4,`span`,2),e&2)xw(qw().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&nm(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(Ws(0,`span`,1),nm(1,oe,1,0,null,4),wl()),e&2){let t=qw();hb(t.cx(`icon`)),cm(`pBind`,t.ptm(`icon`)),MC(),cm(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends Nr{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var X=new b(`TAG_INSTANCE`);var re=(()=>{class e extends J2{componentName=`Tag`;$pcTag=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zt();severity=zt();value=zt();icon=zt();rounded=zt(!1,{transform:CT});iconTemplate;templates=zV(JH);_iconTemplate;_componentStyle=g(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(Dm(C,n.templates,JH,4),ym(C,Y,4)),o&2){Jw();let _;Kw(_=Qw())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(am(`data-p`,n.dataP),hb(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[Al([W,{provide:X,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],ngContentSelectors:Z,decls:5,vars:6,consts:[[3,`class`,`pBind`],[3,`pBind`],[3,`class`,`ngClass`,`pBind`],[3,`ngClass`,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(ua(),la(0),Aw(1,te,1,1),Aw(2,ie,2,4,`span`,0),Ws(3,`span`,1),wb(4),wl()),o&2&&(MC(),xw(!n.iconTemplate&&!n._iconTemplate?1:-1),MC(),xw(n.iconTemplate||n._iconTemplate?2:-1),MC(),hb(n.cx(`label`)),cm(`pBind`,n.ptm(`label`)),MC(),Lm(n.value()))},dependencies:[Gl,$T,GT,XH,L],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[re,XH,XH]})}return e})();export{re as n,ke as t};