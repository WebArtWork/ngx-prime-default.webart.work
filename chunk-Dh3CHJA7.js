import{$a as zt,Br as em,E as Da,Ht as Nr,Jr as g,Pr as dh,S as CT,Si as la,Ta as ua,Zt as P,lt as J2,oi as hb,p as Al,ua as sa}from"./chunk-CXRXTJ2s.js";var h=[`*`];var w=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;var b=(()=>{class e extends Nr{name=`baseicon`;css=w;static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵprov=P({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var S=(()=>{class e extends J2{spin=zt(!1,{transform:CT});_componentStyle=g(b);getClassNames(){return Da(`p-icon`,{"p-icon-spin":this.spin()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=dh(e)))(n||e)}})();static ɵcmp=sa({type:e,selectors:[[`ng-component`]],hostAttrs:[`width`,`14`,`height`,`14`,`viewBox`,`0 0 14 14`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],hostVars:2,hostBindings:function(i,n){i&2&&hb(n.getClassNames())},inputs:{spin:[1,`spin`]},features:[Al([b]),em],ngContentSelectors:h,decls:1,vars:0,template:function(i,n){i&1&&(ua(),la(0))},encapsulation:2})}return e})();export{S as t};