import{$a as zt,$r as gm,Ai as mS,At as Lf,Br as em,Bt as Nb,Da as uw,Ea as um,Ha as xw,Hn as XH,Ht as Nr,J as H,Jr as g,La as wb,Ln as WV,Nt as Lw,Or as cm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,Z as H_,Zt as P,dn as Ro,en as Pm,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,j as Em,jt as Lm,l as $w,lt as J2,na as qw,oi as hb,p as Al,pi as jm,ri as hS,s as $t,ua as sa,un as Rf,vi as kw}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";import{f as un,r as Rt,t as Ie,u as sn}from"./chunk-53wldAuq.js";var oe=`
    .p-terminal {
        display: block;
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`;var ce=[`in`];function de(e,C){if(e&1&&(Ws(0,`div`,2),wb(1),wl()),e&2){let t=qw();hb(t.cx(`welcomeMessage`)),cm(`pBind`,t.ptm(`welcomeMessage`)),MC(),Lm(t.welcomeMessage())}}function le(e,C){if(e&1&&(Ws(0,`div`,2)(1,`span`,2),wb(2),wl(),Ws(3,`span`,2),wb(4),wl(),Ws(5,`div`,2),wb(6),wl()()),e&2){let t=C.$implicit,n=qw();hb(n.cx(`command`)),cm(`pBind`,n.ptm(`command`)),MC(),hb(n.cx(`promptLabel`)),cm(`pBind`,n.ptm(`promptLabel`)),MC(),Lm(n.prompt()),MC(),hb(n.cx(`commandValue`)),cm(`pBind`,n.ptm(`commandValue`)),MC(),Lm(t.text),MC(),hb(n.cx(`commandResponse`)),cm(`pBind`,n.ptm(`commandResponse`)),am(`aria-live`,`polite`),MC(),Lm(t.response)}}var ue={root:()=>[`p-terminal p-component`],welcomeMessage:`p-terminal-welcome-message`,commandList:`p-terminal-command-list`,command:`p-terminal-command`,commandValue:`p-terminal-command-value`,commandResponse:`p-terminal-command-response`,prompt:`p-terminal-prompt`,promptLabel:`p-terminal-prompt-label`,promptValue:`p-terminal-prompt-value`};var re=(()=>{class e extends Nr{name=`terminal`;style=oe;classes=ue;static ɵfac=(()=>{let t;return function(i){return(t||(t=dh(e)))(i||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var y=(()=>{class e{commandSource=new H;responseSource=new H;commandHandler=this.commandSource.asObservable();responseHandler=this.responseSource.asObservable();sendCommand(t){t&&this.commandSource.next(t)}sendResponse(t){t&&this.responseSource.next(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var ae=new b(`TERMINAL_INSTANCE`);var x=(()=>{class e extends J2{terminalService=g(y);componentName=`Terminal`;$pcTerminal=g(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});welcomeMessage=zt();prompt=zt();styleClass=zt();response=zt();commands=[];command;container;commandProcessed;subscription;_componentStyle=g(re);inputRef=WV.required(`in`);onHostClick(){this.focus(this.inputRef()?.nativeElement)}constructor(){super();let t=this.terminalService;this.subscription=t.responseHandler.subscribe(n=>{this.commands[this.commands.length-1].response=n,this.commandProcessed=!0}),$t(()=>{let n=this.response();n&&(this.commands[this.commands.length-1].response=n,this.commandProcessed=!0)})}onAfterViewInit(){this.container=this.el.nativeElement}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.commandProcessed&&(this.container.scrollTop=this.container.scrollHeight,this.commandProcessed=!1)}handleCommand(t){t.keyCode==13&&(this.commands.push({text:this.command}),this.terminalService.sendCommand(this.command),this.command=``)}focus(t){t.focus()}onDestroy(){this.subscription&&this.subscription.unsubscribe()}static ɵfac=function(n){return new(n||e)};static ɵcmp=sa({type:e,selectors:[[`p-terminal`]],viewQuery:function(n,i){n&1&&Em(i.inputRef,ce,5),n&2&&Jw()},hostVars:2,hostBindings:function(n,i){n&1&&gm(`click`,function(){return i.onHostClick()}),n&2&&hb(i.cn(i.cx(`root`),i.styleClass()))},inputs:{welcomeMessage:[1,`welcomeMessage`],prompt:[1,`prompt`],styleClass:[1,`styleClass`],response:[1,`response`]},features:[Al([re,{provide:ae,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:9,vars:15,consts:[[`in`,``],[3,`class`,`pBind`],[3,`pBind`],[`type`,`text`,`autocomplete`,`off`,`autofocus`,``,3,`ngModelChange`,`keydown`,`ngModel`,`pBind`]],template:function(n,i){if(n&1){let D=$w();Aw(0,de,2,4,`div`,1),Ws(1,`div`,2),Lw(2,le,7,16,`div`,1,Rw),wl(),Ws(4,`div`,2)(5,`span`,2),wb(6),wl(),Ws(7,`input`,3,0),jm(`ngModelChange`,function(l){return Rf(D),Nb(i.command,l)||(i.command=l),Lf(l)}),gm(`keydown`,function(l){return i.handleCommand(l)}),wl(),hS(),wl()}n&2&&(xw(i.welcomeMessage()?0:-1),MC(),hb(i.cx(`commandList`)),cm(`pBind`,i.ptm(`commandList`)),MC(),kw(i.commands),MC(2),hb(i.cx(`prompt`)),cm(`pBind`,i.ptm(`prompt`)),MC(),hb(i.cx(`promptLabel`)),cm(`pBind`,i.ptm(`promptLabel`)),MC(),Lm(i.prompt()),MC(),hb(i.cx(`promptValue`)),Pm(`ngModel`,i.command),cm(`pBind`,i.ptm(`promptValue`)),mS())},dependencies:[un,Ie,sn,Rt,XH,L],encapsulation:2})}return e})();var me=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[x,XH,XH]})}return e})();var Re=(()=>{class e{constructor(){this.terminalService=g(y)}ngOnInit(){this.subscription=this.terminalService.commandHandler.subscribe(t=>{this.terminalService.sendResponse(`Unknown command: ${t}`)})}ngOnDestroy(){this.subscription?.unsubscribe()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=sa({type:e,selectors:[[`uk-terminal-demo`]],features:[Al([y])],decls:6,vars:0,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[`welcomeMessage`,`Welcome to the ngx-prime terminal demo`,`prompt`,`uikit $`]],template:function(n,i){n&1&&(Ws(0,`h1`,0),wb(1,`Terminal`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-terminal`,3),wl())},dependencies:[me,x],encapsulation:2})}}return e})();export{Re as TerminalDemo};