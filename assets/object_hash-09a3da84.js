import{g as cr}from"./_commonjsHelpers-725317a4.js";import{c as rr}from"./_commonjs-dynamic-modules-302442b1.js";function lr(Q,tr){for(var _=0;_<tr.length;_++){const j=tr[_];if(typeof j!="string"&&!Array.isArray(j)){for(const L in j)if(L!=="default"&&!(L in Q)){const S=Object.getOwnPropertyDescriptor(j,L);S&&Object.defineProperty(Q,L,S.get?S:{enumerable:!0,get:()=>j[L]})}}}return Object.freeze(Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}))}var ar={exports:{}};(function(Q,tr){(function(_){Q.exports=_()})(function(){return function _(j,L,S){function V(N,O){if(!L[N]){if(!j[N]){var J=typeof rr=="function"&&rr;if(!O&&J)return J(N,!0);if(H)return H(N,!0);throw new Error("Cannot find module '"+N+"'")}O=L[N]={exports:{}},j[N][0].call(O.exports,function(K){var q=j[N][1][K];return V(q||K)},O,O.exports,_,j,L,S)}return L[N].exports}for(var H=typeof rr=="function"&&rr,z=0;z<S.length;z++)V(S[z]);return V}({1:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){var y=_("crypto");function E(s,f){f=b(s,f);var n;return(n=f.algorithm!=="passthrough"?y.createHash(f.algorithm):new I).write===void 0&&(n.write=n.update,n.end=n.update),h(f,n).dispatch(s),n.update||n.end(""),n.digest?n.digest(f.encoding==="buffer"?void 0:f.encoding):(s=n.read(),f.encoding!=="buffer"?s.toString(f.encoding):s)}(L=j.exports=E).sha1=function(s){return E(s)},L.keys=function(s){return E(s,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},L.MD5=function(s){return E(s,{algorithm:"md5",encoding:"hex"})},L.keysMD5=function(s){return E(s,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var c=y.getHashes?y.getHashes().slice():["sha1","md5"],p=(c.push("passthrough"),["buffer","hex","binary","base64"]);function b(s,f){var n={};if(n.algorithm=(f=f||{}).algorithm||"sha1",n.encoding=f.encoding||"hex",n.excludeValues=!!f.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=f.ignoreUnknown===!0,n.respectType=f.respectType!==!1,n.respectFunctionNames=f.respectFunctionNames!==!1,n.respectFunctionProperties=f.respectFunctionProperties!==!1,n.unorderedArrays=f.unorderedArrays===!0,n.unorderedSets=f.unorderedSets!==!1,n.unorderedObjects=f.unorderedObjects!==!1,n.replacer=f.replacer||void 0,n.excludeKeys=f.excludeKeys||void 0,s===void 0)throw new Error("Object argument required.");for(var o=0;o<c.length;++o)c[o].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=c[o]);if(c.indexOf(n.algorithm)===-1)throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+c.join(", "));if(p.indexOf(n.encoding)===-1&&n.algorithm!=="passthrough")throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+p.join(", "));return n}function g(s){if(typeof s=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}function h(s,f,n){n=n||[];function o(t){return f.update?f.update(t,"utf8"):f.write(t,"utf8")}return{dispatch:function(t){return this["_"+((t=s.replacer?s.replacer(t):t)===null?"null":typeof t)](t)},_object:function(t){var u,a=Object.prototype.toString.call(t),B=/\[object (.*)\]/i.exec(a);if(B=(B=B?B[1]:"unknown:["+a+"]").toLowerCase(),0<=(a=n.indexOf(t)))return this.dispatch("[CIRCULAR:"+a+"]");if(n.push(t),H!==void 0&&H.isBuffer&&H.isBuffer(t))return o("buffer:"),o(t);if(B==="object"||B==="function"||B==="asyncfunction")return a=Object.keys(t),s.unorderedObjects&&(a=a.sort()),s.respectType===!1||g(t)||a.splice(0,0,"prototype","__proto__","constructor"),s.excludeKeys&&(a=a.filter(function(A){return!s.excludeKeys(A)})),o("object:"+a.length+":"),u=this,a.forEach(function(A){u.dispatch(A),o(":"),s.excludeValues||u.dispatch(t[A]),o(",")});if(!this["_"+B]){if(s.ignoreUnknown)return o("["+B+"]");throw new Error('Unknown object type "'+B+'"')}this["_"+B](t)},_array:function(t,A){A=A!==void 0?A:s.unorderedArrays!==!1;var a=this;if(o("array:"+t.length+":"),!A||t.length<=1)return t.forEach(function(x){return a.dispatch(x)});var B=[],A=t.map(function(x){var v=new I,k=n.slice();return h(s,v,k).dispatch(x),B=B.concat(k.slice(n.length)),v.read().toString()});return n=n.concat(B),A.sort(),this._array(A,!1)},_date:function(t){return o("date:"+t.toJSON())},_symbol:function(t){return o("symbol:"+t.toString())},_error:function(t){return o("error:"+t.toString())},_boolean:function(t){return o("bool:"+t.toString())},_string:function(t){o("string:"+t.length+":"),o(t.toString())},_function:function(t){o("fn:"),g(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this._object(t)},_number:function(t){return o("number:"+t.toString())},_xml:function(t){return o("xml:"+t.toString())},_null:function(){return o("Null")},_undefined:function(){return o("Undefined")},_regexp:function(t){return o("regex:"+t.toString())},_uint8array:function(t){return o("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray:function(t){return o("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array:function(t){return o("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array:function(t){return o("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array:function(t){return o("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array:function(t){return o("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array:function(t){return o("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array:function(t){return o("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array:function(t){return o("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer:function(t){return o("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url:function(t){return o("url:"+t.toString())},_map:function(t){return o("map:"),t=Array.from(t),this._array(t,s.unorderedSets!==!1)},_set:function(t){return o("set:"),t=Array.from(t),this._array(t,s.unorderedSets!==!1)},_file:function(t){return o("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob:function(){if(s.ignoreUnknown)return o("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return o("domwindow")},_bigint:function(t){return o("bigint:"+t.toString())},_process:function(){return o("process")},_timer:function(){return o("timer")},_pipe:function(){return o("pipe")},_tcp:function(){return o("tcp")},_udp:function(){return o("udp")},_tty:function(){return o("tty")},_statwatcher:function(){return o("statwatcher")},_securecontext:function(){return o("securecontext")},_connection:function(){return o("connection")},_zlib:function(){return o("zlib")},_context:function(){return o("context")},_nodescript:function(){return o("nodescript")},_httpparser:function(){return o("httpparser")},_dataview:function(){return o("dataview")},_signal:function(){return o("signal")},_fsevent:function(){return o("fsevent")},_tlswrap:function(){return o("tlswrap")}}}function I(){return{buf:"",write:function(s){this.buf+=s},end:function(s){this.buf+=s},read:function(){return this.buf}}}L.writeToStream=function(s,f,n){return n===void 0&&(n=f,f={}),h(f=b(s,f),n).dispatch(s)}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){(function(y){var E=typeof Uint8Array<"u"?Uint8Array:Array,c="+".charCodeAt(0),p="/".charCodeAt(0),b="0".charCodeAt(0),g="a".charCodeAt(0),h="A".charCodeAt(0),I="-".charCodeAt(0),s="_".charCodeAt(0);function f(n){return n=n.charCodeAt(0),n===c||n===I?62:n===p||n===s?63:n<b?-1:n<b+10?n-b+26+26:n<h+26?n-h:n<g+26?n-g+26:void 0}y.toByteArray=function(n){var o,t;if(0<n.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var u=n.length,u=n.charAt(u-2)==="="?2:n.charAt(u-1)==="="?1:0,a=new E(3*n.length/4-u),B=0<u?n.length-4:n.length,A=0;function x(v){a[A++]=v}for(o=0;o<B;o+=4,0)x((16711680&(t=f(n.charAt(o))<<18|f(n.charAt(o+1))<<12|f(n.charAt(o+2))<<6|f(n.charAt(o+3))))>>16),x((65280&t)>>8),x(255&t);return u==2?x(255&(t=f(n.charAt(o))<<2|f(n.charAt(o+1))>>4)):u==1&&(x((t=f(n.charAt(o))<<10|f(n.charAt(o+1))<<4|f(n.charAt(o+2))>>2)>>8&255),x(255&t)),a},y.fromByteArray=function(n){var o,t,u,a,B=n.length%3,A="";function x(v){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(v)}for(o=0,u=n.length-B;o<u;o+=3)t=(n[o]<<16)+(n[o+1]<<8)+n[o+2],A+=x((a=t)>>18&63)+x(a>>12&63)+x(a>>6&63)+x(63&a);switch(B){case 1:A=(A+=x((t=n[n.length-1])>>2))+x(t<<4&63)+"==";break;case 2:A=(A=(A+=x((t=(n[n.length-2]<<8)+n[n.length-1])>>10))+x(t>>4&63))+x(t<<2&63)+"="}return A}})(L===void 0?this.base64js={}:L)}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(_,j,L){(function(S,V,c,z,N,O,J,K,q){var y=_("base64-js"),E=_("ieee754");function c(r,e,i){if(!(this instanceof c))return new c(r,e,i);var d,l,m,U,M=typeof r;if(e==="base64"&&M=="string")for(r=(U=r).trim?U.trim():U.replace(/^\s+|\s+$/g,"");r.length%4!=0;)r+="=";if(M=="number")d=P(r);else if(M=="string")d=c.byteLength(r,e);else{if(M!="object")throw new Error("First argument needs to be a number, array or string.");d=P(r.length)}if(c._useTypedArrays?l=c._augment(new Uint8Array(d)):((l=this).length=d,l._isBuffer=!0),c._useTypedArrays&&typeof r.byteLength=="number")l._set(r);else if(T(U=r)||c.isBuffer(U)||U&&typeof U=="object"&&typeof U.length=="number")for(m=0;m<d;m++)c.isBuffer(r)?l[m]=r.readUInt8(m):l[m]=r[m];else if(M=="string")l.write(r,0,e);else if(M=="number"&&!c._useTypedArrays&&!i)for(m=0;m<d;m++)l[m]=0;return l}function p(r,e,i,d){return c._charsWritten=Z(function(l){for(var m=[],U=0;U<l.length;U++)m.push(255&l.charCodeAt(U));return m}(e),r,i,d)}function b(r,e,i,d){return c._charsWritten=Z(function(l){for(var m,U,M=[],Y=0;Y<l.length;Y++)U=l.charCodeAt(Y),m=U>>8,U=U%256,M.push(U),M.push(m);return M}(e),r,i,d)}function g(r,e,i){var d="";i=Math.min(r.length,i);for(var l=e;l<i;l++)d+=String.fromCharCode(r[l]);return d}function h(r,e,i,m){m||(w(typeof i=="boolean","missing or invalid endian"),w(e!=null,"missing offset"),w(e+1<r.length,"Trying to read beyond buffer length"));var l,m=r.length;if(!(m<=e))return i?(l=r[e],e+1<m&&(l|=r[e+1]<<8)):(l=r[e]<<8,e+1<m&&(l|=r[e+1])),l}function I(r,e,i,m){m||(w(typeof i=="boolean","missing or invalid endian"),w(e!=null,"missing offset"),w(e+3<r.length,"Trying to read beyond buffer length"));var l,m=r.length;if(!(m<=e))return i?(e+2<m&&(l=r[e+2]<<16),e+1<m&&(l|=r[e+1]<<8),l|=r[e],e+3<m&&(l+=r[e+3]<<24>>>0)):(e+1<m&&(l=r[e+1]<<16),e+2<m&&(l|=r[e+2]<<8),e+3<m&&(l|=r[e+3]),l+=r[e]<<24>>>0),l}function s(r,e,i,d){if(d||(w(typeof i=="boolean","missing or invalid endian"),w(e!=null,"missing offset"),w(e+1<r.length,"Trying to read beyond buffer length")),!(r.length<=e))return d=h(r,e,i,!0),32768&d?-1*(65535-d+1):d}function f(r,e,i,d){if(d||(w(typeof i=="boolean","missing or invalid endian"),w(e!=null,"missing offset"),w(e+3<r.length,"Trying to read beyond buffer length")),!(r.length<=e))return d=I(r,e,i,!0),2147483648&d?-1*(4294967295-d+1):d}function n(r,e,i,d){return d||(w(typeof i=="boolean","missing or invalid endian"),w(e+3<r.length,"Trying to read beyond buffer length")),E.read(r,e,i,23,4)}function o(r,e,i,d){return d||(w(typeof i=="boolean","missing or invalid endian"),w(e+7<r.length,"Trying to read beyond buffer length")),E.read(r,e,i,52,8)}function t(r,e,i,d,l){if(l||(w(e!=null,"missing value"),w(typeof d=="boolean","missing or invalid endian"),w(i!=null,"missing offset"),w(i+1<r.length,"trying to write beyond buffer length"),nr(e,65535)),l=r.length,!(l<=i))for(var m=0,U=Math.min(l-i,2);m<U;m++)r[i+m]=(e&255<<8*(d?m:1-m))>>>8*(d?m:1-m)}function u(r,e,i,d,l){if(l||(w(e!=null,"missing value"),w(typeof d=="boolean","missing or invalid endian"),w(i!=null,"missing offset"),w(i+3<r.length,"trying to write beyond buffer length"),nr(e,4294967295)),l=r.length,!(l<=i))for(var m=0,U=Math.min(l-i,4);m<U;m++)r[i+m]=e>>>8*(d?m:3-m)&255}function a(r,e,i,d,l){l||(w(e!=null,"missing value"),w(typeof d=="boolean","missing or invalid endian"),w(i!=null,"missing offset"),w(i+1<r.length,"Trying to write beyond buffer length"),er(e,32767,-32768)),r.length<=i||t(r,0<=e?e:65535+e+1,i,d,l)}function B(r,e,i,d,l){l||(w(e!=null,"missing value"),w(typeof d=="boolean","missing or invalid endian"),w(i!=null,"missing offset"),w(i+3<r.length,"Trying to write beyond buffer length"),er(e,2147483647,-2147483648)),r.length<=i||u(r,0<=e?e:4294967295+e+1,i,d,l)}function A(r,e,i,d,l){l||(w(e!=null,"missing value"),w(typeof d=="boolean","missing or invalid endian"),w(i!=null,"missing offset"),w(i+3<r.length,"Trying to write beyond buffer length"),sr(e,34028234663852886e22,-34028234663852886e22)),r.length<=i||E.write(r,e,i,d,23,4)}function x(r,e,i,d,l){l||(w(e!=null,"missing value"),w(typeof d=="boolean","missing or invalid endian"),w(i!=null,"missing offset"),w(i+7<r.length,"Trying to write beyond buffer length"),sr(e,17976931348623157e292,-17976931348623157e292)),r.length<=i||E.write(r,e,i,d,52,8)}L.Buffer=c,L.SlowBuffer=c,L.INSPECT_MAX_BYTES=50,c.poolSize=8192,c._useTypedArrays=function(){try{var r=new ArrayBuffer(0),e=new Uint8Array(r);return e.foo=function(){return 42},e.foo()===42&&typeof e.subarray=="function"}catch{return!1}}(),c.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.isBuffer=function(r){return!(r==null||!r._isBuffer)},c.byteLength=function(r,e){var i;switch(r+="",e||"utf8"){case"hex":i=r.length/2;break;case"utf8":case"utf-8":i=X(r).length;break;case"ascii":case"binary":case"raw":i=r.length;break;case"base64":i=or(r).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=2*r.length;break;default:throw new Error("Unknown encoding")}return i},c.concat=function(r,e){if(w(T(r),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),r.length===0)return new c(0);if(r.length===1)return r[0];if(typeof e!="number")for(l=e=0;l<r.length;l++)e+=r[l].length;for(var i=new c(e),d=0,l=0;l<r.length;l++){var m=r[l];m.copy(i,d),d+=m.length}return i},c.prototype.write=function(r,e,i,d){isFinite(e)?isFinite(i)||(d=i,i=void 0):(Y=d,d=e,e=i,i=Y),e=Number(e)||0;var l,m,U,M,Y=this.length-e;switch((!i||Y<(i=Number(i)))&&(i=Y),d=String(d||"utf8").toLowerCase()){case"hex":l=function($,R,W,D){W=Number(W)||0;var F=$.length-W;(!D||F<(D=Number(D)))&&(D=F),w((F=R.length)%2==0,"Invalid hex string"),F/2<D&&(D=F/2);for(var G=0;G<D;G++){var ur=parseInt(R.substr(2*G,2),16);w(!isNaN(ur),"Invalid hex string"),$[W+G]=ur}return c._charsWritten=2*G,G}(this,r,e,i);break;case"utf8":case"utf-8":m=this,U=e,M=i,l=c._charsWritten=Z(X(r),m,U,M);break;case"ascii":case"binary":l=p(this,r,e,i);break;case"base64":m=this,U=e,M=i,l=c._charsWritten=Z(or(r),m,U,M);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":l=b(this,r,e,i);break;default:throw new Error("Unknown encoding")}return l},c.prototype.toString=function(r,e,i){var d,l,m,U,M=this;if(r=String(r||"utf8").toLowerCase(),e=Number(e)||0,(i=i!==void 0?Number(i):M.length)===e)return"";switch(r){case"hex":d=function(Y,$,R){var W=Y.length;(!$||$<0)&&($=0),(!R||R<0||W<R)&&(R=W);for(var D="",F=$;F<R;F++)D+=C(Y[F]);return D}(M,e,i);break;case"utf8":case"utf-8":d=function(Y,$,R){var W="",D="";R=Math.min(Y.length,R);for(var F=$;F<R;F++)Y[F]<=127?(W+=ir(D)+String.fromCharCode(Y[F]),D=""):D+="%"+Y[F].toString(16);return W+ir(D)}(M,e,i);break;case"ascii":case"binary":d=g(M,e,i);break;case"base64":l=M,U=i,d=(m=e)===0&&U===l.length?y.fromByteArray(l):y.fromByteArray(l.slice(m,U));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=function(Y,$,R){for(var W=Y.slice($,R),D="",F=0;F<W.length;F+=2)D+=String.fromCharCode(W[F]+256*W[F+1]);return D}(M,e,i);break;default:throw new Error("Unknown encoding")}return d},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.copy=function(r,e,i,d){if(e=e||0,(d=d||d===0?d:this.length)!==(i=i||0)&&r.length!==0&&this.length!==0){w(i<=d,"sourceEnd < sourceStart"),w(0<=e&&e<r.length,"targetStart out of bounds"),w(0<=i&&i<this.length,"sourceStart out of bounds"),w(0<=d&&d<=this.length,"sourceEnd out of bounds"),d>this.length&&(d=this.length);var l=(d=r.length-e<d-i?r.length-e+i:d)-i;if(l<100||!c._useTypedArrays)for(var m=0;m<l;m++)r[m+e]=this[m+i];else r._set(this.subarray(i,i+l),e)}},c.prototype.slice=function(r,e){var i=this.length;if(r=k(r,i,0),e=k(e,i,i),c._useTypedArrays)return c._augment(this.subarray(r,e));for(var d=e-r,l=new c(d,void 0,!0),m=0;m<d;m++)l[m]=this[m+r];return l},c.prototype.get=function(r){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(r)},c.prototype.set=function(r,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(r,e)},c.prototype.readUInt8=function(r,e){if(e||(w(r!=null,"missing offset"),w(r<this.length,"Trying to read beyond buffer length")),!(r>=this.length))return this[r]},c.prototype.readUInt16LE=function(r,e){return h(this,r,!0,e)},c.prototype.readUInt16BE=function(r,e){return h(this,r,!1,e)},c.prototype.readUInt32LE=function(r,e){return I(this,r,!0,e)},c.prototype.readUInt32BE=function(r,e){return I(this,r,!1,e)},c.prototype.readInt8=function(r,e){if(e||(w(r!=null,"missing offset"),w(r<this.length,"Trying to read beyond buffer length")),!(r>=this.length))return 128&this[r]?-1*(255-this[r]+1):this[r]},c.prototype.readInt16LE=function(r,e){return s(this,r,!0,e)},c.prototype.readInt16BE=function(r,e){return s(this,r,!1,e)},c.prototype.readInt32LE=function(r,e){return f(this,r,!0,e)},c.prototype.readInt32BE=function(r,e){return f(this,r,!1,e)},c.prototype.readFloatLE=function(r,e){return n(this,r,!0,e)},c.prototype.readFloatBE=function(r,e){return n(this,r,!1,e)},c.prototype.readDoubleLE=function(r,e){return o(this,r,!0,e)},c.prototype.readDoubleBE=function(r,e){return o(this,r,!1,e)},c.prototype.writeUInt8=function(r,e,i){i||(w(r!=null,"missing value"),w(e!=null,"missing offset"),w(e<this.length,"trying to write beyond buffer length"),nr(r,255)),e>=this.length||(this[e]=r)},c.prototype.writeUInt16LE=function(r,e,i){t(this,r,e,!0,i)},c.prototype.writeUInt16BE=function(r,e,i){t(this,r,e,!1,i)},c.prototype.writeUInt32LE=function(r,e,i){u(this,r,e,!0,i)},c.prototype.writeUInt32BE=function(r,e,i){u(this,r,e,!1,i)},c.prototype.writeInt8=function(r,e,i){i||(w(r!=null,"missing value"),w(e!=null,"missing offset"),w(e<this.length,"Trying to write beyond buffer length"),er(r,127,-128)),e>=this.length||(0<=r?this.writeUInt8(r,e,i):this.writeUInt8(255+r+1,e,i))},c.prototype.writeInt16LE=function(r,e,i){a(this,r,e,!0,i)},c.prototype.writeInt16BE=function(r,e,i){a(this,r,e,!1,i)},c.prototype.writeInt32LE=function(r,e,i){B(this,r,e,!0,i)},c.prototype.writeInt32BE=function(r,e,i){B(this,r,e,!1,i)},c.prototype.writeFloatLE=function(r,e,i){A(this,r,e,!0,i)},c.prototype.writeFloatBE=function(r,e,i){A(this,r,e,!1,i)},c.prototype.writeDoubleLE=function(r,e,i){x(this,r,e,!0,i)},c.prototype.writeDoubleBE=function(r,e,i){x(this,r,e,!1,i)},c.prototype.fill=function(r,e,i){if(e=e||0,i=i||this.length,w(typeof(r=typeof(r=r||0)=="string"?r.charCodeAt(0):r)=="number"&&!isNaN(r),"value is not a number"),w(e<=i,"end < start"),i!==e&&this.length!==0){w(0<=e&&e<this.length,"start out of bounds"),w(0<=i&&i<=this.length,"end out of bounds");for(var d=e;d<i;d++)this[d]=r}},c.prototype.inspect=function(){for(var r=[],e=this.length,i=0;i<e;i++)if(r[i]=C(this[i]),i===L.INSPECT_MAX_BYTES){r[i+1]="...";break}return"<Buffer "+r.join(" ")+">"},c.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(c._useTypedArrays)return new c(this).buffer;for(var r=new Uint8Array(this.length),e=0,i=r.length;e<i;e+=1)r[e]=this[e];return r.buffer};var v=c.prototype;function k(r,e,i){return typeof r!="number"?i:e<=(r=~~r)?e:0<=r||0<=(r+=e)?r:0}function P(r){return(r=~~Math.ceil(+r))<0?0:r}function T(r){return(Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"})(r)}function C(r){return r<16?"0"+r.toString(16):r.toString(16)}function X(r){for(var e=[],i=0;i<r.length;i++){var d=r.charCodeAt(i);if(d<=127)e.push(r.charCodeAt(i));else for(var l=i,m=(55296<=d&&d<=57343&&i++,encodeURIComponent(r.slice(l,i+1)).substr(1).split("%")),U=0;U<m.length;U++)e.push(parseInt(m[U],16))}return e}function or(r){return y.toByteArray(r)}function Z(r,e,i,d){for(var l=0;l<d&&!(l+i>=e.length||l>=r.length);l++)e[l+i]=r[l];return l}function ir(r){try{return decodeURIComponent(r)}catch{return String.fromCharCode(65533)}}function nr(r,e){w(typeof r=="number","cannot write a non-number as a number"),w(0<=r,"specified a negative value for writing an unsigned value"),w(r<=e,"value is larger than maximum value for type"),w(Math.floor(r)===r,"value has a fractional component")}function er(r,e,i){w(typeof r=="number","cannot write a non-number as a number"),w(r<=e,"value larger than maximum allowed value"),w(i<=r,"value smaller than minimum allowed value"),w(Math.floor(r)===r,"value has a fractional component")}function sr(r,e,i){w(typeof r=="number","cannot write a non-number as a number"),w(r<=e,"value larger than maximum allowed value"),w(i<=r,"value smaller than minimum allowed value")}function w(r,e){if(!r)throw new Error(e||"Failed assertion")}c._augment=function(r){return r._isBuffer=!0,r._get=r.get,r._set=r.set,r.get=v.get,r.set=v.set,r.write=v.write,r.toString=v.toString,r.toLocaleString=v.toString,r.toJSON=v.toJSON,r.copy=v.copy,r.slice=v.slice,r.readUInt8=v.readUInt8,r.readUInt16LE=v.readUInt16LE,r.readUInt16BE=v.readUInt16BE,r.readUInt32LE=v.readUInt32LE,r.readUInt32BE=v.readUInt32BE,r.readInt8=v.readInt8,r.readInt16LE=v.readInt16LE,r.readInt16BE=v.readInt16BE,r.readInt32LE=v.readInt32LE,r.readInt32BE=v.readInt32BE,r.readFloatLE=v.readFloatLE,r.readFloatBE=v.readFloatBE,r.readDoubleLE=v.readDoubleLE,r.readDoubleBE=v.readDoubleBE,r.writeUInt8=v.writeUInt8,r.writeUInt16LE=v.writeUInt16LE,r.writeUInt16BE=v.writeUInt16BE,r.writeUInt32LE=v.writeUInt32LE,r.writeUInt32BE=v.writeUInt32BE,r.writeInt8=v.writeInt8,r.writeInt16LE=v.writeInt16LE,r.writeInt16BE=v.writeInt16BE,r.writeInt32LE=v.writeInt32LE,r.writeInt32BE=v.writeInt32BE,r.writeFloatLE=v.writeFloatLE,r.writeFloatBE=v.writeFloatBE,r.writeDoubleLE=v.writeDoubleLE,r.writeDoubleBE=v.writeDoubleBE,r.fill=v.fill,r.inspect=v.inspect,r.toArrayBuffer=v.toArrayBuffer,r}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(_,j,L){(function(S,V,y,z,N,O,J,K,q){var y=_("buffer").Buffer,E=4,c=new y(E);c.fill(0),j.exports={hash:function(p,b,g,h){for(var I=b(function(t,u){t.length%E!=0&&(a=t.length+(E-t.length%E),t=y.concat([t,c],a));for(var a,B=[],A=u?t.readInt32BE:t.readInt32LE,x=0;x<t.length;x+=E)B.push(A.call(t,x));return B}(p=y.isBuffer(p)?p:new y(p),h),8*p.length),b=h,s=new y(g),f=b?s.writeInt32BE:s.writeInt32LE,n=0;n<I.length;n++)f.call(s,I[n],4*n,!0);return s}}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(_,j,L){(function(S,V,y,z,N,O,J,K,q){var y=_("buffer").Buffer,E=_("./sha"),c=_("./sha256"),p=_("./rng"),b={sha1:E,sha256:c,md5:_("./md5")},g=64,h=new y(g);function I(t,u){var a=b[t=t||"sha1"],B=[];return a||s("algorithm:",t,"is not yet supported"),{update:function(A){return y.isBuffer(A)||(A=new y(A)),B.push(A),A.length,this},digest:function(A){var x=y.concat(B),x=u?function(v,k,P){y.isBuffer(k)||(k=new y(k)),y.isBuffer(P)||(P=new y(P)),k.length>g?k=v(k):k.length<g&&(k=y.concat([k,h],g));for(var T=new y(g),C=new y(g),X=0;X<g;X++)T[X]=54^k[X],C[X]=92^k[X];return P=v(y.concat([T,P])),v(y.concat([C,P]))}(a,u,x):a(x);return B=null,A?x.toString(A):x}}}function s(){var t=[].slice.call(arguments).join(" ");throw new Error([t,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}h.fill(0),L.createHash=function(t){return I(t)},L.createHmac=I,L.randomBytes=function(t,u){if(!u||!u.call)return new y(p(t));try{u.call(this,void 0,new y(p(t)))}catch(a){u(a)}};var f,n=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],o=function(t){L[t]=function(){s("sorry,",t,"is not implemented yet")}};for(f in n)o(n[f])}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){var y=_("./helpers");function E(s,f){s[f>>5]|=128<<f%32,s[14+(f+64>>>9<<4)]=f;for(var n=1732584193,o=-271733879,t=-1732584194,u=271733878,a=0;a<s.length;a+=16){var B=n,A=o,x=t,v=u,n=p(n,o,t,u,s[a+0],7,-680876936),u=p(u,n,o,t,s[a+1],12,-389564586),t=p(t,u,n,o,s[a+2],17,606105819),o=p(o,t,u,n,s[a+3],22,-1044525330);n=p(n,o,t,u,s[a+4],7,-176418897),u=p(u,n,o,t,s[a+5],12,1200080426),t=p(t,u,n,o,s[a+6],17,-1473231341),o=p(o,t,u,n,s[a+7],22,-45705983),n=p(n,o,t,u,s[a+8],7,1770035416),u=p(u,n,o,t,s[a+9],12,-1958414417),t=p(t,u,n,o,s[a+10],17,-42063),o=p(o,t,u,n,s[a+11],22,-1990404162),n=p(n,o,t,u,s[a+12],7,1804603682),u=p(u,n,o,t,s[a+13],12,-40341101),t=p(t,u,n,o,s[a+14],17,-1502002290),n=b(n,o=p(o,t,u,n,s[a+15],22,1236535329),t,u,s[a+1],5,-165796510),u=b(u,n,o,t,s[a+6],9,-1069501632),t=b(t,u,n,o,s[a+11],14,643717713),o=b(o,t,u,n,s[a+0],20,-373897302),n=b(n,o,t,u,s[a+5],5,-701558691),u=b(u,n,o,t,s[a+10],9,38016083),t=b(t,u,n,o,s[a+15],14,-660478335),o=b(o,t,u,n,s[a+4],20,-405537848),n=b(n,o,t,u,s[a+9],5,568446438),u=b(u,n,o,t,s[a+14],9,-1019803690),t=b(t,u,n,o,s[a+3],14,-187363961),o=b(o,t,u,n,s[a+8],20,1163531501),n=b(n,o,t,u,s[a+13],5,-1444681467),u=b(u,n,o,t,s[a+2],9,-51403784),t=b(t,u,n,o,s[a+7],14,1735328473),n=g(n,o=b(o,t,u,n,s[a+12],20,-1926607734),t,u,s[a+5],4,-378558),u=g(u,n,o,t,s[a+8],11,-2022574463),t=g(t,u,n,o,s[a+11],16,1839030562),o=g(o,t,u,n,s[a+14],23,-35309556),n=g(n,o,t,u,s[a+1],4,-1530992060),u=g(u,n,o,t,s[a+4],11,1272893353),t=g(t,u,n,o,s[a+7],16,-155497632),o=g(o,t,u,n,s[a+10],23,-1094730640),n=g(n,o,t,u,s[a+13],4,681279174),u=g(u,n,o,t,s[a+0],11,-358537222),t=g(t,u,n,o,s[a+3],16,-722521979),o=g(o,t,u,n,s[a+6],23,76029189),n=g(n,o,t,u,s[a+9],4,-640364487),u=g(u,n,o,t,s[a+12],11,-421815835),t=g(t,u,n,o,s[a+15],16,530742520),n=h(n,o=g(o,t,u,n,s[a+2],23,-995338651),t,u,s[a+0],6,-198630844),u=h(u,n,o,t,s[a+7],10,1126891415),t=h(t,u,n,o,s[a+14],15,-1416354905),o=h(o,t,u,n,s[a+5],21,-57434055),n=h(n,o,t,u,s[a+12],6,1700485571),u=h(u,n,o,t,s[a+3],10,-1894986606),t=h(t,u,n,o,s[a+10],15,-1051523),o=h(o,t,u,n,s[a+1],21,-2054922799),n=h(n,o,t,u,s[a+8],6,1873313359),u=h(u,n,o,t,s[a+15],10,-30611744),t=h(t,u,n,o,s[a+6],15,-1560198380),o=h(o,t,u,n,s[a+13],21,1309151649),n=h(n,o,t,u,s[a+4],6,-145523070),u=h(u,n,o,t,s[a+11],10,-1120210379),t=h(t,u,n,o,s[a+2],15,718787259),o=h(o,t,u,n,s[a+9],21,-343485551),n=I(n,B),o=I(o,A),t=I(t,x),u=I(u,v)}return Array(n,o,t,u)}function c(s,f,n,o,t,u){return I((f=I(I(f,s),I(o,u)))<<t|f>>>32-t,n)}function p(s,f,n,o,t,u,a){return c(f&n|~f&o,s,f,t,u,a)}function b(s,f,n,o,t,u,a){return c(f&o|n&~o,s,f,t,u,a)}function g(s,f,n,o,t,u,a){return c(f^n^o,s,f,t,u,a)}function h(s,f,n,o,t,u,a){return c(n^(f|~o),s,f,t,u,a)}function I(s,f){var n=(65535&s)+(65535&f);return(s>>16)+(f>>16)+(n>>16)<<16|65535&n}j.exports=function(s){return y.hash(s,E,16)}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){j.exports=function(y){for(var E,c=new Array(y),p=0;p<y;p++)!(3&p)&&(E=4294967296*Math.random()),c[p]=E>>>((3&p)<<3)&255;return c}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){var y=_("./helpers");function E(b,g){b[g>>5]|=128<<24-g%32,b[15+(g+64>>9<<4)]=g;for(var h,I,s,f=Array(80),n=1732584193,o=-271733879,t=-1732584194,u=271733878,a=-1009589776,B=0;B<b.length;B+=16){for(var A=n,x=o,v=t,k=u,P=a,T=0;T<80;T++){f[T]=T<16?b[B+T]:p(f[T-3]^f[T-8]^f[T-14]^f[T-16],1);var C=c(c(p(n,5),(C=o,I=t,s=u,(h=T)<20?C&I|~C&s:!(h<40)&&h<60?C&I|C&s|I&s:C^I^s)),c(c(a,f[T]),(h=T)<20?1518500249:h<40?1859775393:h<60?-1894007588:-899497514)),a=u,u=t,t=p(o,30),o=n,n=C}n=c(n,A),o=c(o,x),t=c(t,v),u=c(u,k),a=c(a,P)}return Array(n,o,t,u,a)}function c(b,g){var h=(65535&b)+(65535&g);return(b>>16)+(g>>16)+(h>>16)<<16|65535&h}function p(b,g){return b<<g|b>>>32-g}j.exports=function(b){return y.hash(b,E,20,!0)}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){function y(g,h){var I=(65535&g)+(65535&h);return(g>>16)+(h>>16)+(I>>16)<<16|65535&I}function E(g,h){var I,s=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),f=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);g[h>>5]|=128<<24-h%32,g[15+(h+64>>9<<4)]=h;for(var o,t,u=0;u<g.length;u+=16){for(var a=f[0],B=f[1],A=f[2],x=f[3],v=f[4],k=f[5],P=f[6],T=f[7],C=0;C<64;C++)n[C]=C<16?g[C+u]:y(y(y((t=n[C-2],p(t,17)^p(t,19)^b(t,10)),n[C-7]),(t=n[C-15],p(t,7)^p(t,18)^b(t,3))),n[C-16]),I=y(y(y(y(T,p(t=v,6)^p(t,11)^p(t,25)),v&k^~v&P),s[C]),n[C]),o=y(p(o=a,2)^p(o,13)^p(o,22),a&B^a&A^B&A),T=P,P=k,k=v,v=y(x,I),x=A,A=B,B=a,a=y(I,o);f[0]=y(a,f[0]),f[1]=y(B,f[1]),f[2]=y(A,f[2]),f[3]=y(x,f[3]),f[4]=y(v,f[4]),f[5]=y(k,f[5]),f[6]=y(P,f[6]),f[7]=y(T,f[7])}return f}var c=_("./helpers"),p=function(g,h){return g>>>h|g<<32-h},b=function(g,h){return g>>>h};j.exports=function(g){return c.hash(g,E,32,!0)}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){L.read=function(y,E,c,p,u){var g,h,I=8*u-p-1,s=(1<<I)-1,f=s>>1,n=-7,o=c?u-1:0,t=c?-1:1,u=y[E+o];for(o+=t,g=u&(1<<-n)-1,u>>=-n,n+=I;0<n;g=256*g+y[E+o],o+=t,n-=8);for(h=g&(1<<-n)-1,g>>=-n,n+=p;0<n;h=256*h+y[E+o],o+=t,n-=8);if(g===0)g=1-f;else{if(g===s)return h?NaN:1/0*(u?-1:1);h+=Math.pow(2,p),g-=f}return(u?-1:1)*h*Math.pow(2,g-p)},L.write=function(y,E,c,p,b,a){var h,I,s=8*a-b-1,f=(1<<s)-1,n=f>>1,o=b===23?Math.pow(2,-24)-Math.pow(2,-77):0,t=p?0:a-1,u=p?1:-1,a=E<0||E===0&&1/E<0?1:0;for(E=Math.abs(E),isNaN(E)||E===1/0?(I=isNaN(E)?1:0,h=f):(h=Math.floor(Math.log(E)/Math.LN2),E*(p=Math.pow(2,-h))<1&&(h--,p*=2),2<=(E+=1<=h+n?o/p:o*Math.pow(2,1-n))*p&&(h++,p/=2),f<=h+n?(I=0,h=f):1<=h+n?(I=(E*p-1)*Math.pow(2,b),h+=n):(I=E*Math.pow(2,n-1)*Math.pow(2,b),h=0));8<=b;y[c+t]=255&I,t+=u,I/=256,b-=8);for(h=h<<b|I,s+=b;0<s;y[c+t]=255&h,t+=u,h/=256,s-=8);y[c+t-u]|=128*a}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(_,j,L){(function(S,V,H,z,N,O,J,K,q){var y,E,c;function p(){}(S=j.exports={}).nextTick=(E=typeof window<"u"&&window.setImmediate,c=typeof window<"u"&&window.postMessage&&window.addEventListener,E?function(b){return window.setImmediate(b)}:c?(y=[],window.addEventListener("message",function(b){var g=b.source;g!==window&&g!==null||b.data!=="process-tick"||(b.stopPropagation(),0<y.length&&y.shift()())},!0),function(b){y.push(b),window.postMessage("process-tick","*")}):function(b){setTimeout(b,0)}),S.title="browser",S.browser=!0,S.env={},S.argv=[],S.on=p,S.addListener=p,S.once=p,S.off=p,S.removeListener=p,S.removeAllListeners=p,S.emit=p,S.binding=function(b){throw new Error("process.binding is not supported")},S.cwd=function(){return"/"},S.chdir=function(b){throw new Error("process.chdir is not supported")}}).call(this,_("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(ar);var fr=ar.exports;const dr=cr(fr),gr=lr({__proto__:null,default:dr},[fr]);export{gr as o};
