import{Br as em,Dt as L$,Ht as Nr,Jr as g,P as Ey,Pr as dh,T as DH,Wt as Ny,Zt as P,dn as Ro,ii as h_,ir as Zn,la as s_,lt as J2,or as _e,ot as Iy,p as Al,ra as rH,s as $t,sa as rt,wr as cH}from"./chunk-CXRXTJ2s.js";var $=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For ngx-prime */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var C={root:`p-ink`};var M=(()=>{class i extends Nr{name=`ripple`;style=$;classes=C;static ɵfac=(()=>{let e;return function(s){return(e||(e=dh(i)))(s||i)}})();static ɵprov=P({token:i,factory:i.ɵfac})}return i})();var W=(()=>{class i extends J2{componentName=`Ripple`;zone=g(_e);_componentStyle=g(M);animationListener;mouseDownListener;timeout;constructor(){super(),$t(()=>{L$(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display===`none`)return;if(!this.$unstyled()&&Iy(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`false`),!rH(t)&&!cH(t)){let n=Math.max(s_(this.el.nativeElement),Ny(this.el.nativeElement));t.style.height=n+`px`,t.style.width=n+`px`}let s=h_(this.el.nativeElement),E=e.pageX-s.left+this.document.body.scrollTop-cH(t)/2,F=e.pageY-s.top+this.document.body.scrollLeft-rH(t)/2;this.renderer.setStyle(t,`top`,F+`px`),this.renderer.setStyle(t,`left`,E+`px`),!this.$unstyled()&&Ey(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let n=this.getInk();n&&(!this.$unstyled()&&Iy(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className==`string`&&e[t].className.indexOf(`p-ink`)!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&Iy(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Iy(e.currentTarget,`p-ink-active`),e.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let e=this.renderer.createElement(`span`);this.renderer.addClass(e,`p-ink`),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,`data-p-ink`,`true`),this.renderer.setAttribute(e,`data-p-ink-active`,`false`),this.renderer.setAttribute(e,`aria-hidden`,`true`),this.renderer.setAttribute(e,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(e,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,DH(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(t){return new(t||i)};static ɵdir=rt({type:i,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[Al([M]),em]})}return i})();var X=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Ro({type:i});static ɵinj=Zn({})}return i})();export{X as n,W as t};