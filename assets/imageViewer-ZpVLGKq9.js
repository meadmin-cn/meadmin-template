import{d as S,m as J,r as E,az as xe,y as Ee,p as w,A as U,D as ze,W as ee,o as C,w as c,k as n,$ as Ne,a as v,P as te,Q as i,u as t,X as z,c as R,L as B,ab as Le,T as ae,j as le,t as Oe,aa as Re,as as Te,R as $e,a0 as Se,E as Ve,ac as se}from"./core-C4-oPvXL.js";import{i as ne,e as Ae,f as oe,m as De,g as Pe,h as Ye,j as Me,k as Xe,l as O,E as Be,n as b,o as Fe,t as F,p as N,q as je,w as He}from"./index-gAuTWnPj.js";import{h as We,j as qe,b as Ke,k as Ze,f as Ge,z as Qe,n as Je,r as Ue,o as et}from"./elIcon-CvLeSQbC.js";import{E as re}from"./index-DEe-wAkk.js";import"./mock-DBzxB1z9.js";const tt=Ae({urlList:{type:oe(Array),default:()=>De([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:oe(String)}}),at={close:()=>!0,switch:f=>ne(f),rotate:f=>ne(f)},st=S({name:"ElImageViewer"}),nt=S({...st,props:tt,emits:at,setup(f,{expose:k,emit:g}){var y;const o=f,I={CONTAIN:{name:"contain",icon:J(qe)},ORIGINAL:{name:"original",icon:J(We)}};let V,j="";const{t:ie}=Ye(),s=Me("image-viewer"),{nextZIndex:ce}=Xe(),A=E(),H=E([]),W=xe(),x=E(!0),u=E(o.initialIndex),T=Ee(I.CONTAIN),l=E({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),ue=E((y=o.zIndex)!=null?y:ce()),de=w(()=>{const{urlList:e}=o;return e.length<=1}),q=w(()=>u.value===0),K=w(()=>u.value===o.urlList.length-1),fe=w(()=>o.urlList[u.value]),me=w(()=>[s.e("btn"),s.e("prev"),s.is("disabled",!o.infinite&&q.value)]),pe=w(()=>[s.e("btn"),s.e("next"),s.is("disabled",!o.infinite&&K.value)]),ve=w(()=>{const{scale:e,deg:r,offsetX:a,offsetY:d,enableTransition:m}=l.value;let p=a/e,h=d/e;const L=r*Math.PI/180,G=Math.cos(L),Q=Math.sin(L);p=p*G+h*Q,h=h*G-a/e*Q;const X={transform:`scale(${e}) rotate(${r}deg) translate(${p}px, ${h}px)`,transition:m?"transform .3s":""};return T.value.name===I.CONTAIN.name&&(X.maxWidth=X.maxHeight="100%"),X}),ge=w(()=>`${u.value+1} / ${o.urlList.length}`);function $(){he(),V==null||V(),document.body.style.overflow=j,g("close")}function _e(){const e=F(a=>{switch(a.code){case N.esc:o.closeOnPressEscape&&$();break;case N.space:D();break;case N.left:Y();break;case N.up:_("zoomIn");break;case N.right:M();break;case N.down:_("zoomOut");break}}),r=F(a=>{const d=a.deltaY||a.deltaX;_(d<0?"zoomIn":"zoomOut",{zoomRate:o.zoomRate,enableTransition:!1})});W.run(()=>{O(document,"keydown",e),O(document,"wheel",r)})}function he(){W.stop()}function we(){x.value=!1}function be(e){x.value=!1,e.target.alt=ie("el.image.error")}function ke(e){if(x.value||e.button!==0||!A.value)return;l.value.enableTransition=!1;const{offsetX:r,offsetY:a}=l.value,d=e.pageX,m=e.pageY,p=F(L=>{l.value={...l.value,offsetX:r+L.pageX-d,offsetY:a+L.pageY-m}}),h=O(document,"mousemove",p);O(document,"mouseup",()=>{h()}),e.preventDefault()}function Z(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function D(){if(x.value)return;const e=je(I),r=Object.values(I),a=T.value.name,m=(r.findIndex(p=>p.name===a)+1)%e.length;T.value=I[e[m]],Z()}function P(e){const r=o.urlList.length;u.value=(e+r)%r}function Y(){q.value&&!o.infinite||P(u.value-1)}function M(){K.value&&!o.infinite||P(u.value+1)}function _(e,r={}){if(x.value)return;const{minScale:a,maxScale:d}=o,{zoomRate:m,rotateDeg:p,enableTransition:h}={zoomRate:o.zoomRate,rotateDeg:90,enableTransition:!0,...r};switch(e){case"zoomOut":l.value.scale>a&&(l.value.scale=Number.parseFloat((l.value.scale/m).toFixed(3)));break;case"zoomIn":l.value.scale<d&&(l.value.scale=Number.parseFloat((l.value.scale*m).toFixed(3)));break;case"clockwise":l.value.deg+=p,g("rotate",l.value.deg);break;case"anticlockwise":l.value.deg-=p,g("rotate",l.value.deg);break}l.value.enableTransition=h}function ye(e){var r;((r=e.detail)==null?void 0:r.focusReason)==="pointer"&&e.preventDefault()}function Ce(){o.closeOnPressEscape&&$()}function Ie(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}return U(fe,()=>{Ve(()=>{const e=H.value[0];e!=null&&e.complete||(x.value=!0)})}),U(u,e=>{Z(),g("switch",e)}),ze(()=>{_e(),V=O("wheel",Ie,{passive:!1}),j=document.body.style.overflow,document.body.style.overflow="hidden"}),k({setActiveItem:P}),(e,r)=>(C(),ee(t(Fe),{to:"body",disabled:!e.teleported},{default:c(()=>[n(Ne,{name:"viewer-fade",appear:""},{default:c(()=>[v("div",{ref_key:"wrapper",ref:A,tabindex:-1,class:i(t(s).e("wrapper")),style:te({zIndex:ue.value})},[n(t(Be),{loop:"",trapped:"","focus-trap-el":A.value,"focus-start-el":"container",onFocusoutPrevented:ye,onReleaseRequested:Ce},{default:c(()=>[v("div",{class:i(t(s).e("mask")),onClick:Le(a=>e.hideOnClickModal&&$(),["self"])},null,10,["onClick"]),z(" CLOSE "),v("span",{class:i([t(s).e("btn"),t(s).e("close")]),onClick:$},[n(t(b),null,{default:c(()=>[n(t(Ke))]),_:1})],2),z(" ARROW "),t(de)?z("v-if",!0):(C(),R(ae,{key:0},[v("span",{class:i(t(me)),onClick:Y},[n(t(b),null,{default:c(()=>[n(t(Ze))]),_:1})],2),v("span",{class:i(t(pe)),onClick:M},[n(t(b),null,{default:c(()=>[n(t(Ge))]),_:1})],2)],64)),e.showProgress?(C(),R("div",{key:1,class:i([t(s).e("btn"),t(s).e("progress")])},[B(e.$slots,"progress",{activeIndex:u.value,total:e.urlList.length},()=>[le(Oe(t(ge)),1)])],2)):z("v-if",!0),z(" ACTIONS "),v("div",{class:i([t(s).e("btn"),t(s).e("actions")])},[v("div",{class:i(t(s).e("actions__inner"))},[B(e.$slots,"toolbar",{actions:_,prev:Y,next:M,reset:D,activeIndex:u.value},()=>[n(t(b),{onClick:a=>_("zoomOut")},{default:c(()=>[n(t(Qe))]),_:1},8,["onClick"]),n(t(b),{onClick:a=>_("zoomIn")},{default:c(()=>[n(t(Je))]),_:1},8,["onClick"]),v("i",{class:i(t(s).e("actions__divider"))},null,2),n(t(b),{onClick:D},{default:c(()=>[(C(),ee(Re(t(T).icon)))]),_:1}),v("i",{class:i(t(s).e("actions__divider"))},null,2),n(t(b),{onClick:a=>_("anticlockwise")},{default:c(()=>[n(t(Ue))]),_:1},8,["onClick"]),n(t(b),{onClick:a=>_("clockwise")},{default:c(()=>[n(t(et))]),_:1},8,["onClick"])])],2)],2),z(" CANVAS "),v("div",{class:i(t(s).e("canvas"))},[(C(!0),R(ae,null,Te(e.urlList,(a,d)=>$e((C(),R("img",{ref_for:!0,ref:m=>H.value[d]=m,key:a,src:a,style:te(t(ve)),class:i(t(s).e("img")),crossorigin:e.crossorigin,onLoad:we,onError:be,onMousedown:ke},null,46,["src","crossorigin"])),[[Se,d===u.value]])),128))],2),B(e.$slots,"default")]),_:3},8,["focus-trap-el"])],6)]),_:3})]),_:3},8,["disabled"]))}});var ot=Pe(nt,[["__file","image-viewer.vue"]]);const lt=He(ot);function rt(f){const k=document.createElement("div"),g=n(lt,Object.assign({teleported:!0,onClose:function(){se(null,k),typeof f.onClose=="function"&&f.onClose.call(this)}},f));return se(g,k),document.body.appendChild(k.firstElementChild),g}const it={class:"image-viewer"},ct=S({setup:!0,name:"ImageViewer",getComponents:()=>[re]}),vt=S({...ct,__name:"imageViewer",setup(f){const k=()=>rt({urlList:["https://scpic.chinaz.net/Files/pic/pic6/pic1281.jpg","https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg","https://tse3-mm.cn.bing.net/th/id/OIP-C.n0_p3rYRuofABd3XudbZnAHaEo?pid=ImgDet&rs=1"]});return(g,y)=>{const o=re;return C(),R("div",it,[n(o,{onClick:y[0]||(y[0]=I=>k())},{default:c(()=>y[1]||(y[1]=[le(" 预览 ")])),_:1})])}}});export{vt as default};
