"use strict";(self.webpackChunkhero=self.webpackChunkhero||[]).push([[63],{3245:(e,i,n)=>{n.d(i,{y:()=>h,Z:()=>A});var a=n(1906),l=n(5865),t=n(6446),s=n(7744);const r=(0,s.A)(t.A)((()=>({display:"inline-flex",justifyContent:"center",alignItems:"center",gap:"12px",width:"100%"}))),d=(0,s.A)(l.A)((()=>({width:"64px",marginRight:"12px"}))),o=(0,s.A)(l.A)((()=>({width:"60px",textAlign:"center"})));var c=n(579);const h=e=>{let{label:i,value:n,addDisabled:t,minusDisabled:s,onChange:h}=e;return(0,c.jsxs)(r,{children:[(0,c.jsx)(d,{variant:"h5",children:i}),(0,c.jsx)(a.A,{variant:"outlined",onClick:()=>{h(n+1)},disabled:t,children:(0,c.jsx)(l.A,{variant:"h5",children:"+"})}),(0,c.jsx)(o,{variant:"h5",children:n}),(0,c.jsx)(a.A,{variant:"outlined",onClick:()=>{h(n-1)},disabled:s,children:(0,c.jsx)(l.A,{variant:"h5",children:"-"})})]})};var u=n(2110),x=n(2828),p=n(6494),v=n(6591);n(5043);const A=e=>{let{img:i,label:n}=e;return(0,c.jsx)(u.A,{children:(0,c.jsxs)(x.A,{children:[(0,c.jsx)(v.A,{component:"img",height:"140",image:i,alt:n}),(0,c.jsx)(p.A,{children:(0,c.jsx)(l.A,{gutterBottom:!0,variant:"h5",component:"div",children:n})})]})})}},5849:(e,i,n)=>{n.d(i,{ZY:()=>t,lq:()=>s,Ty:()=>o});var a=n(3747),l=n(7154);const t=e=>{let{id:i}=e;return(0,a.I)({queryKey:["heros-profile",{id:i}],queryFn:()=>(async e=>l.A.get("https://hahow-recruit.herokuapp.com/heroes/".concat(e,"/profile")).then((e=>e.data)).catch((e=>({}))))(i)})},s=()=>(0,a.I)({queryKey:["heros"],queryFn:()=>(async()=>l.A.get("https://hahow-recruit.herokuapp.com/heroes").then((e=>e.data)).catch((e=>({}))))()});var r=n(7097),d=n(6705);const o=e=>(0,r.n)({mutationKey:["patch-heros-profile"],mutationFn:i=>(async(e,i)=>l.A.patch("https://hahow-recruit.herokuapp.com/heroes/".concat(e,"/profile"),i).then((e=>e.data)).catch((e=>({code:400,msg:e}))))(e,i),onSuccess:()=>{d.q.invalidateQueries({queryKey:["heros-profile",{id:e}]})}})},7063:(e,i,n)=>{n.r(i),n.d(i,{Hero:()=>j});var a=n(5865),l=n(1906),t=n(5043),s=n(3216),r=n(1036),d=n(3245),o=n(5849);let c=function(e){return e.STR="str",e.INT="int",e.AGI="agi",e.LUK="luk",e}({});var h=n(6446),u=n(3336),x=n(7744);const p=(0,x.A)(u.A)((()=>({display:"inline-flex",minWidth:"656px",padding:"12px"}))),v=(0,x.A)(h.A)((()=>({display:"flex",flexDirection:"column",gap:"12px"}))),A=(0,x.A)(h.A)((()=>({display:"flex",justifyContent:"flex-end",flexGrow:1}))),g=(0,x.A)(h.A)((()=>({display:"flex",flexDirection:"column",gap:"12px",justifyContent:"flex-end",width:"160px"})));var y=n(579);const j=()=>{const{heroId:e}=(0,s.g)(),{data:i,isFetched:n}=(0,o.ZY)({id:e||""}),{mutate:h}=(0,o.Ty)(e||""),[u,x]=(0,t.useState)({str:0,int:0,agi:0,luk:0}),j=(0,t.useMemo)((()=>{if(!i||!u)return 0;return(null===i||void 0===i?void 0:i.str)+(null===i||void 0===i?void 0:i.int)+(null===i||void 0===i?void 0:i.agi)+(null===i||void 0===i?void 0:i.luk)-((null===u||void 0===u?void 0:u.str)+(null===u||void 0===u?void 0:u.int)+(null===u||void 0===u?void 0:u.agi)+(null===u||void 0===u?void 0:u.luk))}),[u,i]),f=(0,t.useCallback)(((e,i)=>{x((n=>({...n,[e]:i})))}),[]),m=(0,t.useCallback)((()=>{h(u,{onSuccess:()=>{r.oR.success("\u5132\u5b58\u6210\u529f")},onError:()=>{r.oR.error("\u5132\u5b58\u5931\u6557")}})}),[h,u]);return(0,t.useEffect)((()=>{n&&i&&x(i)}),[n,i]),(0,y.jsxs)(p,{children:[(0,y.jsxs)(v,{children:[(0,y.jsx)(d.y,{value:u.str,onChange:e=>f(c.STR,e),label:c.STR,minusDisabled:u.str<=0,addDisabled:j<=0}),(0,y.jsx)(d.y,{value:u.int,onChange:e=>f(c.INT,e),label:c.INT,minusDisabled:u.int<=0,addDisabled:j<=0}),(0,y.jsx)(d.y,{value:u.agi,onChange:e=>f(c.AGI,e),label:c.AGI,minusDisabled:u.agi<=0,addDisabled:j<=0}),(0,y.jsx)(d.y,{value:u.luk,onChange:e=>f(c.LUK,e),label:c.LUK,minusDisabled:u.luk<=0,addDisabled:j<=0})]}),(0,y.jsx)(A,{children:(0,y.jsxs)(g,{children:[(0,y.jsxs)(a.A,{children:["\u5269\u9918\u9ede\u6578: ",j]}),(0,y.jsx)(l.A,{onClick:m,disabled:j>0,variant:"contained",children:"\u5132\u5b58"})]})})]})}}}]);
//# sourceMappingURL=63.584b5efd.chunk.js.map