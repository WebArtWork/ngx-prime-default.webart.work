import{$a as zt,Br as em,Da as uw,Ea as um,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,Jr as g,K as Gl,Li as nm,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Ra as wl,Rn as Ws,U as GT,W as GV,Z as H_,Zt as P,cn as Rb,dn as Ro,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,lt as J2,na as qw,oi as hb,on as Qw,p as Al,qr as fm,ua as sa,ut as JH,vi as kw}from"./chunk-CXRXTJ2s.js";import{n as L}from"./chunk-CerPySWC.js";var W=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var Z=[`content`];var ee=[`opposite`];var te=[`marker`];var w=e=>({$implicit:e});function ne(e,l){e&1&&fm(0)}function ie(e,l){e&1&&fm(0)}function oe(e,l){if(e&1&&nm(0,ie,1,0,`ng-container`,2),e&2){let t=qw().$implicit,o=qw();cm(`ngTemplateOutlet`,o.markerTemplate||o._markerTemplate)(`ngTemplateOutletContext`,Rb(2,w,t))}}function ae(e,l){if(e&1&&um(0,`div`,1),e&2){let t=qw(2);hb(t.cx(`eventMarker`)),cm(`pBind`,t.ptm(`eventMarker`)),am(`data-p`,t.dataP)}}function le(e,l){if(e&1&&um(0,`div`,1),e&2){let t=qw(2);hb(t.cx(`eventConnector`)),cm(`pBind`,t.ptm(`eventConnector`)),am(`data-p`,t.dataP)}}function re(e,l){e&1&&fm(0)}function pe(e,l){if(e&1&&(Ws(0,`div`,1)(1,`div`,1),nm(2,ne,1,0,`ng-container`,2),wl(),Ws(3,`div`,1),Aw(4,oe,1,4,`ng-container`)(5,ae,1,4,`div`,0),Aw(6,le,1,4,`div`,0),wl(),Ws(7,`div`,1),nm(8,re,1,0,`ng-container`,2),wl()()),e&2){let t=l.$implicit,o=l.$index,i=l.$count,n=qw();hb(n.cx(`event`)),cm(`pBind`,n.ptm(`event`)),am(`data-p`,n.dataP),MC(),hb(n.cx(`eventOpposite`)),cm(`pBind`,n.ptm(`eventOpposite`)),am(`data-p`,n.dataP),MC(),cm(`ngTemplateOutlet`,n.oppositeTemplate()||n._oppositeTemplate)(`ngTemplateOutletContext`,Rb(22,w,t)),MC(),hb(n.cx(`eventSeparator`)),cm(`pBind`,n.ptm(`eventSeparator`)),am(`data-p`,n.dataP),MC(),xw(n.markerTemplate||n._markerTemplate?4:5),MC(2),xw(o!==i-1?6:-1),MC(),hb(n.cx(`eventContent`)),cm(`pBind`,n.ptm(`eventContent`)),am(`data-p`,n.dataP),MC(),cm(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate)(`ngTemplateOutletContext`,Rb(24,w,t))}}var me={root:({instance:e})=>[`p-timeline p-component`,`p-timeline-`+e.align(),`p-timeline-`+e.layout()],event:`p-timeline-event`,eventOpposite:`p-timeline-event-opposite`,eventSeparator:`p-timeline-event-separator`,eventMarker:`p-timeline-event-marker`,eventConnector:`p-timeline-event-connector`,eventContent:`p-timeline-event-content`};var X=(()=>{class e extends Nr{name=`timeline`;style=W;classes=me;static ɵfac=(()=>{let t;return function(i){return(t||(t=dh(e)))(i||e)}})();static ɵprov=P({token:e,factory:e.ɵfac})}return e})();var Y=new b(`TIMELINE_INSTANCE`);var ce=(()=>{class e extends J2{componentName=`Timeline`;bindDirectiveInstance=g(L,{self:!0});$pcTimeline=g(Y,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}value=zt();styleClass=zt();align=zt(`left`);layout=zt(`vertical`);contentTemplate=GV(`content`,{descendants:!1});oppositeTemplate=GV(`opposite`,{descendants:!1});markerTemplate;templates=zV(JH);_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=g(X);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates().forEach(t=>{switch(t.getType()){case`content`:this._contentTemplate=t.template;break;case`opposite`:this._oppositeTemplate=t.template;break;case`marker`:this._markerTemplate=t.template;break}})}get dataP(){return this.cn({[this.layout()]:this.layout(),[this.align()]:this.align()})}static ɵfac=(()=>{let t;return function(i){return(t||(t=dh(e)))(i||e)}})();static ɵcmp=sa({type:e,selectors:[[`p-timeline`]],contentQueries:function(o,i,n){if(o&1&&(Dm(n,i.contentTemplate,Z,4)(n,i.oppositeTemplate,ee,4)(n,i.templates,JH,4),ym(n,te,4)),o&2){Jw(3);let F;Kw(F=Qw())&&(i.markerTemplate=F.first)}},hostVars:3,hostBindings:function(o,i){o&2&&(am(`data-p`,i.dataP),hb(i.cn(i.cx(`root`),i.styleClass())))},inputs:{value:[1,`value`],styleClass:[1,`styleClass`],align:[1,`align`],layout:[1,`layout`]},features:[Al([X,{provide:Y,useExisting:e},{provide:H_,useExisting:e}]),uw([L]),em],decls:2,vars:0,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(o,i){o&1&&Lw(0,pe,9,26,`div`,0,Rw),o&2&&kw(i.value())},dependencies:[Gl,GT,XH,L],encapsulation:2})}return e})();var Ne=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=Ro({type:e});static ɵinj=Zn({imports:[ce,XH,XH]})}return e})();export{ce as n,Ne as t};