import{$a as zt,$i as qi,$n as ZH,$r as gm,Ai as mS,At as Lf,Br as em,Bt as Nb,Da as uw,Ea as um,En as Ue,Et as Kw,Fr as e2,Ha as xw,Hn as XH,Ht as Nr,Ii as ne,Jr as g,La as wb,Li as nm,Ln as WV,Nr as da,Or as cm,Pa as vm,Pr as dh,Pt as MC,Ra as wl,Rn as Ws,S as CT,Sn as Tm,X as HV,Z as H_,Zt as P,en as Pm,fr as am,ft as JV,gt as Jw,h as Aw,hr as b,j as Em,l as $w,na as qw,nr as Zb,oi as hb,on as Qw,p as Al,pi as jm,qi as pm,ri as hS,sa as rt,ua as sa,un as Rf,yr as bm}from"./chunk-CXRXTJ2s.js";import{r as m}from"./chunk-Br98bhvT.js";import"./chunk-TSmMf5t-.js";import{n as L}from"./chunk-CerPySWC.js";import{n as nt}from"./chunk-Cw3svWHP.js";import{n as C,t as B}from"./chunk-Bc7G3ZMk.js";import{d as te,f as un,r as Rt,t as Ie$1,u as sn}from"./chunk-53wldAuq.js";import"./chunk-Da0TIp29.js";import{t as c}from"./chunk-D1ovfVna.js";import{g as tt,h as Ie$2}from"./main-4W6E6VEG.js";var _e=`
    .p-colorpicker {
        display: inline-block;
        position: relative;
    }

    .p-colorpicker-dragging {
        cursor: pointer;
    }

    .p-colorpicker-preview {
        width: dt('colorpicker.preview.width');
        height: dt('colorpicker.preview.height');
        padding: 0;
        border: 0 none;
        border-radius: dt('colorpicker.preview.border.radius');
        transition:
            background dt('colorpicker.transition.duration'),
            color dt('colorpicker.transition.duration'),
            border-color dt('colorpicker.transition.duration'),
            outline-color dt('colorpicker.transition.duration'),
            box-shadow dt('colorpicker.transition.duration');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-colorpicker-preview:enabled:focus-visible {
        border-color: dt('colorpicker.preview.focus.border.color');
        box-shadow: dt('colorpicker.preview.focus.ring.shadow');
        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');
        outline-offset: dt('colorpicker.preview.focus.ring.offset');
    }

    .p-colorpicker-panel {
        background: dt('colorpicker.panel.background');
        border: 1px solid dt('colorpicker.panel.border.color');
        border-radius: dt('colorpicker.panel.border.radius');
        box-shadow: dt('colorpicker.panel.shadow');
        width: 193px;
        height: 166px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-colorpicker-panel-inline {
        box-shadow: none;
        position: static;
    }

    .p-colorpicker-content {
        position: relative;
    }

    .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 8px;
        position: absolute;
    }

    .p-colorpicker-color-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .p-colorpicker-color-handle {
        position: absolute;
        inset-block-start: 0px;
        inset-inline-start: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
        border-color: dt('colorpicker.handle.color');
    }

    .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 167px;
        position: absolute;
        opacity: 0.85;
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    }

    .p-colorpicker-hue-handle {
        position: absolute;
        inset-block-start: 150px;
        inset-inline-start: 0px;
        width: 21px;
        margin-inline-start: -2px;
        margin-block-start: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
        border-color: dt('colorpicker.handle.color');
    }
`;var Se=[`input`];var Be=[`overlay`];var Ee=[`colorSelector`];var Ve=[`colorHandle`];var Te=[`hue`];var Pe=[`hueHandle`];function Ie(n,De){if(n&1){let e=$w();Ws(0,`input`,9,2),gm(`click`,function(){Rf(e);return Lf(qw().onInputClick())})(`keydown`,function(i){Rf(e);return Lf(qw().onInputKeydown(i))})(`focus`,function(){Rf(e);return Lf(qw().onInputFocus())}),wl()}if(n&2){let e=qw();hb(e.cx(`preview`)),bm(`background-color`,e.inputBgColor),cm(`pAutoFocus`,e.autofocus())(`pBind`,e.ptm(`preview`)),am(`tabindex`,e.tabindex())(`disabled`,e.$disabled()?``:void 0)(`id`,e.inputId())(`aria-label`,e.ariaLabel)}}function Le(n,De){if(n&1){let e=$w();Ws(0,`div`,10)(1,`div`,10)(2,`div`,11,3),gm(`touchstart`,function(i){Rf(e);return Lf(qw().onColorDragStart(i))})(`touchmove`,function(i){Rf(e);return Lf(qw().onDrag(i))})(`touchend`,function(){Rf(e);return Lf(qw().onDragEnd())})(`mousedown`,function(i){Rf(e);return Lf(qw().onColorMousedown(i))}),Ws(4,`div`,10),um(5,`div`,10,4),wl()(),Ws(7,`div`,12,5),gm(`mousedown`,function(i){Rf(e);return Lf(qw().onHueMousedown(i))})(`touchstart`,function(i){Rf(e);return Lf(qw().onHueDragStart(i))})(`touchmove`,function(i){Rf(e);return Lf(qw().onDrag(i))})(`touchend`,function(){Rf(e);return Lf(qw().onDragEnd())}),um(9,`div`,10,6),wl()()()}if(n&2){let e=qw();hb(e.cx(`panel`)),cm(`pBind`,e.ptm(`panel`)),MC(),hb(e.cx(`content`)),cm(`pBind`,e.ptm(`content`)),MC(),hb(e.cx(`colorSelector`)),cm(`pBind`,e.ptm(`colorSelector`)),MC(2),hb(e.cx(`colorBackground`)),cm(`pBind`,e.ptm(`colorBackground`)),MC(),hb(e.cx(`colorHandle`)),cm(`pBind`,e.ptm(`colorHandle`)),MC(2),hb(e.cx(`hue`)),cm(`pBind`,e.ptm(`hue`)),MC(2),hb(e.cx(`hueHandle`)),cm(`pBind`,e.ptm(`hueHandle`))}}var Ne=`
.p-colorpicker-input { inline-size: 2.5rem; block-size: 2.5rem; padding: .125rem; cursor: pointer; border-radius: dt('inputtext.border.radius'); }
.p-colorpicker-input:focus-visible { outline: 2px solid dt('inputtext.focus.border.color'); outline-offset: 2px; }
.p-colorpicker-input.p-invalid { border-color: dt('inputtext.invalid.border.color'); }
.p-colorpicker-input:disabled { cursor: default; opacity: .6; }
.p-colorpicker-clear { cursor: pointer; }
.p-colorpicker-clear:disabled { cursor: default; opacity: .6; }
`;var Oe={root:({instance:n})=>[`p-colorpicker p-component`,{"p-colorpicker-overlay":!n.inline(),"p-colorpicker-dragging":n.colorDragging||n.hueDragging}],preview:({instance:n})=>[`p-colorpicker-preview`,{"p-disabled":n.$disabled()}],panel:({instance:n})=>[`p-colorpicker-panel`,{"p-colorpicker-panel-inline":n.inline(),"p-disabled":n.$disabled()}],content:`p-colorpicker-content`,colorSelector:`p-colorpicker-color-selector`,colorBackground:`p-colorpicker-color-background`,colorHandle:`p-colorpicker-color-handle`,hue:`p-colorpicker-hue`,hueHandle:`p-colorpicker-hue-handle`};var ye=(()=>{class n extends Nr{name=`colorpicker`;style=`${_e}
${Ne}`;classes=Oe;static ɵfac=(()=>{let e;return function(i){return(e||(e=dh(n)))(i||n)}})();static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var Me=(()=>{class n{element=g(Ue);invalid=zt(!1,{transform:CT});disabled=zt(!1,{transform:CT});required=zt(!1,{transform:CT});readonly=zt(!1,{transform:CT});ariaLabel=zt();ariaDescribedBy=zt();inputId=zt();name=zt();tabindex=zt();colorChange=HV();touch=HV();onInputChange=HV({alias:`onInput`});onChange=HV();onFocus=HV();onBlur=HV();onClear=HV();onInput(e){let t=e.target.value.toUpperCase();this.colorChange.emit(t),this.onInputChange.emit({originalEvent:e,value:t})}onNativeBlur(e){this.touch.emit(),this.onBlur.emit(e)}handleChange(e){this.onChange.emit({originalEvent:e,value:e.target.value.toUpperCase()})}clear(e=`#000000`){this.disabled()||this.readonly()||(this.element.nativeElement.value=e,this.element.nativeElement.dispatchEvent(new Event(`input`,{bubbles:!0})),this.element.nativeElement.dispatchEvent(new Event(`change`,{bubbles:!0})),this.onClear.emit(e.toUpperCase()),this.element.nativeElement.focus())}static ɵfac=function(t){return new(t||n)};static ɵdir=rt({type:n,selectors:[[`input`,`type`,`color`,`pColorPicker`,``]],hostAttrs:[1,`p-colorpicker-input`,`p-component`],hostVars:13,hostBindings:function(t,i){t&1&&gm(`input`,function(r){return i.onInput(r)})(`change`,function(r){return i.handleChange(r)})(`focus`,function(r){return i.onFocus.emit(r)})(`blur`,function(r){return i.onNativeBlur(r)}),t&2&&(pm(`readOnly`,i.readonly())(`disabled`,i.disabled())(`required`,i.required()),am(`data-pc-name`,`colorpicker`)(`data-pc-section`,`input`)(`data-pc-invalid`,i.invalid()||null)(`aria-label`,i.ariaLabel()||null)(`aria-describedby`,i.ariaDescribedBy()||null)(`id`,i.inputId()||null)(`name`,i.name()||null)(`tabindex`,i.tabindex()??null),Tm(`p-invalid`,i.invalid()))},inputs:{invalid:[1,`invalid`],disabled:[1,`disabled`],required:[1,`required`],readonly:[1,`readonly`],ariaLabel:[1,`ariaLabel`],ariaDescribedBy:[1,`ariaDescribedBy`],inputId:[1,`inputId`],name:[1,`name`],tabindex:[1,`tabindex`]},outputs:{colorChange:`colorChange`,touch:`touch`,onInputChange:`onInput`,onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`,onClear:`onClear`},exportAs:[`pColorPicker`]})}return n})();var Ae={provide:te,useExisting:qi(()=>Re),multi:!0};var we=new b(`COLORPICKER_INSTANCE`);var Re=(()=>{class n extends c{overlayService=g(ZH);componentName=`ColorPicker`;$pcColorPicker=g(we,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),JV()&&console.warn('`<p-colorpicker>` is deprecated and will be removed in a future major version. Use a native `<input type="color" pColorPicker>` instead.')}styleClass=zt();showTransitionOptions=zt(`.12s cubic-bezier(0, 0, 0.2, 1)`);hideTransitionOptions=zt(`.1s linear`);inline=zt(void 0,{transform:CT});format=zt(`hex`);tabindex=zt();inputId=zt();autoZIndex=zt(!0,{transform:CT});autofocus=zt(void 0,{transform:CT});defaultColor=zt(`ff0000`);appendTo=zt(void 0);overlayOptions=zt(void 0);motionOptions=zt(void 0);onChange=HV();onShow=HV();onHide=HV();inputViewChild=WV(`input`);overlayViewChild=WV.required(`overlay`);$appendTo=da(()=>this.appendTo()||this.config.overlayAppendTo());value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=g(ye);set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(e2.ARIA)[e2.SELECT_COLOR]}onHueMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.$disabled()||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.$disabled()||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]),this.el.nativeElement.setAttribute(`p-colorpicker-dragging`,`true`))}pickHue(e,t){let i=t?t.pageY:e.pageY,o=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,i-o)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.el.nativeElement.setAttribute(`p-colorpicker-dragging`,`false`),this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,t){let i=t?t.pageX:e.pageX,o=t?t.pageY:e.pageY,r=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),a=r.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),m=r.left+this.document.body.scrollLeft,C=Math.floor(100*Math.max(0,Math.min(150,i-m))/150),xe=Math.floor(100*(150-Math.max(0,Math.min(150,o-a)))/150);this.value=this.validateHSB({h:this.value.h,s:C,b:xe}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format()){case`hex`:e=`#`+this.HSBtoHEX(this.value);break;case`rgb`:e=this.HSBtoRGB(this.value);break;case`hsb`:e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor=`#`+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+`px`,this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+`px`,this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+`px`),this.inputBgColor=`#`+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayBeforeEnter(){this.inline()||(this.updateColorSelector(),this.updateUI(),this.onShow.emit({}))}onOverlayAfterLeave(){this.inline()||this.onHide.emit({})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case`Space`:this.togglePanel(),e.preventDefault();break;case`Escape`:case`Tab`:this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:`document`;this.documentMousemoveListener=this.renderer.listen(e,`mousemove`,t=>{this.colorDragging&&this.pickColor(t),this.hueDragging&&this.pickHue(t)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:`document`;this.documentMouseupListener=this.renderer.listen(e,`mouseup`,()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){let t=6-e.length;if(t>0){let i=[];for(let o=0;o<t;o++)i.push(`0`);i.push(e),e=i.join(``)}return e}HEXtoRGB(e){if(!e||typeof e!=`string`)return{r:0,g:0,b:0};let t=parseInt(e.indexOf(`#`)>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){let t={h:0,s:0,b:0},i=Math.min(e.r,e.g,e.b),o=Math.max(e.r,e.g,e.b),r=o-i;return t.b=o,t.s=o!=0?255*r/o:0,t.s!=0?e.r==o?t.h=(e.g-e.b)/r:e.g==o?t.h=2+(e.b-e.r)/r:t.h=4+(e.r-e.g)/r:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}HSBtoRGB(e){let t={r:0,g:0,b:0},i=e.h,o=e.s*255/100,r=e.b*255/100;if(o==0)t={r,g:r,b:r};else{let a=r,m=(255-o)*r/255,C=(a-m)*(i%60)/60;i==360&&(i=0),i<60?(t.r=a,t.b=m,t.g=m+C):i<120?(t.g=a,t.b=m,t.r=a-C):i<180?(t.g=a,t.r=m,t.b=m+C):i<240?(t.b=a,t.r=m,t.g=a-C):i<300?(t.b=a,t.g=m,t.r=m+C):i<360?(t.r=a,t.g=m,t.b=a-C):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}RGBtoHEX(e){let t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(let i in t)t[i].length==1&&(t[i]=`0`+t[i]);return t.join(``)}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onAfterViewInit(){this.inline()&&(this.updateColorSelector(),this.updateUI())}writeControlValue(e){if(e)switch(this.format()){case`hex`:this.value=this.HEXtoHSB(e);break;case`rgb`:this.value=this.RGBtoHSB(e);break;case`hsb`:this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor());this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null);let e=this.overlayViewChild();e?.nativeElement&&this.autoZIndex()&&m.clear(e?.nativeElement)}static ɵfac=function(t){return new(t||n)};static ɵcmp=sa({type:n,selectors:[[`p-colorPicker`],[`p-colorpicker`],[`p-color-picker`]],viewQuery:function(t,i){if(t&1&&(Em(i.inputViewChild,Se,5)(i.overlayViewChild,Be,5),vm(Ee,5)(Ve,5)(Te,5)(Pe,5)),t&2){Jw(2);let o;Kw(o=Qw())&&(i.colorSelector=o.first),Kw(o=Qw())&&(i.colorHandle=o.first),Kw(o=Qw())&&(i.hue=o.first),Kw(o=Qw())&&(i.hueHandle=o.first)}},hostVars:2,hostBindings:function(t,i){t&2&&hb(i.cn(i.cx(`root`),i.styleClass()))},inputs:{styleClass:[1,`styleClass`],showTransitionOptions:[1,`showTransitionOptions`],hideTransitionOptions:[1,`hideTransitionOptions`],inline:[1,`inline`],format:[1,`format`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],autoZIndex:[1,`autoZIndex`],autofocus:[1,`autofocus`],defaultColor:[1,`defaultColor`],appendTo:[1,`appendTo`],overlayOptions:[1,`overlayOptions`],motionOptions:[1,`motionOptions`]},outputs:{onChange:`onChange`,onShow:`onShow`,onHide:`onHide`},features:[Al([Ae,ye,{provide:we,useExisting:n},{provide:H_,useExisting:n}]),uw([L]),em],decls:5,vars:10,consts:[[`overlay`,``],[`content`,``],[`input`,``],[`colorSelector`,``],[`colorHandle`,``],[`hue`,``],[`hueHandle`,``],[`type`,`text`,`readonly`,``,3,`class`,`backgroundColor`,`pAutoFocus`,`pBind`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`inline`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[`type`,`text`,`readonly`,``,3,`click`,`keydown`,`focus`,`pAutoFocus`,`pBind`],[3,`pBind`],[3,`touchstart`,`touchmove`,`touchend`,`mousedown`,`pBind`],[3,`mousedown`,`touchstart`,`touchmove`,`touchend`,`pBind`]],template:function(t,i){if(t&1){let o=$w();Aw(0,Ie,2,10,`input`,7),Ws(1,`p-overlay`,8,0),jm(`visibleChange`,function(a){return Rf(o),Nb(i.overlayVisible,a)||(i.overlayVisible=a),Lf(a)}),gm(`onBeforeEnter`,function(){return i.onOverlayBeforeEnter()})(`onAfterLeave`,function(){return i.onOverlayAfterLeave()})(`onHide`,function(){return i.hide()}),nm(3,Le,11,21,`ng-template`,null,1,Zb),wl()}t&2&&(xw(i.inline()?-1:0),MC(),cm(`hostAttrSelector`,i.$attrSelector),Pm(`visible`,i.overlayVisible),cm(`options`,i.overlayOptions())(`target`,`@parent`)(`inline`,i.inline())(`appendTo`,i.$appendTo())(`unstyled`,i.unstyled())(`pt`,i.ptm(`pcOverlay`))(`motionOptions`,i.motionOptions()))},dependencies:[C,B,XH,L,nt,tt,Ie$2],encapsulation:2})}return n})();var Ct=(()=>{class n{constructor(){this.color=ne(`#3357FF`)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=sa({type:n,selectors:[[`uk-colorpicker-demo`]],decls:20,vars:5,consts:[[1,`demo-page__title`],[1,`demo-page__note`],[1,`demo-section`],[1,`demo-section__title`],[`type`,`color`,`pColorPicker`,``,3,`ngModelChange`,`ngModel`],[1,`demo-section__row`],[`type`,`color`,`pColorPicker`,``,3,`ngModel`,`disabled`],[`type`,`color`,`pColorPicker`,``,3,`ngModel`,`invalid`]],template:function(t,i){t&1&&(Ws(0,`h1`,0),wb(1,`ColorPicker`),wl(),Ws(2,`p`,1),wb(3,` Native `),Ws(4,`code`),wb(5,`<input type="color" pColorPicker>`),wl(),wb(6,` — the legacy overlay-based `),Ws(7,`code`),wb(8,`p-colorPicker`),wl(),wb(9,` component is deprecated in favor of this directive.
`),wl(),Ws(10,`section`,2)(11,`h2`,3),wb(12,`Basic`),wl(),Ws(13,`input`,4),jm(`ngModelChange`,function(r){return Nb(i.color,r)||(i.color=r),r}),wl(),hS(),wl(),Ws(14,`section`,2)(15,`h2`,3),wb(16,`States`),wl(),Ws(17,`div`,5),um(18,`input`,6),hS(),um(19,`input`,7),hS(),wl()()),t&2&&(MC(13),Pm(`ngModel`,i.color),mS(),MC(5),cm(`ngModel`,i.color())(`disabled`,!0),mS(),MC(),cm(`ngModel`,i.color())(`invalid`,!0),mS())},dependencies:[un,Ie$1,sn,Rt,Me],encapsulation:2})}}return n})();export{Ct as ColorPickerDemo};