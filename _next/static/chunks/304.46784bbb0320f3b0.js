!function(){var e,t,r,o,n,s,i,c,a={9958:function(e,t,r){"use strict";var o=r(9324);console.log("Worker: Script loaded");let n=null;async function s(e){try{console.log("Worker: Starting pipeline initialization"),n=await (0,o.EUT)("automatic-speech-recognition","Xenova/whisper-tiny.en",{progress_callback:e}),console.log("Worker: Pipeline initialized"),self.postMessage({status:"ready"})}catch(e){console.error("Worker: Error during model loading",e),self.postMessage({status:"error",error:e.message})}}self.addEventListener("message",async e=>{if(console.log("Worker: Received message",e.data),"load_model"===e.data.command)await s(e=>{self.postMessage({status:"progress",progress:"number"==typeof e.progress?e.progress:0})});else if("transcribe"===e.data.command){if(!n){self.postMessage({status:"error",error:"Model not loaded"});return}let{audioData:t}=e.data;try{console.log("Worker: Starting transcription");let e=await n(t);console.log("Worker: Transcription complete",e),self.postMessage({status:"complete",output:e})}catch(e){console.error("Worker: Error during processing",e),self.postMessage({status:"error",error:e.message})}}})},495:function(){},7147:function(){},1418:function(){},8741:function(){},8386:function(){},3342:function(){},8563:function(e,t,r){"use strict";r.d(t,{O:function(){return h}});var o=r(8386),n=r(3342),s=r(1987);let{env:i}=r(1328).ONNX,c="2.17.2",a="undefined"!=typeof self&&"caches"in self,u=!y(o),f=!y(n),l=u&&f,d=l?n.dirname(n.dirname(s.fileURLToPath("file:///home/ian/projs/portfolio/node_modules/@xenova/transformers/src/env.js"))):"./",p=l?n.join(d,"/.cache/"):null,g="/models/",m=l?n.join(d,g):g;i?.wasm&&(i.wasm.wasmPaths=l?n.join(d,"/dist/"):`https://cdn.jsdelivr.net/npm/@xenova/transformers@${c}/dist/`);let h={backends:{onnx:i,tfjs:{}},__dirname:d,version:c,allowRemoteModels:!0,remoteHost:"https://huggingface.co/",remotePathTemplate:"{model}/resolve/{revision}/",allowLocalModels:!0,localModelPath:m,useFS:u,useBrowserCache:a,useFSCache:u,cacheDir:p,useCustomCache:!1,customCache:null};function y(e){return 0===Object.keys(e).length}},9324:function(e,t,r){"use strict";r.d(t,{EUT:function(){return o.EU},qCb:function(){return n.qC}});var o=r(9539);r(8563),r(2622),r(4790),r(8823),r(3675),r(3138),r(2327),r(4e3);var n=r(1912)}},u={};function f(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}},o=!0;try{a[e](r,r.exports,f),o=!1}finally{o&&delete u[e]}return r.exports}f.m=a,f.x=function(){var e=f.O(void 0,[770,90,800,594,18],function(){return f(9958)});return f.O(e)},e=[],f.O=function(t,r,o,n){if(r){n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n];return}for(var i=1/0,s=0;s<e.length;s++){for(var r=e[s][0],o=e[s][1],n=e[s][2],c=!0,a=0;a<r.length;a++)i>=n&&Object.keys(f.O).every(function(e){return f.O[e](r[a])})?r.splice(a--,1):(c=!1,n<i&&(i=n));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,o){if(1&o&&(e=this(e)),8&o||"object"==typeof e&&e&&(4&o&&e.__esModule||16&o&&"function"==typeof e.then))return e;var n=Object.create(null);f.r(n);var s={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach(function(t){s[t]=function(){return e[t]}});return s.default=function(){return e},f.d(n,s),n},f.d=function(e,t){for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce(function(t,r){return f.f[r](e,t),t},[]))},f.u=function(e){return"static/chunks/"+(({90:"79fd8960",770:"e2fde11a",800:"4edc0919"})[e]||e)+"."+({18:"71d3da857e67a56e",90:"e103b2f33aa6a5eb",594:"cfbfc657198dbbbf",770:"6f79f4b52acbbac8",800:"7e60f236f01280c2"})[e]+".js"},f.miniCssF=function(e){},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.tt=function(){return void 0===o&&(o={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("nextjs#bundler",o))),o},f.tu=function(e){return f.tt().createScriptURL(e)},f.p="/portfolio/_next/",n={304:1},f.f.i=function(e,t){n[e]||importScripts(f.tu(f.p+f.u(e)))},i=(s=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(s),s.push=function(e){var t=e[0],r=e[1],o=e[2];for(var s in r)f.o(r,s)&&(f.m[s]=r[s]);for(o&&o(f);t.length;)n[t.pop()]=1;i(e)},c=f.x,f.x=function(){return Promise.all([770,90,800,594,18].map(f.e,f)).then(c)},_N_E=f.x()}();