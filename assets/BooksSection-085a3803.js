import{q as x,_ as g,i as p,r as _,o as e,c as o,F as I,C as F,b as n,w as u,d as h,t as M,B as V,k as E,a as m,y as c,m as L,v as N,n as y}from"./index-231d543a.js";import{B as b}from"./BooksContainer-4c6938ee.js";import"./handleSaved-895fc4e3.js";var $=x("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const P=["onClick"],D={__name:"CategoriesItem",emits:["getCategory"],setup(f,{emit:s}){const a=p(["Economics","Business","Entrepreneurship","Health","Productivity","Sales","Psychology","Self-improvement","Communication","Management / Leadership","Motivation","Money / Finance","Relationships","Spirituality","Philosophy","Career / Success","Mental health"]);return(t,k)=>{const d=_("base-card");return e(),o("ul",null,[(e(!0),o(I,null,F(a.value,i=>(e(),o("li",{key:i,onClick:l=>t.$emit("getCategory",i)},[n(d,null,{default:u(()=>[h(M(i),1)]),_:2},1024)],8,P))),128))])}}},T=g(D,[["__scopeId","data-v-1d3e043b"]]);const q={class:"search-bar-container"},A={key:0},G={key:1},H={key:0,class:"clear-filter"},O={key:1},R={key:2},U={key:3},j={key:2},z={key:3},J={__name:"BooksSection",setup(f){const s=V(),a=p(""),t=p(null);s.getBooks();const k=l=>{const r=s.books.filter(v=>v.category===l);t.value=r},d=()=>{if(a.value!==""){const l=[];s.books.forEach(r=>{r.title.toLowerCase().indexOf(a.value.toLowerCase())!==-1&&l.push(r)}),t.value=l}else i()},i=()=>{t.value=null};return(l,r)=>{const v=_("base-heading"),C=_("base-button"),B=_("base-loader"),S=_("base-section");return e(),E(S,{bg:"white",width:"wide"},{default:u(()=>[n(v,null,{title:u(()=>[h(" All books ")]),text:u(()=>[m("div",q,[n(c($),{class:"icon"}),L(m("input",{type:"text",onInput:d,"onUpdate:modelValue":r[0]||(r[0]=w=>a.value=w)},null,544),[[N,a.value,void 0,{trim:!0}]])])]),_:1}),a.value===""?(e(),o("div",A,[n(T,{onGetCategory:k})])):y("",!0),c(s).allBooks&&!c(s).loadBooksError?(e(),o("div",G,[t.value&&a.value===""?(e(),o("div",H,[n(C,{onClick:i},{default:u(()=>[h("Clear Filters")]),_:1})])):y("",!0),t.value===null?(e(),o("div",O,[n(b,{overflow:"auto",books:c(s).books},null,8,["books"])])):t.value.length!==0?(e(),o("div",R,[n(b,{overflow:"auto",books:t.value},null,8,["books"])])):(e(),o("p",U,"Couldn't find any books"))])):c(s).loadBooksError?(e(),o("div",z," Something went wrong try refreshing or visit this page later ")):(e(),o("div",j,[n(B)]))]),_:1})}}},X=g(J,[["__scopeId","data-v-f6627607"]]);export{X as default};