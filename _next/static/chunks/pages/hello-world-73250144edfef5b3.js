(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{2443:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hello-world",function(){return r(2192)}])},2192:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var o=r(5893),n=r(7294),a=r(6206);function s(e){let{workouts:t,addWorkout:r}=e,[a,s]=(0,n.useState)(""),[u,l]=(0,n.useState)("");return(0,o.jsxs)("div",{className:"workout-tracker",children:[(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),a&&u&&(r({exercise:a,duration:parseInt(u),date:new Date().toISOString()}),s(""),l(""))},children:[(0,o.jsx)("input",{type:"text",value:a,onChange:e=>s(e.target.value),placeholder:"Exercise",className:"retro-input"}),(0,o.jsx)("input",{type:"number",value:u,onChange:e=>l(e.target.value),placeholder:"Duration (minutes)",className:"retro-input"}),(0,o.jsx)("button",{type:"submit",className:"retro-button",children:"Add Workout"})]}),(0,o.jsx)("ul",{className:"workout-list",children:t.map((e,t)=>(0,o.jsxs)("li",{className:"workout-item",children:[e.exercise," - ",e.duration," minutes",e.date&&" (".concat(new Date(e.date).toLocaleDateString(),")")]},t))}),t.length>0&&(0,o.jsx)("button",{onClick:()=>{localStorage.removeItem("workouts"),window.location.reload()},className:"retro-button clear-button",children:"Clear All Workouts"})]})}function u(){let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=localStorage.getItem("workouts");e&&t(JSON.parse(e))},[]),(0,o.jsx)(a.Z,{children:(0,o.jsx)("div",{className:"retro-container",children:(0,o.jsxs)("div",{className:"retro-post",children:[(0,o.jsx)("h1",{children:"Workout Tracker"}),(0,o.jsx)(s,{workouts:e,addWorkout:r=>{let o=[...e,r];t(o),localStorage.setItem("workouts",JSON.stringify(o))}})]})})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2443)}),_N_E=e.O()}]);