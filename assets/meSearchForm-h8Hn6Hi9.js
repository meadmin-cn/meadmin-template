import{d as C,r as d,q as F,x as R,aO as n,Q as T,i as k,o as f,_ as m,w as i,T as b,t as h,j as p,$ as v,V as $,k as g}from"./core-ST-i4T9p.js";import{_ as S}from"./index-yH0Ry0aD.js";import{E}from"./index-sftZIlHI.js";import{a as A,E as _}from"./index-E1Vaaaoc.js";const B={forever:{type:Number,default:1},defaultAll:{type:Boolean,default:!1},searchText:{type:String,default:""},resetText:{type:String,default:""},labelWidth:{type:[String,Number],default:"80px"},labelPosition:{type:String,default:"right"},onSearch:Function,onReset:Function},N=C({name:"MeSearchForm",props:B,setup(e,{expose:o}){const r=d(),u=d(e.defaultAll),a=d(""),c=new ResizeObserver(t=>t[0].contentRect.width<768?a.value="":t[0].contentRect.width<1150?a.value="lg":t[0].contentRect.width<1600?a.value="xl":a.value="xl-2");F(()=>{c.observe(r.value.$el),R(u,()=>{const t=n(r.value.$el).children();u.value?t.each(function(s){s>=e.forever&&s!=t.length-1&&n(this).css("display",n(this).data("display"))}):t.each(function(s){s>=e.forever&&s!=t.length-1&&(n(this).data("display",n(this).css("display")),n(this).css("display","none"))})},{immediate:!0})}),T(()=>{c.disconnect()}),o({elFormRef:r});const l=d(!1);return{showAll:u,elFormRef:r,search:async()=>{var t;l.value=!0;try{await((t=e.onSearch)==null?void 0:t.call(e))}finally{l.value=!1}},loading:l,formClass:a}}});function V(e,o,r,u,a,c){const l=E,y=k("mel-icon-arrow-down"),t=A,s=_;return f(),m(s,{ref:"elFormRef",class:$(["me-search-form",e.formClass]),"label-width":e.labelWidth,"label-position":e.labelPosition},{default:i(()=>[b(e.$slots,"default",{},void 0,!0),g(t,{class:"button-item"},{default:i(()=>[b(e.$slots,"button",{},void 0,!0),e.searchText!==void 0?(f(),m(l,{key:0,type:"primary",loading:e.loading,onClick:o[0]||(o[0]=w=>e.search())},{default:i(()=>[p(h(e.searchText?e.searchText:e.$t("查询")),1)]),_:1},8,["loading"])):v("",!0),e.resetText!==void 0?(f(),m(l,{key:1,onClick:o[1]||(o[1]=w=>e.onReset?e.onReset():e.elFormRef.resetFields())},{default:i(()=>[p(h(e.resetText?e.resetText:e.$t("重置")),1)]),_:1})):v("",!0),e.forever?(f(),m(l,{key:2,text:"",bg:"",onClick:o[2]||(o[2]=w=>e.showAll=!e.showAll)},{default:i(()=>[p(h(e.$t(e.showAll?"收起":"展开"))+" ",1),g(y,{class:$(["more-icon",{reversal:e.showAll}])},null,8,["class"])]),_:1})):v("",!0)]),_:3})]),_:3},8,["class","label-width","label-position"])}const O=S(N,[["render",V],["__scopeId","data-v-de4d321f"]]);export{O as _};