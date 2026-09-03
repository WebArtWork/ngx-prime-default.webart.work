import{$a as zt,$i as qi,An as Vb,Br as em,Da as uw,Ea as um,Ha as xw,Hn as XH,Ht as Nr,In as WT,Jr as g,K as Gl,La as wb,Li as nm,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,U as GT,W as GV,Wt as Ny,Z as H_,Zt as P,_i as km,cn as Rb,dn as Ro,fr as am,gt as Jw,h as Aw,hi as kb,hr as b,ir as Zn,kt as Lb,lt as J2,na as qw,oi as hb,p as Al,qr as fm,r as $T,ua as sa,ut as JH,vi as kw}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";var te=`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`;var re=(t,a)=>({$implicit:t,icon:a});var oe=t=>({color:t});var le=t=>({backgroundColor:t});function pe(t,a){return this.parentInstance.trackByFn(t)}function me(t,a){if(t&1&&um(0,`i`,5),t&2){let e=qw(2).$implicit,i=qw();hb(e.icon),cm(`ngClass`,i.cx(`labelIcon`))(`pBind`,i.ptm(`labelIcon`))(`ngStyle`,Rb(5,oe,e.color))}}function se(t,a){if(t&1&&um(0,`span`,6),t&2){let e=qw(2).$implicit,i=qw();hb(i.cx(`labelMarker`)),cm(`pBind`,i.ptm(`labelMarker`))(`ngStyle`,Rb(4,le,e.color))}}function ce(t,a){if(t&1&&(Aw(0,me,1,7,`i`,3),Aw(1,se,1,6,`span`,4)),t&2){let e=qw().$implicit;xw(e.icon?0:-1),MC(),xw(e.icon?-1:1)}}function ue(t,a){t&1&&fm(0)}function de(t,a){if(t&1&&(Ws(0,`li`,0),Aw(1,ce,2,2),nm(2,ue,1,0,`ng-container`,2),Ws(3,`span`,0),wb(4),wl()()),t&2){let e=a.$implicit,i=qw();hb(i.cx(`label`)),cm(`pBind`,i.ptm(`label`)),MC(),xw(i.iconTemplate()?-1:1),MC(),cm(`ngTemplateOutlet`,i.iconTemplate())(`ngTemplateOutletContext`,Lb(11,re,e,e.icon)),MC(),hb(i.cx(`labelText`)),cm(`pBind`,i.ptm(`labelText`)),MC(),km(``,e.label,` (`,i.parentInstance.percentValue(e.value),`)`)}}var ge=[`label`];var be=[`meter`];var _e=[`end`];var fe=[`start`];var ve=[`icon`];var M=(t,a,e)=>({$implicit:t,totalPercent:a,percentages:e});var Te=(t,a,e,i,n,m,ae)=>({$implicit:t,index:a,orientation:e,class:i,size:n,totalPercent:m,dataP:ae});function he(t,a){if(t&1&&um(0,`p-meterGroupLabel`,2),t&2){let e=qw(2);cm(`value`,e.value())(`labelPosition`,e.labelPosition())(`labelOrientation`,e.labelOrientation())(`min`,e.min())(`max`,e.max())(`iconTemplate`,e.iconTemplate()||e._iconTemplate)(`pt`,e.pt)(`unstyled`,e.unstyled())}}function ye(t,a){t&1&&fm(0)}function xe(t,a){if(t&1&&(Aw(0,he,1,8,`p-meterGroupLabel`,2),nm(1,ye,1,0,`ng-container`,0)),t&2){let e=qw();xw(!e.labelTemplate()&&!e._labelTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.labelTemplate()||e.labelTemplate())(`ngTemplateOutletContext`,kb(3,M,e.value(),e.totalPercent(),e.percentages()))}}function Ce(t,a){t&1&&fm(0)}function Me(t,a){t&1&&fm(0)}function Oe(t,a){if(t&1&&um(0,`span`,4),t&2){let e=qw().$implicit,i=qw();hb(i.cx(`meter`)),cm(`pBind`,i.ptm(`meter`))(`ngStyle`,i.meterStyle(e)),am(`data-p`,i.dataP)}}function Pe(t,a){if(t&1&&(nm(0,Me,1,0,`ng-container`,0),Aw(1,Oe,1,5,`span`,3)),t&2){let e=a.$implicit,i=a.$index,n=qw();cm(`ngTemplateOutlet`,n.meterTemplate()||n._meterTemplate)(`ngTemplateOutletContext`,Vb(3,Te,e,i,n.orientation(),n.cx(`meter`),n.percentValue(e.value),n.totalPercent(),n.dataP)),MC(),xw(!n.meterTemplate()&&!n._meterTemplate&&e.value>0?1:-1)}}function Ne(t,a){t&1&&fm(0)}function De(t,a){if(t&1&&um(0,`p-meterGroupLabel`,2),t&2){let e=qw(2);cm(`value`,e.value())(`labelPosition`,e.labelPosition())(`labelOrientation`,e.labelOrientation())(`min`,e.min())(`max`,e.max())(`iconTemplate`,e.iconTemplate()||e._iconTemplate)(`pt`,e.pt)(`unstyled`,e.unstyled())}}function Fe(t,a){t&1&&fm(0)}function Be(t,a){if(t&1&&(Aw(0,De,1,8,`p-meterGroupLabel`,2),nm(1,Fe,1,0,`ng-container`,0)),t&2){let e=qw();xw(!e.labelTemplate()&&!e._labelTemplate?0:-1),MC(),cm(`ngTemplateOutlet`,e.labelTemplate()||e._labelTemplate)(`ngTemplateOutletContext`,kb(3,M,e.value(),e.totalPercent(),e.percentages()))}}var Se={root:({instance:t})=>[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation()===`horizontal`,"p-metergroup-vertical":t.orientation()===`vertical`}],meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:({instance:t})=>[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation()===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation()===`horizontal`}],label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`};var E=(()=>{class t extends Nr{name=`metergroup`;style=te;classes=Se;static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵprov=P({token:t,factory:t.ɵfac})}return t})();var ne=new b(`METERGROUP_INSTANCE`);var ke=(()=>{class t extends J2{value=zt([]);labelPosition=zt(`end`);labelOrientation=zt(`horizontal`);min=zt();max=zt();iconTemplate=zt();parentInstance=g(qi(()=>ie));_componentStyle=g(E);get dataP(){return this.cn({[this.labelOrientation()]:this.labelOrientation()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=dh(t)))(n||t)}})();static ɵcmp=sa({type:t,selectors:[[`p-meterGroupLabel`],[`p-metergrouplabel`]],inputs:{value:[1,`value`],labelPosition:[1,`labelPosition`],labelOrientation:[1,`labelOrientation`],min:[1,`min`],max:[1,`max`],iconTemplate:[1,`iconTemplate`]},features:[em],decls:3,vars:4,consts:[[3,`pBind`],[3,`class`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`ngClass`,`pBind`,`ngStyle`],[3,`class`,`pBind`,`ngStyle`],[3,`ngClass`,`pBind`,`ngStyle`],[3,`pBind`,`ngStyle`]],template:function(i,n){i&1&&(Ws(0,`ol`,0),Lw(1,de,5,14,`li`,1,pe,!0),wl()),i&2&&(hb(n.cx(`labelList`)),cm(`pBind`,n.ptm(`labelList`)),am(`data-p`,n.dataP),MC(),kw(n.value()))},dependencies:[Gl,$T,GT,WT,XH,L],encapsulation:2})}return t})();var ie=(()=>{class t extends J2{componentName=`MeterGroup`;$pcMeterGroup=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});value=zt();min=zt(0);max=zt(100);orientation=zt(`horizontal`);labelPosition=zt(`end`);labelOrientation=zt(`horizontal`);styleClass=zt();get vertical(){return this.orientation()===`vertical`}labelTemplate=GV(`label`,{descendants:!1});meterTemplate=GV(`meter`,{descendants:!1});endTemplate=GV(`end`,{descendants:!1});startTemplate=GV(`start`,{descendants:!1});iconTemplate=GV(`icon`,{descendants:!1});templates=zV(JH);_labelTemplate;_meterTemplate;_endTemplate;_startTemplate;_iconTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=g(E);constructor(){super()}onAfterViewInit(){let e=this.el.nativeElement,i=Ny(e);this.vertical&&(e.style.height=i+`px`)}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`label`:this._labelTemplate=e.template;break;case`meter`:this._meterTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`start`:this._startTemplate=e.template;break;case`end`:this._endTemplate=e.template;break}})}percent(e=0){if(this.max()===this.min())return 100;let i=(e-this.min())/(this.max()-this.min())*100;return Math.round(Math.max(0,Math.min(100,i)))}percentValue(e){return this.percent(e)+`%`}meterStyle(e){return{backgroundColor:e.color,width:this.orientation()===`horizontal`&&this.percentValue(e.value||0),height:this.orientation()===`vertical`&&this.percentValue(e.value||0)}}totalPercent(){let e=this.value();return e?this.percent(e.reduce((i,n)=>i+(n.value||0),0)):0}percentages(){let e=this.value();if(!e)return[];let i=0,n=[];return e.forEach(m=>{i+=m.value||0,n.push(i)}),n}trackByFn(e){return e}get dataP(){return this.cn({[this.orientation()]:this.orientation()})}static ɵfac=function(i){return new(i||t)};static ɵcmp=sa({type:t,selectors:[[`p-meterGroup`],[`p-metergroup`],[`p-meter-group`]],contentQueries:function(i,n,m){i&1&&Dm(m,n.labelTemplate,ge,4)(m,n.meterTemplate,be,4)(m,n.endTemplate,_e,4)(m,n.startTemplate,fe,4)(m,n.iconTemplate,ve,4)(m,n.templates,JH,4),i&2&&Jw(6)},hostVars:7,hostBindings:function(i,n){i&2&&(am(`aria-valuemin`,n.min())(`role`,`meter`)(`aria-valuemax`,n.max())(`aria-valuenow`,n.totalPercent())(`data-p`,n.dataP),hb(n.cn(n.cx(`root`),n.styleClass())))},inputs:{value:[1,`value`],min:[1,`min`],max:[1,`max`],orientation:[1,`orientation`],labelPosition:[1,`labelPosition`],labelOrientation:[1,`labelOrientation`],styleClass:[1,`styleClass`]},features:[Al([E,{provide:ne,useExisting:t},{provide:H_,useExisting:t}]),uw([L]),em],decls:7,vars:18,consts:[[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`],[3,`value`,`labelPosition`,`labelOrientation`,`min`,`max`,`iconTemplate`,`pt`,`unstyled`],[3,`class`,`pBind`,`ngStyle`],[3,`pBind`,`ngStyle`]],template:function(i,n){i&1&&(Aw(0,xe,2,7),nm(1,Ce,1,0,`ng-container`,0),Ws(2,`div`,1),Lw(3,Pe,2,11,null,null,n.trackByFn,!0),wl(),nm(5,Ne,1,0,`ng-container`,0),Aw(6,Be,2,7)),i&2&&(xw(n.labelPosition()===`start`?0:-1),MC(),cm(`ngTemplateOutlet`,n.startTemplate()||n._startTemplate)(`ngTemplateOutletContext`,kb(10,M,n.value(),n.totalPercent(),n.percentages())),MC(),hb(n.cx(`meters`)),cm(`pBind`,n.ptm(`meters`)),am(`data-p`,n.dataP),MC(),kw(n.value()),MC(2),cm(`ngTemplateOutlet`,n.endTemplate()||n._endTemplate)(`ngTemplateOutletContext`,kb(14,M,n.value(),n.totalPercent(),n.percentages())),MC(),xw(n.labelPosition()===`end`?6:-1))},dependencies:[Gl,GT,WT,ke,XH,L],encapsulation:2})}return t})();var We=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Ro({type:t});static ɵinj=Zn({imports:[ie,XH,XH]})}return t})();export{ie as n,We as t};