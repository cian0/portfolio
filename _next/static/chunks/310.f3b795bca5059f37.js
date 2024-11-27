"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{7310:function(e,t,n){n.r(t);var i=n(5893),r=n(7294),o=n(5152),l=n.n(o);let a=()=>{let e=(0,r.useRef)(null),[t,o]=(0,r.useState)("White to move"),[l,a]=(0,r.useState)({width:800,height:800});return(0,r.useEffect)(()=>{let e=()=>{let e=Math.min(window.innerWidth,window.innerHeight-100);a({width:e,height:e})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{let t;return(async()=>{console.log("Initializing Phaser...");let i=(await Promise.all([n.e(989),n.e(454)]).then(n.t.bind(n,2260,23))).default;console.log("Phaser imported successfully:",i);let r={type:i.AUTO,width:l.width,height:l.height,parent:"game-container",backgroundColor:"#111111",scene:{create:function(){console.log("Create function called");let e=r.width/8;for(let t=0;t<8;t++)for(let n=0;n<8;n++){let i=(n+t)%2==0?4473924:6710886;this.add.rectangle(n*e+e/2,t*e+e/2,e,e,i)}for(let t=0;t<8;t++)for(let n=0;n<8;n++)if(s[t][n]){let i=this.add.text(n*e+e/2,t*e+e/2,a[s[t][n]],{fontSize:"".concat(.7*e,"px"),color:"w"===s[t][n][0]?"#00FFFF":"#FF00FF"}).setOrigin(.5).setInteractive({draggable:!0});i.pieceType=s[t][n],i.gridX=n,i.gridY=t,h.push(i)}this.input.on("dragstart",g),this.input.on("drag",p),this.input.on("dragend",w),console.log("Create function completed")},update:function(){}}};console.log("Game configuration:",r);let a={wk:"♔",wq:"♕",wr:"♖",wb:"♗",wn:"♘",wp:"♙",bk:"♚",bq:"♛",br:"♜",bb:"♝",bn:"♞",bp:"♟️"},s=[["wr","wn","wb","wq","wk","wb","wn","wr"],["wp","wp","wp","wp","wp","wp","wp","wp"],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["bp","bp","bp","bp","bp","bp","bp","bp"],["br","bn","bb","bq","bk","bb","bn","br"]],c=null,d="w",h=[];function g(e,t){t.pieceType[0]===d?(c=t,o("Dragging ".concat(t.pieceType,". Release to move.")),t.setTint(65280)):o("It's ".concat("w"===d?"White":"Black","'s turn."))}function p(e,t,n,i){t.x=n,t.y=i}function w(e,t){if(t.clearTint(),c){var n;let e=r.width/8,i=Math.floor(t.x/e),l=Math.floor(t.y/e);(n=c,i>=0&&i<8&&l>=0&&l<8&&(""===s[l][i]||s[l][i][0]!==n.pieceType[0]))?(function(e,t,n){let i=r.width/8;s[e.gridY][e.gridX]="";let o=h.find(e=>e.gridX===t&&e.gridY===n);o&&(o.destroy(),h=h.filter(e=>e!==o)),s[n][t]=e.pieceType,e.gridX=t,e.gridY=n,e.x=t*i+i/2,e.y=n*i+i/2}(c,i,l),d="w"===d?"b":"w",o("".concat("w"===d?"White":"Black"," to move"))):(t.x=c.gridX*e+e/2,t.y=c.gridY*e+e/2,o("Invalid move. Try again.")),c=null}}e.current?(console.log("Creating new Phaser game instance"),console.log("Phaser game instance created:",t=new i.Game(r))):console.error("Game container ref is null")})().catch(e=>{console.error("Error initializing Phaser:",e)}),()=>{t&&(console.log("Destroying Phaser game instance"),t.destroy(!0))}},[l]),(0,i.jsxs)("div",{className:"retro-post",style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)("div",{ref:e,id:"game-container",style:{width:"".concat(l.width,"px"),height:"".concat(l.height,"px")}}),(0,i.jsxs)("div",{className:"retro-section",style:{marginTop:"1rem",textAlign:"center"},children:[(0,i.jsx)("p",{className:"retro-text",children:t}),(0,i.jsx)("p",{className:"retro-text",children:"Drag and drop pieces to move them."})]})]})};t.default=l()(()=>Promise.resolve(a),{ssr:!1})}}]);