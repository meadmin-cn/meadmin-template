import{d as N,n as J,p as w,c as j,o as S,a as R,X as U,L as E,Q as p,u as e,t as ae,k as M,w as m,W as q,aa as se,P as W,l as te,r as k,A as Q,D as ne,E as re,aE as ie,$ as de,R as ue,M as ce,at as fe,a0 as ve,J as ye}from"./core-C4-oPvXL.js";import{u as pe,a as me,E as ge,b as Ce}from"./index-CMAgUPwQ.js";import{e as X,aj as be,g as H,h as he,b1 as Ee,b6 as ke,n as we,V as Se,f as Y,k as De,ac as Z,aY as Ie,aJ as Te,b7 as Be,b8 as G,Q as Ae,b9 as Fe,j as Pe,E as $e,o as Le,w as Oe}from"./index-gAuTWnPj.js";import{c as Re}from"./refs-BScKkwek.js";import{U as _}from"./event-BB_Ol6Sd.js";import{f as Me}from"./index-DEe-wAkk.js";const x=Symbol("dialogInjectionKey"),ee=X({center:Boolean,alignCenter:Boolean,closeIcon:{type:be},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,headerClass:String,bodyClass:String,footerClass:String,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ne={close:()=>!0},ze=N({name:"ElDialogContent"}),Ve=N({...ze,props:ee,emits:Ne,setup(l,{expose:r}){const t=l,{t:F}=he(),{Close:n}=ke,{dialogRef:f,headerRef:g,bodyId:C,ns:a,style:i}=J(x),{focusTrapRef:v}=J(Ee),y=w(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center}]),b=Re(v,f),u=w(()=>t.draggable),c=w(()=>t.overflow),{resetPosition:D}=pe(f,g,u,c);return r({resetPosition:D}),(s,P)=>(S(),j("div",{ref:e(b),class:p(e(y)),style:W(e(i)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:g,class:p([e(a).e("header"),s.headerClass,{"show-close":s.showClose}])},[E(s.$slots,"header",{},()=>[R("span",{role:"heading","aria-level":s.ariaLevel,class:p(e(a).e("title"))},ae(s.title),11,["aria-level"])]),s.showClose?(S(),j("button",{key:0,"aria-label":e(F)("el.dialog.close"),class:p(e(a).e("headerbtn")),type:"button",onClick:I=>s.$emit("close")},[M(e(we),{class:p(e(a).e("close"))},{default:m(()=>[(S(),q(se(s.closeIcon||e(n))))]),_:1},8,["class"])],10,["aria-label","onClick"])):U("v-if",!0)],2),R("div",{id:e(C),class:p([e(a).e("body"),s.bodyClass])},[E(s.$slots,"default")],10,["id"]),s.$slots.footer?(S(),j("footer",{key:0,class:p([e(a).e("footer"),s.footerClass])},[E(s.$slots,"footer")],2)):U("v-if",!0)],6))}});var je=H(Ve,[["__file","dialog-content.vue"]]);const Ue=X({...ee,appendToBody:Boolean,appendTo:{type:Y([String,Object]),default:"body"},beforeClose:{type:Y(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,headerClass:String,bodyClass:String,footerClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[_]:l=>Se(l),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ke=(l,r)=>{var t;const n=te().emit,{nextZIndex:f}=De();let g="";const C=Z(),a=Z(),i=k(!1),v=k(!1),y=k(!1),b=k((t=l.zIndex)!=null?t:f());let u,c;const D=Ie("namespace",Be),s=w(()=>{const d={},h=`--${D.value}-dialog`;return l.fullscreen||(l.top&&(d[`${h}-margin-top`]=l.top),l.width&&(d[`${h}-width`]=Te(l.width))),d}),P=w(()=>l.alignCenter?{display:"flex"}:{});function I(){n("opened")}function z(){n("closed"),n(_,!1),l.destroyOnClose&&(y.value=!1)}function V(){n("close")}function $(){c==null||c(),u==null||u(),l.openDelay&&l.openDelay>0?{stop:u}=G(()=>L(),l.openDelay):L()}function T(){u==null||u(),c==null||c(),l.closeDelay&&l.closeDelay>0?{stop:c}=G(()=>O(),l.closeDelay):O()}function B(){function d(h){h||(v.value=!0,i.value=!1)}l.beforeClose?l.beforeClose(d):T()}function A(){l.closeOnClickModal&&B()}function L(){Ae&&(i.value=!0)}function O(){i.value=!1}function o(){n("openAutoFocus")}function K(){n("closeAutoFocus")}function oe(d){var h;((h=d.detail)==null?void 0:h.focusReason)==="pointer"&&d.preventDefault()}l.lockScroll&&me(i);function le(){l.closeOnPressEscape&&B()}return Q(()=>l.modelValue,d=>{d?(v.value=!1,$(),y.value=!0,b.value=Fe(l.zIndex)?f():b.value++,re(()=>{n("open"),r.value&&(r.value.parentElement.scrollTop=0,r.value.parentElement.scrollLeft=0,r.value.scrollTop=0)})):i.value&&T()}),Q(()=>l.fullscreen,d=>{r.value&&(d?(g=r.value.style.transform,r.value.style.transform=""):r.value.style.transform=g)}),ne(()=>{l.modelValue&&(i.value=!0,y.value=!0,$())}),{afterEnter:I,afterLeave:z,beforeLeave:V,handleClose:B,onModalClick:A,close:T,doClose:O,onOpenAutoFocus:o,onCloseAutoFocus:K,onCloseRequested:le,onFocusoutPrevented:oe,titleId:C,bodyId:a,closed:v,style:s,overlayDialogStyle:P,rendered:y,visible:i,zIndex:b}},Je=N({name:"ElDialog",inheritAttrs:!1}),Qe=N({...Je,props:Ue,emits:qe,setup(l,{expose:r}){const t=l,F=ie();Me({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},w(()=>!!F.title));const n=Pe("dialog"),f=k(),g=k(),C=k(),{visible:a,titleId:i,bodyId:v,style:y,overlayDialogStyle:b,rendered:u,zIndex:c,afterEnter:D,afterLeave:s,beforeLeave:P,handleClose:I,onModalClick:z,onOpenAutoFocus:V,onCloseAutoFocus:$,onCloseRequested:T,onFocusoutPrevented:B}=Ke(t,f);ye(x,{dialogRef:f,headerRef:g,bodyId:v,ns:n,rendered:u,style:y});const A=Ce(z),L=w(()=>t.draggable&&!t.fullscreen);return r({visible:a,dialogContentRef:C,resetPosition:()=>{var o;(o=C.value)==null||o.resetPosition()}}),(o,K)=>(S(),q(e(Le),{to:o.appendTo,disabled:o.appendTo!=="body"?!1:!o.appendToBody},{default:m(()=>[M(de,{name:"dialog-fade",onAfterEnter:e(D),onAfterLeave:e(s),onBeforeLeave:e(P),persisted:""},{default:m(()=>[ue(M(e(ge),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(c)},{default:m(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(i),"aria-describedby":e(v),class:p(`${e(n).namespace.value}-overlay-dialog`),style:W(e(b)),onClick:e(A).onClick,onMousedown:e(A).onMousedown,onMouseup:e(A).onMouseup},[M(e($e),{loop:"",trapped:e(a),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e($),onFocusoutPrevented:e(B),onReleaseRequested:e(T)},{default:m(()=>[e(u)?(S(),q(je,ce({key:0,ref_key:"dialogContentRef",ref:C},o.$attrs,{center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(L),overflow:o.overflow,fullscreen:o.fullscreen,"header-class":o.headerClass,"body-class":o.bodyClass,"footer-class":o.footerClass,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e(I)}),fe({header:m(()=>[o.$slots.title?E(o.$slots,"title",{key:1}):E(o.$slots,"header",{key:0,close:e(I),titleId:e(i),titleClass:e(n).e("title")})]),default:m(()=>[E(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:m(()=>[E(o.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","onClose"])):U("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[ve,e(a)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var Ye=H(Qe,[["__file","dialog.vue"]]);const xe=Oe(Ye);export{xe as E,Ue as a,qe as d,Ke as u};
