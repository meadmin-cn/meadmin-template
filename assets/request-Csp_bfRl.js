import{a9 as f}from"./index-gAuTWnPj.js";import{E as m}from"./index-DEe-wAkk.js";import{d as p,c as x,o as A,j as n,k as u,a as o,w as d,u as r,t as e}from"./core-C4-oPvXL.js";import"./mock-DBzxB1z9.js";import"./elIcon-CvLeSQbC.js";function B(s){return f(l=>({url:"list",method:"get",params:l}),s)}function J(){return f(s=>({url:"list/info"+s,method:"get"}))}const O={class:"request"},w=p({setup:!0,name:"Request",getComponents:()=>[m]}),j=p({...w,__name:"request",setup(s){const{run:l,loading:g,error:y,data:N}=B({defaultParams:[{page:1,size:10}],manual:!1}),{runAsync:k,loading:v,error:C,data:S}=J(),q=async()=>{console.log(await k(1))};return(z,t)=>{const i=m;return A(),x("div",O,[t[12]||(t[12]=n(" 请求示例 1 ")),u(i,{onClick:t[0]||(t[0]=a=>r(l)({page:2,size:2,createTime:["2023-01-07","2023-01-08"]}))},{default:d(()=>t[3]||(t[3]=[n("请求")])),_:1}),u(i,{onClick:t[1]||(t[1]=a=>r(l)({page:0,size:10}))},{default:d(()=>t[4]||(t[4]=[n("error请求")])),_:1}),o("div",null,[t[5]||(t[5]=n(" loading:")),o("code",null,e(r(g)),1),t[6]||(t[6]=n(" error:")),o("code",null,e(JSON.stringify(r(y))),1),t[7]||(t[7]=n(" data:")),o("code",null,e(JSON.stringify(r(N))),1)]),t[13]||(t[13]=n(" 请求示例 2 ")),u(i,{onClick:t[2]||(t[2]=a=>q())},{default:d(()=>t[8]||(t[8]=[n("异常请求")])),_:1}),o("div",null,[t[9]||(t[9]=n(" loading:")),o("code",null,e(r(v)),1),t[10]||(t[10]=n(" error:")),o("code",null,e(JSON.stringify(r(C))),1),t[11]||(t[11]=n(" data:")),o("code",null,e(JSON.stringify(r(S))),1)])])}}});export{j as default};
