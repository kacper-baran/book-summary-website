import{B as u,A as y,r as i,o as s,k as m,w as r,b as a,d as n,y as e,c as t,n as v}from"./index-0143185c.js";import{B as d}from"./BooksContainer-6a3358f7.js";import"./handleSaved-01151f49.js";const b={key:0},f={key:0},p={key:1},B={key:2},g={key:3},w={key:4},S={key:1},C={key:2},U={__name:"MyLibrarySection",setup(x){const o=u(),c=y();try{o.getBooks(),c.getUserData()}catch(_){console.log(_)}return(_,E)=>{const l=i("base-heading"),k=i("base-loader"),h=i("base-section");return s(),m(h,{bg:"white",width:"wide"},{default:r(()=>[a(l,null,{title:r(()=>[n(" My library ")]),_:1}),e(o).allBooks&&!e(o).loadBooksError&&e(c).user?(s(),t("div",b,[e(o).favoriteBooks.length>=1?(s(),t("div",f,[a(d,{overflow:"side-scroll",books:e(o).favoriteBooks},{default:r(()=>[n(" Favorties ")]),_:1},8,["books"])])):(s(),t("p",p,"Currently you don't have any favorite books")),e(o).savedBooks.length>=1?(s(),t("div",B,[a(d,{overflow:"side-scroll",books:e(o).savedBooks},{default:r(()=>[n(" Saved ")]),_:1},8,["books"])])):(s(),t("p",g,"Currently you don't have any saved books")),e(o).writtenSummaries.length>=1?(s(),t("div",w,[a(d,{overflow:"side-scroll",books:e(o).writtenSummaries},{default:r(()=>[n(" My summaries ")]),_:1},8,["books"])])):v("",!0)])):e(o).loadBooksError?(s(),t("div",C," Something went wrong try refreshing or visit this page later ")):(s(),t("div",S,[a(k)]))]),_:1})}}};export{U as default};