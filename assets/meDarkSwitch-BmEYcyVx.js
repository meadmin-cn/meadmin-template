import{d as R,L,r as F,n as T,p as k,u as _,J as Q,Y as H,x as Be,A as be,i as m,W as N,o as I,w as f,k as w,aA as Ke,aP as Me,c as z,X as ne,at as Ae,M as X,Q as J,O as ze,l as he,E as Ge,a as W,aa as Ue,ab as te,T as le,P as Ye,ay as He,as as Ie,j as Ee,t as Ce,R as me,a0 as ve}from"./core-C4-oPvXL.js";import{e as Ve,f as oe,g as G,a_ as P,l as Je,n as ye,a$ as We,T as je,j as re,h as Qe,aJ as Xe,ac as $e,p as V,b0 as _e,b1 as qe,a6 as Te,w as Ze,c as ke,b2 as xe,_ as se,aR as eo,b3 as oo}from"./index-gAuTWnPj.js";import"./mock-DBzxB1z9.js";import{E as Fe,u as no}from"./index-DEe-wAkk.js";import{E as to}from"./index-CSbSf2hP.js";import{c as lo,d as ro,E as so,a as Re,C as ao,b as io,e as co,f as uo,g as po,F as fo,L as mo}from"./dropdown-Dxc3fwJq.js";import{e as vo}from"./elIcon-CvLeSQbC.js";import{c as _o}from"./castArray-DUEINfxs.js";import{c as Se}from"./refs-BScKkwek.js";const go=Ve({style:{type:oe([String,Array,Object])},currentTabId:{type:oe(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:oe(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:wo,ElCollectionItem:bo,COLLECTION_INJECTION_KEY:ae,COLLECTION_ITEM_INJECTION_KEY:ho}=lo("RovingFocusGroup"),ie=Symbol("elRovingFocusGroup"),De=Symbol("elRovingFocusGroupItem"),Io={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Eo=(e,o)=>e,Co=(e,o,r)=>{const t=Eo(e.code);return Io[t]},yo=(e,o)=>e.map((r,t)=>e[(t+o)%e.length]),ce=e=>{const{activeElement:o}=document;for(const r of e)if(r===o||(r.focus(),o!==document.activeElement))return},ge="currentTabIdChange",we="rovingFocusGroup.entryFocus",$o={bubbles:!1,cancelable:!0},To=R({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:go,emits:[ge,"entryFocus"],setup(e,{emit:o}){var r;const t=F((r=e.currentTabId||e.defaultCurrentTabId)!=null?r:null),d=F(!1),a=F(!1),i=F(),{getItems:s}=T(ae,void 0),c=k(()=>[{outline:"none"},e.style]),g=p=>{o(ge,p)},b=()=>{d.value=!0},E=P(p=>{var v;(v=e.onMousedown)==null||v.call(e,p)},()=>{a.value=!0}),y=P(p=>{var v;(v=e.onFocus)==null||v.call(e,p)},p=>{const v=!_(a),{target:B,currentTarget:S}=p;if(B===S&&v&&!_(d)){const K=new Event(we,$o);if(S==null||S.dispatchEvent(K),!K.defaultPrevented){const h=s().filter(D=>D.focusable),O=h.find(D=>D.active),C=h.find(D=>D.id===_(t)),A=[O,C,...h].filter(Boolean).map(D=>D.ref);ce(A)}}a.value=!1}),n=P(p=>{var v;(v=e.onBlur)==null||v.call(e,p)},()=>{d.value=!1}),u=(...p)=>{o("entryFocus",...p)};Q(ie,{currentTabbedId:Be(t),loop:H(e,"loop"),tabIndex:k(()=>_(d)?-1:0),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:c,orientation:H(e,"orientation"),dir:H(e,"dir"),onItemFocus:g,onItemShiftTab:b,onBlur:n,onFocus:y,onMousedown:E}),be(()=>e.currentTabId,p=>{t.value=p??null}),Je(i,we,u)}});function ko(e,o,r,t,d,a){return L(e.$slots,"default")}var Fo=G(To,[["render",ko],["__file","roving-focus-group-impl.vue"]]);const Ro=R({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:wo,ElRovingFocusGroupImpl:Fo}});function So(e,o,r,t,d,a){const i=m("el-roving-focus-group-impl"),s=m("el-focus-group-collection");return I(),N(s,null,{default:f(()=>[w(i,Ke(Me(e.$attrs)),{default:f(()=>[L(e.$slots,"default")]),_:3},16)]),_:3})}var Do=G(Ro,[["render",So],["__file","roving-focus-group.vue"]]);const q=Symbol("elDropdown"),{ButtonGroup:Oo}=Fe,Po=R({name:"ElDropdown",components:{ElButton:Fe,ElButtonGroup:Oo,ElScrollbar:to,ElDropdownCollection:so,ElTooltip:je,ElRovingFocusGroup:Do,ElOnlyChild:We,ElIcon:ye,ArrowDown:vo},props:ro,emits:["visible-change","click","command"],setup(e,{emit:o}){const r=he(),t=re("dropdown"),{t:d}=Qe(),a=F(),i=F(),s=F(),c=F(),g=F(null),b=F(null),E=F(!1),y=k(()=>({maxHeight:Xe(e.maxHeight)})),n=k(()=>[t.m(h.value)]),u=k(()=>_o(e.trigger)),p=$e().value,v=k(()=>e.id||p);be([a,u],([l,$],[U])=>{var ue,pe,fe;(ue=U==null?void 0:U.$el)!=null&&ue.removeEventListener&&U.$el.removeEventListener("pointerenter",C),(pe=l==null?void 0:l.$el)!=null&&pe.removeEventListener&&l.$el.removeEventListener("pointerenter",C),(fe=l==null?void 0:l.$el)!=null&&fe.addEventListener&&$.includes("hover")&&l.$el.addEventListener("pointerenter",C)},{immediate:!0}),ze(()=>{var l,$;($=(l=a.value)==null?void 0:l.$el)!=null&&$.removeEventListener&&a.value.$el.removeEventListener("pointerenter",C)});function B(){S()}function S(){var l;(l=s.value)==null||l.onClose()}function K(){var l;(l=s.value)==null||l.onOpen()}const h=no();function O(...l){o("command",...l)}function C(){var l,$;($=(l=a.value)==null?void 0:l.$el)==null||$.focus()}function M(){}function A(){const l=_(c);u.value.includes("hover")&&(l==null||l.focus()),b.value=null}function D(l){b.value=l}function de(l){E.value||(l.preventDefault(),l.stopImmediatePropagation())}function j(){o("visible-change",!0)}function Y(l){var $;(l==null?void 0:l.type)==="keydown"&&(($=c.value)==null||$.focus())}function Le(){o("visible-change",!1)}return Q(q,{contentRef:c,role:k(()=>e.role),triggerId:v,isUsingKeyboard:E,onItemEnter:M,onItemLeave:A}),Q("elDropdown",{instance:r,dropdownSize:h,handleClick:B,commandHandler:O,trigger:H(e,"trigger"),hideOnClick:H(e,"hideOnClick")}),{t:d,ns:t,scrollbar:g,wrapStyle:y,dropdownTriggerKls:n,dropdownSize:h,triggerId:v,currentTabId:b,handleCurrentTabIdChange:D,handlerMainButtonClick:l=>{o("click",l)},handleEntryFocus:de,handleClose:S,handleOpen:K,handleBeforeShowTooltip:j,handleShowTooltip:Y,handleBeforeHideTooltip:Le,onFocusAfterTrapped:l=>{var $,U;l.preventDefault(),(U=($=c.value)==null?void 0:$.focus)==null||U.call($,{preventScroll:!0})},popperRef:s,contentRef:c,triggeringElementRef:a,referenceElementRef:i}}});function No(e,o,r,t,d,a){var i;const s=m("el-dropdown-collection"),c=m("el-roving-focus-group"),g=m("el-scrollbar"),b=m("el-only-child"),E=m("el-tooltip"),y=m("el-button"),n=m("arrow-down"),u=m("el-icon"),p=m("el-button-group");return I(),z("div",{class:J([e.ns.b(),e.ns.is("disabled",e.disabled)])},[w(E,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(i=e.referenceElementRef)==null?void 0:i.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:e.persistent,onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ae({content:f(()=>[w(g,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:f(()=>[w(c,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:f(()=>[w(s,null,{default:f(()=>[L(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:f(()=>[w(b,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:f(()=>[L(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","persistent","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(I(),N(p,{key:0},{default:f(()=>[w(y,X({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:f(()=>[L(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),w(y,X({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:f(()=>[w(u,{class:J(e.ns.e("icon"))},{default:f(()=>[w(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):ne("v-if",!0)],2)}var Lo=G(Po,[["render",No],["__file","dropdown.vue"]]);const Bo=R({components:{ElRovingFocusCollectionItem:bo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:r,loop:t,onItemFocus:d,onItemShiftTab:a}=T(ie,void 0),{getItems:i}=T(ae,void 0),s=$e(),c=F(),g=P(n=>{o("mousedown",n)},n=>{e.focusable?d(_(s)):n.preventDefault()}),b=P(n=>{o("focus",n)},()=>{d(_(s))}),E=P(n=>{o("keydown",n)},n=>{const{code:u,shiftKey:p,target:v,currentTarget:B}=n;if(u===V.tab&&p){a();return}if(v!==B)return;const S=Co(n);if(S){n.preventDefault();let h=i().filter(O=>O.focusable).map(O=>O.ref);switch(S){case"last":{h.reverse();break}case"prev":case"next":{S==="prev"&&h.reverse();const O=h.indexOf(B);h=t.value?yo(h,O+1):h.slice(O+1);break}}Ge(()=>{ce(h)})}}),y=k(()=>r.value===_(s));return Q(De,{rovingFocusGroupItemRef:c,tabIndex:k(()=>_(y)?0:-1),handleMousedown:g,handleFocus:b,handleKeydown:E}),{id:s,handleKeydown:E,handleFocus:b,handleMousedown:g}}});function Ko(e,o,r,t,d,a){const i=m("el-roving-focus-collection-item");return I(),N(i,{id:e.id,focusable:e.focusable,active:e.active},{default:f(()=>[L(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Mo=G(Bo,[["render",Ko],["__file","roving-focus-item.vue"]]);const Ao=R({name:"DropdownItemImpl",components:{ElIcon:ye},props:Re,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const r=re("dropdown"),{role:t}=T(q,void 0),{collectionItemRef:d}=T(ao,void 0),{collectionItemRef:a}=T(ho,void 0),{rovingFocusGroupItemRef:i,tabIndex:s,handleFocus:c,handleKeydown:g,handleMousedown:b}=T(De,void 0),E=Se(d,a,i),y=k(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=P(u=>{if([V.enter,V.numpadEnter,V.space].includes(u.code))return u.preventDefault(),u.stopImmediatePropagation(),o("clickimpl",u),!0},g);return{ns:r,itemRef:E,dataset:{[io]:""},role:y,tabIndex:s,handleFocus:c,handleKeydown:n,handleMousedown:b}}});function zo(e,o,r,t,d,a){const i=m("el-icon");return I(),z(le,null,[e.divided?(I(),z("li",{key:0,role:"separator",class:J(e.ns.bem("menu","item","divided"))},null,2)):ne("v-if",!0),W("li",X({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:s=>e.$emit("clickimpl",s),onFocus:e.handleFocus,onKeydown:te(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:s=>e.$emit("pointermove",s),onPointerleave:s=>e.$emit("pointerleave",s)}),[e.icon?(I(),N(i,{key:0},{default:f(()=>[(I(),N(Ue(e.icon)))]),_:1})):ne("v-if",!0),L(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var Go=G(Ao,[["render",zo],["__file","dropdown-item-impl.vue"]]);const Oe=()=>{const e=T("elDropdown",{}),o=k(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Uo=R({name:"ElDropdownItem",components:{ElDropdownCollectionItem:co,ElRovingFocusItem:Mo,ElDropdownItemImpl:Go},inheritAttrs:!1,props:Re,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:r}){const{elDropdown:t}=Oe(),d=he(),a=F(null),i=k(()=>{var n,u;return(u=(n=_(a))==null?void 0:n.textContent)!=null?u:""}),{onItemEnter:s,onItemLeave:c}=T(q,void 0),g=P(n=>(o("pointermove",n),n.defaultPrevented),_e(n=>{if(e.disabled){c(n);return}const u=n.currentTarget;u===document.activeElement||u.contains(document.activeElement)||(s(n),n.defaultPrevented||u==null||u.focus())})),b=P(n=>(o("pointerleave",n),n.defaultPrevented),_e(c)),E=P(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var u,p,v;if(e.disabled){n.stopImmediatePropagation();return}(u=t==null?void 0:t.hideOnClick)!=null&&u.value&&((p=t.handleClick)==null||p.call(t)),(v=t.commandHandler)==null||v.call(t,e.command,d,n)}),y=k(()=>({...e,...r}));return{handleClick:E,handlePointerMove:g,handlePointerLeave:b,textContent:i,propsAndAttrs:y}}});function Yo(e,o,r,t,d,a){var i;const s=m("el-dropdown-item-impl"),c=m("el-roving-focus-item"),g=m("el-dropdown-collection-item");return I(),N(g,{disabled:e.disabled,"text-value":(i=e.textValue)!=null?i:e.textContent},{default:f(()=>[w(c,{focusable:!e.disabled},{default:f(()=>[w(s,X(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:f(()=>[L(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Pe=G(Uo,[["render",Yo],["__file","dropdown-item.vue"]]);const Ho=R({name:"ElDropdownMenu",props:uo,setup(e){const o=re("dropdown"),{_elDropdownSize:r}=Oe(),t=r.value,{focusTrapRef:d,onKeydown:a}=T(qe,void 0),{contentRef:i,role:s,triggerId:c}=T(q,void 0),{collectionRef:g,getItems:b}=T(po,void 0),{rovingFocusGroupRef:E,rovingFocusGroupRootStyle:y,tabIndex:n,onBlur:u,onFocus:p,onMousedown:v}=T(ie,void 0),{collectionRef:B}=T(ae,void 0),S=k(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),K=Se(i,g,d,E,B),h=P(C=>{var M;(M=e.onKeydown)==null||M.call(e,C)},C=>{const{currentTarget:M,code:A,target:D}=C;if(M.contains(D),V.tab===A&&C.stopImmediatePropagation(),C.preventDefault(),D!==_(i)||!fo.includes(A))return;const j=b().filter(Y=>!Y.disabled).map(Y=>Y.ref);mo.includes(A)&&j.reverse(),ce(j)});return{size:t,rovingFocusGroupRootStyle:y,tabIndex:n,dropdownKls:S,role:s,triggerId:c,dropdownListWrapperRef:K,handleKeydown:C=>{h(C),a(C)},onBlur:u,onFocus:p,onMousedown:v}}});function Vo(e,o,r,t,d,a){return I(),z("ul",{ref:e.dropdownListWrapperRef,class:J(e.dropdownKls),style:Ye(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:te(e.handleKeydown,["self"]),onMousedown:te(e.onMousedown,["self"])},[L(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var Ne=G(Ho,[["render",Vo],["__file","dropdown-menu.vue"]]);const Z=Ze(Lo,{DropdownItem:Pe,DropdownMenu:Ne}),x=Te(Pe),ee=Te(Ne),Jo={class:"flex-center pointer"},Wo=R({setup:!0,name:"MeSizeSelect",getComponents:()=>[m("me-icon-size"),x,ee,Z]}),jo=R({...Wo,__name:"meSizeSelect",setup(e){const{themeConfig:o}=He(ke());return(r,t)=>{const d=m("me-icon-size"),a=x,i=ee,s=Z;return I(),N(s,{class:"me-size-select",trigger:"click","max-height":"500px"},{dropdown:f(()=>[w(i,null,{default:f(()=>[(I(!0),z(le,null,Ie(_(xe),c=>(I(),N(a,{key:c,disabled:_(o).size===c,onClick:g=>_(o).size=c},{default:f(()=>[Ee(Ce(r.$t(c)),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:f(()=>[W("div",Jo,[w(d,{class:"icon"})])]),_:1})}}}),mn=se(jo,[["__scopeId","data-v-baf8b96a"]]),Qo={class:"flex-center pointer"},Xo=R({setup:!0,name:"MeTranslation",getComponents:()=>[m("me-icon-translation"),x,ee,Z]}),qo=R({...Xo,__name:"meLocaleSelect",setup(e){const o=r=>{oo(r)};return(r,t)=>{const d=m("me-icon-translation"),a=x,i=ee,s=Z;return I(),N(s,{class:"me-locale-select",trigger:"click","max-height":"500px"},{dropdown:f(()=>[w(i,null,{default:f(()=>[(I(!0),z(le,null,Ie(_(eo).localeList,(c,g)=>(I(),N(a,{key:g,disabled:r.$i18n.locale===c.locale,onClick:b=>o(c.locale)},{default:f(()=>[Ee(Ce(r.$t(c.text)),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:f(()=>[W("div",Qo,[w(d,{class:"icon"})])]),_:1})}}}),vn=se(qo,[["__scopeId","data-v-1e69f779"]]),Zo={class:"el-switch__core"},xo={class:"el-switch__action"},en=R({setup:!0,name:"MeDarkSwitch",getComponents:()=>[m("me-icon-sunny"),m("me-icon-moon")]}),on=R({...en,__name:"meDarkSwitch",setup(e){const o=ke();return(r,t)=>{const d=m("me-icon-sunny"),a=m("me-icon-moon");return I(),z("div",{class:J({"el-switch":!0,"is-checked":_(o).isDark}),onClick:t[0]||(t[0]=i=>_(o).isDark=!_(o).isDark)},[W("span",Zo,[W("div",xo,[me(w(d,{class:"icon"},null,512),[[ve,!_(o).isDark]]),me(w(a,{class:"icon"},null,512),[[ve,_(o).isDark]])])])],2)}}}),_n=se(on,[["__scopeId","data-v-ff57c998"]]);export{Z as E,_n as _,mn as a,vn as b,ee as c,x as d};
