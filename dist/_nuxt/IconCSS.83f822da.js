import{d as l,L as _,c as o,q as m,s as d,G as f,_ as S}from"./entry.522c0e01.js";import{u as x}from"./config.cd8b25bf.js";const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){_(e=>({"17e81e26":u.value}));const n=x(),s=r,p=o(()=>{var e;return((((e=n.nuxtIcon)==null?void 0:e.aliases)||{})[s.name]||s.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!s.size&&typeof((t=n.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=n.nuxtIcon)!=null&&c.size))return;const e=s.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(m(),d("span",{style:f({width:a.value,height:a.value})},null,4))}});const y=S(g,[["__scopeId","data-v-2717c442"]]);export{y as default};