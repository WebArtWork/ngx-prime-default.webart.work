import{$a as zt,$r as gm,At as Lf,Br as em,Da as uw,Ea as um,En as Ue,Et as Kw,Ga as ym,Ha as xw,Hn as XH,Ht as Nr,In as WT,J as H,Jr as g,K as Gl,La as wb,Li as nm,Nt as Lw,O as Dm,Or as cm,Pr as dh,Pt as MC,Qa as zV,Qi as qf,Ra as wl,Rn as Ws,S as CT,Tn as UV,U as GT,X as HV,Z as H_,Zt as P,ai as ha,bi as lH,cn as Rb,dn as Ro,fn as Rw,fr as am,gt as Jw,h as Aw,hr as b,ir as Zn,jt as Lm,l as $w,lt as J2,na as qw,oi as hb,on as Qw,p as Al,qr as fm,s as $t$1,ua as sa,un as Rf,ut as JH,vi as kw}from"./chunk-CXRXTJ2s.js";import"./chunk-Dh3CHJA7.js";import{n as L,t as F}from"./chunk-CerPySWC.js";import{F as d}from"./main-4W6E6VEG.js";import{t as f}from"./chunk-BM45g-Uf.js";var mt=`
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }

    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 dt('organizationchart.gutter');
    }

    .p-organizationchart-node {
        display: inline-block;
        position: relative;
        border: 1px solid dt('organizationchart.node.border.color');
        background: dt('organizationchart.node.background');
        color: dt('organizationchart.node.color');
        padding: dt('organizationchart.node.padding');
        border-radius: dt('organizationchart.node.border.radius');
        transition:
            background dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
        padding: dt('organizationchart.node.toggleable.padding');
    }

    .p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
        background: dt('organizationchart.node.hover.background');
        color: dt('organizationchart.node.hover.color');
    }

    .p-organizationchart-node-selected {
        background: dt('organizationchart.node.selected.background');
        color: dt('organizationchart.node.selected.color');
    }

    .p-organizationchart-node-toggle-button {
        position: absolute;
        inset-block-end: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));
        margin-inline-start: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));
        z-index: 2;
        inset-inline-start: 50%;
        user-select: none;
        cursor: pointer;
        width: dt('organizationchart.node.toggle.button.size');
        height: dt('organizationchart.node.toggle.button.size');
        text-decoration: none;
        background: dt('organizationchart.node.toggle.button.background');
        color: dt('organizationchart.node.toggle.button.color');
        border-radius: dt('organizationchart.node.toggle.button.border.radius');
        border: 1px solid dt('organizationchart.node.toggle.button.border.color');
        display: inline-flex;
        justify-content: center;
        align-items: center;
        outline-color: transparent;
        transition:
            background dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            outline-color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node-toggle-button:hover {
        background: dt('organizationchart.node.toggle.button.hover.background');
        color: dt('organizationchart.node.toggle.button.hover.color');
    }

    .p-organizationchart-node-toggle-button:focus-visible {
        box-shadow: dt('organizationchart.node.toggle.button.focus.ring.shadow');
        outline: dt('organizationchart.node.toggle.button.focus.ring.width') dt('organizationchart.node.toggle.button.focus.ring.style') dt('organizationchart.node.toggle.button.focus.ring.color');
        outline-offset: dt('organizationchart.node.toggle.button.focus.ring.offset');
    }

    .p-organizationchart-node-toggle-button-icon {
        position: relative;
        inset-block-start: 1px;
    }

    .p-organizationchart-connector-down {
        margin: 0 auto;
        height: dt('organizationchart.connector.height');
        width: 1px;
        background: dt('organizationchart.connector.color');
    }

    .p-organizationchart-connector-right {
        border-radius: 0;
    }

    .p-organizationchart-connector-left {
        border-radius: 0;
        border-inline-end: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-connector-top {
        border-block-start: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-node-selectable {
        cursor: pointer;
    }

    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
        border-inline-end: 0 none;
    }

    .p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
        border-start-end-radius: dt('organizationchart.connector.border.radius');
    }

    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
        border-inline-start: 1px solid dt('organizationchart.connector.color');
        border-start-start-radius: dt('organizationchart.connector.border.radius');
    }
`;var ft=n=>({$implicit:n});var vt=n=>({first:n});var yt=n=>({last:n});function Nt(n,r){if(n&1&&(Ws(0,`div`),wb(1),wl()),n&2){let t=qw(2);MC(),Lm(t.node().label)}}function Tt(n,r){n&1&&fm(0)}function Mt(n,r){if(n&1&&(Ws(0,`div`),nm(1,Tt,1,0,`ng-container`,4),wl()),n&2){let t=qw(2);MC(),cm(`ngTemplateOutlet`,t.chart.getTemplateForNode(t.node()))(`ngTemplateOutletContext`,Rb(2,ft,t.node()))}}function St(n,r){if(n&1&&(qf(),um(0,`svg`,10)),n&2){let t=qw(5);hb(t.cx(`nodeToggleButtonIcon`)),cm(`pBind`,t.getPTOptions(`nodeToggleButtonIcon`))}}function Bt(n,r){if(n&1&&(qf(),um(0,`svg`,11)),n&2){let t=qw(5);hb(t.cx(`nodeToggleButtonIcon`)),cm(`pBind`,t.getPTOptions(`nodeToggleButtonIcon`))}}function Ot(n,r){if(n&1&&(Aw(0,St,1,3,`:svg:svg`,8),Aw(1,Bt,1,3,`:svg:svg`,9)),n&2){let t=qw(4);xw(t.node().expanded?0:-1),MC(),xw(t.node().expanded?-1:1)}}function It(n,r){}function wt(n,r){n&1&&nm(0,It,0,0,`ng-template`)}function kt(n,r){if(n&1&&(Ws(0,`span`,0),nm(1,wt,1,0,null,4),wl()),n&2){let t=qw(4);hb(t.cx(`nodeToggleButtonIcon`)),cm(`pBind`,t.getPTOptions(`nodeToggleButtonIcon`)),MC(),cm(`ngTemplateOutlet`,t.chart.togglerIconTemplate||t.chart._togglerIconTemplate)(`ngTemplateOutletContext`,Rb(5,ft,t.node().expanded))}}function Dt(n,r){if(n&1){let t=$w();Ws(0,`a`,6),gm(`click`,function(o){Rf(t);let d=qw(3);return Lf(d.toggleNode(o,d.node()))})(`keydown.enter`,function(o){Rf(t);let d=qw(3);return Lf(d.toggleNode(o,d.node()))})(`keydown.space`,function(o){Rf(t);let d=qw(3);return Lf(d.toggleNode(o,d.node()))}),Aw(1,Ot,2,2),Aw(2,kt,2,7,`span`,7),wl()}if(n&2){let t=qw(3);hb(t.cx(`nodeToggleButton`)),cm(`pBind`,t.getPTOptions(`nodeToggleButton`)),MC(),xw(!t.chart.togglerIconTemplate&&!t.chart._togglerIconTemplate?1:-1),MC(),xw(t.chart.togglerIconTemplate||t.chart._togglerIconTemplate?2:-1)}}function Et(n,r){if(n&1&&Aw(0,Dt,3,5,`a`,5),n&2)xw(qw(2).leaf?-1:0)}function Ft(n,r){if(n&1&&(Ws(0,`td`,0),um(1,`div`,0),wl()),n&2){let t=qw(2);cm(`pBind`,t.ptm(`lineCell`)),am(`colspan`,t.colspan),MC(),hb(t.cx(`connectorDown`)),cm(`pBind`,t.ptm(`connectorDown`))}}function At(n,r){if(n&1&&(Ws(0,`td`,0),wb(1,`\xA0`),wl(),Ws(2,`td`,0),wb(3,`\xA0`),wl()),n&2){let t=r.$index,e=r.$count,o=qw(3);hb(o.cx(`connectorLeft`,Rb(6,vt,t===0))),cm(`pBind`,o.getNodeOptions(t!==0,`connectorLeft`)),MC(2),hb(o.cx(`connectorRight`,Rb(8,yt,t===e-1))),cm(`pBind`,o.getNodeOptions(t!==o.node().children.length-1,`connectorRight`))}}function Vt(n,r){if(n&1&&Lw(0,At,4,10,null,null,Rw),n&2)kw(qw(2).node().children)}function Rt(n,r){if(n&1&&(Ws(0,`td`,3),um(1,`table`,12),wl()),n&2){let t=r.$implicit,e=qw(2);cm(`pBind`,e.ptm(`nodeCell`)),MC(),hb(e.cx(`table`)),cm(`unstyled`,e.unstyled())(`pt`,e.pt)(`node`,t)(`collapsible`,e.node().children&&e.node().children.length>0&&e.collapsible())}}function Pt(n,r){if(n&1){let t=$w();Ws(0,`tbody`,0)(1,`tr`,0)(2,`td`,0)(3,`div`,1),gm(`click`,function(o){Rf(t);let d=qw();return Lf(d.onNodeClick(o,d.node()))}),Aw(4,Nt,2,1,`div`),Aw(5,Mt,2,4,`div`),Aw(6,Et,1,1),wl()()(),Ws(7,`tr`,2)(8,`td`,0),um(9,`div`,0),wl()(),Ws(10,`tr`,2),Aw(11,Ft,2,5,`td`,0),Aw(12,Vt,2,0),wl(),Ws(13,`tr`,2),Lw(14,Rt,2,7,`td`,3,Rw),wl()()}if(n&2){let t=qw();cm(`pBind`,t.ptm(`body`)),MC(),cm(`pBind`,t.ptm(`row`)),MC(),cm(`pBind`,t.ptm(`cell`)),am(`colspan`,t.colspan),MC(),hb(t.cn(t.cx(`node`),t.node().styleClass)),cm(`pBind`,t.getPTOptions(`node`)),MC(),xw(t.chart.getTemplateForNode(t.node())?-1:4),MC(),xw(t.chart.getTemplateForNode(t.node())?5:-1),MC(),xw(t.collapsible()?6:-1),MC(),hb(t.cx(`connectors`)),cm(`ngStyle`,t.getChildStyle(t.node()))(`pBind`,t.ptm(`connectors`)),MC(),cm(`pBind`,t.ptm(`lineCell`)),am(`colspan`,t.colspan),MC(),hb(t.cx(`connectorDown`)),cm(`pBind`,t.ptm(`connectorDown`)),MC(),hb(t.cx(`connectors`)),cm(`ngStyle`,t.getChildStyle(t.node()))(`pBind`,t.ptm(`connectors`)),MC(),xw(t.node().children&&t.node().children.length===1?11:-1),MC(),xw(t.node().children&&t.node().children.length>1?12:-1),MC(),hb(t.cx(`nodeChildren`)),cm(`ngStyle`,t.getChildStyle(t.node()))(`pBind`,t.ptm(`nodeChildren`)),MC(),kw(t.node().children)}}var $t=[`togglericon`];function jt(n,r){if(n&1&&um(0,`table`,1),n&2){let t=qw();hb(t.cx(`table`)),cm(`collapsible`,t.collapsible())(`pt`,t.pt)(`unstyled`,t.unstyled())(`node`,t.root)(`pBind`,t.ptm(`table`))}}var Lt={root:({instance:n})=>[`p-organizationchart p-component`,{"p-organizationchart-preservespace":n.preserveSpace()}],table:`p-organizationchart-table`,node:({instance:n})=>[`p-organizationchart-node`,{"p-organizationchart-node":!0,"p-organizationchart-node-selectable":n.chart.selectionMode()&&n.node().selectable!==!1,"p-organizationchart-node-selected":n.isSelected()}],nodeToggleButton:`p-organizationchart-node-toggle-button`,nodeToggleButtonIcon:`p-organizationchart-node-toggle-button-icon`,connectors:`p-organizationchart-connectors`,connectorDown:`p-organizationchart-connector-down`,connectorLeft:({first:n})=>[`p-organizationchart-connector-left`,{"p-organizationchart-connector-top":!n}],connectorRight:({last:n})=>[`p-organizationchart-connector-right`,{"p-organizationchart-connector-top":!n}],nodeChildren:`p-organizationchart-node-children`};var O=(()=>{class n extends Nr{name=`organizationchart`;style=mt;classes=Lt;static ɵfac=(()=>{let t;return function(o){return(t||(t=dh(n)))(o||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var _t=new b(`ORGANIZATIONCHART_INSTANCE`);var Ct=(()=>{class n extends J2{cd=g(ha);node=zt();root=zt(void 0,{transform:CT});first=zt(void 0,{transform:CT});last=zt(void 0,{transform:CT});collapsible=zt(void 0,{transform:CT});chart;subscription;_componentStyle=g(O);constructor(){let t=g(I);super(),this.chart=t,this.subscription=this.chart.selectionSource$.subscribe(()=>{this.cd.markForCheck()})}get leaf(){let t=this.node();if(t)return t.leaf==!1?!1:!(t.children&&t.children.length)}get colspan(){let t=this.node();if(t)return t.children&&t.children.length?t.children.length*2:null}getChildStyle(t){return{visibility:!this.leaf&&t.expanded?`inherit`:`hidden`}}getPTOptions(t){let e=this.node();return this.ptm(t,{context:{expanded:e?.expanded,selectable:e?.selectable!==!1&&this.chart.selectionMode(),selected:this.isSelected(),toggleable:this.collapsible()&&!this.leaf,active:this.isSelected()}})}getNodeOptions(t,e){return this.ptm(e,{context:{lineTop:t}})}onNodeClick(t,e){this.chart.onNodeClick(t,e)}toggleNode(t,e){e.expanded=!e.expanded,e.expanded?this.chart.onNodeExpand.emit({originalEvent:t,node:this.node()}):this.chart.onNodeCollapse.emit({originalEvent:t,node:this.node()}),t.preventDefault()}isSelected(){return this.chart.isSelected(this.node())}onDestroy(){this.subscription.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵcmp=sa({type:n,selectors:[[``,`pOrganizationChartNode`,``]],inputs:{node:[1,`node`],root:[1,`root`],first:[1,`first`],last:[1,`last`],collapsible:[1,`collapsible`]},features:[Al([O,{provide:H_,useExisting:n}]),em],decls:1,vars:1,consts:[[3,`pBind`],[3,`click`,`pBind`],[3,`ngStyle`,`pBind`],[`colspan`,`2`,3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`tabindex`,`0`,3,`class`,`pBind`],[`tabindex`,`0`,3,`click`,`keydown.enter`,`keydown.space`,`pBind`],[3,`class`,`pBind`],[`data-p-icon`,`chevron-down`,3,`class`,`pBind`],[`data-p-icon`,`chevron-up`,3,`class`,`pBind`],[`data-p-icon`,`chevron-down`,3,`pBind`],[`data-p-icon`,`chevron-up`,3,`pBind`],[`pOrganizationChartNode`,``,3,`unstyled`,`pt`,`node`,`collapsible`]],template:function(e,o){e&1&&Aw(0,Pt,16,29,`tbody`,0),e&2&&xw(o.node()?0:-1)},dependencies:[n,Gl,GT,WT,d,f,XH,F,L],encapsulation:2})}return n})();var I=(()=>{class n extends J2{el=g(Ue);cd=g(ha);componentName=`OrganizationChart`;value=zt();styleClass=zt();selectionMode=zt();collapsible=zt(void 0,{transform:CT});preserveSpace=zt(!0,{transform:CT});selection=UV();onNodeSelect=HV();onNodeUnselect=HV();onNodeExpand=HV();onNodeCollapse=HV();templates=zV(JH);togglerIconTemplate;templateMap;_togglerIconTemplate;selectionSource=new H;initialized;selectionSource$=this.selectionSource.asObservable();_componentStyle=g(O);bindDirectiveInstance=g(L,{self:!0});$pcOrganizationChart=g(_t,{optional:!0,skipSelf:!0})??void 0;constructor(){super(),$t$1(()=>{this.selection(),this.initialized&&this.selectionSource.next(null)})}ngAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}get root(){let t=this.value();return t&&t.length?t[0]:null}onAfterContentInit(){this.templates().length&&(this.templateMap={}),this.templates().forEach(t=>{t.getType()===`togglericon`?this._togglerIconTemplate=t.template:this.templateMap[t.getType()]=t.template}),this.initialized=!0}getTemplateForNode(t){return this.templateMap?t.type?this.templateMap[t.type]:this.templateMap.default:null}onNodeClick(t,e){let o=t.target;if(!(lH(o,`data-pc-section`,`nodetogglebutton`)||lH(o,`data-pc-section`,`nodetogglebuttonicon`))&&this.selectionMode()){if(e.selectable===!1)return;let d=this.findIndexInSelection(e),x=d>=0;this.selectionMode()===`single`?x?(this.selection.set(null),this.onNodeUnselect.emit({originalEvent:t,node:e})):(this.selection.set(e),this.onNodeSelect.emit({originalEvent:t,node:e})):this.selectionMode()===`multiple`&&(x?(this.selection.set(this.selection().filter((Ut,xt)=>xt!=d)),this.onNodeUnselect.emit({originalEvent:t,node:e})):(this.selection.set([...this.selection()||[],e]),this.onNodeSelect.emit({originalEvent:t,node:e})))}}findIndexInSelection(t){let e=-1;if(this.selectionMode()&&this.selection()){if(this.selectionMode()===`single`)e=this.selection()==t?0:-1;else if(this.selectionMode()===`multiple`){for(let o=0;o<this.selection().length;o++)if(this.selection()[o]==t){e=o;break}}}return e}isSelected(t){return this.findIndexInSelection(t)!=-1}static ɵfac=function(e){return new(e||n)};static ɵcmp=sa({type:n,selectors:[[`p-organizationChart`],[`p-organization-chart`],[`p-organizationchart`]],contentQueries:function(e,o,d){if(e&1&&(Dm(d,o.templates,JH,4),ym(d,$t,4)),e&2){Jw();let x;Kw(x=Qw())&&(o.togglerIconTemplate=x.first)}},hostVars:2,hostBindings:function(e,o){e&2&&hb(o.cn(o.cx(`root`),o.styleClass()))},inputs:{value:[1,`value`],styleClass:[1,`styleClass`],selectionMode:[1,`selectionMode`],collapsible:[1,`collapsible`],preserveSpace:[1,`preserveSpace`],selection:[1,`selection`]},outputs:{selection:`selectionChange`,onNodeSelect:`onNodeSelect`,onNodeUnselect:`onNodeUnselect`,onNodeExpand:`onNodeExpand`,onNodeCollapse:`onNodeCollapse`},features:[Al([O,{provide:_t,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],decls:1,vars:1,consts:[[`pOrganizationChartNode`,``,3,`class`,`collapsible`,`pt`,`unstyled`,`node`,`pBind`],[`pOrganizationChartNode`,``,3,`collapsible`,`pt`,`unstyled`,`node`,`pBind`]],template:function(e,o){e&1&&Aw(0,jt,1,7,`table`,0),e&2&&xw(o.root?0:-1)},dependencies:[Gl,Ct,XH,F,L],encapsulation:2})}return n})();var bt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Ro({type:n});static ɵinj=Zn({imports:[I,Ct,XH,XH]})}return n})();var hn=(()=>{class n{constructor(){this.data=[{label:`CEO`,expanded:!0,children:[{label:`CTO`,expanded:!0,children:[{label:`Dev Lead`},{label:`QA Lead`}]},{label:`CFO`,expanded:!0,children:[{label:`Accountant`}]}]}]}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=sa({type:n,selectors:[[`uk-organizationchart-demo`]],decls:6,vars:1,consts:[[1,`demo-page__title`],[1,`demo-section`],[1,`demo-section__title`],[3,`value`]],template:function(e,o){e&1&&(Ws(0,`h1`,0),wb(1,`OrganizationChart`),wl(),Ws(2,`section`,1)(3,`h2`,2),wb(4,`Basic`),wl(),um(5,`p-organizationChart`,3),wl()),e&2&&(MC(5),cm(`value`,o.data))},dependencies:[bt,I],encapsulation:2})}}return n})();export{hn as OrganizationChartDemo};