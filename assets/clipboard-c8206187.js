import{g as G,c as V}from"./_commonjsHelpers-725317a4.js";function X(_,w){for(var k=0;k<w.length;k++){const b=w[k];if(typeof b!="string"&&!Array.isArray(b)){for(const g in b)if(g!=="default"&&!(g in _)){const a=Object.getOwnPropertyDescriptor(b,g);a&&Object.defineProperty(_,g,a.get?a:{enumerable:!0,get:()=>b[g]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var L={exports:{}};/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(_,w){(function(b,g){_.exports=g()})(V,function(){return function(){var k={134:function(a,c,e){e.d(c,{default:function(){return Y}});var o=e(279),u=e.n(o),f=e(370),y=e.n(f),h=e(817),m=e.n(h);function l(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(t){return typeof t}:l=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(r)}function p(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function d(r,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function E(r,n,t){return n&&d(r.prototype,n),t&&d(r,t),r}var R=function(){function r(n){p(this,r),this.resolveOptions(n),this.initSelection()}return E(r,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(i,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,i=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(i),this.selectedText=m()(i),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=m()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch{t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=t,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(t!==void 0)if(t&&l(t)==="object"&&t.nodeType===1){if(this.action==="copy"&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=t}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),r}(),j=R;function S(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(t){return typeof t}:S=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(r)}function F(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function C(r,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function N(r,n,t){return n&&C(r.prototype,n),t&&C(r,t),r}function M(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&A(r,n)}function A(r,n){return A=Object.setPrototypeOf||function(i,s){return i.__proto__=s,i},A(r,n)}function H(r){var n=I();return function(){var i=x(r),s;if(n){var v=x(this).constructor;s=Reflect.construct(i,arguments,v)}else s=i.apply(this,arguments);return D(this,s)}}function D(r,n){return n&&(S(n)==="object"||typeof n=="function")?n:z(r)}function z(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function I(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function x(r){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(r)}function O(r,n){var t="data-clipboard-".concat(r);if(n.hasAttribute(t))return n.getAttribute(t)}var U=function(r){M(t,r);var n=H(t);function t(i,s){var v;return F(this,t),v=n.call(this),v.resolveOptions(s),v.listenClick(i),v}return N(t,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=S(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var v=this;this.listener=y()(s,"click",function(T){return v.onClick(T)})}},{key:"onClick",value:function(s){var v=s.delegateTarget||s.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new j({action:this.action(v),target:this.target(v),text:this.text(v),container:this.container,trigger:v,emitter:this})}},{key:"defaultAction",value:function(s){return O("action",s)}},{key:"defaultTarget",value:function(s){var v=O("target",s);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(s){return O("text",s)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof s=="string"?[s]:s,T=!!document.queryCommandSupported;return v.forEach(function($){T=T&&!!document.queryCommandSupported($)}),T}}]),t}(u()),Y=U},828:function(a){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function o(u,f){for(;u&&u.nodeType!==c;){if(typeof u.matches=="function"&&u.matches(f))return u;u=u.parentNode}}a.exports=o},438:function(a,c,e){var o=e(828);function u(h,m,l,p,d){var E=y.apply(this,arguments);return h.addEventListener(l,E,d),{destroy:function(){h.removeEventListener(l,E,d)}}}function f(h,m,l,p,d){return typeof h.addEventListener=="function"?u.apply(null,arguments):typeof l=="function"?u.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(E){return u(E,m,l,p,d)}))}function y(h,m,l,p){return function(d){d.delegateTarget=o(d.target,m),d.delegateTarget&&p.call(h,d)}}a.exports=f},879:function(a,c){c.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},c.nodeList=function(e){var o=Object.prototype.toString.call(e);return e!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in e&&(e.length===0||c.node(e[0]))},c.string=function(e){return typeof e=="string"||e instanceof String},c.fn=function(e){var o=Object.prototype.toString.call(e);return o==="[object Function]"}},370:function(a,c,e){var o=e(879),u=e(438);function f(l,p,d){if(!l&&!p&&!d)throw new Error("Missing required arguments");if(!o.string(p))throw new TypeError("Second argument must be a String");if(!o.fn(d))throw new TypeError("Third argument must be a Function");if(o.node(l))return y(l,p,d);if(o.nodeList(l))return h(l,p,d);if(o.string(l))return m(l,p,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(l,p,d){return l.addEventListener(p,d),{destroy:function(){l.removeEventListener(p,d)}}}function h(l,p,d){return Array.prototype.forEach.call(l,function(E){E.addEventListener(p,d)}),{destroy:function(){Array.prototype.forEach.call(l,function(E){E.removeEventListener(p,d)})}}}function m(l,p,d){return u(document.body,l,p,d)}a.exports=f},817:function(a){function c(e){var o;if(e.nodeName==="SELECT")e.focus(),o=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var u=e.hasAttribute("readonly");u||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),u||e.removeAttribute("readonly"),o=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var f=window.getSelection(),y=document.createRange();y.selectNodeContents(e),f.removeAllRanges(),f.addRange(y),o=f.toString()}return o}a.exports=c},279:function(a){function c(){}c.prototype={on:function(e,o,u){var f=this.e||(this.e={});return(f[e]||(f[e]=[])).push({fn:o,ctx:u}),this},once:function(e,o,u){var f=this;function y(){f.off(e,y),o.apply(u,arguments)}return y._=o,this.on(e,y,u)},emit:function(e){var o=[].slice.call(arguments,1),u=((this.e||(this.e={}))[e]||[]).slice(),f=0,y=u.length;for(f;f<y;f++)u[f].fn.apply(u[f].ctx,o);return this},off:function(e,o){var u=this.e||(this.e={}),f=u[e],y=[];if(f&&o)for(var h=0,m=f.length;h<m;h++)f[h].fn!==o&&f[h].fn._!==o&&y.push(f[h]);return y.length?u[e]=y:delete u[e],this}},a.exports=c,a.exports.TinyEmitter=c}},b={};function g(a){if(b[a])return b[a].exports;var c=b[a]={exports:{}};return k[a](c,c.exports,g),c.exports}return function(){g.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return g.d(c,{a:c}),c}}(),function(){g.d=function(a,c){for(var e in c)g.o(c,e)&&!g.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:c[e]})}}(),function(){g.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)}}(),g(134)}().default})})(L);var P=L.exports;const B=G(P),K=X({__proto__:null,default:B},[P]);export{K as c};
