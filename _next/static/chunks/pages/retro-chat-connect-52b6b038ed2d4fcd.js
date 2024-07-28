(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{1071:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/retro-chat-connect",function(){return n(5125)}])},5125:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(5893),r=n(7294),s=n(7632),o=n(3977),c=n(1019);let i=(0,o.ZF)({apiKey:"AIzaSyC3CrUNAGRVhqeYO5sZho_6ESTwv8VJrTs",authDomain:"cian0-4823e.firebaseapp.com",projectId:"cian0-4823e",storageBucket:"cian0-4823e.appspot.com",messagingSenderId:"787470014397",databaseURL:"https://cian0-4823e-default-rtdb.firebaseio.com/",appId:"1:787470014397:web:3213c3fa4a105d9a4c64d4",measurementId:"G-FEWCH0C7LM"}),l=(0,c.N8)(i);var d=()=>{let[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(null),[i,d]=(0,r.useState)(null),[u,h]=(0,r.useState)([]),[m,p]=(0,r.useState)(""),[f,y]=(0,r.useState)("Disconnected"),[g,x]=(0,r.useState)(!1),w=(0,r.useRef)(null),C=(0,r.useRef)(null),v=(0,r.useRef)(null),j=(0,r.useRef)(null);(0,r.useEffect)(()=>()=>{v.current&&v.current.close(),n&&n.getTracks().forEach(e=>e.stop())},[n]);let N=()=>{let e=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});e.onicecandidate=e=>{e.candidate&&k({type:"candidate",candidate:e.candidate})},e.ontrack=e=>{d(e.streams[0])},e.ondatachannel=e=>{E(e.channel)},v.current=e,y("Peer connection created")},E=e=>{j.current=e,e.onopen=()=>{console.log("Data channel is open"),y("Connected")},e.onmessage=e=>{h(t=>[...t,{text:e.data,sent:!1}])},e.onerror=e=>{console.error("Data channel error:",e),y("Error in data channel")},e.onclose=()=>{console.log("Data channel is closed"),y("Disconnected")}},b=async()=>{let n=e;n||t(n=(0,s.Z)());let a=(0,c.iH)(l,"rooms/".concat(n));try{(await new Promise(e=>(0,c.jM)(a,e,{onlyOnce:!0}))).exists()||(x(!0),await (0,c.t8)(a,{created:!0})),(0,c.yv)(a,async e=>{if("offer"!==e.key||g){if("answer"===e.key&&g){let t=e.val();await v.current.setRemoteDescription(new RTCSessionDescription(t))}else if("candidate"===e.key){let t=e.val();await v.current.addIceCandidate(new RTCIceCandidate(t))}}else{let t=e.val();await S(t)}}),y(g?"Waiting for peer...":"Joining room..."),N(),g&&await D(n)}catch(e){console.error("Error creating/joining room:",e),y("Error: "+e.message)}},k=t=>{(0,c.VF)((0,c.iH)(l,"rooms/".concat(e)),t)},D=async e=>{try{let e=v.current.createDataChannel("chat");E(e);let t=await v.current.createOffer();await v.current.setLocalDescription(t),k({type:"offer",offer:t})}catch(e){console.error("Error creating offer:",e),y("Error creating offer: "+e.message)}},S=async e=>{try{await v.current.setRemoteDescription(new RTCSessionDescription(e));let t=await v.current.createAnswer();await v.current.setLocalDescription(t),k({type:"answer",answer:t})}catch(e){console.error("Error handling offer:",e),y("Error handling offer: "+e.message)}},R=async()=>{try{let e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});o(e),w.current&&(w.current.srcObject=e),v.current&&e.getTracks().forEach(t=>v.current.addTrack(t,e)),y("Local stream started")}catch(e){console.error("Error accessing media devices:",e),y("Error: "+e.message)}};return(0,a.jsxs)("div",{className:"nes-container is-dark with-title",children:[(0,a.jsx)("p",{className:"title",children:"Retro Chat Connect"}),(0,a.jsxs)("div",{className:"nes-container is-rounded",children:[(0,a.jsx)("input",{type:"text",className:"nes-input is-dark",value:e,onChange:e=>t(e.target.value),placeholder:"Enter room ID or leave blank to create new"}),(0,a.jsx)("button",{type:"button",className:"nes-btn is-primary",onClick:b,children:"Create/Join Room"}),(0,a.jsxs)("p",{children:["Status: ",f]}),e&&(0,a.jsxs)("p",{children:["Room ID: ",e]})]}),(0,a.jsxs)("div",{className:"nes-container is-rounded",style:{marginTop:"1rem"},children:[(0,a.jsx)("video",{ref:w,autoPlay:!0,muted:!0,style:{width:"200px",height:"150px"}}),(0,a.jsx)("video",{ref:C,autoPlay:!0,style:{width:"200px",height:"150px"}})]}),(0,a.jsx)("button",{type:"button",className:"nes-btn is-primary",onClick:R,children:"Start Camera"}),(0,a.jsx)("div",{className:"nes-container is-rounded",style:{marginTop:"1rem",height:"200px",overflowY:"scroll"},children:u.map((e,t)=>(0,a.jsx)("div",{className:"nes-balloon ".concat(e.sent?"from-right":"from-left"),children:(0,a.jsx)("p",{children:e.text})},t))}),(0,a.jsxs)("div",{style:{display:"flex",marginTop:"1rem"},children:[(0,a.jsx)("input",{type:"text",className:"nes-input is-dark",value:m,onChange:e=>p(e.target.value),placeholder:"Type your message..."}),(0,a.jsx)("button",{type:"button",className:"nes-btn is-primary",onClick:()=>{m&&j.current&&"open"===j.current.readyState?(j.current.send(m),h(e=>[...e,{text:m,sent:!0}]),p("")):(console.error("Cannot send message: Data channel is not open"),y("Error: Data channel not open. Please ensure connection is established."))},children:"Send"})]})]})},u=()=>(0,a.jsxs)("div",{className:"nes-container is-dark with-title",style:{maxWidth:"900px",margin:"2rem auto"},children:[(0,a.jsx)("p",{className:"title",children:"Retro Chat Connect"}),(0,a.jsxs)("div",{className:"nes-container is-rounded",children:[(0,a.jsx)("p",{className:"nes-text is-primary",children:"Welcome to Retro Chat Connect!"}),(0,a.jsx)("p",{children:"Share your unique room ID with a friend to start chatting."})]}),(0,a.jsx)(d,{})]})}},function(e){e.O(0,[627,344,888,774,179],function(){return e(e.s=1071)}),_N_E=e.O()}]);