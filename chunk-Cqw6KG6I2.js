import{$a as zt,Br as em,Da as uw,Ea as um,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,La as wb,Li as nm,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,S as CT,U as GT,W as GV,Z as H_,Zt as P,_i as km,cn as Rb,dn as Ro,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,lt as J2,mn as ST,na as qw,oi as hb,p as Al,qr as fm,ua as sa,ut as JH,yr as bm}from"./chunk-CXRXTJ2s.js";import{n as L$1}from"./chunk-CerPySWC.js";var K=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var W=[`content`];var X=n=>({$implicit:n});function Y(n,f){if(n&1&&(Ws(0,`div`),wb(1),wl()),n&2){let e=qw(2);bm(`display`,e.value()!=null&&e.value()!==0?`flex`:`none`),MC(),km(``,e.value(),``,e.unit())}}function Z(n,f){n&1&&fm(0)}function ee(n,f){if(n&1&&(Ws(0,`div`,2)(1,`div`,2),Aw(2,Y,2,4,`div`,3),nm(3,Z,1,0,`ng-container`,4),wl()()),n&2){let e=qw();hb(e.cn(e.cx(`value`),e.valueStyleClass())),bm(`width`,e.value()+`%`)(`display`,`flex`)(`background`,e.color()),cm(`pBind`,e.ptm(`value`)),am(`data-p`,e.dataP),MC(),hb(e.cx(`label`)),cm(`pBind`,e.ptm(`label`)),am(`data-p`,e.dataP),MC(),xw(e.showValue()&&!e.contentTemplate()&&!e._contentTemplate?2:-1),MC(),cm(`ngTemplateOutlet`,e.contentTemplate()||e._contentTemplate)(`ngTemplateOutletContext`,Rb(17,X,e.value()))}}function ne(n,f){if(n&1&&um(0,`div`,2),n&2){let e=qw();hb(e.cn(e.cx(`value`),e.valueStyleClass())),bm(`background`,e.color()),cm(`pBind`,e.ptm(`value`)),am(`data-p`,e.dataP)}}var te={root:({instance:n})=>[`p-progressbar p-component`,{"p-progressbar-determinate":n.mode()==`determinate`,"p-progressbar-indeterminate":n.mode()==`indeterminate`}],value:`p-progressbar-value`,label:`p-progressbar-label`};var L=(()=>{class n extends Nr{name=`progressbar`;style=K;classes=te;static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var U=new b(`PROGRESSBAR_INSTANCE`);var ie=(()=>{class n extends J2{componentName=`ProgressBar`;$pcProgressBar=g(U,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L$1,{self:!0});value=zt(void 0,{transform:ST});showValue=zt(!0,{transform:CT});styleClass=zt();valueStyleClass=zt();unit=zt(`%`);mode=zt(`determinate`);color=zt();contentTemplate=GV(`content`,{descendants:!1});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=g(L);templates=zV(JH);_contentTemplate;onAfterContentInit(){this.templates()?.forEach(e=>{e.getType()===`content`?this._contentTemplate=e.template:this._contentTemplate=e.template})}get dataP(){return this.cn({determinate:this.mode()===`determinate`,indeterminate:this.mode()===`indeterminate`})}static ɵfac=(()=>{let e;return function(t){return(e||(e=dh(n)))(t||n)}})();static ɵcmp=sa({type:n,selectors:[[`p-progressBar`],[`p-progressbar`],[`p-progress-bar`]],contentQueries:function(i,t,_){i&1&&Dm(_,t.contentTemplate,W,4)(_,t.templates,JH,4),i&2&&Jw(2)},hostAttrs:[`role`,`progressbar`],hostVars:7,hostBindings:function(i,t){i&2&&(am(`aria-valuemin`,0)(`aria-valuenow`,t.value())(`aria-valuemax`,100)(`aria-level`,t.value()+t.unit())(`data-p`,t.dataP),hb(t.cn(t.cx(`root`),t.styleClass())))},inputs:{value:[1,`value`],showValue:[1,`showValue`],styleClass:[1,`styleClass`],valueStyleClass:[1,`valueStyleClass`],unit:[1,`unit`],mode:[1,`mode`],color:[1,`color`]},features:[Al([L,{provide:U,useExisting:n},{provide:H_,useExisting:n}]),uw([L$1]),em],decls:2,vars:2,consts:[[3,`class`,`pBind`,`width`,`display`,`background`],[3,`class`,`pBind`,`background`],[3,`pBind`],[3,`display`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(i,t){i&1&&(Aw(0,ee,4,19,`div`,0),Aw(1,ne,1,6,`div`,1)),i&2&&(xw(t.mode()===`determinate`?0:-1),MC(),xw(t.mode()===`indeterminate`?1:-1))},dependencies:[Gl,GT,XH,L$1],encapsulation:2})}return n})();var Ce=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[ie,XH,XH]})}return n})();export{ie as n,Ce as t};