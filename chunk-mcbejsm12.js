import{$a as zt,Br as em,Da as uw,Ea as um,Hn as XH,Ht as Nr,Jr as g,Kr as fb,La as wb,Or as cm,Pr as dh,Pt as MC,Qi as qf,Ra as wl,Rn as Ws,Z as H_,Zt as P,dn as Ro,fr as am,hr as b,ir as Zn,lt as J2,oi as hb,p as Al,qt as Ob,ua as sa,yr as bm}from"./chunk-CXRXTJ2s.js";import{n as L$1}from"./chunk-CerPySWC.js";var R=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var L={root:()=>[`p-progressspinner`],spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`};var T=(()=>{class e extends Nr{name=`progressspinner`;style=R;classes=L;static ɵfac=(()=>{let r;return function(n){return(r||(r=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var j=new b(`PROGRESSSPINNER_INSTANCE`);var k=(()=>{class e extends J2{componentName=`ProgressSpinner`;$pcProgressSpinner=g(j,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L$1,{self:!0});styleClass=zt();strokeWidth=zt(`2`);fill=zt(`none`);animationDuration=zt(`2s`);ariaLabel=zt();onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=g(T);static ɵfac=(()=>{let r;return function(n){return(r||(r=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-progressSpinner`],[`p-progress-spinner`],[`p-progressspinner`]],hostVars:5,hostBindings:function(t,n){t&2&&(am(`aria-label`,n.ariaLabel())(`role`,`progressbar`)(`aria-busy`,!0),hb(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],strokeWidth:[1,`strokeWidth`],fill:[1,`fill`],animationDuration:[1,`animationDuration`],ariaLabel:[1,`ariaLabel`]},features:[Al([T,{provide:j,useExisting:e},{provide:H_,useExisting:e}]),uw([L$1]),em],decls:2,vars:10,consts:[[`viewBox`,`25 25 50 50`,3,`pBind`],[`cx`,`50`,`cy`,`50`,`r`,`20`,`stroke-miterlimit`,`10`,3,`pBind`]],template:function(t,n){t&1&&(qf(),Ws(0,`svg`,0),um(1,`circle`,1),wl()),t&2&&(hb(n.cx(`spin`)),bm(`animation-duration`,n.animationDuration()),cm(`pBind`,n.ptm(`spin`)),MC(),hb(n.cx(`circle`)),cm(`pBind`,n.ptm(`circle`)),am(`fill`,n.fill())(`stroke-width`,n.strokeWidth()))},dependencies:[XH,L$1],encapsulation:2})}return e})();var A=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[k,XH,XH]})}return e})();var V=()=>({width:`3rem`,height:`3rem`});var ne=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-progressspinner-demo`]],decls:10,vars:3,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`strokeWidth`,`4`,`animationDuration`,`.8s`]],template:function(t,n){t&1&&(Ws(0,`h1`,0),wb(1,`ProgressSpinner`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-progressSpinner`),wl(),Ws(6,`section`,1)(7,`h2`,2),wb(8,`Custom Stroke & Duration`),wl(),um(9,`p-progressSpinner`,3),wl()),t&2&&(MC(9),fb(Ob(2,V)))},dependencies:[A,k],encapsulation:2})}}return e})();export{ne as ProgressSpinnerDemo};