import{d as b,r as R,p as U,q as zt,A as ne,c as y,o as i,W as w,L as x,P as fe,u as e,w as f,aa as Oe,Q as B,D as _e,J as Ut,n as At,l as Ft,a as m,t as h,aE as Nt,k as s,$ as Dt,R as je,M as Pe,ab as ae,X as M,a0 as Ot,ay as O,a4 as Ie,j as L,i as E,au as se,T as H,as as Z,F as ve,aw as Be,b7 as xe,E as he,av as He,O as jt}from"./core-C4-oPvXL.js";import{e as re,f as We,aj as Ge,i as qe,aT as xt,g as Y,j as ee,aJ as ze,n as Ue,w as ge,h as Ae,a6 as Ht,E as Wt,o as Gt,ac as qt,c as j,u as Ke,bH as Kt,_ as F,d as ie,b as te,aE as Me,aF as Re,Y as Jt,bI as Zt,bJ as Je,bK as Ze,aR as Qt,bL as be,bM as Fe,bN as Ne,Z as Xt,bO as De,bP as Yt}from"./index-gAuTWnPj.js";import{b as el,L as tl}from"./elIcon-CvLeSQbC.js";import{E as ll}from"./index-CMAgUPwQ.js";import{d as ol,a as al,u as nl,E as Qe}from"./index-BRJ7oqSm.js";import{f as sl,E as Xe}from"./index-DEe-wAkk.js";import{E as Ye,a as et}from"./index-hqSl7NKM.js";import{E as tt}from"./index-DCGwlzzX.js";import{E as lt}from"./index-BYL4ldEu.js";import{E as ye}from"./index-CXi-HPtR.js";import{E as W}from"./index-CSbSf2hP.js";import{f as ot,d as at,e as nt,c as st,E as rt,b as it,a as ut}from"./index-DTJ_BMcp.js";import{E as $e,c as ct,d as dt,_ as mt,b as pt,a as ft}from"./meDarkSwitch-BmEYcyVx.js";import"./mock-DBzxB1z9.js";import"./es.iterator.map-CH6qVYwj.js";import{E as _t}from"./index-Ds_3abiF.js";import{_ as vt}from"./page.vue_vue_type_script_setup_true_name_LayoutPage_lang-B0aeLVFE.js";import{E as ht}from"./index-QECcLlNb.js";import{$ as rl}from"./jquery-B0sf-q38.js";import"./scroll-CkTYXBUz.js";import"./refs-BScKkwek.js";import"./event-BB_Ol6Sd.js";import"./castArray-DUEINfxs.js";import"./validator-5BzNceBX.js";import"./strings-wN4GZIAz.js";import"./dropdown-Dxc3fwJq.js";const il=re({size:{type:[Number,String],values:xt,default:"",validator:$=>qe($)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:Ge},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:We(String),default:"cover"}}),ul={error:$=>$ instanceof Event},cl=b({name:"ElAvatar"}),dl=b({...cl,props:il,emits:ul,setup($,{emit:o}){const t=$,l=ee("avatar"),d=R(!1),r=U(()=>{const{size:c,icon:p,shape:_}=t,V=[l.b()];return zt(c)&&V.push(l.m(c)),p&&V.push(l.m("icon")),_&&V.push(l.m(_)),V}),u=U(()=>{const{size:c}=t;return qe(c)?l.cssVarBlock({size:ze(c)||""}):void 0}),n=U(()=>({objectFit:t.fit}));ne(()=>t.src,()=>d.value=!1);function a(c){d.value=!0,o("error",c)}return(c,p)=>(i(),y("span",{class:B(e(r)),style:fe(e(u))},[(c.src||c.srcSet)&&!d.value?(i(),y("img",{key:0,src:c.src,alt:c.alt,srcset:c.srcSet,style:fe(e(n)),onError:a},null,44,["src","alt","srcset"])):c.icon?(i(),w(e(Ue),{key:1},{default:f(()=>[(i(),w(Oe(c.icon)))]),_:1})):x(c.$slots,"default",{key:2})],6))}});var ml=Y(dl,[["__file","avatar.vue"]]);const gt=ge(ml),bt=Symbol("breadcrumbKey"),pl=re({separator:{type:String,default:"/"},separatorIcon:{type:Ge}}),fl=b({name:"ElBreadcrumb"}),_l=b({...fl,props:pl,setup($){const o=$,{t}=Ae(),l=ee("breadcrumb"),d=R();return Ut(bt,o),_e(()=>{const r=d.value.querySelectorAll(`.${l.e("item")}`);r.length&&r[r.length-1].setAttribute("aria-current","page")}),(r,u)=>(i(),y("div",{ref_key:"breadcrumb",ref:d,class:B(e(l).b()),"aria-label":e(t)("el.breadcrumb.label"),role:"navigation"},[x(r.$slots,"default")],10,["aria-label"]))}});var vl=Y(_l,[["__file","breadcrumb.vue"]]);const hl=re({to:{type:We([String,Object]),default:""},replace:Boolean}),gl=b({name:"ElBreadcrumbItem"}),bl=b({...gl,props:hl,setup($){const o=$,t=Ft(),l=At(bt,void 0),d=ee("breadcrumb"),r=t.appContext.config.globalProperties.$router,u=R(),n=()=>{!o.to||!r||(o.replace?r.replace(o.to):r.push(o.to))};return(a,c)=>{var p,_;return i(),y("span",{class:B(e(d).e("item"))},[m("span",{ref_key:"link",ref:u,class:B([e(d).e("inner"),e(d).is("link",!!a.to)]),role:"link",onClick:n},[x(a.$slots,"default")],2),(p=e(l))!=null&&p.separatorIcon?(i(),w(e(Ue),{key:0,class:B(e(d).e("separator"))},{default:f(()=>[(i(),w(Oe(e(l).separatorIcon)))]),_:1},8,["class"])):(i(),y("span",{key:1,class:B(e(d).e("separator")),role:"presentation"},h((_=e(l))==null?void 0:_.separator),3))],2)}}});var yt=Y(bl,[["__file","breadcrumb-item.vue"]]);const $t=ge(vl,{BreadcrumbItem:yt}),kt=Ht(yt),yl=re({...al,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),$l=ol,kl=b({name:"ElDrawer",inheritAttrs:!1}),Cl=b({...kl,props:yl,emits:$l,setup($,{expose:o}){const t=$,l=Nt();sl({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},U(()=>!!l.title));const d=R(),r=R(),u=ee("drawer"),{t:n}=Ae(),{afterEnter:a,afterLeave:c,beforeLeave:p,visible:_,rendered:V,titleId:C,bodyId:T,zIndex:N,onModalClick:g,onOpenAutoFocus:G,onCloseAutoFocus:q,onFocusoutPrevented:v,onCloseRequested:D,handleClose:A}=nl(t,d),K=U(()=>t.direction==="rtl"||t.direction==="ltr"),J=U(()=>ze(t.size));return o({handleClose:A,afterEnter:a,afterLeave:c}),(I,ue)=>(i(),w(e(Gt),{to:I.appendTo,disabled:I.appendTo!=="body"?!1:!I.appendToBody},{default:f(()=>[s(Dt,{name:e(u).b("fade"),onAfterEnter:e(a),onAfterLeave:e(c),onBeforeLeave:e(p),persisted:""},{default:f(()=>[je(s(e(ll),{mask:I.modal,"overlay-class":I.modalClass,"z-index":e(N),onClick:e(g)},{default:f(()=>[s(e(Wt),{loop:"",trapped:e(_),"focus-trap-el":d.value,"focus-start-el":r.value,onFocusAfterTrapped:e(G),onFocusAfterReleased:e(q),onFocusoutPrevented:e(v),onReleaseRequested:e(D)},{default:f(()=>[m("div",Pe({ref_key:"drawerRef",ref:d,"aria-modal":"true","aria-label":I.title||void 0,"aria-labelledby":I.title?void 0:e(C),"aria-describedby":e(T)},I.$attrs,{class:[e(u).b(),I.direction,e(_)&&"open"],style:e(K)?"width: "+e(J):"height: "+e(J),role:"dialog",onClick:ae(()=>{},["stop"])}),[m("span",{ref_key:"focusStartRef",ref:r,class:B(e(u).e("sr-focus")),tabindex:"-1"},null,2),I.withHeader?(i(),y("header",{key:0,class:B([e(u).e("header"),I.headerClass])},[I.$slots.title?x(I.$slots,"title",{key:1},()=>[M(" DEPRECATED SLOT ")]):x(I.$slots,"header",{key:0,close:e(A),titleId:e(C),titleClass:e(u).e("title")},()=>[I.$slots.title?M("v-if",!0):(i(),y("span",{key:0,id:e(C),role:"heading","aria-level":I.headerAriaLevel,class:B(e(u).e("title"))},h(I.title),11,["id","aria-level"]))]),I.showClose?(i(),y("button",{key:2,"aria-label":e(n)("el.drawer.close"),class:B(e(u).e("close-btn")),type:"button",onClick:e(A)},[s(e(Ue),{class:B(e(u).e("close"))},{default:f(()=>[s(e(el))]),_:1},8,["class"])],10,["aria-label","onClick"])):M("v-if",!0)],2)):M("v-if",!0),e(V)?(i(),y("div",{key:1,id:e(T),class:B([e(u).e("body"),I.bodyClass])},[x(I.$slots,"default")],10,["id"])):M("v-if",!0),I.$slots.footer?(i(),y("div",{key:2,class:B([e(u).e("footer"),I.footerClass])},[x(I.$slots,"footer")],2)):M("v-if",!0)],16,["aria-label","aria-labelledby","aria-describedby","onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[Ot,e(_)]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var wl=Y(Cl,[["__file","drawer.vue"]]);const ke=ge(wl),El=b({name:"ImgEmpty"}),Vl=b({...El,setup($){const o=ee("empty"),t=qt();return(l,d)=>(i(),y("svg",{viewBox:"0 0 79 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[m("defs",null,[m("linearGradient",{id:`linearGradient-1-${e(t)}`,x1:"38.8503086%",y1:"0%",x2:"61.1496914%",y2:"100%"},[m("stop",{"stop-color":`var(${e(o).cssVarBlockName("fill-color-1")})`,offset:"0%"},null,8,["stop-color"]),m("stop",{"stop-color":`var(${e(o).cssVarBlockName("fill-color-4")})`,offset:"100%"},null,8,["stop-color"])],8,["id"]),m("linearGradient",{id:`linearGradient-2-${e(t)}`,x1:"0%",y1:"9.5%",x2:"100%",y2:"90.5%"},[m("stop",{"stop-color":`var(${e(o).cssVarBlockName("fill-color-1")})`,offset:"0%"},null,8,["stop-color"]),m("stop",{"stop-color":`var(${e(o).cssVarBlockName("fill-color-6")})`,offset:"100%"},null,8,["stop-color"])],8,["id"]),m("rect",{id:`path-3-${e(t)}`,x:"0",y:"0",width:"17",height:"36"},null,8,["id"])]),m("g",{id:"Illustrations",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[m("g",{id:"B-type",transform:"translate(-1268.000000, -535.000000)"},[m("g",{id:"Group-2",transform:"translate(1268.000000, 535.000000)"},[m("path",{id:"Oval-Copy-2",d:"M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",fill:`var(${e(o).cssVarBlockName("fill-color-3")})`},null,8,["fill"]),m("polygon",{id:"Rectangle-Copy-14",fill:`var(${e(o).cssVarBlockName("fill-color-7")})`,transform:"translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",points:"13 58 53 58 42 45 2 45"},null,8,["fill"]),m("g",{id:"Group-Copy",transform:"translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"},[m("polygon",{id:"Rectangle-Copy-10",fill:`var(${e(o).cssVarBlockName("fill-color-7")})`,transform:"translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",points:"2.84078316e-14 3 18 3 23 7 5 7"},null,8,["fill"]),m("polygon",{id:"Rectangle-Copy-11",fill:`var(${e(o).cssVarBlockName("fill-color-5")})`,points:"-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"},null,8,["fill"]),m("rect",{id:"Rectangle-Copy-12",fill:`url(#linearGradient-1-${e(t)})`,transform:"translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",x:"38",y:"7",width:"17",height:"36"},null,8,["fill"]),m("polygon",{id:"Rectangle-Copy-13",fill:`var(${e(o).cssVarBlockName("fill-color-2")})`,transform:"translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",points:"24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"},null,8,["fill"])]),m("rect",{id:"Rectangle-Copy-15",fill:`url(#linearGradient-2-${e(t)})`,x:"13",y:"45",width:"40",height:"36"},null,8,["fill"]),m("g",{id:"Rectangle-Copy-17",transform:"translate(53.000000, 45.000000)"},[m("use",{id:"Mask",fill:`var(${e(o).cssVarBlockName("fill-color-8")})`,transform:"translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ","xlink:href":`#path-3-${e(t)}`},null,8,["fill","xlink:href"]),m("polygon",{id:"Rectangle-Copy",fill:`var(${e(o).cssVarBlockName("fill-color-9")})`,mask:`url(#mask-4-${e(t)})`,transform:"translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",points:"7 0 24 0 20 18 7 16.5"},null,8,["fill","mask"])]),m("polygon",{id:"Rectangle-Copy-18",fill:`var(${e(o).cssVarBlockName("fill-color-2")})`,transform:"translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",points:"62 45 79 45 70 58 53 58"},null,8,["fill"])])])])]))}});var Sl=Y(Vl,[["__file","img-empty.vue"]]);const Bl=re({image:{type:String,default:""},imageSize:Number,description:{type:String,default:""}}),Il=b({name:"ElEmpty"}),Ml=b({...Il,props:Bl,setup($){const o=$,{t}=Ae(),l=ee("empty"),d=U(()=>o.description||t("el.table.emptyText")),r=U(()=>({width:ze(o.imageSize)}));return(u,n)=>(i(),y("div",{class:B(e(l).b())},[m("div",{class:B(e(l).e("image")),style:fe(e(r))},[u.image?(i(),y("img",{key:0,src:u.image,ondragstart:"return false"},null,8,["src"])):x(u.$slots,"image",{key:1},()=>[s(Sl)])],6),m("div",{class:B(e(l).e("description"))},[u.$slots.description?x(u.$slots,"description",{key:0}):(i(),y("p",{key:1},h(e(d)),1))],2),u.$slots.default?(i(),y("div",{key:0,class:B(e(l).e("bottom"))},[x(u.$slots,"default")],2)):M("v-if",!0)],2))}});var Rl=Y(Ml,[["__file","empty.vue"]]);const Ct=ge(Rl),Ll={class:"title"},Tl={class:"title-content"},Pl=["title"],zl=["title"],Ul={class:"title"},Al={class:"title-content"},Fl=b({setup:!0,name:"MeSettingMenu",getComponents:()=>[tt,Ye,lt,ye,Xe,et,ke]}),Nl=b({...Fl,__name:"meSettingMenu",setup($){const o=j(),{themeConfig:t}=O(o),l=Ke(),d=Ie(["#409EFF","#1890FF","#304156","#212121","#11A983","#13C2C2","#6959CD","#F5222D"]),r=Ie(["#1d1e1f","#212121","#273352","#ffffff","#191b24","#191a23","#304156","#001628"]),u=()=>{o.clearCache(),l.logOut()};return(n,a)=>{const c=tt,p=Ye,_=lt,V=ye,C=Xe,T=et,N=ke;return i(),w(N,{modelValue:e(o).showSettingMenu,"onUpdate:modelValue":a[16]||(a[16]=g=>e(o).showSettingMenu=g),title:n.$t("项目配置"),size:"300px","append-to-body":""},{default:f(()=>[s(T,{class:"content","label-position":"left","label-width":"170px"},{default:f(()=>[m("div",Ll,[m("div",Tl,h(n.$t("布局")),1)]),m("div",{class:"info",style:fe({"--primaryColor":e(t).primaryColor})},[m("div",{class:B(["layout-base layout-left",{active:e(t).menuType==="sidebar"}]),title:n.$t("左侧菜单模式"),onClick:a[0]||(a[0]=g=>e(t).menuType="sidebar")},null,10,Pl),m("div",{class:B(["layout-base layout-top",{active:e(t).menuType==="top"}]),title:n.$t("顶部菜单混合模式"),onClick:a[1]||(a[1]=g=>e(t).menuType="top")},null,10,zl)],4),m("div",Ul,[m("div",Al,h(n.$t("配置")),1)]),s(p,{label:n.$t("主题色")},{default:f(()=>[s(c,{modelValue:e(t).primaryColor,"onUpdate:modelValue":a[2]||(a[2]=g=>e(t).primaryColor=g),predefine:e(d)},null,8,["modelValue","predefine"])]),_:1},8,["label"]),s(p,{label:n.$t("侧边栏背景色")},{default:f(()=>[s(c,{modelValue:e(t).menuBg,"onUpdate:modelValue":a[3]||(a[3]=g=>e(t).menuBg=g),predefine:e(r)},null,8,["modelValue","predefine"])]),_:1},8,["label"]),s(p,{label:n.$t("折叠侧边栏")},{default:f(()=>[s(_,{modelValue:e(t).menuCollapse,"onUpdate:modelValue":a[4]||(a[4]=g=>e(t).menuCollapse=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("侧边栏展开宽度")},{default:f(()=>[s(V,{modelValue:e(t).menuWidth,"onUpdate:modelValue":a[5]||(a[5]=g=>e(t).menuWidth=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("固定")+n.$t(" ")+n.$t("Header")},{default:f(()=>[s(_,{modelValue:e(t).fixedHeader,"onUpdate:modelValue":a[6]||(a[6]=g=>e(t).fixedHeader=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("顶栏")},{default:f(()=>[s(_,{modelValue:e(t).topBar,"onUpdate:modelValue":a[7]||(a[7]=g=>e(t).topBar=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("菜单")+n.$t(" ")+n.$t("搜索")},{default:f(()=>[s(_,{modelValue:e(t).showSearchMenu,"onUpdate:modelValue":a[8]||(a[8]=g=>e(t).showSearchMenu=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("模式")+n.$t(" ")+n.$t("切换")},{default:f(()=>[s(_,{modelValue:e(t).showDark,"onUpdate:modelValue":a[9]||(a[9]=g=>e(t).showDark=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("Size")+n.$t(" ")+n.$t("切换")},{default:f(()=>[s(_,{modelValue:e(t).showSize,"onUpdate:modelValue":a[10]||(a[10]=g=>e(t).showSize=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("面包屑")},{default:f(()=>[s(_,{modelValue:e(t).breadcrumb,"onUpdate:modelValue":a[11]||(a[11]=g=>e(t).breadcrumb=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("标签栏")},{default:f(()=>[s(_,{modelValue:e(t).tagBar,"onUpdate:modelValue":a[12]||(a[12]=g=>e(t).tagBar=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("标签栏")+n.$t(" ")+n.$t("刷新")+n.$t(" ")+n.$t("按钮")},{default:f(()=>[s(_,{modelValue:e(t).tagBarRefresh,"onUpdate:modelValue":a[13]||(a[13]=g=>e(t).tagBarRefresh=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:n.$t("标签栏")+n.$t(" ")+n.$t("菜单")+n.$t(" ")+n.$t("按钮")},{default:f(()=>[s(_,{modelValue:e(t).tagBarMenu,"onUpdate:modelValue":a[14]||(a[14]=g=>e(t).tagBarMenu=g)},null,8,["modelValue"])]),_:1},8,["label"]),s(C,{style:{width:"100%"},onClick:a[15]||(a[15]=g=>Object.assign(e(t),e(Kt)))},{default:f(()=>[L(h(n.$t("重置")),1)]),_:1}),s(C,{style:{width:"100%",margin:"10px 0"},type:"danger",onClick:u},{default:f(()=>[L(h(n.$t("清除缓存"))+h(n.$t(" "))+h(n.$t("并"))+h(n.$t(" "))+h(n.$t("退出登录")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","title"])}}}),wt=F(Nl,[["__scopeId","data-v-133ec268"]]),Dl=b({setup:!0,name:"MeSetting",getComponents:()=>[E("mel-icon-setting")]}),Ol=b({...Dl,__name:"meSetting",setup($){let o=j();return(t,l)=>{const d=E("mel-icon-setting");return i(),y("div",{class:"me-setting pointer",onClick:l[0]||(l[0]=r=>e(o).showSettingMenu=!0)},[s(d,{class:"icon"})])}}}),Ce=F(Ol,[["__scopeId","data-v-c8485e73"]]),jl=b({setup:!0,name:"Expand",getComponents:()=>[E("mel-icon-expand"),E("mel-icon-fold")]}),xl=b({...jl,__name:"expand",setup($){const{themeConfig:o}=O(j()),t=()=>{o.value.menuCollapse=!o.value.menuCollapse};return(l,d)=>{const r=E("mel-icon-expand"),u=E("mel-icon-fold");return i(),y("div",null,[e(o).menuCollapse?(i(),w(r,{key:0,class:"fold-expand pointer",onClick:t})):(i(),w(u,{key:1,class:"fold-expand pointer",onClick:t}))])}}}),we=F(xl,[["__scopeId","data-v-c82c8d2c"]]),Hl=b({setup:!0,name:"Left",getComponents:()=>[we,kt,$t,W,ot]}),Wl=b({...Hl,__name:"left",setup($){const{themeConfig:o}=O(j()),t=ie(),l=R([]),d=se(),{routes:r}=O(te()),u=n=>{const a=[];let c={children:r.value};n.meta.menuIndex.forEach(p=>{var _,V;c=c.children[p],(_=c.meta)!=null&&_.title&&c.meta.breadcrumb!==!1&&(c.meta.breadcrumb||((V=c.children)==null?void 0:V.filter(C=>{var T;return((T=C.meta)==null?void 0:T.breadcrumb)!==!1}).length)!==1)&&a.push({name:c.name,path:c.path,meta:c.meta,redirect:c.redirect===n.path?void 0:c.redirect})}),l.value=a};return u(d),Me.on(Re.BEFORE_ROUTE_CHANGE,({to:n})=>u(n),!0),(n,a)=>{const c=kt,p=$t,_=W,V=ot;return i(),w(V,{class:"left"},{default:f(()=>[a[0]||(a[0]=m("div",null,null,-1)),s(we),!e(t).isMobile&&e(o).breadcrumb?(i(),w(_,{key:0,"min-size":10,"wrap-style":"display:flex;align-items:center"},{default:f(()=>[s(p,{separator:"/"},{default:f(()=>[(i(!0),y(H,null,Z(e(l),(C,T)=>(i(),w(c,{key:C.path,to:T===e(l).length-1||!C.redirect?void 0:C},{default:f(()=>[L(h(n.$t(C.meta.title)),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):M("",!0)]),_:1})}}}),Et=F(Wl,[["__scopeId","data-v-38f90b74"]]),Le=[],Vt=($,o=[],t="")=>{$.forEach(l=>{var d;if((d=l.meta)!==null&&d!==void 0&&d.title){var r;const u=Zt(l.path,t),n=[...o,l.meta.title];!l.meta.hideMenu&&(l.redirect||!((r=l.children)!==null&&r!==void 0&&r.length))&&Le.push({path:u,title:n,isLink:l.meta.isLink}),l.children&&Vt(l.children,n,u)}})},Gl=($=500)=>{const{i18n:o}=ie(),{routes:t}=te();!Le.length&&Vt(t);const l=R([]),d=R(0),r=Jt(c=>{l.value=[],d.value=0,c&&Le.forEach(p=>{const _=p.title.map(V=>o.t(V)).join(" > ");return _.search(c)>-1&&l.value.push({path:p.path,meta:{title:_,isLink:p.isLink}}),l.value})},$);function u(){return l.value.length?(d.value--,d.value<0&&(d.value=l.value.length-1),!0):!1}function n(){return l.value.length?(d.value++,d.value>l.value.length-1&&(d.value=0),!0):!1}async function a(){return l.value[d.value]?(Je(l.value[d.value]),!0):!1}return{search:r,filteredMenu:l,activeIndex:d,handleUp:u,handleDown:n,handleEnter:a}},ql={class:"search"},Kl=["onClick","onMouseenter"],Jl=b({setup:!0,name:"MeSearchMenu",getComponents:()=>[E("mel-icon-search"),ye,W,Ct,Qe]}),Zl=b({...Jl,__name:"index",setup($){const o=R(!1),t=R(""),l=R(),{filteredMenu:d,search:r,activeIndex:u,handleDown:n,handleUp:a,handleEnter:c}=Gl(),p=()=>{l.value.querySelectorAll(".item")[u.value].scrollIntoView({behavior:"smooth"})},_=()=>{o.value=!1,t.value="",d.value=[]};return(V,C)=>{const T=E("mel-icon-search"),N=ye,g=W,G=Ct,q=Qe;return i(),y("div",{class:"me-search-menu pointer",onClick:C[6]||(C[6]=v=>o.value=!0)},[s(T,{class:"icon"}),s(q,{modelValue:e(o),"onUpdate:modelValue":C[2]||(C[2]=v=>ve(o)?o.value=v:null),"show-close":!1,onKeydown:C[3]||(C[3]=Be(v=>e(n)()&&p(),["down"])),onKeyup:[C[4]||(C[4]=Be(v=>e(a)()&&p(),["up"])),C[5]||(C[5]=Be(v=>{e(c)(),_()},["enter"]))]},{default:f(()=>[m("div",ql,[s(N,{modelValue:e(t),"onUpdate:modelValue":C[0]||(C[0]=v=>ve(t)?t.value=v:null),size:"large",placeholder:V.$t("搜索")+V.$t(" ")+V.$t("菜单"),"prefix-icon":e(tl),clearable:"",onInput:C[1]||(C[1]=v=>e(r)(e(t)))},null,8,["modelValue","placeholder","prefix-icon"]),e(d).length?(i(),y("div",{key:0,ref_key:"listRef",ref:l,class:"list"},[s(g,{"max-height":"300px"},{default:f(()=>[(i(!0),y(H,null,Z(e(d),(v,D)=>(i(),y("a",{key:D,class:B(["item",{active:e(u)===D}]),onClick:ae(A=>{e(Je)(v),_()},["stop"]),onMouseenter:A=>u.value=D},h(v.meta.title),43,Kl))),128))]),_:1})],512)):(i(),w(G,{key:1,"image-size":80}))])]),_:1},8,["modelValue"])])}}}),St=F(Zl,[["__scopeId","data-v-2cd2227f"]]),Ql={class:"flex-center pointer"},Xl={class:"message-tabs"},Yl={class:"message-header"},eo=b({setup:!0,name:"MessageBox",getComponents:()=>[E("mel-icon-bell"),Ze,_t,nt,at,$e]}),to=b({...eo,__name:"messageBox",setup($){const o=R(!0);return(t,l)=>{const d=E("mel-icon-bell"),r=Ze,u=_t,n=nt,a=at,c=$e;return i(),w(c,{class:"message-box","max-height":"500px",trigger:"click"},{dropdown:f(()=>[m("div",Xl,[m("div",Yl,[s(u,null,{default:f(()=>[L(h(t.$t("全部"))+h(t.$t(" "))+h(t.$t("已读")),1)]),_:1}),s(u,null,{default:f(()=>[L(h(t.$t("查看"))+h(t.$t(" "))+h(t.$t("更多")),1)]),_:1})]),s(a,{"model-value":"notify"},{default:f(()=>[s(n,{label:t.$t("通知"),name:"notify"},{default:f(()=>[(i(),y(H,null,Z(4,p=>m("div",{key:p,class:"text notify-item"},[L(h("List item "+p)+" ",1),l[0]||(l[0]=m("div",{class:"date"},"2022/08/08",-1))])),64))]),_:1},8,["label"]),s(n,{label:t.$t("消息"),name:"message"},{default:f(()=>[(i(),y(H,null,Z(4,p=>m("div",{key:p,class:"text notify-item"},[L(h("List item "+p)+" ",1),l[1]||(l[1]=m("div",{class:"date"},"2022/08/08",-1))])),64))]),_:1},8,["label"]),s(n,{label:t.$t("待办"),name:"agenda"},{default:f(()=>[(i(),y(H,null,Z(4,p=>m("div",{key:p,class:"text notify-item"},[L(h("List item "+p)+" ",1),l[2]||(l[2]=m("div",{class:"date"},"2022/08/08",-1))])),64))]),_:1},8,["label"])]),_:1})])]),default:f(()=>[m("div",Ql,[s(r,{"is-dot":e(o)},{default:f(()=>[s(d,{class:"message-icon"})]),_:1},8,["is-dot"])])]),_:1})}}}),Bt=F(to,[["__scopeId","data-v-3aef6d76"]]),lo={key:0,class:"ellipsis-2"},oo={href:"https://github.com/meadmin-cn/meadmin-template"},ao={href:"https://gitee.com/meadmin-cn/meadmin-template"},no={href:"https://meadmin-cn.github.io/meadmin-template-doc/"},so=b({setup:!0,name:"User",getComponents:()=>[gt,dt,E("router-link"),ct,$e]}),ro=b({...so,__name:"user",setup($){const o=Ke(),t=ie();return(l,d)=>{const r=gt,u=dt,n=E("router-link"),a=ct,c=$e;return i(),w(c,{class:"me-size-select",trigger:"click","max-height":"500px"},{dropdown:f(()=>[s(a,null,{default:f(()=>[s(n,{to:"/"},{default:f(()=>[s(u,null,{default:f(()=>[L(h(l.$t("首页")),1)]),_:1})]),_:1}),m("a",oo,[s(u,null,{default:f(()=>[L(h(l.$t("Github")),1)]),_:1})]),m("a",ao,[s(u,null,{default:f(()=>[L(h(l.$t("Gitee")),1)]),_:1})]),m("a",no,[s(u,null,{default:f(()=>[L(h(l.$t("文档")),1)]),_:1})]),s(u,{divided:"",onClick:d[0]||(d[0]=p=>e(o).logOut())},{default:f(()=>[L(h(l.$t("退出登录")),1)]),_:1})]),_:1})]),default:f(()=>[m("div",Pe({class:"flex-center pointer"},l.$attrs),[s(r,{size:"small",class:"avatar",src:e(o).user.avatar},null,8,["src"]),e(t).isMobile?M("",!0):(i(),y("span",lo,h(e(o).user.name),1))],16)]),_:1})}}}),It=F(ro,[["__scopeId","data-v-fbac9e24"]]),io={class:"right"},uo=b({setup:!0,name:"Right",getComponents:()=>[St,mt,pt,ft,Bt,It,Ce]}),co=b({...uo,__name:"index",setup($){const{themeConfig:o}=O(j());return(t,l)=>{const d=St,r=mt,u=pt,n=ft,a=Ce;return i(),y("div",io,[l[0]||(l[0]=m("div",null,null,-1)),e(o).showSearchMenu?(i(),w(d,{key:0,class:"item"})):M("",!0),e(o).showDark?(i(),w(r,{key:1,class:"item no-hover"})):M("",!0),e(Qt).localeList.length>1?(i(),w(u,{key:2,class:"item"})):M("",!0),e(o).showSize?(i(),w(n,{key:3,class:"item"})):M("",!0),s(Bt,{class:"item"}),s(It,{class:"item"}),e(o).showSetting?(i(),w(a,{key:4,class:"item"})):M("",!0)])}}}),Mt=F(co,[["__scopeId","data-v-66a83eb3"]]),mo={style:{position:"relative",height:"100%"}},po=b({setup:!0,name:"TopMenu",getComponents:()=>[E("layout-menu-item"),be]}),fo=b({...po,__name:"topMenu",setup($){const{themeConfig:o}=O(j()),t=te(),l=se(),d=U(()=>t.routes.filter(u=>u.meta&&!u.meta.hideMenu&&u.meta.title)),r=U(()=>{var u;return((u=l.meta.menuIndex)==null?void 0:u[0])+""});return(u,n)=>{const a=E("layout-menu-item"),c=be;return i(),y("div",mo,[s(c,{class:"top-menu","default-active":e(r),mode:"horizontal"},{default:f(()=>[(i(!0),y(H,null,Z(e(d),p=>(i(),w(a,{key:p.path,"no-child":!0,item:p,collapse:e(o).menuCollapse},null,8,["item","collapse"]))),128))]),_:1},8,["default-active"])])}}}),Rt=F(fo,[["__scopeId","data-v-7a8a6ca1"]]),_o={class:"title"},vo=b({setup:!0,name:"Title"}),ho=b({...vo,__name:"title",setup($){xe(t=>({"046ba09f":e(o).menuWidth}));const{themeConfig:o}=O(j());return(t,l)=>(i(),y("div",_o,l[0]||(l[0]=[L("M"),m("span",null,"e - Admin",-1)])))}}),Ee=F(ho,[["__scopeId","data-v-8b782215"]]),go={class:"top-bar"},bo=b({setup:!0,name:"TopBar",getComponents:()=>[Ee,Et,Rt,Mt]}),yo=b({...bo,__name:"index",setup($){const{menuType:o}=O(j());return(t,l)=>(i(),y("div",go,[e(o)==="top"?(i(),w(Ee,{key:0})):(i(),w(Et,{key:1})),e(o)==="top"?(i(),w(Rt,{key:2,class:"menu"})):M("",!0),s(Mt)]))}}),Lt=F(yo,[["__scopeId","data-v-9f056625"]]),$o={class:"layout-header"},ko=b({setup:!0,name:"LayoutHeader",getComponents:()=>[Lt]}),Co=b({...ko,__name:"index",setup($){const{themeConfig:o}=O(j());return(t,l)=>(i(),y("div",$o,[e(o).topBar?(i(),w(Lt,{key:0})):M("",!0)]))}}),Te=F(Co,[["__scopeId","data-v-e65987f8"]]),wo={class:"menu-box"},Eo=b({setup:!0,name:"layoutMenu",getComponents:()=>[we,Ee,E("layout-menu-item"),be,W]}),Vo=b({...Eo,__name:"index",setup($){xe(_=>({"30af1ebb":e(c),"7aa31742":e(a),"24966b7a":e(o).menuBg,"703d165e":e(n),"22e7c708":e(o).menuWidth}));const{themeConfig:o,menuType:t}=O(j()),l=te(),d=ie(),r=se();let u=R("");ne(r,_=>{_.meta&&(_.meta.hideMenu?_.meta.activeMenu&&(u.value=_.meta.activeMenu):u.value=_.path)},{immediate:!0});const n=U(()=>Fe(o.value.menuBg,Ne(o.value.menuBg)<100?"#ffffff":"#303133",.1)),a=U(()=>Ne(o.value.menuBg)<100?"#ffffff":"#303133"),c=U(()=>Fe(o.value.menuBg,a.value,.8)),p=U(()=>t.value==="top"?l.childsRoutes[r.meta.menuIndex[0]]:l.routes);return(_,V)=>{const C=E("layout-menu-item"),T=be,N=W;return e(p).length?(i(),y("div",{key:0,class:B(["layout-menu",{"has-title":e(t)!=="top",collapse:!e(d).isMobile&&e(o).menuCollapse}])},[e(t)==="top"?(i(),w(we,{key:0,class:"expand"})):(i(),w(Ee,{key:1,class:"layout-title"})),m("div",wo,[s(N,{"view-class":"layout-menu-content"},{default:f(()=>[s(T,{class:"el-menu-vertical-demo","default-active":e(u),collapse:!e(d).isMobile&&e(o).menuCollapse},{default:f(()=>[(i(!0),y(H,null,Z(e(p),g=>(i(),w(C,{key:g.path,item:g,collapse:e(o).menuCollapse},null,8,["item","collapse"]))),128))]),_:1},8,["default-active","collapse"])]),_:1})])],2)):M("",!0)}}}),pe=F(Vo,[["__scopeId","data-v-d1ef48c7"]]),So=b({setup:!0,name:"Contextmenu",getComponents:()=>[E("mel-icon-refresh"),E("mel-icon-close"),E("mel-icon-download"),E("mel-icon-document-delete"),E("mel-icon-minus"),ht]}),Tt=b({...So,__name:"contextmenu",props:{modelValue:{required:!0,type:Array},current:{required:!0,type:Object},virtualRef:{required:!0,type:Object},visible:{type:Boolean,default:!0}},emits:["update:modelValue","update:visible"],setup($,{expose:o,emit:t}){const l=$,d=t,r=R([]);ne(()=>l.modelValue,()=>{r.value=[...l.modelValue]},{immediate:!0,deep:!0});const u=He(),n=se();let a=U(()=>r.value.indexOf(l.current)),c=U(()=>{const v=r.value.findIndex(D=>!D.meta.affix);return v>-1?v:1/0});const p=async()=>{d("update:visible",!1),await he()},_=te(),V=async(v,D)=>{for(let A=v;A<=D;A++)_.cacheFullPath.delete(r.value[A].fullPath)},C=()=>{u.replace("/redirect/"+encodeURIComponent(l.current.fullPath)),p()},T=async()=>{if(r.value.length===0||l.current.meta.affix)return;await p();const v=a.value;V(a.value,a.value),r.value.splice(a.value,1),d("update:modelValue",[...r.value]),l.current.fullPath===n.fullPath&&u.push(r.value[Math.min(r.value.length-1,v)].fullPath)},N=async()=>{a.value<=c.value||(await p(),V(c.value,a.value),r.value.splice(c.value,a.value-c.value),d("update:modelValue",[...r.value]),r.value.findIndex(v=>v.fullPath===n.fullPath)===-1&&u.push(r.value[a.value].fullPath))},g=async()=>{a.value+1!==r.value.length&&(await p(),V(a.value+1,r.value.length-1),r.value.splice(a.value+1),d("update:modelValue",[...r.value]),r.value.findIndex(v=>v.fullPath===n.fullPath)===-1&&u.push(r.value[a.value].fullPath))},G=()=>{N(),g()},q=async()=>{c.value!==1/0&&(await p(),V(c.value,r.value.length-1),r.value.splice(c.value),d("update:modelValue",[...r.value]),r.value.findIndex(v=>v.fullPath===n.fullPath)===-1&&u.push(r.value[r.value.length-1].fullPath))};return o({closeAll:q,closeCurrent:T,closeLeft:N,closeMenu:p,closeOther:G,closeRight:g}),(v,D)=>{const A=E("mel-icon-refresh"),K=E("mel-icon-close"),J=E("mel-icon-download"),I=E("mel-icon-document-delete"),ue=E("mel-icon-minus"),ce=ht,Ve=Xt;return i(),w(ce,{"popper-class":"me-contextmenu-tooltip el-dropdown__popper",visible:$.visible,"virtual-ref":$.virtualRef,"virtual-triggering":"",pure:""},{default:f(()=>[je((i(),y("ul",Pe({class:"el-dropdown-menu el-dropdown-menu--default"},v.$attrs,{style:{outline:"none"},role:"menuitem"}),[m("li",{class:"el-dropdown-menu__item",onClick:C},[s(A),L(" "+h(v.$t("重新加载")),1)]),m("li",{class:B({"el-dropdown-menu__item":!0,"is-disabled":$.current.meta.affix||$.modelValue.length===1}),onClick:T},[s(K),L(" "+h(v.$t("关闭"))+h(v.$t(" "))+h(v.$t("当前")),1)],2),m("li",{class:B({"el-dropdown-menu__item":!0,"is-disabled":e(a)<=e(c)}),onClick:N},[s(J,{style:{transform:"rotate(90deg)"}}),L(h(v.$t("关闭"))+h(v.$t(" "))+h(v.$t("左侧")),1)],2),m("li",{class:B({"el-dropdown-menu__item":!0,"is-disabled":$.modelValue.length===e(a)+1}),onClick:g},[s(J,{style:{transform:"rotate(270deg)"}}),L(h(v.$t("关闭"))+h(v.$t(" "))+h(v.$t("右侧")),1)],2),m("li",{class:B({"el-dropdown-menu__item":!0,"is-disabled":e(a)<=e(c)&&$.modelValue.length===e(a)+1}),onClick:G},[s(I),L(" "+h(v.$t("关闭"))+h(v.$t(" "))+h(v.$t("其他")),1)],2),m("li",{class:B({"el-dropdown-menu__item":!0,"is-disabled":e(c)===1/0}),onClick:q},[s(ue),L(" "+h(v.$t("关闭"))+h(v.$t(" "))+h(v.$t("全部")),1)],2)],16)),[[Ve,p]])]),_:1},8,["visible","virtual-ref"])}}}),Bo={class:"tag-bar"},Io=["onClick","onContextmenu"],Mo=["onClick"],Ro={class:"right"},Lo=b({setup:!0,name:"TagBar",getComponents:()=>[E("mel-icon-d-arrow-left"),E("mel-icon-close"),W,E("mel-icon-d-arrow-right"),E("mel-icon-refresh"),E("mel-icon-menu"),Tt]}),To=b({...Lo,__name:"index",setup($){const{themeConfig:o}=O(j()),t=Ie([]),l=(k,S="")=>De(k)||De(S)?k:Yt.resolve(S,k),d=(k,S="")=>{k.forEach(P=>{var Q;(Q=P.meta)!=null&&Q.affix&&P.meta.title&&t.push({fullPath:l(P.path,S),hash:"",query:{},matched:[],redirectedFrom:void 0,meta:{...P.meta}}),P.children&&d(P.children,l(P.path,S))})};d(te().routes);const r=R(),u=R();let n=R(0);const a=(k,S=!1)=>{S&&(k=k+n.value),rl(r.value.$el).find(".el-scrollbar__wrap").animate({scrollLeft:k},300)},c=R([]),p=R({fullPath:"/",meta:{title:""}}),_=se(),V=R(0),C=()=>{var k;V.value=u.value.offsetWidth-((k=r.value)==null?void 0:k.$el.clientWidth)};_e(()=>{Me.on(Re.RESIZE,C,!0),ne(t,C,{flush:"post",immediate:!0})});const T=()=>{a(0-r.value.$el.clientWidth/2,!0)},N=()=>{a(r.value.$el.clientWidth/2,!0)},g=k=>{he(()=>{if(c.value[k]){if(p.value=t[k],k===0){a(0);return}if(k===c.value.length-1){V.value>0&&a(V.value);return}const S=r.value.$el.clientWidth,P=n.value,Q=S+n.value,le=c.value[k-1].offsetLeft,oe=c.value[k].offsetLeft,Se=oe+c.value[k].offsetWidth,X=c.value[k+1].offsetLeft+c.value[k+1].offsetWidth;S<=Se-le||S<=X-oe?a(oe):le<P?a(le):X>Q&&a(X-S)}})},G=k=>{if(k.meta.title&&!k.meta.hideTag){let S=t.findIndex(P=>P.fullPath===k.fullPath);return S>-1?g(S):(t.push({...k}),g(t.length-1))}};G(_),Me.on(Re.BEFORE_ROUTE_CHANGE,({to:k})=>G(k),!0);const q=He(),v=k=>{k.fullPath!==p.value.fullPath&&q.push(k.fullPath)},D=R(p.value),A=R(),K=R(!1),J=R(),I=(k,S,P=!0)=>{A.value=k,D.value=S,K.value=P},ue=async(k,S)=>{var P;I(k,S,!1),await he(),(P=J.value)==null||P.closeCurrent()},ce=()=>{K.value=!1};_e(()=>{document.body.addEventListener("click",ce)}),jt(()=>{document.body.removeEventListener("click",ce)});const Ve=()=>{q.replace("/redirect/"+encodeURIComponent(_.fullPath))},de=R("");return ne(_,()=>{_.name=="redirect"?de.value=_.params.path:de.value==_.fullPath&&setTimeout(()=>{de.value=""},500)}),(k,S)=>{const P=E("mel-icon-d-arrow-left"),Q=E("mel-icon-close"),le=E("mel-icon-d-arrow-right"),oe=E("mel-icon-refresh"),Se=E("mel-icon-menu");return i(),y(H,null,[m("div",Bo,[m("a",{class:B(["icon pointer",{"is-disabled":e(n)<=0}]),onClick:T},[s(P)],2),s(e(W),{ref_key:"scrollbarRef",ref:r,"view-class":"list-parent",style:{"flex-grow":"1"},onScroll:S[0]||(S[0]=({scrollLeft:z})=>ve(n)?n.value=z:n=z)},{default:f(()=>[m("div",{ref_key:"listRef",ref:u,class:"list"},[(i(!0),y(H,null,Z(e(t),z=>{var X;return i(),y("div",{key:z.fullPath,ref_for:!0,ref_key:"tagsRef",ref:c,class:B(["item pointer",{active:z.fullPath===((X=e(p))==null?void 0:X.fullPath)}]),onClick:me=>v(z),onContextmenu:ae(me=>I(me.currentTarget,z),["prevent"])},[L(h(k.$t(z.meta.title))+" ",1),z.meta.affix?M("",!0):(i(),y("div",{key:0,class:"del-icon",onClick:ae(me=>ue(me.currentTarget,z),["stop"])},[s(Q)],8,Mo)),S[4]||(S[4]=m("div",null,null,-1))],42,Io)}),128))],512)]),_:1},512),m("div",Ro,[m("div",{class:B(["icon pointer",{"is-disabled":Math.ceil(e(n))>=e(V)}]),onClick:N},[s(le)],2),e(o).tagBarRefresh?(i(),y("div",{key:0,class:"icon pointer",onClick:Ve},[s(oe,{class:B({rotate:e(de)})},null,8,["class"])])):M("",!0),e(o).tagBarMenu?(i(),y("div",{key:1,class:"icon pointer",onClick:S[1]||(S[1]=ae(z=>I(z.currentTarget,e(p)),["stop"]))},[s(Se)])):M("",!0)])]),e(A)?(i(),w(Tt,{key:0,ref_key:"contextmenuRef",ref:J,visible:e(K),"onUpdate:visible":S[2]||(S[2]=z=>ve(K)?K.value=z:null),"virtual-ref":e(A),current:e(D),"model-value":e(t),"onUpdate:modelValue":S[3]||(S[3]=z=>{e(t).splice(0,e(t).length,...z)})},null,8,["visible","virtual-ref","current","model-value"])):M("",!0)],64)}}}),Pt=F(To,[["__scopeId","data-v-74fc00d1"]]),Po={id:"me-main",class:"me-main"},zo=b({setup:!0,name:"Layout",getComponents:()=>[pe,st,Te,rt,Pt,vt,W,it,ut,ke,Ce,wt]}),Uo=b({...zo,__name:"index",setup($){const{themeConfig:o,menuType:t}=O(j()),l=ie();return _e(()=>{he(()=>l.layoutLoaded=!0)}),(d,r)=>{const u=st,n=rt,a=W,c=it,p=ut,_=ke,V=Ce,C=wt;return i(),y(H,null,[s(p,{class:"layout"},{default:f(()=>[!e(l).isMobile&&e(t)!=="top"?(i(),w(u,{key:0,width:"max-content"},{default:f(()=>[s(pe)]),_:1})):M("",!0),s(p,null,{default:f(()=>[e(o).fixedHeader?(i(),w(n,{key:0,class:"right-header",height:"max-content"},{default:f(()=>[s(Te)]),_:1})):M("",!0),s(c,{class:"main"},{default:f(()=>[e(t)==="top"?(i(),w(u,{key:0,width:"max-content"},{default:f(()=>[s(pe)]),_:1})):M("",!0),s(c,{class:"right-main"},{default:f(()=>[e(o).tagBar?(i(),w(Pt,{key:0})):M("",!0),s(a,{"view-class":"me-right-main-view"},{default:f(()=>[e(o).fixedHeader?M("",!0):(i(),w(Te,{key:0})),m("div",Po,[s(vt,{transition:{name:"fade-transform",mode:"out-in"}})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(l).isMobile?(i(),w(_,{key:0,class:"me-sidebar-drawer","model-value":!e(o).menuCollapse,"with-header":!1,size:e(o).menuWidth,direction:"ltr",onClose:r[0]||(r[0]=()=>e(o).menuCollapse=!0)},{default:f(()=>[s(pe)]),_:1},8,["model-value","size"])):M("",!0),e(o).showSetting&&!e(o).topBar?(i(),w(V,{key:1,class:"fixed-setting"})):M("",!0),s(C)],64)}}}),ua=F(Uo,[["__scopeId","data-v-ca6dfce8"]]);export{ua as default};
