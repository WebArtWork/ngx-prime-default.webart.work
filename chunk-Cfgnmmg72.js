import{$a as zt,$i as qi,$r as gm,At as Lf,Br as em,Da as uw,Dt as L$,Ha as xw,Hn as XH,Ht as Nr,In as WT,Jr as g,K as Gl,La as wb,Li as nm,Nr as da,Nt as Lw,O as Dm,Or as cm,P as Ey,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,U as GT,W as GV,Wt as Ny,X as HV,Z as H_,Zt as P,dn as Ro,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,l as $w,la as s_,li as i_,lt as J2,mn as ST,na as qw,nr as Zb,oi as hb,ot as Iy,p as Al,qr as fm,qt as Ob,ra as rH,s as $t,ua as sa,un as Rf,ut as JH,vi as kw,wr as cH}from"./chunk-CXRXTJ2s.js";import{n as L,t as F}from"./chunk-CerPySWC.js";var ge=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        min-width: 0;
        min-height: 0;
        border: 0 none;
    }
`;var _e=[`panel`];function xe(n,h){n&1&&fm(0)}function ye(n,h){if(n&1){let e=$w();Ws(0,`div`,3),gm(`mousedown`,function(i){Rf(e);let s=qw().$index;return Lf(qw().onGutterMouseDown(i,s))})(`touchstart`,function(i){Rf(e);let s=qw().$index;return Lf(qw().onGutterTouchStart(i,s))})(`touchmove`,function(i){Rf(e);return Lf(qw(2).onGutterTouchMove(i))})(`touchend`,function(i){Rf(e);return Lf(qw(2).onGutterTouchEnd(i))}),Ws(1,`div`,4),gm(`keyup`,function(i){Rf(e);return Lf(qw(2).onGutterKeyUp(i))})(`keydown`,function(i){Rf(e);let s=qw().$index;return Lf(qw().onGutterKeyDown(i,s))}),wl()()}if(n&2){let e=qw(2);hb(e.cx(`gutter`)),cm(`pBind`,e.ptm(`gutter`)),am(`data-p-gutter-resizing`,!1)(`data-p`,e.dataP),MC(),hb(e.cx(`gutterHandle`)),cm(`pBind`,e.ptm(`gutterHandle`))(`ngStyle`,e.gutterStyle()),am(`aria-orientation`,e.layout())(`aria-valuenow`,e.prevSize)}}function Ee(n,h){if(n&1&&(Ws(0,`div`,0),nm(1,xe,1,0,`ng-container`,1),wl(),Aw(2,ye,2,11,`div`,2)),n&2){let e=h.$implicit,t=h.$index,i=qw();hb(i.cn(i.cx(`panel`),i.panelStyleClass())),cm(`pBind`,i.ptm(`panel`))(`ngStyle`,i.panelStyle()),MC(),cm(`ngTemplateOutlet`,e),MC(),xw(t!==i.panels.length-1?2:-1)}}var be={root:({instance:n})=>[`p-splitter p-component`,`p-splitter-`+n.layout()],panel:({instance:n})=>[`p-splitterpanel`,{"p-splitterpanel-nested":n.nestedState()}],gutter:`p-splitter-gutter`,gutterHandle:`p-splitter-gutter-handle`};var we={root:({instance:n})=>[{display:`flex`,"flex-wrap":`nowrap`},n.layout()===`vertical`?{"flex-direction":`column`}:``]};var fe=(()=>{class n extends Nr{name=`splitter`;style=ge;classes=be;inlineStyles=we;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(n)))(i||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var Se=new b(`SPLITTER_INSTANCE`);var B=(()=>{class n extends J2{componentName=`Splitter`;$pcSplitter=g(Se,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zt();panelStyleClass=zt();panelStyle=zt();stateStorage=zt(`session`);stateKey=zt(null);layout=zt(`horizontal`);gutterSize=zt(4,{transform:ST});step=zt(5,{transform:ST});minSizes=zt([]);panelSizes=zt([]);onResizeEnd=HV();onResizeStart=HV();templates=zV(JH);panelChildren=zV(`panel`);splitter=GV(qi(()=>n));nestedState=da(()=>this.splitter());panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=g(fe);constructor(){super(),$t(()=>{let e=this.panelSizes();if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let t=[...this.el.nativeElement.children].filter(i=>i.getAttribute(`data-pc-section`)===`panel`);this.panels.map((i,s)=>{let u=(e.length-1>=s?e[s]:null)||100/this.panels.length;t[s].style.flexBasis=`calc(`+u+`% - `+(this.panels.length-1)*this.gutterSize()+`px)`})}})}onAfterContentInit(){let e=this.templates();e&&e.length>0&&e.forEach(i=>{i.getType()===`panel`?this.panels.push(i.template):this.panels.push(i.template)});let t=this.panelChildren();t&&t.length>0&&t.forEach(i=>{this.panels.push(i)})}onAfterViewInit(){if(L$(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let t=[...this.el.nativeElement.children].filter(s=>s.getAttribute(`data-pc-section`)===`panel`),i=[];this.panels.map((s,r)=>{let V=(this.panelSizes().length-1>=r?this.panelSizes()[r]:null)||100/this.panels.length;i[r]=V,t[r].style.flexBasis=`calc(`+V+`% - `+(this.panels.length-1)*this.gutterSize()+`px)`}),this._panelSizes=i,this.prevSize=parseFloat(i[0]).toFixed(4)}}}resizeStart(e,t,i){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?cH(this.el.nativeElement):rH(this.el.nativeElement),i||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,i?(this.prevPanelSize=this.horizontal()?s_(this.prevPanelElement,!0):Ny(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?s_(this.nextPanelElement,!0):Ny(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?s_(this.prevPanelElement,!0):Ny(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?s_(this.nextPanelElement,!0):Ny(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=t,Ey(this.gutterElement,`p-splitter-gutter-resizing`),this.gutterElement.setAttribute(`data-p-gutter-resizing`,`true`),Ey(this.el.nativeElement,`p-splitter-resizing`),this.el.nativeElement.setAttribute(`data-p-resizing`,`true`),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,t,i){let s,r,u;i?this.horizontal()?(r=100*((this.prevPanelSize??0)+(t??0))/(this.size??1),u=100*((this.nextPanelSize??0)-(t??0))/(this.size??1)):(r=100*((this.prevPanelSize??0)-(t??0))/(this.size??1),u=100*((this.nextPanelSize??0)+(t??0))/(this.size??1)):(this.horizontal()?i_(this.el.nativeElement)?s=((this.startPos??0)-e.pageX)*100/(this.size??1):s=(e.pageX-(this.startPos??0))*100/(this.size??1):s=(e.pageY-(this.startPos??0))*100/(this.size??1),r=this.prevPanelSize+s,u=this.nextPanelSize-s),this.prevSize=parseFloat(r).toFixed(4),this.validateResize(r,u)&&(this.prevPanelElement.style.flexBasis=`calc(`+r+`% - `+(this.panels.length-1)*this.gutterSize()+`px)`,this.nextPanelElement.style.flexBasis=`calc(`+u+`% - `+(this.panels.length-1)*this.gutterSize()+`px)`,this._panelSizes[this.prevPanelIndex]=r,this._panelSizes[this.prevPanelIndex+1]=u)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),Iy(this.gutterElement,`p-splitter-gutter-resizing`),Iy(this.el.nativeElement,`p-splitter-resizing`),this.clear()}onGutterMouseDown(e,t){this.resizeStart(e,t),this.bindMouseListeners()}onGutterTouchStart(e,t){e.cancelable&&(this.resizeStart(e,t),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,t,i){this.resizeStart(e,t,!0),this.onResize(e,i,!0)}setTimer(e,t,i){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,t,i)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,t){switch(e.code){case`ArrowLeft`:this.layout()===`horizontal`&&this.setTimer(e,t,this.step()*-1),e.preventDefault();break;case`ArrowRight`:this.layout()===`horizontal`&&this.setTimer(e,t,this.step()),e.preventDefault();break;case`ArrowDown`:this.layout()===`vertical`&&this.setTimer(e,t,this.step()*-1),e.preventDefault();break;case`ArrowUp`:this.layout()===`vertical`&&this.setTimer(e,t,this.step()),e.preventDefault();break;default:break}}validateResize(e,t){return!(this.minSizes().length>=1&&this.minSizes()[0]&&this.minSizes()[0]>e||this.minSizes().length>1&&this.minSizes()[1]&&this.minSizes()[1]>t)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,`mousemove`,e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,`mouseup`,e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,`touchmove`,e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,`touchend`,e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isStateful(){return this.stateKey()!=null}getStorage(){if(L$(this.platformId))switch(this.stateStorage()){case`local`:return this.document.defaultView?.localStorage;case`session`:return this.document.defaultView?.sessionStorage;default:throw new Error(this.stateStorage()+` is not a valid value for the state storage, supported values are "local" and "session".`)}else throw new Error(`Storage is not a available by default on the server.`)}saveState(){this.getStorage()?.setItem(this.stateKey(),JSON.stringify(this._panelSizes))}restoreState(){let t=this.getStorage()?.getItem(this.stateKey());return t?(this._panelSizes=JSON.parse(t),[...this.el.nativeElement.children].filter(s=>s.getAttribute(`data-pc-section`)===`panel`).forEach((s,r)=>{s.style.flexBasis=`calc(`+this._panelSizes[r]+`% - `+(this.panels.length-1)*this.gutterSize()+`px)`}),!0):!1}gutterStyle(){return this.horizontal()?{width:this.gutterSize()+`px`}:{height:this.gutterSize()+`px`}}horizontal(){return this.layout()===`horizontal`}get dataP(){return this.cn({[this.layout()]:this.layout(),nested:this.nestedState()!=null})}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`p-splitter`]],contentQueries:function(t,i,s){t&1&&Dm(s,i.templates,JH,4)(s,i.panelChildren,_e,4)(s,i.splitter,n,5),t&2&&Jw(3)},hostVars:4,hostBindings:function(t,i){t&2&&(am(`data-p-gutter-resizing`,!1)(`data-p`,i.dataP),hb(i.cn(i.cx(`root`),i.styleClass())))},inputs:{styleClass:[1,`styleClass`],panelStyleClass:[1,`panelStyleClass`],panelStyle:[1,`panelStyle`],stateStorage:[1,`stateStorage`],stateKey:[1,`stateKey`],layout:[1,`layout`],gutterSize:[1,`gutterSize`],step:[1,`step`],minSizes:[1,`minSizes`],panelSizes:[1,`panelSizes`]},outputs:{onResizeEnd:`onResizeEnd`,onResizeStart:`onResizeStart`},features:[Al([fe,{provide:Se,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],decls:2,vars:0,consts:[[`tabindex`,`-1`,3,`pBind`,`ngStyle`],[4,`ngTemplateOutlet`],[`role`,`separator`,`tabindex`,`-1`,3,`pBind`,`class`],[`role`,`separator`,`tabindex`,`-1`,3,`mousedown`,`touchstart`,`touchmove`,`touchend`,`pBind`],[`tabindex`,`0`,3,`keyup`,`keydown`,`pBind`,`ngStyle`]],template:function(t,i){t&1&&Lw(0,Ee,3,6,null,null,Rw),t&2&&kw(i.panels)},dependencies:[Gl,GT,WT,XH,F,L],encapsulation:2})}return n})();var ze=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[B,XH,F,XH,F]})}return n})();var Te=()=>[50,50];var Me=()=>[30,70];function Ce(n,h){n&1&&(Ws(0,`div`,6),wb(1,`Panel 1`),wl())}function De(n,h){n&1&&(Ws(0,`div`,6),wb(1,`Panel 2`),wl())}function Le(n,h){n&1&&(Ws(0,`div`,6),wb(1,`Panel 1`),wl())}function Ne(n,h){n&1&&(Ws(0,`div`,6),wb(1,`Panel 2`),wl())}var We=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=sa({type:n,selectors:[[`uk-splitter-demo`]],decls:18,vars:4,consts:[[`panel`,``],[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[2,`height`,`10rem`,3,`panelSizes`],[`layout`,`vertical`,2,`height`,`16rem`,3,`panelSizes`],[2,`padding`,`1rem`]],template:function(t,i){t&1&&(Ws(0,`h1`,1),wb(1,`Splitter`),wl(),Ws(2,`section`,2)(3,`h2`,3),wb(4,`Horizontal`),wl(),Ws(5,`p-splitter`,4),nm(6,Ce,2,0,`ng-template`,null,0,Zb)(8,De,2,0,`ng-template`,null,0,Zb),wl()(),Ws(10,`section`,2)(11,`h2`,3),wb(12,`Vertical`),wl(),Ws(13,`p-splitter`,5),nm(14,Le,2,0,`ng-template`,null,0,Zb)(16,Ne,2,0,`ng-template`,null,0,Zb),wl()()),t&2&&(MC(5),cm(`panelSizes`,Ob(2,Te)),MC(8),cm(`panelSizes`,Ob(3,Me)))},dependencies:[ze,B],encapsulation:2})}}return n})();export{We as SplitterDemo};