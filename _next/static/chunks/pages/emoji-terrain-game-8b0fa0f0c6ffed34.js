(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{3994:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/emoji-terrain-game",function(){return r(3284)}])},9606:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},noSSR:function(){return o}});let l=r(8754);r(5893),r(7294);let n=l._(r(6119));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e});let i=(l={...l,...t}).loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=i?i().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,o(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6725:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let l=r(8754)._(r(7294)).default.createContext(null)},6119:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let l=r(8754)._(r(7294)),n=r(6725),a=[],o=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function s(){if(!a){let t=new u(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return s()})}function d(e,t){!function(){s();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=l.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),l.default.useMemo(()=>{var t;return o.loading||o.error?l.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?l.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return d.preload=()=>s(),d.displayName="LoadableComponent",l.default.forwardRef(d)}(s,e)}function c(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(i=!0,t());c(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},3284:function(e,t,r){"use strict";r.r(t);var l=r(5893);r(7294);var n=r(5152),a=r.n(n);r(1664);let o=a()(()=>r.e(257).then(r.bind(r,2257)),{loadableGenerated:{webpack:()=>[2257]},ssr:!1,loading:()=>(0,l.jsx)("p",{className:"nes-text is-primary",children:"Loading game..."})});t.default=()=>(0,l.jsx)("div",{className:"retro-container",children:(0,l.jsxs)("div",{className:"retro-post",children:[(0,l.jsx)("div",{className:"retro-header",children:"\uD83C\uDF33 Emoji Terrain Adventure \uD83E\uDD20"}),(0,l.jsxs)("div",{className:"retro-section",children:[(0,l.jsx)("p",{children:"Welcome to the pixelated world of Emoji Terrain!"}),(0,l.jsx)("p",{children:"Navigate through trees and grass in this retro-styled adventure."})]}),(0,l.jsx)(o,{}),(0,l.jsxs)("div",{className:"retro-section",children:[(0,l.jsx)("p",{children:"\uD83C\uDFAE Game Instructions:"}),(0,l.jsxs)("ul",{className:"nes-list is-disc",children:[(0,l.jsx)("li",{children:"Use arrow keys to move your cowboy emoji"}),(0,l.jsx)("li",{children:"Avoid trees and explore the terrain"}),(0,l.jsx)("li",{children:"Have fun in this retro emoji world!"})]})]})]})})},5152:function(e,t,r){e.exports=r(9606)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3994)}),_N_E=e.O()}]);