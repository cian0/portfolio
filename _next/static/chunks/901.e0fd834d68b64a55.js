"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{3901:function(e,t,r){r.r(t);var s=r(5893),a=r(7294);let n=[{x:10,y:10}],l={x:1,y:0},i={x:15,y:15};t.default=()=>{let[e,t]=(0,a.useState)(n),[r,o]=(0,a.useState)(l),[c,x]=(0,a.useState)(i),[u,d]=(0,a.useState)(!1),[y,h]=(0,a.useState)(0),m=(0,a.useCallback)(()=>{if(u)return;let s=[...e],a={...s[0]};if(a.x+=r.x,a.y+=r.y,a.x<0||a.x>=20||a.y<0||a.y>=20||s.some(e=>e.x===a.x&&e.y===a.y)){d(!0);return}s.unshift(a),a.x===c.x&&a.y===c.y?(h(e=>e+1),x(p())):s.pop(),t(s)},[e,r,c,u,p]);(0,a.useEffect)(()=>{let e=e=>{switch(e.key){case"ArrowUp":0===r.y&&o({x:0,y:-1});break;case"ArrowDown":0===r.y&&o({x:0,y:1});break;case"ArrowLeft":0===r.x&&o({x:-1,y:0});break;case"ArrowRight":0===r.x&&o({x:1,y:0})}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[r]),(0,a.useEffect)(()=>{let e=setInterval(m,200);return()=>clearInterval(e)},[m]);let p=()=>{let t;do t={x:Math.floor(20*Math.random()),y:Math.floor(20*Math.random())};while(e.some(e=>e.x===t.x&&e.y===t.y));return t};return(0,s.jsxs)("div",{className:"nes-container with-title",children:[(0,s.jsx)("p",{className:"title",children:"Emoji Snake Game"}),(0,s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(20,", ").concat(20,"px)"),gap:"1px",backgroundColor:"#000",border:"1px solid #000"},children:Array.from({length:400}).map((t,r)=>{let a=r%20,n=Math.floor(r/20),l=e.some(e=>e.x===a&&e.y===n),i=c.x===a&&c.y===n,o="\uD83D\uDFE9";return l&&(o="\uD83D\uDC0D"),i&&(o="\uD83C\uDF4E"),(0,s.jsx)("div",{style:{width:20,height:20,fontSize:"16px",textAlign:"center"},children:o},r)})}),(0,s.jsxs)("div",{className:"nes-container is-rounded",style:{marginTop:"1rem"},children:[(0,s.jsxs)("p",{children:["Score: ",y]}),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"nes-text is-error",children:"Game Over!"}),(0,s.jsx)("button",{className:"nes-btn is-primary",onClick:()=>{t(n),o(l),x(i),d(!1),h(0)},children:"Restart"})]})]})]})}}}]);